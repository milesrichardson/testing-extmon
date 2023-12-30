(function (a) {
  var O = {};
  function I(T) {
    if (O[T]) return O[T].exports;
    var o = (O[T] = { exports: {}, id: T, loaded: !1 });
    a[T].call(o.exports, o, o.exports, I);
    o.loaded = !0;
    return o.exports;
  }
  I.m = a;
  I.c = O;
  I.p = "";
  return I(0);
})([
  function (a, I, O) {
    "use strict";
    Object.defineProperty(I, "__esModule", { value: !0 });
    var T = O(29),
      o = O(14),
      N = O(1),
      l = O(12),
      s = O(21),
      u = s.default.getLocale(),
      S = "OPTIONS";
    N.default.onExtensionSessionStarted(S);
    var _ = function (D, L) {
      var v = document.getElementById("account"),
        A = document.getElementById("account-info-id"),
        b = document.getElementById("account-info-name");
      if (v) {
        v.style.visibility = "visible";
      }
      if (A && b) {
        if (!L) {
          var z = document.createElement("b");
          z.appendChild(document.createTextNode(T.default.getLocalizedString(u, "OPTIONS_ACCOUNT_INFO", { skypeId: D })));
          A.appendChild(z);
          b.style.display = "none";
        } else {
          var U = document.createElement("b");
          U.appendChild(document.createTextNode(T.default.getLocalizedString(u, "OPTIONS_ACCOUNT_INFO", { skypeId: L })));
          b.appendChild(U);
          A.appendChild(document.createTextNode("(" + D + ")"));
        }
      }
    };
    N.default.getSkypeToken(S).then(function (f) {
      if (f) {
        var D = document.getElementById("account-loading-spinner-container");
        if (D) {
          D.style.visibility = "visible";
        }
        var L = o.default.getMeSkypeId(S, f);
        l.UserProfile.getProfileAsync(f)
          .then(function (v) {
            var A = v ? v.firstname + " " + v.lastname : void 0;
            _(L, A);
          })
          .catch(function () {
            _(L);
          })
          .finally(function () {
            if (D) {
              D.style.display = "none";
            }
          });
      }
    });
    var E = document.getElementById("description-content");
    if (E) {
      E.appendChild(document.createTextNode(T.default.getLocalizedString(u, "OPTIONS_DESCRIPTION_LINEONE")));
      E.appendChild(document.createElement("br"));
      E.appendChild(document.createTextNode(T.default.getLocalizedString(u, "OPTIONS_DESCRIPTION_LINETWO")));
    }
    var P = document.getElementById("description-lineone-title");
    if (P) {
      P.appendChild(document.createTextNode(T.default.getLocalizedString(u, "OPTIONS_DESCRIPTION_CREATETITLE")));
    }
    var d = document.getElementById("description-lineone");
    if (d) {
      d.appendChild(document.createTextNode(T.default.getLocalizedString(u, "OPTIONS_DESCRIPTION_CREATE")));
    }
    var c = document.getElementById("description-linetwo-title");
    if (c) {
      c.appendChild(document.createTextNode(T.default.getLocalizedString(u, "OPTIONS_DESCRIPTION_JOINTITLE")));
    }
    var g = document.getElementById("description-linetwo");
    if (g) {
      g.appendChild(document.createTextNode(T.default.getLocalizedString(u, "OPTIONS_DESCRIPTION_JOIN")));
    }
    var y = document.querySelector("div.heading>h1");
    y.innerText = T.default.getLocalizedString(u, "OPTIONS_HEADING_TITLE");
    var C = document.querySelector("div.company-branding");
    C.innerText = T.default.getLocalizedString(u, "OPTIONS_BRANDING_TEXT");
    var m = document.querySelector("div#about>h1");
    m.innerText = T.default.getLocalizedString(u, "OPTIONS_ABOUT_TITLE");
    var h = document.getElementById("signout-text");
    if (h) {
      h.innerText = T.default.getLocalizedString(u, "OPTIONS_SIGN_OUT");
    }
    var R = document.querySelector("#signout");
    R.addEventListener("click", function () {
      var f = document.getElementById("signout-spinner");
      if (f) {
        f.style.display = "flex";
      }
      o.default.logout();
    });
    window.addEventListener("pagehide", function () {
      N.default.onExtensionSessionEnded(S);
    });
  },
  function (a, I, O) {
    "use strict";
    var o = (function () {
      function c(g, y) {
        for (var C = 0, m; C < y.length; C++) {
          m = y[C];
          m.enumerable = m.enumerable || !1;
          m.configurable = !0;
          if ("value" in m) m.writable = !0;
          Object.defineProperty(g, m.key, m);
        }
      }
      return function (g, y, C) {
        if (y) c(g.prototype, y);
        if (C) c(g, C);
        return g;
      };
    })();
    function T(c, g) {
      if (!(c instanceof g)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var N = O(2),
      l = O(3),
      s = O(7),
      u = O(14),
      S = O(23),
      _ = O(24),
      E = O(25),
      d = (function () {
        function c() {
          T(this, c);
        }
        o(c, null, [
          {
            key: "onExtensionSessionStarted",
            value: function (y) {
              try {
                if (this.sessionInProgress) {
                  this.onExtensionSessionEnded(y);
                }
                this.sessionStartedTimestamp = new Date();
                this.sessionInProgress = !0;
                var C = new _.SessionStartedTelemetryEvent();
                C.origin = y;
                this.ariaPublisher.sendEvent(C);
              } catch (m) {}
            }
          },
          {
            key: "onExtensionSessionEnded",
            value: function (y) {
              try {
                var C;
                this.sessionInProgress = !1;
                if (this.sessionStartedTimestamp) {
                  var m = new Date();
                  C = this.sessionStartedTimestamp.valueOf() - m.valueOf();
                }
                var h = new E.SessionEndedTelemetryEvent();
                h.origin = y;
                if (C) {
                  h.sessionDurationInMs = C;
                }
                this.ariaPublisher.sendEvent(h);
              } catch (R) {}
            }
          },
          {
            key: "onSilentLoginCompleted",
            value: function (y) {
              this.isGuest = y;
            }
          },
          {
            key: "getSkypeToken",
            value: function (y) {
              return u.default.getSkypeToken(y, this.ariaPublisher);
            }
          },
          {
            key: "getEcsAsync",
            value: function () {
              var C = this;
              return new Promise(function (m) {
                if (C.ecs) {
                  m(C.ecs);
                } else {
                  l.default.fetchConfigAsync({ queryParams: { configOption: "PROD" } }).then(function (R) {
                    C.ecs = R;
                    R.featureFlags = R.featureFlags || {};
                    C.ecs = R;
                    C.scheduleEcsUpdate();
                    C.logEcsFetchedAriaEvent();
                    m(C.ecs);
                  });
                }
              });
            }
          },
          {
            key: "scheduleEcsUpdate",
            value: function () {
              var y = this;
              if (this.ecs.ecsUpdateInMinutes) {
                var C = this.ecs.ecsUpdateInMinutes + Math.floor(10 * Math.random()) + 1;
                setTimeout(
                  function () {
                    return y.getEcsAsync("CTX_SCHEDULE");
                  },
                  1e3 * (60 * C)
                );
              }
            }
          },
          {
            key: "logEcsFetchedAriaEvent",
            value: function () {
              var y = new S.EcsFetchTelemetryEvent();
              y.origin = origin;
              this.ariaPublisher.sendEvent(y);
            }
          },
          {
            key: "isGuestUser",
            get: function () {
              return this.isGuest;
            }
          }
        ]);
        return c;
      })();
    I.default = d;
    d.sessionInProgress = !1;
    d.ariaPublisher = new s.AriaPublisher();
    d.isGuest = !0;
    d.sessionId = N.default.create();
    d.defaultMeetNowWidgetBlobPath = "https://secure.skypeassets.com/apollo/0.0.0/meetnowwidget/";
    d.defaultMeetNowWidgetVersion = "1.0.150";
    d.origin = "MEET_NOW_WIDGET";
    d.silentLoginTimeout = 2e3;
    d.migrationKey = "sxt-migrated-to-meet-now-widget-integration";
  },
  function (a, I) {
    "use strict";
    var T = (function () {
      function N(l, s) {
        for (var u = 0, S; u < s.length; u++) {
          S = s[u];
          S.enumerable = S.enumerable || !1;
          S.configurable = !0;
          if ("value" in S) S.writable = !0;
          Object.defineProperty(l, S.key, S);
        }
      }
      return function (l, s, u) {
        if (s) N(l.prototype, s);
        if (u) N(l, u);
        return l;
      };
    })();
    function O(N, l) {
      if (!(N instanceof l)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var o = (function () {
      function N() {
        O(this, N);
      }
      T(N, null, [
        {
          key: "create",
          value: function () {
            for (var s = Array(8), u = 0, S; u < s.length; u += 2) {
              S = Math.floor(4294967296 * Math.random());
              s[u] = this.formatAsHex(65535 & S);
              s[u + 1] = this.formatAsHex(S >>> 16);
              if (3 == u + 1) {
                s[u + 1] = "4" + s[u + 1].substring(1);
              }
            }
            return s[0] + s[1] + "-" + s[2] + "-" + s[3] + "-" + s[4] + "-" + s[5] + s[6] + s[7];
          }
        },
        {
          key: "formatAsHex",
          value: function (s) {
            for (var u = s.toString(16), S = 4 - u.length, _ = 0; _ < S; _++) {
              u = "0" + u;
            }
            return u;
          }
        }
      ]);
      return N;
    })();
    I.default = o;
  },
  function (a, I, O) {
    "use strict";
    var o = (function () {
      function u(S, _) {
        for (var E = 0, P; E < _.length; E++) {
          P = _[E];
          P.enumerable = P.enumerable || !1;
          P.configurable = !0;
          if ("value" in P) P.writable = !0;
          Object.defineProperty(S, P.key, P);
        }
      }
      return function (S, _, E) {
        if (_) u(S.prototype, _);
        if (E) u(S, E);
        return S;
      };
    })();
    function T(u, S) {
      if (!(u instanceof S)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var N = O(4),
      l = O(5),
      s = (function () {
        function u() {
          T(this, u);
        }
        o(u, null, [
          {
            key: "fetchConfigAsync",
            value: function (_) {
              var E = this,
                d = "skype/1.00/skypext" + this.buildQueryString(_);
              this.urls = ["https://a.config.skype.com", "https://b.config.skype.com"].map(function (c) {
                return encodeURI(c) + "/config/v1/" + d;
              });
              return new Promise(function (c, g) {
                E.timeoutAwareFetchAsync(E.urls[0])
                  .then(function (y) {
                    N.default.getWindow().localStorage.setItem(E.CONFIG_CACHE_KEY, JSON.stringify(y));
                    c(y);
                  })
                  .catch(function () {
                    E.timeoutAwareFetchAsync(E.urls[1])
                      .then(function (C) {
                        N.default.getWindow().localStorage.setItem(E.CONFIG_CACHE_KEY, JSON.stringify(C));
                        c(C);
                      })
                      .catch(function () {
                        try {
                          var m = localStorage.getItem(E.CONFIG_CACHE_KEY);
                          if (m) {
                            c(JSON.parse(m));
                          }
                        } catch (h) {
                          g("Configuration service is unreachable and no valid cached config is available: " + h);
                        }
                      });
                  });
              });
            }
          },
          {
            key: "timeoutAwareFetchAsync",
            value: function (_) {
              return new Promise(function (E, P) {
                var d = void 0,
                  c = new Promise(function (y, C) {
                    d = setTimeout(function () {
                      return C(new Error("request timeout"));
                    }, 7500);
                  }),
                  g = new Promise(function (y, C) {
                    l.default
                      .getConfigAsync(_)
                      .then(function (m) {
                        clearTimeout(d);
                        y(m);
                      })
                      .catch(function (m) {
                        C(m);
                      });
                  });
                Promise.race([c, g])
                  .then(function (y) {
                    E(y);
                  })
                  .catch(function (y) {
                    P(y);
                  });
              });
            }
          },
          {
            key: "buildQueryString",
            value: function (_) {
              var E = [],
                P = _.queryParams || {};
              if (_.userId) {
                E.push("id=" + encodeURIComponent(_.userId));
              }
              if (_.clientId) {
                E.push("clientId=" + encodeURIComponent(_.clientId));
              }
              Object.keys(P)
                .sort()
                .forEach(function (d) {
                  E.push([encodeURIComponent(d), encodeURIComponent(P[d])].join("="));
                });
              return 0 === E.length ? "" : "?" + E.join("&");
            }
          }
        ]);
        return u;
      })();
    I.default = s;
    s.CONFIG_CACHE_KEY = "sxt-ecs";
  },
  function (a, I) {
    "use strict";
    var T = (function () {
      function N(l, s) {
        for (var u = 0, S; u < s.length; u++) {
          S = s[u];
          S.enumerable = S.enumerable || !1;
          S.configurable = !0;
          if ("value" in S) S.writable = !0;
          Object.defineProperty(l, S.key, S);
        }
      }
      return function (l, s, u) {
        if (s) N(l.prototype, s);
        if (u) N(l, u);
        return l;
      };
    })();
    function O(N, l) {
      if (!(N instanceof l)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var o = (function () {
      function N() {
        O(this, N);
      }
      T(N, null, [
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
      return N;
    })();
    I.default = o;
  },
  function (a, I, O) {
    "use strict";
    var o = (function () {
      function s(u, S) {
        for (var _ = 0, E; _ < S.length; _++) {
          E = S[_];
          E.enumerable = E.enumerable || !1;
          E.configurable = !0;
          if ("value" in E) E.writable = !0;
          Object.defineProperty(u, E.key, E);
        }
      }
      return function (u, S, _) {
        if (S) s(u.prototype, S);
        if (_) s(u, _);
        return u;
      };
    })();
    function T(s, u) {
      if (!(s instanceof u)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var N = O(6),
      l = (function () {
        function s() {
          T(this, s);
        }
        o(s, null, [
          {
            key: "getConfigAsync",
            value: function (S) {
              return new Promise(function (_, E) {
                if (sessionStorage.getItem("sxt_ecs_jsonp")) {
                  N.fetch(S)
                    .then(function (P) {
                      _(P);
                    })
                    .catch(function (P) {
                      return E(P);
                    });
                } else {
                  fetch(S)
                    .then(function (P) {
                      P.json().then(function (d) {
                        return _(d);
                      });
                    })
                    .catch(function (P) {
                      E(P);
                    });
                }
              });
            }
          }
        ]);
        return s;
      })();
    I.default = l;
  },
  function (a, I, O) {
    "use strict";
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.fetch = void 0;
    var S = O(4);
    I.fetch = function (E) {
      return new Promise(function (P, d) {
        try {
          var c =
            E +
            (/\?/.test(E) ? "&" : "?") +
            "callback=" +
            o(function (g) {
              return P(g);
            }, "skype_sxt_ecs_callback");
          u(c, function () {
            return d();
          });
        } catch (g) {
          d(g);
        }
      });
    };
    function o(E, P) {
      var d = S.default.getWindow();
      if (P) {
        return l(E, P, d);
      } else {
        return N(E, d);
      }
    }
    function N(E, P) {
      var d;
      do {
        d = (Math.random().toString(36) + "00000000000000000").slice(2, 12);
      } while (d in P);
      P[d] = E;
      return d;
    }
    function l(E, P, d) {
      var c = P.split("."),
        g = s(c.slice(0, -1), d),
        y = c.pop();
      if (!y) {
        throw Error("Invalid name:" + P);
      }
      g[y] = E;
      return P;
    }
    function s(E, P) {
      var d = P;
      E.forEach(function (c) {
        if (!(c in d)) {
          d[c] = {};
        }
        d = d[c];
      });
      return d;
    }
    function u(E, P) {
      var d = S.default.getDocument(),
        c = d.createElement("script");
      c.src = E;
      c.type = "text/javascript";
      c.async = !0;
      c.onerror = P;
      d.getElementsByTagName("head")[0].appendChild(c);
    }
  },
  function (a, I, O) {
    "use strict";
    var o = (function () {
      function d(c, g) {
        for (var y = 0, C; y < g.length; y++) {
          C = g[y];
          C.enumerable = C.enumerable || !1;
          C.configurable = !0;
          if ("value" in C) C.writable = !0;
          Object.defineProperty(c, C.key, C);
        }
      }
      return function (c, g, y) {
        if (g) d(c.prototype, g);
        if (y) d(c, y);
        return c;
      };
    })();
    function T(d, c) {
      if (!(d instanceof c)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.AriaPublisher = void 0;
    var N = O(8),
      l = O(2),
      s = O(9),
      u = O(10),
      S = O(11),
      _ = O(1),
      E = O(12),
      P = (function () {
        function d() {
          T(this, d);
        }
        o(d, [
          {
            key: "sendEvent",
            value: function (g) {
              this.sendTelemetryReport({ event: g, customProperties: g.getCustomProperties() });
            }
          },
          {
            key: "sendTelemetryReport",
            value: function (g) {
              var y = this,
                C = window,
                m = !!C.microsoft && !!C.microsoft.applications && !!C.microsoft.applications.telemetry;
              if (!m) {
                var h = { type: u.SxtEventType.TelemetryEventReport, data: g };
                chrome.runtime.sendMessage(h);
                return;
              }
              if (d.disabled) {
                return;
              }
              var R = window.microsoft.applications.telemetry,
                f = new R.EventProperties();
              f.name = g.event.name;
              f.eventType = "general";
              f.timestamp = g.event.timestamp;
              _.default
                .getEcsAsync("ARIAPUB_SEND")
                .then(function (D) {
                  y.addSharedProperties(f, g.event, D);
                  if (g.customProperties) {
                    g.customProperties.forEach(function (A) {
                      y.addProperty(f, A);
                    });
                  }
                  var L = new Date();
                  if (d.anchor.getMinutes() < L.getMinutes()) {
                    d.anchor = L;
                    d.counter = 0;
                  }
                  d.counter++;
                  var v = D.spinningTreshold || 100;
                  if (d.counter > v) {
                    d.disabled = !0;
                    f.name = "qos_errors_spinning";
                  }
                  y.getLogger(D).logEvent(f);
                })
                .catch(function () {
                  return void 0;
                });
            }
          },
          {
            key: "addSharedProperties",
            value: function (g, y, C) {
              var m = new E.UserProfile();
              this.addProperty(g, S.TelemetryPropertyValue.Create("sessionId", _.default.sessionId, s.PIIType.NotSet));
              this.addProperty(g, S.TelemetryPropertyValue.Create("origin", y.origin, s.PIIType.NotSet));
              this.addProperty(g, S.TelemetryPropertyValue.Create("platform", y.platform, s.PIIType.NotSet));
              this.addProperty(g, S.TelemetryPropertyValue.Create("environment", y.environment, s.PIIType.NotSet));
              this.addProperty(g, S.TelemetryPropertyValue.Create("screenHeight", window.screen.height, s.PIIType.NotSet));
              this.addProperty(g, S.TelemetryPropertyValue.Create("screenWidth", window.screen.width, s.PIIType.NotSet));
              this.addProperty(g, S.TelemetryPropertyValue.Create("version", N.appVersion, s.PIIType.NotSet));
              this.addProperty(g, S.TelemetryPropertyValue.Create("ecsVersion", C.version, s.PIIType.NotSet));
              this.addProperty(g, S.TelemetryPropertyValue.Create("hasLoggedIn", !!m.lastLoggedDate, s.PIIType.NotSet));
              var h = localStorage.getItem("sxt-fingerprint");
              if (!h) {
                h = l.default.create();
                localStorage.setItem("sxt-fingerprint", h);
              }
              this.addProperty(g, S.TelemetryPropertyValue.Create("fingerprint", h, s.PIIType.Identity));
              var R = "N/A";
              if (_.default.isGuestUser) {
                R = "guest";
              } else {
                R = "user";
              }
              this.addProperty(g, S.TelemetryPropertyValue.Create("identityType", R, s.PIIType.NotSet));
            }
          },
          {
            key: "getLogger",
            value: function (g) {
              if (d.logger) {
                return d.logger;
              }
              var y = window.microsoft.applications.telemetry;
              y.LogManager.initialize(g.tenantId);
              d.logger = new y.Logger(g.tenantId);
              return d.logger;
            }
          },
          {
            key: "addProperty",
            value: function (g, y) {
              g.setProperty(y.key, y.value + "", y.type);
            }
          }
        ]);
        return d;
      })();
    I.AriaPublisher = P;
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
  function (a, I) {
    "use strict";
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.PIIType = void 0;
    var O;
    (function (T) {
      T[(T.NotSet = 0)] = "NotSet";
      T[(T.DistinguishedName = 1)] = "DistinguishedName";
      T[(T.Identity = 10)] = "Identity";
    })((O = I.PIIType || (I.PIIType = {})));
  },
  function (a, I) {
    "use strict";
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.SxtEventType = void 0;
    var O;
    (function (T) {
      T[(T.ContentScriptReady = 1)] = "ContentScriptReady";
      T[(T.PopupScriptReady = 2)] = "PopupScriptReady";
      T[(T.LoginSuccess = 3)] = "LoginSuccess";
      T[(T.LoginFailed = 4)] = "LoginFailed";
      T[(T.SilentLoginRequested = 5)] = "SilentLoginRequested";
      T[(T.SilentLoginSuccess = 6)] = "SilentLoginSuccess";
      T[(T.SilentLoginFailed = 7)] = "SilentLoginFailed";
      T[(T.Logout = 8)] = "Logout";
      T[(T.RequestMeetingLink = 9)] = "RequestMeetingLink";
      T[(T.TelemetryEventReport = 10)] = "TelemetryEventReport";
      T[(T.DocumentEventDispatch = 11)] = "DocumentEventDispatch";
      T[(T.MessageBusDispatch = 12)] = "MessageBusDispatch";
    })((O = I.SxtEventType || (I.SxtEventType = {})));
  },
  function (a, I) {
    "use strict";
    var T = (function () {
      function N(l, s) {
        for (var u = 0, S; u < s.length; u++) {
          S = s[u];
          S.enumerable = S.enumerable || !1;
          S.configurable = !0;
          if ("value" in S) S.writable = !0;
          Object.defineProperty(l, S.key, S);
        }
      }
      return function (l, s, u) {
        if (s) N(l.prototype, s);
        if (u) N(l, u);
        return l;
      };
    })();
    function O(N, l) {
      if (!(N instanceof l)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.TelemetryPropertyValue = void 0;
    var o = (function () {
      function N() {
        O(this, N);
      }
      T(N, null, [
        {
          key: "Create",
          value: function (s, u, S) {
            var _ = new N();
            _.key = s;
            _.value = u;
            _.type = S;
            return _;
          }
        }
      ]);
      return N;
    })();
    I.TelemetryPropertyValue = o;
  },
  function (a, I, O) {
    "use strict";
    var o = (function () {
      function s(u, S) {
        for (var _ = 0, E; _ < S.length; _++) {
          E = S[_];
          E.enumerable = E.enumerable || !1;
          E.configurable = !0;
          if ("value" in E) E.writable = !0;
          Object.defineProperty(u, E.key, E);
        }
      }
      return function (u, S, _) {
        if (S) s(u.prototype, S);
        if (_) s(u, _);
        return u;
      };
    })();
    function T(s, u) {
      if (!(s instanceof u)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.UserProfile = void 0;
    var N = O(13),
      l = (function () {
        function s() {
          T(this, s);
          this.ACT_LASTLOGIN = "sxt-profile-lastLog";
        }
        o(
          s,
          [
            {
              key: "lastLoggedDate",
              get: function () {
                var S = localStorage.getItem(this.ACT_LASTLOGIN);
                if (!S) {
                  return;
                }
                return new Date(JSON.parse(S));
              },
              set: function (S) {
                if (S) {
                  localStorage.setItem(this.ACT_LASTLOGIN, JSON.stringify(S));
                }
              }
            }
          ],
          [
            {
              key: "getProfileAsync",
              value: function (S) {
                var E = fetch(this.PROFILE_SELF_API, { credentials: "include", headers: { "x-skypetoken": S } }).then(function (P) {
                  return P.text()
                    .then(
                      function (d) {
                        if (d) {
                          return JSON.parse(d);
                        }
                      },
                      function () {}
                    )
                    .catch(function () {});
                });
                return (0, N.raceTimer)(E, 2e3);
              }
            }
          ]
        );
        return s;
      })();
    I.UserProfile = l;
    l.PROFILE_SELF_API = "https://profile.skype.com/profile/v1/users/self/profile";
  },
  function (a, I) {
    "use strict";
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.raceTimer = void 0;
    I.raceTimer = function (T, o) {
      return new Promise(function (N, l) {
        var s = setTimeout(function () {
          l(new Error("Timeout after " + o + "ms"));
        }, o);
        return null === T || void 0 === T
          ? void 0
          : T.then(
              function (u) {
                clearTimeout(s);
                N(u);
              },
              function (u) {
                clearTimeout(s);
                l(u);
              }
            );
      });
    };
  },
  function (a, I, O) {
    "use strict";
    var o = (function () {
      function P(d, c) {
        for (var g = 0, y; g < c.length; g++) {
          y = c[g];
          y.enumerable = y.enumerable || !1;
          y.configurable = !0;
          if ("value" in y) y.writable = !0;
          Object.defineProperty(d, y.key, y);
        }
      }
      return function (d, c, g) {
        if (c) P(d.prototype, c);
        if (g) P(d, g);
        return d;
      };
    })();
    function T(P, d) {
      if (!(P instanceof d)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var N = O(15),
      l = O(17),
      s = O(4),
      u = O(19),
      S = O(20),
      _ = O(21),
      E = (function () {
        function P() {
          T(this, P);
        }
        o(P, null, [
          {
            key: "getMeSkypeId",
            value: function (c, g) {
              return _.default.getSkypeId(g);
            }
          },
          {
            key: "getSkypeToken",
            value: function (c, g) {
              var y = this,
                C = Date.now();
              return new Promise(function (m, h) {
                var R = y.getTokenDataFromCache();
                if (R && R.token) {
                  m(R.token);
                } else {
                  l.default
                    .fetchAsync({
                      client_id: u.default.SILENT_LOGIN_CLIENT_ID,
                      redirect_uri: u.default.SILENT_LOGIN_REDIRECT_PAGE_URI,
                      microsoft: !0,
                      use_azure: !0,
                      env: "live"
                    })
                    .then(function (f) {
                      y.setTokenDataToCache(f, 36000);
                      var D = new N.AutoLoginTelemetryEvent();
                      D.result = "AUTH_OK";
                      D.ttc = Date.now() - C;
                      D.origin = c;
                      null === g || void 0 === g ? void 0 : g.sendEvent(D);
                      m(f);
                    })
                    .catch(function (f) {
                      var D = new N.AutoLoginTelemetryEvent();
                      D.result = "AUTH_FAILED";
                      D.ttc = Date.now() - C;
                      D.origin = c;
                      null === g || void 0 === g ? void 0 : g.sendEvent(D);
                      h(f);
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
            value: function (c) {
              var g = this.LOGOUT_PAGE_URL;
              g += "?";
              g += "&client_id=" + u.default.SILENT_LOGIN_CLIENT_ID;
              g += "&redirect_uri=" + u.default.SILENT_LOGIN_REDIRECT_PAGE_URI;
              g += "&redirect=false";
              g += "&response_type=token";
              window.location.href = g;
              var y = new S.LogoutTelemetryEvent();
              null === c || void 0 === c ? void 0 : c.sendEvent(y);
            }
          },
          {
            key: "setTokenDataToCache",
            value: function (c, g, y) {
              var C = 0;
              if (g) {
                C = Date.now() + 1e3 * g;
              }
              this.session.setItem(u.default.SKYPE_TOKEN_KEY, JSON.stringify({ token: c, expiresAt: C, isGuest: y }));
            }
          },
          {
            key: "getTokenDataFromCache",
            value: function () {
              if (!this.tokenData) {
                try {
                  var c = this.session.getItem(u.default.SKYPE_TOKEN_KEY);
                  if (c) {
                    this.tokenData = JSON.parse(c);
                  }
                } catch (g) {
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
    I.default = E;
    E.session = s.default.getWindow().sessionStorage;
    E.LOGOUT_PAGE_URL = "https://login.skype.com/logout";
  },
  function (a, I, O) {
    "use strict";
    var l = (function () {
      function E(P, d) {
        for (var c = 0, g; c < d.length; c++) {
          g = d[c];
          g.enumerable = g.enumerable || !1;
          g.configurable = !0;
          if ("value" in g) g.writable = !0;
          Object.defineProperty(P, g.key, g);
        }
      }
      return function (P, d, c) {
        if (d) E(P.prototype, d);
        if (c) E(P, c);
        return P;
      };
    })();
    function T(E, P) {
      if (!(E instanceof P)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function o(E, P) {
      if (!E) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return P && ("object" == typeof P || "function" == typeof P) ? P : E;
    }
    function N(E, P) {
      if ("function" != typeof P && null !== P) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof P);
      }
      E.prototype = Object.create(P && P.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } });
      if (P) Object.setPrototypeOf ? Object.setPrototypeOf(E, P) : (E.__proto__ = P);
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.AutoLoginTelemetryEvent = void 0;
    var s = O(9),
      u = O(16),
      S = O(11),
      _ = (function (E) {
        N(P, E);
        function P() {
          T(this, P);
          return o(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, "qos_autologin_complete", "popup"));
        }
        l(P, [
          {
            key: "getCustomProperties",
            value: function () {
              var c = [];
              c.push(S.TelemetryPropertyValue.Create("result", this.result, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("ttc", this.ttc, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("origin", this.origin, s.PIIType.NotSet));
              return c;
            }
          }
        ]);
        return P;
      })(u.TelemetryEvent);
    I.AutoLoginTelemetryEvent = _;
  },
  function (a, I) {
    "use strict";
    function T(s, u) {
      if (!(s instanceof u)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.TelemetryEvent = void 0;
    var N = "PROD";
    I.TelemetryEvent = function s(u, S) {
      T(this, s);
      this.name = u;
      this.timestamp = Date.now();
      this.origin = S;
      this.platform = "chrome";
      this.environment = N;
      this.environment = N;
    };
  },
  function (a, I, O) {
    "use strict";
    var o = (function () {
      function s(u, S) {
        for (var _ = 0, E; _ < S.length; _++) {
          E = S[_];
          E.enumerable = E.enumerable || !1;
          E.configurable = !0;
          if ("value" in E) E.writable = !0;
          Object.defineProperty(u, E.key, E);
        }
      }
      return function (u, S, _) {
        if (S) s(u.prototype, S);
        if (_) s(u, _);
        return u;
      };
    })();
    function T(s, u) {
      if (!(s instanceof u)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var N = O(18),
      l = (function () {
        function s() {
          T(this, s);
        }
        o(s, null, [
          {
            key: "fetchAsync",
            value: function (S) {
              this.settings = this.copyProperty(this.settings, S);
              return this.timeoutAwareFetchAsync(this.getUrl(this.endpoint));
            }
          },
          {
            key: "copyProperty",
            value: function (S, _) {
              for (var E in S) {
                if (_.hasOwnProperty(E)) {
                  S[E] = _[E];
                }
              }
              return S;
            }
          },
          {
            key: "getUrl",
            value: function (S) {
              var _ = new Date().getTime(),
                E = this.loginDomains,
                d = {
                  response_type: "postmessage",
                  client_id: this.settings.client_id,
                  redirect_uri: this.settings.redirect_uri,
                  state: "silentloginsdk_" + _,
                  _accept: this.endpointVersion,
                  _nc: _,
                  site_name: "lw.skype.com",
                  wa: "wsignin1.0"
                };
              if (this.settings.microsoft) {
                d.partner = "999";
                E = this.settings.use_azure ? this.azureLoginDomains : this.loginDomains;
              }
              var c = E[this.settings.env] || E.live;
              return c + S + "?" + this.createQuery(d);
            }
          },
          {
            key: "createQuery",
            value: function (S) {
              var _ = [];
              for (var E in S) {
                if (S.hasOwnProperty(E)) {
                  _.push(encodeURIComponent(E) + "=" + encodeURIComponent(S[E]));
                }
              }
              return _.join("&");
            }
          },
          {
            key: "timeoutAwareFetchAsync",
            value: function (S) {
              var _ = this,
                E = this.timeout;
              return new Promise(function (P, d) {
                var c = void 0,
                  g = new Promise(function (C, m) {
                    c = setTimeout(function () {
                      return m(new Error("request timeout"));
                    }, E);
                  }),
                  y = new Promise(function (C, m) {
                    fetch(S, { credentials: "include" })
                      .then(function (h) {
                        h.text().then(function (R) {
                          var f;
                          clearTimeout(c);
                          var D = new DOMParser(),
                            L = N.default.createOrUpdateTrustedTypesPolicy(void 0, function (j) {
                              return j;
                            }),
                            v = null !== (f = null === L || void 0 === L ? void 0 : L.createHTML(R)) && void 0 !== f ? f : R,
                            A = D.parseFromString(v, "text/html"),
                            b = A.getElementsByTagName("input"),
                            z = b.t,
                            U = b.ANON,
                            G = b.NAP;
                          if (z && U && G) {
                            _.msaCallBackAsync(z.value, U.value, G.value)
                              .then(function (j) {
                                C(j);
                              })
                              .catch(function (j) {
                                m(j);
                              });
                          } else {
                            m();
                          }
                        });
                      })
                      .catch(function (h) {
                        m(h);
                      });
                  });
                Promise.race([g, y])
                  .then(function (C) {
                    P(C);
                  })
                  .catch(function (C) {
                    d(C);
                  });
              });
            }
          },
          {
            key: "msaCallBackAsync",
            value: function (S, _, E) {
              var P = this;
              return new Promise(function (d, c) {
                var g = new FormData();
                g.append("NAP", E);
                g.append("ANON", _);
                g.append("t", S);
                var y = P.getUrl(P.msaCallback);
                fetch(y, { method: "POST", body: g })
                  .then(function (C) {
                    return C.text();
                  })
                  .then(function (C) {
                    var m = /"skypetoken":"(.*?)"/g.exec(C);
                    if (m) {
                      d(m[1]);
                    } else {
                      c();
                    }
                  })
                  .catch(function (C) {
                    c(C);
                  });
              });
            }
          }
        ]);
        return s;
      })();
    I.default = l;
    l.loginDomains = { pre: "https://prelogin.skype.net", qa: "https://qalogin.skype.net", live: "https://login.skype.com" };
    l.azureLoginDomains = { pre: "https://a.pre.lw.skype.net", qa: "https://a.qa.lw.skype.net", live: "https://a.lw.skype.com" };
    l.endpoint = "/login/silent";
    l.msaCallback = "/login/silent/MsaCallback";
    l.endpointVersion = "1.0";
    l.timeout = 2e4;
    l.settings = { env: "live", client_id: "", redirect_uri: "", microsoft: !1, use_azure: !1 };
  },
  function (a, I) {
    "use strict";
    var T = (function () {
      function N(l, s) {
        for (var u = 0, S; u < s.length; u++) {
          S = s[u];
          S.enumerable = S.enumerable || !1;
          S.configurable = !0;
          if ("value" in S) S.writable = !0;
          Object.defineProperty(l, S.key, S);
        }
      }
      return function (l, s, u) {
        if (s) N(l.prototype, s);
        if (u) N(l, u);
        return l;
      };
    })();
    function O(N, l) {
      if (!(N instanceof l)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var o = (function () {
      function N() {
        O(this, N);
      }
      T(N, null, [
        {
          key: "createOrUpdateTrustedTypesPolicy",
          value: function (s, u, S) {
            var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : this.meetNowWidgetTrustedTypesPolicyName,
              E;
            if (!!this.supportsTrustedTypes) {
              return null === (E = window.trustedTypes) || void 0 === E
                ? void 0
                : E.createPolicy(_, { createScriptURL: s, createHTML: u, createScript: S });
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
      return N;
    })();
    I.default = o;
    o.meetNowWidgetTrustedTypesPolicyName = "meetNowWidgetPolicy";
  },
  function (a, I) {
    "use strict";
    function O(o, N) {
      if (!(o instanceof N)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var T = function o() {
      O(this, o);
    };
    I.default = T;
    T.APP_ID = "sxt";
    T.SKYPE_TOKEN_KEY = "STX_SKYPE_TOKEN";
    T.HEARTBEAT_KEY = "sxt-heartbeat-time";
    T.FINGERPRINT_KEY = "sxt-fingerprint";
    T.HEARTBEAT_INTERVAL = 60000;
    T.SILENT_LOGIN_CLIENT_ID = "370873";
    T.SILENT_LOGIN_REDIRECT_PAGE_URI = "https://latest-swx.cdn.skype.com/lwc/connect.html?cbust=0.722";
    T.DEFAULT_LOCALE = "en-us";
  },
  function (a, I, O) {
    "use strict";
    var l = (function () {
      function E(P, d) {
        for (var c = 0, g; c < d.length; c++) {
          g = d[c];
          g.enumerable = g.enumerable || !1;
          g.configurable = !0;
          if ("value" in g) g.writable = !0;
          Object.defineProperty(P, g.key, g);
        }
      }
      return function (P, d, c) {
        if (d) E(P.prototype, d);
        if (c) E(P, c);
        return P;
      };
    })();
    function T(E, P) {
      if (!(E instanceof P)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function o(E, P) {
      if (!E) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return P && ("object" == typeof P || "function" == typeof P) ? P : E;
    }
    function N(E, P) {
      if ("function" != typeof P && null !== P) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof P);
      }
      E.prototype = Object.create(P && P.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } });
      if (P) Object.setPrototypeOf ? Object.setPrototypeOf(E, P) : (E.__proto__ = P);
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.LogoutTelemetryEvent = void 0;
    var s = O(9),
      u = O(16),
      S = O(11),
      _ = (function (E) {
        N(P, E);
        function P() {
          T(this, P);
          var d = o(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, "qos_logout_options", "contentscript"));
          d.trigger = "OPTIONS";
          return d;
        }
        l(P, [
          {
            key: "getCustomProperties",
            value: function () {
              var c = [];
              c.push(S.TelemetryPropertyValue.Create("trigger", this.trigger, s.PIIType.NotSet));
              return c;
            }
          }
        ]);
        return P;
      })(u.TelemetryEvent);
    I.LogoutTelemetryEvent = _;
  },
  function (a, I, O) {
    "use strict";
    var o = (function () {
      function s(u, S) {
        for (var _ = 0, E; _ < S.length; _++) {
          E = S[_];
          E.enumerable = E.enumerable || !1;
          E.configurable = !0;
          if ("value" in E) E.writable = !0;
          Object.defineProperty(u, E.key, E);
        }
      }
      return function (u, S, _) {
        if (S) s(u.prototype, S);
        if (_) s(u, _);
        return u;
      };
    })();
    function T(s, u) {
      if (!(s instanceof u)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var N = O(22),
      l = (function () {
        function s() {
          T(this, s);
        }
        o(s, null, [
          {
            key: "getSkypeId",
            value: function (S) {
              var _ = S.substring(S.indexOf(".") + 1);
              _ = _.substring(0, _.indexOf("."));
              try {
                return JSON.parse(atob(_)).skypeid;
              } catch (E) {
                return "";
              }
            }
          },
          {
            key: "getLocale",
            value: function () {
              var S = navigator.language;
              if (document && document.documentElement.lang) {
                S = document.documentElement.lang;
              }
              return N.default.getNormalizedLocale(S);
            }
          },
          {
            key: "getSkypeIdWithoutPrefix",
            value: function (S) {
              if (!S) {
                return;
              }
              var _ = /^\d{1,2}:(.*)/.exec(S);
              if (_ && 1 < _.length) {
                return _[1];
              } else {
                return S;
              }
            }
          },
          {
            key: "areSame",
            value: function (S, _) {
              if (S) {
                if (_) {
                  if (S.length !== _.length) {
                    return !1;
                  }
                  for (var E = 0; E < S.length; E++) {
                    if (S[E] !== _[E]) {
                      return !1;
                    }
                  }
                  return !0;
                }
                return !1;
              }
              return !_;
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
            value: function (S) {
              var _ = document.createElement("a");
              _.href = S;
              return _.port + _.host + _.pathname;
            }
          },
          {
            key: "getHost",
            value: function (S) {
              var _ = document.createElement("a");
              _.href = S;
              return _.host;
            }
          },
          {
            key: "getHash",
            value: function (S) {
              var _ = 0,
                E = void 0,
                P;
              if (0 === S.length) {
                return _;
              }
              for (E = 0; E < S.length; E++) {
                P = S.charCodeAt(E);
                _ = (_ << 5) - _ + P;
                _ |= 0;
              }
              return _;
            }
          },
          {
            key: "matches",
            value: function (S, _) {
              if (S.matches) {
                return S.matches(_);
              }
              if (S.webkitMatchesSelector) {
                return S.webkitMatchesSelector(_);
              }
              return null;
            }
          },
          { key: "debug", value: function () {} },
          {
            key: "oneTimeSubscribe",
            value: function (S, _, E) {
              var P = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : !1;
              if (S.getAttribute("sxt-click")) {
                return;
              }
              S.setAttribute("sxt-click", "true");
              S.addEventListener(_, E, P);
            }
          },
          {
            key: "unscribeEventListener",
            value: function (S, _, E) {
              var P = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : !1;
              if (S.getAttribute("sxt-click")) {
                S.removeAttribute("sxt-click");
              }
              S.removeEventListener(_, E, P);
            }
          },
          {
            key: "findMostRelevantElement",
            value: function (S, _) {
              if (0 === _.length) {
                return null;
              }
              if (1 === _.length) {
                return _[0];
              }
              for (var E = _[0], P = this.getNearestCommonAncestorDistance(S, E), d = 1, c; d < _.length; d++) {
                c = this.getNearestCommonAncestorDistance(S, _[d]);
                if (0 > c) {
                  continue;
                }
                if (0 > P || c < P) {
                  E = _[d];
                  P = c;
                }
              }
              return E;
            }
          },
          {
            key: "getAncestors",
            value: function (S) {
              var _ = [];
              for (; S; S = S.parentElement) {
                _.unshift(S);
              }
              return _;
            }
          },
          {
            key: "getEcsConfigVariableValue",
            value: function (S, _, E) {
              var P;
              if (S.configVariablesDelta) {
                P = S.configVariablesDelta.find(function (d) {
                  return d.key === _;
                });
                if (P) {
                  return P.value;
                }
              }
              if (S.configVariablesGama) {
                P = S.configVariablesGama.find(function (d) {
                  return d.key === _;
                });
                if (P) {
                  return P.value;
                }
              }
              if (S.configVariablesBeta) {
                P = S.configVariablesBeta.find(function (d) {
                  return d.key === _;
                });
                if (P) {
                  return P.value;
                }
              }
              if (S.configVariablesAlpha) {
                P = S.configVariablesAlpha.find(function (d) {
                  return d.key === _;
                });
                if (P) {
                  return P.value;
                }
              }
              if (S.configVariables) {
                P = S.configVariables.find(function (d) {
                  return d.key === _;
                });
                if (P) {
                  return P.value;
                }
              }
              if (E) {
                return E;
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
            value: function (S, _) {
              var E = this.getAncestors(S),
                P = this.getAncestors(_);
              if (E[0] !== P[0]) {
                return -1;
              }
              for (var d = E.length - 1, c = d; 0 <= c; c--) {
                if (-1 < P.indexOf(E[c])) {
                  return d - c;
                }
              }
              return -1;
            }
          }
        ]);
        return s;
      })();
    I.default = l;
  },
  function (a, I) {
    "use strict";
    var T = (function () {
      function l(s, u) {
        for (var S = 0, _; S < u.length; S++) {
          _ = u[S];
          _.enumerable = _.enumerable || !1;
          _.configurable = !0;
          if ("value" in _) _.writable = !0;
          Object.defineProperty(s, _.key, _);
        }
      }
      return function (s, u, S) {
        if (u) l(s.prototype, u);
        if (S) l(s, S);
        return s;
      };
    })();
    function O(l, s) {
      if (!(l instanceof s)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var o = [
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
      N = (function () {
        function l() {
          O(this, l);
        }
        T(l, null, [
          {
            key: "getNormalizedLocale",
            value: function (u) {
              var S = this.getMappingByLanguage(u);
              if (S) {
                return S.defaultLocale;
              } else {
                var _ = u.lastIndexOf("-");
                if (-1 < _) {
                  return this.getNormalizedLocale(u.substring(0, _));
                }
              }
              return u;
            }
          },
          {
            key: "getMappingByLanguage",
            value: function (u) {
              for (var S = 0; S < o.length; S++) {
                if (o[S].language.toLowerCase() === u.toLowerCase()) {
                  return o[S];
                }
              }
              return null;
            }
          }
        ]);
        return l;
      })();
    I.default = N;
  },
  function (a, I, O) {
    "use strict";
    var l = (function () {
      function E(P, d) {
        for (var c = 0, g; c < d.length; c++) {
          g = d[c];
          g.enumerable = g.enumerable || !1;
          g.configurable = !0;
          if ("value" in g) g.writable = !0;
          Object.defineProperty(P, g.key, g);
        }
      }
      return function (P, d, c) {
        if (d) E(P.prototype, d);
        if (c) E(P, c);
        return P;
      };
    })();
    function T(E, P) {
      if (!(E instanceof P)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function o(E, P) {
      if (!E) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return P && ("object" == typeof P || "function" == typeof P) ? P : E;
    }
    function N(E, P) {
      if ("function" != typeof P && null !== P) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof P);
      }
      E.prototype = Object.create(P && P.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } });
      if (P) Object.setPrototypeOf ? Object.setPrototypeOf(E, P) : (E.__proto__ = P);
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.EcsFetchTelemetryEvent = void 0;
    var s = O(9),
      u = O(16),
      S = O(11),
      _ = (function (E) {
        N(P, E);
        function P() {
          T(this, P);
          return o(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, "kpi_extension_ecsfetch", "popup"));
        }
        l(P, [
          {
            key: "getCustomProperties",
            value: function () {
              var c = [];
              c.push(S.TelemetryPropertyValue.Create("origin", this.origin, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("period", this.period, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("version", this.version, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("featureBackpack", this.featureBackpack, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("featureCards", this.featureCards, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("featureChat", this.featureChat, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("featureSwc", this.featureSwc, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("featureOnboarding", this.featureOnboarding, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("featureFeedback", this.featureFeedback, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("featureLegacyShare", this.featureLegacyShare, s.PIIType.NotSet));
              return c;
            }
          }
        ]);
        return P;
      })(u.TelemetryEvent);
    I.EcsFetchTelemetryEvent = _;
  },
  function (a, I, O) {
    "use strict";
    var l = (function () {
      function E(P, d) {
        for (var c = 0, g; c < d.length; c++) {
          g = d[c];
          g.enumerable = g.enumerable || !1;
          g.configurable = !0;
          if ("value" in g) g.writable = !0;
          Object.defineProperty(P, g.key, g);
        }
      }
      return function (P, d, c) {
        if (d) E(P.prototype, d);
        if (c) E(P, c);
        return P;
      };
    })();
    function T(E, P) {
      if (!(E instanceof P)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function o(E, P) {
      if (!E) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return P && ("object" == typeof P || "function" == typeof P) ? P : E;
    }
    function N(E, P) {
      if ("function" != typeof P && null !== P) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof P);
      }
      E.prototype = Object.create(P && P.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } });
      if (P) Object.setPrototypeOf ? Object.setPrototypeOf(E, P) : (E.__proto__ = P);
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.SessionStartedTelemetryEvent = void 0;
    var s = O(9),
      u = O(16),
      S = O(11),
      _ = (function (E) {
        N(P, E);
        function P() {
          T(this, P);
          return o(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, "kpi_session_started", "popup"));
        }
        l(P, [
          {
            key: "getCustomProperties",
            value: function () {
              var c = [];
              c.push(S.TelemetryPropertyValue.Create("origin", this.origin, s.PIIType.NotSet));
              return c;
            }
          }
        ]);
        return P;
      })(u.TelemetryEvent);
    I.SessionStartedTelemetryEvent = _;
  },
  function (a, I, O) {
    "use strict";
    var l = (function () {
      function E(P, d) {
        for (var c = 0, g; c < d.length; c++) {
          g = d[c];
          g.enumerable = g.enumerable || !1;
          g.configurable = !0;
          if ("value" in g) g.writable = !0;
          Object.defineProperty(P, g.key, g);
        }
      }
      return function (P, d, c) {
        if (d) E(P.prototype, d);
        if (c) E(P, c);
        return P;
      };
    })();
    function T(E, P) {
      if (!(E instanceof P)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function o(E, P) {
      if (!E) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return P && ("object" == typeof P || "function" == typeof P) ? P : E;
    }
    function N(E, P) {
      if ("function" != typeof P && null !== P) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof P);
      }
      E.prototype = Object.create(P && P.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } });
      if (P) Object.setPrototypeOf ? Object.setPrototypeOf(E, P) : (E.__proto__ = P);
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.SessionEndedTelemetryEvent = void 0;
    var s = O(9),
      u = O(16),
      S = O(11),
      _ = (function (E) {
        N(P, E);
        function P() {
          T(this, P);
          return o(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, "kpi_session_started", "popup"));
        }
        l(P, [
          {
            key: "getCustomProperties",
            value: function () {
              var c = [];
              c.push(S.TelemetryPropertyValue.Create("origin", this.origin, s.PIIType.NotSet));
              c.push(S.TelemetryPropertyValue.Create("duration", this.sessionDurationInMs, s.PIIType.NotSet));
              return c;
            }
          }
        ]);
        return P;
      })(u.TelemetryEvent);
    I.SessionEndedTelemetryEvent = _;
  },
  ,
  ,
  ,
  function (a, I, O) {
    "use strict";
    var o = (function () {
      function _(E, P) {
        for (var d = 0, c; d < P.length; d++) {
          c = P[d];
          c.enumerable = c.enumerable || !1;
          c.configurable = !0;
          if ("value" in c) c.writable = !0;
          Object.defineProperty(E, c.key, c);
        }
      }
      return function (E, P, d) {
        if (P) _(E.prototype, P);
        if (d) _(E, d);
        return E;
      };
    })();
    function T(_, E) {
      if (!(_ instanceof E)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var N = O(19),
      l = O(22),
      s = O(30),
      u = O(105),
      S = (function () {
        function _() {
          T(this, _);
        }
        o(_, null, [
          {
            key: "localizeTemplate",
            value: function (P, d) {
              var c = /%%{(.*?)}%%/.exec(d);
              while (c && 0 < c.length) {
                var g = this.getLocalizedString(P, c[1]),
                  y = "%%{" + c[1] + "}%%";
                d = d.replace(y, g);
                c = /%%{(.*?)}%%/.exec(d);
              }
              return d;
            }
          },
          {
            key: "getLocalizedString",
            value: function (P, d, c) {
              if ("undefined" != typeof c && "undefined" != typeof c.count) {
                u.default.init(P);
                d += u.default.getPluralSuffix(c.count);
              }
              if (!P) {
                P = N.default.DEFAULT_LOCALE;
              }
              P = l.default.getNormalizedLocale(P.toLowerCase());
              var g = s.default.getDictionary(P),
                y = d;
              if (g && g[d]) {
                y = g[d];
              }
              if (c) {
                y = this.replaceParams(y, c);
              }
              return y;
            }
          },
          {
            key: "replaceParams",
            value: function (P, d) {
              for (var c in d) {
                if (d.hasOwnProperty(c)) {
                  var g = d[c].toString();
                  P = P.replace(new RegExp("{" + c + "}", "g"), g);
                }
              }
              return P;
            }
          }
        ]);
        return _;
      })();
    I.default = S;
  },
  function (a, I, O) {
    "use strict";
    var o = (function () {
      function ze(Ue, Ge) {
        for (var je = 0, we; je < Ge.length; je++) {
          we = Ge[je];
          we.enumerable = we.enumerable || !1;
          we.configurable = !0;
          if ("value" in we) we.writable = !0;
          Object.defineProperty(Ue, we.key, we);
        }
      }
      return function (Ue, Ge, je) {
        if (Ge) ze(Ue.prototype, Ge);
        if (je) ze(Ue, je);
        return Ue;
      };
    })();
    function T(ze, Ue) {
      if (!(ze instanceof Ue)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var N = O(31),
      l = O(32),
      s = O(33),
      u = O(34),
      S = O(35),
      _ = O(36),
      E = O(37),
      P = O(38),
      d = O(39),
      c = O(40),
      g = O(41),
      y = O(42),
      C = O(43),
      m = O(44),
      h = O(45),
      R = O(46),
      f = O(47),
      D = O(48),
      L = O(49),
      v = O(50),
      A = O(51),
      b = O(52),
      z = O(53),
      U = O(54),
      G = O(55),
      j = O(56),
      w = O(57),
      B = O(58),
      x = O(59),
      J = O(60),
      M = O(61),
      F = O(62),
      W = O(63),
      H = O(64),
      q = O(65),
      X = O(66),
      V = O(67),
      K = O(68),
      $ = O(69),
      Y = O(70),
      Q = O(71),
      Z = O(72),
      ee = O(73),
      ae = O(74),
      te = O(75),
      ne = O(76),
      ie = O(77),
      Ie = O(78),
      re = O(79),
      Oe = O(80),
      Te = O(81),
      oe = O(82),
      Ne = O(83),
      le = O(84),
      se = O(85),
      ue = O(86),
      Se = O(87),
      _e = O(88),
      Ee = O(89),
      Pe = O(90),
      pe = O(91),
      de = O(92),
      ce = O(93),
      ge = O(94),
      ke = O(95),
      ye = O(96),
      Ce = O(97),
      me = O(98),
      he = O(99),
      Re = O(100),
      fe = O(101),
      De = O(102),
      Le = O(103),
      ve = O(104),
      Ae = O(22),
      be = (function () {
        function ze() {
          T(this, ze);
        }
        o(ze, null, [
          {
            key: "getDictionary",
            value: function (Ge) {
              var je = Ae.default.getNormalizedLocale(Ge);
              switch (je.toLowerCase()) {
                case "am-et":
                  return N;
                case "ar-sa":
                  return l;
                case "az-latn-az":
                  return s;
                case "be-by":
                  return u;
                case "bg-bg":
                  return S;
                case "bn-bd":
                  return _;
                case "bn-in":
                  return E;
                case "bs-latn_ba":
                  return P;
                case "ca-es":
                  return d;
                case "ca-es-valencia":
                  return c;
                case "cs-cz":
                  return g;
                case "cy-gb":
                  return y;
                case "da-dk":
                  return C;
                case "de-de":
                  return m;
                case "el-gr":
                  return h;
                case "en-gb":
                  return R;
                case "en-us":
                  return f;
                case "es-es":
                  return D;
                case "et-ee":
                  return L;
                case "eu-es":
                  return v;
                case "fa-ir":
                  return A;
                case "fi-fi":
                  return b;
                case "fil-ph":
                  return z;
                case "fr-fr":
                  return U;
                case "gd-gb":
                  return G;
                case "gl-es":
                  return j;
                case "gu-in":
                  return w;
                case "he-il":
                  return B;
                case "he-iw":
                  return B;
                case "hi-in":
                  return x;
                case "hr-hr":
                  return J;
                case "hu-hu":
                  return M;
                case "id-id":
                  return F;
                case "is-is":
                  return W;
                case "it-it":
                  return H;
                case "ja-jp":
                  return q;
                case "ka-ge":
                  return X;
                case "kk-kz":
                  return V;
                case "kn-in":
                  return K;
                case "ko-kr":
                  return $;
                case "ku-arab-iq":
                  return Y;
                case "lb-lu":
                  return Q;
                case "lt-lt":
                  return Z;
                case "lv-lv":
                  return ee;
                case "mk-mk":
                  return ae;
                case "ml-in":
                  return te;
                case "mr-in":
                  return ne;
                case "ms-my":
                  return ie;
                case "nb-no":
                  return Ie;
                case "nb-NO":
                  return Ie;
                case "nl-nl":
                  return re;
                case "nn-no":
                  return Oe;
                case "or-in":
                  return Te;
                case "pl-pl":
                  return oe;
                case "pt-br":
                  return Ne;
                case "pt-pt":
                  return le;
                case "ro-ro":
                  return se;
                case "ru-ru":
                  return ue;
                case "sk-sk":
                  return Se;
                case "sl-si":
                  return _e;
                case "sq-al":
                  return Ee;
                case "sr-cyrl-ba":
                  return Pe;
                case "sr-cyrl-rs":
                  return pe;
                case "sr-latn-rs":
                  return de;
                case "sv-se":
                  return ce;
                case "sw-ke":
                  return ge;
                case "ta-in":
                  return ke;
                case "te-in":
                  return ye;
                case "th-th":
                  return Ce;
                case "tr-tr":
                  return me;
                case "uk-ua":
                  return he;
                case "ur-pk":
                  return Re;
                case "uz-latn-uz":
                  return fe;
                case "vi-vn":
                  return De;
                case "zh-cn":
                  return Le;
                case "zh-tw":
                  return ve;
                default:
                  return f;
              }
            }
          }
        ]);
        return ze;
      })();
    I.default = be;
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u1260 Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u1235\u1208",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Signed in as: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u1260\u134D\u1325\u1290\u1275 \u1208\u1218\u134D\u1320\u122D \u12E8 Skype \u1245\u1325\u12EB\u12CD\u1295 \u12ED\u132B\u1291\u1362",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u121D\u1295\u121D \u1260\u1218\u1208\u12EB \u12A0\u12ED\u1308\u1299\u121D\u1362 \u121B\u12CD\u1228\u12F5 \u12A0\u12EB\u1235\u1348\u120D\u130D\u121D\u1362",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u1260\u12A0\u1295\u12F5 \u1320\u1245\u1273 \u1290\u133B \u12E8\u126A\u12F2\u12EE \u1325\u122A \u134D\u1320\u122D!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u1260\u134D\u1325\u1290\u1275 \u12E8 Skype \u1325\u122A \u1218\u134D\u1320\u122D \u12A5\u1293 \u1313\u12F0\u129E\u127D\u12CE \u12A5\u1295\u12F2\u1240\u120B\u1240\u1209\u12CE\u1275 \u12ED\u1348\u120D\u130B\u1209? \u1325\u122A \u1218\u134D\u1320\u122D \u1240\u120B\u120D \u12A5\u1293 \u1348\u1323\u1295 \u1206\u1296 \u12A0\u12EB\u12CD\u1245\u121D! \u12E8\u1235\u1265\u1230\u1263 \u1235\u121D\u12CE\u1295 \u12A5\u1293 \u12A0\u121D\u1233\u12EB\u12CD\u1295 \u121B\u1260\u1300\u1275 \u12A5\u1293 \u12E8\u1235\u1265\u1230\u1263\u12CD\u1295 \u12A0\u1308\u1293\u129D \u1260\u121B\u130B\u122B\u1275 \u120C\u120E\u127D\u1295 \u1218\u130B\u1260\u12DD \u12ED\u127D\u120B\u1209\u1362",
      OPTIONS_DESCRIPTION_JOINTITLE: "\u1235\u1265\u1230\u1263\u1295 \u1260\u12A0\u1295\u12F5 \u1320\u1245 \u12EB\u12F5\u122D\u1309",
      OPTIONS_DESCRIPTION_JOIN:
        "\u1240\u12F5\u121E\u12CD\u1291 \u12A0\u1308\u1293\u129D \u12A0\u1208\u12CE\u1275? \u12E8\u1235\u1265\u1230\u1263 \u12A0\u1308\u1293\u129D \u12EB\u1235\u1308\u1261 \u12C8\u12ED\u121D \u12E8\u122B\u1235\u12CE\u1295 \u1235\u1265\u1230\u1263 \u12ED\u1300\u121D\u1229\u1362"
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u0639\u0646 \u0637\u0631\u064A\u0642 \u0634\u0631\u0643\u0629 Microsoft",
      OPTIONS_ABOUT_TITLE: "\u062D\u0648\u0644",
      OPTIONS_SIGN_OUT: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
      OPTIONS_ACCOUNT_INFO: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0643\u0640: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u064A\u0645\u0643\u0646\u0643 \u062A\u062B\u0628\u064A\u062A \u0645\u0644\u062D\u0642 Skype \u0644\u0625\u0639\u062F\u0627\u062F \u0627\u062C\u062A\u0645\u0627\u0639\u0627\u062A Skype \u0648\u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u064A\u0647\u0627 \u0633\u0631\u064A\u0639\u0627\u064B \u0639\u0644\u0649 \u0627\u0644\u0648\u064A\u0628.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0633\u062C\u064A\u0644\u0627\u062A. \u0644\u0627 \u062D\u0627\u062C\u0629 \u0644\u0644\u062A\u0646\u0632\u064A\u064A\u0644\u0627\u062A.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0642\u0645 \u0628\u0625\u0646\u0634\u0627\u0621 \u0645\u0643\u0627\u0644\u0645\u0629 \u0641\u064A\u062F\u064A\u0648 \u0645\u062C\u0627\u0646\u064A\u0629 \u0628\u0646\u0642\u0631\u0647 \u0648\u0627\u062D\u062F\u0647!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0647\u0644 \u062A\u0631\u064A\u062F \u0625\u0639\u062F\u0627\u062F \u0645\u0643\u0627\u0644\u0645\u0629 Skype \u0633\u0631\u064A\u0639\u0627\u064B \u0648\u0636\u0645 \u0623\u0635\u062F\u0642\u0627\u0626\u0643 \u0625\u0644\u064A\u0643\u061F \u0623\u0635\u0628\u062D \u0625\u0639\u062F\u0627\u062F \u0645\u0643\u0627\u0644\u0645\u0629 \u0623\u0633\u0647\u0644 \u0648\u0623\u0633\u0631\u0639 \u0645\u0646 \u0623\u064A \u0648\u0642\u062A \u0645\u0636\u0649! \u064A\u0645\u0643\u0646\u0643 \u062A\u062E\u0635\u064A\u0635 \u0627\u0644\u0623\u0641\u0627\u062A\u0627\u0631 \u0648\u0627\u0633\u0645 \u0627\u062C\u062A\u0645\u0627\u0639\u0643 \u0648\u062F\u0639\u0648\u0629 \u0627\u0644\u0622\u062E\u0631\u064A\u0646 \u0625\u0644\u064A\u0647 \u0628\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0631\u062A\u0628\u0627\u0637 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u0627\u062C\u062A\u0645\u0627\u0639 \u0628\u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0647\u0644 \u0644\u062F\u064A\u0643 \u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627\u0644\u0641\u0639\u0644\u061F \u0623\u062F\u062E\u0644 \u0627\u0631\u062A\u0628\u0627\u0637 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639 \u0623\u0648 \u0627\u0628\u062F\u0623 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation t\u0259r\u0259find\u0259n",
      OPTIONS_ABOUT_TITLE: "Haqq\u0131nda",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Daxil olun: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Vebd\u0259 Skype toplant\u0131lar\u0131n\u0131 c\u0259ld yaratmaq v\u0259 onlara qo\u015Fulmaq \xFC\xE7\xFCn Skype geni\u015Fl\u0259nm\u0259sini qura\u015Fd\u0131r\u0131n.",
      OPTIONS_DESCRIPTION_LINETWO: "Qeydiyyatlar yoxdur. Y\xFCkl\u0259m\u0259l\u0259r t\u0259l\u0259b olunmur.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Bir klik il\u0259 video z\u0259ngi pulsuz yarad\u0131n!",
      OPTIONS_DESCRIPTION_CREATE:
        "C\u0259ld Skype z\u0259ngi yaratmaq v\u0259 dostlar\u0131n\u0131z\u0131n siz\u0259 qo\u015Fulmas\u0131n\u0131 ist\u0259yirsiniz? Z\u0259ng yaratmaq he\xE7 vaxt bu q\u0259d\u0259r asan v\u0259 s\xFCr\u0259tli olmay\u0131b! Toplant\u0131 ke\xE7idini payla\u015Faraq toplant\u0131 ad\u0131n\u0131z\u0131 v\u0259 avatar\u0131n\u0131z\u0131 f\u0259rdil\u0259\u015Fdir\u0259 v\u0259 ba\u015Fqalar\u0131n\u0131 d\u0259v\u0259t ed\u0259 bil\u0259rsiniz.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Bir klik il\u0259 toplant\u0131ya qo\u015Ful",
      OPTIONS_DESCRIPTION_JOIN:
        "Art\u0131q ke\xE7idiniz var? Toplant\u0131 ke\xE7idini daxil edin v\u0259 ya \xF6z toplant\u0131n\u0131z\u0131 ba\u015Flad\u0131n."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u0421\u0442\u0432\u043E\u0440\u0430\u043D\u0430 Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u0417\u0432\u0435\u0441\u0442\u043A\u0456",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Signed in as: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Install the Skype extension for quickly creating & joining Skype meetings on web.",
      OPTIONS_DESCRIPTION_LINETWO: "No sign ups. No downloads required.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Create a free video call with one click",
      OPTIONS_DESCRIPTION_CREATE:
        "Want to quickly create a Skype call and have your friends join you? Creating a call has never been easier and quicker! You can customize your meeting name and avatar and invite others by sharing the meeting link.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Join a meeting with one click",
      OPTIONS_DESCRIPTION_JOIN: "Already have a link? Enter the meeting link or start your own meeting."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u041E\u0442 Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u041E\u0442\u043D\u043E\u0441\u043D\u043E",
      OPTIONS_SIGN_OUT: "\u0418\u0437\u043B\u0438\u0437\u0430\u043D\u0435",
      OPTIONS_ACCOUNT_INFO: "\u0412\u043B\u044F\u0437\u044A\u043B \u043A\u0430\u0442\u043E: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0418\u043D\u0441\u0442\u0430\u043B\u0438\u0440\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u0448\u0438\u0440\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 Skype \u0437\u0430 \u0431\u044A\u0440\u0437\u043E \u0441\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u0438 \u043F\u0440\u0438\u0441\u044A\u0435\u0434\u0438\u043D\u044F\u0432\u0430\u043D\u0435 \u043A\u044A\u043C \u0441\u044A\u0431\u0440\u0430\u043D\u0438\u044F \u043D\u0430 Skype \u0432 \u0443\u0435\u0431.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u041D\u0435 \u0441\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0438 \u043D\u0438\u043A\u0430\u043A\u0432\u0438 \u0437\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0438\u044F \u0438\u043B\u0438 \u0438\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0438\u044F.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u0435\u043D \u0432\u0438\u0434\u0435\u043E\u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440 \u0441 \u0435\u0434\u043D\u043E \u0449\u0440\u0430\u043A\u0432\u0430\u043D\u0435!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0418\u0441\u043A\u0430\u0442\u0435 \u043B\u0438 \u0431\u044A\u0440\u0437\u043E \u0434\u0430 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u0442\u0435 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440 \u0432 Skype \u0438 \u043F\u0440\u0438\u044F\u0442\u0435\u043B\u0438\u0442\u0435 \u0432\u0438 \u0434\u0430 \u0441\u0435 \u043F\u0440\u0438\u0441\u044A\u0435\u0434\u0438\u043D\u044F\u0442 \u043A\u044A\u043C \u0432\u0430\u0441? \u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440 \u043D\u0438\u043A\u043E\u0433\u0430 \u043D\u0435 \u0435 \u0431\u0438\u043B\u043E \u043F\u043E-\u043B\u0435\u0441\u043D\u043E \u0438 \u043F\u043E-\u0431\u044A\u0440\u0437\u043E! \u041C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u0442\u0435 \u0438\u043C\u0435\u0442\u043E \u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043D\u0430 \u0441\u044A\u0431\u0440\u0430\u043D\u0438\u0435\u0442\u043E \u0438 \u0434\u0430 \u043F\u043E\u043A\u0430\u043D\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0438 \u0445\u043E\u0440\u0430, \u043A\u0430\u0442\u043E \u0441\u043F\u043E\u0434\u0435\u043B\u0438\u0442\u0435 \u0432\u0440\u044A\u0437\u043A\u0430\u0442\u0430 \u043A\u044A\u043C \u0441\u044A\u0431\u0440\u0430\u043D\u0438\u0435\u0442\u043E.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u041F\u0440\u0438\u0441\u044A\u0435\u0434\u0438\u043D\u044F\u0432\u0430\u043D\u0435 \u043A\u044A\u043C \u0441\u044A\u0431\u0440\u0430\u043D\u0438\u0435 \u0441 \u0435\u0434\u043D\u043E \u0449\u0440\u0430\u043A\u0432\u0430\u043D\u0435",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0412\u0435\u0447\u0435 \u0438\u043C\u0430\u0442\u0435 \u0432\u0440\u044A\u0437\u043A\u0430? \u0412\u044A\u0432\u0435\u0434\u0435\u0442\u0435 \u0432\u0440\u044A\u0437\u043A\u0430\u0442\u0430 \u043A\u044A\u043C \u0441\u044A\u0431\u0440\u0430\u043D\u0438\u0435\u0442\u043E \u0438\u043B\u0438 \u0437\u0430\u043F\u043E\u0447\u043D\u0435\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043E \u0441\u044A\u0431\u0440\u0430\u043D\u0438\u0435."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: " Microsoft Corporation \u098F\u09B0 \u09AE\u09BE\u09A7\u09CD\u09AF\u09AE\u09C7",
      OPTIONS_ABOUT_TITLE: "\u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Signed in as: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Install the Skype extension for quickly creating & joining Skype meetings on web.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0995\u09CB\u09A8\u0993 \u09B8\u09BE\u0987\u09A8 \u0986\u09AA \u09A8\u09C7\u0987\u0964 \u0995\u09CB\u09A8\u0993 \u09A1\u09BE\u0989\u09A8\u09B2\u09CB\u09A1\u09C7\u09B0 \u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u099C\u09A8 \u09A8\u09C7\u0987\u0964",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u098F\u0995 \u0995\u09CD\u09B2\u09BF\u0995\u09C7 \u098F\u0995\u099F\u09BF \u09AE\u09C1\u0995\u09CD\u09A4 \u09AD\u09BF\u09A1\u09BF\u0993 \u0995\u09B2 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8!",
      OPTIONS_DESCRIPTION_CREATE:
        "Want to quickly create a Skype call and have your friends join you? Creating a call has never been easier and quicker! You can customize your meeting name and avatar and invite others by sharing the meeting link.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u098F\u0995 \u0995\u09CD\u09B2\u09BF\u0995\u09C7 \u098F\u0995\u099F\u09BF \u09AE\u09BF\u099F\u09BF\u0982-\u098F \u09AF\u09CB\u0997 \u09A6\u09BF\u09A8",
      OPTIONS_DESCRIPTION_JOIN: "Already have a link? Enter the meeting link or start your own meeting."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation \u098F\u09B0 \u09A6\u09CD\u09AC\u09BE\u09B0\u09BE",
      OPTIONS_ABOUT_TITLE: "\u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Signed in as: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0993\u09AF\u09BC\u09C7\u09AC\u09C7 Skype \u09AE\u09BF\u099F\u09BF\u0982\u0997\u09C1\u09B2\u09BF \u09A6\u09CD\u09B0\u09C1\u09A4 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09A4\u09C7 \u098F\u09AC\u0982 \u09AF\u09CB\u0997\u09A6\u09BE\u09A8 \u0995\u09B0\u09A4\u09C7 Skype \u098F\u0995\u09CD\u09B8\u099F\u09C7\u09A8\u09B6\u09A8\u099F\u09BF \u0987\u09A8\u09B8\u09CD\u099F\u09B2 \u0995\u09B0\u09C1\u09A8\u0964",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0995\u09CB\u09A8\u0993 \u09B8\u09BE\u0987\u09A8 \u0986\u09AA \u09A8\u09C7\u0987\u0964 \u0995\u09CB\u09A8\u0993 \u09A1\u09BE\u0989\u09A8\u09B2\u09CB\u09A1\u09C7\u09B0 \u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u099C\u09A8 \u09A8\u09C7\u0987\u0964",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u098F\u0995 \u0995\u09CD\u09B2\u09BF\u0995\u09C7 \u098F\u0995\u099F\u09BF \u09AE\u09C1\u0995\u09CD\u09A4 \u09AD\u09BF\u09A1\u09BF\u0993 \u0995\u09B2 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u09A6\u09CD\u09B0\u09C1\u09A4 \u098F\u0995\u099F\u09BF Skype \u0995\u09B2 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09A4\u09C7 \u099A\u09BE\u09A8 \u098F\u09AC\u0982 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09A8\u09CD\u09A7\u09C1\u09B0\u09BE \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AF\u09CB\u0997 \u09A6\u09BF\u09A8 \u09A4\u09BE \u099A\u09BE\u09A8? \u098F\u0995\u099F\u09BF \u0995\u09B2 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u098F\u09B0 \u0986\u0997\u09C7 \u0995\u0996\u09A8\u09CB\u0987 \u098F\u09A4\u09CB \u09B8\u09B9\u099C \u098F\u09AC\u0982 \u09A6\u09CD\u09B0\u09C1\u09A4 \u09B9\u09DF\u09A8\u09BF! \u0986\u09AA\u09A8\u09BF \u0986\u09AA\u09A8\u09BE\u09B0 \u09AE\u09BF\u099F\u09BF\u0982\u09DF\u09C7\u09B0 \u09A8\u09BE\u09AE \u098F\u09AC\u0982 \u0985\u09AC\u09A4\u09BE\u09B0 \u0995\u09BE\u09B8\u09CD\u099F\u09AE\u09BE\u0987\u099C \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8 \u098F\u09AC\u0982 \u09AE\u09BF\u099F\u09BF\u0982 \u09B2\u09BF\u0999\u09CD\u0995\u099F\u09BF \u09B6\u09C7\u09DF\u09BE\u09B0 \u0995\u09B0\u09C7 \u0985\u09A8\u09CD\u09AF\u09BE\u09A8\u09CD\u09AF\u09A6\u09C7\u09B0 \u0986\u09AE\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u098F\u0995 \u0995\u09CD\u09B2\u09BF\u0995\u09C7 \u098F\u0995\u099F\u09BF \u09AE\u09BF\u099F\u09BF\u0982-\u098F \u09AF\u09CB\u0997 \u09A6\u09BF\u09A8",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0986\u09AA\u09A8\u09BE\u09B0 \u0987\u09A4\u09BF\u09AE\u09A7\u09CD\u09AF\u09C7\u0987 \u098F\u0995\u099F\u09BF \u09B2\u09BF\u0999\u09CD\u0995 \u09B0\u09DF\u09C7\u099B\u09C7? \u09AE\u09BF\u099F\u09BF\u0982 \u09B2\u09BF\u0999\u09CD\u0995\u099F\u09BF \u09B2\u09BF\u0996\u09C1\u09A8 \u09AC\u09BE \u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09BF\u099C\u09C7\u09B0 \u09AE\u09BF\u099F\u09BF\u0982 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8\u0964"
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Dodatne informacije",
      OPTIONS_ACCOUNT_INFO: "Prijavljen/a kao: ${skypeId}",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_DESCRIPTION_LINEONE: "Instalirajte Skype ekstenziju za brzo kreiranje Skype sastanaka i pridru\u017Eivanje njima na webu.",
      OPTIONS_DESCRIPTION_LINETWO: "Nema prijava. Nema obaveznih preuzimanja.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Kreirajte besplatan videopoziv jednim klikom!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u017Delite li brzo kreirati Skype poziv i da vam se prijatelji pridru\u017Ee? Kreiranje poziva nikad nije bilo jednostavnije i br\u017Ee! Mo\u017Eete prilagoditi naziv sastanka i avatar i pozvati druge tako \u0161to \u0107ete dijeliti vezu za sastanak.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Pridru\u017Eite se sastanku jednim klikom",
      OPTIONS_DESCRIPTION_JOIN: "Ve\u0107 imate vezu? Unesite vezu za sastanak ili pokrenite vlastiti sastanak."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Per Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Quant a",
      OPTIONS_ACCOUNT_INFO: "Sessi\xF3 iniciada com a: {skypeId}",
      OPTIONS_SIGN_OUT: "Tanca la sessi\xF3",
      OPTIONS_DESCRIPTION_LINEONE:
        "Instal\xB7la l'extensi\xF3 de l\u2019Skype per crear-ne i unir-te r\xE0pidament a reunions de l\u2019Skype al web.",
      OPTIONS_DESCRIPTION_LINETWO: "Sense registres. No cal cap desc\xE0rrega.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Crea una videotrucada de franc amb un sol clic.",
      OPTIONS_DESCRIPTION_CREATE:
        "Vols crear r\xE0pidament una trucada de l\u2019Skype i que els teus amics s'hi uneixin? Crear una trucada mai no ha estat tan f\xE0cil i r\xE0pid! Pots personalitzar el nom i l'avatar de la reuni\xF3 i convidar-hi altres persones compartint-ne l'enlla\xE7.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Uniu-vos a una reuni\xF3 amb un sol clic",
      OPTIONS_DESCRIPTION_JOIN: "Ja tens un enlla\xE7? Introdueix l'enlla\xE7 de la reuni\xF3 o inicia\u2019n una de pr\xF2pia."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Per Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Quant a",
      OPTIONS_ACCOUNT_INFO: "Sessi\xF3 iniciada com a: {skypeId}",
      OPTIONS_SIGN_OUT: "Tanca la sessi\xF3",
      OPTIONS_DESCRIPTION_LINEONE:
        "Instal\xB7la l'extensi\xF3 de l'Skype per a crear i unir-te r\xE0pidament a reunions de l'Skype al web.",
      OPTIONS_DESCRIPTION_LINETWO: "No cal registrar-se. No calen desc\xE0rregues.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Crea una videotrucada gratu\xEFta amb un sol clic.",
      OPTIONS_DESCRIPTION_CREATE:
        "Vols crear r\xE0pidament una trucada de l'Skype i que els teus amics s'hi unisquen? Crear una trucada mai no ha estat tan f\xE0cil i r\xE0pid! Pots personalitzar el nom i l'avatar de la reuni\xF3 i convidar altres persones compartint l'enlla\xE7.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Uneix-te a una reuni\xF3 amb un sol clic",
      OPTIONS_DESCRIPTION_JOIN: "Ja tens un enlla\xE7? Introdueix l'enlla\xE7 de la reuni\xF3 o inicia'n una."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Od spole\u010Dnost Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "O aplikaci",
      OPTIONS_ACCOUNT_INFO: "Jste p\u0159ihl\xE1\u0161eni jako: ${skypeId}",
      OPTIONS_SIGN_OUT: "Odhl\xE1sit se",
      OPTIONS_DESCRIPTION_LINEONE:
        "Nainstalujte si roz\u0161\xED\u0159en\xED Skype, a\u0165 m\u016F\u017Eete rychle vytv\xE1\u0159et skypov\xE9 sch\u016Fzky na webu a p\u0159ipojovat se k nim.",
      OPTIONS_DESCRIPTION_LINETWO: "Bez registrace \u010Di stahov\xE1n\xED",
      OPTIONS_DESCRIPTION_CREATETITLE: "Vytvo\u0159te bezplatn\xFD videohovor jedn\xEDm kliknut\xEDm.",
      OPTIONS_DESCRIPTION_CREATE:
        "Chcete rychle vytvo\u0159it skypov\xFD hovor a umo\u017Enit sv\xFDm p\u0159\xE1tel\u016Fm, aby se k v\xE1m p\u0159ipojili? Vytvo\u0159en\xED hovoru nebylo nikdy jednodu\u0161\u0161\xED a rychlej\u0161\xED! M\u016F\u017Eete si p\u0159izp\u016Fsobit n\xE1zev sch\u016Fzky a avatara a m\u016F\u017Eete pozvat ostatn\xED tak, \u017Ee jim nasd\xEDl\xEDte odkaz na sch\u016Fzku.",
      OPTIONS_DESCRIPTION_JOINTITLE: "P\u0159ipojte se ke sch\u016Fzce jedn\xEDm kliknut\xEDm",
      OPTIONS_DESCRIPTION_JOIN: "U\u017E m\xE1te odkaz? Zadejte odkaz na sch\u016Fzku nebo zahajte vlastn\xED sch\u016Fzku."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Gan Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Ynghylch",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Wedi mewngofnodi fel: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Gosodwch yr estyniad Skype er mwyn creu ac ymuno \xE2 chyfarfodydd Skype yn gyflym ar y we.",
      OPTIONS_DESCRIPTION_LINETWO: "Dim cofrestru. Dim lawrlwythiadau.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Creu galwad fideo am ddim gydag un clic!",
      OPTIONS_DESCRIPTION_CREATE:
        "Ydych chi eisiau creu galwad Skype yn gyflym a gofyn i'ch ffrindiau ymuno \xE2 chi? Mae creu galwad erioed wedi bod yn haws ac yn gynt! Gallwch addasu eich enw cyfarfod a'ch rhithffurf a gwahodd pobl eraill drwy rannu dolen y cyfarfod.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Ymuno \xE2 chyfarfod gydag un clic",
      OPTIONS_DESCRIPTION_JOIN: "Oes gennych chi ddolen yn barod? Rhowch ddolen y cyfarfod neu ddechrau eich cyfarfod eich hun."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Af Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Om",
      OPTIONS_SIGN_OUT: "Log af",
      OPTIONS_ACCOUNT_INFO: "Logget p\xE5 som: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Install\xE9r Skype-udvidelsen, s\xE5 du hurtigt kan oprette og deltage i Skype-m\xF8der p\xE5 internettet.",
      OPTIONS_DESCRIPTION_LINETWO: "Der kr\xE6ves ingen tilmelding eller downloads.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Opret et gratis videoopkald med et enkelt klik!",
      OPTIONS_DESCRIPTION_CREATE:
        "Vil du hurtigt oprette et Skype-opkald og f\xE5 dine venner til at deltage? Det har aldrig v\xE6ret nemmere og hurtigere at oprette et opkald! Du kan tilpasse dit m\xF8denavn og din avatar og invitere andre ved at dele m\xF8delinket.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Deltag i et m\xF8de med et enkelt klik",
      OPTIONS_DESCRIPTION_JOIN: "Har du allerede et link? Angiv m\xF8delinket, eller start dit eget m\xF8de."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Von Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Info",
      OPTIONS_SIGN_OUT: "Abmelden",
      OPTIONS_ACCOUNT_INFO: "Angemeldet als: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Installieren Sie die Skype-Erweiterung, um Skype-Besprechungen im Web schnell zu erstellen und daran teilzunehmen.",
      OPTIONS_DESCRIPTION_LINETWO: "Keine Anmeldungen. Keine Downloads erforderlich.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Erstellen Sie einen kostenlosen Videoanruf mit einem Klick!",
      OPTIONS_DESCRIPTION_CREATE:
        "M\xF6chten Sie schnell einen Skype-Anruf erstellen und Ihre Freunde daran teilnehmen lassen? Noch nie lie\xDF sich ein Anruf leichter und schneller einrichten! Sie k\xF6nnen Ihren Besprechungsnamen und Avatar anpassen und andere einladen, indem Sie den Besprechungslink teilen.",
      OPTIONS_DESCRIPTION_JOINTITLE: "An einer Besprechung mit einem Klick teilnehmen",
      OPTIONS_DESCRIPTION_JOIN:
        "Sie haben bereits einen Link? Geben Sie den Besprechungslink ein, oder starten Sie Ihre eigene Besprechung."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u0391\u03C0\u03CC \u03C4\u03B7\u03BD Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u03A0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2",
      OPTIONS_SIGN_OUT: "\u0391\u03C0\u03BF\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7",
      OPTIONS_ACCOUNT_INFO: "\u0388\u03C7\u03B5\u03C4\u03B5 \u03B5\u03B9\u03C3\u03AD\u03BB\u03B8\u03B5\u03B9 \u03C9\u03C2: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0395\u03B3\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C0\u03AD\u03BA\u03C4\u03B1\u03C3\u03B7 Skype \u03B3\u03B9\u03B1 \u03B3\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE \u03C3\u03B5 \u03C3\u03C5\u03C3\u03BA\u03AD\u03C8\u03B5\u03B9\u03C2 Skype \u03C3\u03C4\u03BF web.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0394\u03B5\u03BD \u03B1\u03C0\u03B1\u03B9\u03C4\u03BF\u03CD\u03BD\u03C4\u03B1\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AD\u03C2. \u0394\u03B5\u03BD \u03B1\u03C0\u03B1\u03B9\u03C4\u03BF\u03CD\u03BD\u03C4\u03B1\u03B9 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1 \u03BB\u03AE\u03C8\u03B7\u03C2.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B9\u03B1 \u03B4\u03C9\u03C1\u03B5\u03AC\u03BD \u03B2\u03B9\u03BD\u03C4\u03B5\u03BF\u03BA\u03BB\u03AE\u03C3\u03B7 \u03BC\u03B5 \u03AD\u03BD\u03B1 \u03BA\u03BB\u03B9\u03BA!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03C3\u03B5\u03C4\u03B5 \u03B3\u03C1\u03AE\u03B3\u03BF\u03C1\u03B1 \u03BC\u03B9\u03B1 \u03BA\u03BB\u03AE\u03C3\u03B7 Skype \u03BA\u03B1\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03C4\u03B5 \u03C4\u03BF\u03C5\u03C2 \u03C6\u03AF\u03BB\u03BF\u03C5\u03C2 \u03C3\u03B1\u03C2 \u03BC\u03B1\u03B6\u03AF \u03C3\u03B1\u03C2; \u0397 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03BC\u03B9\u03B1\u03C2 \u03BA\u03BB\u03AE\u03C3\u03B7\u03C2 \u03B4\u03B5\u03BD \u03AE\u03C4\u03B1\u03BD \u03C0\u03BF\u03C4\u03AD \u03C0\u03B9\u03BF \u03B5\u03CD\u03BA\u03BF\u03BB\u03B7 \u03BA\u03B1\u03B9 \u03B3\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7! \u039C\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03C0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03CC\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03CC\u03BD\u03BF\u03BC\u03B1 \u03BA\u03B1\u03B9 \u03C4\u03BF avatar \u03C4\u03B7\u03C2 \u03C3\u03CD\u03C3\u03BA\u03B5\u03C8\u03AE\u03C2 \u03C3\u03B1\u03C2 \u03BA\u03B1\u03B9 \u03BD\u03B1 \u03C0\u03C1\u03BF\u03C3\u03BA\u03B1\u03BB\u03AD\u03C3\u03B5\u03C4\u03B5 \u03AC\u03BB\u03BB\u03BF\u03C5\u03C2 \u03BA\u03BF\u03B9\u03BD\u03BF\u03C0\u03BF\u03B9\u03CE\u03BD\u03C4\u03B1\u03C2 \u03C4\u03BF\u03BD \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF \u03C4\u03B7\u03C2 \u03C3\u03CD\u03C3\u03BA\u03B5\u03C8\u03B7\u03C2.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u03A3\u03C5\u03BC\u03BC\u03B5\u03C4\u03AC\u03C3\u03C7\u03B5\u03C4\u03B5 \u03C3\u03B5 \u03BC\u03B9\u03B1 \u03C3\u03CD\u03C3\u03BA\u03B5\u03C8\u03B7 \u03BC\u03B5 \u03AD\u03BD\u03B1 \u03BC\u03CC\u03BD\u03BF \u03BA\u03BB\u03B9\u03BA",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0388\u03C7\u03B5\u03C4\u03B5 \u03AE\u03B4\u03B7 \u03BC\u03B9\u03B1 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7; \u0395\u03B9\u03C3\u03B1\u03B3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03C3\u03CD\u03C3\u03BA\u03B5\u03C8\u03B7\u03C2 \u03AE \u03BE\u03B5\u03BA\u03B9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7 \u03B4\u03B9\u03BA\u03AE \u03C3\u03B1\u03C2 \u03C3\u03CD\u03C3\u03BA\u03B5\u03C8\u03B7."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "By Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "About",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Signed in as: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Install the Skype extension for quickly creating & joining Skype meetings on web.",
      OPTIONS_DESCRIPTION_LINETWO: "No sign ups. No downloads required.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Create a free video call with one click",
      OPTIONS_DESCRIPTION_CREATE:
        "Want to quickly create a Skype call and have your friends join you? Creating a call has never been easier and quicker! You can customize your meeting name and avatar and invite others by sharing the meeting link.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Join a meeting with one click",
      OPTIONS_DESCRIPTION_JOIN: "Already have a link? Enter the meeting link or start your own meeting."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "By Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "About",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Signed in as: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Install the Skype extension for quickly creating & joining Skype meetings on web.",
      OPTIONS_DESCRIPTION_LINETWO: "No sign ups. No downloads required.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Create a free video call with one click",
      OPTIONS_DESCRIPTION_CREATE:
        "Want to quickly create a Skype call and have your friends join you? Creating a call has never been easier and quicker! You can customize your meeting name and avatar and invite others by sharing the meeting link.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Join a meeting with one click",
      OPTIONS_DESCRIPTION_JOIN: "Already have a link? Enter the meeting link or start your own meeting."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Por Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Acerca de",
      OPTIONS_SIGN_OUT: "Cerrar sesi\xF3n",
      OPTIONS_ACCOUNT_INFO: "Sesi\xF3n iniciada como: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Instala la extensi\xF3n de Skype para crear e invitar a tus contactos a unirse a las reuniones de Skype en la Web de manera r\xE1pida.",
      OPTIONS_DESCRIPTION_LINETWO: "No hay ninguna suscripci\xF3n. No se necesitan descargas.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Crea una videollamada gratuita con un solo clic.",
      OPTIONS_DESCRIPTION_CREATE:
        "\xBFQuieres crear una llamada de Skype de manera r\xE1pida y hacer que tus amigos se unan? Crear una llamada nunca ha sido m\xE1s f\xE1cil y m\xE1s r\xE1pido. Puedes personalizar el nombre y el avatar de la reuni\xF3n e invitar a otros compartiendo el v\xEDnculo de la reuni\xF3n.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Unirse a una reuni\xF3n con un solo clic",
      OPTIONS_DESCRIPTION_JOIN: "\xBFYa tiene un v\xEDnculo? Escriba el v\xEDnculo de la reuni\xF3n o inicie su propia reuni\xF3n."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "By Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Teave",
      OPTIONS_SIGN_OUT: "Logi v\xE4lja",
      OPTIONS_ACCOUNT_INFO: "Sisse logitud kasutaja: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Paigalda Skype'i laiendus, et luua ja liituda kiiresti veebis Skype'i koosolekutega.",
      OPTIONS_DESCRIPTION_LINETWO: "Registreerimine ega allalaadimine pole vajalik.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Loo tasuta videok\xF5ne \xFChe kl\xF5psuga!",
      OPTIONS_DESCRIPTION_CREATE:
        "Kas soovid kiiresti luua Skype'i k\xF5ne ja lasta oma s\xF5pradel sinuga liituda? K\xF5ne loomine pole kunagi olnud lihtsam ega kiirem! Koosoleku nime ja avatari saab kohandada ning teisi kutsuda, jagades koosoleku linki.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Koosolekuga liitumine \xFChe hiirekl\xF5psuga",
      OPTIONS_DESCRIPTION_JOIN: "Kas teil on juba link? Sisestage koosoleku link v\xF5i alustage oma koosolekut."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation-ek garatuta",
      OPTIONS_ABOUT_TITLE: "Honi buruz",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "${skypeId} gisa hasi duzu saioa",
      OPTIONS_DESCRIPTION_LINEONE: "Instalatu Skype luzapena Skype web bilerak sortzeko eta azkar saratzeko.",
      OPTIONS_DESCRIPTION_LINETWO: "Ez dago erregistratuta. Deskarga ez da beharrezkoa.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Sortu doako bideo-deia klik bakar batekin!",
      OPTIONS_DESCRIPTION_CREATE:
        "Skype dei bat sortu eta zure lagunek zurekin bat egin dezaten nahi duzu? Dei bat sortzea ez da inoiz hain erraza eta azkarra izan. Zure bileraren izena eta avatarra pertsonalizatu ditzakezu, eta beste batzuk gonbidatu, bilerarako esteka partekatuz.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Sartu bilera batean klik bakar batekin",
      OPTIONS_DESCRIPTION_JOIN: "Badaukazu estekarik? Sartu bilerarako esteka edo hasi bilera bat."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u200FMicrosoft Corporation \u200F\u062A\u0648\u0633\u0637",
      OPTIONS_ABOUT_TITLE: "\u062F\u0631\u0628\u0627\u0631\u0647",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "\u0648\u0627\u0631\u062F\u0634\u062F\u0647 \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u0633\u0631\u06CC\u0639 \u062C\u0644\u0633\u0627\u062A Skype \u062F\u0631 \u0648\u0628 \u0648 \u067E\u06CC\u0648\u0633\u062A\u0646 \u0628\u0647 \u0622\u0646\u0647\u0627\u060C \u0627\u0641\u0632\u0648\u0646\u0647 Skype \u0631\u0627 \u0646\u0635\u0628 \u06A9\u0646\u06CC\u062F.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u062B\u0628\u062A\u200C\u0646\u0627\u0645\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0647\u06CC\u0686 \u062F\u0627\u0646\u0644\u0648\u062F\u06CC \u0644\u0627\u0632\u0645 \u0646\u06CC\u0633\u062A.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u06CC\u06A9 \u062A\u0645\u0627\u0633 \u062A\u0635\u0648\u06CC\u0631\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0628\u0627 \u06CC\u06A9 \u06A9\u0644\u06CC\u06A9 \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0628\u0647\u200C\u0633\u0631\u0639\u062A \u06CC\u06A9 \u062A\u0645\u0627\u0633 Skype \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F \u0648 \u0627\u0632 \u062F\u0648\u0633\u062A\u0627\u0646\u062A\u0627\u0646 \u0628\u062E\u0648\u0627\u0647\u06CC\u062F \u0628\u0647 \u0634\u0645\u0627 \u0628\u067E\u06CC\u0648\u0646\u062F\u0646\u062F\u061F \u0627\u06CC\u062C\u0627\u062F \u062A\u0645\u0627\u0633 \u0647\u0631\u06AF\u0632 \u0622\u0633\u0627\u0646\u200C\u062A\u0631 \u0648 \u0633\u0631\u06CC\u0639\u200C\u062A\u0631 \u0646\u0628\u0648\u062F\u0647 \u0627\u0633\u062A! \u0634\u0645\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0646\u0627\u0645 \u062C\u0644\u0633\u0647 \u0648 \u0622\u0648\u0627\u062A\u0627\u0631 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u062D\u0627\u0644\u062A \u062F\u0644\u062E\u0648\u0627\u0647 \u062F\u0631\u0628\u06CC\u0627\u0648\u0631\u06CC\u062F \u0648 \u062F\u06CC\u06AF\u0631\u0627\u0646 \u0631\u0627 \u0628\u0627 \u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u06CC\u0648\u0646\u062F \u062C\u0644\u0633\u0647 \u062F\u0639\u0648\u062A \u06A9\u0646\u06CC\u062F.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u0628\u0627 \u06CC\u06A9 \u06A9\u0644\u06CC\u06A9 \u0628\u0647 \u06CC\u06A9 \u062C\u0644\u0633\u0647 \u0628\u067E\u06CC\u0648\u0646\u062F\u06CC\u062F",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0627\u0632 \u0642\u0628\u0644 \u067E\u06CC\u0648\u0646\u062F \u062F\u0627\u0631\u06CC\u062F\u061F \u067E\u06CC\u0648\u0646\u062F \u062C\u0644\u0633\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F \u06CC\u0627 \u062C\u0644\u0633\u0647 \u062E\u0648\u062F\u062A\u0627\u0646 \u0631\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Tietoja",
      OPTIONS_SIGN_OUT: "Kirjaudu ulos",
      OPTIONS_ACCOUNT_INFO: "Kirjautuneena sis\xE4\xE4n k\xE4ytt\xE4j\xE4n\xE4: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Asenna Skype-laajennus, jotta voit nopeasti luoda Skype-kokouksia ja liitty\xE4 niihin verkossa.",
      OPTIONS_DESCRIPTION_LINETWO: "Ei rekister\xF6itymist\xE4. Latausta ei tarvita.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Luo maksuton video puhelu yhdell\xE4 napsautuksella!",
      OPTIONS_DESCRIPTION_CREATE:
        "Haluatko luoda Skype-puhelun nopeasti ja pyyt\xE4\xE4 yst\xE4vi\xE4si liittym\xE4\xE4n seuraasi? Puhelun luominen ei ole koskaan ollut n\xE4in helppoa ja nopeampaa! Voit mukauttaa kokouksen nime\xE4 ja avataria ja kutsua muita jakamalla kokouslinkin.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Liity kokoukseen yhdell\xE4 napsautuksella",
      OPTIONS_DESCRIPTION_JOIN: "Onko sinulla jo linkki? Kirjoita kokouslinkki tai aloita oma kokouksesi."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Hatid ng Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Tungkol dito",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Naka-sign in bilang: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "I-install ang extension ng Skype para sa mabilis na paggawa at pagsali sa mga pulong sa Skype sa web.",
      OPTIONS_DESCRIPTION_LINETWO: "Walang pag-sign up. Walang kinakailangang pag-download.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Gumawa ng libreng video na tawag gamit ang isang pag-click!",
      OPTIONS_DESCRIPTION_CREATE:
        "Gusto mo bang mabilis na gumawa ng tawag sa Skype at samahan ka ba ng iyong mga kaibigan? Ang paggawa ng tawag ay hindi kailanman naging mas madali at mas mabilis! Maaari mong i-customize ang iyong pangalan ng pulong at avatar at imbitahan ang iba sa pamamagitan ng pagbabahagi sa link ng pagpupulong.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Sumali sa pulong sa pamamagitan ng isang pag-click",
      OPTIONS_DESCRIPTION_JOIN: "Mayroon na bang link? Ilagay ang link ng pulong o simulan ang iyong sariling pulong."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Par Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\xC0 propos de",
      OPTIONS_SIGN_OUT: "Se d\xE9connecter",
      OPTIONS_ACCOUNT_INFO: "Connect\xE9 en tant que: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Installez l\u2019extension Skype pour cr\xE9er et rejoindre rapidement des r\xE9unions Skype sur le web.",
      OPTIONS_DESCRIPTION_LINETWO: "Aucune inscription. Aucun t\xE9l\xE9chargement n\xE9cessaire.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Cr\xE9er un appel vid\xE9o gratuit en un clic\xA0!",
      OPTIONS_DESCRIPTION_CREATE:
        "Vous voulez rapidement cr\xE9er un appel Skype et demander \xE0 vos amis de vous rejoindre ? La cr\xE9ation d\u2019un appel n\u2019a jamais \xE9t\xE9 aussi simple et plus rapide ! Vous pouvez personnaliser le nom et l\u2019avatar de votre r\xE9union et inviter d\u2019autres personnes en partageant le lien de la r\xE9union.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Participer \xE0 une r\xE9union d\u2019un simple clic",
      OPTIONS_DESCRIPTION_JOIN: "Vous avez d\xE9j\xE0 un lien ? Entrez le lien de la r\xE9union ou d\xE9marrez votre propre r\xE9union."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "By Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "About",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Chl\xE0raich thu a-steach mar: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "St\xE0laich leudachan Skype airson coinneamhan Skype air an l\xECon a chruthachadh is a dhol an s\xE0s annta gu luath.",
      OPTIONS_DESCRIPTION_LINETWO: "Gun chl\xE0raidhean. Chan eil luchdaidhean a-nuas a dh\xECth.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Cruthaich gairm video an-asgaidh le aon bhriogadh!",
      OPTIONS_DESCRIPTION_CREATE:
        "A bheil thu airson gairm Skype a chruthachadh gu luath agus do charaidean a thoirt cruinn ann? Cha robh e a-riamh nas fhasa gairm a chruthachadh! \u2019S urrainn dhut ainm agus avatar na coinneimh agad a ghn\xE0thachadh agus cuireadh a thoirt do dhaoine eile \u2019s tu a\u2019 cur ceangal na coinneimh thuca.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Gabh p\xE0irt ann an coinneamh le aon bhriogadh",
      OPTIONS_DESCRIPTION_JOIN:
        "A bheil ceangal agad mu thr\xE0th? Cuir a-steach ceangal na coinneimh no t\xF2isich coinneamh thu fh\xE8in."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "De Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Acerca de",
      OPTIONS_SIGN_OUT: "Cerrar sesi\xF3n",
      OPTIONS_ACCOUNT_INFO: "Sesi\xF3n iniciada como: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Instala a extensi\xF3n de Skype para crear e unirte rapidamente a reuni\xF3ns de Skype na web.",
      OPTIONS_DESCRIPTION_LINETWO: "Non hai inicios de sesi\xF3n. Non se precisa ningunha descarga.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Crea unha videochamada gratis cun s\xF3 clic!",
      OPTIONS_DESCRIPTION_CREATE:
        "Queres crear rapidamente unha chamada de Skype e que os teus amigos se unan a ti? Crear unha chamada nunca foi tan f\xE1cil e r\xE1pido! Podes personalizar o nome e o avatar da t\xFAa reuni\xF3n e convidar a outras persoas compartindo a ligaz\xF3n da reuni\xF3n.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Unirse a unha reuni\xF3n cun clic",
      OPTIONS_DESCRIPTION_JOIN: "Xa tes unha ligaz\xF3n? Introduce a ligaz\xF3n da reuni\xF3n ou inicia a t\xFAa propia reuni\xF3n."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation \u0AA6\u0ACD\u0AB5\u0ABE\u0AB0\u0ABE",
      OPTIONS_ABOUT_TITLE: "\u0AB5\u0ABF\u0AB6\u0AC7",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO:
        "\u0A86 \u0AA4\u0AB0\u0AC0\u0A95\u0AC7 \u0AB8\u0ABE\u0A87\u0AA8 \u0A87\u0AA8 \u0A95\u0AB0\u0AC7\u0AB2\u0AC1\u0A82 \u0A9B\u0AC7: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0AB5\u0AC7\u0AAC \u0AAA\u0AB0 Skype \u0AAE\u0AC0\u0A9F\u0ABF\u0A82\u0A97\u0ACD\u0AB8 \u0A9D\u0AA1\u0AAA\u0AA5\u0AC0 \u0AAC\u0AA8\u0ABE\u0AB5\u0AB5\u0ABE \u0A85\u0AA8\u0AC7 \u0AA4\u0AC7\u0AAE\u0ABE\u0A82 \u0A9C\u0ACB\u0AA1\u0ABE\u0AB5\u0ABE \u0AAE\u0ABE\u0A9F\u0AC7 Skype \u0A8F\u0A95\u0ACD\u0AB8\u0ACD\u0A9F\u0AC7\u0A82\u0AB6\u0AA8 \u0AB8\u0ACD\u0AA5\u0ABE\u0AAA\u0ABF\u0AA4 \u0A95\u0AB0\u0ACB.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0A95\u0ACB\u0A88 \u0AB8\u0ABE\u0A87\u0AA8 \u0A85\u0AAA\u0ACD\u0AB8 \u0AA8\u0AB9\u0AC0\u0A82. \u0A95\u0ACB\u0A88 \u0AA1\u0ABE\u0A89\u0AA8\u0AB2\u0ACB\u0AA1\u0ACD\u0AB8 \u0A86\u0AB5\u0AB6\u0ACD\u0AAF\u0A95 \u0AA8\u0AB9\u0AC0\u0A82.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0A8F\u0A95 \u0A95\u0ACD\u0AB2\u0ABF\u0A95 \u0AB8\u0ABE\u0AA5\u0AC7 \u0AAE\u0AAB\u0AA4 \u0AB5\u0ABF\u0AA1\u0ABF\u0AAF\u0ACB \u0A95\u0AC9\u0AB2 \u0AAC\u0AA8\u0ABE\u0AB5\u0ACB!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0A9D\u0AA1\u0AAA\u0AA5\u0AC0 Skype \u0A95\u0AC9\u0AB2 \u0AAC\u0AA8\u0ABE\u0AB5\u0AB5\u0ABE \u0A85\u0AA8\u0AC7 \u0AAE\u0ABF\u0AA4\u0ACD\u0AB0\u0ACB\u0AA8\u0AC7 \u0AA4\u0AAE\u0ABE\u0AB0\u0AC0 \u0AB8\u0ABE\u0AA5\u0AC7 \u0A9C\u0ACB\u0AA1\u0AB5\u0ABE \u0AAE\u0ABE\u0A82\u0A97\u0ACB \u0A9B\u0ACB? \u0A95\u0AC9\u0AB2 \u0AAC\u0AA8\u0ABE\u0AB5\u0AB5\u0ABE\u0AA8\u0AC1\u0A82 \u0A95\u0ACD\u0AAF\u0ABE\u0AB0\u0AC7\u0AAF \u0AB8\u0AB0\u0AB3 \u0A85\u0AA8\u0AC7 \u0A9D\u0AA1\u0AAA\u0AC0 \u0AB0\u0AB9\u0ACD\u0AAF\u0AC1\u0A82 \u0AA8\u0AA5\u0AC0! \u0AA4\u0AAE\u0AC7 \u0AA4\u0AAE\u0ABE\u0AB0\u0ABE \u0AAE\u0AC0\u0A9F\u0ABF\u0A82\u0A97 \u0AA8\u0ABE\u0AAE \u0A85\u0AA8\u0AC7 \u0A85\u0AB5\u0AA4\u0ABE\u0AB0\u0AA8\u0AC7 \u0A95\u0AB8\u0ACD\u0A9F\u0AAE\u0ABE\u0A87\u0A9D \u0A95\u0AB0\u0AC0 \u0AB6\u0A95\u0ACB \u0A9B\u0ACB \u0A85\u0AA8\u0AC7 \u0AAE\u0AC0\u0A9F\u0ABF\u0A82\u0A97 \u0AB2\u0ABF\u0A82\u0A95 \u0AB6\u0AC7\u0AB0 \u0A95\u0AB0\u0AC0\u0AA8\u0AC7 \u0A85\u0AA8\u0ACD\u0AAF \u0AB2\u0ACB\u0A95\u0ACB\u0AA8\u0AC7 \u0A86\u0AAE\u0A82\u0AA4\u0ACD\u0AB0\u0ABF\u0AA4 \u0A95\u0AB0\u0AC0 \u0AB6\u0A95\u0ACB \u0A9B\u0ACB.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u0A8F\u0A95 \u0A95\u0ACD\u0AB2\u0ABF\u0A95 \u0AB8\u0ABE\u0AA5\u0AC7 \u0A8F\u0A95 \u0AAE\u0AC0\u0A9F\u0ABF\u0A82\u0A97\u0AAE\u0ABE\u0A82 \u0A9C\u0ACB\u0AA1\u0ABE\u0A93",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0AB6\u0AC1\u0A82 \u0AAA\u0AB9\u0AC7\u0AB2\u0AC7\u0AA5\u0AC0 \u0A9C \u0AB2\u0ABF\u0A82\u0A95 \u0AA7\u0AB0\u0ABE\u0AB5\u0ACB \u0A9A\u0ACB? \u0AAE\u0AC0\u0A9F\u0ABF\u0A82\u0A97 \u0AB2\u0ABF\u0A82\u0A95 \u0AA6\u0ABE\u0A96\u0AB2 \u0A95\u0AB0\u0ACB \u0A85\u0AA5\u0AB5\u0ABE \u0AA4\u0AAE\u0ABE\u0AB0\u0AC0 \u0AAA\u0ACB\u0AA4\u0ABE\u0AA8\u0AC0 \u0AAE\u0AC0\u0A9F\u0ABF\u0A82\u0A97 \u0AAA\u0ACD\u0AB0\u0ABE\u0AB0\u0A82\u0AAD \u0A95\u0AB0\u0ACB."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "\u05E1\u05E7\u05D9\u05D9\u05E4",
      OPTIONS_BRANDING_TEXT: "\u05DE\u05D0\u05EA Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u05D0\u05D5\u05D3\u05D5\u05EA",
      OPTIONS_SIGN_OUT: "\u05D4\u05EA\u05E0\u05EA\u05E7",
      OPTIONS_ACCOUNT_INFO: "\u05DE\u05D7\u05D5\u05D1\u05E8 \u05D1\u05EA\u05D5\u05E8: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u05D4\u05EA\u05E7\u05DF \u05D0\u05EA \u05D4\u05D4\u05E8\u05D7\u05D1\u05D4 \u05E9\u05DC Skype \u05DB\u05D3\u05D9 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E4\u05D2\u05D9\u05E9\u05EA Skype \u05D1\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D5\u05DC\u05D4\u05E6\u05D8\u05E8\u05E3 \u05D0\u05DC\u05D9\u05D4\u05DF \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u05D0\u05D9\u05DF \u05D4\u05E8\u05E9\u05DE\u05D5\u05EA. \u05DC\u05D0 \u05E0\u05D3\u05E8\u05E9\u05D5\u05EA \u05D4\u05D5\u05E8\u05D3\u05D5\u05EA.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u05E6\u05D5\u05E8 \u05E9\u05D9\u05D7\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05DC\u05DC\u05D0 \u05EA\u05E9\u05DC\u05D5\u05DD \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05D0\u05D7\u05EA!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u05E8\u05D5\u05E6\u05D4 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05D1\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05E9\u05D9\u05D7\u05EA Skype \u05D5\u05DC\u05E6\u05E8\u05E3 \u05D7\u05D1\u05E8\u05D9\u05DD? \u05DE\u05E2\u05D5\u05DC\u05DD \u05DC\u05D0 \u05D4\u05D9\u05D4 \u05E7\u05DC \u05D9\u05D5\u05EA\u05E8 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E9\u05D9\u05D7\u05D4! \u05EA\u05D5\u05DB\u05DC \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA \u05D0\u05EA \u05E9\u05DD \u05D4\u05E4\u05D2\u05D9\u05E9\u05D4 \u05D5\u05D4\u05D0\u05D5\u05D5\u05D0\u05D8\u05D0\u05E8 \u05E9\u05DC\u05DA \u05D5\u05DC\u05D4\u05D6\u05DE\u05D9\u05DF \u05D0\u05D7\u05E8\u05D9\u05DD \u05E2\u05DC-\u05D9\u05D3\u05D9 \u05E9\u05D9\u05EA\u05D5\u05E3 \u05D4\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05E4\u05D2\u05D9\u05E9\u05D4.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05E4\u05D2\u05D9\u05E9\u05D4 \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05D0\u05D7\u05EA",
      OPTIONS_DESCRIPTION_JOIN:
        "\u05DB\u05D1\u05E8 \u05D9\u05E9 \u05DC\u05DA \u05E7\u05D9\u05E9\u05D5\u05E8? \u05D4\u05D6\u05DF \u05D0\u05EA \u05D4\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05E4\u05D2\u05D9\u05E9\u05D4 \u05D0\u05D5 \u05D4\u05EA\u05D7\u05DC \u05E4\u05D2\u05D9\u05E9\u05D4 \u05DE\u05E9\u05DC\u05DA."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "\u0938\u094D\u0915\u093E\u0907\u092A",
      OPTIONS_BRANDING_TEXT: "Microsoft \u0915\u0949\u0930\u092A\u094B\u0930\u0947\u0936\u0928 \u0926\u094D\u0935\u093E\u0930\u093E",
      OPTIONS_ABOUT_TITLE: "\u092A\u0930\u093F\u091A\u092F",
      OPTIONS_SETTINGS_TITLE: "\u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938",
      OPTIONS_SIGN_OUT: "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F \u0915\u0930\u0947\u0902",
      OPTIONS_ACCOUNT_INFO:
        "\u0907\u0938 \u0930\u0942\u092A \u092E\u0947\u0902 \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u093F\u092F\u093E \u0917\u092F\u093E: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0935\u0947\u092C \u092A\u0930 \u091C\u0932\u094D\u0926\u0940 \u0938\u0947 Skype \u092E\u0940\u091F\u093F\u0902\u0917 \u092C\u0928\u093E\u0928\u0947 \u0914\u0930 \u0909\u0938\u092E\u0947\u0902 \u0936\u093E\u092E\u093F\u0932 \u0939\u094B\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F Skype \u090F\u0915\u094D\u0938\u091F\u0947\u0902\u0936\u0928 \u0907\u0902\u0938\u094D\u091F\u0949\u0932 \u0915\u0930\u0947\u0902.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0915\u094B\u0908 \u0938\u093E\u0907\u0928 \u0905\u092A \u0928\u0939\u0940\u0902. \u0915\u094B\u0908 \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0906\u0935\u0936\u094D\u092F\u0915 \u0928\u0939\u0940\u0902 \u0939\u0948.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u090F\u0915 \u0915\u094D\u0932\u093F\u0915 \u0915\u0947 \u0938\u093E\u0925 \u090F\u0915 \u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u0935\u0940\u0921\u093F\u092F\u094B \u0915\u0949\u0932 \u092C\u0928\u093E\u090F\u0901!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u091C\u0932\u094D\u0926\u0940 \u0938\u0947 \u0915\u094B\u0908 Skype \u0915\u0949\u0932 \u0915\u0930\u0915\u0947 \u0905\u092A\u0928\u0947 \u092E\u093F\u0924\u094D\u0930\u094B\u0902 \u0938\u0947 \u091C\u0941\u0921\u093C\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902? \u0915\u0949\u0932 \u0915\u0930\u0928\u093E \u0907\u0924\u0928\u093E \u0906\u0938\u093E\u0928 \u0914\u0930 \u0924\u0947\u091C\u093C \u0915\u092D\u0940 \u0928\u0939\u0940\u0902 \u0930\u0939\u093E! \u0906\u092A \u0905\u092A\u0928\u093E \u092E\u0940\u091F\u093F\u0902\u0917 \u0928\u093E\u092E \u0914\u0930 \u0905\u0935\u0924\u093E\u0930 \u0905\u0928\u0941\u0915\u0942\u0932\u093F\u0924 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902 \u0914\u0930 \u092E\u0940\u091F\u093F\u0902\u0917 \u0932\u093F\u0902\u0915 \u0938\u093E\u091D\u093E \u0915\u0930\u0915\u0947 \u0905\u0928\u094D\u092F \u0932\u094B\u0917\u094B\u0902 \u0915\u094B \u0906\u092E\u0902\u0924\u094D\u0930\u093F\u0924 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u090F\u0915 \u0915\u094D\u0932\u093F\u0915 \u0926\u094D\u0935\u093E\u0930\u093E \u092E\u0940\u091F\u093F\u0902\u0917 \u092E\u0947\u0902 \u0936\u093E\u092E\u093F\u0932 \u0939\u094B\u0902",
      OPTIONS_DESCRIPTION_JOIN:
        "\u092A\u0939\u0932\u0947 \u0938\u0947 \u0915\u094B\u0908 \u0932\u093F\u0902\u0915 \u0939\u0948? \u092E\u0940\u091F\u093F\u0902\u0917 \u0932\u093F\u0902\u0915 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902 \u092F\u093E \u0905\u092A\u0928\u0940 \u0938\u094D\u0935\u092F\u0902 \u0915\u0940 \u092E\u0940\u091F\u093F\u0902\u0917 \u092A\u094D\u0930\u093E\u0930\u0902\u092D \u0915\u0930\u0947\u0902."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Omogu\u0107uje Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "O ovoj aplikaciji",
      OPTIONS_SIGN_OUT: "Odjava",
      OPTIONS_ACCOUNT_INFO: "Prijavljeni ste kao: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Instalirajte pro\u0161irenje servisa Skype za brzo stvaranje sastanaka putem Skypea i pridru\u017Eivanje njima na webu.",
      OPTIONS_DESCRIPTION_LINETWO: "Nema prijava. Nije potrebno preuzimanje.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Stvorite besplatan videopoziv jednim klikom!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u017Delite brzo uspostaviti Skype poziv i da vam se prijatelji pridru\u017Ee? Stvaranje poziva nikad nije bilo lak\u0161e i br\u017Ee! Mo\u017Eete prilagoditi naziv sastanka i avatar te pozvati druge dijeljenjem veze za sastanak.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Pridru\u017Eite se sastanku jednim klikom",
      OPTIONS_DESCRIPTION_JOIN: "Ve\u0107 imate vezu? Unesite vezu na sastanak ili pokrenite vlastiti sastanak."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "K\xE9sz\xEDtette: Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "N\xE9vjegy",
      OPTIONS_SIGN_OUT: "Kijelentkez\xE9s",
      OPTIONS_ACCOUNT_INFO: "Bejelentkezve, mint: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Telep\xEDtse a Skype-b\u0151v\xEDtm\xE9nyt, hogy gyorsan l\xE9trehozhasson Skype-\xE9rtekezleteket a weben, \xE9s csatlakozhasson \xE9rtekezletekhez.",
      OPTIONS_DESCRIPTION_LINETWO: "Nincs sz\xFCks\xE9g regisztr\xE1ci\xF3ra. Nem kell let\xF6lteni.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Hozzon l\xE9tre ingyenes vide\xF3h\xEDv\xE1st egy kattint\xE1ssal!",
      OPTIONS_DESCRIPTION_CREATE:
        "Szeretne gyorsan l\xE9trehozni egy Skype-h\xEDv\xE1st, \xE9s szeretn\xE9, hogy a bar\xE1tai bekapcsol\xF3djanak abba? Mostant\xF3l minden eddigin\xE9l egyszer\u0171bben \xE9s gyorsabban hozhat l\xE9tre h\xEDv\xE1st! Testre szabhatja az \xE9rtekezlet nev\xE9t \xE9s avatarj\xE1t, tov\xE1bb\xE1 az \xE9rtekezlet hivatkoz\xE1s\xE1nak megoszt\xE1s\xE1val is megh\xEDvhat m\xE1sokat.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Egyetlen kattint\xE1ssal bekapcsol\xF3dhat \xE9rtekezletekbe",
      OPTIONS_DESCRIPTION_JOIN:
        "M\xE1r van hivatkoz\xE1sa? Adja meg az \xE9rtekezlet hivatkoz\xE1s\xE1t, vagy kezdje el a saj\xE1t \xE9rtekezlet\xE9t."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Oleh Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Tentang",
      OPTIONS_SIGN_OUT: "Keluar",
      OPTIONS_ACCOUNT_INFO: "Masuk sebagai: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Instal ekstensi Skype untuk membuat & bergabung dengan rapat Skype di web dengan cepat.",
      OPTIONS_DESCRIPTION_LINETWO: "Tidak perlu mendaftar atau mengunduh.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Buat panggilan video gratis dengan sekali klik!",
      OPTIONS_DESCRIPTION_CREATE:
        "Ingin membuat panggilan Skype dengan cepat dan meminta teman Anda bergabung? Membuat panggilan tidak pernah semudah dan secepat ini! Anda dapat menyesuaikan nama rapat dan avatar Anda serta mengundang orang lain dengan membagikan tautan rapat.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Gabung rapat dengan satu klik",
      OPTIONS_DESCRIPTION_JOIN: "Sudah memiliki tautan? Masukkan tautan rapat atau mulai rapat Anda sendiri."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Fr\xE1 Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Um",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Innskr\xE1\xF0(ur) sem: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Settu upp Skype-vi\xF0b\xF3tina til a\xF0 b\xFAa til og tengjast Skype-fundum \xE1 vefnum \xE1 flj\xF3tlegan h\xE1tt.",
      OPTIONS_DESCRIPTION_LINETWO: "Engir innskr\xE1ningargluggar. Ekki er krafist ni\xF0urhals.",
      OPTIONS_DESCRIPTION_CREATETITLE: "B\xFA\xF0u til \xF3keypis mynds\xEDmtal me\xF0 einum smelli!",
      OPTIONS_DESCRIPTION_CREATE:
        "Viltu hefja Skype-s\xEDmtal \xE1 flj\xF3tlegan h\xE1tt og f\xE1 vini \xFE\xEDna til a\xF0 tengjast? \xDEa\xF0 hefur aldrei veri\xF0 eins einfalt a\xF0 hefja s\xEDmtal! \xDE\xFA getur s\xE9rstillt fundarheiti\xF0 og notandamyndina \xFE\xEDna og bo\xF0i\xF0 \xF6\xF0rum me\xF0 \xFEv\xED a\xF0 deila fundartenglinum.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Tengjast fundi me\xF0 einum smelli",
      OPTIONS_DESCRIPTION_JOIN: "Ertu \xFEegar me\xF0 tengil? Sl\xE1\xF0u inn fundartengilinn e\xF0a byrja\xF0u \xFEinn eiginn fund."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Di Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Informazioni",
      OPTIONS_SIGN_OUT: "Disconnetti",
      OPTIONS_ACCOUNT_INFO: "Accesso effettuato come: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Istalla l'estensione Skype per creare e unirsi rapidamente alle riunioni Skype sul web.",
      OPTIONS_DESCRIPTION_LINETWO: "Nessuna iscrizione. Nessun download necessario.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Crea una videochiamata gratuita con un clic!",
      OPTIONS_DESCRIPTION_CREATE:
        "Vuoi creare rapidamente una chiamata su Skype e farti raggiungere dai tuoi amici? Creare una chiamata non \xE8 mai stato cos\xEC facile e veloce! Puoi personalizzare il nome e l'avatar della tua riunione e invitare gli altri condividendo il link della riunione.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Partecipa a una riunione con un clic",
      OPTIONS_DESCRIPTION_JOIN: "Hai gi\xE0 un link? Inserisci il link della riunione o inizia la tua riunione."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation \u63D0\u4F9B",
      OPTIONS_ABOUT_TITLE: "\u6982\u8981",
      OPTIONS_SIGN_OUT: "\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8",
      OPTIONS_ACCOUNT_INFO: "${skypeId} \u3068\u3057\u3066\u30B5\u30A4\u30F3\u30A4\u30F3\u6E08\u307F",
      OPTIONS_DESCRIPTION_LINEONE:
        "Skype \u62E1\u5F35\u6A5F\u80FD\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3068\u3001Web \u4E0A\u306E Skype \u4F1A\u8B70\u3092\u3059\u3070\u3084\u304F\u4F5C\u6210\u3057\u3066\u53C2\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306F\u4E0D\u8981\u3067\u3059\u3002",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u30EF\u30F3\u30AF\u30EA\u30C3\u30AF\u3067\u7121\u6599\u306E\u30D3\u30C7\u30AA\u901A\u8A71\u3092\u4F5C\u6210",
      OPTIONS_DESCRIPTION_CREATE:
        "Skype \u901A\u8A71\u3092\u3059\u3070\u3084\u304F\u4F5C\u6210\u3057\u3066\u3001\u53CB\u9054\u306B\u53C2\u52A0\u3057\u3066\u3082\u3089\u3044\u307E\u3059\u304B? \u901A\u8A71\u306E\u4F5C\u6210\u304C\u3053\u308C\u307E\u3067\u3088\u308A\u7C21\u5358\u304B\u3064\u8FC5\u901F\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u4F1A\u8B70\u306E\u30EA\u30F3\u30AF\u3092\u5171\u6709\u3059\u308B\u3068\u3001\u4F1A\u8B70\u540D\u3068\u30A2\u30D0\u30BF\u30FC\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3057\u3066\u3001\u4ED6\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u62DB\u5F85\u3067\u304D\u307E\u3059\u3002",
      OPTIONS_DESCRIPTION_JOINTITLE: "\u30EF\u30F3\u30AF\u30EA\u30C3\u30AF\u3067\u4F1A\u8B70\u306B\u53C2\u52A0",
      OPTIONS_DESCRIPTION_JOIN:
        "\u65E2\u306B\u30EA\u30F3\u30AF\u304C\u3042\u308A\u307E\u3059\u304B? \u4F1A\u8B70\u30EA\u30F3\u30AF\u3092\u5165\u529B\u3059\u308B\u304B\u3001\u81EA\u5206\u306E\u4F1A\u8B70\u3092\u958B\u59CB\u3057\u307E\u3059\u3002"
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "By Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u10E8\u10D4\u10E1\u10D0\u10EE\u10D4\u10D1",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO:
        "\u10E8\u10D4\u10E1\u10E3\u10DA\u10D8 \u10EE\u10D0\u10E0\u10D7, \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Install the Skype extension for quickly creating & joining Skype meetings on web.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u10D3\u10D0\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D8\u10E0\u10D4\u10D1\u10D4\u10D1\u10D8 \u10D0\u10E0 \u10D0\u10E0\u10D8\u10E1. \u10E1\u10D0\u10ED\u10D8\u10E0\u10DD\u10D0 \u10E9\u10D0\u10DB\u10DD\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D4\u10D1\u10D8.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u10E8\u10D4\u10E5\u10DB\u10D4\u10DC\u10D8\u10D7 \u10E3\u10E4\u10D0\u10E1\u10DD \u10D5\u10D8\u10D3\u10D4\u10DD\u10D6\u10D0\u10E0\u10D8 \u10D4\u10E0\u10D7\u10D8 \u10D3\u10D0\u10EC\u10D9\u10D0\u10DE\u10E3\u10DC\u10D4\u10D1\u10D8\u10D7!",
      OPTIONS_DESCRIPTION_CREATE:
        "Want to quickly create a Skype call and have your friends join you? Creating a call has never been easier and quicker! You can customize your meeting name and avatar and invite others by sharing the meeting link.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u10E8\u10D4\u10E3\u10D4\u10E0\u10D7\u10D3\u10D8\u10D7 \u10DD\u10DC\u10DA\u10D0\u10D8\u10DC-\u10D9\u10E0\u10D4\u10D1\u10D0\u10E1 \u10D4\u10E0\u10D7\u10D8 \u10D3\u10D0\u10EC\u10D9\u10D0\u10DE\u10E3\u10DC\u10D4\u10D1\u10D8\u10D7",
      OPTIONS_DESCRIPTION_JOIN: "Already have a link? Enter the meeting link or start your own meeting."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT:
        "Microsoft \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0446\u0438\u044F\u0441\u044B \u04B1\u0441\u044B\u043D\u0430\u0434\u044B",
      OPTIONS_ABOUT_TITLE: "\u0411\u0430\u0493\u0434\u0430\u0440\u043B\u0430\u043C\u0430 \u0442\u0443\u0440\u0430\u043B\u044B",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Signed in as: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0442\u0435 Skype \u0436\u0438\u043D\u0430\u043B\u044B\u0441\u0442\u0430\u0440\u044B\u043D \u0436\u044B\u043B\u0434\u0430\u043C \u0436\u0430\u0441\u0430\u0443 \u0436\u04D9\u043D\u0435 \u043E\u0493\u0430\u043D \u049B\u043E\u0441\u044B\u043B\u0443 \u04AF\u0448\u0456\u043D Skype \u043A\u0435\u04A3\u0435\u0439\u0442\u0456\u043C\u0456\u043D \u043E\u0440\u043D\u0430\u0442\u044B\u04A3\u044B\u0437.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0416\u04AF\u0439\u0435\u0433\u0435 \u043A\u0456\u0440\u0443 \u049B\u0430\u0436\u0435\u0442\u0456 \u0436\u043E\u049B. \u0416\u04AF\u043A\u0442\u0435\u043F \u0430\u043B\u0443 \u049B\u0430\u0436\u0435\u0442\u0456 \u0436\u043E\u049B.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0411\u0456\u0440 \u0440\u0435\u0442 \u0431\u0430\u0441\u0443 \u0430\u0440\u049B\u044B\u043B\u044B \u0442\u0435\u0433\u0456\u043D \u0431\u0435\u0439\u043D\u0435 \u049B\u043E\u04A3\u044B\u0440\u0430\u0443 \u0436\u0430\u0441\u0430\u04A3\u044B\u0437!",
      OPTIONS_DESCRIPTION_CREATE:
        "Skype \u049B\u043E\u04A3\u044B\u0440\u0430\u0443\u044B\u043D \u0436\u044B\u043B\u0434\u0430\u043C \u0436\u0430\u0441\u0430\u043F, \u0434\u043E\u0441\u0442\u0430\u0440\u044B\u04A3\u044B\u0437\u0434\u044B\u04A3 \u0441\u0456\u0437\u0433\u0435 \u049B\u043E\u0441\u044B\u043B\u0443\u044B\u043D \u049B\u0430\u043B\u0430\u0439\u0441\u044B\u0437 \u0431\u0430? \u049A\u043E\u04A3\u044B\u0440\u0430\u0443\u0434\u044B \u0436\u0430\u0441\u0430\u0443 \u0435\u0448\u049B\u0430\u0448\u0430\u043D \u043E\u04A3\u0430\u0439 \u04D9\u0440\u0456 \u0436\u044B\u043B\u0434\u0430\u043C \u0431\u043E\u043B\u0493\u0430\u043D \u0435\u043C\u0435\u0441! \u0416\u0438\u043D\u0430\u043B\u044B\u0441 \u0430\u0442\u0430\u0443\u044B \u043C\u0435\u043D \u0430\u0432\u0430\u0442\u0430\u0440\u044B\u04A3\u044B\u0437\u0434\u044B \u0440\u0435\u0442\u0442\u0435\u043F, \u0436\u0438\u043D\u0430\u043B\u044B\u0441 \u0441\u0456\u043B\u0442\u0435\u043C\u0435\u0441\u0456\u043D \u0431\u04E9\u043B\u0456\u0441\u0443 \u0430\u0440\u049B\u044B\u043B\u044B \u0431\u0430\u0441\u049B\u0430\u043B\u0430\u0440\u0434\u044B \u0448\u0430\u049B\u044B\u0440\u0430 \u0430\u043B\u0430\u0441\u044B\u0437.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u0411\u0456\u0440 \u0440\u0435\u0442 \u0431\u0430\u0441\u0443 \u0430\u0440\u049B\u044B\u043B\u044B \u0436\u0438\u043D\u0430\u043B\u044B\u0441\u049B\u0430 \u049B\u043E\u0441\u044B\u043B\u0443",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0421\u0456\u043B\u0442\u0435\u043C\u0435 \u0431\u04B1\u0440\u044B\u043D\u043D\u0430\u043D \u0431\u0430\u0440 \u043C\u0430? \u0416\u0438\u043D\u0430\u043B\u044B\u0441 \u0441\u0456\u043B\u0442\u0435\u043C\u0435\u0441\u0456\u043D \u0435\u043D\u0433\u0456\u0437\u0456\u04A3\u0456\u0437 \u043D\u0435\u043C\u0435\u0441\u0435 \u0436\u0435\u043A\u0435 \u0436\u0438\u043D\u0430\u043B\u044B\u0441\u044B\u04A3\u044B\u0437\u0434\u044B \u0431\u0430\u0441\u0442\u0430\u04A3\u044B\u0437."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "\u0CB8\u0CCD\u0C95\u0CC8\u0CAA\u0CCD",
      OPTIONS_BRANDING_TEXT: "Microsoft \u0C95\u0CBE\u0CB0\u0CCD\u0CAA\u0CCA\u0CB0\u0CC7\u0CB6\u0CA8\u0CCD \u0CAE\u0CC2\u0CB2\u0C95",
      OPTIONS_ABOUT_TITLE: "\u0C95\u0CC1\u0CB0\u0CBF\u0CA4\u0CC1",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO:
        "\u0CB9\u0CC0\u0C97\u0CC6 \u0CB8\u0CC8\u0CA8\u0CCD \u0C87\u0CA8\u0CCD \u0CAE\u0CBE\u0CA1\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0CB5\u0CC6\u0CAC\u0CCD\u200C\u0CA8\u0CB2\u0CCD\u0CB2\u0CBF Skype \u0CB8\u0CAD\u0CC6\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA4\u0CCD\u0CB5\u0CB0\u0CBF\u0CA4\u0CB5\u0CBE\u0C97\u0CBF \u0CB0\u0C9A\u0CBF\u0CB8\u0CB2\u0CC1 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CB8\u0CC7\u0CB0\u0CB2\u0CC1 Skype \u0CB5\u0CBF\u0CB8\u0CCD\u0CA4\u0CB0\u0CA3\u0CC6\u0CAF\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB8\u0CCD\u0CA5\u0CBE\u0CAA\u0CA8\u0CC6\u0C97\u0CCA\u0CB3\u0CBF\u0CB8\u0CBF.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0CAF\u0CBE\u0CB5\u0CC1\u0CA6\u0CC7 \u0CB8\u0CC8\u0CA8\u0CCD \u0C85\u0CAA\u0CCD\u200D\u200C\u0C97\u0CB3\u0CBF\u0CB2\u0CCD\u0CB2. \u0CAF\u0CBE\u0CB5\u0CC1\u0CA6\u0CC7 \u0CA1\u0CCC\u0CA8\u0CCD\u200D\u200C\u0CB2\u0CCB\u0CA1\u0CCD\u200D\u200D\u0C97\u0CB3 \u0C85\u0C97\u0CA4\u0CCD\u0CAF\u0CB5\u0CBF\u0CB2\u0CCD\u0CB2.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0C92\u0C82\u0CA6\u0CC7 \u0C95\u0CCD\u0CB2\u0CBF\u0C95\u0CCD\u200C\u0CA8\u0CBF\u0C82\u0CA6 \u0C89\u0C9A\u0CBF\u0CA4 \u0CB5\u0CC0\u0CA1\u0CBF\u0CAF\u0CCA \u0C95\u0CB0\u0CC6\u0CAF\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB0\u0C9A\u0CBF\u0CB8\u0CBF!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0CA4\u0CCD\u0CB5\u0CB0\u0CBF\u0CA4\u0CB5\u0CBE\u0C97\u0CBF Skype \u0C95\u0CB0\u0CC6\u0CAF\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB0\u0C9A\u0CBF\u0CB8\u0CB2\u0CC1 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CA8\u0CBF\u0CAE\u0CCD\u0CAE \u0CB8\u0CCD\u0CA8\u0CC7\u0CB9\u0CBF\u0CA4\u0CB0\u0CC1 \u0CA8\u0CBF\u0CAE\u0CCD\u0CAE\u0CCA\u0C82\u0CA6\u0CBF\u0C97\u0CC6 \u0CB8\u0CC7\u0CB0\u0CBF\u0C95\u0CCA\u0CB3\u0CCD\u0CB3\u0CB2\u0CC1 \u0CAC\u0CAF\u0CB8\u0CC1\u0CB5\u0CBF\u0CB0\u0CBE? \u0C95\u0CB0\u0CC6\u0CAF\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB0\u0C9A\u0CBF\u0CB8\u0CC1\u0CB5\u0CC1\u0CA6\u0CC1 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6\u0C82\u0CA6\u0CC2 \u0CB8\u0CC1\u0CB2\u0CAD \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CB5\u0CC7\u0C97\u0CB5\u0CBE\u0C97\u0CBF\u0CB0\u0CB2\u0CBF\u0CB2\u0CCD\u0CB2! \u0CA8\u0CBF\u0CAE\u0CCD\u0CAE \u0CB8\u0CAD\u0CC6\u0CAF \u0CB9\u0CC6\u0CB8\u0CB0\u0CC1 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0C85\u0CB5\u0CA4\u0CBE\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA8\u0CC0\u0CB5\u0CC1 \u0C97\u0CCD\u0CB0\u0CBE\u0CB9\u0C95\u0CC0\u0CAF\u0C97\u0CCA\u0CB3\u0CBF\u0CB8\u0CAC\u0CB9\u0CC1\u0CA6\u0CC1 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0CB8\u0CAD\u0CC6\u0CAF \u0CB2\u0CBF\u0C82\u0C95\u0CCD \u0C85\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0C82\u0C9A\u0CBF\u0C95\u0CCA\u0CB3\u0CCD\u0CB3\u0CC1\u0CB5 \u0CAE\u0CC2\u0CB2\u0C95 \u0C87\u0CA4\u0CB0\u0CB0\u0CA8\u0CCD\u0CA8\u0CC1 \u0C86\u0CB9\u0CCD\u0CB5\u0CBE\u0CA8\u0CBF\u0CB8\u0CAC\u0CB9\u0CC1\u0CA6\u0CC1.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u0C92\u0C82\u0CA6\u0CC7 \u0C95\u0CCD\u0CB2\u0CBF\u0C95\u0CCD\u200D\u200C\u0CA8 \u0CAE\u0CC2\u0CB2\u0C95 \u0CB8\u0CAD\u0CC6\u0C97\u0CC6 \u0CB8\u0CC7\u0CB0\u0CBF\u0C95\u0CCA\u0CB3\u0CCD\u0CB3\u0CBF",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0C88\u0C97\u0CBE\u0C97\u0CB2\u0CC7 \u0CB2\u0CBF\u0C82\u0C95\u0CCD \u0CB9\u0CCA\u0C82\u0CA6\u0CBF\u0CA6\u0CCD\u0CA6\u0CC0\u0CB0\u0CBE? \u0CB8\u0CAD\u0CC6\u0CAF \u0CB2\u0CBF\u0C82\u0C95\u0CCD \u0CA8\u0CAE\u0CC2\u0CA6\u0CBF\u0CB8\u0CBF \u0C85\u0CA5\u0CB5\u0CBE \u0CA8\u0CBF\u0CAE\u0CCD\u0CAE \u0CB8\u0CCD\u0CB5\u0C82\u0CA4 \u0CB8\u0CAD\u0CC6\u0CAF\u0CA8\u0CCD\u0CA8\u0CC1 \u0CAA\u0CCD\u0CB0\u0CBE\u0CB0\u0C82\u0CAD\u0CBF\u0CB8\u0CBF."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\uC815\uBCF4",
      OPTIONS_SIGN_OUT: "\uB85C\uADF8\uC544\uC6C3",
      OPTIONS_ACCOUNT_INFO: "\uB2E4\uC74C\uC73C\uB85C \uB85C\uADF8\uC778: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\uC6F9\uC5D0\uC11C Skype \uBAA8\uC784\uC744 \uBE60\uB974\uAC8C \uB9CC\uB4E4\uACE0 \uCC38\uAC00\uD560 \uC218 \uC788\uB3C4\uB85D Skype \uD655\uC7A5\uC744 \uC124\uCE58\uD558\uC138\uC694.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\uB4F1\uB85D\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uD544\uC694\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\uD55C \uD074\uB9AD\uC73C\uB85C \uBB34\uB8CC \uC601\uC0C1 \uD1B5\uD654\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694!",
      OPTIONS_DESCRIPTION_CREATE:
        "\uC2E0\uC18D\uD558\uAC8C Skype \uD1B5\uD654\uB97C \uB9CC\uB4E4\uACE0 \uCE5C\uAD6C\uB97C \uCD08\uB300\uD558\uACE0 \uC2F6\uC73C\uC2E0\uAC00\uC694? \uD1B5\uD654\uB97C \uC0DD\uC131\uD558\uB294 \uAC83\uC774 \uADF8 \uC5B4\uB290 \uB54C\uBCF4\uB2E4 \uC27D\uACE0 \uBE68\uB77C\uC84C\uC2B5\uB2C8\uB2E4! \uBAA8\uC784 \uB9C1\uD06C\uB97C \uACF5\uC720\uD558\uC5EC \uBAA8\uC784 \uC774\uB984 \uBC0F \uC544\uBC14\uD0C0\uB97C \uC0AC\uC6A9\uC790 \uC9C0\uC815\uD558\uACE0 \uB2E4\uB978 \uC0AC\uB78C\uC744 \uCD08\uB300\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
      OPTIONS_DESCRIPTION_JOINTITLE: "\uD074\uB9AD \uD55C \uBC88\uC73C\uB85C \uBAA8\uC784 \uCC38\uAC00",
      OPTIONS_DESCRIPTION_JOIN:
        "\uC774\uBBF8 \uB9C1\uD06C\uAC00 \uC788\uC2B5\uB2C8\uAE4C? \uBAA8\uC784 \uB9C1\uD06C\uB97C \uC785\uB825\uD558\uAC70\uB098 \uC9C1\uC811 \uBAA8\uC784\uC744 \uC2DC\uC791\uD558\uC138\uC694."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u0644\u06D5\u0644\u0627\u06CC\u06D5\u0646 Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u062F\u06D5\u0631\u0628\u0627\u0631\u06D5\u06CC",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Signed in as: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Install the Skype extension for quickly creating & joining Skype meetings on web.",
      OPTIONS_DESCRIPTION_LINETWO: "No sign ups. No downloads required.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Create a free video call with one click",
      OPTIONS_DESCRIPTION_CREATE:
        "Want to quickly create a Skype call and have your friends join you? Creating a call has never been easier and quicker! You can customize your meeting name and avatar and invite others by sharing the meeting link.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Join a meeting with one click",
      OPTIONS_DESCRIPTION_JOIN: "Already have a link? Enter the meeting link or start your own meeting."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Vun der Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Iwwer",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Ugemellt als: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Install\xE9iert d'Skype-Erweiderung, fir s\xE9ier Skype Reuniounen um Web ze schafen a b\xE4izetrieden.",
      OPTIONS_DESCRIPTION_LINETWO: "Keng Umeldungen. Keng Downloaden erfuerderlech.",
      OPTIONS_DESCRIPTION_CREATETITLE: "E gratis Video-Uruff mat engem Klick schafen!",
      OPTIONS_DESCRIPTION_CREATE:
        "W\xEBllt Dir s\xE9ier e Skype-Uruff schafen an \xC4r Fr\xEBnn b\xE4itriede loossen? En Uruff schafe war nach ni m\xE9i einfach a m\xE9i s\xE9ier! Dir k\xEBnnt \xC4re Reuniounsnumm an Avatar personalis\xE9ieren an anerer invit\xE9ieren andeems Dir de Reuniounslink deelt.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Enger Reunioun mat engem Klick b\xE4itrieden",
      OPTIONS_DESCRIPTION_JOIN: "Hu Dir schonn e Link? Gitt de Reuniounslink an oder start \xC4r eege Reunioun."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "\u201ESkype\u201C",
      OPTIONS_BRANDING_TEXT: "I\u0161 \u201EMicrosoft Corporation\u201C",
      OPTIONS_ABOUT_TITLE: "Apie",
      OPTIONS_SIGN_OUT: "Atsijungti",
      OPTIONS_ACCOUNT_INFO: "Prisijungta kaip: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u012Ediekite \u201ESkype\u201C pl\u0117tin\u012F, kad gal\u0117tum\u0117te greitai sukurti ir prisijungti prie \u201ESkype\u201C susitikim\u0173 \u017Einiatinklyje.",
      OPTIONS_DESCRIPTION_LINETWO: "Nereikia prisiregistruoti. Nereikia atsisi\u0173sti.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Kurti nemokam\u0105 vaizdo skambut\u012F vienu spustel\u0117jimu!",
      OPTIONS_DESCRIPTION_CREATE:
        "Norite greitai sukurti \u201ESkype\u201C skambut\u012F, prie kurio gal\u0117t\u0173 prisijungti j\u016Bs\u0173 draugai? Skambut\u012F sukurti dar niekada nebuvo taip lengva ir greita! Galite tinkinti savo susitikimo pavadinim\u0105 ir pseudoportret\u0105 bei pakviesti kitus bendrindami susitikimo sait\u0105.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Prisijunkite prie susitikimo vienu spustel\u0117jimu",
      OPTIONS_DESCRIPTION_JOIN: "Jau turite sait\u0105? \u012Eveskite susitikimo sait\u0105 arba prad\u0117kite savo susitikim\u0105."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Nodro\u0161ina korpor\u0101cija Microsoft",
      OPTIONS_ABOUT_TITLE: "Par",
      OPTIONS_SIGN_OUT: "Izrakst\u012B\u0161an\u0101s",
      OPTIONS_ACCOUNT_INFO: "Pierakst\u012Bjies k\u0101: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Instal\u0113jiet Skype papla\u0161in\u0101jumu, lai t\u012Bmekl\u012B \u0101tri izveidotu un pievienotos Skype sapulc\u0113m.",
      OPTIONS_DESCRIPTION_LINETWO: "Nav nepiecie\u0161ama re\u0123istr\u0101cija. Nav nepiecie\u0161ama lejupiel\u0101de.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Izveidojiet bezmaksas videozvanu ar vienu klik\u0161\u0137i!",
      OPTIONS_DESCRIPTION_CREATE:
        "Vai v\u0113laties \u0101tri izveidot Skype zvanu un pievienot draugus? Zvana izveide nekad nav bijusi vienk\u0101r\u0161\u0101ka un \u0101tr\u0101ka! Varat piel\u0101got sapulces nosaukumu un avat\u0101ru, un uzaicin\u0101t citus, kop\u012Bgojot sapulces saiti.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Pievienoties sapulcei ar vienu klik\u0161\u0137i",
      OPTIONS_DESCRIPTION_JOIN: "Vai jums jau ir saite? Ievadiet sapulces saiti vai s\u0101ciet savu sapulci."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "By Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u0417\u0430",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO:
        "\u041F\u0440\u0438\u0458\u0430\u0432\u0435\u043D\u0438 \u0441\u0442\u0435 \u043A\u0430\u043A\u043E: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0418\u043D\u0441\u0442\u0430\u043B\u0438\u0440\u0430\u0458\u0442\u0435 \u0458\u0430 \u043D\u0430\u0441\u0442\u0430\u0432\u043A\u0430\u0442\u0430 \u0437\u0430 Skype \u0437\u0430 \u0431\u0440\u0437\u043E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u045A\u0435 \u0438 \u043F\u0440\u0438\u043A\u043B\u0443\u0447\u0443\u0432\u0430\u045A\u0435 \u043D\u0430 \u0441\u043E\u0441\u0442\u0430\u043D\u043E\u0446\u0438 \u043D\u0430 Skype \u043D\u0430 \u0432\u0435\u0431.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0411\u0435\u0437 \u043F\u0440\u0438\u0458\u0430\u0432\u0443\u0432\u0430\u045A\u0430. \u041D\u0435 \u0441\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u0438 \u043F\u0440\u0435\u0437\u0435\u043C\u0430\u045A\u0430.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0421\u043E\u0437\u0434\u0430\u0458\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u0435\u043D \u0432\u0438\u0434\u0435\u043E\u043F\u043E\u0432\u0438\u043A \u0441\u043E \u0435\u0434\u0435\u043D \u043A\u043B\u0438\u043A!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0421\u0430\u043A\u0430\u0442\u0435 \u0431\u0440\u0437\u043E \u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u0434\u0435\u0442\u0435 \u043F\u043E\u0432\u0438\u043A \u043D\u0430 Skype \u0438 \u0432\u0430\u0448\u0438\u0442\u0435 \u043F\u0440\u0438\u0458\u0430\u0442\u0435\u043B\u0438 \u0434\u0430 \u0432\u0438 \u0441\u0435 \u043F\u0440\u0438\u0434\u0440\u0443\u0436\u0430\u0442? \u0421\u043E\u0437\u0434\u0430\u0432\u0430\u045A\u0435\u0442\u043E \u043F\u043E\u0432\u0438\u043A \u043D\u0438\u043A\u043E\u0433\u0430\u0448 \u043D\u0435 \u0431\u0438\u043B\u043E \u043F\u043E\u043B\u0435\u0441\u043D\u043E \u0438 \u043F\u043E\u0431\u0440\u0437\u043E! \u041C\u043E\u0436\u0435 \u0434\u0430 \u0433\u0438 \u043F\u0440\u0438\u0441\u043F\u043E\u0441\u043E\u0431\u0438\u0442\u0435 \u0438\u043C\u0435\u0442\u043E \u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u043E\u0442 \u043D\u0430 \u0441\u043E\u0441\u0442\u0430\u043D\u043E\u043A\u043E\u0442 \u0438 \u0434\u0430 \u043F\u043E\u043A\u0430\u043D\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0442\u0435 \u0441\u043E \u0441\u043F\u043E\u0434\u0435\u043B\u0443\u0432\u0430\u045A\u0435 \u043D\u0430 \u0432\u0440\u0441\u043A\u0430\u0442\u0430 \u0437\u0430 \u0441\u043E\u0441\u0442\u0430\u043D\u043E\u043A\u043E\u0442.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u041F\u0440\u0438\u0434\u0440\u0443\u0436\u0435\u0442\u0435 \u0441\u0435 \u043D\u0430 \u0441\u043E\u0441\u0442\u0430\u043D\u043E\u043A \u0441\u043E \u0435\u0434\u0435\u043D \u043A\u043B\u0438\u043A",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0412\u0435\u045C\u0435 \u0438\u043C\u0430\u0442\u0435 \u0432\u0440\u0441\u043A\u0430? \u0412\u043D\u0435\u0441\u0435\u0442\u0435 \u0458\u0430 \u0432\u0440\u0441\u043A\u0430\u0442\u0430 \u0437\u0430 \u0441\u043E\u0441\u0442\u0430\u043D\u043E\u043A\u043E\u0442 \u0438\u043B\u0438 \u0437\u0430\u043F\u043E\u0447\u043D\u0435\u0442\u0435 \u0441\u0432\u043E\u0458 \u0441\u043E\u0441\u0442\u0430\u043D\u043E\u043A."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation \u0D28\u0D7D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D24\u0D4D",
      OPTIONS_ABOUT_TITLE: "\u0D06\u0D2E\u0D41\u0D16\u0D02",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO:
        "\u0D07\u0D24\u0D3E\u0D2F\u0D3F \u0D38\u0D48\u0D7B \u0D07\u0D7B \u0D1A\u0D46\u0D2F\u0D4D\u0D24\u0D41: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0D35\u0D46\u0D2C\u0D3F\u0D7D Skype \u0D2E\u0D40\u0D31\u0D4D\u0D31\u0D3F\u0D02\u0D17\u0D41\u0D15\u0D7E \u0D35\u0D47\u0D17\u0D24\u0D4D\u0D24\u0D3F\u0D7D \u0D38\u0D43\u0D37\u0D4D\u0D1F\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D24\u0D3F\u0D28\u0D41\u0D02 \u0D1A\u0D47\u0D30\u0D41\u0D28\u0D4D\u0D28\u0D24\u0D3F\u0D28\u0D41\u0D02 Skype \u0D35\u0D3F\u0D2A\u0D41\u0D32\u0D40\u0D15\u0D30\u0D23\u0D02 \u0D07\u0D7B\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D3E\u0D7E \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0D38\u0D48\u0D7B \u0D05\u0D2A\u0D4D\u0D2A\u0D41\u0D15\u0D33\u0D4A\u0D28\u0D4D\u0D28\u0D41\u0D2E\u0D3F\u0D32\u0D4D\u0D32. \u0D21\u0D57\u0D7A\u0D32\u0D4B\u0D21\u0D41\u0D15\u0D7E \u0D06\u0D35\u0D36\u0D4D\u0D2F\u0D2E\u0D3F\u0D32\u0D4D\u0D32.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0D12\u0D30\u0D41 \u0D15\u0D4D\u0D32\u0D3F\u0D15\u0D4D\u0D15\u0D3F\u0D32\u0D42\u0D1F\u0D46 \u0D12\u0D30\u0D41 \u0D38\u0D57\u0D1C\u0D28\u0D4D\u0D2F \u0D35\u0D40\u0D21\u0D3F\u0D2F\u0D4B \u0D15\u0D4B\u0D7E \u0D38\u0D43\u0D37\u0D4D\u0D1F\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0D35\u0D47\u0D17\u0D24\u0D4D\u0D24\u0D3F\u0D7D \u0D12\u0D30\u0D41 Skype \u0D15\u0D4B\u0D7E \u0D38\u0D43\u0D37\u0D4D\u0D1F\u0D3F\u0D15\u0D4D\u0D15\u0D3E\u0D28\u0D41\u0D02 \u0D28\u0D3F\u0D19\u0D4D\u0D19\u0D33\u0D41\u0D1F\u0D46 \u0D38\u0D41\u0D39\u0D43\u0D24\u0D4D\u0D24\u0D41\u0D15\u0D4D\u0D15\u0D7E \u0D28\u0D3F\u0D19\u0D4D\u0D19\u0D33\u0D4B\u0D1F\u0D4A\u0D2A\u0D4D\u0D2A\u0D02 \u0D1A\u0D47\u0D30\u0D3E\u0D28\u0D41\u0D02 \u0D06\u0D17\u0D4D\u0D30\u0D39\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D41\u0D23\u0D4D\u0D1F\u0D4B? \u0D12\u0D30\u0D41 \u0D15\u0D4B\u0D7E \u0D38\u0D43\u0D37\u0D4D\u200C\u0D1F\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D24\u0D4D \u0D12\u0D30\u0D3F\u0D15\u0D4D\u0D15\u0D32\u0D41\u0D02 \u0D0E\u0D33\u0D41\u0D2A\u0D4D\u0D2A\u0D24\u0D4D\u0D24\u0D3F\u0D32\u0D41\u0D02 \u0D35\u0D47\u0D17\u0D24\u0D4D\u0D24\u0D3F\u0D32\u0D41\u0D02 \u0D06\u0D2F\u0D3F\u0D30\u0D41\u0D28\u0D4D\u0D28\u0D3F\u0D32\u0D4D\u0D32! \u0D2E\u0D40\u0D31\u0D4D\u0D31\u0D3F\u0D02\u0D17\u0D4D \u0D28\u0D3E\u0D2E\u0D35\u0D41\u0D02 \u0D05\u0D35\u0D24\u0D3E\u0D31\u0D41\u0D02 \u0D07\u0D1A\u0D4D\u0D1B\u0D3E\u0D28\u0D41\u0D38\u0D43\u0D24\u0D2E\u0D3E\u0D15\u0D4D\u0D15\u0D3E\u0D28\u0D41\u0D02 \u0D2E\u0D40\u0D31\u0D4D\u0D31\u0D3F\u0D02\u0D17\u0D4D \u0D32\u0D3F\u0D19\u0D4D\u0D15\u0D4D \u0D2A\u0D19\u0D4D\u0D15\u0D3F\u0D1F\u0D4D\u0D1F\u0D41\u0D15\u0D4A\u0D23\u0D4D\u0D1F\u0D4D \u0D2E\u0D31\u0D4D\u0D31\u0D41\u0D33\u0D4D\u0D33\u0D35\u0D30\u0D46 \u0D15\u0D4D\u0D37\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D3E\u0D28\u0D41\u0D02 \u0D28\u0D3F\u0D19\u0D4D\u0D19\u0D7E\u0D15\u0D4D\u0D15\u0D4D \u0D15\u0D34\u0D3F\u0D2F\u0D41\u0D02.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u0D12\u0D30\u0D41 \u0D15\u0D4D\u0D32\u0D3F\u0D15\u0D4D\u0D15\u0D3F\u0D32\u0D42\u0D1F\u0D46 \u0D12\u0D30\u0D41 \u0D2E\u0D40\u0D31\u0D4D\u0D31\u0D3F\u0D02\u0D17\u0D3F\u0D7D \u0D1A\u0D47\u0D30\u0D41\u0D15",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0D07\u0D24\u0D3F\u0D28\u0D15\u0D02 \u0D12\u0D30\u0D41 \u0D32\u0D3F\u0D19\u0D4D\u0D15\u0D4D \u0D09\u0D23\u0D4D\u0D1F\u0D4B? \u0D2E\u0D40\u0D31\u0D4D\u0D31\u0D3F\u0D02\u0D17\u0D4D \u0D32\u0D3F\u0D19\u0D4D\u0D15\u0D4D \u0D28\u0D7D\u0D15\u0D41\u0D15\u0D2F\u0D4B \u0D28\u0D3F\u0D19\u0D4D\u0D19\u0D33\u0D41\u0D1F\u0D47\u0D24\u0D3E\u0D2F \u0D2E\u0D40\u0D31\u0D4D\u0D31\u0D3F\u0D02\u0D17\u0D4D \u0D06\u0D30\u0D02\u0D2D\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15\u0D2F\u0D4B \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation \u0926\u094D\u0935\u093E\u0930\u0947",
      OPTIONS_ABOUT_TITLE: "\u092F\u093E\u0935\u093F\u0937\u092F\u0940",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO:
        "\u092F\u093E \u0928\u093E\u0935\u093E\u0928\u0947 \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0947\u0932\u0947: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0935\u0947\u092C\u0935\u0930 Skype \u092D\u0947\u091F\u0940 \u091C\u0932\u0926\u092A\u0923\u0947 \u0924\u092F\u093E\u0930 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u0906\u0923\u093F \u0924\u094D\u092F\u093E\u0924 \u0938\u093E\u092E\u0940\u0932 \u0939\u094B\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 Skype \u090F\u0915\u094D\u0938\u091F\u0947\u0902\u0936\u0928 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0915\u0930\u093E.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0915\u094B\u0923\u0924\u0947\u0939\u0940 \u0938\u093E\u0907\u0928 \u0905\u092A \u0915\u0930\u0923\u0947 \u0928\u093E\u0939\u0940. \u0915\u094B\u0923\u0924\u0947\u0939\u0940 \u0921\u093E\u0909\u0928\u0932\u094B\u0921\u094D\u0938 \u0906\u0935\u0936\u094D\u092F\u0915 \u0928\u093E\u0939\u0940\u0924.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u090F\u0915\u093E \u0915\u094D\u0932\u093F\u0915\u0938\u0939 \u0935\u093F\u0928\u093E\u092E\u0942\u0932\u094D\u092F \u0935\u094D\u0939\u093F\u0921\u093F\u0913 \u0915\u0949\u0932 \u0924\u092F\u093E\u0930 \u0915\u0930\u093E!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0924\u094D\u0935\u0930\u093F\u0924 Skype \u0915\u0949\u0932 \u0924\u092F\u093E\u0930 \u0915\u0930\u093E\u092F\u091A\u0947 \u0906\u0939\u0947 \u0915\u093E \u0906\u0923\u093F \u0906\u092A\u0932\u094D\u092F\u093E \u092E\u093F\u0924\u094D\u0930\u093E\u0902\u0928\u093E \u0906\u092A\u0932\u094D\u092F\u093E\u0936\u0940 \u0915\u0928\u0947\u0915\u094D\u091F \u0915\u0930\u093E\u092F\u091A\u0947 \u0906\u0939\u0947 \u0915\u093E? \u0915\u0949\u0932 \u0924\u092F\u093E\u0930 \u0915\u0930\u0923\u0947 \u0915\u0927\u0940\u0939\u0940 \u0907\u0924\u0915\u0947 \u0938\u094B\u092A\u0947 \u0906\u0923\u093F \u091C\u0932\u0926 \u0928\u0935\u094D\u0939\u0924\u0947! \u0906\u092A\u0923 \u0906\u092A\u0932\u094D\u092F\u093E \u092D\u0947\u091F\u0940\u091A\u0947 \u0928\u093E\u0935 \u0935 \u0905\u0935\u0924\u093E\u0930 \u0938\u093E\u0928\u0941\u0915\u0942\u0932\u093F\u0924 \u0915\u0930\u0942 \u0936\u0915\u0924\u093E \u0906\u0923\u093F \u092D\u0947\u091F\u0940\u091A\u0940 \u0932\u093F\u0902\u0915 \u0938\u093E\u092E\u093E\u092F\u093F\u0915 \u0915\u0930\u0942\u0928 \u0907\u0924\u0930\u093E\u0902\u0928\u093E \u0906\u092E\u0902\u0924\u094D\u0930\u093F\u0924 \u0915\u0930\u0942 \u0936\u0915\u0924\u093E.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u092D\u0947\u091F\u0940\u092E\u0927\u094D\u092F\u0947 \u090F\u0915\u093E \u0915\u094D\u0932\u093F\u0915\u0938\u0939 \u0938\u093E\u092E\u0940\u0932 \u0935\u094D\u0939\u093E",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0906\u0927\u0940\u092A\u093E\u0938\u0942\u0928 \u0932\u093F\u0902\u0915 \u0906\u0939\u0947 \u0915\u093E? \u092D\u0947\u091F\u0940\u091A\u0940 \u0932\u093F\u0902\u0915 \u092A\u094D\u0930\u0935\u093F\u0937\u094D\u0920 \u0915\u0930\u093E \u0915\u093F\u0902\u0935\u093E \u0906\u092A\u0932\u0940 \u0938\u094D\u0935\u0924\u0903\u091A\u0940 \u092D\u0947\u091F \u092A\u094D\u0930\u093E\u0930\u0902\u092D \u0915\u0930\u093E."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Oleh Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Perihal",
      OPTIONS_SIGN_OUT: "Daftar keluar",
      OPTIONS_ACCOUNT_INFO: "Mendaftar masuk sebagai: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Pasang sambungan Skype untuk mencipta & menyertai mesyuarat Skype pada web dengan cepat.",
      OPTIONS_DESCRIPTION_LINETWO: "Tiada pendaftaran. Tiada muat turun diperlukan.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Cipta panggilan video percuma dengan satu klik!",
      OPTIONS_DESCRIPTION_CREATE:
        "Ingin mencipta panggilan Skype dengan cepat dan minta rakan anda menyertai anda? Mencipta panggilan tidak pernah semudah dan secepat ini! Anda boleh menyesuaikan nama mesyuarat dan avatar anda serta menjemput orang lain dengan berkongsi pautan mesyuarat.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Sertai mesyuarat dengan satu klik",
      OPTIONS_DESCRIPTION_JOIN: "Sudah mempunyai pautan? Masukkan pautan mesyuarat atau mulakan mesyuarat anda sendiri."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Av Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Om",
      OPTIONS_SIGN_OUT: "Logg av",
      OPTIONS_ACCOUNT_INFO: "Logget p\xE5 som: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Installer Skype-utvidelsen for rask oppretting og bli med i Skype-m\xF8ter p\xE5 nettet.",
      OPTIONS_DESCRIPTION_LINETWO: "Ingen registreringer. Ingen nedlastinger kreves.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Opprett en gratis video samtale med ett klikk!",
      OPTIONS_DESCRIPTION_CREATE:
        "Vil du raskt opprette en Skype-samtale og f\xE5 vennene dine til \xE5 bli med? Det har aldri v\xE6rt enklere og raskere \xE5 opprette en samtale! Du kan tilpasse m\xF8tenavnet og avataren og invitere andre ved \xE5 dele m\xF8tekoblingen.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Bli med i et m\xF8te med ett klikk",
      OPTIONS_DESCRIPTION_JOIN: "Har du allerede en kobling? Skriv inn m\xF8tekoblingen, eller start ditt eget m\xF8te."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Door Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Over",
      OPTIONS_SIGN_OUT: "Afmelden",
      OPTIONS_ACCOUNT_INFO: "Aangemeld als: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Installeer de Skype-extensie voor het snel maken en deelnemen aan Skype-vergaderingen op het web.",
      OPTIONS_DESCRIPTION_LINETWO: "Geen aanmeldingen. Downloads zijn niet vereist.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Maak met \xE9\xE9n klik een gratis videogesprek.",
      OPTIONS_DESCRIPTION_CREATE:
        "Wilt u snel een Skype-gesprek starten en uw vrienden laten deelnemen? Het maken van een gesprek was nog nooit zo eenvoudig en snel! U kunt uw naam en avatar van de vergadering aanpassen en anderen uitnodigen door de koppeling naar de vergadering te delen.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Met \xE9\xE9n klik deelnemen aan een vergadering",
      OPTIONS_DESCRIPTION_JOIN: "Hebt u al een koppeling? Voer de koppeling naar de vergadering in of start uw eigen vergadering."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Av Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Om",
      OPTIONS_SIGN_OUT: "Logg ut",
      OPTIONS_ACCOUNT_INFO: "Logga p\xE5 som: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Installer Skype-utvidinga for raskt \xE5 opprette og bli med i Skype-m\xF8te p\xE5 nettet.",
      OPTIONS_DESCRIPTION_LINETWO: "Inga registreringar. Inga nedlastingar p\xE5kravde",
      OPTIONS_DESCRIPTION_CREATETITLE: "Opprett ein kostnadsfri videosamtale med eitt klikk!",
      OPTIONS_DESCRIPTION_CREATE:
        "Vil du raskt opprette ein Skype-samtale og f\xE5 vennane dine med deg? \xC5 opprette ein samtale har aldri vore enklare og raskare! Du kan tilpasse m\xF8tenamnet og avataren og invitere andre ved \xE5 dele m\xF8tekoplinga.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Bli med i eit m\xF8te med eitt klikk",
      OPTIONS_DESCRIPTION_JOIN: "Har du allereie ei kopling? G\xE5 inn p\xE5 m\xF8tekoplinga, eller start ditt eige m\xF8te."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation \u0B26\u0B4D\u0B71\u0B3E\u0B30\u0B3E",
      OPTIONS_ABOUT_TITLE: "\u0B2C\u0B3F\u0B37\u0B5F",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO:
        "\u0B0F\u0B39\u0B3F \u0B2A\u0B30\u0B3F \u0B38\u0B3E\u0B07\u0B28\u0B4D \u0B07\u0B28\u0B4D \u0B39\u0B4B\u0B07\u0B1B\u0B3F: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0B71\u0B47\u0B2C\u0B30\u0B47 \u0B38\u0B4D\u0B15\u0B3E\u0B07\u0B2A\u0B4D \u0B2E\u0B3F\u0B1F\u0B3F\u0B02\u0B17\u0B41\u0B21\u0B3F\u0B15 \u0B36\u0B40\u0B18\u0B4D\u0B30 \u0B38\u0B43\u0B37\u0B4D\u0B1F\u0B3F \u0B15\u0B30\u0B3F\u0B2C\u0B3E \u0B2A\u0B3E\u0B07\u0B01 \u0B38\u0B4D\u0B15\u0B3E\u0B07\u0B2A\u0B4D \u0B38\u0B2E\u0B4D\u0B2A\u0B4D\u0B30\u0B38\u0B3E\u0B30\u0B23 \u0B38\u0B02\u0B38\u0B4D\u0B25\u0B3E\u0B2A\u0B28 \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0B15\u0B4C\u0B23\u0B38\u0B3F \u0B38\u0B3E\u0B07\u0B28\u0B4D \u0B05\u0B2A\u0B4D \u0B28\u0B3E\u0B39\u0B3F\u0B01. \u0B15\u0B4C\u0B23\u0B38\u0B3F \u0B21\u0B3E\u0B09\u0B28\u0B32\u0B4B\u0B21\u0B4D \u0B06\u0B2C\u0B36\u0B4D\u0B5F\u0B15 \u0B28\u0B3E\u0B39\u0B3F\u0B01.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0B17\u0B4B\u0B1F\u0B3F\u0B0F \u0B15\u0B4D\u0B32\u0B3F\u0B15\u0B4D \u0B2C\u0B4D\u0B5F\u0B2C\u0B39\u0B3E\u0B30 \u0B15\u0B30\u0B3F \u0B0F\u0B15 \u0B2E\u0B3E\u0B17\u0B23\u0B3E \u0B2D\u0B3F\u0B21\u0B3F\u0B13 \u0B15\u0B32\u0B4D \u0B38\u0B43\u0B37\u0B4D\u0B1F\u0B3F \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0B0F\u0B15 \u0B38\u0B4D\u0B15\u0B3E\u0B07\u0B2A\u0B4D \u0B15\u0B32\u0B4D \u0B36\u0B40\u0B18\u0B4D\u0B30 \u0B38\u0B43\u0B37\u0B4D\u0B1F\u0B3F \u0B15\u0B30\u0B3F\u0B2C\u0B3E\u0B15\u0B41 \u0B0F\u0B2C\u0B02 \u0B06\u0B2A\u0B23\u0B19\u0B4D\u0B15 \u0B2C\u0B28\u0B4D\u0B27\u0B41\u0B17\u0B23 \u0B06\u0B2A\u0B23\u0B19\u0B4D\u0B15 \u0B38\u0B39 \u0B2F\u0B4B\u0B17 \u0B26\u0B47\u0B2C\u0B3E\u0B15\u0B41 \u0B1A\u0B3E\u0B39\u0B3E\u0B01\u0B28\u0B4D\u0B24\u0B3F? \u0B0F\u0B15 \u0B15\u0B32\u0B4D \u0B38\u0B43\u0B37\u0B4D\u0B1F\u0B3F \u0B15\u0B30\u0B3F\u0B2C\u0B3E \u0B15\u0B26\u0B3E\u0B2A\u0B3F \u0B38\u0B39\u0B1C \u0B0F\u0B2C\u0B02 \u0B36\u0B40\u0B18\u0B4D\u0B30 \u0B39\u0B4B\u0B07\u0B28\u0B3E\u0B39\u0B3F\u0B01! \u0B06\u0B2A\u0B23 \u0B06\u0B2A\u0B23\u0B19\u0B4D\u0B15 \u0B2E\u0B3F\u0B1F\u0B3F\u0B02 \u0B28\u0B3E\u0B2E \u0B0F\u0B2C\u0B02 \u0B05\u0B2C\u0B24\u0B3E\u0B30 \u0B15\u0B37\u0B4D\u0B1F\u0B2E\u0B3E\u0B07\u0B1C\u0B4D \u0B15\u0B30\u0B3F\u0B2A\u0B3E\u0B30\u0B3F\u0B2C\u0B47 \u0B0F\u0B2C\u0B02 \u0B2E\u0B3F\u0B1F\u0B3F\u0B02 \u0B32\u0B3F\u0B19\u0B4D\u0B15\u0B4D \u0B05\u0B02\u0B36\u0B40\u0B26\u0B3E\u0B30 \u0B15\u0B30\u0B3F \u0B05\u0B28\u0B4D\u0B5F\u0B2E\u0B3E\u0B28\u0B19\u0B4D\u0B15\u0B41 \u0B06\u0B2E\u0B28\u0B4D\u0B24\u0B4D\u0B30\u0B23 \u0B15\u0B30\u0B3F\u0B2A\u0B3E\u0B30\u0B3F\u0B2C\u0B47.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u0B17\u0B4B\u0B1F\u0B3F\u0B0F \u0B15\u0B4D\u0B32\u0B3F\u0B15\u0B4D \u0B38\u0B39\u0B3F\u0B24 \u0B0F\u0B15 \u0B2E\u0B3F\u0B1F\u0B3F\u0B02\u0B30\u0B47 \u0B2F\u0B4B\u0B17 \u0B26\u0B3F\u0B05\u0B28\u0B4D\u0B24\u0B41",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0B2A\u0B42\u0B30\u0B4D\u0B2C\u0B30\u0B41 \u0B0F\u0B15 \u0B32\u0B3F\u0B19\u0B4D\u0B15\u0B4D \u0B05\u0B1B\u0B3F? \u0B2E\u0B3F\u0B1F\u0B3F\u0B02 \u0B32\u0B3F\u0B19\u0B4D\u0B15\u0B4D \u0B2A\u0B4D\u0B30\u0B2C\u0B47\u0B36 \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 \u0B15\u0B3F\u0B2E\u0B4D\u0B71\u0B3E \u0B06\u0B2A\u0B23\u0B19\u0B4D\u0B15 \u0B28\u0B3F\u0B1C \u0B2E\u0B3F\u0B1F\u0B3F\u0B02 \u0B06\u0B30\u0B2E\u0B4D\u0B2D \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Oferowane przez Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Informacje",
      OPTIONS_SIGN_OUT: "Wyloguj si\u0119",
      OPTIONS_ACCOUNT_INFO: "Zalogowany jako: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Zainstaluj rozszerzenie Skype, aby szybko tworzy\u0107 i do\u0142\u0105cza\u0107 do spotka\u0144 w przegl\u0105darce.",
      OPTIONS_DESCRIPTION_LINETWO: "Brak rejestracji. Nie s\u0105 wymagane \u017Cadne pliki do pobrania.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Utw\xF3rz bezp\u0142atn\u0105 rozmow\u0119 wideo jednym klikni\u0119ciem!",
      OPTIONS_DESCRIPTION_CREATE:
        "Chcesz szybko utworzy\u0107 rozmow\u0119 przez Skype'a i chcesz, aby twoi znajomi do\u0142\u0105czyli do Ciebie? Tworzenie rozmowy nigdy nie by\u0142o \u0142atwiejsze i szybsze! Mo\u017Cesz dostosowa\u0107 nazw\u0119 spotkania i awatara oraz zaprosi\u0107 inne osoby, udost\u0119pniaj\u0105c im link.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Do\u0142\u0105cz do spotkania jednym klikni\u0119ciem",
      OPTIONS_DESCRIPTION_JOIN: "Masz ju\u017C link? Wprowad\u017A link do spotkania lub rozpocznij w\u0142asne spotkanie."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "By Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Sobre",
      OPTIONS_SIGN_OUT: "Sair",
      OPTIONS_ACCOUNT_INFO: "Conectado como: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Instale a extens\xE3o do Skype para criar e ingressar rapidamente em reuni\xF5es do Skype na Web.",
      OPTIONS_DESCRIPTION_LINETWO: "Sem inscri\xE7\xE3o. N\xE3o \xE9 necess\xE1rio fazer downloads.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Crie uma chamada com v\xEDdeo gr\xE1tis com apenas um clique!",
      OPTIONS_DESCRIPTION_CREATE:
        "Deseja criar rapidamente uma chamada pelo Skype e fazer com que seus amigos juntem-se a voc\xEA? Criar uma chamada nunca foi t\xE3o f\xE1cil e r\xE1pido! Voc\xEA pode personalizar o nome e o avatar da reuni\xE3o e convidar outras pessoas compartilhando o link da reuni\xE3o.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Participe de uma reuni\xE3o com um clique",
      OPTIONS_DESCRIPTION_JOIN: "J\xE1 tem um link? Insira o link da reuni\xE3o ou inicie sua pr\xF3pria reuni\xE3o."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Pela Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Acerca de",
      OPTIONS_SIGN_OUT: "Terminar sess\xE3o",
      OPTIONS_ACCOUNT_INFO: "Conectado como: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Instale a extens\xE3o do Skype para criar e participar rapidamente participar em reuni\xF5es do Skype na Web.",
      OPTIONS_DESCRIPTION_LINETWO: "Sem in\xEDcios de sess\xE3o. N\xE3o \xE9 necess\xE1ria qualquer transfer\xEAncia.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Crie uma chamada de v\xEDdeo gratuita com um clique!",
      OPTIONS_DESCRIPTION_CREATE:
        "Quer criar rapidamente uma chamada Skype e fazer com que os seus amigos se juntem a si? Criar uma chamada nunca foi t\xE3o f\xE1cil e r\xE1pido! Pode personalizar o nome e o avatar da reuni\xE3o e convidar outras pessoas ao partilhar a liga\xE7\xE3o da reuni\xE3o.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Participe numa reuni\xE3o com um clique",
      OPTIONS_DESCRIPTION_JOIN:
        "J\xE1 tem uma liga\xE7\xE3o? Introduza a liga\xE7\xE3o da reuni\xE3o ou inicie a sua pr\xF3pria reuni\xE3o."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "De Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Despre",
      OPTIONS_SIGN_OUT: "Deconecteaz\u0103-te",
      OPTIONS_ACCOUNT_INFO: "Conectat ca: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Instala\u021Bi extensia Skype pentru a crea \u0219i a v\u0103 al\u0103tura rapid la \xEEnt\xE2lniri Skype pe web.",
      OPTIONS_DESCRIPTION_LINETWO: "Nu este necesar\u0103 nicio \xEEnregistrare sau desc\u0103rcare",
      OPTIONS_DESCRIPTION_CREATETITLE: "Crea\u021Bi un apel video gratuit cu un singur clic!",
      OPTIONS_DESCRIPTION_CREATE:
        "Dori\u021Bi s\u0103 crea\u021Bi rapid un apel Skype \u0219i s\u0103 vi se al\u0103ture prietenii? Crearea unui apel nu a fost niciodat\u0103 mai u\u0219oar\u0103 \u0219i mai rapid\u0103! Pute\u021Bi s\u0103 particulariza\u021Bi numele \xEEnt\xE2lnirii \u0219i avatarul \u0219i s\u0103 invita\u021Bi alte persoane, partaj\xE2nd linkul \xEEnt\xE2lnirii.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Al\u0103tura\u021Bi-v\u0103 unei \xEEnt\xE2lniri cu un singur clic",
      OPTIONS_DESCRIPTION_JOIN:
        "Ave\u021Bi deja un link? Introduce\u021Bi linkul \xEEnt\xE2lnirii sau \xEEncepe\u021Bi propria \xEEnt\xE2lnire."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "\u0421\u043A\u0430\u0439\u043F",
      OPTIONS_BRANDING_TEXT:
        "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0446\u0438\u044F \u041C\u0430\u0439\u043A\u0440\u043E\u0441\u043E\u0444\u0442",
      OPTIONS_ABOUT_TITLE: "\u041E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435",
      OPTIONS_SIGN_OUT: "\u0412\u044B\u0445\u043E\u0434",
      OPTIONS_ACCOUNT_INFO: "\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Install the Skype extension for quickly creating & joining Skype meetings on web.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0411\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0439 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0432\u0438\u0434\u0435\u043E\u0437\u0432\u043E\u043D\u043E\u043A \u043E\u0434\u043D\u0438\u043C \u0449\u0435\u043B\u0447\u043A\u043E\u043C.",
      OPTIONS_DESCRIPTION_CREATE:
        "Want to quickly create a Skype call and have your friends join you? Creating a call has never been easier and quicker! You can customize your meeting name and avatar and invite others by sharing the meeting link.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043A \u0441\u043E\u0431\u0440\u0430\u043D\u0438\u044E \u043E\u0434\u043D\u0438\u043C \u0449\u0435\u043B\u0447\u043A\u043E\u043C",
      OPTIONS_DESCRIPTION_JOIN: "U\u017E m\xE1te prepojenie? Zadajte prepojenie na sch\xF4dzu alebo za\u010Dnite vlastn\xFA sch\xF4dzu."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Aplik\xE1cia Skype",
      OPTIONS_BRANDING_TEXT: "Od spolo\u010Dnosti Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Inform\xE1cie o tejto aplik\xE1cii",
      OPTIONS_SIGN_OUT: "Odhl\xE1si\u0165 sa",
      OPTIONS_ACCOUNT_INFO: "Signed in as: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Install the Skype extension for quickly creating & joining Skype meetings on web.",
      OPTIONS_DESCRIPTION_LINETWO: "Nevy\u017Eaduje sa registr\xE1cia ani s\u0165ahovanie s\xFAborov.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Vytvorte bezplatn\xFD videohovor jedn\xFDm kliknut\xEDm",
      OPTIONS_DESCRIPTION_CREATE:
        "Want to quickly create a Skype call and have your friends join you? Creating a call has never been easier and quicker! You can customize your meeting name and avatar and invite others by sharing the meeting link.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Pripojte sa k sch\xF4dzi jedin\xFDm kliknut\xEDm",
      OPTIONS_DESCRIPTION_JOIN: "U\u017E m\xE1te prepojenie? Zadajte prepojenie na sch\xF4dzu alebo za\u010Dnite vlastn\xFA sch\xF4dzu."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Dru\u017Eba Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Vizitka",
      OPTIONS_SIGN_OUT: "Izpis",
      OPTIONS_ACCOUNT_INFO: "Vpisani ste kot: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Namestite raz\u0161iritev za Skype za hitro ustvarjanje in pridru\u017Eevanje sre\u010Danje v Skypu v spletu.",
      OPTIONS_DESCRIPTION_LINETWO: "Ni se treba vpisati. Ni\u010D ni potrebno prenesti.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Ustvarite brezpla\u010Den video klic z enim klikom!",
      OPTIONS_DESCRIPTION_CREATE:
        "Ali \u017Eelite hitro ustvariti klic Skype, da se vam pridru\u017Eijo va\u0161i prijatelji? Ustvarjanje klica \u0161e nikoli ni bilo tako preprosto in hitrej\u0161e. Prilagodite lahko ime sre\u010Danja in avatar ter povabite druge tako, da daste v skupna raba povezavo za sre\u010Danje.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Pridru\u017Eite se sre\u010Danju z enim klikom",
      OPTIONS_DESCRIPTION_JOIN: "Ali \u017Ee imate povezavo? Vnesite povezavo do sre\u010Danja ali za\u010Dnite svoje sre\u010Danje."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: 'Nga \\"Microsoft Corporation\\"',
      OPTIONS_ABOUT_TITLE: "Informacion",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Hyr\xEB si: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "Instalo shtes\xEBn e Skype p\xEBr t\xEB krijuar dhe p\xEBr t\u2019u bashkuar shpejt n\xEB takimet e Skype n\xEB ueb.",
      OPTIONS_DESCRIPTION_LINETWO: "Nuk k\xEBrkohen regjistrime e as shkarkime.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Krijo thirrje me video falas me nj\xEB klikim!",
      OPTIONS_DESCRIPTION_CREATE:
        "D\xEBshiron t\xEB krijosh shpejt nj\xEB thirrje n\xEB Skype, ku do t\xEB t\xEB bashkohen edhe shok\xEBt? Krijimi i nj\xEB thirrje nuk ka qen\xEB kurr\xEB m\xEB i leht\xEB dhe m\xEB i shpejt\xEB! Mund t\xEB p\xEBrshtat\xEBsh emrin dhe avatarin e takimit dhe t\xEB ftosh t\xEB tjer\xEBt duke ndar\xEB lidhjen e takimit.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Bashkohu n\xEB takim me nj\xEB klikim",
      OPTIONS_DESCRIPTION_JOIN: "Ke tashm\xEB nj\xEB lidhje? Fut lidhjen e takimit ose nis takimin t\xEBnd."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "By Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "About",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "\u041F\u0440\u0438\u0458\u0430\u0432\u0459\u0435\u043D/\u0430 \u043A\u0430\u043E: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0418\u043D\u0441\u0442\u0430\u043B\u0438\u0440\u0430\u0458\u0442\u0435 Skype \u0435\u043A\u0441\u0442\u0435\u043D\u0437\u0438\u0458\u0443 \u0437\u0430 \u0431\u0440\u0437\u043E \u043A\u0440\u0435\u0438\u0440\u0430\u045A\u0435 Skype \u0441\u0430\u0441\u0442\u0430\u043D\u0430\u043A\u0430 \u043D\u0430 \u0432\u0435\u0431\u0443 \u0438 \u043F\u0440\u0438\u0434\u0440\u0443\u0436\u0438\u0432\u0430\u045A\u0435.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0411\u0435\u0437 \u043F\u0440\u0438\u0458\u0430\u0432\u0459\u0438\u0432\u0430\u045A\u0430. \u0411\u0435\u0437 \u043F\u0440\u0435\u0443\u0437\u0438\u043C\u0430\u045A\u0430.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u041A\u0440\u0435\u0438\u0440\u0430\u0458\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0438 \u0432\u0438\u0434\u0435\u043E \u043F\u043E\u0437\u0438\u0432 \u0458\u0435\u0434\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0416\u0435\u043B\u0438\u0442\u0435 \u0431\u0440\u0437\u043E \u0434\u0430 \u043A\u0440\u0435\u0438\u0440\u0430\u0442\u0435 Skype \u043F\u043E\u0437\u0438\u0432 \u0438 \u0434\u0430 \u0432\u0430\u043C \u0441\u0435 \u043F\u0440\u0438\u0434\u0440\u0443\u0436\u0435 \u043F\u0440\u0438\u0458\u0430\u0442\u0435\u0459\u0438? \u041A\u0440\u0435\u0438\u0440\u0430\u045A\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043D\u0438\u043A\u0430\u0434\u0430 \u043D\u0438\u0458\u0435 \u0431\u0438\u043B\u043E \u043B\u0430\u043A\u0448\u0435 \u0438 \u0431\u0440\u0436\u0435! \u041C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u043B\u0430\u0433\u043E\u0434\u0438\u0442\u0438 \u0438\u043C\u0435 \u0441\u0430\u0441\u0442\u0430\u043D\u043A\u0430 \u0438 \u0430\u0432\u0430\u0442\u0430\u0440 \u0438 \u043F\u043E\u0437\u0432\u0430\u0442\u0438 \u0434\u0440\u0443\u0433\u0435 \u0442\u0430\u043A\u043E \u0448\u0442\u043E \u045B\u0435\u0442\u0435 \u043F\u043E\u0434\u0438\u0458\u0435\u043B\u0438\u0442\u0438 \u0432\u0435\u0437\u0443 \u0437\u0430 \u0441\u0430\u0441\u0442\u0430\u043D\u0430\u043A.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u041F\u0440\u0438\u0434\u0440\u0443\u0436\u0438\u0442\u0435 \u0441\u0435 \u0441\u0430\u0441\u0442\u0430\u043D\u043A\u0443 \u0458\u0435\u0434\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0412\u0435\u045B \u0438\u043C\u0430\u0442\u0435 \u0432\u0435\u0437\u0443? \u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0432\u0435\u0437\u0443 \u0437\u0430 \u0441\u0430\u0441\u0442\u0430\u043D\u0430\u043A \u0438\u043B\u0438 \u0437\u0430\u043F\u043E\u0447\u043D\u0438\u0442\u0435 \u0432\u043B\u0430\u0441\u0442\u0438\u0442\u0438 \u0441\u0430\u0441\u0442\u0430\u043D\u0430\u043A."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u041E\u0431\u0435\u0437\u0431\u0435\u0434\u0438\u043E: Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u041E",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "\u041F\u0440\u0438\u0458\u0430\u0432\u0459\u0435\u043D\u0438 \u0441\u0442\u0435 \u043A\u0430\u043E: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0418\u043D\u0441\u0442\u0430\u043B\u0438\u0440\u0430\u0458\u0442\u0435 Skype \u043F\u0440\u043E\u0448\u0438\u0440\u0435\u045A\u0435 \u0437\u0430 \u0431\u0440\u0437\u043E \u043A\u0440\u0435\u0438\u0440\u0430\u045A\u0435 \u0438 \u043F\u0440\u0438\u0434\u0440\u0443\u0436\u0438\u0432\u0430\u045A\u0435 Skype \u0441\u0430\u0441\u0442\u0430\u043D\u0446\u0438\u043C\u0430 \u043D\u0430 \u0432\u0435\u0431\u0443.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u041D\u0435\u043C\u0430 \u043F\u0440\u0438\u0458\u0430\u0432\u0430. \u041F\u0440\u0435\u0443\u0437\u0438\u043C\u0430\u045A\u0430 \u043D\u0438\u0441\u0443 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u0430.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u041A\u0440\u0435\u0438\u0440\u0430\u0458\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u0430\u043D \u0432\u0438\u0434\u0435\u043E \u043F\u043E\u0437\u0438\u0432 \u0458\u0435\u0434\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0416\u0435\u043B\u0438\u0442\u0435 \u0431\u0440\u0437\u043E \u0434\u0430 \u043A\u0440\u0435\u0438\u0440\u0430\u0442\u0435 Skype \u043F\u043E\u0437\u0438\u0432 \u0438 \u0434\u0430 \u0432\u0430\u043C \u0441\u0435 \u043F\u0440\u0438\u0434\u0440\u0443\u0436\u0435 \u0432\u0430\u0448\u0438 \u043F\u0440\u0438\u0458\u0430\u0442\u0435\u0459\u0438? \u041A\u0440\u0435\u0438\u0440\u0430\u045A\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043D\u0438\u043A\u0430\u0434\u0430 \u043D\u0438\u0458\u0435 \u0431\u0438\u043B\u043E \u043B\u0430\u043A\u0448\u0435 \u0438 \u0431\u0440\u0436\u0435! \u041C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043F\u0440\u0438\u043B\u0430\u0433\u043E\u0434\u0438\u0442\u0435 \u0438\u043C\u0435 \u0441\u0430\u0441\u0442\u0430\u043D\u043A\u0430 \u0438 \u0430\u0432\u0430\u0442\u0430\u0440 \u0438 \u043F\u043E\u0437\u043E\u0432\u0435\u0442\u0435 \u0434\u0440\u0443\u0433\u0435 \u0442\u0430\u043A\u043E \u0448\u0442\u043E \u045B\u0435\u0442\u0435 \u0434\u0435\u043B\u0438\u0442\u0438 \u0432\u0435\u0437\u0443 \u0437\u0430 \u0441\u0430\u0441\u0442\u0430\u043D\u0430\u043A.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u041F\u0440\u0438\u0434\u0440\u0443\u0436\u0438\u0432\u0430\u045A\u0435 \u0441\u0430\u0441\u0442\u0430\u043D\u043A\u0443 \u0458\u0435\u0434\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0412\u0435\u045B \u0438\u043C\u0430\u0442\u0435 \u0432\u0435\u0437\u0443? \u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0432\u0435\u0437\u0443 \u0437\u0430 \u0441\u0430\u0441\u0442\u0430\u043D\u0430\u043A \u0438\u043B\u0438 \u0437\u0430\u043F\u043E\u0447\u043D\u0438\u0442\u0435 \u0441\u043E\u043F\u0441\u0442\u0432\u0435\u043D\u0438 \u0441\u0430\u0441\u0442\u0430\u043D\u0430\u043A."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Obezbedio: Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "O",
      OPTIONS_SIGN_OUT: "Odjavljivanje",
      OPTIONS_ACCOUNT_INFO: "Prijavljeni ste kao: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Instalirajte Skype pro\u0161irenje za brzo kreiranje i pridru\u017Eivanje Skype sastancima na vebu.",
      OPTIONS_DESCRIPTION_LINETWO: "Nije potrebno prijavljivanje ili preuzimanje.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Kreirajte besplatan video poziv jednim klikom!",
      OPTIONS_DESCRIPTION_CREATE:
        "Da li \u017Eelite brzo da kreirate Skype poziv i da vam se prijatelji pridru\u017Ee? Kreiranje poziva nikada nije bilo lak\u0161e i br\u017Ee! Mo\u017Eete da prilagodite ime sastanka i avatar i pozovete druge tako \u0161to \u0107ete podeliti vezu za sastanak.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Pridru\u017Eite se sastanku jednim klikom",
      OPTIONS_DESCRIPTION_JOIN: "Ve\u0107 imate vezu? Unesite vezu za sastanak ili zapo\u010Dnite svoj sopstveni sastanak."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Om",
      OPTIONS_SIGN_OUT: "Logga ut",
      OPTIONS_ACCOUNT_INFO: "Inloggad som: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Installera Skype-till\xE4gget f\xF6r att snabbt skapa och ansluta till Skype-m\xF6ten p\xE5 webben.",
      OPTIONS_DESCRIPTION_LINETWO: "Inga registreringar eller nedladdningar kr\xE4vs.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Skapa ett gratis video samtal med ett klick!",
      OPTIONS_DESCRIPTION_CREATE:
        "Vill du snabbt skapa ett Skype-samtal och l\xE5ta dina v\xE4nner ansluta till dig? Det har aldrig varit enklare och snabbare att skapa ett samtal! Du kan anpassa m\xF6tesnamnet och avataren och bjuda in andra genom att dela m\xF6tesl\xE4nken.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Anslut till ett m\xF6te med ett klick",
      OPTIONS_DESCRIPTION_JOIN: "Har du redan en l\xE4nk? Ange m\xF6tesl\xE4nken eller starta ett eget m\xF6te."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Na Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Kuhusu",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "Signed in as: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE: "Install the Skype extension for quickly creating & joining Skype meetings on web.",
      OPTIONS_DESCRIPTION_LINETWO: "Nije potrebno prijavljivanje ili preuzimanje.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Kreirajte besplatan video poziv jednim klikom!",
      OPTIONS_DESCRIPTION_CREATE:
        "Want to quickly create a Skype call and have your friends join you? Creating a call has never been easier and quicker! You can customize your meeting name and avatar and invite others by sharing the meeting link.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Pridru\u017Eite se sastanku jednim klikom",
      OPTIONS_DESCRIPTION_JOIN: "Already have a link? Enter the meeting link or start your own meeting."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u0BB5\u0BB4\u0B99\u0BCD\u0B95\u0BC1\u0BAA\u0BB5\u0BB0\u0BCD: Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u0B85\u0BB1\u0BBF\u0BAE\u0BC1\u0B95\u0BAE\u0BCD",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO:
        "\u0B87\u0BA8\u0BCD\u0BA4\u0B95\u0BCD \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BBF\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8\u0BA8\u0BCD\u0BA4\u0BC1\u0BB3\u0BCD\u0BB3\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BCD: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0B87\u0BA3\u0BC8\u0BAF\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD Skype \u0B9A\u0BA8\u0BCD\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8 \u0BB5\u0BBF\u0BB0\u0BC8\u0BB5\u0BBE\u0B95 \u0B89\u0BB0\u0BC1\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1\u0BB5\u0BA4\u0BB1\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0B9A\u0BC7\u0BB0\u0BCD\u0BB5\u0BA4\u0BB1\u0BCD\u0B95\u0BC1\u0BAE\u0BCD Skype \u0BA8\u0BC0\u0B9F\u0BCD\u0B9F\u0BBF\u0BAA\u0BCD\u0BAA\u0BC8 \u0BA8\u0BBF\u0BB1\u0BC1\u0BB5\u0BB5\u0BC1\u0BAE\u0BCD.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0B8E\u0BA8\u0BCD\u0BA4\u0BAA\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BB2\u0BCD\u0B95\u0BB3\u0BC1\u0BAE\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8. \u0BAA\u0BA4\u0BBF\u0BB5\u0BBF\u0BB1\u0B95\u0BCD\u0B95\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA4\u0BC7\u0BB5\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0B92\u0BB0\u0BC1 \u0B95\u0BBF\u0BB3\u0BBF\u0B95\u0BCD \u0BAE\u0BC2\u0BB2\u0BAE\u0BCD \u0B87\u0BB2\u0BB5\u0B9A \u0BB5\u0BC0\u0B9F\u0BBF\u0BAF\u0BCB \u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0B89\u0BB0\u0BC1\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0B92\u0BB0\u0BC1 Skype \u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0BB5\u0BBF\u0BB0\u0BC8\u0BB5\u0BBE\u0B95 \u0B89\u0BB0\u0BC1\u0BB5\u0BBE\u0B95\u0BCD\u0B95 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1\u0B95\u0BBF\u0BB1\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BBE \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA8\u0BA3\u0BCD\u0BAA\u0BB0\u0BCD\u0B95\u0BB3\u0BCD \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B9F\u0BA9\u0BCD \u0B9A\u0BC7\u0BB0 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BBE? \u0B92\u0BB0\u0BC1 \u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0B89\u0BB0\u0BC1\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1\u0BB5\u0BA4\u0BC1 \u0B92\u0BB0\u0BC1\u0BAA\u0BCB\u0BA4\u0BC1\u0BAE\u0BCD \u0B8E\u0BB3\u0BBF\u0BA4\u0BBE\u0B95\u0BB5\u0BC1\u0BAE\u0BCD \u0BB5\u0BC7\u0B95\u0BAE\u0BBE\u0B95\u0BB5\u0BC1\u0BAE\u0BCD \u0B87\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BA4\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8! \u0B9A\u0BA8\u0BCD\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0BAA\u0BCD \u0BAA\u0BC6\u0BAF\u0BB0\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B85\u0BB5\u0BA4\u0BBE\u0BB0\u0BCD \u0B86\u0B95\u0BBF\u0BAF\u0BB5\u0BB1\u0BCD\u0BB1\u0BC8 \u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA4\u0BA9\u0BBF\u0BAA\u0BCD\u0BAA\u0BAF\u0BA9\u0BBE\u0B95\u0BCD\u0B95\u0BB2\u0BBE\u0BAE\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B9A\u0BA8\u0BCD\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8\u0BAA\u0BCD \u0BAA\u0B95\u0BBF\u0BB0\u0BCD\u0BB5\u0BA4\u0BA9\u0BCD \u0BAE\u0BC2\u0BB2\u0BAE\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BB5\u0BB0\u0BCD\u0B95\u0BB3\u0BC8 \u0B85\u0BB4\u0BC8\u0B95\u0BCD\u0B95\u0BB2\u0BBE\u0BAE\u0BCD.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u0B92\u0BB0\u0BC7 \u0B95\u0BBF\u0BB3\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB2\u0BCD \u0B92\u0BB0\u0BC1 \u0B9A\u0BA8\u0BCD\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0B9A\u0BC7\u0BB0\u0BCD",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0B8F\u0BB1\u0BCD\u0B95\u0BA9\u0BB5\u0BC7 \u0B92\u0BB0\u0BC1 \u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BA4\u0BBE? \u0B9A\u0BA8\u0BCD\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B9A\u0BCA\u0BA8\u0BCD\u0BA4\u0B9A\u0BCD \u0B9A\u0BA8\u0BCD\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC8\u0BA4\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation \u0C38\u0C2E\u0C30\u0C4D\u0C2A\u0C23\u0C32\u0C4B",
      OPTIONS_ABOUT_TITLE: "\u0C2A\u0C30\u0C3F\u0C1A\u0C2F\u0C02",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO:
        "\u0C07\u0C32\u0C3E \u0C38\u0C48\u0C28\u0C4D \u0C07\u0C28\u0C4D \u0C1A\u0C47\u0C38\u0C3E\u0C30\u0C41: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0C35\u0C46\u0C2C\u0C4D\u200C\u0C32\u0C4B Skype \u0C38\u0C2E\u0C3E\u0C35\u0C47\u0C36\u0C3E\u0C32\u0C28\u0C41 \u0C24\u0C4D\u0C35\u0C30\u0C17\u0C3E \u0C38\u0C43\u0C37\u0C4D\u0C1F\u0C3F\u0C02\u0C1A\u0C21\u0C02 & \u0C1A\u0C47\u0C30\u0C21\u0C02 \u0C15\u0C4B\u0C38\u0C02 Skype \u0C0E\u0C15\u0C4D\u0C38\u0C4D\u200C\u0C1F\u0C46\u0C28\u0C4D\u0C37\u0C28\u0C4D\u200C\u0C28\u0C41 \u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C4D\u0C25\u0C3E\u0C2A\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0C38\u0C48\u0C28\u0C4D \u0C05\u0C2A\u0C4D\u200C\u0C32\u0C41 \u0C09\u0C02\u0C21\u0C35\u0C41. \u0C21\u0C4C\u0C28\u0C4D\u200C\u0C32\u0C4B\u0C21\u0C4D\u200C\u0C32\u0C41 \u0C05\u0C35\u0C38\u0C30\u0C02 \u0C32\u0C47\u0C26\u0C41.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0C12\u0C15\u0C4D\u0C15 \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D\u200C\u0C24\u0C4B \u0C09\u0C1A\u0C3F\u0C24 \u0C35\u0C40\u0C21\u0C3F\u0C2F\u0C4B \u0C15\u0C3E\u0C32\u0C4D \u0C38\u0C43\u0C37\u0C4D\u0C1F\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0C24\u0C4D\u0C35\u0C30\u0C17\u0C3E Skype \u0C15\u0C3E\u0C32\u0C4D\u200C\u0C28\u0C3F \u0C38\u0C43\u0C37\u0C4D\u0C1F\u0C3F\u0C02\u0C1A\u0C3F, \u0C2E\u0C40 \u0C38\u0C4D\u0C28\u0C47\u0C39\u0C3F\u0C24\u0C41\u0C32\u0C41 \u0C2E\u0C40\u0C24\u0C4B \u0C1A\u0C47\u0C30\u0C47\u0C32\u0C3E \u0C1A\u0C47\u0C2F\u0C3E\u0C32\u0C28\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C3E? \u0C15\u0C3E\u0C32\u0C4D\u200C\u0C28\u0C3F \u0C38\u0C43\u0C37\u0C4D\u0C1F\u0C3F\u0C02\u0C1A\u0C21\u0C02 \u0C07\u0C02\u0C24 \u0C38\u0C41\u0C32\u0C2D\u0C02 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C35\u0C47\u0C17\u0C02\u0C17\u0C3E \u0C07\u0C02\u0C24\u0C35\u0C30\u0C15\u0C41 \u0C1C\u0C30\u0C17\u0C32\u0C47\u0C26\u0C41! \u0C2E\u0C40\u0C30\u0C41 \u0C2E\u0C40 \u0C38\u0C2E\u0C3E\u0C35\u0C47\u0C36\u0C02 \u0C2A\u0C47\u0C30\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C05\u0C35\u0C24\u0C3E\u0C30\u0C4D\u200C\u0C28\u0C3F \u0C05\u0C28\u0C41\u0C15\u0C42\u0C32\u0C40\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C35\u0C1A\u0C4D\u0C1A\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C38\u0C2E\u0C3E\u0C35\u0C47\u0C36 \u0C32\u0C3F\u0C02\u0C15\u0C4D\u200C\u0C28\u0C41 \u0C2D\u0C3E\u0C17\u0C38\u0C4D\u0C35\u0C3E\u0C2E\u0C4D\u0C2F\u0C02 \u0C1A\u0C47\u0C2F\u0C21\u0C02 \u0C26\u0C4D\u0C35\u0C3E\u0C30\u0C3E \u0C07\u0C24\u0C30\u0C41\u0C32\u0C28\u0C41 \u0C06\u0C39\u0C4D\u0C35\u0C3E\u0C28\u0C3F\u0C02\u0C1A\u0C35\u0C1A\u0C4D\u0C1A\u0C41.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u0C12\u0C15\u0C4D\u0C15 \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D\u200C\u0C24\u0C4B \u0C38\u0C2E\u0C3E\u0C35\u0C47\u0C36\u0C02\u0C32\u0C4B \u0C1A\u0C47\u0C30\u0C02\u0C21\u0C3F",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0C07\u0C2A\u0C4D\u0C2A\u0C1F\u0C3F\u0C15\u0C47 \u0C12\u0C15 \u0C32\u0C3F\u0C02\u0C15\u0C4D \u0C09\u0C02\u0C26\u0C3E? \u0C38\u0C2E\u0C3E\u0C35\u0C47\u0C36 \u0C32\u0C3F\u0C02\u0C15\u0C4D\u200C\u0C28\u0C41 \u0C28\u0C2E\u0C4B\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F \u0C32\u0C47\u0C26\u0C3E \u0C2E\u0C40 \u0C38\u0C4D\u0C35\u0C02\u0C24 \u0C38\u0C2E\u0C3E\u0C35\u0C47\u0C36\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u0E42\u0E14\u0E22 Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A",
      OPTIONS_SIGN_OUT: "\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01",
      OPTIONS_ACCOUNT_INFO:
        "\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E40\u0E1B\u0E47\u0E19: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E48\u0E27\u0E19\u0E02\u0E22\u0E32\u0E22 Skype \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E25\u0E30\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 Skype \u0E1A\u0E19\u0E40\u0E27\u0E47\u0E1A",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u0E44\u0E21\u0E48\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E19\u0E17\u0E19\u0E32\u0E17\u0E32\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E1F\u0E23\u0E35\u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E04\u0E25\u0E34\u0E01\u0E40\u0E14\u0E35\u0E22\u0E27!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E42\u0E17\u0E23 Skype \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27\u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E46 \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E43\u0E0A\u0E48\u0E44\u0E2B\u0E21 \u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E42\u0E17\u0E23\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22\u0E07\u0E48\u0E32\u0E22\u0E14\u0E32\u0E22\u0E41\u0E25\u0E30\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27\u0E40\u0E17\u0E48\u0E32\u0E19\u0E35\u0E49\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19! \u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E41\u0E25\u0E30\u0E2D\u0E27\u0E32\u0E15\u0E32\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49 \u0E41\u0E25\u0E30\u0E40\u0E0A\u0E34\u0E0D\u0E1C\u0E39\u0E49\u0E2D\u0E37\u0E48\u0E19\u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E41\u0E0A\u0E23\u0E4C\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E42\u0E14\u0E22\u0E04\u0E25\u0E34\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0E21\u0E35\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E43\u0E0A\u0E48\u0E44\u0E2B\u0E21 \u0E1B\u0E49\u0E2D\u0E19\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E2D\u0E07"
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation taraf\u0131ndan geli\u015Ftirildi",
      OPTIONS_ABOUT_TITLE: "Hakk\u0131nda",
      OPTIONS_SIGN_OUT: "Oturumu kapat",
      OPTIONS_ACCOUNT_INFO: "${skypeId} olarak oturum a\xE7\u0131ld\u0131",
      OPTIONS_DESCRIPTION_LINEONE:
        "Web \xFCzerinde h\u0131zl\u0131 bir \u015Fekilde Skype toplant\u0131lar\u0131 olu\u015Fturmak ve kat\u0131lmak i\xE7in Skype uzant\u0131s\u0131n\u0131 y\xFCkleyin.",
      OPTIONS_DESCRIPTION_LINETWO: "Oturum a\xE7\u0131lm\u0131yor. \u0130ndirme gerekmiyor.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Tek t\u0131klamayla \xFCcretsiz g\xF6r\xFCnt\xFCl\xFC \xE7a\u011Fr\u0131 olu\u015Fturun!",
      OPTIONS_DESCRIPTION_CREATE:
        "H\u0131zl\u0131 bir \u015Fekilde bir Skype aramas\u0131 olu\u015Fturmak ve arkada\u015Flar\u0131n\u0131z\u0131n size kat\u0131lmas\u0131n\u0131 m\u0131 istiyorsunuz? \xC7a\u011Fr\u0131 olu\u015Fturmak hi\xE7 bu kadar kolay ve h\u0131zl\u0131 olmam\u0131\u015Ft\u0131! Toplant\u0131 ad\u0131n\u0131z\u0131 ve avatar\u0131n\u0131z\u0131 \xF6zelle\u015Ftirebilir, toplant\u0131 ba\u011Flant\u0131s\u0131n\u0131 payla\u015Farak ba\u015Fkalar\u0131n\u0131 davet edebilirsiniz.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Tek t\u0131klamayla bir toplant\u0131ya kat\u0131l\u0131n",
      OPTIONS_DESCRIPTION_JOIN:
        "Zaten bir ba\u011Flant\u0131n\u0131z var m\u0131? Toplant\u0131 ba\u011Flant\u0131s\u0131n\u0131 girin veya kendi toplant\u0131n\u0131z\u0131 ba\u015Flat\u0131n."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT:
        "\u0412\u0456\u0434 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0446\u0456\u0457 \u041C\u0430\u0439\u043A\u0440\u043E\u0441\u043E\u0444\u0442",
      OPTIONS_ABOUT_TITLE: "\u041F\u0440\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443",
      OPTIONS_SIGN_OUT: "\u0412\u0438\u0439\u0442\u0438",
      OPTIONS_ACCOUNT_INFO: "\u0412\u0438 \u0432\u0432\u0456\u0439\u0448\u043B\u0438 \u044F\u043A: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0406\u043D\u0441\u0442\u0430\u043B\u044E\u0439\u0442\u0435 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F Skype, \u0449\u043E\u0431 \u0448\u0432\u0438\u0434\u043A\u043E \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u043D\u0430\u0440\u0430\u0434\u0438 Skype \u0456 \u043F\u0440\u0438\u0454\u0434\u043D\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u043D\u0438\u0445 \u0432 \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0456.",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u041D\u0435 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0430\u0431\u043E \u0449\u043E\u0441\u044C \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438.",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0421\u0442\u0432\u043E\u0440\u0456\u0442\u044C \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0432\u0456\u0434\u0435\u043E\u0432\u0438\u043A\u043B\u0438\u043A \u043E\u0434\u043D\u0438\u043C \u043A\u043B\u0456\u043A\u043E\u043C!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u0425\u043E\u0447\u0435\u0442\u0435 \u0448\u0432\u0438\u0434\u043A\u043E \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0432\u0438\u043A\u043B\u0438\u043A \u0437\u0456 Skype \u0456 \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0434\u0440\u0443\u0437\u0456\u0432 \u043F\u0440\u0438\u0454\u0434\u043D\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u0432\u0430\u0441? \u0421\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u0432\u0438\u043A\u043B\u0438\u043A\u0438 \u0441\u0442\u0430\u043B\u043E \u0449\u0435 \u043F\u0440\u043E\u0441\u0442\u0456\u0448\u0435 \u0439 \u0448\u0432\u0438\u0434\u0448\u0435! \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u043D\u0430\u0437\u0432\u0443 \u043D\u0430\u0440\u0430\u0434\u0438 \u0442\u0430 \u0430\u0432\u0430\u0442\u0430\u0440 \u0456 \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0456\u043D\u0448\u0438\u0445, \u043F\u043E\u0434\u0456\u043B\u0438\u0432\u0448\u0438\u0441\u044C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C \u043D\u0430 \u043D\u0430\u0440\u0430\u0434\u0443.",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u041F\u0440\u0438\u0454\u0434\u043D\u0430\u0439\u0442\u0435\u0441\u044F \u0434\u043E \u043D\u0430\u0440\u0430\u0434\u0438 \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0456\u043A",
      OPTIONS_DESCRIPTION_JOIN:
        "\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0454 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F? \u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043D\u0430\u0440\u0430\u0434\u0443 \u0430\u0431\u043E \u043F\u043E\u0447\u043D\u0456\u0442\u044C \u0432\u043B\u0430\u0441\u043D\u0443 \u043D\u0430\u0440\u0430\u0434\u0443."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Microsoft Corporation \u06A9\u06CC \u0637\u0631\u0641 \u0633\u06D2",
      OPTIONS_ABOUT_TITLE: "\u0633\u06D2 \u0645\u062A\u0639\u0644\u0642",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "\u0628\u0637\u0648\u0631 \u06CC\u06C1 \u0633\u0627\u0626\u0646 \u0627\u0646 \u0634\u062F\u06C1: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u0648\u06CC\u0628 \u067E\u0631 Skype \u0645\u06CC\u0679\u0646\u06AF\u06CC\u06BA \u062A\u06CC\u0632\u06CC \u0633\u06D2 \u062A\u062E\u0644\u06CC\u0642 \u06A9\u0631\u0646\u06D2 \u0627\u0648\u0631 \u0627\u0646 \u0645\u06CC\u06BA \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 Skype \u062A\u0648\u0633\u06CC\u0639 \u0646\u0635\u0628 \u06A9\u0631\u06CC\u06BA\u06D4",
      OPTIONS_DESCRIPTION_LINETWO:
        "\u06A9\u0648\u0626\u06CC \u0633\u0627\u0626\u0646 \u0627\u067E \u0646\u06C1\u06CC\u06BA\u060C \u06A9\u0633\u06CC \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u06A9\u06CC \u0636\u0631\u0648\u0631\u062A \u0646\u06C1\u06CC\u06BA\u06D4",
      OPTIONS_DESCRIPTION_CREATETITLE:
        "\u0627\u06CC\u06A9 \u06A9\u0644\u06A9 \u06A9\u06D2 \u0630\u0631\u06CC\u0639\u06D2 \u0627\u06CC\u06A9 \u0645\u0641\u062A \u0648\u06CC\u0688\u06CC\u0648 \u06A9\u0627\u0644 \u0628\u0646\u0627\u0626\u06CC\u06BA!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u06A9\u06CC\u0627 \u0622\u067E \u062A\u06CC\u0632\u06CC \u0633\u06D2 Skype \u06A9\u06CC \u06A9\u0627\u0644 \u062A\u062E\u0644\u06CC\u0642 \u06A9\u0631\u06A9\u06D2 \u0627\u067E\u0646\u06D2 \u062F\u0648\u0633\u062A\u0648\u06BA \u06A9\u0648 \u0627\u0633 \u0645\u06CC\u06BA \u0634\u0627\u0645\u0644 \u06A9\u0631\u0646\u0627 \u0686\u0627\u06C1\u062A\u06D2 \u06C1\u06CC\u06BA\u061F \u06A9\u0627\u0644 \u062A\u062E\u0644\u06CC\u0642 \u06A9\u0631\u0646\u0627 \u06A9\u0628\u06BE\u06CC \u0627\u0633 \u0633\u06D2 \u0632\u06CC\u0627\u062F\u06C1 \u0622\u0633\u0627\u0646 \u0627\u0648\u0631 \u062A\u06CC\u0632 \u062A\u0631 \u0646\u06C1\u06CC\u06BA \u062A\u06BE\u0627! \u0622\u067E \u0627\u067E\u0646\u06CC \u0645\u06CC\u0679\u0646\u06AF \u06A9\u06D2 \u0646\u0627\u0645 \u0627\u0648\u0631 \u0627\u0648\u062A\u0627\u0631 \u06A9\u06CC \u062A\u062E\u0635\u06CC\u0635 \u06A9\u0631 \u0633\u06A9\u062A\u06D2 \u06C1\u06CC\u06BA \u0627\u0648\u0631 \u0645\u06CC\u0679\u0646\u06AF \u06A9\u06D2 \u0631\u0628\u0637 \u06A9\u0627 \u0627\u0634\u062A\u0631\u0627\u06A9 \u06A9\u0631\u06A9\u06D2 \u062F\u0648\u0633\u0631\u0648\u06BA \u06A9\u0648 \u0645\u062F\u0639\u0648 \u06A9\u0631 \u0633\u06A9\u062A\u06D2 \u06C1\u06CC\u06BA\u06D4",
      OPTIONS_DESCRIPTION_JOINTITLE:
        "\u06A9\u0633\u06CC \u0645\u06CC\u0679\u0646\u06AF \u0645\u06CC\u06BA \u0628\u0633 \u0627\u06CC\u06A9 \u06A9\u0644\u06A9 \u06A9\u06D2 \u0630\u0631\u06CC\u0639\u06D2 \u0634\u0627\u0645\u0644 \u06C1\u0648\u06BA",
      OPTIONS_DESCRIPTION_JOIN:
        "\u06A9\u06CC\u0627 \u0622\u067E \u06A9\u06D2 \u067E\u0627\u0633 \u067E\u06C1\u0644\u06D2 \u0633\u06D2 \u0631\u0628\u0637 \u0645\u0648\u062C\u0648\u062F \u06C1\u06D2\u061F \u0645\u06CC\u0679\u0646\u06AF \u06A9\u0627 \u0631\u0628\u0637 \u062F\u0631\u062C \u06A9\u0631\u06CC\u06BA \u06CC\u0627 \u0627\u067E\u0646\u06CC \u0630\u0627\u062A\u06CC \u0645\u06CC\u0679\u0646\u06AF \u0634\u0631\u0648\u0639 \u06A9\u0631\u06CC\u06BA\u06D4"
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "Muallif: Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Ma\u2019lumot",
      OPTIONS_SIGN_OUT: "Sign out",
      OPTIONS_ACCOUNT_INFO: "${skypeId} sifatida kirilgan",
      OPTIONS_DESCRIPTION_LINEONE:
        "Internetda Skype majlislarini tez yaratish va ularga kirish uchun Skype uchun kengaytmani o\u02BBrnating.",
      OPTIONS_DESCRIPTION_LINETWO: "Ro\u02BByxatdan o\u02BBtish talab etilmaydi. Yuklab olish shart emas.",
      OPTIONS_DESCRIPTION_CREATETITLE: "Bir marta bosish bilan bepul video qo\u02BBng\u02BBiroq yarating!",
      OPTIONS_DESCRIPTION_CREATE:
        "Tezda Skype qo\u02BBng\u02BBirog\u02BBini yaratish va do\u02BBstlaringiz ulanishini xohlaysizmi? Qo\u02BBng\u02BBiroq yaratish hech qachon bunchalik oson va tez bo\u02BBlmagan! Siz majlisingiz nomi va avatarini moslashtirishingiz va majlis havolasini ulashish orqali boshqalarni taklif eting.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Majlisga bir marta chertish bilan qo\u02BBshiling",
      OPTIONS_DESCRIPTION_JOIN: "Allaqachon havolangiz bormi? Majlis havolasini kiriting yoki o\u02BBz majlisingizni boshlang."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "B\u1EDFi Microsoft Corporation",
      OPTIONS_ABOUT_TITLE: "Gi\u01A1\u0301i thi\xEA\u0323u",
      OPTIONS_SIGN_OUT: "\u0110\u0103ng xu\u1EA5t",
      OPTIONS_ACCOUNT_INFO: "\u0110\xE3 \u0111\u0103ng nh\u1EADp v\u1EDBi t\u01B0 c\xE1ch: ${skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "C\xE0i \u0111\u1EB7t ph\u1EA7n m\u1EDF r\u1ED9ng Skype \u0111\u1EC3 nhanh ch\xF3ng t\u1EA1o v\xE0 tham gia cu\u1ED9c h\u1ECDp Skype tr\xEAn web.",
      OPTIONS_DESCRIPTION_LINETWO: "Kh\xF4ng c\u1EA7n \u0111\u0103ng k\xFD hay t\u1EA3i xu\u1ED1ng",
      OPTIONS_DESCRIPTION_CREATETITLE: "T\u1EA1o cu\u1ED9c g\u1ECDi video mi\u1EC5n ph\xED v\u1EDBi m\u1ED9t c\xFA b\u1EA5m chu\u1ED9t!",
      OPTIONS_DESCRIPTION_CREATE:
        "Mu\u1ED1n nhanh ch\xF3ng t\u1EA1o cu\u1ED9c g\u1ECDi Skype v\xE0 c\xF3 b\u1EA1n b\xE8 tham gia c\xF9ng b\u1EA1n? Vi\u1EC7c t\u1EA1o cu\u1ED9c g\u1ECDi ch\u01B0a bao gi\u1EDD d\u1EC5 d\xE0ng v\xE0 nhanh h\u01A1n th\u1EBF! B\u1EA1n c\xF3 th\u1EC3 t\xF9y ch\u1EC9nh t\xEAn cu\u1ED9c h\u1ECDp v\xE0 h\xECnh \u0111\u1EA1i di\u1EC7n c\u1EE7a m\xECnh v\xE0 m\u1EDDi ng\u01B0\u1EDDi kh\xE1c b\u1EB1ng c\xE1ch chia s\u1EBB li\xEAn k\u1EBFt cu\u1ED9c h\u1ECDp.",
      OPTIONS_DESCRIPTION_JOINTITLE: "Tham gia cu\u1ED9c h\u1ECDp b\u1EB1ng m\u1ED9t c\xFA b\u1EA5m chu\u1ED9t",
      OPTIONS_DESCRIPTION_JOIN:
        "B\u1EA1n \u0111\xE3 c\xF3 li\xEAn k\u1EBFt? Nh\u1EADp li\xEAn k\u1EBFt cu\u1ED9c h\u1ECDp ho\u1EB7c b\u1EAFt \u0111\u1EA7u cu\u1ED9c h\u1ECDp c\u1EE7a ri\xEAng b\u1EA1n."
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u7531 Microsoft Corporation \u63D0\u4F9B",
      OPTIONS_ABOUT_TITLE: "\u5173\u4E8E",
      OPTIONS_SIGN_OUT: "\u6CE8\u9500",
      OPTIONS_ACCOUNT_INFO: "\u767B\u5F55\u8EAB\u4EFD: {skypeId}",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u5B89\u88C5 Skype \u6269\u5C55\uFF0C\u4EE5\u4FBF\u5728 Web \u4E0A\u5FEB\u901F\u521B\u5EFA\u548C\u52A0\u5165 Skype \u4F1A\u8BAE\u3002",
      OPTIONS_DESCRIPTION_LINETWO: "\u65E0\u9700\u6CE8\u518C\u3002\u65E0\u9700\u4E0B\u8F7D\u3002",
      OPTIONS_DESCRIPTION_CREATETITLE: "\u5355\u51FB\u5373\u53EF\u521B\u5EFA\u514D\u8D39\u89C6\u9891\u901A\u8BDD!",
      OPTIONS_DESCRIPTION_CREATE:
        "\u60F3\u8981\u5FEB\u901F\u521B\u5EFA Skype \u901A\u8BDD\u5E76\u8BA9\u4F60\u7684\u597D\u53CB\u52A0\u5165? \u521B\u5EFA\u901A\u8BDD\u4ECE\u672A\u5982\u6B64\u7B80\u5355\u5FEB\u6377! \u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4F1A\u8BAE\u540D\u79F0\u548C\u5934\u50CF\uFF0C\u5E76\u901A\u8FC7\u5171\u4EAB\u4F1A\u8BAE\u94FE\u63A5\u9080\u8BF7\u5176\u4ED6\u4EBA\u3002",
      OPTIONS_DESCRIPTION_JOINTITLE: "\u5355\u51FB\u4E00\u4E0B\u5373\u53EF\u52A0\u5165\u4F1A\u8BAE",
      OPTIONS_DESCRIPTION_JOIN:
        "\u5DF2\u6709\u94FE\u63A5\uFF1F\u8F93\u5165\u4F1A\u8BAE\u94FE\u63A5\u6216\u5F00\u59CB\u81EA\u5DF1\u7684\u4F1A\u8BAE\u3002"
    };
  },
  function (a) {
    a.exports = {
      OPTIONS_HEADING_TITLE: "Skype",
      OPTIONS_BRANDING_TEXT: "\u7531 Microsoft Corporation \u63D0\u4F9B",
      OPTIONS_ABOUT_TITLE: "\u95DC\u65BC",
      OPTIONS_SIGN_OUT: "\u767B\u51FA",
      OPTIONS_ACCOUNT_INFO: "\u4EE5 ${skypeId} \u8EAB\u5206\u767B\u5165",
      OPTIONS_DESCRIPTION_LINEONE:
        "\u5B89\u88DD Skype \u64F4\u5145\u529F\u80FD\u4EE5\u5FEB\u901F\u5EFA\u7ACB\u4E26\u5728 Web \u4E0A\u52A0\u5165 Skype \u6703\u8B70\u3002",
      OPTIONS_DESCRIPTION_LINETWO: "\u4E0D\u9700\u8981\u8A3B\u518A\uFF0C\u4E5F\u4E0D\u9700\u8981\u4E0B\u8F09\u3002",
      OPTIONS_DESCRIPTION_CREATETITLE: "\u6309\u4E00\u4E0B\u5373\u53EF\u5EFA\u7ACB\u514D\u8CBB\u7684\u8996\u8A0A\u901A\u8A71",
      OPTIONS_DESCRIPTION_CREATE:
        "\u60F3\u8981\u5FEB\u901F\u5EFA\u7ACB Skype \u901A\u8A71\u4E26\u8B93\u60A8\u7684\u670B\u53CB\u52A0\u5165\u60A8\u7684\u884C\u5217\u55CE? \u5EFA\u7ACB\u901A\u8A71\u5F9E\u672A\u5982\u6B64\u7C21\u55AE\u5FEB\u901F! \u60A8\u53EF\u4EE5\u81EA\u8A02\u6703\u8B70\u540D\u7A31\u548C\u865B\u64EC\u4EBA\u5076\uFF0C\u4E26\u900F\u904E\u5206\u4EAB\u6703\u8B70\u9023\u7D50\u4F86\u9080\u8ACB\u4ED6\u4EBA\u3002",
      OPTIONS_DESCRIPTION_JOINTITLE: "\u6309\u4E00\u4E0B\u5373\u53EF\u52A0\u5165\u6703\u8B70",
      OPTIONS_DESCRIPTION_JOIN:
        "\u5DF2\u7D93\u6709\u9023\u7D50? \u8F38\u5165\u6703\u8B70\u9023\u7D50\u6216\u958B\u59CB\u60A8\u81EA\u5DF1\u7684\u6703\u8B70\u3002"
    };
  },
  function (a, I) {
    "use strict";
    var T = (function () {
      function _(E, P) {
        for (var d = 0, c; d < P.length; d++) {
          c = P[d];
          c.enumerable = c.enumerable || !1;
          c.configurable = !0;
          if ("value" in c) c.writable = !0;
          Object.defineProperty(E, c.key, c);
        }
      }
      return function (E, P, d) {
        if (P) _(E.prototype, P);
        if (d) _(E, d);
        return E;
      };
    })();
    function O(_, E) {
      if (!(_ instanceof E)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(I, "__esModule", { value: !0 });
    var o = "",
      N = "_few",
      l = "_many",
      s = {
        af: "af",
        am: "am",
        ar: "ar",
        as: "as",
        az: "az",
        be: "be",
        bg: "bg",
        bn: "bn",
        bs: "bs",
        chr: "chr",
        ca: "ca",
        cs: "cs",
        cy: "cy",
        da: "da",
        de: "de",
        el: "el",
        en: "en",
        es: "es",
        et: "et",
        eu: "eu",
        fa: "fa",
        fi: "fi",
        fil: "fil",
        fr: "fr",
        ga: "ga",
        gd: "gd",
        gl: "gl",
        gu: "gu",
        ha: "ha",
        he: "he",
        hi: "hi",
        hr: "hr",
        hu: "hu",
        hy: "hy",
        id: "id",
        ig: "ig",
        is: "is",
        it: "it",
        iw: "iw",
        ja: "ja",
        ka: "ka",
        kk: "kk",
        km: "km",
        kn: "kn",
        ko: "ko",
        kok: "kok",
        ku: "ku",
        ky: "ky",
        lb: "lb",
        lt: "lt",
        lv: "lv",
        mi: "mi",
        ml: "ml",
        mn: "mn",
        mr: "mr",
        ms: "ms",
        ne: "ne",
        nl: "nl",
        nn: "nn",
        nb: "nb",
        no: "no",
        nso: "nso",
        or: "or",
        pa: "pa",
        pl: "pl",
        prs: "prs",
        pt_br: "pt-br",
        pt_pt: "pt-pt",
        qps: "qps",
        qut: "qut",
        quz: "quz",
        ro: "ro",
        ru: "ru",
        rw: "rw",
        sd: "sd",
        si: "si",
        sl: "sl",
        sk: "sk",
        sq: "sq",
        sr: "sr",
        sv: "sv",
        sw: "sw",
        ta: "ta",
        te: "te",
        tg: "tg",
        th: "th",
        ti: "ti",
        tk: "tk",
        tn: "tn",
        tr_tr: "tr-tr",
        tt: "tt",
        ug: "ug",
        uk: "uk",
        ur: "ur",
        uz: "uz",
        vi: "vi",
        wo: "wo",
        xh: "xh",
        yo: "yo",
        zh: "zh",
        zu: "zu"
      },
      u = {
        group0: {
          languages: [s.ja, s.id, s.ko, s.tr_tr, s.vi, s.zh, s.az, s.ig, s.fa, s.ka, s.km, s.kn, s.ms, s.prs, s.th, s.tt, s.ug, s.wo, s.yo]
        },
        group1: {
          languages: [
            s.bg,
            s.ca,
            s.cy,
            s.da,
            s.de,
            s.el,
            s.en,
            s.es,
            s.et,
            s.fi,
            s.he,
            s.hu,
            s.it,
            s.iw,
            s.nb,
            s.nl,
            s.no,
            s.pt_pt,
            s.qps,
            s.sv,
            s.af,
            s.as,
            s.bn,
            s.chr,
            s.eu,
            s.gl,
            s.gu,
            s.ha,
            s.hy,
            s.is,
            s.kk,
            s.kok,
            s.ku,
            s.ky,
            s.lb,
            s.mi,
            s.ml,
            s.mn,
            s.mr,
            s.ne,
            s.nn,
            s.or,
            s.pa,
            s.qut,
            s.quz,
            s.rw,
            s.sd,
            s.si,
            s.sq,
            s.sw,
            s.ta,
            s.te,
            s.tk,
            s.tn,
            s.ur,
            s.xh,
            s.zu
          ]
        },
        group2: { languages: [s.fr, s.pt_br, s.am, s.fil, s.hi, s.nso, s.tg, s.ti, s.uz] },
        group3: { languages: [s.lv] },
        group4: { languages: [s.gd] },
        group5: { languages: [s.ro] },
        group6: { languages: [s.lt] },
        group7: { languages: [s.ru, s.uk, s.hr, s.sr, s.be, s.bs, s.sl] },
        group8: { languages: [s.cs, s.sk] },
        group9: { languages: [s.pl] },
        group11: { languages: [s.ga] },
        group12: { languages: [s.ar] }
      },
      S = (function () {
        function _() {
          O(this, _);
        }
        T(_, null, [
          {
            key: "init",
            value: function () {
              var P = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : s.en,
                d = P.replace("-", "_").toLowerCase();
              if (!s[d]) {
                var c = d.split("_");
                if (1 === c.length) {
                  throw new Error("Unsupported language:" + P);
                }
                d = c[0];
              }
              this.currentLocale = d;
            }
          },
          {
            key: "getPluralSuffix",
            value: function (P) {
              var d = void 0,
                c = "",
                g = "";
              for (d in u) {
                if (-1 !== u[d].languages.indexOf(this.currentLocale)) {
                  c = d;
                }
              }
              switch (c) {
                case "group0":
                  g = 1 === P ? o : N;
                  break;
                case "group1":
                  g = 1 === P ? o : l;
                  break;
                case "group2":
                  g = 1 < P ? l : o;
                  break;
                case "group3":
                  g = 1 == P % 10 && 11 != P % 100 ? o : 0 === P ? N : l;
                  break;
                case "group4":
                  g = 1 === P || 11 === P ? o : 2 === P || 12 === P ? N : l;
                  break;
                case "group5":
                  g = 1 === P ? o : 0 === P || (0 < P % 100 && 20 > P % 100) ? N : l;
                  break;
                case "group6":
                  g = 1 == P % 10 && 11 != P % 100 ? o : 2 <= P % 10 && (10 > P % 100 || 20 <= P % 100) ? l : N;
                  break;
                case "group7":
                  g = 1 == P % 10 && 11 != P % 100 ? o : 2 <= P % 10 && 4 >= P % 10 && (10 > P % 100 || 20 <= P % 100) ? N : l;
                  break;
                case "group8":
                  g = 1 === P ? o : 2 <= P && 4 >= P ? N : l;
                  break;
                case "group9":
                  g = 1 === P ? o : 2 <= P % 10 && 4 >= P % 10 && (10 > P % 100 || 20 <= P % 100) ? N : l;
                  break;
                case "group11":
                  g = 1 === P ? o : 2 <= P && 10 >= P ? N : l;
                  break;
                case "group12":
                  g = 1 === P ? o : 2 === P ? N : l;
                  break;
                default:
                  g = "";
                  break;
              }
              return g;
            }
          }
        ]);
        return _;
      })();
    I.default = S;
  }
]);
