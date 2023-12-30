(() => {
  var e = {
      4991: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, i) {
                  void 0 === i && (i = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r && !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      }
                    }),
                    Object.defineProperty(e, i, r);
                }
              : function (e, t, n, i) {
                  void 0 === i && (i = n), (e[i] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), r(n(910), t);
      },
      910: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SessionStorageAdapter = t.SessionStorage = void 0);
        const n = "__SESSION_STORAGE__";
        class i {
          constructor() {
            (this.storage = chrome.storage.local),
              chrome.runtime.onStartup.addListener(() => {
                this.clear();
              });
          }
          async get(e) {
            if (await this.sessionStorageEmpty()) return {};
            const t = void 0 === e,
              n = Array.isArray(e);
            if (t) return await this.sessionStorage();
            const i = await this.sessionStorage();
            return n
              ? e.reduce((e, t) => ({ ...e, ...(i.hasOwnProperty(t) && { [t]: i[t] }) }), {})
              : { ...(i.hasOwnProperty(e) && { [e]: i[e] }) };
          }
          async set(e) {
            if (await this.sessionStorageEmpty()) return await this.storage.set({ [n]: e });
            const t = await this.sessionStorage();
            await this.storage.set({ [n]: { ...t, ...e } });
          }
          async has(e) {
            if (await this.sessionStorageEmpty()) return !1;
            const t = await this.sessionStorage();
            return Boolean(t[e]);
          }
          async remove(e) {
            if (await this.sessionStorageEmpty()) return;
            const t = await this.sessionStorage();
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              delete t[e];
            }),
              await this.storage.set({ [n]: t });
          }
          async clear() {
            await this.storage.set({ [n]: {} });
          }
          async sessionStorage() {
            return { ...((await this.storage.get(n))[n] ?? {}) };
          }
          async sessionStorageEmpty() {
            return 0 === Object.keys(await this.sessionStorage()).length;
          }
        }
        (t.SessionStorage = i),
          (t.SessionStorageAdapter = class {
            static adapt() {
              chrome.storage.session || (chrome.storage.session = new i());
            }
          });
      },
      3436: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__decorate) ||
          function (e, t, n, i) {
            var r,
              o = arguments.length,
              a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
            else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BgPayloadBuilder = void 0);
        const r = n(6700),
          o = n(5072);
        let a = class {
          constructor() {
            this.server = {};
          }
          withUrl(e, t = !1) {
            return (this.url = { value: e, encoded: t }), this;
          }
          withTimestamp(e) {
            return (this.timestamp = e), this;
          }
          withPageAttributes(e, t) {
            return (this.pageAttrs = { title: e, name: t }), this;
          }
          withContextAttributes(e) {
            return (this.contextAttrs = { referrer: e }), this;
          }
          withRequestTab(e, t) {
            return (this.requestTab = { id: e, initiatorId: t }), this;
          }
          withFrame(e, t) {
            return (this.frame = { id: e, parentId: t }), this;
          }
          withOS(e, t) {
            return (this.os = { name: e, version: t }), this;
          }
          withBrowser(e, t) {
            return (this.browser = { name: e, version: t }), this;
          }
          withHttpRequest(e, t) {
            return (this.request = { headers: t, method: e }), this;
          }
          withHttpResponse(e) {
            return (this.response = e), this;
          }
          withSequence(e) {
            return (this.mainFrame = { navigationSequence: e }), this;
          }
          withServer(e) {
            return (this.server = { api: e }), this;
          }
          withEventDef(e, t, n) {
            return (this.eventDef = { id: e, type: t, subType: n }), this;
          }
          withPanelistDef(e, t, n, i) {
            return (this.panelistDef = { panelistId: e, panelId: t, partnerId: n, distributorId: i }), this;
          }
          make() {
            if (void 0 === this.url) throw new Error("BgPayloadBuilder: URL is not specified");
            if (void 0 === this.timestamp) throw new Error("BgPayloadBuilder: timestamp is not specified");
            if (void 0 === this.pageAttrs) throw new Error("BgPayloadBuilder: pageAttributes is not specified");
            if (void 0 === this.contextAttrs) throw new Error("BgPayloadBuilder: contextAttributes is not specified");
            if (void 0 === this.requestTab) throw new Error("BgPayloadBuilder: requestTab is not specified");
            if (void 0 === this.frame) throw new Error("BgPayloadBuilder: frame is not specified");
            if (void 0 === this.os) throw new Error("BgPayloadBuilder: OS is not specified");
            if (void 0 === this.mainFrame) throw new Error("BgPayloadBuilder: mainFrame is not specified");
            if (void 0 === this.panelistDef) throw new Error("BgPayloadBuilder: panelistDef is not specified");
            if (void 0 === this.browser) throw new Error("BgPayloadBuilder: browser is not specified");
            if (void 0 === this.eventDef) throw new Error("BgPayloadBuilder: eventDef is not specified");
            if (void 0 === this.request) throw new Error("BgPayloadBuilder: request is not specified");
            if (void 0 === this.response) throw new Error("BgPayloadBuilder: response is not specified");
            if (void 0 === this.server) throw new Error("BgPayloadBuilder: server is not specified");
            const e = {
              url: this.url,
              timestamp: this.timestamp,
              pageAttributes: this.pageAttrs,
              contextAttributes: this.contextAttrs,
              method: o.RequestMethod.REQUEST,
              tab: this.requestTab,
              frame: this.frame,
              os: this.os,
              server: this.server,
              mainFrame: this.mainFrame,
              browser: this.browser,
              request: this.request,
              response: this.response,
              eventDef: this.eventDef,
              partition: o.Partition.BG,
              type: "INTERNAL_BROWSER_EXTENSION",
              panelistDef: this.panelistDef
            };
            return this.reset(), e;
          }
          reset() {
            return (
              (this.url = void 0),
              (this.timestamp = void 0),
              (this.pageAttrs = void 0),
              (this.contextAttrs = void 0),
              (this.requestTab = void 0),
              (this.frame = void 0),
              (this.os = void 0),
              (this.mainFrame = void 0),
              (this.panelistDef = void 0),
              (this.eventDef = void 0),
              (this.request = void 0),
              (this.browser = void 0),
              (this.server = {}),
              (this.response = void 0),
              this
            );
          }
        };
        (a = i([(0, r.injectable)()], a)), (t.BgPayloadBuilder = a);
      },
      3003: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__decorate) ||
          function (e, t, n, i) {
            var r,
              o = arguments.length,
              a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
            else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.FgPayloadBuilder = void 0);
        const r = n(6700),
          o = n(5072);
        let a = class {
          constructor() {
            this.bgNavigations = [];
          }
          withLibVersion(e) {
            return (this.libVersion = e), this;
          }
          withUrl(e, t = !1) {
            return (this.url = { value: e, encoded: t }), this;
          }
          withTimestamp(e) {
            return (this.timestamp = e), this;
          }
          withPageAttributes(e, t) {
            return (this.pageAttrs = { title: e, name: t }), this;
          }
          withContextAttributes(e) {
            return (this.contextAttrs = { referrer: e }), this;
          }
          withMethod(e) {
            return (this.method = e), this;
          }
          withRequestTab(e, t) {
            return (this.requestTab = { id: e, initiatorId: t }), this;
          }
          withFrame(e, t) {
            return (this.frame = { id: e, parentId: t }), this;
          }
          withOS(e, t) {
            return (this.os = { name: e, version: t }), this;
          }
          withMainFrame(e) {
            return (this.mainFrame = { navigationSequence: e }), this;
          }
          addBgNavigation(e) {
            return this.bgNavigations.push(e), this;
          }
          withPanelistDef(e, t, n, i) {
            return (this.panelistDef = { panelistId: e, panelId: t, partnerId: n, distributorId: i }), this;
          }
          make() {
            if (void 0 === this.url) throw new Error("FgPayloadBuilder: URL is not specified");
            if (void 0 === this.timestamp) throw new Error("FgPayloadBuilder: timestamp is not specified");
            if (void 0 === this.pageAttrs) throw new Error("FgPayloadBuilder: pageAttributes is not specified");
            if (void 0 === this.contextAttrs) throw new Error("FgPayloadBuilder: contextAttributes is not specified");
            if (void 0 === this.method) throw new Error("FgPayloadBuilder: method is not specified");
            if (void 0 === this.requestTab) throw new Error("FgPayloadBuilder: requestTab is not specified");
            if (void 0 === this.frame) throw new Error("FgPayloadBuilder: frame is not specified");
            if (void 0 === this.os) throw new Error("FgPayloadBuilder: OS is not specified");
            if (void 0 === this.mainFrame) throw new Error("FgPayloadBuilder: mainFrame is not specified");
            if (void 0 === this.panelistDef) throw new Error("FgPayloadBuilder: panelistDef is not specified");
            const e = {
              libVersion: this.libVersion,
              url: this.url,
              timestamp: this.timestamp,
              pageAttributes: this.pageAttrs,
              contextAttributes: this.contextAttrs,
              method: this.method,
              tab: this.requestTab,
              frame: this.frame,
              os: this.os,
              mainFrame: this.mainFrame,
              type: "INTERNAL_BROWSER_EXTENSION",
              partition: o.Partition.FG,
              nested: this.bgNavigations,
              panelistDef: this.panelistDef
            };
            return this.reset(), e;
          }
          reset() {
            return (
              (this.url = void 0),
              (this.timestamp = void 0),
              (this.pageAttrs = void 0),
              (this.contextAttrs = void 0),
              (this.method = void 0),
              (this.requestTab = void 0),
              (this.frame = void 0),
              (this.os = void 0),
              (this.mainFrame = void 0),
              (this.bgNavigations = []),
              (this.panelistDef = void 0),
              this
            );
          }
        };
        (a = i([(0, r.injectable)()], a)), (t.FgPayloadBuilder = a);
      },
      6657: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__decorate) ||
          function (e, t, n, i) {
            var r,
              o = arguments.length,
              a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
            else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.HttpResponseBuilder = void 0);
        const r = n(6700);
        let o = class {
          addHeaders(e, t) {
            return void 0 === this.headers && (this.headers = []), this.headers.push({ name: e, value: t }), this;
          }
          withStatusCode(e) {
            return (this.statusCode = e), this;
          }
          withStatusLine(e) {
            return (this.statusLine = e), this;
          }
          withFromCache(e) {
            return (this.isFromCache = e), this;
          }
          withRedirectUrl(e) {
            return (this.redirectUrl = e), this;
          }
          withError(e) {
            return (this.error = e), this;
          }
          make() {
            const e = {
              headers: this.headers,
              isFromCache: this.isFromCache,
              redirectUrl: this.redirectUrl,
              statusCode: this.statusCode,
              statusLine: this.statusLine,
              error: this.error
            };
            return this.reset(), e;
          }
          reset() {
            return (
              (this.headers = void 0),
              (this.statusCode = void 0),
              (this.statusLine = void 0),
              (this.isFromCache = void 0),
              (this.redirectUrl = void 0),
              (this.error = void 0),
              this
            );
          }
        };
        (o = i([(0, r.injectable)()], o)), (t.HttpResponseBuilder = o);
      },
      647: (e, t) => {
        "use strict";
        var n, i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NavigationMethod = t.NavigationStatus = void 0),
          ((i = t.NavigationStatus || (t.NavigationStatus = {})).INITIAL = "INITIAL"),
          (i.SUCCESS = "SUCCESS"),
          (i.FAILED = "FAILED"),
          (i.LOADING = "LOADING"),
          ((n = t.NavigationMethod || (t.NavigationMethod = {})).INITIAL = "initial"),
          (n.HTTP_REQUEST = "request"),
          (n.URL_REWRITE = "url_rewrite");
      },
      6074: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__decorate) ||
          function (e, t, n, i) {
            var r,
              o = arguments.length,
              a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
            else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Compressor = void 0);
        const r = n(6700),
          o = n(5708);
        let a = class {
          compress(e) {
            return o.default.compressToUTF16(e);
          }
          decompress(e) {
            return o.default.decompressFromUTF16(e);
          }
        };
        (a = i([(0, r.injectable)()], a)), (t.Compressor = a);
      },
      1749: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isRealTabOnly = t.mainFrameOnly = t.libEnabled = t.allowedUrlsOnly = t.notPrerender = void 0);
        const i = n(3740);
        (t.notPrerender = function () {
          return function (e, t, n) {
            const r = n.value;
            n.value = function (e) {
              (0, i.isPrerender)(e.documentLifecycle) || r.apply(this, arguments);
            };
          };
        }),
          (t.allowedUrlsOnly = function () {
            return function (e, t, n) {
              const r = n.value;
              n.value = function (e) {
                (0, i.isAllowedUrl)(e.url) && r.apply(this, arguments);
              };
            };
          }),
          (t.libEnabled = function () {
            return function (e, t, n) {
              const i = n.value;
              n.value = function (e) {
                globalThis[Symbol.for("__URL_SAFE_CHECK_OPTIONS__")].enabled && i.apply(this, arguments);
              };
            };
          }),
          (t.mainFrameOnly = function () {
            return function (e, t, n) {
              const r = n.value;
              n.value = function (e) {
                (0, i.isMainFrame)(e.frameId) && r.apply(this, arguments);
              };
            };
          }),
          (t.isRealTabOnly = function () {
            return function (e, t, n) {
              const r = n.value;
              n.value = function (e) {
                (0, i.isRealTab)(e.tabId) && r.apply(this, arguments);
              };
            };
          });
      },
      7809: (e, t) => {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DiTypes = void 0),
          ((n = t.DiTypes || (t.DiTypes = {})).TASK_MANAGER = "TASK_MANAGER"),
          (n.HTTP_CLIENT = "HTTP_CLIENT"),
          (n.OPTIONS = "OPTIONS"),
          (n.ENV = "ENV"),
          (n.STREAM_MANAGER = "STREAM_MANAGER"),
          (n.SCRIPT_MANAGER = "SCRIPT_MANAGER"),
          (n.LOGGER = "LOGGER"),
          (n.DISPATCHER = "DISPATCHER"),
          (n.DI = "DI"),
          (n.COMPRESSOR = "COMPRESSOR"),
          (n.SENSITIVE_DATA_FILTER = "SENSITIVE_DATA_FILTER"),
          (n.HTTP_RESPONSE_BUILDER = "HTTP_RESPONSE_BUILDER"),
          (n.CHECK_SAFETY_SERVICE = "CHECK_SAFETY_SERVICE"),
          (n.WEB_NAV_STORAGE = "WEB_NAV_STORAGE"),
          (n.WEB_NAV_PROCESSOR = "WEB_NAV_PROCESSOR"),
          (n.WEB_NAV_MANAGER = "WEB_NAV_MANAGER"),
          (n.FG_NAV_MANAGER = "FG_NAV_MANAGER"),
          (n.FG_PAYLOAD_BUILDER = "FG_PAYLOAD_BUILDER"),
          (n.FG_NAV_STORAGE = "FG_NAV_STORAGE"),
          (n.FG_NAV_PROCESSOR = "FG_NAV_PROCESSOR"),
          (n.BG_PAYLOAD_BUILDER = "BG_PAYLOAD_BUILDER"),
          (n.BG_NAV_STORAGE = "BG_NAV_STORAGE");
      },
      3762: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.mapToRequestMethod = void 0);
        const i = n(5072),
          r = n(647);
        t.mapToRequestMethod = function (e) {
          return {
            [r.NavigationMethod.INITIAL]: i.RequestMethod.REQUEST,
            [r.NavigationMethod.HTTP_REQUEST]: i.RequestMethod.REQUEST,
            [r.NavigationMethod.URL_REWRITE]: i.RequestMethod.URL_REWRITE
          }[e];
        };
      },
      9696: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CheckSafetyService = void 0);
        const a = n(6700),
          s = n(7809),
          c = n(8028),
          u = n(9268),
          d = n(9362),
          l = n(1067),
          h = n(5642),
          f = n(6958);
        let p = class {
          constructor(e, t, n, i, r) {
            (this.httpClient = e), (this.dispatcher = t), (this.sensitiveData = n), (this.logger = i), (this.options = r);
          }
          async check(e, t) {
            const n = { name: c.EventList.CHECK_URL_SAFETY_RESULT, payload: { tabId: e, safe: h.SafetyStatus.UNKNOWN, url: t.url.value } };
            try {
              const e = this.sensitiveData.filter(t);
              n.payload.url = e.url.value;
              const i = "NO_NAVIGATION" === this.options.mode ? await this.basic(e) : await this.full(e);
              n.payload.safe = i.safe ? h.SafetyStatus.SAFE : h.SafetyStatus.UNSAFE;
            } catch (e) {
              this.logger.warn(`CheckSafetyService: could not check an url ${t.url.value}`);
            }
            await this.dispatcher.emit(n);
          }
          async full(e) {
            return await this.httpClient.full(e);
          }
          async basic(e) {
            const t = { url: e.url };
            return await this.httpClient.basic(t);
          }
        };
        (p = i(
          [
            (0, a.injectable)(),
            o(0, (0, a.inject)(s.DiTypes.HTTP_CLIENT)),
            o(1, (0, a.inject)(s.DiTypes.DISPATCHER)),
            o(2, (0, a.inject)(s.DiTypes.SENSITIVE_DATA_FILTER)),
            o(3, (0, a.inject)(s.DiTypes.LOGGER)),
            o(4, (0, a.inject)(s.DiTypes.OPTIONS)),
            r("design:paramtypes", [u.HttpClient, d.Dispatcher, l.SensitiveDataFilter, f.Logger, Object])
          ],
          p
        )),
          (t.CheckSafetyService = p);
      },
      5642: (e, t) => {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SafetyStatus = void 0),
          ((n = t.SafetyStatus || (t.SafetyStatus = {})).SAFE = "SAFE"),
          (n.UNSAFE = "UNSAFE"),
          (n.UNKNOWN = "UNKNOWN");
      },
      9362: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Dispatcher = void 0);
        const a = n(6700),
          s = n(7809);
        let c = class {
          constructor(e) {
            (this.di = e), (this.listeners = new Map());
          }
          async emit(e) {
            if ((this.di.get(s.DiTypes.LOGGER).detailed("Dispatcher - emit", { eventName: e.name }, () => e), !this.listeners.has(e.name)))
              return;
            const t = this.listeners.get(e.name);
            for (const n of t) await n(e);
          }
          listen(e, t) {
            this.listeners.has(e) || this.listeners.set(e, []);
            const n = this.listeners.get(e);
            n.push(t), this.listeners.set(e, n);
          }
        };
        (c = i([(0, a.injectable)(), o(0, (0, a.inject)(s.DiTypes.DI)), r("design:paramtypes", [a.Container])], c)), (t.Dispatcher = c);
      },
      8028: (e, t) => {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EventList = void 0),
          ((n = t.EventList || (t.EventList = {})).WEB_NAV_CREATED = "WEB_NAV_CREATED"),
          (n.FG_NAV_COMPLETED = "FG_NAV_COMPLETED"),
          (n.CHECK_URL_SAFETY_RESULT = "CHECK_URL_SAFETY_RESULT"),
          (n.LIB_READY = "LIB_READY");
      },
      4972: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__decorate) ||
          function (e, t, n, i) {
            var r,
              o = arguments.length,
              a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
            else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Env = void 0);
        const r = n(6700),
          o = n(8258),
          a = n(7327);
        let s = class {
          getOS() {
            return null == this.os && (this.os = (0, o.getOsVersionIgnoreLinter)()), this.os;
          }
          getBrowser() {
            return null == this.browser && (this.browser = (0, a.getBrowserVersionIgnoreLinter)()), this.browser;
          }
        };
        (s = i([(0, r.injectable)()], s)), (t.Env = s);
      },
      6478: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.FgNavManager = void 0);
        const a = n(6700),
          s = n(7809),
          c = n(9362),
          u = n(9575),
          d = n(3740),
          l = n(8028),
          h = n(855),
          f = n(8624),
          p = n(647);
        let g = class {
          constructor(e, t, n, i) {
            (this.storage = e), (this.dispatcher = t), (this.fgNavStorage = n), (this.script = i);
          }
          async historyStateUpdated(e) {
            const t = await this.fgNavStorage.getOrCreate(e.tabId);
            t.url !== e.url &&
              (t.status === p.NavigationStatus.LOADING && (await this.finalize(t, p.NavigationStatus.SUCCESS)),
              (t.method = p.NavigationMethod.URL_REWRITE),
              (t.status = p.NavigationStatus.LOADING),
              (t.url = e.url),
              await (0, d.delay)(1500),
              await this.finalize(t, p.NavigationStatus.SUCCESS));
          }
          async webNavigationBeforeNavigate(e) {
            const t = await this.fgNavStorage.getOrCreate(e.tabId);
            (t.url === e.url && t.status === p.NavigationStatus.FAILED) ||
              ((t.status = p.NavigationStatus.LOADING),
              (t.method = p.NavigationMethod.HTTP_REQUEST),
              (t.url = e.url),
              await this.fgNavStorage.save(t));
          }
          async webNavigationComplete(e) {
            const t = await this.fgNavStorage.getOrCreate(e.tabId);
            t.status !== p.NavigationStatus.SUCCESS && ((t.url = e.url), await this.finalize(t, p.NavigationStatus.SUCCESS));
          }
          async webNavigationErrorOccurred(e) {
            const t = await this.fgNavStorage.getOrCreate(e.tabId);
            (t.url === e.url && t.status === p.NavigationStatus.FAILED) ||
              ((t.url = e.url), await this.finalize(t, p.NavigationStatus.FAILED));
          }
          async webRequestHeadersSent(e) {
            const t = await this.storage.getOrCreate(e.tabId, e.frameId);
            (t.webRequestHeadersSent = e), await this.storage.save(t, e.frameId);
          }
          async webRequestHeadersReceived(e) {
            const t = await this.storage.getOrCreate(e.tabId, e.frameId);
            (t.webRequestHeadersReceived = e), await this.storage.save(t, e.frameId);
          }
          async webRequestBeforeRedirect(e) {
            const t = await this.storage.getOrCreate(e.tabId, e.frameId);
            (t.webRequestBeforeRedirect = e),
              (t.timestamp = Date.now()),
              (t.initiatorTabId = await this.getInitiatorTabId(e.tabId)),
              await this.storage.remove(e.tabId, e.frameId);
            const n = { name: l.EventList.WEB_NAV_CREATED, payload: t };
            await this.dispatcher.emit(n);
          }
          async getInitiatorTabId(e) {
            return (await this.fgNavStorage.getOrCreate(e)).initiatorTabId;
          }
          async getSequence(e) {
            const t = await this.fgNavStorage.getOrCreate(e);
            return 0 === t.sequence ? 1 : t.sequence;
          }
          async tabCreated(e) {
            if (void 0 === e.id) return;
            const t = await this.fgNavStorage.getOrCreate(e.id);
            (t.initiatorTabId = e.openerTabId), await this.fgNavStorage.save(t);
          }
          async createdNavigationTarget(e) {
            if (void 0 === e.tabId) return;
            const t = await this.fgNavStorage.getOrCreate(e.tabId);
            (t.initiatorTabId = e.sourceTabId), await this.fgNavStorage.save(t);
          }
          async finalize(e, t) {
            (e.timestamp = Date.now()), (e.status = t), (e.pageData = await this.script.getPageData(e.tabId)), (e.sequence += 1);
            const n = { name: l.EventList.FG_NAV_COMPLETED, payload: { ...e } };
            await this.fgNavStorage.save(e), await this.storage.remove(e.tabId, 0), await this.dispatcher.emit(n);
          }
        };
        (g = i(
          [
            (0, a.injectable)(),
            o(0, (0, a.inject)(s.DiTypes.WEB_NAV_STORAGE)),
            o(1, (0, a.inject)(s.DiTypes.DISPATCHER)),
            o(2, (0, a.inject)(s.DiTypes.FG_NAV_STORAGE)),
            o(3, (0, a.inject)(s.DiTypes.SCRIPT_MANAGER)),
            r("design:paramtypes", [h.WebNavStorage, c.Dispatcher, f.FgNavStorage, u.ScriptManager])
          ],
          g
        )),
          (t.FgNavManager = g);
      },
      2620: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.FgNavProcessor = void 0);
        const a = n(6700),
          s = n(3740),
          c = n(3762),
          u = n(7809),
          d = n(9362),
          l = n(3003),
          h = n(4972),
          f = n(9696),
          p = n(855),
          g = n(6797),
          y = n(8624);
        let v = class {
          constructor(e, t, n, i, r, o, a, s) {
            (this.storage = e),
              (this.dispatcher = t),
              (this.fgNavStorage = n),
              (this.builder = i),
              (this.options = r),
              (this.env = o),
              (this.checkSafety = a),
              (this.bgNavStorage = s);
          }
          async process(e) {
            this.builder
              .withLibVersion((0, s.getLibVersion)())
              .withUrl(e.url)
              .withTimestamp(`${e.timestamp}`)
              .withMethod((0, c.mapToRequestMethod)(e.method))
              .withRequestTab(e.tabId, e.initiatorTabId)
              .withFrame(0, -1)
              .withOS(this.env.getOS().name, this.env.getOS().version)
              .withMainFrame(e.sequence)
              .withPanelistDef(this.options.panalyticsId, this.options.pinstanceId, this.options.partnerId, this.options.distributorId)
              .withPageAttributes(e.pageData.title, e.pageData.name)
              .withContextAttributes(e.pageData.referrer);
            const t = await this.bgNavStorage.getAll();
            await this.bgNavStorage.clean(), t.forEach((e) => this.builder.addBgNavigation(e));
            const n = this.builder.make();
            await this.checkSafety.check(e.tabId, n);
          }
        };
        (v = i(
          [
            (0, a.injectable)(),
            o(0, (0, a.inject)(u.DiTypes.WEB_NAV_STORAGE)),
            o(1, (0, a.inject)(u.DiTypes.DISPATCHER)),
            o(2, (0, a.inject)(u.DiTypes.FG_NAV_STORAGE)),
            o(3, (0, a.inject)(u.DiTypes.FG_PAYLOAD_BUILDER)),
            o(4, (0, a.inject)(u.DiTypes.OPTIONS)),
            o(5, (0, a.inject)(u.DiTypes.ENV)),
            o(6, (0, a.inject)(u.DiTypes.CHECK_SAFETY_SERVICE)),
            o(7, (0, a.inject)(u.DiTypes.BG_NAV_STORAGE)),
            r("design:paramtypes", [
              p.WebNavStorage,
              d.Dispatcher,
              y.FgNavStorage,
              l.FgPayloadBuilder,
              Object,
              h.Env,
              f.CheckSafetyService,
              g.BgNavStorage
            ])
          ],
          v
        )),
          (t.FgNavProcessor = v);
      },
      9268: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.HttpClient = void 0);
        const a = n(6700),
          s = n(7809),
          c = n(6958),
          u = n(6074);
        let d = class {
          constructor(e, t, n) {
            (this.options = e), (this.logger = t), (this.compressor = n);
          }
          async basic(e) {
            return await this.send("/secure/urls/checkSafety/basic", e);
          }
          async full(e) {
            return await this.send("/secure/urls/checkSafety", e);
          }
          async send(e, t) {
            this.logger.detailed("http-client - payload for", { url: t.url.value }, () => t);
            const n = JSON.stringify(t),
              i = this.options.compressRequest ? this.compressor.compress(n) : n,
              r = this.options.compressRequest ? "application/octet-stream" : "application/json;charset=utf-8",
              o = await fetch(this.endpoint(e), { method: "POST", body: i, headers: { "Content-Type": r } });
            return await o.json();
          }
          endpoint(e) {
            return `${this.options.apiUrl}${e}`;
          }
        };
        (d = i(
          [
            (0, a.injectable)(),
            o(0, (0, a.inject)(s.DiTypes.OPTIONS)),
            o(1, (0, a.inject)(s.DiTypes.LOGGER)),
            o(2, (0, a.inject)(s.DiTypes.COMPRESSOR)),
            r("design:paramtypes", [Object, c.Logger, u.Compressor])
          ],
          d
        )),
          (t.HttpClient = d);
      },
      5072: (e, t) => {
        "use strict";
        var n, i, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Partition = t.RequestMethod = t.EventType = void 0),
          ((r = t.EventType || (t.EventType = {})).MAIN = "main"),
          (r.RESOURCE = "resource"),
          ((i = t.RequestMethod || (t.RequestMethod = {})).REQUEST = "request"),
          (i.URL_REWRITE = "url_rewrite"),
          ((n = t.Partition || (t.Partition = {})).FG = "fg"),
          (n.BG = "bg");
      },
      6958: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Logger = void 0);
        const a = n(6700),
          s = n(7809);
        let c = class {
          constructor(e) {
            this.options = e;
          }
          log(...e) {
            this.options.logging && console.log.apply(console.log, e);
          }
          warn(...e) {
            this.options.logging && console.warn.apply(console.warn, e);
          }
          groupCollapsed(...e) {
            this.options.logging && console.groupCollapsed.apply(console.groupCollapsed, e);
          }
          groupEnd(...e) {
            this.options.logging && console.groupEnd.apply(console.groupEnd, e);
          }
          detailed(e, t, n) {
            if (!this.options.logging) return;
            let i = "";
            ["tabId", "frameId", "requestId", "eventName"].forEach((e) => {
              void 0 !== t[e] && (i += `${e}: ${t[e]},`);
            }),
              (i = i.slice(0, -1));
            let r = `[${i}]: ${e}`;
            void 0 !== t.url && (r = `${r} ${t.url}`), this.groupCollapsed(r);
            let o = n();
            "object" == typeof o && (o = JSON.stringify(o, null, 2)), this.log(o), this.groupEnd();
          }
        };
        (c = i([(0, a.injectable)(), o(0, (0, a.inject)(s.DiTypes.OPTIONS)), r("design:paramtypes", [Object])], c)), (t.Logger = c);
      },
      9575: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__decorate) ||
          function (e, t, n, i) {
            var r,
              o = arguments.length,
              a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
            else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ScriptManager = void 0);
        const r = n(6700),
          o = n(3740);
        let a = class {
          async getPageData(e) {
            const t = { target: { tabId: e }, func: o.getPageData };
            try {
              return (await chrome.scripting.executeScript(t))[0].result;
            } catch (e) {
              return { title: "", name: "", referrer: "" };
            }
          }
        };
        (a = i([(0, r.injectable)()], a)), (t.ScriptManager = a);
      },
      1067: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SensitiveDataFilter = void 0);
        const a = n(6700),
          s = n(707),
          c = n(7809),
          u = n(6958),
          d = n(3740),
          l = n(3162);
        let h = class {
          constructor(e, t) {
            (this.options = e), (this.logger = t);
            const n = { logging: !!e.sensitiveDataFilteringLogging, host: e.sensitiveDataApiUrl };
            (this._filter = new s.default(n)),
              this.logger.log("SensitiveDataFilter - initializing"),
              this._filter
                .init()
                .then(() => this.logger.log("SensitiveDataFilter - ready"))
                .catch(() => this.logger.warn("SensitiveDataFilter - could not initialize filter"));
          }
          transformUrl(e) {
            if (!this.options.sensitiveDataCheckEnabled) return e;
            try {
              return this._filter.transformUrl(e);
            } catch (t) {
              return this.logger.warn(`SensitiveDataFilter - could not transform url: ${e}`), e;
            }
          }
          transformTitle(e, t) {
            if (!this.options.sensitiveDataCheckEnabled) return t;
            try {
              return this._filter.transformTitle(e, t);
            } catch (n) {
              return this.logger.warn(`SensitiveDataFilter - could not transform title: ${e}, ${t}`), t;
            }
          }
          filter(e) {
            if ((this.logger.detailed("SensitiveDataFilter - filtering", {}, () => e), !(0, l.isNavFullRequest)(e)))
              return (e.url.value = this.transformUrl(e.url.value)), e;
            const t = (e) => {
              (e.url.value = this.transformUrl(e.url.value)),
                (e.contextAttributes.referrer = this.transformUrl(e.contextAttributes.referrer)),
                (e.pageAttributes.title = this.transformTitle((0, d.getDomain)(e.url.value), e.pageAttributes.title)),
                (e.pageAttributes.name = this.transformTitle((0, d.getDomain)(e.url.value), e.pageAttributes.name));
            };
            return t(e), e.nested.forEach(t), e;
          }
          async syncUp() {
            try {
              this.logger.log("SensitiveDataFilter - sync up rules: started"),
                await this._filter.updateRules(),
                this.logger.log("SensitiveDataFilter - sync up rules: done");
            } catch (e) {
              this.logger.warn("SensitiveDataFilter - sync up rules: failed", e);
            }
          }
        };
        (h = i(
          [
            (0, a.injectable)(),
            o(0, (0, a.inject)(c.DiTypes.OPTIONS)),
            o(1, (0, a.inject)(c.DiTypes.LOGGER)),
            r("design:paramtypes", [Object, u.Logger])
          ],
          h
        )),
          (t.SensitiveDataFilter = h);
      },
      2037: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.StreamManager = void 0);
        const a = n(6700),
          s = n(7809),
          c = n(6958),
          u = n(7002),
          d = n(3740),
          l = n(6478),
          h = n(732),
          f = n(1749);
        let p = class {
          constructor(e, t, n, i, r) {
            (this.fgNavManager = e), (this.webNavManager = t), (this.logger = n), (this.options = i), (this.taskManager = r);
          }
          async webNavigationBeforeNavigate(e) {
            const t = `${e.tabId}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("webNavigation.onBeforeNavigate", e, () => e),
                (0, d.isMainFrame)(e.frameId)
                  ? await this.fgNavManager.webNavigationBeforeNavigate(e)
                  : await this.webNavManager.webNavigationBeforeNavigate(e);
            });
          }
          async webNavigationComplete(e) {
            const t = `${e.tabId}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("webNavigation.onCompleted", e, () => e),
                (0, d.isMainFrame)(e.frameId)
                  ? await this.fgNavManager.webNavigationComplete(e)
                  : await this.webNavManager.webNavigationComplete(e);
            });
          }
          async webNavigationErrorOccurred(e) {
            const t = `${e.tabId}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("webNavigation.onRequestErrorOccurred", e, () => e),
                (0, d.isMainFrame)(e.frameId)
                  ? await this.fgNavManager.webNavigationErrorOccurred(e)
                  : await this.webNavManager.webNavigationErrorOccurred(e);
            });
          }
          async historyStateUpdated(e) {
            const t = `${e.tabId}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("webNavigation.onHistoryStateUpdated", e, () => e), await this.fgNavManager.historyStateUpdated(e);
            });
          }
          async webRequestHeadersSent(e) {
            const t = `${e.tabId}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("webRequest.onSendHeaders", e, () => e),
                (0, d.isMainFrame)(e.frameId)
                  ? await this.fgNavManager.webRequestHeadersSent(e)
                  : await this.webNavManager.webRequestHeadersSent(e);
            });
          }
          async webRequestHeadersReceived(e) {
            const t = `${e.tabId}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("webRequest.onHeadersReceived", e, () => e),
                (0, d.isMainFrame)(e.frameId)
                  ? await this.fgNavManager.webRequestHeadersReceived(e)
                  : await this.webNavManager.webRequestHeadersReceived(e);
            });
          }
          async webRequestResponseStarted(e) {
            const t = `${e.tabId}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("webRequest.onResponseStarted", e, () => e),
                (0, d.isMainFrame)(e.frameId) || (await this.webNavManager.webRequestResponseStarted(e));
            });
          }
          async webRequestBeforeRedirect(e) {
            const t = `${e.tabId}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("webRequest.onBeforeRedirect", e, () => e),
                (0, d.isMainFrame)(e.frameId)
                  ? await this.fgNavManager.webRequestBeforeRedirect(e)
                  : await this.webNavManager.webRequestBeforeRedirect(e);
            });
          }
          async webRequestErrorOccurred(e) {
            const t = `${e.tabId}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("webRequest.onRequestErrorOccurred", e, () => e),
                (0, d.isMainFrame)(e.frameId) || (await this.webNavManager.webRequestErrorOccurred(e));
            });
          }
          async createdNavigationTarget(e) {
            const t = `${e.tabId}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("webNavigation.onCreatedNavigationTarget", e, () => e),
                await this.fgNavManager.createdNavigationTarget(e);
            });
          }
          async tabCreated(e) {
            if (void 0 === e.id) return;
            const t = `${e.id}`;
            return await this.taskManager.exec(t, async () => {
              this.logger.detailed("tab.onTabCreated", { tabId: e.id, url: e.url }, () => e), await this.fgNavManager.tabCreated(e);
            });
          }
          async tabRemoved(e) {
            return await this.taskManager.exec(`${e}`, async () => {
              this.logger.detailed("tab.onTabRemoved", { tabId: e }, () => e);
            });
          }
          async tabUpdated(e, t) {
            return await this.taskManager.exec(`${e}`, async () => {
              this.logger.detailed("tabs.onUpdated", { tabId: e }, () => t);
            });
          }
          async tabReplaced(e, t) {
            this.logger.log("tabs.onReplaced", { addedTabId: e, removedTabId: t });
          }
        };
        i(
          [
            (0, f.libEnabled)(),
            (0, f.allowedUrlsOnly)(),
            (0, f.notPrerender)(),
            (0, f.isRealTabOnly)(),
            r("design:type", Function),
            r("design:paramtypes", [Object]),
            r("design:returntype", Promise)
          ],
          p.prototype,
          "webNavigationBeforeNavigate",
          null
        ),
          i(
            [
              (0, f.libEnabled)(),
              (0, f.allowedUrlsOnly)(),
              (0, f.notPrerender)(),
              (0, f.isRealTabOnly)(),
              r("design:type", Function),
              r("design:paramtypes", [Object]),
              r("design:returntype", Promise)
            ],
            p.prototype,
            "webNavigationComplete",
            null
          ),
          i(
            [
              (0, f.libEnabled)(),
              (0, f.allowedUrlsOnly)(),
              (0, f.notPrerender)(),
              (0, f.isRealTabOnly)(),
              r("design:type", Function),
              r("design:paramtypes", [Object]),
              r("design:returntype", Promise)
            ],
            p.prototype,
            "webNavigationErrorOccurred",
            null
          ),
          i(
            [
              (0, f.libEnabled)(),
              (0, f.mainFrameOnly)(),
              (0, f.allowedUrlsOnly)(),
              (0, f.notPrerender)(),
              (0, f.isRealTabOnly)(),
              r("design:type", Function),
              r("design:paramtypes", [Object]),
              r("design:returntype", Promise)
            ],
            p.prototype,
            "historyStateUpdated",
            null
          ),
          i(
            [
              (0, f.libEnabled)(),
              (0, f.allowedUrlsOnly)(),
              (0, f.notPrerender)(),
              (0, f.isRealTabOnly)(),
              r("design:type", Function),
              r("design:paramtypes", [Object]),
              r("design:returntype", Promise)
            ],
            p.prototype,
            "webRequestHeadersSent",
            null
          ),
          i(
            [
              (0, f.libEnabled)(),
              (0, f.allowedUrlsOnly)(),
              (0, f.notPrerender)(),
              (0, f.isRealTabOnly)(),
              r("design:type", Function),
              r("design:paramtypes", [Object]),
              r("design:returntype", Promise)
            ],
            p.prototype,
            "webRequestHeadersReceived",
            null
          ),
          i(
            [
              (0, f.libEnabled)(),
              (0, f.allowedUrlsOnly)(),
              (0, f.notPrerender)(),
              (0, f.isRealTabOnly)(),
              r("design:type", Function),
              r("design:paramtypes", [Object]),
              r("design:returntype", Promise)
            ],
            p.prototype,
            "webRequestResponseStarted",
            null
          ),
          i(
            [
              (0, f.libEnabled)(),
              (0, f.allowedUrlsOnly)(),
              (0, f.notPrerender)(),
              (0, f.isRealTabOnly)(),
              r("design:type", Function),
              r("design:paramtypes", [Object]),
              r("design:returntype", Promise)
            ],
            p.prototype,
            "webRequestBeforeRedirect",
            null
          ),
          i(
            [
              (0, f.libEnabled)(),
              (0, f.allowedUrlsOnly)(),
              (0, f.notPrerender)(),
              (0, f.isRealTabOnly)(),
              r("design:type", Function),
              r("design:paramtypes", [Object]),
              r("design:returntype", Promise)
            ],
            p.prototype,
            "webRequestErrorOccurred",
            null
          ),
          i(
            [
              (0, f.libEnabled)(),
              (0, f.allowedUrlsOnly)(),
              (0, f.notPrerender)(),
              (0, f.isRealTabOnly)(),
              r("design:type", Function),
              r("design:paramtypes", [Object]),
              r("design:returntype", Promise)
            ],
            p.prototype,
            "createdNavigationTarget",
            null
          ),
          i(
            [(0, f.libEnabled)(), r("design:type", Function), r("design:paramtypes", [Object]), r("design:returntype", Promise)],
            p.prototype,
            "tabCreated",
            null
          ),
          i(
            [(0, f.libEnabled)(), r("design:type", Function), r("design:paramtypes", [Number]), r("design:returntype", Promise)],
            p.prototype,
            "tabRemoved",
            null
          ),
          i(
            [(0, f.libEnabled)(), r("design:type", Function), r("design:paramtypes", [Number, Object]), r("design:returntype", Promise)],
            p.prototype,
            "tabUpdated",
            null
          ),
          i(
            [(0, f.libEnabled)(), r("design:type", Function), r("design:paramtypes", [Number, Number]), r("design:returntype", Promise)],
            p.prototype,
            "tabReplaced",
            null
          ),
          (p = i(
            [
              (0, a.injectable)(),
              o(0, (0, a.inject)(s.DiTypes.FG_NAV_MANAGER)),
              o(1, (0, a.inject)(s.DiTypes.WEB_NAV_MANAGER)),
              o(2, (0, a.inject)(s.DiTypes.LOGGER)),
              o(3, (0, a.inject)(s.DiTypes.OPTIONS)),
              o(4, (0, a.inject)(s.DiTypes.TASK_MANAGER)),
              r("design:paramtypes", [l.FgNavManager, h.WebNavManager, c.Logger, Object, u.TaskManager])
            ],
            p
          )),
          (t.StreamManager = p);
      },
      7002: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__decorate) ||
          function (e, t, n, i) {
            var r,
              o = arguments.length,
              a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
            else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.TaskManager = void 0);
        const r = n(6700),
          o = n(3740);
        let a = class {
          constructor() {
            this.scopes = new Map();
          }
          async exec(e, t) {
            const n = this.getScope(e),
              i = new Promise(async (e, i) => {
                n.tasks.push({ fn: t, resolve: e, reject: i });
              });
            return n.lock || ((n.lock = !0), this.next(n).then()), i;
          }
          async next(e) {
            const t = e.tasks.shift();
            if (void 0 !== t) {
              try {
                await (0, o.delay)(0);
                const e = await t.fn();
                t.resolve(e);
              } catch (e) {
                t.reject(e);
              }
              await this.next(e);
            } else e.lock = !1;
          }
          getScope(e) {
            return this.scopes.has(e) || this.scopes.set(e, { tasks: [], lock: !1, id: e }), this.scopes.get(e);
          }
        };
        (a = i([(0, r.injectable)()], a)), (t.TaskManager = a);
      },
      732: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.WebNavManager = void 0);
        const a = n(6700),
          s = n(9362),
          c = n(7809),
          u = n(8028),
          d = n(855),
          l = n(6478);
        let h = class {
          constructor(e, t, n) {
            (this.storage = e), (this.fgNavManager = t), (this.dispatcher = n);
          }
          async webNavigationBeforeNavigate(e) {
            const { tabId: t, frameId: n } = e,
              i = await this.storage.getOrCreate(t, n);
            (i.webNavigationBeforeNavigate = e), await this.storage.save(i, n);
          }
          async webNavigationComplete(e) {
            const { tabId: t, frameId: n } = e,
              i = await this.storage.getOrCreate(t, n);
            (i.webNavigationComplete = e), null != i.webRequestHeadersSent ? await this.finalize(i, n) : await this.storage.remove(t, n);
          }
          async webNavigationErrorOccurred(e) {
            const { tabId: t, frameId: n } = e,
              i = await this.storage.getOrCreate(t, n);
            null != i.webRequestHeadersSent
              ? ((i.webNavigationErrorOccurred = e), await this.finalize(i, n))
              : await this.storage.remove(t, n);
          }
          async webRequestBeforeRedirect(e) {
            const { tabId: t, frameId: n } = e,
              i = await this.storage.getOrCreate(t, n);
            (i.webRequestBeforeRedirect = e), await this.finalize(i, n);
          }
          async webRequestErrorOccurred(e) {
            const { tabId: t, frameId: n } = e,
              i = await this.storage.getOrCreate(t, n);
            (i.webRequestErrorOccurred = e), await this.storage.save(i, n);
          }
          async webRequestHeadersReceived(e) {
            const { tabId: t, frameId: n } = e,
              i = await this.storage.getOrCreate(t, n);
            (i.webRequestHeadersReceived = e), await this.storage.save(i, n);
          }
          async webRequestHeadersSent(e) {
            const { tabId: t, frameId: n } = e,
              i = await this.storage.getOrCreate(t, n);
            (i.webRequestHeadersSent = e), await this.storage.save(i, n);
          }
          async webRequestResponseStarted(e) {
            const { tabId: t, frameId: n } = e,
              i = await this.storage.getOrCreate(t, n);
            (i.webRequestResponseStarted = e), await this.storage.save(i, n);
          }
          async finalize(e, t) {
            (e.timestamp = Date.now()),
              (e.initiatorTabId = await this.fgNavManager.getInitiatorTabId(e.tabId)),
              await this.storage.remove(e.tabId, t);
            const n = { name: u.EventList.WEB_NAV_CREATED, payload: e };
            await this.dispatcher.emit(n);
          }
        };
        (h = i(
          [
            (0, a.injectable)(),
            o(0, (0, a.inject)(c.DiTypes.WEB_NAV_STORAGE)),
            o(1, (0, a.inject)(c.DiTypes.FG_NAV_MANAGER)),
            o(2, (0, a.inject)(c.DiTypes.DISPATCHER)),
            r("design:paramtypes", [d.WebNavStorage, l.FgNavManager, s.Dispatcher])
          ],
          h
        )),
          (t.WebNavManager = h);
      },
      3921: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.WebNavProcessor = void 0);
        const a = n(6700),
          s = n(1067),
          c = n(7809),
          u = n(3436),
          d = n(4972),
          l = n(3740),
          h = n(9575),
          f = n(6657),
          p = n(3442),
          g = n(6797),
          y = n(6478);
        let v = class {
          constructor(e, t, n, i, r, o, a, s) {
            (this.storage = e),
              (this.filter = t),
              (this.bgBuilder = n),
              (this.resBuilder = i),
              (this.env = r),
              (this.options = o),
              (this.fgNavManager = a),
              (this.script = s);
          }
          async process(e) {
            const t = await this.fgNavManager.getSequence(e.tabId),
              n = e.webRequestHeadersSent?.frameId,
              i = (0, l.isMainFrame)(n) ? "main_frame" : "sub_frame",
              r = await this.script.getPageData(e.tabId);
            this.bgBuilder
              .withUrl(e.webRequestHeadersSent?.url)
              .withRequestTab(e.tabId, e.initiatorTabId)
              .withOS(this.env.getOS().name, this.env.getOS().version)
              .withBrowser(this.env.getBrowser().name, this.env.getBrowser().version)
              .withSequence(t)
              .withFrame(n, e.webRequestHeadersSent?.parentFrameId)
              .withPanelistDef(this.options.panalyticsId, this.options.pinstanceId, this.options.partnerId, this.options.distributorId)
              .withTimestamp(`${e.timestamp}`)
              .withHttpRequest(e.webRequestHeadersSent?.method, (0, l.mapHeaders)(e.webRequestHeadersSent?.requestHeaders))
              .withEventDef(p.Guid.create().toString(), (0, l.calcEventType)(i), i)
              .withPageAttributes(r.title, r.name)
              .withContextAttributes(r.referrer),
              this.processWebRequestHeadersReceived(e),
              this.processWebRequestBeforeRedirect(e),
              this.processWebRequestResponseStarted(e),
              this.processWebRequestErrorOccurred(e);
            const o = this.resBuilder.make();
            this.bgBuilder.withHttpResponse(o);
            const a = this.bgBuilder.make();
            await this.storage.add(a);
          }
          processWebRequestHeadersReceived(e) {
            null != e.webRequestHeadersReceived &&
              (this.resBuilder
                .withStatusLine(e.webRequestHeadersReceived.statusLine)
                .withStatusCode(e.webRequestHeadersReceived.statusCode),
              (0, l.mapHeaders)(e.webRequestHeadersReceived.responseHeaders).forEach((e) => this.resBuilder.addHeaders(e.name, e.value)));
          }
          processWebRequestBeforeRedirect(e) {
            null != e.webRequestBeforeRedirect &&
              (this.resBuilder.withRedirectUrl(e.webRequestBeforeRedirect.redirectUrl).withFromCache(e.webRequestBeforeRedirect.fromCache),
              this.bgBuilder.withServer(e.webRequestBeforeRedirect.ip));
          }
          processWebRequestResponseStarted(e) {
            null != e.webRequestResponseStarted &&
              (this.resBuilder.withFromCache(e.webRequestResponseStarted.fromCache),
              this.bgBuilder.withServer(e.webRequestResponseStarted.ip));
          }
          processWebRequestErrorOccurred(e) {
            null != e.webRequestErrorOccurred && this.resBuilder.withError(e.webRequestErrorOccurred.error);
          }
        };
        (v = i(
          [
            (0, a.injectable)(),
            o(0, (0, a.inject)(c.DiTypes.BG_NAV_STORAGE)),
            o(1, (0, a.inject)(c.DiTypes.SENSITIVE_DATA_FILTER)),
            o(2, (0, a.inject)(c.DiTypes.BG_PAYLOAD_BUILDER)),
            o(3, (0, a.inject)(c.DiTypes.HTTP_RESPONSE_BUILDER)),
            o(4, (0, a.inject)(c.DiTypes.ENV)),
            o(5, (0, a.inject)(c.DiTypes.OPTIONS)),
            o(6, (0, a.inject)(c.DiTypes.FG_NAV_MANAGER)),
            o(7, (0, a.inject)(c.DiTypes.SCRIPT_MANAGER)),
            r("design:paramtypes", [
              g.BgNavStorage,
              s.SensitiveDataFilter,
              u.BgPayloadBuilder,
              f.HttpResponseBuilder,
              d.Env,
              Object,
              y.FgNavManager,
              h.ScriptManager
            ])
          ],
          v
        )),
          (t.WebNavProcessor = v);
      },
      6797: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BgNavStorage = void 0);
        const a = n(6700),
          s = n(6074),
          c = n(7809);
        let u = class {
          constructor(e) {
            (this.compressor = e),
              (this.key = "__URL_SAFE_CHECK_BG_NAV__"),
              (this.cache = []),
              (this.cacheSync = !1),
              (this.storage = chrome.storage.local);
          }
          async add(e) {
            this.cacheSync || (await this.syncUp()), this.cache.push(e);
            const t = JSON.stringify(this.cache),
              n = this.compressor.compress(t),
              i = { [this.key]: n };
            await this.storage.set(i);
          }
          async clean() {
            const e = this.compressor.compress("[]"),
              t = { [this.key]: e };
            (this.cache = []), await this.storage.set(t);
          }
          async getAll() {
            return this.cacheSync || (await this.syncUp()), this.cache;
          }
          async syncUp() {
            this.cacheSync = !0;
            const e = await this.storage.get(this.key);
            if (null != e[this.key])
              try {
                const t = this.compressor.decompress(e[this.key]);
                this.cache = JSON.parse(t);
              } catch (e) {
                this.cache = [];
              }
          }
        };
        (u = i([(0, a.injectable)(), o(0, (0, a.inject)(c.DiTypes.COMPRESSOR)), r("design:paramtypes", [s.Compressor])], u)),
          (t.BgNavStorage = u);
      },
      8624: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.FgNavStorage = void 0);
        const a = n(6700),
          s = n(647),
          c = n(7809),
          u = n(6074);
        let d = class {
          constructor(e) {
            (this.compressor = e),
              (this.cache = new Map()),
              (this.storageTabKey = "__URL_SAFE_CHECK_FG_NAV__"),
              (this.storage = chrome.storage.session);
          }
          async getOrCreate(e) {
            if (this.cache.has(e)) return this.cache.get(e);
            const t = this.key(e),
              n = await this.storage.get(t);
            if (void 0 !== n[t]) {
              const i = this.compressor.decompress(n[t]),
                r = JSON.parse(i);
              return this.cache.set(e, r), r;
            }
            const i = this.createDefault(e);
            this.cache.set(e, i);
            const r = JSON.stringify(i),
              o = { [t]: this.compressor.compress(r) };
            return await this.storage.set(o), i;
          }
          async save(e) {
            this.cache.set(e.tabId, e);
            const t = JSON.stringify(e),
              n = { [this.key(e.tabId)]: this.compressor.compress(t) };
            await this.storage.set(n);
          }
          createDefault(e) {
            return {
              tabId: e,
              method: s.NavigationMethod.INITIAL,
              status: s.NavigationStatus.INITIAL,
              sequence: 0,
              pageData: { name: "", title: "", referrer: "" }
            };
          }
          key(e) {
            return `${this.storageTabKey}.${e}`;
          }
        };
        (d = i([(0, a.injectable)(), o(0, (0, a.inject)(c.DiTypes.COMPRESSOR)), r("design:paramtypes", [u.Compressor])], d)),
          (t.FgNavStorage = d);
      },
      855: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__decorate) ||
            function (e, t, n, i) {
              var r,
                o = arguments.length,
                a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
              else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
              return o > 3 && a && Object.defineProperty(t, n, a), a;
            },
          r =
            (this && this.__metadata) ||
            function (e, t) {
              if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            },
          o =
            (this && this.__param) ||
            function (e, t) {
              return function (n, i) {
                t(n, i, e);
              };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.WebNavStorage = void 0);
        const a = n(6700),
          s = n(7809),
          c = n(6074);
        let u = class {
          constructor(e) {
            (this.compressor = e),
              (this.cache = new Map()),
              (this.storageTabKey = "__URL_SAFE_CHECK_WEB_NAV__"),
              (this.storage = chrome.storage.session);
          }
          async getOrCreate(e, t) {
            const n = this.hash(e, t);
            if (this.cache.has(n)) return this.cache.get(n);
            const i = this.key(n),
              r = await this.storage.get(i);
            if (void 0 !== r[i]) {
              const e = this.compressor.decompress(r[i]),
                t = JSON.parse(e);
              return this.cache.set(n, t), t;
            }
            const o = { tabId: e };
            return await this.save(o, t), o;
          }
          async remove(e, t) {
            const n = this.hash(e, t);
            this.cache.delete(n);
            const i = this.key(n);
            await this.storage.remove([i]);
          }
          async save(e, t) {
            const n = this.hash(e.tabId, t);
            this.cache.set(n, e);
            const i = this.key(n),
              r = JSON.stringify(e),
              o = { [i]: this.compressor.compress(r) };
            await this.storage.set(o);
          }
          key(e) {
            return `${this.storageTabKey}.${e}`;
          }
          hash(e, t) {
            return `${e}.${t}`;
          }
        };
        (u = i([(0, a.injectable)(), o(0, (0, a.inject)(s.DiTypes.COMPRESSOR)), r("design:paramtypes", [c.Compressor])], u)),
          (t.WebNavStorage = u);
      },
      7027: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Stream = void 0), n(8660);
        const i = n(8802),
          r = n(6700),
          o = n(7809),
          a = n(7002),
          s = n(9268),
          c = n(4972),
          u = n(2037),
          d = n(9575),
          l = n(6958),
          h = n(9362),
          f = n(8028),
          p = n(6074),
          g = n(1067),
          y = n(3003),
          v = n(3436),
          _ = n(6657),
          b = n(9696),
          m = n(3740),
          w = n(6478),
          S = n(855),
          T = n(6797),
          O = n(3921),
          E = n(8624),
          A = n(2620),
          N = n(732);
        n(4991).SessionStorageAdapter.adapt();
        const R = new r.Container();
        R.bind(o.DiTypes.DI).toConstantValue(R), R.bind(o.DiTypes.DISPATCHER).to(h.Dispatcher).inSingletonScope();
        let I = !1;
        const C = R.get(o.DiTypes.DISPATCHER);
        let P = [];
        C.listen(f.EventList.LIB_READY, async () => {
          const e = R.get(o.DiTypes.STREAM_MANAGER);
          for (const [t, ...n] of P) await t(e, ...n);
          (P = []), (I = !0);
        });
        const M = { urls: ["https://*/*", "http://*/*"], types: ["main_frame", "sub_frame"] },
          D =
            (e) =>
            (...t) => {
              if (I) {
                const n = R.get(o.DiTypes.STREAM_MANAGER);
                e(n, ...t);
              } else P.push([e, ...t]);
            };
        chrome.webRequest.onSendHeaders.addListener(
          D((e, t) => {
            e.webRequestHeadersSent(t);
          }),
          M,
          ["requestHeaders"]
        ),
          chrome.webRequest.onHeadersReceived.addListener(
            D((e, t) => {
              e.webRequestHeadersReceived(t);
            }),
            M,
            ["responseHeaders"]
          ),
          chrome.webRequest.onResponseStarted.addListener(
            D((e, t) => {
              e.webRequestResponseStarted(t);
            }),
            M,
            ["responseHeaders"]
          ),
          chrome.webNavigation.onBeforeNavigate.addListener(
            D((e, t) => {
              e.webNavigationBeforeNavigate(t);
            })
          ),
          chrome.webNavigation.onCompleted.addListener(
            D((e, t) => {
              e.webNavigationComplete(t);
            })
          ),
          chrome.webNavigation.onCreatedNavigationTarget.addListener(
            D((e, t) => {
              e.createdNavigationTarget(t);
            })
          ),
          chrome.webNavigation.onHistoryStateUpdated.addListener(
            D((e, t) => {
              e.historyStateUpdated(t);
            })
          ),
          chrome.webRequest.onErrorOccurred.addListener(
            D((e, t) => {
              e.webRequestErrorOccurred(t);
            }),
            M
          ),
          chrome.webRequest.onBeforeRedirect.addListener(
            D((e, t) => {
              e.webRequestBeforeRedirect(t);
            }),
            M
          ),
          chrome.webNavigation.onErrorOccurred.addListener(
            D((e, t) => {
              e.webNavigationErrorOccurred(t);
            })
          ),
          chrome.tabs.onCreated.addListener(
            D((e, t) => {
              e.tabCreated(t);
            })
          ),
          chrome.tabs.onRemoved.addListener(
            D((e, t) => {
              e.tabRemoved(t);
            })
          ),
          chrome.tabs.onReplaced.addListener(
            D((e, t, n) => {
              e.tabReplaced(t, n);
            })
          ),
          chrome.tabs.onUpdated.addListener(
            D((e, t, n) => {
              e.tabUpdated(t, n);
            })
          ),
          (t.Stream = class {
            constructor(e) {
              (this.options = e),
                R.bind(o.DiTypes.OPTIONS).toConstantValue(e),
                R.bind(o.DiTypes.TASK_MANAGER).to(a.TaskManager).inSingletonScope(),
                R.bind(o.DiTypes.HTTP_CLIENT).to(s.HttpClient).inSingletonScope(),
                R.bind(o.DiTypes.ENV).to(c.Env).inSingletonScope(),
                R.bind(o.DiTypes.LOGGER).to(l.Logger).inSingletonScope(),
                R.bind(o.DiTypes.STREAM_MANAGER).to(u.StreamManager).inSingletonScope(),
                R.bind(o.DiTypes.SCRIPT_MANAGER).to(d.ScriptManager).inSingletonScope(),
                R.bind(o.DiTypes.FG_PAYLOAD_BUILDER).to(y.FgPayloadBuilder).inSingletonScope(),
                R.bind(o.DiTypes.HTTP_RESPONSE_BUILDER).to(_.HttpResponseBuilder).inSingletonScope(),
                R.bind(o.DiTypes.COMPRESSOR).to(p.Compressor).inSingletonScope(),
                R.bind(o.DiTypes.SENSITIVE_DATA_FILTER).to(g.SensitiveDataFilter).inSingletonScope(),
                R.bind(o.DiTypes.CHECK_SAFETY_SERVICE).to(b.CheckSafetyService).inSingletonScope(),
                R.bind(o.DiTypes.WEB_NAV_PROCESSOR).to(O.WebNavProcessor).inSingletonScope(),
                R.bind(o.DiTypes.WEB_NAV_STORAGE).to(S.WebNavStorage).inSingletonScope(),
                R.bind(o.DiTypes.WEB_NAV_MANAGER).to(N.WebNavManager).inSingletonScope(),
                R.bind(o.DiTypes.FG_NAV_STORAGE).to(E.FgNavStorage).inSingletonScope(),
                R.bind(o.DiTypes.FG_NAV_MANAGER).to(w.FgNavManager).inSingletonScope(),
                R.bind(o.DiTypes.FG_NAV_PROCESSOR).to(A.FgNavProcessor).inSingletonScope(),
                R.bind(o.DiTypes.BG_PAYLOAD_BUILDER).to(v.BgPayloadBuilder).inSingletonScope(),
                R.bind(o.DiTypes.BG_NAV_STORAGE).to(T.BgNavStorage).inSingletonScope();
              const t = R.get(o.DiTypes.SENSITIVE_DATA_FILTER),
                n = R.get(o.DiTypes.LOGGER),
                r = R.get(o.DiTypes.TASK_MANAGER),
                h = R.get(o.DiTypes.WEB_NAV_PROCESSOR),
                I = R.get(o.DiTypes.FG_NAV_PROCESSOR);
              globalThis[Symbol.for("__URL_SAFE_CHECK_OPTIONS__")] = this.options;
              const C = "BLOCK";
              (this.dispatcher = R.get(o.DiTypes.DISPATCHER)),
                this.dispatcher.listen(f.EventList.WEB_NAV_CREATED, async (e) => {
                  r.exec(C, async () => {
                    await h.process(e.payload);
                  });
                }),
                this.dispatcher.listen(f.EventList.FG_NAV_COMPLETED, async (e) => {
                  await (0, m.delay)(1200),
                    r.exec(C, async () => {
                      await I.process(e.payload);
                    });
                }),
                n.log(`Lib version: v${this.version()}`);
              const P = {
                delayInMinutes: e.sensitiveRulesSyncUpIntervalInMin || 1440,
                periodInMinutes: e.sensitiveRulesSyncUpIntervalInMin || 1440
              };
              chrome.alarms.create(i.SyncUpSensitiveRulesAlarm, P),
                chrome.alarms.onAlarm.addListener((e) => {
                  e.name === i.SyncUpSensitiveRulesAlarm && t.syncUp();
                });
              const M = { name: f.EventList.LIB_READY };
              this.dispatcher.emit(M);
            }
            onPageVisited(e) {
              this.dispatcher.listen(f.EventList.CHECK_URL_SAFETY_RESULT, async (t) => e(t.payload.tabId, t.payload.url, t.payload.safe));
            }
            enable() {
              this.options.enabled = !0;
            }
            disable() {
              this.options.enabled = !1;
            }
            status() {
              return this.options.enabled;
            }
            version() {
              return (0, m.getLibVersion)();
            }
          });
      },
      8802: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SyncUpSensitiveRulesAlarm = void 0),
          (t.SyncUpSensitiveRulesAlarm = "__SyncUpSensitiveRulesAlarm__");
      },
      7327: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getBrowserVersionIgnoreLinter = void 0),
          (t.getBrowserVersionIgnoreLinter = function () {
            let e,
              t = "",
              n = "0";
            const i = navigator.userAgent + " ";
            if ("5.0" == i.substring(i.indexOf("Mozilla/") + 8, i.indexOf(" ")) && i.includes("like Gecko")) {
              e = i
                .substring(i.indexOf("like Gecko") + 10)
                .substring(i.substring(i.indexOf("like Gecko") + 10).indexOf(") ") + 2)
                .replace("LG Browser", "LGBrowser")
                .replace("360SE", "360SE/");
              for (let t = 0; t < 1; t++) e = e.replace(e.substring(e.indexOf("("), e.indexOf(")") + 1), "");
              e = e.split(" ");
              for (let t = 0; t < e.length; t++)
                -1 == e[t].indexOf("/") && (e[t] = "Chrome"), -1 != e[t].indexOf("/") && (e[t] = e[t].substring(0, e[t].indexOf("/")));
              if (e.length < 4) t = e[0];
              else
                for (let n = 0; n < e.length; n++)
                  -1 == e[n].indexOf("Chrome") &&
                    -1 == e[n].indexOf("Safari") &&
                    -1 == e[n].indexOf("Mobile") &&
                    -1 == e[n].indexOf("Version") &&
                    (t = e[n]);
              n = i.substring(
                i.indexOf(t) + t.length + 1,
                i.indexOf(t) + t.length + 1 + i.substring(i.indexOf(t) + t.length + 1).indexOf(" ")
              );
            } else
              "5.0" == i.substring(i.indexOf("Mozilla/") + 8, i.indexOf(" ")) && i.includes("Gecko/")
                ? ((t = i
                    .substring(i.substring(i.indexOf("Gecko/") + 6).indexOf(" ") + i.indexOf("Gecko/") + 6)
                    .substring(0, i.substring(i.substring(i.indexOf("Gecko/") + 6).indexOf(" ") + i.indexOf("Gecko/") + 6).indexOf("/"))),
                  (n = i.substring(
                    i.indexOf(t) + t.length + 1,
                    i.indexOf(t) + t.length + 1 + i.substring(i.indexOf(t) + t.length + 1).indexOf(" ")
                  )))
                : "5.0" == i.substring(i.indexOf("Mozilla/") + 8, i.indexOf(" ")) && i.includes("Clecko/")
                ? ((t = i
                    .substring(i.substring(i.indexOf("Clecko/") + 7).indexOf(" ") + i.indexOf("Clecko/") + 7)
                    .substring(0, i.substring(i.substring(i.indexOf("Clecko/") + 7).indexOf(" ") + i.indexOf("Clecko/") + 7).indexOf("/"))),
                  (n = i.substring(
                    i.indexOf(t) + t.length + 1,
                    i.indexOf(t) + t.length + 1 + i.substring(i.indexOf(t) + t.length + 1).indexOf(" ")
                  )))
                : "5.0" == i.substring(i.indexOf("Mozilla/") + 8, i.indexOf(" "))
                ? ((t = i.substring(i.indexOf("(") + 1, i.indexOf(";"))),
                  (n = i.substring(
                    i.indexOf(t) + t.length + 1,
                    i.indexOf(t) + t.length + 1 + i.substring(i.indexOf(t) + t.length + 1).indexOf(" ")
                  )))
                : "4.0" == i.substring(i.indexOf("Mozilla/") + 8, i.indexOf(" ")) && i.indexOf(")") + 1 == i.length - 1
                ? (t = i.substring(i.indexOf("(") + 1, i.indexOf(")")).split("; ")[
                    i.substring(i.indexOf("(") + 1, i.indexOf(")")).split("; ").length - 1
                  ])
                : "4.0" == i.substring(i.indexOf("Mozilla/") + 8, i.indexOf(" ")) && i.indexOf(")") + 1 != i.length - 1
                ? (i.substring(i.indexOf(") ") + 2).includes("/") &&
                    (t = i.substring(i.indexOf(") ") + 2, i.indexOf(") ") + 2 + i.substring(i.indexOf(") ") + 2).indexOf("/"))),
                  i.substring(i.indexOf(") ") + 2).includes("/") ||
                    (t = i.substring(i.indexOf(") ") + 2, i.indexOf(") ") + 2 + i.substring(i.indexOf(") ") + 2).indexOf(" "))),
                  (n = i.substring(
                    i.indexOf(t) + t.length + 1,
                    i.indexOf(t) + t.length + 1 + i.substring(i.indexOf(t) + t.length + 1).indexOf(" ")
                  )))
                : "Opera/" == i.substring(0, 6)
                ? ((t = "Opera"),
                  (n = i.substring(
                    i.indexOf(t) + t.length + 1,
                    i.indexOf(t) + t.length + 1 + i.substring(i.indexOf(t) + t.length + 1).indexOf(" ")
                  )))
                : "Mozilla" != i.substring(0, i.indexOf("/")) && "Opera" != i.substring(0, i.indexOf("/"))
                ? ((t = i.substring(0, i.indexOf("/"))),
                  (n = i.substring(
                    i.indexOf(t) + t.length + 1,
                    i.indexOf(t) + t.length + 1 + i.substring(i.indexOf(t) + t.length + 1).indexOf(" ")
                  )))
                : (t = i);
            return { name: t, version: n };
          });
      },
      8258: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOsVersionIgnoreLinter = void 0),
          (t.getOsVersionIgnoreLinter = function () {
            const e = navigator.appVersion,
              t = navigator.userAgent;
            let n = "";
            const i = [
              { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
              { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
              { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
              { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
              { s: "Windows Vista", r: /Windows NT 6.0/ },
              { s: "Windows Server 2003", r: /Windows NT 5.2/ },
              { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
              { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
              { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
              { s: "Windows 98", r: /(Windows 98|Win98)/ },
              { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
              { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
              { s: "Windows CE", r: /Windows CE/ },
              { s: "Windows 3.11", r: /Win16/ },
              { s: "Android", r: /Android/ },
              { s: "Open BSD", r: /OpenBSD/ },
              { s: "Sun OS", r: /SunOS/ },
              { s: "Chrome OS", r: /CrOS/ },
              { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ },
              { s: "iOS", r: /(iPhone|iPad|iPod)/ },
              { s: "Mac OS X", r: /Mac OS X/ },
              { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
              { s: "QNX", r: /QNX/ },
              { s: "UNIX", r: /UNIX/ },
              { s: "BeOS", r: /BeOS/ },
              { s: "OS/2", r: /OS\/2/ },
              { s: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
            for (const e in i) {
              const r = i[e];
              if (r.r.test(t)) {
                n = r.s;
                break;
              }
            }
            let r;
            switch ((n.includes("Windows") && ((r = /Windows (.*)/.exec(n)[1]), (n = "Windows")), n)) {
              case "Mac OS X":
                const n = /Mac OS X ([\.\_\d]+)/.exec(t);
                r = null != n ? n[1] : "unknown";
                break;
              case "Android":
                r = /Android ([\.\_\d]+)/.exec(t)[1];
                break;
              case "iOS":
                (r = /OS (\d+)_(\d+)_?(\d+)?/.exec(e)), (r = r[1] + "." + r[2] + "." + (0 | r[3]));
            }
            return { name: n, version: r };
          });
      },
      3162: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isNavFullRequest = void 0),
          (t.isNavFullRequest = function (e) {
            return "pageAttributes" in e;
          });
      },
      5708: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = (function () {
          const e = String.fromCharCode,
            t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
            i = {};
          function r(e, t) {
            if (!i[e]) {
              i[e] = {};
              for (let t = 0; t < e.length; t++) i[e][e.charAt(t)] = t;
            }
            return i[e][t];
          }
          const o = {
            compressToBase64: function (e) {
              if (null == e) return "";
              const n = o._compress(e, 6, function (e) {
                return t.charAt(e);
              });
              switch (n.length % 4) {
                default:
                case 0:
                  return n;
                case 1:
                  return n + "===";
                case 2:
                  return n + "==";
                case 3:
                  return n + "=";
              }
            },
            decompressFromBase64: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : o._decompress(e.length, 32, function (n) {
                    return r(t, e.charAt(n));
                  });
            },
            compressToUTF16: function (t) {
              return null == t
                ? ""
                : o._compress(t, 15, function (t) {
                    return e(t + 32);
                  }) + " ";
            },
            decompressFromUTF16: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : o._decompress(e.length, 16384, function (t) {
                    return e.charCodeAt(t) - 32;
                  });
            },
            compressToUint8Array: function (e) {
              const t = o.compress(e),
                n = new Uint8Array(2 * t.length);
              for (let e = 0, i = t.length; e < i; e++) {
                const i = t.charCodeAt(e);
                (n[2 * e] = i >>> 8), (n[2 * e + 1] = i % 256);
              }
              return n;
            },
            decompressFromUint8Array: function (t) {
              if (null == t) return o.decompress(t);
              {
                const n = new Array(t.length / 2);
                for (let e = 0, i = n.length; e < i; e++) n[e] = 256 * t[2 * e] + t[2 * e + 1];
                const i = [];
                return (
                  n.forEach(function (t) {
                    i.push(e(t));
                  }),
                  o.decompress(i.join(""))
                );
              }
            },
            compressToEncodedURIComponent: function (e) {
              return null == e
                ? ""
                : o._compress(e, 6, function (e) {
                    return n.charAt(e);
                  });
            },
            decompressFromEncodedURIComponent: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : ((e = e.replace(/ /g, "+")),
                  o._decompress(e.length, 32, function (t) {
                    return r(n, e.charAt(t));
                  }));
            },
            compress: function (t) {
              return o._compress(t, 16, function (t) {
                return e(t);
              });
            },
            _compress: function (e, t, n) {
              if (null == e) return "";
              let i, r;
              const o = {},
                a = {};
              let s = "",
                c = "",
                u = "",
                d = 2,
                l = 3,
                h = 2;
              const f = [];
              let p,
                g = 0,
                y = 0;
              for (p = 0; p < e.length; p += 1)
                if (
                  ((s = e.charAt(p)),
                  Object.prototype.hasOwnProperty.call(o, s) || ((o[s] = l++), (a[s] = !0)),
                  (c = u + s),
                  Object.prototype.hasOwnProperty.call(o, c))
                )
                  u = c;
                else {
                  if (Object.prototype.hasOwnProperty.call(a, u)) {
                    if (u.charCodeAt(0) < 256) {
                      for (i = 0; i < h; i++) (g <<= 1), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++;
                      for (r = u.charCodeAt(0), i = 0; i < 8; i++)
                        (g = (g << 1) | (1 & r)), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++, (r >>= 1);
                    } else {
                      for (r = 1, i = 0; i < h; i++) (g = (g << 1) | r), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++, (r = 0);
                      for (r = u.charCodeAt(0), i = 0; i < 16; i++)
                        (g = (g << 1) | (1 & r)), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++, (r >>= 1);
                    }
                    d--, 0 == d && ((d = Math.pow(2, h)), h++), delete a[u];
                  } else
                    for (r = o[u], i = 0; i < h; i++)
                      (g = (g << 1) | (1 & r)), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++, (r >>= 1);
                  d--, 0 == d && ((d = Math.pow(2, h)), h++), (o[c] = l++), (u = String(s));
                }
              if ("" !== u) {
                if (Object.prototype.hasOwnProperty.call(a, u)) {
                  if (u.charCodeAt(0) < 256) {
                    for (i = 0; i < h; i++) (g <<= 1), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++;
                    for (r = u.charCodeAt(0), i = 0; i < 8; i++)
                      (g = (g << 1) | (1 & r)), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++, (r >>= 1);
                  } else {
                    for (r = 1, i = 0; i < h; i++) (g = (g << 1) | r), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++, (r = 0);
                    for (r = u.charCodeAt(0), i = 0; i < 16; i++)
                      (g = (g << 1) | (1 & r)), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++, (r >>= 1);
                  }
                  d--, 0 == d && ((d = Math.pow(2, h)), h++), delete a[u];
                } else
                  for (r = o[u], i = 0; i < h; i++)
                    (g = (g << 1) | (1 & r)), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++, (r >>= 1);
                d--, 0 == d && ((d = Math.pow(2, h)), h++);
              }
              for (r = 2, i = 0; i < h; i++) (g = (g << 1) | (1 & r)), y == t - 1 ? ((y = 0), f.push(n(g)), (g = 0)) : y++, (r >>= 1);
              for (;;) {
                if (((g <<= 1), y == t - 1)) {
                  f.push(n(g));
                  break;
                }
                y++;
              }
              return f.join("");
            },
            decompress: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : o._decompress(e.length, 32768, function (t) {
                    return e.charCodeAt(t);
                  });
            },
            _decompress: function (t, n, i) {
              const r = [];
              let o,
                a = 4,
                s = 4,
                c = 3,
                u = "";
              const d = [];
              let l, h, f, p, g, y, v;
              const _ = { val: i(0), position: n, index: 1 };
              for (l = 0; l < 3; l += 1) r[l] = l;
              for (f = 0, g = Math.pow(2, 2), y = 1; y != g; )
                (p = _.val & _.position),
                  (_.position >>= 1),
                  0 == _.position && ((_.position = n), (_.val = i(_.index++))),
                  (f |= (p > 0 ? 1 : 0) * y),
                  (y <<= 1);
              switch ((o = f)) {
                case 0:
                  for (f = 0, g = Math.pow(2, 8), y = 1; y != g; )
                    (p = _.val & _.position),
                      (_.position >>= 1),
                      0 == _.position && ((_.position = n), (_.val = i(_.index++))),
                      (f |= (p > 0 ? 1 : 0) * y),
                      (y <<= 1);
                  v = e(f);
                  break;
                case 1:
                  for (f = 0, g = Math.pow(2, 16), y = 1; y != g; )
                    (p = _.val & _.position),
                      (_.position >>= 1),
                      0 == _.position && ((_.position = n), (_.val = i(_.index++))),
                      (f |= (p > 0 ? 1 : 0) * y),
                      (y <<= 1);
                  v = e(f);
                  break;
                case 2:
                  return "";
              }
              for (r[3] = v, h = v, d.push(v); ; ) {
                if (_.index > t) return "";
                for (f = 0, g = Math.pow(2, c), y = 1; y != g; )
                  (p = _.val & _.position),
                    (_.position >>= 1),
                    0 == _.position && ((_.position = n), (_.val = i(_.index++))),
                    (f |= (p > 0 ? 1 : 0) * y),
                    (y <<= 1);
                switch ((v = f)) {
                  case 0:
                    for (f = 0, g = Math.pow(2, 8), y = 1; y != g; )
                      (p = _.val & _.position),
                        (_.position >>= 1),
                        0 == _.position && ((_.position = n), (_.val = i(_.index++))),
                        (f |= (p > 0 ? 1 : 0) * y),
                        (y <<= 1);
                    (r[s++] = e(f)), (v = s - 1), a--;
                    break;
                  case 1:
                    for (f = 0, g = Math.pow(2, 16), y = 1; y != g; )
                      (p = _.val & _.position),
                        (_.position >>= 1),
                        0 == _.position && ((_.position = n), (_.val = i(_.index++))),
                        (f |= (p > 0 ? 1 : 0) * y),
                        (y <<= 1);
                    (r[s++] = e(f)), (v = s - 1), a--;
                    break;
                  case 2:
                    return d.join("");
                }
                if ((0 == a && ((a = Math.pow(2, c)), c++), r[v])) u = r[v];
                else {
                  if (v !== s) return null;
                  u = h + h.charAt(0);
                }
                d.push(u), (r[s++] = h + u.charAt(0)), a--, (h = u), 0 == a && ((a = Math.pow(2, c)), c++);
              }
            }
          };
          return o;
        })();
        t.default = n;
      },
      3740: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getLibVersion =
            t.isRealTab =
            t.isPrerender =
            t.getDomain =
            t.delay =
            t.isAllowedUrl =
            t.getPageData =
            t.calcEventType =
            t.isMainFrame =
            t.mapHeaders =
              void 0);
        const i = n(5072);
        (t.mapHeaders = function (e) {
          return null == e ? [] : e.map((e) => ({ name: e.name, value: e.value || "" }));
        }),
          (t.isMainFrame = function (e) {
            return 0 === e;
          }),
          (t.calcEventType = function (e) {
            return ["main_frame", "sub_frame"].includes(e) ? i.EventType.MAIN : i.EventType.RESOURCE;
          }),
          (t.getPageData = function () {
            return { name: window.name, title: document.title, referrer: document.referrer };
          }),
          (t.isAllowedUrl = function (e) {
            const t = ["http://", "https://"];
            for (const n of t) if (null != e.match(n)) return !0;
            return !1;
          }),
          (t.delay = async function (e) {
            return await new Promise((t) => setTimeout(t, e));
          }),
          (t.getDomain = function (e) {
            try {
              const { host: t } = new URL(e);
              return t;
            } catch (t) {
              return e;
            }
          }),
          (t.isPrerender = function (e) {
            return "prerender" === e;
          }),
          (t.isRealTab = function (e) {
            return void 0 !== e && e > 0;
          }),
          (t.getLibVersion = function () {
            return "3.2.2";
          });
      },
      3960: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = n(3190);
        t.default = i.default;
      },
      1519: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LocalStorage = void 0),
          (t.LocalStorage = class {
            static getItem(e) {
              return chrome.storage.local.get(e).then((t) => t[e]);
            }
            static setItem(e, t) {
              chrome.storage.local.set({ [e]: t });
            }
          });
      },
      3190: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function a(e) {
                  try {
                    c(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function s(e) {
                  try {
                    c(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                c((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__rest) ||
            function (e, t) {
              var n = {};
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
              if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                  t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
              }
              return n;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(1519),
          a = (e, t = 5e3, n = () => null) =>
            i(void 0, void 0, void 0, function* () {
              const { url: i } = e,
                o = r(e, ["url"]),
                a = new AbortController(),
                s = setTimeout(() => {
                  a.abort(), n();
                }, t),
                c = yield fetch(i, Object.assign(Object.assign({}, o), { signal: a.signal }));
              return clearTimeout(s), c;
            });
        t.default = class {
          constructor(e = {}) {
            if (
              ((this.storageSyncKey = "panalyticsid"),
              (this.userKeyCacheHeader = "X-PANEL-USER-KEY"),
              (this.userKeySymbolsCount = 22),
              "string" != typeof e.host)
            )
              throw new Error("Server host is undefined");
            e.storageKey && (this.storageSyncKey = e.storageKey),
              (this.host = e.host),
              (this.logging = !!e.logging),
              (this.cacheResourceUrl = this.host + "/api/identity/cache"),
              (this.cookieResourceUrl = this.host + "/api/identity/cookie");
          }
          generateKey() {
            let e = "";
            for (let t = 0; t < this.userKeySymbolsCount; t++)
              e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
            return this.log("key generated locally: " + e), e;
          }
          setKey(e) {
            return i(this, void 0, void 0, function* () {
              yield this.globalSetter(e);
            });
          }
          synchronize() {
            return i(this, void 0, void 0, function* () {
              const e = yield this.loadKey();
              yield this.globalSetter(e);
            });
          }
          loadKey() {
            return i(this, void 0, void 0, function* () {
              return new Promise((e) =>
                i(this, void 0, void 0, function* () {
                  let t;
                  t || (t = yield this.cacheGetter()),
                    t || (t = yield this.cookieGetter()),
                    t || (t = yield this.localStorageGetter()),
                    e(t);
                })
              );
            });
          }
          getKey(e, t) {
            this.getKeyAsync(t).then(e);
          }
          getKeyAsync(e = !0) {
            return i(this, void 0, void 0, function* () {
              const t = (yield this.loadKey()) || this.generateKey();
              return e && (yield this.setKey(t)), t;
            });
          }
          localStorageGetter() {
            return i(this, void 0, void 0, function* () {
              this.log("localStorageGetter: try to get " + this.storageSyncKey + " from localStorage.");
              const e = yield o.LocalStorage.getItem(this.storageSyncKey);
              return (
                e
                  ? this.log("localStorageGetter: " + this.storageSyncKey + " has been found in localStorage. Value: " + e)
                  : this.log("localStorageGetter: " + this.storageSyncKey + " has not been found in localStorage."),
                e
              );
            });
          }
          localStorageSetter(e) {
            this.log("localStorageSetter: " + this.storageSyncKey + " are going to be stored in localStorage."),
              o.LocalStorage.setItem(this.storageSyncKey, e);
          }
          cacheGetter() {
            return i(this, void 0, void 0, function* () {
              this.log("CacheGetter: try to get " + this.storageSyncKey + " from cache.");
              const e = this;
              return new Promise((t) => {
                a({ url: this.cacheResourceUrl, method: "GET" }, 1e3, function () {
                  e.log("CacheGetter: Caching request is timed out."), t();
                })
                  .then((n) => {
                    200 === n.status
                      ? n
                          .json()
                          .then((n) => {
                            const i = n.userKey;
                            i ? (e.log("CacheGetter: " + e.storageSyncKey + " has been found in cache. Value: " + i), t(i)) : t();
                          })
                          .catch(() => {
                            e.log("CacheGetter: Error occurred while retrieving " + e.storageSyncKey + " from cache."), t();
                          })
                      : (e.log("CacheGetter: Caching request has been failed."), t());
                  })
                  .catch(() => t());
              });
            });
          }
          cacheSetter(e) {
            this.log("CacheSetter: " + this.storageSyncKey + " are going to be stored in cache.");
            const t = this;
            return new Promise((n) => {
              fetch(this.cacheResourceUrl, { headers: { [this.userKeyCacheHeader]: e, "Cache-Control": "no-cache" }, method: "GET" })
                .then((i) => {
                  200 === i.status
                    ? (t.log("CacheSetter: Caching request to server has been succeeded."), n(e))
                    : (t.log("CacheSetter: Caching request has been failed."), n());
                })
                .catch(() => n());
            });
          }
          cookieGetter() {
            return i(this, void 0, void 0, function* () {
              this.log("CookieGetter: try to get " + this.storageSyncKey + " from cookie.");
              const e = this;
              return new Promise((t) => {
                a({ credentials: "include", method: "GET", url: this.cookieResourceUrl }, 5e3, function () {
                  e.log("CookieGetter: Request is timed out."), t();
                })
                  .then((n) => {
                    let i;
                    200 === n.status
                      ? n
                          .json()
                          .then((n) => {
                            (i = n.userKey),
                              i
                                ? (e.log("CookieGetter: " + e.storageSyncKey + " has been found in cookie. Value:" + i), t(i))
                                : (e.log("CookieGetter: " + e.storageSyncKey + " has not been found in cookie. "), t());
                          })
                          .catch(() => {
                            e.log("CookieGetter: Error occurred while retrieving " + e.storageSyncKey + " from cookie."), t();
                          })
                      : (e.log("CookieGetter: Cookie request has been failed."), t());
                  })
                  .catch(() => t());
              });
            });
          }
          cookieSetter(e) {
            this.log("CookieSetter: " + this.storageSyncKey + " are going to be stored in cookie.");
            const t = this;
            return new Promise((n) => {
              fetch(this.cookieResourceUrl + "?userKey=" + e, { credentials: "include", method: "POST" })
                .then((i) => {
                  200 === i.status
                    ? (t.log("CookieSetter: cookie request has been succeeded."), n(e))
                    : (t.log("CookieSetter: cookie request has been failed."), n());
                })
                .catch(() => n());
            });
          }
          cookieClear() {
            return i(this, void 0, void 0, function* () {
              this.log("CookieClearer: " + this.storageSyncKey + " are going to be deleted.");
              const e = this;
              return new Promise((t) => {
                fetch(this.cookieResourceUrl, { credentials: "include", method: "DELETE" })
                  .then((n) => {
                    200 === n.status
                      ? (e.log("CookieClearer: cookie request has been succeeded."), t())
                      : (e.log("CookieClearer: cookie request has been failed."), t());
                  })
                  .catch(() => t());
              });
            });
          }
          globalSetter(e) {
            return i(this, void 0, void 0, function* () {
              e
                ? (this.localStorageSetter(e), yield this.cacheSetter(e), yield this.cookieClear(), yield this.cookieSetter(e))
                : this.log("Value provided to global setter is invalid.");
            });
          }
          log(e) {
            this.logging && console.log(e);
          }
        };
      },
      707: function (e, t) {
        "use strict";
        var n =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
              function a(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              c((i = i.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = "*****",
          r = "SensitiveDataFilter:";
        t.default = class {
          constructor(e) {
            if ("string" != typeof e.host) throw "Server host is undefined";
            (this.host = e.host), (this.logging = !!e.logging);
          }
          init() {
            return n(this, void 0, void 0, function* () {
              yield this.updateRules();
            });
          }
          transformUrl(e) {
            if (!e || !this.rules || !this.rules.filters) return e;
            const t = new URL(e),
              n = t.host;
            t.password.length && (t.password = i),
              t.username.length && (t.username = i),
              this.rules.filters.forEach((e) => {
                n.match(e.domain) &&
                  ((t.pathname = this.processFilterRules(e.rules, t.pathname)),
                  (t.search = this.processFilterRules(e.rules, t.search)),
                  (t.hash = this.processFilterRules(e.rules, t.hash)));
              });
            const o = t.toString();
            return this.logging && this.log(`${r} Transformed url: ${e} -> ${o}`), o;
          }
          transformTitle(e, t) {
            if (!t || !this.rules || !this.rules.titles) return t;
            const n = this.rules.titles;
            let o = t;
            return (
              n.forEach((t) => {
                e.match(t.domain) &&
                  t.rules.forEach((e) => {
                    e.value && (o = this.applyRegexp(e.value, o, i));
                  });
              }),
              this.logging && this.log(`${r} Transformed title: ${t} -> ${o}`),
              o
            );
          }
          updateRules() {
            return n(this, void 0, void 0, function* () {
              const e = this.host + "/api/privacy/data/rules/exclusions";
              try {
                const t = yield fetch(e, { headers: { "Content-type": "application/json;charset=utf-8" } });
                this.rules = yield t.json();
              } catch (e) {
                throw new Error(e);
              }
            });
          }
          processFilterRules(e, t) {
            let n = t;
            return (
              e.forEach((e) => {
                if (e.value && e.type)
                  switch (e.type) {
                    case "parameter":
                      n = this.applyRegexp("([?&]" + e.value + "=)([^&]+)", n, "$1" + i);
                      break;
                    case "path":
                      n = this.applyPathFilter(e.value, n, i);
                      break;
                    default:
                      this.logging && this.log(`${r} Unknown rule type: ${e.type}`);
                  }
              }),
              n
            );
          }
          applyPathFilter(e, t, n) {
            const i = new RegExp(e, "i");
            let r;
            const o = t.match(i);
            if (!o) return t;
            const [a, s] = o;
            return (r = n + s + n), 0 === a.indexOf(s) && (r = s + n), a.indexOf(s) === a.length - s.length && (r = n + s), t.replace(a, r);
          }
          applyRegexp(e, t, n) {
            const i = new RegExp(e, "ig");
            return t.replace(i, n);
          }
          log(e) {
            console.log(e);
          }
        };
      },
      3442: (e, t) => {
        "use strict";
        t.__esModule = !0;
        var n = (function () {
          function e(t) {
            if (!t) throw new TypeError("Invalid argument; `value` has no value.");
            (this.value = e.EMPTY), t && e.isGuid(t) && (this.value = t);
          }
          return (
            (e.isGuid = function (t) {
              var n = t.toString();
              return t && (t instanceof e || e.validator.test(n));
            }),
            (e.create = function () {
              return new e([e.gen(2), e.gen(1), e.gen(1), e.gen(1), e.gen(3)].join("-"));
            }),
            (e.createEmpty = function () {
              return new e("emptyguid");
            }),
            (e.parse = function (t) {
              return new e(t);
            }),
            (e.raw = function () {
              return [e.gen(2), e.gen(1), e.gen(1), e.gen(1), e.gen(3)].join("-");
            }),
            (e.gen = function (e) {
              for (var t = "", n = 0; n < e; n++) t += ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
              return t;
            }),
            (e.prototype.equals = function (t) {
              return e.isGuid(t) && this.value === t.toString();
            }),
            (e.prototype.isEmpty = function () {
              return this.value === e.EMPTY;
            }),
            (e.prototype.toString = function () {
              return this.value;
            }),
            (e.prototype.toJSON = function () {
              return { value: this.value };
            }),
            (e.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i")),
            (e.EMPTY = "00000000-0000-0000-0000-000000000000"),
            e
          );
        })();
        t.Guid = n;
      },
      9934: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.tagProperty = t.tagParameter = t.decorate = void 0);
        var i = n(6674),
          r = n(6867);
        function o(e, t, n, r, o) {
          var a = {},
            s = "number" == typeof o,
            c = void 0 !== o && s ? o.toString() : n;
          if (s && void 0 !== n) throw new Error(i.INVALID_DECORATOR_OPERATION);
          Reflect.hasOwnMetadata(e, t) && (a = Reflect.getMetadata(e, t));
          var u = a[c];
          if (Array.isArray(u))
            for (var d = 0, l = u; d < l.length; d++) {
              var h = l[d];
              if (h.key === r.key) throw new Error(i.DUPLICATED_METADATA + " " + h.key.toString());
            }
          else u = [];
          u.push(r), (a[c] = u), Reflect.defineMetadata(e, a, t);
        }
        function a(e, t) {
          Reflect.decorate(e, t);
        }
        function s(e, t) {
          return function (n, i) {
            t(n, i, e);
          };
        }
        (t.tagParameter = function (e, t, n, i) {
          o(r.TAGGED, e, t, i, n);
        }),
          (t.tagProperty = function (e, t, n) {
            o(r.TAGGED_PROP, e.constructor, t, n);
          }),
          (t.decorate = function (e, t, n) {
            "number" == typeof n ? a([s(n, e)], t) : "string" == typeof n ? Reflect.decorate([e], t, n) : a([e], t);
          });
      },
      5744: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.inject = t.LazyServiceIdentifer = void 0);
        var i = n(6674),
          r = n(6867),
          o = n(7738),
          a = n(9934),
          s = (function () {
            function e(e) {
              this._cb = e;
            }
            return (
              (e.prototype.unwrap = function () {
                return this._cb();
              }),
              e
            );
          })();
        (t.LazyServiceIdentifer = s),
          (t.inject = function (e) {
            return function (t, n, s) {
              if (void 0 === e) throw new Error(i.UNDEFINED_INJECT_ANNOTATION(t.name));
              var c = new o.Metadata(r.INJECT_TAG, e);
              "number" == typeof s ? a.tagParameter(t, n, s, c) : a.tagProperty(t, n, c);
            };
          });
      },
      4315: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.injectable = void 0);
        var i = n(6674),
          r = n(6867);
        t.injectable = function () {
          return function (e) {
            if (Reflect.hasOwnMetadata(r.PARAM_TYPES, e)) throw new Error(i.DUPLICATED_INJECTABLE_DECORATOR);
            var t = Reflect.getMetadata(r.DESIGN_PARAM_TYPES, e) || [];
            return Reflect.defineMetadata(r.PARAM_TYPES, t, e), e;
          };
        };
      },
      1693: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.multiInject = void 0);
        var i = n(6867),
          r = n(7738),
          o = n(9934);
        t.multiInject = function (e) {
          return function (t, n, a) {
            var s = new r.Metadata(i.MULTI_INJECT_TAG, e);
            "number" == typeof a ? o.tagParameter(t, n, a, s) : o.tagProperty(t, n, s);
          };
        };
      },
      8085: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.named = void 0);
        var i = n(6867),
          r = n(7738),
          o = n(9934);
        t.named = function (e) {
          return function (t, n, a) {
            var s = new r.Metadata(i.NAMED_TAG, e);
            "number" == typeof a ? o.tagParameter(t, n, a, s) : o.tagProperty(t, n, s);
          };
        };
      },
      6515: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.optional = void 0);
        var i = n(6867),
          r = n(7738),
          o = n(9934);
        t.optional = function () {
          return function (e, t, n) {
            var a = new r.Metadata(i.OPTIONAL_TAG, !0);
            "number" == typeof n ? o.tagParameter(e, t, n, a) : o.tagProperty(e, t, a);
          };
        };
      },
      7014: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.postConstruct = void 0);
        var i = n(6674),
          r = n(6867),
          o = n(7738);
        t.postConstruct = function () {
          return function (e, t, n) {
            var a = new o.Metadata(r.POST_CONSTRUCT, t);
            if (Reflect.hasOwnMetadata(r.POST_CONSTRUCT, e.constructor)) throw new Error(i.MULTIPLE_POST_CONSTRUCT_METHODS);
            Reflect.defineMetadata(r.POST_CONSTRUCT, a, e.constructor);
          };
        };
      },
      2052: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.tagged = void 0);
        var i = n(7738),
          r = n(9934);
        t.tagged = function (e, t) {
          return function (n, o, a) {
            var s = new i.Metadata(e, t);
            "number" == typeof a ? r.tagParameter(n, o, a, s) : r.tagProperty(n, o, s);
          };
        };
      },
      5638: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.targetName = void 0);
        var i = n(6867),
          r = n(7738),
          o = n(9934);
        t.targetName = function (e) {
          return function (t, n, a) {
            var s = new r.Metadata(i.NAME_TAG, e);
            o.tagParameter(t, n, a, s);
          };
        };
      },
      6757: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.unmanaged = void 0);
        var i = n(6867),
          r = n(7738),
          o = n(9934);
        t.unmanaged = function () {
          return function (e, t, n) {
            var a = new r.Metadata(i.UNMANAGED_TAG, !0);
            o.tagParameter(e, t, n, a);
          };
        };
      },
      4290: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Binding = void 0);
        var i = n(8421),
          r = n(7791),
          o = (function () {
            function e(e, t) {
              (this.id = r.id()),
                (this.activated = !1),
                (this.serviceIdentifier = e),
                (this.scope = t),
                (this.type = i.BindingTypeEnum.Invalid),
                (this.constraint = function (e) {
                  return !0;
                }),
                (this.implementationType = null),
                (this.cache = null),
                (this.factory = null),
                (this.provider = null),
                (this.onActivation = null),
                (this.dynamicValue = null);
            }
            return (
              (e.prototype.clone = function () {
                var t = new e(this.serviceIdentifier, this.scope);
                return (
                  (t.activated = t.scope === i.BindingScopeEnum.Singleton && this.activated),
                  (t.implementationType = this.implementationType),
                  (t.dynamicValue = this.dynamicValue),
                  (t.scope = this.scope),
                  (t.type = this.type),
                  (t.factory = this.factory),
                  (t.provider = this.provider),
                  (t.constraint = this.constraint),
                  (t.onActivation = this.onActivation),
                  (t.cache = this.cache),
                  t
                );
              }),
              e
            );
          })();
        t.Binding = o;
      },
      3184: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BindingCount = void 0),
          (t.BindingCount = { MultipleBindingsAvailable: 2, NoBindingsAvailable: 0, OnlyOneBindingAvailable: 1 });
      },
      6674: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.STACK_OVERFLOW =
            t.CIRCULAR_DEPENDENCY_IN_FACTORY =
            t.POST_CONSTRUCT_ERROR =
            t.MULTIPLE_POST_CONSTRUCT_METHODS =
            t.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK =
            t.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE =
            t.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE =
            t.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT =
            t.ARGUMENTS_LENGTH_MISMATCH =
            t.INVALID_DECORATOR_OPERATION =
            t.INVALID_TO_SELF_VALUE =
            t.INVALID_FUNCTION_BINDING =
            t.INVALID_MIDDLEWARE_RETURN =
            t.NO_MORE_SNAPSHOTS_AVAILABLE =
            t.INVALID_BINDING_TYPE =
            t.NOT_IMPLEMENTED =
            t.CIRCULAR_DEPENDENCY =
            t.UNDEFINED_INJECT_ANNOTATION =
            t.MISSING_INJECT_ANNOTATION =
            t.MISSING_INJECTABLE_ANNOTATION =
            t.NOT_REGISTERED =
            t.CANNOT_UNBIND =
            t.AMBIGUOUS_MATCH =
            t.KEY_NOT_FOUND =
            t.NULL_ARGUMENT =
            t.DUPLICATED_METADATA =
            t.DUPLICATED_INJECTABLE_DECORATOR =
              void 0),
          (t.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times."),
          (t.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:"),
          (t.NULL_ARGUMENT = "NULL argument"),
          (t.KEY_NOT_FOUND = "Key Not Found"),
          (t.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:"),
          (t.CANNOT_UNBIND = "Could not unbind serviceIdentifier:"),
          (t.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:"),
          (t.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:"),
          (t.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:"),
          (t.UNDEFINED_INJECT_ANNOTATION = function (e) {
            return (
              "@inject called with undefined this could mean that the class " +
              e +
              " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."
            );
          }),
          (t.CIRCULAR_DEPENDENCY = "Circular dependency found:"),
          (t.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet."),
          (t.INVALID_BINDING_TYPE = "Invalid binding type:"),
          (t.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore."),
          (t.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!"),
          (t.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!"),
          (t.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier"),
          (t.INVALID_DECORATOR_OPERATION =
            "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property."),
          (t.ARGUMENTS_LENGTH_MISMATCH = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return (
              "The number of constructor arguments in the derived class " +
              e[0] +
              " must be >= than the number of constructor arguments of its base class."
            );
          }),
          (t.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object."),
          (t.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE =
            "Invalid Container option. Default scope must be a string ('singleton' or 'transient')."),
          (t.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean"),
          (t.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean"),
          (t.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class"),
          (t.POST_CONSTRUCT_ERROR = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return "@postConstruct error in class " + e[0] + ": " + e[1];
          }),
          (t.CIRCULAR_DEPENDENCY_IN_FACTORY = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return (
              "It looks like there is a circular dependency in one of the '" +
              e[0] +
              "' bindings. Please investigate bindings withservice identifier '" +
              e[1] +
              "'."
            );
          }),
          (t.STACK_OVERFLOW = "Maximum call stack size exceeded");
      },
      8421: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TargetTypeEnum = t.BindingTypeEnum = t.BindingScopeEnum = void 0),
          (t.BindingScopeEnum = { Request: "Request", Singleton: "Singleton", Transient: "Transient" }),
          (t.BindingTypeEnum = {
            ConstantValue: "ConstantValue",
            Constructor: "Constructor",
            DynamicValue: "DynamicValue",
            Factory: "Factory",
            Function: "Function",
            Instance: "Instance",
            Invalid: "Invalid",
            Provider: "Provider"
          }),
          (t.TargetTypeEnum = { ClassProperty: "ClassProperty", ConstructorArgument: "ConstructorArgument", Variable: "Variable" });
      },
      6867: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NON_CUSTOM_TAG_KEYS =
            t.POST_CONSTRUCT =
            t.DESIGN_PARAM_TYPES =
            t.PARAM_TYPES =
            t.TAGGED_PROP =
            t.TAGGED =
            t.MULTI_INJECT_TAG =
            t.INJECT_TAG =
            t.OPTIONAL_TAG =
            t.UNMANAGED_TAG =
            t.NAME_TAG =
            t.NAMED_TAG =
              void 0),
          (t.NAMED_TAG = "named"),
          (t.NAME_TAG = "name"),
          (t.UNMANAGED_TAG = "unmanaged"),
          (t.OPTIONAL_TAG = "optional"),
          (t.INJECT_TAG = "inject"),
          (t.MULTI_INJECT_TAG = "multi_inject"),
          (t.TAGGED = "inversify:tagged"),
          (t.TAGGED_PROP = "inversify:tagged_props"),
          (t.PARAM_TYPES = "inversify:paramtypes"),
          (t.DESIGN_PARAM_TYPES = "design:paramtypes"),
          (t.POST_CONSTRUCT = "post_construct"),
          (t.NON_CUSTOM_TAG_KEYS = [t.INJECT_TAG, t.MULTI_INJECT_TAG, t.NAME_TAG, t.UNMANAGED_TAG, t.NAMED_TAG, t.OPTIONAL_TAG]);
      },
      1389: function (e, t, n) {
        "use strict";
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function a(e) {
                  try {
                    c(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function s(e) {
                  try {
                    c(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                c((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
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
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) &&
                            !(r = r.call(i, o[1])).done)
                        )
                          return r;
                        switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                          case 0:
                          case 1:
                            r = o;
                            break;
                          case 4:
                            return a.label++, { value: o[1], done: !1 };
                          case 5:
                            a.label++, (i = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                              a = 0;
                              continue;
                            }
                            if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                              a.label = o[1];
                              break;
                            }
                            if (6 === o[0] && a.label < r[1]) {
                              (a.label = r[1]), (r = o);
                              break;
                            }
                            if (r && a.label < r[2]) {
                              (a.label = r[2]), a.ops.push(o);
                              break;
                            }
                            r[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = t.call(e, a);
                      } catch (e) {
                        (o = [6, e]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, s]);
                };
              }
            },
          o =
            (this && this.__spreadArray) ||
            function (e, t) {
              for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n];
              return e;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Container = void 0);
        var a = n(4290),
          s = n(6674),
          c = n(8421),
          u = n(6867),
          d = n(1377),
          l = n(6311),
          h = n(1927),
          f = n(1860),
          p = n(7791),
          g = n(5800),
          y = n(5700),
          v = n(175),
          _ = (function () {
            function e(e) {
              this._appliedMiddleware = [];
              var t = e || {};
              if ("object" != typeof t) throw new Error("" + s.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
              if (void 0 === t.defaultScope) t.defaultScope = c.BindingScopeEnum.Transient;
              else if (
                t.defaultScope !== c.BindingScopeEnum.Singleton &&
                t.defaultScope !== c.BindingScopeEnum.Transient &&
                t.defaultScope !== c.BindingScopeEnum.Request
              )
                throw new Error("" + s.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
              if (void 0 === t.autoBindInjectable) t.autoBindInjectable = !1;
              else if ("boolean" != typeof t.autoBindInjectable) throw new Error("" + s.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
              if (void 0 === t.skipBaseClassChecks) t.skipBaseClassChecks = !1;
              else if ("boolean" != typeof t.skipBaseClassChecks) throw new Error("" + s.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
              (this.options = {
                autoBindInjectable: t.autoBindInjectable,
                defaultScope: t.defaultScope,
                skipBaseClassChecks: t.skipBaseClassChecks
              }),
                (this.id = p.id()),
                (this._bindingDictionary = new v.Lookup()),
                (this._snapshots = []),
                (this._middleware = null),
                (this.parent = null),
                (this._metadataReader = new d.MetadataReader());
            }
            return (
              (e.merge = function (t, n) {
                for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
                var a = new e(),
                  s = o([t, n], i).map(function (e) {
                    return l.getBindingDictionary(e);
                  }),
                  c = l.getBindingDictionary(a);
                return (
                  s.forEach(function (e) {
                    var t;
                    (t = c),
                      e.traverse(function (e, n) {
                        n.forEach(function (e) {
                          t.add(e.serviceIdentifier, e.clone());
                        });
                      });
                  }),
                  a
                );
              }),
              (e.prototype.load = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = this._getContainerModuleHelpersFactory(), i = 0, r = e; i < r.length; i++) {
                  var o = r[i],
                    a = n(o.id);
                  o.registry(a.bindFunction, a.unbindFunction, a.isboundFunction, a.rebindFunction);
                }
              }),
              (e.prototype.loadAsync = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return i(this, void 0, void 0, function () {
                  var t, n, i, o, a;
                  return r(this, function (r) {
                    switch (r.label) {
                      case 0:
                        (t = this._getContainerModuleHelpersFactory()), (n = 0), (i = e), (r.label = 1);
                      case 1:
                        return n < i.length
                          ? ((o = i[n]),
                            (a = t(o.id)),
                            [4, o.registry(a.bindFunction, a.unbindFunction, a.isboundFunction, a.rebindFunction)])
                          : [3, 4];
                      case 2:
                        r.sent(), (r.label = 3);
                      case 3:
                        return n++, [3, 1];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.unload = function () {
                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                t.forEach(function (t) {
                  var n,
                    i =
                      ((n = t.id),
                      function (e) {
                        return e.moduleId === n;
                      });
                  e._bindingDictionary.removeByCondition(i);
                });
              }),
              (e.prototype.bind = function (e) {
                var t = this.options.defaultScope || c.BindingScopeEnum.Transient,
                  n = new a.Binding(e, t);
                return this._bindingDictionary.add(e, n), new f.BindingToSyntax(n);
              }),
              (e.prototype.rebind = function (e) {
                return this.unbind(e), this.bind(e);
              }),
              (e.prototype.unbind = function (e) {
                try {
                  this._bindingDictionary.remove(e);
                } catch (t) {
                  throw new Error(s.CANNOT_UNBIND + " " + g.getServiceIdentifierAsString(e));
                }
              }),
              (e.prototype.unbindAll = function () {
                this._bindingDictionary = new v.Lookup();
              }),
              (e.prototype.isBound = function (e) {
                var t = this._bindingDictionary.hasKey(e);
                return !t && this.parent && (t = this.parent.isBound(e)), t;
              }),
              (e.prototype.isBoundNamed = function (e, t) {
                return this.isBoundTagged(e, u.NAMED_TAG, t);
              }),
              (e.prototype.isBoundTagged = function (e, t, n) {
                var i = !1;
                if (this._bindingDictionary.hasKey(e)) {
                  var r = this._bindingDictionary.get(e),
                    o = l.createMockRequest(this, e, t, n);
                  i = r.some(function (e) {
                    return e.constraint(o);
                  });
                }
                return !i && this.parent && (i = this.parent.isBoundTagged(e, t, n)), i;
              }),
              (e.prototype.snapshot = function () {
                this._snapshots.push(y.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware));
              }),
              (e.prototype.restore = function () {
                var e = this._snapshots.pop();
                if (void 0 === e) throw new Error(s.NO_MORE_SNAPSHOTS_AVAILABLE);
                (this._bindingDictionary = e.bindings), (this._middleware = e.middleware);
              }),
              (e.prototype.createChild = function (t) {
                var n = new e(t || this.options);
                return (n.parent = this), n;
              }),
              (e.prototype.applyMiddleware = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._appliedMiddleware = this._appliedMiddleware.concat(e);
                var n = this._middleware ? this._middleware : this._planAndResolve();
                this._middleware = e.reduce(function (e, t) {
                  return t(e);
                }, n);
              }),
              (e.prototype.applyCustomMetadataReader = function (e) {
                this._metadataReader = e;
              }),
              (e.prototype.get = function (e) {
                return this._get(!1, !1, c.TargetTypeEnum.Variable, e);
              }),
              (e.prototype.getTagged = function (e, t, n) {
                return this._get(!1, !1, c.TargetTypeEnum.Variable, e, t, n);
              }),
              (e.prototype.getNamed = function (e, t) {
                return this.getTagged(e, u.NAMED_TAG, t);
              }),
              (e.prototype.getAll = function (e) {
                return this._get(!0, !0, c.TargetTypeEnum.Variable, e);
              }),
              (e.prototype.getAllTagged = function (e, t, n) {
                return this._get(!1, !0, c.TargetTypeEnum.Variable, e, t, n);
              }),
              (e.prototype.getAllNamed = function (e, t) {
                return this.getAllTagged(e, u.NAMED_TAG, t);
              }),
              (e.prototype.resolve = function (e) {
                var t = this.createChild();
                return (
                  t.bind(e).toSelf(),
                  this._appliedMiddleware.forEach(function (e) {
                    t.applyMiddleware(e);
                  }),
                  t.get(e)
                );
              }),
              (e.prototype._getContainerModuleHelpersFactory = function () {
                var e = this,
                  t = function (e, t) {
                    e._binding.moduleId = t;
                  },
                  n = function (n) {
                    return function (i) {
                      var r = e.rebind.bind(e)(i);
                      return t(r, n), r;
                    };
                  };
                return function (i) {
                  return {
                    bindFunction:
                      ((r = i),
                      function (n) {
                        var i = e.bind.bind(e)(n);
                        return t(i, r), i;
                      }),
                    isboundFunction: function (t) {
                      return e.isBound.bind(e)(t);
                    },
                    rebindFunction: n(i),
                    unbindFunction: function (t) {
                      e.unbind.bind(e)(t);
                    }
                  };
                  var r;
                };
              }),
              (e.prototype._get = function (e, t, n, i, r, o) {
                var a = null,
                  c = {
                    avoidConstraints: e,
                    contextInterceptor: function (e) {
                      return e;
                    },
                    isMultiInject: t,
                    key: r,
                    serviceIdentifier: i,
                    targetType: n,
                    value: o
                  };
                if (this._middleware) {
                  if (null == (a = this._middleware(c))) throw new Error(s.INVALID_MIDDLEWARE_RETURN);
                } else a = this._planAndResolve()(c);
                return a;
              }),
              (e.prototype._planAndResolve = function () {
                var e = this;
                return function (t) {
                  var n = l.plan(
                    e._metadataReader,
                    e,
                    t.isMultiInject,
                    t.targetType,
                    t.serviceIdentifier,
                    t.key,
                    t.value,
                    t.avoidConstraints
                  );
                  return (n = t.contextInterceptor(n)), h.resolve(n);
                };
              }),
              e
            );
          })();
        t.Container = _;
      },
      3244: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AsyncContainerModule = t.ContainerModule = void 0);
        var i = n(7791);
        t.ContainerModule = function (e) {
          (this.id = i.id()), (this.registry = e);
        };
        t.AsyncContainerModule = function (e) {
          (this.id = i.id()), (this.registry = e);
        };
      },
      5700: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ContainerSnapshot = void 0);
        var n = (function () {
          function e() {}
          return (
            (e.of = function (t, n) {
              var i = new e();
              return (i.bindings = t), (i.middleware = n), i;
            }),
            e
          );
        })();
        t.ContainerSnapshot = n;
      },
      175: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Lookup = void 0);
        var i = n(6674),
          r = (function () {
            function e() {
              this._map = new Map();
            }
            return (
              (e.prototype.getMap = function () {
                return this._map;
              }),
              (e.prototype.add = function (e, t) {
                if (null == e) throw new Error(i.NULL_ARGUMENT);
                if (null == t) throw new Error(i.NULL_ARGUMENT);
                var n = this._map.get(e);
                void 0 !== n ? (n.push(t), this._map.set(e, n)) : this._map.set(e, [t]);
              }),
              (e.prototype.get = function (e) {
                if (null == e) throw new Error(i.NULL_ARGUMENT);
                var t = this._map.get(e);
                if (void 0 !== t) return t;
                throw new Error(i.KEY_NOT_FOUND);
              }),
              (e.prototype.remove = function (e) {
                if (null == e) throw new Error(i.NULL_ARGUMENT);
                if (!this._map.delete(e)) throw new Error(i.KEY_NOT_FOUND);
              }),
              (e.prototype.removeByCondition = function (e) {
                var t = this;
                this._map.forEach(function (n, i) {
                  var r = n.filter(function (t) {
                    return !e(t);
                  });
                  r.length > 0 ? t._map.set(i, r) : t._map.delete(i);
                });
              }),
              (e.prototype.hasKey = function (e) {
                if (null == e) throw new Error(i.NULL_ARGUMENT);
                return this._map.has(e);
              }),
              (e.prototype.clone = function () {
                var t = new e();
                return (
                  this._map.forEach(function (e, n) {
                    e.forEach(function (e) {
                      return t.add(n, e.clone());
                    });
                  }),
                  t
                );
              }),
              (e.prototype.traverse = function (e) {
                this._map.forEach(function (t, n) {
                  e(n, t);
                });
              }),
              e
            );
          })();
        t.Lookup = r;
      },
      6700: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.multiBindToService =
            t.getServiceIdentifierAsString =
            t.typeConstraint =
            t.namedConstraint =
            t.taggedConstraint =
            t.traverseAncerstors =
            t.decorate =
            t.id =
            t.MetadataReader =
            t.postConstruct =
            t.targetName =
            t.multiInject =
            t.unmanaged =
            t.optional =
            t.LazyServiceIdentifer =
            t.inject =
            t.named =
            t.tagged =
            t.injectable =
            t.ContainerModule =
            t.AsyncContainerModule =
            t.TargetTypeEnum =
            t.BindingTypeEnum =
            t.BindingScopeEnum =
            t.Container =
            t.METADATA_KEY =
              void 0);
        var i = n(6867);
        t.METADATA_KEY = i;
        var r = n(1389);
        Object.defineProperty(t, "Container", {
          enumerable: !0,
          get: function () {
            return r.Container;
          }
        });
        var o = n(8421);
        Object.defineProperty(t, "BindingScopeEnum", {
          enumerable: !0,
          get: function () {
            return o.BindingScopeEnum;
          }
        }),
          Object.defineProperty(t, "BindingTypeEnum", {
            enumerable: !0,
            get: function () {
              return o.BindingTypeEnum;
            }
          }),
          Object.defineProperty(t, "TargetTypeEnum", {
            enumerable: !0,
            get: function () {
              return o.TargetTypeEnum;
            }
          });
        var a = n(3244);
        Object.defineProperty(t, "AsyncContainerModule", {
          enumerable: !0,
          get: function () {
            return a.AsyncContainerModule;
          }
        }),
          Object.defineProperty(t, "ContainerModule", {
            enumerable: !0,
            get: function () {
              return a.ContainerModule;
            }
          });
        var s = n(4315);
        Object.defineProperty(t, "injectable", {
          enumerable: !0,
          get: function () {
            return s.injectable;
          }
        });
        var c = n(2052);
        Object.defineProperty(t, "tagged", {
          enumerable: !0,
          get: function () {
            return c.tagged;
          }
        });
        var u = n(8085);
        Object.defineProperty(t, "named", {
          enumerable: !0,
          get: function () {
            return u.named;
          }
        });
        var d = n(5744);
        Object.defineProperty(t, "inject", {
          enumerable: !0,
          get: function () {
            return d.inject;
          }
        }),
          Object.defineProperty(t, "LazyServiceIdentifer", {
            enumerable: !0,
            get: function () {
              return d.LazyServiceIdentifer;
            }
          });
        var l = n(6515);
        Object.defineProperty(t, "optional", {
          enumerable: !0,
          get: function () {
            return l.optional;
          }
        });
        var h = n(6757);
        Object.defineProperty(t, "unmanaged", {
          enumerable: !0,
          get: function () {
            return h.unmanaged;
          }
        });
        var f = n(1693);
        Object.defineProperty(t, "multiInject", {
          enumerable: !0,
          get: function () {
            return f.multiInject;
          }
        });
        var p = n(5638);
        Object.defineProperty(t, "targetName", {
          enumerable: !0,
          get: function () {
            return p.targetName;
          }
        });
        var g = n(7014);
        Object.defineProperty(t, "postConstruct", {
          enumerable: !0,
          get: function () {
            return g.postConstruct;
          }
        });
        var y = n(1377);
        Object.defineProperty(t, "MetadataReader", {
          enumerable: !0,
          get: function () {
            return y.MetadataReader;
          }
        });
        var v = n(7791);
        Object.defineProperty(t, "id", {
          enumerable: !0,
          get: function () {
            return v.id;
          }
        });
        var _ = n(9934);
        Object.defineProperty(t, "decorate", {
          enumerable: !0,
          get: function () {
            return _.decorate;
          }
        });
        var b = n(758);
        Object.defineProperty(t, "traverseAncerstors", {
          enumerable: !0,
          get: function () {
            return b.traverseAncerstors;
          }
        }),
          Object.defineProperty(t, "taggedConstraint", {
            enumerable: !0,
            get: function () {
              return b.taggedConstraint;
            }
          }),
          Object.defineProperty(t, "namedConstraint", {
            enumerable: !0,
            get: function () {
              return b.namedConstraint;
            }
          }),
          Object.defineProperty(t, "typeConstraint", {
            enumerable: !0,
            get: function () {
              return b.typeConstraint;
            }
          });
        var m = n(5800);
        Object.defineProperty(t, "getServiceIdentifierAsString", {
          enumerable: !0,
          get: function () {
            return m.getServiceIdentifierAsString;
          }
        });
        var w = n(600);
        Object.defineProperty(t, "multiBindToService", {
          enumerable: !0,
          get: function () {
            return w.multiBindToService;
          }
        });
      },
      5228: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Context = void 0);
        var i = n(7791),
          r = (function () {
            function e(e) {
              (this.id = i.id()), (this.container = e);
            }
            return (
              (e.prototype.addPlan = function (e) {
                this.plan = e;
              }),
              (e.prototype.setCurrentRequest = function (e) {
                this.currentRequest = e;
              }),
              e
            );
          })();
        t.Context = r;
      },
      7738: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Metadata = void 0);
        var i = n(6867),
          r = (function () {
            function e(e, t) {
              (this.key = e), (this.value = t);
            }
            return (
              (e.prototype.toString = function () {
                return this.key === i.NAMED_TAG
                  ? "named: " + this.value.toString() + " "
                  : "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
              }),
              e
            );
          })();
        t.Metadata = r;
      },
      1377: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MetadataReader = void 0);
        var i = n(6867),
          r = (function () {
            function e() {}
            return (
              (e.prototype.getConstructorMetadata = function (e) {
                return {
                  compilerGeneratedMetadata: Reflect.getMetadata(i.PARAM_TYPES, e),
                  userGeneratedMetadata: Reflect.getMetadata(i.TAGGED, e) || {}
                };
              }),
              (e.prototype.getPropertiesMetadata = function (e) {
                return Reflect.getMetadata(i.TAGGED_PROP, e) || [];
              }),
              e
            );
          })();
        t.MetadataReader = r;
      },
      5314: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Plan = void 0);
        t.Plan = function (e, t) {
          (this.parentContext = e), (this.rootRequest = t);
        };
      },
      6311: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.getBindingDictionary = t.createMockRequest = t.plan = void 0);
        var i = n(3184),
          r = n(6674),
          o = n(8421),
          a = n(6867),
          s = n(5265),
          c = n(5800),
          u = n(5228),
          d = n(7738),
          l = n(5314),
          h = n(6e3),
          f = n(6748),
          p = n(8924);
        function g(e) {
          return e._bindingDictionary;
        }
        function y(e, t, n, o, a) {
          var s,
            u = _(n.container, a.serviceIdentifier);
          return (
            u.length === i.BindingCount.NoBindingsAvailable &&
              n.container.options.autoBindInjectable &&
              "function" == typeof a.serviceIdentifier &&
              e.getConstructorMetadata(a.serviceIdentifier).compilerGeneratedMetadata &&
              (n.container.bind(a.serviceIdentifier).toSelf(), (u = _(n.container, a.serviceIdentifier))),
            (s = t
              ? u
              : u.filter(function (e) {
                  var t = new f.Request(e.serviceIdentifier, n, o, e, a);
                  return e.constraint(t);
                })),
            (function (e, t, n, o) {
              switch (t.length) {
                case i.BindingCount.NoBindingsAvailable:
                  if (n.isOptional()) return t;
                  var a = c.getServiceIdentifierAsString(e),
                    s = r.NOT_REGISTERED;
                  throw ((s += c.listMetadataForTarget(a, n)), (s += c.listRegisteredBindingsForServiceIdentifier(o, a, _)), new Error(s));
                case i.BindingCount.OnlyOneBindingAvailable:
                  if (!n.isArray()) return t;
                case i.BindingCount.MultipleBindingsAvailable:
                default:
                  if (n.isArray()) return t;
                  throw (
                    ((a = c.getServiceIdentifierAsString(e)),
                    (s = r.AMBIGUOUS_MATCH + " " + a),
                    (s += c.listRegisteredBindingsForServiceIdentifier(o, a, _)),
                    new Error(s))
                  );
              }
            })(a.serviceIdentifier, s, a, n.container),
            s
          );
        }
        function v(e, t, n, i, a, s) {
          var c, u;
          if (null === a) {
            (c = y(e, t, i, null, s)), (u = new f.Request(n, i, null, c, s));
            var d = new l.Plan(i, u);
            i.addPlan(d);
          } else (c = y(e, t, i, a, s)), (u = a.addChildRequest(s.serviceIdentifier, c, s));
          c.forEach(function (t) {
            var n = null;
            if (s.isArray()) n = u.addChildRequest(t.serviceIdentifier, t, s);
            else {
              if (t.cache) return;
              n = u;
            }
            if (t.type === o.BindingTypeEnum.Instance && null !== t.implementationType) {
              var a = h.getDependencies(e, t.implementationType);
              if (!i.container.options.skipBaseClassChecks) {
                var c = h.getBaseClassDependencyCount(e, t.implementationType);
                if (a.length < c) {
                  var d = r.ARGUMENTS_LENGTH_MISMATCH(h.getFunctionName(t.implementationType));
                  throw new Error(d);
                }
              }
              a.forEach(function (t) {
                v(e, !1, t.serviceIdentifier, i, n, t);
              });
            }
          });
        }
        function _(e, t) {
          var n = [],
            i = g(e);
          return i.hasKey(t) ? (n = i.get(t)) : null !== e.parent && (n = _(e.parent, t)), n;
        }
        (t.getBindingDictionary = g),
          (t.plan = function (e, t, n, i, r, o, l, h) {
            void 0 === h && (h = !1);
            var f = new u.Context(t),
              g = (function (e, t, n, i, r, o) {
                var s = e ? a.MULTI_INJECT_TAG : a.INJECT_TAG,
                  c = new d.Metadata(s, n),
                  u = new p.Target(t, "", n, c);
                if (void 0 !== r) {
                  var l = new d.Metadata(r, o);
                  u.metadata.push(l);
                }
                return u;
              })(n, i, r, 0, o, l);
            try {
              return v(e, h, r, f, null, g), f;
            } catch (e) {
              throw (s.isStackOverflowExeption(e) && f.plan && c.circularDependencyToException(f.plan.rootRequest), e);
            }
          }),
          (t.createMockRequest = function (e, t, n, i) {
            var r = new p.Target(o.TargetTypeEnum.Variable, "", t, new d.Metadata(n, i)),
              a = new u.Context(e);
            return new f.Request(t, a, null, [], r);
          });
      },
      8460: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.QueryableString = void 0);
        var n = (function () {
          function e(e) {
            this.str = e;
          }
          return (
            (e.prototype.startsWith = function (e) {
              return 0 === this.str.indexOf(e);
            }),
            (e.prototype.endsWith = function (e) {
              var t,
                n = e.split("").reverse().join("");
              return (t = this.str.split("").reverse().join("")), this.startsWith.call({ str: t }, n);
            }),
            (e.prototype.contains = function (e) {
              return -1 !== this.str.indexOf(e);
            }),
            (e.prototype.equals = function (e) {
              return this.str === e;
            }),
            (e.prototype.value = function () {
              return this.str;
            }),
            e
          );
        })();
        t.QueryableString = n;
      },
      6e3: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__spreadArray) ||
          function (e, t) {
            for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n];
            return e;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getFunctionName = t.getBaseClassDependencyCount = t.getDependencies = void 0);
        var r = n(5744),
          o = n(6674),
          a = n(8421),
          s = n(6867),
          c = n(5800);
        Object.defineProperty(t, "getFunctionName", {
          enumerable: !0,
          get: function () {
            return c.getFunctionName;
          }
        });
        var u = n(8924);
        function d(e, t, n, r) {
          var a = e.getConstructorMetadata(n),
            s = a.compilerGeneratedMetadata;
          if (void 0 === s) {
            var c = o.MISSING_INJECTABLE_ANNOTATION + " " + t + ".";
            throw new Error(c);
          }
          var u = a.userGeneratedMetadata,
            d = Object.keys(u),
            f = 0 === n.length && d.length > 0,
            p = d.length > n.length,
            g = (function (e, t, n, i, r) {
              for (var o = [], a = 0; a < r; a++) {
                var s = l(a, e, t, n, i);
                null !== s && o.push(s);
              }
              return o;
            })(r, t, s, u, f || p ? d.length : n.length),
            y = h(e, n);
          return i(i([], g), y);
        }
        function l(e, t, n, i, s) {
          var c = s[e.toString()] || [],
            d = f(c),
            l = !0 !== d.unmanaged,
            h = i[e];
          if (((h = d.inject || d.multiInject || h) instanceof r.LazyServiceIdentifer && (h = h.unwrap()), l)) {
            if (!t && (h === Object || h === Function || void 0 === h)) {
              var p = o.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + n + ".";
              throw new Error(p);
            }
            var g = new u.Target(a.TargetTypeEnum.ConstructorArgument, d.targetName, h);
            return (g.metadata = c), g;
          }
          return null;
        }
        function h(e, t) {
          for (var n = e.getPropertiesMetadata(t), r = [], o = 0, s = Object.keys(n); o < s.length; o++) {
            var c = s[o],
              d = n[c],
              l = f(n[c]),
              p = l.targetName || c,
              g = l.inject || l.multiInject,
              y = new u.Target(a.TargetTypeEnum.ClassProperty, p, g);
            (y.metadata = d), r.push(y);
          }
          var v = Object.getPrototypeOf(t.prototype).constructor;
          if (v !== Object) {
            var _ = h(e, v);
            r = i(i([], r), _);
          }
          return r;
        }
        function f(e) {
          var t = {};
          return (
            e.forEach(function (e) {
              t[e.key.toString()] = e.value;
            }),
            { inject: t[s.INJECT_TAG], multiInject: t[s.MULTI_INJECT_TAG], targetName: t[s.NAME_TAG], unmanaged: t[s.UNMANAGED_TAG] }
          );
        }
        (t.getDependencies = function (e, t) {
          return d(e, c.getFunctionName(t), t, !1);
        }),
          (t.getBaseClassDependencyCount = function e(t, n) {
            var i = Object.getPrototypeOf(n.prototype).constructor;
            if (i !== Object) {
              var r = d(t, c.getFunctionName(i), i, !0),
                o = r.map(function (e) {
                  return e.metadata.filter(function (e) {
                    return e.key === s.UNMANAGED_TAG;
                  });
                }),
                a = [].concat.apply([], o).length,
                u = r.length - a;
              return u > 0 ? u : e(t, i);
            }
            return 0;
          });
      },
      6748: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Request = void 0);
        var i = n(7791),
          r = (function () {
            function e(e, t, n, r, o) {
              (this.id = i.id()),
                (this.serviceIdentifier = e),
                (this.parentContext = t),
                (this.parentRequest = n),
                (this.target = o),
                (this.childRequests = []),
                (this.bindings = Array.isArray(r) ? r : [r]),
                (this.requestScope = null === n ? new Map() : null);
            }
            return (
              (e.prototype.addChildRequest = function (t, n, i) {
                var r = new e(t, this.parentContext, this, n, i);
                return this.childRequests.push(r), r;
              }),
              e
            );
          })();
        t.Request = r;
      },
      8924: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Target = void 0);
        var i = n(6867),
          r = n(7791),
          o = n(7738),
          a = n(8460),
          s = (function () {
            function e(e, t, n, s) {
              (this.id = r.id()),
                (this.type = e),
                (this.serviceIdentifier = n),
                (this.name = new a.QueryableString(t || "")),
                (this.metadata = new Array());
              var c = null;
              "string" == typeof s ? (c = new o.Metadata(i.NAMED_TAG, s)) : s instanceof o.Metadata && (c = s),
                null !== c && this.metadata.push(c);
            }
            return (
              (e.prototype.hasTag = function (e) {
                for (var t = 0, n = this.metadata; t < n.length; t++) if (n[t].key === e) return !0;
                return !1;
              }),
              (e.prototype.isArray = function () {
                return this.hasTag(i.MULTI_INJECT_TAG);
              }),
              (e.prototype.matchesArray = function (e) {
                return this.matchesTag(i.MULTI_INJECT_TAG)(e);
              }),
              (e.prototype.isNamed = function () {
                return this.hasTag(i.NAMED_TAG);
              }),
              (e.prototype.isTagged = function () {
                return this.metadata.some(function (e) {
                  return i.NON_CUSTOM_TAG_KEYS.every(function (t) {
                    return e.key !== t;
                  });
                });
              }),
              (e.prototype.isOptional = function () {
                return this.matchesTag(i.OPTIONAL_TAG)(!0);
              }),
              (e.prototype.getNamedTag = function () {
                return this.isNamed()
                  ? this.metadata.filter(function (e) {
                      return e.key === i.NAMED_TAG;
                    })[0]
                  : null;
              }),
              (e.prototype.getCustomTags = function () {
                return this.isTagged()
                  ? this.metadata.filter(function (e) {
                      return i.NON_CUSTOM_TAG_KEYS.every(function (t) {
                        return e.key !== t;
                      });
                    })
                  : null;
              }),
              (e.prototype.matchesNamedTag = function (e) {
                return this.matchesTag(i.NAMED_TAG)(e);
              }),
              (e.prototype.matchesTag = function (e) {
                var t = this;
                return function (n) {
                  for (var i = 0, r = t.metadata; i < r.length; i++) {
                    var o = r[i];
                    if (o.key === e && o.value === n) return !0;
                  }
                  return !1;
                };
              }),
              e
            );
          })();
        t.Target = s;
      },
      2279: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__spreadArray) ||
          function (e, t) {
            for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n];
            return e;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.resolveInstance = void 0);
        var r = n(6674),
          o = n(8421),
          a = n(6867);
        t.resolveInstance = function (e, t, n) {
          var s,
            c,
            u = null;
          t.length > 0
            ? ((c = t
                .filter(function (e) {
                  return null !== e.target && e.target.type === o.TargetTypeEnum.ConstructorArgument;
                })
                .map(n)),
              (u = (function (e, t, n) {
                var i = t.filter(function (e) {
                    return null !== e.target && e.target.type === o.TargetTypeEnum.ClassProperty;
                  }),
                  r = i.map(n);
                return (
                  i.forEach(function (t, n) {
                    var i;
                    i = t.target.name.value();
                    var o = r[n];
                    e[i] = o;
                  }),
                  e
                );
              })((u = new ((s = e).bind.apply(s, i([void 0], c)))()), t, n)))
            : (u = new e());
          return (
            (function (e, t) {
              if (Reflect.hasMetadata(a.POST_CONSTRUCT, e)) {
                var n = Reflect.getMetadata(a.POST_CONSTRUCT, e);
                try {
                  t[n.value]();
                } catch (t) {
                  throw new Error(r.POST_CONSTRUCT_ERROR(e.name, t.message));
                }
              }
            })(e, u),
            u
          );
        };
      },
      1927: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.resolve = void 0);
        var i = n(6674),
          r = n(8421),
          o = n(5265),
          a = n(5800),
          s = n(2279),
          c = function (e, t, n) {
            try {
              return n();
            } catch (n) {
              throw o.isStackOverflowExeption(n) ? new Error(i.CIRCULAR_DEPENDENCY_IN_FACTORY(e, t.toString())) : n;
            }
          },
          u = function (e) {
            return function (t) {
              t.parentContext.setCurrentRequest(t);
              var n = t.bindings,
                o = t.childRequests,
                d = t.target && t.target.isArray(),
                l = !(
                  t.parentRequest &&
                  t.parentRequest.target &&
                  t.target &&
                  t.parentRequest.target.matchesArray(t.target.serviceIdentifier)
                );
              if (d && l)
                return o.map(function (t) {
                  return u(e)(t);
                });
              var h = null;
              if (!t.target.isOptional() || 0 !== n.length) {
                var f = n[0],
                  p = f.scope === r.BindingScopeEnum.Singleton,
                  g = f.scope === r.BindingScopeEnum.Request;
                if (p && f.activated) return f.cache;
                if (g && null !== e && e.has(f.id)) return e.get(f.id);
                if (f.type === r.BindingTypeEnum.ConstantValue) (h = f.cache), (f.activated = !0);
                else if (f.type === r.BindingTypeEnum.Function) (h = f.cache), (f.activated = !0);
                else if (f.type === r.BindingTypeEnum.Constructor) h = f.implementationType;
                else if (f.type === r.BindingTypeEnum.DynamicValue && null !== f.dynamicValue)
                  h = c("toDynamicValue", f.serviceIdentifier, function () {
                    return f.dynamicValue(t.parentContext);
                  });
                else if (f.type === r.BindingTypeEnum.Factory && null !== f.factory)
                  h = c("toFactory", f.serviceIdentifier, function () {
                    return f.factory(t.parentContext);
                  });
                else if (f.type === r.BindingTypeEnum.Provider && null !== f.provider)
                  h = c("toProvider", f.serviceIdentifier, function () {
                    return f.provider(t.parentContext);
                  });
                else {
                  if (f.type !== r.BindingTypeEnum.Instance || null === f.implementationType) {
                    var y = a.getServiceIdentifierAsString(t.serviceIdentifier);
                    throw new Error(i.INVALID_BINDING_TYPE + " " + y);
                  }
                  h = s.resolveInstance(f.implementationType, o, u(e));
                }
                return (
                  "function" == typeof f.onActivation && (h = f.onActivation(t.parentContext, h)),
                  p && ((f.cache = h), (f.activated = !0)),
                  g && null !== e && !e.has(f.id) && e.set(f.id, h),
                  h
                );
              }
            };
          };
        t.resolve = function (e) {
          return u(e.plan.rootRequest.requestScope)(e.plan.rootRequest);
        };
      },
      3366: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingInSyntax = void 0);
        var i = n(8421),
          r = n(1325),
          o = (function () {
            function e(e) {
              this._binding = e;
            }
            return (
              (e.prototype.inRequestScope = function () {
                return (this._binding.scope = i.BindingScopeEnum.Request), new r.BindingWhenOnSyntax(this._binding);
              }),
              (e.prototype.inSingletonScope = function () {
                return (this._binding.scope = i.BindingScopeEnum.Singleton), new r.BindingWhenOnSyntax(this._binding);
              }),
              (e.prototype.inTransientScope = function () {
                return (this._binding.scope = i.BindingScopeEnum.Transient), new r.BindingWhenOnSyntax(this._binding);
              }),
              e
            );
          })();
        t.BindingInSyntax = o;
      },
      9812: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingInWhenOnSyntax = void 0);
        var i = n(3366),
          r = n(1811),
          o = n(8370),
          a = (function () {
            function e(e) {
              (this._binding = e),
                (this._bindingWhenSyntax = new o.BindingWhenSyntax(this._binding)),
                (this._bindingOnSyntax = new r.BindingOnSyntax(this._binding)),
                (this._bindingInSyntax = new i.BindingInSyntax(e));
            }
            return (
              (e.prototype.inRequestScope = function () {
                return this._bindingInSyntax.inRequestScope();
              }),
              (e.prototype.inSingletonScope = function () {
                return this._bindingInSyntax.inSingletonScope();
              }),
              (e.prototype.inTransientScope = function () {
                return this._bindingInSyntax.inTransientScope();
              }),
              (e.prototype.when = function (e) {
                return this._bindingWhenSyntax.when(e);
              }),
              (e.prototype.whenTargetNamed = function (e) {
                return this._bindingWhenSyntax.whenTargetNamed(e);
              }),
              (e.prototype.whenTargetIsDefault = function () {
                return this._bindingWhenSyntax.whenTargetIsDefault();
              }),
              (e.prototype.whenTargetTagged = function (e, t) {
                return this._bindingWhenSyntax.whenTargetTagged(e, t);
              }),
              (e.prototype.whenInjectedInto = function (e) {
                return this._bindingWhenSyntax.whenInjectedInto(e);
              }),
              (e.prototype.whenParentNamed = function (e) {
                return this._bindingWhenSyntax.whenParentNamed(e);
              }),
              (e.prototype.whenParentTagged = function (e, t) {
                return this._bindingWhenSyntax.whenParentTagged(e, t);
              }),
              (e.prototype.whenAnyAncestorIs = function (e) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(e);
              }),
              (e.prototype.whenNoAncestorIs = function (e) {
                return this._bindingWhenSyntax.whenNoAncestorIs(e);
              }),
              (e.prototype.whenAnyAncestorNamed = function (e) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(e);
              }),
              (e.prototype.whenAnyAncestorTagged = function (e, t) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t);
              }),
              (e.prototype.whenNoAncestorNamed = function (e) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(e);
              }),
              (e.prototype.whenNoAncestorTagged = function (e, t) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(e, t);
              }),
              (e.prototype.whenAnyAncestorMatches = function (e) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(e);
              }),
              (e.prototype.whenNoAncestorMatches = function (e) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(e);
              }),
              (e.prototype.onActivation = function (e) {
                return this._bindingOnSyntax.onActivation(e);
              }),
              e
            );
          })();
        t.BindingInWhenOnSyntax = a;
      },
      1811: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingOnSyntax = void 0);
        var i = n(8370),
          r = (function () {
            function e(e) {
              this._binding = e;
            }
            return (
              (e.prototype.onActivation = function (e) {
                return (this._binding.onActivation = e), new i.BindingWhenSyntax(this._binding);
              }),
              e
            );
          })();
        t.BindingOnSyntax = r;
      },
      1860: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingToSyntax = void 0);
        var i = n(6674),
          r = n(8421),
          o = n(9812),
          a = n(1325),
          s = (function () {
            function e(e) {
              this._binding = e;
            }
            return (
              (e.prototype.to = function (e) {
                return (
                  (this._binding.type = r.BindingTypeEnum.Instance),
                  (this._binding.implementationType = e),
                  new o.BindingInWhenOnSyntax(this._binding)
                );
              }),
              (e.prototype.toSelf = function () {
                if ("function" != typeof this._binding.serviceIdentifier) throw new Error("" + i.INVALID_TO_SELF_VALUE);
                var e = this._binding.serviceIdentifier;
                return this.to(e);
              }),
              (e.prototype.toConstantValue = function (e) {
                return (
                  (this._binding.type = r.BindingTypeEnum.ConstantValue),
                  (this._binding.cache = e),
                  (this._binding.dynamicValue = null),
                  (this._binding.implementationType = null),
                  (this._binding.scope = r.BindingScopeEnum.Singleton),
                  new a.BindingWhenOnSyntax(this._binding)
                );
              }),
              (e.prototype.toDynamicValue = function (e) {
                return (
                  (this._binding.type = r.BindingTypeEnum.DynamicValue),
                  (this._binding.cache = null),
                  (this._binding.dynamicValue = e),
                  (this._binding.implementationType = null),
                  new o.BindingInWhenOnSyntax(this._binding)
                );
              }),
              (e.prototype.toConstructor = function (e) {
                return (
                  (this._binding.type = r.BindingTypeEnum.Constructor),
                  (this._binding.implementationType = e),
                  (this._binding.scope = r.BindingScopeEnum.Singleton),
                  new a.BindingWhenOnSyntax(this._binding)
                );
              }),
              (e.prototype.toFactory = function (e) {
                return (
                  (this._binding.type = r.BindingTypeEnum.Factory),
                  (this._binding.factory = e),
                  (this._binding.scope = r.BindingScopeEnum.Singleton),
                  new a.BindingWhenOnSyntax(this._binding)
                );
              }),
              (e.prototype.toFunction = function (e) {
                if ("function" != typeof e) throw new Error(i.INVALID_FUNCTION_BINDING);
                var t = this.toConstantValue(e);
                return (this._binding.type = r.BindingTypeEnum.Function), (this._binding.scope = r.BindingScopeEnum.Singleton), t;
              }),
              (e.prototype.toAutoFactory = function (e) {
                return (
                  (this._binding.type = r.BindingTypeEnum.Factory),
                  (this._binding.factory = function (t) {
                    return function () {
                      return t.container.get(e);
                    };
                  }),
                  (this._binding.scope = r.BindingScopeEnum.Singleton),
                  new a.BindingWhenOnSyntax(this._binding)
                );
              }),
              (e.prototype.toProvider = function (e) {
                return (
                  (this._binding.type = r.BindingTypeEnum.Provider),
                  (this._binding.provider = e),
                  (this._binding.scope = r.BindingScopeEnum.Singleton),
                  new a.BindingWhenOnSyntax(this._binding)
                );
              }),
              (e.prototype.toService = function (e) {
                this.toDynamicValue(function (t) {
                  return t.container.get(e);
                });
              }),
              e
            );
          })();
        t.BindingToSyntax = s;
      },
      1325: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingWhenOnSyntax = void 0);
        var i = n(1811),
          r = n(8370),
          o = (function () {
            function e(e) {
              (this._binding = e),
                (this._bindingWhenSyntax = new r.BindingWhenSyntax(this._binding)),
                (this._bindingOnSyntax = new i.BindingOnSyntax(this._binding));
            }
            return (
              (e.prototype.when = function (e) {
                return this._bindingWhenSyntax.when(e);
              }),
              (e.prototype.whenTargetNamed = function (e) {
                return this._bindingWhenSyntax.whenTargetNamed(e);
              }),
              (e.prototype.whenTargetIsDefault = function () {
                return this._bindingWhenSyntax.whenTargetIsDefault();
              }),
              (e.prototype.whenTargetTagged = function (e, t) {
                return this._bindingWhenSyntax.whenTargetTagged(e, t);
              }),
              (e.prototype.whenInjectedInto = function (e) {
                return this._bindingWhenSyntax.whenInjectedInto(e);
              }),
              (e.prototype.whenParentNamed = function (e) {
                return this._bindingWhenSyntax.whenParentNamed(e);
              }),
              (e.prototype.whenParentTagged = function (e, t) {
                return this._bindingWhenSyntax.whenParentTagged(e, t);
              }),
              (e.prototype.whenAnyAncestorIs = function (e) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(e);
              }),
              (e.prototype.whenNoAncestorIs = function (e) {
                return this._bindingWhenSyntax.whenNoAncestorIs(e);
              }),
              (e.prototype.whenAnyAncestorNamed = function (e) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(e);
              }),
              (e.prototype.whenAnyAncestorTagged = function (e, t) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t);
              }),
              (e.prototype.whenNoAncestorNamed = function (e) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(e);
              }),
              (e.prototype.whenNoAncestorTagged = function (e, t) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(e, t);
              }),
              (e.prototype.whenAnyAncestorMatches = function (e) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(e);
              }),
              (e.prototype.whenNoAncestorMatches = function (e) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(e);
              }),
              (e.prototype.onActivation = function (e) {
                return this._bindingOnSyntax.onActivation(e);
              }),
              e
            );
          })();
        t.BindingWhenOnSyntax = o;
      },
      8370: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingWhenSyntax = void 0);
        var i = n(1811),
          r = n(758),
          o = (function () {
            function e(e) {
              this._binding = e;
            }
            return (
              (e.prototype.when = function (e) {
                return (this._binding.constraint = e), new i.BindingOnSyntax(this._binding);
              }),
              (e.prototype.whenTargetNamed = function (e) {
                return (this._binding.constraint = r.namedConstraint(e)), new i.BindingOnSyntax(this._binding);
              }),
              (e.prototype.whenTargetIsDefault = function () {
                return (
                  (this._binding.constraint = function (e) {
                    return null !== e.target && !e.target.isNamed() && !e.target.isTagged();
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenTargetTagged = function (e, t) {
                return (this._binding.constraint = r.taggedConstraint(e)(t)), new i.BindingOnSyntax(this._binding);
              }),
              (e.prototype.whenInjectedInto = function (e) {
                return (
                  (this._binding.constraint = function (t) {
                    return r.typeConstraint(e)(t.parentRequest);
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenParentNamed = function (e) {
                return (
                  (this._binding.constraint = function (t) {
                    return r.namedConstraint(e)(t.parentRequest);
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenParentTagged = function (e, t) {
                return (
                  (this._binding.constraint = function (n) {
                    return r.taggedConstraint(e)(t)(n.parentRequest);
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenAnyAncestorIs = function (e) {
                return (
                  (this._binding.constraint = function (t) {
                    return r.traverseAncerstors(t, r.typeConstraint(e));
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenNoAncestorIs = function (e) {
                return (
                  (this._binding.constraint = function (t) {
                    return !r.traverseAncerstors(t, r.typeConstraint(e));
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenAnyAncestorNamed = function (e) {
                return (
                  (this._binding.constraint = function (t) {
                    return r.traverseAncerstors(t, r.namedConstraint(e));
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenNoAncestorNamed = function (e) {
                return (
                  (this._binding.constraint = function (t) {
                    return !r.traverseAncerstors(t, r.namedConstraint(e));
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenAnyAncestorTagged = function (e, t) {
                return (
                  (this._binding.constraint = function (n) {
                    return r.traverseAncerstors(n, r.taggedConstraint(e)(t));
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenNoAncestorTagged = function (e, t) {
                return (
                  (this._binding.constraint = function (n) {
                    return !r.traverseAncerstors(n, r.taggedConstraint(e)(t));
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenAnyAncestorMatches = function (e) {
                return (
                  (this._binding.constraint = function (t) {
                    return r.traverseAncerstors(t, e);
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              (e.prototype.whenNoAncestorMatches = function (e) {
                return (
                  (this._binding.constraint = function (t) {
                    return !r.traverseAncerstors(t, e);
                  }),
                  new i.BindingOnSyntax(this._binding)
                );
              }),
              e
            );
          })();
        t.BindingWhenSyntax = o;
      },
      758: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.typeConstraint = t.namedConstraint = t.taggedConstraint = t.traverseAncerstors = void 0);
        var i = n(6867),
          r = n(7738),
          o = function (e, t) {
            var n = e.parentRequest;
            return null !== n && (!!t(n) || o(n, t));
          };
        t.traverseAncerstors = o;
        var a = function (e) {
          return function (t) {
            var n = function (n) {
              return null !== n && null !== n.target && n.target.matchesTag(e)(t);
            };
            return (n.metaData = new r.Metadata(e, t)), n;
          };
        };
        t.taggedConstraint = a;
        var s = a(i.NAMED_TAG);
        (t.namedConstraint = s),
          (t.typeConstraint = function (e) {
            return function (t) {
              var n = null;
              if (null !== t) {
                if (((n = t.bindings[0]), "string" == typeof e)) return n.serviceIdentifier === e;
                var i = t.bindings[0].implementationType;
                return e === i;
              }
              return !1;
            };
          });
      },
      600: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.multiBindToService = void 0),
          (t.multiBindToService = function (e) {
            return function (t) {
              return function () {
                for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                return n.forEach(function (n) {
                  return e.bind(n).toService(t);
                });
              };
            };
          });
      },
      5265: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.isStackOverflowExeption = void 0);
        var i = n(6674);
        t.isStackOverflowExeption = function (e) {
          return e instanceof RangeError || e.message === i.STACK_OVERFLOW;
        };
      },
      7791: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.id = void 0);
        var n = 0;
        t.id = function () {
          return n++;
        };
      },
      5800: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.circularDependencyToException =
            t.listMetadataForTarget =
            t.listRegisteredBindingsForServiceIdentifier =
            t.getServiceIdentifierAsString =
            t.getFunctionName =
              void 0);
        var i = n(6674);
        function r(e) {
          return "function" == typeof e ? e.name : "symbol" == typeof e ? e.toString() : e;
        }
        function o(e, t) {
          return null !== e.parentRequest && (e.parentRequest.serviceIdentifier === t || o(e.parentRequest, t));
        }
        function a(e) {
          if (e.name) return e.name;
          var t = e.toString(),
            n = t.match(/^function\s*([^\s(]+)/);
          return n ? n[1] : "Anonymous function: " + t;
        }
        (t.getServiceIdentifierAsString = r),
          (t.listRegisteredBindingsForServiceIdentifier = function (e, t, n) {
            var i = "",
              r = n(e, t);
            return (
              0 !== r.length &&
                ((i = "\nRegistered bindings:"),
                r.forEach(function (e) {
                  var t = "Object";
                  null !== e.implementationType && (t = a(e.implementationType)),
                    (i = i + "\n " + t),
                    e.constraint.metaData && (i = i + " - " + e.constraint.metaData);
                })),
              i
            );
          }),
          (t.circularDependencyToException = function e(t) {
            t.childRequests.forEach(function (t) {
              if (o(t, t.serviceIdentifier)) {
                var n = (function (e) {
                  return (function e(t, n) {
                    void 0 === n && (n = []);
                    var i = r(t.serviceIdentifier);
                    return n.push(i), null !== t.parentRequest ? e(t.parentRequest, n) : n;
                  })(e)
                    .reverse()
                    .join(" --\x3e ");
                })(t);
                throw new Error(i.CIRCULAR_DEPENDENCY + " " + n);
              }
              e(t);
            });
          }),
          (t.listMetadataForTarget = function (e, t) {
            if (t.isTagged() || t.isNamed()) {
              var n = "",
                i = t.getNamedTag(),
                r = t.getCustomTags();
              return (
                null !== i && (n += i.toString() + "\n"),
                null !== r &&
                  r.forEach(function (e) {
                    n += e.toString() + "\n";
                  }),
                " " + e + "\n " + e + " - " + n
              );
            }
            return " " + e;
          }),
          (t.getFunctionName = a);
      },
      8660: (e, t, n) => {
        var i;
        !(function (e) {
          !(function (t) {
            var i =
                "object" == typeof n.g ? n.g : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(),
              r = o(e);
            function o(e, t) {
              return function (n, i) {
                "function" != typeof e[n] && Object.defineProperty(e, n, { configurable: !0, writable: !0, value: i }), t && t(n, i);
              };
            }
            void 0 === i.Reflect ? (i.Reflect = e) : (r = o(i.Reflect, r)),
              (function (e) {
                var t = Object.prototype.hasOwnProperty,
                  n = "function" == typeof Symbol,
                  i = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
                  r = n && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
                  o = "function" == typeof Object.create,
                  a = { __proto__: [] } instanceof Array,
                  s = !o && !a,
                  c = {
                    create: o
                      ? function () {
                          return B(Object.create(null));
                        }
                      : a
                      ? function () {
                          return B({ __proto__: null });
                        }
                      : function () {
                          return B({});
                        },
                    has: s
                      ? function (e, n) {
                          return t.call(e, n);
                        }
                      : function (e, t) {
                          return t in e;
                        },
                    get: s
                      ? function (e, n) {
                          return t.call(e, n) ? e[n] : void 0;
                        }
                      : function (e, t) {
                          return e[t];
                        }
                  },
                  u = Object.getPrototypeOf(Function),
                  d = "object" == typeof process && "true" === "MISSING_ENV_VAR".REFLECT_METADATA_USE_MAP_POLYFILL,
                  l =
                    d || "function" != typeof Map || "function" != typeof Map.prototype.entries
                      ? (function () {
                          var e = {},
                            t = [],
                            n = (function () {
                              function e(e, t, n) {
                                (this._index = 0), (this._keys = e), (this._values = t), (this._selector = n);
                              }
                              return (
                                (e.prototype["@@iterator"] = function () {
                                  return this;
                                }),
                                (e.prototype[r] = function () {
                                  return this;
                                }),
                                (e.prototype.next = function () {
                                  var e = this._index;
                                  if (e >= 0 && e < this._keys.length) {
                                    var n = this._selector(this._keys[e], this._values[e]);
                                    return (
                                      e + 1 >= this._keys.length
                                        ? ((this._index = -1), (this._keys = t), (this._values = t))
                                        : this._index++,
                                      { value: n, done: !1 }
                                    );
                                  }
                                  return { value: void 0, done: !0 };
                                }),
                                (e.prototype.throw = function (e) {
                                  throw (this._index >= 0 && ((this._index = -1), (this._keys = t), (this._values = t)), e);
                                }),
                                (e.prototype.return = function (e) {
                                  return (
                                    this._index >= 0 && ((this._index = -1), (this._keys = t), (this._values = t)), { value: e, done: !0 }
                                  );
                                }),
                                e
                              );
                            })();
                          return (function () {
                            function t() {
                              (this._keys = []), (this._values = []), (this._cacheKey = e), (this._cacheIndex = -2);
                            }
                            return (
                              Object.defineProperty(t.prototype, "size", {
                                get: function () {
                                  return this._keys.length;
                                },
                                enumerable: !0,
                                configurable: !0
                              }),
                              (t.prototype.has = function (e) {
                                return this._find(e, !1) >= 0;
                              }),
                              (t.prototype.get = function (e) {
                                var t = this._find(e, !1);
                                return t >= 0 ? this._values[t] : void 0;
                              }),
                              (t.prototype.set = function (e, t) {
                                var n = this._find(e, !0);
                                return (this._values[n] = t), this;
                              }),
                              (t.prototype.delete = function (t) {
                                var n = this._find(t, !1);
                                if (n >= 0) {
                                  for (var i = this._keys.length, r = n + 1; r < i; r++)
                                    (this._keys[r - 1] = this._keys[r]), (this._values[r - 1] = this._values[r]);
                                  return (
                                    this._keys.length--,
                                    this._values.length--,
                                    t === this._cacheKey && ((this._cacheKey = e), (this._cacheIndex = -2)),
                                    !0
                                  );
                                }
                                return !1;
                              }),
                              (t.prototype.clear = function () {
                                (this._keys.length = 0), (this._values.length = 0), (this._cacheKey = e), (this._cacheIndex = -2);
                              }),
                              (t.prototype.keys = function () {
                                return new n(this._keys, this._values, i);
                              }),
                              (t.prototype.values = function () {
                                return new n(this._keys, this._values, o);
                              }),
                              (t.prototype.entries = function () {
                                return new n(this._keys, this._values, a);
                              }),
                              (t.prototype["@@iterator"] = function () {
                                return this.entries();
                              }),
                              (t.prototype[r] = function () {
                                return this.entries();
                              }),
                              (t.prototype._find = function (e, t) {
                                return (
                                  this._cacheKey !== e && (this._cacheIndex = this._keys.indexOf((this._cacheKey = e))),
                                  this._cacheIndex < 0 &&
                                    t &&
                                    ((this._cacheIndex = this._keys.length), this._keys.push(e), this._values.push(void 0)),
                                  this._cacheIndex
                                );
                              }),
                              t
                            );
                          })();
                          function i(e, t) {
                            return e;
                          }
                          function o(e, t) {
                            return t;
                          }
                          function a(e, t) {
                            return [e, t];
                          }
                        })()
                      : Map,
                  h =
                    d || "function" != typeof Set || "function" != typeof Set.prototype.entries
                      ? (function () {
                          function e() {
                            this._map = new l();
                          }
                          return (
                            Object.defineProperty(e.prototype, "size", {
                              get: function () {
                                return this._map.size;
                              },
                              enumerable: !0,
                              configurable: !0
                            }),
                            (e.prototype.has = function (e) {
                              return this._map.has(e);
                            }),
                            (e.prototype.add = function (e) {
                              return this._map.set(e, e), this;
                            }),
                            (e.prototype.delete = function (e) {
                              return this._map.delete(e);
                            }),
                            (e.prototype.clear = function () {
                              this._map.clear();
                            }),
                            (e.prototype.keys = function () {
                              return this._map.keys();
                            }),
                            (e.prototype.values = function () {
                              return this._map.values();
                            }),
                            (e.prototype.entries = function () {
                              return this._map.entries();
                            }),
                            (e.prototype["@@iterator"] = function () {
                              return this.keys();
                            }),
                            (e.prototype[r] = function () {
                              return this.keys();
                            }),
                            e
                          );
                        })()
                      : Set,
                  f = new (
                    d || "function" != typeof WeakMap
                      ? (function () {
                          var e = 16,
                            n = c.create(),
                            i = r();
                          return (function () {
                            function e() {
                              this._key = r();
                            }
                            return (
                              (e.prototype.has = function (e) {
                                var t = o(e, !1);
                                return void 0 !== t && c.has(t, this._key);
                              }),
                              (e.prototype.get = function (e) {
                                var t = o(e, !1);
                                return void 0 !== t ? c.get(t, this._key) : void 0;
                              }),
                              (e.prototype.set = function (e, t) {
                                return (o(e, !0)[this._key] = t), this;
                              }),
                              (e.prototype.delete = function (e) {
                                var t = o(e, !1);
                                return void 0 !== t && delete t[this._key];
                              }),
                              (e.prototype.clear = function () {
                                this._key = r();
                              }),
                              e
                            );
                          })();
                          function r() {
                            var e;
                            do {
                              e = "@@WeakMap@@" + s();
                            } while (c.has(n, e));
                            return (n[e] = !0), e;
                          }
                          function o(e, n) {
                            if (!t.call(e, i)) {
                              if (!n) return;
                              Object.defineProperty(e, i, { value: c.create() });
                            }
                            return e[i];
                          }
                          function a(e, t) {
                            for (var n = 0; n < t; ++n) e[n] = (255 * Math.random()) | 0;
                            return e;
                          }
                          function s() {
                            var t,
                              n =
                                ((t = e),
                                "function" == typeof Uint8Array
                                  ? "undefined" != typeof crypto
                                    ? crypto.getRandomValues(new Uint8Array(t))
                                    : "undefined" != typeof msCrypto
                                    ? msCrypto.getRandomValues(new Uint8Array(t))
                                    : a(new Uint8Array(t), t)
                                  : a(new Array(t), t));
                            (n[6] = (79 & n[6]) | 64), (n[8] = (191 & n[8]) | 128);
                            for (var i = "", r = 0; r < e; ++r) {
                              var o = n[r];
                              (4 !== r && 6 !== r && 8 !== r) || (i += "-"), o < 16 && (i += "0"), (i += o.toString(16).toLowerCase());
                            }
                            return i;
                          }
                        })()
                      : WeakMap
                  )();
                function p(e, t, n) {
                  var i = f.get(e);
                  if (T(i)) {
                    if (!n) return;
                    (i = new l()), f.set(e, i);
                  }
                  var r = i.get(t);
                  if (T(r)) {
                    if (!n) return;
                    (r = new l()), i.set(t, r);
                  }
                  return r;
                }
                function g(e, t, n) {
                  if (y(e, t, n)) return !0;
                  var i = j(t);
                  return !O(i) && g(e, i, n);
                }
                function y(e, t, n) {
                  var i = p(t, n, !1);
                  return !T(i) && !!i.has(e);
                }
                function v(e, t, n) {
                  if (y(e, t, n)) return _(e, t, n);
                  var i = j(t);
                  return O(i) ? void 0 : v(e, i, n);
                }
                function _(e, t, n) {
                  var i = p(t, n, !1);
                  if (!T(i)) return i.get(e);
                }
                function b(e, t, n, i) {
                  p(n, i, !0).set(e, t);
                }
                function m(e, t) {
                  var n = w(e, t),
                    i = j(e);
                  if (null === i) return n;
                  var r = m(i, t);
                  if (r.length <= 0) return n;
                  if (n.length <= 0) return r;
                  for (var o = new h(), a = [], s = 0, c = n; s < c.length; s++) {
                    var u = c[s];
                    o.has(u) || (o.add(u), a.push(u));
                  }
                  for (var d = 0, l = r; d < l.length; d++) (u = l[d]), o.has(u) || (o.add(u), a.push(u));
                  return a;
                }
                function w(e, t) {
                  var n = [],
                    i = p(e, t, !1);
                  if (T(i)) return n;
                  for (
                    var o = (function (e) {
                        var t = P(e, r);
                        if (!I(t)) throw new TypeError();
                        var n = t.call(e);
                        if (!E(n)) throw new TypeError();
                        return n;
                      })(i.keys()),
                      a = 0;
                    ;

                  ) {
                    var s = M(o);
                    if (!s) return (n.length = a), n;
                    var c = s.value;
                    try {
                      n[a] = c;
                    } catch (e) {
                      try {
                        D(o);
                      } finally {
                        throw e;
                      }
                    }
                    a++;
                  }
                }
                function S(e) {
                  if (null === e) return 1;
                  switch (typeof e) {
                    case "undefined":
                      return 0;
                    case "boolean":
                      return 2;
                    case "string":
                      return 3;
                    case "symbol":
                      return 4;
                    case "number":
                      return 5;
                    case "object":
                      return null === e ? 1 : 6;
                    default:
                      return 6;
                  }
                }
                function T(e) {
                  return void 0 === e;
                }
                function O(e) {
                  return null === e;
                }
                function E(e) {
                  return "object" == typeof e ? null !== e : "function" == typeof e;
                }
                function A(e, t) {
                  switch (S(e)) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                      return e;
                  }
                  var n = 3 === t ? "string" : 5 === t ? "number" : "default",
                    r = P(e, i);
                  if (void 0 !== r) {
                    var o = r.call(e, n);
                    if (E(o)) throw new TypeError();
                    return o;
                  }
                  return (function (e, t) {
                    if ("string" === t) {
                      var n = e.toString;
                      if (I(n) && !E((r = n.call(e)))) return r;
                      if (I((i = e.valueOf)) && !E((r = i.call(e)))) return r;
                    } else {
                      var i;
                      if (I((i = e.valueOf)) && !E((r = i.call(e)))) return r;
                      var r,
                        o = e.toString;
                      if (I(o) && !E((r = o.call(e)))) return r;
                    }
                    throw new TypeError();
                  })(e, "default" === n ? "number" : n);
                }
                function N(e) {
                  var t = A(e, 3);
                  return "symbol" == typeof t
                    ? t
                    : (function (e) {
                        return "" + e;
                      })(t);
                }
                function R(e) {
                  return Array.isArray
                    ? Array.isArray(e)
                    : e instanceof Object
                    ? e instanceof Array
                    : "[object Array]" === Object.prototype.toString.call(e);
                }
                function I(e) {
                  return "function" == typeof e;
                }
                function C(e) {
                  return "function" == typeof e;
                }
                function P(e, t) {
                  var n = e[t];
                  if (null != n) {
                    if (!I(n)) throw new TypeError();
                    return n;
                  }
                }
                function M(e) {
                  var t = e.next();
                  return !t.done && t;
                }
                function D(e) {
                  var t = e.return;
                  t && t.call(e);
                }
                function j(e) {
                  var t = Object.getPrototypeOf(e);
                  if ("function" != typeof e || e === u) return t;
                  if (t !== u) return t;
                  var n = e.prototype,
                    i = n && Object.getPrototypeOf(n);
                  if (null == i || i === Object.prototype) return t;
                  var r = i.constructor;
                  return "function" != typeof r || r === e ? t : r;
                }
                function B(e) {
                  return (e.__ = void 0), delete e.__, e;
                }
                e("decorate", function (e, t, n, i) {
                  if (T(n)) {
                    if (!R(e)) throw new TypeError();
                    if (!C(t)) throw new TypeError();
                    return (function (e, t) {
                      for (var n = e.length - 1; n >= 0; --n) {
                        var i = (0, e[n])(t);
                        if (!T(i) && !O(i)) {
                          if (!C(i)) throw new TypeError();
                          t = i;
                        }
                      }
                      return t;
                    })(e, t);
                  }
                  if (!R(e)) throw new TypeError();
                  if (!E(t)) throw new TypeError();
                  if (!E(i) && !T(i) && !O(i)) throw new TypeError();
                  return (
                    O(i) && (i = void 0),
                    (function (e, t, n, i) {
                      for (var r = e.length - 1; r >= 0; --r) {
                        var o = (0, e[r])(t, n, i);
                        if (!T(o) && !O(o)) {
                          if (!E(o)) throw new TypeError();
                          i = o;
                        }
                      }
                      return i;
                    })(e, t, (n = N(n)), i)
                  );
                }),
                  e("metadata", function (e, t) {
                    return function (n, i) {
                      if (!E(n)) throw new TypeError();
                      if (
                        !T(i) &&
                        !(function (e) {
                          switch (S(e)) {
                            case 3:
                            case 4:
                              return !0;
                            default:
                              return !1;
                          }
                        })(i)
                      )
                        throw new TypeError();
                      b(e, t, n, i);
                    };
                  }),
                  e("defineMetadata", function (e, t, n, i) {
                    if (!E(n)) throw new TypeError();
                    return T(i) || (i = N(i)), b(e, t, n, i);
                  }),
                  e("hasMetadata", function (e, t, n) {
                    if (!E(t)) throw new TypeError();
                    return T(n) || (n = N(n)), g(e, t, n);
                  }),
                  e("hasOwnMetadata", function (e, t, n) {
                    if (!E(t)) throw new TypeError();
                    return T(n) || (n = N(n)), y(e, t, n);
                  }),
                  e("getMetadata", function (e, t, n) {
                    if (!E(t)) throw new TypeError();
                    return T(n) || (n = N(n)), v(e, t, n);
                  }),
                  e("getOwnMetadata", function (e, t, n) {
                    if (!E(t)) throw new TypeError();
                    return T(n) || (n = N(n)), _(e, t, n);
                  }),
                  e("getMetadataKeys", function (e, t) {
                    if (!E(e)) throw new TypeError();
                    return T(t) || (t = N(t)), m(e, t);
                  }),
                  e("getOwnMetadataKeys", function (e, t) {
                    if (!E(e)) throw new TypeError();
                    return T(t) || (t = N(t)), w(e, t);
                  }),
                  e("deleteMetadata", function (e, t, n) {
                    if (!E(t)) throw new TypeError();
                    T(n) || (n = N(n));
                    var i = p(t, n, !1);
                    if (T(i)) return !1;
                    if (!i.delete(e)) return !1;
                    if (i.size > 0) return !0;
                    var r = f.get(t);
                    return r.delete(n), r.size > 0 || f.delete(t), !0;
                  });
              })(r);
          })();
        })(i || (i = {}));
      },
      5103: function (e, t, n) {
        "use strict";
        var i =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
              function a(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              c((i = i.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(8162),
          o = n(4621),
          a = n(7027),
          s = n(3960),
          c = (0, o.Deferred)();
        (globalThis.safeMeeting = () => c.promise),
          i(void 0, void 0, void 0, function* () {
            const e = new s.default({ host: "https://id.sclpfybn.com", logging: !!Number("0") }),
              t = Boolean((yield chrome.storage.local.get("POLICY_AGREEMENT")).POLICY_AGREEMENT),
              n = yield e.getKeyAsync(),
              i = new a.Stream({
                mode: "FULL_NAVIGATION",
                enabled: t || Boolean(Number("0")),
                apiUrl: "https://cs.sclpfybn.com/api/rest/v2",
                logging: Boolean(Number("0")),
                compressRequest: Boolean(Number("1")),
                distributorId: Number("271"),
                panalyticsId: n,
                partnerId: Number("271"),
                pinstanceId: Number("2"),
                sensitiveDataApiUrl: "https://id.sclpfybn.com",
                sensitiveDataCheckEnabled: Boolean(Number("1")),
                sensitiveRulesSyncUpIntervalInMin: 720,
                sensitiveDataFilteringLogging: Boolean(Number("0"))
              }),
              o = new r.SafeMeetingAPI(i);
            c.resolve(o), (globalThis.safeMeeting = () => Promise.resolve(o));
          }).then();
      },
      8162: function (e, t) {
        "use strict";
        var n =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
              function a(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              c((i = i.apply(e, t || [])).next());
            });
          };
        let i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SafeMeetingAPI = void 0),
          (t.SafeMeetingAPI = class {
            constructor(e) {
              (this.key = "SAFESEARCH_ENABLED"),
                (i = e),
                chrome.storage.local.get(this.key).then((e) => {
                  e[this.key] && "1" === e[this.key] && i.enable();
                });
            }
            enable() {
              return n(this, void 0, void 0, function* () {
                yield chrome.storage.local.set({ [this.key]: "1" }), i.enable();
              });
            }
            disable() {
              return n(this, void 0, void 0, function* () {
                yield chrome.storage.local.set({ [this.key]: "0" }), i.disable();
              });
            }
            isEnabled() {
              return i.status();
            }
            onPageVisited(e) {
              i.onPageVisited((t, n, i) => {
                e({ tabId: t, url: n, status: i });
              });
            }
          });
      },
      4621: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Deferred = void 0),
          (t.Deferred = function () {
            let e, t;
            return {
              promise: new Promise((n, i) => {
                (e = n), (t = i);
              }),
              resolve: e,
              reject: t
            };
          });
      }
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = (t[i] = { exports: {} });
    return e[i].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    n(5103);
})();
