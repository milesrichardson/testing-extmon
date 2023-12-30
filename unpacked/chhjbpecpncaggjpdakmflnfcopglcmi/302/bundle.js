/*! For license information please see bundle.js.LICENSE.txt */
(self.webpackChunksource = self.webpackChunksource || []).push([
  [302],
  {
    44354: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(99772);
      var i = (function () {
        function e() {
          this.errorCount = 0;
        }
        return (
          (e.prototype.getDelay = function () {
            return 0 === this.errorCount
              ? 0
              : 1e3 *
                  n.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT[
                    Math.min(n.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT.length - 1, this.errorCount)
                  ] +
                  Math.round(1e3 * Math.random());
          }),
          (e.prototype.countError = function () {
            this.errorCount < n.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT.length - 1 && this.errorCount++;
          }),
          (e.prototype.reset = function () {
            this.errorCount = 0;
          }),
          e
        );
      })();
      t.default = i;
    },
    74621: function (e, t, r) {
      "use strict";
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                }),
              n(e, t)
            );
          }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
          }),
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = r(23363),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            i(t, e),
            (t.prototype.makeGetRequest = function (e, t) {
              return a.makeGetRequest(e, t);
            }),
            (t.prototype.getConfigDefaults = function () {
              return { autoUpdate: !1 };
            }),
            t
          );
        })(o(r(43718)).default);
      t.default = s;
    },
    23363: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(99772),
        i = r(3023).getLogger("DatafileManager");
      t.makeGetRequest = function (e, t) {
        var r = new XMLHttpRequest();
        return {
          responsePromise: new Promise(function (o, a) {
            r.open("GET", e, !0),
              (function (e, t) {
                Object.keys(e).forEach(function (r) {
                  var n = e[r];
                  t.setRequestHeader(r, n);
                });
              })(t, r),
              (r.onreadystatechange = function () {
                if (4 === r.readyState) {
                  if (0 === r.status) return void a(new Error("Request error"));
                  var e = (function (e) {
                      var t = e.getAllResponseHeaders();
                      if (null === t) return {};
                      var r = t.split("\r\n"),
                        n = {};
                      return (
                        r.forEach(function (e) {
                          var t = e.indexOf(": ");
                          if (t > -1) {
                            var r = e.slice(0, t),
                              i = e.slice(t + 2);
                            i.length > 0 && (n[r] = i);
                          }
                        }),
                        n
                      );
                    })(r),
                    t = { statusCode: r.status, body: r.responseText, headers: e };
                  o(t);
                }
              }),
              (r.timeout = n.REQUEST_TIMEOUT_MS),
              (r.ontimeout = function () {
                i.error("Request timed out");
              }),
              r.send();
          }),
          abort: function () {
            r.abort();
          }
        };
      };
    },
    99772: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DEFAULT_UPDATE_INTERVAL = 3e5),
        (t.MIN_UPDATE_INTERVAL = 1e3),
        (t.DEFAULT_URL_TEMPLATE = "https://cdn.optimizely.com/datafiles/%s.json"),
        (t.DEFAULT_AUTHENTICATED_URL_TEMPLATE = "https://config.optimizely.com/datafiles/auth/%s.json"),
        (t.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT = [0, 8, 16, 32, 64, 128, 256, 512]),
        (t.REQUEST_TIMEOUT_MS = 6e4);
    },
    20325: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
        function e() {
          (this.listeners = {}), (this.listenerId = 1);
        }
        return (
          (e.prototype.on = function (e, t) {
            var r = this;
            this.listeners[e] || (this.listeners[e] = {});
            var n = String(this.listenerId);
            return (
              this.listenerId++,
              (this.listeners[e][n] = t),
              function () {
                r.listeners[e] && delete r.listeners[e][n];
              }
            );
          }),
          (e.prototype.emit = function (e, t) {
            var r = this.listeners[e];
            r &&
              Object.keys(r).forEach(function (e) {
                (0, r[e])(t);
              });
          }),
          (e.prototype.removeAllListeners = function () {
            this.listeners = {};
          }),
          e
        );
      })();
      t.default = r;
    },
    43718: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                  return e;
                }),
              n.apply(this, arguments)
            );
          },
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(3023),
        a = r(92306),
        s = i(r(20325)),
        u = r(99772),
        l = i(r(44354)),
        c = o.getLogger("DatafileManager");
      function E(e) {
        return e >= 200 && e < 400;
      }
      var f = {
          get: function () {
            return Promise.resolve("");
          },
          set: function () {
            return Promise.resolve();
          },
          contains: function () {
            return Promise.resolve(!1);
          },
          remove: function () {
            return Promise.resolve();
          }
        },
        d = (function () {
          function e(e) {
            var t = this,
              r = n(n({}, this.getConfigDefaults()), e),
              i = r.datafile,
              o = r.autoUpdate,
              E = void 0 !== o && o,
              d = r.sdkKey,
              p = r.updateInterval,
              g = void 0 === p ? u.DEFAULT_UPDATE_INTERVAL : p,
              I = r.urlTemplate,
              _ = void 0 === I ? u.DEFAULT_URL_TEMPLATE : I,
              h = r.cache,
              v = void 0 === h ? f : h;
            (this.cache = v),
              (this.cacheKey = "opt-datafile-" + d),
              (this.isReadyPromiseSettled = !1),
              (this.readyPromiseResolver = function () {}),
              (this.readyPromiseRejecter = function () {}),
              (this.readyPromise = new Promise(function (e, r) {
                (t.readyPromiseResolver = e), (t.readyPromiseRejecter = r);
              })),
              i ? ((this.currentDatafile = i), d || this.resolveReadyPromise()) : (this.currentDatafile = ""),
              (this.isStarted = !1),
              (this.datafileUrl = a.sprintf(_, d)),
              (this.emitter = new s.default()),
              (this.autoUpdate = E),
              !(function (e) {
                return e >= u.MIN_UPDATE_INTERVAL;
              })(g)
                ? (c.warn("Invalid updateInterval %s, defaulting to %s", g, u.DEFAULT_UPDATE_INTERVAL),
                  (this.updateInterval = u.DEFAULT_UPDATE_INTERVAL))
                : (this.updateInterval = g),
              (this.currentTimeout = null),
              (this.currentRequest = null),
              (this.backoffController = new l.default()),
              (this.syncOnCurrentRequestComplete = !1);
          }
          return (
            (e.prototype.get = function () {
              return this.currentDatafile;
            }),
            (e.prototype.start = function () {
              this.isStarted ||
                (c.debug("Datafile manager started"),
                (this.isStarted = !0),
                this.backoffController.reset(),
                this.setDatafileFromCacheIfAvailable(),
                this.syncDatafile());
            }),
            (e.prototype.stop = function () {
              return (
                c.debug("Datafile manager stopped"),
                (this.isStarted = !1),
                this.currentTimeout && (clearTimeout(this.currentTimeout), (this.currentTimeout = null)),
                this.emitter.removeAllListeners(),
                this.currentRequest && (this.currentRequest.abort(), (this.currentRequest = null)),
                Promise.resolve()
              );
            }),
            (e.prototype.onReady = function () {
              return this.readyPromise;
            }),
            (e.prototype.on = function (e, t) {
              return this.emitter.on(e, t);
            }),
            (e.prototype.onRequestRejected = function (e) {
              this.isStarted &&
                (this.backoffController.countError(),
                e instanceof Error
                  ? c.error("Error fetching datafile: %s", e.message, e)
                  : "string" == typeof e
                  ? c.error("Error fetching datafile: %s", e)
                  : c.error("Error fetching datafile"));
            }),
            (e.prototype.onRequestResolved = function (e) {
              if (this.isStarted) {
                void 0 !== e.statusCode && E(e.statusCode) ? this.backoffController.reset() : this.backoffController.countError(),
                  this.trySavingLastModified(e.headers);
                var t = this.getNextDatafileFromResponse(e);
                if ("" !== t)
                  if (
                    (c.info("Updating datafile from response"),
                    (this.currentDatafile = t),
                    this.cache.set(this.cacheKey, t),
                    this.isReadyPromiseSettled)
                  ) {
                    var r = { datafile: t };
                    this.emitter.emit("update", r);
                  } else this.resolveReadyPromise();
              }
            }),
            (e.prototype.onRequestComplete = function () {
              this.isStarted &&
                ((this.currentRequest = null),
                this.isReadyPromiseSettled || this.autoUpdate || this.rejectReadyPromise(new Error("Failed to become ready")),
                this.autoUpdate && this.syncOnCurrentRequestComplete && this.syncDatafile(),
                (this.syncOnCurrentRequestComplete = !1));
            }),
            (e.prototype.syncDatafile = function () {
              var e = this,
                t = {};
              this.lastResponseLastModified && (t["if-modified-since"] = this.lastResponseLastModified),
                c.debug("Making datafile request to url %s with headers: %s", this.datafileUrl, function () {
                  return JSON.stringify(t);
                }),
                (this.currentRequest = this.makeGetRequest(this.datafileUrl, t));
              var r = function () {
                e.onRequestComplete();
              };
              this.currentRequest.responsePromise
                .then(
                  function (t) {
                    e.onRequestResolved(t);
                  },
                  function (t) {
                    e.onRequestRejected(t);
                  }
                )
                .then(r, r),
                this.autoUpdate && this.scheduleNextUpdate();
            }),
            (e.prototype.resolveReadyPromise = function () {
              this.readyPromiseResolver(), (this.isReadyPromiseSettled = !0);
            }),
            (e.prototype.rejectReadyPromise = function (e) {
              this.readyPromiseRejecter(e), (this.isReadyPromiseSettled = !0);
            }),
            (e.prototype.scheduleNextUpdate = function () {
              var e = this,
                t = this.backoffController.getDelay(),
                r = Math.max(t, this.updateInterval);
              c.debug("Scheduling sync in %s ms", r),
                (this.currentTimeout = setTimeout(function () {
                  e.currentRequest ? (e.syncOnCurrentRequestComplete = !0) : e.syncDatafile();
                }, r));
            }),
            (e.prototype.getNextDatafileFromResponse = function (e) {
              return (
                c.debug("Response status code: %s", e.statusCode),
                void 0 === e.statusCode || 304 === e.statusCode ? "" : E(e.statusCode) ? e.body : ""
              );
            }),
            (e.prototype.trySavingLastModified = function (e) {
              var t = e["last-modified"] || e["Last-Modified"];
              void 0 !== t &&
                ((this.lastResponseLastModified = t),
                c.debug("Saved last modified header value from response: %s", this.lastResponseLastModified));
            }),
            (e.prototype.setDatafileFromCacheIfAvailable = function () {
              var e = this;
              this.cache.get(this.cacheKey).then(function (t) {
                e.isStarted &&
                  !e.isReadyPromiseSettled &&
                  "" !== t &&
                  (c.debug("Using datafile from cache"), (e.currentDatafile = t), e.resolveReadyPromise());
              });
            }),
            e
          );
        })();
      t.default = d;
    },
    81816: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(74621);
      t.HttpPollingDatafileManager = n.default;
    },
    8164: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    49651: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendEventNotification =
          t.getQueue =
          t.validateAndGetBatchSize =
          t.validateAndGetFlushInterval =
          t.DEFAULT_BATCH_SIZE =
          t.DEFAULT_FLUSH_INTERVAL =
            void 0);
      var n = r(74625),
        i = r(3023),
        o = r(92306);
      (t.DEFAULT_FLUSH_INTERVAL = 3e4), (t.DEFAULT_BATCH_SIZE = 10);
      var a = i.getLogger("EventProcessor");
      (t.validateAndGetFlushInterval = function (e) {
        return (
          e <= 0 && (a.warn("Invalid flushInterval " + e + ", defaulting to " + t.DEFAULT_FLUSH_INTERVAL), (e = t.DEFAULT_FLUSH_INTERVAL)),
          e
        );
      }),
        (t.validateAndGetBatchSize = function (e) {
          return (
            (e = Math.floor(e)) < 1 &&
              (a.warn("Invalid batchSize " + e + ", defaulting to " + t.DEFAULT_BATCH_SIZE), (e = t.DEFAULT_BATCH_SIZE)),
            (e = Math.max(1, e))
          );
        }),
        (t.getQueue = function (e, t, r, i, o) {
          return e > 1
            ? new n.DefaultEventQueue({ flushInterval: t, maxQueueSize: e, batchComparator: r, sink: i, closingSink: o })
            : new n.SingleEventQueue({ sink: i });
        }),
        (t.sendEventNotification = function (e, t) {
          e && e.sendNotifications(o.NOTIFICATION_TYPES.LOG_EVENT, t);
        });
    },
    74625: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DefaultEventQueue = t.SingleEventQueue = void 0);
      var n = r(3023).getLogger("EventProcessor"),
        i = (function () {
          function e(e) {
            var t = e.timeout,
              r = e.callback;
            (this.timeout = Math.max(t, 0)), (this.callback = r);
          }
          return (
            (e.prototype.start = function () {
              this.timeoutId = setTimeout(this.callback, this.timeout);
            }),
            (e.prototype.refresh = function () {
              this.stop(), this.start();
            }),
            (e.prototype.stop = function () {
              this.timeoutId && clearTimeout(this.timeoutId);
            }),
            e
          );
        })(),
        o = (function () {
          function e(e) {
            var t = e.sink;
            this.sink = t;
          }
          return (
            (e.prototype.start = function () {}),
            (e.prototype.stop = function () {
              return Promise.resolve();
            }),
            (e.prototype.enqueue = function (e) {
              this.sink([e]);
            }),
            e
          );
        })();
      t.SingleEventQueue = o;
      var a = (function () {
        function e(e) {
          var t = e.flushInterval,
            r = e.maxQueueSize,
            n = e.sink,
            o = e.closingSink,
            a = e.batchComparator;
          (this.buffer = []),
            (this.maxQueueSize = Math.max(r, 1)),
            (this.sink = n),
            (this.closingSink = o),
            (this.batchComparator = a),
            (this.timer = new i({ callback: this.flush.bind(this), timeout: t })),
            (this.started = !1);
        }
        return (
          (e.prototype.start = function () {
            this.started = !0;
          }),
          (e.prototype.stop = function () {
            this.started = !1;
            var e = this.closingSink ? this.closingSink(this.buffer) : this.sink(this.buffer);
            return (this.buffer = []), this.timer.stop(), e;
          }),
          (e.prototype.enqueue = function (e) {
            if (this.started) {
              var t = this.buffer[0];
              t && !this.batchComparator(t, e) && this.flush(),
                0 === this.buffer.length && this.timer.refresh(),
                this.buffer.push(e),
                this.buffer.length >= this.maxQueueSize && this.flush();
            } else n.warn("Queue is stopped, not accepting event");
          }),
          (e.prototype.flush = function () {
            this.sink(this.buffer), (this.buffer = []), this.timer.stop();
          }),
          e
        );
      })();
      t.DefaultEventQueue = a;
    },
    61622: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.areEventContextsEqual = void 0),
        (t.areEventContextsEqual = function (e, t) {
          var r = e.context,
            n = t.context;
          return (
            r.accountId === n.accountId &&
            r.projectId === n.projectId &&
            r.clientName === n.clientName &&
            r.clientVersion === n.clientVersion &&
            r.revision === n.revision &&
            r.anonymizeIP === n.anonymizeIP &&
            r.botFiltering === n.botFiltering
          );
        });
    },
    73931: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(61622), t),
        i(r(49651), t),
        i(r(8164), t),
        i(r(37530), t),
        i(r(85381), t),
        i(r(33440), t),
        i(r(91542), t);
    },
    37530: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    85381: function (e, t, r) {
      "use strict";
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }),
              n(e, t)
            );
          }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LocalStoragePendingEventsDispatcher = t.PendingEventsDispatcher = void 0);
      var o = r(3023),
        a = r(94668),
        s = r(92306),
        u = o.getLogger("EventProcessor"),
        l = (function () {
          function e(e) {
            var t = e.eventDispatcher,
              r = e.store;
            (this.dispatcher = t), (this.store = r);
          }
          return (
            (e.prototype.dispatchEvent = function (e, t) {
              this.send({ uuid: s.generateUUID(), timestamp: s.getTimestamp(), request: e }, t);
            }),
            (e.prototype.sendPendingEvents = function () {
              var e = this,
                t = this.store.values();
              u.debug("Sending %s pending events from previous page", t.length),
                t.forEach(function (t) {
                  try {
                    e.send(t, function () {});
                  } catch (e) {}
                });
            }),
            (e.prototype.send = function (e, t) {
              var r = this;
              this.store.set(e.uuid, e),
                this.dispatcher.dispatchEvent(e.request, function (n) {
                  r.store.remove(e.uuid), t(n);
                });
            }),
            e
          );
        })();
      t.PendingEventsDispatcher = l;
      var c = (function (e) {
        function t(t) {
          var r = t.eventDispatcher;
          return (
            e.call(this, { eventDispatcher: r, store: new a.LocalStorageStore({ maxValues: 100, key: "fs_optly_pending_events" }) }) || this
          );
        }
        return i(t, e), t;
      })(l);
      t.LocalStoragePendingEventsDispatcher = c;
    },
    94668: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LocalStorageStore = void 0);
      var n = r(92306),
        i = r(3023).getLogger("EventProcessor"),
        o = (function () {
          function e(e) {
            var t = e.key,
              r = e.maxValues,
              n = void 0 === r ? 1e3 : r;
            (this.LS_KEY = t), (this.maxValues = n);
          }
          return (
            (e.prototype.get = function (e) {
              return this.getMap()[e] || null;
            }),
            (e.prototype.set = function (e, t) {
              var r = this.getMap();
              (r[e] = t), this.replace(r);
            }),
            (e.prototype.remove = function (e) {
              var t = this.getMap();
              delete t[e], this.replace(t);
            }),
            (e.prototype.values = function () {
              return n.objectValues(this.getMap());
            }),
            (e.prototype.clear = function () {
              this.replace({});
            }),
            (e.prototype.replace = function (e) {
              try {
                window.localStorage && localStorage.setItem(this.LS_KEY, JSON.stringify(e)), this.clean();
              } catch (e) {
                i.error(e);
              }
            }),
            (e.prototype.clean = function () {
              var e = this.getMap(),
                t = Object.keys(e),
                r = t.length - this.maxValues;
              if (!(r < 1)) {
                var n = t.map(function (t) {
                  return { key: t, value: e[t] };
                });
                n.sort(function (e, t) {
                  return e.value.timestamp - t.value.timestamp;
                });
                for (var i = 0; i < r; i++) delete e[n[i].key];
                this.replace(e);
              }
            }),
            (e.prototype.getMap = function () {
              try {
                var e = window.localStorage && localStorage.getItem(this.LS_KEY);
                if (e) return JSON.parse(e) || {};
              } catch (e) {
                i.error(e);
              }
              return {};
            }),
            e
          );
        })();
      t.LocalStorageStore = o;
    },
    43382: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
        function e() {
          (this.reqsInFlightCount = 0), (this.reqsCompleteResolvers = []);
        }
        return (
          (e.prototype.trackRequest = function (e) {
            var t = this;
            this.reqsInFlightCount++;
            var r = function () {
              t.reqsInFlightCount--,
                0 === t.reqsInFlightCount &&
                  (t.reqsCompleteResolvers.forEach(function (e) {
                    return e();
                  }),
                  (t.reqsCompleteResolvers = []));
            };
            e.then(r, r);
          }),
          (e.prototype.onRequestsComplete = function () {
            var e = this;
            return new Promise(function (t) {
              0 === e.reqsInFlightCount ? t() : e.reqsCompleteResolvers.push(t);
            });
          }),
          e
        );
      })();
      t.default = r;
    },
    33440: function (e, t) {
      "use strict";
      var r =
        (this && this.__assign) ||
        function () {
          return (
            (r =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            r.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatEvents = t.buildConversionEventV1 = t.buildImpressionEventV1 = t.makeBatchedEventV1 = void 0);
      var n = "campaign_activated",
        i = "custom",
        o = "$opt_bot_filtering";
      function a(e) {
        var t = [],
          r = e[0];
        return (
          e.forEach(function (e) {
            if ("conversion" === e.type || "impression" === e.type) {
              var r = l(e);
              "impression" === e.type ? r.snapshots.push(u(e)) : "conversion" === e.type && r.snapshots.push(s(e)), t.push(r);
            }
          }),
          {
            client_name: r.context.clientName,
            client_version: r.context.clientVersion,
            account_id: r.context.accountId,
            project_id: r.context.projectId,
            revision: r.context.revision,
            anonymize_ip: r.context.anonymizeIP,
            enrich_decisions: !0,
            visitors: t
          }
        );
      }
      function s(e) {
        var t = r({}, e.tags);
        delete t.revenue, delete t.value;
        var n = { entity_id: e.event.id, key: e.event.key, timestamp: e.timestamp, uuid: e.uuid };
        return (
          e.tags && (n.tags = e.tags), null != e.value && (n.value = e.value), null != e.revenue && (n.revenue = e.revenue), { events: [n] }
        );
      }
      function u(e) {
        var t,
          r,
          i = e.layer,
          o = e.experiment,
          a = e.variation,
          s = e.ruleKey,
          u = e.flagKey,
          l = e.ruleType,
          c = e.enabled,
          E = i ? i.id : null;
        return {
          decisions: [
            {
              campaign_id: E,
              experiment_id: null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : "",
              variation_id: null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : "",
              metadata: { flag_key: u, rule_key: s, rule_type: l, variation_key: a ? a.key : "", enabled: c }
            }
          ],
          events: [{ entity_id: E, timestamp: e.timestamp, key: n, uuid: e.uuid }]
        };
      }
      function l(e) {
        var t = { snapshots: [], visitor_id: e.user.id, attributes: [] };
        return (
          e.user.attributes.forEach(function (e) {
            t.attributes.push({ entity_id: e.entityId, key: e.key, type: "custom", value: e.value });
          }),
          "boolean" == typeof e.context.botFiltering && t.attributes.push({ entity_id: o, key: o, type: i, value: e.context.botFiltering }),
          t
        );
      }
      (t.makeBatchedEventV1 = a),
        (t.buildImpressionEventV1 = function (e) {
          var t = l(e);
          return (
            t.snapshots.push(u(e)),
            {
              client_name: e.context.clientName,
              client_version: e.context.clientVersion,
              account_id: e.context.accountId,
              project_id: e.context.projectId,
              revision: e.context.revision,
              anonymize_ip: e.context.anonymizeIP,
              enrich_decisions: !0,
              visitors: [t]
            }
          );
        }),
        (t.buildConversionEventV1 = function (e) {
          var t = l(e);
          return (
            t.snapshots.push(s(e)),
            {
              client_name: e.context.clientName,
              client_version: e.context.clientVersion,
              account_id: e.context.accountId,
              project_id: e.context.projectId,
              revision: e.context.revision,
              anonymize_ip: e.context.anonymizeIP,
              enrich_decisions: !0,
              visitors: [t]
            }
          );
        }),
        (t.formatEvents = function (e) {
          return { url: "https://logx.optimizely.com/v1/events", httpVerb: "POST", params: a(e) };
        });
    },
    91542: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function a(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })).then(a, s);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: []
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (r) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                          !(i = i.call(n, o[1])).done)
                      )
                        return i;
                      switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return a.label++, { value: o[1], done: !1 };
                        case 5:
                          a.label++, (n = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((i = a.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                            a.label = o[1];
                            break;
                          }
                          if (6 === o[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = o);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(o);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      o = t.call(e, a);
                    } catch (e) {
                      (o = [6, e]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
              };
            }
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LogTierV1EventProcessor = void 0);
      var a = r(3023),
        s = r(49651),
        u = o(r(43382)),
        l = r(61622),
        c = r(33440),
        E = a.getLogger("LogTierV1EventProcessor"),
        f = (function () {
          function e(e) {
            var t = e.dispatcher,
              r = e.closingDispatcher,
              n = e.flushInterval,
              i = void 0 === n ? s.DEFAULT_FLUSH_INTERVAL : n,
              o = e.batchSize,
              a = void 0 === o ? s.DEFAULT_BATCH_SIZE : o,
              c = e.notificationCenter;
            (this.dispatcher = t),
              (this.closingDispatcher = r),
              (this.notificationCenter = c),
              (this.requestTracker = new u.default()),
              (i = s.validateAndGetFlushInterval(i)),
              (a = s.validateAndGetBatchSize(a)),
              (this.queue = s.getQueue(a, i, l.areEventContextsEqual, this.drainQueue.bind(this, !1), this.drainQueue.bind(this, !0)));
          }
          return (
            (e.prototype.drainQueue = function (e, t) {
              var r = this,
                n = new Promise(function (n) {
                  if ((E.debug("draining queue with %s events", t.length), 0 !== t.length)) {
                    var i = c.formatEvents(t);
                    (e && r.closingDispatcher ? r.closingDispatcher : r.dispatcher).dispatchEvent(i, function () {
                      n();
                    }),
                      s.sendEventNotification(r.notificationCenter, i);
                  } else n();
                });
              return this.requestTracker.trackRequest(n), n;
            }),
            (e.prototype.process = function (e) {
              this.queue.enqueue(e);
            }),
            (e.prototype.stop = function () {
              try {
                return this.queue.stop(), this.requestTracker.onRequestsComplete();
              } catch (e) {
                E.error('Error stopping EventProcessor: "%s"', e.message, e);
              }
              return Promise.resolve();
            }),
            (e.prototype.start = function () {
              return n(this, void 0, void 0, function () {
                return i(this, function (e) {
                  return this.queue.start(), [2];
                });
              });
            }),
            e
          );
        })();
      t.LogTierV1EventProcessor = f;
    },
    89399: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
        function e() {}
        return (e.prototype.handleError = function (e) {}), e;
      })();
      t.NoopErrorHandler = r;
      var n = new r();
      (t.setErrorHandler = function (e) {
        n = e;
      }),
        (t.getErrorHandler = function () {
          return n;
        }),
        (t.resetErrorHandler = function () {
          n = new r();
        });
    },
    3023: (e, t, r) => {
      "use strict";
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), n(r(89399)), n(r(18536)), n(r(98400));
    },
    98400: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__spreadArrays) ||
        function () {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
          var n = Array(e),
            i = 0;
          for (t = 0; t < r; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
          return n;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(89399),
        o = r(92306),
        a = r(18536),
        s = { NOTSET: 0, DEBUG: 1, INFO: 2, WARNING: 3, ERROR: 4 };
      function u(e) {
        return "string" != typeof e ? e : ("WARN" === (e = e.toUpperCase()) && (e = "WARNING"), s[e] ? s[e] : e);
      }
      var l = (function () {
          function e() {
            (this.defaultLoggerFacade = new d()), (this.loggers = {});
          }
          return (
            (e.prototype.getLogger = function (e) {
              return e ? (this.loggers[e] || (this.loggers[e] = new d({ messagePrefix: e })), this.loggers[e]) : this.defaultLoggerFacade;
            }),
            e
          );
        })(),
        c = (function () {
          function e(e) {
            void 0 === e && (e = {}),
              (this.logLevel = a.LogLevel.NOTSET),
              void 0 !== e.logLevel && o.isValidEnum(a.LogLevel, e.logLevel) && this.setLogLevel(e.logLevel),
              (this.logToConsole = void 0 === e.logToConsole || !!e.logToConsole),
              (this.prefix = void 0 !== e.prefix ? e.prefix : "[OPTIMIZELY]");
          }
          return (
            (e.prototype.log = function (e, t) {
              if (this.shouldLog(e) && this.logToConsole) {
                var r = this.prefix + " - " + this.getLogLevelName(e) + " " + this.getTime() + " " + t;
                this.consoleLog(e, [r]);
              }
            }),
            (e.prototype.setLogLevel = function (e) {
              (e = u(e)), o.isValidEnum(a.LogLevel, e) && void 0 !== e ? (this.logLevel = e) : (this.logLevel = a.LogLevel.ERROR);
            }),
            (e.prototype.getTime = function () {
              return new Date().toISOString();
            }),
            (e.prototype.shouldLog = function (e) {
              return e >= this.logLevel;
            }),
            (e.prototype.getLogLevelName = function (e) {
              switch (e) {
                case a.LogLevel.DEBUG:
                  return "DEBUG";
                case a.LogLevel.INFO:
                  return "INFO ";
                case a.LogLevel.WARNING:
                  return "WARN ";
                case a.LogLevel.ERROR:
                  return "ERROR";
                default:
                  return "NOTSET";
              }
            }),
            (e.prototype.consoleLog = function (e, t) {
              switch (e) {
                case a.LogLevel.DEBUG:
                case a.LogLevel.INFO:
                case a.LogLevel.WARNING:
                case a.LogLevel.ERROR:
              }
            }),
            e
          );
        })();
      t.ConsoleLogHandler = c;
      var E = a.LogLevel.NOTSET,
        f = null,
        d = (function () {
          function e(e) {
            void 0 === e && (e = {}), (this.messagePrefix = ""), e.messagePrefix && (this.messagePrefix = e.messagePrefix);
          }
          return (
            (e.prototype.log = function (e, t) {
              for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
              this.internalLog(u(e), { message: t, splat: r });
            }),
            (e.prototype.info = function (e) {
              for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
              this.namedLog(a.LogLevel.INFO, e, t);
            }),
            (e.prototype.debug = function (e) {
              for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
              this.namedLog(a.LogLevel.DEBUG, e, t);
            }),
            (e.prototype.warn = function (e) {
              for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
              this.namedLog(a.LogLevel.WARNING, e, t);
            }),
            (e.prototype.error = function (e) {
              for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
              this.namedLog(a.LogLevel.ERROR, e, t);
            }),
            (e.prototype.format = function (e) {
              return (this.messagePrefix ? this.messagePrefix + ": " : "") + o.sprintf.apply(void 0, n([e.message], e.splat));
            }),
            (e.prototype.internalLog = function (e, t) {
              f && (e < E || (f.log(e, this.format(t)), t.error && t.error instanceof Error && i.getErrorHandler().handleError(t.error)));
            }),
            (e.prototype.namedLog = function (e, t, r) {
              var n;
              if (t instanceof Error) return (t = (n = t).message), void this.internalLog(e, { error: n, message: t, splat: r });
              if (0 !== r.length) {
                var i = r[r.length - 1];
                i instanceof Error && ((n = i), r.splice(-1)), this.internalLog(e, { message: t, error: n, splat: r });
              } else this.internalLog(e, { message: t, splat: r });
            }),
            e
          );
        })(),
        p = new l();
      (t.getLogger = function (e) {
        return p.getLogger(e);
      }),
        (t.setLogHandler = function (e) {
          f = e;
        }),
        (t.setLogLevel = function (e) {
          (e = u(e)), (E = o.isValidEnum(a.LogLevel, e) && void 0 !== e ? e : a.LogLevel.ERROR);
        }),
        (t.getLogLevel = function () {
          return E;
        }),
        (t.resetLogger = function () {
          (p = new l()), (E = a.LogLevel.NOTSET);
        });
    },
    18536: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          (e[(e.NOTSET = 0)] = "NOTSET"),
            (e[(e.DEBUG = 1)] = "DEBUG"),
            (e[(e.INFO = 2)] = "INFO"),
            (e[(e.WARNING = 3)] = "WARNING"),
            (e[(e.ERROR = 4)] = "ERROR");
        })(t.LogLevel || (t.LogLevel = {}));
    },
    92306: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(11176);
      function i(e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      }
      (t.generateUUID = function () {
        return n.v4();
      }),
        (t.getTimestamp = function () {
          return new Date().getTime();
        }),
        (t.isValidEnum = function (e, t) {
          for (var r = !1, n = Object.keys(e), i = 0; i < n.length; i++)
            if (t === e[n[i]]) {
              r = !0;
              break;
            }
          return r;
        }),
        (t.groupBy = function (e, t) {
          var r = {};
          return (
            e.forEach(function (e) {
              var n = t(e);
              (r[n] = r[n] || []), r[n].push(e);
            }),
            i(r)
          );
        }),
        (t.objectValues = i),
        (t.objectEntries = function (e) {
          return Object.keys(e).map(function (t) {
            return [t, e[t]];
          });
        }),
        (t.find = function (e, t) {
          for (var r, n = 0, i = e; n < i.length; n++) {
            var o = i[n];
            if (t(o)) {
              r = o;
              break;
            }
          }
          return r;
        }),
        (t.keyBy = function (e, t) {
          var r = {};
          return (
            e.forEach(function (e) {
              var n = t(e);
              r[n] = e;
            }),
            r
          );
        }),
        (t.sprintf = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
          var n = 0;
          return e.replace(/%s/g, function () {
            var e = t[n++],
              r = typeof e;
            return "function" === r ? e() : "string" === r ? e : String(e);
          });
        }),
        (function (e) {
          (e.ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event"),
            (e.DECISION = "DECISION:type, userId, attributes, decisionInfo"),
            (e.LOG_EVENT = "LOG_EVENT:logEvent"),
            (e.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE"),
            (e.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event");
        })(t.NOTIFICATION_TYPES || (t.NOTIFICATION_TYPES = {}));
    },
    11176: (e, t, r) => {
      var n = r(47097),
        i = r(58525),
        o = i;
      (o.v1 = n), (o.v4 = i), (e.exports = o);
    },
    27369: (e) => {
      for (var t = [], r = 0; r < 256; ++r) t[r] = (r + 256).toString(16).substr(1);
      e.exports = function (e, r) {
        var n = r || 0,
          i = t;
        return [
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]]
        ].join("");
      };
    },
    98056: (e) => {
      var t =
        ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto));
      if (t) {
        var r = new Uint8Array(16);
        e.exports = function () {
          return t(r), r;
        };
      } else {
        var n = new Array(16);
        e.exports = function () {
          for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), (n[t] = (e >>> ((3 & t) << 3)) & 255);
          return n;
        };
      }
    },
    47097: (e, t, r) => {
      var n,
        i,
        o = r(98056),
        a = r(27369),
        s = 0,
        u = 0;
      e.exports = function (e, t, r) {
        var l = (t && r) || 0,
          c = t || [],
          E = (e = e || {}).node || n,
          f = void 0 !== e.clockseq ? e.clockseq : i;
        if (null == E || null == f) {
          var d = o();
          null == E && (E = n = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == f && (f = i = 16383 & ((d[6] << 8) | d[7]));
        }
        var p = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
          g = void 0 !== e.nsecs ? e.nsecs : u + 1,
          I = p - s + (g - u) / 1e4;
        if ((I < 0 && void 0 === e.clockseq && (f = (f + 1) & 16383), (I < 0 || p > s) && void 0 === e.nsecs && (g = 0), g >= 1e4))
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (s = p), (u = g), (i = f);
        var _ = (1e4 * (268435455 & (p += 122192928e5)) + g) % 4294967296;
        (c[l++] = (_ >>> 24) & 255), (c[l++] = (_ >>> 16) & 255), (c[l++] = (_ >>> 8) & 255), (c[l++] = 255 & _);
        var h = ((p / 4294967296) * 1e4) & 268435455;
        (c[l++] = (h >>> 8) & 255),
          (c[l++] = 255 & h),
          (c[l++] = ((h >>> 24) & 15) | 16),
          (c[l++] = (h >>> 16) & 255),
          (c[l++] = (f >>> 8) | 128),
          (c[l++] = 255 & f);
        for (var v = 0; v < 6; ++v) c[l + v] = E[v];
        return t || a(c);
      };
    },
    58525: (e, t, r) => {
      var n = r(98056),
        i = r(27369);
      e.exports = function (e, t, r) {
        var o = (t && r) || 0;
        "string" == typeof e && ((t = "binary" === e ? new Array(16) : null), (e = null));
        var a = (e = e || {}).random || (e.rng || n)();
        if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) for (var s = 0; s < 16; ++s) t[o + s] = a[s];
        return t || i(a);
      };
    },
    75302: (e, t, r) => {
      "use strict";
      function n(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e;
      }
      var i = r(3023),
        o = r(73931),
        a = n(r(84952)),
        s = n(r(68491)),
        u = r(81816),
        l = function () {
          return (l =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      function c() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
        return n;
      }
      var E = Math.pow(2, 53);
      function f(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        if (!e) return {};
        if ("function" == typeof Object.assign) return Object.assign.apply(Object, c([e], t));
        for (var n = Object(e), i = 0; i < t.length; i++) {
          var o = t[i];
          if (null != o) for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
        }
        return n;
      }
      function d(e, t) {
        return e
          ? _(e, function (e) {
              return e[t];
            })
          : {};
      }
      function p(e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      }
      function g(e) {
        return Object.keys(e).map(function (t) {
          return [t, e[t]];
        });
      }
      function I(e, t) {
        for (var r, n = 0, i = e; n < i.length; n++) {
          var o = i[n];
          if (t(o)) {
            r = o;
            break;
          }
        }
        return r;
      }
      function _(e, t) {
        var r = {};
        return (
          e.forEach(function (e) {
            var n = t(e);
            r[n] = e;
          }),
          r
        );
      }
      function h(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        var n = 0;
        return e.replace(/%s/g, function () {
          var e = t[n++],
            r = typeof e;
          return "function" === r ? e() : "string" === r ? e : String(e);
        });
      }
      var v,
        R = {
          assign: f,
          currentTimestamp: function () {
            return Math.round(new Date().getTime());
          },
          isSafeInteger: function (e) {
            return "number" == typeof e && Math.abs(e) <= E;
          },
          keyBy: d,
          uuid: function () {
            return a();
          },
          isNumber: function (e) {
            return "number" == typeof e;
          },
          getTimestamp: function () {
            return new Date().getTime();
          },
          isValidEnum: function (e, t) {
            for (var r = !1, n = Object.keys(e), i = 0; i < n.length; i++)
              if (t === e[n[i]]) {
                r = !0;
                break;
              }
            return r;
          },
          groupBy: function (e, t) {
            var r = {};
            return (
              e.forEach(function (e) {
                var n = t(e);
                (r[n] = r[n] || []), r[n].push(e);
              }),
              p(r)
            );
          },
          objectValues: p,
          objectEntries: g,
          find: I,
          keyByUtil: _,
          sprintf: h
        },
        O = { NOTSET: 0, DEBUG: 1, INFO: 2, WARNING: 3, ERROR: 4 },
        N = {
          CONDITION_EVALUATOR_ERROR: "%s: Error evaluating audience condition of type %s: %s",
          DATAFILE_AND_SDK_KEY_MISSING: "%s: You must provide at least one of sdkKey or datafile. Cannot start Optimizely",
          EXPERIMENT_KEY_NOT_IN_DATAFILE: "%s: Experiment key %s is not in datafile.",
          FEATURE_NOT_IN_DATAFILE: "%s: Feature key %s is not in datafile.",
          IMPROPERLY_FORMATTED_EXPERIMENT: "%s: Experiment key %s is improperly formatted.",
          INVALID_ATTRIBUTES: "%s: Provided attributes are in an invalid format.",
          INVALID_BUCKETING_ID: "%s: Unable to generate hash for bucketing ID %s: %s",
          INVALID_DATAFILE: "%s: Datafile is invalid - property %s: %s",
          INVALID_DATAFILE_MALFORMED: "%s: Datafile is invalid because it is malformed.",
          INVALID_CONFIG: "%s: Provided Optimizely config is in an invalid format.",
          INVALID_JSON: "%s: JSON object is not valid.",
          INVALID_ERROR_HANDLER: '%s: Provided "errorHandler" is in an invalid format.',
          INVALID_EVENT_DISPATCHER: '%s: Provided "eventDispatcher" is in an invalid format.',
          INVALID_EVENT_TAGS: "%s: Provided event tags are in an invalid format.",
          INVALID_EXPERIMENT_KEY: "%s: Experiment key %s is not in datafile. It is either invalid, paused, or archived.",
          INVALID_EXPERIMENT_ID: "%s: Experiment ID %s is not in datafile.",
          INVALID_GROUP_ID: "%s: Group ID %s is not in datafile.",
          INVALID_LOGGER: '%s: Provided "logger" is in an invalid format.',
          INVALID_ROLLOUT_ID: "%s: Invalid rollout ID %s attached to feature %s",
          INVALID_USER_ID: "%s: Provided user ID is in an invalid format.",
          INVALID_USER_PROFILE_SERVICE: "%s: Provided user profile service instance is in an invalid format: %s.",
          NO_DATAFILE_SPECIFIED: "%s: No datafile specified. Cannot start optimizely.",
          NO_JSON_PROVIDED: "%s: No JSON object to validate against schema.",
          NO_VARIATION_FOR_EXPERIMENT_KEY: "%s: No variation key %s defined in datafile for experiment %s.",
          UNDEFINED_ATTRIBUTE: "%s: Provided attribute: %s has an undefined value.",
          UNRECOGNIZED_ATTRIBUTE: "%s: Unrecognized attribute %s provided. Pruning before sending event to Optimizely.",
          UNABLE_TO_CAST_VALUE: "%s: Unable to cast value %s to type %s, returning null.",
          USER_NOT_IN_FORCED_VARIATION: "%s: User %s is not in the forced variation map. Cannot remove their forced variation.",
          USER_PROFILE_LOOKUP_ERROR: '%s: Error while looking up user profile for user ID "%s": %s.',
          USER_PROFILE_SAVE_ERROR: '%s: Error while saving user profile for user ID "%s": %s.',
          VARIABLE_KEY_NOT_IN_DATAFILE: '%s: Variable with key "%s" associated with feature with key "%s" is not in datafile.',
          VARIATION_ID_NOT_IN_DATAFILE: "%s: No variation ID %s defined in datafile for experiment %s.",
          VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT: "%s: Variation ID %s is not in the datafile.",
          INVALID_INPUT_FORMAT: "%s: Provided %s is in an invalid format.",
          INVALID_DATAFILE_VERSION: "%s: This version of the JavaScript SDK does not support the given datafile version: %s",
          INVALID_VARIATION_KEY: "%s: Provided variation key is in an invalid format."
        },
        T = {
          ACTIVATE_USER: "%s: Activating user %s in experiment %s.",
          DISPATCH_CONVERSION_EVENT: "%s: Dispatching conversion event to URL %s with params %s.",
          DISPATCH_IMPRESSION_EVENT: "%s: Dispatching impression event to URL %s with params %s.",
          DEPRECATED_EVENT_VALUE: "%s: Event value is deprecated in %s call.",
          EVENT_KEY_NOT_FOUND: "%s: Event key %s is not in datafile.",
          EXPERIMENT_NOT_RUNNING: "%s: Experiment %s is not running.",
          FEATURE_ENABLED_FOR_USER: "%s: Feature %s is enabled for user %s.",
          FEATURE_NOT_ENABLED_FOR_USER: "%s: Feature %s is not enabled for user %s.",
          FEATURE_HAS_NO_EXPERIMENTS: "%s: Feature %s is not attached to any experiments.",
          FAILED_TO_PARSE_VALUE: '%s: Failed to parse event value "%s" from event tags.',
          FAILED_TO_PARSE_REVENUE: '%s: Failed to parse revenue value "%s" from event tags.',
          FORCED_BUCKETING_FAILED: "%s: Variation key %s is not in datafile. Not activating user %s.",
          INVALID_OBJECT: "%s: Optimizely object is not valid. Failing %s.",
          INVALID_CLIENT_ENGINE: "%s: Invalid client engine passed: %s. Defaulting to node-sdk.",
          INVALID_DEFAULT_DECIDE_OPTIONS: "%s: Provided default decide options is not an array.",
          INVALID_DECIDE_OPTIONS: "%s: Provided decide options is not an array. Using default decide options.",
          INVALID_VARIATION_ID: "%s: Bucketed into an invalid variation ID. Returning null.",
          NOTIFICATION_LISTENER_EXCEPTION: "%s: Notification listener for (%s) threw exception: %s",
          NO_ROLLOUT_EXISTS: "%s: There is no rollout of feature %s.",
          NOT_ACTIVATING_USER: "%s: Not activating user %s for experiment %s.",
          NOT_TRACKING_USER: "%s: Not tracking user %s.",
          PARSED_REVENUE_VALUE: '%s: Parsed revenue value "%s" from event tags.',
          PARSED_NUMERIC_VALUE: '%s: Parsed event value "%s" from event tags.',
          RETURNING_STORED_VARIATION:
            '%s: Returning previously activated variation "%s" of experiment "%s" for user "%s" from user profile.',
          ROLLOUT_HAS_NO_EXPERIMENTS: "%s: Rollout of feature %s has no experiments",
          SAVED_VARIATION: '%s: Saved variation "%s" of experiment "%s" for user "%s".',
          SAVED_VARIATION_NOT_FOUND:
            "%s: User %s was previously bucketed into variation with ID %s for experiment %s, but no matching variation was found.",
          SHOULD_NOT_DISPATCH_ACTIVATE: '%s: Experiment %s is not in "Running" state. Not activating user.',
          SKIPPING_JSON_VALIDATION: "%s: Skipping JSON schema validation.",
          TRACK_EVENT: "%s: Tracking event %s for user %s.",
          UNRECOGNIZED_DECIDE_OPTION: "%s: Unrecognized decide option %s provided.",
          USER_ASSIGNED_TO_EXPERIMENT_BUCKET: "%s: Assigned bucket %s to user with bucketing ID %s.",
          USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is in experiment %s of group %s.",
          USER_BUCKETED_INTO_TARGETING_RULE: "%s: User %s bucketed into targeting rule %s.",
          USER_IN_FEATURE_EXPERIMENT: "%s: User %s is in variation %s of experiment %s on the feature %s.",
          USER_IN_ROLLOUT: "%s: User %s is in rollout of feature %s.",
          USER_NOT_BUCKETED_INTO_EVERYONE_TARGETING_RULE:
            "%s: User %s not bucketed into everyone targeting rule due to traffic allocation.",
          USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is not in experiment %s of group %s.",
          USER_NOT_BUCKETED_INTO_ANY_EXPERIMENT_IN_GROUP: "%s: User %s is not in any experiment of group %s.",
          USER_NOT_BUCKETED_INTO_TARGETING_RULE:
            "%s User %s not bucketed into targeting rule %s due to traffic allocation. Trying everyone rule.",
          USER_NOT_IN_FEATURE_EXPERIMENT: "%s: User %s is not in any experiment on the feature %s.",
          USER_NOT_IN_ROLLOUT: "%s: User %s is not in rollout of feature %s.",
          USER_FORCED_IN_VARIATION: "%s: User %s is forced in variation %s.",
          USER_MAPPED_TO_FORCED_VARIATION: "%s: Set variation %s for experiment %s and user %s in the forced variation map.",
          USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s does not meet conditions for targeting rule %s.",
          USER_MEETS_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s meets conditions for targeting rule %s.",
          USER_HAS_VARIATION: "%s: User %s is in variation %s of experiment %s.",
          USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED:
            "Variation (%s) is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
          USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED:
            "Variation (%s) is mapped to flag (%s) and user (%s) in the forced decision map.",
          USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID:
            "Invalid variation is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
          USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID:
            "Invalid variation is mapped to flag (%s) and user (%s) in the forced decision map.",
          USER_HAS_FORCED_VARIATION: "%s: Variation %s is mapped to experiment %s and user %s in the forced variation map.",
          USER_HAS_NO_VARIATION: "%s: User %s is in no variation of experiment %s.",
          USER_HAS_NO_FORCED_VARIATION: "%s: User %s is not in the forced variation map.",
          USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT: "%s: No experiment %s mapped to user %s in the forced variation map.",
          USER_NOT_IN_ANY_EXPERIMENT: "%s: User %s is not in any experiment of group %s.",
          USER_NOT_IN_EXPERIMENT: "%s: User %s does not meet conditions to be in experiment %s.",
          USER_RECEIVED_DEFAULT_VARIABLE_VALUE:
            '%s: User "%s" is not in any variation or rollout rule. Returning default value for variable "%s" of feature flag "%s".',
          FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE:
            '%s: Feature "%s" is not enabled for user %s. Returning the default variable value "%s".',
          VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Variable "%s" is not used in variation "%s". Returning default value.',
          USER_RECEIVED_VARIABLE_VALUE: '%s: Got variable value "%s" for variable "%s" of feature flag "%s"',
          VALID_DATAFILE: "%s: Datafile is valid.",
          VALID_USER_PROFILE_SERVICE: "%s: Valid user profile service provided.",
          VARIATION_REMOVED_FOR_USER: "%s: Variation mapped to experiment %s has been removed for user %s.",
          VARIABLE_REQUESTED_WITH_WRONG_TYPE:
            '%s: Requested variable type "%s", but variable is of type "%s". Use correct API to retrieve value. Returning None.',
          VALID_BUCKETING_ID: '%s: BucketingId is valid: "%s"',
          BUCKETING_ID_NOT_STRING: "%s: BucketingID attribute is not a string. Defaulted to userId",
          EVALUATING_AUDIENCE: '%s: Starting to evaluate audience "%s" with conditions: %s.',
          EVALUATING_AUDIENCES_COMBINED: '%s: Evaluating audiences for %s "%s": %s.',
          AUDIENCE_EVALUATION_RESULT: '%s: Audience "%s" evaluated to %s.',
          AUDIENCE_EVALUATION_RESULT_COMBINED: "%s: Audiences for %s %s collectively evaluated to %s.",
          MISSING_ATTRIBUTE_VALUE: '%s: Audience condition %s evaluated to UNKNOWN because no value was passed for user attribute "%s".',
          UNEXPECTED_CONDITION_VALUE: "%s: Audience condition %s evaluated to UNKNOWN because the condition value is not supported.",
          UNEXPECTED_TYPE:
            '%s: Audience condition %s evaluated to UNKNOWN because a value of type "%s" was passed for user attribute "%s".',
          UNEXPECTED_TYPE_NULL: '%s: Audience condition %s evaluated to UNKNOWN because a null value was passed for user attribute "%s".',
          UNKNOWN_CONDITION_TYPE:
            "%s: Audience condition %s has an unknown condition type. You may need to upgrade to a newer release of the Optimizely SDK.",
          UNKNOWN_MATCH_TYPE:
            "%s: Audience condition %s uses an unknown match type. You may need to upgrade to a newer release of the Optimizely SDK.",
          UPDATED_OPTIMIZELY_CONFIG: "%s: Updated Optimizely config to revision %s (project id %s)",
          OUT_OF_BOUNDS:
            '%s: Audience condition %s evaluated to UNKNOWN because the number value for user attribute "%s" is not in the range [-2^53, +2^53].',
          UNABLE_TO_ATTACH_UNLOAD: '%s: unable to bind optimizely.close() to page unload event: "%s"'
        },
        y = {
          BOT_FILTERING: "$opt_bot_filtering",
          BUCKETING_ID: "$opt_bucketing_id",
          STICKY_BUCKETING_KEY: "$opt_experiment_bucket_map",
          USER_AGENT: "$opt_user_agent",
          FORCED_DECISION_NULL_RULE_KEY: "$opt_null_rule_key"
        },
        A = {
          AB_TEST: "ab-test",
          FEATURE: "feature",
          FEATURE_TEST: "feature-test",
          FEATURE_VARIABLE: "feature-variable",
          ALL_FEATURE_VARIABLES: "all-feature-variables",
          FLAG: "flag"
        },
        m = { FEATURE_TEST: "feature-test", ROLLOUT: "rollout", EXPERIMENT: "experiment" },
        L = { RULE: "rule", EXPERIMENT: "experiment" },
        U = { BOOLEAN: "boolean", DOUBLE: "double", INTEGER: "integer", STRING: "string", JSON: "json" },
        D = { V2: "2", V3: "3", V4: "4" },
        S = {
          SDK_NOT_READY: "Optimizely SDK not configured properly yet.",
          FLAG_KEY_INVALID: 'No flag was found for key "%s".',
          VARIABLE_VALUE_INVALID: 'Variable value for key "%s" is invalid or wrong type.'
        };
      !(function (e) {
        (e.ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event"),
          (e.DECISION = "DECISION:type, userId, attributes, decisionInfo"),
          (e.LOG_EVENT = "LOG_EVENT:logEvent"),
          (e.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE"),
          (e.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event");
      })(v || (v = {}));
      var C = Object.freeze({
          __proto__: null,
          LOG_LEVEL: O,
          ERROR_MESSAGES: N,
          LOG_MESSAGES: T,
          CONTROL_ATTRIBUTES: y,
          JAVASCRIPT_CLIENT_ENGINE: "javascript-sdk",
          NODE_CLIENT_ENGINE: "node-sdk",
          REACT_CLIENT_ENGINE: "react-sdk",
          REACT_NATIVE_CLIENT_ENGINE: "react-native-sdk",
          REACT_NATIVE_JS_CLIENT_ENGINE: "react-native-js-sdk",
          BROWSER_CLIENT_VERSION: "4.10.0",
          NODE_CLIENT_VERSION: "4.10.0",
          DECISION_NOTIFICATION_TYPES: A,
          DECISION_SOURCES: m,
          AUDIENCE_EVALUATION_TYPES: L,
          FEATURE_VARIABLE_TYPES: U,
          DATAFILE_VERSIONS: D,
          DECISION_MESSAGES: S,
          get NOTIFICATION_TYPES() {
            return v;
          }
        }),
        V = "CONFIG_VALIDATOR",
        b = [D.V2, D.V3, D.V4],
        P = { handleError: function () {} },
        F = {
          dispatchEvent: function (e, t) {
            var r,
              n = e.params,
              i = e.url;
            "POST" === e.httpVerb
              ? ((r = new XMLHttpRequest()).open("POST", i, !0),
                r.setRequestHeader("Content-Type", "application/json"),
                (r.onreadystatechange = function () {
                  if (4 === r.readyState && t && "function" == typeof t)
                    try {
                      t({ statusCode: r.status });
                    } catch (e) {}
                }),
                r.send(JSON.stringify(n)))
              : ((i += "?wxhr=true"),
                n &&
                  (i +=
                    "&" +
                    (function (e) {
                      return Object.keys(e)
                        .map(function (t) {
                          return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
                        })
                        .join("&");
                    })(n)),
                (r = new XMLHttpRequest()).open("GET", i, !0),
                (r.onreadystatechange = function () {
                  if (4 === r.readyState && t && "function" == typeof t)
                    try {
                      t({ statusCode: r.status });
                    } catch (e) {}
                }),
                r.send());
          }
        },
        M = {
          dispatchEvent: function (e, t) {
            var r = e.params,
              n = e.url,
              i = new Blob([JSON.stringify(r)], { type: "application/json" });
            t({ statusCode: navigator.sendBeacon(n, i) ? 200 : 500 });
          }
        },
        k = (function () {
          function e() {}
          return (e.prototype.log = function () {}), e;
        })();
      function x(e) {
        return new i.ConsoleLogHandler(e);
      }
      var B,
        w,
        K = Object.freeze({
          __proto__: null,
          NoOpLogger: k,
          createLogger: x,
          createNoOpLogger: function () {
            return new k();
          }
        });
      function G(e, t, r) {
        return { variationKey: null, enabled: !1, variables: {}, ruleKey: null, flagKey: e, userContext: t, reasons: r };
      }
      !(function (e) {
        (e.BOOLEAN = "boolean"), (e.DOUBLE = "double"), (e.INTEGER = "integer"), (e.STRING = "string"), (e.JSON = "json");
      })(B || (B = {})),
        ((w = t.N1 || (t.N1 = {})).DISABLE_DECISION_EVENT = "DISABLE_DECISION_EVENT"),
        (w.ENABLED_FLAGS_ONLY = "ENABLED_FLAGS_ONLY"),
        (w.IGNORE_USER_PROFILE_SERVICE = "IGNORE_USER_PROFILE_SERVICE"),
        (w.INCLUDE_REASONS = "INCLUDE_REASONS"),
        (w.EXCLUDE_VARIABLES = "EXCLUDE_VARIABLES");
      var j = (function () {
          function e(e) {
            var t,
              r = e.optimizely,
              n = e.userId,
              i = e.attributes;
            (this.optimizely = r),
              (this.userId = n),
              (this.attributes = null !== (t = l({}, i)) && void 0 !== t ? t : {}),
              (this.forcedDecisionsMap = {});
          }
          return (
            (e.prototype.setAttribute = function (e, t) {
              this.attributes[e] = t;
            }),
            (e.prototype.getUserId = function () {
              return this.userId;
            }),
            (e.prototype.getAttributes = function () {
              return l({}, this.attributes);
            }),
            (e.prototype.getOptimizely = function () {
              return this.optimizely;
            }),
            (e.prototype.decide = function (e, t) {
              return void 0 === t && (t = []), this.optimizely.decide(this.cloneUserContext(), e, t);
            }),
            (e.prototype.decideForKeys = function (e, t) {
              return void 0 === t && (t = []), this.optimizely.decideForKeys(this.cloneUserContext(), e, t);
            }),
            (e.prototype.decideAll = function (e) {
              return void 0 === e && (e = []), this.optimizely.decideAll(this.cloneUserContext(), e);
            }),
            (e.prototype.trackEvent = function (e, t) {
              this.optimizely.track(e, this.userId, this.attributes, t);
            }),
            (e.prototype.setForcedDecision = function (e, t) {
              var r,
                n = e.flagKey,
                i = null !== (r = e.ruleKey) && void 0 !== r ? r : y.FORCED_DECISION_NULL_RULE_KEY,
                o = { variationKey: t.variationKey };
              return this.forcedDecisionsMap[n] || (this.forcedDecisionsMap[n] = {}), (this.forcedDecisionsMap[n][i] = o), !0;
            }),
            (e.prototype.getForcedDecision = function (e) {
              return this.findForcedDecision(e);
            }),
            (e.prototype.removeForcedDecision = function (e) {
              var t,
                r = null !== (t = e.ruleKey) && void 0 !== t ? t : y.FORCED_DECISION_NULL_RULE_KEY,
                n = e.flagKey,
                i = !1;
              return (
                this.forcedDecisionsMap.hasOwnProperty(n) &&
                  (this.forcedDecisionsMap[n].hasOwnProperty(r) && (delete this.forcedDecisionsMap[n][r], (i = !0)),
                  0 === Object.keys(this.forcedDecisionsMap[n]).length && delete this.forcedDecisionsMap[n]),
                i
              );
            }),
            (e.prototype.removeAllForcedDecisions = function () {
              return (this.forcedDecisionsMap = {}), !0;
            }),
            (e.prototype.findForcedDecision = function (e) {
              var t,
                r = null !== (t = e.ruleKey) && void 0 !== t ? t : y.FORCED_DECISION_NULL_RULE_KEY,
                n = e.flagKey;
              if (this.forcedDecisionsMap.hasOwnProperty(e.flagKey)) {
                var i = this.forcedDecisionsMap[n];
                if (i.hasOwnProperty(r)) return { variationKey: i[r].variationKey };
              }
              return null;
            }),
            (e.prototype.cloneUserContext = function () {
              var t = new e({ optimizely: this.getOptimizely(), userId: this.getUserId(), attributes: this.getAttributes() });
              return Object.keys(this.forcedDecisionsMap).length > 0 && (t.forcedDecisionsMap = l({}, this.forcedDecisionsMap)), t;
            }),
            e
          );
        })(),
        H = ["and", "or", "not"];
      function Y(e, t) {
        if (Array.isArray(e)) {
          var r = e[0],
            n = e.slice(1);
          switch (("string" == typeof r && -1 === H.indexOf(r) && ((r = "or"), (n = e)), r)) {
            case "and":
              return (function (e, t) {
                var r = !1;
                if (Array.isArray(e)) {
                  for (var n = 0; n < e.length; n++) {
                    var i = Y(e[n], t);
                    if (!1 === i) return !1;
                    null === i && (r = !0);
                  }
                  return !r || null;
                }
                return null;
              })(n, t);
            case "not":
              return (function (e, t) {
                if (Array.isArray(e) && e.length > 0) {
                  var r = Y(e[0], t);
                  return null === r ? null : !r;
                }
                return null;
              })(n, t);
            default:
              return (function (e, t) {
                var r = !1;
                if (Array.isArray(e)) {
                  for (var n = 0; n < e.length; n++) {
                    var i = Y(e[n], t);
                    if (!0 === i) return !0;
                    null === i && (r = !0);
                  }
                  return !!r && null;
                }
                return null;
              })(n, t);
          }
        }
        return t(e);
      }
      var X = (function () {
          function e(t, r) {
            var n, i;
            (this.sdkKey = null !== (n = t.sdkKey) && void 0 !== n ? n : ""),
              (this.environmentKey = null !== (i = t.environmentKey) && void 0 !== i ? i : ""),
              (this.attributes = t.attributes),
              (this.audiences = e.getAudiences(t)),
              (this.events = t.events),
              (this.revision = t.revision);
            var o = (t.featureFlags || []).reduce(function (e, t) {
                return (e[t.id] = t.variables), e;
              }, {}),
              a = e.getVariableIdMap(t),
              s = e.getExperimentsMapById(t, o, a);
            (this.experimentsMap = e.getExperimentsKeyMap(s)), (this.featuresMap = e.getFeaturesMap(t, o, s, a)), (this.datafile = r);
          }
          return (
            (e.prototype.getDatafile = function () {
              return this.datafile;
            }),
            (e.getAudiences = function (e) {
              var t = [],
                r = [];
              return (
                (e.typedAudiences || []).forEach(function (e) {
                  t.push({ id: e.id, conditions: JSON.stringify(e.conditions), name: e.name }), r.push(e.id);
                }),
                (e.audiences || []).forEach(function (e) {
                  -1 === r.indexOf(e.id) &&
                    "$opt_dummy_audience" != e.id &&
                    t.push({ id: e.id, conditions: JSON.stringify(e.conditions), name: e.name });
                }),
                t
              );
            }),
            (e.getSerializedAudiences = function (t, r) {
              var n = "";
              if (t) {
                var i = "";
                t.forEach(function (t) {
                  var o = "";
                  if (t instanceof Array) o = "(" + (o = e.getSerializedAudiences(t, r)) + ")";
                  else if (H.indexOf(t) > -1) i = t.toUpperCase();
                  else {
                    var a = r[t] ? r[t].name : t;
                    n || "NOT" === i
                      ? ((i = "" === i ? "OR" : i), (n = "" === n ? i + ' "' + r[t].name + '"' : n.concat(" " + i + ' "' + a + '"')))
                      : (n = '"' + a + '"');
                  }
                  "" !== o &&
                    ("" !== n || "NOT" === i
                      ? ((i = "" === i ? "OR" : i), (n = "" === n ? i + " " + o : n.concat(" " + i + " " + o)))
                      : (n = n.concat(o)));
                });
              }
              return n;
            }),
            (e.getExperimentAudiences = function (t, r) {
              return t.audienceConditions ? e.getSerializedAudiences(t.audienceConditions, r.audiencesById) : "";
            }),
            (e.mergeFeatureVariables = function (e, t, r, n, i) {
              var o = (e[r] || []).reduce(function (e, t) {
                return (e[t.key] = { id: t.id, key: t.key, type: t.type, value: t.defaultValue }), e;
              }, {});
              return (
                (n || []).forEach(function (e) {
                  var r = t[e.id],
                    n = { id: e.id, key: r.key, type: r.type, value: i ? e.value : r.defaultValue };
                  o[r.key] = n;
                }),
                o
              );
            }),
            (e.getVariationsMap = function (t, r, n, i) {
              return t.reduce(function (t, o) {
                var a = e.mergeFeatureVariables(r, n, i, o.variables, o.featureEnabled);
                return (t[o.key] = { id: o.id, key: o.key, featureEnabled: o.featureEnabled, variablesMap: a }), t;
              }, {});
            }),
            (e.getVariableIdMap = function (e) {
              return (e.featureFlags || []).reduce(function (e, t) {
                return (
                  t.variables.forEach(function (t) {
                    e[t.id] = t;
                  }),
                  e
                );
              }, {});
            }),
            (e.getDeliveryRules = function (t, r, n, i, o) {
              return i.map(function (i) {
                return {
                  id: i.id,
                  key: i.key,
                  audiences: e.getExperimentAudiences(i, t),
                  variationsMap: e.getVariationsMap(i.variations, r, o, n)
                };
              });
            }),
            (e.getRolloutExperimentIds = function (e) {
              var t = [];
              return (
                (e || []).forEach(function (e) {
                  e.experiments.forEach(function (e) {
                    t.push(e.id);
                  });
                }),
                t
              );
            }),
            (e.getExperimentsMapById = function (t, r, n) {
              var i = this.getRolloutExperimentIds(t.rollouts);
              return (t.experiments || []).reduce(function (o, a) {
                if (-1 === i.indexOf(a.id)) {
                  var s = t.experimentFeatureMap[a.id],
                    u = "";
                  s && s.length > 0 && (u = s[0]);
                  var l = e.getVariationsMap(a.variations, r, n, u.toString());
                  o[a.id] = { id: a.id, key: a.key, audiences: e.getExperimentAudiences(a, t), variationsMap: l };
                }
                return o;
              }, {});
            }),
            (e.getExperimentsKeyMap = function (e) {
              var t = {};
              for (var r in e) {
                var n = e[r];
                t[n.key] = n;
              }
              return t;
            }),
            (e.getFeaturesMap = function (t, r, n, i) {
              var o = {};
              return (
                t.featureFlags.forEach(function (a) {
                  var s = {},
                    u = [];
                  a.experimentIds.forEach(function (e) {
                    var t = n[e];
                    t && (s[t.key] = t), u.push(n[e]);
                  });
                  var l = (a.variables || []).reduce(function (e, t) {
                      return (e[t.key] = { id: t.id, key: t.key, type: t.type, value: t.defaultValue }), e;
                    }, {}),
                    c = [],
                    E = t.rolloutIdMap[a.rolloutId];
                  E && (c = e.getDeliveryRules(t, r, a.id, E.experiments, i)),
                    (o[a.key] = { id: a.id, key: a.key, experimentRules: u, deliveryRules: c, experimentsMap: s, variablesMap: l });
                }),
                o
              );
            }),
            e
          );
        })(),
        z = "PROJECT_CONFIG",
        q = function (e, t) {
          void 0 === t && (t = null);
          var r,
            n,
            i,
            o,
            a =
              (((o = f({}, (r = e))).audiences = (r.audiences || []).map(function (e) {
                return f({}, e);
              })),
              (o.experiments = (r.experiments || []).map(function (e) {
                return f({}, e);
              })),
              (o.featureFlags = (r.featureFlags || []).map(function (e) {
                return f({}, e);
              })),
              (o.groups = (r.groups || []).map(function (e) {
                var t = f({}, e);
                return (
                  (t.experiments = (e.experiments || []).map(function (e) {
                    return f({}, e);
                  })),
                  t
                );
              })),
              (o.rollouts = (r.rollouts || []).map(function (e) {
                var t = f({}, e);
                return (
                  (t.experiments = (e.experiments || []).map(function (e) {
                    return f({}, e);
                  })),
                  t
                );
              })),
              (o.environmentKey = null !== (n = r.environmentKey) && void 0 !== n ? n : ""),
              (o.sdkKey = null !== (i = r.sdkKey) && void 0 !== i ? i : ""),
              o);
          return (
            (a.__datafileStr = null === t ? JSON.stringify(e) : t),
            (a.audiences || []).forEach(function (e) {
              e.conditions = JSON.parse(e.conditions);
            }),
            (a.audiencesById = d(a.audiences, "id")),
            f(a.audiencesById, d(a.typedAudiences, "id")),
            (a.attributeKeyMap = d(a.attributes, "key")),
            (a.eventKeyMap = d(a.events, "key")),
            (a.groupIdMap = d(a.groups, "id")),
            Object.keys(a.groupIdMap || {}).forEach(function (e) {
              (a.groupIdMap[e].experiments || []).forEach(function (t) {
                a.experiments.push(f(t, { groupId: e }));
              });
            }),
            (a.rolloutIdMap = d(a.rollouts || [], "id")),
            p(a.rolloutIdMap || {}).forEach(function (e) {
              (e.experiments || []).forEach(function (e) {
                a.experiments.push(e), (e.variationKeyMap = d(e.variations, "key"));
              });
            }),
            (a.experimentKeyMap = d(a.experiments, "key")),
            (a.experimentIdMap = d(a.experiments, "id")),
            (a.variationIdMap = {}),
            (a.variationVariableUsageMap = {}),
            (a.experiments || []).forEach(function (e) {
              (e.variationKeyMap = d(e.variations, "key")),
                f(a.variationIdMap, d(e.variations, "id")),
                p(e.variationKeyMap || {}).forEach(function (e) {
                  e.variables && (a.variationVariableUsageMap[e.id] = d(e.variables, "id"));
                });
            }),
            (a.experimentFeatureMap = {}),
            (a.featureKeyMap = d(a.featureFlags || [], "key")),
            p(a.featureKeyMap || {}).forEach(function (e) {
              e.variables.forEach(function (e) {
                e.type === U.STRING && e.subType === U.JSON && ((e.type = U.JSON), delete e.subType);
              }),
                (e.variableKeyMap = d(e.variables, "key")),
                (e.experimentIds || []).forEach(function (t) {
                  a.experimentFeatureMap[t] ? a.experimentFeatureMap[t].push(e.id) : (a.experimentFeatureMap[t] = [e.id]);
                });
            }),
            (a.flagRulesMap = {}),
            (a.featureFlags || []).forEach(function (e) {
              var t = [];
              e.experimentIds.forEach(function (e) {
                var r = a.experimentIdMap[e];
                r && t.push(r);
              });
              var r = a.rolloutIdMap[e.rolloutId];
              r && t.push.apply(t, r.experiments), (a.flagRulesMap[e.key] = t);
            }),
            (a.flagVariationsMap = {}),
            g(a.flagRulesMap || {}).forEach(function (e) {
              var t = e[0],
                r = e[1],
                n = [];
              r.forEach(function (e) {
                e.variations.forEach(function (e) {
                  I(n, function (t) {
                    return t.id === e.id;
                  }) || n.push(e);
                });
              }),
                (a.flagVariationsMap[t] = n);
            }),
            a
          );
        },
        J = function (e, t) {
          var r = e.experimentIdMap[t];
          if (!r) throw new Error(h(N.INVALID_EXPERIMENT_ID, z, t));
          return r.layerId;
        },
        W = function (e, t, r) {
          var n = e.attributeKeyMap[t],
            i = 0 === t.indexOf("$opt_");
          return n
            ? (i &&
                r.log(
                  O.WARNING,
                  "Attribute %s unexpectedly has reserved prefix %s; using attribute ID instead of reserved attribute name.",
                  t,
                  "$opt_"
                ),
              n.id)
            : i
            ? t
            : (r.log(O.DEBUG, N.UNRECOGNIZED_ATTRIBUTE, z, t), null);
        },
        Z = function (e, t) {
          var r = e.eventKeyMap[t];
          return r ? r.id : null;
        },
        Q = function (e, t) {
          var r = e.experimentKeyMap[t];
          if (!r) throw new Error(h(N.INVALID_EXPERIMENT_KEY, z, t));
          return r.status;
        },
        $ = function (e, t) {
          return e.variationIdMap.hasOwnProperty(t) ? e.variationIdMap[t].key : null;
        },
        ee = function (e, t) {
          if (e.experimentKeyMap.hasOwnProperty(t)) {
            var r = e.experimentKeyMap[t];
            if (r) return r;
          }
          throw new Error(h(N.EXPERIMENT_KEY_NOT_IN_DATAFILE, z, t));
        },
        te = function (e, t) {
          var r = e.experimentIdMap[t];
          if (!r) throw new Error(h(N.INVALID_EXPERIMENT_ID, z, t));
          return r.trafficAllocation;
        },
        re = function (e, t, r) {
          if (e.experimentIdMap.hasOwnProperty(t)) {
            var n = e.experimentIdMap[t];
            if (n) return n;
          }
          return r.log(O.ERROR, N.INVALID_EXPERIMENT_ID, z, t), null;
        },
        ne = function (e, t, r) {
          if (!e) return null;
          var n = I(e.flagVariationsMap[t], function (e) {
            return e.key === r;
          });
          return n || null;
        },
        ie = function (e, t, r) {
          if (e.featureKeyMap.hasOwnProperty(t)) {
            var n = e.featureKeyMap[t];
            if (n) return n;
          }
          return r.log(O.ERROR, N.FEATURE_NOT_IN_DATAFILE, z, t), null;
        },
        oe = function (e) {
          return e.__datafileStr;
        },
        ae = function (e) {
          var t;
          try {
            t = (function (e) {
              if (!e) throw new Error(h(N.NO_DATAFILE_SPECIFIED, V));
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {
                  throw new Error(h(N.INVALID_DATAFILE_MALFORMED, V));
                }
              if ("object" == typeof e && !Array.isArray(e) && null !== e && -1 === b.indexOf(e.version))
                throw new Error(h(N.INVALID_DATAFILE_VERSION, V, e.version));
              return e;
            })(e.datafile);
          } catch (e) {
            return { configObj: null, error: e };
          }
          if (e.jsonSchemaValidator)
            try {
              e.jsonSchemaValidator.validate(t), e.logger.log(O.INFO, T.VALID_DATAFILE, z);
            } catch (e) {
              return { configObj: null, error: e };
            }
          else e.logger.log(O.INFO, T.SKIPPING_JSON_VALIDATION, z);
          var r = [t];
          return "string" == typeof e.datafile && r.push(e.datafile), { configObj: q.apply(void 0, r), error: null };
        },
        se = function (e) {
          return !!e.sendFlagDecisions;
        },
        ue = i.getLogger();
      function le(e, t) {
        return e instanceof Error ? e.message : t || "Unknown error";
      }
      var ce = (function () {
          function e(e) {
            (this.updateListeners = []), (this.configObj = null), (this.optimizelyConfigObj = null), (this.datafileManager = null);
            try {
              if (((this.jsonSchemaValidator = e.jsonSchemaValidator), !e.datafile && !e.sdkKey)) {
                var t = new Error(h(N.DATAFILE_AND_SDK_KEY_MISSING, "PROJECT_CONFIG_MANAGER"));
                return (this.readyPromise = Promise.resolve({ success: !1, reason: le(t) })), void ue.error(t);
              }
              var r = null;
              e.datafile && (r = this.handleNewDatafile(e.datafile)),
                e.sdkKey && e.datafileManager
                  ? ((this.datafileManager = e.datafileManager),
                    this.datafileManager.start(),
                    (this.readyPromise = this.datafileManager
                      .onReady()
                      .then(this.onDatafileManagerReadyFulfill.bind(this), this.onDatafileManagerReadyReject.bind(this))),
                    this.datafileManager.on("update", this.onDatafileManagerUpdate.bind(this)))
                  : this.configObj
                  ? (this.readyPromise = Promise.resolve({ success: !0 }))
                  : (this.readyPromise = Promise.resolve({ success: !1, reason: le(r, "Invalid datafile") }));
            } catch (e) {
              ue.error(e), (this.readyPromise = Promise.resolve({ success: !1, reason: le(e, "Error in initialize") }));
            }
          }
          return (
            (e.prototype.onDatafileManagerReadyFulfill = function () {
              if (this.datafileManager) {
                var e = this.handleNewDatafile(this.datafileManager.get());
                return e ? { success: !1, reason: le(e) } : { success: !0 };
              }
              return { success: !1, reason: le(null, "Datafile manager is not provided") };
            }),
            (e.prototype.onDatafileManagerReadyReject = function (e) {
              return { success: !1, reason: le(e, "Failed to become ready") };
            }),
            (e.prototype.onDatafileManagerUpdate = function () {
              this.datafileManager && this.handleNewDatafile(this.datafileManager.get());
            }),
            (e.prototype.handleNewDatafile = function (e) {
              var t = ae({ datafile: e, jsonSchemaValidator: this.jsonSchemaValidator, logger: ue }),
                r = t.configObj,
                n = t.error;
              if (n) ue.error(n);
              else {
                var i = this.configObj ? this.configObj.revision : "null";
                r &&
                  i !== r.revision &&
                  ((this.configObj = r),
                  (this.optimizelyConfigObj = null),
                  this.updateListeners.forEach(function (e) {
                    return e(r);
                  }));
              }
              return n;
            }),
            (e.prototype.getConfig = function () {
              return this.configObj;
            }),
            (e.prototype.getOptimizelyConfig = function () {
              var e, t;
              return (
                !this.optimizelyConfigObj &&
                  this.configObj &&
                  (this.optimizelyConfigObj = ((e = this.configObj), (t = oe(this.configObj)), new X(e, t))),
                this.optimizelyConfigObj
              );
            }),
            (e.prototype.onReady = function () {
              return this.readyPromise;
            }),
            (e.prototype.onUpdate = function (e) {
              var t = this;
              return (
                this.updateListeners.push(e),
                function () {
                  var r = t.updateListeners.indexOf(e);
                  r > -1 && t.updateListeners.splice(r, 1);
                }
              );
            }),
            (e.prototype.stop = function () {
              this.datafileManager && this.datafileManager.stop(), (this.updateListeners = []);
            }),
            e
          );
        })(),
        Ee = Math.pow(2, 32),
        fe = function (e) {
          var t = [],
            r = e.experimentIdMap[e.experimentId].groupId;
          if (r) {
            var n = e.groupIdMap[r];
            if (!n) throw new Error(h(N.INVALID_GROUP_ID, "BUCKETER", r));
            if ("random" === n.policy) {
              var i = de(n, e.bucketingId, e.userId, e.logger);
              if (null === i)
                return (
                  e.logger.log(O.INFO, T.USER_NOT_IN_ANY_EXPERIMENT, "BUCKETER", e.userId, r),
                  t.push([T.USER_NOT_IN_ANY_EXPERIMENT, "BUCKETER", e.userId, r]),
                  { result: null, reasons: t }
                );
              if (i !== e.experimentId)
                return (
                  e.logger.log(O.INFO, T.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", e.userId, e.experimentKey, r),
                  t.push([T.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", e.userId, e.experimentKey, r]),
                  { result: null, reasons: t }
                );
              e.logger.log(O.INFO, T.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", e.userId, e.experimentKey, r),
                t.push([T.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", e.userId, e.experimentKey, r]);
            }
          }
          var o = "" + e.bucketingId + e.experimentId,
            a = ge(o);
          e.logger.log(O.DEBUG, T.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, "BUCKETER", a, e.userId),
            t.push([T.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, "BUCKETER", a, e.userId]);
          var s = pe(a, e.trafficAllocationConfig);
          return null === s || e.variationIdMap[s]
            ? { result: s, reasons: t }
            : (s && (e.logger.log(O.WARNING, T.INVALID_VARIATION_ID, "BUCKETER"), t.push([T.INVALID_VARIATION_ID, "BUCKETER"])),
              { result: null, reasons: t });
        },
        de = function (e, t, r, n) {
          var i = "" + t + e.id,
            o = ge(i);
          n.log(O.DEBUG, T.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, "BUCKETER", o, r);
          var a = e.trafficAllocation;
          return pe(o, a);
        },
        pe = function (e, t) {
          for (var r = 0; r < t.length; r++) if (e < t[r].endOfRange) return t[r].entityId;
          return null;
        },
        ge = function (e) {
          try {
            var t = s.v3(e, 1) / Ee;
            return Math.floor(1e4 * t);
          } catch (t) {
            throw new Error(h(N.INVALID_BUCKETING_ID, "BUCKETER", e, t.message));
          }
        },
        Ie = i.getLogger();
      function _e(e) {
        return /^\d+$/.test(e);
      }
      function he(e) {
        var t = e.indexOf("-"),
          r = e.indexOf("+");
        return !(t < 0) && (r < 0 || t < r);
      }
      function ve(e) {
        var t = e.indexOf("-"),
          r = e.indexOf("+");
        return !(r < 0) && (t < 0 || r < t);
      }
      function Re(e) {
        var t = e,
          r = "";
        if (
          (function (e) {
            return /\s/.test(e);
          })(e)
        )
          return Ie.warn(T.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", e), null;
        if (
          (he(e)
            ? ((t = e.substring(0, e.indexOf("-"))), (r = e.substring(e.indexOf("-") + 1)))
            : ve(e) && ((t = e.substring(0, e.indexOf("+"))), (r = e.substring(e.indexOf("+") + 1))),
          "string" != typeof t || "string" != typeof r)
        )
          return null;
        var n = t.split(".").length - 1;
        if (n > 2) return Ie.warn(T.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", e), null;
        var i = t.split(".");
        if (i.length != n + 1) return Ie.warn(T.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", e), null;
        for (var o = 0, a = i; o < a.length; o++) if (!_e(a[o])) return Ie.warn(T.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", e), null;
        return r && i.push(r), i;
      }
      var Oe = "CUSTOM_ATTRIBUTE_CONDITION_EVALUATOR",
        Ne = i.getLogger(),
        Te = ["exact", "exists", "gt", "ge", "lt", "le", "substring", "semver_eq", "semver_lt", "semver_le", "semver_gt", "semver_ge"],
        ye = {};
      function Ae(e) {
        return "string" == typeof e || "boolean" == typeof e || R.isNumber(e);
      }
      function me(e, t) {
        var r = e.value,
          n = typeof r,
          i = e.name,
          o = t[i],
          a = typeof o;
        return !Ae(r) || (R.isNumber(r) && !R.isSafeInteger(r))
          ? (Ne.warn(T.UNEXPECTED_CONDITION_VALUE, Oe, JSON.stringify(e)), null)
          : null === o
          ? (Ne.debug(T.UNEXPECTED_TYPE_NULL, Oe, JSON.stringify(e), i), null)
          : Ae(o) && n === a
          ? R.isNumber(o) && !R.isSafeInteger(o)
            ? (Ne.warn(T.OUT_OF_BOUNDS, Oe, JSON.stringify(e), i), null)
            : r === o
          : (Ne.warn(T.UNEXPECTED_TYPE, Oe, JSON.stringify(e), a, i), null);
      }
      function Le(e, t) {
        var r = e.name,
          n = t[r],
          i = typeof n,
          o = e.value;
        return null !== o && R.isSafeInteger(o)
          ? null === n
            ? (Ne.debug(T.UNEXPECTED_TYPE_NULL, Oe, JSON.stringify(e), r), !1)
            : R.isNumber(n)
            ? !!R.isSafeInteger(n) || (Ne.warn(T.OUT_OF_BOUNDS, Oe, JSON.stringify(e), r), !1)
            : (Ne.warn(T.UNEXPECTED_TYPE, Oe, JSON.stringify(e), i, r), !1)
          : (Ne.warn(T.UNEXPECTED_CONDITION_VALUE, Oe, JSON.stringify(e)), !1);
      }
      function Ue(e, t) {
        var r = e.name,
          n = t[r],
          i = typeof n,
          o = e.value;
        return "string" != typeof o
          ? (Ne.warn(T.UNEXPECTED_CONDITION_VALUE, Oe, JSON.stringify(e)), null)
          : null === n
          ? (Ne.debug(T.UNEXPECTED_TYPE_NULL, Oe, JSON.stringify(e), r), null)
          : "string" != typeof n
          ? (Ne.warn(T.UNEXPECTED_TYPE, Oe, JSON.stringify(e), i, r), null)
          : (function (e, t) {
              var r = Re(t),
                n = Re(e);
              if (!r || !n) return null;
              for (var i = r.length, o = 0; o < n.length; o++) {
                if (i <= o) return he(e) || ve(e) ? 1 : -1;
                if (_e(r[o])) {
                  var a = parseInt(r[o]),
                    s = parseInt(n[o]);
                  if (a > s) return 1;
                  if (a < s) return -1;
                } else {
                  if (r[o] < n[o]) return he(e) && !he(t) ? 1 : -1;
                  if (r[o] > n[o]) return !he(e) && he(t) ? -1 : 1;
                }
              }
              return he(t) && !he(e) ? -1 : 0;
            })(o, n);
      }
      (ye.exact = me),
        (ye.exists = function (e, t) {
          return null != t[e.name];
        }),
        (ye.gt = function (e, t) {
          var r = t[e.name],
            n = e.value;
          return Le(e, t) && null !== n ? r > n : null;
        }),
        (ye.ge = function (e, t) {
          var r = t[e.name],
            n = e.value;
          return Le(e, t) && null !== n ? r >= n : null;
        }),
        (ye.lt = function (e, t) {
          var r = t[e.name],
            n = e.value;
          return Le(e, t) && null !== n ? r < n : null;
        }),
        (ye.le = function (e, t) {
          var r = t[e.name],
            n = e.value;
          return Le(e, t) && null !== n ? r <= n : null;
        }),
        (ye.substring = function (e, t) {
          var r = e.name,
            n = t[e.name],
            i = typeof n,
            o = e.value;
          return "string" != typeof o
            ? (Ne.warn(T.UNEXPECTED_CONDITION_VALUE, Oe, JSON.stringify(e)), null)
            : null === n
            ? (Ne.debug(T.UNEXPECTED_TYPE_NULL, Oe, JSON.stringify(e), r), null)
            : "string" != typeof n
            ? (Ne.warn(T.UNEXPECTED_TYPE, Oe, JSON.stringify(e), i, r), null)
            : -1 !== n.indexOf(o);
        }),
        (ye.semver_eq = function (e, t) {
          var r = Ue(e, t);
          return null === r ? null : 0 === r;
        }),
        (ye.semver_gt = function (e, t) {
          var r = Ue(e, t);
          return null === r ? null : r > 0;
        }),
        (ye.semver_ge = function (e, t) {
          var r = Ue(e, t);
          return null === r ? null : r >= 0;
        }),
        (ye.semver_lt = function (e, t) {
          var r = Ue(e, t);
          return null === r ? null : r < 0;
        }),
        (ye.semver_le = function (e, t) {
          var r = Ue(e, t);
          return null === r ? null : r <= 0;
        });
      var De = Object.freeze({
          __proto__: null,
          evaluate: function (e, t) {
            var r = e.match;
            if (void 0 !== r && -1 === Te.indexOf(r)) return Ne.warn(T.UNKNOWN_MATCH_TYPE, Oe, JSON.stringify(e)), null;
            var n = e.name;
            return t.hasOwnProperty(n) || "exists" == r
              ? ((r && ye[r]) || me)(e, t)
              : (Ne.debug(T.MISSING_ATTRIBUTE_VALUE, Oe, JSON.stringify(e), n), null);
          }
        }),
        Se = i.getLogger(),
        Ce = (function () {
          function e(e) {
            this.typeToEvaluatorMap = R.assign({}, e, { custom_attribute: De });
          }
          return (
            (e.prototype.evaluate = function (e, t, r) {
              var n = this;
              return (
                void 0 === r && (r = {}),
                !e ||
                  0 === e.length ||
                  !!Y(e, function (e) {
                    var i = t[e];
                    if (i) {
                      Se.log(O.DEBUG, T.EVALUATING_AUDIENCE, "AUDIENCE_EVALUATOR", e, JSON.stringify(i.conditions));
                      var o = Y(i.conditions, n.evaluateConditionWithUserAttributes.bind(n, r)),
                        a = null === o ? "UNKNOWN" : o.toString().toUpperCase();
                      return Se.log(O.DEBUG, T.AUDIENCE_EVALUATION_RESULT, "AUDIENCE_EVALUATOR", e, a), o;
                    }
                    return null;
                  })
              );
            }),
            (e.prototype.evaluateConditionWithUserAttributes = function (e, t) {
              var r = this.typeToEvaluatorMap[t.type];
              if (!r) return Se.log(O.WARNING, T.UNKNOWN_CONDITION_TYPE, "AUDIENCE_EVALUATOR", JSON.stringify(t)), null;
              try {
                return r.evaluate(t, e);
              } catch (e) {
                Se.log(O.ERROR, N.CONDITION_EVALUATOR_ERROR, "AUDIENCE_EVALUATOR", t.type, e.message);
              }
              return null;
            }),
            e
          );
        })();
      function Ve(e) {
        return "string" == typeof e && "" !== e;
      }
      var be = "DECISION_SERVICE",
        Pe = (function () {
          function e(e) {
            var t;
            (this.audienceEvaluator = ((t = e.UNSTABLE_conditionEvaluators), new Ce(t))),
              (this.forcedVariationMap = {}),
              (this.logger = e.logger),
              (this.userProfileService = e.userProfileService || null);
          }
          return (
            (e.prototype.getVariation = function (e, r, n, i) {
              void 0 === i && (i = {});
              var o = n.getUserId(),
                a = n.getAttributes(),
                s = this.getBucketingId(o, a),
                u = [],
                l = r.key;
              if (!this.checkIfExperimentIsActive(e, l))
                return (
                  this.logger.log(O.INFO, T.EXPERIMENT_NOT_RUNNING, be, l),
                  u.push([T.EXPERIMENT_NOT_RUNNING, be, l]),
                  { result: null, reasons: u }
                );
              var c = this.getForcedVariation(e, l, o);
              u.push.apply(u, c.reasons);
              var E = c.result;
              if (E) return { result: E, reasons: u };
              var f = this.getWhitelistedVariation(r, o);
              u.push.apply(u, f.reasons);
              var d = f.result;
              if (d) return { result: d.key, reasons: u };
              var p = i[t.N1.IGNORE_USER_PROFILE_SERVICE],
                g = this.resolveExperimentBucketMap(o, a);
              if (!p && (d = this.getStoredVariation(e, r, o, g)))
                return (
                  this.logger.log(O.INFO, T.RETURNING_STORED_VARIATION, be, d.key, l, o),
                  u.push([T.RETURNING_STORED_VARIATION, be, d.key, l, o]),
                  { result: d.key, reasons: u }
                );
              var I = this.checkIfUserIsInAudience(e, r, L.EXPERIMENT, a, "");
              if ((u.push.apply(u, I.reasons), !I.result))
                return (
                  this.logger.log(O.INFO, T.USER_NOT_IN_EXPERIMENT, be, o, l),
                  u.push([T.USER_NOT_IN_EXPERIMENT, be, o, l]),
                  { result: null, reasons: u }
                );
              var _ = this.buildBucketerParams(e, r, s, o),
                h = fe(_);
              u.push.apply(u, h.reasons);
              var v = h.result;
              return (
                v && (d = e.variationIdMap[v]),
                d
                  ? (this.logger.log(O.INFO, T.USER_HAS_VARIATION, be, o, d.key, l),
                    u.push([T.USER_HAS_VARIATION, be, o, d.key, l]),
                    p || this.saveUserProfile(r, d, o, g),
                    { result: d.key, reasons: u })
                  : (this.logger.log(O.DEBUG, T.USER_HAS_NO_VARIATION, be, o, l),
                    u.push([T.USER_HAS_NO_VARIATION, be, o, l]),
                    { result: null, reasons: u })
              );
            }),
            (e.prototype.resolveExperimentBucketMap = function (e, t) {
              t = t || {};
              var r = this.getUserProfile(e) || {},
                n = t[y.STICKY_BUCKETING_KEY];
              return R.assign({}, r.experiment_bucket_map, n);
            }),
            (e.prototype.checkIfExperimentIsActive = function (e, t) {
              return (function (e, t) {
                return "Running" === Q(e, t);
              })(e, t);
            }),
            (e.prototype.getWhitelistedVariation = function (e, t) {
              var r = [];
              if (e.forcedVariations && e.forcedVariations.hasOwnProperty(t)) {
                var n = e.forcedVariations[t];
                return e.variationKeyMap.hasOwnProperty(n)
                  ? (this.logger.log(O.INFO, T.USER_FORCED_IN_VARIATION, be, t, n),
                    r.push([T.USER_FORCED_IN_VARIATION, be, t, n]),
                    { result: e.variationKeyMap[n], reasons: r })
                  : (this.logger.log(O.ERROR, T.FORCED_BUCKETING_FAILED, be, n, t),
                    r.push([T.FORCED_BUCKETING_FAILED, be, n, t]),
                    { result: null, reasons: r });
              }
              return { result: null, reasons: r };
            }),
            (e.prototype.checkIfUserIsInAudience = function (e, t, r, n, i) {
              var o = [],
                a = (function (e, t) {
                  var r = e.experimentIdMap[t];
                  if (!r) throw new Error(h(N.INVALID_EXPERIMENT_ID, z, t));
                  return r.audienceConditions || r.audienceIds;
                })(e, t.id),
                s = e.audiencesById;
              this.logger.log(O.DEBUG, T.EVALUATING_AUDIENCES_COMBINED, be, r, i || t.key, JSON.stringify(a)),
                o.push([T.EVALUATING_AUDIENCES_COMBINED, be, r, i || t.key, JSON.stringify(a)]);
              var u = this.audienceEvaluator.evaluate(a, s, n);
              return (
                this.logger.log(O.INFO, T.AUDIENCE_EVALUATION_RESULT_COMBINED, be, r, i || t.key, u.toString().toUpperCase()),
                o.push([T.AUDIENCE_EVALUATION_RESULT_COMBINED, be, r, i || t.key, u.toString().toUpperCase()]),
                { result: u, reasons: o }
              );
            }),
            (e.prototype.buildBucketerParams = function (e, t, r, n) {
              return {
                bucketingId: r,
                experimentId: t.id,
                experimentKey: t.key,
                experimentIdMap: e.experimentIdMap,
                experimentKeyMap: e.experimentKeyMap,
                groupIdMap: e.groupIdMap,
                logger: this.logger,
                trafficAllocationConfig: te(e, t.id),
                userId: n,
                variationIdMap: e.variationIdMap
              };
            }),
            (e.prototype.getStoredVariation = function (e, t, r, n) {
              if (n.hasOwnProperty(t.id)) {
                var i = n[t.id],
                  o = i.variation_id;
                if (e.variationIdMap.hasOwnProperty(o)) return e.variationIdMap[i.variation_id];
                this.logger.log(O.INFO, T.SAVED_VARIATION_NOT_FOUND, be, r, o, t.key);
              }
              return null;
            }),
            (e.prototype.getUserProfile = function (e) {
              var t = { user_id: e, experiment_bucket_map: {} };
              if (!this.userProfileService) return t;
              try {
                return this.userProfileService.lookup(e);
              } catch (t) {
                this.logger.log(O.ERROR, N.USER_PROFILE_LOOKUP_ERROR, be, e, t.message);
              }
              return null;
            }),
            (e.prototype.saveUserProfile = function (e, t, r, n) {
              if (this.userProfileService)
                try {
                  (n[e.id] = { variation_id: t.id }),
                    this.userProfileService.save({ user_id: r, experiment_bucket_map: n }),
                    this.logger.log(O.INFO, T.SAVED_VARIATION, be, t.key, e.key, r);
                } catch (e) {
                  this.logger.log(O.ERROR, N.USER_PROFILE_SAVE_ERROR, be, r, e.message);
                }
            }),
            (e.prototype.getVariationForFeature = function (e, t, r, n) {
              void 0 === n && (n = {});
              var i = [],
                o = this.getVariationForFeatureExperiment(e, t, r, n);
              i.push.apply(i, o.reasons);
              var a = o.result;
              if (null !== a.variation) return { result: a, reasons: i };
              var s = this.getVariationForRollout(e, t, r);
              i.push.apply(i, s.reasons);
              var u = s.result,
                l = r.getUserId();
              return u.variation
                ? (this.logger.log(O.DEBUG, T.USER_IN_ROLLOUT, be, l, t.key),
                  i.push([T.USER_IN_ROLLOUT, be, l, t.key]),
                  { result: u, reasons: i })
                : (this.logger.log(O.DEBUG, T.USER_NOT_IN_ROLLOUT, be, l, t.key),
                  i.push([T.USER_NOT_IN_ROLLOUT, be, l, t.key]),
                  { result: u, reasons: i });
            }),
            (e.prototype.getVariationForFeatureExperiment = function (e, t, r, n) {
              void 0 === n && (n = {});
              var i,
                o,
                a = [],
                s = null;
              if (t.experimentIds.length > 0)
                for (o = 0; o < t.experimentIds.length; o++) {
                  var u = re(e, t.experimentIds[o], this.logger);
                  if (u && ((i = this.getVariationFromExperimentRule(e, t.key, u, r, n)), a.push.apply(a, i.reasons), (s = i.result))) {
                    var l = null;
                    return (
                      (l = u.variationKeyMap[s]) || (l = ne(e, t.key, s)),
                      { result: { experiment: u, variation: l, decisionSource: m.FEATURE_TEST }, reasons: a }
                    );
                  }
                }
              else this.logger.log(O.DEBUG, T.FEATURE_HAS_NO_EXPERIMENTS, be, t.key), a.push([T.FEATURE_HAS_NO_EXPERIMENTS, be, t.key]);
              return { result: { experiment: null, variation: null, decisionSource: m.FEATURE_TEST }, reasons: a };
            }),
            (e.prototype.getVariationForRollout = function (e, t, r) {
              var n = [];
              if (!t.rolloutId)
                return (
                  this.logger.log(O.DEBUG, T.NO_ROLLOUT_EXISTS, be, t.key),
                  n.push([T.NO_ROLLOUT_EXISTS, be, t.key]),
                  { result: { experiment: null, variation: null, decisionSource: m.ROLLOUT }, reasons: n }
                );
              var i = e.rolloutIdMap[t.rolloutId];
              if (!i)
                return (
                  this.logger.log(O.ERROR, N.INVALID_ROLLOUT_ID, be, t.rolloutId, t.key),
                  n.push([N.INVALID_ROLLOUT_ID, be, t.rolloutId, t.key]),
                  { result: { experiment: null, variation: null, decisionSource: m.ROLLOUT }, reasons: n }
                );
              var o,
                a,
                s,
                u = i.experiments;
              if (0 === u.length)
                return (
                  this.logger.log(O.ERROR, T.ROLLOUT_HAS_NO_EXPERIMENTS, be, t.rolloutId),
                  n.push([T.ROLLOUT_HAS_NO_EXPERIMENTS, be, t.rolloutId]),
                  { result: { experiment: null, variation: null, decisionSource: m.ROLLOUT }, reasons: n }
                );
              for (var l = 0; l < u.length; ) {
                if (
                  ((o = this.getVariationFromDeliveryRule(e, t.key, u, l, r)),
                  n.push.apply(n, o.reasons),
                  (s = o.result),
                  (a = o.skipToEveryoneElse),
                  s)
                )
                  return { result: { experiment: e.experimentIdMap[u[l].id], variation: s, decisionSource: m.ROLLOUT }, reasons: n };
                l = a ? u.length - 1 : l + 1;
              }
              return { result: { experiment: null, variation: null, decisionSource: m.ROLLOUT }, reasons: n };
            }),
            (e.prototype.getBucketingId = function (e, t) {
              var r = e;
              return (
                null != t &&
                  "object" == typeof t &&
                  t.hasOwnProperty(y.BUCKETING_ID) &&
                  ("string" == typeof t[y.BUCKETING_ID]
                    ? ((r = t[y.BUCKETING_ID]), this.logger.log(O.DEBUG, T.VALID_BUCKETING_ID, be, r))
                    : this.logger.log(O.WARNING, T.BUCKETING_ID_NOT_STRING, be)),
                r
              );
            }),
            (e.prototype.findValidatedForcedDecision = function (e, t, r, n) {
              var i,
                o = [],
                a = t.getForcedDecision({ flagKey: r, ruleKey: n }),
                s = null,
                u = t.getUserId();
              return (
                e &&
                  a &&
                  ((i = a.variationKey),
                  (s = ne(e, r, i))
                    ? n
                      ? (this.logger.log(O.INFO, T.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, i, r, n, u),
                        o.push([T.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, i, r, n, u]))
                      : (this.logger.log(O.INFO, T.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, i, r, u),
                        o.push([T.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, i, r, u]))
                    : n
                    ? (this.logger.log(O.INFO, T.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, r, n, u),
                      o.push([T.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, r, n, u]))
                    : (this.logger.log(O.INFO, T.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, r, u),
                      o.push([T.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, r, u]))),
                { result: s, reasons: o }
              );
            }),
            (e.prototype.removeForcedVariation = function (e, t, r) {
              if (!e) throw new Error(h(N.INVALID_USER_ID, be));
              if (!this.forcedVariationMap.hasOwnProperty(e)) throw new Error(h(N.USER_NOT_IN_FORCED_VARIATION, be, e));
              delete this.forcedVariationMap[e][t], this.logger.log(O.DEBUG, T.VARIATION_REMOVED_FOR_USER, be, r, e);
            }),
            (e.prototype.setInForcedVariationMap = function (e, t, r) {
              this.forcedVariationMap.hasOwnProperty(e) || (this.forcedVariationMap[e] = {}),
                (this.forcedVariationMap[e][t] = r),
                this.logger.log(O.DEBUG, T.USER_MAPPED_TO_FORCED_VARIATION, be, r, t, e);
            }),
            (e.prototype.getForcedVariation = function (e, t, r) {
              var n,
                i = [],
                o = this.forcedVariationMap[r];
              if (!o) return this.logger.log(O.DEBUG, T.USER_HAS_NO_FORCED_VARIATION, be, r), { result: null, reasons: i };
              try {
                var a = ee(e, t);
                if (!a.hasOwnProperty("id"))
                  return (
                    this.logger.log(O.ERROR, N.IMPROPERLY_FORMATTED_EXPERIMENT, be, t),
                    i.push([N.IMPROPERLY_FORMATTED_EXPERIMENT, be, t]),
                    { result: null, reasons: i }
                  );
                n = a.id;
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), i.push(e.message), { result: null, reasons: i };
              }
              var s = o[n];
              if (!s)
                return this.logger.log(O.DEBUG, T.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, be, t, r), { result: null, reasons: i };
              var u = $(e, s);
              return (
                u
                  ? (this.logger.log(O.DEBUG, T.USER_HAS_FORCED_VARIATION, be, u, t, r), i.push([T.USER_HAS_FORCED_VARIATION, be, u, t, r]))
                  : this.logger.log(O.DEBUG, T.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, be, t, r),
                { result: u, reasons: i }
              );
            }),
            (e.prototype.setForcedVariation = function (e, t, r, n) {
              if (null != n && !Ve(n)) return this.logger.log(O.ERROR, N.INVALID_VARIATION_KEY, be), !1;
              var i;
              try {
                var o = ee(e, t);
                if (!o.hasOwnProperty("id")) return this.logger.log(O.ERROR, N.IMPROPERLY_FORMATTED_EXPERIMENT, be, t), !1;
                i = o.id;
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), !1;
              }
              if (null == n)
                try {
                  return this.removeForcedVariation(r, i, t), !0;
                } catch (e) {
                  return this.logger.log(O.ERROR, e.message), !1;
                }
              var a = (function (e, t, r) {
                var n = e.experimentKeyMap[t];
                return n.variationKeyMap.hasOwnProperty(r) ? n.variationKeyMap[r].id : null;
              })(e, t, n);
              if (!a) return this.logger.log(O.ERROR, N.NO_VARIATION_FOR_EXPERIMENT_KEY, be, n, t), !1;
              try {
                return this.setInForcedVariationMap(r, i, a), !0;
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), !1;
              }
            }),
            (e.prototype.getVariationFromExperimentRule = function (e, t, r, n, i) {
              void 0 === i && (i = {});
              var o = [],
                a = this.findValidatedForcedDecision(e, n, t, r.key);
              o.push.apply(o, a.reasons);
              var s = a.result;
              if (s) return { result: s.key, reasons: o };
              var u = this.getVariation(e, r, n, i);
              return o.push.apply(o, u.reasons), { result: u.result, reasons: o };
            }),
            (e.prototype.getVariationFromDeliveryRule = function (e, t, r, n, i) {
              var o = [],
                a = !1,
                s = r[n],
                u = this.findValidatedForcedDecision(e, i, t, s.key);
              o.push.apply(o, u.reasons);
              var l = u.result;
              if (l) return { result: l, reasons: o, skipToEveryoneElse: a };
              var c,
                E,
                f,
                d,
                p,
                g = i.getUserId(),
                I = i.getAttributes(),
                _ = this.getBucketingId(g, I),
                h = n === r.length - 1,
                v = h ? "Everyone Else" : n + 1,
                R = null,
                N = this.checkIfUserIsInAudience(e, s, L.RULE, I, v);
              return (
                o.push.apply(o, N.reasons),
                N.result
                  ? (this.logger.log(O.DEBUG, T.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, be, g, v),
                    o.push([T.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, be, g, v]),
                    (E = this.buildBucketerParams(e, s, _, g)),
                    (f = fe(E)),
                    o.push.apply(o, f.reasons),
                    (c = f.result) && ((p = c), (R = (d = e).variationIdMap.hasOwnProperty(p) ? d.variationIdMap[p] : null)),
                    R
                      ? (this.logger.log(O.DEBUG, T.USER_BUCKETED_INTO_TARGETING_RULE, be, g, v),
                        o.push([T.USER_BUCKETED_INTO_TARGETING_RULE, be, g, v]))
                      : h ||
                        (this.logger.log(O.DEBUG, T.USER_NOT_BUCKETED_INTO_TARGETING_RULE, be, g, v),
                        o.push([T.USER_NOT_BUCKETED_INTO_TARGETING_RULE, be, g, v]),
                        (a = !0)))
                  : (this.logger.log(O.DEBUG, T.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, be, g, v),
                    o.push([T.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, be, g, v])),
                { result: R, reasons: o, skipToEveryoneElse: a }
              );
            }),
            e
          );
        })();
      function Fe(e, t) {
        if (e.hasOwnProperty("revenue")) {
          var r = e.revenue,
            n = void 0;
          return "string" == typeof r
            ? ((n = parseInt(r)),
              isNaN(n)
                ? (t.log(O.INFO, T.FAILED_TO_PARSE_REVENUE, "EVENT_TAG_UTILS", r), null)
                : (t.log(O.INFO, T.PARSED_REVENUE_VALUE, "EVENT_TAG_UTILS", n), n))
            : "number" == typeof r
            ? ((n = r), t.log(O.INFO, T.PARSED_REVENUE_VALUE, "EVENT_TAG_UTILS", n), n)
            : null;
        }
        return null;
      }
      function Me(e, t) {
        if (e.hasOwnProperty("value")) {
          var r = e.value,
            n = void 0;
          return "string" == typeof r
            ? ((n = parseFloat(r)),
              isNaN(n)
                ? (t.log(O.INFO, T.FAILED_TO_PARSE_VALUE, "EVENT_TAG_UTILS", r), null)
                : (t.log(O.INFO, T.PARSED_NUMERIC_VALUE, "EVENT_TAG_UTILS", n), n))
            : "number" == typeof r
            ? ((n = r), t.log(O.INFO, T.PARSED_NUMERIC_VALUE, "EVENT_TAG_UTILS", n), n)
            : null;
        }
        return null;
      }
      function ke(e, t) {
        return "string" == typeof e && ("string" == typeof t || "boolean" == typeof t || (R.isNumber(t) && R.isSafeInteger(t)));
      }
      var xe = "https://logx.optimizely.com/v1/events";
      function Be(e) {
        var t = e.attributes,
          r = e.userId,
          n = e.clientEngine,
          i = e.clientVersion,
          o = e.configObj,
          a = e.logger,
          s = !!o.anonymizeIP && o.anonymizeIP,
          u = o.botFiltering,
          l = { snapshots: [], visitor_id: r, attributes: [] },
          c = {
            account_id: o.accountId,
            project_id: o.projectId,
            visitors: [l],
            revision: o.revision,
            client_name: n,
            client_version: i,
            anonymize_ip: s,
            enrich_decisions: !0
          };
        return (
          t &&
            Object.keys(t || {}).forEach(function (e) {
              if (ke(e, t[e])) {
                var r = W(o, e, a);
                r && c.visitors[0].attributes.push({ entity_id: r, key: e, type: "custom", value: t[e] });
              }
            }),
          "boolean" == typeof u &&
            c.visitors[0].attributes.push({ entity_id: y.BOT_FILTERING, key: y.BOT_FILTERING, type: "custom", value: u }),
          c
        );
      }
      function we(e) {
        var t, r;
        return null !== (r = null === (t = e.experiment) || void 0 === t ? void 0 : t.key) && void 0 !== r ? r : "";
      }
      function Ke(e) {
        var t, r;
        return null !== (r = null === (t = e.variation) || void 0 === t ? void 0 : t.key) && void 0 !== r ? r : "";
      }
      function Ge(e) {
        var t, r;
        return null !== (r = null === (t = e.variation) || void 0 === t ? void 0 : t.featureEnabled) && void 0 !== r && r;
      }
      function je(e) {
        var t, r;
        return null !== (r = null === (t = e.experiment) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null;
      }
      function He(e) {
        var t, r;
        return null !== (r = null === (t = e.variation) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null;
      }
      var Ye = i.getLogger("EVENT_BUILDER");
      function Xe(e, t) {
        var r = [];
        return (
          t &&
            Object.keys(t || {}).forEach(function (n) {
              if (ke(n, t[n])) {
                var i = W(e, n, Ye);
                i && r.push({ entityId: i, key: n, value: t[n] });
              }
            }),
          r
        );
      }
      var ze = "USER_PROFILE_SERVICE_VALIDATOR",
        qe = (function () {
          function e(e) {
            var r,
              n = this,
              i = e.clientEngine;
            i || (e.logger.log(O.INFO, T.INVALID_CLIENT_ENGINE, "OPTIMIZELY", i), (i = "node-sdk")),
              (this.clientEngine = i),
              (this.clientVersion = e.clientVersion || "4.10.0"),
              (this.errorHandler = e.errorHandler),
              (this.isOptimizelyConfigValid = e.isValidInstance),
              (this.logger = e.logger);
            var o = null !== (r = e.defaultDecideOptions) && void 0 !== r ? r : [];
            Array.isArray(o) || (this.logger.log(O.DEBUG, T.INVALID_DEFAULT_DECIDE_OPTIONS, "OPTIMIZELY"), (o = []));
            var a = {};
            o.forEach(function (e) {
              t.N1[e] ? (a[e] = !0) : n.logger.log(O.WARNING, T.UNRECOGNIZED_DECIDE_OPTION, "OPTIMIZELY", e);
            }),
              (this.defaultDecideOptions = a),
              (this.projectConfigManager = (function (e) {
                return new ce(e);
              })({
                datafile: e.datafile,
                jsonSchemaValidator: e.jsonSchemaValidator,
                sdkKey: e.sdkKey,
                datafileManager: e.datafileManager
              })),
              (this.disposeOnUpdate = this.projectConfigManager.onUpdate(function (e) {
                n.logger.log(O.INFO, T.UPDATED_OPTIMIZELY_CONFIG, "OPTIMIZELY", e.revision, e.projectId),
                  n.notificationCenter.sendNotifications(v.OPTIMIZELY_CONFIG_UPDATE);
              }));
            var s,
              u = this.projectConfigManager.onReady(),
              l = null;
            if (e.userProfileService)
              try {
                (function (e) {
                  if ("object" == typeof e && null !== e) {
                    if ("function" != typeof e.lookup) throw new Error(h(N.INVALID_USER_PROFILE_SERVICE, ze, "Missing function 'lookup'"));
                    if ("function" != typeof e.save) throw new Error(h(N.INVALID_USER_PROFILE_SERVICE, ze, "Missing function 'save'"));
                    return !0;
                  }
                  throw new Error(h(N.INVALID_USER_PROFILE_SERVICE, ze));
                })(e.userProfileService) &&
                  ((l = e.userProfileService), this.logger.log(O.INFO, T.VALID_USER_PROFILE_SERVICE, "OPTIMIZELY"));
              } catch (e) {
                this.logger.log(O.WARNING, e.message);
              }
            (this.decisionService =
              ((s = { userProfileService: l, logger: this.logger, UNSTABLE_conditionEvaluators: e.UNSTABLE_conditionEvaluators }),
              new Pe(s))),
              (this.notificationCenter = e.notificationCenter),
              (this.eventProcessor = e.eventProcessor);
            var c = this.eventProcessor.start();
            (this.readyPromise = Promise.all([u, c]).then(function (e) {
              return e[0];
            })),
              (this.readyTimeouts = {}),
              (this.nextReadyTimeoutId = 0);
          }
          return (
            (e.prototype.isValidInstance = function () {
              return this.isOptimizelyConfigValid && !!this.projectConfigManager.getConfig();
            }),
            (e.prototype.activate = function (e, t, r) {
              try {
                if (!this.isValidInstance()) return this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "activate"), null;
                if (!this.validateInputs({ experiment_key: e, user_id: t }, r)) return this.notActivatingExperiment(e, t);
                var n = this.projectConfigManager.getConfig();
                if (!n) return null;
                try {
                  var i = this.getVariation(e, t, r);
                  if (null === i) return this.notActivatingExperiment(e, t);
                  if (
                    !(function (e, t) {
                      return "Running" === Q(e, t);
                    })(n, e)
                  )
                    return this.logger.log(O.DEBUG, T.SHOULD_NOT_DISPATCH_ACTIVATE, "OPTIMIZELY", e), i;
                  var o = ee(n, e),
                    a = { experiment: o, variation: o.variationKeyMap[i], decisionSource: m.EXPERIMENT };
                  return this.sendImpressionEvent(a, "", t, !0, r), i;
                } catch (r) {
                  return (
                    this.logger.log(O.ERROR, r.message),
                    this.logger.log(O.INFO, T.NOT_ACTIVATING_USER, "OPTIMIZELY", t, e),
                    this.errorHandler.handleError(r),
                    null
                  );
                }
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
            }),
            (e.prototype.sendImpressionEvent = function (e, t, r, n, i) {
              var o = this.projectConfigManager.getConfig();
              if (o) {
                var a = (function (e) {
                  var t = e.configObj,
                    r = e.decisionObj,
                    n = e.userId,
                    i = e.flagKey,
                    o = e.enabled,
                    a = e.userAttributes,
                    s = e.clientEngine,
                    u = e.clientVersion,
                    l = r.decisionSource,
                    c = we(r),
                    E = je(r),
                    f = Ke(r),
                    d = He(r),
                    p = null !== E ? J(t, E) : null;
                  return {
                    type: "impression",
                    timestamp: R.currentTimestamp(),
                    uuid: R.uuid(),
                    user: { id: n, attributes: Xe(t, a) },
                    context: {
                      accountId: t.accountId,
                      projectId: t.projectId,
                      revision: t.revision,
                      clientName: s,
                      clientVersion: u,
                      anonymizeIP: t.anonymizeIP || !1,
                      botFiltering: t.botFiltering
                    },
                    layer: { id: p },
                    experiment: { id: E, key: c },
                    variation: { id: d, key: f },
                    ruleKey: c,
                    flagKey: i,
                    ruleType: l,
                    enabled: o
                  };
                })({
                  decisionObj: e,
                  flagKey: t,
                  enabled: n,
                  userId: r,
                  userAttributes: i,
                  clientEngine: this.clientEngine,
                  clientVersion: this.clientVersion,
                  configObj: o
                });
                this.eventProcessor.process(a), this.emitNotificationCenterActivate(e, t, r, n, i);
              }
            }),
            (e.prototype.emitNotificationCenterActivate = function (e, t, r, n, i) {
              var o = this.projectConfigManager.getConfig();
              if (o) {
                var a,
                  s = e.decisionSource,
                  u = we(e),
                  l = je(e),
                  c = Ke(e),
                  E = He(e);
                null !== l && "" !== c && (a = o.experimentIdMap[l]);
                var f,
                  d = (function (e) {
                    var t,
                      r,
                      n,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l = Be(e),
                      c =
                        ((t = e.configObj),
                        (r = e.experimentId),
                        (n = e.variationId),
                        (i = e.ruleKey),
                        (o = e.ruleType),
                        (a = e.flagKey),
                        (s = e.enabled),
                        {
                          decisions: [
                            {
                              campaign_id: (u = r ? J(t, r) : null),
                              experiment_id: r,
                              variation_id: n,
                              metadata: { flag_key: a, rule_key: i, rule_type: o, variation_key: (n ? $(t, n) : null) || "", enabled: s }
                            }
                          ],
                          events: [{ entity_id: u, timestamp: R.currentTimestamp(), key: "campaign_activated", uuid: R.uuid() }]
                        });
                    return l.visitors[0].snapshots.push(c), { httpVerb: "POST", url: xe, params: l };
                  })({
                    attributes: i,
                    clientEngine: this.clientEngine,
                    clientVersion: this.clientVersion,
                    configObj: o,
                    experimentId: l,
                    ruleKey: u,
                    flagKey: t,
                    ruleType: s,
                    userId: r,
                    enabled: n,
                    variationId: E,
                    logger: this.logger
                  });
                a && a.variationKeyMap && "" !== c && (f = a.variationKeyMap[c]),
                  this.notificationCenter.sendNotifications(v.ACTIVATE, {
                    experiment: a,
                    userId: r,
                    attributes: i,
                    variation: f,
                    logEvent: d
                  });
              }
            }),
            (e.prototype.track = function (e, t, r, n) {
              try {
                if (!this.isValidInstance()) return void this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "track");
                if (!this.validateInputs({ user_id: t, event_key: e }, r, n)) return;
                var i = this.projectConfigManager.getConfig();
                if (!i) return;
                if (
                  !(function (e, t) {
                    return e.eventKeyMap.hasOwnProperty(t);
                  })(i, e)
                )
                  return (
                    this.logger.log(O.WARNING, T.EVENT_KEY_NOT_FOUND, "OPTIMIZELY", e),
                    void this.logger.log(O.WARNING, T.NOT_TRACKING_USER, "OPTIMIZELY", t)
                  );
                var o = (function (e) {
                  var t = e.configObj,
                    r = e.userId,
                    n = e.userAttributes,
                    i = e.clientEngine,
                    o = e.clientVersion,
                    a = e.eventKey,
                    s = e.eventTags,
                    u = Z(t, a),
                    l = s ? Fe(s, Ye) : null,
                    c = s ? Me(s, Ye) : null;
                  return {
                    type: "conversion",
                    timestamp: R.currentTimestamp(),
                    uuid: R.uuid(),
                    user: { id: r, attributes: Xe(t, n) },
                    context: {
                      accountId: t.accountId,
                      projectId: t.projectId,
                      revision: t.revision,
                      clientName: i,
                      clientVersion: o,
                      anonymizeIP: t.anonymizeIP || !1,
                      botFiltering: t.botFiltering
                    },
                    event: { id: u, key: a },
                    revenue: l,
                    value: c,
                    tags: s
                  };
                })({
                  eventKey: e,
                  eventTags: (n = this.filterEmptyValues(n)),
                  userId: t,
                  userAttributes: r,
                  clientEngine: this.clientEngine,
                  clientVersion: this.clientVersion,
                  configObj: i
                });
                this.logger.log(O.INFO, T.TRACK_EVENT, "OPTIMIZELY", e, t),
                  this.eventProcessor.process(o),
                  this.emitNotificationCenterTrack(e, t, r, n);
              } catch (e) {
                this.logger.log(O.ERROR, e.message),
                  this.errorHandler.handleError(e),
                  this.logger.log(O.ERROR, T.NOT_TRACKING_USER, "OPTIMIZELY", t);
              }
            }),
            (e.prototype.emitNotificationCenterTrack = function (e, t, r, n) {
              try {
                var i = this.projectConfigManager.getConfig();
                if (!i) return;
                var o = (function (e) {
                  var t = Be(e),
                    r = (function (e, t, r, n) {
                      var i = { events: [] },
                        o = { entity_id: Z(e, t), timestamp: R.currentTimestamp(), uuid: R.uuid(), key: t };
                      if (n) {
                        var a = Fe(n, r);
                        null !== a && (o.revenue = a);
                        var s = Me(n, r);
                        null !== s && (o.value = s), (o.tags = n);
                      }
                      return i.events.push(o), i;
                    })(e.configObj, e.eventKey, e.logger, e.eventTags);
                  return (t.visitors[0].snapshots = [r]), { httpVerb: "POST", url: xe, params: t };
                })({
                  attributes: r,
                  clientEngine: this.clientEngine,
                  clientVersion: this.clientVersion,
                  configObj: i,
                  eventKey: e,
                  eventTags: n,
                  logger: this.logger,
                  userId: t
                });
                this.notificationCenter.sendNotifications(v.TRACK, { eventKey: e, userId: t, attributes: r, eventTags: n, logEvent: o });
              } catch (e) {
                this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e);
              }
            }),
            (e.prototype.getVariation = function (e, t, r) {
              try {
                if (!this.isValidInstance()) return this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "getVariation"), null;
                try {
                  if (!this.validateInputs({ experiment_key: e, user_id: t }, r)) return null;
                  var n = this.projectConfigManager.getConfig();
                  if (!n) return null;
                  var i = n.experimentKeyMap[e];
                  if (!i) return this.logger.log(O.DEBUG, N.INVALID_EXPERIMENT_KEY, "OPTIMIZELY", e), null;
                  var o = this.decisionService.getVariation(n, i, this.createUserContext(t, r)).result,
                    a = ((s = n), (u = i.id), s.experimentFeatureMap.hasOwnProperty(u) ? A.FEATURE_TEST : A.AB_TEST);
                  return (
                    this.notificationCenter.sendNotifications(v.DECISION, {
                      type: a,
                      userId: t,
                      attributes: r || {},
                      decisionInfo: { experimentKey: e, variationKey: o }
                    }),
                    o
                  );
                } catch (e) {
                  return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
                }
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
              var s, u;
            }),
            (e.prototype.setForcedVariation = function (e, t, r) {
              if (!this.validateInputs({ experiment_key: e, user_id: t })) return !1;
              var n = this.projectConfigManager.getConfig();
              if (!n) return !1;
              try {
                return this.decisionService.setForcedVariation(n, e, t, r);
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), !1;
              }
            }),
            (e.prototype.getForcedVariation = function (e, t) {
              if (!this.validateInputs({ experiment_key: e, user_id: t })) return null;
              var r = this.projectConfigManager.getConfig();
              if (!r) return null;
              try {
                return this.decisionService.getForcedVariation(r, e, t).result;
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
            }),
            (e.prototype.validateInputs = function (e, t, r) {
              try {
                if (e.hasOwnProperty("user_id")) {
                  var n = e.user_id;
                  if ("string" != typeof n || null === n || "undefined" === n)
                    throw new Error(h(N.INVALID_INPUT_FORMAT, "OPTIMIZELY", "user_id"));
                  delete e.user_id;
                }
                return (
                  Object.keys(e).forEach(function (t) {
                    if (!Ve(e[t])) throw new Error(h(N.INVALID_INPUT_FORMAT, "OPTIMIZELY", t));
                  }),
                  t &&
                    (function (e) {
                      if ("object" != typeof e || Array.isArray(e) || null === e)
                        throw new Error(h(N.INVALID_ATTRIBUTES, "ATTRIBUTES_VALIDATOR"));
                      Object.keys(e).forEach(function (t) {
                        if (void 0 === e[t]) throw new Error(h(N.UNDEFINED_ATTRIBUTE, "ATTRIBUTES_VALIDATOR", t));
                      });
                    })(t),
                  r &&
                    (function (e) {
                      if ("object" != typeof e || Array.isArray(e) || null === e)
                        throw new Error(h(N.INVALID_EVENT_TAGS, "EVENT_TAGS_VALIDATOR"));
                    })(r),
                  !0
                );
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), !1;
              }
            }),
            (e.prototype.notActivatingExperiment = function (e, t) {
              return this.logger.log(O.INFO, T.NOT_ACTIVATING_USER, "OPTIMIZELY", t, e), null;
            }),
            (e.prototype.filterEmptyValues = function (e) {
              for (var t in e) !e.hasOwnProperty(t) || (null !== e[t] && void 0 !== e[t]) || delete e[t];
              return e;
            }),
            (e.prototype.isFeatureEnabled = function (e, t, r) {
              try {
                if (!this.isValidInstance()) return this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "isFeatureEnabled"), !1;
                if (!this.validateInputs({ feature_key: e, user_id: t }, r)) return !1;
                var n = this.projectConfigManager.getConfig();
                if (!n) return !1;
                var i = ie(n, e, this.logger);
                if (!i) return !1;
                var o = {},
                  a = this.createUserContext(t, r),
                  s = this.decisionService.getVariationForFeature(n, i, a).result,
                  u = s.decisionSource,
                  l = we(s),
                  c = Ke(s),
                  E = Ge(s);
                u === m.FEATURE_TEST && (o = { experimentKey: l, variationKey: c }),
                  (u === m.FEATURE_TEST || (u === m.ROLLOUT && se(n))) && this.sendImpressionEvent(s, i.key, t, E, r),
                  !0 === E
                    ? this.logger.log(O.INFO, T.FEATURE_ENABLED_FOR_USER, "OPTIMIZELY", e, t)
                    : (this.logger.log(O.INFO, T.FEATURE_NOT_ENABLED_FOR_USER, "OPTIMIZELY", e, t), (E = !1));
                var f = { featureKey: e, featureEnabled: E, source: s.decisionSource, sourceInfo: o };
                return (
                  this.notificationCenter.sendNotifications(v.DECISION, {
                    type: A.FEATURE,
                    userId: t,
                    attributes: r || {},
                    decisionInfo: f
                  }),
                  E
                );
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), !1;
              }
            }),
            (e.prototype.getEnabledFeatures = function (e, t) {
              var r = this;
              try {
                var n = [];
                if (!this.isValidInstance()) return this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "getEnabledFeatures"), n;
                if (!this.validateInputs({ user_id: e })) return n;
                var i = this.projectConfigManager.getConfig();
                return i
                  ? (p(i.featureKeyMap).forEach(function (i) {
                      r.isFeatureEnabled(i.key, e, t) && n.push(i.key);
                    }),
                    n)
                  : n;
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), [];
              }
            }),
            (e.prototype.getFeatureVariable = function (e, t, r, n) {
              try {
                return this.isValidInstance()
                  ? this.getFeatureVariableForType(e, t, null, r, n)
                  : (this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariable"), null);
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
            }),
            (e.prototype.getFeatureVariableForType = function (e, t, r, n, i) {
              if (!this.validateInputs({ feature_key: e, variable_key: t, user_id: n }, i)) return null;
              var o = this.projectConfigManager.getConfig();
              if (!o) return null;
              var a = ie(o, e, this.logger);
              if (!a) return null;
              var s = (function (e, t, r, n) {
                var i = e.featureKeyMap[t];
                return i
                  ? i.variableKeyMap[r] || (n.log(O.ERROR, N.VARIABLE_KEY_NOT_IN_DATAFILE, z, r, t), null)
                  : (n.log(O.ERROR, N.FEATURE_NOT_IN_DATAFILE, z, t), null);
              })(o, e, t, this.logger);
              if (!s) return null;
              if (r && s.type !== r) return this.logger.log(O.WARNING, T.VARIABLE_REQUESTED_WITH_WRONG_TYPE, "OPTIMIZELY", r, s.type), null;
              var u = this.createUserContext(n, i),
                l = this.decisionService.getVariationForFeature(o, a, u).result,
                c = Ge(l),
                E = this.getFeatureVariableValueFromVariation(e, c, l.variation, s, n),
                f = {};
              return (
                l.decisionSource === m.FEATURE_TEST &&
                  null !== l.experiment &&
                  null !== l.variation &&
                  (f = { experimentKey: l.experiment.key, variationKey: l.variation.key }),
                this.notificationCenter.sendNotifications(v.DECISION, {
                  type: A.FEATURE_VARIABLE,
                  userId: n,
                  attributes: i || {},
                  decisionInfo: {
                    featureKey: e,
                    featureEnabled: c,
                    source: l.decisionSource,
                    variableKey: t,
                    variableValue: E,
                    variableType: s.type,
                    sourceInfo: f
                  }
                }),
                E
              );
            }),
            (e.prototype.getFeatureVariableValueFromVariation = function (e, t, r, n, i) {
              var o = this.projectConfigManager.getConfig();
              if (!o) return null;
              var a = n.defaultValue;
              if (null !== r) {
                var s = (function (e, t, r, n) {
                  if (!t || !r) return null;
                  if (!e.variationVariableUsageMap.hasOwnProperty(r.id))
                    return n.log(O.ERROR, N.VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT, z, r.id), null;
                  var i = e.variationVariableUsageMap[r.id][t.id];
                  return i ? i.value : null;
                })(o, n, r, this.logger);
                null !== s
                  ? t
                    ? ((a = s), this.logger.log(O.INFO, T.USER_RECEIVED_VARIABLE_VALUE, "OPTIMIZELY", a, n.key, e))
                    : this.logger.log(O.INFO, T.FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE, "OPTIMIZELY", e, i, a)
                  : this.logger.log(O.INFO, T.VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE, "OPTIMIZELY", n.key, r.key);
              } else this.logger.log(O.INFO, T.USER_RECEIVED_DEFAULT_VARIABLE_VALUE, "OPTIMIZELY", i, n.key, e);
              return (function (e, t, r) {
                var n;
                switch (t) {
                  case U.BOOLEAN:
                    "true" !== e && "false" !== e ? (r.log(O.ERROR, N.UNABLE_TO_CAST_VALUE, z, e, t), (n = null)) : (n = "true" === e);
                    break;
                  case U.INTEGER:
                    (n = parseInt(e, 10)), isNaN(n) && (r.log(O.ERROR, N.UNABLE_TO_CAST_VALUE, z, e, t), (n = null));
                    break;
                  case U.DOUBLE:
                    (n = parseFloat(e)), isNaN(n) && (r.log(O.ERROR, N.UNABLE_TO_CAST_VALUE, z, e, t), (n = null));
                    break;
                  case U.JSON:
                    try {
                      n = JSON.parse(e);
                    } catch (i) {
                      r.log(O.ERROR, N.UNABLE_TO_CAST_VALUE, z, e, t), (n = null);
                    }
                    break;
                  default:
                    n = e;
                }
                return n;
              })(a, n.type, this.logger);
            }),
            (e.prototype.getFeatureVariableBoolean = function (e, t, r, n) {
              try {
                return this.isValidInstance()
                  ? this.getFeatureVariableForType(e, t, U.BOOLEAN, r, n)
                  : (this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableBoolean"), null);
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
            }),
            (e.prototype.getFeatureVariableDouble = function (e, t, r, n) {
              try {
                return this.isValidInstance()
                  ? this.getFeatureVariableForType(e, t, U.DOUBLE, r, n)
                  : (this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableDouble"), null);
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
            }),
            (e.prototype.getFeatureVariableInteger = function (e, t, r, n) {
              try {
                return this.isValidInstance()
                  ? this.getFeatureVariableForType(e, t, U.INTEGER, r, n)
                  : (this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableInteger"), null);
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
            }),
            (e.prototype.getFeatureVariableString = function (e, t, r, n) {
              try {
                return this.isValidInstance()
                  ? this.getFeatureVariableForType(e, t, U.STRING, r, n)
                  : (this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableString"), null);
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
            }),
            (e.prototype.getFeatureVariableJSON = function (e, t, r, n) {
              try {
                return this.isValidInstance()
                  ? this.getFeatureVariableForType(e, t, U.JSON, r, n)
                  : (this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableJSON"), null);
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
            }),
            (e.prototype.getAllFeatureVariables = function (e, t, r) {
              var n = this;
              try {
                if (!this.isValidInstance())
                  return this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "getAllFeatureVariables"), null;
                if (!this.validateInputs({ feature_key: e, user_id: t }, r)) return null;
                var i = this.projectConfigManager.getConfig();
                if (!i) return null;
                var o = ie(i, e, this.logger);
                if (!o) return null;
                var a = this.createUserContext(t, r),
                  s = this.decisionService.getVariationForFeature(i, o, a).result,
                  u = Ge(s),
                  l = {};
                o.variables.forEach(function (r) {
                  l[r.key] = n.getFeatureVariableValueFromVariation(e, u, s.variation, r, t);
                });
                var c = {};
                return (
                  s.decisionSource === m.FEATURE_TEST &&
                    null !== s.experiment &&
                    null !== s.variation &&
                    (c = { experimentKey: s.experiment.key, variationKey: s.variation.key }),
                  this.notificationCenter.sendNotifications(v.DECISION, {
                    type: A.ALL_FEATURE_VARIABLES,
                    userId: t,
                    attributes: r || {},
                    decisionInfo: { featureKey: e, featureEnabled: u, source: s.decisionSource, variableValues: l, sourceInfo: c }
                  }),
                  l
                );
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
            }),
            (e.prototype.getOptimizelyConfig = function () {
              try {
                return this.projectConfigManager.getConfig() ? this.projectConfigManager.getOptimizelyConfig() : null;
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), null;
              }
            }),
            (e.prototype.close = function () {
              var e = this;
              try {
                var t = this.eventProcessor.stop();
                return (
                  this.disposeOnUpdate && (this.disposeOnUpdate(), (this.disposeOnUpdate = null)),
                  this.projectConfigManager && this.projectConfigManager.stop(),
                  Object.keys(this.readyTimeouts).forEach(function (t) {
                    var r = e.readyTimeouts[t];
                    clearTimeout(r.readyTimeout), r.onClose();
                  }),
                  (this.readyTimeouts = {}),
                  t.then(
                    function () {
                      return { success: !0 };
                    },
                    function (e) {
                      return { success: !1, reason: String(e) };
                    }
                  )
                );
              } catch (e) {
                return (
                  this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), Promise.resolve({ success: !1, reason: String(e) })
                );
              }
            }),
            (e.prototype.onReady = function (e) {
              var t,
                r,
                n = this;
              "object" == typeof e && null !== e && void 0 !== e.timeout && (t = e.timeout), R.isSafeInteger(t) || (t = 3e4);
              var i = new Promise(function (e) {
                  r = e;
                }),
                o = this.nextReadyTimeoutId;
              this.nextReadyTimeoutId++;
              var a = setTimeout(function () {
                delete n.readyTimeouts[o], r({ success: !1, reason: h("onReady timeout expired after %s ms", t) });
              }, t);
              return (
                (this.readyTimeouts[o] = {
                  readyTimeout: a,
                  onClose: function () {
                    r({ success: !1, reason: "Instance closed" });
                  }
                }),
                this.readyPromise.then(function () {
                  clearTimeout(a), delete n.readyTimeouts[o], r({ success: !0 });
                }),
                Promise.race([this.readyPromise, i])
              );
            }),
            (e.prototype.createUserContext = function (e, t) {
              return this.validateInputs({ user_id: e }, t) ? new j({ optimizely: this, userId: e, attributes: t }) : null;
            }),
            (e.prototype.decide = function (e, r, n) {
              var i,
                o,
                a,
                s,
                u = this;
              void 0 === n && (n = []);
              var l,
                E = e.getUserId(),
                f = e.getAttributes(),
                d = this.projectConfigManager.getConfig(),
                p = [];
              if (!this.isValidInstance() || !d)
                return this.logger.log(O.INFO, T.INVALID_OBJECT, "OPTIMIZELY", "decide"), G(r, e, [S.SDK_NOT_READY]);
              var g = d.featureKeyMap[r];
              if (!g) return this.logger.log(O.ERROR, N.FEATURE_NOT_IN_DATAFILE, "OPTIMIZELY", r), G(r, e, [h(S.FLAG_KEY_INVALID, r)]);
              var I = this.getAllDecideOptions(n),
                _ = this.decisionService.findValidatedForcedDecision(d, e, r);
              p.push.apply(p, _.reasons);
              var R = _.result;
              if (R) l = { experiment: null, variation: R, decisionSource: m.FEATURE_TEST };
              else {
                var y = this.decisionService.getVariationForFeature(d, g, e, I);
                p.push.apply(p, y.reasons), (l = y.result);
              }
              var L = l.decisionSource,
                U = null !== (o = null === (i = l.experiment) || void 0 === i ? void 0 : i.key) && void 0 !== o ? o : null,
                D = null !== (s = null === (a = l.variation) || void 0 === a ? void 0 : a.key) && void 0 !== s ? s : null,
                C = Ge(l);
              !0 === C
                ? this.logger.log(O.INFO, T.FEATURE_ENABLED_FOR_USER, "OPTIMIZELY", r, E)
                : this.logger.log(O.INFO, T.FEATURE_NOT_ENABLED_FOR_USER, "OPTIMIZELY", r, E);
              var V = {},
                b = !1;
              I[t.N1.EXCLUDE_VARIABLES] ||
                g.variables.forEach(function (e) {
                  V[e.key] = u.getFeatureVariableValueFromVariation(r, C, l.variation, e, E);
                }),
                !I[t.N1.DISABLE_DECISION_EVENT] &&
                  (L === m.FEATURE_TEST || (L === m.ROLLOUT && se(d))) &&
                  (this.sendImpressionEvent(l, r, E, C, f), (b = !0));
              var P = [];
              I[t.N1.INCLUDE_REASONS] &&
                (P = p.map(function (e) {
                  return h.apply(void 0, c([e[0]], e.slice(1)));
                }));
              var F = { flagKey: r, enabled: C, variationKey: D, ruleKey: U, variables: V, reasons: P, decisionEventDispatched: b };
              return (
                this.notificationCenter.sendNotifications(v.DECISION, { type: A.FLAG, userId: E, attributes: f, decisionInfo: F }),
                { variationKey: D, enabled: C, variables: V, ruleKey: U, flagKey: r, userContext: e, reasons: P }
              );
            }),
            (e.prototype.getAllDecideOptions = function (e) {
              var r = this,
                n = l({}, this.defaultDecideOptions);
              return (
                Array.isArray(e)
                  ? e.forEach(function (e) {
                      t.N1[e] ? (n[e] = !0) : r.logger.log(O.WARNING, T.UNRECOGNIZED_DECIDE_OPTION, "OPTIMIZELY", e);
                    })
                  : this.logger.log(O.DEBUG, T.INVALID_DECIDE_OPTIONS, "OPTIMIZELY"),
                n
              );
            }),
            (e.prototype.decideForKeys = function (e, r, n) {
              var i = this;
              void 0 === n && (n = []);
              var o = {};
              if (!this.isValidInstance()) return this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "decideForKeys"), o;
              if (0 === r.length) return o;
              var a = this.getAllDecideOptions(n);
              return (
                r.forEach(function (r) {
                  var s = i.decide(e, r, n);
                  (a[t.N1.ENABLED_FLAGS_ONLY] && !s.enabled) || (o[r] = s);
                }),
                o
              );
            }),
            (e.prototype.decideAll = function (e, t) {
              void 0 === t && (t = []);
              var r = this.projectConfigManager.getConfig();
              if (!this.isValidInstance() || !r) return this.logger.log(O.ERROR, T.INVALID_OBJECT, "OPTIMIZELY", "decideAll"), {};
              var n = Object.keys(r.featureKeyMap);
              return this.decideForKeys(e, n, t);
            }),
            e
          );
        })(),
        Je = (function () {
          function e(e) {
            var t = this;
            (this.logger = e.logger),
              (this.errorHandler = e.errorHandler),
              (this.notificationListeners = {}),
              p(v).forEach(function (e) {
                t.notificationListeners[e] = [];
              }),
              (this.listenerId = 1);
          }
          return (
            (e.prototype.addNotificationListener = function (e, t) {
              try {
                if (!(p(v).indexOf(e) > -1)) return -1;
                this.notificationListeners[e] || (this.notificationListeners[e] = []);
                var r = !1;
                if (
                  ((this.notificationListeners[e] || []).forEach(function (e) {
                    e.callback !== t || (r = !0);
                  }),
                  r)
                )
                  return -1;
                this.notificationListeners[e].push({ id: this.listenerId, callback: t });
                var n = this.listenerId;
                return (this.listenerId += 1), n;
              } catch (e) {
                return this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e), -1;
              }
            }),
            (e.prototype.removeNotificationListener = function (e) {
              var t = this;
              try {
                var r, n;
                if (
                  (Object.keys(this.notificationListeners).some(function (i) {
                    return (
                      (t.notificationListeners[i] || []).every(function (t, o) {
                        return t.id !== e || ((r = o), (n = i), !1);
                      }),
                      void 0 !== r && void 0 !== n
                    );
                  }),
                  void 0 !== r && void 0 !== n)
                )
                  return this.notificationListeners[n].splice(r, 1), !0;
              } catch (e) {
                this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e);
              }
              return !1;
            }),
            (e.prototype.clearAllNotificationListeners = function () {
              var e = this;
              try {
                p(v).forEach(function (t) {
                  e.notificationListeners[t] = [];
                });
              } catch (e) {
                this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e);
              }
            }),
            (e.prototype.clearNotificationListeners = function (e) {
              try {
                this.notificationListeners[e] = [];
              } catch (e) {
                this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e);
              }
            }),
            (e.prototype.sendNotifications = function (e, t) {
              var r = this;
              try {
                (this.notificationListeners[e] || []).forEach(function (n) {
                  var i = n.callback;
                  try {
                    i(t);
                  } catch (t) {
                    r.logger.log(O.ERROR, T.NOTIFICATION_LISTENER_EXCEPTION, "NOTIFICATION_CENTER", e, t.message);
                  }
                });
              } catch (e) {
                this.logger.log(O.ERROR, e.message), this.errorHandler.handleError(e);
              }
            }),
            e
          );
        })(),
        We = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return new (o.LogTierV1EventProcessor.bind.apply(o.LogTierV1EventProcessor, c([void 0], e)))();
        };
      o.LocalStoragePendingEventsDispatcher;
      function Ze(e, t, r, n) {
        var i = { sdkKey: e };
        if (((void 0 === n || ("object" == typeof n && null !== n)) && R.assign(i, n), r)) {
          var o = ae({ datafile: r, jsonSchemaValidator: void 0, logger: t }),
            a = o.configObj,
            s = o.error;
          s && t.error(s), a && (i.datafile = oe(a));
        }
        return new u.HttpPollingDatafileManager(i);
      }
      var Qe = i.getLogger();
      i.setLogHandler(x()), i.setLogLevel(i.LogLevel.INFO);
      var $e = !1,
        et = function (e) {
          try {
            var t = !1;
            e.errorHandler && i.setErrorHandler(e.errorHandler),
              e.logger && (i.setLogHandler(e.logger), i.setLogLevel(i.LogLevel.NOTSET)),
              void 0 !== e.logLevel && i.setLogLevel(e.logLevel);
            try {
              (function (e) {
                if ("object" == typeof e && null !== e) {
                  var t = e,
                    r = t.errorHandler,
                    n = t.eventDispatcher,
                    i = t.logger;
                  if (r && "function" != typeof r.handleError) throw new Error(h(N.INVALID_ERROR_HANDLER, V));
                  if (n && "function" != typeof n.dispatchEvent) throw new Error(h(N.INVALID_EVENT_DISPATCHER, V));
                  if (i && "function" != typeof i.log) throw new Error(h(N.INVALID_LOGGER, V));
                  return !0;
                }
                throw new Error(h(N.INVALID_CONFIG, V));
              })(e),
                (t = !0);
            } catch (e) {
              Qe.error(e);
            }
            var r = void 0;
            null == e.eventDispatcher
              ? ((r = new o.LocalStoragePendingEventsDispatcher({ eventDispatcher: F })), $e || (r.sendPendingEvents(), ($e = !0)))
              : (r = e.eventDispatcher);
            var n = e.closingEventDispatcher;
            !e.eventDispatcher && !n && window.navigator && "sendBeacon" in window.navigator && (n = M);
            var a = e.eventBatchSize,
              s = e.eventFlushInterval;
            (function (e) {
              return !("number" != typeof e || !R.isSafeInteger(e)) && e >= 1;
            })(e.eventBatchSize) || (Qe.warn("Invalid eventBatchSize %s, defaulting to %s", e.eventBatchSize, 10), (a = 10)),
              (function (e) {
                return !("number" != typeof e || !R.isSafeInteger(e)) && e > 0;
              })(e.eventFlushInterval) ||
                (Qe.warn("Invalid eventFlushInterval %s, defaulting to %s", e.eventFlushInterval, 1e3), (s = 1e3));
            var u = i.getErrorHandler(),
              c = new Je({ logger: Qe, errorHandler: u }),
              E = {
                dispatcher: r,
                closingDispatcher: n,
                flushInterval: s,
                batchSize: a,
                maxQueueSize: e.eventMaxQueueSize || 1e4,
                notificationCenter: c
              },
              f = l(l({ clientEngine: "javascript-sdk" }, e), {
                eventProcessor: We(E),
                logger: Qe,
                errorHandler: u,
                datafileManager: e.sdkKey ? Ze(e.sdkKey, Qe, e.datafile, e.datafileOptions) : void 0,
                notificationCenter: c,
                isValidInstance: t
              }),
              d = new qe(f);
            try {
              if ("function" == typeof window.addEventListener) {
                var p = "onpagehide" in window ? "pagehide" : "unload";
                window.addEventListener(
                  p,
                  function () {
                    d.close();
                  },
                  !1
                );
              }
            } catch (e) {
              Qe.error(T.UNABLE_TO_ATTACH_UNLOAD, "INDEX_BROWSER", e.message);
            }
            return d;
          } catch (e) {
            return Qe.error(e), null;
          }
        },
        tt = function () {
          $e = !1;
        },
        rt = {
          logging: K,
          errorHandler: P,
          eventDispatcher: F,
          sendBeaconEventDispatcher: M,
          enums: C,
          setLogger: i.setLogHandler,
          setLogLevel: i.setLogLevel,
          createInstance: et,
          __internalResetRetryState: tt,
          OptimizelyDecideOption: t.N1
        };
      Object.defineProperty(t, "setLogger", {
        enumerable: !0,
        get: function () {
          return i.setLogHandler;
        }
      }),
        (t.createInstance = et);
    },
    84952: (e, t, r) => {
      var n = r(33979),
        i = r(99767),
        o = i;
      (o.v1 = n), (o.v4 = i), (e.exports = o);
    },
    5450: (e) => {
      for (var t = [], r = 0; r < 256; ++r) t[r] = (r + 256).toString(16).substr(1);
      e.exports = function (e, r) {
        var n = r || 0,
          i = t;
        return [
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          "-",
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]],
          i[e[n++]]
        ].join("");
      };
    },
    89490: (e) => {
      var t =
        ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto));
      if (t) {
        var r = new Uint8Array(16);
        e.exports = function () {
          return t(r), r;
        };
      } else {
        var n = new Array(16);
        e.exports = function () {
          for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), (n[t] = (e >>> ((3 & t) << 3)) & 255);
          return n;
        };
      }
    },
    33979: (e, t, r) => {
      var n,
        i,
        o = r(89490),
        a = r(5450),
        s = 0,
        u = 0;
      e.exports = function (e, t, r) {
        var l = (t && r) || 0,
          c = t || [],
          E = (e = e || {}).node || n,
          f = void 0 !== e.clockseq ? e.clockseq : i;
        if (null == E || null == f) {
          var d = o();
          null == E && (E = n = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == f && (f = i = 16383 & ((d[6] << 8) | d[7]));
        }
        var p = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
          g = void 0 !== e.nsecs ? e.nsecs : u + 1,
          I = p - s + (g - u) / 1e4;
        if ((I < 0 && void 0 === e.clockseq && (f = (f + 1) & 16383), (I < 0 || p > s) && void 0 === e.nsecs && (g = 0), g >= 1e4))
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (s = p), (u = g), (i = f);
        var _ = (1e4 * (268435455 & (p += 122192928e5)) + g) % 4294967296;
        (c[l++] = (_ >>> 24) & 255), (c[l++] = (_ >>> 16) & 255), (c[l++] = (_ >>> 8) & 255), (c[l++] = 255 & _);
        var h = ((p / 4294967296) * 1e4) & 268435455;
        (c[l++] = (h >>> 8) & 255),
          (c[l++] = 255 & h),
          (c[l++] = ((h >>> 24) & 15) | 16),
          (c[l++] = (h >>> 16) & 255),
          (c[l++] = (f >>> 8) | 128),
          (c[l++] = 255 & f);
        for (var v = 0; v < 6; ++v) c[l + v] = E[v];
        return t || a(c);
      };
    },
    99767: (e, t, r) => {
      var n = r(89490),
        i = r(5450);
      e.exports = function (e, t, r) {
        var o = (t && r) || 0;
        "string" == typeof e && ((t = "binary" === e ? new Array(16) : null), (e = null));
        var a = (e = e || {}).random || (e.rng || n)();
        if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) for (var s = 0; s < 16; ++s) t[o + s] = a[s];
        return t || i(a);
      };
    },
    68491: (e) => {
      !(function () {
        function t(e, t) {
          var r, n, i, o, a, s, u, l;
          for (r = 3 & e.length, n = e.length - r, i = t, a = 3432918353, s = 461845907, l = 0; l < n; )
            (u =
              (255 & e.charCodeAt(l)) |
              ((255 & e.charCodeAt(++l)) << 8) |
              ((255 & e.charCodeAt(++l)) << 16) |
              ((255 & e.charCodeAt(++l)) << 24)),
              ++l,
              (i =
                27492 +
                (65535 &
                  (o =
                    (5 *
                      (65535 &
                        (i =
                          ((i ^= u =
                            ((65535 &
                              (u = ((u = ((65535 & u) * a + ((((u >>> 16) * a) & 65535) << 16)) & 4294967295) << 15) | (u >>> 17))) *
                              s +
                              ((((u >>> 16) * s) & 65535) << 16)) &
                            4294967295) <<
                            13) |
                          (i >>> 19))) +
                      (((5 * (i >>> 16)) & 65535) << 16)) &
                    4294967295)) +
                (((58964 + (o >>> 16)) & 65535) << 16));
          switch (((u = 0), r)) {
            case 3:
              u ^= (255 & e.charCodeAt(l + 2)) << 16;
            case 2:
              u ^= (255 & e.charCodeAt(l + 1)) << 8;
            case 1:
              i ^= u =
                ((65535 &
                  (u =
                    ((u = ((65535 & (u ^= 255 & e.charCodeAt(l))) * a + ((((u >>> 16) * a) & 65535) << 16)) & 4294967295) << 15) |
                    (u >>> 17))) *
                  s +
                  ((((u >>> 16) * s) & 65535) << 16)) &
                4294967295;
          }
          return (
            (i ^= e.length),
            (i = (2246822507 * (65535 & (i ^= i >>> 16)) + (((2246822507 * (i >>> 16)) & 65535) << 16)) & 4294967295),
            (i = (3266489909 * (65535 & (i ^= i >>> 13)) + (((3266489909 * (i >>> 16)) & 65535) << 16)) & 4294967295),
            (i ^= i >>> 16) >>> 0
          );
        }
        var r = t;
        (r.v2 = function (e, t) {
          for (var r, n = e.length, i = t ^ n, o = 0; n >= 4; )
            (r =
              1540483477 *
                (65535 &
                  (r =
                    (255 & e.charCodeAt(o)) |
                    ((255 & e.charCodeAt(++o)) << 8) |
                    ((255 & e.charCodeAt(++o)) << 16) |
                    ((255 & e.charCodeAt(++o)) << 24))) +
              (((1540483477 * (r >>> 16)) & 65535) << 16)),
              (i =
                (1540483477 * (65535 & i) + (((1540483477 * (i >>> 16)) & 65535) << 16)) ^
                (r = 1540483477 * (65535 & (r ^= r >>> 24)) + (((1540483477 * (r >>> 16)) & 65535) << 16))),
              (n -= 4),
              ++o;
          switch (n) {
            case 3:
              i ^= (255 & e.charCodeAt(o + 2)) << 16;
            case 2:
              i ^= (255 & e.charCodeAt(o + 1)) << 8;
            case 1:
              i = 1540483477 * (65535 & (i ^= 255 & e.charCodeAt(o))) + (((1540483477 * (i >>> 16)) & 65535) << 16);
          }
          return (i = 1540483477 * (65535 & (i ^= i >>> 13)) + (((1540483477 * (i >>> 16)) & 65535) << 16)), (i ^= i >>> 15) >>> 0;
        }),
          (r.v3 = t),
          (e.exports = r);
      })();
    }
  }
]);
