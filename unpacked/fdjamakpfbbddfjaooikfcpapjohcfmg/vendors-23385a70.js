(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7777],
  {
    243949: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CACHE_MODULE_OPTIONS = t.CACHE_TTL_METADATA = t.CACHE_KEY_METADATA = t.CACHE_MANAGER = void 0);
      const s = r(123890);
      (t.CACHE_MANAGER = "CACHE_MANAGER"),
        (t.CACHE_KEY_METADATA = "cache_module:cache_key"),
        (t.CACHE_TTL_METADATA = "cache_module:cache_ttl"),
        (t.CACHE_MODULE_OPTIONS = s.MODULE_OPTIONS_TOKEN);
    },
    123890: (e, t, r) => {
      "use strict";
      var s;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MODULE_OPTIONS_TOKEN = t.ConfigurableModuleClass = void 0),
        (s = new (r(171503).ConfigurableModuleBuilder)({ moduleName: "Cache" }).setFactoryMethodName("createCacheOptions").build()),
        (t.ConfigurableModuleClass = s.ConfigurableModuleClass),
        (t.MODULE_OPTIONS_TOKEN = s.MODULE_OPTIONS_TOKEN);
    },
    729706: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CacheModule = void 0);
      const s = r(488802),
        i = r(405905),
        n = r(243949),
        a = r(123890),
        o = r(736236);
      let c = class extends a.ConfigurableModuleClass {
        static register(e = {}) {
          return Object.assign({ global: e.isGlobal }, super.register(e));
        }
        static registerAsync(e) {
          const t = super.registerAsync(e);
          return Object.assign(Object.assign({ global: e.isGlobal }, t), {
            providers: e.extraProviders ? t.providers.concat(e.extraProviders) : t.providers
          });
        }
      };
      (c = s.__decorate([(0, i.Module)({ providers: [(0, o.createCacheManager)()], exports: [n.CACHE_MANAGER] })], c)), (t.CacheModule = c);
    },
    736236: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createCacheManager = void 0);
      const s = r(310656),
        i = r(243949),
        n = r(123890),
        a = r(124718);
      t.createCacheManager = function () {
        return {
          provide: i.CACHE_MANAGER,
          useFactory: async (e) => {
            const t = (0, s.loadPackage)("cache-manager", "CacheModule", () =>
                r(
                  Object(
                    (function () {
                      var e = new Error("Cannot find module 'cache-manager'");
                      throw ((e.code = "MODULE_NOT_FOUND"), e);
                    })()
                  )
                )
              ),
              i = "memoryStore" in t,
              n = async (e, r) => {
                if (!i)
                  return t.caching(
                    Object.assign(Object.assign({}, a.defaultCacheOptions), Object.assign(Object.assign({}, r), { store: e }))
                  );
                let s = "memory";
                return (
                  (a.defaultCacheOptions.ttl *= 1e3),
                  "object" == typeof e ? (s = "create" in e ? e.create : e) : "function" == typeof e && (s = e),
                  t.caching(s, Object.assign(Object.assign({}, a.defaultCacheOptions), r))
                );
              };
            return Array.isArray(e) ? t.multiCaching(await Promise.all(e.map((e) => n(e.store, e)))) : n(e.store, e);
          },
          inject: [n.MODULE_OPTIONS_TOKEN]
        };
      };
    },
    655206: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CacheKey = void 0);
      const s = r(405905),
        i = r(243949);
      t.CacheKey = (e) => (0, s.SetMetadata)(i.CACHE_KEY_METADATA, e);
    },
    604096: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CacheTTL = void 0);
      const s = r(405905),
        i = r(243949);
      t.CacheTTL = (e) => (0, s.SetMetadata)(i.CACHE_TTL_METADATA, e);
    },
    379275: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(655206), t), s.__exportStar(r(604096), t);
    },
    124718: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultCacheOptions = void 0),
        (t.defaultCacheOptions = { ttl: 5, max: 100, store: "memory" });
    },
    221766: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(243949), t),
        s.__exportStar(r(729706), t),
        s.__exportStar(r(379275), t),
        s.__exportStar(r(268103), t),
        s.__exportStar(r(1494), t);
    },
    713733: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CacheInterceptor = void 0);
      const s = r(488802),
        i = r(518948),
        n = r(903343),
        a = r(405905),
        o = r(716616),
        c = r(514046),
        l = r(243949);
      let u = class {
        constructor(e, t) {
          (this.cacheManager = e), (this.reflector = t), (this.allowedMethods = ["GET"]);
        }
        async intercept(e, t) {
          var r;
          const s = this.trackBy(e),
            a = null !== (r = this.reflector.get(l.CACHE_TTL_METADATA, e.getHandler())) && void 0 !== r ? r : null;
          if (!s) return t.handle();
          try {
            const r = await this.cacheManager.get(s);
            if (!(0, c.isNil)(r)) return (0, i.of)(r);
            const l = (0, c.isFunction)(a) ? await a(e) : a;
            return t.handle().pipe(
              (0, n.tap)(async (e) => {
                const t = (0, c.isNil)(l) ? [s, e] : [s, e, { ttl: l }];
                try {
                  await this.cacheManager.set(...t);
                } catch (t) {
                  o.Logger.error(`An error has occured when inserting "key: ${s}", "value: ${e}"`, "CacheInterceptor");
                }
              })
            );
          } catch (e) {
            return t.handle();
          }
        }
        trackBy(e) {
          const t = this.httpAdapterHost.httpAdapter,
            r = t && !!t.getRequestMethod,
            s = this.reflector.get(l.CACHE_KEY_METADATA, e.getHandler());
          if (!r || s) return s;
          const i = e.getArgByIndex(0);
          return this.isRequestCacheable(e) ? t.getRequestUrl(i) : void 0;
        }
        isRequestCacheable(e) {
          const t = e.switchToHttp().getRequest();
          return this.allowedMethods.includes(t.method);
        }
      };
      s.__decorate(
        [(0, a.Optional)(), (0, a.Inject)("HttpAdapterHost"), s.__metadata("design:type", Object)],
        u.prototype,
        "httpAdapterHost",
        void 0
      ),
        (u = s.__decorate(
          [
            (0, a.Injectable)(),
            s.__param(0, (0, a.Inject)(l.CACHE_MANAGER)),
            s.__param(1, (0, a.Inject)("Reflector")),
            s.__metadata("design:paramtypes", [Object, Object])
          ],
          u
        )),
        (t.CacheInterceptor = u);
    },
    268103: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(713733), t);
    },
    137308: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    196316: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    1494: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(137308), t), s.__exportStar(r(196316), t);
    },
    545911: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CATCH_WATERMARK =
          t.CONTROLLER_WATERMARK =
          t.INJECTABLE_WATERMARK =
          t.VERSION_METADATA =
          t.SSE_METADATA =
          t.RESPONSE_PASSTHROUGH_METADATA =
          t.REDIRECT_METADATA =
          t.HEADERS_METADATA =
          t.MODULE_PATH =
          t.HTTP_CODE_METADATA =
          t.RENDER_METADATA =
          t.ENHANCER_KEY_TO_SUBTYPE_MAP =
          t.EXCEPTION_FILTERS_METADATA =
          t.INTERCEPTORS_METADATA =
          t.GUARDS_METADATA =
          t.PIPES_METADATA =
          t.FILTER_CATCH_EXCEPTIONS =
          t.CUSTOM_ROUTE_AGRS_METADATA =
          t.CUSTOM_ROUTE_ARGS_METADATA =
          t.ROUTE_ARGS_METADATA =
          t.METHOD_METADATA =
          t.SCOPE_OPTIONS_METADATA =
          t.OPTIONAL_PROPERTY_DEPS_METADATA =
          t.PROPERTY_DEPS_METADATA =
          t.OPTIONAL_DEPS_METADATA =
          t.SELF_DECLARED_DEPS_METADATA =
          t.PARAMTYPES_METADATA =
          t.PATH_METADATA =
          t.HOST_METADATA =
          t.GLOBAL_MODULE_METADATA =
          t.MODULE_METADATA =
            void 0),
        (t.MODULE_METADATA = { IMPORTS: "imports", PROVIDERS: "providers", CONTROLLERS: "controllers", EXPORTS: "exports" }),
        (t.GLOBAL_MODULE_METADATA = "__module:global__"),
        (t.HOST_METADATA = "host"),
        (t.PATH_METADATA = "path"),
        (t.PARAMTYPES_METADATA = "design:paramtypes"),
        (t.SELF_DECLARED_DEPS_METADATA = "self:paramtypes"),
        (t.OPTIONAL_DEPS_METADATA = "optional:paramtypes"),
        (t.PROPERTY_DEPS_METADATA = "self:properties_metadata"),
        (t.OPTIONAL_PROPERTY_DEPS_METADATA = "optional:properties_metadata"),
        (t.SCOPE_OPTIONS_METADATA = "scope:options"),
        (t.METHOD_METADATA = "method"),
        (t.ROUTE_ARGS_METADATA = "__routeArguments__"),
        (t.CUSTOM_ROUTE_ARGS_METADATA = "__customRouteArgs__"),
        (t.CUSTOM_ROUTE_AGRS_METADATA = t.CUSTOM_ROUTE_ARGS_METADATA),
        (t.FILTER_CATCH_EXCEPTIONS = "__filterCatchExceptions__"),
        (t.PIPES_METADATA = "__pipes__"),
        (t.GUARDS_METADATA = "__guards__"),
        (t.INTERCEPTORS_METADATA = "__interceptors__"),
        (t.EXCEPTION_FILTERS_METADATA = "__exceptionFilters__"),
        (t.ENHANCER_KEY_TO_SUBTYPE_MAP = {
          [t.GUARDS_METADATA]: "guard",
          [t.INTERCEPTORS_METADATA]: "interceptor",
          [t.PIPES_METADATA]: "pipe",
          [t.EXCEPTION_FILTERS_METADATA]: "filter"
        }),
        (t.RENDER_METADATA = "__renderTemplate__"),
        (t.HTTP_CODE_METADATA = "__httpCode__"),
        (t.MODULE_PATH = "__module_path__"),
        (t.HEADERS_METADATA = "__headers__"),
        (t.REDIRECT_METADATA = "__redirect__"),
        (t.RESPONSE_PASSTHROUGH_METADATA = "__responsePassthrough__"),
        (t.SSE_METADATA = "__sse__"),
        (t.VERSION_METADATA = "__version__"),
        (t.INJECTABLE_WATERMARK = "__injectable__"),
        (t.CONTROLLER_WATERMARK = "__controller__"),
        (t.CATCH_WATERMARK = "__catch__");
    },
    286714: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.applyDecorators = void 0),
        (t.applyDecorators = function (...e) {
          return (t, r, s) => {
            for (const i of e) t instanceof Function && !s ? i(t) : i(t, r, s);
          };
        });
    },
    416994: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Bind = void 0),
        (t.Bind = function (...e) {
          return (t, r, s) => (e.forEach((e, s) => e(t, r, s)), s);
        });
    },
    216102: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Catch = void 0);
      const s = r(545911);
      t.Catch = function (...e) {
        return (t) => {
          Reflect.defineMetadata(s.CATCH_WATERMARK, !0, t), Reflect.defineMetadata(s.FILTER_CATCH_EXCEPTIONS, e, t);
        };
      };
    },
    972472: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Controller = void 0);
      const s = r(545911),
        i = r(514046);
      t.Controller = function (e) {
        const [t, r, n, a] = (0, i.isUndefined)(e)
          ? ["/", void 0, void 0, void 0]
          : (0, i.isString)(e) || Array.isArray(e)
          ? [e, void 0, void 0, void 0]
          : [
              e.path || "/",
              e.host,
              { scope: e.scope, durable: e.durable },
              Array.isArray(e.version) ? Array.from(new Set(e.version)) : e.version
            ];
        return (e) => {
          Reflect.defineMetadata(s.CONTROLLER_WATERMARK, !0, e),
            Reflect.defineMetadata(s.PATH_METADATA, t, e),
            Reflect.defineMetadata(s.HOST_METADATA, r, e),
            Reflect.defineMetadata(s.SCOPE_OPTIONS_METADATA, n, e),
            Reflect.defineMetadata(s.VERSION_METADATA, a, e);
        };
      };
    },
    385281: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Dependencies = t.flatten = void 0);
      const s = r(545911);
      function i(e) {
        const t = [].concat(...e);
        return t.some(Array.isArray) ? i(t) : t;
      }
      (t.flatten = i),
        (t.Dependencies = (...e) => {
          const t = i(e);
          return (e) => {
            Reflect.defineMetadata(s.PARAMTYPES_METADATA, t, e);
          };
        });
    },
    354927: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UseFilters = void 0);
      const s = r(545911),
        i = r(40535),
        n = r(514046),
        a = r(628111);
      t.UseFilters = (...e) =>
        (function (...e) {
          return (t, r, o) => {
            const c = (e) => e && ((0, n.isFunction)(e) || (0, n.isFunction)(e.catch));
            return o
              ? ((0, a.validateEach)(t.constructor, e, c, "@UseFilters", "filter"),
                (0, i.extendArrayMetadata)(s.EXCEPTION_FILTERS_METADATA, e, o.value),
                o)
              : ((0, a.validateEach)(t, e, c, "@UseFilters", "filter"), (0, i.extendArrayMetadata)(s.EXCEPTION_FILTERS_METADATA, e, t), t);
          };
        })(...e);
    },
    40469: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(416994), t),
        s.__exportStar(r(216102), t),
        s.__exportStar(r(972472), t),
        s.__exportStar(r(385281), t),
        s.__exportStar(r(354927), t),
        s.__exportStar(r(32454), t),
        s.__exportStar(r(497366), t),
        s.__exportStar(r(611207), t),
        s.__exportStar(r(609579), t),
        s.__exportStar(r(194385), t),
        s.__exportStar(r(651788), t),
        s.__exportStar(r(518013), t),
        s.__exportStar(r(286714), t),
        s.__exportStar(r(969472), t);
    },
    32454: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Inject = void 0);
      const s = r(545911),
        i = r(514046);
      t.Inject = function (e) {
        return (t, r, n) => {
          const a = e || Reflect.getMetadata("design:type", t, r);
          if (!(0, i.isUndefined)(n)) {
            let e = Reflect.getMetadata(s.SELF_DECLARED_DEPS_METADATA, t) || [];
            return (e = [...e, { index: n, param: a }]), void Reflect.defineMetadata(s.SELF_DECLARED_DEPS_METADATA, e, t);
          }
          let o = Reflect.getMetadata(s.PROPERTY_DEPS_METADATA, t.constructor) || [];
          (o = [...o, { key: r, type: a }]), Reflect.defineMetadata(s.PROPERTY_DEPS_METADATA, o, t.constructor);
        };
      };
    },
    497366: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.mixin = t.Injectable = void 0);
      const s = r(775438),
        i = r(545911);
      function n(e) {
        return (t) => {
          Reflect.defineMetadata(i.INJECTABLE_WATERMARK, !0, t), Reflect.defineMetadata(i.SCOPE_OPTIONS_METADATA, e, t);
        };
      }
      (t.Injectable = n),
        (t.mixin = function (e) {
          return Object.defineProperty(e, "name", { value: (0, s.uid)(21) }), n()(e), e;
        });
    },
    611207: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Optional = void 0);
      const s = r(545911),
        i = r(514046);
      t.Optional = function () {
        return (e, t, r) => {
          if (!(0, i.isUndefined)(r)) {
            const t = Reflect.getMetadata(s.OPTIONAL_DEPS_METADATA, e) || [];
            return void Reflect.defineMetadata(s.OPTIONAL_DEPS_METADATA, [...t, r], e);
          }
          const n = Reflect.getMetadata(s.OPTIONAL_PROPERTY_DEPS_METADATA, e.constructor) || [];
          Reflect.defineMetadata(s.OPTIONAL_PROPERTY_DEPS_METADATA, [...n, t], e.constructor);
        };
      };
    },
    609579: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SetMetadata = void 0),
        (t.SetMetadata = (e, t) => {
          const r = (r, s, i) => (i ? (Reflect.defineMetadata(e, t, i.value), i) : (Reflect.defineMetadata(e, t, r), r));
          return (r.KEY = e), r;
        });
    },
    194385: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UseGuards = void 0);
      const s = r(545911),
        i = r(40535),
        n = r(514046),
        a = r(628111);
      t.UseGuards = function (...e) {
        return (t, r, o) => {
          const c = (e) => e && ((0, n.isFunction)(e) || (0, n.isFunction)(e.canActivate));
          return o
            ? ((0, a.validateEach)(t.constructor, e, c, "@UseGuards", "guard"),
              (0, i.extendArrayMetadata)(s.GUARDS_METADATA, e, o.value),
              o)
            : ((0, a.validateEach)(t, e, c, "@UseGuards", "guard"), (0, i.extendArrayMetadata)(s.GUARDS_METADATA, e, t), t);
        };
      };
    },
    651788: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UseInterceptors = void 0);
      const s = r(545911),
        i = r(40535),
        n = r(514046),
        a = r(628111);
      t.UseInterceptors = function (...e) {
        return (t, r, o) => {
          const c = (e) => e && ((0, n.isFunction)(e) || (0, n.isFunction)(e.intercept));
          return o
            ? ((0, a.validateEach)(t.constructor, e, c, "@UseInterceptors", "interceptor"),
              (0, i.extendArrayMetadata)(s.INTERCEPTORS_METADATA, e, o.value),
              o)
            : ((0, a.validateEach)(t, e, c, "@UseInterceptors", "interceptor"),
              (0, i.extendArrayMetadata)(s.INTERCEPTORS_METADATA, e, t),
              t);
        };
      };
    },
    518013: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UsePipes = void 0);
      const s = r(545911),
        i = r(40535),
        n = r(514046),
        a = r(628111);
      t.UsePipes = function (...e) {
        return (t, r, o) =>
          o
            ? ((0, i.extendArrayMetadata)(s.PIPES_METADATA, e, o.value), o)
            : ((0, a.validateEach)(t, e, (e) => e && ((0, n.isFunction)(e) || (0, n.isFunction)(e.transform)), "@UsePipes", "pipe"),
              (0, i.extendArrayMetadata)(s.PIPES_METADATA, e, t),
              t);
      };
    },
    969472: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Version = void 0);
      const s = r(545911);
      t.Version = function (e) {
        return Array.isArray(e) && (e = Array.from(new Set(e))), (t, r, i) => (Reflect.defineMetadata(s.VERSION_METADATA, e, i.value), i);
      };
    },
    140400: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createParamDecorator = void 0);
      const s = r(775438),
        i = r(545911),
        n = r(733419),
        a = r(514046);
      t.createParamDecorator = function (e, t = []) {
        const r = (0, s.uid)(21);
        return (s, ...o) =>
          (c, l, u) => {
            const d = Reflect.getMetadata(i.ROUTE_ARGS_METADATA, c.constructor, l) || {},
              p =
                (0, a.isNil)(s) ||
                !(
                  (h = s) &&
                  (((0, a.isFunction)(h) && h.prototype && (0, a.isFunction)(h.prototype.transform)) || (0, a.isFunction)(h.transform))
                );
            var h;
            const f = p ? s : void 0,
              g = p ? o : [s, ...o];
            Reflect.defineMetadata(i.ROUTE_ARGS_METADATA, (0, n.assignCustomParameterMetadata)(d, r, u, e, f, ...g), c.constructor, l),
              t.forEach((e) => e(c, l, u));
          };
      };
    },
    988992: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Header = void 0);
      const s = r(545911),
        i = r(40535);
      t.Header = function (e, t) {
        return (r, n, a) => ((0, i.extendArrayMetadata)(s.HEADERS_METADATA, [{ name: e, value: t }], a.value), a);
      };
    },
    640253: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.HttpCode = void 0);
      const s = r(545911);
      t.HttpCode = function (e) {
        return (t, r, i) => (Reflect.defineMetadata(s.HTTP_CODE_METADATA, e, i.value), i);
      };
    },
    194540: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(31412), t),
        s.__exportStar(r(74081), t),
        s.__exportStar(r(640253), t),
        s.__exportStar(r(140400), t),
        s.__exportStar(r(251346), t),
        s.__exportStar(r(988992), t),
        s.__exportStar(r(929937), t),
        s.__exportStar(r(903806), t);
    },
    929937: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Redirect = void 0);
      const s = r(545911);
      t.Redirect = function (e = "", t) {
        return (r, i, n) => (Reflect.defineMetadata(s.REDIRECT_METADATA, { statusCode: t, url: e }, n.value), n);
      };
    },
    251346: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Render = void 0);
      const s = r(545911);
      t.Render = function (e) {
        return (t, r, i) => (Reflect.defineMetadata(s.RENDER_METADATA, e, i.value), i);
      };
    },
    31412: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.All = t.Head = t.Options = t.Patch = t.Put = t.Delete = t.Get = t.Post = t.RequestMapping = void 0);
      const s = r(545911),
        i = r(446116),
        n = { [s.PATH_METADATA]: "/", [s.METHOD_METADATA]: i.RequestMethod.GET };
      t.RequestMapping = (e = n) => {
        const t = e[s.PATH_METADATA],
          r = t && t.length ? t : "/",
          a = e[s.METHOD_METADATA] || i.RequestMethod.GET;
        return (e, t, i) => (Reflect.defineMetadata(s.PATH_METADATA, r, i.value), Reflect.defineMetadata(s.METHOD_METADATA, a, i.value), i);
      };
      const a = (e) => (r) => (0, t.RequestMapping)({ [s.PATH_METADATA]: r, [s.METHOD_METADATA]: e });
      (t.Post = a(i.RequestMethod.POST)),
        (t.Get = a(i.RequestMethod.GET)),
        (t.Delete = a(i.RequestMethod.DELETE)),
        (t.Put = a(i.RequestMethod.PUT)),
        (t.Patch = a(i.RequestMethod.PATCH)),
        (t.Options = a(i.RequestMethod.OPTIONS)),
        (t.Head = a(i.RequestMethod.HEAD)),
        (t.All = a(i.RequestMethod.ALL));
    },
    74081: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Res =
          t.Req =
          t.HostParam =
          t.Param =
          t.Body =
          t.Query =
          t.Headers =
          t.UploadedFiles =
          t.UploadedFile =
          t.Session =
          t.Ip =
          t.Next =
          t.Response =
          t.Request =
          t.assignMetadata =
            void 0);
      const s = r(545911),
        i = r(83366),
        n = r(514046);
      function a(e, t, r, s, ...i) {
        return Object.assign(Object.assign({}, e), { [`${t}:${r}`]: { index: r, data: s, pipes: i } });
      }
      function o(e) {
        return (t) => (r, i, n) => {
          const o = Reflect.getMetadata(s.ROUTE_ARGS_METADATA, r.constructor, i) || {};
          Reflect.defineMetadata(s.ROUTE_ARGS_METADATA, a(o, e, n, t), r.constructor, i);
        };
      }
      t.assignMetadata = a;
      const c =
        (e) =>
        (t, ...r) =>
        (i, o, c) => {
          const l = Reflect.getMetadata(s.ROUTE_ARGS_METADATA, i.constructor, o) || {},
            u = (0, n.isNil)(t) || (0, n.isString)(t),
            d = u ? t : void 0,
            p = u ? r : [t, ...r];
          Reflect.defineMetadata(s.ROUTE_ARGS_METADATA, a(l, e, c, d, ...p), i.constructor, o);
        };
      (t.Request = o(i.RouteParamtypes.REQUEST)),
        (t.Response = (e) => (t, r, n) => (
          (null == e ? void 0 : e.passthrough) &&
            Reflect.defineMetadata(s.RESPONSE_PASSTHROUGH_METADATA, null == e ? void 0 : e.passthrough, t.constructor, r),
          o(i.RouteParamtypes.RESPONSE)()(t, r, n)
        )),
        (t.Next = o(i.RouteParamtypes.NEXT)),
        (t.Ip = o(i.RouteParamtypes.IP)),
        (t.Session = o(i.RouteParamtypes.SESSION)),
        (t.UploadedFile = function (e, ...t) {
          return c(i.RouteParamtypes.FILE)(e, ...t);
        }),
        (t.UploadedFiles = function (...e) {
          return c(i.RouteParamtypes.FILES)(void 0, ...e);
        }),
        (t.Headers = o(i.RouteParamtypes.HEADERS)),
        (t.Query = function (e, ...t) {
          return c(i.RouteParamtypes.QUERY)(e, ...t);
        }),
        (t.Body = function (e, ...t) {
          return c(i.RouteParamtypes.BODY)(e, ...t);
        }),
        (t.Param = function (e, ...t) {
          return c(i.RouteParamtypes.PARAM)(e, ...t);
        }),
        (t.HostParam = function (e) {
          return o(i.RouteParamtypes.HOST)(e);
        }),
        (t.Req = t.Request),
        (t.Res = t.Response);
    },
    903806: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Sse = void 0);
      const s = r(545911),
        i = r(446116);
      t.Sse = function (e) {
        return (t, r, n) => (
          (e = e && e.length ? e : "/"),
          Reflect.defineMetadata(s.PATH_METADATA, e, n.value),
          Reflect.defineMetadata(s.METHOD_METADATA, i.RequestMethod.GET, n.value),
          Reflect.defineMetadata(s.SSE_METADATA, !0, n.value),
          n
        );
      };
    },
    405905: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(40469), t), s.__exportStar(r(395751), t), s.__exportStar(r(194540), t);
    },
    184774: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Global = void 0);
      const s = r(545911);
      t.Global = function () {
        return (e) => {
          Reflect.defineMetadata(s.GLOBAL_MODULE_METADATA, !0, e);
        };
      };
    },
    395751: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(184774), t), s.__exportStar(r(999413), t);
    },
    999413: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Module = void 0);
      const s = r(805470);
      t.Module = function (e) {
        const t = Object.keys(e);
        return (
          (0, s.validateModuleKeys)(t),
          (t) => {
            for (const r in e) e.hasOwnProperty(r) && Reflect.defineMetadata(r, e[r], t);
          }
        );
      };
    },
    18201: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HttpStatus = void 0),
        (function (e) {
          (e[(e.CONTINUE = 100)] = "CONTINUE"),
            (e[(e.SWITCHING_PROTOCOLS = 101)] = "SWITCHING_PROTOCOLS"),
            (e[(e.PROCESSING = 102)] = "PROCESSING"),
            (e[(e.EARLYHINTS = 103)] = "EARLYHINTS"),
            (e[(e.OK = 200)] = "OK"),
            (e[(e.CREATED = 201)] = "CREATED"),
            (e[(e.ACCEPTED = 202)] = "ACCEPTED"),
            (e[(e.NON_AUTHORITATIVE_INFORMATION = 203)] = "NON_AUTHORITATIVE_INFORMATION"),
            (e[(e.NO_CONTENT = 204)] = "NO_CONTENT"),
            (e[(e.RESET_CONTENT = 205)] = "RESET_CONTENT"),
            (e[(e.PARTIAL_CONTENT = 206)] = "PARTIAL_CONTENT"),
            (e[(e.AMBIGUOUS = 300)] = "AMBIGUOUS"),
            (e[(e.MOVED_PERMANENTLY = 301)] = "MOVED_PERMANENTLY"),
            (e[(e.FOUND = 302)] = "FOUND"),
            (e[(e.SEE_OTHER = 303)] = "SEE_OTHER"),
            (e[(e.NOT_MODIFIED = 304)] = "NOT_MODIFIED"),
            (e[(e.TEMPORARY_REDIRECT = 307)] = "TEMPORARY_REDIRECT"),
            (e[(e.PERMANENT_REDIRECT = 308)] = "PERMANENT_REDIRECT"),
            (e[(e.BAD_REQUEST = 400)] = "BAD_REQUEST"),
            (e[(e.UNAUTHORIZED = 401)] = "UNAUTHORIZED"),
            (e[(e.PAYMENT_REQUIRED = 402)] = "PAYMENT_REQUIRED"),
            (e[(e.FORBIDDEN = 403)] = "FORBIDDEN"),
            (e[(e.NOT_FOUND = 404)] = "NOT_FOUND"),
            (e[(e.METHOD_NOT_ALLOWED = 405)] = "METHOD_NOT_ALLOWED"),
            (e[(e.NOT_ACCEPTABLE = 406)] = "NOT_ACCEPTABLE"),
            (e[(e.PROXY_AUTHENTICATION_REQUIRED = 407)] = "PROXY_AUTHENTICATION_REQUIRED"),
            (e[(e.REQUEST_TIMEOUT = 408)] = "REQUEST_TIMEOUT"),
            (e[(e.CONFLICT = 409)] = "CONFLICT"),
            (e[(e.GONE = 410)] = "GONE"),
            (e[(e.LENGTH_REQUIRED = 411)] = "LENGTH_REQUIRED"),
            (e[(e.PRECONDITION_FAILED = 412)] = "PRECONDITION_FAILED"),
            (e[(e.PAYLOAD_TOO_LARGE = 413)] = "PAYLOAD_TOO_LARGE"),
            (e[(e.URI_TOO_LONG = 414)] = "URI_TOO_LONG"),
            (e[(e.UNSUPPORTED_MEDIA_TYPE = 415)] = "UNSUPPORTED_MEDIA_TYPE"),
            (e[(e.REQUESTED_RANGE_NOT_SATISFIABLE = 416)] = "REQUESTED_RANGE_NOT_SATISFIABLE"),
            (e[(e.EXPECTATION_FAILED = 417)] = "EXPECTATION_FAILED"),
            (e[(e.I_AM_A_TEAPOT = 418)] = "I_AM_A_TEAPOT"),
            (e[(e.MISDIRECTED = 421)] = "MISDIRECTED"),
            (e[(e.UNPROCESSABLE_ENTITY = 422)] = "UNPROCESSABLE_ENTITY"),
            (e[(e.FAILED_DEPENDENCY = 424)] = "FAILED_DEPENDENCY"),
            (e[(e.PRECONDITION_REQUIRED = 428)] = "PRECONDITION_REQUIRED"),
            (e[(e.TOO_MANY_REQUESTS = 429)] = "TOO_MANY_REQUESTS"),
            (e[(e.INTERNAL_SERVER_ERROR = 500)] = "INTERNAL_SERVER_ERROR"),
            (e[(e.NOT_IMPLEMENTED = 501)] = "NOT_IMPLEMENTED"),
            (e[(e.BAD_GATEWAY = 502)] = "BAD_GATEWAY"),
            (e[(e.SERVICE_UNAVAILABLE = 503)] = "SERVICE_UNAVAILABLE"),
            (e[(e.GATEWAY_TIMEOUT = 504)] = "GATEWAY_TIMEOUT"),
            (e[(e.HTTP_VERSION_NOT_SUPPORTED = 505)] = "HTTP_VERSION_NOT_SUPPORTED");
        })(t.HttpStatus || (t.HttpStatus = {}));
    },
    649464: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(446116), t), s.__exportStar(r(18201), t), s.__exportStar(r(442988), t), s.__exportStar(r(998177), t);
    },
    446116: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RequestMethod = void 0),
        (function (e) {
          (e[(e.GET = 0)] = "GET"),
            (e[(e.POST = 1)] = "POST"),
            (e[(e.PUT = 2)] = "PUT"),
            (e[(e.DELETE = 3)] = "DELETE"),
            (e[(e.PATCH = 4)] = "PATCH"),
            (e[(e.ALL = 5)] = "ALL"),
            (e[(e.OPTIONS = 6)] = "OPTIONS"),
            (e[(e.HEAD = 7)] = "HEAD");
        })(t.RequestMethod || (t.RequestMethod = {}));
    },
    83366: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RouteParamtypes = void 0),
        (function (e) {
          (e[(e.REQUEST = 0)] = "REQUEST"),
            (e[(e.RESPONSE = 1)] = "RESPONSE"),
            (e[(e.NEXT = 2)] = "NEXT"),
            (e[(e.BODY = 3)] = "BODY"),
            (e[(e.QUERY = 4)] = "QUERY"),
            (e[(e.PARAM = 5)] = "PARAM"),
            (e[(e.HEADERS = 6)] = "HEADERS"),
            (e[(e.SESSION = 7)] = "SESSION"),
            (e[(e.FILE = 8)] = "FILE"),
            (e[(e.FILES = 9)] = "FILES"),
            (e[(e.HOST = 10)] = "HOST"),
            (e[(e.IP = 11)] = "IP");
        })(t.RouteParamtypes || (t.RouteParamtypes = {}));
    },
    442988: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ShutdownSignal = void 0),
        (function (e) {
          (e.SIGHUP = "SIGHUP"),
            (e.SIGINT = "SIGINT"),
            (e.SIGQUIT = "SIGQUIT"),
            (e.SIGILL = "SIGILL"),
            (e.SIGTRAP = "SIGTRAP"),
            (e.SIGABRT = "SIGABRT"),
            (e.SIGBUS = "SIGBUS"),
            (e.SIGFPE = "SIGFPE"),
            (e.SIGSEGV = "SIGSEGV"),
            (e.SIGUSR2 = "SIGUSR2"),
            (e.SIGTERM = "SIGTERM");
        })(t.ShutdownSignal || (t.ShutdownSignal = {}));
    },
    998177: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VersioningType = void 0),
        (function (e) {
          (e[(e.URI = 0)] = "URI"), (e[(e.HEADER = 1)] = "HEADER"), (e[(e.MEDIA_TYPE = 2)] = "MEDIA_TYPE"), (e[(e.CUSTOM = 3)] = "CUSTOM");
        })(t.VersioningType || (t.VersioningType = {}));
    },
    397819: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.BadGatewayException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Bad Gateway") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.BAD_GATEWAY), s.HttpStatus.BAD_GATEWAY, n);
        }
      }
      t.BadGatewayException = n;
    },
    282246: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.BadRequestException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Bad Request") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.BAD_REQUEST), s.HttpStatus.BAD_REQUEST, n);
        }
      }
      t.BadRequestException = n;
    },
    725161: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ConflictException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Conflict") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.CONFLICT), s.HttpStatus.CONFLICT, n);
        }
      }
      t.ConflictException = n;
    },
    48969: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ForbiddenException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Forbidden") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.FORBIDDEN), s.HttpStatus.FORBIDDEN, n);
        }
      }
      t.ForbiddenException = n;
    },
    918498: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.GatewayTimeoutException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Gateway Timeout") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.GATEWAY_TIMEOUT), s.HttpStatus.GATEWAY_TIMEOUT, n);
        }
      }
      t.GatewayTimeoutException = n;
    },
    857433: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.GoneException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Gone") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.GONE), s.HttpStatus.GONE, n);
        }
      }
      t.GoneException = n;
    },
    225923: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.HttpVersionNotSupportedException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "HTTP Version Not Supported") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.HTTP_VERSION_NOT_SUPPORTED), s.HttpStatus.HTTP_VERSION_NOT_SUPPORTED, n);
        }
      }
      t.HttpVersionNotSupportedException = n;
    },
    886165: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.HttpException = void 0);
      const s = r(369264),
        i = r(514046);
      class n extends Error {
        constructor(e, t, r) {
          super(), (this.response = e), (this.status = t), (this.options = r), this.initMessage(), this.initName(), this.initCause();
        }
        initCause() {
          var e;
          (null === (e = this.options) || void 0 === e ? void 0 : e.cause)
            ? (this.cause = this.options.cause)
            : this.response instanceof Error &&
              (s.Logger.warn(
                'DEPRECATED! Passing the error cause as the first argument to HttpException constructor is deprecated. You should use the "options" parameter instead: new HttpException("message", 400, { cause: new Error("Some Error") }) '
              ),
              (this.cause = this.response));
        }
        initMessage() {
          var e, t;
          (0, i.isString)(this.response)
            ? (this.message = this.response)
            : (0, i.isObject)(this.response) && (0, i.isString)(this.response.message)
            ? (this.message = this.response.message)
            : this.constructor &&
              (this.message =
                null !== (t = null === (e = this.constructor.name.match(/[A-Z][a-z]+|[0-9]+/g)) || void 0 === e ? void 0 : e.join(" ")) &&
                void 0 !== t
                  ? t
                  : "Error");
        }
        initName() {
          this.name = this.constructor.name;
        }
        getResponse() {
          return this.response;
        }
        getStatus() {
          return this.status;
        }
        static createBody(e, t, r) {
          return e
            ? (0, i.isObject)(e) && !Array.isArray(e)
              ? e
              : { statusCode: r, message: e, error: t }
            : { statusCode: r, message: t };
        }
        static getDescriptionFrom(e) {
          return (0, i.isString)(e) ? e : null == e ? void 0 : e.description;
        }
        static getHttpExceptionOptionsFrom(e) {
          return (0, i.isString)(e) ? {} : e;
        }
        static extractDescriptionAndOptionsFrom(e) {
          return {
            description: (0, i.isString)(e) ? e : null == e ? void 0 : e.description,
            httpExceptionOptions: (0, i.isString)(e) ? {} : e
          };
        }
      }
      t.HttpException = n;
    },
    87178: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ImATeapotException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "I'm a teapot") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.I_AM_A_TEAPOT), s.HttpStatus.I_AM_A_TEAPOT, n);
        }
      }
      t.ImATeapotException = n;
    },
    987801: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(282246), t),
        s.__exportStar(r(886165), t),
        s.__exportStar(r(737128), t),
        s.__exportStar(r(484507), t),
        s.__exportStar(r(1317), t),
        s.__exportStar(r(48969), t),
        s.__exportStar(r(151090), t),
        s.__exportStar(r(419421), t),
        s.__exportStar(r(725161), t),
        s.__exportStar(r(857433), t),
        s.__exportStar(r(691588), t),
        s.__exportStar(r(967874), t),
        s.__exportStar(r(394612), t),
        s.__exportStar(r(351735), t),
        s.__exportStar(r(554626), t),
        s.__exportStar(r(225923), t),
        s.__exportStar(r(397819), t),
        s.__exportStar(r(725933), t),
        s.__exportStar(r(918498), t),
        s.__exportStar(r(87178), t),
        s.__exportStar(r(895865), t),
        s.__exportStar(r(663059), t);
    },
    351735: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InternalServerErrorException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Internal Server Error") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.INTERNAL_SERVER_ERROR), s.HttpStatus.INTERNAL_SERVER_ERROR, n);
        }
      }
      t.InternalServerErrorException = n;
    },
    484507: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MethodNotAllowedException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Method Not Allowed") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.METHOD_NOT_ALLOWED), s.HttpStatus.METHOD_NOT_ALLOWED, n);
        }
      }
      t.MethodNotAllowedException = n;
    },
    663059: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MisdirectedException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Misdirected") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.MISDIRECTED), s.HttpStatus.MISDIRECTED, n);
        }
      }
      t.MisdirectedException = n;
    },
    151090: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.NotAcceptableException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Not Acceptable") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.NOT_ACCEPTABLE), s.HttpStatus.NOT_ACCEPTABLE, n);
        }
      }
      t.NotAcceptableException = n;
    },
    1317: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.NotFoundException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Not Found") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.NOT_FOUND), s.HttpStatus.NOT_FOUND, n);
        }
      }
      t.NotFoundException = n;
    },
    554626: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.NotImplementedException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Not Implemented") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.NOT_IMPLEMENTED), s.HttpStatus.NOT_IMPLEMENTED, n);
        }
      }
      t.NotImplementedException = n;
    },
    691588: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.PayloadTooLargeException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Payload Too Large") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.PAYLOAD_TOO_LARGE), s.HttpStatus.PAYLOAD_TOO_LARGE, n);
        }
      }
      t.PayloadTooLargeException = n;
    },
    895865: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.PreconditionFailedException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Precondition Failed") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.PRECONDITION_FAILED), s.HttpStatus.PRECONDITION_FAILED, n);
        }
      }
      t.PreconditionFailedException = n;
    },
    419421: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RequestTimeoutException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Request Timeout") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.REQUEST_TIMEOUT), s.HttpStatus.REQUEST_TIMEOUT, n);
        }
      }
      t.RequestTimeoutException = n;
    },
    725933: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ServiceUnavailableException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Service Unavailable") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.SERVICE_UNAVAILABLE), s.HttpStatus.SERVICE_UNAVAILABLE, n);
        }
      }
      t.ServiceUnavailableException = n;
    },
    737128: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnauthorizedException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Unauthorized") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.UNAUTHORIZED), s.HttpStatus.UNAUTHORIZED, n);
        }
      }
      t.UnauthorizedException = n;
    },
    394612: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnprocessableEntityException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Unprocessable Entity") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.UNPROCESSABLE_ENTITY), s.HttpStatus.UNPROCESSABLE_ENTITY, n);
        }
      }
      t.UnprocessableEntityException = n;
    },
    967874: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnsupportedMediaTypeException = void 0);
      const s = r(18201),
        i = r(886165);
      class n extends i.HttpException {
        constructor(e, t = "Unsupported Media Type") {
          const { description: r, httpExceptionOptions: n } = i.HttpException.extractDescriptionAndOptionsFrom(t);
          super(i.HttpException.createBody(e, r, s.HttpStatus.UNSUPPORTED_MEDIA_TYPE), s.HttpStatus.UNSUPPORTED_MEDIA_TYPE, n);
        }
      }
      t.UnsupportedMediaTypeException = n;
    },
    229067: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(59405), t);
    },
    59405: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.StreamableFile = void 0);
      const s = r(296704),
        i = r(980911),
        n = r(649464),
        a = r(514046);
      t.StreamableFile = class {
        constructor(e, t = {}) {
          var r, o;
          (this.options = t),
            (this.handleError = (e, t) => {
              t.destroyed || (t.headersSent ? t.end() : ((t.statusCode = n.HttpStatus.BAD_REQUEST), t.send(e.message)));
            }),
            i.types.isUint8Array(e)
              ? ((this.stream = new s.Readable()),
                this.stream.push(e),
                this.stream.push(null),
                (null !== (r = (o = this.options).length) && void 0 !== r) || (o.length = e.length))
              : e.pipe && (0, a.isFunction)(e.pipe) && (this.stream = e);
        }
        getStream() {
          return this.stream;
        }
        getHeaders() {
          const { type: e = "application/octet-stream", disposition: t, length: r } = this.options;
          return { type: e, disposition: t, length: r };
        }
        get errorHandler() {
          return this.handleError;
        }
        setErrorHandler(e) {
          return (this.handleError = e), this;
        }
      };
    },
    17988: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.VERSION_NEUTRAL = t.Scope = void 0);
      const s = r(488802);
      r(760171),
        s.__exportStar(r(221766), t),
        s.__exportStar(r(405905), t),
        s.__exportStar(r(649464), t),
        s.__exportStar(r(987801), t),
        s.__exportStar(r(229067), t);
      var i = r(689680);
      Object.defineProperty(t, "Scope", {
        enumerable: !0,
        get: function () {
          return i.Scope;
        }
      }),
        Object.defineProperty(t, "VERSION_NEUTRAL", {
          enumerable: !0,
          get: function () {
            return i.VERSION_NEUTRAL;
          }
        }),
        s.__exportStar(r(171503), t),
        s.__exportStar(r(669659), t),
        s.__exportStar(r(927329), t),
        s.__exportStar(r(369264), t),
        s.__exportStar(r(498116), t);
    },
    23190: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    329081: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    823054: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    36543: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    805414: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    727856: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    759565: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    777303: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    228266: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    353789: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    769786: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    768455: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    447698: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    43170: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    877698: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    732818: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    668254: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(732818), t),
        s.__exportStar(r(398445), t),
        s.__exportStar(r(151274), t),
        s.__exportStar(r(845830), t),
        s.__exportStar(r(428268), t);
    },
    398445: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    151274: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    845830: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    428268: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    720617: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    454824: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(720617), t), s.__exportStar(r(345861), t), s.__exportStar(r(384556), t);
    },
    345861: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    384556: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    689680: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(23190), t),
        s.__exportStar(r(329081), t),
        s.__exportStar(r(823054), t),
        s.__exportStar(r(36543), t),
        s.__exportStar(r(805414), t),
        s.__exportStar(r(727856), t),
        s.__exportStar(r(759565), t),
        s.__exportStar(r(777303), t),
        s.__exportStar(r(228266), t),
        s.__exportStar(r(353789), t),
        s.__exportStar(r(769786), t),
        s.__exportStar(r(768455), t),
        s.__exportStar(r(447698), t),
        s.__exportStar(r(43170), t),
        s.__exportStar(r(877698), t),
        s.__exportStar(r(668254), t),
        s.__exportStar(r(454824), t),
        s.__exportStar(r(627067), t),
        s.__exportStar(r(417422), t),
        s.__exportStar(r(576861), t),
        s.__exportStar(r(701482), t),
        s.__exportStar(r(370908), t),
        s.__exportStar(r(559290), t),
        s.__exportStar(r(21686), t),
        s.__exportStar(r(999560), t),
        s.__exportStar(r(777065), t),
        s.__exportStar(r(27195), t),
        s.__exportStar(r(187272), t),
        s.__exportStar(r(388618), t);
    },
    627067: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    417422: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    576861: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(94721), t), s.__exportStar(r(457465), t), s.__exportStar(r(952137), t), s.__exportStar(r(143775), t);
    },
    94721: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    457465: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    952137: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    143775: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    662602: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    219183: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    701482: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(662602), t),
        s.__exportStar(r(219183), t),
        s.__exportStar(r(516654), t),
        s.__exportStar(r(887860), t),
        s.__exportStar(r(913732), t),
        s.__exportStar(r(521195), t),
        s.__exportStar(r(12279), t),
        s.__exportStar(r(281173), t);
    },
    516654: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    887860: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    913732: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    521195: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    12279: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    281173: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    370908: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    559290: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    21686: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    999560: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    777065: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Scope = void 0),
        (function (e) {
          (e[(e.DEFAULT = 0)] = "DEFAULT"), (e[(e.TRANSIENT = 1)] = "TRANSIENT"), (e[(e.REQUEST = 2)] = "REQUEST");
        })(t.Scope || (t.Scope = {}));
    },
    27195: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    187272: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.VERSION_NEUTRAL = void 0), (t.VERSION_NEUTRAL = Symbol("VERSION_NEUTRAL"));
    },
    388618: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    778516: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ConfigurableModuleBuilder = void 0);
      const s = r(716616),
        i = r(695562),
        n = r(739353),
        a = r(199887);
      class o {
        constructor(e = {}, t) {
          (this.options = e),
            (this.logger = new s.Logger(o.name)),
            t &&
              ((this.staticMethodKey = t.staticMethodKey),
              (this.factoryClassMethodKey = t.factoryClassMethodKey),
              (this.transformModuleDefinition = t.transformModuleDefinition),
              (this.extras = t.extras));
        }
        setExtras(e, t = (e) => e) {
          const r = new o(this.options, this);
          return (r.extras = e), (r.transformModuleDefinition = t), r;
        }
        setClassMethodName(e) {
          const t = new o(this.options, this);
          return (t.staticMethodKey = e), t;
        }
        setFactoryMethodName(e) {
          const t = new o(this.options, this);
          return (t.factoryClassMethodKey = e), t;
        }
        build() {
          var e, t, r, s, i;
          return (
            (null !== (e = this.staticMethodKey) && void 0 !== e) || (this.staticMethodKey = n.DEFAULT_METHOD_KEY),
            (null !== (t = this.factoryClassMethodKey) && void 0 !== t) ||
              (this.factoryClassMethodKey = n.DEFAULT_FACTORY_CLASS_METHOD_KEY),
            (null !== (r = (i = this.options).optionsInjectionToken) && void 0 !== r) ||
              (i.optionsInjectionToken = this.options.moduleName
                ? this.constructInjectionTokenString()
                : (0, a.generateOptionsInjectionToken)()),
            (null !== (s = this.transformModuleDefinition) && void 0 !== s) || (this.transformModuleDefinition = (e) => e),
            {
              ConfigurableModuleClass: this.createConfigurableModuleCls(),
              MODULE_OPTIONS_TOKEN: this.options.optionsInjectionToken,
              ASYNC_OPTIONS_TYPE: this.createTypeProxy("ASYNC_OPTIONS_TYPE"),
              OPTIONS_TYPE: this.createTypeProxy("OPTIONS_TYPE")
            }
          );
        }
        constructInjectionTokenString() {
          return `${this.options.moduleName
            .trim()
            .split(/(?=[A-Z])/)
            .join("_")
            .toUpperCase()}_MODULE_OPTIONS`;
        }
        createConfigurableModuleCls() {
          const e = this,
            t = this.staticMethodKey + n.ASYNC_METHOD_SUFFIX;
          class r {
            static [e.staticMethodKey](t) {
              const r = [{ provide: e.options.optionsInjectionToken, useValue: this.omitExtras(t, e.extras) }];
              return (
                e.options.alwaysTransient && r.push({ provide: n.CONFIGURABLE_MODULE_ID, useValue: (0, i.randomStringGenerator)() }),
                e.transformModuleDefinition({ module: this, providers: r }, Object.assign(Object.assign({}, e.extras), t))
              );
            }
            static [t](t) {
              const r = this.createAsyncProviders(t);
              return (
                e.options.alwaysTransient && r.push({ provide: n.CONFIGURABLE_MODULE_ID, useValue: (0, i.randomStringGenerator)() }),
                e.transformModuleDefinition(
                  { module: this, imports: t.imports || [], providers: r },
                  Object.assign(Object.assign({}, e.extras), t)
                )
              );
            }
            static omitExtras(e, t) {
              if (!t) return e;
              const r = {},
                s = Object.keys(t);
              return (
                Object.keys(e)
                  .filter((e) => !s.includes(e))
                  .forEach((t) => {
                    r[t] = e[t];
                  }),
                r
              );
            }
            static createAsyncProviders(e) {
              return e.useExisting || e.useFactory
                ? e.inject && e.provideInjectionTokensFrom
                  ? [this.createAsyncOptionsProvider(e), ...(0, a.getInjectionProviders)(e.provideInjectionTokensFrom, e.inject)]
                  : [this.createAsyncOptionsProvider(e)]
                : [this.createAsyncOptionsProvider(e), { provide: e.useClass, useClass: e.useClass }];
            }
            static createAsyncOptionsProvider(t) {
              return t.useFactory
                ? { provide: e.options.optionsInjectionToken, useFactory: t.useFactory, inject: t.inject || [] }
                : {
                    provide: e.options.optionsInjectionToken,
                    useFactory: async (t) => await t[e.factoryClassMethodKey](),
                    inject: [t.useExisting || t.useClass]
                  };
            }
          }
          return r;
        }
        createTypeProxy(e) {
          return new Proxy(
            {},
            {
              get: () => {
                throw new Error(`"${e}" is not supposed to be used as a value.`);
              }
            }
          );
        }
      }
      t.ConfigurableModuleBuilder = o;
    },
    739353: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CONFIGURABLE_MODULE_ID = t.ASYNC_METHOD_SUFFIX = t.DEFAULT_FACTORY_CLASS_METHOD_KEY = t.DEFAULT_METHOD_KEY = void 0),
        (t.DEFAULT_METHOD_KEY = "register"),
        (t.DEFAULT_FACTORY_CLASS_METHOD_KEY = "create"),
        (t.ASYNC_METHOD_SUFFIX = "Async"),
        (t.CONFIGURABLE_MODULE_ID = "CONFIGURABLE_MODULE_ID");
    },
    171503: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(778516), t), s.__exportStar(r(46341), t);
    },
    517687: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    279419: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    980567: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    46341: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(517687), t), s.__exportStar(r(279419), t), s.__exportStar(r(980567), t);
    },
    67863: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.generateOptionsInjectionToken = void 0);
      const s = r(695562);
      t.generateOptionsInjectionToken = function () {
        return `CONFIGURABLE_MODULE_OPTIONS[${(0, s.randomStringGenerator)()}]`;
      };
    },
    248933: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getInjectionProviders = void 0);
      const r = (e) => {
        return (null == (t = e) ? void 0 : t.token) && !(null == t ? void 0 : t.prototype) ? e.token : e;
        var t;
      };
      t.getInjectionProviders = function (e, t) {
        const s = [];
        let i = t.map(r);
        for (; i.length > 0; ) {
          const t = (null != e ? e : []).filter((e) => !s.includes(e) && (i.includes(e) || i.includes(null == e ? void 0 : e.provide)));
          s.push(...t),
            (i = t
              .filter((e) => (null == e ? void 0 : e.inject))
              .map((e) => e.inject)
              .flat()
              .map(r));
        }
        return s;
      };
    },
    199887: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(67863), t), s.__exportStar(r(248933), t);
    },
    273650: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DefaultValuePipe = void 0);
      const s = r(488802),
        i = r(497366),
        n = r(514046);
      let a = class {
        constructor(e) {
          this.defaultValue = e;
        }
        transform(e, t) {
          return (0, n.isNil)(e) || ((0, n.isNumber)(e) && isNaN(e)) ? this.defaultValue : e;
        }
      };
      (a = s.__decorate([(0, i.Injectable)(), s.__metadata("design:paramtypes", [Object])], a)), (t.DefaultValuePipe = a);
    },
    975200: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.FileTypeValidator = void 0);
      const s = r(40818);
      class i extends s.FileValidator {
        buildErrorMessage() {
          return `Validation failed (expected type is ${this.validationOptions.fileType})`;
        }
        isValid(e) {
          return !this.validationOptions || (!!e.mimetype && Boolean(e.mimetype.match(this.validationOptions.fileType)));
        }
      }
      t.FileTypeValidator = i;
    },
    40818: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FileValidator = void 0),
        (t.FileValidator = class {
          constructor(e) {
            this.validationOptions = e;
          }
        });
    },
    980187: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(975200), t),
        s.__exportStar(r(40818), t),
        s.__exportStar(r(624174), t),
        s.__exportStar(r(463078), t),
        s.__exportStar(r(790702), t),
        s.__exportStar(r(196076), t);
    },
    624174: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MaxFileSizeValidator = void 0);
      const s = r(40818);
      class i extends s.FileValidator {
        buildErrorMessage() {
          return `Validation failed (expected size is less than ${this.validationOptions.maxSize})`;
        }
        isValid(e) {
          return !this.validationOptions || e.size < this.validationOptions.maxSize;
        }
      }
      t.MaxFileSizeValidator = i;
    },
    463078: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    196076: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParseFilePipeBuilder = void 0);
      const s = r(975200),
        i = r(624174),
        n = r(790702);
      t.ParseFilePipeBuilder = class {
        constructor() {
          this.validators = [];
        }
        addMaxSizeValidator(e) {
          return this.addValidator(new i.MaxFileSizeValidator(e));
        }
        addFileTypeValidator(e) {
          return this.addValidator(new s.FileTypeValidator(e));
        }
        addValidator(e) {
          return this.validators.push(e), this;
        }
        build(e) {
          const t = new n.ParseFilePipe(Object.assign(Object.assign({}, e), { validators: this.validators }));
          return (this.validators = []), t;
        }
      };
    },
    790702: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParseFilePipe = void 0);
      const s = r(488802),
        i = r(40469),
        n = r(649464),
        a = r(853483),
        o = r(514046);
      let c = class {
        constructor(e = {}) {
          const { exceptionFactory: t, errorHttpStatusCode: r = n.HttpStatus.BAD_REQUEST, validators: s = [], fileIsRequired: i } = e;
          (this.exceptionFactory = t || ((e) => new a.HttpErrorByCode[r](e))),
            (this.validators = s),
            (this.fileIsRequired = null == i || i);
        }
        async transform(e) {
          if (this.thereAreNoFilesIn(e)) {
            if (this.fileIsRequired) throw this.exceptionFactory("File is required");
            return e;
          }
          return this.validators.length && (Array.isArray(e) ? await this.validateFiles(e) : await this.validate(e)), e;
        }
        validateFiles(e) {
          return Promise.all(e.map((e) => this.validate(e)));
        }
        thereAreNoFilesIn(e) {
          const t = Array.isArray(e) && (0, o.isEmpty)(e),
            r = (0, o.isObject)(e) && (0, o.isEmpty)(Object.keys(e));
          return (0, o.isUndefined)(e) || t || r;
        }
        async validate(e) {
          for (const t of this.validators) await this.validateOrThrow(e, t);
          return e;
        }
        async validateOrThrow(e, t) {
          if (!(await t.isValid(e))) {
            const r = t.buildErrorMessage(e);
            throw this.exceptionFactory(r);
          }
        }
        getValidators() {
          return this.validators;
        }
      };
      (c = s.__decorate([(0, i.Injectable)(), s.__param(0, (0, i.Optional)()), s.__metadata("design:paramtypes", [Object])], c)),
        (t.ParseFilePipe = c);
    },
    669659: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(273650), t),
        s.__exportStar(r(285761), t),
        s.__exportStar(r(446952), t),
        s.__exportStar(r(795310), t),
        s.__exportStar(r(278068), t),
        s.__exportStar(r(135106), t),
        s.__exportStar(r(256486), t),
        s.__exportStar(r(877039), t),
        s.__exportStar(r(980187), t);
    },
    285761: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParseArrayPipe = void 0);
      const s = r(488802),
        i = r(497366),
        n = r(611207),
        a = r(18201),
        o = r(853483),
        c = r(514046),
        l = r(877039),
        u = "Validation failed (parsable array expected)";
      let d = class {
        constructor(e = {}) {
          (this.options = e),
            (this.validationPipe = new l.ValidationPipe(Object.assign({ transform: !0, validateCustomDecorators: !0 }, e)));
          const { exceptionFactory: t, errorHttpStatusCode: r = a.HttpStatus.BAD_REQUEST } = e;
          this.exceptionFactory = t || ((e) => new o.HttpErrorByCode[r](e));
        }
        async transform(e, t) {
          if (!e && !this.options.optional) throw this.exceptionFactory(u);
          if ((0, c.isNil)(e) && this.options.optional) return e;
          if (!Array.isArray(e)) {
            if (!(0, c.isString)(e)) throw this.exceptionFactory(u);
            try {
              e = e.trim().split(this.options.separator || ",");
            } catch (e) {
              throw this.exceptionFactory(u);
            }
          }
          if (this.options.items) {
            const t = { metatype: this.options.items, type: "query" },
              r = this.isExpectedTypePrimitive(),
              s = (e, s) => {
                try {
                  e = JSON.parse(e);
                } catch (e) {}
                return r ? this.validatePrimitive(e, s) : this.validationPipe.transform(e, t);
              };
            if (!1 === this.options.stopAtFirstError) {
              let t = [];
              const r = e;
              for (let e = 0; e < r.length; e++)
                try {
                  r[e] = await s(r[e]);
                } catch (r) {
                  let s;
                  if (r.getResponse) {
                    const t = r.getResponse();
                    s = Array.isArray(t.message) ? t.message.map((t) => `[${e}] ${t}`) : `[${e}] ${t.message}`;
                  } else s = r;
                  t = t.concat(s);
                }
              if (t.length > 0) throw this.exceptionFactory(t);
              return r;
            }
            e = await Promise.all(e.map(s));
          }
          return e;
        }
        isExpectedTypePrimitive() {
          return [Boolean, Number, String].includes(this.options.items);
        }
        validatePrimitive(e, t) {
          if (this.options.items === Number) {
            const r = null !== e && "" !== e ? +e : NaN;
            if (isNaN(r)) throw this.exceptionFactory(((0, c.isUndefined)(t) ? "" : `[${t}] `) + "item must be a number");
            return r;
          }
          if (this.options.items === String) {
            if (!(0, c.isString)(e)) return `${e}`;
          } else if (this.options.items === Boolean && "boolean" != typeof e)
            throw this.exceptionFactory(((0, c.isUndefined)(t) ? "" : `[${t}] `) + "item must be a boolean value");
          return e;
        }
      };
      (d = s.__decorate([(0, i.Injectable)(), s.__param(0, (0, n.Optional)()), s.__metadata("design:paramtypes", [Object])], d)),
        (t.ParseArrayPipe = d);
    },
    446952: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParseBoolPipe = void 0);
      const s = r(488802),
        i = r(497366),
        n = r(611207),
        a = r(18201),
        o = r(853483);
      let c = class {
        constructor(e) {
          e = e || {};
          const { exceptionFactory: t, errorHttpStatusCode: r = a.HttpStatus.BAD_REQUEST } = e;
          this.exceptionFactory = t || ((e) => new o.HttpErrorByCode[r](e));
        }
        async transform(e, t) {
          if (this.isTrue(e)) return !0;
          if (this.isFalse(e)) return !1;
          throw this.exceptionFactory("Validation failed (boolean string is expected)");
        }
        isTrue(e) {
          return !0 === e || "true" === e;
        }
        isFalse(e) {
          return !1 === e || "false" === e;
        }
      };
      (c = s.__decorate([(0, i.Injectable)(), s.__param(0, (0, n.Optional)()), s.__metadata("design:paramtypes", [Object])], c)),
        (t.ParseBoolPipe = c);
    },
    135106: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParseEnumPipe = void 0);
      const s = r(488802),
        i = r(17988),
        n = r(853483);
      let a = class {
        constructor(e, t) {
          if (((this.enumType = e), !e))
            throw new Error('"ParseEnumPipe" requires "enumType" argument specified (to validate input values).');
          t = t || {};
          const { exceptionFactory: r, errorHttpStatusCode: s = i.HttpStatus.BAD_REQUEST } = t;
          this.exceptionFactory = r || ((e) => new n.HttpErrorByCode[s](e));
        }
        async transform(e, t) {
          if (!this.isEnum(e)) throw this.exceptionFactory("Validation failed (enum string is expected)");
          return e;
        }
        isEnum(e) {
          return Object.keys(this.enumType)
            .map((e) => this.enumType[e])
            .includes(e);
        }
      };
      (a = s.__decorate([(0, i.Injectable)(), s.__param(1, (0, i.Optional)()), s.__metadata("design:paramtypes", [Object, Object])], a)),
        (t.ParseEnumPipe = a);
    },
    278068: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParseFloatPipe = void 0);
      const s = r(488802),
        i = r(17988),
        n = r(853483);
      let a = class {
        constructor(e) {
          e = e || {};
          const { exceptionFactory: t, errorHttpStatusCode: r = i.HttpStatus.BAD_REQUEST } = e;
          this.exceptionFactory = t || ((e) => new n.HttpErrorByCode[r](e));
        }
        async transform(e, t) {
          if (!this.isNumeric(e)) throw this.exceptionFactory("Validation failed (numeric string is expected)");
          return parseFloat(e);
        }
        isNumeric(e) {
          return ["string", "number"].includes(typeof e) && !isNaN(parseFloat(e)) && isFinite(e);
        }
      };
      (a = s.__decorate([(0, i.Injectable)(), s.__param(0, (0, i.Optional)()), s.__metadata("design:paramtypes", [Object])], a)),
        (t.ParseFloatPipe = a);
    },
    795310: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParseIntPipe = void 0);
      const s = r(488802),
        i = r(497366),
        n = r(611207),
        a = r(18201),
        o = r(853483);
      let c = class {
        constructor(e) {
          e = e || {};
          const { exceptionFactory: t, errorHttpStatusCode: r = a.HttpStatus.BAD_REQUEST } = e;
          this.exceptionFactory = t || ((e) => new o.HttpErrorByCode[r](e));
        }
        async transform(e, t) {
          if (!this.isNumeric(e)) throw this.exceptionFactory("Validation failed (numeric string is expected)");
          return parseInt(e, 10);
        }
        isNumeric(e) {
          return ["string", "number"].includes(typeof e) && /^-?\d+$/.test(e) && isFinite(e);
        }
      };
      (c = s.__decorate([(0, i.Injectable)(), s.__param(0, (0, n.Optional)()), s.__metadata("design:paramtypes", [Object])], c)),
        (t.ParseIntPipe = c);
    },
    256486: (e, t, r) => {
      "use strict";
      var s;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParseUUIDPipe = void 0);
      const i = r(488802),
        n = r(497366),
        a = r(611207),
        o = r(18201),
        c = r(853483),
        l = r(514046);
      let u = (s = class {
        constructor(e) {
          e = e || {};
          const { exceptionFactory: t, errorHttpStatusCode: r = o.HttpStatus.BAD_REQUEST, version: s } = e;
          (this.version = s), (this.exceptionFactory = t || ((e) => new c.HttpErrorByCode[r](e)));
        }
        async transform(e, t) {
          if (!this.isUUID(e, this.version))
            throw this.exceptionFactory(`Validation failed (uuid${this.version ? ` v ${this.version}` : ""} is expected)`);
          return e;
        }
        isUUID(e, t = "all") {
          if (!(0, l.isString)(e)) throw this.exceptionFactory("The value passed as UUID is not a string");
          const r = s.uuidRegExps[t];
          return null == r ? void 0 : r.test(e);
        }
      });
      (u.uuidRegExps = {
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      }),
        (u = s = i.__decorate([(0, n.Injectable)(), i.__param(0, (0, a.Optional)()), i.__metadata("design:paramtypes", [Object])], u)),
        (t.ParseUUIDPipe = u);
    },
    877039: (e, t, r) => {
      "use strict";
      var s = r(515313).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ValidationPipe = void 0);
      const i = r(488802),
        n = r(573073),
        a = r(980911),
        o = r(405905),
        c = r(40469),
        l = r(18201),
        u = r(853483),
        d = r(310656),
        p = r(514046);
      let h = {},
        f = {},
        g = class {
          constructor(e) {
            e = e || {};
            const {
                transform: t,
                disableErrorMessages: r,
                errorHttpStatusCode: s,
                expectedType: n,
                transformOptions: a,
                validateCustomDecorators: o
              } = e,
              c = i.__rest(e, [
                "transform",
                "disableErrorMessages",
                "errorHttpStatusCode",
                "expectedType",
                "transformOptions",
                "validateCustomDecorators"
              ]);
            (this.validatorOptions = Object.assign({ forbidUnknownValues: !1 }, c)),
              (this.isTransformEnabled = !!t),
              (this.transformOptions = a),
              (this.isDetailedOutputDisabled = r),
              (this.validateCustomDecorators = o || !1),
              (this.errorHttpStatusCode = s || l.HttpStatus.BAD_REQUEST),
              (this.expectedType = n),
              (this.exceptionFactory = e.exceptionFactory || this.createExceptionFactory()),
              (h = this.loadValidator(e.validatorPackage)),
              (f = this.loadTransformer(e.transformerPackage));
          }
          loadValidator(e) {
            return null != e
              ? e
              : (0, d.loadPackage)("class-validator", "ValidationPipe", () =>
                  r(
                    Object(
                      (function () {
                        var e = new Error("Cannot find module 'class-validator'");
                        throw ((e.code = "MODULE_NOT_FOUND"), e);
                      })()
                    )
                  )
                );
          }
          loadTransformer(e) {
            return null != e
              ? e
              : (0, d.loadPackage)("class-transformer", "ValidationPipe", () =>
                  r(
                    Object(
                      (function () {
                        var e = new Error("Cannot find module 'class-transformer'");
                        throw ((e.code = "MODULE_NOT_FOUND"), e);
                      })()
                    )
                  )
                );
          }
          async transform(e, t) {
            this.expectedType && (t = Object.assign(Object.assign({}, t), { metatype: this.expectedType }));
            const r = t.metatype;
            if (!r || !this.toValidate(t)) return this.isTransformEnabled ? this.transformPrimitive(e, t) : e;
            const s = e,
              i = (e = this.toEmptyIfNil(e)) !== s,
              n = this.isPrimitive(e);
            this.stripProtoKeys(e);
            let a = f.plainToClass(r, e, this.transformOptions);
            const o = a,
              c = a.constructor !== r;
            c && !n ? (a.constructor = r) : c && (a = { constructor: r });
            const l = await this.validate(a, this.validatorOptions);
            if (l.length > 0) throw await this.exceptionFactory(l);
            return (
              n && (a = o),
              this.isTransformEnabled
                ? a
                : i
                ? s
                : Object.keys(this.validatorOptions).length > 0
                ? f.classToPlain(a, this.transformOptions)
                : e
            );
          }
          createExceptionFactory() {
            return (e = []) => {
              if (this.isDetailedOutputDisabled) return new u.HttpErrorByCode[this.errorHttpStatusCode]();
              const t = this.flattenValidationErrors(e);
              return new u.HttpErrorByCode[this.errorHttpStatusCode](t);
            };
          }
          toValidate(e) {
            const { metatype: t, type: r } = e;
            return (
              !("custom" === r && !this.validateCustomDecorators) &&
              ![String, Boolean, Number, Array, Object, s].some((e) => t === e) &&
              !(0, p.isNil)(t)
            );
          }
          transformPrimitive(e, t) {
            if (!t.data) return e;
            const { type: r, metatype: s } = t;
            return "param" !== r && "query" !== r ? e : s === Boolean ? !0 === e || "true" === e : s === Number ? +e : e;
          }
          toEmptyIfNil(e) {
            return (0, p.isNil)(e) ? {} : e;
          }
          stripProtoKeys(e) {
            if (null != e && "object" == typeof e && !a.types.isTypedArray(e))
              if (Array.isArray(e)) for (const t of e) this.stripProtoKeys(t);
              else {
                delete e.__proto__;
                for (const t in e) this.stripProtoKeys(e[t]);
              }
          }
          isPrimitive(e) {
            return ["number", "boolean", "string"].includes(typeof e);
          }
          validate(e, t) {
            return h.validate(e, t);
          }
          flattenValidationErrors(e) {
            return (0, n.iterate)(e)
              .map((e) => this.mapChildrenToValidationErrors(e))
              .flatten()
              .filter((e) => !!e.constraints)
              .map((e) => Object.values(e.constraints))
              .flatten()
              .toArray();
          }
          mapChildrenToValidationErrors(e, t) {
            if (!e.children || !e.children.length) return [e];
            const r = [];
            t = t ? `${t}.${e.property}` : e.property;
            for (const s of e.children)
              s.children && s.children.length && r.push(...this.mapChildrenToValidationErrors(s, t)),
                r.push(this.prependConstraintsWithParentProp(t, s));
            return r;
          }
          prependConstraintsWithParentProp(e, t) {
            const r = {};
            for (const s in t.constraints) r[s] = `${e}.${t.constraints[s]}`;
            return Object.assign(Object.assign({}, t), { constraints: r });
          }
        };
      (g = i.__decorate([(0, c.Injectable)(), i.__param(0, (0, o.Optional)()), i.__metadata("design:paramtypes", [Object])], g)),
        (t.ValidationPipe = g);
    },
    493759: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CLASS_SERIALIZER_OPTIONS = void 0),
        (t.CLASS_SERIALIZER_OPTIONS = "class_serializer:options");
    },
    597579: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ClassSerializerInterceptor = void 0);
      const s = r(488802),
        i = r(903343),
        n = r(40469),
        a = r(229067),
        o = r(310656),
        c = r(514046),
        l = r(493759);
      let u = {},
        d = class {
          constructor(e, t = {}) {
            var s;
            (this.reflector = e),
              (this.defaultOptions = t),
              (u =
                null !== (s = null == t ? void 0 : t.transformerPackage) && void 0 !== s
                  ? s
                  : (0, o.loadPackage)("class-transformer", "ClassSerializerInterceptor", () =>
                      r(
                        Object(
                          (function () {
                            var e = new Error("Cannot find module 'class-transformer'");
                            throw ((e.code = "MODULE_NOT_FOUND"), e);
                          })()
                        )
                      )
                    )),
              (null == t ? void 0 : t.transformerPackage) ||
                r(
                  Object(
                    (function () {
                      var e = new Error("Cannot find module 'class-transformer'");
                      throw ((e.code = "MODULE_NOT_FOUND"), e);
                    })()
                  )
                );
          }
          intercept(e, t) {
            const r = this.getContextOptions(e),
              s = Object.assign(Object.assign({}, this.defaultOptions), r);
            return t.handle().pipe((0, i.map)((e) => this.serialize(e, s)));
          }
          serialize(e, t) {
            return !(0, c.isObject)(e) || e instanceof a.StreamableFile
              ? e
              : Array.isArray(e)
              ? e.map((e) => this.transformToPlain(e, t))
              : this.transformToPlain(e, t);
          }
          transformToPlain(e, t) {
            if (!e) return e;
            if (!t.type) return u.classToPlain(e, t);
            if (e instanceof t.type) return u.classToPlain(e, t);
            const r = u.plainToClass(t.type, e);
            return u.classToPlain(r, t);
          }
          getContextOptions(e) {
            return this.reflector.getAllAndOverride(l.CLASS_SERIALIZER_OPTIONS, [e.getHandler(), e.getClass()]);
          }
        };
      (d = s.__decorate(
        [
          (0, n.Injectable)(),
          s.__param(0, (0, n.Inject)("Reflector")),
          s.__param(1, (0, n.Optional)()),
          s.__metadata("design:paramtypes", [Object, Object])
        ],
        d
      )),
        (t.ClassSerializerInterceptor = d);
    },
    73826: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    317914: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(724535), t);
    },
    724535: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.SerializeOptions = void 0);
      const s = r(405905),
        i = r(493759);
      t.SerializeOptions = (e) => (0, s.SetMetadata)(i.CLASS_SERIALIZER_OPTIONS, e);
    },
    927329: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(597579), t), s.__exportStar(r(317914), t), s.__exportStar(r(73826), t);
    },
    988814: (e, t, r) => {
      "use strict";
      var s,
        i = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ConsoleLogger = void 0);
      const n = r(488802),
        a = r(40469),
        o = r(181610),
        c = r(514046),
        l = r(16566),
        u = ["log", "error", "warn", "debug", "verbose"],
        d = new Intl.DateTimeFormat(void 0, {
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          day: "2-digit",
          month: "2-digit"
        });
      let p = (s = class {
        constructor(e, t = {}) {
          (this.context = e), (this.options = t), t.logLevels || (t.logLevels = u), e && (this.originalContext = e);
        }
        log(e, ...t) {
          if (!this.isLevelEnabled("log")) return;
          const { messages: r, context: s } = this.getContextAndMessagesToPrint([e, ...t]);
          this.printMessages(r, s, "log");
        }
        error(e, ...t) {
          if (!this.isLevelEnabled("error")) return;
          const { messages: r, context: s, stack: i } = this.getContextAndStackAndMessagesToPrint([e, ...t]);
          this.printMessages(r, s, "error", "stderr"), this.printStackTrace(i);
        }
        warn(e, ...t) {
          if (!this.isLevelEnabled("warn")) return;
          const { messages: r, context: s } = this.getContextAndMessagesToPrint([e, ...t]);
          this.printMessages(r, s, "warn");
        }
        debug(e, ...t) {
          if (!this.isLevelEnabled("debug")) return;
          const { messages: r, context: s } = this.getContextAndMessagesToPrint([e, ...t]);
          this.printMessages(r, s, "debug");
        }
        verbose(e, ...t) {
          if (!this.isLevelEnabled("verbose")) return;
          const { messages: r, context: s } = this.getContextAndMessagesToPrint([e, ...t]);
          this.printMessages(r, s, "verbose");
        }
        setLogLevels(e) {
          this.options || (this.options = {}), (this.options.logLevels = e);
        }
        setContext(e) {
          this.context = e;
        }
        resetContext() {
          this.context = this.originalContext;
        }
        isLevelEnabled(e) {
          var t;
          const r = null === (t = this.options) || void 0 === t ? void 0 : t.logLevels;
          return (0, l.isLogLevelEnabled)(e, r);
        }
        getTimestamp() {
          return d.format(Date.now());
        }
        printMessages(e, t = "", r = "log", s) {
          e.forEach((e) => {
            const n = this.formatPid(i.pid),
              a = this.formatContext(t),
              o = this.updateAndGetTimestampDiff(),
              c = r.toUpperCase().padStart(7, " "),
              l = this.formatMessage(r, e, n, c, a, o);
            i[null != s ? s : "stdout"].write(l);
          });
        }
        formatPid(e) {
          return `[Nest] ${e}  - `;
        }
        formatContext(e) {
          return e ? (0, o.yellow)(`[${e}] `) : "";
        }
        formatMessage(e, t, r, s, i, n) {
          const a = this.stringifyMessage(t, e);
          return (r = this.colorize(r, e)), (s = this.colorize(s, e)), `${r}${this.getTimestamp()} ${s} ${i}${a}${n}\n`;
        }
        stringifyMessage(e, t) {
          return (0, c.isPlainObject)(e) || Array.isArray(e)
            ? `${this.colorize("Object:", t)}\n${JSON.stringify(e, (e, t) => ("bigint" == typeof t ? t.toString() : t), 2)}\n`
            : this.colorize(e, t);
        }
        colorize(e, t) {
          return this.getColorByLogLevel(t)(e);
        }
        printStackTrace(e) {
          e && i.stderr.write(`${e}\n`);
        }
        updateAndGetTimestampDiff() {
          var e;
          const t =
            s.lastTimestampAt && (null === (e = this.options) || void 0 === e ? void 0 : e.timestamp)
              ? this.formatTimestampDiff(Date.now() - s.lastTimestampAt)
              : "";
          return (s.lastTimestampAt = Date.now()), t;
        }
        formatTimestampDiff(e) {
          return (0, o.yellow)(` +${e}ms`);
        }
        getContextAndMessagesToPrint(e) {
          if ((null == e ? void 0 : e.length) <= 1) return { messages: e, context: this.context };
          const t = e[e.length - 1];
          return (0, c.isString)(t) ? { context: t, messages: e.slice(0, e.length - 1) } : { messages: e, context: this.context };
        }
        getContextAndStackAndMessagesToPrint(e) {
          const { messages: t, context: r } = this.getContextAndMessagesToPrint(e);
          if ((null == t ? void 0 : t.length) <= 1) return { messages: t, context: r };
          const s = t[t.length - 1];
          return (0, c.isString)(s) ? { stack: s, messages: t.slice(0, t.length - 1), context: r } : { messages: t, context: r };
        }
        getColorByLogLevel(e) {
          switch (e) {
            case "debug":
              return o.clc.magentaBright;
            case "warn":
              return o.clc.yellow;
            case "error":
              return o.clc.red;
            case "verbose":
              return o.clc.cyanBright;
            default:
              return o.clc.green;
          }
        }
      });
      (p = s =
        n.__decorate(
          [
            (0, a.Injectable)(),
            n.__param(0, (0, a.Optional)()),
            n.__param(1, (0, a.Optional)()),
            n.__metadata("design:paramtypes", [String, Object])
          ],
          p
        )),
        (t.ConsoleLogger = p);
    },
    369264: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(988814), t), s.__exportStar(r(716616), t);
    },
    716616: (e, t, r) => {
      "use strict";
      var s;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Logger = void 0);
      const i = r(488802),
        n = r(40469),
        a = r(514046),
        o = r(988814),
        c = r(16566),
        l = new o.ConsoleLogger(),
        u = new Intl.DateTimeFormat(void 0, {
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          day: "2-digit",
          month: "2-digit"
        });
      let d = (s = class {
        constructor(e, t = {}) {
          (this.context = e), (this.options = t);
        }
        get localInstance() {
          return s.staticInstanceRef === l ||
            (s.staticInstanceRef instanceof s && Object.getPrototypeOf(s.staticInstanceRef).constructor === s)
            ? this.registerLocalInstanceRef()
            : s.staticInstanceRef;
        }
        error(e, ...t) {
          var r;
          (t = this.context ? (t.length ? t : [void 0]).concat(this.context) : t),
            null === (r = this.localInstance) || void 0 === r || r.error(e, ...t);
        }
        log(e, ...t) {
          var r;
          (t = this.context ? t.concat(this.context) : t), null === (r = this.localInstance) || void 0 === r || r.log(e, ...t);
        }
        warn(e, ...t) {
          var r;
          (t = this.context ? t.concat(this.context) : t), null === (r = this.localInstance) || void 0 === r || r.warn(e, ...t);
        }
        debug(e, ...t) {
          var r, s;
          (t = this.context ? t.concat(this.context) : t),
            null === (s = null === (r = this.localInstance) || void 0 === r ? void 0 : r.debug) || void 0 === s || s.call(r, e, ...t);
        }
        verbose(e, ...t) {
          var r, s;
          (t = this.context ? t.concat(this.context) : t),
            null === (s = null === (r = this.localInstance) || void 0 === r ? void 0 : r.verbose) || void 0 === s || s.call(r, e, ...t);
        }
        static error(e, ...t) {
          var r;
          null === (r = this.staticInstanceRef) || void 0 === r || r.error(e, ...t);
        }
        static log(e, ...t) {
          var r;
          null === (r = this.staticInstanceRef) || void 0 === r || r.log(e, ...t);
        }
        static warn(e, ...t) {
          var r;
          null === (r = this.staticInstanceRef) || void 0 === r || r.warn(e, ...t);
        }
        static debug(e, ...t) {
          var r, s;
          null === (s = null === (r = this.staticInstanceRef) || void 0 === r ? void 0 : r.debug) || void 0 === s || s.call(r, e, ...t);
        }
        static verbose(e, ...t) {
          var r, s;
          null === (s = null === (r = this.staticInstanceRef) || void 0 === r ? void 0 : r.verbose) || void 0 === s || s.call(r, e, ...t);
        }
        static flush() {
          (this.isBufferAttached = !1), this.logBuffer.forEach((e) => e.methodRef(...e.arguments)), (this.logBuffer = []);
        }
        static attachBuffer() {
          this.isBufferAttached = !0;
        }
        static detachBuffer() {
          this.isBufferAttached = !1;
        }
        static getTimestamp() {
          return u.format(Date.now());
        }
        static overrideLogger(e) {
          var t;
          if (Array.isArray(e))
            return (s.logLevels = e), null === (t = this.staticInstanceRef) || void 0 === t ? void 0 : t.setLogLevels(e);
          if ((0, a.isObject)(e)) {
            if (e instanceof s && e.constructor !== s) {
              const e = 'Using the "extends Logger" instruction is not allowed in Nest v9. Please, use "extends ConsoleLogger" instead.';
              throw (this.staticInstanceRef.error(e), new Error(e));
            }
            this.staticInstanceRef = e;
          } else this.staticInstanceRef = void 0;
        }
        static isLevelEnabled(e) {
          const t = s.logLevels;
          return (0, c.isLogLevelEnabled)(e, t);
        }
        registerLocalInstanceRef() {
          var e;
          return (
            this.localInstanceRef ||
              (this.localInstanceRef = new o.ConsoleLogger(this.context, {
                timestamp: null === (e = this.options) || void 0 === e ? void 0 : e.timestamp,
                logLevels: s.logLevels
              })),
            this.localInstanceRef
          );
        }
      });
      (d.logBuffer = new Array()),
        (d.staticInstanceRef = l),
        (d.WrapBuffer = (e, t, r) => {
          const i = r.value;
          r.value = function (...e) {
            if (!s.isBufferAttached) return i.call(this, ...e);
            s.logBuffer.push({ methodRef: i.bind(this), arguments: e });
          };
        }),
        i.__decorate(
          [
            s.WrapBuffer,
            i.__metadata("design:type", Function),
            i.__metadata("design:paramtypes", [Object, Object]),
            i.__metadata("design:returntype", void 0)
          ],
          d.prototype,
          "error",
          null
        ),
        i.__decorate(
          [
            s.WrapBuffer,
            i.__metadata("design:type", Function),
            i.__metadata("design:paramtypes", [Object, Object]),
            i.__metadata("design:returntype", void 0)
          ],
          d.prototype,
          "log",
          null
        ),
        i.__decorate(
          [
            s.WrapBuffer,
            i.__metadata("design:type", Function),
            i.__metadata("design:paramtypes", [Object, Object]),
            i.__metadata("design:returntype", void 0)
          ],
          d.prototype,
          "warn",
          null
        ),
        i.__decorate(
          [
            s.WrapBuffer,
            i.__metadata("design:type", Function),
            i.__metadata("design:paramtypes", [Object, Object]),
            i.__metadata("design:returntype", void 0)
          ],
          d.prototype,
          "debug",
          null
        ),
        i.__decorate(
          [
            s.WrapBuffer,
            i.__metadata("design:type", Function),
            i.__metadata("design:paramtypes", [Object, Object]),
            i.__metadata("design:returntype", void 0)
          ],
          d.prototype,
          "verbose",
          null
        ),
        i.__decorate(
          [
            s.WrapBuffer,
            i.__metadata("design:type", Function),
            i.__metadata("design:paramtypes", [Object, Object]),
            i.__metadata("design:returntype", void 0)
          ],
          d,
          "error",
          null
        ),
        i.__decorate(
          [
            s.WrapBuffer,
            i.__metadata("design:type", Function),
            i.__metadata("design:paramtypes", [Object, Object]),
            i.__metadata("design:returntype", void 0)
          ],
          d,
          "log",
          null
        ),
        i.__decorate(
          [
            s.WrapBuffer,
            i.__metadata("design:type", Function),
            i.__metadata("design:paramtypes", [Object, Object]),
            i.__metadata("design:returntype", void 0)
          ],
          d,
          "warn",
          null
        ),
        i.__decorate(
          [
            s.WrapBuffer,
            i.__metadata("design:type", Function),
            i.__metadata("design:paramtypes", [Object, Object]),
            i.__metadata("design:returntype", void 0)
          ],
          d,
          "debug",
          null
        ),
        i.__decorate(
          [
            s.WrapBuffer,
            i.__metadata("design:type", Function),
            i.__metadata("design:paramtypes", [Object, Object]),
            i.__metadata("design:returntype", void 0)
          ],
          d,
          "verbose",
          null
        ),
        (d = s =
          i.__decorate(
            [
              (0, n.Injectable)(),
              i.__param(0, (0, n.Optional)()),
              i.__param(1, (0, n.Optional)()),
              i.__metadata("design:paramtypes", [String, Object])
            ],
            d
          )),
        (t.Logger = d);
    },
    16566: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(949861), t);
    },
    949861: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isLogLevelEnabled = void 0);
      const r = { debug: 0, verbose: 1, log: 2, warn: 3, error: 4 };
      t.isLogLevelEnabled = function (e, t) {
        var s;
        if (!t || (Array.isArray(t) && 0 === (null == t ? void 0 : t.length))) return !1;
        if (t.includes(e)) return !0;
        const i = null === (s = t.map((e) => r[e]).sort((e, t) => t - e)) || void 0 === s ? void 0 : s[0];
        return r[e] >= i;
      };
    },
    733419: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.assignCustomParameterMetadata = void 0);
      const s = r(545911);
      t.assignCustomParameterMetadata = function (e, t, r, i, n, ...a) {
        return Object.assign(Object.assign({}, e), {
          [`${t}${s.CUSTOM_ROUTE_ARGS_METADATA}:${r}`]: { index: r, factory: i, data: n, pipes: a }
        });
      };
    },
    181610: (e, t, r) => {
      "use strict";
      var s = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.yellow = t.clc = void 0);
      const i = (e) => (t) => (s.env.NO_COLOR ? t : e(t));
      (t.clc = {
        bold: i((e) => `[1m${e}[0m`),
        green: i((e) => `[32m${e}[39m`),
        yellow: i((e) => `[33m${e}[39m`),
        red: i((e) => `[31m${e}[39m`),
        magentaBright: i((e) => `[95m${e}[39m`),
        cyanBright: i((e) => `[96m${e}[39m`)
      }),
        (t.yellow = i((e) => `[38;5;3m${e}[39m`));
    },
    40535: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.extendArrayMetadata = void 0),
        (t.extendArrayMetadata = function (e, t, r) {
          const s = [...(Reflect.getMetadata(e, r) || []), ...t];
          Reflect.defineMetadata(e, s, r);
        });
    },
    836077: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.forwardRef = void 0), (t.forwardRef = (e) => ({ forwardRef: e }));
    },
    853483: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.HttpErrorByCode = void 0);
      const s = r(649464),
        i = r(987801);
      t.HttpErrorByCode = {
        [s.HttpStatus.BAD_GATEWAY]: i.BadGatewayException,
        [s.HttpStatus.BAD_REQUEST]: i.BadRequestException,
        [s.HttpStatus.CONFLICT]: i.ConflictException,
        [s.HttpStatus.FORBIDDEN]: i.ForbiddenException,
        [s.HttpStatus.GATEWAY_TIMEOUT]: i.GatewayTimeoutException,
        [s.HttpStatus.GONE]: i.GoneException,
        [s.HttpStatus.I_AM_A_TEAPOT]: i.ImATeapotException,
        [s.HttpStatus.INTERNAL_SERVER_ERROR]: i.InternalServerErrorException,
        [s.HttpStatus.METHOD_NOT_ALLOWED]: i.MethodNotAllowedException,
        [s.HttpStatus.NOT_ACCEPTABLE]: i.NotAcceptableException,
        [s.HttpStatus.NOT_FOUND]: i.NotFoundException,
        [s.HttpStatus.NOT_IMPLEMENTED]: i.NotImplementedException,
        [s.HttpStatus.PAYLOAD_TOO_LARGE]: i.PayloadTooLargeException,
        [s.HttpStatus.PRECONDITION_FAILED]: i.PreconditionFailedException,
        [s.HttpStatus.REQUEST_TIMEOUT]: i.RequestTimeoutException,
        [s.HttpStatus.SERVICE_UNAVAILABLE]: i.ServiceUnavailableException,
        [s.HttpStatus.UNAUTHORIZED]: i.UnauthorizedException,
        [s.HttpStatus.UNPROCESSABLE_ENTITY]: i.UnprocessableEntityException,
        [s.HttpStatus.UNSUPPORTED_MEDIA_TYPE]: i.UnsupportedMediaTypeException
      };
    },
    498116: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(836077), t);
    },
    310656: (e, t, r) => {
      "use strict";
      var s = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.loadPackage = void 0);
      const i = r(716616),
        n = new i.Logger("PackageLoader");
      t.loadPackage = function (e, t, a) {
        try {
          return a ? a() : r(129960)(e);
        } catch (r) {
          n.error(
            ((e, t) =>
              `The "${e}" package is missing. Please, make sure to install this library ($ npm install ${e}) to take advantage of ${t}.`)(
              e,
              t
            )
          ),
            i.Logger.flush(),
            s.exit(1);
        }
      };
    },
    695562: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.randomStringGenerator = void 0);
      const s = r(775438);
      t.randomStringGenerator = () => (0, s.uid)(21);
    },
    514046: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSymbol =
          t.isEmpty =
          t.isNil =
          t.isConstructor =
          t.isNumber =
          t.isString =
          t.isFunction =
          t.stripEndSlash =
          t.normalizePath =
          t.addLeadingSlash =
          t.isPlainObject =
          t.isObject =
          t.isUndefined =
            void 0),
        (t.isUndefined = (e) => void 0 === e),
        (t.isObject = (e) => !(0, t.isNil)(e) && "object" == typeof e),
        (t.isPlainObject = (e) => {
          if (!(0, t.isObject)(e)) return !1;
          const r = Object.getPrototypeOf(e);
          if (null === r) return !0;
          const s = Object.prototype.hasOwnProperty.call(r, "constructor") && r.constructor;
          return (
            "function" == typeof s && s instanceof s && Function.prototype.toString.call(s) === Function.prototype.toString.call(Object)
          );
        }),
        (t.addLeadingSlash = (e) => (e && "string" == typeof e ? ("/" !== e.charAt(0) ? "/" + e : e) : "")),
        (t.normalizePath = (e) =>
          e ? (e.startsWith("/") ? ("/" + e.replace(/\/+$/, "")).replace(/\/+/g, "/") : "/" + e.replace(/\/+$/, "")) : "/"),
        (t.stripEndSlash = (e) => ("/" === e[e.length - 1] ? e.slice(0, e.length - 1) : e)),
        (t.isFunction = (e) => "function" == typeof e),
        (t.isString = (e) => "string" == typeof e),
        (t.isNumber = (e) => "number" == typeof e),
        (t.isConstructor = (e) => "constructor" === e),
        (t.isNil = (e) => (0, t.isUndefined)(e) || null === e),
        (t.isEmpty = (e) => !(e && e.length > 0)),
        (t.isSymbol = (e) => "symbol" == typeof e);
    },
    628111: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.validateEach = t.InvalidDecoratorItemException = void 0);
      class r extends Error {
        constructor(e, t, r) {
          const s = `Invalid ${t} passed to ${e}() decorator (${r}).`;
          super(s), (this.msg = s);
        }
        what() {
          return this.msg;
        }
      }
      (t.InvalidDecoratorItemException = r),
        (t.validateEach = function (e, t, s, i, n) {
          if (!e || !e.name) return !0;
          if (t.some((e) => !s(e))) throw new r(i, n, e.name);
          return !0;
        });
    },
    805470: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.validateModuleKeys = t.INVALID_MODULE_CONFIG_MESSAGE = void 0);
      const s = r(545911);
      t.INVALID_MODULE_CONFIG_MESSAGE = (e, t) => `Invalid property '${t}' passed into the @Module() decorator.`;
      const i = [s.MODULE_METADATA.IMPORTS, s.MODULE_METADATA.EXPORTS, s.MODULE_METADATA.CONTROLLERS, s.MODULE_METADATA.PROVIDERS];
      t.validateModuleKeys = function (e) {
        e.forEach((e) => {
          if (!i.includes(e)) throw new Error(t.INVALID_MODULE_CONFIG_MESSAGE`${e}`);
        });
      };
    },
    129960: (e) => {
      function t(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      (t.keys = () => []), (t.resolve = t), (t.id = 129960), (e.exports = t);
    },
    287289: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AbstractHttpAdapter = void 0),
        (t.AbstractHttpAdapter = class {
          constructor(e) {
            this.instance = e;
          }
          async init() {}
          use(...e) {
            return this.instance.use(...e);
          }
          get(...e) {
            return this.instance.get(...e);
          }
          post(...e) {
            return this.instance.post(...e);
          }
          head(...e) {
            return this.instance.head(...e);
          }
          delete(...e) {
            return this.instance.delete(...e);
          }
          put(...e) {
            return this.instance.put(...e);
          }
          patch(...e) {
            return this.instance.patch(...e);
          }
          all(...e) {
            return this.instance.all(...e);
          }
          options(...e) {
            return this.instance.options(...e);
          }
          listen(e, t, r) {
            return this.instance.listen(e, t, r);
          }
          getHttpServer() {
            return this.httpServer;
          }
          setHttpServer(e) {
            this.httpServer = e;
          }
          setInstance(e) {
            this.instance = e;
          }
          getInstance() {
            return this.instance;
          }
        });
    },
    591165: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(287289), t);
    },
    136633: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ApplicationConfig = void 0),
        (t.ApplicationConfig = class {
          constructor(e = null) {
            (this.ioAdapter = e),
              (this.globalPrefix = ""),
              (this.globalPrefixOptions = {}),
              (this.globalPipes = []),
              (this.globalFilters = []),
              (this.globalInterceptors = []),
              (this.globalGuards = []),
              (this.globalRequestPipes = []),
              (this.globalRequestFilters = []),
              (this.globalRequestInterceptors = []),
              (this.globalRequestGuards = []);
          }
          setGlobalPrefix(e) {
            this.globalPrefix = e;
          }
          getGlobalPrefix() {
            return this.globalPrefix;
          }
          setGlobalPrefixOptions(e) {
            this.globalPrefixOptions = e;
          }
          getGlobalPrefixOptions() {
            return this.globalPrefixOptions;
          }
          setIoAdapter(e) {
            this.ioAdapter = e;
          }
          getIoAdapter() {
            return this.ioAdapter;
          }
          addGlobalPipe(e) {
            this.globalPipes.push(e);
          }
          useGlobalPipes(...e) {
            this.globalPipes = this.globalPipes.concat(e);
          }
          getGlobalFilters() {
            return this.globalFilters;
          }
          addGlobalFilter(e) {
            this.globalFilters.push(e);
          }
          useGlobalFilters(...e) {
            this.globalFilters = this.globalFilters.concat(e);
          }
          getGlobalPipes() {
            return this.globalPipes;
          }
          getGlobalInterceptors() {
            return this.globalInterceptors;
          }
          addGlobalInterceptor(e) {
            this.globalInterceptors.push(e);
          }
          useGlobalInterceptors(...e) {
            this.globalInterceptors = this.globalInterceptors.concat(e);
          }
          getGlobalGuards() {
            return this.globalGuards;
          }
          addGlobalGuard(e) {
            this.globalGuards.push(e);
          }
          useGlobalGuards(...e) {
            this.globalGuards = this.globalGuards.concat(e);
          }
          addGlobalRequestInterceptor(e) {
            this.globalRequestInterceptors.push(e);
          }
          getGlobalRequestInterceptors() {
            return this.globalRequestInterceptors;
          }
          addGlobalRequestPipe(e) {
            this.globalRequestPipes.push(e);
          }
          getGlobalRequestPipes() {
            return this.globalRequestPipes;
          }
          addGlobalRequestFilter(e) {
            this.globalRequestFilters.push(e);
          }
          getGlobalRequestFilters() {
            return this.globalRequestFilters;
          }
          addGlobalRequestGuard(e) {
            this.globalRequestGuards.push(e);
          }
          getGlobalRequestGuards() {
            return this.globalRequestGuards;
          }
          enableVersioning(e) {
            Array.isArray(e.defaultVersion) && (e.defaultVersion = Array.from(new Set(e.defaultVersion))), (this.versioningOptions = e);
          }
          getVersioning() {
            return this.versioningOptions;
          }
        });
    },
    984313: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ENHANCER_TOKEN_TO_SUBTYPE_MAP = t.APP_FILTER = t.APP_GUARD = t.APP_PIPE = t.APP_INTERCEPTOR = t.MESSAGES = void 0),
        (t.MESSAGES = {
          APPLICATION_START: "Starting Nest application...",
          APPLICATION_READY: "Nest application successfully started",
          MICROSERVICE_READY: "Nest microservice successfully started",
          UNKNOWN_EXCEPTION_MESSAGE: "Internal server error",
          ERROR_DURING_SHUTDOWN: "Error happened during shutdown",
          CALL_LISTEN_FIRST: "app.listen() needs to be called before calling app.getUrl()"
        }),
        (t.APP_INTERCEPTOR = "APP_INTERCEPTOR"),
        (t.APP_PIPE = "APP_PIPE"),
        (t.APP_GUARD = "APP_GUARD"),
        (t.APP_FILTER = "APP_FILTER"),
        (t.ENHANCER_TOKEN_TO_SUBTYPE_MAP = {
          [t.APP_GUARD]: "guard",
          [t.APP_INTERCEPTOR]: "interceptor",
          [t.APP_PIPE]: "pipe",
          [t.APP_FILTER]: "filter"
        });
    },
    87451: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DiscoveryModule = void 0);
      const s = r(488802),
        i = r(17988),
        n = r(122443),
        a = r(471868);
      let o = class {};
      (o = s.__decorate(
        [(0, i.Module)({ providers: [n.MetadataScanner, a.DiscoveryService], exports: [n.MetadataScanner, a.DiscoveryService] })],
        o
      )),
        (t.DiscoveryModule = o);
    },
    471868: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DiscoveryService = void 0);
      const s = r(488802),
        i = r(17988),
        n = r(973640);
      let a = class {
        constructor(e) {
          this.modulesContainer = e;
        }
        getProviders(e = {}, t = this.getModules(e)) {
          const r = t.map((e) => [...e.providers.values()]);
          return (0, i.flatten)(r);
        }
        getControllers(e = {}, t = this.getModules(e)) {
          const r = t.map((e) => [...e.controllers.values()]);
          return (0, i.flatten)(r);
        }
        getModules(e = {}) {
          return e.include ? this.includeWhitelisted(e.include) : [...this.modulesContainer.values()];
        }
        includeWhitelisted(e) {
          return [...this.modulesContainer.values()].filter(({ metatype: t }) => e.some((e) => e === t));
        }
      };
      (a = s.__decorate([(0, i.Injectable)(), s.__metadata("design:paramtypes", [n.ModulesContainer])], a)), (t.DiscoveryService = a);
    },
    682077: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(87451), t), s.__exportStar(r(471868), t);
    },
    294569: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExceptionHandler = void 0);
      const s = r(300780),
        i = r(716616);
      class n {
        handle(e) {
          e instanceof s.RuntimeException ? n.logger.error(e.what(), e.stack) : n.logger.error(e.message, e.stack);
        }
      }
      (t.ExceptionHandler = n), (n.logger = new i.Logger(n.name));
    },
    456582: (e, t, r) => {
      "use strict";
      var s = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExceptionsZone = void 0);
      const i = r(17988),
        n = r(294569),
        a = () => s.exit(1);
      class o {
        static run(e, t = a, r) {
          try {
            e();
          } catch (e) {
            this.exceptionHandler.handle(e), r && i.Logger.flush(), t(e);
          }
        }
        static async asyncRun(e, t = a, r) {
          try {
            await e();
          } catch (e) {
            this.exceptionHandler.handle(e), r && i.Logger.flush(), t(e);
          }
        }
      }
      (t.ExceptionsZone = o), (o.exceptionHandler = new n.ExceptionHandler());
    },
    215627: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CircularDependencyException = void 0);
      const s = r(300780);
      class i extends s.RuntimeException {
        constructor(e) {
          super(
            `A circular dependency has been detected${
              e ? ` inside ${e}` : ""
            }. Please, make sure that each side of a bidirectional relationships are decorated with "forwardRef()".`
          );
        }
      }
      t.CircularDependencyException = i;
    },
    227641: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(215627), t),
        s.__exportStar(r(300780), t),
        s.__exportStar(r(939391), t),
        s.__exportStar(r(516203), t),
        s.__exportStar(r(532793), t),
        s.__exportStar(r(324491), t),
        s.__exportStar(r(827938), t),
        s.__exportStar(r(233780), t);
    },
    71808: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InvalidClassModuleException = void 0);
      const s = r(663522),
        i = r(300780);
      class n extends i.RuntimeException {
        constructor(e, t) {
          super((0, s.USING_INVALID_CLASS_AS_A_MODULE_MESSAGE)(e, t));
        }
      }
      t.InvalidClassModuleException = n;
    },
    516203: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InvalidClassScopeException = void 0);
      const s = r(514046),
        i = r(663522),
        n = r(300780);
      class a extends n.RuntimeException {
        constructor(e) {
          let t = (0, s.isFunction)(e) ? e.name : e;
          (t = t && t.toString()), super(i.INVALID_CLASS_SCOPE_MESSAGE`${t}`);
        }
      }
      t.InvalidClassScopeException = a;
    },
    532793: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InvalidClassException = void 0);
      const s = r(663522),
        i = r(300780);
      class n extends i.RuntimeException {
        constructor(e) {
          super(s.INVALID_CLASS_MESSAGE`${e}`);
        }
      }
      t.InvalidClassException = n;
    },
    237472: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InvalidExceptionFilterException = void 0);
      const s = r(300780),
        i = r(663522);
      class n extends s.RuntimeException {
        constructor() {
          super(i.INVALID_EXCEPTION_FILTER);
        }
      }
      t.InvalidExceptionFilterException = n;
    },
    879178: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InvalidMiddlewareException = void 0);
      const s = r(663522),
        i = r(300780);
      class n extends i.RuntimeException {
        constructor(e) {
          super(s.INVALID_MIDDLEWARE_MESSAGE`${e}`);
        }
      }
      t.InvalidMiddlewareException = n;
    },
    457023: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InvalidModuleException = void 0);
      const s = r(663522),
        i = r(300780);
      class n extends i.RuntimeException {
        constructor(e, t, r) {
          super((0, s.INVALID_MODULE_MESSAGE)(e, t, r));
        }
      }
      t.InvalidModuleException = n;
    },
    300780: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RuntimeException = void 0);
      class r extends Error {
        constructor(e = "") {
          super(e);
        }
        what() {
          return this.message;
        }
      }
      t.RuntimeException = r;
    },
    889791: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UndefinedDependencyException = void 0);
      const s = r(663522),
        i = r(300780);
      class n extends i.RuntimeException {
        constructor(e, t, r) {
          super((0, s.UNKNOWN_DEPENDENCIES_MESSAGE)(e, t, r));
        }
      }
      t.UndefinedDependencyException = n;
    },
    233780: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UndefinedForwardRefException = void 0);
      const s = r(663522),
        i = r(300780);
      class n extends i.RuntimeException {
        constructor(e) {
          super((0, s.UNDEFINED_FORWARDREF_MESSAGE)(e));
        }
      }
      t.UndefinedForwardRefException = n;
    },
    390388: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UndefinedModuleException = void 0);
      const s = r(300780),
        i = r(663522);
      class n extends s.RuntimeException {
        constructor(e, t, r) {
          super((0, i.UNDEFINED_MODULE_MESSAGE)(e, t, r));
        }
      }
      t.UndefinedModuleException = n;
    },
    939108: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnknownDependenciesException = void 0);
      const s = r(663522),
        i = r(300780);
      class n extends i.RuntimeException {
        constructor(e, t, r) {
          super((0, s.UNKNOWN_DEPENDENCIES_MESSAGE)(e, t, r));
        }
      }
      t.UnknownDependenciesException = n;
    },
    939391: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnknownElementException = void 0);
      const s = r(300780);
      class i extends s.RuntimeException {
        constructor(e) {
          super(`Nest could not find ${(e = e && e.toString()) || "given"} element (this provider does not exist in the current context)`);
        }
      }
      t.UnknownElementException = i;
    },
    324491: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnknownExportException = void 0);
      const s = r(663522),
        i = r(300780);
      class n extends i.RuntimeException {
        constructor(e, t) {
          super((0, s.UNKNOWN_EXPORT_MESSAGE)(e, t));
        }
      }
      t.UnknownExportException = n;
    },
    827938: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnknownModuleException = void 0);
      const s = r(300780);
      class i extends s.RuntimeException {
        constructor() {
          super("Nest could not select the given module (it does not exist in current context)");
        }
      }
      t.UnknownModuleException = i;
    },
    393269: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnknownRequestMappingException = void 0);
      const s = r(300780),
        i = r(663522);
      class n extends s.RuntimeException {
        constructor(e) {
          super((0, i.UNKNOWN_REQUEST_MAPPING)(e));
        }
      }
      t.UnknownRequestMappingException = n;
    },
    663522: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MICROSERVICES_PACKAGE_NOT_FOUND_EXCEPTION =
          t.INVALID_EXCEPTION_FILTER =
          t.UNHANDLED_RUNTIME_EXCEPTION =
          t.INVALID_MIDDLEWARE_CONFIGURATION =
          t.UNKNOWN_REQUEST_MAPPING =
          t.INVALID_CLASS_SCOPE_MESSAGE =
          t.INVALID_CLASS_MESSAGE =
          t.UNKNOWN_EXPORT_MESSAGE =
          t.UNDEFINED_MODULE_MESSAGE =
          t.USING_INVALID_CLASS_AS_A_MODULE_MESSAGE =
          t.INVALID_MODULE_MESSAGE =
          t.UNDEFINED_FORWARDREF_MESSAGE =
          t.INVALID_MIDDLEWARE_MESSAGE =
          t.UNKNOWN_DEPENDENCIES_MESSAGE =
            void 0);
      const s = r(514046),
        i = (e) => {
          var t, r;
          return (null == e ? void 0 : e.forwardRef)
            ? null === (t = e.forwardRef()) || void 0 === t
              ? void 0
              : t.name
            : (null == e ? void 0 : e.module)
            ? null === (r = e.module) || void 0 === r
              ? void 0
              : r.name
            : null == e
            ? void 0
            : e.name;
        },
        n = (e) => i(e) || ((0, s.isSymbol)(e) && e.toString()) || e || "+",
        a = (e) => (e || []).map(i).join(" -> ");
      (t.UNKNOWN_DEPENDENCIES_MESSAGE = (e, t, r) => {
        const { index: a, name: o = "dependency", dependencies: c, key: l } = t,
          u = ((e) => (e && i(e.metatype)) || "current")(r),
          d = n(o),
          p =
            "current" !== u
              ? `\n\nPotential solutions:\n- Is ${u} a valid NestJS module?\n- If ${d} is a provider, is it part of the current ${u}?\n- If ${d} is exported from a separate @Module, is that module imported within ${u}?\n  @Module({\n    imports: [ /* the Module containing ${d} */ ]\n  })\n`
              : `\n\nPotential solutions:\n- If ${d} is a provider, is it part of the current Module?\n- If ${d} is exported from a separate @Module, is that module imported within Module?\n  @Module({\n    imports: [ /* the Module containing ${d} */ ]\n  })\n`;
        let h = `Nest can't resolve dependencies of the ${e.toString()}`;
        if ((0, s.isNil)(a))
          return (h += `. Please make sure that the "${l.toString()}" property is available in the current context.${p}`), h;
        const f = (c || []).map(n);
        return (
          (f[a] = "?"),
          (h += " ("),
          (h += f.join(", ")),
          (h += `). Please make sure that the argument ${d} at index [${a}] is available in the ${u} context.`),
          (h += p),
          h
        );
      }),
        (t.INVALID_MIDDLEWARE_MESSAGE = (e, t) => `The middleware doesn't provide the 'use' method (${t})`),
        (t.UNDEFINED_FORWARDREF_MESSAGE = (e) =>
          `Nest cannot create the module instance. Often, this is because of a circular dependency between modules. Use forwardRef() to avoid it.\n\n(Read more: https://docs.nestjs.com/fundamentals/circular-dependency)\nScope [${a(
            e
          )}]\n`),
        (t.INVALID_MODULE_MESSAGE = (e, t, r) => {
          const s = (null == e ? void 0 : e.name) || "module";
          return `Nest cannot create the ${s} instance.\nReceived an unexpected value at index [${t}] of the ${s} "imports" array.\n\nScope [${a(
            r
          )}]`;
        }),
        (t.USING_INVALID_CLASS_AS_A_MODULE_MESSAGE = (e, t) =>
          `Classes annotated with @Injectable(), @Catch(), and @Controller() decorators must not appear in the "imports" array of a module.\nPlease remove ${
            `"${i(e)}"` || "that class"
          } (including forwarded occurrences, if any) from all of the "imports" arrays.\n\nScope [${a(t)}]\n`),
        (t.UNDEFINED_MODULE_MESSAGE = (e, t, r) => {
          const s = (null == e ? void 0 : e.name) || "module";
          return `Nest cannot create the ${s} instance.\nThe module at index [${t}] of the ${s} "imports" array is undefined.\n\nPotential causes:\n- A circular dependency between modules. Use forwardRef() to avoid it. Read more: https://docs.nestjs.com/fundamentals/circular-dependency\n- The module at index [${t}] is of type "undefined". Check your import statements and the type of the module.\n\nScope [${a(
            r
          )}]`;
        }),
        (t.UNKNOWN_EXPORT_MESSAGE = (e = "item", t) =>
          `Nest cannot export a provider/module that is not a part of the currently processed module (${t}). Please verify whether the exported ${(e =
            (0, s.isSymbol)(e)
              ? e.toString()
              : e)} is available in this particular context.\n\nPossible Solutions:\n- Is ${e} part of the relevant providers/imports within ${t}?\n`),
        (t.INVALID_CLASS_MESSAGE = (e, t) => `ModuleRef cannot instantiate class (${t} is not constructable).`),
        (t.INVALID_CLASS_SCOPE_MESSAGE = (e, t) =>
          `${
            t || "This class"
          } is marked as a scoped provider. Request and transient-scoped providers can't be used in combination with "get()" method. Please, use "resolve()" instead.`),
        (t.UNKNOWN_REQUEST_MAPPING = (e) => {
          const t = e.name;
          return t
            ? `An invalid controller has been detected. "${t}" does not have the @Controller() decorator but it is being listed in the "controllers" array of some module.`
            : "An invalid controller has been detected. Perhaps, one of your controllers is missing the @Controller() decorator.";
        }),
        (t.INVALID_MIDDLEWARE_CONFIGURATION =
          "An invalid middleware configuration has been passed inside the module 'configure()' method."),
        (t.UNHANDLED_RUNTIME_EXCEPTION = "Unhandled Runtime Exception."),
        (t.INVALID_EXCEPTION_FILTER = "Invalid exception filters (@UseFilters())."),
        (t.MICROSERVICES_PACKAGE_NOT_FOUND_EXCEPTION =
          "Unable to load @nestjs/microservices package. (Please make sure that it's already installed.)");
    },
    517849: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.BaseExceptionFilterContext = void 0);
      const s = r(545911),
        i = r(514046),
        n = r(573073),
        a = r(28313),
        o = r(220692);
      class c extends a.ContextCreator {
        constructor(e) {
          super(), (this.container = e);
        }
        createConcreteContext(e, t = o.STATIC_CONTEXT, r) {
          return (0, i.isEmpty)(e)
            ? []
            : (0, n.iterate)(e)
                .filter((e) => e && ((0, i.isFunction)(e.catch) || e.name))
                .map((e) => this.getFilterInstance(e, t, r))
                .filter((e) => !!e)
                .map((e) => ({ func: e.catch.bind(e), exceptionMetatypes: this.reflectCatchExceptions(e) }))
                .toArray();
        }
        getFilterInstance(e, t = o.STATIC_CONTEXT, r) {
          if (e.catch) return e;
          const s = this.getInstanceByMetatype(e);
          if (!s) return null;
          const i = s.getInstanceByContextId(t, r);
          return i && i.instance;
        }
        getInstanceByMetatype(e) {
          if (!this.moduleContext) return;
          const t = this.container.getModules().get(this.moduleContext);
          return t ? t.injectables.get(e) : void 0;
        }
        reflectCatchExceptions(e) {
          const t = Object.getPrototypeOf(e);
          return Reflect.getMetadata(s.FILTER_CATCH_EXCEPTIONS, t.constructor) || [];
        }
      }
      t.BaseExceptionFilterContext = c;
    },
    393866: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.BaseExceptionFilter = void 0);
      const s = r(488802),
        i = r(17988),
        n = r(514046),
        a = r(984313),
        o = r(235877);
      class c {
        constructor(e) {
          this.applicationRef = e;
        }
        catch(e, t) {
          const r = this.applicationRef || (this.httpAdapterHost && this.httpAdapterHost.httpAdapter);
          if (!(e instanceof i.HttpException)) return this.handleUnknownError(e, t, r);
          const s = e.getResponse(),
            a = (0, n.isObject)(s) ? s : { statusCode: e.getStatus(), message: s },
            o = t.getArgByIndex(1);
          r.isHeadersSent(o) ? r.end(o) : r.reply(o, a, e.getStatus());
        }
        handleUnknownError(e, t, r) {
          const s = this.isHttpError(e)
              ? { statusCode: e.statusCode, message: e.message }
              : { statusCode: i.HttpStatus.INTERNAL_SERVER_ERROR, message: a.MESSAGES.UNKNOWN_EXCEPTION_MESSAGE },
            n = t.getArgByIndex(1);
          return (
            r.isHeadersSent(n) ? r.end(n) : r.reply(n, s, s.statusCode),
            this.isExceptionObject(e) ? c.logger.error(e.message, e.stack) : c.logger.error(e)
          );
        }
        isExceptionObject(e) {
          return (0, n.isObject)(e) && !!e.message;
        }
        isHttpError(e) {
          return (null == e ? void 0 : e.statusCode) && (null == e ? void 0 : e.message);
        }
      }
      (c.logger = new i.Logger("ExceptionsHandler")),
        s.__decorate(
          [(0, i.Optional)(), (0, i.Inject)(), s.__metadata("design:type", o.HttpAdapterHost)],
          c.prototype,
          "httpAdapterHost",
          void 0
        ),
        (t.BaseExceptionFilter = c);
    },
    255326: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExceptionsHandler = void 0);
      const s = r(514046),
        i = r(237472),
        n = r(393866);
      class a extends n.BaseExceptionFilter {
        constructor() {
          super(...arguments), (this.filters = []);
        }
        next(e, t) {
          this.invokeCustomFilters(e, t) || super.catch(e, t);
        }
        setCustomFilters(e) {
          if (!Array.isArray(e)) throw new i.InvalidExceptionFilterException();
          this.filters = e;
        }
        invokeCustomFilters(e, t) {
          if ((0, s.isEmpty)(this.filters)) return !1;
          const r = (t) => e instanceof t,
            i = this.filters.find(({ exceptionMetatypes: e }) => !e.length || e.some(r));
          return i && i.func(e, t), !!i;
        }
      }
      t.ExceptionsHandler = a;
    },
    306699: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExternalExceptionFilterContext = void 0);
      const s = r(545911),
        i = r(514046),
        n = r(220692),
        a = r(517849),
        o = r(646716),
        c = r(573073);
      class l extends a.BaseExceptionFilterContext {
        constructor(e, t) {
          super(e), (this.config = t);
        }
        create(e, t, r, a = n.STATIC_CONTEXT, c) {
          this.moduleContext = r;
          const l = new o.ExternalExceptionsHandler(),
            u = this.createContext(e, t, s.EXCEPTION_FILTERS_METADATA, a, c);
          return (0, i.isEmpty)(u) || l.setCustomFilters(u.reverse()), l;
        }
        getGlobalMetadata(e = n.STATIC_CONTEXT, t) {
          if (!this.config) return [];
          const r = this.config.getGlobalFilters();
          if (e === n.STATIC_CONTEXT && !t) return r;
          const s = this.config.getGlobalRequestFilters(),
            i = (0, c.iterate)(s)
              .map((r) => r.getInstanceByContextId(e, t))
              .filter((e) => !!e)
              .map((e) => e.instance)
              .toArray();
          return r.concat(i);
        }
      }
      t.ExternalExceptionFilterContext = l;
    },
    649042: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExternalExceptionFilter = void 0);
      const s = r(17988);
      class i {
        catch(e, t) {
          throw (e instanceof Error && !(e instanceof s.HttpException) && i.logger.error(e.message, e.stack), e);
        }
      }
      (t.ExternalExceptionFilter = i), (i.logger = new s.Logger("ExceptionsHandler"));
    },
    646716: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExternalExceptionsHandler = void 0);
      const s = r(514046),
        i = r(237472),
        n = r(649042);
      class a extends n.ExternalExceptionFilter {
        constructor() {
          super(...arguments), (this.filters = []);
        }
        next(e, t) {
          return this.invokeCustomFilters(e, t) || super.catch(e, t);
        }
        setCustomFilters(e) {
          if (!Array.isArray(e)) throw new i.InvalidExceptionFilterException();
          this.filters = e;
        }
        invokeCustomFilters(e, t) {
          if ((0, s.isEmpty)(this.filters)) return null;
          const r = (t) => e instanceof t,
            i = this.filters.find(({ exceptionMetatypes: e }) => !e.length || e.some(r));
          return i ? i.func(e, t) : null;
        }
      }
      t.ExternalExceptionsHandler = a;
    },
    306190: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(393866), t);
    },
    988272: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.FORBIDDEN_MESSAGE = void 0), (t.FORBIDDEN_MESSAGE = "Forbidden resource");
    },
    352927: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.GuardsConsumer = void 0);
      const s = r(514046),
        i = r(518948),
        n = r(115314);
      t.GuardsConsumer = class {
        async tryActivate(e, t, r, i, n) {
          if (!e || (0, s.isEmpty)(e)) return !0;
          const a = this.createContext(t, r, i);
          a.setType(n);
          for (const t of e) {
            const e = t.canActivate(a);
            if (!(await this.pickResult(e))) return !1;
          }
          return !0;
        }
        createContext(e, t, r) {
          return new n.ExecutionContextHost(e, t.constructor, r);
        }
        async pickResult(e) {
          return e instanceof i.Observable ? (0, i.lastValueFrom)(e) : e;
        }
      };
    },
    372428: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.GuardsContextCreator = void 0);
      const s = r(545911),
        i = r(514046),
        n = r(573073),
        a = r(28313),
        o = r(220692);
      class c extends a.ContextCreator {
        constructor(e, t) {
          super(), (this.container = e), (this.config = t);
        }
        create(e, t, r, i = o.STATIC_CONTEXT, n) {
          return (this.moduleContext = r), this.createContext(e, t, s.GUARDS_METADATA, i, n);
        }
        createConcreteContext(e, t = o.STATIC_CONTEXT, r) {
          return (0, i.isEmpty)(e)
            ? []
            : (0, n.iterate)(e)
                .filter((e) => e && (e.name || e.canActivate))
                .map((e) => this.getGuardInstance(e, t, r))
                .filter((e) => e && (0, i.isFunction)(e.canActivate))
                .toArray();
        }
        getGuardInstance(e, t = o.STATIC_CONTEXT, r) {
          if (e.canActivate) return e;
          const s = this.getInstanceByMetatype(e);
          if (!s) return null;
          const i = s.getInstanceByContextId(t, r);
          return i && i.instance;
        }
        getInstanceByMetatype(e) {
          if (!this.moduleContext) return;
          const t = this.container.getModules().get(this.moduleContext);
          return t ? t.injectables.get(e) : void 0;
        }
        getGlobalMetadata(e = o.STATIC_CONTEXT, t) {
          if (!this.config) return [];
          const r = this.config.getGlobalGuards();
          if (e === o.STATIC_CONTEXT && !t) return r;
          const s = this.config.getGlobalRequestGuards(),
            i = (0, n.iterate)(s)
              .map((r) => r.getInstanceByContextId(e, t))
              .filter((e) => !!e)
              .map((e) => e.instance)
              .toArray();
          return r.concat(i);
        }
      }
      t.GuardsContextCreator = c;
    },
    573141: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(988272), t), s.__exportStar(r(352927), t), s.__exportStar(r(372428), t);
    },
    28313: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ContextCreator = void 0);
      const s = r(220692);
      t.ContextCreator = class {
        createContext(e, t, r, i = s.STATIC_CONTEXT, n) {
          const a = this.getGlobalMetadata && this.getGlobalMetadata(i, n),
            o = this.reflectClassMetadata(e, r),
            c = this.reflectMethodMetadata(t, r);
          return [
            ...this.createConcreteContext(a || [], i, n),
            ...this.createConcreteContext(o, i, n),
            ...this.createConcreteContext(c, i, n)
          ];
        }
        reflectClassMetadata(e, t) {
          const r = Object.getPrototypeOf(e);
          return Reflect.getMetadata(t, r.constructor);
        }
        reflectMethodMetadata(e, t) {
          return Reflect.getMetadata(t, e);
        }
      };
    },
    269654: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ContextIdFactory = t.createContextId = void 0);
      const s = r(514046),
        i = r(965192);
      function n() {
        return { id: Math.random() };
      }
      t.createContextId = n;
      class a {
        static create() {
          return n();
        }
        static getByRequest(e, t = ["raw"]) {
          var r;
          if (!e) return a.create();
          if (e[i.REQUEST_CONTEXT_ID]) return e[i.REQUEST_CONTEXT_ID];
          for (const s of t) if (null === (r = e[s]) || void 0 === r ? void 0 : r[i.REQUEST_CONTEXT_ID]) return e[s][i.REQUEST_CONTEXT_ID];
          if (!this.strategy) return a.create();
          const s = n(),
            o = this.strategy.attach(s, e);
          return this.isContextIdResolverWithPayload(o) ? ((s.getParent = o.resolve), (s.payload = o.payload)) : (s.getParent = o), s;
        }
        static apply(e) {
          this.strategy = e;
        }
        static isContextIdResolverWithPayload(e) {
          return (0, s.isObject)(e);
        }
      }
      t.ContextIdFactory = a;
    },
    911907: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ContextUtils = void 0);
      const s = r(545911),
        i = r(514046),
        n = r(115314);
      t.ContextUtils = class {
        mapParamType(e) {
          return e.split(":")[0];
        }
        reflectCallbackParamtypes(e, t) {
          return Reflect.getMetadata(s.PARAMTYPES_METADATA, e, t);
        }
        reflectCallbackMetadata(e, t, r) {
          return Reflect.getMetadata(r, e.constructor, t);
        }
        reflectPassthrough(e, t) {
          return Reflect.getMetadata(s.RESPONSE_PASSTHROUGH_METADATA, e.constructor, t);
        }
        getArgumentsLength(e, t) {
          return e.length ? Math.max(...e.map((e) => t[e].index)) + 1 : 0;
        }
        createNullArray(e) {
          const t = new Array(e);
          for (let r = 0; r < e; ++r) t[r] = void 0;
          return t;
        }
        mergeParamsMetatypes(e, t) {
          return t ? e.map((e) => Object.assign(Object.assign({}, e), { metatype: t[e.index] })) : e;
        }
        getCustomFactory(e, t, r) {
          return (0, i.isFunction)(e) ? (...s) => e(t, r(s)) : () => null;
        }
        getContextFactory(e, t, r) {
          return (s) => {
            const i = new n.ExecutionContextHost(s, t && t.constructor, r);
            return i.setType(e), i;
          };
        }
      };
    },
    115314: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ExecutionContextHost = void 0),
        (t.ExecutionContextHost = class {
          constructor(e, t = null, r = null) {
            (this.args = e), (this.constructorRef = t), (this.handler = r), (this.contextType = "http");
          }
          setType(e) {
            e && (this.contextType = e);
          }
          getType() {
            return this.contextType;
          }
          getClass() {
            return this.constructorRef;
          }
          getHandler() {
            return this.handler;
          }
          getArgs() {
            return this.args;
          }
          getArgByIndex(e) {
            return this.args[e];
          }
          switchToRpc() {
            return Object.assign(this, { getData: () => this.getArgByIndex(0), getContext: () => this.getArgByIndex(1) });
          }
          switchToHttp() {
            return Object.assign(this, {
              getRequest: () => this.getArgByIndex(0),
              getResponse: () => this.getArgByIndex(1),
              getNext: () => this.getArgByIndex(2)
            });
          }
          switchToWs() {
            return Object.assign(this, { getClient: () => this.getArgByIndex(0), getData: () => this.getArgByIndex(1) });
          }
        });
    },
    596554: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExternalContextCreator = void 0);
      const s = r(17988),
        i = r(545911),
        n = r(514046),
        a = r(518948),
        o = r(306699),
        c = r(988272),
        l = r(573141),
        u = r(220692),
        d = r(575191),
        p = r(68571),
        h = r(911907),
        f = r(532015),
        g = r(390151);
      class y {
        constructor(e, t, r, s, i, n, a, o) {
          (this.guardsContextCreator = e),
            (this.guardsConsumer = t),
            (this.interceptorsContextCreator = r),
            (this.interceptorsConsumer = s),
            (this.modulesContainer = i),
            (this.pipesContextCreator = n),
            (this.pipesConsumer = a),
            (this.filtersContextCreator = o),
            (this.contextUtils = new h.ContextUtils()),
            (this.externalErrorProxy = new f.ExternalErrorProxy()),
            (this.handlerMetadataStorage = new g.HandlerMetadataStorage());
        }
        static fromContainer(e) {
          const t = new l.GuardsContextCreator(e, e.applicationConfig),
            r = new l.GuardsConsumer(),
            s = new d.InterceptorsContextCreator(e, e.applicationConfig),
            i = new d.InterceptorsConsumer(),
            n = new p.PipesContextCreator(e, e.applicationConfig),
            a = new p.PipesConsumer(),
            c = new o.ExternalExceptionFilterContext(e, e.applicationConfig),
            u = new y(t, r, s, i, e.getModules(), n, a, c);
          return (u.container = e), u;
        }
        create(e, t, r, s, i, n = u.STATIC_CONTEXT, a, o = { interceptors: !0, guards: !0, filters: !0 }, c = "http") {
          const l = this.getContextModuleKey(e.constructor),
            { argsLength: d, paramtypes: p, getParamsMetadata: h } = this.getMetadata(e, r, s, i, c),
            f = this.pipesContextCreator.create(e, t, l, n, a),
            g = this.guardsContextCreator.create(e, t, l, n, a),
            y = this.filtersContextCreator.create(e, t, l, n, a),
            E = o.interceptors ? this.interceptorsContextCreator.create(e, t, l, n, a) : [],
            m = h(l, n, a),
            v = m ? this.contextUtils.mergeParamsMetatypes(m, p) : [],
            T = o.guards ? this.createGuardsFn(g, e, t, c) : null,
            C = this.createPipesFn(f, v),
            S = async (...r) => {
              const s = this.contextUtils.createNullArray(d);
              T && (await T(r));
              const i = await this.interceptorsConsumer.intercept(
                E,
                r,
                e,
                t,
                (
                  (r, ...s) =>
                  async () =>
                    C ? (await C(r, ...s), t.apply(e, r)) : t.apply(e, s)
                )(s, ...r),
                c
              );
              return this.transformToResult(i);
            };
          return o.filters ? this.externalErrorProxy.createProxy(S, y, c) : S;
        }
        getMetadata(e, t, r, s, i) {
          const n = this.handlerMetadataStorage.get(e, t);
          if (n) return n;
          const a = this.contextUtils.reflectCallbackMetadata(e, t, r || "") || {},
            o = Object.keys(a),
            c = this.contextUtils.getArgumentsLength(o, a),
            l = this.contextUtils.reflectCallbackParamtypes(e, t),
            d = this.contextUtils.getContextFactory(i, e, e[t]),
            p = {
              argsLength: c,
              paramtypes: l,
              getParamsMetadata: (e, t = u.STATIC_CONTEXT, r) => (s ? this.exchangeKeysForValues(o, a, e, s, t, r, d) : null)
            };
          return this.handlerMetadataStorage.set(e, t, p), p;
        }
        getContextModuleKey(e) {
          if (!e) return "";
          const t = this.modulesContainer.entries();
          for (const [r, s] of t) if (s.hasProvider(e)) return r;
          return "";
        }
        exchangeKeysForValues(e, t, r, s, n = u.STATIC_CONTEXT, a, o = this.contextUtils.getContextFactory("http")) {
          return (
            this.pipesContextCreator.setModuleContext(r),
            e.map((e) => {
              const { index: r, data: c, pipes: l } = t[e],
                u = this.pipesContextCreator.createConcreteContext(l, n, a),
                d = this.contextUtils.mapParamType(e);
              if (e.includes(i.CUSTOM_ROUTE_ARGS_METADATA)) {
                const { factory: s } = t[e];
                return { index: r, extractValue: this.contextUtils.getCustomFactory(s, c, o), type: d, data: c, pipes: u };
              }
              const p = Number(d);
              return { index: r, extractValue: (...e) => s.exchangeKeyForValue(p, c, e), type: p, data: c, pipes: u };
            })
          );
        }
        createPipesFn(e, t) {
          return t.length
            ? async (r, ...s) => {
                await Promise.all(
                  t.map(async (t) => {
                    const { index: i, extractValue: n, type: a, data: o, metatype: c, pipes: l } = t,
                      u = n(...s);
                    r[i] = await this.getParamValue(u, { metatype: c, type: a, data: o }, e.concat(l));
                  })
                );
              }
            : null;
        }
        async getParamValue(e, { metatype: t, type: r, data: s }, i) {
          return (0, n.isEmpty)(i) ? e : this.pipesConsumer.apply(e, { metatype: t, type: r, data: s }, i);
        }
        async transformToResult(e) {
          return (0, a.isObservable)(e) ? (0, a.lastValueFrom)(e) : e;
        }
        createGuardsFn(e, t, r, i) {
          return e.length
            ? async (n) => {
                if (!(await this.guardsConsumer.tryActivate(e, n, t, r, i))) throw new s.ForbiddenException(c.FORBIDDEN_MESSAGE);
              }
            : null;
        }
        registerRequestProvider(e, t) {
          this.container.registerRequestProvider(e, t);
        }
      }
      t.ExternalContextCreator = y;
    },
    532015: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExternalErrorProxy = void 0);
      const s = r(115314);
      t.ExternalErrorProxy = class {
        createProxy(e, t, r) {
          return async (...i) => {
            try {
              return await e(...i);
            } catch (e) {
              const n = new s.ExecutionContextHost(i);
              return n.setType(r), t.next(e, n);
            }
          };
        }
      };
    },
    165359: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getClassScope = void 0);
      const s = r(545911);
      t.getClassScope = function (e) {
        const t = Reflect.getMetadata(s.SCOPE_OPTIONS_METADATA, e);
        return t && t.scope;
      };
    },
    390151: (e, t, r) => {
      "use strict";
      var s;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.HandlerMetadataStorage = t.HANDLER_METADATA_SYMBOL = void 0);
      const i = r(220692);
      (t.HANDLER_METADATA_SYMBOL = Symbol.for("handler_metadata:cache")),
        (t.HandlerMetadataStorage = class {
          constructor() {
            this[s] = new Map();
          }
          set(e, r, s) {
            const i = this.getMetadataKey(e, r);
            this[t.HANDLER_METADATA_SYMBOL].set(i, s);
          }
          get(e, r) {
            const s = this.getMetadataKey(e, r);
            return this[t.HANDLER_METADATA_SYMBOL].get(s);
          }
          getMetadataKey(e, t) {
            const r = e.constructor;
            return (r && (r[i.CONTROLLER_ID_KEY] || r.name)) + t;
          }
        }),
        (s = t.HANDLER_METADATA_SYMBOL);
    },
    235877: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HttpAdapterHost = void 0),
        (t.HttpAdapterHost = class {
          set httpAdapter(e) {
            this._httpAdapter = e;
          }
          get httpAdapter() {
            return this._httpAdapter;
          }
        });
    },
    871577: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(269654), t), s.__exportStar(r(235877), t);
    },
    452880: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isDurable = void 0);
      const s = r(545911);
      t.isDurable = function (e) {
        const t = Reflect.getMetadata(s.SCOPE_OPTIONS_METADATA, e);
        return t && t.durable;
      };
    },
    479722: (e, t, r) => {
      "use strict";
      var s = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.loadAdapter = void 0);
      const i = r(17988),
        n = new i.Logger("PackageLoader");
      t.loadAdapter = function (e, t, i) {
        try {
          return i ? i() : r(54021)(e);
        } catch (r) {
          n.error(
            ((e, t) =>
              `No driver (${t}) has been selected. In order to take advantage of the default driver, please, ensure to install the "${e}" package ($ npm install ${e}).`)(
              e,
              t
            )
          ),
            s.exit(1);
        }
      };
    },
    863172: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.INVALID_EXECUTION_CONTEXT =
          t.VERSIONED_CONTROLLER_MAPPING_MESSAGE =
          t.CONTROLLER_MAPPING_MESSAGE =
          t.VERSIONED_ROUTE_MAPPED_MESSAGE =
          t.ROUTE_MAPPED_MESSAGE =
          t.MODULE_INIT_MESSAGE =
            void 0);
      const s = r(446116),
        i = r(187272);
      (t.MODULE_INIT_MESSAGE = (e, t) => `${t} dependencies initialized`),
        (t.ROUTE_MAPPED_MESSAGE = (e, t) => `Mapped {${e}, ${s.RequestMethod[t]}} route`),
        (t.VERSIONED_ROUTE_MAPPED_MESSAGE = (e, t, r) => {
          const n = (Array.isArray(r) ? r : [r]).map((e) => (e === i.VERSION_NEUTRAL ? "Neutral" : e)).join(",");
          return `Mapped {${e}, ${s.RequestMethod[t]}} (version: ${n}) route`;
        }),
        (t.CONTROLLER_MAPPING_MESSAGE = (e, t) => `${e} {${t}}:`),
        (t.VERSIONED_CONTROLLER_MAPPING_MESSAGE = (e, t, r) =>
          `${e} {${t}} (version: ${(Array.isArray(r) ? r : [r]).map((e) => (e === i.VERSION_NEUTRAL ? "Neutral" : e)).join(",")}):`),
        (t.INVALID_EXECUTION_CONTEXT = (e, t) => `Calling ${e} is not allowed in this context. Your current execution context is "${t}".`);
    },
    607235: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.optionalRequire = void 0),
        (t.optionalRequire = function (e, t) {
          try {
            return t ? t() : r(54021)(e);
          } catch (e) {
            return {};
          }
        });
    },
    932519: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.rethrow = void 0),
        (t.rethrow = (e) => {
          throw e;
        });
    },
    390274: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RouterMethodFactory = void 0);
      const s = r(446116);
      t.RouterMethodFactory = class {
        get(e, t) {
          switch (t) {
            case s.RequestMethod.POST:
              return e.post;
            case s.RequestMethod.ALL:
              return e.all;
            case s.RequestMethod.DELETE:
              return e.delete;
            case s.RequestMethod.PUT:
              return e.put;
            case s.RequestMethod.PATCH:
              return e.patch;
            case s.RequestMethod.OPTIONS:
              return e.options;
            case s.RequestMethod.HEAD:
              return e.head;
            case s.RequestMethod.GET:
              return e.get;
            default:
              return e.use;
          }
        }
      };
    },
    54021: (e) => {
      function t(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      (t.keys = () => []), (t.resolve = t), (t.id = 54021), (e.exports = t);
    },
    520182: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.callBeforeAppShutdownHook = void 0);
      const s = r(514046),
        i = r(573073),
        n = r(849206);
      function a(e) {
        return (0, s.isFunction)(e.beforeApplicationShutdown);
      }
      function o(e, t) {
        return (0, i.iterate)(e)
          .filter((e) => !(0, s.isNil)(e))
          .filter(a)
          .map(async (e) => e.beforeApplicationShutdown(t))
          .toArray();
      }
      t.callBeforeAppShutdownHook = async function (e, t) {
        const r = e.getNonAliasProviders(),
          [s, i] = r.shift(),
          c = [...e.controllers, ...r, ...e.injectables, ...e.middlewares],
          l = (0, n.getNonTransientInstances)(c);
        await Promise.all(o(l, t));
        const u = (0, n.getTransientInstances)(c);
        await Promise.all(o(u, t));
        const d = i.instance;
        d && a(d) && i.isDependencyTreeStatic() && (await d.beforeApplicationShutdown(t));
      };
    },
    923170: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(390876), t),
        s.__exportStar(r(889769), t),
        s.__exportStar(r(679230), t),
        s.__exportStar(r(791095), t),
        s.__exportStar(r(520182), t);
    },
    390876: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.callModuleBootstrapHook = void 0);
      const s = r(514046),
        i = r(573073),
        n = r(849206);
      function a(e) {
        return (0, s.isFunction)(e.onApplicationBootstrap);
      }
      function o(e) {
        return (0, i.iterate)(e)
          .filter((e) => !(0, s.isNil)(e))
          .filter(a)
          .map(async (e) => e.onApplicationBootstrap())
          .toArray();
      }
      t.callModuleBootstrapHook = async function (e) {
        const t = e.getNonAliasProviders(),
          [r, s] = t.shift(),
          i = [...e.controllers, ...t, ...e.injectables, ...e.middlewares],
          c = (0, n.getNonTransientInstances)(i);
        await Promise.all(o(c));
        const l = (0, n.getTransientInstances)(i);
        await Promise.all(o(l));
        const u = s.instance;
        u && a(u) && s.isDependencyTreeStatic() && (await u.onApplicationBootstrap());
      };
    },
    889769: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.callAppShutdownHook = void 0);
      const s = r(514046),
        i = r(573073),
        n = r(849206);
      function a(e) {
        return (0, s.isFunction)(e.onApplicationShutdown);
      }
      function o(e, t) {
        return (0, i.iterate)(e)
          .filter((e) => !(0, s.isNil)(e))
          .filter(a)
          .map(async (e) => e.onApplicationShutdown(t))
          .toArray();
      }
      t.callAppShutdownHook = async function (e, t) {
        const r = e.getNonAliasProviders(),
          [s, i] = r.shift(),
          c = [...e.controllers, ...r, ...e.injectables, ...e.middlewares],
          l = (0, n.getNonTransientInstances)(c);
        await Promise.all(o(l, t));
        const u = (0, n.getTransientInstances)(c);
        await Promise.all(o(u, t));
        const d = i.instance;
        d && a(d) && i.isDependencyTreeStatic() && (await d.onApplicationShutdown(t));
      };
    },
    679230: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.callModuleDestroyHook = void 0);
      const s = r(514046),
        i = r(573073),
        n = r(849206);
      function a(e) {
        return (0, s.isFunction)(e.onModuleDestroy);
      }
      function o(e) {
        return (0, i.iterate)(e)
          .filter((e) => !(0, s.isNil)(e))
          .filter(a)
          .map(async (e) => e.onModuleDestroy())
          .toArray();
      }
      t.callModuleDestroyHook = async function (e) {
        const t = e.getNonAliasProviders(),
          [r, s] = t.shift(),
          i = [...e.controllers, ...t, ...e.injectables, ...e.middlewares],
          c = (0, n.getNonTransientInstances)(i);
        await Promise.all(o(c));
        const l = (0, n.getTransientInstances)(i);
        await Promise.all(o(l));
        const u = s.instance;
        u && a(u) && s.isDependencyTreeStatic() && (await u.onModuleDestroy());
      };
    },
    791095: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.callModuleInitHook = void 0);
      const s = r(514046),
        i = r(573073),
        n = r(849206);
      function a(e) {
        return (0, s.isFunction)(e.onModuleInit);
      }
      function o(e) {
        return (0, i.iterate)(e)
          .filter((e) => !(0, s.isNil)(e))
          .filter(a)
          .map(async (e) => e.onModuleInit())
          .toArray();
      }
      t.callModuleInitHook = async function (e) {
        const t = e.getNonAliasProviders(),
          [r, s] = t.shift(),
          i = [...e.controllers, ...t, ...e.injectables, ...e.middlewares],
          c = (0, n.getNonTransientInstances)(i);
        await Promise.all(o(c));
        const l = (0, n.getTransientInstances)(i);
        await Promise.all(o(l));
        const u = s.instance;
        u && a(u) && s.isDependencyTreeStatic() && (await u.onModuleInit());
      };
    },
    201484: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NestFactory = t.APP_PIPE = t.APP_INTERCEPTOR = t.APP_GUARD = t.APP_FILTER = void 0);
      const s = r(488802);
      r(760171), s.__exportStar(r(591165), t), s.__exportStar(r(136633), t);
      var i = r(984313);
      Object.defineProperty(t, "APP_FILTER", {
        enumerable: !0,
        get: function () {
          return i.APP_FILTER;
        }
      }),
        Object.defineProperty(t, "APP_GUARD", {
          enumerable: !0,
          get: function () {
            return i.APP_GUARD;
          }
        }),
        Object.defineProperty(t, "APP_INTERCEPTOR", {
          enumerable: !0,
          get: function () {
            return i.APP_INTERCEPTOR;
          }
        }),
        Object.defineProperty(t, "APP_PIPE", {
          enumerable: !0,
          get: function () {
            return i.APP_PIPE;
          }
        }),
        s.__exportStar(r(682077), t),
        s.__exportStar(r(306190), t),
        s.__exportStar(r(871577), t),
        s.__exportStar(r(68480), t),
        s.__exportStar(r(122443), t),
        s.__exportStar(r(373238), t),
        s.__exportStar(r(107229), t),
        s.__exportStar(r(143767), t);
      var n = r(991201);
      Object.defineProperty(t, "NestFactory", {
        enumerable: !0,
        get: function () {
          return n.NestFactory;
        }
      }),
        s.__exportStar(r(793279), t),
        s.__exportStar(r(347257), t),
        s.__exportStar(r(651573), t);
    },
    237898: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.AbstractInstanceResolver = void 0);
      const s = r(17988),
        i = r(227641);
      t.AbstractInstanceResolver = class {
        find(e, t) {
          const r = this.instanceLinksHost.get(e, t),
            n = ({ wrapperRef: t }) => {
              if (t.scope === s.Scope.REQUEST || t.scope === s.Scope.TRANSIENT) throw new i.InvalidClassScopeException(e);
              return t.instance;
            };
          return Array.isArray(r) ? r.map(n) : n(r);
        }
        async resolvePerContext(e, t, r, s) {
          const n = (null == s ? void 0 : s.strict)
              ? this.instanceLinksHost.get(e, { moduleId: t.id, each: s.each })
              : this.instanceLinksHost.get(e, { each: s.each }),
            a = async (t) => {
              const { wrapperRef: n, collection: a } = t;
              if (n.isDependencyTreeStatic() && !n.isTransient) return this.get(e, { strict: s.strict });
              const o = n.instance || { constructor: e },
                c = await this.injector.loadPerContext(o, n.host, a, r, n);
              if (!c) throw new i.UnknownElementException();
              return c;
            };
          return Array.isArray(n) ? Promise.all(n.map((e) => a(e))) : a(n);
        }
      };
    },
    21804: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ModuleCompiler = void 0);
      const s = r(488802),
        i = r(389585);
      t.ModuleCompiler = class {
        constructor(e = new i.ModuleTokenFactory()) {
          this.moduleTokenFactory = e;
        }
        async compile(e) {
          const { type: t, dynamicMetadata: r } = this.extractMetadata(await e);
          return { type: t, dynamicMetadata: r, token: this.moduleTokenFactory.create(t, r) };
        }
        extractMetadata(e) {
          if (!this.isDynamicModule(e)) return { type: (null == e ? void 0 : e.forwardRef) ? e.forwardRef() : e };
          const { module: t } = e;
          return { type: t, dynamicMetadata: s.__rest(e, ["module"]) };
        }
        isDynamicModule(e) {
          return !!e.module;
        }
      };
    },
    220692: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.STATIC_CONTEXT = t.CONTROLLER_ID_KEY = void 0),
        (t.CONTROLLER_ID_KEY = "CONTROLLER_ID"),
        (t.STATIC_CONTEXT = Object.freeze({ id: 1 }));
    },
    333883: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.NestContainer = void 0);
      const s = r(545911),
        i = r(227641),
        n = r(820855),
        a = r(965192),
        o = r(21804),
        c = r(672730),
        l = r(231622),
        u = r(682916),
        d = r(389585),
        p = r(973640);
      t.NestContainer = class {
        constructor(e = undefined) {
          (this._applicationConfig = e),
            (this.globalModules = new Set()),
            (this.moduleTokenFactory = new d.ModuleTokenFactory()),
            (this.moduleCompiler = new o.ModuleCompiler(this.moduleTokenFactory)),
            (this.modules = new p.ModulesContainer()),
            (this.dynamicModulesMetadata = new Map()),
            (this.internalProvidersStorage = new l.InternalProvidersStorage()),
            (this._serializedGraph = new n.SerializedGraph());
        }
        get serializedGraph() {
          return this._serializedGraph;
        }
        get applicationConfig() {
          return this._applicationConfig;
        }
        setHttpAdapter(e) {
          (this.internalProvidersStorage.httpAdapter = e),
            this.internalProvidersStorage.httpAdapterHost && (this.internalProvidersStorage.httpAdapterHost.httpAdapter = e);
        }
        getHttpAdapterRef() {
          return this.internalProvidersStorage.httpAdapter;
        }
        getHttpAdapterHostRef() {
          return this.internalProvidersStorage.httpAdapterHost;
        }
        async addModule(e, t) {
          if (!e) throw new i.UndefinedForwardRefException(t);
          const { type: r, dynamicMetadata: s, token: n } = await this.moduleCompiler.compile(e);
          if (this.modules.has(n)) return this.modules.get(n);
          const a = new u.Module(r, this);
          (a.token = n), this.modules.set(n, a);
          const o = [].concat(t, r);
          return await this.addDynamicMetadata(n, s, o), this.isGlobalModule(r, s) && ((a.isGlobal = !0), this.addGlobalModule(a)), a;
        }
        async addDynamicMetadata(e, t, r) {
          if (!t) return;
          this.dynamicModulesMetadata.set(e, t);
          const { imports: s } = t;
          await this.addDynamicModules(s, r);
        }
        async addDynamicModules(e, t) {
          e && (await Promise.all(e.map((e) => this.addModule(e, t))));
        }
        isGlobalModule(e, t) {
          return !(!t || !t.global) || !!Reflect.getMetadata(s.GLOBAL_MODULE_METADATA, e);
        }
        addGlobalModule(e) {
          this.globalModules.add(e);
        }
        getModules() {
          return this.modules;
        }
        getModuleCompiler() {
          return this.moduleCompiler;
        }
        getModuleByKey(e) {
          return this.modules.get(e);
        }
        getInternalCoreModuleRef() {
          return this.internalCoreModule;
        }
        async addImport(e, t) {
          if (!this.modules.has(t)) return;
          const r = this.modules.get(t),
            { token: s } = await this.moduleCompiler.compile(e),
            i = this.modules.get(s);
          r.addRelatedModule(i);
        }
        addProvider(e, t, r) {
          const s = this.modules.get(t);
          if (!e) throw new i.CircularDependencyException(null == s ? void 0 : s.metatype.name);
          if (!s) throw new i.UnknownModuleException();
          return s.addProvider(e, r);
        }
        addInjectable(e, t, r, s) {
          if (!this.modules.has(t)) throw new i.UnknownModuleException();
          return this.modules.get(t).addInjectable(e, r, s);
        }
        addExportedProvider(e, t) {
          if (!this.modules.has(t)) throw new i.UnknownModuleException();
          this.modules.get(t).addExportedProvider(e);
        }
        addController(e, t) {
          if (!this.modules.has(t)) throw new i.UnknownModuleException();
          this.modules.get(t).addController(e);
        }
        clear() {
          this.modules.clear();
        }
        replace(e, t) {
          this.modules.forEach((r) => r.replace(e, t));
        }
        bindGlobalScope() {
          this.modules.forEach((e) => this.bindGlobalsToImports(e));
        }
        bindGlobalsToImports(e) {
          this.globalModules.forEach((t) => this.bindGlobalModuleToModule(e, t));
        }
        bindGlobalModuleToModule(e, t) {
          e !== t && e !== this.internalCoreModule && e.addRelatedModule(t);
        }
        getDynamicMetadataByToken(e, t) {
          var r;
          const s = this.dynamicModulesMetadata.get(e);
          return t ? (null !== (r = null == s ? void 0 : s[t]) && void 0 !== r ? r : []) : s;
        }
        registerCoreModuleRef(e) {
          (this.internalCoreModule = e), (this.modules[c.InternalCoreModule.name] = e);
        }
        getModuleTokenFactory() {
          return this.moduleTokenFactory;
        }
        registerRequestProvider(e, t) {
          this.internalCoreModule.getProviderByKey(a.REQUEST).setInstanceByContextId(t, { instance: e, isResolved: !0 });
        }
      };
    },
    792596: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isFactoryProvider = t.isValueProvider = t.isClassProvider = void 0);
      const s = r(514046);
      (t.isClassProvider = function (e) {
        return Boolean(null == e ? void 0 : e.useClass);
      }),
        (t.isValueProvider = function (e) {
          const t = null == e ? void 0 : e.useValue;
          return !(0, s.isUndefined)(t);
        }),
        (t.isFactoryProvider = function (e) {
          return Boolean(e.useFactory);
        });
    },
    734577: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.SilentLogger = void 0);
      const s = r(17988),
        i = () => {};
      class n extends s.Logger {
        constructor() {
          super(...arguments),
            (this.log = i),
            (this.error = i),
            (this.warn = i),
            (this.debug = i),
            (this.verbose = i),
            (this.setLogLevels = i);
        }
      }
      t.SilentLogger = n;
    },
    849206: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getNonTransientInstances = t.getTransientInstances = void 0);
      const s = r(573073);
      (t.getTransientInstances = function (e) {
        return (0, s.iterate)(e)
          .filter(([e, t]) => t.isDependencyTreeStatic())
          .map(([e, t]) => t.getStaticTransientInstances())
          .flatten()
          .filter((e) => !!e)
          .map(({ instance: e }) => e)
          .toArray();
      }),
        (t.getNonTransientInstances = function (e) {
          return (0, s.iterate)(e)
            .filter(([e, t]) => t.isDependencyTreeStatic() && !t.isTransient)
            .map(([e, { instance: t }]) => t)
            .toArray();
        });
    },
    68480: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(333883), t),
        s.__exportStar(r(513324), t),
        s.__exportStar(r(317935), t),
        s.__exportStar(r(839878), t),
        s.__exportStar(r(973640), t);
    },
    252516: (e, t, r) => {
      "use strict";
      var s = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Injector = void 0);
      const i = r(17988),
        n = r(545911),
        a = r(181610),
        o = r(514046),
        c = r(573073),
        l = r(300780),
        u = r(889791),
        d = r(939108),
        p = r(220692),
        h = r(513324),
        f = r(119573);
      t.Injector = class {
        constructor(e) {
          (this.options = e), (this.logger = new i.Logger("InjectorLogger"));
        }
        loadPrototype({ token: e }, t, r = p.STATIC_CONTEXT) {
          if (!t) return;
          const s = t.get(e),
            i = s.createPrototype(r);
          if (i) {
            const r = new f.InstanceWrapper(Object.assign(Object.assign({}, s), { instance: i }));
            t.set(e, r);
          }
        }
        async loadInstance(e, t, r, s = p.STATIC_CONTEXT, i) {
          const n = this.getInquirerId(i),
            a = e.getInstanceByContextId(this.getContextId(s, e), n);
          if (a.isPending)
            return a.donePromise.then((e) => {
              if (e) throw e;
            });
          const c = this.applyDoneHook(a),
            u = e.token || e.name,
            { inject: d } = e,
            h = t.get(u);
          if ((0, o.isUndefined)(h)) throw new l.RuntimeException();
          if (a.isResolved) return c();
          try {
            const t = async (t) => {
              const n = await this.resolveProperties(e, r, d, s, e, i),
                a = await this.instantiateClass(t, e, h, s, i);
              this.applyProperties(a, n), c();
            };
            await this.resolveConstructorParams(e, r, d, t, s, e, i);
          } catch (e) {
            throw (c(e), e);
          }
        }
        async loadMiddleware(e, t, r, s = p.STATIC_CONTEXT, i) {
          const { metatype: n, token: a } = e,
            c = t.get(a);
          (0, o.isUndefined)(c.instance) && ((c.instance = Object.create(n.prototype)), await this.loadInstance(e, t, r, s, i || e));
        }
        async loadController(e, t, r = p.STATIC_CONTEXT) {
          const s = t.controllers;
          await this.loadInstance(e, s, t, r, e), await this.loadEnhancersPerContext(e, r, e);
        }
        async loadInjectable(e, t, r = p.STATIC_CONTEXT, s) {
          const i = t.injectables;
          await this.loadInstance(e, i, t, r, s);
        }
        async loadProvider(e, t, r = p.STATIC_CONTEXT, s) {
          const i = t.providers;
          await this.loadInstance(e, i, t, r, s), await this.loadEnhancersPerContext(e, r, e);
        }
        applyDoneHook(e) {
          let t;
          return (
            (e.donePromise = new Promise((e, r) => {
              t = e;
            })),
            (e.isPending = !0),
            t
          );
        }
        async resolveConstructorParams(e, t, r, s, i = p.STATIC_CONTEXT, n, a) {
          let c = this.getInquirerId(n);
          const l = e.getCtorMetadata();
          if (l && i !== p.STATIC_CONTEXT) return s(await this.loadCtorMetadata(l, i, n, a));
          const u = !(0, o.isNil)(r),
            [d, h] = u ? this.getFactoryProviderDependencies(e) : this.getClassDependencies(e);
          let f = !0;
          const g = await Promise.all(
            d.map(async (r, s) => {
              try {
                if (this.isInquirer(r, a)) return a && a.instance;
                (null == n ? void 0 : n.isTransient) && a && ((n = a), (c = this.getInquirerId(a)));
                const o = await this.resolveSingleParam(e, r, { index: s, dependencies: d }, t, i, n, s),
                  l = o.getInstanceByContextId(this.getContextId(i, o), c);
                return l.isResolved || o.forwardRef || (f = !1), null == l ? void 0 : l.instance;
              } catch (e) {
                if (!h.includes(s)) throw e;
                return;
              }
            })
          );
          f && (await s(g));
        }
        getClassDependencies(e) {
          const t = e.metatype;
          return [this.reflectConstructorParams(t), this.reflectOptionalParams(t)];
        }
        getFactoryProviderDependencies(e) {
          var t, r;
          const s = [];
          return [
            null === (r = null === (t = e.inject) || void 0 === t ? void 0 : t.map) || void 0 === r
              ? void 0
              : r.call(t, (e, t) =>
                  "object" != typeof e
                    ? e
                    : ((e) => !(0, o.isUndefined)(e.token) && !(0, o.isUndefined)(e.optional))(e)
                    ? (e.optional && s.push(t), null == e ? void 0 : e.token)
                    : e
                ),
            s
          ];
        }
        reflectConstructorParams(e) {
          const t = [...(Reflect.getMetadata(n.PARAMTYPES_METADATA, e) || [])];
          return this.reflectSelfParams(e).forEach(({ index: e, param: r }) => (t[e] = r)), t;
        }
        reflectOptionalParams(e) {
          return Reflect.getMetadata(n.OPTIONAL_DEPS_METADATA, e) || [];
        }
        reflectSelfParams(e) {
          return Reflect.getMetadata(n.SELF_DECLARED_DEPS_METADATA, e) || [];
        }
        async resolveSingleParam(e, t, r, s, i = p.STATIC_CONTEXT, n, a) {
          if ((0, o.isUndefined)(t))
            throw (
              (this.logger.log(
                "Nest encountered an undefined dependency. This may be due to a circular import or a missing dependency declaration."
              ),
              new u.UndefinedDependencyException(e.name, r, s))
            );
          const c = this.resolveParamToken(e, t);
          return this.resolveComponentInstance(s, c, r, e, i, n, a);
        }
        resolveParamToken(e, t) {
          return t.forwardRef ? ((e.forwardRef = !0), t.forwardRef()) : t;
        }
        async resolveComponentInstance(e, t, r, s, i = p.STATIC_CONTEXT, n, a) {
          this.printResolvingDependenciesLog(t, n), this.printLookingForProviderLog(t, e);
          const o = e.providers,
            c = await this.lookupComponent(o, e, Object.assign(Object.assign({}, r), { name: t }), s, i, n, a);
          return this.resolveComponentHost(e, c, i, n);
        }
        async resolveComponentHost(e, t, r = p.STATIC_CONTEXT, s) {
          var i;
          const n = this.getInquirerId(s),
            a = t.getInstanceByContextId(this.getContextId(r, t), n);
          if (
            (a.isResolved || t.forwardRef
              ? a.isResolved ||
                !t.forwardRef ||
                (r === p.STATIC_CONTEXT && !n) ||
                (a.donePromise && a.donePromise.then(() => this.loadProvider(t, e, r, s)))
              : await this.loadProvider(t, null !== (i = t.host) && void 0 !== i ? i : e, r, s),
            t.async)
          ) {
            const e = t.getInstanceByContextId(this.getContextId(r, t), n);
            (e.instance = await e.instance), t.setInstanceByContextId(r, e, n);
          }
          return t;
        }
        async lookupComponent(e, t, r, s, i = p.STATIC_CONTEXT, n, a) {
          const o = s.token || s.name,
            { name: c } = r;
          if (s && o === c) throw new d.UnknownDependenciesException(s.name, r, t);
          if (e.has(c)) {
            const r = e.get(c);
            return this.printFoundInModuleLog(c, t), this.addDependencyMetadata(a, s, r), r;
          }
          return this.lookupComponentInParentModules(r, t, s, i, n, a);
        }
        async lookupComponentInParentModules(e, t, r, s = p.STATIC_CONTEXT, i, n) {
          const a = await this.lookupComponentInImports(t, e.name, r, [], s, i, n);
          if ((0, o.isNil)(a)) throw new d.UnknownDependenciesException(r.name, e, t);
          return a;
        }
        async lookupComponentInImports(e, t, r, s = [], i = p.STATIC_CONTEXT, n, a, o) {
          let c = null,
            l = [...(e.imports || new Set()).values()].filter((e) => e);
          if (o) {
            const t = e.exports;
            l = l.filter((e) => t.has(e.metatype));
          }
          for (const e of l) {
            if (s.includes(e.id)) continue;
            this.printLookingForProviderLog(t, e), s.push(e.id);
            const { providers: o, exports: l } = e;
            if (!l.has(t) || !o.has(t)) {
              const o = await this.lookupComponentInImports(e, t, r, s, i, n, a, !0);
              if (o) return this.addDependencyMetadata(a, r, o), o;
              continue;
            }
            this.printFoundInModuleLog(t, e), (c = o.get(t)), this.addDependencyMetadata(a, r, c);
            const u = this.getInquirerId(n);
            if (!c.getInstanceByContextId(this.getContextId(i, c), u).isResolved && !c.forwardRef) {
              await this.loadProvider(c, e, i, r);
              break;
            }
          }
          return c;
        }
        async resolveProperties(e, t, r, s = p.STATIC_CONTEXT, i, n) {
          if (!(0, o.isNil)(r)) return [];
          const a = e.getPropertiesMetadata();
          if (a && s !== p.STATIC_CONTEXT) return this.loadPropertiesMetadata(a, s, i);
          const c = this.reflectProperties(e.metatype),
            l = await Promise.all(
              c.map(async (r) => {
                try {
                  const a = { key: r.key, name: r.name };
                  if (this.isInquirer(r.name, n)) return n && n.instance;
                  const o = await this.resolveSingleParam(e, r.name, a, t, s, i, r.key);
                  if (!o) return;
                  const c = this.getInquirerId(i);
                  return o.getInstanceByContextId(this.getContextId(s, o), c).instance;
                } catch (e) {
                  if (!r.isOptional) throw e;
                  return;
                }
              })
            );
          return c.map((e, t) => Object.assign(Object.assign({}, e), { instance: l[t] }));
        }
        reflectProperties(e) {
          const t = Reflect.getMetadata(n.PROPERTY_DEPS_METADATA, e) || [],
            r = Reflect.getMetadata(n.OPTIONAL_PROPERTY_DEPS_METADATA, e) || [];
          return t.map((e) => Object.assign(Object.assign({}, e), { name: e.type, isOptional: r.includes(e.key) }));
        }
        applyProperties(e, t) {
          (0, o.isObject)(e) &&
            (0, c.iterate)(t)
              .filter((e) => !(0, o.isNil)(e.instance))
              .forEach((t) => (e[t.key] = t.instance));
        }
        async instantiateClass(e, t, r, s = p.STATIC_CONTEXT, i) {
          var n;
          const { metatype: a, inject: c } = t,
            l = this.getInquirerId(i),
            u = r.getInstanceByContextId(this.getContextId(s, r), l),
            d = t.isStatic(s, i) || t.isInRequestScope(s, i) || t.isLazyTransient(s, i) || t.isExplicitlyRequested(s, i);
          if (null === (n = this.options) || void 0 === n ? void 0 : n.preview) return (u.isResolved = !0), u.instance;
          if ((0, o.isNil)(c) && d) u.instance = t.forwardRef ? Object.assign(u.instance, new a(...e)) : new a(...e);
          else if (d) {
            const t = r.metatype(...e);
            u.instance = await t;
          }
          return (u.isResolved = !0), u.instance;
        }
        async loadPerContext(e, t, r, s, i) {
          if (!i) {
            const t = e.constructor;
            i = r.get(t);
          }
          await this.loadInstance(i, r, t, s, i), await this.loadEnhancersPerContext(i, s, i);
          const n = i.getInstanceByContextId(this.getContextId(s, i), i.id);
          return n && n.instance;
        }
        async loadEnhancersPerContext(e, t, r) {
          const s = e.getEnhancersMetadata() || [];
          await Promise.all(
            s.map((e) => {
              const s = e.host;
              return this.loadInstance(e, s.injectables, s, t, r);
            })
          );
        }
        async loadCtorMetadata(e, t, r, s) {
          const i = await Promise.all(e.map(async (e) => this.resolveScopedComponentHost(e, t, r, s))),
            n = this.getInquirerId(r);
          return i.map((e) => (null == e ? void 0 : e.getInstanceByContextId(this.getContextId(t, e), n).instance));
        }
        async loadPropertiesMetadata(e, t, r) {
          const s = await Promise.all(
              e.map(async ({ wrapper: e, key: s }) => ({ key: s, host: await this.resolveComponentHost(e.host, e, t, r) }))
            ),
            i = this.getInquirerId(r);
          return s.map(({ key: e, host: r }) => ({
            key: e,
            name: e,
            instance: r.getInstanceByContextId(this.getContextId(t, r), i).instance
          }));
        }
        getInquirerId(e) {
          return e && e.id;
        }
        resolveScopedComponentHost(e, t, r, s) {
          return this.isInquirerRequest(e, s) ? s : this.resolveComponentHost(e.host, e, t, r);
        }
        isInquirerRequest(e, t) {
          return e.isTransient && e.name === h.INQUIRER && t;
        }
        isInquirer(e, t) {
          return e === h.INQUIRER && t;
        }
        addDependencyMetadata(e, t, r) {
          (0, o.isSymbol)(e) || (0, o.isString)(e) ? t.addPropertiesMetadata(e, r) : t.addCtorMetadata(e, r);
        }
        getTokenName(e) {
          return (0, o.isFunction)(e) ? e.name : e.toString();
        }
        printResolvingDependenciesLog(e, t) {
          var r, s, i;
          if (!this.isDebugMode()) return;
          const n = this.getTokenName(e),
            o =
              null !== (i = (null == t ? void 0 : t.name) && (null === (s = (r = t.name).toString) || void 0 === s ? void 0 : s.call(r))) &&
              void 0 !== i
                ? i
                : "unknown",
            c = o === n,
            l = `Resolving dependency ${a.clc.cyanBright(n)}${a.clc.green(" in the ")}${a.clc.yellow(o)}${a.clc.green(
              " provider " + (c ? "(alias)" : "")
            )}`;
          this.logger.log(l);
        }
        printLookingForProviderLog(e, t) {
          var r, s;
          if (!this.isDebugMode()) return;
          const i = this.getTokenName(e),
            n =
              null !== (s = null === (r = null == t ? void 0 : t.metatype) || void 0 === r ? void 0 : r.name) && void 0 !== s
                ? s
                : "unknown";
          this.logger.log(`Looking for ${a.clc.cyanBright(i)}${a.clc.green(" in ")}${a.clc.magentaBright(n)}`);
        }
        printFoundInModuleLog(e, t) {
          var r, s;
          if (!this.isDebugMode()) return;
          const i = this.getTokenName(e),
            n =
              null !== (s = null === (r = null == t ? void 0 : t.metatype) || void 0 === r ? void 0 : r.name) && void 0 !== s
                ? s
                : "unknown";
          this.logger.log(`Found ${a.clc.cyanBright(i)}${a.clc.green(" in ")}${a.clc.magentaBright(n)}`);
        }
        isDebugMode() {
          return !!s.env.NEST_DEBUG;
        }
        getContextId(e, t) {
          return e.getParent ? e.getParent({ token: t.token, isTreeDurable: t.isDependencyTreeDurable() }) : e;
        }
      };
    },
    513324: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(127164), t);
    },
    127164: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.INQUIRER = void 0), (t.INQUIRER = "INQUIRER");
    },
    497178: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.inquirerProvider = void 0);
      const s = r(17988),
        i = r(127164);
      t.inquirerProvider = { provide: i.INQUIRER, scope: s.Scope.TRANSIENT, useFactory: () => {} };
    },
    731425: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InstanceLinksHost = void 0);
      const s = r(514046),
        i = r(939391);
      t.InstanceLinksHost = class {
        constructor(e) {
          (this.container = e), (this.instanceLinks = new Map()), this.initialize();
        }
        get(e, t = {}) {
          const r = this.instanceLinks.get(e);
          if (!r) throw new i.UnknownElementException(this.getInstanceNameByToken(e));
          if (t.each) return r;
          const s = t.moduleId ? r.find((e) => e.moduleId === t.moduleId) : r[r.length - 1];
          if (!s) throw new i.UnknownElementException(this.getInstanceNameByToken(e));
          return s;
        }
        initialize() {
          this.container.getModules().forEach((e) => {
            const { providers: t, injectables: r, controllers: s } = e;
            t.forEach((t, r) => this.addLink(t, r, e, "providers")),
              r.forEach((t, r) => this.addLink(t, r, e, "injectables")),
              s.forEach((t, r) => this.addLink(t, r, e, "controllers"));
          });
        }
        addLink(e, t, r, s) {
          const i = { moduleId: r.id, wrapperRef: e, collection: r[s], token: t },
            n = this.instanceLinks.get(t);
          n ? n.push(i) : this.instanceLinks.set(t, [i]);
        }
        getInstanceNameByToken(e) {
          return (0, s.isFunction)(e) ? (null == e ? void 0 : e.name) : e;
        }
      };
    },
    76903: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InstanceLoader = void 0);
      const s = r(17988),
        i = r(863172),
        n = r(672730);
      class a {
        constructor(e, t, r, i = new s.Logger(a.name, { timestamp: !0 })) {
          (this.container = e), (this.injector = t), (this.graphInspector = r), (this.logger = i);
        }
        setLogger(e) {
          this.logger = e;
        }
        async createInstancesOfDependencies(e = this.container.getModules()) {
          this.createPrototypes(e), await this.createInstances(e), this.graphInspector.inspectModules(e);
        }
        createPrototypes(e) {
          e.forEach((e) => {
            this.createPrototypesOfProviders(e), this.createPrototypesOfInjectables(e), this.createPrototypesOfControllers(e);
          });
        }
        async createInstances(e) {
          await Promise.all(
            [...e.values()].map(async (e) => {
              await this.createInstancesOfProviders(e),
                await this.createInstancesOfInjectables(e),
                await this.createInstancesOfControllers(e);
              const { name: t } = e;
              this.isModuleWhitelisted(t) && this.logger.log(i.MODULE_INIT_MESSAGE`${t}`);
            })
          );
        }
        createPrototypesOfProviders(e) {
          const { providers: t } = e;
          t.forEach((e) => this.injector.loadPrototype(e, t));
        }
        async createInstancesOfProviders(e) {
          const { providers: t } = e,
            r = [...t.values()];
          await Promise.all(
            r.map(async (t) => {
              await this.injector.loadProvider(t, e), this.graphInspector.inspectInstanceWrapper(t, e);
            })
          );
        }
        createPrototypesOfControllers(e) {
          const { controllers: t } = e;
          t.forEach((e) => this.injector.loadPrototype(e, t));
        }
        async createInstancesOfControllers(e) {
          const { controllers: t } = e,
            r = [...t.values()];
          await Promise.all(
            r.map(async (t) => {
              await this.injector.loadController(t, e), this.graphInspector.inspectInstanceWrapper(t, e);
            })
          );
        }
        createPrototypesOfInjectables(e) {
          const { injectables: t } = e;
          t.forEach((e) => this.injector.loadPrototype(e, t));
        }
        async createInstancesOfInjectables(e) {
          const { injectables: t } = e,
            r = [...t.values()];
          await Promise.all(
            r.map(async (t) => {
              await this.injector.loadInjectable(t, e), this.graphInspector.inspectInstanceWrapper(t, e);
            })
          );
        }
        isModuleWhitelisted(e) {
          return e !== n.InternalCoreModule.name;
        }
      }
      t.InstanceLoader = a;
    },
    119573: (e, t, r) => {
      "use strict";
      var s,
        i = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InstanceWrapper = t.INSTANCE_ID_SYMBOL = t.INSTANCE_METADATA_SYMBOL = void 0);
      const n = r(488802),
        a = r(17988),
        o = r(181610),
        c = r(695562),
        l = r(514046),
        u = r(573073),
        d = r(641521),
        p = r(220692),
        h = r(792596);
      (t.INSTANCE_METADATA_SYMBOL = Symbol.for("instance_metadata:cache")), (t.INSTANCE_ID_SYMBOL = Symbol.for("instance_metadata:id"));
      class f {
        constructor(e = {}) {
          var r;
          (this.isAlias = !1),
            (this.scope = a.Scope.DEFAULT),
            (this.values = new WeakMap()),
            (this[s] = {}),
            this.initialize(e),
            (this[t.INSTANCE_ID_SYMBOL] = null !== (r = e[t.INSTANCE_ID_SYMBOL]) && void 0 !== r ? r : this.generateUuid());
        }
        get id() {
          return this[t.INSTANCE_ID_SYMBOL];
        }
        set instance(e) {
          this.values.set(p.STATIC_CONTEXT, { instance: e });
        }
        get instance() {
          return this.getInstanceByContextId(p.STATIC_CONTEXT).instance;
        }
        get isNotMetatype() {
          const e = this.metatype && !(0, l.isNil)(this.inject);
          return !this.metatype || e;
        }
        get isTransient() {
          return this.scope === a.Scope.TRANSIENT;
        }
        getInstanceByContextId(e, t) {
          if (this.scope === a.Scope.TRANSIENT && t) return this.getInstanceByInquirerId(e, t);
          return this.values.get(e) || this.cloneStaticInstance(e);
        }
        getInstanceByInquirerId(e, t) {
          let r = this.transientMap.get(t);
          r || ((r = new WeakMap()), this.transientMap.set(t, r));
          return r.get(e) || this.cloneTransientInstance(e, t);
        }
        setInstanceByContextId(e, t, r) {
          if (this.scope === a.Scope.TRANSIENT && r) return this.setInstanceByInquirerId(e, r, t);
          this.values.set(e, t);
        }
        setInstanceByInquirerId(e, t, r) {
          let s = this.transientMap.get(t);
          s || ((s = new WeakMap()), this.transientMap.set(t, s)), s.set(e, r);
        }
        addCtorMetadata(e, r) {
          this[t.INSTANCE_METADATA_SYMBOL].dependencies || (this[t.INSTANCE_METADATA_SYMBOL].dependencies = []),
            (this[t.INSTANCE_METADATA_SYMBOL].dependencies[e] = r);
        }
        getCtorMetadata() {
          return this[t.INSTANCE_METADATA_SYMBOL].dependencies;
        }
        addPropertiesMetadata(e, r) {
          this[t.INSTANCE_METADATA_SYMBOL].properties || (this[t.INSTANCE_METADATA_SYMBOL].properties = []),
            this[t.INSTANCE_METADATA_SYMBOL].properties.push({ key: e, wrapper: r });
        }
        getPropertiesMetadata() {
          return this[t.INSTANCE_METADATA_SYMBOL].properties;
        }
        addEnhancerMetadata(e) {
          this[t.INSTANCE_METADATA_SYMBOL].enhancers || (this[t.INSTANCE_METADATA_SYMBOL].enhancers = []),
            this[t.INSTANCE_METADATA_SYMBOL].enhancers.push(e);
        }
        getEnhancersMetadata() {
          return this[t.INSTANCE_METADATA_SYMBOL].enhancers;
        }
        isDependencyTreeDurable(e = []) {
          if (!(0, l.isUndefined)(this.isTreeDurable)) return this.isTreeDurable;
          if (!0 === this.durable) return (this.isTreeDurable = !0), this.printIntrospectedAsDurable(), this.isTreeDurable;
          if (this.isDependencyTreeStatic()) return !1;
          const t = this.introspectDepsAttribute((e, t) => e.some((e) => !e.isDependencyTreeStatic() && !e.isDependencyTreeDurable(t)), e);
          return (
            (this.isTreeDurable = !t && !1 !== this.durable), this.isTreeDurable && this.printIntrospectedAsDurable(), this.isTreeDurable
          );
        }
        introspectDepsAttribute(e, r = []) {
          if (r.includes(this[t.INSTANCE_ID_SYMBOL])) return !0;
          r = r.concat(this[t.INSTANCE_ID_SYMBOL]);
          const { dependencies: s, properties: i, enhancers: n } = this[t.INSTANCE_METADATA_SYMBOL];
          let a = (s && e(s, r)) || !s;
          return a && (i || n)
            ? ((i || []).map((e) => e.wrapper),
              (a =
                a &&
                ((i &&
                  e(
                    i.map((e) => e.wrapper),
                    r
                  )) ||
                  !i)),
              a && n ? e(n, r) : a)
            : a;
        }
        isDependencyTreeStatic(e = []) {
          return (0, l.isUndefined)(this.isTreeStatic)
            ? this.scope === a.Scope.REQUEST
              ? ((this.isTreeStatic = !1), this.printIntrospectedAsRequestScoped(), this.isTreeStatic)
              : ((this.isTreeStatic = this.introspectDepsAttribute((e, t) => e.every((e) => e.isDependencyTreeStatic(t)), e)),
                this.isTreeStatic || this.printIntrospectedAsRequestScoped(),
                this.isTreeStatic)
            : this.isTreeStatic;
        }
        cloneStaticInstance(e) {
          const t = this.getInstanceByContextId(p.STATIC_CONTEXT);
          if (this.isDependencyTreeStatic()) return t;
          const r = Object.assign(Object.assign({}, t), { instance: void 0, isResolved: !1, isPending: !1 });
          return this.isNewable() && (r.instance = Object.create(this.metatype.prototype)), this.setInstanceByContextId(e, r), r;
        }
        cloneTransientInstance(e, t) {
          const r = this.getInstanceByContextId(p.STATIC_CONTEXT),
            s = Object.assign(Object.assign({}, r), { instance: void 0, isResolved: !1, isPending: !1 });
          return this.isNewable() && (s.instance = Object.create(this.metatype.prototype)), this.setInstanceByInquirerId(e, t, s), s;
        }
        createPrototype(e) {
          const t = this.getInstanceByContextId(e);
          if (this.isNewable() && !t.isResolved) return Object.create(this.metatype.prototype);
        }
        isInRequestScope(e, t) {
          return !this.isDependencyTreeStatic() && e !== p.STATIC_CONTEXT && (!this.isTransient || (this.isTransient && !!t));
        }
        isLazyTransient(e, t) {
          const r = t && !t.isDependencyTreeStatic();
          return this.isDependencyTreeStatic() && e !== p.STATIC_CONTEXT && this.isTransient && r;
        }
        isExplicitlyRequested(e, t) {
          const r = t === this;
          return this.isDependencyTreeStatic() && e !== p.STATIC_CONTEXT && (r || (t && t.scope === a.Scope.TRANSIENT));
        }
        isStatic(e, t) {
          const r = t && !t.isDependencyTreeStatic(),
            s = this.isTransient && !r;
          return this.isDependencyTreeStatic() && e === p.STATIC_CONTEXT && (!this.isTransient || (s && !!t && !t.isTransient));
        }
        getStaticTransientInstances() {
          if (!this.transientMap) return [];
          const e = [...this.transientMap.values()];
          return (0, u.iterate)(e)
            .map((e) => e.get(p.STATIC_CONTEXT))
            .filter((e) => !!e)
            .toArray();
        }
        mergeWith(e) {
          (0, h.isValueProvider)(e)
            ? ((this.metatype = null),
              (this.inject = null),
              (this.scope = a.Scope.DEFAULT),
              this.setInstanceByContextId(p.STATIC_CONTEXT, { instance: e.useValue, isResolved: !0, isPending: !1 }))
            : (0, h.isClassProvider)(e)
            ? ((this.inject = null), (this.metatype = e.useClass))
            : (0, h.isFactoryProvider)(e) && ((this.metatype = e.useFactory), (this.inject = e.inject || []));
        }
        isNewable() {
          return (0, l.isNil)(this.inject) && this.metatype && this.metatype.prototype;
        }
        initialize(e) {
          const { instance: t, isResolved: r } = e,
            s = n.__rest(e, ["instance", "isResolved"]);
          Object.assign(this, s),
            this.setInstanceByContextId(p.STATIC_CONTEXT, { instance: t, isResolved: r }),
            this.scope === a.Scope.TRANSIENT && (this.transientMap = new Map());
        }
        printIntrospectedAsRequestScoped() {
          this.isDebugMode() &&
            "REQUEST" !== this.name &&
            (0, l.isString)(this.name) &&
            f.logger.log(`${o.clc.cyanBright(this.name)}${o.clc.green(" introspected as ")}${o.clc.magentaBright("request-scoped")}`);
        }
        printIntrospectedAsDurable() {
          this.isDebugMode() &&
            (0, l.isString)(this.name) &&
            f.logger.log(`${o.clc.cyanBright(this.name)}${o.clc.green(" introspected as ")}${o.clc.magentaBright("durable")}`);
        }
        isDebugMode() {
          return !!i.env.NEST_DEBUG;
        }
        generateUuid() {
          var e, t, r, s, i;
          let n =
            null !== (t = null === (e = this.name) || void 0 === e ? void 0 : e.toString()) && void 0 !== t
              ? t
              : null === (r = this.token) || void 0 === r
              ? void 0
              : r.toString();
          return (
            (n += null !== (i = null === (s = this.host) || void 0 === s ? void 0 : s.name) && void 0 !== i ? i : ""),
            n ? d.UuidFactory.get(n) : (0, c.randomStringGenerator)()
          );
        }
      }
      (t.InstanceWrapper = f), (s = t.INSTANCE_METADATA_SYMBOL), (f.logger = new a.Logger(f.name));
    },
    126878: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InternalCoreModuleFactory = void 0);
      const s = r(17988),
        i = r(596554),
        n = r(235877),
        a = r(820855),
        o = r(252516),
        c = r(76903),
        l = r(317935),
        u = r(973640),
        d = r(672730);
      t.InternalCoreModuleFactory = class {
        static create(e, t, r, p, h) {
          return d.InternalCoreModule.register([
            { provide: i.ExternalContextCreator, useValue: i.ExternalContextCreator.fromContainer(e) },
            { provide: u.ModulesContainer, useValue: e.getModules() },
            { provide: n.HttpAdapterHost, useValue: p },
            { provide: n.HttpAdapterHost.name, useExisting: n.HttpAdapterHost },
            {
              provide: l.LazyModuleLoader,
              useFactory: () => {
                const i = new s.Logger(l.LazyModuleLoader.name, { timestamp: !1 }),
                  n = new o.Injector(),
                  a = new c.InstanceLoader(e, n, h, i);
                return new l.LazyModuleLoader(t, a, r, e.getModules());
              }
            },
            { provide: a.SerializedGraph, useValue: e.serializedGraph }
          ]);
        }
      };
    },
    672730: (e, t, r) => {
      "use strict";
      var s;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InternalCoreModule = void 0);
      const i = r(488802),
        n = r(17988),
        a = r(160176),
        o = r(651573),
        c = r(497178),
        l = { provide: o.Reflector.name, useExisting: o.Reflector };
      let u = (s = class {
        static register(e) {
          return { module: s, providers: [...e], exports: [...e.map((e) => e.provide)] };
        }
      });
      (u = s =
        i.__decorate(
          [
            (0, n.Global)(),
            (0, n.Module)({
              providers: [o.Reflector, l, a.requestProvider, c.inquirerProvider],
              exports: [o.Reflector, l, a.requestProvider, c.inquirerProvider]
            })
          ],
          u
        )),
        (t.InternalCoreModule = u);
    },
    231622: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InternalProvidersStorage = void 0);
      const s = r(235877);
      t.InternalProvidersStorage = class {
        constructor() {
          this._httpAdapterHost = new s.HttpAdapterHost();
        }
        get httpAdapterHost() {
          return this._httpAdapterHost;
        }
        get httpAdapter() {
          return this._httpAdapter;
        }
        set httpAdapter(e) {
          this._httpAdapter = e;
        }
      };
    },
    317935: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LazyModuleLoader = void 0);
      const s = r(734577),
        i = r(839878);
      t.LazyModuleLoader = class {
        constructor(e, t, r, s) {
          (this.dependenciesScanner = e), (this.instanceLoader = t), (this.moduleCompiler = r), (this.modulesContainer = s);
        }
        async load(e, t) {
          this.registerLoggerConfiguration(t);
          const r = await e(),
            s = await this.dependenciesScanner.scanForModules(r);
          if (0 === s.length) {
            const { token: e } = await this.moduleCompiler.compile(r),
              t = this.modulesContainer.get(e);
            return t && this.getTargetModuleRef(t);
          }
          const i = this.createLazyModulesContainer(s);
          await this.dependenciesScanner.scanModulesForDependencies(i), await this.instanceLoader.createInstancesOfDependencies(i);
          const [n] = s;
          return this.getTargetModuleRef(n);
        }
        registerLoggerConfiguration(e) {
          !1 === (null == e ? void 0 : e.logger) && this.instanceLoader.setLogger(new s.SilentLogger());
        }
        createLazyModulesContainer(e) {
          return (e = Array.from(new Set(e))), new Map(e.map((e) => [e.token, e]));
        }
        getTargetModuleRef(e) {
          return e.getProviderByKey(i.ModuleRef).instance;
        }
      };
    },
    839878: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ModuleRef = void 0);
      const s = r(17988),
        i = r(165359),
        n = r(452880),
        a = r(237898),
        o = r(252516),
        c = r(731425),
        l = r(119573);
      class u extends a.AbstractInstanceResolver {
        get instanceLinksHost() {
          return this._instanceLinksHost || (this._instanceLinksHost = new c.InstanceLinksHost(this.container)), this._instanceLinksHost;
        }
        constructor(e) {
          super(), (this.container = e), (this.injector = new o.Injector());
        }
        introspect(e) {
          const { wrapperRef: t } = this.instanceLinksHost.get(e);
          let r = s.Scope.DEFAULT;
          return t.isDependencyTreeStatic() ? t.isTransient && (r = s.Scope.TRANSIENT) : (r = s.Scope.REQUEST), { scope: r };
        }
        registerRequestByContextId(e, t) {
          this.container.registerRequestProvider(e, t);
        }
        async instantiateClass(e, t) {
          const r = new l.InstanceWrapper({
            name: e && e.name,
            metatype: e,
            isResolved: !1,
            scope: (0, i.getClassScope)(e),
            durable: (0, n.isDurable)(e),
            host: t
          });
          return new Promise(async (s, i) => {
            try {
              const i = async (i) => {
                const n = await this.injector.resolveProperties(r, t),
                  a = new e(...i);
                this.injector.applyProperties(a, n), s(a);
              };
              await this.injector.resolveConstructorParams(r, t, void 0, i);
            } catch (e) {
              i(e);
            }
          });
        }
      }
      t.ModuleRef = u;
    },
    389585: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ModuleTokenFactory = void 0);
      const s = r(695562),
        i = r(514046),
        n = r(104329),
        a = r(726177);
      t.ModuleTokenFactory = class {
        constructor() {
          this.moduleIdsCache = new WeakMap();
        }
        create(e, t) {
          const r = { id: this.getModuleId(e), module: this.getModuleName(e), dynamic: this.getDynamicMetadataToken(t) };
          return a(r, { ignoreUnknown: !0 });
        }
        getDynamicMetadataToken(e) {
          return e ? (0, n.default)(e, this.replacer) : "";
        }
        getModuleId(e) {
          let t = this.moduleIdsCache.get(e);
          return t || ((t = (0, s.randomStringGenerator)()), this.moduleIdsCache.set(e, t), t);
        }
        getModuleName(e) {
          return e.name;
        }
        replacer(e, t) {
          if ((0, i.isFunction)(t)) {
            const e = t.toString();
            return /^class\s/.test(e) ? t.name : a(e, { ignoreUnknown: !0 });
          }
          return (0, i.isSymbol)(t) ? t.toString() : t;
        }
      };
    },
    682916: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Module = void 0);
      const s = r(695562),
        i = r(514046),
        n = r(573073),
        a = r(136633),
        o = r(227641),
        c = r(269654),
        l = r(165359),
        u = r(452880),
        d = r(641521),
        p = r(220692),
        h = r(119573),
        f = r(839878);
      t.Module = class {
        constructor(e, t) {
          (this._metatype = e),
            (this.container = t),
            (this._imports = new Set()),
            (this._providers = new Map()),
            (this._injectables = new Map()),
            (this._middlewares = new Map()),
            (this._controllers = new Map()),
            (this._exports = new Set()),
            (this._distance = 0),
            (this._isGlobal = !1),
            this.addCoreProviders(),
            (this._id = this.generateUuid());
        }
        get id() {
          return this._id;
        }
        get token() {
          return this._token;
        }
        set token(e) {
          this._token = e;
        }
        get name() {
          return this.metatype.name;
        }
        get isGlobal() {
          return this._isGlobal;
        }
        set isGlobal(e) {
          this._isGlobal = e;
        }
        get providers() {
          return this._providers;
        }
        get middlewares() {
          return this._middlewares;
        }
        get imports() {
          return this._imports;
        }
        get relatedModules() {
          return this._imports;
        }
        get components() {
          return this._providers;
        }
        get routes() {
          return this._controllers;
        }
        get injectables() {
          return this._injectables;
        }
        get controllers() {
          return this._controllers;
        }
        get exports() {
          return this._exports;
        }
        get instance() {
          if (!this._providers.has(this._metatype)) throw new o.RuntimeException();
          return this._providers.get(this._metatype).instance;
        }
        get metatype() {
          return this._metatype;
        }
        get distance() {
          return this._distance;
        }
        set distance(e) {
          this._distance = e;
        }
        addCoreProviders() {
          this.addModuleAsProvider(), this.addModuleRef(), this.addApplicationConfig();
        }
        addModuleRef() {
          const e = this.createModuleReferenceType();
          this._providers.set(
            f.ModuleRef,
            new h.InstanceWrapper({
              token: f.ModuleRef,
              name: f.ModuleRef.name,
              metatype: f.ModuleRef,
              isResolved: !0,
              instance: new e(),
              host: this
            })
          );
        }
        addModuleAsProvider() {
          this._providers.set(
            this._metatype,
            new h.InstanceWrapper({
              token: this._metatype,
              name: this._metatype.name,
              metatype: this._metatype,
              isResolved: !1,
              instance: null,
              host: this
            })
          );
        }
        addApplicationConfig() {
          this._providers.set(
            a.ApplicationConfig,
            new h.InstanceWrapper({
              token: a.ApplicationConfig,
              name: a.ApplicationConfig.name,
              isResolved: !0,
              instance: this.container.applicationConfig,
              host: this
            })
          );
        }
        addInjectable(e, t, r) {
          if (this.isCustomProvider(e)) return this.addCustomProvider(e, this._injectables);
          let s = this.injectables.get(e);
          if (
            (s ||
              ((s = new h.InstanceWrapper({
                token: e,
                name: e.name,
                metatype: e,
                instance: null,
                isResolved: !1,
                scope: (0, l.getClassScope)(e),
                durable: (0, u.isDurable)(e),
                subtype: t,
                host: this
              })),
              this._injectables.set(e, s)),
            r)
          ) {
            const e = this._controllers.get(r) || this._providers.get(r);
            e && e.addEnhancerMetadata(s);
          }
          return s;
        }
        addProvider(e, t) {
          return this.isCustomProvider(e)
            ? this.addCustomProvider(e, this._providers, t)
            : (this._providers.set(
                e,
                new h.InstanceWrapper({
                  token: e,
                  name: e.name,
                  metatype: e,
                  instance: null,
                  isResolved: !1,
                  scope: (0, l.getClassScope)(e),
                  durable: (0, u.isDurable)(e),
                  host: this
                })
              ),
              e);
        }
        isCustomProvider(e) {
          return !(0, i.isNil)(e.provide);
        }
        addCustomProvider(e, t, r) {
          return (
            this.isCustomClass(e)
              ? this.addCustomClass(e, t, r)
              : this.isCustomValue(e)
              ? this.addCustomValue(e, t, r)
              : this.isCustomFactory(e)
              ? this.addCustomFactory(e, t, r)
              : this.isCustomUseExisting(e) && this.addCustomUseExisting(e, t, r),
            e.provide
          );
        }
        isCustomClass(e) {
          return !(0, i.isUndefined)(e.useClass);
        }
        isCustomValue(e) {
          return !(0, i.isUndefined)(e.useValue);
        }
        isCustomFactory(e) {
          return !(0, i.isUndefined)(e.useFactory);
        }
        isCustomUseExisting(e) {
          return !(0, i.isUndefined)(e.useExisting);
        }
        isDynamicModule(e) {
          return e && e.module;
        }
        addCustomClass(e, t, r) {
          let { scope: s, durable: n } = e;
          const { useClass: a } = e;
          (0, i.isUndefined)(s) && (s = (0, l.getClassScope)(a)),
            (0, i.isUndefined)(n) && (n = (0, u.isDurable)(a)),
            t.set(
              e.provide,
              new h.InstanceWrapper({
                token: e.provide,
                name: (null == a ? void 0 : a.name) || a,
                metatype: a,
                instance: null,
                isResolved: !1,
                scope: s,
                durable: n,
                host: this,
                subtype: r
              })
            );
        }
        addCustomValue(e, t, r) {
          const { useValue: s, provide: i } = e;
          t.set(
            i,
            new h.InstanceWrapper({
              token: i,
              name: (null == i ? void 0 : i.name) || i,
              metatype: null,
              instance: s,
              isResolved: !0,
              async: s instanceof Promise,
              host: this,
              subtype: r
            })
          );
        }
        addCustomFactory(e, t, r) {
          const { useFactory: s, inject: i, scope: n, durable: a, provide: o } = e;
          t.set(
            o,
            new h.InstanceWrapper({
              token: o,
              name: (null == o ? void 0 : o.name) || o,
              metatype: s,
              instance: null,
              isResolved: !1,
              inject: i || [],
              scope: n,
              durable: a,
              host: this,
              subtype: r
            })
          );
        }
        addCustomUseExisting(e, t, r) {
          const { useExisting: s, provide: i } = e;
          t.set(
            i,
            new h.InstanceWrapper({
              token: i,
              name: (null == i ? void 0 : i.name) || i,
              metatype: (e) => e,
              instance: null,
              isResolved: !1,
              inject: [s],
              host: this,
              isAlias: !0,
              subtype: r
            })
          );
        }
        addExportedProvider(e) {
          const t = (e) => this._exports.add(this.validateExportedProvider(e));
          if (this.isCustomProvider(e)) return this.addCustomExportedProvider(e);
          if ((0, i.isString)(e) || (0, i.isSymbol)(e)) return t(e);
          if (this.isDynamicModule(e)) {
            const { module: r } = e;
            return t(r);
          }
          t(e);
        }
        addCustomExportedProvider(e) {
          const t = e.provide;
          if ((0, i.isString)(t) || (0, i.isSymbol)(t)) return this._exports.add(this.validateExportedProvider(t));
          this._exports.add(this.validateExportedProvider(t));
        }
        validateExportedProvider(e) {
          if (this._providers.has(e)) return e;
          if (
            !(0, n.iterate)(this._imports.values())
              .filter((e) => !!e)
              .map(({ metatype: e }) => e)
              .filter((e) => !!e)
              .toArray()
              .includes(e)
          ) {
            const { name: t } = this.metatype,
              r = (0, i.isFunction)(e) ? e.name : e;
            throw new o.UnknownExportException(r, t);
          }
          return e;
        }
        addController(e) {
          this._controllers.set(
            e,
            new h.InstanceWrapper({
              token: e,
              name: e.name,
              metatype: e,
              instance: null,
              isResolved: !1,
              scope: (0, l.getClassScope)(e),
              durable: (0, u.isDurable)(e),
              host: this
            })
          ),
            this.assignControllerUniqueId(e);
        }
        assignControllerUniqueId(e) {
          Object.defineProperty(e, p.CONTROLLER_ID_KEY, {
            enumerable: !1,
            writable: !1,
            configurable: !0,
            value: (0, s.randomStringGenerator)()
          });
        }
        addRelatedModule(e) {
          this._imports.add(e);
        }
        replace(e, t) {
          return t.isProvider && this.hasProvider(e)
            ? this._providers.get(e).mergeWith(Object.assign({ provide: e }, t))
            : !t.isProvider && this.hasInjectable(e)
            ? this._injectables.get(e).mergeWith(Object.assign({ provide: e }, t))
            : void 0;
        }
        hasProvider(e) {
          return this._providers.has(e);
        }
        hasInjectable(e) {
          return this._injectables.has(e);
        }
        getProviderByKey(e) {
          return this._providers.get(e);
        }
        getProviderById(e) {
          return Array.from(this._providers.values()).find((t) => t.id === e);
        }
        getControllerById(e) {
          return Array.from(this._controllers.values()).find((t) => t.id === e);
        }
        getInjectableById(e) {
          return Array.from(this._injectables.values()).find((t) => t.id === e);
        }
        getMiddlewareById(e) {
          return Array.from(this._middlewares.values()).find((t) => t.id === e);
        }
        getNonAliasProviders() {
          return [...this._providers].filter(([e, t]) => !t.isAlias);
        }
        createModuleReferenceType() {
          const e = this;
          return class extends f.ModuleRef {
            constructor() {
              super(e.container);
            }
            get(t, r = {}) {
              var s, i;
              return (
                (null !== (s = r.strict) && void 0 !== s) || (r.strict = !0),
                (null !== (i = r.each) && void 0 !== i) || (r.each = !1),
                this.find(t, r.strict ? { moduleId: e.id, each: r.each } : r)
              );
            }
            resolve(t, r = (0, c.createContextId)(), s = {}) {
              var i, n;
              return (
                (null !== (i = s.strict) && void 0 !== i) || (s.strict = !0),
                (null !== (n = s.each) && void 0 !== n) || (s.each = !1),
                this.resolvePerContext(t, e, r, s)
              );
            }
            async create(t) {
              if (!(t && (0, i.isFunction)(t) && t.prototype)) throw new o.InvalidClassException(t);
              return this.instantiateClass(t, e);
            }
          };
        }
        generateUuid() {
          var e, t, r;
          const i =
            null !== (t = null === (e = this.name) || void 0 === e ? void 0 : e.toString()) && void 0 !== t
              ? t
              : null === (r = this.token) || void 0 === r
              ? void 0
              : r.toString();
          return i ? d.UuidFactory.get(i, "fb848993-0c82-4b9e-ae95-3c3c1dbe3d6b") : (0, s.randomStringGenerator)();
        }
      };
    },
    973640: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ModulesContainer = void 0);
      const s = r(585113);
      class i extends Map {
        constructor() {
          super(...arguments), (this._applicationId = (0, s.v4)());
        }
        get applicationId() {
          return this._applicationId;
        }
        getById(e) {
          return Array.from(this.values()).find((t) => t.id === e);
        }
      }
      t.ModulesContainer = i;
    },
    668416: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DeterministicUuidRegistry = void 0);
      const s = r(585113);
      class i {
        static get(e, t = "efa0df42-88af-474f-9cad-4206a2319f07", r = 0) {
          const i = r ? (0, s.v5)(e + `${r}`, t) : (0, s.v5)(e, t);
          return this.registry.has(i) ? this.get(e, t, r + 1) : (this.registry.add(i), i);
        }
        static clear() {
          this.registry.clear();
        }
      }
      (t.DeterministicUuidRegistry = i), (i.registry = new Set());
    },
    4550: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.GraphInspector = void 0);
      const s = r(668416);
      t.GraphInspector = class {
        constructor(e) {
          (this.container = e), (this.enhancersMetadataCache = new Array()), (this.graph = e.serializedGraph);
        }
        inspectModules(e = this.container.getModules()) {
          for (const t of e.values()) this.insertModuleNode(t), this.insertClassNodes(t), this.insertModuleToModuleEdges(t);
          this.enhancersMetadataCache.forEach((e) => this.insertEnhancerEdge(e)), s.DeterministicUuidRegistry.clear();
        }
        inspectInstanceWrapper(e, t) {
          const r = e.getCtorMetadata();
          null == r || r.forEach((r, s) => this.insertClassToClassEdge(e, r, t, s, "constructor"));
          const s = e.getPropertiesMetadata();
          null == s || s.forEach(({ key: r, wrapper: s }) => this.insertClassToClassEdge(e, s, t, r, "property"));
        }
        insertEnhancerMetadataCache(e) {
          this.enhancersMetadataCache.push(e);
        }
        insertOrphanedEnhancer(e) {
          var t, r, s;
          this.graph.insertOrphanedEnhancer(
            Object.assign(Object.assign({}, e), {
              ref:
                null !==
                  (s = null === (r = null === (t = e.ref) || void 0 === t ? void 0 : t.constructor) || void 0 === r ? void 0 : r.name) &&
                void 0 !== s
                  ? s
                  : "Object"
            })
          );
        }
        insertAttachedEnhancer(e) {
          const t = this.graph.getNodeById(e.id);
          (t.metadata.global = !0), this.graph.insertAttachedEnhancer(t.id);
        }
        insertEntrypointDefinition(e, t) {
          (e = Object.assign(Object.assign({}, e), { id: `${e.classNodeId}_${e.methodName}` })), this.graph.insertEntrypoint(e, t);
        }
        insertClassNode(e, t, r) {
          this.graph.insertNode({
            id: t.id,
            label: t.name,
            parent: e.id,
            metadata: {
              type: r,
              internal: t.metatype === e.metatype,
              sourceModuleName: e.name,
              durable: t.isDependencyTreeDurable(),
              static: t.isDependencyTreeStatic(),
              scope: t.scope,
              transient: t.isTransient,
              exported: e.exports.has(t.token),
              token: t.token,
              subtype: t.subtype
            }
          });
        }
        insertModuleNode(e) {
          const t = this.container.getDynamicMetadataByToken(e.token),
            r = {
              id: e.id,
              label: e.name,
              metadata: { type: "module", global: e.isGlobal, dynamic: !!t, internal: "InternalCoreModule" === e.name }
            };
          this.graph.insertNode(r);
        }
        insertModuleToModuleEdges(e) {
          for (const t of e.imports)
            this.graph.insertEdge({
              source: e.id,
              target: t.id,
              metadata: { type: "module-to-module", sourceModuleName: e.name, targetModuleName: t.name }
            });
        }
        insertEnhancerEdge(e) {
          var t, r, s, i;
          const n = this.container.getModuleByKey(e.moduleToken),
            a = null !== (t = n.controllers.get(e.classRef)) && void 0 !== t ? t : n.providers.get(e.classRef),
            o = this.graph.getNodeById(a.id),
            c = null !== (r = o.metadata.enhancers) && void 0 !== r ? r : [];
          if (e.enhancerInstanceWrapper)
            this.insertClassToClassEdge(a, e.enhancerInstanceWrapper, n, void 0, "decorator"),
              c.push({ id: e.enhancerInstanceWrapper.id, methodKey: e.methodKey, subtype: e.subtype });
          else {
            const t =
              null !== (i = null === (s = e.enhancerRef.constructor) || void 0 === s ? void 0 : s.name) && void 0 !== i
                ? i
                : e.enhancerRef.name;
            c.push({ name: t, methodKey: e.methodKey, subtype: e.subtype });
          }
          o.metadata.enhancers = c;
        }
        insertClassToClassEdge(e, t, r, s, i) {
          var n;
          this.graph.insertEdge({
            source: e.id,
            target: t.id,
            metadata: {
              type: "class-to-class",
              sourceModuleName: r.name,
              sourceClassName: e.name,
              targetClassName: t.name,
              sourceClassToken: e.token,
              targetClassToken: t.token,
              targetModuleName: null === (n = t.host) || void 0 === n ? void 0 : n.name,
              keyOrIndex: s,
              injectionType: i
            }
          });
        }
        insertClassNodes(e) {
          e.providers.forEach((t) => this.insertClassNode(e, t, "provider")),
            e.injectables.forEach((t) => this.insertClassNode(e, t, "injectable")),
            e.controllers.forEach((t) => this.insertClassNode(e, t, "controller"));
        }
      };
    },
    58964: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.NoopGraphInspector = void 0);
      const s = r(4550),
        i = () => {};
      t.NoopGraphInspector = new Proxy(s.GraphInspector.prototype, { get: () => i });
    },
    820855: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.SerializedGraph = void 0);
      const s = r(136633),
        i = r(596554),
        n = r(235877),
        a = r(127164),
        o = r(317935),
        c = r(839878),
        l = r(973640),
        u = r(965192),
        d = r(747350),
        p = r(668416);
      class h {
        constructor() {
          (this.nodes = new Map()),
            (this.edges = new Map()),
            (this.entrypoints = new Map()),
            (this.extras = { orphanedEnhancers: [], attachedEnhancers: [] });
        }
        insertNode(e) {
          return (
            "provider" === e.metadata.type &&
              h.INTERNAL_PROVIDERS.includes(e.metadata.token) &&
              (e.metadata = Object.assign(Object.assign({}, e.metadata), { internal: !0 })),
            this.nodes.has(e.id) ? this.nodes.get(e.id) : (this.nodes.set(e.id, e), e)
          );
        }
        insertEdge(e) {
          var t;
          "class-to-class" === e.metadata.type &&
            (h.INTERNAL_PROVIDERS.includes(e.metadata.sourceClassToken) || h.INTERNAL_PROVIDERS.includes(e.metadata.targetClassToken)) &&
            (e.metadata = Object.assign(Object.assign({}, e.metadata), { internal: !0 }));
          const r = null !== (t = e.id) && void 0 !== t ? t : this.generateUuidByEdgeDefinition(e),
            s = Object.assign(Object.assign({}, e), { id: r });
          return this.edges.set(r, s), s;
        }
        insertEntrypoint(e, t) {
          this.entrypoints.has(t) ? this.entrypoints.get(t).push(e) : this.entrypoints.set(t, [e]);
        }
        insertOrphanedEnhancer(e) {
          this.extras.orphanedEnhancers.push(e);
        }
        insertAttachedEnhancer(e) {
          this.extras.attachedEnhancers.push({ nodeId: e });
        }
        getNodeById(e) {
          return this.nodes.get(e);
        }
        toJSON() {
          return {
            nodes: Object.fromEntries(this.nodes),
            edges: Object.fromEntries(this.edges),
            entrypoints: Object.fromEntries(this.entrypoints),
            extras: this.extras
          };
        }
        toString() {
          return JSON.stringify(
            this.toJSON(),
            (e, t) => {
              var r;
              return "symbol" == typeof t
                ? t.toString()
                : "function" == typeof t
                ? null !== (r = t.name) && void 0 !== r
                  ? r
                  : "Function"
                : t;
            },
            2
          );
        }
        generateUuidByEdgeDefinition(e) {
          return p.DeterministicUuidRegistry.get(JSON.stringify(e), "7a6d19ab-ec88-419f-a833-062532c468a7");
        }
      }
      (t.SerializedGraph = h),
        (h.INTERNAL_PROVIDERS = [
          s.ApplicationConfig,
          c.ModuleRef,
          n.HttpAdapterHost,
          o.LazyModuleLoader,
          i.ExternalContextCreator,
          l.ModulesContainer,
          d.Reflector,
          h,
          n.HttpAdapterHost.name,
          d.Reflector.name,
          u.REQUEST,
          a.INQUIRER
        ]);
    },
    641521: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UuidFactory = t.UuidFactoryMode = void 0);
      const s = r(695562),
        i = r(668416);
      var n;
      !(function (e) {
        (e.Random = "random"), (e.Deterministic = "deterministic");
      })((n = t.UuidFactoryMode || (t.UuidFactoryMode = {})));
      class a {
        static set mode(e) {
          this._mode = e;
        }
        static get(e = "", t) {
          return this._mode === n.Deterministic ? i.DeterministicUuidRegistry.get(e, t) : (0, s.randomStringGenerator)();
        }
      }
      (t.UuidFactory = a), (a._mode = n.Random);
    },
    575191: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(382565), t), s.__exportStar(r(544387), t);
    },
    382565: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InterceptorsConsumer = void 0);
      const s = r(514046),
        i = r(518948),
        n = r(903343),
        a = r(115314);
      t.InterceptorsConsumer = class {
        async intercept(e, t, r, a, o, c) {
          if ((0, s.isEmpty)(e)) return o();
          const l = this.createContext(t, r, a);
          l.setType(c);
          const u = (0, i.defer)(() => this.transformDeferred(o)),
            d =
              (t = 0) =>
              async () => {
                if (t >= e.length) return u;
                const r = { handle: () => (0, i.from)(d(t + 1)()).pipe((0, n.mergeAll)()) };
                return e[t].intercept(l, r);
              };
          return d()();
        }
        createContext(e, t, r) {
          return new a.ExecutionContextHost(e, t.constructor, r);
        }
        transformDeferred(e) {
          return (0, i.from)(e()).pipe(
            (0, n.switchMap)((e) => (e instanceof Promise || e instanceof i.Observable ? e : Promise.resolve(e)))
          );
        }
      };
    },
    544387: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.InterceptorsContextCreator = void 0);
      const s = r(545911),
        i = r(514046),
        n = r(573073),
        a = r(28313),
        o = r(220692);
      class c extends a.ContextCreator {
        constructor(e, t) {
          super(), (this.container = e), (this.config = t);
        }
        create(e, t, r, i = o.STATIC_CONTEXT, n) {
          return (this.moduleContext = r), this.createContext(e, t, s.INTERCEPTORS_METADATA, i, n);
        }
        createConcreteContext(e, t = o.STATIC_CONTEXT, r) {
          return (0, i.isEmpty)(e)
            ? []
            : (0, n.iterate)(e)
                .filter((e) => e && (e.name || e.intercept))
                .map((e) => this.getInterceptorInstance(e, t, r))
                .filter((e) => e && (0, i.isFunction)(e.intercept))
                .toArray();
        }
        getInterceptorInstance(e, t = o.STATIC_CONTEXT, r) {
          if (e.intercept) return e;
          const s = this.getInstanceByMetatype(e);
          if (!s) return null;
          const i = s.getInstanceByContextId(t, r);
          return i && i.instance;
        }
        getInstanceByMetatype(e) {
          if (!this.moduleContext) return;
          const t = this.container.getModules().get(this.moduleContext);
          return t ? t.injectables.get(e) : void 0;
        }
        getGlobalMetadata(e = o.STATIC_CONTEXT, t) {
          if (!this.config) return [];
          const r = this.config.getGlobalInterceptors();
          if (e === o.STATIC_CONTEXT && !t) return r;
          const s = this.config.getGlobalRequestInterceptors(),
            i = (0, n.iterate)(s)
              .map((r) => r.getInstanceByContextId(e, t))
              .filter((e) => !!e)
              .map((e) => e.instance)
              .toArray();
          return r.concat(i);
        }
      }
      t.InterceptorsContextCreator = c;
    },
    122443: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MetadataScanner = void 0);
      const s = r(514046),
        i = r(573073);
      t.MetadataScanner = class {
        scanFromPrototype(e, t, r) {
          const n = new Set(this.getAllFilteredMethodNames(t));
          return (0, i.iterate)(n)
            .map(r)
            .filter((e) => !(0, s.isNil)(e))
            .toArray();
        }
        *getAllFilteredMethodNames(e) {
          const t = (t) => {
            const r = Object.getOwnPropertyDescriptor(e, t);
            return !r.set && !r.get && !(0, s.isConstructor)(t) && (0, s.isFunction)(e[t]);
          };
          do {
            yield* (0, i.iterate)(Object.getOwnPropertyNames(e)).filter(t).toArray();
          } while ((e = Reflect.getPrototypeOf(e)) && e !== Object.prototype);
        }
      };
    },
    858196: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MiddlewareBuilder = void 0);
      const s = r(385281),
        i = r(573073),
        n = r(363509);
      class a {
        constructor(e, t) {
          (this.routesMapper = e), (this.httpAdapter = t), (this.middlewareCollection = new Set());
        }
        apply(...e) {
          return new a.ConfigProxy(this, (0, s.flatten)(e));
        }
        build() {
          return [...this.middlewareCollection];
        }
        getHttpAdapter() {
          return this.httpAdapter;
        }
      }
      (t.MiddlewareBuilder = a),
        (a.ConfigProxy = class {
          constructor(e, t) {
            (this.builder = e), (this.middleware = t), (this.excludedRoutes = []);
          }
          getExcludedRoutes() {
            return this.excludedRoutes;
          }
          exclude(...e) {
            return (this.excludedRoutes = this.getRoutesFlatList(e)), this;
          }
          forRoutes(...e) {
            const { middlewareCollection: t } = this.builder,
              r = this.getRoutesFlatList(e),
              s = {
                middleware: (0, n.filterMiddleware)(this.middleware, this.excludedRoutes, this.builder.getHttpAdapter()),
                forRoutes: r
              };
            return t.add(s), this.builder;
          }
          getRoutesFlatList(e) {
            const { routesMapper: t } = this.builder;
            return (0, i.iterate)(e)
              .map((e) => t.mapRouteToRouteInfo(e))
              .flatten()
              .toArray();
          }
        });
    },
    568920: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MiddlewareContainer = void 0);
      const s = r(165359),
        i = r(452880),
        n = r(119573);
      t.MiddlewareContainer = class {
        constructor(e) {
          (this.container = e), (this.middleware = new Map()), (this.configurationSets = new Map());
        }
        getMiddlewareCollection(e) {
          if (!this.middleware.has(e)) {
            const t = this.container.getModuleByKey(e);
            this.middleware.set(e, t.middlewares);
          }
          return this.middleware.get(e);
        }
        getConfigurations() {
          return this.configurationSets;
        }
        insertConfig(e, t) {
          const r = this.getMiddlewareCollection(t),
            a = this.getTargetConfig(t),
            o = (e) => {
              var t;
              const a = e;
              r.set(
                a,
                new n.InstanceWrapper({
                  scope: (0, s.getClassScope)(e),
                  durable: (0, i.isDurable)(e),
                  name: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : a,
                  metatype: e,
                  token: a
                })
              );
            };
          (e || []).forEach((e) => {
            [].concat(e.middleware).map(o), a.add(e);
          });
        }
        getTargetConfig(e) {
          return this.configurationSets.has(e) || this.configurationSets.set(e, new Set()), this.configurationSets.get(e);
        }
      };
    },
    373238: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(858196), t);
    },
    154329: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MiddlewareModule = void 0);
      const s = r(17988),
        i = r(446116),
        n = r(514046),
        a = r(879178),
        o = r(300780),
        c = r(269654),
        l = r(115314),
        u = r(220692),
        d = r(965192),
        p = r(21429),
        h = r(610134),
        f = r(748547),
        g = r(858196),
        y = r(905948),
        E = r(813085),
        m = r(854741);
      class v {
        constructor() {
          (this.routerProxy = new h.RouterProxy()), (this.exceptionFiltersCache = new WeakMap()), (this.logger = new s.Logger(v.name));
        }
        async register(e, t, r, s, i, n, a) {
          this.appOptions = a;
          const o = t.getHttpAdapterRef();
          (this.routerExceptionFilter = new p.RouterExceptionFilters(t, r, o)),
            (this.routesMapper = new m.RoutesMapper(t)),
            (this.resolver = new y.MiddlewareResolver(e, s)),
            (this.routeInfoPathExtractor = new E.RouteInfoPathExtractor(r)),
            (this.injector = s),
            (this.container = t),
            (this.httpAdapter = i),
            (this.graphInspector = n);
          const c = t.getModules();
          await this.resolveMiddleware(e, c);
        }
        async resolveMiddleware(e, t) {
          const r = [...t.entries()];
          await Promise.all(
            r.map(async ([t, r]) => {
              await this.loadConfiguration(e, r, t), await this.resolver.resolveInstances(r, t);
            })
          );
        }
        async loadConfiguration(e, t, r) {
          const { instance: s } = t;
          if (!s.configure) return;
          const i = new g.MiddlewareBuilder(this.routesMapper, this.httpAdapter);
          try {
            await s.configure(i);
          } catch (e) {
            if (!this.appOptions.preview) throw e;
            const r = `Warning! "${t.name}" module exposes a "configure" method that throws an exception in the preview mode (possibly due to missing dependencies). Note: you can ignore this message, just be aware that some of those conditional middlewares will not be reflected in your graph.`;
            this.logger.warn(r);
          }
          if (!(i instanceof g.MiddlewareBuilder)) return;
          const n = i.build();
          e.insertConfig(n, r);
        }
        async registerMiddleware(e, t) {
          const r = async (r, s) => {
              for (const i of s) await this.registerMiddlewareConfig(e, i, r, t);
            },
            s = [...e.getConfigurations().entries()].sort(
              ([e], [t]) => this.container.getModuleByKey(e).distance - this.container.getModuleByKey(t).distance
            );
          for (const [e, t] of s) await r(e, [...t]);
        }
        async registerMiddlewareConfig(e, t, r, s) {
          const { forRoutes: i } = t;
          for (const n of i) await this.registerRouteMiddleware(e, n, t, r, s);
        }
        async registerRouteMiddleware(e, t, r, s, a) {
          var c;
          const l = [].concat(r.middleware),
            u = this.container.getModuleByKey(s);
          for (const r of l) {
            const l = e.getMiddlewareCollection(s),
              d = l.get(r);
            if ((0, n.isUndefined)(d)) throw new o.RuntimeException();
            if (d.isTransient) return;
            this.graphInspector.insertClassNode(u, d, "middleware");
            const p = {
              type: "middleware",
              methodName: "use",
              className: d.name,
              classNodeId: d.id,
              metadata: {
                key: t.path,
                path: t.path,
                requestMethod: null !== (c = i.RequestMethod[t.method]) && void 0 !== c ? c : "ALL",
                version: t.version
              }
            };
            this.graphInspector.insertEntrypointDefinition(p, d.id), await this.bindHandler(d, a, t, u, l);
          }
        }
        async bindHandler(e, t, r, s, i) {
          const { instance: o, metatype: c } = e;
          if ((0, n.isUndefined)(null == o ? void 0 : o.use)) throw new a.InvalidMiddlewareException(c.name);
          if (e.isDependencyTreeStatic()) {
            const e = await this.createProxy(o);
            return this.registerHandler(t, r, e);
          }
          const u = e.isDependencyTreeDurable();
          await this.registerHandler(t, r, async (e, t, r) => {
            try {
              const n = this.getContextId(e, u),
                a = await this.injector.loadPerContext(o, s, i, n);
              return (await this.createProxy(a, n))(e, t, r);
            } catch (s) {
              let i = this.exceptionFiltersCache.get(o.use);
              i || ((i = this.routerExceptionFilter.create(o, o.use, void 0)), this.exceptionFiltersCache.set(o.use, i));
              const n = new l.ExecutionContextHost([e, t, r]);
              i.next(s, n);
            }
          });
        }
        async createProxy(e, t = u.STATIC_CONTEXT) {
          const r = this.routerExceptionFilter.create(e, e.use, void 0, t),
            s = e.use.bind(e);
          return this.routerProxy.createProxy(s, r);
        }
        async registerHandler(e, t, r) {
          const { method: s } = t,
            n = this.routeInfoPathExtractor.extractPathsFrom(t),
            a = (0, f.isRequestMethodAll)(s),
            o = i.RequestMethod[s],
            c = await e.createMiddlewareFactory(s),
            l = a ? r : (t, s, i) => (e.getRequestMethod(t) === o ? r(t, s, i) : i());
          n.forEach((e) => c(e, l));
        }
        getContextId(e, t) {
          const r = c.ContextIdFactory.getByRequest(e);
          if (!e[d.REQUEST_CONTEXT_ID]) {
            Object.defineProperty(e, d.REQUEST_CONTEXT_ID, { value: r, enumerable: !1, writable: !1, configurable: !1 });
            const s = t ? r.payload : e;
            this.container.registerRequestProvider(s, r);
          }
          return r;
        }
      }
      t.MiddlewareModule = v;
    },
    905948: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MiddlewareResolver = void 0),
        (t.MiddlewareResolver = class {
          constructor(e, t) {
            (this.middlewareContainer = e), (this.injector = t);
          }
          async resolveInstances(e, t) {
            const r = this.middlewareContainer.getMiddlewareCollection(t);
            await Promise.all([...r.values()].map(async (t) => this.resolveMiddlewareInstance(t, r, e)));
          }
          async resolveMiddlewareInstance(e, t, r) {
            await this.injector.loadMiddleware(e, t, r);
          }
        });
    },
    813085: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RouteInfoPathExtractor = void 0);
      const s = r(17988),
        i = r(514046),
        n = r(748547),
        a = r(298248);
      t.RouteInfoPathExtractor = class {
        constructor(e) {
          (this.applicationConfig = e), (this.routePathFactory = new a.RoutePathFactory(e));
        }
        extractPathsFrom({ path: e, method: t, version: r }) {
          const a = (0, i.stripEndSlash)((0, i.addLeadingSlash)(this.applicationConfig.getGlobalPrefix())),
            o = this.applicationConfig.getGlobalPrefixOptions().exclude,
            c = this.applicationConfig.getVersioning();
          let l = "";
          if (r && (null == c ? void 0 : c.type) === s.VersioningType.URI) {
            const e = this.routePathFactory.getVersionPrefix(c);
            l = (0, i.addLeadingSlash)(e + r.toString());
          }
          return ["*", "/*", "/*/", "(.*)", "/(.*)"].includes(e)
            ? Array.isArray(o)
              ? [a + l + (0, i.addLeadingSlash)(e), ...o.map((e) => l + (0, i.addLeadingSlash)(e.path))]
              : [a + l + (0, i.addLeadingSlash)(e)]
            : Array.isArray(o) && (0, n.isRouteExcluded)(o, e, t)
            ? [l + (0, i.addLeadingSlash)(e)]
            : [a + l + (0, i.addLeadingSlash)(e)];
        }
      };
    },
    854741: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RoutesMapper = void 0);
      const s = r(545911),
        i = r(514046),
        n = r(122443),
        a = r(625582),
        o = r(889421);
      t.RoutesMapper = class {
        constructor(e) {
          (this.container = e), (this.pathsExplorer = new a.PathsExplorer(new n.MetadataScanner()));
        }
        mapRouteToRouteInfo(e) {
          if ((0, i.isString)(e)) return this.getRouteInfoFromPath(e);
          const t = this.getRoutePath(e);
          return this.isRouteInfo(t, e) ? this.getRouteInfoFromObject(e) : this.getRouteInfoFromController(e, t);
        }
        getRouteInfoFromPath(e) {
          return [{ path: (0, i.addLeadingSlash)(e), method: -1 }];
        }
        getRouteInfoFromObject(e) {
          const t = { path: (0, i.addLeadingSlash)(e.path), method: e.method };
          return e.version && (t.version = e.version), [t];
        }
        getRouteInfoFromController(e, t) {
          const r = this.pathsExplorer.scanForPaths(Object.create(e), e.prototype),
            s = this.getHostModuleOfController(e),
            n = this.getModulePath(null == s ? void 0 : s.metatype),
            a = (e, t) => e.concat(t);
          return []
            .concat(t)
            .map((e) =>
              r
                .map((t) => {
                  var r;
                  return null === (r = t.path) || void 0 === r
                    ? void 0
                    : r.map((r) => {
                        let s = null != n ? n : "";
                        s += this.normalizeGlobalPath(e) + (0, i.addLeadingSlash)(r);
                        const a = { path: s, method: t.requestMethod };
                        return t.version && (a.version = t.version), a;
                      });
                })
                .reduce(a, [])
            )
            .reduce(a, []);
        }
        isRouteInfo(e, t) {
          return (0, i.isUndefined)(e);
        }
        normalizeGlobalPath(e) {
          const t = (0, i.addLeadingSlash)(e);
          return "/" === t ? "" : t;
        }
        getRoutePath(e) {
          return Reflect.getMetadata(s.PATH_METADATA, e);
        }
        getHostModuleOfController(e) {
          if (!e) return;
          const t = this.container.getModules(),
            r = o.targetModulesByContainer.get(t);
          return r
            ? Array.from(t.values())
                .filter((e) => r.has(e))
                .find(({ routes: t }) => t.has(e))
            : void 0;
        }
        getModulePath(e) {
          if (!e) return;
          const t = this.container.getModules(),
            r = Reflect.getMetadata(s.MODULE_PATH + t.applicationId, e);
          return null != r ? r : Reflect.getMetadata(s.MODULE_PATH, e);
        }
      };
    },
    363509: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isMiddlewareRouteExcluded =
          t.assignToken =
          t.isMiddlewareClass =
          t.mapToClass =
          t.filterMiddleware =
          t.mapToExcludeRoute =
            void 0);
      const s = r(17988),
        i = r(514046),
        n = r(573073),
        a = r(543943),
        o = r(585113),
        c = r(748547);
      function l(e) {
        var t, r;
        const s = e.toString();
        if ("class" === s.substring(0, 5)) return !0;
        const n = s.split(" ");
        return (
          "function" === n[0] &&
          /[A-Z]/.test(null === (t = n[1]) || void 0 === t ? void 0 : t[0]) &&
          (0, i.isFunction)(null === (r = e.prototype) || void 0 === r ? void 0 : r.use)
        );
      }
      function u(e, t = (0, o.v4)()) {
        return Object.defineProperty(e, "name", { value: t }), e;
      }
      function d(e, t, r) {
        if (t.length <= 0) return !1;
        const i = r.getRequestMethod(e),
          n = r.getRequestUrl(e),
          a = n && n.indexOf("?"),
          o = a >= 0 ? n.slice(0, a) : n;
        return (0, c.isRouteExcluded)(t, o, s.RequestMethod[i]);
      }
      (t.mapToExcludeRoute = (e) =>
        e.map((e) =>
          (0, i.isString)(e)
            ? { path: e, requestMethod: s.RequestMethod.ALL, pathRegex: a((0, i.addLeadingSlash)(e)) }
            : { path: e.path, requestMethod: e.method, pathRegex: a((0, i.addLeadingSlash)(e.path)) }
        )),
        (t.filterMiddleware = (e, r, s) => {
          const a = (0, t.mapToExcludeRoute)(r);
          return (0, n.iterate)([])
            .concat(e)
            .filter(i.isFunction)
            .map((e) => (0, t.mapToClass)(e, a, s))
            .toArray();
        }),
        (t.mapToClass = (e, t, r) =>
          l(e)
            ? t.length <= 0
              ? e
              : u(
                  class extends e {
                    use(...e) {
                      const [s, i, n] = e;
                      return d(s, t, r) ? n() : super.use(...e);
                    }
                  },
                  e.name
                )
            : u(
                class {
                  constructor() {
                    this.use = (...s) => {
                      const [i, n, a] = s;
                      return d(i, t, r) ? a() : e(...s);
                    };
                  }
                }
              )),
        (t.isMiddlewareClass = l),
        (t.assignToken = u),
        (t.isMiddlewareRouteExcluded = d);
    },
    143767: (e, t, r) => {
      "use strict";
      var s = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.NestApplicationContext = void 0);
      const i = r(17988),
        n = r(514046),
        a = r(573073),
        o = r(984313),
        c = r(227641),
        l = r(269654),
        u = r(923170),
        d = r(237898),
        p = r(21804),
        h = r(252516),
        f = r(731425);
      class g extends d.AbstractInstanceResolver {
        get instanceLinksHost() {
          return this._instanceLinksHost || (this._instanceLinksHost = new f.InstanceLinksHost(this.container)), this._instanceLinksHost;
        }
        constructor(e, t = {}, r = null, s = new Array()) {
          super(),
            (this.container = e),
            (this.appOptions = t),
            (this.contextModule = r),
            (this.scope = s),
            (this.isInitialized = !1),
            (this.logger = new i.Logger(g.name, { timestamp: !0 })),
            (this.shouldFlushLogsOnOverride = !1),
            (this.activeShutdownSignals = new Array()),
            (this.moduleCompiler = new p.ModuleCompiler()),
            (this.injector = new h.Injector()),
            this.appOptions.preview && this.printInPreviewModeWarning();
        }
        selectContextModule() {
          const e = this.container.getModules().values();
          this.contextModule = e.next().value;
        }
        select(e) {
          const t = this.container.getModules(),
            r = this.contextModule.metatype,
            s = this.scope.concat(r),
            i = this.container.getModuleTokenFactory(),
            { type: n, dynamicMetadata: a } = this.moduleCompiler.extractMetadata(e),
            o = i.create(n, a),
            l = t.get(o);
          if (!l) throw new c.UnknownModuleException();
          return new g(this.container, this.appOptions, l, s);
        }
        get(e, t = { strict: !1 }) {
          var r;
          return t && t.strict
            ? this.find(e, { moduleId: null === (r = this.contextModule) || void 0 === r ? void 0 : r.id, each: t.each })
            : this.find(e, t);
        }
        resolve(e, t = (0, l.createContextId)(), r = { strict: !1 }) {
          return this.resolvePerContext(e, this.contextModule, t, r);
        }
        registerRequestByContextId(e, t) {
          this.container.registerRequestProvider(e, t);
        }
        async init() {
          return this.isInitialized || (await this.callInitHook(), await this.callBootstrapHook(), (this.isInitialized = !0)), this;
        }
        async close(e) {
          await this.callDestroyHook(),
            await this.callBeforeShutdownHook(e),
            await this.dispose(),
            await this.callShutdownHook(e),
            this.unsubscribeFromProcessSignals();
        }
        useLogger(e) {
          i.Logger.overrideLogger(e), this.shouldFlushLogsOnOverride && this.flushLogs();
        }
        flushLogs() {
          i.Logger.flush();
        }
        flushLogsOnOverride() {
          this.shouldFlushLogsOnOverride = !0;
        }
        enableShutdownHooks(e = []) {
          return (
            (e = (0, n.isEmpty)(e) ? Object.keys(i.ShutdownSignal).map((e) => i.ShutdownSignal[e]) : Array.from(new Set(e))),
            (e = (0, a.iterate)(e)
              .map((e) => e.toString().toUpperCase().trim())
              .filter((e) => !this.activeShutdownSignals.includes(e))
              .toArray()),
            this.listenToShutdownSignals(e),
            this
          );
        }
        async dispose() {
          return Promise.resolve();
        }
        listenToShutdownSignals(e) {
          let t = !1;
          const r = async (n) => {
            try {
              if (t) return;
              (t = !0),
                await this.callDestroyHook(),
                await this.callBeforeShutdownHook(n),
                await this.dispose(),
                await this.callShutdownHook(n),
                e.forEach((e) => s.removeListener(e, r)),
                s.kill(s.pid, n);
            } catch (e) {
              i.Logger.error(o.MESSAGES.ERROR_DURING_SHUTDOWN, null == e ? void 0 : e.stack, g.name), s.exit(1);
            }
          };
          (this.shutdownCleanupRef = r),
            e.forEach((e) => {
              this.activeShutdownSignals.push(e), s.on(e, r);
            });
        }
        unsubscribeFromProcessSignals() {
          this.shutdownCleanupRef &&
            this.activeShutdownSignals.forEach((e) => {
              s.removeListener(e, this.shutdownCleanupRef);
            });
        }
        async callInitHook() {
          if (this.appOptions.preview) return;
          const e = this.getModulesSortedByDistance();
          for (const t of e) await (0, u.callModuleInitHook)(t);
        }
        async callDestroyHook() {
          if (this.appOptions.preview) return;
          const e = this.getModulesSortedByDistance();
          for (const t of e) await (0, u.callModuleDestroyHook)(t);
        }
        async callBootstrapHook() {
          if (this.appOptions.preview) return;
          const e = this.getModulesSortedByDistance();
          for (const t of e) await (0, u.callModuleBootstrapHook)(t);
        }
        async callShutdownHook(e) {
          if (this.appOptions.preview) return;
          const t = this.getModulesSortedByDistance();
          for (const r of t) await (0, u.callAppShutdownHook)(r, e);
        }
        async callBeforeShutdownHook(e) {
          if (this.appOptions.preview) return;
          const t = this.getModulesSortedByDistance();
          for (const r of t) await (0, u.callBeforeAppShutdownHook)(r, e);
        }
        assertNotInPreviewMode(e) {
          if (this.appOptions.preview) {
            const t = `Calling the "${e}" in the preview mode is not supported.`;
            throw (this.logger.error(t), new Error(t));
          }
        }
        getModulesSortedByDistance() {
          if (this._moduleRefsByDistance) return this._moduleRefsByDistance;
          const e = this.container.getModules();
          return (this._moduleRefsByDistance = Array.from(e.values()).sort((e, t) => t.distance - e.distance)), this._moduleRefsByDistance;
        }
        printInPreviewModeWarning() {
          this.logger.warn("------------------------------------------------"),
            this.logger.warn("Application is running in the PREVIEW mode!"),
            this.logger.warn("Providers/controllers will not be instantiated."),
            this.logger.warn("------------------------------------------------");
        }
      }
      t.NestApplicationContext = g;
    },
    107229: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.NestApplication = void 0);
      const s = r(17988),
        i = r(716616),
        n = r(310656),
        a = r(514046),
        o = r(573073),
        c = r(871544),
        l = r(136633),
        u = r(984313),
        d = r(607235),
        p = r(252516),
        h = r(568920),
        f = r(154329),
        g = r(363509),
        y = r(143767),
        E = r(655443),
        { SocketModule: m } = (0, d.optionalRequire)("@nestjs/websockets/socket-module", () =>
          r(
            Object(
              (function () {
                var e = new Error("Cannot find module '@nestjs/websockets/socket-module'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })()
            )
          )
        ),
        { MicroservicesModule: v } = (0, d.optionalRequire)("@nestjs/microservices/microservices-module", () =>
          r(
            Object(
              (function () {
                var e = new Error("Cannot find module '@nestjs/microservices/microservices-module'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })()
            )
          )
        );
      class T extends y.NestApplicationContext {
        constructor(e, t, r, s, n = {}) {
          super(e, n),
            (this.httpAdapter = t),
            (this.config = r),
            (this.graphInspector = s),
            (this.logger = new i.Logger(T.name, { timestamp: !0 })),
            (this.middlewareContainer = new h.MiddlewareContainer(this.container)),
            (this.microservicesModule = v && new v()),
            (this.socketModule = m && new m()),
            (this.microservices = []),
            (this.isListening = !1),
            this.selectContextModule(),
            this.registerHttpServer(),
            (this.injector = new p.Injector({ preview: this.appOptions.preview })),
            (this.middlewareModule = new f.MiddlewareModule()),
            (this.routesResolver = new E.RoutesResolver(this.container, this.config, this.injector, this.graphInspector));
        }
        async dispose() {
          this.socketModule && (await this.socketModule.close()),
            this.microservicesModule && (await this.microservicesModule.close()),
            this.httpAdapter && (await this.httpAdapter.close()),
            await Promise.all(
              (0, o.iterate)(this.microservices).map(async (e) => {
                e.setIsTerminated(!0), await e.close();
              })
            );
        }
        getHttpAdapter() {
          return this.httpAdapter;
        }
        registerHttpServer() {
          this.httpServer = this.createServer();
        }
        getUnderlyingHttpServer() {
          return this.httpAdapter.getHttpServer();
        }
        applyOptions() {
          if (this.appOptions && this.appOptions.cors)
            return (0, a.isObject)(this.appOptions.cors) || (0, a.isFunction)(this.appOptions.cors)
              ? this.enableCors(this.appOptions.cors)
              : this.enableCors();
        }
        createServer() {
          return this.httpAdapter.initHttpServer(this.appOptions), this.httpAdapter.getHttpServer();
        }
        async registerModules() {
          this.registerWsModule(),
            this.microservicesModule &&
              (this.microservicesModule.register(this.container, this.graphInspector, this.config, this.appOptions),
              this.microservicesModule.setupClients(this.container)),
            await this.middlewareModule.register(
              this.middlewareContainer,
              this.container,
              this.config,
              this.injector,
              this.httpAdapter,
              this.graphInspector,
              this.appOptions
            );
        }
        registerWsModule() {
          this.socketModule &&
            this.socketModule.register(this.container, this.config, this.graphInspector, this.appOptions, this.httpServer);
        }
        async init() {
          var e;
          return (
            this.applyOptions(),
            await (null === (e = this.httpAdapter) || void 0 === e ? void 0 : e.init()),
            this.appOptions && !1 !== this.appOptions.bodyParser && this.registerParserMiddleware(),
            await this.registerModules(),
            await this.registerRouter(),
            await this.callInitHook(),
            await this.registerRouterHooks(),
            await this.callBootstrapHook(),
            (this.isInitialized = !0),
            this.logger.log(u.MESSAGES.APPLICATION_READY),
            this
          );
        }
        registerParserMiddleware() {
          var e;
          const t = this.config.getGlobalPrefix(),
            r = !!(null === (e = this.appOptions) || void 0 === e ? void 0 : e.rawBody);
          this.httpAdapter.registerParserMiddleware(t, r);
        }
        async registerRouter() {
          await this.registerMiddleware(this.httpAdapter);
          const e = this.config.getGlobalPrefix(),
            t = (0, a.addLeadingSlash)(e);
          this.routesResolver.resolve(this.httpAdapter, t);
        }
        async registerRouterHooks() {
          this.routesResolver.registerNotFoundHandler(), this.routesResolver.registerExceptionHandler();
        }
        connectMicroservice(e, t = {}) {
          const { NestMicroservice: s } = (0, n.loadPackage)("@nestjs/microservices", "NestFactory", () =>
              r(
                Object(
                  (function () {
                    var e = new Error("Cannot find module '@nestjs/microservices'");
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  })()
                )
              )
            ),
            { inheritAppConfig: i } = t,
            a = i ? this.config : new l.ApplicationConfig(),
            o = new s(this.container, e, this.graphInspector, a);
          return o.registerListeners(), o.setIsInitialized(!0), o.setIsInitHookCalled(!0), this.microservices.push(o), o;
        }
        getMicroservices() {
          return this.microservices;
        }
        getHttpServer() {
          return this.httpServer;
        }
        async startAllMicroservices() {
          return this.assertNotInPreviewMode("startAllMicroservices"), await Promise.all(this.microservices.map((e) => e.listen())), this;
        }
        use(...e) {
          return this.httpAdapter.use(...e), this;
        }
        useBodyParser(...e) {
          if (!("useBodyParser" in this.httpAdapter)) return this.logger.warn("Your HTTP Adapter does not support `.useBodyParser`."), this;
          const [t, ...r] = e,
            s = !!this.appOptions.rawBody;
          return this.httpAdapter.useBodyParser(t, s, ...r), this;
        }
        enableCors(e) {
          this.httpAdapter.enableCors(e);
        }
        enableVersioning(e = { type: s.VersioningType.URI }) {
          return this.config.enableVersioning(e), this;
        }
        async listen(e, ...t) {
          return (
            this.assertNotInPreviewMode("listen"),
            !this.isInitialized && (await this.init()),
            new Promise((r, s) => {
              const i = (e) => {
                var t;
                this.logger.error(null === (t = null == e ? void 0 : e.toString) || void 0 === t ? void 0 : t.call(e)), s(e);
              };
              this.httpServer.once("error", i);
              const n = (0, a.isFunction)(t[t.length - 1]),
                o = n ? t.slice(0, t.length - 1) : t;
              this.httpAdapter.listen(e, ...o, (...e) => {
                var a, o;
                if (
                  ((null === (o = null === (a = this.appOptions) || void 0 === a ? void 0 : a.autoFlushLogs) || void 0 === o || o) &&
                    this.flushLogs(),
                  e[0] instanceof Error)
                )
                  return s(e[0]);
                this.httpServer.address() && (this.httpServer.removeListener("error", i), (this.isListening = !0), r(this.httpServer)),
                  n && t[t.length - 1](...e);
              });
            })
          );
        }
        async getUrl() {
          return new Promise((e, t) => {
            if (!this.isListening) return this.logger.error(u.MESSAGES.CALL_LISTEN_FIRST), void t(u.MESSAGES.CALL_LISTEN_FIRST);
            const r = this.httpServer.address();
            e(this.formatAddress(r));
          });
        }
        formatAddress(e) {
          if ((0, a.isString)(e)) {
            if ("win32" === (0, c.platform)()) return e;
            const t = encodeURIComponent(e);
            return `${this.getProtocol()}+unix://${t}`;
          }
          let t = this.host();
          return (
            e && "IPv6" === e.family ? (t = "::" === t ? "[::1]" : `[${t}]`) : "0.0.0.0" === t && (t = "127.0.0.1"),
            `${this.getProtocol()}://${t}:${e.port}`
          );
        }
        setGlobalPrefix(e, t) {
          if ((this.config.setGlobalPrefix(e), t)) {
            const e = (null == t ? void 0 : t.exclude) ? (0, g.mapToExcludeRoute)(t.exclude) : [];
            this.config.setGlobalPrefixOptions(Object.assign(Object.assign({}, t), { exclude: e }));
          }
          return this;
        }
        useWebSocketAdapter(e) {
          return this.config.setIoAdapter(e), this;
        }
        useGlobalFilters(...e) {
          return (
            this.config.useGlobalFilters(...e),
            e.forEach((e) => this.graphInspector.insertOrphanedEnhancer({ subtype: "filter", ref: e })),
            this
          );
        }
        useGlobalPipes(...e) {
          return (
            this.config.useGlobalPipes(...e),
            e.forEach((e) => this.graphInspector.insertOrphanedEnhancer({ subtype: "pipe", ref: e })),
            this
          );
        }
        useGlobalInterceptors(...e) {
          return (
            this.config.useGlobalInterceptors(...e),
            e.forEach((e) => this.graphInspector.insertOrphanedEnhancer({ subtype: "interceptor", ref: e })),
            this
          );
        }
        useGlobalGuards(...e) {
          return (
            this.config.useGlobalGuards(...e),
            e.forEach((e) => this.graphInspector.insertOrphanedEnhancer({ subtype: "guard", ref: e })),
            this
          );
        }
        useStaticAssets(e, t) {
          return this.httpAdapter.useStaticAssets && this.httpAdapter.useStaticAssets(e, t), this;
        }
        setBaseViewsDir(e) {
          return this.httpAdapter.setBaseViewsDir && this.httpAdapter.setBaseViewsDir(e), this;
        }
        setViewEngine(e) {
          return this.httpAdapter.setViewEngine && this.httpAdapter.setViewEngine(e), this;
        }
        host() {
          const e = this.httpServer.address();
          if (!(0, a.isString)(e)) return e && e.address;
        }
        getProtocol() {
          return this.appOptions && this.appOptions.httpsOptions ? "https" : "http";
        }
        async registerMiddleware(e) {
          await this.middlewareModule.registerMiddleware(this.middlewareContainer, e);
        }
      }
      t.NestApplication = T;
    },
    991201: (e, t, r) => {
      "use strict";
      var s = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.NestFactory = t.NestFactoryStatic = void 0);
      const i = r(716616),
        n = r(310656),
        a = r(514046),
        o = r(136633),
        c = r(984313),
        l = r(456582),
        u = r(479722),
        d = r(932519),
        p = r(333883),
        h = r(252516),
        f = r(76903),
        g = r(4550),
        y = r(58964),
        E = r(641521),
        m = r(122443),
        v = r(107229),
        T = r(143767),
        C = r(736540);
      class S {
        constructor() {
          (this.logger = new i.Logger("NestFactory", { timestamp: !0 })), (this.abortOnError = !0), (this.autoFlushLogs = !1);
        }
        async create(e, t, r) {
          const [s, i] = this.isHttpServer(t) ? [t, r] : [this.createHttpAdapter(), t],
            n = new o.ApplicationConfig(),
            a = new p.NestContainer(n),
            c = this.createGraphInspector(i, a);
          this.setAbortOnError(t, r), this.registerLoggerConfiguration(i), await this.initialize(e, a, c, n, i, s);
          const l = new v.NestApplication(a, s, n, c, i),
            u = this.createNestInstance(l);
          return this.createAdapterProxy(u, s);
        }
        async createMicroservice(e, t) {
          const { NestMicroservice: s } = (0, n.loadPackage)("@nestjs/microservices", "NestFactory", () =>
              r(
                Object(
                  (function () {
                    var e = new Error("Cannot find module '@nestjs/microservices'");
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  })()
                )
              )
            ),
            i = new o.ApplicationConfig(),
            a = new p.NestContainer(i),
            c = this.createGraphInspector(t, a);
          return (
            this.setAbortOnError(t),
            this.registerLoggerConfiguration(t),
            await this.initialize(e, a, c, i, t),
            this.createNestInstance(new s(a, t, c, i))
          );
        }
        async createApplicationContext(e, t) {
          const r = new p.NestContainer(),
            s = this.createGraphInspector(t, r);
          this.setAbortOnError(t), this.registerLoggerConfiguration(t), await this.initialize(e, r, s, void 0, t);
          const i = r.getModules().values().next().value,
            n = this.createNestInstance(new T.NestApplicationContext(r, t, i));
          return this.autoFlushLogs && n.flushLogsOnOverride(), n.init();
        }
        createNestInstance(e) {
          return this.createProxy(e);
        }
        async initialize(e, t, r, s = new o.ApplicationConfig(), i = {}, n = null) {
          E.UuidFactory.mode = i.snapshot ? E.UuidFactoryMode.Deterministic : E.UuidFactoryMode.Random;
          const a = new h.Injector({ preview: i.preview }),
            u = new f.InstanceLoader(t, a, r),
            p = new m.MetadataScanner(),
            g = new C.DependenciesScanner(t, p, r, s);
          t.setHttpAdapter(n);
          const y = !1 === this.abortOnError ? d.rethrow : void 0;
          await (null == n ? void 0 : n.init());
          try {
            this.logger.log(c.MESSAGES.APPLICATION_START),
              await l.ExceptionsZone.asyncRun(
                async () => {
                  await g.scan(e), await u.createInstancesOfDependencies(), g.applyApplicationProviders();
                },
                y,
                this.autoFlushLogs
              );
          } catch (e) {
            this.handleInitializationError(e);
          }
        }
        handleInitializationError(e) {
          this.abortOnError && s.abort(), (0, d.rethrow)(e);
        }
        createProxy(e) {
          const t = this.createExceptionProxy();
          return new Proxy(e, { get: t, set: t });
        }
        createExceptionProxy() {
          return (e, t) => {
            if (t in e) return (0, a.isFunction)(e[t]) ? this.createExceptionZone(e, t) : e[t];
          };
        }
        createExceptionZone(e, t) {
          const r = !1 === this.abortOnError ? d.rethrow : void 0;
          return (...s) => {
            let i;
            return (
              l.ExceptionsZone.run(() => {
                i = e[t](...s);
              }, r),
              i
            );
          };
        }
        registerLoggerConfiguration(e) {
          if (!e) return;
          const { logger: t, bufferLogs: r, autoFlushLogs: s } = e;
          !0 === t || (0, a.isNil)(t) || i.Logger.overrideLogger(t), r && i.Logger.attachBuffer(), (this.autoFlushLogs = null == s || s);
        }
        createHttpAdapter(e) {
          const { ExpressAdapter: t } = (0, u.loadAdapter)("@nestjs/platform-express", "HTTP", () =>
            r(
              Object(
                (function () {
                  var e = new Error("Cannot find module '@nestjs/platform-express'");
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })()
              )
            )
          );
          return new t(e);
        }
        isHttpServer(e) {
          return !(!e || !e.patch);
        }
        setAbortOnError(e, t) {
          this.abortOnError = this.isHttpServer(e) ? !(t && !1 === t.abortOnError) : !(e && !1 === e.abortOnError);
        }
        createAdapterProxy(e, t) {
          const r = new Proxy(e, {
            get: (e, s) => {
              const i = (e) => (e instanceof Promise ? e.then(i) : e instanceof v.NestApplication ? r : e);
              return !(s in e) && s in t
                ? (...e) => {
                    const r = this.createExceptionZone(t, s)(...e);
                    return i(r);
                  }
                : (0, a.isFunction)(e[s])
                ? (...t) => {
                    const r = e[s](...t);
                    return i(r);
                  }
                : e[s];
            }
          });
          return r;
        }
        createGraphInspector(e, t) {
          return (null == e ? void 0 : e.snapshot) ? new g.GraphInspector(t) : y.NoopGraphInspector;
        }
      }
      (t.NestFactoryStatic = S), (t.NestFactory = new S());
    },
    68571: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(831770), t), s.__exportStar(r(328881), t), s.__exportStar(r(644477), t);
    },
    831770: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParamsTokenFactory = void 0);
      const s = r(83366);
      t.ParamsTokenFactory = class {
        exchangeEnumForString(e) {
          switch (e) {
            case s.RouteParamtypes.BODY:
              return "body";
            case s.RouteParamtypes.PARAM:
              return "param";
            case s.RouteParamtypes.QUERY:
              return "query";
            default:
              return "custom";
          }
        }
      };
    },
    328881: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.PipesConsumer = void 0);
      const s = r(831770);
      t.PipesConsumer = class {
        constructor() {
          this.paramsTokenFactory = new s.ParamsTokenFactory();
        }
        async apply(e, { metatype: t, type: r, data: s }, i) {
          const n = this.paramsTokenFactory.exchangeEnumForString(r);
          return this.applyPipes(e, { metatype: t, type: n, data: s }, i);
        }
        async applyPipes(e, { metatype: t, type: r, data: s }, i) {
          return i.reduce(async (e, i) => {
            const n = await e;
            return i.transform(n, { metatype: t, type: r, data: s });
          }, Promise.resolve(e));
        }
      };
    },
    644477: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.PipesContextCreator = void 0);
      const s = r(545911),
        i = r(514046),
        n = r(573073),
        a = r(28313),
        o = r(220692);
      class c extends a.ContextCreator {
        constructor(e, t) {
          super(), (this.container = e), (this.config = t);
        }
        create(e, t, r, i = o.STATIC_CONTEXT, n) {
          return (this.moduleContext = r), this.createContext(e, t, s.PIPES_METADATA, i, n);
        }
        createConcreteContext(e, t = o.STATIC_CONTEXT, r) {
          return (0, i.isEmpty)(e)
            ? []
            : (0, n.iterate)(e)
                .filter((e) => e && (e.name || e.transform))
                .map((e) => this.getPipeInstance(e, t, r))
                .filter((e) => e && e.transform && (0, i.isFunction)(e.transform))
                .toArray();
        }
        getPipeInstance(e, t = o.STATIC_CONTEXT, r) {
          if (e.transform) return e;
          const s = this.getInstanceByMetatype(e);
          if (!s) return null;
          const i = s.getInstanceByContextId(t, r);
          return i && i.instance;
        }
        getInstanceByMetatype(e) {
          if (!this.moduleContext) return;
          const t = this.container.getModules().get(this.moduleContext);
          return t ? t.injectables.get(e) : void 0;
        }
        getGlobalMetadata(e = o.STATIC_CONTEXT, t) {
          if (!this.config) return [];
          const r = this.config.getGlobalPipes();
          if (e === o.STATIC_CONTEXT && !t) return r;
          const s = this.config.getGlobalRequestPipes(),
            i = (0, n.iterate)(s)
              .map((r) => r.getInstanceByContextId(e, t))
              .filter((e) => !!e)
              .map((e) => e.instance)
              .toArray();
          return r.concat(i);
        }
        setModuleContext(e) {
          this.moduleContext = e;
        }
      }
      t.PipesContextCreator = c;
    },
    128492: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assignToObject = void 0),
        (t.assignToObject = function (e, t) {
          return (
            Object.defineProperties(
              e,
              Object.keys(t).reduce((e, r) => ((e[r] = Object.getOwnPropertyDescriptor(t, r)), e), Object.create(null))
            ),
            e
          );
        });
    },
    201926: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.REPL_INITIALIZED_MESSAGE = void 0),
        (t.REPL_INITIALIZED_MESSAGE = "REPL initialized");
    },
    793279: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(799304), t);
    },
    685432: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DebugReplFn = void 0);
      const s = r(181610),
        i = r(136550);
      class n extends i.ReplFunction {
        constructor() {
          super(...arguments),
            (this.fnDefinition = {
              name: "debug",
              description:
                'Print all registered modules as a list together with their controllers and providers.\nIf the argument is passed in, for example, "debug(MyModule)" then it will only print components of this specific module.',
              signature: "(moduleCls?: ClassRef | string) => void"
            });
        }
        action(e) {
          if ((this.ctx.writeToStdout("\n"), e)) {
            const t = "function" == typeof e ? e.name : e,
              r = this.ctx.debugRegistry[t];
            if (!r) return this.logger.error(`"${t}" has not been found in the modules registry`);
            this.printCtrlsAndProviders(t, r);
          } else
            Object.keys(this.ctx.debugRegistry).forEach((e) => {
              this.printCtrlsAndProviders(e, this.ctx.debugRegistry[e]);
            });
          this.ctx.writeToStdout("\n");
        }
        printCtrlsAndProviders(e, t) {
          this.ctx.writeToStdout(`${s.clc.green(e)}:\n`),
            this.printCollection("controllers", t.controllers),
            this.printCollection("providers", t.providers);
        }
        printCollection(e, t) {
          const r = Object.keys(t);
          r.length <= 0 ||
            (this.ctx.writeToStdout(` ${s.clc.yellow(`- ${e}`)}:\n`),
            r.forEach((e) => this.ctx.writeToStdout(`  ${s.clc.green("◻")} ${e}\n`)));
        }
      }
      t.DebugReplFn = n;
    },
    472942: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.GetReplFn = void 0);
      const s = r(136550);
      class i extends s.ReplFunction {
        constructor() {
          super(...arguments),
            (this.fnDefinition = {
              name: "get",
              signature: "(token: InjectionToken) => any",
              description: "Retrieves an instance of either injectable or controller, otherwise, throws exception.",
              aliases: ["$"]
            });
        }
        action(e) {
          return this.ctx.app.get(e);
        }
      }
      t.GetReplFn = i;
    },
    929510: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.HelpReplFn = void 0);
      const s = r(573073),
        i = r(181610),
        n = r(136550);
      class a extends n.ReplFunction {
        constructor() {
          super(...arguments),
            (this.fnDefinition = { name: "help", signature: "() => void", description: "Display all available REPL native functions." });
        }
        action() {
          const e = (0, s.iterate)(this.ctx.nativeFunctions)
            .map(([, e]) => e.fnDefinition)
            .toArray()
            .sort((e, t) => (e.name < t.name ? -1 : 1));
          this.ctx.writeToStdout(
            `You can call ${i.clc.bold(".help")} on any function listed below (e.g.: ${i.clc.bold("help.help")}):\n\n` +
              e.map(a.buildHelpMessage).join("\n") +
              "\n"
          );
        }
      }
      (t.HelpReplFn = a),
        (a.buildHelpMessage = ({ name: e, description: t }) => i.clc.cyanBright(e) + (t ? ` ${i.clc.bold("-")} ${t}` : ""));
    },
    493222: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(929510), t),
        s.__exportStar(r(472942), t),
        s.__exportStar(r(76312), t),
        s.__exportStar(r(380370), t),
        s.__exportStar(r(685432), t),
        s.__exportStar(r(599688), t);
    },
    599688: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.MethodsReplFn = void 0);
      const s = r(181610),
        i = r(122443),
        n = r(136550);
      class a extends n.ReplFunction {
        constructor() {
          super(...arguments),
            (this.fnDefinition = {
              name: "methods",
              description: "Display all public methods available on a given provider or controller.",
              signature: "(token: ClassRef | string) => void"
            }),
            (this.metadataScanner = new i.MetadataScanner());
        }
        action(e) {
          const t = "function" != typeof e ? Object.getPrototypeOf(this.ctx.app.get(e)) : null == e ? void 0 : e.prototype,
            r = new Set(this.metadataScanner.getAllFilteredMethodNames(t));
          this.ctx.writeToStdout("\n"),
            this.ctx.writeToStdout(`${s.clc.green("Methods")}:\n`),
            r.forEach((e) => this.ctx.writeToStdout(` ${s.clc.yellow("◻")} ${e}\n`)),
            this.ctx.writeToStdout("\n");
        }
      }
      t.MethodsReplFn = a;
    },
    76312: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ResolveReplFn = void 0);
      const s = r(136550);
      class i extends s.ReplFunction {
        constructor() {
          super(...arguments),
            (this.fnDefinition = {
              name: "resolve",
              description: "Resolves transient or request-scoped instance of either injectable or controller, otherwise, throws exception.",
              signature: "(token: InjectionToken, contextId: any) => Promise<any>"
            });
        }
        action(e, t) {
          return this.ctx.app.resolve(e, t);
        }
      }
      t.ResolveReplFn = i;
    },
    380370: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.SelectReplFn = void 0);
      const s = r(136550);
      class i extends s.ReplFunction {
        constructor() {
          super(...arguments),
            (this.fnDefinition = {
              name: "select",
              description:
                "Allows navigating through the modules tree, for example, to pull out a specific instance from the selected module.",
              signature: "(token: DynamicModule | ClassRef) => INestApplicationContext"
            });
        }
        action(e) {
          return this.ctx.app.select(e);
        }
      }
      t.SelectReplFn = i;
    },
    822009: (e, t, r) => {
      "use strict";
      var s = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ReplContext = void 0);
      const i = r(17988),
        n = r(136633),
        a = r(68480),
        o = r(672730),
        c = r(493222);
      class l {
        constructor(e, t) {
          (this.app = e),
            (this.logger = new i.Logger(l.name)),
            (this.debugRegistry = {}),
            (this.globalScope = Object.create(null)),
            (this.nativeFunctions = new Map()),
            (this.container = e.container),
            this.initializeContext(),
            this.initializeNativeFunctions(t || []);
        }
        writeToStdout(e) {
          s.stdout.write(e);
        }
        initializeContext() {
          this.container.getModules().forEach((e) => {
            let t = e.metatype.name;
            t !== o.InternalCoreModule.name &&
              (this.globalScope[t] && (t += ` (${e.token})`),
              this.introspectCollection(e, t, "providers"),
              this.introspectCollection(e, t, "controllers"),
              Object.defineProperty(this.globalScope, t, { value: e.metatype, configurable: !1, enumerable: !0 }));
          });
        }
        introspectCollection(e, t, r) {
          var s;
          const i = {};
          e[r].forEach(({ token: t }) => {
            const r = this.stringifyToken(t);
            r !== n.ApplicationConfig.name &&
              r !== e.metatype.name &&
              (this.globalScope[r] || Object.defineProperty(this.globalScope, r, { value: t, configurable: !1, enumerable: !0 }),
              r !== a.ModuleRef.name && (i[r] = t));
          }),
            (this.debugRegistry[t] = Object.assign(Object.assign({}, null === (s = this.debugRegistry) || void 0 === s ? void 0 : s[t]), {
              [r]: i
            }));
        }
        stringifyToken(e) {
          return "string" != typeof e ? ("function" == typeof e ? e.name : null == e ? void 0 : e.toString()) : `"${e}"`;
        }
        addNativeFunction(e) {
          var t;
          const r = new e(this),
            s = [r];
          return (
            this.nativeFunctions.set(r.fnDefinition.name, r),
            null === (t = r.fnDefinition.aliases) ||
              void 0 === t ||
              t.forEach((e) => {
                const t = Object.create(r);
                (t.fnDefinition = { name: e, description: t.fnDefinition.description, signature: t.fnDefinition.signature }),
                  this.nativeFunctions.set(e, t),
                  s.push(t);
              }),
            s
          );
        }
        registerFunctionIntoGlobalScope(e) {
          this.globalScope[e.fnDefinition.name] = e.action.bind(e);
          const t = this.globalScope[e.fnDefinition.name];
          Object.defineProperty(t, "help", { enumerable: !1, configurable: !1, get: () => this.writeToStdout(e.makeHelpMessage()) });
        }
        initializeNativeFunctions(e) {
          [c.HelpReplFn, c.GetReplFn, c.ResolveReplFn, c.SelectReplFn, c.DebugReplFn, c.MethodsReplFn].concat(e).forEach((e) => {
            this.addNativeFunction(e).forEach((e) => {
              this.registerFunctionIntoGlobalScope(e);
            });
          });
        }
      }
      t.ReplContext = l;
    },
    136550: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ReplFunction = void 0);
      const s = r(181610);
      t.ReplFunction = class {
        constructor(e) {
          (this.ctx = e), (this.logger = e.logger);
        }
        makeHelpMessage() {
          const { description: e, name: t, signature: r } = this.fnDefinition,
            i = `${t}${r}`;
          return `${s.clc.yellow(e)}\n${s.clc.magentaBright("Interface:")} ${s.clc.bold(i)}\n`;
        }
      };
    },
    367934: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ReplLogger = void 0);
      const s = r(17988),
        i = r(107229),
        n = r(154671),
        a = r(655443);
      class o extends s.ConsoleLogger {
        log(e, t) {
          if (!o.ignoredContexts.includes(t)) return super.log.apply(this, Array.from(arguments));
        }
      }
      (t.ReplLogger = o), (o.ignoredContexts = [a.RoutesResolver.name, n.RouterExplorer.name, i.NestApplication.name]);
    },
    882072: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defineDefaultCommandsOnRepl = void 0),
        (t.defineDefaultCommandsOnRepl = function (e) {
          e.defineCommand("help", {
            help: "Show REPL options",
            action(e) {
              if ((this.clearBufferedCommand(), e)) {
                const t = this.commands[e] || this.context[e],
                  r = null == t ? void 0 : t.help;
                r && this.output.write(`${r}\n`);
              } else
                !(function (e) {
                  Object.keys(e.commands)
                    .sort()
                    .forEach((t) => {
                      const r = e.commands[t];
                      r && e.output.write(`${t}\t${r.help || ""}\n`);
                    });
                })(this),
                  this.output.write("\n\n"),
                  this.context.help(),
                  this.output.write("\nPress Ctrl+C to abort current expression, Ctrl+D to exit the REPL\n");
              this.displayPrompt();
            }
          });
        });
    },
    799304: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.repl = void 0);
      const s = r(17988),
        i = r(181610),
        n = r(991201),
        a = r(128492),
        o = r(201926),
        c = r(822009),
        l = r(367934),
        u = r(882072);
      t.repl = async function (e) {
        const t = await n.NestFactory.createApplicationContext(e, { abortOnError: !1, logger: new l.ReplLogger() });
        await t.init();
        const d = new c.ReplContext(t);
        s.Logger.log(o.REPL_INITIALIZED_MESSAGE);
        const p = (
          await Promise.resolve().then(() =>
            r(
              Object(
                (function () {
                  var e = new Error("Cannot find module 'repl'");
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })()
              )
            )
          )
        ).start({ prompt: i.clc.green("> "), ignoreUndefined: !0 });
        return (0, a.assignToObject)(p.context, d.globalScope), (0, u.defineDefaultCommandsOnRepl)(p), p;
      };
    },
    347257: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RouterModule = void 0);
      const s = r(488802);
      s.__exportStar(r(180168), t), s.__exportStar(r(237611), t);
      var i = r(889421);
      Object.defineProperty(t, "RouterModule", {
        enumerable: !0,
        get: function () {
          return i.RouterModule;
        }
      });
    },
    180168: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(4802), t);
    },
    4802: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    625582: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.PathsExplorer = void 0);
      const s = r(545911),
        i = r(514046);
      t.PathsExplorer = class {
        constructor(e) {
          this.metadataScanner = e;
        }
        scanForPaths(e, t) {
          const r = (0, i.isUndefined)(t) ? Object.getPrototypeOf(e) : t;
          return this.metadataScanner.scanFromPrototype(e, r, (t) => this.exploreMethodMetadata(e, r, t));
        }
        exploreMethodMetadata(e, t, r) {
          const n = e[r],
            a = t[r],
            o = Reflect.getMetadata(s.PATH_METADATA, a);
          if ((0, i.isUndefined)(o)) return null;
          const c = Reflect.getMetadata(s.METHOD_METADATA, a),
            l = Reflect.getMetadata(s.VERSION_METADATA, a);
          return {
            path: (0, i.isString)(o) ? [(0, i.addLeadingSlash)(o)] : o.map((e) => (0, i.addLeadingSlash)(e)),
            requestMethod: c,
            targetCallback: n,
            methodName: r,
            version: l
          };
        }
      };
    },
    237611: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.REQUEST = void 0);
      var s = r(965192);
      Object.defineProperty(t, "REQUEST", {
        enumerable: !0,
        get: function () {
          return s.REQUEST;
        }
      });
    },
    965192: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.REQUEST_CONTEXT_ID = t.REQUEST = void 0),
        (t.REQUEST = "REQUEST"),
        (t.REQUEST_CONTEXT_ID = Symbol("REQUEST_CONTEXT_ID"));
    },
    160176: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestProvider = void 0);
      const s = r(17988),
        i = r(965192);
      t.requestProvider = { provide: i.REQUEST, scope: s.Scope.REQUEST, useFactory: () => {} };
    },
    59448: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RouteParamsFactory = void 0);
      const s = r(83366);
      t.RouteParamsFactory = class {
        exchangeKeyForValue(e, t, { req: r, res: i, next: n }) {
          switch (e) {
            case s.RouteParamtypes.NEXT:
              return n;
            case s.RouteParamtypes.REQUEST:
              return r;
            case s.RouteParamtypes.RESPONSE:
              return i;
            case s.RouteParamtypes.BODY:
              return t && r.body ? r.body[t] : r.body;
            case s.RouteParamtypes.PARAM:
              return t ? r.params[t] : r.params;
            case s.RouteParamtypes.HOST:
              const e = r.hosts || {};
              return t ? e[t] : e;
            case s.RouteParamtypes.QUERY:
              return t ? r.query[t] : r.query;
            case s.RouteParamtypes.HEADERS:
              return t ? r.headers[t.toLowerCase()] : r.headers;
            case s.RouteParamtypes.SESSION:
              return r.session;
            case s.RouteParamtypes.FILE:
              return r[t || "file"];
            case s.RouteParamtypes.FILES:
              return r.files;
            case s.RouteParamtypes.IP:
              return r.ip;
            default:
              return null;
          }
        }
      };
    },
    298248: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RoutePathFactory = void 0);
      const s = r(17988),
        i = r(514046),
        n = r(748547);
      t.RoutePathFactory = class {
        constructor(e) {
          this.applicationConfig = e;
        }
        create(e, t) {
          var r;
          let n = [""];
          const a = this.getVersion(e);
          if (a && (null === (r = e.versioningOptions) || void 0 === r ? void 0 : r.type) === s.VersioningType.URI) {
            const t = this.getVersionPrefix(e.versioningOptions);
            Array.isArray(a)
              ? (n = (0, s.flatten)(n.map((e) => a.map((r) => (r === s.VERSION_NEUTRAL ? e : `${e}/${t}${r}`)))))
              : a !== s.VERSION_NEUTRAL && (n = n.map((e) => `${e}/${t}${a}`));
          }
          return (
            (n = this.appendToAllIfDefined(n, e.modulePath)),
            (n = this.appendToAllIfDefined(n, e.ctrlPath)),
            (n = this.appendToAllIfDefined(n, e.methodPath)),
            e.globalPrefix &&
              (n = n.map((r) => (this.isExcludedFromGlobalPrefix(r, t) ? r : (0, i.stripEndSlash)(e.globalPrefix || "") + r))),
            n.map((e) => (0, i.addLeadingSlash)(e || "/")).map((e) => ("/" !== e ? (0, i.stripEndSlash)(e) : e))
          );
        }
        getVersion(e) {
          return e.methodVersion || e.controllerVersion;
        }
        getVersionPrefix(e) {
          if (e.type === s.VersioningType.URI) {
            if (!1 === e.prefix) return "";
            if (void 0 !== e.prefix) return e.prefix;
          }
          return "v";
        }
        appendToAllIfDefined(e, t) {
          if (!t) return e;
          const r = (e, t) => (0, i.stripEndSlash)(e) + (0, i.addLeadingSlash)(t);
          if (Array.isArray(t)) {
            const i = e.map((e) => t.map((t) => r(e, t)));
            return (0, s.flatten)(i);
          }
          return e.map((e) => r(e, t));
        }
        isExcludedFromGlobalPrefix(e, t) {
          if ((0, i.isUndefined)(t)) return !1;
          const r = this.applicationConfig.getGlobalPrefixOptions().exclude;
          return Array.isArray(r) && (0, n.isRouteExcluded)(r, e, t);
        }
      };
    },
    21429: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RouterExceptionFilters = void 0);
      const s = r(545911),
        i = r(514046),
        n = r(517849),
        a = r(255326),
        o = r(220692),
        c = r(573073);
      class l extends n.BaseExceptionFilterContext {
        constructor(e, t, r) {
          super(e), (this.config = t), (this.applicationRef = r);
        }
        create(e, t, r, n = o.STATIC_CONTEXT, c) {
          this.moduleContext = r;
          const l = new a.ExceptionsHandler(this.applicationRef),
            u = this.createContext(e, t, s.EXCEPTION_FILTERS_METADATA, n, c);
          return (0, i.isEmpty)(u) || l.setCustomFilters(u.reverse()), l;
        }
        getGlobalMetadata(e = o.STATIC_CONTEXT, t) {
          const r = this.config.getGlobalFilters();
          if (e === o.STATIC_CONTEXT && !t) return r;
          const s = this.config.getGlobalRequestFilters(),
            i = (0, c.iterate)(s)
              .map((r) => r.getInstanceByContextId(e, t))
              .filter((e) => !!e)
              .map((e) => e.instance)
              .toArray();
          return r.concat(i);
        }
      }
      t.RouterExceptionFilters = l;
    },
    920896: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RouterExecutionContext = void 0);
      const s = r(17988),
        i = r(545911),
        n = r(83366),
        a = r(514046),
        o = r(573141),
        c = r(911907),
        l = r(390151),
        u = r(220692),
        d = r(487102);
      t.RouterExecutionContext = class {
        constructor(e, t, r, s, i, n, a, o) {
          (this.paramsFactory = e),
            (this.pipesContextCreator = t),
            (this.pipesConsumer = r),
            (this.guardsContextCreator = s),
            (this.guardsConsumer = i),
            (this.interceptorsContextCreator = n),
            (this.interceptorsConsumer = a),
            (this.applicationRef = o),
            (this.handlerMetadataStorage = new l.HandlerMetadataStorage()),
            (this.contextUtils = new c.ContextUtils()),
            (this.responseController = new d.RouterResponseController(o));
        }
        create(e, t, r, s, i, n = u.STATIC_CONTEXT, a) {
          const o = "http",
            {
              argsLength: c,
              fnHandleResponse: l,
              paramtypes: d,
              getParamsMetadata: p,
              httpStatusCode: h,
              responseHeaders: f,
              hasCustomHeaders: g
            } = this.getMetadata(e, t, r, s, i, o),
            y = this.contextUtils.mergeParamsMetatypes(p(s, n, a), d),
            E = this.pipesContextCreator.create(e, t, s, n, a),
            m = this.guardsContextCreator.create(e, t, s, n, a),
            v = this.interceptorsContextCreator.create(e, t, s, n, a),
            T = this.createGuardsFn(m, e, t, o),
            C = this.createPipesFn(E, y);
          return async (r, s, i) => {
            const n = this.contextUtils.createNullArray(c);
            T && (await T([r, s, i])), this.responseController.setStatus(s, h), g && this.responseController.setHeaders(s, f);
            const a = await this.interceptorsConsumer.intercept(
              v,
              [r, s, i],
              e,
              t,
              ((r, s, i, n) => async () => (C && (await C(r, s, i, n)), t.apply(e, r)))(n, r, s, i),
              o
            );
            await l(a, s, r);
          };
        }
        getMetadata(e, t, r, s, n, o) {
          const c = this.handlerMetadataStorage.get(e, r);
          if (c) return c;
          const l = this.contextUtils.reflectCallbackMetadata(e, r, i.ROUTE_ARGS_METADATA) || {},
            d = Object.keys(l),
            p = this.contextUtils.getArgumentsLength(d, l),
            h = this.contextUtils.reflectCallbackParamtypes(e, r),
            f = this.contextUtils.getContextFactory(o, e, t),
            g = (e, t = u.STATIC_CONTEXT, r) => this.exchangeKeysForValues(d, l, e, t, r, f),
            y = g(s),
            E = this.isResponseHandled(e, r, y),
            m = this.reflectRedirect(t),
            v = this.createHandleResponseFn(t, E, m),
            T = this.reflectHttpStatusCode(t) || this.responseController.getStatusByMethod(n),
            C = this.reflectResponseHeaders(t),
            S = {
              argsLength: p,
              fnHandleResponse: v,
              paramtypes: h,
              getParamsMetadata: g,
              httpStatusCode: T,
              hasCustomHeaders: !(0, a.isEmpty)(C),
              responseHeaders: C
            };
          return this.handlerMetadataStorage.set(e, r, S), S;
        }
        reflectRedirect(e) {
          return Reflect.getMetadata(i.REDIRECT_METADATA, e);
        }
        reflectHttpStatusCode(e) {
          return Reflect.getMetadata(i.HTTP_CODE_METADATA, e);
        }
        reflectRenderTemplate(e) {
          return Reflect.getMetadata(i.RENDER_METADATA, e);
        }
        reflectResponseHeaders(e) {
          return Reflect.getMetadata(i.HEADERS_METADATA, e) || [];
        }
        reflectSse(e) {
          return Reflect.getMetadata(i.SSE_METADATA, e);
        }
        exchangeKeysForValues(e, t, r, s = u.STATIC_CONTEXT, n, a) {
          return (
            this.pipesContextCreator.setModuleContext(r),
            e.map((e) => {
              const { index: r, data: o, pipes: c } = t[e],
                l = this.pipesContextCreator.createConcreteContext(c, s, n),
                u = this.contextUtils.mapParamType(e);
              if (e.includes(i.CUSTOM_ROUTE_ARGS_METADATA)) {
                const { factory: s } = t[e];
                return { index: r, extractValue: this.contextUtils.getCustomFactory(s, o, a), type: u, data: o, pipes: l };
              }
              const d = Number(u);
              return {
                index: r,
                extractValue: (e, t, r) => this.paramsFactory.exchangeKeyForValue(d, o, { req: e, res: t, next: r }),
                type: d,
                data: o,
                pipes: l
              };
            })
          );
        }
        async getParamValue(e, { metatype: t, type: r, data: s }, i) {
          return (0, a.isEmpty)(i) ? e : this.pipesConsumer.apply(e, { metatype: t, type: r, data: s }, i);
        }
        isPipeable(e) {
          return (
            e === n.RouteParamtypes.BODY ||
            e === n.RouteParamtypes.QUERY ||
            e === n.RouteParamtypes.PARAM ||
            e === n.RouteParamtypes.FILE ||
            e === n.RouteParamtypes.FILES ||
            (0, a.isString)(e)
          );
        }
        createGuardsFn(e, t, r, i) {
          return e.length
            ? async (n) => {
                if (!(await this.guardsConsumer.tryActivate(e, n, t, r, i))) throw new s.ForbiddenException(o.FORBIDDEN_MESSAGE);
              }
            : null;
        }
        createPipesFn(e, t) {
          return t.length
            ? async (r, s, i, n) => {
                await Promise.all(
                  t.map(async (t) => {
                    const { index: a, extractValue: o, type: c, data: l, metatype: u, pipes: d } = t,
                      p = o(s, i, n);
                    r[a] = this.isPipeable(c) ? await this.getParamValue(p, { metatype: u, type: c, data: l }, e.concat(d)) : p;
                  })
                );
              }
            : null;
        }
        createHandleResponseFn(e, t, r, s) {
          const i = this.reflectRenderTemplate(e);
          return i
            ? async (e, t) => await this.responseController.render(e, t, i)
            : r && (0, a.isString)(r.url)
            ? async (e, t) => {
                await this.responseController.redirect(e, t, r);
              }
            : this.reflectSse(e)
            ? (e, t, r) => {
                var s;
                this.responseController.sse(e, t.raw || t, r.raw || r, {
                  additionalHeaders: null === (s = t.getHeaders) || void 0 === s ? void 0 : s.call(t)
                });
              }
            : async (e, r) => (
                (e = await this.responseController.transformToResult(e)), !t && (await this.responseController.apply(e, r, s)), r
              );
        }
        isResponseHandled(e, t, r) {
          const s = r.some(({ type: e }) => e === n.RouteParamtypes.RESPONSE || e === n.RouteParamtypes.NEXT),
            i = this.contextUtils.reflectPassthrough(e, t);
          return s && !i;
        }
      };
    },
    154671: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RouterExplorer = void 0);
      const s = r(545911),
        i = r(649464),
        n = r(987801),
        a = r(716616),
        o = r(514046),
        c = r(543943),
        l = r(393269),
        u = r(573141),
        d = r(269654),
        p = r(115314),
        h = r(863172),
        f = r(390274),
        g = r(220692),
        y = r(575191),
        E = r(68571),
        m = r(625582),
        v = r(965192),
        T = r(59448),
        C = r(920896);
      class S {
        constructor(e, t, r, s, i, n, o, c) {
          (this.container = t),
            (this.injector = r),
            (this.routerProxy = s),
            (this.exceptionsFilter = i),
            (this.routePathFactory = o),
            (this.graphInspector = c),
            (this.routerMethodFactory = new f.RouterMethodFactory()),
            (this.logger = new a.Logger(S.name, { timestamp: !0 })),
            (this.exceptionFiltersCache = new WeakMap()),
            (this.pathsExplorer = new m.PathsExplorer(e));
          const l = new T.RouteParamsFactory(),
            d = new E.PipesContextCreator(t, n),
            p = new E.PipesConsumer(),
            h = new u.GuardsContextCreator(t, n),
            g = new u.GuardsConsumer(),
            v = new y.InterceptorsContextCreator(t, n),
            A = new y.InterceptorsConsumer();
          this.executionContextCreator = new C.RouterExecutionContext(l, d, p, h, g, v, A, t.getHttpAdapterRef());
        }
        explore(e, t, r, s, i) {
          const { instance: n } = e,
            a = this.pathsExplorer.scanForPaths(n);
          this.applyPathsToRouterProxy(r, a, e, t, i, s);
        }
        extractRouterPath(e) {
          const t = Reflect.getMetadata(s.PATH_METADATA, e);
          if ((0, o.isUndefined)(t)) throw new l.UnknownRequestMappingException(e);
          return Array.isArray(t) ? t.map((e) => (0, o.addLeadingSlash)(e)) : [(0, o.addLeadingSlash)(t)];
        }
        applyPathsToRouterProxy(e, t, r, s, i, n) {
          (t || []).forEach((t) => {
            const { version: a } = t;
            (i.methodVersion = a), this.applyCallbackToRouter(e, t, r, s, i, n);
          });
        }
        applyCallbackToRouter(e, t, r, s, n, a) {
          const { path: o, requestMethod: c, targetCallback: l, methodName: u } = t,
            { instance: d } = r,
            p = this.routerMethodFactory.get(e, c).bind(e),
            f = r.isDependencyTreeStatic()
              ? this.createCallbackProxy(d, l, u, s, c)
              : this.createRequestScopedHandler(r, c, this.container.getModuleByKey(s), s, u),
            g = (n.methodVersion || n.controllerVersion) && n.versioningOptions;
          let y = this.applyHostFilter(a, f);
          o.forEach((t) => {
            g && n.versioningOptions.type !== i.VersioningType.URI && (y = this.applyVersionFilter(e, n, y)),
              (n.methodPath = t),
              this.routePathFactory.create(n, c).forEach((e) => {
                const t = {
                  type: "http-endpoint",
                  methodName: u,
                  className: r.name,
                  classNodeId: r.id,
                  metadata: {
                    key: e,
                    path: e,
                    requestMethod: i.RequestMethod[c],
                    methodVersion: n.methodVersion,
                    controllerVersion: n.controllerVersion
                  }
                };
                p(e, y), this.graphInspector.insertEntrypointDefinition(t, r.id);
              }),
              this.routePathFactory.create(Object.assign(Object.assign({}, n), { versioningOptions: void 0 }), c).forEach((e) => {
                if (g) {
                  const t = this.routePathFactory.getVersion(n);
                  this.logger.log((0, h.VERSIONED_ROUTE_MAPPED_MESSAGE)(e, c, t));
                } else this.logger.log((0, h.ROUTE_MAPPED_MESSAGE)(e, c));
              });
          });
        }
        applyHostFilter(e, t) {
          if (!e) return t;
          const r = this.container.getHttpAdapterRef(),
            s = (Array.isArray(e) ? e : [e]).map((e) => {
              const t = [];
              return { regexp: c(e, t), keys: t };
            }),
            i = Array.isArray(e)
              ? `HTTP adapter does not support filtering on hosts: ["${e.join('", "')}"]`
              : `HTTP adapter does not support filtering on host: "${e}"`;
          return (e, a, o) => {
            e.hosts = {};
            const c = r.getRequestHostname(e) || "";
            for (const r of s) {
              const s = c.match(r.regexp);
              if (s) return r.keys.forEach((t, r) => (e.hosts[t.name] = s[r + 1])), t(e, a, o);
            }
            if (!o) throw new n.InternalServerErrorException(i);
            return o();
          };
        }
        applyVersionFilter(e, t, r) {
          const s = this.routePathFactory.getVersion(t);
          return e.applyVersionFilter(r, s, t.versioningOptions);
        }
        createCallbackProxy(e, t, r, s, i, n = g.STATIC_CONTEXT, a) {
          const o = this.executionContextCreator.create(e, t, r, s, i, n, a),
            c = this.exceptionsFilter.create(e, t, s, n, a);
          return this.routerProxy.createProxy(o, c);
        }
        createRequestScopedHandler(e, t, r, s, i) {
          const { instance: n } = e,
            a = r.controllers,
            o = e.isDependencyTreeDurable();
          return async (c, l, u) => {
            try {
              const d = this.getContextId(c, o),
                p = await this.injector.loadPerContext(n, r, a, d);
              await this.createCallbackProxy(p, p[i], i, s, t, d, e.id)(c, l, u);
            } catch (e) {
              let t = this.exceptionFiltersCache.get(n[i]);
              t || ((t = this.exceptionsFilter.create(n, n[i], s)), this.exceptionFiltersCache.set(n[i], t));
              const r = new p.ExecutionContextHost([c, l, u]);
              t.next(e, r);
            }
          };
        }
        getContextId(e, t) {
          const r = d.ContextIdFactory.getByRequest(e);
          if (!e[v.REQUEST_CONTEXT_ID]) {
            Object.defineProperty(e, v.REQUEST_CONTEXT_ID, { value: r, enumerable: !1, writable: !1, configurable: !1 });
            const s = t ? r.payload : e;
            this.container.registerRequestProvider(s, r);
          }
          return r;
        }
      }
      t.RouterExplorer = S;
    },
    889421: (e, t, r) => {
      "use strict";
      var s;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RouterModule = t.targetModulesByContainer = t.ROUTES = void 0);
      const i = r(488802),
        n = r(17988),
        a = r(545911),
        o = r(514046),
        c = r(973640),
        l = r(748547);
      (t.ROUTES = Symbol("ROUTES")), (t.targetModulesByContainer = new WeakMap());
      let u = (s = class {
        constructor(e, t) {
          (this.modulesContainer = e), (this.routes = t), (this.routes = this.deepCloneRoutes(t)), this.initialize();
        }
        static register(e) {
          return { module: s, providers: [{ provide: t.ROUTES, useValue: e }] };
        }
        deepCloneRoutes(e) {
          return e.map((e) =>
            "function" == typeof e
              ? e
              : e.children
              ? Object.assign(Object.assign({}, e), { children: this.deepCloneRoutes(e.children) })
              : Object.assign({}, e)
          );
        }
        initialize() {
          (0, l.flattenRoutePaths)(this.routes).forEach((e) => {
            const t = (0, o.normalizePath)(e.path);
            this.registerModulePathMetadata(e.module, t), this.updateTargetModulesCache(e.module);
          });
        }
        registerModulePathMetadata(e, t) {
          Reflect.defineMetadata(a.MODULE_PATH + this.modulesContainer.applicationId, t, e);
        }
        updateTargetModulesCache(e) {
          let r;
          t.targetModulesByContainer.has(this.modulesContainer)
            ? (r = t.targetModulesByContainer.get(this.modulesContainer))
            : ((r = new WeakSet()), t.targetModulesByContainer.set(this.modulesContainer, r));
          const s = Array.from(this.modulesContainer.values()).find((t) => (null == t ? void 0 : t.metatype) === e);
          s && r.add(s);
        }
      });
      (u = s =
        i.__decorate(
          [(0, n.Module)({}), i.__param(1, (0, n.Inject)(t.ROUTES)), i.__metadata("design:paramtypes", [c.ModulesContainer, Array])],
          u
        )),
        (t.RouterModule = u);
    },
    610134: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RouterProxy = void 0);
      const s = r(115314);
      t.RouterProxy = class {
        createProxy(e, t) {
          return async (r, i, n) => {
            try {
              await e(r, i, n);
            } catch (e) {
              const a = new s.ExecutionContextHost([r, i, n]);
              return t.next(e, a), i;
            }
          };
        }
        createExceptionLayerProxy(e, t) {
          return async (r, i, n, a) => {
            try {
              await e(r, i, n, a);
            } catch (e) {
              const r = new s.ExecutionContextHost([i, n, a]);
              return t.next(e, r), n;
            }
          };
        }
      };
    },
    487102: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RouterResponseController = void 0);
      const s = r(17988),
        i = r(514046),
        n = r(518948),
        a = r(903343),
        o = r(462443);
      class c {
        constructor(e) {
          (this.applicationRef = e), (this.logger = new s.Logger(c.name));
        }
        async apply(e, t, r) {
          return this.applicationRef.reply(t, e, r);
        }
        async redirect(e, t, r) {
          const i = await this.transformToResult(e),
            n = i && i.statusCode ? i.statusCode : r.statusCode ? r.statusCode : s.HttpStatus.FOUND,
            a = i && i.url ? i.url : r.url;
          this.applicationRef.redirect(t, n, a);
        }
        async render(e, t, r) {
          const s = await this.transformToResult(e);
          return this.applicationRef.render(t, r, s);
        }
        async transformToResult(e) {
          return (0, n.isObservable)(e) ? (0, n.lastValueFrom)(e) : e;
        }
        getStatusByMethod(e) {
          return e === s.RequestMethod.POST ? s.HttpStatus.CREATED : s.HttpStatus.OK;
        }
        setHeaders(e, t) {
          t.forEach(({ name: t, value: r }) => this.applicationRef.setHeader(e, t, r));
        }
        setStatus(e, t) {
          this.applicationRef.status(e, t);
        }
        sse(e, t, r, s) {
          if (t.writableEnded) return;
          this.assertObservable(e);
          const c = new o.SseStream(r);
          c.pipe(t, s);
          const l = e
            .pipe(
              (0, a.map)((e) => ((0, i.isObject)(e) ? e : { data: e })),
              (0, a.debounce)((e) => new Promise((t) => c.writeMessage(e, () => t()))),
              (0, a.catchError)((e) => {
                const t = e instanceof Error ? e.message : e;
                return (
                  c.writeMessage({ type: "error", data: t }, (e) => {
                    e && this.logger.error(e);
                  }),
                  n.EMPTY
                );
              })
            )
            .subscribe({
              complete: () => {
                t.end();
              }
            });
          r.on("close", () => {
            l.unsubscribe();
          });
        }
        assertObservable(e) {
          if (!(0, n.isObservable)(e)) throw new ReferenceError("You must return an Observable stream to use Server-Sent Events (SSE).");
        }
      }
      t.RouterResponseController = c;
    },
    655443: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.RoutesResolver = void 0);
      const s = r(17988),
        i = r(545911),
        n = r(716616),
        a = r(863172),
        o = r(122443),
        c = r(298248),
        l = r(21429),
        u = r(154671),
        d = r(610134);
      class p {
        constructor(e, t, r, s) {
          (this.container = e),
            (this.applicationConfig = t),
            (this.injector = r),
            (this.logger = new n.Logger(p.name, { timestamp: !0 })),
            (this.routerProxy = new d.RouterProxy());
          const i = e.getHttpAdapterRef();
          (this.routerExceptionsFilter = new l.RouterExceptionFilters(e, t, i)),
            (this.routePathFactory = new c.RoutePathFactory(this.applicationConfig));
          const a = new o.MetadataScanner();
          this.routerExplorer = new u.RouterExplorer(
            a,
            this.container,
            this.injector,
            this.routerProxy,
            this.routerExceptionsFilter,
            this.applicationConfig,
            this.routePathFactory,
            s
          );
        }
        resolve(e, t) {
          this.container.getModules().forEach(({ controllers: r, metatype: s }, i) => {
            const n = this.getModulePathMetadata(s);
            this.registerRouters(r, i, t, n, e);
          });
        }
        registerRouters(e, t, r, s, i) {
          e.forEach((e) => {
            const { metatype: n } = e,
              o = this.getHostMetadata(n),
              c = this.routerExplorer.extractRouterPath(n),
              l = this.getVersionMetadata(n),
              u = n.name;
            c.forEach((n) => {
              const c = this.routePathFactory.create({ ctrlPath: n, modulePath: s, globalPrefix: r });
              l
                ? c.forEach((e) => {
                    const t = (0, a.VERSIONED_CONTROLLER_MAPPING_MESSAGE)(u, e, l);
                    this.logger.log(t);
                  })
                : c.forEach((e) => {
                    const t = (0, a.CONTROLLER_MAPPING_MESSAGE)(u, e);
                    this.logger.log(t);
                  });
              const d = this.applicationConfig.getVersioning(),
                p = { ctrlPath: n, modulePath: s, globalPrefix: r, controllerVersion: l, versioningOptions: d };
              this.routerExplorer.explore(e, t, i, o, p);
            });
          });
        }
        registerNotFoundHandler() {
          const e = this.container.getHttpAdapterRef(),
            t = (t, r) => {
              const i = e.getRequestMethod(t),
                n = e.getRequestUrl(t);
              throw new s.NotFoundException(`Cannot ${i} ${n}`);
            },
            r = this.routerExceptionsFilter.create({}, t, void 0),
            i = this.routerProxy.createProxy(t, r);
          e.setNotFoundHandler && e.setNotFoundHandler(i, this.applicationConfig.getGlobalPrefix());
        }
        registerExceptionHandler() {
          const e = (e, t, r, s) => {
              throw this.mapExternalException(e);
            },
            t = this.routerExceptionsFilter.create({}, e, void 0),
            r = this.routerProxy.createExceptionLayerProxy(e, t),
            s = this.container.getHttpAdapterRef();
          s.setErrorHandler && s.setErrorHandler(r, this.applicationConfig.getGlobalPrefix());
        }
        mapExternalException(e) {
          return 1 == (e instanceof SyntaxError || e instanceof URIError) ? new s.BadRequestException(e.message) : e;
        }
        getModulePathMetadata(e) {
          const t = this.container.getModules(),
            r = Reflect.getMetadata(i.MODULE_PATH + t.applicationId, e);
          return null != r ? r : Reflect.getMetadata(i.MODULE_PATH, e);
        }
        getHostMetadata(e) {
          return Reflect.getMetadata(i.HOST_METADATA, e);
        }
        getVersionMetadata(e) {
          var t;
          const r = this.applicationConfig.getVersioning();
          if (r) return null !== (t = Reflect.getMetadata(i.VERSION_METADATA, e)) && void 0 !== t ? t : r.defaultVersion;
        }
      }
      t.RoutesResolver = p;
    },
    462443: (e, t, r) => {
      "use strict";
      var s = r(173656);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.SseStream = void 0);
      const i = r(514046),
        n = r(296704);
      function a(e) {
        return (0, i.isObject)(e)
          ? a(JSON.stringify(e))
          : e
              .split(/\r\n|\r|\n/)
              .map((e) => `data: ${e}\n`)
              .join("");
      }
      class o extends n.Transform {
        constructor(e) {
          super({ objectMode: !0 }),
            (this.lastEventId = null),
            e && e.socket && (e.socket.setKeepAlive(!0), e.socket.setNoDelay(!0), e.socket.setTimeout(0));
        }
        pipe(e, t) {
          return (
            e.writeHead &&
              (e.writeHead(
                200,
                Object.assign(Object.assign({}, null == t ? void 0 : t.additionalHeaders), {
                  "Content-Type": "text/event-stream",
                  Connection: "keep-alive",
                  "Cache-Control": "private, no-cache, no-store, must-revalidate, max-age=0, no-transform",
                  Pragma: "no-cache",
                  Expire: "0",
                  "X-Accel-Buffering": "no"
                })
              ),
              e.flushHeaders()),
            e.write("\n"),
            super.pipe(e, t)
          );
        }
        _transform(e, t, r) {
          let s = e.type ? `event: ${e.type}\n` : "";
          (s += e.id ? `id: ${e.id}\n` : ""),
            (s += e.retry ? `retry: ${e.retry}\n` : ""),
            (s += e.data ? a(e.data) : ""),
            (s += "\n"),
            this.push(s),
            r();
        }
        writeMessage(e, t) {
          e.id || (this.lastEventId++, (e.id = this.lastEventId.toString())),
            this.write(e, "utf-8", t) ? s.nextTick(t) : this.once("drain", t);
        }
      }
      t.SseStream = o;
    },
    289527: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isRouteExcluded = t.isRequestMethodAll = void 0);
      const s = r(17988),
        i = r(514046);
      (t.isRequestMethodAll = (e) => s.RequestMethod.ALL === e || -1 === e),
        (t.isRouteExcluded = function (e, r, s) {
          return e.some(
            (e) => !(!(0, t.isRequestMethodAll)(e.requestMethod) && e.requestMethod !== s) && e.pathRegex.exec((0, i.addLeadingSlash)(r))
          );
        });
    },
    86273: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.flattenRoutePaths = void 0);
      const s = r(514046);
      t.flattenRoutePaths = function e(t) {
        const r = [];
        return (
          t.forEach((t) => {
            if ((t.module && t.path && r.push({ module: t.module, path: t.path }), t.children)) {
              const i = t.children;
              i.forEach((e) => {
                !(0, s.isString)(e) && e.path
                  ? (e.path = (0, s.normalizePath)((0, s.normalizePath)(t.path) + (0, s.normalizePath)(e.path)))
                  : r.push({ path: t.path, module: e });
              }),
                r.push(...e(i));
            }
          }),
          r
        );
      };
    },
    748547: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(488802);
      s.__exportStar(r(289527), t), s.__exportStar(r(86273), t);
    },
    736540: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DependenciesScanner = void 0);
      const s = r(545911),
        i = r(689680),
        n = r(514046),
        a = r(573073),
        o = r(136633),
        c = r(984313),
        l = r(215627),
        u = r(71808),
        d = r(457023),
        p = r(390388),
        h = r(165359),
        f = r(126878),
        g = r(641521);
      t.DependenciesScanner = class {
        constructor(e, t, r, s = new o.ApplicationConfig()) {
          (this.container = e),
            (this.metadataScanner = t),
            (this.graphInspector = r),
            (this.applicationConfig = s),
            (this.applicationProvidersApplyMap = []);
        }
        async scan(e) {
          await this.registerCoreModule(),
            await this.scanForModules(e),
            await this.scanModulesForDependencies(),
            this.calculateModulesDistance(),
            this.addScopedEnhancersMetadata(),
            this.container.bindGlobalScope();
        }
        async scanForModules(e, t = [], r = []) {
          const i = await this.insertModule(e, t);
          (e = e instanceof Promise ? await e : e), r.push(e), this.isForwardReference(e) && (e = e.forwardRef());
          const n = this.isDynamicModule(e)
            ? [...this.reflectMetadata(s.MODULE_METADATA.IMPORTS, e.module), ...(e.imports || [])]
            : this.reflectMetadata(s.MODULE_METADATA.IMPORTS, e);
          let a = [];
          for (const [s, i] of n.entries()) {
            if (void 0 === i) throw new p.UndefinedModuleException(e, s, t);
            if (!i) throw new d.InvalidModuleException(e, s, t);
            if (r.includes(i)) continue;
            const n = await this.scanForModules(i, [].concat(t, e), r);
            a = a.concat(n);
          }
          return i ? [i].concat(a) : a;
        }
        async insertModule(e, t) {
          const r = this.isForwardReference(e) ? e.forwardRef() : e;
          if (this.isInjectable(r) || this.isController(r) || this.isExceptionFilter(r)) throw new u.InvalidClassModuleException(e, t);
          return this.container.addModule(r, t);
        }
        async scanModulesForDependencies(e = this.container.getModules()) {
          for (const [t, { metatype: r }] of e)
            await this.reflectImports(r, t, r.name), this.reflectProviders(r, t), this.reflectControllers(r, t), this.reflectExports(r, t);
        }
        async reflectImports(e, t, r) {
          const i = [
            ...this.reflectMetadata(s.MODULE_METADATA.IMPORTS, e),
            ...this.container.getDynamicMetadataByToken(t, s.MODULE_METADATA.IMPORTS)
          ];
          for (const e of i) await this.insertImport(e, t, r);
        }
        reflectProviders(e, t) {
          [
            ...this.reflectMetadata(s.MODULE_METADATA.PROVIDERS, e),
            ...this.container.getDynamicMetadataByToken(t, s.MODULE_METADATA.PROVIDERS)
          ].forEach((e) => {
            this.insertProvider(e, t), this.reflectDynamicMetadata(e, t);
          });
        }
        reflectControllers(e, t) {
          [
            ...this.reflectMetadata(s.MODULE_METADATA.CONTROLLERS, e),
            ...this.container.getDynamicMetadataByToken(t, s.MODULE_METADATA.CONTROLLERS)
          ].forEach((e) => {
            this.insertController(e, t), this.reflectDynamicMetadata(e, t);
          });
        }
        reflectDynamicMetadata(e, t) {
          e &&
            e.prototype &&
            (this.reflectInjectables(e, t, s.GUARDS_METADATA),
            this.reflectInjectables(e, t, s.INTERCEPTORS_METADATA),
            this.reflectInjectables(e, t, s.EXCEPTION_FILTERS_METADATA),
            this.reflectInjectables(e, t, s.PIPES_METADATA),
            this.reflectParamInjectables(e, t, s.ROUTE_ARGS_METADATA));
        }
        reflectExports(e, t) {
          [
            ...this.reflectMetadata(s.MODULE_METADATA.EXPORTS, e),
            ...this.container.getDynamicMetadataByToken(t, s.MODULE_METADATA.EXPORTS)
          ].forEach((e) => this.insertExportedProvider(e, t));
        }
        reflectInjectables(e, t, r) {
          const i = this.reflectMetadata(r, e),
            n = this.metadataScanner.scanFromPrototype(null, e.prototype, this.reflectKeyMetadata.bind(this, e, r));
          i.forEach((i) => this.insertInjectable(i, t, e, s.ENHANCER_KEY_TO_SUBTYPE_MAP[r])),
            n.forEach(({ methodKey: i, metadata: n }) =>
              n.forEach((n) => this.insertInjectable(n, t, e, s.ENHANCER_KEY_TO_SUBTYPE_MAP[r], i))
            );
        }
        reflectParamInjectables(e, t, r) {
          this.metadataScanner
            .scanFromPrototype(null, e.prototype, (t) => {
              const s = Reflect.getMetadata(r, e, t);
              if (s) return { methodKey: t, metadata: s };
            })
            .forEach(({ methodKey: r, metadata: s }) => {
              Object.values(s)
                .map((e) => e.pipes)
                .flat(1)
                .forEach((s) => this.insertInjectable(s, t, e, "pipe", r));
            });
        }
        reflectKeyMetadata(e, t, r) {
          let s = e.prototype;
          do {
            const e = Reflect.getOwnPropertyDescriptor(s, r);
            if (!e) continue;
            const i = Reflect.getMetadata(t, e.value);
            if (!i) return;
            return { methodKey: r, metadata: i };
          } while ((s = Reflect.getPrototypeOf(s)) && s !== Object.prototype && s);
        }
        calculateModulesDistance() {
          const e = this.container.getModules().values();
          e.next();
          const t = [],
            r = (e, s = 1) => {
              e &&
                !t.includes(e) &&
                (t.push(e),
                e.imports.forEach((e) => {
                  e && ((e.distance = s), r(e, s + 1));
                }));
            },
            s = e.next().value;
          r(s);
        }
        async insertImport(e, t, r) {
          if ((0, n.isUndefined)(e)) throw new l.CircularDependencyException(r);
          if (this.isForwardReference(e)) return this.container.addImport(e.forwardRef(), t);
          await this.container.addImport(e, t);
        }
        isCustomProvider(e) {
          return e && !(0, n.isNil)(e.provide);
        }
        insertProvider(e, t) {
          if (!this.isCustomProvider(e)) return this.container.addProvider(e, t);
          const r = this.getApplyProvidersMap(),
            s = Object.keys(r),
            i = e.provide;
          if (!s.includes(i)) return this.container.addProvider(e, t);
          const a = g.UuidFactory.get(i.toString()),
            o = `${i} (UUID: ${a})`;
          let l = e.scope;
          (0, n.isNil)(l) && e.useClass && (l = (0, h.getClassScope)(e.useClass)),
            this.applicationProvidersApplyMap.push({ type: i, moduleKey: t, providerKey: o, scope: l });
          const u = Object.assign(Object.assign({}, e), { provide: o, scope: l }),
            d = c.ENHANCER_TOKEN_TO_SUBTYPE_MAP[i],
            p = u;
          if (this.isRequestOrTransient(p.scope)) return this.container.addInjectable(u, t, d);
          this.container.addProvider(u, t, d);
        }
        insertInjectable(e, t, r, s, i) {
          if ((0, n.isFunction)(e)) {
            const n = this.container.addInjectable(e, t, s, r);
            return (
              this.graphInspector.insertEnhancerMetadataCache({
                moduleToken: t,
                classRef: r,
                enhancerInstanceWrapper: n,
                targetNodeId: n.id,
                subtype: s,
                methodKey: i
              }),
              n
            );
          }
          this.graphInspector.insertEnhancerMetadataCache({ moduleToken: t, classRef: r, enhancerRef: e, methodKey: i, subtype: s });
        }
        insertExportedProvider(e, t) {
          this.container.addExportedProvider(e, t);
        }
        insertController(e, t) {
          this.container.addController(e, t);
        }
        reflectMetadata(e, t) {
          return Reflect.getMetadata(e, t) || [];
        }
        async registerCoreModule() {
          const e = f.InternalCoreModuleFactory.create(
              this.container,
              this,
              this.container.getModuleCompiler(),
              this.container.getHttpAdapterHostRef(),
              this.graphInspector
            ),
            [t] = await this.scanForModules(e);
          this.container.registerCoreModuleRef(t);
        }
        addScopedEnhancersMetadata() {
          (0, a.iterate)(this.applicationProvidersApplyMap)
            .filter((e) => this.isRequestOrTransient(e.scope))
            .forEach(({ moduleKey: e, providerKey: t }) => {
              const r = this.container.getModules(),
                { injectables: s } = r.get(e),
                i = s.get(t);
              (0, a.iterate)(r.values())
                .map((e) => e.controllers.values())
                .flatten()
                .forEach((e) => e.addEnhancerMetadata(i));
            });
        }
        applyApplicationProviders() {
          const e = this.getApplyProvidersMap(),
            t = this.getApplyRequestProvidersMap(),
            r = (e, t, r) => this.container.getModules().get(e)[r].get(t);
          this.applicationProvidersApplyMap.forEach(({ moduleKey: s, providerKey: i, type: n, scope: a }) => {
            let o;
            if (this.isRequestOrTransient(a)) return (o = r(s, i, "injectables")), this.graphInspector.insertAttachedEnhancer(o), t[n](o);
            (o = r(s, i, "providers")), this.graphInspector.insertAttachedEnhancer(o), e[n](o.instance);
          });
        }
        getApplyProvidersMap() {
          return {
            [c.APP_INTERCEPTOR]: (e) => this.applicationConfig.addGlobalInterceptor(e),
            [c.APP_PIPE]: (e) => this.applicationConfig.addGlobalPipe(e),
            [c.APP_GUARD]: (e) => this.applicationConfig.addGlobalGuard(e),
            [c.APP_FILTER]: (e) => this.applicationConfig.addGlobalFilter(e)
          };
        }
        getApplyRequestProvidersMap() {
          return {
            [c.APP_INTERCEPTOR]: (e) => this.applicationConfig.addGlobalRequestInterceptor(e),
            [c.APP_PIPE]: (e) => this.applicationConfig.addGlobalRequestPipe(e),
            [c.APP_GUARD]: (e) => this.applicationConfig.addGlobalRequestGuard(e),
            [c.APP_FILTER]: (e) => this.applicationConfig.addGlobalRequestFilter(e)
          };
        }
        isDynamicModule(e) {
          return e && !!e.module;
        }
        isInjectable(e) {
          return !!Reflect.getMetadata(s.INJECTABLE_WATERMARK, e);
        }
        isController(e) {
          return !!Reflect.getMetadata(s.CONTROLLER_WATERMARK, e);
        }
        isExceptionFilter(e) {
          return !!Reflect.getMetadata(s.CATCH_WATERMARK, e);
        }
        isForwardReference(e) {
          return e && !!e.forwardRef;
        }
        isRequestOrTransient(e) {
          return e === i.Scope.REQUEST || e === i.Scope.TRANSIENT;
        }
      };
    },
    651573: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(488802).__exportStar(r(747350), t);
    },
    747350: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Reflector = void 0);
      const s = r(514046);
      t.Reflector = class {
        get(e, t) {
          return Reflect.getMetadata(e, t);
        }
        getAll(e, t) {
          return (t || []).map((t) => this.get(e, t));
        }
        getAllAndMerge(e, t) {
          const r = this.getAll(e, t).filter((e) => void 0 !== e);
          return (0, s.isEmpty)(r)
            ? r
            : r.reduce((e, t) =>
                Array.isArray(e) ? e.concat(t) : (0, s.isObject)(e) && (0, s.isObject)(t) ? Object.assign(Object.assign({}, e), t) : [e, t]
              );
        }
        getAllAndOverride(e, t) {
          for (const r of t) {
            const t = this.get(e, r);
            if (void 0 !== t) return t;
          }
        }
      };
    },
    582132: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SAGA_METADATA =
          t.EVENTS_HANDLER_METADATA =
          t.EVENT_METADATA =
          t.QUERY_HANDLER_METADATA =
          t.QUERY_METADATA =
          t.COMMAND_HANDLER_METADATA =
          t.COMMAND_METADATA =
            void 0),
        (t.COMMAND_METADATA = "__command__"),
        (t.COMMAND_HANDLER_METADATA = "__commandHandler__"),
        (t.QUERY_METADATA = "__query__"),
        (t.QUERY_HANDLER_METADATA = "__queryHandler__"),
        (t.EVENT_METADATA = "__event__"),
        (t.EVENTS_HANDLER_METADATA = "__eventsHandler__"),
        (t.SAGA_METADATA = "__saga__");
    },
    31408: function (e, t, r) {
      "use strict";
      var s =
          (this && this.__decorate) ||
          function (e, t, r, s) {
            var i,
              n = arguments.length,
              a = n < 3 ? t : null === s ? (s = Object.getOwnPropertyDescriptor(t, r)) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
            else for (var o = e.length - 1; o >= 0; o--) (i = e[o]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
            return n > 3 && a && Object.defineProperty(t, r, a), a;
          },
        i =
          (this && this.__metadata) ||
          function (e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExplorerService = void 0);
      const n = r(17988),
        a = r(973640),
        o = r(582132);
      let c = class {
        constructor(e) {
          this.modulesContainer = e;
        }
        explore() {
          const e = [...this.modulesContainer.values()];
          return {
            commands: this.flatMap(e, (e) => this.filterProvider(e, o.COMMAND_HANDLER_METADATA)),
            queries: this.flatMap(e, (e) => this.filterProvider(e, o.QUERY_HANDLER_METADATA)),
            events: this.flatMap(e, (e) => this.filterProvider(e, o.EVENTS_HANDLER_METADATA)),
            sagas: this.flatMap(e, (e) => this.filterProvider(e, o.SAGA_METADATA))
          };
        }
        flatMap(e, t) {
          return e
            .map((e) => [...e.providers.values()].map(t))
            .reduce((e, t) => e.concat(t), [])
            .filter((e) => !!e);
        }
        filterProvider(e, t) {
          const { instance: r } = e;
          if (r) return this.extractMetadata(r, t);
        }
        extractMetadata(e, t) {
          if (e.constructor) return Reflect.getMetadata(t, e.constructor) ? e.constructor : void 0;
        }
      };
      (c = s([(0, n.Injectable)(), i("design:paramtypes", [a.ModulesContainer])], c)), (t.ExplorerService = c);
    },
    928255: (e, t, r) => {
      "use strict";
      var s = r(173656),
        i = function (e) {
          if ("function" != typeof e) throw new TypeError(e + " is not a function");
          return e;
        },
        n = function (e) {
          var t,
            r,
            s = document.createTextNode(""),
            n = 0;
          return (
            new e(function () {
              var e;
              if (t) r && (t = r.concat(t));
              else {
                if (!r) return;
                t = r;
              }
              if (((r = t), (t = null), "function" == typeof r)) return (e = r), (r = null), void e();
              for (s.data = n = ++n % 2; r; ) (e = r.shift()), r.length || (r = null), e();
            }).observe(s, { characterData: !0 }),
            function (e) {
              i(e), t ? ("function" == typeof t ? (t = [t, e]) : t.push(e)) : ((t = e), (s.data = n = ++n % 2));
            }
          );
        };
      e.exports = (function () {
        if ("object" == typeof s && s && "function" == typeof s.nextTick) return s.nextTick;
        if ("function" == typeof queueMicrotask)
          return function (e) {
            queueMicrotask(i(e));
          };
        if ("object" == typeof document && document) {
          if ("function" == typeof MutationObserver) return n(MutationObserver);
          if ("function" == typeof WebKitMutationObserver) return n(WebKitMutationObserver);
        }
        return "function" == typeof setImmediate
          ? function (e) {
              setImmediate(i(e));
            }
          : "function" == typeof setTimeout || "object" == typeof setTimeout
          ? function (e) {
              setTimeout(i(e), 0);
            }
          : null;
      })();
    },
    443882: (e, t, r) => {
      var s = r(883418);
      function i(e, t) {
        s.cipher.registerAlgorithm(e, function () {
          return new s.aes.Algorithm(e, t);
        });
      }
      r(658654),
        r(23392),
        r(563290),
        (e.exports = s.aes = s.aes || {}),
        (s.aes.startEncrypting = function (e, t, r, s) {
          var i = g({ key: e, output: r, decrypt: !1, mode: s });
          return i.start(t), i;
        }),
        (s.aes.createEncryptionCipher = function (e, t) {
          return g({ key: e, output: null, decrypt: !1, mode: t });
        }),
        (s.aes.startDecrypting = function (e, t, r, s) {
          var i = g({ key: e, output: r, decrypt: !0, mode: s });
          return i.start(t), i;
        }),
        (s.aes.createDecryptionCipher = function (e, t) {
          return g({ key: e, output: null, decrypt: !0, mode: t });
        }),
        (s.aes.Algorithm = function (e, t) {
          u || p();
          var r = this;
          (r.name = e),
            (r.mode = new t({
              blockSize: 16,
              cipher: {
                encrypt: function (e, t) {
                  return f(r._w, e, t, !1);
                },
                decrypt: function (e, t) {
                  return f(r._w, e, t, !0);
                }
              }
            })),
            (r._init = !1);
        }),
        (s.aes.Algorithm.prototype.initialize = function (e) {
          if (!this._init) {
            var t,
              r = e.key;
            if ("string" != typeof r || (16 !== r.length && 24 !== r.length && 32 !== r.length)) {
              if (s.util.isArray(r) && (16 === r.length || 24 === r.length || 32 === r.length)) {
                (t = r), (r = s.util.createBuffer());
                for (var i = 0; i < t.length; ++i) r.putByte(t[i]);
              }
            } else r = s.util.createBuffer(r);
            if (!s.util.isArray(r)) {
              (t = r), (r = []);
              var n = t.length();
              if (16 === n || 24 === n || 32 === n) for (n >>>= 2, i = 0; i < n; ++i) r.push(t.getInt32());
            }
            if (!s.util.isArray(r) || (4 !== r.length && 6 !== r.length && 8 !== r.length)) throw new Error("Invalid key parameter.");
            var a = this.mode.name,
              o = -1 !== ["CFB", "OFB", "CTR", "GCM"].indexOf(a);
            (this._w = h(r, e.decrypt && !o)), (this._init = !0);
          }
        }),
        (s.aes._expandKey = function (e, t) {
          return u || p(), h(e, t);
        }),
        (s.aes._updateBlock = f),
        i("AES-ECB", s.cipher.modes.ecb),
        i("AES-CBC", s.cipher.modes.cbc),
        i("AES-CFB", s.cipher.modes.cfb),
        i("AES-OFB", s.cipher.modes.ofb),
        i("AES-CTR", s.cipher.modes.ctr),
        i("AES-GCM", s.cipher.modes.gcm);
      var n,
        a,
        o,
        c,
        l,
        u = !1,
        d = 4;
      function p() {
        (u = !0), (o = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]);
        for (var e = new Array(256), t = 0; t < 128; ++t) (e[t] = t << 1), (e[t + 128] = ((t + 128) << 1) ^ 283);
        for (n = new Array(256), a = new Array(256), c = new Array(4), l = new Array(4), t = 0; t < 4; ++t)
          (c[t] = new Array(256)), (l[t] = new Array(256));
        var r,
          s,
          i,
          d,
          p,
          h,
          f,
          g = 0,
          y = 0;
        for (t = 0; t < 256; ++t) {
          (d = ((d = y ^ (y << 1) ^ (y << 2) ^ (y << 3) ^ (y << 4)) >> 8) ^ (255 & d) ^ 99),
            (n[g] = d),
            (a[d] = g),
            (h = ((p = e[d]) << 24) ^ (d << 16) ^ (d << 8) ^ d ^ p),
            (f = (((r = e[g]) ^ (s = e[r]) ^ (i = e[s])) << 24) ^ ((g ^ i) << 16) ^ ((g ^ s ^ i) << 8) ^ g ^ r ^ i);
          for (var E = 0; E < 4; ++E) (c[E][g] = h), (l[E][d] = f), (h = (h << 24) | (h >>> 8)), (f = (f << 24) | (f >>> 8));
          0 === g ? (g = y = 1) : ((g = r ^ e[e[e[r ^ i]]]), (y ^= e[e[y]]));
        }
      }
      function h(e, t) {
        for (var r, s = e.slice(0), i = 1, a = s.length, c = d * (a + 6 + 1), u = a; u < c; ++u)
          (r = s[u - 1]),
            u % a == 0
              ? ((r = (n[(r >>> 16) & 255] << 24) ^ (n[(r >>> 8) & 255] << 16) ^ (n[255 & r] << 8) ^ n[r >>> 24] ^ (o[i] << 24)), i++)
              : a > 6 && u % a == 4 && (r = (n[r >>> 24] << 24) ^ (n[(r >>> 16) & 255] << 16) ^ (n[(r >>> 8) & 255] << 8) ^ n[255 & r]),
            (s[u] = s[u - a] ^ r);
        if (t) {
          for (var p, h = l[0], f = l[1], g = l[2], y = l[3], E = s.slice(0), m = ((u = 0), (c = s.length) - d); u < c; u += d, m -= d)
            if (0 === u || u === c - d) (E[u] = s[m]), (E[u + 1] = s[m + 3]), (E[u + 2] = s[m + 2]), (E[u + 3] = s[m + 1]);
            else
              for (var v = 0; v < d; ++v)
                (p = s[m + v]), (E[u + (3 & -v)] = h[n[p >>> 24]] ^ f[n[(p >>> 16) & 255]] ^ g[n[(p >>> 8) & 255]] ^ y[n[255 & p]]);
          s = E;
        }
        return s;
      }
      function f(e, t, r, s) {
        var i,
          o,
          u,
          d,
          p,
          h,
          f,
          g,
          y,
          E,
          m,
          v,
          T = e.length / 4 - 1;
        s ? ((i = l[0]), (o = l[1]), (u = l[2]), (d = l[3]), (p = a)) : ((i = c[0]), (o = c[1]), (u = c[2]), (d = c[3]), (p = n)),
          (h = t[0] ^ e[0]),
          (f = t[s ? 3 : 1] ^ e[1]),
          (g = t[2] ^ e[2]),
          (y = t[s ? 1 : 3] ^ e[3]);
        for (var C = 3, S = 1; S < T; ++S)
          (E = i[h >>> 24] ^ o[(f >>> 16) & 255] ^ u[(g >>> 8) & 255] ^ d[255 & y] ^ e[++C]),
            (m = i[f >>> 24] ^ o[(g >>> 16) & 255] ^ u[(y >>> 8) & 255] ^ d[255 & h] ^ e[++C]),
            (v = i[g >>> 24] ^ o[(y >>> 16) & 255] ^ u[(h >>> 8) & 255] ^ d[255 & f] ^ e[++C]),
            (y = i[y >>> 24] ^ o[(h >>> 16) & 255] ^ u[(f >>> 8) & 255] ^ d[255 & g] ^ e[++C]),
            (h = E),
            (f = m),
            (g = v);
        (r[0] = (p[h >>> 24] << 24) ^ (p[(f >>> 16) & 255] << 16) ^ (p[(g >>> 8) & 255] << 8) ^ p[255 & y] ^ e[++C]),
          (r[s ? 3 : 1] = (p[f >>> 24] << 24) ^ (p[(g >>> 16) & 255] << 16) ^ (p[(y >>> 8) & 255] << 8) ^ p[255 & h] ^ e[++C]),
          (r[2] = (p[g >>> 24] << 24) ^ (p[(y >>> 16) & 255] << 16) ^ (p[(h >>> 8) & 255] << 8) ^ p[255 & f] ^ e[++C]),
          (r[s ? 1 : 3] = (p[y >>> 24] << 24) ^ (p[(h >>> 16) & 255] << 16) ^ (p[(f >>> 8) & 255] << 8) ^ p[255 & g] ^ e[++C]);
      }
      function g(e) {
        var t,
          r = "AES-" + ((e = e || {}).mode || "CBC").toUpperCase(),
          i = (t = e.decrypt ? s.cipher.createDecipher(r, e.key) : s.cipher.createCipher(r, e.key)).start;
        return (
          (t.start = function (e, r) {
            var n = null;
            r instanceof s.util.ByteBuffer && ((n = r), (r = {})), ((r = r || {}).output = n), (r.iv = e), i.call(t, r);
          }),
          t
        );
      }
    },
    810001: (e, t, r) => {
      var s = r(883418);
      r(563290), r(843793);
      var i = (e.exports = s.asn1 = s.asn1 || {});
      function n(e, t, r) {
        if (r > t) {
          var s = new Error("Too few bytes to parse DER.");
          throw ((s.available = e.length()), (s.remaining = t), (s.requested = r), s);
        }
      }
      (i.Class = { UNIVERSAL: 0, APPLICATION: 64, CONTEXT_SPECIFIC: 128, PRIVATE: 192 }),
        (i.Type = {
          NONE: 0,
          BOOLEAN: 1,
          INTEGER: 2,
          BITSTRING: 3,
          OCTETSTRING: 4,
          NULL: 5,
          OID: 6,
          ODESC: 7,
          EXTERNAL: 8,
          REAL: 9,
          ENUMERATED: 10,
          EMBEDDED: 11,
          UTF8: 12,
          ROID: 13,
          SEQUENCE: 16,
          SET: 17,
          PRINTABLESTRING: 19,
          IA5STRING: 22,
          UTCTIME: 23,
          GENERALIZEDTIME: 24,
          BMPSTRING: 30
        }),
        (i.create = function (e, t, r, n, a) {
          if (s.util.isArray(n)) {
            for (var o = [], c = 0; c < n.length; ++c) void 0 !== n[c] && o.push(n[c]);
            n = o;
          }
          var l = { tagClass: e, type: t, constructed: r, composed: r || s.util.isArray(n), value: n };
          return a && "bitStringContents" in a && ((l.bitStringContents = a.bitStringContents), (l.original = i.copy(l))), l;
        }),
        (i.copy = function (e, t) {
          var r;
          if (s.util.isArray(e)) {
            r = [];
            for (var n = 0; n < e.length; ++n) r.push(i.copy(e[n], t));
            return r;
          }
          return "string" == typeof e
            ? e
            : ((r = { tagClass: e.tagClass, type: e.type, constructed: e.constructed, composed: e.composed, value: i.copy(e.value, t) }),
              t && !t.excludeBitStringContents && (r.bitStringContents = e.bitStringContents),
              r);
        }),
        (i.equals = function (e, t, r) {
          if (s.util.isArray(e)) {
            if (!s.util.isArray(t)) return !1;
            if (e.length !== t.length) return !1;
            for (var n = 0; n < e.length; ++n) if (!i.equals(e[n], t[n])) return !1;
            return !0;
          }
          if (typeof e != typeof t) return !1;
          if ("string" == typeof e) return e === t;
          var a =
            e.tagClass === t.tagClass &&
            e.type === t.type &&
            e.constructed === t.constructed &&
            e.composed === t.composed &&
            i.equals(e.value, t.value);
          return r && r.includeBitStringContents && (a = a && e.bitStringContents === t.bitStringContents), a;
        }),
        (i.getBerValueLength = function (e) {
          var t = e.getByte();
          if (128 !== t) return 128 & t ? e.getInt((127 & t) << 3) : t;
        });
      var a = function (e, t) {
        var r = e.getByte();
        if ((t--, 128 !== r)) {
          var s;
          if (128 & r) {
            var i = 127 & r;
            n(e, t, i), (s = e.getInt(i << 3));
          } else s = r;
          if (s < 0) throw new Error("Negative length: " + s);
          return s;
        }
      };
      function o(e, t, r, s) {
        var c;
        n(e, t, 2);
        var l = e.getByte();
        t--;
        var u = 192 & l,
          d = 31 & l;
        c = e.length();
        var p,
          h,
          f = a(e, t);
        if (((t -= c - e.length()), void 0 !== f && f > t)) {
          if (s.strict) {
            var g = new Error("Too few bytes to read ASN.1 value.");
            throw ((g.available = e.length()), (g.remaining = t), (g.requested = f), g);
          }
          f = t;
        }
        var y = 32 == (32 & l);
        if (y)
          if (((p = []), void 0 === f))
            for (;;) {
              if ((n(e, t, 2), e.bytes(2) === String.fromCharCode(0, 0))) {
                e.getBytes(2), (t -= 2);
                break;
              }
              (c = e.length()), p.push(o(e, t, r + 1, s)), (t -= c - e.length());
            }
          else for (; f > 0; ) (c = e.length()), p.push(o(e, f, r + 1, s)), (t -= c - e.length()), (f -= c - e.length());
        if (
          (void 0 === p && u === i.Class.UNIVERSAL && d === i.Type.BITSTRING && (h = e.bytes(f)),
          void 0 === p && s.decodeBitStrings && u === i.Class.UNIVERSAL && d === i.Type.BITSTRING && f > 1)
        ) {
          var E = e.read,
            m = t,
            v = 0;
          if ((d === i.Type.BITSTRING && (n(e, t, 1), (v = e.getByte()), t--), 0 === v))
            try {
              c = e.length();
              var T = o(e, t, r + 1, { strict: !0, decodeBitStrings: !0 }),
                C = c - e.length();
              (t -= C), d == i.Type.BITSTRING && C++;
              var S = T.tagClass;
              C !== f || (S !== i.Class.UNIVERSAL && S !== i.Class.CONTEXT_SPECIFIC) || (p = [T]);
            } catch (e) {}
          void 0 === p && ((e.read = E), (t = m));
        }
        if (void 0 === p) {
          if (void 0 === f) {
            if (s.strict) throw new Error("Non-constructed ASN.1 object of indefinite length.");
            f = t;
          }
          if (d === i.Type.BMPSTRING) for (p = ""; f > 0; f -= 2) n(e, t, 2), (p += String.fromCharCode(e.getInt16())), (t -= 2);
          else (p = e.getBytes(f)), (t -= f);
        }
        var A = void 0 === h ? null : { bitStringContents: h };
        return i.create(u, d, y, p, A);
      }
      (i.fromDer = function (e, t) {
        void 0 === t && (t = { strict: !0, parseAllBytes: !0, decodeBitStrings: !0 }),
          "boolean" == typeof t && (t = { strict: t, parseAllBytes: !0, decodeBitStrings: !0 }),
          "strict" in t || (t.strict = !0),
          "parseAllBytes" in t || (t.parseAllBytes = !0),
          "decodeBitStrings" in t || (t.decodeBitStrings = !0),
          "string" == typeof e && (e = s.util.createBuffer(e));
        var r = e.length(),
          i = o(e, e.length(), 0, t);
        if (t.parseAllBytes && 0 !== e.length()) {
          var n = new Error("Unparsed DER bytes remain after ASN.1 parsing.");
          throw ((n.byteCount = r), (n.remaining = e.length()), n);
        }
        return i;
      }),
        (i.toDer = function (e) {
          var t = s.util.createBuffer(),
            r = e.tagClass | e.type,
            n = s.util.createBuffer(),
            a = !1;
          if (("bitStringContents" in e && ((a = !0), e.original && (a = i.equals(e, e.original))), a)) n.putBytes(e.bitStringContents);
          else if (e.composed) {
            e.constructed ? (r |= 32) : n.putByte(0);
            for (var o = 0; o < e.value.length; ++o) void 0 !== e.value[o] && n.putBuffer(i.toDer(e.value[o]));
          } else if (e.type === i.Type.BMPSTRING) for (o = 0; o < e.value.length; ++o) n.putInt16(e.value.charCodeAt(o));
          else
            e.type === i.Type.INTEGER &&
            e.value.length > 1 &&
            ((0 === e.value.charCodeAt(0) && 0 == (128 & e.value.charCodeAt(1))) ||
              (255 === e.value.charCodeAt(0) && 128 == (128 & e.value.charCodeAt(1))))
              ? n.putBytes(e.value.substr(1))
              : n.putBytes(e.value);
          if ((t.putByte(r), n.length() <= 127)) t.putByte(127 & n.length());
          else {
            var c = n.length(),
              l = "";
            do {
              (l += String.fromCharCode(255 & c)), (c >>>= 8);
            } while (c > 0);
            for (t.putByte(128 | l.length), o = l.length - 1; o >= 0; --o) t.putByte(l.charCodeAt(o));
          }
          return t.putBuffer(n), t;
        }),
        (i.oidToDer = function (e) {
          var t,
            r,
            i,
            n,
            a = e.split("."),
            o = s.util.createBuffer();
          o.putByte(40 * parseInt(a[0], 10) + parseInt(a[1], 10));
          for (var c = 2; c < a.length; ++c) {
            (t = !0), (r = []), (i = parseInt(a[c], 10));
            do {
              (n = 127 & i), (i >>>= 7), t || (n |= 128), r.push(n), (t = !1);
            } while (i > 0);
            for (var l = r.length - 1; l >= 0; --l) o.putByte(r[l]);
          }
          return o;
        }),
        (i.derToOid = function (e) {
          var t;
          "string" == typeof e && (e = s.util.createBuffer(e));
          var r = e.getByte();
          t = Math.floor(r / 40) + "." + (r % 40);
          for (var i = 0; e.length() > 0; ) (i <<= 7), 128 & (r = e.getByte()) ? (i += 127 & r) : ((t += "." + (i + r)), (i = 0));
          return t;
        }),
        (i.utcTimeToDate = function (e) {
          var t = new Date(),
            r = parseInt(e.substr(0, 2), 10);
          r = r >= 50 ? 1900 + r : 2e3 + r;
          var s = parseInt(e.substr(2, 2), 10) - 1,
            i = parseInt(e.substr(4, 2), 10),
            n = parseInt(e.substr(6, 2), 10),
            a = parseInt(e.substr(8, 2), 10),
            o = 0;
          if (e.length > 11) {
            var c = e.charAt(10),
              l = 10;
            "+" !== c && "-" !== c && ((o = parseInt(e.substr(10, 2), 10)), (l += 2));
          }
          if ((t.setUTCFullYear(r, s, i), t.setUTCHours(n, a, o, 0), l && ("+" === (c = e.charAt(l)) || "-" === c))) {
            var u = 60 * parseInt(e.substr(l + 1, 2), 10) + parseInt(e.substr(l + 4, 2), 10);
            (u *= 6e4), "+" === c ? t.setTime(+t - u) : t.setTime(+t + u);
          }
          return t;
        }),
        (i.generalizedTimeToDate = function (e) {
          var t = new Date(),
            r = parseInt(e.substr(0, 4), 10),
            s = parseInt(e.substr(4, 2), 10) - 1,
            i = parseInt(e.substr(6, 2), 10),
            n = parseInt(e.substr(8, 2), 10),
            a = parseInt(e.substr(10, 2), 10),
            o = parseInt(e.substr(12, 2), 10),
            c = 0,
            l = 0,
            u = !1;
          "Z" === e.charAt(e.length - 1) && (u = !0);
          var d = e.length - 5,
            p = e.charAt(d);
          return (
            ("+" !== p && "-" !== p) ||
              ((l = 60 * parseInt(e.substr(d + 1, 2), 10) + parseInt(e.substr(d + 4, 2), 10)),
              (l *= 6e4),
              "+" === p && (l *= -1),
              (u = !0)),
            "." === e.charAt(14) && (c = 1e3 * parseFloat(e.substr(14), 10)),
            u
              ? (t.setUTCFullYear(r, s, i), t.setUTCHours(n, a, o, c), t.setTime(+t + l))
              : (t.setFullYear(r, s, i), t.setHours(n, a, o, c)),
            t
          );
        }),
        (i.dateToUtcTime = function (e) {
          if ("string" == typeof e) return e;
          var t = "",
            r = [];
          r.push(("" + e.getUTCFullYear()).substr(2)),
            r.push("" + (e.getUTCMonth() + 1)),
            r.push("" + e.getUTCDate()),
            r.push("" + e.getUTCHours()),
            r.push("" + e.getUTCMinutes()),
            r.push("" + e.getUTCSeconds());
          for (var s = 0; s < r.length; ++s) r[s].length < 2 && (t += "0"), (t += r[s]);
          return t + "Z";
        }),
        (i.dateToGeneralizedTime = function (e) {
          if ("string" == typeof e) return e;
          var t = "",
            r = [];
          r.push("" + e.getUTCFullYear()),
            r.push("" + (e.getUTCMonth() + 1)),
            r.push("" + e.getUTCDate()),
            r.push("" + e.getUTCHours()),
            r.push("" + e.getUTCMinutes()),
            r.push("" + e.getUTCSeconds());
          for (var s = 0; s < r.length; ++s) r[s].length < 2 && (t += "0"), (t += r[s]);
          return t + "Z";
        }),
        (i.integerToDer = function (e) {
          var t = s.util.createBuffer();
          if (e >= -128 && e < 128) return t.putSignedInt(e, 8);
          if (e >= -32768 && e < 32768) return t.putSignedInt(e, 16);
          if (e >= -8388608 && e < 8388608) return t.putSignedInt(e, 24);
          if (e >= -2147483648 && e < 2147483648) return t.putSignedInt(e, 32);
          var r = new Error("Integer too large; max is 32-bits.");
          throw ((r.integer = e), r);
        }),
        (i.derToInteger = function (e) {
          "string" == typeof e && (e = s.util.createBuffer(e));
          var t = 8 * e.length();
          if (t > 32) throw new Error("Integer too large; max is 32-bits.");
          return e.getSignedInt(t);
        }),
        (i.validate = function (e, t, r, n) {
          var a = !1;
          if ((e.tagClass !== t.tagClass && void 0 !== t.tagClass) || (e.type !== t.type && void 0 !== t.type))
            n &&
              (e.tagClass !== t.tagClass && n.push("[" + t.name + '] Expected tag class "' + t.tagClass + '", got "' + e.tagClass + '"'),
              e.type !== t.type && n.push("[" + t.name + '] Expected type "' + t.type + '", got "' + e.type + '"'));
          else if (e.constructed === t.constructed || void 0 === t.constructed) {
            if (((a = !0), t.value && s.util.isArray(t.value)))
              for (var o = 0, c = 0; a && c < t.value.length; ++c)
                (a = t.value[c].optional || !1),
                  e.value[o] && ((a = i.validate(e.value[o], t.value[c], r, n)) ? ++o : t.value[c].optional && (a = !0)),
                  !a &&
                    n &&
                    n.push(
                      "[" +
                        t.name +
                        '] Tag class "' +
                        t.tagClass +
                        '", type "' +
                        t.type +
                        '" expected value length "' +
                        t.value.length +
                        '", got "' +
                        e.value.length +
                        '"'
                    );
            if (
              a &&
              r &&
              (t.capture && (r[t.capture] = e.value),
              t.captureAsn1 && (r[t.captureAsn1] = e),
              t.captureBitStringContents && "bitStringContents" in e && (r[t.captureBitStringContents] = e.bitStringContents),
              t.captureBitStringValue && "bitStringContents" in e)
            )
              if (e.bitStringContents.length < 2) r[t.captureBitStringValue] = "";
              else {
                if (0 !== e.bitStringContents.charCodeAt(0)) throw new Error("captureBitStringValue only supported for zero unused bits");
                r[t.captureBitStringValue] = e.bitStringContents.slice(1);
              }
          } else n && n.push("[" + t.name + '] Expected constructed "' + t.constructed + '", got "' + e.constructed + '"');
          return a;
        });
      var c = /[^\\u0000-\\u00ff]/;
      i.prettyPrint = function (e, t, r) {
        var n = "";
        (r = r || 2), (t = t || 0) > 0 && (n += "\n");
        for (var a = "", o = 0; o < t * r; ++o) a += " ";
        switch (((n += a + "Tag: "), e.tagClass)) {
          case i.Class.UNIVERSAL:
            n += "Universal:";
            break;
          case i.Class.APPLICATION:
            n += "Application:";
            break;
          case i.Class.CONTEXT_SPECIFIC:
            n += "Context-Specific:";
            break;
          case i.Class.PRIVATE:
            n += "Private:";
        }
        if (e.tagClass === i.Class.UNIVERSAL)
          switch (((n += e.type), e.type)) {
            case i.Type.NONE:
              n += " (None)";
              break;
            case i.Type.BOOLEAN:
              n += " (Boolean)";
              break;
            case i.Type.INTEGER:
              n += " (Integer)";
              break;
            case i.Type.BITSTRING:
              n += " (Bit string)";
              break;
            case i.Type.OCTETSTRING:
              n += " (Octet string)";
              break;
            case i.Type.NULL:
              n += " (Null)";
              break;
            case i.Type.OID:
              n += " (Object Identifier)";
              break;
            case i.Type.ODESC:
              n += " (Object Descriptor)";
              break;
            case i.Type.EXTERNAL:
              n += " (External or Instance of)";
              break;
            case i.Type.REAL:
              n += " (Real)";
              break;
            case i.Type.ENUMERATED:
              n += " (Enumerated)";
              break;
            case i.Type.EMBEDDED:
              n += " (Embedded PDV)";
              break;
            case i.Type.UTF8:
              n += " (UTF8)";
              break;
            case i.Type.ROID:
              n += " (Relative Object Identifier)";
              break;
            case i.Type.SEQUENCE:
              n += " (Sequence)";
              break;
            case i.Type.SET:
              n += " (Set)";
              break;
            case i.Type.PRINTABLESTRING:
              n += " (Printable String)";
              break;
            case i.Type.IA5String:
              n += " (IA5String (ASCII))";
              break;
            case i.Type.UTCTIME:
              n += " (UTC time)";
              break;
            case i.Type.GENERALIZEDTIME:
              n += " (Generalized time)";
              break;
            case i.Type.BMPSTRING:
              n += " (BMP String)";
          }
        else n += e.type;
        if (((n += "\n"), (n += a + "Constructed: " + e.constructed + "\n"), e.composed)) {
          var l = 0,
            u = "";
          for (o = 0; o < e.value.length; ++o)
            void 0 !== e.value[o] && ((l += 1), (u += i.prettyPrint(e.value[o], t + 1, r)), o + 1 < e.value.length && (u += ","));
          n += a + "Sub values: " + l + u;
        } else {
          if (((n += a + "Value: "), e.type === i.Type.OID)) {
            var d = i.derToOid(e.value);
            (n += d), s.pki && s.pki.oids && d in s.pki.oids && (n += " (" + s.pki.oids[d] + ") ");
          }
          if (e.type === i.Type.INTEGER)
            try {
              n += i.derToInteger(e.value);
            } catch (t) {
              n += "0x" + s.util.bytesToHex(e.value);
            }
          else if (e.type === i.Type.BITSTRING) {
            if ((e.value.length > 1 ? (n += "0x" + s.util.bytesToHex(e.value.slice(1))) : (n += "(none)"), e.value.length > 0)) {
              var p = e.value.charCodeAt(0);
              1 == p ? (n += " (1 unused bit shown)") : p > 1 && (n += " (" + p + " unused bits shown)");
            }
          } else if (e.type === i.Type.OCTETSTRING)
            c.test(e.value) || (n += "(" + e.value + ") "), (n += "0x" + s.util.bytesToHex(e.value));
          else if (e.type === i.Type.UTF8)
            try {
              n += s.util.decodeUtf8(e.value);
            } catch (t) {
              if ("URI malformed" !== t.message) throw t;
              n += "0x" + s.util.bytesToHex(e.value) + " (malformed UTF8)";
            }
          else
            e.type === i.Type.PRINTABLESTRING || e.type === i.Type.IA5String
              ? (n += e.value)
              : c.test(e.value)
              ? (n += "0x" + s.util.bytesToHex(e.value))
              : 0 === e.value.length
              ? (n += "[null]")
              : (n += e.value);
        }
        return n;
      };
    },
    240976: (e, t, r) => {
      var s = r(603275).Buffer,
        i = {};
      e.exports = i;
      var n = {};
      (i.encode = function (e, t, r) {
        if ("string" != typeof t) throw new TypeError('"alphabet" must be a string.');
        if (void 0 !== r && "number" != typeof r) throw new TypeError('"maxline" must be a number.');
        var s = "";
        if (e instanceof Uint8Array) {
          var i = 0,
            n = t.length,
            a = t.charAt(0),
            o = [0];
          for (i = 0; i < e.length; ++i) {
            for (var c = 0, l = e[i]; c < o.length; ++c) (l += o[c] << 8), (o[c] = l % n), (l = (l / n) | 0);
            for (; l > 0; ) o.push(l % n), (l = (l / n) | 0);
          }
          for (i = 0; 0 === e[i] && i < e.length - 1; ++i) s += a;
          for (i = o.length - 1; i >= 0; --i) s += t[o[i]];
        } else
          s = (function (e, t) {
            var r = 0,
              s = t.length,
              i = t.charAt(0),
              n = [0];
            for (r = 0; r < e.length(); ++r) {
              for (var a = 0, o = e.at(r); a < n.length; ++a) (o += n[a] << 8), (n[a] = o % s), (o = (o / s) | 0);
              for (; o > 0; ) n.push(o % s), (o = (o / s) | 0);
            }
            var c = "";
            for (r = 0; 0 === e.at(r) && r < e.length() - 1; ++r) c += i;
            for (r = n.length - 1; r >= 0; --r) c += t[n[r]];
            return c;
          })(e, t);
        if (r) {
          var u = new RegExp(".{1," + r + "}", "g");
          s = s.match(u).join("\r\n");
        }
        return s;
      }),
        (i.decode = function (e, t) {
          if ("string" != typeof e) throw new TypeError('"input" must be a string.');
          if ("string" != typeof t) throw new TypeError('"alphabet" must be a string.');
          var r = n[t];
          if (!r) {
            r = n[t] = [];
            for (var i = 0; i < t.length; ++i) r[t.charCodeAt(i)] = i;
          }
          e = e.replace(/\s/g, "");
          var a = t.length,
            o = t.charAt(0),
            c = [0];
          for (i = 0; i < e.length; i++) {
            var l = r[e.charCodeAt(i)];
            if (void 0 === l) return;
            for (var u = 0, d = l; u < c.length; ++u) (d += c[u] * a), (c[u] = 255 & d), (d >>= 8);
            for (; d > 0; ) c.push(255 & d), (d >>= 8);
          }
          for (var p = 0; e[p] === o && p < e.length - 1; ++p) c.push(0);
          return void 0 !== s ? s.from(c.reverse()) : new Uint8Array(c.reverse());
        });
    },
    658654: (e, t, r) => {
      var s = r(883418);
      r(563290),
        (e.exports = s.cipher = s.cipher || {}),
        (s.cipher.algorithms = s.cipher.algorithms || {}),
        (s.cipher.createCipher = function (e, t) {
          var r = e;
          if (("string" == typeof r && (r = s.cipher.getAlgorithm(r)) && (r = r()), !r)) throw new Error("Unsupported algorithm: " + e);
          return new s.cipher.BlockCipher({ algorithm: r, key: t, decrypt: !1 });
        }),
        (s.cipher.createDecipher = function (e, t) {
          var r = e;
          if (("string" == typeof r && (r = s.cipher.getAlgorithm(r)) && (r = r()), !r)) throw new Error("Unsupported algorithm: " + e);
          return new s.cipher.BlockCipher({ algorithm: r, key: t, decrypt: !0 });
        }),
        (s.cipher.registerAlgorithm = function (e, t) {
          (e = e.toUpperCase()), (s.cipher.algorithms[e] = t);
        }),
        (s.cipher.getAlgorithm = function (e) {
          return (e = e.toUpperCase()) in s.cipher.algorithms ? s.cipher.algorithms[e] : null;
        });
      var i = (s.cipher.BlockCipher = function (e) {
        (this.algorithm = e.algorithm),
          (this.mode = this.algorithm.mode),
          (this.blockSize = this.mode.blockSize),
          (this._finish = !1),
          (this._input = null),
          (this.output = null),
          (this._op = e.decrypt ? this.mode.decrypt : this.mode.encrypt),
          (this._decrypt = e.decrypt),
          this.algorithm.initialize(e);
      });
      (i.prototype.start = function (e) {
        e = e || {};
        var t = {};
        for (var r in e) t[r] = e[r];
        (t.decrypt = this._decrypt),
          (this._finish = !1),
          (this._input = s.util.createBuffer()),
          (this.output = e.output || s.util.createBuffer()),
          this.mode.start(t);
      }),
        (i.prototype.update = function (e) {
          for (e && this._input.putBuffer(e); !this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish; );
          this._input.compact();
        }),
        (i.prototype.finish = function (e) {
          !e ||
            ("ECB" !== this.mode.name && "CBC" !== this.mode.name) ||
            ((this.mode.pad = function (t) {
              return e(this.blockSize, t, !1);
            }),
            (this.mode.unpad = function (t) {
              return e(this.blockSize, t, !0);
            }));
          var t = {};
          return (
            (t.decrypt = this._decrypt),
            (t.overflow = this._input.length() % this.blockSize),
            !(
              (!this._decrypt && this.mode.pad && !this.mode.pad(this._input, t)) ||
              ((this._finish = !0),
              this.update(),
              (this._decrypt && this.mode.unpad && !this.mode.unpad(this.output, t)) ||
                (this.mode.afterFinish && !this.mode.afterFinish(this.output, t)))
            )
          );
        });
    },
    23392: (e, t, r) => {
      var s = r(883418);
      r(563290), (s.cipher = s.cipher || {});
      var i = (e.exports = s.cipher.modes = s.cipher.modes || {});
      function n(e, t) {
        if (("string" == typeof e && (e = s.util.createBuffer(e)), s.util.isArray(e) && e.length > 4)) {
          var r = e;
          e = s.util.createBuffer();
          for (var i = 0; i < r.length; ++i) e.putByte(r[i]);
        }
        if (e.length() < t) throw new Error("Invalid IV length; got " + e.length() + " bytes and expected " + t + " bytes.");
        if (!s.util.isArray(e)) {
          var n = [],
            a = t / 4;
          for (i = 0; i < a; ++i) n.push(e.getInt32());
          e = n;
        }
        return e;
      }
      function a(e) {
        e[e.length - 1] = (e[e.length - 1] + 1) & 4294967295;
      }
      function o(e) {
        return [(e / 4294967296) | 0, 4294967295 & e];
      }
      (i.ecb = function (e) {
        (e = e || {}),
          (this.name = "ECB"),
          (this.cipher = e.cipher),
          (this.blockSize = e.blockSize || 16),
          (this._ints = this.blockSize / 4),
          (this._inBlock = new Array(this._ints)),
          (this._outBlock = new Array(this._ints));
      }),
        (i.ecb.prototype.start = function (e) {}),
        (i.ecb.prototype.encrypt = function (e, t, r) {
          if (e.length() < this.blockSize && !(r && e.length() > 0)) return !0;
          for (var s = 0; s < this._ints; ++s) this._inBlock[s] = e.getInt32();
          for (this.cipher.encrypt(this._inBlock, this._outBlock), s = 0; s < this._ints; ++s) t.putInt32(this._outBlock[s]);
        }),
        (i.ecb.prototype.decrypt = function (e, t, r) {
          if (e.length() < this.blockSize && !(r && e.length() > 0)) return !0;
          for (var s = 0; s < this._ints; ++s) this._inBlock[s] = e.getInt32();
          for (this.cipher.decrypt(this._inBlock, this._outBlock), s = 0; s < this._ints; ++s) t.putInt32(this._outBlock[s]);
        }),
        (i.ecb.prototype.pad = function (e, t) {
          var r = e.length() === this.blockSize ? this.blockSize : this.blockSize - e.length();
          return e.fillWithByte(r, r), !0;
        }),
        (i.ecb.prototype.unpad = function (e, t) {
          if (t.overflow > 0) return !1;
          var r = e.length(),
            s = e.at(r - 1);
          return !(s > this.blockSize << 2 || (e.truncate(s), 0));
        }),
        (i.cbc = function (e) {
          (e = e || {}),
            (this.name = "CBC"),
            (this.cipher = e.cipher),
            (this.blockSize = e.blockSize || 16),
            (this._ints = this.blockSize / 4),
            (this._inBlock = new Array(this._ints)),
            (this._outBlock = new Array(this._ints));
        }),
        (i.cbc.prototype.start = function (e) {
          if (null === e.iv) {
            if (!this._prev) throw new Error("Invalid IV parameter.");
            this._iv = this._prev.slice(0);
          } else {
            if (!("iv" in e)) throw new Error("Invalid IV parameter.");
            (this._iv = n(e.iv, this.blockSize)), (this._prev = this._iv.slice(0));
          }
        }),
        (i.cbc.prototype.encrypt = function (e, t, r) {
          if (e.length() < this.blockSize && !(r && e.length() > 0)) return !0;
          for (var s = 0; s < this._ints; ++s) this._inBlock[s] = this._prev[s] ^ e.getInt32();
          for (this.cipher.encrypt(this._inBlock, this._outBlock), s = 0; s < this._ints; ++s) t.putInt32(this._outBlock[s]);
          this._prev = this._outBlock;
        }),
        (i.cbc.prototype.decrypt = function (e, t, r) {
          if (e.length() < this.blockSize && !(r && e.length() > 0)) return !0;
          for (var s = 0; s < this._ints; ++s) this._inBlock[s] = e.getInt32();
          for (this.cipher.decrypt(this._inBlock, this._outBlock), s = 0; s < this._ints; ++s)
            t.putInt32(this._prev[s] ^ this._outBlock[s]);
          this._prev = this._inBlock.slice(0);
        }),
        (i.cbc.prototype.pad = function (e, t) {
          var r = e.length() === this.blockSize ? this.blockSize : this.blockSize - e.length();
          return e.fillWithByte(r, r), !0;
        }),
        (i.cbc.prototype.unpad = function (e, t) {
          if (t.overflow > 0) return !1;
          var r = e.length(),
            s = e.at(r - 1);
          return !(s > this.blockSize << 2 || (e.truncate(s), 0));
        }),
        (i.cfb = function (e) {
          (e = e || {}),
            (this.name = "CFB"),
            (this.cipher = e.cipher),
            (this.blockSize = e.blockSize || 16),
            (this._ints = this.blockSize / 4),
            (this._inBlock = null),
            (this._outBlock = new Array(this._ints)),
            (this._partialBlock = new Array(this._ints)),
            (this._partialOutput = s.util.createBuffer()),
            (this._partialBytes = 0);
        }),
        (i.cfb.prototype.start = function (e) {
          if (!("iv" in e)) throw new Error("Invalid IV parameter.");
          (this._iv = n(e.iv, this.blockSize)), (this._inBlock = this._iv.slice(0)), (this._partialBytes = 0);
        }),
        (i.cfb.prototype.encrypt = function (e, t, r) {
          var s = e.length();
          if (0 === s) return !0;
          if ((this.cipher.encrypt(this._inBlock, this._outBlock), 0 === this._partialBytes && s >= this.blockSize))
            for (var i = 0; i < this._ints; ++i) (this._inBlock[i] = e.getInt32() ^ this._outBlock[i]), t.putInt32(this._inBlock[i]);
          else {
            var n = (this.blockSize - s) % this.blockSize;
            for (n > 0 && (n = this.blockSize - n), this._partialOutput.clear(), i = 0; i < this._ints; ++i)
              (this._partialBlock[i] = e.getInt32() ^ this._outBlock[i]), this._partialOutput.putInt32(this._partialBlock[i]);
            if (n > 0) e.read -= this.blockSize;
            else for (i = 0; i < this._ints; ++i) this._inBlock[i] = this._partialBlock[i];
            if ((this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), n > 0 && !r))
              return t.putBytes(this._partialOutput.getBytes(n - this._partialBytes)), (this._partialBytes = n), !0;
            t.putBytes(this._partialOutput.getBytes(s - this._partialBytes)), (this._partialBytes = 0);
          }
        }),
        (i.cfb.prototype.decrypt = function (e, t, r) {
          var s = e.length();
          if (0 === s) return !0;
          if ((this.cipher.encrypt(this._inBlock, this._outBlock), 0 === this._partialBytes && s >= this.blockSize))
            for (var i = 0; i < this._ints; ++i) (this._inBlock[i] = e.getInt32()), t.putInt32(this._inBlock[i] ^ this._outBlock[i]);
          else {
            var n = (this.blockSize - s) % this.blockSize;
            for (n > 0 && (n = this.blockSize - n), this._partialOutput.clear(), i = 0; i < this._ints; ++i)
              (this._partialBlock[i] = e.getInt32()), this._partialOutput.putInt32(this._partialBlock[i] ^ this._outBlock[i]);
            if (n > 0) e.read -= this.blockSize;
            else for (i = 0; i < this._ints; ++i) this._inBlock[i] = this._partialBlock[i];
            if ((this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), n > 0 && !r))
              return t.putBytes(this._partialOutput.getBytes(n - this._partialBytes)), (this._partialBytes = n), !0;
            t.putBytes(this._partialOutput.getBytes(s - this._partialBytes)), (this._partialBytes = 0);
          }
        }),
        (i.ofb = function (e) {
          (e = e || {}),
            (this.name = "OFB"),
            (this.cipher = e.cipher),
            (this.blockSize = e.blockSize || 16),
            (this._ints = this.blockSize / 4),
            (this._inBlock = null),
            (this._outBlock = new Array(this._ints)),
            (this._partialOutput = s.util.createBuffer()),
            (this._partialBytes = 0);
        }),
        (i.ofb.prototype.start = function (e) {
          if (!("iv" in e)) throw new Error("Invalid IV parameter.");
          (this._iv = n(e.iv, this.blockSize)), (this._inBlock = this._iv.slice(0)), (this._partialBytes = 0);
        }),
        (i.ofb.prototype.encrypt = function (e, t, r) {
          var s = e.length();
          if (0 === e.length()) return !0;
          if ((this.cipher.encrypt(this._inBlock, this._outBlock), 0 === this._partialBytes && s >= this.blockSize))
            for (var i = 0; i < this._ints; ++i) t.putInt32(e.getInt32() ^ this._outBlock[i]), (this._inBlock[i] = this._outBlock[i]);
          else {
            var n = (this.blockSize - s) % this.blockSize;
            for (n > 0 && (n = this.blockSize - n), this._partialOutput.clear(), i = 0; i < this._ints; ++i)
              this._partialOutput.putInt32(e.getInt32() ^ this._outBlock[i]);
            if (n > 0) e.read -= this.blockSize;
            else for (i = 0; i < this._ints; ++i) this._inBlock[i] = this._outBlock[i];
            if ((this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), n > 0 && !r))
              return t.putBytes(this._partialOutput.getBytes(n - this._partialBytes)), (this._partialBytes = n), !0;
            t.putBytes(this._partialOutput.getBytes(s - this._partialBytes)), (this._partialBytes = 0);
          }
        }),
        (i.ofb.prototype.decrypt = i.ofb.prototype.encrypt),
        (i.ctr = function (e) {
          (e = e || {}),
            (this.name = "CTR"),
            (this.cipher = e.cipher),
            (this.blockSize = e.blockSize || 16),
            (this._ints = this.blockSize / 4),
            (this._inBlock = null),
            (this._outBlock = new Array(this._ints)),
            (this._partialOutput = s.util.createBuffer()),
            (this._partialBytes = 0);
        }),
        (i.ctr.prototype.start = function (e) {
          if (!("iv" in e)) throw new Error("Invalid IV parameter.");
          (this._iv = n(e.iv, this.blockSize)), (this._inBlock = this._iv.slice(0)), (this._partialBytes = 0);
        }),
        (i.ctr.prototype.encrypt = function (e, t, r) {
          var s = e.length();
          if (0 === s) return !0;
          if ((this.cipher.encrypt(this._inBlock, this._outBlock), 0 === this._partialBytes && s >= this.blockSize))
            for (var i = 0; i < this._ints; ++i) t.putInt32(e.getInt32() ^ this._outBlock[i]);
          else {
            var n = (this.blockSize - s) % this.blockSize;
            for (n > 0 && (n = this.blockSize - n), this._partialOutput.clear(), i = 0; i < this._ints; ++i)
              this._partialOutput.putInt32(e.getInt32() ^ this._outBlock[i]);
            if (
              (n > 0 && (e.read -= this.blockSize), this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), n > 0 && !r)
            )
              return t.putBytes(this._partialOutput.getBytes(n - this._partialBytes)), (this._partialBytes = n), !0;
            t.putBytes(this._partialOutput.getBytes(s - this._partialBytes)), (this._partialBytes = 0);
          }
          a(this._inBlock);
        }),
        (i.ctr.prototype.decrypt = i.ctr.prototype.encrypt),
        (i.gcm = function (e) {
          (e = e || {}),
            (this.name = "GCM"),
            (this.cipher = e.cipher),
            (this.blockSize = e.blockSize || 16),
            (this._ints = this.blockSize / 4),
            (this._inBlock = new Array(this._ints)),
            (this._outBlock = new Array(this._ints)),
            (this._partialOutput = s.util.createBuffer()),
            (this._partialBytes = 0),
            (this._R = 3774873600);
        }),
        (i.gcm.prototype.start = function (e) {
          if (!("iv" in e)) throw new Error("Invalid IV parameter.");
          var t,
            r = s.util.createBuffer(e.iv);
          if (
            ((this._cipherLength = 0),
            (t = "additionalData" in e ? s.util.createBuffer(e.additionalData) : s.util.createBuffer()),
            (this._tagLength = "tagLength" in e ? e.tagLength : 128),
            (this._tag = null),
            e.decrypt && ((this._tag = s.util.createBuffer(e.tag).getBytes()), this._tag.length !== this._tagLength / 8))
          )
            throw new Error("Authentication tag does not match tag length.");
          (this._hashBlock = new Array(this._ints)),
            (this.tag = null),
            (this._hashSubkey = new Array(this._ints)),
            this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey),
            (this.componentBits = 4),
            (this._m = this.generateHashTable(this._hashSubkey, this.componentBits));
          var i = r.length();
          if (12 === i) this._j0 = [r.getInt32(), r.getInt32(), r.getInt32(), 1];
          else {
            for (this._j0 = [0, 0, 0, 0]; r.length() > 0; )
              this._j0 = this.ghash(this._hashSubkey, this._j0, [r.getInt32(), r.getInt32(), r.getInt32(), r.getInt32()]);
            this._j0 = this.ghash(this._hashSubkey, this._j0, [0, 0].concat(o(8 * i)));
          }
          (this._inBlock = this._j0.slice(0)),
            a(this._inBlock),
            (this._partialBytes = 0),
            (t = s.util.createBuffer(t)),
            (this._aDataLength = o(8 * t.length()));
          var n = t.length() % this.blockSize;
          for (n && t.fillWithByte(0, this.blockSize - n), this._s = [0, 0, 0, 0]; t.length() > 0; )
            this._s = this.ghash(this._hashSubkey, this._s, [t.getInt32(), t.getInt32(), t.getInt32(), t.getInt32()]);
        }),
        (i.gcm.prototype.encrypt = function (e, t, r) {
          var s = e.length();
          if (0 === s) return !0;
          if ((this.cipher.encrypt(this._inBlock, this._outBlock), 0 === this._partialBytes && s >= this.blockSize)) {
            for (var i = 0; i < this._ints; ++i) t.putInt32((this._outBlock[i] ^= e.getInt32()));
            this._cipherLength += this.blockSize;
          } else {
            var n = (this.blockSize - s) % this.blockSize;
            for (n > 0 && (n = this.blockSize - n), this._partialOutput.clear(), i = 0; i < this._ints; ++i)
              this._partialOutput.putInt32(e.getInt32() ^ this._outBlock[i]);
            if (n <= 0 || r) {
              if (r) {
                var o = s % this.blockSize;
                (this._cipherLength += o), this._partialOutput.truncate(this.blockSize - o);
              } else this._cipherLength += this.blockSize;
              for (i = 0; i < this._ints; ++i) this._outBlock[i] = this._partialOutput.getInt32();
              this._partialOutput.read -= this.blockSize;
            }
            if ((this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), n > 0 && !r))
              return (
                (e.read -= this.blockSize), t.putBytes(this._partialOutput.getBytes(n - this._partialBytes)), (this._partialBytes = n), !0
              );
            t.putBytes(this._partialOutput.getBytes(s - this._partialBytes)), (this._partialBytes = 0);
          }
          (this._s = this.ghash(this._hashSubkey, this._s, this._outBlock)), a(this._inBlock);
        }),
        (i.gcm.prototype.decrypt = function (e, t, r) {
          var s = e.length();
          if (s < this.blockSize && !(r && s > 0)) return !0;
          this.cipher.encrypt(this._inBlock, this._outBlock),
            a(this._inBlock),
            (this._hashBlock[0] = e.getInt32()),
            (this._hashBlock[1] = e.getInt32()),
            (this._hashBlock[2] = e.getInt32()),
            (this._hashBlock[3] = e.getInt32()),
            (this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock));
          for (var i = 0; i < this._ints; ++i) t.putInt32(this._outBlock[i] ^ this._hashBlock[i]);
          s < this.blockSize ? (this._cipherLength += s % this.blockSize) : (this._cipherLength += this.blockSize);
        }),
        (i.gcm.prototype.afterFinish = function (e, t) {
          var r = !0;
          t.decrypt && t.overflow && e.truncate(this.blockSize - t.overflow), (this.tag = s.util.createBuffer());
          var i = this._aDataLength.concat(o(8 * this._cipherLength));
          this._s = this.ghash(this._hashSubkey, this._s, i);
          var n = [];
          this.cipher.encrypt(this._j0, n);
          for (var a = 0; a < this._ints; ++a) this.tag.putInt32(this._s[a] ^ n[a]);
          return this.tag.truncate(this.tag.length() % (this._tagLength / 8)), t.decrypt && this.tag.bytes() !== this._tag && (r = !1), r;
        }),
        (i.gcm.prototype.multiply = function (e, t) {
          for (var r = [0, 0, 0, 0], s = t.slice(0), i = 0; i < 128; ++i)
            e[(i / 32) | 0] & (1 << (31 - (i % 32))) && ((r[0] ^= s[0]), (r[1] ^= s[1]), (r[2] ^= s[2]), (r[3] ^= s[3])), this.pow(s, s);
          return r;
        }),
        (i.gcm.prototype.pow = function (e, t) {
          for (var r = 1 & e[3], s = 3; s > 0; --s) t[s] = (e[s] >>> 1) | ((1 & e[s - 1]) << 31);
          (t[0] = e[0] >>> 1), r && (t[0] ^= this._R);
        }),
        (i.gcm.prototype.tableMultiply = function (e) {
          for (var t = [0, 0, 0, 0], r = 0; r < 32; ++r) {
            var s = (e[(r / 8) | 0] >>> (4 * (7 - (r % 8)))) & 15,
              i = this._m[r][s];
            (t[0] ^= i[0]), (t[1] ^= i[1]), (t[2] ^= i[2]), (t[3] ^= i[3]);
          }
          return t;
        }),
        (i.gcm.prototype.ghash = function (e, t, r) {
          return (t[0] ^= r[0]), (t[1] ^= r[1]), (t[2] ^= r[2]), (t[3] ^= r[3]), this.tableMultiply(t);
        }),
        (i.gcm.prototype.generateHashTable = function (e, t) {
          for (var r = 8 / t, s = 4 * r, i = 16 * r, n = new Array(i), a = 0; a < i; ++a) {
            var o = [0, 0, 0, 0],
              c = (s - 1 - (a % s)) * t;
            (o[(a / s) | 0] = (1 << (t - 1)) << c), (n[a] = this.generateSubHashTable(this.multiply(o, e), t));
          }
          return n;
        }),
        (i.gcm.prototype.generateSubHashTable = function (e, t) {
          var r = 1 << t,
            s = r >>> 1,
            i = new Array(r);
          i[s] = e.slice(0);
          for (var n = s >>> 1; n > 0; ) this.pow(i[2 * n], (i[n] = [])), (n >>= 1);
          for (n = 2; n < s; ) {
            for (var a = 1; a < n; ++a) {
              var o = i[n],
                c = i[a];
              i[n + a] = [o[0] ^ c[0], o[1] ^ c[1], o[2] ^ c[2], o[3] ^ c[3]];
            }
            n *= 2;
          }
          for (i[0] = [0, 0, 0, 0], n = s + 1; n < r; ++n) {
            var l = i[n ^ s];
            i[n] = [e[0] ^ l[0], e[1] ^ l[1], e[2] ^ l[2], e[3] ^ l[3]];
          }
          return i;
        });
    },
    986875: (e, t, r) => {
      var s = r(883418);
      function i(e, t) {
        s.cipher.registerAlgorithm(e, function () {
          return new s.des.Algorithm(e, t);
        });
      }
      r(658654),
        r(23392),
        r(563290),
        (e.exports = s.des = s.des || {}),
        (s.des.startEncrypting = function (e, t, r, s) {
          var i = f({ key: e, output: r, decrypt: !1, mode: s || (null === t ? "ECB" : "CBC") });
          return i.start(t), i;
        }),
        (s.des.createEncryptionCipher = function (e, t) {
          return f({ key: e, output: null, decrypt: !1, mode: t });
        }),
        (s.des.startDecrypting = function (e, t, r, s) {
          var i = f({ key: e, output: r, decrypt: !0, mode: s || (null === t ? "ECB" : "CBC") });
          return i.start(t), i;
        }),
        (s.des.createDecryptionCipher = function (e, t) {
          return f({ key: e, output: null, decrypt: !0, mode: t });
        }),
        (s.des.Algorithm = function (e, t) {
          var r = this;
          (r.name = e),
            (r.mode = new t({
              blockSize: 8,
              cipher: {
                encrypt: function (e, t) {
                  return h(r._keys, e, t, !1);
                },
                decrypt: function (e, t) {
                  return h(r._keys, e, t, !0);
                }
              }
            })),
            (r._init = !1);
        }),
        (s.des.Algorithm.prototype.initialize = function (e) {
          if (!this._init) {
            var t = s.util.createBuffer(e.key);
            if (0 === this.name.indexOf("3DES") && 24 !== t.length()) throw new Error("Invalid Triple-DES key size: " + 8 * t.length());
            (this._keys = (function (e) {
              for (
                var t,
                  r = [
                    0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960,
                    536936964
                  ],
                  s = [
                    0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121,
                    68157696, 68157697
                  ],
                  i = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272],
                  n = [
                    0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264,
                    2236416, 134356992, 136454144
                  ],
                  a = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256],
                  o = [
                    0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488
                  ],
                  c = [
                    0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290,
                    268959746
                  ],
                  l = [
                    0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520,
                    537004032, 537069568
                  ],
                  u = [
                    0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434,
                    33816578
                  ],
                  d = [
                    0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032,
                    268436488
                  ],
                  p = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800],
                  h = [
                    0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016,
                    85983232, 69206528, 85983744
                  ],
                  f = [
                    0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400,
                    134742032, 134746128
                  ],
                  g = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261],
                  y = e.length() > 8 ? 3 : 1,
                  E = [],
                  m = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
                  v = 0,
                  T = 0;
                T < y;
                T++
              ) {
                var C = e.getInt32(),
                  S = e.getInt32();
                (C ^= (t = 252645135 & ((C >>> 4) ^ S)) << 4),
                  (C ^= t = 65535 & (((S ^= t) >>> -16) ^ C)),
                  (C ^= (t = 858993459 & ((C >>> 2) ^ (S ^= t << -16))) << 2),
                  (C ^= t = 65535 & (((S ^= t) >>> -16) ^ C)),
                  (C ^= (t = 1431655765 & ((C >>> 1) ^ (S ^= t << -16))) << 1),
                  (C ^= t = 16711935 & (((S ^= t) >>> 8) ^ C)),
                  (t = ((C ^= (t = 1431655765 & ((C >>> 1) ^ (S ^= t << 8))) << 1) << 8) | (((S ^= t) >>> 20) & 240)),
                  (C = (S << 24) | ((S << 8) & 16711680) | ((S >>> 8) & 65280) | ((S >>> 24) & 240)),
                  (S = t);
                for (var A = 0; A < m.length; ++A) {
                  m[A]
                    ? ((C = (C << 2) | (C >>> 26)), (S = (S << 2) | (S >>> 26)))
                    : ((C = (C << 1) | (C >>> 27)), (S = (S << 1) | (S >>> 27)));
                  var _ =
                      r[(C &= -15) >>> 28] |
                      s[(C >>> 24) & 15] |
                      i[(C >>> 20) & 15] |
                      n[(C >>> 16) & 15] |
                      a[(C >>> 12) & 15] |
                      o[(C >>> 8) & 15] |
                      c[(C >>> 4) & 15],
                    I =
                      l[(S &= -15) >>> 28] |
                      u[(S >>> 24) & 15] |
                      d[(S >>> 20) & 15] |
                      p[(S >>> 16) & 15] |
                      h[(S >>> 12) & 15] |
                      f[(S >>> 8) & 15] |
                      g[(S >>> 4) & 15];
                  (t = 65535 & ((I >>> 16) ^ _)), (E[v++] = _ ^ t), (E[v++] = I ^ (t << 16));
                }
              }
              return E;
            })(t)),
              (this._init = !0);
          }
        }),
        i("DES-ECB", s.cipher.modes.ecb),
        i("DES-CBC", s.cipher.modes.cbc),
        i("DES-CFB", s.cipher.modes.cfb),
        i("DES-OFB", s.cipher.modes.ofb),
        i("DES-CTR", s.cipher.modes.ctr),
        i("3DES-ECB", s.cipher.modes.ecb),
        i("3DES-CBC", s.cipher.modes.cbc),
        i("3DES-CFB", s.cipher.modes.cfb),
        i("3DES-OFB", s.cipher.modes.ofb),
        i("3DES-CTR", s.cipher.modes.ctr);
      var n = [
          16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028,
          16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536,
          16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780,
          65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756
        ],
        a = [
          -2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304,
          -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072,
          1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848,
          -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304,
          1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040,
          -2146402272, 1081344
        ],
        o = [
          520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800,
          520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512,
          134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512,
          0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592,
          8, 134348808, 131584
        ],
        c = [
          8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192,
          8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800,
          8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928,
          8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928
        ],
        l = [
          256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512,
          1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544,
          1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720,
          1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544,
          1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976,
          1073742080
        ],
        u = [
          536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320,
          536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600,
          16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296,
          536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704,
          16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312
        ],
        d = [
          2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050,
          67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864,
          2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064,
          2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866,
          67110912, 2048, 2097154
        ],
        p = [
          268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304,
          4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520,
          268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600,
          268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240,
          266240, 4160, 4160, 262208, 268435456, 268701696
        ];
      function h(e, t, r, s) {
        var i,
          h,
          f = 32 === e.length ? 3 : 9;
        i = 3 === f ? (s ? [30, -2, -2] : [0, 32, 2]) : s ? [94, 62, -2, 32, 64, 2, 30, -2, -2] : [0, 32, 2, 62, 30, -2, 64, 96, 2];
        var g = t[0],
          y = t[1];
        (g ^= (h = 252645135 & ((g >>> 4) ^ y)) << 4),
          (g ^= (h = 65535 & ((g >>> 16) ^ (y ^= h))) << 16),
          (g ^= h = 858993459 & (((y ^= h) >>> 2) ^ g)),
          (g ^= h = 16711935 & (((y ^= h << 2) >>> 8) ^ g)),
          (g = ((g ^= (h = 1431655765 & ((g >>> 1) ^ (y ^= h << 8))) << 1) << 1) | (g >>> 31)),
          (y = ((y ^= h) << 1) | (y >>> 31));
        for (var E = 0; E < f; E += 3) {
          for (var m = i[E + 1], v = i[E + 2], T = i[E]; T != m; T += v) {
            var C = y ^ e[T],
              S = ((y >>> 4) | (y << 28)) ^ e[T + 1];
            (h = g),
              (g = y),
              (y =
                h ^
                (a[(C >>> 24) & 63] |
                  c[(C >>> 16) & 63] |
                  u[(C >>> 8) & 63] |
                  p[63 & C] |
                  n[(S >>> 24) & 63] |
                  o[(S >>> 16) & 63] |
                  l[(S >>> 8) & 63] |
                  d[63 & S]));
          }
          (h = g), (g = y), (y = h);
        }
        (y = (y >>> 1) | (y << 31)),
          (y ^= h = 1431655765 & (((g = (g >>> 1) | (g << 31)) >>> 1) ^ y)),
          (y ^= (h = 16711935 & ((y >>> 8) ^ (g ^= h << 1))) << 8),
          (y ^= (h = 858993459 & ((y >>> 2) ^ (g ^= h))) << 2),
          (y ^= h = 65535 & (((g ^= h) >>> 16) ^ y)),
          (y ^= h = 252645135 & (((g ^= h << 16) >>> 4) ^ y)),
          (g ^= h << 4),
          (r[0] = g),
          (r[1] = y);
      }
      function f(e) {
        var t,
          r = "DES-" + ((e = e || {}).mode || "CBC").toUpperCase(),
          i = (t = e.decrypt ? s.cipher.createDecipher(r, e.key) : s.cipher.createCipher(r, e.key)).start;
        return (
          (t.start = function (e, r) {
            var n = null;
            r instanceof s.util.ByteBuffer && ((n = r), (r = {})), ((r = r || {}).output = n), (r.iv = e), i.call(t, r);
          }),
          t
        );
      }
    },
    883418: (e) => {
      e.exports = { options: { usePureJavaScript: !1 } };
    },
    685469: (e, t, r) => {
      var s = r(883418);
      r(643730),
        r(563290),
        ((e.exports = s.hmac = s.hmac || {}).create = function () {
          var e = null,
            t = null,
            r = null,
            i = null,
            n = {
              start: function (n, a) {
                if (null !== n)
                  if ("string" == typeof n) {
                    if (!((n = n.toLowerCase()) in s.md.algorithms)) throw new Error('Unknown hash algorithm "' + n + '"');
                    t = s.md.algorithms[n].create();
                  } else t = n;
                if (null === a) a = e;
                else {
                  if ("string" == typeof a) a = s.util.createBuffer(a);
                  else if (s.util.isArray(a)) {
                    var o = a;
                    a = s.util.createBuffer();
                    for (var c = 0; c < o.length; ++c) a.putByte(o[c]);
                  }
                  var l = a.length();
                  for (
                    l > t.blockLength && (t.start(), t.update(a.bytes()), (a = t.digest())),
                      r = s.util.createBuffer(),
                      i = s.util.createBuffer(),
                      l = a.length(),
                      c = 0;
                    c < l;
                    ++c
                  )
                    (o = a.at(c)), r.putByte(54 ^ o), i.putByte(92 ^ o);
                  if (l < t.blockLength) for (o = t.blockLength - l, c = 0; c < o; ++c) r.putByte(54), i.putByte(92);
                  (e = a), (r = r.bytes()), (i = i.bytes());
                }
                t.start(), t.update(r);
              },
              update: function (e) {
                t.update(e);
              },
              getMac: function () {
                var e = t.digest().bytes();
                return t.start(), t.update(i), t.update(e), t.digest();
              }
            };
          return (n.digest = n.getMac), n;
        });
    },
    997224: (e, t, r) => {
      var s,
        i = r(883418);
      function n(e, t, r) {
        (this.data = []),
          null != e &&
            ("number" == typeof e
              ? this.fromNumber(e, t, r)
              : null == t && "string" != typeof e
              ? this.fromString(e, 256)
              : this.fromString(e, t));
      }
      function a() {
        return new n(null);
      }
      function o(e, t, r, s, i, n) {
        for (var a = 16383 & t, o = t >> 14; --n >= 0; ) {
          var c = 16383 & this.data[e],
            l = this.data[e++] >> 14,
            u = o * c + l * a;
          (i = ((c = a * c + ((16383 & u) << 14) + r.data[s] + i) >> 28) + (u >> 14) + o * l), (r.data[s++] = 268435455 & c);
        }
        return i;
      }
      (e.exports = i.jsbn = i.jsbn || {}),
        (i.jsbn.BigInteger = n),
        "undefined" == typeof navigator
          ? ((n.prototype.am = o), (s = 28))
          : "Microsoft Internet Explorer" == navigator.appName
          ? ((n.prototype.am = function (e, t, r, s, i, n) {
              for (var a = 32767 & t, o = t >> 15; --n >= 0; ) {
                var c = 32767 & this.data[e],
                  l = this.data[e++] >> 15,
                  u = o * c + l * a;
                (i = ((c = a * c + ((32767 & u) << 15) + r.data[s] + (1073741823 & i)) >>> 30) + (u >>> 15) + o * l + (i >>> 30)),
                  (r.data[s++] = 1073741823 & c);
              }
              return i;
            }),
            (s = 30))
          : "Netscape" != navigator.appName
          ? ((n.prototype.am = function (e, t, r, s, i, n) {
              for (; --n >= 0; ) {
                var a = t * this.data[e++] + r.data[s] + i;
                (i = Math.floor(a / 67108864)), (r.data[s++] = 67108863 & a);
              }
              return i;
            }),
            (s = 26))
          : ((n.prototype.am = o), (s = 28)),
        (n.prototype.DB = s),
        (n.prototype.DM = (1 << s) - 1),
        (n.prototype.DV = 1 << s),
        (n.prototype.FV = Math.pow(2, 52)),
        (n.prototype.F1 = 52 - s),
        (n.prototype.F2 = 2 * s - 52);
      var c,
        l,
        u = "0123456789abcdefghijklmnopqrstuvwxyz",
        d = new Array();
      for (c = "0".charCodeAt(0), l = 0; l <= 9; ++l) d[c++] = l;
      for (c = "a".charCodeAt(0), l = 10; l < 36; ++l) d[c++] = l;
      for (c = "A".charCodeAt(0), l = 10; l < 36; ++l) d[c++] = l;
      function p(e) {
        return u.charAt(e);
      }
      function h(e, t) {
        return d[e.charCodeAt(t)] ?? -1;
      }
      function f(e) {
        var t = a();
        return t.fromInt(e), t;
      }
      function g(e) {
        var t,
          r = 1;
        return (
          0 != (t = e >>> 16) && ((e = t), (r += 16)),
          0 != (t = e >> 8) && ((e = t), (r += 8)),
          0 != (t = e >> 4) && ((e = t), (r += 4)),
          0 != (t = e >> 2) && ((e = t), (r += 2)),
          0 != (t = e >> 1) && ((e = t), (r += 1)),
          r
        );
      }
      function y(e) {
        this.m = e;
      }
      function E(e) {
        (this.m = e),
          (this.mp = e.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (e.DB - 15)) - 1),
          (this.mt2 = 2 * e.t);
      }
      function m(e, t) {
        return e & t;
      }
      function v(e, t) {
        return e | t;
      }
      function T(e, t) {
        return e ^ t;
      }
      function C(e, t) {
        return e & ~t;
      }
      function S(e) {
        if (0 == e) return -1;
        var t = 0;
        return (
          0 == (65535 & e) && ((e >>= 16), (t += 16)),
          0 == (255 & e) && ((e >>= 8), (t += 8)),
          0 == (15 & e) && ((e >>= 4), (t += 4)),
          0 == (3 & e) && ((e >>= 2), (t += 2)),
          0 == (1 & e) && ++t,
          t
        );
      }
      function A(e) {
        for (var t = 0; 0 != e; ) (e &= e - 1), ++t;
        return t;
      }
      function _() {}
      function I(e) {
        return e;
      }
      function b(e) {
        (this.r2 = a()), (this.q3 = a()), n.ONE.dlShiftTo(2 * e.t, this.r2), (this.mu = this.r2.divide(e)), (this.m = e);
      }
      (y.prototype.convert = function (e) {
        return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
      }),
        (y.prototype.revert = function (e) {
          return e;
        }),
        (y.prototype.reduce = function (e) {
          e.divRemTo(this.m, null, e);
        }),
        (y.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (y.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (E.prototype.convert = function (e) {
          var t = a();
          return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(n.ZERO) > 0 && this.m.subTo(t, t), t;
        }),
        (E.prototype.revert = function (e) {
          var t = a();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (E.prototype.reduce = function (e) {
          for (; e.t <= this.mt2; ) e.data[e.t++] = 0;
          for (var t = 0; t < this.m.t; ++t) {
            var r = 32767 & e.data[t],
              s = (r * this.mpl + (((r * this.mph + (e.data[t] >> 15) * this.mpl) & this.um) << 15)) & e.DM;
            for (r = t + this.m.t, e.data[r] += this.m.am(0, s, e, t, 0, this.m.t); e.data[r] >= e.DV; ) (e.data[r] -= e.DV), e.data[++r]++;
          }
          e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }),
        (E.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (E.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (n.prototype.copyTo = function (e) {
          for (var t = this.t - 1; t >= 0; --t) e.data[t] = this.data[t];
          (e.t = this.t), (e.s = this.s);
        }),
        (n.prototype.fromInt = function (e) {
          (this.t = 1), (this.s = e < 0 ? -1 : 0), e > 0 ? (this.data[0] = e) : e < -1 ? (this.data[0] = e + this.DV) : (this.t = 0);
        }),
        (n.prototype.fromString = function (e, t) {
          var r;
          if (16 == t) r = 4;
          else if (8 == t) r = 3;
          else if (256 == t) r = 8;
          else if (2 == t) r = 1;
          else if (32 == t) r = 5;
          else {
            if (4 != t) return void this.fromRadix(e, t);
            r = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var s = e.length, i = !1, a = 0; --s >= 0; ) {
            var o = 8 == r ? 255 & e[s] : h(e, s);
            o < 0
              ? "-" == e.charAt(s) && (i = !0)
              : ((i = !1),
                0 == a
                  ? (this.data[this.t++] = o)
                  : a + r > this.DB
                  ? ((this.data[this.t - 1] |= (o & ((1 << (this.DB - a)) - 1)) << a), (this.data[this.t++] = o >> (this.DB - a)))
                  : (this.data[this.t - 1] |= o << a),
                (a += r) >= this.DB && (a -= this.DB));
          }
          8 == r && 0 != (128 & e[0]) && ((this.s = -1), a > 0 && (this.data[this.t - 1] |= ((1 << (this.DB - a)) - 1) << a)),
            this.clamp(),
            i && n.ZERO.subTo(this, this);
        }),
        (n.prototype.clamp = function () {
          for (var e = this.s & this.DM; this.t > 0 && this.data[this.t - 1] == e; ) --this.t;
        }),
        (n.prototype.dlShiftTo = function (e, t) {
          var r;
          for (r = this.t - 1; r >= 0; --r) t.data[r + e] = this.data[r];
          for (r = e - 1; r >= 0; --r) t.data[r] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }),
        (n.prototype.drShiftTo = function (e, t) {
          for (var r = e; r < this.t; ++r) t.data[r - e] = this.data[r];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }),
        (n.prototype.lShiftTo = function (e, t) {
          var r,
            s = e % this.DB,
            i = this.DB - s,
            n = (1 << i) - 1,
            a = Math.floor(e / this.DB),
            o = (this.s << s) & this.DM;
          for (r = this.t - 1; r >= 0; --r) (t.data[r + a + 1] = (this.data[r] >> i) | o), (o = (this.data[r] & n) << s);
          for (r = a - 1; r >= 0; --r) t.data[r] = 0;
          (t.data[a] = o), (t.t = this.t + a + 1), (t.s = this.s), t.clamp();
        }),
        (n.prototype.rShiftTo = function (e, t) {
          t.s = this.s;
          var r = Math.floor(e / this.DB);
          if (r >= this.t) t.t = 0;
          else {
            var s = e % this.DB,
              i = this.DB - s,
              n = (1 << s) - 1;
            t.data[0] = this.data[r] >> s;
            for (var a = r + 1; a < this.t; ++a) (t.data[a - r - 1] |= (this.data[a] & n) << i), (t.data[a - r] = this.data[a] >> s);
            s > 0 && (t.data[this.t - r - 1] |= (this.s & n) << i), (t.t = this.t - r), t.clamp();
          }
        }),
        (n.prototype.subTo = function (e, t) {
          for (var r = 0, s = 0, i = Math.min(e.t, this.t); r < i; )
            (s += this.data[r] - e.data[r]), (t.data[r++] = s & this.DM), (s >>= this.DB);
          if (e.t < this.t) {
            for (s -= e.s; r < this.t; ) (s += this.data[r]), (t.data[r++] = s & this.DM), (s >>= this.DB);
            s += this.s;
          } else {
            for (s += this.s; r < e.t; ) (s -= e.data[r]), (t.data[r++] = s & this.DM), (s >>= this.DB);
            s -= e.s;
          }
          (t.s = s < 0 ? -1 : 0), s < -1 ? (t.data[r++] = this.DV + s) : s > 0 && (t.data[r++] = s), (t.t = r), t.clamp();
        }),
        (n.prototype.multiplyTo = function (e, t) {
          var r = this.abs(),
            s = e.abs(),
            i = r.t;
          for (t.t = i + s.t; --i >= 0; ) t.data[i] = 0;
          for (i = 0; i < s.t; ++i) t.data[i + r.t] = r.am(0, s.data[i], t, i, 0, r.t);
          (t.s = 0), t.clamp(), this.s != e.s && n.ZERO.subTo(t, t);
        }),
        (n.prototype.squareTo = function (e) {
          for (var t = this.abs(), r = (e.t = 2 * t.t); --r >= 0; ) e.data[r] = 0;
          for (r = 0; r < t.t - 1; ++r) {
            var s = t.am(r, t.data[r], e, 2 * r, 0, 1);
            (e.data[r + t.t] += t.am(r + 1, 2 * t.data[r], e, 2 * r + 1, s, t.t - r - 1)) >= t.DV &&
              ((e.data[r + t.t] -= t.DV), (e.data[r + t.t + 1] = 1));
          }
          e.t > 0 && (e.data[e.t - 1] += t.am(r, t.data[r], e, 2 * r, 0, 1)), (e.s = 0), e.clamp();
        }),
        (n.prototype.divRemTo = function (e, t, r) {
          var s = e.abs();
          if (!(s.t <= 0)) {
            var i = this.abs();
            if (i.t < s.t) return null != t && t.fromInt(0), void (null != r && this.copyTo(r));
            null == r && (r = a());
            var o = a(),
              c = this.s,
              l = e.s,
              u = this.DB - g(s.data[s.t - 1]);
            u > 0 ? (s.lShiftTo(u, o), i.lShiftTo(u, r)) : (s.copyTo(o), i.copyTo(r));
            var d = o.t,
              p = o.data[d - 1];
            if (0 != p) {
              var h = p * (1 << this.F1) + (d > 1 ? o.data[d - 2] >> this.F2 : 0),
                f = this.FV / h,
                y = (1 << this.F1) / h,
                E = 1 << this.F2,
                m = r.t,
                v = m - d,
                T = t ?? a();
              for (
                o.dlShiftTo(v, T), r.compareTo(T) >= 0 && ((r.data[r.t++] = 1), r.subTo(T, r)), n.ONE.dlShiftTo(d, T), T.subTo(o, o);
                o.t < d;

              )
                o.data[o.t++] = 0;
              for (; --v >= 0; ) {
                var C = r.data[--m] == p ? this.DM : Math.floor(r.data[m] * f + (r.data[m - 1] + E) * y);
                if ((r.data[m] += o.am(0, C, r, v, 0, d)) < C) for (o.dlShiftTo(v, T), r.subTo(T, r); r.data[m] < --C; ) r.subTo(T, r);
              }
              null != t && (r.drShiftTo(d, t), c != l && n.ZERO.subTo(t, t)),
                (r.t = d),
                r.clamp(),
                u > 0 && r.rShiftTo(u, r),
                c < 0 && n.ZERO.subTo(r, r);
            }
          }
        }),
        (n.prototype.invDigit = function () {
          if (this.t < 1) return 0;
          var e = this.data[0];
          if (0 == (1 & e)) return 0;
          var t = 3 & e;
          return (t =
            ((t = ((t = ((t = (t * (2 - (15 & e) * t)) & 15) * (2 - (255 & e) * t)) & 255) * (2 - (((65535 & e) * t) & 65535))) & 65535) *
              (2 - ((e * t) % this.DV))) %
            this.DV) > 0
            ? this.DV - t
            : -t;
        }),
        (n.prototype.isEven = function () {
          return 0 == (this.t > 0 ? 1 & this.data[0] : this.s);
        }),
        (n.prototype.exp = function (e, t) {
          if (e > 4294967295 || e < 1) return n.ONE;
          var r = a(),
            s = a(),
            i = t.convert(this),
            o = g(e) - 1;
          for (i.copyTo(r); --o >= 0; )
            if ((t.sqrTo(r, s), (e & (1 << o)) > 0)) t.mulTo(s, i, r);
            else {
              var c = r;
              (r = s), (s = c);
            }
          return t.revert(r);
        }),
        (n.prototype.toString = function (e) {
          if (this.s < 0) return "-" + this.negate().toString(e);
          var t;
          if (16 == e) t = 4;
          else if (8 == e) t = 3;
          else if (2 == e) t = 1;
          else if (32 == e) t = 5;
          else {
            if (4 != e) return this.toRadix(e);
            t = 2;
          }
          var r,
            s = (1 << t) - 1,
            i = !1,
            n = "",
            a = this.t,
            o = this.DB - ((a * this.DB) % t);
          if (a-- > 0)
            for (o < this.DB && (r = this.data[a] >> o) > 0 && ((i = !0), (n = p(r))); a >= 0; )
              o < t
                ? ((r = (this.data[a] & ((1 << o) - 1)) << (t - o)), (r |= this.data[--a] >> (o += this.DB - t)))
                : ((r = (this.data[a] >> (o -= t)) & s), o <= 0 && ((o += this.DB), --a)),
                r > 0 && (i = !0),
                i && (n += p(r));
          return i ? n : "0";
        }),
        (n.prototype.negate = function () {
          var e = a();
          return n.ZERO.subTo(this, e), e;
        }),
        (n.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }),
        (n.prototype.compareTo = function (e) {
          var t = this.s - e.s;
          if (0 != t) return t;
          var r = this.t;
          if (0 != (t = r - e.t)) return this.s < 0 ? -t : t;
          for (; --r >= 0; ) if (0 != (t = this.data[r] - e.data[r])) return t;
          return 0;
        }),
        (n.prototype.bitLength = function () {
          return this.t <= 0 ? 0 : this.DB * (this.t - 1) + g(this.data[this.t - 1] ^ (this.s & this.DM));
        }),
        (n.prototype.mod = function (e) {
          var t = a();
          return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(n.ZERO) > 0 && e.subTo(t, t), t;
        }),
        (n.prototype.modPowInt = function (e, t) {
          var r;
          return (r = e < 256 || t.isEven() ? new y(t) : new E(t)), this.exp(e, r);
        }),
        (n.ZERO = f(0)),
        (n.ONE = f(1)),
        (_.prototype.convert = I),
        (_.prototype.revert = I),
        (_.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r);
        }),
        (_.prototype.sqrTo = function (e, t) {
          e.squareTo(t);
        }),
        (b.prototype.convert = function (e) {
          if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
          if (e.compareTo(this.m) < 0) return e;
          var t = a();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (b.prototype.revert = function (e) {
          return e;
        }),
        (b.prototype.reduce = function (e) {
          for (
            e.drShiftTo(this.m.t - 1, this.r2),
              e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            e.compareTo(this.r2) < 0;

          )
            e.dAddOffset(1, this.m.t + 1);
          for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; ) e.subTo(this.m, e);
        }),
        (b.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (b.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        });
      var R = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
          137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271,
          277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433,
          439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509
        ],
        O = (1 << 26) / R[R.length - 1];
      (n.prototype.chunkSize = function (e) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(e));
      }),
        (n.prototype.toRadix = function (e) {
          if ((null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36)) return "0";
          var t = this.chunkSize(e),
            r = Math.pow(e, t),
            s = f(r),
            i = a(),
            n = a(),
            o = "";
          for (this.divRemTo(s, i, n); i.signum() > 0; ) (o = (r + n.intValue()).toString(e).substr(1) + o), i.divRemTo(s, i, n);
          return n.intValue().toString(e) + o;
        }),
        (n.prototype.fromRadix = function (e, t) {
          this.fromInt(0), null == t && (t = 10);
          for (var r = this.chunkSize(t), s = Math.pow(t, r), i = !1, a = 0, o = 0, c = 0; c < e.length; ++c) {
            var l = h(e, c);
            l < 0
              ? "-" == e.charAt(c) && 0 == this.signum() && (i = !0)
              : ((o = t * o + l), ++a >= r && (this.dMultiply(s), this.dAddOffset(o, 0), (a = 0), (o = 0)));
          }
          a > 0 && (this.dMultiply(Math.pow(t, a)), this.dAddOffset(o, 0)), i && n.ZERO.subTo(this, this);
        }),
        (n.prototype.fromNumber = function (e, t, r) {
          if ("number" == typeof t)
            if (e < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(e, r),
                  this.testBit(e - 1) || this.bitwiseTo(n.ONE.shiftLeft(e - 1), v, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(t);

              )
                this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(n.ONE.shiftLeft(e - 1), this);
          else {
            var s = new Array(),
              i = 7 & e;
            (s.length = 1 + (e >> 3)), t.nextBytes(s), i > 0 ? (s[0] &= (1 << i) - 1) : (s[0] = 0), this.fromString(s, 256);
          }
        }),
        (n.prototype.bitwiseTo = function (e, t, r) {
          var s,
            i,
            n = Math.min(e.t, this.t);
          for (s = 0; s < n; ++s) r.data[s] = t(this.data[s], e.data[s]);
          if (e.t < this.t) {
            for (i = e.s & this.DM, s = n; s < this.t; ++s) r.data[s] = t(this.data[s], i);
            r.t = this.t;
          } else {
            for (i = this.s & this.DM, s = n; s < e.t; ++s) r.data[s] = t(i, e.data[s]);
            r.t = e.t;
          }
          (r.s = t(this.s, e.s)), r.clamp();
        }),
        (n.prototype.changeBit = function (e, t) {
          var r = n.ONE.shiftLeft(e);
          return this.bitwiseTo(r, t, r), r;
        }),
        (n.prototype.addTo = function (e, t) {
          for (var r = 0, s = 0, i = Math.min(e.t, this.t); r < i; )
            (s += this.data[r] + e.data[r]), (t.data[r++] = s & this.DM), (s >>= this.DB);
          if (e.t < this.t) {
            for (s += e.s; r < this.t; ) (s += this.data[r]), (t.data[r++] = s & this.DM), (s >>= this.DB);
            s += this.s;
          } else {
            for (s += this.s; r < e.t; ) (s += e.data[r]), (t.data[r++] = s & this.DM), (s >>= this.DB);
            s += e.s;
          }
          (t.s = s < 0 ? -1 : 0), s > 0 ? (t.data[r++] = s) : s < -1 && (t.data[r++] = this.DV + s), (t.t = r), t.clamp();
        }),
        (n.prototype.dMultiply = function (e) {
          (this.data[this.t] = this.am(0, e - 1, this, 0, 0, this.t)), ++this.t, this.clamp();
        }),
        (n.prototype.dAddOffset = function (e, t) {
          if (0 != e) {
            for (; this.t <= t; ) this.data[this.t++] = 0;
            for (this.data[t] += e; this.data[t] >= this.DV; )
              (this.data[t] -= this.DV), ++t >= this.t && (this.data[this.t++] = 0), ++this.data[t];
          }
        }),
        (n.prototype.multiplyLowerTo = function (e, t, r) {
          var s,
            i = Math.min(this.t + e.t, t);
          for (r.s = 0, r.t = i; i > 0; ) r.data[--i] = 0;
          for (s = r.t - this.t; i < s; ++i) r.data[i + this.t] = this.am(0, e.data[i], r, i, 0, this.t);
          for (s = Math.min(e.t, t); i < s; ++i) this.am(0, e.data[i], r, i, 0, t - i);
          r.clamp();
        }),
        (n.prototype.multiplyUpperTo = function (e, t, r) {
          --t;
          var s = (r.t = this.t + e.t - t);
          for (r.s = 0; --s >= 0; ) r.data[s] = 0;
          for (s = Math.max(t - this.t, 0); s < e.t; ++s) r.data[this.t + s - t] = this.am(t - s, e.data[s], r, 0, 0, this.t + s - t);
          r.clamp(), r.drShiftTo(1, r);
        }),
        (n.prototype.modInt = function (e) {
          if (e <= 0) return 0;
          var t = this.DV % e,
            r = this.s < 0 ? e - 1 : 0;
          if (this.t > 0)
            if (0 == t) r = this.data[0] % e;
            else for (var s = this.t - 1; s >= 0; --s) r = (t * r + this.data[s]) % e;
          return r;
        }),
        (n.prototype.millerRabin = function (e) {
          var t = this.subtract(n.ONE),
            r = t.getLowestSetBit();
          if (r <= 0) return !1;
          for (
            var s,
              i = t.shiftRight(r),
              a = {
                nextBytes: function (e) {
                  for (var t = 0; t < e.length; ++t) e[t] = Math.floor(256 * Math.random());
                }
              },
              o = 0;
            o < e;
            ++o
          ) {
            do {
              s = new n(this.bitLength(), a);
            } while (s.compareTo(n.ONE) <= 0 || s.compareTo(t) >= 0);
            var c = s.modPow(i, this);
            if (0 != c.compareTo(n.ONE) && 0 != c.compareTo(t)) {
              for (var l = 1; l++ < r && 0 != c.compareTo(t); ) if (0 == (c = c.modPowInt(2, this)).compareTo(n.ONE)) return !1;
              if (0 != c.compareTo(t)) return !1;
            }
          }
          return !0;
        }),
        (n.prototype.clone = function () {
          var e = a();
          return this.copyTo(e), e;
        }),
        (n.prototype.intValue = function () {
          if (this.s < 0) {
            if (1 == this.t) return this.data[0] - this.DV;
            if (0 == this.t) return -1;
          } else {
            if (1 == this.t) return this.data[0];
            if (0 == this.t) return 0;
          }
          return ((this.data[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this.data[0];
        }),
        (n.prototype.byteValue = function () {
          return 0 == this.t ? this.s : (this.data[0] << 24) >> 24;
        }),
        (n.prototype.shortValue = function () {
          return 0 == this.t ? this.s : (this.data[0] << 16) >> 16;
        }),
        (n.prototype.signum = function () {
          return this.s < 0 ? -1 : this.t <= 0 || (1 == this.t && this.data[0] <= 0) ? 0 : 1;
        }),
        (n.prototype.toByteArray = function () {
          var e = this.t,
            t = new Array();
          t[0] = this.s;
          var r,
            s = this.DB - ((e * this.DB) % 8),
            i = 0;
          if (e-- > 0)
            for (s < this.DB && (r = this.data[e] >> s) != (this.s & this.DM) >> s && (t[i++] = r | (this.s << (this.DB - s))); e >= 0; )
              s < 8
                ? ((r = (this.data[e] & ((1 << s) - 1)) << (8 - s)), (r |= this.data[--e] >> (s += this.DB - 8)))
                : ((r = (this.data[e] >> (s -= 8)) & 255), s <= 0 && ((s += this.DB), --e)),
                0 != (128 & r) && (r |= -256),
                0 == i && (128 & this.s) != (128 & r) && ++i,
                (i > 0 || r != this.s) && (t[i++] = r);
          return t;
        }),
        (n.prototype.equals = function (e) {
          return 0 == this.compareTo(e);
        }),
        (n.prototype.min = function (e) {
          return this.compareTo(e) < 0 ? this : e;
        }),
        (n.prototype.max = function (e) {
          return this.compareTo(e) > 0 ? this : e;
        }),
        (n.prototype.and = function (e) {
          var t = a();
          return this.bitwiseTo(e, m, t), t;
        }),
        (n.prototype.or = function (e) {
          var t = a();
          return this.bitwiseTo(e, v, t), t;
        }),
        (n.prototype.xor = function (e) {
          var t = a();
          return this.bitwiseTo(e, T, t), t;
        }),
        (n.prototype.andNot = function (e) {
          var t = a();
          return this.bitwiseTo(e, C, t), t;
        }),
        (n.prototype.not = function () {
          for (var e = a(), t = 0; t < this.t; ++t) e.data[t] = this.DM & ~this.data[t];
          return (e.t = this.t), (e.s = ~this.s), e;
        }),
        (n.prototype.shiftLeft = function (e) {
          var t = a();
          return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }),
        (n.prototype.shiftRight = function (e) {
          var t = a();
          return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }),
        (n.prototype.getLowestSetBit = function () {
          for (var e = 0; e < this.t; ++e) if (0 != this.data[e]) return e * this.DB + S(this.data[e]);
          return this.s < 0 ? this.t * this.DB : -1;
        }),
        (n.prototype.bitCount = function () {
          for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r) e += A(this.data[r] ^ t);
          return e;
        }),
        (n.prototype.testBit = function (e) {
          var t = Math.floor(e / this.DB);
          return t >= this.t ? 0 != this.s : 0 != (this.data[t] & (1 << e % this.DB));
        }),
        (n.prototype.setBit = function (e) {
          return this.changeBit(e, v);
        }),
        (n.prototype.clearBit = function (e) {
          return this.changeBit(e, C);
        }),
        (n.prototype.flipBit = function (e) {
          return this.changeBit(e, T);
        }),
        (n.prototype.add = function (e) {
          var t = a();
          return this.addTo(e, t), t;
        }),
        (n.prototype.subtract = function (e) {
          var t = a();
          return this.subTo(e, t), t;
        }),
        (n.prototype.multiply = function (e) {
          var t = a();
          return this.multiplyTo(e, t), t;
        }),
        (n.prototype.divide = function (e) {
          var t = a();
          return this.divRemTo(e, t, null), t;
        }),
        (n.prototype.remainder = function (e) {
          var t = a();
          return this.divRemTo(e, null, t), t;
        }),
        (n.prototype.divideAndRemainder = function (e) {
          var t = a(),
            r = a();
          return this.divRemTo(e, t, r), new Array(t, r);
        }),
        (n.prototype.modPow = function (e, t) {
          var r,
            s,
            i = e.bitLength(),
            n = f(1);
          if (i <= 0) return n;
          (r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6), (s = i < 8 ? new y(t) : t.isEven() ? new b(t) : new E(t));
          var o = new Array(),
            c = 3,
            l = r - 1,
            u = (1 << r) - 1;
          if (((o[1] = s.convert(this)), r > 1)) {
            var d = a();
            for (s.sqrTo(o[1], d); c <= u; ) (o[c] = a()), s.mulTo(d, o[c - 2], o[c]), (c += 2);
          }
          var p,
            h,
            m = e.t - 1,
            v = !0,
            T = a();
          for (i = g(e.data[m]) - 1; m >= 0; ) {
            for (
              i >= l
                ? (p = (e.data[m] >> (i - l)) & u)
                : ((p = (e.data[m] & ((1 << (i + 1)) - 1)) << (l - i)), m > 0 && (p |= e.data[m - 1] >> (this.DB + i - l))),
                c = r;
              0 == (1 & p);

            )
              (p >>= 1), --c;
            if (((i -= c) < 0 && ((i += this.DB), --m), v)) o[p].copyTo(n), (v = !1);
            else {
              for (; c > 1; ) s.sqrTo(n, T), s.sqrTo(T, n), (c -= 2);
              c > 0 ? s.sqrTo(n, T) : ((h = n), (n = T), (T = h)), s.mulTo(T, o[p], n);
            }
            for (; m >= 0 && 0 == (e.data[m] & (1 << i)); ) s.sqrTo(n, T), (h = n), (n = T), (T = h), --i < 0 && ((i = this.DB - 1), --m);
          }
          return s.revert(n);
        }),
        (n.prototype.modInverse = function (e) {
          var t = e.isEven();
          if ((this.isEven() && t) || 0 == e.signum()) return n.ZERO;
          for (var r = e.clone(), s = this.clone(), i = f(1), a = f(0), o = f(0), c = f(1); 0 != r.signum(); ) {
            for (; r.isEven(); )
              r.rShiftTo(1, r),
                t ? ((i.isEven() && a.isEven()) || (i.addTo(this, i), a.subTo(e, a)), i.rShiftTo(1, i)) : a.isEven() || a.subTo(e, a),
                a.rShiftTo(1, a);
            for (; s.isEven(); )
              s.rShiftTo(1, s),
                t ? ((o.isEven() && c.isEven()) || (o.addTo(this, o), c.subTo(e, c)), o.rShiftTo(1, o)) : c.isEven() || c.subTo(e, c),
                c.rShiftTo(1, c);
            r.compareTo(s) >= 0 ? (r.subTo(s, r), t && i.subTo(o, i), a.subTo(c, a)) : (s.subTo(r, s), t && o.subTo(i, o), c.subTo(a, c));
          }
          return 0 != s.compareTo(n.ONE)
            ? n.ZERO
            : c.compareTo(e) >= 0
            ? c.subtract(e)
            : c.signum() < 0
            ? (c.addTo(e, c), c.signum() < 0 ? c.add(e) : c)
            : c;
        }),
        (n.prototype.pow = function (e) {
          return this.exp(e, new _());
        }),
        (n.prototype.gcd = function (e) {
          var t = this.s < 0 ? this.negate() : this.clone(),
            r = e.s < 0 ? e.negate() : e.clone();
          if (t.compareTo(r) < 0) {
            var s = t;
            (t = r), (r = s);
          }
          var i = t.getLowestSetBit(),
            n = r.getLowestSetBit();
          if (n < 0) return t;
          for (i < n && (n = i), n > 0 && (t.rShiftTo(n, t), r.rShiftTo(n, r)); t.signum() > 0; )
            (i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t),
              (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
              t.compareTo(r) >= 0 ? (t.subTo(r, t), t.rShiftTo(1, t)) : (r.subTo(t, r), r.rShiftTo(1, r));
          return n > 0 && r.lShiftTo(n, r), r;
        }),
        (n.prototype.isProbablePrime = function (e) {
          var t,
            r = this.abs();
          if (1 == r.t && r.data[0] <= R[R.length - 1]) {
            for (t = 0; t < R.length; ++t) if (r.data[0] == R[t]) return !0;
            return !1;
          }
          if (r.isEven()) return !1;
          for (t = 1; t < R.length; ) {
            for (var s = R[t], i = t + 1; i < R.length && s < O; ) s *= R[i++];
            for (s = r.modInt(s); t < i; ) if (s % R[t++] == 0) return !1;
          }
          return r.millerRabin(e);
        });
    },
    811087: (e, t, r) => {
      (e.exports = r(643730)), r(930960), r(328804), r(851792), r(864301);
    },
    643730: (e, t, r) => {
      var s = r(883418);
      (e.exports = s.md = s.md || {}), (s.md.algorithms = s.md.algorithms || {});
    },
    930960: (e, t, r) => {
      var s = r(883418);
      r(643730), r(563290);
      var i = (e.exports = s.md5 = s.md5 || {});
      (s.md.md5 = s.md.algorithms.md5 = i),
        (i.create = function () {
          l ||
            (function () {
              (n = String.fromCharCode(128)),
                (n += s.util.fillString(String.fromCharCode(0), 64)),
                (a = [
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 11, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 5, 8, 11, 14,
                  1, 4, 7, 10, 13, 0, 3, 6, 9, 12, 15, 2, 0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2, 9
                ]),
                (o = [
                  7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11,
                  16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
                ]),
                (c = new Array(64));
              for (var e = 0; e < 64; ++e) c[e] = Math.floor(4294967296 * Math.abs(Math.sin(e + 1)));
              l = !0;
            })();
          var e = null,
            t = s.util.createBuffer(),
            r = new Array(16),
            i = {
              algorithm: "md5",
              blockLength: 64,
              digestLength: 16,
              messageLength: 0,
              fullMessageLength: null,
              messageLengthSize: 8,
              start: function () {
                (i.messageLength = 0), (i.fullMessageLength = i.messageLength64 = []);
                for (var r = i.messageLengthSize / 4, n = 0; n < r; ++n) i.fullMessageLength.push(0);
                return (t = s.util.createBuffer()), (e = { h0: 1732584193, h1: 4023233417, h2: 2562383102, h3: 271733878 }), i;
              }
            };
          return (
            i.start(),
            (i.update = function (n, a) {
              "utf8" === a && (n = s.util.encodeUtf8(n));
              var o = n.length;
              (i.messageLength += o), (o = [(o / 4294967296) >>> 0, o >>> 0]);
              for (var c = i.fullMessageLength.length - 1; c >= 0; --c)
                (i.fullMessageLength[c] += o[1]),
                  (o[1] = o[0] + ((i.fullMessageLength[c] / 4294967296) >>> 0)),
                  (i.fullMessageLength[c] = i.fullMessageLength[c] >>> 0),
                  (o[0] = (o[1] / 4294967296) >>> 0);
              return t.putBytes(n), u(e, r, t), (t.read > 2048 || 0 === t.length()) && t.compact(), i;
            }),
            (i.digest = function () {
              var a = s.util.createBuffer();
              a.putBytes(t.bytes());
              var o = (i.fullMessageLength[i.fullMessageLength.length - 1] + i.messageLengthSize) & (i.blockLength - 1);
              a.putBytes(n.substr(0, i.blockLength - o));
              for (var c, l = 0, d = i.fullMessageLength.length - 1; d >= 0; --d)
                (l = ((c = 8 * i.fullMessageLength[d] + l) / 4294967296) >>> 0), a.putInt32Le(c >>> 0);
              var p = { h0: e.h0, h1: e.h1, h2: e.h2, h3: e.h3 };
              u(p, r, a);
              var h = s.util.createBuffer();
              return h.putInt32Le(p.h0), h.putInt32Le(p.h1), h.putInt32Le(p.h2), h.putInt32Le(p.h3), h;
            }),
            i
          );
        });
      var n = null,
        a = null,
        o = null,
        c = null,
        l = !1;
      function u(e, t, r) {
        for (var s, i, n, l, u, d, p, h = r.length(); h >= 64; ) {
          for (i = e.h0, n = e.h1, l = e.h2, u = e.h3, p = 0; p < 16; ++p)
            (t[p] = r.getInt32Le()),
              (s = i + (u ^ (n & (l ^ u))) + c[p] + t[p]),
              (i = u),
              (u = l),
              (l = n),
              (n += (s << (d = o[p])) | (s >>> (32 - d)));
          for (; p < 32; ++p)
            (s = i + (l ^ (u & (n ^ l))) + c[p] + t[a[p]]), (i = u), (u = l), (l = n), (n += (s << (d = o[p])) | (s >>> (32 - d)));
          for (; p < 48; ++p)
            (s = i + (n ^ l ^ u) + c[p] + t[a[p]]), (i = u), (u = l), (l = n), (n += (s << (d = o[p])) | (s >>> (32 - d)));
          for (; p < 64; ++p)
            (s = i + (l ^ (n | ~u)) + c[p] + t[a[p]]), (i = u), (u = l), (l = n), (n += (s << (d = o[p])) | (s >>> (32 - d)));
          (e.h0 = (e.h0 + i) | 0), (e.h1 = (e.h1 + n) | 0), (e.h2 = (e.h2 + l) | 0), (e.h3 = (e.h3 + u) | 0), (h -= 64);
        }
      }
    },
    239028: (e, t, r) => {
      var s = r(883418);
      r(309647), (e.exports = s.mgf = s.mgf || {}), (s.mgf.mgf1 = s.mgf1);
    },
    309647: (e, t, r) => {
      var s = r(883418);
      r(563290),
        (s.mgf = s.mgf || {}),
        ((e.exports = s.mgf.mgf1 = s.mgf1 = s.mgf1 || {}).create = function (e) {
          return {
            generate: function (t, r) {
              for (var i = new s.util.ByteBuffer(), n = Math.ceil(r / e.digestLength), a = 0; a < n; a++) {
                var o = new s.util.ByteBuffer();
                o.putInt32(a), e.start(), e.update(t + o.getBytes()), i.putBuffer(e.digest());
              }
              return i.truncate(i.length() - r), i.getBytes();
            }
          };
        });
    },
    843793: (e, t, r) => {
      var s = r(883418);
      s.pki = s.pki || {};
      var i = (e.exports = s.pki.oids = s.oids = s.oids || {});
      function n(e, t) {
        (i[e] = t), (i[t] = e);
      }
      function a(e, t) {
        i[e] = t;
      }
      n("1.2.840.113549.1.1.1", "rsaEncryption"),
        n("1.2.840.113549.1.1.4", "md5WithRSAEncryption"),
        n("1.2.840.113549.1.1.5", "sha1WithRSAEncryption"),
        n("1.2.840.113549.1.1.7", "RSAES-OAEP"),
        n("1.2.840.113549.1.1.8", "mgf1"),
        n("1.2.840.113549.1.1.9", "pSpecified"),
        n("1.2.840.113549.1.1.10", "RSASSA-PSS"),
        n("1.2.840.113549.1.1.11", "sha256WithRSAEncryption"),
        n("1.2.840.113549.1.1.12", "sha384WithRSAEncryption"),
        n("1.2.840.113549.1.1.13", "sha512WithRSAEncryption"),
        n("1.3.101.112", "EdDSA25519"),
        n("1.2.840.10040.4.3", "dsa-with-sha1"),
        n("1.3.14.3.2.7", "desCBC"),
        n("1.3.14.3.2.26", "sha1"),
        n("1.3.14.3.2.29", "sha1WithRSASignature"),
        n("2.16.840.1.101.3.4.2.1", "sha256"),
        n("2.16.840.1.101.3.4.2.2", "sha384"),
        n("2.16.840.1.101.3.4.2.3", "sha512"),
        n("2.16.840.1.101.3.4.2.4", "sha224"),
        n("2.16.840.1.101.3.4.2.5", "sha512-224"),
        n("2.16.840.1.101.3.4.2.6", "sha512-256"),
        n("1.2.840.113549.2.2", "md2"),
        n("1.2.840.113549.2.5", "md5"),
        n("1.2.840.113549.1.7.1", "data"),
        n("1.2.840.113549.1.7.2", "signedData"),
        n("1.2.840.113549.1.7.3", "envelopedData"),
        n("1.2.840.113549.1.7.4", "signedAndEnvelopedData"),
        n("1.2.840.113549.1.7.5", "digestedData"),
        n("1.2.840.113549.1.7.6", "encryptedData"),
        n("1.2.840.113549.1.9.1", "emailAddress"),
        n("1.2.840.113549.1.9.2", "unstructuredName"),
        n("1.2.840.113549.1.9.3", "contentType"),
        n("1.2.840.113549.1.9.4", "messageDigest"),
        n("1.2.840.113549.1.9.5", "signingTime"),
        n("1.2.840.113549.1.9.6", "counterSignature"),
        n("1.2.840.113549.1.9.7", "challengePassword"),
        n("1.2.840.113549.1.9.8", "unstructuredAddress"),
        n("1.2.840.113549.1.9.14", "extensionRequest"),
        n("1.2.840.113549.1.9.20", "friendlyName"),
        n("1.2.840.113549.1.9.21", "localKeyId"),
        n("1.2.840.113549.1.9.22.1", "x509Certificate"),
        n("1.2.840.113549.1.12.10.1.1", "keyBag"),
        n("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag"),
        n("1.2.840.113549.1.12.10.1.3", "certBag"),
        n("1.2.840.113549.1.12.10.1.4", "crlBag"),
        n("1.2.840.113549.1.12.10.1.5", "secretBag"),
        n("1.2.840.113549.1.12.10.1.6", "safeContentsBag"),
        n("1.2.840.113549.1.5.13", "pkcs5PBES2"),
        n("1.2.840.113549.1.5.12", "pkcs5PBKDF2"),
        n("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4"),
        n("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4"),
        n("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC"),
        n("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC"),
        n("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC"),
        n("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC"),
        n("1.2.840.113549.2.7", "hmacWithSHA1"),
        n("1.2.840.113549.2.8", "hmacWithSHA224"),
        n("1.2.840.113549.2.9", "hmacWithSHA256"),
        n("1.2.840.113549.2.10", "hmacWithSHA384"),
        n("1.2.840.113549.2.11", "hmacWithSHA512"),
        n("1.2.840.113549.3.7", "des-EDE3-CBC"),
        n("2.16.840.1.101.3.4.1.2", "aes128-CBC"),
        n("2.16.840.1.101.3.4.1.22", "aes192-CBC"),
        n("2.16.840.1.101.3.4.1.42", "aes256-CBC"),
        n("2.5.4.3", "commonName"),
        n("2.5.4.4", "surname"),
        n("2.5.4.5", "serialNumber"),
        n("2.5.4.6", "countryName"),
        n("2.5.4.7", "localityName"),
        n("2.5.4.8", "stateOrProvinceName"),
        n("2.5.4.9", "streetAddress"),
        n("2.5.4.10", "organizationName"),
        n("2.5.4.11", "organizationalUnitName"),
        n("2.5.4.12", "title"),
        n("2.5.4.13", "description"),
        n("2.5.4.15", "businessCategory"),
        n("2.5.4.17", "postalCode"),
        n("2.5.4.42", "givenName"),
        n("1.3.6.1.4.1.311.60.2.1.2", "jurisdictionOfIncorporationStateOrProvinceName"),
        n("1.3.6.1.4.1.311.60.2.1.3", "jurisdictionOfIncorporationCountryName"),
        n("2.16.840.1.113730.1.1", "nsCertType"),
        n("2.16.840.1.113730.1.13", "nsComment"),
        a("2.5.29.1", "authorityKeyIdentifier"),
        a("2.5.29.2", "keyAttributes"),
        a("2.5.29.3", "certificatePolicies"),
        a("2.5.29.4", "keyUsageRestriction"),
        a("2.5.29.5", "policyMapping"),
        a("2.5.29.6", "subtreesConstraint"),
        a("2.5.29.7", "subjectAltName"),
        a("2.5.29.8", "issuerAltName"),
        a("2.5.29.9", "subjectDirectoryAttributes"),
        a("2.5.29.10", "basicConstraints"),
        a("2.5.29.11", "nameConstraints"),
        a("2.5.29.12", "policyConstraints"),
        a("2.5.29.13", "basicConstraints"),
        n("2.5.29.14", "subjectKeyIdentifier"),
        n("2.5.29.15", "keyUsage"),
        a("2.5.29.16", "privateKeyUsagePeriod"),
        n("2.5.29.17", "subjectAltName"),
        n("2.5.29.18", "issuerAltName"),
        n("2.5.29.19", "basicConstraints"),
        a("2.5.29.20", "cRLNumber"),
        a("2.5.29.21", "cRLReason"),
        a("2.5.29.22", "expirationDate"),
        a("2.5.29.23", "instructionCode"),
        a("2.5.29.24", "invalidityDate"),
        a("2.5.29.25", "cRLDistributionPoints"),
        a("2.5.29.26", "issuingDistributionPoint"),
        a("2.5.29.27", "deltaCRLIndicator"),
        a("2.5.29.28", "issuingDistributionPoint"),
        a("2.5.29.29", "certificateIssuer"),
        a("2.5.29.30", "nameConstraints"),
        n("2.5.29.31", "cRLDistributionPoints"),
        n("2.5.29.32", "certificatePolicies"),
        a("2.5.29.33", "policyMappings"),
        a("2.5.29.34", "policyConstraints"),
        n("2.5.29.35", "authorityKeyIdentifier"),
        a("2.5.29.36", "policyConstraints"),
        n("2.5.29.37", "extKeyUsage"),
        a("2.5.29.46", "freshestCRL"),
        a("2.5.29.54", "inhibitAnyPolicy"),
        n("1.3.6.1.4.1.11129.2.4.2", "timestampList"),
        n("1.3.6.1.5.5.7.1.1", "authorityInfoAccess"),
        n("1.3.6.1.5.5.7.3.1", "serverAuth"),
        n("1.3.6.1.5.5.7.3.2", "clientAuth"),
        n("1.3.6.1.5.5.7.3.3", "codeSigning"),
        n("1.3.6.1.5.5.7.3.4", "emailProtection"),
        n("1.3.6.1.5.5.7.3.8", "timeStamping");
    },
    789007: (e, t, r) => {
      var s = r(883418);
      if (
        (r(443882),
        r(810001),
        r(986875),
        r(643730),
        r(843793),
        r(42497),
        r(830115),
        r(859018),
        r(714528),
        r(209120),
        r(563290),
        void 0 === i)
      )
        var i = s.jsbn.BigInteger;
      var n = s.asn1,
        a = (s.pki = s.pki || {});
      e.exports = a.pbe = s.pbe = s.pbe || {};
      var o = a.oids,
        c = {
          name: "EncryptedPrivateKeyInfo",
          tagClass: n.Class.UNIVERSAL,
          type: n.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "AlgorithmIdentifier.algorithm",
                  tagClass: n.Class.UNIVERSAL,
                  type: n.Type.OID,
                  constructed: !1,
                  capture: "encryptionOid"
                },
                {
                  name: "AlgorithmIdentifier.parameters",
                  tagClass: n.Class.UNIVERSAL,
                  type: n.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "encryptionParams"
                }
              ]
            },
            {
              name: "EncryptedPrivateKeyInfo.encryptedData",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.OCTETSTRING,
              constructed: !1,
              capture: "encryptedData"
            }
          ]
        },
        l = {
          name: "PBES2Algorithms",
          tagClass: n.Class.UNIVERSAL,
          type: n.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "PBES2Algorithms.keyDerivationFunc",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "PBES2Algorithms.keyDerivationFunc.oid",
                  tagClass: n.Class.UNIVERSAL,
                  type: n.Type.OID,
                  constructed: !1,
                  capture: "kdfOid"
                },
                {
                  name: "PBES2Algorithms.params",
                  tagClass: n.Class.UNIVERSAL,
                  type: n.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "PBES2Algorithms.params.salt",
                      tagClass: n.Class.UNIVERSAL,
                      type: n.Type.OCTETSTRING,
                      constructed: !1,
                      capture: "kdfSalt"
                    },
                    {
                      name: "PBES2Algorithms.params.iterationCount",
                      tagClass: n.Class.UNIVERSAL,
                      type: n.Type.INTEGER,
                      constructed: !1,
                      capture: "kdfIterationCount"
                    },
                    {
                      name: "PBES2Algorithms.params.keyLength",
                      tagClass: n.Class.UNIVERSAL,
                      type: n.Type.INTEGER,
                      constructed: !1,
                      optional: !0,
                      capture: "keyLength"
                    },
                    {
                      name: "PBES2Algorithms.params.prf",
                      tagClass: n.Class.UNIVERSAL,
                      type: n.Type.SEQUENCE,
                      constructed: !0,
                      optional: !0,
                      value: [
                        {
                          name: "PBES2Algorithms.params.prf.algorithm",
                          tagClass: n.Class.UNIVERSAL,
                          type: n.Type.OID,
                          constructed: !1,
                          capture: "prfOid"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "PBES2Algorithms.encryptionScheme",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "PBES2Algorithms.encryptionScheme.oid",
                  tagClass: n.Class.UNIVERSAL,
                  type: n.Type.OID,
                  constructed: !1,
                  capture: "encOid"
                },
                {
                  name: "PBES2Algorithms.encryptionScheme.iv",
                  tagClass: n.Class.UNIVERSAL,
                  type: n.Type.OCTETSTRING,
                  constructed: !1,
                  capture: "encIv"
                }
              ]
            }
          ]
        },
        u = {
          name: "pkcs-12PbeParams",
          tagClass: n.Class.UNIVERSAL,
          type: n.Type.SEQUENCE,
          constructed: !0,
          value: [
            { name: "pkcs-12PbeParams.salt", tagClass: n.Class.UNIVERSAL, type: n.Type.OCTETSTRING, constructed: !1, capture: "salt" },
            {
              name: "pkcs-12PbeParams.iterations",
              tagClass: n.Class.UNIVERSAL,
              type: n.Type.INTEGER,
              constructed: !1,
              capture: "iterations"
            }
          ]
        };
      function d(e, t) {
        return e.start().update(t).digest().getBytes();
      }
      function p(e) {
        var t;
        if (e) {
          if (!(t = a.oids[n.derToOid(e)])) {
            var r = new Error("Unsupported PRF OID.");
            throw (
              ((r.oid = e), (r.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"]), r)
            );
          }
        } else t = "hmacWithSHA1";
        return h(t);
      }
      function h(e) {
        var t = s.md;
        switch (e) {
          case "hmacWithSHA224":
            t = s.md.sha512;
          case "hmacWithSHA1":
          case "hmacWithSHA256":
          case "hmacWithSHA384":
          case "hmacWithSHA512":
            e = e.substr(8).toLowerCase();
            break;
          default:
            var r = new Error("Unsupported PRF algorithm.");
            throw (
              ((r.algorithm = e),
              (r.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"]),
              r)
            );
        }
        if (!t || !(e in t)) throw new Error("Unknown hash algorithm: " + e);
        return t[e].create();
      }
      (a.encryptPrivateKeyInfo = function (e, t, r) {
        ((r = r || {}).saltSize = r.saltSize || 8),
          (r.count = r.count || 2048),
          (r.algorithm = r.algorithm || "aes128"),
          (r.prfAlgorithm = r.prfAlgorithm || "sha1");
        var i,
          c,
          l,
          u = s.random.getBytesSync(r.saltSize),
          d = r.count,
          p = n.integerToDer(d);
        if (0 === r.algorithm.indexOf("aes") || "des" === r.algorithm) {
          var f, g, y;
          switch (r.algorithm) {
            case "aes128":
              (i = 16), (f = 16), (g = o["aes128-CBC"]), (y = s.aes.createEncryptionCipher);
              break;
            case "aes192":
              (i = 24), (f = 16), (g = o["aes192-CBC"]), (y = s.aes.createEncryptionCipher);
              break;
            case "aes256":
              (i = 32), (f = 16), (g = o["aes256-CBC"]), (y = s.aes.createEncryptionCipher);
              break;
            case "des":
              (i = 8), (f = 8), (g = o.desCBC), (y = s.des.createEncryptionCipher);
              break;
            default:
              throw (((S = new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm = r.algorithm), S);
          }
          var E = "hmacWith" + r.prfAlgorithm.toUpperCase(),
            m = h(E),
            v = s.pkcs5.pbkdf2(t, u, d, i, m),
            T = s.random.getBytesSync(f);
          (A = y(v)).start(T), A.update(n.toDer(e)), A.finish(), (l = A.output.getBytes());
          var C = (function (e, t, r, i) {
            var o = n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
              n.create(n.Class.UNIVERSAL, n.Type.OCTETSTRING, !1, e),
              n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, t.getBytes())
            ]);
            return (
              "hmacWithSHA1" !== i &&
                o.value.push(
                  n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, s.util.hexToBytes(r.toString(16))),
                  n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
                    n.create(n.Class.UNIVERSAL, n.Type.OID, !1, n.oidToDer(a.oids[i]).getBytes()),
                    n.create(n.Class.UNIVERSAL, n.Type.NULL, !1, "")
                  ])
                ),
              o
            );
          })(u, p, i, E);
          c = n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
            n.create(n.Class.UNIVERSAL, n.Type.OID, !1, n.oidToDer(o.pkcs5PBES2).getBytes()),
            n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
              n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
                n.create(n.Class.UNIVERSAL, n.Type.OID, !1, n.oidToDer(o.pkcs5PBKDF2).getBytes()),
                C
              ]),
              n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
                n.create(n.Class.UNIVERSAL, n.Type.OID, !1, n.oidToDer(g).getBytes()),
                n.create(n.Class.UNIVERSAL, n.Type.OCTETSTRING, !1, T)
              ])
            ])
          ]);
        } else {
          var S;
          if ("3des" !== r.algorithm)
            throw (((S = new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm = r.algorithm), S);
          i = 24;
          var A,
            _ = new s.util.ByteBuffer(u);
          (v = a.pbe.generatePkcs12Key(t, _, 1, d, i)),
            (T = a.pbe.generatePkcs12Key(t, _, 2, d, i)),
            (A = s.des.createEncryptionCipher(v)).start(T),
            A.update(n.toDer(e)),
            A.finish(),
            (l = A.output.getBytes()),
            (c = n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
              n.create(n.Class.UNIVERSAL, n.Type.OID, !1, n.oidToDer(o["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()),
              n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [
                n.create(n.Class.UNIVERSAL, n.Type.OCTETSTRING, !1, u),
                n.create(n.Class.UNIVERSAL, n.Type.INTEGER, !1, p.getBytes())
              ])
            ]));
        }
        return n.create(n.Class.UNIVERSAL, n.Type.SEQUENCE, !0, [c, n.create(n.Class.UNIVERSAL, n.Type.OCTETSTRING, !1, l)]);
      }),
        (a.decryptPrivateKeyInfo = function (e, t) {
          var r = null,
            i = {},
            o = [];
          if (!n.validate(e, c, i, o)) {
            var l = new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
            throw ((l.errors = o), l);
          }
          var u = n.derToOid(i.encryptionOid),
            d = a.pbe.getCipher(u, i.encryptionParams, t),
            p = s.util.createBuffer(i.encryptedData);
          return d.update(p), d.finish() && (r = n.fromDer(d.output)), r;
        }),
        (a.encryptedPrivateKeyToPem = function (e, t) {
          var r = { type: "ENCRYPTED PRIVATE KEY", body: n.toDer(e).getBytes() };
          return s.pem.encode(r, { maxline: t });
        }),
        (a.encryptedPrivateKeyFromPem = function (e) {
          var t = s.pem.decode(e)[0];
          if ("ENCRYPTED PRIVATE KEY" !== t.type) {
            var r = new Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');
            throw ((r.headerType = t.type), r);
          }
          if (t.procType && "ENCRYPTED" === t.procType.type)
            throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");
          return n.fromDer(t.body);
        }),
        (a.encryptRsaPrivateKey = function (e, t, r) {
          if (!(r = r || {}).legacy) {
            var i = a.wrapRsaPrivateKey(a.privateKeyToAsn1(e));
            return (i = a.encryptPrivateKeyInfo(i, t, r)), a.encryptedPrivateKeyToPem(i);
          }
          var o, c, l, u;
          switch (r.algorithm) {
            case "aes128":
              (o = "AES-128-CBC"), (l = 16), (c = s.random.getBytesSync(16)), (u = s.aes.createEncryptionCipher);
              break;
            case "aes192":
              (o = "AES-192-CBC"), (l = 24), (c = s.random.getBytesSync(16)), (u = s.aes.createEncryptionCipher);
              break;
            case "aes256":
              (o = "AES-256-CBC"), (l = 32), (c = s.random.getBytesSync(16)), (u = s.aes.createEncryptionCipher);
              break;
            case "3des":
              (o = "DES-EDE3-CBC"), (l = 24), (c = s.random.getBytesSync(8)), (u = s.des.createEncryptionCipher);
              break;
            case "des":
              (o = "DES-CBC"), (l = 8), (c = s.random.getBytesSync(8)), (u = s.des.createEncryptionCipher);
              break;
            default:
              var d = new Error('Could not encrypt RSA private key; unsupported encryption algorithm "' + r.algorithm + '".');
              throw ((d.algorithm = r.algorithm), d);
          }
          var p = u(s.pbe.opensslDeriveBytes(t, c.substr(0, 8), l));
          p.start(c), p.update(n.toDer(a.privateKeyToAsn1(e))), p.finish();
          var h = {
            type: "RSA PRIVATE KEY",
            procType: { version: "4", type: "ENCRYPTED" },
            dekInfo: { algorithm: o, parameters: s.util.bytesToHex(c).toUpperCase() },
            body: p.output.getBytes()
          };
          return s.pem.encode(h);
        }),
        (a.decryptRsaPrivateKey = function (e, t) {
          var r = null,
            i = s.pem.decode(e)[0];
          if ("ENCRYPTED PRIVATE KEY" !== i.type && "PRIVATE KEY" !== i.type && "RSA PRIVATE KEY" !== i.type)
            throw (
              (((l = new Error(
                'Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".'
              )).headerType = l),
              l)
            );
          if (i.procType && "ENCRYPTED" === i.procType.type) {
            var o, c;
            switch (i.dekInfo.algorithm) {
              case "DES-CBC":
                (o = 8), (c = s.des.createDecryptionCipher);
                break;
              case "DES-EDE3-CBC":
                (o = 24), (c = s.des.createDecryptionCipher);
                break;
              case "AES-128-CBC":
                (o = 16), (c = s.aes.createDecryptionCipher);
                break;
              case "AES-192-CBC":
                (o = 24), (c = s.aes.createDecryptionCipher);
                break;
              case "AES-256-CBC":
                (o = 32), (c = s.aes.createDecryptionCipher);
                break;
              case "RC2-40-CBC":
                (o = 5),
                  (c = function (e) {
                    return s.rc2.createDecryptionCipher(e, 40);
                  });
                break;
              case "RC2-64-CBC":
                (o = 8),
                  (c = function (e) {
                    return s.rc2.createDecryptionCipher(e, 64);
                  });
                break;
              case "RC2-128-CBC":
                (o = 16),
                  (c = function (e) {
                    return s.rc2.createDecryptionCipher(e, 128);
                  });
                break;
              default:
                var l;
                throw (
                  (((l = new Error(
                    'Could not decrypt private key; unsupported encryption algorithm "' + i.dekInfo.algorithm + '".'
                  )).algorithm = i.dekInfo.algorithm),
                  l)
                );
            }
            var u = s.util.hexToBytes(i.dekInfo.parameters),
              d = c(s.pbe.opensslDeriveBytes(t, u.substr(0, 8), o));
            if ((d.start(u), d.update(s.util.createBuffer(i.body)), !d.finish())) return r;
            r = d.output.getBytes();
          } else r = i.body;
          return (
            null !== (r = "ENCRYPTED PRIVATE KEY" === i.type ? a.decryptPrivateKeyInfo(n.fromDer(r), t) : n.fromDer(r)) &&
              (r = a.privateKeyFromAsn1(r)),
            r
          );
        }),
        (a.pbe.generatePkcs12Key = function (e, t, r, i, n, a) {
          var o, c;
          if (null == a) {
            if (!("sha1" in s.md)) throw new Error('"sha1" hash algorithm unavailable.');
            a = s.md.sha1.create();
          }
          var l = a.digestLength,
            u = a.blockLength,
            d = new s.util.ByteBuffer(),
            p = new s.util.ByteBuffer();
          if (null != e) {
            for (c = 0; c < e.length; c++) p.putInt16(e.charCodeAt(c));
            p.putInt16(0);
          }
          var h = p.length(),
            f = t.length(),
            g = new s.util.ByteBuffer();
          g.fillWithByte(r, u);
          var y = u * Math.ceil(f / u),
            E = new s.util.ByteBuffer();
          for (c = 0; c < y; c++) E.putByte(t.at(c % f));
          var m = u * Math.ceil(h / u),
            v = new s.util.ByteBuffer();
          for (c = 0; c < m; c++) v.putByte(p.at(c % h));
          var T = E;
          T.putBuffer(v);
          for (var C = Math.ceil(n / l), S = 1; S <= C; S++) {
            var A = new s.util.ByteBuffer();
            A.putBytes(g.bytes()), A.putBytes(T.bytes());
            for (var _ = 0; _ < i; _++) a.start(), a.update(A.getBytes()), (A = a.digest());
            var I = new s.util.ByteBuffer();
            for (c = 0; c < u; c++) I.putByte(A.at(c % l));
            var b = Math.ceil(f / u) + Math.ceil(h / u),
              R = new s.util.ByteBuffer();
            for (o = 0; o < b; o++) {
              var O = new s.util.ByteBuffer(T.getBytes(u)),
                P = 511;
              for (c = I.length() - 1; c >= 0; c--) (P >>= 8), (P += I.at(c) + O.at(c)), O.setAt(c, 255 & P);
              R.putBuffer(O);
            }
            (T = R), d.putBuffer(A);
          }
          return d.truncate(d.length() - n), d;
        }),
        (a.pbe.getCipher = function (e, t, r) {
          switch (e) {
            case a.oids.pkcs5PBES2:
              return a.pbe.getCipherForPBES2(e, t, r);
            case a.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
            case a.oids["pbewithSHAAnd40BitRC2-CBC"]:
              return a.pbe.getCipherForPKCS12PBE(e, t, r);
            default:
              var s = new Error("Cannot read encrypted PBE data block. Unsupported OID.");
              throw ((s.oid = e), (s.supportedOids = ["pkcs5PBES2", "pbeWithSHAAnd3-KeyTripleDES-CBC", "pbewithSHAAnd40BitRC2-CBC"]), s);
          }
        }),
        (a.pbe.getCipherForPBES2 = function (e, t, r) {
          var i,
            o = {},
            c = [];
          if (!n.validate(t, l, o, c))
            throw (
              (((i = new Error(
                "Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo."
              )).errors = c),
              i)
            );
          if ((e = n.derToOid(o.kdfOid)) !== a.oids.pkcs5PBKDF2)
            throw (
              (((i = new Error("Cannot read encrypted private key. Unsupported key derivation function OID.")).oid = e),
              (i.supportedOids = ["pkcs5PBKDF2"]),
              i)
            );
          if (
            (e = n.derToOid(o.encOid)) !== a.oids["aes128-CBC"] &&
            e !== a.oids["aes192-CBC"] &&
            e !== a.oids["aes256-CBC"] &&
            e !== a.oids["des-EDE3-CBC"] &&
            e !== a.oids.desCBC
          )
            throw (
              (((i = new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.")).oid = e),
              (i.supportedOids = ["aes128-CBC", "aes192-CBC", "aes256-CBC", "des-EDE3-CBC", "desCBC"]),
              i)
            );
          var u,
            d,
            h = o.kdfSalt,
            f = s.util.createBuffer(o.kdfIterationCount);
          switch (((f = f.getInt(f.length() << 3)), a.oids[e])) {
            case "aes128-CBC":
              (u = 16), (d = s.aes.createDecryptionCipher);
              break;
            case "aes192-CBC":
              (u = 24), (d = s.aes.createDecryptionCipher);
              break;
            case "aes256-CBC":
              (u = 32), (d = s.aes.createDecryptionCipher);
              break;
            case "des-EDE3-CBC":
              (u = 24), (d = s.des.createDecryptionCipher);
              break;
            case "desCBC":
              (u = 8), (d = s.des.createDecryptionCipher);
          }
          var g = p(o.prfOid),
            y = s.pkcs5.pbkdf2(r, h, f, u, g),
            E = o.encIv,
            m = d(y);
          return m.start(E), m;
        }),
        (a.pbe.getCipherForPKCS12PBE = function (e, t, r) {
          var i = {},
            o = [];
          if (!n.validate(t, u, i, o))
            throw (
              (((g = new Error(
                "Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo."
              )).errors = o),
              g)
            );
          var c,
            l,
            d,
            h = s.util.createBuffer(i.salt),
            f = s.util.createBuffer(i.iterations);
          switch (((f = f.getInt(f.length() << 3)), e)) {
            case a.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
              (c = 24), (l = 8), (d = s.des.startDecrypting);
              break;
            case a.oids["pbewithSHAAnd40BitRC2-CBC"]:
              (c = 5),
                (l = 8),
                (d = function (e, t) {
                  var r = s.rc2.createDecryptionCipher(e, 40);
                  return r.start(t, null), r;
                });
              break;
            default:
              var g;
              throw (((g = new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.")).oid = e), g);
          }
          var y = p(i.prfOid),
            E = a.pbe.generatePkcs12Key(r, h, 1, f, c, y);
          return y.start(), d(E, a.pbe.generatePkcs12Key(r, h, 2, f, l, y));
        }),
        (a.pbe.opensslDeriveBytes = function (e, t, r, i) {
          if (null == i) {
            if (!("md5" in s.md)) throw new Error('"md5" hash algorithm unavailable.');
            i = s.md.md5.create();
          }
          null === t && (t = "");
          for (var n = [d(i, e + t)], a = 16, o = 1; a < r; ++o, a += 16) n.push(d(i, n[o - 1] + e + t));
          return n.join("").substr(0, r);
        });
    },
    42497: (e, t, r) => {
      var s = r(603275).Buffer,
        i = r(883418);
      r(685469), r(643730), r(563290);
      var n,
        a = (i.pkcs5 = i.pkcs5 || {});
      i.util.isNodejs && !i.options.usePureJavaScript && (n = r(963619)),
        (e.exports =
          i.pbkdf2 =
          a.pbkdf2 =
            function (e, t, r, a, o, c) {
              if (
                ("function" == typeof o && ((c = o), (o = null)),
                i.util.isNodejs &&
                  !i.options.usePureJavaScript &&
                  n.pbkdf2 &&
                  (null === o || "object" != typeof o) &&
                  (n.pbkdf2Sync.length > 4 || !o || "sha1" === o))
              )
                return (
                  "string" != typeof o && (o = "sha1"),
                  (e = s.from(e, "binary")),
                  (t = s.from(t, "binary")),
                  c
                    ? 4 === n.pbkdf2Sync.length
                      ? n.pbkdf2(e, t, r, a, function (e, t) {
                          if (e) return c(e);
                          c(null, t.toString("binary"));
                        })
                      : n.pbkdf2(e, t, r, a, o, function (e, t) {
                          if (e) return c(e);
                          c(null, t.toString("binary"));
                        })
                    : 4 === n.pbkdf2Sync.length
                    ? n.pbkdf2Sync(e, t, r, a).toString("binary")
                    : n.pbkdf2Sync(e, t, r, a, o).toString("binary")
                );
              if ((null == o && (o = "sha1"), "string" == typeof o)) {
                if (!(o in i.md.algorithms)) throw new Error("Unknown hash algorithm: " + o);
                o = i.md[o].create();
              }
              var l = o.digestLength;
              if (a > 4294967295 * l) {
                var u = new Error("Derived key is too long.");
                if (c) return c(u);
                throw u;
              }
              var d = Math.ceil(a / l),
                p = a - (d - 1) * l,
                h = i.hmac.create();
              h.start(o, e);
              var f,
                g,
                y,
                E = "";
              if (!c) {
                for (var m = 1; m <= d; ++m) {
                  h.start(null, null), h.update(t), h.update(i.util.int32ToBytes(m)), (f = y = h.digest().getBytes());
                  for (var v = 2; v <= r; ++v)
                    h.start(null, null), h.update(y), (g = h.digest().getBytes()), (f = i.util.xorBytes(f, g, l)), (y = g);
                  E += m < d ? f : f.substr(0, p);
                }
                return E;
              }
              function T() {
                if (m > d) return c(null, E);
                h.start(null, null), h.update(t), h.update(i.util.int32ToBytes(m)), (f = y = h.digest().getBytes()), (v = 2), C();
              }
              function C() {
                if (v <= r)
                  return (
                    h.start(null, null),
                    h.update(y),
                    (g = h.digest().getBytes()),
                    (f = i.util.xorBytes(f, g, l)),
                    (y = g),
                    ++v,
                    i.util.setImmediate(C)
                  );
                (E += m < d ? f : f.substr(0, p)), ++m, T();
              }
              (m = 1), T();
            });
    },
    830115: (e, t, r) => {
      var s = r(883418);
      r(563290);
      var i = (e.exports = s.pem = s.pem || {});
      function n(e) {
        for (
          var t = e.name + ": ",
            r = [],
            s = function (e, t) {
              return " " + t;
            },
            i = 0;
          i < e.values.length;
          ++i
        )
          r.push(e.values[i].replace(/^(\S+\r\n)/, s));
        t += r.join(",") + "\r\n";
        var n = 0,
          a = -1;
        for (i = 0; i < t.length; ++i, ++n)
          if (n > 65 && -1 !== a) {
            var o = t[a];
            "," === o ? (++a, (t = t.substr(0, a) + "\r\n " + t.substr(a))) : (t = t.substr(0, a) + "\r\n" + o + t.substr(a + 1)),
              (n = i - a - 1),
              (a = -1),
              ++i;
          } else (" " !== t[i] && "\t" !== t[i] && "," !== t[i]) || (a = i);
        return t;
      }
      function a(e) {
        return e.replace(/^\s+/, "");
      }
      (i.encode = function (e, t) {
        t = t || {};
        var r,
          i = "-----BEGIN " + e.type + "-----\r\n";
        if (
          (e.procType && (i += n((r = { name: "Proc-Type", values: [String(e.procType.version), e.procType.type] }))),
          e.contentDomain && (i += n((r = { name: "Content-Domain", values: [e.contentDomain] }))),
          e.dekInfo &&
            ((r = { name: "DEK-Info", values: [e.dekInfo.algorithm] }),
            e.dekInfo.parameters && r.values.push(e.dekInfo.parameters),
            (i += n(r))),
          e.headers)
        )
          for (var a = 0; a < e.headers.length; ++a) i += n(e.headers[a]);
        return e.procType && (i += "\r\n"), (i += s.util.encode64(e.body, t.maxline || 64) + "\r\n") + "-----END " + e.type + "-----\r\n";
      }),
        (i.decode = function (e) {
          for (
            var t,
              r = [],
              i = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,
              n = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,
              o = /\r?\n/;
            (t = i.exec(e));

          ) {
            var c = t[1];
            "NEW CERTIFICATE REQUEST" === c && (c = "CERTIFICATE REQUEST");
            var l = { type: c, procType: null, contentDomain: null, dekInfo: null, headers: [], body: s.util.decode64(t[3]) };
            if ((r.push(l), t[2])) {
              for (var u = t[2].split(o), d = 0; t && d < u.length; ) {
                for (var p = u[d].replace(/\s+$/, ""), h = d + 1; h < u.length; ++h) {
                  var f = u[h];
                  if (!/\s/.test(f[0])) break;
                  (p += f), (d = h);
                }
                if ((t = p.match(n))) {
                  for (var g = { name: t[1], values: [] }, y = t[2].split(","), E = 0; E < y.length; ++E) g.values.push(a(y[E]));
                  if (l.procType)
                    if (l.contentDomain || "Content-Domain" !== g.name)
                      if (l.dekInfo || "DEK-Info" !== g.name) l.headers.push(g);
                      else {
                        if (0 === g.values.length)
                          throw new Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');
                        l.dekInfo = { algorithm: y[0], parameters: y[1] || null };
                      }
                    else l.contentDomain = y[0] || "";
                  else {
                    if ("Proc-Type" !== g.name)
                      throw new Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');
                    if (2 !== g.values.length)
                      throw new Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');
                    l.procType = { version: y[0], type: y[1] };
                  }
                }
                ++d;
              }
              if ("ENCRYPTED" === l.procType && !l.dekInfo)
                throw new Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".');
            }
          }
          if (0 === r.length) throw new Error("Invalid PEM formatted message.");
          return r;
        });
    },
    807993: (e, t, r) => {
      var s = r(883418);
      r(563290), r(859018), r(328804);
      var i = (e.exports = s.pkcs1 = s.pkcs1 || {});
      function n(e, t, r) {
        r || (r = s.md.sha1.create());
        for (var i = "", n = Math.ceil(t / r.digestLength), a = 0; a < n; ++a) {
          var o = String.fromCharCode((a >> 24) & 255, (a >> 16) & 255, (a >> 8) & 255, 255 & a);
          r.start(), r.update(e + o), (i += r.digest().getBytes());
        }
        return i.substring(0, t);
      }
      (i.encode_rsa_oaep = function (e, t, r) {
        var i, a, o, c;
        "string" == typeof r
          ? ((i = r), (a = arguments[3] || void 0), (o = arguments[4] || void 0))
          : r && ((i = r.label || void 0), (a = r.seed || void 0), (o = r.md || void 0), r.mgf1 && r.mgf1.md && (c = r.mgf1.md)),
          o ? o.start() : (o = s.md.sha1.create()),
          c || (c = o);
        var l = Math.ceil(e.n.bitLength() / 8),
          u = l - 2 * o.digestLength - 2;
        if (t.length > u) throw (((g = new Error("RSAES-OAEP input message length is too long.")).length = t.length), (g.maxLength = u), g);
        i || (i = ""), o.update(i, "raw");
        for (var d = o.digest(), p = "", h = u - t.length, f = 0; f < h; f++) p += "\0";
        var g,
          y = d.getBytes() + p + "" + t;
        if (a) {
          if (a.length !== o.digestLength)
            throw (
              (((g = new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.")).seedLength = a.length),
              (g.digestLength = o.digestLength),
              g)
            );
        } else a = s.random.getBytes(o.digestLength);
        var E = n(a, l - o.digestLength - 1, c),
          m = s.util.xorBytes(y, E, y.length),
          v = n(m, o.digestLength, c);
        return "\0" + s.util.xorBytes(a, v, a.length) + m;
      }),
        (i.decode_rsa_oaep = function (e, t, r) {
          var i, a, o;
          "string" == typeof r
            ? ((i = r), (a = arguments[3] || void 0))
            : r && ((i = r.label || void 0), (a = r.md || void 0), r.mgf1 && r.mgf1.md && (o = r.mgf1.md));
          var c = Math.ceil(e.n.bitLength() / 8);
          if (t.length !== c)
            throw (((E = new Error("RSAES-OAEP encoded message length is invalid.")).length = t.length), (E.expectedLength = c), E);
          if ((void 0 === a ? (a = s.md.sha1.create()) : a.start(), o || (o = a), c < 2 * a.digestLength + 2))
            throw new Error("RSAES-OAEP key is too short for the hash function.");
          i || (i = ""), a.update(i, "raw");
          for (
            var l = a.digest().getBytes(),
              u = t.charAt(0),
              d = t.substring(1, a.digestLength + 1),
              p = t.substring(1 + a.digestLength),
              h = n(p, a.digestLength, o),
              f = n(s.util.xorBytes(d, h, d.length), c - a.digestLength - 1, o),
              g = s.util.xorBytes(p, f, p.length),
              y = g.substring(0, a.digestLength),
              E = "\0" !== u,
              m = 0;
            m < a.digestLength;
            ++m
          )
            E |= l.charAt(m) !== y.charAt(m);
          for (var v = 1, T = a.digestLength, C = a.digestLength; C < g.length; C++) {
            var S = g.charCodeAt(C);
            (E |= S & (v ? 65534 : 0)), (T += v &= (1 & S) ^ 1);
          }
          if (E || 1 !== g.charCodeAt(T)) throw new Error("Invalid RSAES-OAEP padding.");
          return g.substring(T + 1);
        });
    },
    384834: (e, t, r) => {
      var s = r(883418);
      r(810001), r(685469), r(843793), r(423023), r(789007), r(859018), r(209120), r(328804), r(563290), r(304811);
      var i = s.asn1,
        n = s.pki,
        a = (e.exports = s.pkcs12 = s.pkcs12 || {}),
        o = {
          name: "ContentInfo",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            { name: "ContentInfo.contentType", tagClass: i.Class.UNIVERSAL, type: i.Type.OID, constructed: !1, capture: "contentType" },
            { name: "ContentInfo.content", tagClass: i.Class.CONTEXT_SPECIFIC, constructed: !0, captureAsn1: "content" }
          ]
        },
        c = {
          name: "PFX",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            { name: "PFX.version", tagClass: i.Class.UNIVERSAL, type: i.Type.INTEGER, constructed: !1, capture: "version" },
            o,
            {
              name: "PFX.macData",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              optional: !0,
              captureAsn1: "mac",
              value: [
                {
                  name: "PFX.macData.mac",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "PFX.macData.mac.digestAlgorithm",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.SEQUENCE,
                      constructed: !0,
                      value: [
                        {
                          name: "PFX.macData.mac.digestAlgorithm.algorithm",
                          tagClass: i.Class.UNIVERSAL,
                          type: i.Type.OID,
                          constructed: !1,
                          capture: "macAlgorithm"
                        },
                        {
                          name: "PFX.macData.mac.digestAlgorithm.parameters",
                          tagClass: i.Class.UNIVERSAL,
                          captureAsn1: "macAlgorithmParameters"
                        }
                      ]
                    },
                    {
                      name: "PFX.macData.mac.digest",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.OCTETSTRING,
                      constructed: !1,
                      capture: "macDigest"
                    }
                  ]
                },
                { name: "PFX.macData.macSalt", tagClass: i.Class.UNIVERSAL, type: i.Type.OCTETSTRING, constructed: !1, capture: "macSalt" },
                {
                  name: "PFX.macData.iterations",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.INTEGER,
                  constructed: !1,
                  optional: !0,
                  capture: "macIterations"
                }
              ]
            }
          ]
        },
        l = {
          name: "SafeBag",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            { name: "SafeBag.bagId", tagClass: i.Class.UNIVERSAL, type: i.Type.OID, constructed: !1, capture: "bagId" },
            { name: "SafeBag.bagValue", tagClass: i.Class.CONTEXT_SPECIFIC, constructed: !0, captureAsn1: "bagValue" },
            {
              name: "SafeBag.bagAttributes",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SET,
              constructed: !0,
              optional: !0,
              capture: "bagAttributes"
            }
          ]
        },
        u = {
          name: "Attribute",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            { name: "Attribute.attrId", tagClass: i.Class.UNIVERSAL, type: i.Type.OID, constructed: !1, capture: "oid" },
            { name: "Attribute.attrValues", tagClass: i.Class.UNIVERSAL, type: i.Type.SET, constructed: !0, capture: "values" }
          ]
        },
        d = {
          name: "CertBag",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            { name: "CertBag.certId", tagClass: i.Class.UNIVERSAL, type: i.Type.OID, constructed: !1, capture: "certId" },
            {
              name: "CertBag.certValue",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              constructed: !0,
              value: [
                { name: "CertBag.certValue[0]", tagClass: i.Class.UNIVERSAL, type: i.Class.OCTETSTRING, constructed: !1, capture: "cert" }
              ]
            }
          ]
        };
      function p(e, t, r, s) {
        for (var i = [], n = 0; n < e.length; n++)
          for (var a = 0; a < e[n].safeBags.length; a++) {
            var o = e[n].safeBags[a];
            (void 0 !== s && o.type !== s) ||
              (null !== t ? void 0 !== o.attributes[t] && o.attributes[t].indexOf(r) >= 0 && i.push(o) : i.push(o));
          }
        return i;
      }
      function h(e) {
        if (e.composed || e.constructed) {
          for (var t = s.util.createBuffer(), r = 0; r < e.value.length; ++r) t.putBytes(e.value[r].value);
          (e.composed = e.constructed = !1), (e.value = t.getBytes());
        }
        return e;
      }
      function f(e, t) {
        var r = {},
          a = [];
        if (!i.validate(e, s.pkcs7.asn1.encryptedDataValidator, r, a))
          throw (((o = new Error("Cannot read EncryptedContentInfo.")).errors = a), o);
        var o,
          c = i.derToOid(r.contentType);
        if (c !== n.oids.data) throw (((o = new Error("PKCS#12 EncryptedContentInfo ContentType is not Data.")).oid = c), o);
        c = i.derToOid(r.encAlgorithm);
        var l = n.pbe.getCipher(c, r.encParameter, t),
          u = h(r.encryptedContentAsn1),
          d = s.util.createBuffer(u.value);
        if ((l.update(d), !l.finish())) throw new Error("Failed to decrypt PKCS#12 SafeContents.");
        return l.output.getBytes();
      }
      function g(e, t, r) {
        if (!t && 0 === e.length) return [];
        if ((e = i.fromDer(e, t)).tagClass !== i.Class.UNIVERSAL || e.type !== i.Type.SEQUENCE || !0 !== e.constructed)
          throw new Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");
        for (var s = [], a = 0; a < e.value.length; a++) {
          var o = e.value[a],
            c = {},
            u = [];
          if (!i.validate(o, l, c, u)) throw (((E = new Error("Cannot read SafeBag.")).errors = u), E);
          var p,
            h,
            f = { type: i.derToOid(c.bagId), attributes: y(c.bagAttributes) };
          s.push(f);
          var g = c.bagValue.value[0];
          switch (f.type) {
            case n.oids.pkcs8ShroudedKeyBag:
              if (null === (g = n.decryptPrivateKeyInfo(g, r))) throw new Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");
            case n.oids.keyBag:
              try {
                f.key = n.privateKeyFromAsn1(g);
              } catch (e) {
                (f.key = null), (f.asn1 = g);
              }
              continue;
            case n.oids.certBag:
              (p = d),
                (h = function () {
                  if (i.derToOid(c.certId) !== n.oids.x509Certificate) {
                    var e = new Error("Unsupported certificate type, only X.509 supported.");
                    throw ((e.oid = i.derToOid(c.certId)), e);
                  }
                  var r = i.fromDer(c.cert, t);
                  try {
                    f.cert = n.certificateFromAsn1(r, !0);
                  } catch (e) {
                    (f.cert = null), (f.asn1 = r);
                  }
                });
              break;
            default:
              var E;
              throw (((E = new Error("Unsupported PKCS#12 SafeBag type.")).oid = f.type), E);
          }
          if (void 0 !== p && !i.validate(g, p, c, u)) throw (((E = new Error("Cannot read PKCS#12 " + p.name)).errors = u), E);
          h();
        }
        return s;
      }
      function y(e) {
        var t = {};
        if (void 0 !== e)
          for (var r = 0; r < e.length; ++r) {
            var s = {},
              a = [];
            if (!i.validate(e[r], u, s, a)) {
              var o = new Error("Cannot read PKCS#12 BagAttribute.");
              throw ((o.errors = a), o);
            }
            var c = i.derToOid(s.oid);
            if (void 0 !== n.oids[c]) {
              t[n.oids[c]] = [];
              for (var l = 0; l < s.values.length; ++l) t[n.oids[c]].push(s.values[l].value);
            }
          }
        return t;
      }
      (a.pkcs12FromAsn1 = function (e, t, r) {
        "string" == typeof t ? ((r = t), (t = !0)) : void 0 === t && (t = !0);
        var l = {};
        if (!i.validate(e, c, l, []))
          throw (((u = new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.")).errors = u), u);
        var u,
          d = {
            version: l.version.charCodeAt(0),
            safeContents: [],
            getBags: function (e) {
              var t,
                r = {};
              return (
                "localKeyId" in e ? (t = e.localKeyId) : "localKeyIdHex" in e && (t = s.util.hexToBytes(e.localKeyIdHex)),
                void 0 === t && !("friendlyName" in e) && "bagType" in e && (r[e.bagType] = p(d.safeContents, null, null, e.bagType)),
                void 0 !== t && (r.localKeyId = p(d.safeContents, "localKeyId", t, e.bagType)),
                "friendlyName" in e && (r.friendlyName = p(d.safeContents, "friendlyName", e.friendlyName, e.bagType)),
                r
              );
            },
            getBagsByFriendlyName: function (e, t) {
              return p(d.safeContents, "friendlyName", e, t);
            },
            getBagsByLocalKeyId: function (e, t) {
              return p(d.safeContents, "localKeyId", e, t);
            }
          };
        if (3 !== l.version.charCodeAt(0))
          throw (((u = new Error("PKCS#12 PFX of version other than 3 not supported.")).version = l.version.charCodeAt(0)), u);
        if (i.derToOid(l.contentType) !== n.oids.data)
          throw (((u = new Error("Only PKCS#12 PFX in password integrity mode supported.")).oid = i.derToOid(l.contentType)), u);
        var y = l.content.value[0];
        if (y.tagClass !== i.Class.UNIVERSAL || y.type !== i.Type.OCTETSTRING)
          throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");
        if (((y = h(y)), l.mac)) {
          var E = null,
            m = 0,
            v = i.derToOid(l.macAlgorithm);
          switch (v) {
            case n.oids.sha1:
              (E = s.md.sha1.create()), (m = 20);
              break;
            case n.oids.sha256:
              (E = s.md.sha256.create()), (m = 32);
              break;
            case n.oids.sha384:
              (E = s.md.sha384.create()), (m = 48);
              break;
            case n.oids.sha512:
              (E = s.md.sha512.create()), (m = 64);
              break;
            case n.oids.md5:
              (E = s.md.md5.create()), (m = 16);
          }
          if (null === E) throw new Error("PKCS#12 uses unsupported MAC algorithm: " + v);
          var T = new s.util.ByteBuffer(l.macSalt),
            C = "macIterations" in l ? parseInt(s.util.bytesToHex(l.macIterations), 16) : 1,
            S = a.generateKey(r, T, 3, C, m, E),
            A = s.hmac.create();
          if ((A.start(E, S), A.update(y.value), A.getMac().getBytes() !== l.macDigest))
            throw new Error("PKCS#12 MAC could not be verified. Invalid password?");
        }
        return (
          (function (e, t, r, s) {
            if ((t = i.fromDer(t, r)).tagClass !== i.Class.UNIVERSAL || t.type !== i.Type.SEQUENCE || !0 !== t.constructed)
              throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");
            for (var a = 0; a < t.value.length; a++) {
              var c = t.value[a],
                l = {},
                u = [];
              if (!i.validate(c, o, l, u)) throw (((E = new Error("Cannot read ContentInfo.")).errors = u), E);
              var d = { encrypted: !1 },
                p = null,
                y = l.content.value[0];
              switch (i.derToOid(l.contentType)) {
                case n.oids.data:
                  if (y.tagClass !== i.Class.UNIVERSAL || y.type !== i.Type.OCTETSTRING)
                    throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
                  p = h(y).value;
                  break;
                case n.oids.encryptedData:
                  (p = f(y, s)), (d.encrypted = !0);
                  break;
                default:
                  var E;
                  throw (((E = new Error("Unsupported PKCS#12 contentType.")).contentType = i.derToOid(l.contentType)), E);
              }
              (d.safeBags = g(p, r, s)), e.safeContents.push(d);
            }
          })(d, y.value, t, r),
          d
        );
      }),
        (a.toPkcs12Asn1 = function (e, t, r, o) {
          ((o = o || {}).saltSize = o.saltSize || 8),
            (o.count = o.count || 2048),
            (o.algorithm = o.algorithm || o.encAlgorithm || "aes128"),
            "useMac" in o || (o.useMac = !0),
            "localKeyId" in o || (o.localKeyId = null),
            "generateLocalKeyId" in o || (o.generateLocalKeyId = !0);
          var c,
            l = o.localKeyId;
          if (null !== l) l = s.util.hexToBytes(l);
          else if (o.generateLocalKeyId)
            if (t) {
              var u = s.util.isArray(t) ? t[0] : t;
              "string" == typeof u && (u = n.certificateFromPem(u)),
                (R = s.md.sha1.create()).update(i.toDer(n.certificateToAsn1(u)).getBytes()),
                (l = R.digest().getBytes());
            } else l = s.random.getBytes(20);
          var d = [];
          null !== l &&
            d.push(
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(n.oids.localKeyId).getBytes()),
                i.create(i.Class.UNIVERSAL, i.Type.SET, !0, [i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, l)])
              ])
            ),
            "friendlyName" in o &&
              d.push(
                i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                  i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(n.oids.friendlyName).getBytes()),
                  i.create(i.Class.UNIVERSAL, i.Type.SET, !0, [i.create(i.Class.UNIVERSAL, i.Type.BMPSTRING, !1, o.friendlyName)])
                ])
              ),
            d.length > 0 && (c = i.create(i.Class.UNIVERSAL, i.Type.SET, !0, d));
          var p = [],
            h = [];
          null !== t && (h = s.util.isArray(t) ? t : [t]);
          for (var f = [], g = 0; g < h.length; ++g) {
            "string" == typeof (t = h[g]) && (t = n.certificateFromPem(t));
            var y = 0 === g ? c : void 0,
              E = n.certificateToAsn1(t),
              m = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(n.oids.certBag).getBytes()),
                i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
                  i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                    i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(n.oids.x509Certificate).getBytes()),
                    i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, i.toDer(E).getBytes())])
                  ])
                ]),
                y
              ]);
            f.push(m);
          }
          if (f.length > 0) {
            var v = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, f),
              T = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(n.oids.data).getBytes()),
                i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, i.toDer(v).getBytes())])
              ]);
            p.push(T);
          }
          var C = null;
          if (null !== e) {
            var S = n.wrapRsaPrivateKey(n.privateKeyToAsn1(e));
            C =
              null === r
                ? i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                    i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(n.oids.keyBag).getBytes()),
                    i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [S]),
                    c
                  ])
                : i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                    i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(n.oids.pkcs8ShroudedKeyBag).getBytes()),
                    i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [n.encryptPrivateKeyInfo(S, r, o)]),
                    c
                  ]);
            var A = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [C]),
              _ = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(n.oids.data).getBytes()),
                i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, i.toDer(A).getBytes())])
              ]);
            p.push(_);
          }
          var I,
            b = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, p);
          if (o.useMac) {
            var R = s.md.sha1.create(),
              O = new s.util.ByteBuffer(s.random.getBytes(o.saltSize)),
              P = o.count,
              M = ((e = a.generateKey(r, O, 3, P, 20)), s.hmac.create());
            M.start(R, e), M.update(i.toDer(b).getBytes());
            var N = M.getMac();
            I = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                  i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(n.oids.sha1).getBytes()),
                  i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, "")
                ]),
                i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, N.getBytes())
              ]),
              i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, O.getBytes()),
              i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, i.integerToDer(P).getBytes())
            ]);
          }
          return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, i.integerToDer(3).getBytes()),
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(n.oids.data).getBytes()),
              i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, i.toDer(b).getBytes())])
            ]),
            I
          ]);
        }),
        (a.generateKey = s.pbe.generatePkcs12Key);
    },
    423023: (e, t, r) => {
      var s = r(883418);
      r(810001), r(563290);
      var i = s.asn1,
        n = (e.exports = s.pkcs7asn1 = s.pkcs7asn1 || {});
      (s.pkcs7 = s.pkcs7 || {}), (s.pkcs7.asn1 = n);
      var a = {
        name: "ContentInfo",
        tagClass: i.Class.UNIVERSAL,
        type: i.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "ContentInfo.ContentType", tagClass: i.Class.UNIVERSAL, type: i.Type.OID, constructed: !1, capture: "contentType" },
          {
            name: "ContentInfo.content",
            tagClass: i.Class.CONTEXT_SPECIFIC,
            type: 0,
            constructed: !0,
            optional: !0,
            captureAsn1: "content"
          }
        ]
      };
      n.contentInfoValidator = a;
      var o = {
        name: "EncryptedContentInfo",
        tagClass: i.Class.UNIVERSAL,
        type: i.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "EncryptedContentInfo.contentType",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.OID,
            constructed: !1,
            capture: "contentType"
          },
          {
            name: "EncryptedContentInfo.contentEncryptionAlgorithm",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
                tagClass: i.Class.UNIVERSAL,
                type: i.Type.OID,
                constructed: !1,
                capture: "encAlgorithm"
              },
              {
                name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
                tagClass: i.Class.UNIVERSAL,
                captureAsn1: "encParameter"
              }
            ]
          },
          {
            name: "EncryptedContentInfo.encryptedContent",
            tagClass: i.Class.CONTEXT_SPECIFIC,
            type: 0,
            capture: "encryptedContent",
            captureAsn1: "encryptedContentAsn1"
          }
        ]
      };
      (n.envelopedDataValidator = {
        name: "EnvelopedData",
        tagClass: i.Class.UNIVERSAL,
        type: i.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "EnvelopedData.Version", tagClass: i.Class.UNIVERSAL, type: i.Type.INTEGER, constructed: !1, capture: "version" },
          {
            name: "EnvelopedData.RecipientInfos",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SET,
            constructed: !0,
            captureAsn1: "recipientInfos"
          }
        ].concat(o)
      }),
        (n.encryptedDataValidator = {
          name: "EncryptedData",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            { name: "EncryptedData.Version", tagClass: i.Class.UNIVERSAL, type: i.Type.INTEGER, constructed: !1, capture: "version" }
          ].concat(o)
        });
      var c = {
        name: "SignerInfo",
        tagClass: i.Class.UNIVERSAL,
        type: i.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "SignerInfo.version", tagClass: i.Class.UNIVERSAL, type: i.Type.INTEGER, constructed: !1 },
          {
            name: "SignerInfo.issuerAndSerialNumber",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "SignerInfo.issuerAndSerialNumber.issuer",
                tagClass: i.Class.UNIVERSAL,
                type: i.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "issuer"
              },
              {
                name: "SignerInfo.issuerAndSerialNumber.serialNumber",
                tagClass: i.Class.UNIVERSAL,
                type: i.Type.INTEGER,
                constructed: !1,
                capture: "serial"
              }
            ]
          },
          {
            name: "SignerInfo.digestAlgorithm",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "SignerInfo.digestAlgorithm.algorithm",
                tagClass: i.Class.UNIVERSAL,
                type: i.Type.OID,
                constructed: !1,
                capture: "digestAlgorithm"
              },
              {
                name: "SignerInfo.digestAlgorithm.parameter",
                tagClass: i.Class.UNIVERSAL,
                constructed: !1,
                captureAsn1: "digestParameter",
                optional: !0
              }
            ]
          },
          {
            name: "SignerInfo.authenticatedAttributes",
            tagClass: i.Class.CONTEXT_SPECIFIC,
            type: 0,
            constructed: !0,
            optional: !0,
            capture: "authenticatedAttributes"
          },
          {
            name: "SignerInfo.digestEncryptionAlgorithm",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SEQUENCE,
            constructed: !0,
            capture: "signatureAlgorithm"
          },
          {
            name: "SignerInfo.encryptedDigest",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.OCTETSTRING,
            constructed: !1,
            capture: "signature"
          },
          {
            name: "SignerInfo.unauthenticatedAttributes",
            tagClass: i.Class.CONTEXT_SPECIFIC,
            type: 1,
            constructed: !0,
            optional: !0,
            capture: "unauthenticatedAttributes"
          }
        ]
      };
      (n.signedDataValidator = {
        name: "SignedData",
        tagClass: i.Class.UNIVERSAL,
        type: i.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "SignedData.Version", tagClass: i.Class.UNIVERSAL, type: i.Type.INTEGER, constructed: !1, capture: "version" },
          {
            name: "SignedData.DigestAlgorithms",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SET,
            constructed: !0,
            captureAsn1: "digestAlgorithms"
          },
          a,
          { name: "SignedData.Certificates", tagClass: i.Class.CONTEXT_SPECIFIC, type: 0, optional: !0, captureAsn1: "certificates" },
          { name: "SignedData.CertificateRevocationLists", tagClass: i.Class.CONTEXT_SPECIFIC, type: 1, optional: !0, captureAsn1: "crls" },
          {
            name: "SignedData.SignerInfos",
            tagClass: i.Class.UNIVERSAL,
            type: i.Type.SET,
            capture: "signerInfos",
            optional: !0,
            value: [c]
          }
        ]
      }),
        (n.recipientInfoValidator = {
          name: "RecipientInfo",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            { name: "RecipientInfo.version", tagClass: i.Class.UNIVERSAL, type: i.Type.INTEGER, constructed: !1, capture: "version" },
            {
              name: "RecipientInfo.issuerAndSerial",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "RecipientInfo.issuerAndSerial.issuer",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "issuer"
                },
                {
                  name: "RecipientInfo.issuerAndSerial.serialNumber",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.INTEGER,
                  constructed: !1,
                  capture: "serial"
                }
              ]
            },
            {
              name: "RecipientInfo.keyEncryptionAlgorithm",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "encAlgorithm"
                },
                {
                  name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
                  tagClass: i.Class.UNIVERSAL,
                  constructed: !1,
                  captureAsn1: "encParameter",
                  optional: !0
                }
              ]
            },
            {
              name: "RecipientInfo.encryptedKey",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.OCTETSTRING,
              constructed: !1,
              capture: "encKey"
            }
          ]
        });
    },
    663969: (e, t, r) => {
      var s = r(883418);
      r(810001), r(843793), r(789007), r(830115), r(42497), r(384834), r(695032), r(209120), r(563290), r(304811);
      var i = s.asn1,
        n = (e.exports = s.pki = s.pki || {});
      (n.pemToDer = function (e) {
        var t = s.pem.decode(e)[0];
        if (t.procType && "ENCRYPTED" === t.procType.type) throw new Error("Could not convert PEM to DER; PEM is encrypted.");
        return s.util.createBuffer(t.body);
      }),
        (n.privateKeyFromPem = function (e) {
          var t = s.pem.decode(e)[0];
          if ("PRIVATE KEY" !== t.type && "RSA PRIVATE KEY" !== t.type) {
            var r = new Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');
            throw ((r.headerType = t.type), r);
          }
          if (t.procType && "ENCRYPTED" === t.procType.type) throw new Error("Could not convert private key from PEM; PEM is encrypted.");
          var a = i.fromDer(t.body);
          return n.privateKeyFromAsn1(a);
        }),
        (n.privateKeyToPem = function (e, t) {
          var r = { type: "RSA PRIVATE KEY", body: i.toDer(n.privateKeyToAsn1(e)).getBytes() };
          return s.pem.encode(r, { maxline: t });
        }),
        (n.privateKeyInfoToPem = function (e, t) {
          var r = { type: "PRIVATE KEY", body: i.toDer(e).getBytes() };
          return s.pem.encode(r, { maxline: t });
        });
    },
    114725: (e, t, r) => {
      var s = r(883418);
      r(563290),
        r(997224),
        r(859018),
        (function () {
          if (s.prime) e.exports = s.prime;
          else {
            var t = (e.exports = s.prime = s.prime || {}),
              r = s.jsbn.BigInteger,
              i = [6, 4, 2, 4, 2, 4, 6, 2],
              n = new r(null);
            n.fromInt(30);
            var a = function (e, t) {
              return e | t;
            };
            t.generateProbablePrime = function (e, t, i) {
              "function" == typeof t && ((i = t), (t = {}));
              var n = (t = t || {}).algorithm || "PRIMEINC";
              "string" == typeof n && (n = { name: n }), (n.options = n.options || {});
              var a = t.prng || s.random,
                c = {
                  nextBytes: function (e) {
                    for (var t = a.getBytesSync(e.length), r = 0; r < e.length; ++r) e[r] = t.charCodeAt(r);
                  }
                };
              if ("PRIMEINC" === n.name)
                return (function (e, t, i, n) {
                  return "workers" in i
                    ? (function (e, t, i, n) {
                        if ("undefined" == typeof Worker) return o(e, t, i, n);
                        var a = l(e, t),
                          c = i.workers,
                          u = i.workLoad || 100,
                          d = (30 * u) / 8,
                          p = i.workerScript || "forge/prime.worker.js";
                        if (-1 === c)
                          return s.util.estimateCores(function (e, t) {
                            e && (t = 2), (c = t - 1), h();
                          });
                        function h() {
                          c = Math.max(1, c);
                          for (var s = [], i = 0; i < c; ++i) s[i] = new Worker(p);
                          for (i = 0; i < c; ++i) s[i].addEventListener("message", h);
                          var o = !1;
                          function h(i) {
                            if (!o) {
                              var c = i.data;
                              if (c.found) {
                                for (var p = 0; p < s.length; ++p) s[p].terminate();
                                return (o = !0), n(null, new r(c.prime, 16));
                              }
                              a.bitLength() > e && (a = l(e, t));
                              var h = a.toString(16);
                              i.target.postMessage({ hex: h, workLoad: u }), a.dAddOffset(d, 0);
                            }
                          }
                        }
                        h();
                      })(e, t, i, n)
                    : o(e, t, i, n);
                })(e, c, n.options, i);
              throw new Error("Invalid prime generation algorithm: " + n.name);
            };
          }
          function o(e, t, r, s) {
            var i = l(e, t),
              n = (function (e) {
                return e <= 100
                  ? 27
                  : e <= 150
                  ? 18
                  : e <= 200
                  ? 15
                  : e <= 250
                  ? 12
                  : e <= 300
                  ? 9
                  : e <= 350
                  ? 8
                  : e <= 400
                  ? 7
                  : e <= 500
                  ? 6
                  : e <= 600
                  ? 5
                  : e <= 800
                  ? 4
                  : e <= 1250
                  ? 3
                  : 2;
              })(i.bitLength());
            "millerRabinTests" in r && (n = r.millerRabinTests);
            var a = 10;
            "maxBlockTime" in r && (a = r.maxBlockTime), c(i, e, t, 0, n, a, s);
          }
          function c(e, t, r, n, a, o, u) {
            var d = +new Date();
            do {
              if ((e.bitLength() > t && (e = l(t, r)), e.isProbablePrime(a))) return u(null, e);
              e.dAddOffset(i[n++ % 8], 0);
            } while (o < 0 || +new Date() - d < o);
            s.util.setImmediate(function () {
              c(e, t, r, n, a, o, u);
            });
          }
          function l(e, t) {
            var s = new r(e, t),
              i = e - 1;
            return s.testBit(i) || s.bitwiseTo(r.ONE.shiftLeft(i), a, s), s.dAddOffset(31 - s.mod(n).byteValue(), 0), s;
          }
        })();
    },
    64286: (e, t, r) => {
      var s = r(173656),
        i = r(883418);
      r(563290);
      var n = null;
      !i.util.isNodejs || i.options.usePureJavaScript || s.versions["node-webkit"] || (n = r(963619)),
        ((e.exports = i.prng = i.prng || {}).create = function (e) {
          for (
            var t = { plugin: e, key: null, seed: null, time: null, reseeds: 0, generated: 0, keyBytes: "" },
              r = e.md,
              s = new Array(32),
              a = 0;
            a < 32;
            ++a
          )
            s[a] = r.create();
          function o() {
            if (t.pools[0].messageLength >= 32) return c();
            var e = (32 - t.pools[0].messageLength) << 5;
            t.collect(t.seedFileSync(e)), c();
          }
          function c() {
            t.reseeds = 4294967295 === t.reseeds ? 0 : t.reseeds + 1;
            var e = t.plugin.md.create();
            e.update(t.keyBytes);
            for (var r = 1, s = 0; s < 32; ++s)
              t.reseeds % r == 0 && (e.update(t.pools[s].digest().getBytes()), t.pools[s].start()), (r <<= 1);
            (t.keyBytes = e.digest().getBytes()), e.start(), e.update(t.keyBytes);
            var i = e.digest().getBytes();
            (t.key = t.plugin.formatKey(t.keyBytes)), (t.seed = t.plugin.formatSeed(i)), (t.generated = 0);
          }
          function l(e) {
            var t = null,
              r = i.util.globalScope,
              s = r.crypto || r.msCrypto;
            s &&
              s.getRandomValues &&
              (t = function (e) {
                return s.getRandomValues(e);
              });
            var n = i.util.createBuffer();
            if (t)
              for (; n.length() < e; ) {
                var a = Math.max(1, Math.min(e - n.length(), 65536) / 4),
                  o = new Uint32Array(Math.floor(a));
                try {
                  t(o);
                  for (var c = 0; c < o.length; ++c) n.putInt32(o[c]);
                } catch (e) {
                  if (!("undefined" != typeof QuotaExceededError && e instanceof QuotaExceededError)) throw e;
                }
              }
            if (n.length() < e)
              for (var l, u, d, p = Math.floor(65536 * Math.random()); n.length() < e; )
                for (
                  u = 16807 * (65535 & p),
                    u += (32767 & (l = 16807 * (p >> 16))) << 16,
                    p = 4294967295 & (u = (2147483647 & (u += l >> 15)) + (u >> 31)),
                    c = 0;
                  c < 3;
                  ++c
                )
                  (d = p >>> (c << 3)), (d ^= Math.floor(256 * Math.random())), n.putByte(255 & d);
            return n.getBytes(e);
          }
          return (
            (t.pools = s),
            (t.pool = 0),
            (t.generate = function (e, r) {
              if (!r) return t.generateSync(e);
              var s = t.plugin.cipher,
                n = t.plugin.increment,
                a = t.plugin.formatKey,
                o = t.plugin.formatSeed,
                l = i.util.createBuffer();
              (t.key = null),
                (function u(d) {
                  if (d) return r(d);
                  if (l.length() >= e) return r(null, l.getBytes(e));
                  if ((t.generated > 1048575 && (t.key = null), null === t.key))
                    return i.util.nextTick(function () {
                      !(function (e) {
                        if (t.pools[0].messageLength >= 32) return c(), e();
                        var r = (32 - t.pools[0].messageLength) << 5;
                        t.seedFile(r, function (r, s) {
                          if (r) return e(r);
                          t.collect(s), c(), e();
                        });
                      })(u);
                    });
                  var p = s(t.key, t.seed);
                  (t.generated += p.length),
                    l.putBytes(p),
                    (t.key = a(s(t.key, n(t.seed)))),
                    (t.seed = o(s(t.key, t.seed))),
                    i.util.setImmediate(u);
                })();
            }),
            (t.generateSync = function (e) {
              var r = t.plugin.cipher,
                s = t.plugin.increment,
                n = t.plugin.formatKey,
                a = t.plugin.formatSeed;
              t.key = null;
              for (var c = i.util.createBuffer(); c.length() < e; ) {
                t.generated > 1048575 && (t.key = null), null === t.key && o();
                var l = r(t.key, t.seed);
                (t.generated += l.length), c.putBytes(l), (t.key = n(r(t.key, s(t.seed)))), (t.seed = a(r(t.key, t.seed)));
              }
              return c.getBytes(e);
            }),
            n
              ? ((t.seedFile = function (e, t) {
                  n.randomBytes(e, function (e, r) {
                    if (e) return t(e);
                    t(null, r.toString());
                  });
                }),
                (t.seedFileSync = function (e) {
                  return n.randomBytes(e).toString();
                }))
              : ((t.seedFile = function (e, t) {
                  try {
                    t(null, l(e));
                  } catch (e) {
                    t(e);
                  }
                }),
                (t.seedFileSync = l)),
            (t.collect = function (e) {
              for (var r = e.length, s = 0; s < r; ++s) t.pools[t.pool].update(e.substr(s, 1)), (t.pool = 31 === t.pool ? 0 : t.pool + 1);
            }),
            (t.collectInt = function (e, r) {
              for (var s = "", i = 0; i < r; i += 8) s += String.fromCharCode((e >> i) & 255);
              t.collect(s);
            }),
            (t.registerWorker = function (e) {
              e === self
                ? (t.seedFile = function (e, t) {
                    self.addEventListener("message", function e(r) {
                      var s = r.data;
                      s.forge && s.forge.prng && (self.removeEventListener("message", e), t(s.forge.prng.err, s.forge.prng.bytes));
                    }),
                      self.postMessage({ forge: { prng: { needed: e } } });
                  })
                : e.addEventListener("message", function (r) {
                    var s = r.data;
                    s.forge &&
                      s.forge.prng &&
                      t.seedFile(s.forge.prng.needed, function (t, r) {
                        e.postMessage({ forge: { prng: { err: t, bytes: r } } });
                      });
                  });
            }),
            t
          );
        });
    },
    695032: (e, t, r) => {
      var s = r(883418);
      r(859018),
        r(563290),
        ((e.exports = s.pss = s.pss || {}).create = function (e) {
          3 === arguments.length && (e = { md: arguments[0], mgf: arguments[1], saltLength: arguments[2] });
          var t,
            r = e.md,
            i = e.mgf,
            n = r.digestLength,
            a = e.salt || null;
          if (("string" == typeof a && (a = s.util.createBuffer(a)), "saltLength" in e)) t = e.saltLength;
          else {
            if (null === a) throw new Error("Salt length not specified or specific salt not given.");
            t = a.length();
          }
          if (null !== a && a.length() !== t) throw new Error("Given salt length does not match length of given salt.");
          var o = e.prng || s.random,
            c = {
              encode: function (e, c) {
                var l,
                  u,
                  d = c - 1,
                  p = Math.ceil(d / 8),
                  h = e.digest().getBytes();
                if (p < n + t + 2) throw new Error("Message is too long to encrypt.");
                u = null === a ? o.getBytesSync(t) : a.bytes();
                var f = new s.util.ByteBuffer();
                f.fillWithByte(0, 8), f.putBytes(h), f.putBytes(u), r.start(), r.update(f.getBytes());
                var g = r.digest().getBytes(),
                  y = new s.util.ByteBuffer();
                y.fillWithByte(0, p - t - n - 2), y.putByte(1), y.putBytes(u);
                var E = y.getBytes(),
                  m = p - n - 1,
                  v = i.generate(g, m),
                  T = "";
                for (l = 0; l < m; l++) T += String.fromCharCode(E.charCodeAt(l) ^ v.charCodeAt(l));
                var C = (65280 >> (8 * p - d)) & 255;
                return (T = String.fromCharCode(T.charCodeAt(0) & ~C) + T.substr(1)) + g + String.fromCharCode(188);
              },
              verify: function (e, a, o) {
                var c,
                  l = o - 1,
                  u = Math.ceil(l / 8);
                if (((a = a.substr(-u)), u < n + t + 2)) throw new Error("Inconsistent parameters to PSS signature verification.");
                if (188 !== a.charCodeAt(u - 1)) throw new Error("Encoded message does not end in 0xBC.");
                var d = u - n - 1,
                  p = a.substr(0, d),
                  h = a.substr(d, n),
                  f = (65280 >> (8 * u - l)) & 255;
                if (0 != (p.charCodeAt(0) & f)) throw new Error("Bits beyond keysize not zero as expected.");
                var g = i.generate(h, d),
                  y = "";
                for (c = 0; c < d; c++) y += String.fromCharCode(p.charCodeAt(c) ^ g.charCodeAt(c));
                y = String.fromCharCode(y.charCodeAt(0) & ~f) + y.substr(1);
                var E = u - n - t - 2;
                for (c = 0; c < E; c++) if (0 !== y.charCodeAt(c)) throw new Error("Leftmost octets not zero as expected");
                if (1 !== y.charCodeAt(E)) throw new Error("Inconsistent PSS signature, 0x01 marker not found");
                var m = y.substr(-t),
                  v = new s.util.ByteBuffer();
                return v.fillWithByte(0, 8), v.putBytes(e), v.putBytes(m), r.start(), r.update(v.getBytes()), h === r.digest().getBytes();
              }
            };
          return c;
        });
    },
    859018: (e, t, r) => {
      var s = r(883418);
      r(443882),
        r(851792),
        r(64286),
        r(563290),
        s.random && s.random.getBytes
          ? (e.exports = s.random)
          : (function (t) {
              var r = {},
                i = new Array(4),
                n = s.util.createBuffer();
              function a() {
                var e = s.prng.create(r);
                return (
                  (e.getBytes = function (t, r) {
                    return e.generate(t, r);
                  }),
                  (e.getBytesSync = function (t) {
                    return e.generate(t);
                  }),
                  e
                );
              }
              (r.formatKey = function (e) {
                var t = s.util.createBuffer(e);
                return (
                  ((e = new Array(4))[0] = t.getInt32()),
                  (e[1] = t.getInt32()),
                  (e[2] = t.getInt32()),
                  (e[3] = t.getInt32()),
                  s.aes._expandKey(e, !1)
                );
              }),
                (r.formatSeed = function (e) {
                  var t = s.util.createBuffer(e);
                  return ((e = new Array(4))[0] = t.getInt32()), (e[1] = t.getInt32()), (e[2] = t.getInt32()), (e[3] = t.getInt32()), e;
                }),
                (r.cipher = function (e, t) {
                  return (
                    s.aes._updateBlock(e, t, i, !1), n.putInt32(i[0]), n.putInt32(i[1]), n.putInt32(i[2]), n.putInt32(i[3]), n.getBytes()
                  );
                }),
                (r.increment = function (e) {
                  return ++e[3], e;
                }),
                (r.md = s.md.sha256);
              var o = a(),
                c = null,
                l = s.util.globalScope,
                u = l.crypto || l.msCrypto;
              if (
                (u &&
                  u.getRandomValues &&
                  (c = function (e) {
                    return u.getRandomValues(e);
                  }),
                s.options.usePureJavaScript || (!s.util.isNodejs && !c))
              ) {
                if (("undefined" == typeof window || window.document, o.collectInt(+new Date(), 32), "undefined" != typeof navigator)) {
                  var d = "";
                  for (var p in navigator)
                    try {
                      "string" == typeof navigator[p] && (d += navigator[p]);
                    } catch (e) {}
                  o.collect(d), (d = null);
                }
                t &&
                  (t().mousemove(function (e) {
                    o.collectInt(e.clientX, 16), o.collectInt(e.clientY, 16);
                  }),
                  t().keypress(function (e) {
                    o.collectInt(e.charCode, 8);
                  }));
              }
              if (s.random) for (var p in o) s.random[p] = o[p];
              else s.random = o;
              (s.random.createInstance = a), (e.exports = s.random);
            })("undefined" != typeof jQuery ? jQuery : null);
    },
    714528: (e, t, r) => {
      var s = r(883418);
      r(563290);
      var i = [
          217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100,
          136, 68, 139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123,
          11, 240, 149, 33, 34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241, 220, 18, 117, 202,
          31, 59, 190, 228, 209, 66, 61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3,
          248, 17, 199, 246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238, 247, 132, 170, 114, 172,
          53, 77, 106, 42, 150, 26, 210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81, 203, 204, 36,
          145, 175, 80, 161, 244, 112, 57, 153, 124, 58, 133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227,
          138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207, 225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56,
          52, 27, 171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219, 71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127,
          193, 173
        ],
        n = [1, 2, 3, 5],
        a = function (e, t) {
          return ((e << t) & 65535) | ((65535 & e) >> (16 - t));
        },
        o = function (e, t) {
          return ((65535 & e) >> t) | ((e << (16 - t)) & 65535);
        };
      (e.exports = s.rc2 = s.rc2 || {}),
        (s.rc2.expandKey = function (e, t) {
          "string" == typeof e && (e = s.util.createBuffer(e)), (t = t || 128);
          var r,
            n = e,
            a = e.length(),
            o = t,
            c = Math.ceil(o / 8),
            l = 255 >> (7 & o);
          for (r = a; r < 128; r++) n.putByte(i[(n.at(r - 1) + n.at(r - a)) & 255]);
          for (n.setAt(128 - c, i[n.at(128 - c) & l]), r = 127 - c; r >= 0; r--) n.setAt(r, i[n.at(r + 1) ^ n.at(r + c)]);
          return n;
        });
      var c = function (e, t, r) {
        var i,
          c,
          l,
          u,
          d = !1,
          p = null,
          h = null,
          f = null,
          g = [];
        for (e = s.rc2.expandKey(e, t), l = 0; l < 64; l++) g.push(e.getInt16Le());
        r
          ? ((i = function (e) {
              for (l = 0; l < 4; l++)
                (e[l] += g[u] + (e[(l + 3) % 4] & e[(l + 2) % 4]) + (~e[(l + 3) % 4] & e[(l + 1) % 4])), (e[l] = a(e[l], n[l])), u++;
            }),
            (c = function (e) {
              for (l = 0; l < 4; l++) e[l] += g[63 & e[(l + 3) % 4]];
            }))
          : ((i = function (e) {
              for (l = 3; l >= 0; l--)
                (e[l] = o(e[l], n[l])), (e[l] -= g[u] + (e[(l + 3) % 4] & e[(l + 2) % 4]) + (~e[(l + 3) % 4] & e[(l + 1) % 4])), u--;
            }),
            (c = function (e) {
              for (l = 3; l >= 0; l--) e[l] -= g[63 & e[(l + 3) % 4]];
            }));
        var y = function (e) {
            var t = [];
            for (l = 0; l < 4; l++) {
              var s = p.getInt16Le();
              null !== f && (r ? (s ^= f.getInt16Le()) : f.putInt16Le(s)), t.push(65535 & s);
            }
            u = r ? 0 : 63;
            for (var i = 0; i < e.length; i++) for (var n = 0; n < e[i][0]; n++) e[i][1](t);
            for (l = 0; l < 4; l++) null !== f && (r ? f.putInt16Le(t[l]) : (t[l] ^= f.getInt16Le())), h.putInt16Le(t[l]);
          },
          E = null;
        return (E = {
          start: function (e, t) {
            e && "string" == typeof e && (e = s.util.createBuffer(e)),
              (d = !1),
              (p = s.util.createBuffer()),
              (h = t || new s.util.createBuffer()),
              (f = e),
              (E.output = h);
          },
          update: function (e) {
            for (d || p.putBuffer(e); p.length() >= 8; )
              y([
                [5, i],
                [1, c],
                [6, i],
                [1, c],
                [5, i]
              ]);
          },
          finish: function (e) {
            var t = !0;
            if (r)
              if (e) t = e(8, p, !r);
              else {
                var s = 8 === p.length() ? 8 : 8 - p.length();
                p.fillWithByte(s, s);
              }
            if ((t && ((d = !0), E.update()), !r && (t = 0 === p.length())))
              if (e) t = e(8, h, !r);
              else {
                var i = h.length(),
                  n = h.at(i - 1);
                n > i ? (t = !1) : h.truncate(n);
              }
            return t;
          }
        });
      };
      (s.rc2.startEncrypting = function (e, t, r) {
        var i = s.rc2.createEncryptionCipher(e, 128);
        return i.start(t, r), i;
      }),
        (s.rc2.createEncryptionCipher = function (e, t) {
          return c(e, t, !0);
        }),
        (s.rc2.startDecrypting = function (e, t, r) {
          var i = s.rc2.createDecryptionCipher(e, 128);
          return i.start(t, r), i;
        }),
        (s.rc2.createDecryptionCipher = function (e, t) {
          return c(e, t, !1);
        });
    },
    209120: (e, t, r) => {
      var s = r(883418);
      if ((r(810001), r(997224), r(843793), r(807993), r(114725), r(859018), r(563290), void 0 === i)) var i = s.jsbn.BigInteger;
      var n = s.util.isNodejs ? r(963619) : null,
        a = s.asn1,
        o = s.util;
      (s.pki = s.pki || {}), (e.exports = s.pki.rsa = s.rsa = s.rsa || {});
      var c = s.pki,
        l = [6, 4, 2, 4, 2, 4, 6, 2],
        u = {
          name: "PrivateKeyInfo",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "PrivateKeyInfo.version",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyVersion"
            },
            {
              name: "PrivateKeyInfo.privateKeyAlgorithm",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "AlgorithmIdentifier.algorithm",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.OID,
                  constructed: !1,
                  capture: "privateKeyOid"
                }
              ]
            },
            { name: "PrivateKeyInfo", tagClass: a.Class.UNIVERSAL, type: a.Type.OCTETSTRING, constructed: !1, capture: "privateKey" }
          ]
        },
        d = {
          name: "RSAPrivateKey",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "RSAPrivateKey.version",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyVersion"
            },
            {
              name: "RSAPrivateKey.modulus",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyModulus"
            },
            {
              name: "RSAPrivateKey.publicExponent",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPublicExponent"
            },
            {
              name: "RSAPrivateKey.privateExponent",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPrivateExponent"
            },
            {
              name: "RSAPrivateKey.prime1",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPrime1"
            },
            {
              name: "RSAPrivateKey.prime2",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPrime2"
            },
            {
              name: "RSAPrivateKey.exponent1",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyExponent1"
            },
            {
              name: "RSAPrivateKey.exponent2",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyExponent2"
            },
            {
              name: "RSAPrivateKey.coefficient",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyCoefficient"
            }
          ]
        },
        p = {
          name: "RSAPublicKey",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "RSAPublicKey.modulus",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "publicKeyModulus"
            },
            {
              name: "RSAPublicKey.exponent",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "publicKeyExponent"
            }
          ]
        },
        h = (s.pki.rsa.publicKeyValidator = {
          name: "SubjectPublicKeyInfo",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "subjectPublicKeyInfo",
          value: [
            {
              name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "AlgorithmIdentifier.algorithm",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.OID,
                  constructed: !1,
                  capture: "publicKeyOid"
                }
              ]
            },
            {
              name: "SubjectPublicKeyInfo.subjectPublicKey",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.BITSTRING,
              constructed: !1,
              value: [
                {
                  name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.SEQUENCE,
                  constructed: !0,
                  optional: !0,
                  captureAsn1: "rsaPublicKey"
                }
              ]
            }
          ]
        }),
        f = {
          name: "DigestInfo",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "DigestInfo.DigestAlgorithm",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.OID,
                  constructed: !1,
                  capture: "algorithmIdentifier"
                },
                {
                  name: "DigestInfo.DigestAlgorithm.parameters",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.NULL,
                  capture: "parameters",
                  optional: !0,
                  constructed: !1
                }
              ]
            },
            { name: "DigestInfo.digest", tagClass: a.Class.UNIVERSAL, type: a.Type.OCTETSTRING, constructed: !1, capture: "digest" }
          ]
        },
        g = function (e) {
          var t;
          if (!(e.algorithm in c.oids)) {
            var r = new Error("Unknown message digest algorithm.");
            throw ((r.algorithm = e.algorithm), r);
          }
          t = c.oids[e.algorithm];
          var s = a.oidToDer(t).getBytes(),
            i = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, []),
            n = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, []);
          n.value.push(a.create(a.Class.UNIVERSAL, a.Type.OID, !1, s)), n.value.push(a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, ""));
          var o = a.create(a.Class.UNIVERSAL, a.Type.OCTETSTRING, !1, e.digest().getBytes());
          return i.value.push(n), i.value.push(o), a.toDer(i).getBytes();
        },
        y = function (e, t, r) {
          if (r) return e.modPow(t.e, t.n);
          if (!t.p || !t.q) return e.modPow(t.d, t.n);
          var n;
          t.dP || (t.dP = t.d.mod(t.p.subtract(i.ONE))),
            t.dQ || (t.dQ = t.d.mod(t.q.subtract(i.ONE))),
            t.qInv || (t.qInv = t.q.modInverse(t.p));
          do {
            n = new i(s.util.bytesToHex(s.random.getBytes(t.n.bitLength() / 8)), 16);
          } while (n.compareTo(t.n) >= 0 || !n.gcd(t.n).equals(i.ONE));
          for (
            var a = (e = e.multiply(n.modPow(t.e, t.n)).mod(t.n)).mod(t.p).modPow(t.dP, t.p), o = e.mod(t.q).modPow(t.dQ, t.q);
            a.compareTo(o) < 0;

          )
            a = a.add(t.p);
          var c = a.subtract(o).multiply(t.qInv).mod(t.p).multiply(t.q).add(o);
          return c.multiply(n.modInverse(t.n)).mod(t.n);
        };
      function E(e, t, r) {
        var i = s.util.createBuffer(),
          n = Math.ceil(t.n.bitLength() / 8);
        if (e.length > n - 11) {
          var a = new Error("Message is too long for PKCS#1 v1.5 padding.");
          throw ((a.length = e.length), (a.max = n - 11), a);
        }
        i.putByte(0), i.putByte(r);
        var o,
          c = n - 3 - e.length;
        if (0 === r || 1 === r) {
          o = 0 === r ? 0 : 255;
          for (var l = 0; l < c; ++l) i.putByte(o);
        } else
          for (; c > 0; ) {
            var u = 0,
              d = s.random.getBytes(c);
            for (l = 0; l < c; ++l) 0 === (o = d.charCodeAt(l)) ? ++u : i.putByte(o);
            c = u;
          }
        return i.putByte(0), i.putBytes(e), i;
      }
      function m(e, t, r, i) {
        var n = Math.ceil(t.n.bitLength() / 8),
          a = s.util.createBuffer(e),
          o = a.getByte(),
          c = a.getByte();
        if (0 !== o || (r && 0 !== c && 1 !== c) || (!r && 2 != c) || (r && 0 === c && void 0 === i))
          throw new Error("Encryption block is invalid.");
        var l = 0;
        if (0 === c) {
          l = n - 3 - i;
          for (var u = 0; u < l; ++u) if (0 !== a.getByte()) throw new Error("Encryption block is invalid.");
        } else if (1 === c)
          for (l = 0; a.length() > 1; ) {
            if (255 !== a.getByte()) {
              --a.read;
              break;
            }
            ++l;
          }
        else if (2 === c)
          for (l = 0; a.length() > 1; ) {
            if (0 === a.getByte()) {
              --a.read;
              break;
            }
            ++l;
          }
        if (0 !== a.getByte() || l !== n - 3 - a.length()) throw new Error("Encryption block is invalid.");
        return a.getBytes();
      }
      function v(e) {
        var t = e.toString(16);
        t[0] >= "8" && (t = "00" + t);
        var r = s.util.hexToBytes(t);
        return r.length > 1 &&
          ((0 === r.charCodeAt(0) && 0 == (128 & r.charCodeAt(1))) || (255 === r.charCodeAt(0) && 128 == (128 & r.charCodeAt(1))))
          ? r.substr(1)
          : r;
      }
      function T(e) {
        return e <= 100
          ? 27
          : e <= 150
          ? 18
          : e <= 200
          ? 15
          : e <= 250
          ? 12
          : e <= 300
          ? 9
          : e <= 350
          ? 8
          : e <= 400
          ? 7
          : e <= 500
          ? 6
          : e <= 600
          ? 5
          : e <= 800
          ? 4
          : e <= 1250
          ? 3
          : 2;
      }
      function C(e) {
        return s.util.isNodejs && "function" == typeof n[e];
      }
      function S(e) {
        return (
          void 0 !== o.globalScope &&
          "object" == typeof o.globalScope.crypto &&
          "object" == typeof o.globalScope.crypto.subtle &&
          "function" == typeof o.globalScope.crypto.subtle[e]
        );
      }
      function A(e) {
        return (
          void 0 !== o.globalScope &&
          "object" == typeof o.globalScope.msCrypto &&
          "object" == typeof o.globalScope.msCrypto.subtle &&
          "function" == typeof o.globalScope.msCrypto.subtle[e]
        );
      }
      function _(e) {
        for (var t = s.util.hexToBytes(e.toString(16)), r = new Uint8Array(t.length), i = 0; i < t.length; ++i) r[i] = t.charCodeAt(i);
        return r;
      }
      (c.rsa.encrypt = function (e, t, r) {
        var n,
          a = r,
          o = Math.ceil(t.n.bitLength() / 8);
        !1 !== r && !0 !== r ? ((a = 2 === r), (n = E(e, t, r))) : (n = s.util.createBuffer()).putBytes(e);
        for (var c = new i(n.toHex(), 16), l = y(c, t, a).toString(16), u = s.util.createBuffer(), d = o - Math.ceil(l.length / 2); d > 0; )
          u.putByte(0), --d;
        return u.putBytes(s.util.hexToBytes(l)), u.getBytes();
      }),
        (c.rsa.decrypt = function (e, t, r, n) {
          var a = Math.ceil(t.n.bitLength() / 8);
          if (e.length !== a) {
            var o = new Error("Encrypted message length is invalid.");
            throw ((o.length = e.length), (o.expected = a), o);
          }
          var c = new i(s.util.createBuffer(e).toHex(), 16);
          if (c.compareTo(t.n) >= 0) throw new Error("Encrypted message is invalid.");
          for (var l = y(c, t, r).toString(16), u = s.util.createBuffer(), d = a - Math.ceil(l.length / 2); d > 0; ) u.putByte(0), --d;
          return u.putBytes(s.util.hexToBytes(l)), !1 !== n ? m(u.getBytes(), t, r) : u.getBytes();
        }),
        (c.rsa.createKeyPairGenerationState = function (e, t, r) {
          "string" == typeof e && (e = parseInt(e, 10)), (e = e || 2048);
          var n,
            a = (r = r || {}).prng || s.random,
            o = {
              nextBytes: function (e) {
                for (var t = a.getBytesSync(e.length), r = 0; r < e.length; ++r) e[r] = t.charCodeAt(r);
              }
            },
            c = r.algorithm || "PRIMEINC";
          if ("PRIMEINC" !== c) throw new Error("Invalid key generation algorithm: " + c);
          return (
            (n = {
              algorithm: c,
              state: 0,
              bits: e,
              rng: o,
              eInt: t || 65537,
              e: new i(null),
              p: null,
              q: null,
              qBits: e >> 1,
              pBits: e - (e >> 1),
              pqState: 0,
              num: null,
              keys: null
            }).e.fromInt(n.eInt),
            n
          );
        }),
        (c.rsa.stepKeyPairGenerationState = function (e, t) {
          "algorithm" in e || (e.algorithm = "PRIMEINC");
          var r = new i(null);
          r.fromInt(30);
          for (
            var s,
              n = 0,
              a = function (e, t) {
                return e | t;
              },
              o = +new Date(),
              u = 0;
            null === e.keys && (t <= 0 || u < t);

          ) {
            if (0 === e.state) {
              var d = null === e.p ? e.pBits : e.qBits,
                p = d - 1;
              0 === e.pqState
                ? ((e.num = new i(d, e.rng)),
                  e.num.testBit(p) || e.num.bitwiseTo(i.ONE.shiftLeft(p), a, e.num),
                  e.num.dAddOffset(31 - e.num.mod(r).byteValue(), 0),
                  (n = 0),
                  ++e.pqState)
                : 1 === e.pqState
                ? e.num.bitLength() > d
                  ? (e.pqState = 0)
                  : e.num.isProbablePrime(T(e.num.bitLength()))
                  ? ++e.pqState
                  : e.num.dAddOffset(l[n++ % 8], 0)
                : 2 === e.pqState
                ? (e.pqState = 0 === e.num.subtract(i.ONE).gcd(e.e).compareTo(i.ONE) ? 3 : 0)
                : 3 === e.pqState &&
                  ((e.pqState = 0),
                  null === e.p ? (e.p = e.num) : (e.q = e.num),
                  null !== e.p && null !== e.q && ++e.state,
                  (e.num = null));
            } else if (1 === e.state) e.p.compareTo(e.q) < 0 && ((e.num = e.p), (e.p = e.q), (e.q = e.num)), ++e.state;
            else if (2 === e.state) (e.p1 = e.p.subtract(i.ONE)), (e.q1 = e.q.subtract(i.ONE)), (e.phi = e.p1.multiply(e.q1)), ++e.state;
            else if (3 === e.state) 0 === e.phi.gcd(e.e).compareTo(i.ONE) ? ++e.state : ((e.p = null), (e.q = null), (e.state = 0));
            else if (4 === e.state) (e.n = e.p.multiply(e.q)), e.n.bitLength() === e.bits ? ++e.state : ((e.q = null), (e.state = 0));
            else if (5 === e.state) {
              var h = e.e.modInverse(e.phi);
              e.keys = {
                privateKey: c.rsa.setPrivateKey(e.n, e.e, h, e.p, e.q, h.mod(e.p1), h.mod(e.q1), e.q.modInverse(e.p)),
                publicKey: c.rsa.setPublicKey(e.n, e.e)
              };
            }
            (u += (s = +new Date()) - o), (o = s);
          }
          return null !== e.keys;
        }),
        (c.rsa.generateKeyPair = function (e, t, r, l) {
          if (
            (1 === arguments.length
              ? "object" == typeof e
                ? ((r = e), (e = void 0))
                : "function" == typeof e && ((l = e), (e = void 0))
              : 2 === arguments.length
              ? "number" == typeof e
                ? "function" == typeof t
                  ? ((l = t), (t = void 0))
                  : "number" != typeof t && ((r = t), (t = void 0))
                : ((r = e), (l = t), (e = void 0), (t = void 0))
              : 3 === arguments.length &&
                ("number" == typeof t ? "function" == typeof r && ((l = r), (r = void 0)) : ((l = r), (r = t), (t = void 0))),
            (r = r || {}),
            void 0 === e && (e = r.bits || 2048),
            void 0 === t && (t = r.e || 65537),
            !s.options.usePureJavaScript && !r.prng && e >= 256 && e <= 16384 && (65537 === t || 3 === t))
          )
            if (l) {
              if (C("generateKeyPair"))
                return n.generateKeyPair(
                  "rsa",
                  {
                    modulusLength: e,
                    publicExponent: t,
                    publicKeyEncoding: { type: "spki", format: "pem" },
                    privateKeyEncoding: { type: "pkcs8", format: "pem" }
                  },
                  function (e, t, r) {
                    if (e) return l(e);
                    l(null, { privateKey: c.privateKeyFromPem(r), publicKey: c.publicKeyFromPem(t) });
                  }
                );
              if (S("generateKey") && S("exportKey"))
                return o.globalScope.crypto.subtle
                  .generateKey({ name: "RSASSA-PKCS1-v1_5", modulusLength: e, publicExponent: _(t), hash: { name: "SHA-256" } }, !0, [
                    "sign",
                    "verify"
                  ])
                  .then(function (e) {
                    return o.globalScope.crypto.subtle.exportKey("pkcs8", e.privateKey);
                  })
                  .then(void 0, function (e) {
                    l(e);
                  })
                  .then(function (e) {
                    if (e) {
                      var t = c.privateKeyFromAsn1(a.fromDer(s.util.createBuffer(e)));
                      l(null, { privateKey: t, publicKey: c.setRsaPublicKey(t.n, t.e) });
                    }
                  });
              if (A("generateKey") && A("exportKey")) {
                var u = o.globalScope.msCrypto.subtle.generateKey(
                  { name: "RSASSA-PKCS1-v1_5", modulusLength: e, publicExponent: _(t), hash: { name: "SHA-256" } },
                  !0,
                  ["sign", "verify"]
                );
                return (
                  (u.oncomplete = function (e) {
                    var t = e.target.result,
                      r = o.globalScope.msCrypto.subtle.exportKey("pkcs8", t.privateKey);
                    (r.oncomplete = function (e) {
                      var t = e.target.result,
                        r = c.privateKeyFromAsn1(a.fromDer(s.util.createBuffer(t)));
                      l(null, { privateKey: r, publicKey: c.setRsaPublicKey(r.n, r.e) });
                    }),
                      (r.onerror = function (e) {
                        l(e);
                      });
                  }),
                  void (u.onerror = function (e) {
                    l(e);
                  })
                );
              }
            } else if (C("generateKeyPairSync")) {
              var d = n.generateKeyPairSync("rsa", {
                modulusLength: e,
                publicExponent: t,
                publicKeyEncoding: { type: "spki", format: "pem" },
                privateKeyEncoding: { type: "pkcs8", format: "pem" }
              });
              return { privateKey: c.privateKeyFromPem(d.privateKey), publicKey: c.publicKeyFromPem(d.publicKey) };
            }
          var p = c.rsa.createKeyPairGenerationState(e, t, r);
          if (!l) return c.rsa.stepKeyPairGenerationState(p, 0), p.keys;
          !(function (e, t, r) {
            "function" == typeof t && ((r = t), (t = {}));
            var n = {
              algorithm: {
                name: (t = t || {}).algorithm || "PRIMEINC",
                options: { workers: t.workers || 2, workLoad: t.workLoad || 100, workerScript: t.workerScript }
              }
            };
            function a() {
              o(e.pBits, function (t, s) {
                return t ? r(t) : ((e.p = s), null !== e.q ? l(t, e.q) : void o(e.qBits, l));
              });
            }
            function o(e, t) {
              s.prime.generateProbablePrime(e, n, t);
            }
            function l(t, s) {
              if (t) return r(t);
              if (((e.q = s), e.p.compareTo(e.q) < 0)) {
                var n = e.p;
                (e.p = e.q), (e.q = n);
              }
              if (0 !== e.p.subtract(i.ONE).gcd(e.e).compareTo(i.ONE)) return (e.p = null), void a();
              if (0 !== e.q.subtract(i.ONE).gcd(e.e).compareTo(i.ONE)) return (e.q = null), void o(e.qBits, l);
              if (
                ((e.p1 = e.p.subtract(i.ONE)),
                (e.q1 = e.q.subtract(i.ONE)),
                (e.phi = e.p1.multiply(e.q1)),
                0 !== e.phi.gcd(e.e).compareTo(i.ONE))
              )
                return (e.p = e.q = null), void a();
              if (((e.n = e.p.multiply(e.q)), e.n.bitLength() !== e.bits)) return (e.q = null), void o(e.qBits, l);
              var u = e.e.modInverse(e.phi);
              (e.keys = {
                privateKey: c.rsa.setPrivateKey(e.n, e.e, u, e.p, e.q, u.mod(e.p1), u.mod(e.q1), e.q.modInverse(e.p)),
                publicKey: c.rsa.setPublicKey(e.n, e.e)
              }),
                r(null, e.keys);
            }
            "prng" in t && (n.prng = t.prng), a();
          })(p, r, l);
        }),
        (c.setRsaPublicKey = c.rsa.setPublicKey =
          function (e, t) {
            var r = {
              n: e,
              e: t,
              encrypt: function (e, t, i) {
                if (("string" == typeof t ? (t = t.toUpperCase()) : void 0 === t && (t = "RSAES-PKCS1-V1_5"), "RSAES-PKCS1-V1_5" === t))
                  t = {
                    encode: function (e, t, r) {
                      return E(e, t, 2).getBytes();
                    }
                  };
                else if ("RSA-OAEP" === t || "RSAES-OAEP" === t)
                  t = {
                    encode: function (e, t) {
                      return s.pkcs1.encode_rsa_oaep(t, e, i);
                    }
                  };
                else if (-1 !== ["RAW", "NONE", "NULL", null].indexOf(t))
                  t = {
                    encode: function (e) {
                      return e;
                    }
                  };
                else if ("string" == typeof t) throw new Error('Unsupported encryption scheme: "' + t + '".');
                var n = t.encode(e, r, !0);
                return c.rsa.encrypt(n, r, !0);
              },
              verify: function (e, t, i, n) {
                "string" == typeof i ? (i = i.toUpperCase()) : void 0 === i && (i = "RSASSA-PKCS1-V1_5"),
                  void 0 === n && (n = { _parseAllDigestBytes: !0 }),
                  "_parseAllDigestBytes" in n || (n._parseAllDigestBytes = !0),
                  "RSASSA-PKCS1-V1_5" === i
                    ? (i = {
                        verify: function (e, t) {
                          t = m(t, r, !0);
                          var i = a.fromDer(t, { parseAllBytes: n._parseAllDigestBytes }),
                            o = {},
                            c = [];
                          if (!a.validate(i, f, o, c))
                            throw (
                              (((l = new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.")).errors = c), l)
                            );
                          var l,
                            u = a.derToOid(o.algorithmIdentifier);
                          if (
                            u !== s.oids.md2 &&
                            u !== s.oids.md5 &&
                            u !== s.oids.sha1 &&
                            u !== s.oids.sha224 &&
                            u !== s.oids.sha256 &&
                            u !== s.oids.sha384 &&
                            u !== s.oids.sha512 &&
                            u !== s.oids["sha512-224"] &&
                            u !== s.oids["sha512-256"]
                          )
                            throw (((l = new Error("Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.")).oid = u), l);
                          if ((u === s.oids.md2 || u === s.oids.md5) && !("parameters" in o))
                            throw new Error(
                              "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters."
                            );
                          return e === o.digest;
                        }
                      })
                    : ("NONE" !== i && "NULL" !== i && null !== i) ||
                      (i = {
                        verify: function (e, t) {
                          return e === m(t, r, !0);
                        }
                      });
                var o = c.rsa.decrypt(t, r, !0, !1);
                return i.verify(e, o, r.n.bitLength());
              }
            };
            return r;
          }),
        (c.setRsaPrivateKey = c.rsa.setPrivateKey =
          function (e, t, r, i, n, a, o, l) {
            var u = {
              n: e,
              e: t,
              d: r,
              p: i,
              q: n,
              dP: a,
              dQ: o,
              qInv: l,
              decrypt: function (e, t, r) {
                "string" == typeof t ? (t = t.toUpperCase()) : void 0 === t && (t = "RSAES-PKCS1-V1_5");
                var i = c.rsa.decrypt(e, u, !1, !1);
                if ("RSAES-PKCS1-V1_5" === t) t = { decode: m };
                else if ("RSA-OAEP" === t || "RSAES-OAEP" === t)
                  t = {
                    decode: function (e, t) {
                      return s.pkcs1.decode_rsa_oaep(t, e, r);
                    }
                  };
                else {
                  if (-1 === ["RAW", "NONE", "NULL", null].indexOf(t)) throw new Error('Unsupported encryption scheme: "' + t + '".');
                  t = {
                    decode: function (e) {
                      return e;
                    }
                  };
                }
                return t.decode(i, u, !1);
              },
              sign: function (e, t) {
                var r = !1;
                "string" == typeof t && (t = t.toUpperCase()),
                  void 0 === t || "RSASSA-PKCS1-V1_5" === t
                    ? ((t = { encode: g }), (r = 1))
                    : ("NONE" !== t && "NULL" !== t && null !== t) ||
                      ((t = {
                        encode: function () {
                          return e;
                        }
                      }),
                      (r = 1));
                var s = t.encode(e, u.n.bitLength());
                return c.rsa.encrypt(s, u, r);
              }
            };
            return u;
          }),
        (c.wrapRsaPrivateKey = function (e) {
          return a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, a.integerToDer(0).getBytes()),
            a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(a.Class.UNIVERSAL, a.Type.OID, !1, a.oidToDer(c.oids.rsaEncryption).getBytes()),
              a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, "")
            ]),
            a.create(a.Class.UNIVERSAL, a.Type.OCTETSTRING, !1, a.toDer(e).getBytes())
          ]);
        }),
        (c.privateKeyFromAsn1 = function (e) {
          var t,
            r,
            n,
            o,
            l,
            p,
            h,
            f,
            g = {},
            y = [];
          if ((a.validate(e, u, g, y) && (e = a.fromDer(s.util.createBuffer(g.privateKey))), (g = {}), (y = []), !a.validate(e, d, g, y))) {
            var E = new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");
            throw ((E.errors = y), E);
          }
          return (
            (t = s.util.createBuffer(g.privateKeyModulus).toHex()),
            (r = s.util.createBuffer(g.privateKeyPublicExponent).toHex()),
            (n = s.util.createBuffer(g.privateKeyPrivateExponent).toHex()),
            (o = s.util.createBuffer(g.privateKeyPrime1).toHex()),
            (l = s.util.createBuffer(g.privateKeyPrime2).toHex()),
            (p = s.util.createBuffer(g.privateKeyExponent1).toHex()),
            (h = s.util.createBuffer(g.privateKeyExponent2).toHex()),
            (f = s.util.createBuffer(g.privateKeyCoefficient).toHex()),
            c.setRsaPrivateKey(
              new i(t, 16),
              new i(r, 16),
              new i(n, 16),
              new i(o, 16),
              new i(l, 16),
              new i(p, 16),
              new i(h, 16),
              new i(f, 16)
            )
          );
        }),
        (c.privateKeyToAsn1 = c.privateKeyToRSAPrivateKey =
          function (e) {
            return a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, a.integerToDer(0).getBytes()),
              a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, v(e.n)),
              a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, v(e.e)),
              a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, v(e.d)),
              a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, v(e.p)),
              a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, v(e.q)),
              a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, v(e.dP)),
              a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, v(e.dQ)),
              a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, v(e.qInv))
            ]);
          }),
        (c.publicKeyFromAsn1 = function (e) {
          var t = {},
            r = [];
          if (a.validate(e, h, t, r)) {
            var n,
              o = a.derToOid(t.publicKeyOid);
            if (o !== c.oids.rsaEncryption) throw (((n = new Error("Cannot read public key. Unknown OID.")).oid = o), n);
            e = t.rsaPublicKey;
          }
          if (((r = []), !a.validate(e, p, t, r)))
            throw (((n = new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.")).errors = r), n);
          var l = s.util.createBuffer(t.publicKeyModulus).toHex(),
            u = s.util.createBuffer(t.publicKeyExponent).toHex();
          return c.setRsaPublicKey(new i(l, 16), new i(u, 16));
        }),
        (c.publicKeyToAsn1 = c.publicKeyToSubjectPublicKeyInfo =
          function (e) {
            return a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                a.create(a.Class.UNIVERSAL, a.Type.OID, !1, a.oidToDer(c.oids.rsaEncryption).getBytes()),
                a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, "")
              ]),
              a.create(a.Class.UNIVERSAL, a.Type.BITSTRING, !1, [c.publicKeyToRSAPublicKey(e)])
            ]);
          }),
        (c.publicKeyToRSAPublicKey = function (e) {
          return a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, v(e.n)),
            a.create(a.Class.UNIVERSAL, a.Type.INTEGER, !1, v(e.e))
          ]);
        });
    },
    328804: (e, t, r) => {
      var s = r(883418);
      r(643730), r(563290);
      var i = (e.exports = s.sha1 = s.sha1 || {});
      (s.md.sha1 = s.md.algorithms.sha1 = i),
        (i.create = function () {
          a || ((n = String.fromCharCode(128)), (n += s.util.fillString(String.fromCharCode(0), 64)), (a = !0));
          var e = null,
            t = s.util.createBuffer(),
            r = new Array(80),
            i = {
              algorithm: "sha1",
              blockLength: 64,
              digestLength: 20,
              messageLength: 0,
              fullMessageLength: null,
              messageLengthSize: 8,
              start: function () {
                (i.messageLength = 0), (i.fullMessageLength = i.messageLength64 = []);
                for (var r = i.messageLengthSize / 4, n = 0; n < r; ++n) i.fullMessageLength.push(0);
                return (
                  (t = s.util.createBuffer()), (e = { h0: 1732584193, h1: 4023233417, h2: 2562383102, h3: 271733878, h4: 3285377520 }), i
                );
              }
            };
          return (
            i.start(),
            (i.update = function (n, a) {
              "utf8" === a && (n = s.util.encodeUtf8(n));
              var c = n.length;
              (i.messageLength += c), (c = [(c / 4294967296) >>> 0, c >>> 0]);
              for (var l = i.fullMessageLength.length - 1; l >= 0; --l)
                (i.fullMessageLength[l] += c[1]),
                  (c[1] = c[0] + ((i.fullMessageLength[l] / 4294967296) >>> 0)),
                  (i.fullMessageLength[l] = i.fullMessageLength[l] >>> 0),
                  (c[0] = (c[1] / 4294967296) >>> 0);
              return t.putBytes(n), o(e, r, t), (t.read > 2048 || 0 === t.length()) && t.compact(), i;
            }),
            (i.digest = function () {
              var a = s.util.createBuffer();
              a.putBytes(t.bytes());
              var c,
                l = (i.fullMessageLength[i.fullMessageLength.length - 1] + i.messageLengthSize) & (i.blockLength - 1);
              a.putBytes(n.substr(0, i.blockLength - l));
              for (var u = 8 * i.fullMessageLength[0], d = 0; d < i.fullMessageLength.length - 1; ++d)
                (u += ((c = 8 * i.fullMessageLength[d + 1]) / 4294967296) >>> 0), a.putInt32(u >>> 0), (u = c >>> 0);
              a.putInt32(u);
              var p = { h0: e.h0, h1: e.h1, h2: e.h2, h3: e.h3, h4: e.h4 };
              o(p, r, a);
              var h = s.util.createBuffer();
              return h.putInt32(p.h0), h.putInt32(p.h1), h.putInt32(p.h2), h.putInt32(p.h3), h.putInt32(p.h4), h;
            }),
            i
          );
        });
      var n = null,
        a = !1;
      function o(e, t, r) {
        for (var s, i, n, a, o, c, l, u = r.length(); u >= 64; ) {
          for (i = e.h0, n = e.h1, a = e.h2, o = e.h3, c = e.h4, l = 0; l < 16; ++l)
            (s = r.getInt32()),
              (t[l] = s),
              (s = ((i << 5) | (i >>> 27)) + (o ^ (n & (a ^ o))) + c + 1518500249 + s),
              (c = o),
              (o = a),
              (a = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = s);
          for (; l < 20; ++l)
            (s = ((s = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16]) << 1) | (s >>> 31)),
              (t[l] = s),
              (s = ((i << 5) | (i >>> 27)) + (o ^ (n & (a ^ o))) + c + 1518500249 + s),
              (c = o),
              (o = a),
              (a = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = s);
          for (; l < 32; ++l)
            (s = ((s = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16]) << 1) | (s >>> 31)),
              (t[l] = s),
              (s = ((i << 5) | (i >>> 27)) + (n ^ a ^ o) + c + 1859775393 + s),
              (c = o),
              (o = a),
              (a = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = s);
          for (; l < 40; ++l)
            (s = ((s = t[l - 6] ^ t[l - 16] ^ t[l - 28] ^ t[l - 32]) << 2) | (s >>> 30)),
              (t[l] = s),
              (s = ((i << 5) | (i >>> 27)) + (n ^ a ^ o) + c + 1859775393 + s),
              (c = o),
              (o = a),
              (a = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = s);
          for (; l < 60; ++l)
            (s = ((s = t[l - 6] ^ t[l - 16] ^ t[l - 28] ^ t[l - 32]) << 2) | (s >>> 30)),
              (t[l] = s),
              (s = ((i << 5) | (i >>> 27)) + ((n & a) | (o & (n ^ a))) + c + 2400959708 + s),
              (c = o),
              (o = a),
              (a = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = s);
          for (; l < 80; ++l)
            (s = ((s = t[l - 6] ^ t[l - 16] ^ t[l - 28] ^ t[l - 32]) << 2) | (s >>> 30)),
              (t[l] = s),
              (s = ((i << 5) | (i >>> 27)) + (n ^ a ^ o) + c + 3395469782 + s),
              (c = o),
              (o = a),
              (a = ((n << 30) | (n >>> 2)) >>> 0),
              (n = i),
              (i = s);
          (e.h0 = (e.h0 + i) | 0),
            (e.h1 = (e.h1 + n) | 0),
            (e.h2 = (e.h2 + a) | 0),
            (e.h3 = (e.h3 + o) | 0),
            (e.h4 = (e.h4 + c) | 0),
            (u -= 64);
        }
      }
    },
    851792: (e, t, r) => {
      var s = r(883418);
      r(643730), r(563290);
      var i = (e.exports = s.sha256 = s.sha256 || {});
      (s.md.sha256 = s.md.algorithms.sha256 = i),
        (i.create = function () {
          a ||
            ((n = String.fromCharCode(128)),
            (n += s.util.fillString(String.fromCharCode(0), 64)),
            (o = [
              1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401,
              607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628,
              770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
              113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
              2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
              659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
              2428436474, 2756734187, 3204031479, 3329325298
            ]),
            (a = !0));
          var e = null,
            t = s.util.createBuffer(),
            r = new Array(64),
            i = {
              algorithm: "sha256",
              blockLength: 64,
              digestLength: 32,
              messageLength: 0,
              fullMessageLength: null,
              messageLengthSize: 8,
              start: function () {
                (i.messageLength = 0), (i.fullMessageLength = i.messageLength64 = []);
                for (var r = i.messageLengthSize / 4, n = 0; n < r; ++n) i.fullMessageLength.push(0);
                return (
                  (t = s.util.createBuffer()),
                  (e = {
                    h0: 1779033703,
                    h1: 3144134277,
                    h2: 1013904242,
                    h3: 2773480762,
                    h4: 1359893119,
                    h5: 2600822924,
                    h6: 528734635,
                    h7: 1541459225
                  }),
                  i
                );
              }
            };
          return (
            i.start(),
            (i.update = function (n, a) {
              "utf8" === a && (n = s.util.encodeUtf8(n));
              var o = n.length;
              (i.messageLength += o), (o = [(o / 4294967296) >>> 0, o >>> 0]);
              for (var l = i.fullMessageLength.length - 1; l >= 0; --l)
                (i.fullMessageLength[l] += o[1]),
                  (o[1] = o[0] + ((i.fullMessageLength[l] / 4294967296) >>> 0)),
                  (i.fullMessageLength[l] = i.fullMessageLength[l] >>> 0),
                  (o[0] = (o[1] / 4294967296) >>> 0);
              return t.putBytes(n), c(e, r, t), (t.read > 2048 || 0 === t.length()) && t.compact(), i;
            }),
            (i.digest = function () {
              var a = s.util.createBuffer();
              a.putBytes(t.bytes());
              var o,
                l = (i.fullMessageLength[i.fullMessageLength.length - 1] + i.messageLengthSize) & (i.blockLength - 1);
              a.putBytes(n.substr(0, i.blockLength - l));
              for (var u = 8 * i.fullMessageLength[0], d = 0; d < i.fullMessageLength.length - 1; ++d)
                (u += ((o = 8 * i.fullMessageLength[d + 1]) / 4294967296) >>> 0), a.putInt32(u >>> 0), (u = o >>> 0);
              a.putInt32(u);
              var p = { h0: e.h0, h1: e.h1, h2: e.h2, h3: e.h3, h4: e.h4, h5: e.h5, h6: e.h6, h7: e.h7 };
              c(p, r, a);
              var h = s.util.createBuffer();
              return (
                h.putInt32(p.h0),
                h.putInt32(p.h1),
                h.putInt32(p.h2),
                h.putInt32(p.h3),
                h.putInt32(p.h4),
                h.putInt32(p.h5),
                h.putInt32(p.h6),
                h.putInt32(p.h7),
                h
              );
            }),
            i
          );
        });
      var n = null,
        a = !1,
        o = null;
      function c(e, t, r) {
        for (var s, i, n, a, c, l, u, d, p, h, f, g, y, E = r.length(); E >= 64; ) {
          for (c = 0; c < 16; ++c) t[c] = r.getInt32();
          for (; c < 64; ++c)
            (s = (((s = t[c - 2]) >>> 17) | (s << 15)) ^ ((s >>> 19) | (s << 13)) ^ (s >>> 10)),
              (i = (((i = t[c - 15]) >>> 7) | (i << 25)) ^ ((i >>> 18) | (i << 14)) ^ (i >>> 3)),
              (t[c] = (s + t[c - 7] + i + t[c - 16]) | 0);
          for (l = e.h0, u = e.h1, d = e.h2, p = e.h3, h = e.h4, f = e.h5, g = e.h6, y = e.h7, c = 0; c < 64; ++c)
            (n = ((l >>> 2) | (l << 30)) ^ ((l >>> 13) | (l << 19)) ^ ((l >>> 22) | (l << 10))),
              (a = (l & u) | (d & (l ^ u))),
              (s = y + (((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7))) + (g ^ (h & (f ^ g))) + o[c] + t[c]),
              (y = g),
              (g = f),
              (f = h),
              (h = (p + s) >>> 0),
              (p = d),
              (d = u),
              (u = l),
              (l = (s + (i = n + a)) >>> 0);
          (e.h0 = (e.h0 + l) | 0),
            (e.h1 = (e.h1 + u) | 0),
            (e.h2 = (e.h2 + d) | 0),
            (e.h3 = (e.h3 + p) | 0),
            (e.h4 = (e.h4 + h) | 0),
            (e.h5 = (e.h5 + f) | 0),
            (e.h6 = (e.h6 + g) | 0),
            (e.h7 = (e.h7 + y) | 0),
            (E -= 64);
        }
      }
    },
    864301: (e, t, r) => {
      var s = r(883418);
      r(643730), r(563290);
      var i = (e.exports = s.sha512 = s.sha512 || {});
      s.md.sha512 = s.md.algorithms.sha512 = i;
      var n = (s.sha384 = s.sha512.sha384 = s.sha512.sha384 || {});
      (n.create = function () {
        return i.create("SHA-384");
      }),
        (s.md.sha384 = s.md.algorithms.sha384 = n),
        (s.sha512.sha256 = s.sha512.sha256 || {
          create: function () {
            return i.create("SHA-512/256");
          }
        }),
        (s.md["sha512/256"] = s.md.algorithms["sha512/256"] = s.sha512.sha256),
        (s.sha512.sha224 = s.sha512.sha224 || {
          create: function () {
            return i.create("SHA-512/224");
          }
        }),
        (s.md["sha512/224"] = s.md.algorithms["sha512/224"] = s.sha512.sha224),
        (i.create = function (e) {
          if (
            (o ||
              ((a = String.fromCharCode(128)),
              (a += s.util.fillString(String.fromCharCode(0), 128)),
              (c = [
                [1116352408, 3609767458],
                [1899447441, 602891725],
                [3049323471, 3964484399],
                [3921009573, 2173295548],
                [961987163, 4081628472],
                [1508970993, 3053834265],
                [2453635748, 2937671579],
                [2870763221, 3664609560],
                [3624381080, 2734883394],
                [310598401, 1164996542],
                [607225278, 1323610764],
                [1426881987, 3590304994],
                [1925078388, 4068182383],
                [2162078206, 991336113],
                [2614888103, 633803317],
                [3248222580, 3479774868],
                [3835390401, 2666613458],
                [4022224774, 944711139],
                [264347078, 2341262773],
                [604807628, 2007800933],
                [770255983, 1495990901],
                [1249150122, 1856431235],
                [1555081692, 3175218132],
                [1996064986, 2198950837],
                [2554220882, 3999719339],
                [2821834349, 766784016],
                [2952996808, 2566594879],
                [3210313671, 3203337956],
                [3336571891, 1034457026],
                [3584528711, 2466948901],
                [113926993, 3758326383],
                [338241895, 168717936],
                [666307205, 1188179964],
                [773529912, 1546045734],
                [1294757372, 1522805485],
                [1396182291, 2643833823],
                [1695183700, 2343527390],
                [1986661051, 1014477480],
                [2177026350, 1206759142],
                [2456956037, 344077627],
                [2730485921, 1290863460],
                [2820302411, 3158454273],
                [3259730800, 3505952657],
                [3345764771, 106217008],
                [3516065817, 3606008344],
                [3600352804, 1432725776],
                [4094571909, 1467031594],
                [275423344, 851169720],
                [430227734, 3100823752],
                [506948616, 1363258195],
                [659060556, 3750685593],
                [883997877, 3785050280],
                [958139571, 3318307427],
                [1322822218, 3812723403],
                [1537002063, 2003034995],
                [1747873779, 3602036899],
                [1955562222, 1575990012],
                [2024104815, 1125592928],
                [2227730452, 2716904306],
                [2361852424, 442776044],
                [2428436474, 593698344],
                [2756734187, 3733110249],
                [3204031479, 2999351573],
                [3329325298, 3815920427],
                [3391569614, 3928383900],
                [3515267271, 566280711],
                [3940187606, 3454069534],
                [4118630271, 4000239992],
                [116418474, 1914138554],
                [174292421, 2731055270],
                [289380356, 3203993006],
                [460393269, 320620315],
                [685471733, 587496836],
                [852142971, 1086792851],
                [1017036298, 365543100],
                [1126000580, 2618297676],
                [1288033470, 3409855158],
                [1501505948, 4234509866],
                [1607167915, 987167468],
                [1816402316, 1246189591]
              ]),
              ((l = {})["SHA-512"] = [
                [1779033703, 4089235720],
                [3144134277, 2227873595],
                [1013904242, 4271175723],
                [2773480762, 1595750129],
                [1359893119, 2917565137],
                [2600822924, 725511199],
                [528734635, 4215389547],
                [1541459225, 327033209]
              ]),
              (l["SHA-384"] = [
                [3418070365, 3238371032],
                [1654270250, 914150663],
                [2438529370, 812702999],
                [355462360, 4144912697],
                [1731405415, 4290775857],
                [2394180231, 1750603025],
                [3675008525, 1694076839],
                [1203062813, 3204075428]
              ]),
              (l["SHA-512/256"] = [
                [573645204, 4230739756],
                [2673172387, 3360449730],
                [596883563, 1867755857],
                [2520282905, 1497426621],
                [2519219938, 2827943907],
                [3193839141, 1401305490],
                [721525244, 746961066],
                [246885852, 2177182882]
              ]),
              (l["SHA-512/224"] = [
                [2352822216, 424955298],
                [1944164710, 2312950998],
                [502970286, 855612546],
                [1738396948, 1479516111],
                [258812777, 2077511080],
                [2011393907, 79989058],
                [1067287976, 1780299464],
                [286451373, 2446758561]
              ]),
              (o = !0)),
            void 0 === e && (e = "SHA-512"),
            !(e in l))
          )
            throw new Error("Invalid SHA-512 algorithm: " + e);
          for (var t = l[e], r = null, i = s.util.createBuffer(), n = new Array(80), d = 0; d < 80; ++d) n[d] = new Array(2);
          var p = 64;
          switch (e) {
            case "SHA-384":
              p = 48;
              break;
            case "SHA-512/256":
              p = 32;
              break;
            case "SHA-512/224":
              p = 28;
          }
          var h = {
            algorithm: e.replace("-", "").toLowerCase(),
            blockLength: 128,
            digestLength: p,
            messageLength: 0,
            fullMessageLength: null,
            messageLengthSize: 16,
            start: function () {
              (h.messageLength = 0), (h.fullMessageLength = h.messageLength128 = []);
              for (var e = h.messageLengthSize / 4, n = 0; n < e; ++n) h.fullMessageLength.push(0);
              for (i = s.util.createBuffer(), r = new Array(t.length), n = 0; n < t.length; ++n) r[n] = t[n].slice(0);
              return h;
            }
          };
          return (
            h.start(),
            (h.update = function (e, t) {
              "utf8" === t && (e = s.util.encodeUtf8(e));
              var a = e.length;
              (h.messageLength += a), (a = [(a / 4294967296) >>> 0, a >>> 0]);
              for (var o = h.fullMessageLength.length - 1; o >= 0; --o)
                (h.fullMessageLength[o] += a[1]),
                  (a[1] = a[0] + ((h.fullMessageLength[o] / 4294967296) >>> 0)),
                  (h.fullMessageLength[o] = h.fullMessageLength[o] >>> 0),
                  (a[0] = (a[1] / 4294967296) >>> 0);
              return i.putBytes(e), u(r, n, i), (i.read > 2048 || 0 === i.length()) && i.compact(), h;
            }),
            (h.digest = function () {
              var t = s.util.createBuffer();
              t.putBytes(i.bytes());
              var o,
                c = (h.fullMessageLength[h.fullMessageLength.length - 1] + h.messageLengthSize) & (h.blockLength - 1);
              t.putBytes(a.substr(0, h.blockLength - c));
              for (var l = 8 * h.fullMessageLength[0], d = 0; d < h.fullMessageLength.length - 1; ++d)
                (l += ((o = 8 * h.fullMessageLength[d + 1]) / 4294967296) >>> 0), t.putInt32(l >>> 0), (l = o >>> 0);
              t.putInt32(l);
              var p = new Array(r.length);
              for (d = 0; d < r.length; ++d) p[d] = r[d].slice(0);
              u(p, n, t);
              var f,
                g = s.util.createBuffer();
              for (f = "SHA-512" === e ? p.length : "SHA-384" === e ? p.length - 2 : p.length - 4, d = 0; d < f; ++d)
                g.putInt32(p[d][0]), (d === f - 1 && "SHA-512/224" === e) || g.putInt32(p[d][1]);
              return g;
            }),
            h
          );
        });
      var a = null,
        o = !1,
        c = null,
        l = null;
      function u(e, t, r) {
        for (
          var s, i, n, a, o, l, u, d, p, h, f, g, y, E, m, v, T, C, S, A, _, I, b, R, O, P, M, N, x, w, D, B, L, U = r.length();
          U >= 128;

        ) {
          for (M = 0; M < 16; ++M) (t[M][0] = r.getInt32() >>> 0), (t[M][1] = r.getInt32() >>> 0);
          for (; M < 80; ++M)
            (s = ((((N = (w = t[M - 2])[0]) >>> 19) | ((x = w[1]) << 13)) ^ ((x >>> 29) | (N << 3)) ^ (N >>> 6)) >>> 0),
              (i = (((N << 13) | (x >>> 19)) ^ ((x << 3) | (N >>> 29)) ^ ((N << 26) | (x >>> 6))) >>> 0),
              (n = ((((N = (B = t[M - 15])[0]) >>> 1) | ((x = B[1]) << 31)) ^ ((N >>> 8) | (x << 24)) ^ (N >>> 7)) >>> 0),
              (a = (((N << 31) | (x >>> 1)) ^ ((N << 24) | (x >>> 8)) ^ ((N << 25) | (x >>> 7))) >>> 0),
              (D = t[M - 7]),
              (L = t[M - 16]),
              (x = i + D[1] + a + L[1]),
              (t[M][0] = (s + D[0] + n + L[0] + ((x / 4294967296) >>> 0)) >>> 0),
              (t[M][1] = x >>> 0);
          for (
            f = e[0][0],
              g = e[0][1],
              y = e[1][0],
              E = e[1][1],
              m = e[2][0],
              v = e[2][1],
              T = e[3][0],
              C = e[3][1],
              S = e[4][0],
              A = e[4][1],
              _ = e[5][0],
              I = e[5][1],
              b = e[6][0],
              R = e[6][1],
              O = e[7][0],
              P = e[7][1],
              M = 0;
            M < 80;
            ++M
          )
            (u = (((S >>> 14) | (A << 18)) ^ ((S >>> 18) | (A << 14)) ^ ((A >>> 9) | (S << 23))) >>> 0),
              (d = (b ^ (S & (_ ^ b))) >>> 0),
              (o = (((f >>> 28) | (g << 4)) ^ ((g >>> 2) | (f << 30)) ^ ((g >>> 7) | (f << 25))) >>> 0),
              (l = (((f << 4) | (g >>> 28)) ^ ((g << 30) | (f >>> 2)) ^ ((g << 25) | (f >>> 7))) >>> 0),
              (p = ((f & y) | (m & (f ^ y))) >>> 0),
              (h = ((g & E) | (v & (g ^ E))) >>> 0),
              (x =
                P +
                ((((S << 18) | (A >>> 14)) ^ ((S << 14) | (A >>> 18)) ^ ((A << 23) | (S >>> 9))) >>> 0) +
                ((R ^ (A & (I ^ R))) >>> 0) +
                c[M][1] +
                t[M][1]),
              (s = (O + u + d + c[M][0] + t[M][0] + ((x / 4294967296) >>> 0)) >>> 0),
              (i = x >>> 0),
              (n = (o + p + (((x = l + h) / 4294967296) >>> 0)) >>> 0),
              (a = x >>> 0),
              (O = b),
              (P = R),
              (b = _),
              (R = I),
              (_ = S),
              (I = A),
              (S = (T + s + (((x = C + i) / 4294967296) >>> 0)) >>> 0),
              (A = x >>> 0),
              (T = m),
              (C = v),
              (m = y),
              (v = E),
              (y = f),
              (E = g),
              (f = (s + n + (((x = i + a) / 4294967296) >>> 0)) >>> 0),
              (g = x >>> 0);
          (x = e[0][1] + g),
            (e[0][0] = (e[0][0] + f + ((x / 4294967296) >>> 0)) >>> 0),
            (e[0][1] = x >>> 0),
            (x = e[1][1] + E),
            (e[1][0] = (e[1][0] + y + ((x / 4294967296) >>> 0)) >>> 0),
            (e[1][1] = x >>> 0),
            (x = e[2][1] + v),
            (e[2][0] = (e[2][0] + m + ((x / 4294967296) >>> 0)) >>> 0),
            (e[2][1] = x >>> 0),
            (x = e[3][1] + C),
            (e[3][0] = (e[3][0] + T + ((x / 4294967296) >>> 0)) >>> 0),
            (e[3][1] = x >>> 0),
            (x = e[4][1] + A),
            (e[4][0] = (e[4][0] + S + ((x / 4294967296) >>> 0)) >>> 0),
            (e[4][1] = x >>> 0),
            (x = e[5][1] + I),
            (e[5][0] = (e[5][0] + _ + ((x / 4294967296) >>> 0)) >>> 0),
            (e[5][1] = x >>> 0),
            (x = e[6][1] + R),
            (e[6][0] = (e[6][0] + b + ((x / 4294967296) >>> 0)) >>> 0),
            (e[6][1] = x >>> 0),
            (x = e[7][1] + P),
            (e[7][0] = (e[7][0] + O + ((x / 4294967296) >>> 0)) >>> 0),
            (e[7][1] = x >>> 0),
            (U -= 128);
        }
      }
    },
    563290: (e, t, r) => {
      var s = r(173656),
        i = r(603275).Buffer,
        n = r(883418),
        a = r(240976),
        o = (e.exports = n.util = n.util || {});
      function c(e) {
        if (8 !== e && 16 !== e && 24 !== e && 32 !== e) throw new Error("Only 8, 16, 24, or 32 bits supported: " + e);
      }
      function l(e) {
        if (((this.data = ""), (this.read = 0), "string" == typeof e)) this.data = e;
        else if (o.isArrayBuffer(e) || o.isArrayBufferView(e))
          if (void 0 !== i && e instanceof i) this.data = e.toString("binary");
          else {
            var t = new Uint8Array(e);
            try {
              this.data = String.fromCharCode.apply(null, t);
            } catch (e) {
              for (var r = 0; r < t.length; ++r) this.putByte(t[r]);
            }
          }
        else
          (e instanceof l || ("object" == typeof e && "string" == typeof e.data && "number" == typeof e.read)) &&
            ((this.data = e.data), (this.read = e.read));
        this._constructedStringLength = 0;
      }
      !(function () {
        if (void 0 !== s && s.nextTick && !s.browser)
          return (
            (o.nextTick = s.nextTick),
            void ("function" == typeof setImmediate ? (o.setImmediate = setImmediate) : (o.setImmediate = o.nextTick))
          );
        if ("function" == typeof setImmediate)
          return (
            (o.setImmediate = function () {
              return setImmediate.apply(void 0, arguments);
            }),
            void (o.nextTick = function (e) {
              return setImmediate(e);
            })
          );
        if (
          ((o.setImmediate = function (e) {
            setTimeout(e, 0);
          }),
          "undefined" != typeof window && "function" == typeof window.postMessage)
        ) {
          var e = "forge.setImmediate",
            t = [];
          (o.setImmediate = function (r) {
            t.push(r), 1 === t.length && window.postMessage(e, "*");
          }),
            window.addEventListener(
              "message",
              function (r) {
                if (r.source === window && r.data === e) {
                  r.stopPropagation();
                  var s = t.slice();
                  (t.length = 0),
                    s.forEach(function (e) {
                      e();
                    });
                }
              },
              !0
            );
        }
        if ("undefined" != typeof MutationObserver) {
          var r = Date.now(),
            i = !0,
            n = document.createElement("div");
          (t = []),
            new MutationObserver(function () {
              var e = t.slice();
              (t.length = 0),
                e.forEach(function (e) {
                  e();
                });
            }).observe(n, { attributes: !0 });
          var a = o.setImmediate;
          o.setImmediate = function (e) {
            Date.now() - r > 15 ? ((r = Date.now()), a(e)) : (t.push(e), 1 === t.length && n.setAttribute("a", (i = !i)));
          };
        }
        o.nextTick = o.setImmediate;
      })(),
        (o.isNodejs = void 0 !== s && s.versions && s.versions.node),
        (o.globalScope = o.isNodejs ? r.g : "undefined" == typeof self ? window : self),
        (o.isArray =
          Array.isArray ||
          function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          }),
        (o.isArrayBuffer = function (e) {
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer;
        }),
        (o.isArrayBufferView = function (e) {
          return e && o.isArrayBuffer(e.buffer) && void 0 !== e.byteLength;
        }),
        (o.ByteBuffer = l),
        (o.ByteStringBuffer = l),
        (o.ByteStringBuffer.prototype._optimizeConstructedString = function (e) {
          (this._constructedStringLength += e),
            this._constructedStringLength > 4096 && (this.data.substr(0, 1), (this._constructedStringLength = 0));
        }),
        (o.ByteStringBuffer.prototype.length = function () {
          return this.data.length - this.read;
        }),
        (o.ByteStringBuffer.prototype.isEmpty = function () {
          return this.length() <= 0;
        }),
        (o.ByteStringBuffer.prototype.putByte = function (e) {
          return this.putBytes(String.fromCharCode(e));
        }),
        (o.ByteStringBuffer.prototype.fillWithByte = function (e, t) {
          e = String.fromCharCode(e);
          for (var r = this.data; t > 0; ) 1 & t && (r += e), (t >>>= 1) > 0 && (e += e);
          return (this.data = r), this._optimizeConstructedString(t), this;
        }),
        (o.ByteStringBuffer.prototype.putBytes = function (e) {
          return (this.data += e), this._optimizeConstructedString(e.length), this;
        }),
        (o.ByteStringBuffer.prototype.putString = function (e) {
          return this.putBytes(o.encodeUtf8(e));
        }),
        (o.ByteStringBuffer.prototype.putInt16 = function (e) {
          return this.putBytes(String.fromCharCode((e >> 8) & 255) + String.fromCharCode(255 & e));
        }),
        (o.ByteStringBuffer.prototype.putInt24 = function (e) {
          return this.putBytes(String.fromCharCode((e >> 16) & 255) + String.fromCharCode((e >> 8) & 255) + String.fromCharCode(255 & e));
        }),
        (o.ByteStringBuffer.prototype.putInt32 = function (e) {
          return this.putBytes(
            String.fromCharCode((e >> 24) & 255) +
              String.fromCharCode((e >> 16) & 255) +
              String.fromCharCode((e >> 8) & 255) +
              String.fromCharCode(255 & e)
          );
        }),
        (o.ByteStringBuffer.prototype.putInt16Le = function (e) {
          return this.putBytes(String.fromCharCode(255 & e) + String.fromCharCode((e >> 8) & 255));
        }),
        (o.ByteStringBuffer.prototype.putInt24Le = function (e) {
          return this.putBytes(String.fromCharCode(255 & e) + String.fromCharCode((e >> 8) & 255) + String.fromCharCode((e >> 16) & 255));
        }),
        (o.ByteStringBuffer.prototype.putInt32Le = function (e) {
          return this.putBytes(
            String.fromCharCode(255 & e) +
              String.fromCharCode((e >> 8) & 255) +
              String.fromCharCode((e >> 16) & 255) +
              String.fromCharCode((e >> 24) & 255)
          );
        }),
        (o.ByteStringBuffer.prototype.putInt = function (e, t) {
          c(t);
          var r = "";
          do {
            (t -= 8), (r += String.fromCharCode((e >> t) & 255));
          } while (t > 0);
          return this.putBytes(r);
        }),
        (o.ByteStringBuffer.prototype.putSignedInt = function (e, t) {
          return e < 0 && (e += 2 << (t - 1)), this.putInt(e, t);
        }),
        (o.ByteStringBuffer.prototype.putBuffer = function (e) {
          return this.putBytes(e.getBytes());
        }),
        (o.ByteStringBuffer.prototype.getByte = function () {
          return this.data.charCodeAt(this.read++);
        }),
        (o.ByteStringBuffer.prototype.getInt16 = function () {
          var e = (this.data.charCodeAt(this.read) << 8) ^ this.data.charCodeAt(this.read + 1);
          return (this.read += 2), e;
        }),
        (o.ByteStringBuffer.prototype.getInt24 = function () {
          var e =
            (this.data.charCodeAt(this.read) << 16) ^ (this.data.charCodeAt(this.read + 1) << 8) ^ this.data.charCodeAt(this.read + 2);
          return (this.read += 3), e;
        }),
        (o.ByteStringBuffer.prototype.getInt32 = function () {
          var e =
            (this.data.charCodeAt(this.read) << 24) ^
            (this.data.charCodeAt(this.read + 1) << 16) ^
            (this.data.charCodeAt(this.read + 2) << 8) ^
            this.data.charCodeAt(this.read + 3);
          return (this.read += 4), e;
        }),
        (o.ByteStringBuffer.prototype.getInt16Le = function () {
          var e = this.data.charCodeAt(this.read) ^ (this.data.charCodeAt(this.read + 1) << 8);
          return (this.read += 2), e;
        }),
        (o.ByteStringBuffer.prototype.getInt24Le = function () {
          var e =
            this.data.charCodeAt(this.read) ^ (this.data.charCodeAt(this.read + 1) << 8) ^ (this.data.charCodeAt(this.read + 2) << 16);
          return (this.read += 3), e;
        }),
        (o.ByteStringBuffer.prototype.getInt32Le = function () {
          var e =
            this.data.charCodeAt(this.read) ^
            (this.data.charCodeAt(this.read + 1) << 8) ^
            (this.data.charCodeAt(this.read + 2) << 16) ^
            (this.data.charCodeAt(this.read + 3) << 24);
          return (this.read += 4), e;
        }),
        (o.ByteStringBuffer.prototype.getInt = function (e) {
          c(e);
          var t = 0;
          do {
            (t = (t << 8) + this.data.charCodeAt(this.read++)), (e -= 8);
          } while (e > 0);
          return t;
        }),
        (o.ByteStringBuffer.prototype.getSignedInt = function (e) {
          var t = this.getInt(e),
            r = 2 << (e - 2);
          return t >= r && (t -= r << 1), t;
        }),
        (o.ByteStringBuffer.prototype.getBytes = function (e) {
          var t;
          return (
            e
              ? ((e = Math.min(this.length(), e)), (t = this.data.slice(this.read, this.read + e)), (this.read += e))
              : 0 === e
              ? (t = "")
              : ((t = 0 === this.read ? this.data : this.data.slice(this.read)), this.clear()),
            t
          );
        }),
        (o.ByteStringBuffer.prototype.bytes = function (e) {
          return void 0 === e ? this.data.slice(this.read) : this.data.slice(this.read, this.read + e);
        }),
        (o.ByteStringBuffer.prototype.at = function (e) {
          return this.data.charCodeAt(this.read + e);
        }),
        (o.ByteStringBuffer.prototype.setAt = function (e, t) {
          return (this.data = this.data.substr(0, this.read + e) + String.fromCharCode(t) + this.data.substr(this.read + e + 1)), this;
        }),
        (o.ByteStringBuffer.prototype.last = function () {
          return this.data.charCodeAt(this.data.length - 1);
        }),
        (o.ByteStringBuffer.prototype.copy = function () {
          var e = o.createBuffer(this.data);
          return (e.read = this.read), e;
        }),
        (o.ByteStringBuffer.prototype.compact = function () {
          return this.read > 0 && ((this.data = this.data.slice(this.read)), (this.read = 0)), this;
        }),
        (o.ByteStringBuffer.prototype.clear = function () {
          return (this.data = ""), (this.read = 0), this;
        }),
        (o.ByteStringBuffer.prototype.truncate = function (e) {
          var t = Math.max(0, this.length() - e);
          return (this.data = this.data.substr(this.read, t)), (this.read = 0), this;
        }),
        (o.ByteStringBuffer.prototype.toHex = function () {
          for (var e = "", t = this.read; t < this.data.length; ++t) {
            var r = this.data.charCodeAt(t);
            r < 16 && (e += "0"), (e += r.toString(16));
          }
          return e;
        }),
        (o.ByteStringBuffer.prototype.toString = function () {
          return o.decodeUtf8(this.bytes());
        }),
        (o.DataBuffer = function (e, t) {
          (t = t || {}), (this.read = t.readOffset || 0), (this.growSize = t.growSize || 1024);
          var r = o.isArrayBuffer(e),
            s = o.isArrayBufferView(e);
          if (r || s)
            return (
              (this.data = r ? new DataView(e) : new DataView(e.buffer, e.byteOffset, e.byteLength)),
              void (this.write = "writeOffset" in t ? t.writeOffset : this.data.byteLength)
            );
          (this.data = new DataView(new ArrayBuffer(0))),
            (this.write = 0),
            null != e && this.putBytes(e),
            "writeOffset" in t && (this.write = t.writeOffset);
        }),
        (o.DataBuffer.prototype.length = function () {
          return this.write - this.read;
        }),
        (o.DataBuffer.prototype.isEmpty = function () {
          return this.length() <= 0;
        }),
        (o.DataBuffer.prototype.accommodate = function (e, t) {
          if (this.length() >= e) return this;
          t = Math.max(t || this.growSize, e);
          var r = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength),
            s = new Uint8Array(this.length() + t);
          return s.set(r), (this.data = new DataView(s.buffer)), this;
        }),
        (o.DataBuffer.prototype.putByte = function (e) {
          return this.accommodate(1), this.data.setUint8(this.write++, e), this;
        }),
        (o.DataBuffer.prototype.fillWithByte = function (e, t) {
          this.accommodate(t);
          for (var r = 0; r < t; ++r) this.data.setUint8(e);
          return this;
        }),
        (o.DataBuffer.prototype.putBytes = function (e, t) {
          if (o.isArrayBufferView(e)) {
            var r = (s = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)).byteLength - s.byteOffset;
            return this.accommodate(r), new Uint8Array(this.data.buffer, this.write).set(s), (this.write += r), this;
          }
          if (o.isArrayBuffer(e)) {
            var s = new Uint8Array(e);
            return this.accommodate(s.byteLength), new Uint8Array(this.data.buffer).set(s, this.write), (this.write += s.byteLength), this;
          }
          if (
            e instanceof o.DataBuffer ||
            ("object" == typeof e && "number" == typeof e.read && "number" == typeof e.write && o.isArrayBufferView(e.data))
          )
            return (
              (s = new Uint8Array(e.data.byteLength, e.read, e.length())),
              this.accommodate(s.byteLength),
              new Uint8Array(e.data.byteLength, this.write).set(s),
              (this.write += s.byteLength),
              this
            );
          if ((e instanceof o.ByteStringBuffer && ((e = e.data), (t = "binary")), (t = t || "binary"), "string" == typeof e)) {
            var i;
            if ("hex" === t)
              return (
                this.accommodate(Math.ceil(e.length / 2)),
                (i = new Uint8Array(this.data.buffer, this.write)),
                (this.write += o.binary.hex.decode(e, i, this.write)),
                this
              );
            if ("base64" === t)
              return (
                this.accommodate(3 * Math.ceil(e.length / 4)),
                (i = new Uint8Array(this.data.buffer, this.write)),
                (this.write += o.binary.base64.decode(e, i, this.write)),
                this
              );
            if (("utf8" === t && ((e = o.encodeUtf8(e)), (t = "binary")), "binary" === t || "raw" === t))
              return (
                this.accommodate(e.length), (i = new Uint8Array(this.data.buffer, this.write)), (this.write += o.binary.raw.decode(i)), this
              );
            if ("utf16" === t)
              return (
                this.accommodate(2 * e.length),
                (i = new Uint16Array(this.data.buffer, this.write)),
                (this.write += o.text.utf16.encode(i)),
                this
              );
            throw new Error("Invalid encoding: " + t);
          }
          throw Error("Invalid parameter: " + e);
        }),
        (o.DataBuffer.prototype.putBuffer = function (e) {
          return this.putBytes(e), e.clear(), this;
        }),
        (o.DataBuffer.prototype.putString = function (e) {
          return this.putBytes(e, "utf16");
        }),
        (o.DataBuffer.prototype.putInt16 = function (e) {
          return this.accommodate(2), this.data.setInt16(this.write, e), (this.write += 2), this;
        }),
        (o.DataBuffer.prototype.putInt24 = function (e) {
          return (
            this.accommodate(3),
            this.data.setInt16(this.write, (e >> 8) & 65535),
            this.data.setInt8(this.write, (e >> 16) & 255),
            (this.write += 3),
            this
          );
        }),
        (o.DataBuffer.prototype.putInt32 = function (e) {
          return this.accommodate(4), this.data.setInt32(this.write, e), (this.write += 4), this;
        }),
        (o.DataBuffer.prototype.putInt16Le = function (e) {
          return this.accommodate(2), this.data.setInt16(this.write, e, !0), (this.write += 2), this;
        }),
        (o.DataBuffer.prototype.putInt24Le = function (e) {
          return (
            this.accommodate(3),
            this.data.setInt8(this.write, (e >> 16) & 255),
            this.data.setInt16(this.write, (e >> 8) & 65535, !0),
            (this.write += 3),
            this
          );
        }),
        (o.DataBuffer.prototype.putInt32Le = function (e) {
          return this.accommodate(4), this.data.setInt32(this.write, e, !0), (this.write += 4), this;
        }),
        (o.DataBuffer.prototype.putInt = function (e, t) {
          c(t), this.accommodate(t / 8);
          do {
            (t -= 8), this.data.setInt8(this.write++, (e >> t) & 255);
          } while (t > 0);
          return this;
        }),
        (o.DataBuffer.prototype.putSignedInt = function (e, t) {
          return c(t), this.accommodate(t / 8), e < 0 && (e += 2 << (t - 1)), this.putInt(e, t);
        }),
        (o.DataBuffer.prototype.getByte = function () {
          return this.data.getInt8(this.read++);
        }),
        (o.DataBuffer.prototype.getInt16 = function () {
          var e = this.data.getInt16(this.read);
          return (this.read += 2), e;
        }),
        (o.DataBuffer.prototype.getInt24 = function () {
          var e = (this.data.getInt16(this.read) << 8) ^ this.data.getInt8(this.read + 2);
          return (this.read += 3), e;
        }),
        (o.DataBuffer.prototype.getInt32 = function () {
          var e = this.data.getInt32(this.read);
          return (this.read += 4), e;
        }),
        (o.DataBuffer.prototype.getInt16Le = function () {
          var e = this.data.getInt16(this.read, !0);
          return (this.read += 2), e;
        }),
        (o.DataBuffer.prototype.getInt24Le = function () {
          var e = this.data.getInt8(this.read) ^ (this.data.getInt16(this.read + 1, !0) << 8);
          return (this.read += 3), e;
        }),
        (o.DataBuffer.prototype.getInt32Le = function () {
          var e = this.data.getInt32(this.read, !0);
          return (this.read += 4), e;
        }),
        (o.DataBuffer.prototype.getInt = function (e) {
          c(e);
          var t = 0;
          do {
            (t = (t << 8) + this.data.getInt8(this.read++)), (e -= 8);
          } while (e > 0);
          return t;
        }),
        (o.DataBuffer.prototype.getSignedInt = function (e) {
          var t = this.getInt(e),
            r = 2 << (e - 2);
          return t >= r && (t -= r << 1), t;
        }),
        (o.DataBuffer.prototype.getBytes = function (e) {
          var t;
          return (
            e
              ? ((e = Math.min(this.length(), e)), (t = this.data.slice(this.read, this.read + e)), (this.read += e))
              : 0 === e
              ? (t = "")
              : ((t = 0 === this.read ? this.data : this.data.slice(this.read)), this.clear()),
            t
          );
        }),
        (o.DataBuffer.prototype.bytes = function (e) {
          return void 0 === e ? this.data.slice(this.read) : this.data.slice(this.read, this.read + e);
        }),
        (o.DataBuffer.prototype.at = function (e) {
          return this.data.getUint8(this.read + e);
        }),
        (o.DataBuffer.prototype.setAt = function (e, t) {
          return this.data.setUint8(e, t), this;
        }),
        (o.DataBuffer.prototype.last = function () {
          return this.data.getUint8(this.write - 1);
        }),
        (o.DataBuffer.prototype.copy = function () {
          return new o.DataBuffer(this);
        }),
        (o.DataBuffer.prototype.compact = function () {
          if (this.read > 0) {
            var e = new Uint8Array(this.data.buffer, this.read),
              t = new Uint8Array(e.byteLength);
            t.set(e), (this.data = new DataView(t)), (this.write -= this.read), (this.read = 0);
          }
          return this;
        }),
        (o.DataBuffer.prototype.clear = function () {
          return (this.data = new DataView(new ArrayBuffer(0))), (this.read = this.write = 0), this;
        }),
        (o.DataBuffer.prototype.truncate = function (e) {
          return (this.write = Math.max(0, this.length() - e)), (this.read = Math.min(this.read, this.write)), this;
        }),
        (o.DataBuffer.prototype.toHex = function () {
          for (var e = "", t = this.read; t < this.data.byteLength; ++t) {
            var r = this.data.getUint8(t);
            r < 16 && (e += "0"), (e += r.toString(16));
          }
          return e;
        }),
        (o.DataBuffer.prototype.toString = function (e) {
          var t = new Uint8Array(this.data, this.read, this.length());
          if ("binary" === (e = e || "utf8") || "raw" === e) return o.binary.raw.encode(t);
          if ("hex" === e) return o.binary.hex.encode(t);
          if ("base64" === e) return o.binary.base64.encode(t);
          if ("utf8" === e) return o.text.utf8.decode(t);
          if ("utf16" === e) return o.text.utf16.decode(t);
          throw new Error("Invalid encoding: " + e);
        }),
        (o.createBuffer = function (e, t) {
          return (t = t || "raw"), void 0 !== e && "utf8" === t && (e = o.encodeUtf8(e)), new o.ByteBuffer(e);
        }),
        (o.fillString = function (e, t) {
          for (var r = ""; t > 0; ) 1 & t && (r += e), (t >>>= 1) > 0 && (e += e);
          return r;
        }),
        (o.xorBytes = function (e, t, r) {
          for (var s = "", i = "", n = "", a = 0, o = 0; r > 0; --r, ++a)
            (i = e.charCodeAt(a) ^ t.charCodeAt(a)), o >= 10 && ((s += n), (n = ""), (o = 0)), (n += String.fromCharCode(i)), ++o;
          return s + n;
        }),
        (o.hexToBytes = function (e) {
          var t = "",
            r = 0;
          for (!0 & e.length && ((r = 1), (t += String.fromCharCode(parseInt(e[0], 16)))); r < e.length; r += 2)
            t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
          return t;
        }),
        (o.bytesToHex = function (e) {
          return o.createBuffer(e).toHex();
        }),
        (o.int32ToBytes = function (e) {
          return (
            String.fromCharCode((e >> 24) & 255) +
            String.fromCharCode((e >> 16) & 255) +
            String.fromCharCode((e >> 8) & 255) +
            String.fromCharCode(255 & e)
          );
        });
      var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        d = [
          62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
          13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
          39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
        ],
        p = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      (o.encode64 = function (e, t) {
        for (var r, s, i, n = "", a = "", o = 0; o < e.length; )
          (r = e.charCodeAt(o++)),
            (s = e.charCodeAt(o++)),
            (i = e.charCodeAt(o++)),
            (n += u.charAt(r >> 2)),
            (n += u.charAt(((3 & r) << 4) | (s >> 4))),
            isNaN(s) ? (n += "==") : ((n += u.charAt(((15 & s) << 2) | (i >> 6))), (n += isNaN(i) ? "=" : u.charAt(63 & i))),
            t && n.length > t && ((a += n.substr(0, t) + "\r\n"), (n = n.substr(t)));
        return a + n;
      }),
        (o.decode64 = function (e) {
          e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
          for (var t, r, s, i, n = "", a = 0; a < e.length; )
            (t = d[e.charCodeAt(a++) - 43]),
              (r = d[e.charCodeAt(a++) - 43]),
              (s = d[e.charCodeAt(a++) - 43]),
              (i = d[e.charCodeAt(a++) - 43]),
              (n += String.fromCharCode((t << 2) | (r >> 4))),
              64 !== s &&
                ((n += String.fromCharCode(((15 & r) << 4) | (s >> 2))), 64 !== i && (n += String.fromCharCode(((3 & s) << 6) | i)));
          return n;
        }),
        (o.encodeUtf8 = function (e) {
          return unescape(encodeURIComponent(e));
        }),
        (o.decodeUtf8 = function (e) {
          return decodeURIComponent(escape(e));
        }),
        (o.binary = { raw: {}, hex: {}, base64: {}, base58: {}, baseN: { encode: a.encode, decode: a.decode } }),
        (o.binary.raw.encode = function (e) {
          return String.fromCharCode.apply(null, e);
        }),
        (o.binary.raw.decode = function (e, t, r) {
          var s = t;
          s || (s = new Uint8Array(e.length));
          for (var i = (r = r || 0), n = 0; n < e.length; ++n) s[i++] = e.charCodeAt(n);
          return t ? i - r : s;
        }),
        (o.binary.hex.encode = o.bytesToHex),
        (o.binary.hex.decode = function (e, t, r) {
          var s = t;
          s || (s = new Uint8Array(Math.ceil(e.length / 2)));
          var i = 0,
            n = (r = r || 0);
          for (1 & e.length && ((i = 1), (s[n++] = parseInt(e[0], 16))); i < e.length; i += 2) s[n++] = parseInt(e.substr(i, 2), 16);
          return t ? n - r : s;
        }),
        (o.binary.base64.encode = function (e, t) {
          for (var r, s, i, n = "", a = "", o = 0; o < e.byteLength; )
            (r = e[o++]),
              (s = e[o++]),
              (i = e[o++]),
              (n += u.charAt(r >> 2)),
              (n += u.charAt(((3 & r) << 4) | (s >> 4))),
              isNaN(s) ? (n += "==") : ((n += u.charAt(((15 & s) << 2) | (i >> 6))), (n += isNaN(i) ? "=" : u.charAt(63 & i))),
              t && n.length > t && ((a += n.substr(0, t) + "\r\n"), (n = n.substr(t)));
          return a + n;
        }),
        (o.binary.base64.decode = function (e, t, r) {
          var s,
            i,
            n,
            a,
            o = t;
          o || (o = new Uint8Array(3 * Math.ceil(e.length / 4))), (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""));
          for (var c = 0, l = (r = r || 0); c < e.length; )
            (s = d[e.charCodeAt(c++) - 43]),
              (i = d[e.charCodeAt(c++) - 43]),
              (n = d[e.charCodeAt(c++) - 43]),
              (a = d[e.charCodeAt(c++) - 43]),
              (o[l++] = (s << 2) | (i >> 4)),
              64 !== n && ((o[l++] = ((15 & i) << 4) | (n >> 2)), 64 !== a && (o[l++] = ((3 & n) << 6) | a));
          return t ? l - r : o.subarray(0, l);
        }),
        (o.binary.base58.encode = function (e, t) {
          return o.binary.baseN.encode(e, p, t);
        }),
        (o.binary.base58.decode = function (e, t) {
          return o.binary.baseN.decode(e, p, t);
        }),
        (o.text = { utf8: {}, utf16: {} }),
        (o.text.utf8.encode = function (e, t, r) {
          e = o.encodeUtf8(e);
          var s = t;
          s || (s = new Uint8Array(e.length));
          for (var i = (r = r || 0), n = 0; n < e.length; ++n) s[i++] = e.charCodeAt(n);
          return t ? i - r : s;
        }),
        (o.text.utf8.decode = function (e) {
          return o.decodeUtf8(String.fromCharCode.apply(null, e));
        }),
        (o.text.utf16.encode = function (e, t, r) {
          var s = t;
          s || (s = new Uint8Array(2 * e.length));
          for (var i = new Uint16Array(s.buffer), n = (r = r || 0), a = r, o = 0; o < e.length; ++o) (i[a++] = e.charCodeAt(o)), (n += 2);
          return t ? n - r : s;
        }),
        (o.text.utf16.decode = function (e) {
          return String.fromCharCode.apply(null, new Uint16Array(e.buffer));
        }),
        (o.deflate = function (e, t, r) {
          if (((t = o.decode64(e.deflate(o.encode64(t)).rval)), r)) {
            var s = 2;
            32 & t.charCodeAt(1) && (s = 6), (t = t.substring(s, t.length - 4));
          }
          return t;
        }),
        (o.inflate = function (e, t, r) {
          var s = e.inflate(o.encode64(t)).rval;
          return null === s ? null : o.decode64(s);
        });
      var h = function (e, t, r) {
          if (!e) throw new Error("WebStorage not available.");
          var s;
          if (
            (null === r ? (s = e.removeItem(t)) : ((r = o.encode64(JSON.stringify(r))), (s = e.setItem(t, r))),
            void 0 !== s && !0 !== s.rval)
          ) {
            var i = new Error(s.error.message);
            throw ((i.id = s.error.id), (i.name = s.error.name), i);
          }
        },
        f = function (e, t) {
          if (!e) throw new Error("WebStorage not available.");
          var r = e.getItem(t);
          if (e.init)
            if (null === r.rval) {
              if (r.error) {
                var s = new Error(r.error.message);
                throw ((s.id = r.error.id), (s.name = r.error.name), s);
              }
              r = null;
            } else r = r.rval;
          return null !== r && (r = JSON.parse(o.decode64(r))), r;
        },
        g = function (e, t, r, s) {
          var i = f(e, t);
          null === i && (i = {}), (i[r] = s), h(e, t, i);
        },
        y = function (e, t, r) {
          var s = f(e, t);
          return null !== s && (s = r in s ? s[r] : null), s;
        },
        E = function (e, t, r) {
          var s = f(e, t);
          if (null !== s && r in s) {
            delete s[r];
            var i = !0;
            for (var n in s) {
              i = !1;
              break;
            }
            i && (s = null), h(e, t, s);
          }
        },
        m = function (e, t) {
          h(e, t, null);
        },
        v = function (e, t, r) {
          var s,
            i = null;
          void 0 === r && (r = ["web", "flash"]);
          var n = !1,
            a = null;
          for (var o in r) {
            s = r[o];
            try {
              if ("flash" === s || "both" === s) {
                if (null === t[0]) throw new Error("Flash local storage not available.");
                (i = e.apply(this, t)), (n = "flash" === s);
              }
              ("web" !== s && "both" !== s) || ((t[0] = localStorage), (i = e.apply(this, t)), (n = !0));
            } catch (e) {
              a = e;
            }
            if (n) break;
          }
          if (!n) throw a;
          return i;
        };
      (o.setItem = function (e, t, r, s, i) {
        v(g, arguments, i);
      }),
        (o.getItem = function (e, t, r, s) {
          return v(y, arguments, s);
        }),
        (o.removeItem = function (e, t, r, s) {
          v(E, arguments, s);
        }),
        (o.clearItems = function (e, t, r) {
          v(m, arguments, r);
        }),
        (o.isEmpty = function (e) {
          for (var t in e) if (e.hasOwnProperty(t)) return !1;
          return !0;
        }),
        (o.format = function (e) {
          for (var t, r, s = /%./g, i = 0, n = [], a = 0; (t = s.exec(e)); ) {
            (r = e.substring(a, s.lastIndex - 2)).length > 0 && n.push(r), (a = s.lastIndex);
            var o = t[0][1];
            switch (o) {
              case "s":
              case "o":
                i < arguments.length ? n.push(arguments[1 + i++]) : n.push("<?>");
                break;
              case "%":
                n.push("%");
                break;
              default:
                n.push("<%" + o + "?>");
            }
          }
          return n.push(e.substring(a)), n.join("");
        }),
        (o.formatNumber = function (e, t, r, s) {
          var i = e,
            n = isNaN((t = Math.abs(t))) ? 2 : t,
            a = void 0 === r ? "," : r,
            o = void 0 === s ? "." : s,
            c = i < 0 ? "-" : "",
            l = parseInt((i = Math.abs(+i || 0).toFixed(n)), 10) + "",
            u = l.length > 3 ? l.length % 3 : 0;
          return (
            c +
            (u ? l.substr(0, u) + o : "") +
            l.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + o) +
            (n
              ? a +
                Math.abs(i - l)
                  .toFixed(n)
                  .slice(2)
              : "")
          );
        }),
        (o.formatSize = function (e) {
          return e >= 1073741824
            ? o.formatNumber(e / 1073741824, 2, ".", "") + " GiB"
            : e >= 1048576
            ? o.formatNumber(e / 1048576, 2, ".", "") + " MiB"
            : e >= 1024
            ? o.formatNumber(e / 1024, 0) + " KiB"
            : o.formatNumber(e, 0) + " bytes";
        }),
        (o.bytesFromIP = function (e) {
          return -1 !== e.indexOf(".") ? o.bytesFromIPv4(e) : -1 !== e.indexOf(":") ? o.bytesFromIPv6(e) : null;
        }),
        (o.bytesFromIPv4 = function (e) {
          if (4 !== (e = e.split(".")).length) return null;
          for (var t = o.createBuffer(), r = 0; r < e.length; ++r) {
            var s = parseInt(e[r], 10);
            if (isNaN(s)) return null;
            t.putByte(s);
          }
          return t.getBytes();
        }),
        (o.bytesFromIPv6 = function (e) {
          for (
            var t = 0,
              r =
                2 *
                (8 -
                  (e = e.split(":").filter(function (e) {
                    return 0 === e.length && ++t, !0;
                  })).length +
                  t),
              s = o.createBuffer(),
              i = 0;
            i < 8;
            ++i
          )
            if (e[i] && 0 !== e[i].length) {
              var n = o.hexToBytes(e[i]);
              n.length < 2 && s.putByte(0), s.putBytes(n);
            } else s.fillWithByte(0, r), (r = 0);
          return s.getBytes();
        }),
        (o.bytesToIP = function (e) {
          return 4 === e.length ? o.bytesToIPv4(e) : 16 === e.length ? o.bytesToIPv6(e) : null;
        }),
        (o.bytesToIPv4 = function (e) {
          if (4 !== e.length) return null;
          for (var t = [], r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
          return t.join(".");
        }),
        (o.bytesToIPv6 = function (e) {
          if (16 !== e.length) return null;
          for (var t = [], r = [], s = 0, i = 0; i < e.length; i += 2) {
            for (var n = o.bytesToHex(e[i] + e[i + 1]); "0" === n[0] && "0" !== n; ) n = n.substr(1);
            if ("0" === n) {
              var a = r[r.length - 1],
                c = t.length;
              a && c === a.end + 1
                ? ((a.end = c), a.end - a.start > r[s].end - r[s].start && (s = r.length - 1))
                : r.push({ start: c, end: c });
            }
            t.push(n);
          }
          if (r.length > 0) {
            var l = r[s];
            l.end - l.start > 0 && (t.splice(l.start, l.end - l.start + 1, ""), 0 === l.start && t.unshift(""), 7 === l.end && t.push(""));
          }
          return t.join(":");
        }),
        (o.estimateCores = function (e, t) {
          if (("function" == typeof e && ((t = e), (e = {})), (e = e || {}), "cores" in o && !e.update)) return t(null, o.cores);
          if ("undefined" != typeof navigator && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0)
            return (o.cores = navigator.hardwareConcurrency), t(null, o.cores);
          if ("undefined" == typeof Worker) return (o.cores = 1), t(null, o.cores);
          if ("undefined" == typeof Blob) return (o.cores = 2), t(null, o.cores);
          var r = URL.createObjectURL(
            new Blob(
              [
                "(",
                function () {
                  self.addEventListener("message", function (e) {
                    for (var t = Date.now(), r = t + 4; Date.now() < r; );
                    self.postMessage({ st: t, et: r });
                  });
                }.toString(),
                ")()"
              ],
              { type: "application/javascript" }
            )
          );
          !(function e(s, i, n) {
            if (0 === i) {
              var a = Math.floor(
                s.reduce(function (e, t) {
                  return e + t;
                }, 0) / s.length
              );
              return (o.cores = Math.max(1, a)), URL.revokeObjectURL(r), t(null, o.cores);
            }
            !(function (e, t) {
              for (var s = [], i = [], n = 0; n < e; ++n) {
                var a = new Worker(r);
                a.addEventListener("message", function (r) {
                  if ((i.push(r.data), i.length === e)) {
                    for (var n = 0; n < e; ++n) s[n].terminate();
                    t(null, i);
                  }
                }),
                  s.push(a);
              }
              for (n = 0; n < e; ++n) s[n].postMessage(n);
            })(n, function (t, r) {
              s.push(
                (function (e, t) {
                  for (var r = [], s = 0; s < e; ++s)
                    for (var i = t[s], n = (r[s] = []), a = 0; a < e; ++a)
                      if (s !== a) {
                        var o = t[a];
                        ((i.st > o.st && i.st < o.et) || (o.st > i.st && o.st < i.et)) && n.push(a);
                      }
                  return r.reduce(function (e, t) {
                    return Math.max(e, t.length);
                  }, 0);
                })(n, r)
              ),
                e(s, i - 1, n);
            });
          })([], 5, 16);
        });
    },
    304811: (e, t, r) => {
      var s = r(883418);
      r(443882), r(810001), r(986875), r(643730), r(239028), r(843793), r(830115), r(695032), r(209120), r(563290);
      var i = s.asn1,
        n = (e.exports = s.pki = s.pki || {}),
        a = n.oids,
        o = {};
      (o.CN = a.commonName),
        (o.commonName = "CN"),
        (o.C = a.countryName),
        (o.countryName = "C"),
        (o.L = a.localityName),
        (o.localityName = "L"),
        (o.ST = a.stateOrProvinceName),
        (o.stateOrProvinceName = "ST"),
        (o.O = a.organizationName),
        (o.organizationName = "O"),
        (o.OU = a.organizationalUnitName),
        (o.organizationalUnitName = "OU"),
        (o.E = a.emailAddress),
        (o.emailAddress = "E");
      var c = s.pki.rsa.publicKeyValidator,
        l = {
          name: "Certificate",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "Certificate.TBSCertificate",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              captureAsn1: "tbsCertificate",
              value: [
                {
                  name: "Certificate.TBSCertificate.version",
                  tagClass: i.Class.CONTEXT_SPECIFIC,
                  type: 0,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.version.integer",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.INTEGER,
                      constructed: !1,
                      capture: "certVersion"
                    }
                  ]
                },
                {
                  name: "Certificate.TBSCertificate.serialNumber",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.INTEGER,
                  constructed: !1,
                  capture: "certSerialNumber"
                },
                {
                  name: "Certificate.TBSCertificate.signature",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.signature.algorithm",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.OID,
                      constructed: !1,
                      capture: "certinfoSignatureOid"
                    },
                    {
                      name: "Certificate.TBSCertificate.signature.parameters",
                      tagClass: i.Class.UNIVERSAL,
                      optional: !0,
                      captureAsn1: "certinfoSignatureParams"
                    }
                  ]
                },
                {
                  name: "Certificate.TBSCertificate.issuer",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "certIssuer"
                },
                {
                  name: "Certificate.TBSCertificate.validity",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.validity.notBefore (utc)",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.UTCTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity1UTCTime"
                    },
                    {
                      name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.GENERALIZEDTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity2GeneralizedTime"
                    },
                    {
                      name: "Certificate.TBSCertificate.validity.notAfter (utc)",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.UTCTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity3UTCTime"
                    },
                    {
                      name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.GENERALIZEDTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity4GeneralizedTime"
                    }
                  ]
                },
                {
                  name: "Certificate.TBSCertificate.subject",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "certSubject"
                },
                c,
                {
                  name: "Certificate.TBSCertificate.issuerUniqueID",
                  tagClass: i.Class.CONTEXT_SPECIFIC,
                  type: 1,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.issuerUniqueID.id",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.BITSTRING,
                      constructed: !1,
                      captureBitStringValue: "certIssuerUniqueId"
                    }
                  ]
                },
                {
                  name: "Certificate.TBSCertificate.subjectUniqueID",
                  tagClass: i.Class.CONTEXT_SPECIFIC,
                  type: 2,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.subjectUniqueID.id",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.BITSTRING,
                      constructed: !1,
                      captureBitStringValue: "certSubjectUniqueId"
                    }
                  ]
                },
                {
                  name: "Certificate.TBSCertificate.extensions",
                  tagClass: i.Class.CONTEXT_SPECIFIC,
                  type: 3,
                  constructed: !0,
                  captureAsn1: "certExtensions",
                  optional: !0
                }
              ]
            },
            {
              name: "Certificate.signatureAlgorithm",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "Certificate.signatureAlgorithm.algorithm",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "certSignatureOid"
                },
                {
                  name: "Certificate.TBSCertificate.signature.parameters",
                  tagClass: i.Class.UNIVERSAL,
                  optional: !0,
                  captureAsn1: "certSignatureParams"
                }
              ]
            },
            {
              name: "Certificate.signatureValue",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.BITSTRING,
              constructed: !1,
              captureBitStringValue: "certSignature"
            }
          ]
        },
        u = {
          name: "rsapss",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "rsapss.hashAlgorithm",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              type: 0,
              constructed: !0,
              value: [
                {
                  name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Class.SEQUENCE,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.OID,
                      constructed: !1,
                      capture: "hashOid"
                    }
                  ]
                }
              ]
            },
            {
              name: "rsapss.maskGenAlgorithm",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              type: 1,
              constructed: !0,
              value: [
                {
                  name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Class.SEQUENCE,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.OID,
                      constructed: !1,
                      capture: "maskGenOid"
                    },
                    {
                      name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
                      tagClass: i.Class.UNIVERSAL,
                      type: i.Type.SEQUENCE,
                      constructed: !0,
                      value: [
                        {
                          name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
                          tagClass: i.Class.UNIVERSAL,
                          type: i.Type.OID,
                          constructed: !1,
                          capture: "maskGenHashOid"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "rsapss.saltLength",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              type: 2,
              optional: !0,
              value: [
                {
                  name: "rsapss.saltLength.saltLength",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Class.INTEGER,
                  constructed: !1,
                  capture: "saltLength"
                }
              ]
            },
            {
              name: "rsapss.trailerField",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              type: 3,
              optional: !0,
              value: [
                { name: "rsapss.trailer.trailer", tagClass: i.Class.UNIVERSAL, type: i.Class.INTEGER, constructed: !1, capture: "trailer" }
              ]
            }
          ]
        },
        d = {
          name: "CertificationRequestInfo",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "certificationRequestInfo",
          value: [
            {
              name: "CertificationRequestInfo.integer",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "certificationRequestInfoVersion"
            },
            {
              name: "CertificationRequestInfo.subject",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              captureAsn1: "certificationRequestInfoSubject"
            },
            c,
            {
              name: "CertificationRequestInfo.attributes",
              tagClass: i.Class.CONTEXT_SPECIFIC,
              type: 0,
              constructed: !0,
              optional: !0,
              capture: "certificationRequestInfoAttributes",
              value: [
                {
                  name: "CertificationRequestInfo.attributes",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    { name: "CertificationRequestInfo.attributes.type", tagClass: i.Class.UNIVERSAL, type: i.Type.OID, constructed: !1 },
                    { name: "CertificationRequestInfo.attributes.value", tagClass: i.Class.UNIVERSAL, type: i.Type.SET, constructed: !0 }
                  ]
                }
              ]
            }
          ]
        },
        p = {
          name: "CertificationRequest",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "csr",
          value: [
            d,
            {
              name: "CertificationRequest.signatureAlgorithm",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "CertificationRequest.signatureAlgorithm.algorithm",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "csrSignatureOid"
                },
                {
                  name: "CertificationRequest.signatureAlgorithm.parameters",
                  tagClass: i.Class.UNIVERSAL,
                  optional: !0,
                  captureAsn1: "csrSignatureParams"
                }
              ]
            },
            {
              name: "CertificationRequest.signature",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.BITSTRING,
              constructed: !1,
              captureBitStringValue: "csrSignature"
            }
          ]
        };
      function h(e, t) {
        "string" == typeof t && (t = { shortName: t });
        for (var r, s = null, i = 0; null === s && i < e.attributes.length; ++i)
          (r = e.attributes[i]),
            ((t.type && t.type === r.type) || (t.name && t.name === r.name) || (t.shortName && t.shortName === r.shortName)) && (s = r);
        return s;
      }
      (n.RDNAttributesAsArray = function (e, t) {
        for (var r, s, n, c = [], l = 0; l < e.value.length; ++l) {
          r = e.value[l];
          for (var u = 0; u < r.value.length; ++u)
            (n = {}),
              (s = r.value[u]),
              (n.type = i.derToOid(s.value[0].value)),
              (n.value = s.value[1].value),
              (n.valueTagClass = s.value[1].type),
              n.type in a && ((n.name = a[n.type]), n.name in o && (n.shortName = o[n.name])),
              t && (t.update(n.type), t.update(n.value)),
              c.push(n);
        }
        return c;
      }),
        (n.CRIAttributesAsArray = function (e) {
          for (var t = [], r = 0; r < e.length; ++r)
            for (var s = e[r], c = i.derToOid(s.value[0].value), l = s.value[1].value, u = 0; u < l.length; ++u) {
              var d = {};
              if (
                ((d.type = c),
                (d.value = l[u].value),
                (d.valueTagClass = l[u].type),
                d.type in a && ((d.name = a[d.type]), d.name in o && (d.shortName = o[d.name])),
                d.type === a.extensionRequest)
              ) {
                d.extensions = [];
                for (var p = 0; p < d.value.length; ++p) d.extensions.push(n.certificateExtensionFromAsn1(d.value[p]));
              }
              t.push(d);
            }
          return t;
        });
      var f = function (e, t, r) {
          var s = {};
          if (e !== a["RSASSA-PSS"]) return s;
          r && (s = { hash: { algorithmOid: a.sha1 }, mgf: { algorithmOid: a.mgf1, hash: { algorithmOid: a.sha1 } }, saltLength: 20 });
          var n = {},
            o = [];
          if (!i.validate(t, u, n, o)) {
            var c = new Error("Cannot read RSASSA-PSS parameter block.");
            throw ((c.errors = o), c);
          }
          return (
            void 0 !== n.hashOid && ((s.hash = s.hash || {}), (s.hash.algorithmOid = i.derToOid(n.hashOid))),
            void 0 !== n.maskGenOid &&
              ((s.mgf = s.mgf || {}),
              (s.mgf.algorithmOid = i.derToOid(n.maskGenOid)),
              (s.mgf.hash = s.mgf.hash || {}),
              (s.mgf.hash.algorithmOid = i.derToOid(n.maskGenHashOid))),
            void 0 !== n.saltLength && (s.saltLength = n.saltLength.charCodeAt(0)),
            s
          );
        },
        g = function (e) {
          switch (a[e.signatureOid]) {
            case "sha1WithRSAEncryption":
            case "sha1WithRSASignature":
              return s.md.sha1.create();
            case "md5WithRSAEncryption":
              return s.md.md5.create();
            case "sha256WithRSAEncryption":
            case "RSASSA-PSS":
              return s.md.sha256.create();
            case "sha384WithRSAEncryption":
              return s.md.sha384.create();
            case "sha512WithRSAEncryption":
              return s.md.sha512.create();
            default:
              var t = new Error("Could not compute " + e.type + " digest. Unknown signature OID.");
              throw ((t.signatureOid = e.signatureOid), t);
          }
        },
        y = function (e) {
          var t,
            r = e.certificate;
          switch (r.signatureOid) {
            case a.sha1WithRSAEncryption:
            case a.sha1WithRSASignature:
              break;
            case a["RSASSA-PSS"]:
              var i, n, o;
              if (void 0 === (i = a[r.signatureParameters.mgf.hash.algorithmOid]) || void 0 === s.md[i])
                throw (
                  (((o = new Error("Unsupported MGF hash function.")).oid = r.signatureParameters.mgf.hash.algorithmOid), (o.name = i), o)
                );
              if (void 0 === (n = a[r.signatureParameters.mgf.algorithmOid]) || void 0 === s.mgf[n])
                throw (((o = new Error("Unsupported MGF function.")).oid = r.signatureParameters.mgf.algorithmOid), (o.name = n), o);
              if (
                ((n = s.mgf[n].create(s.md[i].create())), void 0 === (i = a[r.signatureParameters.hash.algorithmOid]) || void 0 === s.md[i])
              )
                throw (
                  (((o = new Error("Unsupported RSASSA-PSS hash function.")).oid = r.signatureParameters.hash.algorithmOid),
                  (o.name = i),
                  o)
                );
              t = s.pss.create(s.md[i].create(), n, r.signatureParameters.saltLength);
          }
          return r.publicKey.verify(e.md.digest().getBytes(), e.signature, t);
        };
      function E(e) {
        for (var t, r, n = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []), a = e.attributes, o = 0; o < a.length; ++o) {
          var c = (t = a[o]).value,
            l = i.Type.PRINTABLESTRING;
          "valueTagClass" in t && (l = t.valueTagClass) === i.Type.UTF8 && (c = s.util.encodeUtf8(c)),
            (r = i.create(i.Class.UNIVERSAL, i.Type.SET, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(t.type).getBytes()),
                i.create(i.Class.UNIVERSAL, l, !1, c)
              ])
            ])),
            n.value.push(r);
        }
        return n;
      }
      function m(e) {
        for (var t, r = 0; r < e.length; ++r) {
          if (
            (void 0 === (t = e[r]).name &&
              (t.type && t.type in n.oids
                ? (t.name = n.oids[t.type])
                : t.shortName && t.shortName in o && (t.name = n.oids[o[t.shortName]])),
            void 0 === t.type)
          ) {
            if (!t.name || !(t.name in n.oids)) throw (((c = new Error("Attribute type not specified.")).attribute = t), c);
            t.type = n.oids[t.name];
          }
          if (
            (void 0 === t.shortName && t.name && t.name in o && (t.shortName = o[t.name]),
            t.type === a.extensionRequest && ((t.valueConstructed = !0), (t.valueTagClass = i.Type.SEQUENCE), !t.value && t.extensions))
          ) {
            t.value = [];
            for (var s = 0; s < t.extensions.length; ++s) t.value.push(n.certificateExtensionToAsn1(v(t.extensions[s])));
          }
          var c;
          if (void 0 === t.value) throw (((c = new Error("Attribute value not specified.")).attribute = t), c);
        }
      }
      function v(e, t) {
        if (((t = t || {}), void 0 === e.name && e.id && e.id in n.oids && (e.name = n.oids[e.id]), void 0 === e.id)) {
          if (!e.name || !(e.name in n.oids)) throw (((C = new Error("Extension ID not specified.")).extension = e), C);
          e.id = n.oids[e.name];
        }
        if (void 0 !== e.value) return e;
        if ("keyUsage" === e.name) {
          var r = 0,
            o = 0,
            c = 0;
          e.digitalSignature && ((o |= 128), (r = 7)),
            e.nonRepudiation && ((o |= 64), (r = 6)),
            e.keyEncipherment && ((o |= 32), (r = 5)),
            e.dataEncipherment && ((o |= 16), (r = 4)),
            e.keyAgreement && ((o |= 8), (r = 3)),
            e.keyCertSign && ((o |= 4), (r = 2)),
            e.cRLSign && ((o |= 2), (r = 1)),
            e.encipherOnly && ((o |= 1), (r = 0)),
            e.decipherOnly && ((c |= 128), (r = 7));
          var l = String.fromCharCode(r);
          0 !== c ? (l += String.fromCharCode(o) + String.fromCharCode(c)) : 0 !== o && (l += String.fromCharCode(o)),
            (e.value = i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, l));
        } else if ("basicConstraints" === e.name)
          (e.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [])),
            e.cA && e.value.value.push(i.create(i.Class.UNIVERSAL, i.Type.BOOLEAN, !1, String.fromCharCode(255))),
            "pathLenConstraint" in e &&
              e.value.value.push(i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, i.integerToDer(e.pathLenConstraint).getBytes()));
        else if ("extKeyUsage" === e.name) {
          e.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          var u = e.value.value;
          for (var d in e)
            !0 === e[d] &&
              (d in a
                ? u.push(i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(a[d]).getBytes()))
                : -1 !== d.indexOf(".") && u.push(i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(d).getBytes())));
        } else if ("nsCertType" === e.name)
          (r = 0),
            (o = 0),
            e.client && ((o |= 128), (r = 7)),
            e.server && ((o |= 64), (r = 6)),
            e.email && ((o |= 32), (r = 5)),
            e.objsign && ((o |= 16), (r = 4)),
            e.reserved && ((o |= 8), (r = 3)),
            e.sslCA && ((o |= 4), (r = 2)),
            e.emailCA && ((o |= 2), (r = 1)),
            e.objCA && ((o |= 1), (r = 0)),
            (l = String.fromCharCode(r)),
            0 !== o && (l += String.fromCharCode(o)),
            (e.value = i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, l));
        else if ("subjectAltName" === e.name || "issuerAltName" === e.name) {
          e.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          for (var p = 0; p < e.altNames.length; ++p) {
            if (((l = (m = e.altNames[p]).value), 7 === m.type && m.ip)) {
              if (null === (l = s.util.bytesFromIP(m.ip)))
                throw (((C = new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.')).extension = e), C);
            } else 8 === m.type && (l = m.oid ? i.oidToDer(i.oidToDer(m.oid)) : i.oidToDer(l));
            e.value.value.push(i.create(i.Class.CONTEXT_SPECIFIC, m.type, !1, l));
          }
        } else if ("nsComment" === e.name && t.cert) {
          if (!/^[\x00-\x7F]*$/.test(e.comment) || e.comment.length < 1 || e.comment.length > 128)
            throw new Error('Invalid "nsComment" content.');
          e.value = i.create(i.Class.UNIVERSAL, i.Type.IA5STRING, !1, e.comment);
        } else if ("subjectKeyIdentifier" === e.name && t.cert) {
          var h = t.cert.generateSubjectKeyIdentifier();
          (e.subjectKeyIdentifier = h.toHex()), (e.value = i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, h.getBytes()));
        } else if ("authorityKeyIdentifier" === e.name && t.cert) {
          if (((e.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [])), (u = e.value.value), e.keyIdentifier)) {
            var f = !0 === e.keyIdentifier ? t.cert.generateSubjectKeyIdentifier().getBytes() : e.keyIdentifier;
            u.push(i.create(i.Class.CONTEXT_SPECIFIC, 0, !1, f));
          }
          if (e.authorityCertIssuer) {
            var g = [i.create(i.Class.CONTEXT_SPECIFIC, 4, !0, [E(!0 === e.authorityCertIssuer ? t.cert.issuer : e.authorityCertIssuer)])];
            u.push(i.create(i.Class.CONTEXT_SPECIFIC, 1, !0, g));
          }
          if (e.serialNumber) {
            var y = s.util.hexToBytes(!0 === e.serialNumber ? t.cert.serialNumber : e.serialNumber);
            u.push(i.create(i.Class.CONTEXT_SPECIFIC, 2, !1, y));
          }
        } else if ("cRLDistributionPoints" === e.name) {
          (e.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [])), (u = e.value.value);
          var m,
            v = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []),
            T = i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, []);
          for (p = 0; p < e.altNames.length; ++p) {
            if (((l = (m = e.altNames[p]).value), 7 === m.type && m.ip)) {
              if (null === (l = s.util.bytesFromIP(m.ip)))
                throw (((C = new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.')).extension = e), C);
            } else 8 === m.type && (l = m.oid ? i.oidToDer(i.oidToDer(m.oid)) : i.oidToDer(l));
            T.value.push(i.create(i.Class.CONTEXT_SPECIFIC, m.type, !1, l));
          }
          v.value.push(i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [T])), u.push(v);
        }
        var C;
        if (void 0 === e.value) throw (((C = new Error("Extension value not specified.")).extension = e), C);
        return e;
      }
      function T(e, t) {
        if (e === a["RSASSA-PSS"]) {
          var r = [];
          return (
            void 0 !== t.hash.algorithmOid &&
              r.push(
                i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
                  i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                    i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(t.hash.algorithmOid).getBytes()),
                    i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, "")
                  ])
                ])
              ),
            void 0 !== t.mgf.algorithmOid &&
              r.push(
                i.create(i.Class.CONTEXT_SPECIFIC, 1, !0, [
                  i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                    i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(t.mgf.algorithmOid).getBytes()),
                    i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                      i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(t.mgf.hash.algorithmOid).getBytes()),
                      i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, "")
                    ])
                  ])
                ])
              ),
            void 0 !== t.saltLength &&
              r.push(
                i.create(i.Class.CONTEXT_SPECIFIC, 2, !0, [
                  i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, i.integerToDer(t.saltLength).getBytes())
                ])
              ),
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, r)
          );
        }
        return i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, "");
      }
      function C(e) {
        var t = i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, []);
        if (0 === e.attributes.length) return t;
        for (var r = e.attributes, n = 0; n < r.length; ++n) {
          var a = r[n],
            o = a.value,
            c = i.Type.UTF8;
          "valueTagClass" in a && (c = a.valueTagClass), c === i.Type.UTF8 && (o = s.util.encodeUtf8(o));
          var l = !1;
          "valueConstructed" in a && (l = a.valueConstructed);
          var u = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(a.type).getBytes()),
            i.create(i.Class.UNIVERSAL, i.Type.SET, !0, [i.create(i.Class.UNIVERSAL, c, l, o)])
          ]);
          t.value.push(u);
        }
        return t;
      }
      (n.certificateFromPem = function (e, t, r) {
        var a = s.pem.decode(e)[0];
        if ("CERTIFICATE" !== a.type && "X509 CERTIFICATE" !== a.type && "TRUSTED CERTIFICATE" !== a.type) {
          var o = new Error(
            'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".'
          );
          throw ((o.headerType = a.type), o);
        }
        if (a.procType && "ENCRYPTED" === a.procType.type) throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
        var c = i.fromDer(a.body, r);
        return n.certificateFromAsn1(c, t);
      }),
        (n.certificateToPem = function (e, t) {
          var r = { type: "CERTIFICATE", body: i.toDer(n.certificateToAsn1(e)).getBytes() };
          return s.pem.encode(r, { maxline: t });
        }),
        (n.publicKeyFromPem = function (e) {
          var t = s.pem.decode(e)[0];
          if ("PUBLIC KEY" !== t.type && "RSA PUBLIC KEY" !== t.type) {
            var r = new Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');
            throw ((r.headerType = t.type), r);
          }
          if (t.procType && "ENCRYPTED" === t.procType.type) throw new Error("Could not convert public key from PEM; PEM is encrypted.");
          var a = i.fromDer(t.body);
          return n.publicKeyFromAsn1(a);
        }),
        (n.publicKeyToPem = function (e, t) {
          var r = { type: "PUBLIC KEY", body: i.toDer(n.publicKeyToAsn1(e)).getBytes() };
          return s.pem.encode(r, { maxline: t });
        }),
        (n.publicKeyToRSAPublicKeyPem = function (e, t) {
          var r = { type: "RSA PUBLIC KEY", body: i.toDer(n.publicKeyToRSAPublicKey(e)).getBytes() };
          return s.pem.encode(r, { maxline: t });
        }),
        (n.getPublicKeyFingerprint = function (e, t) {
          var r,
            a = (t = t || {}).md || s.md.sha1.create();
          switch (t.type || "RSAPublicKey") {
            case "RSAPublicKey":
              r = i.toDer(n.publicKeyToRSAPublicKey(e)).getBytes();
              break;
            case "SubjectPublicKeyInfo":
              r = i.toDer(n.publicKeyToAsn1(e)).getBytes();
              break;
            default:
              throw new Error('Unknown fingerprint type "' + t.type + '".');
          }
          a.start(), a.update(r);
          var o = a.digest();
          if ("hex" === t.encoding) {
            var c = o.toHex();
            return t.delimiter ? c.match(/.{2}/g).join(t.delimiter) : c;
          }
          if ("binary" === t.encoding) return o.getBytes();
          if (t.encoding) throw new Error('Unknown encoding "' + t.encoding + '".');
          return o;
        }),
        (n.certificationRequestFromPem = function (e, t, r) {
          var a = s.pem.decode(e)[0];
          if ("CERTIFICATE REQUEST" !== a.type) {
            var o = new Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');
            throw ((o.headerType = a.type), o);
          }
          if (a.procType && "ENCRYPTED" === a.procType.type)
            throw new Error("Could not convert certification request from PEM; PEM is encrypted.");
          var c = i.fromDer(a.body, r);
          return n.certificationRequestFromAsn1(c, t);
        }),
        (n.certificationRequestToPem = function (e, t) {
          var r = { type: "CERTIFICATE REQUEST", body: i.toDer(n.certificationRequestToAsn1(e)).getBytes() };
          return s.pem.encode(r, { maxline: t });
        }),
        (n.createCertificate = function () {
          var e = { version: 2, serialNumber: "00", signatureOid: null, signature: null, siginfo: {} };
          return (
            (e.siginfo.algorithmOid = null),
            (e.validity = {}),
            (e.validity.notBefore = new Date()),
            (e.validity.notAfter = new Date()),
            (e.issuer = {}),
            (e.issuer.getField = function (t) {
              return h(e.issuer, t);
            }),
            (e.issuer.addField = function (t) {
              m([t]), e.issuer.attributes.push(t);
            }),
            (e.issuer.attributes = []),
            (e.issuer.hash = null),
            (e.subject = {}),
            (e.subject.getField = function (t) {
              return h(e.subject, t);
            }),
            (e.subject.addField = function (t) {
              m([t]), e.subject.attributes.push(t);
            }),
            (e.subject.attributes = []),
            (e.subject.hash = null),
            (e.extensions = []),
            (e.publicKey = null),
            (e.md = null),
            (e.setSubject = function (t, r) {
              m(t), (e.subject.attributes = t), delete e.subject.uniqueId, r && (e.subject.uniqueId = r), (e.subject.hash = null);
            }),
            (e.setIssuer = function (t, r) {
              m(t), (e.issuer.attributes = t), delete e.issuer.uniqueId, r && (e.issuer.uniqueId = r), (e.issuer.hash = null);
            }),
            (e.setExtensions = function (t) {
              for (var r = 0; r < t.length; ++r) v(t[r], { cert: e });
              e.extensions = t;
            }),
            (e.getExtension = function (t) {
              "string" == typeof t && (t = { name: t });
              for (var r, s = null, i = 0; null === s && i < e.extensions.length; ++i)
                (r = e.extensions[i]), ((t.id && r.id === t.id) || (t.name && r.name === t.name)) && (s = r);
              return s;
            }),
            (e.sign = function (t, r) {
              e.md = r || s.md.sha1.create();
              var o = a[e.md.algorithm + "WithRSAEncryption"];
              if (!o) {
                var c = new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");
                throw ((c.algorithm = e.md.algorithm), c);
              }
              (e.signatureOid = e.siginfo.algorithmOid = o), (e.tbsCertificate = n.getTBSCertificate(e));
              var l = i.toDer(e.tbsCertificate);
              e.md.update(l.getBytes()), (e.signature = t.sign(e.md));
            }),
            (e.verify = function (t) {
              var r = !1;
              if (!e.issued(t)) {
                var s = t.issuer,
                  a = e.subject,
                  o = new Error(
                    "The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject."
                  );
                throw ((o.expectedIssuer = a.attributes), (o.actualIssuer = s.attributes), o);
              }
              var c = t.md;
              if (null === c) {
                c = g({ signatureOid: t.signatureOid, type: "certificate" });
                var l = t.tbsCertificate || n.getTBSCertificate(t),
                  u = i.toDer(l);
                c.update(u.getBytes());
              }
              return null !== c && (r = y({ certificate: e, md: c, signature: t.signature })), r;
            }),
            (e.isIssuer = function (t) {
              var r = !1,
                s = e.issuer,
                i = t.subject;
              if (s.hash && i.hash) r = s.hash === i.hash;
              else if (s.attributes.length === i.attributes.length) {
                var n, a;
                r = !0;
                for (var o = 0; r && o < s.attributes.length; ++o)
                  (n = s.attributes[o]), (a = i.attributes[o]), (n.type === a.type && n.value === a.value) || (r = !1);
              }
              return r;
            }),
            (e.issued = function (t) {
              return t.isIssuer(e);
            }),
            (e.generateSubjectKeyIdentifier = function () {
              return n.getPublicKeyFingerprint(e.publicKey, { type: "RSAPublicKey" });
            }),
            (e.verifySubjectKeyIdentifier = function () {
              for (var t = a.subjectKeyIdentifier, r = 0; r < e.extensions.length; ++r) {
                var i = e.extensions[r];
                if (i.id === t) {
                  var n = e.generateSubjectKeyIdentifier().getBytes();
                  return s.util.hexToBytes(i.subjectKeyIdentifier) === n;
                }
              }
              return !1;
            }),
            e
          );
        }),
        (n.certificateFromAsn1 = function (e, t) {
          var r = {},
            a = [];
          if (!i.validate(e, l, r, a)) {
            var o = new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");
            throw ((o.errors = a), o);
          }
          if (i.derToOid(r.publicKeyOid) !== n.oids.rsaEncryption) throw new Error("Cannot read public key. OID is not RSA.");
          var c = n.createCertificate();
          c.version = r.certVersion ? r.certVersion.charCodeAt(0) : 0;
          var u = s.util.createBuffer(r.certSerialNumber);
          (c.serialNumber = u.toHex()),
            (c.signatureOid = s.asn1.derToOid(r.certSignatureOid)),
            (c.signatureParameters = f(c.signatureOid, r.certSignatureParams, !0)),
            (c.siginfo.algorithmOid = s.asn1.derToOid(r.certinfoSignatureOid)),
            (c.siginfo.parameters = f(c.siginfo.algorithmOid, r.certinfoSignatureParams, !1)),
            (c.signature = r.certSignature);
          var d = [];
          if (
            (void 0 !== r.certValidity1UTCTime && d.push(i.utcTimeToDate(r.certValidity1UTCTime)),
            void 0 !== r.certValidity2GeneralizedTime && d.push(i.generalizedTimeToDate(r.certValidity2GeneralizedTime)),
            void 0 !== r.certValidity3UTCTime && d.push(i.utcTimeToDate(r.certValidity3UTCTime)),
            void 0 !== r.certValidity4GeneralizedTime && d.push(i.generalizedTimeToDate(r.certValidity4GeneralizedTime)),
            d.length > 2)
          )
            throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
          if (d.length < 2)
            throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
          if (((c.validity.notBefore = d[0]), (c.validity.notAfter = d[1]), (c.tbsCertificate = r.tbsCertificate), t)) {
            c.md = g({ signatureOid: c.signatureOid, type: "certificate" });
            var p = i.toDer(c.tbsCertificate);
            c.md.update(p.getBytes());
          }
          var y = s.md.sha1.create(),
            E = i.toDer(r.certIssuer);
          y.update(E.getBytes()),
            (c.issuer.getField = function (e) {
              return h(c.issuer, e);
            }),
            (c.issuer.addField = function (e) {
              m([e]), c.issuer.attributes.push(e);
            }),
            (c.issuer.attributes = n.RDNAttributesAsArray(r.certIssuer)),
            r.certIssuerUniqueId && (c.issuer.uniqueId = r.certIssuerUniqueId),
            (c.issuer.hash = y.digest().toHex());
          var v = s.md.sha1.create(),
            T = i.toDer(r.certSubject);
          return (
            v.update(T.getBytes()),
            (c.subject.getField = function (e) {
              return h(c.subject, e);
            }),
            (c.subject.addField = function (e) {
              m([e]), c.subject.attributes.push(e);
            }),
            (c.subject.attributes = n.RDNAttributesAsArray(r.certSubject)),
            r.certSubjectUniqueId && (c.subject.uniqueId = r.certSubjectUniqueId),
            (c.subject.hash = v.digest().toHex()),
            r.certExtensions ? (c.extensions = n.certificateExtensionsFromAsn1(r.certExtensions)) : (c.extensions = []),
            (c.publicKey = n.publicKeyFromAsn1(r.subjectPublicKeyInfo)),
            c
          );
        }),
        (n.certificateExtensionsFromAsn1 = function (e) {
          for (var t = [], r = 0; r < e.value.length; ++r)
            for (var s = e.value[r], i = 0; i < s.value.length; ++i) t.push(n.certificateExtensionFromAsn1(s.value[i]));
          return t;
        }),
        (n.certificateExtensionFromAsn1 = function (e) {
          var t = {};
          if (
            ((t.id = i.derToOid(e.value[0].value)),
            (t.critical = !1),
            e.value[1].type === i.Type.BOOLEAN
              ? ((t.critical = 0 !== e.value[1].value.charCodeAt(0)), (t.value = e.value[2].value))
              : (t.value = e.value[1].value),
            t.id in a)
          )
            if (((t.name = a[t.id]), "keyUsage" === t.name)) {
              var r = 0,
                n = 0;
              (c = i.fromDer(t.value)).value.length > 1 &&
                ((r = c.value.charCodeAt(1)), (n = c.value.length > 2 ? c.value.charCodeAt(2) : 0)),
                (t.digitalSignature = 128 == (128 & r)),
                (t.nonRepudiation = 64 == (64 & r)),
                (t.keyEncipherment = 32 == (32 & r)),
                (t.dataEncipherment = 16 == (16 & r)),
                (t.keyAgreement = 8 == (8 & r)),
                (t.keyCertSign = 4 == (4 & r)),
                (t.cRLSign = 2 == (2 & r)),
                (t.encipherOnly = 1 == (1 & r)),
                (t.decipherOnly = 128 == (128 & n));
            } else if ("basicConstraints" === t.name) {
              (c = i.fromDer(t.value)).value.length > 0 && c.value[0].type === i.Type.BOOLEAN
                ? (t.cA = 0 !== c.value[0].value.charCodeAt(0))
                : (t.cA = !1);
              var o = null;
              c.value.length > 0 && c.value[0].type === i.Type.INTEGER
                ? (o = c.value[0].value)
                : c.value.length > 1 && (o = c.value[1].value),
                null !== o && (t.pathLenConstraint = i.derToInteger(o));
            } else if ("extKeyUsage" === t.name)
              for (var c = i.fromDer(t.value), l = 0; l < c.value.length; ++l) {
                var u = i.derToOid(c.value[l].value);
                u in a ? (t[a[u]] = !0) : (t[u] = !0);
              }
            else if ("nsCertType" === t.name)
              (r = 0),
                (c = i.fromDer(t.value)).value.length > 1 && (r = c.value.charCodeAt(1)),
                (t.client = 128 == (128 & r)),
                (t.server = 64 == (64 & r)),
                (t.email = 32 == (32 & r)),
                (t.objsign = 16 == (16 & r)),
                (t.reserved = 8 == (8 & r)),
                (t.sslCA = 4 == (4 & r)),
                (t.emailCA = 2 == (2 & r)),
                (t.objCA = 1 == (1 & r));
            else if ("subjectAltName" === t.name || "issuerAltName" === t.name) {
              var d;
              (t.altNames = []), (c = i.fromDer(t.value));
              for (var p = 0; p < c.value.length; ++p) {
                var h = { type: (d = c.value[p]).type, value: d.value };
                switch ((t.altNames.push(h), d.type)) {
                  case 1:
                  case 2:
                  case 6:
                    break;
                  case 7:
                    h.ip = s.util.bytesToIP(d.value);
                    break;
                  case 8:
                    h.oid = i.derToOid(d.value);
                }
              }
            } else "subjectKeyIdentifier" === t.name && ((c = i.fromDer(t.value)), (t.subjectKeyIdentifier = s.util.bytesToHex(c.value)));
          return t;
        }),
        (n.certificationRequestFromAsn1 = function (e, t) {
          var r = {},
            a = [];
          if (!i.validate(e, p, r, a)) {
            var o = new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");
            throw ((o.errors = a), o);
          }
          if (i.derToOid(r.publicKeyOid) !== n.oids.rsaEncryption) throw new Error("Cannot read public key. OID is not RSA.");
          var c = n.createCertificationRequest();
          if (
            ((c.version = r.csrVersion ? r.csrVersion.charCodeAt(0) : 0),
            (c.signatureOid = s.asn1.derToOid(r.csrSignatureOid)),
            (c.signatureParameters = f(c.signatureOid, r.csrSignatureParams, !0)),
            (c.siginfo.algorithmOid = s.asn1.derToOid(r.csrSignatureOid)),
            (c.siginfo.parameters = f(c.siginfo.algorithmOid, r.csrSignatureParams, !1)),
            (c.signature = r.csrSignature),
            (c.certificationRequestInfo = r.certificationRequestInfo),
            t)
          ) {
            c.md = g({ signatureOid: c.signatureOid, type: "certification request" });
            var l = i.toDer(c.certificationRequestInfo);
            c.md.update(l.getBytes());
          }
          var u = s.md.sha1.create();
          return (
            (c.subject.getField = function (e) {
              return h(c.subject, e);
            }),
            (c.subject.addField = function (e) {
              m([e]), c.subject.attributes.push(e);
            }),
            (c.subject.attributes = n.RDNAttributesAsArray(r.certificationRequestInfoSubject, u)),
            (c.subject.hash = u.digest().toHex()),
            (c.publicKey = n.publicKeyFromAsn1(r.subjectPublicKeyInfo)),
            (c.getAttribute = function (e) {
              return h(c, e);
            }),
            (c.addAttribute = function (e) {
              m([e]), c.attributes.push(e);
            }),
            (c.attributes = n.CRIAttributesAsArray(r.certificationRequestInfoAttributes || [])),
            c
          );
        }),
        (n.createCertificationRequest = function () {
          var e = { version: 0, signatureOid: null, signature: null, siginfo: {} };
          return (
            (e.siginfo.algorithmOid = null),
            (e.subject = {}),
            (e.subject.getField = function (t) {
              return h(e.subject, t);
            }),
            (e.subject.addField = function (t) {
              m([t]), e.subject.attributes.push(t);
            }),
            (e.subject.attributes = []),
            (e.subject.hash = null),
            (e.publicKey = null),
            (e.attributes = []),
            (e.getAttribute = function (t) {
              return h(e, t);
            }),
            (e.addAttribute = function (t) {
              m([t]), e.attributes.push(t);
            }),
            (e.md = null),
            (e.setSubject = function (t) {
              m(t), (e.subject.attributes = t), (e.subject.hash = null);
            }),
            (e.setAttributes = function (t) {
              m(t), (e.attributes = t);
            }),
            (e.sign = function (t, r) {
              e.md = r || s.md.sha1.create();
              var o = a[e.md.algorithm + "WithRSAEncryption"];
              if (!o) {
                var c = new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");
                throw ((c.algorithm = e.md.algorithm), c);
              }
              (e.signatureOid = e.siginfo.algorithmOid = o), (e.certificationRequestInfo = n.getCertificationRequestInfo(e));
              var l = i.toDer(e.certificationRequestInfo);
              e.md.update(l.getBytes()), (e.signature = t.sign(e.md));
            }),
            (e.verify = function () {
              var t = !1,
                r = e.md;
              if (null === r) {
                r = g({ signatureOid: e.signatureOid, type: "certification request" });
                var s = e.certificationRequestInfo || n.getCertificationRequestInfo(e),
                  a = i.toDer(s);
                r.update(a.getBytes());
              }
              return null !== r && (t = y({ certificate: e, md: r, signature: e.signature })), t;
            }),
            e
          );
        });
      var S = new Date("1950-01-01T00:00:00Z"),
        A = new Date("2050-01-01T00:00:00Z");
      function _(e) {
        return e >= S && e < A
          ? i.create(i.Class.UNIVERSAL, i.Type.UTCTIME, !1, i.dateToUtcTime(e))
          : i.create(i.Class.UNIVERSAL, i.Type.GENERALIZEDTIME, !1, i.dateToGeneralizedTime(e));
      }
      (n.getTBSCertificate = function (e) {
        var t = _(e.validity.notBefore),
          r = _(e.validity.notAfter),
          a = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, i.integerToDer(e.version).getBytes())
            ]),
            i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, s.util.hexToBytes(e.serialNumber)),
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(e.siginfo.algorithmOid).getBytes()),
              T(e.siginfo.algorithmOid, e.siginfo.parameters)
            ]),
            E(e.issuer),
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [t, r]),
            E(e.subject),
            n.publicKeyToAsn1(e.publicKey)
          ]);
        return (
          e.issuer.uniqueId &&
            a.value.push(
              i.create(i.Class.CONTEXT_SPECIFIC, 1, !0, [
                i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, String.fromCharCode(0) + e.issuer.uniqueId)
              ])
            ),
          e.subject.uniqueId &&
            a.value.push(
              i.create(i.Class.CONTEXT_SPECIFIC, 2, !0, [
                i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, String.fromCharCode(0) + e.subject.uniqueId)
              ])
            ),
          e.extensions.length > 0 && a.value.push(n.certificateExtensionsToAsn1(e.extensions)),
          a
        );
      }),
        (n.getCertificationRequestInfo = function (e) {
          return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, i.integerToDer(e.version).getBytes()),
            E(e.subject),
            n.publicKeyToAsn1(e.publicKey),
            C(e)
          ]);
        }),
        (n.distinguishedNameToAsn1 = function (e) {
          return E(e);
        }),
        (n.certificateToAsn1 = function (e) {
          var t = e.tbsCertificate || n.getTBSCertificate(e);
          return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            t,
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(e.signatureOid).getBytes()),
              T(e.signatureOid, e.signatureParameters)
            ]),
            i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, String.fromCharCode(0) + e.signature)
          ]);
        }),
        (n.certificateExtensionsToAsn1 = function (e) {
          var t = i.create(i.Class.CONTEXT_SPECIFIC, 3, !0, []),
            r = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          t.value.push(r);
          for (var s = 0; s < e.length; ++s) r.value.push(n.certificateExtensionToAsn1(e[s]));
          return t;
        }),
        (n.certificateExtensionToAsn1 = function (e) {
          var t = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          t.value.push(i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(e.id).getBytes())),
            e.critical && t.value.push(i.create(i.Class.UNIVERSAL, i.Type.BOOLEAN, !1, String.fromCharCode(255)));
          var r = e.value;
          return (
            "string" != typeof e.value && (r = i.toDer(r).getBytes()),
            t.value.push(i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, r)),
            t
          );
        }),
        (n.certificationRequestToAsn1 = function (e) {
          var t = e.certificationRequestInfo || n.getCertificationRequestInfo(e);
          return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            t,
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(e.signatureOid).getBytes()),
              T(e.signatureOid, e.signatureParameters)
            ]),
            i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, String.fromCharCode(0) + e.signature)
          ]);
        }),
        (n.createCaStore = function (e) {
          var t = { certs: {} };
          function r(e) {
            return a(e), t.certs[e.hash] || null;
          }
          function a(e) {
            if (!e.hash) {
              var t = s.md.sha1.create();
              (e.attributes = n.RDNAttributesAsArray(E(e), t)), (e.hash = t.digest().toHex());
            }
          }
          if (
            ((t.getIssuer = function (e) {
              return r(e.issuer);
            }),
            (t.addCertificate = function (e) {
              if (("string" == typeof e && (e = s.pki.certificateFromPem(e)), a(e.subject), !t.hasCertificate(e)))
                if (e.subject.hash in t.certs) {
                  var r = t.certs[e.subject.hash];
                  s.util.isArray(r) || (r = [r]), r.push(e), (t.certs[e.subject.hash] = r);
                } else t.certs[e.subject.hash] = e;
            }),
            (t.hasCertificate = function (e) {
              "string" == typeof e && (e = s.pki.certificateFromPem(e));
              var t = r(e.subject);
              if (!t) return !1;
              s.util.isArray(t) || (t = [t]);
              for (var a = i.toDer(n.certificateToAsn1(e)).getBytes(), o = 0; o < t.length; ++o)
                if (a === i.toDer(n.certificateToAsn1(t[o])).getBytes()) return !0;
              return !1;
            }),
            (t.listAllCertificates = function () {
              var e = [];
              for (var r in t.certs)
                if (t.certs.hasOwnProperty(r)) {
                  var i = t.certs[r];
                  if (s.util.isArray(i)) for (var n = 0; n < i.length; ++n) e.push(i[n]);
                  else e.push(i);
                }
              return e;
            }),
            (t.removeCertificate = function (e) {
              var o;
              if (("string" == typeof e && (e = s.pki.certificateFromPem(e)), a(e.subject), !t.hasCertificate(e))) return null;
              var c = r(e.subject);
              if (!s.util.isArray(c)) return (o = t.certs[e.subject.hash]), delete t.certs[e.subject.hash], o;
              for (var l = i.toDer(n.certificateToAsn1(e)).getBytes(), u = 0; u < c.length; ++u)
                l === i.toDer(n.certificateToAsn1(c[u])).getBytes() && ((o = c[u]), c.splice(u, 1));
              return 0 === c.length && delete t.certs[e.subject.hash], o;
            }),
            e)
          )
            for (var o = 0; o < e.length; ++o) {
              var c = e[o];
              t.addCertificate(c);
            }
          return t;
        }),
        (n.certificateError = {
          bad_certificate: "forge.pki.BadCertificate",
          unsupported_certificate: "forge.pki.UnsupportedCertificate",
          certificate_revoked: "forge.pki.CertificateRevoked",
          certificate_expired: "forge.pki.CertificateExpired",
          certificate_unknown: "forge.pki.CertificateUnknown",
          unknown_ca: "forge.pki.UnknownCertificateAuthority"
        }),
        (n.verifyCertificateChain = function (e, t, r) {
          "function" == typeof r && (r = { verify: r }), (r = r || {});
          var i = (t = t.slice(0)).slice(0),
            a = r.validityCheckDate;
          void 0 === a && (a = new Date());
          var o = !0,
            c = null,
            l = 0;
          do {
            var u = t.shift(),
              d = null,
              p = !1;
            if (
              (a &&
                (a < u.validity.notBefore || a > u.validity.notAfter) &&
                (c = {
                  message: "Certificate is not valid yet or has expired.",
                  error: n.certificateError.certificate_expired,
                  notBefore: u.validity.notBefore,
                  notAfter: u.validity.notAfter,
                  now: a
                }),
              null === c)
            ) {
              if ((null === (d = t[0] || e.getIssuer(u)) && u.isIssuer(u) && ((p = !0), (d = u)), d)) {
                var h = d;
                s.util.isArray(h) || (h = [h]);
                for (var f = !1; !f && h.length > 0; ) {
                  d = h.shift();
                  try {
                    f = d.verify(u);
                  } catch (e) {}
                }
                f || (c = { message: "Certificate signature is invalid.", error: n.certificateError.bad_certificate });
              }
              null !== c ||
                (d && !p) ||
                e.hasCertificate(u) ||
                (c = { message: "Certificate is not trusted.", error: n.certificateError.unknown_ca });
            }
            if (
              (null === c &&
                d &&
                !u.isIssuer(d) &&
                (c = { message: "Certificate issuer is invalid.", error: n.certificateError.bad_certificate }),
              null === c)
            )
              for (var g = { keyUsage: !0, basicConstraints: !0 }, y = 0; null === c && y < u.extensions.length; ++y) {
                var E = u.extensions[y];
                E.critical &&
                  !(E.name in g) &&
                  (c = {
                    message: "Certificate has an unsupported critical extension.",
                    error: n.certificateError.unsupported_certificate
                  });
              }
            if (null === c && (!o || (0 === t.length && (!d || p)))) {
              var m = u.getExtension("basicConstraints"),
                v = u.getExtension("keyUsage");
              null !== v &&
                ((v.keyCertSign && null !== m) ||
                  (c = {
                    message:
                      "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
                    error: n.certificateError.bad_certificate
                  })),
                null !== c ||
                  null === m ||
                  m.cA ||
                  (c = {
                    message: "Certificate basicConstraints indicates the certificate is not a CA.",
                    error: n.certificateError.bad_certificate
                  }),
                null === c &&
                  null !== v &&
                  "pathLenConstraint" in m &&
                  l - 1 > m.pathLenConstraint &&
                  (c = { message: "Certificate basicConstraints pathLenConstraint violated.", error: n.certificateError.bad_certificate });
            }
            var T = null === c || c.error,
              C = r.verify ? r.verify(T, l, i) : T;
            if (!0 !== C)
              throw (
                (!0 === T && (c = { message: "The application rejected the certificate.", error: n.certificateError.bad_certificate }),
                (C || 0 === C) &&
                  ("object" != typeof C || s.util.isArray(C)
                    ? "string" == typeof C && (c.error = C)
                    : (C.message && (c.message = C.message), C.error && (c.error = C.error))),
                c)
              );
            (c = null), (o = !1), ++l;
          } while (t.length > 0);
          return !0;
        });
    }
  }
]);
