var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (q) {
  return (q.raw = q);
};
$jscomp.createTemplateTagFirstArgWithRaw = function (q, w) {
  q.raw = w;
  return q;
};
$jscomp.arrayIteratorImpl = function (q) {
  var w = 0;
  return function () {
    return w < q.length ? { done: !1, value: q[w++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (q) {
  return { next: $jscomp.arrayIteratorImpl(q) };
};
$jscomp.makeIterator = function (q) {
  var w = "undefined" != typeof Symbol && Symbol.iterator && q[Symbol.iterator];
  if (w) return w.call(q);
  if ("number" == typeof q.length) return $jscomp.arrayIterator(q);
  throw Error(String(q) + " is not an iterable or ArrayLike");
};
$jscomp.arrayFromIterator = function (q) {
  for (var w, x = []; !(w = q.next()).done; ) x.push(w.value);
  return x;
};
$jscomp.arrayFromIterable = function (q) {
  return q instanceof Array ? q : $jscomp.arrayFromIterator($jscomp.makeIterator(q));
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.objectCreate =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.create
    ? Object.create
    : function (q) {
        var w = function () {};
        w.prototype = q;
        return new w();
      };
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (q, w, x) {
        if (q == Array.prototype || q == Object.prototype) return q;
        q[w] = x.value;
        return q;
      };
$jscomp.getGlobal = function (q) {
  q = [
    "object" == typeof globalThis && globalThis,
    q,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global
  ];
  for (var w = 0; w < q.length; ++w) {
    var x = q[w];
    if (x && x.Math == Math) return x;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
$jscomp.polyfill = function (q, w, x, A) {
  w && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(q, w, x, A) : $jscomp.polyfillUnisolated(q, w, x, A));
};
$jscomp.polyfillUnisolated = function (q, w) {
  var x = $jscomp.global;
  q = q.split(".");
  for (var A = 0; A < q.length - 1; A++) {
    var E = q[A];
    if (!(E in x)) return;
    x = x[E];
  }
  q = q[q.length - 1];
  A = x[q];
  w = w(A);
  w != A && null != w && $jscomp.defineProperty(x, q, { configurable: !0, writable: !0, value: w });
};
$jscomp.polyfillIsolated = function (q, w, x) {
  var A = q.split("."),
    E = 1 === A.length;
  q = A[0];
  q = !E && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var I = 0; I < A.length - 1; I++) {
    var U = A[I];
    if (!(U in q)) return;
    q = q[U];
  }
  A = A[A.length - 1];
  x = $jscomp.IS_SYMBOL_NATIVE && "es6" === x ? q[A] : null;
  w = w(x);
  null != w &&
    (E
      ? $jscomp.defineProperty($jscomp.polyfills, A, { configurable: !0, writable: !0, value: w })
      : w !== x &&
        (void 0 === $jscomp.propertyToPolyfillSymbol[A] &&
          ((E = (1e9 * Math.random()) >>> 0),
          ($jscomp.propertyToPolyfillSymbol[A] = $jscomp.IS_SYMBOL_NATIVE
            ? $jscomp.global.Symbol(A)
            : $jscomp.POLYFILL_PREFIX + E + "$" + A)),
        (E = $jscomp.propertyToPolyfillSymbol[A]),
        $jscomp.defineProperty(q, E, { configurable: !0, writable: !0, value: w })));
};
$jscomp.getConstructImplementation = function () {
  function q() {
    function E() {}
    function I() {}
    new E();
    Reflect.construct(E, [], I);
    return new E() instanceof E;
  }
  function w(E, I, U) {
    void 0 === U && (U = E);
    U = U.prototype || Object.prototype;
    U = $jscomp.objectCreate(U);
    var D = Function.prototype.apply;
    return (E = D.call(E, U, I)) || U;
  }
  if ($jscomp.TRUST_ES6_POLYFILLS && "undefined" != typeof Reflect && Reflect.construct) {
    if (q()) return Reflect.construct;
    var x = Reflect.construct,
      A = function (E, I, U) {
        E = x(E, I);
        U && Reflect.setPrototypeOf(E, U.prototype);
        return E;
      };
    return A;
  }
  return w;
};
$jscomp.construct = { valueOf: $jscomp.getConstructImplementation }.valueOf();
$jscomp.underscoreProtoCanBeSet = function () {
  var q = { a: !0 },
    w = {};
  try {
    return (w.__proto__ = q), w.a;
  } catch (x) {}
  return !1;
};
$jscomp.setPrototypeOf =
  $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf
    ? Object.setPrototypeOf
    : $jscomp.underscoreProtoCanBeSet()
    ? function (q, w) {
        q.__proto__ = w;
        if (q.__proto__ !== w) throw new TypeError(q + " is not extensible");
        return q;
      }
    : null;
$jscomp.inherits = function (q, w) {
  q.prototype = $jscomp.objectCreate(w.prototype);
  q.prototype.constructor = q;
  if ($jscomp.setPrototypeOf) {
    var x = $jscomp.setPrototypeOf;
    x(q, w);
  } else
    for (x in w)
      if ("prototype" != x)
        if (Object.defineProperties) {
          var A = Object.getOwnPropertyDescriptor(w, x);
          A && Object.defineProperty(q, x, A);
        } else q[x] = w[x];
  q.superClass_ = w.prototype;
};
$jscomp.polyfill(
  "Reflect",
  function (q) {
    return q ? q : {};
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Reflect.construct",
  function () {
    return $jscomp.construct;
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Reflect.setPrototypeOf",
  function (q) {
    if (q) return q;
    if ($jscomp.setPrototypeOf) {
      var w = $jscomp.setPrototypeOf;
      return (q = function (x, A) {
        try {
          return w(x, A), !0;
        } catch (E) {
          return !1;
        }
      });
    }
    return null;
  },
  "es6",
  "es5"
);
$jscomp.polyfill(
  "Promise",
  function (q) {
    function w() {
      this.batch_ = null;
    }
    function x(D) {
      return D instanceof I
        ? D
        : new I(function (J) {
            J(D);
          });
    }
    if (
      q &&
      (!(
        $jscomp.FORCE_POLYFILL_PROMISE ||
        ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && "undefined" === typeof $jscomp.global.PromiseRejectionEvent)
      ) ||
        !$jscomp.global.Promise ||
        -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))
    )
      return q;
    w.prototype.asyncExecute = function (D) {
      if (null == this.batch_) {
        this.batch_ = [];
        var J = this;
        this.asyncExecuteFunction(function () {
          J.executeBatch_();
        });
      }
      this.batch_.push(D);
    };
    var A = $jscomp.global.setTimeout;
    w.prototype.asyncExecuteFunction = function (D) {
      A(D, 0);
    };
    w.prototype.executeBatch_ = function () {
      for (; this.batch_ && this.batch_.length; ) {
        var D = this.batch_;
        this.batch_ = [];
        for (var J = 0; J < D.length; ++J) {
          var R = D[J];
          D[J] = null;
          try {
            R();
          } catch (W) {
            this.asyncThrow_(W);
          }
        }
      }
      this.batch_ = null;
    };
    w.prototype.asyncThrow_ = function (D) {
      this.asyncExecuteFunction(function () {
        throw D;
      });
    };
    var E = { PENDING: 0, FULFILLED: 1, REJECTED: 2 },
      I = function (D) {
        this.state_ = E.PENDING;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var J = this.createResolveAndReject_();
        try {
          D(J.resolve, J.reject);
        } catch (R) {
          J.reject(R);
        }
      };
    I.prototype.createResolveAndReject_ = function () {
      function D(W) {
        return function (ba) {
          R || ((R = !0), W.call(J, ba));
        };
      }
      var J = this,
        R = !1;
      return { resolve: D(this.resolveTo_), reject: D(this.reject_) };
    };
    I.prototype.resolveTo_ = function (D) {
      if (D === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
      else if (D instanceof I) this.settleSameAsPromise_(D);
      else {
        a: switch (typeof D) {
          case "object":
            var J = null != D;
            break a;
          case "function":
            J = !0;
            break a;
          default:
            J = !1;
        }
        J ? this.resolveToNonPromiseObj_(D) : this.fulfill_(D);
      }
    };
    I.prototype.resolveToNonPromiseObj_ = function (D) {
      var J = void 0;
      try {
        J = D.then;
      } catch (R) {
        this.reject_(R);
        return;
      }
      "function" == typeof J ? this.settleSameAsThenable_(J, D) : this.fulfill_(D);
    };
    I.prototype.reject_ = function (D) {
      this.settle_(E.REJECTED, D);
    };
    I.prototype.fulfill_ = function (D) {
      this.settle_(E.FULFILLED, D);
    };
    I.prototype.settle_ = function (D, J) {
      if (this.state_ != E.PENDING) throw Error("Cannot settle(" + D + ", " + J + "): Promise already settled in state" + this.state_);
      this.state_ = D;
      this.result_ = J;
      this.state_ === E.REJECTED && this.scheduleUnhandledRejectionCheck_();
      this.executeOnSettledCallbacks_();
    };
    I.prototype.scheduleUnhandledRejectionCheck_ = function () {
      var D = this;
      A(function () {
        if (D.notifyUnhandledRejection_()) {
          var J = $jscomp.global.console;
          "undefined" !== typeof J && J.error(D.result_);
        }
      }, 1);
    };
    I.prototype.notifyUnhandledRejection_ = function () {
      if (this.isRejectionHandled_) return !1;
      var D = $jscomp.global.CustomEvent,
        J = $jscomp.global.Event,
        R = $jscomp.global.dispatchEvent;
      if ("undefined" === typeof R) return !0;
      "function" === typeof D
        ? (D = new D("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof J
        ? (D = new J("unhandledrejection", { cancelable: !0 }))
        : ((D = $jscomp.global.document.createEvent("CustomEvent")), D.initCustomEvent("unhandledrejection", !1, !0, D));
      D.promise = this;
      D.reason = this.result_;
      return R(D);
    };
    I.prototype.executeOnSettledCallbacks_ = function () {
      if (null != this.onSettledCallbacks_) {
        for (var D = 0; D < this.onSettledCallbacks_.length; ++D) U.asyncExecute(this.onSettledCallbacks_[D]);
        this.onSettledCallbacks_ = null;
      }
    };
    var U = new w();
    I.prototype.settleSameAsPromise_ = function (D) {
      var J = this.createResolveAndReject_();
      D.callWhenSettled_(J.resolve, J.reject);
    };
    I.prototype.settleSameAsThenable_ = function (D, J) {
      var R = this.createResolveAndReject_();
      try {
        D.call(J, R.resolve, R.reject);
      } catch (W) {
        R.reject(W);
      }
    };
    I.prototype.then = function (D, J) {
      function R(ia, da) {
        return "function" == typeof ia
          ? function (Ba) {
              try {
                W(ia(Ba));
              } catch (aa) {
                ba(aa);
              }
            }
          : da;
      }
      var W,
        ba,
        ta = new I(function (ia, da) {
          W = ia;
          ba = da;
        });
      this.callWhenSettled_(R(D, W), R(J, ba));
      return ta;
    };
    I.prototype.catch = function (D) {
      return this.then(void 0, D);
    };
    I.prototype.callWhenSettled_ = function (D, J) {
      function R() {
        switch (W.state_) {
          case E.FULFILLED:
            D(W.result_);
            break;
          case E.REJECTED:
            J(W.result_);
            break;
          default:
            throw Error("Unexpected state: " + W.state_);
        }
      }
      var W = this;
      null == this.onSettledCallbacks_ ? U.asyncExecute(R) : this.onSettledCallbacks_.push(R);
      this.isRejectionHandled_ = !0;
    };
    I.resolve = x;
    I.reject = function (D) {
      return new I(function (J, R) {
        R(D);
      });
    };
    I.race = function (D) {
      return new I(function (J, R) {
        for (var W = $jscomp.makeIterator(D), ba = W.next(); !ba.done; ba = W.next()) x(ba.value).callWhenSettled_(J, R);
      });
    };
    I.all = function (D) {
      var J = $jscomp.makeIterator(D),
        R = J.next();
      return R.done
        ? x([])
        : new I(function (W, ba) {
            function ta(Ba) {
              return function (aa) {
                ia[Ba] = aa;
                da--;
                0 == da && W(ia);
              };
            }
            var ia = [],
              da = 0;
            do ia.push(void 0), da++, x(R.value).callWhenSettled_(ta(ia.length - 1), ba), (R = J.next());
            while (!R.done);
          });
    };
    return I;
  },
  "es6",
  "es3"
);
$jscomp.owns = function (q, w) {
  return Object.prototype.hasOwnProperty.call(q, w);
};
$jscomp.assign =
  $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign
    ? Object.assign
    : function (q, w) {
        for (var x = 1; x < arguments.length; x++) {
          var A = arguments[x];
          if (A) for (var E in A) $jscomp.owns(A, E) && (q[E] = A[E]);
        }
        return q;
      };
$jscomp.polyfill(
  "Object.assign",
  function (q) {
    return q || $jscomp.assign;
  },
  "es6",
  "es3"
);
$jscomp.checkStringArgs = function (q, w, x) {
  if (null == q) throw new TypeError("The 'this' value for String.prototype." + x + " must not be null or undefined");
  if (w instanceof RegExp) throw new TypeError("First argument to String.prototype." + x + " must not be a regular expression");
  return q + "";
};
$jscomp.polyfill(
  "String.prototype.startsWith",
  function (q) {
    return q
      ? q
      : (q = function (w, x) {
          var A = $jscomp.checkStringArgs(this, w, "startsWith");
          w += "";
          var E = A.length,
            I = w.length;
          x = Math.max(0, Math.min(x | 0, A.length));
          for (var U = 0; U < I && x < E; ) if (A[x++] != w[U++]) return !1;
          return U >= I;
        });
  },
  "es6",
  "es3"
);
$jscomp.initSymbol = function () {};
$jscomp.polyfill(
  "Symbol",
  function (q) {
    if (q) return q;
    var w = function (I, U) {
      this.$jscomp$symbol$id_ = I;
      $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: U });
    };
    w.prototype.toString = function () {
      return this.$jscomp$symbol$id_;
    };
    q = (1e9 * Math.random()) >>> 0;
    var x = "jscomp_symbol_" + q + "_",
      A = 0,
      E = function (I) {
        if (this instanceof E) throw new TypeError("Symbol is not a constructor");
        return new w(x + (I || "") + "_" + A++, I);
      };
    return E;
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Symbol.iterator",
  function (q) {
    if (q) return q;
    q = Symbol("Symbol.iterator");
    for (
      var w = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        x = 0;
      x < w.length;
      x++
    ) {
      var A = $jscomp.global[w[x]];
      "function" === typeof A &&
        "function" != typeof A.prototype[q] &&
        $jscomp.defineProperty(A.prototype, q, {
          configurable: !0,
          writable: !0,
          value: function () {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
          }
        });
    }
    return q;
  },
  "es6",
  "es3"
);
$jscomp.iteratorPrototype = function (q) {
  q = { next: q };
  q[Symbol.iterator] = function () {
    return this;
  };
  return q;
};
$jscomp.iteratorFromArray = function (q, w) {
  q instanceof String && (q += "");
  var x = 0,
    A = !1,
    E = {
      next: function () {
        if (!A && x < q.length) {
          var I = x++;
          return { value: w(I, q[I]), done: !1 };
        }
        A = !0;
        return { done: !0, value: void 0 };
      }
    };
  E[Symbol.iterator] = function () {
    return E;
  };
  return E;
};
$jscomp.polyfill(
  "Array.prototype.keys",
  function (q) {
    return q
      ? q
      : (q = function () {
          return $jscomp.iteratorFromArray(this, function (w) {
            return w;
          });
        });
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Array.prototype.values",
  function (q) {
    return q
      ? q
      : (q = function () {
          return $jscomp.iteratorFromArray(this, function (w, x) {
            return x;
          });
        });
  },
  "es8",
  "es3"
);
$jscomp.polyfill(
  "Object.is",
  function (q) {
    return q
      ? q
      : (q = function (w, x) {
          return w === x ? 0 !== w || 1 / w === 1 / x : w !== w && x !== x;
        });
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Array.prototype.includes",
  function (q) {
    return q
      ? q
      : (q = function (w, x) {
          var A = this;
          A instanceof String && (A = String(A));
          var E = A.length;
          x = x || 0;
          for (0 > x && (x = Math.max(x + E, 0)); x < E; x++) {
            var I = A[x];
            if (I === w || Object.is(I, w)) return !0;
          }
          return !1;
        });
  },
  "es7",
  "es3"
);
$jscomp.polyfill(
  "String.prototype.includes",
  function (q) {
    return q
      ? q
      : (q = function (w, x) {
          var A = $jscomp.checkStringArgs(this, w, "includes");
          return -1 !== A.indexOf(w, x || 0);
        });
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Math.fround",
  function (q) {
    if (q) return q;
    if ($jscomp.SIMPLE_FROUND_POLYFILL || "function" !== typeof Float32Array)
      return function (x) {
        return x;
      };
    var w = new Float32Array(1);
    return (q = function (x) {
      w[0] = x;
      return w[0];
    });
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Math.clz32",
  function (q) {
    return q
      ? q
      : (q = function (w) {
          w = Number(w) >>> 0;
          if (0 === w) return 32;
          var x = 0;
          0 === (w & 4294901760) && ((w <<= 16), (x += 16));
          0 === (w & 4278190080) && ((w <<= 8), (x += 8));
          0 === (w & 4026531840) && ((w <<= 4), (x += 4));
          0 === (w & 3221225472) && ((w <<= 2), (x += 2));
          0 === (w & 2147483648) && x++;
          return x;
        });
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Array.prototype.copyWithin",
  function (q) {
    function w(x) {
      x = Number(x);
      return Infinity === x || -Infinity === x ? x : x | 0;
    }
    return q
      ? q
      : (q = function (x, A, E) {
          var I = this.length;
          x = w(x);
          A = w(A);
          E = void 0 === E ? I : w(E);
          x = 0 > x ? Math.max(I + x, 0) : Math.min(x, I);
          A = 0 > A ? Math.max(I + A, 0) : Math.min(A, I);
          E = 0 > E ? Math.max(I + E, 0) : Math.min(E, I);
          if (x < A) for (; A < E; ) A in this ? (this[x++] = this[A++]) : (delete this[x++], A++);
          else for (E = Math.min(E, I + A - x), x += E - A; E > A; ) --E in this ? (this[--x] = this[E]) : delete this[--x];
          return this;
        });
  },
  "es6",
  "es3"
);
$jscomp.typedArrayCopyWithin = function (q) {
  return q ? q : Array.prototype.copyWithin;
};
$jscomp.polyfill("Int8Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint8Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint8ClampedArray.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Int16Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint16Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Int32Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint32Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Float32Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Float64Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
var inkLoadWasmModule = (function () {
  var q = "undefined" !== typeof document && document.currentScript ? document.currentScript.src : void 0;
  "undefined" !== typeof __filename && (q = q || __filename);
  return function (w) {
    function x(a) {
      return h.locateFile ? h.locateFile(a, ja) : ja + a;
    }
    function A() {
      var a = $a.buffer;
      h.HEAP8 = V = new Int8Array(a);
      h.HEAP16 = qa = new Int16Array(a);
      h.HEAPU8 = K = new Uint8Array(a);
      h.HEAPU16 = Ca = new Uint16Array(a);
      h.HEAP32 = r = new Int32Array(a);
      h.HEAPU32 = O = new Uint32Array(a);
      h.HEAPF32 = G = new Float32Array(a);
      h.HEAPF64 = ab = new Float64Array(a);
    }
    function E(a) {
      if (h.onAbort) h.onAbort(a);
      a = "Aborted(" + a + ")";
      ka(a);
      ua = !0;
      Da = 1;
      a += ". Build with -sASSERTIONS for more info.";
      a = new WebAssembly.RuntimeError(a);
      bb(a);
      throw a;
    }
    function I(a) {
      if (a == Ea && Fa) return new Uint8Array(Fa);
      if (tb) return tb(a);
      throw "both async and sync fetching of the wasm failed";
    }
    function U(a) {
      if (!Fa && (Ub || va)) {
        if ("function" == typeof fetch && !a.startsWith("file://"))
          return fetch(a, { credentials: "same-origin" })
            .then(function (b) {
              if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
              return b.arrayBuffer();
            })
            .catch(function () {
              return I(a);
            });
        if (ub)
          return new Promise(function (b, c) {
            ub(
              a,
              function (d) {
                return b(new Uint8Array(d));
              },
              c
            );
          });
      }
      return Promise.resolve().then(function () {
        return I(a);
      });
    }
    function D(a, b, c) {
      return U(a)
        .then(function (d) {
          return WebAssembly.instantiate(d, b);
        })
        .then(function (d) {
          return d;
        })
        .then(c, function (d) {
          ka("failed to asynchronously prepare wasm: " + d);
          E(d);
        });
    }
    function J(a, b, c, d) {
      return a ||
        "function" != typeof WebAssembly.instantiateStreaming ||
        b.startsWith("data:application/octet-stream;base64,") ||
        b.startsWith("file://") ||
        Ga ||
        "function" != typeof fetch
        ? D(b, c, d)
        : fetch(b, { credentials: "same-origin" }).then(function (e) {
            e = WebAssembly.instantiateStreaming(e, c);
            return e.then(d, function (f) {
              ka("wasm streaming compile failed: " + f);
              ka("falling back to ArrayBuffer instantiation");
              return D(b, c, d);
            });
          });
    }
    function R() {
      function a(d) {
        z = d.exports;
        $a = z.Gf;
        A();
        Vb.unshift(z.Hf);
        ra--;
        h.monitorRunDependencies && h.monitorRunDependencies(ra);
        0 == ra && (null !== vb && (clearInterval(vb), (vb = null)), Ha && ((d = Ha), (Ha = null), d()));
        return z;
      }
      function b(d) {
        a(d.instance);
      }
      var c = { a: $c };
      ra++;
      h.monitorRunDependencies && h.monitorRunDependencies(ra);
      if (h.instantiateWasm)
        try {
          return h.instantiateWasm(c, a);
        } catch (d) {
          ka("Module.instantiateWasm callback failed with error: " + d), bb(d);
        }
      J(Fa, Ea, c, b).catch(bb);
      return {};
    }
    function W(a, b, c) {
      if ("object" === typeof globalThis && "object" === typeof globalThis.Module && "function" === typeof globalThis.Module.log)
        globalThis.Module.log(a, T(b), T(c));
      else {
        var d = [console.log, console.warn, console.error];
        d[a].call(console, T(b) + " " + T(c) + "\n");
      }
    }
    function ba() {
      return "undefined" !== typeof wasmOffsetConverter;
    }
    function ta(a) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a;
    }
    function ia() {}
    function da(a) {
      return this.fromWireType(r[a >> 2]);
    }
    function Ba(a, b, c) {
      c = void 0 === c ? {} : c;
      var d = b.name;
      a || Q('type "' + d + '" must have a positive integer typeid pointer');
      if (sa.hasOwnProperty(a)) {
        if (c.ignoreDuplicateRegistrations) return;
        Q("Cannot register type '" + d + "' twice");
      }
      sa[a] = b;
      delete cb[a];
      wa.hasOwnProperty(a) &&
        ((b = wa[a]),
        delete wa[a],
        b.forEach(function (e) {
          return e();
        }));
    }
    function aa(a, b, c) {
      c = void 0 === c ? {} : c;
      if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      return Ba(a, b, c);
    }
    function ad(a) {
      function b() {
        return this.isSmartPointer
          ? db(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: c, smartPtrType: this, smartPtr: a })
          : db(this.registeredClass.instancePrototype, { ptrType: this, ptr: a });
      }
      var c = this.getPointee(a);
      if (!c) return this.destructor(a), null;
      var d = bd(this.registeredClass, c);
      if (void 0 !== d) {
        if (0 === d.$$.count.value) return (d.$$.ptr = c), (d.$$.smartPtr = a), d.clone();
        d = d.clone();
        this.destructor(a);
        return d;
      }
      d = this.registeredClass.getActualType(c);
      d = Wb[d];
      if (!d) return b.call(this);
      d = this.isConst ? d.constPointerType : d.pointerType;
      var e = Xb(c, this.registeredClass, d.registeredClass);
      return null === e
        ? b.call(this)
        : this.isSmartPointer
        ? db(d.registeredClass.instancePrototype, { ptrType: d, ptr: e, smartPtrType: this, smartPtr: a })
        : db(d.registeredClass.instancePrototype, { ptrType: d, ptr: e });
    }
    function eb() {
      this.$$ = void 0;
    }
    function wb(a, b) {
      a = Yb(a);
      var c = {};
      return ((c[a] = function () {
        return b.apply(this, arguments);
      }),
      c)[a];
    }
    function cd(a, b, c, d, e, f, g, l) {
      this.name = a;
      this.constructor = b;
      this.instancePrototype = c;
      this.rawDestructor = d;
      this.baseClass = e;
      this.getActualType = f;
      this.upcast = g;
      this.downcast = l;
      this.pureVirtualFunctions = [];
    }
    function dd(a, b) {
      if (null === b) return this.isReference && Q("null is not a valid " + this.name), 0;
      b.$$ || Q('Cannot pass "' + xb(b) + '" as a ' + this.name);
      b.$$.ptr || Q("Cannot pass deleted object as a pointer of type " + this.name);
      a = b.$$.ptrType.registeredClass;
      return (b = fb(b.$$.ptr, a, this.registeredClass));
    }
    function ed(a, b) {
      if (null === b) {
        this.isReference && Q("null is not a valid " + this.name);
        if (this.isSmartPointer) {
          var c = this.rawConstructor();
          null !== a && a.push(this.rawDestructor, c);
          return c;
        }
        return 0;
      }
      b.$$ || Q('Cannot pass "' + xb(b) + '" as a ' + this.name);
      b.$$.ptr || Q("Cannot pass deleted object as a pointer of type " + this.name);
      !this.isConst &&
        b.$$.ptrType.isConst &&
        Q(
          "Cannot convert argument of type " +
            (b.$$.smartPtrType ? b.$$.smartPtrType.name : b.$$.ptrType.name) +
            " to parameter type " +
            this.name
        );
      c = b.$$.ptrType.registeredClass;
      c = fb(b.$$.ptr, c, this.registeredClass);
      if (this.isSmartPointer)
        switch ((void 0 === b.$$.smartPtr && Q("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy)) {
          case 0:
            b.$$.smartPtrType === this
              ? (c = b.$$.smartPtr)
              : Q(
                  "Cannot convert argument of type " +
                    (b.$$.smartPtrType ? b.$$.smartPtrType.name : b.$$.ptrType.name) +
                    " to parameter type " +
                    this.name
                );
            break;
          case 1:
            c = b.$$.smartPtr;
            break;
          case 2:
            if (b.$$.smartPtrType === this) c = b.$$.smartPtr;
            else {
              var d = b.clone();
              c = this.rawShare(
                c,
                X.toHandle(function () {
                  return d["delete"]();
                })
              );
              null !== a && a.push(this.rawDestructor, c);
            }
            break;
          default:
            Q("Unsupporting sharing policy");
        }
      return c;
    }
    function fd(a, b) {
      if (null === b) return this.isReference && Q("null is not a valid " + this.name), 0;
      b.$$ || Q('Cannot pass "' + xb(b) + '" as a ' + this.name);
      b.$$.ptr || Q("Cannot pass deleted object as a pointer of type " + this.name);
      b.$$.ptrType.isConst && Q("Cannot convert argument of type " + b.$$.ptrType.name + " to parameter type " + this.name);
      a = b.$$.ptrType.registeredClass;
      return (b = fb(b.$$.ptr, a, this.registeredClass));
    }
    function Zb(a) {
      return this.fromWireType(O[a >> 2]);
    }
    function gb(a, b, c, d, e, f, g, l, n, v, t) {
      this.name = a;
      this.registeredClass = b;
      this.isReference = c;
      this.isConst = d;
      this.isSmartPointer = e;
      this.pointeeType = f;
      this.sharingPolicy = g;
      this.rawGetPointee = l;
      this.rawConstructor = n;
      this.rawShare = v;
      this.rawDestructor = t;
      e || void 0 !== b.baseClass ? (this.toWireType = ed) : ((this.toWireType = d ? dd : fd), (this.destructorFunction = null));
    }
    function yb(a, b, c, d, e) {
      var f = b.length;
      2 > f && Q("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var g = null !== b[1] && null !== c,
        l = !1;
      for (c = 1; c < b.length; ++c)
        if (null !== b[c] && void 0 === b[c].destructorFunction) {
          l = !0;
          break;
        }
      var n = "void" !== b[0].name,
        v = f - 2,
        t = Array(v),
        F = [],
        M = [];
      return function () {
        arguments.length !== v && Q("function " + a + " called with " + arguments.length + " arguments, expected " + v);
        M.length = 0;
        F.length = g ? 2 : 1;
        F[0] = e;
        if (g) {
          var p = b[1].toWireType(M, this);
          F[1] = p;
        }
        for (var y = 0; y < v; ++y) (t[y] = b[y + 2].toWireType(M, arguments[y])), F.push(t[y]);
        y = d.apply(null, F);
        if (l) Ia(M);
        else
          for (var B = g ? 1 : 2; B < b.length; B++) {
            var N = 1 === B ? p : t[B - 2];
            null !== b[B].destructorFunction && b[B].destructorFunction(N);
          }
        p = n ? b[0].fromWireType(y) : void 0;
        return p;
      };
    }
    function gd() {
      Object.assign($b.prototype, {
        get: function (a) {
          return this.allocated[a];
        },
        has: function (a) {
          return void 0 !== this.allocated[a];
        },
        allocate: function (a) {
          var b = this.freelist.pop() || this.allocated.length;
          this.allocated[b] = a;
          return b;
        },
        free: function (a) {
          this.allocated[a] = void 0;
          this.freelist.push(a);
        }
      });
    }
    function $b() {
      this.allocated = [void 0];
      this.freelist = [];
    }
    function hd() {}
    function id(a) {
      k.activeTexture(a);
    }
    function jd(a) {
      k.beginTransformFeedback(a);
    }
    function kd(a, b, c, d) {
      k.blendColor(a, b, c, d);
    }
    function ld(a) {
      k.blendEquation(a);
    }
    function md(a, b) {
      k.blendEquationSeparate(a, b);
    }
    function nd(a, b) {
      k.blendFunc(a, b);
    }
    function od(a, b, c, d) {
      k.blendFuncSeparate(a, b, c, d);
    }
    function pd(a, b, c, d, e, f, g, l, n, v) {
      k.blitFramebuffer(a, b, c, d, e, f, g, l, n, v);
    }
    function qd(a) {
      return k.checkFramebufferStatus(a);
    }
    function rd(a) {
      k.clear(a);
    }
    function sd(a, b, c, d) {
      k.clearBufferfi(a, b, c, d);
    }
    function td(a, b, c, d) {
      k.clearColor(a, b, c, d);
    }
    function ud(a) {
      k.clearDepth(a);
    }
    function vd(a) {
      k.clearStencil(a);
    }
    function wd(a, b, c, d, e) {
      k.copyBufferSubData(a, b, c, d, e);
    }
    function xd(a, b, c, d, e, f, g, l) {
      k.copyTexImage2D(a, b, c, d, e, f, g, l);
    }
    function yd(a, b, c, d, e, f, g, l) {
      k.copyTexSubImage2D(a, b, c, d, e, f, g, l);
    }
    function zd(a, b, c, d, e, f, g, l, n) {
      k.copyTexSubImage3D(a, b, c, d, e, f, g, l, n);
    }
    function Ad(a) {
      k.cullFace(a);
    }
    function Bd(a) {
      k.depthFunc(a);
    }
    function Cd(a, b) {
      k.depthRange(a, b);
    }
    function Dd(a) {
      k.disable(a);
    }
    function Ed(a) {
      k.enable(a);
    }
    function Fd(a) {
      k.endQuery(a);
    }
    function Gd() {
      k.endTransformFeedback();
    }
    function Hd() {
      k.finish();
    }
    function Id() {
      k.flush();
    }
    function Jd(a) {
      k.frontFace(a);
    }
    function ac(a, b) {
      oa(a, b, "createVertexArray", m.vaos);
    }
    function Kd(a) {
      k.generateMipmap(a);
    }
    function Ld(a, b) {
      k.hint(a, b);
    }
    function Md(a) {
      return k.isEnabled(a);
    }
    function Nd(a) {
      k.lineWidth(a);
    }
    function Od() {
      k.pauseTransformFeedback();
    }
    function Pd(a, b) {
      k.polygonOffset(a, b);
    }
    function Qd(a) {
      k.readBuffer(a);
    }
    function Rd(a, b, c, d) {
      k.renderbufferStorage(a, b, c, d);
    }
    function Sd(a, b, c, d, e) {
      k.renderbufferStorageMultisample(a, b, c, d, e);
    }
    function Td() {
      k.resumeTransformFeedback();
    }
    function Ud(a, b, c, d) {
      k.scissor(a, b, c, d);
    }
    function Vd(a, b, c) {
      k.stencilFunc(a, b, c);
    }
    function Wd(a, b, c, d) {
      k.stencilFuncSeparate(a, b, c, d);
    }
    function Xd(a) {
      k.stencilMask(a);
    }
    function Yd(a, b) {
      k.stencilMaskSeparate(a, b);
    }
    function Zd(a, b, c) {
      k.stencilOp(a, b, c);
    }
    function $d(a, b, c, d) {
      k.stencilOpSeparate(a, b, c, d);
    }
    function ae(a, b, c) {
      k.texParameterf(a, b, c);
    }
    function be(a, b, c) {
      k.texParameteri(a, b, c);
    }
    function ce(a, b, c, d, e) {
      k.texStorage2D(a, b, c, d, e);
    }
    function de(a, b, c, d, e, f) {
      k.texStorage3D(a, b, c, d, e, f);
    }
    function ee(a, b) {
      k.vertexAttrib1f(a, b);
    }
    function fe(a, b, c) {
      k.vertexAttrib2f(a, b, c);
    }
    function ge(a, b, c, d) {
      k.vertexAttrib3f(a, b, c, d);
    }
    function he(a, b, c, d, e) {
      k.vertexAttrib4f(a, b, c, d, e);
    }
    function ie(a, b, c, d, e) {
      k.vertexAttribI4i(a, b, c, d, e);
    }
    function je(a, b, c, d, e) {
      k.vertexAttribI4ui(a, b, c, d, e);
    }
    function ke(a, b, c, d) {
      k.viewport(a, b, c, d);
    }
    function bc(a, b, c) {
      c = 0 < c ? c : hb(a) + 1;
      c = Array(c);
      a = ea(a, c, 0, c.length);
      b && (c.length = a);
      return c;
    }
    function zb() {
      var a = Error();
      if (!a.stack) {
        try {
          throw Error();
        } catch (b) {
          a = b;
        }
        if (!a.stack) return "(no stack trace available)";
      }
      return a.stack.toString();
    }
    function le() {
      var a = zb().split("\n");
      "Error" == a[0] && a.shift();
      cc(a);
      xa.last_addr = ib(a[3]);
      xa.last_stack = a;
      return xa.last_addr;
    }
    function me() {
      return 70;
    }
    function ne(a, b, c) {
      var d = Ja();
      try {
        dc(a, b, c);
      } catch (e) {
        Ka(d);
        if (e !== e + 0) throw e;
        La(1, 0);
      }
    }
    function oe(a, b) {
      var c = Ja();
      try {
        return ec(a, b);
      } catch (d) {
        Ka(c);
        if (d !== d + 0) throw d;
        La(1, 0);
      }
    }
    function pe(a, b, c) {
      var d = Ja();
      try {
        return fc(a, b, c);
      } catch (e) {
        Ka(d);
        if (e !== e + 0) throw e;
        La(1, 0);
      }
    }
    function qe(a, b, c, d, e, f) {
      var g = Ja();
      try {
        gc(a, b, c, d, e, f);
      } catch (l) {
        Ka(g);
        if (l !== l + 0) throw l;
        La(1, 0);
      }
    }
    function hc() {
      function a() {
        if (!jb && ((jb = !0), (h.calledRun = !0), !ua)) {
          Ab(Vb);
          ic(h);
          if (h.onRuntimeInitialized) h.onRuntimeInitialized();
          if (h.postRun)
            for ("function" == typeof h.postRun && (h.postRun = [h.postRun]); h.postRun.length; ) jc.unshift(h.postRun.shift());
          Ab(jc);
        }
      }
      if (!(0 < ra)) {
        if (h.preRun) for ("function" == typeof h.preRun && (h.preRun = [h.preRun]); h.preRun.length; ) kc.unshift(h.preRun.shift());
        Ab(kc);
        0 < ra ||
          (h.setStatus
            ? (h.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  h.setStatus("");
                }, 1);
                a();
              }, 1))
            : a());
      }
    }
    var h = (w = void 0 === w ? {} : w),
      ic,
      bb;
    h.ready = new Promise(function (a, b) {
      ic = a;
      bb = b;
    });
    var lc = Object.assign({}, h),
      Bb = "./this.program",
      kb = function (a, b) {
        throw b;
      },
      Ub = "object" == typeof window,
      va = "function" == typeof importScripts,
      Ga = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
      ja = "";
    if (Ga) {
      var mc = require("fs"),
        Cb = require("path");
      ja = va ? Cb.dirname(ja) + "/" : __dirname + "/";
      var nc = function (a, b) {
        a = a.startsWith("file://") ? new URL(a) : Cb.normalize(a);
        return mc.readFileSync(a, b ? void 0 : "utf8");
      };
      var tb = function (a) {
        a = nc(a, !0);
        a.buffer || (a = new Uint8Array(a));
        return a;
      };
      var ub = function (a, b, c, d) {
        d = void 0 === d ? !0 : d;
        a = a.startsWith("file://") ? new URL(a) : Cb.normalize(a);
        mc.readFile(a, d ? void 0 : "utf8", function (e, f) {
          e ? c(e) : b(d ? f.buffer : f);
        });
      };
      !h.thisProgram && 1 < process.argv.length && (Bb = process.argv[1].replace(/\\/g, "/"));
      kb = function (a, b) {
        process.exitCode = a;
        throw b;
      };
      h.inspect = function () {
        return "[Emscripten Module object]";
      };
    } else if (Ub || va)
      va ? (ja = self.location.href) : "undefined" != typeof document && document.currentScript && (ja = document.currentScript.src),
        q && (ja = q),
        (ja = 0 !== ja.indexOf("blob:") ? ja.substr(0, ja.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ""),
        (nc = function (a) {
          var b = new XMLHttpRequest();
          b.open("GET", a, !1);
          b.send(null);
          return b.responseText;
        }),
        va &&
          (tb = function (a) {
            var b = new XMLHttpRequest();
            b.open("GET", a, !1);
            b.responseType = "arraybuffer";
            b.send(null);
            return new Uint8Array(b.response);
          }),
        (ub = function (a, b, c) {
          var d = new XMLHttpRequest();
          d.open("GET", a, !0);
          d.responseType = "arraybuffer";
          d.onload = function () {
            200 == d.status || (0 == d.status && d.response) ? b(d.response) : c();
          };
          d.onerror = c;
          d.send(null);
        });
    var oc = h.print || console.log.bind(console),
      ka = h.printErr || console.error.bind(console);
    Object.assign(h, lc);
    lc = null;
    h.thisProgram && (Bb = h.thisProgram);
    h.quit && (kb = h.quit);
    var Fa;
    h.wasmBinary && (Fa = h.wasmBinary);
    "object" != typeof WebAssembly && E("no native wasm support detected");
    var $a,
      ua = !1,
      Da,
      V,
      K,
      qa,
      Ca,
      r,
      O,
      G,
      ab,
      kc = [],
      Vb = [],
      re = [],
      jc = [],
      ra = 0,
      vb = null,
      Ha = null;
    var Ea = "ink.wasm";
    Ea.startsWith("data:application/octet-stream;base64,") || (Ea = x(Ea));
    var pc = {
        301576: function (a, b, c, d) {
          return setTimeout(function () {
            return window.inkWasmRegistry[d].dynCall_vi(b, c);
          }, a);
        },
        301657: function (a) {
          clearTimeout(a);
        },
        301679: function (a, b) {
          window.inkHostRegistry[b].setTargetFPS(a);
        },
        301728: function (a) {
          window.inkHostRegistry[a].bindScreen();
        },
        301773: function (a, b) {
          window.inkHostRegistry[b].requestImage(T(a));
        },
        301836: function (a, b, c, d) {
          window.inkHostRegistry[d].setCursor(a, b, c);
        },
        301890: function (a, b, c) {
          window.inkHostRegistry[c].navigateToUri(T(a, b));
        },
        301958: function (a, b) {
          window.inkHostRegistry[b].setKeyboardMode(a);
        },
        302010: function (a) {
          return window.inkHostRegistry[a].shouldPreloadShaders();
        },
        302072: function (a) {
          return window.inkHostRegistry[a].shouldRegisterDocument();
        },
        302136: function (a, b, c, d, e, f) {
          a = window.inkHostRegistry[f].renderText(K.subarray(a, a + b), c, d);
          V.set(a, e);
        },
        302250: function (a, b, c, d, e, f) {
          return (a = window.inkHostRegistry[a].selectMatchingFont(T(b, c), d, !!e, f))
            ? ((b = hb(a) + 1), (c = Ma(b)), ea(a, K, c, b), c)
            : 0;
        },
        302506: function (a, b, c) {
          window.inkHostRegistry[c].onSceneChange(new Uint8Array(K.subarray(a, a + b)));
        },
        302599: function (a, b, c, d, e, f, g, l, n) {
          window.inkHostRegistry[n].onImageExported(a, b, c, new Uint8ClampedArray(K.subarray(d, d + e)), f, g, T(l));
        },
        302739: function (a, b, c) {
          window.inkHostRegistry[c].onToolEvent(new Uint8Array(K.subarray(a, a + b)));
        },
        302830: function (a, b) {
          window.inkHostRegistry[b].onSequencePointReached(a);
        },
        302889: function (a, b, c) {
          window.inkHostRegistry[c].onFlagChanged(a, !!b);
        },
        302945: function (a) {
          window.inkHostRegistry[a].onCameraChanged();
        },
        302995: function (a, b) {
          window.inkHostRegistry[b].onCameraMovementStateChanged(!!a);
        },
        303062: function (a, b) {
          window.inkHostRegistry[b].onBlockingStateChanged(!!a);
        },
        303123: function (a) {
          window.inkHostRegistry[a].onInvisibleLayerActionPrevented();
        },
        303189: function (a, b, c) {
          window.inkHostRegistry[c].onPdfLoadSuccess(new Uint8Array(K.subarray(a, a + b)));
        },
        303285: function (a) {
          window.inkHostRegistry[a].onPdfLoadPasswordRequired();
        },
        303345: function (a, b, c) {
          window.inkHostRegistry[c].onPdfLoadFailure(T(a, b));
        },
        303416: function (a, b, c, d) {
          window.inkHostRegistry[d].onPdfSaveSuccess(a, new Uint8Array(K.subarray(b, b + c)));
        },
        303516: function (a, b, c, d) {
          window.inkHostRegistry[d].onPdfSaveFailure(a, T(b, c));
        },
        303591: function (a, b) {
          window.inkHostRegistry[a].onPdfUnsupportedFeature(b);
        },
        303651: function (a) {
          window.inkHostRegistry[a].onPdfFormChanged();
        },
        303702: function (a, b, c, d, e, f, g, l) {
          window.inkHostRegistry[a].onPdfFormFieldFocused(b, new Uint8Array(K.subarray(c, c + d)), e, !!f, T(g, l));
        },
        303839: function (a, b, c) {
          window.inkHostRegistry[c].onPdfFormTextFieldFocusChanged(!0, T(a, b));
        },
        303931: function (a) {
          window.inkHostRegistry[a].onPdfFormTextFieldFocusChanged(!1);
        },
        304001: function (a, b) {
          window.inkHostRegistry[b].onPendingTexturesChanged(!!a);
        },
        304064: function (a, b, c) {
          if (h.canvas) {
            var d = h.canvas.getContext("webgl");
            if (d) {
              var e = d.getExtension("WEBGL_debug_renderer_info");
              e && (ea(d.getParameter(e.UNMASKED_RENDERER_WEBGL), K, a, c), ea(d.getParameter(e.UNMASKED_VENDOR_WEBGL), K, b, c));
            }
          }
        },
        304350: function () {
          return !!h.ctx;
        },
        304372: function () {
          debugger;
        },
        304385: function () {
          return "undefined" !== typeof wasmOffsetConverter;
        }
      },
      Ab = function (a) {
        for (; 0 < a.length; ) a.shift()(h);
      },
      qc = h.noExitRuntime || !0,
      Db = function (a, b, c) {
        c = b + c;
        for (var d = ""; !(b >= c); ) {
          var e = a[b++];
          if (!e) break;
          if (e & 128) {
            var f = a[b++] & 63;
            if (192 == (e & 224)) d += String.fromCharCode(((e & 31) << 6) | f);
            else {
              var g = a[b++] & 63;
              e = 224 == (e & 240) ? ((e & 15) << 12) | (f << 6) | g : ((e & 7) << 18) | (f << 12) | (g << 6) | (a[b++] & 63);
              65536 > e ? (d += String.fromCharCode(e)) : ((e -= 65536), (d += String.fromCharCode(55296 | (e >> 10), 56320 | (e & 1023))));
            }
          } else d += String.fromCharCode(e);
        }
        return d;
      },
      T = function (a, b) {
        return a ? Db(K, a, b) : "";
      },
      lb = {},
      Ia = function (a) {
        for (; a.length; ) {
          var b = a.pop(),
            c = a.pop();
          c(b);
        }
      },
      wa = {},
      sa = {},
      cb = {},
      mb = function (a) {
        throw new se(a);
      },
      ma = function (a, b, c) {
        function d(l) {
          l = c(l);
          l.length !== a.length && mb("Mismatched type converter count");
          for (var n = 0; n < a.length; ++n) aa(a[n], l[n]);
        }
        a.forEach(function (l) {
          cb[l] = b;
        });
        var e = Array(b.length),
          f = [],
          g = 0;
        b.forEach(function (l, n) {
          sa.hasOwnProperty(l)
            ? (e[n] = sa[l])
            : (f.push(l),
              wa.hasOwnProperty(l) || (wa[l] = []),
              wa[l].push(function () {
                e[n] = sa[l];
                ++g;
                g === f.length && d(e);
              }));
        });
        0 === f.length && d(e);
      },
      te = function (a) {
        var b = lb[a];
        delete lb[a];
        var c = b.elements,
          d = c.length,
          e = c
            .map(function (l) {
              return l.getterReturnType;
            })
            .concat(
              c.map(function (l) {
                return l.setterArgumentType;
              })
            ),
          f = b.rawConstructor,
          g = b.rawDestructor;
        ma([a], e, function (l) {
          c.forEach(function (n, v) {
            var t = l[v],
              F = n.getter,
              M = n.getterContext,
              p = l[v + d],
              y = n.setter,
              B = n.setterContext;
            n.read = function (N) {
              return t.fromWireType(F(M, N));
            };
            n.write = function (N, C) {
              var S = [];
              y(B, N, p.toWireType(S, C));
              Ia(S);
            };
          });
          return [
            {
              name: b.name,
              fromWireType: function (n) {
                for (var v = Array(d), t = 0; t < d; ++t) v[t] = c[t].read(n);
                g(n);
                return v;
              },
              toWireType: function (n, v) {
                if (d !== v.length)
                  throw new TypeError("Incorrect number of tuple elements for " + b.name + ": expected=" + d + ", actual=" + v.length);
                for (var t = f(), F = 0; F < d; ++F) c[F].write(t, v[F]);
                null !== n && n.push(g, t);
                return t;
              },
              argPackAdvance: la,
              readValueFromPointer: da,
              destructorFunction: g
            }
          ];
        });
      },
      nb = {},
      ue = function (a) {
        var b = nb[a];
        delete nb[a];
        var c = b.rawConstructor,
          d = b.rawDestructor,
          e = b.fields,
          f = e
            .map(function (g) {
              return g.getterReturnType;
            })
            .concat(
              e.map(function (g) {
                return g.setterArgumentType;
              })
            );
        ma([a], f, function (g) {
          var l = {};
          e.forEach(function (n, v) {
            var t = n.fieldName,
              F = g[v],
              M = n.getter,
              p = n.getterContext,
              y = g[v + e.length],
              B = n.setter,
              N = n.setterContext;
            l[t] = {
              read: function (C) {
                return F.fromWireType(M(p, C));
              },
              write: function (C, S) {
                var fa = [];
                B(N, C, y.toWireType(fa, S));
                Ia(fa);
              }
            };
          });
          return [
            {
              name: b.name,
              fromWireType: function (n) {
                var v = {},
                  t;
                for (t in l) v[t] = l[t].read(n);
                d(n);
                return v;
              },
              toWireType: function (n, v) {
                for (var t in l) if (!(t in v)) throw new TypeError('Missing field: "' + t + '"');
                var F = c();
                for (t in l) l[t].write(F, v[t]);
                null !== n && n.push(d, F);
                return F;
              },
              argPackAdvance: la,
              readValueFromPointer: da,
              destructorFunction: d
            }
          ];
        });
      },
      ve = function () {},
      we = function () {
        for (var a = Array(256), b = 0; 256 > b; ++b) a[b] = String.fromCharCode(b);
        rc = a;
      },
      rc,
      Y = function (a) {
        for (var b = ""; K[a]; ) b += rc[K[a++]];
        return b;
      },
      Q = function (a) {
        throw new Na(a);
      },
      la = 8,
      xe = function (a, b, c, d) {
        b = Y(b);
        aa(a, {
          name: b,
          fromWireType: function (e) {
            return !!e;
          },
          toWireType: function (e, f) {
            return f ? c : d;
          },
          argPackAdvance: la,
          readValueFromPointer: function (e) {
            return this.fromWireType(K[e]);
          },
          destructorFunction: null
        });
      },
      Eb = function (a) {
        Q(a.$$.ptrType.registeredClass.name + " instance already deleted");
      },
      Fb = !1,
      sc = function () {},
      tc = function (a) {
        --a.count.value;
        var b = 0 === a.count.value;
        b && (a.smartPtr ? a.smartPtrType.rawDestructor(a.smartPtr) : a.ptrType.registeredClass.rawDestructor(a.ptr));
      },
      Xb = function (a, b, c) {
        if (b === c) return a;
        if (void 0 === c.baseClass) return null;
        a = Xb(a, b, c.baseClass);
        return null === a ? null : c.downcast(a);
      },
      Wb = {},
      ye = function () {
        return Object.keys(Oa).length;
      },
      ze = function () {
        var a = [],
          b;
        for (b in Oa) Oa.hasOwnProperty(b) && a.push(Oa[b]);
        return a;
      },
      Pa = [],
      Gb = function () {
        for (; Pa.length; ) {
          var a = Pa.pop();
          a.$$.deleteScheduled = !1;
          a["delete"]();
        }
      },
      Qa,
      Ae = function (a) {
        Qa = a;
        Pa.length && Qa && Qa(Gb);
      },
      Oa = {},
      bd = function (a, b) {
        for (void 0 === b && Q("ptr should not be undefined"); a.baseClass; ) (b = a.upcast(b)), (a = a.baseClass);
        return Oa[b];
      },
      db = function (a, b) {
        (b.ptrType && b.ptr) || mb("makeClassHandle requires ptr and ptrType");
        var c = !!b.smartPtrType,
          d = !!b.smartPtr;
        c !== d && mb("Both smartPtrType and smartPtr must be specified");
        b.count = { value: 1 };
        return Ra(Object.create(a, { $$: { value: b } }));
      },
      Ra = function (a) {
        if ("undefined" === typeof FinalizationRegistry)
          return (
            (Ra = function (b) {
              return b;
            }),
            a
          );
        Fb = new FinalizationRegistry(function (b) {
          tc(b.$$);
        });
        Ra = function (b) {
          var c = b.$$,
            d = !!c.smartPtr;
          d && ((c = { $$: c }), Fb.register(b, c, b));
          return b;
        };
        sc = function (b) {
          return Fb.unregister(b);
        };
        return Ra(a);
      },
      Be = function () {
        var a = {};
        Object.assign(
          eb.prototype,
          ((a.isAliasOf = function (b) {
            if (!(this instanceof eb && b instanceof eb)) return !1;
            var c = this.$$.ptrType.registeredClass,
              d = this.$$.ptr,
              e = b.$$.ptrType.registeredClass;
            for (b = b.$$.ptr; c.baseClass; ) (d = c.upcast(d)), (c = c.baseClass);
            for (; e.baseClass; ) (b = e.upcast(b)), (e = e.baseClass);
            return c === e && d === b;
          }),
          (a.clone = function () {
            this.$$.ptr || Eb(this);
            if (this.$$.preservePointerOnDelete) return (this.$$.count.value += 1), this;
            var b = Ra,
              c = Object,
              d = c.create,
              e = Object.getPrototypeOf(this);
            var f = this.$$;
            f = {
              count: f.count,
              deleteScheduled: f.deleteScheduled,
              preservePointerOnDelete: f.preservePointerOnDelete,
              ptr: f.ptr,
              ptrType: f.ptrType,
              smartPtr: f.smartPtr,
              smartPtrType: f.smartPtrType
            };
            b = b(d.call(c, e, { $$: { value: f } }));
            b.$$.count.value += 1;
            b.$$.deleteScheduled = !1;
            return b;
          }),
          (a["delete"] = function () {
            this.$$.ptr || Eb(this);
            this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Q("Object already scheduled for deletion");
            sc(this);
            tc(this.$$);
            this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
          }),
          (a.isDeleted = function () {
            return !this.$$.ptr;
          }),
          (a.deleteLater = function () {
            this.$$.ptr || Eb(this);
            this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Q("Object already scheduled for deletion");
            Pa.push(this);
            1 === Pa.length && Qa && Qa(Gb);
            this.$$.deleteScheduled = !0;
            return this;
          }),
          a)
        );
      },
      Yb = function (a) {
        if (void 0 === a) return "_unknown";
        a = a.replace(/[^a-zA-Z0-9_]/g, "$");
        var b = a.charCodeAt(0);
        return 48 <= b && 57 >= b ? "_" + a : a;
      },
      uc = function (a, b, c) {
        if (void 0 === a[b].overloadTable) {
          var d = a[b];
          a[b] = function () {
            a[b].overloadTable.hasOwnProperty(arguments.length) ||
              Q(
                "Function '" +
                  c +
                  "' called with an invalid number of arguments (" +
                  arguments.length +
                  ") - expects one of (" +
                  a[b].overloadTable +
                  ")!"
              );
            return a[b].overloadTable[arguments.length].apply(this, arguments);
          };
          a[b].overloadTable = [];
          a[b].overloadTable[d.argCount] = d;
        }
      },
      Hb = function (a, b, c) {
        h.hasOwnProperty(a)
          ? ((void 0 === c || (void 0 !== h[a].overloadTable && void 0 !== h[a].overloadTable[c])) &&
              Q("Cannot register public name '" + a + "' twice"),
            uc(h, a, a),
            h.hasOwnProperty(c) && Q("Cannot register multiple overloads of a function with the same number of arguments (" + c + ")!"),
            (h[a].overloadTable[c] = b))
          : ((h[a] = b), void 0 !== c && (h[a].numArguments = c));
      },
      fb = function (a, b, c) {
        for (; b !== c; )
          b.upcast || Q("Expected null or instance of " + c.name + ", got an instance of " + b.name), (a = b.upcast(a)), (b = b.baseClass);
        return a;
      },
      Ce = function () {
        var a = {};
        Object.assign(
          gb.prototype,
          ((a.getPointee = function (b) {
            this.rawGetPointee && (b = this.rawGetPointee(b));
            return b;
          }),
          (a.destructor = function (b) {
            this.rawDestructor && this.rawDestructor(b);
          }),
          (a.argPackAdvance = la),
          (a.readValueFromPointer = Zb),
          (a.deleteObject = function (b) {
            if (null !== b) b["delete"]();
          }),
          (a.fromWireType = ad),
          a)
        );
      },
      vc = function (a, b, c) {
        h.hasOwnProperty(a) || mb("Replacing nonexistant public symbol");
        void 0 !== h[a].overloadTable && void 0 !== c ? (h[a].overloadTable[c] = b) : ((h[a] = b), (h[a].argCount = c));
      },
      De = function (a, b) {
        var c = [];
        return function () {
          c.length = 0;
          Object.assign(c, arguments);
          var d = b;
          var e = h["dynCall_" + a];
          return (d = c && c.length ? e.apply(null, [d].concat(c)) : e.call(null, d));
        };
      },
      Z = function (a, b) {
        a = Y(a);
        var c = De(a, b);
        "function" != typeof c && Q("unknown function pointer with signature " + a + ": " + b);
        return c;
      },
      Ee = function (a, b) {
        var c = wb(b, function (d) {
          this.name = b;
          this.message = d;
          d = Error(d).stack;
          void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
        });
        c.prototype = Object.create(a.prototype);
        c.prototype.constructor = c;
        c.prototype.toString = function () {
          return void 0 === this.message ? this.name : this.name + ": " + this.message;
        };
        return c;
      },
      xc = function (a) {
        a = wc(a);
        var b = Y(a);
        na(a);
        return b;
      },
      ya = function (a, b) {
        function c(f) {
          e[f] || sa[f] || (cb[f] ? cb[f].forEach(c) : (d.push(f), (e[f] = !0)));
        }
        var d = [],
          e = {};
        b.forEach(c);
        throw new Fe(a + ": " + d.map(xc).join([", "]));
      },
      Ge = function (a, b, c, d, e, f, g, l, n, v, t, F, M) {
        t = Y(t);
        f = Z(e, f);
        l && (l = Z(g, l));
        v && (v = Z(n, v));
        M = Z(F, M);
        var p = Yb(t);
        Hb(p, function () {
          ya("Cannot construct " + t + " due to unbound types", [d]);
        });
        ma([a, b, c], d ? [d] : [], function (y) {
          y = y[0];
          if (d) {
            var B = y.registeredClass;
            var N = B.instancePrototype;
          } else N = eb.prototype;
          y = wb(p, function () {
            if (Object.getPrototypeOf(this) !== C) throw new Na("Use 'new' to construct " + t);
            if (void 0 === S.constructor_body) throw new Na(t + " has no accessible constructor");
            var yc = S.constructor_body[arguments.length];
            if (void 0 === yc)
              throw new Na(
                "Tried to invoke ctor of " +
                  t +
                  " with invalid number of parameters (" +
                  arguments.length +
                  ") - expected (" +
                  Object.keys(S.constructor_body).toString() +
                  ") parameters instead!"
              );
            return yc.apply(this, arguments);
          });
          var C = Object.create(N, { constructor: { value: y } });
          y.prototype = C;
          var S = new cd(t, y, C, M, B, f, l, v);
          S.baseClass &&
            (void 0 === S.baseClass.__derivedClasses && (S.baseClass.__derivedClasses = []), S.baseClass.__derivedClasses.push(S));
          B = new gb(t, S, !0, !1, !1);
          N = new gb(t + "*", S, !1, !1, !1);
          var fa = new gb(t + " const*", S, !1, !0, !1);
          Wb[a] = { pointerType: N, constPointerType: fa };
          vc(p, y);
          return [B, N, fa];
        });
      },
      Ib = function (a, b) {
        for (var c = [], d = 0; d < a; d++) c.push(O[(b + 4 * d) >> 2]);
        return c;
      },
      He = function (a, b, c, d, e, f) {
        var g = Ib(b, c);
        e = Z(d, e);
        ma([], [a], function (l) {
          l = l[0];
          var n = "constructor " + l.name;
          void 0 === l.registeredClass.constructor_body && (l.registeredClass.constructor_body = []);
          if (void 0 !== l.registeredClass.constructor_body[b - 1])
            throw new Na(
              "Cannot register multiple constructors with identical number of parameters (" +
                (b - 1) +
                ") for class '" +
                l.name +
                "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
            );
          l.registeredClass.constructor_body[b - 1] = function () {
            ya("Cannot construct " + l.name + " due to unbound types", g);
          };
          ma([], g, function (v) {
            v.splice(1, 0, null);
            l.registeredClass.constructor_body[b - 1] = yb(n, v, null, e, f);
            return [];
          });
          return [];
        });
      },
      zc = function (a) {
        a = a.trim();
        var b = a.indexOf("(");
        return -1 !== b ? a.substr(0, b) : a;
      },
      Ie = function (a, b, c, d, e, f, g, l, n) {
        var v = Ib(c, d);
        b = Y(b);
        b = zc(b);
        f = Z(e, f);
        ma([], [a], function (t) {
          function F() {
            ya("Cannot call " + M + " due to unbound types", v);
          }
          t = t[0];
          var M = t.name + "." + b;
          b.startsWith("@@") && (b = Symbol[b.substring(2)]);
          l && t.registeredClass.pureVirtualFunctions.push(b);
          var p = t.registeredClass.instancePrototype,
            y = p[b];
          void 0 === y || (void 0 === y.overloadTable && y.className !== t.name && y.argCount === c - 2)
            ? ((F.argCount = c - 2), (F.className = t.name), (p[b] = F))
            : (uc(p, b, M), (p[b].overloadTable[c - 2] = F));
          ma([], v, function (B) {
            B = yb(M, B, t, f, g, n);
            void 0 === p[b].overloadTable ? ((B.argCount = c - 2), (p[b] = B)) : (p[b].overloadTable[c - 2] = B);
            return [];
          });
          return [];
        });
      },
      Ac = function (a, b, c) {
        a instanceof Object || Q(c + ' with invalid "this": ' + a);
        a instanceof b.registeredClass.constructor || Q(c + ' incompatible with "this" of type ' + a.constructor.name);
        a.$$.ptr || Q("cannot call emscripten binding method " + c + " on deleted object");
        return fb(a.$$.ptr, a.$$.ptrType.registeredClass, b.registeredClass);
      },
      Je = function (a, b, c, d, e, f, g, l, n, v) {
        b = Y(b);
        e = Z(d, e);
        ma([], [a], function (t) {
          t = t[0];
          var F = t.name + "." + b,
            M = {
              get: function () {
                ya("Cannot access " + F + " due to unbound types", [c, g]);
              },
              enumerable: !0,
              configurable: !0
            };
          M.set = n
            ? function () {
                return ya("Cannot access " + F + " due to unbound types", [c, g]);
              }
            : function () {
                return Q(F + " is a read-only property");
              };
          Object.defineProperty(t.registeredClass.instancePrototype, b, M);
          ma([], n ? [c, g] : [c], function (p) {
            var y = p[0],
              B = {
                get: function () {
                  var C = Ac(this, t, F + " getter");
                  return y.fromWireType(e(f, C));
                },
                enumerable: !0
              };
            if (n) {
              n = Z(l, n);
              var N = p[1];
              B.set = function (C) {
                var S = Ac(this, t, F + " setter"),
                  fa = [];
                n(v, S, N.toWireType(fa, C));
                Ia(fa);
              };
            }
            Object.defineProperty(t.registeredClass.instancePrototype, b, B);
            return [];
          });
          return [];
        });
      },
      ha = new $b(),
      Jb = function (a) {
        a >= ha.reserved && 0 === --ha.get(a).refcount && ha.free(a);
      },
      Ke = function () {
        for (var a = 0, b = ha.reserved; b < ha.allocated.length; ++b) void 0 !== ha.allocated[b] && ++a;
        return a;
      },
      X = {
        toValue: function (a) {
          a || Q("Cannot use deleted val. handle = " + a);
          return ha.get(a).value;
        },
        toHandle: function (a) {
          switch (a) {
            case void 0:
              return 1;
            case null:
              return 2;
            case !0:
              return 3;
            case !1:
              return 4;
            default:
              return ha.allocate({ refcount: 1, value: a });
          }
        }
      },
      Le = function (a, b) {
        b = Y(b);
        aa(a, {
          name: b,
          fromWireType: function (c) {
            var d = X.toValue(c);
            Jb(c);
            return d;
          },
          toWireType: function (c, d) {
            return X.toHandle(d);
          },
          argPackAdvance: la,
          readValueFromPointer: da,
          destructorFunction: null
        });
      },
      Me = function (a, b, c) {
        switch (b) {
          case 1:
            return c
              ? function (d) {
                  return this.fromWireType(V[d >> 0]);
                }
              : function (d) {
                  return this.fromWireType(K[d >> 0]);
                };
          case 2:
            return c
              ? function (d) {
                  return this.fromWireType(qa[d >> 1]);
                }
              : function (d) {
                  return this.fromWireType(Ca[d >> 1]);
                };
          case 4:
            return c
              ? function (d) {
                  return this.fromWireType(r[d >> 2]);
                }
              : function (d) {
                  return this.fromWireType(O[d >> 2]);
                };
          default:
            throw new TypeError("invalid integer width (" + b + "): " + a);
        }
      },
      Ne = function (a, b, c, d) {
        function e() {}
        b = Y(b);
        e.values = {};
        aa(a, {
          name: b,
          constructor: e,
          fromWireType: function (f) {
            return this.constructor.values[f];
          },
          toWireType: function (f, g) {
            return g.value;
          },
          argPackAdvance: la,
          readValueFromPointer: Me(b, c, d),
          destructorFunction: null
        });
        Hb(b, e);
      },
      Sa = function (a, b) {
        var c = sa[a];
        void 0 === c && Q(b + " has unknown type " + xc(a));
        return c;
      },
      Oe = function (a, b, c) {
        var d = Sa(a, "enum");
        b = Y(b);
        a = d.constructor;
        d = Object.create(d.constructor.prototype, { value: { value: c }, constructor: { value: wb(d.name + "_" + b, function () {}) } });
        a.values[c] = d;
        a[b] = d;
      },
      xb = function (a) {
        if (null === a) return "null";
        var b = typeof a;
        return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
      },
      Pe = function (a, b) {
        switch (b) {
          case 4:
            return function (c) {
              return this.fromWireType(G[c >> 2]);
            };
          case 8:
            return function (c) {
              return this.fromWireType(ab[c >> 3]);
            };
          default:
            throw new TypeError("invalid float width (" + b + "): " + a);
        }
      },
      Qe = function (a, b, c) {
        b = Y(b);
        aa(a, {
          name: b,
          fromWireType: function (d) {
            return d;
          },
          toWireType: function (d, e) {
            return e;
          },
          argPackAdvance: la,
          readValueFromPointer: Pe(b, c),
          destructorFunction: null
        });
      },
      Re = function (a, b, c, d, e, f, g) {
        var l = Ib(b, c);
        a = Y(a);
        a = zc(a);
        e = Z(d, e);
        Hb(
          a,
          function () {
            ya("Cannot call " + a + " due to unbound types", l);
          },
          b - 1
        );
        ma([], l, function (n) {
          n = [n[0], null].concat(n.slice(1));
          vc(a, yb(a, n, null, e, f, g), b - 1);
          return [];
        });
      },
      Se = function (a, b, c) {
        switch (b) {
          case 1:
            return c
              ? function (d) {
                  return V[d >> 0];
                }
              : function (d) {
                  return K[d >> 0];
                };
          case 2:
            return c
              ? function (d) {
                  return qa[d >> 1];
                }
              : function (d) {
                  return Ca[d >> 1];
                };
          case 4:
            return c
              ? function (d) {
                  return r[d >> 2];
                }
              : function (d) {
                  return O[d >> 2];
                };
          default:
            throw new TypeError("invalid integer width (" + b + "): " + a);
        }
      },
      Te = function (a, b, c, d, e) {
        b = Y(b);
        -1 === e && (e = 4294967295);
        e = function (l) {
          return l;
        };
        if (0 === d) {
          var f = 32 - 8 * c;
          e = function (l) {
            return (l << f) >>> f;
          };
        }
        var g = b.includes("unsigned");
        g = g
          ? function (l, n) {
              return n >>> 0;
            }
          : function (l, n) {
              return n;
            };
        aa(a, {
          name: b,
          fromWireType: e,
          toWireType: g,
          argPackAdvance: la,
          readValueFromPointer: Se(b, c, 0 !== d),
          destructorFunction: null
        });
      },
      Ue = function (a, b, c) {
        function d(g) {
          var l = O[g >> 2];
          g = O[(g + 4) >> 2];
          return new f(V.buffer, g, l);
        }
        var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
          f = e[b];
        c = Y(c);
        aa(a, { name: c, fromWireType: d, argPackAdvance: la, readValueFromPointer: d }, { ignoreDuplicateRegistrations: !0 });
      },
      ea = function (a, b, c, d) {
        if (!(0 < d)) return 0;
        var e = c;
        d = c + d - 1;
        for (var f = 0; f < a.length; ++f) {
          var g = a.charCodeAt(f);
          if (55296 <= g && 57343 >= g) {
            var l = a.charCodeAt(++f);
            g = (65536 + ((g & 1023) << 10)) | (l & 1023);
          }
          if (127 >= g) {
            if (c >= d) break;
            b[c++] = g;
          } else {
            if (2047 >= g) {
              if (c + 1 >= d) break;
              b[c++] = 192 | (g >> 6);
            } else {
              if (65535 >= g) {
                if (c + 2 >= d) break;
                b[c++] = 224 | (g >> 12);
              } else {
                if (c + 3 >= d) break;
                b[c++] = 240 | (g >> 18);
                b[c++] = 128 | ((g >> 12) & 63);
              }
              b[c++] = 128 | ((g >> 6) & 63);
            }
            b[c++] = 128 | (g & 63);
          }
        }
        b[c] = 0;
        return c - e;
      },
      hb = function (a) {
        for (var b = 0, c = 0; c < a.length; ++c) {
          var d = a.charCodeAt(c);
          127 >= d ? b++ : 2047 >= d ? (b += 2) : 55296 <= d && 57343 >= d ? ((b += 4), ++c) : (b += 3);
        }
        return b;
      },
      Ve = function (a, b) {
        b = Y(b);
        var c = "std::string" === b,
          d = {};
        aa(
          a,
          ((d.name = b),
          (d.fromWireType = function (e) {
            var f = O[e >> 2],
              g = e + 4;
            if (c)
              for (var l = g, n = 0; n <= f; ++n) {
                var v = g + n;
                if (n == f || 0 == K[v]) {
                  var t = v - l;
                  l = T(l, t);
                  if (void 0 === F) var F = l;
                  else (F += String.fromCharCode(0)), (F += l);
                  l = v + 1;
                }
              }
            else {
              F = Array(f);
              for (n = 0; n < f; ++n) F[n] = String.fromCharCode(K[g + n]);
              F = F.join("");
            }
            na(e);
            return F;
          }),
          (d.toWireType = function (e, f) {
            f instanceof ArrayBuffer && (f = new Uint8Array(f));
            var g = "string" == typeof f;
            g ||
              f instanceof Uint8Array ||
              f instanceof Uint8ClampedArray ||
              f instanceof Int8Array ||
              Q("Cannot pass non-string to std::string");
            var l = c && g ? hb(f) : f.length;
            var n = Ma(4 + l + 1),
              v = n + 4;
            O[n >> 2] = l;
            if (c && g) ea(f, K, v, l + 1);
            else if (g)
              for (g = 0; g < l; ++g) {
                var t = f.charCodeAt(g);
                255 < t && (na(v), Q("String has UTF-16 code units that do not fit in 8 bits"));
                K[v + g] = t;
              }
            else for (g = 0; g < l; ++g) K[v + g] = f[g];
            null !== e && e.push(na, n);
            return n;
          }),
          (d.argPackAdvance = la),
          (d.readValueFromPointer = Zb),
          (d.destructorFunction = function (e) {
            na(e);
          }),
          d)
        );
      },
      We = function (a, b) {
        for (var c = "", d = 0; !(d >= b / 2); ++d) {
          var e = qa[(a + 2 * d) >> 1];
          if (0 == e) break;
          c += String.fromCharCode(e);
        }
        return c;
      },
      Xe = function (a, b, c) {
        void 0 === c && (c = 2147483647);
        if (2 > c) return 0;
        c -= 2;
        var d = b;
        c = c < 2 * a.length ? c / 2 : a.length;
        for (var e = 0; e < c; ++e) {
          var f = a.charCodeAt(e);
          qa[b >> 1] = f;
          b += 2;
        }
        qa[b >> 1] = 0;
        return b - d;
      },
      Ye = function (a) {
        return 2 * a.length;
      },
      Ze = function (a, b) {
        for (var c = 0, d = ""; !(c >= b / 4); ) {
          var e = r[(a + 4 * c) >> 2];
          if (0 == e) break;
          ++c;
          65536 <= e ? ((e -= 65536), (d += String.fromCharCode(55296 | (e >> 10), 56320 | (e & 1023)))) : (d += String.fromCharCode(e));
        }
        return d;
      },
      $e = function (a, b, c) {
        void 0 === c && (c = 2147483647);
        if (4 > c) return 0;
        var d = b;
        c = d + c - 4;
        for (var e = 0; e < a.length; ++e) {
          var f = a.charCodeAt(e);
          if (55296 <= f && 57343 >= f) {
            var g = a.charCodeAt(++e);
            f = (65536 + ((f & 1023) << 10)) | (g & 1023);
          }
          r[b >> 2] = f;
          b += 4;
          if (b + 4 > c) break;
        }
        r[b >> 2] = 0;
        return b - d;
      },
      af = function (a) {
        for (var b = 0, c = 0; c < a.length; ++c) {
          var d = a.charCodeAt(c);
          55296 <= d && 57343 >= d && ++c;
          b += 4;
        }
        return b;
      },
      bf = function (a, b, c) {
        c = Y(c);
        if (2 === b) {
          var d = We;
          var e = Xe;
          var f = Ye;
          var g = function () {
            return Ca;
          };
          var l = 1;
        } else
          4 === b &&
            ((d = Ze),
            (e = $e),
            (f = af),
            (g = function () {
              return O;
            }),
            (l = 2));
        aa(a, {
          name: c,
          fromWireType: function (n) {
            for (var v = O[n >> 2], t = g(), F, M = n + 4, p = 0; p <= v; ++p) {
              var y = n + 4 + p * b;
              if (p == v || 0 == t[y >> l]) {
                var B = y - M;
                M = d(M, B);
                void 0 === F ? (F = M) : ((F += String.fromCharCode(0)), (F += M));
                M = y + b;
              }
            }
            na(n);
            return F;
          },
          toWireType: function (n, v) {
            "string" != typeof v && Q("Cannot pass non-string to C++ string type " + c);
            var t = f(v),
              F = Ma(4 + t + b);
            O[F >> 2] = t >> l;
            e(v, F + 4, t + b);
            null !== n && n.push(na, F);
            return F;
          },
          argPackAdvance: la,
          readValueFromPointer: da,
          destructorFunction: function (n) {
            na(n);
          }
        });
      },
      cf = function (a, b, c, d, e, f) {
        lb[a] = { name: Y(b), rawConstructor: Z(c, d), rawDestructor: Z(e, f), elements: [] };
      },
      df = function (a, b, c, d, e, f, g, l, n) {
        lb[a].elements.push({
          getterReturnType: b,
          getter: Z(c, d),
          getterContext: e,
          setterArgumentType: f,
          setter: Z(g, l),
          setterContext: n
        });
      },
      ef = function (a, b, c, d, e, f) {
        nb[a] = { name: Y(b), rawConstructor: Z(c, d), rawDestructor: Z(e, f), fields: [] };
      },
      ff = function (a, b, c, d, e, f, g, l, n, v) {
        nb[a].fields.push({
          fieldName: Y(b),
          getterReturnType: c,
          getter: Z(d, e),
          getterContext: f,
          setterArgumentType: g,
          setter: Z(l, n),
          setterContext: v
        });
      },
      gf = function (a, b) {
        b = Y(b);
        aa(a, { isVoid: !0, name: b, argPackAdvance: 0, fromWireType: function () {}, toWireType: function () {} });
      },
      hf = function () {
        return !0;
      },
      jf = function () {
        throw Infinity;
      },
      kf = function (a, b, c) {
        a = X.toValue(a);
        b = Sa(b, "emval::as");
        var d = [],
          e = X.toHandle(d);
        O[c >> 2] = e;
        return b.toWireType(d, a);
      },
      Bc = function (a, b) {
        for (var c = Array(a), d = 0; d < a; ++d) c[d] = Sa(O[(b + 4 * d) >> 2], "parameter " + d);
        return c;
      },
      lf = function (a, b, c, d) {
        a = X.toValue(a);
        c = Bc(b, c);
        for (var e = Array(b), f = 0; f < b; ++f) {
          var g = c[f];
          e[f] = g.readValueFromPointer(d);
          d += g.argPackAdvance;
        }
        a = a.apply(void 0, e);
        return X.toHandle(a);
      },
      mf = {},
      Kb = function (a) {
        var b = mf[a];
        return void 0 === b ? Y(a) : b;
      },
      Lb = [],
      nf = function (a, b, c, d, e) {
        a = Lb[a];
        b = X.toValue(b);
        c = Kb(c);
        var f = [];
        a = a(b, c, f, e);
        f.length && (O[d >> 2] = X.toHandle(f));
        return a;
      },
      Cc = function () {
        function a(b) {
          b.$$$embind_global$$$ = b;
          var c = "object" == typeof $$$embind_global$$$ && b.$$$embind_global$$$ == b;
          c || delete b.$$$embind_global$$$;
          return c;
        }
        if ("object" == typeof globalThis) return globalThis;
        if ("object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
        "object" == typeof global && a(global)
          ? ($$$embind_global$$$ = global)
          : "object" == typeof self && a(self) && ($$$embind_global$$$ = self);
        if ("object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
        throw Error("unable to get global object.");
      },
      of = function (a) {
        if (0 === a) return X.toHandle(Cc());
        a = Kb(a);
        return X.toHandle(Cc()[a]);
      },
      pf = function (a) {
        var b = Lb.length;
        Lb.push(a);
        return b;
      },
      qf = function (a, b) {
        var c = Bc(a, b),
          d = c.shift();
        a--;
        var e = Array(a);
        b = function (f, g, l, n) {
          for (var v = 0, t = 0; t < a; ++t) (e[t] = c[t].readValueFromPointer(n + v)), (v += c[t].argPackAdvance);
          f = f[g].apply(f, e);
          for (t = 0; t < a; ++t) c[t].deleteObject && c[t].deleteObject(e[t]);
          return d.toWireType(l, f);
        };
        return pf(b);
      },
      rf = function (a, b) {
        a = X.toValue(a);
        b = X.toValue(b);
        return X.toHandle(a[b]);
      },
      sf = function (a) {
        4 < a && (ha.get(a).refcount += 1);
      },
      tf = function (a, b) {
        a = X.toValue(a);
        b = X.toValue(b);
        return a instanceof b;
      },
      uf = function (a) {
        var b = Array(a + 1);
        return function (c, d, e) {
          b[0] = c;
          for (var f = 0; f < a; ++f) {
            var g = Sa(O[(d + 4 * f) >> 2], "parameter " + f);
            b[f + 1] = g.readValueFromPointer(e);
            e += g.argPackAdvance;
          }
          c = new (c.bind.apply(c, b))();
          return X.toHandle(c);
        };
      },
      Dc = {},
      vf = function (a, b, c, d) {
        a = X.toValue(a);
        var e = Dc[b];
        e || ((e = uf(b)), (Dc[b] = e));
        return e(a, c, d);
      },
      wf = function (a) {
        return X.toHandle(Kb(a));
      },
      xf = function (a) {
        var b = X.toValue(a);
        Ia(b);
        Jb(a);
      },
      yf = function (a, b) {
        a = Sa(a, "_emval_take_value");
        a = a.readValueFromPointer(b);
        return X.toHandle(a);
      },
      zf = function () {
        E("");
      },
      Nb = function (a, b) {
        u.mainLoop.timingMode = a;
        u.mainLoop.timingValue = b;
        if (!u.mainLoop.func) return 1;
        u.mainLoop.running || (u.mainLoop.running = !0);
        if (0 == a)
          (u.mainLoop.scheduler = function () {
            var d = Math.max(0, u.mainLoop.tickStartTime + b - Mb()) | 0;
            setTimeout(u.mainLoop.runner, d);
          }),
            (u.mainLoop.method = "timeout");
        else if (1 == a)
          (u.mainLoop.scheduler = function () {
            u.requestAnimationFrame(u.mainLoop.runner);
          }),
            (u.mainLoop.method = "rAF");
        else if (2 == a) {
          if ("undefined" == typeof setImmediate) {
            var c = [];
            a = function (d) {
              if ("setimmediate" === d.data || "setimmediate" === d.data.target) d.stopPropagation(), c.shift()();
            };
            addEventListener("message", a, !0);
            setImmediate = function (d) {
              c.push(d);
              va
                ? (void 0 === h.setImmediates && (h.setImmediates = []), h.setImmediates.push(d), postMessage({ target: "setimmediate" }))
                : postMessage("setimmediate", "*");
            };
          }
          u.mainLoop.scheduler = function () {
            setImmediate(u.mainLoop.runner);
          };
          u.mainLoop.method = "immediate";
        }
        return 0;
      };
    var Mb = function () {
      return performance.now();
    };
    var Af = function (a, b, c, d, e) {
        u.mainLoop.func &&
          E(
            "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
          );
        u.mainLoop.func = a;
        u.mainLoop.arg = d;
        var f = u.mainLoop.currentlyRunningMainloop;
        u.mainLoop.running = !1;
        u.mainLoop.runner = function () {
          if (!ua)
            if (0 < u.mainLoop.queue.length) {
              var g = u.mainLoop.queue.shift();
              g.func(g.arg);
              if (u.mainLoop.remainingBlockers) {
                var l = u.mainLoop.remainingBlockers,
                  n = 0 == l % 1 ? l - 1 : Math.floor(l);
                g.counted ? (u.mainLoop.remainingBlockers = n) : ((n += 0.5), (u.mainLoop.remainingBlockers = (8 * l + n) / 9));
              }
              u.mainLoop.updateStatus();
              f < u.mainLoop.currentlyRunningMainloop || setTimeout(u.mainLoop.runner, 0);
            } else
              f < u.mainLoop.currentlyRunningMainloop ||
                ((u.mainLoop.currentFrameNumber = (u.mainLoop.currentFrameNumber + 1) | 0),
                1 == u.mainLoop.timingMode && 1 < u.mainLoop.timingValue && 0 != u.mainLoop.currentFrameNumber % u.mainLoop.timingValue
                  ? u.mainLoop.scheduler()
                  : (0 == u.mainLoop.timingMode && (u.mainLoop.tickStartTime = Mb()),
                    u.mainLoop.runIter(a),
                    f < u.mainLoop.currentlyRunningMainloop ||
                      ("object" == typeof SDL && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(),
                      u.mainLoop.scheduler())));
        };
        e || (b && 0 < b ? Nb(0, 1e3 / b) : Nb(1, 1), u.mainLoop.scheduler());
        if (c) throw "unwind";
      },
      Ec = function (a) {
        if (a instanceof ta || "unwind" == a) return Da;
        kb(1, a);
      },
      Fc = function (a) {
        Da = a;
        if (!qc) {
          if (h.onExit) h.onExit(a);
          ua = !0;
        }
        kb(a, new ta(a));
      },
      Bf = function (a) {
        Da = a;
        Fc(a);
      },
      Cf = Bf,
      Ob = function (a) {
        if (!ua)
          try {
            if ((a(), !qc))
              try {
                Cf(Da);
              } catch (b) {
                Ec(b);
              }
          } catch (b) {
            Ec(b);
          }
      },
      Gc = function (a, b) {
        return setTimeout(function () {
          Ob(a);
        }, b);
      },
      Ta = function (a) {
        Ta.shown || (Ta.shown = {});
        Ta.shown[a] || ((Ta.shown[a] = 1), Ga && (a = "warning: " + a), ka(a));
      },
      u = {
        mainLoop: {
          running: !1,
          scheduler: null,
          method: "",
          currentlyRunningMainloop: 0,
          func: null,
          arg: 0,
          timingMode: 0,
          timingValue: 0,
          currentFrameNumber: 0,
          queue: [],
          pause: function () {
            u.mainLoop.scheduler = null;
            u.mainLoop.currentlyRunningMainloop++;
          },
          resume: function () {
            u.mainLoop.currentlyRunningMainloop++;
            var a = u.mainLoop.timingMode,
              b = u.mainLoop.timingValue,
              c = u.mainLoop.func;
            u.mainLoop.func = null;
            Af(c, 0, !1, u.mainLoop.arg, !0);
            Nb(a, b);
            u.mainLoop.scheduler();
          },
          updateStatus: function () {
            if (h.setStatus) {
              var a = h.statusMessage || "Please wait...",
                b = u.mainLoop.remainingBlockers,
                c = u.mainLoop.expectedBlockers;
              b ? (b < c ? h.setStatus(a + " (" + (c - b) + "/" + c + ")") : h.setStatus(a)) : h.setStatus("");
            }
          },
          runIter: function (a) {
            if (!ua) {
              if (h.preMainLoop) {
                var b = h.preMainLoop();
                if (!1 === b) return;
              }
              Ob(a);
              h.postMainLoop && h.postMainLoop();
            }
          }
        },
        isFullscreen: !1,
        pointerLock: !1,
        moduleContextCreatedCallbacks: [],
        workers: [],
        init: function () {
          function a() {
            u.pointerLock =
              document.pointerLockElement === h.canvas ||
              document.mozPointerLockElement === h.canvas ||
              document.webkitPointerLockElement === h.canvas ||
              document.msPointerLockElement === h.canvas;
          }
          if (!u.initted) {
            u.initted = !0;
            var b = h.canvas;
            b &&
              ((b.requestPointerLock =
                b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function () {}),
              (b.exitPointerLock =
                document.exitPointerLock ||
                document.mozExitPointerLock ||
                document.webkitExitPointerLock ||
                document.msExitPointerLock ||
                function () {}),
              (b.exitPointerLock = b.exitPointerLock.bind(document)),
              document.addEventListener("pointerlockchange", a, !1),
              document.addEventListener("mozpointerlockchange", a, !1),
              document.addEventListener("webkitpointerlockchange", a, !1),
              document.addEventListener("mspointerlockchange", a, !1),
              h.elementPointerLock &&
                b.addEventListener(
                  "click",
                  function (c) {
                    !u.pointerLock && h.canvas.requestPointerLock && (h.canvas.requestPointerLock(), c.preventDefault());
                  },
                  !1
                ));
          }
        },
        createContext: function (a, b, c, d) {
          if (b && h.ctx && a == h.canvas) return h.ctx;
          var e;
          if (b) {
            var f = { antialias: !1, alpha: !1, majorVersion: "undefined" != typeof WebGL2RenderingContext ? 2 : 1 };
            if (d) for (var g in d) f[g] = d[g];
            if ("undefined" != typeof m && (e = m.createContext(a, f))) var l = m.getContext(e).GLctx;
          } else l = a.getContext("2d");
          if (!l) return null;
          c &&
            (b ||
              ("undefined" != typeof k && E("cannot set in module if GLctx is used, but we are a non-GL context that would replace it")),
            (h.ctx = l),
            b && m.makeContextCurrent(e),
            (h.useWebGL = b),
            u.moduleContextCreatedCallbacks.forEach(function (n) {
              return n();
            }),
            u.init());
          return l;
        },
        destroyContext: function () {},
        fullscreenHandlersInstalled: !1,
        lockPointer: void 0,
        resizeCanvas: void 0,
        requestFullscreen: function (a, b) {
          function c() {
            u.isFullscreen = !1;
            var f = d.parentNode;
            (document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement ||
              document.webkitFullscreenElement ||
              document.webkitCurrentFullScreenElement) === f
              ? ((d.exitFullscreen = u.exitFullscreen),
                u.lockPointer && d.requestPointerLock(),
                (u.isFullscreen = !0),
                u.resizeCanvas ? u.setFullscreenCanvasSize() : u.updateCanvasDimensions(d))
              : (f.parentNode.insertBefore(d, f),
                f.parentNode.removeChild(f),
                u.resizeCanvas ? u.setWindowedCanvasSize() : u.updateCanvasDimensions(d));
            if (h.onFullScreen) h.onFullScreen(u.isFullscreen);
            if (h.onFullscreen) h.onFullscreen(u.isFullscreen);
          }
          u.lockPointer = a;
          u.resizeCanvas = b;
          "undefined" == typeof u.lockPointer && (u.lockPointer = !0);
          "undefined" == typeof u.resizeCanvas && (u.resizeCanvas = !1);
          var d = h.canvas;
          u.fullscreenHandlersInstalled ||
            ((u.fullscreenHandlersInstalled = !0),
            document.addEventListener("fullscreenchange", c, !1),
            document.addEventListener("mozfullscreenchange", c, !1),
            document.addEventListener("webkitfullscreenchange", c, !1),
            document.addEventListener("MSFullscreenChange", c, !1));
          var e = document.createElement("div");
          d.parentNode.insertBefore(e, d);
          e.appendChild(d);
          e.requestFullscreen =
            e.requestFullscreen ||
            e.mozRequestFullScreen ||
            e.msRequestFullscreen ||
            (e.webkitRequestFullscreen
              ? function () {
                  return e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
              : null) ||
            (e.webkitRequestFullScreen
              ? function () {
                  return e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                }
              : null);
          e.requestFullscreen();
        },
        exitFullscreen: function () {
          if (!u.isFullscreen) return !1;
          var a =
            document.exitFullscreen ||
            document.cancelFullScreen ||
            document.mozCancelFullScreen ||
            document.msExitFullscreen ||
            document.webkitCancelFullScreen ||
            function () {};
          a.apply(document, []);
          return !0;
        },
        nextRAF: 0,
        fakeRequestAnimationFrame: function (a) {
          var b = Date.now();
          if (0 === u.nextRAF) u.nextRAF = b + 1e3 / 60;
          else for (; b + 2 >= u.nextRAF; ) u.nextRAF += 1e3 / 60;
          b = Math.max(u.nextRAF - b, 0);
          setTimeout(a, b);
        },
        requestAnimationFrame: function (a) {
          if ("function" == typeof requestAnimationFrame) requestAnimationFrame(a);
          else {
            var b = u.fakeRequestAnimationFrame;
            b(a);
          }
        },
        safeSetTimeout: function (a, b) {
          return Gc(a, b);
        },
        safeRequestAnimationFrame: function (a) {
          return u.requestAnimationFrame(function () {
            Ob(a);
          });
        },
        getMimetype: function (a) {
          return {
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            png: "image/png",
            bmp: "image/bmp",
            ogg: "audio/ogg",
            wav: "audio/wav",
            mp3: "audio/mpeg"
          }[a.substr(a.lastIndexOf(".") + 1)];
        },
        getUserMedia: function (a) {
          window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
          window.getUserMedia(a);
        },
        getMovementX: function (a) {
          return a.movementX || a.mozMovementX || a.webkitMovementX || 0;
        },
        getMovementY: function (a) {
          return a.movementY || a.mozMovementY || a.webkitMovementY || 0;
        },
        getMouseWheelDelta: function (a) {
          switch (a.type) {
            case "DOMMouseScroll":
              var b = a.detail / 3;
              break;
            case "mousewheel":
              b = a.wheelDelta / 120;
              break;
            case "wheel":
              b = a.deltaY;
              switch (a.deltaMode) {
                case 0:
                  b /= 100;
                  break;
                case 1:
                  b /= 3;
                  break;
                case 2:
                  b *= 80;
                  break;
                default:
                  throw "unrecognized mouse wheel delta mode: " + a.deltaMode;
              }
              break;
            default:
              throw "unrecognized mouse wheel event: " + a.type;
          }
          return b;
        },
        mouseX: 0,
        mouseY: 0,
        mouseMovementX: 0,
        mouseMovementY: 0,
        touches: {},
        lastTouches: {},
        calculateMouseEvent: function (a) {
          if (u.pointerLock)
            "mousemove" != a.type && "mozMovementX" in a
              ? (u.mouseMovementX = u.mouseMovementY = 0)
              : ((u.mouseMovementX = u.getMovementX(a)), (u.mouseMovementY = u.getMovementY(a))),
              "undefined" != typeof SDL
                ? ((u.mouseX = SDL.mouseX + u.mouseMovementX), (u.mouseY = SDL.mouseY + u.mouseMovementY))
                : ((u.mouseX += u.mouseMovementX), (u.mouseY += u.mouseMovementY));
          else {
            var b = h.canvas.getBoundingClientRect(),
              c = h.canvas.width,
              d = h.canvas.height,
              e = "undefined" != typeof window.scrollX ? window.scrollX : window.pageXOffset,
              f = "undefined" != typeof window.scrollY ? window.scrollY : window.pageYOffset;
            if ("touchstart" === a.type || "touchend" === a.type || "touchmove" === a.type) {
              var g = a.touch;
              if (void 0 !== g)
                if (
                  ((e = g.pageX - (e + b.left)),
                  (f = g.pageY - (f + b.top)),
                  (e *= c / b.width),
                  (f *= d / b.height),
                  (b = { x: e, y: f }),
                  "touchstart" === a.type)
                )
                  (u.lastTouches[g.identifier] = b), (u.touches[g.identifier] = b);
                else if ("touchend" === a.type || "touchmove" === a.type)
                  (a = u.touches[g.identifier]) || (a = b), (u.lastTouches[g.identifier] = a), (u.touches[g.identifier] = b);
            } else
              (g = a.pageX - (e + b.left)),
                (a = a.pageY - (f + b.top)),
                (g *= c / b.width),
                (a *= d / b.height),
                (u.mouseMovementX = g - u.mouseX),
                (u.mouseMovementY = a - u.mouseY),
                (u.mouseX = g),
                (u.mouseY = a);
          }
        },
        resizeListeners: [],
        updateResizeListeners: function () {
          var a = h.canvas;
          u.resizeListeners.forEach(function (b) {
            return b(a.width, a.height);
          });
        },
        setCanvasSize: function (a, b, c) {
          var d = h.canvas;
          u.updateCanvasDimensions(d, a, b);
          c || u.updateResizeListeners();
        },
        windowedWidth: 0,
        windowedHeight: 0,
        setFullscreenCanvasSize: function () {
          if ("undefined" != typeof SDL) {
            var a = O[SDL.screen >> 2];
            a |= 8388608;
            r[SDL.screen >> 2] = a;
          }
          u.updateCanvasDimensions(h.canvas);
          u.updateResizeListeners();
        },
        setWindowedCanvasSize: function () {
          if ("undefined" != typeof SDL) {
            var a = O[SDL.screen >> 2];
            a &= -8388609;
            r[SDL.screen >> 2] = a;
          }
          u.updateCanvasDimensions(h.canvas);
          u.updateResizeListeners();
        },
        updateCanvasDimensions: function (a, b, c) {
          b && c ? ((a.widthNative = b), (a.heightNative = c)) : ((b = a.widthNative), (c = a.heightNative));
          var d = b,
            e = c;
          h.forcedAspectRatio &&
            0 < h.forcedAspectRatio &&
            (d / e < h.forcedAspectRatio ? (d = Math.round(e * h.forcedAspectRatio)) : (e = Math.round(d / h.forcedAspectRatio)));
          if (
            (document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement ||
              document.webkitFullscreenElement ||
              document.webkitCurrentFullScreenElement) === a.parentNode &&
            "undefined" != typeof screen
          ) {
            var f = Math.min(screen.width / d, screen.height / e);
            d = Math.round(d * f);
            e = Math.round(e * f);
          }
          u.resizeCanvas
            ? (a.width != d && (a.width = d),
              a.height != e && (a.height = e),
              "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height")))
            : (a.width != b && (a.width = b),
              a.height != c && (a.height = c),
              "undefined" != typeof a.style &&
                (d != b || e != c
                  ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", e + "px", "important"))
                  : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
        }
      },
      H = {
        errorCode: 12288,
        defaultDisplayInitialized: !1,
        currentContext: 0,
        currentReadSurface: 0,
        currentDrawSurface: 0,
        contextAttributes: { alpha: !1, depth: !1, stencil: !1, antialias: !1 },
        stringCache: {},
        setErrorCode: function (a) {
          H.errorCode = a;
        },
        chooseConfig: function (a, b, c, d, e) {
          if (62e3 != a) return H.setErrorCode(12296), 0;
          if (b)
            for (;;) {
              a = r[b >> 2];
              if (12321 == a) (a = r[(b + 4) >> 2]), (H.contextAttributes.alpha = 0 < a);
              else if (12325 == a) (a = r[(b + 4) >> 2]), (H.contextAttributes.depth = 0 < a);
              else if (12326 == a) (a = r[(b + 4) >> 2]), (H.contextAttributes.stencil = 0 < a);
              else if (12337 == a) (a = r[(b + 4) >> 2]), (H.contextAttributes.antialias = 0 < a);
              else if (12338 == a) (a = r[(b + 4) >> 2]), (H.contextAttributes.antialias = 1 == a);
              else if (12544 == a) (a = r[(b + 4) >> 2]), (H.contextAttributes.lowLatency = 12547 != a);
              else if (12344 == a) break;
              b += 8;
            }
          if (!((c && d) || e)) return H.setErrorCode(12300), 0;
          e && (r[e >> 2] = 1);
          c && 0 < d && (O[c >> 2] = 62002);
          H.setErrorCode(12288);
          return 1;
        }
      },
      Df = function (a, b, c, d, e) {
        return H.chooseConfig(a, b, c, d, e);
      },
      Ef = function (a) {
        var b = a.getExtension("ANGLE_instanced_arrays");
        if (b)
          return (
            (a.vertexAttribDivisor = function (c, d) {
              return b.vertexAttribDivisorANGLE(c, d);
            }),
            (a.drawArraysInstanced = function (c, d, e, f) {
              return b.drawArraysInstancedANGLE(c, d, e, f);
            }),
            (a.drawElementsInstanced = function (c, d, e, f, g) {
              return b.drawElementsInstancedANGLE(c, d, e, f, g);
            }),
            1
          );
      },
      Ff = function (a) {
        var b = a.getExtension("OES_vertex_array_object");
        if (b)
          return (
            (a.createVertexArray = function () {
              return b.createVertexArrayOES();
            }),
            (a.deleteVertexArray = function (c) {
              return b.deleteVertexArrayOES(c);
            }),
            (a.bindVertexArray = function (c) {
              return b.bindVertexArrayOES(c);
            }),
            (a.isVertexArray = function (c) {
              return b.isVertexArrayOES(c);
            }),
            1
          );
      },
      Gf = function (a) {
        var b = a.getExtension("WEBGL_draw_buffers");
        if (b)
          return (
            (a.drawBuffers = function (c, d) {
              return b.drawBuffersWEBGL(c, d);
            }),
            1
          );
      },
      m = {
        counter: 1,
        buffers: [],
        programs: [],
        framebuffers: [],
        renderbuffers: [],
        textures: [],
        shaders: [],
        vaos: [],
        contexts: [],
        offscreenCanvases: {},
        queries: [],
        samplers: [],
        transformFeedbacks: [],
        syncs: [],
        stringCache: {},
        stringiCache: {},
        unpackAlignment: 4,
        recordError: function (a) {
          m.lastError || (m.lastError = a);
        },
        getNewId: function (a) {
          for (var b = m.counter++, c = a.length; c < b; c++) a[c] = null;
          return b;
        },
        getSource: function (a, b, c, d) {
          a = "";
          for (var e = 0; e < b; ++e) {
            var f = d ? r[(d + 4 * e) >> 2] : -1;
            a += T(r[(c + 4 * e) >> 2], 0 > f ? void 0 : f);
          }
          return a;
        },
        createContext: function (a, b) {
          if (h.preinitializedWebGLContext) {
            var c = h.preinitializedWebGLContext;
            b.majorVersion = Number(c.getParameter(c.VERSION).match(/^WebGL (\d+).\d+/)[1]);
          } else
            a.getContextSafariWebGL2Fixed ||
              ((c = function (d, e) {
                e = a.getContextSafariWebGL2Fixed(d, e);
                return ("webgl" == d) == e instanceof WebGLRenderingContext ? e : null;
              }),
              (a.getContextSafariWebGL2Fixed = a.getContext),
              (a.getContext = c)),
              (c = 1 < b.majorVersion ? a.getContext("webgl2", b) : a.getContext("webgl", b));
          return c ? (b = m.registerContext(c, b)) : 0;
        },
        registerContext: function (a, b) {
          var c = m.getNewId(m.contexts),
            d = { handle: c, attributes: b, version: b.majorVersion, GLctx: a };
          a.canvas && (a.canvas.GLctxObject = d);
          m.contexts[c] = d;
          ("undefined" == typeof b.enableExtensionsByDefault || b.enableExtensionsByDefault) && m.initExtensions(d);
          return c;
        },
        makeContextCurrent: function (a) {
          m.currentContext = m.contexts[a];
          h.ctx = k = m.currentContext && m.currentContext.GLctx;
          return !(a && !k);
        },
        getContext: function (a) {
          return m.contexts[a];
        },
        deleteContext: function (a) {
          m.currentContext === m.contexts[a] && (m.currentContext = null);
          "object" == typeof P && P.removeAllHandlersOnTarget(m.contexts[a].GLctx.canvas);
          m.contexts[a] && m.contexts[a].GLctx.canvas && (m.contexts[a].GLctx.canvas.GLctxObject = void 0);
          m.contexts[a] = null;
        },
        initExtensions: function (a) {
          a || (a = m.currentContext);
          if (!a.initExtensionsDone) {
            a.initExtensionsDone = !0;
            var b = a.GLctx;
            Ef(b);
            Ff(b);
            Gf(b);
            b.dibvbi = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
            b.mdibvbi = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
            2 <= a.version && (b.disjointTimerQueryExt = b.getExtension("EXT_disjoint_timer_query_webgl2"));
            if (2 > a.version || !b.disjointTimerQueryExt) b.disjointTimerQueryExt = b.getExtension("EXT_disjoint_timer_query");
            b.multiDrawWebgl = b.getExtension("WEBGL_multi_draw");
            a = b.getSupportedExtensions() || [];
            a.forEach(function (c) {
              c.includes("lose_context") || c.includes("debug") || b.getExtension(c);
            });
          }
        }
      },
      Hf = function (a, b, c, d) {
        if (62e3 != a) return H.setErrorCode(12296), 0;
        for (a = 1; ; ) {
          b = r[d >> 2];
          if (12440 == b) a = r[(d + 4) >> 2];
          else if (12344 == b) break;
          else return H.setErrorCode(12292), 0;
          d += 8;
        }
        if (2 > a || 3 < a) return H.setErrorCode(12293), 0;
        H.contextAttributes.majorVersion = a - 1;
        H.contextAttributes.minorVersion = 0;
        H.context = m.createContext(h.canvas, H.contextAttributes);
        if (0 != H.context)
          return (
            H.setErrorCode(12288),
            m.makeContextCurrent(H.context),
            (h.useWebGL = !0),
            u.moduleContextCreatedCallbacks.forEach(function (e) {
              e();
            }),
            m.makeContextCurrent(null),
            62004
          );
        H.setErrorCode(12297);
        return 0;
      },
      If = function (a, b) {
        if (62e3 != a) return H.setErrorCode(12296), 0;
        if (62002 != b) return H.setErrorCode(12293), 0;
        H.setErrorCode(12288);
        return 62006;
      },
      Jf = function (a, b) {
        if (62e3 != a) return H.setErrorCode(12296), 0;
        if (62004 != b) return H.setErrorCode(12294), 0;
        m.deleteContext(H.context);
        H.setErrorCode(12288);
        H.currentContext == b && (H.currentContext = 0);
        return 1;
      },
      Kf = function (a, b) {
        if (62e3 != a) return H.setErrorCode(12296), 0;
        if (62006 != b) return H.setErrorCode(12301), 1;
        H.currentReadSurface == b && (H.currentReadSurface = 0);
        H.currentDrawSurface == b && (H.currentDrawSurface = 0);
        H.setErrorCode(12288);
        return 1;
      },
      Lf = function () {
        return H.currentContext;
      },
      Mf = function () {
        return H.currentContext ? 62e3 : 0;
      },
      Nf = function (a) {
        if (12378 == a) return H.currentReadSurface;
        if (12377 == a) return H.currentDrawSurface;
        H.setErrorCode(12300);
        return 0;
      },
      Of = function () {
        H.setErrorCode(12288);
        return 62e3;
      },
      Pf = function (a, b, c) {
        if (62e3 != a) return H.setErrorCode(12296), 0;
        b && (r[b >> 2] = 1);
        c && (r[c >> 2] = 4);
        H.defaultDisplayInitialized = !0;
        H.setErrorCode(12288);
        return 1;
      },
      Qf = function (a, b, c, d) {
        if (62e3 != a) return H.setErrorCode(12296), 0;
        if (0 != d && 62004 != d) return H.setErrorCode(12294), 0;
        if ((0 != c && 62006 != c) || (0 != b && 62006 != b)) return H.setErrorCode(12301), 0;
        m.makeContextCurrent(d ? H.context : null);
        H.currentContext = d;
        H.currentDrawSurface = b;
        H.currentReadSurface = c;
        H.setErrorCode(12288);
        return 1;
      },
      Rf = function () {
        H.currentContext = 0;
        H.currentReadSurface = 0;
        H.currentDrawSurface = 0;
        H.setErrorCode(12288);
        return 1;
      },
      Sf = function () {
        if (H.defaultDisplayInitialized)
          if (h.ctx)
            if (h.ctx.isContextLost()) H.setErrorCode(12302);
            else return H.setErrorCode(12288), 1;
          else H.setErrorCode(12290);
        else H.setErrorCode(12289);
        return 0;
      },
      Pb = [],
      Hc = function (a, b) {
        Pb.length = 0;
        for (var c; (c = K[a++]); ) {
          var d = 105 != c;
          d &= 112 != c;
          b += d && b % 8 ? 4 : 0;
          Pb.push(112 == c ? O[b >> 2] : 105 == c ? r[b >> 2] : ab[b >> 3]);
          b += d ? 8 : 4;
        }
        return Pb;
      },
      Tf = function (a, b, c) {
        b = Hc(b, c);
        return (b = pc[a].apply(null, b));
      },
      Uf = function (a, b, c) {
        b = Hc(b, c);
        return (b = pc[a].apply(null, b));
      },
      Vf = function (a, b, c) {
        function d() {
          Ic.apply(null, [a, b]);
        }
        0 <= c || Ga ? Gc(d, c) : u.safeRequestAnimationFrame(d);
      },
      Wf = function () {
        return Date.now();
      },
      Xf = function (a, b) {
        return ka(T(a, b));
      },
      Yf = function () {
        return 2147483648;
      },
      Zf = id,
      $f = function (a, b) {
        k.attachShader(m.programs[a], m.shaders[b]);
      },
      ag = $f,
      bg = function (a, b) {
        k.beginQuery(a, m.queries[b]);
      },
      cg = bg,
      dg = function (a, b) {
        k.disjointTimerQueryExt.beginQueryEXT(a, m.queries[b]);
      },
      eg = dg,
      fg = jd,
      gg = function (a, b, c) {
        k.bindAttribLocation(m.programs[a], b, T(c));
      },
      hg = gg,
      ig = function (a, b) {
        35051 == a ? (k.currentPixelPackBufferBinding = b) : 35052 == a && (k.currentPixelUnpackBufferBinding = b);
        k.bindBuffer(a, m.buffers[b]);
      },
      jg = ig,
      kg = function (a, b, c) {
        k.bindBufferBase(a, b, m.buffers[c]);
      },
      lg = kg,
      mg = function (a, b, c, d, e) {
        k.bindBufferRange(a, b, m.buffers[c], d, e);
      },
      ng = mg,
      og = function (a, b) {
        k.bindFramebuffer(a, m.framebuffers[b]);
      },
      pg = og,
      qg = function (a, b) {
        k.bindRenderbuffer(a, m.renderbuffers[b]);
      },
      rg = qg,
      sg = function (a, b) {
        k.bindSampler(a, m.samplers[b]);
      },
      tg = sg,
      ug = function (a, b) {
        k.bindTexture(a, m.textures[b]);
      },
      vg = ug,
      wg = function (a, b) {
        k.bindTransformFeedback(a, m.transformFeedbacks[b]);
      },
      xg = wg,
      Jc = function (a) {
        k.bindVertexArray(m.vaos[a]);
      },
      yg = Jc,
      zg = Jc,
      Ag = zg,
      Bg = kd,
      Cg = ld,
      Dg = md,
      Eg = nd,
      Fg = od,
      Gg = pd,
      Hg = function (a, b, c, d) {
        2 <= m.currentContext.version
          ? c && b
            ? k.bufferData(a, K, d, c, b)
            : k.bufferData(a, b, d)
          : k.bufferData(a, c ? K.subarray(c, c + b) : b, d);
      },
      Ig = Hg,
      Jg = function (a, b, c, d) {
        2 <= m.currentContext.version ? c && k.bufferSubData(a, b, K, d, c) : k.bufferSubData(a, b, K.subarray(d, d + c));
      },
      Kg = Jg,
      Lg = qd,
      Mg = rd,
      Ng = sd,
      Og = function (a, b, c) {
        k.clearBufferfv(a, b, G, c >> 2);
      },
      Pg = Og,
      Qg = function (a, b, c) {
        k.clearBufferiv(a, b, r, c >> 2);
      },
      Rg = Qg,
      Sg = function (a, b, c) {
        k.clearBufferuiv(a, b, O, c >> 2);
      },
      Tg = Sg,
      Ug = td,
      Vg = ud,
      Wg = vd,
      Xg = function (a, b, c, d) {
        c = (c >>> 0) + 4294967296 * d;
        return k.clientWaitSync(m.syncs[a], b, c);
      },
      Yg = Xg,
      Zg = function (a, b, c, d) {
        k.colorMask(!!a, !!b, !!c, !!d);
      },
      $g = Zg,
      ah = function (a) {
        k.compileShader(m.shaders[a]);
      },
      bh = ah,
      ch = function (a, b, c, d, e, f, g, l) {
        2 <= m.currentContext.version
          ? k.currentPixelUnpackBufferBinding || !g
            ? k.compressedTexImage2D(a, b, c, d, e, f, g, l)
            : k.compressedTexImage2D(a, b, c, d, e, f, K, l, g)
          : k.compressedTexImage2D(a, b, c, d, e, f, l ? K.subarray(l, l + g) : null);
      },
      dh = ch,
      eh = function (a, b, c, d, e, f, g, l, n) {
        k.currentPixelUnpackBufferBinding
          ? k.compressedTexImage3D(a, b, c, d, e, f, g, l, n)
          : k.compressedTexImage3D(a, b, c, d, e, f, g, K, n, l);
      },
      fh = eh,
      gh = function (a, b, c, d, e, f, g, l, n) {
        2 <= m.currentContext.version
          ? k.currentPixelUnpackBufferBinding || !l
            ? k.compressedTexSubImage2D(a, b, c, d, e, f, g, l, n)
            : k.compressedTexSubImage2D(a, b, c, d, e, f, g, K, n, l)
          : k.compressedTexSubImage2D(a, b, c, d, e, f, g, n ? K.subarray(n, n + l) : null);
      },
      hh = gh,
      ih = function (a, b, c, d, e, f, g, l, n, v, t) {
        k.currentPixelUnpackBufferBinding
          ? k.compressedTexSubImage3D(a, b, c, d, e, f, g, l, n, v, t)
          : k.compressedTexSubImage3D(a, b, c, d, e, f, g, l, n, K, t, v);
      },
      jh = ih,
      kh = wd,
      lh = xd,
      mh = yd,
      nh = zd,
      oh = function () {
        var a = m.getNewId(m.programs),
          b = k.createProgram();
        b.name = a;
        b.maxUniformLength = b.maxAttributeLength = b.maxUniformBlockNameLength = 0;
        b.uniformIdCounter = 1;
        m.programs[a] = b;
        return a;
      },
      ph = oh,
      qh = function (a) {
        var b = m.getNewId(m.shaders);
        m.shaders[b] = k.createShader(a);
        return b;
      },
      rh = qh,
      sh = Ad,
      th = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = r[(b + 4 * c) >> 2],
            e = m.buffers[d];
          e &&
            (k.deleteBuffer(e),
            (e.name = 0),
            (m.buffers[d] = null),
            d == k.currentPixelPackBufferBinding && (k.currentPixelPackBufferBinding = 0),
            d == k.currentPixelUnpackBufferBinding && (k.currentPixelUnpackBufferBinding = 0));
        }
      },
      uh = th,
      vh = function (a, b) {
        for (var c = 0; c < a; ++c) {
          var d = r[(b + 4 * c) >> 2],
            e = m.framebuffers[d];
          e && (k.deleteFramebuffer(e), (e.name = 0), (m.framebuffers[d] = null));
        }
      },
      wh = vh,
      xh = function (a) {
        if (a) {
          var b = m.programs[a];
          b ? (k.deleteProgram(b), (b.name = 0), (m.programs[a] = null)) : m.recordError(1281);
        }
      },
      yh = xh,
      zh = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = r[(b + 4 * c) >> 2],
            e = m.queries[d];
          e && (k.deleteQuery(e), (m.queries[d] = null));
        }
      },
      Ah = zh,
      Bh = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = r[(b + 4 * c) >> 2],
            e = m.queries[d];
          e && (k.disjointTimerQueryExt.deleteQueryEXT(e), (m.queries[d] = null));
        }
      },
      Ch = Bh,
      Dh = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = r[(b + 4 * c) >> 2],
            e = m.renderbuffers[d];
          e && (k.deleteRenderbuffer(e), (e.name = 0), (m.renderbuffers[d] = null));
        }
      },
      Eh = Dh,
      Fh = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = r[(b + 4 * c) >> 2],
            e = m.samplers[d];
          e && (k.deleteSampler(e), (e.name = 0), (m.samplers[d] = null));
        }
      },
      Gh = Fh,
      Hh = function (a) {
        if (a) {
          var b = m.shaders[a];
          b ? (k.deleteShader(b), (m.shaders[a] = null)) : m.recordError(1281);
        }
      },
      Ih = Hh,
      Jh = function (a) {
        if (a) {
          var b = m.syncs[a];
          b ? (k.deleteSync(b), (b.name = 0), (m.syncs[a] = null)) : m.recordError(1281);
        }
      },
      Kh = Jh,
      Lh = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = r[(b + 4 * c) >> 2],
            e = m.textures[d];
          e && (k.deleteTexture(e), (e.name = 0), (m.textures[d] = null));
        }
      },
      Mh = Lh,
      Nh = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = r[(b + 4 * c) >> 2],
            e = m.transformFeedbacks[d];
          e && (k.deleteTransformFeedback(e), (e.name = 0), (m.transformFeedbacks[d] = null));
        }
      },
      Oh = Nh,
      Kc = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = r[(b + 4 * c) >> 2];
          k.deleteVertexArray(m.vaos[d]);
          m.vaos[d] = null;
        }
      },
      Ph = Kc,
      Qh = Kc,
      Rh = Qh,
      Sh = Bd,
      Th = function (a) {
        k.depthMask(!!a);
      },
      Uh = Th,
      Vh = Cd,
      Wh = function (a, b) {
        k.detachShader(m.programs[a], m.shaders[b]);
      },
      Xh = Wh,
      Yh = Dd,
      Zh = function (a) {
        k.disableVertexAttribArray(a);
      },
      $h = Zh,
      ai = function (a, b, c) {
        k.drawArrays(a, b, c);
      },
      bi = ai,
      Ua = function (a, b, c, d) {
        k.drawArraysInstanced(a, b, c, d);
      },
      ci = Ua,
      di = Ua,
      ei = di,
      fi = Ua,
      gi = fi,
      hi = Ua,
      ii = hi,
      ji = Ua,
      ki = ji,
      ob = [],
      Qb = function (a, b) {
        for (var c = ob[a], d = 0; d < a; d++) c[d] = r[(b + 4 * d) >> 2];
        k.drawBuffers(c);
      },
      li = Qb,
      mi = Qb,
      ni = mi,
      oi = Qb,
      pi = oi,
      Lc = function (a, b, c, d) {
        k.drawElements(a, b, c, d);
      },
      qi = Lc,
      Va = function (a, b, c, d, e) {
        k.drawElementsInstanced(a, b, c, d, e);
      },
      ri = Va,
      si = Va,
      ti = si,
      ui = Va,
      vi = ui,
      wi = Va,
      xi = wi,
      yi = Va,
      zi = yi,
      Ai = function (a, b, c, d, e, f) {
        Lc(a, d, e, f);
      },
      Bi = Ai,
      Ci = Ed,
      Di = function (a) {
        k.enableVertexAttribArray(a);
      },
      Ei = Di,
      Fi = Fd,
      Gi = function (a) {
        k.disjointTimerQueryExt.endQueryEXT(a);
      },
      Hi = Gi,
      Ii = Gd,
      Ji = function (a, b) {
        return (a = k.fenceSync(a, b)) ? ((b = m.getNewId(m.syncs)), (a.name = b), (m.syncs[b] = a), b) : 0;
      },
      Ki = Ji,
      Li = Hd,
      Mi = Id,
      Ni = function (a, b, c, d) {
        k.framebufferRenderbuffer(a, b, c, m.renderbuffers[d]);
      },
      Oi = Ni,
      Pi = function (a, b, c, d, e) {
        k.framebufferTexture2D(a, b, c, m.textures[d], e);
      },
      Qi = Pi,
      Ri = function (a, b, c, d, e) {
        k.framebufferTextureLayer(a, b, m.textures[c], d, e);
      },
      Si = Ri,
      Ti = Jd,
      oa = function (a, b, c, d) {
        for (var e = 0; e < a; e++) {
          var f = k[c](),
            g = f && m.getNewId(d);
          f ? ((f.name = g), (d[g] = f)) : m.recordError(1282);
          r[(b + 4 * e) >> 2] = g;
        }
      },
      Ui = function (a, b) {
        oa(a, b, "createBuffer", m.buffers);
      },
      Vi = Ui,
      Wi = function (a, b) {
        oa(a, b, "createFramebuffer", m.framebuffers);
      },
      Xi = Wi,
      Yi = function (a, b) {
        oa(a, b, "createQuery", m.queries);
      },
      Zi = Yi,
      $i = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = k.disjointTimerQueryExt.createQueryEXT();
          if (!d) {
            for (m.recordError(1282); c < a; ) r[(b + 4 * c++) >> 2] = 0;
            break;
          }
          var e = m.getNewId(m.queries);
          d.name = e;
          m.queries[e] = d;
          r[(b + 4 * c) >> 2] = e;
        }
      },
      aj = $i,
      bj = function (a, b) {
        oa(a, b, "createRenderbuffer", m.renderbuffers);
      },
      cj = bj,
      dj = function (a, b) {
        oa(a, b, "createSampler", m.samplers);
      },
      ej = dj,
      fj = function (a, b) {
        oa(a, b, "createTexture", m.textures);
      },
      gj = fj,
      hj = function (a, b) {
        oa(a, b, "createTransformFeedback", m.transformFeedbacks);
      },
      ij = hj,
      jj = ac,
      kj = ac,
      lj = kj,
      mj = Kd,
      Mc = function (a, b, c, d, e, f, g, l) {
        b = m.programs[b];
        if ((a = k[a](b, c))) (d = l && ea(a.name, K, l, d)), e && (r[e >> 2] = d), f && (r[f >> 2] = a.size), g && (r[g >> 2] = a.type);
      },
      nj = function (a, b, c, d, e, f, g) {
        Mc("getActiveAttrib", a, b, c, d, e, f, g);
      },
      oj = nj,
      pj = function (a, b, c, d, e, f, g) {
        Mc("getActiveUniform", a, b, c, d, e, f, g);
      },
      qj = pj,
      rj = function (a, b, c, d, e) {
        a = m.programs[a];
        if ((a = k.getActiveUniformBlockName(a, b))) e && 0 < c ? ((c = ea(a, K, e, c)), d && (r[d >> 2] = c)) : d && (r[d >> 2] = 0);
      },
      sj = rj,
      tj = function (a, b, c, d) {
        if (d)
          if (((a = m.programs[a]), 35393 == c)) (c = k.getActiveUniformBlockName(a, b)), (r[d >> 2] = c.length + 1);
          else {
            if (((a = k.getActiveUniformBlockParameter(a, b, c)), null !== a))
              if (35395 == c) for (c = 0; c < a.length; c++) r[(d + 4 * c) >> 2] = a[c];
              else r[d >> 2] = a;
          }
        else m.recordError(1281);
      },
      uj = tj,
      vj = function (a, b, c, d, e) {
        if (e)
          if (0 < b && 0 == c) m.recordError(1281);
          else {
            a = m.programs[a];
            for (var f = [], g = 0; g < b; g++) f.push(r[(c + 4 * g) >> 2]);
            if ((a = k.getActiveUniforms(a, f, d))) for (b = a.length, g = 0; g < b; g++) r[(e + 4 * g) >> 2] = a[g];
          }
        else m.recordError(1281);
      },
      wj = vj,
      xj = function (a, b, c, d) {
        a = k.getAttachedShaders(m.programs[a]);
        var e = a.length;
        e > b && (e = b);
        r[c >> 2] = e;
        for (b = 0; b < e; ++b) (c = m.shaders.indexOf(a[b])), (r[(d + 4 * b) >> 2] = c);
      },
      yj = xj,
      zj = function (a, b) {
        return k.getAttribLocation(m.programs[a], T(b));
      },
      Aj = zj,
      pb = function (a, b) {
        O[a >> 2] = b;
        var c = O[a >> 2];
        O[(a + 4) >> 2] = (b - c) / 4294967296;
      },
      qb = function (a, b, c) {
        if (b) {
          var d = void 0;
          switch (a) {
            case 36346:
              d = 1;
              break;
            case 36344:
              0 != c && 1 != c && m.recordError(1280);
              return;
            case 34814:
            case 36345:
              d = 0;
              break;
            case 34466:
              var e = k.getParameter(34467);
              d = e ? e.length : 0;
              break;
            case 33309:
              if (2 > m.currentContext.version) {
                m.recordError(1282);
                return;
              }
              e = k.getSupportedExtensions() || [];
              d = 2 * e.length;
              break;
            case 33307:
            case 33308:
              if (2 > m.currentContext.version) {
                m.recordError(1280);
                return;
              }
              d = 33307 == a ? 3 : 0;
          }
          if (void 0 === d)
            switch (((e = k.getParameter(a)), typeof e)) {
              case "number":
                d = e;
                break;
              case "boolean":
                d = e ? 1 : 0;
                break;
              case "string":
                m.recordError(1280);
                return;
              case "object":
                if (null === e)
                  switch (a) {
                    case 34964:
                    case 35725:
                    case 34965:
                    case 36006:
                    case 36007:
                    case 32873:
                    case 34229:
                    case 36662:
                    case 36663:
                    case 35053:
                    case 35055:
                    case 36010:
                    case 35097:
                    case 35869:
                    case 32874:
                    case 36389:
                    case 35983:
                    case 35368:
                    case 34068:
                      d = 0;
                      break;
                    default:
                      m.recordError(1280);
                      return;
                  }
                else {
                  if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
                    for (a = 0; a < e.length; ++a)
                      switch (c) {
                        case 0:
                          r[(b + 4 * a) >> 2] = e[a];
                          break;
                        case 2:
                          G[(b + 4 * a) >> 2] = e[a];
                          break;
                        case 4:
                          V[(b + a) >> 0] = e[a] ? 1 : 0;
                      }
                    return;
                  }
                  try {
                    d = e.name | 0;
                  } catch (f) {
                    m.recordError(1280);
                    ka(
                      "GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + f + ")"
                    );
                    return;
                  }
                }
                break;
              default:
                m.recordError(1280);
                ka(
                  "GL_INVALID_ENUM in glGet" +
                    c +
                    "v: Native code calling glGet" +
                    c +
                    "v(" +
                    a +
                    ") and it returns " +
                    e +
                    " of type " +
                    typeof e +
                    "!"
                );
                return;
            }
          switch (c) {
            case 1:
              pb(b, d);
              break;
            case 0:
              r[b >> 2] = d;
              break;
            case 2:
              G[b >> 2] = d;
              break;
            case 4:
              V[b >> 0] = d ? 1 : 0;
          }
        } else m.recordError(1281);
      },
      Bj = function (a, b) {
        qb(a, b, 4);
      },
      Cj = Bj,
      Dj = function (a, b, c) {
        c ? pb(c, k.getBufferParameter(a, b)) : m.recordError(1281);
      },
      Ej = Dj,
      Fj = function (a, b, c) {
        c ? (r[c >> 2] = k.getBufferParameter(a, b)) : m.recordError(1281);
      },
      Gj = Fj,
      Hj = function () {
        var a = k.getError() || m.lastError;
        m.lastError = 0;
        return a;
      },
      Ij = Hj,
      Jj = function (a, b) {
        qb(a, b, 2);
      },
      Kj = Jj,
      Lj = function (a, b) {
        return k.getFragDataLocation(m.programs[a], T(b));
      },
      Mj = Lj,
      Nj = function (a, b, c, d) {
        a = k.getFramebufferAttachmentParameter(a, b, c);
        if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) a = a.name | 0;
        r[d >> 2] = a;
      },
      Oj = Nj,
      Nc = function (a, b, c, d) {
        if (c) {
          b = k.getIndexedParameter(a, b);
          switch (typeof b) {
            case "boolean":
              a = b ? 1 : 0;
              break;
            case "number":
              a = b;
              break;
            case "object":
              if (null === b)
                switch (a) {
                  case 35983:
                  case 35368:
                    a = 0;
                    break;
                  default:
                    m.recordError(1280);
                    return;
                }
              else if (b instanceof WebGLBuffer) a = b.name | 0;
              else {
                m.recordError(1280);
                return;
              }
              break;
            default:
              m.recordError(1280);
              return;
          }
          switch (d) {
            case 1:
              pb(c, a);
              break;
            case 0:
              r[c >> 2] = a;
              break;
            case 2:
              G[c >> 2] = a;
              break;
            case 4:
              V[c >> 0] = a ? 1 : 0;
              break;
            default:
              throw "internal emscriptenWebGLGetIndexed() error, bad type: " + d;
          }
        } else m.recordError(1281);
      },
      Pj = function (a, b, c) {
        return Nc(a, b, c, 1);
      },
      Qj = Pj,
      Rj = function (a, b) {
        qb(a, b, 1);
      },
      Sj = Rj,
      Tj = function (a, b, c) {
        return Nc(a, b, c, 0);
      },
      Uj = Tj,
      Vj = function (a, b) {
        qb(a, b, 0);
      },
      Wj = Vj,
      Xj = function (a, b, c, d, e) {
        if (0 > d) m.recordError(1281);
        else if (e) {
          if (((a = k.getInternalformatParameter(a, b, c)), null !== a)) for (b = 0; b < a.length && b < d; ++b) r[(e + 4 * b) >> 2] = a[b];
        } else m.recordError(1281);
      },
      Yj = Xj,
      Zj = function () {
        m.recordError(1282);
      },
      ak = Zj,
      bk = function (a, b, c, d) {
        a = k.getProgramInfoLog(m.programs[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? ea(a, K, d, b) : 0;
        c && (r[c >> 2] = b);
      },
      ck = bk,
      dk = function (a, b, c) {
        if (c)
          if (a >= m.counter) m.recordError(1281);
          else if (((a = m.programs[a]), 35716 == b))
            (a = k.getProgramInfoLog(a)), null === a && (a = "(unknown error)"), (r[c >> 2] = a.length + 1);
          else if (35719 == b) {
            if (!a.maxUniformLength)
              for (b = 0; b < k.getProgramParameter(a, 35718); ++b)
                a.maxUniformLength = Math.max(a.maxUniformLength, k.getActiveUniform(a, b).name.length + 1);
            r[c >> 2] = a.maxUniformLength;
          } else if (35722 == b) {
            if (!a.maxAttributeLength)
              for (b = 0; b < k.getProgramParameter(a, 35721); ++b)
                a.maxAttributeLength = Math.max(a.maxAttributeLength, k.getActiveAttrib(a, b).name.length + 1);
            r[c >> 2] = a.maxAttributeLength;
          } else if (35381 == b) {
            if (!a.maxUniformBlockNameLength)
              for (b = 0; b < k.getProgramParameter(a, 35382); ++b)
                a.maxUniformBlockNameLength = Math.max(a.maxUniformBlockNameLength, k.getActiveUniformBlockName(a, b).length + 1);
            r[c >> 2] = a.maxUniformBlockNameLength;
          } else r[c >> 2] = k.getProgramParameter(a, b);
        else m.recordError(1281);
      },
      ek = dk,
      Oc = function (a, b, c) {
        c
          ? ((a = m.queries[a]),
            (b = 2 > m.currentContext.version ? k.disjointTimerQueryExt.getQueryObjectEXT(a, b) : k.getQueryParameter(a, b)),
            (b = "boolean" == typeof b ? (b ? 1 : 0) : b),
            pb(c, b))
          : m.recordError(1281);
      },
      fk = Oc,
      Pc = function (a, b, c) {
        c
          ? ((a = m.queries[a]),
            (b = k.disjointTimerQueryExt.getQueryObjectEXT(a, b)),
            (b = "boolean" == typeof b ? (b ? 1 : 0) : b),
            (r[c >> 2] = b))
          : m.recordError(1281);
      },
      gk = Pc,
      hk = Oc,
      ik = hk,
      jk = function (a, b, c) {
        c
          ? ((a = m.queries[a]), (b = k.getQueryParameter(a, b)), (b = "boolean" == typeof b ? (b ? 1 : 0) : b), (r[c >> 2] = b))
          : m.recordError(1281);
      },
      kk = jk,
      lk = Pc,
      mk = lk,
      nk = function (a, b, c) {
        c ? (r[c >> 2] = k.getQuery(a, b)) : m.recordError(1281);
      },
      ok = nk,
      pk = function (a, b, c) {
        c ? (r[c >> 2] = k.disjointTimerQueryExt.getQueryEXT(a, b)) : m.recordError(1281);
      },
      qk = pk,
      rk = function (a, b, c) {
        c ? (r[c >> 2] = k.getRenderbufferParameter(a, b)) : m.recordError(1281);
      },
      sk = rk,
      tk = function (a, b, c) {
        c ? (G[c >> 2] = k.getSamplerParameter(m.samplers[a], b)) : m.recordError(1281);
      },
      uk = tk,
      vk = function (a, b, c) {
        c ? (r[c >> 2] = k.getSamplerParameter(m.samplers[a], b)) : m.recordError(1281);
      },
      wk = vk,
      xk = function (a, b, c, d) {
        a = k.getShaderInfoLog(m.shaders[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? ea(a, K, d, b) : 0;
        c && (r[c >> 2] = b);
      },
      yk = xk,
      zk = function (a, b, c, d) {
        a = k.getShaderPrecisionFormat(a, b);
        r[c >> 2] = a.rangeMin;
        r[(c + 4) >> 2] = a.rangeMax;
        r[d >> 2] = a.precision;
      },
      Ak = zk,
      Bk = function (a, b, c, d) {
        if ((a = k.getShaderSource(m.shaders[a]))) (b = 0 < b && d ? ea(a, K, d, b) : 0), c && (r[c >> 2] = b);
      },
      Ck = Bk,
      Dk = function (a, b, c) {
        c
          ? 35716 == b
            ? ((a = k.getShaderInfoLog(m.shaders[a])), null === a && (a = "(unknown error)"), (a = a ? a.length + 1 : 0), (r[c >> 2] = a))
            : 35720 == b
            ? ((a = (a = k.getShaderSource(m.shaders[a])) ? a.length + 1 : 0), (r[c >> 2] = a))
            : (r[c >> 2] = k.getShaderParameter(m.shaders[a], b))
          : m.recordError(1281);
      },
      Ek = Dk,
      Wa = function (a) {
        var b = hb(a) + 1,
          c = Ma(b);
        c && ea(a, K, c, b);
        return c;
      },
      Fk = function (a) {
        var b = m.stringCache[a];
        if (!b) {
          switch (a) {
            case 7939:
              b = k.getSupportedExtensions() || [];
              b = b.concat(
                b.map(function (d) {
                  return "GL_" + d;
                })
              );
              b = Wa(b.join(" "));
              break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
              (b = k.getParameter(a)) || m.recordError(1280);
              b = b && Wa(b);
              break;
            case 7938:
              b = k.getParameter(7938);
              b = 2 <= m.currentContext.version ? "OpenGL ES 3.0 (" + b + ")" : "OpenGL ES 2.0 (" + b + ")";
              b = Wa(b);
              break;
            case 35724:
              b = k.getParameter(35724);
              var c = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
              c = b.match(c);
              null !== c && (3 == c[1].length && (c[1] += "0"), (b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")"));
              b = Wa(b);
              break;
            default:
              m.recordError(1280);
          }
          m.stringCache[a] = b;
        }
        return b;
      },
      Gk = Fk,
      Hk = function (a, b) {
        if (2 > m.currentContext.version) return m.recordError(1282), 0;
        var c = m.stringiCache[a];
        if (c) return 0 > b || b >= c.length ? (m.recordError(1281), 0) : c[b];
        switch (a) {
          case 7939:
            return (
              (c = k.getSupportedExtensions() || []),
              (c = c.concat(
                c.map(function (d) {
                  return "GL_" + d;
                })
              )),
              (c = c.map(function (d) {
                return Wa(d);
              })),
              (c = m.stringiCache[a] = c),
              0 > b || b >= c.length ? (m.recordError(1281), 0) : c[b]
            );
          default:
            return m.recordError(1280), 0;
        }
      },
      Ik = Hk,
      Jk = function (a, b, c, d, e) {
        0 > c
          ? m.recordError(1281)
          : e
          ? ((a = k.getSyncParameter(m.syncs[a], b)), null !== a && ((r[e >> 2] = a), d && (r[d >> 2] = 1)))
          : m.recordError(1281);
      },
      Kk = Jk,
      Lk = function (a, b, c) {
        c ? (G[c >> 2] = k.getTexParameter(a, b)) : m.recordError(1281);
      },
      Mk = Lk,
      Nk = function (a, b, c) {
        c ? (r[c >> 2] = k.getTexParameter(a, b)) : m.recordError(1281);
      },
      Ok = Nk,
      Pk = function (a, b, c, d, e, f, g) {
        a = m.programs[a];
        if ((a = k.getTransformFeedbackVarying(a, b)))
          g && 0 < c ? ((c = ea(a.name, K, g, c)), d && (r[d >> 2] = c)) : d && (r[d >> 2] = 0),
            e && (r[e >> 2] = a.size),
            f && (r[f >> 2] = a.type);
      },
      Qk = Pk,
      Rk = function (a, b) {
        return k.getUniformBlockIndex(m.programs[a], T(b));
      },
      Sk = Rk,
      Tk = function (a, b, c, d) {
        if (d)
          if (0 < b && (0 == c || 0 == d)) m.recordError(1281);
          else {
            a = m.programs[a];
            for (var e = [], f = 0; f < b; f++) e.push(T(r[(c + 4 * f) >> 2]));
            if ((a = k.getUniformIndices(a, e))) for (b = a.length, f = 0; f < b; f++) r[(d + 4 * f) >> 2] = a[f];
          }
        else m.recordError(1281);
      },
      Uk = Tk,
      Qc = function (a) {
        var b = a.uniformLocsById,
          c = a.uniformSizeAndIdsByName,
          d;
        if (!b)
          for (a.uniformLocsById = b = {}, a.uniformArrayNamesById = {}, d = 0; d < k.getProgramParameter(a, 35718); ++d) {
            var e = k.getActiveUniform(a, d);
            var f = e.name;
            e = e.size;
            var g = "]" == f.slice(-1) && f.lastIndexOf("[");
            g = 0 < g ? f.slice(0, g) : f;
            var l = a.uniformIdCounter;
            a.uniformIdCounter += e;
            c[g] = [e, l];
            for (f = 0; f < e; ++f) (b[l] = f), (a.uniformArrayNamesById[l++] = g);
          }
      },
      Vk = function (a, b) {
        b = T(b);
        if ((a = m.programs[a])) {
          Qc(a);
          var c = a.uniformLocsById,
            d = 0,
            e = b,
            f = "]" == b.slice(-1) && b.lastIndexOf("[");
          0 < f && ((d = parseInt(b.slice(f + 1)) >>> 0), (e = b.slice(0, f)));
          if ((e = a.uniformSizeAndIdsByName[e]) && d < e[0] && ((d += e[1]), (c[d] = c[d] || k.getUniformLocation(a, b)))) return d;
        } else m.recordError(1281);
        return -1;
      },
      Wk = Vk,
      L = function (a) {
        var b = k.currentProgram;
        if (b) {
          var c = b.uniformLocsById[a];
          "number" == typeof c &&
            (b.uniformLocsById[a] = c = k.getUniformLocation(b, b.uniformArrayNamesById[a] + (0 < c ? "[" + c + "]" : "")));
          return c;
        }
        m.recordError(1282);
      },
      Rb = function (a, b, c, d) {
        if (c)
          if (((a = m.programs[a]), Qc(a), (a = k.getUniform(a, L(b))), "number" == typeof a || "boolean" == typeof a))
            switch (d) {
              case 0:
                r[c >> 2] = a;
                break;
              case 2:
                G[c >> 2] = a;
            }
          else
            for (b = 0; b < a.length; b++)
              switch (d) {
                case 0:
                  r[(c + 4 * b) >> 2] = a[b];
                  break;
                case 2:
                  G[(c + 4 * b) >> 2] = a[b];
              }
        else m.recordError(1281);
      },
      Xk = function (a, b, c) {
        Rb(a, b, c, 2);
      },
      Yk = Xk,
      Zk = function (a, b, c) {
        Rb(a, b, c, 0);
      },
      $k = Zk,
      al = function (a, b, c) {
        return Rb(a, b, c, 0);
      },
      bl = al,
      Sb = function (a, b, c, d) {
        if (c)
          if (((a = k.getVertexAttrib(a, b)), 34975 == b)) r[c >> 2] = a && a.name;
          else if ("number" == typeof a || "boolean" == typeof a)
            switch (d) {
              case 0:
                r[c >> 2] = a;
                break;
              case 2:
                G[c >> 2] = a;
                break;
              case 5:
                r[c >> 2] = Math.fround(a);
            }
          else
            for (b = 0; b < a.length; b++)
              switch (d) {
                case 0:
                  r[(c + 4 * b) >> 2] = a[b];
                  break;
                case 2:
                  G[(c + 4 * b) >> 2] = a[b];
                  break;
                case 5:
                  r[(c + 4 * b) >> 2] = Math.fround(a[b]);
              }
        else m.recordError(1281);
      },
      Rc = function (a, b, c) {
        Sb(a, b, c, 0);
      },
      cl = Rc,
      dl = Rc,
      el = dl,
      fl = function (a, b, c) {
        c ? (r[c >> 2] = k.getVertexAttribOffset(a, b)) : m.recordError(1281);
      },
      gl = fl,
      hl = function (a, b, c) {
        Sb(a, b, c, 2);
      },
      il = hl,
      jl = function (a, b, c) {
        Sb(a, b, c, 5);
      },
      kl = jl,
      ll = Ld,
      ml = function (a, b, c) {
        for (var d = ob[b], e = 0; e < b; e++) d[e] = r[(c + 4 * e) >> 2];
        k.invalidateFramebuffer(a, d);
      },
      nl = ml,
      ol = function (a, b, c, d, e, f, g) {
        for (var l = ob[b], n = 0; n < b; n++) l[n] = r[(c + 4 * n) >> 2];
        k.invalidateSubFramebuffer(a, l, d, e, f, g);
      },
      pl = ol,
      ql = function (a) {
        return (a = m.buffers[a]) ? k.isBuffer(a) : 0;
      },
      rl = ql,
      sl = Md,
      tl = function (a) {
        return (a = m.framebuffers[a]) ? k.isFramebuffer(a) : 0;
      },
      ul = tl,
      vl = function (a) {
        return (a = m.programs[a]) ? k.isProgram(a) : 0;
      },
      wl = vl,
      xl = function (a) {
        return (a = m.queries[a]) ? k.isQuery(a) : 0;
      },
      yl = xl,
      zl = function (a) {
        return (a = m.queries[a]) ? k.disjointTimerQueryExt.isQueryEXT(a) : 0;
      },
      Al = zl,
      Bl = function (a) {
        return (a = m.renderbuffers[a]) ? k.isRenderbuffer(a) : 0;
      },
      Cl = Bl,
      Dl = function (a) {
        return (a = m.samplers[a]) ? k.isSampler(a) : 0;
      },
      El = Dl,
      Fl = function (a) {
        return (a = m.shaders[a]) ? k.isShader(a) : 0;
      },
      Gl = Fl,
      Hl = function (a) {
        return k.isSync(m.syncs[a]);
      },
      Il = Hl,
      Jl = function (a) {
        return (a = m.textures[a]) ? k.isTexture(a) : 0;
      },
      Kl = Jl,
      Ll = function (a) {
        return k.isTransformFeedback(m.transformFeedbacks[a]);
      },
      Ml = Ll,
      Sc = function (a) {
        return (a = m.vaos[a]) ? k.isVertexArray(a) : 0;
      },
      Nl = Sc,
      Ol = Sc,
      Pl = Ol,
      Ql = Nd,
      Rl = function (a) {
        a = m.programs[a];
        k.linkProgram(a);
        a.uniformLocsById = 0;
        a.uniformSizeAndIdsByName = {};
      },
      Sl = Rl,
      Tl = Od,
      Ul = function (a, b) {
        3317 == a && (m.unpackAlignment = b);
        k.pixelStorei(a, b);
      },
      Vl = Ul,
      Wl = Pd,
      Xl = function () {
        m.recordError(1280);
      },
      Yl = Xl,
      Zl = function () {
        m.recordError(1280);
      },
      $l = Zl,
      am = function (a, b) {
        k.disjointTimerQueryExt.queryCounterEXT(m.queries[a], b);
      },
      bm = am,
      cm = Qd,
      za = function (a) {
        a -= 5120;
        return 0 == a
          ? V
          : 1 == a
          ? K
          : 2 == a
          ? qa
          : 4 == a
          ? r
          : 6 == a
          ? G
          : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a
          ? O
          : Ca;
      },
      Aa = function (a) {
        return 31 - Math.clz32(a.BYTES_PER_ELEMENT);
      },
      Tb = function (a, b, c, d, e) {
        a = za(a);
        var f = Aa(a),
          g = 1 << f,
          l = { 5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4, 26917: 2, 26918: 2, 29846: 3, 29847: 4 };
        b = l[b - 6402] || 1;
        g *= b;
        b = m.unpackAlignment;
        c *= g;
        c = (c + b - 1) & -b;
        d *= c;
        return a.subarray(e >> f, (e + d) >> f);
      },
      dm = function (a, b, c, d, e, f, g) {
        if (2 <= m.currentContext.version)
          if (k.currentPixelPackBufferBinding) k.readPixels(a, b, c, d, e, f, g);
          else {
            var l = za(f);
            k.readPixels(a, b, c, d, e, f, l, g >> Aa(l));
          }
        else (g = Tb(f, e, c, d, g, e)) ? k.readPixels(a, b, c, d, e, f, g) : m.recordError(1280);
      },
      em = dm,
      fm = function () {},
      gm = fm,
      hm = Rd,
      im = Sd,
      jm = Td,
      km = function (a, b) {
        k.sampleCoverage(a, !!b);
      },
      lm = km,
      mm = function (a, b, c) {
        k.samplerParameterf(m.samplers[a], b, c);
      },
      nm = mm,
      om = function (a, b, c) {
        c = G[c >> 2];
        k.samplerParameterf(m.samplers[a], b, c);
      },
      pm = om,
      qm = function (a, b, c) {
        k.samplerParameteri(m.samplers[a], b, c);
      },
      rm = qm,
      sm = function (a, b, c) {
        c = r[c >> 2];
        k.samplerParameteri(m.samplers[a], b, c);
      },
      tm = sm,
      um = Ud,
      vm = function () {
        m.recordError(1280);
      },
      wm = vm,
      xm = function (a, b, c, d) {
        b = m.getSource(a, b, c, d);
        k.shaderSource(m.shaders[a], b);
      },
      ym = xm,
      zm = Vd,
      Am = Wd,
      Bm = Xd,
      Cm = Yd,
      Dm = Zd,
      Em = $d,
      Fm = function (a, b, c, d, e, f, g, l, n) {
        if (2 <= m.currentContext.version)
          if (k.currentPixelUnpackBufferBinding) k.texImage2D(a, b, c, d, e, f, g, l, n);
          else if (n) {
            var v = za(l);
            k.texImage2D(a, b, c, d, e, f, g, l, v, n >> Aa(v));
          } else k.texImage2D(a, b, c, d, e, f, g, l, null);
        else k.texImage2D(a, b, c, d, e, f, g, l, n ? Tb(l, g, d, e, n, c) : null);
      },
      Gm = Fm,
      Hm = function (a, b, c, d, e, f, g, l, n, v) {
        if (k.currentPixelUnpackBufferBinding) k.texImage3D(a, b, c, d, e, f, g, l, n, v);
        else if (v) {
          var t = za(n);
          k.texImage3D(a, b, c, d, e, f, g, l, n, t, v >> Aa(t));
        } else k.texImage3D(a, b, c, d, e, f, g, l, n, null);
      },
      Im = Hm,
      Jm = ae,
      Km = function (a, b, c) {
        c = G[c >> 2];
        k.texParameterf(a, b, c);
      },
      Lm = Km,
      Mm = be,
      Nm = function (a, b, c) {
        c = r[c >> 2];
        k.texParameteri(a, b, c);
      },
      Om = Nm,
      Pm = ce,
      Qm = de,
      Rm = function (a, b, c, d, e, f, g, l, n) {
        if (2 <= m.currentContext.version)
          if (k.currentPixelUnpackBufferBinding) k.texSubImage2D(a, b, c, d, e, f, g, l, n);
          else if (n) {
            var v = za(l);
            k.texSubImage2D(a, b, c, d, e, f, g, l, v, n >> Aa(v));
          } else k.texSubImage2D(a, b, c, d, e, f, g, l, null);
        else (v = null), n && (v = Tb(l, g, e, f, n, 0)), k.texSubImage2D(a, b, c, d, e, f, g, l, v);
      },
      Sm = Rm,
      Tm = function (a, b, c, d, e, f, g, l, n, v, t) {
        if (k.currentPixelUnpackBufferBinding) k.texSubImage3D(a, b, c, d, e, f, g, l, n, v, t);
        else if (t) {
          var F = za(v);
          k.texSubImage3D(a, b, c, d, e, f, g, l, n, v, F, t >> Aa(F));
        } else k.texSubImage3D(a, b, c, d, e, f, g, l, n, v, null);
      },
      Um = Tm,
      Vm = function (a, b, c, d) {
        a = m.programs[a];
        for (var e = [], f = 0; f < b; f++) e.push(T(r[(c + 4 * f) >> 2]));
        k.transformFeedbackVaryings(a, e, d);
      },
      Wm = Vm,
      Xm = function (a, b) {
        k.uniform1f(L(a), b);
      },
      Ym = Xm,
      pa = [],
      Zm = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform1fv(L(a), G, c >> 2, b);
        else {
          if (288 >= b) for (var d = pa[b - 1], e = 0; e < b; ++e) d[e] = G[(c + 4 * e) >> 2];
          else d = G.subarray(c >> 2, (c + 4 * b) >> 2);
          k.uniform1fv(L(a), d);
        }
      },
      $m = Zm,
      an = function (a, b) {
        k.uniform1i(L(a), b);
      },
      bn = an,
      Xa = [],
      cn = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform1iv(L(a), r, c >> 2, b);
        else {
          if (288 >= b) for (var d = Xa[b - 1], e = 0; e < b; ++e) d[e] = r[(c + 4 * e) >> 2];
          else d = r.subarray(c >> 2, (c + 4 * b) >> 2);
          k.uniform1iv(L(a), d);
        }
      },
      dn = cn,
      en = function (a, b) {
        k.uniform1ui(L(a), b);
      },
      fn = en,
      gn = function (a, b, c) {
        b && k.uniform1uiv(L(a), O, c >> 2, b);
      },
      hn = gn,
      jn = function (a, b, c) {
        k.uniform2f(L(a), b, c);
      },
      kn = jn,
      ln = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform2fv(L(a), G, c >> 2, 2 * b);
        else {
          if (144 >= b)
            for (var d = pa[2 * b - 1], e = 0; e < 2 * b; e += 2) (d[e] = G[(c + 4 * e) >> 2]), (d[e + 1] = G[(c + (4 * e + 4)) >> 2]);
          else d = G.subarray(c >> 2, (c + 8 * b) >> 2);
          k.uniform2fv(L(a), d);
        }
      },
      mn = ln,
      nn = function (a, b, c) {
        k.uniform2i(L(a), b, c);
      },
      on = nn,
      pn = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform2iv(L(a), r, c >> 2, 2 * b);
        else {
          if (144 >= b)
            for (var d = Xa[2 * b - 1], e = 0; e < 2 * b; e += 2) (d[e] = r[(c + 4 * e) >> 2]), (d[e + 1] = r[(c + (4 * e + 4)) >> 2]);
          else d = r.subarray(c >> 2, (c + 8 * b) >> 2);
          k.uniform2iv(L(a), d);
        }
      },
      qn = pn,
      rn = function (a, b, c) {
        k.uniform2ui(L(a), b, c);
      },
      sn = rn,
      tn = function (a, b, c) {
        b && k.uniform2uiv(L(a), O, c >> 2, 2 * b);
      },
      un = tn,
      vn = function (a, b, c, d) {
        k.uniform3f(L(a), b, c, d);
      },
      wn = vn,
      xn = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform3fv(L(a), G, c >> 2, 3 * b);
        else {
          if (96 >= b)
            for (var d = pa[3 * b - 1], e = 0; e < 3 * b; e += 3)
              (d[e] = G[(c + 4 * e) >> 2]), (d[e + 1] = G[(c + (4 * e + 4)) >> 2]), (d[e + 2] = G[(c + (4 * e + 8)) >> 2]);
          else d = G.subarray(c >> 2, (c + 12 * b) >> 2);
          k.uniform3fv(L(a), d);
        }
      },
      yn = xn,
      zn = function (a, b, c, d) {
        k.uniform3i(L(a), b, c, d);
      },
      An = zn,
      Bn = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform3iv(L(a), r, c >> 2, 3 * b);
        else {
          if (96 >= b)
            for (var d = Xa[3 * b - 1], e = 0; e < 3 * b; e += 3)
              (d[e] = r[(c + 4 * e) >> 2]), (d[e + 1] = r[(c + (4 * e + 4)) >> 2]), (d[e + 2] = r[(c + (4 * e + 8)) >> 2]);
          else d = r.subarray(c >> 2, (c + 12 * b) >> 2);
          k.uniform3iv(L(a), d);
        }
      },
      Cn = Bn,
      Dn = function (a, b, c, d) {
        k.uniform3ui(L(a), b, c, d);
      },
      En = Dn,
      Fn = function (a, b, c) {
        b && k.uniform3uiv(L(a), O, c >> 2, 3 * b);
      },
      Gn = Fn,
      Hn = function (a, b, c, d, e) {
        k.uniform4f(L(a), b, c, d, e);
      },
      In = Hn,
      Jn = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform4fv(L(a), G, c >> 2, 4 * b);
        else {
          if (72 >= b) {
            var d = pa[4 * b - 1],
              e = G;
            c >>= 2;
            for (var f = 0; f < 4 * b; f += 4) {
              var g = c + f;
              d[f] = e[g];
              d[f + 1] = e[g + 1];
              d[f + 2] = e[g + 2];
              d[f + 3] = e[g + 3];
            }
          } else d = G.subarray(c >> 2, (c + 16 * b) >> 2);
          k.uniform4fv(L(a), d);
        }
      },
      Kn = Jn,
      Ln = function (a, b, c, d, e) {
        k.uniform4i(L(a), b, c, d, e);
      },
      Mn = Ln,
      Nn = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform4iv(L(a), r, c >> 2, 4 * b);
        else {
          if (72 >= b)
            for (var d = Xa[4 * b - 1], e = 0; e < 4 * b; e += 4)
              (d[e] = r[(c + 4 * e) >> 2]),
                (d[e + 1] = r[(c + (4 * e + 4)) >> 2]),
                (d[e + 2] = r[(c + (4 * e + 8)) >> 2]),
                (d[e + 3] = r[(c + (4 * e + 12)) >> 2]);
          else d = r.subarray(c >> 2, (c + 16 * b) >> 2);
          k.uniform4iv(L(a), d);
        }
      },
      On = Nn,
      Pn = function (a, b, c, d, e) {
        k.uniform4ui(L(a), b, c, d, e);
      },
      Qn = Pn,
      Rn = function (a, b, c) {
        b && k.uniform4uiv(L(a), O, c >> 2, 4 * b);
      },
      Sn = Rn,
      Tn = function (a, b, c) {
        a = m.programs[a];
        k.uniformBlockBinding(a, b, c);
      },
      Un = Tn,
      Vn = function (a, b, c, d) {
        if (2 <= m.currentContext.version) b && k.uniformMatrix2fv(L(a), !!c, G, d >> 2, 4 * b);
        else {
          if (72 >= b)
            for (var e = pa[4 * b - 1], f = 0; f < 4 * b; f += 4)
              (e[f] = G[(d + 4 * f) >> 2]),
                (e[f + 1] = G[(d + (4 * f + 4)) >> 2]),
                (e[f + 2] = G[(d + (4 * f + 8)) >> 2]),
                (e[f + 3] = G[(d + (4 * f + 12)) >> 2]);
          else e = G.subarray(d >> 2, (d + 16 * b) >> 2);
          k.uniformMatrix2fv(L(a), !!c, e);
        }
      },
      Wn = Vn,
      Xn = function (a, b, c, d) {
        b && k.uniformMatrix2x3fv(L(a), !!c, G, d >> 2, 6 * b);
      },
      Yn = Xn,
      Zn = function (a, b, c, d) {
        b && k.uniformMatrix2x4fv(L(a), !!c, G, d >> 2, 8 * b);
      },
      $n = Zn,
      ao = function (a, b, c, d) {
        if (2 <= m.currentContext.version) b && k.uniformMatrix3fv(L(a), !!c, G, d >> 2, 9 * b);
        else {
          if (32 >= b)
            for (var e = pa[9 * b - 1], f = 0; f < 9 * b; f += 9)
              (e[f] = G[(d + 4 * f) >> 2]),
                (e[f + 1] = G[(d + (4 * f + 4)) >> 2]),
                (e[f + 2] = G[(d + (4 * f + 8)) >> 2]),
                (e[f + 3] = G[(d + (4 * f + 12)) >> 2]),
                (e[f + 4] = G[(d + (4 * f + 16)) >> 2]),
                (e[f + 5] = G[(d + (4 * f + 20)) >> 2]),
                (e[f + 6] = G[(d + (4 * f + 24)) >> 2]),
                (e[f + 7] = G[(d + (4 * f + 28)) >> 2]),
                (e[f + 8] = G[(d + (4 * f + 32)) >> 2]);
          else e = G.subarray(d >> 2, (d + 36 * b) >> 2);
          k.uniformMatrix3fv(L(a), !!c, e);
        }
      },
      bo = ao,
      co = function (a, b, c, d) {
        b && k.uniformMatrix3x2fv(L(a), !!c, G, d >> 2, 6 * b);
      },
      eo = co,
      fo = function (a, b, c, d) {
        b && k.uniformMatrix3x4fv(L(a), !!c, G, d >> 2, 12 * b);
      },
      go = fo,
      ho = function (a, b, c, d) {
        if (2 <= m.currentContext.version) b && k.uniformMatrix4fv(L(a), !!c, G, d >> 2, 16 * b);
        else {
          if (18 >= b) {
            var e = pa[16 * b - 1],
              f = G;
            d >>= 2;
            for (var g = 0; g < 16 * b; g += 16) {
              var l = d + g;
              e[g] = f[l];
              e[g + 1] = f[l + 1];
              e[g + 2] = f[l + 2];
              e[g + 3] = f[l + 3];
              e[g + 4] = f[l + 4];
              e[g + 5] = f[l + 5];
              e[g + 6] = f[l + 6];
              e[g + 7] = f[l + 7];
              e[g + 8] = f[l + 8];
              e[g + 9] = f[l + 9];
              e[g + 10] = f[l + 10];
              e[g + 11] = f[l + 11];
              e[g + 12] = f[l + 12];
              e[g + 13] = f[l + 13];
              e[g + 14] = f[l + 14];
              e[g + 15] = f[l + 15];
            }
          } else e = G.subarray(d >> 2, (d + 64 * b) >> 2);
          k.uniformMatrix4fv(L(a), !!c, e);
        }
      },
      io = ho,
      jo = function (a, b, c, d) {
        b && k.uniformMatrix4x2fv(L(a), !!c, G, d >> 2, 8 * b);
      },
      ko = jo,
      lo = function (a, b, c, d) {
        b && k.uniformMatrix4x3fv(L(a), !!c, G, d >> 2, 12 * b);
      },
      mo = lo,
      no = function (a) {
        a = m.programs[a];
        k.useProgram(a);
        k.currentProgram = a;
      },
      oo = no,
      po = function (a) {
        k.validateProgram(m.programs[a]);
      },
      qo = po,
      ro = ee,
      so = function (a, b) {
        k.vertexAttrib1f(a, G[b >> 2]);
      },
      to = so,
      uo = fe,
      vo = function (a, b) {
        k.vertexAttrib2f(a, G[b >> 2], G[(b + 4) >> 2]);
      },
      wo = vo,
      xo = ge,
      yo = function (a, b) {
        k.vertexAttrib3f(a, G[b >> 2], G[(b + 4) >> 2], G[(b + 8) >> 2]);
      },
      zo = yo,
      Ao = he,
      Bo = function (a, b) {
        k.vertexAttrib4f(a, G[b >> 2], G[(b + 4) >> 2], G[(b + 8) >> 2], G[(b + 12) >> 2]);
      },
      Co = Bo,
      Ya = function (a, b) {
        k.vertexAttribDivisor(a, b);
      },
      Do = Ya,
      Eo = Ya,
      Fo = Eo,
      Go = Ya,
      Ho = Go,
      Io = Ya,
      Jo = Io,
      Ko = Ya,
      Lo = Ko,
      Mo = ie,
      No = function (a, b) {
        k.vertexAttribI4i(a, r[b >> 2], r[(b + 4) >> 2], r[(b + 8) >> 2], r[(b + 12) >> 2]);
      },
      Oo = No,
      Po = je,
      Qo = function (a, b) {
        k.vertexAttribI4ui(a, O[b >> 2], O[(b + 4) >> 2], O[(b + 8) >> 2], O[(b + 12) >> 2]);
      },
      Ro = Qo,
      So = function (a, b, c, d, e) {
        k.vertexAttribIPointer(a, b, c, d, e);
      },
      To = So,
      Uo = function (a, b, c, d, e, f) {
        k.vertexAttribPointer(a, b, c, !!d, e, f);
      },
      Vo = Uo,
      Wo = ke,
      Xo = function (a, b, c, d) {
        c = (c >>> 0) + 4294967296 * d;
        k.waitSync(m.syncs[a], b, c);
      },
      Yo = Xo,
      Tc = function (a, b) {
        if (0 >= a) return a;
        var c = 32 >= b ? Math.abs(1 << (b - 1)) : Math.pow(2, b - 1);
        a >= c && (32 >= b || a > c) && (a = -2 * c + a);
        return a;
      },
      Uc = function (a, b) {
        return 0 <= a ? a : 32 >= b ? 2 * Math.abs(1 << (b - 1)) + a : Math.pow(2, b) + a;
      },
      Zo = function (a) {
        for (var b = a; K[b]; ) ++b;
        return b - a;
      },
      $o = function (a, b) {
        function c(S) {
          var fa = d;
          ("double" === S || "i64" === S) && fa & 7 && (fa += 4);
          d = fa;
          "double" === S
            ? ((S = ab[d >> 3]), (d += 8))
            : "i64" == S
            ? ((S = [r[d >> 2], r[(d + 4) >> 2]]), (d += 8))
            : ((S = r[d >> 2]), (d += 4));
          return S;
        }
        for (var d = b, e = [], f, g; ; ) {
          var l = a;
          f = V[a >> 0];
          if (0 === f) break;
          g = V[(a + 1) >> 0];
          if (37 == f) {
            var n = !1,
              v = (b = !1),
              t = !1,
              F = !1;
            a: for (;;) {
              switch (g) {
                case 43:
                  n = !0;
                  break;
                case 45:
                  b = !0;
                  break;
                case 35:
                  v = !0;
                  break;
                case 48:
                  if (t) break a;
                  else {
                    t = !0;
                    break;
                  }
                case 32:
                  F = !0;
                  break;
                default:
                  break a;
              }
              a++;
              g = V[(a + 1) >> 0];
            }
            var M = 0;
            if (42 == g) (M = c("i32")), a++, (g = V[(a + 1) >> 0]);
            else for (; 48 <= g && 57 >= g; ) (M = 10 * M + (g - 48)), a++, (g = V[(a + 1) >> 0]);
            var p = !1,
              y = -1;
            if (46 == g) {
              y = 0;
              p = !0;
              a++;
              g = V[(a + 1) >> 0];
              if (42 == g) (y = c("i32")), a++;
              else
                for (;;) {
                  g = V[(a + 1) >> 0];
                  if (48 > g || 57 < g) break;
                  y = 10 * y + (g - 48);
                  a++;
                }
              g = V[(a + 1) >> 0];
            }
            0 > y && ((y = 6), (p = !1));
            switch (String.fromCharCode(g)) {
              case "h":
                g = V[(a + 2) >> 0];
                if (104 == g) {
                  a++;
                  var B = 1;
                } else B = 2;
                break;
              case "l":
                g = V[(a + 2) >> 0];
                108 == g ? (a++, (B = 8)) : (B = 4);
                break;
              case "L":
              case "q":
              case "j":
                B = 8;
                break;
              case "z":
              case "t":
              case "I":
                B = 4;
                break;
              default:
                B = null;
            }
            B && a++;
            g = V[(a + 1) >> 0];
            switch (String.fromCharCode(g)) {
              case "d":
              case "i":
              case "u":
              case "o":
              case "x":
              case "X":
              case "p":
                l = 100 == g || 105 == g;
                B = B || 4;
                f = c("i" + 8 * B);
                8 == B && (f = 117 == g ? (f[0] >>> 0) + 4294967296 * (f[1] >>> 0) : (f[0] >>> 0) + 4294967296 * f[1]);
                if (4 >= B) {
                  var N = Math.pow(256, B) - 1;
                  f = (l ? Tc : Uc)(f & N, 8 * B);
                }
                N = Math.abs(f);
                l = "";
                if (100 == g || 105 == g) var C = Tc(f, 8 * B).toString(10);
                else if (117 == g) (C = Uc(f, 8 * B).toString(10)), (f = Math.abs(f));
                else if (111 == g) C = (v ? "0" : "") + N.toString(8);
                else if (120 == g || 88 == g) {
                  l = v && 0 != f ? "0x" : "";
                  if (0 > f) {
                    f = -f;
                    C = (N - 1).toString(16);
                    N = [];
                    for (v = 0; v < C.length; v++) N.push((15 - parseInt(C[v], 16)).toString(16));
                    for (C = N.join(""); C.length < 2 * B; ) C = "f" + C;
                  } else C = N.toString(16);
                  88 == g && ((l = l.toUpperCase()), (C = C.toUpperCase()));
                } else 112 == g && (0 === N ? (C = "(nil)") : ((l = "0x"), (C = N.toString(16))));
                if (p) for (; C.length < y; ) C = "0" + C;
                0 <= f && (n ? (l = "+" + l) : F && (l = " " + l));
                "-" == C.charAt(0) && ((l = "-" + l), (C = C.substr(1)));
                for (; l.length + C.length < M; ) b ? (C += " ") : t ? (C = "0" + C) : (l = " " + l);
                C = l + C;
                C.split("").forEach(function (S) {
                  e.push(S.charCodeAt(0));
                });
                break;
              case "f":
              case "F":
              case "e":
              case "E":
              case "g":
              case "G":
                f = c("double");
                if (isNaN(f)) (C = "nan"), (t = !1);
                else if (isFinite(f)) {
                  p = !1;
                  B = Math.min(y, 20);
                  if (103 == g || 71 == g)
                    (p = !0),
                      (y = y || 1),
                      (B = parseInt(f.toExponential(B).split("e")[1], 10)),
                      y > B && -4 <= B
                        ? ((g = (103 == g ? "f" : "F").charCodeAt(0)), (y -= B + 1))
                        : ((g = (103 == g ? "e" : "E").charCodeAt(0)), y--),
                      (B = Math.min(y, 20));
                  if (101 == g || 69 == g) (C = f.toExponential(B)), /[eE][-+]\d$/.test(C) && (C = C.slice(0, -1) + "0" + C.slice(-1));
                  else if (102 == g || 70 == g) (C = f.toFixed(B)), 0 === f && (0 > f || (0 === f && -Infinity === 1 / f)) && (C = "-" + C);
                  l = C.split("e");
                  if (p && !v)
                    for (; 1 < l[0].length && l[0].includes(".") && ("0" == l[0].slice(-1) || "." == l[0].slice(-1)); )
                      l[0] = l[0].slice(0, -1);
                  else for (v && -1 == C.indexOf(".") && (l[0] += "."); y > B++; ) l[0] += "0";
                  C = l[0] + (1 < l.length ? "e" + l[1] : "");
                  69 == g && (C = C.toUpperCase());
                  0 <= f && (n ? (C = "+" + C) : F && (C = " " + C));
                } else (C = (0 > f ? "-" : "") + "inf"), (t = !1);
                for (; C.length < M; ) C = b ? C + " " : !t || ("-" != C[0] && "+" != C[0]) ? (t ? "0" : " ") + C : C[0] + "0" + C.slice(1);
                97 > g && (C = C.toUpperCase());
                C.split("").forEach(function (S) {
                  e.push(S.charCodeAt(0));
                });
                break;
              case "s":
                t = (n = c("i8*")) ? Zo(n) : 6;
                p && (t = Math.min(t, y));
                if (!b) for (; t < M--; ) e.push(32);
                if (n) for (v = 0; v < t; v++) e.push(K[n++ >> 0]);
                else e = e.concat(bc("(null)".substr(0, t), !0));
                if (b) for (; t < M--; ) e.push(32);
                break;
              case "c":
                for (b && e.push(c("i8")); 0 < --M; ) e.push(32);
                b || e.push(c("i8"));
                break;
              case "n":
                b = c("i32*");
                r[b >> 2] = e.length;
                break;
              case "%":
                e.push(f);
                break;
              default:
                for (v = l; v < a + 2; v++) e.push(V[v >> 0]);
            }
            a += 2;
          } else e.push(f), (a += 1);
        }
        return e;
      },
      ap = function (a, b, c) {
        b = $o(b, c);
        c = b = Db(b, 0);
        if (a & 24) {
          b = c = c.replace(/\s+$/, "");
          c = 0 < c.length ? "\n" : "";
          var d = a,
            e = zb(),
            f = e.lastIndexOf("_emscripten_log"),
            g = e.lastIndexOf("_emscripten_get_callstack");
          f = e.indexOf("\n", Math.max(f, g)) + 1;
          e = e.slice(f);
          d & 8 &&
            "undefined" == typeof emscripten_source_map &&
            (Ta(
              'Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'
            ),
            (d ^= 8),
            (d |= 16));
          f = e.split("\n");
          e = "";
          g = RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
          var l = RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),
            n = RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
          for (B in f) {
            var v = f[B],
              t;
            if ((t = n.exec(v)) && 5 == t.length) {
              v = t[1];
              var F = t[2];
              var M = t[3];
              t = t[4];
            } else if (((t = g.exec(v)) || (t = l.exec(v)), t && 4 <= t.length)) (v = t[1]), (F = t[2]), (M = t[3]), (t = t[4] | 0);
            else {
              e += v + "\n";
              continue;
            }
            var p = !1;
            if (d & 8) {
              var y = emscripten_source_map.originalPositionFor({ line: M, column: t });
              if ((p = y && y.source))
                d & 64 && (y.source = y.source.substring(y.source.replace(/\\/g, "/").lastIndexOf("/") + 1)),
                  (e += "    at " + v + " (" + y.source + ":" + y.line + ":" + y.column + ")\n");
            }
            if (d & 16 || !p)
              d & 64 && (F = F.substring(F.replace(/\\/g, "/").lastIndexOf("/") + 1)),
                (e += (p ? "     = " + v : "    at " + v) + (" (" + F + ":" + M + ":" + t + ")\n"));
          }
          var B = (e = e.replace(/\s+$/, ""));
          c = b + (c + B);
        }
        a & 1
          ? a & 4
            ? console.error(c)
            : a & 2
            ? console.warn(c)
            : a & 512
            ? console.info(c)
            : a & 256
            ? console.debug(c)
            : console.log(c)
          : a & 6
          ? ka(c)
          : oc(c);
      },
      bp = function (a, b, c) {
        return K.copyWithin(a, b, b + c);
      },
      cp = function () {
        E("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER");
        return 0;
      },
      dp = function (a) {
        var b = K.length;
        a >>>= 0;
        if (2147483648 < a) return !1;
        for (var c = 1; 4 >= c; c *= 2) {
          var d = b * (1 + 0.2 / c);
          d = Math.min(d, a + 100663296);
          var e = Math,
            f = e.min;
          d = Math.max(a, d);
          d += (65536 - (d % 65536)) % 65536;
          e = f.call(e, 2147483648, d);
          a: {
            f = $a.buffer;
            e = (e - f.byteLength + 65535) / 65536;
            try {
              $a.grow(e);
              A();
              var g = 1;
              break a;
            } catch (l) {}
            g = void 0;
          }
          if (g) return !0;
        }
        return !1;
      },
      ib = function () {
        E("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER");
        return 0;
      },
      xa = {},
      cc = function (a) {
        a.forEach(function (b) {
          var c = ib(b);
          c && (xa[c] = b);
        });
      },
      ep = function (a, b, c) {
        if (xa.last_addr == a) var d = xa.last_stack;
        else (d = zb().split("\n")), "Error" == d[0] && d.shift(), cc(d);
        for (var e = 3; d[e] && ib(d[e]) != a; ) ++e;
        for (a = 0; a < c && d[a + e]; ++a) r[(b + 4 * a) >> 2] = ib(d[a + e]);
        return a;
      },
      P = {
        inEventHandler: 0,
        removeAllEventListeners: function () {
          for (var a = P.eventHandlers.length - 1; 0 <= a; --a) P._removeHandler(a);
          P.eventHandlers = [];
          P.deferredCalls = [];
        },
        registerRemoveEventListeners: function () {
          P.removeEventListenersRegistered || (re.push(P.removeAllEventListeners), (P.removeEventListenersRegistered = !0));
        },
        deferredCalls: [],
        deferCall: function (a, b, c) {
          function d(g, l) {
            if (g.length != l.length) return !1;
            for (var n in g) if (g[n] != l[n]) return !1;
            return !0;
          }
          for (var e in P.deferredCalls) {
            var f = P.deferredCalls[e];
            if (f.targetFunction == a && d(f.argsList, c)) return;
          }
          P.deferredCalls.push({ targetFunction: a, precedence: b, argsList: c });
          P.deferredCalls.sort(function (g, l) {
            return g.precedence < l.precedence;
          });
        },
        removeDeferredCalls: function (a) {
          for (var b = 0; b < P.deferredCalls.length; ++b) P.deferredCalls[b].targetFunction == a && (P.deferredCalls.splice(b, 1), --b);
        },
        canPerformEventHandlerRequests: function () {
          return navigator.userActivation
            ? navigator.userActivation.isActive
            : P.inEventHandler && P.currentEventHandler.allowsDeferredCalls;
        },
        runDeferredCalls: function () {
          if (P.canPerformEventHandlerRequests())
            for (var a = 0; a < P.deferredCalls.length; ++a) {
              var b = P.deferredCalls[a];
              P.deferredCalls.splice(a, 1);
              --a;
              b.targetFunction.apply(null, b.argsList);
            }
        },
        eventHandlers: [],
        removeAllHandlersOnTarget: function (a, b) {
          for (var c = 0; c < P.eventHandlers.length; ++c)
            P.eventHandlers[c].target != a || (b && b != P.eventHandlers[c].eventTypeString) || P._removeHandler(c--);
        },
        _removeHandler: function (a) {
          var b = P.eventHandlers[a];
          b.target.removeEventListener(b.eventTypeString, b.eventListenerFunc, b.useCapture);
          P.eventHandlers.splice(a, 1);
        },
        registerOrRemoveHandler: function (a) {
          if (!a.target) return -4;
          var b = function (c) {
            ++P.inEventHandler;
            P.currentEventHandler = a;
            P.runDeferredCalls();
            a.handlerFunc(c);
            P.runDeferredCalls();
            --P.inEventHandler;
          };
          if (a.callbackfunc)
            (a.eventListenerFunc = b),
              a.target.addEventListener(a.eventTypeString, b, a.useCapture),
              P.eventHandlers.push(a),
              P.registerRemoveEventListeners();
          else
            for (b = 0; b < P.eventHandlers.length; ++b)
              P.eventHandlers[b].target == a.target && P.eventHandlers[b].eventTypeString == a.eventTypeString && P._removeHandler(b--);
          return 0;
        },
        getNodeNameForTarget: function (a) {
          return a ? (a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "") : "";
        },
        fullscreenEnabled: function () {
          return document.fullscreenEnabled || document.webkitFullscreenEnabled;
        }
      },
      fp = ["default", "low-power", "high-performance"],
      gp = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0],
      hp = function (a) {
        try {
          if (!a) return window;
          "number" == typeof a && (a = gp[a] || T(a));
          return "#window" === a
            ? window
            : "#document" === a
            ? document
            : "#screen" === a
            ? screen
            : "#canvas" === a
            ? h.canvas
            : "string" == typeof a
            ? document.getElementById(a)
            : a;
        } catch (b) {
          return null;
        }
      },
      ip = function (a, b) {
        b >>= 2;
        var c = r[b + 6];
        b = {
          alpha: !!r[b + 0],
          depth: !!r[b + 1],
          stencil: !!r[b + 2],
          antialias: !!r[b + 3],
          premultipliedAlpha: !!r[b + 4],
          preserveDrawingBuffer: !!r[b + 5],
          powerPreference: fp[c],
          failIfMajorPerformanceCaveat: !!r[b + 7],
          majorVersion: r[b + 8],
          minorVersion: r[b + 9],
          enableExtensionsByDefault: r[b + 10],
          explicitSwapControl: r[b + 11],
          proxyContextToMainThread: r[b + 12],
          renderViaOffscreenBackBuffer: r[b + 13]
        };
        "number" == typeof a && (a = T(a));
        a =
          a && "#canvas" !== a
            ? "undefined" != typeof m && m.offscreenCanvases[a]
              ? m.offscreenCanvases[a]
              : hp(a)
            : "undefined" != typeof m && m.offscreenCanvases.canvas
            ? m.offscreenCanvases.canvas
            : h.canvas;
        return !a || b.explicitSwapControl ? 0 : (a = m.createContext(a, b));
      },
      jp = ip,
      kp = function (a) {
        a >>= 2;
        for (var b = 0; 14 > b; ++b) r[a + b] = 0;
        r[a + 0] = r[a + 1] = r[a + 3] = r[a + 4] = r[a + 8] = r[a + 10] = 1;
      },
      lp = function (a) {
        return (a = m.makeContextCurrent(a)) ? 0 : -5;
      },
      rb = {},
      Za = function () {
        if (!Za.strings) {
          var a = (("object" == typeof navigator && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8";
          a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: a, _: Bb || "./this.program" };
          for (var b in rb) void 0 === rb[b] ? delete a[b] : (a[b] = rb[b]);
          var c = [];
          for (b in a) c.push(b + "=" + a[b]);
          Za.strings = c;
        }
        return Za.strings;
      },
      mp = function (a, b) {
        var c = 0;
        Za().forEach(function (d, e) {
          var f = b + c;
          O[(a + 4 * e) >> 2] = f;
          e = d;
          for (var g = 0; g < e.length; ++g) V[f++ >> 0] = e.charCodeAt(g);
          V[f >> 0] = 0;
          c += d.length + 1;
        });
        return 0;
      },
      np = function (a, b) {
        var c = Za();
        O[a >> 2] = c.length;
        var d = 0;
        c.forEach(function (e) {
          return (d += e.length + 1);
        });
        O[b >> 2] = d;
        return 0;
      },
      op = function () {
        return 52;
      },
      pp = function () {
        return 52;
      },
      qp = [null, [], []],
      rp = function (a, b, c, d) {
        for (var e = 0, f = 0; f < c; f++) {
          var g = O[b >> 2],
            l = O[(b + 4) >> 2];
          b += 8;
          for (var n = 0; n < l; n++) {
            var v = K[g + n],
              t = qp[a];
            0 === v || 10 === v ? ((1 === a ? oc : ka)(Db(t, 0)), (t.length = 0)) : t.push(v);
          }
          e += l;
        }
        O[d >> 2] = e;
        return 0;
      },
      sp = function () {
        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
          return function (d) {
            return crypto.getRandomValues(d);
          };
        if (Ga)
          try {
            var a = require("crypto"),
              b = a.randomFillSync;
            if (b)
              return function (d) {
                return a.randomFillSync(d);
              };
            var c = a.randomBytes;
            return function (d) {
              return d.set(c(d.byteLength)), d;
            };
          } catch (d) {}
        E("initRandomDevice");
      },
      Vc = function (a) {
        return (Vc = sp())(a);
      },
      tp = function (a, b) {
        Vc(K.subarray(a, a + b));
        return 0;
      },
      sb = function (a) {
        return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
      },
      Wc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Xc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      up = function (a, b, c, d) {
        function e(p, y, B) {
          for (p = "number" == typeof p ? p.toString() : p || ""; p.length < y; ) p = B[0] + p;
          return p;
        }
        function f(p, y) {
          return e(p, y, "0");
        }
        function g(p, y) {
          function B(C) {
            return 0 > C ? -1 : 0 < C ? 1 : 0;
          }
          var N;
          0 === (N = B(p.getFullYear() - y.getFullYear())) &&
            0 === (N = B(p.getMonth() - y.getMonth())) &&
            (N = B(p.getDate() - y.getDate()));
          return N;
        }
        function l(p) {
          switch (p.getDay()) {
            case 0:
              return new Date(p.getFullYear() - 1, 11, 29);
            case 1:
              return p;
            case 2:
              return new Date(p.getFullYear(), 0, 3);
            case 3:
              return new Date(p.getFullYear(), 0, 2);
            case 4:
              return new Date(p.getFullYear(), 0, 1);
            case 5:
              return new Date(p.getFullYear() - 1, 11, 31);
            case 6:
              return new Date(p.getFullYear() - 1, 11, 30);
          }
        }
        function n(p) {
          a: {
            var y = new Date(p.tm_year + 1900, 0, 1);
            p = p.tm_yday;
            for (y = new Date(y.getTime()); 0 < p; ) {
              var B = sb(y.getFullYear()),
                N = y.getMonth();
              B = (B ? Wc : Xc)[N];
              if (p > B - y.getDate())
                (p -= B - y.getDate() + 1), y.setDate(1), 11 > N ? y.setMonth(N + 1) : (y.setMonth(0), y.setFullYear(y.getFullYear() + 1));
              else {
                y.setDate(y.getDate() + p);
                p = y;
                break a;
              }
            }
            p = y;
          }
          N = new Date(p.getFullYear(), 0, 4);
          y = new Date(p.getFullYear() + 1, 0, 4);
          N = l(N);
          y = l(y);
          return 0 >= g(N, p) ? (0 >= g(y, p) ? p.getFullYear() + 1 : p.getFullYear()) : p.getFullYear() - 1;
        }
        var v = O[(d + 40) >> 2];
        d = {
          tm_sec: r[d >> 2],
          tm_min: r[(d + 4) >> 2],
          tm_hour: r[(d + 8) >> 2],
          tm_mday: r[(d + 12) >> 2],
          tm_mon: r[(d + 16) >> 2],
          tm_year: r[(d + 20) >> 2],
          tm_wday: r[(d + 24) >> 2],
          tm_yday: r[(d + 28) >> 2],
          tm_isdst: r[(d + 32) >> 2],
          tm_gmtoff: r[(d + 36) >> 2],
          tm_zone: v ? T(v) : ""
        };
        c = T(c);
        v = {
          "%c": "%a %b %d %H:%M:%S %Y",
          "%D": "%m/%d/%y",
          "%F": "%Y-%m-%d",
          "%h": "%b",
          "%r": "%I:%M:%S %p",
          "%R": "%H:%M",
          "%T": "%H:%M:%S",
          "%x": "%m/%d/%y",
          "%X": "%H:%M:%S",
          "%Ec": "%c",
          "%EC": "%C",
          "%Ex": "%m/%d/%y",
          "%EX": "%H:%M:%S",
          "%Ey": "%y",
          "%EY": "%Y",
          "%Od": "%d",
          "%Oe": "%e",
          "%OH": "%H",
          "%OI": "%I",
          "%Om": "%m",
          "%OM": "%M",
          "%OS": "%S",
          "%Ou": "%u",
          "%OU": "%U",
          "%OV": "%V",
          "%Ow": "%w",
          "%OW": "%W",
          "%Oy": "%y"
        };
        for (var t in v) c = c.replace(new RegExp(t, "g"), v[t]);
        var F = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          M = "January February March April May June July August September October November December".split(" ");
        v = {
          "%a": function (p) {
            return F[p.tm_wday].substring(0, 3);
          },
          "%A": function (p) {
            return F[p.tm_wday];
          },
          "%b": function (p) {
            return M[p.tm_mon].substring(0, 3);
          },
          "%B": function (p) {
            return M[p.tm_mon];
          },
          "%C": function (p) {
            p = p.tm_year + 1900;
            return f((p / 100) | 0, 2);
          },
          "%d": function (p) {
            return f(p.tm_mday, 2);
          },
          "%e": function (p) {
            return e(p.tm_mday, 2, " ");
          },
          "%g": function (p) {
            return n(p).toString().substring(2);
          },
          "%G": function (p) {
            return n(p);
          },
          "%H": function (p) {
            return f(p.tm_hour, 2);
          },
          "%I": function (p) {
            p = p.tm_hour;
            0 == p ? (p = 12) : 12 < p && (p -= 12);
            return f(p, 2);
          },
          "%j": function (p) {
            for (var y = p.tm_mday, B = sb(p.tm_year + 1900) ? Wc : Xc, N = 0, C = 0; C <= p.tm_mon - 1; N += B[C++]);
            p = N;
            return f(y + p, 3);
          },
          "%m": function (p) {
            return f(p.tm_mon + 1, 2);
          },
          "%M": function (p) {
            return f(p.tm_min, 2);
          },
          "%n": function () {
            return "\n";
          },
          "%p": function (p) {
            return 0 <= p.tm_hour && 12 > p.tm_hour ? "AM" : "PM";
          },
          "%S": function (p) {
            return f(p.tm_sec, 2);
          },
          "%t": function () {
            return "\t";
          },
          "%u": function (p) {
            return p.tm_wday || 7;
          },
          "%U": function (p) {
            p = p.tm_yday + 7 - p.tm_wday;
            return f(Math.floor(p / 7), 2);
          },
          "%V": function (p) {
            var y = Math.floor((p.tm_yday + 7 - ((p.tm_wday + 6) % 7)) / 7);
            2 >= (p.tm_wday + 371 - p.tm_yday - 2) % 7 && y++;
            if (y) 53 == y && ((B = (p.tm_wday + 371 - p.tm_yday) % 7), 4 == B || (3 == B && sb(p.tm_year)) || (y = 1));
            else {
              y = 52;
              var B = (p.tm_wday + 7 - p.tm_yday - 1) % 7;
              (4 == B || (5 == B && sb((p.tm_year % 400) - 1))) && y++;
            }
            return f(y, 2);
          },
          "%w": function (p) {
            return p.tm_wday;
          },
          "%W": function (p) {
            p = p.tm_yday + 7 - ((p.tm_wday + 6) % 7);
            return f(Math.floor(p / 7), 2);
          },
          "%y": function (p) {
            return (p.tm_year + 1900).toString().substring(2);
          },
          "%Y": function (p) {
            return p.tm_year + 1900;
          },
          "%z": function (p) {
            p = p.tm_gmtoff;
            var y = 0 <= p;
            p = Math.abs(p) / 60;
            p = (p / 60) * 100 + (p % 60);
            return (y ? "+" : "-") + String("0000" + p).slice(-4);
          },
          "%Z": function (p) {
            return p.tm_zone;
          },
          "%%": function () {
            return "%";
          }
        };
        c = c.replace(/%%/g, "\x00\x00");
        for (t in v) c.includes(t) && (c = c.replace(new RegExp(t, "g"), v[t](d)));
        c = c.replace(/\0\0/g, "%");
        t = bc(c, !1);
        if (t.length > b) return 0;
        V.set(t, a);
        return t.length - 1;
      },
      vp = function (a, b, c, d) {
        return up(a, b, c, d);
      },
      Yc = function (a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        this.name = "InternalError";
      };
    $jscomp.inherits(Yc, Error);
    var se = (h.InternalError = Yc);
    we();
    var Zc = function (a) {
      a = Error.call(this, a);
      this.message = a.message;
      "stack" in a && (this.stack = a.stack);
      this.name = "BindingError";
    };
    $jscomp.inherits(Zc, Error);
    var Na = (h.BindingError = Zc);
    Be();
    h.getInheritedInstanceCount = ye;
    h.getLiveInheritedInstances = ze;
    h.flushPendingDeletes = Gb;
    h.setDelayFunction = Ae;
    Ce();
    var Fe = (h.UnboundTypeError = Ee(Error, "UnboundTypeError"));
    gd();
    ha.allocated.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 });
    ha.reserved = ha.allocated.length;
    h.count_emval_handles = Ke;
    h.requestFullscreen = function (a, b) {
      return u.requestFullscreen(a, b);
    };
    h.requestAnimationFrame = function (a) {
      return u.requestAnimationFrame(a);
    };
    h.setCanvasSize = function (a, b, c) {
      return u.setCanvasSize(a, b, c);
    };
    h.pauseMainLoop = function () {
      return u.mainLoop.pause();
    };
    h.resumeMainLoop = function () {
      return u.mainLoop.resume();
    };
    h.getUserMedia = function () {
      return u.getUserMedia();
    };
    h.createContext = function (a, b, c, d) {
      return u.createContext(a, b, c, d);
    };
    for (var k, ca = 0; 32 > ca; ++ca) ob.push(Array(ca));
    var wp = new Float32Array(288);
    for (ca = 0; 288 > ca; ++ca) pa[ca] = wp.subarray(0, ca + 1);
    var xp = new Int32Array(288);
    for (ca = 0; 288 > ca; ++ca) Xa[ca] = xp.subarray(0, ca + 1);
    var $c = {
        B: ba,
        Ya: ia,
        Uc: te,
        N: ue,
        Sa: ve,
        sb: xe,
        e: Ge,
        g: He,
        c: Ie,
        d: Je,
        Pa: Le,
        i: Ne,
        b: Oe,
        L: Qe,
        u: Re,
        q: Te,
        j: Ue,
        H: Ve,
        z: bf,
        nd: cf,
        P: df,
        O: ef,
        s: ff,
        Db: gf,
        $a: hf,
        Va: jf,
        o: kf,
        E: lf,
        w: nf,
        f: Jb,
        A: of,
        x: qf,
        l: rf,
        n: sf,
        Qe: tf,
        ve: vf,
        m: wf,
        k: xf,
        p: yf,
        Ra: hd,
        a: zf,
        D: Df,
        Da: Hf,
        Ca: If,
        G: Jf,
        F: Kf,
        Fa: Lf,
        Ha: Mf,
        y: Nf,
        Ga: Of,
        Ia: Pf,
        Ea: Qf,
        Ja: Rf,
        Ka: Sf,
        Ba: W,
        v: Tf,
        h: Uf,
        Oa: Vf,
        M: Wf,
        C: Xf,
        Ta: Yf,
        r: Mb,
        ca: Zf,
        ba: ag,
        Sc: cg,
        sa: eg,
        zc: fg,
        aa: hg,
        $: jg,
        wc: lg,
        xc: ng,
        _: pg,
        Z: rg,
        Eb: tg,
        Y: vg,
        vb: xg,
        Ec: yg,
        ka: Ag,
        X: Bg,
        W: Cg,
        V: Dg,
        U: Eg,
        T: Fg,
        Hc: Gg,
        S: Ig,
        R: Kg,
        Q: Lg,
        Df: Mg,
        $b: Ng,
        ac: Pg,
        cc: Rg,
        bc: Tg,
        Cf: Ug,
        Bf: Vg,
        Af: Wg,
        Nb: Yg,
        zf: $g,
        yf: bh,
        xf: dh,
        Yc: fh,
        wf: hh,
        Xc: jh,
        Zb: kh,
        vf: lh,
        uf: mh,
        Zc: nh,
        tf: ph,
        sf: rh,
        rf: sh,
        qf: uh,
        pf: wh,
        of: yh,
        Vc: Ah,
        ua: Ch,
        nf: Eh,
        Gb: Gh,
        mf: Ih,
        Ob: Kh,
        lf: Mh,
        ub: Oh,
        Dc: Ph,
        ja: Rh,
        kf: Sh,
        jf: Uh,
        hf: Vh,
        gf: Xh,
        ff: Yh,
        ef: $h,
        df: bi,
        Sb: ci,
        fa: ei,
        db: gi,
        ed: ii,
        eb: ki,
        Oc: li,
        cd: ni,
        ga: pi,
        cf: qi,
        Rb: ri,
        ea: ti,
        bb: vi,
        cb: xi,
        dd: zi,
        ad: Bi,
        bf: Ci,
        af: Ei,
        Rc: Fi,
        ra: Hi,
        yc: Ii,
        Qb: Ki,
        $e: Li,
        _e: Mi,
        Ze: Oi,
        Ye: Qi,
        Fc: Si,
        Xe: Ti,
        We: Vi,
        Ue: Xi,
        Wc: Zi,
        va: aj,
        Te: cj,
        Hb: ej,
        Se: gj,
        tb: ij,
        Cc: jj,
        ia: lj,
        Ve: mj,
        Re: oj,
        Pe: qj,
        Ub: sj,
        Vb: uj,
        Xb: wj,
        Oe: yj,
        Ne: Aj,
        Me: Cj,
        Ib: Ej,
        Le: Gj,
        Ke: Ij,
        Je: Kj,
        lc: Mj,
        Ie: Oj,
        Jb: Qj,
        Lb: Sj,
        Ac: Uj,
        He: Wj,
        hb: Yj,
        ob: ak,
        Fe: ck,
        Ge: ek,
        ma: fk,
        oa: gk,
        la: ik,
        Pc: kk,
        na: mk,
        Qc: ok,
        pa: qk,
        Ee: sk,
        xb: uk,
        yb: wk,
        Ce: yk,
        Be: Ak,
        Ae: Ck,
        De: Ek,
        ze: Gk,
        _b: Ik,
        Kb: Kk,
        ye: Mk,
        xe: Ok,
        uc: Qk,
        Wb: Sk,
        Yb: Uk,
        te: Wk,
        we: Yk,
        ue: $k,
        mc: bl,
        sc: cl,
        rc: el,
        qe: gl,
        se: il,
        re: kl,
        pe: ll,
        lb: nl,
        kb: pl,
        oe: rl,
        ne: sl,
        me: ul,
        le: wl,
        Tc: yl,
        ta: Al,
        ke: Cl,
        Fb: El,
        je: Gl,
        Pb: Il,
        ie: Kl,
        rb: Ml,
        Bc: Nl,
        ha: Pl,
        he: Ql,
        ge: Sl,
        qb: Tl,
        fe: Vl,
        ee: Wl,
        nb: Yl,
        mb: $l,
        qa: bm,
        bd: cm,
        de: em,
        ce: gm,
        be: hm,
        Gc: im,
        pb: jm,
        ae: lm,
        Ab: nm,
        zb: pm,
        Cb: rm,
        Bb: tm,
        $d: um,
        _d: wm,
        Zd: ym,
        Yd: zm,
        Xd: Am,
        Wd: Bm,
        Vd: Cm,
        Ud: Dm,
        Td: Em,
        Sd: Gm,
        $c: Im,
        Rd: Jm,
        Qd: Lm,
        Pd: Mm,
        Od: Om,
        jb: Pm,
        ib: Qm,
        Nd: Sm,
        _c: Um,
        vc: Wm,
        Md: Ym,
        Ld: $m,
        Kd: bn,
        Jd: dn,
        kc: fn,
        gc: hn,
        Hd: kn,
        Gd: mn,
        Fd: on,
        Ed: qn,
        jc: sn,
        fc: un,
        Dd: wn,
        Cd: yn,
        Bd: An,
        Ad: Cn,
        ic: En,
        ec: Gn,
        zd: In,
        yd: Kn,
        xd: Mn,
        wd: On,
        hc: Qn,
        dc: Sn,
        Tb: Un,
        vd: Wn,
        Nc: Yn,
        Lc: $n,
        ud: bo,
        Mc: eo,
        Jc: go,
        td: io,
        Kc: ko,
        Ic: mo,
        sd: oo,
        rd: qo,
        qd: ro,
        pd: to,
        od: uo,
        md: wo,
        ld: xo,
        kd: zo,
        jd: Ao,
        id: Co,
        wb: Do,
        da: Fo,
        fb: Ho,
        fd: Jo,
        gb: Lo,
        qc: Mo,
        oc: Oo,
        pc: Po,
        nc: Ro,
        tc: To,
        hd: Vo,
        gd: Wo,
        Mb: Yo,
        za: ap,
        ab: bp,
        wa: cp,
        Wa: dp,
        ya: le,
        xa: ep,
        Ef: jp,
        Ff: kp,
        Id: lp,
        Za: mp,
        _a: np,
        K: op,
        I: pp,
        Qa: me,
        J: rp,
        Aa: tp,
        Na: oe,
        Ma: pe,
        t: ne,
        La: qe,
        Xa: Fc,
        Ua: vp
      },
      z = R();
    h._willPartialDraw = function (a) {
      return (h._willPartialDraw = z.Jf)(a);
    };
    h._draw = function (a) {
      return (h._draw = z.Kf)(a);
    };
    var Ma = function (a) {
        return (Ma = z.Lf)(a);
      },
      na = function (a) {
        return (na = z.Mf)(a);
      },
      wc = function (a) {
        return (wc = z.Nf)(a);
      };
    h.__embind_initialize_bindings = function () {
      return (h.__embind_initialize_bindings = z.Of)();
    };
    var La = function (a, b) {
        return (La = z.Pf)(a, b);
      },
      Ja = function () {
        return (Ja = z.Qf)();
      },
      Ka = function (a) {
        return (Ka = z.Rf)(a);
      };
    h.dynCall_i = function (a) {
      return (h.dynCall_i = z.Sf)(a);
    };
    h.dynCall_iiidd = function (a, b, c, d, e) {
      return (h.dynCall_iiidd = z.Tf)(a, b, c, d, e);
    };
    h.dynCall_iidd = function (a, b, c, d) {
      return (h.dynCall_iidd = z.Uf)(a, b, c, d);
    };
    var ec = (h.dynCall_ii = function (a, b) {
        return (ec = h.dynCall_ii = z.Vf)(a, b);
      }),
      Ic = (h.dynCall_vi = function (a, b) {
        return (Ic = h.dynCall_vi = z.Wf)(a, b);
      }),
      fc = (h.dynCall_iii = function (a, b, c) {
        return (fc = h.dynCall_iii = z.Xf)(a, b, c);
      }),
      dc = (h.dynCall_vii = function (a, b, c) {
        return (dc = h.dynCall_vii = z.Yf)(a, b, c);
      });
    h.dynCall_iiiii = function (a, b, c, d, e) {
      return (h.dynCall_iiiii = z.Zf)(a, b, c, d, e);
    };
    h.dynCall_iiii = function (a, b, c, d) {
      return (h.dynCall_iiii = z._f)(a, b, c, d);
    };
    h.dynCall_viii = function (a, b, c, d) {
      return (h.dynCall_viii = z.$f)(a, b, c, d);
    };
    h.dynCall_iiiiii = function (a, b, c, d, e, f) {
      return (h.dynCall_iiiiii = z.ag)(a, b, c, d, e, f);
    };
    h.dynCall_viiii = function (a, b, c, d, e) {
      return (h.dynCall_viiii = z.bg)(a, b, c, d, e);
    };
    h.dynCall_iiiifi = function (a, b, c, d, e, f) {
      return (h.dynCall_iiiifi = z.cg)(a, b, c, d, e, f);
    };
    h.dynCall_iiiiifi = function (a, b, c, d, e, f, g) {
      return (h.dynCall_iiiiifi = z.dg)(a, b, c, d, e, f, g);
    };
    h.dynCall_iiff = function (a, b, c, d) {
      return (h.dynCall_iiff = z.eg)(a, b, c, d);
    };
    h.dynCall_iiiff = function (a, b, c, d, e) {
      return (h.dynCall_iiiff = z.fg)(a, b, c, d, e);
    };
    h.dynCall_fi = function (a, b) {
      return (h.dynCall_fi = z.gg)(a, b);
    };
    h.dynCall_fii = function (a, b, c) {
      return (h.dynCall_fii = z.hg)(a, b, c);
    };
    var gc = (h.dynCall_viiiii = function (a, b, c, d, e, f) {
      return (gc = h.dynCall_viiiii = z.ig)(a, b, c, d, e, f);
    });
    h.dynCall_vid = function (a, b, c) {
      return (h.dynCall_vid = z.jg)(a, b, c);
    };
    h.dynCall_viid = function (a, b, c, d) {
      return (h.dynCall_viid = z.kg)(a, b, c, d);
    };
    h.dynCall_di = function (a, b) {
      return (h.dynCall_di = z.lg)(a, b);
    };
    h.dynCall_d = function (a) {
      return (h.dynCall_d = z.mg)(a);
    };
    h.dynCall_vif = function (a, b, c) {
      return (h.dynCall_vif = z.ng)(a, b, c);
    };
    h.dynCall_viif = function (a, b, c, d) {
      return (h.dynCall_viif = z.og)(a, b, c, d);
    };
    h.dynCall_dii = function (a, b, c) {
      return (h.dynCall_dii = z.pg)(a, b, c);
    };
    h.dynCall_v = function (a) {
      return (h.dynCall_v = z.qg)(a);
    };
    h.dynCall_iidi = function (a, b, c, d) {
      return (h.dynCall_iidi = z.rg)(a, b, c, d);
    };
    h.dynCall_viiiiii = function (a, b, c, d, e, f, g) {
      return (h.dynCall_viiiiii = z.sg)(a, b, c, d, e, f, g);
    };
    h.dynCall_viiif = function (a, b, c, d, e) {
      return (h.dynCall_viiif = z.tg)(a, b, c, d, e);
    };
    h.dynCall_viiiif = function (a, b, c, d, e, f) {
      return (h.dynCall_viiiif = z.ug)(a, b, c, d, e, f);
    };
    h.dynCall_viiiiiiii = function (a, b, c, d, e, f, g, l, n) {
      return (h.dynCall_viiiiiiii = z.vg)(a, b, c, d, e, f, g, l, n);
    };
    h.dynCall_iiiijij = function (a, b, c, d, e, f, g, l, n) {
      return (h.dynCall_iiiijij = z.wg)(a, b, c, d, e, f, g, l, n);
    };
    h.dynCall_viidi = function (a, b, c, d, e) {
      return (h.dynCall_viidi = z.xg)(a, b, c, d, e);
    };
    h.dynCall_viifi = function (a, b, c, d, e) {
      return (h.dynCall_viifi = z.yg)(a, b, c, d, e);
    };
    h.dynCall_viiifi = function (a, b, c, d, e, f) {
      return (h.dynCall_viiifi = z.zg)(a, b, c, d, e, f);
    };
    h.dynCall_viiid = function (a, b, c, d, e) {
      return (h.dynCall_viiid = z.Ag)(a, b, c, d, e);
    };
    h.dynCall_fiiif = function (a, b, c, d, e) {
      return (h.dynCall_fiiif = z.Bg)(a, b, c, d, e);
    };
    h.dynCall_viidiff = function (a, b, c, d, e, f, g) {
      return (h.dynCall_viidiff = z.Cg)(a, b, c, d, e, f, g);
    };
    h.dynCall_iiidi = function (a, b, c, d, e) {
      return (h.dynCall_iiidi = z.Dg)(a, b, c, d, e);
    };
    h.dynCall_vidii = function (a, b, c, d, e) {
      return (h.dynCall_vidii = z.Eg)(a, b, c, d, e);
    };
    h.dynCall_vifidi = function (a, b, c, d, e, f) {
      return (h.dynCall_vifidi = z.Fg)(a, b, c, d, e, f);
    };
    h.dynCall_viiiiiii = function (a, b, c, d, e, f, g, l) {
      return (h.dynCall_viiiiiii = z.Gg)(a, b, c, d, e, f, g, l);
    };
    h.dynCall_fif = function (a, b, c) {
      return (h.dynCall_fif = z.Hg)(a, b, c);
    };
    h.dynCall_viidii = function (a, b, c, d, e, f) {
      return (h.dynCall_viidii = z.Ig)(a, b, c, d, e, f);
    };
    h.dynCall_fiii = function (a, b, c, d) {
      return (h.dynCall_fiii = z.Jg)(a, b, c, d);
    };
    h.dynCall_iiiif = function (a, b, c, d, e) {
      return (h.dynCall_iiiif = z.Kg)(a, b, c, d, e);
    };
    h.dynCall_viiiff = function (a, b, c, d, e, f) {
      return (h.dynCall_viiiff = z.Lg)(a, b, c, d, e, f);
    };
    h.dynCall_iiiiid = function (a, b, c, d, e, f) {
      return (h.dynCall_iiiiid = z.Mg)(a, b, c, d, e, f);
    };
    h.dynCall_iiiid = function (a, b, c, d, e) {
      return (h.dynCall_iiiid = z.Ng)(a, b, c, d, e);
    };
    h.dynCall_iiiiiiii = function (a, b, c, d, e, f, g, l) {
      return (h.dynCall_iiiiiiii = z.Og)(a, b, c, d, e, f, g, l);
    };
    h.dynCall_ji = function (a, b) {
      return (h.dynCall_ji = z.Pg)(a, b);
    };
    h.dynCall_viijii = function (a, b, c, d, e, f, g) {
      return (h.dynCall_viijii = z.Qg)(a, b, c, d, e, f, g);
    };
    h.dynCall_iiiiiii = function (a, b, c, d, e, f, g) {
      return (h.dynCall_iiiiiii = z.Rg)(a, b, c, d, e, f, g);
    };
    h.dynCall_vij = function (a, b, c, d) {
      return (h.dynCall_vij = z.Sg)(a, b, c, d);
    };
    h.dynCall_vijjj = function (a, b, c, d, e, f, g, l) {
      return (h.dynCall_vijjj = z.Tg)(a, b, c, d, e, f, g, l);
    };
    h.dynCall_vj = function (a, b, c) {
      return (h.dynCall_vj = z.Ug)(a, b, c);
    };
    h.dynCall_viij = function (a, b, c, d, e) {
      return (h.dynCall_viij = z.Vg)(a, b, c, d, e);
    };
    h.dynCall_viiiiij = function (a, b, c, d, e, f, g, l) {
      return (h.dynCall_viiiiij = z.Wg)(a, b, c, d, e, f, g, l);
    };
    h.dynCall_vffff = function (a, b, c, d, e) {
      return (h.dynCall_vffff = z.Xg)(a, b, c, d, e);
    };
    h.dynCall_vf = function (a, b) {
      return (h.dynCall_vf = z.Yg)(a, b);
    };
    h.dynCall_viiiiiiiii = function (a, b, c, d, e, f, g, l, n, v) {
      return (h.dynCall_viiiiiiiii = z.Zg)(a, b, c, d, e, f, g, l, n, v);
    };
    h.dynCall_vff = function (a, b, c) {
      return (h.dynCall_vff = z._g)(a, b, c);
    };
    h.dynCall_vfi = function (a, b, c) {
      return (h.dynCall_vfi = z.$g)(a, b, c);
    };
    h.dynCall_viff = function (a, b, c, d) {
      return (h.dynCall_viff = z.ah)(a, b, c, d);
    };
    h.dynCall_vifff = function (a, b, c, d, e) {
      return (h.dynCall_vifff = z.bh)(a, b, c, d, e);
    };
    h.dynCall_viffff = function (a, b, c, d, e, f) {
      return (h.dynCall_viffff = z.ch)(a, b, c, d, e, f);
    };
    h.dynCall_viiiiiiiiii = function (a, b, c, d, e, f, g, l, n, v, t) {
      return (h.dynCall_viiiiiiiiii = z.dh)(a, b, c, d, e, f, g, l, n, v, t);
    };
    h.dynCall_viiiiiiiiiii = function (a, b, c, d, e, f, g, l, n, v, t, F) {
      return (h.dynCall_viiiiiiiiiii = z.eh)(a, b, c, d, e, f, g, l, n, v, t, F);
    };
    h.dynCall_iijjiiii = function (a, b, c, d, e, f, g, l, n, v) {
      return (h.dynCall_iijjiiii = z.fh)(a, b, c, d, e, f, g, l, n, v);
    };
    h.dynCall_jiji = function (a, b, c, d, e) {
      return (h.dynCall_jiji = z.gh)(a, b, c, d, e);
    };
    h.dynCall_iiiiiiiii = function (a, b, c, d, e, f, g, l, n) {
      return (h.dynCall_iiiiiiiii = z.hh)(a, b, c, d, e, f, g, l, n);
    };
    h.dynCall_iiiiij = function (a, b, c, d, e, f, g) {
      return (h.dynCall_iiiiij = z.ih)(a, b, c, d, e, f, g);
    };
    h.dynCall_iiiiijj = function (a, b, c, d, e, f, g, l, n) {
      return (h.dynCall_iiiiijj = z.jh)(a, b, c, d, e, f, g, l, n);
    };
    h.dynCall_iiiiiijj = function (a, b, c, d, e, f, g, l, n, v) {
      return (h.dynCall_iiiiiijj = z.kh)(a, b, c, d, e, f, g, l, n, v);
    };
    h.___start_em_js = 328504;
    h.___stop_em_js = 329027;
    h.ENV = rb;
    var jb;
    Ha = function b() {
      jb || hc();
      jb || (Ha = b);
    };
    if (h.preInit) for ("function" == typeof h.preInit && (h.preInit = [h.preInit]); 0 < h.preInit.length; ) h.preInit.pop()();
    hc();
    return w.ready;
  };
})();
"object" === typeof exports && "object" === typeof module
  ? (module.exports = inkLoadWasmModule)
  : "function" === typeof define &&
    define.amd &&
    define([], function () {
      return inkLoadWasmModule;
    });
(function () {
  var q = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
  q.inkLoadWasmPostRun && q.inkLoadWasmPostRun();
})();
