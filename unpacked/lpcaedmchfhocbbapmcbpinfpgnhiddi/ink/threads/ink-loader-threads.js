var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (r) {
  return (r.raw = r);
};
$jscomp.createTemplateTagFirstArgWithRaw = function (r, x) {
  r.raw = x;
  return r;
};
$jscomp.arrayIteratorImpl = function (r) {
  var x = 0;
  return function () {
    return x < r.length ? { done: !1, value: r[x++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (r) {
  return { next: $jscomp.arrayIteratorImpl(r) };
};
$jscomp.makeIterator = function (r) {
  var x = "undefined" != typeof Symbol && Symbol.iterator && r[Symbol.iterator];
  if (x) return x.call(r);
  if ("number" == typeof r.length) return $jscomp.arrayIterator(r);
  throw Error(String(r) + " is not an iterable or ArrayLike");
};
$jscomp.arrayFromIterator = function (r) {
  for (var x, w = []; !(x = r.next()).done; ) w.push(x.value);
  return w;
};
$jscomp.arrayFromIterable = function (r) {
  return r instanceof Array ? r : $jscomp.arrayFromIterator($jscomp.makeIterator(r));
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
    : function (r) {
        var x = function () {};
        x.prototype = r;
        return new x();
      };
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (r, x, w) {
        if (r == Array.prototype || r == Object.prototype) return r;
        r[x] = w.value;
        return r;
      };
$jscomp.getGlobal = function (r) {
  r = [
    "object" == typeof globalThis && globalThis,
    r,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global
  ];
  for (var x = 0; x < r.length; ++x) {
    var w = r[x];
    if (w && w.Math == Math) return w;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
$jscomp.polyfill = function (r, x, w, A) {
  x && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(r, x, w, A) : $jscomp.polyfillUnisolated(r, x, w, A));
};
$jscomp.polyfillUnisolated = function (r, x) {
  var w = $jscomp.global;
  r = r.split(".");
  for (var A = 0; A < r.length - 1; A++) {
    var H = r[A];
    if (!(H in w)) return;
    w = w[H];
  }
  r = r[r.length - 1];
  A = w[r];
  x = x(A);
  x != A && null != x && $jscomp.defineProperty(w, r, { configurable: !0, writable: !0, value: x });
};
$jscomp.polyfillIsolated = function (r, x, w) {
  var A = r.split("."),
    H = 1 === A.length;
  r = A[0];
  r = !H && r in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var I = 0; I < A.length - 1; I++) {
    var n = A[I];
    if (!(n in r)) return;
    r = r[n];
  }
  A = A[A.length - 1];
  w = $jscomp.IS_SYMBOL_NATIVE && "es6" === w ? r[A] : null;
  x = x(w);
  null != x &&
    (H
      ? $jscomp.defineProperty($jscomp.polyfills, A, { configurable: !0, writable: !0, value: x })
      : x !== w &&
        (void 0 === $jscomp.propertyToPolyfillSymbol[A] &&
          ((H = (1e9 * Math.random()) >>> 0),
          ($jscomp.propertyToPolyfillSymbol[A] = $jscomp.IS_SYMBOL_NATIVE
            ? $jscomp.global.Symbol(A)
            : $jscomp.POLYFILL_PREFIX + H + "$" + A)),
        (H = $jscomp.propertyToPolyfillSymbol[A]),
        $jscomp.defineProperty(r, H, { configurable: !0, writable: !0, value: x })));
};
$jscomp.getConstructImplementation = function () {
  function r() {
    function H() {}
    function I() {}
    new H();
    Reflect.construct(H, [], I);
    return new H() instanceof H;
  }
  function x(H, I, n) {
    void 0 === n && (n = H);
    n = n.prototype || Object.prototype;
    n = $jscomp.objectCreate(n);
    var y = Function.prototype.apply;
    return (H = y.call(H, n, I)) || n;
  }
  if ($jscomp.TRUST_ES6_POLYFILLS && "undefined" != typeof Reflect && Reflect.construct) {
    if (r()) return Reflect.construct;
    var w = Reflect.construct,
      A = function (H, I, n) {
        H = w(H, I);
        n && Reflect.setPrototypeOf(H, n.prototype);
        return H;
      };
    return A;
  }
  return x;
};
$jscomp.construct = { valueOf: $jscomp.getConstructImplementation }.valueOf();
$jscomp.underscoreProtoCanBeSet = function () {
  var r = { a: !0 },
    x = {};
  try {
    return (x.__proto__ = r), x.a;
  } catch (w) {}
  return !1;
};
$jscomp.setPrototypeOf =
  $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf
    ? Object.setPrototypeOf
    : $jscomp.underscoreProtoCanBeSet()
    ? function (r, x) {
        r.__proto__ = x;
        if (r.__proto__ !== x) throw new TypeError(r + " is not extensible");
        return r;
      }
    : null;
$jscomp.inherits = function (r, x) {
  r.prototype = $jscomp.objectCreate(x.prototype);
  r.prototype.constructor = r;
  if ($jscomp.setPrototypeOf) {
    var w = $jscomp.setPrototypeOf;
    w(r, x);
  } else
    for (w in x)
      if ("prototype" != w)
        if (Object.defineProperties) {
          var A = Object.getOwnPropertyDescriptor(x, w);
          A && Object.defineProperty(r, w, A);
        } else r[w] = x[w];
  r.superClass_ = x.prototype;
};
$jscomp.getRestArguments = function () {
  for (var r = Number(this), x = [], w = r; w < arguments.length; w++) x[w - r] = arguments[w];
  return x;
};
$jscomp.polyfill(
  "Reflect",
  function (r) {
    return r ? r : {};
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
  function (r) {
    if (r) return r;
    if ($jscomp.setPrototypeOf) {
      var x = $jscomp.setPrototypeOf;
      return (r = function (w, A) {
        try {
          return x(w, A), !0;
        } catch (H) {
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
  function (r) {
    function x() {
      this.batch_ = null;
    }
    function w(y) {
      return y instanceof I
        ? y
        : new I(function (z) {
            z(y);
          });
    }
    if (
      r &&
      (!(
        $jscomp.FORCE_POLYFILL_PROMISE ||
        ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && "undefined" === typeof $jscomp.global.PromiseRejectionEvent)
      ) ||
        !$jscomp.global.Promise ||
        -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))
    )
      return r;
    x.prototype.asyncExecute = function (y) {
      if (null == this.batch_) {
        this.batch_ = [];
        var z = this;
        this.asyncExecuteFunction(function () {
          z.executeBatch_();
        });
      }
      this.batch_.push(y);
    };
    var A = $jscomp.global.setTimeout;
    x.prototype.asyncExecuteFunction = function (y) {
      A(y, 0);
    };
    x.prototype.executeBatch_ = function () {
      for (; this.batch_ && this.batch_.length; ) {
        var y = this.batch_;
        this.batch_ = [];
        for (var z = 0; z < y.length; ++z) {
          var P = y[z];
          y[z] = null;
          try {
            P();
          } catch (U) {
            this.asyncThrow_(U);
          }
        }
      }
      this.batch_ = null;
    };
    x.prototype.asyncThrow_ = function (y) {
      this.asyncExecuteFunction(function () {
        throw y;
      });
    };
    var H = { PENDING: 0, FULFILLED: 1, REJECTED: 2 },
      I = function (y) {
        this.state_ = H.PENDING;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var z = this.createResolveAndReject_();
        try {
          y(z.resolve, z.reject);
        } catch (P) {
          z.reject(P);
        }
      };
    I.prototype.createResolveAndReject_ = function () {
      function y(U) {
        return function (V) {
          P || ((P = !0), U.call(z, V));
        };
      }
      var z = this,
        P = !1;
      return { resolve: y(this.resolveTo_), reject: y(this.reject_) };
    };
    I.prototype.resolveTo_ = function (y) {
      if (y === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
      else if (y instanceof I) this.settleSameAsPromise_(y);
      else {
        a: switch (typeof y) {
          case "object":
            var z = null != y;
            break a;
          case "function":
            z = !0;
            break a;
          default:
            z = !1;
        }
        z ? this.resolveToNonPromiseObj_(y) : this.fulfill_(y);
      }
    };
    I.prototype.resolveToNonPromiseObj_ = function (y) {
      var z = void 0;
      try {
        z = y.then;
      } catch (P) {
        this.reject_(P);
        return;
      }
      "function" == typeof z ? this.settleSameAsThenable_(z, y) : this.fulfill_(y);
    };
    I.prototype.reject_ = function (y) {
      this.settle_(H.REJECTED, y);
    };
    I.prototype.fulfill_ = function (y) {
      this.settle_(H.FULFILLED, y);
    };
    I.prototype.settle_ = function (y, z) {
      if (this.state_ != H.PENDING) throw Error("Cannot settle(" + y + ", " + z + "): Promise already settled in state" + this.state_);
      this.state_ = y;
      this.result_ = z;
      this.state_ === H.REJECTED && this.scheduleUnhandledRejectionCheck_();
      this.executeOnSettledCallbacks_();
    };
    I.prototype.scheduleUnhandledRejectionCheck_ = function () {
      var y = this;
      A(function () {
        if (y.notifyUnhandledRejection_()) {
          var z = $jscomp.global.console;
          "undefined" !== typeof z && z.error(y.result_);
        }
      }, 1);
    };
    I.prototype.notifyUnhandledRejection_ = function () {
      if (this.isRejectionHandled_) return !1;
      var y = $jscomp.global.CustomEvent,
        z = $jscomp.global.Event,
        P = $jscomp.global.dispatchEvent;
      if ("undefined" === typeof P) return !0;
      "function" === typeof y
        ? (y = new y("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof z
        ? (y = new z("unhandledrejection", { cancelable: !0 }))
        : ((y = $jscomp.global.document.createEvent("CustomEvent")), y.initCustomEvent("unhandledrejection", !1, !0, y));
      y.promise = this;
      y.reason = this.result_;
      return P(y);
    };
    I.prototype.executeOnSettledCallbacks_ = function () {
      if (null != this.onSettledCallbacks_) {
        for (var y = 0; y < this.onSettledCallbacks_.length; ++y) n.asyncExecute(this.onSettledCallbacks_[y]);
        this.onSettledCallbacks_ = null;
      }
    };
    var n = new x();
    I.prototype.settleSameAsPromise_ = function (y) {
      var z = this.createResolveAndReject_();
      y.callWhenSettled_(z.resolve, z.reject);
    };
    I.prototype.settleSameAsThenable_ = function (y, z) {
      var P = this.createResolveAndReject_();
      try {
        y.call(z, P.resolve, P.reject);
      } catch (U) {
        P.reject(U);
      }
    };
    I.prototype.then = function (y, z) {
      function P(fa, Y) {
        return "function" == typeof fa
          ? function (ya) {
              try {
                U(fa(ya));
              } catch (Ia) {
                V(Ia);
              }
            }
          : Y;
      }
      var U,
        V,
        za = new I(function (fa, Y) {
          U = fa;
          V = Y;
        });
      this.callWhenSettled_(P(y, U), P(z, V));
      return za;
    };
    I.prototype.catch = function (y) {
      return this.then(void 0, y);
    };
    I.prototype.callWhenSettled_ = function (y, z) {
      function P() {
        switch (U.state_) {
          case H.FULFILLED:
            y(U.result_);
            break;
          case H.REJECTED:
            z(U.result_);
            break;
          default:
            throw Error("Unexpected state: " + U.state_);
        }
      }
      var U = this;
      null == this.onSettledCallbacks_ ? n.asyncExecute(P) : this.onSettledCallbacks_.push(P);
      this.isRejectionHandled_ = !0;
    };
    I.resolve = w;
    I.reject = function (y) {
      return new I(function (z, P) {
        P(y);
      });
    };
    I.race = function (y) {
      return new I(function (z, P) {
        for (var U = $jscomp.makeIterator(y), V = U.next(); !V.done; V = U.next()) w(V.value).callWhenSettled_(z, P);
      });
    };
    I.all = function (y) {
      var z = $jscomp.makeIterator(y),
        P = z.next();
      return P.done
        ? w([])
        : new I(function (U, V) {
            function za(ya) {
              return function (Ia) {
                fa[ya] = Ia;
                Y--;
                0 == Y && U(fa);
              };
            }
            var fa = [],
              Y = 0;
            do fa.push(void 0), Y++, w(P.value).callWhenSettled_(za(fa.length - 1), V), (P = z.next());
            while (!P.done);
          });
    };
    return I;
  },
  "es6",
  "es3"
);
$jscomp.owns = function (r, x) {
  return Object.prototype.hasOwnProperty.call(r, x);
};
$jscomp.assign =
  $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign
    ? Object.assign
    : function (r, x) {
        for (var w = 1; w < arguments.length; w++) {
          var A = arguments[w];
          if (A) for (var H in A) $jscomp.owns(A, H) && (r[H] = A[H]);
        }
        return r;
      };
$jscomp.polyfill(
  "Object.assign",
  function (r) {
    return r || $jscomp.assign;
  },
  "es6",
  "es3"
);
$jscomp.checkStringArgs = function (r, x, w) {
  if (null == r) throw new TypeError("The 'this' value for String.prototype." + w + " must not be null or undefined");
  if (x instanceof RegExp) throw new TypeError("First argument to String.prototype." + w + " must not be a regular expression");
  return r + "";
};
$jscomp.polyfill(
  "String.prototype.startsWith",
  function (r) {
    return r
      ? r
      : (r = function (x, w) {
          var A = $jscomp.checkStringArgs(this, x, "startsWith");
          x += "";
          var H = A.length,
            I = x.length;
          w = Math.max(0, Math.min(w | 0, A.length));
          for (var n = 0; n < I && w < H; ) if (A[w++] != x[n++]) return !1;
          return n >= I;
        });
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Promise.prototype.finally",
  function (r) {
    return r
      ? r
      : (r = function (x) {
          return this.then(
            function (w) {
              var A = Promise.resolve(x());
              return A.then(function () {
                return w;
              });
            },
            function (w) {
              var A = Promise.resolve(x());
              return A.then(function () {
                throw w;
              });
            }
          );
        });
  },
  "es9",
  "es3"
);
$jscomp.initSymbol = function () {};
$jscomp.polyfill(
  "Symbol",
  function (r) {
    if (r) return r;
    var x = function (I, n) {
      this.$jscomp$symbol$id_ = I;
      $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: n });
    };
    x.prototype.toString = function () {
      return this.$jscomp$symbol$id_;
    };
    r = (1e9 * Math.random()) >>> 0;
    var w = "jscomp_symbol_" + r + "_",
      A = 0,
      H = function (I) {
        if (this instanceof H) throw new TypeError("Symbol is not a constructor");
        return new x(w + (I || "") + "_" + A++, I);
      };
    return H;
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Symbol.iterator",
  function (r) {
    if (r) return r;
    r = Symbol("Symbol.iterator");
    for (
      var x = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        w = 0;
      w < x.length;
      w++
    ) {
      var A = $jscomp.global[x[w]];
      "function" === typeof A &&
        "function" != typeof A.prototype[r] &&
        $jscomp.defineProperty(A.prototype, r, {
          configurable: !0,
          writable: !0,
          value: function () {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
          }
        });
    }
    return r;
  },
  "es6",
  "es3"
);
$jscomp.iteratorPrototype = function (r) {
  r = { next: r };
  r[Symbol.iterator] = function () {
    return this;
  };
  return r;
};
$jscomp.iteratorFromArray = function (r, x) {
  r instanceof String && (r += "");
  var w = 0,
    A = !1,
    H = {
      next: function () {
        if (!A && w < r.length) {
          var I = w++;
          return { value: x(I, r[I]), done: !1 };
        }
        A = !0;
        return { done: !0, value: void 0 };
      }
    };
  H[Symbol.iterator] = function () {
    return H;
  };
  return H;
};
$jscomp.polyfill(
  "Array.prototype.keys",
  function (r) {
    return r
      ? r
      : (r = function () {
          return $jscomp.iteratorFromArray(this, function (x) {
            return x;
          });
        });
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Array.prototype.values",
  function (r) {
    return r
      ? r
      : (r = function () {
          return $jscomp.iteratorFromArray(this, function (x, w) {
            return w;
          });
        });
  },
  "es8",
  "es3"
);
$jscomp.polyfill(
  "Object.is",
  function (r) {
    return r
      ? r
      : (r = function (x, w) {
          return x === w ? 0 !== x || 1 / x === 1 / w : x !== x && w !== w;
        });
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Array.prototype.includes",
  function (r) {
    return r
      ? r
      : (r = function (x, w) {
          var A = this;
          A instanceof String && (A = String(A));
          var H = A.length;
          w = w || 0;
          for (0 > w && (w = Math.max(w + H, 0)); w < H; w++) {
            var I = A[w];
            if (I === x || Object.is(I, x)) return !0;
          }
          return !1;
        });
  },
  "es7",
  "es3"
);
$jscomp.polyfill(
  "String.prototype.includes",
  function (r) {
    return r
      ? r
      : (r = function (x, w) {
          var A = $jscomp.checkStringArgs(this, x, "includes");
          return -1 !== A.indexOf(x, w || 0);
        });
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Math.fround",
  function (r) {
    if (r) return r;
    if ($jscomp.SIMPLE_FROUND_POLYFILL || "function" !== typeof Float32Array)
      return function (w) {
        return w;
      };
    var x = new Float32Array(1);
    return (r = function (w) {
      x[0] = w;
      return x[0];
    });
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Math.clz32",
  function (r) {
    return r
      ? r
      : (r = function (x) {
          x = Number(x) >>> 0;
          if (0 === x) return 32;
          var w = 0;
          0 === (x & 4294901760) && ((x <<= 16), (w += 16));
          0 === (x & 4278190080) && ((x <<= 8), (w += 8));
          0 === (x & 4026531840) && ((x <<= 4), (w += 4));
          0 === (x & 3221225472) && ((x <<= 2), (w += 2));
          0 === (x & 2147483648) && w++;
          return w;
        });
  },
  "es6",
  "es3"
);
var inkLoadWasmModule = (function () {
  var r = "undefined" !== typeof document && document.currentScript ? document.currentScript.src : void 0;
  "undefined" !== typeof __filename && (r = r || __filename);
  return function (x) {
    function w() {
      Z.buffer != la.buffer && V();
      return la;
    }
    function A() {
      Z.buffer != la.buffer && V();
      return mc;
    }
    function H() {
      Z.buffer != la.buffer && V();
      return nc;
    }
    function I() {
      Z.buffer != la.buffer && V();
      return oc;
    }
    function n() {
      Z.buffer != la.buffer && V();
      return pc;
    }
    function y() {
      Z.buffer != la.buffer && V();
      return qc;
    }
    function z() {
      Z.buffer != la.buffer && V();
      return rc;
    }
    function P() {
      Z.buffer != la.buffer && V();
      return sc;
    }
    function U(a) {
      return h.locateFile ? h.locateFile(a, ja) : ja + a;
    }
    function V() {
      var a = Z.buffer;
      h.HEAP8 = la = new Int8Array(a);
      h.HEAP16 = nc = new Int16Array(a);
      h.HEAPU8 = mc = new Uint8Array(a);
      h.HEAPU16 = oc = new Uint16Array(a);
      h.HEAP32 = pc = new Int32Array(a);
      h.HEAPU32 = qc = new Uint32Array(a);
      h.HEAPF32 = rc = new Float32Array(a);
      h.HEAPF64 = sc = new Float64Array(a);
    }
    function za() {
      ua++;
      h.monitorRunDependencies && h.monitorRunDependencies(ua);
    }
    function fa() {
      ua--;
      h.monitorRunDependencies && h.monitorRunDependencies(ua);
      if (0 == ua && (null !== zb && (clearInterval(zb), (zb = null)), Ja)) {
        var a = Ja;
        Ja = null;
        a();
      }
    }
    function Y(a) {
      if (h.onAbort) h.onAbort(a);
      a = "Aborted(" + a + ")";
      aa(a);
      Aa = !0;
      va = 1;
      a += ". Build with -sASSERTIONS for more info.";
      a = new WebAssembly.RuntimeError(a);
      bb(a);
      throw a;
    }
    function ya(a) {
      if (a == Ka && La) return new Uint8Array(La);
      if (Ab) return Ab(a);
      throw "both async and sync fetching of the wasm failed";
    }
    function Ia(a) {
      if (!La && (Bb || qa)) {
        if ("function" == typeof fetch && !a.startsWith("file://"))
          return fetch(a, { credentials: "same-origin" })
            .then(function (b) {
              if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
              return b.arrayBuffer();
            })
            .catch(function () {
              return ya(a);
            });
        if (Cb)
          return new Promise(function (b, c) {
            Cb(
              a,
              function (d) {
                return b(new Uint8Array(d));
              },
              c
            );
          });
      }
      return Promise.resolve().then(function () {
        return ya(a);
      });
    }
    function tc(a, b, c) {
      return Ia(a)
        .then(function (d) {
          return WebAssembly.instantiate(d, b);
        })
        .then(function (d) {
          return d;
        })
        .then(c, function (d) {
          aa("failed to asynchronously prepare wasm: " + d);
          Y(d);
        });
    }
    function Zd(a, b, c, d) {
      return a ||
        "function" != typeof WebAssembly.instantiateStreaming ||
        b.startsWith("data:application/octet-stream;base64,") ||
        b.startsWith("file://") ||
        ca ||
        "function" != typeof fetch
        ? tc(b, c, d)
        : fetch(b, { credentials: "same-origin" }).then(function (e) {
            e = WebAssembly.instantiateStreaming(e, c);
            return e.then(d, function (f) {
              aa("wasm streaming compile failed: " + f);
              aa("falling back to ArrayBuffer instantiation");
              return tc(b, c, d);
            });
          });
    }
    function $d() {
      function a(d, e) {
        B = d.exports;
        J.tlsInitFunctions.push(B.Zf);
        Db.unshift(B.Qf);
        uc = e;
        fa("wasm-instantiate");
        return B;
      }
      function b(d) {
        a(d.instance, d.module);
      }
      var c = { a: ae };
      za("wasm-instantiate");
      if (h.instantiateWasm)
        try {
          return h.instantiateWasm(c, a);
        } catch (d) {
          aa("Module.instantiateWasm callback failed with error: " + d), bb(d);
        }
      Zd(La, Ka, c, b).catch(bb);
      return {};
    }
    function be(a, b, c) {
      if ("object" === typeof globalThis && "object" === typeof globalThis.Module && "function" === typeof globalThis.Module.log)
        globalThis.Module.log(a, S(b), S(c));
      else {
        var d = [console.log, console.warn, console.error];
        d[a].call(console, S(b) + " " + S(c) + "\n");
      }
    }
    function ce() {
      return "undefined" !== typeof wasmOffsetConverter;
    }
    function Eb(a) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a;
    }
    function Fb(a) {
      if (N) return T(0, 1, a);
      va = a;
      if (!cb()) {
        J.terminateAllThreads();
        if (h.onExit) h.onExit(a);
        Aa = !0;
      }
      db(a, new Eb(a));
    }
    function vc(a) {
      if (N) return T(1, 0, a);
      Gb(a);
    }
    function wc(a, b, c, d) {
      return N ? T(2, 1, a, b, c, d) : xc(a, b, c, d);
    }
    function yc(a, b, c, d) {
      if (N) return T(3, 1, a, b, c, d);
    }
    function eb(a) {
      return this.fromWireType(n()[a >> 2]);
    }
    function de(a, b, c) {
      c = void 0 === c ? {} : c;
      var d = b.name;
      a || Q('type "' + d + '" must have a positive integer typeid pointer');
      if (wa.hasOwnProperty(a)) {
        if (c.ignoreDuplicateRegistrations) return;
        Q("Cannot register type '" + d + "' twice");
      }
      wa[a] = b;
      delete fb[a];
      Ba.hasOwnProperty(a) &&
        ((b = Ba[a]),
        delete Ba[a],
        b.forEach(function (e) {
          return e();
        }));
    }
    function ma(a, b, c) {
      c = void 0 === c ? {} : c;
      if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      return de(a, b, c);
    }
    function ee(a) {
      function b() {
        return this.isSmartPointer
          ? gb(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: c, smartPtrType: this, smartPtr: a })
          : gb(this.registeredClass.instancePrototype, { ptrType: this, ptr: a });
      }
      var c = this.getPointee(a);
      if (!c) return this.destructor(a), null;
      var d = fe(this.registeredClass, c);
      if (void 0 !== d) {
        if (0 === d.$$.count.value) return (d.$$.ptr = c), (d.$$.smartPtr = a), d.clone();
        d = d.clone();
        this.destructor(a);
        return d;
      }
      d = this.registeredClass.getActualType(c);
      d = zc[d];
      if (!d) return b.call(this);
      d = this.isConst ? d.constPointerType : d.pointerType;
      var e = Ac(c, this.registeredClass, d.registeredClass);
      return null === e
        ? b.call(this)
        : this.isSmartPointer
        ? gb(d.registeredClass.instancePrototype, { ptrType: d, ptr: e, smartPtrType: this, smartPtr: a })
        : gb(d.registeredClass.instancePrototype, { ptrType: d, ptr: e });
    }
    function hb() {
      this.$$ = void 0;
    }
    function Hb(a, b) {
      a = Bc(a);
      var c = {};
      return ((c[a] = function () {
        return b.apply(this, arguments);
      }),
      c)[a];
    }
    function ge(a, b, c, d, e, f, g, l) {
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
    function he(a, b) {
      if (null === b) return this.isReference && Q("null is not a valid " + this.name), 0;
      b.$$ || Q('Cannot pass "' + Ib(b) + '" as a ' + this.name);
      b.$$.ptr || Q("Cannot pass deleted object as a pointer of type " + this.name);
      a = b.$$.ptrType.registeredClass;
      return (b = ib(b.$$.ptr, a, this.registeredClass));
    }
    function ie(a, b) {
      if (null === b) {
        this.isReference && Q("null is not a valid " + this.name);
        if (this.isSmartPointer) {
          var c = this.rawConstructor();
          null !== a && a.push(this.rawDestructor, c);
          return c;
        }
        return 0;
      }
      b.$$ || Q('Cannot pass "' + Ib(b) + '" as a ' + this.name);
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
      c = ib(b.$$.ptr, c, this.registeredClass);
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
                W.toHandle(function () {
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
    function je(a, b) {
      if (null === b) return this.isReference && Q("null is not a valid " + this.name), 0;
      b.$$ || Q('Cannot pass "' + Ib(b) + '" as a ' + this.name);
      b.$$.ptr || Q("Cannot pass deleted object as a pointer of type " + this.name);
      b.$$.ptrType.isConst && Q("Cannot convert argument of type " + b.$$.ptrType.name + " to parameter type " + this.name);
      a = b.$$.ptrType.registeredClass;
      return (b = ib(b.$$.ptr, a, this.registeredClass));
    }
    function Cc(a) {
      return this.fromWireType(y()[a >> 2]);
    }
    function jb(a, b, c, d, e, f, g, l, p, u, t) {
      this.name = a;
      this.registeredClass = b;
      this.isReference = c;
      this.isConst = d;
      this.isSmartPointer = e;
      this.pointeeType = f;
      this.sharingPolicy = g;
      this.rawGetPointee = l;
      this.rawConstructor = p;
      this.rawShare = u;
      this.rawDestructor = t;
      e || void 0 !== b.baseClass ? (this.toWireType = ie) : ((this.toWireType = d ? he : je), (this.destructorFunction = null));
    }
    function Jb(a, b, c, d, e) {
      var f = b.length;
      2 > f && Q("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var g = null !== b[1] && null !== c,
        l = !1;
      for (c = 1; c < b.length; ++c)
        if (null !== b[c] && void 0 === b[c].destructorFunction) {
          l = !0;
          break;
        }
      var p = "void" !== b[0].name,
        u = f - 2,
        t = Array(u),
        F = [],
        L = [];
      return function () {
        arguments.length !== u && Q("function " + a + " called with " + arguments.length + " arguments, expected " + u);
        L.length = 0;
        F.length = g ? 2 : 1;
        F[0] = e;
        if (g) {
          var q = b[1].toWireType(L, this);
          F[1] = q;
        }
        for (var C = 0; C < u; ++C) (t[C] = b[C + 2].toWireType(L, arguments[C])), F.push(t[C]);
        C = d.apply(null, F);
        if (l) Ma(L);
        else
          for (var D = g ? 1 : 2; D < b.length; D++) {
            var M = 1 === D ? q : t[D - 2];
            null !== b[D].destructorFunction && b[D].destructorFunction(M);
          }
        q = p ? b[0].fromWireType(C) : void 0;
        return q;
      };
    }
    function ke() {
      Object.assign(Dc.prototype, {
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
    function Dc() {
      this.allocated = [void 0];
      this.freelist = [];
    }
    function le(a, b, c, d, e, f, g, l) {
      if (N) return T(4, 1, a, b, c, d, e, f, g, l);
      Kb(e, f);
      return -52;
    }
    function Ec(a, b, c, d, e, f, g) {
      if (N) return T(5, 1, a, b, c, d, e, f, g);
      Kb(f, g);
    }
    function Fc(a, b, c, d, e) {
      return N ? T(6, 1, a, b, c, d, e) : G.chooseConfig(a, b, c, d, e);
    }
    function Gc(a, b, c, d) {
      if (N) return T(7, 1, a, b, c, d);
      if (62e3 != a) return G.setErrorCode(12296), 0;
      for (a = 1; ; ) {
        b = n()[d >> 2];
        if (12440 == b) a = n()[(d + 4) >> 2];
        else if (12344 == b) break;
        else return G.setErrorCode(12292), 0;
        d += 8;
      }
      if (2 > a || 3 < a) return G.setErrorCode(12293), 0;
      G.contextAttributes.majorVersion = a - 1;
      G.contextAttributes.minorVersion = 0;
      G.context = m.createContext(h.canvas, G.contextAttributes);
      if (0 != G.context)
        return (
          G.setErrorCode(12288),
          m.makeContextCurrent(G.context),
          (h.useWebGL = !0),
          v.moduleContextCreatedCallbacks.forEach(function (e) {
            e();
          }),
          m.makeContextCurrent(null),
          62004
        );
      G.setErrorCode(12297);
      return 0;
    }
    function Hc(a, b, c, d) {
      if (N) return T(8, 1, a, b, c, d);
      if (62e3 != a) return G.setErrorCode(12296), 0;
      if (62002 != b) return G.setErrorCode(12293), 0;
      G.setErrorCode(12288);
      return 62006;
    }
    function Ic(a, b) {
      if (N) return T(9, 1, a, b);
      if (62e3 != a) return G.setErrorCode(12296), 0;
      if (62004 != b) return G.setErrorCode(12294), 0;
      m.deleteContext(G.context);
      G.setErrorCode(12288);
      G.currentContext == b && (G.currentContext = 0);
      return 1;
    }
    function Jc(a, b) {
      if (N) return T(10, 1, a, b);
      if (62e3 != a) return G.setErrorCode(12296), 0;
      if (62006 != b) return G.setErrorCode(12301), 1;
      G.currentReadSurface == b && (G.currentReadSurface = 0);
      G.currentDrawSurface == b && (G.currentDrawSurface = 0);
      G.setErrorCode(12288);
      return 1;
    }
    function Kc() {
      return N ? T(11, 1) : G.currentContext;
    }
    function Lc() {
      return N ? T(12, 1) : G.currentContext ? 62e3 : 0;
    }
    function Mc(a) {
      if (N) return T(13, 1, a);
      if (12378 == a) return G.currentReadSurface;
      if (12377 == a) return G.currentDrawSurface;
      G.setErrorCode(12300);
      return 0;
    }
    function Nc(a) {
      if (N) return T(14, 1, a);
      G.setErrorCode(12288);
      return 62e3;
    }
    function Oc(a, b, c) {
      if (N) return T(15, 1, a, b, c);
      if (62e3 != a) return G.setErrorCode(12296), 0;
      b && (n()[b >> 2] = 1);
      c && (n()[c >> 2] = 4);
      G.defaultDisplayInitialized = !0;
      G.setErrorCode(12288);
      return 1;
    }
    function Pc(a, b, c, d) {
      if (N) return T(16, 1, a, b, c, d);
      if (62e3 != a) return G.setErrorCode(12296), 0;
      if (0 != d && 62004 != d) return G.setErrorCode(12294), 0;
      if ((0 != c && 62006 != c) || (0 != b && 62006 != b)) return G.setErrorCode(12301), 0;
      m.makeContextCurrent(d ? G.context : null);
      G.currentContext = d;
      G.currentDrawSurface = b;
      G.currentReadSurface = c;
      G.setErrorCode(12288);
      return 1;
    }
    function Qc() {
      if (N) return T(17, 1);
      G.currentContext = 0;
      G.currentReadSurface = 0;
      G.currentDrawSurface = 0;
      G.setErrorCode(12288);
      return 1;
    }
    function Rc(a, b) {
      if (N) return T(18, 1, a, b);
      if (G.defaultDisplayInitialized)
        if (h.ctx)
          if (h.ctx.isContextLost()) G.setErrorCode(12302);
          else return G.setErrorCode(12288), 1;
        else G.setErrorCode(12290);
      else G.setErrorCode(12289);
      return 0;
    }
    function me(a) {
      k.activeTexture(a);
    }
    function ne(a) {
      k.beginTransformFeedback(a);
    }
    function oe(a, b, c, d) {
      k.blendColor(a, b, c, d);
    }
    function pe(a) {
      k.blendEquation(a);
    }
    function qe(a, b) {
      k.blendEquationSeparate(a, b);
    }
    function re(a, b) {
      k.blendFunc(a, b);
    }
    function se(a, b, c, d) {
      k.blendFuncSeparate(a, b, c, d);
    }
    function te(a, b, c, d, e, f, g, l, p, u) {
      k.blitFramebuffer(a, b, c, d, e, f, g, l, p, u);
    }
    function ue(a) {
      return k.checkFramebufferStatus(a);
    }
    function ve(a) {
      k.clear(a);
    }
    function we(a, b, c, d) {
      k.clearBufferfi(a, b, c, d);
    }
    function xe(a, b, c, d) {
      k.clearColor(a, b, c, d);
    }
    function ye(a) {
      k.clearDepth(a);
    }
    function ze(a) {
      k.clearStencil(a);
    }
    function Ae(a, b, c, d, e) {
      k.copyBufferSubData(a, b, c, d, e);
    }
    function Be(a, b, c, d, e, f, g, l) {
      k.copyTexImage2D(a, b, c, d, e, f, g, l);
    }
    function Ce(a, b, c, d, e, f, g, l) {
      k.copyTexSubImage2D(a, b, c, d, e, f, g, l);
    }
    function De(a, b, c, d, e, f, g, l, p) {
      k.copyTexSubImage3D(a, b, c, d, e, f, g, l, p);
    }
    function Ee(a) {
      k.cullFace(a);
    }
    function Fe(a) {
      k.depthFunc(a);
    }
    function Ge(a, b) {
      k.depthRange(a, b);
    }
    function He(a) {
      k.disable(a);
    }
    function Ie(a) {
      k.enable(a);
    }
    function Je(a) {
      k.endQuery(a);
    }
    function Ke() {
      k.endTransformFeedback();
    }
    function Le() {
      k.finish();
    }
    function Me() {
      k.flush();
    }
    function Ne(a) {
      k.frontFace(a);
    }
    function Sc(a, b) {
      ra(a, b, "createVertexArray", m.vaos);
    }
    function Oe(a) {
      k.generateMipmap(a);
    }
    function Pe(a, b) {
      k.hint(a, b);
    }
    function Qe(a) {
      return k.isEnabled(a);
    }
    function Re(a) {
      k.lineWidth(a);
    }
    function Se() {
      k.pauseTransformFeedback();
    }
    function Te(a, b) {
      k.polygonOffset(a, b);
    }
    function Ue(a) {
      k.readBuffer(a);
    }
    function Ve(a, b, c, d) {
      k.renderbufferStorage(a, b, c, d);
    }
    function We(a, b, c, d, e) {
      k.renderbufferStorageMultisample(a, b, c, d, e);
    }
    function Xe() {
      k.resumeTransformFeedback();
    }
    function Ye(a, b, c, d) {
      k.scissor(a, b, c, d);
    }
    function Ze(a, b, c) {
      k.stencilFunc(a, b, c);
    }
    function $e(a, b, c, d) {
      k.stencilFuncSeparate(a, b, c, d);
    }
    function af(a) {
      k.stencilMask(a);
    }
    function bf(a, b) {
      k.stencilMaskSeparate(a, b);
    }
    function cf(a, b, c) {
      k.stencilOp(a, b, c);
    }
    function df(a, b, c, d) {
      k.stencilOpSeparate(a, b, c, d);
    }
    function ef(a, b, c) {
      k.texParameterf(a, b, c);
    }
    function ff(a, b, c) {
      k.texParameteri(a, b, c);
    }
    function gf(a, b, c, d, e) {
      k.texStorage2D(a, b, c, d, e);
    }
    function hf(a, b, c, d, e, f) {
      k.texStorage3D(a, b, c, d, e, f);
    }
    function jf(a, b) {
      k.vertexAttrib1f(a, b);
    }
    function kf(a, b, c) {
      k.vertexAttrib2f(a, b, c);
    }
    function lf(a, b, c, d) {
      k.vertexAttrib3f(a, b, c, d);
    }
    function mf(a, b, c, d, e) {
      k.vertexAttrib4f(a, b, c, d, e);
    }
    function nf(a, b, c, d, e) {
      k.vertexAttribI4i(a, b, c, d, e);
    }
    function of(a, b, c, d, e) {
      k.vertexAttribI4ui(a, b, c, d, e);
    }
    function pf(a, b, c, d) {
      k.viewport(a, b, c, d);
    }
    function Tc(a, b, c) {
      c = 0 < c ? c : Ca(a) + 1;
      c = Array(c);
      a = Uc(a, c, 0, c.length);
      b && (c.length = a);
      return c;
    }
    function Lb() {
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
    function qf() {
      var a = Lb().split("\n");
      "Error" == a[0] && a.shift();
      Vc(a);
      Da.last_addr = kb(a[3]);
      Da.last_stack = a;
      return Da.last_addr;
    }
    function Wc(a) {
      return N ? T(21, 1, a) : 52;
    }
    function Xc(a, b, c, d) {
      return N ? T(22, 1, a, b, c, d) : 52;
    }
    function Yc(a, b, c, d, e) {
      if (N) return T(23, 1, a, b, c, d, e);
      Kb(b, c);
      return 70;
    }
    function Zc(a, b, c, d) {
      if (N) return T(24, 1, a, b, c, d);
      for (var e = 0, f = 0; f < c; f++) {
        var g = y()[b >> 2],
          l = y()[(b + 4) >> 2];
        b += 8;
        for (var p = 0; p < l; p++) {
          var u = A()[g + p],
            t = rf[a];
          0 === u || 10 === u ? ((1 === a ? $c : aa)(Mb(t, 0)), (t.length = 0)) : t.push(u);
        }
        e += l;
      }
      y()[d >> 2] = e;
      return 0;
    }
    function sf(a, b, c) {
      var d = Ea();
      try {
        ad(a, b, c);
      } catch (e) {
        xa(d);
        if (e !== e + 0) throw e;
        Na(1, 0);
      }
    }
    function tf(a, b) {
      var c = Ea();
      try {
        return Nb(a, b);
      } catch (d) {
        xa(c);
        if (d !== d + 0) throw d;
        Na(1, 0);
      }
    }
    function uf(a, b, c) {
      var d = Ea();
      try {
        return bd(a, b, c);
      } catch (e) {
        xa(d);
        if (e !== e + 0) throw e;
        Na(1, 0);
      }
    }
    function vf(a, b, c, d, e, f) {
      var g = Ea();
      try {
        cd(a, b, c, d, e, f);
      } catch (l) {
        xa(g);
        if (l !== l + 0) throw l;
        Na(1, 0);
      }
    }
    function dd() {
      function a() {
        if (!lb && ((lb = !0), (h.calledRun = !0), !Aa)) {
          N || mb(Db);
          Ob(h);
          if (h.onRuntimeInitialized) h.onRuntimeInitialized();
          if (!N) {
            if (h.postRun)
              for ("function" == typeof h.postRun && (h.postRun = [h.postRun]); h.postRun.length; ) ed.unshift(h.postRun.shift());
            mb(ed);
          }
        }
      }
      if (!(0 < ua))
        if (N) Ob(h), N || mb(Db), startWorker(h);
        else {
          if (h.preRun) for ("function" == typeof h.preRun && (h.preRun = [h.preRun]); h.preRun.length; ) Pb.unshift(h.preRun.shift());
          mb(Pb);
          0 < ua ||
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
    var h = (x = void 0 === x ? {} : x),
      Ob,
      bb;
    h.ready = new Promise(function (a, b) {
      Ob = a;
      bb = b;
    });
    var fd = Object.assign({}, h),
      Qb = "./this.program",
      db = function (a, b) {
        throw b;
      },
      Bb = "object" == typeof window,
      qa = "function" == typeof importScripts,
      ca = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
      N = h.ENVIRONMENT_IS_PTHREAD || !1,
      ja = "";
    if (ca) {
      var nb = require("fs"),
        Rb = require("path");
      ja = qa ? Rb.dirname(ja) + "/" : __dirname + "/";
      var gd = function (a, b) {
        a = a.startsWith("file://") ? new URL(a) : Rb.normalize(a);
        return nb.readFileSync(a, b ? void 0 : "utf8");
      };
      var Ab = function (a) {
        a = gd(a, !0);
        a.buffer || (a = new Uint8Array(a));
        return a;
      };
      var Cb = function (a, b, c, d) {
        d = void 0 === d ? !0 : d;
        a = a.startsWith("file://") ? new URL(a) : Rb.normalize(a);
        nb.readFile(a, d ? void 0 : "utf8", function (e, f) {
          e ? c(e) : b(d ? f.buffer : f);
        });
      };
      !h.thisProgram && 1 < process.argv.length && (Qb = process.argv[1].replace(/\\/g, "/"));
      db = function (a, b) {
        process.exitCode = a;
        throw b;
      };
      h.inspect = function () {
        return "[Emscripten Module object]";
      };
      try {
        var wf = require("worker_threads");
      } catch (a) {
        throw (console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'), a);
      }
      global.Worker = wf.Worker;
    } else if (Bb || qa)
      qa ? (ja = self.location.href) : "undefined" != typeof document && document.currentScript && (ja = document.currentScript.src),
        r && (ja = r),
        (ja = 0 !== ja.indexOf("blob:") ? ja.substr(0, ja.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ""),
        ca ||
          ((gd = function (a) {
            var b = new XMLHttpRequest();
            b.open("GET", a, !1);
            b.send(null);
            return b.responseText;
          }),
          qa &&
            (Ab = function (a) {
              var b = new XMLHttpRequest();
              b.open("GET", a, !1);
              b.responseType = "arraybuffer";
              b.send(null);
              return new Uint8Array(b.response);
            }),
          (Cb = function (a, b, c) {
            var d = new XMLHttpRequest();
            d.open("GET", a, !0);
            d.responseType = "arraybuffer";
            d.onload = function () {
              200 == d.status || (0 == d.status && d.response) ? b(d.response) : c();
            };
            d.onerror = c;
            d.send(null);
          }));
    ca && "undefined" == typeof performance && (global.performance = require("perf_hooks").performance);
    var hd = console.log.bind(console),
      id = console.error.bind(console);
    ca &&
      ((hd = function () {
        var a = $jscomp.getRestArguments.apply(0, arguments);
        return nb.writeSync(1, a.join(" ") + "\n");
      }),
      (id = function () {
        var a = $jscomp.getRestArguments.apply(0, arguments);
        return nb.writeSync(2, a.join(" ") + "\n");
      }));
    var $c = h.print || hd,
      aa = h.printErr || id;
    Object.assign(h, fd);
    fd = null;
    h.thisProgram && (Qb = h.thisProgram);
    h.quit && (db = h.quit);
    var La;
    h.wasmBinary && (La = h.wasmBinary);
    "object" != typeof WebAssembly && Y("no native wasm support detected");
    var uc,
      Aa = !1,
      va,
      la,
      mc,
      nc,
      oc,
      pc,
      qc,
      rc,
      sc,
      ob = h.INITIAL_MEMORY || 33554432;
    65536 <= ob || Y("INITIAL_MEMORY should be larger than STACK_SIZE, was " + ob + "! (STACK_SIZE=65536)");
    if (N) var Z = h.wasmMemory;
    else if (h.wasmMemory) Z = h.wasmMemory;
    else if (((Z = new WebAssembly.Memory({ initial: ob / 65536, maximum: 32768, shared: !0 })), !(Z.buffer instanceof SharedArrayBuffer)))
      throw (
        (aa(
          "requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"
        ),
        ca && aa("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),
        Error("bad memory"))
      );
    V();
    ob = Z.buffer.byteLength;
    var Pb = [],
      Db = [],
      xf = [],
      ed = [],
      ua = 0,
      zb = null,
      Ja = null;
    var Ka = "ink.wasm";
    Ka.startsWith("data:application/octet-stream;base64,") || (Ka = U(Ka));
    var Sb = {
        302104: function (a, b, c, d) {
          return setTimeout(function () {
            return window.inkWasmRegistry[d].dynCall_vi(b, c);
          }, a);
        },
        302185: function (a) {
          clearTimeout(a);
        },
        302207: function (a, b) {
          window.inkHostRegistry[b].setTargetFPS(a);
        },
        302256: function (a) {
          window.inkHostRegistry[a].bindScreen();
        },
        302301: function (a, b) {
          window.inkHostRegistry[b].requestImage(S(a));
        },
        302364: function (a, b, c, d) {
          window.inkHostRegistry[d].setCursor(a, b, c);
        },
        302418: function (a, b, c) {
          window.inkHostRegistry[c].navigateToUri(S(a, b));
        },
        302486: function (a, b) {
          window.inkHostRegistry[b].setKeyboardMode(a);
        },
        302538: function (a) {
          return window.inkHostRegistry[a].shouldPreloadShaders();
        },
        302600: function (a) {
          return window.inkHostRegistry[a].shouldRegisterDocument();
        },
        302664: function (a, b, c, d, e, f) {
          a = window.inkHostRegistry[f].renderText(A().subarray(a, a + b), c, d);
          w().set(a, e);
        },
        302778: function (a, b, c, d, e, f) {
          window.inkHostRegistry[a]
            .getFontData(S(b, c))
            .then(function (g) {
              if (g instanceof Error) {
                g = Ca(g.message) + 1;
                var l = pa(g);
                da(name, l, g);
                y()[d >> 2] = l;
              } else (l = pa(g.length)), A().set(g, l), (y()[d >> 2] = l), (y()[e >> 2] = g.length);
            })
            .catch(function (g) {
              if (g instanceof Error) {
                g = Ca(g.message) + 1;
                var l = pa(g);
                da(name, l, g);
                y()[d >> 2] = l;
              }
            })
            .finally(function () {
              n()[f >> 2] = 1;
              Atomics.notify(n(), f >> 2);
            });
        },
        303571: function (a) {
          Atomics.wait(n(), a >> 2, 0);
        },
        303611: function (a, b, c, d, e, f) {
          return (a = window.inkHostRegistry[a].selectMatchingFont(S(b, c), d, !!e, f))
            ? ((b = Ca(a) + 1), (c = pa(b)), da(a, c, b), c)
            : 0;
        },
        303867: function (a, b, c) {
          window.inkHostRegistry[c].onSceneChange(new Uint8Array(A().subarray(a, a + b)));
        },
        303960: function (a, b, c, d, e, f, g, l, p) {
          window.inkHostRegistry[p].onImageExported(a, b, c, new Uint8ClampedArray(A().subarray(d, d + e)), f, g, S(l));
        },
        304100: function (a, b, c) {
          window.inkHostRegistry[c].onToolEvent(new Uint8Array(A().subarray(a, a + b)));
        },
        304191: function (a, b) {
          window.inkHostRegistry[b].onSequencePointReached(a);
        },
        304250: function (a, b, c) {
          window.inkHostRegistry[c].onFlagChanged(a, !!b);
        },
        304306: function (a) {
          window.inkHostRegistry[a].onCameraChanged();
        },
        304356: function (a, b) {
          window.inkHostRegistry[b].onCameraMovementStateChanged(!!a);
        },
        304423: function (a, b) {
          window.inkHostRegistry[b].onBlockingStateChanged(!!a);
        },
        304484: function (a) {
          window.inkHostRegistry[a].onInvisibleLayerActionPrevented();
        },
        304550: function (a, b, c) {
          window.inkHostRegistry[c].onPdfLoadSuccess(new Uint8Array(A().subarray(a, a + b)));
        },
        304646: function (a) {
          window.inkHostRegistry[a].onPdfLoadPasswordRequired();
        },
        304706: function (a, b, c) {
          window.inkHostRegistry[c].onPdfLoadFailure(S(a, b));
        },
        304777: function (a, b, c, d) {
          window.inkHostRegistry[d].onPdfSaveSuccess(a, new Uint8Array(A().subarray(b, b + c)));
        },
        304877: function (a, b, c, d) {
          window.inkHostRegistry[d].onPdfSaveFailure(a, S(b, c));
        },
        304952: function (a, b) {
          window.inkHostRegistry[a].onPdfUnsupportedFeature(b);
        },
        305012: function (a) {
          window.inkHostRegistry[a].onPdfFormChanged();
        },
        305063: function (a, b, c, d, e, f, g, l) {
          window.inkHostRegistry[a].onPdfFormFieldFocused(b, new Uint8Array(A().subarray(c, c + d)), e, !!f, S(g, l));
        },
        305200: function (a, b, c) {
          window.inkHostRegistry[c].onPdfFormTextFieldFocusChanged(!0, S(a, b));
        },
        305292: function (a) {
          window.inkHostRegistry[a].onPdfFormTextFieldFocusChanged(!1);
        },
        305362: function (a, b) {
          window.inkHostRegistry[b].onPendingTexturesChanged(!!a);
        },
        305425: function (a, b, c) {
          if (h.canvas) {
            var d = h.canvas.getContext("webgl");
            if (d) {
              var e = d.getExtension("WEBGL_debug_renderer_info");
              e && (da(d.getParameter(e.UNMASKED_RENDERER_WEBGL), a, c), da(d.getParameter(e.UNMASKED_VENDOR_WEBGL), b, c));
            }
          }
        },
        305711: function () {
          return !!h.ctx;
        },
        305733: function () {
          debugger;
        },
        305746: function () {
          return "undefined" !== typeof wasmOffsetConverter;
        }
      },
      Tb = function (a) {
        a.terminate();
        a.onmessage = function () {};
      },
      jd = function (a) {
        (a = J.pthreads[a]) || Y(void 0);
        J.returnWorkerToPool(a);
      },
      kd = function (a) {
        var b = J.getNewWorker();
        if (!b) return 6;
        J.runningWorkers.push(b);
        J.pthreads[a.pthread_ptr] = b;
        b.pthread_ptr = a.pthread_ptr;
        var c = { cmd: "run", start_routine: a.startRoutine, arg: a.arg, pthread_ptr: a.pthread_ptr };
        ca && b.unref();
        b.postMessage(c, a.transferList);
        return 0;
      },
      sa = 0,
      cb = function () {
        return ld || 0 < sa;
      },
      Mb = function (a, b, c) {
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
      S = function (a, b) {
        return a ? Mb(A(), a, b) : "";
      },
      yf = function (a) {
        va = a;
        if (N) throw (vc(a), "unwind");
        Fb(a);
      },
      Gb = yf,
      md = function (a) {
        if (a instanceof Eb || "unwind" == a) return va;
        db(1, a);
      },
      J = {
        unusedWorkers: [],
        runningWorkers: [],
        tlsInitFunctions: [],
        pthreads: {},
        init: function () {
          N ? J.initWorker() : J.initMainThread();
        },
        initMainThread: function () {
          for (var a = 1; a--; ) J.allocateUnusedWorker();
          Pb.unshift(function () {
            za("loading-workers");
            J.loadWasmModuleToAllWorkers(function () {
              return fa("loading-workers");
            });
          });
        },
        initWorker: function () {
          ld = !1;
        },
        setExitStatus: function (a) {
          va = a;
        },
        terminateAllThreads__deps: ["$terminateWorker"],
        terminateAllThreads: function () {
          for (var a = $jscomp.makeIterator(J.runningWorkers), b = a.next(); !b.done; b = a.next()) (b = b.value), Tb(b);
          a = $jscomp.makeIterator(J.unusedWorkers);
          for (b = a.next(); !b.done; b = a.next()) (b = b.value), Tb(b);
          J.unusedWorkers = [];
          J.runningWorkers = [];
          J.pthreads = [];
        },
        returnWorkerToPool: function (a) {
          var b = a.pthread_ptr;
          delete J.pthreads[b];
          J.unusedWorkers.push(a);
          J.runningWorkers.splice(J.runningWorkers.indexOf(a), 1);
          a.pthread_ptr = 0;
          Ub(b);
        },
        receiveObjectTransfer: function () {},
        threadInitTLS: function () {
          J.tlsInitFunctions.forEach(function (a) {
            return a();
          });
        },
        loadWasmModuleToWorker: function (a) {
          return new Promise(function (b) {
            a.onmessage = function (f) {
              f = f.data;
              var g = f.cmd;
              if (f.targetThread && f.targetThread != Oa()) {
                var l = J.pthreads[f.targetThread];
                l
                  ? l.postMessage(f, f.transferList)
                  : aa(
                      'Internal error! Worker sent a message "' +
                        g +
                        '" to target pthread ' +
                        f.targetThread +
                        ", but that thread no longer exists!"
                    );
              } else
                "checkMailbox" === g
                  ? pb()
                  : "spawnThread" === g
                  ? kd(f)
                  : "cleanupThread" === g
                  ? jd(f.thread)
                  : "killThread" === g
                  ? ((f = f.thread),
                    (g = J.pthreads[f]),
                    delete J.pthreads[f],
                    Tb(g),
                    Ub(f),
                    J.runningWorkers.splice(J.runningWorkers.indexOf(g), 1),
                    (g.pthread_ptr = 0))
                  : "cancelThread" === g
                  ? ((f = J.pthreads[f.thread]), f.postMessage({ cmd: "cancel" }))
                  : "loaded" === g
                  ? ((a.loaded = !0), ca && !a.pthread_ptr && a.unref(), b(a))
                  : "alert" === g
                  ? alert("Thread " + f.threadId + ": " + f.text)
                  : "setimmediate" === f.target
                  ? a.postMessage(f)
                  : "callHandler" === g
                  ? h[f.handler].apply(h, $jscomp.arrayFromIterable(f.args))
                  : g && aa("worker sent an unknown command " + g);
            };
            a.onerror = function (f) {
              aa("worker sent an error! " + f.filename + ":" + f.lineno + ": " + f.message);
              throw f;
            };
            ca &&
              (a.on("message", function (f) {
                return a.onmessage({ data: f });
              }),
              a.on("error", function (f) {
                return a.onerror(f);
              }));
            var c = [],
              d = ["onExit", "onAbort", "print", "printErr"];
            d = $jscomp.makeIterator(d);
            for (var e = d.next(); !e.done; e = d.next()) (e = e.value), h.hasOwnProperty(e) && c.push(e);
            a.postMessage({ cmd: "load", handlers: c, urlOrBlob: h.mainScriptUrlOrBlob || r, wasmMemory: Z, wasmModule: uc });
          });
        },
        loadWasmModuleToAllWorkers: function (a) {
          if (N) return a();
          var b = Promise.all(J.unusedWorkers.map(J.loadWasmModuleToWorker));
          b.then(a);
        },
        allocateUnusedWorker: function () {
          var a = U("ink.worker.js");
          a = new Worker(a);
          J.unusedWorkers.push(a);
        },
        getNewWorker: function () {
          0 == J.unusedWorkers.length && (J.allocateUnusedWorker(), J.loadWasmModuleToWorker(J.unusedWorkers[0]));
          return J.unusedWorkers.pop();
        }
      };
    h.PThread = J;
    var mb = function (a) {
        for (; 0 < a.length; ) a.shift()(h);
      },
      zf = function () {
        var a = Oa(),
          b = y()[(a + 52) >> 2];
        a = y()[(a + 56) >> 2];
        a = b - a;
        nd(b, a);
        xa(b);
      };
    h.establishStackSpace = zf;
    var Af = function (a, b) {
      a = Nb.apply(null, [a, b]);
      cb() ? J.setExitStatus(a) : Vb(a);
    };
    h.invokeEntryPoint = Af;
    var ld = h.noExitRuntime || !0,
      Bf = function (a) {
        od(a, !qa, 1, !Bb, 65536, !1);
        J.threadInitTLS();
      },
      Cf = function (a) {
        N ? postMessage({ cmd: "cleanupThread", thread: a }) : jd(a);
      },
      xc = function (a, b, c, d) {
        if ("undefined" == typeof SharedArrayBuffer)
          return aa("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
        var e = [];
        if (N && 0 === e.length) return wc(a, b, c, d);
        a = { startRoutine: c, pthread_ptr: a, arg: d, transferList: e };
        return N ? ((a.cmd = "spawnThread"), postMessage(a, e), 0) : kd(a);
      },
      qb = {},
      Ma = function (a) {
        for (; a.length; ) {
          var b = a.pop(),
            c = a.pop();
          c(b);
        }
      },
      Ba = {},
      wa = {},
      fb = {},
      rb = function (a) {
        throw new Df(a);
      },
      na = function (a, b, c) {
        function d(l) {
          l = c(l);
          l.length !== a.length && rb("Mismatched type converter count");
          for (var p = 0; p < a.length; ++p) ma(a[p], l[p]);
        }
        a.forEach(function (l) {
          fb[l] = b;
        });
        var e = Array(b.length),
          f = [],
          g = 0;
        b.forEach(function (l, p) {
          wa.hasOwnProperty(l)
            ? (e[p] = wa[l])
            : (f.push(l),
              Ba.hasOwnProperty(l) || (Ba[l] = []),
              Ba[l].push(function () {
                e[p] = wa[l];
                ++g;
                g === f.length && d(e);
              }));
        });
        0 === f.length && d(e);
      },
      Ef = function (a) {
        var b = qb[a];
        delete qb[a];
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
        na([a], e, function (l) {
          c.forEach(function (p, u) {
            var t = l[u],
              F = p.getter,
              L = p.getterContext,
              q = l[u + d],
              C = p.setter,
              D = p.setterContext;
            p.read = function (M) {
              return t.fromWireType(F(L, M));
            };
            p.write = function (M, E) {
              var R = [];
              C(D, M, q.toWireType(R, E));
              Ma(R);
            };
          });
          return [
            {
              name: b.name,
              fromWireType: function (p) {
                for (var u = Array(d), t = 0; t < d; ++t) u[t] = c[t].read(p);
                g(p);
                return u;
              },
              toWireType: function (p, u) {
                if (d !== u.length)
                  throw new TypeError("Incorrect number of tuple elements for " + b.name + ": expected=" + d + ", actual=" + u.length);
                for (var t = f(), F = 0; F < d; ++F) c[F].write(t, u[F]);
                null !== p && p.push(g, t);
                return t;
              },
              argPackAdvance: ka,
              readValueFromPointer: eb,
              destructorFunction: g
            }
          ];
        });
      },
      sb = {},
      Ff = function (a) {
        var b = sb[a];
        delete sb[a];
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
        na([a], f, function (g) {
          var l = {};
          e.forEach(function (p, u) {
            var t = p.fieldName,
              F = g[u],
              L = p.getter,
              q = p.getterContext,
              C = g[u + e.length],
              D = p.setter,
              M = p.setterContext;
            l[t] = {
              read: function (E) {
                return F.fromWireType(L(q, E));
              },
              write: function (E, R) {
                var ha = [];
                D(M, E, C.toWireType(ha, R));
                Ma(ha);
              }
            };
          });
          return [
            {
              name: b.name,
              fromWireType: function (p) {
                var u = {},
                  t;
                for (t in l) u[t] = l[t].read(p);
                d(p);
                return u;
              },
              toWireType: function (p, u) {
                for (var t in l) if (!(t in u)) throw new TypeError('Missing field: "' + t + '"');
                var F = c();
                for (t in l) l[t].write(F, u[t]);
                null !== p && p.push(d, F);
                return F;
              },
              argPackAdvance: ka,
              readValueFromPointer: eb,
              destructorFunction: d
            }
          ];
        });
      },
      Gf = function () {},
      Hf = function () {
        for (var a = Array(256), b = 0; 256 > b; ++b) a[b] = String.fromCharCode(b);
        pd = a;
      },
      pd,
      X = function (a) {
        for (var b = ""; A()[a]; ) b += pd[A()[a++]];
        return b;
      },
      Q = function (a) {
        throw new Pa(a);
      },
      ka = 8,
      If = function (a, b, c, d) {
        b = X(b);
        ma(a, {
          name: b,
          fromWireType: function (e) {
            return !!e;
          },
          toWireType: function (e, f) {
            return f ? c : d;
          },
          argPackAdvance: ka,
          readValueFromPointer: function (e) {
            return this.fromWireType(A()[e]);
          },
          destructorFunction: null
        });
      },
      Wb = function (a) {
        Q(a.$$.ptrType.registeredClass.name + " instance already deleted");
      },
      Xb = !1,
      qd = function () {},
      rd = function (a) {
        --a.count.value;
        var b = 0 === a.count.value;
        b && (a.smartPtr ? a.smartPtrType.rawDestructor(a.smartPtr) : a.ptrType.registeredClass.rawDestructor(a.ptr));
      },
      Ac = function (a, b, c) {
        if (b === c) return a;
        if (void 0 === c.baseClass) return null;
        a = Ac(a, b, c.baseClass);
        return null === a ? null : c.downcast(a);
      },
      zc = {},
      Jf = function () {
        return Object.keys(Qa).length;
      },
      Kf = function () {
        var a = [],
          b;
        for (b in Qa) Qa.hasOwnProperty(b) && a.push(Qa[b]);
        return a;
      },
      Ra = [],
      Yb = function () {
        for (; Ra.length; ) {
          var a = Ra.pop();
          a.$$.deleteScheduled = !1;
          a["delete"]();
        }
      },
      Sa,
      Lf = function (a) {
        Sa = a;
        Ra.length && Sa && Sa(Yb);
      },
      Qa = {},
      fe = function (a, b) {
        for (void 0 === b && Q("ptr should not be undefined"); a.baseClass; ) (b = a.upcast(b)), (a = a.baseClass);
        return Qa[b];
      },
      gb = function (a, b) {
        (b.ptrType && b.ptr) || rb("makeClassHandle requires ptr and ptrType");
        var c = !!b.smartPtrType,
          d = !!b.smartPtr;
        c !== d && rb("Both smartPtrType and smartPtr must be specified");
        b.count = { value: 1 };
        return Ta(Object.create(a, { $$: { value: b } }));
      },
      Ta = function (a) {
        if ("undefined" === typeof FinalizationRegistry)
          return (
            (Ta = function (b) {
              return b;
            }),
            a
          );
        Xb = new FinalizationRegistry(function (b) {
          rd(b.$$);
        });
        Ta = function (b) {
          var c = b.$$,
            d = !!c.smartPtr;
          d && ((c = { $$: c }), Xb.register(b, c, b));
          return b;
        };
        qd = function (b) {
          return Xb.unregister(b);
        };
        return Ta(a);
      },
      Mf = function () {
        var a = {};
        Object.assign(
          hb.prototype,
          ((a.isAliasOf = function (b) {
            if (!(this instanceof hb && b instanceof hb)) return !1;
            var c = this.$$.ptrType.registeredClass,
              d = this.$$.ptr,
              e = b.$$.ptrType.registeredClass;
            for (b = b.$$.ptr; c.baseClass; ) (d = c.upcast(d)), (c = c.baseClass);
            for (; e.baseClass; ) (b = e.upcast(b)), (e = e.baseClass);
            return c === e && d === b;
          }),
          (a.clone = function () {
            this.$$.ptr || Wb(this);
            if (this.$$.preservePointerOnDelete) return (this.$$.count.value += 1), this;
            var b = Ta,
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
            this.$$.ptr || Wb(this);
            this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Q("Object already scheduled for deletion");
            qd(this);
            rd(this.$$);
            this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
          }),
          (a.isDeleted = function () {
            return !this.$$.ptr;
          }),
          (a.deleteLater = function () {
            this.$$.ptr || Wb(this);
            this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Q("Object already scheduled for deletion");
            Ra.push(this);
            1 === Ra.length && Sa && Sa(Yb);
            this.$$.deleteScheduled = !0;
            return this;
          }),
          a)
        );
      },
      Bc = function (a) {
        if (void 0 === a) return "_unknown";
        a = a.replace(/[^a-zA-Z0-9_]/g, "$");
        var b = a.charCodeAt(0);
        return 48 <= b && 57 >= b ? "_" + a : a;
      },
      sd = function (a, b, c) {
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
      Zb = function (a, b, c) {
        h.hasOwnProperty(a)
          ? ((void 0 === c || (void 0 !== h[a].overloadTable && void 0 !== h[a].overloadTable[c])) &&
              Q("Cannot register public name '" + a + "' twice"),
            sd(h, a, a),
            h.hasOwnProperty(c) && Q("Cannot register multiple overloads of a function with the same number of arguments (" + c + ")!"),
            (h[a].overloadTable[c] = b))
          : ((h[a] = b), void 0 !== c && (h[a].numArguments = c));
      },
      ib = function (a, b, c) {
        for (; b !== c; )
          b.upcast || Q("Expected null or instance of " + c.name + ", got an instance of " + b.name), (a = b.upcast(a)), (b = b.baseClass);
        return a;
      },
      Nf = function () {
        var a = {};
        Object.assign(
          jb.prototype,
          ((a.getPointee = function (b) {
            this.rawGetPointee && (b = this.rawGetPointee(b));
            return b;
          }),
          (a.destructor = function (b) {
            this.rawDestructor && this.rawDestructor(b);
          }),
          (a.argPackAdvance = ka),
          (a.readValueFromPointer = Cc),
          (a.deleteObject = function (b) {
            if (null !== b) b["delete"]();
          }),
          (a.fromWireType = ee),
          a)
        );
      },
      td = function (a, b, c) {
        h.hasOwnProperty(a) || rb("Replacing nonexistant public symbol");
        void 0 !== h[a].overloadTable && void 0 !== c ? (h[a].overloadTable[c] = b) : ((h[a] = b), (h[a].argCount = c));
      },
      Of = function (a, b) {
        var c = [];
        return function () {
          c.length = 0;
          Object.assign(c, arguments);
          var d = b;
          var e = h["dynCall_" + a];
          return (d = c && c.length ? e.apply(null, [d].concat(c)) : e.call(null, d));
        };
      },
      ba = function (a, b) {
        a = X(a);
        var c = Of(a, b);
        "function" != typeof c && Q("unknown function pointer with signature " + a + ": " + b);
        return c;
      },
      Pf = function (a, b) {
        var c = Hb(b, function (d) {
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
      vd = function (a) {
        a = ud(a);
        var b = X(a);
        oa(a);
        return b;
      },
      Fa = function (a, b) {
        function c(f) {
          e[f] || wa[f] || (fb[f] ? fb[f].forEach(c) : (d.push(f), (e[f] = !0)));
        }
        var d = [],
          e = {};
        b.forEach(c);
        throw new Qf(a + ": " + d.map(vd).join([", "]));
      },
      Rf = function (a, b, c, d, e, f, g, l, p, u, t, F, L) {
        t = X(t);
        f = ba(e, f);
        l && (l = ba(g, l));
        u && (u = ba(p, u));
        L = ba(F, L);
        var q = Bc(t);
        Zb(q, function () {
          Fa("Cannot construct " + t + " due to unbound types", [d]);
        });
        na([a, b, c], d ? [d] : [], function (C) {
          C = C[0];
          if (d) {
            var D = C.registeredClass;
            var M = D.instancePrototype;
          } else M = hb.prototype;
          C = Hb(q, function () {
            if (Object.getPrototypeOf(this) !== E) throw new Pa("Use 'new' to construct " + t);
            if (void 0 === R.constructor_body) throw new Pa(t + " has no accessible constructor");
            var wd = R.constructor_body[arguments.length];
            if (void 0 === wd)
              throw new Pa(
                "Tried to invoke ctor of " +
                  t +
                  " with invalid number of parameters (" +
                  arguments.length +
                  ") - expected (" +
                  Object.keys(R.constructor_body).toString() +
                  ") parameters instead!"
              );
            return wd.apply(this, arguments);
          });
          var E = Object.create(M, { constructor: { value: C } });
          C.prototype = E;
          var R = new ge(t, C, E, L, D, f, l, u);
          R.baseClass &&
            (void 0 === R.baseClass.__derivedClasses && (R.baseClass.__derivedClasses = []), R.baseClass.__derivedClasses.push(R));
          D = new jb(t, R, !0, !1, !1);
          M = new jb(t + "*", R, !1, !1, !1);
          var ha = new jb(t + " const*", R, !1, !0, !1);
          zc[a] = { pointerType: M, constPointerType: ha };
          td(q, C);
          return [D, M, ha];
        });
      },
      $b = function (a, b) {
        for (var c = [], d = 0; d < a; d++) c.push(y()[(b + 4 * d) >> 2]);
        return c;
      },
      Sf = function (a, b, c, d, e, f) {
        var g = $b(b, c);
        e = ba(d, e);
        na([], [a], function (l) {
          l = l[0];
          var p = "constructor " + l.name;
          void 0 === l.registeredClass.constructor_body && (l.registeredClass.constructor_body = []);
          if (void 0 !== l.registeredClass.constructor_body[b - 1])
            throw new Pa(
              "Cannot register multiple constructors with identical number of parameters (" +
                (b - 1) +
                ") for class '" +
                l.name +
                "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
            );
          l.registeredClass.constructor_body[b - 1] = function () {
            Fa("Cannot construct " + l.name + " due to unbound types", g);
          };
          na([], g, function (u) {
            u.splice(1, 0, null);
            l.registeredClass.constructor_body[b - 1] = Jb(p, u, null, e, f);
            return [];
          });
          return [];
        });
      },
      xd = function (a) {
        a = a.trim();
        var b = a.indexOf("(");
        return -1 !== b ? a.substr(0, b) : a;
      },
      Tf = function (a, b, c, d, e, f, g, l, p) {
        var u = $b(c, d);
        b = X(b);
        b = xd(b);
        f = ba(e, f);
        na([], [a], function (t) {
          function F() {
            Fa("Cannot call " + L + " due to unbound types", u);
          }
          t = t[0];
          var L = t.name + "." + b;
          b.startsWith("@@") && (b = Symbol[b.substring(2)]);
          l && t.registeredClass.pureVirtualFunctions.push(b);
          var q = t.registeredClass.instancePrototype,
            C = q[b];
          void 0 === C || (void 0 === C.overloadTable && C.className !== t.name && C.argCount === c - 2)
            ? ((F.argCount = c - 2), (F.className = t.name), (q[b] = F))
            : (sd(q, b, L), (q[b].overloadTable[c - 2] = F));
          na([], u, function (D) {
            D = Jb(L, D, t, f, g, p);
            void 0 === q[b].overloadTable ? ((D.argCount = c - 2), (q[b] = D)) : (q[b].overloadTable[c - 2] = D);
            return [];
          });
          return [];
        });
      },
      yd = function (a, b, c) {
        a instanceof Object || Q(c + ' with invalid "this": ' + a);
        a instanceof b.registeredClass.constructor || Q(c + ' incompatible with "this" of type ' + a.constructor.name);
        a.$$.ptr || Q("cannot call emscripten binding method " + c + " on deleted object");
        return ib(a.$$.ptr, a.$$.ptrType.registeredClass, b.registeredClass);
      },
      Uf = function (a, b, c, d, e, f, g, l, p, u) {
        b = X(b);
        e = ba(d, e);
        na([], [a], function (t) {
          t = t[0];
          var F = t.name + "." + b,
            L = {
              get: function () {
                Fa("Cannot access " + F + " due to unbound types", [c, g]);
              },
              enumerable: !0,
              configurable: !0
            };
          L.set = p
            ? function () {
                return Fa("Cannot access " + F + " due to unbound types", [c, g]);
              }
            : function () {
                return Q(F + " is a read-only property");
              };
          Object.defineProperty(t.registeredClass.instancePrototype, b, L);
          na([], p ? [c, g] : [c], function (q) {
            var C = q[0],
              D = {
                get: function () {
                  var E = yd(this, t, F + " getter");
                  return C.fromWireType(e(f, E));
                },
                enumerable: !0
              };
            if (p) {
              p = ba(l, p);
              var M = q[1];
              D.set = function (E) {
                var R = yd(this, t, F + " setter"),
                  ha = [];
                p(u, R, M.toWireType(ha, E));
                Ma(ha);
              };
            }
            Object.defineProperty(t.registeredClass.instancePrototype, b, D);
            return [];
          });
          return [];
        });
      },
      ia = new Dc(),
      ac = function (a) {
        a >= ia.reserved && 0 === --ia.get(a).refcount && ia.free(a);
      },
      Vf = function () {
        for (var a = 0, b = ia.reserved; b < ia.allocated.length; ++b) void 0 !== ia.allocated[b] && ++a;
        return a;
      },
      W = {
        toValue: function (a) {
          a || Q("Cannot use deleted val. handle = " + a);
          return ia.get(a).value;
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
              return ia.allocate({ refcount: 1, value: a });
          }
        }
      },
      Wf = function (a, b) {
        b = X(b);
        ma(a, {
          name: b,
          fromWireType: function (c) {
            var d = W.toValue(c);
            ac(c);
            return d;
          },
          toWireType: function (c, d) {
            return W.toHandle(d);
          },
          argPackAdvance: ka,
          readValueFromPointer: eb,
          destructorFunction: null
        });
      },
      Xf = function (a, b, c) {
        switch (b) {
          case 1:
            return c
              ? function (d) {
                  return this.fromWireType(w()[d >> 0]);
                }
              : function (d) {
                  return this.fromWireType(A()[d >> 0]);
                };
          case 2:
            return c
              ? function (d) {
                  return this.fromWireType(H()[d >> 1]);
                }
              : function (d) {
                  return this.fromWireType(I()[d >> 1]);
                };
          case 4:
            return c
              ? function (d) {
                  return this.fromWireType(n()[d >> 2]);
                }
              : function (d) {
                  return this.fromWireType(y()[d >> 2]);
                };
          default:
            throw new TypeError("invalid integer width (" + b + "): " + a);
        }
      },
      Yf = function (a, b, c, d) {
        function e() {}
        b = X(b);
        e.values = {};
        ma(a, {
          name: b,
          constructor: e,
          fromWireType: function (f) {
            return this.constructor.values[f];
          },
          toWireType: function (f, g) {
            return g.value;
          },
          argPackAdvance: ka,
          readValueFromPointer: Xf(b, c, d),
          destructorFunction: null
        });
        Zb(b, e);
      },
      Ua = function (a, b) {
        var c = wa[a];
        void 0 === c && Q(b + " has unknown type " + vd(a));
        return c;
      },
      Zf = function (a, b, c) {
        var d = Ua(a, "enum");
        b = X(b);
        a = d.constructor;
        d = Object.create(d.constructor.prototype, { value: { value: c }, constructor: { value: Hb(d.name + "_" + b, function () {}) } });
        a.values[c] = d;
        a[b] = d;
      },
      Ib = function (a) {
        if (null === a) return "null";
        var b = typeof a;
        return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
      },
      $f = function (a, b) {
        switch (b) {
          case 4:
            return function (c) {
              return this.fromWireType(z()[c >> 2]);
            };
          case 8:
            return function (c) {
              return this.fromWireType(P()[c >> 3]);
            };
          default:
            throw new TypeError("invalid float width (" + b + "): " + a);
        }
      },
      ag = function (a, b, c) {
        b = X(b);
        ma(a, {
          name: b,
          fromWireType: function (d) {
            return d;
          },
          toWireType: function (d, e) {
            return e;
          },
          argPackAdvance: ka,
          readValueFromPointer: $f(b, c),
          destructorFunction: null
        });
      },
      bg = function (a, b, c, d, e, f, g) {
        var l = $b(b, c);
        a = X(a);
        a = xd(a);
        e = ba(d, e);
        Zb(
          a,
          function () {
            Fa("Cannot call " + a + " due to unbound types", l);
          },
          b - 1
        );
        na([], l, function (p) {
          p = [p[0], null].concat(p.slice(1));
          td(a, Jb(a, p, null, e, f, g), b - 1);
          return [];
        });
      },
      cg = function (a, b, c) {
        switch (b) {
          case 1:
            return c
              ? function (d) {
                  return w()[d >> 0];
                }
              : function (d) {
                  return A()[d >> 0];
                };
          case 2:
            return c
              ? function (d) {
                  return H()[d >> 1];
                }
              : function (d) {
                  return I()[d >> 1];
                };
          case 4:
            return c
              ? function (d) {
                  return n()[d >> 2];
                }
              : function (d) {
                  return y()[d >> 2];
                };
          default:
            throw new TypeError("invalid integer width (" + b + "): " + a);
        }
      },
      dg = function (a, b, c, d, e) {
        b = X(b);
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
          ? function (l, p) {
              return p >>> 0;
            }
          : function (l, p) {
              return p;
            };
        ma(a, {
          name: b,
          fromWireType: e,
          toWireType: g,
          argPackAdvance: ka,
          readValueFromPointer: cg(b, c, 0 !== d),
          destructorFunction: null
        });
      },
      eg = function (a, b, c) {
        function d(g) {
          var l = y()[g >> 2];
          g = y()[(g + 4) >> 2];
          return new f(w().buffer, g, l);
        }
        var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
          f = e[b];
        c = X(c);
        ma(a, { name: c, fromWireType: d, argPackAdvance: ka, readValueFromPointer: d }, { ignoreDuplicateRegistrations: !0 });
      },
      Uc = function (a, b, c, d) {
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
      da = function (a, b, c) {
        return Uc(a, A(), b, c);
      },
      Ca = function (a) {
        for (var b = 0, c = 0; c < a.length; ++c) {
          var d = a.charCodeAt(c);
          127 >= d ? b++ : 2047 >= d ? (b += 2) : 55296 <= d && 57343 >= d ? ((b += 4), ++c) : (b += 3);
        }
        return b;
      },
      fg = function (a, b) {
        b = X(b);
        var c = "std::string" === b,
          d = {};
        ma(
          a,
          ((d.name = b),
          (d.fromWireType = function (e) {
            var f = y()[e >> 2],
              g = e + 4;
            if (c)
              for (var l = g, p = 0; p <= f; ++p) {
                var u = g + p;
                if (p == f || 0 == A()[u]) {
                  var t = u - l;
                  l = S(l, t);
                  if (void 0 === F) var F = l;
                  else (F += String.fromCharCode(0)), (F += l);
                  l = u + 1;
                }
              }
            else {
              F = Array(f);
              for (p = 0; p < f; ++p) F[p] = String.fromCharCode(A()[g + p]);
              F = F.join("");
            }
            oa(e);
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
            var l = c && g ? Ca(f) : f.length;
            var p = pa(4 + l + 1),
              u = p + 4;
            y()[p >> 2] = l;
            if (c && g) da(f, u, l + 1);
            else if (g)
              for (g = 0; g < l; ++g) {
                var t = f.charCodeAt(g);
                255 < t && (oa(u), Q("String has UTF-16 code units that do not fit in 8 bits"));
                A()[u + g] = t;
              }
            else for (g = 0; g < l; ++g) A()[u + g] = f[g];
            null !== e && e.push(oa, p);
            return p;
          }),
          (d.argPackAdvance = ka),
          (d.readValueFromPointer = Cc),
          (d.destructorFunction = function (e) {
            oa(e);
          }),
          d)
        );
      },
      gg = function (a, b) {
        for (var c = "", d = 0; !(d >= b / 2); ++d) {
          var e = H()[(a + 2 * d) >> 1];
          if (0 == e) break;
          c += String.fromCharCode(e);
        }
        return c;
      },
      hg = function (a, b, c) {
        void 0 === c && (c = 2147483647);
        if (2 > c) return 0;
        c -= 2;
        var d = b;
        c = c < 2 * a.length ? c / 2 : a.length;
        for (var e = 0; e < c; ++e) {
          var f = a.charCodeAt(e);
          H()[b >> 1] = f;
          b += 2;
        }
        H()[b >> 1] = 0;
        return b - d;
      },
      ig = function (a) {
        return 2 * a.length;
      },
      jg = function (a, b) {
        for (var c = 0, d = ""; !(c >= b / 4); ) {
          var e = n()[(a + 4 * c) >> 2];
          if (0 == e) break;
          ++c;
          65536 <= e ? ((e -= 65536), (d += String.fromCharCode(55296 | (e >> 10), 56320 | (e & 1023)))) : (d += String.fromCharCode(e));
        }
        return d;
      },
      kg = function (a, b, c) {
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
          n()[b >> 2] = f;
          b += 4;
          if (b + 4 > c) break;
        }
        n()[b >> 2] = 0;
        return b - d;
      },
      lg = function (a) {
        for (var b = 0, c = 0; c < a.length; ++c) {
          var d = a.charCodeAt(c);
          55296 <= d && 57343 >= d && ++c;
          b += 4;
        }
        return b;
      },
      mg = function (a, b, c) {
        c = X(c);
        if (2 === b) {
          var d = gg;
          var e = hg;
          var f = ig;
          var g = function () {
            return I();
          };
          var l = 1;
        } else
          4 === b &&
            ((d = jg),
            (e = kg),
            (f = lg),
            (g = function () {
              return y();
            }),
            (l = 2));
        ma(a, {
          name: c,
          fromWireType: function (p) {
            for (var u = y()[p >> 2], t = g(), F, L = p + 4, q = 0; q <= u; ++q) {
              var C = p + 4 + q * b;
              if (q == u || 0 == t[C >> l]) {
                var D = C - L;
                L = d(L, D);
                void 0 === F ? (F = L) : ((F += String.fromCharCode(0)), (F += L));
                L = C + b;
              }
            }
            oa(p);
            return F;
          },
          toWireType: function (p, u) {
            "string" != typeof u && Q("Cannot pass non-string to C++ string type " + c);
            var t = f(u),
              F = pa(4 + t + b);
            y()[F >> 2] = t >> l;
            e(u, F + 4, t + b);
            null !== p && p.push(oa, F);
            return F;
          },
          argPackAdvance: ka,
          readValueFromPointer: eb,
          destructorFunction: function (p) {
            oa(p);
          }
        });
      },
      ng = function (a, b, c, d, e, f) {
        qb[a] = { name: X(b), rawConstructor: ba(c, d), rawDestructor: ba(e, f), elements: [] };
      },
      og = function (a, b, c, d, e, f, g, l, p) {
        qb[a].elements.push({
          getterReturnType: b,
          getter: ba(c, d),
          getterContext: e,
          setterArgumentType: f,
          setter: ba(g, l),
          setterContext: p
        });
      },
      pg = function (a, b, c, d, e, f) {
        sb[a] = { name: X(b), rawConstructor: ba(c, d), rawDestructor: ba(e, f), fields: [] };
      },
      qg = function (a, b, c, d, e, f, g, l, p, u) {
        sb[a].fields.push({
          fieldName: X(b),
          getterReturnType: c,
          getter: ba(d, e),
          getterContext: f,
          setterArgumentType: g,
          setter: ba(l, p),
          setterContext: u
        });
      },
      rg = function (a, b) {
        b = X(b);
        ma(a, { isVoid: !0, name: b, argPackAdvance: 0, fromWireType: function () {}, toWireType: function () {} });
      },
      sg = function () {
        return !0;
      },
      tb = function (a) {
        if (!Aa)
          try {
            if ((a(), !cb()))
              try {
                N ? Vb(va) : Gb(va);
              } catch (b) {
                md(b);
              }
          } catch (b) {
            md(b);
          }
      },
      bc = function (a) {
        if ("function" === typeof Atomics.waitAsync) {
          var b = Atomics.waitAsync(n(), a >> 2, a);
          b.value.then(pb);
          a += 128;
          Atomics.store(n(), a >> 2, 1);
        }
      };
    h.__emscripten_thread_mailbox_await = bc;
    var pb = function () {
      var a = Oa();
      a &&
        (bc(a),
        tb(function () {
          return zd();
        }));
    };
    h.checkMailbox = pb;
    var tg = function (a, b) {
        a == b
          ? setTimeout(function () {
              return pb();
            })
          : N
          ? postMessage({ targetThread: a, cmd: "checkMailbox" })
          : (a = J.pthreads[a]) && a.postMessage({ cmd: "checkMailbox" });
      },
      ug = function (a) {
        var b = Ea();
        a = a();
        xa(b);
        return a;
      },
      T = function (a, b) {
        var c = arguments.length - 2,
          d = arguments;
        return ug(function () {
          for (var e = c, f = Ad(8 * e), g = f >> 3, l = 0; l < c; l++) {
            var p = d[2 + l];
            P()[g + l] = p;
          }
          return Bd(a, e, f, b);
        });
      },
      cc = [],
      wg = function (a, b, c, d) {
        cc.length = c;
        d >>= 3;
        for (var e = 0; e < c; e++) cc[e] = P()[d + e];
        a = (c = 0 > a) ? Sb[-a - 1] : vg[a];
        J.currentProxiedOperationCallerThread = b;
        b = a.apply(null, cc);
        J.currentProxiedOperationCallerThread = 0;
        return b;
      },
      xg = function (a) {
        ca && J.pthreads[a].ref();
      },
      yg = function () {
        throw Infinity;
      },
      zg = function (a, b, c) {
        a = W.toValue(a);
        b = Ua(b, "emval::as");
        var d = [],
          e = W.toHandle(d);
        y()[c >> 2] = e;
        return b.toWireType(d, a);
      },
      Cd = function (a, b) {
        for (var c = Array(a), d = 0; d < a; ++d) c[d] = Ua(y()[(b + 4 * d) >> 2], "parameter " + d);
        return c;
      },
      Ag = function (a, b, c, d) {
        a = W.toValue(a);
        c = Cd(b, c);
        for (var e = Array(b), f = 0; f < b; ++f) {
          var g = c[f];
          e[f] = g.readValueFromPointer(d);
          d += g.argPackAdvance;
        }
        a = a.apply(void 0, e);
        return W.toHandle(a);
      },
      Bg = {},
      dc = function (a) {
        var b = Bg[a];
        return void 0 === b ? X(a) : b;
      },
      ec = [],
      Cg = function (a, b, c, d, e) {
        a = ec[a];
        b = W.toValue(b);
        c = dc(c);
        var f = [];
        a = a(b, c, f, e);
        f.length && (y()[d >> 2] = W.toHandle(f));
        return a;
      },
      Dd = function () {
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
      Dg = function (a) {
        if (0 === a) return W.toHandle(Dd());
        a = dc(a);
        return W.toHandle(Dd()[a]);
      },
      Eg = function (a) {
        var b = ec.length;
        ec.push(a);
        return b;
      },
      Fg = function (a, b) {
        var c = Cd(a, b),
          d = c.shift();
        a--;
        var e = Array(a);
        b = function (f, g, l, p) {
          for (var u = 0, t = 0; t < a; ++t) (e[t] = c[t].readValueFromPointer(p + u)), (u += c[t].argPackAdvance);
          f = f[g].apply(f, e);
          for (t = 0; t < a; ++t) c[t].deleteObject && c[t].deleteObject(e[t]);
          return d.toWireType(l, f);
        };
        return Eg(b);
      },
      Gg = function (a, b) {
        a = W.toValue(a);
        b = W.toValue(b);
        return W.toHandle(a[b]);
      },
      Hg = function (a) {
        4 < a && (ia.get(a).refcount += 1);
      },
      Ig = function (a, b) {
        a = W.toValue(a);
        b = W.toValue(b);
        return a instanceof b;
      },
      Jg = function (a) {
        var b = Array(a + 1);
        return function (c, d, e) {
          b[0] = c;
          for (var f = 0; f < a; ++f) {
            var g = Ua(y()[(d + 4 * f) >> 2], "parameter " + f);
            b[f + 1] = g.readValueFromPointer(e);
            e += g.argPackAdvance;
          }
          c = new (c.bind.apply(c, b))();
          return W.toHandle(c);
        };
      },
      Ed = {},
      Kg = function (a, b, c, d) {
        a = W.toValue(a);
        var e = Ed[b];
        e || ((e = Jg(b)), (Ed[b] = e));
        return e(a, c, d);
      },
      Lg = function (a) {
        return W.toHandle(dc(a));
      },
      Mg = function (a) {
        var b = W.toValue(a);
        Ma(b);
        ac(a);
      },
      Ng = function (a, b) {
        a = Ua(a, "_emval_take_value");
        a = a.readValueFromPointer(b);
        return W.toHandle(a);
      },
      Kb = function (a, b) {
        return (b + 2097152) >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN;
      },
      Og = function () {
        Y("");
      },
      gc = function (a, b) {
        v.mainLoop.timingMode = a;
        v.mainLoop.timingValue = b;
        if (!v.mainLoop.func) return 1;
        v.mainLoop.running || ((sa += 1), (v.mainLoop.running = !0));
        if (0 == a)
          (v.mainLoop.scheduler = function () {
            var d = Math.max(0, v.mainLoop.tickStartTime + b - fc()) | 0;
            setTimeout(v.mainLoop.runner, d);
          }),
            (v.mainLoop.method = "timeout");
        else if (1 == a)
          (v.mainLoop.scheduler = function () {
            v.requestAnimationFrame(v.mainLoop.runner);
          }),
            (v.mainLoop.method = "rAF");
        else if (2 == a) {
          if ("undefined" == typeof setImmediate) {
            var c = [];
            a = function (d) {
              if ("setimmediate" === d.data || "setimmediate" === d.data.target) d.stopPropagation(), c.shift()();
            };
            addEventListener("message", a, !0);
            setImmediate = function (d) {
              c.push(d);
              qa
                ? (void 0 === h.setImmediates && (h.setImmediates = []), h.setImmediates.push(d), postMessage({ target: "setimmediate" }))
                : postMessage("setimmediate", "*");
            };
          }
          v.mainLoop.scheduler = function () {
            setImmediate(v.mainLoop.runner);
          };
          v.mainLoop.method = "immediate";
        }
        return 0;
      };
    var fc = function () {
      return performance.timeOrigin + performance.now();
    };
    var Pg = function (a, b, c, d, e) {
        function f() {
          return g < v.mainLoop.currentlyRunningMainloop ? (--sa, !1) : !0;
        }
        v.mainLoop.func &&
          Y(
            "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
          );
        v.mainLoop.func = a;
        v.mainLoop.arg = d;
        var g = v.mainLoop.currentlyRunningMainloop;
        v.mainLoop.running = !1;
        v.mainLoop.runner = function () {
          if (!Aa)
            if (0 < v.mainLoop.queue.length) {
              var l = v.mainLoop.queue.shift();
              l.func(l.arg);
              if (v.mainLoop.remainingBlockers) {
                var p = v.mainLoop.remainingBlockers,
                  u = 0 == p % 1 ? p - 1 : Math.floor(p);
                l.counted ? (v.mainLoop.remainingBlockers = u) : ((u += 0.5), (v.mainLoop.remainingBlockers = (8 * p + u) / 9));
              }
              v.mainLoop.updateStatus();
              f() && setTimeout(v.mainLoop.runner, 0);
            } else
              f() &&
                ((v.mainLoop.currentFrameNumber = (v.mainLoop.currentFrameNumber + 1) | 0),
                1 == v.mainLoop.timingMode && 1 < v.mainLoop.timingValue && 0 != v.mainLoop.currentFrameNumber % v.mainLoop.timingValue
                  ? v.mainLoop.scheduler()
                  : (0 == v.mainLoop.timingMode && (v.mainLoop.tickStartTime = fc()),
                    v.mainLoop.runIter(a),
                    f() &&
                      ("object" == typeof SDL && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(),
                      v.mainLoop.scheduler())));
        };
        e || (b && 0 < b ? gc(0, 1e3 / b) : gc(1, 1), v.mainLoop.scheduler());
        if (c) throw "unwind";
      },
      Qg = function (a, b) {
        sa += 1;
        return setTimeout(function () {
          --sa;
          tb(a);
        }, b);
      },
      Va = function (a) {
        Va.shown || (Va.shown = {});
        Va.shown[a] || ((Va.shown[a] = 1), ca && (a = "warning: " + a), aa(a));
      },
      v = {
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
            v.mainLoop.scheduler = null;
            v.mainLoop.currentlyRunningMainloop++;
          },
          resume: function () {
            v.mainLoop.currentlyRunningMainloop++;
            var a = v.mainLoop.timingMode,
              b = v.mainLoop.timingValue,
              c = v.mainLoop.func;
            v.mainLoop.func = null;
            Pg(c, 0, !1, v.mainLoop.arg, !0);
            gc(a, b);
            v.mainLoop.scheduler();
          },
          updateStatus: function () {
            if (h.setStatus) {
              var a = h.statusMessage || "Please wait...",
                b = v.mainLoop.remainingBlockers,
                c = v.mainLoop.expectedBlockers;
              b ? (b < c ? h.setStatus(a + " (" + (c - b) + "/" + c + ")") : h.setStatus(a)) : h.setStatus("");
            }
          },
          runIter: function (a) {
            if (!Aa) {
              if (h.preMainLoop) {
                var b = h.preMainLoop();
                if (!1 === b) return;
              }
              tb(a);
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
            v.pointerLock =
              document.pointerLockElement === h.canvas ||
              document.mozPointerLockElement === h.canvas ||
              document.webkitPointerLockElement === h.canvas ||
              document.msPointerLockElement === h.canvas;
          }
          if (!v.initted) {
            v.initted = !0;
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
                    !v.pointerLock && h.canvas.requestPointerLock && (h.canvas.requestPointerLock(), c.preventDefault());
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
              ("undefined" != typeof k && Y("cannot set in module if GLctx is used, but we are a non-GL context that would replace it")),
            (h.ctx = l),
            b && m.makeContextCurrent(e),
            (h.useWebGL = b),
            v.moduleContextCreatedCallbacks.forEach(function (p) {
              return p();
            }),
            v.init());
          return l;
        },
        destroyContext: function () {},
        fullscreenHandlersInstalled: !1,
        lockPointer: void 0,
        resizeCanvas: void 0,
        requestFullscreen: function (a, b) {
          function c() {
            v.isFullscreen = !1;
            var f = d.parentNode;
            (document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement ||
              document.webkitFullscreenElement ||
              document.webkitCurrentFullScreenElement) === f
              ? ((d.exitFullscreen = v.exitFullscreen),
                v.lockPointer && d.requestPointerLock(),
                (v.isFullscreen = !0),
                v.resizeCanvas ? v.setFullscreenCanvasSize() : v.updateCanvasDimensions(d))
              : (f.parentNode.insertBefore(d, f),
                f.parentNode.removeChild(f),
                v.resizeCanvas ? v.setWindowedCanvasSize() : v.updateCanvasDimensions(d));
            if (h.onFullScreen) h.onFullScreen(v.isFullscreen);
            if (h.onFullscreen) h.onFullscreen(v.isFullscreen);
          }
          v.lockPointer = a;
          v.resizeCanvas = b;
          "undefined" == typeof v.lockPointer && (v.lockPointer = !0);
          "undefined" == typeof v.resizeCanvas && (v.resizeCanvas = !1);
          var d = h.canvas;
          v.fullscreenHandlersInstalled ||
            ((v.fullscreenHandlersInstalled = !0),
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
          if (!v.isFullscreen) return !1;
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
          if (0 === v.nextRAF) v.nextRAF = b + 1e3 / 60;
          else for (; b + 2 >= v.nextRAF; ) v.nextRAF += 1e3 / 60;
          b = Math.max(v.nextRAF - b, 0);
          setTimeout(a, b);
        },
        requestAnimationFrame: function (a) {
          if ("function" == typeof requestAnimationFrame) requestAnimationFrame(a);
          else {
            var b = v.fakeRequestAnimationFrame;
            b(a);
          }
        },
        safeSetTimeout: function (a, b) {
          return Qg(a, b);
        },
        safeRequestAnimationFrame: function (a) {
          sa += 1;
          return v.requestAnimationFrame(function () {
            --sa;
            tb(a);
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
          if (v.pointerLock)
            "mousemove" != a.type && "mozMovementX" in a
              ? (v.mouseMovementX = v.mouseMovementY = 0)
              : ((v.mouseMovementX = v.getMovementX(a)), (v.mouseMovementY = v.getMovementY(a))),
              "undefined" != typeof SDL
                ? ((v.mouseX = SDL.mouseX + v.mouseMovementX), (v.mouseY = SDL.mouseY + v.mouseMovementY))
                : ((v.mouseX += v.mouseMovementX), (v.mouseY += v.mouseMovementY));
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
                  (v.lastTouches[g.identifier] = b), (v.touches[g.identifier] = b);
                else if ("touchend" === a.type || "touchmove" === a.type)
                  (a = v.touches[g.identifier]) || (a = b), (v.lastTouches[g.identifier] = a), (v.touches[g.identifier] = b);
            } else
              (g = a.pageX - (e + b.left)),
                (a = a.pageY - (f + b.top)),
                (g *= c / b.width),
                (a *= d / b.height),
                (v.mouseMovementX = g - v.mouseX),
                (v.mouseMovementY = a - v.mouseY),
                (v.mouseX = g),
                (v.mouseY = a);
          }
        },
        resizeListeners: [],
        updateResizeListeners: function () {
          var a = h.canvas;
          v.resizeListeners.forEach(function (b) {
            return b(a.width, a.height);
          });
        },
        setCanvasSize: function (a, b, c) {
          var d = h.canvas;
          v.updateCanvasDimensions(d, a, b);
          c || v.updateResizeListeners();
        },
        windowedWidth: 0,
        windowedHeight: 0,
        setFullscreenCanvasSize: function () {
          if ("undefined" != typeof SDL) {
            var a = y()[SDL.screen >> 2];
            a |= 8388608;
            n()[SDL.screen >> 2] = a;
          }
          v.updateCanvasDimensions(h.canvas);
          v.updateResizeListeners();
        },
        setWindowedCanvasSize: function () {
          if ("undefined" != typeof SDL) {
            var a = y()[SDL.screen >> 2];
            a &= -8388609;
            n()[SDL.screen >> 2] = a;
          }
          v.updateCanvasDimensions(h.canvas);
          v.updateResizeListeners();
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
          v.resizeCanvas
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
      G = {
        errorCode: 12288,
        defaultDisplayInitialized: !1,
        currentContext: 0,
        currentReadSurface: 0,
        currentDrawSurface: 0,
        contextAttributes: { alpha: !1, depth: !1, stencil: !1, antialias: !1 },
        stringCache: {},
        setErrorCode: function (a) {
          G.errorCode = a;
        },
        chooseConfig: function (a, b, c, d, e) {
          if (62e3 != a) return G.setErrorCode(12296), 0;
          if (b)
            for (;;) {
              a = n()[b >> 2];
              if (12321 == a) (a = n()[(b + 4) >> 2]), (G.contextAttributes.alpha = 0 < a);
              else if (12325 == a) (a = n()[(b + 4) >> 2]), (G.contextAttributes.depth = 0 < a);
              else if (12326 == a) (a = n()[(b + 4) >> 2]), (G.contextAttributes.stencil = 0 < a);
              else if (12337 == a) (a = n()[(b + 4) >> 2]), (G.contextAttributes.antialias = 0 < a);
              else if (12338 == a) (a = n()[(b + 4) >> 2]), (G.contextAttributes.antialias = 1 == a);
              else if (12544 == a) (a = n()[(b + 4) >> 2]), (G.contextAttributes.lowLatency = 12547 != a);
              else if (12344 == a) break;
              b += 8;
            }
          if (!((c && d) || e)) return G.setErrorCode(12300), 0;
          e && (n()[e >> 2] = 1);
          c && 0 < d && (y()[c >> 2] = 62002);
          G.setErrorCode(12288);
          return 1;
        }
      },
      Rg = function (a) {
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
      Sg = function (a) {
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
      Tg = function (a) {
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
        contexts: {},
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
            var f = d ? n()[(d + 4 * e) >> 2] : -1;
            a += S(n()[(c + 4 * e) >> 2], 0 > f ? void 0 : f);
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
          var c = pa(8);
          n()[(c + 4) >> 2] = Oa();
          var d = { handle: c, attributes: b, version: b.majorVersion, GLctx: a };
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
          "object" == typeof O && O.removeAllHandlersOnTarget(m.contexts[a].GLctx.canvas);
          m.contexts[a] && m.contexts[a].GLctx.canvas && (m.contexts[a].GLctx.canvas.GLctxObject = void 0);
          oa(m.contexts[a].handle);
          m.contexts[a] = null;
        },
        initExtensions: function (a) {
          a || (a = m.currentContext);
          if (!a.initExtensionsDone) {
            a.initExtensionsDone = !0;
            var b = a.GLctx;
            Rg(b);
            Sg(b);
            Tg(b);
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
      hc = [],
      Fd = function (a, b) {
        hc.length = 0;
        for (var c; (c = A()[a++]); ) {
          var d = 105 != c;
          d &= 112 != c;
          b += d && b % 8 ? 4 : 0;
          hc.push(112 == c ? y()[b >> 2] : 105 == c ? n()[b >> 2] : P()[b >> 3]);
          b += d ? 8 : 4;
        }
        return hc;
      },
      Ug = function (a, b, c) {
        b = Fd(b, c);
        return (b = Sb[a].apply(null, b));
      },
      Vg = function (a, b, c) {
        b = Fd(b, c);
        b = N ? T.apply(null, [-1 - a, 1].concat(b)) : Sb[a].apply(null, b);
        return b;
      },
      Wg = function () {},
      Xg = function () {
        return Date.now();
      },
      Yg = function (a, b) {
        return aa(S(a, b));
      },
      Zg = function () {
        sa += 1;
        throw "unwind";
      },
      $g = function () {
        return 2147483648;
      },
      ah = me,
      bh = function (a, b) {
        k.attachShader(m.programs[a], m.shaders[b]);
      },
      ch = bh,
      dh = function (a, b) {
        k.beginQuery(a, m.queries[b]);
      },
      eh = dh,
      fh = function (a, b) {
        k.disjointTimerQueryExt.beginQueryEXT(a, m.queries[b]);
      },
      gh = fh,
      hh = ne,
      ih = function (a, b, c) {
        k.bindAttribLocation(m.programs[a], b, S(c));
      },
      jh = ih,
      kh = function (a, b) {
        35051 == a ? (k.currentPixelPackBufferBinding = b) : 35052 == a && (k.currentPixelUnpackBufferBinding = b);
        k.bindBuffer(a, m.buffers[b]);
      },
      lh = kh,
      mh = function (a, b, c) {
        k.bindBufferBase(a, b, m.buffers[c]);
      },
      nh = mh,
      oh = function (a, b, c, d, e) {
        k.bindBufferRange(a, b, m.buffers[c], d, e);
      },
      ph = oh,
      qh = function (a, b) {
        k.bindFramebuffer(a, m.framebuffers[b]);
      },
      rh = qh,
      sh = function (a, b) {
        k.bindRenderbuffer(a, m.renderbuffers[b]);
      },
      th = sh,
      uh = function (a, b) {
        k.bindSampler(a, m.samplers[b]);
      },
      vh = uh,
      wh = function (a, b) {
        k.bindTexture(a, m.textures[b]);
      },
      xh = wh,
      yh = function (a, b) {
        k.bindTransformFeedback(a, m.transformFeedbacks[b]);
      },
      zh = yh,
      Gd = function (a) {
        k.bindVertexArray(m.vaos[a]);
      },
      Ah = Gd,
      Bh = Gd,
      Ch = Bh,
      Dh = oe,
      Eh = pe,
      Fh = qe,
      Gh = re,
      Hh = se,
      Ih = te,
      Jh = function (a, b, c, d) {
        2 <= m.currentContext.version
          ? c && b
            ? k.bufferData(a, A(), d, c, b)
            : k.bufferData(a, b, d)
          : k.bufferData(a, c ? A().subarray(c, c + b) : b, d);
      },
      Kh = Jh,
      Lh = function (a, b, c, d) {
        2 <= m.currentContext.version ? c && k.bufferSubData(a, b, A(), d, c) : k.bufferSubData(a, b, A().subarray(d, d + c));
      },
      Mh = Lh,
      Nh = ue,
      Oh = ve,
      Ph = we,
      Qh = function (a, b, c) {
        k.clearBufferfv(a, b, z(), c >> 2);
      },
      Rh = Qh,
      Sh = function (a, b, c) {
        k.clearBufferiv(a, b, n(), c >> 2);
      },
      Th = Sh,
      Uh = function (a, b, c) {
        k.clearBufferuiv(a, b, y(), c >> 2);
      },
      Vh = Uh,
      Wh = xe,
      Xh = ye,
      Yh = ze,
      Zh = function (a, b, c, d) {
        c = (c >>> 0) + 4294967296 * d;
        return k.clientWaitSync(m.syncs[a], b, c);
      },
      $h = Zh,
      ai = function (a, b, c, d) {
        k.colorMask(!!a, !!b, !!c, !!d);
      },
      bi = ai,
      ci = function (a) {
        k.compileShader(m.shaders[a]);
      },
      di = ci,
      ei = function (a, b, c, d, e, f, g, l) {
        2 <= m.currentContext.version
          ? k.currentPixelUnpackBufferBinding || !g
            ? k.compressedTexImage2D(a, b, c, d, e, f, g, l)
            : k.compressedTexImage2D(a, b, c, d, e, f, A(), l, g)
          : k.compressedTexImage2D(a, b, c, d, e, f, l ? A().subarray(l, l + g) : null);
      },
      fi = ei,
      gi = function (a, b, c, d, e, f, g, l, p) {
        k.currentPixelUnpackBufferBinding
          ? k.compressedTexImage3D(a, b, c, d, e, f, g, l, p)
          : k.compressedTexImage3D(a, b, c, d, e, f, g, A(), p, l);
      },
      hi = gi,
      ii = function (a, b, c, d, e, f, g, l, p) {
        2 <= m.currentContext.version
          ? k.currentPixelUnpackBufferBinding || !l
            ? k.compressedTexSubImage2D(a, b, c, d, e, f, g, l, p)
            : k.compressedTexSubImage2D(a, b, c, d, e, f, g, A(), p, l)
          : k.compressedTexSubImage2D(a, b, c, d, e, f, g, p ? A().subarray(p, p + l) : null);
      },
      ji = ii,
      ki = function (a, b, c, d, e, f, g, l, p, u, t) {
        k.currentPixelUnpackBufferBinding
          ? k.compressedTexSubImage3D(a, b, c, d, e, f, g, l, p, u, t)
          : k.compressedTexSubImage3D(a, b, c, d, e, f, g, l, p, A(), t, u);
      },
      li = ki,
      mi = Ae,
      ni = Be,
      oi = Ce,
      pi = De,
      qi = function () {
        var a = m.getNewId(m.programs),
          b = k.createProgram();
        b.name = a;
        b.maxUniformLength = b.maxAttributeLength = b.maxUniformBlockNameLength = 0;
        b.uniformIdCounter = 1;
        m.programs[a] = b;
        return a;
      },
      ri = qi,
      si = function (a) {
        var b = m.getNewId(m.shaders);
        m.shaders[b] = k.createShader(a);
        return b;
      },
      ti = si,
      ui = Ee,
      vi = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = n()[(b + 4 * c) >> 2],
            e = m.buffers[d];
          e &&
            (k.deleteBuffer(e),
            (e.name = 0),
            (m.buffers[d] = null),
            d == k.currentPixelPackBufferBinding && (k.currentPixelPackBufferBinding = 0),
            d == k.currentPixelUnpackBufferBinding && (k.currentPixelUnpackBufferBinding = 0));
        }
      },
      wi = vi,
      xi = function (a, b) {
        for (var c = 0; c < a; ++c) {
          var d = n()[(b + 4 * c) >> 2],
            e = m.framebuffers[d];
          e && (k.deleteFramebuffer(e), (e.name = 0), (m.framebuffers[d] = null));
        }
      },
      yi = xi,
      zi = function (a) {
        if (a) {
          var b = m.programs[a];
          b ? (k.deleteProgram(b), (b.name = 0), (m.programs[a] = null)) : m.recordError(1281);
        }
      },
      Ai = zi,
      Bi = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = n()[(b + 4 * c) >> 2],
            e = m.queries[d];
          e && (k.deleteQuery(e), (m.queries[d] = null));
        }
      },
      Ci = Bi,
      Di = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = n()[(b + 4 * c) >> 2],
            e = m.queries[d];
          e && (k.disjointTimerQueryExt.deleteQueryEXT(e), (m.queries[d] = null));
        }
      },
      Ei = Di,
      Fi = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = n()[(b + 4 * c) >> 2],
            e = m.renderbuffers[d];
          e && (k.deleteRenderbuffer(e), (e.name = 0), (m.renderbuffers[d] = null));
        }
      },
      Gi = Fi,
      Hi = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = n()[(b + 4 * c) >> 2],
            e = m.samplers[d];
          e && (k.deleteSampler(e), (e.name = 0), (m.samplers[d] = null));
        }
      },
      Ii = Hi,
      Ji = function (a) {
        if (a) {
          var b = m.shaders[a];
          b ? (k.deleteShader(b), (m.shaders[a] = null)) : m.recordError(1281);
        }
      },
      Ki = Ji,
      Li = function (a) {
        if (a) {
          var b = m.syncs[a];
          b ? (k.deleteSync(b), (b.name = 0), (m.syncs[a] = null)) : m.recordError(1281);
        }
      },
      Mi = Li,
      Ni = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = n()[(b + 4 * c) >> 2],
            e = m.textures[d];
          e && (k.deleteTexture(e), (e.name = 0), (m.textures[d] = null));
        }
      },
      Oi = Ni,
      Pi = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = n()[(b + 4 * c) >> 2],
            e = m.transformFeedbacks[d];
          e && (k.deleteTransformFeedback(e), (e.name = 0), (m.transformFeedbacks[d] = null));
        }
      },
      Qi = Pi,
      Hd = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = n()[(b + 4 * c) >> 2];
          k.deleteVertexArray(m.vaos[d]);
          m.vaos[d] = null;
        }
      },
      Ri = Hd,
      Si = Hd,
      Ti = Si,
      Ui = Fe,
      Vi = function (a) {
        k.depthMask(!!a);
      },
      Wi = Vi,
      Xi = Ge,
      Yi = function (a, b) {
        k.detachShader(m.programs[a], m.shaders[b]);
      },
      Zi = Yi,
      $i = He,
      aj = function (a) {
        k.disableVertexAttribArray(a);
      },
      bj = aj,
      cj = function (a, b, c) {
        k.drawArrays(a, b, c);
      },
      dj = cj,
      Wa = function (a, b, c, d) {
        k.drawArraysInstanced(a, b, c, d);
      },
      ej = Wa,
      fj = Wa,
      gj = fj,
      hj = Wa,
      ij = hj,
      jj = Wa,
      kj = jj,
      lj = Wa,
      mj = lj,
      ub = [],
      ic = function (a, b) {
        for (var c = ub[a], d = 0; d < a; d++) c[d] = n()[(b + 4 * d) >> 2];
        k.drawBuffers(c);
      },
      nj = ic,
      oj = ic,
      pj = oj,
      qj = ic,
      rj = qj,
      Id = function (a, b, c, d) {
        k.drawElements(a, b, c, d);
      },
      sj = Id,
      Xa = function (a, b, c, d, e) {
        k.drawElementsInstanced(a, b, c, d, e);
      },
      tj = Xa,
      uj = Xa,
      vj = uj,
      wj = Xa,
      xj = wj,
      yj = Xa,
      zj = yj,
      Aj = Xa,
      Bj = Aj,
      Cj = function (a, b, c, d, e, f) {
        Id(a, d, e, f);
      },
      Dj = Cj,
      Ej = Ie,
      Fj = function (a) {
        k.enableVertexAttribArray(a);
      },
      Gj = Fj,
      Hj = Je,
      Ij = function (a) {
        k.disjointTimerQueryExt.endQueryEXT(a);
      },
      Jj = Ij,
      Kj = Ke,
      Lj = function (a, b) {
        return (a = k.fenceSync(a, b)) ? ((b = m.getNewId(m.syncs)), (a.name = b), (m.syncs[b] = a), b) : 0;
      },
      Mj = Lj,
      Nj = Le,
      Oj = Me,
      Pj = function (a, b, c, d) {
        k.framebufferRenderbuffer(a, b, c, m.renderbuffers[d]);
      },
      Qj = Pj,
      Rj = function (a, b, c, d, e) {
        k.framebufferTexture2D(a, b, c, m.textures[d], e);
      },
      Sj = Rj,
      Tj = function (a, b, c, d, e) {
        k.framebufferTextureLayer(a, b, m.textures[c], d, e);
      },
      Uj = Tj,
      Vj = Ne,
      ra = function (a, b, c, d) {
        for (var e = 0; e < a; e++) {
          var f = k[c](),
            g = f && m.getNewId(d);
          f ? ((f.name = g), (d[g] = f)) : m.recordError(1282);
          n()[(b + 4 * e) >> 2] = g;
        }
      },
      Wj = function (a, b) {
        ra(a, b, "createBuffer", m.buffers);
      },
      Xj = Wj,
      Yj = function (a, b) {
        ra(a, b, "createFramebuffer", m.framebuffers);
      },
      Zj = Yj,
      ak = function (a, b) {
        ra(a, b, "createQuery", m.queries);
      },
      bk = ak,
      ck = function (a, b) {
        for (var c = 0; c < a; c++) {
          var d = k.disjointTimerQueryExt.createQueryEXT();
          if (!d) {
            for (m.recordError(1282); c < a; ) n()[(b + 4 * c++) >> 2] = 0;
            break;
          }
          var e = m.getNewId(m.queries);
          d.name = e;
          m.queries[e] = d;
          n()[(b + 4 * c) >> 2] = e;
        }
      },
      dk = ck,
      ek = function (a, b) {
        ra(a, b, "createRenderbuffer", m.renderbuffers);
      },
      fk = ek,
      gk = function (a, b) {
        ra(a, b, "createSampler", m.samplers);
      },
      hk = gk,
      ik = function (a, b) {
        ra(a, b, "createTexture", m.textures);
      },
      jk = ik,
      kk = function (a, b) {
        ra(a, b, "createTransformFeedback", m.transformFeedbacks);
      },
      lk = kk,
      mk = Sc,
      nk = Sc,
      ok = nk,
      pk = Oe,
      Jd = function (a, b, c, d, e, f, g, l) {
        b = m.programs[b];
        if ((a = k[a](b, c))) (d = l && da(a.name, l, d)), e && (n()[e >> 2] = d), f && (n()[f >> 2] = a.size), g && (n()[g >> 2] = a.type);
      },
      qk = function (a, b, c, d, e, f, g) {
        Jd("getActiveAttrib", a, b, c, d, e, f, g);
      },
      rk = qk,
      sk = function (a, b, c, d, e, f, g) {
        Jd("getActiveUniform", a, b, c, d, e, f, g);
      },
      tk = sk,
      uk = function (a, b, c, d, e) {
        a = m.programs[a];
        if ((a = k.getActiveUniformBlockName(a, b))) e && 0 < c ? ((c = da(a, e, c)), d && (n()[d >> 2] = c)) : d && (n()[d >> 2] = 0);
      },
      vk = uk,
      wk = function (a, b, c, d) {
        if (d)
          if (((a = m.programs[a]), 35393 == c)) (c = k.getActiveUniformBlockName(a, b)), (n()[d >> 2] = c.length + 1);
          else {
            if (((a = k.getActiveUniformBlockParameter(a, b, c)), null !== a))
              if (35395 == c) for (c = 0; c < a.length; c++) n()[(d + 4 * c) >> 2] = a[c];
              else n()[d >> 2] = a;
          }
        else m.recordError(1281);
      },
      xk = wk,
      yk = function (a, b, c, d, e) {
        if (e)
          if (0 < b && 0 == c) m.recordError(1281);
          else {
            a = m.programs[a];
            for (var f = [], g = 0; g < b; g++) f.push(n()[(c + 4 * g) >> 2]);
            if ((a = k.getActiveUniforms(a, f, d))) for (b = a.length, g = 0; g < b; g++) n()[(e + 4 * g) >> 2] = a[g];
          }
        else m.recordError(1281);
      },
      zk = yk,
      Ak = function (a, b, c, d) {
        a = k.getAttachedShaders(m.programs[a]);
        var e = a.length;
        e > b && (e = b);
        n()[c >> 2] = e;
        for (b = 0; b < e; ++b) (c = m.shaders.indexOf(a[b])), (n()[(d + 4 * b) >> 2] = c);
      },
      Bk = Ak,
      Ck = function (a, b) {
        return k.getAttribLocation(m.programs[a], S(b));
      },
      Dk = Ck,
      vb = function (a, b) {
        y()[a >> 2] = b;
        var c = y()[a >> 2];
        y()[(a + 4) >> 2] = (b - c) / 4294967296;
      },
      wb = function (a, b, c) {
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
                          n()[(b + 4 * a) >> 2] = e[a];
                          break;
                        case 2:
                          z()[(b + 4 * a) >> 2] = e[a];
                          break;
                        case 4:
                          w()[(b + a) >> 0] = e[a] ? 1 : 0;
                      }
                    return;
                  }
                  try {
                    d = e.name | 0;
                  } catch (f) {
                    m.recordError(1280);
                    aa(
                      "GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + f + ")"
                    );
                    return;
                  }
                }
                break;
              default:
                m.recordError(1280);
                aa(
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
              vb(b, d);
              break;
            case 0:
              n()[b >> 2] = d;
              break;
            case 2:
              z()[b >> 2] = d;
              break;
            case 4:
              w()[b >> 0] = d ? 1 : 0;
          }
        } else m.recordError(1281);
      },
      Ek = function (a, b) {
        wb(a, b, 4);
      },
      Fk = Ek,
      Gk = function (a, b, c) {
        c ? vb(c, k.getBufferParameter(a, b)) : m.recordError(1281);
      },
      Hk = Gk,
      Ik = function (a, b, c) {
        c ? (n()[c >> 2] = k.getBufferParameter(a, b)) : m.recordError(1281);
      },
      Jk = Ik,
      Kk = function () {
        var a = k.getError() || m.lastError;
        m.lastError = 0;
        return a;
      },
      Lk = Kk,
      Mk = function (a, b) {
        wb(a, b, 2);
      },
      Nk = Mk,
      Ok = function (a, b) {
        return k.getFragDataLocation(m.programs[a], S(b));
      },
      Pk = Ok,
      Qk = function (a, b, c, d) {
        a = k.getFramebufferAttachmentParameter(a, b, c);
        if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) a = a.name | 0;
        n()[d >> 2] = a;
      },
      Rk = Qk,
      Kd = function (a, b, c, d) {
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
              vb(c, a);
              break;
            case 0:
              n()[c >> 2] = a;
              break;
            case 2:
              z()[c >> 2] = a;
              break;
            case 4:
              w()[c >> 0] = a ? 1 : 0;
              break;
            default:
              throw "internal emscriptenWebGLGetIndexed() error, bad type: " + d;
          }
        } else m.recordError(1281);
      },
      Sk = function (a, b, c) {
        return Kd(a, b, c, 1);
      },
      Tk = Sk,
      Uk = function (a, b) {
        wb(a, b, 1);
      },
      Vk = Uk,
      Wk = function (a, b, c) {
        return Kd(a, b, c, 0);
      },
      Xk = Wk,
      Yk = function (a, b) {
        wb(a, b, 0);
      },
      Zk = Yk,
      $k = function (a, b, c, d, e) {
        if (0 > d) m.recordError(1281);
        else if (e) {
          if (((a = k.getInternalformatParameter(a, b, c)), null !== a))
            for (b = 0; b < a.length && b < d; ++b) n()[(e + 4 * b) >> 2] = a[b];
        } else m.recordError(1281);
      },
      al = $k,
      bl = function () {
        m.recordError(1282);
      },
      cl = bl,
      dl = function (a, b, c, d) {
        a = k.getProgramInfoLog(m.programs[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? da(a, d, b) : 0;
        c && (n()[c >> 2] = b);
      },
      el = dl,
      fl = function (a, b, c) {
        if (c)
          if (a >= m.counter) m.recordError(1281);
          else if (((a = m.programs[a]), 35716 == b))
            (a = k.getProgramInfoLog(a)), null === a && (a = "(unknown error)"), (n()[c >> 2] = a.length + 1);
          else if (35719 == b) {
            if (!a.maxUniformLength)
              for (b = 0; b < k.getProgramParameter(a, 35718); ++b)
                a.maxUniformLength = Math.max(a.maxUniformLength, k.getActiveUniform(a, b).name.length + 1);
            n()[c >> 2] = a.maxUniformLength;
          } else if (35722 == b) {
            if (!a.maxAttributeLength)
              for (b = 0; b < k.getProgramParameter(a, 35721); ++b)
                a.maxAttributeLength = Math.max(a.maxAttributeLength, k.getActiveAttrib(a, b).name.length + 1);
            n()[c >> 2] = a.maxAttributeLength;
          } else if (35381 == b) {
            if (!a.maxUniformBlockNameLength)
              for (b = 0; b < k.getProgramParameter(a, 35382); ++b)
                a.maxUniformBlockNameLength = Math.max(a.maxUniformBlockNameLength, k.getActiveUniformBlockName(a, b).length + 1);
            n()[c >> 2] = a.maxUniformBlockNameLength;
          } else n()[c >> 2] = k.getProgramParameter(a, b);
        else m.recordError(1281);
      },
      gl = fl,
      Ld = function (a, b, c) {
        c
          ? ((a = m.queries[a]),
            (b = 2 > m.currentContext.version ? k.disjointTimerQueryExt.getQueryObjectEXT(a, b) : k.getQueryParameter(a, b)),
            (b = "boolean" == typeof b ? (b ? 1 : 0) : b),
            vb(c, b))
          : m.recordError(1281);
      },
      hl = Ld,
      Md = function (a, b, c) {
        c
          ? ((a = m.queries[a]),
            (b = k.disjointTimerQueryExt.getQueryObjectEXT(a, b)),
            (b = "boolean" == typeof b ? (b ? 1 : 0) : b),
            (n()[c >> 2] = b))
          : m.recordError(1281);
      },
      il = Md,
      jl = Ld,
      kl = jl,
      ll = function (a, b, c) {
        c
          ? ((a = m.queries[a]), (b = k.getQueryParameter(a, b)), (b = "boolean" == typeof b ? (b ? 1 : 0) : b), (n()[c >> 2] = b))
          : m.recordError(1281);
      },
      ml = ll,
      nl = Md,
      ol = nl,
      pl = function (a, b, c) {
        c ? (n()[c >> 2] = k.getQuery(a, b)) : m.recordError(1281);
      },
      ql = pl,
      rl = function (a, b, c) {
        c ? (n()[c >> 2] = k.disjointTimerQueryExt.getQueryEXT(a, b)) : m.recordError(1281);
      },
      sl = rl,
      tl = function (a, b, c) {
        c ? (n()[c >> 2] = k.getRenderbufferParameter(a, b)) : m.recordError(1281);
      },
      ul = tl,
      vl = function (a, b, c) {
        c ? (z()[c >> 2] = k.getSamplerParameter(m.samplers[a], b)) : m.recordError(1281);
      },
      wl = vl,
      xl = function (a, b, c) {
        c ? (n()[c >> 2] = k.getSamplerParameter(m.samplers[a], b)) : m.recordError(1281);
      },
      yl = xl,
      zl = function (a, b, c, d) {
        a = k.getShaderInfoLog(m.shaders[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? da(a, d, b) : 0;
        c && (n()[c >> 2] = b);
      },
      Al = zl,
      Bl = function (a, b, c, d) {
        a = k.getShaderPrecisionFormat(a, b);
        n()[c >> 2] = a.rangeMin;
        n()[(c + 4) >> 2] = a.rangeMax;
        n()[d >> 2] = a.precision;
      },
      Cl = Bl,
      Dl = function (a, b, c, d) {
        if ((a = k.getShaderSource(m.shaders[a]))) (b = 0 < b && d ? da(a, d, b) : 0), c && (n()[c >> 2] = b);
      },
      El = Dl,
      Fl = function (a, b, c) {
        c
          ? 35716 == b
            ? ((a = k.getShaderInfoLog(m.shaders[a])), null === a && (a = "(unknown error)"), (a = a ? a.length + 1 : 0), (n()[c >> 2] = a))
            : 35720 == b
            ? ((a = (a = k.getShaderSource(m.shaders[a])) ? a.length + 1 : 0), (n()[c >> 2] = a))
            : (n()[c >> 2] = k.getShaderParameter(m.shaders[a], b))
          : m.recordError(1281);
      },
      Gl = Fl,
      Ya = function (a) {
        var b = Ca(a) + 1,
          c = pa(b);
        c && da(a, c, b);
        return c;
      },
      Hl = function (a) {
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
              b = Ya(b.join(" "));
              break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
              (b = k.getParameter(a)) || m.recordError(1280);
              b = b && Ya(b);
              break;
            case 7938:
              b = k.getParameter(7938);
              b = 2 <= m.currentContext.version ? "OpenGL ES 3.0 (" + b + ")" : "OpenGL ES 2.0 (" + b + ")";
              b = Ya(b);
              break;
            case 35724:
              b = k.getParameter(35724);
              var c = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
              c = b.match(c);
              null !== c && (3 == c[1].length && (c[1] += "0"), (b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")"));
              b = Ya(b);
              break;
            default:
              m.recordError(1280);
          }
          m.stringCache[a] = b;
        }
        return b;
      },
      Il = Hl,
      Jl = function (a, b) {
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
                return Ya(d);
              })),
              (c = m.stringiCache[a] = c),
              0 > b || b >= c.length ? (m.recordError(1281), 0) : c[b]
            );
          default:
            return m.recordError(1280), 0;
        }
      },
      Kl = Jl,
      Ll = function (a, b, c, d, e) {
        0 > c
          ? m.recordError(1281)
          : e
          ? ((a = k.getSyncParameter(m.syncs[a], b)), null !== a && ((n()[e >> 2] = a), d && (n()[d >> 2] = 1)))
          : m.recordError(1281);
      },
      Ml = Ll,
      Nl = function (a, b, c) {
        c ? (z()[c >> 2] = k.getTexParameter(a, b)) : m.recordError(1281);
      },
      Ol = Nl,
      Pl = function (a, b, c) {
        c ? (n()[c >> 2] = k.getTexParameter(a, b)) : m.recordError(1281);
      },
      Ql = Pl,
      Rl = function (a, b, c, d, e, f, g) {
        a = m.programs[a];
        if ((a = k.getTransformFeedbackVarying(a, b)))
          g && 0 < c ? ((c = da(a.name, g, c)), d && (n()[d >> 2] = c)) : d && (n()[d >> 2] = 0),
            e && (n()[e >> 2] = a.size),
            f && (n()[f >> 2] = a.type);
      },
      Sl = Rl,
      Tl = function (a, b) {
        return k.getUniformBlockIndex(m.programs[a], S(b));
      },
      Ul = Tl,
      Vl = function (a, b, c, d) {
        if (d)
          if (0 < b && (0 == c || 0 == d)) m.recordError(1281);
          else {
            a = m.programs[a];
            for (var e = [], f = 0; f < b; f++) e.push(S(n()[(c + 4 * f) >> 2]));
            if ((a = k.getUniformIndices(a, e))) for (b = a.length, f = 0; f < b; f++) n()[(d + 4 * f) >> 2] = a[f];
          }
        else m.recordError(1281);
      },
      Wl = Vl,
      Nd = function (a) {
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
      Xl = function (a, b) {
        b = S(b);
        if ((a = m.programs[a])) {
          Nd(a);
          var c = a.uniformLocsById,
            d = 0,
            e = b,
            f = "]" == b.slice(-1) && b.lastIndexOf("[");
          0 < f && ((d = parseInt(b.slice(f + 1)) >>> 0), (e = b.slice(0, f)));
          if ((e = a.uniformSizeAndIdsByName[e]) && d < e[0] && ((d += e[1]), (c[d] = c[d] || k.getUniformLocation(a, b)))) return d;
        } else m.recordError(1281);
        return -1;
      },
      Yl = Xl,
      K = function (a) {
        var b = k.currentProgram;
        if (b) {
          var c = b.uniformLocsById[a];
          "number" == typeof c &&
            (b.uniformLocsById[a] = c = k.getUniformLocation(b, b.uniformArrayNamesById[a] + (0 < c ? "[" + c + "]" : "")));
          return c;
        }
        m.recordError(1282);
      },
      jc = function (a, b, c, d) {
        if (c)
          if (((a = m.programs[a]), Nd(a), (a = k.getUniform(a, K(b))), "number" == typeof a || "boolean" == typeof a))
            switch (d) {
              case 0:
                n()[c >> 2] = a;
                break;
              case 2:
                z()[c >> 2] = a;
            }
          else
            for (b = 0; b < a.length; b++)
              switch (d) {
                case 0:
                  n()[(c + 4 * b) >> 2] = a[b];
                  break;
                case 2:
                  z()[(c + 4 * b) >> 2] = a[b];
              }
        else m.recordError(1281);
      },
      Zl = function (a, b, c) {
        jc(a, b, c, 2);
      },
      $l = Zl,
      am = function (a, b, c) {
        jc(a, b, c, 0);
      },
      bm = am,
      cm = function (a, b, c) {
        return jc(a, b, c, 0);
      },
      dm = cm,
      kc = function (a, b, c, d) {
        if (c)
          if (((a = k.getVertexAttrib(a, b)), 34975 == b)) n()[c >> 2] = a && a.name;
          else if ("number" == typeof a || "boolean" == typeof a)
            switch (d) {
              case 0:
                n()[c >> 2] = a;
                break;
              case 2:
                z()[c >> 2] = a;
                break;
              case 5:
                n()[c >> 2] = Math.fround(a);
            }
          else
            for (b = 0; b < a.length; b++)
              switch (d) {
                case 0:
                  n()[(c + 4 * b) >> 2] = a[b];
                  break;
                case 2:
                  z()[(c + 4 * b) >> 2] = a[b];
                  break;
                case 5:
                  n()[(c + 4 * b) >> 2] = Math.fround(a[b]);
              }
        else m.recordError(1281);
      },
      Od = function (a, b, c) {
        kc(a, b, c, 0);
      },
      em = Od,
      fm = Od,
      gm = fm,
      hm = function (a, b, c) {
        c ? (n()[c >> 2] = k.getVertexAttribOffset(a, b)) : m.recordError(1281);
      },
      im = hm,
      jm = function (a, b, c) {
        kc(a, b, c, 2);
      },
      km = jm,
      lm = function (a, b, c) {
        kc(a, b, c, 5);
      },
      mm = lm,
      nm = Pe,
      om = function (a, b, c) {
        for (var d = ub[b], e = 0; e < b; e++) d[e] = n()[(c + 4 * e) >> 2];
        k.invalidateFramebuffer(a, d);
      },
      pm = om,
      qm = function (a, b, c, d, e, f, g) {
        for (var l = ub[b], p = 0; p < b; p++) l[p] = n()[(c + 4 * p) >> 2];
        k.invalidateSubFramebuffer(a, l, d, e, f, g);
      },
      rm = qm,
      sm = function (a) {
        return (a = m.buffers[a]) ? k.isBuffer(a) : 0;
      },
      tm = sm,
      um = Qe,
      vm = function (a) {
        return (a = m.framebuffers[a]) ? k.isFramebuffer(a) : 0;
      },
      wm = vm,
      xm = function (a) {
        return (a = m.programs[a]) ? k.isProgram(a) : 0;
      },
      ym = xm,
      zm = function (a) {
        return (a = m.queries[a]) ? k.isQuery(a) : 0;
      },
      Am = zm,
      Bm = function (a) {
        return (a = m.queries[a]) ? k.disjointTimerQueryExt.isQueryEXT(a) : 0;
      },
      Cm = Bm,
      Dm = function (a) {
        return (a = m.renderbuffers[a]) ? k.isRenderbuffer(a) : 0;
      },
      Em = Dm,
      Fm = function (a) {
        return (a = m.samplers[a]) ? k.isSampler(a) : 0;
      },
      Gm = Fm,
      Hm = function (a) {
        return (a = m.shaders[a]) ? k.isShader(a) : 0;
      },
      Im = Hm,
      Jm = function (a) {
        return k.isSync(m.syncs[a]);
      },
      Km = Jm,
      Lm = function (a) {
        return (a = m.textures[a]) ? k.isTexture(a) : 0;
      },
      Mm = Lm,
      Nm = function (a) {
        return k.isTransformFeedback(m.transformFeedbacks[a]);
      },
      Om = Nm,
      Pd = function (a) {
        return (a = m.vaos[a]) ? k.isVertexArray(a) : 0;
      },
      Pm = Pd,
      Qm = Pd,
      Rm = Qm,
      Sm = Re,
      Tm = function (a) {
        a = m.programs[a];
        k.linkProgram(a);
        a.uniformLocsById = 0;
        a.uniformSizeAndIdsByName = {};
      },
      Um = Tm,
      Vm = Se,
      Wm = function (a, b) {
        3317 == a && (m.unpackAlignment = b);
        k.pixelStorei(a, b);
      },
      Xm = Wm,
      Ym = Te,
      Zm = function () {
        m.recordError(1280);
      },
      $m = Zm,
      an = function () {
        m.recordError(1280);
      },
      bn = an,
      cn = function (a, b) {
        k.disjointTimerQueryExt.queryCounterEXT(m.queries[a], b);
      },
      dn = cn,
      en = Ue,
      Ga = function (a) {
        a -= 5120;
        return 0 == a
          ? w()
          : 1 == a
          ? A()
          : 2 == a
          ? H()
          : 4 == a
          ? n()
          : 6 == a
          ? z()
          : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a
          ? y()
          : I();
      },
      Ha = function (a) {
        return 31 - Math.clz32(a.BYTES_PER_ELEMENT);
      },
      lc = function (a, b, c, d, e) {
        a = Ga(a);
        var f = Ha(a),
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
      fn = function (a, b, c, d, e, f, g) {
        if (2 <= m.currentContext.version)
          if (k.currentPixelPackBufferBinding) k.readPixels(a, b, c, d, e, f, g);
          else {
            var l = Ga(f);
            k.readPixels(a, b, c, d, e, f, l, g >> Ha(l));
          }
        else (g = lc(f, e, c, d, g, e)) ? k.readPixels(a, b, c, d, e, f, g) : m.recordError(1280);
      },
      gn = fn,
      hn = function () {},
      jn = hn,
      kn = Ve,
      ln = We,
      mn = Xe,
      nn = function (a, b) {
        k.sampleCoverage(a, !!b);
      },
      on = nn,
      pn = function (a, b, c) {
        k.samplerParameterf(m.samplers[a], b, c);
      },
      qn = pn,
      rn = function (a, b, c) {
        c = z()[c >> 2];
        k.samplerParameterf(m.samplers[a], b, c);
      },
      sn = rn,
      tn = function (a, b, c) {
        k.samplerParameteri(m.samplers[a], b, c);
      },
      un = tn,
      vn = function (a, b, c) {
        c = n()[c >> 2];
        k.samplerParameteri(m.samplers[a], b, c);
      },
      wn = vn,
      xn = Ye,
      yn = function () {
        m.recordError(1280);
      },
      zn = yn,
      An = function (a, b, c, d) {
        b = m.getSource(a, b, c, d);
        k.shaderSource(m.shaders[a], b);
      },
      Bn = An,
      Cn = Ze,
      Dn = $e,
      En = af,
      Fn = bf,
      Gn = cf,
      Hn = df,
      In = function (a, b, c, d, e, f, g, l, p) {
        if (2 <= m.currentContext.version)
          if (k.currentPixelUnpackBufferBinding) k.texImage2D(a, b, c, d, e, f, g, l, p);
          else if (p) {
            var u = Ga(l);
            k.texImage2D(a, b, c, d, e, f, g, l, u, p >> Ha(u));
          } else k.texImage2D(a, b, c, d, e, f, g, l, null);
        else k.texImage2D(a, b, c, d, e, f, g, l, p ? lc(l, g, d, e, p, c) : null);
      },
      Jn = In,
      Kn = function (a, b, c, d, e, f, g, l, p, u) {
        if (k.currentPixelUnpackBufferBinding) k.texImage3D(a, b, c, d, e, f, g, l, p, u);
        else if (u) {
          var t = Ga(p);
          k.texImage3D(a, b, c, d, e, f, g, l, p, t, u >> Ha(t));
        } else k.texImage3D(a, b, c, d, e, f, g, l, p, null);
      },
      Ln = Kn,
      Mn = ef,
      Nn = function (a, b, c) {
        c = z()[c >> 2];
        k.texParameterf(a, b, c);
      },
      On = Nn,
      Pn = ff,
      Qn = function (a, b, c) {
        c = n()[c >> 2];
        k.texParameteri(a, b, c);
      },
      Rn = Qn,
      Sn = gf,
      Tn = hf,
      Un = function (a, b, c, d, e, f, g, l, p) {
        if (2 <= m.currentContext.version)
          if (k.currentPixelUnpackBufferBinding) k.texSubImage2D(a, b, c, d, e, f, g, l, p);
          else if (p) {
            var u = Ga(l);
            k.texSubImage2D(a, b, c, d, e, f, g, l, u, p >> Ha(u));
          } else k.texSubImage2D(a, b, c, d, e, f, g, l, null);
        else (u = null), p && (u = lc(l, g, e, f, p, 0)), k.texSubImage2D(a, b, c, d, e, f, g, l, u);
      },
      Vn = Un,
      Wn = function (a, b, c, d, e, f, g, l, p, u, t) {
        if (k.currentPixelUnpackBufferBinding) k.texSubImage3D(a, b, c, d, e, f, g, l, p, u, t);
        else if (t) {
          var F = Ga(u);
          k.texSubImage3D(a, b, c, d, e, f, g, l, p, u, F, t >> Ha(F));
        } else k.texSubImage3D(a, b, c, d, e, f, g, l, p, u, null);
      },
      Xn = Wn,
      Yn = function (a, b, c, d) {
        a = m.programs[a];
        for (var e = [], f = 0; f < b; f++) e.push(S(n()[(c + 4 * f) >> 2]));
        k.transformFeedbackVaryings(a, e, d);
      },
      Zn = Yn,
      $n = function (a, b) {
        k.uniform1f(K(a), b);
      },
      ao = $n,
      ta = [],
      bo = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform1fv(K(a), z(), c >> 2, b);
        else {
          if (288 >= b) for (var d = ta[b - 1], e = 0; e < b; ++e) d[e] = z()[(c + 4 * e) >> 2];
          else d = z().subarray(c >> 2, (c + 4 * b) >> 2);
          k.uniform1fv(K(a), d);
        }
      },
      co = bo,
      eo = function (a, b) {
        k.uniform1i(K(a), b);
      },
      fo = eo,
      Za = [],
      go = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform1iv(K(a), n(), c >> 2, b);
        else {
          if (288 >= b) for (var d = Za[b - 1], e = 0; e < b; ++e) d[e] = n()[(c + 4 * e) >> 2];
          else d = n().subarray(c >> 2, (c + 4 * b) >> 2);
          k.uniform1iv(K(a), d);
        }
      },
      ho = go,
      io = function (a, b) {
        k.uniform1ui(K(a), b);
      },
      jo = io,
      ko = function (a, b, c) {
        b && k.uniform1uiv(K(a), y(), c >> 2, b);
      },
      lo = ko,
      mo = function (a, b, c) {
        k.uniform2f(K(a), b, c);
      },
      no = mo,
      oo = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform2fv(K(a), z(), c >> 2, 2 * b);
        else {
          if (144 >= b)
            for (var d = ta[2 * b - 1], e = 0; e < 2 * b; e += 2) (d[e] = z()[(c + 4 * e) >> 2]), (d[e + 1] = z()[(c + (4 * e + 4)) >> 2]);
          else d = z().subarray(c >> 2, (c + 8 * b) >> 2);
          k.uniform2fv(K(a), d);
        }
      },
      po = oo,
      qo = function (a, b, c) {
        k.uniform2i(K(a), b, c);
      },
      ro = qo,
      so = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform2iv(K(a), n(), c >> 2, 2 * b);
        else {
          if (144 >= b)
            for (var d = Za[2 * b - 1], e = 0; e < 2 * b; e += 2) (d[e] = n()[(c + 4 * e) >> 2]), (d[e + 1] = n()[(c + (4 * e + 4)) >> 2]);
          else d = n().subarray(c >> 2, (c + 8 * b) >> 2);
          k.uniform2iv(K(a), d);
        }
      },
      to = so,
      uo = function (a, b, c) {
        k.uniform2ui(K(a), b, c);
      },
      vo = uo,
      wo = function (a, b, c) {
        b && k.uniform2uiv(K(a), y(), c >> 2, 2 * b);
      },
      xo = wo,
      yo = function (a, b, c, d) {
        k.uniform3f(K(a), b, c, d);
      },
      zo = yo,
      Ao = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform3fv(K(a), z(), c >> 2, 3 * b);
        else {
          if (96 >= b)
            for (var d = ta[3 * b - 1], e = 0; e < 3 * b; e += 3)
              (d[e] = z()[(c + 4 * e) >> 2]), (d[e + 1] = z()[(c + (4 * e + 4)) >> 2]), (d[e + 2] = z()[(c + (4 * e + 8)) >> 2]);
          else d = z().subarray(c >> 2, (c + 12 * b) >> 2);
          k.uniform3fv(K(a), d);
        }
      },
      Bo = Ao,
      Co = function (a, b, c, d) {
        k.uniform3i(K(a), b, c, d);
      },
      Do = Co,
      Eo = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform3iv(K(a), n(), c >> 2, 3 * b);
        else {
          if (96 >= b)
            for (var d = Za[3 * b - 1], e = 0; e < 3 * b; e += 3)
              (d[e] = n()[(c + 4 * e) >> 2]), (d[e + 1] = n()[(c + (4 * e + 4)) >> 2]), (d[e + 2] = n()[(c + (4 * e + 8)) >> 2]);
          else d = n().subarray(c >> 2, (c + 12 * b) >> 2);
          k.uniform3iv(K(a), d);
        }
      },
      Fo = Eo,
      Go = function (a, b, c, d) {
        k.uniform3ui(K(a), b, c, d);
      },
      Ho = Go,
      Io = function (a, b, c) {
        b && k.uniform3uiv(K(a), y(), c >> 2, 3 * b);
      },
      Jo = Io,
      Ko = function (a, b, c, d, e) {
        k.uniform4f(K(a), b, c, d, e);
      },
      Lo = Ko,
      Mo = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform4fv(K(a), z(), c >> 2, 4 * b);
        else {
          if (72 >= b) {
            var d = ta[4 * b - 1],
              e = z();
            c >>= 2;
            for (var f = 0; f < 4 * b; f += 4) {
              var g = c + f;
              d[f] = e[g];
              d[f + 1] = e[g + 1];
              d[f + 2] = e[g + 2];
              d[f + 3] = e[g + 3];
            }
          } else d = z().subarray(c >> 2, (c + 16 * b) >> 2);
          k.uniform4fv(K(a), d);
        }
      },
      No = Mo,
      Oo = function (a, b, c, d, e) {
        k.uniform4i(K(a), b, c, d, e);
      },
      Po = Oo,
      Qo = function (a, b, c) {
        if (2 <= m.currentContext.version) b && k.uniform4iv(K(a), n(), c >> 2, 4 * b);
        else {
          if (72 >= b)
            for (var d = Za[4 * b - 1], e = 0; e < 4 * b; e += 4)
              (d[e] = n()[(c + 4 * e) >> 2]),
                (d[e + 1] = n()[(c + (4 * e + 4)) >> 2]),
                (d[e + 2] = n()[(c + (4 * e + 8)) >> 2]),
                (d[e + 3] = n()[(c + (4 * e + 12)) >> 2]);
          else d = n().subarray(c >> 2, (c + 16 * b) >> 2);
          k.uniform4iv(K(a), d);
        }
      },
      Ro = Qo,
      So = function (a, b, c, d, e) {
        k.uniform4ui(K(a), b, c, d, e);
      },
      To = So,
      Uo = function (a, b, c) {
        b && k.uniform4uiv(K(a), y(), c >> 2, 4 * b);
      },
      Vo = Uo,
      Wo = function (a, b, c) {
        a = m.programs[a];
        k.uniformBlockBinding(a, b, c);
      },
      Xo = Wo,
      Yo = function (a, b, c, d) {
        if (2 <= m.currentContext.version) b && k.uniformMatrix2fv(K(a), !!c, z(), d >> 2, 4 * b);
        else {
          if (72 >= b)
            for (var e = ta[4 * b - 1], f = 0; f < 4 * b; f += 4)
              (e[f] = z()[(d + 4 * f) >> 2]),
                (e[f + 1] = z()[(d + (4 * f + 4)) >> 2]),
                (e[f + 2] = z()[(d + (4 * f + 8)) >> 2]),
                (e[f + 3] = z()[(d + (4 * f + 12)) >> 2]);
          else e = z().subarray(d >> 2, (d + 16 * b) >> 2);
          k.uniformMatrix2fv(K(a), !!c, e);
        }
      },
      Zo = Yo,
      $o = function (a, b, c, d) {
        b && k.uniformMatrix2x3fv(K(a), !!c, z(), d >> 2, 6 * b);
      },
      ap = $o,
      bp = function (a, b, c, d) {
        b && k.uniformMatrix2x4fv(K(a), !!c, z(), d >> 2, 8 * b);
      },
      cp = bp,
      dp = function (a, b, c, d) {
        if (2 <= m.currentContext.version) b && k.uniformMatrix3fv(K(a), !!c, z(), d >> 2, 9 * b);
        else {
          if (32 >= b)
            for (var e = ta[9 * b - 1], f = 0; f < 9 * b; f += 9)
              (e[f] = z()[(d + 4 * f) >> 2]),
                (e[f + 1] = z()[(d + (4 * f + 4)) >> 2]),
                (e[f + 2] = z()[(d + (4 * f + 8)) >> 2]),
                (e[f + 3] = z()[(d + (4 * f + 12)) >> 2]),
                (e[f + 4] = z()[(d + (4 * f + 16)) >> 2]),
                (e[f + 5] = z()[(d + (4 * f + 20)) >> 2]),
                (e[f + 6] = z()[(d + (4 * f + 24)) >> 2]),
                (e[f + 7] = z()[(d + (4 * f + 28)) >> 2]),
                (e[f + 8] = z()[(d + (4 * f + 32)) >> 2]);
          else e = z().subarray(d >> 2, (d + 36 * b) >> 2);
          k.uniformMatrix3fv(K(a), !!c, e);
        }
      },
      ep = dp,
      fp = function (a, b, c, d) {
        b && k.uniformMatrix3x2fv(K(a), !!c, z(), d >> 2, 6 * b);
      },
      gp = fp,
      hp = function (a, b, c, d) {
        b && k.uniformMatrix3x4fv(K(a), !!c, z(), d >> 2, 12 * b);
      },
      ip = hp,
      jp = function (a, b, c, d) {
        if (2 <= m.currentContext.version) b && k.uniformMatrix4fv(K(a), !!c, z(), d >> 2, 16 * b);
        else {
          if (18 >= b) {
            var e = ta[16 * b - 1],
              f = z();
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
          } else e = z().subarray(d >> 2, (d + 64 * b) >> 2);
          k.uniformMatrix4fv(K(a), !!c, e);
        }
      },
      kp = jp,
      lp = function (a, b, c, d) {
        b && k.uniformMatrix4x2fv(K(a), !!c, z(), d >> 2, 8 * b);
      },
      mp = lp,
      np = function (a, b, c, d) {
        b && k.uniformMatrix4x3fv(K(a), !!c, z(), d >> 2, 12 * b);
      },
      op = np,
      pp = function (a) {
        a = m.programs[a];
        k.useProgram(a);
        k.currentProgram = a;
      },
      qp = pp,
      rp = function (a) {
        k.validateProgram(m.programs[a]);
      },
      sp = rp,
      tp = jf,
      up = function (a, b) {
        k.vertexAttrib1f(a, z()[b >> 2]);
      },
      vp = up,
      wp = kf,
      xp = function (a, b) {
        k.vertexAttrib2f(a, z()[b >> 2], z()[(b + 4) >> 2]);
      },
      yp = xp,
      zp = lf,
      Ap = function (a, b) {
        k.vertexAttrib3f(a, z()[b >> 2], z()[(b + 4) >> 2], z()[(b + 8) >> 2]);
      },
      Bp = Ap,
      Cp = mf,
      Dp = function (a, b) {
        k.vertexAttrib4f(a, z()[b >> 2], z()[(b + 4) >> 2], z()[(b + 8) >> 2], z()[(b + 12) >> 2]);
      },
      Ep = Dp,
      $a = function (a, b) {
        k.vertexAttribDivisor(a, b);
      },
      Fp = $a,
      Gp = $a,
      Hp = Gp,
      Ip = $a,
      Jp = Ip,
      Kp = $a,
      Lp = Kp,
      Mp = $a,
      Np = Mp,
      Op = nf,
      Pp = function (a, b) {
        k.vertexAttribI4i(a, n()[b >> 2], n()[(b + 4) >> 2], n()[(b + 8) >> 2], n()[(b + 12) >> 2]);
      },
      Qp = Pp,
      Rp = of,
      Sp = function (a, b) {
        k.vertexAttribI4ui(a, y()[b >> 2], y()[(b + 4) >> 2], y()[(b + 8) >> 2], y()[(b + 12) >> 2]);
      },
      Tp = Sp,
      Up = function (a, b, c, d, e) {
        k.vertexAttribIPointer(a, b, c, d, e);
      },
      Vp = Up,
      Wp = function (a, b, c, d, e, f) {
        k.vertexAttribPointer(a, b, c, !!d, e, f);
      },
      Xp = Wp,
      Yp = pf,
      Zp = function (a, b, c, d) {
        c = (c >>> 0) + 4294967296 * d;
        k.waitSync(m.syncs[a], b, c);
      },
      $p = Zp,
      Qd = function (a, b) {
        if (0 >= a) return a;
        var c = 32 >= b ? Math.abs(1 << (b - 1)) : Math.pow(2, b - 1);
        a >= c && (32 >= b || a > c) && (a = -2 * c + a);
        return a;
      },
      Rd = function (a, b) {
        return 0 <= a ? a : 32 >= b ? 2 * Math.abs(1 << (b - 1)) + a : Math.pow(2, b) + a;
      },
      aq = function (a) {
        for (var b = a; A()[b]; ) ++b;
        return b - a;
      },
      bq = function (a, b) {
        function c(R) {
          var ha = d;
          ("double" === R || "i64" === R) && ha & 7 && (ha += 4);
          d = ha;
          "double" === R
            ? ((R = P()[d >> 3]), (d += 8))
            : "i64" == R
            ? ((R = [n()[d >> 2], n()[(d + 4) >> 2]]), (d += 8))
            : ((R = n()[d >> 2]), (d += 4));
          return R;
        }
        for (var d = b, e = [], f, g; ; ) {
          var l = a;
          f = w()[a >> 0];
          if (0 === f) break;
          g = w()[(a + 1) >> 0];
          if (37 == f) {
            var p = !1,
              u = (b = !1),
              t = !1,
              F = !1;
            a: for (;;) {
              switch (g) {
                case 43:
                  p = !0;
                  break;
                case 45:
                  b = !0;
                  break;
                case 35:
                  u = !0;
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
              g = w()[(a + 1) >> 0];
            }
            var L = 0;
            if (42 == g) (L = c("i32")), a++, (g = w()[(a + 1) >> 0]);
            else for (; 48 <= g && 57 >= g; ) (L = 10 * L + (g - 48)), a++, (g = w()[(a + 1) >> 0]);
            var q = !1,
              C = -1;
            if (46 == g) {
              C = 0;
              q = !0;
              a++;
              g = w()[(a + 1) >> 0];
              if (42 == g) (C = c("i32")), a++;
              else
                for (;;) {
                  g = w()[(a + 1) >> 0];
                  if (48 > g || 57 < g) break;
                  C = 10 * C + (g - 48);
                  a++;
                }
              g = w()[(a + 1) >> 0];
            }
            0 > C && ((C = 6), (q = !1));
            switch (String.fromCharCode(g)) {
              case "h":
                g = w()[(a + 2) >> 0];
                if (104 == g) {
                  a++;
                  var D = 1;
                } else D = 2;
                break;
              case "l":
                g = w()[(a + 2) >> 0];
                108 == g ? (a++, (D = 8)) : (D = 4);
                break;
              case "L":
              case "q":
              case "j":
                D = 8;
                break;
              case "z":
              case "t":
              case "I":
                D = 4;
                break;
              default:
                D = null;
            }
            D && a++;
            g = w()[(a + 1) >> 0];
            switch (String.fromCharCode(g)) {
              case "d":
              case "i":
              case "u":
              case "o":
              case "x":
              case "X":
              case "p":
                l = 100 == g || 105 == g;
                D = D || 4;
                f = c("i" + 8 * D);
                8 == D && (f = 117 == g ? (f[0] >>> 0) + 4294967296 * (f[1] >>> 0) : (f[0] >>> 0) + 4294967296 * f[1]);
                if (4 >= D) {
                  var M = Math.pow(256, D) - 1;
                  f = (l ? Qd : Rd)(f & M, 8 * D);
                }
                M = Math.abs(f);
                l = "";
                if (100 == g || 105 == g) var E = Qd(f, 8 * D).toString(10);
                else if (117 == g) (E = Rd(f, 8 * D).toString(10)), (f = Math.abs(f));
                else if (111 == g) E = (u ? "0" : "") + M.toString(8);
                else if (120 == g || 88 == g) {
                  l = u && 0 != f ? "0x" : "";
                  if (0 > f) {
                    f = -f;
                    E = (M - 1).toString(16);
                    M = [];
                    for (u = 0; u < E.length; u++) M.push((15 - parseInt(E[u], 16)).toString(16));
                    for (E = M.join(""); E.length < 2 * D; ) E = "f" + E;
                  } else E = M.toString(16);
                  88 == g && ((l = l.toUpperCase()), (E = E.toUpperCase()));
                } else 112 == g && (0 === M ? (E = "(nil)") : ((l = "0x"), (E = M.toString(16))));
                if (q) for (; E.length < C; ) E = "0" + E;
                0 <= f && (p ? (l = "+" + l) : F && (l = " " + l));
                "-" == E.charAt(0) && ((l = "-" + l), (E = E.substr(1)));
                for (; l.length + E.length < L; ) b ? (E += " ") : t ? (E = "0" + E) : (l = " " + l);
                E = l + E;
                E.split("").forEach(function (R) {
                  e.push(R.charCodeAt(0));
                });
                break;
              case "f":
              case "F":
              case "e":
              case "E":
              case "g":
              case "G":
                f = c("double");
                if (isNaN(f)) (E = "nan"), (t = !1);
                else if (isFinite(f)) {
                  q = !1;
                  D = Math.min(C, 20);
                  if (103 == g || 71 == g)
                    (q = !0),
                      (C = C || 1),
                      (D = parseInt(f.toExponential(D).split("e")[1], 10)),
                      C > D && -4 <= D
                        ? ((g = (103 == g ? "f" : "F").charCodeAt(0)), (C -= D + 1))
                        : ((g = (103 == g ? "e" : "E").charCodeAt(0)), C--),
                      (D = Math.min(C, 20));
                  if (101 == g || 69 == g) (E = f.toExponential(D)), /[eE][-+]\d$/.test(E) && (E = E.slice(0, -1) + "0" + E.slice(-1));
                  else if (102 == g || 70 == g) (E = f.toFixed(D)), 0 === f && (0 > f || (0 === f && -Infinity === 1 / f)) && (E = "-" + E);
                  l = E.split("e");
                  if (q && !u)
                    for (; 1 < l[0].length && l[0].includes(".") && ("0" == l[0].slice(-1) || "." == l[0].slice(-1)); )
                      l[0] = l[0].slice(0, -1);
                  else for (u && -1 == E.indexOf(".") && (l[0] += "."); C > D++; ) l[0] += "0";
                  E = l[0] + (1 < l.length ? "e" + l[1] : "");
                  69 == g && (E = E.toUpperCase());
                  0 <= f && (p ? (E = "+" + E) : F && (E = " " + E));
                } else (E = (0 > f ? "-" : "") + "inf"), (t = !1);
                for (; E.length < L; ) E = b ? E + " " : !t || ("-" != E[0] && "+" != E[0]) ? (t ? "0" : " ") + E : E[0] + "0" + E.slice(1);
                97 > g && (E = E.toUpperCase());
                E.split("").forEach(function (R) {
                  e.push(R.charCodeAt(0));
                });
                break;
              case "s":
                t = (p = c("i8*")) ? aq(p) : 6;
                q && (t = Math.min(t, C));
                if (!b) for (; t < L--; ) e.push(32);
                if (p) for (u = 0; u < t; u++) e.push(A()[p++ >> 0]);
                else e = e.concat(Tc("(null)".substr(0, t), !0));
                if (b) for (; t < L--; ) e.push(32);
                break;
              case "c":
                for (b && e.push(c("i8")); 0 < --L; ) e.push(32);
                b || e.push(c("i8"));
                break;
              case "n":
                b = c("i32*");
                n()[b >> 2] = e.length;
                break;
              case "%":
                e.push(f);
                break;
              default:
                for (u = l; u < a + 2; u++) e.push(w()[u >> 0]);
            }
            a += 2;
          } else e.push(f), (a += 1);
        }
        return e;
      },
      cq = function (a, b, c) {
        b = bq(b, c);
        c = b = Mb(b, 0);
        if (a & 24) {
          b = c = c.replace(/\s+$/, "");
          c = 0 < c.length ? "\n" : "";
          var d = a,
            e = Lb(),
            f = e.lastIndexOf("_emscripten_log"),
            g = e.lastIndexOf("_emscripten_get_callstack");
          f = e.indexOf("\n", Math.max(f, g)) + 1;
          e = e.slice(f);
          d & 8 &&
            "undefined" == typeof emscripten_source_map &&
            (Va(
              'Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'
            ),
            (d ^= 8),
            (d |= 16));
          f = e.split("\n");
          e = "";
          g = RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
          var l = RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),
            p = RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
          for (D in f) {
            var u = f[D],
              t;
            if ((t = p.exec(u)) && 5 == t.length) {
              u = t[1];
              var F = t[2];
              var L = t[3];
              t = t[4];
            } else if (((t = g.exec(u)) || (t = l.exec(u)), t && 4 <= t.length)) (u = t[1]), (F = t[2]), (L = t[3]), (t = t[4] | 0);
            else {
              e += u + "\n";
              continue;
            }
            var q = !1;
            if (d & 8) {
              var C = emscripten_source_map.originalPositionFor({ line: L, column: t });
              if ((q = C && C.source))
                d & 64 && (C.source = C.source.substring(C.source.replace(/\\/g, "/").lastIndexOf("/") + 1)),
                  (e += "    at " + u + " (" + C.source + ":" + C.line + ":" + C.column + ")\n");
            }
            if (d & 16 || !q)
              d & 64 && (F = F.substring(F.replace(/\\/g, "/").lastIndexOf("/") + 1)),
                (e += (q ? "     = " + u : "    at " + u) + (" (" + F + ":" + L + ":" + t + ")\n"));
          }
          var D = (e = e.replace(/\s+$/, ""));
          c = b + (c + D);
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
          ? aa(c)
          : $c(c);
      },
      dq = function () {
        return ca ? require("os").cpus().length : navigator.hardwareConcurrency;
      },
      eq = function () {
        Y("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER");
        return 0;
      },
      fq = function (a) {
        var b = A().length;
        a >>>= 0;
        if (a <= b || 2147483648 < a) return !1;
        for (var c = 1; 4 >= c; c *= 2) {
          var d = b * (1 + 0.2 / c);
          d = Math.min(d, a + 100663296);
          var e = Math,
            f = e.min;
          d = Math.max(a, d);
          d += (65536 - (d % 65536)) % 65536;
          e = f.call(e, 2147483648, d);
          a: {
            f = Z.buffer;
            e = (e - f.byteLength + 65535) / 65536;
            try {
              Z.grow(e);
              V();
              var g = 1;
              break a;
            } catch (l) {}
            g = void 0;
          }
          if (g) return !0;
        }
        return !1;
      },
      kb = function () {
        Y("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER");
        return 0;
      },
      Da = {},
      Vc = function (a) {
        a.forEach(function (b) {
          var c = kb(b);
          c && (Da[c] = b);
        });
      },
      gq = function (a, b, c) {
        if (Da.last_addr == a) var d = Da.last_stack;
        else (d = Lb().split("\n")), "Error" == d[0] && d.shift(), Vc(d);
        for (var e = 3; d[e] && kb(d[e]) != a; ) ++e;
        for (a = 0; a < c && d[a + e]; ++a) n()[(b + 4 * a) >> 2] = kb(d[a + e]);
        return a;
      },
      O = {
        inEventHandler: 0,
        removeAllEventListeners: function () {
          for (var a = O.eventHandlers.length - 1; 0 <= a; --a) O._removeHandler(a);
          O.eventHandlers = [];
          O.deferredCalls = [];
        },
        registerRemoveEventListeners: function () {
          O.removeEventListenersRegistered || (xf.push(O.removeAllEventListeners), (O.removeEventListenersRegistered = !0));
        },
        deferredCalls: [],
        deferCall: function (a, b, c) {
          function d(g, l) {
            if (g.length != l.length) return !1;
            for (var p in g) if (g[p] != l[p]) return !1;
            return !0;
          }
          for (var e in O.deferredCalls) {
            var f = O.deferredCalls[e];
            if (f.targetFunction == a && d(f.argsList, c)) return;
          }
          O.deferredCalls.push({ targetFunction: a, precedence: b, argsList: c });
          O.deferredCalls.sort(function (g, l) {
            return g.precedence < l.precedence;
          });
        },
        removeDeferredCalls: function (a) {
          for (var b = 0; b < O.deferredCalls.length; ++b) O.deferredCalls[b].targetFunction == a && (O.deferredCalls.splice(b, 1), --b);
        },
        canPerformEventHandlerRequests: function () {
          return navigator.userActivation
            ? navigator.userActivation.isActive
            : O.inEventHandler && O.currentEventHandler.allowsDeferredCalls;
        },
        runDeferredCalls: function () {
          if (O.canPerformEventHandlerRequests())
            for (var a = 0; a < O.deferredCalls.length; ++a) {
              var b = O.deferredCalls[a];
              O.deferredCalls.splice(a, 1);
              --a;
              b.targetFunction.apply(null, b.argsList);
            }
        },
        eventHandlers: [],
        removeAllHandlersOnTarget: function (a, b) {
          for (var c = 0; c < O.eventHandlers.length; ++c)
            O.eventHandlers[c].target != a || (b && b != O.eventHandlers[c].eventTypeString) || O._removeHandler(c--);
        },
        _removeHandler: function (a) {
          var b = O.eventHandlers[a];
          b.target.removeEventListener(b.eventTypeString, b.eventListenerFunc, b.useCapture);
          O.eventHandlers.splice(a, 1);
        },
        registerOrRemoveHandler: function (a) {
          if (!a.target) return -4;
          var b = function (c) {
            ++O.inEventHandler;
            O.currentEventHandler = a;
            O.runDeferredCalls();
            a.handlerFunc(c);
            O.runDeferredCalls();
            --O.inEventHandler;
          };
          if (a.callbackfunc)
            (a.eventListenerFunc = b),
              a.target.addEventListener(a.eventTypeString, b, a.useCapture),
              O.eventHandlers.push(a),
              O.registerRemoveEventListeners();
          else
            for (b = 0; b < O.eventHandlers.length; ++b)
              O.eventHandlers[b].target == a.target && O.eventHandlers[b].eventTypeString == a.eventTypeString && O._removeHandler(b--);
          return 0;
        },
        getTargetThreadForEventCallback: function (a) {
          switch (a) {
            case 1:
              return 0;
            case 2:
              return J.currentProxiedOperationCallerThread;
            default:
              return a;
          }
        },
        getNodeNameForTarget: function (a) {
          return a ? (a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "") : "";
        },
        fullscreenEnabled: function () {
          return document.fullscreenEnabled || document.webkitFullscreenEnabled;
        }
      },
      hq = ["default", "low-power", "high-performance"],
      iq = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0],
      jq = function (a) {
        try {
          if (!a) return window;
          "number" == typeof a && (a = iq[a] || S(a));
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
      kq = function (a, b) {
        b >>= 2;
        var c = n()[b + 6];
        b = {
          alpha: !!n()[b + 0],
          depth: !!n()[b + 1],
          stencil: !!n()[b + 2],
          antialias: !!n()[b + 3],
          premultipliedAlpha: !!n()[b + 4],
          preserveDrawingBuffer: !!n()[b + 5],
          powerPreference: hq[c],
          failIfMajorPerformanceCaveat: !!n()[b + 7],
          majorVersion: n()[b + 8],
          minorVersion: n()[b + 9],
          enableExtensionsByDefault: n()[b + 10],
          explicitSwapControl: n()[b + 11],
          proxyContextToMainThread: n()[b + 12],
          renderViaOffscreenBackBuffer: n()[b + 13]
        };
        "number" == typeof a && (a = S(a));
        a =
          a && "#canvas" !== a
            ? "undefined" != typeof m && m.offscreenCanvases[a]
              ? m.offscreenCanvases[a]
              : jq(a)
            : "undefined" != typeof m && m.offscreenCanvases.canvas
            ? m.offscreenCanvases.canvas
            : h.canvas;
        return !a || b.explicitSwapControl ? 0 : (a = m.createContext(a, b));
      },
      lq = kq,
      mq = function (a) {
        for (var b = a >> 2, c = 0; 14 > c; ++c) n()[b + c] = 0;
        n()[b + 0] = n()[b + 1] = n()[b + 3] = n()[b + 4] = n()[b + 8] = n()[b + 10] = 1;
        qa && (n()[(a + 48) >> 2] = 1);
      },
      nq = function (a) {
        return (a = m.makeContextCurrent(a)) ? 0 : -5;
      },
      xb = {},
      ab = function () {
        if (!ab.strings) {
          var a = (("object" == typeof navigator && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8";
          a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: a, _: Qb || "./this.program" };
          for (var b in xb) void 0 === xb[b] ? delete a[b] : (a[b] = xb[b]);
          var c = [];
          for (b in a) c.push(b + "=" + a[b]);
          ab.strings = c;
        }
        return ab.strings;
      },
      Sd = function (a, b) {
        if (N) return T(19, 1, a, b);
        var c = 0;
        ab().forEach(function (d, e) {
          var f = b + c;
          y()[(a + 4 * e) >> 2] = f;
          e = d;
          for (var g = 0; g < e.length; ++g) w()[f++ >> 0] = e.charCodeAt(g);
          w()[f >> 0] = 0;
          c += d.length + 1;
        });
        return 0;
      },
      Td = function (a, b) {
        if (N) return T(20, 1, a, b);
        var c = ab();
        y()[a >> 2] = c.length;
        var d = 0;
        c.forEach(function (e) {
          return (d += e.length + 1);
        });
        y()[b >> 2] = d;
        return 0;
      },
      rf = [null, [], []],
      oq = function () {
        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
          return function (d) {
            return d.set(crypto.getRandomValues(new Uint8Array(d.byteLength))), d;
          };
        if (ca)
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
        Y("initRandomDevice");
      },
      Ud = function (a) {
        return (Ud = oq())(a);
      },
      pq = function (a, b) {
        Ud(A().subarray(a, a + b));
        return 0;
      },
      yb = function (a) {
        return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
      },
      Vd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Wd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      qq = function (a, b) {
        w().set(a, b);
      },
      rq = function (a, b, c, d) {
        function e(q, C, D) {
          for (q = "number" == typeof q ? q.toString() : q || ""; q.length < C; ) q = D[0] + q;
          return q;
        }
        function f(q, C) {
          return e(q, C, "0");
        }
        function g(q, C) {
          function D(E) {
            return 0 > E ? -1 : 0 < E ? 1 : 0;
          }
          var M;
          0 === (M = D(q.getFullYear() - C.getFullYear())) &&
            0 === (M = D(q.getMonth() - C.getMonth())) &&
            (M = D(q.getDate() - C.getDate()));
          return M;
        }
        function l(q) {
          switch (q.getDay()) {
            case 0:
              return new Date(q.getFullYear() - 1, 11, 29);
            case 1:
              return q;
            case 2:
              return new Date(q.getFullYear(), 0, 3);
            case 3:
              return new Date(q.getFullYear(), 0, 2);
            case 4:
              return new Date(q.getFullYear(), 0, 1);
            case 5:
              return new Date(q.getFullYear() - 1, 11, 31);
            case 6:
              return new Date(q.getFullYear() - 1, 11, 30);
          }
        }
        function p(q) {
          a: {
            var C = new Date(q.tm_year + 1900, 0, 1);
            q = q.tm_yday;
            for (C = new Date(C.getTime()); 0 < q; ) {
              var D = yb(C.getFullYear()),
                M = C.getMonth();
              D = (D ? Vd : Wd)[M];
              if (q > D - C.getDate())
                (q -= D - C.getDate() + 1), C.setDate(1), 11 > M ? C.setMonth(M + 1) : (C.setMonth(0), C.setFullYear(C.getFullYear() + 1));
              else {
                C.setDate(C.getDate() + q);
                q = C;
                break a;
              }
            }
            q = C;
          }
          M = new Date(q.getFullYear(), 0, 4);
          C = new Date(q.getFullYear() + 1, 0, 4);
          M = l(M);
          C = l(C);
          return 0 >= g(M, q) ? (0 >= g(C, q) ? q.getFullYear() + 1 : q.getFullYear()) : q.getFullYear() - 1;
        }
        var u = y()[(d + 40) >> 2];
        d = {
          tm_sec: n()[d >> 2],
          tm_min: n()[(d + 4) >> 2],
          tm_hour: n()[(d + 8) >> 2],
          tm_mday: n()[(d + 12) >> 2],
          tm_mon: n()[(d + 16) >> 2],
          tm_year: n()[(d + 20) >> 2],
          tm_wday: n()[(d + 24) >> 2],
          tm_yday: n()[(d + 28) >> 2],
          tm_isdst: n()[(d + 32) >> 2],
          tm_gmtoff: n()[(d + 36) >> 2],
          tm_zone: u ? S(u) : ""
        };
        c = S(c);
        u = {
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
        for (var t in u) c = c.replace(new RegExp(t, "g"), u[t]);
        var F = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          L = "January February March April May June July August September October November December".split(" ");
        u = {
          "%a": function (q) {
            return F[q.tm_wday].substring(0, 3);
          },
          "%A": function (q) {
            return F[q.tm_wday];
          },
          "%b": function (q) {
            return L[q.tm_mon].substring(0, 3);
          },
          "%B": function (q) {
            return L[q.tm_mon];
          },
          "%C": function (q) {
            q = q.tm_year + 1900;
            return f((q / 100) | 0, 2);
          },
          "%d": function (q) {
            return f(q.tm_mday, 2);
          },
          "%e": function (q) {
            return e(q.tm_mday, 2, " ");
          },
          "%g": function (q) {
            return p(q).toString().substring(2);
          },
          "%G": function (q) {
            return p(q);
          },
          "%H": function (q) {
            return f(q.tm_hour, 2);
          },
          "%I": function (q) {
            q = q.tm_hour;
            0 == q ? (q = 12) : 12 < q && (q -= 12);
            return f(q, 2);
          },
          "%j": function (q) {
            for (var C = q.tm_mday, D = yb(q.tm_year + 1900) ? Vd : Wd, M = 0, E = 0; E <= q.tm_mon - 1; M += D[E++]);
            q = M;
            return f(C + q, 3);
          },
          "%m": function (q) {
            return f(q.tm_mon + 1, 2);
          },
          "%M": function (q) {
            return f(q.tm_min, 2);
          },
          "%n": function () {
            return "\n";
          },
          "%p": function (q) {
            return 0 <= q.tm_hour && 12 > q.tm_hour ? "AM" : "PM";
          },
          "%S": function (q) {
            return f(q.tm_sec, 2);
          },
          "%t": function () {
            return "\t";
          },
          "%u": function (q) {
            return q.tm_wday || 7;
          },
          "%U": function (q) {
            q = q.tm_yday + 7 - q.tm_wday;
            return f(Math.floor(q / 7), 2);
          },
          "%V": function (q) {
            var C = Math.floor((q.tm_yday + 7 - ((q.tm_wday + 6) % 7)) / 7);
            2 >= (q.tm_wday + 371 - q.tm_yday - 2) % 7 && C++;
            if (C) 53 == C && ((D = (q.tm_wday + 371 - q.tm_yday) % 7), 4 == D || (3 == D && yb(q.tm_year)) || (C = 1));
            else {
              C = 52;
              var D = (q.tm_wday + 7 - q.tm_yday - 1) % 7;
              (4 == D || (5 == D && yb((q.tm_year % 400) - 1))) && C++;
            }
            return f(C, 2);
          },
          "%w": function (q) {
            return q.tm_wday;
          },
          "%W": function (q) {
            q = q.tm_yday + 7 - ((q.tm_wday + 6) % 7);
            return f(Math.floor(q / 7), 2);
          },
          "%y": function (q) {
            return (q.tm_year + 1900).toString().substring(2);
          },
          "%Y": function (q) {
            return q.tm_year + 1900;
          },
          "%z": function (q) {
            q = q.tm_gmtoff;
            var C = 0 <= q;
            q = Math.abs(q) / 60;
            q = (q / 60) * 100 + (q % 60);
            return (C ? "+" : "-") + String("0000" + q).slice(-4);
          },
          "%Z": function (q) {
            return q.tm_zone;
          },
          "%%": function () {
            return "%";
          }
        };
        c = c.replace(/%%/g, "\x00\x00");
        for (t in u) c.includes(t) && (c = c.replace(new RegExp(t, "g"), u[t](d)));
        c = c.replace(/\0\0/g, "%");
        t = Tc(c, !1);
        if (t.length > b) return 0;
        qq(t, a);
        return t.length - 1;
      },
      sq = function (a, b, c, d) {
        return rq(a, b, c, d);
      };
    J.init();
    var Xd = function (a) {
      a = Error.call(this, a);
      this.message = a.message;
      "stack" in a && (this.stack = a.stack);
      this.name = "InternalError";
    };
    $jscomp.inherits(Xd, Error);
    var Df = (h.InternalError = Xd);
    Hf();
    var Yd = function (a) {
      a = Error.call(this, a);
      this.message = a.message;
      "stack" in a && (this.stack = a.stack);
      this.name = "BindingError";
    };
    $jscomp.inherits(Yd, Error);
    var Pa = (h.BindingError = Yd);
    Mf();
    h.getInheritedInstanceCount = Jf;
    h.getLiveInheritedInstances = Kf;
    h.flushPendingDeletes = Yb;
    h.setDelayFunction = Lf;
    Nf();
    var Qf = (h.UnboundTypeError = Pf(Error, "UnboundTypeError"));
    ke();
    ia.allocated.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 });
    ia.reserved = ia.allocated.length;
    h.count_emval_handles = Vf;
    h.requestFullscreen = function (a, b) {
      return v.requestFullscreen(a, b);
    };
    h.requestAnimationFrame = function (a) {
      return v.requestAnimationFrame(a);
    };
    h.setCanvasSize = function (a, b, c) {
      return v.setCanvasSize(a, b, c);
    };
    h.pauseMainLoop = function () {
      return v.mainLoop.pause();
    };
    h.resumeMainLoop = function () {
      return v.mainLoop.resume();
    };
    h.getUserMedia = function () {
      return v.getUserMedia();
    };
    h.createContext = function (a, b, c, d) {
      return v.createContext(a, b, c, d);
    };
    for (var k, ea = 0; 32 > ea; ++ea) ub.push(Array(ea));
    var tq = new Float32Array(288);
    for (ea = 0; 288 > ea; ++ea) ta[ea] = tq.subarray(0, ea + 1);
    var uq = new Int32Array(288);
    for (ea = 0; 288 > ea; ++ea) Za[ea] = uq.subarray(0, ea + 1);
    var vg = [Fb, vc, wc, yc, le, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sd, Td, Wc, Xc, Yc, Zc],
      ae = {
        C: ce,
        db: Bf,
        J: Cf,
        ab: xc,
        ib: yc,
        cd: Ef,
        Q: Ff,
        Va: Gf,
        sb: If,
        f: Rf,
        i: Sf,
        d: Tf,
        e: Uf,
        Sa: Wf,
        j: Yf,
        c: Zf,
        K: ag,
        w: bg,
        s: dg,
        k: eg,
        I: fg,
        A: mg,
        xd: ng,
        S: og,
        R: pg,
        t: qg,
        Db: rg,
        lb: sg,
        _a: tg,
        bb: wg,
        cb: bc,
        fb: xg,
        Za: yg,
        q: zg,
        F: Ag,
        x: Cg,
        g: ac,
        B: Dg,
        y: Fg,
        m: Gg,
        o: Hg,
        _e: Ig,
        Fe: Kg,
        n: Lg,
        l: Mg,
        r: Ng,
        Ua: Ec,
        b: Og,
        E: Fc,
        Ha: Gc,
        Ga: Hc,
        H: Ic,
        G: Jc,
        Ja: Kc,
        La: Lc,
        z: Mc,
        Ka: Nc,
        Ma: Oc,
        Ia: Pc,
        Na: Qc,
        Oa: Rc,
        Fa: be,
        v: Ug,
        h: Vg,
        L: Wg,
        P: Xg,
        D: Yg,
        eb: Zg,
        Wa: $g,
        p: fc,
        ga: ah,
        fa: ch,
        bd: eh,
        wa: gh,
        Kc: hh,
        ea: jh,
        da: lh,
        Hc: nh,
        Ic: ph,
        ca: rh,
        ba: th,
        Pb: vh,
        aa: xh,
        Hb: zh,
        Pc: Ah,
        oa: Ch,
        $: Dh,
        _: Eh,
        Z: Fh,
        Y: Gh,
        X: Hh,
        Sc: Ih,
        W: Kh,
        V: Mh,
        U: Nh,
        T: Oh,
        kc: Ph,
        lc: Rh,
        nc: Th,
        mc: Vh,
        Nf: Wh,
        Mf: Xh,
        Lf: Yh,
        Yb: $h,
        Kf: bi,
        Jf: di,
        If: fi,
        hd: hi,
        Hf: ji,
        gd: li,
        ic: mi,
        Gf: ni,
        Ff: oi,
        id: pi,
        Ef: ri,
        Df: ti,
        Cf: ui,
        Bf: wi,
        Af: yi,
        zf: Ai,
        ed: Ci,
        ya: Ei,
        yf: Gi,
        Rb: Ii,
        xf: Ki,
        Zb: Mi,
        wf: Oi,
        Gb: Qi,
        Oc: Ri,
        na: Ti,
        vf: Ui,
        uf: Wi,
        tf: Xi,
        sf: Zi,
        rf: $i,
        qf: bj,
        pf: dj,
        bc: ej,
        ja: gj,
        ob: ij,
        pd: kj,
        pb: mj,
        Zc: nj,
        nd: pj,
        ka: rj,
        of: sj,
        ac: tj,
        ia: vj,
        mb: xj,
        nb: zj,
        od: Bj,
        ld: Dj,
        nf: Ej,
        mf: Gj,
        ad: Hj,
        va: Jj,
        Jc: Kj,
        $b: Mj,
        lf: Nj,
        kf: Oj,
        jf: Qj,
        hf: Sj,
        Qc: Uj,
        gf: Vj,
        ff: Xj,
        df: Zj,
        fd: bk,
        za: dk,
        cf: fk,
        Sb: hk,
        bf: jk,
        Fb: lk,
        Nc: mk,
        ma: ok,
        ef: pk,
        af: rk,
        $e: tk,
        dc: vk,
        ec: xk,
        gc: zk,
        Ze: Bk,
        Ye: Dk,
        Xe: Fk,
        Tb: Hk,
        We: Jk,
        Ve: Lk,
        Ue: Nk,
        wc: Pk,
        Te: Rk,
        Ub: Tk,
        Wb: Vk,
        Lc: Xk,
        Se: Zk,
        tb: al,
        Ab: cl,
        Qe: el,
        Re: gl,
        qa: hl,
        sa: il,
        pa: kl,
        _c: ml,
        ra: ol,
        $c: ql,
        ta: sl,
        Pe: ul,
        Jb: wl,
        Kb: yl,
        Ne: Al,
        Me: Cl,
        Le: El,
        Oe: Gl,
        Ke: Il,
        jc: Kl,
        Vb: Ml,
        Je: Ol,
        Ie: Ql,
        Fc: Sl,
        fc: Ul,
        hc: Wl,
        Ee: Yl,
        He: $l,
        Ge: bm,
        xc: dm,
        Dc: em,
        Cc: gm,
        Be: im,
        De: km,
        Ce: mm,
        Ae: nm,
        xb: pm,
        wb: rm,
        ze: tm,
        ye: um,
        xe: wm,
        we: ym,
        dd: Am,
        xa: Cm,
        ve: Em,
        Qb: Gm,
        ue: Im,
        _b: Km,
        te: Mm,
        Eb: Om,
        Mc: Pm,
        la: Rm,
        se: Sm,
        re: Um,
        Cb: Vm,
        qe: Xm,
        pe: Ym,
        zb: $m,
        yb: bn,
        ua: dn,
        md: en,
        oe: gn,
        ne: jn,
        me: kn,
        Rc: ln,
        Bb: mn,
        le: on,
        Mb: qn,
        Lb: sn,
        Ob: un,
        Nb: wn,
        ke: xn,
        je: zn,
        ie: Bn,
        he: Cn,
        ge: Dn,
        fe: En,
        ee: Fn,
        de: Gn,
        ce: Hn,
        be: Jn,
        kd: Ln,
        ae: Mn,
        $d: On,
        _d: Pn,
        Zd: Rn,
        vb: Sn,
        ub: Tn,
        Yd: Vn,
        jd: Xn,
        Gc: Zn,
        Xd: ao,
        Wd: co,
        Vd: fo,
        Ud: ho,
        vc: jo,
        rc: lo,
        Td: no,
        Rd: po,
        Qd: ro,
        Pd: to,
        uc: vo,
        qc: xo,
        Od: zo,
        Nd: Bo,
        Md: Do,
        Ld: Fo,
        tc: Ho,
        pc: Jo,
        Kd: Lo,
        Jd: No,
        Id: Po,
        Hd: Ro,
        sc: To,
        oc: Vo,
        cc: Xo,
        Gd: Zo,
        Yc: ap,
        Wc: cp,
        Fd: ep,
        Xc: gp,
        Uc: ip,
        Ed: kp,
        Vc: mp,
        Tc: op,
        Dd: qp,
        Cd: sp,
        Bd: tp,
        Ad: vp,
        zd: wp,
        yd: yp,
        wd: zp,
        vd: Bp,
        ud: Cp,
        td: Ep,
        Ib: Fp,
        ha: Hp,
        qb: Jp,
        qd: Lp,
        rb: Np,
        Bc: Op,
        zc: Qp,
        Ac: Rp,
        yc: Tp,
        Ec: Vp,
        sd: Xp,
        rd: Yp,
        Xb: $p,
        Da: cq,
        Xa: dq,
        Aa: eq,
        gb: fq,
        Ca: qf,
        Ba: gq,
        Of: lq,
        Pf: mq,
        Sd: nq,
        jb: Sd,
        kb: Td,
        $a: Gb,
        O: Wc,
        M: Xc,
        Ta: Yc,
        N: Zc,
        Ea: pq,
        Ra: tf,
        Qa: uf,
        u: sf,
        Pa: vf,
        a: Z || h.wasmMemory,
        hb: Fb,
        Ya: sq
      },
      B = $d(),
      Oa = (h._pthread_self = function () {
        return (Oa = h._pthread_self = B.Sf)();
      });
    h._willPartialDraw = function (a) {
      return (h._willPartialDraw = B.Tf)(a);
    };
    h._draw = function (a) {
      return (h._draw = B.Uf)(a);
    };
    var pa = function (a) {
        return (pa = B.Vf)(a);
      },
      oa = function (a) {
        return (oa = B.Wf)(a);
      },
      ud = function (a) {
        return (ud = B.Xf)(a);
      };
    h.__embind_initialize_bindings = function () {
      return (h.__embind_initialize_bindings = B.Yf)();
    };
    h.__emscripten_tls_init = function () {
      return (h.__emscripten_tls_init = B.Zf)();
    };
    var od = (h.__emscripten_thread_init = function (a, b, c, d, e, f) {
      return (od = h.__emscripten_thread_init = B._f)(a, b, c, d, e, f);
    });
    h.__emscripten_thread_crashed = function () {
      return (h.__emscripten_thread_crashed = B.$f)();
    };
    var Bd = function (a, b, c, d) {
        return (Bd = B.ag)(a, b, c, d);
      },
      Ub = function (a) {
        return (Ub = B.bg)(a);
      },
      Vb = (h.__emscripten_thread_exit = function (a) {
        return (Vb = h.__emscripten_thread_exit = B.cg)(a);
      }),
      zd = (h.__emscripten_check_mailbox = function () {
        return (zd = h.__emscripten_check_mailbox = B.dg)();
      }),
      Na = function (a, b) {
        return (Na = B.eg)(a, b);
      },
      nd = function (a, b) {
        return (nd = B.fg)(a, b);
      },
      Ea = function () {
        return (Ea = B.gg)();
      },
      xa = function (a) {
        return (xa = B.hg)(a);
      },
      Ad = function (a) {
        return (Ad = B.ig)(a);
      };
    h.dynCall_i = function (a) {
      return (h.dynCall_i = B.jg)(a);
    };
    h.dynCall_iiidd = function (a, b, c, d, e) {
      return (h.dynCall_iiidd = B.kg)(a, b, c, d, e);
    };
    h.dynCall_iidd = function (a, b, c, d) {
      return (h.dynCall_iidd = B.lg)(a, b, c, d);
    };
    var Nb = (h.dynCall_ii = function (a, b) {
      return (Nb = h.dynCall_ii = B.mg)(a, b);
    });
    h.dynCall_vi = function (a, b) {
      return (h.dynCall_vi = B.ng)(a, b);
    };
    var bd = (h.dynCall_iii = function (a, b, c) {
        return (bd = h.dynCall_iii = B.og)(a, b, c);
      }),
      ad = (h.dynCall_vii = function (a, b, c) {
        return (ad = h.dynCall_vii = B.pg)(a, b, c);
      });
    h.dynCall_iiiii = function (a, b, c, d, e) {
      return (h.dynCall_iiiii = B.qg)(a, b, c, d, e);
    };
    h.dynCall_iiii = function (a, b, c, d) {
      return (h.dynCall_iiii = B.rg)(a, b, c, d);
    };
    h.dynCall_viii = function (a, b, c, d) {
      return (h.dynCall_viii = B.sg)(a, b, c, d);
    };
    h.dynCall_iiiiii = function (a, b, c, d, e, f) {
      return (h.dynCall_iiiiii = B.tg)(a, b, c, d, e, f);
    };
    h.dynCall_viiii = function (a, b, c, d, e) {
      return (h.dynCall_viiii = B.ug)(a, b, c, d, e);
    };
    h.dynCall_iiiifi = function (a, b, c, d, e, f) {
      return (h.dynCall_iiiifi = B.vg)(a, b, c, d, e, f);
    };
    h.dynCall_iiiiifi = function (a, b, c, d, e, f, g) {
      return (h.dynCall_iiiiifi = B.wg)(a, b, c, d, e, f, g);
    };
    h.dynCall_iiff = function (a, b, c, d) {
      return (h.dynCall_iiff = B.xg)(a, b, c, d);
    };
    h.dynCall_iiiff = function (a, b, c, d, e) {
      return (h.dynCall_iiiff = B.yg)(a, b, c, d, e);
    };
    h.dynCall_fi = function (a, b) {
      return (h.dynCall_fi = B.zg)(a, b);
    };
    h.dynCall_fii = function (a, b, c) {
      return (h.dynCall_fii = B.Ag)(a, b, c);
    };
    var cd = (h.dynCall_viiiii = function (a, b, c, d, e, f) {
      return (cd = h.dynCall_viiiii = B.Bg)(a, b, c, d, e, f);
    });
    h.dynCall_vid = function (a, b, c) {
      return (h.dynCall_vid = B.Cg)(a, b, c);
    };
    h.dynCall_viid = function (a, b, c, d) {
      return (h.dynCall_viid = B.Dg)(a, b, c, d);
    };
    h.dynCall_di = function (a, b) {
      return (h.dynCall_di = B.Eg)(a, b);
    };
    h.dynCall_d = function (a) {
      return (h.dynCall_d = B.Fg)(a);
    };
    h.dynCall_vif = function (a, b, c) {
      return (h.dynCall_vif = B.Gg)(a, b, c);
    };
    h.dynCall_viif = function (a, b, c, d) {
      return (h.dynCall_viif = B.Hg)(a, b, c, d);
    };
    h.dynCall_dii = function (a, b, c) {
      return (h.dynCall_dii = B.Ig)(a, b, c);
    };
    h.dynCall_v = function (a) {
      return (h.dynCall_v = B.Jg)(a);
    };
    h.dynCall_iidi = function (a, b, c, d) {
      return (h.dynCall_iidi = B.Kg)(a, b, c, d);
    };
    h.dynCall_viiiiii = function (a, b, c, d, e, f, g) {
      return (h.dynCall_viiiiii = B.Lg)(a, b, c, d, e, f, g);
    };
    h.dynCall_viiif = function (a, b, c, d, e) {
      return (h.dynCall_viiif = B.Mg)(a, b, c, d, e);
    };
    h.dynCall_viiiif = function (a, b, c, d, e, f) {
      return (h.dynCall_viiiif = B.Ng)(a, b, c, d, e, f);
    };
    h.dynCall_viiiiiiii = function (a, b, c, d, e, f, g, l, p) {
      return (h.dynCall_viiiiiiii = B.Og)(a, b, c, d, e, f, g, l, p);
    };
    h.dynCall_iiiijij = function (a, b, c, d, e, f, g, l, p) {
      return (h.dynCall_iiiijij = B.Pg)(a, b, c, d, e, f, g, l, p);
    };
    h.dynCall_viidi = function (a, b, c, d, e) {
      return (h.dynCall_viidi = B.Qg)(a, b, c, d, e);
    };
    h.dynCall_viifi = function (a, b, c, d, e) {
      return (h.dynCall_viifi = B.Rg)(a, b, c, d, e);
    };
    h.dynCall_viiifi = function (a, b, c, d, e, f) {
      return (h.dynCall_viiifi = B.Sg)(a, b, c, d, e, f);
    };
    h.dynCall_viiid = function (a, b, c, d, e) {
      return (h.dynCall_viiid = B.Tg)(a, b, c, d, e);
    };
    h.dynCall_fiiif = function (a, b, c, d, e) {
      return (h.dynCall_fiiif = B.Ug)(a, b, c, d, e);
    };
    h.dynCall_viidiff = function (a, b, c, d, e, f, g) {
      return (h.dynCall_viidiff = B.Vg)(a, b, c, d, e, f, g);
    };
    h.dynCall_iiidi = function (a, b, c, d, e) {
      return (h.dynCall_iiidi = B.Wg)(a, b, c, d, e);
    };
    h.dynCall_vidii = function (a, b, c, d, e) {
      return (h.dynCall_vidii = B.Xg)(a, b, c, d, e);
    };
    h.dynCall_vifidi = function (a, b, c, d, e, f) {
      return (h.dynCall_vifidi = B.Yg)(a, b, c, d, e, f);
    };
    h.dynCall_viiiiiii = function (a, b, c, d, e, f, g, l) {
      return (h.dynCall_viiiiiii = B.Zg)(a, b, c, d, e, f, g, l);
    };
    h.dynCall_fif = function (a, b, c) {
      return (h.dynCall_fif = B._g)(a, b, c);
    };
    h.dynCall_viidii = function (a, b, c, d, e, f) {
      return (h.dynCall_viidii = B.$g)(a, b, c, d, e, f);
    };
    h.dynCall_fiii = function (a, b, c, d) {
      return (h.dynCall_fiii = B.ah)(a, b, c, d);
    };
    h.dynCall_iiiif = function (a, b, c, d, e) {
      return (h.dynCall_iiiif = B.bh)(a, b, c, d, e);
    };
    h.dynCall_viiiff = function (a, b, c, d, e, f) {
      return (h.dynCall_viiiff = B.ch)(a, b, c, d, e, f);
    };
    h.dynCall_iiiiid = function (a, b, c, d, e, f) {
      return (h.dynCall_iiiiid = B.dh)(a, b, c, d, e, f);
    };
    h.dynCall_iiiid = function (a, b, c, d, e) {
      return (h.dynCall_iiiid = B.eh)(a, b, c, d, e);
    };
    h.dynCall_iiiiiiii = function (a, b, c, d, e, f, g, l) {
      return (h.dynCall_iiiiiiii = B.fh)(a, b, c, d, e, f, g, l);
    };
    h.dynCall_ji = function (a, b) {
      return (h.dynCall_ji = B.gh)(a, b);
    };
    h.dynCall_viijii = function (a, b, c, d, e, f, g) {
      return (h.dynCall_viijii = B.hh)(a, b, c, d, e, f, g);
    };
    h.dynCall_iiiiiii = function (a, b, c, d, e, f, g) {
      return (h.dynCall_iiiiiii = B.ih)(a, b, c, d, e, f, g);
    };
    h.dynCall_vij = function (a, b, c, d) {
      return (h.dynCall_vij = B.jh)(a, b, c, d);
    };
    h.dynCall_vijjj = function (a, b, c, d, e, f, g, l) {
      return (h.dynCall_vijjj = B.kh)(a, b, c, d, e, f, g, l);
    };
    h.dynCall_vj = function (a, b, c) {
      return (h.dynCall_vj = B.lh)(a, b, c);
    };
    h.dynCall_viij = function (a, b, c, d, e) {
      return (h.dynCall_viij = B.mh)(a, b, c, d, e);
    };
    h.dynCall_viiiiij = function (a, b, c, d, e, f, g, l) {
      return (h.dynCall_viiiiij = B.nh)(a, b, c, d, e, f, g, l);
    };
    h.dynCall_vffff = function (a, b, c, d, e) {
      return (h.dynCall_vffff = B.oh)(a, b, c, d, e);
    };
    h.dynCall_vf = function (a, b) {
      return (h.dynCall_vf = B.ph)(a, b);
    };
    h.dynCall_viiiiiiiii = function (a, b, c, d, e, f, g, l, p, u) {
      return (h.dynCall_viiiiiiiii = B.qh)(a, b, c, d, e, f, g, l, p, u);
    };
    h.dynCall_vff = function (a, b, c) {
      return (h.dynCall_vff = B.rh)(a, b, c);
    };
    h.dynCall_vfi = function (a, b, c) {
      return (h.dynCall_vfi = B.sh)(a, b, c);
    };
    h.dynCall_viff = function (a, b, c, d) {
      return (h.dynCall_viff = B.th)(a, b, c, d);
    };
    h.dynCall_vifff = function (a, b, c, d, e) {
      return (h.dynCall_vifff = B.uh)(a, b, c, d, e);
    };
    h.dynCall_viffff = function (a, b, c, d, e, f) {
      return (h.dynCall_viffff = B.vh)(a, b, c, d, e, f);
    };
    h.dynCall_viiiiiiiiii = function (a, b, c, d, e, f, g, l, p, u, t) {
      return (h.dynCall_viiiiiiiiii = B.wh)(a, b, c, d, e, f, g, l, p, u, t);
    };
    h.dynCall_viiiiiiiiiii = function (a, b, c, d, e, f, g, l, p, u, t, F) {
      return (h.dynCall_viiiiiiiiiii = B.xh)(a, b, c, d, e, f, g, l, p, u, t, F);
    };
    h.dynCall_iijjiiii = function (a, b, c, d, e, f, g, l, p, u) {
      return (h.dynCall_iijjiiii = B.yh)(a, b, c, d, e, f, g, l, p, u);
    };
    h.dynCall_jiji = function (a, b, c, d, e) {
      return (h.dynCall_jiji = B.zh)(a, b, c, d, e);
    };
    h.dynCall_iiiiiiiii = function (a, b, c, d, e, f, g, l, p) {
      return (h.dynCall_iiiiiiiii = B.Ah)(a, b, c, d, e, f, g, l, p);
    };
    h.dynCall_iiiiij = function (a, b, c, d, e, f, g) {
      return (h.dynCall_iiiiij = B.Bh)(a, b, c, d, e, f, g);
    };
    h.dynCall_iiiiijj = function (a, b, c, d, e, f, g, l, p) {
      return (h.dynCall_iiiiijj = B.Ch)(a, b, c, d, e, f, g, l, p);
    };
    h.dynCall_iiiiiijj = function (a, b, c, d, e, f, g, l, p, u) {
      return (h.dynCall_iiiiiijj = B.Dh)(a, b, c, d, e, f, g, l, p, u);
    };
    h.___start_em_js = 329864;
    h.___stop_em_js = 330387;
    h.wasmMemory = Z;
    h.ENV = xb;
    h.keepRuntimeAlive = cb;
    h.ExitStatus = Eb;
    h.PThread = J;
    var lb;
    Ja = function b() {
      lb || dd();
      lb || (Ja = b);
    };
    if (h.preInit) for ("function" == typeof h.preInit && (h.preInit = [h.preInit]); 0 < h.preInit.length; ) h.preInit.pop()();
    dd();
    return x.ready;
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
  var r = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
  r.inkLoadWasmPostRun && r.inkLoadWasmPostRun();
})();
