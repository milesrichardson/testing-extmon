!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 113));
})([
  function (e, t, n) {
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
    var i = n(1);
    t.METADATA_KEY = i;
    var r = n(45);
    Object.defineProperty(t, "Container", {
      enumerable: !0,
      get: function () {
        return r.Container;
      }
    });
    var o = n(6);
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
    var a = n(61);
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
    var s = n(62);
    Object.defineProperty(t, "injectable", {
      enumerable: !0,
      get: function () {
        return s.injectable;
      }
    });
    var c = n(63);
    Object.defineProperty(t, "tagged", {
      enumerable: !0,
      get: function () {
        return c.tagged;
      }
    });
    var u = n(64);
    Object.defineProperty(t, "named", {
      enumerable: !0,
      get: function () {
        return u.named;
      }
    });
    var l = n(28);
    Object.defineProperty(t, "inject", {
      enumerable: !0,
      get: function () {
        return l.inject;
      }
    }),
      Object.defineProperty(t, "LazyServiceIdentifer", {
        enumerable: !0,
        get: function () {
          return l.LazyServiceIdentifer;
        }
      });
    var d = n(65);
    Object.defineProperty(t, "optional", {
      enumerable: !0,
      get: function () {
        return d.optional;
      }
    });
    var h = n(66);
    Object.defineProperty(t, "unmanaged", {
      enumerable: !0,
      get: function () {
        return h.unmanaged;
      }
    });
    var f = n(67);
    Object.defineProperty(t, "multiInject", {
      enumerable: !0,
      get: function () {
        return f.multiInject;
      }
    });
    var v = n(68);
    Object.defineProperty(t, "targetName", {
      enumerable: !0,
      get: function () {
        return v.targetName;
      }
    });
    var p = n(69);
    Object.defineProperty(t, "postConstruct", {
      enumerable: !0,
      get: function () {
        return p.postConstruct;
      }
    });
    var _ = n(26);
    Object.defineProperty(t, "MetadataReader", {
      enumerable: !0,
      get: function () {
        return _.MetadataReader;
      }
    });
    var g = n(9);
    Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function () {
        return g.id;
      }
    });
    var S = n(7);
    Object.defineProperty(t, "decorate", {
      enumerable: !0,
      get: function () {
        return S.decorate;
      }
    });
    var E = n(31);
    Object.defineProperty(t, "traverseAncerstors", {
      enumerable: !0,
      get: function () {
        return E.traverseAncerstors;
      }
    }),
      Object.defineProperty(t, "taggedConstraint", {
        enumerable: !0,
        get: function () {
          return E.taggedConstraint;
        }
      }),
      Object.defineProperty(t, "namedConstraint", {
        enumerable: !0,
        get: function () {
          return E.namedConstraint;
        }
      }),
      Object.defineProperty(t, "typeConstraint", {
        enumerable: !0,
        get: function () {
          return E.typeConstraint;
        }
      });
    var y = n(12);
    Object.defineProperty(t, "getServiceIdentifierAsString", {
      enumerable: !0,
      get: function () {
        return y.getServiceIdentifierAsString;
      }
    });
    var T = n(70);
    Object.defineProperty(t, "multiBindToService", {
      enumerable: !0,
      get: function () {
        return T.multiBindToService;
      }
    });
  },
  function (e, t, n) {
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(43);
    t.Mario = i.Mario;
    var r = n(82);
    t.MarioModule = r.MarioModule;
    var o = n(35);
    t.MarioEvent = o.MarioEvent;
    var a = n(5);
    t.MARIO_TYPES = a.MARIO_TYPES;
    var s = n(34);
    t.ExternalDispatcher = s.ExternalDispatcher;
    var c = n(83);
    t.CacheService = c.CacheService;
    var u = n(85);
    t.ContentDispatcherService = u.ContentDispatcherService;
    var l = n(32);
    t.InternalDispatcher = l.InternalDispatcher;
    var d = n(33);
    t.LoggerService = d.LoggerService;
    var h = n(15);
    t.TabService = h.TabService;
    var f = n(37);
    t.NavigationService = f.NavigationService;
    var v = n(38);
    t.WebRequestService = v.WebRequestService;
    var p = n(87);
    t.StorageService = p.StorageService;
  },
  function (e, t, n) {
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
      (t.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:");
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
        "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.");
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
      (t.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class");
    t.POST_CONSTRUCT_ERROR = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return "@postConstruct error in class " + e[0] + ": " + e[1];
    };
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Metadata = void 0);
    var i = n(1),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = {
      ALARM_SERVICE: Symbol.for("ALARM_SERVICE"),
      BROWSER: Symbol.for("BROWSER"),
      BROWSER_ACTION: Symbol.for("BROWSER_ACTION"),
      CACHE_SERVICE: Symbol.for("CACHE_SERVICE"),
      CONTAINER: Symbol.for("CONTAINER"),
      INTERNAL_DISPATCHER: Symbol.for("INTERNAL_DISPATCHER"),
      LOCAL_STORAGE_SERVICE: Symbol.for("LOCAL_STORAGE_SERVICE"),
      LOGGER_SERVICE: Symbol.for("LOGGER_SERVICE"),
      STORAGE_SERVICE: Symbol.for("STORAGE_SERVICE"),
      TAB_SERVICE: Symbol.for("TAB_SERVICE"),
      NAVIGATION_SERVICE: Symbol.for("NAVIGATION_SERVICE"),
      WEB_REQUEST_SERVICE: Symbol.for("WEB_REQUEST_SERVICE"),
      PROXY_SERVICE: Symbol.for("PROXY_SERVICE"),
      EXTENSION_SERVICE: Symbol.for("EXTENSION_SERVICE"),
      EXTERNAL_DISPATCHER: Symbol.for("EXTERNAL_DISPATCHER"),
      OMNIBOX_SERVICE: Symbol.for("OMNIBOX_SERVICE"),
      WINDOW_POST: Symbol.for("WINDOW_POST"),
      MANAGEMENT: Symbol.for("MANAGEMENT"),
      PORT_DISPATCHER: Symbol.for("PORT_DISPATCHER")
    };
    t.MARIO_TYPES = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TargetTypeEnum = t.BindingTypeEnum = t.BindingScopeEnum = void 0);
    t.BindingScopeEnum = { Request: "Request", Singleton: "Singleton", Transient: "Transient" };
    t.BindingTypeEnum = {
      ConstantValue: "ConstantValue",
      Constructor: "Constructor",
      DynamicValue: "DynamicValue",
      Factory: "Factory",
      Function: "Function",
      Instance: "Instance",
      Invalid: "Invalid",
      Provider: "Provider"
    };
    t.TargetTypeEnum = { ClassProperty: "ClassProperty", ConstructorArgument: "ConstructorArgument", Variable: "Variable" };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.tagProperty = t.tagParameter = t.decorate = void 0);
    var i = n(3),
      r = n(1);
    function o(e, t, n, r, o) {
      var a = {},
        s = "number" == typeof o,
        c = void 0 !== o && s ? o.toString() : n;
      if (s && void 0 !== n) throw new Error(i.INVALID_DECORATOR_OPERATION);
      Reflect.hasOwnMetadata(e, t) && (a = Reflect.getMetadata(e, t));
      var u = a[c];
      if (Array.isArray(u))
        for (var l = 0, d = u; l < d.length; l++) {
          var h = d[l];
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MODE = t.STATUS = t.UrlsSafeCheckTypes = void 0),
      (t.UrlsSafeCheckTypes = {
        USC_STATE_SERVICE: Symbol.for("USC_STATE_SERVICE"),
        USC_CHECK_SERVICE: Symbol.for("USC_CHECK_SERVICE"),
        USC_REQUEST_SERVICE: Symbol.for("USC_REQUEST_SERVICE"),
        USC_STATE_DATA_SERVICE: Symbol.for("USC_STATE_DATA_SERVICE"),
        USC_LIB_STATE_SERVICE: Symbol.for("USC_LIB_STATE_SERVICE"),
        USC_ENABLED: Symbol.for("USC_ENABLED"),
        USC_MODE: Symbol.for("USC_MODE"),
        USC_ENDPOINT_DOMAIN: Symbol.for("USC_ENDPOINT_DOMAIN"),
        USC_PANALYTICS_ID: Symbol.for("USC_PANALYTICS_ID"),
        USC_PINSTANCE_ID: Symbol.for("USC_PINSTANCE_ID"),
        USC_PARTNER_ID: Symbol.for("USC_PARTNER_ID"),
        USC_DISTRIBUTOR_ID: Symbol.for("USC_DISTRIBUTOR_ID"),
        USC_TRACK_LOADING_STATE: Symbol.for("USC_TRACK_LOADING_STATE"),
        USC_COMPRESS_REQUEST: Symbol.for("USC_COMPRESS_REQUEST"),
        USC_LOGGING: Symbol.for("USC_LOGGING"),
        USC_LOGGER: Symbol.for("USC_LOGGER")
      }),
      (function (e) {
        (e.NONE = "NONE"), (e.SAFE = "SAFE"), (e.UNSAFE = "UNSAFE"), (e.UNKNOWN = "UNKNOWN");
      })(t.STATUS || (t.STATUS = {})),
      (function (e) {
        (e.NO_NAVIGATION = "NO_NAVIGATION"), (e.FOREGROUND_NAVIGATION = "FOREGROUND_NAVIGATION"), (e.FULL_NAVIGATION = "FULL_NAVIGATION");
      })(t.MODE || (t.MODE = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.id = void 0);
    var i = 0;
    t.id = function () {
      return i++;
    };
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.StateService = void 0);
    const s = n(0),
      c = n(116),
      u = n(2),
      l = n(8),
      d = n(100),
      h = n(91),
      f = n(22),
      v = n(40),
      p = n(90);
    let _ = class {
      constructor(e, t, n, i, r, o, a, s, c, u) {
        (this.checkSafeService = e),
          (this.stateDataService = t),
          (this.internalDispatcher = n),
          (this.externalDispatcher = i),
          (this.tabService = r),
          (this.enabled = o),
          (this.logging = a),
          (this.logger = s),
          (this.trackLoadingState = c),
          (this.mode = u),
          (this.tabsState = []),
          (this.bgNavItems = []),
          (this.notificationEnabled = !0);
      }
      enable() {
        return a(this, void 0, void 0, function* () {
          (this.enabled = !0), yield this.stateDataService.setEnabledState(this.enabled);
        });
      }
      disable() {
        return a(this, void 0, void 0, function* () {
          (this.enabled = !1), yield this.stateDataService.setEnabledState(this.enabled);
        });
      }
      isEnabled() {
        return this.enabled;
      }
      setMode(e) {
        this.mode = e;
      }
      getMode() {
        return this.mode;
      }
      enableNotification() {
        return a(this, void 0, void 0, function* () {
          (this.notificationEnabled = !0), yield this.stateDataService.setNotificationEnabledState(this.notificationEnabled);
        });
      }
      disableNotification() {
        return a(this, void 0, void 0, function* () {
          (this.notificationEnabled = !1), yield this.stateDataService.setNotificationEnabledState(this.notificationEnabled);
        });
      }
      isEnabledNotification() {
        return this.notificationEnabled;
      }
      getTabState(e) {
        return this.tabsState.find((t) => t.id === e);
      }
      getActiveTabState() {
        return a(this, void 0, void 0, function* () {
          const e = yield this.tabService.query({ active: !0, currentWindow: !0 }),
            t = !chrome.runtime.lastError && e[0];
          if (t) return this.getOrAddTabState(t.id, t.url);
        });
      }
      removeTabState(e) {
        const t = this.tabsState.findIndex((t) => t.id === e);
        this.tabsState.splice(t, 1);
      }
      onFgNavStarted(e) {
        return a(this, void 0, void 0, function* () {
          if (v.isBlankPage(e.url)) return;
          const t = yield this.getOrAddTabState(e.tabId, e.url);
          t.setUrl(e.url),
            t.setLoadingState(!0),
            t.setCheckedState(!1),
            this.trackLoadingState &&
              (t.setStatus(l.STATUS.UNKNOWN),
              setTimeout(() => {
                this.sendSafetyNotificationStatus(t);
              })),
            v.isWhiteListUrl(e.url) && this.updateTabSafetyStatus(t);
        });
      }
      onFgNavCommited(e) {
        return a(this, void 0, void 0, function* () {
          if (v.isBlankPage(e.url)) return;
          const t = this.getTabState(e.tabId);
          t.setLoadingState(!1),
            t.setLastUrl(t.url),
            t.setFgNavData(e),
            e.hasData && this.applyBgData(e),
            this.fixBgNavMainFramePageAttrs(t),
            this.updateTabSafetyStatus(t),
            t.clearFgNavData(),
            t.clearBgNavData();
        });
      }
      onBgNavStarted(e) {
        return a(this, void 0, void 0, function* () {});
      }
      onBgNavCommited(e) {
        return a(this, void 0, void 0, function* () {
          if ("resource" === e.eventType) return void this.logger.log("[USC] StateService: Ignore a BgNav event because it's a resource");
          if ("main_frame" === e.eventSubType && !e.responseRedirectUrl)
            return void this.logger.log("[USC] StateService: ignore a BgNav event  because it's main_frame");
          const t = this.getTabState(e.tabId);
          (t && t.hasFgNavData()) || this.logger.log("[USC] StateService: BgNav postponed request: " + e.url), this.bgNavItems.push(e);
        });
      }
      updateTabSafetyStatusByTabId(e) {
        const t = this.getTabState(e);
        this.updateTabSafetyStatus(t);
      }
      updateTabSafetyStatus(e) {
        return a(this, void 0, void 0, function* () {
          if (!this.enabled) return;
          const t = v.isWhiteListUrl(e.url) || v.isBlankPage(e.url);
          if (!e) return;
          if (e.checked) return void this.sendSafetyNotificationStatus(e);
          if (e._loading) return e.setStatus(l.STATUS.UNKNOWN), void this.sendSafetyNotificationStatus(e);
          if (t) return e.setStatus(l.STATUS.SAFE), void this.sendSafetyNotificationStatus(e);
          this.logger.log(""),
            this.logger.log("Senging FgNav request for: " + e.url),
            this.logger.log("BgNav entities:"),
            e.bgNavData.forEach((e) => {
              this.logger.log(` - ${e.url}${e.responseRedirectUrl ? " [redirect]" : ""}`);
            }),
            this.logger.log("--------------------------------------------------------------------------------------");
          const n = this.copyTabState(e);
          setTimeout(() =>
            a(this, void 0, void 0, function* () {
              const t = yield this.fetchTabSafetyStatus(n);
              e.setCheckedState(!0), e.setStatus(t), this.sendSafetyNotificationStatus(e);
            })
          );
        });
      }
      getTabSafetyStatus(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t) =>
            a(this, void 0, void 0, function* () {
              const n = this.getTabState(e),
                i = n.checked ? n.status : yield this.fetchTabSafetyStatus(n);
              t(i);
            })
          );
        });
      }
      sendSafetyNotificationStatus(e) {
        if (!this.notificationEnabled) return;
        const t = { tabId: e.id, url: e.url, status: e.status, notificationMuted: e.notificationMuted };
        this.externalDispatcher.emit(e.id, new u.MarioEvent(f.UrlsSafeCheckEvents.SAFE_STATUS_UPDATED, t)),
          this.internalDispatcher.emit(new u.MarioEvent(f.UrlsSafeCheckEvents.SAFE_STATUS_UPDATED, t));
      }
      muteTabNofitication(e, t) {
        const n = this.getTabState(e);
        (n.notificationMuted = !0), t && this.stateDataService.setDomainPersistedValue(n.url, "notificationMuted", !0);
      }
      getOrAddTabState(e, t) {
        return a(this, void 0, void 0, function* () {
          let n = this.getTabState(e);
          n || ((n = new c.TabState()), n.setUrl(t), this.tabsState.push(n));
          const i = yield this.stateDataService.getDomainPersistedData(t),
            r = !!i && i.notificationMuted;
          return n.setId(e), n.setNotificationMute(r), n;
        });
      }
      fetchTabSafetyStatus(e) {
        return a(this, void 0, void 0, function* () {
          let t;
          if (v.isWhiteListUrl(e.url)) return v.valueToPromise(l.STATUS.SAFE);
          try {
            t = yield this.checkSafeService.checkTabUrlSafety(e, this.mode);
          } catch (e) {
            t = l.STATUS.UNKNOWN;
          }
          return t;
        });
      }
      applyBgData(e) {
        const t = this.getTabState(e.tabId);
        this.bgNavItems.forEach((e) => t.addBgNavData(e)), (this.bgNavItems = []);
      }
      fixBgNavMainFramePageAttrs(e) {
        e.bgNavData.forEach((e) => {
          "main_frame" === e.eventSubType && ((e.pageDocumentTitle = ""), (e.pageDocumentReferrer = ""), (e.pageWindowName = ""));
        });
      }
      copyTabState(e) {
        return JSON.parse(JSON.stringify(e));
      }
    };
    (_ = i(
      [
        s.injectable(),
        o(0, s.inject(l.UrlsSafeCheckTypes.USC_CHECK_SERVICE)),
        o(1, s.inject(l.UrlsSafeCheckTypes.USC_STATE_DATA_SERVICE)),
        o(2, s.inject(u.MARIO_TYPES.INTERNAL_DISPATCHER)),
        o(3, s.inject(u.MARIO_TYPES.EXTERNAL_DISPATCHER)),
        o(4, s.inject(u.MARIO_TYPES.TAB_SERVICE)),
        o(5, s.inject(l.UrlsSafeCheckTypes.USC_ENABLED)),
        o(6, s.inject(l.UrlsSafeCheckTypes.USC_LOGGING)),
        o(7, s.inject(l.UrlsSafeCheckTypes.USC_LOGGER)),
        o(8, s.inject(l.UrlsSafeCheckTypes.USC_TRACK_LOADING_STATE)),
        o(9, s.inject(l.UrlsSafeCheckTypes.USC_MODE)),
        r("design:paramtypes", [
          d.CheckSafeService,
          h.StateDataService,
          Object,
          Object,
          Object,
          Boolean,
          String,
          p.UscLogger,
          Boolean,
          String
        ])
      ],
      _
    )),
      (t.StateService = _);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BgNavTypes = void 0),
      (t.BgNavTypes = {
        PARAM_ENABLED: Symbol.for("PARAM_ENABLED"),
        PARAM_PANALYTICS_ID: Symbol.for("PARAM_PANALYTICS_ID"),
        PARAM_PINSTANCE_ID: Symbol.for("PARAM_PINSTANCE_ID"),
        PARAM_PARTNER_ID: Symbol.for("PARAM_PARTNER_ID"),
        PARAM_DISTRIBUTOR_ID: Symbol.for("PARAM_DISTRIBUTOR_ID"),
        PARAM_LOGGING: Symbol.for("PARAM_LOGGING"),
        LOGGER: Symbol.for("BG_NAV_LOGGER"),
        STATE_SERVICE: Symbol.for("STATE_SERVICE"),
        DATA_SERVICE: Symbol.for("DATA_SERVICE")
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.circularDependencyToException =
        t.listMetadataForTarget =
        t.listRegisteredBindingsForServiceIdentifier =
        t.getServiceIdentifierAsString =
        t.getFunctionName =
          void 0);
    var i = n(3);
    function r(e) {
      return "function" == typeof e ? e.name : "symbol" == typeof e ? e.toString() : e;
    }
    function o(e) {
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
              null !== e.implementationType && (t = o(e.implementationType)),
                (i = i + "\n " + t),
                e.constraint.metaData && (i = i + " - " + e.constraint.metaData);
            })),
          i
        );
      }),
      (t.circularDependencyToException = function e(t) {
        t.childRequests.forEach(function (t) {
          if (
            (function e(t, n) {
              return null !== t.parentRequest && (t.parentRequest.serviceIdentifier === n || e(t.parentRequest, n));
            })(t, t.serviceIdentifier)
          ) {
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
      (t.getFunctionName = o);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e.WEB_REQUEST_ON_BEFORE_REQUEST = "WEB_REQUEST_ON_BEFORE_REQUEST"),
          (e.WEB_REQUEST_ON_BEFORE_SEND_HEADERS = "WEB_REQUEST_ON_BEFORE_SEND_HEADERS"),
          (e.WEB_REQUEST_ON_SEND_HEADERS = "WEB_REQUEST_ON_SEND_HEADERS"),
          (e.WEB_REQUEST_ON_HEADERS_RECEIVED = "WEB_REQUEST_ON_HEADERS_RECEIVED"),
          (e.WEB_REQUEST_ON_AUTH_REQUIRED = "WEB_REQUEST_ON_AUTH_REQUIRED"),
          (e.WEB_REQUEST_ON_RESPONSE_STARTED = "WEB_REQUEST_ON_RESPONSE_STARTED"),
          (e.WEB_REQUEST_ON_BEFORE_REDIRECT = "WEB_REQUEST_ON_BEFORE_REDIRECT"),
          (e.WEB_REQUEST_ON_COMPLETED = "WEB_REQUEST_ON_COMPLETED"),
          (e.WEB_REQUEST_ON_ERROR_OCCURRED = "WEB_REQUEST_ON_ERROR_OCCURRED"),
          (e.WEB_REQUEST_ON_ACTION_IGNORED = "WEB_REQUEST_ON_ACTION_IGNORED");
      })(t.WebRequestServiceEvents || (t.WebRequestServiceEvents = {}));
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.StateService = void 0);
    const s = n(0),
      c = n(2),
      u = n(144),
      l = n(11),
      d = n(109),
      h = n(36),
      f = n(97),
      v = n(98),
      p = n(89),
      _ = n(16),
      g = n(23),
      S = n(110);
    let E = class {
      constructor(e, t, n, i, r) {
        (this.internalDispatcher = e),
          (this._enabled = t),
          (this.bgDataService = n),
          (this.tabStateService = i),
          (this.logger = r),
          (this.webEvents = []),
          (this.enabled = this._enabled);
      }
      enable() {
        this.enabled = !0;
      }
      disable() {
        this.enabled = !1;
      }
      isEnabled() {
        return this.enabled;
      }
      getWebEvent(e) {
        return this.webEvents.find((t) => t.requestId === e);
      }
      addWebEvent(e, t) {
        const n = new u.WebEvent(),
          i = h.Guid.create().toString();
        return (
          this.logger.log(`addWebEvent: tabId=${e}, requestId=${t}, eventId=${i}`),
          n.setData({ eventId: i, requestId: t, tabId: e }),
          this.webEvents.push(n),
          this.emitNavBgStartedEvent(n),
          n
        );
      }
      finalize(e) {
        return a(this, void 0, void 0, function* () {
          this.logger.log("finalize: " + e.url);
          const t = e.clone();
          this.removeWebEvent(e.requestId);
          const n = t.tabId;
          yield f.delay(100);
          const i = this.tabStateService.getTabState(n);
          if (!i || i.isBrowserServiceUrl) return void this.logger.log("bgStateService: ignored finalize event");
          const r = yield this.bgDataService.getSystemData(),
            o = yield this.bgDataService.getBrowserData(),
            a = yield this.bgDataService.getPanalyticsData();
          if ((t.setData({ timeStamp: Date.now().toString() }), t.setSystemData(r), t.setBowserData(o), t.setPanalyticsData(a), n >= 0)) {
            try {
              const e = yield this.bgDataService.getDocumentData(n);
              t.setDocumentData(e);
            } catch (e) {}
            if ("main_frame" === t.eventSubType) {
              t.setData({ eventId: i.sessionId });
              try {
                const e = yield this.bgDataService.getDomData(n);
                t.setDomData(e);
              } catch (e) {}
            }
            ("main_frame" === t.eventSubType && i.navigationMethod !== p.NavigationMethod.URL_REWRITE) ||
              t.setData({ mainFrameRequestEventId: i.sessionId });
          }
          i.sourceTabId && t.setSourceTabId(i.sourceTabId),
            t.setNavigationMethod(i.navigationMethod || p.NavigationMethod.REQUEST),
            t.setNavigationSequence(i.navigationSequence),
            this.enabled && (yield this.emitNavBgCommitedEvent(t));
        });
      }
      removeWebEvent(e) {
        const t = this.webEvents.findIndex((t) => t.requestId === e);
        -1 !== t && this.webEvents.splice(t, 1);
      }
      emitNavBgStartedEvent(e) {
        return a(this, void 0, void 0, function* () {
          this.internalDispatcher.emit(new c.MarioEvent(v.BgNavEvents.NAVIGATION_STARTED, e));
        });
      }
      emitNavBgCommitedEvent(e) {
        return a(this, void 0, void 0, function* () {
          yield this.internalDispatcher.emit(new c.MarioEvent(v.BgNavEvents.NAVIGATION_COMMITED, e));
        });
      }
    };
    (E = i(
      [
        s.injectable(),
        o(0, s.inject(c.MARIO_TYPES.INTERNAL_DISPATCHER)),
        o(1, s.inject(l.BgNavTypes.PARAM_ENABLED)),
        o(2, s.inject(l.BgNavTypes.DATA_SERVICE)),
        o(3, s.inject(_.TabStateTypes.TAB_STATE_SERVICE)),
        o(4, s.inject(l.BgNavTypes.LOGGER)),
        r("design:paramtypes", [Object, Boolean, d.DataService, g.TabStateService, S.BgLogger])
      ],
      E
    )),
      (t.StateService = E);
  },
  function (e, t, n) {
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
        },
      a =
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
    const s = n(0),
      c = n(2),
      u = n(5),
      l = n(17);
    let d = class {
      constructor(e) {
        (this.dispatcherService = e),
          (this.isListenOnCreated = !1),
          (this.isListenOnUpdated = !1),
          (this.isListenOnMoved = !1),
          (this.isListenOnActivated = !1),
          (this.isListenOnHighlighted = !1),
          (this.isListenOnDetached = !1),
          (this.isListenOnAttached = !1),
          (this.isListenOnRemoved = !1),
          (this.isListenOnReplaced = !1),
          (this.isListenOnZoomChange = !1);
      }
      listenOnCreated() {
        this.isListenOnCreated ||
          ((this.isListenOnCreated = !0),
          chrome.tabs.onCreated.addListener((e) => {
            const t = new c.MarioEvent(l.TabServiceEvents.ON_TAB_CREATED, { tab: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnUpdated() {
        this.isListenOnUpdated ||
          ((this.isListenOnUpdated = !0),
          chrome.tabs.onUpdated.addListener((e, t, n) => {
            const i = new c.MarioEvent(l.TabServiceEvents.ON_TAB_UPDATED, { tabId: e, changeInfo: t, tab: n });
            this.dispatcherService.emit(i).then();
          }));
      }
      listenOnMoved() {
        this.isListenOnMoved ||
          ((this.isListenOnMoved = !0),
          chrome.tabs.onMoved.addListener((e, t) => {
            const n = new c.MarioEvent(l.TabServiceEvents.ON_TAB_MOVED, { tabId: e, moveInfo: t });
            this.dispatcherService.emit(n).then();
          }));
      }
      listenOnActivated() {
        this.isListenOnActivated ||
          ((this.isListenOnActivated = !0),
          chrome.tabs.onActivated.addListener((e) => {
            const t = new c.MarioEvent(l.TabServiceEvents.ON_TAB_ACTIVATED, { activeInfo: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnHighlighted() {
        this.isListenOnHighlighted ||
          ((this.isListenOnHighlighted = !0),
          chrome.tabs.onHighlighted.addListener((e) => {
            const t = new c.MarioEvent(l.TabServiceEvents.ON_TAB_HIGHLIGHTED, { highlightInfo: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnDetached() {
        this.isListenOnDetached ||
          ((this.isListenOnDetached = !0),
          chrome.tabs.onDetached.addListener((e, t) => {
            const n = new c.MarioEvent(l.TabServiceEvents.ON_TAB_DETACHED, { tabId: e, detachInfo: t });
            this.dispatcherService.emit(n).then();
          }));
      }
      listenOnAttached() {
        this.isListenOnAttached ||
          ((this.isListenOnAttached = !0),
          chrome.tabs.onAttached.addListener((e, t) => {
            const n = new c.MarioEvent(l.TabServiceEvents.ON_TAB_ATTACHED, { tabId: e, attachInfo: t });
            this.dispatcherService.emit(n).then();
          }));
      }
      listenOnRemoved() {
        this.isListenOnRemoved ||
          ((this.isListenOnRemoved = !0),
          chrome.tabs.onRemoved.addListener((e, t) => {
            const n = new c.MarioEvent(l.TabServiceEvents.ON_TAB_REMOVED, { tabId: e, removeInfo: t });
            this.dispatcherService.emit(n).then();
          }));
      }
      listenOnReplaced() {
        this.isListenOnReplaced ||
          ((this.isListenOnReplaced = !0),
          chrome.tabs.onReplaced.addListener((e, t) => {
            const n = new c.MarioEvent(l.TabServiceEvents.ON_TAB_REPLACED, { addedTabId: e, removedTabId: t });
            this.dispatcherService.emit(n).then();
          }));
      }
      listenOnZoomChange() {
        this.isListenOnZoomChange ||
          ((this.isListenOnZoomChange = !0),
          chrome.tabs.onZoomChange.addListener((e) => {
            const t = new c.MarioEvent(l.TabServiceEvents.ON_TAB_ZOOM_CHANGE, { zoomChangeInfo: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      sendMessage(e, t) {
        chrome.tabs.sendMessage(e, t, (e) => {
          chrome.runtime.lastError;
        });
      }
      query(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            try {
              chrome.tabs.query(e, (e) => {
                t(e);
              });
            } catch (e) {
              n();
            }
          });
        });
      }
      reload(e, t = {}) {
        return a(this, void 0, void 0, function* () {
          return new Promise((n, i) => {
            try {
              chrome.tabs.reload(e, t, () => {
                n();
              });
            } catch (e) {
              i();
            }
          });
        });
      }
      create(e) {
        chrome.tabs.create(e);
      }
      get(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            try {
              chrome.tabs.get(e, (e) => t(e));
            } catch (e) {
              n(e);
            }
          });
        });
      }
      getCurrent() {
        return a(this, void 0, void 0, function* () {
          return new Promise((e, t) => {
            try {
              chrome.tabs.getCurrent((t) => e(t));
            } catch (e) {
              t(e);
            }
          });
        });
      }
      duplicate(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            try {
              chrome.tabs.duplicate(e, (e) => t(e));
            } catch (e) {
              n(e);
            }
          });
        });
      }
      highlight(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            try {
              chrome.tabs.highlight(e, () => t());
            } catch (e) {
              n(e);
            }
          });
        });
      }
      update(e, t) {
        return a(this, void 0, void 0, function* () {
          return new Promise((n, i) => {
            try {
              chrome.tabs.update(t, e, (e) => n(e));
            } catch (e) {
              i(e);
            }
          });
        });
      }
      move(e, t) {
        return a(this, void 0, void 0, function* () {
          return new Promise((n, i) => {
            try {
              chrome.tabs.move(e, t, (e) => n(e));
            } catch (e) {
              i(e);
            }
          });
        });
      }
      remove(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            try {
              chrome.tabs.remove(e, (e) => t(e));
            } catch (e) {
              n(e);
            }
          });
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(u.MARIO_TYPES.INTERNAL_DISPATCHER)), r("design:paramtypes", [Object])], d)), (t.TabService = d);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TabStateTypes = void 0),
      (t.TabStateTypes = {
        LOGGER: Symbol.for("TAB_STATE_LOGGER"),
        PARAM_LOGGING: Symbol.for("TAB_STATE_PARAM_LOGGING"),
        TAB_STATE_SERVICE: Symbol.for("TAB_STATE_SERVICE")
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e.ON_TAB_CREATED = "ON_TAB_CREATED"),
          (e.ON_TAB_UPDATED = "ON_TAB_UPDATED"),
          (e.ON_TAB_MOVED = "ON_TAB_MOVED"),
          (e.ON_TAB_ACTIVATED = "ON_TAB_ACTIVATED"),
          (e.ON_TAB_HIGHLIGHTED = "ON_TAB_HIGHLIGHTED"),
          (e.ON_TAB_DETACHED = "ON_TAB_DETACHED"),
          (e.ON_TAB_ATTACHED = "ON_TAB_ATTACHED"),
          (e.ON_TAB_REMOVED = "ON_TAB_REMOVED"),
          (e.ON_TAB_REPLACED = "ON_TAB_REPLACED"),
          (e.ON_TAB_ZOOM_CHANGE = "ON_TAB_ZOOM_CHANGE");
      })(t.TabServiceEvents || (t.TabServiceEvents = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FgNavTypes = void 0),
      (t.FgNavTypes = {
        FGNAV_STATE_SERVICE: Symbol.for("FGNAV_STATE_SERVICE"),
        FGNAV_DATA_SERVICE: Symbol.for("FGNAV_DATA_SERVICE"),
        FGNAV_TAB_EVENTS_PROCESS_SERVICE: Symbol.for("FGNAV_TAB_EVENTS_PROCESS_SERVICE"),
        FGNAV_QUEUE_SERVICE: Symbol.for("FGNAV_QUEUE_SERVICE"),
        FGNAV_ENABLED: Symbol.for("FGNAV_ENABLED"),
        FGNAV_PANALYTICS_ID: Symbol.for("FGNAV_PANALYTICS_ID"),
        FGNAV_INSTANCE_ID: Symbol.for("FGNAV_INSTANCE_ID"),
        FGNAV_PARTNER_ID: Symbol.for("FGNAV_PARTNER_ID"),
        FGNAV_DISTRIBUTOR_ID: Symbol.for("FGNAV_DISTRIBUTOR_ID"),
        FGNAV_LOGGING: Symbol.for("FGNAV_LOGGING"),
        FGNAV_LOGGER: Symbol.for("FGNAV_LOGGER")
      });
  },
  function (e, t) {
    var n,
      i,
      r = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        i = a;
      }
    })();
    var c,
      u = [],
      l = !1,
      d = -1;
    function h() {
      l && c && ((l = !1), c.length ? (u = c.concat(u)) : (d = -1), u.length && f());
    }
    function f() {
      if (!l) {
        var e = s(h);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++d < t; ) c && c[d].run();
          (d = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === a || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(e);
            try {
              i(e);
            } catch (t) {
              try {
                return i.call(null, e);
              } catch (t) {
                return i.call(this, e);
              }
            }
          })(e);
      }
    }
    function v(e, t) {
      (this.fun = e), (this.array = t);
    }
    function p() {}
    (r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new v(e, t)), 1 !== u.length || l || s(f);
    }),
      (v.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = p),
      (r.addListener = p),
      (r.once = p),
      (r.off = p),
      (r.removeListener = p),
      (r.removeAllListeners = p),
      (r.emit = p),
      (r.prependListener = p),
      (r.prependOnceListener = p),
      (r.listeners = function (e) {
        return [];
      }),
      (r.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingOnSyntax = void 0);
    var i = n(21),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingWhenSyntax = void 0);
    var i = n(20),
      r = n(31),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.UrlsSafeCheckEvents = void 0),
      (function (e) {
        (e.SAFE_STATUS_UPDATED = "URLS_SAFE_CHECK__STATUS_UPDATED"),
          (e.GET_ACTIVE_TAB_STATE = "URLS_SAFE_CHECK__GET_ACTIVE_TAB_STATE"),
          (e.MUTE_NOTIFICATION = "URLS_SAFE_CHECK__MUTE_NOTIFICATION"),
          (e.ENABLE_LIB = "URLS_ENABLE_LIB"),
          (e.DISABLE_LIB = "URLS_DISABLE_LIB");
      })(t.UrlsSafeCheckEvents || (t.UrlsSafeCheckEvents = {}));
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabStateService = void 0);
    const s = n(0),
      c = n(2),
      u = n(135),
      l = n(107),
      d = n(136),
      h = n(25),
      f = n(96),
      v = n(16),
      p = n(108);
    let _ = class {
      constructor(e, t, n) {
        (this.internalDispatcher = e),
          (this.externalDispatcher = t),
          (this.logger = n),
          (this.tabs = []),
          (this.sameUrlUpdateThreshold = 500),
          (this.resetOpenerTabIdForNewNavigation = !1);
      }
      onTabCreated(e) {
        const { tab: t } = e,
          { id: n, openerTabId: i, url: r, pendingUrl: o } = t,
          a = this.addTabState(n),
          s = d.isBlankPage(o) ? void 0 : i;
        a.setUrl(r), a.setSourceTabId(s), this.logger.log(`TabStateService: tab create event, tabId: ${n}, url: "${r}", openedTabId: ${s}`);
      }
      onTabUpdated(e) {
        const { tab: t, changeInfo: n } = e;
        if (!n.status) return;
        if ("loading" === n.status && !n.hasOwnProperty("url")) return;
        n.hasOwnProperty("url") && this.emitGetNavMethodEvent(t.id);
        const { id: i, url: r } = t,
          { status: o } = n;
        this.logger.log(`TabStateService: tab update event (${n.status}), tabId: ${i}, url: ${r}`);
        const a = this.getTabStateOrCreate(i, r);
        this.isStateChanged(a, r, o) &&
          (a.setUrl(r),
          (a.isBrowserServiceUrl = d.isWhiteListUrl(r) || d.isBlankPage(r)),
          "loading" === o &&
            (a.resetSession(),
            this.logger.log(`TabStateService: url change/reload detected, tabId: ${i}, url: ${r}`),
            a.isBrowserServiceUrl ||
              (a.incNavigationSequence(),
              this.logger.log(`TabStateService: tab navigation sequence incremented, tabId: ${a.tabId}, value: ${a.navigationSequence}`)),
            this.emitLoadingEvent(a)),
          a.setLastStatus(o),
          a.setLastUpdated(Date.now()),
          "complete" === o && (this.emitCompleteEvent(a), this.resetOpenerTabIdForNewNavigation && a.setSourceTabId(void 0)));
      }
      onGetNavigationMethodResponse(e, t) {
        const { id: n, url: i } = e,
          r = this.getTabState(n);
        this.logger.log(`TabStateService: get nav method response, tabId: ${n}, url: ${i}`, t);
        const o = t.urlRewrite ? l.NavigationMethod.URL_REWRITE : l.NavigationMethod.REQUEST;
        r.setNavigationMethod(o);
      }
      onTabRemoved(e) {
        const { tabId: t } = e;
        this.removeTabState(t), this.logger.log("TabStateService: tab remove event, tabId: " + t);
      }
      getTabState(e) {
        return this.tabs.find((t) => t.tabId === e);
      }
      getTabStateOrCreate(e, t) {
        let n = this.getTabState(e);
        return n || (this.logger.log(`TabStateService: adding tab, tabId: ${e}, url: ${t}`), (n = this.addTabState(e))), n;
      }
      addTabState(e) {
        this.logger.log("TabStateService: addTabState, tabId: " + e);
        const t = new u.Tab();
        return t.setTabId(e), t.resetSession(), this.tabs.push(t), t;
      }
      removeTabState(e) {
        const t = this.tabs.findIndex((t) => t.tabId === e);
        -1 !== t && this.tabs.splice(t, 1);
      }
      isStateChanged(e, t, n) {
        return e.url !== t || Date.now() - e.lastUpdated > this.sameUrlUpdateThreshold || e.lastStatus !== n;
      }
      emitGetNavMethodEvent(e) {
        return a(this, void 0, void 0, function* () {
          this.logger.log("TabStateService: emit get nav method");
          const t = new c.MarioEvent(h.TabStateEvents.TAB_STATE__GET_NAVIGATION_METHOD);
          this.externalDispatcher.emit(e, t);
        });
      }
      emitLoadingEvent(e) {
        const t = e.toDTO();
        this.logger.log("TabStateService: emitting tabState event: loading", t),
          this.logger.log("***************************loading******************************", t),
          this.internalDispatcher.emit(new c.MarioEvent(h.TabStateEvents.TAB_STATE_LOADING, t));
      }
      emitCompleteEvent(e) {
        return a(this, void 0, void 0, function* () {
          if (e.isBrowserServiceUrl) return;
          yield e.initNavigationMethod(),
            e.getNavigationMethod() === l.NavigationMethod.URL_REWRITE &&
              "Firefox" === (yield this.getBrowserData()).name.trim() &&
              (e.incNavigationSequence(), yield this.emitLoadingEvent(e));
          const t = e.toDTO();
          e.resetNavigationMethod(),
            this.logger.log("TabStateService: emitting tabState event: completed", t),
            this.internalDispatcher.emit(new c.MarioEvent(h.TabStateEvents.TAB_STATE_COMPLETED, t));
        });
      }
      getBrowserData() {
        return a(this, void 0, void 0, function* () {
          return p.getBrowserVersion();
        });
      }
    };
    (_ = i(
      [
        s.injectable(),
        o(0, s.inject(c.MARIO_TYPES.INTERNAL_DISPATCHER)),
        o(1, s.inject(c.MARIO_TYPES.EXTERNAL_DISPATCHER)),
        o(2, s.inject(v.TabStateTypes.LOGGER)),
        r("design:paramtypes", [Object, Object, f.TabStateLogger])
      ],
      _
    )),
      (t.TabStateService = _);
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TabStateEvents = void 0),
      (function (e) {
        (e.GET_NAVIGATION_METHOD_RESPONSE = "GET_NAVIGATION_METHOD_RESPONSE"),
          (e.TAB_STATE_LOADING = "TAB_STATE__LOADING"),
          (e.TAB_STATE_COMPLETED = "TAB_STATE__COMPLETED"),
          (e.TAB_STATE__GET_NAVIGATION_METHOD = "TAB_STATE__GET_NAVIGATION_METHOD");
      })(t.TabStateEvents || (t.TabStateEvents = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.MetadataReader = void 0);
    var i = n(1),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.isStackOverflowExeption = void 0);
    var i = n(3);
    t.isStackOverflowExeption = function (e) {
      return e instanceof RangeError || e.message === i.STACK_OVERFLOW;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.inject = t.LazyServiceIdentifer = void 0);
    var i = n(3),
      r = n(1),
      o = n(4),
      a = n(7),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Target = void 0);
    var i = n(1),
      r = n(9),
      o = n(4),
      a = n(52),
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
            for (var t = 0, n = this.metadata; t < n.length; t++) {
              if (n[t].key === e) return !0;
            }
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingWhenOnSyntax = void 0);
    var i = n(20),
      r = n(21),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.typeConstraint = t.namedConstraint = t.taggedConstraint = t.traverseAncerstors = void 0);
    var i = n(1),
      r = n(4),
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
    t.namedConstraint = s;
    t.typeConstraint = function (e) {
      return function (t) {
        var n = null;
        if (null !== t) {
          if (((n = t.bindings[0]), "string" == typeof e)) return n.serviceIdentifier === e;
          var i = t.bindings[0].implementationType;
          return e === i;
        }
        return !1;
      };
    };
  },
  function (e, t, n) {
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
        },
      a =
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
    const s = n(0),
      c = n(5),
      u = n(71);
    let l = class {
      constructor(e, t) {
        (this.container = e),
          (this.loggerService = t),
          (this.counter = 0),
          (this.listeners = {}),
          (this.listenersIndex = {}),
          (this.onBeforeEmitListeners = []);
      }
      emit(e) {
        return a(this, void 0, void 0, function* () {
          this.loggerService.event("InternalDispatcher", e);
          try {
            this.onBeforeEmitListeners.forEach((t) => t(e));
          } catch (e) {
            this.loggerService.error(e);
          }
          const t = this.getEventListeners(e.event),
            n = [];
          for (const i in t) {
            const r = t[i],
              o = r.handle.apply(r, [e]);
            n.push(o);
          }
          yield Promise.all(n);
        });
      }
      on(e) {
        this.container.bind(e).toSelf().inSingletonScope();
        const t = this.container.get(e),
          n = t.on();
        this.loggerService.log(`InternalDispatcher: register a listener on event "${n}"`),
          void 0 === this.listeners[n] && (this.listeners[n] = []);
        const i = ++this.counter;
        return (this.listenersIndex[i] = n), (this.listeners[n][i] = t), i;
      }
      onBeforeEmit(e) {
        this.onBeforeEmitListeners.push(e);
      }
      hasEventListeners(e) {
        return this.listeners.hasOwnProperty(e) && this.listeners[e].length > 0;
      }
      getEventListeners(e) {
        if (this.hasEventListeners(e)) {
          return this.listeners[e].filter((e) => !!e.handle);
        }
        return [];
      }
      getListener(e) {
        if (!this.hasListener(e))
          throw new u.InternalDispatcherListenerIsNotRegisteredException(`a listener with id "${e}" is not registered`);
        const t = this.listenersIndex[e];
        return this.listeners[t][e];
      }
      removeListener(e) {
        if (!this.hasListener(e))
          throw new u.InternalDispatcherListenerIsNotRegisteredException(`a listener with id "${e}" is not registered`);
        const t = this.listenersIndex[e];
        delete this.listenersIndex[e], delete this.listeners[t][e];
      }
      hasListener(e) {
        return this.listenersIndex.hasOwnProperty(e);
      }
    };
    (l = i(
      [
        s.injectable(),
        o(0, s.inject(c.MARIO_TYPES.CONTAINER)),
        o(1, s.inject(c.MARIO_TYPES.LOGGER_SERVICE)),
        r("design:paramtypes", [Object, Object])
      ],
      l
    )),
      (t.InternalDispatcher = l);
  },
  function (e, t, n) {
    "use strict";
    var i,
      r =
        (this && this.__decorate) ||
        function (e, t, n, i) {
          var r,
            o = arguments.length,
            a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
          else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
          return o > 3 && a && Object.defineProperty(t, n, a), a;
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const o = n(0),
      a = n(73);
    let s = (i = class {
      constructor() {
        (this.onLogListeners = []),
          (this.onEventListeners = []),
          (this.onErrorListeners = []),
          (this.onWarnListeners = []),
          (this.onFilterLogListeners = []),
          (this.enabled = !0);
      }
      log(e, t) {
        const n = this.time();
        (n[0] += "%c[INFO] %c" + e), n.push(this.color(i.LIGHT_BLUE_COLOR) + this.fontWeight(600)), n.push(this.color(i.BLACK_COLOR));
        let r = "";
        void 0 !== t && (r = a(t, null, 2));
        const o = this.prepareOutput(n[0], r);
        !this.filterInfo(o) && (this.enabled && console.log.apply(console, n), this.enabled && r && console.log(r)),
          this.handleOnLogListeners(e, t, o);
      }
      event(e, t) {
        const n = this.time();
        (n[0] += `%c[EVENT ${t.event}] %c${e}`),
          n.push(this.color(i.LIGHT_GREEN_COLOR) + this.fontWeight(600)),
          n.push(this.color(i.BLACK_COLOR)),
          this.enabled && console.log.apply(console, n);
        const r = a(t.data, null, 2);
        this.enabled && console.log(r), this.handleOnEventListeners(e, t, this.prepareOutput(n[0], r));
      }
      warn(e, t) {
        const n = this.time();
        (n[0] += "%c[WARN] %c" + e),
          n.push(this.color(i.RED_COLOR) + this.fontWeight(600)),
          n.push(this.color(i.BLACK_COLOR)),
          this.enabled && console.log.apply(console, n);
        let r = "";
        this.enabled && void 0 !== t && (console.log(t), (r = a(t, null, 2))),
          this.handleOnWarnListeners(e, t, this.prepareOutput(n[0], r));
      }
      error(e) {
        const t = this.time();
        (t[0] += "%c[ERROR] %c" + e.message),
          t.push(this.color(i.RED_COLOR) + this.fontWeight(600)),
          t.push(this.color(i.BLACK_COLOR)),
          this.enabled && (console.log.apply(console, t), e.stack && console.error(e.stack)),
          this.handleOnErrorListeners(e);
      }
      onLog(e) {
        this.onLogListeners.push(e);
      }
      onEvent(e) {
        this.onEventListeners.push(e);
      }
      onWarn(e) {
        this.onWarnListeners.push(e);
      }
      onError(e) {
        this.onErrorListeners.push(e);
      }
      onFilterLog(e) {
        this.onFilterLogListeners.push(e);
      }
      disable() {
        this.enabled = !1;
      }
      enable() {
        this.enabled = !0;
      }
      handleOnLogListeners(e, t, n) {
        for (const i of this.onLogListeners) i(e, t, n);
      }
      handleOnWarnListeners(e, t, n) {
        for (const i of this.onWarnListeners) i(e, t, n);
      }
      handleOnEventListeners(e, t, n) {
        for (const i of this.onEventListeners) i(e, t, n);
      }
      handleOnErrorListeners(e, t) {
        for (const n of this.onErrorListeners) n(e, t);
      }
      filterInfo(e) {
        for (const t of this.onFilterLogListeners) {
          if (t(e)) return !0;
        }
        return !1;
      }
      time() {
        const e = new Date();
        let t = "%c[";
        return (
          (t += `tz:${e.getTimezoneOffset()} `),
          (t += this.pad(e.getDate().toString(), 2) + "/"),
          (t += this.pad(e.getMonth().toString(), 2) + "/"),
          (t += e.getFullYear() + " "),
          (t += this.pad(e.getHours().toString(), 2) + ":"),
          (t += this.pad(e.getMinutes().toString(), 2) + ":"),
          (t += this.pad(e.getSeconds().toString(), 2) + " "),
          (t += "" + this.pad(e.getMilliseconds().toString(), 4)),
          (t += "]%c "),
          [t, this.fontWeight(600), this.color(i.BLACK_COLOR)]
        );
      }
      color(e) {
        return `color: ${e};`;
      }
      fontWeight(e) {
        return `font-weight: ${e};`;
      }
      pad(e, t, n) {
        const i = n || "0";
        return e.length >= t ? e : new Array(t - e.length + 1).join(i) + e;
      }
      prepareOutput(e, t) {
        return `${e.replace(/%c/g, "")}\n${t}`;
      }
    });
    (s.BLACK_COLOR = "#000"),
      (s.RED_COLOR = "#f40f3f"),
      (s.LIGHT_GREEN_COLOR = "#1e9f3e"),
      (s.LIGHT_BLUE_COLOR = "#4285f4"),
      (s = i = r([o.injectable()], s)),
      (t.LoggerService = s);
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    const a = n(0),
      s = n(5),
      c = n(77),
      u = n(78);
    let l = class {
      constructor(e, t, n) {
        (this.container = e),
          (this.loggerService = t),
          (this.tabService = n),
          (this.listeners = {}),
          (this.listenersIndex = {}),
          (this.counter = 0),
          (this.beforeEmitListeners = []),
          chrome.runtime.onMessage.addListener((e, t, n) => {
            if ((this.internalEmit(c.ExternalDispatcherEvents.ON_ANY_MESSAGE, e, t, n), this.isEventMessage(e))) {
              const i = e.event;
              this.loggerService.event("ExternalDispatcher: got", e), this.internalEmit(i, e, t, n);
            }
            return !0;
          });
      }
      emit(e, t) {
        this.loggerService.event("ExternalDispatcher: emit", t);
        try {
          this.beforeEmitListeners.forEach((n) => n(e, t));
        } catch (e) {
          this.loggerService.error(e);
        }
        this.tabService.sendMessage(e, t);
      }
      on(e) {
        const t = this.bind(e);
        return this.loggerService.log(`ExternalDispatcher: register an event listener "${t.on()}"`), this.addEventListener(t.on(), t);
      }
      onBeforeEmit(e) {
        this.beforeEmitListeners.push(e);
      }
      removeListener(e) {
        if (!this.hasListeners(e)) throw new u.ExternalDispatcherListenerIsNotFoundException(`Listener with id "${e}" is not found`);
        this.loggerService.log(`ExternalDispatcher: remove an event listener "${e}"`);
        const t = this.listenersIndex[e];
        delete this.listeners[t][e], delete this.listenersIndex[e];
      }
      getListener(e) {
        if (!this.hasListeners(e)) throw new u.ExternalDispatcherListenerIsNotFoundException(`Listener with id "${e}" is not found`);
        const t = this.listenersIndex[e];
        return this.listeners[t][e];
      }
      hasListeners(e) {
        return void 0 !== this.listenersIndex[e];
      }
      getEventListeners(e) {
        return this.hasEventListeners(e) ? this.listeners[e] : [];
      }
      hasEventListeners(e) {
        return void 0 !== this.listeners[e];
      }
      isEventMessage(e) {
        return "object" == typeof e && "string" == typeof e.event;
      }
      internalEmit(e, t, n, i) {
        if (!this.hasEventListeners(e)) return;
        const r = [],
          o = this.listeners[e];
        for (const e of Object.keys(o)) {
          const a = o[e],
            s = a.handle.apply(a, [t, n, i]);
          r.push(s);
        }
        Promise.all(r).then();
      }
      addEventListener(e, t) {
        void 0 === this.listeners[e] && (this.listeners[e] = {});
        const n = ++this.counter;
        return (this.listeners[e][n] = t), (this.listenersIndex[n] = e), n;
      }
      bind(e) {
        return this.container.bind(e).toSelf().inSingletonScope(), this.container.get(e);
      }
    };
    (l = i(
      [
        a.injectable(),
        o(0, a.inject(s.MARIO_TYPES.CONTAINER)),
        o(1, a.inject(s.MARIO_TYPES.LOGGER_SERVICE)),
        o(2, a.inject(s.MARIO_TYPES.TAB_SERVICE)),
        r("design:paramtypes", [Object, Object, Object])
      ],
      l
    )),
      (t.ExternalDispatcher = l);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = n(36);
    t.MarioEvent = class {
      constructor(e, t, n) {
        (this.event = e), (this.data = t), (this.id = n || i.Guid.create().toString());
      }
    };
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = (function () {
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
    t.Guid = i;
  },
  function (e, t, n) {
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
        },
      a =
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
    const s = n(0),
      c = n(2),
      u = n(5),
      l = n(86);
    let d = class {
      constructor(e) {
        (this.dispatcherService = e),
          (this.isListenOnBeforeNavigate = !1),
          (this.isListenOnCommitted = !1),
          (this.isListenOnDOMContentLoaded = !1),
          (this.isListenOnCompleted = !1),
          (this.isListenOnErrorOccurred = !1),
          (this.isListenOnCreatedNavigationTarget = !1),
          (this.isListenOnReferenceFragmentUpdated = !1),
          (this.isListenOnTabReplaced = !1),
          (this.isListenOnHistoryStateUpdated = !1);
      }
      listenOnBeforeNavigate() {
        this.isListenOnBeforeNavigate ||
          ((this.isListenOnBeforeNavigate = !0),
          chrome.webNavigation.onBeforeNavigate.addListener((e) => {
            const t = new c.MarioEvent(l.NavigationServiceEvents.NAVIGATION_ON_BEFORE_NAVIGATE, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnCommitted() {
        this.isListenOnCommitted ||
          ((this.isListenOnCommitted = !0),
          chrome.webNavigation.onCommitted.addListener((e) => {
            const t = new c.MarioEvent(l.NavigationServiceEvents.NAVIGATION_ON_COMMITTED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnDOMContentLoaded() {
        this.isListenOnDOMContentLoaded ||
          ((this.isListenOnDOMContentLoaded = !0),
          chrome.webNavigation.onDOMContentLoaded.addListener((e) => {
            const t = new c.MarioEvent(l.NavigationServiceEvents.NAVIGATION_ON_DOM_CONTENT_LOADED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnCompleted() {
        this.isListenOnCompleted ||
          ((this.isListenOnCompleted = !0),
          chrome.webNavigation.onCompleted.addListener((e) => {
            const t = new c.MarioEvent(l.NavigationServiceEvents.NAVIGATION_ON_COMPLETED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnErrorOccurred() {
        this.isListenOnErrorOccurred ||
          ((this.isListenOnErrorOccurred = !0),
          chrome.webNavigation.onErrorOccurred.addListener((e) => {
            const t = new c.MarioEvent(l.NavigationServiceEvents.NAVIGATION_ON_ERROR_OCCURRED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnCreatedNavigationTarget() {
        this.isListenOnCreatedNavigationTarget ||
          ((this.isListenOnCreatedNavigationTarget = !0),
          chrome.webNavigation.onCreatedNavigationTarget.addListener((e) => {
            const t = new c.MarioEvent(l.NavigationServiceEvents.NAVIGATION_ON_CREATED_NAVIGATION_TARGET, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnReferenceFragmentUpdated() {
        this.isListenOnReferenceFragmentUpdated ||
          ((this.isListenOnReferenceFragmentUpdated = !0),
          chrome.webNavigation.onReferenceFragmentUpdated.addListener((e) => {
            const t = new c.MarioEvent(l.NavigationServiceEvents.NAVIGATION_ON_REFERENCE_FRAGMNENT_UPDATED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnTabReplaced() {
        this.isListenOnTabReplaced ||
          ((this.isListenOnTabReplaced = !0),
          chrome.webNavigation.onTabReplaced.addListener((e) => {
            const t = new c.MarioEvent(l.NavigationServiceEvents.NAVIGATION_ON_TAB_REPLACED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnHistoryStateUpdated() {
        this.isListenOnHistoryStateUpdated ||
          ((this.isListenOnHistoryStateUpdated = !0),
          chrome.webNavigation.onHistoryStateUpdated.addListener((e) => {
            const t = new c.MarioEvent(l.NavigationServiceEvents.NAVIGATION_ON_HISTORY_STATE_UPDATED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      getFrame(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            try {
              chrome.webNavigation.getFrame(e, (e) => t(e));
            } catch (e) {
              n(e);
            }
          });
        });
      }
      getAllFrames(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            try {
              chrome.webNavigation.getAllFrames(e, (e) => t(e));
            } catch (e) {
              n(e);
            }
          });
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(u.MARIO_TYPES.INTERNAL_DISPATCHER)), r("design:paramtypes", [Object])], d)),
      (t.NavigationService = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    const s = n(0),
      c = n(2),
      u = n(5),
      l = n(13);
    let d = class {
      constructor(e) {
        (this.dispatcherService = e),
          (this.isListenOnBeforeRequest = !1),
          (this.isListenOnBeforeSendHeaders = !1),
          (this.isListenOnSendHeaders = !1),
          (this.isListenOnHeadersReceived = !1),
          (this.isListenOnAuthRequired = !1),
          (this.isListenOnResponseStarted = !1),
          (this.isListenOnBeforeRedirect = !1),
          (this.isListenOnCompleted = !1),
          (this.isListenOnErrorOccurred = !1),
          (this.isListenOnActionIgnored = !1);
      }
      listenOnBeforeRequest(e, t) {
        this.isListenOnBeforeRequest ||
          ((this.isListenOnBeforeRequest = !0),
          chrome.webRequest.onBeforeRequest.addListener(
            (e) => {
              const t = new c.MarioEvent(l.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_REQUEST, { details: e });
              this.dispatcherService.emit(t).then();
            },
            e,
            t
          ));
      }
      listenOnBeforeSendHeaders(e, t) {
        this.isListenOnBeforeSendHeaders ||
          ((this.isListenOnBeforeSendHeaders = !0),
          chrome.webRequest.onBeforeSendHeaders.addListener(
            (e) => {
              const t = new c.MarioEvent(l.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_SEND_HEADERS, { details: e });
              this.dispatcherService.emit(t).then();
            },
            e,
            t
          ));
      }
      listenOnSendHeaders(e, t) {
        this.isListenOnSendHeaders ||
          ((this.isListenOnSendHeaders = !0),
          chrome.webRequest.onSendHeaders.addListener(
            (e) => {
              const t = new c.MarioEvent(l.WebRequestServiceEvents.WEB_REQUEST_ON_SEND_HEADERS, { details: e });
              this.dispatcherService.emit(t).then();
            },
            e,
            t
          ));
      }
      listenOnHeadersReceived(e, t) {
        this.isListenOnHeadersReceived ||
          ((this.isListenOnHeadersReceived = !0),
          chrome.webRequest.onHeadersReceived.addListener(
            (e) => {
              const t = new c.MarioEvent(l.WebRequestServiceEvents.WEB_REQUEST_ON_HEADERS_RECEIVED, { details: e });
              this.dispatcherService.emit(t).then();
            },
            e,
            t
          ));
      }
      listenOnAuthRequired(e, t) {
        this.isListenOnAuthRequired ||
          ((this.isListenOnAuthRequired = !0),
          chrome.webRequest.onAuthRequired.addListener(
            (e, t) => {
              const n = new c.MarioEvent(l.WebRequestServiceEvents.WEB_REQUEST_ON_AUTH_REQUIRED, { details: e, callback: t });
              this.dispatcherService.emit(n).then();
            },
            e,
            t
          ));
      }
      listenOnResponseStarted(e, t) {
        this.isListenOnResponseStarted ||
          ((this.isListenOnResponseStarted = !0),
          chrome.webRequest.onResponseStarted.addListener(
            (e) => {
              const t = new c.MarioEvent(l.WebRequestServiceEvents.WEB_REQUEST_ON_RESPONSE_STARTED, { details: e });
              this.dispatcherService.emit(t).then();
            },
            e,
            t
          ));
      }
      listenOnBeforeRedirect(e, t) {
        this.isListenOnBeforeRedirect ||
          ((this.isListenOnBeforeRedirect = !0),
          chrome.webRequest.onBeforeRedirect.addListener(
            (e) => {
              const t = new c.MarioEvent(l.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_REDIRECT, { details: e });
              this.dispatcherService.emit(t).then();
            },
            e,
            t
          ));
      }
      listenOnCompleted(e, t) {
        this.isListenOnCompleted ||
          ((this.isListenOnCompleted = !0),
          chrome.webRequest.onCompleted.addListener(
            (e) => {
              const t = new c.MarioEvent(l.WebRequestServiceEvents.WEB_REQUEST_ON_COMPLETED, { details: e });
              this.dispatcherService.emit(t).then();
            },
            e,
            t
          ));
      }
      listenOnErrorOccurred(e) {
        this.isListenOnErrorOccurred ||
          ((this.isListenOnErrorOccurred = !0),
          chrome.webRequest.onErrorOccurred.addListener((e) => {
            const t = new c.MarioEvent(l.WebRequestServiceEvents.WEB_REQUEST_ON_ERROR_OCCURRED, { details: e });
            this.dispatcherService.emit(t).then();
          }, e));
      }
      listenOnActionIgnored(e, t) {
        this.isListenOnActionIgnored ||
          ((this.isListenOnActionIgnored = !0),
          chrome.webRequest.onActionIgnored.addListener(
            (e) => {
              const t = new c.MarioEvent(l.WebRequestServiceEvents.WEB_REQUEST_ON_ACTION_IGNORED, { details: e });
              this.dispatcherService.emit(t).then();
            },
            e,
            t
          ));
      }
      handlerBehaviorChanged() {
        return a(this, void 0, void 0, function* () {
          return new Promise((e, t) => {
            try {
              chrome.webRequest.handlerBehaviorChanged(() => e());
            } catch (e) {
              t(e);
            }
          });
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(u.MARIO_TYPES.INTERNAL_DISPATCHER)), r("design:paramtypes", [Object])], d)),
      (t.WebRequestService = d);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e.CHROME_BROWSER = "CHROME_BROWSER"),
          (e.FIREFOX_BROWSER = "FIREFOX_BROWSER"),
          (e.EDGE_BROWSER = "EDGE_BROWSER"),
          (e.SAFARI_BROWSER = "SAFARI_BROWSER"),
          (e.OPERA_BROWSER = "OPERA_BROWSER"),
          (e.CHROMIUM_BROWSER = "CHROMIUM_BROWSER");
      })(t.BrowserEnum || (t.BrowserEnum = {}));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateUIID =
          t.isSameDomain =
          t.getDomain =
          t.getBrowserBlankPageUrl =
          t.isBlankPage =
          t.isWhiteListUrl =
          t.notConcurrent =
          t.valueToPromise =
            void 0);
      const r = n(117),
        o = n(118);
      function a() {
        return o.blankPage[e.env.BROWSER] || "about:blank";
      }
      function s(e) {
        try {
          const { host: t } = new URL(e);
          return t;
        } catch (t) {
          return e;
        }
      }
      (t.valueToPromise = function (e) {
        return new Promise((t) => {
          t(e);
        });
      }),
        (t.notConcurrent = function (e) {
          let t = !1;
          return () => (
            t ||
              (t = (() =>
                i(this, void 0, void 0, function* () {
                  try {
                    return yield e();
                  } finally {
                    t = !1;
                  }
                }))()),
            t
          );
        }),
        (t.isWhiteListUrl = function (e) {
          if ("" === e) return !0;
          const { protocol: t } = new URL(e);
          return r.whiteListProtocols.includes(t);
        }),
        (t.isBlankPage = function (e) {
          return e === a();
        }),
        (t.getBrowserBlankPageUrl = a),
        (t.getDomain = s),
        (t.isSameDomain = function (e, t) {
          if (e && t) return s(e) === s(t);
        }),
        (t.generateUIID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            const t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          });
        });
    }).call(this, n(19));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SensitiveDataFilterTypes = void 0),
      (t.SensitiveDataFilterTypes = {
        SDF_PARAM_ENABLED: Symbol.for("SDF_PARAM_ENABLED"),
        SDF_PARAM_HOST: Symbol.for("SDF_PARAM_HOST"),
        SDF_PARAM_LOGGING: Symbol.for("SDF_PARAM_LOGGING"),
        SDF_PARAM_RULES_UPDATE_INTERVAL: Symbol.for("SDF_PARAM_RULES_UPDATE_INTERVAL"),
        SDF_SERVICE: Symbol.for("SDF_SERVICE")
      });
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delay =
          t.generateUIID =
          t.isSameOrigin =
          t.isSameDomain =
          t.getDomain =
          t.getBrowserBlankPageUrl =
          t.isBlankPage =
          t.isWhiteListUrl =
          t.notConcurrent =
          t.valueToPromise =
            void 0);
      const r = n(132),
        o = n(133);
      function a() {
        return o.blankPage[e.env.BROWSER] || "about:blank";
      }
      function s(e) {
        try {
          const { host: t } = new URL(e);
          return t;
        } catch (t) {
          return e;
        }
      }
      (t.valueToPromise = function (e) {
        return new Promise((t) => {
          t(e);
        });
      }),
        (t.notConcurrent = function (e) {
          let t = !1;
          return () => (
            t ||
              (t = (() =>
                i(this, void 0, void 0, function* () {
                  try {
                    return yield e();
                  } finally {
                    t = !1;
                  }
                }))()),
            t
          );
        }),
        (t.isWhiteListUrl = function (e) {
          if ("" === e) return !0;
          const { protocol: t } = new URL(e);
          return r.whiteListProtocols.includes(t);
        }),
        (t.isBlankPage = function (e) {
          return e === a();
        }),
        (t.getBrowserBlankPageUrl = a),
        (t.getDomain = s),
        (t.isSameDomain = function (e, t) {
          if (e && t) return s(e) === s(t);
        }),
        (t.isSameOrigin = function (e, t) {
          return new URL(e).origin === new URL(t).origin;
        }),
        (t.generateUIID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            const t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          });
        }),
        (t.delay = function (e) {
          return i(this, void 0, void 0, function* () {
            return new Promise((t) => setTimeout(t, e));
          });
        });
    }).call(this, n(19));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(44);
      const r = n(0),
        o = n(32),
        a = n(33),
        s = n(15),
        c = n(74),
        u = n(76),
        l = n(5),
        d = n(34),
        h = n(80);
      t.Mario = class {
        constructor(t, n = {}) {
          (this.isInitialized = !1),
            (this._container = n.container ? n.container : new r.Container()),
            this._container.bind(l.MARIO_TYPES.BROWSER).toConstantValue(t),
            this._container.bind(l.MARIO_TYPES.CONTAINER).toConstantValue(this._container);
          const i = n.logger ? n.logger : a.LoggerService,
            c = n.internalDispatcher ? n.internalDispatcher : o.InternalDispatcher,
            f = n.externalDispatcher ? n.externalDispatcher : d.ExternalDispatcher,
            v = n.tab ? n.tab : s.TabService;
          this.registerService(l.MARIO_TYPES.LOGGER_SERVICE, i),
            n.loggerEnabled ? this.logger().enable() : this.logger().disable(),
            this.logger().log(`Core: this build is for "${t.toString()}"`),
            this.registerService(l.MARIO_TYPES.EXTENSION_SERVICE, u.Extension),
            this.extension(),
            this.registerService(l.MARIO_TYPES.INTERNAL_DISPATCHER, c),
            this.registerService(l.MARIO_TYPES.EXTERNAL_DISPATCHER, f),
            this.registerService(l.MARIO_TYPES.PORT_DISPATCHER, h.PortDispatcher),
            this.registerService(l.MARIO_TYPES.TAB_SERVICE, v),
            this.getService(l.MARIO_TYPES.PORT_DISPATCHER);
          (e.window.mario = this), this.coreInitialized();
        }
        registerModule(e, t) {
          return i(this, void 0, void 0, function* () {
            const n = new e(this);
            this.logger().log(`Core: registering a module "${n.name()}"`);
            try {
              yield n.register(t), this.logger().log(`Core: the module "${n.name()}" is registered`);
            } catch (e) {
              this.logger().error(e);
            }
          });
        }
        registerService(e, t) {
          this.isCoreInitialized() && this.logger().log(`Core: registered a service "${e.toString()}"`),
            this.hasService(e) || this._container.bind(e).to(t).inSingletonScope();
        }
        getService(e) {
          if (!this.hasService(e)) {
            const t = `Can't get service: service '${e.toString()}' is not registered`;
            throw (this.isCoreInitialized() && this.logger().warn(t), new c.CoreServiceIsNotRegisteredException(t));
          }
          return this._container.get(e);
        }
        hasService(e) {
          return this._container.isBound(e);
        }
        internalDispatcher() {
          return this.getService(l.MARIO_TYPES.INTERNAL_DISPATCHER);
        }
        externalDispatcher() {
          return this.getService(l.MARIO_TYPES.EXTERNAL_DISPATCHER);
        }
        portDispatcher() {
          return this.getService(l.MARIO_TYPES.PORT_DISPATCHER);
        }
        logger() {
          return this.getService(l.MARIO_TYPES.LOGGER_SERVICE);
        }
        container() {
          return this._container;
        }
        tabService() {
          return this.getService(l.MARIO_TYPES.TAB_SERVICE);
        }
        extension() {
          return this.getService(l.MARIO_TYPES.EXTENSION_SERVICE);
        }
        coreInitialized() {
          this.isInitialized = !0;
        }
        isCoreInitialized() {
          return this.isInitialized;
        }
      };
    }).call(this, n(24));
  },
  function (e, t, n) {
    (function (e, t) {
      /*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var n;
      !(function (n) {
        !(function (i) {
          var r = "object" == typeof t ? t : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(),
            o = a(n);
          function a(e, t) {
            return function (n, i) {
              "function" != typeof e[n] && Object.defineProperty(e, n, { configurable: !0, writable: !0, value: i }), t && t(n, i);
            };
          }
          void 0 === r.Reflect ? (r.Reflect = n) : (o = a(r.Reflect, o)),
            (function (t) {
              var n = Object.prototype.hasOwnProperty,
                i = "function" == typeof Symbol,
                r = i && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
                o = i && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
                a = "function" == typeof Object.create,
                s = { __proto__: [] } instanceof Array,
                c = !a && !s,
                u = {
                  create: a
                    ? function () {
                        return M(Object.create(null));
                      }
                    : s
                    ? function () {
                        return M({ __proto__: null });
                      }
                    : function () {
                        return M({});
                      },
                  has: c
                    ? function (e, t) {
                        return n.call(e, t);
                      }
                    : function (e, t) {
                        return t in e;
                      },
                  get: c
                    ? function (e, t) {
                        return n.call(e, t) ? e[t] : void 0;
                      }
                    : function (e, t) {
                        return e[t];
                      }
                },
                l = Object.getPrototypeOf(Function),
                d = "object" == typeof e && e.env && "true" === e.env.REFLECT_METADATA_USE_MAP_POLYFILL,
                h =
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
                              (e.prototype[o] = function () {
                                return this;
                              }),
                              (e.prototype.next = function () {
                                var e = this._index;
                                if (e >= 0 && e < this._keys.length) {
                                  var n = this._selector(this._keys[e], this._values[e]);
                                  return (
                                    e + 1 >= this._keys.length ? ((this._index = -1), (this._keys = t), (this._values = t)) : this._index++,
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
                              return new n(this._keys, this._values, r);
                            }),
                            (t.prototype.entries = function () {
                              return new n(this._keys, this._values, a);
                            }),
                            (t.prototype["@@iterator"] = function () {
                              return this.entries();
                            }),
                            (t.prototype[o] = function () {
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
                        function r(e, t) {
                          return t;
                        }
                        function a(e, t) {
                          return [e, t];
                        }
                      })()
                    : Map,
                f =
                  d || "function" != typeof Set || "function" != typeof Set.prototype.entries
                    ? (function () {
                        function e() {
                          this._map = new h();
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
                          (e.prototype[o] = function () {
                            return this.keys();
                          }),
                          e
                        );
                      })()
                    : Set,
                v = new (
                  d || "function" != typeof WeakMap
                    ? (function () {
                        var e = u.create(),
                          t = i();
                        return (function () {
                          function e() {
                            this._key = i();
                          }
                          return (
                            (e.prototype.has = function (e) {
                              var t = r(e, !1);
                              return void 0 !== t && u.has(t, this._key);
                            }),
                            (e.prototype.get = function (e) {
                              var t = r(e, !1);
                              return void 0 !== t ? u.get(t, this._key) : void 0;
                            }),
                            (e.prototype.set = function (e, t) {
                              return (r(e, !0)[this._key] = t), this;
                            }),
                            (e.prototype.delete = function (e) {
                              var t = r(e, !1);
                              return void 0 !== t && delete t[this._key];
                            }),
                            (e.prototype.clear = function () {
                              this._key = i();
                            }),
                            e
                          );
                        })();
                        function i() {
                          var t;
                          do {
                            t = "@@WeakMap@@" + a();
                          } while (u.has(e, t));
                          return (e[t] = !0), t;
                        }
                        function r(e, i) {
                          if (!n.call(e, t)) {
                            if (!i) return;
                            Object.defineProperty(e, t, { value: u.create() });
                          }
                          return e[t];
                        }
                        function o(e, t) {
                          for (var n = 0; n < t; ++n) e[n] = (255 * Math.random()) | 0;
                          return e;
                        }
                        function a() {
                          var e,
                            t =
                              ((e = 16),
                              "function" == typeof Uint8Array
                                ? "undefined" != typeof crypto
                                  ? crypto.getRandomValues(new Uint8Array(e))
                                  : "undefined" != typeof msCrypto
                                  ? msCrypto.getRandomValues(new Uint8Array(e))
                                  : o(new Uint8Array(e), e)
                                : o(new Array(e), e));
                          (t[6] = (79 & t[6]) | 64), (t[8] = (191 & t[8]) | 128);
                          for (var n = "", i = 0; i < 16; ++i) {
                            var r = t[i];
                            (4 !== i && 6 !== i && 8 !== i) || (n += "-"), r < 16 && (n += "0"), (n += r.toString(16).toLowerCase());
                          }
                          return n;
                        }
                      })()
                    : WeakMap
                )();
              function p(e, t, n) {
                var i = v.get(e);
                if (T(i)) {
                  if (!n) return;
                  (i = new h()), v.set(e, i);
                }
                var r = i.get(t);
                if (T(r)) {
                  if (!n) return;
                  (r = new h()), i.set(t, r);
                }
                return r;
              }
              function _(e, t, n) {
                var i = p(t, n, !1);
                return !T(i) && !!i.has(e);
              }
              function g(e, t, n) {
                var i = p(t, n, !1);
                if (!T(i)) return i.get(e);
              }
              function S(e, t, n, i) {
                p(n, i, !0).set(e, t);
              }
              function E(e, t) {
                var n = [],
                  i = p(e, t, !1);
                if (T(i)) return n;
                for (
                  var r = (function (e) {
                      var t = C(e, o);
                      if (!I(t)) throw new TypeError();
                      var n = t.call(e);
                      if (!m(n)) throw new TypeError();
                      return n;
                    })(i.keys()),
                    a = 0;
                  ;

                ) {
                  var s = w(r);
                  if (!s) return (n.length = a), n;
                  var c = s.value;
                  try {
                    n[a] = c;
                  } catch (e) {
                    try {
                      P(r);
                    } finally {
                      throw e;
                    }
                  }
                  a++;
                }
              }
              function y(e) {
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
              function b(e) {
                return null === e;
              }
              function m(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e;
              }
              function O(e, t) {
                switch (y(e)) {
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    return e;
                }
                var n = 3 === t ? "string" : 5 === t ? "number" : "default",
                  i = C(e, r);
                if (void 0 !== i) {
                  var o = i.call(e, n);
                  if (m(o)) throw new TypeError();
                  return o;
                }
                return (function (e, t) {
                  if ("string" === t) {
                    var n = e.toString;
                    if (I(n)) if (!m((r = n.call(e)))) return r;
                    if (I((i = e.valueOf))) if (!m((r = i.call(e)))) return r;
                  } else {
                    var i;
                    if (I((i = e.valueOf))) if (!m((r = i.call(e)))) return r;
                    var r,
                      o = e.toString;
                    if (I(o)) if (!m((r = o.call(e)))) return r;
                  }
                  throw new TypeError();
                })(e, "default" === n ? "number" : n);
              }
              function R(e) {
                var t = O(e, 3);
                return "symbol" == typeof t
                  ? t
                  : (function (e) {
                      return "" + e;
                    })(t);
              }
              function A(e) {
                return Array.isArray
                  ? Array.isArray(e)
                  : e instanceof Object
                  ? e instanceof Array
                  : "[object Array]" === Object.prototype.toString.call(e);
              }
              function I(e) {
                return "function" == typeof e;
              }
              function N(e) {
                return "function" == typeof e;
              }
              function C(e, t) {
                var n = e[t];
                if (null != n) {
                  if (!I(n)) throw new TypeError();
                  return n;
                }
              }
              function w(e) {
                var t = e.next();
                return !t.done && t;
              }
              function P(e) {
                var t = e.return;
                t && t.call(e);
              }
              function D(e) {
                var t = Object.getPrototypeOf(e);
                if ("function" != typeof e || e === l) return t;
                if (t !== l) return t;
                var n = e.prototype,
                  i = n && Object.getPrototypeOf(n);
                if (null == i || i === Object.prototype) return t;
                var r = i.constructor;
                return "function" != typeof r || r === e ? t : r;
              }
              function M(e) {
                return (e.__ = void 0), delete e.__, e;
              }
              t("decorate", function (e, t, n, i) {
                if (T(n)) {
                  if (!A(e)) throw new TypeError();
                  if (!N(t)) throw new TypeError();
                  return (function (e, t) {
                    for (var n = e.length - 1; n >= 0; --n) {
                      var i = (0, e[n])(t);
                      if (!T(i) && !b(i)) {
                        if (!N(i)) throw new TypeError();
                        t = i;
                      }
                    }
                    return t;
                  })(e, t);
                }
                if (!A(e)) throw new TypeError();
                if (!m(t)) throw new TypeError();
                if (!m(i) && !T(i) && !b(i)) throw new TypeError();
                return (
                  b(i) && (i = void 0),
                  (function (e, t, n, i) {
                    for (var r = e.length - 1; r >= 0; --r) {
                      var o = (0, e[r])(t, n, i);
                      if (!T(o) && !b(o)) {
                        if (!m(o)) throw new TypeError();
                        i = o;
                      }
                    }
                    return i;
                  })(e, t, (n = R(n)), i)
                );
              }),
                t("metadata", function (e, t) {
                  return function (n, i) {
                    if (!m(n)) throw new TypeError();
                    if (
                      !T(i) &&
                      !(function (e) {
                        switch (y(e)) {
                          case 3:
                          case 4:
                            return !0;
                          default:
                            return !1;
                        }
                      })(i)
                    )
                      throw new TypeError();
                    S(e, t, n, i);
                  };
                }),
                t("defineMetadata", function (e, t, n, i) {
                  if (!m(n)) throw new TypeError();
                  return T(i) || (i = R(i)), S(e, t, n, i);
                }),
                t("hasMetadata", function (e, t, n) {
                  if (!m(t)) throw new TypeError();
                  return (
                    T(n) || (n = R(n)),
                    (function e(t, n, i) {
                      if (_(t, n, i)) return !0;
                      var r = D(n);
                      return !b(r) && e(t, r, i);
                    })(e, t, n)
                  );
                }),
                t("hasOwnMetadata", function (e, t, n) {
                  if (!m(t)) throw new TypeError();
                  return T(n) || (n = R(n)), _(e, t, n);
                }),
                t("getMetadata", function (e, t, n) {
                  if (!m(t)) throw new TypeError();
                  return (
                    T(n) || (n = R(n)),
                    (function e(t, n, i) {
                      if (_(t, n, i)) return g(t, n, i);
                      var r = D(n);
                      return b(r) ? void 0 : e(t, r, i);
                    })(e, t, n)
                  );
                }),
                t("getOwnMetadata", function (e, t, n) {
                  if (!m(t)) throw new TypeError();
                  return T(n) || (n = R(n)), g(e, t, n);
                }),
                t("getMetadataKeys", function (e, t) {
                  if (!m(e)) throw new TypeError();
                  return (
                    T(t) || (t = R(t)),
                    (function e(t, n) {
                      var i = E(t, n),
                        r = D(t);
                      if (null === r) return i;
                      var o = e(r, n);
                      if (o.length <= 0) return i;
                      if (i.length <= 0) return o;
                      for (var a = new f(), s = [], c = 0, u = i; c < u.length; c++) {
                        var l = u[c];
                        a.has(l) || (a.add(l), s.push(l));
                      }
                      for (var d = 0, h = o; d < h.length; d++) {
                        l = h[d];
                        a.has(l) || (a.add(l), s.push(l));
                      }
                      return s;
                    })(e, t)
                  );
                }),
                t("getOwnMetadataKeys", function (e, t) {
                  if (!m(e)) throw new TypeError();
                  return T(t) || (t = R(t)), E(e, t);
                }),
                t("deleteMetadata", function (e, t, n) {
                  if (!m(t)) throw new TypeError();
                  T(n) || (n = R(n));
                  var i = p(t, n, !1);
                  if (T(i)) return !1;
                  if (!i.delete(e)) return !1;
                  if (i.size > 0) return !0;
                  var r = v.get(t);
                  return r.delete(n), r.size > 0 || v.delete(t), !0;
                });
            })(o);
        })();
      })(n || (n = {}));
    }).call(this, n(19), n(24));
  },
  function (e, t, n) {
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
                        if (!((r = a.trys), (r = r.length > 0 && r[r.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
    var a = n(46),
      s = n(3),
      c = n(6),
      u = n(1),
      l = n(26),
      d = n(47),
      h = n(54),
      f = n(56),
      v = n(9),
      p = n(12),
      _ = n(59),
      g = n(60),
      S = (function () {
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
            (this.id = v.id()),
            (this._bindingDictionary = new g.Lookup()),
            (this._snapshots = []),
            (this._middleware = null),
            (this.parent = null),
            (this._metadataReader = new l.MetadataReader());
        }
        return (
          (e.merge = function (t, n) {
            for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
            var a = new e(),
              s = o([t, n], i).map(function (e) {
                return d.getBindingDictionary(e);
              }),
              c = d.getBindingDictionary(a);
            function u(e, t) {
              e.traverse(function (e, n) {
                n.forEach(function (e) {
                  t.add(e.serviceIdentifier, e.clone());
                });
              });
            }
            return (
              s.forEach(function (e) {
                u(e, c);
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
                      ? ((o = i[n]), (a = t(o.id)), [4, o.registry(a.bindFunction, a.unbindFunction, a.isboundFunction, a.rebindFunction)])
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
            var i = function (e) {
              return function (t) {
                return t.moduleId === e;
              };
            };
            t.forEach(function (t) {
              var n = i(t.id);
              e._bindingDictionary.removeByCondition(n);
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
              throw new Error(s.CANNOT_UNBIND + " " + p.getServiceIdentifierAsString(e));
            }
          }),
          (e.prototype.unbindAll = function () {
            this._bindingDictionary = new g.Lookup();
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
                o = d.createMockRequest(this, e, t, n);
              i = r.some(function (e) {
                return e.constraint(o);
              });
            }
            return !i && this.parent && (i = this.parent.isBoundTagged(e, t, n)), i;
          }),
          (e.prototype.snapshot = function () {
            this._snapshots.push(_.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware));
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
              var n = d.plan(e._metadataReader, e, t.isMultiInject, t.targetType, t.serviceIdentifier, t.key, t.value, t.avoidConstraints);
              return (n = t.contextInterceptor(n)), h.resolve(n);
            };
          }),
          e
        );
      })();
    t.Container = S;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Binding = void 0);
    var i = n(6),
      r = n(9),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.getBindingDictionary = t.createMockRequest = t.plan = void 0);
    var i = n(48),
      r = n(3),
      o = n(6),
      a = n(1),
      s = n(27),
      c = n(12),
      u = n(49),
      l = n(4),
      d = n(50),
      h = n(51),
      f = n(53),
      v = n(29);
    function p(e) {
      return e._bindingDictionary;
    }
    function _(e, t, n, o, a) {
      var s = g(n.container, a.serviceIdentifier),
        u = [];
      return (
        s.length === i.BindingCount.NoBindingsAvailable &&
          n.container.options.autoBindInjectable &&
          "function" == typeof a.serviceIdentifier &&
          e.getConstructorMetadata(a.serviceIdentifier).compilerGeneratedMetadata &&
          (n.container.bind(a.serviceIdentifier).toSelf(), (s = g(n.container, a.serviceIdentifier))),
        (u = t
          ? s
          : s.filter(function (e) {
              var t = new f.Request(e.serviceIdentifier, n, o, e, a);
              return e.constraint(t);
            })),
        (function (e, t, n, o) {
          switch (t.length) {
            case i.BindingCount.NoBindingsAvailable:
              if (n.isOptional()) return t;
              var a = c.getServiceIdentifierAsString(e),
                s = r.NOT_REGISTERED;
              throw ((s += c.listMetadataForTarget(a, n)), (s += c.listRegisteredBindingsForServiceIdentifier(o, a, g)), new Error(s));
            case i.BindingCount.OnlyOneBindingAvailable:
              if (!n.isArray()) return t;
            case i.BindingCount.MultipleBindingsAvailable:
            default:
              if (n.isArray()) return t;
              (a = c.getServiceIdentifierAsString(e)), (s = r.AMBIGUOUS_MATCH + " " + a);
              throw ((s += c.listRegisteredBindingsForServiceIdentifier(o, a, g)), new Error(s));
          }
        })(a.serviceIdentifier, u, a, n.container),
        u
      );
    }
    function g(e, t) {
      var n = [],
        i = p(e);
      return i.hasKey(t) ? (n = i.get(t)) : null !== e.parent && (n = g(e.parent, t)), n;
    }
    (t.getBindingDictionary = p),
      (t.plan = function (e, t, n, i, p, g, S, E) {
        void 0 === E && (E = !1);
        var y = new u.Context(t),
          T = (function (e, t, n, i, r, o) {
            var s = e ? a.MULTI_INJECT_TAG : a.INJECT_TAG,
              c = new l.Metadata(s, n),
              u = new v.Target(t, i, n, c);
            if (void 0 !== r) {
              var d = new l.Metadata(r, o);
              u.metadata.push(d);
            }
            return u;
          })(n, i, p, "", g, S);
        try {
          return (
            (function e(t, n, i, a, s, c) {
              var u, l;
              if (null === s) {
                (u = _(t, n, a, null, c)), (l = new f.Request(i, a, null, u, c));
                var v = new d.Plan(a, l);
                a.addPlan(v);
              } else (u = _(t, n, a, s, c)), (l = s.addChildRequest(c.serviceIdentifier, u, c));
              u.forEach(function (n) {
                var i = null;
                if (c.isArray()) i = l.addChildRequest(n.serviceIdentifier, n, c);
                else {
                  if (n.cache) return;
                  i = l;
                }
                if (n.type === o.BindingTypeEnum.Instance && null !== n.implementationType) {
                  var s = h.getDependencies(t, n.implementationType);
                  if (!a.container.options.skipBaseClassChecks) {
                    var u = h.getBaseClassDependencyCount(t, n.implementationType);
                    if (s.length < u) {
                      var d = r.ARGUMENTS_LENGTH_MISMATCH(h.getFunctionName(n.implementationType));
                      throw new Error(d);
                    }
                  }
                  s.forEach(function (n) {
                    e(t, !1, n.serviceIdentifier, a, i, n);
                  });
                }
              });
            })(e, E, p, y, null, T),
            y
          );
        } catch (e) {
          throw (s.isStackOverflowExeption(e) && y.plan && c.circularDependencyToException(y.plan.rootRequest), e);
        }
      }),
      (t.createMockRequest = function (e, t, n, i) {
        var r = new v.Target(o.TargetTypeEnum.Variable, "", t, new l.Metadata(n, i)),
          a = new u.Context(e);
        return new f.Request(t, a, null, [], r);
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingCount = void 0);
    t.BindingCount = { MultipleBindingsAvailable: 2, NoBindingsAvailable: 0, OnlyOneBindingAvailable: 1 };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Context = void 0);
    var i = n(9),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Plan = void 0);
    var i = function (e, t) {
      (this.parentContext = e), (this.rootRequest = t);
    };
    t.Plan = i;
  },
  function (e, t, n) {
    "use strict";
    var i =
      (this && this.__spreadArray) ||
      function (e, t) {
        for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n];
        return e;
      };
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.getFunctionName = t.getBaseClassDependencyCount = t.getDependencies = void 0);
    var r = n(28),
      o = n(3),
      a = n(6),
      s = n(1),
      c = n(12);
    Object.defineProperty(t, "getFunctionName", {
      enumerable: !0,
      get: function () {
        return c.getFunctionName;
      }
    });
    var u = n(29);
    function l(e, t, n, r) {
      var s = e.getConstructorMetadata(n),
        c = s.compilerGeneratedMetadata;
      if (void 0 === c) {
        var l = o.MISSING_INJECTABLE_ANNOTATION + " " + t + ".";
        throw new Error(l);
      }
      var f = s.userGeneratedMetadata,
        v = Object.keys(f),
        p = 0 === n.length && v.length > 0,
        _ = v.length > n.length,
        g = (function (e, t, n, i, r) {
          for (var o = [], a = 0; a < r; a++) {
            var s = d(a, e, t, n, i);
            null !== s && o.push(s);
          }
          return o;
        })(r, t, c, f, p || _ ? v.length : n.length),
        S = (function e(t, n) {
          for (var r = t.getPropertiesMetadata(n), o = [], s = Object.keys(r), c = 0, l = s; c < l.length; c++) {
            var d = l[c],
              f = r[d],
              v = h(r[d]),
              p = v.targetName || d,
              _ = v.inject || v.multiInject,
              g = new u.Target(a.TargetTypeEnum.ClassProperty, p, _);
            (g.metadata = f), o.push(g);
          }
          var S = Object.getPrototypeOf(n.prototype).constructor;
          if (S !== Object) {
            var E = e(t, S);
            o = i(i([], o), E);
          }
          return o;
        })(e, n);
      return i(i([], g), S);
    }
    function d(e, t, n, i, s) {
      var c = s[e.toString()] || [],
        l = h(c),
        d = !0 !== l.unmanaged,
        f = i[e],
        v = l.inject || l.multiInject;
      if (((f = v || f) instanceof r.LazyServiceIdentifer && (f = f.unwrap()), d)) {
        if (!t && (f === Object || f === Function || void 0 === f)) {
          var p = o.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + n + ".";
          throw new Error(p);
        }
        var _ = new u.Target(a.TargetTypeEnum.ConstructorArgument, l.targetName, f);
        return (_.metadata = c), _;
      }
      return null;
    }
    function h(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          t[e.key.toString()] = e.value;
        }),
        { inject: t[s.INJECT_TAG], multiInject: t[s.MULTI_INJECT_TAG], targetName: t[s.NAME_TAG], unmanaged: t[s.UNMANAGED_TAG] }
      );
    }
    (t.getDependencies = function (e, t) {
      return l(e, c.getFunctionName(t), t, !1);
    }),
      (t.getBaseClassDependencyCount = function e(t, n) {
        var i = Object.getPrototypeOf(n.prototype).constructor;
        if (i !== Object) {
          var r = l(t, c.getFunctionName(i), i, !0),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.QueryableString = void 0);
    var i = (function () {
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
    t.QueryableString = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Request = void 0);
    var i = n(9),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.resolve = void 0);
    var i = n(3),
      r = n(6),
      o = n(27),
      a = n(12),
      s = n(55),
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
            l = t.target && t.target.isArray(),
            d = !(t.parentRequest && t.parentRequest.target && t.target && t.parentRequest.target.matchesArray(t.target.serviceIdentifier));
          if (l && d)
            return o.map(function (t) {
              return u(e)(t);
            });
          var h = null;
          if (!t.target.isOptional() || 0 !== n.length) {
            var f = n[0],
              v = f.scope === r.BindingScopeEnum.Singleton,
              p = f.scope === r.BindingScopeEnum.Request;
            if (v && f.activated) return f.cache;
            if (p && null !== e && e.has(f.id)) return e.get(f.id);
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
                var _ = a.getServiceIdentifierAsString(t.serviceIdentifier);
                throw new Error(i.INVALID_BINDING_TYPE + " " + _);
              }
              h = s.resolveInstance(f.implementationType, o, u(e));
            }
            return (
              "function" == typeof f.onActivation && (h = f.onActivation(t.parentContext, h)),
              v && ((f.cache = h), (f.activated = !0)),
              p && null !== e && !e.has(f.id) && e.set(f.id, h),
              h
            );
          }
        };
      };
    t.resolve = function (e) {
      return u(e.plan.rootRequest.requestScope)(e.plan.rootRequest);
    };
  },
  function (e, t, n) {
    "use strict";
    var i =
      (this && this.__spreadArray) ||
      function (e, t) {
        for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n];
        return e;
      };
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.resolveInstance = void 0);
    var r = n(3),
      o = n(6),
      a = n(1);
    t.resolveInstance = function (e, t, n) {
      var s,
        c,
        u = null;
      if (t.length > 0) {
        var l = t
          .filter(function (e) {
            return null !== e.target && e.target.type === o.TargetTypeEnum.ConstructorArgument;
          })
          .map(n);
        (c = l),
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
          })((u = new ((s = e).bind.apply(s, i([void 0], c)))()), t, n));
      } else u = new e();
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingToSyntax = void 0);
    var i = n(3),
      r = n(6),
      o = n(57),
      a = n(30),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingInWhenOnSyntax = void 0);
    var i = n(58),
      r = n(20),
      o = n(21),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingInSyntax = void 0);
    var i = n(6),
      r = n(30),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.ContainerSnapshot = void 0);
    var i = (function () {
      function e() {}
      return (
        (e.of = function (t, n) {
          var i = new e();
          return (i.bindings = t), (i.middleware = n), i;
        }),
        e
      );
    })();
    t.ContainerSnapshot = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Lookup = void 0);
    var i = n(3),
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.AsyncContainerModule = t.ContainerModule = void 0);
    var i = n(9),
      r = function (e) {
        (this.id = i.id()), (this.registry = e);
      };
    t.ContainerModule = r;
    var o = function (e) {
      (this.id = i.id()), (this.registry = e);
    };
    t.AsyncContainerModule = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.injectable = void 0);
    var i = n(3),
      r = n(1);
    t.injectable = function () {
      return function (e) {
        if (Reflect.hasOwnMetadata(r.PARAM_TYPES, e)) throw new Error(i.DUPLICATED_INJECTABLE_DECORATOR);
        var t = Reflect.getMetadata(r.DESIGN_PARAM_TYPES, e) || [];
        return Reflect.defineMetadata(r.PARAM_TYPES, t, e), e;
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.tagged = void 0);
    var i = n(4),
      r = n(7);
    t.tagged = function (e, t) {
      return function (n, o, a) {
        var s = new i.Metadata(e, t);
        "number" == typeof a ? r.tagParameter(n, o, a, s) : r.tagProperty(n, o, s);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.named = void 0);
    var i = n(1),
      r = n(4),
      o = n(7);
    t.named = function (e) {
      return function (t, n, a) {
        var s = new r.Metadata(i.NAMED_TAG, e);
        "number" == typeof a ? o.tagParameter(t, n, a, s) : o.tagProperty(t, n, s);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.optional = void 0);
    var i = n(1),
      r = n(4),
      o = n(7);
    t.optional = function () {
      return function (e, t, n) {
        var a = new r.Metadata(i.OPTIONAL_TAG, !0);
        "number" == typeof n ? o.tagParameter(e, t, n, a) : o.tagProperty(e, t, a);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.unmanaged = void 0);
    var i = n(1),
      r = n(4),
      o = n(7);
    t.unmanaged = function () {
      return function (e, t, n) {
        var a = new r.Metadata(i.UNMANAGED_TAG, !0);
        o.tagParameter(e, t, n, a);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.multiInject = void 0);
    var i = n(1),
      r = n(4),
      o = n(7);
    t.multiInject = function (e) {
      return function (t, n, a) {
        var s = new r.Metadata(i.MULTI_INJECT_TAG, e);
        "number" == typeof a ? o.tagParameter(t, n, a, s) : o.tagProperty(t, n, s);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.targetName = void 0);
    var i = n(1),
      r = n(4),
      o = n(7);
    t.targetName = function (e) {
      return function (t, n, a) {
        var s = new r.Metadata(i.NAME_TAG, e);
        o.tagParameter(t, n, a, s);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.postConstruct = void 0);
    var i = n(3),
      r = n(1),
      o = n(4);
    t.postConstruct = function () {
      return function (e, t, n) {
        var a = new o.Metadata(r.POST_CONSTRUCT, t);
        if (Reflect.hasOwnMetadata(r.POST_CONSTRUCT, e.constructor)) throw new Error(i.MULTIPLE_POST_CONSTRUCT_METHODS);
        Reflect.defineMetadata(r.POST_CONSTRUCT, a, e.constructor);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.multiBindToService = void 0);
    t.multiBindToService = function (e) {
      return function (t) {
        return function () {
          for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
          return n.forEach(function (n) {
            return e.bind(n).toService(t);
          });
        };
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = n(72);
    class r extends i.InternalDispatcherException {}
    t.InternalDispatcherListenerIsNotRegisteredException = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    class i extends Error {}
    t.InternalDispatcherException = i;
  },
  function (e, t) {
    function n(e, t) {
      var n = [],
        i = [];
      return (
        null == t &&
          (t = function (e, t) {
            return n[0] === t ? "[Circular ~]" : "[Circular ~." + i.slice(0, n.indexOf(t)).join(".") + "]";
          }),
        function (r, o) {
          if (n.length > 0) {
            var a = n.indexOf(this);
            ~a ? n.splice(a + 1) : n.push(this), ~a ? i.splice(a, 1 / 0, r) : i.push(r), ~n.indexOf(o) && (o = t.call(this, r, o));
          } else n.push(o);
          return null == e ? o : e.call(this, r, o);
        }
      );
    }
    (e.exports = function (e, t, i, r) {
      return JSON.stringify(e, n(t, r), i);
    }).getSerialize = n;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = n(75);
    class r extends i.CoreException {}
    t.CoreServiceIsNotRegisteredException = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    class i extends Error {}
    t.CoreException = i;
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    const a = n(0),
      s = (n(39), n(5));
    let c = class {
      constructor(e) {
        (this.browserEnum = e),
          (this.isOnInstalledFired = !1),
          (this.listeners = []),
          chrome.runtime.onInstalled.addListener((e) => {
            (this.isOnInstalledFired = !0), (this.installedDetails = e), this.handleOnInstall();
          });
      }
      onInstall(e) {
        this.listeners.push({ callback: e }), this.isOnInstalledFired && this.handleOnInstall();
      }
      setUninstallURL(e, t) {
        chrome.runtime.setUninstallURL(e, t);
      }
      manifest() {
        return chrome.runtime.getManifest();
      }
      browser() {
        return this.browserEnum;
      }
      handleOnInstall() {
        for (const e of this.listeners) e.callback(this.installedDetails);
        this.listeners = [];
      }
    };
    (c = i([a.injectable(), o(0, a.inject(s.MARIO_TYPES.BROWSER)), r("design:paramtypes", [String])], c)), (t.Extension = c);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        e.ON_ANY_MESSAGE = "ON_ANY_MESSAGE";
      })(t.ExternalDispatcherEvents || (t.ExternalDispatcherEvents = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = n(79);
    class r extends i.ExternalDispatcherException {}
    t.ExternalDispatcherListenerIsNotFoundException = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    class i extends Error {}
    t.ExternalDispatcherException = i;
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    const a = n(0),
      s = n(2),
      c = n(5),
      u = n(81);
    let l = class {
      constructor(e, t, n) {
        (this.container = e),
          (this.logger = t),
          (this.dispatcher = n),
          (this.ports = {}),
          (this.listeners = {}),
          (this.onBeforeEmitListeners = []),
          chrome.runtime.onConnect.addListener((e) => {
            (this.ports[e.name] = e),
              this.logger.log(`Port "${e.name}" is created`),
              e.onMessage.addListener((t) => {
                if (((t.port = e.name), this.internalEmit(u.PortDispatcherEvents.ON_ANY_MESSAGE, t), this.isEventMessage(t))) {
                  const e = t.event;
                  this.internalEmit(e, t);
                }
              }),
              e.onDisconnect.addListener(() => {
                this.logger.log(`Port "${e.name}" is disconnected`), delete this.ports[e.name];
                const t = new s.MarioEvent(u.PortDispatcherEvents.PORT_DISCONNECTED, { name: e.name });
                this.dispatcher.emit(t).then();
              });
            const t = new s.MarioEvent(u.PortDispatcherEvents.PORT_CONNECTED, { name: e.name });
            this.dispatcher.emit(t).then();
          });
      }
      on(e) {
        this.container.bind(e).toSelf().inSingletonScope();
        const t = this.container.get(e),
          n = t.on();
        void 0 === this.listeners[n] && (this.listeners[n] = []),
          this.listeners[n].push(t),
          this.logger.log(`PortDispatcher: register a listener on event "${n}"`);
      }
      onBeforeEmit(e) {
        this.onBeforeEmitListeners.push(e);
      }
      emit(e, t, n) {
        let i = [];
        if (t) {
          const e = t;
          if (this.hasNotPort(e)) throw Error(`PortDispatcher: a named port "${e}" is not found`);
          const n = this.getPort(e);
          i.push(n);
        } else i = Object.keys(this.ports).map((e) => this.ports[e]);
        !n &&
          this.onBeforeEmitListeners.forEach((t) => {
            try {
              t(e);
            } catch (e) {
              this.logger.error(e);
            }
          }),
          i.forEach((t) => t.postMessage(e));
      }
      hasPort(e) {
        return !!this.ports[e];
      }
      hasNotPort(e) {
        return !this.hasPort(e);
      }
      disconnectPort(e) {
        this.hasNotPort(e) && this.logger.log(`Port "${e}" cannot be disconnected because it's not registered`);
        this.ports[e].disconnect();
      }
      hasEventListeners(e) {
        return this.listeners[e] && this.listeners[e].length > 0;
      }
      isEventMessage(e) {
        return "object" == typeof e && "string" == typeof e.event;
      }
      getPort(e) {
        return this.ports[e];
      }
      internalEmit(e, t) {
        this.hasEventListeners(e) &&
          this.listeners[e].forEach((e) => {
            try {
              e.handle(t).then();
            } catch (e) {
              this.logger.error(e);
            }
          });
      }
    };
    (l = i(
      [
        a.injectable(),
        o(0, a.inject(c.MARIO_TYPES.CONTAINER)),
        o(1, a.inject(c.MARIO_TYPES.LOGGER_SERVICE)),
        o(2, a.inject(c.MARIO_TYPES.INTERNAL_DISPATCHER)),
        r("design:paramtypes", [Object, Object, Object])
      ],
      l
    )),
      (t.PortDispatcher = l);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e.PORT_CONNECTED = "PORT_CONNECTED"), (e.PORT_DISCONNECTED = "PORT_DISCONNECTED"), (e.ON_ANY_MESSAGE = "ON_ANY_MESSAGE");
      })(t.PortDispatcherEvents || (t.PortDispatcherEvents = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.MarioModule = class {
      constructor(e) {
        this._core = e;
      }
      mario() {
        return this._core;
      }
    };
  },
  function (e, t, n) {
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
        },
      a =
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
    const s = n(0),
      c = n(35),
      u = n(5),
      l = n(84);
    let d = class {
      constructor(e, t) {
        (this.logger = e), (this.dispatcher = t);
      }
      clear() {
        return a(this, void 0, void 0, function* () {
          yield this.dispatcher.emit(new c.MarioEvent(l.CacheEvents.BEFORE_CLEAR_CACHE)),
            yield this.cacheRemoveAll(),
            yield this.dispatcher.emit(new c.MarioEvent(l.CacheEvents.AFTER_CLEAR_CACHE));
        });
      }
      cacheRemoveAll() {
        return a(this, void 0, void 0, function* () {
          return new Promise((e, t) => {
            try {
              chrome.browsingData.removeCache({}, () => {
                e();
              });
            } catch (e) {
              this.logger.error(e), t();
            }
          });
        });
      }
    };
    (d.EVENT_BEFORE_CLEAR_CACHE = "beforeClearCache"),
      (d.EVENT_AFTER_CLEAR_CACHE = "afterClearCache"),
      (d = i(
        [
          s.injectable(),
          o(0, s.inject(u.MARIO_TYPES.LOGGER_SERVICE)),
          o(1, s.inject(u.MARIO_TYPES.INTERNAL_DISPATCHER)),
          r("design:paramtypes", [Object, Object])
        ],
        d
      )),
      (t.CacheService = d);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e.BEFORE_CLEAR_CACHE = "BEFORE_CLEAR_CACHE"), (e.AFTER_CLEAR_CACHE = "AFTER_CLEAR_CACHE");
      })(t.CacheEvents || (t.CacheEvents = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ContentDispatcherService = class {
      constructor() {
        (this.listeners = {}),
          (this.listenersIndex = {}),
          (this.counter = 0),
          chrome.runtime.onMessage.addListener((e) => {
            if (!this.isEventMessage(e)) return;
            if (!this.hasEventListeners(e.event)) return void console.log("ContentDispatcherService: no listeners for an event " + e.event);
            const t = [],
              n = this.listeners[e.event];
            for (const i of Object.keys(n)) {
              const r = (0, n[i])(e);
              t.push(r);
            }
            return Promise.all(t).then(), !1;
          });
      }
      emit(e, t) {
        chrome.runtime.sendMessage(e, t);
      }
      on(e, t) {
        const n = ++this.counter;
        return this.hasEventListeners(e) || (this.listeners[e] = {}), (this.listeners[e][n] = t), (this.listenersIndex[n] = e), n;
      }
      hasEventListeners(e) {
        return void 0 !== this.listeners[e];
      }
      removeListener(e) {
        if (this.hasListener(e)) {
          const t = this.listenersIndex[e];
          delete this.listeners[t][e], delete this.listenersIndex[e];
        }
      }
      hasListener(e) {
        return this.listenersIndex.hasOwnProperty(e);
      }
      getListener(e) {
        if (!this.hasListener(e)) throw new Error("boom");
        const t = this.listenersIndex[e];
        return this.listeners[t][e];
      }
      isEventMessage(e) {
        return "object" == typeof e && "string" == typeof e.event;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e.NAVIGATION_ON_BEFORE_NAVIGATE = "NAVIGATION_ON_BEFORE_NAVIGATE"),
          (e.NAVIGATION_ON_COMMITTED = "NAVIGATION_ON_COMMITTED"),
          (e.NAVIGATION_ON_DOM_CONTENT_LOADED = "NAVIGATION_ON_DOM_CONTENT_LOADED"),
          (e.NAVIGATION_ON_COMPLETED = "NAVIGATION_ON_COMPLETED"),
          (e.NAVIGATION_ON_ERROR_OCCURRED = "NAVIGATION_ON_ERROR_OCCURRED"),
          (e.NAVIGATION_ON_CREATED_NAVIGATION_TARGET = "NAVIGATION_ON_CREATED_NAVIGATION_TARGET"),
          (e.NAVIGATION_ON_REFERENCE_FRAGMNENT_UPDATED = "NAVIGATION_ON_REFERENCE_FRAGMNENT_UPDATED"),
          (e.NAVIGATION_ON_TAB_REPLACED = "NAVIGATION_ON_TAB_REMOVED"),
          (e.NAVIGATION_ON_HISTORY_STATE_UPDATED = "NAVIGATION_ON_HISTORY_STATE_UPDATED");
      })(t.NavigationServiceEvents || (t.NavigationServiceEvents = {}));
  },
  function (e, t, n) {
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
    const o = n(0);
    let a = class {
      get(e) {
        return r(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            chrome.storage.local.get(e, (n) => {
              const i = void 0 !== n[e] ? n[e] : null;
              t(i);
            });
          });
        });
      }
      set(e, t) {
        return r(this, void 0, void 0, function* () {
          return new Promise((n, i) => {
            const r = {};
            (r[e] = t), chrome.storage.local.set(r, () => n());
          });
        });
      }
      has(e) {
        return r(this, void 0, void 0, function* () {
          return null !== (yield this.get(e));
        });
      }
      remove(e) {
        return r(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            try {
              chrome.storage.local.remove(e, () => t());
            } catch (e) {
              n(e);
            }
          });
        });
      }
      clean() {
        chrome.storage.local.clear();
      }
    };
    (a = i([o.injectable()], a)), (t.StorageService = a);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.SensitiveDataFilterService = void 0);
    const s = n(0),
      c = n(2),
      u = n(119),
      l = n(41),
      d = n(120);
    let h = class {
      constructor(e, t, n, i) {
        if (
          ((this.enabled = e),
          (this.host = t),
          (this.logging = n),
          (this.logger = i),
          (this.initialized = !1),
          "string" != typeof this.host)
        )
          throw new d.SensitiveDataFilterException("Server host is undefined");
        (this.logging = !!this.logging), this.logger.log("SensitiveDataFilter: " + (this.enabled ? "enabled" : "disabled"));
      }
      init() {
        return a(this, void 0, void 0, function* () {
          if (this.enabled)
            try {
              (this.instance = new u.default({ host: this.host, logging: this.logging })),
                yield this.instance.init(),
                (this.initialized = !0);
            } catch (e) {
              this.logger.error(e);
            }
        });
      }
      enable() {
        return a(this, void 0, void 0, function* () {
          (this.enabled = !0), this.initialized || (yield this.init());
        });
      }
      disable() {
        return a(this, void 0, void 0, function* () {
          this.enabled = !1;
        });
      }
      updateRules() {
        return a(this, void 0, void 0, function* () {
          if (this.initialized) return this.instance.updateRules();
        });
      }
      transformUrl(e) {
        return this.enabled && this.initialized ? this.instance.transformUrl(e) : e;
      }
      transformTitle(e, t) {
        return this.enabled && this.initialized ? this.instance.transformTitle(e, t) : t;
      }
    };
    (h = i(
      [
        s.injectable(),
        o(0, s.inject(l.SensitiveDataFilterTypes.SDF_PARAM_ENABLED)),
        o(1, s.inject(l.SensitiveDataFilterTypes.SDF_PARAM_HOST)),
        o(2, s.inject(l.SensitiveDataFilterTypes.SDF_PARAM_LOGGING)),
        o(3, s.inject(c.MARIO_TYPES.LOGGER_SERVICE)),
        r("design:paramtypes", [Boolean, String, Boolean, Object])
      ],
      h
    )),
      (t.SensitiveDataFilterService = h);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.EventType = t.NavigationMethod = void 0),
      (function (e) {
        (e.REQUEST = "request"), (e.URL_REWRITE = "url_rewrite");
      })(t.NavigationMethod || (t.NavigationMethod = {})),
      (function (e) {
        (e.MAIN = "main"), (e.RESOURCE = "resource");
      })(t.EventType || (t.EventType = {}));
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.UscLogger = void 0);
    const a = n(0),
      s = n(8);
    let c = class {
      constructor(e) {
        this.logging = e;
      }
      log(e, t) {
        this.logging && console.log(e, t);
      }
    };
    (c = i([a.injectable(), o(0, a.inject(s.UrlsSafeCheckTypes.USC_LOGGING)), r("design:paramtypes", [String])], c)), (t.UscLogger = c);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.StateDataService = void 0);
    const s = n(0),
      c = n(2),
      u = n(40);
    let l = class {
      constructor(e) {
        this.storageService = e;
      }
      setEnabledState(e) {
        return a(this, void 0, void 0, function* () {
          return yield this.storageService.set("SAFESEARCH_ENABLED", e ? "1" : "0");
        });
      }
      getEnabledState() {
        return a(this, void 0, void 0, function* () {
          return "1" === (yield this.storageService.get("SAFESEARCH_ENABLED"));
        });
      }
      setNotificationEnabledState(e) {
        return a(this, void 0, void 0, function* () {
          return yield this.storageService.set("SAFESEARCH_NOTIFICATION_ENABLED", e ? "1" : "0");
        });
      }
      getNotificationEnabledState() {
        return a(this, void 0, void 0, function* () {
          return "1" === (yield this.storageService.get("SAFESEARCH_NOTIFICATION_ENABLED"));
        });
      }
      getDomainPersistedData(e) {
        return a(this, void 0, void 0, function* () {
          const t = u.getDomain(e);
          return (yield this.getList()).find((e) => e.domain === t);
        });
      }
      setDomainPersistedValue(e, t, n) {
        return a(this, void 0, void 0, function* () {
          const i = u.getDomain(e),
            r = yield this.getList(),
            o = r.find((e) => e.domain === i);
          o ? (o[t] = n) : r.push({ domain: i, [t]: n }), yield this.saveList(r);
        });
      }
      getList() {
        return a(this, void 0, void 0, function* () {
          const e = yield this.storageService.get("SAFESEARCH_STATE_DATA");
          return e ? JSON.parse(e) : [];
        });
      }
      saveList(e = []) {
        return a(this, void 0, void 0, function* () {
          const t = JSON.stringify(e);
          return yield this.storageService.set("SAFESEARCH_STATE_DATA", t);
        });
      }
    };
    (l = i([s.injectable(), o(0, s.inject(c.MARIO_TYPES.STORAGE_SERVICE)), r("design:paramtypes", [Object])], l)), (t.StateDataService = l);
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.FgLogger = void 0);
    const a = n(0),
      s = n(18);
    let c = class {
      constructor(e) {
        this.logging = e;
      }
      log(e, t) {
        this.logging && console.log(e, t);
      }
    };
    (c = i([a.injectable(), o(0, a.inject(s.FgNavTypes.FGNAV_LOGGING)), r("design:paramtypes", [Boolean])], c)), (t.FgLogger = c);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabEventsProcessService = void 0);
    const s = n(0),
      c = n(104),
      u = n(105),
      l = n(106),
      d = n(18),
      h = n(94),
      f = n(2),
      v = n(95),
      p = n(16),
      _ = n(23),
      g = n(139),
      S = n(96),
      E = n(42);
    let y = class {
      constructor(e, t, n, i, r, o) {
        (this.internalDispatcher = e),
          (this.queueService = t),
          (this.fgStateService = n),
          (this.fgDataService = i),
          (this.tabStateService = r),
          (this.logger = o);
      }
      process(e) {
        const t = e.tabId;
        switch (e.type) {
          case h.TAB_EVENT_TYPE.LOADING:
            this.queueService.add(t, e, () =>
              a(this, void 0, void 0, function* () {
                yield this.processTabLoadingEvent(e);
              })
            );
            break;
          case h.TAB_EVENT_TYPE.COMPLETE:
            this.queueService.add(t, e, () =>
              a(this, void 0, void 0, function* () {
                yield this.processTabCompleteEvent(e);
              })
            );
        }
        this.queueService.process(e.tabId);
      }
      processTabLoadingEvent(e) {
        return a(this, void 0, void 0, function* () {
          const { tabId: t, url: n } = e,
            i = this.fgStateService.addWebEvent(t, n);
          i.setUrl(n), this.emitNavStartedEvent(i);
        });
      }
      processTabCompleteEvent(e) {
        return a(this, void 0, void 0, function* () {
          const { tabId: t, url: n, tabState: i } = e;
          let r = this.fgStateService.getWebEvent(t, n);
          if (
            (i.navigationMethod !== g.NavigationMethod.URL_REWRITE ||
              i.isBrowserServiceUrl ||
              (yield this.processTabLoadingEvent(e), (r = this.fgStateService.getWebEvent(t, n))),
            !i || i.isBrowserServiceUrl || !r)
          )
            return void this.logger.log("So we can`t handle this complete event");
          r.setNavigationData({ frameId: 0, parentFrameId: -1, method: i.navigationMethod, sequence: i.navigationSequence }),
            r.setSystemData(yield this.fgDataService.getSystemData()),
            r.setPanalyticsData(yield this.fgDataService.getPanalyticsData());
          try {
            i.navigationMethod === g.NavigationMethod.URL_REWRITE && (yield E.delay(1100));
            const e = yield this.fgDataService.getTabDocumentData(t);
            r.setDocumentData(e), (r.hasData = !0);
          } catch (e) {}
          r.setNavigationData({ sourceTabId: i.sourceTabId });
          const o = this.copyEvent(r);
          this.fgStateService.removeWebEvent(t, n), this.emitNavCommitedEvent(o);
        });
      }
      copyEvent(e) {
        return JSON.parse(JSON.stringify(e));
      }
      emitNavStartedEvent(e) {
        return a(this, void 0, void 0, function* () {
          yield this.internalDispatcher.emit(new f.MarioEvent(v.FgNavEvents.NAVIGATION_STARTED, e));
        });
      }
      emitNavCommitedEvent(e) {
        return a(this, void 0, void 0, function* () {
          yield this.internalDispatcher.emit(new f.MarioEvent(v.FgNavEvents.NAVIGATION_COMMITED, e));
        });
      }
    };
    (y = i(
      [
        s.injectable(),
        o(0, s.inject(f.MARIO_TYPES.INTERNAL_DISPATCHER)),
        o(1, s.inject(d.FgNavTypes.FGNAV_QUEUE_SERVICE)),
        o(2, s.inject(d.FgNavTypes.FGNAV_STATE_SERVICE)),
        o(3, s.inject(d.FgNavTypes.FGNAV_DATA_SERVICE)),
        o(4, s.inject(p.TabStateTypes.TAB_STATE_SERVICE)),
        o(5, s.inject(p.TabStateTypes.LOGGER)),
        r("design:paramtypes", [Object, l.QueueService, c.StateService, u.DataService, _.TabStateService, S.TabStateLogger])
      ],
      y
    )),
      (t.TabEventsProcessService = y);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TAB_EVENT_TYPE = void 0),
      (function (e) {
        (e.ACTIVATE = "ACTIVATE"), (e.LOADING = "LOADING"), (e.COMPLETE = "COMPLETE");
      })(t.TAB_EVENT_TYPE || (t.TAB_EVENT_TYPE = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FgNavEvents = void 0),
      (function (e) {
        (e.CONTENT_URL_REWRITED = "FGNAV__CONTENT_URL_REWRITED"),
          (e.NAVIGATION_STARTED = "FGNAV__NAVIGATION_STARTED"),
          (e.NAVIGATION_COMMITED = "FGNAV__NAVIGATION_COMMITED");
      })(t.FgNavEvents || (t.FgNavEvents = {}));
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabStateLogger = void 0);
    const a = n(0),
      s = n(16);
    let c = class {
      constructor(e) {
        this.logging = e;
      }
      log(e, t) {
        this.logging && console.log(e, t);
      }
    };
    (c = i([a.injectable(), o(0, a.inject(s.TabStateTypes.PARAM_LOGGING)), r("design:paramtypes", [Boolean])], c)), (t.TabStateLogger = c);
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delay =
          t.getDomain =
          t.generateUIID =
          t.isSameOrigin =
          t.isSameDomain =
          t.getBrowserBlankPageUrl =
          t.isBlankPage =
          t.isWhiteListUrl =
          t.valueToPromise =
            void 0);
      const r = n(145),
        o = n(146);
      function a() {
        return o.blankPage[e.env.BROWSER] || "about:blank";
      }
      (t.valueToPromise = function (e) {
        return new Promise((t) => {
          t(e);
        });
      }),
        (t.isWhiteListUrl = function (e) {
          if ("" === e) return !0;
          const { protocol: t } = new URL(e);
          return r.whiteListProtocols.includes(t);
        }),
        (t.isBlankPage = function (e) {
          return e === a();
        }),
        (t.getBrowserBlankPageUrl = a),
        (t.isSameDomain = function (e, t) {
          if (e && t) return new URL(e).host === new URL(t).host;
        }),
        (t.isSameOrigin = function (e, t) {
          return new URL(e).origin === new URL(t).origin;
        }),
        (t.generateUIID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            const t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          });
        }),
        (t.getDomain = function (e) {
          try {
            const { host: t } = new URL(e);
            return t;
          } catch (t) {
            return e;
          }
        }),
        (t.delay = function (e) {
          return i(this, void 0, void 0, function* () {
            return new Promise((t) => setTimeout(t, e));
          });
        });
    }).call(this, n(19));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BgNavEvents = void 0),
      (function (e) {
        (e.CONTENT_URL_REWRITED = "BG_NAV__CONTENT_URL_REWRITED"),
          (e.NAVIGATION_STARTED = "BGNAV__NAVIGATION_STARTED"),
          (e.NAVIGATION_COMMITED = "BGNAV__NAVIGATION_COMMITED");
      })(t.BgNavEvents || (t.BgNavEvents = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.PanalyticsIdentityTypes = void 0);
    const i = {
      PANALYTICS_HOST: Symbol.for("PANALYTICS_HOST"),
      PANALYTICS_LOGGING: Symbol.for("PANALYTICS_LOGGING"),
      PANALYTICS_SERVICE: Symbol.for("PANALYTICS_SERVICE"),
      PANALYTICS_STORAGE_KEY: Symbol.for("PANALYTICS_STORAGE_KEY")
    };
    t.PanalyticsIdentityTypes = i;
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.CheckSafeService = void 0);
    const s = n(0),
      c = n(8),
      u = n(101),
      l = n(88),
      d = n(41),
      h = n(121),
      f = n(122),
      v = n(40),
      p = n(89),
      _ = n(123),
      g = n(90);
    let S = class {
      constructor(e, t, n, i, r) {
        (this.requestService = e), (this.apiUrl = t), (this.logger = n), (this.sensitiveDataService = i), (this.compressRequest = r);
      }
      checkTabUrlSafety(e, t) {
        return a(this, void 0, void 0, function* () {
          const n = e.fgNavData.hasData && t !== c.MODE.NO_NAVIGATION,
            i = n ? "/api/rest/v2/secure/urls/checkSafety" : "/api/rest/v2/secure/urls/checkSafety/basic",
            r = n ? this.serializeGenericRequest(e, t) : this.serializeBasicRequest(e),
            o = { method: u.RequestMethods.POST, contentType: u.ContentTypes.JSON };
          if (!this.isValidData(r, n)) throw new h.CheckSafeException("Incorrect safe check request: " + JSON.stringify(r));
          this.logger.log("Check safe state request", r);
          let a,
            s = r;
          this.compressRequest && ((s = this.processRequestCompress(r)), (o.contentType = u.ContentTypes.OCTET_STREAM));
          try {
            a = (yield this.requestService.fetchRequest(this.apiUrl + i, s, o)).safe ? c.STATUS.SAFE : c.STATUS.UNSAFE;
          } catch (e) {
            throw new h.CheckSafeException("Error checking url safety");
          }
          return a;
        });
      }
      serializeBasicRequest(e) {
        return { url: { value: this.sensitiveDataService.transformUrl(e.url), encoded: !1 } };
      }
      serializeGenericRequest(e, t) {
        const n = e.fgNavData,
          i = n.navigationData,
          r = n.documentData,
          o = n.panalyticsData,
          a = n.systemData,
          s = t === c.MODE.FULL_NAVIGATION ? this.serializeBgNavData(e.bgNavData) : [],
          u = {
            url: { value: this.sensitiveDataService.transformUrl(e.url), encoded: !1 },
            timestamp: Date.now().toString(),
            pageAttributes: {
              title: this.sensitiveDataService.transformTitle(n.domain, r.title),
              name: this.sensitiveDataService.transformTitle(n.domain, r.windowName)
            },
            contextAttributes: { referrer: this.sensitiveDataService.transformUrl(r.referrer) },
            method: i.method,
            tab: { id: e.id, initiatorId: i.sourceTabId },
            frame: { id: i.frameId, parentId: i.parentFrameId },
            os: { name: a.name, version: a.version },
            mainFrame: { navigationSequence: i.sequence || 1 },
            type: "INTERNAL_BROWSER_EXTENSION",
            partition: "fg",
            nested: s
          };
        return (
          (u[_.decode("cGFuZWxpc3REZWY=")] = {
            [_.decode("cGFuZWxpc3RJZA==")]: o.panalyticsId,
            [_.decode("cGFuZWxJZA==")]: o.pinstanceId,
            partnerId: o.partnerId,
            distributorId: o.distributorId
          }),
          u
        );
      }
      serializeBgNavData(e) {
        return e.map((e) => {
          const t = v.getDomain(e.url),
            n = {
              url: { value: this.sensitiveDataService.transformUrl(e.url), encoded: !1 },
              timestamp: e.timeStamp,
              pageAttributes: {
                title: this.sensitiveDataService.transformTitle(t, e.pageDocumentTitle),
                name: this.sensitiveDataService.transformTitle(t, e.pageWindowName)
              },
              contextAttributes: { referrer: this.sensitiveDataService.transformUrl(e.pageDocumentReferrer) },
              method: e.navigationMethod,
              tab: { id: e.tabId, initiatorId: e.sourceTabId },
              frame: { id: e.frameId, parentId: e.parentFrameId },
              os: { name: e.requestOs, version: e.requestOsVersion },
              server: { api: e.serverIp },
              mainFrame: { navigationSequence: e.navigationSequence || 1 },
              browser: { name: e.requestBrowser, version: e.requestBrowserVersion },
              request: {
                headers: e.requestHeaders,
                method: e.requestMethod,
                userAgent: e.requestUserAgent,
                acceptLanguage: e.requestAcceptLanguage
              },
              response: {
                headers: e.responseHeaders,
                isFromCache: e.responseIsFromCache,
                error: e.responseError,
                redirectUrl: e.responseRedirectUrl
              },
              eventDef: { id: e.eventId, type: e.eventType, subType: e.eventSubType },
              partition: "bg",
              type: "INTERNAL_BROWSER_EXTENSION"
            };
          return (
            e.eventSubType,
            e.navigationMethod === p.NavigationMethod.REQUEST &&
              ((n.response.statusCode = e.responseStatusCode), (n.response.statusLine = e.responseStatusLine)),
            (n[_.decode("cGFuZWxpc3REZWY=")] = {
              [_.decode("cGFuZWxpc3RJZA==")]: e.panalyticsId,
              [_.decode("cGFuZWxJZA==")]: e.pinstanceId,
              partnerId: e.partnerId,
              distributorId: e.distributorId
            }),
            n
          );
        });
      }
      isValidData(e, t) {
        return !!e.url.value && (!t || (e.method && e.tab.id && e.type));
      }
      processRequestCompress(e) {
        return f.default.compressToUTF16(JSON.stringify(e));
      }
    };
    (S = i(
      [
        s.injectable(),
        o(0, s.inject(c.UrlsSafeCheckTypes.USC_REQUEST_SERVICE)),
        o(1, s.inject(c.UrlsSafeCheckTypes.USC_ENDPOINT_DOMAIN)),
        o(2, s.inject(c.UrlsSafeCheckTypes.USC_LOGGER)),
        o(3, s.inject(d.SensitiveDataFilterTypes.SDF_SERVICE)),
        o(4, s.inject(c.UrlsSafeCheckTypes.USC_COMPRESS_REQUEST)),
        r("design:paramtypes", [u.RequestService, String, g.UscLogger, l.SensitiveDataFilterService, Boolean])
      ],
      S
    )),
      (t.CheckSafeService = S);
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.RequestService = t.ContentTypes = t.RequestMethods = void 0);
    const o = n(0);
    var a, s;
    !(function (e) {
      (e.GET = "GET"), (e.POST = "POST");
    })((a = t.RequestMethods || (t.RequestMethods = {}))),
      (function (e) {
        (e.JSON = "application/json;charset=utf-8"), (e.OCTET_STREAM = "application/octet-stream");
      })((s = t.ContentTypes || (t.ContentTypes = {})));
    let c = class {
      fetchRequest(e, t, n) {
        return r(this, void 0, void 0, function* () {
          const i = n.method || a.GET,
            r = n.contentType || s.JSON,
            o = { "Content-type": r },
            c = r === s.JSON ? JSON.stringify(t) : t,
            u = yield fetch(e, { method: i, headers: o, body: c });
          if (200 !== u.status) throw u;
          return u.json();
        });
      }
    };
    (c = i([o.injectable()], c)), (t.RequestService = c);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        e.ALARM_ELAPSED = "ALARM_ELAPSED";
      })(t.AlarmEvents || (t.AlarmEvents = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.AlarmNames = void 0);
    t.AlarmNames = { UPDATE_RULES_LIST: "UPDATE_RULES_LIST" };
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.StateService = void 0);
    const s = n(0),
      c = n(131),
      u = n(18),
      l = n(92);
    let d = class {
      constructor(e, t) {
        (this.enabled = e), (this.logger = t), (this.webEvents = []);
      }
      enable() {
        return a(this, void 0, void 0, function* () {
          this.enabled = !0;
        });
      }
      disable() {
        return a(this, void 0, void 0, function* () {
          this.enabled = !1;
        });
      }
      isEnabled() {
        return this.enabled;
      }
      getWebEvent(e, t) {
        return this.webEvents.find((n) => n.tabId === e && n.url === t);
      }
      addWebEvent(e, t) {
        this.getWebEvent(e, t) && this.logger.log(`FgNavStateService: tab ${e} already exist, reusing`);
        const n = new c.WebEvent();
        return n.setTabId(e), n.setUrl(t), this.webEvents.push(n), n;
      }
      removeWebEvent(e, t) {
        const n = this.webEvents.findIndex((n) => n.tabId === e && n.url === t);
        this.webEvents.splice(n, 1);
      }
    };
    (d = i(
      [
        s.injectable(),
        o(0, s.inject(u.FgNavTypes.FGNAV_ENABLED)),
        o(1, s.inject(u.FgNavTypes.FGNAV_LOGGER)),
        r("design:paramtypes", [Boolean, l.FgLogger])
      ],
      d
    )),
      (t.StateService = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.DataService = void 0);
    const s = n(0),
      c = n(42),
      u = n(2),
      l = n(134),
      d = n(18);
    let h = class {
      constructor(e, t, n, i, r) {
        (this.externalDispatcher = e), (this.panalyticsId = t), (this.pinstanceId = n), (this.partnerId = i), (this.distributorId = r);
      }
      getPanalyticsData() {
        return a(this, void 0, void 0, function* () {
          const e = {
            panalyticsId: this.panalyticsId,
            pinstanceId: this.pinstanceId,
            partnerId: this.partnerId,
            distributorId: this.distributorId
          };
          return c.valueToPromise(e);
        });
      }
      getSystemData() {
        return a(this, void 0, void 0, function* () {
          return c.valueToPromise(l.getOSVersion());
        });
      }
      getTabDocumentData(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            chrome.tabs.executeScript(e, { code: "[document.title, document.referrer, window.name]" }, (e) => {
              if (!chrome.runtime.lastError && e && e[0]) {
                const [n, i, r] = e[0];
                t({ title: n, referrer: i, windowName: r });
              } else n();
            });
          });
        });
      }
    };
    (h = i(
      [
        s.injectable(),
        o(0, s.inject(u.MARIO_TYPES.EXTERNAL_DISPATCHER)),
        o(1, s.inject(d.FgNavTypes.FGNAV_PANALYTICS_ID)),
        o(2, s.inject(d.FgNavTypes.FGNAV_INSTANCE_ID)),
        o(3, s.inject(d.FgNavTypes.FGNAV_PARTNER_ID)),
        o(4, s.inject(d.FgNavTypes.FGNAV_DISTRIBUTOR_ID)),
        r("design:paramtypes", [Object, String, Number, Number, Number])
      ],
      h
    )),
      (t.DataService = h);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.QueueService = void 0);
    const s = n(0),
      c = n(18),
      u = n(42),
      l = n(92);
    let d = class {
      constructor(e) {
        (this.logger = e), (this.queue = []);
      }
      add(e, t, n) {
        const i = { id: u.generateUIID(), groupId: e, handler: n, params: t };
        this.queue.push(i);
      }
      process(e) {
        return a(this, void 0, void 0, function* () {
          if (this.queue.find((t) => t.groupId === e && t.processing)) return;
          const t = this.queue.find((t) => t.groupId === e);
          if (!t) return;
          t.processing = !0;
          try {
            yield t.handler(t.params);
          } catch (e) {
            this.logger.log(e);
          }
          const n = this.queue.findIndex((e) => e.id === t.id);
          this.queue.splice(n, 1),
            setTimeout(() => {
              this.process(e);
            });
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(c.FgNavTypes.FGNAV_LOGGER)), r("design:paramtypes", [l.FgLogger])], d)), (t.QueueService = d);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.NavigationMethod = void 0),
      (function (e) {
        (e.REQUEST = "request"), (e.URL_REWRITE = "url_rewrite");
      })(t.NavigationMethod || (t.NavigationMethod = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getBrowserVersion = t.getOSVersion = void 0),
      (t.getOSVersion = function () {
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
        for (let e in i) {
          let r = i[e];
          if (r.r.test(t)) {
            n = r.s;
            break;
          }
        }
        let r;
        switch ((/Windows/.test(n) && ((r = /Windows (.*)/.exec(n)[1]), (n = "Windows")), n)) {
          case "Mac OS X":
            const n = /Mac OS X ([\.\_\d]+)/.exec(t);
            r = n ? n[1] : "unknown";
            break;
          case "Android":
            r = /Android ([\.\_\d]+)/.exec(t)[1];
            break;
          case "iOS":
            (r = /OS (\d+)_(\d+)_?(\d+)?/.exec(e)), (r = r[1] + "." + r[2] + "." + (0 | r[3]));
        }
        return { name: n, version: r };
      }),
      (t.getBrowserVersion = function () {
        let e,
          t = "",
          n = "0",
          i = navigator.userAgent + " ";
        if ("5.0" == i.substring(i.indexOf("Mozilla/") + 8, i.indexOf(" ")) && -1 != i.indexOf("like Gecko")) {
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
          n = i.substring(i.indexOf(t) + t.length + 1, i.indexOf(t) + t.length + 1 + i.substring(i.indexOf(t) + t.length + 1).indexOf(" "));
        } else
          "5.0" == i.substring(i.indexOf("Mozilla/") + 8, i.indexOf(" ")) && -1 != i.indexOf("Gecko/")
            ? ((t = i
                .substring(i.substring(i.indexOf("Gecko/") + 6).indexOf(" ") + i.indexOf("Gecko/") + 6)
                .substring(0, i.substring(i.substring(i.indexOf("Gecko/") + 6).indexOf(" ") + i.indexOf("Gecko/") + 6).indexOf("/"))),
              (n = i.substring(
                i.indexOf(t) + t.length + 1,
                i.indexOf(t) + t.length + 1 + i.substring(i.indexOf(t) + t.length + 1).indexOf(" ")
              )))
            : "5.0" == i.substring(i.indexOf("Mozilla/") + 8, i.indexOf(" ")) && -1 != i.indexOf("Clecko/")
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
            ? (-1 != i.substring(i.indexOf(") ") + 2).indexOf("/") &&
                (t = i.substring(i.indexOf(") ") + 2, i.indexOf(") ") + 2 + i.substring(i.indexOf(") ") + 2).indexOf("/"))),
              -1 == i.substring(i.indexOf(") ") + 2).indexOf("/") &&
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
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.DataService = void 0);
    const s = n(0),
      c = n(97),
      u = n(108),
      l = n(11);
    let d = class {
      constructor(e, t, n, i) {
        (this.panalyticsId = e), (this.pinstanceId = t), (this.partnerId = n), (this.distributorId = i);
      }
      getPanalyticsData() {
        return a(this, void 0, void 0, function* () {
          const e = {
            panalyticsId: this.panalyticsId,
            pinstanceId: this.pinstanceId,
            partnerId: this.partnerId,
            distributorId: this.distributorId
          };
          return c.valueToPromise(e);
        });
      }
      getSystemData() {
        return a(this, void 0, void 0, function* () {
          return u.getOSVersion();
        });
      }
      getBrowserData() {
        return a(this, void 0, void 0, function* () {
          return u.getBrowserVersion();
        });
      }
      getDocumentData(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            chrome.tabs.executeScript(e, { code: "[document.title, document.referrer, window.name]" }, (e) => {
              if (!chrome.runtime.lastError && e && e[0]) {
                const [n, i, r] = e[0];
                t({ title: n, referrer: i, windowName: r });
              } else n("error retrieving document data");
            });
          });
        });
      }
      getDomData(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            chrome.tabs.executeScript(e, { code: "[document.documentElement.innerHTML]" }, (e) => {
              if (!chrome.runtime.lastError && e && e[0]) {
                const [n] = e[0];
                t(n);
              } else n("error retrieving DOM data");
            });
          });
        });
      }
    };
    (d = i(
      [
        s.injectable(),
        o(0, s.inject(l.BgNavTypes.PARAM_PANALYTICS_ID)),
        o(1, s.inject(l.BgNavTypes.PARAM_PINSTANCE_ID)),
        o(2, s.inject(l.BgNavTypes.PARAM_PARTNER_ID)),
        o(3, s.inject(l.BgNavTypes.PARAM_DISTRIBUTOR_ID)),
        r("design:paramtypes", [String, Number, Number, Number])
      ],
      d
    )),
      (t.DataService = d);
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BgLogger = void 0);
    const a = n(0),
      s = n(11);
    let c = class {
      constructor(e) {
        this.logging = e;
      }
      log(e, t) {
        this.logging && console.log(e, t);
      }
    };
    (c = i([a.injectable(), o(0, a.inject(s.BgNavTypes.PARAM_LOGGING)), r("design:paramtypes", [Boolean])], c)), (t.BgLogger = c);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.LibStateService = void 0);
    const s = n(0),
      c = n(2),
      u = n(22),
      l = n(8),
      d = n(10),
      h = n(11),
      f = n(14),
      v = n(91);
    let p = class {
      constructor(e, t, n, i, r) {
        (this.bgStateService = e), (this.dispatcher = t), (this.usfStateService = n), (this.mode = i), (this.stateDataService = r);
      }
      restoreState() {
        return a(this, void 0, void 0, function* () {
          (yield this.stateDataService.getEnabledState())
            ? (yield this.usfStateService.enable(), this.mode === l.MODE.FULL_NAVIGATION && this.bgStateService.enable())
            : (yield this.usfStateService.disable(), this.bgStateService.disable()),
            (yield this.stateDataService.getNotificationEnabledState())
              ? yield this.usfStateService.enableNotification()
              : yield this.usfStateService.disableNotification();
        });
      }
      enable() {
        return a(this, void 0, void 0, function* () {
          const e = new c.MarioEvent(u.UrlsSafeCheckEvents.ENABLE_LIB);
          return this.dispatcher.emit(e);
        });
      }
      disable() {
        return a(this, void 0, void 0, function* () {
          const e = new c.MarioEvent(u.UrlsSafeCheckEvents.DISABLE_LIB);
          return this.dispatcher.emit(e);
        });
      }
    };
    (p = i(
      [
        s.injectable(),
        o(0, s.inject(h.BgNavTypes.STATE_SERVICE)),
        o(1, s.inject(c.MARIO_TYPES.INTERNAL_DISPATCHER)),
        o(2, s.inject(l.UrlsSafeCheckTypes.USC_STATE_SERVICE)),
        o(3, s.inject(l.UrlsSafeCheckTypes.USC_MODE)),
        o(4, s.inject(l.UrlsSafeCheckTypes.USC_STATE_DATA_SERVICE)),
        r("design:paramtypes", [f.StateService, Object, d.StateService, String, v.StateDataService])
      ],
      p
    )),
      (t.LibStateService = p);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.SafeMeeting = void 0);
    const s = n(0),
      c = n(8),
      u = n(10),
      l = n(111);
    let d = class {
      constructor(e, t) {
        (this.stateService = e), (this.libStateService = t), (this._listeners = []), this.libStateService.restoreState().then();
      }
      enable() {
        return a(this, void 0, void 0, function* () {
          yield this.stateService.enableNotification(), yield this.libStateService.enable();
        });
      }
      disable() {
        return a(this, void 0, void 0, function* () {
          yield this.stateService.disableNotification(), yield this.libStateService.disable();
        });
      }
      isEnabled() {
        return this.stateService.isEnabled();
      }
      getTabSafetyStatus(e) {
        return a(this, void 0, void 0, function* () {
          return this.stateService.getTabSafetyStatus(e);
        });
      }
      onPageVisited(e) {
        this._listeners.push(e);
      }
      removeListener(e) {
        const t = this._listeners.findIndex((t) => t === e);
        -1 !== t && this._listeners.splice(t, 1);
      }
      _emit(e) {
        this._listeners.forEach((t) => t(e));
      }
    };
    (d = i(
      [
        s.injectable(),
        o(0, s.inject(c.UrlsSafeCheckTypes.USC_STATE_SERVICE)),
        o(1, s.inject(c.UrlsSafeCheckTypes.USC_LIB_STATE_SERVICE)),
        r("design:paramtypes", [u.StateService, l.LibStateService])
      ],
      d
    )),
      (t.SafeMeeting = d);
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
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
      const r = n(114),
        o = n(2),
        a = n(39),
        s = n(112),
        c = n(164),
        u = n(165),
        l = n(166),
        d = n(99),
        h = e,
        f = u.Deferred();
      (h.window.safeMeeting = () => f.promise),
        i(void 0, void 0, void 0, function* () {
          const e = new o.Mario(a.BrowserEnum.CHROME_BROWSER, { loggerEnabled: !1 });
          e.registerService(o.MARIO_TYPES.STORAGE_SERVICE, o.StorageService);
          const t = { host: "https://id.sclpfybn.com", logging: !!Number("0") };
          yield e.registerModule(l.PanalyticsModule, t);
          const n = e.getService(d.PanalyticsIdentityTypes.PANALYTICS_SERVICE).getId();
          yield r.UrlsSafeCheckModule.use(e, {
            apiUrl: "https://cs.sclpfybn.com",
            logging: !!Number("0"),
            trackLoadingState: !!Number("0"),
            compressRequest: !!Number("1"),
            distributorId: Number("271"),
            panalyticsId: n,
            pinstanceId: Number("2"),
            partnerId: Number("271"),
            sensitiveDataApiUrl: "https://id.sclpfybn.com",
            sensitiveDataCheckEnabled: !!Number("1"),
            enabled: !!Number("0"),
            mode: "FULL_NAVIGATION"
          }),
            e.registerService(Symbol.for("SAFE_MEETING_API"), s.SafeMeeting),
            e.internalDispatcher().on(c.StatusUpdateListener);
          const i = e.getService(Symbol.for("SAFE_MEETING_API"));
          f.resolve(i), (h.window.safeMeeting = () => Promise.resolve(i));
        }).then();
    }).call(this, n(24));
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.UrlsSafeCheckModule = void 0);
    const r = n(2),
      o = n(115),
      a = n(124),
      s = n(125),
      c = n(126),
      u = n(15),
      l = n(37),
      d = n(127),
      h = n(8),
      f = n(10),
      v = n(100),
      p = n(101),
      _ = n(91),
      g = n(130),
      S = n(142),
      E = n(153),
      y = n(154),
      T = n(155),
      b = n(156),
      m = n(157),
      O = n(162),
      R = n(163),
      A = n(111),
      I = n(90);
    class N extends r.MarioModule {
      name() {
        return "UrlsSafeCheckModule";
      }
      static use(e, t) {
        return e.registerModule(N, t);
      }
      register(e) {
        return i(this, void 0, void 0, function* () {
          this.mario().container().bind(h.UrlsSafeCheckTypes.USC_ENDPOINT_DOMAIN).toConstantValue(e.apiUrl),
            this.mario().container().bind(h.UrlsSafeCheckTypes.USC_PANALYTICS_ID).toConstantValue(e.panalyticsId),
            this.mario().container().bind(h.UrlsSafeCheckTypes.USC_PINSTANCE_ID).toConstantValue(e.pinstanceId),
            this.mario().container().bind(h.UrlsSafeCheckTypes.USC_PARTNER_ID).toConstantValue(e.partnerId),
            this.mario().container().bind(h.UrlsSafeCheckTypes.USC_DISTRIBUTOR_ID).toConstantValue(e.distributorId),
            this.mario().container().bind(h.UrlsSafeCheckTypes.USC_ENABLED).toConstantValue(!!e.enabled),
            this.mario().container().bind(h.UrlsSafeCheckTypes.USC_MODE).toConstantValue(e.mode),
            this.mario().container().bind(h.UrlsSafeCheckTypes.USC_TRACK_LOADING_STATE).toConstantValue(e.trackLoadingState),
            this.mario().container().bind(h.UrlsSafeCheckTypes.USC_COMPRESS_REQUEST).toConstantValue(!!e.compressRequest),
            this.mario().container().bind(h.UrlsSafeCheckTypes.USC_LOGGING).toConstantValue(!!e.logging),
            this.mario().registerService(h.UrlsSafeCheckTypes.USC_LOGGER, I.UscLogger),
            this.mario().registerService(r.MARIO_TYPES.TAB_SERVICE, u.TabService),
            this.mario().registerService(r.MARIO_TYPES.NAVIGATION_SERVICE, l.NavigationService),
            this.mario().registerService(r.MARIO_TYPES.STORAGE_SERVICE, r.StorageService),
            this.mario().registerService(h.UrlsSafeCheckTypes.USC_STATE_SERVICE, f.StateService),
            this.mario().registerService(h.UrlsSafeCheckTypes.USC_STATE_DATA_SERVICE, _.StateDataService),
            this.mario().registerService(h.UrlsSafeCheckTypes.USC_CHECK_SERVICE, v.CheckSafeService),
            this.mario().registerService(h.UrlsSafeCheckTypes.USC_REQUEST_SERVICE, p.RequestService);
          const t = { logging: !!e.logging };
          yield this.mario().registerModule(m.TabStateModule, t);
          const n = {
            distributorId: e.distributorId,
            enabled: !!e.enabled,
            logging: !!e.logging,
            panalyticsId: e.panalyticsId,
            partnerId: e.partnerId,
            pinstanceId: e.pinstanceId
          };
          yield this.mario().registerModule(g.FgNavModule, n);
          const i = {
            distributorId: e.distributorId,
            enabled: !!e.enabled,
            logging: !!e.logging,
            panalyticsId: e.panalyticsId,
            partnerId: e.partnerId,
            pinstanceId: e.pinstanceId
          };
          yield this.mario().registerModule(S.BgNavModule, i);
          const N = { enabled: !!e.sensitiveDataCheckEnabled, host: e.sensitiveDataApiUrl, logging: !1 };
          yield this.mario().registerModule(d.SensitiveDataFilterModule, N),
            this.mario().registerService(h.UrlsSafeCheckTypes.USC_LIB_STATE_SERVICE, A.LibStateService),
            this.mario().getService(r.MARIO_TYPES.TAB_SERVICE).listenOnActivated(),
            this.mario().externalDispatcher().on(s.GetActiveTabStateEventListener),
            this.mario().externalDispatcher().on(c.MuteNotificationEventListener),
            this.mario().internalDispatcher().on(o.TabActivated),
            this.mario().internalDispatcher().on(a.TabRemoved),
            this.mario().internalDispatcher().on(E.FgNavStarted),
            this.mario().internalDispatcher().on(y.FgNavCommited),
            this.mario().internalDispatcher().on(T.BgNavStarted),
            this.mario().internalDispatcher().on(b.BgNavCommited),
            this.mario().internalDispatcher().on(O.EnableLib),
            this.mario().internalDispatcher().on(R.DisableLib);
        });
      }
    }
    t.UrlsSafeCheckModule = N;
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabActivated = void 0);
    const s = n(0),
      c = n(17),
      u = n(8),
      l = n(10);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return c.TabServiceEvents.ON_TAB_ACTIVATED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          const e = yield this.stateService.getActiveTabState();
          e && (yield this.stateService.updateTabSafetyStatus(e));
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(u.UrlsSafeCheckTypes.USC_STATE_SERVICE)), r("design:paramtypes", [l.StateService])], d)),
      (t.TabActivated = d);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabState = void 0);
    const i = n(8),
      r = n(40);
    t.TabState = class {
      constructor() {
        (this.url = ""),
          (this.lastUrl = ""),
          (this.checked = !1),
          (this.notificationMuted = !1),
          (this.status = i.STATUS.NONE),
          (this._loading = !1),
          (this._checking = !1),
          (this.fgNavData = {}),
          (this.bgNavData = []);
      }
      setId(e) {
        this.id = e;
      }
      setUrl(e) {
        (this.url = e), (this.domain = r.getDomain(e));
      }
      setLastUrl(e) {
        this.lastUrl = e;
      }
      setNotificationMute(e) {
        this.notificationMuted = e;
      }
      setLoadingState(e) {
        this._loading = e;
      }
      setCheckingState(e) {
        this._checking = e;
      }
      setCheckedState(e) {
        this.checked = e;
      }
      setStatus(e) {
        this.status = e;
      }
      setFgNavData(e) {
        this.fgNavData = e;
      }
      clearFgNavData() {
        this.fgNavData = {};
      }
      hasFgNavData() {
        return !!Object.keys(this.fgNavData).length;
      }
      getFgNavData() {
        return this.fgNavData;
      }
      prependBgNavData(e) {
        this.bgNavData.unshift(...e);
      }
      addBgNavData(e) {
        this.bgNavData.push(e);
      }
      clearBgNavData() {
        this.bgNavData = [];
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.whiteListProtocols = void 0),
      (t.whiteListProtocols = ["chrome:", "chrome-search:", "chrome-devtools", "about:", "edge:"]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.blankPage = void 0),
      (t.blankPage = { CHROME_BROWSER: "chrome://newtab/", FIREFOX_BROWSER: "about:blank", EDGE_BROWSER: "edge://newtab/" });
  },
  function (e, t, n) {
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
    const r = "SensitiveDataFilter:";
    t.default = class {
      constructor(e) {
        if ("string" != typeof e.host) throw "Server host is undefined";
        (this.host = e.host), (this.logging = !!e.logging);
      }
      init() {
        return i(this, void 0, void 0, function* () {
          yield this.updateRules();
        });
      }
      transformUrl(e) {
        if (!e || !this.rules || !this.rules.filters) return e;
        const t = new URL(e),
          n = t.host;
        t.password.length && (t.password = "*****"), t.username.length && (t.username = "*****");
        this.rules.filters.forEach((e) => {
          n.match(e.domain) &&
            ((t.pathname = this.processFilterRules(e.rules, t.pathname)),
            (t.search = this.processFilterRules(e.rules, t.search)),
            (t.hash = this.processFilterRules(e.rules, t.hash)));
        });
        const i = t.toString();
        return this.logging && this.log(`${r} Transformed url: ${e} -> ${i}`), i;
      }
      transformTitle(e, t) {
        if (!t || !this.rules || !this.rules.titles) return t;
        const n = this.rules.titles;
        let i = t;
        return (
          n.forEach((t) => {
            e.match(t.domain) &&
              t.rules.forEach((e) => {
                e.value && (i = this.applyRegexp(e.value, i, "*****"));
              });
          }),
          this.logging && this.log(`${r} Transformed title: ${t} -> ${i}`),
          i
        );
      }
      updateRules() {
        return i(this, void 0, void 0, function* () {
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
                  n = this.applyRegexp("([?&]" + e.value + "=)([^&]+)", n, "$1*****");
                  break;
                case "path":
                  n = this.applyPathFilter(e.value, n, "*****");
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
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.SensitiveDataFilterException = void 0);
    class i extends Error {}
    t.SensitiveDataFilterException = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.CheckSafeException = void 0);
    class i extends Error {}
    t.CheckSafeException = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = (function () {
      var e = String.fromCharCode,
        t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
        i = {};
      function r(e, t) {
        if (!i[e]) {
          i[e] = {};
          for (var n = 0; n < e.length; n++) i[e][e.charAt(n)] = n;
        }
        return i[e][t];
      }
      var o = {
        compressToBase64: function (e) {
          if (null == e) return "";
          var n = o._compress(e, 6, function (e) {
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
          for (var t = o.compress(e), n = new Uint8Array(2 * t.length), i = 0, r = t.length; i < r; i++) {
            var a = t.charCodeAt(i);
            (n[2 * i] = a >>> 8), (n[2 * i + 1] = a % 256);
          }
          return n;
        },
        decompressFromUint8Array: function (t) {
          if (null == t) return o.decompress(t);
          for (var n = new Array(t.length / 2), i = 0, r = n.length; i < r; i++) n[i] = 256 * t[2 * i] + t[2 * i + 1];
          var a = [];
          return (
            n.forEach(function (t) {
              a.push(e(t));
            }),
            o.decompress(a.join(""))
          );
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
          var i,
            r,
            o,
            a = {},
            s = {},
            c = "",
            u = "",
            l = "",
            d = 2,
            h = 3,
            f = 2,
            v = [],
            p = 0,
            _ = 0;
          for (o = 0; o < e.length; o += 1)
            if (
              ((c = e.charAt(o)),
              Object.prototype.hasOwnProperty.call(a, c) || ((a[c] = h++), (s[c] = !0)),
              (u = l + c),
              Object.prototype.hasOwnProperty.call(a, u))
            )
              l = u;
            else {
              if (Object.prototype.hasOwnProperty.call(s, l)) {
                if (l.charCodeAt(0) < 256) {
                  for (i = 0; i < f; i++) (p <<= 1), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++;
                  for (r = l.charCodeAt(0), i = 0; i < 8; i++)
                    (p = (p << 1) | (1 & r)), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++, (r >>= 1);
                } else {
                  for (r = 1, i = 0; i < f; i++) (p = (p << 1) | r), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++, (r = 0);
                  for (r = l.charCodeAt(0), i = 0; i < 16; i++)
                    (p = (p << 1) | (1 & r)), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++, (r >>= 1);
                }
                0 == --d && ((d = Math.pow(2, f)), f++), delete s[l];
              } else
                for (r = a[l], i = 0; i < f; i++) (p = (p << 1) | (1 & r)), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++, (r >>= 1);
              0 == --d && ((d = Math.pow(2, f)), f++), (a[u] = h++), (l = String(c));
            }
          if ("" !== l) {
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              if (l.charCodeAt(0) < 256) {
                for (i = 0; i < f; i++) (p <<= 1), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++;
                for (r = l.charCodeAt(0), i = 0; i < 8; i++)
                  (p = (p << 1) | (1 & r)), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++, (r >>= 1);
              } else {
                for (r = 1, i = 0; i < f; i++) (p = (p << 1) | r), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++, (r = 0);
                for (r = l.charCodeAt(0), i = 0; i < 16; i++)
                  (p = (p << 1) | (1 & r)), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++, (r >>= 1);
              }
              0 == --d && ((d = Math.pow(2, f)), f++), delete s[l];
            } else
              for (r = a[l], i = 0; i < f; i++) (p = (p << 1) | (1 & r)), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++, (r >>= 1);
            0 == --d && ((d = Math.pow(2, f)), f++);
          }
          for (r = 2, i = 0; i < f; i++) (p = (p << 1) | (1 & r)), _ == t - 1 ? ((_ = 0), v.push(n(p)), (p = 0)) : _++, (r >>= 1);
          for (;;) {
            if (((p <<= 1), _ == t - 1)) {
              v.push(n(p));
              break;
            }
            _++;
          }
          return v.join("");
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
          var r,
            o,
            a,
            s,
            c,
            u,
            l,
            d = [],
            h = 4,
            f = 4,
            v = 3,
            p = "",
            _ = [],
            g = { val: i(0), position: n, index: 1 };
          for (r = 0; r < 3; r += 1) d[r] = r;
          for (a = 0, c = Math.pow(2, 2), u = 1; u != c; )
            (s = g.val & g.position),
              (g.position >>= 1),
              0 == g.position && ((g.position = n), (g.val = i(g.index++))),
              (a |= (s > 0 ? 1 : 0) * u),
              (u <<= 1);
          switch (a) {
            case 0:
              for (a = 0, c = Math.pow(2, 8), u = 1; u != c; )
                (s = g.val & g.position),
                  (g.position >>= 1),
                  0 == g.position && ((g.position = n), (g.val = i(g.index++))),
                  (a |= (s > 0 ? 1 : 0) * u),
                  (u <<= 1);
              l = e(a);
              break;
            case 1:
              for (a = 0, c = Math.pow(2, 16), u = 1; u != c; )
                (s = g.val & g.position),
                  (g.position >>= 1),
                  0 == g.position && ((g.position = n), (g.val = i(g.index++))),
                  (a |= (s > 0 ? 1 : 0) * u),
                  (u <<= 1);
              l = e(a);
              break;
            case 2:
              return "";
          }
          for (d[3] = l, o = l, _.push(l); ; ) {
            if (g.index > t) return "";
            for (a = 0, c = Math.pow(2, v), u = 1; u != c; )
              (s = g.val & g.position),
                (g.position >>= 1),
                0 == g.position && ((g.position = n), (g.val = i(g.index++))),
                (a |= (s > 0 ? 1 : 0) * u),
                (u <<= 1);
            switch ((l = a)) {
              case 0:
                for (a = 0, c = Math.pow(2, 8), u = 1; u != c; )
                  (s = g.val & g.position),
                    (g.position >>= 1),
                    0 == g.position && ((g.position = n), (g.val = i(g.index++))),
                    (a |= (s > 0 ? 1 : 0) * u),
                    (u <<= 1);
                (d[f++] = e(a)), (l = f - 1), h--;
                break;
              case 1:
                for (a = 0, c = Math.pow(2, 16), u = 1; u != c; )
                  (s = g.val & g.position),
                    (g.position >>= 1),
                    0 == g.position && ((g.position = n), (g.val = i(g.index++))),
                    (a |= (s > 0 ? 1 : 0) * u),
                    (u <<= 1);
                (d[f++] = e(a)), (l = f - 1), h--;
                break;
              case 2:
                return _.join("");
            }
            if ((0 == h && ((h = Math.pow(2, v)), v++), d[l])) p = d[l];
            else {
              if (l !== f) return null;
              p = o + o.charAt(0);
            }
            _.push(p), (d[f++] = o + p.charAt(0)), (o = p), 0 == --h && ((h = Math.pow(2, v)), v++);
          }
        }
      };
      return o;
    })();
    t.default = i;
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "version", function () {
        return i;
      }),
      n.d(t, "VERSION", function () {
        return r;
      }),
      n.d(t, "atob", function () {
        return P;
      }),
      n.d(t, "atobPolyfill", function () {
        return w;
      }),
      n.d(t, "btoa", function () {
        return S;
      }),
      n.d(t, "btoaPolyfill", function () {
        return g;
      }),
      n.d(t, "fromBase64", function () {
        return B;
      }),
      n.d(t, "toBase64", function () {
        return R;
      }),
      n.d(t, "utob", function () {
        return m;
      }),
      n.d(t, "encode", function () {
        return R;
      }),
      n.d(t, "encodeURI", function () {
        return A;
      }),
      n.d(t, "encodeURL", function () {
        return A;
      }),
      n.d(t, "btou", function () {
        return C;
      }),
      n.d(t, "decode", function () {
        return B;
      }),
      n.d(t, "isValid", function () {
        return x;
      }),
      n.d(t, "fromUint8Array", function () {
        return y;
      }),
      n.d(t, "toUint8Array", function () {
        return M;
      }),
      n.d(t, "extendString", function () {
        return G;
      }),
      n.d(t, "extendUint8Array", function () {
        return V;
      }),
      n.d(t, "extendBuiltins", function () {
        return F;
      }),
      n.d(t, "Base64", function () {
        return W;
      });
    const i = "3.7.2",
      r = i,
      o = "function" == typeof atob,
      a = "function" == typeof btoa,
      s = "function" == typeof Buffer,
      c = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
      u = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
      l = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
      d = ((e) => {
        let t = {};
        return e.forEach((e, n) => (t[e] = n)), t;
      })(l),
      h = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
      f = String.fromCharCode.bind(String),
      v =
        "function" == typeof Uint8Array.from
          ? Uint8Array.from.bind(Uint8Array)
          : (e, t = (e) => e) => new Uint8Array(Array.prototype.slice.call(e, 0).map(t)),
      p = (e) => e.replace(/=/g, "").replace(/[+\/]/g, (e) => ("+" == e ? "-" : "_")),
      _ = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""),
      g = (e) => {
        let t,
          n,
          i,
          r,
          o = "";
        const a = e.length % 3;
        for (let a = 0; a < e.length; ) {
          if ((n = e.charCodeAt(a++)) > 255 || (i = e.charCodeAt(a++)) > 255 || (r = e.charCodeAt(a++)) > 255)
            throw new TypeError("invalid character found");
          (t = (n << 16) | (i << 8) | r), (o += l[(t >> 18) & 63] + l[(t >> 12) & 63] + l[(t >> 6) & 63] + l[63 & t]);
        }
        return a ? o.slice(0, a - 3) + "===".substring(a) : o;
      },
      S = a ? (e) => btoa(e) : s ? (e) => Buffer.from(e, "binary").toString("base64") : g,
      E = s
        ? (e) => Buffer.from(e).toString("base64")
        : (e) => {
            let t = [];
            for (let n = 0, i = e.length; n < i; n += 4096) t.push(f.apply(null, e.subarray(n, n + 4096)));
            return S(t.join(""));
          },
      y = (e, t = !1) => (t ? p(E(e)) : E(e)),
      T = (e) => {
        if (e.length < 2)
          return (t = e.charCodeAt(0)) < 128
            ? e
            : t < 2048
            ? f(192 | (t >>> 6)) + f(128 | (63 & t))
            : f(224 | ((t >>> 12) & 15)) + f(128 | ((t >>> 6) & 63)) + f(128 | (63 & t));
        var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return f(240 | ((t >>> 18) & 7)) + f(128 | ((t >>> 12) & 63)) + f(128 | ((t >>> 6) & 63)) + f(128 | (63 & t));
      },
      b = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
      m = (e) => e.replace(b, T),
      O = s ? (e) => Buffer.from(e, "utf8").toString("base64") : u ? (e) => E(u.encode(e)) : (e) => S(m(e)),
      R = (e, t = !1) => (t ? p(O(e)) : O(e)),
      A = (e) => R(e, !0),
      I = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
      N = (e) => {
        switch (e.length) {
          case 4:
            var t =
              (((7 & e.charCodeAt(0)) << 18) | ((63 & e.charCodeAt(1)) << 12) | ((63 & e.charCodeAt(2)) << 6) | (63 & e.charCodeAt(3))) -
              65536;
            return f(55296 + (t >>> 10)) + f(56320 + (1023 & t));
          case 3:
            return f(((15 & e.charCodeAt(0)) << 12) | ((63 & e.charCodeAt(1)) << 6) | (63 & e.charCodeAt(2)));
          default:
            return f(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
        }
      },
      C = (e) => e.replace(I, N),
      w = (e) => {
        if (((e = e.replace(/\s+/g, "")), !h.test(e))) throw new TypeError("malformed base64.");
        e += "==".slice(2 - (3 & e.length));
        let t,
          n,
          i,
          r = "";
        for (let o = 0; o < e.length; )
          (t = (d[e.charAt(o++)] << 18) | (d[e.charAt(o++)] << 12) | ((n = d[e.charAt(o++)]) << 6) | (i = d[e.charAt(o++)])),
            (r +=
              64 === n ? f((t >> 16) & 255) : 64 === i ? f((t >> 16) & 255, (t >> 8) & 255) : f((t >> 16) & 255, (t >> 8) & 255, 255 & t));
        return r;
      },
      P = o ? (e) => atob(_(e)) : s ? (e) => Buffer.from(e, "base64").toString("binary") : w,
      D = s ? (e) => v(Buffer.from(e, "base64")) : (e) => v(P(e), (e) => e.charCodeAt(0)),
      M = (e) => D(j(e)),
      L = s ? (e) => Buffer.from(e, "base64").toString("utf8") : c ? (e) => c.decode(D(e)) : (e) => C(P(e)),
      j = (e) => _(e.replace(/[-_]/g, (e) => ("-" == e ? "+" : "/"))),
      B = (e) => L(j(e)),
      x = (e) => {
        if ("string" != typeof e) return !1;
        const t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
      },
      U = (e) => ({ value: e, enumerable: !1, writable: !0, configurable: !0 }),
      G = function () {
        const e = (e, t) => Object.defineProperty(String.prototype, e, U(t));
        e("fromBase64", function () {
          return B(this);
        }),
          e("toBase64", function (e) {
            return R(this, e);
          }),
          e("toBase64URI", function () {
            return R(this, !0);
          }),
          e("toBase64URL", function () {
            return R(this, !0);
          }),
          e("toUint8Array", function () {
            return M(this);
          });
      },
      V = function () {
        const e = (e, t) => Object.defineProperty(Uint8Array.prototype, e, U(t));
        e("toBase64", function (e) {
          return y(this, e);
        }),
          e("toBase64URI", function () {
            return y(this, !0);
          }),
          e("toBase64URL", function () {
            return y(this, !0);
          });
      },
      F = () => {
        G(), V();
      },
      W = {
        version: i,
        VERSION: r,
        atob: P,
        atobPolyfill: w,
        btoa: S,
        btoaPolyfill: g,
        fromBase64: B,
        toBase64: R,
        encode: R,
        encodeURI: A,
        encodeURL: A,
        utob: m,
        btou: C,
        decode: B,
        isValid: x,
        fromUint8Array: y,
        toUint8Array: M,
        extendString: G,
        extendUint8Array: V,
        extendBuiltins: F
      };
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabRemoved = void 0);
    const s = n(0),
      c = n(17),
      u = n(8),
      l = n(10);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return c.TabServiceEvents.ON_TAB_REMOVED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          const t = e.data.tabId;
          this.stateService.removeTabState(t);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(u.UrlsSafeCheckTypes.USC_STATE_SERVICE)), r("design:paramtypes", [l.StateService])], d)),
      (t.TabRemoved = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.GetActiveTabStateEventListener = void 0);
    const s = n(0),
      c = n(10),
      u = n(22),
      l = n(8);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return u.UrlsSafeCheckEvents.GET_ACTIVE_TAB_STATE;
      }
      handle(e, t, n) {
        return a(this, void 0, void 0, function* () {
          const e = yield this.stateService.getActiveTabState();
          n(e);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(l.UrlsSafeCheckTypes.USC_STATE_SERVICE)), r("design:paramtypes", [c.StateService])], d)),
      (t.GetActiveTabStateEventListener = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.MuteNotificationEventListener = void 0);
    const s = n(0),
      c = n(10),
      u = n(22),
      l = n(8);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return u.UrlsSafeCheckEvents.MUTE_NOTIFICATION;
      }
      handle(e, t, n) {
        return a(this, void 0, void 0, function* () {
          if (t.tab) {
            const { persist: n } = e.data;
            this.stateService.muteTabNofitication(t.tab.id, n);
          }
          n(void 0);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(l.UrlsSafeCheckTypes.USC_STATE_SERVICE)), r("design:paramtypes", [c.StateService])], d)),
      (t.MuteNotificationEventListener = d);
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.SensitiveDataFilterModule = void 0);
    const r = n(2),
      o = n(128),
      a = n(41),
      s = n(88),
      c = n(129),
      u = n(103);
    class l extends r.MarioModule {
      name() {
        return "SensitiveDataFilterModule";
      }
      static use(e, t) {
        return e.registerModule(l, t);
      }
      register(e) {
        return i(this, void 0, void 0, function* () {
          this.mario().container().bind(a.SensitiveDataFilterTypes.SDF_PARAM_ENABLED).toConstantValue(!!e.enabled),
            this.mario().container().bind(a.SensitiveDataFilterTypes.SDF_PARAM_HOST).toConstantValue(e.host),
            this.mario().container().bind(a.SensitiveDataFilterTypes.SDF_PARAM_LOGGING).toConstantValue(!!e.logging),
            this.mario()
              .container()
              .bind(a.SensitiveDataFilterTypes.SDF_PARAM_RULES_UPDATE_INTERVAL)
              .toConstantValue(e.rulesUpdateInterval),
            this.mario().registerService(a.SensitiveDataFilterTypes.SDF_SERVICE, s.SensitiveDataFilterService),
            yield this.mario().registerService(r.MARIO_TYPES.ALARM_SERVICE, o.AlarmService),
            yield this.mario().getService(a.SensitiveDataFilterTypes.SDF_SERVICE).init(),
            this.mario().internalDispatcher().on(c.UpdateRulesListEvent);
          const t = { delayInMinutes: e.rulesUpdateInterval || 1440, periodInMinutes: e.rulesUpdateInterval || 1440 };
          yield this.mario().getService(r.MARIO_TYPES.ALARM_SERVICE).create(t, u.AlarmNames.UPDATE_RULES_LIST);
        });
      }
    }
    t.SensitiveDataFilterModule = l;
  },
  function (e, t, n) {
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
        },
      a =
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
    const s = n(0),
      c = n(5),
      u = n(2),
      l = n(102);
    let d = class {
      constructor(e, t) {
        (this.logger = e),
          (this.internalDispatcher = t),
          chrome.alarms.onAlarm.addListener((e) => {
            const t = new u.MarioEvent(l.AlarmEvents.ALARM_ELAPSED, e);
            this.internalDispatcher.emit(t).then();
          });
      }
      create(e, t) {
        try {
          this.logger.log(`AlarmService: create an alarm "${t}"`), chrome.alarms.create(t, e);
        } catch (e) {
          throw (this.logger.warn(`AlarmService: could not create an alarm with name "${t}"`), e);
        }
      }
      get(e) {
        return a(this, void 0, void 0, function* () {
          return new Promise((t, n) => {
            try {
              chrome.alarms.get(e, (e) => t(e));
            } catch (t) {
              this.logger.warn(`AlarmService: could get an alarm with name "${e}"`), n(t);
            }
          });
        });
      }
      getAll() {
        return a(this, void 0, void 0, function* () {
          return new Promise((e, t) => {
            try {
              chrome.alarms.getAll((t) => e(t));
            } catch (e) {
              this.logger.warn("AlarmService: could get all alarms"), t(e);
            }
          });
        });
      }
      clear(e) {
        return a(this, void 0, void 0, function* () {
          return (
            this.logger.log(`AlarmService: clear an alarm "${e}"`),
            new Promise((t, n) => {
              try {
                chrome.alarms.clear(e, (e) => t(e));
              } catch (t) {
                this.logger.warn(`AlarmService: could clear an alarm with name "${e}"`), n(t);
              }
            })
          );
        });
      }
      clearAll() {
        return a(this, void 0, void 0, function* () {
          return (
            this.logger.log(`AlarmService: clear all alarms "${name}"`),
            new Promise((e, t) => {
              try {
                chrome.alarms.clearAll((t) => e(t));
              } catch (e) {
                this.logger.warn("AlarmService: could clear all alarms"), t(e);
              }
            })
          );
        });
      }
    };
    (d = i(
      [
        s.injectable(),
        o(0, s.inject(c.MARIO_TYPES.LOGGER_SERVICE)),
        o(1, s.inject(c.MARIO_TYPES.INTERNAL_DISPATCHER)),
        r("design:paramtypes", [Object, Object])
      ],
      d
    )),
      (t.AlarmService = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.UpdateRulesListEvent = void 0);
    const s = n(0),
      c = n(102),
      u = n(103),
      l = n(41),
      d = n(88);
    let h = class {
      constructor(e) {
        this.sensitiveDataFilterService = e;
      }
      on() {
        return c.AlarmEvents.ALARM_ELAPSED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          e.data.name === u.AlarmNames.UPDATE_RULES_LIST && this.sensitiveDataFilterService.updateRules();
        });
      }
    };
    (h = i(
      [s.injectable(), o(0, s.inject(l.SensitiveDataFilterTypes.SDF_SERVICE)), r("design:paramtypes", [d.SensitiveDataFilterService])],
      h
    )),
      (t.UpdateRulesListEvent = h);
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.FgNavModule = void 0);
    const r = n(2),
      o = n(15),
      a = n(37),
      s = n(18),
      c = n(104),
      u = n(105),
      l = n(93),
      d = n(106),
      h = n(140),
      f = n(141),
      v = n(92);
    class p extends r.MarioModule {
      name() {
        return "FgNavModule";
      }
      static use(e, t) {
        return e.registerModule(p, t);
      }
      register(e) {
        return i(this, void 0, void 0, function* () {
          this.mario().container().bind(s.FgNavTypes.FGNAV_PANALYTICS_ID).toConstantValue(e.panalyticsId),
            this.mario().container().bind(s.FgNavTypes.FGNAV_INSTANCE_ID).toConstantValue(e.pinstanceId),
            this.mario().container().bind(s.FgNavTypes.FGNAV_PARTNER_ID).toConstantValue(e.partnerId),
            this.mario().container().bind(s.FgNavTypes.FGNAV_DISTRIBUTOR_ID).toConstantValue(e.distributorId),
            this.mario().container().bind(s.FgNavTypes.FGNAV_ENABLED).toConstantValue(!!e.enabled),
            this.mario().container().bind(s.FgNavTypes.FGNAV_LOGGING).toConstantValue(!!e.logging),
            this.mario().registerService(s.FgNavTypes.FGNAV_LOGGER, v.FgLogger),
            this.mario().registerService(r.MARIO_TYPES.TAB_SERVICE, o.TabService),
            this.mario().registerService(r.MARIO_TYPES.NAVIGATION_SERVICE, a.NavigationService),
            this.mario().registerService(s.FgNavTypes.FGNAV_STATE_SERVICE, c.StateService),
            this.mario().registerService(s.FgNavTypes.FGNAV_DATA_SERVICE, u.DataService),
            this.mario().registerService(s.FgNavTypes.FGNAV_TAB_EVENTS_PROCESS_SERVICE, l.TabEventsProcessService),
            this.mario().registerService(s.FgNavTypes.FGNAV_QUEUE_SERVICE, d.QueueService),
            this.mario().internalDispatcher().on(h.TabStateLoading),
            this.mario().internalDispatcher().on(f.TabStateCompleted);
        });
      }
    }
    t.FgNavModule = p;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.WebEvent = void 0);
    const i = n(42);
    t.WebEvent = class {
      constructor() {
        (this.url = ""),
          (this.hasData = !1),
          (this.navigationData = {}),
          (this.documentData = {}),
          (this.systemData = {}),
          (this.panalyticsData = {});
      }
      setTabId(e) {
        this.tabId = e;
      }
      setUrl(e) {
        (this.url = e), (this.domain = i.getDomain(e));
      }
      setNavigationData(e) {
        Object.assign(this.navigationData, e);
      }
      getNavigationData() {
        return this.navigationData;
      }
      setDocumentData(e) {
        Object.assign(this.documentData, e);
      }
      getDocumentData() {
        return this.documentData;
      }
      setPanalyticsData(e) {
        Object.assign(this.panalyticsData, e);
      }
      getPanalyticsData() {
        return this.panalyticsData;
      }
      setSystemData(e) {
        Object.assign(this.systemData, e);
      }
      getSystemData() {
        return this.systemData;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.whiteListProtocols = void 0),
      (t.whiteListProtocols = ["chrome:", "chrome-search:", "chrome-devtools", "about:", "edge:"]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.blankPage = void 0),
      (t.blankPage = { CHROME_BROWSER: "chrome://newtab/", FIREFOX_BROWSER: "about:blank", EDGE_BROWSER: "edge://newtab/" });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getOSVersion = void 0),
      (t.getOSVersion = function () {
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
        for (let e in i) {
          let r = i[e];
          if (r.r.test(t)) {
            n = r.s;
            break;
          }
        }
        let r;
        switch ((/Windows/.test(n) && ((r = /Windows (.*)/.exec(n)[1]), (n = "Windows")), n)) {
          case "Mac OS X":
            const n = /Mac OS X ([\.\_\d]+)/.exec(t);
            r = n ? n[1] : "unknown";
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
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Tab = void 0);
    const r = n(36),
      o = n(107);
    t.Tab = class {
      constructor() {
        (this.navigationSequence = 0), (this.urlRewriteWaitDelay = 500);
      }
      setTabId(e) {
        this.tabId = e;
      }
      setUrl(e) {
        (this.prevUrl = this.url), (this.url = e);
      }
      setSourceTabId(e) {
        this.sourceTabId = e;
      }
      setLastUpdated(e) {
        this.lastUpdated = e;
      }
      setLastStatus(e) {
        this.lastStatus = e;
      }
      setNavigationMethod(e) {
        (this.navigationMethod = e), this.ifNeedResolveNavigationMethod();
      }
      incNavigationSequence() {
        this.navigationSequence++;
      }
      getNavigationSequence() {
        return this.navigationSequence;
      }
      getNavigationMethod() {
        return this.navigationMethod;
      }
      getSourceTabId() {
        return this.sourceTabId;
      }
      getData() {
        return this;
      }
      resetSession() {
        (this.sessionId = r.Guid.create().toString()), (this.navigationMethod = null);
      }
      resetNavigationMethod() {
        this.navigationMethod = null;
      }
      initNavigationMethod() {
        return i(this, void 0, void 0, function* () {
          return (
            this.ifNeedResolveNavigationMethod(),
            this.navigationMethod
              ? Promise.resolve()
              : new Promise((e) => {
                  (this.resolver = e),
                    (this.timerId = setTimeout(() => {
                      (this.navigationMethod = o.NavigationMethod.REQUEST), e();
                    }, this.urlRewriteWaitDelay));
                })
          );
        });
      }
      toJSON() {
        return this.toDTO();
      }
      toDTO() {
        return {
          tabId: this.tabId,
          url: this.url,
          prevUrl: this.prevUrl,
          navigationMethod: this.navigationMethod,
          navigationSequence: this.navigationSequence,
          isBrowserServiceUrl: this.isBrowserServiceUrl,
          sourceTabId: this.sourceTabId,
          sessionId: this.sessionId,
          lastUpdated: this.lastUpdated,
          lastStatus: this.lastStatus
        };
      }
      ifNeedResolveNavigationMethod() {
        this.resolver && (clearTimeout(this.timerId), (this.timerId = null), this.resolver(), (this.resolver = null));
      }
    };
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delay =
          t.generateUIID =
          t.isSameOrigin =
          t.isSameDomain =
          t.getDomain =
          t.getBrowserBlankPageUrl =
          t.isBlankPage =
          t.isWhiteListUrl =
          t.notConcurrent =
          t.valueToPromise =
            void 0);
      const r = n(137),
        o = n(138);
      function a() {
        return o.blankPage[e.env.BROWSER] || "about:blank";
      }
      function s(e) {
        try {
          const { host: t } = new URL(e);
          return t;
        } catch (t) {
          return e;
        }
      }
      (t.valueToPromise = function (e) {
        return new Promise((t) => {
          t(e);
        });
      }),
        (t.notConcurrent = function (e) {
          let t = !1;
          return () => (
            t ||
              (t = (() =>
                i(this, void 0, void 0, function* () {
                  try {
                    return yield e();
                  } finally {
                    t = !1;
                  }
                }))()),
            t
          );
        }),
        (t.isWhiteListUrl = function (e) {
          if ("" === e) return !0;
          const { protocol: t } = new URL(e);
          return r.whiteListProtocols.includes(t);
        }),
        (t.isBlankPage = function (e) {
          return e === a();
        }),
        (t.getBrowserBlankPageUrl = a),
        (t.getDomain = s),
        (t.isSameDomain = function (e, t) {
          if (e && t) return s(e) === s(t);
        }),
        (t.isSameOrigin = function (e, t) {
          return new URL(e).origin === new URL(t).origin;
        }),
        (t.generateUIID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            const t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          });
        }),
        (t.delay = function (e) {
          return i(this, void 0, void 0, function* () {
            return new Promise((t) => setTimeout(t, e));
          });
        });
    }).call(this, n(19));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.whiteListProtocols = void 0),
      (t.whiteListProtocols = ["chrome:", "chrome-search:", "chrome-devtools", "about:", "edge:"]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.blankPage = void 0),
      (t.blankPage = { CHROME_BROWSER: "chrome://newtab/", FIREFOX_BROWSER: "about:blank", EDGE_BROWSER: "edge://newtab/" });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.NavigationMethod = void 0),
      (function (e) {
        (e.REQUEST = "request"), (e.URL_REWRITE = "url_rewrite");
      })(t.NavigationMethod || (t.NavigationMethod = {}));
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabStateLoading = void 0);
    const s = n(0),
      c = n(93),
      u = n(18),
      l = n(94),
      d = n(25);
    let h = class {
      constructor(e) {
        this.tabEventsProcessService = e;
      }
      on() {
        return d.TabStateEvents.TAB_STATE_LOADING;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          const { tabId: t, url: n } = e.data;
          this.tabEventsProcessService.process({ type: l.TAB_EVENT_TYPE.LOADING, tabId: t, url: n, tabState: e.data });
        });
      }
    };
    (h = i(
      [s.injectable(), o(0, s.inject(u.FgNavTypes.FGNAV_TAB_EVENTS_PROCESS_SERVICE)), r("design:paramtypes", [c.TabEventsProcessService])],
      h
    )),
      (t.TabStateLoading = h);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabStateCompleted = void 0);
    const s = n(0),
      c = n(93),
      u = n(18),
      l = n(94),
      d = n(25);
    let h = class {
      constructor(e) {
        this.tabEventsProcessService = e;
      }
      on() {
        return d.TabStateEvents.TAB_STATE_COMPLETED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          const { tabId: t, url: n } = e.data;
          this.tabEventsProcessService.process({ type: l.TAB_EVENT_TYPE.COMPLETE, tabId: t, url: n, tabState: e.data });
        });
      }
    };
    (h = i(
      [s.injectable(), o(0, s.inject(u.FgNavTypes.FGNAV_TAB_EVENTS_PROCESS_SERVICE)), r("design:paramtypes", [c.TabEventsProcessService])],
      h
    )),
      (t.TabStateCompleted = h);
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BgNavModule = void 0);
    const r = n(2),
      o = n(38),
      a = n(15),
      s = n(11),
      c = n(143),
      u = n(147),
      l = n(148),
      d = n(149),
      h = n(150),
      f = n(151),
      v = n(152),
      p = n(14),
      _ = n(109),
      g = n(110);
    class S extends r.MarioModule {
      name() {
        return "BgNavModule";
      }
      static use(e, t) {
        return e.registerModule(S, t);
      }
      register(e) {
        return i(this, void 0, void 0, function* () {
          this.mario().container().bind(s.BgNavTypes.PARAM_PANALYTICS_ID).toConstantValue(e.panalyticsId),
            this.mario().container().bind(s.BgNavTypes.PARAM_PINSTANCE_ID).toConstantValue(e.pinstanceId),
            this.mario().container().bind(s.BgNavTypes.PARAM_PARTNER_ID).toConstantValue(e.partnerId),
            this.mario().container().bind(s.BgNavTypes.PARAM_DISTRIBUTOR_ID).toConstantValue(e.distributorId),
            this.mario().container().bind(s.BgNavTypes.PARAM_ENABLED).toConstantValue(e.enabled),
            this.mario().container().bind(s.BgNavTypes.PARAM_LOGGING).toConstantValue(e.logging),
            this.mario().registerService(s.BgNavTypes.LOGGER, g.BgLogger),
            this.mario().registerService(r.MARIO_TYPES.WEB_REQUEST_SERVICE, o.WebRequestService),
            this.mario().registerService(r.MARIO_TYPES.TAB_SERVICE, a.TabService),
            this.mario().registerService(s.BgNavTypes.STATE_SERVICE, p.StateService),
            this.mario().registerService(s.BgNavTypes.DATA_SERVICE, _.DataService);
          const t = { urls: ["<all_urls>"] };
          this.mario().getService(r.MARIO_TYPES.WEB_REQUEST_SERVICE).listenOnBeforeRequest(t),
            this.mario().getService(r.MARIO_TYPES.WEB_REQUEST_SERVICE).listenOnBeforeSendHeaders(t, ["requestHeaders"]),
            this.mario().getService(r.MARIO_TYPES.WEB_REQUEST_SERVICE).listenOnSendHeaders(t, ["requestHeaders"]),
            this.mario().getService(r.MARIO_TYPES.WEB_REQUEST_SERVICE).listenOnBeforeRedirect(t, ["responseHeaders"]),
            this.mario().getService(r.MARIO_TYPES.WEB_REQUEST_SERVICE).listenOnResponseStarted(t, ["responseHeaders"]),
            this.mario().getService(r.MARIO_TYPES.WEB_REQUEST_SERVICE).listenOnCompleted(t, ["responseHeaders"]),
            this.mario().getService(r.MARIO_TYPES.WEB_REQUEST_SERVICE).listenOnErrorOccurred(t),
            this.mario().getService(r.MARIO_TYPES.TAB_SERVICE).listenOnCreated(),
            this.mario().getService(r.MARIO_TYPES.TAB_SERVICE).listenOnUpdated(),
            this.mario().getService(r.MARIO_TYPES.TAB_SERVICE).listenOnRemoved(),
            this.mario().internalDispatcher().on(c.OnBeforeRequest),
            this.mario().internalDispatcher().on(u.OnBeforeSendHeaders),
            this.mario().internalDispatcher().on(l.OnSendHeaders),
            this.mario().internalDispatcher().on(d.OnBeforeRedirect),
            this.mario().internalDispatcher().on(h.OnResponseStarted),
            this.mario().internalDispatcher().on(f.OnCompleted),
            this.mario().internalDispatcher().on(v.OnErrorOccurred);
        });
      }
    }
    t.BgNavModule = S;
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.OnBeforeRequest = void 0);
    const s = n(0),
      c = n(13),
      u = n(14),
      l = n(11),
      d = n(97);
    let h = class {
      constructor(e) {
        this.bgStateService = e;
      }
      on() {
        return c.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_REQUEST;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          const t = e.data.details,
            { tabId: n, url: i } = t,
            r = +t.requestId;
          d.isWhiteListUrl(i) || -1 === n || this.bgStateService.addWebEvent(n, r);
        });
      }
    };
    (h = i([s.injectable(), o(0, s.inject(l.BgNavTypes.STATE_SERVICE)), r("design:paramtypes", [u.StateService])], h)),
      (t.OnBeforeRequest = h);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.WebEvent = void 0);
    const i = n(89);
    class r {
      constructor() {
        (this.requestHeaders = []), (this.responseHeaders = []);
      }
      setFromResponse(e) {
        e.method && (this.requestMethod = e.method),
          e.url && (this.url = e.url),
          e.tabId && (this.tabId = e.tabId),
          e.ip && (this.serverIp = e.ip),
          e.type && ((this.eventSubType = e.type), (this.eventType = this.calcEventType())),
          void 0 !== e.fromCache && (this.responseIsFromCache = e.fromCache),
          e.redirectUrl && (this.responseRedirectUrl = e.redirectUrl),
          e.statusCode && (this.responseStatusCode = e.statusCode),
          e.statusLine && (this.responseStatusLine = e.statusLine),
          void 0 !== e.frameId && (this.frameId = e.frameId),
          void 0 !== e.parentFrameId && (this.parentFrameId = e.parentFrameId),
          e.error && (this.responseError = e.error);
      }
      setRequestHeaders(e) {
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          this.requestHeaders.push({ name: n.name, value: n.value });
        }
      }
      setResponseHeaders(e) {
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          this.responseHeaders.push({ name: n.name, value: n.value });
        }
      }
      setDocumentData(e) {
        (this.pageWindowName = e.windowName), (this.pageDocumentTitle = e.title), (this.pageDocumentReferrer = e.referrer);
      }
      setPanalyticsData(e) {
        (this.panalyticsId = e.panalyticsId),
          (this.pinstanceId = e.pinstanceId),
          (this.partnerId = e.partnerId),
          (this.distributorId = e.distributorId);
      }
      setDomData(e) {
        this.pageDomData = e;
      }
      setSystemData(e) {
        (this.requestOs = e.name), (this.requestOsVersion = e.version);
      }
      setBowserData(e) {
        (this.requestBrowser = e.name), (this.requestBrowserVersion = e.version);
      }
      setNavigationSequence(e) {
        this.navigationSequence = e;
      }
      setSourceTabId(e) {
        this.sourceTabId = e;
      }
      setNavigationMethod(e) {
        this.navigationMethod = e;
      }
      setData(e) {
        Object.assign(this, e);
      }
      getData() {
        return this;
      }
      clone() {
        const e = new r();
        return (
          Object.entries(this).forEach(([t, n]) => {
            this.hasOwnProperty(t) && (e[t] = this[t]);
          }),
          e
        );
      }
      calcEventType() {
        return -1 !== ["main_frame", "sub_frame"].indexOf(this.eventSubType) ? i.EventType.MAIN : i.EventType.RESOURCE;
      }
    }
    t.WebEvent = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.whiteListProtocols = void 0),
      (t.whiteListProtocols = ["chrome:", "chrome-search:", "chrome-devtools", "about:", "edge:"]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.blankPage = void 0),
      (t.blankPage = { CHROME_BROWSER: "chrome://newtab/", FIREFOX_BROWSER: "about:blank", EDGE_BROWSER: "edge://newtab/" });
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.OnBeforeSendHeaders = void 0);
    const s = n(0),
      c = n(13),
      u = n(14),
      l = n(11);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return c.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_SEND_HEADERS;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          const t = e.data.details,
            { requestHeaders: n } = t,
            i = +t.requestId,
            r = this.stateService.getWebEvent(i);
          r && r.setRequestHeaders(n);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(l.BgNavTypes.STATE_SERVICE)), r("design:paramtypes", [u.StateService])], d)),
      (t.OnBeforeSendHeaders = d);
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.OnSendHeaders = void 0);
    const a = n(0),
      s = n(13);
    let c = class {
      constructor() {}
      on() {
        return s.WebRequestServiceEvents.WEB_REQUEST_ON_SEND_HEADERS;
      }
      handle(e) {
        return o(this, void 0, void 0, function* () {});
      }
    };
    (c = i([a.injectable(), r("design:paramtypes", [])], c)), (t.OnSendHeaders = c);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.OnBeforeRedirect = void 0);
    const s = n(0),
      c = n(13),
      u = n(14),
      l = n(11);
    let d = class {
      constructor(e) {
        this.bgStateService = e;
      }
      on() {
        return c.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_REDIRECT;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          const t = e.data.details,
            { responseHeaders: n } = t,
            i = +t.requestId,
            r = this.bgStateService.getWebEvent(i);
          r && (r.setFromResponse(t), n && r.setResponseHeaders(n), this.bgStateService.finalize(r));
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(l.BgNavTypes.STATE_SERVICE)), r("design:paramtypes", [u.StateService])], d)),
      (t.OnBeforeRedirect = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.OnResponseStarted = void 0);
    const s = n(0),
      c = n(13),
      u = n(14),
      l = n(11);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return c.WebRequestServiceEvents.WEB_REQUEST_ON_RESPONSE_STARTED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          const t = e.data.details,
            { responseHeaders: n } = t,
            i = +t.requestId,
            r = this.stateService.getWebEvent(i);
          r && n && r.setResponseHeaders(n);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(l.BgNavTypes.STATE_SERVICE)), r("design:paramtypes", [u.StateService])], d)),
      (t.OnResponseStarted = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.OnCompleted = void 0);
    const s = n(0),
      c = n(13),
      u = n(14),
      l = n(11);
    let d = class {
      constructor(e) {
        this.bgStateService = e;
      }
      on() {
        return c.WebRequestServiceEvents.WEB_REQUEST_ON_COMPLETED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          const t = e.data.details,
            n = +t.requestId,
            i = this.bgStateService.getWebEvent(n);
          i && (i.setFromResponse(t), this.bgStateService.finalize(i));
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(l.BgNavTypes.STATE_SERVICE)), r("design:paramtypes", [u.StateService])], d)), (t.OnCompleted = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.OnErrorOccurred = void 0);
    const s = n(0),
      c = n(13),
      u = n(14),
      l = n(11);
    let d = class {
      constructor(e) {
        this.bgStateService = e;
      }
      on() {
        return c.WebRequestServiceEvents.WEB_REQUEST_ON_ERROR_OCCURRED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          const t = e.data.details,
            n = +t.requestId,
            i = this.bgStateService.getWebEvent(n);
          i && (i.setFromResponse(t), this.bgStateService.finalize(i));
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(l.BgNavTypes.STATE_SERVICE)), r("design:paramtypes", [u.StateService])], d)),
      (t.OnErrorOccurred = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.FgNavStarted = void 0);
    const s = n(0),
      c = n(8),
      u = n(10),
      l = n(95);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return l.FgNavEvents.NAVIGATION_STARTED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          yield this.stateService.onFgNavStarted(e.data);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(c.UrlsSafeCheckTypes.USC_STATE_SERVICE)), r("design:paramtypes", [u.StateService])], d)),
      (t.FgNavStarted = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.FgNavCommited = void 0);
    const s = n(0),
      c = n(8),
      u = n(10),
      l = n(95);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return l.FgNavEvents.NAVIGATION_COMMITED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          yield this.stateService.onFgNavCommited(e.data);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(c.UrlsSafeCheckTypes.USC_STATE_SERVICE)), r("design:paramtypes", [u.StateService])], d)),
      (t.FgNavCommited = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BgNavStarted = void 0);
    const s = n(0),
      c = n(8),
      u = n(10),
      l = n(98);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return l.BgNavEvents.NAVIGATION_STARTED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          yield this.stateService.onBgNavStarted(e.data);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(c.UrlsSafeCheckTypes.USC_STATE_SERVICE)), r("design:paramtypes", [u.StateService])], d)),
      (t.BgNavStarted = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BgNavCommited = void 0);
    const s = n(0),
      c = n(8),
      u = n(10),
      l = n(98);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return l.BgNavEvents.NAVIGATION_COMMITED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          yield this.stateService.onBgNavCommited(e.data);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(c.UrlsSafeCheckTypes.USC_STATE_SERVICE)), r("design:paramtypes", [u.StateService])], d)),
      (t.BgNavCommited = d);
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabStateModule = void 0);
    const r = n(2),
      o = n(38),
      a = n(15),
      s = n(16),
      c = n(158),
      u = n(159),
      l = n(160),
      d = n(23),
      h = n(161),
      f = n(96);
    class v extends r.MarioModule {
      name() {
        return "TabStateModule";
      }
      static use(e, t) {
        return e.registerModule(v, t);
      }
      register(e) {
        return i(this, void 0, void 0, function* () {
          this.mario().container().bind(s.TabStateTypes.PARAM_LOGGING).toConstantValue(e.logging),
            this.mario().registerService(s.TabStateTypes.LOGGER, f.TabStateLogger),
            this.mario().registerService(r.MARIO_TYPES.WEB_REQUEST_SERVICE, o.WebRequestService),
            this.mario().registerService(r.MARIO_TYPES.TAB_SERVICE, a.TabService),
            this.mario().registerService(s.TabStateTypes.TAB_STATE_SERVICE, d.TabStateService),
            this.mario().getService(r.MARIO_TYPES.TAB_SERVICE).listenOnCreated(),
            this.mario().getService(r.MARIO_TYPES.TAB_SERVICE).listenOnUpdated(),
            this.mario().getService(r.MARIO_TYPES.TAB_SERVICE).listenOnRemoved();
          const t = { urls: ["<all_urls>"] };
          this.mario().getService(r.MARIO_TYPES.WEB_REQUEST_SERVICE).listenOnBeforeRequest(t),
            this.mario().getService(r.MARIO_TYPES.WEB_REQUEST_SERVICE).listenOnBeforeRedirect(t, ["responseHeaders"]),
            this.mario().internalDispatcher().on(c.TabCreated),
            this.mario().internalDispatcher().on(l.TabUpdated),
            this.mario().internalDispatcher().on(u.TabRemoved),
            this.mario().externalDispatcher().on(h.GetNavigationMethodResponseListener);
        });
      }
    }
    t.TabStateModule = v;
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabCreated = void 0);
    const s = n(0),
      c = n(17),
      u = n(23),
      l = n(16);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return c.TabServiceEvents.ON_TAB_CREATED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          this.stateService.onTabCreated(e.data);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(l.TabStateTypes.TAB_STATE_SERVICE)), r("design:paramtypes", [u.TabStateService])], d)),
      (t.TabCreated = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabRemoved = void 0);
    const s = n(0),
      c = n(23),
      u = n(16),
      l = n(17);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return l.TabServiceEvents.ON_TAB_REMOVED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          this.stateService.onTabRemoved(e.data);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(u.TabStateTypes.TAB_STATE_SERVICE)), r("design:paramtypes", [c.TabStateService])], d)),
      (t.TabRemoved = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.TabUpdated = void 0);
    const s = n(0),
      c = n(2),
      u = n(16),
      l = n(17),
      d = n(23);
    let h = class {
      constructor(e, t) {
        (this.stateService = e), (this.dispatcher = t);
      }
      on() {
        return l.TabServiceEvents.ON_TAB_UPDATED;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          this.stateService.onTabUpdated(e.data);
        });
      }
    };
    (h = i(
      [
        s.injectable(),
        o(0, s.inject(u.TabStateTypes.TAB_STATE_SERVICE)),
        o(1, s.inject(c.MARIO_TYPES.EXTERNAL_DISPATCHER)),
        r("design:paramtypes", [d.TabStateService, Object])
      ],
      h
    )),
      (t.TabUpdated = h);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.GetNavigationMethodResponseListener = void 0);
    const s = n(0),
      c = n(16),
      u = n(23),
      l = n(25);
    let d = class {
      constructor(e) {
        this.stateService = e;
      }
      on() {
        return l.TabStateEvents.GET_NAVIGATION_METHOD_RESPONSE;
      }
      handle(e, t, n) {
        return a(this, void 0, void 0, function* () {
          t.tab && this.stateService.onGetNavigationMethodResponse(t.tab, e.data);
        });
      }
    };
    (d = i([s.injectable(), o(0, s.inject(c.TabStateTypes.TAB_STATE_SERVICE)), r("design:paramtypes", [u.TabStateService])], d)),
      (t.GetNavigationMethodResponseListener = d);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.EnableLib = void 0);
    const s = n(0),
      c = n(22),
      u = n(11),
      l = n(14),
      d = n(10),
      h = n(8);
    let f = class {
      constructor(e, t, n) {
        (this.bgStateService = e), (this.uscStateService = t), (this.mode = n);
      }
      on() {
        return c.UrlsSafeCheckEvents.ENABLE_LIB;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          yield this.uscStateService.enable(), this.mode === h.MODE.FULL_NAVIGATION && this.bgStateService.enable();
        });
      }
    };
    (f = i(
      [
        s.injectable(),
        o(0, s.inject(u.BgNavTypes.STATE_SERVICE)),
        o(1, s.inject(h.UrlsSafeCheckTypes.USC_STATE_SERVICE)),
        o(2, s.inject(h.UrlsSafeCheckTypes.USC_MODE)),
        r("design:paramtypes", [l.StateService, d.StateService, String])
      ],
      f
    )),
      (t.EnableLib = f);
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.DisableLib = void 0);
    const s = n(0),
      c = n(22),
      u = n(11),
      l = n(14),
      d = n(10),
      h = n(8);
    let f = class {
      constructor(e, t) {
        (this.bgStateService = e), (this.usfStateService = t);
      }
      on() {
        return c.UrlsSafeCheckEvents.DISABLE_LIB;
      }
      handle(e) {
        return a(this, void 0, void 0, function* () {
          this.bgStateService.disable(), yield this.usfStateService.disable();
        });
      }
    };
    (f = i(
      [
        s.injectable(),
        o(0, s.inject(u.BgNavTypes.STATE_SERVICE)),
        o(1, s.inject(h.UrlsSafeCheckTypes.USC_STATE_SERVICE)),
        r("design:paramtypes", [l.StateService, d.StateService])
      ],
      f
    )),
      (t.DisableLib = f);
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.StatusUpdateListener = void 0);
    const a = n(0),
      s = n(22),
      c = n(112);
    let u = class {
      constructor(e) {
        this.api = e;
      }
      on() {
        return s.UrlsSafeCheckEvents.SAFE_STATUS_UPDATED;
      }
      handle(e) {
        var t, n, i;
        const r = {
          status: null === (t = e.data) || void 0 === t ? void 0 : t.status,
          tabId: null === (n = e.data) || void 0 === n ? void 0 : n.tabId,
          url: null === (i = e.data) || void 0 === i ? void 0 : i.url
        };
        this.api._emit(r);
      }
    };
    (u = i([a.injectable(), o(0, a.inject(Symbol.for("SAFE_MEETING_API"))), r("design:paramtypes", [c.SafeMeeting])], u)),
      (t.StatusUpdateListener = u);
  },
  function (e, t, n) {
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
  },
  function (e, t, n) {
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.PanalyticsModule = void 0);
    const r = n(2),
      o = n(167),
      a = n(99);
    class s extends r.MarioModule {
      name() {
        return "PanalyticsModule";
      }
      register(e) {
        return i(this, void 0, void 0, function* () {
          this.mario().container().bind(a.PanalyticsIdentityTypes.PANALYTICS_HOST).toConstantValue(e.host),
            this.mario().container().bind(a.PanalyticsIdentityTypes.PANALYTICS_LOGGING).toConstantValue(e.logging),
            this.mario().container().bind(a.PanalyticsIdentityTypes.PANALYTICS_STORAGE_KEY).toConstantValue(e.storageKey),
            this.mario().registerService(a.PanalyticsIdentityTypes.PANALYTICS_SERVICE, o.PanalyticsService),
            yield this.mario().getService(a.PanalyticsIdentityTypes.PANALYTICS_SERVICE).resolveId();
        });
      }
    }
    t.PanalyticsModule = s;
  },
  function (e, t, n) {
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
        },
      a =
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
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.PanalyticsService = void 0);
    const s = n(0),
      c = n(99),
      u = n(168);
    let l = class {
      constructor(e, t, n) {
        (this.host = e), (this.logging = t), (this.storageKey = n);
        const i = { host: this.host, logging: this.logging };
        this.storageKey && (i.storageKey = this.storageKey), (this.utility = new u.default(i));
      }
      resolveId() {
        return a(this, void 0, void 0, function* () {
          this.identityId = yield this.utility.getKeyAsync();
        });
      }
      getId() {
        return this.identityId;
      }
    };
    (l = i(
      [
        s.injectable(),
        o(0, s.inject(c.PanalyticsIdentityTypes.PANALYTICS_HOST)),
        o(1, s.inject(c.PanalyticsIdentityTypes.PANALYTICS_LOGGING)),
        o(2, s.inject(c.PanalyticsIdentityTypes.PANALYTICS_STORAGE_KEY)),
        r("design:paramtypes", [String, Boolean, String])
      ],
      l
    )),
      (t.PanalyticsService = l);
  },
  function (e, t, n) {
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
    t.default = class {
      constructor(e = {}) {
        if (
          ((this.storageSyncKey = "panalyticsid"),
          (this.userKeyCacheHeader = "X-PANEL-USER-KEY"),
          (this.userKeySymbolsCount = 22),
          "string" != typeof e.host)
        )
          throw "Server host is undefined";
        e.storageKey && (this.storageSyncKey = e.storageKey),
          (this.host = e.host),
          (this.logging = !!e.logging),
          (this.cacheResourceUrl = this.host + "/api/identity/cache"),
          (this.cookieResourceUrl = this.host + "/api/identity/cookie");
      }
      generateKey() {
        let e = "";
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          n = t.length;
        for (let i = 0; i < this.userKeySymbolsCount; i++) e += t.charAt(Math.floor(Math.random() * n));
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
              t || (t = yield this.cacheGetter()), t || (t = yield this.cookieGetter()), t || (t = this.localStorageGetter()), e(t);
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
        this.log("localStorageGetter: try to get " + this.storageSyncKey + " from localStorage.");
        const e = localStorage.getItem(this.storageSyncKey);
        return (
          e
            ? this.log("localStorageGetter: " + this.storageSyncKey + " has been found in localStorage. Value: " + e)
            : this.log("localStorageGetter: " + this.storageSyncKey + " has not been found in localStorage."),
          e
        );
      }
      localStorageSetter(e) {
        this.log("localStorageSetter: " + this.storageSyncKey + " are going to be stored in localStorage."),
          localStorage.setItem(this.storageSyncKey, e);
      }
      cacheGetter() {
        return i(this, void 0, void 0, function* () {
          this.log("CacheGetter: try to get " + this.storageSyncKey + " from cache.");
          const e = this;
          return new Promise((t) => {
            const n = new XMLHttpRequest();
            n.open("GET", this.cacheResourceUrl),
              (n.timeout = 1e3),
              (n.ontimeout = function () {
                e.log("CacheGetter: Caching request is timed out."), t();
              }),
              (n.onload = function () {
                if (200 === n.status)
                  try {
                    const i = JSON.parse(n.response).userKey;
                    i ? (e.log("CacheGetter: " + e.storageSyncKey + " has been found in cache. Value: " + i), t(i)) : t();
                  } catch (n) {
                    e.log("CacheGetter: Error occurred while retrieving " + e.storageSyncKey + " from cache."), t();
                  }
                else e.log("CacheGetter: Caching request has been failed."), t();
              }),
              (n.onerror = function () {
                t();
              }),
              n.send();
          });
        });
      }
      cacheSetter(e) {
        this.log("CacheSetter: " + this.storageSyncKey + " are going to be stored in cache.");
        const t = this;
        return new Promise((n) => {
          const i = new XMLHttpRequest();
          i.open("GET", this.cacheResourceUrl),
            i.setRequestHeader(this.userKeyCacheHeader, e),
            i.setRequestHeader("Cache-Control", "no-cache"),
            (i.responseType = "json"),
            i.send(),
            (i.onload = function () {
              200 === i.status
                ? (t.log("CacheSetter: Caching request to server has been succeeded."), n(e))
                : (t.log("CacheSetter: Caching request has been failed."), n());
            }),
            (i.onerror = function () {
              n();
            });
        });
      }
      cookieGetter() {
        return i(this, void 0, void 0, function* () {
          this.log("CookieGetter: try to get " + this.storageSyncKey + " from cookie.");
          const e = this;
          return new Promise((t) => {
            const n = new XMLHttpRequest();
            (n.withCredentials = !0),
              n.open("GET", this.cookieResourceUrl),
              (n.timeout = 5e3),
              (n.ontimeout = function () {
                e.log("CookieGetter: Request is timed out."), t();
              }),
              (n.onload = function () {
                let i;
                if (200 === n.status)
                  try {
                    (i = JSON.parse(n.response).userKey),
                      i
                        ? (e.log("CookieGetter: " + e.storageSyncKey + " has been found in cookie. Value:" + i), t(i))
                        : (e.log("CookieGetter: " + e.storageSyncKey + " has not been found in cookie. "), t());
                  } catch (n) {
                    e.log("CookieGetter: Error occurred while retrieving " + e.storageSyncKey + " from cookie."), t();
                  }
                else e.log("CookieGetter: Cookie request has been failed."), t();
              }),
              (n.onerror = function () {
                t();
              }),
              n.send();
          });
        });
      }
      cookieSetter(e) {
        this.log("CookieSetter: " + this.storageSyncKey + " are going to be stored in cookie.");
        const t = this;
        return new Promise((n) => {
          const i = new XMLHttpRequest();
          (i.withCredentials = !0),
            i.open("POST", this.cookieResourceUrl + "?userKey=" + e),
            i.send(),
            (i.onload = function () {
              200 === i.status
                ? (t.log("CookieSetter: cookie request has been succeeded."), n(e))
                : (t.log("CookieSetter: cookie request has been failed."), n());
            }),
            (i.onerror = function () {
              n();
            });
        });
      }
      cookieClear() {
        return i(this, void 0, void 0, function* () {
          this.log("CookieClearer: " + this.storageSyncKey + " are going to be deleted.");
          const e = this;
          return new Promise((t) => {
            const n = new XMLHttpRequest();
            (n.withCredentials = !0),
              n.open("DELETE", this.cookieResourceUrl),
              n.send(),
              (n.onload = function () {
                200 === n.status
                  ? (e.log("CookieClearer: cookie request has been succeeded."), t())
                  : (e.log("CookieClearer: cookie request has been failed."), t());
              }),
              (n.onerror = function () {
                t();
              });
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
  }
]);
