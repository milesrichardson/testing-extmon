/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (a) {
  var b = 0;
  return function () {
    return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (a) {
  return { next: $jscomp.arrayIteratorImpl(a) };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a;
      };
$jscomp.getGlobal = function (a) {
  a = [
    "object" == typeof globalThis && globalThis,
    a,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global
  ];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, b) {
  var c = $jscomp.propertyToPolyfillSymbol[b];
  if (null == c) return a[b];
  c = a[c];
  return void 0 !== c ? c : a[b];
};
$jscomp.polyfill = function (a, b, c, d) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, d) : $jscomp.polyfillUnisolated(a, b, c, d));
};
$jscomp.polyfillUnisolated = function (a, b, c, d) {
  c = $jscomp.global;
  a = a.split(".");
  for (d = 0; d < a.length - 1; d++) {
    var e = a[d];
    if (!(e in c)) return;
    c = c[e];
  }
  a = a[a.length - 1];
  d = c[a];
  b = b(d);
  b != d && null != b && $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b });
};
$jscomp.polyfillIsolated = function (a, b, c, d) {
  var e = a.split(".");
  a = 1 === e.length;
  d = e[0];
  d = !a && d in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var f = 0; f < e.length - 1; f++) {
    var g = e[f];
    if (!(g in d)) return;
    d = d[g];
  }
  e = e[e.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? d[e] : null;
  b = b(c);
  null != b &&
    (a
      ? $jscomp.defineProperty($jscomp.polyfills, e, { configurable: !0, writable: !0, value: b })
      : b !== c &&
        (void 0 === $jscomp.propertyToPolyfillSymbol[e] &&
          ((c = (1e9 * Math.random()) >>> 0),
          ($jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE
            ? $jscomp.global.Symbol(e)
            : $jscomp.POLYFILL_PREFIX + c + "$" + e)),
        $jscomp.defineProperty(d, $jscomp.propertyToPolyfillSymbol[e], { configurable: !0, writable: !0, value: b })));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill(
  "Symbol",
  function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.$jscomp$symbol$id_ = f;
      $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.$jscomp$symbol$id_;
    };
    var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e) throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Symbol.iterator",
  function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = $jscomp.global[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        $jscomp.defineProperty(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
          }
        });
    }
    return a;
  },
  "es6",
  "es3"
);
$jscomp.iteratorPrototype = function (a) {
  a = { next: a };
  a[Symbol.iterator] = function () {
    return this;
  };
  return a;
};
$jscomp.createTemplateTagFirstArg = function (a) {
  return (a.raw = a);
};
$jscomp.createTemplateTagFirstArgWithRaw = function (a, b) {
  a.raw = b;
  return a;
};
$jscomp.makeIterator = function (a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : $jscomp.arrayIterator(a);
};
$jscomp.arrayFromIterator = function (a) {
  for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
  return c;
};
$jscomp.arrayFromIterable = function (a) {
  return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
};
$jscomp.objectCreate =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.create
    ? Object.create
    : function (a) {
        var b = function () {};
        b.prototype = a;
        return new b();
      };
$jscomp.getConstructImplementation = function () {
  function a() {
    function c() {}
    new c();
    Reflect.construct(c, [], function () {});
    return new c() instanceof c;
  }
  if ($jscomp.TRUST_ES6_POLYFILLS && "undefined" != typeof Reflect && Reflect.construct) {
    if (a()) return Reflect.construct;
    var b = Reflect.construct;
    return function (c, d, e) {
      c = b(c, d);
      e && Reflect.setPrototypeOf(c, e.prototype);
      return c;
    };
  }
  return function (c, d, e) {
    void 0 === e && (e = c);
    e = $jscomp.objectCreate(e.prototype || Object.prototype);
    return Function.prototype.apply.call(c, e, d) || e;
  };
};
$jscomp.construct = { valueOf: $jscomp.getConstructImplementation }.valueOf();
$jscomp.underscoreProtoCanBeSet = function () {
  var a = { a: !0 },
    b = {};
  try {
    return (b.__proto__ = a), b.a;
  } catch (c) {}
  return !1;
};
$jscomp.setPrototypeOf =
  $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf
    ? Object.setPrototypeOf
    : $jscomp.underscoreProtoCanBeSet()
    ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      }
    : null;
$jscomp.inherits = function (a, b) {
  a.prototype = $jscomp.objectCreate(b.prototype);
  a.prototype.constructor = a;
  if ($jscomp.setPrototypeOf) {
    var c = $jscomp.setPrototypeOf;
    c(a, b);
  } else
    for (c in b)
      if ("prototype" != c)
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d);
        } else a[c] = b[c];
  a.superClass_ = b.prototype;
};
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function (a) {
  if (!(a instanceof Object)) throw new TypeError("Iterator result " + a + " is not an object");
};
$jscomp.generator.Context = function () {
  this.isRunning_ = !1;
  this.yieldAllIterator_ = null;
  this.yieldResult = void 0;
  this.nextAddress = 1;
  this.finallyAddress_ = this.catchAddress_ = 0;
  this.finallyContexts_ = this.abruptCompletion_ = null;
};
$jscomp.generator.Context.prototype.start_ = function () {
  if (this.isRunning_) throw new TypeError("Generator is already running");
  this.isRunning_ = !0;
};
$jscomp.generator.Context.prototype.stop_ = function () {
  this.isRunning_ = !1;
};
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function () {
  this.nextAddress = this.catchAddress_ || this.finallyAddress_;
};
$jscomp.generator.Context.prototype.next_ = function (a) {
  this.yieldResult = a;
};
$jscomp.generator.Context.prototype.throw_ = function (a) {
  this.abruptCompletion_ = { exception: a, isException: !0 };
  this.jumpToErrorHandler_();
};
$jscomp.generator.Context.prototype.return = function (a) {
  this.abruptCompletion_ = { return: a };
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function (a) {
  this.abruptCompletion_ = { jumpTo: a };
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.yield = function (a, b) {
  this.nextAddress = b;
  return { value: a };
};
$jscomp.generator.Context.prototype.yieldAll = function (a, b) {
  a = $jscomp.makeIterator(a);
  var c = a.next();
  $jscomp.generator.ensureIteratorResultIsObject_(c);
  if (c.done) (this.yieldResult = c.value), (this.nextAddress = b);
  else return (this.yieldAllIterator_ = a), this.yield(c.value, b);
};
$jscomp.generator.Context.prototype.jumpTo = function (a) {
  this.nextAddress = a;
};
$jscomp.generator.Context.prototype.jumpToEnd = function () {
  this.nextAddress = 0;
};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function (a, b) {
  this.catchAddress_ = a;
  void 0 != b && (this.finallyAddress_ = b);
};
$jscomp.generator.Context.prototype.setFinallyBlock = function (a) {
  this.catchAddress_ = 0;
  this.finallyAddress_ = a || 0;
};
$jscomp.generator.Context.prototype.leaveTryBlock = function (a, b) {
  this.nextAddress = a;
  this.catchAddress_ = b || 0;
};
$jscomp.generator.Context.prototype.enterCatchBlock = function (a) {
  this.catchAddress_ = a || 0;
  a = this.abruptCompletion_.exception;
  this.abruptCompletion_ = null;
  return a;
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function (a, b, c) {
  c ? (this.finallyContexts_[c] = this.abruptCompletion_) : (this.finallyContexts_ = [this.abruptCompletion_]);
  this.catchAddress_ = a || 0;
  this.finallyAddress_ = b || 0;
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function (a, b) {
  b = this.finallyContexts_.splice(b || 0)[0];
  if ((b = this.abruptCompletion_ = this.abruptCompletion_ || b)) {
    if (b.isException) return this.jumpToErrorHandler_();
    void 0 != b.jumpTo && this.finallyAddress_ < b.jumpTo
      ? ((this.nextAddress = b.jumpTo), (this.abruptCompletion_ = null))
      : (this.nextAddress = this.finallyAddress_);
  } else this.nextAddress = a;
};
$jscomp.generator.Context.prototype.forIn = function (a) {
  return new $jscomp.generator.Context.PropertyIterator(a);
};
$jscomp.generator.Context.PropertyIterator = function (a) {
  this.object_ = a;
  this.properties_ = [];
  for (var b in a) this.properties_.push(b);
  this.properties_.reverse();
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function () {
  for (; 0 < this.properties_.length; ) {
    var a = this.properties_.pop();
    if (a in this.object_) return a;
  }
  return null;
};
$jscomp.generator.Engine_ = function (a) {
  this.context_ = new $jscomp.generator.Context();
  this.program_ = a;
};
$jscomp.generator.Engine_.prototype.next_ = function (a) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
  this.context_.next_(a);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.return_ = function (a) {
  this.context_.start_();
  var b = this.context_.yieldAllIterator_;
  if (b)
    return this.yieldAllStep_(
      "return" in b
        ? b["return"]
        : function (c) {
            return { value: c, done: !0 };
          },
      a,
      this.context_.return
    );
  this.context_.return(a);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.throw_ = function (a) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
  this.context_.throw_(a);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function (a, b, c) {
  try {
    var d = a.call(this.context_.yieldAllIterator_, b);
    $jscomp.generator.ensureIteratorResultIsObject_(d);
    if (!d.done) return this.context_.stop_(), d;
    var e = d.value;
  } catch (f) {
    return (this.context_.yieldAllIterator_ = null), this.context_.throw_(f), this.nextStep_();
  }
  this.context_.yieldAllIterator_ = null;
  c.call(this.context_, e);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.nextStep_ = function () {
  for (; this.context_.nextAddress; )
    try {
      var a = this.program_(this.context_);
      if (a) return this.context_.stop_(), { value: a.value, done: !1 };
    } catch (b) {
      (this.context_.yieldResult = void 0), this.context_.throw_(b);
    }
  this.context_.stop_();
  if (this.context_.abruptCompletion_) {
    a = this.context_.abruptCompletion_;
    this.context_.abruptCompletion_ = null;
    if (a.isException) throw a.exception;
    return { value: a.return, done: !0 };
  }
  return { value: void 0, done: !0 };
};
$jscomp.generator.Generator_ = function (a) {
  this.next = function (b) {
    return a.next_(b);
  };
  this.throw = function (b) {
    return a.throw_(b);
  };
  this.return = function (b) {
    return a.return_(b);
  };
  this[Symbol.iterator] = function () {
    return this;
  };
};
$jscomp.generator.createGenerator = function (a, b) {
  b = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
  $jscomp.setPrototypeOf && a.prototype && $jscomp.setPrototypeOf(b, a.prototype);
  return b;
};
$jscomp.asyncExecutePromiseGenerator = function (a) {
  function b(d) {
    return a.next(d);
  }
  function c(d) {
    return a.throw(d);
  }
  return new Promise(function (d, e) {
    function f(g) {
      g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
    }
    f(a.next());
  });
};
$jscomp.asyncExecutePromiseGeneratorFunction = function (a) {
  return $jscomp.asyncExecutePromiseGenerator(a());
};
$jscomp.asyncExecutePromiseGeneratorProgram = function (a) {
  return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)));
};
$jscomp.getRestArguments = function () {
  for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
  return b;
};
$jscomp.polyfill(
  "Reflect",
  function (a) {
    return a ? a : {};
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Reflect.construct",
  function (a) {
    return $jscomp.construct;
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Reflect.setPrototypeOf",
  function (a) {
    if (a) return a;
    if ($jscomp.setPrototypeOf) {
      var b = $jscomp.setPrototypeOf;
      return function (c, d) {
        try {
          return b(c, d), !0;
        } catch (e) {
          return !1;
        }
      };
    }
    return null;
  },
  "es6",
  "es5"
);
$jscomp.polyfill(
  "Promise",
  function (a) {
    function b() {
      this.batch_ = null;
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function (h, k) {
            h(g);
          });
    }
    if (
      a &&
      (!(
        $jscomp.FORCE_POLYFILL_PROMISE ||
        ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && "undefined" === typeof $jscomp.global.PromiseRejectionEvent)
      ) ||
        !$jscomp.global.Promise ||
        -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))
    )
      return a;
    b.prototype.asyncExecute = function (g) {
      if (null == this.batch_) {
        this.batch_ = [];
        var h = this;
        this.asyncExecuteFunction(function () {
          h.executeBatch_();
        });
      }
      this.batch_.push(g);
    };
    var d = $jscomp.global.setTimeout;
    b.prototype.asyncExecuteFunction = function (g) {
      d(g, 0);
    };
    b.prototype.executeBatch_ = function () {
      for (; this.batch_ && this.batch_.length; ) {
        var g = this.batch_;
        this.batch_ = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (l) {
            this.asyncThrow_(l);
          }
        }
      }
      this.batch_ = null;
    };
    b.prototype.asyncThrow_ = function (g) {
      this.asyncExecuteFunction(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.state_ = 0;
      this.result_ = void 0;
      this.onSettledCallbacks_ = [];
      this.isRejectionHandled_ = !1;
      var h = this.createResolveAndReject_();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    };
    e.prototype.createResolveAndReject_ = function () {
      function g(l) {
        return function (m) {
          k || ((k = !0), l.call(h, m));
        };
      }
      var h = this,
        k = !1;
      return { resolve: g(this.resolveTo_), reject: g(this.reject_) };
    };
    e.prototype.resolveTo_ = function (g) {
      if (g === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof e) this.settleSameAsPromise_(g);
      else {
        a: switch (typeof g) {
          case "object":
            var h = null != g;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.resolveToNonPromiseObj_(g) : this.fulfill_(g);
      }
    };
    e.prototype.resolveToNonPromiseObj_ = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.reject_(k);
        return;
      }
      "function" == typeof h ? this.settleSameAsThenable_(h, g) : this.fulfill_(g);
    };
    e.prototype.reject_ = function (g) {
      this.settle_(2, g);
    };
    e.prototype.fulfill_ = function (g) {
      this.settle_(1, g);
    };
    e.prototype.settle_ = function (g, h) {
      if (0 != this.state_) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.state_);
      this.state_ = g;
      this.result_ = h;
      2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
      this.executeOnSettledCallbacks_();
    };
    e.prototype.scheduleUnhandledRejectionCheck_ = function () {
      var g = this;
      d(function () {
        if (g.notifyUnhandledRejection_()) {
          var h = $jscomp.global.console;
          "undefined" !== typeof h && h.error(g.result_);
        }
      }, 1);
    };
    e.prototype.notifyUnhandledRejection_ = function () {
      if (this.isRejectionHandled_) return !1;
      var g = $jscomp.global.CustomEvent,
        h = $jscomp.global.Event,
        k = $jscomp.global.dispatchEvent;
      if ("undefined" === typeof k) return !0;
      "function" === typeof g
        ? (g = new g("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof h
        ? (g = new h("unhandledrejection", { cancelable: !0 }))
        : ((g = $jscomp.global.document.createEvent("CustomEvent")), g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.result_;
      return k(g);
    };
    e.prototype.executeOnSettledCallbacks_ = function () {
      if (null != this.onSettledCallbacks_) {
        for (var g = 0; g < this.onSettledCallbacks_.length; ++g) f.asyncExecute(this.onSettledCallbacks_[g]);
        this.onSettledCallbacks_ = null;
      }
    };
    var f = new b();
    e.prototype.settleSameAsPromise_ = function (g) {
      var h = this.createResolveAndReject_();
      g.callWhenSettled_(h.resolve, h.reject);
    };
    e.prototype.settleSameAsThenable_ = function (g, h) {
      var k = this.createResolveAndReject_();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    e.prototype.then = function (g, h) {
      function k(p, q) {
        return "function" == typeof p
          ? function (r) {
              try {
                l(p(r));
              } catch (t) {
                m(t);
              }
            }
          : q;
      }
      var l,
        m,
        n = new e(function (p, q) {
          l = p;
          m = q;
        });
      this.callWhenSettled_(k(g, l), k(h, m));
      return n;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.callWhenSettled_ = function (g, h) {
      function k() {
        switch (l.state_) {
          case 1:
            g(l.result_);
            break;
          case 2:
            h(l.result_);
            break;
          default:
            throw Error("Unexpected state: " + l.state_);
        }
      }
      var l = this;
      null == this.onSettledCallbacks_ ? f.asyncExecute(k) : this.onSettledCallbacks_.push(k);
      this.isRejectionHandled_ = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, k) {
        k(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, k) {
        for (var l = $jscomp.makeIterator(g), m = l.next(); !m.done; m = l.next()) c(m.value).callWhenSettled_(h, k);
      });
    };
    e.all = function (g) {
      var h = $jscomp.makeIterator(g),
        k = h.next();
      return k.done
        ? c([])
        : new e(function (l, m) {
            function n(r) {
              return function (t) {
                p[r] = t;
                q--;
                0 == q && l(p);
              };
            }
            var p = [],
              q = 0;
            do p.push(void 0), q++, c(k.value).callWhenSettled_(n(p.length - 1), m), (k = h.next());
            while (!k.done);
          });
    };
    return e;
  },
  "es6",
  "es3"
);
$jscomp.owns = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
$jscomp.assign =
  $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign
    ? Object.assign
    : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
          var d = arguments[c];
          if (d) for (var e in d) $jscomp.owns(d, e) && (a[e] = d[e]);
        }
        return a;
      };
$jscomp.polyfill(
  "Object.assign",
  function (a) {
    return a || $jscomp.assign;
  },
  "es6",
  "es3"
);
$jscomp.checkEs6ConformanceViaProxy = function () {
  try {
    var a = {},
      b = Object.create(
        new $jscomp.global.Proxy(a, {
          get: function (c, d, e) {
            return c == a && "q" == d && e == b;
          }
        })
      );
    return !0 === b.q;
  } catch (c) {
    return !1;
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.polyfill(
  "WeakMap",
  function (a) {
    function b() {
      if (!a || !Object.seal) return !1;
      try {
        var l = Object.seal({}),
          m = Object.seal({}),
          n = new a([
            [l, 2],
            [m, 3]
          ]);
        if (2 != n.get(l) || 3 != n.get(m)) return !1;
        n.delete(l);
        n.set(m, 4);
        return !n.has(l) && 4 == n.get(m);
      } catch (p) {
        return !1;
      }
    }
    function c() {}
    function d(l) {
      var m = typeof l;
      return ("object" === m && null !== l) || "function" === m;
    }
    function e(l) {
      if (!$jscomp.owns(l, g)) {
        var m = new c();
        $jscomp.defineProperty(l, g, { value: m });
      }
    }
    function f(l) {
      if (!$jscomp.ISOLATE_POLYFILLS) {
        var m = Object[l];
        m &&
          (Object[l] = function (n) {
            if (n instanceof c) return n;
            Object.isExtensible(n) && e(n);
            return m(n);
          });
      }
    }
    if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
      if (a && $jscomp.ES6_CONFORMANCE) return a;
    } else if (b()) return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0,
      k = function (l) {
        this.id_ = (h += Math.random() + 1).toString();
        if (l) {
          l = $jscomp.makeIterator(l);
          for (var m; !(m = l.next()).done; ) (m = m.value), this.set(m[0], m[1]);
        }
      };
    k.prototype.set = function (l, m) {
      if (!d(l)) throw Error("Invalid WeakMap key");
      e(l);
      if (!$jscomp.owns(l, g)) throw Error("WeakMap key fail: " + l);
      l[g][this.id_] = m;
      return this;
    };
    k.prototype.get = function (l) {
      return d(l) && $jscomp.owns(l, g) ? l[g][this.id_] : void 0;
    };
    k.prototype.has = function (l) {
      return d(l) && $jscomp.owns(l, g) && $jscomp.owns(l[g], this.id_);
    };
    k.prototype.delete = function (l) {
      return d(l) && $jscomp.owns(l, g) && $jscomp.owns(l[g], this.id_) ? delete l[g][this.id_] : !1;
    };
    return k;
  },
  "es6",
  "es3"
);
$jscomp.MapEntry = function () {};
$jscomp.polyfill(
  "Map",
  function (a) {
    function b() {
      if ($jscomp.ASSUME_NO_NATIVE_MAP || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
        return !1;
      try {
        var k = Object.seal({ x: 4 }),
          l = new a($jscomp.makeIterator([[k, "s"]]));
        if ("s" != l.get(k) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size) return !1;
        var m = l.entries(),
          n = m.next();
        if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
        n = m.next();
        return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0;
      } catch (p) {
        return !1;
      }
    }
    if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
      if (a && $jscomp.ES6_CONFORMANCE) return a;
    } else if (b()) return a;
    var c = new WeakMap(),
      d = function (k) {
        this.data_ = {};
        this.head_ = g();
        this.size = 0;
        if (k) {
          k = $jscomp.makeIterator(k);
          for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
        }
      };
    d.prototype.set = function (k, l) {
      k = 0 === k ? 0 : k;
      var m = e(this, k);
      m.list || (m.list = this.data_[m.id] = []);
      m.entry
        ? (m.entry.value = l)
        : ((m.entry = { next: this.head_, previous: this.head_.previous, head: this.head_, key: k, value: l }),
          m.list.push(m.entry),
          (this.head_.previous.next = m.entry),
          (this.head_.previous = m.entry),
          this.size++);
      return this;
    };
    d.prototype.delete = function (k) {
      k = e(this, k);
      return k.entry && k.list
        ? (k.list.splice(k.index, 1),
          k.list.length || delete this.data_[k.id],
          (k.entry.previous.next = k.entry.next),
          (k.entry.next.previous = k.entry.previous),
          (k.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    d.prototype.clear = function () {
      this.data_ = {};
      this.head_ = this.head_.previous = g();
      this.size = 0;
    };
    d.prototype.has = function (k) {
      return !!e(this, k).entry;
    };
    d.prototype.get = function (k) {
      return (k = e(this, k).entry) && k.value;
    };
    d.prototype.entries = function () {
      return f(this, function (k) {
        return [k.key, k.value];
      });
    };
    d.prototype.keys = function () {
      return f(this, function (k) {
        return k.key;
      });
    };
    d.prototype.values = function () {
      return f(this, function (k) {
        return k.value;
      });
    };
    d.prototype.forEach = function (k, l) {
      for (var m = this.entries(), n; !(n = m.next()).done; ) (n = n.value), k.call(l, n[1], n[0], this);
    };
    d.prototype[Symbol.iterator] = d.prototype.entries;
    var e = function (k, l) {
        var m = l && typeof l;
        "object" == m || "function" == m ? (c.has(l) ? (m = c.get(l)) : ((m = "" + ++h), c.set(l, m))) : (m = "p_" + l);
        var n = k.data_[m];
        if (n && $jscomp.owns(k.data_, m))
          for (k = 0; k < n.length; k++) {
            var p = n[k];
            if ((l !== l && p.key !== p.key) || l === p.key) return { id: m, list: n, index: k, entry: p };
          }
        return { id: m, list: n, index: -1, entry: void 0 };
      },
      f = function (k, l) {
        var m = k.head_;
        return $jscomp.iteratorPrototype(function () {
          if (m) {
            for (; m.head != k.head_; ) m = m.previous;
            for (; m.next != m.head; ) return (m = m.next), { done: !1, value: l(m) };
            m = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      g = function () {
        var k = {};
        return (k.previous = k.next = k.head = k);
      },
      h = 0;
    return d;
  },
  "es6",
  "es3"
);
$jscomp.checkStringArgs = function (a, b, c) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
  return a + "";
};
$jscomp.polyfill(
  "String.prototype.endsWith",
  function (a) {
    return a
      ? a
      : function (b, c) {
          var d = $jscomp.checkStringArgs(this, b, "endsWith");
          b += "";
          void 0 === c && (c = d.length);
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var e = b.length; 0 < e && 0 < c; ) if (d[--c] != b[--e]) return !1;
          return 0 >= e;
        };
  },
  "es6",
  "es3"
);
$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));
  for (var d = a.length, e = 0; e < d; e++) {
    var f = a[e];
    if (b.call(c, f, e, a)) return { i: e, v: f };
  }
  return { i: -1, v: void 0 };
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (a) {
    return a
      ? a
      : function (b, c) {
          return $jscomp.findInternal(this, b, c).v;
        };
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "String.prototype.startsWith",
  function (a) {
    return a
      ? a
      : function (b, c) {
          var d = $jscomp.checkStringArgs(this, b, "startsWith");
          b += "";
          var e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
          return g >= f;
        };
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Number.isFinite",
  function (a) {
    return a
      ? a
      : function (b) {
          return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "String.prototype.repeat",
  function (a) {
    return a
      ? a
      : function (b) {
          var c = $jscomp.checkStringArgs(this, null, "repeat");
          if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
          b |= 0;
          for (var d = ""; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
          return d;
        };
  },
  "es6",
  "es3"
);
$jscomp.iteratorFromArray = function (a, b) {
  a instanceof String && (a += "");
  var c = 0,
    d = !1,
    e = {
      next: function () {
        if (!d && c < a.length) {
          var f = c++;
          return { value: b(f, a[f]), done: !1 };
        }
        d = !0;
        return { done: !0, value: void 0 };
      }
    };
  e[Symbol.iterator] = function () {
    return e;
  };
  return e;
};
$jscomp.polyfill(
  "Array.prototype.entries",
  function (a) {
    return a
      ? a
      : function () {
          return $jscomp.iteratorFromArray(this, function (b, c) {
            return [b, c];
          });
        };
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Array.prototype.keys",
  function (a) {
    return a
      ? a
      : function () {
          return $jscomp.iteratorFromArray(this, function (b) {
            return b;
          });
        };
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Object.setPrototypeOf",
  function (a) {
    return a || $jscomp.setPrototypeOf;
  },
  "es6",
  "es5"
);
$jscomp.polyfill(
  "Set",
  function (a) {
    function b() {
      if ($jscomp.ASSUME_NO_NATIVE_SET || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
        return !1;
      try {
        var d = Object.seal({ x: 4 }),
          e = new a($jscomp.makeIterator([d]));
        if (!e.has(d) || 1 != e.size || e.add(d) != e || 1 != e.size || e.add({ x: 4 }) != e || 2 != e.size) return !1;
        var f = e.entries(),
          g = f.next();
        if (g.done || g.value[0] != d || g.value[1] != d) return !1;
        g = f.next();
        return g.done || g.value[0] == d || 4 != g.value[0].x || g.value[1] != g.value[0] ? !1 : f.next().done;
      } catch (h) {
        return !1;
      }
    }
    if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
      if (a && $jscomp.ES6_CONFORMANCE) return a;
    } else if (b()) return a;
    var c = function (d) {
      this.map_ = new Map();
      if (d) {
        d = $jscomp.makeIterator(d);
        for (var e; !(e = d.next()).done; ) this.add(e.value);
      }
      this.size = this.map_.size;
    };
    c.prototype.add = function (d) {
      d = 0 === d ? 0 : d;
      this.map_.set(d, d);
      this.size = this.map_.size;
      return this;
    };
    c.prototype.delete = function (d) {
      d = this.map_.delete(d);
      this.size = this.map_.size;
      return d;
    };
    c.prototype.clear = function () {
      this.map_.clear();
      this.size = 0;
    };
    c.prototype.has = function (d) {
      return this.map_.has(d);
    };
    c.prototype.entries = function () {
      return this.map_.entries();
    };
    c.prototype.values = function () {
      return this.map_.values();
    };
    c.prototype.keys = c.prototype.values;
    c.prototype[Symbol.iterator] = c.prototype.values;
    c.prototype.forEach = function (d, e) {
      var f = this;
      this.map_.forEach(function (g) {
        return d.call(e, g, g, f);
      });
    };
    return c;
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Array.prototype.values",
  function (a) {
    return a
      ? a
      : function () {
          return $jscomp.iteratorFromArray(this, function (b, c) {
            return c;
          });
        };
  },
  "es8",
  "es3"
);
$jscomp.polyfill(
  "Array.from",
  function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
          if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, g++));
          } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Object.entries",
  function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) $jscomp.owns(b, d) && c.push([d, b[d]]);
          return c;
        };
  },
  "es8",
  "es3"
);
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
          registerEs6ModuleExports: function (g, h, k) {
            k && (goog.loadedModules_[k] = { exports: h, type: goog.ModuleType.ES6, moduleId: k || "" });
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
      var n = "",
        p = goog.getScriptNonce_();
      p && (n = ' nonce="' + p + '"');
      l = m
        ? '<script type="module" crossorigin' + n + ">" + m + "\x3c/script>"
        : '<script type="module" crossorigin src="' + l + '"' + n + ">\x3c/script>";
      d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(l) : l);
    }
    function c(l, m) {
      var n = d.createElement("script");
      n.defer = !0;
      n.async = !1;
      n.type = "module";
      n.setAttribute("crossorigin", !0);
      var p = goog.getScriptNonce_();
      p && (n.nonce = p);
      m
        ? (n.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(m) : m)
        : (n.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(l) : l);
      d.head.appendChild(n);
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
      var k = goog.Dependency.registerCallback_(function () {
        goog.Dependency.unregisterCallback_(k);
        a.clearModuleState();
        a.loaded();
      });
      f(void 0, 'goog.Dependency.callback_("' + k + '")');
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
        n = goog.getScriptNonce_();
      n =
        "<script" +
        (n ? ' nonce="' + n + '"' : "") +
        ">" +
        goog.protectScriptTag_('goog.Dependency.callback_("' + m + '");') +
        "\x3c/script>";
      l.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(n) : n);
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
          var k = h.onreadystatechange;
          h.onreadystatechange = function () {
            "interactive" == h.readyState && ((h.onreadystatechange = k), c(), a.resume());
            "function" === typeof k && k.apply(void 0, arguments);
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
var module$exports$gdocs$AnimatedBrowserIconParams = {
  AnimatedBrowserIconParams: function (a) {
    this.redrawMsecs_ = this.val_("redrawMsecs", 200, a);
    this.alphaBegin_ = this.val_("alphaBegin", 0.1, a);
    this.alphaEnd_ = this.val_("alphaEnd", 0.8, a);
    this.scaleBegin_ = this.val_("scaleBegin", 0.3, a);
    this.scaleEnd_ = this.val_("scaleEnd", 1, a);
    var b = this.val_("period", 4e3, a);
    this.alphaPhasePeriod_ = this.val_("alphaPhasePeriod", b, a);
    this.scalePhasePeriod_ = this.val_("scalePhasePeriod", b, a);
    this.rotationPeriod_ = this.val_("rotationPeriod", b, a);
  }
};
module$exports$gdocs$AnimatedBrowserIconParams.AnimatedBrowserIconParams.prototype.getRedrawMsecs = function () {
  return this.redrawMsecs_;
};
module$exports$gdocs$AnimatedBrowserIconParams.AnimatedBrowserIconParams.prototype.val_ = function (a, b, c) {
  return c && null != c[a] ? c[a] : b;
};
module$exports$gdocs$AnimatedBrowserIconParams.AnimatedBrowserIconParams.prototype.computeAlpha = function (a) {
  return this.computeOscilation_(a, this.alphaPhasePeriod_, this.alphaBegin_, this.alphaEnd_);
};
module$exports$gdocs$AnimatedBrowserIconParams.AnimatedBrowserIconParams.prototype.computeScale = function (a) {
  return this.computeOscilation_(a, this.scalePhasePeriod_, this.scaleBegin_, this.scaleEnd_);
};
module$exports$gdocs$AnimatedBrowserIconParams.AnimatedBrowserIconParams.prototype.computeRadians = function (a) {
  a = this.computePercentComplete_(a, this.rotationPeriod_);
  return 2 * Math.PI * a;
};
module$exports$gdocs$AnimatedBrowserIconParams.AnimatedBrowserIconParams.prototype.computeOscilation_ = function (a, b, c, d) {
  a = this.computePercentComplete_(a, b);
  return c + 2 * (d - c) * (0.5 >= a ? a : 1 - a);
};
module$exports$gdocs$AnimatedBrowserIconParams.AnimatedBrowserIconParams.prototype.computePercentComplete_ = function (a, b) {
  return (a % b) / b;
};
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
var module$exports$gdocs$AnimatedBrowserIcon = {
  AnimatedBrowserIcon: function (a, b, c) {
    var d = this;
    this.browserIconPath_ = a;
    this.browserIconSize_ = b;
    this.params_ = c;
    this.numInProgress_ = 0;
    this.browserIconCanvas_ = new OffscreenCanvas(0, 0);
    this.context_ = this.browserIconCanvas_.getContext("2d");
    this.image_ = null;
    fetch(this.browserIconPath_)
      .then(function (e) {
        return e.blob();
      })
      .then(function (e) {
        return createImageBitmap(e);
      })
      .then(function (e) {
        d.image_ = e;
      })
      .catch(function (e) {
        module$contents$gdlog_error("AnimatedBrowserIcon", "Error fetching browser action icon.");
      });
    this.lastStart_ = this.intervalId_ = 0;
    this.hasDrawn_ = !1;
  }
};
module$exports$gdocs$AnimatedBrowserIcon.AnimatedBrowserIcon.prototype.start = function () {
  module$contents$gdlog_info("AnimatedBrowserIcon.start", "Initial numInProgress:" + this.numInProgress_);
  0 == this.numInProgress_++ &&
    ((this.lastStart_ = Date.now()),
    this.animate_(),
    (this.intervalId_ = setInterval(this.animate_.bind(this), this.params_.getRedrawMsecs())));
};
module$exports$gdocs$AnimatedBrowserIcon.AnimatedBrowserIcon.prototype.stop = function () {
  module$contents$gdlog_info("AnimatedBrowserIcon.stop", "Initial numInProgress:" + this.numInProgress_);
  if (0 == --this.numInProgress_) {
    clearInterval(this.intervalId_);
    this.intervalId_ = 0;
    var a = {};
    a[this.browserIconSize_] = this.browserIconPath_;
    chrome.action.setIcon({ path: a });
  }
};
module$exports$gdocs$AnimatedBrowserIcon.AnimatedBrowserIcon.prototype.animate_ = function () {
  var a = Date.now() - this.lastStart_;
  if (a > module$contents$gdocs$AnimatedBrowserIcon_MAX_ANIMATE_MSECS)
    module$contents$gdlog_warn(
      "AnimatedBrowserIcon.animate",
      "Stopping rogue animation. numInProgress:" + this.numInProgress_ + (" deltaMsecs:" + a)
    ),
      (this.numInProgress_ = 1),
      this.stop();
  else if (null == this.image_) module$contents$gdlog_info("AnimatedBrowserIcon.animate", "Image load incomplete or failed");
  else {
    this.hasDrawn_ ||
      ((this.browserIconCanvas_.width = this.image_.width), (this.browserIconCanvas_.height = this.image_.height), (this.hasDrawn_ = !0));
    a = this.mutate_(a, this.image_.width, this.image_.height);
    var b = {};
    b[this.browserIconSize_] = a;
    chrome.action.setIcon({ imageData: b });
  }
};
module$exports$gdocs$AnimatedBrowserIcon.AnimatedBrowserIcon.prototype.mutate_ = function (a, b, c) {
  var d = this.params_.computeScale(a);
  a = this.params_.computeRadians(a);
  this.context_.clearRect(0, 0, b, c);
  this.context_.save();
  this.context_.translate(b / 2, c / 2);
  this.context_.globalAlpha = 0.8;
  this.context_.scale(d, d);
  this.context_.rotate(a);
  this.context_.translate(-b / 2, -c / 2);
  this.context_.drawImage(this.image_, 0, 0);
  this.context_.restore();
  return this.context_.getImageData(0, 0, b, c);
};
var module$contents$gdocs$AnimatedBrowserIcon_MAX_ANIMATE_MSECS = 45e3;
var module$exports$gdocs$data = {
  EXTENSIONS: {
    "application/msword": "doc",
    "application/pdf": "pdf",
    "application/rtf": "rtf",
    "application/vnd.ms-excel": "xls",
    "application/vnd.ms-powerpoint": "ppt",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
    "application/x-chrome-extension": "crx",
    "application/x-gzip": "gzip",
    "application/x-pdf": "pdf",
    "application/zip": "zip",
    "audio/mp4": "mp4",
    "audio/mpeg": "mp3",
    "audio/ogg": "ogg",
    "audio/vnd.wave": "wav",
    "image/gif": "gif",
    "image/jpeg": "jpg",
    "image/pjpeg": "jpg",
    "image/png": "png",
    "image/svg+xml": "svg",
    "image/tiff": "tif",
    "image/vnd.microsoft.icon": "ico",
    "text/css": "css",
    "text/csv": "csv",
    "text/html": "html",
    "text/mhtml": "mht",
    "text/plain": "txt",
    "text/tsv": "tsv",
    "text/xml": "xml",
    "video/mp4": "mp4",
    "video/mpeg": "mpg",
    "video/ogg": "ogg"
  },
  CONVERTIBLE: {
    "application/msword": !0,
    "application/rtf": !0,
    "application/vnd.ms-excel": !0,
    "application/vnd.ms-powerpoint": !0,
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": !0,
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": !0,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": !0,
    "text/csv": !0,
    "text/html": !0,
    "text/plain": !0,
    "text/tsv": !0
  }
};
var module$exports$gdocs$ResumableUploaderInterface = { ResumableUploaderInterface: function () {} };
module$exports$gdocs$ResumableUploaderInterface.ResumableUploaderInterface.prototype.startResumableUpload = function (a) {};
var module$exports$gdocs$DataSource = { DataSource: function () {} };
module$exports$gdocs$DataSource.DataSource.prototype.startWhenReady = function (a) {
  a.startResumableUpload(this.getContentType());
};
goog.debug = {};
function module$contents$goog$debug$Error_DebugError(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, module$contents$goog$debug$Error_DebugError);
  else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
  this.reportErrorToServer = !0;
}
goog.inherits(module$contents$goog$debug$Error_DebugError, Error);
module$contents$goog$debug$Error_DebugError.prototype.name = "CustomError";
goog.debug.Error = module$contents$goog$debug$Error_DebugError;
goog.dom = {};
goog.dom.NodeType = {
  ELEMENT: 1,
  ATTRIBUTE: 2,
  TEXT: 3,
  CDATA_SECTION: 4,
  ENTITY_REFERENCE: 5,
  ENTITY: 6,
  PROCESSING_INSTRUCTION: 7,
  COMMENT: 8,
  DOCUMENT: 9,
  DOCUMENT_TYPE: 10,
  DOCUMENT_FRAGMENT: 11,
  NOTATION: 12
};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
function module$contents$goog$asserts_AssertionError(a, b) {
  module$contents$goog$debug$Error_DebugError.call(this, module$contents$goog$asserts_subs(a, b));
  this.messagePattern = a;
}
goog.inherits(module$contents$goog$asserts_AssertionError, module$contents$goog$debug$Error_DebugError);
goog.asserts.AssertionError = module$contents$goog$asserts_AssertionError;
module$contents$goog$asserts_AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function (a) {
  throw a;
};
var module$contents$goog$asserts_errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
function module$contents$goog$asserts_subs(a, b) {
  a = a.split("%s");
  for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  return c + a[d];
}
function module$contents$goog$asserts_doAssertFailure(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else a && ((e += ": " + a), (f = b));
  a = new module$contents$goog$asserts_AssertionError("" + e, f || []);
  module$contents$goog$asserts_errorHandler_(a);
}
goog.asserts.setErrorHandler = function (a) {
  goog.asserts.ENABLE_ASSERTS && (module$contents$goog$asserts_errorHandler_ = a);
};
goog.asserts.assert = function (a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !a && module$contents$goog$asserts_doAssertFailure("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertExists = function (a, b, c) {
  goog.asserts.ENABLE_ASSERTS &&
    null == a &&
    module$contents$goog$asserts_doAssertFailure("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.fail = function (a, b) {
  goog.asserts.ENABLE_ASSERTS &&
    module$contents$goog$asserts_errorHandler_(
      new module$contents$goog$asserts_AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1))
    );
};
goog.asserts.assertNumber = function (a, b, c) {
  goog.asserts.ENABLE_ASSERTS &&
    "number" !== typeof a &&
    module$contents$goog$asserts_doAssertFailure(
      "Expected number but got %s: %s.",
      [goog.typeOf(a), a],
      b,
      Array.prototype.slice.call(arguments, 2)
    );
  return a;
};
goog.asserts.assertString = function (a, b, c) {
  goog.asserts.ENABLE_ASSERTS &&
    "string" !== typeof a &&
    module$contents$goog$asserts_doAssertFailure(
      "Expected string but got %s: %s.",
      [goog.typeOf(a), a],
      b,
      Array.prototype.slice.call(arguments, 2)
    );
  return a;
};
goog.asserts.assertFunction = function (a, b, c) {
  goog.asserts.ENABLE_ASSERTS &&
    "function" !== typeof a &&
    module$contents$goog$asserts_doAssertFailure(
      "Expected function but got %s: %s.",
      [goog.typeOf(a), a],
      b,
      Array.prototype.slice.call(arguments, 2)
    );
  return a;
};
goog.asserts.assertObject = function (a, b, c) {
  goog.asserts.ENABLE_ASSERTS &&
    !goog.isObject(a) &&
    module$contents$goog$asserts_doAssertFailure(
      "Expected object but got %s: %s.",
      [goog.typeOf(a), a],
      b,
      Array.prototype.slice.call(arguments, 2)
    );
  return a;
};
goog.asserts.assertArray = function (a, b, c) {
  goog.asserts.ENABLE_ASSERTS &&
    !Array.isArray(a) &&
    module$contents$goog$asserts_doAssertFailure(
      "Expected array but got %s: %s.",
      [goog.typeOf(a), a],
      b,
      Array.prototype.slice.call(arguments, 2)
    );
  return a;
};
goog.asserts.assertBoolean = function (a, b, c) {
  goog.asserts.ENABLE_ASSERTS &&
    "boolean" !== typeof a &&
    module$contents$goog$asserts_doAssertFailure(
      "Expected boolean but got %s: %s.",
      [goog.typeOf(a), a],
      b,
      Array.prototype.slice.call(arguments, 2)
    );
  return a;
};
goog.asserts.assertElement = function (a, b, c) {
  !goog.asserts.ENABLE_ASSERTS ||
    (goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT) ||
    module$contents$goog$asserts_doAssertFailure(
      "Expected Element but got %s: %s.",
      [goog.typeOf(a), a],
      b,
      Array.prototype.slice.call(arguments, 2)
    );
  return a;
};
goog.asserts.assertInstanceof = function (a, b, c, d) {
  !goog.asserts.ENABLE_ASSERTS ||
    a instanceof b ||
    module$contents$goog$asserts_doAssertFailure(
      "Expected instanceof %s but got %s.",
      [module$contents$goog$asserts_getType(b), module$contents$goog$asserts_getType(a)],
      c,
      Array.prototype.slice.call(arguments, 3)
    );
  return a;
};
goog.asserts.assertFinite = function (a, b, c) {
  !goog.asserts.ENABLE_ASSERTS ||
    ("number" == typeof a && isFinite(a)) ||
    module$contents$goog$asserts_doAssertFailure(
      "Expected %s to be a finite number but it is not.",
      [a],
      b,
      Array.prototype.slice.call(arguments, 2)
    );
  return a;
};
function module$contents$goog$asserts_getType(a) {
  return a instanceof Function
    ? a.displayName || a.name || "unknown type name"
    : a instanceof Object
    ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
    : null === a
    ? "null"
    : typeof a;
}
var module$exports$gdocs$CaptureDataSource = {
  CaptureDataSource: function (a) {
    module$exports$gdocs$DataSource.DataSource.call(this);
    this.capturer_ = a;
  }
};
$jscomp.inherits(module$exports$gdocs$CaptureDataSource.CaptureDataSource, module$exports$gdocs$DataSource.DataSource);
module$exports$gdocs$CaptureDataSource.CaptureDataSource.prototype.shouldConvert = function () {
  return this.capturer_.getAllowConvert() && this.getContentType() in module$exports$gdocs$data.CONVERTIBLE;
};
module$exports$gdocs$CaptureDataSource.CaptureDataSource.prototype.getDriveDescription = function () {
  return this.capturer_.getUrl() || "";
};
module$exports$gdocs$CaptureDataSource.CaptureDataSource.prototype.getDriveFilename = function () {
  return this.capturer_.getFilename();
};
module$exports$gdocs$CaptureDataSource.CaptureDataSource.prototype.startWhenReady = function (a) {
  null != this.capturer_.getDownloadResults() ? a.startResumableUpload(this.getContentType()) : this.capturer_.setResumableUploader(a);
};
module$exports$gdocs$CaptureDataSource.CaptureDataSource.prototype.getContentType = function () {
  return (0, goog.asserts.assert)(this.capturer_.getDownloadResults()).getContentType();
};
module$exports$gdocs$CaptureDataSource.CaptureDataSource.prototype.getSize = function () {
  return (0, goog.asserts.assert)(this.capturer_.getDownloadResults()).getBlobData().size;
};
module$exports$gdocs$CaptureDataSource.CaptureDataSource.prototype.getData = function (a, b) {
  return (0, goog.asserts.assert)(this.capturer_.getDownloadResults()).getBlobData().slice(a, b);
};
var module$exports$gdocs$DownloadResults = {
  DownloadResults: function (a, b) {
    this.contentType_ = a;
    this.blobData_ = b;
  }
};
module$exports$gdocs$DownloadResults.DownloadResults.prototype.getContentType = function () {
  return this.contentType_;
};
module$exports$gdocs$DownloadResults.DownloadResults.prototype.getBlobData = function () {
  return this.blobData_;
};
goog.exportProperty(
  module$exports$gdocs$DownloadResults.DownloadResults.prototype,
  "getContentType",
  module$exports$gdocs$DownloadResults.DownloadResults.prototype.getContentType
);
goog.math = {};
goog.math.Size = function (a, b) {
  this.width = a;
  this.height = b;
};
goog.math.Size.equals = function (a, b) {
  return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1;
};
goog.math.Size.prototype.clone = function () {
  return new goog.math.Size(this.width, this.height);
};
goog.DEBUG &&
  (goog.math.Size.prototype.toString = function () {
    return "(" + this.width + " x " + this.height + ")";
  });
goog.math.Size.prototype.getLongest = function () {
  return Math.max(this.width, this.height);
};
goog.math.Size.prototype.getShortest = function () {
  return Math.min(this.width, this.height);
};
goog.math.Size.prototype.area = function () {
  return this.width * this.height;
};
goog.math.Size.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};
goog.math.Size.prototype.aspectRatio = function () {
  return this.width / this.height;
};
goog.math.Size.prototype.isEmpty = function () {
  return !this.area();
};
goog.math.Size.prototype.ceil = function () {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
goog.math.Size.prototype.fitsInside = function (a) {
  return this.width <= a.width && this.height <= a.height;
};
goog.math.Size.prototype.floor = function () {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
goog.math.Size.prototype.round = function () {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
goog.math.Size.prototype.scale = function (a, b) {
  this.width *= a;
  this.height *= "number" === typeof b ? b : a;
  return this;
};
goog.math.Size.prototype.scaleToCover = function (a) {
  a = this.aspectRatio() <= a.aspectRatio() ? a.width / this.width : a.height / this.height;
  return this.scale(a);
};
goog.math.Size.prototype.scaleToFit = function (a) {
  a = this.aspectRatio() > a.aspectRatio() ? a.width / this.width : a.height / this.height;
  return this.scale(a);
};
var module$exports$gdocs$Constants = {
  UploadPageParams: { ACTION_ID: "aid", TAB_ID: "tid", IS_CONTEXT_CLICK_UPLOAD: "ccu" },
  Impression: {
    OTHER: 0,
    LINK: 2,
    IMAGE: 3,
    AUDIO: 4,
    VIDEO: 5,
    PAGE_ACTION_URL: 6,
    PAGE_ACTION_DOC: 7,
    PAGE_ACTION_HTML: 8,
    PAGE_ACTION_CAPTURE_IMAGE_VISIBLE: 9,
    PAGE_ACTION_CAPTURE_MHTML: 10,
    PAGE_ACTION_CAPTURE_IMAGE_ENTIRE: 15,
    PAGE_ACTION_CAPTURE_IMAGE_SELECT: 16
  },
  HttpStatus: { OK: 200, CREATED: 201, ACCEPTED: 202, RESUME_INCOMPLETE: 308, UNAUTHORIZED: 401 }
};
module$exports$gdocs$Constants.global = { MAX_GENERATED_TITLE_LEN: 50, MAX_SUFFIX_LEN: 8, SAVE_DIALOG_SIZE: new goog.math.Size(417, 170) };
module$exports$gdocs$Constants.MimeType = {
  ATOM: "application/atom+xml",
  HTML: "text/html",
  MHTML: "text/mhtml",
  JSON: "application/json",
  OCTET_STREAM: "application/octet-stream",
  PLAIN: "text/plain",
  PDF: "application/pdf",
  PNG: "image/png",
  X_PDF: "application/x-pdf",
  XML: "text/xml"
};
module$exports$gdocs$Constants.ActionId = {
  ACL_DOMAIN: "default-acl-domain",
  ACL_NONE: "default-acl-none",
  BUG_INTERNAL: "bug-internal",
  CHANGE_FOLDER: "change-folder",
  FEEDBACK_INTERNAL: "feedback-internal",
  HELP: "help",
  HTML: "html",
  HTML_DOC: "htmldoc",
  IMAGE_ENTIRE: "image-entire",
  IMAGE_VISIBLE: "image-visible",
  IMAGE_SELECT: "image-select",
  MHTML: "mhtml",
  OPTIONS: "options",
  SEND_FEEDBACK: "send-feedback",
  URL: "url"
};
module$exports$gdocs$Constants.Visibility = { DEFAULT: "DEFAULT", PRIVATE: "PRIVATE" };
var module$exports$gdocs$Options = {},
  module$contents$gdocs$Options_instance = null;
module$exports$gdocs$Options.Options = function () {
  this.autoOpen_ = !1;
  this.defaultAcl_ = module$exports$gdocs$Constants.ActionId.ACL_NONE;
  this.htmlFormat_ = module$exports$gdocs$Constants.ActionId.IMAGE_ENTIRE;
  this.convertToGoogleFormat_ = !1;
  this.userFolderMap_ = {};
  this.initialized_ = chrome.storage.sync
    .get([
      module$contents$gdocs$Options_StorageKeys.AUTO_OPEN,
      module$contents$gdocs$Options_StorageKeys.DEFAULT_ACL,
      module$contents$gdocs$Options_StorageKeys.HTML_FORMAT,
      module$contents$gdocs$Options_StorageKeys.CONVERT_TO_GOOGLE_FORMAT,
      module$contents$gdocs$Options_StorageKeys.USER_FOLDER_MAP
    ])
    .then(this.handleGetStorage_.bind(this));
  chrome.storage.onChanged.addListener(this.handleStorageChange_.bind(this));
};
module$exports$gdocs$Options.Options.getInstance = function () {
  module$contents$gdocs$Options_instance || (module$contents$gdocs$Options_instance = new module$exports$gdocs$Options.Options());
  return module$contents$gdocs$Options_instance.isInitialized().then(function () {
    return module$contents$gdocs$Options_instance;
  });
};
module$exports$gdocs$Options.Options.prototype.isInitialized = function () {
  return this.initialized_;
};
module$exports$gdocs$Options.Options.prototype.getAutoOpen = function () {
  return this.autoOpen_;
};
module$exports$gdocs$Options.Options.prototype.setAutoOpen = function (a) {
  this.autoOpen_ = a;
  var b = {};
  chrome.storage.sync.set(((b[module$contents$gdocs$Options_StorageKeys.AUTO_OPEN] = a), b));
};
module$exports$gdocs$Options.Options.prototype.getDefaultAcl = function () {
  return this.defaultAcl_;
};
module$exports$gdocs$Options.Options.prototype.setDefaultAcl = function (a) {
  this.defaultAcl_ = a;
  var b = {};
  chrome.storage.sync.set(((b[module$contents$gdocs$Options_StorageKeys.DEFAULT_ACL] = a), b));
};
module$exports$gdocs$Options.Options.prototype.getHtmlFormat = function () {
  return this.htmlFormat_;
};
module$exports$gdocs$Options.Options.prototype.setHtmlFormat = function (a) {
  this.htmlFormat_ = a;
  var b = {};
  b[module$contents$gdocs$Options_StorageKeys.HTML_FORMAT] = a;
  chrome.storage.sync.set(b);
};
module$exports$gdocs$Options.Options.prototype.getConvertToGoogleFormat = function () {
  return this.convertToGoogleFormat_;
};
module$exports$gdocs$Options.Options.prototype.setConvertToGoogleFormat = function (a) {
  this.convertToGoogleFormat_ = a;
  var b = {};
  b[module$contents$gdocs$Options_StorageKeys.CONVERT_TO_GOOGLE_FORMAT] = a;
  chrome.storage.sync.set(b);
};
module$exports$gdocs$Options.Options.prototype.addDestFolderInfo = function (a, b) {
  this.userFolderMap_[a] = b;
  a = {};
  a[module$contents$gdocs$Options_StorageKeys.USER_FOLDER_MAP] = this.userFolderMap_;
  chrome.storage.sync.set(a);
};
module$exports$gdocs$Options.Options.prototype.getDestFolderInfo = function (a) {
  return (a = this.userFolderMap_[a]) ? a : null;
};
module$exports$gdocs$Options.Options.prototype.handleGetStorage_ = function (a) {
  chrome.runtime.lastError
    ? module$contents$gdlog_errorLastErr("Options.handleGetStorage", "Could not retrieve synchronized storage")
    : a &&
      (a[module$contents$gdocs$Options_StorageKeys.AUTO_OPEN] && (this.autoOpen_ = a[module$contents$gdocs$Options_StorageKeys.AUTO_OPEN]),
      a[module$contents$gdocs$Options_StorageKeys.DEFAULT_ACL] &&
        (this.defaultAcl_ = a[module$contents$gdocs$Options_StorageKeys.DEFAULT_ACL]),
      a[module$contents$gdocs$Options_StorageKeys.HTML_FORMAT] &&
        (this.htmlFormat_ = a[module$contents$gdocs$Options_StorageKeys.HTML_FORMAT]),
      a[module$contents$gdocs$Options_StorageKeys.CONVERT_TO_GOOGLE_FORMAT] &&
        (this.convertToGoogleFormat_ = a[module$contents$gdocs$Options_StorageKeys.CONVERT_TO_GOOGLE_FORMAT]),
      a[module$contents$gdocs$Options_StorageKeys.USER_FOLDER_MAP] &&
        (Object.assign(this.userFolderMap_, a[module$contents$gdocs$Options_StorageKeys.USER_FOLDER_MAP]),
        module$contents$gdlog_info("Options.handleGetStorage", "userFolderMap:" + module$contents$gdlog_prettyPrint(this.userFolderMap_))));
};
module$exports$gdocs$Options.Options.prototype.handleStorageChange_ = function (a, b) {
  if ("sync" == b) {
    module$contents$gdlog_fine("Options.handleStorageChange", module$contents$gdlog_prettyPrint(a));
    for (var c in a)
      c == module$contents$gdocs$Options_StorageKeys.AUTO_OPEN
        ? ((this.autoOpen_ = a[c].newValue), module$contents$gdlog_info("Options.handleStorageChange", "autoOpen sync:" + this.autoOpen_))
        : c == module$contents$gdocs$Options_StorageKeys.DEFAULT_ACL
        ? ((this.defaultAcl_ = a[c].newValue),
          module$contents$gdlog_info("Options.handleStorageChange", "defaultAcl sync:" + this.defaultAcl_))
        : c == module$contents$gdocs$Options_StorageKeys.HTML_FORMAT
        ? ((this.htmlFormat_ = a[c].newValue),
          module$contents$gdlog_info("Options.handleStorageChange", "htmlFormat sync:" + this.htmlFormat_))
        : c == module$contents$gdocs$Options_StorageKeys.CONVERT_TO_GOOGLE_FORMAT
        ? ((this.convertToGoogleFormat_ = a[c].newValue),
          module$contents$gdlog_info("Options.handleStorageChange", "convertToGoogleFormat sync:" + this.convertToGoogleFormat_))
        : c == module$contents$gdocs$Options_StorageKeys.USER_FOLDER_MAP &&
          (Object.assign(this.userFolderMap_, a[c].newValue),
          module$contents$gdlog_info(
            "Options.handleStorageChange",
            "userFolderMap sync:" + module$contents$gdlog_prettyPrint(this.userFolderMap_)
          ));
  }
};
goog.exportProperty(
  module$exports$gdocs$Options.Options.prototype,
  "setHtmlFormat",
  module$exports$gdocs$Options.Options.prototype.setHtmlFormat
);
goog.exportProperty(
  module$exports$gdocs$Options.Options.prototype,
  "setDefaultAcl",
  module$exports$gdocs$Options.Options.prototype.setDefaultAcl
);
var module$contents$gdocs$Options_StorageKeys = {
  AUTO_OPEN: "autoOpen",
  DEFAULT_ACL: "defaultAcl",
  HTML_FORMAT: "htmlFormat",
  CONVERT_TO_GOOGLE_FORMAT: "convertToGoogleFormat",
  USER_FOLDER_MAP: "userFolderMap"
};
var module$exports$gdocs$UploadPageInterface = { UploadPageInterface: function () {} };
module$exports$gdocs$UploadPageInterface.UploadPageInterface.prototype.getUploadParams = function () {};
module$exports$gdocs$UploadPageInterface.UploadPageInterface.prototype.startLoading = function (a, b) {};
module$exports$gdocs$UploadPageInterface.UploadPageInterface.prototype.isCancel = function () {};
module$exports$gdocs$UploadPageInterface.UploadPageInterface.prototype.clearCancel = function () {};
module$exports$gdocs$UploadPageInterface.UploadPageInterface.prototype.updateProgressText = function (a) {};
module$exports$gdocs$UploadPageInterface.UploadPageInterface.prototype.setPercent = function (a) {};
module$exports$gdocs$UploadPageInterface.UploadPageInterface.prototype.fatal = function (a) {};
module$exports$gdocs$UploadPageInterface.UploadPageInterface.prototype.displayUseBrowserAction = function (a) {};
module$exports$gdocs$UploadPageInterface.UploadPageInterface.prototype.showFinished = function (a) {};
module$exports$gdocs$UploadPageInterface.UploadPageInterface.prototype.createDataSource = function () {};
var module$exports$gdocs$UploadPageState = {
  UploadPageState: function (a) {
    this.defaultFilename_ = a;
    this.filename_ = "";
    this.percentage_ = 0;
    this.useBrowserActionUrl_ = this.fatalMsg_ = this.uploadPage_ = null;
  }
};
module$exports$gdocs$UploadPageState.UploadPageState.prototype.fatal = function (a) {
  module$contents$gdlog_info("UploadPageState.fatal", a);
  this.fatalMsg_ = this.fatalMsg_ ? this.fatalMsg_ + ("; " + a) : a;
  this.uploadPage_ && this.uploadPage_.fatal(this.fatalMsg_);
};
module$exports$gdocs$UploadPageState.UploadPageState.prototype.hasFailed = function () {
  return !!this.fatalMsg_;
};
module$exports$gdocs$UploadPageState.UploadPageState.prototype.isCancel = function () {
  return !!this.uploadPage_ && this.uploadPage_.isCancel();
};
module$exports$gdocs$UploadPageState.UploadPageState.prototype.clearCancel = function () {
  this.uploadPage_ && this.uploadPage_.clearCancel();
};
module$exports$gdocs$UploadPageState.UploadPageState.prototype.setUploadPage = function (a) {
  this.uploadPage_ = a;
  this.fatalMsg_
    ? this.uploadPage_.fatal(this.fatalMsg_)
    : this.useBrowserActionUrl_
    ? this.displayUseBrowserAction(this.useBrowserActionUrl_)
    : this.updateFilename_();
};
module$exports$gdocs$UploadPageState.UploadPageState.prototype.setPercent = function (a) {
  this.percentage_ = a;
  this.uploadPage_ && this.uploadPage_.setPercent(this.percentage_);
};
module$exports$gdocs$UploadPageState.UploadPageState.prototype.setFilename = function (a) {
  this.filename_ = a;
  this.uploadPage_ && this.updateFilename_();
};
module$exports$gdocs$UploadPageState.UploadPageState.prototype.getFilename = function () {
  return this.filename_ ? this.filename_ : this.defaultFilename_;
};
module$exports$gdocs$UploadPageState.UploadPageState.prototype.displayUseBrowserAction = function (a) {
  this.uploadPage_ ? this.uploadPage_.displayUseBrowserAction(a) : (this.useBrowserActionUrl_ = a);
};
module$exports$gdocs$UploadPageState.UploadPageState.prototype.updateFilename_ = function () {
  var a = this.filename_ ? chrome.i18n.getMessage("DOWNLOAD_KNOWN_NAME", this.filename_) : chrome.i18n.getMessage("DOWNLOAD_UNKNOWN_NAME");
  this.uploadPage_ && this.uploadPage_.updateProgressText(a);
};
var module$exports$gdocs$DriveDataController = {
  DriveDataController: function (a, b, c, d) {
    this.tab_ = a;
    this.uploadPageState_ = new module$exports$gdocs$UploadPageState.UploadPageState(b);
    this.allowConvert_ = c && d.getConvertToGoogleFormat();
    this.resumableUploader_ = this.downloadResults_ = null;
  }
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.getTab = function () {
  return this.tab_;
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.getAllowConvert = function () {
  return this.allowConvert_;
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.setResumableUploader = function (a) {
  this.resumableUploader_ = a;
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.uploadBlob = function (a, b) {
  module$contents$gdlog_info("DriveDataController.uploadBlob", "Blob size:" + a.size + " contentType:" + b);
  0 >= a.size
    ? this.fatal(chrome.i18n.getMessage("DOWNLOAD_FAILURE_NO_DATA"))
    : ((this.downloadResults_ = new module$exports$gdocs$DownloadResults.DownloadResults(b, a)),
      this.resumableUploader_ && this.resumableUploader_.startResumableUpload(b));
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.createDataUriBlob = function (a, b) {
  if (b) {
    a = atob(a);
    b = new Uint8Array(new ArrayBuffer(a.length));
    for (var c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    a = new DataView(b.buffer);
    return this.createBlob(a);
  }
  return this.createBlob(decodeURI(a));
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.createBlob = function (a) {
  return new Blob([a]);
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.getDownloadResults = function () {
  return this.downloadResults_;
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.setFilename = function (a) {
  this.uploadPageState_.setFilename(a);
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.getFilename = function () {
  return this.uploadPageState_.getFilename();
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.getUrl = function () {
  var a, b;
  return null != (b = null == (a = this.tab_) ? void 0 : a.url) ? b : null;
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.fatal = function (a) {
  this.uploadPageState_.fatal(a);
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.displayUseBrowserAction = function (a) {
  this.uploadPageState_.displayUseBrowserAction(a);
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.hasFailed = function () {
  return this.uploadPageState_.hasFailed();
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.setPercent = function (a) {
  this.uploadPageState_.setPercent(a);
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.isCancel = function () {
  return this.uploadPageState_.isCancel();
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.clearCancel = function () {
  this.uploadPageState_.clearCancel();
};
module$exports$gdocs$DriveDataController.DriveDataController.prototype.setUploadPage = function (a) {
  this.uploadPageState_.setUploadPage(a);
};
goog.exportProperty(
  module$exports$gdocs$DriveDataController.DriveDataController.prototype,
  "setUploadPage",
  module$exports$gdocs$DriveDataController.DriveDataController.prototype.setUploadPage
);
goog.exportProperty(
  module$exports$gdocs$DriveDataController.DriveDataController.prototype,
  "hasFailed",
  module$exports$gdocs$DriveDataController.DriveDataController.prototype.hasFailed
);
goog.exportProperty(
  module$exports$gdocs$DriveDataController.DriveDataController.prototype,
  "getUrl",
  module$exports$gdocs$DriveDataController.DriveDataController.prototype.getUrl
);
goog.exportProperty(
  module$exports$gdocs$DriveDataController.DriveDataController.prototype,
  "getFilename",
  module$exports$gdocs$DriveDataController.DriveDataController.prototype.getFilename
);
goog.exportProperty(
  module$exports$gdocs$DriveDataController.DriveDataController.prototype,
  "getDownloadResults",
  module$exports$gdocs$DriveDataController.DriveDataController.prototype.getDownloadResults
);
goog.exportProperty(
  module$exports$gdocs$DriveDataController.DriveDataController.prototype,
  "setResumableUploader",
  module$exports$gdocs$DriveDataController.DriveDataController.prototype.setResumableUploader
);
goog.exportProperty(
  module$exports$gdocs$DriveDataController.DriveDataController.prototype,
  "getAllowConvert",
  module$exports$gdocs$DriveDataController.DriveDataController.prototype.getAllowConvert
);
var module$exports$gdocs$Capturer = {
  Capturer: function () {
    module$exports$gdocs$DriveDataController.DriveDataController.apply(this, arguments);
  }
};
$jscomp.inherits(module$exports$gdocs$Capturer.Capturer, module$exports$gdocs$DriveDataController.DriveDataController);
module$exports$gdocs$Capturer.Capturer.createFilenameFromTab = function (a, b) {
  a = a.title || "";
  b && (a += b);
  return a;
};
var module$exports$gdocs$msgutil = {};
function module$contents$gdocs$msgutil_createResponseErrMsg(a) {
  var b = a.statusText;
  b || (b = chrome.i18n.getMessage("UNSPECIFIED_ERROR"));
  a.status && (b += " (" + a.status + ")");
  return b;
}
function module$contents$gdocs$msgutil_createBaseFilenameFromContentType(a) {
  a = a.toLowerCase();
  return 0 == a.indexOf("image")
    ? chrome.i18n.getMessage("IMAGE_DEFAULT_FILENAME")
    : 0 == a.indexOf("video")
    ? chrome.i18n.getMessage("VIDEO_DEFAULT_FILENAME")
    : 0 == a.indexOf("audio")
    ? chrome.i18n.getMessage("AUDIO_DEFAULT_FILENAME")
    : chrome.i18n.getMessage("DEFAULT_FILENAME");
}
module$exports$gdocs$msgutil.createBaseFilenameFromContentType = module$contents$gdocs$msgutil_createBaseFilenameFromContentType;
module$exports$gdocs$msgutil.createResponseErrMsg = module$contents$gdocs$msgutil_createResponseErrMsg;
var module$exports$gdocs$Client = { Client: function () {} };
module$exports$gdocs$Client.Client.prototype.sendRequest = function (a, b, c, d, e, f, g, h) {
  module$exports$gdocs$Client.Client.authAndSend_(a, b, c, d, e, !0, f, g, h);
};
module$exports$gdocs$Client.Client.prototype.sendRequestJson = function (a, b, c, d, e, f, g, h) {
  d["Content-Type"] = "application/json; charset=UTF-8";
  e = e ? JSON.stringify(e) : null;
  this.sendRequest(a, b, c, d, e, f, g, h);
};
module$exports$gdocs$Client.Client.authAndSend_ = function (a, b, c, d, e, f, g, h, k) {
  k = void 0 === k ? [module$exports$gdocs$Constants.HttpStatus.OK] : k;
  chrome.identity.getAuthToken({ interactive: !0 }, function (l) {
    if (chrome.runtime.lastError)
      module$contents$gdlog_infoLastErr("Client.authAndSend", "getAuthToken"), h(chrome.runtime.lastError.message || "N/A");
    else {
      var m = b;
      c && (m += "?" + module$exports$gdocs$Client.Client.encodeParams_(c));
      d.Authorization = "Bearer " + l;
      fetch(new Request(m, { method: a, headers: d, mode: "cors", cache: "default", body: e })).then(function (n) {
        if (f && n.status == module$exports$gdocs$Constants.HttpStatus.UNAUTHORIZED) {
          var p = module$contents$gdocs$msgutil_createResponseErrMsg(n);
          n.clone()
            .text()
            .then(function (r) {
              module$contents$gdlog_info("Client.authAndSend", "Retry. responseText:" + r + " errMsg:" + p);
            });
          goog.asserts.assert(l);
          chrome.identity.removeCachedAuthToken({ token: l }, function () {
            module$exports$gdocs$Client.Client.authAndSend_(a, b, c, d, e, !1, g, h);
          });
        } else if (k && -1 != k.indexOf(n.status)) g(n);
        else {
          n.clone()
            .text()
            .then(function (r) {
              module$contents$gdlog_info("Client.authAndSend", "responseText:" + r + " errMsg:" + q);
            });
          var q = module$contents$gdocs$msgutil_createResponseErrMsg(n);
          h(q);
        }
      });
    }
  });
};
module$exports$gdocs$Client.Client.encodeParams_ = function (a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = encodeURIComponent(d) + "=" + encodeURIComponent(a[d]);
  return b.join("&");
};
var module$exports$gdocs$DocList = {
  DocList: function (a) {
    this.client_ = a;
  }
};
module$exports$gdocs$DocList.DocList.addHeaders = function (a) {
  a = void 0 === a ? {} : a;
  a["X-User-Agent"] = module$contents$gdocs$DocList_X_USER_AGENT;
  return a;
};
module$exports$gdocs$DocList.DocList.prototype.loadMetadata = function (a, b) {
  this.client_.sendRequestJson(
    "GET",
    module$exports$gdocs$DocList.DocList.Feed.USER_INFO,
    { fields: "email" },
    module$exports$gdocs$DocList.DocList.addHeaders(),
    null,
    this.handleMetadataResults_.bind(this, a),
    b
  );
};
module$exports$gdocs$DocList.DocList.prototype.handleMetadataResults_ = function (a, b) {
  b.clone()
    .json()
    .then(function (c) {
      a(c.email);
    });
};
module$exports$gdocs$DocList.DocList.prototype.renameFile = function (a, b, c, d) {
  a = { title: a };
  this.client_.sendRequestJson(
    "PUT",
    module$exports$gdocs$DocList.DocList.Feed.FILES + "/" + b,
    { fileId: b },
    module$exports$gdocs$DocList.DocList.addHeaders(),
    a,
    c,
    d
  );
};
module$exports$gdocs$DocList.DocList.prototype.trashFile = function (a, b, c) {
  this.client_.sendRequest(
    "POST",
    module$exports$gdocs$DocList.DocList.Feed.FILES + "/" + a + "/trash",
    { fileId: a },
    module$exports$gdocs$DocList.DocList.addHeaders(),
    null,
    b,
    c
  );
};
var module$contents$gdocs$DocList_MAJOR_VERSION_PATTERN = /\d+\.\d+/,
  module$contents$gdocs$DocList_MAJOR_VERSION = (0, goog.asserts.assert)(
    chrome.runtime.getManifest().version.match(module$contents$gdocs$DocList_MAJOR_VERSION_PATTERN)
  )[0],
  module$contents$gdocs$DocList_X_USER_AGENT = "google-docschromeextension-" + module$contents$gdocs$DocList_MAJOR_VERSION;
module$exports$gdocs$DocList.DocList.Feed = {
  ABOUT: "https://www.googleapis.com/drive/v2/about",
  FILES: "https://www.googleapis.com/drive/v2/files",
  UPLOAD: "https://www.googleapis.com/upload/drive/v2/files",
  USER_INFO: "https://www.googleapis.com/userinfo/v2/me"
};
var module$exports$gdocs$domUtil = {},
  module$contents$gdocs$domUtil_HIDDEN_CLASS = "gdocs-hidden";
function module$contents$gdocs$domUtil_getHtmlElementByIdAssert(a) {
  var b = document.getElementById(a);
  if (!b) throw Error('Could not find Element with id: "' + a + '"');
  return b;
}
function module$contents$gdocs$domUtil_getHtmlImageElementByIdAssert(a) {
  return module$contents$gdocs$domUtil_getHtmlElementByIdAssert(a);
}
function module$contents$gdocs$domUtil_getHtmlCanvasElementByIdAssert(a) {
  return module$contents$gdocs$domUtil_getHtmlElementByIdAssert(a);
}
function module$contents$gdocs$domUtil_setTextContent(a, b) {
  a.textContent = b;
}
function module$contents$gdocs$domUtil_setTextContentId(a, b) {
  (a = document.getElementById(a)) && module$contents$gdocs$domUtil_setTextContent(a, b);
}
function module$contents$gdocs$domUtil_hideElem(a) {
  for (var b = $jscomp.makeIterator(arguments), c = b.next(); !c.done; c = b.next())
    c.value.classList.add(module$contents$gdocs$domUtil_HIDDEN_CLASS);
}
function module$contents$gdocs$domUtil_showElem(a) {
  for (var b = $jscomp.makeIterator(arguments), c = b.next(); !c.done; c = b.next())
    c.value.classList.remove(module$contents$gdocs$domUtil_HIDDEN_CLASS);
}
module$exports$gdocs$domUtil.getHtmlElementByIdAssert = module$contents$gdocs$domUtil_getHtmlElementByIdAssert;
module$exports$gdocs$domUtil.getHtmlCanvasElementByIdAssert = module$contents$gdocs$domUtil_getHtmlCanvasElementByIdAssert;
module$exports$gdocs$domUtil.getHtmlImageElementByIdAssert = module$contents$gdocs$domUtil_getHtmlImageElementByIdAssert;
module$exports$gdocs$domUtil.hideElem = module$contents$gdocs$domUtil_hideElem;
module$exports$gdocs$domUtil.setTextContent = module$contents$gdocs$domUtil_setTextContent;
module$exports$gdocs$domUtil.setTextContentId = module$contents$gdocs$domUtil_setTextContentId;
module$exports$gdocs$domUtil.showElem = module$contents$gdocs$domUtil_showElem;
var module$exports$gdocs$UploadStatus = {
  UploadStatus: function (a, b, c, d, e, f, g, h) {
    this.dataSource_ = a;
    this.state_ = b;
    this.errorMsg_ = void 0 === c ? "" : c;
    this.sentBytes_ = void 0 === d ? 0 : d;
    this.openUrl_ = void 0 === e ? "" : e;
    this.title_ = void 0 === f ? "" : f;
    this.docId_ = void 0 === g ? "" : g;
    this.iconUrl_ = void 0 === h ? "" : h;
  }
};
module$exports$gdocs$UploadStatus.UploadStatus.prototype.getDataSource = function () {
  return this.dataSource_;
};
module$exports$gdocs$UploadStatus.UploadStatus.prototype.getErrorMsg = function () {
  return this.errorMsg_;
};
module$exports$gdocs$UploadStatus.UploadStatus.prototype.getSentBytes = function () {
  return this.sentBytes_;
};
module$exports$gdocs$UploadStatus.UploadStatus.prototype.getOpenUrl = function () {
  return this.openUrl_;
};
module$exports$gdocs$UploadStatus.UploadStatus.prototype.getTitle = function () {
  return this.title_;
};
module$exports$gdocs$UploadStatus.UploadStatus.prototype.getDocId = function () {
  return this.docId_;
};
module$exports$gdocs$UploadStatus.UploadStatus.prototype.getIconUrl = function () {
  return this.iconUrl_;
};
module$exports$gdocs$UploadStatus.UploadStatus.prototype.getUploadRatio = function () {
  return 0 == this.sentBytes_ ? 0 : this.sentBytes_ / this.dataSource_.getSize();
};
module$exports$gdocs$UploadStatus.UploadStatus.prototype.isComplete = function () {
  return this.state_ != module$exports$gdocs$UploadStatus.UploadStatus.State.IN_PROGRESS;
};
module$exports$gdocs$UploadStatus.UploadStatus.prototype.isSuccess = function () {
  return this.state_ == module$exports$gdocs$UploadStatus.UploadStatus.State.SUCCESS;
};
module$exports$gdocs$UploadStatus.UploadStatus.StatusResponse = { CANCEL: "cancel", PROCEED: "proceed" };
module$exports$gdocs$UploadStatus.UploadStatus.State = { FAILURE: "failure", IN_PROGRESS: "inProgress", SUCCESS: "success" };
var module$exports$gdocs$ResumableUploader = {
  ResumableUploader: function (a, b, c, d, e, f, g) {
    this.client_ = a;
    this.dataSource_ = b;
    this.folderInfo_ = c;
    this.visibility_ = d;
    this.chunkSize_ = e;
    this.extraHeaders_ = f || {};
    this.callback_ = g;
    this.uploadUrl_ = "";
  }
};
module$exports$gdocs$ResumableUploader.ResumableUploader.prototype.startResumableUpload = function (a) {
  a = this.patchContentType_(a);
  var b = module$exports$gdocs$DocList.DocList.addHeaders({
    "X-Upload-Content-Type": a,
    "X-Upload-Content-Length": this.dataSource_.getSize()
  });
  for (c in this.extraHeaders_) b[c] = this.extraHeaders_[c];
  var c = { uploadType: "resumable" };
  this.dataSource_.shouldConvert() ? (c.convert = !0) : (c.visibility = this.visibility_);
  var d = { description: this.dataSource_.getDriveDescription(), title: this.dataSource_.getDriveFilename() };
  this.folderInfo_ && (d.parents = [{ kind: "drive#fileLink", id: this.folderInfo_.folderId }]);
  module$contents$gdlog_info(
    "ResumableUploader.sendFirstPost",
    "Starting upload. headers:" +
      module$contents$gdlog_prettyPrint(b) +
      "\nparams:" +
      module$contents$gdlog_prettyPrint(c) +
      "\nJSON:" +
      module$contents$gdlog_prettyPrint(d)
  );
  this.client_.sendRequestJson(
    "POST",
    module$exports$gdocs$DocList.DocList.Feed.UPLOAD,
    c,
    b,
    d,
    this.handleFirstResponse_.bind(this, a),
    this.handleRequestFailure_.bind(this),
    [module$exports$gdocs$Constants.HttpStatus.OK]
  );
};
module$exports$gdocs$ResumableUploader.ResumableUploader.prototype.handleFirstResponse_ = function (a, b) {
  if (b.status != module$exports$gdocs$Constants.HttpStatus.OK) {
    var c = module$contents$gdocs$msgutil_createResponseErrMsg(b);
    b.clone()
      .text()
      .then(function (d) {
        module$contents$gdlog_info("ResumableUploader.handleFirstResponse", "responseText:" + d + " errMsg:" + c);
      });
    this.callback_(
      null,
      new module$exports$gdocs$UploadStatus.UploadStatus(this.dataSource_, module$exports$gdocs$UploadStatus.UploadStatus.State.FAILURE, c)
    );
  } else (this.uploadUrl_ = b.headers.get("Location") || ""), this.sendUploadRequest_(0, a);
};
module$exports$gdocs$ResumableUploader.ResumableUploader.prototype.handleUploadResponse_ = function (a, b) {
  b.status == module$exports$gdocs$Constants.HttpStatus.CREATED || b.status == module$exports$gdocs$Constants.HttpStatus.OK
    ? this.handleCreated_(b)
    : (goog.asserts.assert(b.status == module$exports$gdocs$Constants.HttpStatus.RESUME_INCOMPLETE),
      (b = b.headers.get("Range")),
      null == b
        ? (module$contents$gdlog_info(
            "ResumableUploader.handleResponse",
            "No Range respose. url:" + this.uploadUrl_ + " errMsg:No Range response in header"
          ),
          this.callback_(
            null,
            new module$exports$gdocs$UploadStatus.UploadStatus(
              this.dataSource_,
              module$exports$gdocs$UploadStatus.UploadStatus.State.FAILURE,
              "No Range response in header"
            )
          ))
        : ((b = b.match(module$contents$gdocs$ResumableUploader_RANGE_END)), this.sendUploadRequest_(b ? Number(b[1]) + 1 : 0, a)));
};
module$exports$gdocs$ResumableUploader.ResumableUploader.prototype.handleRequestFailure_ = function (a) {
  this.callback_(
    null,
    new module$exports$gdocs$UploadStatus.UploadStatus(this.dataSource_, module$exports$gdocs$UploadStatus.UploadStatus.State.FAILURE, a)
  );
};
module$exports$gdocs$ResumableUploader.ResumableUploader.prototype.sendUploadRequest_ = function (a, b) {
  var c = this,
    d = this.dataSource_.getSize(),
    e = Math.min(d, a + this.chunkSize_) - 1,
    f = new module$exports$gdocs$UploadStatus.UploadStatus(
      this.dataSource_,
      module$exports$gdocs$UploadStatus.UploadStatus.State.IN_PROGRESS,
      void 0,
      Math.max(0, a - 1)
    );
  (f = this.callback_(null, f)) && f == module$exports$gdocs$UploadStatus.UploadStatus.StatusResponse.CANCEL
    ? ((a = chrome.i18n.getMessage("UPLOAD_CANCELED")),
      this.callback_(
        null,
        new module$exports$gdocs$UploadStatus.UploadStatus(
          this.dataSource_,
          module$exports$gdocs$UploadStatus.UploadStatus.State.FAILURE,
          a
        )
      ))
    : ((d = { "Content-Type": b, "Content-Range": "bytes " + a + "-" + e + "/" + d }),
      (a = this.dataSource_.getData(a, e + 1)),
      module$contents$gdlog_info("ResumableUploader.handleResponse", "Sending " + d["Content-Range"]),
      this.client_.sendRequest(
        "PUT",
        this.uploadUrl_,
        null,
        d,
        a,
        function (g) {
          return c.handleUploadResponse_(b, g);
        },
        function (g) {
          return c.handleRequestFailure_(g);
        },
        [
          module$exports$gdocs$Constants.HttpStatus.CREATED,
          module$exports$gdocs$Constants.HttpStatus.OK,
          module$exports$gdocs$Constants.HttpStatus.RESUME_INCOMPLETE
        ]
      ));
};
module$exports$gdocs$ResumableUploader.ResumableUploader.prototype.handleCreated_ = function (a) {
  var b = this;
  module$contents$gdlog_info("ResumableUploader.handleCreated", "Completed with status:" + a.status);
  a.clone()
    .text()
    .then(function (c) {
      var d = JSON.parse(c);
      b.callback_(
        c,
        new module$exports$gdocs$UploadStatus.UploadStatus(
          b.dataSource_,
          module$exports$gdocs$UploadStatus.UploadStatus.State.SUCCESS,
          void 0,
          b.dataSource_.getSize(),
          d.alternateLink,
          d.title,
          d.id,
          d.iconLink
        )
      );
    });
};
module$exports$gdocs$ResumableUploader.ResumableUploader.prototype.patchContentType_ = function (a) {
  var b = a;
  if (b) {
    var c = b.indexOf(";");
    0 <= c && (b = b.substring(0, c));
    b = b.toLowerCase();
    0 == b.indexOf(module$exports$gdocs$Constants.MimeType.X_PDF) && (b = module$exports$gdocs$Constants.MimeType.PDF);
  } else b = module$exports$gdocs$Constants.MimeType.OCTET_STREAM;
  b != a && module$contents$gdlog_info("ResumableUploader.patchContentType", "Changing Content-Type from " + a + " to " + b);
  return b;
};
var module$contents$gdocs$ResumableUploader_RANGE_END = /\d+-(\d+)/;
module$exports$gdocs$ResumableUploader.UPLOAD_CHUNK_SIZE = 262144;
var module$exports$gdocs$Uploader = {
  Uploader: function (a, b, c, d, e) {
    this.client_ = a;
    this.uploadPage_ = b;
    this.uploadParams_ = this.uploadPage_.getUploadParams();
    this.dataSource_ = c;
    this.folderInfo_ = d;
    this.visibility_ = e;
    this.startPercent_ = this.uploadParams_.isUploadOnly() ? 0 : 50;
  }
};
module$exports$gdocs$Uploader.Uploader.prototype.startUploadWhenReady = function () {
  this.uploadDataSourceWhenReady_(this.dataSource_);
};
module$exports$gdocs$Uploader.Uploader.prototype.uploadDataSourceWhenReady_ = function (a) {
  var b = new module$exports$gdocs$ResumableUploader.ResumableUploader(
    this.client_,
    a,
    this.folderInfo_,
    this.visibility_,
    module$exports$gdocs$ResumableUploader.UPLOAD_CHUNK_SIZE,
    this.uploadParams_.createImpressionHeader(),
    this.uploadCallback_.bind(this, a)
  );
  a.startWhenReady(b);
};
module$exports$gdocs$Uploader.Uploader.prototype.uploadCallback_ = function (a, b, c) {
  this.setStartFileMsg_(a.getDriveFilename());
  a = this.uploadPage_.isCancel()
    ? module$exports$gdocs$UploadStatus.UploadStatus.StatusResponse.CANCEL
    : module$exports$gdocs$UploadStatus.UploadStatus.StatusResponse.PROCEED;
  if (!c.isComplete()) return (c = c.getUploadRatio()), this.uploadPage_.setPercent(this.startPercent_ + (100 - this.startPercent_) * c), a;
  if (!c.isSuccess()) return (c = chrome.i18n.getMessage("UPLOAD_FAILURE", [c.getErrorMsg()])), this.uploadPage_.fatal(c), a;
  this.uploadPage_.showFinished(c);
  return a;
};
module$exports$gdocs$Uploader.Uploader.prototype.setStartFileMsg_ = function (a) {
  this.uploadPage_.setPercent(this.startPercent_);
  a = this.uploadParams_.isUploadOnly() ? chrome.i18n.getMessage("UPLOADING", a) : chrome.i18n.getMessage("SAVING", a);
  this.uploadPage_.updateProgressText(a);
};
var module$exports$gdocs$UploadParams = {},
  module$contents$gdocs$UploadParams_IMPRESSION_HEADER_ = "X-DriveExt-Action";
module$exports$gdocs$UploadParams.UploadParams = function (a) {
  this.userImpression_ = a;
};
module$exports$gdocs$UploadParams.UploadParams.prototype.getUserImpression = function () {
  return this.userImpression_;
};
module$exports$gdocs$UploadParams.UploadParams.prototype.createImpressionHeader = function () {
  var a = {};
  this.userImpression_ && (a[module$contents$gdocs$UploadParams_IMPRESSION_HEADER_] = this.userImpression_.toString());
  return a;
};
goog.exportProperty(
  module$exports$gdocs$UploadParams.UploadParams.prototype,
  "isUploadOnly",
  module$exports$gdocs$UploadParams.UploadParams.prototype.isUploadOnly
);
goog.exportProperty(
  module$exports$gdocs$UploadParams.UploadParams.prototype,
  "getUserImpression",
  module$exports$gdocs$UploadParams.UploadParams.prototype.getUserImpression
);
goog.dom.HtmlElement = function () {};
goog.dom.TagName = function () {};
goog.dom.TagName.cast = function (a, b) {
  return a;
};
goog.dom.TagName.prototype.toString = function () {};
goog.dom.TagName.A = "A";
goog.dom.TagName.ABBR = "ABBR";
goog.dom.TagName.ACRONYM = "ACRONYM";
goog.dom.TagName.ADDRESS = "ADDRESS";
goog.dom.TagName.APPLET = "APPLET";
goog.dom.TagName.AREA = "AREA";
goog.dom.TagName.ARTICLE = "ARTICLE";
goog.dom.TagName.ASIDE = "ASIDE";
goog.dom.TagName.AUDIO = "AUDIO";
goog.dom.TagName.B = "B";
goog.dom.TagName.BASE = "BASE";
goog.dom.TagName.BASEFONT = "BASEFONT";
goog.dom.TagName.BDI = "BDI";
goog.dom.TagName.BDO = "BDO";
goog.dom.TagName.BIG = "BIG";
goog.dom.TagName.BLOCKQUOTE = "BLOCKQUOTE";
goog.dom.TagName.BODY = "BODY";
goog.dom.TagName.BR = "BR";
goog.dom.TagName.BUTTON = "BUTTON";
goog.dom.TagName.CANVAS = "CANVAS";
goog.dom.TagName.CAPTION = "CAPTION";
goog.dom.TagName.CENTER = "CENTER";
goog.dom.TagName.CITE = "CITE";
goog.dom.TagName.CODE = "CODE";
goog.dom.TagName.COL = "COL";
goog.dom.TagName.COLGROUP = "COLGROUP";
goog.dom.TagName.COMMAND = "COMMAND";
goog.dom.TagName.DATA = "DATA";
goog.dom.TagName.DATALIST = "DATALIST";
goog.dom.TagName.DD = "DD";
goog.dom.TagName.DEL = "DEL";
goog.dom.TagName.DETAILS = "DETAILS";
goog.dom.TagName.DFN = "DFN";
goog.dom.TagName.DIALOG = "DIALOG";
goog.dom.TagName.DIR = "DIR";
goog.dom.TagName.DIV = "DIV";
goog.dom.TagName.DL = "DL";
goog.dom.TagName.DT = "DT";
goog.dom.TagName.EM = "EM";
goog.dom.TagName.EMBED = "EMBED";
goog.dom.TagName.FIELDSET = "FIELDSET";
goog.dom.TagName.FIGCAPTION = "FIGCAPTION";
goog.dom.TagName.FIGURE = "FIGURE";
goog.dom.TagName.FONT = "FONT";
goog.dom.TagName.FOOTER = "FOOTER";
goog.dom.TagName.FORM = "FORM";
goog.dom.TagName.FRAME = "FRAME";
goog.dom.TagName.FRAMESET = "FRAMESET";
goog.dom.TagName.H1 = "H1";
goog.dom.TagName.H2 = "H2";
goog.dom.TagName.H3 = "H3";
goog.dom.TagName.H4 = "H4";
goog.dom.TagName.H5 = "H5";
goog.dom.TagName.H6 = "H6";
goog.dom.TagName.HEAD = "HEAD";
goog.dom.TagName.HEADER = "HEADER";
goog.dom.TagName.HGROUP = "HGROUP";
goog.dom.TagName.HR = "HR";
goog.dom.TagName.HTML = "HTML";
goog.dom.TagName.I = "I";
goog.dom.TagName.IFRAME = "IFRAME";
goog.dom.TagName.IMG = "IMG";
goog.dom.TagName.INPUT = "INPUT";
goog.dom.TagName.INS = "INS";
goog.dom.TagName.ISINDEX = "ISINDEX";
goog.dom.TagName.KBD = "KBD";
goog.dom.TagName.KEYGEN = "KEYGEN";
goog.dom.TagName.LABEL = "LABEL";
goog.dom.TagName.LEGEND = "LEGEND";
goog.dom.TagName.LI = "LI";
goog.dom.TagName.LINK = "LINK";
goog.dom.TagName.MAIN = "MAIN";
goog.dom.TagName.MAP = "MAP";
goog.dom.TagName.MARK = "MARK";
goog.dom.TagName.MATH = "MATH";
goog.dom.TagName.MENU = "MENU";
goog.dom.TagName.MENUITEM = "MENUITEM";
goog.dom.TagName.META = "META";
goog.dom.TagName.METER = "METER";
goog.dom.TagName.NAV = "NAV";
goog.dom.TagName.NOFRAMES = "NOFRAMES";
goog.dom.TagName.NOSCRIPT = "NOSCRIPT";
goog.dom.TagName.OBJECT = "OBJECT";
goog.dom.TagName.OL = "OL";
goog.dom.TagName.OPTGROUP = "OPTGROUP";
goog.dom.TagName.OPTION = "OPTION";
goog.dom.TagName.OUTPUT = "OUTPUT";
goog.dom.TagName.P = "P";
goog.dom.TagName.PARAM = "PARAM";
goog.dom.TagName.PICTURE = "PICTURE";
goog.dom.TagName.PRE = "PRE";
goog.dom.TagName.PROGRESS = "PROGRESS";
goog.dom.TagName.Q = "Q";
goog.dom.TagName.RP = "RP";
goog.dom.TagName.RT = "RT";
goog.dom.TagName.RTC = "RTC";
goog.dom.TagName.RUBY = "RUBY";
goog.dom.TagName.S = "S";
goog.dom.TagName.SAMP = "SAMP";
goog.dom.TagName.SCRIPT = "SCRIPT";
goog.dom.TagName.SECTION = "SECTION";
goog.dom.TagName.SELECT = "SELECT";
goog.dom.TagName.SMALL = "SMALL";
goog.dom.TagName.SOURCE = "SOURCE";
goog.dom.TagName.SPAN = "SPAN";
goog.dom.TagName.STRIKE = "STRIKE";
goog.dom.TagName.STRONG = "STRONG";
goog.dom.TagName.STYLE = "STYLE";
goog.dom.TagName.SUB = "SUB";
goog.dom.TagName.SUMMARY = "SUMMARY";
goog.dom.TagName.SUP = "SUP";
goog.dom.TagName.SVG = "SVG";
goog.dom.TagName.TABLE = "TABLE";
goog.dom.TagName.TBODY = "TBODY";
goog.dom.TagName.TD = "TD";
goog.dom.TagName.TEMPLATE = "TEMPLATE";
goog.dom.TagName.TEXTAREA = "TEXTAREA";
goog.dom.TagName.TFOOT = "TFOOT";
goog.dom.TagName.TH = "TH";
goog.dom.TagName.THEAD = "THEAD";
goog.dom.TagName.TIME = "TIME";
goog.dom.TagName.TITLE = "TITLE";
goog.dom.TagName.TR = "TR";
goog.dom.TagName.TRACK = "TRACK";
goog.dom.TagName.TT = "TT";
goog.dom.TagName.U = "U";
goog.dom.TagName.UL = "UL";
goog.dom.TagName.VAR = "VAR";
goog.dom.TagName.VIDEO = "VIDEO";
goog.dom.TagName.WBR = "WBR";
goog.dom.element = {};
var module$contents$goog$dom$element_HTML_NAMESPACE = "http://www.w3.org/1999/xhtml",
  module$contents$goog$dom$element_isElement = function (a) {
    return goog.isObject(a) && a.nodeType === goog.dom.NodeType.ELEMENT;
  },
  module$contents$goog$dom$element_isHtmlElement = function (a) {
    return (
      goog.isObject(a) &&
      module$contents$goog$dom$element_isElement(a) &&
      (!a.namespaceURI || a.namespaceURI === module$contents$goog$dom$element_HTML_NAMESPACE)
    );
  },
  module$contents$goog$dom$element_isHtmlElementOfType = function (a, b) {
    return goog.isObject(a) && module$contents$goog$dom$element_isHtmlElement(a) && a.tagName.toUpperCase() === b.toString();
  },
  module$contents$goog$dom$element_isHtmlAnchorElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.A);
  },
  module$contents$goog$dom$element_isHtmlButtonElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.BUTTON);
  },
  module$contents$goog$dom$element_isHtmlLinkElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.LINK);
  },
  module$contents$goog$dom$element_isHtmlImageElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.IMG);
  },
  module$contents$goog$dom$element_isHtmlAudioElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.AUDIO);
  },
  module$contents$goog$dom$element_isHtmlVideoElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.VIDEO);
  },
  module$contents$goog$dom$element_isHtmlInputElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.INPUT);
  },
  module$contents$goog$dom$element_isHtmlTextAreaElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.TEXTAREA);
  },
  module$contents$goog$dom$element_isHtmlCanvasElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.CANVAS);
  },
  module$contents$goog$dom$element_isHtmlEmbedElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.EMBED);
  },
  module$contents$goog$dom$element_isHtmlFormElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.FORM);
  },
  module$contents$goog$dom$element_isHtmlFrameElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.FRAME);
  },
  module$contents$goog$dom$element_isHtmlIFrameElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.IFRAME);
  },
  module$contents$goog$dom$element_isHtmlObjectElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.OBJECT);
  },
  module$contents$goog$dom$element_isHtmlScriptElement = function (a) {
    return module$contents$goog$dom$element_isHtmlElementOfType(a, goog.dom.TagName.SCRIPT);
  };
goog.dom.element.isElement = module$contents$goog$dom$element_isElement;
goog.dom.element.isHtmlElement = module$contents$goog$dom$element_isHtmlElement;
goog.dom.element.isHtmlElementOfType = module$contents$goog$dom$element_isHtmlElementOfType;
goog.dom.element.isHtmlAnchorElement = module$contents$goog$dom$element_isHtmlAnchorElement;
goog.dom.element.isHtmlButtonElement = module$contents$goog$dom$element_isHtmlButtonElement;
goog.dom.element.isHtmlLinkElement = module$contents$goog$dom$element_isHtmlLinkElement;
goog.dom.element.isHtmlImageElement = module$contents$goog$dom$element_isHtmlImageElement;
goog.dom.element.isHtmlAudioElement = module$contents$goog$dom$element_isHtmlAudioElement;
goog.dom.element.isHtmlVideoElement = module$contents$goog$dom$element_isHtmlVideoElement;
goog.dom.element.isHtmlInputElement = module$contents$goog$dom$element_isHtmlInputElement;
goog.dom.element.isHtmlTextAreaElement = module$contents$goog$dom$element_isHtmlTextAreaElement;
goog.dom.element.isHtmlCanvasElement = module$contents$goog$dom$element_isHtmlCanvasElement;
goog.dom.element.isHtmlEmbedElement = module$contents$goog$dom$element_isHtmlEmbedElement;
goog.dom.element.isHtmlFormElement = module$contents$goog$dom$element_isHtmlFormElement;
goog.dom.element.isHtmlFrameElement = module$contents$goog$dom$element_isHtmlFrameElement;
goog.dom.element.isHtmlIFrameElement = module$contents$goog$dom$element_isHtmlIFrameElement;
goog.dom.element.isHtmlObjectElement = module$contents$goog$dom$element_isHtmlObjectElement;
goog.dom.element.isHtmlScriptElement = module$contents$goog$dom$element_isHtmlScriptElement;
goog.asserts.dom = {};
var module$contents$goog$asserts$dom_assertIsElement = function (a) {
    goog.asserts.ENABLE_ASSERTS &&
      !module$contents$goog$dom$element_isElement(a) &&
      goog.asserts.fail("Argument is not an Element; got: " + module$contents$goog$asserts$dom_debugStringForType(a));
    return a;
  },
  module$contents$goog$asserts$dom_assertIsHtmlElement = function (a) {
    goog.asserts.ENABLE_ASSERTS &&
      !module$contents$goog$dom$element_isHtmlElement(a) &&
      goog.asserts.fail("Argument is not an HTML Element; got: " + module$contents$goog$asserts$dom_debugStringForType(a));
    return a;
  },
  module$contents$goog$asserts$dom_assertIsHtmlElementOfType = function (a, b) {
    goog.asserts.ENABLE_ASSERTS &&
      !module$contents$goog$dom$element_isHtmlElementOfType(a, b) &&
      goog.asserts.fail(
        "Argument is not an HTML Element with tag name " +
          (b.toString() + "; got: " + module$contents$goog$asserts$dom_debugStringForType(a))
      );
    return a;
  },
  module$contents$goog$asserts$dom_assertIsHtmlAnchorElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.A);
  },
  module$contents$goog$asserts$dom_assertIsHtmlButtonElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.BUTTON);
  },
  module$contents$goog$asserts$dom_assertIsHtmlLinkElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.LINK);
  },
  module$contents$goog$asserts$dom_assertIsHtmlImageElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.IMG);
  },
  module$contents$goog$asserts$dom_assertIsHtmlAudioElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.AUDIO);
  },
  module$contents$goog$asserts$dom_assertIsHtmlVideoElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.VIDEO);
  },
  module$contents$goog$asserts$dom_assertIsHtmlInputElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.INPUT);
  },
  module$contents$goog$asserts$dom_assertIsHtmlTextAreaElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.TEXTAREA);
  },
  module$contents$goog$asserts$dom_assertIsHtmlCanvasElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.CANVAS);
  },
  module$contents$goog$asserts$dom_assertIsHtmlEmbedElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.EMBED);
  },
  module$contents$goog$asserts$dom_assertIsHtmlFormElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.FORM);
  },
  module$contents$goog$asserts$dom_assertIsHtmlFrameElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.FRAME);
  },
  module$contents$goog$asserts$dom_assertIsHtmlIFrameElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.IFRAME);
  },
  module$contents$goog$asserts$dom_assertIsHtmlObjectElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.OBJECT);
  },
  module$contents$goog$asserts$dom_assertIsHtmlScriptElement = function (a) {
    return module$contents$goog$asserts$dom_assertIsHtmlElementOfType(a, goog.dom.TagName.SCRIPT);
  },
  module$contents$goog$asserts$dom_debugStringForType = function (a) {
    if (goog.isObject(a))
      try {
        return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
      } catch (b) {
        return "<object could not be stringified>";
      }
    else return void 0 === a ? "undefined" : null === a ? "null" : typeof a;
  };
goog.asserts.dom.assertIsElement = module$contents$goog$asserts$dom_assertIsElement;
goog.asserts.dom.assertIsHtmlElement = module$contents$goog$asserts$dom_assertIsHtmlElement;
goog.asserts.dom.assertIsHtmlElementOfType = module$contents$goog$asserts$dom_assertIsHtmlElementOfType;
goog.asserts.dom.assertIsHtmlAnchorElement = module$contents$goog$asserts$dom_assertIsHtmlAnchorElement;
goog.asserts.dom.assertIsHtmlButtonElement = module$contents$goog$asserts$dom_assertIsHtmlButtonElement;
goog.asserts.dom.assertIsHtmlLinkElement = module$contents$goog$asserts$dom_assertIsHtmlLinkElement;
goog.asserts.dom.assertIsHtmlImageElement = module$contents$goog$asserts$dom_assertIsHtmlImageElement;
goog.asserts.dom.assertIsHtmlAudioElement = module$contents$goog$asserts$dom_assertIsHtmlAudioElement;
goog.asserts.dom.assertIsHtmlVideoElement = module$contents$goog$asserts$dom_assertIsHtmlVideoElement;
goog.asserts.dom.assertIsHtmlInputElement = module$contents$goog$asserts$dom_assertIsHtmlInputElement;
goog.asserts.dom.assertIsHtmlTextAreaElement = module$contents$goog$asserts$dom_assertIsHtmlTextAreaElement;
goog.asserts.dom.assertIsHtmlCanvasElement = module$contents$goog$asserts$dom_assertIsHtmlCanvasElement;
goog.asserts.dom.assertIsHtmlEmbedElement = module$contents$goog$asserts$dom_assertIsHtmlEmbedElement;
goog.asserts.dom.assertIsHtmlFormElement = module$contents$goog$asserts$dom_assertIsHtmlFormElement;
goog.asserts.dom.assertIsHtmlFrameElement = module$contents$goog$asserts$dom_assertIsHtmlFrameElement;
goog.asserts.dom.assertIsHtmlIFrameElement = module$contents$goog$asserts$dom_assertIsHtmlIFrameElement;
goog.asserts.dom.assertIsHtmlObjectElement = module$contents$goog$asserts$dom_assertIsHtmlObjectElement;
goog.asserts.dom.assertIsHtmlScriptElement = module$contents$goog$asserts$dom_assertIsHtmlScriptElement;
goog.fs = {};
goog.fs.url = {};
goog.fs.url.createObjectUrl = function (a) {
  return goog.fs.url.getUrlObject_().createObjectURL(a);
};
goog.fs.url.revokeObjectUrl = function (a) {
  goog.fs.url.getUrlObject_().revokeObjectURL(a);
};
goog.fs.url.UrlObject_ = function () {};
goog.fs.url.UrlObject_.prototype.createObjectURL = function (a) {};
goog.fs.url.UrlObject_.prototype.revokeObjectURL = function (a) {};
goog.fs.url.getUrlObject_ = function () {
  var a = goog.fs.url.findUrlObject_();
  if (null != a) return a;
  throw Error("This browser doesn't seem to support blob URLs");
};
goog.fs.url.findUrlObject_ = function () {
  return void 0 !== goog.global.URL && void 0 !== goog.global.URL.createObjectURL
    ? goog.global.URL
    : void 0 !== goog.global.createObjectURL
    ? goog.global
    : null;
};
goog.fs.url.browserSupportsObjectUrls = function () {
  return null != goog.fs.url.findUrlObject_();
};
goog.fs.blob = {};
goog.fs.blob.getBlob = function (a) {
  var b = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (void 0 !== b) {
    b = new b();
    for (var c = 0; c < arguments.length; c++) b.append(arguments[c]);
    return b.getBlob();
  }
  return goog.fs.blob.getBlobWithProperties(Array.prototype.slice.call(arguments));
};
goog.fs.blob.getBlobWithProperties = function (a, b, c) {
  var d = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (void 0 !== d) {
    d = new d();
    for (var e = 0; e < a.length; e++) d.append(a[e], c);
    return d.getBlob(b);
  }
  if (void 0 !== goog.global.Blob) return (d = {}), b && (d.type = b), c && (d.endings = c), new Blob(a, d);
  throw Error("This browser doesn't seem to support creating Blobs");
};
goog.html = {};
goog.html.trustedtypes = {};
goog.html.trustedtypes.POLICY_NAME = goog.TRUSTED_TYPES_POLICY_NAME ? goog.TRUSTED_TYPES_POLICY_NAME + "#html" : "";
goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function () {
  if (!goog.html.trustedtypes.POLICY_NAME) return null;
  void 0 === goog.html.trustedtypes.cachedPolicy_ &&
    (goog.html.trustedtypes.cachedPolicy_ = goog.createTrustedTypesPolicy(goog.html.trustedtypes.POLICY_NAME));
  return goog.html.trustedtypes.cachedPolicy_;
};
goog.string = {};
goog.string.TypedString = function () {};
goog.string.Const = function (a, b) {
  this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =
    (a === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b) || "";
  this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
};
goog.string.Const.prototype.implementsGoogStringTypedString = !0;
goog.string.Const.prototype.getTypedStringValue = function () {
  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
};
goog.DEBUG &&
  (goog.string.Const.prototype.toString = function () {
    return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
  });
goog.string.Const.unwrap = function (a) {
  if (
    a instanceof goog.string.Const &&
    a.constructor === goog.string.Const &&
    a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_
  )
    return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
  goog.asserts.fail("expected object of type Const, got '" + a + "'");
  return "type_error:Const";
};
goog.string.Const.from = function (a) {
  return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a);
};
goog.string.Const.TYPE_MARKER_ = {};
goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.string.Const.EMPTY = goog.string.Const.from("");
var module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE = {},
  module$contents$goog$html$SafeScript_SafeScript = function (a, b) {
    this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = b === module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE ? a : "";
    this.implementsGoogStringTypedString = !0;
  };
module$contents$goog$html$SafeScript_SafeScript.prototype.toString = function () {
  return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
};
module$contents$goog$html$SafeScript_SafeScript.fromConstant = function (a) {
  a = goog.string.Const.unwrap(a);
  return 0 === a.length
    ? module$contents$goog$html$SafeScript_SafeScript.EMPTY
    : module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a);
};
module$contents$goog$html$SafeScript_SafeScript.fromJson = function (a) {
  return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
    module$contents$goog$html$SafeScript_SafeScript.stringify_(a)
  );
};
module$contents$goog$html$SafeScript_SafeScript.prototype.getTypedStringValue = function () {
  return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
};
module$contents$goog$html$SafeScript_SafeScript.unwrap = function (a) {
  return module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript(a).toString();
};
module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript = function (a) {
  if (a instanceof module$contents$goog$html$SafeScript_SafeScript && a.constructor === module$contents$goog$html$SafeScript_SafeScript)
    return a.privateDoNotAccessOrElseSafeScriptWrappedValue_;
  (0, goog.asserts.fail)("expected object of type SafeScript, got '" + a + "' of type " + goog.typeOf(a));
  return "type_error:SafeScript";
};
module$contents$goog$html$SafeScript_SafeScript.stringify_ = function (a) {
  return JSON.stringify(a).replace(/</g, "\\x3c");
};
module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function (a) {
  var b = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
  a = b ? b.createScript(a) : a;
  return new module$contents$goog$html$SafeScript_SafeScript(a, module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE);
};
module$contents$goog$html$SafeScript_SafeScript.EMPTY = (function () {
  return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
})();
goog.html.SafeScript = module$contents$goog$html$SafeScript_SafeScript;
goog.html.TrustedResourceUrl = function (a, b) {
  this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = b === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? a : "";
};
goog.html.TrustedResourceUrl.prototype.toString = function () {
  return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "";
};
goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0;
goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function () {
  return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
};
goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (a, b) {
  var c = goog.html.TrustedResourceUrl.unwrap(this);
  c = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c);
  var d = c[3] || "";
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
    c[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c[2] || "", a) + goog.html.TrustedResourceUrl.stringifyParams_("#", d, b)
  );
};
goog.html.TrustedResourceUrl.unwrap = function (a) {
  return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a).toString();
};
goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (a) {
  if (a instanceof goog.html.TrustedResourceUrl && a.constructor === goog.html.TrustedResourceUrl)
    return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
  goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a + "' of type " + goog.typeOf(a));
  return "type_error:TrustedResourceUrl";
};
goog.html.TrustedResourceUrl.format = function (a, b) {
  var c = goog.string.Const.unwrap(a);
  if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
  a = c.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function (d, e) {
    if (!Object.prototype.hasOwnProperty.call(b, e))
      throw Error(
        'Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b)
      );
    d = b[e];
    return d instanceof goog.string.Const ? goog.string.Const.unwrap(d) : encodeURIComponent(String(d));
  });
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
goog.html.TrustedResourceUrl.BASE_URL_ = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
goog.html.TrustedResourceUrl.formatWithParams = function (a, b, c, d) {
  return goog.html.TrustedResourceUrl.format(a, b).cloneWithParams(c, d);
};
goog.html.TrustedResourceUrl.fromConstant = function (a) {
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a));
};
goog.html.TrustedResourceUrl.fromConstants = function (a) {
  for (var b = "", c = 0; c < a.length; c++) b += goog.string.Const.unwrap(a[c]);
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.TrustedResourceUrl.fromSafeScript = function (a) {
  a = goog.fs.blob.getBlobWithProperties([module$contents$goog$html$SafeScript_SafeScript.unwrap(a)], "text/javascript");
  a = goog.fs.url.createObjectUrl(a);
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function (a) {
  var b = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
  a = b ? b.createScriptURL(a) : a;
  return new goog.html.TrustedResourceUrl(a, goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
};
goog.html.TrustedResourceUrl.stringifyParams_ = function (a, b, c) {
  if (null == c) return b;
  if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
  for (var d in c)
    if (Object.prototype.hasOwnProperty.call(c, d)) {
      var e = c[d];
      e = Array.isArray(e) ? e : [e];
      for (var f = 0; f < e.length; f++) {
        var g = e[f];
        null != g && (b || (b = a), (b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g))));
      }
    }
  return b;
};
goog.string.internal = {};
goog.string.internal.startsWith = function (a, b) {
  return 0 == a.lastIndexOf(b, 0);
};
goog.string.internal.endsWith = function (a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c;
};
goog.string.internal.caseInsensitiveStartsWith = function (a, b) {
  return 0 == goog.string.internal.caseInsensitiveCompare(b, a.slice(0, b.length));
};
goog.string.internal.caseInsensitiveEndsWith = function (a, b) {
  return 0 == goog.string.internal.caseInsensitiveCompare(b, a.slice(a.length - b.length));
};
goog.string.internal.caseInsensitiveEquals = function (a, b) {
  return a.toLowerCase() == b.toLowerCase();
};
goog.string.internal.isEmptyOrWhitespace = function (a) {
  return /^[\s\xa0]*$/.test(a);
};
goog.string.internal.trim =
  goog.TRUSTED_SITE && String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
goog.string.internal.caseInsensitiveCompare = function (a, b) {
  a = String(a).toLowerCase();
  b = String(b).toLowerCase();
  return a < b ? -1 : a == b ? 0 : 1;
};
goog.string.internal.newLineToBr = function (a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>");
};
goog.string.internal.htmlEscape = function (a, b) {
  if (b)
    a = a
      .replace(goog.string.internal.AMP_RE_, "&amp;")
      .replace(goog.string.internal.LT_RE_, "&lt;")
      .replace(goog.string.internal.GT_RE_, "&gt;")
      .replace(goog.string.internal.QUOT_RE_, "&quot;")
      .replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")
      .replace(goog.string.internal.NULL_RE_, "&#0;");
  else {
    if (!goog.string.internal.ALL_RE_.test(a)) return a;
    -1 != a.indexOf("&") && (a = a.replace(goog.string.internal.AMP_RE_, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(goog.string.internal.LT_RE_, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(goog.string.internal.GT_RE_, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(goog.string.internal.QUOT_RE_, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(goog.string.internal.NULL_RE_, "&#0;"));
  }
  return a;
};
goog.string.internal.AMP_RE_ = /&/g;
goog.string.internal.LT_RE_ = /</g;
goog.string.internal.GT_RE_ = />/g;
goog.string.internal.QUOT_RE_ = /"/g;
goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
goog.string.internal.NULL_RE_ = /\x00/g;
goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
goog.string.internal.whitespaceEscape = function (a, b) {
  return goog.string.internal.newLineToBr(a.replace(/  /g, " &#160;"), b);
};
goog.string.internal.contains = function (a, b) {
  return -1 != a.indexOf(b);
};
goog.string.internal.caseInsensitiveContains = function (a, b) {
  return goog.string.internal.contains(a.toLowerCase(), b.toLowerCase());
};
goog.string.internal.compareVersions = function (a, b) {
  var c = 0;
  a = goog.string.internal.trim(String(a)).split(".");
  b = goog.string.internal.trim(String(b)).split(".");
  for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
    var f = a[e] || "",
      g = b[e] || "";
    do {
      f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
      g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
      if (0 == f[0].length && 0 == g[0].length) break;
      c = 0 == f[1].length ? 0 : parseInt(f[1], 10);
      var h = 0 == g[1].length ? 0 : parseInt(g[1], 10);
      c =
        goog.string.internal.compareElements_(c, h) ||
        goog.string.internal.compareElements_(0 == f[2].length, 0 == g[2].length) ||
        goog.string.internal.compareElements_(f[2], g[2]);
      f = f[3];
      g = g[3];
    } while (0 == c);
  }
  return c;
};
goog.string.internal.compareElements_ = function (a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
goog.html.SafeUrl = function (a, b) {
  this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = b === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? a : "";
};
goog.html.SafeUrl.prototype.toString = function () {
  return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
};
goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0;
goog.html.SafeUrl.prototype.getTypedStringValue = function () {
  return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
};
goog.html.SafeUrl.unwrap = function (a) {
  if (a instanceof goog.html.SafeUrl && a.constructor === goog.html.SafeUrl) return a.privateDoNotAccessOrElseSafeUrlWrappedValue_;
  goog.asserts.fail("expected object of type SafeUrl, got '" + a + "' of type " + goog.typeOf(a));
  return "type_error:SafeUrl";
};
goog.html.SafeUrl.fromConstant = function (a) {
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a));
};
goog.html.SAFE_MIME_TYPE_PATTERN_ = RegExp(
  '^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',
  "i"
);
goog.html.SafeUrl.isSafeMimeType = function (a) {
  return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a);
};
goog.html.SafeUrl.fromBlob = function (a) {
  a = goog.html.SafeUrl.isSafeMimeType(a.type) ? goog.fs.url.createObjectUrl(a) : goog.html.SafeUrl.INNOCUOUS_STRING;
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.SafeUrl.revokeObjectUrl = function (a) {
  a = a.getTypedStringValue();
  a !== goog.html.SafeUrl.INNOCUOUS_STRING && goog.fs.url.revokeObjectUrl(a);
};
goog.html.SafeUrl.fromMediaSource = function (a) {
  goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource");
  a = a instanceof MediaSource ? goog.fs.url.createObjectUrl(a) : goog.html.SafeUrl.INNOCUOUS_STRING;
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
goog.html.SafeUrl.tryFromDataUrl = function (a) {
  a = String(a);
  a = a.replace(/(%0A|%0D)/g, "");
  return a.match(goog.html.DATA_URL_PATTERN_) ? goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a) : null;
};
goog.html.SafeUrl.fromDataUrl = function (a) {
  return goog.html.SafeUrl.tryFromDataUrl(a) || goog.html.SafeUrl.INNOCUOUS_URL;
};
goog.html.SafeUrl.fromTelUrl = function (a) {
  goog.string.internal.caseInsensitiveStartsWith(a, "tel:") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.SIP_URL_PATTERN_ = RegExp("^sip[s]?:[+a-z0-9_.!$%&'*\\/=^`{|}~-]+@([a-z0-9-]+\\.)+[a-z0-9]{2,63}$", "i");
goog.html.SafeUrl.fromSipUrl = function (a) {
  goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a)) || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.SafeUrl.fromFacebookMessengerUrl = function (a) {
  goog.string.internal.caseInsensitiveStartsWith(a, "fb-messenger://share") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.SafeUrl.fromWhatsAppUrl = function (a) {
  goog.string.internal.caseInsensitiveStartsWith(a, "whatsapp://send") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.SafeUrl.fromSmsUrl = function (a) {
  (goog.string.internal.caseInsensitiveStartsWith(a, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a)) ||
    (a = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.SafeUrl.isSmsUrlBodyValid_ = function (a) {
  var b = a.indexOf("#");
  0 < b && (a = a.substring(0, b));
  b = a.match(/[?&]body=/gi);
  if (!b) return !0;
  if (1 < b.length) return !1;
  a = a.match(/[?&]body=([^&]*)/)[1];
  if (!a) return !0;
  try {
    decodeURIComponent(a);
  } catch (c) {
    return !1;
  }
  return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a);
};
goog.html.SafeUrl.fromSshUrl = function (a) {
  goog.string.internal.caseInsensitiveStartsWith(a, "ssh://") || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (a, b) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a, b);
};
goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (a, b) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a, b);
};
goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (a, b) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a, b);
};
goog.html.SafeUrl.sanitizeExtensionUrl_ = function (a, b, c) {
  (a = a.exec(b))
    ? ((a = a[1]),
      -1 ==
        (c instanceof goog.string.Const
          ? [goog.string.Const.unwrap(c)]
          : c.map(function (d) {
              return goog.string.Const.unwrap(d);
            })
        ).indexOf(a) && (b = goog.html.SafeUrl.INNOCUOUS_STRING))
    : (b = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.SafeUrl.fromTrustedResourceUrl = function (a) {
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a));
};
goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
goog.html.SafeUrl.trySanitize = function (a) {
  if (a instanceof goog.html.SafeUrl) return a;
  a = "object" == typeof a && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
  return goog.html.SAFE_URL_PATTERN_.test(a)
    ? goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)
    : goog.html.SafeUrl.tryFromDataUrl(a);
};
goog.html.SafeUrl.sanitize = function (a) {
  return goog.html.SafeUrl.trySanitize(a) || goog.html.SafeUrl.INNOCUOUS_URL;
};
goog.html.SafeUrl.sanitizeAssertUnchanged = function (a, b) {
  if (a instanceof goog.html.SafeUrl) return a;
  a = "object" == typeof a && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
  if (b && /^data:/i.test(a) && ((b = goog.html.SafeUrl.fromDataUrl(a)), b.getTypedStringValue() == a)) return b;
  goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a), "%s does not match the safe URL pattern", a) ||
    (a = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.SafeUrl.ASSUME_IMPLEMENTS_URL_API_GOOG = 2020 <= goog.FEATURESET_YEAR;
goog.html.SafeUrl.supportsURLAPI = (function () {
  if (goog.html.SafeUrl.ASSUME_IMPLEMENTS_URL_API_GOOG) return !0;
  try {
    return new URL("s://g"), !0;
  } catch (a) {
    return !1;
  }
})();
goog.html.SafeUrl.legacyExtractScheme = function (a) {
  var b = document.createElement("a");
  try {
    b.href = a;
  } catch (c) {
    return;
  }
  a = b.protocol;
  return ":" === a || "" === a ? "https:" : a;
};
goog.html.SafeUrl.extractScheme = function (a) {
  if (!goog.html.SafeUrl.supportsURLAPI) return goog.html.SafeUrl.legacyExtractScheme(a);
  try {
    var b = new URL(a);
  } catch (c) {
    return "https:";
  }
  return b.protocol;
};
goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged = function (a) {
  if (a instanceof goog.html.SafeUrl) return a;
  a = "object" == typeof a && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
  var b = goog.html.SafeUrl.extractScheme(a);
  goog.asserts.assert("javascript:" !== b, "%s is a javascript: URL", a) || (a = goog.html.SafeUrl.INNOCUOUS_STRING);
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a);
};
goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function (a) {
  return new goog.html.SafeUrl(a, goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
};
goog.html.SafeUrl.INNOCUOUS_URL = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.SafeUrl.INNOCUOUS_STRING);
goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
goog.dom.asserts = {};
goog.dom.asserts.assertIsLocation = function (a) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var b = goog.dom.asserts.getWindow_(a);
    b &&
      (!a || (!(a instanceof b.Location) && a instanceof b.Element)) &&
      goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a));
  }
  return a;
};
goog.dom.asserts.debugStringForType_ = function (a) {
  if (goog.isObject(a))
    try {
      return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
    } catch (b) {
      return "<object could not be stringified>";
    }
  else return void 0 === a ? "undefined" : null === a ? "null" : typeof a;
};
goog.dom.asserts.getWindow_ = function (a) {
  try {
    var b = a && a.ownerDocument,
      c = b && (b.defaultView || b.parentWindow);
    c = c || goog.global;
    if (c.Element && c.Location) return c;
  } catch (d) {}
  return null;
};
goog.functions = {};
goog.functions.constant = function (a) {
  return function () {
    return a;
  };
};
goog.functions.FALSE = function () {
  return !1;
};
goog.functions.TRUE = function () {
  return !0;
};
goog.functions.NULL = function () {
  return null;
};
goog.functions.UNDEFINED = function () {};
goog.functions.EMPTY = goog.functions.UNDEFINED;
goog.functions.identity = function (a, b) {
  return a;
};
goog.functions.error = function (a) {
  return function () {
    throw Error(a);
  };
};
goog.functions.fail = function (a) {
  return function () {
    throw a;
  };
};
goog.functions.lock = function (a, b) {
  b = b || 0;
  return function () {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
  };
};
goog.functions.nth = function (a) {
  return function () {
    return arguments[a];
  };
};
goog.functions.partialRight = function (a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function () {
    var d = this;
    d === goog.global && (d = void 0);
    var e = Array.prototype.slice.call(arguments);
    e.push.apply(e, c);
    return a.apply(d, e);
  };
};
goog.functions.withReturnValue = function (a, b) {
  return goog.functions.sequence(a, goog.functions.constant(b));
};
goog.functions.equalTo = function (a, b) {
  return function (c) {
    return b ? a == c : a === c;
  };
};
goog.functions.compose = function (a, b) {
  var c = arguments,
    d = c.length;
  return function () {
    var e;
    d && (e = c[d - 1].apply(this, arguments));
    for (var f = d - 2; 0 <= f; f--) e = c[f].call(this, e);
    return e;
  };
};
goog.functions.sequence = function (a) {
  var b = arguments,
    c = b.length;
  return function () {
    for (var d, e = 0; e < c; e++) d = b[e].apply(this, arguments);
    return d;
  };
};
goog.functions.and = function (a) {
  var b = arguments,
    c = b.length;
  return function () {
    for (var d = 0; d < c; d++) if (!b[d].apply(this, arguments)) return !1;
    return !0;
  };
};
goog.functions.or = function (a) {
  var b = arguments,
    c = b.length;
  return function () {
    for (var d = 0; d < c; d++) if (b[d].apply(this, arguments)) return !0;
    return !1;
  };
};
goog.functions.not = function (a) {
  return function () {
    return !a.apply(this, arguments);
  };
};
goog.functions.create = function (a, b) {
  var c = function () {};
  c.prototype = a.prototype;
  c = new c();
  a.apply(c, Array.prototype.slice.call(arguments, 1));
  return c;
};
goog.functions.CACHE_RETURN_VALUE = !0;
goog.functions.cacheReturnValue = function (a) {
  var b = !1,
    c;
  return function () {
    if (!goog.functions.CACHE_RETURN_VALUE) return a();
    b || ((c = a()), (b = !0));
    return c;
  };
};
goog.functions.once = function (a) {
  var b = a;
  return function () {
    if (b) {
      var c = b;
      b = null;
      c();
    }
  };
};
goog.functions.debounce = function (a, b, c) {
  var d = 0;
  return function (e) {
    goog.global.clearTimeout(d);
    var f = arguments;
    d = goog.global.setTimeout(function () {
      a.apply(c, f);
    }, b);
  };
};
goog.functions.throttle = function (a, b, c) {
  var d = 0,
    e = !1,
    f = [],
    g = function () {
      d = 0;
      e && ((e = !1), h());
    },
    h = function () {
      d = goog.global.setTimeout(g, b);
      var k = f;
      f = [];
      a.apply(c, k);
    };
  return function (k) {
    f = arguments;
    d ? (e = !0) : h();
  };
};
goog.functions.rateLimit = function (a, b, c) {
  var d = 0,
    e = function () {
      d = 0;
    };
  return function (f) {
    d || ((d = goog.global.setTimeout(e, b)), a.apply(c, arguments));
  };
};
goog.functions.isFunction = function (a) {
  return "function" === typeof a;
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
var module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
goog.array.ASSUME_NATIVE_FUNCTIONS = module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS;
function module$contents$goog$array_peek(a) {
  return a[a.length - 1];
}
goog.array.peek = module$contents$goog$array_peek;
goog.array.last = module$contents$goog$array_peek;
var module$contents$goog$array_indexOf =
  goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
    ? function (a, b, c) {
        goog.asserts.assert(null != a.length);
        return Array.prototype.indexOf.call(a, b, c);
      }
    : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, c);
        for (; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
goog.array.indexOf = module$contents$goog$array_indexOf;
var module$contents$goog$array_lastIndexOf =
  goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf)
    ? function (a, b, c) {
        goog.asserts.assert(null != a.length);
        return Array.prototype.lastIndexOf.call(a, b, null == c ? a.length - 1 : c);
      }
    : function (a, b, c) {
        c = null == c ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
        for (; 0 <= c; c--) if (c in a && a[c] === b) return c;
        return -1;
      };
goog.array.lastIndexOf = module$contents$goog$array_lastIndexOf;
var module$contents$goog$array_forEach =
  goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
    ? function (a, b, c) {
        goog.asserts.assert(null != a.length);
        Array.prototype.forEach.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
      };
goog.array.forEach = module$contents$goog$array_forEach;
function module$contents$goog$array_forEachRight(a, b, c) {
  var d = a.length,
    e = "string" === typeof a ? a.split("") : a;
  for (--d; 0 <= d; --d) d in e && b.call(c, e[d], d, a);
}
goog.array.forEachRight = module$contents$goog$array_forEachRight;
var module$contents$goog$array_filter =
  goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
    ? function (a, b, c) {
        goog.asserts.assert(null != a.length);
        return Array.prototype.filter.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = [], f = 0, g = "string" === typeof a ? a.split("") : a, h = 0; h < d; h++)
          if (h in g) {
            var k = g[h];
            b.call(c, k, h, a) && (e[f++] = k);
          }
        return e;
      };
goog.array.filter = module$contents$goog$array_filter;
var module$contents$goog$array_map =
  goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
    ? function (a, b, c) {
        goog.asserts.assert(null != a.length);
        return Array.prototype.map.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++)
          g in f && (e[g] = b.call(c, f[g], g, a));
        return e;
      };
goog.array.map = module$contents$goog$array_map;
var module$contents$goog$array_reduce =
  goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
    ? function (a, b, c, d) {
        goog.asserts.assert(null != a.length);
        d && (b = goog.bind(b, d));
        return Array.prototype.reduce.call(a, b, c);
      }
    : function (a, b, c, d) {
        var e = c;
        module$contents$goog$array_forEach(a, function (f, g) {
          e = b.call(d, e, f, g, a);
        });
        return e;
      };
goog.array.reduce = module$contents$goog$array_reduce;
var module$contents$goog$array_reduceRight =
  goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight)
    ? function (a, b, c, d) {
        goog.asserts.assert(null != a.length);
        goog.asserts.assert(null != b);
        d && (b = goog.bind(b, d));
        return Array.prototype.reduceRight.call(a, b, c);
      }
    : function (a, b, c, d) {
        var e = c;
        module$contents$goog$array_forEachRight(a, function (f, g) {
          e = b.call(d, e, f, g, a);
        });
        return e;
      };
goog.array.reduceRight = module$contents$goog$array_reduceRight;
var module$contents$goog$array_some =
  goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
    ? function (a, b, c) {
        goog.asserts.assert(null != a.length);
        return Array.prototype.some.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1;
      };
goog.array.some = module$contents$goog$array_some;
var module$contents$goog$array_every =
  goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
    ? function (a, b, c) {
        goog.asserts.assert(null != a.length);
        return Array.prototype.every.call(a, b, c);
      }
    : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && !b.call(c, e[f], f, a)) return !1;
        return !0;
      };
goog.array.every = module$contents$goog$array_every;
function module$contents$goog$array_count(a, b, c) {
  var d = 0;
  module$contents$goog$array_forEach(
    a,
    function (e, f, g) {
      b.call(c, e, f, g) && ++d;
    },
    c
  );
  return d;
}
goog.array.count = module$contents$goog$array_count;
function module$contents$goog$array_find(a, b, c) {
  b = module$contents$goog$array_findIndex(a, b, c);
  return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
}
goog.array.find = module$contents$goog$array_find;
function module$contents$goog$array_findIndex(a, b, c) {
  for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f;
  return -1;
}
goog.array.findIndex = module$contents$goog$array_findIndex;
function module$contents$goog$array_findRight(a, b, c) {
  b = module$contents$goog$array_findIndexRight(a, b, c);
  return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
}
goog.array.findRight = module$contents$goog$array_findRight;
function module$contents$goog$array_findIndexRight(a, b, c) {
  var d = a.length,
    e = "string" === typeof a ? a.split("") : a;
  for (--d; 0 <= d; d--) if (d in e && b.call(c, e[d], d, a)) return d;
  return -1;
}
goog.array.findIndexRight = module$contents$goog$array_findIndexRight;
function module$contents$goog$array_contains(a, b) {
  return 0 <= module$contents$goog$array_indexOf(a, b);
}
goog.array.contains = module$contents$goog$array_contains;
function module$contents$goog$array_isEmpty(a) {
  return 0 == a.length;
}
goog.array.isEmpty = module$contents$goog$array_isEmpty;
function module$contents$goog$array_clear(a) {
  if (!Array.isArray(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
  a.length = 0;
}
goog.array.clear = module$contents$goog$array_clear;
function module$contents$goog$array_insert(a, b) {
  module$contents$goog$array_contains(a, b) || a.push(b);
}
goog.array.insert = module$contents$goog$array_insert;
function module$contents$goog$array_insertAt(a, b, c) {
  module$contents$goog$array_splice(a, c, 0, b);
}
goog.array.insertAt = module$contents$goog$array_insertAt;
function module$contents$goog$array_insertArrayAt(a, b, c) {
  goog.partial(module$contents$goog$array_splice, a, c, 0).apply(null, b);
}
goog.array.insertArrayAt = module$contents$goog$array_insertArrayAt;
function module$contents$goog$array_insertBefore(a, b, c) {
  var d;
  2 == arguments.length || 0 > (d = module$contents$goog$array_indexOf(a, c)) ? a.push(b) : module$contents$goog$array_insertAt(a, b, d);
}
goog.array.insertBefore = module$contents$goog$array_insertBefore;
function module$contents$goog$array_remove(a, b) {
  b = module$contents$goog$array_indexOf(a, b);
  var c;
  (c = 0 <= b) && module$contents$goog$array_removeAt(a, b);
  return c;
}
goog.array.remove = module$contents$goog$array_remove;
function module$contents$goog$array_removeLast(a, b) {
  b = module$contents$goog$array_lastIndexOf(a, b);
  return 0 <= b ? (module$contents$goog$array_removeAt(a, b), !0) : !1;
}
goog.array.removeLast = module$contents$goog$array_removeLast;
function module$contents$goog$array_removeAt(a, b) {
  goog.asserts.assert(null != a.length);
  return 1 == Array.prototype.splice.call(a, b, 1).length;
}
goog.array.removeAt = module$contents$goog$array_removeAt;
function module$contents$goog$array_removeIf(a, b, c) {
  b = module$contents$goog$array_findIndex(a, b, c);
  return 0 <= b ? (module$contents$goog$array_removeAt(a, b), !0) : !1;
}
goog.array.removeIf = module$contents$goog$array_removeIf;
function module$contents$goog$array_removeAllIf(a, b, c) {
  var d = 0;
  module$contents$goog$array_forEachRight(a, function (e, f) {
    b.call(c, e, f, a) && module$contents$goog$array_removeAt(a, f) && d++;
  });
  return d;
}
goog.array.removeAllIf = module$contents$goog$array_removeAllIf;
function module$contents$goog$array_concat(a) {
  return Array.prototype.concat.apply([], arguments);
}
goog.array.concat = module$contents$goog$array_concat;
function module$contents$goog$array_join(a) {
  return Array.prototype.concat.apply([], arguments);
}
goog.array.join = module$contents$goog$array_join;
function module$contents$goog$array_toArray(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c;
  }
  return [];
}
var module$contents$goog$array_clone = (goog.array.toArray = module$contents$goog$array_toArray);
goog.array.clone = module$contents$goog$array_toArray;
function module$contents$goog$array_extend(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (goog.isArrayLike(d)) {
      var e = a.length || 0,
        f = d.length || 0;
      a.length = e + f;
      for (var g = 0; g < f; g++) a[e + g] = d[g];
    } else a.push(d);
  }
}
goog.array.extend = module$contents$goog$array_extend;
function module$contents$goog$array_splice(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  return Array.prototype.splice.apply(a, module$contents$goog$array_slice(arguments, 1));
}
goog.array.splice = module$contents$goog$array_splice;
function module$contents$goog$array_slice(a, b, c) {
  goog.asserts.assert(null != a.length);
  return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
}
goog.array.slice = module$contents$goog$array_slice;
function module$contents$goog$array_removeDuplicates(a, b, c) {
  b = b || a;
  var d = function (k) {
    return goog.isObject(k) ? "o" + goog.getUid(k) : (typeof k).charAt(0) + k;
  };
  c = c || d;
  for (var e = (d = 0), f = {}; e < a.length; ) {
    var g = a[e++],
      h = c(g);
    Object.prototype.hasOwnProperty.call(f, h) || ((f[h] = !0), (b[d++] = g));
  }
  b.length = d;
}
goog.array.removeDuplicates = module$contents$goog$array_removeDuplicates;
function module$contents$goog$array_binarySearch(a, b, c) {
  return module$contents$goog$array_binarySearch_(a, c || module$contents$goog$array_defaultCompare, !1, b);
}
goog.array.binarySearch = module$contents$goog$array_binarySearch;
function module$contents$goog$array_binarySelect(a, b, c) {
  return module$contents$goog$array_binarySearch_(a, b, !0, void 0, c);
}
goog.array.binarySelect = module$contents$goog$array_binarySelect;
function module$contents$goog$array_binarySearch_(a, b, c, d, e) {
  for (var f = 0, g = a.length, h; f < g; ) {
    var k = f + ((g - f) >>> 1);
    var l = c ? b.call(e, a[k], k, a) : b(d, a[k]);
    0 < l ? (f = k + 1) : ((g = k), (h = !l));
  }
  return h ? f : -f - 1;
}
function module$contents$goog$array_sort(a, b) {
  a.sort(b || module$contents$goog$array_defaultCompare);
}
goog.array.sort = module$contents$goog$array_sort;
function module$contents$goog$array_stableSort(a, b) {
  for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = { index: d, value: a[d] };
  var e = b || module$contents$goog$array_defaultCompare;
  module$contents$goog$array_sort(c, function (f, g) {
    return e(f.value, g.value) || f.index - g.index;
  });
  for (b = 0; b < a.length; b++) a[b] = c[b].value;
}
goog.array.stableSort = module$contents$goog$array_stableSort;
function module$contents$goog$array_sortByKey(a, b, c) {
  var d = c || module$contents$goog$array_defaultCompare;
  module$contents$goog$array_sort(a, function (e, f) {
    return d(b(e), b(f));
  });
}
goog.array.sortByKey = module$contents$goog$array_sortByKey;
function module$contents$goog$array_sortObjectsByKey(a, b, c) {
  module$contents$goog$array_sortByKey(
    a,
    function (d) {
      return d[b];
    },
    c
  );
}
goog.array.sortObjectsByKey = module$contents$goog$array_sortObjectsByKey;
function module$contents$goog$array_isSorted(a, b, c) {
  b = b || module$contents$goog$array_defaultCompare;
  for (var d = 1; d < a.length; d++) {
    var e = b(a[d - 1], a[d]);
    if (0 < e || (0 == e && c)) return !1;
  }
  return !0;
}
goog.array.isSorted = module$contents$goog$array_isSorted;
function module$contents$goog$array_equals(a, b, c) {
  if (!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length) return !1;
  var d = a.length;
  c = c || module$contents$goog$array_defaultCompareEquality;
  for (var e = 0; e < d; e++) if (!c(a[e], b[e])) return !1;
  return !0;
}
goog.array.equals = module$contents$goog$array_equals;
function module$contents$goog$array_compare3(a, b, c) {
  c = c || module$contents$goog$array_defaultCompare;
  for (var d = Math.min(a.length, b.length), e = 0; e < d; e++) {
    var f = c(a[e], b[e]);
    if (0 != f) return f;
  }
  return module$contents$goog$array_defaultCompare(a.length, b.length);
}
goog.array.compare3 = module$contents$goog$array_compare3;
function module$contents$goog$array_defaultCompare(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
goog.array.defaultCompare = module$contents$goog$array_defaultCompare;
function module$contents$goog$array_inverseDefaultCompare(a, b) {
  return -module$contents$goog$array_defaultCompare(a, b);
}
goog.array.inverseDefaultCompare = module$contents$goog$array_inverseDefaultCompare;
function module$contents$goog$array_defaultCompareEquality(a, b) {
  return a === b;
}
goog.array.defaultCompareEquality = module$contents$goog$array_defaultCompareEquality;
function module$contents$goog$array_binaryInsert(a, b, c) {
  c = module$contents$goog$array_binarySearch(a, b, c);
  return 0 > c ? (module$contents$goog$array_insertAt(a, b, -(c + 1)), !0) : !1;
}
goog.array.binaryInsert = module$contents$goog$array_binaryInsert;
function module$contents$goog$array_binaryRemove(a, b, c) {
  b = module$contents$goog$array_binarySearch(a, b, c);
  return 0 <= b ? module$contents$goog$array_removeAt(a, b) : !1;
}
goog.array.binaryRemove = module$contents$goog$array_binaryRemove;
function module$contents$goog$array_bucket(a, b, c) {
  for (var d = {}, e = 0; e < a.length; e++) {
    var f = a[e],
      g = b.call(c, f, e, a);
    void 0 !== g && (d[g] || (d[g] = [])).push(f);
  }
  return d;
}
goog.array.bucket = module$contents$goog$array_bucket;
function module$contents$goog$array_bucketToMap(a, b) {
  for (var c = new Map(), d = 0; d < a.length; d++) {
    var e = a[d],
      f = b(e, d, a);
    if (void 0 !== f) {
      var g = c.get(f);
      g || ((g = []), c.set(f, g));
      g.push(e);
    }
  }
  return c;
}
goog.array.bucketToMap = module$contents$goog$array_bucketToMap;
function module$contents$goog$array_toObject(a, b, c) {
  var d = {};
  module$contents$goog$array_forEach(a, function (e, f) {
    d[b.call(c, e, f, a)] = e;
  });
  return d;
}
goog.array.toObject = module$contents$goog$array_toObject;
function module$contents$goog$array_toMap(a, b) {
  for (var c = new Map(), d = 0; d < a.length; d++) {
    var e = a[d];
    c.set(b(e, d, a), e);
  }
  return c;
}
goog.array.toMap = module$contents$goog$array_toMap;
function module$contents$goog$array_range(a, b, c) {
  var d = [],
    e = 0,
    f = a;
  c = c || 1;
  void 0 !== b && ((e = a), (f = b));
  if (0 > c * (f - e)) return [];
  if (0 < c) for (a = e; a < f; a += c) d.push(a);
  else for (a = e; a > f; a += c) d.push(a);
  return d;
}
goog.array.range = module$contents$goog$array_range;
function module$contents$goog$array_repeat(a, b) {
  for (var c = [], d = 0; d < b; d++) c[d] = a;
  return c;
}
goog.array.repeat = module$contents$goog$array_repeat;
function module$contents$goog$array_flatten(a) {
  for (var b = [], c = 0; c < arguments.length; c++) {
    var d = arguments[c];
    if (Array.isArray(d))
      for (var e = 0; e < d.length; e += 8192) {
        var f = module$contents$goog$array_slice(d, e, e + 8192);
        f = module$contents$goog$array_flatten.apply(null, f);
        for (var g = 0; g < f.length; g++) b.push(f[g]);
      }
    else b.push(d);
  }
  return b;
}
goog.array.flatten = module$contents$goog$array_flatten;
function module$contents$goog$array_rotate(a, b) {
  goog.asserts.assert(null != a.length);
  a.length &&
    ((b %= a.length), 0 < b ? Array.prototype.unshift.apply(a, a.splice(-b, b)) : 0 > b && Array.prototype.push.apply(a, a.splice(0, -b)));
  return a;
}
goog.array.rotate = module$contents$goog$array_rotate;
function module$contents$goog$array_moveItem(a, b, c) {
  goog.asserts.assert(0 <= b && b < a.length);
  goog.asserts.assert(0 <= c && c < a.length);
  b = Array.prototype.splice.call(a, b, 1);
  Array.prototype.splice.call(a, c, 0, b[0]);
}
goog.array.moveItem = module$contents$goog$array_moveItem;
function module$contents$goog$array_zip(a) {
  if (!arguments.length) return [];
  for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
  for (d = 0; d < c; d++) {
    for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
    b.push(e);
  }
  return b;
}
goog.array.zip = module$contents$goog$array_zip;
function module$contents$goog$array_shuffle(a, b) {
  b = b || Math.random;
  for (var c = a.length - 1; 0 < c; c--) {
    var d = Math.floor(b() * (c + 1)),
      e = a[c];
    a[c] = a[d];
    a[d] = e;
  }
}
goog.array.shuffle = module$contents$goog$array_shuffle;
function module$contents$goog$array_copyByIndex(a, b) {
  var c = [];
  module$contents$goog$array_forEach(b, function (d) {
    c.push(a[d]);
  });
  return c;
}
goog.array.copyByIndex = module$contents$goog$array_copyByIndex;
function module$contents$goog$array_concatMap(a, b, c) {
  return module$contents$goog$array_concat.apply([], module$contents$goog$array_map(a, b, c));
}
goog.array.concatMap = module$contents$goog$array_concatMap;
goog.object = {};
function module$contents$goog$object_forEach(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a);
}
function module$contents$goog$object_filter(a, b, c) {
  var d = {},
    e;
  for (e in a) b.call(c, a[e], e, a) && (d[e] = a[e]);
  return d;
}
function module$contents$goog$object_map(a, b, c) {
  var d = {},
    e;
  for (e in a) d[e] = b.call(c, a[e], e, a);
  return d;
}
function module$contents$goog$object_some(a, b, c) {
  for (var d in a) if (b.call(c, a[d], d, a)) return !0;
  return !1;
}
function module$contents$goog$object_every(a, b, c) {
  for (var d in a) if (!b.call(c, a[d], d, a)) return !1;
  return !0;
}
function module$contents$goog$object_getCount(a) {
  var b = 0,
    c;
  for (c in a) b++;
  return b;
}
function module$contents$goog$object_getAnyKey(a) {
  for (var b in a) return b;
}
function module$contents$goog$object_getAnyValue(a) {
  for (var b in a) return a[b];
}
function module$contents$goog$object_contains(a, b) {
  return module$contents$goog$object_containsValue(a, b);
}
function module$contents$goog$object_getValues(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = a[d];
  return b;
}
function module$contents$goog$object_getKeys(a) {
  var b = [],
    c = 0,
    d;
  for (d in a) b[c++] = d;
  return b;
}
function module$contents$goog$object_getValueByKeys(a, b) {
  var c = goog.isArrayLike(b),
    d = c ? b : arguments;
  for (c = c ? 0 : 1; c < d.length; c++) {
    if (null == a) return;
    a = a[d[c]];
  }
  return a;
}
function module$contents$goog$object_containsKey(a, b) {
  return null !== a && b in a;
}
function module$contents$goog$object_containsValue(a, b) {
  for (var c in a) if (a[c] == b) return !0;
  return !1;
}
function module$contents$goog$object_findKey(a, b, c) {
  for (var d in a) if (b.call(c, a[d], d, a)) return d;
}
function module$contents$goog$object_findValue(a, b, c) {
  return (b = module$contents$goog$object_findKey(a, b, c)) && a[b];
}
function module$contents$goog$object_isEmpty(a) {
  for (var b in a) return !1;
  return !0;
}
function module$contents$goog$object_clear(a) {
  for (var b in a) delete a[b];
}
function module$contents$goog$object_remove(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c;
}
function module$contents$goog$object_add(a, b, c) {
  if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
  module$contents$goog$object_set(a, b, c);
}
function module$contents$goog$object_get(a, b, c) {
  return null !== a && b in a ? a[b] : c;
}
function module$contents$goog$object_set(a, b, c) {
  a[b] = c;
}
function module$contents$goog$object_setIfUndefined(a, b, c) {
  return b in a ? a[b] : (a[b] = c);
}
function module$contents$goog$object_setWithReturnValueIfNotSet(a, b, c) {
  if (b in a) return a[b];
  c = c();
  return (a[b] = c);
}
function module$contents$goog$object_equals(a, b) {
  for (var c in a) if (!(c in b) || a[c] !== b[c]) return !1;
  for (var d in b) if (!(d in a)) return !1;
  return !0;
}
function module$contents$goog$object_clone(a) {
  var b = {},
    c;
  for (c in a) b[c] = a[c];
  return b;
}
function module$contents$goog$object_unsafeClone(a) {
  if (!a || "object" !== typeof a) return a;
  if ("function" === typeof a.clone) return a.clone();
  if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
  if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
  if (a instanceof Date) return new Date(a.getTime());
  var b = Array.isArray(a)
      ? []
      : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView
      ? {}
      : new a.constructor(a.length),
    c;
  for (c in a) b[c] = module$contents$goog$object_unsafeClone(a[c]);
  return b;
}
function module$contents$goog$object_transpose(a) {
  var b = {},
    c;
  for (c in a) b[a[c]] = c;
  return b;
}
var module$contents$goog$object_PROTOTYPE_FIELDS =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function module$contents$goog$object_extend(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (var f = 0; f < module$contents$goog$object_PROTOTYPE_FIELDS.length; f++)
      (c = module$contents$goog$object_PROTOTYPE_FIELDS[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function module$contents$goog$object_create(a) {
  var b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) return module$contents$goog$object_create.apply(null, arguments[0]);
  if (b % 2) throw Error("Uneven number of arguments");
  for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
  return c;
}
function module$contents$goog$object_createSet(a) {
  var b = arguments.length;
  if (1 == b && Array.isArray(arguments[0])) return module$contents$goog$object_createSet.apply(null, arguments[0]);
  for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
  return c;
}
function module$contents$goog$object_createImmutableView(a) {
  var b = a;
  Object.isFrozen && !Object.isFrozen(a) && ((b = Object.create(a)), Object.freeze(b));
  return b;
}
function module$contents$goog$object_isImmutableView(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
}
function module$contents$goog$object_getAllPropertyNames(a, b, c) {
  if (!a) return [];
  if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return module$contents$goog$object_getKeys(a);
  for (var d = {}; a && (a !== Object.prototype || b) && (a !== Function.prototype || c); ) {
    for (var e = Object.getOwnPropertyNames(a), f = 0; f < e.length; f++) d[e[f]] = !0;
    a = Object.getPrototypeOf(a);
  }
  return module$contents$goog$object_getKeys(d);
}
function module$contents$goog$object_getSuperClass(a) {
  return (a = Object.getPrototypeOf(a.prototype)) && a.constructor;
}
goog.object.add = module$contents$goog$object_add;
goog.object.clear = module$contents$goog$object_clear;
goog.object.clone = module$contents$goog$object_clone;
goog.object.contains = module$contents$goog$object_contains;
goog.object.containsKey = module$contents$goog$object_containsKey;
goog.object.containsValue = module$contents$goog$object_containsValue;
goog.object.create = module$contents$goog$object_create;
goog.object.createImmutableView = module$contents$goog$object_createImmutableView;
goog.object.createSet = module$contents$goog$object_createSet;
goog.object.equals = module$contents$goog$object_equals;
goog.object.every = module$contents$goog$object_every;
goog.object.extend = module$contents$goog$object_extend;
goog.object.filter = module$contents$goog$object_filter;
goog.object.findKey = module$contents$goog$object_findKey;
goog.object.findValue = module$contents$goog$object_findValue;
goog.object.forEach = module$contents$goog$object_forEach;
goog.object.get = module$contents$goog$object_get;
goog.object.getAllPropertyNames = module$contents$goog$object_getAllPropertyNames;
goog.object.getAnyKey = module$contents$goog$object_getAnyKey;
goog.object.getAnyValue = module$contents$goog$object_getAnyValue;
goog.object.getCount = module$contents$goog$object_getCount;
goog.object.getKeys = module$contents$goog$object_getKeys;
goog.object.getSuperClass = module$contents$goog$object_getSuperClass;
goog.object.getValueByKeys = module$contents$goog$object_getValueByKeys;
goog.object.getValues = module$contents$goog$object_getValues;
goog.object.isEmpty = module$contents$goog$object_isEmpty;
goog.object.isImmutableView = module$contents$goog$object_isImmutableView;
goog.object.map = module$contents$goog$object_map;
goog.object.remove = module$contents$goog$object_remove;
goog.object.set = module$contents$goog$object_set;
goog.object.setIfUndefined = module$contents$goog$object_setIfUndefined;
goog.object.setWithReturnValueIfNotSet = module$contents$goog$object_setWithReturnValueIfNotSet;
goog.object.some = module$contents$goog$object_some;
goog.object.transpose = module$contents$goog$object_transpose;
goog.object.unsafeClone = module$contents$goog$object_unsafeClone;
goog.dom.tags = {};
goog.dom.tags.VOID_TAGS_ = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  command: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
goog.dom.tags.isVoidTag = function (a) {
  return !0 === goog.dom.tags.VOID_TAGS_[a];
};
var module$contents$goog$html$SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE = {},
  module$contents$goog$html$SafeStyle_SafeStyle = function (a, b) {
    this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = b === module$contents$goog$html$SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE ? a : "";
    this.implementsGoogStringTypedString = !0;
  };
module$contents$goog$html$SafeStyle_SafeStyle.fromConstant = function (a) {
  a = goog.string.Const.unwrap(a);
  if (0 === a.length) return module$contents$goog$html$SafeStyle_SafeStyle.EMPTY;
  (0, goog.asserts.assert)((0, goog.string.internal.endsWith)(a, ";"), "Last character of style string is not ';': " + a);
  (0, goog.asserts.assert)(
    (0, goog.string.internal.contains)(a, ":"),
    "Style string must contain at least one ':', to specify a \"name: value\" pair: " + a
  );
  return module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a);
};
module$contents$goog$html$SafeStyle_SafeStyle.prototype.getTypedStringValue = function () {
  return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
};
module$contents$goog$html$SafeStyle_SafeStyle.prototype.toString = function () {
  return this.privateDoNotAccessOrElseSafeStyleWrappedValue_.toString();
};
module$contents$goog$html$SafeStyle_SafeStyle.unwrap = function (a) {
  if (a instanceof module$contents$goog$html$SafeStyle_SafeStyle && a.constructor === module$contents$goog$html$SafeStyle_SafeStyle)
    return a.privateDoNotAccessOrElseSafeStyleWrappedValue_;
  (0, goog.asserts.fail)("expected object of type SafeStyle, got '" + a + "' of type " + goog.typeOf(a));
  return "type_error:SafeStyle";
};
module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function (a) {
  return new module$contents$goog$html$SafeStyle_SafeStyle(a, module$contents$goog$html$SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE);
};
module$contents$goog$html$SafeStyle_SafeStyle.create = function (a) {
  var b = "",
    c;
  for (c in a)
    if (Object.prototype.hasOwnProperty.call(a, c)) {
      if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
      var d = a[c];
      null != d &&
        ((d = Array.isArray(d)
          ? d.map(module$contents$goog$html$SafeStyle_sanitizePropertyValue).join(" ")
          : module$contents$goog$html$SafeStyle_sanitizePropertyValue(d)),
        (b += c + ":" + d + ";"));
    }
  return b
    ? module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b)
    : module$contents$goog$html$SafeStyle_SafeStyle.EMPTY;
};
module$contents$goog$html$SafeStyle_SafeStyle.concat = function (a) {
  var b = "",
    c = function (d) {
      Array.isArray(d) ? d.forEach(c) : (b += module$contents$goog$html$SafeStyle_SafeStyle.unwrap(d));
    };
  Array.prototype.forEach.call(arguments, c);
  return b
    ? module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b)
    : module$contents$goog$html$SafeStyle_SafeStyle.EMPTY;
};
module$contents$goog$html$SafeStyle_SafeStyle.EMPTY =
  module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING = "zClosurez";
function module$contents$goog$html$SafeStyle_sanitizePropertyValue(a) {
  if (a instanceof goog.html.SafeUrl) return 'url("' + goog.html.SafeUrl.unwrap(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
  a =
    a instanceof goog.string.Const
      ? goog.string.Const.unwrap(a)
      : module$contents$goog$html$SafeStyle_sanitizePropertyValueString(String(a));
  if (/[{;}]/.test(a)) throw new module$contents$goog$asserts_AssertionError("Value does not allow [{;}], got: %s.", [a]);
  return a;
}
function module$contents$goog$html$SafeStyle_sanitizePropertyValueString(a) {
  var b = a
    .replace(module$contents$goog$html$SafeStyle_FUNCTIONS_RE, "$1")
    .replace(module$contents$goog$html$SafeStyle_FUNCTIONS_RE, "$1")
    .replace(module$contents$goog$html$SafeStyle_URL_RE, "url");
  if (module$contents$goog$html$SafeStyle_VALUE_RE.test(b)) {
    if (module$contents$goog$html$SafeStyle_COMMENT_RE.test(a))
      return (
        (0, goog.asserts.fail)("String value disallows comments, got: " + a), module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING
      );
    if (!module$contents$goog$html$SafeStyle_hasBalancedQuotes(a))
      return (
        (0, goog.asserts.fail)("String value requires balanced quotes, got: " + a),
        module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING
      );
    if (!module$contents$goog$html$SafeStyle_hasBalancedSquareBrackets(a))
      return (
        (0, goog.asserts.fail)("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a),
        module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING
      );
  } else
    return (
      (0, goog.asserts.fail)(
        "String value allows only " + module$contents$goog$html$SafeStyle_VALUE_ALLOWED_CHARS + " and simple functions, got: " + a
      ),
      module$contents$goog$html$SafeStyle_SafeStyle.INNOCUOUS_STRING
    );
  return module$contents$goog$html$SafeStyle_sanitizeUrl(a);
}
function module$contents$goog$html$SafeStyle_hasBalancedQuotes(a) {
  for (var b = !0, c = !0, d = 0; d < a.length; d++) {
    var e = a.charAt(d);
    "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
  }
  return b && c;
}
function module$contents$goog$html$SafeStyle_hasBalancedSquareBrackets(a) {
  for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
    var e = a.charAt(d);
    if ("]" == e) {
      if (b) return !1;
      b = !0;
    } else if ("[" == e) {
      if (!b) return !1;
      b = !1;
    } else if (!b && !c.test(e)) return !1;
  }
  return b;
}
var module$contents$goog$html$SafeStyle_VALUE_ALLOWED_CHARS = "[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]",
  module$contents$goog$html$SafeStyle_VALUE_RE = new RegExp("^" + module$contents$goog$html$SafeStyle_VALUE_ALLOWED_CHARS + "+$"),
  module$contents$goog$html$SafeStyle_URL_RE = RegExp(
    "\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))",
    "g"
  ),
  module$contents$goog$html$SafeStyle_ALLOWED_FUNCTIONS =
    "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax radial-gradient repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)? steps var".split(
      " "
    ),
  module$contents$goog$html$SafeStyle_FUNCTIONS_RE = new RegExp(
    "\\b(" + module$contents$goog$html$SafeStyle_ALLOWED_FUNCTIONS.join("|") + ")\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
    "g"
  ),
  module$contents$goog$html$SafeStyle_COMMENT_RE = /\/\*/;
function module$contents$goog$html$SafeStyle_sanitizeUrl(a) {
  return a.replace(module$contents$goog$html$SafeStyle_URL_RE, function (b, c, d, e) {
    var f = "";
    d = d.replace(/^(['"])(.*)\1$/, function (g, h, k) {
      f = h;
      return k;
    });
    b = goog.html.SafeUrl.sanitize(d).getTypedStringValue();
    return c + f + b + f + e;
  });
}
goog.html.SafeStyle = module$contents$goog$html$SafeStyle_SafeStyle;
var module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE = {},
  module$contents$goog$html$SafeStyleSheet_SafeStyleSheet = function (a, b) {
    this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ =
      b === module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE ? a : "";
    this.implementsGoogStringTypedString = !0;
  };
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.prototype.toString = function () {
  return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_.toString();
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createRule = function (a, b) {
  if ((0, goog.string.internal.contains)(a, "<")) throw Error("Selector does not allow '<', got: " + a);
  var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
  if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))
    throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
  if (!module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.hasBalancedBrackets_(c))
    throw Error("() and [] in selector must be balanced, got: " + a);
  b instanceof module$contents$goog$html$SafeStyle_SafeStyle || (b = module$contents$goog$html$SafeStyle_SafeStyle.create(b));
  a = a + "{" + module$contents$goog$html$SafeStyle_SafeStyle.unwrap(b).replace(/</g, "\\3C ") + "}";
  return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a);
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.hasBalancedBrackets_ = function (a) {
  for (var b = { "(": ")", "[": "]" }, c = [], d = 0; d < a.length; d++) {
    var e = a[d];
    if (b[e]) c.push(b[e]);
    else if (module$contents$goog$object_contains(b, e) && c.pop() != e) return !1;
  }
  return 0 == c.length;
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.concat = function (a) {
  var b = "",
    c = function (d) {
      Array.isArray(d) ? d.forEach(c) : (b += module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap(d));
    };
  Array.prototype.forEach.call(arguments, c);
  return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b);
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.fromConstant = function (a) {
  a = goog.string.Const.unwrap(a);
  if (0 === a.length) return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.EMPTY;
  (0, goog.asserts.assert)(!(0, goog.string.internal.contains)(a, "<"), "Forbidden '<' character in style sheet string: " + a);
  return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a);
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.prototype.getTypedStringValue = function () {
  return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap = function (a) {
  if (
    a instanceof module$contents$goog$html$SafeStyleSheet_SafeStyleSheet &&
    a.constructor === module$contents$goog$html$SafeStyleSheet_SafeStyleSheet
  )
    return a.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
  (0, goog.asserts.fail)("expected object of type SafeStyleSheet, got '" + a + "' of type " + goog.typeOf(a));
  return "type_error:SafeStyleSheet";
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function (a) {
  return new module$contents$goog$html$SafeStyleSheet_SafeStyleSheet(a, module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE);
};
module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.EMPTY =
  module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
goog.html.SafeStyleSheet = module$contents$goog$html$SafeStyleSheet_SafeStyleSheet;
goog.labs = {};
goog.labs.userAgent = {};
var module$contents$goog$labs$userAgent_USE_CLIENT_HINTS_OVERRIDE = "",
  module$contents$goog$labs$userAgent_USE_CLIENT_HINTS = !1,
  module$contents$goog$labs$userAgent_forceClientHintsInTests = !1;
goog.labs.userAgent.setUseClientHintsForTesting = function (a) {
  module$contents$goog$labs$userAgent_forceClientHintsInTests = a;
};
var module$contents$goog$labs$userAgent_useClientHintsRuntimeOverride = module$contents$goog$labs$userAgent_USE_CLIENT_HINTS_OVERRIDE
  ? !!goog.getObjectByName(module$contents$goog$labs$userAgent_USE_CLIENT_HINTS_OVERRIDE)
  : !1;
goog.labs.userAgent.useClientHints = function () {
  return (
    module$contents$goog$labs$userAgent_USE_CLIENT_HINTS ||
    module$contents$goog$labs$userAgent_useClientHintsRuntimeOverride ||
    module$contents$goog$labs$userAgent_forceClientHintsInTests
  );
};
goog.labs.userAgent.util = {};
var module$contents$goog$labs$userAgent$util_ASSUME_CLIENT_HINTS_SUPPORT = !1;
function module$contents$goog$labs$userAgent$util_getNativeUserAgentString() {
  var a = module$contents$goog$labs$userAgent$util_getNavigator();
  return a && (a = a.userAgent) ? a : "";
}
function module$contents$goog$labs$userAgent$util_getNativeUserAgentData() {
  var a = module$contents$goog$labs$userAgent$util_getNavigator();
  return a ? a.userAgentData || null : null;
}
function module$contents$goog$labs$userAgent$util_getNavigator() {
  return goog.global.navigator;
}
var module$contents$goog$labs$userAgent$util_userAgentInternal = null,
  module$contents$goog$labs$userAgent$util_userAgentDataInternal = module$contents$goog$labs$userAgent$util_getNativeUserAgentData();
function module$contents$goog$labs$userAgent$util_setUserAgent(a) {
  module$contents$goog$labs$userAgent$util_userAgentInternal =
    "string" === typeof a ? a : module$contents$goog$labs$userAgent$util_getNativeUserAgentString();
}
function module$contents$goog$labs$userAgent$util_getUserAgent() {
  return null == module$contents$goog$labs$userAgent$util_userAgentInternal
    ? module$contents$goog$labs$userAgent$util_getNativeUserAgentString()
    : module$contents$goog$labs$userAgent$util_userAgentInternal;
}
function module$contents$goog$labs$userAgent$util_setUserAgentData(a) {
  module$contents$goog$labs$userAgent$util_userAgentDataInternal = a;
}
function module$contents$goog$labs$userAgent$util_resetUserAgentData() {
  module$contents$goog$labs$userAgent$util_userAgentDataInternal = module$contents$goog$labs$userAgent$util_getNativeUserAgentData();
}
function module$contents$goog$labs$userAgent$util_getUserAgentData() {
  return module$contents$goog$labs$userAgent$util_userAgentDataInternal;
}
function module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand(a) {
  if (!(0, goog.labs.userAgent.useClientHints)()) return !1;
  var b = module$contents$goog$labs$userAgent$util_getUserAgentData();
  return b
    ? b.brands.some(function (c) {
        return (c = c.brand) && (0, goog.string.internal.contains)(c, a);
      })
    : !1;
}
function module$contents$goog$labs$userAgent$util_matchUserAgent(a) {
  var b = module$contents$goog$labs$userAgent$util_getUserAgent();
  return (0, goog.string.internal.contains)(b, a);
}
function module$contents$goog$labs$userAgent$util_matchUserAgentIgnoreCase(a) {
  var b = module$contents$goog$labs$userAgent$util_getUserAgent();
  return (0, goog.string.internal.caseInsensitiveContains)(b, a);
}
function module$contents$goog$labs$userAgent$util_extractVersionTuples(a) {
  for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; (d = b.exec(a)); )
    c.push([d[1], d[2], d[3] || void 0]);
  return c;
}
goog.labs.userAgent.util.ASSUME_CLIENT_HINTS_SUPPORT = module$contents$goog$labs$userAgent$util_ASSUME_CLIENT_HINTS_SUPPORT;
goog.labs.userAgent.util.extractVersionTuples = module$contents$goog$labs$userAgent$util_extractVersionTuples;
goog.labs.userAgent.util.getNativeUserAgentString = module$contents$goog$labs$userAgent$util_getNativeUserAgentString;
goog.labs.userAgent.util.getUserAgent = module$contents$goog$labs$userAgent$util_getUserAgent;
goog.labs.userAgent.util.getUserAgentData = module$contents$goog$labs$userAgent$util_getUserAgentData;
goog.labs.userAgent.util.matchUserAgent = module$contents$goog$labs$userAgent$util_matchUserAgent;
goog.labs.userAgent.util.matchUserAgentDataBrand = module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand;
goog.labs.userAgent.util.matchUserAgentIgnoreCase = module$contents$goog$labs$userAgent$util_matchUserAgentIgnoreCase;
goog.labs.userAgent.util.resetUserAgentData = module$contents$goog$labs$userAgent$util_resetUserAgentData;
goog.labs.userAgent.util.setUserAgent = module$contents$goog$labs$userAgent$util_setUserAgent;
goog.labs.userAgent.util.setUserAgentData = module$contents$goog$labs$userAgent$util_setUserAgentData;
var module$exports$goog$labs$userAgent$highEntropy$highEntropyValue = { AsyncValue: function () {} };
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.AsyncValue.prototype.getIfLoaded = function () {};
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.AsyncValue.prototype.load = function () {};
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue = function (a) {
  this.key_ = a;
  this.promise_ = this.value_ = void 0;
  this.pending_ = !1;
};
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue.prototype.getIfLoaded = function () {
  if (module$contents$goog$labs$userAgent$util_getUserAgentData()) return this.value_;
};
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue.prototype.load = function () {
  var a = this,
    b;
  return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
    if (1 == c.nextAddress) {
      b = module$contents$goog$labs$userAgent$util_getUserAgentData();
      if (!b) return c.return(void 0);
      a.promise_ ||
        ((a.pending_ = !0),
        (a.promise_ = (function () {
          var d;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
            if (1 == e.nextAddress) return e.setFinallyBlock(2), e.yield(b.getHighEntropyValues([a.key_]), 4);
            if (2 != e.nextAddress) return (d = e.yieldResult), (a.value_ = d[a.key_]), e.return(a.value_);
            e.enterFinallyBlock();
            a.pending_ = !1;
            return e.leaveFinallyBlock(0);
          });
        })()));
      return c.yield(a.promise_, 2);
    }
    return c.return(c.yieldResult);
  });
};
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue.prototype.resetForTesting = function () {
  if (this.pending_) throw Error("Unsafe call to resetForTesting");
  this.value_ = this.promise_ = void 0;
  this.pending_ = !1;
};
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version = function (a) {
  this.versionString_ = a;
};
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version.prototype.toVersionStringForLogging = function () {
  return this.versionString_;
};
module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version.prototype.isAtLeast = function (a) {
  return 0 <= (0, goog.string.internal.compareVersions)(this.versionString_, a);
};
var module$exports$goog$labs$userAgent$highEntropy$highEntropyData = {};
module$exports$goog$labs$userAgent$highEntropy$highEntropyData.fullVersionList =
  new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue("fullVersionList");
module$exports$goog$labs$userAgent$highEntropy$highEntropyData.platformVersion =
  new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.HighEntropyValue("platformVersion");
goog.labs.userAgent.browser = {};
var module$contents$goog$labs$userAgent$browser_Brand = {
  ANDROID_BROWSER: "Android Browser",
  CHROMIUM: "Chromium",
  EDGE: "Microsoft Edge",
  FIREFOX: "Firefox",
  IE: "Internet Explorer",
  OPERA: "Opera",
  SAFARI: "Safari",
  SILK: "Silk"
};
goog.labs.userAgent.browser.Brand = module$contents$goog$labs$userAgent$browser_Brand;
function module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand(a) {
  if (module$contents$goog$labs$userAgent$util_ASSUME_CLIENT_HINTS_SUPPORT) return !0;
  if (!((void 0 !== a && a) || (0, goog.labs.userAgent.useClientHints)())) return !1;
  a = module$contents$goog$labs$userAgent$util_getUserAgentData();
  return !!a && 0 < a.brands.length;
}
function module$contents$goog$labs$userAgent$browser_hasFullVersionList() {
  return module$contents$goog$labs$userAgent$browser_isAtLeast(module$contents$goog$labs$userAgent$browser_Brand.CHROMIUM, 98);
}
function module$contents$goog$labs$userAgent$browser_matchOpera() {
  return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand()
    ? !1
    : module$contents$goog$labs$userAgent$util_matchUserAgent("Opera");
}
function module$contents$goog$labs$userAgent$browser_matchIE() {
  return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand()
    ? !1
    : module$contents$goog$labs$userAgent$util_matchUserAgent("Trident") || module$contents$goog$labs$userAgent$util_matchUserAgent("MSIE");
}
function module$contents$goog$labs$userAgent$browser_matchEdgeHtml() {
  return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand()
    ? !1
    : module$contents$goog$labs$userAgent$util_matchUserAgent("Edge");
}
function module$contents$goog$labs$userAgent$browser_matchEdgeChromium() {
  return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand()
    ? module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand(module$contents$goog$labs$userAgent$browser_Brand.EDGE)
    : module$contents$goog$labs$userAgent$util_matchUserAgent("Edg/");
}
function module$contents$goog$labs$userAgent$browser_matchOperaChromium() {
  return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand()
    ? module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand(module$contents$goog$labs$userAgent$browser_Brand.OPERA)
    : module$contents$goog$labs$userAgent$util_matchUserAgent("OPR");
}
function module$contents$goog$labs$userAgent$browser_matchFirefox() {
  return (
    module$contents$goog$labs$userAgent$util_matchUserAgent("Firefox") || module$contents$goog$labs$userAgent$util_matchUserAgent("FxiOS")
  );
}
function module$contents$goog$labs$userAgent$browser_matchSafari() {
  return (
    module$contents$goog$labs$userAgent$util_matchUserAgent("Safari") &&
    !(
      module$contents$goog$labs$userAgent$browser_matchChrome() ||
      module$contents$goog$labs$userAgent$browser_matchCoast() ||
      module$contents$goog$labs$userAgent$browser_matchOpera() ||
      module$contents$goog$labs$userAgent$browser_matchEdgeHtml() ||
      module$contents$goog$labs$userAgent$browser_matchEdgeChromium() ||
      module$contents$goog$labs$userAgent$browser_matchOperaChromium() ||
      module$contents$goog$labs$userAgent$browser_matchFirefox() ||
      module$contents$goog$labs$userAgent$browser_isSilk() ||
      module$contents$goog$labs$userAgent$util_matchUserAgent("Android")
    )
  );
}
function module$contents$goog$labs$userAgent$browser_matchCoast() {
  return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand()
    ? !1
    : module$contents$goog$labs$userAgent$util_matchUserAgent("Coast");
}
function module$contents$goog$labs$userAgent$browser_matchIosWebview() {
  return (
    (module$contents$goog$labs$userAgent$util_matchUserAgent("iPad") ||
      module$contents$goog$labs$userAgent$util_matchUserAgent("iPhone")) &&
    !module$contents$goog$labs$userAgent$browser_matchSafari() &&
    !module$contents$goog$labs$userAgent$browser_matchChrome() &&
    !module$contents$goog$labs$userAgent$browser_matchCoast() &&
    !module$contents$goog$labs$userAgent$browser_matchFirefox() &&
    module$contents$goog$labs$userAgent$util_matchUserAgent("AppleWebKit")
  );
}
function module$contents$goog$labs$userAgent$browser_matchChrome() {
  return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand()
    ? module$contents$goog$labs$userAgent$util_matchUserAgentDataBrand(module$contents$goog$labs$userAgent$browser_Brand.CHROMIUM)
    : ((module$contents$goog$labs$userAgent$util_matchUserAgent("Chrome") ||
        module$contents$goog$labs$userAgent$util_matchUserAgent("CriOS")) &&
        !module$contents$goog$labs$userAgent$browser_matchEdgeHtml()) ||
        module$contents$goog$labs$userAgent$browser_isSilk();
}
function module$contents$goog$labs$userAgent$browser_matchAndroidBrowser() {
  return (
    module$contents$goog$labs$userAgent$util_matchUserAgent("Android") &&
    !(
      module$contents$goog$labs$userAgent$browser_matchChrome() ||
      module$contents$goog$labs$userAgent$browser_matchFirefox() ||
      module$contents$goog$labs$userAgent$browser_matchOpera() ||
      module$contents$goog$labs$userAgent$browser_isSilk()
    )
  );
}
var module$contents$goog$labs$userAgent$browser_isOpera = module$contents$goog$labs$userAgent$browser_matchOpera;
goog.labs.userAgent.browser.isOpera = module$contents$goog$labs$userAgent$browser_matchOpera;
var module$contents$goog$labs$userAgent$browser_isIE = module$contents$goog$labs$userAgent$browser_matchIE;
goog.labs.userAgent.browser.isIE = module$contents$goog$labs$userAgent$browser_matchIE;
var module$contents$goog$labs$userAgent$browser_isEdge = module$contents$goog$labs$userAgent$browser_matchEdgeHtml;
goog.labs.userAgent.browser.isEdge = module$contents$goog$labs$userAgent$browser_matchEdgeHtml;
var module$contents$goog$labs$userAgent$browser_isEdgeChromium = module$contents$goog$labs$userAgent$browser_matchEdgeChromium;
goog.labs.userAgent.browser.isEdgeChromium = module$contents$goog$labs$userAgent$browser_matchEdgeChromium;
var module$contents$goog$labs$userAgent$browser_isOperaChromium = module$contents$goog$labs$userAgent$browser_matchOperaChromium;
goog.labs.userAgent.browser.isOperaChromium = module$contents$goog$labs$userAgent$browser_matchOperaChromium;
var module$contents$goog$labs$userAgent$browser_isFirefox = module$contents$goog$labs$userAgent$browser_matchFirefox;
goog.labs.userAgent.browser.isFirefox = module$contents$goog$labs$userAgent$browser_matchFirefox;
var module$contents$goog$labs$userAgent$browser_isSafari = module$contents$goog$labs$userAgent$browser_matchSafari;
goog.labs.userAgent.browser.isSafari = module$contents$goog$labs$userAgent$browser_matchSafari;
var module$contents$goog$labs$userAgent$browser_isCoast = module$contents$goog$labs$userAgent$browser_matchCoast;
goog.labs.userAgent.browser.isCoast = module$contents$goog$labs$userAgent$browser_matchCoast;
var module$contents$goog$labs$userAgent$browser_isIosWebview = module$contents$goog$labs$userAgent$browser_matchIosWebview;
goog.labs.userAgent.browser.isIosWebview = module$contents$goog$labs$userAgent$browser_matchIosWebview;
var module$contents$goog$labs$userAgent$browser_isChrome = module$contents$goog$labs$userAgent$browser_matchChrome;
goog.labs.userAgent.browser.isChrome = module$contents$goog$labs$userAgent$browser_matchChrome;
var module$contents$goog$labs$userAgent$browser_isAndroidBrowser = module$contents$goog$labs$userAgent$browser_matchAndroidBrowser;
goog.labs.userAgent.browser.isAndroidBrowser = module$contents$goog$labs$userAgent$browser_matchAndroidBrowser;
function module$contents$goog$labs$userAgent$browser_isSilk() {
  return module$contents$goog$labs$userAgent$util_matchUserAgent("Silk");
}
goog.labs.userAgent.browser.isSilk = module$contents$goog$labs$userAgent$browser_isSilk;
function module$contents$goog$labs$userAgent$browser_createVersionMap(a) {
  var b = {};
  a.forEach(function (c) {
    b[c[0]] = c[1];
  });
  return function (c) {
    return (
      b[
        c.find(function (d) {
          return d in b;
        })
      ] || ""
    );
  };
}
function module$contents$goog$labs$userAgent$browser_getVersion() {
  var a = module$contents$goog$labs$userAgent$util_getUserAgent();
  if (module$contents$goog$labs$userAgent$browser_matchIE()) return module$contents$goog$labs$userAgent$browser_getIEVersion(a);
  a = module$contents$goog$labs$userAgent$util_extractVersionTuples(a);
  var b = module$contents$goog$labs$userAgent$browser_createVersionMap(a);
  return module$contents$goog$labs$userAgent$browser_matchOpera()
    ? b(["Version", "Opera"])
    : module$contents$goog$labs$userAgent$browser_matchEdgeHtml()
    ? b(["Edge"])
    : module$contents$goog$labs$userAgent$browser_matchEdgeChromium()
    ? b(["Edg"])
    : module$contents$goog$labs$userAgent$browser_isSilk()
    ? b(["Silk"])
    : module$contents$goog$labs$userAgent$browser_matchChrome()
    ? b(["Chrome", "CriOS", "HeadlessChrome"])
    : ((a = a[2]) && a[1]) || "";
}
goog.labs.userAgent.browser.getVersion = module$contents$goog$labs$userAgent$browser_getVersion;
function module$contents$goog$labs$userAgent$browser_isVersionOrHigher(a) {
  return 0 <= (0, goog.string.internal.compareVersions)(module$contents$goog$labs$userAgent$browser_getVersion(), a);
}
goog.labs.userAgent.browser.isVersionOrHigher = module$contents$goog$labs$userAgent$browser_isVersionOrHigher;
function module$contents$goog$labs$userAgent$browser_getIEVersion(a) {
  var b = /rv: *([\d\.]*)/.exec(a);
  if (b && b[1]) return b[1];
  b = "";
  var c = /MSIE +([\d\.]+)/.exec(a);
  if (c && c[1])
    if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
      if (a && a[1])
        switch (a[1]) {
          case "4.0":
            b = "8.0";
            break;
          case "5.0":
            b = "9.0";
            break;
          case "6.0":
            b = "10.0";
            break;
          case "7.0":
            b = "11.0";
        }
      else b = "7.0";
    else b = c[1];
  return b;
}
function module$contents$goog$labs$userAgent$browser_getFullVersionFromUserAgentString(a) {
  var b = module$contents$goog$labs$userAgent$util_getUserAgent();
  if (a === module$contents$goog$labs$userAgent$browser_Brand.IE)
    return module$contents$goog$labs$userAgent$browser_matchIE() ? module$contents$goog$labs$userAgent$browser_getIEVersion(b) : "";
  b = module$contents$goog$labs$userAgent$util_extractVersionTuples(b);
  var c = module$contents$goog$labs$userAgent$browser_createVersionMap(b);
  switch (a) {
    case module$contents$goog$labs$userAgent$browser_Brand.OPERA:
      if (module$contents$goog$labs$userAgent$browser_matchOpera()) return c(["Version", "Opera"]);
      if (module$contents$goog$labs$userAgent$browser_matchOperaChromium()) return c(["OPR"]);
      break;
    case module$contents$goog$labs$userAgent$browser_Brand.EDGE:
      if (module$contents$goog$labs$userAgent$browser_matchEdgeHtml()) return c(["Edge"]);
      if (module$contents$goog$labs$userAgent$browser_matchEdgeChromium()) return c(["Edg"]);
      break;
    case module$contents$goog$labs$userAgent$browser_Brand.CHROMIUM:
      if (module$contents$goog$labs$userAgent$browser_matchChrome()) return c(["Chrome", "CriOS", "HeadlessChrome"]);
  }
  return (a === module$contents$goog$labs$userAgent$browser_Brand.FIREFOX && module$contents$goog$labs$userAgent$browser_matchFirefox()) ||
    (a === module$contents$goog$labs$userAgent$browser_Brand.SAFARI && module$contents$goog$labs$userAgent$browser_matchSafari()) ||
    (a === module$contents$goog$labs$userAgent$browser_Brand.ANDROID_BROWSER &&
      module$contents$goog$labs$userAgent$browser_matchAndroidBrowser()) ||
    (a === module$contents$goog$labs$userAgent$browser_Brand.SILK && module$contents$goog$labs$userAgent$browser_isSilk())
    ? ((a = b[2]) && a[1]) || ""
    : "";
}
function module$contents$goog$labs$userAgent$browser_versionOf_(a) {
  if (module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand() && a !== module$contents$goog$labs$userAgent$browser_Brand.SILK) {
    var b = module$contents$goog$labs$userAgent$util_getUserAgentData().brands.find(function (c) {
      return c.brand === a;
    });
    if (!b || !b.version) return NaN;
    b = b.version.split(".");
  } else {
    b = module$contents$goog$labs$userAgent$browser_getFullVersionFromUserAgentString(a);
    if ("" === b) return NaN;
    b = b.split(".");
  }
  return 0 === b.length ? NaN : Number(b[0]);
}
function module$contents$goog$labs$userAgent$browser_isAtLeast(a, b) {
  (0, goog.asserts.assert)(Math.floor(b) === b, "Major version must be an integer");
  return module$contents$goog$labs$userAgent$browser_versionOf_(a) >= b;
}
goog.labs.userAgent.browser.isAtLeast = module$contents$goog$labs$userAgent$browser_isAtLeast;
function module$contents$goog$labs$userAgent$browser_isAtMost(a, b) {
  (0, goog.asserts.assert)(Math.floor(b) === b, "Major version must be an integer");
  return module$contents$goog$labs$userAgent$browser_versionOf_(a) <= b;
}
goog.labs.userAgent.browser.isAtMost = module$contents$goog$labs$userAgent$browser_isAtMost;
var module$contents$goog$labs$userAgent$browser_HighEntropyBrandVersion = function (a, b, c) {
  this.brand_ = a;
  this.version_ = new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(c);
  this.useUach_ = b;
};
module$contents$goog$labs$userAgent$browser_HighEntropyBrandVersion.prototype.getIfLoaded = function () {
  var a = this;
  if (this.useUach_) {
    var b = module$exports$goog$labs$userAgent$highEntropy$highEntropyData.fullVersionList.getIfLoaded();
    if (void 0 !== b)
      return (
        (b = b.find(function (c) {
          return a.brand_ === c.brand;
        })),
        (0, goog.asserts.assertExists)(b),
        new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(b.version)
      );
  }
  if (module$contents$goog$labs$userAgent$browser_preUachHasLoaded) return this.version_;
};
module$contents$goog$labs$userAgent$browser_HighEntropyBrandVersion.prototype.load = function () {
  var a = this,
    b,
    c;
  return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
    if (1 == d.nextAddress)
      return a.useUach_ ? d.yield(module$exports$goog$labs$userAgent$highEntropy$highEntropyData.fullVersionList.load(), 5) : d.yield(0, 3);
    if (3 != d.nextAddress && ((b = d.yieldResult), void 0 !== b))
      return (
        (c = b.find(function (e) {
          return a.brand_ === e.brand;
        })),
        (0, goog.asserts.assertExists)(c),
        d.return(new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(c.version))
      );
    module$contents$goog$labs$userAgent$browser_preUachHasLoaded = !0;
    return d.return(a.version_);
  });
};
var module$contents$goog$labs$userAgent$browser_preUachHasLoaded = !1;
function module$contents$goog$labs$userAgent$browser_loadFullVersions() {
  return $jscomp.asyncExecutePromiseGeneratorProgram(function (a) {
    if (1 == a.nextAddress)
      return module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand(!0)
        ? a.yield(module$exports$goog$labs$userAgent$highEntropy$highEntropyData.fullVersionList.load(), 2)
        : a.jumpTo(2);
    module$contents$goog$labs$userAgent$browser_preUachHasLoaded = !0;
    a.jumpToEnd();
  });
}
goog.labs.userAgent.browser.loadFullVersions = module$contents$goog$labs$userAgent$browser_loadFullVersions;
goog.labs.userAgent.browser.resetForTesting = function () {
  module$contents$goog$labs$userAgent$browser_preUachHasLoaded = !1;
  module$exports$goog$labs$userAgent$highEntropy$highEntropyData.fullVersionList.resetForTesting();
};
function module$contents$goog$labs$userAgent$browser_fullVersionOf(a) {
  var b = "";
  module$contents$goog$labs$userAgent$browser_hasFullVersionList() ||
    (b = module$contents$goog$labs$userAgent$browser_getFullVersionFromUserAgentString(a));
  var c =
    a !== module$contents$goog$labs$userAgent$browser_Brand.SILK && module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand(!0);
  if (c) {
    if (
      !module$contents$goog$labs$userAgent$util_getUserAgentData().brands.find(function (d) {
        return d.brand === a;
      })
    )
      return;
  } else if ("" === b) return;
  return new module$contents$goog$labs$userAgent$browser_HighEntropyBrandVersion(a, c, b);
}
goog.labs.userAgent.browser.fullVersionOf = module$contents$goog$labs$userAgent$browser_fullVersionOf;
function module$contents$goog$labs$userAgent$browser_getVersionStringForLogging(a) {
  if (module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand(!0)) {
    var b = module$contents$goog$labs$userAgent$browser_fullVersionOf(a);
    if (b) {
      if ((b = b.getIfLoaded())) return b.toVersionStringForLogging();
      b = module$contents$goog$labs$userAgent$util_getUserAgentData().brands.find(function (c) {
        return c.brand === a;
      });
      (0, goog.asserts.assertExists)(b);
      return b.version;
    }
    return "";
  }
  return module$contents$goog$labs$userAgent$browser_getFullVersionFromUserAgentString(a);
}
goog.labs.userAgent.browser.getVersionStringForLogging = module$contents$goog$labs$userAgent$browser_getVersionStringForLogging;
var module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE = {},
  module$contents$goog$html$SafeHtml_SafeHtml = function (a, b) {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = b === module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE ? a : "";
    this.implementsGoogStringTypedString = !0;
  };
module$contents$goog$html$SafeHtml_SafeHtml.prototype.getTypedStringValue = function () {
  return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
};
module$contents$goog$html$SafeHtml_SafeHtml.prototype.toString = function () {
  return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
};
module$contents$goog$html$SafeHtml_SafeHtml.unwrap = function (a) {
  return module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(a).toString();
};
module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML = function (a) {
  if (a instanceof module$contents$goog$html$SafeHtml_SafeHtml && a.constructor === module$contents$goog$html$SafeHtml_SafeHtml)
    return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
  goog.asserts.fail("expected object of type SafeHtml, got '" + a + "' of type " + goog.typeOf(a));
  return "type_error:SafeHtml";
};
module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape = function (a) {
  if (a instanceof module$contents$goog$html$SafeHtml_SafeHtml) return a;
  a = "object" == typeof a && a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a));
};
module$contents$goog$html$SafeHtml_SafeHtml.htmlEscapePreservingNewlines = function (a) {
  if (a instanceof module$contents$goog$html$SafeHtml_SafeHtml) return a;
  a = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape(a);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
    goog.string.internal.newLineToBr(module$contents$goog$html$SafeHtml_SafeHtml.unwrap(a))
  );
};
module$contents$goog$html$SafeHtml_SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (a) {
  if (a instanceof module$contents$goog$html$SafeHtml_SafeHtml) return a;
  a = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape(a);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
    goog.string.internal.whitespaceEscape(module$contents$goog$html$SafeHtml_SafeHtml.unwrap(a))
  );
};
module$contents$goog$html$SafeHtml_SafeHtml.comment = function (a) {
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
    "\x3c!--" + goog.string.internal.htmlEscape(a) + "--\x3e"
  );
};
module$contents$goog$html$SafeHtml_SafeHtml.create = function (a, b, c) {
  module$contents$goog$html$SafeHtml_SafeHtml.verifyTagName(String(a));
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a), b, c);
};
module$contents$goog$html$SafeHtml_SafeHtml.verifyTagName = function (a) {
  if (!module$contents$goog$html$SafeHtml_VALID_NAMES_IN_TAG.test(a))
    throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + a + ">." : "");
  if (a.toUpperCase() in module$contents$goog$html$SafeHtml_NOT_ALLOWED_TAG_NAMES)
    throw Error(
      module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + a + "> is not allowed for SafeHtml." : ""
    );
};
module$contents$goog$html$SafeHtml_SafeHtml.createIframe = function (a, b, c, d) {
  a && goog.html.TrustedResourceUrl.unwrap(a);
  var e = {};
  e.src = a || null;
  e.srcdoc = b && module$contents$goog$html$SafeHtml_SafeHtml.unwrap(b);
  a = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes(e, { sandbox: "" }, c);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a, d);
};
module$contents$goog$html$SafeHtml_SafeHtml.createSandboxIframe = function (a, b, c, d) {
  if (!module$contents$goog$html$SafeHtml_SafeHtml.canUseSandboxIframe())
    throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
  var e = {};
  e.src = a ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a)) : null;
  e.srcdoc = b || null;
  e.sandbox = "";
  a = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes(e, {}, c);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a, d);
};
module$contents$goog$html$SafeHtml_SafeHtml.canUseSandboxIframe = function () {
  return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
};
module$contents$goog$html$SafeHtml_SafeHtml.createScriptSrc = function (a, b) {
  goog.html.TrustedResourceUrl.unwrap(a);
  a = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes({ src: a }, {}, b);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a);
};
module$contents$goog$html$SafeHtml_SafeHtml.createScript = function (a, b) {
  for (var c in b)
    if (Object.prototype.hasOwnProperty.call(b, c)) {
      var d = c.toLowerCase();
      if ("language" == d || "src" == d || "text" == d)
        throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + d + '" attribute' : "");
    }
  c = "";
  a = module$contents$goog$array_concat(a);
  for (d = 0; d < a.length; d++) c += module$contents$goog$html$SafeScript_SafeScript.unwrap(a[d]);
  a = module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", b, a);
};
module$contents$goog$html$SafeHtml_SafeHtml.createStyle = function (a, b) {
  b = module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes({ type: "text/css" }, {}, b);
  var c = "";
  a = module$contents$goog$array_concat(a);
  for (var d = 0; d < a.length; d++) c += module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap(a[d]);
  a = module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b, a);
};
module$contents$goog$html$SafeHtml_SafeHtml.createMetaRefresh = function (a, b) {
  a = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a));
  (module$contents$goog$labs$userAgent$browser_matchIE() || module$contents$goog$labs$userAgent$browser_matchEdgeHtml()) &&
    goog.string.internal.contains(a, ";") &&
    (a = "'" + a.replace(/'/g, "%27") + "'");
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {
    "http-equiv": "refresh",
    content: (b || 0) + "; url=" + a
  });
};
module$contents$goog$html$SafeHtml_SafeHtml.join = function (a, b) {
  a = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape(a);
  var c = [],
    d = function (e) {
      Array.isArray(e)
        ? e.forEach(d)
        : ((e = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape(e)), c.push(module$contents$goog$html$SafeHtml_SafeHtml.unwrap(e)));
    };
  b.forEach(d);
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
    c.join(module$contents$goog$html$SafeHtml_SafeHtml.unwrap(a))
  );
};
module$contents$goog$html$SafeHtml_SafeHtml.concat = function (a) {
  return module$contents$goog$html$SafeHtml_SafeHtml.join(
    module$contents$goog$html$SafeHtml_SafeHtml.EMPTY,
    Array.prototype.slice.call(arguments)
  );
};
module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (a) {
  var b = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
  a = b ? b.createHTML(a) : a;
  return new module$contents$goog$html$SafeHtml_SafeHtml(a, module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE);
};
module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function (a, b, c) {
  b = "<" + a + module$contents$goog$html$SafeHtml_SafeHtml.stringifyAttributes(a, b);
  null == c ? (c = []) : Array.isArray(c) || (c = [c]);
  goog.dom.tags.isVoidTag(a.toLowerCase())
    ? (goog.asserts.assert(!c.length, "Void tag <" + a + "> does not allow content."), (b += ">"))
    : ((c = module$contents$goog$html$SafeHtml_SafeHtml.concat(c)),
      (b += ">" + module$contents$goog$html$SafeHtml_SafeHtml.unwrap(c) + "</" + a + ">"));
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b);
};
module$contents$goog$html$SafeHtml_SafeHtml.stringifyAttributes = function (a, b) {
  var c = "";
  if (b)
    for (var d in b)
      if (Object.prototype.hasOwnProperty.call(b, d)) {
        if (!module$contents$goog$html$SafeHtml_VALID_NAMES_IN_TAG.test(d))
          throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + d + '".' : "");
        var e = b[d];
        null != e && (c += " " + module$contents$goog$html$SafeHtml_getAttrNameAndValue(a, d, e));
      }
  return c;
};
module$contents$goog$html$SafeHtml_SafeHtml.combineAttributes = function (a, b, c) {
  var d = {};
  for (g in a)
    Object.prototype.hasOwnProperty.call(a, g) && (goog.asserts.assert(g.toLowerCase() == g, "Must be lower case"), (d[g] = a[g]));
  for (var e in b)
    Object.prototype.hasOwnProperty.call(b, e) && (goog.asserts.assert(e.toLowerCase() == e, "Must be lower case"), (d[e] = b[e]));
  if (c)
    for (var f in c)
      if (Object.prototype.hasOwnProperty.call(c, f)) {
        var g = f.toLowerCase();
        if (g in a)
          throw Error(
            module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES
              ? 'Cannot override "' + g + '" attribute, got "' + f + '" with value "' + c[f] + '"'
              : ""
          );
        g in b && delete d[g];
        d[f] = c[f];
      }
  return d;
};
module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG;
module$contents$goog$html$SafeHtml_SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0;
module$contents$goog$html$SafeHtml_SafeHtml.from = module$contents$goog$html$SafeHtml_SafeHtml.htmlEscape;
var module$contents$goog$html$SafeHtml_VALID_NAMES_IN_TAG = /^[a-zA-Z0-9-]+$/,
  module$contents$goog$html$SafeHtml_URL_ATTRIBUTES = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
  },
  module$contents$goog$html$SafeHtml_NOT_ALLOWED_TAG_NAMES = module$contents$goog$object_createSet(
    goog.dom.TagName.APPLET,
    goog.dom.TagName.BASE,
    goog.dom.TagName.EMBED,
    goog.dom.TagName.IFRAME,
    goog.dom.TagName.LINK,
    goog.dom.TagName.MATH,
    goog.dom.TagName.META,
    goog.dom.TagName.OBJECT,
    goog.dom.TagName.SCRIPT,
    goog.dom.TagName.STYLE,
    goog.dom.TagName.SVG,
    goog.dom.TagName.TEMPLATE
  );
function module$contents$goog$html$SafeHtml_getAttrNameAndValue(a, b, c) {
  if (c instanceof goog.string.Const) c = goog.string.Const.unwrap(c);
  else if ("style" == b.toLowerCase())
    if (module$contents$goog$html$SafeHtml_SafeHtml.SUPPORT_STYLE_ATTRIBUTE) c = module$contents$goog$html$SafeHtml_getStyleValue(c);
    else throw Error(module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
  else {
    if (/^on/i.test(b))
      throw Error(
        module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES
          ? 'Attribute "' + b + '" requires goog.string.Const value, "' + c + '" given.'
          : ""
      );
    if (b.toLowerCase() in module$contents$goog$html$SafeHtml_URL_ATTRIBUTES)
      if (c instanceof goog.html.TrustedResourceUrl) c = goog.html.TrustedResourceUrl.unwrap(c);
      else if (c instanceof goog.html.SafeUrl) c = goog.html.SafeUrl.unwrap(c);
      else if ("string" === typeof c) c = goog.html.SafeUrl.sanitize(c).getTypedStringValue();
      else
        throw Error(
          module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES
            ? 'Attribute "' + b + '" on tag "' + a + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + c + '" given.'
            : ""
        );
  }
  c.implementsGoogStringTypedString && (c = c.getTypedStringValue());
  goog.asserts.assert(
    "string" === typeof c || "number" === typeof c,
    "String or number value expected, got " + typeof c + " with value: " + c
  );
  return b + '="' + goog.string.internal.htmlEscape(String(c)) + '"';
}
function module$contents$goog$html$SafeHtml_getStyleValue(a) {
  if (!goog.isObject(a))
    throw Error(
      module$contents$goog$html$SafeHtml_SafeHtml.ENABLE_ERROR_MESSAGES
        ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a
        : ""
    );
  a instanceof module$contents$goog$html$SafeStyle_SafeStyle || (a = module$contents$goog$html$SafeStyle_SafeStyle.create(a));
  return module$contents$goog$html$SafeStyle_SafeStyle.unwrap(a);
}
module$contents$goog$html$SafeHtml_SafeHtml.DOCTYPE_HTML = (function () {
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>");
})();
module$contents$goog$html$SafeHtml_SafeHtml.EMPTY = new module$contents$goog$html$SafeHtml_SafeHtml(
  (goog.global.trustedTypes && goog.global.trustedTypes.emptyHTML) || "",
  module$contents$goog$html$SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE
);
module$contents$goog$html$SafeHtml_SafeHtml.BR = (function () {
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>");
})();
goog.html.SafeHtml = module$contents$goog$html$SafeHtml_SafeHtml;
goog.html.uncheckedconversions = {};
goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function (a, b) {
  goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
  return module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function (a, b) {
  goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
  return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function (a, b) {
  goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
  return module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function (a, b) {
  goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
  return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function (a, b) {
  goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function (a, b) {
  goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)), "must provide non-empty justification");
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b);
};
goog.dom.safe = {};
goog.dom.safe.InsertAdjacentHtmlPosition = {
  AFTERBEGIN: "afterbegin",
  AFTEREND: "afterend",
  BEFOREBEGIN: "beforebegin",
  BEFOREEND: "beforeend"
};
goog.dom.safe.insertAdjacentHtml = function (a, b, c) {
  a.insertAdjacentHTML(b, module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(c));
};
goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 };
goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function () {
  if (goog.DEBUG && "undefined" === typeof document) return !1;
  var a = document.createElement("div"),
    b = document.createElement("div");
  b.appendChild(document.createElement("div"));
  a.appendChild(b);
  if (goog.DEBUG && !a.firstChild) return !1;
  b = a.firstChild.firstChild;
  a.innerHTML = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(module$contents$goog$html$SafeHtml_SafeHtml.EMPTY);
  return !b.parentElement;
});
goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (a, b) {
  if (goog.dom.safe.isInnerHtmlCleanupRecursive_()) for (; a.lastChild; ) a.removeChild(a.lastChild);
  a.innerHTML = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b);
};
goog.dom.safe.setInnerHtml = function (a, b) {
  if (goog.asserts.ENABLE_ASSERTS && a.tagName) {
    var c = a.tagName.toUpperCase();
    if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c])
      throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
  }
  goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a, b);
};
goog.dom.safe.setInnerHtmlFromConstant = function (a, b) {
  goog.dom.safe.setInnerHtml(
    a,
    goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
      goog.string.Const.from("Constant HTML to be immediatelly used."),
      goog.string.Const.unwrap(b)
    )
  );
};
goog.dom.safe.setOuterHtml = function (a, b) {
  a.outerHTML = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b);
};
goog.dom.safe.setFormElementAction = function (a, b) {
  b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(b);
  module$contents$goog$asserts$dom_assertIsHtmlFormElement(a).action = goog.html.SafeUrl.unwrap(b);
};
goog.dom.safe.setButtonFormAction = function (a, b) {
  b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(b);
  module$contents$goog$asserts$dom_assertIsHtmlButtonElement(a).formAction = goog.html.SafeUrl.unwrap(b);
};
goog.dom.safe.setInputFormAction = function (a, b) {
  b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(b);
  module$contents$goog$asserts$dom_assertIsHtmlInputElement(a).formAction = goog.html.SafeUrl.unwrap(b);
};
goog.dom.safe.setStyle = function (a, b) {
  a.style.cssText = module$contents$goog$html$SafeStyle_SafeStyle.unwrap(b);
};
goog.dom.safe.documentWrite = function (a, b) {
  a.write(module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b));
};
goog.dom.safe.setAnchorHref = function (a, b) {
  module$contents$goog$asserts$dom_assertIsHtmlAnchorElement(a);
  b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(b);
  a.href = goog.html.SafeUrl.unwrap(b);
};
goog.dom.safe.setAudioSrc = function (a, b) {
  module$contents$goog$asserts$dom_assertIsHtmlAudioElement(a);
  b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(b);
  a.src = goog.html.SafeUrl.unwrap(b);
};
goog.dom.safe.setVideoSrc = function (a, b) {
  module$contents$goog$asserts$dom_assertIsHtmlVideoElement(a);
  b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(b);
  a.src = goog.html.SafeUrl.unwrap(b);
};
goog.dom.safe.setEmbedSrc = function (a, b) {
  module$contents$goog$asserts$dom_assertIsHtmlEmbedElement(a);
  a.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
};
goog.dom.safe.setFrameSrc = function (a, b) {
  module$contents$goog$asserts$dom_assertIsHtmlFrameElement(a);
  a.src = goog.html.TrustedResourceUrl.unwrap(b);
};
goog.dom.safe.setIframeSrc = function (a, b) {
  module$contents$goog$asserts$dom_assertIsHtmlIFrameElement(a);
  a.src = goog.html.TrustedResourceUrl.unwrap(b);
};
goog.dom.safe.setIframeSrcdoc = function (a, b) {
  module$contents$goog$asserts$dom_assertIsHtmlIFrameElement(a);
  a.srcdoc = module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b);
};
goog.dom.safe.setLinkHrefAndRel = function (a, b, c) {
  module$contents$goog$asserts$dom_assertIsHtmlLinkElement(a);
  a.rel = c;
  goog.string.internal.caseInsensitiveContains(c, "stylesheet")
    ? (goog.asserts.assert(b instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'),
      (a.href = goog.html.TrustedResourceUrl.unwrap(b)),
      (b = goog.dom.safe.getStyleNonce(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b))
    : (a.href =
        b instanceof goog.html.TrustedResourceUrl
          ? goog.html.TrustedResourceUrl.unwrap(b)
          : b instanceof goog.html.SafeUrl
          ? goog.html.SafeUrl.unwrap(b)
          : goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(b)));
};
goog.dom.safe.setObjectData = function (a, b) {
  module$contents$goog$asserts$dom_assertIsHtmlObjectElement(a);
  a.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
};
goog.dom.safe.setScriptSrc = function (a, b) {
  module$contents$goog$asserts$dom_assertIsHtmlScriptElement(a);
  goog.dom.safe.setNonceForScriptElement_(a);
  a.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
};
goog.dom.safe.setScriptContent = function (a, b) {
  module$contents$goog$asserts$dom_assertIsHtmlScriptElement(a);
  goog.dom.safe.setNonceForScriptElement_(a);
  a.textContent = module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript(b);
};
goog.dom.safe.setNonceForScriptElement_ = function (a) {
  var b = goog.dom.safe.getScriptNonce(a.ownerDocument && a.ownerDocument.defaultView);
  b && a.setAttribute("nonce", b);
};
goog.dom.safe.setLocationHref = function (a, b) {
  goog.dom.asserts.assertIsLocation(a);
  b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(b);
  a.href = goog.html.SafeUrl.unwrap(b);
};
goog.dom.safe.assignLocation = function (a, b) {
  goog.dom.asserts.assertIsLocation(a);
  b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(b);
  a.assign(goog.html.SafeUrl.unwrap(b));
};
goog.dom.safe.replaceLocation = function (a, b) {
  b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(b);
  a.replace(goog.html.SafeUrl.unwrap(b));
};
goog.dom.safe.openInWindow = function (a, b, c, d) {
  a = a instanceof goog.html.SafeUrl ? a : goog.html.SafeUrl.sanitizeJavascriptUrlAssertUnchanged(a);
  b = b || goog.global;
  c = c instanceof goog.string.Const ? goog.string.Const.unwrap(c) : c || "";
  return void 0 !== d ? b.open(goog.html.SafeUrl.unwrap(a), c, d) : b.open(goog.html.SafeUrl.unwrap(a), c);
};
goog.dom.safe.parseFromStringHtml = function (a, b) {
  return goog.dom.safe.parseFromString(a, b, "text/html");
};
goog.dom.safe.parseFromString = function (a, b, c) {
  return a.parseFromString(module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b), c);
};
goog.dom.safe.createImageFromBlob = function (a) {
  if (!/^image\/.*/g.test(a.type)) throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
  var b = goog.global.URL.createObjectURL(a);
  a = new goog.global.Image();
  a.onload = function () {
    goog.global.URL.revokeObjectURL(b);
  };
  a.src = b;
  return a;
};
goog.dom.safe.createContextualFragment = function (a, b) {
  return a.createContextualFragment(module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(b));
};
goog.dom.safe.getScriptNonce = function (a) {
  return goog.dom.safe.getNonce_("script[nonce]", a);
};
goog.dom.safe.getStyleNonce = function (a) {
  return goog.dom.safe.getNonce_('style[nonce],link[rel="stylesheet"][nonce]', a);
};
goog.dom.safe.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.dom.safe.getNonce_ = function (a, b) {
  b = (b || goog.global).document;
  return b.querySelector
    ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && goog.dom.safe.NONCE_PATTERN_.test(a)
      ? a
      : ""
    : "";
};
goog.string.DETECT_DOUBLE_ESCAPING = !1;
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
goog.string.Unicode = { NBSP: "\u00a0", ZERO_WIDTH_SPACE: "\u200b" };
goog.string.startsWith = goog.string.internal.startsWith;
goog.string.endsWith = goog.string.internal.endsWith;
goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
goog.string.subs = function (a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; ) d += c.shift() + e.shift();
  return d + c.join("%s");
};
goog.string.collapseWhitespace = function (a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
goog.string.isEmptyString = function (a) {
  return 0 == a.length;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function (a) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function (a) {
  return !/[^\t\n\r ]/.test(a);
};
goog.string.isAlpha = function (a) {
  return !/[^a-zA-Z]/.test(a);
};
goog.string.isNumeric = function (a) {
  return !/[^0-9]/.test(a);
};
goog.string.isAlphaNumeric = function (a) {
  return !/[^a-zA-Z0-9]/.test(a);
};
goog.string.isSpace = function (a) {
  return " " == a;
};
goog.string.isUnicodeChar = function (a) {
  return (1 == a.length && " " <= a && "~" >= a) || ("\u0080" <= a && "\ufffd" >= a);
};
goog.string.stripNewlines = function (a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function (a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function (a) {
  return a.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function (a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function (a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.string.internal.trim;
goog.string.trimLeft = function (a) {
  return a.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function (a) {
  return a.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
goog.string.numberAwareCompare_ = function (a, b, c) {
  if (a == b) return 0;
  if (!a) return -1;
  if (!b) return 1;
  for (var d = a.toLowerCase().match(c), e = b.toLowerCase().match(c), f = Math.min(d.length, e.length), g = 0; g < f; g++) {
    c = d[g];
    var h = e[g];
    if (c != h) return (a = parseInt(c, 10)), !isNaN(a) && ((b = parseInt(h, 10)), !isNaN(b) && a - b) ? a - b : c < h ? -1 : 1;
  }
  return d.length != e.length ? d.length - e.length : a < b ? -1 : 1;
};
goog.string.intAwareCompare = function (a, b) {
  return goog.string.numberAwareCompare_(a, b, /\d+|\D+/g);
};
goog.string.floatAwareCompare = function (a, b) {
  return goog.string.numberAwareCompare_(a, b, /\d+|\.\d+|\D+/g);
};
goog.string.numerateCompare = goog.string.floatAwareCompare;
goog.string.urlEncode = function (a) {
  return encodeURIComponent(String(a));
};
goog.string.urlDecode = function (a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
goog.string.newLineToBr = goog.string.internal.newLineToBr;
goog.string.htmlEscape = function (a, b) {
  a = goog.string.internal.htmlEscape(a, b);
  goog.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(goog.string.E_RE_, "&#101;"));
  return a;
};
goog.string.E_RE_ = /e/g;
goog.string.unescapeEntities = function (a) {
  return goog.string.contains(a, "&")
    ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global
      ? goog.string.unescapeEntitiesUsingDom_(a)
      : goog.string.unescapePureXmlEntities_(a)
    : a;
};
goog.string.unescapeEntitiesWithDocument = function (a, b) {
  return goog.string.contains(a, "&") ? goog.string.unescapeEntitiesUsingDom_(a, b) : a;
};
goog.string.unescapeEntitiesUsingDom_ = function (a, b) {
  var c = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
  var d = b ? b.createElement("div") : goog.global.document.createElement("div");
  return a.replace(goog.string.HTML_ENTITY_PATTERN_, function (e, f) {
    var g = c[e];
    if (g) return g;
    "#" == f.charAt(0) && ((f = Number("0" + f.slice(1))), isNaN(f) || (g = String.fromCharCode(f)));
    g ||
      (goog.dom.safe.setInnerHtml(
        d,
        goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), e + " ")
      ),
      (g = d.firstChild.nodeValue.slice(0, -1)));
    return (c[e] = g);
  });
};
goog.string.unescapePureXmlEntities_ = function (a) {
  return a.replace(/&([^;]+);/g, function (b, c) {
    switch (c) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        return "#" != c.charAt(0) || ((c = Number("0" + c.slice(1))), isNaN(c)) ? b : String.fromCharCode(c);
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function (a, b) {
  return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b);
};
goog.string.preserveSpaces = function (a) {
  return a.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function (a, b) {
  for (var c = b.length, d = 0; d < c; d++) {
    var e = 1 == c ? b : b.charAt(d);
    if (a.charAt(0) == e && a.charAt(a.length - 1) == e) return a.substring(1, a.length - 1);
  }
  return a;
};
goog.string.truncate = function (a, b, c) {
  c && (a = goog.string.unescapeEntities(a));
  a.length > b && (a = a.substring(0, b - 3) + "...");
  c && (a = goog.string.htmlEscape(a));
  return a;
};
goog.string.truncateMiddle = function (a, b, c, d) {
  c && (a = goog.string.unescapeEntities(a));
  if (d && a.length > b) {
    d > b && (d = b);
    var e = a.length - d;
    a = a.substring(0, b - d) + "..." + a.substring(e);
  } else a.length > b && ((d = Math.floor(b / 2)), (e = a.length - d), (a = a.substring(0, d + (b % 2)) + "..." + a.substring(e)));
  c && (a = goog.string.htmlEscape(a));
  return a;
};
goog.string.specialEscapeChars_ = {
  "\x00": "\\0",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "\t": "\\t",
  "\v": "\\x0B",
  '"': '\\"',
  "\\": "\\\\",
  "<": "\\u003C"
};
goog.string.jsEscapeCache_ = { "'": "\\'" };
goog.string.quote = function (a) {
  a = String(a);
  for (var b = ['"'], c = 0; c < a.length; c++) {
    var d = a.charAt(c),
      e = d.charCodeAt(0);
    b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d));
  }
  b.push('"');
  return b.join("");
};
goog.string.escapeString = function (a) {
  for (var b = [], c = 0; c < a.length; c++) b[c] = goog.string.escapeChar(a.charAt(c));
  return b.join("");
};
goog.string.escapeChar = function (a) {
  if (a in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[a];
  if (a in goog.string.specialEscapeChars_) return (goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a]);
  var b = a.charCodeAt(0);
  if (31 < b && 127 > b) var c = a;
  else {
    if (256 > b) {
      if (((c = "\\x"), 16 > b || 256 < b)) c += "0";
    } else (c = "\\u"), 4096 > b && (c += "0");
    c += b.toString(16).toUpperCase();
  }
  return (goog.string.jsEscapeCache_[a] = c);
};
goog.string.contains = goog.string.internal.contains;
goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
goog.string.countOf = function (a, b) {
  return a && b ? a.split(b).length - 1 : 0;
};
goog.string.removeAt = function (a, b, c) {
  var d = a;
  0 <= b && b < a.length && 0 < c && (d = a.slice(0, b) + a.slice(b + c));
  return d;
};
goog.string.remove = function (a, b) {
  return a.replace(b, "");
};
goog.string.removeAll = function (a, b) {
  b = new RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(b, "");
};
goog.string.replaceAll = function (a, b, c) {
  b = new RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(b, c.replace(/\$/g, "$$$$"));
};
goog.string.regExpEscape = function (a) {
  return String(a)
    .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
    .replace(/\x08/g, "\\x08");
};
goog.string.repeat = String.prototype.repeat
  ? function (a, b) {
      return a.repeat(b);
    }
  : function (a, b) {
      return Array(b + 1).join(a);
    };
goog.string.padNumber = function (a, b, c) {
  if (!Number.isFinite(a)) return String(a);
  a = void 0 !== c ? a.toFixed(c) : String(a);
  c = a.indexOf(".");
  -1 === c && (c = a.length);
  var d = "-" === a[0] ? "-" : "";
  d && (a = a.substring(1));
  return d + goog.string.repeat("0", Math.max(0, b - c)) + a;
};
goog.string.makeSafe = function (a) {
  return null == a ? "" : String(a);
};
goog.string.getRandomString = function () {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
};
goog.string.compareVersions = goog.string.internal.compareVersions;
goog.string.hashCode = function (a) {
  for (var b = 0, c = 0; c < a.length; ++c) b = (31 * b + a.charCodeAt(c)) >>> 0;
  return b;
};
goog.string.uniqueStringCounter_ = (2147483648 * Math.random()) | 0;
goog.string.createUniqueString = function () {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function (a) {
  var b = Number(a);
  return 0 == b && goog.string.isEmptyOrWhitespace(a) ? NaN : b;
};
goog.string.isLowerCamelCase = function (a) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
goog.string.isUpperCamelCase = function (a) {
  return /^([A-Z][a-z]*)+$/.test(a);
};
goog.string.toCamelCase = function (a) {
  return String(a).replace(/\-([a-z])/g, function (b, c) {
    return c.toUpperCase();
  });
};
goog.string.toSelectorCase = function (a) {
  return String(a)
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
};
goog.string.toTitleCase = function (a, b) {
  b = "string" === typeof b ? goog.string.regExpEscape(b) : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (c, d, e) {
    return d + e.toUpperCase();
  });
};
goog.string.capitalize = function (a) {
  return String(a.charAt(0)).toUpperCase() + String(a.slice(1)).toLowerCase();
};
goog.string.parseInt = function (a) {
  isFinite(a) && (a = String(a));
  return "string" === typeof a ? (/^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10)) : NaN;
};
goog.string.splitLimit = function (a, b, c) {
  a = a.split(b);
  for (var d = []; 0 < c && a.length; ) d.push(a.shift()), c--;
  a.length && d.push(a.join(b));
  return d;
};
goog.string.lastComponent = function (a, b) {
  if (b) "string" == typeof b && (b = [b]);
  else return a;
  for (var c = -1, d = 0; d < b.length; d++)
    if ("" != b[d]) {
      var e = a.lastIndexOf(b[d]);
      e > c && (c = e);
    }
  return -1 == c ? a : a.slice(c + 1);
};
goog.string.editDistance = function (a, b) {
  var c = [],
    d = [];
  if (a == b) return 0;
  if (!a.length || !b.length) return Math.max(a.length, b.length);
  for (var e = 0; e < b.length + 1; e++) c[e] = e;
  for (e = 0; e < a.length; e++) {
    d[0] = e + 1;
    for (var f = 0; f < b.length; f++) d[f + 1] = Math.min(d[f] + 1, c[f + 1] + 1, c[f] + Number(a[e] != b[f]));
    for (f = 0; f < c.length; f++) c[f] = d[f];
  }
  return d[b.length];
};
goog.uri = {};
goog.uri.utils = {};
goog.uri.utils.QueryArray = {};
goog.uri.utils.QueryValue = {};
goog.uri.utils.CharCode_ = { AMPERSAND: 38, EQUAL: 61, HASH: 35, QUESTION: 63 };
goog.uri.utils.buildFromEncodedParts = function (a, b, c, d, e, f, g) {
  var h = "";
  a && (h += a + ":");
  c && ((h += "//"), b && (h += b + "@"), (h += c), d && (h += ":" + d));
  e && (h += e);
  f && (h += "?" + f);
  g && (h += "#" + g);
  return h;
};
goog.uri.utils.splitRe_ = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
goog.uri.utils.ComponentIndex = { SCHEME: 1, USER_INFO: 2, DOMAIN: 3, PORT: 4, PATH: 5, QUERY_DATA: 6, FRAGMENT: 7 };
goog.uri.utils.urlPackageSupportLoggingHandler_ = null;
goog.uri.utils.setUrlPackageSupportLoggingHandler = function (a) {
  goog.uri.utils.urlPackageSupportLoggingHandler_ = a;
};
goog.uri.utils.split = function (a) {
  var b = a.match(goog.uri.utils.splitRe_);
  goog.uri.utils.urlPackageSupportLoggingHandler_ &&
    0 <= ["http", "https", "ws", "wss", "ftp"].indexOf(b[goog.uri.utils.ComponentIndex.SCHEME]) &&
    goog.uri.utils.urlPackageSupportLoggingHandler_(a);
  return b;
};
goog.uri.utils.decodeIfPossible_ = function (a, b) {
  return a ? (b ? decodeURI(a) : decodeURIComponent(a)) : a;
};
goog.uri.utils.getComponentByIndex_ = function (a, b) {
  return goog.uri.utils.split(b)[a] || null;
};
goog.uri.utils.getScheme = function (a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, a);
};
goog.uri.utils.getEffectiveScheme = function (a) {
  a = goog.uri.utils.getScheme(a);
  !a && goog.global.self && goog.global.self.location && (a = goog.global.self.location.protocol.slice(0, -1));
  return a ? a.toLowerCase() : "";
};
goog.uri.utils.getUserInfoEncoded = function (a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, a);
};
goog.uri.utils.getUserInfo = function (a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded(a));
};
goog.uri.utils.getDomainEncoded = function (a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, a);
};
goog.uri.utils.getDomain = function (a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded(a), !0);
};
goog.uri.utils.getPort = function (a) {
  return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, a)) || null;
};
goog.uri.utils.getPathEncoded = function (a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, a);
};
goog.uri.utils.getPath = function (a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded(a), !0);
};
goog.uri.utils.getQueryData = function (a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, a);
};
goog.uri.utils.getFragmentEncoded = function (a) {
  var b = a.indexOf("#");
  return 0 > b ? null : a.slice(b + 1);
};
goog.uri.utils.setFragmentEncoded = function (a, b) {
  return goog.uri.utils.removeFragment(a) + (b ? "#" + b : "");
};
goog.uri.utils.getFragment = function (a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded(a));
};
goog.uri.utils.getHost = function (a) {
  a = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(
    a[goog.uri.utils.ComponentIndex.SCHEME],
    a[goog.uri.utils.ComponentIndex.USER_INFO],
    a[goog.uri.utils.ComponentIndex.DOMAIN],
    a[goog.uri.utils.ComponentIndex.PORT]
  );
};
goog.uri.utils.getOrigin = function (a) {
  a = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(
    a[goog.uri.utils.ComponentIndex.SCHEME],
    null,
    a[goog.uri.utils.ComponentIndex.DOMAIN],
    a[goog.uri.utils.ComponentIndex.PORT]
  );
};
goog.uri.utils.getPathAndAfter = function (a) {
  a = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(
    null,
    null,
    null,
    null,
    a[goog.uri.utils.ComponentIndex.PATH],
    a[goog.uri.utils.ComponentIndex.QUERY_DATA],
    a[goog.uri.utils.ComponentIndex.FRAGMENT]
  );
};
goog.uri.utils.removeFragment = function (a) {
  var b = a.indexOf("#");
  return 0 > b ? a : a.slice(0, b);
};
goog.uri.utils.haveSameDomain = function (a, b) {
  a = goog.uri.utils.split(a);
  b = goog.uri.utils.split(b);
  return (
    a[goog.uri.utils.ComponentIndex.DOMAIN] == b[goog.uri.utils.ComponentIndex.DOMAIN] &&
    a[goog.uri.utils.ComponentIndex.SCHEME] == b[goog.uri.utils.ComponentIndex.SCHEME] &&
    a[goog.uri.utils.ComponentIndex.PORT] == b[goog.uri.utils.ComponentIndex.PORT]
  );
};
goog.uri.utils.assertNoFragmentsOrQueries_ = function (a) {
  goog.asserts.assert(0 > a.indexOf("#") && 0 > a.indexOf("?"), "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", a);
};
goog.uri.utils.parseQueryData = function (a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="),
        e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else f = a[c];
      b(f, e ? goog.string.urlDecode(e) : "");
    }
  }
};
goog.uri.utils.splitQueryData_ = function (a) {
  var b = a.indexOf("#");
  0 > b && (b = a.length);
  var c = a.indexOf("?");
  if (0 > c || c > b) {
    c = b;
    var d = "";
  } else d = a.substring(c + 1, b);
  return [a.slice(0, c), d, a.slice(b)];
};
goog.uri.utils.joinQueryData_ = function (a) {
  return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
};
goog.uri.utils.appendQueryData_ = function (a, b) {
  return b ? (a ? a + "&" + b : b) : a;
};
goog.uri.utils.appendQueryDataToUri_ = function (a, b) {
  if (!b) return a;
  a = goog.uri.utils.splitQueryData_(a);
  a[1] = goog.uri.utils.appendQueryData_(a[1], b);
  return goog.uri.utils.joinQueryData_(a);
};
goog.uri.utils.appendKeyValuePairs_ = function (a, b, c) {
  goog.asserts.assertString(a);
  if (Array.isArray(b)) {
    goog.asserts.assertArray(b);
    for (var d = 0; d < b.length; d++) goog.uri.utils.appendKeyValuePairs_(a, String(b[d]), c);
  } else null != b && c.push(a + ("" === b ? "" : "=" + goog.string.urlEncode(b)));
};
goog.uri.utils.buildQueryData = function (a, b) {
  goog.asserts.assert(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
  var c = [];
  for (b = b || 0; b < a.length; b += 2) goog.uri.utils.appendKeyValuePairs_(a[b], a[b + 1], c);
  return c.join("&");
};
goog.uri.utils.buildQueryDataFromMap = function (a) {
  var b = [],
    c;
  for (c in a) goog.uri.utils.appendKeyValuePairs_(c, a[c], b);
  return b.join("&");
};
goog.uri.utils.appendParams = function (a, b) {
  var c = 2 == arguments.length ? goog.uri.utils.buildQueryData(arguments[1], 0) : goog.uri.utils.buildQueryData(arguments, 1);
  return goog.uri.utils.appendQueryDataToUri_(a, c);
};
goog.uri.utils.appendParamsFromMap = function (a, b) {
  b = goog.uri.utils.buildQueryDataFromMap(b);
  return goog.uri.utils.appendQueryDataToUri_(a, b);
};
goog.uri.utils.appendParam = function (a, b, c) {
  c = null != c ? "=" + goog.string.urlEncode(c) : "";
  return goog.uri.utils.appendQueryDataToUri_(a, b + c);
};
goog.uri.utils.findParam_ = function (a, b, c, d) {
  for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
    var f = a.charCodeAt(b - 1);
    if (f == goog.uri.utils.CharCode_.AMPERSAND || f == goog.uri.utils.CharCode_.QUESTION)
      if (
        ((f = a.charCodeAt(b + e)),
        !f || f == goog.uri.utils.CharCode_.EQUAL || f == goog.uri.utils.CharCode_.AMPERSAND || f == goog.uri.utils.CharCode_.HASH)
      )
        return b;
    b += e + 1;
  }
  return -1;
};
goog.uri.utils.hashOrEndRe_ = /#|$/;
goog.uri.utils.hasParam = function (a, b) {
  return 0 <= goog.uri.utils.findParam_(a, 0, b, a.search(goog.uri.utils.hashOrEndRe_));
};
goog.uri.utils.getParamValue = function (a, b) {
  var c = a.search(goog.uri.utils.hashOrEndRe_),
    d = goog.uri.utils.findParam_(a, 0, b, c);
  if (0 > d) return null;
  var e = a.indexOf("&", d);
  if (0 > e || e > c) e = c;
  d += b.length + 1;
  return goog.string.urlDecode(a.slice(d, -1 !== e ? e : 0));
};
goog.uri.utils.getParamValues = function (a, b) {
  for (var c = a.search(goog.uri.utils.hashOrEndRe_), d = 0, e, f = []; 0 <= (e = goog.uri.utils.findParam_(a, d, b, c)); ) {
    d = a.indexOf("&", e);
    if (0 > d || d > c) d = c;
    e += b.length + 1;
    f.push(goog.string.urlDecode(a.slice(e, Math.max(d, 0))));
  }
  return f;
};
goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
goog.uri.utils.removeParam = function (a, b) {
  for (var c = a.search(goog.uri.utils.hashOrEndRe_), d = 0, e, f = []; 0 <= (e = goog.uri.utils.findParam_(a, d, b, c)); )
    f.push(a.substring(d, e)), (d = Math.min(a.indexOf("&", e) + 1 || c, c));
  f.push(a.slice(d));
  return f.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1");
};
goog.uri.utils.setParam = function (a, b, c) {
  return goog.uri.utils.appendParam(goog.uri.utils.removeParam(a, b), b, c);
};
goog.uri.utils.setParamsFromMap = function (a, b) {
  a = goog.uri.utils.splitQueryData_(a);
  var c = a[1],
    d = [];
  c &&
    c.split("&").forEach(function (e) {
      var f = e.indexOf("=");
      f = 0 <= f ? e.slice(0, f) : e;
      b.hasOwnProperty(f) || d.push(e);
    });
  a[1] = goog.uri.utils.appendQueryData_(d.join("&"), goog.uri.utils.buildQueryDataFromMap(b));
  return goog.uri.utils.joinQueryData_(a);
};
goog.uri.utils.appendPath = function (a, b) {
  goog.uri.utils.assertNoFragmentsOrQueries_(a);
  goog.string.endsWith(a, "/") && (a = a.slice(0, -1));
  goog.string.startsWith(b, "/") && (b = b.slice(1));
  return "" + a + "/" + b;
};
goog.uri.utils.setPath = function (a, b) {
  goog.string.startsWith(b, "/") || (b = "/" + b);
  a = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(
    a[goog.uri.utils.ComponentIndex.SCHEME],
    a[goog.uri.utils.ComponentIndex.USER_INFO],
    a[goog.uri.utils.ComponentIndex.DOMAIN],
    a[goog.uri.utils.ComponentIndex.PORT],
    b,
    a[goog.uri.utils.ComponentIndex.QUERY_DATA],
    a[goog.uri.utils.ComponentIndex.FRAGMENT]
  );
};
goog.uri.utils.StandardQueryParam = { RANDOM: "zx" };
goog.uri.utils.makeUnique = function (a) {
  return goog.uri.utils.setParam(a, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString());
};
goog.debug.errorcontext = {};
goog.debug.errorcontext.addErrorContext = function (a, b, c) {
  a[goog.debug.errorcontext.CONTEXT_KEY_] || (a[goog.debug.errorcontext.CONTEXT_KEY_] = {});
  a[goog.debug.errorcontext.CONTEXT_KEY_][b] = c;
};
goog.debug.errorcontext.getErrorContext = function (a) {
  return a[goog.debug.errorcontext.CONTEXT_KEY_] || {};
};
goog.debug.errorcontext.CONTEXT_KEY_ = "__closure__error__context__984382";
goog.debug.LOGGING_ENABLED = goog.DEBUG;
goog.debug.FORCE_SLOPPY_STACKS = !1;
goog.debug.CHECK_FOR_THROWN_EVENT = !1;
goog.debug.catchErrors = function (a, b, c) {
  c = c || goog.global;
  var d = c.onerror,
    e = !!b;
  c.onerror = function (f, g, h, k, l) {
    d && d(f, g, h, k, l);
    a({ message: f, fileName: g, line: h, lineNumber: h, col: k, error: l });
    return e;
  };
};
goog.debug.expose = function (a, b) {
  if ("undefined" == typeof a) return "undefined";
  if (null == a) return "NULL";
  var c = [],
    d;
  for (d in a)
    if (b || "function" !== typeof a[d]) {
      var e = d + " = ";
      try {
        e += a[d];
      } catch (f) {
        e += "*** " + f + " ***";
      }
      c.push(e);
    }
  return c.join("\n");
};
goog.debug.deepExpose = function (a, b) {
  var c = [],
    d = [],
    e = {},
    f = function (g, h) {
      var k = h + "  ";
      try {
        if (void 0 === g) c.push("undefined");
        else if (null === g) c.push("NULL");
        else if ("string" === typeof g) c.push('"' + g.replace(/\n/g, "\n" + h) + '"');
        else if ("function" === typeof g) c.push(String(g).replace(/\n/g, "\n" + h));
        else if (goog.isObject(g)) {
          goog.hasUid(g) || d.push(g);
          var l = goog.getUid(g);
          if (e[l]) c.push("*** reference loop detected (id=" + l + ") ***");
          else {
            e[l] = !0;
            c.push("{");
            for (var m in g) if (b || "function" !== typeof g[m]) c.push("\n"), c.push(k), c.push(m + " = "), f(g[m], k);
            c.push("\n" + h + "}");
            delete e[l];
          }
        } else c.push(g);
      } catch (n) {
        c.push("*** " + n + " ***");
      }
    };
  f(a, "");
  for (a = 0; a < d.length; a++) goog.removeUid(d[a]);
  return c.join("");
};
goog.debug.exposeArray = function (a) {
  for (var b = [], c = 0; c < a.length; c++) Array.isArray(a[c]) ? b.push(goog.debug.exposeArray(a[c])) : b.push(a[c]);
  return "[ " + b.join(", ") + " ]";
};
goog.debug.normalizeErrorObject = function (a) {
  var b = goog.getObjectByName("window.location.href");
  null == a && (a = 'Unknown Error of type "null/undefined"');
  if ("string" === typeof a) return { message: a, name: "Unknown error", lineNumber: "Not available", fileName: b, stack: "Not available" };
  var c = !1;
  try {
    var d = a.lineNumber || a.line || "Not available";
  } catch (g) {
    (d = "Not available"), (c = !0);
  }
  try {
    var e = a.fileName || a.filename || a.sourceURL || goog.global.$googDebugFname || b;
  } catch (g) {
    (e = "Not available"), (c = !0);
  }
  b = goog.debug.serializeErrorStack_(a);
  if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
    c = a.message;
    if (null == c) {
      if (a.constructor && a.constructor instanceof Function) {
        var f = a.constructor.name ? a.constructor.name : goog.debug.getFunctionName(a.constructor);
        c = 'Unknown Error of type "' + f + '"';
        if (goog.debug.CHECK_FOR_THROWN_EVENT && "Event" == f)
          try {
            c = c + ' with Event.type "' + (a.type || "") + '"';
          } catch (g) {}
      } else c = "Unknown Error of unknown type";
      "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString());
    }
    return { message: c, name: a.name || "UnknownError", lineNumber: d, fileName: e, stack: b || "Not available" };
  }
  a.stack = b;
  return { message: a.message, name: a.name, lineNumber: a.lineNumber, fileName: a.fileName, stack: a.stack };
};
goog.debug.serializeErrorStack_ = function (a, b) {
  b || (b = {});
  b[goog.debug.serializeErrorAsKey_(a)] = !0;
  var c = a.stack || "";
  (a = a.cause) &&
    !b[goog.debug.serializeErrorAsKey_(a)] &&
    ((c += "\nCaused by: "),
    (a.stack && 0 == a.stack.indexOf(a.toString())) || (c += "string" === typeof a ? a : a.message + "\n"),
    (c += goog.debug.serializeErrorStack_(a, b)));
  return c;
};
goog.debug.serializeErrorAsKey_ = function (a) {
  var b = "";
  "function" === typeof a.toString && (b = "" + a);
  return b + a.stack;
};
goog.debug.enhanceError = function (a, b) {
  a instanceof Error || ((a = Error(a)), Error.captureStackTrace && Error.captureStackTrace(a, goog.debug.enhanceError));
  a.stack || (a.stack = goog.debug.getStacktrace(goog.debug.enhanceError));
  if (b) {
    for (var c = 0; a["message" + c]; ) ++c;
    a["message" + c] = String(b);
  }
  return a;
};
goog.debug.enhanceErrorWithContext = function (a, b) {
  a = goog.debug.enhanceError(a);
  if (b) for (var c in b) goog.debug.errorcontext.addErrorContext(a, c, b[c]);
  return a;
};
goog.debug.getStacktraceSimple = function (a) {
  if (!goog.debug.FORCE_SLOPPY_STACKS) {
    var b = goog.debug.getNativeStackTrace_(goog.debug.getStacktraceSimple);
    if (b) return b;
  }
  b = [];
  for (var c = arguments.callee.caller, d = 0; c && (!a || d < a); ) {
    b.push(goog.debug.getFunctionName(c));
    b.push("()\n");
    try {
      c = c.caller;
    } catch (e) {
      b.push("[exception trying to get caller]\n");
      break;
    }
    d++;
    if (d >= goog.debug.MAX_STACK_DEPTH) {
      b.push("[...long stack...]");
      break;
    }
  }
  a && d >= a ? b.push("[...reached max depth limit...]") : b.push("[end]");
  return b.join("");
};
goog.debug.MAX_STACK_DEPTH = 50;
goog.debug.getNativeStackTrace_ = function (a) {
  var b = Error();
  if (Error.captureStackTrace) return Error.captureStackTrace(b, a), String(b.stack);
  try {
    throw b;
  } catch (c) {
    b = c;
  }
  return (a = b.stack) ? String(a) : null;
};
goog.debug.getStacktrace = function (a) {
  var b;
  goog.debug.FORCE_SLOPPY_STACKS || (b = goog.debug.getNativeStackTrace_(a || goog.debug.getStacktrace));
  b || (b = goog.debug.getStacktraceHelper_(a || arguments.callee.caller, []));
  return b;
};
goog.debug.getStacktraceHelper_ = function (a, b) {
  var c = [];
  if (module$contents$goog$array_contains(b, a)) c.push("[...circular reference...]");
  else if (a && b.length < goog.debug.MAX_STACK_DEPTH) {
    c.push(goog.debug.getFunctionName(a) + "(");
    for (var d = a.arguments, e = 0; d && e < d.length; e++) {
      0 < e && c.push(", ");
      var f = d[e];
      switch (typeof f) {
        case "object":
          f = f ? "object" : "null";
          break;
        case "string":
          break;
        case "number":
          f = String(f);
          break;
        case "boolean":
          f = f ? "true" : "false";
          break;
        case "function":
          f = (f = goog.debug.getFunctionName(f)) ? f : "[fn]";
          break;
        default:
          f = typeof f;
      }
      40 < f.length && (f = f.slice(0, 40) + "...");
      c.push(f);
    }
    b.push(a);
    c.push(")\n");
    try {
      c.push(goog.debug.getStacktraceHelper_(a.caller, b));
    } catch (g) {
      c.push("[exception trying to get caller]\n");
    }
  } else a ? c.push("[...long stack...]") : c.push("[end]");
  return c.join("");
};
goog.debug.getFunctionName = function (a) {
  if (goog.debug.fnNameCache_[a]) return goog.debug.fnNameCache_[a];
  a = String(a);
  if (!goog.debug.fnNameCache_[a]) {
    var b = /function\s+([^\(]+)/m.exec(a);
    goog.debug.fnNameCache_[a] = b ? b[1] : "[Anonymous]";
  }
  return goog.debug.fnNameCache_[a];
};
goog.debug.makeWhitespaceVisible = function (a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
goog.debug.runtimeType = function (a) {
  return a instanceof Function
    ? a.displayName || a.name || "unknown type name"
    : a instanceof Object
    ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
    : null === a
    ? "null"
    : typeof a;
};
goog.debug.fnNameCache_ = {};
goog.debug.freezeInternal_ =
  (goog.DEBUG && Object.freeze) ||
  function (a) {
    return a;
  };
goog.debug.freeze = function (a) {
  return goog.debug.freezeInternal_(a);
};
goog.log = {};
goog.log.ENABLED = goog.debug.LOGGING_ENABLED;
goog.log.ROOT_LOGGER_NAME = "";
var third_party$javascript$closure$log$log$classdecl$var0 = function (a, b) {
  this.name = a;
  this.value = b;
};
third_party$javascript$closure$log$log$classdecl$var0.prototype.toString = function () {
  return this.name;
};
goog.log.Level = third_party$javascript$closure$log$log$classdecl$var0;
goog.log.Level.OFF = new goog.log.Level("OFF", Infinity);
goog.log.Level.SHOUT = new goog.log.Level("SHOUT", 1200);
goog.log.Level.SEVERE = new goog.log.Level("SEVERE", 1e3);
goog.log.Level.WARNING = new goog.log.Level("WARNING", 900);
goog.log.Level.INFO = new goog.log.Level("INFO", 800);
goog.log.Level.CONFIG = new goog.log.Level("CONFIG", 700);
goog.log.Level.FINE = new goog.log.Level("FINE", 500);
goog.log.Level.FINER = new goog.log.Level("FINER", 400);
goog.log.Level.FINEST = new goog.log.Level("FINEST", 300);
goog.log.Level.ALL = new goog.log.Level("ALL", 0);
goog.log.Level.PREDEFINED_LEVELS = [
  goog.log.Level.OFF,
  goog.log.Level.SHOUT,
  goog.log.Level.SEVERE,
  goog.log.Level.WARNING,
  goog.log.Level.INFO,
  goog.log.Level.CONFIG,
  goog.log.Level.FINE,
  goog.log.Level.FINER,
  goog.log.Level.FINEST,
  goog.log.Level.ALL
];
goog.log.Level.predefinedLevelsCache_ = null;
goog.log.Level.createPredefinedLevelsCache_ = function () {
  goog.log.Level.predefinedLevelsCache_ = {};
  for (var a = 0, b; (b = goog.log.Level.PREDEFINED_LEVELS[a]); a++)
    (goog.log.Level.predefinedLevelsCache_[b.value] = b), (goog.log.Level.predefinedLevelsCache_[b.name] = b);
};
goog.log.Level.getPredefinedLevel = function (a) {
  goog.log.Level.predefinedLevelsCache_ || goog.log.Level.createPredefinedLevelsCache_();
  return goog.log.Level.predefinedLevelsCache_[a] || null;
};
goog.log.Level.getPredefinedLevelByValue = function (a) {
  goog.log.Level.predefinedLevelsCache_ || goog.log.Level.createPredefinedLevelsCache_();
  if (a in goog.log.Level.predefinedLevelsCache_) return goog.log.Level.predefinedLevelsCache_[a];
  for (var b = 0; b < goog.log.Level.PREDEFINED_LEVELS.length; ++b) {
    var c = goog.log.Level.PREDEFINED_LEVELS[b];
    if (c.value <= a) return c;
  }
  return null;
};
var third_party$javascript$closure$log$log$classdecl$var1 = function () {};
third_party$javascript$closure$log$log$classdecl$var1.prototype.getName = function () {};
goog.log.Logger = third_party$javascript$closure$log$log$classdecl$var1;
goog.log.Logger.Level = goog.log.Level;
var third_party$javascript$closure$log$log$classdecl$var2 = function (a) {
  this.capacity_ = "number" === typeof a ? a : goog.log.LogBuffer.CAPACITY;
  this.clear();
};
third_party$javascript$closure$log$log$classdecl$var2.prototype.addRecord = function (a, b, c) {
  if (!this.isBufferingEnabled()) return new goog.log.LogRecord(a, b, c);
  var d = (this.curIndex_ + 1) % this.capacity_;
  this.curIndex_ = d;
  if (this.isFull_) return (d = this.buffer_[d]), d.reset(a, b, c), d;
  this.isFull_ = d == this.capacity_ - 1;
  return (this.buffer_[d] = new goog.log.LogRecord(a, b, c));
};
third_party$javascript$closure$log$log$classdecl$var2.prototype.forEachRecord = function (a) {
  var b = this.buffer_;
  if (b[0]) {
    var c = this.curIndex_,
      d = this.isFull_ ? c : -1;
    do (d = (d + 1) % this.capacity_), a(b[d]);
    while (d !== c);
  }
};
third_party$javascript$closure$log$log$classdecl$var2.prototype.isBufferingEnabled = function () {
  return 0 < this.capacity_;
};
third_party$javascript$closure$log$log$classdecl$var2.prototype.isFull = function () {
  return this.isFull_;
};
third_party$javascript$closure$log$log$classdecl$var2.prototype.clear = function () {
  this.buffer_ = Array(this.capacity_);
  this.curIndex_ = -1;
  this.isFull_ = !1;
};
goog.log.LogBuffer = third_party$javascript$closure$log$log$classdecl$var2;
goog.log.LogBuffer.CAPACITY = 0;
goog.log.LogBuffer.getInstance = function () {
  goog.log.LogBuffer.instance_ || (goog.log.LogBuffer.instance_ = new goog.log.LogBuffer(goog.log.LogBuffer.CAPACITY));
  return goog.log.LogBuffer.instance_;
};
goog.log.LogBuffer.isBufferingEnabled = function () {
  return goog.log.LogBuffer.getInstance().isBufferingEnabled();
};
var third_party$javascript$closure$log$log$classdecl$var3 = function (a, b, c, d, e) {
  this.exception_ = void 0;
  this.reset(a || goog.log.Level.OFF, b, c, d, e);
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.reset = function (a, b, c, d, e) {
  this.time_ = d || goog.now();
  this.level_ = a;
  this.msg_ = b;
  this.loggerName_ = c;
  this.exception_ = void 0;
  this.sequenceNumber_ = "number" === typeof e ? e : goog.log.LogRecord.nextSequenceNumber_;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.getLoggerName = function () {
  return this.loggerName_;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.setLoggerName = function (a) {
  this.loggerName_ = a;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.getException = function () {
  return this.exception_;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.setException = function (a) {
  this.exception_ = a;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.getLevel = function () {
  return this.level_;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.setLevel = function (a) {
  this.level_ = a;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.getMessage = function () {
  return this.msg_;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.setMessage = function (a) {
  this.msg_ = a;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.getMillis = function () {
  return this.time_;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.setMillis = function (a) {
  this.time_ = a;
};
third_party$javascript$closure$log$log$classdecl$var3.prototype.getSequenceNumber = function () {
  return this.sequenceNumber_;
};
goog.log.LogRecord = third_party$javascript$closure$log$log$classdecl$var3;
goog.log.LogRecord.nextSequenceNumber_ = 0;
var third_party$javascript$closure$log$log$classdecl$var4 = function (a, b) {
  this.level = null;
  this.handlers = [];
  this.parent = (void 0 === b ? null : b) || null;
  this.children = [];
  this.logger = {
    getName: function () {
      return a;
    }
  };
};
third_party$javascript$closure$log$log$classdecl$var4.prototype.getEffectiveLevel = function () {
  if (this.level) return this.level;
  if (this.parent) return this.parent.getEffectiveLevel();
  goog.asserts.fail("Root logger has no level set.");
  return goog.log.Level.OFF;
};
third_party$javascript$closure$log$log$classdecl$var4.prototype.publish = function (a) {
  for (var b = this; b; )
    b.handlers.forEach(function (c) {
      c(a);
    }),
      (b = b.parent);
};
goog.log.LogRegistryEntry_ = third_party$javascript$closure$log$log$classdecl$var4;
var third_party$javascript$closure$log$log$classdecl$var5 = function () {
  this.entries = {};
  var a = new goog.log.LogRegistryEntry_(goog.log.ROOT_LOGGER_NAME);
  a.level = goog.log.Level.CONFIG;
  this.entries[goog.log.ROOT_LOGGER_NAME] = a;
};
third_party$javascript$closure$log$log$classdecl$var5.prototype.getLogRegistryEntry = function (a, b) {
  var c = this.entries[a];
  if (c) return void 0 !== b && (c.level = b), c;
  c = a.lastIndexOf(".");
  c = a.slice(0, Math.max(c, 0));
  c = this.getLogRegistryEntry(c);
  var d = new goog.log.LogRegistryEntry_(a, c);
  this.entries[a] = d;
  c.children.push(d);
  void 0 !== b && (d.level = b);
  return d;
};
third_party$javascript$closure$log$log$classdecl$var5.prototype.getAllLoggers = function () {
  var a = this;
  return Object.keys(this.entries).map(function (b) {
    return a.entries[b].logger;
  });
};
goog.log.LogRegistry_ = third_party$javascript$closure$log$log$classdecl$var5;
goog.log.LogRegistry_.getInstance = function () {
  goog.log.LogRegistry_.instance_ || (goog.log.LogRegistry_.instance_ = new goog.log.LogRegistry_());
  return goog.log.LogRegistry_.instance_;
};
goog.log.getLogger = function (a, b) {
  return goog.log.ENABLED ? goog.log.LogRegistry_.getInstance().getLogRegistryEntry(a, b).logger : null;
};
goog.log.getRootLogger = function () {
  return goog.log.ENABLED ? goog.log.LogRegistry_.getInstance().getLogRegistryEntry(goog.log.ROOT_LOGGER_NAME).logger : null;
};
goog.log.addHandler = function (a, b) {
  goog.log.ENABLED && a && goog.log.LogRegistry_.getInstance().getLogRegistryEntry(a.getName()).handlers.push(b);
};
goog.log.removeHandler = function (a, b) {
  return goog.log.ENABLED &&
    a &&
    ((a = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(a.getName())), (b = a.handlers.indexOf(b)), -1 !== b)
    ? (a.handlers.splice(b, 1), !0)
    : !1;
};
goog.log.setLevel = function (a, b) {
  goog.log.ENABLED && a && (goog.log.LogRegistry_.getInstance().getLogRegistryEntry(a.getName()).level = b);
};
goog.log.getLevel = function (a) {
  return goog.log.ENABLED && a ? goog.log.LogRegistry_.getInstance().getLogRegistryEntry(a.getName()).level : null;
};
goog.log.getEffectiveLevel = function (a) {
  return goog.log.ENABLED && a
    ? goog.log.LogRegistry_.getInstance().getLogRegistryEntry(a.getName()).getEffectiveLevel()
    : goog.log.Level.OFF;
};
goog.log.isLoggable = function (a, b) {
  return goog.log.ENABLED && a && b ? b.value >= goog.log.getEffectiveLevel(a).value : !1;
};
goog.log.getAllLoggers = function () {
  return goog.log.ENABLED ? goog.log.LogRegistry_.getInstance().getAllLoggers() : [];
};
goog.log.getLogRecord = function (a, b, c, d) {
  a = goog.log.LogBuffer.getInstance().addRecord(b || goog.log.Level.OFF, c, a.getName());
  a.setException(d);
  return a;
};
goog.log.publishLogRecord = function (a, b) {
  goog.log.ENABLED &&
    a &&
    goog.log.isLoggable(a, b.getLevel()) &&
    goog.log.LogRegistry_.getInstance().getLogRegistryEntry(a.getName()).publish(b);
};
goog.log.log = function (a, b, c, d) {
  if (goog.log.ENABLED && a && goog.log.isLoggable(a, b)) {
    b = b || goog.log.Level.OFF;
    var e = goog.log.LogRegistry_.getInstance().getLogRegistryEntry(a.getName());
    "function" === typeof c && (c = c());
    a = goog.log.LogBuffer.getInstance().addRecord(b, c, a.getName());
    a.setException(d);
    e.publish(a);
  }
};
goog.log.error = function (a, b, c) {
  goog.log.ENABLED && a && goog.log.log(a, goog.log.Level.SEVERE, b, c);
};
goog.log.warning = function (a, b, c) {
  goog.log.ENABLED && a && goog.log.log(a, goog.log.Level.WARNING, b, c);
};
goog.log.info = function (a, b, c) {
  goog.log.ENABLED && a && goog.log.log(a, goog.log.Level.INFO, b, c);
};
goog.log.fine = function (a, b, c) {
  goog.log.ENABLED && a && goog.log.log(a, goog.log.Level.FINE, b, c);
};
var module$exports$google3$third_party$javascript$tslib$tslib = {},
  module$contents$google3$third_party$javascript$tslib$tslib_extendStatics =
    Object.setPrototypeOf ||
    function (a, b) {
      for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
    };
module$exports$google3$third_party$javascript$tslib$tslib.__extends = function (a, b) {
  function c() {
    this.constructor = a;
  }
  module$contents$google3$third_party$javascript$tslib$tslib_extendStatics(a, b);
  a.prototype = null === b ? Object.create(b) : ((c.prototype = b.prototype), new c());
};
module$exports$google3$third_party$javascript$tslib$tslib.__assign =
  Object.assign ||
  function (a) {
    for (var b, c = 1, d = arguments.length; c < d; c++) {
      b = arguments[c];
      for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
    }
    return a;
  };
module$exports$google3$third_party$javascript$tslib$tslib.__rest = function (a, b) {
  var c = {},
    d;
  for (d in a) Object.prototype.hasOwnProperty.call(a, d) && 0 > b.indexOf(d) && (c[d] = a[d]);
  if (null != a && "function" === typeof Object.getOwnPropertySymbols) {
    var e = 0;
    for (d = Object.getOwnPropertySymbols(a); e < d.length; e++)
      0 > b.indexOf(d[e]) && Object.prototype.propertyIsEnumerable.call(a, d[e]) && (c[d[e]] = a[d[e]]);
  }
  return c;
};
module$exports$google3$third_party$javascript$tslib$tslib.__decorate = function (a, b, c, d) {
  var e = arguments.length,
    f = 3 > e ? b : null === d ? (d = Object.getOwnPropertyDescriptor(b, c)) : d,
    g;
  if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(a, b, c, d);
  else for (var h = a.length - 1; 0 <= h; h--) if ((g = a[h])) f = (3 > e ? g(f) : 3 < e ? g(b, c, f) : g(b, c)) || f;
  return 3 < e && f && Object.defineProperty(b, c, f), f;
};
module$exports$google3$third_party$javascript$tslib$tslib.__param = function (a, b) {
  return function (c, d) {
    b(c, d, a);
  };
};
module$exports$google3$third_party$javascript$tslib$tslib.__metadata = function (a, b) {
  if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(a, b);
};
module$exports$google3$third_party$javascript$tslib$tslib.__awaiter = function (a, b, c, d) {
  function e(f) {
    return f instanceof c
      ? f
      : new c(function (g) {
          g(f);
        });
  }
  return new (c || (c = Promise))(function (f, g) {
    function h(m) {
      try {
        l(d.next(m));
      } catch (n) {
        g(n);
      }
    }
    function k(m) {
      try {
        l(d["throw"](m));
      } catch (n) {
        g(n);
      }
    }
    function l(m) {
      m.done ? f(m.value) : e(m.value).then(h, k);
    }
    l((d = d.apply(a, b || [])).next());
  });
};
module$exports$google3$third_party$javascript$tslib$tslib.__generator = function (a, b) {
  function c(l) {
    return function (m) {
      return d([l, m]);
    };
  }
  function d(l) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (
          ((f = 1),
          g &&
            (h = l[0] & 2 ? g["return"] : l[0] ? g["throw"] || ((h = g["return"]) && h.call(g), 0) : g.next) &&
            !(h = h.call(g, l[1])).done)
        )
          return h;
        if (((g = 0), h)) l = [l[0] & 2, h.value];
        switch (l[0]) {
          case 0:
          case 1:
            h = l;
            break;
          case 4:
            return e.label++, { value: l[1], done: !1 };
          case 5:
            e.label++;
            g = l[1];
            l = [0];
            continue;
          case 7:
            l = e.ops.pop();
            e.trys.pop();
            continue;
          default:
            if (!((h = e.trys), (h = 0 < h.length && h[h.length - 1])) && (6 === l[0] || 2 === l[0])) {
              e = 0;
              continue;
            }
            if (3 === l[0] && (!h || (l[1] > h[0] && l[1] < h[3]))) e.label = l[1];
            else if (6 === l[0] && e.label < h[1]) (e.label = h[1]), (h = l);
            else if (h && e.label < h[2]) (e.label = h[2]), e.ops.push(l);
            else {
              h[2] && e.ops.pop();
              e.trys.pop();
              continue;
            }
        }
        l = b.call(a, e);
      } catch (m) {
        (l = [6, m]), (g = 0);
      } finally {
        f = h = 0;
      }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
  var e = {
      label: 0,
      sent: function () {
        if (h[0] & 1) throw h[1];
        return h[1];
      },
      trys: [],
      ops: []
    },
    f,
    g,
    h,
    k;
  return (
    (k = { next: c(0), throw: c(1), return: c(2) }),
    "function" === typeof Symbol &&
      (k[Symbol.iterator] = function () {
        return k;
      }),
    k
  );
};
module$exports$google3$third_party$javascript$tslib$tslib.__exportStar = function (a, b) {
  for (var c in a) b.hasOwnProperty(c) || (b[c] = a[c]);
};
module$exports$google3$third_party$javascript$tslib$tslib.__values = function (a) {
  var b = "function" === typeof Symbol && a[Symbol.iterator],
    c = 0;
  return b
    ? b.call(a)
    : {
        next: function () {
          a && c >= a.length && (a = void 0);
          return { value: a && a[c++], done: !a };
        }
      };
};
module$exports$google3$third_party$javascript$tslib$tslib.__read = function (a, b) {
  var c = "function" === typeof Symbol && a[Symbol.iterator];
  if (!c) return a;
  a = c.call(a);
  var d,
    e = [];
  try {
    for (; (void 0 === b || 0 < b--) && !(d = a.next()).done; ) e.push(d.value);
  } catch (g) {
    var f = { error: g };
  } finally {
    try {
      d && !d.done && (c = a["return"]) && c.call(a);
    } finally {
      if (f) throw f.error;
    }
  }
  return e;
};
module$exports$google3$third_party$javascript$tslib$tslib.__spread = function () {
  for (var a = [], b = 0; b < arguments.length; b++)
    a = a.concat(module$exports$google3$third_party$javascript$tslib$tslib.__read(arguments[b]));
  return a;
};
module$exports$google3$third_party$javascript$tslib$tslib.__spreadArrays = function () {
  for (var a = 0, b = 0, c = arguments.length; b < c; b++) a += arguments[b].length;
  a = Array(a);
  var d = 0;
  for (b = 0; b < c; b++) for (var e = arguments[b], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
  return a;
};
module$exports$google3$third_party$javascript$tslib$tslib.__spreadArray = function (a, b, c) {
  if (!(Array.isArray(b) || b instanceof NodeList)) throw new TypeError("Expected an Array or NodeList: " + String(b));
  if (c || 2 === arguments.length)
    for (var d = 0, e = b.length, f; d < e; d++) (!f && d in b) || (f || (f = Array.prototype.slice.call(b, 0, d)), (f[d] = b[d]));
  return a.concat(f || Array.prototype.slice.call(b));
};
module$exports$google3$third_party$javascript$tslib$tslib.__await = function (a) {
  return this instanceof module$exports$google3$third_party$javascript$tslib$tslib.__await
    ? ((this.v = a), this)
    : new module$exports$google3$third_party$javascript$tslib$tslib.__await(a);
};
module$exports$google3$third_party$javascript$tslib$tslib.__asyncGenerator = function (a, b, c) {
  function d(n) {
    k[n] &&
      (l[n] = function (p) {
        return new Promise(function (q, r) {
          1 < m.push([n, p, q, r]) || e(n, p);
        });
      });
  }
  function e(n, p) {
    try {
      var q = k[n](p);
      q.value instanceof module$exports$google3$third_party$javascript$tslib$tslib.__await
        ? Promise.resolve(q.value.v).then(f, g)
        : h(m[0][2], q);
    } catch (r) {
      h(m[0][3], r);
    }
  }
  function f(n) {
    e("next", n);
  }
  function g(n) {
    e("throw", n);
  }
  function h(n, p) {
    (n(p), m.shift(), m.length) && e(m[0][0], m[0][1]);
  }
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var k = c.apply(a, b || []),
    l,
    m = [];
  return (
    (l = {}),
    d("next"),
    d("throw"),
    d("return"),
    (l[Symbol.asyncIterator] = function () {
      return this;
    }),
    l
  );
};
module$exports$google3$third_party$javascript$tslib$tslib.__asyncDelegator = function (a) {
  function b(e, f) {
    c[e] = a[e]
      ? function (g) {
          return (d = !d)
            ? { value: new module$exports$google3$third_party$javascript$tslib$tslib.__await(a[e](g)), done: "return" === e }
            : f
            ? f(g)
            : g;
        }
      : f;
  }
  var c, d;
  return (
    (c = {}),
    b("next"),
    b("throw", function (e) {
      throw e;
    }),
    b("return"),
    (c[Symbol.iterator] = function () {
      return c;
    }),
    c
  );
};
module$exports$google3$third_party$javascript$tslib$tslib.__asyncValues = function (a) {
  function b(f) {
    e[f] =
      a[f] &&
      function (g) {
        return new Promise(function (h, k) {
          g = a[f](g);
          c(h, k, g.done, g.value);
        });
      };
  }
  function c(f, g, h, k) {
    Promise.resolve(k).then(function (l) {
      f({ value: l, done: h });
    }, g);
  }
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var d = a[Symbol.asyncIterator],
    e;
  return d
    ? d.call(a)
    : ((a = "function" === typeof __values ? __values(a) : a[Symbol.iterator]()),
      (e = {}),
      b("next"),
      b("throw"),
      b("return"),
      (e[Symbol.asyncIterator] = function () {
        return this;
      }),
      e);
};
module$exports$google3$third_party$javascript$tslib$tslib.__makeTemplateObject = function (a, b) {
  Object.defineProperty ? Object.defineProperty(a, "raw", { value: b }) : (a.raw = b);
  return a;
};
module$exports$google3$third_party$javascript$tslib$tslib.__classPrivateFieldGet = function (a, b, c, d) {
  if ("a" === c && !d) throw new TypeError("Private accessor was defined without a getter");
  if ("function" === typeof b ? a !== b || !d : !b.has(a))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return "m" === c ? d : "a" === c ? d.call(a) : d ? d.value : b.get(a);
};
module$exports$google3$third_party$javascript$tslib$tslib.__classPrivateFieldSet = function (a, b, c, d, e) {
  if ("m" === d) throw new TypeError("Private method is not writable");
  if ("a" === d && !e) throw new TypeError("Private accessor was defined without a setter");
  if ("function" === typeof b ? a !== b || !e : !b.has(a))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return "a" === d ? e.call(a, c) : e ? (e.value = c) : b.set(a, c), c;
};
module$exports$google3$third_party$javascript$tslib$tslib.__classPrivateFieldIn = function (a, b) {
  if (null === b || ("object" !== typeof b && "function" !== typeof b)) throw new TypeError("Cannot use 'in' operator on non-object");
  return "function" === typeof a ? b === a : a.has(b);
}; /*

 SPDX-License-Identifier: Apache-2.0
*/
var module$exports$google3$third_party$javascript$safevalues$environment$dev = {},
  module$contents$google3$third_party$javascript$safevalues$environment$dev_module =
    module$contents$google3$third_party$javascript$safevalues$environment$dev_module || {
      id: "third_party/javascript/safevalues/environment/dev.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$environment$dev.DEV_MODE = goog.DEBUG;
var module$exports$google3$third_party$javascript$safevalues$internals$pure = {},
  module$contents$google3$third_party$javascript$safevalues$internals$pure_module =
    module$contents$google3$third_party$javascript$safevalues$internals$pure_module || {
      id: "third_party/javascript/safevalues/internals/pure.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(a) {
  return { valueOf: a }.valueOf();
}
module$exports$google3$third_party$javascript$safevalues$internals$pure.pure =
  module$contents$google3$third_party$javascript$safevalues$internals$pure_pure;
var module$exports$goog$html$internals = {};
module$exports$goog$html$internals.createSafeHtml =
  module$contents$goog$html$SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse;
module$exports$goog$html$internals.createSafeScript =
  module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse;
module$exports$goog$html$internals.createSafeStyle =
  module$contents$goog$html$SafeStyle_SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse;
module$exports$goog$html$internals.createSafeStyleSheet =
  module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse;
module$exports$goog$html$internals.createSafeUrl = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse;
module$exports$goog$html$internals.createTrustedResourceUrl =
  goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse;
var module$exports$google3$third_party$javascript$safevalues$internals$url_impl = {},
  module$contents$google3$third_party$javascript$safevalues$internals$url_impl_module =
    module$contents$google3$third_party$javascript$safevalues$internals$url_impl_module || {
      id: "third_party/javascript/safevalues/internals/url_impl.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$internals$url_impl.SafeUrl = goog.html.SafeUrl;
function module$contents$google3$third_party$javascript$safevalues$internals$url_impl_createUrl(a) {
  return (0, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse)(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$url_impl.createUrl =
  module$contents$google3$third_party$javascript$safevalues$internals$url_impl_createUrl;
module$exports$google3$third_party$javascript$safevalues$internals$url_impl.ABOUT_BLANK = goog.html.SafeUrl.ABOUT_BLANK;
module$exports$google3$third_party$javascript$safevalues$internals$url_impl.INNOCUOUS_URL = goog.html.SafeUrl.INNOCUOUS_URL;
function module$contents$google3$third_party$javascript$safevalues$internals$url_impl_isUrl(a) {
  return a instanceof goog.html.SafeUrl;
}
module$exports$google3$third_party$javascript$safevalues$internals$url_impl.isUrl =
  module$contents$google3$third_party$javascript$safevalues$internals$url_impl_isUrl;
function module$contents$google3$third_party$javascript$safevalues$internals$url_impl_unwrapUrl(a) {
  return goog.html.SafeUrl.unwrap(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$url_impl.unwrapUrl =
  module$contents$google3$third_party$javascript$safevalues$internals$url_impl_unwrapUrl;
var module$exports$google3$third_party$javascript$safevalues$builders$url_sanitizer = {},
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_module =
    module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_module || {
      id: "third_party/javascript/safevalues/builders/url_sanitizer.closure.js"
    },
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_ASSUME_IMPLEMENTS_URL_API = 2020 <= goog.FEATURESET_YEAR,
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_supportsURLAPI =
    module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
      if (module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_ASSUME_IMPLEMENTS_URL_API) return !0;
      try {
        return new URL("s://g"), !0;
      } catch (a) {
        return !1;
      }
    });
function module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_legacyExtractScheme(a) {
  var b = document.createElement("a");
  try {
    b.href = a;
  } catch (c) {
    return;
  }
  a = b.protocol;
  return ":" === a || "" === a ? "https:" : a;
}
var module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_JavaScriptUrlSanitizationCallback;
function module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_extractScheme(a) {
  if (!module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_supportsURLAPI)
    return module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_legacyExtractScheme(a);
  try {
    var b = new URL(a);
  } catch (c) {
    return "https:";
  }
  return b.protocol;
}
module$exports$google3$third_party$javascript$safevalues$builders$url_sanitizer.extractScheme =
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_extractScheme;
var module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_ALLOWED_SCHEMES = [
  "data:",
  "http:",
  "https:",
  "mailto:",
  "ftp:"
];
function module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_sanitizeJavascriptUrl(a) {
  if ("javascript:" === module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_extractScheme(a))
    module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_triggerCallbacks(a);
  else return a;
}
module$exports$google3$third_party$javascript$safevalues$builders$url_sanitizer.sanitizeJavascriptUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_sanitizeJavascriptUrl;
function module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(a) {
  return a instanceof goog.html.SafeUrl
    ? module$contents$google3$third_party$javascript$safevalues$internals$url_impl_unwrapUrl(a)
    : module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_sanitizeJavascriptUrl(a);
}
module$exports$google3$third_party$javascript$safevalues$builders$url_sanitizer.unwrapUrlOrSanitize =
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize;
function module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_restrictivelySanitizeUrl(a) {
  var b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_extractScheme(a);
  return void 0 !== b &&
    -1 !== module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_ALLOWED_SCHEMES.indexOf(b.toLowerCase())
    ? a
    : "about:invalid#zClosurez";
}
module$exports$google3$third_party$javascript$safevalues$builders$url_sanitizer.restrictivelySanitizeUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_restrictivelySanitizeUrl;
var module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_sanitizationCallbacks = [],
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_triggerCallbacks = function (a) {};
goog.DEBUG &&
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_addJavaScriptUrlSanitizationCallback(function (a) {
    (0, goog.log.warning)((0, goog.log.getLogger)("safevalues"), "A URL with content '" + a + "' was sanitized away.");
  });
function module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_addJavaScriptUrlSanitizationCallback(a) {
  -1 === module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_sanitizationCallbacks.indexOf(a) &&
    module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_sanitizationCallbacks.push(a);
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_triggerCallbacks = function (b) {
    module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_sanitizationCallbacks.forEach(function (c) {
      c(b);
    });
  };
}
module$exports$google3$third_party$javascript$safevalues$builders$url_sanitizer.addJavaScriptUrlSanitizationCallback =
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_addJavaScriptUrlSanitizationCallback;
function module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_removeJavaScriptUrlSanitizationCallback(a) {
  a = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_sanitizationCallbacks.indexOf(a);
  -1 !== a && module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_sanitizationCallbacks.splice(a, 1);
}
module$exports$google3$third_party$javascript$safevalues$builders$url_sanitizer.removeJavaScriptUrlSanitizationCallback =
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_removeJavaScriptUrlSanitizationCallback;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$anchor = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$anchor_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$anchor_module || {
      id: "third_party/javascript/safevalues/dom/elements/anchor.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$anchor_setHref(a, b) {
  b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(b);
  void 0 !== b && (a.href = b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$anchor.setHref =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$anchor_setHref;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$area = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$area_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$area_module || {
      id: "third_party/javascript/safevalues/dom/elements/area.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$area_setHref(a, b) {
  b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(b);
  void 0 !== b && (a.href = b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$area.setHref =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$area_setHref;
var module$exports$google3$third_party$javascript$safevalues$internals$resource_url_impl = {},
  module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_module =
    module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_module || {
      id: "third_party/javascript/safevalues/internals/resource_url_impl.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$internals$resource_url_impl.TrustedResourceUrl = goog.html.TrustedResourceUrl;
function module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_createResourceUrl(a) {
  return (0, goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse)(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$resource_url_impl.createResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_createResourceUrl;
function module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_isResourceUrl(a) {
  return a instanceof goog.html.TrustedResourceUrl;
}
module$exports$google3$third_party$javascript$safevalues$internals$resource_url_impl.isResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_isResourceUrl;
function module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(a) {
  return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$resource_url_impl.unwrapResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$base = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$base_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$base_module || {
      id: "third_party/javascript/safevalues/dom/elements/base.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$base_setHref(a, b) {
  a.href = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$base.setHref =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$base_setHref;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$button = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$button_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$button_module || {
      id: "third_party/javascript/safevalues/dom/elements/button.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$button_setFormaction(a, b) {
  b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(b);
  void 0 !== b && (a.formAction = b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$button.setFormaction =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$button_setFormaction;
var module$exports$google3$third_party$javascript$safevalues$internals$secrets = {},
  module$contents$google3$third_party$javascript$safevalues$internals$secrets_module =
    module$contents$google3$third_party$javascript$safevalues$internals$secrets_module || {
      id: "third_party/javascript/safevalues/internals/secrets.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$internals$secrets.secretToken = {};
function module$contents$google3$third_party$javascript$safevalues$internals$secrets_ensureTokenIsValid(a) {
  if (goog.DEBUG && a !== module$exports$google3$third_party$javascript$safevalues$internals$secrets.secretToken) throw Error("Bad secret");
}
module$exports$google3$third_party$javascript$safevalues$internals$secrets.ensureTokenIsValid =
  module$contents$google3$third_party$javascript$safevalues$internals$secrets_ensureTokenIsValid;
var module$exports$google3$third_party$javascript$safevalues$internals$attribute_impl = {},
  module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_module =
    module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_module || {
      id: "third_party/javascript/safevalues/internals/attribute_impl.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$internals$attribute_impl.SafeAttributePrefix = function () {};
var module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_AttributePrefixImpl = function (a, b) {
  module$exports$google3$third_party$javascript$safevalues$internals$attribute_impl.SafeAttributePrefix.call(this);
  module$contents$google3$third_party$javascript$safevalues$internals$secrets_ensureTokenIsValid(b);
  this.privateDoNotAccessOrElseWrappedAttrPrefix = a;
};
$jscomp.inherits(
  module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_AttributePrefixImpl,
  module$exports$google3$third_party$javascript$safevalues$internals$attribute_impl.SafeAttributePrefix
);
module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_AttributePrefixImpl.prototype.toString = function () {
  return this.privateDoNotAccessOrElseWrappedAttrPrefix;
};
function module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_createAttributePrefix(a) {
  return new module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_AttributePrefixImpl(
    a,
    module$exports$google3$third_party$javascript$safevalues$internals$secrets.secretToken
  );
}
module$exports$google3$third_party$javascript$safevalues$internals$attribute_impl.createAttributePrefix =
  module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_createAttributePrefix;
function module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_unwrapAttributePrefix(a) {
  if (a instanceof module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_AttributePrefixImpl)
    return a.privateDoNotAccessOrElseWrappedAttrPrefix;
  a = "";
  goog.DEBUG && (a = "Unexpected type when unwrapping SafeAttributePrefix");
  throw Error(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$attribute_impl.unwrapAttributePrefix =
  module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_unwrapAttributePrefix;
var module$exports$google3$third_party$javascript$safevalues$internals$html_impl = {},
  module$contents$google3$third_party$javascript$safevalues$internals$html_impl_module =
    module$contents$google3$third_party$javascript$safevalues$internals$html_impl_module || {
      id: "third_party/javascript/safevalues/internals/html_impl.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$internals$html_impl.SafeHtml = module$contents$goog$html$SafeHtml_SafeHtml;
function module$contents$google3$third_party$javascript$safevalues$internals$html_impl_createHtml(a) {
  return (0, module$exports$goog$html$internals.createSafeHtml)(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml =
  module$contents$google3$third_party$javascript$safevalues$internals$html_impl_createHtml;
module$exports$google3$third_party$javascript$safevalues$internals$html_impl.EMPTY_HTML = module$contents$goog$html$SafeHtml_SafeHtml.EMPTY;
function module$contents$google3$third_party$javascript$safevalues$internals$html_impl_isHtml(a) {
  return a instanceof module$contents$goog$html$SafeHtml_SafeHtml;
}
module$exports$google3$third_party$javascript$safevalues$internals$html_impl.isHtml =
  module$contents$google3$third_party$javascript$safevalues$internals$html_impl_isHtml;
function module$contents$google3$third_party$javascript$safevalues$internals$html_impl_unwrapHtml(a) {
  return module$contents$goog$html$SafeHtml_SafeHtml.unwrapTrustedHTML(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml =
  module$contents$google3$third_party$javascript$safevalues$internals$html_impl_unwrapHtml;
var module$exports$google3$third_party$javascript$safevalues$internals$style_impl = {},
  module$contents$google3$third_party$javascript$safevalues$internals$style_impl_module =
    module$contents$google3$third_party$javascript$safevalues$internals$style_impl_module || {
      id: "third_party/javascript/safevalues/internals/style_impl.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$internals$style_impl.SafeStyle = module$contents$goog$html$SafeStyle_SafeStyle;
function module$contents$google3$third_party$javascript$safevalues$internals$style_impl_createStyle(a) {
  return (0, module$exports$goog$html$internals.createSafeStyle)(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$style_impl.createStyle =
  module$contents$google3$third_party$javascript$safevalues$internals$style_impl_createStyle;
function module$contents$google3$third_party$javascript$safevalues$internals$style_impl_isStyle(a) {
  return a instanceof module$contents$goog$html$SafeStyle_SafeStyle;
}
module$exports$google3$third_party$javascript$safevalues$internals$style_impl.isStyle =
  module$contents$google3$third_party$javascript$safevalues$internals$style_impl_isStyle;
function module$contents$google3$third_party$javascript$safevalues$internals$style_impl_unwrapStyle(a) {
  return module$contents$goog$html$SafeStyle_SafeStyle.unwrap(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$style_impl.unwrapStyle =
  module$contents$google3$third_party$javascript$safevalues$internals$style_impl_unwrapStyle;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$element = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$element_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$element_module || {
      id: "third_party/javascript/safevalues/dom/elements/element.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setInnerHtml(a, b) {
  module$contents$google3$third_party$javascript$safevalues$dom$elements$element_isElement(a) &&
    module$contents$google3$third_party$javascript$safevalues$dom$elements$element_throwIfScriptOrStyle(a);
  a.innerHTML = (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml)(b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$element.setInnerHtml =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setInnerHtml;
function module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setOuterHtml(a, b) {
  var c = a.parentElement;
  null !== c && module$contents$google3$third_party$javascript$safevalues$dom$elements$element_throwIfScriptOrStyle(c);
  a.outerHTML = (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml)(b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$element.setOuterHtml =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setOuterHtml;
function module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setCssText(a, b) {
  a.style.cssText = module$contents$google3$third_party$javascript$safevalues$internals$style_impl_unwrapStyle(b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$element.setCssText =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setCssText;
function module$contents$google3$third_party$javascript$safevalues$dom$elements$element_insertAdjacentHtml(a, b, c) {
  var d = "beforebegin" === b || "afterend" === b ? a.parentElement : a;
  null !== d && module$contents$google3$third_party$javascript$safevalues$dom$elements$element_throwIfScriptOrStyle(d);
  a.insertAdjacentHTML(b, (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml)(c));
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$element.insertAdjacentHtml =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$element_insertAdjacentHtml;
function module$contents$google3$third_party$javascript$safevalues$dom$elements$element_buildPrefixedAttributeSetter(a) {
  var b = $jscomp.getRestArguments.apply(1, arguments),
    c = [a].concat($jscomp.arrayFromIterable(b));
  return function (d, e, f) {
    module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setPrefixedAttribute(c, d, e, f);
  };
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$element.buildPrefixedAttributeSetter =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$element_buildPrefixedAttributeSetter;
function module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setPrefixedAttribute(a, b, c, d) {
  if (0 === a.length) throw ((b = ""), goog.DEBUG && (b = "No prefixes are provided"), Error(b));
  a = a.map(function (f) {
    return module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_unwrapAttributePrefix(f);
  });
  var e = c.toLowerCase();
  if (
    a.every(function (f) {
      return 0 !== e.indexOf(f);
    })
  )
    throw Error('Attribute "' + c + '" does not match any of the allowed prefixes.');
  b.setAttribute(c, d);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$element.setPrefixedAttribute =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$element_setPrefixedAttribute;
function module$contents$google3$third_party$javascript$safevalues$dom$elements$element_throwIfScriptOrStyle(a) {
  var b = "";
  if ("script" === a.tagName.toLowerCase()) throw (goog.DEBUG && (b = "Use safeScriptEl.setTextContent with a SafeScript."), Error(b));
  if ("style" === a.tagName.toLowerCase()) throw (goog.DEBUG && (b = "Use safeStyleEl.setTextContent with a SafeStyleSheet."), Error(b));
}
function module$contents$google3$third_party$javascript$safevalues$dom$elements$element_isElement(a) {
  return void 0 !== a.tagName;
}
var module$exports$google3$third_party$javascript$safevalues$dom$elements$embed = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$embed_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$embed_module || {
      id: "third_party/javascript/safevalues/dom/elements/embed.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$embed_setSrc(a, b) {
  a.src = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$embed.setSrc =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$embed_setSrc;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$form = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$form_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$form_module || {
      id: "third_party/javascript/safevalues/dom/elements/form.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$form_setAction(a, b) {
  b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(b);
  void 0 !== b && (a.action = b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$form.setAction =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$form_setAction;
var module$exports$google3$javascript$typescript$contrib$check = {},
  module$contents$google3$javascript$typescript$contrib$check_module =
    module$contents$google3$javascript$typescript$contrib$check_module || { id: "javascript/typescript/contrib/check.closure.js" };
function module$contents$google3$javascript$typescript$contrib$check_checkExhaustive(a, b) {
  return module$contents$google3$javascript$typescript$contrib$check_checkExhaustiveAllowing(a, b);
}
module$exports$google3$javascript$typescript$contrib$check.checkExhaustive =
  module$contents$google3$javascript$typescript$contrib$check_checkExhaustive;
function module$contents$google3$javascript$typescript$contrib$check_checkExhaustiveAllowing(a, b) {
  throw Error(void 0 === b ? "unexpected value " + a + "!" : b);
}
module$exports$google3$javascript$typescript$contrib$check.checkExhaustiveAllowing =
  module$contents$google3$javascript$typescript$contrib$check_checkExhaustiveAllowing;
function module$contents$google3$javascript$typescript$contrib$check_assumeExhaustive(a) {}
module$exports$google3$javascript$typescript$contrib$check.assumeExhaustive =
  module$contents$google3$javascript$typescript$contrib$check_assumeExhaustive;
function module$contents$google3$javascript$typescript$contrib$check_assumeExhaustiveAllowing(a) {}
module$exports$google3$javascript$typescript$contrib$check.assumeExhaustiveAllowing =
  module$contents$google3$javascript$typescript$contrib$check_assumeExhaustiveAllowing;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_module || {
      id: "third_party/javascript/safevalues/dom/elements/iframe.closure.js"
    },
  module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_html_impl_2 =
    module$exports$google3$third_party$javascript$safevalues$internals$html_impl;
function module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrc(a, b) {
  a.src = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(b).toString();
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.setSrc =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrc;
function module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrcdoc(a, b) {
  a.srcdoc = (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml)(b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.setSrcdoc =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrcdoc;
module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent = {
  HTML_FORMATTED_CONTENT: 0,
  EMBEDDED_INTERNAL_CONTENT: 1,
  EMBEDDED_TRUSTED_EXTERNAL_CONTENT: 2
};
module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent[
  module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.HTML_FORMATTED_CONTENT
] = "HTML_FORMATTED_CONTENT";
module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent[
  module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.EMBEDDED_INTERNAL_CONTENT
] = "EMBEDDED_INTERNAL_CONTENT";
module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent[
  module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.EMBEDDED_TRUSTED_EXTERNAL_CONTENT
] = "EMBEDDED_TRUSTED_EXTERNAL_CONTENT";
var module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective = {
  ALLOW_SAME_ORIGIN: "allow-same-origin",
  ALLOW_SCRIPTS: "allow-scripts",
  ALLOW_FORMS: "allow-forms",
  ALLOW_POPUPS: "allow-popups",
  ALLOW_POPUPS_TO_ESCAPE_SANDBOX: "allow-popups-to-escape-sandbox",
  ALLOW_STORAGE_ACCESS_BY_USER_ACTIVATION: "allow-storage-access-by-user-activation"
};
function module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSandboxDirectives(a, b) {
  for (; 0 < a.sandbox.length; ) a.sandbox.remove(a.sandbox.item(0));
  for (var c = 0; c < b.length; c++) (a.sandbox.supports && !a.sandbox.supports(b[c])) || a.sandbox.add(b[c]);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.TypeCannotBeUsedWithIntentError = function (a, b) {
  var c = Error.call(
    this,
    a + " cannot be used with intent " + module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent[b]
  );
  this.message = c.message;
  "stack" in c && (this.stack = c.stack);
  this.type = a;
  this.intent = b;
  this.name = "TypeCannotBeUsedWithIntentError";
};
$jscomp.inherits(module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.TypeCannotBeUsedWithIntentError, Error);
function module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrcWithIntent(a, b, c) {
  a.removeAttribute("srcdoc");
  switch (b) {
    case module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.HTML_FORMATTED_CONTENT:
      if (c instanceof goog.html.TrustedResourceUrl)
        throw new module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.TypeCannotBeUsedWithIntentError(
          "TrustedResourceUrl",
          module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.HTML_FORMATTED_CONTENT
        );
      b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(c);
      void 0 !== b && (a.src = b);
      module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSandboxDirectives(a, []);
      break;
    case module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.EMBEDDED_INTERNAL_CONTENT:
      if (!(c instanceof goog.html.TrustedResourceUrl))
        throw new module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.TypeCannotBeUsedWithIntentError(
          typeof c,
          module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.EMBEDDED_INTERNAL_CONTENT
        );
      module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrc(a, c);
      module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSandboxDirectives(a, [
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_SAME_ORIGIN,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_SCRIPTS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_FORMS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_POPUPS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_POPUPS_TO_ESCAPE_SANDBOX,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_STORAGE_ACCESS_BY_USER_ACTIVATION
      ]);
      break;
    case module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.EMBEDDED_TRUSTED_EXTERNAL_CONTENT:
      if (c instanceof goog.html.TrustedResourceUrl)
        throw new module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.TypeCannotBeUsedWithIntentError(
          "TrustedResourceUrl",
          module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.EMBEDDED_TRUSTED_EXTERNAL_CONTENT
        );
      b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(c);
      void 0 !== b && (a.src = b);
      module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSandboxDirectives(a, [
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_SAME_ORIGIN,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_SCRIPTS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_FORMS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_POPUPS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_POPUPS_TO_ESCAPE_SANDBOX,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_STORAGE_ACCESS_BY_USER_ACTIVATION
      ]);
      break;
    default:
      module$contents$google3$javascript$typescript$contrib$check_checkExhaustive(b);
  }
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.setSrcWithIntent =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrcWithIntent;
function module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrcdocWithIntent(a, b, c) {
  a.removeAttribute("src");
  switch (b) {
    case module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.HTML_FORMATTED_CONTENT:
      if (c instanceof module$exports$google3$third_party$javascript$safevalues$internals$html_impl.SafeHtml)
        throw new module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.TypeCannotBeUsedWithIntentError(
          "SafeHtml",
          module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.HTML_FORMATTED_CONTENT
        );
      a.csp = "default-src 'none'";
      module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrcdoc(
        a,
        (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(c)
      );
      module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSandboxDirectives(a, []);
      break;
    case module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.EMBEDDED_INTERNAL_CONTENT:
      if (!(c instanceof module$exports$google3$third_party$javascript$safevalues$internals$html_impl.SafeHtml))
        throw new module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.TypeCannotBeUsedWithIntentError(
          "string",
          module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.EMBEDDED_INTERNAL_CONTENT
        );
      module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrcdoc(a, c);
      module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSandboxDirectives(a, [
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_SAME_ORIGIN,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_SCRIPTS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_FORMS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_POPUPS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_POPUPS_TO_ESCAPE_SANDBOX,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_STORAGE_ACCESS_BY_USER_ACTIVATION
      ]);
      break;
    case module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.EMBEDDED_TRUSTED_EXTERNAL_CONTENT:
      if (c instanceof module$exports$google3$third_party$javascript$safevalues$internals$html_impl.SafeHtml)
        throw new module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.TypeCannotBeUsedWithIntentError(
          "SafeHtml",
          module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.Intent.EMBEDDED_INTERNAL_CONTENT
        );
      module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrcdoc(
        a,
        (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(c)
      );
      module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSandboxDirectives(a, [
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_SCRIPTS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_FORMS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_POPUPS,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_POPUPS_TO_ESCAPE_SANDBOX,
        module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_SandboxDirective.ALLOW_STORAGE_ACCESS_BY_USER_ACTIVATION
      ]);
      break;
    default:
      module$contents$google3$javascript$typescript$contrib$check_checkExhaustive(b);
  }
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe.setSrcdocWithIntent =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$iframe_setSrcdocWithIntent;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$input = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$input_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$input_module || {
      id: "third_party/javascript/safevalues/dom/elements/input.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$input_setFormaction(a, b) {
  b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(b);
  void 0 !== b && (a.formAction = b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$input.setFormaction =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$input_setFormaction;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$link = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$link_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$link_module || {
      id: "third_party/javascript/safevalues/dom/elements/link.closure.js"
    },
  module$contents$google3$third_party$javascript$safevalues$dom$elements$link_SAFE_URL_REL_VALUES =
    "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
      " "
    );
function module$contents$google3$third_party$javascript$safevalues$dom$elements$link_setHrefAndRel(a, b, c) {
  if (b instanceof goog.html.TrustedResourceUrl)
    a.href = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(b).toString();
  else {
    if (-1 === module$contents$google3$third_party$javascript$safevalues$dom$elements$link_SAFE_URL_REL_VALUES.indexOf(c))
      throw Error('TrustedResourceUrl href attribute required with rel="' + c + '"');
    b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(b);
    if (void 0 === b) return;
    a.href = b;
  }
  a.rel = c;
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$link.setHrefAndRel =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$link_setHrefAndRel;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$object = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$object_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$object_module || {
      id: "third_party/javascript/safevalues/dom/elements/object.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$object_setData(a, b) {
  a.data = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$object.setData =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$object_setData;
var module$exports$google3$third_party$javascript$safevalues$internals$script_impl = {},
  module$contents$google3$third_party$javascript$safevalues$internals$script_impl_module =
    module$contents$google3$third_party$javascript$safevalues$internals$script_impl_module || {
      id: "third_party/javascript/safevalues/internals/script_impl.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$internals$script_impl.SafeScript = module$contents$goog$html$SafeScript_SafeScript;
function module$contents$google3$third_party$javascript$safevalues$internals$script_impl_createScript(a) {
  return (0, module$exports$goog$html$internals.createSafeScript)(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$script_impl.createScript =
  module$contents$google3$third_party$javascript$safevalues$internals$script_impl_createScript;
module$exports$google3$third_party$javascript$safevalues$internals$script_impl.EMPTY_SCRIPT =
  module$contents$goog$html$SafeScript_SafeScript.EMPTY;
function module$contents$google3$third_party$javascript$safevalues$internals$script_impl_isScript(a) {
  return a instanceof module$contents$goog$html$SafeScript_SafeScript;
}
module$exports$google3$third_party$javascript$safevalues$internals$script_impl.isScript =
  module$contents$google3$third_party$javascript$safevalues$internals$script_impl_isScript;
function module$contents$google3$third_party$javascript$safevalues$internals$script_impl_unwrapScript(a) {
  return module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$script_impl.unwrapScript =
  module$contents$google3$third_party$javascript$safevalues$internals$script_impl_unwrapScript;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$script = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$script_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$script_module || {
      id: "third_party/javascript/safevalues/dom/elements/script.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$script_getScriptNonceFromWindow(a) {
  var b, c;
  return (a = null == (c = (b = a.document).querySelector) ? void 0 : c.call(b, "script[nonce]"))
    ? a.nonce || a.getAttribute("nonce") || ""
    : "";
}
function module$contents$google3$third_party$javascript$safevalues$dom$elements$script_setNonceForScriptElement(a) {
  var b = module$contents$google3$third_party$javascript$safevalues$dom$elements$script_getScriptNonceFromWindow(
    (a.ownerDocument && a.ownerDocument.defaultView) || window
  );
  b && a.setAttribute("nonce", b);
}
function module$contents$google3$third_party$javascript$safevalues$dom$elements$script_setTextContent(a, b) {
  a.textContent = module$contents$google3$third_party$javascript$safevalues$internals$script_impl_unwrapScript(b);
  module$contents$google3$third_party$javascript$safevalues$dom$elements$script_setNonceForScriptElement(a);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$script.setTextContent =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$script_setTextContent;
function module$contents$google3$third_party$javascript$safevalues$dom$elements$script_setSrc(a, b) {
  a.src = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(b);
  module$contents$google3$third_party$javascript$safevalues$dom$elements$script_setNonceForScriptElement(a);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$script.setSrc =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$script_setSrc;
var module$exports$google3$third_party$javascript$safevalues$internals$style_sheet_impl = {},
  module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_module =
    module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_module || {
      id: "third_party/javascript/safevalues/internals/style_sheet_impl.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$internals$style_sheet_impl.SafeStyleSheet =
  module$contents$goog$html$SafeStyleSheet_SafeStyleSheet;
function module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_createStyleSheet(a) {
  return (0, module$exports$goog$html$internals.createSafeStyleSheet)(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$style_sheet_impl.createStyleSheet =
  module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_createStyleSheet;
function module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_isStyleSheet(a) {
  return a instanceof module$contents$goog$html$SafeStyleSheet_SafeStyleSheet;
}
module$exports$google3$third_party$javascript$safevalues$internals$style_sheet_impl.isStyleSheet =
  module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_isStyleSheet;
function module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_unwrapStyleSheet(a) {
  return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap(a);
}
module$exports$google3$third_party$javascript$safevalues$internals$style_sheet_impl.unwrapStyleSheet =
  module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_unwrapStyleSheet;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$style = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$style_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$style_module || {
      id: "third_party/javascript/safevalues/dom/elements/style.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$style_setTextContent(a, b) {
  a.textContent = module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_unwrapStyleSheet(b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$style.setTextContent =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$style_setTextContent;
var module$exports$google3$third_party$javascript$safevalues$dom$elements$svg_use = {},
  module$contents$google3$third_party$javascript$safevalues$dom$elements$svg_use_module =
    module$contents$google3$third_party$javascript$safevalues$dom$elements$svg_use_module || {
      id: "third_party/javascript/safevalues/dom/elements/svg_use.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$elements$svg_use_setHref(a, b) {
  var c = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_extractScheme(b);
  "javascript:" === c || "data:" === c
    ? goog.DEBUG &&
      ((a = "A URL with content '" + b + "' was sanitized away."), (0, goog.log.warning)((0, goog.log.getLogger)("safevalues"), a))
    : a.setAttribute("href", b);
}
module$exports$google3$third_party$javascript$safevalues$dom$elements$svg_use.setHref =
  module$contents$google3$third_party$javascript$safevalues$dom$elements$svg_use_setHref;
var module$exports$google3$third_party$javascript$safevalues$dom$globals$document = {},
  module$contents$google3$third_party$javascript$safevalues$dom$globals$document_module =
    module$contents$google3$third_party$javascript$safevalues$dom$globals$document_module || {
      id: "third_party/javascript/safevalues/dom/globals/document.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$globals$document_write(a, b) {
  a.write((0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml)(b));
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$document.write =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$document_write;
var module$contents$google3$third_party$javascript$safevalues$dom$globals$document_ValueType;
function module$contents$google3$third_party$javascript$safevalues$dom$globals$document_execCommand(a, b, c) {
  b = String(b);
  var d = c;
  "inserthtml" === b.toLowerCase() && (d = (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml)(c));
  return a.execCommand(b, !1, d);
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$document.execCommand =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$document_execCommand;
function module$contents$google3$third_party$javascript$safevalues$dom$globals$document_execCommandInsertHtml(a, b) {
  return a.execCommand("insertHTML", !1, (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml)(b));
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$document.execCommandInsertHtml =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$document_execCommandInsertHtml;
var module$exports$google3$third_party$javascript$safevalues$dom$globals$dom_parser = {},
  module$contents$google3$third_party$javascript$safevalues$dom$globals$dom_parser_module =
    module$contents$google3$third_party$javascript$safevalues$dom$globals$dom_parser_module || {
      id: "third_party/javascript/safevalues/dom/globals/dom_parser.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$globals$dom_parser_parseHtml(a, b) {
  return module$contents$google3$third_party$javascript$safevalues$dom$globals$dom_parser_parseFromString(a, b, "text/html");
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$dom_parser.parseHtml =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$dom_parser_parseHtml;
function module$contents$google3$third_party$javascript$safevalues$dom$globals$dom_parser_parseXml(a, b) {
  a = module$contents$google3$third_party$javascript$safevalues$dom$globals$dom_parser_parseFromString(
    a,
    (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(b),
    "text/xml"
  );
  b = document.createNodeIterator(a, NodeFilter.SHOW_ALL, null, !1);
  for (var c; (c = b.nextNode()); )
    if (c instanceof HTMLElement || c instanceof SVGElement)
      throw ((a = "unsafe XML"), goog.DEBUG && (a = "attempted to parse an XML document that embeds HTML or SVG content"), Error(a));
  return a;
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$dom_parser.parseXml =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$dom_parser_parseXml;
function module$contents$google3$third_party$javascript$safevalues$dom$globals$dom_parser_parseFromString(a, b, c) {
  return a.parseFromString((0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml)(b), c);
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$dom_parser.parseFromString =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$dom_parser_parseFromString;
var module$exports$google3$third_party$javascript$safevalues$dom$globals$global = {},
  module$contents$google3$third_party$javascript$safevalues$dom$globals$global_module =
    module$contents$google3$third_party$javascript$safevalues$dom$globals$global_module || {
      id: "third_party/javascript/safevalues/dom/globals/global.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$globals$global_globalEval(a, b) {
  b = module$contents$google3$third_party$javascript$safevalues$internals$script_impl_unwrapScript(b);
  var c = a.eval(b);
  c === b && (c = a.eval(b.toString()));
  return c;
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$global.globalEval =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$global_globalEval;
var module$exports$google3$third_party$javascript$safevalues$dom$globals$location = {},
  module$contents$google3$third_party$javascript$safevalues$dom$globals$location_module =
    module$contents$google3$third_party$javascript$safevalues$dom$globals$location_module || {
      id: "third_party/javascript/safevalues/dom/globals/location.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$globals$location_setHref(a, b) {
  b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(b);
  void 0 !== b && (a.href = b);
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$location.setHref =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$location_setHref;
function module$contents$google3$third_party$javascript$safevalues$dom$globals$location_replace(a, b) {
  b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(b);
  void 0 !== b && a.replace(b);
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$location.replace =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$location_replace;
function module$contents$google3$third_party$javascript$safevalues$dom$globals$location_assign(a, b) {
  b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(b);
  void 0 !== b && a.assign(b);
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$location.assign =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$location_assign;
var module$exports$google3$third_party$javascript$safevalues$dom$globals$range = {},
  module$contents$google3$third_party$javascript$safevalues$dom$globals$range_module =
    module$contents$google3$third_party$javascript$safevalues$dom$globals$range_module || {
      id: "third_party/javascript/safevalues/dom/globals/range.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$globals$range_createContextualFragment(a, b) {
  return a.createContextualFragment((0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml)(b));
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$range.createContextualFragment =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$range_createContextualFragment;
var module$exports$google3$third_party$javascript$safevalues$dom$globals$service_worker_container = {},
  module$contents$google3$third_party$javascript$safevalues$dom$globals$service_worker_container_module =
    module$contents$google3$third_party$javascript$safevalues$dom$globals$service_worker_container_module || {
      id: "third_party/javascript/safevalues/dom/globals/service_worker_container.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$globals$service_worker_container_register(a, b, c) {
  return a.register(module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(b), c);
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$service_worker_container.register =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$service_worker_container_register;
var module$exports$google3$third_party$javascript$safevalues$internals$string_literal = {},
  module$contents$google3$third_party$javascript$safevalues$internals$string_literal_module =
    module$contents$google3$third_party$javascript$safevalues$internals$string_literal_module || {
      id: "third_party/javascript/safevalues/internals/string_literal.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$internals$string_literal_assertIsTemplateObject(a, b, c) {
  if (!Array.isArray(a) || !Array.isArray(a.raw) || (!b && 1 !== a.length)) throw new TypeError(c);
}
module$exports$google3$third_party$javascript$safevalues$internals$string_literal.assertIsTemplateObject =
  module$contents$google3$third_party$javascript$safevalues$internals$string_literal_assertIsTemplateObject;
var module$exports$google3$third_party$javascript$safevalues$builders$url_builders = {},
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_module =
    module$contents$google3$third_party$javascript$safevalues$builders$url_builders_module || {
      id: "third_party/javascript/safevalues/builders/url_builders.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isSafeMimeType(a) {
  a = a.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
  return (
    2 === (null == a ? void 0 : a.length) &&
    (module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isSafeImageMimeType(a[1]) ||
      module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isSafeVideoMimeType(a[1]) ||
      module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isSafeAudioMimeType(a[1]))
  );
}
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isSafeImageMimeType(a) {
  return /^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif)$/i.test(a);
}
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isSafeVideoMimeType(a) {
  return /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(a);
}
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isSafeAudioMimeType(a) {
  return /^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(a);
}
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_Scheme() {}
module$exports$google3$third_party$javascript$safevalues$builders$url_builders.Scheme =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_Scheme;
var module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl = function (a) {
  this.isValid = a;
};
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isValidScheme(a) {
  return a instanceof module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl;
}
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme(a) {
  return new module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl(function (b) {
    return b.substr(0, a.length + 1).toLowerCase() === a + ":";
  });
}
var module$contents$google3$third_party$javascript$safevalues$builders$url_builders_RELATIVE_SCHEME =
    new module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_CALLTO_SCHEME =
    new module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl(function (a) {
      return /^callto:\+?\d*$/i.test(a);
    }),
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SSH_SCHEME =
    new module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl(function (a) {
      return 0 === a.indexOf("ssh://");
    }),
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_EXTENSION_SCHEME =
    new module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SchemeImpl(function (a) {
      return 0 === a.indexOf("chrome-extension://") || 0 === a.indexOf("moz-extension://") || 0 === a.indexOf("ms-browser-extension://");
    });
module$exports$google3$third_party$javascript$safevalues$builders$url_builders.SanitizableUrlScheme = {
  TEL: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("tel"),
  CALLTO: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_CALLTO_SCHEME,
  SSH: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_SSH_SCHEME,
  RTSP: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("rtsp"),
  DATA: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("data"),
  HTTP: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("http"),
  HTTPS: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("https"),
  EXTENSION: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_EXTENSION_SCHEME,
  FTP: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("ftp"),
  RELATIVE: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_RELATIVE_SCHEME,
  MAILTO: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("mailto"),
  INTENT: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("intent"),
  MARKET: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("market"),
  ITMS: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("itms"),
  ITMS_APPSS: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("itms-appss"),
  ITMS_SERVICES: module$contents$google3$third_party$javascript$safevalues$builders$url_builders_simpleScheme("itms-services")
};
var module$contents$google3$third_party$javascript$safevalues$builders$url_builders_DEFAULT_SCHEMES = [
  module$exports$google3$third_party$javascript$safevalues$builders$url_builders.SanitizableUrlScheme.DATA,
  module$exports$google3$third_party$javascript$safevalues$builders$url_builders.SanitizableUrlScheme.HTTP,
  module$exports$google3$third_party$javascript$safevalues$builders$url_builders.SanitizableUrlScheme.HTTPS,
  module$exports$google3$third_party$javascript$safevalues$builders$url_builders.SanitizableUrlScheme.MAILTO,
  module$exports$google3$third_party$javascript$safevalues$builders$url_builders.SanitizableUrlScheme.FTP,
  module$exports$google3$third_party$javascript$safevalues$builders$url_builders.SanitizableUrlScheme.RELATIVE
];
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_trySanitizeUrl(a, b) {
  b = void 0 === b ? module$contents$google3$third_party$javascript$safevalues$builders$url_builders_DEFAULT_SCHEMES : b;
  for (var c = 0; c < b.length; ++c) {
    var d = b[c];
    if (module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isValidScheme(d) && d.isValid(a))
      return module$contents$google3$third_party$javascript$safevalues$internals$url_impl_createUrl(a);
  }
}
module$exports$google3$third_party$javascript$safevalues$builders$url_builders.trySanitizeUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_trySanitizeUrl;
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_sanitizeUrl(a, b) {
  b = void 0 === b ? module$contents$google3$third_party$javascript$safevalues$builders$url_builders_DEFAULT_SCHEMES : b;
  return (
    module$contents$google3$third_party$javascript$safevalues$builders$url_builders_trySanitizeUrl(a, b) || goog.html.SafeUrl.INNOCUOUS_URL
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$url_builders.sanitizeUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_sanitizeUrl;
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_objectUrlFromSafeSource(a) {
  if ("undefined" !== typeof MediaSource && a instanceof MediaSource)
    return module$contents$google3$third_party$javascript$safevalues$internals$url_impl_createUrl(URL.createObjectURL(a));
  if (!module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isSafeMimeType(a.type)) {
    var b = "";
    goog.DEBUG && (b = "unsafe blob MIME type: " + a.type);
    throw Error(b);
  }
  return module$contents$google3$third_party$javascript$safevalues$internals$url_impl_createUrl(URL.createObjectURL(a));
}
module$exports$google3$third_party$javascript$safevalues$builders$url_builders.objectUrlFromSafeSource =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_objectUrlFromSafeSource;
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_fromMediaSource(a) {
  if ("undefined" !== typeof MediaSource && a instanceof MediaSource)
    return module$contents$google3$third_party$javascript$safevalues$internals$url_impl_createUrl(URL.createObjectURL(a));
  var b = "";
  goog.DEBUG && (b = "fromMediaSource only accepts MediaSource instances, but was called with " + a + ".");
  throw Error(b);
}
module$exports$google3$third_party$javascript$safevalues$builders$url_builders.fromMediaSource =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_fromMediaSource;
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_fromTrustedResourceUrl(a) {
  return module$contents$google3$third_party$javascript$safevalues$internals$url_impl_createUrl(
    module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(a).toString()
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$url_builders.fromTrustedResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_fromTrustedResourceUrl;
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isSafeUrlPrefix(a, b) {
  var c = a.search(/[:/?#]/);
  if (0 > c) return b;
  if (":" !== a.charAt(c)) return !0;
  a = a.substring(0, c).toLowerCase();
  return /^[a-z][a-z\d+.-]*$/.test(a) && "javascript" !== a;
}
function module$contents$google3$third_party$javascript$safevalues$builders$url_builders_safeUrl(a) {
  var b = $jscomp.getRestArguments.apply(1, arguments);
  goog.DEBUG &&
    module$contents$google3$third_party$javascript$safevalues$internals$string_literal_assertIsTemplateObject(
      a,
      !0,
      "safeUrl is a template literal tag function and can only be called as such (e.g. safeUrl`./somepath.html`)"
    );
  var c = a[0];
  if (goog.DEBUG && !module$contents$google3$third_party$javascript$safevalues$builders$url_builders_isSafeUrlPrefix(c, 0 === b.length))
    throw Error("Trying to interpolate with unsupported prefix: " + c);
  c = [c];
  for (var d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
  return module$contents$google3$third_party$javascript$safevalues$internals$url_impl_createUrl(c.join(""));
}
module$exports$google3$third_party$javascript$safevalues$builders$url_builders.safeUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_safeUrl;
var module$exports$google3$third_party$javascript$safevalues$dom$globals$url = {},
  module$contents$google3$third_party$javascript$safevalues$dom$globals$url_module =
    module$contents$google3$third_party$javascript$safevalues$dom$globals$url_module || {
      id: "third_party/javascript/safevalues/dom/globals/url.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$globals$url_objectUrlFromSafeSource(a) {
  return module$contents$google3$third_party$javascript$safevalues$builders$url_builders_objectUrlFromSafeSource(a).toString();
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$url.objectUrlFromSafeSource =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$url_objectUrlFromSafeSource;
var module$exports$google3$third_party$javascript$safevalues$dom$globals$window = {},
  module$contents$google3$third_party$javascript$safevalues$dom$globals$window_module =
    module$contents$google3$third_party$javascript$safevalues$dom$globals$window_module || {
      id: "third_party/javascript/safevalues/dom/globals/window.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$globals$window_open(a, b, c, d) {
  b = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_unwrapUrlOrSanitize(b);
  return void 0 !== b ? a.open(b, c, d) : null;
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$window.open =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$window_open;
var module$exports$google3$third_party$javascript$safevalues$dom$globals$worker = {},
  module$contents$google3$third_party$javascript$safevalues$dom$globals$worker_module =
    module$contents$google3$third_party$javascript$safevalues$dom$globals$worker_module || {
      id: "third_party/javascript/safevalues/dom/globals/worker.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$dom$globals$worker_ScopeWithImportScripts() {}
module$exports$google3$third_party$javascript$safevalues$dom$globals$worker.ScopeWithImportScripts =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$worker_ScopeWithImportScripts;
function module$contents$google3$third_party$javascript$safevalues$dom$globals$worker_create(a, b) {
  return new Worker(module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(a), b);
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$worker.create =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$worker_create;
function module$contents$google3$third_party$javascript$safevalues$dom$globals$worker_createShared(a, b) {
  return new SharedWorker(module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(a), b);
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$worker.createShared =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$worker_createShared;
function module$contents$google3$third_party$javascript$safevalues$dom$globals$worker_importScripts(a) {
  var b = $jscomp.getRestArguments.apply(1, arguments);
  a.importScripts.apply(
    a,
    $jscomp.arrayFromIterable(
      b.map(function (c) {
        return module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(c);
      })
    )
  );
}
module$exports$google3$third_party$javascript$safevalues$dom$globals$worker.importScripts =
  module$contents$google3$third_party$javascript$safevalues$dom$globals$worker_importScripts;
var module$exports$google3$third_party$javascript$safevalues$dom$index = {},
  module$contents$google3$third_party$javascript$safevalues$dom$index_module =
    module$contents$google3$third_party$javascript$safevalues$dom$index_module || {
      id: "third_party/javascript/safevalues/dom/index.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$dom$index.safeAnchorEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$anchor;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeAreaEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$area;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeBaseEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$base;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeButtonEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$button;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeElement =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$element;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeEmbedEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$embed;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeFormEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$form;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeIframeEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeInputEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$input;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeLinkEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$link;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeObjectEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$object;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeScriptEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$script;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeStyleEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$style;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeSvgUseEl =
  module$exports$google3$third_party$javascript$safevalues$dom$elements$svg_use;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeDocument =
  module$exports$google3$third_party$javascript$safevalues$dom$globals$document;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeDomParser =
  module$exports$google3$third_party$javascript$safevalues$dom$globals$dom_parser;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeGlobal =
  module$exports$google3$third_party$javascript$safevalues$dom$globals$global;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeLocation =
  module$exports$google3$third_party$javascript$safevalues$dom$globals$location;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeRange =
  module$exports$google3$third_party$javascript$safevalues$dom$globals$range;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeServiceWorkerContainer =
  module$exports$google3$third_party$javascript$safevalues$dom$globals$service_worker_container;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeUrl =
  module$exports$google3$third_party$javascript$safevalues$dom$globals$url;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeWindow =
  module$exports$google3$third_party$javascript$safevalues$dom$globals$window;
module$exports$google3$third_party$javascript$safevalues$dom$index.safeWorker =
  module$exports$google3$third_party$javascript$safevalues$dom$globals$worker;
var safevalues = { dom: {} };
safevalues.dom.safeAnchorEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$anchor;
safevalues.dom.safeAreaEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$area;
safevalues.dom.safeBaseEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$base;
safevalues.dom.safeButtonEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$button;
safevalues.dom.safeElement = module$exports$google3$third_party$javascript$safevalues$dom$elements$element;
safevalues.dom.safeEmbedEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$embed;
safevalues.dom.safeFormEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$form;
safevalues.dom.safeIframeEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$iframe;
safevalues.dom.safeInputEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$input;
safevalues.dom.safeLinkEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$link;
safevalues.dom.safeObjectEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$object;
safevalues.dom.safeScriptEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$script;
safevalues.dom.safeStyleEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$style;
safevalues.dom.safeSvgUseEl = module$exports$google3$third_party$javascript$safevalues$dom$elements$svg_use;
safevalues.dom.safeDocument = module$exports$google3$third_party$javascript$safevalues$dom$globals$document;
safevalues.dom.safeDomParser = module$exports$google3$third_party$javascript$safevalues$dom$globals$dom_parser;
safevalues.dom.safeGlobal = module$exports$google3$third_party$javascript$safevalues$dom$globals$global;
safevalues.dom.safeLocation = module$exports$google3$third_party$javascript$safevalues$dom$globals$location;
safevalues.dom.safeRange = module$exports$google3$third_party$javascript$safevalues$dom$globals$range;
safevalues.dom.safeServiceWorkerContainer = module$exports$google3$third_party$javascript$safevalues$dom$globals$service_worker_container;
safevalues.dom.safeUrl = module$exports$google3$third_party$javascript$safevalues$dom$globals$url;
safevalues.dom.safeWindow = module$exports$google3$third_party$javascript$safevalues$dom$globals$window;
safevalues.dom.safeWorker = module$exports$google3$third_party$javascript$safevalues$dom$globals$worker;
var module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$inert_fragment = {},
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$inert_fragment_module =
    module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$inert_fragment_module || {
      id: "third_party/javascript/safevalues/builders/html_sanitizer/inert_fragment.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$inert_fragment_createInertFragment(a) {
  var b = document.createElement("template");
  if (2018 > goog.FEATURESET_YEAR && !("content" in b))
    return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$inert_fragment_createFragmentUsingDOMParser(a);
  a = (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(a);
  (0, module$exports$google3$third_party$javascript$safevalues$dom$elements$element.setInnerHtml)(b, a);
  return b.content;
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$inert_fragment.createInertFragment =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$inert_fragment_createInertFragment;
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$inert_fragment_createFragmentUsingDOMParser(a) {
  a = (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)("<html><body>" + a);
  a = (0, module$exports$google3$third_party$javascript$safevalues$dom$globals$dom_parser.parseHtml)(new DOMParser(), a);
  for (var b = a.createDocumentFragment(); 0 < a.body.childNodes.length; ) b.appendChild(a.body.firstChild);
  return b;
}
var module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber = {},
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_module =
    module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_module || {
      id: "third_party/javascript/safevalues/builders/html_sanitizer/no_clobber.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_getNodeName(a) {
  a = a.nodeName;
  return "string" === typeof a ? a : "FORM";
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber.getNodeName =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_getNodeName;
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_isText(a) {
  return a.nodeType === Node.TEXT_NODE;
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber.isText =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_isText;
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_isElement(a) {
  a = a.nodeType;
  return a === Node.ELEMENT_NODE || "number" !== typeof a;
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber.isElement =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_isElement;
var module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table = {},
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table_module =
    module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table_module || {
      id: "third_party/javascript/safevalues/builders/html_sanitizer/sanitizer_table/sanitizer_table.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable = function (
  a,
  b,
  c,
  d,
  e
) {
  this.allowedElements = a;
  this.elementPolicies = b;
  this.allowedGlobalAttributes = c;
  this.globalAttributePolicies = d;
  this.globallyAllowedAttributePrefixes = e;
};
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable.prototype.isAllowedElement =
  function (a) {
    return "form" !== a.toLowerCase() && (this.allowedElements.has(a) || this.elementPolicies.has(a));
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable.prototype.getAttributePolicy =
  function (a, b) {
    b = this.elementPolicies.get(b);
    return (null == b ? 0 : b.has(a))
      ? b.get(a)
      : this.allowedGlobalAttributes.has(a)
      ? {
          policyAction:
            module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
              .AttributePolicyAction.KEEP
        }
      : (b = this.globalAttributePolicies.get(a))
      ? b
      : this.globallyAllowedAttributePrefixes &&
        [].concat($jscomp.arrayFromIterable(this.globallyAllowedAttributePrefixes)).some(function (c) {
          return 0 === a.indexOf(c);
        })
      ? {
          policyAction:
            module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
              .AttributePolicyAction.KEEP
        }
      : {
          policyAction:
            module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
              .AttributePolicyAction.DROP
        };
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction = {
  DROP: 0,
  KEEP: 1,
  KEEP_AND_SANITIZE_URL: 2,
  KEEP_AND_NORMALIZE: 3,
  KEEP_AND_SANITIZE_STYLE: 4
};
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction[
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction.DROP
] = "DROP";
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction[
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction.KEEP
] = "KEEP";
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction[
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction.KEEP_AND_SANITIZE_URL
] = "KEEP_AND_SANITIZE_URL";
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction[
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction.KEEP_AND_NORMALIZE
] = "KEEP_AND_NORMALIZE";
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction[
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicyAction.KEEP_AND_SANITIZE_STYLE
] = "KEEP_AND_SANITIZE_STYLE";
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table_AttributePolicy() {}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.AttributePolicy =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table_AttributePolicy;
var module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table = {},
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_module =
    module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_module || {
      id: "third_party/javascript/safevalues/builders/html_sanitizer/sanitizer_table/default_sanitizer_table.closure.js"
    },
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ALLOWED_ELEMENTS =
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(
      " "
    ),
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ELEMENT_POLICIES =
    [
      [
        "A",
        new Map([
          [
            "href",
            {
              policyAction:
                module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
                  .AttributePolicyAction.KEEP_AND_SANITIZE_URL
            }
          ]
        ])
      ],
      [
        "AREA",
        new Map([
          [
            "href",
            {
              policyAction:
                module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
                  .AttributePolicyAction.KEEP_AND_SANITIZE_URL
            }
          ]
        ])
      ],
      [
        "LINK",
        new Map([
          [
            "href",
            {
              policyAction:
                module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
                  .AttributePolicyAction.KEEP_AND_SANITIZE_URL,
              conditions: new Map([
                [
                  "rel",
                  new Set(
                    "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
                      " "
                    )
                  )
                ]
              ])
            }
          ]
        ])
      ],
      [
        "SOURCE",
        new Map([
          [
            "src",
            {
              policyAction:
                module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
                  .AttributePolicyAction.KEEP_AND_SANITIZE_URL
            }
          ]
        ])
      ],
      [
        "IMG",
        new Map([
          [
            "src",
            {
              policyAction:
                module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
                  .AttributePolicyAction.KEEP_AND_SANITIZE_URL
            }
          ]
        ])
      ],
      [
        "VIDEO",
        new Map([
          [
            "src",
            {
              policyAction:
                module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
                  .AttributePolicyAction.KEEP_AND_SANITIZE_URL
            }
          ]
        ])
      ],
      [
        "AUDIO",
        new Map([
          [
            "src",
            {
              policyAction:
                module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
                  .AttributePolicyAction.KEEP_AND_SANITIZE_URL
            }
          ]
        ])
      ]
    ],
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ALLOWED_GLOBAL_ATTRIBUTES =
    "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(
      " "
    ),
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_GLOBAL_ATTRIBUTE_POLICIES =
    [
      [
        "dir",
        {
          policyAction:
            module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
              .AttributePolicyAction.KEEP_AND_NORMALIZE,
          conditions: module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
            return new Map([["dir", new Set(["auto", "ltr", "rtl"])]]);
          })
        }
      ],
      [
        "async",
        {
          policyAction:
            module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
              .AttributePolicyAction.KEEP_AND_NORMALIZE,
          conditions: module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
            return new Map([["async", new Set(["async"])]]);
          })
        }
      ],
      [
        "cite",
        {
          policyAction:
            module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
              .AttributePolicyAction.KEEP_AND_SANITIZE_URL
        }
      ],
      [
        "loading",
        {
          policyAction:
            module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
              .AttributePolicyAction.KEEP_AND_NORMALIZE,
          conditions: module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
            return new Map([["loading", new Set(["eager", "lazy"])]]);
          })
        }
      ],
      [
        "poster",
        {
          policyAction:
            module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
              .AttributePolicyAction.KEEP_AND_SANITIZE_URL
        }
      ],
      [
        "target",
        {
          policyAction:
            module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
              .AttributePolicyAction.KEEP_AND_NORMALIZE,
          conditions: module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
            return new Map([["target", new Set(["_self", "_blank"])]]);
          })
        }
      ]
    ];
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table.defaultSanitizerTable =
  new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable(
    new Set(
      module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ALLOWED_ELEMENTS
    ),
    new Map(
      module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ELEMENT_POLICIES
    ),
    new Set(
      module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ALLOWED_GLOBAL_ATTRIBUTES
    ),
    new Map(
      module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_GLOBAL_ATTRIBUTE_POLICIES
    )
  );
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table.lenientSanitizerTable =
  new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable(
    new Set(
      module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ALLOWED_ELEMENTS
    ),
    new Map(
      module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ELEMENT_POLICIES
    ),
    new Set(
      module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
        return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ALLOWED_GLOBAL_ATTRIBUTES.concat(
          ["class", "id"]
        );
      })
    ),
    new Map(
      module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
        return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_GLOBAL_ATTRIBUTE_POLICIES.concat(
          [
            [
              "style",
              {
                policyAction:
                  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
                    .AttributePolicyAction.KEEP_AND_SANITIZE_STYLE
              }
            ]
          ]
        );
      })
    )
  );
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table.superLenientSanitizerTable =
  new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable(
    new Set(
      module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
        return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ALLOWED_ELEMENTS.concat(
          "STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" ")
        );
      })
    ),
    new Map(
      module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ELEMENT_POLICIES
    ),
    new Set(
      module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
        return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_ALLOWED_GLOBAL_ATTRIBUTES.concat(
          ["class", "id", "tabindex", "contenteditable", "name"]
        );
      })
    ),
    new Map(
      module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
        return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table_GLOBAL_ATTRIBUTE_POLICIES.concat(
          [
            [
              "style",
              {
                policyAction:
                  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
                    .AttributePolicyAction.KEEP_AND_SANITIZE_STYLE
              }
            ]
          ]
        );
      })
    ),
    new Set(["data-", "aria-"])
  );
var module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer = {},
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_module =
    module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_module || {
      id: "third_party/javascript/safevalues/builders/html_sanitizer/html_sanitizer.closure.js"
    },
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_default_sanitizer_table_2 =
    module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table;
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_HtmlSanitizer() {}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizer =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_HtmlSanitizer;
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl = function (a, b) {
  this.sanitizerTable = a;
  this.changes = [];
  module$contents$google3$third_party$javascript$safevalues$internals$secrets_ensureTokenIsValid(b);
};
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl.prototype.sanitizeAssertUnchanged =
  function (a) {
    this.changes = [];
    var b = this.sanitize(a);
    if (0 !== this.changes.length) {
      var c = "";
      goog.DEBUG &&
        (c =
          'Unexpected change to HTML value as a result of sanitization. Input: "' +
          (a + '", sanitized output: "' + b + '"\nList of changes:') +
          this.changes.join("\n"));
      throw Error(c);
    }
    return b;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl.prototype.sanitize =
  function (a) {
    var b = document.createElement("span");
    b.appendChild(this.sanitizeToFragment(a));
    a = new XMLSerializer().serializeToString(b);
    a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
    return (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(a);
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl.prototype.sanitizeToFragment =
  function (a) {
    var b = this;
    a = module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$inert_fragment_createInertFragment(a);
    a = document.createTreeWalker(
      a,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      function (g) {
        return b.nodeFilter(g);
      },
      !1
    );
    for (var c = a.nextNode(), d = document.createDocumentFragment(), e = d; null !== c; ) {
      var f = void 0;
      if (module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_isText(c))
        f = this.sanitizeTextNode(c);
      else if (module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_isElement(c))
        f = this.sanitizeElementNode(c);
      else throw ((a = ""), goog.DEBUG && (a = "Node is not of type text or element"), Error(a));
      e.appendChild(f);
      if ((c = a.firstChild())) e = f;
      else for (; !(c = a.nextSibling()) && (c = a.parentNode()); ) e = e.parentNode;
    }
    return d;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl.prototype.sanitizeTextNode =
  function (a) {
    return document.createTextNode(a.data);
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl.prototype.sanitizeElementNode =
  function (a) {
    var b = module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_getNodeName(a),
      c = document.createElement(b);
    a = a.attributes;
    for (var d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      e = f.name;
      f = f.value;
      var g = this.sanitizerTable.getAttributePolicy(e, b);
      if (this.satisfiesAllConditions(g.conditions, a))
        switch (g.policyAction) {
          case module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
            .AttributePolicyAction.KEEP:
            c.setAttribute(e, f);
            break;
          case module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
            .AttributePolicyAction.KEEP_AND_SANITIZE_URL:
            g = module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_restrictivelySanitizeUrl(f);
            g !== f &&
              this.recordChange(
                "Url in attribute " + e + ' was modified during sanitization. Original url:"' + f + '" was sanitized to: "' + g + '"'
              );
            c.setAttribute(e, g);
            break;
          case module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
            .AttributePolicyAction.KEEP_AND_NORMALIZE:
            c.setAttribute(e, f.toLowerCase());
            break;
          case module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
            .AttributePolicyAction.KEEP_AND_SANITIZE_STYLE:
            c.setAttribute(e, f);
            break;
          case module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
            .AttributePolicyAction.DROP:
            this.recordChange("Attribute: " + e + " was dropped");
            break;
          default:
            goog.DEBUG &&
              module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_checkExhaustive(
                g.policyAction,
                "Unhandled AttributePolicyAction case"
              );
        }
      else this.recordChange("Not all conditions satisfied for attribute: " + e + ".");
    }
    return c;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl.prototype.nodeFilter =
  function (a) {
    if (module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_isText(a))
      return NodeFilter.FILTER_ACCEPT;
    if (!module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_isElement(a))
      return NodeFilter.FILTER_REJECT;
    var b = module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$no_clobber_getNodeName(a);
    if (null === b) return this.recordChange("Node name was null for node: " + a), NodeFilter.FILTER_REJECT;
    if (this.sanitizerTable.isAllowedElement(b)) return NodeFilter.FILTER_ACCEPT;
    this.recordChange("Element: " + b + " was dropped");
    return NodeFilter.FILTER_REJECT;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl.prototype.recordChange =
  function (a) {
    goog.DEBUG ? this.changes.push(a) : 0 === this.changes.length && this.changes.push("");
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl.prototype.satisfiesAllConditions =
  function (a, b) {
    if (!a) return !0;
    a = $jscomp.makeIterator(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      var d = $jscomp.makeIterator(c.value);
      c = d.next().value;
      d = d.next().value;
      var e = void 0;
      if ((c = null == (e = b.getNamedItem(c)) ? void 0 : e.value) && !d.has(c)) return !1;
    }
    return !0;
  };
var module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_defaultHtmlSanitizer =
  module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
    return new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl(
      module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table.defaultSanitizerTable,
      module$exports$google3$third_party$javascript$safevalues$internals$secrets.secretToken
    );
  });
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_sanitizeHtml(a) {
  return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_defaultHtmlSanitizer.sanitize(a);
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.sanitizeHtml =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_sanitizeHtml;
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_sanitizeHtmlAssertUnchanged(a) {
  return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_defaultHtmlSanitizer.sanitizeAssertUnchanged(
    a
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.sanitizeHtmlAssertUnchanged =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_sanitizeHtmlAssertUnchanged;
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_sanitizeHtmlToFragment(a) {
  return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_defaultHtmlSanitizer.sanitizeToFragment(
    a
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.sanitizeHtmlToFragment =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_sanitizeHtmlToFragment;
var module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_lenientHtmlSanitizer =
  module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
    return new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl(
      module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table.lenientSanitizerTable,
      module$exports$google3$third_party$javascript$safevalues$internals$secrets.secretToken
    );
  });
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_lenientlySanitizeHtml(a) {
  return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_lenientHtmlSanitizer.sanitize(a);
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.lenientlySanitizeHtml =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_lenientlySanitizeHtml;
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_lenientlySanitizeHtmlAssertUnchanged(
  a
) {
  return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_lenientHtmlSanitizer.sanitizeAssertUnchanged(
    a
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.lenientlySanitizeHtmlAssertUnchanged =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_lenientlySanitizeHtmlAssertUnchanged;
var module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_superLenientHtmlSanitizer =
  module$contents$google3$third_party$javascript$safevalues$internals$pure_pure(function () {
    return new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl(
      module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table.superLenientSanitizerTable,
      module$exports$google3$third_party$javascript$safevalues$internals$secrets.secretToken
    );
  });
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_superLenientlySanitizeHtml(a) {
  return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_superLenientHtmlSanitizer.sanitize(
    a
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.superLenientlySanitizeHtml =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_superLenientlySanitizeHtml;
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_superLenientlySanitizeHtmlAssertUnchanged(
  a
) {
  return module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_superLenientHtmlSanitizer.sanitizeAssertUnchanged(
    a
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.superLenientlySanitizeHtmlAssertUnchanged =
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_superLenientlySanitizeHtmlAssertUnchanged;
function module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_checkExhaustive(a, b) {
  throw Error(void 0 === b ? "unexpected value " + a + "!" : b);
}
var module$exports$google3$third_party$javascript$safevalues$builders$html_builders = {},
  module$contents$google3$third_party$javascript$safevalues$builders$html_builders_module =
    module$contents$google3$third_party$javascript$safevalues$builders$html_builders_module || {
      id: "third_party/javascript/safevalues/builders/html_builders.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscape(a, b) {
  b = void 0 === b ? {} : b;
  a = module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscapeToString(a);
  b.preserveSpaces && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
  b.preserveNewlines && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
  b.preserveTabs && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
  return (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(a);
}
module$exports$google3$third_party$javascript$safevalues$builders$html_builders.htmlEscape =
  module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscape;
function module$contents$google3$third_party$javascript$safevalues$builders$html_builders_scriptToHtml(a, b) {
  b = void 0 === b ? {} : b;
  a = module$contents$google3$third_party$javascript$safevalues$internals$script_impl_unwrapScript(a).toString();
  var c = "<script";
  b.id && (c += ' id="' + module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscapeToString(b.id) + '"');
  b.nonce &&
    (c += ' nonce="' + module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscapeToString(b.nonce) + '"');
  b.type &&
    (c += ' type="' + module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscapeToString(b.type) + '"');
  return (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(c + (">" + a + "\x3c/script>"));
}
module$exports$google3$third_party$javascript$safevalues$builders$html_builders.scriptToHtml =
  module$contents$google3$third_party$javascript$safevalues$builders$html_builders_scriptToHtml;
function module$contents$google3$third_party$javascript$safevalues$builders$html_builders_scriptUrlToHtml(a, b) {
  b = void 0 === b ? {} : b;
  a = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(a).toString();
  a = '<script src="' + module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscapeToString(a) + '"';
  b.async && (a += " async");
  b.nonce &&
    (a += ' nonce="' + module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscapeToString(b.nonce) + '"');
  return (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(a + ">\x3c/script>");
}
module$exports$google3$third_party$javascript$safevalues$builders$html_builders.scriptUrlToHtml =
  module$contents$google3$third_party$javascript$safevalues$builders$html_builders_scriptUrlToHtml;
function module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscapeToString(a) {
  return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function module$contents$google3$third_party$javascript$safevalues$builders$html_builders_concatHtmls(a) {
  return (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(
    a.map(module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml).join("")
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$html_builders.concatHtmls =
  module$contents$google3$third_party$javascript$safevalues$builders$html_builders_concatHtmls;
var module$exports$google3$third_party$javascript$safevalues$reporting$reporting = {},
  module$contents$google3$third_party$javascript$safevalues$reporting$reporting_module =
    module$contents$google3$third_party$javascript$safevalues$reporting$reporting_module || {
      id: "third_party/javascript/safevalues/reporting/reporting.closure.js"
    },
  module$contents$google3$third_party$javascript$safevalues$reporting$reporting_REPORTING_ID_PREFIX_TO_SAMPLING_RATE = { 0: 1, 1: 0.01 },
  module$contents$google3$third_party$javascript$safevalues$reporting$reporting_REPORTING_ID_PREFIX_TO_HEARTBEAT_RATE = { 0: 0.1, 1: 0.01 };
function module$contents$google3$third_party$javascript$safevalues$reporting$reporting_ReportingOptions() {}
module$exports$google3$third_party$javascript$safevalues$reporting$reporting.ReportingOptions =
  module$contents$google3$third_party$javascript$safevalues$reporting$reporting_ReportingOptions;
function module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportOnlyHtmlPassthrough(a, b) {
  if (
    !b ||
    !module$contents$google3$third_party$javascript$safevalues$reporting$reporting_isCallSampled(b) ||
    module$contents$google3$third_party$javascript$safevalues$reporting$reporting_isBrowserIncompatibleWithSanitizing()
  )
    return a;
  module$contents$google3$third_party$javascript$safevalues$reporting$reporting_maybeSendHeartbeat(b);
  module$contents$google3$third_party$javascript$safevalues$reporting$reporting_isChangedBySanitizing(a, b) ||
    module$contents$google3$third_party$javascript$safevalues$reporting$reporting_isChangedByEscaping(a, b);
  return a;
}
module$exports$google3$third_party$javascript$safevalues$reporting$reporting.reportOnlyHtmlPassthrough =
  module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportOnlyHtmlPassthrough;
function module$contents$google3$third_party$javascript$safevalues$reporting$reporting_isBrowserIncompatibleWithSanitizing() {
  return !("DocumentFragment" in window);
}
function module$contents$google3$third_party$javascript$safevalues$reporting$reporting_isCallSampled(a) {
  var b, c;
  return (
    Math.random() <
    (null !=
    (c =
      null != (b = a.samplingRate)
        ? b
        : module$contents$google3$third_party$javascript$safevalues$reporting$reporting_REPORTING_ID_PREFIX_TO_SAMPLING_RATE[
            a.reportingId[0]
          ])
      ? c
      : 0)
  );
}
function module$contents$google3$third_party$javascript$safevalues$reporting$reporting_maybeSendHeartbeat(a) {
  var b, c;
  Math.random() <
    (null !=
    (c =
      null != (b = a.heartbeatRate)
        ? b
        : module$contents$google3$third_party$javascript$safevalues$reporting$reporting_REPORTING_ID_PREFIX_TO_HEARTBEAT_RATE[
            a.reportingId[0]
          ])
      ? c
      : 0) &&
    module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportLegacyConversion(
      a,
      module$contents$google3$third_party$javascript$safevalues$reporting$reporting_ReportingType.HEARTBEAT
    );
}
function module$contents$google3$third_party$javascript$safevalues$reporting$reporting_isChangedByEscaping(a, b) {
  return module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscape(a).toString() !== a
    ? (module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportLegacyConversion(
        b,
        module$contents$google3$third_party$javascript$safevalues$reporting$reporting_ReportingType.HTML_CHANGED_BY_ESCAPING
      ),
      !0)
    : !1;
}
function module$contents$google3$third_party$javascript$safevalues$reporting$reporting_isChangedBySanitizing(a, b) {
  try {
    (0,
    module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.superLenientlySanitizeHtmlAssertUnchanged)(
      a
    );
  } catch (c) {
    return (
      (a = /([.]corp[.]google[.]com|[.]proxy[.]googleprod[.]com|[.]googlers[.]com)$/),
      goog.DEBUG && a.test(window.location.hostname) && c instanceof Error
        ? module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportLegacyConversion(
            b,
            module$contents$google3$third_party$javascript$safevalues$reporting$reporting_ReportingType.HTML_CHANGED_BY_SUPER_LENIENT_SANITIZING,
            c.message
          )
        : module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportLegacyConversion(
            b,
            module$contents$google3$third_party$javascript$safevalues$reporting$reporting_ReportingType.HTML_CHANGED_BY_SUPER_LENIENT_SANITIZING
          ),
      !0
    );
  }
  try {
    (0,
    module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.lenientlySanitizeHtmlAssertUnchanged)(
      a
    );
  } catch (c) {
    return (
      module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportLegacyConversion(
        b,
        module$contents$google3$third_party$javascript$safevalues$reporting$reporting_ReportingType.HTML_CHANGED_BY_RELAXED_SANITIZING
      ),
      !0
    );
  }
  try {
    (0, module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.sanitizeHtmlAssertUnchanged)(a);
  } catch (c) {
    return (
      module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportLegacyConversion(
        b,
        module$contents$google3$third_party$javascript$safevalues$reporting$reporting_ReportingType.HTML_CHANGED_BY_SANITIZING
      ),
      !0
    );
  }
  return !1;
}
var module$contents$google3$third_party$javascript$safevalues$reporting$reporting_ReportingType = {
  HEARTBEAT: "HEARTBEAT",
  CRASHED: "CRASHED",
  HTML_CHANGED_BY_ESCAPING: "H_ESCAPE",
  HTML_CHANGED_BY_SANITIZING: "H_SANITIZE",
  HTML_CHANGED_BY_RELAXED_SANITIZING: "H_RSANITIZE",
  HTML_CHANGED_BY_SUPER_LENIENT_SANITIZING: "H_SLSANITIZE"
};
function module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportLegacyConversion(a, b, c) {
  (module$exports$google3$third_party$javascript$safevalues$reporting$reporting.TEST_ONLY.sendReport
    ? module$exports$google3$third_party$javascript$safevalues$reporting$reporting.TEST_ONLY.sendReport
    : "undefined" !== typeof window && window.navigator && void 0 !== window.navigator.sendBeacon
    ? navigator.sendBeacon.bind(navigator)
    : module$contents$google3$third_party$javascript$safevalues$reporting$reporting_sendBeaconPolyfill)(
    "https://csp.withgoogle.com/csp/lcreport/" + a.reportingId,
    JSON.stringify({ host: window.location.hostname, type: b, additionalData: c })
  );
}
function module$contents$google3$third_party$javascript$safevalues$reporting$reporting_sendBeaconPolyfill(a, b) {
  var c = new XMLHttpRequest();
  c.open("POST", a);
  c.setRequestHeader("Content-Type", "application/json");
  c.send(b);
}
function module$contents$google3$third_party$javascript$safevalues$reporting$reporting_TestOnlyOptions() {}
module$exports$google3$third_party$javascript$safevalues$reporting$reporting.TEST_ONLY = {
  reset: function () {
    module$exports$google3$third_party$javascript$safevalues$reporting$reporting.TEST_ONLY.sendReport = void 0;
  }
};
var module$exports$google3$third_party$javascript$safevalues$restricted$legacy = {},
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_module =
    module$contents$google3$third_party$javascript$safevalues$restricted$legacy_module || {
      id: "third_party/javascript/safevalues/restricted/legacy.closure.js"
    },
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_html_sanitizer_2 =
    module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer;
module$exports$google3$third_party$javascript$safevalues$restricted$legacy.lenientlySanitizeHtml =
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.lenientlySanitizeHtml;
function module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeHtml(a, b) {
  a = module$contents$google3$third_party$javascript$safevalues$restricted$legacy_nullUndefinedToString(a);
  if (goog.DEBUG && "string" !== typeof a) throw Error("Expected a string");
  return (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(
    module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportOnlyHtmlPassthrough(a, b)
  );
}
module$exports$google3$third_party$javascript$safevalues$restricted$legacy.legacyUnsafeHtml =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeHtml;
function module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeScript(a) {
  a = module$contents$google3$third_party$javascript$safevalues$restricted$legacy_nullUndefinedToString(a);
  if (goog.DEBUG && "string" !== typeof a) throw Error("Expected a string");
  return module$contents$google3$third_party$javascript$safevalues$internals$script_impl_createScript(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$legacy.legacyUnsafeScript =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeScript;
function module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeResourceUrl(a) {
  a = module$contents$google3$third_party$javascript$safevalues$restricted$legacy_nullUndefinedToString(a);
  if (goog.DEBUG && "string" !== typeof a) throw Error("Expected a string");
  return module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_createResourceUrl(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$legacy.legacyUnsafeResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeResourceUrl;
function module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeUrl(a) {
  a = module$contents$google3$third_party$javascript$safevalues$restricted$legacy_nullUndefinedToString(a);
  if (goog.DEBUG && "string" !== typeof a) throw Error("Expected a string");
  return module$contents$google3$third_party$javascript$safevalues$internals$url_impl_createUrl(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$legacy.legacyUnsafeUrl =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeUrl;
function module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeStyle(a) {
  a = module$contents$google3$third_party$javascript$safevalues$restricted$legacy_nullUndefinedToString(a);
  if (goog.DEBUG && "string" !== typeof a) throw Error("Expected a string");
  return module$contents$google3$third_party$javascript$safevalues$internals$style_impl_createStyle(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$legacy.legacyUnsafeStyle =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeStyle;
function module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeStyleSheet(a) {
  a = module$contents$google3$third_party$javascript$safevalues$restricted$legacy_nullUndefinedToString(a);
  if (goog.DEBUG && "string" !== typeof a) throw Error("Expected a string");
  return module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_createStyleSheet(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$legacy.legacyUnsafeStyleSheet =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeStyleSheet;
function module$contents$google3$third_party$javascript$safevalues$restricted$legacy_nullUndefinedToString(a) {
  return null === a ? "null" : void 0 === a ? "undefined" : a;
}
function module$contents$google3$third_party$javascript$safevalues$restricted$legacy_superLenientlySanitizeHtml(a) {
  return (0, module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.superLenientlySanitizeHtml)(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$legacy.superLenientlySanitizeHtml =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_superLenientlySanitizeHtml;
safevalues.restricted = {};
safevalues.restricted.legacy = {};
safevalues.restricted.legacy.legacyUnsafeHtml =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeHtml;
safevalues.restricted.legacy.legacyUnsafeScript =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeScript;
safevalues.restricted.legacy.legacyUnsafeResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeResourceUrl;
safevalues.restricted.legacy.legacyUnsafeUrl = module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeUrl;
safevalues.restricted.legacy.legacyUnsafeStyle =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeStyle;
safevalues.restricted.legacy.legacyUnsafeStyleSheet =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeStyleSheet;
safevalues.restricted.legacy.superLenientlySanitizeHtml =
  module$contents$google3$third_party$javascript$safevalues$restricted$legacy_superLenientlySanitizeHtml;
safevalues.restricted.legacy.lenientlySanitizeHtml =
  module$exports$google3$third_party$javascript$safevalues$restricted$legacy.lenientlySanitizeHtml;
var module$exports$google3$third_party$javascript$safevalues$restricted$reviewed = {},
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_module =
    module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_module || {
      id: "third_party/javascript/safevalues/restricted/reviewed.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_assertValidJustification(a) {
  if ("string" !== typeof a || "" === a.trim())
    throw Error(
      "Calls to uncheckedconversion functions must go through security review. A justification must be provided to capture what security assumptions are being made. See go/unchecked-conversions"
    );
}
function module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_htmlSafeByReview(a, b) {
  goog.DEBUG && module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_assertValidJustification(b);
  return (0, module$exports$google3$third_party$javascript$safevalues$internals$html_impl.createHtml)(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$reviewed.htmlSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_htmlSafeByReview;
function module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_scriptSafeByReview(a, b) {
  goog.DEBUG && module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_assertValidJustification(b);
  return module$contents$google3$third_party$javascript$safevalues$internals$script_impl_createScript(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$reviewed.scriptSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_scriptSafeByReview;
function module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_resourceUrlSafeByReview(a, b) {
  goog.DEBUG && module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_assertValidJustification(b);
  return module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_createResourceUrl(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$reviewed.resourceUrlSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_resourceUrlSafeByReview;
function module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_urlSafeByReview(a, b) {
  goog.DEBUG && module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_assertValidJustification(b);
  return module$contents$google3$third_party$javascript$safevalues$internals$url_impl_createUrl(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$reviewed.urlSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_urlSafeByReview;
function module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_styleSafeByReview(a, b) {
  goog.DEBUG && module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_assertValidJustification(b);
  return module$contents$google3$third_party$javascript$safevalues$internals$style_impl_createStyle(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$reviewed.styleSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_styleSafeByReview;
function module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_styleSheetSafeByReview(a, b) {
  goog.DEBUG && module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_assertValidJustification(b);
  return module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_createStyleSheet(a);
}
module$exports$google3$third_party$javascript$safevalues$restricted$reviewed.styleSheetSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_styleSheetSafeByReview;
safevalues.restricted.reviewed = {};
safevalues.restricted.reviewed.htmlSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_htmlSafeByReview;
safevalues.restricted.reviewed.scriptSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_scriptSafeByReview;
safevalues.restricted.reviewed.resourceUrlSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_resourceUrlSafeByReview;
safevalues.restricted.reviewed.urlSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_urlSafeByReview;
safevalues.restricted.reviewed.styleSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_styleSafeByReview;
safevalues.restricted.reviewed.styleSheetSafeByReview =
  module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_styleSheetSafeByReview;
var module$exports$gdocs$UploadPage = {
  UploadPage: function (a, b) {
    this.resizeWindow_(module$exports$gdocs$Constants.global.SAVE_DIALOG_SIZE);
    this.client_ = a;
    this.docList_ = new module$exports$gdocs$DocList.DocList(a);
    this.uploadStatus_ = null;
    this.destFolderName_ = this.lastFilename_ = "";
    this.autoOpen_ = !1;
    this.progressContainerEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("progress-container");
    this.resultsContainerEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("results-container");
    this.renameContainerEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("rename-container");
    this.errorContainerEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("error-container");
    this.userIdEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("user-id");
    this.progressTextEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("progress-text");
    this.percentEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("percent");
    this.uploadProgressEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("upload-progress");
    this.fileIconEl_ = module$contents$goog$asserts$dom_assertIsHtmlImageElement(
      module$contents$gdocs$domUtil_getHtmlElementByIdAssert("file-icon")
    );
    this.resultsTextEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("results-text");
    this.useBrowserActionContainerEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("use-browser-action-container");
    this.useBrowserActionImgEl_ = module$contents$gdocs$domUtil_getHtmlImageElementByIdAssert("use-browser-action-img");
    this.useBrowserActionTitleEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("use-browser-action-title");
    this.useBrowserActionBodyEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("use-browser-action-body");
    this.errorTextEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("error-text");
    this.renameInputEl_ = module$contents$gdocs$domUtil_getHtmlElementByIdAssert("rename-input");
    this.renameInputEl_.addEventListener("keyup", this.handleRenameInputChanged_.bind(this), !1);
    this.cancelButtonEl_ = this.setupDivButton_("cancel-button", chrome.i18n.getMessage("CANCEL"), this.handleCancel_.bind(this));
    this.applyButtonEl_ = this.setupDivButton_("apply-button", chrome.i18n.getMessage("APPLY"), this.handleApply_.bind(this));
    this.closeButtonEl_ = this.setupDivButton_("close-button", chrome.i18n.getMessage("CLOSE"), this.handleClose_.bind(this));
    this.renameButtonEl_ = this.setupDivButton_("rename-button", chrome.i18n.getMessage("RENAME"), this.handleRename_.bind(this));
    this.trashButtonEl_ = this.setupDivButton_("trash-button", chrome.i18n.getMessage("TRASH"), this.trash_.bind(this));
    this.currentContainerEl_ = this.progressContainerEl_;
    this.cancel_ = !1;
    module$contents$gdocs$domUtil_setTextContentId("dialog-title", chrome.i18n.getMessage("CHROME_EXTENSION_NAME"));
    module$contents$gdocs$domUtil_setTextContentId("product-name", chrome.i18n.getMessage("GOOGLE_DRIVE"));
    module$contents$gdocs$domUtil_setTextContentId("rename-text", chrome.i18n.getMessage("RENAME_PROMPT"));
    window.addEventListener("keyup", this.handleDialogKeyUp_.bind(this), !1);
    (this.uploadParams_ = b) || this.fatal(chrome.i18n.getMessage("DOWNLOAD_FAILURE"));
  }
};
module$exports$gdocs$UploadPage.UploadPage.prototype.getUploadParams = function () {
  return (0, goog.asserts.assert)(this.uploadParams_);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.startLoading = function (a, b) {
  this.uploadParams_ && ((this.autoOpen_ = a.getAutoOpen()), b.getUserIdStr(this.setUserId_.bind(this, a)));
};
module$exports$gdocs$UploadPage.UploadPage.prototype.isCancel = function () {
  return this.cancel_;
};
module$exports$gdocs$UploadPage.UploadPage.prototype.clearCancel = function () {
  this.cancel_ = !1;
  this.setButtonState_(this.cancelButtonEl_, !0);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.setupDivButton_ = function (a, b, c) {
  var d = module$contents$gdocs$domUtil_getHtmlElementByIdAssert(a);
  module$contents$gdocs$domUtil_setTextContent(d, b);
  d.addEventListener(
    "click",
    function (e) {
      d.classList.contains(module$contents$gdocs$UploadPage_JFK_BUTTON_DISABLED_CLASS) || c();
    },
    !1
  );
  d.addEventListener(
    "keyup",
    function (e) {
      module$exports$gdocs$UploadPage.UploadPage.isApply_(e) &&
        (d.classList.contains(module$contents$gdocs$UploadPage_JFK_BUTTON_DISABLED_CLASS) || c());
    },
    !1
  );
  return d;
};
module$exports$gdocs$UploadPage.UploadPage.prototype.setButtonState_ = function (a, b) {
  b
    ? a.classList.remove(module$contents$gdocs$UploadPage_JFK_BUTTON_DISABLED_CLASS)
    : a.classList.add(module$contents$gdocs$UploadPage_JFK_BUTTON_DISABLED_CLASS);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.setUserId_ = function (a, b) {
  module$contents$gdocs$domUtil_setTextContent(this.userIdEl_, b);
  this.destFolderName_ = (b = a.getDestFolderInfo(b)) ? b.folderName : chrome.i18n.getMessage("MY_DRIVE");
  a =
    a.getDefaultAcl() === module$exports$gdocs$Constants.ActionId.ACL_NONE
      ? module$exports$gdocs$Constants.Visibility.PRIVATE
      : module$exports$gdocs$Constants.Visibility.DEFAULT;
  new module$exports$gdocs$Uploader.Uploader(this.client_, this, this.createDataSource(), b, a).startUploadWhenReady();
};
module$exports$gdocs$UploadPage.UploadPage.prototype.handleDialogKeyUp_ = function (a) {
  a.keyCode == module$contents$gdocs$UploadPage_keyCodes.ESCAPE && this.handleClose_();
};
module$exports$gdocs$UploadPage.UploadPage.prototype.handleRenameInputChanged_ = function (a) {
  var b = 0 < this.renameInputEl_.value.length && this.renameInputEl_.value != this.lastFilename_;
  this.setButtonState_(this.applyButtonEl_, b);
  b && a.keyCode == module$contents$gdocs$UploadPage_keyCodes.ENTER && this.handleApply_();
};
module$exports$gdocs$UploadPage.UploadPage.isApply_ = function (a) {
  return a.keyCode == module$contents$gdocs$UploadPage_keyCodes.ENTER || a.keyCode == module$contents$gdocs$UploadPage_keyCodes.SPACE;
};
module$exports$gdocs$UploadPage.UploadPage.prototype.handleApply_ = function () {
  this.setButtonState_(this.applyButtonEl_, !1);
  var a = this.renameInputEl_.value.replace(/^\s+|\s+$/, "");
  this.docList_.renameFile(
    a,
    (0, goog.asserts.assert)(this.uploadStatus_).getDocId(),
    this.handleRenameFileSuccess_.bind(this),
    this.handleRenameFileFailure_.bind(this)
  );
};
module$exports$gdocs$UploadPage.UploadPage.prototype.handleRenameFileSuccess_ = function (a) {
  var b = this;
  a.clone()
    .json()
    .then(function (c) {
      b.lastFilename_ = c.title;
      b.setFinalResults_();
      module$contents$gdocs$domUtil_hideElem(b.applyButtonEl_, b.cancelButtonEl_);
      module$contents$gdocs$domUtil_showElem(b.closeButtonEl_, b.renameButtonEl_, b.trashButtonEl_);
      b.display_(b.resultsContainerEl_);
    });
};
module$exports$gdocs$UploadPage.UploadPage.prototype.handleRenameFileFailure_ = function (a) {
  this.setButtonState_(this.applyButtonEl_, !0);
  this.displayErrorMsg_(a);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.displayErrorMsg_ = function (a) {
  module$contents$gdocs$domUtil_setTextContent(this.errorTextEl_, a);
  this.display_(this.errorContainerEl_);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.updateProgressText = function (a) {
  module$contents$gdocs$domUtil_setTextContent(this.progressTextEl_, a);
  this.display_(this.progressContainerEl_);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.setPercent = function (a) {
  a = String(Math.floor(a));
  this.uploadProgressEl_.value = a;
  module$contents$gdocs$domUtil_setTextContent(this.percentEl_, chrome.i18n.getMessage("PERCENT", a));
};
module$exports$gdocs$UploadPage.UploadPage.prototype.fatal = function (a) {
  this.displayErrorMsg_(a);
  module$contents$gdocs$domUtil_hideElem(this.cancelButtonEl_);
  module$contents$gdocs$domUtil_showElem(this.closeButtonEl_);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.displayUseBrowserAction = function (a) {
  this.useBrowserActionImgEl_.src = goog.string.htmlEscape(chrome.runtime.getURL("images/savearrow.png"));
  module$contents$gdocs$domUtil_setTextContent(this.useBrowserActionTitleEl_, chrome.i18n.getMessage("USE_BROWSER_ACTION_TITLE"));
  module$exports$google3$third_party$javascript$safevalues$dom$elements$element.setInnerHtml(
    this.useBrowserActionBodyEl_,
    module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_htmlSafeByReview(
      chrome.i18n.getMessage("USE_BROWSER_ACTION", goog.string.htmlEscape(goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a)))),
      "USE_BROWSER_ACTION message satisfies the contract"
    )
  );
  module$contents$gdocs$domUtil_hideElem(this.progressContainerEl_);
  module$contents$gdocs$domUtil_hideElem(this.resultsContainerEl_);
  module$contents$gdocs$domUtil_hideElem(this.renameContainerEl_);
  module$contents$gdocs$domUtil_hideElem(this.errorContainerEl_);
  module$contents$gdocs$domUtil_hideElem(this.cancelButtonEl_);
  module$contents$gdocs$domUtil_showElem(this.useBrowserActionContainerEl_);
  module$contents$gdocs$domUtil_showElem(this.closeButtonEl_);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.showFinished = function (a) {
  this.autoOpen_
    ? (chrome.tabs.create({ url: a.getOpenUrl() }), window.close())
    : ((this.uploadStatus_ = a),
      (this.lastFilename_ = a.getTitle()),
      this.setFinalResults_(),
      module$contents$gdocs$domUtil_showElem(this.renameButtonEl_, this.trashButtonEl_),
      module$contents$gdocs$domUtil_hideElem(this.cancelButtonEl_),
      module$contents$gdocs$domUtil_showElem(this.closeButtonEl_),
      this.display_(this.resultsContainerEl_));
};
module$exports$gdocs$UploadPage.UploadPage.prototype.setFinalResults_ = function () {
  this.fileIconEl_.src = this.uploadStatus_ ? this.uploadStatus_.getIconUrl() : "";
  module$exports$google3$third_party$javascript$safevalues$dom$elements$element.setInnerHtml(
    this.resultsTextEl_,
    module$contents$google3$third_party$javascript$safevalues$restricted$reviewed_htmlSafeByReview(
      chrome.i18n.getMessage("FILE_WAS_SAVED", [
        "file-link",
        goog.string.htmlEscape(
          goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize((0, goog.asserts.assert)(this.uploadStatus_).getOpenUrl()))
        ),
        "docs-link",
        goog.string.htmlEscape(goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(this.createDocListUrl_()))),
        "change-text",
        goog.string.htmlEscape(chrome.runtime.getURL("options.html"))
      ]),
      "FILE_WAS_SAVED message satisfies the contract"
    )
  );
  this.setupLink_("file-link", this.lastFilename_);
  this.setupLink_("docs-link", this.destFolderName_);
  this.addCloseFromLinkHandler_(module$contents$gdocs$domUtil_getHtmlElementByIdAssert("change-text"));
};
module$exports$gdocs$UploadPage.UploadPage.prototype.setupLink_ = function (a, b) {
  var c = document.getElementById(a);
  c
    ? (module$contents$gdocs$domUtil_setTextContent(c, b), this.addCloseFromLinkHandler_(c))
    : module$contents$gdlog_warn("UploadPage.setupLink", 'Could not find Element with id: "' + a + '" for text:' + b);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.addCloseFromLinkHandler_ = function (a) {
  a.addEventListener("click", this.handleClose_.bind(this), !1);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.createDocListUrl_ = function () {
  return goog.uri.utils.setFragmentEncoded(
    module$contents$gdocs$UploadPage_GOOGLE_DRIVE_ROOT_URL,
    "?action=locate&id=" + (0, goog.asserts.assert)(this.uploadStatus_).getDocId()
  );
};
module$exports$gdocs$UploadPage.UploadPage.prototype.handleCancel_ = function () {
  module$contents$gdlog_info("UploadPage.handleCancel", "Cancel pressed. cancel:" + this.cancel_);
  this.currentContainerEl_ == this.renameContainerEl_
    ? (module$contents$gdocs$domUtil_hideElem(this.applyButtonEl_, this.cancelButtonEl_),
      module$contents$gdocs$domUtil_showElem(this.closeButtonEl_, this.renameButtonEl_, this.trashButtonEl_),
      this.display_(this.resultsContainerEl_))
    : ((this.cancel_ = !0), this.setButtonState_(this.cancelButtonEl_, !1));
};
module$exports$gdocs$UploadPage.UploadPage.prototype.handleClose_ = function () {
  this.cancel_ = !0;
  window.close();
};
module$exports$gdocs$UploadPage.UploadPage.prototype.handleRename_ = function () {
  this.renameInputEl_.value = this.lastFilename_;
  this.display_(this.renameContainerEl_);
  module$contents$gdocs$domUtil_hideElem(this.closeButtonEl_, this.renameButtonEl_, this.trashButtonEl_);
  module$contents$gdocs$domUtil_showElem(this.applyButtonEl_, this.cancelButtonEl_);
  this.setButtonState_(this.applyButtonEl_, !1);
  this.renameInputEl_.focus();
  this.renameInputEl_.select();
  var a = this.lastFilename_.lastIndexOf(".");
  -1 != a &&
    this.lastFilename_.length - (a + 1) <= module$exports$gdocs$Constants.global.MAX_SUFFIX_LEN &&
    (this.renameInputEl_.selectionEnd = a);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.display_ = function (a) {
  module$contents$gdocs$domUtil_hideElem(this.currentContainerEl_);
  module$contents$gdocs$domUtil_showElem(a);
  this.currentContainerEl_ = a;
};
module$exports$gdocs$UploadPage.UploadPage.prototype.trash_ = function () {
  this.setButtonState_(this.trashButtonEl_, !1);
  this.setButtonState_(this.renameButtonEl_, !1);
  this.docList_.trashFile(
    (0, goog.asserts.assert)(this.uploadStatus_).getDocId(),
    this.handleTrashSuccess_.bind(this),
    this.handleTrashFailure_.bind(this)
  );
};
module$exports$gdocs$UploadPage.UploadPage.prototype.handleTrashSuccess_ = function () {
  module$exports$google3$third_party$javascript$safevalues$dom$elements$element.setInnerHtml(
    this.resultsTextEl_,
    module$contents$google3$third_party$javascript$safevalues$restricted$legacy_legacyUnsafeHtml(
      chrome.i18n.getMessage("FILE_WAS_TRASHED", ["filename-text", "docs-link", module$contents$gdocs$UploadPage_GOOGLE_DRIVE_ROOT_URL]),
      { reportingId: "13a41b58-e510-413e-ac39-23bb5ffa1fd5" }
    )
  );
  module$contents$gdocs$domUtil_setTextContentId("filename-text", this.lastFilename_);
  this.addCloseFromLinkHandler_(module$contents$gdocs$domUtil_getHtmlElementByIdAssert("docs-link"));
  this.display_(this.resultsContainerEl_);
  module$contents$gdocs$domUtil_hideElem(this.cancelButtonEl_, this.renameButtonEl_, this.trashButtonEl_);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.handleTrashFailure_ = function (a) {
  this.setButtonState_(this.trashButtonEl_, !0);
  this.setButtonState_(this.renameButtonEl_, !0);
  this.displayErrorMsg_(a);
};
module$exports$gdocs$UploadPage.UploadPage.prototype.resizeWindow_ = function (a) {
  var b = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    c = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    d = a.width - b,
    e = a.height - c;
  module$contents$gdlog_info(
    "UploadPage.resizeWindow",
    "Window innerWidthxHeight:" +
      b +
      "x" +
      c +
      (" outerWidthxHeight:" + window.outerWidth + "x" + window.outerHeight) +
      (" size:" + a + "  requires resizeWidthxHeight:") +
      (d + "x" + e)
  );
  if (d || e)
    window.resizeBy(d, e),
      module$contents$gdlog_info(
        "UploadPage.resizeWindow",
        "Consider adjusting navigator.platform:" + navigator.platform + (" navigator.userAgent:" + navigator.userAgent)
      );
};
var module$contents$gdocs$UploadPage_keyCodes = { ENTER: 13, ESCAPE: 27, SPACE: 32 },
  module$contents$gdocs$UploadPage_GOOGLE_DRIVE_ROOT_URL = "https://drive.google.com/",
  module$contents$gdocs$UploadPage_JFK_BUTTON_DISABLED_CLASS = "jfk-button-disabled";
var module$exports$gdocs$CaptureUploadPage = {
  CaptureUploadPage: function () {
    module$exports$gdocs$UploadPage.UploadPage.apply(this, arguments);
  }
};
$jscomp.inherits(module$exports$gdocs$CaptureUploadPage.CaptureUploadPage, module$exports$gdocs$UploadPage.UploadPage);
module$exports$gdocs$CaptureUploadPage.CaptureUploadPage.prototype.createDataSource = function () {
  var a = this.getUploadParams();
  a.getCapturer().setUploadPage(this);
  return new module$exports$gdocs$CaptureDataSource.CaptureDataSource(a.getCapturer());
};
var module$exports$gdocs$CaptureUploadParams = {
  CaptureUploadParams: function (a, b) {
    module$exports$gdocs$UploadParams.UploadParams.call(this, b);
    this.capturer_ = a;
  }
};
$jscomp.inherits(module$exports$gdocs$CaptureUploadParams.CaptureUploadParams, module$exports$gdocs$UploadParams.UploadParams);
module$exports$gdocs$CaptureUploadParams.CaptureUploadParams.prototype.getCapturer = function () {
  return this.capturer_;
};
module$exports$gdocs$CaptureUploadParams.CaptureUploadParams.prototype.isUploadOnly = function () {
  return !0;
};
goog.exportProperty(
  module$exports$gdocs$CaptureUploadParams.CaptureUploadParams.prototype,
  "getCapturer",
  module$exports$gdocs$CaptureUploadParams.CaptureUploadParams.prototype.getCapturer
);
var module$exports$google3$third_party$javascript$safevalues$builders$sensitive_attributes = {},
  module$contents$google3$third_party$javascript$safevalues$builders$sensitive_attributes_module =
    module$contents$google3$third_party$javascript$safevalues$builders$sensitive_attributes_module || {
      id: "third_party/javascript/safevalues/builders/sensitive_attributes.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$builders$sensitive_attributes.SECURITY_SENSITIVE_ATTRIBUTES =
  "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
var module$exports$google3$third_party$javascript$safevalues$builders$attribute_builders = {},
  module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_module =
    module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_module || {
      id: "third_party/javascript/safevalues/builders/attribute_builders.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix(a) {
  goog.DEBUG &&
    module$contents$google3$third_party$javascript$safevalues$internals$string_literal_assertIsTemplateObject(
      a,
      !0,
      "safeAttr is a template literal tag function and should be called using the tagged template syntax. For example, safeAttr`foo`;"
    );
  var b = a[0].toLowerCase();
  if (goog.DEBUG) {
    if (0 === b.indexOf("on") || 0 === "on".indexOf(b))
      throw Error(
        "Prefix '" +
          a[0] +
          "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers."
      );
    module$exports$google3$third_party$javascript$safevalues$builders$sensitive_attributes.SECURITY_SENSITIVE_ATTRIBUTES.forEach(
      function (c) {
        if (0 === c.indexOf(b))
          throw Error(
            "Prefix '" +
              a[0] +
              "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" +
              (c + "'. Please use native or safe DOM APIs to set the attribute.")
          );
      }
    );
  }
  return module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_createAttributePrefix(b);
}
module$exports$google3$third_party$javascript$safevalues$builders$attribute_builders.safeAttrPrefix =
  module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix;
var module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder = {},
  module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder_module =
    module$contents$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder_module || {
      id: "third_party/javascript/safevalues/builders/html_sanitizer/html_sanitizer_builder.closure.js"
    };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder = function () {
  this.calledBuild = !1;
  this.sanitizerTable =
    module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$default_sanitizer_table.defaultSanitizerTable;
};
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder.prototype.onlyAllowElements =
  function (a) {
    var b = new Set(),
      c = new Map();
    a = $jscomp.makeIterator(a);
    for (var d = a.next(); !d.done; d = a.next()) {
      d = d.value;
      d = d.toUpperCase();
      if (!this.sanitizerTable.isAllowedElement(d)) throw Error("Element: " + d + ", is not allowed by html5_contract.textpb");
      var e = this.sanitizerTable.elementPolicies.get(d);
      void 0 !== e ? c.set(d, e) : b.add(d);
    }
    this.sanitizerTable =
      new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable(
        b,
        c,
        this.sanitizerTable.allowedGlobalAttributes,
        this.sanitizerTable.globalAttributePolicies
      );
    return this;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder.prototype.onlyAllowAttributes =
  function (a) {
    for (var b = new Set(), c = new Map(), d = new Map(), e = $jscomp.makeIterator(a), f = e.next(); !f.done; f = e.next())
      (f = f.value),
        this.sanitizerTable.allowedGlobalAttributes.has(f) && b.add(f),
        this.sanitizerTable.globalAttributePolicies.has(f) && c.set(f, this.sanitizerTable.globalAttributePolicies.get(f));
    e = $jscomp.makeIterator(this.sanitizerTable.elementPolicies.entries());
    for (f = e.next(); !f.done; f = e.next()) {
      var g = $jscomp.makeIterator(f.value);
      f = g.next().value;
      var h = (g = g.next().value);
      g = new Map();
      h = $jscomp.makeIterator(h.entries());
      for (var k = h.next(); !k.done; k = h.next()) {
        var l = $jscomp.makeIterator(k.value);
        k = l.next().value;
        l = l.next().value;
        a.has(k) && g.set(k, l);
      }
      d.set(f, g);
    }
    this.sanitizerTable =
      new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable(
        this.sanitizerTable.allowedElements,
        d,
        b,
        c
      );
    return this;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder.prototype.allowDataAttributes =
  function (a) {
    var b = new Set(this.sanitizerTable.allowedGlobalAttributes);
    a = $jscomp.makeIterator(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value;
      if (0 !== c.indexOf("data-")) throw Error("data attribute: " + c + ' does not begin with the prefix "data-"');
      b.add(c);
    }
    this.sanitizerTable =
      new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable(
        this.sanitizerTable.allowedElements,
        this.sanitizerTable.elementPolicies,
        b,
        this.sanitizerTable.globalAttributePolicies
      );
    return this;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder.prototype.allowStyleAttributes =
  function () {
    var a = new Map(this.sanitizerTable.globalAttributePolicies);
    a.set("style", {
      policyAction:
        module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table
          .AttributePolicyAction.KEEP_AND_SANITIZE_STYLE
    });
    this.sanitizerTable =
      new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable(
        this.sanitizerTable.allowedElements,
        this.sanitizerTable.elementPolicies,
        this.sanitizerTable.allowedGlobalAttributes,
        a
      );
    return this;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder.prototype.allowClassAttributes =
  function () {
    var a = new Set(this.sanitizerTable.allowedGlobalAttributes);
    a.add("class");
    this.sanitizerTable =
      new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable(
        this.sanitizerTable.allowedElements,
        this.sanitizerTable.elementPolicies,
        a,
        this.sanitizerTable.globalAttributePolicies
      );
    return this;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder.prototype.allowIdAttributes =
  function () {
    var a = new Set(this.sanitizerTable.allowedGlobalAttributes);
    a.add("id");
    this.sanitizerTable =
      new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable(
        this.sanitizerTable.allowedElements,
        this.sanitizerTable.elementPolicies,
        a,
        this.sanitizerTable.globalAttributePolicies
      );
    return this;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder.prototype.allowIdReferenceAttributes =
  function () {
    var a = new Set(this.sanitizerTable.allowedGlobalAttributes);
    a.add("aria-activedescendant").add("aria-controls").add("aria-labelledby").add("aria-owns").add("for").add("list");
    this.sanitizerTable =
      new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$sanitizer_table$sanitizer_table.SanitizerTable(
        this.sanitizerTable.allowedElements,
        this.sanitizerTable.elementPolicies,
        a,
        this.sanitizerTable.globalAttributePolicies
      );
    return this;
  };
module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder.prototype.build =
  function () {
    if (this.calledBuild) throw Error("this sanitizer has already called build");
    this.calledBuild = !0;
    return new module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.HtmlSanitizerImpl(
      this.sanitizerTable,
      module$exports$google3$third_party$javascript$safevalues$internals$secrets.secretToken
    );
  };
var module$exports$google3$third_party$javascript$safevalues$builders$resource_url_builders = {},
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_module =
    module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_module || {
      id: "third_party/javascript/safevalues/builders/resource_url_builders.closure.js"
    },
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_Primitive;
function module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_hasValidOrigin(a) {
  if (!/^https:\/\//.test(a) && !/^\/\//.test(a)) return !1;
  var b = a.indexOf("//") + 2,
    c = a.indexOf("/", b);
  if (c <= b) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
  a = a.substring(b, c);
  if (!/^[0-9a-z.:-]+$/i.test(a)) throw Error("The origin contains unsupported characters.");
  if (!/^[^:]*(:[0-9]+)?$/i.test(a)) throw Error("Invalid port number.");
  if (!/(^|\.)[a-z][^.]*$/i.test(a)) throw Error("The top-level domain must start with a letter.");
  return !0;
}
function module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_isValidAboutUrl(a) {
  if (!/^about:blank/.test(a)) return !1;
  if ("about:blank" !== a && !/^about:blank#/.test(a)) throw Error("The about url is invalid.");
  return !0;
}
function module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_isValidPathStart(a) {
  if (!/^\//.test(a)) return !1;
  if ("/" === a || (1 < a.length && "/" !== a[1] && "\\" !== a[1])) return !0;
  throw Error("The path start in the url is invalid.");
}
function module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_trustedResourceUrl(a) {
  var b = $jscomp.getRestArguments.apply(1, arguments);
  goog.DEBUG &&
    module$contents$google3$third_party$javascript$safevalues$internals$string_literal_assertIsTemplateObject(
      a,
      !0,
      "trustedResourceUrl is a template literal tag function and can only be called as such (e.g. trustedResourceUrl`/somepath.js`)"
    );
  if (0 === b.length) return module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_createResourceUrl(a[0]);
  var c = a[0].toLowerCase();
  if (goog.DEBUG) {
    if (/^data:/.test(c)) throw Error("Data URLs cannot have expressions in the template literal input.");
    if (
      !module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_hasValidOrigin(c) &&
      !module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_isValidPathStart(c) &&
      !module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_isValidAboutUrl(c)
    )
      throw Error("Trying to interpolate expressions in an unsupported url format.");
  }
  c = [a[0]];
  for (var d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
  return module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_createResourceUrl(c.join(""));
}
module$exports$google3$third_party$javascript$safevalues$builders$resource_url_builders.trustedResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_trustedResourceUrl;
function module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_appendParams(a, b) {
  var c = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(a).toString();
  if (/#/.test(c)) throw ((a = ""), goog.DEBUG && (a = "Found a hash in url (" + c + "), appending not supported"), Error(a));
  var d = /\?/.test(c) ? "&" : "?";
  b.forEach(function (e, f) {
    e = e instanceof Array ? e : [e];
    for (var g = 0; g < e.length; g++) {
      var h = e[g];
      null !== h && void 0 !== h && ((c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h))), (d = "&"));
    }
  });
  return module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_createResourceUrl(c);
}
module$exports$google3$third_party$javascript$safevalues$builders$resource_url_builders.appendParams =
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_appendParams;
var module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_BEFORE_FRAGMENT_REGEXP = /[^#]*/;
function module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_replaceFragment(a, b) {
  a = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl(a).toString();
  return module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_createResourceUrl(
    module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_BEFORE_FRAGMENT_REGEXP.exec(a)[0] + "#" + b
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$resource_url_builders.replaceFragment =
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_replaceFragment;
function module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_objectUrlFromScript(a) {
  a = module$contents$google3$third_party$javascript$safevalues$internals$script_impl_unwrapScript(a).toString();
  a = new Blob([a], { type: "text/javascript" });
  return module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_createResourceUrl(URL.createObjectURL(a));
}
module$exports$google3$third_party$javascript$safevalues$builders$resource_url_builders.objectUrlFromScript =
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_objectUrlFromScript;
var module$exports$google3$third_party$javascript$safevalues$builders$script_builders = {},
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_module =
    module$contents$google3$third_party$javascript$safevalues$builders$script_builders_module || {
      id: "third_party/javascript/safevalues/builders/script_builders.closure.js"
    },
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_Primitive,
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_Serializable;
function module$contents$google3$third_party$javascript$safevalues$builders$script_builders_safeScript(a) {
  goog.DEBUG &&
    module$contents$google3$third_party$javascript$safevalues$internals$string_literal_assertIsTemplateObject(
      a,
      !1,
      "safeScript is a template literal tag function that only accepts template literals without expressions. For example, safeScript`foo`;"
    );
  return module$contents$google3$third_party$javascript$safevalues$internals$script_impl_createScript(a[0]);
}
module$exports$google3$third_party$javascript$safevalues$builders$script_builders.safeScript =
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_safeScript;
function module$contents$google3$third_party$javascript$safevalues$builders$script_builders_concatScripts(a) {
  return module$contents$google3$third_party$javascript$safevalues$internals$script_impl_createScript(
    a.map(module$contents$google3$third_party$javascript$safevalues$internals$script_impl_unwrapScript).join("")
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$script_builders.concatScripts =
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_concatScripts;
function module$contents$google3$third_party$javascript$safevalues$builders$script_builders_valueAsScript(a) {
  return module$contents$google3$third_party$javascript$safevalues$internals$script_impl_createScript(
    JSON.stringify(a).replace(/</g, "\\u003C")
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$script_builders.valueAsScript =
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_valueAsScript;
function module$contents$google3$third_party$javascript$safevalues$builders$script_builders_safeScriptWithArgs(a) {
  var b = $jscomp.getRestArguments.apply(1, arguments);
  if (goog.DEBUG) {
    if (
      b.some(function (c) {
        return "" !== c;
      })
    )
      throw Error("safeScriptWithArgs only allows empty string expressions to enable inline comments.");
    module$contents$google3$third_party$javascript$safevalues$internals$string_literal_assertIsTemplateObject(
      a,
      !0,
      "safeScriptWithArgs is a template literal tag function that only accepts template literals. For example, safeScriptWithArgs`foo`;"
    );
  }
  return function () {
    var c = $jscomp.getRestArguments.apply(0, arguments).map(function (d) {
      return module$contents$google3$third_party$javascript$safevalues$builders$script_builders_valueAsScript(d).toString();
    });
    return module$contents$google3$third_party$javascript$safevalues$internals$script_impl_createScript(
      "(" + a.join("") + ")(" + c.join(",") + ")"
    );
  };
}
module$exports$google3$third_party$javascript$safevalues$builders$script_builders.safeScriptWithArgs =
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_safeScriptWithArgs;
var module$exports$google3$third_party$javascript$safevalues$builders$style_builders = {},
  module$contents$google3$third_party$javascript$safevalues$builders$style_builders_module =
    module$contents$google3$third_party$javascript$safevalues$builders$style_builders_module || {
      id: "third_party/javascript/safevalues/builders/style_builders.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$builders$style_builders_safeStyle(a) {
  goog.DEBUG &&
    module$contents$google3$third_party$javascript$safevalues$internals$string_literal_assertIsTemplateObject(
      a,
      !1,
      "safeStyle is a template literal tag function that only accepts template literals without expressions. For example, safeStyle`foo`;"
    );
  a = a[0];
  if (goog.DEBUG) {
    if (/[<>]/.test(a)) throw Error("Forbidden characters in style string: " + a);
    if (!/;$/.test(a)) throw Error('Style string does not end with ";": ' + a);
    if (!/:/.test(a)) throw Error('Style string should contain one or more ":": ' + a);
  }
  return module$contents$google3$third_party$javascript$safevalues$internals$style_impl_createStyle(a);
}
module$exports$google3$third_party$javascript$safevalues$builders$style_builders.safeStyle =
  module$contents$google3$third_party$javascript$safevalues$builders$style_builders_safeStyle;
function module$contents$google3$third_party$javascript$safevalues$builders$style_builders_concatStyles(a) {
  return module$contents$google3$third_party$javascript$safevalues$internals$style_impl_createStyle(
    a.map(module$contents$google3$third_party$javascript$safevalues$internals$style_impl_unwrapStyle).join("")
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$style_builders.concatStyles =
  module$contents$google3$third_party$javascript$safevalues$builders$style_builders_concatStyles;
var module$exports$google3$third_party$javascript$safevalues$builders$style_sheet_builders = {},
  module$contents$google3$third_party$javascript$safevalues$builders$style_sheet_builders_module =
    module$contents$google3$third_party$javascript$safevalues$builders$style_sheet_builders_module || {
      id: "third_party/javascript/safevalues/builders/style_sheet_builders.closure.js"
    };
function module$contents$google3$third_party$javascript$safevalues$builders$style_sheet_builders_safeStyleSheet(a) {
  goog.DEBUG &&
    module$contents$google3$third_party$javascript$safevalues$internals$string_literal_assertIsTemplateObject(
      a,
      !1,
      "safeStyleSheet is a template literal tag function that only accepts template literals without expressions. For example, safeStyleSheet`foo`;"
    );
  a = a[0];
  if (goog.DEBUG && /[<>]/.test(a)) throw Error("Forbidden characters in styleSheet string: " + a);
  return module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_createStyleSheet(a);
}
module$exports$google3$third_party$javascript$safevalues$builders$style_sheet_builders.safeStyleSheet =
  module$contents$google3$third_party$javascript$safevalues$builders$style_sheet_builders_safeStyleSheet;
function module$contents$google3$third_party$javascript$safevalues$builders$style_sheet_builders_concatStyleSheets(a) {
  return module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_createStyleSheet(
    a.map(module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_unwrapStyleSheet).join("")
  );
}
module$exports$google3$third_party$javascript$safevalues$builders$style_sheet_builders.concatStyleSheets =
  module$contents$google3$third_party$javascript$safevalues$builders$style_sheet_builders_concatStyleSheets;
var module$exports$google3$third_party$javascript$safevalues$index = {},
  module$contents$google3$third_party$javascript$safevalues$index_module =
    module$contents$google3$third_party$javascript$safevalues$index_module || { id: "third_party/javascript/safevalues/index.closure.js" };
module$exports$google3$third_party$javascript$safevalues$index.safeAttrPrefix =
  module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix;
module$exports$google3$third_party$javascript$safevalues$index.concatHtmls =
  module$contents$google3$third_party$javascript$safevalues$builders$html_builders_concatHtmls;
module$exports$google3$third_party$javascript$safevalues$index.htmlEscape =
  module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscape;
module$exports$google3$third_party$javascript$safevalues$index.scriptToHtml =
  module$contents$google3$third_party$javascript$safevalues$builders$html_builders_scriptToHtml;
module$exports$google3$third_party$javascript$safevalues$index.scriptUrlToHtml =
  module$contents$google3$third_party$javascript$safevalues$builders$html_builders_scriptUrlToHtml;
module$exports$google3$third_party$javascript$safevalues$index.sanitizeHtml =
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.sanitizeHtml;
module$exports$google3$third_party$javascript$safevalues$index.sanitizeHtmlAssertUnchanged =
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.sanitizeHtmlAssertUnchanged;
module$exports$google3$third_party$javascript$safevalues$index.sanitizeHtmlToFragment =
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer.sanitizeHtmlToFragment;
module$exports$google3$third_party$javascript$safevalues$index.HtmlSanitizerBuilder =
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder;
module$exports$google3$third_party$javascript$safevalues$index.appendParams =
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_appendParams;
module$exports$google3$third_party$javascript$safevalues$index.objectUrlFromScript =
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_objectUrlFromScript;
module$exports$google3$third_party$javascript$safevalues$index.replaceFragment =
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_replaceFragment;
module$exports$google3$third_party$javascript$safevalues$index.trustedResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_trustedResourceUrl;
module$exports$google3$third_party$javascript$safevalues$index.concatScripts =
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_concatScripts;
module$exports$google3$third_party$javascript$safevalues$index.safeScript =
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_safeScript;
module$exports$google3$third_party$javascript$safevalues$index.safeScriptWithArgs =
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_safeScriptWithArgs;
module$exports$google3$third_party$javascript$safevalues$index.valueAsScript =
  module$contents$google3$third_party$javascript$safevalues$builders$script_builders_valueAsScript;
module$exports$google3$third_party$javascript$safevalues$index.concatStyles =
  module$contents$google3$third_party$javascript$safevalues$builders$style_builders_concatStyles;
module$exports$google3$third_party$javascript$safevalues$index.safeStyle =
  module$contents$google3$third_party$javascript$safevalues$builders$style_builders_safeStyle;
module$exports$google3$third_party$javascript$safevalues$index.concatStyleSheets =
  module$contents$google3$third_party$javascript$safevalues$builders$style_sheet_builders_concatStyleSheets;
module$exports$google3$third_party$javascript$safevalues$index.safeStyleSheet =
  module$contents$google3$third_party$javascript$safevalues$builders$style_sheet_builders_safeStyleSheet;
module$exports$google3$third_party$javascript$safevalues$index.fromMediaSource =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_fromMediaSource;
module$exports$google3$third_party$javascript$safevalues$index.fromTrustedResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_fromTrustedResourceUrl;
module$exports$google3$third_party$javascript$safevalues$index.objectUrlFromSafeSource =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_objectUrlFromSafeSource;
module$exports$google3$third_party$javascript$safevalues$index.safeUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_safeUrl;
module$exports$google3$third_party$javascript$safevalues$index.SanitizableUrlScheme =
  module$exports$google3$third_party$javascript$safevalues$builders$url_builders.SanitizableUrlScheme;
module$exports$google3$third_party$javascript$safevalues$index.sanitizeUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_sanitizeUrl;
module$exports$google3$third_party$javascript$safevalues$index.trySanitizeUrl =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_trySanitizeUrl;
module$exports$google3$third_party$javascript$safevalues$index.addJavaScriptUrlSanitizationCallback =
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_addJavaScriptUrlSanitizationCallback;
module$exports$google3$third_party$javascript$safevalues$index.removeJavaScriptUrlSanitizationCallback =
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_removeJavaScriptUrlSanitizationCallback;
module$exports$google3$third_party$javascript$safevalues$index.SafeAttributePrefix =
  module$exports$google3$third_party$javascript$safevalues$internals$attribute_impl.SafeAttributePrefix;
module$exports$google3$third_party$javascript$safevalues$index.unwrapAttributePrefix =
  module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_unwrapAttributePrefix;
module$exports$google3$third_party$javascript$safevalues$index.EMPTY_HTML =
  module$exports$google3$third_party$javascript$safevalues$internals$html_impl.EMPTY_HTML;
module$exports$google3$third_party$javascript$safevalues$index.isHtml =
  module$exports$google3$third_party$javascript$safevalues$internals$html_impl.isHtml;
module$exports$google3$third_party$javascript$safevalues$index.SafeHtml =
  module$exports$google3$third_party$javascript$safevalues$internals$html_impl.SafeHtml;
module$exports$google3$third_party$javascript$safevalues$index.unwrapHtml =
  module$exports$google3$third_party$javascript$safevalues$internals$html_impl.unwrapHtml;
module$exports$google3$third_party$javascript$safevalues$index.isResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_isResourceUrl;
module$exports$google3$third_party$javascript$safevalues$index.TrustedResourceUrl = goog.html.TrustedResourceUrl;
module$exports$google3$third_party$javascript$safevalues$index.unwrapResourceUrl =
  module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl;
module$exports$google3$third_party$javascript$safevalues$index.EMPTY_SCRIPT =
  module$exports$google3$third_party$javascript$safevalues$internals$script_impl.EMPTY_SCRIPT;
module$exports$google3$third_party$javascript$safevalues$index.isScript =
  module$contents$google3$third_party$javascript$safevalues$internals$script_impl_isScript;
module$exports$google3$third_party$javascript$safevalues$index.SafeScript = module$contents$goog$html$SafeScript_SafeScript;
module$exports$google3$third_party$javascript$safevalues$index.unwrapScript =
  module$contents$google3$third_party$javascript$safevalues$internals$script_impl_unwrapScript;
module$exports$google3$third_party$javascript$safevalues$index.isStyle =
  module$contents$google3$third_party$javascript$safevalues$internals$style_impl_isStyle;
module$exports$google3$third_party$javascript$safevalues$index.SafeStyle = module$contents$goog$html$SafeStyle_SafeStyle;
module$exports$google3$third_party$javascript$safevalues$index.unwrapStyle =
  module$contents$google3$third_party$javascript$safevalues$internals$style_impl_unwrapStyle;
module$exports$google3$third_party$javascript$safevalues$index.isStyleSheet =
  module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_isStyleSheet;
module$exports$google3$third_party$javascript$safevalues$index.SafeStyleSheet = module$contents$goog$html$SafeStyleSheet_SafeStyleSheet;
module$exports$google3$third_party$javascript$safevalues$index.unwrapStyleSheet =
  module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_unwrapStyleSheet;
module$exports$google3$third_party$javascript$safevalues$index.ABOUT_BLANK = goog.html.SafeUrl.ABOUT_BLANK;
module$exports$google3$third_party$javascript$safevalues$index.INNOCUOUS_URL = goog.html.SafeUrl.INNOCUOUS_URL;
module$exports$google3$third_party$javascript$safevalues$index.isUrl =
  module$contents$google3$third_party$javascript$safevalues$internals$url_impl_isUrl;
module$exports$google3$third_party$javascript$safevalues$index.SafeUrl = goog.html.SafeUrl;
module$exports$google3$third_party$javascript$safevalues$index.unwrapUrl =
  module$contents$google3$third_party$javascript$safevalues$internals$url_impl_unwrapUrl;
module$exports$google3$third_party$javascript$safevalues$index.reportOnlyHtmlPassthrough =
  module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportOnlyHtmlPassthrough;
safevalues.safeAttrPrefix = module$contents$google3$third_party$javascript$safevalues$builders$attribute_builders_safeAttrPrefix;
safevalues.concatHtmls = module$contents$google3$third_party$javascript$safevalues$builders$html_builders_concatHtmls;
safevalues.htmlEscape = module$contents$google3$third_party$javascript$safevalues$builders$html_builders_htmlEscape;
safevalues.scriptToHtml = module$contents$google3$third_party$javascript$safevalues$builders$html_builders_scriptToHtml;
safevalues.scriptUrlToHtml = module$contents$google3$third_party$javascript$safevalues$builders$html_builders_scriptUrlToHtml;
safevalues.HtmlSanitizer = module$exports$google3$third_party$javascript$safevalues$index.HtmlSanitizer;
safevalues.sanitizeHtml = module$exports$google3$third_party$javascript$safevalues$index.sanitizeHtml;
safevalues.sanitizeHtmlAssertUnchanged = module$exports$google3$third_party$javascript$safevalues$index.sanitizeHtmlAssertUnchanged;
safevalues.sanitizeHtmlToFragment = module$exports$google3$third_party$javascript$safevalues$index.sanitizeHtmlToFragment;
safevalues.HtmlSanitizerBuilder =
  module$exports$google3$third_party$javascript$safevalues$builders$html_sanitizer$html_sanitizer_builder.HtmlSanitizerBuilder;
safevalues.appendParams = module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_appendParams;
safevalues.objectUrlFromScript =
  module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_objectUrlFromScript;
safevalues.replaceFragment = module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_replaceFragment;
safevalues.trustedResourceUrl = module$contents$google3$third_party$javascript$safevalues$builders$resource_url_builders_trustedResourceUrl;
safevalues.concatScripts = module$contents$google3$third_party$javascript$safevalues$builders$script_builders_concatScripts;
safevalues.safeScript = module$contents$google3$third_party$javascript$safevalues$builders$script_builders_safeScript;
safevalues.safeScriptWithArgs = module$contents$google3$third_party$javascript$safevalues$builders$script_builders_safeScriptWithArgs;
safevalues.valueAsScript = module$contents$google3$third_party$javascript$safevalues$builders$script_builders_valueAsScript;
safevalues.concatStyles = module$contents$google3$third_party$javascript$safevalues$builders$style_builders_concatStyles;
safevalues.safeStyle = module$contents$google3$third_party$javascript$safevalues$builders$style_builders_safeStyle;
safevalues.concatStyleSheets = module$contents$google3$third_party$javascript$safevalues$builders$style_sheet_builders_concatStyleSheets;
safevalues.safeStyleSheet = module$contents$google3$third_party$javascript$safevalues$builders$style_sheet_builders_safeStyleSheet;
safevalues.fromMediaSource = module$contents$google3$third_party$javascript$safevalues$builders$url_builders_fromMediaSource;
safevalues.fromTrustedResourceUrl = module$contents$google3$third_party$javascript$safevalues$builders$url_builders_fromTrustedResourceUrl;
safevalues.objectUrlFromSafeSource =
  module$contents$google3$third_party$javascript$safevalues$builders$url_builders_objectUrlFromSafeSource;
safevalues.safeUrl = module$contents$google3$third_party$javascript$safevalues$builders$url_builders_safeUrl;
safevalues.SanitizableUrlScheme = module$exports$google3$third_party$javascript$safevalues$builders$url_builders.SanitizableUrlScheme;
safevalues.sanitizeUrl = module$contents$google3$third_party$javascript$safevalues$builders$url_builders_sanitizeUrl;
safevalues.Scheme = module$exports$google3$third_party$javascript$safevalues$index.Scheme;
safevalues.trySanitizeUrl = module$contents$google3$third_party$javascript$safevalues$builders$url_builders_trySanitizeUrl;
safevalues.addJavaScriptUrlSanitizationCallback =
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_addJavaScriptUrlSanitizationCallback;
safevalues.removeJavaScriptUrlSanitizationCallback =
  module$contents$google3$third_party$javascript$safevalues$builders$url_sanitizer_removeJavaScriptUrlSanitizationCallback;
safevalues.SafeAttributePrefix = module$exports$google3$third_party$javascript$safevalues$internals$attribute_impl.SafeAttributePrefix;
safevalues.unwrapAttributePrefix = module$contents$google3$third_party$javascript$safevalues$internals$attribute_impl_unwrapAttributePrefix;
safevalues.EMPTY_HTML = module$exports$google3$third_party$javascript$safevalues$index.EMPTY_HTML;
safevalues.isHtml = module$exports$google3$third_party$javascript$safevalues$index.isHtml;
safevalues.SafeHtml = module$exports$google3$third_party$javascript$safevalues$index.SafeHtml;
safevalues.unwrapHtml = module$exports$google3$third_party$javascript$safevalues$index.unwrapHtml;
safevalues.isResourceUrl = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_isResourceUrl;
safevalues.TrustedResourceUrl = goog.html.TrustedResourceUrl;
safevalues.unwrapResourceUrl = module$contents$google3$third_party$javascript$safevalues$internals$resource_url_impl_unwrapResourceUrl;
safevalues.EMPTY_SCRIPT = module$exports$google3$third_party$javascript$safevalues$internals$script_impl.EMPTY_SCRIPT;
safevalues.isScript = module$contents$google3$third_party$javascript$safevalues$internals$script_impl_isScript;
safevalues.SafeScript = module$contents$goog$html$SafeScript_SafeScript;
safevalues.unwrapScript = module$contents$google3$third_party$javascript$safevalues$internals$script_impl_unwrapScript;
safevalues.isStyle = module$contents$google3$third_party$javascript$safevalues$internals$style_impl_isStyle;
safevalues.SafeStyle = module$contents$goog$html$SafeStyle_SafeStyle;
safevalues.unwrapStyle = module$contents$google3$third_party$javascript$safevalues$internals$style_impl_unwrapStyle;
safevalues.isStyleSheet = module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_isStyleSheet;
safevalues.SafeStyleSheet = module$contents$goog$html$SafeStyleSheet_SafeStyleSheet;
safevalues.unwrapStyleSheet = module$contents$google3$third_party$javascript$safevalues$internals$style_sheet_impl_unwrapStyleSheet;
safevalues.ABOUT_BLANK = goog.html.SafeUrl.ABOUT_BLANK;
safevalues.INNOCUOUS_URL = goog.html.SafeUrl.INNOCUOUS_URL;
safevalues.isUrl = module$contents$google3$third_party$javascript$safevalues$internals$url_impl_isUrl;
safevalues.SafeUrl = goog.html.SafeUrl;
safevalues.unwrapUrl = module$contents$google3$third_party$javascript$safevalues$internals$url_impl_unwrapUrl;
safevalues.reportOnlyHtmlPassthrough =
  module$contents$google3$third_party$javascript$safevalues$reporting$reporting_reportOnlyHtmlPassthrough;
var module$exports$gdocs$TitleComputer = {
  TitleComputer: function (a, b, c) {
    if (0 >= a) throw new RangeError("Maximum title length must be > 0");
    if (0 > b) throw new RangeError("Maximum suffix length must be >= 0");
    if (b >= a) throw new RangeError("Maximum suffix length must be less than Maximum title length");
    this.maxTitleLen_ = a;
    this.maxSuffixLen_ = b;
    this.addExtension_ = c;
  }
};
module$exports$gdocs$TitleComputer.TitleComputer.prototype.createTitleFromText = function (a, b) {
  a = this.unescapeHtml_(a);
  if (!a) return null;
  a = a.replace(module$contents$gdocs$TitleComputer_COLLAPSE_SPACES, " ");
  a = a.replace(module$contents$gdocs$TitleComputer_TRIM, "");
  if (!a.length) return null;
  a = this.appendContentTypeExtension_(a, b);
  b = "";
  if (a.length > this.maxTitleLen_) {
    var c = this.splitExtension_(a),
      d = this.maxTitleLen_;
    c[1] && ((a = c[0]), (b = "." + c[1]), (d -= b.length));
    a = a.substr(0, d);
    c = Math.max(a.lastIndexOf(" "), a.lastIndexOf("-"), a.lastIndexOf("_"));
    0 < c && ((c = a.substr(0, c)), 0 < c.length && (a = c));
  }
  return a + b;
};
module$exports$gdocs$TitleComputer.TitleComputer.prototype.splitExtension_ = function (a) {
  var b = a.lastIndexOf(".");
  if (0 < b && b + 1 != a.length && a.length - b - 1 <= this.maxSuffixLen_) {
    var c = a.substr(b + 1);
    return [a.substr(0, b), c];
  }
  return [a, ""];
};
module$exports$gdocs$TitleComputer.TitleComputer.prototype.appendContentTypeExtension_ = function (a, b) {
  if (!b || !this.addExtension_) return a;
  var c = module$exports$gdocs$data.EXTENSIONS[b];
  if (!c) return module$contents$gdlog_info("TitleComputer.appendContentTypeExtension", "No extension mapping for " + b), a;
  b = this.splitExtension_(a);
  return b[1].toLocaleLowerCase() != c ? a + "." + c : b[0] + "." + c;
};
module$exports$gdocs$TitleComputer.TitleComputer.prototype.unescapeHtml_ = function (a) {
  if (!a) return null;
  a = a.replace(module$contents$gdocs$TitleComputer_STRIP_META, "");
  var b = document.createElement("body");
  module$exports$google3$third_party$javascript$safevalues$dom$elements$element.setInnerHtml(
    b,
    (0, module$exports$google3$third_party$javascript$safevalues$index.sanitizeHtmlAssertUnchanged)(a)
  );
  for (a = b; a.firstChild; ) a = a.firstChild;
  return a.nodeValue;
};
module$exports$gdocs$TitleComputer.TitleComputer.prototype.createDefaultTitle = function (a, b, c, d, e) {
  return 0 == c.indexOf(module$exports$gdocs$Constants.MimeType.HTML)
    ? (e = this.createFromHtml(e))
      ? e
      : d
      ? this.createNoData_(a, c, b)
      : null
    : this.createNoData_(a, c, b);
};
module$exports$gdocs$TitleComputer.TitleComputer.prototype.createFromHtml = function (a) {
  a = a.match(module$contents$gdocs$TitleComputer_TITLE_CONTENTS);
  return !a || 2 > a.length ? null : this.createTitleFromText(a[1], module$exports$gdocs$Constants.MimeType.HTML);
};
module$exports$gdocs$TitleComputer.TitleComputer.prototype.createNoData_ = function (a, b, c) {
  var d = a.lastIndexOf("/");
  if (d + 1 == a.length) return (c = this.createNoUrlDefaultTitle_(b, c)), this.appendContentTypeExtension_(c, b);
  a = a.substr(d + 1);
  return 0 <= a.indexOf("?") || 0 == a.indexOf("&")
    ? ((c = this.createNoUrlDefaultTitle_(b, c)), this.appendContentTypeExtension_(c, b))
    : this.createTitleFromText(decodeURI(a), b);
};
module$exports$gdocs$TitleComputer.TitleComputer.prototype.createNoUrlDefaultTitle_ = function (a, b) {
  return 0 == a.indexOf(module$exports$gdocs$Constants.MimeType.PDF)
    ? chrome.i18n.getMessage("PDF_DEFAULT_FILENAME")
    : 0 == a.indexOf(module$exports$gdocs$Constants.MimeType.HTML)
    ? chrome.i18n.getMessage("HTML_DEFAULT_FILENAME")
    : 0 == a.indexOf(module$exports$gdocs$Constants.MimeType.XML)
    ? chrome.i18n.getMessage("XML_DEFAULT_FILENAME")
    : 0 == a.indexOf("text")
    ? chrome.i18n.getMessage("TEXT_DEFAULT_FILENAME")
    : 0 == a.indexOf("video")
    ? chrome.i18n.getMessage("VIDEO_DEFAULT_FILENAME")
    : 0 == a.indexOf("audio")
    ? chrome.i18n.getMessage("AUDIO_DEFAULT_FILENAME")
    : 0 == a.indexOf("image")
    ? chrome.i18n.getMessage("IMAGE_DEFAULT_FILENAME")
    : b;
};
var module$contents$gdocs$TitleComputer_TRIM = /^\s+|\s+$/g,
  module$contents$gdocs$TitleComputer_COLLAPSE_SPACES = /\s+/g,
  module$contents$gdocs$TitleComputer_STRIP_META = /<meta[^>]+>/gim,
  module$contents$gdocs$TitleComputer_TITLE_CONTENTS = /<title>\s*([\s\S]+?)\s*<\/title/im;
var module$exports$gdocs$DataUriCapturer = {
  DataUriCapturer: function (a, b, c, d, e) {
    module$exports$gdocs$Capturer.Capturer.call(this, a, c, !0, e);
    this.uri_ = b;
    this.isDefaultFilename_ = d;
  }
};
$jscomp.inherits(module$exports$gdocs$DataUriCapturer.DataUriCapturer, module$exports$gdocs$Capturer.Capturer);
module$exports$gdocs$DataUriCapturer.DataUriCapturer.prototype.startCapture = function () {
  var a = this.uri_.match(module$contents$gdocs$DataUriCapturer_DATA_URI);
  a && 3 == a.length && a[2]
    ? this.uploadDataUri_(a[1], a[2])
    : (module$contents$gdlog_warn(
        "DataUriCapturer.startCapture",
        "URI did not parse. URI:" + this.uri_ + (" matches:" + module$contents$gdlog_prettyPrint(a))
      ),
      this.fatal(chrome.i18n.getMessage("DOWNLOAD_FAILURE_NO_DATA")));
};
module$exports$gdocs$DataUriCapturer.DataUriCapturer.prototype.uploadDataUri_ = function (a, b) {
  var c = !1,
    d = module$exports$gdocs$Constants.MimeType.PLAIN;
  a = a.split(";");
  a = $jscomp.makeIterator(a);
  for (var e = a.next(); !e.done; e = a.next())
    (e = (e = e.value) || ""),
      (e = e.toLowerCase()),
      "base64" == e ? (c = !0) : 0 != e.indexOf("charset=") && -1 != e.indexOf("/") && (d = e);
  this.isDefaultFilename_ &&
    ((a = module$contents$gdocs$msgutil_createBaseFilenameFromContentType(d)),
    (a = new module$exports$gdocs$TitleComputer.TitleComputer(
      module$exports$gdocs$Constants.global.MAX_GENERATED_TITLE_LEN,
      module$exports$gdocs$Constants.global.MAX_SUFFIX_LEN,
      !0
    ).createTitleFromText(a, d)) && this.setFilename(a));
  b = this.createDataUriBlob(b, c);
  this.uploadBlob(b, d);
};
var module$contents$gdocs$DataUriCapturer_DATA_URI = /^data:([^,]*),(.*)/i;
var module$exports$gdocs$UrlDownloader = {
  UrlDownloader: function (a, b, c, d, e, f) {
    module$exports$gdocs$DriveDataController.DriveDataController.call(this, b, c, e, f);
    this.url_ = a;
    this.isDefaultFilename_ = d;
    this.contentType_ = this.computedFilename_ = "";
    this.numProgressEvents_ = this.percentage_ = 0;
  }
};
$jscomp.inherits(module$exports$gdocs$UrlDownloader.UrlDownloader, module$exports$gdocs$DriveDataController.DriveDataController);
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.updatePercent_ = function (a, b) {
  this.numProgressEvents_++;
  49 <= this.percentage_ ||
    ((a = parseInt(a.headers.get("Content-Length"), 10)),
    (b = isNaN(a) ? this.percentage_ + this.decayingInc_() : (50 * b) / a),
    (a = Math.min(Math.floor(b), 49)),
    a > this.percentage_ && this.setPercent(a),
    b > this.percentage_ && (this.percentage_ = b));
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.markUploadDone_ = function () {
  this.percentage_ = 50;
  this.setPercent(this.percentage_);
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.decayingInc_ = function () {
  return 15 >= this.numProgressEvents_ ? 1 : 35 >= this.numProgressEvents_ ? 0.25 : 45 >= this.numProgressEvents_ ? 0.05 : 0.01;
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.startDownload = function () {
  0 == this.url_.indexOf("file://")
    ? chrome.extension.isAllowedFileSchemeAccess(this.handleAllowedAccess_.bind(this))
    : 0 != this.url_.indexOf("http://") && 0 != this.url_.indexOf("https://")
    ? this.fatal(chrome.i18n.getMessage("INVALID_URL", this.url_))
    : this.beginDownload_();
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.beginDownload_ = function () {
  var a = this;
  fetch(
    new Request(this.url_, {
      method: "GET",
      headers: { Range: "bytes=0-" + (0 + module$contents$gdocs$UrlDownloader_MAXIMUM_DOWNLOAD_SIZE - 1) },
      mode: "cors",
      cache: "default"
    })
  ).then(
    function (b) {
      if (a.shouldContinue_(b.clone())) {
        var c = b.clone().body;
        if (c) {
          var d = c.getReader(),
            e = 0,
            f = function (g) {
              var h = g.value;
              if (g.done) a.onLoad_(b);
              else
                a.isCancel()
                  ? (a.fatal(chrome.i18n.getMessage("DOWNLOAD_CANCELED")), a.clearCancel())
                  : ((e += h.length), a.updatePercent_(b, e), d.read().then(f));
            };
          d.read().then(f);
        }
      }
    },
    function (b) {
      a.fatal(chrome.i18n.getMessage("DOWNLOAD_REQUEST_FAILED"));
      module$contents$gdlog_error("UrlDownloader.beginDownload_", "Error downloading file. Error:" + b);
    }
  );
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.handleAllowedAccess_ = function (a) {
  a ? this.beginDownload_() : this.fatal(chrome.i18n.getMessage("ENABLE_FILE_URL"));
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.shouldContinue_ = function (a) {
  return this.isTooLargeFatal_(a) || this.hasFailed()
    ? !1
    : 400 <= a.status || (200 != a.status && 206 != a.status && (0 != a.status || 0 != this.url_.indexOf("file://")))
    ? (this.fatal(chrome.i18n.getMessage("DOWNLOAD_FAILURE", module$contents$gdocs$msgutil_createResponseErrMsg(a))), !1)
    : 0 == this.getContentType_(a).indexOf("text/html")
    ? (this.displayUseBrowserAction(this.url_), !1)
    : this.isCancel()
    ? (this.fatal(chrome.i18n.getMessage("DOWNLOAD_CANCELED")), this.clearCancel(), !1)
    : !0;
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.onLoad_ = function (a) {
  var b = this;
  if (!this.hasFailed())
    if (this.isCancel()) this.fatal(chrome.i18n.getMessage("DOWNLOAD_CANCELED")), this.clearCancel();
    else {
      var c = this.getContentType_(a),
        d = Promise.resolve();
      !this.computedFilename_ &&
        this.isDefaultFilename_ &&
        (d = this.createTitle_(a).then(function (e) {
          b.computedFilename_ = e || b.getFilename();
          b.setFilename(b.computedFilename_);
        }));
      this.markUploadDone_();
      d.then(function () {
        return a.clone().blob();
      }).then(function (e) {
        return void b.uploadBlob(e, c);
      });
    }
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.isTooLargeFatal_ = function (a) {
  a = a.headers.get("Content-Range");
  if (!a) return !1;
  var b = parseInt(a.replace(module$contents$gdocs$UrlDownloader_STRIP_TO_FINAL_SLASH, ""), 10);
  return b >= module$contents$gdocs$UrlDownloader_MAXIMUM_DOWNLOAD_SIZE
    ? (module$contents$gdlog_info("UrlDownloader.isTooLargeFatal", "Too large size:" + b + " contentRange:" + a),
      this.fatal(chrome.i18n.getMessage("DOWNLOAD_FAILURE_TOO_BIG_MB", Math.floor(b / 1048576).toString())),
      !0)
    : !1;
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.createTitle_ = function (a) {
  var b = this,
    c = this.getContentType_(a),
    d = !this.getAllowConvert() || !(c in module$exports$gdocs$data.CONVERTIBLE),
    e = new module$exports$gdocs$TitleComputer.TitleComputer(
      module$exports$gdocs$Constants.global.MAX_GENERATED_TITLE_LEN,
      module$exports$gdocs$Constants.global.MAX_SUFFIX_LEN,
      d
    );
  if ((d = this.getContentDisposition_(a))) return Promise.resolve(e.createTitleFromText(d, c));
  var f = "";
  return 0 != c.indexOf(module$exports$gdocs$Constants.MimeType.HTML)
    ? Promise.resolve(e.createDefaultTitle(this.url_, this.getFilename(), c, !0, f))
    : a
        .clone()
        .arrayBuffer()
        .then(function (g) {
          g = new Uint8Array(g);
          for (var h = Math.min(g.length, module$contents$gdocs$UrlDownloader_MAX_TITLE_SEARCH_BYTES), k = 0; k < h; k++) {
            var l = String.fromCharCode(g[k]);
            f += l;
            if (">" == l && 16 <= k && "</title>" == f.substr(k - 8 + 1, 8).toLowerCase()) break;
          }
          return e.createDefaultTitle(b.url_, b.getFilename(), c, !0, f);
        });
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.getContentDisposition_ = function (a) {
  return (a = a.headers.get("Content-Disposition")) &&
    (a = a.match(module$contents$gdocs$UrlDownloader_FILENAME_PARM)) &&
    1 < a.length &&
    a[1]
    ? a[1]
    : null;
};
module$exports$gdocs$UrlDownloader.UrlDownloader.prototype.getContentType_ = function (a) {
  this.contentType_ ||
    ((this.contentType_ = a.headers.get("Content-Type") || "")
      ? (this.contentType_ = this.contentType_.toLowerCase())
      : ((this.contentType_ = module$exports$gdocs$Constants.MimeType.OCTET_STREAM),
        module$contents$gdlog_info("UrlDownloader.getContentType", "No Content-Type, using " + this.contentType_)));
  return this.contentType_;
};
module$exports$gdocs$UrlDownloader.UrlDownloader.LOAD_EVENT = "load";
module$exports$gdocs$UrlDownloader.UrlDownloader.PROGRESS_EVENT = "progress";
module$exports$gdocs$UrlDownloader.UrlDownloader.ERROR_EVENT = "error";
var module$contents$gdocs$UrlDownloader_STRIP_TO_FINAL_SLASH = /.*\//,
  module$contents$gdocs$UrlDownloader_FILENAME_PARM = /;\s*filename=".*?([^/]+)"/,
  module$contents$gdocs$UrlDownloader_MAXIMUM_DOWNLOAD_SIZE = 52428800,
  module$contents$gdocs$UrlDownloader_MAX_TITLE_SEARCH_BYTES = 32768;
var module$exports$gdocs$UrlUploadParams = {
  UrlUploadParams: function (a, b) {
    module$exports$gdocs$UploadParams.UploadParams.call(this, b);
    this.urlDownloader_ = a;
  }
};
$jscomp.inherits(module$exports$gdocs$UrlUploadParams.UrlUploadParams, module$exports$gdocs$UploadParams.UploadParams);
module$exports$gdocs$UrlUploadParams.UrlUploadParams.prototype.getUrlDownloader = function () {
  return this.urlDownloader_;
};
module$exports$gdocs$UrlUploadParams.UrlUploadParams.prototype.isUploadOnly = function () {
  return !1;
};
goog.exportProperty(
  module$exports$gdocs$UrlUploadParams.UrlUploadParams.prototype,
  "getUrlDownloader",
  module$exports$gdocs$UrlUploadParams.UrlUploadParams.prototype.getUrlDownloader
);
var module$exports$gdocs$DownloadStarter = {};
function module$contents$gdocs$DownloadStarter_startUrlDownload(a, b, c, d, e, f, g) {
  if (0 == a.toLowerCase().indexOf("data:"))
    return (
      (a = new module$exports$gdocs$DataUriCapturer.DataUriCapturer(b, a, e, f, g)),
      a.startCapture(),
      new module$exports$gdocs$CaptureUploadParams.CaptureUploadParams(a, d)
    );
  a = new module$exports$gdocs$UrlDownloader.UrlDownloader(a, b, e, f, c, g);
  a.startDownload();
  return new module$exports$gdocs$UrlUploadParams.UrlUploadParams(a, d);
}
module$exports$gdocs$DownloadStarter.startUrlDownload = module$contents$gdocs$DownloadStarter_startUrlDownload;
var module$exports$gdocs$HtmlScrapeCapturer = {
  HtmlScrapeCapturer: function (a, b, c) {
    module$exports$gdocs$Capturer.Capturer.call(
      this,
      a,
      module$exports$gdocs$HtmlScrapeCapturer.HtmlScrapeCapturer.createDefaultFilename_(a, b),
      !b,
      c
    );
    this.contentScript_ = b ? "js/contentscriptraw.js" : "js/contentscriptexpand.js";
    this.callback_ = null;
    this.toRawHtml_ = b;
  }
};
$jscomp.inherits(module$exports$gdocs$HtmlScrapeCapturer.HtmlScrapeCapturer, module$exports$gdocs$Capturer.Capturer);
module$exports$gdocs$HtmlScrapeCapturer.HtmlScrapeCapturer.prototype.getAllowConvert = function () {
  return !this.toRawHtml_;
};
module$exports$gdocs$HtmlScrapeCapturer.HtmlScrapeCapturer.createDefaultFilename_ = function (a, b) {
  return module$exports$gdocs$Capturer.Capturer.createFilenameFromTab(a, b ? ".html" : "");
};
module$exports$gdocs$HtmlScrapeCapturer.HtmlScrapeCapturer.prototype.startCapture = function () {
  var a = this.getTab();
  a &&
    a.id &&
    ((this.callback_ = this.onMessageCallback_.bind(this)),
    chrome.runtime.onMessage.addListener(this.callback_),
    chrome.scripting.executeScript({ files: [this.contentScript_], target: { tabId: a.id }, injectImmediately: !0 }));
};
module$exports$gdocs$HtmlScrapeCapturer.HtmlScrapeCapturer.prototype.onMessageCallback_ = function (a, b, c) {
  (0, goog.asserts.assert)(null !== this.callback_);
  chrome.runtime.onMessage.removeListener(this.callback_);
  module$contents$gdlog_info("HtmlScrapeCapturer.onHtmlCallback_", "html length:" + a.length);
  (b = new module$exports$gdocs$TitleComputer.TitleComputer(
    module$exports$gdocs$Constants.global.MAX_GENERATED_TITLE_LEN,
    module$exports$gdocs$Constants.global.MAX_SUFFIX_LEN,
    !this.getAllowConvert()
  ).createFromHtml(a)) && this.setFilename(b);
  a = this.createBlob(a);
  this.uploadBlob(a, module$exports$gdocs$Constants.MimeType.HTML);
};
var module$exports$gdocs$ImageCapturer = {
  ImageCapturer: function (a, b) {
    module$exports$gdocs$Capturer.Capturer.call(this, a, module$exports$gdocs$Capturer.Capturer.createFilenameFromTab(a, ".png"), !1, b);
    this.windowId_ = a.windowId;
  }
};
$jscomp.inherits(module$exports$gdocs$ImageCapturer.ImageCapturer, module$exports$gdocs$Capturer.Capturer);
module$exports$gdocs$ImageCapturer.ImageCapturer.prototype.startCapture = function () {
  chrome.tabs.captureVisibleTab(this.windowId_, { format: "png" }, this.uploadImageUri.bind(this));
};
module$exports$gdocs$ImageCapturer.ImageCapturer.prototype.uploadImageUri = function (a) {
  if (a) {
    var b = a.indexOf(",");
    a = a.substr(b + 1);
    a = this.createDataUriBlob(a, !0);
    this.uploadImageBlob(a);
  } else this.fatal(chrome.i18n.getMessage("IMAGE_CAPTURE_FAILED"));
};
module$exports$gdocs$ImageCapturer.ImageCapturer.prototype.uploadImageBlob = function (a) {
  var b = new module$exports$gdocs$TitleComputer.TitleComputer(
    module$exports$gdocs$Constants.global.MAX_GENERATED_TITLE_LEN,
    module$exports$gdocs$Constants.global.MAX_SUFFIX_LEN,
    !0
  );
  this.setFilename(b.createTitleFromText(this.getFilename(), module$exports$gdocs$Constants.MimeType.PNG));
  this.uploadBlob(a, module$exports$gdocs$Constants.MimeType.PNG);
};
var module$exports$gdocs$ImageEntireCapturer = {
  ImageEntireCapturer: function (a, b) {
    module$exports$gdocs$ImageCapturer.ImageCapturer.call(this, a, b);
    var c = this;
    b = 1 < goog.global.devicePixelRatio ? 38 : 19;
    this.animatedBrowserIcon_ = new module$exports$gdocs$AnimatedBrowserIcon.AnimatedBrowserIcon(
      "images/driveicon" + b + ".png",
      b,
      new module$exports$gdocs$AnimatedBrowserIconParams.AnimatedBrowserIconParams()
    );
    this.canvas_ = new OffscreenCanvas(0, 0);
    this.context_ = this.canvas_.getContext("2d");
    this.ratio_ = window.devicePixelRatio;
    this.columnNum_ = this.rowNum_ = this.visibleHeight_ = this.visibleWidth_ = 0;
    this.captureVisibleAndContinue_ = (0, goog.functions.throttle)(
      function () {
        chrome.tabs.captureVisibleTab(a.windowId, { format: "png" }, function (d) {
          return void c.stitchImageAndContinue_(d);
        });
      },
      1e3 / (chrome.tabs.MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND || 2) + 50
    );
  }
};
$jscomp.inherits(module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer, module$exports$gdocs$ImageCapturer.ImageCapturer);
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.startCapture = function () {
  var a = this.getTab();
  a && a.id
    ? (chrome.scripting.executeScript(
        { files: ["js/contentscriptscroll.js"], target: { tabId: a.id }, injectImmediately: !0 },
        this.initiateEntireCapture_.bind(this)
      ),
      this.animatedBrowserIcon_.start())
    : this.fatalLastError_();
};
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.initiateEntireCapture_ = function () {
  this.sendMessage_({ msg: "init" }, this.processResponse_.bind(this));
};
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.processResponse_ = function (a) {
  var b = this;
  if (a)
    switch (
      (module$contents$gdlog_fine("ImageEntireCapturer.processResponse", "processResponse_:" + module$contents$gdlog_prettyPrint(a)), a.msg)
    ) {
      case "initialized":
        this.canvas_.width = a.bodyScrollWidth;
        this.canvas_.height = a.bodyScrollHeight;
        this.canvas_
          .convertToBlob()
          .then(function (c) {
            b.visibleWidth_ = a.visibleWidth;
            b.visibleHeight_ = a.visibleHeight;
            b.rowNum_ = 0;
            b.columnNum_ = 0;
            b.startStitch_();
          })
          .catch(function (c) {
            c instanceof DOMException && c.message.match('size of "OffscreenCanvas" is zero')
              ? b.fatalCapture_(chrome.i18n.getMessage("PAGE_SIZE_NOT_SUPPORTED", b.canvas_.width + "x" + b.canvas_.height))
              : b.fatalCapture_(chrome.i18n.getMessage("IMAGE_CAPTURE_FAILED"));
          });
        break;
      case "scrollToDone":
        this.startStitch_();
        break;
      case "endOfPage":
        this.animatedBrowserIcon_.stop(),
          this.canvas_
            .convertToBlob()
            .then(function (c) {
              b.uploadImageBlob(c);
            })
            .catch(function (c) {
              b.fatalCapture_(chrome.i18n.getMessage("IMAGE_CAPTURE_FAILED"));
            });
    }
  else
    module$contents$gdlog_warn(
      "ImageEntireCapturer.processResponse",
      "No response. lastError:" + module$contents$gdlog_prettyPrint(chrome.runtime.lastError)
    ),
      this.fatalLastError_();
};
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.startStitch_ = function () {
  var a = this.getTab();
  a && a.id ? chrome.tabs.update(a.id, { active: !0 }, this.captureVisibleAndContinue_.bind(this)) : this.fatalLastError_();
};
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.stitchImageAndContinue_ = function (a) {
  var b = this;
  a
    ? fetch(a)
        .then(function (c) {
          return c.blob();
        })
        .then(function (c) {
          return createImageBitmap(c);
        })
        .then(function (c) {
          return void b.handleImageOnLoad_(c);
        })
        .catch(function (c) {
          return b.fatalLastError_();
        })
    : (module$contents$gdlog_warn(
        "ImageEntireCapturer.stitchImage",
        "Capture failure dataUrl:" + a + " lastError:" + module$contents$gdlog_prettyPrint(chrome.runtime.lastError)
      ),
      this.fatalLastError_());
};
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.handleImageOnLoad_ = function (a) {
  var b = 0,
    c = 0;
  if ((this.columnNum_ + 1) * this.visibleWidth_ > this.canvas_.width) {
    var d = this.canvas_.width % this.visibleWidth_;
    b = (this.columnNum_ + 1) * this.visibleWidth_ - this.canvas_.width;
  } else d = this.visibleWidth_;
  if ((this.rowNum_ + 1) * this.visibleHeight_ > this.canvas_.height) {
    var e = this.canvas_.height % this.visibleHeight_;
    c = (this.rowNum_ + 1) * this.visibleHeight_ < this.canvas_.height ? 0 : (this.rowNum_ + 1) * this.visibleHeight_ - this.canvas_.height;
  } else e = this.visibleHeight_;
  this.drawPixelsToDips_(a, b, c, this.columnNum_ * this.visibleWidth_, this.rowNum_ * this.visibleHeight_, d, e);
  this.columnNum_++;
  if (
    this.columnNum_ * this.visibleWidth_ >= this.canvas_.width &&
    (this.rowNum_++, (this.columnNum_ = 0), this.rowNum_ * this.visibleHeight_ >= this.canvas_.height)
  ) {
    this.sendMessage_({ msg: "restore" }, this.processResponse_.bind(this));
    return;
  }
  this.sendMessage_(
    {
      msg: "scrollTo",
      x: this.columnNum_ * this.visibleWidth_,
      y: this.rowNum_ * this.visibleHeight_,
      capturePosition: this.getCornerPosition_()
    },
    this.processResponse_.bind(this)
  );
};
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.drawPixelsToDips_ = function (a, b, c, d, e, f, g) {
  if (0 == this.rowNum_ && 0 == this.columnNum_) {
    1 == this.ratio_ || (this.visibleWidth_ != a.width && this.visibleHeight_ != a.height) || (this.ratio_ = 1);
    var h = 1 / this.ratio_;
    this.context_.scale(h, h);
  }
  h = b * this.ratio_;
  var k = c * this.ratio_,
    l = d * this.ratio_,
    m = e * this.ratio_,
    n = f * this.ratio_,
    p = g * this.ratio_;
  this.context_.drawImage(a, h, k, n, p, l, m, n, p);
  module$contents$gdlog_info(
    "ImageEntireCapturer.drawPixelsToDips",
    "row:" +
      this.rowNum_ +
      " column:" +
      this.columnNum_ +
      (" visibleWidthxHeight:" + this.visibleWidth_ + "x" + this.visibleHeight_) +
      (" devicePixelRatio:" + window.devicePixelRatio + " ratio:" + this.ratio_) +
      (" imageWidthxHeight:" + a.width + "x" + a.height) +
      (" srcXxY:" + b + "x" + c) +
      (" dstXxY:" + d + "x" + e + " widthxheight:" + f + "x" + g) +
      (" pixelSrcXxY:" + h + "x" + k) +
      (" pixelDstXxY:" + l + "x" + m) +
      ("pixelWidthxHeight:" + n + "x" + p)
  );
};
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.getCornerPosition_ = function () {
  var a = (this.columnNum_ + 1) * this.visibleWidth_ >= this.canvas_.width,
    b = (this.rowNum_ + 1) * this.visibleHeight_ >= this.canvas_.height;
  return 0 == this.rowNum_ && a ? "top_right" : 0 == this.columnNum_ && b ? "bottom_left" : a && b ? "bottom_right" : "";
};
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.sendMessage_ = function (a, b) {
  var c = this.getTab();
  c && c.id
    ? (module$contents$gdlog_fine("ImageEntireCapturer.sendMessage", module$contents$gdlog_prettyPrint(a)),
      chrome.tabs.sendMessage(c.id, a, b),
      chrome.runtime.lastError &&
        (module$contents$gdlog_warn(
          "ImageEntireCapturer.sendMessage",
          "chrome.tabs.sendMessage() failed. id:" +
            c.id +
            (" lastError:" +
              module$contents$gdlog_prettyPrint(chrome.runtime.lastError) +
              "\nFailed sending message:\n" +
              module$contents$gdlog_prettyPrint(a))
        ),
        this.fatalLastError_()))
    : this.fatalLastError_();
};
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.fatalCapture_ = function (a) {
  this.animatedBrowserIcon_.stop();
  this.fatal(a);
};
module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer.prototype.fatalLastError_ = function () {
  var a;
  (null == (a = chrome.runtime.lastError) ? 0 : a.message)
    ? this.fatalCapture_(chrome.i18n.getMessage("IMAGE_CAPTURE_FAILED_REASON", chrome.runtime.lastError.message))
    : this.fatalCapture_(chrome.i18n.getMessage("IMAGE_CAPTURE_FAILED"));
};
var module$exports$gdocs$Notify = {
  Notify: function (a, b, c) {
    this.title_ = b = void 0 === b ? chrome.i18n.getMessage("CHROME_EXTENSION_NAME") : b;
    this.iconUrl_ = void 0 === c ? "images/driveicon128.png" : c;
    this.body_ = a;
  }
};
module$exports$gdocs$Notify.Notify.prototype.show = function () {
  if (chrome && chrome.notifications && chrome.notifications.create)
    chrome.notifications.create("", { type: "basic", title: this.title_, message: this.body_, iconUrl: this.iconUrl_ }, function (b) {});
  else if (goog.global.webkitNotifications && goog.global.webkitNotifications.createNotification) {
    var a = goog.global.webkitNotifications.createNotification(this.iconUrl_, this.title_, this.body_);
    (0, goog.asserts.assert)(a).show();
  } else console.log("Could not display notify message:" + this.body_);
};
var module$exports$gdocs$ImageSelectCapturer = {
  ImageSelectCapturer: function (a, b) {
    module$exports$gdocs$ImageCapturer.ImageCapturer.call(this, a, b);
    this.captureData_ = null;
  }
};
$jscomp.inherits(module$exports$gdocs$ImageSelectCapturer.ImageSelectCapturer, module$exports$gdocs$ImageCapturer.ImageCapturer);
module$exports$gdocs$ImageSelectCapturer.ImageSelectCapturer.prototype.startCapture = function () {
  var a = this,
    b = this.getTab();
  b && b.id && b.index
    ? (chrome.runtime.onMessage.addListener(this.onMessageCallback_.bind(this)),
      chrome.scripting.executeScript({ files: ["js/elementposition.js"], target: { tabId: b.id }, injectImmediately: !0 }),
      chrome.windows.getCurrent(function (c) {
        chrome.tabs.captureVisibleTab(c.id, { format: "png" }, function (d) {
          d
            ? chrome.tabs.create(
                { url: "captureselect.html", index: (0, goog.asserts.assert)(null == b ? void 0 : b.index) },
                function (e) {
                  a.captureData_ = { dataUrl: d, tabId: (0, goog.asserts.assert)(null == b ? void 0 : b.id) };
                }
              )
            : new module$exports$gdocs$Notify.Notify(chrome.i18n.getMessage("SAVE_AS_IMAGE_SELECT_FAILED")).show();
        });
      }))
    : this.fatal(chrome.i18n.getMessage("IMAGE_CAPTURE_FAILED"));
};
module$exports$gdocs$ImageSelectCapturer.ImageSelectCapturer.prototype.onMessageCallback_ = function (a, b, c) {
  switch (a.msg) {
    case "ready":
      c(this.captureData_);
      break;
    case "upload":
      this.uploadImageUri(a.dataUrl);
      break;
    default:
      module$contents$gdlog_warn("listener", "Unsupported request msg:" + a.msg);
  }
  return !1;
};
var module$exports$gdocs$PageCapturer = {
  PageCapturer: function (a, b) {
    module$exports$gdocs$Capturer.Capturer.call(this, a, chrome.i18n.getMessage("MHTML_DEFAULT_FILENAME"), !1, b);
  }
};
$jscomp.inherits(module$exports$gdocs$PageCapturer.PageCapturer, module$exports$gdocs$Capturer.Capturer);
module$exports$gdocs$PageCapturer.PageCapturer.prototype.startCapture = function () {
  var a;
  chrome.pageCapture.saveAsMHTML(
    { tabId: (0, goog.asserts.assert)(null == (a = this.getTab()) ? void 0 : a.id) },
    this.pageCapturedAsMhtml_.bind(this)
  );
};
module$exports$gdocs$PageCapturer.PageCapturer.prototype.pageCapturedAsMhtml_ = function (a) {
  if (chrome.runtime.lastError) this.fatal(chrome.i18n.getMessage("FAILURE_PAGE_CAPTURE", String(chrome.runtime.lastError)));
  else if (a) {
    var b = new FileReader();
    b.onloadend = this.onLoadEnd_.bind(this, a);
    b.readAsText(a, "utf-16");
  } else this.fatal(chrome.i18n.getMessage("EMPTY_PAGE_CAPTURE"));
};
module$exports$gdocs$PageCapturer.PageCapturer.prototype.onLoadEnd_ = function (a, b) {
  if (b.target.readyState == FileReader.DONE) {
    var c = this.getTab();
    c = c ? c.title : this.getFilename();
    (b = b.target.result.match(module$contents$gdocs$PageCapturer_SUBJECT)) && 1 < b.length && b[1] && (c = b[1]);
    (c = new module$exports$gdocs$TitleComputer.TitleComputer(
      module$exports$gdocs$Constants.global.MAX_GENERATED_TITLE_LEN,
      module$exports$gdocs$Constants.global.MAX_SUFFIX_LEN,
      !this.getAllowConvert()
    ).createTitleFromText(c, module$exports$gdocs$Constants.MimeType.MHTML)) && this.setFilename(c);
    this.uploadBlob(a, module$exports$gdocs$Constants.MimeType.MHTML);
  }
};
var module$contents$gdocs$PageCapturer_SUBJECT = /Subject:\s*(.*)/;
var module$exports$gdocs$UrlDataSource = {
  UrlDataSource: function (a) {
    module$exports$gdocs$DataSource.DataSource.call(this);
    this.urlDownloader_ = a;
  }
};
$jscomp.inherits(module$exports$gdocs$UrlDataSource.UrlDataSource, module$exports$gdocs$DataSource.DataSource);
module$exports$gdocs$UrlDataSource.UrlDataSource.prototype.getDriveDescription = function () {
  return this.urlDownloader_.getUrl() || "";
};
module$exports$gdocs$UrlDataSource.UrlDataSource.prototype.getDriveFilename = function () {
  return this.urlDownloader_.getFilename();
};
module$exports$gdocs$UrlDataSource.UrlDataSource.prototype.startWhenReady = function (a) {
  this.urlDownloader_.hasFailed() ||
    (null != this.urlDownloader_.getDownloadResults()
      ? a.startResumableUpload(this.getContentType())
      : this.urlDownloader_.setResumableUploader(a));
};
module$exports$gdocs$UrlDataSource.UrlDataSource.prototype.getContentType = function () {
  return (0, goog.asserts.assert)(this.urlDownloader_.getDownloadResults()).getContentType();
};
module$exports$gdocs$UrlDataSource.UrlDataSource.prototype.shouldConvert = function () {
  return this.urlDownloader_.getAllowConvert() && this.getContentType() in module$exports$gdocs$data.CONVERTIBLE;
};
module$exports$gdocs$UrlDataSource.UrlDataSource.prototype.getSize = function () {
  return (0, goog.asserts.assert)(this.urlDownloader_.getDownloadResults()).getBlobData().size;
};
module$exports$gdocs$UrlDataSource.UrlDataSource.prototype.getData = function (a, b) {
  return (0, goog.asserts.assert)(this.urlDownloader_.getDownloadResults()).getBlobData().slice(a, b);
};
var module$exports$gdocs$UrlUploadPage = {
  UrlUploadPage: function () {
    module$exports$gdocs$UploadPage.UploadPage.apply(this, arguments);
  }
};
$jscomp.inherits(module$exports$gdocs$UrlUploadPage.UrlUploadPage, module$exports$gdocs$UploadPage.UploadPage);
module$exports$gdocs$UrlUploadPage.UrlUploadPage.prototype.createDataSource = function () {
  var a = this.getUploadParams();
  a.getUrlDownloader().setUploadPage(this);
  return new module$exports$gdocs$UrlDataSource.UrlDataSource(a.getUrlDownloader());
};
var module$exports$gdocs$UploadPageFactory = {};
function module$contents$gdocs$UploadPageFactory_createDefaultFilenameFromMediaType(a) {
  return a.mediaType
    ? module$contents$gdocs$msgutil_createBaseFilenameFromContentType(a.mediaType)
    : chrome.i18n.getMessage("DEFAULT_FILENAME");
}
function module$contents$gdocs$UploadPageFactory_getClickUrl(a) {
  if (a.linkUrl) return a.linkUrl;
  if (a.srcUrl) return a.srcUrl;
  if (a.pageUrl) return a.pageUrl;
  if (a.frameUrl) return a.frameUrl;
  module$contents$gdlog_warn("ContextMenu.getClickUrl", "Unsupported info:" + module$contents$gdlog_prettyPrint(a));
  return "";
}
function module$contents$gdocs$UploadPageFactory_getUserImpression(a) {
  if (!a.mediaType) {
    if (a.linkUrl) return module$exports$gdocs$Constants.Impression.LINK;
    module$contents$gdlog_info("ContextMenu.getUserImpression", "No mediaType nor linkUrl");
    return module$exports$gdocs$Constants.Impression.OTHER;
  }
  switch (a.mediaType) {
    case "image":
      return module$exports$gdocs$Constants.Impression.IMAGE;
    case "video":
      return module$exports$gdocs$Constants.Impression.VIDEO;
    case "audio":
      return module$exports$gdocs$Constants.Impression.AUDIO;
    default:
      return (
        module$contents$gdlog_info("ContextMenu.getUserImpression", "Unsupported mediaType:" + a.mediaType),
        module$exports$gdocs$Constants.Impression.OTHER
      );
  }
}
function module$contents$gdocs$UploadPageFactory_createContextMenuUploadParams(a, b, c) {
  var d = module$contents$gdocs$UploadPageFactory_getUserImpression(a),
    e = module$contents$gdocs$UploadPageFactory_getClickUrl(a);
  a = module$contents$gdocs$UploadPageFactory_createDefaultFilenameFromMediaType(a);
  return module$contents$gdocs$DownloadStarter_startUrlDownload(e, b, !0, d, a, !0, c);
}
function module$contents$gdocs$UploadPageFactory_createUploadParams(a, b, c) {
  switch (a) {
    case module$exports$gdocs$Constants.ActionId.URL:
      return b.url
        ? module$contents$gdocs$DownloadStarter_startUrlDownload(
            b.url,
            null,
            !1,
            module$exports$gdocs$Constants.Impression.PAGE_ACTION_URL,
            chrome.i18n.getMessage("DEFAULT_FILENAME"),
            !0,
            c
          )
        : null;
    case module$exports$gdocs$Constants.ActionId.HTML:
    case module$exports$gdocs$Constants.ActionId.HTML_DOC:
      return (
        (a = a === module$exports$gdocs$Constants.ActionId.HTML),
        (b = new module$exports$gdocs$HtmlScrapeCapturer.HtmlScrapeCapturer(b, a, c)),
        b.startCapture(),
        new module$exports$gdocs$CaptureUploadParams.CaptureUploadParams(
          b,
          a ? module$exports$gdocs$Constants.Impression.PAGE_ACTION_HTML : module$exports$gdocs$Constants.Impression.PAGE_ACTION_DOC
        )
      );
    case module$exports$gdocs$Constants.ActionId.IMAGE_ENTIRE:
      return (
        (b = new module$exports$gdocs$ImageEntireCapturer.ImageEntireCapturer(b, c)),
        b.startCapture(),
        new module$exports$gdocs$CaptureUploadParams.CaptureUploadParams(
          b,
          module$exports$gdocs$Constants.Impression.PAGE_ACTION_CAPTURE_IMAGE_ENTIRE
        )
      );
    case module$exports$gdocs$Constants.ActionId.IMAGE_VISIBLE:
      return (
        (b = new module$exports$gdocs$ImageCapturer.ImageCapturer(b, c)),
        b.startCapture(),
        new module$exports$gdocs$CaptureUploadParams.CaptureUploadParams(
          b,
          module$exports$gdocs$Constants.Impression.PAGE_ACTION_CAPTURE_IMAGE_VISIBLE
        )
      );
    case module$exports$gdocs$Constants.ActionId.IMAGE_SELECT:
      return (
        (b = new module$exports$gdocs$ImageSelectCapturer.ImageSelectCapturer(b, c)),
        b.startCapture(),
        new module$exports$gdocs$CaptureUploadParams.CaptureUploadParams(
          b,
          module$exports$gdocs$Constants.Impression.PAGE_ACTION_CAPTURE_IMAGE_SELECT
        )
      );
    case module$exports$gdocs$Constants.ActionId.MHTML:
      return (
        (b = new module$exports$gdocs$PageCapturer.PageCapturer(b, c)),
        b.startCapture(),
        new module$exports$gdocs$CaptureUploadParams.CaptureUploadParams(
          b,
          module$exports$gdocs$Constants.Impression.PAGE_ACTION_CAPTURE_MHTML
        )
      );
    default:
      return module$contents$gdlog_warn("UploadPageBootstrap.createUploadParams", 'Unsupported feature: "' + a + '"'), null;
  }
}
module$exports$gdocs$UploadPageFactory.UploadPageFactory = function () {};
module$exports$gdocs$UploadPageFactory.UploadPageFactory.createUploadPage = function (a, b, c, d) {
  a = d
    ? module$contents$gdocs$UploadPageFactory_createContextMenuUploadParams(d, b, c)
    : module$contents$gdocs$UploadPageFactory_createUploadParams(a, b, c);
  return a instanceof module$exports$gdocs$CaptureUploadParams.CaptureUploadParams
    ? new module$exports$gdocs$CaptureUploadPage.CaptureUploadPage(new module$exports$gdocs$Client.Client(), a)
    : new module$exports$gdocs$UrlUploadPage.UrlUploadPage(new module$exports$gdocs$Client.Client(), a);
};
module$exports$gdocs$UploadPageFactory.createUploadParams = module$contents$gdocs$UploadPageFactory_createUploadParams;
module$exports$gdocs$UploadPageFactory.createContextMenuUploadParams =
  module$contents$gdocs$UploadPageFactory_createContextMenuUploadParams;
goog.collections = {};
goog.collections.maps = {};
var module$contents$goog$collections$maps_MapLike = function () {};
module$contents$goog$collections$maps_MapLike.prototype.set = function (a, b) {};
module$contents$goog$collections$maps_MapLike.prototype.get = function (a) {};
module$contents$goog$collections$maps_MapLike.prototype.keys = function () {};
module$contents$goog$collections$maps_MapLike.prototype.values = function () {};
module$contents$goog$collections$maps_MapLike.prototype.has = function (a) {};
goog.collections.maps.MapLike = module$contents$goog$collections$maps_MapLike;
function module$contents$goog$collections$maps_setAll(a, b) {
  if (b) {
    b = $jscomp.makeIterator(b);
    for (var c = b.next(); !c.done; c = b.next()) {
      var d = $jscomp.makeIterator(c.value);
      c = d.next().value;
      d = d.next().value;
      a.set(c, d);
    }
  }
}
goog.collections.maps.setAll = module$contents$goog$collections$maps_setAll;
function module$contents$goog$collections$maps_hasValue(a, b, c) {
  c = void 0 === c ? module$contents$goog$collections$maps_defaultEqualityFn : c;
  a = $jscomp.makeIterator(a.values());
  for (var d = a.next(); !d.done; d = a.next()) if (c(d.value, b)) return !0;
  return !1;
}
goog.collections.maps.hasValue = module$contents$goog$collections$maps_hasValue;
var module$contents$goog$collections$maps_defaultEqualityFn = function (a, b) {
  return a === b;
};
function module$contents$goog$collections$maps_equals(a, b, c) {
  c = void 0 === c ? module$contents$goog$collections$maps_defaultEqualityFn : c;
  if (a === b) return !0;
  if (a.size !== b.size) return !1;
  for (var d = $jscomp.makeIterator(a.keys()), e = d.next(); !e.done; e = d.next())
    if (((e = e.value), !b.has(e) || !c(a.get(e), b.get(e)))) return !1;
  return !0;
}
goog.collections.maps.equals = module$contents$goog$collections$maps_equals;
function module$contents$goog$collections$maps_transpose(a) {
  for (var b = new Map(), c = $jscomp.makeIterator(a.keys()), d = c.next(); !d.done; d = c.next()) {
    d = d.value;
    var e = a.get(d);
    b.set(e, d);
  }
  return b;
}
goog.collections.maps.transpose = module$contents$goog$collections$maps_transpose;
function module$contents$goog$collections$maps_toObject(a) {
  for (var b = {}, c = $jscomp.makeIterator(a.keys()), d = c.next(); !d.done; d = c.next()) (d = d.value), (b[d] = a.get(d));
  return b;
}
goog.collections.maps.toObject = module$contents$goog$collections$maps_toObject;
goog.structs = {};
goog.structs.getCount = function (a) {
  return a.getCount && "function" == typeof a.getCount
    ? a.getCount()
    : goog.isArrayLike(a) || "string" === typeof a
    ? a.length
    : module$contents$goog$object_getCount(a);
};
goog.structs.getValues = function (a) {
  if (a.getValues && "function" == typeof a.getValues) return a.getValues();
  if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set)) return Array.from(a.values());
  if ("string" === typeof a) return a.split("");
  if (goog.isArrayLike(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
    return b;
  }
  return module$contents$goog$object_getValues(a);
};
goog.structs.getKeys = function (a) {
  if (a.getKeys && "function" == typeof a.getKeys) return a.getKeys();
  if (!a.getValues || "function" != typeof a.getValues) {
    if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
    if (!("undefined" !== typeof Set && a instanceof Set)) {
      if (goog.isArrayLike(a) || "string" === typeof a) {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++) b.push(c);
        return b;
      }
      return module$contents$goog$object_getKeys(a);
    }
  }
};
goog.structs.contains = function (a, b) {
  return a.contains && "function" == typeof a.contains
    ? a.contains(b)
    : a.containsValue && "function" == typeof a.containsValue
    ? a.containsValue(b)
    : goog.isArrayLike(a) || "string" === typeof a
    ? module$contents$goog$array_contains(a, b)
    : module$contents$goog$object_containsValue(a, b);
};
goog.structs.isEmpty = function (a) {
  return a.isEmpty && "function" == typeof a.isEmpty
    ? a.isEmpty()
    : goog.isArrayLike(a) || "string" === typeof a
    ? 0 === a.length
    : module$contents$goog$object_isEmpty(a);
};
goog.structs.clear = function (a) {
  a.clear && "function" == typeof a.clear
    ? a.clear()
    : goog.isArrayLike(a)
    ? module$contents$goog$array_clear(a)
    : module$contents$goog$object_clear(a);
};
goog.structs.forEach = function (a, b, c) {
  if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
  else if (goog.isArrayLike(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
  else for (var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
};
goog.structs.filter = function (a, b, c) {
  if ("function" == typeof a.filter) return a.filter(b, c);
  if (goog.isArrayLike(a) || "string" === typeof a) return Array.prototype.filter.call(a, b, c);
  var d = goog.structs.getKeys(a),
    e = goog.structs.getValues(a),
    f = e.length;
  if (d) {
    var g = {};
    for (var h = 0; h < f; h++) b.call(c, e[h], d[h], a) && (g[d[h]] = e[h]);
  } else for (g = [], h = 0; h < f; h++) b.call(c, e[h], void 0, a) && g.push(e[h]);
  return g;
};
goog.structs.map = function (a, b, c) {
  if ("function" == typeof a.map) return a.map(b, c);
  if (goog.isArrayLike(a) || "string" === typeof a) return Array.prototype.map.call(a, b, c);
  var d = goog.structs.getKeys(a),
    e = goog.structs.getValues(a),
    f = e.length;
  if (d) {
    var g = {};
    for (var h = 0; h < f; h++) g[d[h]] = b.call(c, e[h], d[h], a);
  } else for (g = [], h = 0; h < f; h++) g[h] = b.call(c, e[h], void 0, a);
  return g;
};
goog.structs.some = function (a, b, c) {
  if ("function" == typeof a.some) return a.some(b, c);
  if (goog.isArrayLike(a) || "string" === typeof a) return Array.prototype.some.call(a, b, c);
  for (var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0; g < f; g++)
    if (b.call(c, e[g], d && d[g], a)) return !0;
  return !1;
};
goog.structs.every = function (a, b, c) {
  if ("function" == typeof a.every) return a.every(b, c);
  if (goog.isArrayLike(a) || "string" === typeof a) return Array.prototype.every.call(a, b, c);
  for (var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0; g < f; g++)
    if (!b.call(c, e[g], d && d[g], a)) return !1;
  return !0;
};
goog.Uri = function (a, b) {
  this.domain_ = this.userInfo_ = this.scheme_ = "";
  this.port_ = null;
  this.fragment_ = this.path_ = "";
  this.ignoreCase_ = this.isReadOnly_ = !1;
  var c;
  a instanceof goog.Uri
    ? ((this.ignoreCase_ = void 0 !== b ? b : a.getIgnoreCase()),
      this.setScheme(a.getScheme()),
      this.setUserInfo(a.getUserInfo()),
      this.setDomain(a.getDomain()),
      this.setPort(a.getPort()),
      this.setPath(a.getPath()),
      this.setQueryData(a.getQueryData().clone()),
      this.setFragment(a.getFragment()))
    : a && (c = goog.uri.utils.split(String(a)))
    ? ((this.ignoreCase_ = !!b),
      this.setScheme(c[goog.uri.utils.ComponentIndex.SCHEME] || "", !0),
      this.setUserInfo(c[goog.uri.utils.ComponentIndex.USER_INFO] || "", !0),
      this.setDomain(c[goog.uri.utils.ComponentIndex.DOMAIN] || "", !0),
      this.setPort(c[goog.uri.utils.ComponentIndex.PORT]),
      this.setPath(c[goog.uri.utils.ComponentIndex.PATH] || "", !0),
      this.setQueryData(c[goog.uri.utils.ComponentIndex.QUERY_DATA] || "", !0),
      this.setFragment(c[goog.uri.utils.ComponentIndex.FRAGMENT] || "", !0))
    : ((this.ignoreCase_ = !!b), (this.queryData_ = new goog.Uri.QueryData(null, this.ignoreCase_)));
};
goog.Uri.RANDOM_PARAM = goog.uri.utils.StandardQueryParam.RANDOM;
goog.Uri.prototype.toString = function () {
  var a = [],
    b = this.getScheme();
  b && a.push(goog.Uri.encodeSpecialChars_(b, goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), ":");
  var c = this.getDomain();
  if (c || "file" == b)
    a.push("//"),
      (b = this.getUserInfo()) && a.push(goog.Uri.encodeSpecialChars_(b, goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), "@"),
      a.push(goog.Uri.removeDoubleEncoding_(goog.string.urlEncode(c))),
      (c = this.getPort()),
      null != c && a.push(":", String(c));
  if ((c = this.getPath()))
    this.hasDomain() && "/" != c.charAt(0) && a.push("/"),
      a.push(
        goog.Uri.encodeSpecialChars_(
          c,
          "/" == c.charAt(0) ? goog.Uri.reDisallowedInAbsolutePath_ : goog.Uri.reDisallowedInRelativePath_,
          !0
        )
      );
  (c = this.getEncodedQuery()) && a.push("?", c);
  (c = this.getFragment()) && a.push("#", goog.Uri.encodeSpecialChars_(c, goog.Uri.reDisallowedInFragment_));
  return a.join("");
};
goog.Uri.prototype.resolve = function (a) {
  var b = this.clone(),
    c = a.hasScheme();
  c ? b.setScheme(a.getScheme()) : (c = a.hasUserInfo());
  c ? b.setUserInfo(a.getUserInfo()) : (c = a.hasDomain());
  c ? b.setDomain(a.getDomain()) : (c = a.hasPort());
  var d = a.getPath();
  if (c) b.setPort(a.getPort());
  else if ((c = a.hasPath())) {
    if ("/" != d.charAt(0))
      if (this.hasDomain() && !this.hasPath()) d = "/" + d;
      else {
        var e = b.getPath().lastIndexOf("/");
        -1 != e && (d = b.getPath().slice(0, e + 1) + d);
      }
    d = goog.Uri.removeDotSegments(d);
  }
  c ? b.setPath(d) : (c = a.hasQuery());
  c ? b.setQueryData(a.getQueryData().clone()) : (c = a.hasFragment());
  c && b.setFragment(a.getFragment());
  return b;
};
goog.Uri.prototype.clone = function () {
  return new goog.Uri(this);
};
goog.Uri.prototype.getScheme = function () {
  return this.scheme_;
};
goog.Uri.prototype.setScheme = function (a, b) {
  this.enforceReadOnly();
  if ((this.scheme_ = b ? goog.Uri.decodeOrEmpty_(a, !0) : a)) this.scheme_ = this.scheme_.replace(/:$/, "");
  return this;
};
goog.Uri.prototype.hasScheme = function () {
  return !!this.scheme_;
};
goog.Uri.prototype.getUserInfo = function () {
  return this.userInfo_;
};
goog.Uri.prototype.setUserInfo = function (a, b) {
  this.enforceReadOnly();
  this.userInfo_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this;
};
goog.Uri.prototype.hasUserInfo = function () {
  return !!this.userInfo_;
};
goog.Uri.prototype.getDomain = function () {
  return this.domain_;
};
goog.Uri.prototype.setDomain = function (a, b) {
  this.enforceReadOnly();
  this.domain_ = b ? goog.Uri.decodeOrEmpty_(a, !0) : a;
  return this;
};
goog.Uri.prototype.hasDomain = function () {
  return !!this.domain_;
};
goog.Uri.prototype.getPort = function () {
  return this.port_;
};
goog.Uri.prototype.setPort = function (a) {
  this.enforceReadOnly();
  if (a) {
    a = Number(a);
    if (isNaN(a) || 0 > a) throw Error("Bad port number " + a);
    this.port_ = a;
  } else this.port_ = null;
  return this;
};
goog.Uri.prototype.hasPort = function () {
  return null != this.port_;
};
goog.Uri.prototype.getPath = function () {
  return this.path_;
};
goog.Uri.prototype.setPath = function (a, b) {
  this.enforceReadOnly();
  this.path_ = b ? goog.Uri.decodeOrEmpty_(a, !0) : a;
  return this;
};
goog.Uri.prototype.hasPath = function () {
  return !!this.path_;
};
goog.Uri.prototype.hasQuery = function () {
  return "" !== this.queryData_.toString();
};
goog.Uri.prototype.setQueryData = function (a, b) {
  this.enforceReadOnly();
  a instanceof goog.Uri.QueryData
    ? ((this.queryData_ = a), this.queryData_.setIgnoreCase(this.ignoreCase_))
    : (b || (a = goog.Uri.encodeSpecialChars_(a, goog.Uri.reDisallowedInQuery_)),
      (this.queryData_ = new goog.Uri.QueryData(a, this.ignoreCase_)));
  return this;
};
goog.Uri.prototype.setQuery = function (a, b) {
  return this.setQueryData(a, b);
};
goog.Uri.prototype.getEncodedQuery = function () {
  return this.queryData_.toString();
};
goog.Uri.prototype.getDecodedQuery = function () {
  return this.queryData_.toDecodedString();
};
goog.Uri.prototype.getQueryData = function () {
  return this.queryData_;
};
goog.Uri.prototype.getQuery = function () {
  return this.getEncodedQuery();
};
goog.Uri.prototype.setParameterValue = function (a, b) {
  this.enforceReadOnly();
  this.queryData_.set(a, b);
  return this;
};
goog.Uri.prototype.setParameterValues = function (a, b) {
  this.enforceReadOnly();
  Array.isArray(b) || (b = [String(b)]);
  this.queryData_.setValues(a, b);
  return this;
};
goog.Uri.prototype.getParameterValues = function (a) {
  return this.queryData_.getValues(a);
};
goog.Uri.prototype.getParameterValue = function (a) {
  return this.queryData_.get(a);
};
goog.Uri.prototype.getFragment = function () {
  return this.fragment_;
};
goog.Uri.prototype.setFragment = function (a, b) {
  this.enforceReadOnly();
  this.fragment_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this;
};
goog.Uri.prototype.hasFragment = function () {
  return !!this.fragment_;
};
goog.Uri.prototype.hasSameDomainAs = function (a) {
  return (
    ((!this.hasDomain() && !a.hasDomain()) || this.getDomain() == a.getDomain()) &&
    ((!this.hasPort() && !a.hasPort()) || this.getPort() == a.getPort())
  );
};
goog.Uri.prototype.makeUnique = function () {
  this.enforceReadOnly();
  this.setParameterValue(goog.Uri.RANDOM_PARAM, goog.string.getRandomString());
  return this;
};
goog.Uri.prototype.removeParameter = function (a) {
  this.enforceReadOnly();
  this.queryData_.remove(a);
  return this;
};
goog.Uri.prototype.setReadOnly = function (a) {
  this.isReadOnly_ = a;
  return this;
};
goog.Uri.prototype.isReadOnly = function () {
  return this.isReadOnly_;
};
goog.Uri.prototype.enforceReadOnly = function () {
  if (this.isReadOnly_) throw Error("Tried to modify a read-only Uri");
};
goog.Uri.prototype.setIgnoreCase = function (a) {
  this.ignoreCase_ = a;
  this.queryData_ && this.queryData_.setIgnoreCase(a);
  return this;
};
goog.Uri.prototype.getIgnoreCase = function () {
  return this.ignoreCase_;
};
goog.Uri.parse = function (a, b) {
  return a instanceof goog.Uri ? a.clone() : new goog.Uri(a, b);
};
goog.Uri.create = function (a, b, c, d, e, f, g, h) {
  h = new goog.Uri(null, h);
  a && h.setScheme(a);
  b && h.setUserInfo(b);
  c && h.setDomain(c);
  d && h.setPort(d);
  e && h.setPath(e);
  f && h.setQueryData(f);
  g && h.setFragment(g);
  return h;
};
goog.Uri.resolve = function (a, b) {
  a instanceof goog.Uri || (a = goog.Uri.parse(a));
  b instanceof goog.Uri || (b = goog.Uri.parse(b));
  return a.resolve(b);
};
goog.Uri.removeDotSegments = function (a) {
  if (".." == a || "." == a) return "";
  if (goog.string.contains(a, "./") || goog.string.contains(a, "/.")) {
    var b = goog.string.startsWith(a, "/");
    a = a.split("/");
    for (var c = [], d = 0; d < a.length; ) {
      var e = a[d++];
      "." == e
        ? b && d == a.length && c.push("")
        : ".." == e
        ? ((1 < c.length || (1 == c.length && "" != c[0])) && c.pop(), b && d == a.length && c.push(""))
        : (c.push(e), (b = !0));
    }
    return c.join("/");
  }
  return a;
};
goog.Uri.decodeOrEmpty_ = function (a, b) {
  return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
};
goog.Uri.encodeSpecialChars_ = function (a, b, c) {
  return "string" === typeof a
    ? ((a = encodeURI(a).replace(b, goog.Uri.encodeChar_)), c && (a = goog.Uri.removeDoubleEncoding_(a)), a)
    : null;
};
goog.Uri.encodeChar_ = function (a) {
  a = a.charCodeAt(0);
  return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
};
goog.Uri.removeDoubleEncoding_ = function (a) {
  return a.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
};
goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
goog.Uri.reDisallowedInRelativePath_ = /[#\?:]/g;
goog.Uri.reDisallowedInAbsolutePath_ = /[#\?]/g;
goog.Uri.reDisallowedInQuery_ = /[#\?@]/g;
goog.Uri.reDisallowedInFragment_ = /#/g;
goog.Uri.haveSameDomain = function (a, b) {
  a = goog.uri.utils.split(a);
  b = goog.uri.utils.split(b);
  return (
    a[goog.uri.utils.ComponentIndex.DOMAIN] == b[goog.uri.utils.ComponentIndex.DOMAIN] &&
    a[goog.uri.utils.ComponentIndex.PORT] == b[goog.uri.utils.ComponentIndex.PORT]
  );
};
goog.Uri.QueryData = function (a, b) {
  this.count_ = this.keyMap_ = null;
  this.encodedQuery_ = a || null;
  this.ignoreCase_ = !!b;
};
goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function () {
  if (!this.keyMap_ && ((this.keyMap_ = new Map()), (this.count_ = 0), this.encodedQuery_)) {
    var a = this;
    goog.uri.utils.parseQueryData(this.encodedQuery_, function (b, c) {
      a.add(goog.string.urlDecode(b), c);
    });
  }
};
goog.Uri.QueryData.createFromMap = function (a, b) {
  var c = goog.structs.getKeys(a);
  if ("undefined" == typeof c) throw Error("Keys are undefined");
  b = new goog.Uri.QueryData(null, b);
  a = goog.structs.getValues(a);
  for (var d = 0; d < c.length; d++) {
    var e = c[d],
      f = a[d];
    Array.isArray(f) ? b.setValues(e, f) : b.add(e, f);
  }
  return b;
};
goog.Uri.QueryData.createFromKeysValues = function (a, b, c) {
  if (a.length != b.length) throw Error("Mismatched lengths for keys/values");
  c = new goog.Uri.QueryData(null, c);
  for (var d = 0; d < a.length; d++) c.add(a[d], b[d]);
  return c;
};
goog.Uri.QueryData.prototype.getCount = function () {
  this.ensureKeyMapInitialized_();
  return this.count_;
};
goog.Uri.QueryData.prototype.add = function (a, b) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  a = this.getKeyName_(a);
  var c = this.keyMap_.get(a);
  c || this.keyMap_.set(a, (c = []));
  c.push(b);
  this.count_ = goog.asserts.assertNumber(this.count_) + 1;
  return this;
};
goog.Uri.QueryData.prototype.remove = function (a) {
  this.ensureKeyMapInitialized_();
  a = this.getKeyName_(a);
  return this.keyMap_.has(a)
    ? (this.invalidateCache_(), (this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get(a).length), this.keyMap_.delete(a))
    : !1;
};
goog.Uri.QueryData.prototype.clear = function () {
  this.invalidateCache_();
  this.keyMap_ = null;
  this.count_ = 0;
};
goog.Uri.QueryData.prototype.isEmpty = function () {
  this.ensureKeyMapInitialized_();
  return 0 == this.count_;
};
goog.Uri.QueryData.prototype.containsKey = function (a) {
  this.ensureKeyMapInitialized_();
  a = this.getKeyName_(a);
  return this.keyMap_.has(a);
};
goog.Uri.QueryData.prototype.containsValue = function (a) {
  var b = this.getValues();
  return module$contents$goog$array_contains(b, a);
};
goog.Uri.QueryData.prototype.forEach = function (a, b) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function (c, d) {
    c.forEach(function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};
goog.Uri.QueryData.prototype.getKeys = function () {
  this.ensureKeyMapInitialized_();
  for (var a = Array.from(this.keyMap_.values()), b = Array.from(this.keyMap_.keys()), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
  return c;
};
goog.Uri.QueryData.prototype.getValues = function (a) {
  this.ensureKeyMapInitialized_();
  var b = [];
  if ("string" === typeof a) this.containsKey(a) && (b = b.concat(this.keyMap_.get(this.getKeyName_(a))));
  else {
    a = Array.from(this.keyMap_.values());
    for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
  }
  return b;
};
goog.Uri.QueryData.prototype.set = function (a, b) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  a = this.getKeyName_(a);
  this.containsKey(a) && (this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get(a).length);
  this.keyMap_.set(a, [b]);
  this.count_ = goog.asserts.assertNumber(this.count_) + 1;
  return this;
};
goog.Uri.QueryData.prototype.get = function (a, b) {
  if (!a) return b;
  a = this.getValues(a);
  return 0 < a.length ? String(a[0]) : b;
};
goog.Uri.QueryData.prototype.setValues = function (a, b) {
  this.remove(a);
  0 < b.length &&
    (this.invalidateCache_(),
    this.keyMap_.set(this.getKeyName_(a), module$contents$goog$array_toArray(b)),
    (this.count_ = goog.asserts.assertNumber(this.count_) + b.length));
};
goog.Uri.QueryData.prototype.toString = function () {
  if (this.encodedQuery_) return this.encodedQuery_;
  if (!this.keyMap_) return "";
  for (var a = [], b = Array.from(this.keyMap_.keys()), c = 0; c < b.length; c++) {
    var d = b[c],
      e = goog.string.urlEncode(d);
    d = this.getValues(d);
    for (var f = 0; f < d.length; f++) {
      var g = e;
      "" !== d[f] && (g += "=" + goog.string.urlEncode(d[f]));
      a.push(g);
    }
  }
  return (this.encodedQuery_ = a.join("&"));
};
goog.Uri.QueryData.prototype.toDecodedString = function () {
  return goog.Uri.decodeOrEmpty_(this.toString());
};
goog.Uri.QueryData.prototype.invalidateCache_ = function () {
  this.encodedQuery_ = null;
};
goog.Uri.QueryData.prototype.filterKeys = function (a) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function (b, c) {
    module$contents$goog$array_contains(a, c) || this.remove(c);
  }, this);
  return this;
};
goog.Uri.QueryData.prototype.clone = function () {
  var a = new goog.Uri.QueryData();
  a.encodedQuery_ = this.encodedQuery_;
  this.keyMap_ && ((a.keyMap_ = new Map(this.keyMap_)), (a.count_ = this.count_));
  return a;
};
goog.Uri.QueryData.prototype.getKeyName_ = function (a) {
  a = String(a);
  this.ignoreCase_ && (a = a.toLowerCase());
  return a;
};
goog.Uri.QueryData.prototype.setIgnoreCase = function (a) {
  a &&
    !this.ignoreCase_ &&
    (this.ensureKeyMapInitialized_(),
    this.invalidateCache_(),
    this.keyMap_.forEach(function (b, c) {
      var d = c.toLowerCase();
      c != d && (this.remove(c), this.setValues(d, b));
    }, this));
  this.ignoreCase_ = a;
};
goog.Uri.QueryData.prototype.extend = function (a) {
  for (var b = 0; b < arguments.length; b++)
    goog.structs.forEach(
      arguments[b],
      function (c, d) {
        this.add(d, c);
      },
      this
    );
};
var module$exports$gdocs$UploadPageInitParams = {
  UploadPageInitParams: function (a, b, c) {
    this.actionId = a;
    this.tabId = b;
    this.clickData = c;
  }
};
module$exports$gdocs$UploadPageInitParams.UploadPageInitParams.get = function (a) {
  return new Promise(function (b, c) {
    var d = new goog.Uri(a),
      e = d.getParameterValue(module$exports$gdocs$Constants.UploadPageParams.ACTION_ID);
    if (void 0 === e) c(Error("No action id in the initialization params"));
    else {
      for (
        var f = null, g = $jscomp.makeIterator(Object.entries(module$exports$gdocs$Constants.ActionId)), h = g.next();
        !h.done;
        h = g.next()
      )
        if (((h = $jscomp.makeIterator(h.value)), h.next(), (h = h.next().value), h === e)) {
          f = h;
          break;
        }
      if (null === f) c(Error("Unrecognized action id in the initialization params"));
      else {
        var k = parseInt(d.getParameterValue(module$exports$gdocs$Constants.UploadPageParams.TAB_ID), 10);
        isNaN(k) && c(Error("Unrecognized tab id in the initialization params"));
        void 0 == d.getParameterValue(module$exports$gdocs$Constants.UploadPageParams.IS_CONTEXT_CLICK_UPLOAD)
          ? b(new module$exports$gdocs$UploadPageInitParams.UploadPageInitParams(f, k))
          : chrome.runtime.sendMessage("getOnClickData", function (l) {
              l
                ? b(new module$exports$gdocs$UploadPageInitParams.UploadPageInitParams(f, k, l))
                : c(Error("Error getting click data. Last error: " + chrome.runtime.lastError));
            });
      }
    }
  });
};
var module$exports$gdocs$UserId = {
  UserId: function (a) {
    this.docList_ = new module$exports$gdocs$DocList.DocList(a);
    this.currentId_ = "";
    this.seenGoogle_ = !1;
  }
};
module$exports$gdocs$UserId.UserId.prototype.getUserIdStr = function (a) {
  this.currentId_ ? a(this.currentId_) : chrome.identity.getAuthToken({ interactive: !1 }, this.userIdAuth_.bind(this, a));
};
module$exports$gdocs$UserId.UserId.prototype.isGoogle = function () {
  return this.seenGoogle_;
};
module$exports$gdocs$UserId.UserId.prototype.userIdAuth_ = function (a, b) {
  chrome.runtime.lastError || !b
    ? a("")
    : this.docList_.loadMetadata(this.metadataCallback_.bind(this, a), this.metadataFailure_.bind(this, a));
};
module$exports$gdocs$UserId.UserId.prototype.metadataCallback_ = function (a, b) {
  this.endsWith_(b, module$contents$gdocs$UserId_GOOGLE_LC_SUFFIX) && (this.seenGoogle_ = !0);
  this.currentId_ = b;
  a(this.currentId_);
};
module$exports$gdocs$UserId.UserId.prototype.metadataFailure_ = function (a, b) {
  module$contents$gdlog_warn("UserId", "Failure accessing metadata:" + b);
  a("");
};
module$exports$gdocs$UserId.UserId.prototype.endsWith_ = function (a, b) {
  var c = a.length - b.length;
  return 0 > c ? !1 : -1 != a.toLowerCase().indexOf(b, c);
};
goog.exportProperty(module$exports$gdocs$UserId.UserId.prototype, "isGoogle", module$exports$gdocs$UserId.UserId.prototype.isGoogle);
goog.exportProperty(
  module$exports$gdocs$UserId.UserId.prototype,
  "getUserIdStr",
  module$exports$gdocs$UserId.UserId.prototype.getUserIdStr
);
var module$contents$gdocs$UserId_GOOGLE_LC_SUFFIX = "@google.com";
var module$exports$gdocs$uploadPageBootstrap = {};
goog.global.window.addEventListener(
  "load",
  function () {
    module$exports$gdocs$UploadPageInitParams.UploadPageInitParams.get(goog.global.location.href)
      .then(function (a) {
        var b = a.actionId,
          c = a.clickData;
        chrome.tabs.get(a.tabId, function (d) {
          module$exports$gdocs$Options.Options.getInstance().then(function (e) {
            module$exports$gdocs$UploadPageFactory.UploadPageFactory.createUploadPage(b, d, e, c).startLoading(
              e,
              new module$exports$gdocs$UserId.UserId(new module$exports$gdocs$Client.Client())
            );
          });
        });
      })
      .catch(function (a) {});
  },
  !1
);
