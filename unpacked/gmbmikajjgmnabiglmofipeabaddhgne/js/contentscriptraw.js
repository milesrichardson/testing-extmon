/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (a) {
  return (a.raw = a);
};
$jscomp.createTemplateTagFirstArgWithRaw = function (a, b) {
  a.raw = b;
  return a;
};
var COMPILED = !0,
  goog = goog || {};
goog.global = this || self;
goog.exportPath_ = function (a, b, c, d) {
  a = a.split(".");
  d = d || goog.global;
  a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
  for (var e; a.length && (e = a.shift()); )
    if (a.length || void 0 === b) d = d[e] && d[e] !== Object.prototype[e] ? d[e] : (d[e] = {});
    else if (!c && goog.isObject(b) && goog.isObject(d[e])) for (var f in b) b.hasOwnProperty(f) && (d[e][f] = b[f]);
    else d[e] = b;
};
goog.define = function (a, b) {
  if (!COMPILED) {
    var c = goog.global.CLOSURE_UNCOMPILED_DEFINES,
      d = goog.global.CLOSURE_DEFINES;
    c && void 0 === c.nodeType && Object.prototype.hasOwnProperty.call(c, a)
      ? (b = c[a])
      : d && void 0 === d.nodeType && Object.prototype.hasOwnProperty.call(d, a) && (b = d[a]);
  }
  return b;
};
goog.FEATURESET_YEAR = 2012;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.readFlagInternalDoNotUseOrElse = function (a, b) {
  var c = goog.getObjectByName(goog.FLAGS_OBJECT_);
  a = c && c[a];
  return null != a ? a : b;
};
goog.FLAGS_OBJECT_ = "CLOSURE_FLAGS";
goog.FLAGS_STAGING_DEFAULT = !0;
goog.provide = function (a) {
  if (goog.isInModuleLoader_()) throw Error("goog.provide cannot be used within a module.");
  if (!COMPILED && goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
  goog.constructNamespace_(a);
};
goog.constructNamespace_ = function (a, b, c) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[a];
    for (var d = a; (d = d.substring(0, d.lastIndexOf("."))) && !goog.getObjectByName(d); ) goog.implicitNamespaces_[d] = !0;
  }
  goog.exportPath_(a, b, c);
};
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.getScriptNonce_ = function (a) {
  a = (a || goog.global).document;
  return (a = a.querySelector && a.querySelector("script[nonce]")) &&
    (a = a.nonce || a.getAttribute("nonce")) &&
    goog.NONCE_PATTERN_.test(a)
    ? a
    : "";
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function (a) {
  if ("string" !== typeof a || !a || -1 == a.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
  if (!goog.isInGoogModuleLoader_())
    throw Error(
      "Module " +
        a +
        " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide."
    );
  if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
  goog.moduleLoaderState_.moduleName = a;
  if (!COMPILED) {
    if (goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
    delete goog.implicitNamespaces_[a];
  }
};
goog.module.get = function (a) {
  return goog.module.getInternal_(a);
};
goog.module.getInternal_ = function (a) {
  if (!COMPILED) {
    if (a in goog.loadedModules_) return goog.loadedModules_[a].exports;
    if (!goog.implicitNamespaces_[a]) return (a = goog.getObjectByName(a)), null != a ? a : null;
  }
  return null;
};
goog.requireDynamic = function (a) {
  if (!COMPILED) {
    if (!goog.importHandler_ || !goog.uncompiledChunkIdHandler_) throw Error("Need to setup import handler and chunk id handler.");
    return goog.importHandler_(goog.uncompiledChunkIdHandler_(a)).then(function () {
      return goog.module.getInternal_(a);
    });
  }
  return null;
};
goog.importHandler_ = null;
goog.uncompiledChunkIdHandler_ = null;
goog.setImportHandlerInternalDoNotCallOrElse = function (a) {
  goog.importHandler_ = a;
};
goog.setUncompiledChunkIdHandlerInternalDoNotCallOrElse = function (a) {
  goog.uncompiledChunkIdHandler_ = a;
};
goog.ModuleType = { ES6: "es6", GOOG: "goog" };
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function () {
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};
goog.isInGoogModuleLoader_ = function () {
  return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};
goog.isInEs6ModuleLoader_ = function () {
  if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) return !0;
  var a = goog.global.$jscomp;
  return a ? ("function" != typeof a.getCurrentModulePath ? !1 : !!a.getCurrentModulePath()) : !1;
};
goog.module.declareLegacyNamespace = function () {
  if (!COMPILED && !goog.isInGoogModuleLoader_())
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  if (!COMPILED && !goog.moduleLoaderState_.moduleName)
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.declareModuleId = function (a) {
  if (!COMPILED) {
    if (!goog.isInEs6ModuleLoader_()) throw Error("goog.declareModuleId may only be called from within an ES6 module");
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
      throw Error("goog.declareModuleId may only be called once per module.");
    if (a in goog.loadedModules_) throw Error('Module with namespace "' + a + '" already exists.');
  }
  if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = a;
  else {
    var b = goog.global.$jscomp;
    if (!b || "function" != typeof b.getCurrentModulePath) throw Error('Module with namespace "' + a + '" has been loaded incorrectly.');
    b = b.require(b.getCurrentModulePath());
    goog.loadedModules_[a] = { exports: b, type: goog.ModuleType.ES6, moduleId: a };
  }
};
goog.setTestOnly = function (a) {
  if (goog.DISALLOW_TEST_ONLY_CODE)
    throw ((a = a || ""), Error("Importing test-only code into non-debug environment" + (a ? ": " + a : ".")));
};
goog.forwardDeclare = function (a) {};
COMPILED ||
  ((goog.isProvided_ = function (a) {
    return a in goog.loadedModules_ || (!goog.implicitNamespaces_[a] && null != goog.getObjectByName(a));
  }),
  (goog.implicitNamespaces_ = { "goog.module": !0 }));
goog.getObjectByName = function (a, b) {
  a = a.split(".");
  b = b || goog.global;
  for (var c = 0; c < a.length; c++) if (((b = b[a[c]]), null == b)) return null;
  return b;
};
goog.addDependency = function (a, b, c, d) {
  !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a, b, c, d);
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function (a) {
  goog.global.console && goog.global.console.error(a);
};
goog.require = function (a) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a);
    if (goog.isProvided_(a)) {
      if (goog.isInModuleLoader_()) return goog.module.getInternal_(a);
    } else if (goog.ENABLE_DEBUG_LOADER) {
      var b = goog.moduleLoaderState_;
      goog.moduleLoaderState_ = null;
      try {
        goog.debugLoader_.load_(a);
      } finally {
        goog.moduleLoaderState_ = b;
      }
    }
    return null;
  }
};
goog.requireType = function (a) {
  return {};
};
goog.basePath = "";
goog.abstractMethod = function () {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function (a) {
  a.instance_ = void 0;
  a.getInstance = function () {
    if (a.instance_) return a.instance_;
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
    return (a.instance_ = new a());
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.TRANSPILE = "detect";
goog.ASSUME_ES_MODULES_TRANSPILED = !1;
goog.TRUSTED_TYPES_POLICY_NAME = "goog";
goog.hasBadLetScoping = null;
goog.loadModule = function (a) {
  var b = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = { moduleName: "", declareLegacyNamespace: !1, type: goog.ModuleType.GOOG };
    var c = {},
      d = c;
    if ("function" === typeof a) d = a.call(void 0, d);
    else if ("string" === typeof a) d = goog.loadModuleFromSource_.call(void 0, d, a);
    else throw Error("Invalid module definition");
    var e = goog.moduleLoaderState_.moduleName;
    if ("string" === typeof e && e)
      goog.moduleLoaderState_.declareLegacyNamespace
        ? goog.constructNamespace_(e, d, c !== d)
        : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof d && null != d && Object.seal(d),
        (goog.loadedModules_[e] = { exports: d, type: goog.ModuleType.GOOG, moduleId: goog.moduleLoaderState_.moduleName });
    else throw Error('Invalid module name "' + e + '"');
  } finally {
    goog.moduleLoaderState_ = b;
  }
};
goog.loadModuleFromSource_ = function (a, b) {
  eval(goog.CLOSURE_EVAL_PREFILTER_.createScript(b));
  return a;
};
goog.normalizePath_ = function (a) {
  a = a.split("/");
  for (var b = 0; b < a.length; ) "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
  return a.join("/");
};
goog.loadFileSync_ = function (a) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
  try {
    var b = new goog.global.XMLHttpRequest();
    b.open("get", a, !1);
    b.send();
    return 0 == b.status || 200 == b.status ? b.responseText : null;
  } catch (c) {
    return null;
  }
};
goog.typeOf = function (a) {
  var b = typeof a;
  return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
};
goog.isArrayLike = function (a) {
  var b = goog.typeOf(a);
  return "array" == b || ("object" == b && "number" == typeof a.length);
};
goog.isDateLike = function (a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isObject = function (a) {
  var b = typeof a;
  return ("object" == b && null != a) || "function" == b;
};
goog.getUid = function (a) {
  return (
    (Object.prototype.hasOwnProperty.call(a, goog.UID_PROPERTY_) && a[goog.UID_PROPERTY_]) || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_)
  );
};
goog.hasUid = function (a) {
  return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function (a) {
  null !== a && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_];
  } catch (b) {}
};
goog.UID_PROPERTY_ = "closure_uid_" + ((1e9 * Math.random()) >>> 0);
goog.uidCounter_ = 0;
goog.cloneObject = function (a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    b = "array" == b ? [] : {};
    for (var c in a) b[c] = goog.cloneObject(a[c]);
    return b;
  }
  return a;
};
goog.bindNative_ = function (a, b, c) {
  return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function (a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function () {
    return a.apply(b, arguments);
  };
};
goog.bind = function (a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code")
    ? (goog.bind = goog.bindNative_)
    : (goog.bind = goog.bindJs_);
  return goog.bind.apply(null, arguments);
};
goog.partial = function (a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function () {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
};
goog.now = function () {
  return Date.now();
};
goog.globalEval = function (a) {
  (0, eval)(a);
};
goog.getCssName = function (a, b) {
  if ("." == String(a).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
  var c = function (e) {
      return goog.cssNameMapping_[e] || e;
    },
    d = function (e) {
      e = e.split("-");
      for (var f = [], g = 0; g < e.length; g++) f.push(c(e[g]));
      return f.join("-");
    };
  d = goog.cssNameMapping_
    ? "BY_WHOLE" == goog.cssNameMappingStyle_
      ? c
      : d
    : function (e) {
        return e;
      };
  a = b ? a + "-" + d(b) : d(a);
  return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a) : a;
};
goog.setCssNameMapping = function (a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.GetMsgOptions = function () {};
goog.getMsg = function (a, b, c) {
  c && c.html && (a = a.replace(/</g, "&lt;"));
  c &&
    c.unescapeHtmlEntities &&
    (a = a
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&"));
  b &&
    (a = a.replace(/\{\$([^}]+)}/g, function (d, e) {
      return null != b && e in b ? b[e] : d;
    }));
  return a;
};
goog.getMsgWithFallback = function (a, b) {
  return a;
};
goog.exportSymbol = function (a, b, c) {
  goog.exportPath_(a, b, !0, c);
};
goog.exportProperty = function (a, b, c) {
  a[b] = c;
};
goog.inherits = function (a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.base = function (d, e, f) {
    for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
    return b.prototype[e].apply(d, g);
  };
};
goog.scope = function (a) {
  if (goog.isInModuleLoader_()) throw Error("goog.scope is not supported within a module.");
  a.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function (a, b) {
  var c = b.constructor,
    d = b.statics;
  (c && c != Object.prototype.constructor) ||
    (c = function () {
      throw Error("cannot instantiate an interface (no constructor defined).");
    });
  c = goog.defineClass.createSealingConstructor_(c, a);
  a && goog.inherits(c, a);
  delete b.constructor;
  delete b.statics;
  goog.defineClass.applyProperties_(c.prototype, b);
  null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
  return c;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function (a, b) {
  return goog.defineClass.SEAL_CLASS_INSTANCES
    ? function () {
        var c = a.apply(this, arguments) || this;
        c[goog.UID_PROPERTY_] = c[goog.UID_PROPERTY_];
        return c;
      }
    : a;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function (a, b) {
  for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++)
    (c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d]), Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
};
goog.identity_ = function (a) {
  return a;
};
goog.createTrustedTypesPolicy = function (a) {
  var b = null,
    c = goog.global.trustedTypes;
  if (!c || !c.createPolicy) return b;
  try {
    b = c.createPolicy(a, { createHTML: goog.identity_, createScript: goog.identity_, createScriptURL: goog.identity_ });
  } catch (d) {
    goog.logToConsole_(d.message);
  }
  return b;
};
!COMPILED &&
  goog.DEPENDENCIES_ENABLED &&
  ((goog.dependencies_ = { loadFlags: {}, nameToPath: {}, requires: {}, visited: {}, written: {}, deferred: {} }),
  (goog.getLoader_ = function () {
    return { dependencies_: goog.dependencies_, writeScriptTag_: goog.writeScriptTag_ };
  }),
  (goog.writeScriptTag_ = function (a, b) {
    if (goog.inHtmlDocument_()) {
      var c = goog.global.document;
      if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == c.readyState) {
        if (/\bdeps.js$/.test(a)) return !1;
        throw Error('Cannot write "' + a + '" after document load');
      }
      var d = "",
        e = goog.getScriptNonce_();
      e && (d = ' nonce="' + e + '"');
      a = void 0 === b ? '<script src="' + a + '"' + d + ">\x3c/script>" : "<script" + d + ">" + goog.protectScriptTag_(b) + "\x3c/script>";
      c.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(a) : a);
      return !0;
    }
    return !1;
  }),
  (goog.isEdge_ = function () {
    return !!(goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "").match(/Edge\/(\d+)(\.\d)*/i);
  }),
  (goog.inHtmlDocument_ = function () {
    var a = goog.global.document;
    return null != a && "write" in a;
  }),
  (goog.isDocumentLoading_ = function () {
    var a = goog.global.document;
    return a.attachEvent ? "complete" != a.readyState : "loading" == a.readyState;
  }),
  (goog.findBasePath_ = function () {
    if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH)
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
    else if (goog.inHtmlDocument_()) {
      var a = goog.global.document,
        b = a.currentScript;
      a = b ? [b] : a.getElementsByTagName("SCRIPT");
      for (b = a.length - 1; 0 <= b; --b) {
        var c = a[b].src,
          d = c.lastIndexOf("?");
        d = -1 == d ? c.length : d;
        if ("base.js" == c.slice(d - 7, d)) {
          goog.basePath = c.slice(0, d - 7);
          break;
        }
      }
    }
  }),
  goog.findBasePath_(),
  (goog.protectScriptTag_ = function (a) {
    return a.replace(/<\/(SCRIPT)/gi, "\\x3c/$1");
  }),
  (goog.DebugLoader_ = function () {
    this.dependencies_ = {};
    this.idToPath_ = {};
    this.written_ = {};
    this.loadingDeps_ = [];
    this.depsToLoad_ = [];
    this.paused_ = !1;
    this.factory_ = new goog.DependencyFactory();
    this.deferredCallbacks_ = {};
    this.deferredQueue_ = [];
  }),
  (goog.DebugLoader_.prototype.bootstrap = function (a, b) {
    function c() {
      d && (goog.global.setTimeout(d, 0), (d = null));
    }
    var d = b;
    if (a.length) {
      b = [];
      for (var e = 0; e < a.length; e++) {
        var f = this.getPathFromDeps_(a[e]);
        if (!f) throw Error("Unregonized namespace: " + a[e]);
        b.push(this.dependencies_[f]);
      }
      f = goog.require;
      var g = 0;
      for (e = 0; e < a.length; e++)
        f(a[e]),
          b[e].onLoad(function () {
            ++g == a.length && c();
          });
    } else c();
  }),
  (goog.DebugLoader_.prototype.loadClosureDeps = function () {
    this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}));
    this.loadDeps_();
  }),
  (goog.DebugLoader_.prototype.requested = function (a, b) {
    (a = this.getPathFromDeps_(a)) &&
      (b || this.areDepsLoaded_(this.dependencies_[a].requires)) &&
      (b = this.deferredCallbacks_[a]) &&
      (delete this.deferredCallbacks_[a], b());
  }),
  (goog.DebugLoader_.prototype.setDependencyFactory = function (a) {
    this.factory_ = a;
  }),
  (goog.DebugLoader_.prototype.load_ = function (a) {
    if (this.getPathFromDeps_(a)) {
      var b = this,
        c = [],
        d = function (e) {
          var f = b.getPathFromDeps_(e);
          if (!f) throw Error("Bad dependency path or symbol: " + e);
          if (!b.written_[f] && ((b.written_[f] = !0), (e = b.dependencies_[f]), !goog.dependencies_.written[e.relativePath])) {
            for (f = 0; f < e.requires.length; f++) goog.isProvided_(e.requires[f]) || d(e.requires[f]);
            c.push(e);
          }
        };
      d(a);
      a = !!this.depsToLoad_.length;
      this.depsToLoad_ = this.depsToLoad_.concat(c);
      this.paused_ || a || this.loadDeps_();
    } else goog.logToConsole_("goog.require could not find: " + a);
  }),
  (goog.DebugLoader_.prototype.loadDeps_ = function () {
    for (var a = this, b = this.paused_; this.depsToLoad_.length && !b; )
      (function () {
        var c = !1,
          d = a.depsToLoad_.shift(),
          e = !1;
        a.loading_(d);
        var f = {
          pause: function () {
            if (c) throw Error("Cannot call pause after the call to load.");
            b = !0;
          },
          resume: function () {
            c ? a.resume_() : (b = !1);
          },
          loaded: function () {
            if (e) throw Error("Double call to loaded.");
            e = !0;
            a.loaded_(d);
          },
          pending: function () {
            for (var g = [], h = 0; h < a.loadingDeps_.length; h++) g.push(a.loadingDeps_[h]);
            return g;
          },
          setModuleState: function (g) {
            goog.moduleLoaderState_ = { type: g, moduleName: "", declareLegacyNamespace: !1 };
          },
          registerEs6ModuleExports: function (g, h, n) {
            n && (goog.loadedModules_[n] = { exports: h, type: goog.ModuleType.ES6, moduleId: n || "" });
          },
          registerGoogModuleExports: function (g, h) {
            goog.loadedModules_[g] = { exports: h, type: goog.ModuleType.GOOG, moduleId: g };
          },
          clearModuleState: function () {
            goog.moduleLoaderState_ = null;
          },
          defer: function (g) {
            if (c) throw Error("Cannot register with defer after the call to load.");
            a.defer_(d, g);
          },
          areDepsLoaded: function () {
            return a.areDepsLoaded_(d.requires);
          }
        };
        try {
          d.load(f);
        } finally {
          c = !0;
        }
      })();
    b && this.pause_();
  }),
  (goog.DebugLoader_.prototype.pause_ = function () {
    this.paused_ = !0;
  }),
  (goog.DebugLoader_.prototype.resume_ = function () {
    this.paused_ && ((this.paused_ = !1), this.loadDeps_());
  }),
  (goog.DebugLoader_.prototype.loading_ = function (a) {
    this.loadingDeps_.push(a);
  }),
  (goog.DebugLoader_.prototype.loaded_ = function (a) {
    for (var b = 0; b < this.loadingDeps_.length; b++)
      if (this.loadingDeps_[b] == a) {
        this.loadingDeps_.splice(b, 1);
        break;
      }
    for (b = 0; b < this.deferredQueue_.length; b++)
      if (this.deferredQueue_[b] == a.path) {
        this.deferredQueue_.splice(b, 1);
        break;
      }
    if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
      for (; this.deferredQueue_.length; ) this.requested(this.deferredQueue_.shift(), !0);
    a.loaded();
  }),
  (goog.DebugLoader_.prototype.areDepsLoaded_ = function (a) {
    for (var b = 0; b < a.length; b++) {
      var c = this.getPathFromDeps_(a[b]);
      if (!c || !(c in this.deferredCallbacks_ || goog.isProvided_(a[b]))) return !1;
    }
    return !0;
  }),
  (goog.DebugLoader_.prototype.getPathFromDeps_ = function (a) {
    return a in this.idToPath_ ? this.idToPath_[a] : a in this.dependencies_ ? a : null;
  }),
  (goog.DebugLoader_.prototype.defer_ = function (a, b) {
    this.deferredCallbacks_[a.path] = b;
    this.deferredQueue_.push(a.path);
  }),
  (goog.LoadController = function () {}),
  (goog.LoadController.prototype.pause = function () {}),
  (goog.LoadController.prototype.resume = function () {}),
  (goog.LoadController.prototype.loaded = function () {}),
  (goog.LoadController.prototype.pending = function () {}),
  (goog.LoadController.prototype.registerEs6ModuleExports = function (a, b, c) {}),
  (goog.LoadController.prototype.setModuleState = function (a) {}),
  (goog.LoadController.prototype.clearModuleState = function () {}),
  (goog.LoadController.prototype.defer = function (a) {}),
  (goog.LoadController.prototype.areDepsLoaded = function () {}),
  (goog.Dependency = function (a, b, c, d, e) {
    this.path = a;
    this.relativePath = b;
    this.provides = c;
    this.requires = d;
    this.loadFlags = e;
    this.loaded_ = !1;
    this.loadCallbacks_ = [];
  }),
  (goog.Dependency.prototype.getPathName = function () {
    var a = this.path,
      b = a.indexOf("://");
    0 <= b && ((a = a.substring(b + 3)), (b = a.indexOf("/")), 0 <= b && (a = a.substring(b + 1)));
    return a;
  }),
  (goog.Dependency.prototype.onLoad = function (a) {
    this.loaded_ ? a() : this.loadCallbacks_.push(a);
  }),
  (goog.Dependency.prototype.loaded = function () {
    this.loaded_ = !0;
    var a = this.loadCallbacks_;
    this.loadCallbacks_ = [];
    for (var b = 0; b < a.length; b++) a[b]();
  }),
  (goog.Dependency.defer_ = !1),
  (goog.Dependency.callbackMap_ = {}),
  (goog.Dependency.registerCallback_ = function (a) {
    var b = Math.random().toString(32);
    goog.Dependency.callbackMap_[b] = a;
    return b;
  }),
  (goog.Dependency.unregisterCallback_ = function (a) {
    delete goog.Dependency.callbackMap_[a];
  }),
  (goog.Dependency.callback_ = function (a, b) {
    if (a in goog.Dependency.callbackMap_) {
      for (var c = goog.Dependency.callbackMap_[a], d = [], e = 1; e < arguments.length; e++) d.push(arguments[e]);
      c.apply(void 0, d);
    } else goog.logToConsole_("Callback key " + a + " does not exist (was base.js loaded more than once?).");
  }),
  (goog.Dependency.prototype.load = function (a) {
    if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
    else if (goog.inHtmlDocument_()) {
      var b = goog.global.document;
      if ("complete" == b.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
        if (/\bdeps.js$/.test(this.path)) {
          a.loaded();
          return;
        }
        throw Error('Cannot write "' + this.path + '" after document load');
      }
      var c = goog.getScriptNonce_();
      if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
        var d = function (h) {
          h.readyState && "complete" != h.readyState ? (h.onload = d) : (goog.Dependency.unregisterCallback_(e), a.loaded());
        };
        var e = goog.Dependency.registerCallback_(d);
        c = c ? ' nonce="' + c + '"' : "";
        var f = '<script src="' + this.path + '"' + c + (goog.Dependency.defer_ ? " defer" : "") + ' id="script-' + e + '">\x3c/script>';
        f += "<script" + c + ">";
        f = goog.Dependency.defer_
          ? f + ("document.getElementById('script-" + e + "').onload = function() {\n  goog.Dependency.callback_('" + e + "', this);\n};\n")
          : f + ("goog.Dependency.callback_('" + e + "', document.getElementById('script-" + e + "'));");
        f += "\x3c/script>";
        b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(f) : f);
      } else {
        var g = b.createElement("script");
        g.defer = goog.Dependency.defer_;
        g.async = !1;
        c && (g.nonce = c);
        g.onload = function () {
          g.onload = null;
          a.loaded();
        };
        g.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
        b.head.appendChild(g);
      }
    } else
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),
        "deps.js" == this.relativePath
          ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."),
            a.loaded())
          : a.pause();
  }),
  (goog.Es6ModuleDependency = function (a, b, c, d, e) {
    goog.Dependency.call(this, a, b, c, d, e);
  }),
  goog.inherits(goog.Es6ModuleDependency, goog.Dependency),
  (goog.Es6ModuleDependency.prototype.load = function (a) {
    function b(l, m) {
      var k = "",
        p = goog.getScriptNonce_();
      p && (k = ' nonce="' + p + '"');
      l = m
        ? '<script type="module" crossorigin' + k + ">" + m + "\x3c/script>"
        : '<script type="module" crossorigin src="' + l + '"' + k + ">\x3c/script>";
      d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(l) : l);
    }
    function c(l, m) {
      var k = d.createElement("script");
      k.defer = !0;
      k.async = !1;
      k.type = "module";
      k.setAttribute("crossorigin", !0);
      var p = goog.getScriptNonce_();
      p && (k.nonce = p);
      m
        ? (k.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(m) : m)
        : (k.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(l) : l);
      d.head.appendChild(k);
    }
    if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
    else if (goog.inHtmlDocument_()) {
      var d = goog.global.document,
        e = this;
      if (goog.isDocumentLoading_()) {
        var f = b;
        goog.Dependency.defer_ = !0;
      } else f = c;
      var g = goog.Dependency.registerCallback_(function () {
        goog.Dependency.unregisterCallback_(g);
        a.setModuleState(goog.ModuleType.ES6);
      });
      f(void 0, 'goog.Dependency.callback_("' + g + '")');
      f(this.path, void 0);
      var h = goog.Dependency.registerCallback_(function (l) {
        goog.Dependency.unregisterCallback_(h);
        a.registerEs6ModuleExports(e.path, l, goog.moduleLoaderState_.moduleName);
      });
      f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
      var n = goog.Dependency.registerCallback_(function () {
        goog.Dependency.unregisterCallback_(n);
        a.clearModuleState();
        a.loaded();
      });
      f(void 0, 'goog.Dependency.callback_("' + n + '")');
    } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a.pause();
  }),
  (goog.TransformedDependency = function (a, b, c, d, e) {
    goog.Dependency.call(this, a, b, c, d, e);
    this.contents_ = null;
    this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
  }),
  goog.inherits(goog.TransformedDependency, goog.Dependency),
  (goog.TransformedDependency.prototype.load = function (a) {
    function b() {
      e.contents_ = goog.loadFileSync_(e.path);
      e.contents_ && ((e.contents_ = e.transform(e.contents_)), e.contents_ && (e.contents_ += "\n//# sourceURL=" + e.path));
    }
    function c() {
      e.lazyFetch_ && b();
      if (e.contents_) {
        f && a.setModuleState(goog.ModuleType.ES6);
        try {
          var l = e.contents_;
          e.contents_ = null;
          goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript(l));
          if (f) var m = goog.moduleLoaderState_.moduleName;
        } finally {
          f && a.clearModuleState();
        }
        f &&
          goog.global.$jscomp.require.ensure([e.getPathName()], function () {
            a.registerEs6ModuleExports(e.path, goog.global.$jscomp.require(e.getPathName()), m);
          });
        a.loaded();
      }
    }
    function d() {
      var l = goog.global.document,
        m = goog.Dependency.registerCallback_(function () {
          goog.Dependency.unregisterCallback_(m);
          c();
        }),
        k = goog.getScriptNonce_();
      k =
        "<script" +
        (k ? ' nonce="' + k + '"' : "") +
        ">" +
        goog.protectScriptTag_('goog.Dependency.callback_("' + m + '");') +
        "\x3c/script>";
      l.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(k) : k);
    }
    var e = this;
    if (goog.global.CLOSURE_IMPORT_SCRIPT)
      b(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? ((this.contents_ = null), a.loaded()) : a.pause();
    else {
      var f = this.loadFlags.module == goog.ModuleType.ES6;
      this.lazyFetch_ || b();
      var g = 1 < a.pending().length;
      if (goog.Dependency.defer_ && (g || goog.isDocumentLoading_()))
        a.defer(function () {
          c();
        });
      else {
        var h = goog.global.document;
        g = goog.inHtmlDocument_() && ("ActiveXObject" in goog.global || goog.isEdge_());
        if (f && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !g) {
          goog.Dependency.defer_ = !0;
          a.pause();
          var n = h.onreadystatechange;
          h.onreadystatechange = function () {
            "interactive" == h.readyState && ((h.onreadystatechange = n), c(), a.resume());
            "function" === typeof n && n.apply(void 0, arguments);
          };
        } else goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d() : c();
      }
    }
  }),
  (goog.PreTranspiledEs6ModuleDependency = function (a, b, c, d, e) {
    goog.TransformedDependency.call(this, a, b, c, d, e);
  }),
  goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency),
  (goog.PreTranspiledEs6ModuleDependency.prototype.transform = function (a) {
    return a;
  }),
  (goog.GoogModuleDependency = function (a, b, c, d, e) {
    goog.TransformedDependency.call(this, a, b, c, d, e);
  }),
  goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency),
  (goog.GoogModuleDependency.prototype.transform = function (a) {
    return goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON
      ? "goog.loadModule(" + goog.global.JSON.stringify(a + "\n//# sourceURL=" + this.path + "\n") + ");"
      : 'goog.loadModule(function(exports) {"use strict";' + a + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
  }),
  (goog.DebugLoader_.prototype.addDependency = function (a, b, c, d) {
    b = b || [];
    a = a.replace(/\\/g, "/");
    var e = goog.normalizePath_(goog.basePath + a);
    (d && "boolean" !== typeof d) || (d = d ? { module: goog.ModuleType.GOOG } : {});
    c = this.factory_.createDependency(e, a, b, c, d);
    this.dependencies_[e] = c;
    for (c = 0; c < b.length; c++) this.idToPath_[b[c]] = e;
    this.idToPath_[a] = e;
  }),
  (goog.DependencyFactory = function () {}),
  (goog.DependencyFactory.prototype.createDependency = function (a, b, c, d, e) {
    for (var f, g = 0; (f = c[g]); g++) (goog.dependencies_.nameToPath[f] = b), (goog.dependencies_.loadFlags[b] = e);
    for (g = 0; (f = d[g]); g++)
      b in goog.dependencies_.requires || (goog.dependencies_.requires[b] = {}), (goog.dependencies_.requires[b][f] = !0);
    return e.module == goog.ModuleType.GOOG
      ? new goog.GoogModuleDependency(a, b, c, d, e)
      : e.module == goog.ModuleType.ES6
      ? goog.ASSUME_ES_MODULES_TRANSPILED
        ? new goog.PreTranspiledEs6ModuleDependency(a, b, c, d, e)
        : new goog.Es6ModuleDependency(a, b, c, d, e)
      : new goog.Dependency(a, b, c, d, e);
  }),
  (goog.debugLoader_ = new goog.DebugLoader_()),
  (goog.loadClosureDeps = function () {
    goog.debugLoader_.loadClosureDeps();
  }),
  (goog.setDependencyFactory = function (a) {
    goog.debugLoader_.setDependencyFactory(a);
  }),
  (goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME
    ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base")
    : null),
  goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(),
  (goog.bootstrap = function (a, b) {
    goog.debugLoader_.bootstrap(a, b);
  }));
