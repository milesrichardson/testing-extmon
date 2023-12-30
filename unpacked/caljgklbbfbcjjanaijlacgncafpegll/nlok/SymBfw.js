var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (d) {
  var b = 0;
  return function () {
    return b < d.length ? { done: !1, value: d[b++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (d) {
  return { next: $jscomp.arrayIteratorImpl(d) };
};
$jscomp.makeIterator = function (d) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && d[Symbol.iterator];
  return b ? b.call(d) : $jscomp.arrayIterator(d);
};
$jscomp.getGlobal = function (d) {
  return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (d, b, a) {
        d != Array.prototype && d != Object.prototype && (d[b] = a.value);
      };
$jscomp.polyfill = function (d, b, a, f) {
  if (b) {
    a = $jscomp.global;
    d = d.split(".");
    for (f = 0; f < d.length - 1; f++) {
      var c = d[f];
      c in a || (a[c] = {});
      a = a[c];
    }
    d = d[d.length - 1];
    f = a[d];
    b = b(f);
    b != f && null != b && $jscomp.defineProperty(a, d, { configurable: !0, writable: !0, value: b });
  }
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill(
  "Promise",
  function (d) {
    function b() {
      this.batch_ = null;
    }
    function a(a) {
      return a instanceof c
        ? a
        : new c(function (e, k) {
            e(a);
          });
    }
    if (d && !$jscomp.FORCE_POLYFILL_PROMISE) return d;
    b.prototype.asyncExecute = function (a) {
      if (null == this.batch_) {
        this.batch_ = [];
        var e = this;
        this.asyncExecuteFunction(function () {
          e.executeBatch_();
        });
      }
      this.batch_.push(a);
    };
    var f = $jscomp.global.setTimeout;
    b.prototype.asyncExecuteFunction = function (a) {
      f(a, 0);
    };
    b.prototype.executeBatch_ = function () {
      for (; this.batch_ && this.batch_.length; ) {
        var a = this.batch_;
        this.batch_ = [];
        for (var e = 0; e < a.length; ++e) {
          var g = a[e];
          a[e] = null;
          try {
            g();
          } catch (p) {
            this.asyncThrow_(p);
          }
        }
      }
      this.batch_ = null;
    };
    b.prototype.asyncThrow_ = function (a) {
      this.asyncExecuteFunction(function () {
        throw a;
      });
    };
    var c = function (a) {
      this.state_ = 0;
      this.result_ = void 0;
      this.onSettledCallbacks_ = [];
      var e = this.createResolveAndReject_();
      try {
        a(e.resolve, e.reject);
      } catch (g) {
        e.reject(g);
      }
    };
    c.prototype.createResolveAndReject_ = function () {
      function a(a) {
        return function (c) {
          g || ((g = !0), a.call(e, c));
        };
      }
      var e = this,
        g = !1;
      return { resolve: a(this.resolveTo_), reject: a(this.reject_) };
    };
    c.prototype.resolveTo_ = function (a) {
      if (a === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
      else if (a instanceof c) this.settleSameAsPromise_(a);
      else {
        a: switch (typeof a) {
          case "object":
            var e = null != a;
            break a;
          case "function":
            e = !0;
            break a;
          default:
            e = !1;
        }
        e ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a);
      }
    };
    c.prototype.resolveToNonPromiseObj_ = function (a) {
      var e = void 0;
      try {
        e = a.then;
      } catch (g) {
        this.reject_(g);
        return;
      }
      "function" == typeof e ? this.settleSameAsThenable_(e, a) : this.fulfill_(a);
    };
    c.prototype.reject_ = function (a) {
      this.settle_(2, a);
    };
    c.prototype.fulfill_ = function (a) {
      this.settle_(1, a);
    };
    c.prototype.settle_ = function (a, e) {
      if (0 != this.state_) throw Error("Cannot settle(" + a + ", " + e + "): Promise already settled in state" + this.state_);
      this.state_ = a;
      this.result_ = e;
      this.executeOnSettledCallbacks_();
    };
    c.prototype.executeOnSettledCallbacks_ = function () {
      if (null != this.onSettledCallbacks_) {
        for (var a = 0; a < this.onSettledCallbacks_.length; ++a) e.asyncExecute(this.onSettledCallbacks_[a]);
        this.onSettledCallbacks_ = null;
      }
    };
    var e = new b();
    c.prototype.settleSameAsPromise_ = function (a) {
      var e = this.createResolveAndReject_();
      a.callWhenSettled_(e.resolve, e.reject);
    };
    c.prototype.settleSameAsThenable_ = function (a, e) {
      var g = this.createResolveAndReject_();
      try {
        a.call(e, g.resolve, g.reject);
      } catch (p) {
        g.reject(p);
      }
    };
    c.prototype.then = function (a, e) {
      function g(h, a) {
        return "function" == typeof h
          ? function (a) {
              try {
                b(h(a));
              } catch (r) {
                k(r);
              }
            }
          : a;
      }
      var b,
        k,
        f = new c(function (h, a) {
          b = h;
          k = a;
        });
      this.callWhenSettled_(g(a, b), g(e, k));
      return f;
    };
    c.prototype.catch = function (a) {
      return this.then(void 0, a);
    };
    c.prototype.callWhenSettled_ = function (a, c) {
      function g() {
        switch (b.state_) {
          case 1:
            a(b.result_);
            break;
          case 2:
            c(b.result_);
            break;
          default:
            throw Error("Unexpected state: " + b.state_);
        }
      }
      var b = this;
      null == this.onSettledCallbacks_ ? e.asyncExecute(g) : this.onSettledCallbacks_.push(g);
    };
    c.resolve = a;
    c.reject = function (a) {
      return new c(function (e, g) {
        g(a);
      });
    };
    c.race = function (e) {
      return new c(function (c, g) {
        for (var b = $jscomp.makeIterator(e), k = b.next(); !k.done; k = b.next()) a(k.value).callWhenSettled_(c, g);
      });
    };
    c.all = function (e) {
      var b = $jscomp.makeIterator(e),
        g = b.next();
      return g.done
        ? a([])
        : new c(function (e, c) {
            function k(a) {
              return function (c) {
                h[a] = c;
                f--;
                0 == f && e(h);
              };
            }
            var h = [],
              f = 0;
            do h.push(void 0), f++, a(g.value).callWhenSettled_(k(h.length - 1), c), (g = b.next());
            while (!g.done);
          });
    };
    return c;
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Promise.prototype.finally",
  function (d) {
    return d
      ? d
      : function (b) {
          return this.then(
            function (a) {
              return Promise.resolve(b()).then(function () {
                return a;
              });
            },
            function (a) {
              return Promise.resolve(b()).then(function () {
                throw a;
              });
            }
          );
        };
  },
  "es9",
  "es3"
);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function (d, b) {
  this.$jscomp$symbol$id_ = d;
  $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: b });
};
$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = (function () {
  function d(a) {
    if (this instanceof d) throw new TypeError("Symbol is not a constructor");
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (a || "") + "_" + b++, a);
  }
  var b = 0;
  return d;
})();
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var d = $jscomp.global.Symbol.iterator;
  d || (d = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[d] &&
    $jscomp.defineProperty(Array.prototype, d, {
      configurable: !0,
      writable: !0,
      value: function () {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      }
    });
  $jscomp.initSymbolIterator = function () {};
};
$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var d = $jscomp.global.Symbol.asyncIterator;
  d || (d = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function () {};
};
$jscomp.iteratorPrototype = function (d) {
  $jscomp.initSymbolIterator();
  d = { next: d };
  d[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };
  return d;
};
$jscomp.underscoreProtoCanBeSet = function () {
  var d = { a: !0 },
    b = {};
  try {
    return (b.__proto__ = d), b.a;
  } catch (a) {}
  return !1;
};
$jscomp.setPrototypeOf =
  "function" == typeof Object.setPrototypeOf
    ? Object.setPrototypeOf
    : $jscomp.underscoreProtoCanBeSet()
    ? function (d, b) {
        d.__proto__ = b;
        if (d.__proto__ !== b) throw new TypeError(d + " is not extensible");
        return d;
      }
    : null;
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function (d) {
  if (!(d instanceof Object)) throw new TypeError("Iterator result " + d + " is not an object");
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
$jscomp.generator.Context.prototype.next_ = function (d) {
  this.yieldResult = d;
};
$jscomp.generator.Context.prototype.throw_ = function (d) {
  this.abruptCompletion_ = { exception: d, isException: !0 };
  this.jumpToErrorHandler_();
};
$jscomp.generator.Context.prototype.return = function (d) {
  this.abruptCompletion_ = { return: d };
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function (d) {
  this.abruptCompletion_ = { jumpTo: d };
  this.nextAddress = this.finallyAddress_;
};
$jscomp.generator.Context.prototype.yield = function (d, b) {
  this.nextAddress = b;
  return { value: d };
};
$jscomp.generator.Context.prototype.yieldAll = function (d, b) {
  d = $jscomp.makeIterator(d);
  var a = d.next();
  $jscomp.generator.ensureIteratorResultIsObject_(a);
  if (a.done) (this.yieldResult = a.value), (this.nextAddress = b);
  else return (this.yieldAllIterator_ = d), this.yield(a.value, b);
};
$jscomp.generator.Context.prototype.jumpTo = function (d) {
  this.nextAddress = d;
};
$jscomp.generator.Context.prototype.jumpToEnd = function () {
  this.nextAddress = 0;
};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function (d, b) {
  this.catchAddress_ = d;
  void 0 != b && (this.finallyAddress_ = b);
};
$jscomp.generator.Context.prototype.setFinallyBlock = function (d) {
  this.catchAddress_ = 0;
  this.finallyAddress_ = d || 0;
};
$jscomp.generator.Context.prototype.leaveTryBlock = function (d, b) {
  this.nextAddress = d;
  this.catchAddress_ = b || 0;
};
$jscomp.generator.Context.prototype.enterCatchBlock = function (d) {
  this.catchAddress_ = d || 0;
  d = this.abruptCompletion_.exception;
  this.abruptCompletion_ = null;
  return d;
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function (d, b, a) {
  a ? (this.finallyContexts_[a] = this.abruptCompletion_) : (this.finallyContexts_ = [this.abruptCompletion_]);
  this.catchAddress_ = d || 0;
  this.finallyAddress_ = b || 0;
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function (d, b) {
  b = this.finallyContexts_.splice(b || 0)[0];
  if ((b = this.abruptCompletion_ = this.abruptCompletion_ || b)) {
    if (b.isException) return this.jumpToErrorHandler_();
    void 0 != b.jumpTo && this.finallyAddress_ < b.jumpTo
      ? ((this.nextAddress = b.jumpTo), (this.abruptCompletion_ = null))
      : (this.nextAddress = this.finallyAddress_);
  } else this.nextAddress = d;
};
$jscomp.generator.Context.prototype.forIn = function (d) {
  return new $jscomp.generator.Context.PropertyIterator(d);
};
$jscomp.generator.Context.PropertyIterator = function (d) {
  this.object_ = d;
  this.properties_ = [];
  for (var b in d) this.properties_.push(b);
  this.properties_.reverse();
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function () {
  for (; 0 < this.properties_.length; ) {
    var d = this.properties_.pop();
    if (d in this.object_) return d;
  }
  return null;
};
$jscomp.generator.Engine_ = function (d) {
  this.context_ = new $jscomp.generator.Context();
  this.program_ = d;
};
$jscomp.generator.Engine_.prototype.next_ = function (d) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, d, this.context_.next_);
  this.context_.next_(d);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.return_ = function (d) {
  this.context_.start_();
  var b = this.context_.yieldAllIterator_;
  if (b)
    return this.yieldAllStep_(
      "return" in b
        ? b["return"]
        : function (a) {
            return { value: a, done: !0 };
          },
      d,
      this.context_.return
    );
  this.context_.return(d);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.throw_ = function (d) {
  this.context_.start_();
  if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], d, this.context_.next_);
  this.context_.throw_(d);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function (d, b, a) {
  try {
    var f = d.call(this.context_.yieldAllIterator_, b);
    $jscomp.generator.ensureIteratorResultIsObject_(f);
    if (!f.done) return this.context_.stop_(), f;
    var c = f.value;
  } catch (e) {
    return (this.context_.yieldAllIterator_ = null), this.context_.throw_(e), this.nextStep_();
  }
  this.context_.yieldAllIterator_ = null;
  a.call(this.context_, c);
  return this.nextStep_();
};
$jscomp.generator.Engine_.prototype.nextStep_ = function () {
  for (; this.context_.nextAddress; )
    try {
      var d = this.program_(this.context_);
      if (d) return this.context_.stop_(), { value: d.value, done: !1 };
    } catch (b) {
      (this.context_.yieldResult = void 0), this.context_.throw_(b);
    }
  this.context_.stop_();
  if (this.context_.abruptCompletion_) {
    d = this.context_.abruptCompletion_;
    this.context_.abruptCompletion_ = null;
    if (d.isException) throw d.exception;
    return { value: d.return, done: !0 };
  }
  return { value: void 0, done: !0 };
};
$jscomp.generator.Generator_ = function (d) {
  this.next = function (b) {
    return d.next_(b);
  };
  this.throw = function (b) {
    return d.throw_(b);
  };
  this.return = function (b) {
    return d.return_(b);
  };
  $jscomp.initSymbolIterator();
  this[Symbol.iterator] = function () {
    return this;
  };
};
$jscomp.generator.createGenerator = function (d, b) {
  b = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
  $jscomp.setPrototypeOf && $jscomp.setPrototypeOf(b, d.prototype);
  return b;
};
$jscomp.asyncExecutePromiseGenerator = function (d) {
  function b(a) {
    return d.next(a);
  }
  function a(a) {
    return d.throw(a);
  }
  return new Promise(function (f, c) {
    function e(k) {
      k.done ? f(k.value) : Promise.resolve(k.value).then(b, a).then(e, c);
    }
    e(d.next());
  });
};
$jscomp.asyncExecutePromiseGeneratorFunction = function (d) {
  return $jscomp.asyncExecutePromiseGenerator(d());
};
$jscomp.asyncExecutePromiseGeneratorProgram = function (d) {
  return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(d)));
};
$jscomp.polyfill(
  "Object.is",
  function (d) {
    return d
      ? d
      : function (b, a) {
          return b === a ? 0 !== b || 1 / b === 1 / a : b !== b && a !== a;
        };
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Array.prototype.includes",
  function (d) {
    return d
      ? d
      : function (b, a) {
          var f = this;
          f instanceof String && (f = String(f));
          var c = f.length;
          a = a || 0;
          for (0 > a && (a = Math.max(a + c, 0)); a < c; a++) {
            var e = f[a];
            if (e === b || Object.is(e, b)) return !0;
          }
          return !1;
        };
  },
  "es7",
  "es3"
);
$jscomp.checkStringArgs = function (d, b, a) {
  if (null == d) throw new TypeError("The 'this' value for String.prototype." + a + " must not be null or undefined");
  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + a + " must not be a regular expression");
  return d + "";
};
$jscomp.polyfill(
  "String.prototype.includes",
  function (d) {
    return d
      ? d
      : function (b, a) {
          return -1 !== $jscomp.checkStringArgs(this, b, "includes").indexOf(b, a || 0);
        };
  },
  "es6",
  "es3"
);
$jscomp.iteratorFromArray = function (d, b) {
  $jscomp.initSymbolIterator();
  d instanceof String && (d += "");
  var a = 0,
    f = {
      next: function () {
        if (a < d.length) {
          var c = a++;
          return { value: b(c, d[c]), done: !1 };
        }
        f.next = function () {
          return { done: !0, value: void 0 };
        };
        return f.next();
      }
    };
  f[Symbol.iterator] = function () {
    return f;
  };
  return f;
};
$jscomp.polyfill(
  "Array.prototype.keys",
  function (d) {
    return d
      ? d
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
  "String.prototype.startsWith",
  function (d) {
    return d
      ? d
      : function (b, a) {
          var f = $jscomp.checkStringArgs(this, b, "startsWith");
          b += "";
          var c = f.length,
            e = b.length;
          a = Math.max(0, Math.min(a | 0, f.length));
          for (var k = 0; k < e && a < c; ) if (f[a++] != b[k++]) return !1;
          return k >= e;
        };
  },
  "es6",
  "es3"
);
$jscomp.owns = function (d, b) {
  return Object.prototype.hasOwnProperty.call(d, b);
};
$jscomp.polyfill(
  "Object.values",
  function (d) {
    return d
      ? d
      : function (b) {
          var a = [],
            f;
          for (f in b) $jscomp.owns(b, f) && a.push(b[f]);
          return a;
        };
  },
  "es8",
  "es3"
);
$jscomp.checkEs6ConformanceViaProxy = function () {
  try {
    var d = {},
      b = Object.create(
        new $jscomp.global.Proxy(d, {
          get: function (a, f, c) {
            return a == d && "q" == f && c == b;
          }
        })
      );
    return !0 === b.q;
  } catch (a) {
    return !1;
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.polyfill(
  "WeakMap",
  function (d) {
    function b() {
      if (!d || !Object.seal) return !1;
      try {
        var a = Object.seal({}),
          e = Object.seal({}),
          c = new d([
            [a, 2],
            [e, 3]
          ]);
        if (2 != c.get(a) || 3 != c.get(e)) return !1;
        c.delete(a);
        c.set(e, 4);
        return !c.has(a) && 4 == c.get(e);
      } catch (n) {
        return !1;
      }
    }
    function a() {}
    function f(c) {
      if (!$jscomp.owns(c, e)) {
        var b = new a();
        $jscomp.defineProperty(c, e, { value: b });
      }
    }
    function c(e) {
      var c = Object[e];
      c &&
        (Object[e] = function (e) {
          if (e instanceof a) return e;
          f(e);
          return c(e);
        });
    }
    if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
      if (d && $jscomp.ES6_CONFORMANCE) return d;
    } else if (b()) return d;
    var e = "$jscomp_hidden_" + Math.random();
    c("freeze");
    c("preventExtensions");
    c("seal");
    var k = 0,
      l = function (a) {
        this.id_ = (k += Math.random() + 1).toString();
        if (a) {
          a = $jscomp.makeIterator(a);
          for (var e; !(e = a.next()).done; ) (e = e.value), this.set(e[0], e[1]);
        }
      };
    l.prototype.set = function (a, c) {
      f(a);
      if (!$jscomp.owns(a, e)) throw Error("WeakMap key fail: " + a);
      a[e][this.id_] = c;
      return this;
    };
    l.prototype.get = function (a) {
      return $jscomp.owns(a, e) ? a[e][this.id_] : void 0;
    };
    l.prototype.has = function (a) {
      return $jscomp.owns(a, e) && $jscomp.owns(a[e], this.id_);
    };
    l.prototype.delete = function (a) {
      return $jscomp.owns(a, e) && $jscomp.owns(a[e], this.id_) ? delete a[e][this.id_] : !1;
    };
    return l;
  },
  "es6",
  "es3"
);
$jscomp.MapEntry = function () {};
$jscomp.polyfill(
  "Map",
  function (d) {
    function b() {
      if ($jscomp.ASSUME_NO_NATIVE_MAP || !d || "function" != typeof d || !d.prototype.entries || "function" != typeof Object.seal)
        return !1;
      try {
        var a = Object.seal({ x: 4 }),
          e = new d($jscomp.makeIterator([[a, "s"]]));
        if ("s" != e.get(a) || 1 != e.size || e.get({ x: 4 }) || e.set({ x: 4 }, "t") != e || 2 != e.size) return !1;
        var c = e.entries(),
          b = c.next();
        if (b.done || b.value[0] != a || "s" != b.value[1]) return !1;
        b = c.next();
        return b.done || 4 != b.value[0].x || "t" != b.value[1] || !c.next().done ? !1 : !0;
      } catch (h) {
        return !1;
      }
    }
    if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
      if (d && $jscomp.ES6_CONFORMANCE) return d;
    } else if (b()) return d;
    $jscomp.initSymbolIterator();
    var a = new WeakMap(),
      f = function (a) {
        this.data_ = {};
        this.head_ = k();
        this.size = 0;
        if (a) {
          a = $jscomp.makeIterator(a);
          for (var e; !(e = a.next()).done; ) (e = e.value), this.set(e[0], e[1]);
        }
      };
    f.prototype.set = function (a, e) {
      a = 0 === a ? 0 : a;
      var b = c(this, a);
      b.list || (b.list = this.data_[b.id] = []);
      b.entry
        ? (b.entry.value = e)
        : ((b.entry = { next: this.head_, previous: this.head_.previous, head: this.head_, key: a, value: e }),
          b.list.push(b.entry),
          (this.head_.previous.next = b.entry),
          (this.head_.previous = b.entry),
          this.size++);
      return this;
    };
    f.prototype.delete = function (a) {
      a = c(this, a);
      return a.entry && a.list
        ? (a.list.splice(a.index, 1),
          a.list.length || delete this.data_[a.id],
          (a.entry.previous.next = a.entry.next),
          (a.entry.next.previous = a.entry.previous),
          (a.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    f.prototype.clear = function () {
      this.data_ = {};
      this.head_ = this.head_.previous = k();
      this.size = 0;
    };
    f.prototype.has = function (a) {
      return !!c(this, a).entry;
    };
    f.prototype.get = function (a) {
      return (a = c(this, a).entry) && a.value;
    };
    f.prototype.entries = function () {
      return e(this, function (a) {
        return [a.key, a.value];
      });
    };
    f.prototype.keys = function () {
      return e(this, function (a) {
        return a.key;
      });
    };
    f.prototype.values = function () {
      return e(this, function (a) {
        return a.value;
      });
    };
    f.prototype.forEach = function (a, e) {
      for (var c = this.entries(), b; !(b = c.next()).done; ) (b = b.value), a.call(e, b[1], b[0], this);
    };
    f.prototype[Symbol.iterator] = f.prototype.entries;
    var c = function (e, c) {
        var b = c && typeof c;
        "object" == b || "function" == b ? (a.has(c) ? (b = a.get(c)) : ((b = "" + ++l), a.set(c, b))) : (b = "p_" + c);
        var k = e.data_[b];
        if (k && $jscomp.owns(e.data_, b))
          for (e = 0; e < k.length; e++) {
            var h = k[e];
            if ((c !== c && h.key !== h.key) || c === h.key) return { id: b, list: k, index: e, entry: h };
          }
        return { id: b, list: k, index: -1, entry: void 0 };
      },
      e = function (a, e) {
        var c = a.head_;
        return $jscomp.iteratorPrototype(function () {
          if (c) {
            for (; c.head != a.head_; ) c = c.previous;
            for (; c.next != c.head; ) return (c = c.next), { done: !1, value: e(c) };
            c = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      k = function () {
        var a = {};
        return (a.previous = a.next = a.head = a);
      },
      l = 0;
    return f;
  },
  "es6",
  "es3"
);
(function (d) {
  (d.SymBfw = d.SymBfw || {}).globals = { BROWSER: "Chrome", PRODUCT_GUID: "DC6B1B05-C7B2-43EB-81E3-CBD3896553C2" };
})(window);
(function (d) {
  (d.SymBfw = d.SymBfw || {}).logger = (function (b) {
    return {
      debug: function (a) {},
      log: function (a) {},
      error: function (a) {
        console.error(a);
        var f = b.telemetryWrapper;
        f.send(f.componentType.LOGGER, f.actionType.ERROR, a);
      },
      warn: function (a) {
        console.warn(a);
        var f = b.telemetryWrapper;
        f.send(f.componentType.LOGGER, f.actionType.WARN, a);
      },
      info: function (a) {
        console.info(a);
      }
    };
  })(d.SymBfw);
})(window);
(function (d) {
  d = d.SymBfw;
  var b = {
    httpStatusCodes: {},
    localizer: {
      DEFAULT_MESSAGES_DICTIONARY: "strings",
      GET_LOCALIZED_STRING: "44F4D54E-AB86-454C-A494-DE3AD87E72F9",
      GET_LOCALIZED_STRINGS: "0D1C5EEF-749F-4EEB-AD6D-F9C26018EE91",
      GET_ALL_LOCALIZED_STRINGS: "33445b60-9a88-4d99-829f-564704b2a960",
      GET_LOCALIZED_STRING_FROM_DICTIONARY: "D15C0B4C-DC1B-403F-A3C8-8BB42137B325",
      GET_LOCALIZED_STRINGS_FROM_DICTIONARY: "88313974-C371-4A8D-9196-0A2CE43C8327",
      GET_LOCALIZED_STRING_WITH_FORMAT: "F3D7C8CE-B1A9-425A-AD24-4120C592AF86",
      GET_LOCALIZED_STRING_WITH_FORMAT_FROM_DICTIONARY: "9066F4CC-31A4-45F5-A07A-81DDC38E5F99",
      GET_CURRENT_LANGUAGE_DIRECTION: "C30B2719-DD82-41EC-E93A-8A602444F90A",
      GET_LOCALIZED_STRINGS_WITH_FORMAT: "E225C9A6-209A-4702-8E48-3B6EFBF67E26"
    },
    clipboard: { messages: { CLEAR_CLIPBOARD: "aa232db5-1dba-473a-ab4b-e9c378b7978b" }, DEFAULT_TIMEOUT: 6e4 }
  };
  b.httpStatusCodes.OK = 200;
  b.httpStatusCodes.PARTIAL_CONTENT = 206;
  b.httpStatusCodes.CREATED = 201;
  b.httpStatusCodes.NO_CONTENT = 204;
  b.httpStatusCodes.INCORRECT_URI = 302;
  b.httpStatusCodes.NOT_MODIFIED = 304;
  b.httpStatusCodes.BAD_REQUEST = 400;
  b.httpStatusCodes.UNAUTHORIZED = 401;
  b.httpStatusCodes.INVALID_SCHEMA = 403;
  b.httpStatusCodes.NOT_FOUND = 404;
  b.httpStatusCodes.HEADER_ERROR = 406;
  b.httpStatusCodes.GONE = 410;
  b.httpStatusCodes.ENTITY_TOO_LARGE = 413;
  b.httpStatusCodes.DATASTORE_RATE_LIMITED = 429;
  b.httpStatusCodes.RATE_LIMITING = 503;
  b.httpStatusCodes.SERVER_ERROR = 500;
  b.DEFAULT_FETCH_TIMEOUT = 6e4;
  b.CERT_COMMON_NAME = "CN";
  b.telemetry = {
    TELEMETRY_ENABLED: "293E0764-AF48-4C52-B675-0161A7B6BECE",
    TELEMETRY_OPT_OUT_SHOWN: "FE795012-44D6-491D-A8A1-E83633892C9D",
    BFW_TELEMETRY_SETTINGS_CONTAINER: "233D07C0-6318-4BCE-A36A-82DFB19F3B2A",
    USER_RESPONDED_IN_OPT_OUT_PAGE: "8157BC1F-5ED8-4373-A18D-8CD8E0263752",
    LAST_OFFER_DATE: "9EA53F0C-7F18-44A5-8138-C11F27D66FC1",
    TELEMETRY_SENT_LIST: "C9183765-5049-46B4-9768-DC81712E2696"
  };
  b.os = { WINDOWS: "Windows", MAC: "Mac", UNKNOWN: "Unknown" };
  b.CDN_FILE_DOWNLOADER = {
    ENCRYPTION_METHOD: "RS256",
    SUPPORTED_PROTOCOL: "https",
    SUPPORTED_FILEFORMATS: ["json"],
    RESPONSE_STATUS: {
      UNSUCCESSFUL_RESPONSE: "Error in fetching the file with status code",
      FILE_TAMPERED: "CDN file has been tampered",
      PUBLIC_KEY_NOT_VERIFIED: "Public key verification has failed",
      INVALID_PARAMETERS: "Invalid paramaters"
    },
    CERT_ISSUER_NAME: "CERT_ISSUER_NAME",
    CERT_ISSUED: "CERT_ISSUED"
  };
  b.uiConstants = {
    NOTIFICATION: {
      IFRAME_ID: "symc-notification-popup",
      HTML: "content/ui/notification.html",
      STYLE: "content/ui/content-page.css",
      STACK_COUNT: 1,
      DEFAULT_TIMEOUT: 1e4,
      HEIGHT: 200,
      WARNING_HEIGHT: 370,
      WIDTH: 460,
      TYPE: { QUESTION: 0, TIMED: 1, WARNING_QUESTION: 2 },
      BUTTON: { DEFAULT: 0, SECONDARY: 1 },
      MESSAGES: {
        RESIZE_IFRAME_HEIGHT: "db9de310-ecd6-4213-a3f3-7666afcd23b1",
        FIXED_IFRAME_HEIGHT: "992D0CB9-739C-462B-9764-A3E6C02C959C",
        DEFAULT_MESSAGE: "8DB8FE17-6F5E-485E-81EE-1112762F48E4",
        DEFAULT_BUTTON_PRESSED: "209CBB4D-6D6B-46F4-9EA7-303181937BF6",
        SECONDARY_LINK_PRESSED: "8881560D-E8A2-41FA-A81D-A90D41311D0D",
        THIRD_BUTTON_PRESSED: "196F06EB-956E-44EE-A60D-F4741C5CF4D3",
        NOTIFICATION_CLOSED: "EA7414A5-667F-4459-BAC2-38464F3330A3",
        NOTIFICATION_QUEUE_MESSAGE: "A88CCFCD-B98D-4607-B780-79A1CF7ADFAD",
        NOTIFICATIONS_SHOWN: "57C094C2-F0F0-44C2-9BBF-9E147135FB50",
        UI_INIT: "EE5B61D6-3A55-4ABB-B304-02BDAD9698FE",
        UI_INIT_PROXY: "0FABE0DB-1C87-475B-D89E-F4EC0EE963DE",
        HIDE_NOTIFICATIONS: "8211780F-93EC-4E37-8933-E60CB6052E84"
      }
    },
    CONTENT_PAGE_STYLE_ID: "symc-content-stylesheet"
  };
  b.performanceReporter = {
    MESSAGES: {
      REPORT_START: "2379B4CB-E725-4818-8FCC-A9372EABBF45",
      REPORT_END: "1F62DD4E-56AD-4528-9A69-BFE9EC135B9F",
      GET_PERFORMANCE_REPORTER: "2306DE62-ACA8-40AE-9909-517474C1120B"
    }
  };
  b.utils = { IP: "ip" };
  b.NAVIGATION_COMPLETE = "complete";
  b.STORE_URLS = {
    Chrome: "https://chrome.google.com/webstore/",
    Firefox: "https://addons.mozilla.org/",
    Safari: "https://safari-extensions.apple.com/",
    Edge: "https://www.microsoft.com/[a-zA-Z]+[-]?[a-zA-Z]*/(p|store)/",
    "Edge-Chromium": "https://microsoftedge.microsoft.com/addons"
  };
  b.BROWSER_TYPE = { CHROME: "Chrome", FIREFOX: "Firefox", EDGE: "Edge", SAFARI: "Safari", EDGE_CHROMIUM: "Edge-Chromium" };
  b.RANDOM_NUMBER_LIMITS = { MIN: 0, MAX: 4294967295 };
  b.PROTOCOLS = "http https chrome-extension extension moz-extension ms-browser-extension".split(" ");
  d.constants = b;
})(window);
(function (d) {
  d.SymBfw.utils = (function (b) {
    var a = {},
      f = b.constants;
    a.createNewGuid = function () {
      var a = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var c = (a + 16 * Math.random()) % 16 | 0;
        a = Math.floor(a / 16);
        return ("x" == e ? c : (c & 7) | 8).toString(16);
      });
    };
    a.isGuid = function (e) {
      return a.isString(e) ? /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e.toLowerCase()) : !1;
    };
    a.stringUTF16LEToByteArray = function (a) {
      if (!1 === this.isString(a)) throw Error("Input string cannot be null or is not a string");
      for (var e = [], c = 0; c < a.length; ++c) {
        var b = a.charCodeAt(c),
          f = (b & 65280) >> 8;
        e.push(b & 255);
        e.push(f);
      }
      return e;
    };
    a.arrayBufferToStringUTF16LE = function (a) {
      if (this.isNil(a)) return null;
      a instanceof ArrayBuffer && (a = new Uint8Array(a));
      for (var e = [], c = 0; c < a.byteLength; c++) e.push(a[c]);
      return this.byteArrayToStringUTF16LE(e);
    };
    a.byteArrayToStringUTF16LE = function (a) {
      if (!1 === this.isArray(a)) throw Error("Byte array cannot be null or is not an array");
      if (2 > a.length) throw Error("Byte array needs to contain at least two bytes");
      if (0 !== a.length % 2) throw Error("Byte array needs to contain even number of bytes");
      for (var e = "", c = 0; c < a.length - 1; c += 2) {
        var b = a[c];
        if (255 < b) throw Error("Encoding error: Input contains element larger than a byte.");
        b &= 255;
        var f = a[c + 1];
        if (255 < f) throw Error("Encoding error: Input contains element larger than a byte.");
        f = (f << 8) & 65280;
        e += String.fromCharCode(b + f);
      }
      return e;
    };
    a.downloadFileFromUrl = function (a) {
      var e = document.createElement("iframe");
      e.style.display = "none";
      e.src = a;
      e.width = "1";
      e.height = "1";
      e.frameborder = "0";
      document.body.appendChild(e);
      setTimeout(function () {
        document.body.removeChild(e);
      }, 5e3);
    };
    a.obfuscatePassword = function (a, c) {
      if (!1 === this.isString(a)) throw Error("password  cannot be null and has to be a string");
      if (!1 === this.isString(c)) throw Error("obfuscationKey  cannot be null and has to be a string");
      a = new Uint8Array(b.utils.stringUTF16LEToByteArray(a));
      c = new Uint8Array(b.utils.stringUTF16LEToByteArray(c));
      c = b.utils._obfuscateData(a, c);
      return (c = b.utils.arrayBufferToStringUTF16LE(c));
    };
    a._obfuscateData = function (e, c) {
      if (a.isNil(e) || a.isNil(c)) return null;
      e instanceof ArrayBuffer && (e = new Uint8Array(e));
      c instanceof ArrayBuffer && (c = new Uint8Array(c));
      for (var b = e.byteLength, f = new Uint8Array(b), k = 0; k < b; k++) f[k] = e[k] ^ c[k % b];
      return f;
    };
    a.getOSType = function () {
      var a = f.os.UNKNOWN;
      -1 != navigator.appVersion.toLowerCase().indexOf("win")
        ? (a = f.os.WINDOWS)
        : -1 != navigator.appVersion.toLowerCase().indexOf("mac") && (a = f.os.MAC);
      return a;
    };
    a.isWin10OS = function () {
      return a.getOSType() === f.os.WINDOWS ? navigator.userAgent.includes("Windows NT 10.0") : !1;
    };
    a.isNil = function (a) {
      return "undefined" === typeof a || null === a ? !0 : !1;
    };
    a.isntNil = function (a) {
      return "undefined" !== typeof a && null !== a ? !0 : !1;
    };
    a.isEmptyObject = function (e) {
      return a.isNil(e) || 0 === Object.keys(e).length ? !0 : !1;
    };
    a.objectHas = function (e, c) {
      return a.isObject(e) && a.isString(c) ? Object.prototype.hasOwnProperty.call(e, c) : !1;
    };
    a.isString = function (e) {
      return a.isntNil(e) && "string" === typeof e ? !0 : !1;
    };
    a.isFunction = function (e) {
      return a.isntNil(e) && "function" === typeof e ? !0 : !1;
    };
    a.isArray = function (a) {
      return Array.isArray(a);
    };
    a.isObject = function (e) {
      return a.isntNil(e) && "object" === typeof e && e.constructor === Object ? !0 : !1;
    };
    a.isBoolean = function (e) {
      return a.isntNil(e) && "boolean" === typeof e ? !0 : !1;
    };
    var c = {
      ac: { com: !0, gov: !0, mil: !0, net: !0, org: !0, edu: !0 },
      ad: { nom: !0 },
      ae: { ac: !0, co: !0, gov: !0, mil: !0, name: !0, net: !0, org: !0, pro: !0, sch: !0 },
      af: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      ai: { off: !0, com: !0, net: !0, org: !0 },
      al: { com: !0, edu: !0, gov: !0, mil: !0, net: !0, org: !0, uniti: !0, tirana: !0, soros: !0, upt: !0, inima: !0 },
      an: { com: !0, net: !0, org: !0, edu: !0 },
      ag: { com: !0, org: !0, net: !0, co: !0, nom: !0 },
      ao: { co: !0, ed: !0, gv: !0, it: !0, og: !0, pb: !0 },
      ar: { com: !0, edu: !0, gob: !0, gov: !0, int: !0, mil: !0, net: !0, org: !0, tur: !0 },
      arpa: { e164: !0, "in-addr": !0, iris: !0, ip6: !0, uri: !0, urn: !0 },
      at: { ac: !0, co: !0, gv: !0, or: !0, priv: !0 },
      au: {
        asn: !0,
        com: !0,
        net: !0,
        id: !0,
        org: !0,
        csiro: !0,
        oz: !0,
        info: !0,
        conf: !0,
        act: !0,
        nsw: !0,
        nt: !0,
        qld: !0,
        sa: !0,
        tas: !0,
        vic: !0,
        wa: !0
      },
      aw: { com: !0 },
      az: { com: !0, net: !0, int: !0, gov: !0, biz: !0, org: !0, edu: !0, mil: !0, pp: !0, name: !0, info: !0 },
      ba: { co: !0, com: !0, edu: !0, gov: !0, mil: !0, net: !0, org: !0, rs: !0, unbi: !0, unmo: !0, unsa: !0, untz: !0, unze: !0 },
      bb: { biz: !0, co: !0, com: !0, edu: !0, gov: !0, info: !0, net: !0, org: !0, store: !0, tv: !0 },
      bd: { com: !0, edu: !0, net: !0, gov: !0, org: !0, mil: !0 },
      be: { ac: !0 },
      bf: { gov: !0 },
      bh: { biz: !0, cc: !0, com: !0, edu: !0, gov: !0, info: !0, net: !0, org: !0 },
      bm: { com: !0, edu: !0, org: !0, gov: !0, net: !0 },
      bn: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      bo: { com: !0, edu: !0, gob: !0, gov: !0, int: !0, mil: !0, net: !0, org: !0, tv: !0 },
      br: {
        adm: !0,
        adv: !0,
        agr: !0,
        am: !0,
        arq: !0,
        art: !0,
        ato: !0,
        b: !0,
        bio: !0,
        blog: !0,
        bmd: !0,
        cim: !0,
        cng: !0,
        cnt: !0,
        com: !0,
        coop: !0,
        ecn: !0,
        edu: !0,
        eng: !0,
        esp: !0,
        etc: !0,
        eti: !0,
        far: !0,
        flog: !0,
        fm: !0,
        fnd: !0,
        fot: !0,
        fst: !0,
        g12: !0,
        ggf: !0,
        gov: !0,
        imb: !0,
        ind: !0,
        inf: !0,
        jor: !0,
        jus: !0,
        lel: !0,
        mat: !0,
        med: !0,
        mil: !0,
        mus: !0,
        net: !0,
        nom: !0,
        not: !0,
        ntr: !0,
        odo: !0,
        org: !0,
        ppg: !0,
        pro: !0,
        psc: !0,
        psi: !0,
        qsl: !0,
        rec: !0,
        slg: !0,
        srv: !0,
        tmp: !0,
        trd: !0,
        tur: !0,
        tv: !0,
        vet: !0,
        vlog: !0,
        wiki: !0,
        zlg: !0
      },
      bs: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      bt: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      bw: { co: !0, org: !0 },
      by: { gov: !0, mil: !0 },
      bz: { du: !0, et: !0, om: !0, ov: !0, rg: !0 },
      ca: { ab: !0, bc: !0, mb: !0, nb: !0, nf: !0, nl: !0, ns: !0, nt: !0, nu: !0, on: !0, pe: !0, qc: !0, sk: !0, yk: !0 },
      cc: { co: !0 },
      ck: { biz: !0, co: !0, edu: !0, gen: !0, gov: !0, info: !0, net: !0, org: !0 },
      cn: {
        ac: !0,
        ah: !0,
        bj: !0,
        com: !0,
        cq: !0,
        edu: !0,
        fj: !0,
        gd: !0,
        gov: !0,
        gs: !0,
        gx: !0,
        gz: !0,
        ha: !0,
        hb: !0,
        he: !0,
        hi: !0,
        hl: !0,
        hn: !0,
        jl: !0,
        js: !0,
        jx: !0,
        ln: !0,
        mil: !0,
        net: !0,
        nm: !0,
        nx: !0,
        org: !0,
        qh: !0,
        sc: !0,
        sd: !0,
        sh: !0,
        sn: !0,
        sx: !0,
        tj: !0,
        tw: !0,
        xj: !0,
        xz: !0,
        yn: !0,
        zj: !0
      },
      co: { com: !0, edu: !0, gov: !0, mil: !0, net: !0, nom: !0, org: !0 },
      cr: { ac: !0, c: !0, co: !0, ed: !0, fi: !0, go: !0, or: !0, sa: !0 },
      cx: { gov: !0 },
      cy: {
        ac: !0,
        biz: !0,
        com: !0,
        ekloges: !0,
        gov: !0,
        ltd: !0,
        name: !0,
        net: !0,
        org: !0,
        parliament: !0,
        press: !0,
        pro: !0,
        tm: !0
      },
      cu: { com: !0, edu: !0, org: !0, net: !0, gov: !0, inf: !0 },
      dm: { com: !0, net: !0, org: !0, edu: !0, gov: !0 },
      do: { art: !0, com: !0, edu: !0, gob: !0, gov: !0, mil: !0, net: !0, org: !0, sld: !0, web: !0 },
      dz: { art: !0, asso: !0, com: !0, edu: !0, gov: !0, net: !0, org: !0, pol: !0 },
      ec: { com: !0, edu: !0, fin: !0, gov: !0, info: !0, med: !0, mil: !0, net: !0, org: !0, pro: !0 },
      ee: { com: !0, org: !0, fie: !0, pri: !0 },
      eg: { com: !0, edu: !0, eun: !0, gov: !0, mil: !0, name: !0, net: !0, org: !0, sci: !0 },
      er: { com: !0, edu: !0, gov: !0, ind: !0, mil: !0, net: !0, org: !0, rochest: !0, w: !0 },
      es: { com: !0, edu: !0, gob: !0, nom: !0, org: !0 },
      et: { biz: !0, com: !0, edu: !0, gov: !0, info: !0, name: !0, net: !0, org: !0 },
      fi: { aland: !0 },
      fj: { ac: !0, biz: !0, com: !0, info: !0, mil: !0, name: !0, net: !0, org: !0, pro: !0 },
      fk: { ac: !0, co: !0, gov: !0, net: !0, nom: !0, org: !0 },
      fr: { asso: !0, com: !0, f: !0, gouv: !0, nom: !0, prd: !0, presse: !0, tm: !0 },
      ge: { com: !0, edu: !0, gov: !0, org: !0, mil: !0, net: !0, pvt: !0 },
      gg: { co: !0, net: !0, org: !0 },
      gh: { com: !0, edu: !0, gov: !0, mil: !0, org: !0 },
      gi: { com: !0, ltd: !0, gov: !0, mod: !0, edu: !0, org: !0 },
      gn: { ac: !0, com: !0, gov: !0, net: !0, org: !0 },
      gp: { com: !0, net: !0, edu: !0, asso: !0, org: !0 },
      gr: { com: !0, edu: !0, gov: !0, mil: !0, net: !0, org: !0 },
      gt: { com: !0, edu: !0, gob: !0, ind: !0, mil: !0, net: !0, org: !0 },
      gu: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      hk: { com: !0, edu: !0, gov: !0, idv: !0, net: !0, org: !0 },
      ht: {
        com: !0,
        net: !0,
        firm: !0,
        shop: !0,
        info: !0,
        pro: !0,
        adult: !0,
        org: !0,
        art: !0,
        pol: !0,
        rel: !0,
        asso: !0,
        perso: !0,
        coop: !0,
        med: !0,
        edu: !0,
        gouv: !0
      },
      hu: {
        2e3: !0,
        agrar: !0,
        bolt: !0,
        casino: !0,
        city: !0,
        co: !0,
        erotica: !0,
        erotika: !0,
        film: !0,
        forum: !0,
        games: !0,
        hotel: !0,
        info: !0,
        ingatlan: !0,
        jogasz: !0,
        konyvelo: !0,
        lakas: !0,
        media: !0,
        news: !0,
        org: !0,
        priv: !0,
        reklam: !0,
        sex: !0,
        shop: !0,
        sport: !0,
        suli: !0,
        szex: !0,
        tm: !0,
        tozsde: !0,
        utazas: !0,
        video: !0
      },
      id: { ac: !0, co: !0, go: !0, mil: !0, net: !0, or: !0, sch: !0, web: !0 },
      il: { ac: !0, co: !0, gov: !0, idf: !0, k12: !0, muni: !0, net: !0, org: !0 },
      im: { co: !0, "ltd.co": !0, "plc.co": !0, net: !0, gov: !0, org: !0, nic: !0, ac: !0 },
      in: { ac: !0, co: !0, edu: !0, ernet: !0, firm: !0, gen: !0, gov: !0, i: !0, ind: !0, mil: !0, net: !0, nic: !0, org: !0, res: !0 },
      iq: { com: !0, edu: !0, gov: !0, i: !0, mil: !0, net: !0, org: !0 },
      ir: { ac: !0, co: !0, dnssec: !0, gov: !0, i: !0, id: !0, net: !0, org: !0, sch: !0 },
      it: { edu: !0, gov: !0 },
      je: { co: !0, net: !0, org: !0 },
      jo: { com: !0, edu: !0, gov: !0, mil: !0, name: !0, net: !0, org: !0, sch: !0 },
      jp: { ac: !0, ad: !0, co: !0, ed: !0, go: !0, gr: !0, lg: !0, ne: !0, or: !0 },
      ke: { ac: !0, co: !0, go: !0, info: !0, me: !0, mobi: !0, ne: !0, or: !0, sc: !0 },
      kh: { com: !0, edu: !0, gov: !0, mil: !0, net: !0, org: !0, per: !0 },
      ki: { biz: !0, com: !0, de: !0, edu: !0, gov: !0, info: !0, mob: !0, net: !0, org: !0, tel: !0 },
      km: {
        asso: !0,
        com: !0,
        coop: !0,
        edu: !0,
        gouv: !0,
        k: !0,
        medecin: !0,
        mil: !0,
        nom: !0,
        notaires: !0,
        pharmaciens: !0,
        presse: !0,
        tm: !0,
        veterinaire: !0
      },
      kn: { edu: !0, gov: !0, net: !0, org: !0 },
      kr: {
        ac: !0,
        busan: !0,
        chungbuk: !0,
        chungnam: !0,
        co: !0,
        daegu: !0,
        daejeon: !0,
        es: !0,
        gangwon: !0,
        go: !0,
        gwangju: !0,
        gyeongbuk: !0,
        gyeonggi: !0,
        gyeongnam: !0,
        hs: !0,
        incheon: !0,
        jeju: !0,
        jeonbuk: !0,
        jeonnam: !0,
        k: !0,
        kg: !0,
        mil: !0,
        ms: !0,
        ne: !0,
        or: !0,
        pe: !0,
        re: !0,
        sc: !0,
        seoul: !0,
        ulsan: !0
      },
      kw: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      ky: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      kz: { com: !0, edu: !0, gov: !0, mil: !0, net: !0, org: !0 },
      lb: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      lc: { com: !0, org: !0, edu: !0, gov: !0 },
      li: { com: !0, net: !0, org: !0, gov: !0 },
      lk: {
        assn: !0,
        com: !0,
        edu: !0,
        gov: !0,
        grp: !0,
        hotel: !0,
        int: !0,
        ltd: !0,
        net: !0,
        ngo: !0,
        org: !0,
        sch: !0,
        soc: !0,
        web: !0
      },
      lr: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      ls: { org: !0, co: !0 },
      lt: { gov: !0, mil: !0 },
      lu: { gov: !0, mil: !0, org: !0, net: !0 },
      lv: { asn: !0, com: !0, conf: !0, edu: !0, gov: !0, id: !0, mil: !0, net: !0, org: !0 },
      ly: { com: !0, edu: !0, gov: !0, id: !0, med: !0, net: !0, org: !0, plc: !0, sch: !0 },
      ma: { ac: !0, co: !0, gov: !0, m: !0, net: !0, org: !0, press: !0 },
      mc: { asso: !0, tm: !0 },
      me: { ac: !0, co: !0, edu: !0, gov: !0, its: !0, net: !0, org: !0, priv: !0 },
      mg: { com: !0, edu: !0, gov: !0, mil: !0, nom: !0, org: !0, prd: !0, tm: !0 },
      mk: { com: !0, edu: !0, gov: !0, inf: !0, name: !0, net: !0, org: !0, pro: !0 },
      ml: { com: !0, edu: !0, gov: !0, net: !0, org: !0, presse: !0 },
      mn: { edu: !0, gov: !0, org: !0 },
      mo: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      mt: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      mv: {
        aero: !0,
        biz: !0,
        com: !0,
        coop: !0,
        edu: !0,
        gov: !0,
        info: !0,
        int: !0,
        mil: !0,
        museum: !0,
        name: !0,
        net: !0,
        org: !0,
        pro: !0
      },
      mw: { ac: !0, co: !0, com: !0, coop: !0, edu: !0, gov: !0, int: !0, museum: !0, net: !0, org: !0 },
      mx: { com: !0, edu: !0, gob: !0, net: !0, org: !0 },
      my: { com: !0, edu: !0, gov: !0, mil: !0, name: !0, net: !0, org: !0, sch: !0 },
      nf: { arts: !0, com: !0, firm: !0, info: !0, net: !0, other: !0, per: !0, rec: !0, store: !0, web: !0 },
      ng: { biz: !0, com: !0, edu: !0, gov: !0, mil: !0, mobi: !0, name: !0, net: !0, org: !0, sch: !0 },
      ni: { ac: !0, co: !0, com: !0, edu: !0, gob: !0, mil: !0, net: !0, nom: !0, org: !0 },
      no: { mil: !0, stat: !0, kommune: !0, herad: !0, priv: !0, vgs: !0, fhs: !0, museum: !0, fylkesbibl: !0, folkebibl: !0, idrett: !0 },
      np: { com: !0, edu: !0, gov: !0, mil: !0, net: !0, org: !0 },
      nr: { biz: !0, com: !0, edu: !0, gov: !0, info: !0, net: !0, org: !0 },
      om: { ac: !0, biz: !0, co: !0, com: !0, edu: !0, gov: !0, med: !0, mil: !0, museum: !0, net: !0, org: !0, pro: !0, sch: !0 },
      pe: { com: !0, edu: !0, gob: !0, mil: !0, net: !0, nom: !0, org: !0, sld: !0 },
      pf: { com: !0, org: !0, edu: !0 },
      pg: { "com.pg": !0, net: !0 },
      ph: { com: !0, edu: !0, gov: !0, i: !0, mil: !0, net: !0, ngo: !0, org: !0 },
      pk: { biz: !0, com: !0, edu: !0, fam: !0, gob: !0, gok: !0, gon: !0, gop: !0, gos: !0, gov: !0, net: !0, org: !0, web: !0 },
      pl: {
        art: !0,
        bialystok: !0,
        biz: !0,
        com: !0,
        edu: !0,
        gda: !0,
        gdansk: !0,
        gorzow: !0,
        gov: !0,
        info: !0,
        katowice: !0,
        krakow: !0,
        lodz: !0,
        lublin: !0,
        mil: !0,
        net: !0,
        ngo: !0,
        olsztyn: !0,
        org: !0,
        poznan: !0,
        pwr: !0,
        radom: !0,
        slupsk: !0,
        szczecin: !0,
        torun: !0,
        warszawa: !0,
        waw: !0,
        wroc: !0,
        wroclaw: !0,
        zgora: !0
      },
      pr: { ac: !0, biz: !0, com: !0, edu: !0, est: !0, gov: !0, info: !0, isla: !0, name: !0, net: !0, org: !0, pro: !0, prof: !0 },
      pro: { law: !0, med: !0, cpa: !0 },
      ps: { com: !0, edu: !0, gov: !0, net: !0, org: !0, plo: !0, sec: !0 },
      pt: { com: !0, edu: !0, gov: !0, int: !0, net: !0, nome: !0, org: !0, publ: !0 },
      pw: { belau: !0, co: !0, ed: !0, go: !0, ne: !0, or: !0 },
      ro: { arts: !0, com: !0, firm: !0, info: !0, nom: !0, nt: !0, org: !0, rec: !0, store: !0, tm: !0, www: !0 },
      rs: { ac: !0, co: !0, edu: !0, gov: !0, in: !0, org: !0 },
      sb: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      sc: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      sh: { co: !0, com: !0, edu: !0, gov: !0, net: !0, nom: !0, org: !0 },
      sl: { com: !0, edu: !0, gov: !0, net: !0, org: !0 },
      st: {
        co: !0,
        com: !0,
        consulado: !0,
        edu: !0,
        embaixada: !0,
        gov: !0,
        mil: !0,
        net: !0,
        org: !0,
        principe: !0,
        saotome: !0,
        store: !0
      },
      sv: { com: !0, edu: !0, gob: !0, org: !0, red: !0 },
      sz: { ac: !0, co: !0, org: !0 },
      tr: {
        av: !0,
        bbs: !0,
        bel: !0,
        biz: !0,
        com: !0,
        dr: !0,
        edu: !0,
        gen: !0,
        gov: !0,
        info: !0,
        k12: !0,
        name: !0,
        net: !0,
        org: !0,
        pol: !0,
        tel: !0,
        tsk: !0,
        tv: !0,
        web: !0
      },
      tt: {
        aero: !0,
        biz: !0,
        cat: !0,
        co: !0,
        com: !0,
        coop: !0,
        edu: !0,
        gov: !0,
        info: !0,
        int: !0,
        jobs: !0,
        mil: !0,
        mobi: !0,
        museum: !0,
        name: !0,
        net: !0,
        org: !0,
        pro: !0,
        tel: !0,
        travel: !0
      },
      tw: { club: !0, com: !0, ebiz: !0, edu: !0, game: !0, gov: !0, idv: !0, mil: !0, net: !0, org: !0 },
      mu: { ac: !0, co: !0, com: !0, gov: !0, net: !0, or: !0, org: !0 },
      mz: { ac: !0, co: !0, edu: !0, gov: !0, org: !0 },
      na: { co: !0, com: !0 },
      nz: {
        ac: !0,
        co: !0,
        cri: !0,
        geek: !0,
        gen: !0,
        govt: !0,
        health: !0,
        iwi: !0,
        maori: !0,
        mil: !0,
        net: !0,
        org: !0,
        parliament: !0,
        school: !0
      },
      pa: { abo: !0, ac: !0, com: !0, edu: !0, gob: !0, ing: !0, med: !0, net: !0, nom: !0, org: !0, sld: !0 },
      py: { com: !0, edu: !0, gov: !0, mil: !0, net: !0, org: !0 },
      qa: { com: !0, edu: !0, gov: !0, mil: !0, net: !0, org: !0 },
      re: { asso: !0, com: !0, nom: !0 },
      ru: {
        ac: !0,
        adygeya: !0,
        altai: !0,
        amur: !0,
        arkhangelsk: !0,
        astrakhan: !0,
        bashkiria: !0,
        belgorod: !0,
        bir: !0,
        bryansk: !0,
        buryatia: !0,
        cbg: !0,
        chel: !0,
        chelyabinsk: !0,
        chita: !0,
        chukotka: !0,
        chuvashia: !0,
        com: !0,
        dagestan: !0,
        "e-burg": !0,
        edu: !0,
        gov: !0,
        grozny: !0,
        int: !0,
        irkutsk: !0,
        ivanovo: !0,
        izhevsk: !0,
        jar: !0,
        "joshkar-ola": !0,
        kalmykia: !0,
        kaluga: !0,
        kamchatka: !0,
        karelia: !0,
        kazan: !0,
        kchr: !0,
        kemerovo: !0,
        khabarovsk: !0,
        khakassia: !0,
        khv: !0,
        kirov: !0,
        koenig: !0,
        komi: !0,
        kostroma: !0,
        kranoyarsk: !0,
        kuban: !0,
        kurgan: !0,
        kursk: !0,
        lipetsk: !0,
        magadan: !0,
        mari: !0,
        "mari-el": !0,
        marine: !0,
        mil: !0,
        mordovia: !0,
        mosreg: !0,
        msk: !0,
        murmansk: !0,
        nalchik: !0,
        net: !0,
        nnov: !0,
        nov: !0,
        novosibirsk: !0,
        nsk: !0,
        omsk: !0,
        orenburg: !0,
        org: !0,
        oryol: !0,
        penza: !0,
        perm: !0,
        pp: !0,
        pskov: !0,
        ptz: !0,
        rnd: !0,
        ryazan: !0,
        sakhalin: !0,
        samara: !0,
        saratov: !0,
        simbirsk: !0,
        smolensk: !0,
        spb: !0,
        stavropol: !0,
        stv: !0,
        surgut: !0,
        tambov: !0,
        tatarstan: !0,
        tom: !0,
        tomsk: !0,
        tsaritsyn: !0,
        tsk: !0,
        tula: !0,
        tuva: !0,
        tver: !0,
        tyumen: !0,
        udm: !0,
        udmurtia: !0,
        "ulan-ude": !0,
        vladikavkaz: !0,
        vladimir: !0,
        vladivostok: !0,
        volgograd: !0,
        vologda: !0,
        voronezh: !0,
        vrn: !0,
        vyatka: !0,
        yakutia: !0,
        yamal: !0,
        yekaterinburg: !0,
        "yuzhno-sakhalinsk": !0
      },
      rw: { ac: !0, co: !0, com: !0, edu: !0, gouv: !0, gov: !0, int: !0, mil: !0, net: !0 },
      sa: { com: !0, edu: !0, gov: !0, med: !0, net: !0, org: !0, pub: !0, sch: !0 },
      sd: { com: !0, edu: !0, gov: !0, info: !0, med: !0, net: !0, org: !0, tv: !0 },
      se: {
        a: !0,
        ac: !0,
        b: !0,
        bd: !0,
        c: !0,
        d: !0,
        e: !0,
        f: !0,
        g: !0,
        h: !0,
        i: !0,
        k: !0,
        l: !0,
        m: !0,
        n: !0,
        o: !0,
        org: !0,
        p: !0,
        parti: !0,
        pp: !0,
        press: !0,
        r: !0,
        s: !0,
        t: !0,
        tm: !0,
        u: !0,
        w: !0,
        x: !0,
        y: !0,
        z: !0
      },
      sg: { com: !0, edu: !0, gov: !0, idn: !0, net: !0, org: !0, per: !0 },
      sn: { art: !0, com: !0, edu: !0, gouv: !0, org: !0, perso: !0, univ: !0 },
      sy: { com: !0, edu: !0, gov: !0, mil: !0, net: !0, news: !0, org: !0 },
      th: { ac: !0, co: !0, go: !0, in: !0, mi: !0, net: !0, or: !0 },
      tj: {
        ac: !0,
        biz: !0,
        co: !0,
        com: !0,
        edu: !0,
        go: !0,
        gov: !0,
        info: !0,
        int: !0,
        mil: !0,
        name: !0,
        net: !0,
        nic: !0,
        org: !0,
        test: !0,
        web: !0
      },
      tn: {
        agrinet: !0,
        com: !0,
        defense: !0,
        edunet: !0,
        ens: !0,
        fin: !0,
        gov: !0,
        ind: !0,
        info: !0,
        intl: !0,
        mincom: !0,
        nat: !0,
        net: !0,
        org: !0,
        perso: !0,
        rnrt: !0,
        rns: !0,
        rnu: !0,
        tourism: !0
      },
      tz: { ac: !0, co: !0, go: !0, ne: !0, or: !0 },
      ua: {
        biz: !0,
        cherkassy: !0,
        chernigov: !0,
        chernovtsy: !0,
        ck: !0,
        cn: !0,
        co: !0,
        com: !0,
        crimea: !0,
        cv: !0,
        dn: !0,
        dnepropetrovsk: !0,
        donetsk: !0,
        dp: !0,
        edu: !0,
        gov: !0,
        if: !0,
        in: !0,
        "ivano-frankivsk": !0,
        kh: !0,
        kharkov: !0,
        kherson: !0,
        khmelnitskiy: !0,
        kiev: !0,
        kirovograd: !0,
        km: !0,
        kr: !0,
        ks: !0,
        kv: !0,
        lg: !0,
        lugansk: !0,
        lutsk: !0,
        lviv: !0,
        me: !0,
        mk: !0,
        net: !0,
        nikolaev: !0,
        od: !0,
        odessa: !0,
        org: !0,
        pl: !0,
        poltava: !0,
        pp: !0,
        rovno: !0,
        rv: !0,
        sebastopol: !0,
        sumy: !0,
        te: !0,
        ternopil: !0,
        uzhgorod: !0,
        vinnica: !0,
        vn: !0,
        zaporizhzhe: !0,
        zhitomir: !0,
        zp: !0,
        zt: !0
      },
      ug: { ac: !0, co: !0, go: !0, ne: !0, or: !0, org: !0, sc: !0 },
      uk: {
        ac: !0,
        bl: !0,
        "british-library": !0,
        co: !0,
        cym: !0,
        gov: !0,
        govt: !0,
        icnet: !0,
        jet: !0,
        lea: !0,
        ltd: !0,
        me: !0,
        mil: !0,
        mod: !0,
        "national-library-scotland": !0,
        nel: !0,
        net: !0,
        nhs: !0,
        nic: !0,
        nls: !0,
        org: !0,
        orgn: !0,
        parliament: !0,
        plc: !0,
        police: !0,
        sch: !0,
        scot: !0,
        soc: !0
      },
      us: { dni: !0, fed: !0, isa: !0, kids: !0, nsn: !0 },
      uy: { com: !0, edu: !0, gub: !0, mil: !0, net: !0, org: !0 },
      ve: { co: !0, com: !0, edu: !0, gob: !0, info: !0, mil: !0, net: !0, org: !0, web: !0 },
      vi: { co: !0, com: !0, k12: !0, net: !0, org: !0 },
      vn: { ac: !0, biz: !0, com: !0, edu: !0, gov: !0, health: !0, info: !0, int: !0, name: !0, net: !0, org: !0, pro: !0 },
      ye: { co: !0, com: !0, gov: !0, ltd: !0, me: !0, net: !0, org: !0, plc: !0 },
      yu: { ac: !0, co: !0, edu: !0, gov: !0, org: !0 },
      za: {
        ac: !0,
        agric: !0,
        alt: !0,
        bourse: !0,
        city: !0,
        co: !0,
        cybernet: !0,
        db: !0,
        edu: !0,
        gov: !0,
        grondar: !0,
        iaccess: !0,
        imt: !0,
        inca: !0,
        landesign: !0,
        law: !0,
        mil: !0,
        net: !0,
        ngo: !0,
        nis: !0,
        nom: !0,
        olivetti: !0,
        org: !0,
        pix: !0,
        school: !0,
        tm: !0,
        web: !0
      },
      zm: { ac: !0, co: !0, com: !0, edu: !0, gov: !0, net: !0, org: !0, sch: !0 }
    };
    a.getSLD = function (e) {
      if (a.isNil(e)) return null;
      var b = e.split("."),
        f = b.length - 2;
      if (0 > f) return null;
      e = b[f];
      b = b[f + 1];
      f = c[b];
      return a.isNil(f) || a.isNil(f[e]) ? null : e + "." + b;
    };
    a.depthOfTLDorSLD = function (e) {
      if (a.isNil(e)) return null;
      e = a.getSLD(e);
      return a.isntNil(e) ? 2 : 1;
    };
    a.isInteger = function (e) {
      return a.isNil(e) ? !1 : "number" === typeof e && isFinite(e) && Math.floor(e) === e;
    };
    a.isNumber = function (e) {
      return a.isNil(e) ? !1 : "number" === typeof e && isFinite(e);
    };
    a.isSuccessCode = function (e) {
      return a.isNil(e)
        ? !1
        : e === f.httpStatusCodes.OK ||
          e === f.httpStatusCodes.PARTIAL_CONTENT ||
          e === f.httpStatusCodes.CREATED ||
          e === f.httpStatusCodes.NO_CONTENT
        ? !0
        : !1;
    };
    a.safeFetch = function (a, c, b) {
      c = void 0 === c ? {} : c;
      b = void 0 === b ? f.DEFAULT_FETCH_TIMEOUT : b;
      return new Promise(function (e, f) {
        var k = setTimeout(function () {
          f(Error("Request timed out " + a));
        }, b);
        fetch(a, c)
          .then(function (a) {
            clearTimeout(k);
            e(a);
          })
          .catch(function (a) {
            clearTimeout(k);
            f(a);
          });
      });
    };
    a.isSuccessCodeLocalFile = function (e) {
      return a.isInteger(e) ? (("Safari" === b.globals.BROWSER && 0 === e) || e === f.httpStatusCodes.OK ? !0 : !1) : !1;
    };
    a.urlWithoutQueryParameters = function (e, c) {
      a.isNil(c) && (c = !0);
      if (a.isNil(e)) return null;
      var b = new URI(e),
        k = b.protocol();
      if (a.isNil(k) || "" === k || !f.PROTOCOLS.includes(k)) (k = "http"), (b = new URI(k + "://" + e));
      e = b.hostname();
      b = b.path();
      if (a.isNil(b) || "/" === b) b = "";
      return c ? k + "://" + e + b : e + b;
    };
    a.baseURL = function (c) {
      return a.isNil(c) ? null : new URI(c).hostname();
    };
    a.pathName = function (c) {
      return a.isNil(c) ? null : new URI(c).pathname();
    };
    a.urlProtocol = function (c) {
      if (a.isNil(c)) return null;
      c = new URI(c).protocol();
      return "" === c ? null : c;
    };
    a.getUrlTLD = function (c) {
      if (a.isNil(c)) return null;
      c = new URI(c).tld();
      return "" === c ? null : c;
    };
    a.getCompanyDomain = function (c) {
      if (a.isNil(c)) return null;
      var b = new URI(c).hostname();
      c = a.getUrlTLD(c);
      return "" === b
        ? null
        : a.isntNil(c) && 0 < b.indexOf(c)
        ? ((b = b.substring(0, b.lastIndexOf(c) - 1).split(".")), b[b.length - 1])
        : b;
    };
    a.getDomain = function (c) {
      if (a.isNil(c)) return null;
      c = new URI(c).domain();
      return "" === c ? null : c;
    };
    a.isUrlAnIp = function (c) {
      return a.isNil(c) ? null : new URI(c).is(f.utils.IP);
    };
    a.getFileNameExtension = function (c) {
      if (!a.isString(c)) return null;
      c = new URI(c).suffix();
      return "" === c ? null : c;
    };
    a.appendToObject = function (c, b) {
      if (a.isNil(c) || a.isNil(b)) throw Error("invalid arguments to appendToObject");
      Object.keys(b).forEach(function (a) {
        c[a] = b[a];
      });
    };
    a.createCustomHTMLEvent = function (c, b) {
      if (!1 === a.isString(c)) throw Error("Event name cannot be null and has to be a string");
      c = new CustomEvent(c, { detail: b });
      window.dispatchEvent(c);
    };
    a.isTopLevelWindow = function () {
      return "Edge" === b.globals.BROWSER ? (window.top.location == window.self.location ? !0 : !1) : window.top == window.self ? !0 : !1;
    };
    a.getActiveElement = function () {
      return document.activeElement;
    };
    a.verifyJson = function (a, c, b, f) {
      try {
        var e = forge.md.sha256.create();
        e.update(JSON.stringify(a));
        var k = e.digest().toHex(),
          g = KEYUTIL.getKey(b);
        if (!0 === KJUR.jws.JWS.verify(c, g, f)) {
          var h = b64utoutf8(c.split(".")[1]);
          return KJUR.jws.JWS.readSafeJSONString(h).hash === k;
        }
        return !1;
      } catch (q) {
        return !1;
      }
    };
    a.isNewVersionUpdated = function (a, c) {
      c = c.split(".");
      a = a.split(".");
      var b = c[1] !== a[1];
      return c[0] !== a[0] || b ? !0 : !1;
    };
    a.isStorePageURL = function (c) {
      return a.isString(c)
        ? "Edge" === b.globals.BROWSER
          ? new RegExp(f.STORE_URLS[b.globals.BROWSER]).test(c)
          : c.startsWith(f.STORE_URLS[b.globals.BROWSER])
          ? !0
          : !1
        : !1;
    };
    a.upperCaseFirstLetter = function (c) {
      return a.isString(c) ? c.charAt(0).toUpperCase() + c.slice(1) : c;
    };
    a.setTimeout = function (c) {
      return new Promise(function (b, e) {
        return a.isInteger(c) ? window.setTimeout(b, c) : e(Error("Delay must be an integer"));
      });
    };
    a.getValueAtPath = function (c, f, d) {
      f = b.utils.isString(f) ? f.split(/[.[\]]/g).filter(Boolean) : f;
      a.isArray(f) || (f = [f]);
      return f.reduce(function (c, b) {
        return a.objectHas(c, b) ? c[b] : d;
      }, c || {});
    };
    a.setDoNotTrack = function (c) {
      c = void 0 === c ? !1 : c;
      if (!a.isBoolean(c)) throw Error("Parameter to setDoNotTrack should be a boolean");
      try {
        Object.defineProperty(navigator, "doNotTrack", { value: c ? "1" : "0", writable: !1, configurable: !0 });
      } catch (k) {}
    };
    a.getRandomIntInRange = function (c, b) {
      if (!a.isInteger(c) || !a.isInteger(b) || c > b || c < f.RANDOM_NUMBER_LIMITS.MIN || b > f.RANDOM_NUMBER_LIMITS.MAX)
        throw Error("Invalid min or max value");
      var e = new Uint32Array(1);
      window.crypto.getRandomValues(e);
      return Math.floor((e[0] / 4294967296) * (b - c + 1)) + c;
    };
    a.isTrustedEvent = function (c) {
      if (a.isNil(c)) throw Error("event should not be null");
      return c.isTrusted;
    };
    return a;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.base64 = (function (b) {
    var a = {
      _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      _utf8Encode: function (a) {
        a = a.replace(/\r\n/g, "\n");
        for (var c = "", b = 0; b < a.length; b++) {
          var f = a.charCodeAt(b);
          128 > f
            ? (c += String.fromCharCode(f))
            : (127 < f && 2048 > f
                ? (c += String.fromCharCode((f >> 6) | 192))
                : ((c += String.fromCharCode((f >> 12) | 224)), (c += String.fromCharCode(((f >> 6) & 63) | 128))),
              (c += String.fromCharCode((f & 63) | 128)));
        }
        return c;
      },
      _utf8Decode: function (a) {
        for (var c = "", b = 0, f, d, g; b < a.length; )
          (f = a.charCodeAt(b)),
            128 > f
              ? ((c += String.fromCharCode(f)), b++)
              : 191 < f && 224 > f
              ? ((d = a.charCodeAt(b + 1)), (c += String.fromCharCode(((f & 31) << 6) | (d & 63))), (b += 2))
              : ((d = a.charCodeAt(b + 1)),
                (g = a.charCodeAt(b + 2)),
                (c += String.fromCharCode(((f & 15) << 12) | ((d & 63) << 6) | (g & 63))),
                (b += 3));
        return c;
      },
      encode: function (b) {
        var c = "",
          e = 0;
        for (b = a._utf8Encode(b); e < b.length; ) {
          var f = b.charCodeAt(e++);
          var d = b.charCodeAt(e++);
          var g = b.charCodeAt(e++);
          var p = f >> 2;
          f = ((f & 3) << 4) | (d >> 4);
          var m = ((d & 15) << 2) | (g >> 6);
          var n = g & 63;
          isNaN(d) ? (m = n = 64) : isNaN(g) && (n = 64);
          c = c + a._keyStr.charAt(p) + a._keyStr.charAt(f) + a._keyStr.charAt(m) + a._keyStr.charAt(n);
        }
        return c;
      },
      decode: function (b) {
        var c = "",
          e = 0;
        for (b = b.replace(/[^A-Za-z0-9\+\/=]\./g, ""); e < b.length; ) {
          var f = a._keyStr.indexOf(b.charAt(e++));
          var d = a._keyStr.indexOf(b.charAt(e++));
          var g = a._keyStr.indexOf(b.charAt(e++));
          var p = a._keyStr.indexOf(b.charAt(e++));
          f = (f << 2) | (d >> 4);
          d = ((d & 15) << 4) | (g >> 2);
          var m = ((g & 3) << 6) | p;
          c += String.fromCharCode(f);
          64 != g && (c += String.fromCharCode(d));
          64 != p && (c += String.fromCharCode(m));
        }
        c = a._utf8Decode(c);
        return c.replace(/\0.*$/g, "");
      }
    };
    return a;
  })();
})(window);
(function (d) {
  var b = Math.pow(2, 31) - 1;
  d.SymBfw.extensionAdapter = (function (a) {
    var f = {},
      c = a.utils.isNil,
      e = a.utils.isntNil,
      d = a.utils.isString,
      l = a.utils.isInteger,
      g = a.utils.isFunction,
      p = a.utils.isArray,
      m = a.utils.isObject,
      n = a.utils.getValueAtPath;
    f._systemColorThemeDark = window.matchMedia("(prefers-color-scheme: dark)");
    f.getWindowIDNone = function () {
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      return chrome.windows.WINDOW_ID_NONE;
    };
    f.getLastError = function () {
      return chrome.runtime.lastError;
    };
    f.getInvalidTabId = function () {
      return c(chrome) || c(chrome.tabs) ? -1 : chrome.tabs.TAB_ID_NONE;
    };
    f.getExtensionId = function () {
      return chrome.runtime.id;
    };
    f.reloadExtension = function () {
      if (c(chrome) || c(chrome.runtime)) throw Error("chrome is null or chrome.runtime is null");
      chrome.runtime.reload();
    };
    f.isPrivateModeAllowed = function () {
      return new Promise(function (a) {
        chrome.extension.isAllowedIncognitoAccess(function (h) {
          a(h);
        });
      });
    };
    f.getBackgroundPage = function () {
      return c(chrome) || c(chrome.extension) ? null : chrome.extension.getBackgroundPage();
    };
    f.getExtensionURL = function (a) {
      if (c(chrome) || c(chrome.runtime)) throw Error("chrome or chrome.runtime is null");
      if (!d(a)) throw Error("extensionAdapter.getExtensionURL expects a string path argument");
      return chrome.runtime.getURL(a);
    };
    f.getAllWindows = function (a, b) {
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      if (!g(a)) throw Error("invalid arguments to extensionAdapter.getAllWindows");
      c(b) && (b = {});
      chrome.windows.getAll(b, a);
    };
    f.getCurrentWindow = function (a, b) {
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      if (!g(a)) throw Error("invalid arguments to extensionAdapter.getAllWindows");
      c(b) && (b = {});
      chrome.windows.getCurrent(b, a);
    };
    f.createWindow = function (h, b, f) {
      f = void 0 === f ? !0 : f;
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      var d = {};
      a.globals.BROWSER !== a.constants.BROWSER_TYPE.FIREFOX && (d.focused = f);
      e(h) && (d.url = h);
      chrome.windows.create(d, b);
    };
    f.createAppWindow = function (a, b) {
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      var h = {};
      h.type = chrome.windows.CreateType.PANEL;
      e(a) && (h.url = a);
      chrome.windows.create(h, b);
    };
    f.createPrivateWindow = function (a, b, f) {
      f = void 0 === f ? !0 : f;
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      f = { incognito: !0, focused: f };
      e(a) && (f.url = a);
      chrome.windows.create(f, b);
    };
    f.closeWindow = function (a, b) {
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      if (!l(a)) throw Error("invalid arguments to extensionAdapter.closeWindow");
      chrome.windows.remove(a, b);
    };
    f.focusWindow = function (a, b) {
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      if (!l(a)) throw Error("invalid arguments to extensionAdapter.focusWindow");
      chrome.windows.update(a, { focused: !0 }, b);
    };
    f.addWindowRemovedEventListener = function (a) {
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      if (!g(a)) throw Error("extensionAdapter.addWindowRemovedEventListener needs a callback");
      chrome.windows.onRemoved.addListener(a);
    };
    f.removeWindowRemovedEventListener = function (a) {
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      if (!g(a)) throw Error("extensionAdapter.removeWindowRemovedEventListener needs a callback");
      chrome.windows.onRemoved.hasListeners() && chrome.windows.onRemoved.removeListener(a);
    };
    f.addWindowFocusedEventListener = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.windows is null");
      if (!g(a)) throw Error("extensionAdapter.addWindowFocusedEventListener needs a callback");
      chrome.windows.onFocusChanged.addListener(a);
    };
    f.getTab = function (a, b) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!l(a) || !g(b)) throw Error("invalid arguments to extensionAdapter.getTab");
      chrome.tabs.get(a, b);
    };
    f.detectLanguageByTabId = function (a) {
      return (function (a) {
        if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
        if (!l(a)) throw Error("invalid arguments to extensionAdapter.detectLanguageByTabId");
        return !0;
      })(a) && g(chrome.tabs.detectLanguage)
        ? new Promise(function (c, h) {
            chrome.tabs.detectLanguage(a, function (a) {
              c(a);
            });
          })
        : null;
    };
    f.getActiveTab = function (a, b) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!g(a)) throw Error("invalid arguments to extensionAdapter.getActiveTab");
      var h = { active: !0 };
      l(b) ? (h.windowId = b) : (h.currentWindow = !0);
      chrome.tabs.query(h, function (c) {
        a(c[0]);
      });
    };
    f.getAllTabs = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!g(a)) throw Error("invalid arguments to extensionAdapter.getAllTabs");
      chrome.tabs.query({}, a);
    };
    f.getTabsWithURL = function (a, b) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!d(a) || !g(b)) throw Error("invalid arguments to extensionAdapter.getTabsWithURL");
      chrome.tabs.query({ url: a }, b);
    };
    f.updateTabUrl = function (a, b, e) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!l(a) || !d(b)) throw Error("invalid arguments to extensionAdapter.updateTabUrl");
      chrome.tabs.update(a, { url: b }, e);
    };
    f.activateTab = function (a, b) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (c(a) || !l(a)) throw Error("invalid arguments to extensionAdapter.activateTab");
      chrome.tabs.update(a, { active: !0 }, b);
    };
    f.createTab = function (a, b, e) {
      e = void 0 === e ? !0 : e;
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      c(a) ? chrome.tabs.create({}, b) : chrome.tabs.create({ url: a, active: e }, b);
    };
    f.closeTab = function (a, b) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!l(a) && !p(a)) throw Error("invalid arguments to extensionAdapter.closeTab");
      chrome.tabs.remove(a, b);
    };
    f.closeTabAndEnsureBrowserIsAlive = function (a, c) {
      if (!l(a) || 0 >= a || (e(c) && !g(c))) throw Error("Invalid arguments to extensionAdapter.closeTabAndEnsureBrowserIsAlive()");
      f.getAllWindows(function (b) {
        1 === b.length
          ? f.getAllTabs(function (b) {
              1 === b.length && f.createTab();
              f.closeTab(a);
              e(c) && c();
            })
          : (f.closeTab(a), e(c) && c());
      });
    };
    f.addTabRemovedEventListener = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!g(a)) throw Error("extensionAdapter.addTabRemovedEventListener needs a callback");
      chrome.tabs.onRemoved.addListener(a);
    };
    f.removeTabRemovedEventListener = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!g(a)) throw Error("extensionAdapter.removeTabRemovedEventListener needs a callback");
      chrome.tabs.onRemoved.hasListener(a) && chrome.tabs.onRemoved.removeListener(a);
    };
    f.removeTabActivatedEventListener = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!g(a)) throw Error("extensionAdapter.removeTabActivatedEventListener needs a callback");
      chrome.tabs.onActivated.hasListener(a) && chrome.tabs.onActivated.removeListener(a);
    };
    f.addTabActivatedEventListener = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!g(a)) throw Error("extensionAdapter.addTabActivatedEventListener needs a callback");
      chrome.tabs.onActivated.addListener(a);
    };
    f.addTabReplacedEventListener = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (c(a) || !g(a)) throw Error("extensionAdapter.addTabReplacedEventListener needs a callback");
      chrome.tabs.onReplaced.addListener(a);
    };
    f.addTabUpdatedEventListener = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!g(a)) throw Error("extensionAdapter.addTabUpdatedEventListener needs a callback");
      chrome.tabs.onUpdated.addListener(a);
    };
    f.removeTabUpdatedEventListener = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!g(a)) throw Error("extensionAdapter.removeTabUpdatedEventListener needs a callback");
      chrome.tabs.onUpdated.hasListener(a) && chrome.tabs.onUpdated.removeListener(a);
    };
    f.addBeforeNavigateEventListener = function (a) {
      if (c(chrome) || c(chrome.webNavigation)) throw Error("no chrome object available");
      if (!g(a)) throw Error("addBeforeNavigateListener needs a callback");
      chrome.webNavigation.onBeforeNavigate.addListener(a);
    };
    f.removeBeforeNavigateEventListener = function (a) {
      if (c(chrome) || c(chrome.webNavigation)) throw Error("no chrome object available");
      if (!g(a)) throw Error("removeBeforeNavigateEventListener needs a callback");
      chrome.webNavigation.onBeforeNavigate.hasListener(a) && chrome.webNavigation.onBeforeNavigate.removeListener(a);
    };
    f.addNavigationCommittedEventListener = function (a) {
      if (c(chrome) || c(chrome.webNavigation)) throw Error("no chrome object available");
      if (!g(a)) throw Error("addBeforeNavigateListener needs a callback");
      chrome.webNavigation.onCommitted.addListener(a);
    };
    f.removeNavigationCommittedEventListener = function (a) {
      if (c(chrome) || c(chrome.webNavigation)) throw Error("no chrome object available");
      if (!g(a)) throw Error("removeNavigationCommittedEventListener needs a callback");
      chrome.webNavigation.onCommitted.hasListener(a) && chrome.webNavigation.onCommitted.removeListener(a);
    };
    f.addNavigationCompletedEventListener = function (a) {
      if (c(chrome) || c(chrome.webNavigation)) throw Error("no chrome object available");
      if (!g(a)) throw Error("addNavigationCompletedEventListener needs a callback");
      chrome.webNavigation.onCompleted.addListener(a);
    };
    f.removeNavigationCompletedEventListener = function (a) {
      if (c(chrome) || c(chrome.webNavigation)) throw Error("no chrome object available");
      if (!g(a)) throw Error("removeNavigationCompletedEventListener needs a callback");
      chrome.webNavigation.onCompleted.hasListener(a) && chrome.webNavigation.onCompleted.removeListener(a);
    };
    f.addOnBeforeRequestEventListener = function (a, b, e) {
      if (c(chrome) || c(chrome.webRequest)) throw Error("chrome is null or chrome.tabs is null");
      if (!1 === g(a)) throw Error("Callback cannot be null");
      chrome.webRequest.onBeforeRequest.addListener(a, { urls: b }, e);
    };
    f.removeOnBeforeRequestEventListener = function (a) {
      chrome.webRequest.onBeforeRequest.removeListener(a);
    };
    f.addWebRequestErrorListener = function (a, c) {
      window.chrome.webRequest.onErrorOccurred.addListener(a, c);
    };
    f.removeWebRequestErrorListener = function (a) {
      window.chrome.webRequest.onErrorOccurred.removeListener(a);
    };
    f.setBrowserIcon = function (a, b) {
      if (c(chrome) || c(chrome.browserAction)) throw Error("chrome is null or chrome.browserAction is null");
      if (c(a)) throw Error("invalid arguments to extensionAdapter.setBrowserIcon");
      chrome.browserAction.setIcon(a, b);
    };
    f.sendMessage = function (a, b) {
      if (c(chrome) || c(chrome.runtime)) throw Error("chrome or chrome.runtime is null");
      if (c(a)) throw Error("invalid arguments to extensionAdapter.sendMessage");
      chrome.runtime.sendMessage(a, b);
    };
    f.sendMessageExternal = function (a, b, e) {
      if (c(chrome) || c(chrome.runtime)) throw Error("chrome or chrome.runtime is null");
      if (c(a)) throw Error("invalid arguments to extensionAdapter.sendMessage");
      if (c(b)) throw Error("invalid arguments to extensionAdapter.sendMessage");
      chrome.runtime.sendMessage(a, b, e);
    };
    f.sendMessageToTab = function (a, b, e, f) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome or chrome.tabs is null");
      if (c(b) || c(a)) throw Error("invalid arguments to extensionAdapter.sendMessageToTab");
      chrome.tabs.sendMessage(a.id, b, f, e);
    };
    f.sendMessageToParentFrame = function (a, b, e, d) {
      if (c(b) || c(a)) throw Error("invalid arguments to extensionAdapter.sendMessageToParentFrame");
      f.getFrame({ tabId: a.id, frameId: d }).then(function (c) {
        f.sendMessageToTab(a, b, e, { frameId: c.parentFrameId });
      });
    };
    f.addMessageListener = function (a) {
      if (c(chrome) || c(chrome.runtime)) throw Error("chrome or chrome.runtime is null");
      if (!g(a)) throw Error("invalid arguments to extensionAdapter.addMessageListener");
      chrome.runtime.onMessage.addListener(function (c, b, h) {
        return a(c, h, b.tab, b.frameId, b.url);
      });
    };
    f.addMessageExternalListener = function (a) {
      if (c(chrome) || c(chrome.runtime)) throw Error("chrome or chrome.runtime is null");
      if (!g(a)) throw Error("invalid arguments to extensionAdapter.addMessageExternalListener");
      chrome.runtime.onMessageExternal.addListener(function (c, b, h) {
        return a(c, b, h);
      });
    };
    f.addBrowserActionOnClickListener = function (a) {
      if (c(chrome) || c(chrome.browserAction)) throw Error("chrome or chrome.browserAction is null");
      if (!g(a)) throw Error("invalid arguments to extensionAdapter.addBrowserActionOnClickListener");
      chrome.browserAction.onClicked.addListener(a);
    };
    f.setPopupHandler = function (a) {
      if (c(chrome) || c(chrome.browserAction)) throw Error("chrome or chrome.browserAction is null");
      d(a) || (a = "");
      chrome.browserAction.setPopup({ popup: a });
    };
    f.addContentScriptMessageListener = function (a) {
      f.addMessageListener(a);
    };
    f.addTabCreatedEventListener = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!g(a)) throw Error("extensionAdapter.\u200baddTabCreatedEventListener needs a callback");
      chrome.tabs.onCreated.addListener(a);
    };
    f.removeTabCreatedEventListener = function (a) {
      if (c(chrome) || c(chrome.tabs)) throw Error("chrome is null or chrome.tabs is null");
      if (!g(a)) throw Error("extensionAdapter.removeTabCreatedEventListener needs a callback");
      chrome.tabs.onCreated.hasListener(a) && chrome.tabs.onCreated.removeListener(a);
    };
    f.addWindowCreatedEventListener = function (a) {
      if (c(chrome) || c(chrome.windows)) throw Error("chrome is null or chrome.windows is null");
      if (!g(a)) throw Error("extensionAdapter.\u200baddWindowCreatedEventListener needs a callback");
      chrome.windows.onCreated.addListener(a);
    };
    f.getFrame = function (a) {
      var b = null,
        h = { errorOccured: !0, url: null, parentFrameId: null };
      if (c(chrome) || c(chrome.webNavigation)) throw Error("no chrome object available");
      a &&
        (b = c(a.frameId)
          ? new Promise(function (a) {
              a(h);
            })
          : new Promise(function (c) {
              chrome.webNavigation.getFrame(a, function (a) {
                c(a);
              });
            }));
      return b;
    };
    f.getTabID = function (a) {
      return c(a) ? null : a.id;
    };
    f.getWindowIDForTab = function (a) {
      return c(a) ? null : a.windowId;
    };
    f.getWindowID = function (a) {
      return c(a) ? null : a.id;
    };
    f.i18nGetMessage = function (a, b) {
      if (c(window.chrome) || c(window.chrome.i18n)) throw Error("Unsupported api");
      if (!d(a)) throw Error("chrome.i18n.getMessage expects a string messageName argument");
      return chrome.i18n.getMessage(a, b);
    };
    f.hidePopup = function () {
      window.open("", "_self").close();
    };
    f.setBadgeText = function (a, b) {
      if (c(chrome) || c(chrome.browserAction)) throw Error("chrome or chrome.browserAction is null");
      if (!d(a) || 4 < a.length) throw Error("invalid arguments to extensionAdapter.setBadgeText");
      a = { text: a };
      e(b) && (a.tabId = b);
      chrome.browserAction.setBadgeText(a);
    };
    f.setTitle = function (a, b) {
      if (c(chrome) || c(chrome.browserAction)) throw Error("chrome or chrome.browserAction is null");
      if (!d(a)) throw Error("invalid arguments to extensionAdapter.setTitle");
      a = { title: a };
      e(b) && (a.tabId = b);
      chrome.browserAction.setTitle(a);
    };
    f.setBadgeBackgroundColor = function (a) {
      if (c(chrome) || c(chrome.browserAction)) throw Error("chrome or chrome.browserAction is null");
      if (!d(a)) throw Error("invalid arguments to extensionAdapter.setBadgeBackgroundColor");
      chrome.browserAction.setBadgeBackgroundColor({ color: a });
    };
    f.onPopoverLoad = function (a) {
      window.addEventListener("load", a);
    };
    f.getAllHistory = function (a) {
      a = void 0 === a ? "" : a;
      return new Promise(function (c) {
        chrome.history.search({ text: a, startTime: 0, maxResults: b }, function (a) {
          var b = [];
          a = $jscomp.makeIterator(a);
          for (var h = a.next(); !h.done; h = a.next()) (h = h.value), d(h.url) && b.push(h.url);
          c(b);
        });
      });
    };
    f.addUrlsToHistory = function (a) {
      if (!p(a)) throw Error("urls must be an array");
      var b = [];
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; c = a.next()) b.push(f.addUrlToHistory(c.value));
      return Promise.all(b);
    };
    f.clearHistory = function () {
      return new Promise(function (a) {
        chrome.history.deleteAll(function () {
          a();
        });
      });
    };
    f.addUrlToHistory = function (a) {
      if (!d(a)) throw Error("url must be a string");
      return new Promise(function (c) {
        chrome.history.addUrl({ url: a }, function () {
          c();
        });
      });
    };
    f.deleteUrlFromHistory = function (a, b) {
      if (c(chrome) || c(chrome.history)) throw Error("Unsupported api");
      if (!d(a)) throw Error("url must be a string");
      chrome.history.deleteUrl({ url: a }, b);
    };
    f.addHistoryOnVisitedListener = function (a) {
      if (c(chrome) || c(chrome.history) || c(chrome.history.onVisited)) throw Error("Unsupported api");
      if (!g(a)) throw Error("callback must be a function");
      chrome.history.onVisited.addListener(a);
    };
    f.removeHistoryOnVisitedListener = function (a) {
      if (c(chrome) || c(chrome.history) || c(chrome.history.onVisited)) throw Error("Unsupported api");
      if (!g(a)) throw Error("callback must be a function");
      chrome.history.onVisited.hasListeners() && chrome.history.onVisited.removeListener(a);
    };
    f.removeBrowsingData = function (a, b, e) {
      if (c(chrome) || c(chrome.browsingData)) throw Error("Unsupported api");
      if (!m(a)) throw Error("removalOptions must be an object");
      if (!m(b)) throw Error("dataToRemove must be an object");
      chrome.browsingData.remove(a, b, e);
    };
    f.getAllCookies = function (a) {
      a = void 0 === a ? null : a;
      return new Promise(function (b) {
        chrome.cookies.getAll({ domain: a }, function (a) {
          b(a);
        });
      });
    };
    f.removeCookie = function (a) {
      if (c(a)) throw Error("cookie cannot be null");
      var b = (a.secure ? "https://" : "http://") + a.domain + a.path;
      return new Promise(function (e, h) {
        chrome.cookies.remove({ name: a.name, url: b }, function (a) {
          c(a) && h(chrome.runtime.lastError);
          e(a);
        });
      });
    };
    f.removeCookies = function (a, b) {
      if (!p(a)) throw Error("cookiesArray must be array");
      var c = [],
        e = a;
      p(b) &&
        (e = a.filter(function (a) {
          return !b.some(function (b) {
            return b.domain === a.domain && b.path === a.path;
          });
        }));
      a = $jscomp.makeIterator(e);
      for (e = a.next(); !e.done; e = a.next()) c.push(f.removeCookie(e.value));
      return Promise.all(c);
    };
    f.setCookie = function (a) {
      if (c(a)) throw Error("cookie cannot be null");
      var b = {
        url: new URL((a.secure ? "https://" : "http://") + a.domain).toString(),
        httpOnly: a.httpOnly,
        name: a.name,
        sameSite: a.sameSite,
        secure: a.secure,
        storeId: a.storeId,
        value: a.value,
        path: a.path
      };
      d(a.domain) && "." === a.domain.charAt() && (b.domain = a.domain);
      e(a.expirationDate) && (b.expirationDate = a.expirationDate);
      return new Promise(function (a, f) {
        chrome.cookies.set(b, function (b) {
          var h = chrome.runtime.lastError;
          c(b) && e(h) && f(h);
          a(b);
        });
      });
    };
    f.setCookies = function (a) {
      if (!p(a)) throw Error("cookiesArray must be array");
      var b = [];
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; c = a.next()) b.push(f.setCookie(c.value));
      return Promise.all(b);
    };
    f.onCookieChangedForUrl = function (a, b) {
      if (!d(a)) throw Error("url must be a string");
      if (!g(b)) throw Error("callback must be a function");
      chrome.cookies.onChanged.addListener(function (c) {
        var e = n(c, "cookie.domain");
        d(e) && e.includes(a) ? b(c) : b();
      });
    };
    f.checkCookieContentSettingsForUrl = function (a) {
      if (c(chrome) || c(chrome.contentSettings)) throw Error("Unsupported api");
      if (!d(a)) throw Error("primaryUrl must be a string");
      return new Promise(function (b, c) {
        chrome.contentSettings.cookies.get({ primaryUrl: a }, function (a) {
          a.setting === chrome.contentSettings.CookiesContentSetting.BLOCK ? c(Error("Cookie was blocked")) : b();
        });
      });
    };
    f.getVersion = function () {
      return chrome.runtime.getManifest().version;
    };
    f.setProxySettings = function (a) {
      if (c(chrome) || c(chrome.proxy)) throw Error("Unsupported api");
      if (!m(a)) throw Error("details must be an object");
      return new Promise(function (b) {
        chrome.proxy.settings.set(a, b);
      });
    };
    f.getProxySettings = function () {
      if (c(chrome) || c(chrome.proxy)) throw Error("Unsupported api");
      return new Promise(function (a) {
        chrome.proxy.settings.get({}, a);
      });
    };
    f.onProxySettingsChange = function (a) {
      if (c(chrome) || c(chrome.proxy)) throw Error("Unsupported api");
      if (!g(a)) throw Error("callback must be a function");
      chrome.proxy.settings.onChange.addListener(a);
    };
    f.onProxyError = function (a) {
      if (c(chrome) || c(chrome.proxy)) throw Error("Unsupported api");
      if (!g(a)) throw Error("callback must be a function");
      chrome.proxy.onProxyError.addListener(a);
    };
    f.onWebRequestAuthRequired = function (a) {
      if (c(chrome) || c(chrome.webRequest)) throw Error("Unsupported api");
      if (!g(a)) throw Error("callback must be a function");
      chrome.webRequest.onAuthRequired.addListener(a, { urls: ["<all_urls>"] }, ["asyncBlocking"]);
    };
    f.addStartupListener = function (a) {
      if (c(chrome) || c(chrome.runtime)) throw Error("chrome or chrome.runtime is null");
      if (!g(a)) throw Error("invalid arguments to extensionAdapter.addStartupListener");
      chrome.runtime.onStartup.addListener(a);
    };
    f.removeStartupListener = function (a) {
      if (c(chrome) || c(chrome.runtime)) throw Error("chrome or chrome.runtime is null");
      if (!g(a)) throw Error("invalid arguments to extensionAdapter.removeStartupListener");
      chrome.runtime.onStartup.removeListener(a);
    };
    f.setUninstallURL = function (a) {
      if (c(chrome) || c(chrome.runtime)) throw Error("chrome is null or chrome.runtime is null");
      if (!d(a)) throw Error("Invalid URL");
      if (255 < a.length) throw Error("URL length should not be more than 255 characters");
      return new Promise(function (b, c) {
        chrome.runtime.setUninstallURL(a, function () {
          var a = chrome.runtime.lastError;
          if (e(a)) return c(a);
          b("Uninstall Survey URL set successfully");
        });
      });
    };
    f.uninstallSelf = function (a) {
      a = void 0 === a ? !1 : a;
      if (c(chrome) || c(chrome.management)) throw Error("chrome is null or chrome.management is null");
      return new Promise(function (b) {
        chrome.management.uninstallSelf({ showConfirmDialog: a }, function () {
          b();
        });
      });
    };
    f.darkModeEnabled = function () {
      return f._systemColorThemeDark.matches;
    };
    f.addSystemColorThemeChangeEventListener = function (a) {
      f._systemColorThemeDark.addEventListener("change", a);
    };
    f.removeSystemColorThemeChangeEventListener = function (a) {
      f._systemColorThemeDark.removeEventListener("change", a);
    };
    f.getExtensionDetails = function (a) {
      if (c(a)) throw Error("Invalid arguments");
      if (c(chrome) || c(chrome.management) || c(chrome.management.get)) throw Error("Extension doesnt have enough permissions");
      return new Promise(function (b, d) {
        chrome.management.get(a, function (a) {
          var h = f.getLastError();
          if (e(h) || c(a)) return d("Error in getting extension details");
          b(a);
        });
      });
    };
    f.addExtensionEnabledListener = function (a) {
      if (!g(a)) throw Error("Invalid argument");
      if (c(chrome) || c(chrome.management) || c(chrome.management.onEnabled)) throw Error("Extension doesnt have enough permissions");
      chrome.management.onEnabled.addListener(a);
    };
    f.removeExtensionEnabledListener = function (a) {
      if (!g(a)) throw Error("Invalid argument");
      if (c(chrome) || c(chrome.management) || c(chrome.management.onEnabled)) throw Error("Extension doesnt have enough permissions");
      chrome.management.onEnabled.removeListener(a);
    };
    f.addExtensionInstalledListener = function (a) {
      if (!g(a)) throw Error("Invalid argument");
      if (c(chrome) || c(chrome.management) || c(chrome.management.onInstalled)) throw Error("Extension doesnt have enough permissions");
      chrome.management.onInstalled.addListener(a);
    };
    f.removeExtensionInstalledListener = function (a) {
      if (!g(a)) throw Error("Invalid argument");
      if (c(chrome) || c(chrome.management) || c(chrome.management.onInstalled)) throw Error("Extension doesnt have enough permissions");
      chrome.management.onInstalled.removeListener(a);
    };
    f.init = function () {};
    f.returnAdapter = function () {
      var a = {};
      a.getExtensionURL = f.getExtensionURL;
      a.getBackgroundPage = f.getBackgroundPage;
      a.sendMessage = f.sendMessage;
      a.addMessageListener = f.addMessageListener;
      a.addContentScriptMessageListener = f.addContentScriptMessageListener;
      a.getExtensionId = f.getExtensionId;
      a.init = f.init;
      a.darkModeEnabled = f.darkModeEnabled;
      a.addSystemColorThemeChangeEventListener = f.addSystemColorThemeChangeEventListener;
      a.removeSystemColorThemeChangeEventListener = f.removeSystemColorThemeChangeEventListener;
      try {
        return chrome.tabs ? f : a;
      } catch (q) {
        return a;
      }
    };
    return f.returnAdapter();
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.clipboard = (function (b) {
    var a = {},
      f = b.utils.isNil,
      c = b.logger;
    a.createDummyTextAreaAndSetText = function (a) {
      var b = document.createElement("textarea");
      b.style.position = "fixed";
      b.style.top = 0;
      b.style.left = 0;
      b.style.width = "2em";
      b.style.height = "2em";
      b.style.padding = 0;
      b.style.border = "none";
      b.style.outline = "none";
      b.style.boxShadow = "none";
      b.style.background = "transparent";
      b.value = a;
      document.body.appendChild(b);
      b.select();
      return b;
    };
    a.copyToClipboard = function (b) {
      if (f(b) || "" === b) throw Error("Value to copy to clipboard cannot be null");
      b = a.createDummyTextAreaAndSetText(b);
      document.execCommand("copy") || c.error("Failed to copy to clipboard");
      document.body.removeChild(b);
    };
    return a;
  })(d.SymBfw);
})(window);
(function (d) {
  (d.SymBfw = d.SymBfw || {}).storage = (function (b) {
    var a = {},
      f = b.utils.isNil,
      c = b.utils.isntNil,
      e = b.utils.isFunction,
      d = b.logger,
      l = function (a, b) {
        this.name = a;
        this.error = b;
      };
    l.prototype.toString = function () {
      return "Name:" + this.name + ":Error:" + this.error;
    };
    a.StorageException = l;
    a.set = function (a, b, c) {
      if (f(a)) throw Error("Key cannot be null");
      if (f(b)) throw Error("Value cannot be null");
      var g = {};
      g[a] = b;
      chrome.storage.local.set(g, function () {
        var h = chrome.runtime.lastError,
          g = !1,
          n = null;
        f(h) ? (g = !0) : (d.log("Storing{" + a + ":" + b + "} caused an error:" + h), (n = new l("Browser Exception", h)));
        e(c) &&
          setTimeout(function () {
            c(g, n);
          }, 1);
      });
    };
    a.get = function (a, b) {
      if (f(a)) throw Error("Key cannot be null");
      if (!e(b)) throw Error("Callback cannot be null or is not a function");
      chrome.storage.local.get(a, function (e) {
        var g = chrome.runtime.lastError,
          h = !1,
          k = null,
          m = null;
        k = e[a];
        f(g) && c(k) ? (h = !0) : (d.log("Getting value for " + a + " caused an error:" + g), (m = new l("Browser Exception", g)));
        setTimeout(function () {
          b(h, k, m);
        }, 1);
      });
    };
    a.clear = function (a) {
      chrome.storage.local.clear(function () {
        var b = chrome.runtime.lastError,
          c = null,
          d = !1;
        f(b) ? (d = !0) : (c = new l("Browser Exception", b));
        e(a) &&
          setTimeout(function () {
            a(d, c);
          }, 1);
      });
    };
    a.remove = function (a, b) {
      if (f(a)) throw Error("Key cannot be null");
      chrome.storage.local.remove(a, function () {
        var a = chrome.runtime.lastError,
          c = null,
          d = !1;
        f(a) ? (d = !0) : (c = new l("Browser Exception", a));
        e(b) &&
          setTimeout(function () {
            b(d, c);
          }, 1);
      });
    };
    return a;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.settings = (function (b) {
    var a = { containers: {} },
      f = b.storage,
      c = b.utils.isntNil,
      e = b.utils.isNil,
      d = b.utils.isFunction,
      l = b.utils.isObject,
      g = b.logger,
      p = function (b, e) {
        if (c(a.containers[b])) throw Error("Container name is not unique");
        this.name = b;
        this.persist = e;
        this.collection = {};
        this.initialized = !1;
      };
    p.prototype.initialize = function (b) {
      var c = this.name,
        e = this;
      this.initialized = !0;
      if (!1 === this.persist) a.containers[c] = this;
      else {
        var d = function (f, d) {
          f
            ? ((a.containers[c] = e),
              setTimeout(function () {
                b(!0, e, null);
              }, 1))
            : setTimeout(function () {
                b(!1, null, d);
              }, 1);
        };
        f.get(c, function (h, g, k) {
          h && l(g)
            ? (e.setCollection(g),
              (a.containers[c] = e),
              setTimeout(function () {
                b(!0, e, null);
              }, 1))
            : f.set(c, e.getCollection(), d);
        });
      }
    };
    p.prototype.setCollection = function (a) {
      this.collection = a;
    };
    p.prototype.getCollection = function () {
      return this.collection;
    };
    p.prototype.setObject = function (a, b, c) {
      if (e(a)) throw Error("Key cannot be null");
      if (e(b)) throw Error("Value cannot be null");
      if (!1 === this.initialized) throw Error("Settings not initialized");
      this.collection[a] = b;
      !1 === this.persist
        ? d(c) &&
          setTimeout(function () {
            c(!0, null);
          }, 1)
        : f.set(this.name, this.collection, c);
    };
    p.prototype.getObject = function (a) {
      if (e(a)) throw Error("Key cannot be null");
      if (!1 === this.initialized) throw Error("Settings not initialized");
      a = this.collection[a];
      e(a) && (a = null);
      return a;
    };
    p.prototype.removeObject = function (a, b) {
      if (e(a)) throw Error("Key cannot be null");
      if (!1 === this.initialized) throw Error("Settings not initialized");
      delete this.collection[a];
      !1 === this.persist
        ? d(b) &&
          setTimeout(function () {
            b(!0, null);
          }, 1)
        : f.set(this.name, this.collection, b);
    };
    p.prototype.serialize = function () {
      return JSON.stringify(this.collection);
    };
    p.prototype.shouldPersist = function () {
      return this.persist;
    };
    a.loadSettingsContainer = function (b, f, h) {
      if (e(b)) throw Error("Name cannot be null");
      e(f) && (f = !1);
      if (f && !d(h)) throw Error("Callback cannot be null or is not a function");
      var g = a.containers[b];
      if (c(g)) {
        if (!f) return g;
        setTimeout(function () {
          h(!0, g, null);
        }, 1);
      } else if (((b = new p(b, f)), b.initialize(h), !f)) return b;
    };
    a.doesContainerExists = function (b) {
      var d, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        if (1 == h.nextAddress) {
          if (e(b)) throw Error("Name cannot be null");
          d = a.containers;
          return c(d[b])
            ? h.return(!0)
            : h.yield(
                new Promise(function (a) {
                  f.get(b, function (b, c, e) {
                    a(b);
                  });
                }),
                2
              );
        }
        g = h.yieldResult;
        return h.return(g);
      });
    };
    a.deleteSettingsContainer = function (b, g) {
      if (e(b)) throw Error("Name cannot be null");
      var h = a.containers[b];
      if (c(h) && ((a.containers[b] = null), !1 === h.shouldPersist())) {
        if (!d(g)) return;
        setTimeout(function () {
          g(!0, null);
        }, 1);
        return;
      }
      f.remove(b, g);
    };
    a.resetSettingsCollection = function (b, c) {
      if (e(b)) throw Error("Name cannot be null");
      b = a.containers[b];
      if (e(b)) throw Error("Container was never previously loaded");
      var h = b.getCollection();
      if (e(h))
        g.info("Collection is empty"),
          d(c) &&
            setTimeout(function () {
              c(!1, Error("Collection is empty"));
            }, 1);
      else {
        for (var k in h) delete h[k];
        !1 === b.shouldPersist()
          ? d(c) &&
            setTimeout(function () {
              c(!0, null);
            }, 1)
          : f.set(b.name, b.collection, c);
      }
    };
    a.Settings = p;
    return a;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.secureSettings = (function (b) {
    var a = {},
      f = b.settings,
      c = b.utils.isntNil,
      e = b.utils.isNil,
      d = b.utils.isFunction,
      l = b.utils.isString,
      g = b.logger,
      p = function (a) {
        var b = forge.md.sha256.create();
        b.update(a);
        return b.digest().toHex();
      },
      m = function (a, b) {
        var c = forge.hmac.create();
        c.start("sha256", b);
        c.update(a);
        return c.digest().toHex();
      },
      n = function (a, b, c, e, f) {
        b = forge.util.createBuffer(b);
        a = a ? forge.cipher.createCipher(f, c) : forge.cipher.createDecipher(f, c);
        a.start({ iv: e });
        a.update(b);
        a.finish();
        return a.output.getBytes();
      },
      h = function (a, b) {
        this.initialized = !1;
      };
    h.prototype.initialize = function (a, b, d) {
      var h = this;
      f.loadSettingsContainer(a, !0, function (k, n, l) {
        if (!1 === k) d(!1, null, l);
        else {
          l = n.getObject("iv");
          var q = n.getObject("salt");
          k = null;
          if (e(l) || e(q))
            k = new Promise(function (b, c) {
              f.resetSettingsCollection(a, function (a, e) {
                if (!a) return c(Error("Failed to reset OCL container"));
                h.iv = forge.random.getBytesSync(128);
                h.salt = forge.random.getBytesSync(128);
                n.setObject("iv", JSON.stringify(h.iv));
                n.setObject("salt", JSON.stringify(h.salt));
                b();
              });
            });
          else
            try {
              (h.iv = JSON.parse(l)), (h.salt = JSON.parse(q));
            } catch (y) {
              setTimeout(function () {
                var a = "Failed to intialize: " + y.toString();
                g.error(y);
                d(!1, null, a);
              }, 1);
              return;
            }
          l = function () {
            h.derivedKey = forge.pkcs5.pbkdf2(b, h.salt, 1e3, 32);
            var a = n.getObject("hmac"),
              e = m(h.salt, h.derivedKey);
            if (c(a)) {
              if (a !== e) {
                setTimeout(function () {
                  d(!1, null, "Passwords does not match");
                }, 1);
                return;
              }
            } else n.setObject("hmac", e);
            h.container = n;
            h.initialized = !0;
            setTimeout(function () {
              d(!0, h, null);
            }, 1);
          };
          e(k)
            ? l()
            : k.then(l, function (a) {
                g.error(a);
                d(!1, null, a);
              });
        }
      });
    };
    h.prototype.setObject = function (a, b, c, f) {
      f = void 0 === f ? !1 : f;
      if (!l(a)) throw Error("Key must be a string");
      if (e(b)) throw Error("Value cannot be null");
      if (!this.initialized) throw Error("SecureSettings not initialized");
      a = f ? a : p(a);
      b = JSON.stringify(b);
      b = n(!0, b, this.derivedKey, this.iv, "AES-CBC");
      b = forge.util.encode64(b);
      f = m(b, this.derivedKey);
      this.container.setObject(a, { data: b, hmac: f }, c);
    };
    h.prototype.getObject = function (a, b) {
      b = void 0 === b ? !1 : b;
      if (!l(a)) throw Error("Key must be a string");
      if (!this.initialized) throw Error("SecureSettings not initialized");
      a = b ? a : p(a);
      a = this.container.getObject(a);
      if (e(a)) return null;
      b = a.data;
      if (m(b, this.derivedKey) !== a.hmac) throw Error("The data is corrupted");
      a = forge.util.decode64(b);
      a = n(!1, a, this.derivedKey, this.iv, "AES-CBC");
      try {
        var c = JSON.parse(a);
      } catch (t) {
        throw ((c = "Failed to parse data: " + t.toString()), g.error(t), Error(c));
      }
      return c;
    };
    h.prototype.removeObject = function (a, b) {
      if (!l(a)) throw Error("Key must be a string");
      if (!1 === this.initialized) throw Error("SecureSettings not initialized");
      a = p(a);
      this.container.removeObject(a, b);
    };
    a.loadSecureSettingsContainer = function (a, b, c) {
      if (!l(a)) throw Error("name must be a string");
      if (!l(b)) throw Error("password must be a string");
      if (!d(c)) throw Error("callback must be a function");
      b = p(b);
      new h().initialize(a, b, c);
    };
    a.deleteSecureSettingsContainer = function (a, b) {
      f.deleteSettingsContainer(a, b);
    };
    a.resetSecureSettingsCollection = function (a, b) {
      if (e(a)) throw Error("secureSettings container name is null");
      f.loadSettingsContainer(a, !0, function (a, c, e) {
        if (!1 === a) d(b) && b(!1, e);
        else {
          a = c.collection;
          for (var f in a) "salt" !== f && "iv" !== f && c.removeObject(f);
          d(b) && b(!0, null);
        }
      });
    };
    h.prototype.copySecureSettings = function (b, c, d) {
      var h = this,
        g,
        k,
        n;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (l) {
        if (1 == l.nextAddress) return (g = h), l.yield(f.doesContainerExists(b), 2);
        k = l.yieldResult;
        if (!k) return d(!0), l.return();
        n = function (b, c) {
          if (!1 === b || e(c))
            setTimeout(function () {
              d(!1);
            }, 1);
          else {
            b = c.getCollection();
            var f = [],
              h = {},
              k;
            for (k in b)
              (h.$jscomp$loop$prop$key$6 = k),
                a.isEncryptedKey(h.$jscomp$loop$prop$key$6) &&
                  f.push(
                    new Promise(
                      (function (a) {
                        return function (b) {
                          var e = c.getObject(a.$jscomp$loop$prop$key$6, !0);
                          g.setObject(a.$jscomp$loop$prop$key$6, e, b, !0);
                        };
                      })(h)
                    )
                  ),
                (h = { $jscomp$loop$prop$key$6: h.$jscomp$loop$prop$key$6 });
            Promise.all(f)
              .then(function () {})
              .finally(function () {
                setTimeout(function () {
                  d(!0);
                }, 1);
              });
          }
        };
        a.loadSecureSettingsContainer(b, c, n);
        l.jumpToEnd();
      });
    };
    h.prototype.getCollection = function () {
      return this.container.getCollection();
    };
    a.isEncryptedKey = function (a) {
      return "hmac" === a || "iv" === a || "salt" === a ? !1 : !0;
    };
    a.SecureSettings = h;
    return a;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.localizer = (function (b) {
    var a = b.utils.isNil,
      f = b.utils.isntNil,
      c = b.utils.isString,
      e = b.utils.isBoolean,
      d = b.utils.isArray,
      l = b.utils.isFunction,
      g = b.constants.localizer,
      p = "ar he arc bcc bqi ckb dv fa glk lrc mzn pnb ps sd ug ur yi".split(" "),
      m = {
        stringsMap: {},
        initialized: !1,
        setNavigatorLanguageAndLocale: function () {
          if (a(this.supportedLocales)) throw Error("Supported locales was never set");
          var b = navigator.language,
            c = b.split("-"),
            d = c[0];
          c = c[1];
          var g = d.toLowerCase();
          f(c) && ((c = c.toLowerCase()), (g = g + "_" + c));
          var k = this.supportedLocales[g];
          (e(k) && k) ||
            ((k = this.supportedLocales[d]),
            e(k) && k ? (g = d) : ((k = this.supportedLocales[c]), e(k) && k ? (g = c) : ((g = "en"), (b = "en-US"))));
          this.locale = g;
          this.navigatorLanguage = b;
        },
        getNavigatorLanguage: function () {
          if (f(this.navigatorLanguage)) return this.navigatorLanguage;
          this.setNavigatorLanguageAndLocale();
          return this.navigatorLanguage;
        },
        getLocale: function () {
          if (f(this.locale)) return this.locale;
          this.setNavigatorLanguageAndLocale();
          return this.locale;
        },
        getCurrentLanguageDirection: function () {
          var a = m.getLocale(),
            b = "ltr";
          -1 < p.indexOf(a) && (b = "rtl");
          return b;
        },
        loadDefaultDictionary: function (a) {
          m.loadDictionary(g.DEFAULT_MESSAGES_DICTIONARY, a);
        },
        loadDictionary: function (e, d) {
          if (!1 === c(e)) throw Error("Dictionary name cannot be null");
          if (!1 === l(d)) throw Error("Callback cannot be null");
          if (a(this.path)) throw Error("Path to localized folder is not set. Need to call initialize before using this API");
          if (f(this.stringsMap[e]))
            setTimeout(function () {
              d(!0, null);
            }, 1);
          else {
            var g = this.getLocale(),
              h = this.path + "/" + g + "/" + e + ".json";
            g = new XMLHttpRequest();
            g.open("GET", h, !0);
            g.addEventListener("load", function (a) {
              var c = a.target.status;
              c === ("Safari" === b.globals.BROWSER ? 0 : 200)
                ? ((a = JSON.parse(a.target.response)), (m.stringsMap[e] = a), d(!0, null), (m.initialized = !0))
                : d(!1, Error("File at path:" + h + " does not exist. Status Code:" + c));
            });
            g.send();
          }
        },
        getLocalizedString: function (a) {
          return m.getLocalizedStringFromDictionary(a, g.DEFAULT_MESSAGES_DICTIONARY);
        },
        getLocalizedStrings: function (a) {
          return m.getLocalizedStringsFromDictionary(a, g.DEFAULT_MESSAGES_DICTIONARY);
        },
        getAllLocalizedStrings: function () {
          return m.getAllLocalizedStringsFromDictionary(g.DEFAULT_MESSAGES_DICTIONARY);
        },
        getLocalizedStringFromDictionary: function (a, b) {
          if (!1 === c(a)) throw Error("Unlocalized String cannot be null or is not a string");
          return m.getLocalizedStringsFromDictionary([a], b)[a];
        },
        getLocalizedStringsFromDictionary: function (b, e) {
          if (!1 === d(b)) throw Error("Array of strings cannot be null.");
          if (0 === b.length) throw Error("Array of strings cannot be empty.");
          if (!1 === c(e)) throw Error("Dictionary name cannot be null");
          var f = this.stringsMap[e];
          if (a(f)) throw Error("Dictionary " + e + " is being used without being loaded");
          e = {};
          for (var g in b) {
            var h = b[g],
              k = f[h];
            a(k) ? (e[h] = h) : ((k = k.message), a(k) ? (e[h] = h) : (e[h] = k));
          }
          return e;
        },
        getAllLocalizedStringsFromDictionary: function (b) {
          if (!1 === c(b)) throw Error("Dictionary name cannot be null");
          var e = this.stringsMap[b];
          if (a(e)) throw Error("Dictionary " + b + " is being used without being loaded");
          b = {};
          for (var f in e) b[f] = e[f].message;
          return b;
        },
        getLocalizedStringsWithFormat: function (b) {
          var c = {},
            e;
          for (e in b) {
            for (var f = [], d = $jscomp.makeIterator(b[e]), g = d.next(); !g.done; g = d.next())
              (g = g.value), a(g) ? f.push(null) : f.push(m.getLocalizedString(g));
            f = m.getLocalizedStringWithFormat(e, f);
            c[e] = f;
          }
          return c;
        },
        getLocalizedStringWithFormat: function (a, b) {
          return m.getLocalizedStringWithFormatFromDictionary(a, b, g.DEFAULT_MESSAGES_DICTIONARY);
        },
        getLocalizedStringWithFormatFromDictionary: function (b, c, e) {
          if (a(c)) throw Error("Format parameters cannot be null");
          b = m.getLocalizedStringFromDictionary(b, e);
          for (var f in c) (e = c[f]), a(e) || (b = b.replace("{" + f + "}", e));
          return b;
        },
        getLocalizedStringFromNativeLocalizer: function (a, c) {
          return b.extensionAdapter.i18nGetMessage(a, c);
        },
        initialize: function (c, e, f) {
          if (a(c)) throw Error("Supported locales cannot be null");
          a(f) && (f = b.extensionAdapter.getExtensionURL("content/i18n"));
          m.path = f;
          this.supportedLocales = c;
          b.extensionAdapter.addMessageListener(m.handleMessage);
          m.loadDefaultDictionary(e);
        },
        handleMessage: function (b, c, e) {
          if (!a(b)) {
            e = b.id;
            var f = b.payload;
            if (!a(e) && !a(f)) {
              var d = null,
                h = !0;
              switch (e) {
                case g.GET_LOCALIZED_STRING:
                  d = m.getLocalizedString(f);
                  break;
                case g.GET_LOCALIZED_STRINGS:
                  d = m.getLocalizedStrings(f);
                  break;
                case g.GET_ALL_LOCALIZED_STRINGS:
                  d = m.getAllLocalizedStrings(f);
                  break;
                case g.GET_LOCALIZED_STRING_FROM_DICTIONARY:
                  d = m.getLocalizedStringFromDictionary(f.string, f.name);
                  break;
                case g.GET_LOCALIZED_STRINGS_FROM_DICTIONARY:
                  d = m.getLocalizedStringsFromDictionary(f.array, f.name);
                  break;
                case g.GET_LOCALIZED_STRING_WITH_FORMAT:
                  d = m.getLocalizedStringWithFormat(f.string, f.params);
                  break;
                case g.GET_LOCALIZED_STRING_WITH_FORMAT_FROM_DICTIONARY:
                  d = m.getLocalizedStringWithFormatFromDictionary(f.string, f.params, f.name);
                  break;
                case g.GET_CURRENT_LANGUAGE_DIRECTION:
                  d = m.getCurrentLanguageDirection();
                  break;
                case g.GET_LOCALIZED_STRINGS_WITH_FORMAT:
                  d = m.getLocalizedStringsWithFormat(f.formatStringDict);
                  break;
                default:
                  h = !1;
              }
              h && c({ id: b.id, payload: d });
            }
          }
        }
      };
    return m;
  })(d.SymBfw);
})(window);
(function (d) {
  d = d.SymBfw = d.SymBfw || {};
  var b = {
    APPLICATION_NAME: "APPLICATION_NAME",
    APPLICATION_VERSION: "APPLICATION_VERSION",
    CLIENT_ID: "CLIENT_ID",
    DATA_SOURCE: "DATA_SOURCE",
    TRACKING_ID: "TRACKING_ID",
    USER_AGENT: "USER_AGENT",
    USER_LANGUAGE: "USER_LANGUAGE",
    GOOGLE_ANALYTICS_PROTOCOL_VERSION: "GOOGLE_ANALYTICS_PROTOCOL_VERSION",
    ANONYMIZE_IP: "ANONYMIZE_IP",
    BROWSER_NAME: "BROWSER_NAME"
  };
  b.defaultParametersList = [
    b.APPLICATION_NAME,
    b.APPLICATION_VERSION,
    b.CLIENT_ID,
    b.DATA_SOURCE,
    b.TRACKING_ID,
    b.GOOGLE_ANALYTICS_PROTOCOL_VERSION,
    b.ANONYMIZE_IP,
    b.BROWSER_NAME
  ];
  b.dataSource = { BROWSER_EXTENSION: "web", MOBILE_APP: "app" };
  b.HIT_TYPE = { PAGE_VIEW: "pageview", SCREEN_VIEW: "screenview", EVENT: "event", EXCEPTION: "exception", SOCIAL: "social" };
  b.MESSAGES = { SEND_TELEMETRY_TO_BGPROXY: "b021e29a-4fe3-4a60-865f-0cf783318187" };
  b.parameters = {
    NON_INTERACTION_HIT: "ni",
    HIT_TYPE: "t",
    CATEGORY: "ec",
    ACTION: "ea",
    LABEL: "el",
    SOCIAL_NETWORK: "sn",
    SOCIAL_ACTION: "sa",
    SOCIAL_TARGET: "st",
    DOCUMENT_PATH: "dp",
    DOCUMENT_TITLE: "dt",
    SCREEN_RESOLUTION: "sr",
    CUSTOM_DIMENSION1: "cd1",
    CUSTOM_DIMENSION2: "cd2",
    CUSTOM_DIMENSION3: "cd3",
    CUSTOM_DIMENSION4: "cd4",
    CUSTOM_DIMENSION5: "cd5",
    CUSTOM_DIMENSION6: "cd6",
    CUSTOM_DIMENSION7: "cd7",
    CUSTOM_DIMENSION8: "cd8",
    CUSTOM_DIMENSION9: "cd9",
    CUSTOM_DIMENSION10: "cd10",
    CUSTOM_DIMENSION11: "cd11",
    CUSTOM_DIMENSION12: "cd12",
    CUSTOM_DIMENSION13: "cd13",
    CUSTOM_DIMENSION14: "cd14",
    CUSTOM_DIMENSION15: "cd15",
    CUSTOM_DIMENSION16: "cd16",
    CUSTOM_DIMENSION17: "cd17",
    PRODUCT_IMPRESSION_BRAND1: "il1pi1br",
    ITEM_CATEGORY: "iv",
    CAMPAIGN_SOURCE: "cs",
    CAMPAIGN_MEDIUM: "cm",
    CLIENT_ID: "cd2"
  };
  b.TELEMETRY_CATEGORY = { BROWSER: "Browser", EXTENSION: "Extension" };
  b.actionType = { BROWSER: { LAUNCH: "launch", UPDATE: "update" }, EXTENSION: { INSTALL: "install", UPDATE: "update" } };
  b.defaultParameters = {
    APPLICATION_NAME: { maxLength: 100, key: "an" },
    APPLICATION_VERSION: { maxLength: 100, key: "av" },
    CLIENT_ID: { maxLength: 100, key: "cid" },
    DATA_SOURCE: { maxLength: 50, key: "ds", value: b.dataSource.BROWSER_EXTENSION },
    TRACKING_ID: { maxLength: 100, key: "tid" },
    USER_AGENT: { maxLength: 1e3, key: "ua" },
    USER_LANGUAGE: { maxLength: 20, key: "ul" },
    GOOGLE_ANALYTICS_PROTOCOL_VERSION: { maxLength: 100, key: "v", value: 1 },
    ANONYMIZE_IP: { maxLength: 1, key: "aip", value: 1 },
    BROWSER_NAME: { maxLength: 20, key: "cd6" }
  };
  b.TELEMETRY_FILTER = [
    "bfw-logger|error|[xNDC.Web Error]: A soft dependency (seq: 0) failed to initialize: Exception while querying storage: Error: xneStorage::ManagedStorage Error: Browser 'Edge-Chromium' is not supported."
  ];
  d.telemetryConstants = b;
})(window);
(function (d) {
  d.SymBfw.telemetrySettings = (function (b) {
    var a = {},
      f = b.settings,
      c = b.constants,
      e = b.logger,
      d = b.utils,
      l = d.isBoolean,
      g = d.isFunction,
      p = d.isGuid,
      m = d.isNil;
    a.settingsContainer = null;
    a.initialize = function (b) {
      if (!g(b)) throw Error("callback must be a function");
      f.loadSettingsContainer(c.telemetry.BFW_TELEMETRY_SETTINGS_CONTAINER, !0, function (c, f, d) {
        !1 === c || m(f) ? (e.error("failed to load BFW_TELEMETRY_SETTINGS_CONTAINER"), b(!1)) : ((a.settingsContainer = f), b(!0));
      });
    };
    a.isTelemetryEnabled = function () {
      if (m(this.settingsContainer)) return e.log("Settings not initialized"), !1;
      var a = this.settingsContainer.getObject(c.telemetry.TELEMETRY_ENABLED);
      return m(a) ? !1 : a;
    };
    a.setTelemetryEnabled = function (a) {
      if (m(this.settingsContainer)) throw Error("Settings not initialized");
      if (!l(a)) throw Error("Parameter must be a boolean");
      b.utils.setDoNotTrack(!a);
      this.settingsContainer.setObject(c.telemetry.TELEMETRY_ENABLED, a);
    };
    a.isTelemetryOptOutShown = function () {
      if (m(this.settingsContainer)) throw Error("Settings not initialized");
      var a = this.settingsContainer.getObject(c.telemetry.TELEMETRY_OPT_OUT_SHOWN);
      return m(a) ? !1 : a;
    };
    a.setTelemetryOptOutShown = function (a) {
      if (m(this.settingsContainer)) throw Error("Settings not initialized");
      if (!l(a)) throw Error("Parameter must be a boolean");
      this.settingsContainer.setObject(c.telemetry.TELEMETRY_OPT_OUT_SHOWN, a);
    };
    a.hasUserRespondedInOptOutPage = function () {
      if (m(this.settingsContainer)) return e.log("Settings not initialized"), !1;
      var a = this.settingsContainer.getObject(c.telemetry.USER_RESPONDED_IN_OPT_OUT_PAGE);
      return m(a) ? !1 : a;
    };
    a.setUserRespondedInOptOutPage = function (a) {
      if (m(this.settingsContainer)) throw Error("Settings not initialized");
      if (!l(a)) throw Error("Parameter must be a boolean");
      this.settingsContainer.setObject(c.telemetry.USER_RESPONDED_IN_OPT_OUT_PAGE, a, function (a) {
        b.telemetry.flushQueue();
      });
    };
    a.setLastOfferDate = function (a) {
      if (m(a)) throw Error("Date cannot be null.");
      this.settingsContainer.setObject(c.telemetry.LAST_OFFER_DATE, a.getTime());
    };
    a.getLastOfferDate = function () {
      var a = this.settingsContainer.getObject(c.telemetry.LAST_OFFER_DATE);
      return m(a) || !1 === b.utils.isInteger(a) ? null : new Date(a);
    };
    a.isTelemetrySent = function (b) {
      if (!p(b)) throw Error("Invalid Telemetry Name passed");
      var e = a.settingsContainer.getObject(c.telemetry.TELEMETRY_SENT_LIST);
      return m(e) || 0 >= e.length ? !1 : e.includes(b);
    };
    a.telemetrySent = function (b) {
      if (!p(b)) throw Error("Invalid Telemetry Name passed");
      var e = a.settingsContainer.getObject(c.telemetry.TELEMETRY_SENT_LIST);
      m(e) && (e = []);
      e.push(b);
      a.settingsContainer.setObject(c.telemetry.TELEMETRY_SENT_LIST, e);
    };
    return a;
  })(d.SymBfw);
})(window);
(function (d) {
  (d.SymBfw = d.SymBfw || {}).telemetrySCD = (function (b) {
    var a = {
      GOOGLE_ANALYTICS_URL: "https://www.google-analytics.com/collect",
      REQUEST_TYPE: "POST",
      COLLECTION_STATE: !0,
      serialize: function () {
        return { ga_url: a.GOOGLE_ANALYTICS_URL, request_type: a.REQUEST_TYPE, collection_state: a.COLLECTION_STATE };
      }
    };
    return a;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.Telemetry = (function (b) {
    var a = b.telemetryConstants,
      f = b.logger,
      c = b.utils,
      e = c.isArray,
      d = c.isBoolean,
      l = c.isGuid,
      g = c.isFunction,
      p = c.isNil,
      m = c.isntNil;
    c = function (b, c) {
      this.defaultParameters = null;
      this.initialized = !1;
      this._telemetryParamsQueue = [];
      m(b) ? (this.message = b) : (this.message = a.MESSAGES.SEND_TELEMETRY_TO_BGPROXY);
      this.ignoreTelemetryEnableSettings = !1;
      d(c) && !0 === c && (this.ignoreTelemetryEnableSettings = !0);
      this.clientID = null;
    };
    c.prototype.constructMessageBody = function (a) {
      if (p(a)) throw Error("parameters cannot be null");
      if (0 === Object.keys(a).length) throw Error("parameters object is empty. Need at-least one property");
      var b = "",
        c;
      for (c in a) b += c + "=" + a[c] + "&";
      return (b = b.substring(0, b.length - 1));
    };
    c.prototype.init = function (c, e) {
      var d = this;
      if (!0 !== this.initialized) {
        if (p(c)) throw Error("defaultParameters cannot be null");
        if (!g(e)) throw Error("callback is not defined or is not a function");
        b.telemetryConstants.defaultParametersList.forEach(function (a) {
          if (p(c[a])) throw Error("could not find mandatory parameter " + a + " in parameters list");
        });
        this.clientID = c.CLIENT_ID;
        var k = {};
        for (l in c) {
          var h = b.telemetryConstants.defaultParameters[l];
          p(h) || p(h.key) || (k[h.key] = c[l]);
        }
        var l = a.defaultParameters[a.USER_LANGUAGE];
        p(k[l.key]) && (k[l.key] = navigator.language);
        var m = this.constructMessageBody(k);
        if (p(m) || 0 === m.length) throw Error("constructMessageBody returned an empty string");
        b.telemetrySettings.initialize(function (a) {
          !1 === a
            ? (f.error("failed to initialize BfwTelemetry"), e(!1))
            : (b.extensionAdapter.addMessageListener(d.handleMessage.bind(d)), (d.defaultParameters = m), (d.initialized = !0), e(!0));
        });
      }
    };
    c.prototype.sendOneTimeTelemetry = function (a, c) {
      if (!l(a)) throw Error("Mandatory Telemetry Name is missing or in wrong format");
      if (b.telemetrySettings.isTelemetrySent(a)) return f.debug("Telemetry already sent once, ignoring sending again"), !0;
      (c = this.send(c)) && b.telemetrySettings.telemetrySent(a);
      return c;
    };
    c.prototype._canSendTelemetry = function (b) {
      var c = a.parameters;
      return "error" !== b[c.ACTION] ? !0 : !a.TELEMETRY_FILTER.includes(b[c.CATEGORY] + "|" + b[c.ACTION] + "|" + b[c.LABEL]);
    };
    c.prototype.send = function (c, d) {
      if (!1 === this.ignoreTelemetryEnableSettings && !1 === b.telemetrySettings.isTelemetryEnabled())
        return (
          !1 === b.telemetrySettings.hasUserRespondedInOptOutPage() && m(this._telemetryParamsQueue) && this._telemetryParamsQueue.push(c),
          !1
        );
      if (p(this.defaultParameters) || !1 === this.initialized) return !1;
      if (p(c)) throw Error("parameters are required for sending telemetry events");
      if (!this._canSendTelemetry(c)) return !1;
      var g = new XMLHttpRequest();
      g.open(b.telemetrySCD.REQUEST_TYPE, b.telemetrySCD.GOOGLE_ANALYTICS_URL, !0);
      g.addEventListener("load", function (a) {
        f.debug("xhr load status: " + a.target.status);
      });
      g.addEventListener("error", function (a) {
        f.debug("xhr error status: " + a.target.status);
      });
      g.addEventListener("loadend", function () {
        m(d) && d();
      });
      c = this.constructMessageBody(c);
      if (p(c) || 0 === c.length) return !1;
      m(this.clientID) && (c += "&" + a.parameters.CLIENT_ID + "=" + this.clientID);
      c += "&" + this.defaultParameters;
      g.send(c);
      e(this._telemetryParamsQueue) && 0 < this._telemetryParamsQueue.length && this.flushQueue();
      return !0;
    };
    c.prototype.handleMessage = function (a, b, c) {
      var e = this;
      if (a.id === this.message && ((b = a.payload), !p(b) && !p(b.parameters)))
        return (
          setTimeout(function () {
            e.send(a.payload.parameters);
          }),
          !0
        );
    };
    c.prototype.flushQueue = function () {
      var a = this;
      setTimeout(function () {
        for (var b in a._telemetryParamsQueue) a.send(a._telemetryParamsQueue[b]);
        a._telemetryParamsQueue = [];
      }, 2e3);
    };
    return c;
  })(d.SymBfw);
  d.SymBfw.telemetry = new SymBfw.Telemetry();
})(window);
(function (d) {
  d.SymBfw.telemetryWrapper = (function (b) {
    var a = b.utils.isNil,
      f = b.utils.isString,
      c = {
        TELEMETRY_CATEGORY: "bfw",
        TELEMETRY_TYPE: "event",
        componentType: {
          LOGGER: "logger",
          LOCALIZER: "localizer",
          STORAGE: "storage",
          SETTINGS: "settings",
          SECURE_SETTINGS: "secureSettings"
        },
        actionType: { WARN: "warn", ERROR: "error" },
        parameters: { EVENT: "t", CATEGORY: "ec", ACTION: "ea", PAYLOAD: "el" },
        send: function (e, d, l) {
          if (!f(e)) throw Error("componentType should be a string");
          if (!f(d)) throw Error("actionType should be a string");
          if (a(l)) throw Error("payload should not be Nil");
          if (!f(l)) {
            if (!(l instanceof Error)) throw Error("payload should be an instanceof Error other than a string");
            l = l.toString();
          }
          var g = {};
          g[c.parameters.EVENT] = c.TELEMETRY_TYPE;
          g[c.parameters.CATEGORY] = c.TELEMETRY_CATEGORY + "-" + e;
          g[c.parameters.ACTION] = d;
          g[c.parameters.PAYLOAD] = l;
          return (b.telemetry || b.telemetryProxy).send(g);
        }
      };
    return c;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw = d.SymBfw || {};
  d = d.SymBfw;
  var b = {
    CONFIG: {
      IGNORE_TELEMETRY_ENABLED_SETTINGS: "IGNORE_TELEMETRY_ENABLED_SETTINGS",
      WAIT_TIME: "WAIT_TIME",
      DELIVERED_CALLBACK: "DELIVERED_CALLBACK",
      TOKEN: "TOKEN",
      DISTINCT_ID: "DISTINCT_ID",
      MIXPANEL_CONFIG: "MIXPANEL_CONFIG"
    },
    MESSAGES: {
      SEND_MESSAGE_TO_MESSAGE_BG: "49d07cbd-55cc-4e0b-a6c6-f76d225ef165",
      SEND_MESSAGE_TO_MESSAGE_PROXY: "4cdb9813-d1b3-44c2-a691-8294589a5a89"
    }
  };
  b.MESSAGES.TYPE = {
    ACTIVATE: "activate",
    DELIVERED_MINI: "delivered_mini",
    DELIVERED_TAKEOVER: "delivered_takeover",
    RETRIEVE_MESSAGE: "retrieve_message",
    CLOSE_MESSAGE: "close_message",
    RENDER_VIDEO: "render_video"
  };
  b.PARAMETERS = { TOKEN: "TOKEN", DISTINCT_ID: "DISTINCT_ID", WAIT_TIME: "WAIT_TIME", MIXPANEL_CONFIG: "MIXPANEL_CONFIG" };
  b.UI = { MESSAGE: "mixpanel-notification-wrapper", MINI: "mixpanel-notification-mini", VIDEO: "mixpanel-notification-video-frame" };
  b.STYLE = { SHOW_MINI: "show-mini", SHOW_TAKEOVER: "show-takeover", HIDE: "hide" };
  d.inProductMessagingConstants = b;
})(window);
(function (d) {
  d = d.SymBfw = d.SymBfw || {};
  var b = {
    APPLICATION_NAME: "APPLICATION_NAME",
    APPLICATION_VERSION: "APPLICATION_VERSION",
    DATA_SOURCE: "DATA_SOURCE",
    USER_LANGUAGE: "USER_LANGUAGE",
    TOKEN: "TOKEN",
    CLIENT_ID: "CLIENT_ID"
  };
  b.defaultParametersList = [b.APPLICATION_NAME, b.APPLICATION_VERSION, b.DATA_SOURCE];
  b.dataSource = { BROWSER_EXTENSION: "web", MOBILE_APP: "app" };
  b.HIT_TYPE = { PAGE_VIEW: "pageview", SCREEN_VIEW: "screenview", EVENT: "event", EXCEPTION: "exception" };
  b.MESSAGES = { SEND_TELEMETRY_TO_V2_BG: "3fd353b0-319d-41f3-b3a3-22e893730e65" };
  b.MESSAGES.TYPE = {
    TRACK: "TRACK",
    SET_PROPERTY: "SET_PROPERTY",
    INCREMENT: "INCREMENT",
    APPEND_PROPERTY: "APPEND_PROPERTY",
    UNION_PROPERTY: "UNION_PROPERTY"
  };
  b.parameters = {
    NON_INTERACTION_HIT: "ni",
    HIT_TYPE: "t",
    ACTION: "ea",
    LABEL: "el",
    DOCUMENT_PATH: "dp",
    DOCUMENT_TITLE: "dt",
    CUSTOM_DIMENSION1: "cd1",
    PRODUCT_IMPRESSION_BRAND1: "il1pi1br",
    ITEM_CATEGORY: "iv",
    CAMPAIGN_SOURCE: "cs",
    CAMPAIGN_MEDIUM: "cm"
  };
  b.TELEMETRY_CATEGORY = { BROWSER: "Browser", EXTENSION: "Extension" };
  b.actionType = { BROWSER: { LAUNCH: "launch", UPDATE: "update" }, EXTENSION: { INSTALL: "install", UPDATE: "update" } };
  b.defaultParameters = {
    APPLICATION_NAME: { maxLength: 100, key: "app_name" },
    APPLICATION_VERSION: { maxLength: 100, key: "app_version" },
    DATA_SOURCE: { maxLength: 50, key: "data_source", value: b.dataSource.BROWSER_EXTENSION },
    USER_LANGUAGE: { maxLength: 20, key: "user_language" }
  };
  b.CONFIG = {
    IGNORE_TELEMETRY_ENABLED_SETTINGS: "IGNORE_TELEMETRY_ENABLED_SETTINGS",
    DEFAULT_PARAMETERS: "DEFAULT_PARAMETERS",
    DEFAULT_PROFILE: "DEFAULT_PROFILE",
    TOKEN: "TOKEN",
    DISTINCT_ID: "DISTINCT_ID",
    MIXPANEL_CONFIG: "MIXPANEL_CONFIG"
  };
  d.telemetryV2Constants = b;
})(window);
(function (d) {
  d.SymBfw.inProductMessaging = (function (b) {
    var a = b.inProductMessagingConstants,
      f = b.utils.isString,
      c = b.utils.isNumber,
      e = b.utils.isFunction,
      d = b.utils.isEmptyObject,
      l = b.utils.isObject,
      g = b.utils.isNil,
      p = b.utils.isntNil,
      m = b.utils.isBoolean,
      n = function () {
        this._message = a.MESSAGES.SEND_MESSAGE_TO_MESSAGE_BG;
        this._lastMessageTime = 0;
        this._ignoreTelemetryEnableSettings = !1;
      };
    n.prototype.init = function (k) {
      if (!this._initialized) {
        if (g(window.mixpanel)) throw Error("Mixpanel must be loaded to initialize In App Messaging");
        if (!l(k) || d(k)) throw Error("config is required and must be non-empty object");
        var h = k[a.CONFIG.DELIVERED_CALLBACK] || function () {},
          n = k[a.CONFIG.WAIT_TIME] || 2,
          r = k[a.CONFIG.TOKEN],
          t = k[a.CONFIG.DISTINCT_ID],
          u = k[a.CONFIG.IGNORE_TELEMETRY_ENABLED_SETTINGS];
        this._mixpanelConfig = k[a.CONFIG.MIXPANEL_CONFIG] || {};
        this._mixpanelReferenceGUID = b.utils.createNewGuid();
        if (!c(n)) throw Error("if specified, waitTime must be of type number");
        if (!f(r)) throw Error("token is required and must be of type string for initialization of In App Messaging");
        if (!f(t)) throw Error("distinct_id is required and must be of type string for initialization of In App Messaging");
        if (!e(h)) throw Error("if specified, deliveredCallback must be of type function");
        if (!l(this._mixpanelConfig)) throw Error("if specified, mixpanel config must be of type object");
        this._token = r;
        this._distinct_id = t;
        this._deliveredCallback = h;
        this._waitTime = n;
        this._ignoreTelemetryEnableSettings = p(u) && m(u) ? u : !1;
        mixpanel.init(r, this._mixpanelConfig, this._mixpanelReferenceGUID);
        mixpanel[this._mixpanelReferenceGUID]._flags.identify_called = !0;
        mixpanel[this._mixpanelReferenceGUID].identify(t);
        mixpanel[this._mixpanelReferenceGUID].people.set_once({ $name: t });
        b.extensionAdapter.addMessageListener(this._messageHandler.bind(this));
        this._initialized = !0;
      }
    };
    n.prototype.triggerMessageRetrieval = function () {
      if (!this._initialized || (!1 === this._ignoreTelemetryEnableSettings && !1 === b.telemetrySettings.isTelemetryEnabled())) return !1;
      var c = {};
      c.id = a.MESSAGES.SEND_MESSAGE_TO_MESSAGE_PROXY;
      c.type = a.MESSAGES.TYPE.RETRIEVE_MESSAGE;
      b.extensionAdapter.sendMessage(c);
      return !0;
    };
    n.prototype._activateProxy = function (c) {
      var e = {};
      e[a.PARAMETERS.TOKEN] = this._token;
      e[a.PARAMETERS.DISTINCT_ID] = this._distinct_id;
      e[a.PARAMETERS.WAIT_TIME] = this._waitTime;
      e[a.PARAMETERS.MIXPANEL_CONFIG] = this._mixpanelConfig;
      var f = {};
      f.id = a.MESSAGES.SEND_MESSAGE_TO_MESSAGE_PROXY;
      f.type = a.MESSAGES.TYPE.ACTIVATE;
      f.payload = e;
      b.extensionAdapter.sendMessageToTab(c, f);
      setTimeout(this._initMessageFetchInterval.bind(this), 2e3);
    };
    n.prototype._initMessageFetchInterval = function () {
      var a = 36e5 * this._waitTime,
        b = this._lastMessageTime + a - (new Date().getTime() + 1e4);
      0 > b
        ? this.triggerMessageRetrieval() && setTimeout(this._initMessageFetchInterval.bind(this), a)
        : setTimeout(this._initMessageFetchInterval.bind(this), b);
    };
    n.prototype._setLastMessageTime = function () {
      this._lastMessageTime = new Date().getTime();
    };
    n.prototype._messageHandler = function (b, c, e) {
      if (b.id === this._message)
        switch (b.type) {
          case a.MESSAGES.TYPE.ACTIVATE:
            this._activateProxy(e);
            break;
          case a.MESSAGES.TYPE.DELIVERED_MINI:
          case a.MESSAGES.TYPE.DELIVERED_TAKEOVER:
            this._deliveredCallback(e), this._setLastMessageTime();
        }
    };
    return new n();
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw = d.SymBfw || {};
  d.SymBfw.telemetryV2 = (function (b) {
    var a = b.utils.isNil,
      f = b.utils.isntNil,
      c = b.utils.isFunction,
      e = b.utils.isArray,
      d = b.telemetryV2Constants,
      l = b.logger,
      g = b.utils.isBoolean,
      p = b.utils.isObject,
      m = b.utils.isEmptyObject,
      n = function () {
        this._defaultParameters = this._mixpanelReferenceGUID = null;
        this._initialized = !1;
        this._telemetryParamsQueue = [];
        this._message = d.MESSAGES.SEND_TELEMETRY_TO_V2_BG;
        this._ignoreTelemetryEnableSettings = !1;
        this._defaultProfile = null;
      };
    n.prototype.init = function (e, k) {
      var h = this;
      b.utils.setDoNotTrack(!1);
      if (!0 === this._initialized) k(!0);
      else {
        if (a(e)) throw Error("config is required to initialize TelemetryV2");
        if (!c(k)) throw Error("callback is not defined or is not a function");
        if (a(mixpanel)) throw Error("Missing dependency for telemetryV2 module");
        var n = e[d.CONFIG.DEFAULT_PROFILE] || {};
        if (!this._areValidParameters(n, !0)) throw Error("Default profile is not valid");
        var q = e[d.CONFIG.TOKEN],
          u = e[d.CONFIG.DISTINCT_ID],
          w = e[d.CONFIG.IGNORE_TELEMETRY_ENABLED_SETTINGS],
          x = e[d.CONFIG.DEFAULT_PARAMETERS],
          z = e[d.MIXPANEL_CONFIG];
        this._mixpanelReferenceGUID = b.utils.createNewGuid();
        if (a(q)) throw Error("token cannot be null");
        if (a(u)) throw Error("distinct_id cannot be null");
        if (!p(x) || m(x)) throw Error("defaultParameters must be a non-empty object");
        b.telemetrySettings.initialize(function (a) {
          !1 === a
            ? (l.error("failed to initialize TelemetryV2"), k(!1))
            : (b.extensionAdapter.addMessageListener(h._handleMessage.bind(h)),
              (h._defaultProfile = n),
              (n.$name = u),
              mixpanel.init(q, z, h._mixpanelReferenceGUID),
              (mixpanel[h._mixpanelReferenceGUID]._flags.identify_called = !0),
              mixpanel[h._mixpanelReferenceGUID].identify(u),
              mixpanel[h._mixpanelReferenceGUID].people.set_once(n),
              (h._ignoreTelemetryEnableSettings = f(w) && g(w) ? w : !1),
              h.setDefaultParameters(x),
              (h._initialized = !0),
              k(!0));
        });
      }
    };
    n.prototype.resetDistinctID = function (b) {
      if (!1 === this._initialized) throw Error("Telemetry needs to be initialized before changing distinctID");
      if (a(b)) throw Error("distinctID cannot be null");
      mixpanel[this._mixpanelReferenceGUID].identify(b);
      this._defaultProfile.$name = b;
      mixpanel[this._mixpanelReferenceGUID].people.set_once(this._defaultProfile);
    };
    n.prototype.createAlias = function (b) {
      if (!1 === this._initialized) throw Error("Telemetry needs to be initialized before changing distinctID");
      if (a(b)) throw Error("distinctID cannot be null");
      mixpanel[this._mixpanelReferenceGUID].alias(b);
    };
    n.prototype.setDefaultParameters = function (b) {
      d.defaultParametersList.forEach(function (c) {
        if (a(b[c])) throw Error("could not find mandatory parameter " + c + " in parameters list");
      });
      var c = {};
      for (f in b) {
        var e = d.defaultParameters[f];
        if (a(e)) throw Error("Property not found in TelemetryV2Constants.defaultParameters: " + f);
        a(e.key) || (c[e.key] = b[f]);
      }
      var f = d.defaultParameters[d.USER_LANGUAGE];
      a(c[f.key]) && (c[f.key] = navigator.language);
      this._defaultParameters = c;
      mixpanel[this._mixpanelReferenceGUID].register(this._defaultParameters);
      return !0;
    };
    n.prototype.send = function (b, c) {
      if (!this._checkTelemetrySettings(b, c, d.MESSAGES.TYPE.TRACK) || a(this._defaultParameters)) return !1;
      if (a(b)) throw Error("event is required for sending telemetry events");
      mixpanel[this._mixpanelReferenceGUID].track(b, c, function (a) {
        a ? l.debug("successfully sent event to mixpanel") : l.debug("error sending event to mixpanel");
      });
      e(this._telemetryParamsQueue) && 0 < this._telemetryParamsQueue.length && this.flushQueue();
      return !0;
    };
    n.prototype.setProfile = function (a) {
      return this._checkTelemetrySettings(null, a, d.MESSAGES.TYPE.SET_PROPERTY)
        ? this._areValidParameters(a, !1, !0)
          ? new Promise(function (c, e) {
              mixpanel[b.telemetryV2._mixpanelReferenceGUID].people.set(a, function (a) {
                a ? c("property set successfully") : e("error in setting property");
              });
            })
          : Promise.reject("parameters not valid")
        : Promise.reject("telemetry settings not enabled or user has explicitly opted out");
    };
    n.prototype.incrementProperty = function (a) {
      if (!this._checkTelemetrySettings(null, a, d.MESSAGES.TYPE.INCREMENT))
        return Promise.reject("telemetry settings not enabled or user has explicitly opted out");
      if (!this._areValidParameters(a)) return Promise.reject("parameters not valid");
      for (var c in a)
        if ("number" !== this._getPropertyType(this._defaultProfile[c]))
          return Promise.reject("Increment method only valid for properties with numeric values.\nInvalid Property: " + c);
      return new Promise(function (c, e) {
        mixpanel[b.telemetryV2._mixpanelReferenceGUID].people.increment(a, function (a) {
          a ? c("property incremented successfully") : e("error in incrementing property");
        });
      });
    };
    n.prototype.appendPropertyList = function (a) {
      if (!this._checkTelemetrySettings(null, a, d.MESSAGES.TYPE.APPEND_PROPERTY))
        return Promise.reject("telemetry settings not enabled or user has explicitly opted out");
      if (!this._areValidParameters(a)) return Promise.reject("parameters not valid");
      for (var c in a)
        if ("array" !== this._getPropertyType(this._defaultProfile[c]))
          return Promise.reject("Append method only valid for properties whose value is a list.\nInvalid Property: " + c);
      return new Promise(function (c, e) {
        mixpanel[b.telemetryV2._mixpanelReferenceGUID].people.append(a, function (a) {
          a ? c("property appended successfully") : e("error in appending property");
        });
      });
    };
    n.prototype.unionPropertyList = function (a) {
      if (!this._checkTelemetrySettings(null, a, d.MESSAGES.TYPE.UNION_PROPERTY))
        return Promise.reject("telemetry settings not enabled or user has explicitly opted out");
      if (!this._areValidParameters(a)) return Promise.reject("parameters not valid");
      for (var c in a)
        if ("array" !== this._getPropertyType(this._defaultProfile[c]))
          return Promise.reject("Union property only valid for properties whose value is a list.\nInvalid Property: " + c);
      return new Promise(function (c, e) {
        mixpanel[b.telemetryV2._mixpanelReferenceGUID].people.union(a, function (a) {
          a ? c("union on the property list successful") : e("error in performing union operation on the property list");
        });
      });
    };
    n.prototype._handleMessage = function (b, c, e) {
      var f = this;
      if (b.id === this._message) {
        var g = b.payload;
        if (!a(g))
          switch (b.type) {
            case d.MESSAGES.TYPE.TRACK:
              setTimeout(function () {
                f.send(g.event, g.parameters);
              });
              break;
            case d.MESSAGES.TYPE.APPEND_PROPERTY:
              setTimeout(function () {
                f.appendPropertyList(g.parameters);
              });
              break;
            case d.MESSAGES.TYPE.INCREMENT:
              setTimeout(function () {
                f.incrementProperty(g.parameters);
              });
              break;
            case d.MESSAGES.TYPE.UNION_PROPERTY:
              setTimeout(function () {
                f.unionPropertyList(g.parameters);
              });
              break;
            case d.MESSAGES.TYPE.SET_PROPERTY:
              setTimeout(function () {
                f.setProfile(g.parameters);
              });
              break;
            default:
              l.debug("message type is invalid");
          }
      }
    };
    n.prototype.processQueueEntry = function (a) {
      switch (a.type) {
        case d.MESSAGES.TYPE.TRACK:
          this.send(a.event, a.parameters);
          break;
        case d.MESSAGES.TYPE.APPEND_PROPERTY:
          this.appendPropertyList(a.parameters);
          break;
        case d.MESSAGES.TYPE.INCREMENT:
          this.incrementProperty(a.parameters);
          break;
        case d.MESSAGES.TYPE.UNION_PROPERTY:
          this.unionPropertyList(a.parameters);
          break;
        case d.MESSAGES.TYPE.SET_PROPERTY:
          this.setProfile(a.parameters);
      }
    };
    n.prototype.flushQueue = function () {
      var a = this;
      setTimeout(function () {
        for (var b in a._telemetryParamsQueue) a.processQueueEntry(a._telemetryParamsQueue[b]);
        a._telemetryParamsQueue = [];
      }, 2e3);
    };
    n.prototype._areValidParameters = function (b, c, e) {
      c = void 0 === c ? !1 : c;
      e = void 0 === e ? !1 : e;
      if (!p(b)) return l.error("parameters must be an object"), !1;
      for (var f in b) {
        if (a(b[f])) return l.error("Property value can not be null"), !1;
        if (!c) {
          var d = this._getPropertyType(b[f]);
          if ("object" === d) return l.error("Property type not supported."), !1;
          var g = this._getPropertyType(this._defaultProfile[f]);
          if ("date" === g && "string" === d && ((b[f] = new Date(b[f])), (d = "date"), isNaN(b[f].getTime())))
            return l.error("Invalid value type for given property and operation."), !1;
          if (!this._defaultProfile.hasOwnProperty(f))
            return l.error("Property to be modified must exist in default profile during initialization.\nMissing Property: " + f), !1;
          if ((e || "array" !== g) && d !== g) return l.error("Invalid value type for given property and operation."), !1;
        }
      }
      return !0;
    };
    n.prototype._getPropertyType = function (a) {
      var b = typeof a;
      "object" === b && (Array.isArray(a) && (b = "array"), "[object Date]" === Object.prototype.toString.call(a) && (b = "date"));
      return b;
    };
    n.prototype._checkTelemetrySettings = function (c, e, f) {
      return !1 === this._ignoreTelemetryEnableSettings && !1 === b.telemetrySettings.isTelemetryEnabled()
        ? (b.telemetrySettings.hasUserRespondedInOptOutPage() ||
            (a(this._telemetryParamsQueue) && (this._telemetryParamsQueue = []),
            this._telemetryParamsQueue.push({ event: c, parameters: e, type: f })),
          !1)
        : this._initialized
        ? !0
        : !1;
    };
    return new n();
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.Notification = (function (b) {
    var a = b.constants.uiConstants,
      f = b.utils.isNil,
      c = b.utils.isntNil,
      e = b.utils.isArray,
      d = b.extensionAdapter,
      l = function (d, k, l, n, h, q) {
        h = void 0 === h ? [] : h;
        q = void 0 === q ? [] : q;
        if (f(d)) throw Error("A description must be provided.");
        if (f(k)) throw Error("A type must be provided.");
        if (f(l)) throw Error("imageUrl must be provided");
        if (e(h) && 0 < h.length && e(q) && 0 < q.length) throw Error("Cannot set both blockListedUrls and allowListedUrls.");
        c(n) ? (this.title = n) : (this.title = "");
        switch (k) {
          case a.NOTIFICATION.TYPE.QUESTION:
          case a.NOTIFICATION.TYPE.TIMED:
          case a.NOTIFICATION.TYPE.WARNING_QUESTION:
            break;
          default:
            throw Error("The notification type passed was not recognized.");
        }
        this.description = d;
        this.type = k;
        this.guid = b.utils.createNewGuid();
        this.imageUrl = l;
        this.blockListedUrls = h;
        this.allowListedUrls = q;
      };
    l.prototype.getDescription = function () {
      return this.description;
    };
    l.prototype.setID = function (a) {
      this.guid = a;
    };
    l.prototype.getID = function () {
      return this.guid;
    };
    l.prototype.getType = function () {
      return this.type;
    };
    l.prototype.getTitle = function () {
      return this.title;
    };
    l.prototype.getImage = function () {
      return d.getExtensionURL(this.imageUrl);
    };
    l.prototype.getRelativeImageURL = function () {
      return this.imageUrl;
    };
    l.prototype.getBlockListedUrls = function () {
      return this.blockListedUrls;
    };
    l.prototype.getAllowListedUrls = function () {
      return this.allowListedUrls;
    };
    l.prototype.handleEvent = function (a) {};
    l.prototype.serialize = function () {
      return {
        description: this.description,
        type: this.type,
        notificationID: this.guid,
        imageUrl: this.getRelativeImageURL(),
        title: this.title,
        blockListedUrls: this.blockListedUrls,
        allowListedUrls: this.allowListedUrls
      };
    };
    l.prototype.onDisplayed = function () {};
    return l;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.QuestionNotification = (function (b) {
    var a = b.utils.isNil,
      f = b.utils.isntNil,
      c = b.utils.isFunction,
      e = b.logger,
      d = b.Notification,
      l = b.constants.uiConstants;
    b = function (b, e, f, k, h, q, v, r, t, u) {
      v = void 0 === v ? [] : v;
      r = void 0 === r ? l.NOTIFICATION.TYPE.QUESTION : r;
      t = void 0 === t ? {} : t;
      u = void 0 === u ? [] : u;
      d.call(this, b, r, h, q, v, u);
      if (a(r)) throw Error("Notification Type cannot be null");
      if (0 > Object.values(l.NOTIFICATION.TYPE).indexOf(r)) throw Error("Notification Type not supported");
      if (a(e)) throw Error("Data cannot be null");
      if (a(f)) throw Error("Default button text cannot be null.");
      if (!1 === c(k)) throw Error("Default button action cannot be null.");
      this.data = e;
      this.defaultButtonText = f;
      this.defaultButtonAction = k;
      this.extraMessages = t;
    };
    b.prototype = Object.create(d.prototype);
    b.prototype.addSecondaryLink = function (b, e) {
      if (a(b)) throw Error("Secondary link text cannot be null.");
      if (!1 === c(e)) throw Error("Secondary link action cannot be null.");
      this.secondaryLinkText = b;
      this.secondaryLinkAction = e;
    };
    b.prototype.addThirdButton = function (b, e) {
      if (a(b)) throw Error("Third button text cannot be null");
      if (!1 === c(e)) throw Error("Third button action cannot be null.");
      this._thirdButtonText = b;
      this._thirdButtonAction = e;
    };
    b.prototype.addCloseButtonAction = function (a) {
      if (!1 === c(a)) throw Error("Close button action cannot be null.");
      this._closeButtonAction = a;
    };
    b.prototype.getDefaultButtonAction = function () {
      return this.defaultButtonAction;
    };
    b.prototype.getSecondaryLinkAction = function () {
      return this.secondaryLinkAction;
    };
    b.prototype.getThirdButtonAction = function () {
      return this._thirdButtonAction;
    };
    b.prototype.getCloseButtonAction = function () {
      return this._closeButtonAction;
    };
    b.prototype.serialize = function () {
      var a = d.prototype.serialize.call(this);
      a.defaultButton = this.defaultButtonText;
      a.secondaryLink = this.secondaryLinkText;
      a.thirdButton = this._thirdButtonText;
      a.line1 = this.extraMessages.line1;
      a.line2 = this.extraMessages.line2;
      return a;
    };
    b.prototype.getData = function () {
      return this.data;
    };
    b.prototype.handleEvent = function (b) {
      switch (b) {
        case l.NOTIFICATION.MESSAGES.DEFAULT_BUTTON_PRESSED:
          b = this.getDefaultButtonAction();
          break;
        case l.NOTIFICATION.MESSAGES.SECONDARY_LINK_PRESSED:
          b = this.getSecondaryLinkAction();
          break;
        case l.NOTIFICATION.MESSAGES.THIRD_BUTTON_PRESSED:
          b = this.getThirdButtonAction();
          break;
        case l.NOTIFICATION.MESSAGES.NOTIFICATION_CLOSED:
          b = a(this.getCloseButtonAction()) ? null : this.getCloseButtonAction();
          break;
        default:
          return;
      }
      var c = this.getData();
      if (f(b))
        try {
          b(c);
        } catch (m) {
          e.error(m);
        }
    };
    return b;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.WarningQuestionNotification = (function (b) {
    var a = b.utils.isString,
      f = b.constants.uiConstants,
      c = b.QuestionNotification,
      e = b.utils.isFunction;
    b = function (a, b, e, d, m, n, h) {
      h = void 0 === h ? [] : h;
      c.call(this, a, b, e, d, m, n, h, f.NOTIFICATION.TYPE.WARNING_QUESTION);
    };
    b.prototype = Object.create(c.prototype);
    b.prototype.addPrimaryHeaderTitle = function (b) {
      if (!a(b)) throw Error("Primary Header Title cannot be null.");
      this.primaryHeaderTitle = b;
    };
    b.prototype.addSecondaryHeaderTitle = function (b) {
      if (!a(b)) throw Error("Secondary Header Title cannot be null.");
      this.secondaryHeaderTitle = b;
    };
    b.prototype.addFocusedTitle = function (b) {
      if (!a(b)) throw Error("Focused Title cannot be null.");
      this.focusedTitle = b;
    };
    b.prototype.getExpandableLinkAction = function () {
      return this.expandableLinkAction;
    };
    b.prototype.getData = function () {
      return this.data;
    };
    b.prototype.addExpandableLinkText = function (b, c, f) {
      if (!a(b)) throw Error("beforeExpand Text Should not be null");
      if (!a(c)) throw Error("afterExpand Text Should not be null");
      if (!e(f)) throw Error("expandableLinkAction button action cannot be null");
      this.expandableLinkTextBeforeExpand = b;
      this.expandableLinkTextAfterExpand = c;
      this.expandableLinkAction = f;
    };
    b.prototype.addLearnMoreDescriptionFirstParagraph = function (b) {
      if (!a(b)) throw Error("learnMoreDescriptionFirstParagraph cannot be null.");
      this.learnMoreDescriptionFirstParagraph = b;
    };
    b.prototype.addLearnMoreDescriptionSecondParagraph = function (b) {
      if (!a(b)) throw Error("LearnMoreDescriptionSecondParagraph cannot be null.");
      this.learnMoreDescriptionSecondParagraph = b;
    };
    b.prototype.serialize = function () {
      var a = c.prototype.serialize.call(this);
      a.focusedTitle = this.focusedTitle;
      a.learnMoreDescriptionFirstParagraph = this.learnMoreDescriptionFirstParagraph;
      a.learnMoreDescriptionSecondParagraph = this.learnMoreDescriptionSecondParagraph;
      a.expandableLinkTextBeforeExpand = this.expandableLinkTextBeforeExpand;
      a.expandableLinkTextAfterExpand = this.expandableLinkTextAfterExpand;
      a.primaryHeaderTitle = this.primaryHeaderTitle;
      a.secondaryHeaderTitle = this.secondaryHeaderTitle;
      return a;
    };
    b.prototype.handleEvent = function (b) {
      if (a)
        switch (b) {
          case f.NOTIFICATION.MESSAGES.RESIZE_IFRAME_HEIGHT:
            b = this.getExpandableLinkAction();
            var e = this.getData();
            b(e);
            break;
          case f.NOTIFICATION.MESSAGES.DEFAULT_BUTTON_PRESSED:
          case f.NOTIFICATION.MESSAGES.NOTIFICATION_CLOSED:
            c.prototype.handleEvent.call(this, b);
        }
    };
    return b;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.TimedNotification = (function (b) {
    var a = b.Notification,
      f = b.constants.uiConstants,
      c = function (b, c, d) {
        a.call(this, b, f.NOTIFICATION.TYPE.TIMED, c, d);
      };
    c.prototype = Object.create(a.prototype);
    c.prototype.onDisplayed = function () {
      var a = this.getID();
      setTimeout(function () {
        b.notificationCenter.removeNotification(a);
      }, this._timeout || f.NOTIFICATION.DEFAULT_TIMEOUT);
    };
    c.prototype.setOnClickedListener = function (a) {
      this._onClickedListener = a;
    };
    c.prototype.setOnClosedListener = function (a) {
      this._onClosedListener = a;
    };
    c.prototype.setTimeout = function (a) {
      this._timeout = a;
    };
    c.prototype.getOnClickedListener = function () {
      return this._onClickedListener;
    };
    c.prototype.getOnClosedListener = function () {
      return this._onClosedListener;
    };
    c.prototype.getTimeout = function () {
      return this._timeout;
    };
    return c;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.notificationCenter = (function (b) {
    var a = b.utils.isNil,
      f = b.logger,
      c = b.extensionAdapter,
      e = b.constants.uiConstants,
      d = {
        queue: [],
        _idToNotificationMap: {},
        _isListenersInited: !1,
        addNotification: function (c) {
          if (a(c)) throw Error("Notification cannot be null");
          var f = c.getType();
          switch (f) {
            case e.NOTIFICATION.TYPE.TIMED:
              d._addListeners();
              chrome.notifications.create(
                { type: "basic", iconUrl: c.getImage(), title: c.getTitle(), message: c.getDescription() },
                function (a) {
                  c.setID(a);
                  c.onDisplayed();
                  var e = c.getOnClickedListener();
                  b.utils.isFunction(e) && (d._idToNotificationMap[a] = c);
                }
              );
              break;
            case e.NOTIFICATION.TYPE.QUESTION:
            case e.NOTIFICATION.TYPE.WARNING_QUESTION:
              this.queue.push(c);
              d.refreshQueue();
              break;
            default:
              throw Error("Unsupported notification type: " + f);
          }
        },
        removeNotification: function (c) {
          if (a(c)) throw Error("NotificationID cannot be null");
          for (var e in this.queue)
            if (this.queue[e].getID() === c) {
              this.queue.splice(e, 1);
              break;
            }
          !0 === b.utils.isntNil(d._idToNotificationMap[c]) && delete d._idToNotificationMap[c];
          try {
            chrome.notifications.clear(c);
          } catch (p) {
            f.info(p);
          } finally {
            d.refreshQueue();
          }
        },
        getNotification: function (b) {
          if (a(b)) throw Error("NotificationID cannot be null");
          for (var c in this.queue) if (this.queue[c].getID() === b) return this.queue[c];
        },
        refreshQueue: function () {
          c.getActiveTab(function (b) {
            if (!a(b)) {
              var f = [],
                l;
              for (l in d.queue) {
                var k = d.queue[l].serialize();
                f.push(k);
              }
              c.sendMessageToTab(
                b,
                {
                  id: e.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE,
                  payload: { eventID: e.NOTIFICATION.MESSAGES.NOTIFICATION_QUEUE_MESSAGE, notificationArray: f }
                },
                null,
                { frameId: 0 }
              );
            }
          });
        },
        handleActivate: function () {
          c.getAllTabs(function (a) {
            a.forEach(function (a) {
              c.sendMessageToTab(a, {
                id: e.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE,
                payload: { eventID: e.NOTIFICATION.MESSAGES.HIDE_NOTIFICATIONS }
              });
            });
            d.refreshQueue();
          });
        },
        handleMessage: function (b, g) {
          if (!a(b)) {
            var k = b.eventID;
            if (!a(k)) {
              var l = b.notificationID;
              switch (k) {
                case e.NOTIFICATION.MESSAGES.DEFAULT_BUTTON_PRESSED:
                case e.NOTIFICATION.MESSAGES.SECONDARY_LINK_PRESSED:
                case e.NOTIFICATION.MESSAGES.THIRD_BUTTON_PRESSED:
                case e.NOTIFICATION.MESSAGES.NOTIFICATION_CLOSED:
                  if (a(l)) {
                    f.warn("Notification ID cannot be null when eventID is " + e.NOTIFICATION.MESSAGES.DEFAULT_BUTTON_PRESSED);
                    break;
                  }
                  var n = d.getNotification(l);
                  if (a(n)) break;
                  n.handleEvent(k);
                  d.removeNotification(l);
                  break;
                case e.NOTIFICATION.MESSAGES.NOTIFICATION_QUEUE_MESSAGE:
                  d.refreshQueue();
                  break;
                case e.NOTIFICATION.MESSAGES.NOTIFICATIONS_SHOWN:
                  b = b.notificationArray;
                  for (var h in b) if (((l = b[h]), (n = d.getNotification(l)), !a(n))) n.onDisplayed();
                  break;
                case e.NOTIFICATION.MESSAGES.HIDE_NOTIFICATIONS:
                  c.sendMessageToTab(g, {
                    id: e.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE,
                    payload: { eventID: e.NOTIFICATION.MESSAGES.HIDE_NOTIFICATIONS }
                  });
                  break;
                case e.NOTIFICATION.MESSAGES.RESIZE_IFRAME_HEIGHT:
                  if (a(l)) {
                    f.error("Notification ID cannot be null when eventID is " + e.NOTIFICATION.MESSAGES.RESIZE_IFRAME_HEIGHT);
                    break;
                  }
                  n = d.getNotification(l);
                  if (a(n)) break;
                  n.handleEvent(k);
                  c.sendMessageToTab(g, { id: e.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE, payload: b });
                  break;
                case e.NOTIFICATION.MESSAGES.FIXED_IFRAME_HEIGHT:
                  c.sendMessageToTab(g, { id: e.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE, payload: b });
              }
            }
          }
        },
        getSerializedNotifications: function () {
          var a = [],
            b;
          for (b in d.queue) a.push(d.queue[b]);
          return a;
        },
        init: function () {
          var f = function () {
            d.handleActivate();
          };
          c.addWindowFocusedEventListener(f);
          c.addTabActivatedEventListener(f);
          c.addMessageListener(function (c, f, k) {
            if (!a(c) && !a(c.id))
              switch (c.id) {
                case e.NOTIFICATION.MESSAGES.UI_INIT:
                  return (
                    (c.id = e.NOTIFICATION.MESSAGES.UI_INIT_PROXY),
                    b.extensionAdapter.sendMessageToTab(k, c, function (a) {
                      f(a);
                    }),
                    !0
                  );
                case e.NOTIFICATION.MESSAGES.DEFAULT_MESSAGE:
                  return d.handleMessage(c.payload, k);
              }
          });
        },
        _addListeners: function () {
          !0 !== d._isListenersInited &&
            (chrome.notifications.onClicked.addListener(d._addOnClickedListener),
            chrome.notifications.onClosed.addListener(d._addOnClosedListener),
            (d._isListenersInited = !0));
        },
        _addOnClickedListener: function (a) {
          try {
            if (!1 !== d._idToNotificationMap.hasOwnProperty(a)) {
              var c = d._idToNotificationMap[a].getOnClickedListener();
              !1 !== b.utils.isFunction(c) &&
                (delete d._idToNotificationMap[a],
                setTimeout(function () {
                  c();
                }, 1));
            }
          } finally {
            d._clearNotificationWithId(a);
          }
        },
        _clearNotificationWithId: function (a) {
          try {
            chrome.notifications.clear(a);
          } catch (g) {
            f.info(g);
          }
        },
        _addOnClosedListener: function (a) {
          if (!1 !== d._idToNotificationMap.hasOwnProperty(a)) {
            var c = d._idToNotificationMap[a].getOnClosedListener();
            delete d._idToNotificationMap[a];
            !1 !== b.utils.isFunction(c) &&
              setTimeout(function () {
                c();
              }, 1);
          }
        }
      };
    d.init();
    return d;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.performanceReporterFactory = (function (b) {
    var a = b.utils.isNil,
      f = b.utils.isntNil,
      c = b.extensionAdapter,
      e = b.constants.performanceReporter.MESSAGES,
      d = { _reporters: {}, AUTOMATION_MODE: !1 },
      l = function (b) {
        if (a(b)) throw Error("component cannot be null");
        this.component = b;
        this.start = Date.now();
        this.subComponents = {};
        this.tldReports = {};
      };
    l.prototype._reportStart = function (a) {
      if (f(this.subComponents[a])) throw Error("type already exists");
      this.subComponents[a] = {};
      this.subComponents[a].start = Date.now();
    };
    l.prototype._reportEnd = function (b) {
      if (a(this.subComponents[b])) throw Error("type does NOT exists");
      if (f(this.subComponents[b].stop)) console.warn("already reported this type");
      else {
        var c = Date.now(),
          e = this.subComponents[b].start;
        this.subComponents[b].stop = c;
        this.subComponents[b].timeTaken = c - e;
      }
    };
    l.prototype._reportStartFromProxy = function (b, c, e, d) {
      if (a(b)) throw Error("type cannot be null");
      if (a(c)) throw Error("domain cannot be null");
      if (a(e)) throw Error("frameURL cannot be null");
      if (a(d)) throw Error("frameGUID cannot be null");
      c = this.tldReports[c][d].subComponents;
      if (f(c[b])) throw Error("Sub-component Type already started");
      c[b] = {};
      c[b].start = Date.now();
    };
    l.prototype._reportEndFromProxy = function (b, c, e, d) {
      if (a(b)) throw Error("type cannot be null");
      if (a(c)) throw Error("domain cannot be null");
      if (a(e)) throw Error("frameURL cannot be null");
      if (a(d)) throw Error("frameGUID cannot be null");
      if (a(this.tldReports[c])) throw Error("Component for TLD not properly initialized");
      if (a(this.tldReports[c][d])) throw Error("Component for TLD - frameGUID, not properly initialized");
      c = this.tldReports[c][d].subComponents;
      if (a(c[b].start)) throw Error("type did not start");
      f(c[b].stop)
        ? console.warn("Sub-component Type already ended")
        : ((c[b].stop = Date.now()), (c[b].timeTaken = c[b].stop - c[b].start));
    };
    l.prototype._createOrGetTLDDict = function (b, c, e) {
      if (a(b)) throw Error("domain cannot be NULL");
      if (a(c)) throw Error("frameURL cannot be NULL");
      if (a(e)) throw Error("frameGUID cannot be NULL");
      a(this.tldReports[b]) && (this.tldReports[b] = {});
      a(this.tldReports[b][e]) &&
        ((this.tldReports[b][e] = {}),
        (this.tldReports[b][e].start = Date.now()),
        (this.tldReports[b][e].frameURL = c),
        (this.tldReports[b][e].subComponents = {}));
    };
    l.prototype.serialize = function () {
      var a = {};
      a[this.component] = {};
      a[this.component].start = this.start;
      a[this.component].stop = Date.now();
      a[this.component].timeTaken = a[this.component].stop - this.start;
      a[this.component].subComponents = this.subComponents;
      for (var b in this.tldReports) a[this.component][b] = this.tldReports[b];
      return a;
    };
    d.serialize = function () {
      var a = [],
        b;
      for (b in this._reporters) {
        var c = this._reporters[b].serialize();
        a.push(c);
      }
      return a;
    };
    d._getPerformanceReporter = function (a) {
      var b = d._reporters[a];
      if (f(b)) return b;
      b = new l(a);
      return (d._reporters[a] = b);
    };
    d.reportStartForComponent = function (b, c) {
      if (!1 !== d.AUTOMATION_MODE) {
        if (a(b)) throw Error("component cannot be NULL");
        if (a(c)) throw Error("type cannot be NULL");
        d._getPerformanceReporter(b)._reportStart(c);
      }
    };
    d.reportStopForComponent = function (b, c) {
      if (!1 !== d.AUTOMATION_MODE) {
        if (a(b)) throw Error("component cannot be NULL");
        if (a(c)) throw Error("type cannot be NULL");
        d._getPerformanceReporter(b)._reportEnd(c);
      }
    };
    d._getPerformanceReporterFromProxy = function (b, c, e, f) {
      if (a(e)) throw Error("domain cannot be null");
      if (a(f)) throw Error("frameURL cannot be null");
      if (a(c)) throw Error("frameGUID cannot be null");
      b = d._getPerformanceReporter(b);
      b._createOrGetTLDDict(e, f, c);
      return b;
    };
    d.handleMessage = function (b, c, f) {
      if (!1 !== d.AUTOMATION_MODE && !a(b))
        switch (((c = b.payload), b.id)) {
          case e.REPORT_START:
            var g = c.component;
            b = c.guid;
            var k = c.frameURL;
            g = d._getPerformanceReporterFromProxy(g, b, f.url, k);
            c = c.type;
            g._reportStartFromProxy(c, f.url, k, b);
            break;
          case e.REPORT_END:
            (g = c.component),
              (b = c.guid),
              (k = c.frameURL),
              (g = d._getPerformanceReporter(g)),
              (c = c.type),
              g._reportEndFromProxy(c, f.url, k, b);
        }
    };
    c.addMessageListener(d.handleMessage);
    d.PerformanceReporter = l;
    return d;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.certHandler = (function (b) {
    var a = {},
      d = b.constants;
    a.validateCertAndGetPublicKey = function (b, e, d) {
      try {
        var c = forge.pki.certificateFromPem(b);
        return !forge.pki.certificateFromPem(e).verify(c) || a._isCertExpired(c.validity.notAfter)
          ? null
          : a._verifyCertInfo(c, d)
          ? forge.pki.publicKeyToPem(c.publicKey)
          : null;
      } catch (g) {
        return null;
      }
    };
    a._verifyCertInfo = function (a, b) {
      var c = a.issuer.getField(d.CERT_COMMON_NAME).value === b.CERT_ISSUER_NAME;
      a = a.subject.getField(d.CERT_COMMON_NAME).value === b.CERT_ISSUED;
      return c && a;
    };
    a._isCertExpired = function (a) {
      a = a.getTime();
      var b = new Date().getTime();
      return a > b ? !1 : !0;
    };
    return a;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.cdnFileDownloader = (function (b) {
    var a = {},
      d = b.constants,
      c = b.utils,
      e = b.certHandler,
      k = d.CDN_FILE_DOWNLOADER;
    a._downloadAndValidateCdnFile = function (a, b, f) {
      return c
        .safeFetch(a)
        .then(function (a) {
          if (c.isSuccessCodeLocalFile(a.status)) return a.json();
          throw k.RESPONSE_STATUS.UNSUCCESSFUL_RESPONSE + " " + a.status;
        })
        .then(function (a) {
          var g = void 0 === a.payload ? {} : a.payload,
            h = void 0 === a.JWT ? "" : a.JWT;
          a = e.validateCertAndGetPublicKey(void 0 === a.CERT ? "" : a.CERT, b, f);
          if (c.isNil(a)) throw k.RESPONSE_STATUS.PUBLIC_KEY_NOT_VERIFIED;
          if (!c.verifyJson(g, h, a, [d.CDN_FILE_DOWNLOADER.ENCRYPTION_METHOD])) throw k.RESPONSE_STATUS.FILE_TAMPERED;
          return g;
        })
        .catch(function (a) {
          throw a;
        });
    };
    a.getPayloadFromCdnFile = function (a, b, e) {
      return this._isValidUrl(a) && !c.isNil(b) && this._isValidCertInfo(e)
        ? this._downloadAndValidateCdnFile(a, b, e)
            .then(function (a) {
              return a;
            })
            .catch(function (a) {
              throw a;
            })
        : Promise.reject(k.RESPONSE_STATUS.INVALID_PARAMETERS);
    };
    a._isValidCertInfo = function (a) {
      if (c.isEmptyObject(a)) return !1;
      var b = a.hasOwnProperty(k.CERT_ISSUER_NAME);
      a = a.hasOwnProperty(k.CERT_ISSUED);
      return b && a;
    };
    a._isValidUrl = function (a) {
      if (!c.isString(a)) return !1;
      var b = c.urlProtocol(a);
      a = c.getFileNameExtension(a);
      return k.SUPPORTED_PROTOCOL === b && k.SUPPORTED_FILEFORMATS.includes(a);
    };
    return a;
  })(d.SymBfw);
})(window);
(function (d) {
  d.SymBfw.InternetChecker = (function (b) {
    var a = b.utils,
      d = b.extensionAdapter,
      c = b.logger;
    b = function (a, b) {
      this._pingUrl = b;
      this._filterList = a;
      this._deviceConnectedBinding = this._deviceConnectedHandler.bind(this);
      this._deviceDisconnectedBinding = this._deviceDisconnectedHandler.bind(this);
      this._webRequestErrorBinding = this._startPolling.bind(this);
    };
    b.prototype = {
      _filterList: [],
      _pingUrl: null,
      _state: null,
      _eventTarget: new EventTarget(),
      _timerId: null,
      _deviceConnectedBinding: null,
      _deviceDisconnectedBinding: null,
      _webRequestErrorBinding: null,
      timeout: 3e4,
      _deviceConnectedHandler: function () {
        this._startPolling();
      },
      _deviceDisconnectedHandler: function () {
        this._stopPolling();
      },
      _isSetTimer: function () {
        return null != this._timerId;
      },
      _resetTimer: function () {
        this._isSetTimer() && (window.clearTimeout(this._timerId), (this._timerId = null));
      },
      _startPolling: function () {
        this._isSetTimer() ||
          (d.removeWebRequestErrorListener(this._webRequestErrorBinding),
          !0 === window.navigator.onLine ? this._pollInternetState() : this._setState(!1));
      },
      _pollInternetState: function () {
        this._getInternetState()
          .then(
            function (a) {
              if (200 !== a.status) throw Error("no internet");
              d.addWebRequestErrorListener(this._webRequestErrorBinding, this._filterList);
              this._setState(!0);
              this._timerId = null;
            }.bind(this)
          )
          .catch(
            function (a) {
              var b = this;
              c.debug("Internet ping failed. Ping again after some time.");
              this._setState(!1);
              this._timerId = window.setTimeout(function () {
                b._pollInternetState();
              }, this.timeout);
            }.bind(this)
          );
      },
      _getInternetState: function () {
        return a.safeFetch(this._pingUrl + "/?ts=" + Date.now(), {}, 5e3);
      },
      _setState: function (a) {
        var b = this._state !== a ? !0 : !1;
        this._state = a;
        b && this._emit();
      },
      _stopPolling: function () {
        this._resetTimer();
        d.removeWebRequestErrorListener(this._webRequestErrorBinding);
        this._setState(!1);
      },
      _emit: function () {
        var a = new CustomEvent(this._state ? "online" : "offline");
        this._eventTarget.dispatchEvent(a);
      },
      addListeners: function (b, c) {
        if (!a.isFunction(b) || !a.isFunction(c)) throw Error("Parameters - onLineCallback and offLineCallback should be functions");
        this._eventTarget.addEventListener("online", b);
        this._eventTarget.addEventListener("offline", c);
        d.addWebRequestErrorListener(this._webRequestErrorBinding, this._filterList);
        window.addEventListener("online", this._deviceConnectedBinding);
        window.addEventListener("offline", this._deviceDisconnectedBinding);
        this._startPolling();
      },
      removeListeners: function (b, c) {
        if (!a.isFunction(b) || !a.isFunction(c)) throw Error("Parameters - onLineCallback and offLineCallback should be functions");
        this._eventTarget.removeEventListener("online", b);
        this._eventTarget.removeEventListener("offline", c);
        d.removeWebRequestErrorListener(this._webRequestErrorBinding);
        window.removeEventListener("online", this._deviceConnectedBinding);
        window.removeEventListener("offline", this._deviceDisconnectedBinding);
        this._stopPolling();
      }
    };
    return b;
  })(d.SymBfw);
})(window);
(function (d) {
  (d.SymBfw = d.SymBfw || {}).cookies = (function (b) {
    var a = {},
      d = b.utils.isString,
      c = b.utils.isArray;
    a.set = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      if (!d(a)) throw Error("Key cannot be null");
      if (!d(b)) throw Error("Value cannot be null");
      a = a + "=" + b;
      c && ((c = new Date()), c.setDate(c.getDate() + 3650), (a += ";expires=" + c.toUTCString()));
      document.cookie = a;
    };
    a.get = function (a) {
      if (!d(a)) throw Error("Key cannot be null");
      a = new RegExp(a + "\\s*=[^;]*").exec(document.cookie);
      if (c(a) && 0 !== a.length) return (a = a[0].split("=")[1].trim());
    };
    return a;
  })(d.SymBfw);
})(window);
(function (d) {
  var b = d.SymBfw.utils.isString;
  ("use strict");
  var a = function (a, b, d, f) {
    b = void 0 === b ? !0 : b;
    d = void 0 === d ? !0 : d;
    this._map = new Map();
    this._name = a;
    this._isSerializable = b;
    this._isAutoSave = d;
  };
  a.prototype.has = function (a) {
    var b = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
      return c.return(b._map.has(a));
    });
  };
  a.prototype.get = function (a) {
    var b = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
      return c.return(b._map.get(a));
    });
  };
  a.prototype.set = function (a, b) {
    var c = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
      c._map.set(a, b);
      d.jumpToEnd();
    });
  };
  a.prototype.delete = function (a) {
    var b = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
      return c.return(b._map.delete(a));
    });
  };
  a.prototype.clear = function () {
    var a = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
      return b.return(a._map.clear());
    });
  };
  a.prototype.isSerializable = function () {
    var a = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
      return b.return(a._isSerializable);
    });
  };
  a.prototype.isAutoSave = function () {
    var a = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
      return b.return(a._isAutoSave);
    });
  };
  a.prototype.serialize = function () {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (a) {
      a.jumpToEnd();
    });
  };
  var f = function () {
    this._memoryStores = new Map();
  };
  f.prototype.init = function () {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (a) {
      a.jumpToEnd();
    });
  };
  f.prototype.get = function (c, d, f) {
    d = void 0 === d ? !0 : d;
    f = void 0 === f ? !0 : f;
    var e = this,
      g,
      k;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (l) {
      if (!b(c)) throw Error("Container name cannot be null or is not a string");
      if ((g = e._memoryStores.has(c))) return l.return(e._memoryStores.get(c));
      k = new a(c, d, f);
      e._memoryStores.set(c, k);
      return l.return(k);
    });
  };
  f.prototype.delete = function (a) {
    var b = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
      return c.return(b._memoryStores.delete(a));
    });
  };
  f.prototype.clear = function () {
    var a = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
      return b.return(a._memoryStores.clear());
    });
  };
  d.SymBfw.memoryFactory = new f();
  d.SymBfw.Memory = a;
})(window);
(function (d) {
  var b = SymBfw.utils,
    a = function () {
      this._obfuscationKey = null;
      this.initialize = this.initialize.bind(this);
      this.getObfuscationKey = this.getObfuscationKey.bind(this);
      this.clearObfuscationKey = this.clearObfuscationKey.bind(this);
      this.generateObfuscationKey = this.generateObfuscationKey.bind(this);
      this.initialize();
    };
  a.prototype.initialize = function () {
    this._obfuscationKey = b.createNewGuid();
  };
  a.prototype.getObfuscationKey = function () {
    return this._obfuscationKey;
  };
  a.prototype.clearObfuscationKey = function () {
    this._obfuscationKey = null;
  };
  a.prototype.generateObfuscationKey = function () {
    this._obfuscationKey = b.createNewGuid();
  };
  d.SymBfw.ObfuscationKeyManager = a;
})(window);
