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
    n((n.s = 169));
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
    var s = n(61);
    Object.defineProperty(t, "AsyncContainerModule", {
      enumerable: !0,
      get: function () {
        return s.AsyncContainerModule;
      }
    }),
      Object.defineProperty(t, "ContainerModule", {
        enumerable: !0,
        get: function () {
          return s.ContainerModule;
        }
      });
    var a = n(62);
    Object.defineProperty(t, "injectable", {
      enumerable: !0,
      get: function () {
        return a.injectable;
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
    var d = n(28);
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
    var h = n(65);
    Object.defineProperty(t, "optional", {
      enumerable: !0,
      get: function () {
        return h.optional;
      }
    });
    var l = n(66);
    Object.defineProperty(t, "unmanaged", {
      enumerable: !0,
      get: function () {
        return l.unmanaged;
      }
    });
    var f = n(67);
    Object.defineProperty(t, "multiInject", {
      enumerable: !0,
      get: function () {
        return f.multiInject;
      }
    });
    var p = n(68);
    Object.defineProperty(t, "targetName", {
      enumerable: !0,
      get: function () {
        return p.targetName;
      }
    });
    var _ = n(69);
    Object.defineProperty(t, "postConstruct", {
      enumerable: !0,
      get: function () {
        return _.postConstruct;
      }
    });
    var E = n(26);
    Object.defineProperty(t, "MetadataReader", {
      enumerable: !0,
      get: function () {
        return E.MetadataReader;
      }
    });
    var g = n(9);
    Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function () {
        return g.id;
      }
    });
    var v = n(7);
    Object.defineProperty(t, "decorate", {
      enumerable: !0,
      get: function () {
        return v.decorate;
      }
    });
    var y = n(31);
    Object.defineProperty(t, "traverseAncerstors", {
      enumerable: !0,
      get: function () {
        return y.traverseAncerstors;
      }
    }),
      Object.defineProperty(t, "taggedConstraint", {
        enumerable: !0,
        get: function () {
          return y.taggedConstraint;
        }
      }),
      Object.defineProperty(t, "namedConstraint", {
        enumerable: !0,
        get: function () {
          return y.namedConstraint;
        }
      }),
      Object.defineProperty(t, "typeConstraint", {
        enumerable: !0,
        get: function () {
          return y.typeConstraint;
        }
      });
    var O = n(12);
    Object.defineProperty(t, "getServiceIdentifierAsString", {
      enumerable: !0,
      get: function () {
        return O.getServiceIdentifierAsString;
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
    var s = n(5);
    t.MARIO_TYPES = s.MARIO_TYPES;
    var a = n(34);
    t.ExternalDispatcher = a.ExternalDispatcher;
    var c = n(83);
    t.CacheService = c.CacheService;
    var u = n(85);
    t.ContentDispatcherService = u.ContentDispatcherService;
    var d = n(32);
    t.InternalDispatcher = d.InternalDispatcher;
    var h = n(33);
    t.LoggerService = h.LoggerService;
    var l = n(15);
    t.TabService = l.TabService;
    var f = n(37);
    t.NavigationService = f.NavigationService;
    var p = n(38);
    t.WebRequestService = p.WebRequestService;
    var _ = n(87);
    t.StorageService = _.StorageService;
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
      var s = {},
        a = "number" == typeof o,
        c = void 0 !== o && a ? o.toString() : n;
      if (a && void 0 !== n) throw new Error(i.INVALID_DECORATOR_OPERATION);
      Reflect.hasOwnMetadata(e, t) && (s = Reflect.getMetadata(e, t));
      var u = s[c];
      if (Array.isArray(u))
        for (var d = 0, h = u; d < h.length; d++) {
          var l = h[d];
          if (l.key === r.key) throw new Error(i.DUPLICATED_METADATA + " " + l.key.toString());
        }
      else u = [];
      u.push(r), (s[c] = u), Reflect.defineMetadata(e, s, t);
    }
    function s(e, t) {
      Reflect.decorate(e, t);
    }
    function a(e, t) {
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
        "number" == typeof n ? s([a(n, e)], t) : "string" == typeof n ? Reflect.decorate([e], t, n) : s([e], t);
      });
  },
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.id = void 0);
    var i = 0;
    t.id = function () {
      return i++;
    };
  },
  ,
  ,
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
  ,
  function (e, t, n) {
    "use strict";
    var i =
        (this && this.__decorate) ||
        function (e, t, n, i) {
          var r,
            o = arguments.length,
            s = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
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
      s =
        (this && this.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function s(e) {
              try {
                c(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
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
                      })).then(s, a);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const a = n(0),
      c = n(2),
      u = n(5),
      d = n(17);
    let h = class {
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
            const t = new c.MarioEvent(d.TabServiceEvents.ON_TAB_CREATED, { tab: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnUpdated() {
        this.isListenOnUpdated ||
          ((this.isListenOnUpdated = !0),
          chrome.tabs.onUpdated.addListener((e, t, n) => {
            const i = new c.MarioEvent(d.TabServiceEvents.ON_TAB_UPDATED, { tabId: e, changeInfo: t, tab: n });
            this.dispatcherService.emit(i).then();
          }));
      }
      listenOnMoved() {
        this.isListenOnMoved ||
          ((this.isListenOnMoved = !0),
          chrome.tabs.onMoved.addListener((e, t) => {
            const n = new c.MarioEvent(d.TabServiceEvents.ON_TAB_MOVED, { tabId: e, moveInfo: t });
            this.dispatcherService.emit(n).then();
          }));
      }
      listenOnActivated() {
        this.isListenOnActivated ||
          ((this.isListenOnActivated = !0),
          chrome.tabs.onActivated.addListener((e) => {
            const t = new c.MarioEvent(d.TabServiceEvents.ON_TAB_ACTIVATED, { activeInfo: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnHighlighted() {
        this.isListenOnHighlighted ||
          ((this.isListenOnHighlighted = !0),
          chrome.tabs.onHighlighted.addListener((e) => {
            const t = new c.MarioEvent(d.TabServiceEvents.ON_TAB_HIGHLIGHTED, { highlightInfo: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnDetached() {
        this.isListenOnDetached ||
          ((this.isListenOnDetached = !0),
          chrome.tabs.onDetached.addListener((e, t) => {
            const n = new c.MarioEvent(d.TabServiceEvents.ON_TAB_DETACHED, { tabId: e, detachInfo: t });
            this.dispatcherService.emit(n).then();
          }));
      }
      listenOnAttached() {
        this.isListenOnAttached ||
          ((this.isListenOnAttached = !0),
          chrome.tabs.onAttached.addListener((e, t) => {
            const n = new c.MarioEvent(d.TabServiceEvents.ON_TAB_ATTACHED, { tabId: e, attachInfo: t });
            this.dispatcherService.emit(n).then();
          }));
      }
      listenOnRemoved() {
        this.isListenOnRemoved ||
          ((this.isListenOnRemoved = !0),
          chrome.tabs.onRemoved.addListener((e, t) => {
            const n = new c.MarioEvent(d.TabServiceEvents.ON_TAB_REMOVED, { tabId: e, removeInfo: t });
            this.dispatcherService.emit(n).then();
          }));
      }
      listenOnReplaced() {
        this.isListenOnReplaced ||
          ((this.isListenOnReplaced = !0),
          chrome.tabs.onReplaced.addListener((e, t) => {
            const n = new c.MarioEvent(d.TabServiceEvents.ON_TAB_REPLACED, { addedTabId: e, removedTabId: t });
            this.dispatcherService.emit(n).then();
          }));
      }
      listenOnZoomChange() {
        this.isListenOnZoomChange ||
          ((this.isListenOnZoomChange = !0),
          chrome.tabs.onZoomChange.addListener((e) => {
            const t = new c.MarioEvent(d.TabServiceEvents.ON_TAB_ZOOM_CHANGE, { zoomChangeInfo: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      sendMessage(e, t) {
        chrome.tabs.sendMessage(e, t, (e) => {
          chrome.runtime.lastError;
        });
      }
      query(e) {
        return s(this, void 0, void 0, function* () {
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
        return s(this, void 0, void 0, function* () {
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
        return s(this, void 0, void 0, function* () {
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
        return s(this, void 0, void 0, function* () {
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
        return s(this, void 0, void 0, function* () {
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
        return s(this, void 0, void 0, function* () {
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
        return s(this, void 0, void 0, function* () {
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
        return s(this, void 0, void 0, function* () {
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
        return s(this, void 0, void 0, function* () {
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
    (h = i([a.injectable(), o(0, a.inject(u.MARIO_TYPES.INTERNAL_DISPATCHER)), r("design:paramtypes", [Object])], h)), (t.TabService = h);
  },
  ,
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
  ,
  function (e, t) {
    var n,
      i,
      r = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
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
        i = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        i = s;
      }
    })();
    var c,
      u = [],
      d = !1,
      h = -1;
    function l() {
      d && c && ((d = !1), c.length ? (u = c.concat(u)) : (h = -1), u.length && f());
    }
    function f() {
      if (!d) {
        var e = a(l);
        d = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++h < t; ) c && c[h].run();
          (h = -1), (t = u.length);
        }
        (c = null),
          (d = !1),
          (function (e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === s || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(e);
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
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function _() {}
    (r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new p(e, t)), 1 !== u.length || d || a(f);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = _),
      (r.addListener = _),
      (r.once = _),
      (r.off = _),
      (r.removeListener = _),
      (r.removeAllListeners = _),
      (r.emit = _),
      (r.prependListener = _),
      (r.prependOnceListener = _),
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
  ,
  ,
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
      s = n(7),
      a = (function () {
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
    (t.LazyServiceIdentifer = a),
      (t.inject = function (e) {
        return function (t, n, a) {
          if (void 0 === e) throw new Error(i.UNDEFINED_INJECT_ANNOTATION(t.name));
          var c = new o.Metadata(r.INJECT_TAG, e);
          "number" == typeof a ? s.tagParameter(t, n, a, c) : s.tagProperty(t, n, c);
        };
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Target = void 0);
    var i = n(1),
      r = n(9),
      o = n(4),
      s = n(52),
      a = (function () {
        function e(e, t, n, a) {
          (this.id = r.id()),
            (this.type = e),
            (this.serviceIdentifier = n),
            (this.name = new s.QueryableString(t || "")),
            (this.metadata = new Array());
          var c = null;
          "string" == typeof a ? (c = new o.Metadata(i.NAMED_TAG, a)) : a instanceof o.Metadata && (c = a),
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
    t.Target = a;
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
    var s = function (e) {
      return function (t) {
        var n = function (n) {
          return null !== n && null !== n.target && n.target.matchesTag(e)(t);
        };
        return (n.metaData = new r.Metadata(e, t)), n;
      };
    };
    t.taggedConstraint = s;
    var a = s(i.NAMED_TAG);
    t.namedConstraint = a;
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
            s = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
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
      s =
        (this && this.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function s(e) {
              try {
                c(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
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
                      })).then(s, a);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const a = n(0),
      c = n(5),
      u = n(71);
    let d = class {
      constructor(e, t) {
        (this.container = e),
          (this.loggerService = t),
          (this.counter = 0),
          (this.listeners = {}),
          (this.listenersIndex = {}),
          (this.onBeforeEmitListeners = []);
      }
      emit(e) {
        return s(this, void 0, void 0, function* () {
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
    (d = i(
      [
        a.injectable(),
        o(0, a.inject(c.MARIO_TYPES.CONTAINER)),
        o(1, a.inject(c.MARIO_TYPES.LOGGER_SERVICE)),
        r("design:paramtypes", [Object, Object])
      ],
      d
    )),
      (t.InternalDispatcher = d);
  },
  function (e, t, n) {
    "use strict";
    var i,
      r =
        (this && this.__decorate) ||
        function (e, t, n, i) {
          var r,
            o = arguments.length,
            s = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const o = n(0),
      s = n(73);
    let a = (i = class {
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
        void 0 !== t && (r = s(t, null, 2));
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
        const r = s(t.data, null, 2);
        this.enabled && console.log(r), this.handleOnEventListeners(e, t, this.prepareOutput(n[0], r));
      }
      warn(e, t) {
        const n = this.time();
        (n[0] += "%c[WARN] %c" + e),
          n.push(this.color(i.RED_COLOR) + this.fontWeight(600)),
          n.push(this.color(i.BLACK_COLOR)),
          this.enabled && console.log.apply(console, n);
        let r = "";
        this.enabled && void 0 !== t && (console.log(t), (r = s(t, null, 2))),
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
    (a.BLACK_COLOR = "#000"),
      (a.RED_COLOR = "#f40f3f"),
      (a.LIGHT_GREEN_COLOR = "#1e9f3e"),
      (a.LIGHT_BLUE_COLOR = "#4285f4"),
      (a = i = r([o.injectable()], a)),
      (t.LoggerService = a);
  },
  function (e, t, n) {
    "use strict";
    var i =
        (this && this.__decorate) ||
        function (e, t, n, i) {
          var r,
            o = arguments.length,
            s = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
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
    const s = n(0),
      a = n(5),
      c = n(77),
      u = n(78);
    let d = class {
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
          const s = o[e],
            a = s.handle.apply(s, [t, n, i]);
          r.push(a);
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
    (d = i(
      [
        s.injectable(),
        o(0, s.inject(a.MARIO_TYPES.CONTAINER)),
        o(1, s.inject(a.MARIO_TYPES.LOGGER_SERVICE)),
        o(2, s.inject(a.MARIO_TYPES.TAB_SERVICE)),
        r("design:paramtypes", [Object, Object, Object])
      ],
      d
    )),
      (t.ExternalDispatcher = d);
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
            s = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
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
      s =
        (this && this.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function s(e) {
              try {
                c(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
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
                      })).then(s, a);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const a = n(0),
      c = n(2),
      u = n(5),
      d = n(86);
    let h = class {
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
            const t = new c.MarioEvent(d.NavigationServiceEvents.NAVIGATION_ON_BEFORE_NAVIGATE, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnCommitted() {
        this.isListenOnCommitted ||
          ((this.isListenOnCommitted = !0),
          chrome.webNavigation.onCommitted.addListener((e) => {
            const t = new c.MarioEvent(d.NavigationServiceEvents.NAVIGATION_ON_COMMITTED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnDOMContentLoaded() {
        this.isListenOnDOMContentLoaded ||
          ((this.isListenOnDOMContentLoaded = !0),
          chrome.webNavigation.onDOMContentLoaded.addListener((e) => {
            const t = new c.MarioEvent(d.NavigationServiceEvents.NAVIGATION_ON_DOM_CONTENT_LOADED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnCompleted() {
        this.isListenOnCompleted ||
          ((this.isListenOnCompleted = !0),
          chrome.webNavigation.onCompleted.addListener((e) => {
            const t = new c.MarioEvent(d.NavigationServiceEvents.NAVIGATION_ON_COMPLETED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnErrorOccurred() {
        this.isListenOnErrorOccurred ||
          ((this.isListenOnErrorOccurred = !0),
          chrome.webNavigation.onErrorOccurred.addListener((e) => {
            const t = new c.MarioEvent(d.NavigationServiceEvents.NAVIGATION_ON_ERROR_OCCURRED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnCreatedNavigationTarget() {
        this.isListenOnCreatedNavigationTarget ||
          ((this.isListenOnCreatedNavigationTarget = !0),
          chrome.webNavigation.onCreatedNavigationTarget.addListener((e) => {
            const t = new c.MarioEvent(d.NavigationServiceEvents.NAVIGATION_ON_CREATED_NAVIGATION_TARGET, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnReferenceFragmentUpdated() {
        this.isListenOnReferenceFragmentUpdated ||
          ((this.isListenOnReferenceFragmentUpdated = !0),
          chrome.webNavigation.onReferenceFragmentUpdated.addListener((e) => {
            const t = new c.MarioEvent(d.NavigationServiceEvents.NAVIGATION_ON_REFERENCE_FRAGMNENT_UPDATED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnTabReplaced() {
        this.isListenOnTabReplaced ||
          ((this.isListenOnTabReplaced = !0),
          chrome.webNavigation.onTabReplaced.addListener((e) => {
            const t = new c.MarioEvent(d.NavigationServiceEvents.NAVIGATION_ON_TAB_REPLACED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      listenOnHistoryStateUpdated() {
        this.isListenOnHistoryStateUpdated ||
          ((this.isListenOnHistoryStateUpdated = !0),
          chrome.webNavigation.onHistoryStateUpdated.addListener((e) => {
            const t = new c.MarioEvent(d.NavigationServiceEvents.NAVIGATION_ON_HISTORY_STATE_UPDATED, { details: e });
            this.dispatcherService.emit(t).then();
          }));
      }
      getFrame(e) {
        return s(this, void 0, void 0, function* () {
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
        return s(this, void 0, void 0, function* () {
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
    (h = i([a.injectable(), o(0, a.inject(u.MARIO_TYPES.INTERNAL_DISPATCHER)), r("design:paramtypes", [Object])], h)),
      (t.NavigationService = h);
  },
  function (e, t, n) {
    "use strict";
    var i =
        (this && this.__decorate) ||
        function (e, t, n, i) {
          var r,
            o = arguments.length,
            s = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
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
      s =
        (this && this.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function s(e) {
              try {
                c(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
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
                      })).then(s, a);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const a = n(0),
      c = n(2),
      u = n(5),
      d = n(13);
    let h = class {
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
              const t = new c.MarioEvent(d.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_REQUEST, { details: e });
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
              const t = new c.MarioEvent(d.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_SEND_HEADERS, { details: e });
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
              const t = new c.MarioEvent(d.WebRequestServiceEvents.WEB_REQUEST_ON_SEND_HEADERS, { details: e });
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
              const t = new c.MarioEvent(d.WebRequestServiceEvents.WEB_REQUEST_ON_HEADERS_RECEIVED, { details: e });
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
              const n = new c.MarioEvent(d.WebRequestServiceEvents.WEB_REQUEST_ON_AUTH_REQUIRED, { details: e, callback: t });
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
              const t = new c.MarioEvent(d.WebRequestServiceEvents.WEB_REQUEST_ON_RESPONSE_STARTED, { details: e });
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
              const t = new c.MarioEvent(d.WebRequestServiceEvents.WEB_REQUEST_ON_BEFORE_REDIRECT, { details: e });
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
              const t = new c.MarioEvent(d.WebRequestServiceEvents.WEB_REQUEST_ON_COMPLETED, { details: e });
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
            const t = new c.MarioEvent(d.WebRequestServiceEvents.WEB_REQUEST_ON_ERROR_OCCURRED, { details: e });
            this.dispatcherService.emit(t).then();
          }, e));
      }
      listenOnActionIgnored(e, t) {
        this.isListenOnActionIgnored ||
          ((this.isListenOnActionIgnored = !0),
          chrome.webRequest.onActionIgnored.addListener(
            (e) => {
              const t = new c.MarioEvent(d.WebRequestServiceEvents.WEB_REQUEST_ON_ACTION_IGNORED, { details: e });
              this.dispatcherService.emit(t).then();
            },
            e,
            t
          ));
      }
      handlerBehaviorChanged() {
        return s(this, void 0, void 0, function* () {
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
    (h = i([a.injectable(), o(0, a.inject(u.MARIO_TYPES.INTERNAL_DISPATCHER)), r("design:paramtypes", [Object])], h)),
      (t.WebRequestService = h);
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
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i =
        (this && this.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function s(e) {
              try {
                c(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
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
                      })).then(s, a);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(44);
      const r = n(0),
        o = n(32),
        s = n(33),
        a = n(15),
        c = n(74),
        u = n(76),
        d = n(5),
        h = n(34),
        l = n(80);
      t.Mario = class {
        constructor(t, n = {}) {
          (this.isInitialized = !1),
            (this._container = n.container ? n.container : new r.Container()),
            this._container.bind(d.MARIO_TYPES.BROWSER).toConstantValue(t),
            this._container.bind(d.MARIO_TYPES.CONTAINER).toConstantValue(this._container);
          const i = n.logger ? n.logger : s.LoggerService,
            c = n.internalDispatcher ? n.internalDispatcher : o.InternalDispatcher,
            f = n.externalDispatcher ? n.externalDispatcher : h.ExternalDispatcher,
            p = n.tab ? n.tab : a.TabService;
          this.registerService(d.MARIO_TYPES.LOGGER_SERVICE, i),
            n.loggerEnabled ? this.logger().enable() : this.logger().disable(),
            this.logger().log(`Core: this build is for "${t.toString()}"`),
            this.registerService(d.MARIO_TYPES.EXTENSION_SERVICE, u.Extension),
            this.extension(),
            this.registerService(d.MARIO_TYPES.INTERNAL_DISPATCHER, c),
            this.registerService(d.MARIO_TYPES.EXTERNAL_DISPATCHER, f),
            this.registerService(d.MARIO_TYPES.PORT_DISPATCHER, l.PortDispatcher),
            this.registerService(d.MARIO_TYPES.TAB_SERVICE, p),
            this.getService(d.MARIO_TYPES.PORT_DISPATCHER);
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
          return this.getService(d.MARIO_TYPES.INTERNAL_DISPATCHER);
        }
        externalDispatcher() {
          return this.getService(d.MARIO_TYPES.EXTERNAL_DISPATCHER);
        }
        portDispatcher() {
          return this.getService(d.MARIO_TYPES.PORT_DISPATCHER);
        }
        logger() {
          return this.getService(d.MARIO_TYPES.LOGGER_SERVICE);
        }
        container() {
          return this._container;
        }
        tabService() {
          return this.getService(d.MARIO_TYPES.TAB_SERVICE);
        }
        extension() {
          return this.getService(d.MARIO_TYPES.EXTENSION_SERVICE);
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
            o = s(n);
          function s(e, t) {
            return function (n, i) {
              "function" != typeof e[n] && Object.defineProperty(e, n, { configurable: !0, writable: !0, value: i }), t && t(n, i);
            };
          }
          void 0 === r.Reflect ? (r.Reflect = n) : (o = s(r.Reflect, o)),
            (function (t) {
              var n = Object.prototype.hasOwnProperty,
                i = "function" == typeof Symbol,
                r = i && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
                o = i && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
                s = "function" == typeof Object.create,
                a = { __proto__: [] } instanceof Array,
                c = !s && !a,
                u = {
                  create: s
                    ? function () {
                        return P(Object.create(null));
                      }
                    : a
                    ? function () {
                        return P({ __proto__: null });
                      }
                    : function () {
                        return P({});
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
                d = Object.getPrototypeOf(Function),
                h = "object" == typeof e && e.env && "true" === e.env.REFLECT_METADATA_USE_MAP_POLYFILL,
                l =
                  h || "function" != typeof Map || "function" != typeof Map.prototype.entries
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
                              return new n(this._keys, this._values, s);
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
                        function s(e, t) {
                          return [e, t];
                        }
                      })()
                    : Map,
                f =
                  h || "function" != typeof Set || "function" != typeof Set.prototype.entries
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
                          (e.prototype[o] = function () {
                            return this.keys();
                          }),
                          e
                        );
                      })()
                    : Set,
                p = new (
                  h || "function" != typeof WeakMap
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
                            t = "@@WeakMap@@" + s();
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
                        function s() {
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
              function _(e, t, n) {
                var i = p.get(e);
                if (T(i)) {
                  if (!n) return;
                  (i = new l()), p.set(e, i);
                }
                var r = i.get(t);
                if (T(r)) {
                  if (!n) return;
                  (r = new l()), i.set(t, r);
                }
                return r;
              }
              function E(e, t, n) {
                var i = _(t, n, !1);
                return !T(i) && !!i.has(e);
              }
              function g(e, t, n) {
                var i = _(t, n, !1);
                if (!T(i)) return i.get(e);
              }
              function v(e, t, n, i) {
                _(n, i, !0).set(e, t);
              }
              function y(e, t) {
                var n = [],
                  i = _(e, t, !1);
                if (T(i)) return n;
                for (
                  var r = (function (e) {
                      var t = C(e, o);
                      if (!b(t)) throw new TypeError();
                      var n = t.call(e);
                      if (!S(n)) throw new TypeError();
                      return n;
                    })(i.keys()),
                    s = 0;
                  ;

                ) {
                  var a = w(r);
                  if (!a) return (n.length = s), n;
                  var c = a.value;
                  try {
                    n[s] = c;
                  } catch (e) {
                    try {
                      M(r);
                    } finally {
                      throw e;
                    }
                  }
                  s++;
                }
              }
              function O(e) {
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
              function A(e) {
                return null === e;
              }
              function S(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e;
              }
              function m(e, t) {
                switch (O(e)) {
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
                  if (S(o)) throw new TypeError();
                  return o;
                }
                return (function (e, t) {
                  if ("string" === t) {
                    var n = e.toString;
                    if (b(n)) if (!S((r = n.call(e)))) return r;
                    if (b((i = e.valueOf))) if (!S((r = i.call(e)))) return r;
                  } else {
                    var i;
                    if (b((i = e.valueOf))) if (!S((r = i.call(e)))) return r;
                    var r,
                      o = e.toString;
                    if (b(o)) if (!S((r = o.call(e)))) return r;
                  }
                  throw new TypeError();
                })(e, "default" === n ? "number" : n);
              }
              function N(e) {
                var t = m(e, 3);
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
              function b(e) {
                return "function" == typeof e;
              }
              function I(e) {
                return "function" == typeof e;
              }
              function C(e, t) {
                var n = e[t];
                if (null != n) {
                  if (!b(n)) throw new TypeError();
                  return n;
                }
              }
              function w(e) {
                var t = e.next();
                return !t.done && t;
              }
              function M(e) {
                var t = e.return;
                t && t.call(e);
              }
              function L(e) {
                var t = Object.getPrototypeOf(e);
                if ("function" != typeof e || e === d) return t;
                if (t !== d) return t;
                var n = e.prototype,
                  i = n && Object.getPrototypeOf(n);
                if (null == i || i === Object.prototype) return t;
                var r = i.constructor;
                return "function" != typeof r || r === e ? t : r;
              }
              function P(e) {
                return (e.__ = void 0), delete e.__, e;
              }
              t("decorate", function (e, t, n, i) {
                if (T(n)) {
                  if (!R(e)) throw new TypeError();
                  if (!I(t)) throw new TypeError();
                  return (function (e, t) {
                    for (var n = e.length - 1; n >= 0; --n) {
                      var i = (0, e[n])(t);
                      if (!T(i) && !A(i)) {
                        if (!I(i)) throw new TypeError();
                        t = i;
                      }
                    }
                    return t;
                  })(e, t);
                }
                if (!R(e)) throw new TypeError();
                if (!S(t)) throw new TypeError();
                if (!S(i) && !T(i) && !A(i)) throw new TypeError();
                return (
                  A(i) && (i = void 0),
                  (function (e, t, n, i) {
                    for (var r = e.length - 1; r >= 0; --r) {
                      var o = (0, e[r])(t, n, i);
                      if (!T(o) && !A(o)) {
                        if (!S(o)) throw new TypeError();
                        i = o;
                      }
                    }
                    return i;
                  })(e, t, (n = N(n)), i)
                );
              }),
                t("metadata", function (e, t) {
                  return function (n, i) {
                    if (!S(n)) throw new TypeError();
                    if (
                      !T(i) &&
                      !(function (e) {
                        switch (O(e)) {
                          case 3:
                          case 4:
                            return !0;
                          default:
                            return !1;
                        }
                      })(i)
                    )
                      throw new TypeError();
                    v(e, t, n, i);
                  };
                }),
                t("defineMetadata", function (e, t, n, i) {
                  if (!S(n)) throw new TypeError();
                  return T(i) || (i = N(i)), v(e, t, n, i);
                }),
                t("hasMetadata", function (e, t, n) {
                  if (!S(t)) throw new TypeError();
                  return (
                    T(n) || (n = N(n)),
                    (function e(t, n, i) {
                      if (E(t, n, i)) return !0;
                      var r = L(n);
                      return !A(r) && e(t, r, i);
                    })(e, t, n)
                  );
                }),
                t("hasOwnMetadata", function (e, t, n) {
                  if (!S(t)) throw new TypeError();
                  return T(n) || (n = N(n)), E(e, t, n);
                }),
                t("getMetadata", function (e, t, n) {
                  if (!S(t)) throw new TypeError();
                  return (
                    T(n) || (n = N(n)),
                    (function e(t, n, i) {
                      if (E(t, n, i)) return g(t, n, i);
                      var r = L(n);
                      return A(r) ? void 0 : e(t, r, i);
                    })(e, t, n)
                  );
                }),
                t("getOwnMetadata", function (e, t, n) {
                  if (!S(t)) throw new TypeError();
                  return T(n) || (n = N(n)), g(e, t, n);
                }),
                t("getMetadataKeys", function (e, t) {
                  if (!S(e)) throw new TypeError();
                  return (
                    T(t) || (t = N(t)),
                    (function e(t, n) {
                      var i = y(t, n),
                        r = L(t);
                      if (null === r) return i;
                      var o = e(r, n);
                      if (o.length <= 0) return i;
                      if (i.length <= 0) return o;
                      for (var s = new f(), a = [], c = 0, u = i; c < u.length; c++) {
                        var d = u[c];
                        s.has(d) || (s.add(d), a.push(d));
                      }
                      for (var h = 0, l = o; h < l.length; h++) {
                        d = l[h];
                        s.has(d) || (s.add(d), a.push(d));
                      }
                      return a;
                    })(e, t)
                  );
                }),
                t("getOwnMetadataKeys", function (e, t) {
                  if (!S(e)) throw new TypeError();
                  return T(t) || (t = N(t)), y(e, t);
                }),
                t("deleteMetadata", function (e, t, n) {
                  if (!S(t)) throw new TypeError();
                  T(n) || (n = N(n));
                  var i = _(t, n, !1);
                  if (T(i)) return !1;
                  if (!i.delete(e)) return !1;
                  if (i.size > 0) return !0;
                  var r = p.get(t);
                  return r.delete(n), r.size > 0 || p.delete(t), !0;
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
            function s(e) {
              try {
                c(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
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
                      })).then(s, a);
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
            s = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
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
          function a(o) {
            return function (a) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
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
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (i = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (!((r = s.trys), (r = r.length > 0 && r[r.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                          s = 0;
                          continue;
                        }
                        if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < r[1]) {
                          (s.label = r[1]), (r = o);
                          break;
                        }
                        if (r && s.label < r[2]) {
                          (s.label = r[2]), s.ops.push(o);
                          break;
                        }
                        r[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (e) {
                    (o = [6, e]), (i = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
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
    var s = n(46),
      a = n(3),
      c = n(6),
      u = n(1),
      d = n(26),
      h = n(47),
      l = n(54),
      f = n(56),
      p = n(9),
      _ = n(12),
      E = n(59),
      g = n(60),
      v = (function () {
        function e(e) {
          this._appliedMiddleware = [];
          var t = e || {};
          if ("object" != typeof t) throw new Error("" + a.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
          if (void 0 === t.defaultScope) t.defaultScope = c.BindingScopeEnum.Transient;
          else if (
            t.defaultScope !== c.BindingScopeEnum.Singleton &&
            t.defaultScope !== c.BindingScopeEnum.Transient &&
            t.defaultScope !== c.BindingScopeEnum.Request
          )
            throw new Error("" + a.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
          if (void 0 === t.autoBindInjectable) t.autoBindInjectable = !1;
          else if ("boolean" != typeof t.autoBindInjectable) throw new Error("" + a.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
          if (void 0 === t.skipBaseClassChecks) t.skipBaseClassChecks = !1;
          else if ("boolean" != typeof t.skipBaseClassChecks) throw new Error("" + a.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
          (this.options = {
            autoBindInjectable: t.autoBindInjectable,
            defaultScope: t.defaultScope,
            skipBaseClassChecks: t.skipBaseClassChecks
          }),
            (this.id = p.id()),
            (this._bindingDictionary = new g.Lookup()),
            (this._snapshots = []),
            (this._middleware = null),
            (this.parent = null),
            (this._metadataReader = new d.MetadataReader());
        }
        return (
          (e.merge = function (t, n) {
            for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
            var s = new e(),
              a = o([t, n], i).map(function (e) {
                return h.getBindingDictionary(e);
              }),
              c = h.getBindingDictionary(s);
            function u(e, t) {
              e.traverse(function (e, n) {
                n.forEach(function (e) {
                  t.add(e.serviceIdentifier, e.clone());
                });
              });
            }
            return (
              a.forEach(function (e) {
                u(e, c);
              }),
              s
            );
          }),
          (e.prototype.load = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            for (var n = this._getContainerModuleHelpersFactory(), i = 0, r = e; i < r.length; i++) {
              var o = r[i],
                s = n(o.id);
              o.registry(s.bindFunction, s.unbindFunction, s.isboundFunction, s.rebindFunction);
            }
          }),
          (e.prototype.loadAsync = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return i(this, void 0, void 0, function () {
              var t, n, i, o, s;
              return r(this, function (r) {
                switch (r.label) {
                  case 0:
                    (t = this._getContainerModuleHelpersFactory()), (n = 0), (i = e), (r.label = 1);
                  case 1:
                    return n < i.length
                      ? ((o = i[n]), (s = t(o.id)), [4, o.registry(s.bindFunction, s.unbindFunction, s.isboundFunction, s.rebindFunction)])
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
              n = new s.Binding(e, t);
            return this._bindingDictionary.add(e, n), new f.BindingToSyntax(n);
          }),
          (e.prototype.rebind = function (e) {
            return this.unbind(e), this.bind(e);
          }),
          (e.prototype.unbind = function (e) {
            try {
              this._bindingDictionary.remove(e);
            } catch (t) {
              throw new Error(a.CANNOT_UNBIND + " " + _.getServiceIdentifierAsString(e));
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
                o = h.createMockRequest(this, e, t, n);
              i = r.some(function (e) {
                return e.constraint(o);
              });
            }
            return !i && this.parent && (i = this.parent.isBoundTagged(e, t, n)), i;
          }),
          (e.prototype.snapshot = function () {
            this._snapshots.push(E.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware));
          }),
          (e.prototype.restore = function () {
            var e = this._snapshots.pop();
            if (void 0 === e) throw new Error(a.NO_MORE_SNAPSHOTS_AVAILABLE);
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
            var s = null,
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
              if (null == (s = this._middleware(c))) throw new Error(a.INVALID_MIDDLEWARE_RETURN);
            } else s = this._planAndResolve()(c);
            return s;
          }),
          (e.prototype._planAndResolve = function () {
            var e = this;
            return function (t) {
              var n = h.plan(e._metadataReader, e, t.isMultiInject, t.targetType, t.serviceIdentifier, t.key, t.value, t.avoidConstraints);
              return (n = t.contextInterceptor(n)), l.resolve(n);
            };
          }),
          e
        );
      })();
    t.Container = v;
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
      s = n(1),
      a = n(27),
      c = n(12),
      u = n(49),
      d = n(4),
      h = n(50),
      l = n(51),
      f = n(53),
      p = n(29);
    function _(e) {
      return e._bindingDictionary;
    }
    function E(e, t, n, o, s) {
      var a = g(n.container, s.serviceIdentifier),
        u = [];
      return (
        a.length === i.BindingCount.NoBindingsAvailable &&
          n.container.options.autoBindInjectable &&
          "function" == typeof s.serviceIdentifier &&
          e.getConstructorMetadata(s.serviceIdentifier).compilerGeneratedMetadata &&
          (n.container.bind(s.serviceIdentifier).toSelf(), (a = g(n.container, s.serviceIdentifier))),
        (u = t
          ? a
          : a.filter(function (e) {
              var t = new f.Request(e.serviceIdentifier, n, o, e, s);
              return e.constraint(t);
            })),
        (function (e, t, n, o) {
          switch (t.length) {
            case i.BindingCount.NoBindingsAvailable:
              if (n.isOptional()) return t;
              var s = c.getServiceIdentifierAsString(e),
                a = r.NOT_REGISTERED;
              throw ((a += c.listMetadataForTarget(s, n)), (a += c.listRegisteredBindingsForServiceIdentifier(o, s, g)), new Error(a));
            case i.BindingCount.OnlyOneBindingAvailable:
              if (!n.isArray()) return t;
            case i.BindingCount.MultipleBindingsAvailable:
            default:
              if (n.isArray()) return t;
              (s = c.getServiceIdentifierAsString(e)), (a = r.AMBIGUOUS_MATCH + " " + s);
              throw ((a += c.listRegisteredBindingsForServiceIdentifier(o, s, g)), new Error(a));
          }
        })(s.serviceIdentifier, u, s, n.container),
        u
      );
    }
    function g(e, t) {
      var n = [],
        i = _(e);
      return i.hasKey(t) ? (n = i.get(t)) : null !== e.parent && (n = g(e.parent, t)), n;
    }
    (t.getBindingDictionary = _),
      (t.plan = function (e, t, n, i, _, g, v, y) {
        void 0 === y && (y = !1);
        var O = new u.Context(t),
          T = (function (e, t, n, i, r, o) {
            var a = e ? s.MULTI_INJECT_TAG : s.INJECT_TAG,
              c = new d.Metadata(a, n),
              u = new p.Target(t, i, n, c);
            if (void 0 !== r) {
              var h = new d.Metadata(r, o);
              u.metadata.push(h);
            }
            return u;
          })(n, i, _, "", g, v);
        try {
          return (
            (function e(t, n, i, s, a, c) {
              var u, d;
              if (null === a) {
                (u = E(t, n, s, null, c)), (d = new f.Request(i, s, null, u, c));
                var p = new h.Plan(s, d);
                s.addPlan(p);
              } else (u = E(t, n, s, a, c)), (d = a.addChildRequest(c.serviceIdentifier, u, c));
              u.forEach(function (n) {
                var i = null;
                if (c.isArray()) i = d.addChildRequest(n.serviceIdentifier, n, c);
                else {
                  if (n.cache) return;
                  i = d;
                }
                if (n.type === o.BindingTypeEnum.Instance && null !== n.implementationType) {
                  var a = l.getDependencies(t, n.implementationType);
                  if (!s.container.options.skipBaseClassChecks) {
                    var u = l.getBaseClassDependencyCount(t, n.implementationType);
                    if (a.length < u) {
                      var h = r.ARGUMENTS_LENGTH_MISMATCH(l.getFunctionName(n.implementationType));
                      throw new Error(h);
                    }
                  }
                  a.forEach(function (n) {
                    e(t, !1, n.serviceIdentifier, s, i, n);
                  });
                }
              });
            })(e, y, _, O, null, T),
            O
          );
        } catch (e) {
          throw (a.isStackOverflowExeption(e) && O.plan && c.circularDependencyToException(O.plan.rootRequest), e);
        }
      }),
      (t.createMockRequest = function (e, t, n, i) {
        var r = new p.Target(o.TargetTypeEnum.Variable, "", t, new d.Metadata(n, i)),
          s = new u.Context(e);
        return new f.Request(t, s, null, [], r);
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
      s = n(6),
      a = n(1),
      c = n(12);
    Object.defineProperty(t, "getFunctionName", {
      enumerable: !0,
      get: function () {
        return c.getFunctionName;
      }
    });
    var u = n(29);
    function d(e, t, n, r) {
      var a = e.getConstructorMetadata(n),
        c = a.compilerGeneratedMetadata;
      if (void 0 === c) {
        var d = o.MISSING_INJECTABLE_ANNOTATION + " " + t + ".";
        throw new Error(d);
      }
      var f = a.userGeneratedMetadata,
        p = Object.keys(f),
        _ = 0 === n.length && p.length > 0,
        E = p.length > n.length,
        g = (function (e, t, n, i, r) {
          for (var o = [], s = 0; s < r; s++) {
            var a = h(s, e, t, n, i);
            null !== a && o.push(a);
          }
          return o;
        })(r, t, c, f, _ || E ? p.length : n.length),
        v = (function e(t, n) {
          for (var r = t.getPropertiesMetadata(n), o = [], a = Object.keys(r), c = 0, d = a; c < d.length; c++) {
            var h = d[c],
              f = r[h],
              p = l(r[h]),
              _ = p.targetName || h,
              E = p.inject || p.multiInject,
              g = new u.Target(s.TargetTypeEnum.ClassProperty, _, E);
            (g.metadata = f), o.push(g);
          }
          var v = Object.getPrototypeOf(n.prototype).constructor;
          if (v !== Object) {
            var y = e(t, v);
            o = i(i([], o), y);
          }
          return o;
        })(e, n);
      return i(i([], g), v);
    }
    function h(e, t, n, i, a) {
      var c = a[e.toString()] || [],
        d = l(c),
        h = !0 !== d.unmanaged,
        f = i[e],
        p = d.inject || d.multiInject;
      if (((f = p || f) instanceof r.LazyServiceIdentifer && (f = f.unwrap()), h)) {
        if (!t && (f === Object || f === Function || void 0 === f)) {
          var _ = o.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + n + ".";
          throw new Error(_);
        }
        var E = new u.Target(s.TargetTypeEnum.ConstructorArgument, d.targetName, f);
        return (E.metadata = c), E;
      }
      return null;
    }
    function l(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          t[e.key.toString()] = e.value;
        }),
        { inject: t[a.INJECT_TAG], multiInject: t[a.MULTI_INJECT_TAG], targetName: t[a.NAME_TAG], unmanaged: t[a.UNMANAGED_TAG] }
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
                return e.key === a.UNMANAGED_TAG;
              });
            }),
            s = [].concat.apply([], o).length,
            u = r.length - s;
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
      s = n(12),
      a = n(55),
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
            h = !(t.parentRequest && t.parentRequest.target && t.target && t.parentRequest.target.matchesArray(t.target.serviceIdentifier));
          if (d && h)
            return o.map(function (t) {
              return u(e)(t);
            });
          var l = null;
          if (!t.target.isOptional() || 0 !== n.length) {
            var f = n[0],
              p = f.scope === r.BindingScopeEnum.Singleton,
              _ = f.scope === r.BindingScopeEnum.Request;
            if (p && f.activated) return f.cache;
            if (_ && null !== e && e.has(f.id)) return e.get(f.id);
            if (f.type === r.BindingTypeEnum.ConstantValue) (l = f.cache), (f.activated = !0);
            else if (f.type === r.BindingTypeEnum.Function) (l = f.cache), (f.activated = !0);
            else if (f.type === r.BindingTypeEnum.Constructor) l = f.implementationType;
            else if (f.type === r.BindingTypeEnum.DynamicValue && null !== f.dynamicValue)
              l = c("toDynamicValue", f.serviceIdentifier, function () {
                return f.dynamicValue(t.parentContext);
              });
            else if (f.type === r.BindingTypeEnum.Factory && null !== f.factory)
              l = c("toFactory", f.serviceIdentifier, function () {
                return f.factory(t.parentContext);
              });
            else if (f.type === r.BindingTypeEnum.Provider && null !== f.provider)
              l = c("toProvider", f.serviceIdentifier, function () {
                return f.provider(t.parentContext);
              });
            else {
              if (f.type !== r.BindingTypeEnum.Instance || null === f.implementationType) {
                var E = s.getServiceIdentifierAsString(t.serviceIdentifier);
                throw new Error(i.INVALID_BINDING_TYPE + " " + E);
              }
              l = a.resolveInstance(f.implementationType, o, u(e));
            }
            return (
              "function" == typeof f.onActivation && (l = f.onActivation(t.parentContext, l)),
              p && ((f.cache = l), (f.activated = !0)),
              _ && null !== e && !e.has(f.id) && e.set(f.id, l),
              l
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
      s = n(1);
    t.resolveInstance = function (e, t, n) {
      var a,
        c,
        u = null;
      if (t.length > 0) {
        var d = t
          .filter(function (e) {
            return null !== e.target && e.target.type === o.TargetTypeEnum.ConstructorArgument;
          })
          .map(n);
        (c = d),
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
          })((u = new ((a = e).bind.apply(a, i([void 0], c)))()), t, n));
      } else u = new e();
      return (
        (function (e, t) {
          if (Reflect.hasMetadata(s.POST_CONSTRUCT, e)) {
            var n = Reflect.getMetadata(s.POST_CONSTRUCT, e);
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
      s = n(30),
      a = (function () {
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
              new s.BindingWhenOnSyntax(this._binding)
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
              new s.BindingWhenOnSyntax(this._binding)
            );
          }),
          (e.prototype.toFactory = function (e) {
            return (
              (this._binding.type = r.BindingTypeEnum.Factory),
              (this._binding.factory = e),
              (this._binding.scope = r.BindingScopeEnum.Singleton),
              new s.BindingWhenOnSyntax(this._binding)
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
              new s.BindingWhenOnSyntax(this._binding)
            );
          }),
          (e.prototype.toProvider = function (e) {
            return (
              (this._binding.type = r.BindingTypeEnum.Provider),
              (this._binding.provider = e),
              (this._binding.scope = r.BindingScopeEnum.Singleton),
              new s.BindingWhenOnSyntax(this._binding)
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
    t.BindingToSyntax = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingInWhenOnSyntax = void 0);
    var i = n(58),
      r = n(20),
      o = n(21),
      s = (function () {
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
    t.BindingInWhenOnSyntax = s;
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
      return function (n, o, s) {
        var a = new i.Metadata(e, t);
        "number" == typeof s ? r.tagParameter(n, o, s, a) : r.tagProperty(n, o, a);
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
      return function (t, n, s) {
        var a = new r.Metadata(i.NAMED_TAG, e);
        "number" == typeof s ? o.tagParameter(t, n, s, a) : o.tagProperty(t, n, a);
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
        var s = new r.Metadata(i.OPTIONAL_TAG, !0);
        "number" == typeof n ? o.tagParameter(e, t, n, s) : o.tagProperty(e, t, s);
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
        var s = new r.Metadata(i.UNMANAGED_TAG, !0);
        o.tagParameter(e, t, n, s);
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
      return function (t, n, s) {
        var a = new r.Metadata(i.MULTI_INJECT_TAG, e);
        "number" == typeof s ? o.tagParameter(t, n, s, a) : o.tagProperty(t, n, a);
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
      return function (t, n, s) {
        var a = new r.Metadata(i.NAME_TAG, e);
        o.tagParameter(t, n, s, a);
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
        var s = new o.Metadata(r.POST_CONSTRUCT, t);
        if (Reflect.hasOwnMetadata(r.POST_CONSTRUCT, e.constructor)) throw new Error(i.MULTIPLE_POST_CONSTRUCT_METHODS);
        Reflect.defineMetadata(r.POST_CONSTRUCT, s, e.constructor);
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
            var s = n.indexOf(this);
            ~s ? n.splice(s + 1) : n.push(this), ~s ? i.splice(s, 1 / 0, r) : i.push(r), ~n.indexOf(o) && (o = t.call(this, r, o));
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
            s = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
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
    const s = n(0),
      a = (n(39), n(5));
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
    (c = i([s.injectable(), o(0, s.inject(a.MARIO_TYPES.BROWSER)), r("design:paramtypes", [String])], c)), (t.Extension = c);
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
            s = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
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
    const s = n(0),
      a = n(2),
      c = n(5),
      u = n(81);
    let d = class {
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
                const t = new a.MarioEvent(u.PortDispatcherEvents.PORT_DISCONNECTED, { name: e.name });
                this.dispatcher.emit(t).then();
              });
            const t = new a.MarioEvent(u.PortDispatcherEvents.PORT_CONNECTED, { name: e.name });
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
    (d = i(
      [
        s.injectable(),
        o(0, s.inject(c.MARIO_TYPES.CONTAINER)),
        o(1, s.inject(c.MARIO_TYPES.LOGGER_SERVICE)),
        o(2, s.inject(c.MARIO_TYPES.INTERNAL_DISPATCHER)),
        r("design:paramtypes", [Object, Object, Object])
      ],
      d
    )),
      (t.PortDispatcher = d);
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
            s = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
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
      s =
        (this && this.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function s(e) {
              try {
                c(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
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
                      })).then(s, a);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const a = n(0),
      c = n(35),
      u = n(5),
      d = n(84);
    let h = class {
      constructor(e, t) {
        (this.logger = e), (this.dispatcher = t);
      }
      clear() {
        return s(this, void 0, void 0, function* () {
          yield this.dispatcher.emit(new c.MarioEvent(d.CacheEvents.BEFORE_CLEAR_CACHE)),
            yield this.cacheRemoveAll(),
            yield this.dispatcher.emit(new c.MarioEvent(d.CacheEvents.AFTER_CLEAR_CACHE));
        });
      }
      cacheRemoveAll() {
        return s(this, void 0, void 0, function* () {
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
    (h.EVENT_BEFORE_CLEAR_CACHE = "beforeClearCache"),
      (h.EVENT_AFTER_CLEAR_CACHE = "afterClearCache"),
      (h = i(
        [
          a.injectable(),
          o(0, a.inject(u.MARIO_TYPES.LOGGER_SERVICE)),
          o(1, a.inject(u.MARIO_TYPES.INTERNAL_DISPATCHER)),
          r("design:paramtypes", [Object, Object])
        ],
        h
      )),
      (t.CacheService = h);
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
            s = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
          else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
        },
      r =
        (this && this.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function s(e) {
              try {
                c(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
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
                      })).then(s, a);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const o = n(0);
    let s = class {
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
    (s = i([o.injectable()], s)), (t.StorageService = s);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = n(2),
      r = n(25);
    if (
      !(function () {
        try {
          return window.self !== window.top;
        } catch (e) {
          return !0;
        }
      })()
    ) {
      let e = location.href;
      const t = new i.ContentDispatcherService();
      t.on(r.TabStateEvents.TAB_STATE__GET_NAVIGATION_METHOD, () => {
        const n = e !== location.href;
        n && (e = location.href);
        const o = { urlRewrite: n },
          s = new i.MarioEvent(r.TabStateEvents.GET_NAVIGATION_METHOD_RESPONSE, o);
        t.emit(s);
      });
    }
  }
]);