if (!COMPILED) {
  var isChrome87 = !1;
  try {
    isChrome87 = eval(goog.global.trustedTypes.emptyScript) !== goog.global.trustedTypes.emptyScript;
  } catch (a) {}
  goog.CLOSURE_EVAL_PREFILTER_ = (goog.global.trustedTypes && isChrome87 && goog.createTrustedTypesPolicy("goog#base#devonly#eval")) || {
    createScript: goog.identity_
  };
}
var module$exports$gdocs$ContentScriptRaw = {},
  module$contents$gdocs$ContentScriptRaw_ContentScriptRaw = function () {};
module$contents$gdocs$ContentScriptRaw_ContentScriptRaw.prototype.init = function () {
  var a = document.getElementsByTagName("html")[0];
  a = this.createHeader_() + a.outerHTML;
  chrome.runtime.sendMessage(null, a);
};
module$contents$gdocs$ContentScriptRaw_ContentScriptRaw.prototype.createHeader_ = function () {
  return "\x3c!-- Downloaded on " + new Date().toLocaleString() + (" from " + window.location + " --\x3e\n  ");
};
new module$contents$gdocs$ContentScriptRaw_ContentScriptRaw().init();
var gdlog = {},
  module$contents$gdlog_Level = { SEVERE: 1e3, WARNING: 900, INFO: 800, CONFIG: 700, FINE: 500, FINER: 400, FINEST: 300 },
  module$contents$gdlog_ENABLE_DEBUG_FLAG = !1,
  module$contents$gdlog_DEFAULT_LEVEL_UNCOMPILED = module$contents$gdlog_Level.INFO,
  module$contents$gdlog_DEFAULT_LEVEL_COMPILED = module$contents$gdlog_Level.WARNING,
  module$contents$gdlog_loglevel = module$contents$gdlog_ENABLE_DEBUG_FLAG
    ? module$contents$gdlog_Level.INFO
    : module$contents$gdlog_Level.WARNING;
