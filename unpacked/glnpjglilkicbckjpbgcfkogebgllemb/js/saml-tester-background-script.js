(() => {
  "use strict";
  var t = {
      682: function (t, e, n) {
        var r =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (s, o) {
                function i(t) {
                  try {
                    u(r.next(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function a(t) {
                  try {
                    u(r.throw(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function u(t) {
                  var e;
                  t.done
                    ? s(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(i, a);
                }
                u((r = r.apply(t, e || [])).next());
              });
            },
          s =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                s,
                o,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & s[0]) throw s[1];
                    return s[1];
                  },
                  trys: [],
                  ops: []
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function a(a) {
                return function (u) {
                  return (function (a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o && ((o = 0), a[0] && (i = 0)), i; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (s = 2 & a[0] ? r.return : a[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) &&
                            !(s = s.call(r, a[1])).done)
                        )
                          return s;
                        switch (((r = 0), s && (a = [2 & a[0], s.value]), a[0])) {
                          case 0:
                          case 1:
                            s = a;
                            break;
                          case 4:
                            return i.label++, { value: a[1], done: !1 };
                          case 5:
                            i.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (!((s = (s = i.trys).length > 0 && s[s.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                              i = 0;
                              continue;
                            }
                            if (3 === a[0] && (!s || (a[1] > s[0] && a[1] < s[3]))) {
                              i.label = a[1];
                              break;
                            }
                            if (6 === a[0] && i.label < s[1]) {
                              (i.label = s[1]), (s = a);
                              break;
                            }
                            if (s && i.label < s[2]) {
                              (i.label = s[2]), i.ops.push(a);
                              break;
                            }
                            s[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        a = e.call(t, i);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = s = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, u]);
                };
              }
            },
          o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(654),
          a = n(41),
          u = o(n(546)),
          c = (function () {
            function t(t) {
              (this.requestHandler = this.handleTestRequest.bind(this)), (this.ctx = t);
            }
            return (
              (t.prototype.handleTestRequest = function (t, e, n) {
                var r = this,
                  s = Okta.Constants.SamlTesterEvents.ACTIONS,
                  o = new u.default(this.ctx.storage);
                if ([s.GET_TEST_RESULTS, s.CLEAR_TEST_RESULTS, s.RUN_TEST_CASE].includes(t.action))
                  return (
                    o.fetchStore().then(function (e) {
                      return r.processAction(t, e, n);
                    }),
                    !0
                  );
                Log.warn("Action '".concat(t.action, "' not recognized, ignoring."));
              }),
              (t.prototype.processAction = function (t, e, n) {
                var r = Okta.Constants.SamlTesterEvents.ACTIONS;
                switch (t.action) {
                  case r.GET_TEST_RESULTS:
                    return this.returnTestResults(t, n, e);
                  case r.CLEAR_TEST_RESULTS:
                    return this.clearTestResults(t, n, e);
                  case r.RUN_TEST_CASE:
                    return this.runTestCase(t, n, e);
                }
              }),
              (t.prototype.clearTestResults = function (t, e, n) {
                return r(this, void 0, void 0, function () {
                  var r;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return (
                          Log.info("Test clear results requested"),
                          n
                            ? n.isTestRunInProgress()
                              ? (Log.warn("Test already running, ignoring."), [2, e(!1)])
                              : ((r = t.data),
                                n.clearTestResults(r.appId, r.appInstanceId),
                                [4, this.ctx.storage.setOinTestResultsStore(n.toSerializable())])
                            : (Log.warn("No test results, ignoring."), [2, e(!1)])
                        );
                      case 1:
                        return s.sent(), e(!0), [2];
                    }
                  });
                });
              }),
              (t.prototype.returnTestResults = function (t, e, n) {
                if (!n) return e();
                Log.info("Test results requested");
                var r = t.data;
                return e(n.getTestResults(r.appId, r.appInstanceId));
              }),
              (t.prototype.runTestCase = function (t, e, n) {
                return r(this, void 0, void 0, function () {
                  var r, o, u, c;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (
                          (Log.info("Run test case requested"),
                          (r = Okta.Constants.SamlTester.APP_EMBED_LINK_REGEX),
                          !(
                            (o = t.data) &&
                            o.params &&
                            o.type &&
                            ["idp", "sp", "jitIdp", "jitSp"].includes(o.type) &&
                            Okta.fn.url.isOktaHref(o.params.appEmbedLink) &&
                            new RegExp(r, "g").test(o.params.appEmbedLink)
                          ))
                        )
                          return Log.warn("Test request invalid"), [2, e(!1)];
                        if ((n || (n = new a.SimpleTestResultsStore()), n.isTestRunInProgress()))
                          return Log.warn("Test already running, ignoring"), [2, e(!1)];
                        s.label = 1;
                      case 1:
                        switch ((s.trys.push([1, 11, , 12]), o.type)) {
                          case "idp":
                            return [3, 2];
                          case "sp":
                            return [3, 4];
                          case "jitIdp":
                            return [3, 6];
                        }
                        return [3, 8];
                      case 2:
                        return [4, (0, i.runIdpFlow)(o.params, this.ctx, n)];
                      case 3:
                        return (u = s.sent()), [3, 10];
                      case 4:
                        return [4, (0, i.runSpFlow)(o.params, this.ctx, n)];
                      case 5:
                        return (u = s.sent()), [3, 10];
                      case 6:
                        return [4, (0, i.runJitIdpFlow)(o.params, this.ctx, n)];
                      case 7:
                        return (u = s.sent()), [3, 10];
                      case 8:
                        return [4, (0, i.runJitSpFlow)(o.params, this.ctx, n)];
                      case 9:
                        (u = s.sent()), (s.label = 10);
                      case 10:
                        return Log.info("Test Result: ".concat(u.result)), [3, 12];
                      case 11:
                        return (c = s.sent()), Log.warn("Test failed: ".concat(c)), [3, 12];
                      case 12:
                        return e(!0), [2];
                    }
                  });
                });
              }),
              t
            );
          })();
        e.default = c;
      },
      994: function (t, e, n) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = r(n(843));
        e.default = function (t, e, n) {
          (this.passwordGenerator = new s.default()), (this.storage = t), (this.runtimeMessage = e), (this.api = n);
        };
      },
      783: (t, e, n) => {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(338),
          s = (function () {
            function t(t, e) {
              (this.baseAdminUrl = t), (this.api = e);
            }
            return (
              (t.prototype.getUserType = function () {
                return this.api
                  .makeAdminGetRequest("".concat(this.baseAdminUrl).concat(r.UriPaths.USER_TYPES, "?expand=schema"))
                  .then(function (t) {
                    if (1 === t.length && "user" === t[0].name) return t[0].id;
                    throw new Error("Expected user type");
                  });
              }),
              (t.prototype.createUser = function (t) {
                return this.api
                  .makeAdminPostRequest("".concat(this.baseAdminUrl).concat(r.UriPaths.USERS, "?activate=true"), JSON.stringify(t))
                  .then(function (t) {
                    return t.id;
                  });
              }),
              (t.prototype.deactivateUser = function (t) {
                return this.api
                  .makeAdminPostRequest("".concat(this.baseAdminUrl).concat(r.UriPaths.DEACTIVATE_USER, "/").concat(t), "sendEmail=false")
                  .then(function (t) {
                    return t.id;
                  });
              }),
              (t.prototype.deleteUser = function (t) {
                return this.api.makeAdminDeleteRequest("".concat(this.baseAdminUrl).concat(r.UriPaths.USERS, "/").concat(t));
              }),
              (t.prototype.assignUserToAppInstance = function (t, e) {
                return this.api.makeAdminPostRequest(
                  "".concat(this.baseAdminUrl).concat(r.UriPaths.APPS, "/").concat(e, "/users"),
                  JSON.stringify({ id: t })
                );
              }),
              t
            );
          })();
        e.default = s;
      },
      338: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.UriPaths = void 0);
        var n = (function () {
          function t() {}
          return (
            (t.USER_TYPES = "/api/v1/user/types"),
            (t.USERS = "/api/v1/users"),
            (t.DEACTIVATE_USER = "/admin/user/deactivate"),
            (t.APPS = "/api/v1/apps"),
            t
          );
        })();
        e.UriPaths = n;
      },
      843: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (function () {
          function t() {
            (this.ALPHABET_UPPER = "ABCDEFGHJKLMNOPRSTUVWXYZ"),
              (this.ALPHABET_LOWER = "abcdefghijkmnopqrstuvwxyz"),
              (this.NUMBERS = "23456789"),
              (this.SYMBOLS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~"),
              (this.DEFAULT_CHANGE_PASSWORD_LENGTH = 15);
          }
          return (
            (t.prototype.generateRandomIndex = function (t) {
              return crypto.getRandomValues(new Uint32Array(1))[0] % t;
            }),
            (t.prototype.getAllowedCharacterSet = function () {
              var t = this.ALPHABET_LOWER;
              return (t += this.ALPHABET_UPPER), (t += this.NUMBERS) + this.SYMBOLS;
            }),
            (t.prototype.generateRawPassword = function (t) {
              void 0 === t && (t = this.DEFAULT_CHANGE_PASSWORD_LENGTH);
              var e = "",
                n = this.getAllowedCharacterSet();
              (e += this.ALPHABET_UPPER.charAt(this.generateRandomIndex(this.ALPHABET_UPPER.length))),
                (e += this.ALPHABET_LOWER.charAt(this.generateRandomIndex(this.ALPHABET_LOWER.length))),
                (e += this.NUMBERS.charAt(this.generateRandomIndex(this.NUMBERS.length))),
                (t -= 3);
              for (var r = 0; r < t; ++r) e += n.charAt(this.generateRandomIndex(n.length));
              return e;
            }),
            (t.prototype.replaceLessThanWithOtherSymbols = function (t) {
              var e = this,
                n = this.SYMBOLS.replace("<", "");
              return t.split("").reduce(function (t, r) {
                return "<" === r && (r = n.charAt(e.generateRandomIndex(n.length))), t + r;
              }, "");
            }),
            (t.prototype.generate = function (t) {
              var e = this.generateRawPassword(t);
              return e.includes(">") && e.includes("<") && (e = this.replaceLessThanWithOtherSymbols(e)), e;
            }),
            t
          );
        })();
        e.default = n;
      },
      40: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.generateRandomUser = void 0),
          (e.generateRandomUser = function (t) {
            var e = Math.floor(900 * Math.random()) + 100,
              n = t.generate(10);
            return {
              type: { id: "to be populated" },
              profile: {
                firstName: "Test",
                lastName: "User ".concat(e),
                login: "test_user_".concat(e, "@local.com"),
                email: "test_user_".concat(e, "@local.com")
              },
              credentials: { password: { value: n } }
            };
          });
      },
      157: function (t, e, n) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = r(n(682)),
          o = function (t) {
            var e = Okta.Constants.SamlTesterEvents,
              n = new s.default(t);
            Okta.Q.all([t.storage.getPluginSettings(), t.storage.getDBGPluginSettings()]).spread(function (r, s) {
              if (!s.samlTesterEnabled || !(r && r.orgSettings && r.orgSettings.pluginSamlTesterEnabled))
                return Log.info("Removing SAML Tester listener"), void t.runtimeMessage.remove(n.requestHandler);
              Log.info("Initializing SAML Tester listener"), t.runtimeMessage.init(e.SAML_TESTER_MODULE, n.requestHandler);
            });
          };
        e.default = function (t) {
          chrome.storage.onChanged.addListener(function (e, n) {
            "local" === n && (e.DBG_PLUGIN_SETTINGS || e.PLUGIN_SETTINGS) && o(t);
          }),
            o(t);
        };
      },
      58: function (t, e, n) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = r(n(157)),
          o = r(n(994)),
          i = (function () {
            function t() {}
            return (
              (t.prototype.init = function (t, e, n) {
                (0, s.default)(new o.default(t, e, n));
              }),
              t
            );
          })();
        Okta.SamlTester = i;
      },
      593: function (t, e, n) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = r(n(408)),
          o = n(365),
          i = (function () {
            function t() {
              (this.captureTabId = -1),
                (this.capturedRequests = new Map()),
                (this.onBeforeRequestListener = this.onBeforeRequestHandler.bind(this)),
                (this.onBeforeSendHeadersListener = this.onBeforeSendHeadersHandler.bind(this)),
                (this.onHeadersReceivedListener = this.onHeadersReceivedHandler.bind(this)),
                (this.capturedRequestTypes = ["main_frame", "sub_frame", "xmlhttprequest"]),
                (this.excludedUrls = ["https://data.pendo.io"]),
                (this.excludedOktaPaths = ["/api/internal/v1/onboarding/profile"]);
            }
            return (
              Object.defineProperty(t.prototype, "capture", {
                get: function () {
                  var t = new s.default();
                  return (
                    this.capturedRequests.forEach(function (e) {
                      return t.parse(e);
                    }),
                    this.capturedRequests
                  );
                },
                enumerable: !1,
                configurable: !0
              }),
              (t.prototype.uniqueRequestId = function (t) {
                var e = Okta.fn.other.string.hashCode;
                return "request-".concat(t.requestId, "-").concat(t.method, "-").concat(e(t.url));
              }),
              (t.prototype.onBeforeRequestHandler = function (t) {
                if (this.captureTabId === t.tabId && this.capturedRequestTypes.includes(t.type) && !this.isUrlExcluded(t.url)) {
                  var e = new o.SimpleCapturedRequest(t.method, t.requestBody, [], [], -1, t.url);
                  this.capturedRequests.set(this.uniqueRequestId(t), e);
                }
              }),
              (t.prototype.onBeforeSendHeadersHandler = function (t) {
                if (this.captureTabId === t.tabId && this.capturedRequestTypes.includes(t.type) && !this.isUrlExcluded(t.url)) {
                  var e = this.uniqueRequestId(t);
                  this.capturedRequests.has(e) && (this.capturedRequests.get(e).reqHeaders = t.requestHeaders);
                }
              }),
              (t.prototype.onHeadersReceivedHandler = function (t) {
                if (this.captureTabId === t.tabId && this.capturedRequestTypes.includes(t.type) && !this.isUrlExcluded(t.url)) {
                  var e = this.uniqueRequestId(t);
                  if (this.capturedRequests.has(e)) {
                    var n = this.capturedRequests.get(e);
                    (n.statusCode = t.statusCode), (n.resHeaders = t.responseHeaders);
                  }
                }
              }),
              (t.prototype.isUrlExcluded = function (t) {
                return (
                  this.excludedUrls.some(function (e) {
                    return t.startsWith(e);
                  }) ||
                  (Okta.fn.url.isOktaHref(t) &&
                    this.excludedOktaPaths.some(function (e) {
                      return t.endsWith(e);
                    }))
                );
              }),
              (t.prototype.startCapture = function (t) {
                var e = this;
                return t.then(function (t) {
                  e.registerHandlers(), (e.captureTabId = t);
                });
              }),
              (t.prototype.registerHandlers = function () {
                var t = { urls: ["<all_urls>"] };
                chrome.webRequest.onBeforeRequest.addListener(this.onBeforeRequestListener, t, ["requestBody"]),
                  chrome.webRequest.onBeforeSendHeaders.addListener(this.onBeforeSendHeadersListener, t, ["requestHeaders"]),
                  chrome.webRequest.onHeadersReceived.addListener(this.onHeadersReceivedListener, t, ["responseHeaders"]);
              }),
              (t.prototype.stopCapture = function () {
                chrome.webRequest.onBeforeRequest.removeListener(this.onBeforeRequestListener),
                  chrome.webRequest.onBeforeSendHeaders.removeListener(this.onBeforeSendHeadersListener),
                  chrome.webRequest.onHeadersReceived.removeListener(this.onHeadersReceivedListener);
              }),
              t
            );
          })();
        e.default = i;
      },
      408: function (t, e, n) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = r(n(518)),
          o = ["SAMLRequest", "SAMLResponse"],
          i = (function () {
            function t() {}
            return (
              (t.prototype.parse = function (t) {
                "POST" === t.method && this.parsePost(t);
              }),
              (t.prototype.parsePost = function (t) {
                var e;
                if (null === (e = t.reqBody) || void 0 === e ? void 0 : e.formData) {
                  var n = t.reqBody.formData,
                    r = o.find(function (t) {
                      return n[t];
                    });
                  r && ((t.samlPayloadType = r), (t.samlPayload = a(n[r].join(""))));
                } else Log.warn("Missing form data, skipping parsing");
              }),
              t
            );
          })();
        e.default = i;
        var a = function (t) {
            return t ? (0, s.default)(u(t.replace(/\s/g, ""))) : void 0;
          },
          u = function (t) {
            return decodeURIComponent(
              atob(t)
                .split("")
                .map(function (t) {
                  return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
            );
          };
      },
      365: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SimpleCapturedRequest = void 0);
        e.SimpleCapturedRequest = function (t, e, n, r, s, o) {
          (this.method = t), (this.reqBody = e), (this.reqHeaders = n), (this.resHeaders = r), (this.statusCode = s), (this.url = o);
        };
      },
      295: function (t, e) {
        var n =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (s, o) {
                function i(t) {
                  try {
                    u(r.next(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function a(t) {
                  try {
                    u(r.throw(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function u(t) {
                  var e;
                  t.done
                    ? s(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(i, a);
                }
                u((r = r.apply(t, e || [])).next());
              });
            },
          r =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                s,
                o,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & s[0]) throw s[1];
                    return s[1];
                  },
                  trys: [],
                  ops: []
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function a(a) {
                return function (u) {
                  return (function (a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o && ((o = 0), a[0] && (i = 0)), i; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (s = 2 & a[0] ? r.return : a[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) &&
                            !(s = s.call(r, a[1])).done)
                        )
                          return s;
                        switch (((r = 0), s && (a = [2 & a[0], s.value]), a[0])) {
                          case 0:
                          case 1:
                            s = a;
                            break;
                          case 4:
                            return i.label++, { value: a[1], done: !1 };
                          case 5:
                            i.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (!((s = (s = i.trys).length > 0 && s[s.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                              i = 0;
                              continue;
                            }
                            if (3 === a[0] && (!s || (a[1] > s[0] && a[1] < s[3]))) {
                              i.label = a[1];
                              break;
                            }
                            if (6 === a[0] && i.label < s[1]) {
                              (i.label = s[1]), (s = a);
                              break;
                            }
                            if (s && i.label < s[2]) {
                              (i.label = s[2]), i.ops.push(a);
                              break;
                            }
                            s[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        a = e.call(t, i);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = s = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, u]);
                };
              }
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = (function () {
          function t(t) {
            this.monolithApiClient = t;
          }
          return (
            (t.prototype.createUserAndAssign = function (t, e) {
              return n(this, void 0, void 0, function () {
                var n, s, o;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return r.trys.push([0, 4, , 5]), [4, this.monolithApiClient.getUserType()];
                    case 1:
                      return (n = r.sent()), (t.type.id = n), [4, this.monolithApiClient.createUser(t)];
                    case 2:
                      return (s = r.sent()), [4, this.monolithApiClient.assignUserToAppInstance(s, e)];
                    case 3:
                      return r.sent(), [2, s];
                    case 4:
                      throw (
                        ((o = r.sent()),
                        Log.error("Error at createUserAndAssign [user=".concat(t.profile.email, ", appId=").concat(e, "]: ") + o),
                        o)
                      );
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.deleteUser = function (t) {
              return n(this, void 0, void 0, function () {
                var e;
                return r(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return n.trys.push([0, 2, , 3]), [4, this.monolithApiClient.deactivateUser(t)];
                    case 1:
                      return n.sent(), [2, this.monolithApiClient.deleteUser(t)];
                    case 2:
                      throw ((e = n.sent()), Log.error("Error at deleteUser [userId=".concat(t, "]: ") + e), e);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            t
          );
        })();
        e.default = s;
      },
      654: function (t, e, n) {
        var r =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (s, o) {
                function i(t) {
                  try {
                    u(r.next(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function a(t) {
                  try {
                    u(r.throw(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function u(t) {
                  var e;
                  t.done
                    ? s(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(i, a);
                }
                u((r = r.apply(t, e || [])).next());
              });
            },
          s =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                s,
                o,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & s[0]) throw s[1];
                    return s[1];
                  },
                  trys: [],
                  ops: []
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function a(a) {
                return function (u) {
                  return (function (a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o && ((o = 0), a[0] && (i = 0)), i; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (s = 2 & a[0] ? r.return : a[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) &&
                            !(s = s.call(r, a[1])).done)
                        )
                          return s;
                        switch (((r = 0), s && (a = [2 & a[0], s.value]), a[0])) {
                          case 0:
                          case 1:
                            s = a;
                            break;
                          case 4:
                            return i.label++, { value: a[1], done: !1 };
                          case 5:
                            i.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (!((s = (s = i.trys).length > 0 && s[s.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                              i = 0;
                              continue;
                            }
                            if (3 === a[0] && (!s || (a[1] > s[0] && a[1] < s[3]))) {
                              i.label = a[1];
                              break;
                            }
                            if (6 === a[0] && i.label < s[1]) {
                              (i.label = s[1]), (s = a);
                              break;
                            }
                            if (s && i.label < s[2]) {
                              (i.label = s[2]), i.ops.push(a);
                              break;
                            }
                            s[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        a = e.call(t, i);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = s = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, u]);
                };
              }
            },
          o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.runJitSpFlow = e.runJitIdpFlow = e.runSpFlow = e.runIdpFlow = e.TEST_CASE_NAMES = void 0);
        var i = n(701),
          a = o(n(593)),
          u = o(n(492)),
          c = n(351),
          l = n(40),
          p = o(n(295)),
          d = o(n(783)),
          f = o(n(546)),
          h = Okta.Q,
          g = 3e3,
          w = 5e3;
        function _(t, e, n, o) {
          return r(this, void 0, void 0, function () {
            return s(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, t.waitForSuccessfulUserSignIn()];
                case 1:
                  return r.sent(), [4, h.delay(w)];
                case 2:
                  return r.sent(), [4, e.startCapture(t.getTestTabId())];
                case 3:
                  return r.sent(), [4, n.logMoveToStep("run_app_chiclet")];
                case 4:
                  return r.sent(), [4, t.clickInstanceChiclet(o.appEmbedLink)];
                case 5:
                  return r.sent(), [4, h.delay(5e3)];
                case 6:
                  return r.sent(), [4, e.stopCapture()];
                case 7:
                  return r.sent(), [4, n.logMoveToStep("log_network", e.capture)];
                case 8:
                  return r.sent(), [4, n.logMoveToStep("confirm_user")];
                case 9:
                  return r.sent(), [4, t.waitUntilUserConfirmsCorrectSignIn()];
                case 10:
                  return r.sent(), [4, n.logMoveToStep("okta_sign_out")];
                case 11:
                  return r.sent(), [4, t.setUrl(o.signOutUrl)];
                case 12:
                  return r.sent(), [4, h.delay(g)];
                case 13:
                  return r.sent(), [4, n.logMoveToStep("close_test_window")];
                case 14:
                  return r.sent(), [4, t.closeTestWindow()];
                case 15:
                  return r.sent(), [2];
              }
            });
          });
        }
        function S(t, n) {
          return (
            (function (t) {
              return void 0 !== (null == t ? void 0 : t.testFailure) && "boolean" == typeof t.testFailure;
            })(n) && (null == n ? void 0 : n.testFailure)
              ? (t.logFinishStep("fail"), Log.warn("".concat(e.TEST_CASE_NAMES[t.testCase], " failed")))
              : (t.logFinishStep("error"), Log.warn("".concat(e.TEST_CASE_NAMES[t.testCase], " Error: ").concat(n))),
            t.close()
          );
        }
        (e.TEST_CASE_NAMES = { idp: "IdP flow", sp: "SP flow", jitIdp: "JIT IdP flow", jitSp: "JIT SP flow" }),
          (e.runIdpFlow = function (t, n, o) {
            return r(this, void 0, void 0, function () {
              var r, l, p, d, g, m;
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (r = new i.TestRunner()),
                      (l = new a.default()),
                      (p = u.default.startTestCase("idp")),
                      (d = new c.IdpFlowParams(t.appEmbedLink)),
                      [4, (g = new f.default(n.storage)).appendTestResults(o, d.appId, d.appInstanceId, p)]
                    );
                  case 1:
                    s.sent(), (s.label = 2);
                  case 2:
                    return s.trys.push([2, 9, 10, 12]), Log.info("".concat(e.TEST_CASE_NAMES[p.testCase], " starting...")), [4, r.setUp()];
                  case 3:
                    return s.sent(), [4, p.logStartStep("open_test_window")];
                  case 4:
                    return s.sent(), [4, r.openWindow(d.signOutUrl, "awaiting_user_sign_in")];
                  case 5:
                    return s.sent(), [4, p.logMoveToStep("okta_sign_in")];
                  case 6:
                    return s.sent(), [4, h.delay(w)];
                  case 7:
                    return s.sent(), [4, _(r, l, p, d)];
                  case 8:
                    return (
                      s.sent(), Log.info("".concat(e.TEST_CASE_NAMES[p.testCase], " completed")), p.logFinishStep("pass"), [2, p.close()]
                    );
                  case 9:
                    return (m = s.sent()), [2, S(p, m)];
                  case 10:
                    return l.stopCapture(), r.tearDown(), [4, g.saveStore(o)];
                  case 11:
                    return s.sent(), [7];
                  case 12:
                    return [2];
                }
              });
            });
          }),
          (e.runSpFlow = function (t, n, o) {
            return r(this, void 0, void 0, function () {
              var r, l, p, d, _, m;
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (r = new i.TestRunner()),
                      (l = new a.default()),
                      (p = u.default.startTestCase("sp")),
                      (d = new c.SpFlowParams(t.appEmbedLink, t.spInitiateUrl)),
                      [4, (_ = new f.default(n.storage)).appendTestResults(o, d.appId, d.appInstanceId, p)]
                    );
                  case 1:
                    s.sent(), (s.label = 2);
                  case 2:
                    return s.trys.push([2, 22, 23, 25]), Log.info("".concat(e.TEST_CASE_NAMES[p.testCase], " starting...")), [4, r.setUp()];
                  case 3:
                    return s.sent(), [4, p.logStartStep("open_test_window")];
                  case 4:
                    return s.sent(), [4, r.openWindow(d.signOutUrl, "running")];
                  case 5:
                    return s.sent(), [4, h.delay(1e3)];
                  case 6:
                    return s.sent(), [4, p.logMoveToStep("sp_sign_in")];
                  case 7:
                    return s.sent(), [4, r.setUrl(d.spInitiateUrl, "awaiting_user_sign_in")];
                  case 8:
                    return s.sent(), [4, l.startCapture(r.getTestTabId())];
                  case 9:
                    return s.sent(), [4, h.delay(w)];
                  case 10:
                    return s.sent(), [4, r.waitForSamlResponse(l)];
                  case 11:
                    return s.sent(), r.setStatus("awaiting_user_sign_in_confirmation"), [4, h.delay(w)];
                  case 12:
                    return s.sent(), [4, l.stopCapture()];
                  case 13:
                    return s.sent(), [4, p.logMoveToStep("log_network", l.capture)];
                  case 14:
                    return s.sent(), [4, p.logMoveToStep("confirm_user")];
                  case 15:
                    return s.sent(), [4, r.waitUntilUserConfirmsCorrectSignIn()];
                  case 16:
                    return s.sent(), [4, p.logMoveToStep("okta_sign_out")];
                  case 17:
                    return s.sent(), [4, r.setUrl(d.signOutUrl)];
                  case 18:
                    return s.sent(), [4, h.delay(g)];
                  case 19:
                    return s.sent(), [4, p.logMoveToStep("close_test_window")];
                  case 20:
                    return s.sent(), [4, r.closeTestWindow()];
                  case 21:
                    return (
                      s.sent(), Log.info("".concat(e.TEST_CASE_NAMES[p.testCase], " completed")), p.logFinishStep("pass"), [2, p.close()]
                    );
                  case 22:
                    return (m = s.sent()), [2, S(p, m)];
                  case 23:
                    return l.stopCapture(), r.tearDown(), [4, _.saveStore(o)];
                  case 24:
                    return s.sent(), [7];
                  case 25:
                    return [2];
                }
              });
            });
          }),
          (e.runJitIdpFlow = function (t, n, o) {
            return r(this, void 0, void 0, function () {
              var r, h, g, w, m, v, y, T, b, E;
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (r = new i.TestRunner()),
                      (h = new a.default()),
                      (g = u.default.startTestCase("jitIdp")),
                      (w = new c.IdpFlowParams(t.appEmbedLink)),
                      [4, (m = new f.default(n.storage)).appendTestResults(o, w.appId, w.appInstanceId, g)]
                    );
                  case 1:
                    s.sent(),
                      Log.info("".concat(e.TEST_CASE_NAMES[g.testCase], " starting...")),
                      (v = new d.default(w.adminBaseUrl, n.api)),
                      (y = new p.default(v)),
                      (T = (0, l.generateRandomUser)(n.passwordGenerator)),
                      (b = ""),
                      (s.label = 2);
                  case 2:
                    return s.trys.push([2, 14, 15, 17]), [4, r.setUp()];
                  case 3:
                    return s.sent(), [4, g.logStartStep("setup_test_user")];
                  case 4:
                    return s.sent(), [4, y.createUserAndAssign(T, w.appInstanceId)];
                  case 5:
                    return (b = s.sent()), [4, g.logMoveToStep("open_test_window")];
                  case 6:
                    return s.sent(), [4, r.openWindow(w.signOutUrl, "awaiting_user_sign_in")];
                  case 7:
                    return s.sent(), [4, r.waitForSignInPage()];
                  case 8:
                    return s.sent(), [4, g.logMoveToStep("okta_sign_in")];
                  case 9:
                    return s.sent(), [4, r.signInToOkta(T.profile.login, T.credentials.password.value)];
                  case 10:
                    return s.sent(), [4, r.waitForSecurityAnswerPage()];
                  case 11:
                    return s.sent(), [4, r.setSecurityAnswer("Test user's answer")];
                  case 12:
                    return s.sent(), [4, _(r, h, g, w)];
                  case 13:
                    return (
                      s.sent(), Log.info("".concat(e.TEST_CASE_NAMES[g.testCase], " completed")), g.logFinishStep("pass"), [2, g.close()]
                    );
                  case 14:
                    return (E = s.sent()), [2, S(g, E)];
                  case 15:
                    return h.stopCapture(), r.tearDown(), "" !== b && y.deleteUser(b), [4, m.saveStore(o)];
                  case 16:
                    return s.sent(), [7];
                  case 17:
                    return [2];
                }
              });
            });
          }),
          (e.runJitSpFlow = function (t, n, o) {
            return r(this, void 0, void 0, function () {
              var r, _, m, v, y, T, b, E, R, P;
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (r = new i.TestRunner()),
                      (_ = new a.default()),
                      (m = u.default.startTestCase("jitSp")),
                      (v = new c.SpFlowParams(t.appEmbedLink, t.spInitiateUrl)),
                      [4, (y = new f.default(n.storage)).appendTestResults(o, v.appId, v.appInstanceId, m)]
                    );
                  case 1:
                    s.sent(),
                      Log.info("".concat(e.TEST_CASE_NAMES[m.testCase], " starting...")),
                      (T = new d.default(v.adminBaseUrl, n.api)),
                      (b = new p.default(T)),
                      (E = (0, l.generateRandomUser)(n.passwordGenerator)),
                      (R = ""),
                      (s.label = 2);
                  case 2:
                    return s.trys.push([2, 28, 29, 31]), [4, r.setUp()];
                  case 3:
                    return s.sent(), [4, m.logStartStep("setup_test_user")];
                  case 4:
                    return s.sent(), [4, b.createUserAndAssign(E, v.appInstanceId)];
                  case 5:
                    return (R = s.sent()), [4, m.logMoveToStep("open_test_window")];
                  case 6:
                    return s.sent(), [4, r.openWindow(v.signOutUrl, "running")];
                  case 7:
                    return s.sent(), [4, h.delay(1e3)];
                  case 8:
                    return s.sent(), [4, m.logMoveToStep("sp_sign_in")];
                  case 9:
                    return s.sent(), [4, r.setUrl(v.spInitiateUrl, "initiating_sp_sign_in", { email: E.profile.email })];
                  case 10:
                    return s.sent(), [4, _.startCapture(r.getTestTabId())];
                  case 11:
                    return s.sent(), [4, h.delay(w)];
                  case 12:
                    return s.sent(), [4, r.waitForSignInPage()];
                  case 13:
                    return s.sent(), [4, r.signInToOkta(E.profile.login, E.credentials.password.value)];
                  case 14:
                    return s.sent(), [4, r.waitForSecurityAnswerPage()];
                  case 15:
                    return s.sent(), [4, r.setSecurityAnswer("Test user's answer")];
                  case 16:
                    return s.sent(), [4, r.waitForSamlResponse(_)];
                  case 17:
                    return s.sent(), r.setStatus("awaiting_user_sign_in_confirmation"), [4, h.delay(w)];
                  case 18:
                    return s.sent(), [4, _.stopCapture()];
                  case 19:
                    return s.sent(), [4, m.logMoveToStep("log_network", _.capture)];
                  case 20:
                    return s.sent(), [4, m.logMoveToStep("confirm_user")];
                  case 21:
                    return s.sent(), [4, r.waitUntilUserConfirmsCorrectSignIn()];
                  case 22:
                    return s.sent(), [4, m.logMoveToStep("okta_sign_out")];
                  case 23:
                    return s.sent(), [4, r.setUrl(v.signOutUrl)];
                  case 24:
                    return s.sent(), [4, h.delay(g)];
                  case 25:
                    return s.sent(), [4, m.logMoveToStep("close_test_window")];
                  case 26:
                    return s.sent(), [4, r.closeTestWindow()];
                  case 27:
                    return (
                      s.sent(), Log.info("".concat(e.TEST_CASE_NAMES[m.testCase], " completed")), m.logFinishStep("pass"), [2, m.close()]
                    );
                  case 28:
                    return (P = s.sent()), [2, S(m, P)];
                  case 29:
                    return _.stopCapture(), r.tearDown(), "" !== R && b.deleteUser(R), [4, y.saveStore(o)];
                  case 30:
                    return s.sent(), [7];
                  case 31:
                    return [2];
                }
              });
            });
          });
      },
      112: function (t, e) {
        var n,
          r =
            (this && this.__extends) ||
            ((n = function (t, e) {
              return (
                (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                  }),
                n(t, e)
              );
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
              function r() {
                this.constructor = t;
              }
              n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.TestCaseError = void 0);
        var s = (function (t) {
          function e(e, n) {
            var r = n.testFailure,
              s = t.call(this, e) || this;
            return (s.testFailure = r), s;
          }
          return r(e, t), e;
        })(Error);
        e.TestCaseError = s;
      },
      351: function (t, e) {
        var n,
          r =
            (this && this.__extends) ||
            ((n = function (t, e) {
              return (
                (n =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                  }),
                n(t, e)
              );
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
              function r() {
                this.constructor = t;
              }
              n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
            });
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SpFlowParams = e.IdpFlowParams = e.SamlTestCaseParams = void 0);
        var s = (function () {
          function t(t) {
            this.appEmbedLink = t;
          }
          return (
            Object.defineProperty(t.prototype, "orgHostName", {
              get: function () {
                return new URL(this.appEmbedLink).hostname;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "protocol", {
              get: function () {
                return new URL(this.appEmbedLink).protocol;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "adminHostName", {
              get: function () {
                var t = this.orgHostName.split("."),
                  e = ".".concat(t.at(-2), ".").concat(t.at(-1));
                return this.orgHostName.replace(e, "-admin".concat(e));
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "appInstanceId", {
              get: function () {
                var t = Array.from(this.appEmbedLink.matchAll(new RegExp(Okta.Constants.SamlTester.APP_EMBED_LINK_REGEX, "g")));
                return t && t.length > 0 && t[0].length > 2 ? t[0][2] : "";
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "appId", {
              get: function () {
                var t = Array.from(this.appEmbedLink.matchAll(new RegExp(Okta.Constants.SamlTester.APP_EMBED_LINK_REGEX, "g")));
                return t && t.length > 0 && t[0].length > 2 ? t[0][1] : "";
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "adminBaseUrl", {
              get: function () {
                return "".concat(this.protocol, "//").concat(this.adminHostName).concat(this.optionalPort);
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "signOutUrl", {
              get: function () {
                return "".concat(this.protocol, "//").concat(this.adminHostName).concat(this.optionalPort, "/login/admin/signout");
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "optionalPort", {
              get: function () {
                var t = new URL(this.appEmbedLink).port;
                return t ? ":".concat(t) : "";
              },
              enumerable: !1,
              configurable: !0
            }),
            t
          );
        })();
        e.SamlTestCaseParams = s;
        var o = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return r(e, t), e;
        })(s);
        e.IdpFlowParams = o;
        var i = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.spInitiateUrl = n), r;
          }
          return r(e, t), e;
        })(s);
        e.SpFlowParams = i;
      },
      492: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = {
            idp: [
              "open_test_window",
              "okta_sign_in",
              "run_app_chiclet",
              "log_network",
              "confirm_user",
              "okta_sign_out",
              "close_test_window"
            ],
            sp: ["open_test_window", "sp_sign_in", "log_network", "confirm_user", "okta_sign_out", "close_test_window"],
            jitIdp: [
              "setup_test_user",
              "open_test_window",
              "okta_sign_in",
              "log_network",
              "run_app_chiclet",
              "confirm_user",
              "okta_sign_out",
              "close_test_window"
            ],
            jitSp: [
              "setup_test_user",
              "open_test_window",
              "sp_sign_in",
              "log_network",
              "confirm_user",
              "okta_sign_out",
              "close_test_window"
            ]
          },
          r = (function () {
            function t(t, e) {
              (this.steps = []), (this.testCase = t), (this.result = e), (this.stepsPlanned = n[t]), (this.updatedAt = Date.now());
            }
            return (
              (t.startTestCase = function (e) {
                return new t(e, "running");
              }),
              (t.prototype.logFinishStep = function (t) {
                this.steps.length > 0 &&
                  "running" === this.steps.at(-1).result &&
                  ((this.steps.at(-1).result = t), (this.updatedAt = Date.now()));
              }),
              (t.prototype.logStartStep = function (t) {
                this.stepsPlanned.includes(t) && (this.steps.push({ step: t, result: "running" }), (this.updatedAt = Date.now()));
              }),
              (t.prototype.logMoveToStep = function (t, e) {
                if (this.stepsPlanned.includes(t) && this.steps.length > 0) {
                  var n = this.steps.at(-1);
                  if (
                    (e
                      ? ((n.result =
                          ((r = !0),
                          e.forEach(function (t) {
                            t.statusCode >= 400 && (r = !1), t.samlPayloadType && t.statusCode < 0 && (r = !1);
                          }),
                          Log.info("isNetworkExchangeSuccessful result: ".concat(r)),
                          r ? "pass" : "fail")),
                        (n.networkCapture = this.serialize(e)))
                      : (n.result = "pass"),
                    "fail" === n.result)
                  )
                    throw new Error("Step failed.");
                }
                var r;
                this.steps.push({ step: t, result: "running" }), (this.updatedAt = Date.now());
              }),
              (t.prototype.serialize = function (t) {
                return Array.from(t.entries());
              }),
              (t.prototype.close = function () {
                var t = this.steps.map(function (t) {
                    return t.step;
                  }),
                  e =
                    this.stepsPlanned.every(function (e) {
                      return t.includes(e);
                    }) &&
                    this.steps.every(function (t) {
                      return "pass" === t.result;
                    }),
                  n = this.steps.some(function (t) {
                    return "error" === t.result;
                  }),
                  r =
                    this.steps.some(function (t) {
                      return "fail" === t.result;
                    }) && !n;
                return (this.result = e ? "pass" : r ? "fail" : "error"), (this.updatedAt = Date.now()), this;
              }),
              t
            );
          })();
        e.default = r;
      },
      498: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.TestContext = void 0);
        var n = (function () {
          function t() {
            (this.testStatusValue = "idle"), (this.windowId = -1), (this.lastUserInput = void 0), (this.lastContentScriptLocation = "");
          }
          return (
            (t.prototype.resetWindowId = function () {
              this.windowId = -1;
            }),
            Object.defineProperty(t.prototype, "testStatus", {
              get: function () {
                return this.testStatusValue;
              },
              set: function (t) {
                (this.testStatusValue = t), (this.testStatusParams = void 0);
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.setWindow = function (t) {
              if (!t) throw new Error("ERROR: No test window opened");
              this.windowId = t.id;
            }),
            (t.prototype.runInContentScript = function (t) {
              return this.getTestTabId().then(function (e) {
                return chrome.tabs.sendMessage(e, t);
              });
            }),
            (t.prototype.getTestTab = function () {
              return this.windowId
                ? chrome.tabs.query({ windowId: this.windowId }).then(function (t) {
                    if (1 === t.length) return t[0];
                    throw t.length > 1 ? new Error("Not a test window") : new Error("ERROR: No test window opened");
                  })
                : Promise.reject("ERROR: No test window opened");
            }),
            (t.prototype.getTestTabId = function () {
              return this.getTestTab().then(function (t) {
                return t.id;
              });
            }),
            (t.prototype.getTestTabUrl = function () {
              return this.getTestTab().then(function (t) {
                return t.url;
              });
            }),
            t
          );
        })();
        e.TestContext = n;
      },
      41: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SimpleTestResultsStore = void 0);
        var n = (function () {
          function t() {
            this.testCaseResults = new Map();
          }
          return (
            (t.fromSerializable = function (e) {
              var n = new t();
              return (
                e && e.testCaseResults && Array.isArray(e.testCaseResults)
                  ? (n.testCaseResults = new Map(e.testCaseResults))
                  : (n.testCaseResults = new Map()),
                n
              );
            }),
            (t.prototype.toSerializable = function () {
              return { testCaseResults: Array.from(this.testCaseResults.entries()) };
            }),
            (t.prototype.getTestResults = function (t, e) {
              var n = "".concat(t, "/").concat(e);
              return this.testCaseResults.has(n) || this.testCaseResults.set(n, []), this.testCaseResults.get(n);
            }),
            (t.prototype.clearTestResults = function (t, e) {
              var n = "".concat(t, "/").concat(e);
              this.testCaseResults.set(n, []);
            }),
            (t.prototype.isTestRunInProgress = function () {
              var t = !1;
              return (
                this.testCaseResults.forEach(function (e) {
                  t ||
                    (t = e.some(function (t) {
                      return "not_started" === t.result || "running" === t.result;
                    }));
                }),
                t
              );
            }),
            t
          );
        })();
        e.SimpleTestResultsStore = n;
      },
      546: function (t, e, n) {
        var r =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (s, o) {
                function i(t) {
                  try {
                    u(r.next(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function a(t) {
                  try {
                    u(r.throw(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function u(t) {
                  var e;
                  t.done
                    ? s(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(i, a);
                }
                u((r = r.apply(t, e || [])).next());
              });
            },
          s =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                s,
                o,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & s[0]) throw s[1];
                    return s[1];
                  },
                  trys: [],
                  ops: []
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function a(a) {
                return function (u) {
                  return (function (a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o && ((o = 0), a[0] && (i = 0)), i; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (s = 2 & a[0] ? r.return : a[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) &&
                            !(s = s.call(r, a[1])).done)
                        )
                          return s;
                        switch (((r = 0), s && (a = [2 & a[0], s.value]), a[0])) {
                          case 0:
                          case 1:
                            s = a;
                            break;
                          case 4:
                            return i.label++, { value: a[1], done: !1 };
                          case 5:
                            i.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (!((s = (s = i.trys).length > 0 && s[s.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                              i = 0;
                              continue;
                            }
                            if (3 === a[0] && (!s || (a[1] > s[0] && a[1] < s[3]))) {
                              i.label = a[1];
                              break;
                            }
                            if (6 === a[0] && i.label < s[1]) {
                              (i.label = s[1]), (s = a);
                              break;
                            }
                            if (s && i.label < s[2]) {
                              (i.label = s[2]), i.ops.push(a);
                              break;
                            }
                            s[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        a = e.call(t, i);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = s = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, u]);
                };
              }
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(41),
          i = (function () {
            function t(t) {
              this.storage = t;
            }
            return (
              (t.prototype.appendTestResults = function (t, e, n, o) {
                return r(this, void 0, void 0, function () {
                  return s(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return t.getTestResults(e, n).push(o), [4, this.saveStore(t)];
                      case 1:
                        return r.sent(), [2];
                    }
                  });
                });
              }),
              (t.prototype.fetchStore = function () {
                return this.storage.getOinTestResultsStore().then(function (t) {
                  if (t) return o.SimpleTestResultsStore.fromSerializable(t);
                });
              }),
              (t.prototype.saveStore = function (t) {
                return this.storage.setOinTestResultsStore(t.toSerializable());
              }),
              t
            );
          })();
        e.default = i;
      },
      701: function (t, e, n) {
        var r,
          s =
            (this && this.__extends) ||
            ((r = function (t, e) {
              return (
                (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                  }),
                r(t, e)
              );
            }),
            function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
              function n() {
                this.constructor = t;
              }
              r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
            }),
          o =
            (this && this.__awaiter) ||
            function (t, e, n, r) {
              return new (n || (n = Promise))(function (s, o) {
                function i(t) {
                  try {
                    u(r.next(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function a(t) {
                  try {
                    u(r.throw(t));
                  } catch (t) {
                    o(t);
                  }
                }
                function u(t) {
                  var e;
                  t.done
                    ? s(t.value)
                    : ((e = t.value),
                      e instanceof n
                        ? e
                        : new n(function (t) {
                            t(e);
                          })).then(i, a);
                }
                u((r = r.apply(t, e || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (t, e) {
              var n,
                r,
                s,
                o,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & s[0]) throw s[1];
                    return s[1];
                  },
                  trys: [],
                  ops: []
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function a(a) {
                return function (u) {
                  return (function (a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o && ((o = 0), a[0] && (i = 0)), i; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (s = 2 & a[0] ? r.return : a[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) &&
                            !(s = s.call(r, a[1])).done)
                        )
                          return s;
                        switch (((r = 0), s && (a = [2 & a[0], s.value]), a[0])) {
                          case 0:
                          case 1:
                            s = a;
                            break;
                          case 4:
                            return i.label++, { value: a[1], done: !1 };
                          case 5:
                            i.label++, (r = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (!((s = (s = i.trys).length > 0 && s[s.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                              i = 0;
                              continue;
                            }
                            if (3 === a[0] && (!s || (a[1] > s[0] && a[1] < s[3]))) {
                              i.label = a[1];
                              break;
                            }
                            if (6 === a[0] && i.label < s[1]) {
                              (i.label = s[1]), (s = a);
                              break;
                            }
                            if (s && i.label < s[2]) {
                              (i.label = s[2]), i.ops.push(a);
                              break;
                            }
                            s[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        a = e.call(t, i);
                      } catch (t) {
                        (a = [6, t]), (r = 0);
                      } finally {
                        n = s = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, u]);
                };
              }
            };
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.TestRunner = e.CloseWindow = e.OpenWindowWithUrl = void 0);
        var a = n(498),
          u = n(112),
          c = function (t) {
            var e = Okta.fn.url.hrefToUrlParts(t);
            return Okta.fn.url.isOktaAdminPage(e) || Okta.fn.url.isOktaEndUserHomePage(e);
          },
          l = (function () {
            function t(t, e) {
              (this.startUrl = t), (this.status = e);
            }
            return (
              (t.prototype.execute = function (t) {
                return (
                  Log.info("OpenWindowWithUrl [url: ".concat(this.startUrl, "]")),
                  this.status && (t.testStatus = this.status),
                  chrome.windows.create({ url: this.startUrl, incognito: !0 }).then(function (e) {
                    t.setWindow(e),
                      chrome.windows.onRemoved.addListener(function (n) {
                        n === e.id && t.resetWindowId();
                      }),
                      t.getTestTabId().then(function (t) {
                        Okta.sessionStorage.set("SAML_TESTER_".concat(t), JSON.stringify({ val: !0 }));
                      });
                  })
                );
              }),
              t
            );
          })();
        e.OpenWindowWithUrl = l;
        var p = (function () {
          function t() {}
          return (
            (t.prototype.execute = function (t) {
              return (
                Log.info("CloseWindow"),
                t
                  .getTestTabId()
                  .then(chrome.tabs.remove)
                  .then(function () {
                    return t.resetWindowId();
                  })
              );
            }),
            t
          );
        })();
        e.CloseWindow = p;
        var d = (function () {
            function t(t, e, n) {
              (this.url = t), (this.status = e), (this.statusParams = n);
            }
            return (
              (t.prototype.execute = function (t) {
                var e = this;
                return (
                  Log.info("SetWindowUrl [url: ".concat(this.url, "]")),
                  this.status && (t.testStatus = this.status),
                  this.statusParams && (t.testStatusParams = this.statusParams),
                  t.getTestTabId().then(function (t) {
                    chrome.tabs.update(t, { url: e.url });
                  })
                );
              }),
              t
            );
          })(),
          f = (function () {
            function t(t, e) {
              (this.condition = t), (this.intervalPeriod = e);
            }
            return (
              (t.prototype.execute = function (t) {
                var e = this;
                return (
                  Log.info("WaitForCondition [".concat(this.condition.name, "]")),
                  new Promise(function (n, r) {
                    var s = setInterval(function () {
                      return o(e, void 0, void 0, function () {
                        return i(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return e.trys.push([0, 2, , 3]), [4, t.getTestTabId()];
                            case 1:
                              return e.sent() && this.condition.verifier(t) && (clearInterval(s), (t.testStatus = "running"), n()), [3, 3];
                            case 2:
                              return e.sent(), clearInterval(s), r(), [3, 3];
                            case 3:
                              return [2];
                          }
                        });
                      });
                    }, e.intervalPeriod);
                  })
                );
              }),
              t
            );
          })(),
          h = (function (t) {
            function e(n, r) {
              var s = {
                name: "WaitForSamlResponse",
                verifier: function () {
                  return e.containsSamlResponse(n);
                }
              };
              return t.call(this, s, r) || this;
            }
            return (
              s(e, t),
              (e.containsSamlResponse = function (t) {
                return Array.from(t.capture.values()).some(function (t) {
                  return "SAMLResponse" === t.samlPayloadType;
                });
              }),
              e
            );
          })(f),
          g = (function (t) {
            function e(e, n) {
              var r = {
                name: "WaitForMatchingUrl - ".concat(e.name),
                verifier: function (t) {
                  return e(t.lastContentScriptLocation);
                }
              };
              return t.call(this, r, n) || this;
            }
            return s(e, t), e;
          })(f),
          w = (function (t) {
            function e(e) {
              return void 0 === e && (e = 500), t.call(this, c, e) || this;
            }
            return (
              s(e, t),
              (e.prototype.execute = function (e) {
                return (e.testStatus = "awaiting_user_sign_in"), t.prototype.execute.call(this, e);
              }),
              e
            );
          })(g),
          _ = (function (t) {
            function e(e, n) {
              return (
                void 0 === n && (n = 500),
                t.call(
                  this,
                  function (t) {
                    return (function (t, e) {
                      var n = Okta.fn.url.hrefToUrlParts(t);
                      return Okta.fn.url.isOktaPage(n, e);
                    })(t, e);
                  },
                  n
                ) || this
              );
            }
            return (
              s(e, t),
              (e.prototype.execute = function (e) {
                return (e.testStatus = "running"), t.prototype.execute.call(this, e);
              }),
              e
            );
          })(g),
          S = (function () {
            function t() {
              (this.ctx = new a.TestContext()),
                (this.statusListener = this.answerTestStatus.bind(this)),
                (this.userInputListener = this.processUserInput.bind(this)),
                (this.intervalPeriod = 500);
            }
            return (
              (t.prototype.setUp = function () {
                return (
                  chrome.runtime.onMessage.addListener(this.statusListener),
                  chrome.runtime.onMessage.addListener(this.userInputListener),
                  Log.info("TestRunner::setUp"),
                  (this.ctx = new a.TestContext()),
                  (this.ctx.testStatus = "running"),
                  Promise.resolve()
                );
              }),
              (t.prototype.tearDown = function () {
                return o(this, void 0, void 0, function () {
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          Log.info("TestRunner::tearDown"),
                          (this.ctx.testStatus = "idle"),
                          this.ctx.windowId >= 0 ? [4, this.closeTestWindow()] : [3, 2]
                        );
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return (
                          chrome.runtime.onMessage.removeListener(this.statusListener),
                          chrome.runtime.onMessage.removeListener(this.userInputListener),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.openWindow = function (t, e) {
                return new l(t, e).execute(this.ctx);
              }),
              (t.prototype.closeTestWindow = function () {
                var t = this;
                return new p().execute(this.ctx).then(function () {
                  t.ctx.testStatus = "running";
                });
              }),
              (t.prototype.waitForSuccessfulUserSignIn = function () {
                return new w(this.intervalPeriod).execute(this.ctx);
              }),
              (t.prototype.waitForSignInPage = function () {
                return new _("/login/login.htm", this.intervalPeriod).execute(this.ctx);
              }),
              (t.prototype.waitForSecurityAnswerPage = function () {
                return new _("/user/welcome", this.intervalPeriod).execute(this.ctx);
              }),
              (t.prototype.waitForSamlResponse = function (t) {
                return new h(t, this.intervalPeriod).execute(this.ctx);
              }),
              (t.prototype.clickInstanceChiclet = function (t) {
                return (this.ctx.lastUserInput = void 0), (this.ctx.testStatus = "awaiting_user_sign_in_confirmation"), this.setUrl(t);
              }),
              (t.prototype.setUrl = function (t, e, n) {
                return new d(t, e, n).execute(this.ctx);
              }),
              (t.prototype.answerTestStatus = function (t, e, n) {
                var r,
                  s = this,
                  o = Okta.Constants.SamlTesterEvents;
                if (t.action === o.ACTIONS.GET_STATUS)
                  return (
                    "idle" === (null === (r = this.ctx) || void 0 === r ? void 0 : r.testStatus)
                      ? n(!1)
                      : this.ctx
                          .getTestTabId()
                          .then(function (r) {
                            var o;
                            (null === (o = e.tab) || void 0 === o ? void 0 : o.id) === r
                              ? ((s.ctx.lastContentScriptLocation = t.data.location),
                                n({ name: s.ctx.testStatus, params: s.ctx.testStatusParams }))
                              : n(!1);
                          })
                          .catch(function (t) {
                            n(!1), Log.warn("answerTestStatus No test tab : [".concat(t, "]"));
                          }),
                    !0
                  );
              }),
              (t.prototype.processUserInput = function (t) {
                var e = Okta.Constants.SamlTesterEvents;
                t.action === e.ACTIONS.PROCESS_USER_INPUT && (this.ctx.lastUserInput = t.data);
              }),
              (t.prototype.setStatus = function (t) {
                this.ctx.testStatus = t;
              }),
              (t.prototype.waitUntilUserConfirmsCorrectSignIn = function () {
                return o(this, void 0, void 0, function () {
                  var t = this;
                  return i(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (this.ctx.testStatus = "awaiting_user_sign_in_confirmation"),
                          [
                            4,
                            m(function () {
                              var e;
                              if (null === (e = t.ctx.lastUserInput) || void 0 === e ? void 0 : e.confirmed)
                                return (t.ctx.testStatus = "running"), (t.ctx.lastUserInput = void 0), !0;
                              if (t.ctx.lastUserInput || -1 === t.ctx.windowId)
                                throw (
                                  ((t.ctx.testStatus = "running"),
                                  (t.ctx.lastUserInput = void 0),
                                  new u.TestCaseError("Sign in confirmation failed.", { testFailure: !0 }))
                                );
                              return !1;
                            })
                          ]
                        );
                      case 1:
                        return e.sent(), [2];
                    }
                  });
                });
              }),
              (t.prototype.getTestTabId = function () {
                return this.ctx ? this.ctx.getTestTabId() : Promise.reject("Test not started.");
              }),
              (t.prototype.signInToOkta = function (t, e) {
                return (
                  Log.info("signInToOkta"),
                  (this.ctx.testStatus = "running"),
                  this.getTestTabId().then(function (n) {
                    return chrome.tabs.sendMessage(n, {
                      module: Okta.Constants.SamlTesterEvents.SAML_TESTER_MODULE,
                      action: Okta.Constants.SamlTesterEvents.ACTIONS.SIGN_IN_TO_OKTA,
                      data: { username: t, password: e }
                    });
                  })
                );
              }),
              (t.prototype.setSecurityAnswer = function (t) {
                return (
                  Log.info("setSecurityAnswer"),
                  (this.ctx.testStatus = "running"),
                  this.getTestTabId().then(function (e) {
                    return chrome.tabs.sendMessage(e, {
                      module: Okta.Constants.SamlTesterEvents.SAML_TESTER_MODULE,
                      action: Okta.Constants.SamlTesterEvents.ACTIONS.SET_SECURITY_ANSWER,
                      data: { answer: t }
                    });
                  })
                );
              }),
              t
            );
          })();
        e.TestRunner = S;
        var m = function (t, e) {
          void 0 === e && (e = 500);
          try {
            return t()
              ? Promise.resolve(!0)
              : new Promise(function (n, r) {
                  var s = setInterval(function () {
                    try {
                      t() && (clearInterval(s), n(!0));
                    } catch (t) {
                      clearInterval(s), r(t);
                    }
                  }, e);
                });
          } catch (t) {
            return Promise.reject(t);
          }
        };
      },
      518: function (t, e, n) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const s = r(n(772));
        function o(t) {
          if (!t.options.indentation && !t.options.lineSeparator) return;
          let e;
          for (t.content += t.options.lineSeparator, e = 0; e < t.level; e++) t.content += t.options.indentation;
        }
        function i(t, e) {
          t.content += e;
        }
        function a(t, e, n) {
          if ("string" == typeof t.content)
            !(function (t, e, n) {
              if (!n) {
                const n = t.trim();
                (e.options.lineSeparator || 0 === n.length) && (t = n);
              }
              t.length > 0 && (!n && e.content.length > 0 && o(e), i(e, t));
            })(t.content, e, n);
          else if ("Element" === t.type)
            !(function (t, e, n) {
              if ((e.path.push(t.name), !n && e.content.length > 0 && o(e), i(e, "<" + t.name), u(e, t.attributes), null === t.children)) {
                const t = e.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>";
                i(e, t);
              } else if (0 === t.children.length) i(e, "></" + t.name + ">");
              else {
                const r = t.children;
                i(e, ">"), e.level++;
                let s = "preserve" === t.attributes["xml:space"],
                  u = !1;
                if (
                  (!s &&
                    e.options.ignoredPaths &&
                    ((u = (function (t, e) {
                      const n = "/" + t.join("/"),
                        r = t[t.length - 1];
                      return e.includes(r) || e.includes(n);
                    })(e.path, e.options.ignoredPaths)),
                    (s = u)),
                  !s && e.options.collapseContent)
                ) {
                  let t = !1,
                    e = !1,
                    n = !1;
                  r.forEach(function (s, o) {
                    "Text" === s.type
                      ? (s.content.includes("\n")
                          ? ((e = !0), (s.content = s.content.trim()))
                          : (0 !== o && o !== r.length - 1) || (0 === s.content.trim().length && (s.content = "")),
                        s.content.trim().length > 0 && (t = !0))
                      : "CDATA" === s.type
                      ? (t = !0)
                      : (n = !0);
                  }),
                    !t || (n && e) || (s = !0);
                }
                r.forEach(function (t) {
                  a(t, e, n || s);
                }),
                  e.level--,
                  n || s || o(e),
                  u &&
                    (function (t) {
                      let e;
                      for (t.content = t.content.replace(/ +$/, ""), e = 0; e < t.level; e++) t.content += t.options.indentation;
                    })(e),
                  i(e, "</" + t.name + ">");
              }
              e.path.pop();
            })(t, e, n);
          else {
            if ("ProcessingInstruction" !== t.type) throw new Error("Unknown node type: " + t.type);
            c(t, e);
          }
        }
        function u(t, e) {
          Object.keys(e).forEach(function (n) {
            const r = e[n].replace(/"/g, "&quot;");
            i(t, " " + n + '="' + r + '"');
          });
        }
        function c(t, e) {
          e.content.length > 0 && o(e), i(e, "<?" + t.name), u(e, t.attributes), i(e, "?>");
        }
        function l(t, e = {}) {
          (e.indentation = "indentation" in e ? e.indentation : "    "),
            (e.collapseContent = !0 === e.collapseContent),
            (e.lineSeparator = "lineSeparator" in e ? e.lineSeparator : "\r\n"),
            (e.whiteSpaceAtEndOfSelfclosingTag = !0 === e.whiteSpaceAtEndOfSelfclosingTag),
            (e.throwOnFailure = !1 !== e.throwOnFailure);
          try {
            const n = (0, s.default)(t, { filter: e.filter, strictMode: e.strictMode }),
              r = { content: "", level: 0, options: e, path: [] };
            return (
              n.declaration && c(n.declaration, r),
              n.children.forEach(function (t) {
                a(t, r, !1);
              }),
              e.lineSeparator ? r.content.replace(/\r\n/g, "\n").replace(/\n/g, e.lineSeparator) : r.content
            );
          } catch (n) {
            if (e.throwOnFailure) throw n;
            return t;
          }
        }
        (l.minify = (t, e = {}) => l(t, Object.assign(Object.assign({}, e), { indentation: "", lineSeparator: "" }))),
          (t.exports = l),
          (e.default = l);
      },
      772: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ParsingError = void 0);
        class n extends Error {
          constructor(t, e) {
            super(t), (this.cause = e);
          }
        }
        let r;
        function s() {
          return (
            a(!1) ||
            (function () {
              const t = l(/^([^<]+)/);
              if (t) {
                const e = { type: "Text", content: t[1] };
                return { excluded: !1 === r.options.filter(e), node: e };
              }
            })() ||
            u() ||
            (function () {
              if (r.xml.startsWith("<![CDATA[")) {
                const t = r.xml.indexOf("]]>");
                if (t > -1) {
                  const e = t + 3,
                    n = { type: "CDATA", content: r.xml.substring(0, e) };
                  return (r.xml = r.xml.slice(e)), { excluded: !1 === r.options.filter(n), node: n };
                }
              }
            })()
          );
        }
        function o() {
          return (
            l(/\s*/),
            a(!0) ||
              u() ||
              (function () {
                const t =
                  l(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) ||
                  l(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) ||
                  l(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) ||
                  l(/^<!DOCTYPE\s+\S+\s*>/);
                if (t) {
                  const e = { type: "DocumentType", content: t[0] };
                  return { excluded: !1 === r.options.filter(e), node: e };
                }
              })() ||
              i(!1)
          );
        }
        function i(t) {
          const e = l(t ? /^<\?(xml)\s*/ : /^<\?([\w-:.]+)\s*/);
          if (!e) return;
          const n = { name: e[1], type: "ProcessingInstruction", attributes: {} };
          for (; !p() && !d("?>"); ) {
            const t = c();
            if (!t) return;
            n.attributes[t.name] = t.value;
          }
          return l(/\?>/), { excluded: !t && !1 === r.options.filter(n), node: n };
        }
        function a(t) {
          const e = l(/^<([^?!</>\s]+)\s*/);
          if (!e) return;
          const o = { type: "Element", name: e[1], attributes: {}, children: [] },
            i = !t && !1 === r.options.filter(o);
          for (; !(p() || d(">") || d("?>") || d("/>")); ) {
            const t = c();
            if (!t) return;
            o.attributes[t.name] = t.value;
          }
          if (l(/^\s*\/>/)) return (o.children = null), { excluded: i, node: o };
          l(/\??>/);
          let a = s();
          for (; a; ) a.excluded || o.children.push(a.node), (a = s());
          if (r.options.strictMode) {
            const t = `</${o.name}>`;
            if (!r.xml.startsWith(t)) throw new n("Failed to parse XML", `Closing tag not matching "${t}"`);
            r.xml = r.xml.slice(t.length);
          } else l(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);
          return { excluded: i, node: o };
        }
        function u() {
          const t = l(/^<!--[\s\S]*?-->/);
          if (t) {
            const e = { type: "Comment", content: t[0] };
            return { excluded: !1 === r.options.filter(e), node: e };
          }
        }
        function c() {
          const t = l(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
          if (t) return { name: t[1].trim(), value: ((e = t[2].trim()), e.replace(/^['"]|['"]$/g, "")) };
          var e;
        }
        function l(t) {
          const e = r.xml.match(t);
          if (e) return (r.xml = r.xml.slice(e[0].length)), e;
        }
        function p() {
          return 0 === r.xml.length;
        }
        function d(t) {
          return 0 === r.xml.indexOf(t);
        }
        function f(t, e = {}) {
          t = t.trim();
          const s = e.filter || (() => !0);
          return (
            (r = { xml: t, options: Object.assign(Object.assign({}, e), { filter: s, strictMode: !0 === e.strictMode }) }),
            (function () {
              const t = i(!0),
                e = [];
              let s,
                a = o();
              for (; a; ) {
                if ("Element" === a.node.type) {
                  if (s) throw new Error("Found multiple root nodes");
                  s = a.node;
                }
                a.excluded || e.push(a.node), (a = o());
              }
              if (!s) throw new n("Failed to parse XML", "Root Element not found");
              if (0 !== r.xml.length) throw new n("Failed to parse XML", "Not Well-Formed XML");
              return { declaration: t ? t.node : null, root: s, children: e };
            })()
          );
        }
        (e.ParsingError = n), (t.exports = f), (e.default = f);
      }
    },
    e = {};
  !(function n(r) {
    var s = e[r];
    if (void 0 !== s) return s.exports;
    var o = (e[r] = { exports: {} });
    return t[r].call(o.exports, o, o.exports, n), o.exports;
  })(58);
})();
