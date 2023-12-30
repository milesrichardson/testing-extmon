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
$jscomp.arrayIteratorImpl = function (a) {
  var b = 0;
  return function () {
    return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (a) {
  return { next: $jscomp.arrayIteratorImpl(a) };
};
$jscomp.makeIterator = function (a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : $jscomp.arrayIterator(a);
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
  for (var g = 0; g < e.length - 1; g++) {
    var f = e[g];
    if (!(f in d)) return;
    d = d[f];
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
  } catch (g) {
    return (this.context_.yieldAllIterator_ = null), this.context_.throw_(g), this.nextStep_();
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
    function g(f) {
      f.done ? d(f.value) : Promise.resolve(f.value).then(b, c).then(g, e);
    }
    g(a.next());
  });
};
$jscomp.asyncExecutePromiseGeneratorFunction = function (a) {
  return $jscomp.asyncExecutePromiseGenerator(a());
};
$jscomp.asyncExecutePromiseGeneratorProgram = function (a) {
  return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill(
  "Symbol",
  function (a) {
    if (a) return a;
    var b = function (g, f) {
      this.$jscomp$symbol$id_ = g;
      $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: f });
    };
    b.prototype.toString = function () {
      return this.$jscomp$symbol$id_;
    };
    var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      d = 0,
      e = function (g) {
        if (this instanceof e) throw new TypeError("Symbol is not a constructor");
        return new b(c + (g || "") + "_" + d++, g);
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
$jscomp.polyfill(
  "Promise",
  function (a) {
    function b() {
      this.batch_ = null;
    }
    function c(f) {
      return f instanceof e
        ? f
        : new e(function (k, h) {
            k(f);
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
    b.prototype.asyncExecute = function (f) {
      if (null == this.batch_) {
        this.batch_ = [];
        var k = this;
        this.asyncExecuteFunction(function () {
          k.executeBatch_();
        });
      }
      this.batch_.push(f);
    };
    var d = $jscomp.global.setTimeout;
    b.prototype.asyncExecuteFunction = function (f) {
      d(f, 0);
    };
    b.prototype.executeBatch_ = function () {
      for (; this.batch_ && this.batch_.length; ) {
        var f = this.batch_;
        this.batch_ = [];
        for (var k = 0; k < f.length; ++k) {
          var h = f[k];
          f[k] = null;
          try {
            h();
          } catch (l) {
            this.asyncThrow_(l);
          }
        }
      }
      this.batch_ = null;
    };
    b.prototype.asyncThrow_ = function (f) {
      this.asyncExecuteFunction(function () {
        throw f;
      });
    };
    var e = function (f) {
      this.state_ = 0;
      this.result_ = void 0;
      this.onSettledCallbacks_ = [];
      this.isRejectionHandled_ = !1;
      var k = this.createResolveAndReject_();
      try {
        f(k.resolve, k.reject);
      } catch (h) {
        k.reject(h);
      }
    };
    e.prototype.createResolveAndReject_ = function () {
      function f(l) {
        return function (m) {
          h || ((h = !0), l.call(k, m));
        };
      }
      var k = this,
        h = !1;
      return { resolve: f(this.resolveTo_), reject: f(this.reject_) };
    };
    e.prototype.resolveTo_ = function (f) {
      if (f === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
      else if (f instanceof e) this.settleSameAsPromise_(f);
      else {
        a: switch (typeof f) {
          case "object":
            var k = null != f;
            break a;
          case "function":
            k = !0;
            break a;
          default:
            k = !1;
        }
        k ? this.resolveToNonPromiseObj_(f) : this.fulfill_(f);
      }
    };
    e.prototype.resolveToNonPromiseObj_ = function (f) {
      var k = void 0;
      try {
        k = f.then;
      } catch (h) {
        this.reject_(h);
        return;
      }
      "function" == typeof k ? this.settleSameAsThenable_(k, f) : this.fulfill_(f);
    };
    e.prototype.reject_ = function (f) {
      this.settle_(2, f);
    };
    e.prototype.fulfill_ = function (f) {
      this.settle_(1, f);
    };
    e.prototype.settle_ = function (f, k) {
      if (0 != this.state_) throw Error("Cannot settle(" + f + ", " + k + "): Promise already settled in state" + this.state_);
      this.state_ = f;
      this.result_ = k;
      2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
      this.executeOnSettledCallbacks_();
    };
    e.prototype.scheduleUnhandledRejectionCheck_ = function () {
      var f = this;
      d(function () {
        if (f.notifyUnhandledRejection_()) {
          var k = $jscomp.global.console;
          "undefined" !== typeof k && k.error(f.result_);
        }
      }, 1);
    };
    e.prototype.notifyUnhandledRejection_ = function () {
      if (this.isRejectionHandled_) return !1;
      var f = $jscomp.global.CustomEvent,
        k = $jscomp.global.Event,
        h = $jscomp.global.dispatchEvent;
      if ("undefined" === typeof h) return !0;
      "function" === typeof f
        ? (f = new f("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof k
        ? (f = new k("unhandledrejection", { cancelable: !0 }))
        : ((f = $jscomp.global.document.createEvent("CustomEvent")), f.initCustomEvent("unhandledrejection", !1, !0, f));
      f.promise = this;
      f.reason = this.result_;
      return h(f);
    };
    e.prototype.executeOnSettledCallbacks_ = function () {
      if (null != this.onSettledCallbacks_) {
        for (var f = 0; f < this.onSettledCallbacks_.length; ++f) g.asyncExecute(this.onSettledCallbacks_[f]);
        this.onSettledCallbacks_ = null;
      }
    };
    var g = new b();
    e.prototype.settleSameAsPromise_ = function (f) {
      var k = this.createResolveAndReject_();
      f.callWhenSettled_(k.resolve, k.reject);
    };
    e.prototype.settleSameAsThenable_ = function (f, k) {
      var h = this.createResolveAndReject_();
      try {
        f.call(k, h.resolve, h.reject);
      } catch (l) {
        h.reject(l);
      }
    };
    e.prototype.then = function (f, k) {
      function h(p, q) {
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
      this.callWhenSettled_(h(f, l), h(k, m));
      return n;
    };
    e.prototype.catch = function (f) {
      return this.then(void 0, f);
    };
    e.prototype.callWhenSettled_ = function (f, k) {
      function h() {
        switch (l.state_) {
          case 1:
            f(l.result_);
            break;
          case 2:
            k(l.result_);
            break;
          default:
            throw Error("Unexpected state: " + l.state_);
        }
      }
      var l = this;
      null == this.onSettledCallbacks_ ? g.asyncExecute(h) : this.onSettledCallbacks_.push(h);
      this.isRejectionHandled_ = !0;
    };
    e.resolve = c;
    e.reject = function (f) {
      return new e(function (k, h) {
        h(f);
      });
    };
    e.race = function (f) {
      return new e(function (k, h) {
        for (var l = $jscomp.makeIterator(f), m = l.next(); !m.done; m = l.next()) c(m.value).callWhenSettled_(k, h);
      });
    };
    e.all = function (f) {
      var k = $jscomp.makeIterator(f),
        h = k.next();
      return h.done
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
            do p.push(void 0), q++, c(h.value).callWhenSettled_(n(p.length - 1), m), (h = k.next());
            while (!h.done);
          });
    };
    return e;
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
$jscomp.owns = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
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
      if (!$jscomp.owns(l, f)) {
        var m = new c();
        $jscomp.defineProperty(l, f, { value: m });
      }
    }
    function g(l) {
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
    var f = "$jscomp_hidden_" + Math.random();
    g("freeze");
    g("preventExtensions");
    g("seal");
    var k = 0,
      h = function (l) {
        this.id_ = (k += Math.random() + 1).toString();
        if (l) {
          l = $jscomp.makeIterator(l);
          for (var m; !(m = l.next()).done; ) (m = m.value), this.set(m[0], m[1]);
        }
      };
    h.prototype.set = function (l, m) {
      if (!d(l)) throw Error("Invalid WeakMap key");
      e(l);
      if (!$jscomp.owns(l, f)) throw Error("WeakMap key fail: " + l);
      l[f][this.id_] = m;
      return this;
    };
    h.prototype.get = function (l) {
      return d(l) && $jscomp.owns(l, f) ? l[f][this.id_] : void 0;
    };
    h.prototype.has = function (l) {
      return d(l) && $jscomp.owns(l, f) && $jscomp.owns(l[f], this.id_);
    };
    h.prototype.delete = function (l) {
      return d(l) && $jscomp.owns(l, f) && $jscomp.owns(l[f], this.id_) ? delete l[f][this.id_] : !1;
    };
    return h;
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
        var h = Object.seal({ x: 4 }),
          l = new a($jscomp.makeIterator([[h, "s"]]));
        if ("s" != l.get(h) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size) return !1;
        var m = l.entries(),
          n = m.next();
        if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
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
      d = function (h) {
        this.data_ = {};
        this.head_ = f();
        this.size = 0;
        if (h) {
          h = $jscomp.makeIterator(h);
          for (var l; !(l = h.next()).done; ) (l = l.value), this.set(l[0], l[1]);
        }
      };
    d.prototype.set = function (h, l) {
      h = 0 === h ? 0 : h;
      var m = e(this, h);
      m.list || (m.list = this.data_[m.id] = []);
      m.entry
        ? (m.entry.value = l)
        : ((m.entry = { next: this.head_, previous: this.head_.previous, head: this.head_, key: h, value: l }),
          m.list.push(m.entry),
          (this.head_.previous.next = m.entry),
          (this.head_.previous = m.entry),
          this.size++);
      return this;
    };
    d.prototype.delete = function (h) {
      h = e(this, h);
      return h.entry && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this.data_[h.id],
          (h.entry.previous.next = h.entry.next),
          (h.entry.next.previous = h.entry.previous),
          (h.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    d.prototype.clear = function () {
      this.data_ = {};
      this.head_ = this.head_.previous = f();
      this.size = 0;
    };
    d.prototype.has = function (h) {
      return !!e(this, h).entry;
    };
    d.prototype.get = function (h) {
      return (h = e(this, h).entry) && h.value;
    };
    d.prototype.entries = function () {
      return g(this, function (h) {
        return [h.key, h.value];
      });
    };
    d.prototype.keys = function () {
      return g(this, function (h) {
        return h.key;
      });
    };
    d.prototype.values = function () {
      return g(this, function (h) {
        return h.value;
      });
    };
    d.prototype.forEach = function (h, l) {
      for (var m = this.entries(), n; !(n = m.next()).done; ) (n = n.value), h.call(l, n[1], n[0], this);
    };
    d.prototype[Symbol.iterator] = d.prototype.entries;
    var e = function (h, l) {
        var m = l && typeof l;
        "object" == m || "function" == m ? (c.has(l) ? (m = c.get(l)) : ((m = "" + ++k), c.set(l, m))) : (m = "p_" + l);
        var n = h.data_[m];
        if (n && $jscomp.owns(h.data_, m))
          for (h = 0; h < n.length; h++) {
            var p = n[h];
            if ((l !== l && p.key !== p.key) || l === p.key) return { id: m, list: n, index: h, entry: p };
          }
        return { id: m, list: n, index: -1, entry: void 0 };
      },
      g = function (h, l) {
        var m = h.head_;
        return $jscomp.iteratorPrototype(function () {
          if (m) {
            for (; m.head != h.head_; ) m = m.previous;
            for (; m.next != m.head; ) return (m = m.next), { done: !1, value: l(m) };
            m = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      f = function () {
        var h = {};
        return (h.previous = h.next = h.head = h);
      },
      k = 0;
    return d;
  },
  "es6",
  "es3"
);
$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));
  for (var d = a.length, e = 0; e < d; e++) {
    var g = a[e];
    if (b.call(c, g, e, a)) return { i: e, v: g };
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
  "Array.prototype.fill",
  function (a) {
    return a
      ? a
      : function (b, c, d) {
          var e = this.length || 0;
          0 > c && (c = Math.max(0, e + c));
          if (null == d || d > e) d = e;
          d = Number(d);
          0 > d && (d = Math.max(0, e + d));
          for (c = Number(c || 0); c < d; c++) this[c] = b;
          return this;
        };
  },
  "es6",
  "es3"
);
$jscomp.typedArrayFill = function (a) {
  return a ? a : Array.prototype.fill;
};
$jscomp.polyfill("Int8Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Uint8Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Uint8ClampedArray.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Int16Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Uint16Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Int32Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Uint32Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Float32Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Float64Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
var COMPILED = !0,
  goog = goog || {};
goog.global = this || self;
goog.exportPath_ = function (a, b, c, d) {
  a = a.split(".");
  d = d || goog.global;
  a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
  for (var e; a.length && (e = a.shift()); )
    if (a.length || void 0 === b) d = d[e] && d[e] !== Object.prototype[e] ? d[e] : (d[e] = {});
    else if (!c && goog.isObject(b) && goog.isObject(d[e])) for (var g in b) b.hasOwnProperty(g) && (d[e][g] = b[g]);
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
      for (var g = [], f = 0; f < e.length; f++) g.push(c(e[f]));
      return g.join("-");
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
  a.base = function (d, e, g) {
    for (var f = Array(arguments.length - 2), k = 2; k < arguments.length; k++) f[k - 2] = arguments[k];
    return b.prototype[e].apply(d, f);
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
        var g = this.getPathFromDeps_(a[e]);
        if (!g) throw Error("Unregonized namespace: " + a[e]);
        b.push(this.dependencies_[g]);
      }
      g = goog.require;
      var f = 0;
      for (e = 0; e < a.length; e++)
        g(a[e]),
          b[e].onLoad(function () {
            ++f == a.length && c();
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
          var g = b.getPathFromDeps_(e);
          if (!g) throw Error("Bad dependency path or symbol: " + e);
          if (!b.written_[g] && ((b.written_[g] = !0), (e = b.dependencies_[g]), !goog.dependencies_.written[e.relativePath])) {
            for (g = 0; g < e.requires.length; g++) goog.isProvided_(e.requires[g]) || d(e.requires[g]);
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
        var g = {
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
            for (var f = [], k = 0; k < a.loadingDeps_.length; k++) f.push(a.loadingDeps_[k]);
            return f;
          },
          setModuleState: function (f) {
            goog.moduleLoaderState_ = { type: f, moduleName: "", declareLegacyNamespace: !1 };
          },
          registerEs6ModuleExports: function (f, k, h) {
            h && (goog.loadedModules_[h] = { exports: k, type: goog.ModuleType.ES6, moduleId: h || "" });
          },
          registerGoogModuleExports: function (f, k) {
            goog.loadedModules_[f] = { exports: k, type: goog.ModuleType.GOOG, moduleId: f };
          },
          clearModuleState: function () {
            goog.moduleLoaderState_ = null;
          },
          defer: function (f) {
            if (c) throw Error("Cannot register with defer after the call to load.");
            a.defer_(d, f);
          },
          areDepsLoaded: function () {
            return a.areDepsLoaded_(d.requires);
          }
        };
        try {
          d.load(g);
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
        var d = function (k) {
          k.readyState && "complete" != k.readyState ? (k.onload = d) : (goog.Dependency.unregisterCallback_(e), a.loaded());
        };
        var e = goog.Dependency.registerCallback_(d);
        c = c ? ' nonce="' + c + '"' : "";
        var g = '<script src="' + this.path + '"' + c + (goog.Dependency.defer_ ? " defer" : "") + ' id="script-' + e + '">\x3c/script>';
        g += "<script" + c + ">";
        g = goog.Dependency.defer_
          ? g + ("document.getElementById('script-" + e + "').onload = function() {\n  goog.Dependency.callback_('" + e + "', this);\n};\n")
          : g + ("goog.Dependency.callback_('" + e + "', document.getElementById('script-" + e + "'));");
        g += "\x3c/script>";
        b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(g) : g);
      } else {
        var f = b.createElement("script");
        f.defer = goog.Dependency.defer_;
        f.async = !1;
        c && (f.nonce = c);
        f.onload = function () {
          f.onload = null;
          a.loaded();
        };
        f.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
        b.head.appendChild(f);
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
        var g = b;
        goog.Dependency.defer_ = !0;
      } else g = c;
      var f = goog.Dependency.registerCallback_(function () {
        goog.Dependency.unregisterCallback_(f);
        a.setModuleState(goog.ModuleType.ES6);
      });
      g(void 0, 'goog.Dependency.callback_("' + f + '")');
      g(this.path, void 0);
      var k = goog.Dependency.registerCallback_(function (l) {
        goog.Dependency.unregisterCallback_(k);
        a.registerEs6ModuleExports(e.path, l, goog.moduleLoaderState_.moduleName);
      });
      g(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + k + '", m)');
      var h = goog.Dependency.registerCallback_(function () {
        goog.Dependency.unregisterCallback_(h);
        a.clearModuleState();
        a.loaded();
      });
      g(void 0, 'goog.Dependency.callback_("' + h + '")');
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
        g && a.setModuleState(goog.ModuleType.ES6);
        try {
          var l = e.contents_;
          e.contents_ = null;
          goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript(l));
          if (g) var m = goog.moduleLoaderState_.moduleName;
        } finally {
          g && a.clearModuleState();
        }
        g &&
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
      var g = this.loadFlags.module == goog.ModuleType.ES6;
      this.lazyFetch_ || b();
      var f = 1 < a.pending().length;
      if (goog.Dependency.defer_ && (f || goog.isDocumentLoading_()))
        a.defer(function () {
          c();
        });
      else {
        var k = goog.global.document;
        f = goog.inHtmlDocument_() && ("ActiveXObject" in goog.global || goog.isEdge_());
        if (g && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !f) {
          goog.Dependency.defer_ = !0;
          a.pause();
          var h = k.onreadystatechange;
          k.onreadystatechange = function () {
            "interactive" == k.readyState && ((k.onreadystatechange = h), c(), a.resume());
            "function" === typeof h && h.apply(void 0, arguments);
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
    for (var g, f = 0; (g = c[f]); f++) (goog.dependencies_.nameToPath[g] = b), (goog.dependencies_.loadFlags[b] = e);
    for (f = 0; (g = d[f]); f++)
      b in goog.dependencies_.requires || (goog.dependencies_.requires[b] = {}), (goog.dependencies_.requires[b][g] = !0);
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
    var g = d;
  } else a && ((e += ": " + a), (g = b));
  a = new module$contents$goog$asserts_AssertionError("" + e, g || []);
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
goog.math = {};
goog.math.randomInt = function (a) {
  return Math.floor(Math.random() * a);
};
goog.math.uniformRandom = function (a, b) {
  return a + Math.random() * (b - a);
};
goog.math.clamp = function (a, b, c) {
  return Math.min(Math.max(a, b), c);
};
goog.math.modulo = function (a, b) {
  a %= b;
  return 0 > a * b ? a + b : a;
};
goog.math.lerp = function (a, b, c) {
  return a + c * (b - a);
};
goog.math.nearlyEquals = function (a, b, c) {
  return Math.abs(a - b) <= (c || 1e-6);
};
goog.math.standardAngle = function (a) {
  return goog.math.modulo(a, 360);
};
goog.math.standardAngleInRadians = function (a) {
  return goog.math.modulo(a, 2 * Math.PI);
};
goog.math.toRadians = function (a) {
  return (a * Math.PI) / 180;
};
goog.math.toDegrees = function (a) {
  return (180 * a) / Math.PI;
};
goog.math.angleDx = function (a, b) {
  return b * Math.cos(goog.math.toRadians(a));
};
goog.math.angleDy = function (a, b) {
  return b * Math.sin(goog.math.toRadians(a));
};
goog.math.angle = function (a, b, c, d) {
  return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(d - b, c - a)));
};
goog.math.angleDifference = function (a, b) {
  a = goog.math.standardAngle(b) - goog.math.standardAngle(a);
  180 < a ? (a -= 360) : -180 >= a && (a = 360 + a);
  return a;
};
goog.math.sign = function (a) {
  return 0 < a ? 1 : 0 > a ? -1 : a;
};
goog.math.longestCommonSubsequence = function (a, b, c, d) {
  c =
    c ||
    function (m, n) {
      return m == n;
    };
  d =
    d ||
    function (m, n) {
      return a[m];
    };
  for (var e = a.length, g = b.length, f = [], k = 0; k < e + 1; k++) (f[k] = []), (f[k][0] = 0);
  for (var h = 0; h < g + 1; h++) f[0][h] = 0;
  for (k = 1; k <= e; k++)
    for (h = 1; h <= g; h++) c(a[k - 1], b[h - 1]) ? (f[k][h] = f[k - 1][h - 1] + 1) : (f[k][h] = Math.max(f[k - 1][h], f[k][h - 1]));
  var l = [];
  k = e;
  for (h = g; 0 < k && 0 < h; ) c(a[k - 1], b[h - 1]) ? (l.unshift(d(k - 1, h - 1)), k--, h--) : f[k - 1][h] > f[k][h - 1] ? k-- : h--;
  return l;
};
goog.math.sum = function (a) {
  return Array.prototype.reduce.call(
    arguments,
    function (b, c) {
      return b + c;
    },
    0
  );
};
goog.math.average = function (a) {
  return goog.math.sum.apply(null, arguments) / arguments.length;
};
goog.math.sampleVariance = function (a) {
  var b = arguments.length;
  if (2 > b) return 0;
  var c = goog.math.average.apply(null, arguments);
  return (
    goog.math.sum.apply(
      null,
      Array.prototype.map.call(arguments, function (d) {
        return Math.pow(d - c, 2);
      })
    ) /
    (b - 1)
  );
};
goog.math.standardDeviation = function (a) {
  return Math.sqrt(goog.math.sampleVariance.apply(null, arguments));
};
goog.math.isInt = function (a) {
  return isFinite(a) && 0 == a % 1;
};
goog.math.isFiniteNumber = function (a) {
  return isFinite(a);
};
goog.math.isNegativeZero = function (a) {
  return 0 == a && 0 > 1 / a;
};
goog.math.log10Floor = function (a) {
  if (0 < a) {
    var b = Math.round(Math.log(a) * Math.LOG10E);
    return b - (parseFloat("1e" + b) > a ? 1 : 0);
  }
  return 0 == a ? -Infinity : NaN;
};
goog.math.safeFloor = function (a, b) {
  goog.asserts.assert(void 0 === b || 0 < b);
  return Math.floor(a + (b || 2e-15));
};
goog.math.safeCeil = function (a, b) {
  goog.asserts.assert(void 0 === b || 0 < b);
  return Math.ceil(a - (b || 2e-15));
};
var module$exports$gdocs$RectUtil = {};
function module$contents$gdocs$RectUtil_rectFromCoordinates(a, b, c, d, e, g) {
  var f = goog.math.clamp(Math.min(a, c), 0, e),
    k = goog.math.clamp(Math.min(b, d), 0, g);
  a = goog.math.clamp(Math.max(a, c), 0, e);
  b = goog.math.clamp(Math.max(b, d), 0, g);
  return { x: f, y: k, width: a - f, height: b - k };
}
module$exports$gdocs$RectUtil.Rect = {};
module$exports$gdocs$RectUtil.rectFromCoordinates = module$contents$gdocs$RectUtil_rectFromCoordinates;
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
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a);
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
        for (var d = a.length, e = [], g = 0, f = "string" === typeof a ? a.split("") : a, k = 0; k < d; k++)
          if (k in f) {
            var h = f[k];
            b.call(c, h, k, a) && (e[g++] = h);
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
        for (var d = a.length, e = Array(d), g = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
          f in g && (e[f] = b.call(c, g[f], f, a));
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
        module$contents$goog$array_forEach(a, function (g, f) {
          e = b.call(d, e, g, f, a);
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
        module$contents$goog$array_forEachRight(a, function (g, f) {
          e = b.call(d, e, g, f, a);
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
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++)
          if (g in e && b.call(c, e[g], g, a)) return !0;
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
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++)
          if (g in e && !b.call(c, e[g], g, a)) return !1;
        return !0;
      };
goog.array.every = module$contents$goog$array_every;
function module$contents$goog$array_count(a, b, c) {
  var d = 0;
  module$contents$goog$array_forEach(
    a,
    function (e, g, f) {
      b.call(c, e, g, f) && ++d;
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
  for (var d = a.length, e = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) if (g in e && b.call(c, e[g], g, a)) return g;
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
  module$contents$goog$array_forEachRight(a, function (e, g) {
    b.call(c, e, g, a) && module$contents$goog$array_removeAt(a, g) && d++;
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
        g = d.length || 0;
      a.length = e + g;
      for (var f = 0; f < g; f++) a[e + f] = d[f];
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
  var d = function (h) {
    return goog.isObject(h) ? "o" + goog.getUid(h) : (typeof h).charAt(0) + h;
  };
  c = c || d;
  for (var e = (d = 0), g = {}; e < a.length; ) {
    var f = a[e++],
      k = c(f);
    Object.prototype.hasOwnProperty.call(g, k) || ((g[k] = !0), (b[d++] = f));
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
  for (var g = 0, f = a.length, k; g < f; ) {
    var h = g + ((f - g) >>> 1);
    var l = c ? b.call(e, a[h], h, a) : b(d, a[h]);
    0 < l ? (g = h + 1) : ((f = h), (k = !l));
  }
  return k ? g : -g - 1;
}
function module$contents$goog$array_sort(a, b) {
  a.sort(b || module$contents$goog$array_defaultCompare);
}
goog.array.sort = module$contents$goog$array_sort;
function module$contents$goog$array_stableSort(a, b) {
  for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = { index: d, value: a[d] };
  var e = b || module$contents$goog$array_defaultCompare;
  module$contents$goog$array_sort(c, function (g, f) {
    return e(g.value, f.value) || g.index - f.index;
  });
  for (b = 0; b < a.length; b++) a[b] = c[b].value;
}
goog.array.stableSort = module$contents$goog$array_stableSort;
function module$contents$goog$array_sortByKey(a, b, c) {
  var d = c || module$contents$goog$array_defaultCompare;
  module$contents$goog$array_sort(a, function (e, g) {
    return d(b(e), b(g));
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
    var g = c(a[e], b[e]);
    if (0 != g) return g;
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
    var g = a[e],
      f = b.call(c, g, e, a);
    void 0 !== f && (d[f] || (d[f] = [])).push(g);
  }
  return d;
}
goog.array.bucket = module$contents$goog$array_bucket;
function module$contents$goog$array_bucketToMap(a, b) {
  for (var c = new Map(), d = 0; d < a.length; d++) {
    var e = a[d],
      g = b(e, d, a);
    if (void 0 !== g) {
      var f = c.get(g);
      f || ((f = []), c.set(g, f));
      f.push(e);
    }
  }
  return c;
}
goog.array.bucketToMap = module$contents$goog$array_bucketToMap;
function module$contents$goog$array_toObject(a, b, c) {
  var d = {};
  module$contents$goog$array_forEach(a, function (e, g) {
    d[b.call(c, e, g, a)] = e;
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
    g = a;
  c = c || 1;
  void 0 !== b && ((e = a), (g = b));
  if (0 > c * (g - e)) return [];
  if (0 < c) for (a = e; a < g; a += c) d.push(a);
  else for (a = e; a > g; a += c) d.push(a);
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
        var g = module$contents$goog$array_slice(d, e, e + 8192);
        g = module$contents$goog$array_flatten.apply(null, g);
        for (var f = 0; f < g.length; f++) b.push(g[f]);
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
    for (var e = [], g = 0; g < arguments.length; g++) e.push(arguments[g][d]);
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
  c.onerror = function (g, f, k, h, l) {
    d && d(g, f, k, h, l);
    a({ message: g, fileName: f, line: k, lineNumber: k, col: h, error: l });
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
      } catch (g) {
        e += "*** " + g + " ***";
      }
      c.push(e);
    }
  return c.join("\n");
};
goog.debug.deepExpose = function (a, b) {
  var c = [],
    d = [],
    e = {},
    g = function (f, k) {
      var h = k + "  ";
      try {
        if (void 0 === f) c.push("undefined");
        else if (null === f) c.push("NULL");
        else if ("string" === typeof f) c.push('"' + f.replace(/\n/g, "\n" + k) + '"');
        else if ("function" === typeof f) c.push(String(f).replace(/\n/g, "\n" + k));
        else if (goog.isObject(f)) {
          goog.hasUid(f) || d.push(f);
          var l = goog.getUid(f);
          if (e[l]) c.push("*** reference loop detected (id=" + l + ") ***");
          else {
            e[l] = !0;
            c.push("{");
            for (var m in f) if (b || "function" !== typeof f[m]) c.push("\n"), c.push(h), c.push(m + " = "), g(f[m], h);
            c.push("\n" + k + "}");
            delete e[l];
          }
        } else c.push(f);
      } catch (n) {
        c.push("*** " + n + " ***");
      }
    };
  g(a, "");
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
  } catch (f) {
    (d = "Not available"), (c = !0);
  }
  try {
    var e = a.fileName || a.filename || a.sourceURL || goog.global.$googDebugFname || b;
  } catch (f) {
    (e = "Not available"), (c = !0);
  }
  b = goog.debug.serializeErrorStack_(a);
  if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
    c = a.message;
    if (null == c) {
      if (a.constructor && a.constructor instanceof Function) {
        var g = a.constructor.name ? a.constructor.name : goog.debug.getFunctionName(a.constructor);
        c = 'Unknown Error of type "' + g + '"';
        if (goog.debug.CHECK_FOR_THROWN_EVENT && "Event" == g)
          try {
            c = c + ' with Event.type "' + (a.type || "") + '"';
          } catch (f) {}
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
      var g = d[e];
      switch (typeof g) {
        case "object":
          g = g ? "object" : "null";
          break;
        case "string":
          break;
        case "number":
          g = String(g);
          break;
        case "boolean":
          g = g ? "true" : "false";
          break;
        case "function":
          g = (g = goog.debug.getFunctionName(g)) ? g : "[fn]";
          break;
        default:
          g = typeof g;
      }
      40 < g.length && (g = g.slice(0, 40) + "...");
      c.push(g);
    }
    b.push(a);
    c.push(")\n");
    try {
      c.push(goog.debug.getStacktraceHelper_(a.caller, b));
    } catch (f) {
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
function module$contents$goog$dispose_dispose(a) {
  a && "function" == typeof a.dispose && a.dispose();
}
goog.dispose = module$contents$goog$dispose_dispose;
function module$contents$goog$disposeAll_disposeAll(a) {
  for (var b = 0, c = arguments.length; b < c; ++b) {
    var d = arguments[b];
    goog.isArrayLike(d) ? module$contents$goog$disposeAll_disposeAll.apply(null, d) : module$contents$goog$dispose_dispose(d);
  }
}
goog.disposeAll = module$contents$goog$disposeAll_disposeAll;
goog.disposable = {};
goog.disposable.IDisposable = function () {};
goog.Disposable = function () {
  goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF &&
    (goog.Disposable.INCLUDE_STACK_ON_CREATION && (this.creationStack = Error().stack),
    (goog.Disposable.instances_[goog.getUid(this)] = this));
  this.disposed_ = this.disposed_;
  this.onDisposeCallbacks_ = this.onDisposeCallbacks_;
};
goog.Disposable.MonitoringMode = { OFF: 0, PERMANENT: 1, INTERACTIVE: 2 };
goog.Disposable.MONITORING_MODE = 0;
goog.Disposable.INCLUDE_STACK_ON_CREATION = !0;
goog.Disposable.instances_ = {};
goog.Disposable.getUndisposedObjects = function () {
  var a = [],
    b;
  for (b in goog.Disposable.instances_) goog.Disposable.instances_.hasOwnProperty(b) && a.push(goog.Disposable.instances_[Number(b)]);
  return a;
};
goog.Disposable.clearUndisposedObjects = function () {
  goog.Disposable.instances_ = {};
};
goog.Disposable.prototype.disposed_ = !1;
goog.Disposable.prototype.isDisposed = function () {
  return this.disposed_;
};
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose = function () {
  if (
    !this.disposed_ &&
    ((this.disposed_ = !0), this.disposeInternal(), goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF)
  ) {
    var a = goog.getUid(this);
    if (goog.Disposable.MONITORING_MODE == goog.Disposable.MonitoringMode.PERMANENT && !goog.Disposable.instances_.hasOwnProperty(a))
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    if (
      goog.Disposable.MONITORING_MODE != goog.Disposable.MonitoringMode.OFF &&
      this.onDisposeCallbacks_ &&
      0 < this.onDisposeCallbacks_.length
    )
      throw Error(
        this +
          " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
      );
    delete goog.Disposable.instances_[a];
  }
};
goog.Disposable.prototype.registerDisposable = function (a) {
  this.addOnDisposeCallback(goog.partial(module$contents$goog$dispose_dispose, a));
};
goog.Disposable.prototype.addOnDisposeCallback = function (a, b) {
  this.disposed_
    ? void 0 !== b
      ? a.call(b)
      : a()
    : (this.onDisposeCallbacks_ || (this.onDisposeCallbacks_ = []), this.onDisposeCallbacks_.push(void 0 !== b ? goog.bind(a, b) : a));
};
goog.Disposable.prototype.disposeInternal = function () {
  if (this.onDisposeCallbacks_) for (; this.onDisposeCallbacks_.length; ) this.onDisposeCallbacks_.shift()();
};
goog.Disposable.isDisposed = function (a) {
  return a && "function" == typeof a.isDisposed ? a.isDisposed() : !1;
};
goog.events = {};
goog.events.EventId = function (a) {
  this.id = a;
};
goog.events.EventId.prototype.toString = function () {
  return this.id;
};
goog.events.Event = function (a, b) {
  this.type = a instanceof goog.events.EventId ? String(a) : a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.propagationStopped_ = !1;
};
goog.events.Event.prototype.hasPropagationStopped = function () {
  return this.propagationStopped_;
};
goog.events.Event.prototype.stopPropagation = function () {
  this.propagationStopped_ = !0;
};
goog.events.Event.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
goog.events.Event.stopPropagation = function (a) {
  a.stopPropagation();
};
goog.events.Event.preventDefault = function (a) {
  a.preventDefault();
};
var module$contents$goog$events$BrowserFeature_purify = function (a) {
  return { valueOf: a }.valueOf();
};
goog.events.BrowserFeature = {
  TOUCH_ENABLED:
    "ontouchstart" in goog.global ||
    !!(goog.global.document && document.documentElement && "ontouchstart" in document.documentElement) ||
    !(!goog.global.navigator || (!goog.global.navigator.maxTouchPoints && !goog.global.navigator.msMaxTouchPoints)),
  POINTER_EVENTS: "PointerEvent" in goog.global,
  MSPOINTER_EVENTS: !1,
  PASSIVE_EVENTS: module$contents$goog$events$BrowserFeature_purify(function () {
    if (!goog.global.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      goog.global.addEventListener("test", function () {}, b), goog.global.removeEventListener("test", function () {}, b);
    } catch (c) {}
    return a;
  })
};
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
goog.string = {};
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
    var g = a[e] || "",
      f = b[e] || "";
    do {
      g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
      f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
      if (0 == g[0].length && 0 == f[0].length) break;
      c = 0 == g[1].length ? 0 : parseInt(g[1], 10);
      var k = 0 == f[1].length ? 0 : parseInt(f[1], 10);
      c =
        goog.string.internal.compareElements_(c, k) ||
        goog.string.internal.compareElements_(0 == g[2].length, 0 == f[2].length) ||
        goog.string.internal.compareElements_(g[2], f[2]);
      g = g[3];
      f = f[3];
    } while (0 == c);
  }
  return c;
};
goog.string.internal.compareElements_ = function (a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
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
goog.labs.userAgent.engine = {};
function module$contents$goog$labs$userAgent$engine_isPresto() {
  return module$contents$goog$labs$userAgent$util_matchUserAgent("Presto");
}
function module$contents$goog$labs$userAgent$engine_isTrident() {
  return (
    module$contents$goog$labs$userAgent$util_matchUserAgent("Trident") || module$contents$goog$labs$userAgent$util_matchUserAgent("MSIE")
  );
}
function module$contents$goog$labs$userAgent$engine_isEdge() {
  return module$contents$goog$labs$userAgent$util_matchUserAgent("Edge");
}
function module$contents$goog$labs$userAgent$engine_isWebKit() {
  return (
    module$contents$goog$labs$userAgent$util_matchUserAgentIgnoreCase("WebKit") && !module$contents$goog$labs$userAgent$engine_isEdge()
  );
}
function module$contents$goog$labs$userAgent$engine_isGecko() {
  return (
    module$contents$goog$labs$userAgent$util_matchUserAgent("Gecko") &&
    !module$contents$goog$labs$userAgent$engine_isWebKit() &&
    !module$contents$goog$labs$userAgent$engine_isTrident() &&
    !module$contents$goog$labs$userAgent$engine_isEdge()
  );
}
function module$contents$goog$labs$userAgent$engine_getVersion() {
  var a = module$contents$goog$labs$userAgent$util_getUserAgent();
  if (a) {
    a = module$contents$goog$labs$userAgent$util_extractVersionTuples(a);
    var b = module$contents$goog$labs$userAgent$engine_getEngineTuple(a);
    if (b) return "Gecko" == b[0] ? module$contents$goog$labs$userAgent$engine_getVersionForKey(a, "Firefox") : b[1];
    a = a[0];
    var c;
    if (a && (c = a[2]) && (c = /Trident\/([^\s;]+)/.exec(c))) return c[1];
  }
  return "";
}
function module$contents$goog$labs$userAgent$engine_getEngineTuple(a) {
  if (!module$contents$goog$labs$userAgent$engine_isEdge()) return a[1];
  for (var b = 0; b < a.length; b++) {
    var c = a[b];
    if ("Edge" == c[0]) return c;
  }
}
function module$contents$goog$labs$userAgent$engine_isVersionOrHigher(a) {
  return 0 <= goog.string.internal.compareVersions(module$contents$goog$labs$userAgent$engine_getVersion(), a);
}
function module$contents$goog$labs$userAgent$engine_getVersionForKey(a, b) {
  return (
    ((a = module$contents$goog$array_find(a, function (c) {
      return b == c[0];
    })) &&
      a[1]) ||
    ""
  );
}
goog.labs.userAgent.engine.getVersion = module$contents$goog$labs$userAgent$engine_getVersion;
goog.labs.userAgent.engine.isEdge = module$contents$goog$labs$userAgent$engine_isEdge;
goog.labs.userAgent.engine.isGecko = module$contents$goog$labs$userAgent$engine_isGecko;
goog.labs.userAgent.engine.isPresto = module$contents$goog$labs$userAgent$engine_isPresto;
goog.labs.userAgent.engine.isTrident = module$contents$goog$labs$userAgent$engine_isTrident;
goog.labs.userAgent.engine.isVersionOrHigher = module$contents$goog$labs$userAgent$engine_isVersionOrHigher;
goog.labs.userAgent.engine.isWebKit = module$contents$goog$labs$userAgent$engine_isWebKit;
goog.labs.userAgent.platform = {};
function module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform(a) {
  if (module$contents$goog$labs$userAgent$util_ASSUME_CLIENT_HINTS_SUPPORT) return !0;
  if (!((void 0 !== a && a) || (0, goog.labs.userAgent.useClientHints)())) return !1;
  a = module$contents$goog$labs$userAgent$util_getUserAgentData();
  return !!a && !!a.platform;
}
function module$contents$goog$labs$userAgent$platform_isAndroid() {
  return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform()
    ? "Android" === module$contents$goog$labs$userAgent$util_getUserAgentData().platform
    : module$contents$goog$labs$userAgent$util_matchUserAgent("Android");
}
function module$contents$goog$labs$userAgent$platform_isIpod() {
  return module$contents$goog$labs$userAgent$util_matchUserAgent("iPod");
}
function module$contents$goog$labs$userAgent$platform_isIphone() {
  return (
    module$contents$goog$labs$userAgent$util_matchUserAgent("iPhone") &&
    !module$contents$goog$labs$userAgent$util_matchUserAgent("iPod") &&
    !module$contents$goog$labs$userAgent$util_matchUserAgent("iPad")
  );
}
function module$contents$goog$labs$userAgent$platform_isIpad() {
  return module$contents$goog$labs$userAgent$util_matchUserAgent("iPad");
}
function module$contents$goog$labs$userAgent$platform_isIos() {
  return (
    module$contents$goog$labs$userAgent$platform_isIphone() ||
    module$contents$goog$labs$userAgent$platform_isIpad() ||
    module$contents$goog$labs$userAgent$platform_isIpod()
  );
}
function module$contents$goog$labs$userAgent$platform_isMacintosh() {
  return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform()
    ? "macOS" === module$contents$goog$labs$userAgent$util_getUserAgentData().platform
    : module$contents$goog$labs$userAgent$util_matchUserAgent("Macintosh");
}
function module$contents$goog$labs$userAgent$platform_isLinux() {
  return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform()
    ? "Linux" === module$contents$goog$labs$userAgent$util_getUserAgentData().platform
    : module$contents$goog$labs$userAgent$util_matchUserAgent("Linux");
}
function module$contents$goog$labs$userAgent$platform_isWindows() {
  return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform()
    ? "Windows" === module$contents$goog$labs$userAgent$util_getUserAgentData().platform
    : module$contents$goog$labs$userAgent$util_matchUserAgent("Windows");
}
function module$contents$goog$labs$userAgent$platform_isChromeOS() {
  return module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform()
    ? "Chrome OS" === module$contents$goog$labs$userAgent$util_getUserAgentData().platform
    : module$contents$goog$labs$userAgent$util_matchUserAgent("CrOS");
}
function module$contents$goog$labs$userAgent$platform_isChromecast() {
  return module$contents$goog$labs$userAgent$util_matchUserAgent("CrKey");
}
function module$contents$goog$labs$userAgent$platform_isKaiOS() {
  return module$contents$goog$labs$userAgent$util_matchUserAgentIgnoreCase("KaiOS");
}
function module$contents$goog$labs$userAgent$platform_getVersion() {
  var a = module$contents$goog$labs$userAgent$util_getUserAgent(),
    b = "";
  module$contents$goog$labs$userAgent$platform_isWindows()
    ? ((b = /Windows (?:NT|Phone) ([0-9.]+)/), (b = (a = b.exec(a)) ? a[1] : "0.0"))
    : module$contents$goog$labs$userAgent$platform_isIos()
    ? ((b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/), (b = (a = b.exec(a)) && a[1].replace(/_/g, ".")))
    : module$contents$goog$labs$userAgent$platform_isMacintosh()
    ? ((b = /Mac OS X ([0-9_.]+)/), (b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10"))
    : module$contents$goog$labs$userAgent$platform_isKaiOS()
    ? ((b = /(?:KaiOS)\/(\S+)/i), (b = (a = b.exec(a)) && a[1]))
    : module$contents$goog$labs$userAgent$platform_isAndroid()
    ? ((b = /Android\s+([^\);]+)(\)|;)/), (b = (a = b.exec(a)) && a[1]))
    : module$contents$goog$labs$userAgent$platform_isChromeOS() &&
      ((b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/), (b = (a = b.exec(a)) && a[1]));
  return b || "";
}
function module$contents$goog$labs$userAgent$platform_isVersionOrHigher(a) {
  return 0 <= goog.string.internal.compareVersions(module$contents$goog$labs$userAgent$platform_getVersion(), a);
}
var module$contents$goog$labs$userAgent$platform_PlatformVersion = function () {
  this.preUachHasLoaded_ = !1;
};
module$contents$goog$labs$userAgent$platform_PlatformVersion.prototype.getIfLoaded = function () {
  if (module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform(!0)) {
    var a = module$exports$goog$labs$userAgent$highEntropy$highEntropyData.platformVersion.getIfLoaded();
    return void 0 === a ? void 0 : new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(a);
  }
  if (this.preUachHasLoaded_)
    return new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(
      module$contents$goog$labs$userAgent$platform_getVersion()
    );
};
module$contents$goog$labs$userAgent$platform_PlatformVersion.prototype.load = function () {
  var a = this,
    b;
  return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
    if (1 == c.nextAddress) {
      if (!module$contents$goog$labs$userAgent$platform_useUserAgentDataPlatform(!0))
        return (
          (a.preUachHasLoaded_ = !0),
          c.return(
            new module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version(
              module$contents$goog$labs$userAgent$platform_getVersion()
            )
          )
        );
      b = module$exports$goog$labs$userAgent$highEntropy$highEntropyValue.Version;
      return c.yield(module$exports$goog$labs$userAgent$highEntropy$highEntropyData.platformVersion.load(), 3);
    }
    return c.return(new b(c.yieldResult));
  });
};
module$contents$goog$labs$userAgent$platform_PlatformVersion.prototype.resetForTesting = function () {
  module$exports$goog$labs$userAgent$highEntropy$highEntropyData.platformVersion.resetForTesting();
  this.preUachHasLoaded_ = !1;
};
var module$contents$goog$labs$userAgent$platform_version = new module$contents$goog$labs$userAgent$platform_PlatformVersion();
goog.labs.userAgent.platform.getVersion = module$contents$goog$labs$userAgent$platform_getVersion;
goog.labs.userAgent.platform.isAndroid = module$contents$goog$labs$userAgent$platform_isAndroid;
goog.labs.userAgent.platform.isChromeOS = module$contents$goog$labs$userAgent$platform_isChromeOS;
goog.labs.userAgent.platform.isChromecast = module$contents$goog$labs$userAgent$platform_isChromecast;
goog.labs.userAgent.platform.isIos = module$contents$goog$labs$userAgent$platform_isIos;
goog.labs.userAgent.platform.isIpad = module$contents$goog$labs$userAgent$platform_isIpad;
goog.labs.userAgent.platform.isIphone = module$contents$goog$labs$userAgent$platform_isIphone;
goog.labs.userAgent.platform.isIpod = module$contents$goog$labs$userAgent$platform_isIpod;
goog.labs.userAgent.platform.isKaiOS = module$contents$goog$labs$userAgent$platform_isKaiOS;
goog.labs.userAgent.platform.isLinux = module$contents$goog$labs$userAgent$platform_isLinux;
goog.labs.userAgent.platform.isMacintosh = module$contents$goog$labs$userAgent$platform_isMacintosh;
goog.labs.userAgent.platform.isVersionOrHigher = module$contents$goog$labs$userAgent$platform_isVersionOrHigher;
goog.labs.userAgent.platform.isWindows = module$contents$goog$labs$userAgent$platform_isWindows;
goog.labs.userAgent.platform.version = module$contents$goog$labs$userAgent$platform_version;
goog.reflect = {};
goog.reflect.object = function (a, b) {
  return b;
};
goog.reflect.objectProperty = function (a, b) {
  return a;
};
goog.reflect.sinkValue = function (a) {
  goog.reflect.sinkValue[" "](a);
  return a;
};
goog.reflect.sinkValue[" "] = function () {};
goog.reflect.canAccessProperty = function (a, b) {
  try {
    return goog.reflect.sinkValue(a[b]), !0;
  } catch (c) {}
  return !1;
};
goog.reflect.cache = function (a, b, c, d) {
  d = d ? d(b) : b;
  return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : (a[d] = c(b));
};
goog.userAgent = {};
goog.userAgent.ASSUME_IE = !1;
goog.userAgent.ASSUME_EDGE = !1;
goog.userAgent.ASSUME_GECKO = !1;
goog.userAgent.ASSUME_WEBKIT = !1;
goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
goog.userAgent.ASSUME_OPERA = !1;
goog.userAgent.ASSUME_ANY_VERSION = !1;
goog.userAgent.BROWSER_KNOWN_ =
  goog.userAgent.ASSUME_IE ||
  goog.userAgent.ASSUME_EDGE ||
  goog.userAgent.ASSUME_GECKO ||
  goog.userAgent.ASSUME_MOBILE_WEBKIT ||
  goog.userAgent.ASSUME_WEBKIT ||
  goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function () {
  return module$contents$goog$labs$userAgent$util_getUserAgent();
};
goog.userAgent.getNavigatorTyped = function () {
  return goog.global.navigator || null;
};
goog.userAgent.getNavigator = function () {
  return goog.userAgent.getNavigatorTyped();
};
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_
  ? goog.userAgent.ASSUME_OPERA
  : module$contents$goog$labs$userAgent$browser_matchOpera();
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : module$contents$goog$labs$userAgent$browser_matchIE();
goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : module$contents$goog$labs$userAgent$engine_isEdge();
goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : module$contents$goog$labs$userAgent$engine_isGecko();
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_
  ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT
  : module$contents$goog$labs$userAgent$engine_isWebKit();
goog.userAgent.isMobile_ = function () {
  return goog.userAgent.WEBKIT && module$contents$goog$labs$userAgent$util_matchUserAgent("Mobile");
};
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function () {
  var a = goog.userAgent.getNavigatorTyped();
  return (a && a.platform) || "";
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = !1;
goog.userAgent.ASSUME_WINDOWS = !1;
goog.userAgent.ASSUME_LINUX = !1;
goog.userAgent.ASSUME_X11 = !1;
goog.userAgent.ASSUME_ANDROID = !1;
goog.userAgent.ASSUME_IPHONE = !1;
goog.userAgent.ASSUME_IPAD = !1;
goog.userAgent.ASSUME_IPOD = !1;
goog.userAgent.ASSUME_KAIOS = !1;
goog.userAgent.PLATFORM_KNOWN_ =
  goog.userAgent.ASSUME_MAC ||
  goog.userAgent.ASSUME_WINDOWS ||
  goog.userAgent.ASSUME_LINUX ||
  goog.userAgent.ASSUME_X11 ||
  goog.userAgent.ASSUME_ANDROID ||
  goog.userAgent.ASSUME_IPHONE ||
  goog.userAgent.ASSUME_IPAD ||
  goog.userAgent.ASSUME_IPOD;
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_
  ? goog.userAgent.ASSUME_MAC
  : module$contents$goog$labs$userAgent$platform_isMacintosh();
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_
  ? goog.userAgent.ASSUME_WINDOWS
  : module$contents$goog$labs$userAgent$platform_isWindows();
goog.userAgent.isLegacyLinux_ = function () {
  return module$contents$goog$labs$userAgent$platform_isLinux() || module$contents$goog$labs$userAgent$platform_isChromeOS();
};
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
goog.userAgent.isX11_ = function () {
  var a = goog.userAgent.getNavigatorTyped();
  return !!a && goog.string.internal.contains(a.appVersion || "", "X11");
};
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_
  ? goog.userAgent.ASSUME_ANDROID
  : module$contents$goog$labs$userAgent$platform_isAndroid();
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_
  ? goog.userAgent.ASSUME_IPHONE
  : module$contents$goog$labs$userAgent$platform_isIphone();
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : module$contents$goog$labs$userAgent$platform_isIpad();
goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : module$contents$goog$labs$userAgent$platform_isIpod();
goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_
  ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD
  : module$contents$goog$labs$userAgent$platform_isIos();
goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_
  ? goog.userAgent.ASSUME_KAIOS
  : module$contents$goog$labs$userAgent$platform_isKaiOS();
goog.userAgent.determineVersion_ = function () {
  var a = "",
    b = goog.userAgent.getVersionRegexResult_();
  b && (a = b ? b[1] : "");
  return goog.userAgent.IE && ((b = goog.userAgent.getDocumentMode_()), null != b && b > parseFloat(a)) ? String(b) : a;
};
goog.userAgent.getVersionRegexResult_ = function () {
  var a = goog.userAgent.getUserAgentString();
  if (goog.userAgent.GECKO) return /rv:([^\);]+)(\)|;)/.exec(a);
  if (goog.userAgent.EDGE) return /Edge\/([\d\.]+)/.exec(a);
  if (goog.userAgent.IE) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  if (goog.userAgent.WEBKIT) return /WebKit\/(\S+)/.exec(a);
  if (goog.userAgent.OPERA) return /(?:Version)[ \/]?(\S+)/.exec(a);
};
goog.userAgent.getDocumentMode_ = function () {
  var a = goog.global.document;
  return a ? a.documentMode : void 0;
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function (a, b) {
  return goog.string.internal.compareVersions(a, b);
};
goog.userAgent.isVersionOrHigherCache_ = {};
goog.userAgent.isVersionOrHigher = function (a) {
  return (
    goog.userAgent.ASSUME_ANY_VERSION ||
    goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, a, function () {
      return 0 <= goog.string.internal.compareVersions(goog.userAgent.VERSION, a);
    })
  );
};
goog.userAgent.isDocumentModeOrHigher = function (a) {
  return Number(goog.userAgent.DOCUMENT_MODE) >= a;
};
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
goog.userAgent.DOCUMENT_MODE = (function () {
  if (goog.global.document && goog.userAgent.IE) {
    var a = goog.userAgent.getDocumentMode_();
    return a ? a : parseInt(goog.userAgent.VERSION, 10) || void 0;
  }
})();
goog.events.eventTypeHelpers = {};
goog.events.eventTypeHelpers.getVendorPrefixedName = function (a) {
  return goog.userAgent.WEBKIT ? "webkit" + a : a.toLowerCase();
};
goog.events.eventTypeHelpers.getPointerFallbackEventName = function (a, b, c) {
  return goog.events.BrowserFeature.POINTER_EVENTS ? a : goog.events.BrowserFeature.MSPOINTER_EVENTS ? b : c;
};
goog.events.EventType = {
  CLICK: "click",
  RIGHTCLICK: "rightclick",
  DBLCLICK: "dblclick",
  AUXCLICK: "auxclick",
  MOUSEDOWN: "mousedown",
  MOUSEUP: "mouseup",
  MOUSEOVER: "mouseover",
  MOUSEOUT: "mouseout",
  MOUSEMOVE: "mousemove",
  MOUSEENTER: "mouseenter",
  MOUSELEAVE: "mouseleave",
  MOUSECANCEL: "mousecancel",
  SELECTIONCHANGE: "selectionchange",
  SELECTSTART: "selectstart",
  WHEEL: "wheel",
  KEYPRESS: "keypress",
  KEYDOWN: "keydown",
  KEYUP: "keyup",
  BLUR: "blur",
  FOCUS: "focus",
  DEACTIVATE: "deactivate",
  FOCUSIN: "focusin",
  FOCUSOUT: "focusout",
  CHANGE: "change",
  RESET: "reset",
  SELECT: "select",
  SUBMIT: "submit",
  INPUT: "input",
  PROPERTYCHANGE: "propertychange",
  DRAGSTART: "dragstart",
  DRAG: "drag",
  DRAGENTER: "dragenter",
  DRAGOVER: "dragover",
  DRAGLEAVE: "dragleave",
  DROP: "drop",
  DRAGEND: "dragend",
  TOUCHSTART: "touchstart",
  TOUCHMOVE: "touchmove",
  TOUCHEND: "touchend",
  TOUCHCANCEL: "touchcancel",
  BEFOREUNLOAD: "beforeunload",
  CONSOLEMESSAGE: "consolemessage",
  CONTEXTMENU: "contextmenu",
  DEVICECHANGE: "devicechange",
  DEVICEMOTION: "devicemotion",
  DEVICEORIENTATION: "deviceorientation",
  DOMCONTENTLOADED: "DOMContentLoaded",
  ERROR: "error",
  HELP: "help",
  LOAD: "load",
  LOSECAPTURE: "losecapture",
  ORIENTATIONCHANGE: "orientationchange",
  READYSTATECHANGE: "readystatechange",
  RESIZE: "resize",
  SCROLL: "scroll",
  UNLOAD: "unload",
  CANPLAY: "canplay",
  CANPLAYTHROUGH: "canplaythrough",
  DURATIONCHANGE: "durationchange",
  EMPTIED: "emptied",
  ENDED: "ended",
  LOADEDDATA: "loadeddata",
  LOADEDMETADATA: "loadedmetadata",
  PAUSE: "pause",
  PLAY: "play",
  PLAYING: "playing",
  PROGRESS: "progress",
  RATECHANGE: "ratechange",
  SEEKED: "seeked",
  SEEKING: "seeking",
  STALLED: "stalled",
  SUSPEND: "suspend",
  TIMEUPDATE: "timeupdate",
  VOLUMECHANGE: "volumechange",
  WAITING: "waiting",
  SOURCEOPEN: "sourceopen",
  SOURCEENDED: "sourceended",
  SOURCECLOSED: "sourceclosed",
  ABORT: "abort",
  UPDATE: "update",
  UPDATESTART: "updatestart",
  UPDATEEND: "updateend",
  HASHCHANGE: "hashchange",
  PAGEHIDE: "pagehide",
  PAGESHOW: "pageshow",
  POPSTATE: "popstate",
  COPY: "copy",
  PASTE: "paste",
  CUT: "cut",
  BEFORECOPY: "beforecopy",
  BEFORECUT: "beforecut",
  BEFOREPASTE: "beforepaste",
  ONLINE: "online",
  OFFLINE: "offline",
  MESSAGE: "message",
  CONNECT: "connect",
  INSTALL: "install",
  ACTIVATE: "activate",
  FETCH: "fetch",
  FOREIGNFETCH: "foreignfetch",
  MESSAGEERROR: "messageerror",
  STATECHANGE: "statechange",
  UPDATEFOUND: "updatefound",
  CONTROLLERCHANGE: "controllerchange",
  ANIMATIONSTART: goog.events.eventTypeHelpers.getVendorPrefixedName("AnimationStart"),
  ANIMATIONEND: goog.events.eventTypeHelpers.getVendorPrefixedName("AnimationEnd"),
  ANIMATIONITERATION: goog.events.eventTypeHelpers.getVendorPrefixedName("AnimationIteration"),
  TRANSITIONEND: goog.events.eventTypeHelpers.getVendorPrefixedName("TransitionEnd"),
  POINTERDOWN: "pointerdown",
  POINTERUP: "pointerup",
  POINTERCANCEL: "pointercancel",
  POINTERMOVE: "pointermove",
  POINTEROVER: "pointerover",
  POINTEROUT: "pointerout",
  POINTERENTER: "pointerenter",
  POINTERLEAVE: "pointerleave",
  GOTPOINTERCAPTURE: "gotpointercapture",
  LOSTPOINTERCAPTURE: "lostpointercapture",
  MSGESTURECHANGE: "MSGestureChange",
  MSGESTUREEND: "MSGestureEnd",
  MSGESTUREHOLD: "MSGestureHold",
  MSGESTURESTART: "MSGestureStart",
  MSGESTURETAP: "MSGestureTap",
  MSGOTPOINTERCAPTURE: "MSGotPointerCapture",
  MSINERTIASTART: "MSInertiaStart",
  MSLOSTPOINTERCAPTURE: "MSLostPointerCapture",
  MSPOINTERCANCEL: "MSPointerCancel",
  MSPOINTERDOWN: "MSPointerDown",
  MSPOINTERENTER: "MSPointerEnter",
  MSPOINTERHOVER: "MSPointerHover",
  MSPOINTERLEAVE: "MSPointerLeave",
  MSPOINTERMOVE: "MSPointerMove",
  MSPOINTEROUT: "MSPointerOut",
  MSPOINTEROVER: "MSPointerOver",
  MSPOINTERUP: "MSPointerUp",
  TEXT: "text",
  TEXTINPUT: goog.userAgent.IE ? "textinput" : "textInput",
  COMPOSITIONSTART: "compositionstart",
  COMPOSITIONUPDATE: "compositionupdate",
  COMPOSITIONEND: "compositionend",
  BEFOREINPUT: "beforeinput",
  FULLSCREENCHANGE: "fullscreenchange",
  WEBKITBEGINFULLSCREEN: "webkitbeginfullscreen",
  WEBKITENDFULLSCREEN: "webkitendfullscreen",
  EXIT: "exit",
  LOADABORT: "loadabort",
  LOADCOMMIT: "loadcommit",
  LOADREDIRECT: "loadredirect",
  LOADSTART: "loadstart",
  LOADSTOP: "loadstop",
  RESPONSIVE: "responsive",
  SIZECHANGED: "sizechanged",
  UNRESPONSIVE: "unresponsive",
  VISIBILITYCHANGE: "visibilitychange",
  STORAGE: "storage",
  DOMSUBTREEMODIFIED: "DOMSubtreeModified",
  DOMNODEINSERTED: "DOMNodeInserted",
  DOMNODEREMOVED: "DOMNodeRemoved",
  DOMNODEREMOVEDFROMDOCUMENT: "DOMNodeRemovedFromDocument",
  DOMNODEINSERTEDINTODOCUMENT: "DOMNodeInsertedIntoDocument",
  DOMATTRMODIFIED: "DOMAttrModified",
  DOMCHARACTERDATAMODIFIED: "DOMCharacterDataModified",
  BEFOREPRINT: "beforeprint",
  AFTERPRINT: "afterprint",
  BEFOREINSTALLPROMPT: "beforeinstallprompt",
  APPINSTALLED: "appinstalled",
  CANCEL: "cancel",
  FINISH: "finish",
  REMOVE: "remove"
};
goog.events.BrowserEvent = function (a, b) {
  goog.events.Event.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.platformModifierKey = !1;
  this.pointerId = 0;
  this.pointerType = "";
  this.event_ = null;
  a && this.init(a, b);
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
goog.events.BrowserEvent.USE_LAYER_XY_AS_OFFSET_XY = !1;
goog.events.BrowserEvent.MouseButton = { LEFT: 0, MIDDLE: 1, RIGHT: 2, BACK: 3, FORWARD: 4 };
goog.events.BrowserEvent.PointerType = { MOUSE: "mouse", PEN: "pen", TOUCH: "touch" };
goog.events.BrowserEvent.IEButtonMap = goog.debug.freeze([1, 4, 2]);
goog.events.BrowserEvent.IE_BUTTON_MAP = goog.events.BrowserEvent.IEButtonMap;
goog.events.BrowserEvent.IE_POINTER_TYPE_MAP = goog.debug.freeze({
  2: goog.events.BrowserEvent.PointerType.TOUCH,
  3: goog.events.BrowserEvent.PointerType.PEN,
  4: goog.events.BrowserEvent.PointerType.MOUSE
});
goog.events.BrowserEvent.prototype.init = function (a, b) {
  var c = (this.type = a.type),
    d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  (b = a.relatedTarget)
    ? goog.userAgent.GECKO && (goog.reflect.canAccessProperty(b, "nodeName") || (b = null))
    : c == goog.events.EventType.MOUSEOVER
    ? (b = a.fromElement)
    : c == goog.events.EventType.MOUSEOUT && (b = a.toElement);
  this.relatedTarget = b;
  d
    ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
      (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
      (this.screenX = d.screenX || 0),
      (this.screenY = d.screenY || 0))
    : (goog.events.BrowserEvent.USE_LAYER_XY_AS_OFFSET_XY
        ? ((this.offsetX = void 0 !== a.layerX ? a.layerX : a.offsetX), (this.offsetY = void 0 !== a.layerY ? a.layerY : a.offsetY))
        : ((this.offsetX = goog.userAgent.WEBKIT || void 0 !== a.offsetX ? a.offsetX : a.layerX),
          (this.offsetY = goog.userAgent.WEBKIT || void 0 !== a.offsetY ? a.offsetY : a.layerY)),
      (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
      (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
      (this.screenX = a.screenX || 0),
      (this.screenY = a.screenY || 0));
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.key = a.key || "";
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? a.metaKey : a.ctrlKey;
  this.pointerId = a.pointerId || 0;
  this.pointerType = goog.events.BrowserEvent.getPointerType_(a);
  this.state = a.state;
  this.event_ = a;
  a.defaultPrevented && goog.events.BrowserEvent.superClass_.preventDefault.call(this);
};
goog.events.BrowserEvent.prototype.isButton = function (a) {
  return this.event_.button == a;
};
goog.events.BrowserEvent.prototype.isMouseActionButton = function () {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.MAC && this.ctrlKey);
};
goog.events.BrowserEvent.prototype.stopPropagation = function () {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  this.event_.stopPropagation ? this.event_.stopPropagation() : (this.event_.cancelBubble = !0);
};
goog.events.BrowserEvent.prototype.preventDefault = function () {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var a = this.event_;
  a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
};
goog.events.BrowserEvent.prototype.getBrowserEvent = function () {
  return this.event_;
};
goog.events.BrowserEvent.getPointerType_ = function (a) {
  return "string" === typeof a.pointerType ? a.pointerType : goog.events.BrowserEvent.IE_POINTER_TYPE_MAP[a.pointerType] || "";
};
goog.events.KeyCodes = {
  WIN_KEY_FF_LINUX: 0,
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PLUS_SIGN: 43,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  FF_SEMICOLON: 59,
  FF_EQUALS: 61,
  FF_DASH: 173,
  FF_HASH: 163,
  FF_JP_QUOTE: 58,
  QUESTION_MARK: 63,
  AT_SIGN: 64,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SCROLL_LOCK: 145,
  FIRST_MEDIA_KEY: 166,
  LAST_MEDIA_KEY: 183,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  TILDE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  MAC_WK_CMD_LEFT: 91,
  MAC_WK_CMD_RIGHT: 93,
  WIN_IME: 229,
  VK_NONAME: 252,
  PHANTOM: 255
};
goog.events.KeyCodes.isTextModifyingKeyEvent = function (a) {
  if ((a.altKey && !a.ctrlKey) || a.metaKey || (a.keyCode >= goog.events.KeyCodes.F1 && a.keyCode <= goog.events.KeyCodes.F12)) return !1;
  if (goog.events.KeyCodes.isCharacterKey(a.keyCode)) return !0;
  switch (a.keyCode) {
    case goog.events.KeyCodes.ALT:
    case goog.events.KeyCodes.CAPS_LOCK:
    case goog.events.KeyCodes.CONTEXT_MENU:
    case goog.events.KeyCodes.CTRL:
    case goog.events.KeyCodes.DOWN:
    case goog.events.KeyCodes.END:
    case goog.events.KeyCodes.ESC:
    case goog.events.KeyCodes.HOME:
    case goog.events.KeyCodes.INSERT:
    case goog.events.KeyCodes.LEFT:
    case goog.events.KeyCodes.MAC_FF_META:
    case goog.events.KeyCodes.META:
    case goog.events.KeyCodes.NUMLOCK:
    case goog.events.KeyCodes.NUM_CENTER:
    case goog.events.KeyCodes.PAGE_DOWN:
    case goog.events.KeyCodes.PAGE_UP:
    case goog.events.KeyCodes.PAUSE:
    case goog.events.KeyCodes.PHANTOM:
    case goog.events.KeyCodes.PRINT_SCREEN:
    case goog.events.KeyCodes.RIGHT:
    case goog.events.KeyCodes.SCROLL_LOCK:
    case goog.events.KeyCodes.SHIFT:
    case goog.events.KeyCodes.UP:
    case goog.events.KeyCodes.VK_NONAME:
    case goog.events.KeyCodes.WIN_KEY:
    case goog.events.KeyCodes.WIN_KEY_RIGHT:
      return !1;
    case goog.events.KeyCodes.WIN_KEY_FF_LINUX:
      return !goog.userAgent.GECKO;
    default:
      return a.keyCode < goog.events.KeyCodes.FIRST_MEDIA_KEY || a.keyCode > goog.events.KeyCodes.LAST_MEDIA_KEY;
  }
};
goog.events.KeyCodes.firesKeyPressEvent = function (a, b, c, d, e, g) {
  if (goog.userAgent.MAC && e) return goog.events.KeyCodes.isCharacterKey(a);
  if (e && !d) return !1;
  if (!goog.userAgent.GECKO) {
    "number" === typeof b && (b = goog.events.KeyCodes.normalizeKeyCode(b));
    var f = b == goog.events.KeyCodes.CTRL || b == goog.events.KeyCodes.ALT || (goog.userAgent.MAC && b == goog.events.KeyCodes.META),
      k = b == goog.events.KeyCodes.SHIFT && (d || g);
    if (((!c || goog.userAgent.MAC) && f) || (goog.userAgent.MAC && k)) return !1;
  }
  if ((goog.userAgent.WEBKIT || goog.userAgent.EDGE) && d && c)
    switch (a) {
      case goog.events.KeyCodes.BACKSLASH:
      case goog.events.KeyCodes.OPEN_SQUARE_BRACKET:
      case goog.events.KeyCodes.CLOSE_SQUARE_BRACKET:
      case goog.events.KeyCodes.TILDE:
      case goog.events.KeyCodes.SEMICOLON:
      case goog.events.KeyCodes.DASH:
      case goog.events.KeyCodes.EQUALS:
      case goog.events.KeyCodes.COMMA:
      case goog.events.KeyCodes.PERIOD:
      case goog.events.KeyCodes.SLASH:
      case goog.events.KeyCodes.APOSTROPHE:
      case goog.events.KeyCodes.SINGLE_QUOTE:
        return !1;
    }
  if (goog.userAgent.IE && d && b == a) return !1;
  switch (a) {
    case goog.events.KeyCodes.ENTER:
      return goog.userAgent.GECKO ? (g || e ? !1 : !(c && d)) : !0;
    case goog.events.KeyCodes.ESC:
      return !(goog.userAgent.WEBKIT || goog.userAgent.EDGE || goog.userAgent.GECKO);
  }
  return goog.userAgent.GECKO && (d || e || g) ? !1 : goog.events.KeyCodes.isCharacterKey(a);
};
goog.events.KeyCodes.isCharacterKey = function (a) {
  if (
    (a >= goog.events.KeyCodes.ZERO && a <= goog.events.KeyCodes.NINE) ||
    (a >= goog.events.KeyCodes.NUM_ZERO && a <= goog.events.KeyCodes.NUM_MULTIPLY) ||
    (a >= goog.events.KeyCodes.A && a <= goog.events.KeyCodes.Z) ||
    ((goog.userAgent.WEBKIT || goog.userAgent.EDGE) && 0 == a)
  )
    return !0;
  switch (a) {
    case goog.events.KeyCodes.SPACE:
    case goog.events.KeyCodes.PLUS_SIGN:
    case goog.events.KeyCodes.QUESTION_MARK:
    case goog.events.KeyCodes.AT_SIGN:
    case goog.events.KeyCodes.NUM_PLUS:
    case goog.events.KeyCodes.NUM_MINUS:
    case goog.events.KeyCodes.NUM_PERIOD:
    case goog.events.KeyCodes.NUM_DIVISION:
    case goog.events.KeyCodes.SEMICOLON:
    case goog.events.KeyCodes.FF_SEMICOLON:
    case goog.events.KeyCodes.DASH:
    case goog.events.KeyCodes.EQUALS:
    case goog.events.KeyCodes.FF_EQUALS:
    case goog.events.KeyCodes.COMMA:
    case goog.events.KeyCodes.PERIOD:
    case goog.events.KeyCodes.SLASH:
    case goog.events.KeyCodes.APOSTROPHE:
    case goog.events.KeyCodes.SINGLE_QUOTE:
    case goog.events.KeyCodes.OPEN_SQUARE_BRACKET:
    case goog.events.KeyCodes.BACKSLASH:
    case goog.events.KeyCodes.CLOSE_SQUARE_BRACKET:
    case goog.events.KeyCodes.FF_HASH:
    case goog.events.KeyCodes.FF_JP_QUOTE:
      return !0;
    case goog.events.KeyCodes.FF_DASH:
      return goog.userAgent.GECKO;
    default:
      return !1;
  }
};
goog.events.KeyCodes.normalizeKeyCode = function (a) {
  return goog.userAgent.GECKO
    ? goog.events.KeyCodes.normalizeGeckoKeyCode(a)
    : goog.userAgent.MAC && goog.userAgent.WEBKIT
    ? goog.events.KeyCodes.normalizeMacWebKitKeyCode(a)
    : a;
};
goog.events.KeyCodes.normalizeGeckoKeyCode = function (a) {
  switch (a) {
    case goog.events.KeyCodes.FF_EQUALS:
      return goog.events.KeyCodes.EQUALS;
    case goog.events.KeyCodes.FF_SEMICOLON:
      return goog.events.KeyCodes.SEMICOLON;
    case goog.events.KeyCodes.FF_DASH:
      return goog.events.KeyCodes.DASH;
    case goog.events.KeyCodes.MAC_FF_META:
      return goog.events.KeyCodes.META;
    case goog.events.KeyCodes.WIN_KEY_FF_LINUX:
      return goog.events.KeyCodes.WIN_KEY;
    default:
      return a;
  }
};
goog.events.KeyCodes.normalizeMacWebKitKeyCode = function (a) {
  switch (a) {
    case goog.events.KeyCodes.MAC_WK_CMD_RIGHT:
      return goog.events.KeyCodes.META;
    default:
      return a;
  }
};
var module$exports$gdocs$CaptureSelectPage = {
  CaptureSelectPage: function (a, b) {
    this.captureImageEl_ = a;
    this.canvasEl_ = b;
    this.state_ = module$contents$gdocs$CaptureSelectPage_State.START;
    this.startY_ = this.startX_ = 0;
    this.useGetElementRect_ = !0;
    this.selectedRect_ = null;
  }
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.start = function () {
  var a = this;
  chrome.tabs.setZoom(1);
  chrome.runtime.sendMessage({ msg: "ready" }, function (b) {
    return a.onImageReady_(b);
  });
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.onImageReady_ = function (a) {
  var b = this;
  this.sourceTabId_ = a.tabId;
  this.captureImageEl_.addEventListener("load", function (c) {
    b.captureImageEl_.width /= window.devicePixelRatio;
    module$contents$gdocs$domUtil_showElem(b.captureImageEl_);
  });
  this.captureImageEl_.src = a.dataUrl;
  window.addEventListener("mousedown", function (c) {
    return b.onMouseDown_(new goog.events.BrowserEvent(c));
  });
  window.addEventListener("mousemove", function (c) {
    return b.onMouseMove_(new goog.events.BrowserEvent(c));
  });
  window.addEventListener("mouseup", function (c) {
    return b.onMouseUp_(new goog.events.BrowserEvent(c));
  });
  window.addEventListener("keydown", function (c) {
    return b.onKeyDown_(new goog.events.BrowserEvent(c));
  });
  this.resizeCanvas_();
  window.addEventListener("resize", function () {
    return b.resizeCanvas_();
  });
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.resizeCanvas_ = function () {
  this.canvasEl_.width = window.innerWidth;
  this.canvasEl_.height = window.innerHeight;
  this.resetSelection_();
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.drawOverlay_ = function () {
  var a = this.canvasEl_.getContext("2d");
  a.save();
  a.beginPath();
  a.clearRect(0, 0, this.canvasEl_.width, this.canvasEl_.height);
  a.fillStyle = "rgba(0, 0, 0, 0.25)";
  a.fillRect(0, 0, this.canvasEl_.width, this.canvasEl_.height);
  a.fill();
  a.restore();
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.drawRect_ = function (a) {
  var b = this.canvasEl_.getContext("2d");
  b.save();
  b.beginPath();
  b.strokeStyle = "rgba(0, 0, 0, 0.333)";
  b.lineWidth = 1;
  b.shadowBlur = 8;
  b.shadowColor = "#000";
  b.moveTo(a.x - 0.5, a.y - 0.5);
  b.lineTo(a.x - 0.5, a.y + a.height + 0.5);
  b.lineTo(a.x + a.width + 0.5, a.y + a.height + 0.5);
  b.lineTo(a.x + a.width + 0.5, a.y - 0.5);
  b.closePath();
  b.stroke();
  b.restore();
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.drawWhiteRect_ = function (a) {
  this.drawRect_(a);
  this.canvasEl_.getContext("2d").clearRect(a.x, a.y, a.width, a.height);
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.resetSelection_ = function () {
  this.drawOverlay_();
  this.state_ = module$contents$gdocs$CaptureSelectPage_State.START;
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.onMouseDown_ = function (a) {
  a.button != goog.events.BrowserEvent.MouseButton.LEFT
    ? (this.state_ != module$contents$gdocs$CaptureSelectPage_State.MOUSEDOWN &&
        this.state_ != module$contents$gdocs$CaptureSelectPage_State.SELECTING) ||
      this.resetSelection_()
    : this.state_ == module$contents$gdocs$CaptureSelectPage_State.START &&
      ((this.startX_ = a.clientX),
      (this.startY_ = a.clientY),
      a.preventDefault(),
      (this.state_ = module$contents$gdocs$CaptureSelectPage_State.MOUSEDOWN));
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.onMouseMove_ = function (a) {
  if (this.state_ == module$contents$gdocs$CaptureSelectPage_State.START)
    this.useGetElementRect_ && this.highlightElementAt_(a.clientX, a.clientY);
  else if (
    this.state_ == module$contents$gdocs$CaptureSelectPage_State.MOUSEDOWN ||
    this.state_ == module$contents$gdocs$CaptureSelectPage_State.SELECTING
  )
    this.drawOverlay_(),
      this.drawWhiteRect_(
        module$contents$gdocs$RectUtil_rectFromCoordinates(
          this.startX_,
          this.startY_,
          a.clientX,
          a.clientY,
          window.innerWidth,
          window.innerHeight
        )
      ),
      (this.state_ = module$contents$gdocs$CaptureSelectPage_State.SELECTING);
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.onMouseUp_ = function (a) {
  if (a.button == goog.events.BrowserEvent.MouseButton.LEFT)
    switch (this.state_) {
      case module$contents$gdocs$CaptureSelectPage_State.MOUSEDOWN:
        this.selectedRect_
          ? (this.sendToCapturer_(
              module$contents$gdocs$CaptureSelectPage_cropImgToDataUrl_(this.captureImageEl_, this.selectedRect_, window.devicePixelRatio)
            ),
            (this.state_ = module$contents$gdocs$CaptureSelectPage_State.STOP))
          : this.resetSelection_();
        break;
      case module$contents$gdocs$CaptureSelectPage_State.SELECTING:
        this.state_ == module$contents$gdocs$CaptureSelectPage_State.SELECTING &&
          (Math.abs(this.startX_ - a.clientX) < module$contents$gdocs$CaptureSelectPage_MINIMUM_X_DRAG &&
          Math.abs(this.startY_ - a.clientY) < module$contents$gdocs$CaptureSelectPage_MINIMUM_Y_DRAG
            ? this.resetSelection_()
            : (this.sendToCapturer_(
                module$contents$gdocs$CaptureSelectPage_cropImgToDataUrl_(
                  this.captureImageEl_,
                  module$contents$gdocs$RectUtil_rectFromCoordinates(
                    this.startX_,
                    this.startY_,
                    a.clientX,
                    a.clientY,
                    window.innerWidth,
                    window.innerHeight
                  ),
                  window.devicePixelRatio
                )
              ),
              (this.state_ = module$contents$gdocs$CaptureSelectPage_State.STOP)));
        break;
      default:
        throw Error("Unexpected state:" + this.state_ + " in onMouseUp_");
    }
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.onKeyDown_ = function (a) {
  if (a.keyCode == goog.events.KeyCodes.ESC)
    switch (this.state_) {
      case module$contents$gdocs$CaptureSelectPage_State.START:
        chrome.tabs.getCurrent(function (b) {
          b && b.id && chrome.tabs.remove(b.id);
        });
        break;
      case module$contents$gdocs$CaptureSelectPage_State.MOUSEDOWN:
      case module$contents$gdocs$CaptureSelectPage_State.SELECTING:
        this.resetSelection_();
        break;
      default:
        throw Error("Unexpected state:" + this.state_ + " in onKeyDown_");
    }
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.highlightElementAt_ = function (a, b) {
  var c = this;
  this.getElementRect_(
    a,
    b,
    function (d) {
      d.width = Math.min(d.width, window.innerWidth - d.x);
      d.height = Math.min(d.height, window.innerHeight - d.y);
      c.drawOverlay_();
      c.drawWhiteRect_(d);
      c.selectedRect_ = d;
    },
    function () {
      c.selectedRect_ = null;
      c.useGetElementRect_ = !1;
    }
  );
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.getElementRect_ = function (a, b, c, d) {
  chrome.tabs.sendMessage(this.sourceTabId_, { msg: "getPosition", x: a, y: b }, function (e) {
    e ? c(e) : d();
  });
};
module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.sendToCapturer_ = function (a) {
  chrome.runtime.sendMessage({ msg: "upload", dataUrl: a });
  chrome.tabs.getCurrent(function (b) {
    b && b.id && chrome.tabs.remove(b.id);
  });
};
goog.exportProperty(
  module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype,
  "start",
  module$exports$gdocs$CaptureSelectPage.CaptureSelectPage.prototype.start
);
function module$contents$gdocs$CaptureSelectPage_cropImgToDataUrl_(a, b, c) {
  var d = document.createElement("canvas");
  d.width = b.width * c;
  d.height = b.height * c;
  d.getContext("2d").drawImage(a, -(b.x * c), -(b.y * c));
  return d.toDataURL("image/png");
}
var module$contents$gdocs$CaptureSelectPage_MINIMUM_X_DRAG = 15,
  module$contents$gdocs$CaptureSelectPage_MINIMUM_Y_DRAG = 15,
  module$contents$gdocs$CaptureSelectPage_State = { START: 1, MOUSEDOWN: 2, SELECTING: 3, STOP: 4 };
var module$exports$gdocs$captureSelectPageBootstrap = {};
goog.global.window.addEventListener(
  "load",
  function () {
    new module$exports$gdocs$CaptureSelectPage.CaptureSelectPage(
      module$contents$gdocs$domUtil_getHtmlImageElementByIdAssert("src_image"),
      module$contents$gdocs$domUtil_getHtmlCanvasElementByIdAssert("canvas")
    ).start();
  },
  !1
);
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
      g = e.length;
    g > b && (e = e.substr(0, b) + (" ... (" + g + " bytes)"));
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