function module$contents$gdlog_msgInternal(a, b) {
  return a + ": " + b;
}
function module$contents$gdlog_isLoggable(a) {
  return a >= a;
}
function module$contents$gdlog_error(a, b) {
  console.error(module$contents$gdlog_msgInternal(a, b));
}
function module$contents$gdlog_errorLastErr(a, b) {
  console.error(module$contents$gdlog_msgInternal(a, b + module$contents$gdlog_lastErr()));
}
function module$contents$gdlog_warn(a, b) {
  module$contents$gdlog_isLoggable(module$contents$gdlog_Level.WARNING) && console.warn(module$contents$gdlog_msgInternal(a, b));
}
function module$contents$gdlog_warnLastErr(a, b) {
  module$contents$gdlog_isLoggable(module$contents$gdlog_Level.WARNING) &&
    console.warn(module$contents$gdlog_msgInternal(a, b + module$contents$gdlog_lastErr()));
}
function module$contents$gdlog_info(a, b) {
  module$contents$gdlog_isLoggable(module$contents$gdlog_Level.INFO) && console.info(module$contents$gdlog_msgInternal(a, b));
}
function module$contents$gdlog_infoLastErr(a, b) {
  module$contents$gdlog_isLoggable(module$contents$gdlog_Level.INFO) &&
    console.info(module$contents$gdlog_msgInternal(a, b + module$contents$gdlog_lastErr()));
}
function module$contents$gdlog_fine(a, b) {
  module$contents$gdlog_isLoggable(module$contents$gdlog_Level.FINE) && console.log(module$contents$gdlog_msgInternal(a, b));
}
function module$contents$gdlog_fineLastErr(a, b) {
  module$contents$gdlog_isLoggable(module$contents$gdlog_Level.FINE) &&
    console.log(module$contents$gdlog_msgInternal(a, b + module$contents$gdlog_lastErr()));
}
function module$contents$gdlog_finer(a, b) {
  module$contents$gdlog_isLoggable(module$contents$gdlog_Level.FINER) && console.debug(module$contents$gdlog_msgInternal(a, b));
}
function module$contents$gdlog_logwarn() {
  return module$contents$gdlog_setLoggingLevel(module$contents$gdlog_Level.WARNING, "WARN");
}
function module$contents$gdlog_loginfo() {
  return module$contents$gdlog_setLoggingLevel(module$contents$gdlog_Level.INFO, "INFO");
}
function module$contents$gdlog_logfine() {
  return module$contents$gdlog_setLoggingLevel(module$contents$gdlog_Level.FINE, "FINE");
}
function module$contents$gdlog_logfiner() {
  return module$contents$gdlog_setLoggingLevel(module$contents$gdlog_Level.FINER, "FINER");
}
function module$contents$gdlog_setLoggingLevel(a, b) {
  module$contents$gdlog_loglevel = a;
  return "Log level is now " + b;
}
function module$contents$gdlog_lastErr() {
  return chrome.runtime.lastError
    ? chrome.runtime.lastError.message
      ? " lastError:" + chrome.runtime.lastError.message
      : " lastError (no message)"
    : "";
}
function module$contents$gdlog_prettyPrint(a, b) {
  b = void 0 === b ? 100 : b;
  if (!a) return '""';
  var c = {},
    d;
  for (d in a) {
    var e = String(a[d]),
      f = e.length;
    f > b && (e = e.substr(0, b) + (" ... (" + f + " bytes)"));
    c[d] = e;
  }
  return JSON.stringify(c, null, 2);
}
gdlog.ENABLE_DEBUG_FLAG = module$contents$gdlog_ENABLE_DEBUG_FLAG;
gdlog.Level = module$contents$gdlog_Level;
gdlog.error = module$contents$gdlog_error;
gdlog.errorLastErr = module$contents$gdlog_errorLastErr;
gdlog.fine = module$contents$gdlog_fine;
gdlog.fineLastErr = module$contents$gdlog_fineLastErr;
gdlog.finer = module$contents$gdlog_finer;
gdlog.info = module$contents$gdlog_info;
gdlog.infoLastErr = module$contents$gdlog_infoLastErr;
gdlog.lastErr = module$contents$gdlog_lastErr;
gdlog.logfine = module$contents$gdlog_logfine;
gdlog.logfiner = module$contents$gdlog_logfiner;
gdlog.loginfo = module$contents$gdlog_loginfo;
gdlog.loglevel = module$contents$gdlog_loglevel;
gdlog.logwarn = module$contents$gdlog_logwarn;
gdlog.prettyPrint = module$contents$gdlog_prettyPrint;
gdlog.warn = module$contents$gdlog_warn;
gdlog.warnLastErr = module$contents$gdlog_warnLastErr;
