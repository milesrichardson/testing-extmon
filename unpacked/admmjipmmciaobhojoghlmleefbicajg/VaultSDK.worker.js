/*
 The buffer module from node.js, for the browser.

 @author   Feross Aboukhadijeh <http://feross.org>
 @license  MIT
 ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (O) {
  var w = 0;
  return function () {
    return w < O.length ? { done: !1, value: O[w++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (O) {
  return { next: $jscomp.arrayIteratorImpl(O) };
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
    : function (O, w, H) {
        if (O == Array.prototype || O == Object.prototype) return O;
        O[w] = H.value;
        return O;
      };
$jscomp.getGlobal = function (O) {
  O = [
    "object" == typeof globalThis && globalThis,
    O,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global
  ];
  for (var w = 0; w < O.length; ++w) {
    var H = O[w];
    if (H && H.Math == Math) return H;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (O, w) {
  var H = $jscomp.propertyToPolyfillSymbol[w];
  if (null == H) return O[w];
  H = O[H];
  return void 0 !== H ? H : O[w];
};
$jscomp.polyfill = function (O, w, H, n) {
  w && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(O, w, H, n) : $jscomp.polyfillUnisolated(O, w, H, n));
};
$jscomp.polyfillUnisolated = function (O, w, H, n) {
  H = $jscomp.global;
  O = O.split(".");
  for (n = 0; n < O.length - 1; n++) {
    var E = O[n];
    if (!(E in H)) return;
    H = H[E];
  }
  O = O[O.length - 1];
  n = H[O];
  w = w(n);
  w != n && null != w && $jscomp.defineProperty(H, O, { configurable: !0, writable: !0, value: w });
};
$jscomp.polyfillIsolated = function (O, w, H, n) {
  var E = O.split(".");
  O = 1 === E.length;
  n = E[0];
  n = !O && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var C = 0; C < E.length - 1; C++) {
    var B = E[C];
    if (!(B in n)) return;
    n = n[B];
  }
  E = E[E.length - 1];
  H = $jscomp.IS_SYMBOL_NATIVE && "es6" === H ? n[E] : null;
  w = w(H);
  null != w &&
    (O
      ? $jscomp.defineProperty($jscomp.polyfills, E, { configurable: !0, writable: !0, value: w })
      : w !== H &&
        (void 0 === $jscomp.propertyToPolyfillSymbol[E] &&
          ((H = (1e9 * Math.random()) >>> 0),
          ($jscomp.propertyToPolyfillSymbol[E] = $jscomp.IS_SYMBOL_NATIVE
            ? $jscomp.global.Symbol(E)
            : $jscomp.POLYFILL_PREFIX + H + "$" + E)),
        $jscomp.defineProperty(n, $jscomp.propertyToPolyfillSymbol[E], { configurable: !0, writable: !0, value: w })));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill(
  "Symbol",
  function (O) {
    if (O) return O;
    var w = function (C, B) {
      this.$jscomp$symbol$id_ = C;
      $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: B });
    };
    w.prototype.toString = function () {
      return this.$jscomp$symbol$id_;
    };
    var H = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      n = 0,
      E = function (C) {
        if (this instanceof E) throw new TypeError("Symbol is not a constructor");
        return new w(H + (C || "") + "_" + n++, C);
      };
    return E;
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Symbol.iterator",
  function (O) {
    if (O) return O;
    O = Symbol("Symbol.iterator");
    for (
      var w = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        H = 0;
      H < w.length;
      H++
    ) {
      var n = $jscomp.global[w[H]];
      "function" === typeof n &&
        "function" != typeof n.prototype[O] &&
        $jscomp.defineProperty(n.prototype, O, {
          configurable: !0,
          writable: !0,
          value: function () {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
          }
        });
    }
    return O;
  },
  "es6",
  "es3"
);
$jscomp.iteratorPrototype = function (O) {
  O = { next: O };
  O[Symbol.iterator] = function () {
    return this;
  };
  return O;
};
$jscomp.polyfill(
  "Array.prototype.fill",
  function (O) {
    return O
      ? O
      : function (w, H, n) {
          var E = this.length || 0;
          0 > H && (H = Math.max(0, E + H));
          if (null == n || n > E) n = E;
          n = Number(n);
          0 > n && (n = Math.max(0, E + n));
          for (H = Number(H || 0); H < n; H++) this[H] = w;
          return this;
        };
  },
  "es6",
  "es3"
);
$jscomp.typedArrayFill = function (O) {
  return O ? O : Array.prototype.fill;
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
$jscomp.iteratorFromArray = function (O, w) {
  O instanceof String && (O += "");
  var H = 0,
    n = !1,
    E = {
      next: function () {
        if (!n && H < O.length) {
          var C = H++;
          return { value: w(C, O[C]), done: !1 };
        }
        n = !0;
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
  function (O) {
    return O
      ? O
      : function () {
          return $jscomp.iteratorFromArray(this, function (w) {
            return w;
          });
        };
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Array.prototype.values",
  function (O) {
    return O
      ? O
      : function () {
          return $jscomp.iteratorFromArray(this, function (w, H) {
            return H;
          });
        };
  },
  "es8",
  "es3"
);
!(function (O) {
  function w(n) {
    if (H[n]) return H[n].exports;
    var E = (H[n] = { i: n, l: !1, exports: {} });
    return O[n].call(E.exports, E, E.exports, w), (E.l = !0), E.exports;
  }
  var H = {};
  w.m = O;
  w.c = H;
  w.d = function (n, E, C) {
    w.o(n, E) || Object.defineProperty(n, E, { enumerable: !0, get: C });
  };
  w.r = function (n) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(n, "__esModule", { value: !0 });
  };
  w.t = function (n, E) {
    if ((1 & E && (n = w(n)), 8 & E) || (4 & E && "object" == typeof n && n && n.__esModule)) return n;
    var C = Object.create(null);
    if ((w.r(C), Object.defineProperty(C, "default", { enumerable: !0, value: n }), 2 & E && "string" != typeof n))
      for (var B in n)
        w.d(
          C,
          B,
          function (d) {
            return n[d];
          }.bind(null, B)
        );
    return C;
  };
  w.n = function (n) {
    var E =
      n && n.__esModule
        ? function () {
            return n.default;
          }
        : function () {
            return n;
          };
    return w.d(E, "a", E), E;
  };
  w.o = function (n, E) {
    return Object.prototype.hasOwnProperty.call(n, E);
  };
  w.p = "";
  w((w.s = "./source/Worker/VTWorker.js"));
})({
  "./node_modules/base64-js/index.js": function (O, w, H) {
    function n(d) {
      var e = d.length;
      if (0 < e % 4) throw Error("Invalid string. Length must be a multiple of 4");
      d = d.indexOf("=");
      return -1 === d && (d = e), [d, d === e ? 0 : 4 - (d % 4)];
    }
    w.byteLength = function (d) {
      d = n(d);
      var e = d[1];
      return (3 * (d[0] + e)) / 4 - e;
    };
    w.toByteArray = function (d) {
      var e = n(d);
      var a = e[0];
      e = e[1];
      var b = new B((3 * (a + e)) / 4 - e),
        g = 0,
        q = 0 < e ? a - 4 : a;
      for (a = 0; a < q; a += 4) {
        var D = (C[d.charCodeAt(a)] << 18) | (C[d.charCodeAt(a + 1)] << 12) | (C[d.charCodeAt(a + 2)] << 6) | C[d.charCodeAt(a + 3)];
        b[g++] = (D >> 16) & 255;
        b[g++] = (D >> 8) & 255;
        b[g++] = 255 & D;
      }
      2 === e && ((D = (C[d.charCodeAt(a)] << 2) | (C[d.charCodeAt(a + 1)] >> 4)), (b[g++] = 255 & D));
      1 === e &&
        ((D = (C[d.charCodeAt(a)] << 10) | (C[d.charCodeAt(a + 1)] << 4) | (C[d.charCodeAt(a + 2)] >> 2)),
        (b[g++] = (D >> 8) & 255),
        (b[g++] = 255 & D));
      return b;
    };
    w.fromByteArray = function (d) {
      for (var e, a = d.length, b = a % 3, g = [], q = 0, D = a - b; q < D; q += 16383) {
        var t = g,
          A = t.push;
        var v = void 0;
        for (var L, K = d, J = q + 16383 > D ? D : q + 16383, l = [], z = q; z < J; z += 3)
          (L = ((K[z] << 16) & 16711680) + ((K[z + 1] << 8) & 65280) + (255 & K[z + 2])),
            l.push(E[((v = L) >> 18) & 63] + E[(v >> 12) & 63] + E[(v >> 6) & 63] + E[63 & v]);
        v = l.join("");
        A.call(t, v);
      }
      1 === b
        ? ((e = d[a - 1]), g.push(E[e >> 2] + E[(e << 4) & 63] + "=="))
        : 2 === b && ((e = (d[a - 2] << 8) + d[a - 1]), g.push(E[e >> 10] + E[(e >> 4) & 63] + E[(e << 2) & 63] + "="));
      return g.join("");
    };
    var E = [],
      C = [],
      B = "undefined" != typeof Uint8Array ? Uint8Array : Array;
    for (O = 0; 64 > O; ++O)
      (E[O] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[O]),
        (C["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(O)] = O);
    C[45] = 62;
    C[95] = 63;
  },
  "./node_modules/buffer/index.js": function (O, w, H) {
    (function (n) {
      function E(m, u) {
        if ((C.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823) < u) throw new RangeError("Invalid typed array length");
        return (
          C.TYPED_ARRAY_SUPPORT ? ((m = new Uint8Array(u)).__proto__ = C.prototype) : (null === m && (m = new C(u)), (m.length = u)), m
        );
      }
      function C(m, u, I) {
        if (!(C.TYPED_ARRAY_SUPPORT || this instanceof C)) return new C(m, u, I);
        if ("number" == typeof m) {
          if ("string" == typeof u) throw Error("If encoding is specified then the first argument must be a string");
          return e(this, m);
        }
        return B(this, m, u, I);
      }
      function B(m, u, I, k) {
        if ("number" == typeof u) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && u instanceof ArrayBuffer
          ? (function (y, G, N, Q) {
              if ((G.byteLength, 0 > N || G.byteLength < N)) throw new RangeError("'offset' is out of bounds");
              if (G.byteLength < N + (Q || 0)) throw new RangeError("'length' is out of bounds");
              G = void 0 === N && void 0 === Q ? new Uint8Array(G) : void 0 === Q ? new Uint8Array(G, N) : new Uint8Array(G, N, Q);
              C.TYPED_ARRAY_SUPPORT ? ((y = G).__proto__ = C.prototype) : (y = a(y, G));
              return y;
            })(m, u, I, k)
          : "string" == typeof u
          ? (function (y, G, N) {
              ("string" == typeof N && "" !== N) || (N = "utf8");
              if (!C.isEncoding(N)) throw new TypeError('"encoding" must be a valid string encoding');
              var Q = 0 | g(G, N),
                T = (y = E(y, Q)).write(G, N);
              T !== Q && (y = y.slice(0, T));
              return y;
            })(m, u, I)
          : (function (y, G) {
              if (C.isBuffer(G)) {
                var N = 0 | b(G.length);
                return 0 === (y = E(y, N)).length || G.copy(y, 0, 0, N), y;
              }
              if (G) {
                if (("undefined" != typeof ArrayBuffer && G.buffer instanceof ArrayBuffer) || "length" in G)
                  return "number" != typeof G.length || (N = G.length) != N ? E(y, 0) : a(y, G);
                if ("Buffer" === G.type && M(G.data)) return a(y, G.data);
              }
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            })(m, u);
      }
      function d(m) {
        if ("number" != typeof m) throw new TypeError('"size" argument must be a number');
        if (0 > m) throw new RangeError('"size" argument must not be negative');
      }
      function e(m, u) {
        if ((d(u), (m = E(m, 0 > u ? 0 : 0 | b(u))), !C.TYPED_ARRAY_SUPPORT)) for (var I = 0; I < u; ++I) m[I] = 0;
        return m;
      }
      function a(m, u) {
        var I = 0 > u.length ? 0 : 0 | b(u.length);
        m = E(m, I);
        for (var k = 0; k < I; k += 1) m[k] = 255 & u[k];
        return m;
      }
      function b(m) {
        if (m >= (C.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823))
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              (C.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823).toString(16) +
              " bytes"
          );
        return 0 | m;
      }
      function g(m, u) {
        if (C.isBuffer(m)) return m.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(m) || m instanceof ArrayBuffer)
        )
          return m.byteLength;
        "string" != typeof m && (m = "" + m);
        var I = m.length;
        if (0 === I) return 0;
        for (var k = !1; ; )
          switch (u) {
            case "ascii":
            case "latin1":
            case "binary":
              return I;
            case "utf8":
            case "utf-8":
            case void 0:
              return c(m).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * I;
            case "hex":
              return I >>> 1;
            case "base64":
              return h(m).length;
            default:
              if (k) return c(m).length;
              u = ("" + u).toLowerCase();
              k = !0;
          }
      }
      function q(m, u, I) {
        var k = !1;
        if (
          ((void 0 === u || 0 > u) && (u = 0), u > this.length) ||
          ((void 0 === I || I > this.length) && (I = this.length), 0 >= I) ||
          (I >>>= 0) <= (u >>>= 0)
        )
          return "";
        for (m || (m = "utf8"); ; )
          switch (m) {
            case "hex":
              m = u;
              u = I;
              I = this.length;
              (!m || 0 > m) && (m = 0);
              (!u || 0 > u || u > I) && (u = I);
              k = "";
              for (I = m; I < u; ++I) (m = k), (k = this[I]), (k = 16 > k ? "0" + k.toString(16) : k.toString(16)), (k = m + k);
              return k;
            case "utf8":
            case "utf-8":
              return L(this, u, I);
            case "ascii":
              m = "";
              for (I = Math.min(this.length, I); u < I; ++u) m += String.fromCharCode(127 & this[u]);
              return m;
            case "latin1":
            case "binary":
              m = "";
              for (I = Math.min(this.length, I); u < I; ++u) m += String.fromCharCode(this[u]);
              return m;
            case "base64":
              return 0 === u && I === this.length ? r.fromByteArray(this) : r.fromByteArray(this.slice(u, I));
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              u = this.slice(u, I);
              I = "";
              for (m = 0; m < u.length; m += 2) I += String.fromCharCode(u[m] + 256 * u[m + 1]);
              return I;
            default:
              if (k) throw new TypeError("Unknown encoding: " + m);
              m = (m + "").toLowerCase();
              k = !0;
          }
      }
      function D(m, u, I) {
        var k = m[u];
        m[u] = m[I];
        m[I] = k;
      }
      function t(m, u, I, k, y) {
        if (0 === m.length) return -1;
        if (
          ("string" == typeof I ? ((k = I), (I = 0)) : 2147483647 < I ? (I = 2147483647) : -2147483648 > I && (I = -2147483648),
          (I = +I),
          isNaN(I) && (I = y ? 0 : m.length - 1),
          0 > I && (I = m.length + I),
          I >= m.length)
        ) {
          if (y) return -1;
          I = m.length - 1;
        } else if (0 > I) {
          if (!y) return -1;
          I = 0;
        }
        if (("string" == typeof u && (u = C.from(u, k)), C.isBuffer(u))) return 0 === u.length ? -1 : A(m, u, I, k, y);
        if ("number" == typeof u)
          return (
            (u &= 255),
            C.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
              ? y
                ? Uint8Array.prototype.indexOf.call(m, u, I)
                : Uint8Array.prototype.lastIndexOf.call(m, u, I)
              : A(m, [u], I, k, y)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function A(m, u, I, k, y) {
        function G(V, S) {
          return 1 === N ? V[S] : V.readUInt16BE(S * N);
        }
        var N = 1,
          Q = m.length,
          T = u.length;
        if (void 0 !== k && ("ucs2" === (k = String(k).toLowerCase()) || "ucs-2" === k || "utf16le" === k || "utf-16le" === k)) {
          if (2 > m.length || 2 > u.length) return -1;
          N = 2;
          Q /= 2;
          T /= 2;
          I /= 2;
        }
        if (y)
          for (k = -1; I < Q; I++)
            if (G(m, I) === G(u, -1 === k ? 0 : I - k)) {
              if ((-1 === k && (k = I), I - k + 1 === T)) return k * N;
            } else -1 !== k && (I -= I - k), (k = -1);
        else
          for (I + T > Q && (I = Q - T); 0 <= I; I--) {
            Q = !0;
            for (k = 0; k < T; k++)
              if (G(m, I + k) !== G(u, k)) {
                Q = !1;
                break;
              }
            if (Q) return I;
          }
        return -1;
      }
      function v(m, u, I, k) {
        for (var y = [], G = 0; G < u.length; ++G) y.push(255 & u.charCodeAt(G));
        return f(y, m, I, k);
      }
      function L(m, u, I) {
        I = Math.min(m.length, I);
        for (var k = []; u < I; ) {
          var y,
            G,
            N = m[u],
            Q = null,
            T = 239 < N ? 4 : 223 < N ? 3 : 191 < N ? 2 : 1;
          if (u + T <= I)
            switch (T) {
              case 1:
                128 > N && (Q = N);
                break;
              case 2:
                128 == (192 & (y = m[u + 1])) && 127 < (G = ((31 & N) << 6) | (63 & y)) && (Q = G);
                break;
              case 3:
                y = m[u + 1];
                var V = m[u + 2];
                128 == (192 & y) &&
                  128 == (192 & V) &&
                  2047 < (G = ((15 & N) << 12) | ((63 & y) << 6) | (63 & V)) &&
                  (55296 > G || 57343 < G) &&
                  (Q = G);
                break;
              case 4:
                y = m[u + 1];
                V = m[u + 2];
                var S = m[u + 3];
                128 == (192 & y) &&
                  128 == (192 & V) &&
                  128 == (192 & S) &&
                  65535 < (G = ((15 & N) << 18) | ((63 & y) << 12) | ((63 & V) << 6) | (63 & S)) &&
                  1114112 > G &&
                  (Q = G);
            }
          null === Q ? ((Q = 65533), (T = 1)) : 65535 < Q && ((Q -= 65536), k.push(((Q >>> 10) & 1023) | 55296), (Q = 56320 | (1023 & Q)));
          k.push(Q);
          u += T;
        }
        m = k.length;
        if (4096 >= m) k = String.fromCharCode.apply(String, k);
        else {
          I = "";
          for (y = 0; y < m; ) I += String.fromCharCode.apply(String, k.slice(y, (y += 4096)));
          k = I;
        }
        return k;
      }
      function K(m, u, I) {
        if (0 != m % 1 || 0 > m) throw new RangeError("offset is not uint");
        if (m + u > I) throw new RangeError("Trying to access beyond buffer length");
      }
      function J(m, u, I, k, y, G) {
        if (!C.isBuffer(m)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (u > y || u < G) throw new RangeError('"value" argument is out of bounds');
        if (I + k > m.length) throw new RangeError("Index out of range");
      }
      function l(m, u, I, k) {
        0 > u && (u = 65535 + u + 1);
        for (var y = 0, G = Math.min(m.length - I, 2); y < G; ++y)
          m[I + y] = (u & (255 << (8 * (k ? y : 1 - y)))) >>> (8 * (k ? y : 1 - y));
      }
      function z(m, u, I, k) {
        0 > u && (u = 4294967295 + u + 1);
        for (var y = 0, G = Math.min(m.length - I, 4); y < G; ++y) m[I + y] = (u >>> (8 * (k ? y : 3 - y))) & 255;
      }
      function p(m, u, I, k, y, G) {
        if (I + k > m.length) throw new RangeError("Index out of range");
        if (0 > I) throw new RangeError("Index out of range");
      }
      function c(m, u) {
        var I;
        u = u || 1 / 0;
        for (var k = m.length, y = null, G = [], N = 0; N < k; ++N) {
          if (55295 < (I = m.charCodeAt(N)) && 57344 > I) {
            if (!y) {
              if (56319 < I) {
                -1 < (u -= 3) && G.push(239, 191, 189);
                continue;
              }
              if (N + 1 === k) {
                -1 < (u -= 3) && G.push(239, 191, 189);
                continue;
              }
              y = I;
              continue;
            }
            if (56320 > I) {
              -1 < (u -= 3) && G.push(239, 191, 189);
              y = I;
              continue;
            }
            I = 65536 + (((y - 55296) << 10) | (I - 56320));
          } else y && -1 < (u -= 3) && G.push(239, 191, 189);
          if (((y = null), 128 > I)) {
            if (0 > --u) break;
            G.push(I);
          } else if (2048 > I) {
            if (0 > (u -= 2)) break;
            G.push((I >> 6) | 192, (63 & I) | 128);
          } else if (65536 > I) {
            if (0 > (u -= 3)) break;
            G.push((I >> 12) | 224, ((I >> 6) & 63) | 128, (63 & I) | 128);
          } else {
            if (!(1114112 > I)) throw Error("Invalid code point");
            if (0 > (u -= 4)) break;
            G.push((I >> 18) | 240, ((I >> 12) & 63) | 128, ((I >> 6) & 63) | 128, (63 & I) | 128);
          }
        }
        return G;
      }
      function h(m) {
        var u = r,
          I = u.toByteArray;
        if (2 > (m = (m.trim ? m.trim() : m.replace(/^\s+|\s+$/g, "")).replace(R, "")).length) m = "";
        else for (; 0 != m.length % 4; ) m += "=";
        return I.call(u, m);
      }
      function f(m, u, I, k) {
        for (var y = 0; y < k && !(y + I >= u.length || y >= m.length); ++y) u[y + I] = m[y];
        return y;
      }
      var r = H("./node_modules/base64-js/index.js"),
        F = H("./node_modules/ieee754/index.js"),
        M = H("./node_modules/buffer/node_modules/isarray/index.js");
      w.Buffer = C;
      w.SlowBuffer = function (m) {
        +m != m && (m = 0);
        return C.alloc(+m);
      };
      w.INSPECT_MAX_BYTES = 50;
      C.TYPED_ARRAY_SUPPORT =
        void 0 !== n.TYPED_ARRAY_SUPPORT
          ? n.TYPED_ARRAY_SUPPORT
          : (function () {
              try {
                var m = new Uint8Array(1);
                return (
                  (m.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function () {
                      return 42;
                    }
                  }),
                  42 === m.foo() && "function" == typeof m.subarray && 0 === m.subarray(1, 1).byteLength
                );
              } catch (u) {
                return !1;
              }
            })();
      w.kMaxLength = C.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      C.poolSize = 8192;
      C._augment = function (m) {
        return (m.__proto__ = C.prototype), m;
      };
      C.from = function (m, u, I) {
        return B(null, m, u, I);
      };
      C.TYPED_ARRAY_SUPPORT &&
        ((C.prototype.__proto__ = Uint8Array.prototype),
        (C.__proto__ = Uint8Array),
        "undefined" != typeof Symbol &&
          Symbol.species &&
          C[Symbol.species] === C &&
          Object.defineProperty(C, Symbol.species, { value: null, configurable: !0 }));
      C.alloc = function (m, u, I) {
        return d(m), 0 >= m ? E(null, m) : void 0 !== u ? ("string" == typeof I ? E(null, m).fill(u, I) : E(null, m).fill(u)) : E(null, m);
      };
      C.allocUnsafe = function (m) {
        return e(null, m);
      };
      C.allocUnsafeSlow = function (m) {
        return e(null, m);
      };
      C.isBuffer = function (m) {
        return !(null == m || !m._isBuffer);
      };
      C.compare = function (m, u) {
        if (!C.isBuffer(m) || !C.isBuffer(u)) throw new TypeError("Arguments must be Buffers");
        if (m === u) return 0;
        for (var I = m.length, k = u.length, y = 0, G = Math.min(I, k); y < G; ++y)
          if (m[y] !== u[y]) {
            I = m[y];
            k = u[y];
            break;
          }
        return I < k ? -1 : k < I ? 1 : 0;
      };
      C.isEncoding = function (m) {
        switch (String(m).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1;
        }
      };
      C.concat = function (m, u) {
        if (!M(m)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === m.length) return C.alloc(0);
        var I;
        if (void 0 === u) for (I = u = 0; I < m.length; ++I) u += m[I].length;
        u = C.allocUnsafe(u);
        var k = 0;
        for (I = 0; I < m.length; ++I) {
          var y = m[I];
          if (!C.isBuffer(y)) throw new TypeError('"list" argument must be an Array of Buffers');
          y.copy(u, k);
          k += y.length;
        }
        return u;
      };
      C.byteLength = g;
      C.prototype._isBuffer = !0;
      C.prototype.swap16 = function () {
        var m = this.length;
        if (0 != m % 2) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var u = 0; u < m; u += 2) D(this, u, u + 1);
        return this;
      };
      C.prototype.swap32 = function () {
        var m = this.length;
        if (0 != m % 4) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var u = 0; u < m; u += 4) D(this, u, u + 3), D(this, u + 1, u + 2);
        return this;
      };
      C.prototype.swap64 = function () {
        var m = this.length;
        if (0 != m % 8) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var u = 0; u < m; u += 8) D(this, u, u + 7), D(this, u + 1, u + 6), D(this, u + 2, u + 5), D(this, u + 3, u + 4);
        return this;
      };
      C.prototype.toString = function () {
        var m = 0 | this.length;
        return 0 === m ? "" : 0 === arguments.length ? L(this, 0, m) : q.apply(this, arguments);
      };
      C.prototype.equals = function (m) {
        if (!C.isBuffer(m)) throw new TypeError("Argument must be a Buffer");
        return this === m || 0 === C.compare(this, m);
      };
      C.prototype.inspect = function () {
        var m = "",
          u = w.INSPECT_MAX_BYTES;
        return (
          0 < this.length && ((m = this.toString("hex", 0, u).match(/.{2}/g).join(" ")), this.length > u && (m += " ... ")),
          "<Buffer " + m + ">"
        );
      };
      C.prototype.compare = function (m, u, I, k, y) {
        if (!C.isBuffer(m)) throw new TypeError("Argument must be a Buffer");
        if (
          (void 0 === u && (u = 0),
          void 0 === I && (I = m ? m.length : 0),
          void 0 === k && (k = 0),
          void 0 === y && (y = this.length),
          0 > u || I > m.length || 0 > k || y > this.length)
        )
          throw new RangeError("out of range index");
        if (k >= y && u >= I) return 0;
        if (k >= y) return -1;
        if (u >= I) return 1;
        if (this === m) return 0;
        var G = (y >>>= 0) - (k >>>= 0),
          N = (I >>>= 0) - (u >>>= 0),
          Q = Math.min(G, N);
        k = this.slice(k, y);
        m = m.slice(u, I);
        for (u = 0; u < Q; ++u)
          if (k[u] !== m[u]) {
            G = k[u];
            N = m[u];
            break;
          }
        return G < N ? -1 : N < G ? 1 : 0;
      };
      C.prototype.includes = function (m, u, I) {
        return -1 !== this.indexOf(m, u, I);
      };
      C.prototype.indexOf = function (m, u, I) {
        return t(this, m, u, I, !0);
      };
      C.prototype.lastIndexOf = function (m, u, I) {
        return t(this, m, u, I, !1);
      };
      C.prototype.write = function (m, u, I, k) {
        if (void 0 === u) (k = "utf8"), (I = this.length), (u = 0);
        else if (void 0 === I && "string" == typeof u) (k = u), (I = this.length), (u = 0);
        else {
          if (!isFinite(u)) throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          u |= 0;
          isFinite(I) ? ((I |= 0), void 0 === k && (k = "utf8")) : ((k = I), (I = void 0));
        }
        var y = this.length - u;
        if (((void 0 === I || I > y) && (I = y), (0 < m.length && (0 > I || 0 > u)) || u > this.length))
          throw new RangeError("Attempt to write outside buffer bounds");
        k || (k = "utf8");
        for (y = !1; ; )
          switch (k) {
            case "hex":
              a: {
                u = Number(u) || 0;
                k = this.length - u;
                I ? (I = Number(I)) > k && (I = k) : (I = k);
                k = m.length;
                if (0 != k % 2) throw new TypeError("Invalid hex string");
                I > k / 2 && (I = k / 2);
                for (k = 0; k < I; ++k) {
                  y = parseInt(m.substr(2 * k, 2), 16);
                  if (isNaN(y)) {
                    I = k;
                    break a;
                  }
                  this[u + k] = y;
                }
                I = k;
              }
              return I;
            case "utf8":
            case "utf-8":
              return f(c(m, this.length - u), this, u, I);
            case "ascii":
              return v(this, m, u, I);
            case "latin1":
            case "binary":
              return v(this, m, u, I);
            case "base64":
              return f(h(m), this, u, I);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              k = I;
              y = this.length - u;
              for (var G = [], N = 0; N < m.length && !(0 > (y -= 2)); ++N) {
                var Q = m.charCodeAt(N);
                I = Q >> 8;
                Q %= 256;
                G.push(Q);
                G.push(I);
              }
              return f(G, this, u, k);
            default:
              if (y) throw new TypeError("Unknown encoding: " + k);
              k = ("" + k).toLowerCase();
              y = !0;
          }
      };
      C.prototype.toJSON = function () {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      C.prototype.slice = function (m, u) {
        var I = this.length;
        if (
          (0 > (m = ~~m) ? 0 > (m += I) && (m = 0) : m > I && (m = I),
          0 > (u = void 0 === u ? I : ~~u) ? 0 > (u += I) && (u = 0) : u > I && (u = I),
          u < m && (u = m),
          C.TYPED_ARRAY_SUPPORT)
        )
          (u = this.subarray(m, u)).__proto__ = C.prototype;
        else {
          I = u - m;
          u = new C(I, void 0);
          for (var k = 0; k < I; ++k) u[k] = this[k + m];
        }
        return u;
      };
      C.prototype.readUIntLE = function (m, u, I) {
        m |= 0;
        u |= 0;
        I || K(m, u, this.length);
        I = this[m];
        for (var k = 1, y = 0; ++y < u && (k *= 256); ) I += this[m + y] * k;
        return I;
      };
      C.prototype.readUIntBE = function (m, u, I) {
        m |= 0;
        u |= 0;
        I || K(m, u, this.length);
        I = this[m + --u];
        for (var k = 1; 0 < u && (k *= 256); ) I += this[m + --u] * k;
        return I;
      };
      C.prototype.readUInt8 = function (m, u) {
        return u || K(m, 1, this.length), this[m];
      };
      C.prototype.readUInt16LE = function (m, u) {
        return u || K(m, 2, this.length), this[m] | (this[m + 1] << 8);
      };
      C.prototype.readUInt16BE = function (m, u) {
        return u || K(m, 2, this.length), (this[m] << 8) | this[m + 1];
      };
      C.prototype.readUInt32LE = function (m, u) {
        return u || K(m, 4, this.length), (this[m] | (this[m + 1] << 8) | (this[m + 2] << 16)) + 16777216 * this[m + 3];
      };
      C.prototype.readUInt32BE = function (m, u) {
        return u || K(m, 4, this.length), 16777216 * this[m] + ((this[m + 1] << 16) | (this[m + 2] << 8) | this[m + 3]);
      };
      C.prototype.readIntLE = function (m, u, I) {
        m |= 0;
        u |= 0;
        I || K(m, u, this.length);
        I = this[m];
        for (var k = 1, y = 0; ++y < u && (k *= 256); ) I += this[m + y] * k;
        return I >= 128 * k && (I -= Math.pow(2, 8 * u)), I;
      };
      C.prototype.readIntBE = function (m, u, I) {
        m |= 0;
        u |= 0;
        I || K(m, u, this.length);
        I = u;
        for (var k = 1, y = this[m + --I]; 0 < I && (k *= 256); ) y += this[m + --I] * k;
        return y >= 128 * k && (y -= Math.pow(2, 8 * u)), y;
      };
      C.prototype.readInt8 = function (m, u) {
        return u || K(m, 1, this.length), 128 & this[m] ? -1 * (255 - this[m] + 1) : this[m];
      };
      C.prototype.readInt16LE = function (m, u) {
        u || K(m, 2, this.length);
        m = this[m] | (this[m + 1] << 8);
        return 32768 & m ? 4294901760 | m : m;
      };
      C.prototype.readInt16BE = function (m, u) {
        u || K(m, 2, this.length);
        m = this[m + 1] | (this[m] << 8);
        return 32768 & m ? 4294901760 | m : m;
      };
      C.prototype.readInt32LE = function (m, u) {
        return u || K(m, 4, this.length), this[m] | (this[m + 1] << 8) | (this[m + 2] << 16) | (this[m + 3] << 24);
      };
      C.prototype.readInt32BE = function (m, u) {
        return u || K(m, 4, this.length), (this[m] << 24) | (this[m + 1] << 16) | (this[m + 2] << 8) | this[m + 3];
      };
      C.prototype.readFloatLE = function (m, u) {
        return u || K(m, 4, this.length), F.read(this, m, !0, 23, 4);
      };
      C.prototype.readFloatBE = function (m, u) {
        return u || K(m, 4, this.length), F.read(this, m, !1, 23, 4);
      };
      C.prototype.readDoubleLE = function (m, u) {
        return u || K(m, 8, this.length), F.read(this, m, !0, 52, 8);
      };
      C.prototype.readDoubleBE = function (m, u) {
        return u || K(m, 8, this.length), F.read(this, m, !1, 52, 8);
      };
      C.prototype.writeUIntLE = function (m, u, I, k) {
        ((m = +m), (u |= 0), (I |= 0), k) || J(this, m, u, I, Math.pow(2, 8 * I) - 1, 0);
        k = 1;
        var y = 0;
        for (this[u] = 255 & m; ++y < I && (k *= 256); ) this[u + y] = (m / k) & 255;
        return u + I;
      };
      C.prototype.writeUIntBE = function (m, u, I, k) {
        ((m = +m), (u |= 0), (I |= 0), k) || J(this, m, u, I, Math.pow(2, 8 * I) - 1, 0);
        k = I - 1;
        var y = 1;
        for (this[u + k] = 255 & m; 0 <= --k && (y *= 256); ) this[u + k] = (m / y) & 255;
        return u + I;
      };
      C.prototype.writeUInt8 = function (m, u, I) {
        return (m = +m), (u |= 0), I || J(this, m, u, 1, 255, 0), C.TYPED_ARRAY_SUPPORT || (m = Math.floor(m)), (this[u] = 255 & m), u + 1;
      };
      C.prototype.writeUInt16LE = function (m, u, I) {
        return (
          (m = +m),
          (u |= 0),
          I || J(this, m, u, 2, 65535, 0),
          C.TYPED_ARRAY_SUPPORT ? ((this[u] = 255 & m), (this[u + 1] = m >>> 8)) : l(this, m, u, !0),
          u + 2
        );
      };
      C.prototype.writeUInt16BE = function (m, u, I) {
        return (
          (m = +m),
          (u |= 0),
          I || J(this, m, u, 2, 65535, 0),
          C.TYPED_ARRAY_SUPPORT ? ((this[u] = m >>> 8), (this[u + 1] = 255 & m)) : l(this, m, u, !1),
          u + 2
        );
      };
      C.prototype.writeUInt32LE = function (m, u, I) {
        return (
          (m = +m),
          (u |= 0),
          I || J(this, m, u, 4, 4294967295, 0),
          C.TYPED_ARRAY_SUPPORT
            ? ((this[u + 3] = m >>> 24), (this[u + 2] = m >>> 16), (this[u + 1] = m >>> 8), (this[u] = 255 & m))
            : z(this, m, u, !0),
          u + 4
        );
      };
      C.prototype.writeUInt32BE = function (m, u, I) {
        return (
          (m = +m),
          (u |= 0),
          I || J(this, m, u, 4, 4294967295, 0),
          C.TYPED_ARRAY_SUPPORT
            ? ((this[u] = m >>> 24), (this[u + 1] = m >>> 16), (this[u + 2] = m >>> 8), (this[u + 3] = 255 & m))
            : z(this, m, u, !1),
          u + 4
        );
      };
      C.prototype.writeIntLE = function (m, u, I, k) {
        ((m = +m), (u |= 0), k) || ((k = Math.pow(2, 8 * I - 1)), J(this, m, u, I, k - 1, -k));
        k = 0;
        var y = 1,
          G = 0;
        for (this[u] = 255 & m; ++k < I && (y *= 256); )
          0 > m && 0 === G && 0 !== this[u + k - 1] && (G = 1), (this[u + k] = (((m / y) >> 0) - G) & 255);
        return u + I;
      };
      C.prototype.writeIntBE = function (m, u, I, k) {
        ((m = +m), (u |= 0), k) || ((k = Math.pow(2, 8 * I - 1)), J(this, m, u, I, k - 1, -k));
        k = I - 1;
        var y = 1,
          G = 0;
        for (this[u + k] = 255 & m; 0 <= --k && (y *= 256); )
          0 > m && 0 === G && 0 !== this[u + k + 1] && (G = 1), (this[u + k] = (((m / y) >> 0) - G) & 255);
        return u + I;
      };
      C.prototype.writeInt8 = function (m, u, I) {
        return (
          (m = +m),
          (u |= 0),
          I || J(this, m, u, 1, 127, -128),
          C.TYPED_ARRAY_SUPPORT || (m = Math.floor(m)),
          0 > m && (m = 255 + m + 1),
          (this[u] = 255 & m),
          u + 1
        );
      };
      C.prototype.writeInt16LE = function (m, u, I) {
        return (
          (m = +m),
          (u |= 0),
          I || J(this, m, u, 2, 32767, -32768),
          C.TYPED_ARRAY_SUPPORT ? ((this[u] = 255 & m), (this[u + 1] = m >>> 8)) : l(this, m, u, !0),
          u + 2
        );
      };
      C.prototype.writeInt16BE = function (m, u, I) {
        return (
          (m = +m),
          (u |= 0),
          I || J(this, m, u, 2, 32767, -32768),
          C.TYPED_ARRAY_SUPPORT ? ((this[u] = m >>> 8), (this[u + 1] = 255 & m)) : l(this, m, u, !1),
          u + 2
        );
      };
      C.prototype.writeInt32LE = function (m, u, I) {
        return (
          (m = +m),
          (u |= 0),
          I || J(this, m, u, 4, 2147483647, -2147483648),
          C.TYPED_ARRAY_SUPPORT
            ? ((this[u] = 255 & m), (this[u + 1] = m >>> 8), (this[u + 2] = m >>> 16), (this[u + 3] = m >>> 24))
            : z(this, m, u, !0),
          u + 4
        );
      };
      C.prototype.writeInt32BE = function (m, u, I) {
        return (
          (m = +m),
          (u |= 0),
          I || J(this, m, u, 4, 2147483647, -2147483648),
          0 > m && (m = 4294967295 + m + 1),
          C.TYPED_ARRAY_SUPPORT
            ? ((this[u] = m >>> 24), (this[u + 1] = m >>> 16), (this[u + 2] = m >>> 8), (this[u + 3] = 255 & m))
            : z(this, m, u, !1),
          u + 4
        );
      };
      C.prototype.writeFloatLE = function (m, u, I) {
        return I || p(this, 0, u, 4), F.write(this, m, u, !0, 23, 4), u + 4;
      };
      C.prototype.writeFloatBE = function (m, u, I) {
        return I || p(this, 0, u, 4), F.write(this, m, u, !1, 23, 4), u + 4;
      };
      C.prototype.writeDoubleLE = function (m, u, I) {
        return I || p(this, 0, u, 8), F.write(this, m, u, !0, 52, 8), u + 8;
      };
      C.prototype.writeDoubleBE = function (m, u, I) {
        return I || p(this, 0, u, 8), F.write(this, m, u, !1, 52, 8), u + 8;
      };
      C.prototype.copy = function (m, u, I, k) {
        if (
          (I || (I = 0),
          k || 0 === k || (k = this.length),
          u >= m.length && (u = m.length),
          u || (u = 0),
          0 < k && k < I && (k = I),
          k === I) ||
          0 === m.length ||
          0 === this.length
        )
          return 0;
        if (0 > u) throw new RangeError("targetStart out of bounds");
        if (0 > I || I >= this.length) throw new RangeError("sourceStart out of bounds");
        if (0 > k) throw new RangeError("sourceEnd out of bounds");
        k > this.length && (k = this.length);
        m.length - u < k - I && (k = m.length - u + I);
        var y = k - I;
        if (this === m && I < u && u < k) for (k = y - 1; 0 <= k; --k) m[k + u] = this[k + I];
        else if (1e3 > y || !C.TYPED_ARRAY_SUPPORT) for (k = 0; k < y; ++k) m[k + u] = this[k + I];
        else Uint8Array.prototype.set.call(m, this.subarray(I, I + y), u);
        return y;
      };
      C.prototype.fill = function (m, u, I, k) {
        if ("string" == typeof m) {
          if (
            ("string" == typeof u ? ((k = u), (u = 0), (I = this.length)) : "string" == typeof I && ((k = I), (I = this.length)),
            1 === m.length)
          ) {
            var y = m.charCodeAt(0);
            256 > y && (m = y);
          }
          if (void 0 !== k && "string" != typeof k) throw new TypeError("encoding must be a string");
          if ("string" == typeof k && !C.isEncoding(k)) throw new TypeError("Unknown encoding: " + k);
        } else "number" == typeof m && (m &= 255);
        if (0 > u || this.length < u || this.length < I) throw new RangeError("Out of range index");
        if (I <= u) return this;
        if (((u >>>= 0), (I = void 0 === I ? this.length : I >>> 0), m || (m = 0), "number" == typeof m))
          for (k = u; k < I; ++k) this[k] = m;
        else for (m = C.isBuffer(m) ? m : c(new C(m, k).toString()), y = m.length, k = 0; k < I - u; ++k) this[k + u] = m[k % y];
        return this;
      };
      var R = /[^+\/0-9A-Za-z-_]/g;
    }).call(this, H("./node_modules/webpack/buildin/global.js"));
  },
  "./node_modules/buffer/node_modules/isarray/index.js": function (O, w) {
    var H = {}.toString;
    O.exports =
      Array.isArray ||
      function (n) {
        return "[object Array]" == H.call(n);
      };
  },
  "./node_modules/ieee754/index.js": function (O, w) {
    w.read = function (H, n, E, C, B) {
      var d = 8 * B - C - 1;
      var e = (1 << d) - 1,
        a = e >> 1,
        b = -7;
      B = E ? B - 1 : 0;
      var g = E ? -1 : 1,
        q = H[n + B];
      B += g;
      E = q & ((1 << -b) - 1);
      q >>= -b;
      for (b += d; 0 < b; E = 256 * E + H[n + B], B += g, b -= 8);
      d = E & ((1 << -b) - 1);
      E >>= -b;
      for (b += C; 0 < b; d = 256 * d + H[n + B], B += g, b -= 8);
      if (0 === E) E = 1 - a;
      else {
        if (E === e) return d ? NaN : (1 / 0) * (q ? -1 : 1);
        d += Math.pow(2, C);
        E -= a;
      }
      return (q ? -1 : 1) * d * Math.pow(2, E - C);
    };
    w.write = function (H, n, E, C, B, d) {
      var e,
        a,
        b,
        g = 8 * d - B - 1,
        q = (1 << g) - 1,
        D = q >> 1,
        t = 23 === B ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      d = C ? 0 : d - 1;
      C = C ? 1 : -1;
      var A = 0 > n || (0 === n && 0 > 1 / n) ? 1 : 0;
      n = Math.abs(n);
      for (
        isNaN(n) || n === 1 / 0
          ? ((a = isNaN(n) ? 1 : 0), (e = q))
          : ((e = Math.floor(Math.log(n) / Math.LN2)),
            1 > n * (b = Math.pow(2, -e)) && (e--, (b *= 2)),
            2 <= (n += 1 <= e + D ? t / b : t * Math.pow(2, 1 - D)) * b && (e++, (b /= 2)),
            e + D >= q
              ? ((a = 0), (e = q))
              : 1 <= e + D
              ? ((a = (n * b - 1) * Math.pow(2, B)), (e += D))
              : ((a = n * Math.pow(2, D - 1) * Math.pow(2, B)), (e = 0)));
        8 <= B;
        H[E + d] = 255 & a, d += C, a /= 256, B -= 8
      );
      e = (e << B) | a;
      for (g += B; 0 < g; H[E + d] = 255 & e, d += C, e /= 256, g -= 8);
      H[E + d - C] |= 128 * A;
    };
  },
  "./node_modules/node-forge/lib/aes.js": function (O, w, H) {
    function n(A, v) {
      e.cipher.registerAlgorithm(A, function () {
        return new e.aes.Algorithm(A, v);
      });
    }
    function E() {
      t = !0;
      g = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      for (var A = Array(256), v = 0; 128 > v; ++v) (A[v] = v << 1), (A[v + 128] = ((v + 128) << 1) ^ 283);
      a = Array(256);
      b = Array(256);
      q = Array(4);
      D = Array(4);
      for (v = 0; 4 > v; ++v) (q[v] = Array(256)), (D[v] = Array(256));
      var L,
        K,
        J,
        l,
        z = 0,
        p = 0;
      for (v = 0; 256 > v; ++v) {
        var c = ((c = p ^ (p << 1) ^ (p << 2) ^ (p << 3) ^ (p << 4)) >> 8) ^ (255 & c) ^ 99;
        a[z] = c;
        b[c] = z;
        var h = ((l = A[c]) << 24) ^ (c << 16) ^ (c << 8) ^ c ^ l;
        var f = (((L = A[z]) ^ (K = A[L]) ^ (J = A[K])) << 24) ^ ((z ^ J) << 16) ^ ((z ^ K ^ J) << 8) ^ z ^ L ^ J;
        for (var r = 0; 4 > r; ++r) (q[r][z] = h), (D[r][c] = f), (h = (h << 24) | (h >>> 8)), (f = (f << 24) | (f >>> 8));
        0 === z ? (z = p = 1) : ((z = L ^ A[A[A[L ^ J]]]), (p ^= A[A[p]]));
      }
    }
    function C(A, v) {
      A = A.slice(0);
      for (var L = 1, K = A.length, J = 4 * (K + 6 + 1), l = K; l < J; ++l) {
        var z = A[l - 1];
        0 == l % K
          ? ((z = (a[(z >>> 16) & 255] << 24) ^ (a[(z >>> 8) & 255] << 16) ^ (a[255 & z] << 8) ^ a[z >>> 24] ^ (g[L] << 24)), L++)
          : 6 < K && 4 == l % K && (z = (a[z >>> 24] << 24) ^ (a[(z >>> 16) & 255] << 16) ^ (a[(z >>> 8) & 255] << 8) ^ a[255 & z]);
        A[l] = A[l - K] ^ z;
      }
      if (v) {
        z = D[0];
        L = D[1];
        K = D[2];
        for (var p = D[3], c = A.slice(0), h = ((l = 0), (J = A.length) - 4); l < J; l += 4, h -= 4)
          if (0 === l || l === J - 4) (c[l] = A[h]), (c[l + 1] = A[h + 3]), (c[l + 2] = A[h + 2]), (c[l + 3] = A[h + 1]);
          else
            for (var f = 0; 4 > f; ++f)
              (v = A[h + f]), (c[l + (3 & -f)] = z[a[v >>> 24]] ^ L[a[(v >>> 16) & 255]] ^ K[a[(v >>> 8) & 255]] ^ p[a[255 & v]]);
        A = c;
      }
      return A;
    }
    function B(A, v, L, K) {
      var J,
        l,
        z,
        p,
        c,
        h = A.length / 4 - 1;
      K ? ((J = D[0]), (l = D[1]), (z = D[2]), (p = D[3]), (c = b)) : ((J = q[0]), (l = q[1]), (z = q[2]), (p = q[3]), (c = a));
      var f = v[0] ^ A[0];
      var r = v[K ? 3 : 1] ^ A[1];
      var F = v[2] ^ A[2];
      v = v[K ? 1 : 3] ^ A[3];
      for (var M = 3, R = 1; R < h; ++R) {
        var m = J[f >>> 24] ^ l[(r >>> 16) & 255] ^ z[(F >>> 8) & 255] ^ p[255 & v] ^ A[++M];
        var u = J[r >>> 24] ^ l[(F >>> 16) & 255] ^ z[(v >>> 8) & 255] ^ p[255 & f] ^ A[++M];
        var I = J[F >>> 24] ^ l[(v >>> 16) & 255] ^ z[(f >>> 8) & 255] ^ p[255 & r] ^ A[++M];
        v = J[v >>> 24] ^ l[(f >>> 16) & 255] ^ z[(r >>> 8) & 255] ^ p[255 & F] ^ A[++M];
        f = m;
        r = u;
        F = I;
      }
      L[0] = (c[f >>> 24] << 24) ^ (c[(r >>> 16) & 255] << 16) ^ (c[(F >>> 8) & 255] << 8) ^ c[255 & v] ^ A[++M];
      L[K ? 3 : 1] = (c[r >>> 24] << 24) ^ (c[(F >>> 16) & 255] << 16) ^ (c[(v >>> 8) & 255] << 8) ^ c[255 & f] ^ A[++M];
      L[2] = (c[F >>> 24] << 24) ^ (c[(v >>> 16) & 255] << 16) ^ (c[(f >>> 8) & 255] << 8) ^ c[255 & r] ^ A[++M];
      L[K ? 1 : 3] = (c[v >>> 24] << 24) ^ (c[(f >>> 16) & 255] << 16) ^ (c[(r >>> 8) & 255] << 8) ^ c[255 & F] ^ A[++M];
    }
    function d(A) {
      var v,
        L = "AES-" + ((A = A || {}).mode || "CBC").toUpperCase(),
        K = (v = A.decrypt ? e.cipher.createDecipher(L, A.key) : e.cipher.createCipher(L, A.key)).start;
      return (
        (v.start = function (J, l) {
          var z = null;
          l instanceof e.util.ByteBuffer && ((z = l), (l = {}));
          (l = l || {}).output = z;
          l.iv = J;
          K.call(v, l);
        }),
        v
      );
    }
    var e = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/cipher.js");
    H("./node_modules/node-forge/lib/cipherModes.js");
    H("./node_modules/node-forge/lib/util.js");
    O.exports = e.aes = e.aes || {};
    e.aes.startEncrypting = function (A, v, L, K) {
      A = d({ key: A, output: L, decrypt: !1, mode: K });
      return A.start(v), A;
    };
    e.aes.createEncryptionCipher = function (A, v) {
      return d({ key: A, output: null, decrypt: !1, mode: v });
    };
    e.aes.startDecrypting = function (A, v, L, K) {
      A = d({ key: A, output: L, decrypt: !0, mode: K });
      return A.start(v), A;
    };
    e.aes.createDecryptionCipher = function (A, v) {
      return d({ key: A, output: null, decrypt: !0, mode: v });
    };
    e.aes.Algorithm = function (A, v) {
      t || E();
      var L = this;
      L.name = A;
      L.mode = new v({
        blockSize: 16,
        cipher: {
          encrypt: function (K, J) {
            return B(L._w, K, J, !1);
          },
          decrypt: function (K, J) {
            return B(L._w, K, J, !0);
          }
        }
      });
      L._init = !1;
    };
    e.aes.Algorithm.prototype.initialize = function (A) {
      if (!this._init) {
        var v = A.key;
        if ("string" != typeof v || (16 !== v.length && 24 !== v.length && 32 !== v.length)) {
          if (e.util.isArray(v) && (16 === v.length || 24 === v.length || 32 === v.length)) {
            var L = v;
            v = e.util.createBuffer();
            for (var K = 0; K < L.length; ++K) v.putByte(L[K]);
          }
        } else v = e.util.createBuffer(v);
        if (!e.util.isArray(v)) {
          L = v;
          v = [];
          var J = L.length();
          if (16 === J || 24 === J || 32 === J) for (J >>>= 2, K = 0; K < J; ++K) v.push(L.getInt32());
        }
        if (!e.util.isArray(v) || (4 !== v.length && 6 !== v.length && 8 !== v.length)) throw Error("Invalid key parameter.");
        L = -1 !== ["CFB", "OFB", "CTR", "GCM"].indexOf(this.mode.name);
        this._w = C(v, A.decrypt && !L);
        this._init = !0;
      }
    };
    e.aes._expandKey = function (A, v) {
      return t || E(), C(A, v);
    };
    e.aes._updateBlock = B;
    n("AES-ECB", e.cipher.modes.ecb);
    n("AES-CBC", e.cipher.modes.cbc);
    n("AES-CFB", e.cipher.modes.cfb);
    n("AES-OFB", e.cipher.modes.ofb);
    n("AES-CTR", e.cipher.modes.ctr);
    n("AES-GCM", e.cipher.modes.gcm);
    var a,
      b,
      g,
      q,
      D,
      t = !1;
  },
  "./node_modules/node-forge/lib/aesCipherSuites.js": function (O, w, H) {
    function n(b, g, q) {
      g = g.entity === e.tls.ConnectionEnd.client;
      b.read.cipherState = {
        init: !1,
        cipher: e.cipher.createDecipher("AES-CBC", g ? q.keys.server_write_key : q.keys.client_write_key),
        iv: g ? q.keys.server_write_IV : q.keys.client_write_IV
      };
      b.write.cipherState = {
        init: !1,
        cipher: e.cipher.createCipher("AES-CBC", g ? q.keys.client_write_key : q.keys.server_write_key),
        iv: g ? q.keys.client_write_IV : q.keys.server_write_IV
      };
      b.read.cipherFunction = d;
      b.write.cipherFunction = E;
      b.read.macLength = b.write.macLength = q.mac_length;
      b.read.macFunction = b.write.macFunction = a.hmac_sha1;
    }
    function E(b, g) {
      var q = !1;
      var D = g.macFunction(g.macKey, g.sequenceNumber, b);
      b.fragment.putBytes(D);
      g.updateSequenceNumber();
      D = b.version.minor === a.Versions.TLS_1_0.minor ? (g.cipherState.init ? null : g.cipherState.iv) : e.random.getBytesSync(16);
      g.cipherState.init = !0;
      g = g.cipherState.cipher;
      return (
        g.start({ iv: D }),
        b.version.minor >= a.Versions.TLS_1_1.minor && g.output.putBytes(D),
        g.update(b.fragment),
        g.finish(C) && ((b.fragment = g.output), (b.length = b.fragment.length()), (q = !0)),
        q
      );
    }
    function C(b, g, q) {
      q || ((b -= g.length() % b), g.fillWithByte(b - 1, b));
      return !0;
    }
    function B(b, g, q) {
      b = !0;
      if (q) {
        q = g.length();
        for (var D = g.last(), t = q - 1 - D; t < q - 1; ++t) b = b && g.at(t) == D;
        b && g.truncate(D + 1);
      }
      return b;
    }
    function d(b, g) {
      var q = b.version.minor === a.Versions.TLS_1_0.minor ? (g.cipherState.init ? null : g.cipherState.iv) : b.fragment.getBytes(16);
      g.cipherState.init = !0;
      var D = g.cipherState.cipher;
      D.start({ iv: q });
      D.update(b.fragment);
      q = D.finish(B);
      var t = g.macLength,
        A = e.random.getBytesSync(t),
        v = D.output.length();
      v >= t ? ((b.fragment = D.output.getBytes(v - t)), (A = D.output.getBytes(t))) : (b.fragment = D.output.getBytes());
      b.fragment = e.util.createBuffer(b.fragment);
      b.length = b.fragment.length();
      b = g.macFunction(g.macKey, g.sequenceNumber, b);
      g.updateSequenceNumber();
      g = g.macKey;
      D = e.hmac.create();
      return (
        (D.start("SHA1", g),
        D.update(A),
        (A = D.digest().getBytes()),
        D.start(null, null),
        D.update(b),
        (b = D.digest().getBytes()),
        A === b) && q
      );
    }
    var e = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/aes.js");
    H("./node_modules/node-forge/lib/tls.js");
    var a = (O.exports = e.tls);
    a.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA = {
      id: [0, 47],
      name: "TLS_RSA_WITH_AES_128_CBC_SHA",
      initSecurityParameters: function (b) {
        b.bulk_cipher_algorithm = a.BulkCipherAlgorithm.aes;
        b.cipher_type = a.CipherType.block;
        b.enc_key_length = 16;
        b.block_length = 16;
        b.fixed_iv_length = 16;
        b.record_iv_length = 16;
        b.mac_algorithm = a.MACAlgorithm.hmac_sha1;
        b.mac_length = 20;
        b.mac_key_length = 20;
      },
      initConnectionState: n
    };
    a.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA = {
      id: [0, 53],
      name: "TLS_RSA_WITH_AES_256_CBC_SHA",
      initSecurityParameters: function (b) {
        b.bulk_cipher_algorithm = a.BulkCipherAlgorithm.aes;
        b.cipher_type = a.CipherType.block;
        b.enc_key_length = 32;
        b.block_length = 16;
        b.fixed_iv_length = 16;
        b.record_iv_length = 16;
        b.mac_algorithm = a.MACAlgorithm.hmac_sha1;
        b.mac_length = 20;
        b.mac_key_length = 20;
      },
      initConnectionState: n
    };
  },
  "./node_modules/node-forge/lib/asn1-validator.js": function (O, w, H) {
    O = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/asn1.js");
    H = O.asn1;
    w.privateKeyValidator = {
      name: "PrivateKeyInfo",
      tagClass: H.Class.UNIVERSAL,
      type: H.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "PrivateKeyInfo.version",
          tagClass: H.Class.UNIVERSAL,
          type: H.Type.INTEGER,
          constructed: !1,
          capture: "privateKeyVersion"
        },
        {
          name: "PrivateKeyInfo.privateKeyAlgorithm",
          tagClass: H.Class.UNIVERSAL,
          type: H.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "AlgorithmIdentifier.algorithm",
              tagClass: H.Class.UNIVERSAL,
              type: H.Type.OID,
              constructed: !1,
              capture: "privateKeyOid"
            }
          ]
        },
        { name: "PrivateKeyInfo", tagClass: H.Class.UNIVERSAL, type: H.Type.OCTETSTRING, constructed: !1, capture: "privateKey" }
      ]
    };
    w.publicKeyValidator = {
      name: "SubjectPublicKeyInfo",
      tagClass: H.Class.UNIVERSAL,
      type: H.Type.SEQUENCE,
      constructed: !0,
      captureAsn1: "subjectPublicKeyInfo",
      value: [
        {
          name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
          tagClass: H.Class.UNIVERSAL,
          type: H.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "AlgorithmIdentifier.algorithm",
              tagClass: H.Class.UNIVERSAL,
              type: H.Type.OID,
              constructed: !1,
              capture: "publicKeyOid"
            }
          ]
        },
        { tagClass: H.Class.UNIVERSAL, type: H.Type.BITSTRING, constructed: !1, composed: !0, captureBitStringValue: "ed25519PublicKey" }
      ]
    };
  },
  "./node_modules/node-forge/lib/asn1.js": function (O, w, H) {
    function n(d, e, a) {
      if (a > e) {
        var b = Error("Too few bytes to parse DER.");
        throw ((b.available = d.length()), (b.remaining = e), (b.requested = a), b);
      }
    }
    var E = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/util.js");
    H("./node_modules/node-forge/lib/oids.js");
    var C = (O.exports = E.asn1 = E.asn1 || {});
    C.Class = { UNIVERSAL: 0, APPLICATION: 64, CONTEXT_SPECIFIC: 128, PRIVATE: 192 };
    C.Type = {
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
    };
    C.create = function (d, e, a, b, g) {
      if (E.util.isArray(b)) {
        for (var q = [], D = 0; D < b.length; ++D) void 0 !== b[D] && q.push(b[D]);
        b = q;
      }
      d = { tagClass: d, type: e, constructed: a, composed: a || E.util.isArray(b), value: b };
      return g && "bitStringContents" in g && ((d.bitStringContents = g.bitStringContents), (d.original = C.copy(d))), d;
    };
    C.copy = function (d, e) {
      if (E.util.isArray(d)) {
        var a = [];
        for (var b = 0; b < d.length; ++b) a.push(C.copy(d[b], e));
        return a;
      }
      return "string" == typeof d
        ? d
        : ((a = { tagClass: d.tagClass, type: d.type, constructed: d.constructed, composed: d.composed, value: C.copy(d.value, e) }),
          e && !e.excludeBitStringContents && (a.bitStringContents = d.bitStringContents),
          a);
    };
    C.equals = function (d, e, a) {
      if (E.util.isArray(d)) {
        if (!E.util.isArray(e) || d.length !== e.length) return !1;
        for (a = 0; a < d.length; ++a) if (!C.equals(d[a], e[a])) return !1;
        return !0;
      }
      if (typeof d != typeof e) return !1;
      if ("string" == typeof d) return d === e;
      var b =
        d.tagClass === e.tagClass &&
        d.type === e.type &&
        d.constructed === e.constructed &&
        d.composed === e.composed &&
        C.equals(d.value, e.value);
      return a && a.includeBitStringContents && (b = b && d.bitStringContents === e.bitStringContents), b;
    };
    C.getBerValueLength = function (d) {
      var e = d.getByte();
      if (128 !== e) return 128 & e ? d.getInt((127 & e) << 3) : e;
    };
    C.fromDer = function (d, e) {
      void 0 === e && (e = { strict: !0, parseAllBytes: !0, decodeBitStrings: !0 });
      "boolean" == typeof e && (e = { strict: e, parseAllBytes: !0, decodeBitStrings: !0 });
      "strict" in e || (e.strict = !0);
      "parseAllBytes" in e || (e.parseAllBytes = !0);
      "decodeBitStrings" in e || (e.decodeBitStrings = !0);
      "string" == typeof d && (d = E.util.createBuffer(d));
      var a = d.length(),
        b = (function v(q, D, t, A) {
          n(q, D, 2);
          var L = q.getByte();
          D--;
          var K = 192 & L,
            J = 31 & L;
          var l = q.length();
          var z, p;
          var c = D;
          var h = q.getByte();
          if ((c--, 128 !== h)) {
            if ((128 & h ? ((h &= 127), n(q, c, h), (c = q.getInt(h << 3))) : (c = h), 0 > c)) throw Error("Negative length: " + c);
          } else c = void 0;
          if (((D -= l - q.length()), void 0 !== c && c > D)) {
            if (A.strict)
              throw (
                ((t = Error("Too few bytes to read ASN.1 value.")), (t.available = q.length()), (t.remaining = D), (t.requested = c), t)
              );
            c = D;
          }
          if ((L = 32 == (32 & L)))
            if (((z = []), void 0 === c))
              for (;;) {
                if ((n(q, D, 2), q.bytes(2) === String.fromCharCode(0, 0))) {
                  q.getBytes(2);
                  D -= 2;
                  break;
                }
                l = q.length();
                z.push(v(q, D, t + 1, A));
                D -= l - q.length();
              }
            else for (; 0 < c; ) (l = q.length()), z.push(v(q, c, t + 1, A)), (D -= l - q.length()), (c -= l - q.length());
          void 0 === z && K === C.Class.UNIVERSAL && J === C.Type.BITSTRING && (p = q.bytes(c));
          if (void 0 === z && A.decodeBitStrings && K === C.Class.UNIVERSAL && J === C.Type.BITSTRING && 1 < c) {
            h = q.read;
            var f = D,
              r = 0;
            if ((J === C.Type.BITSTRING && (n(q, D, 1), (r = q.getByte()), D--), 0 === r))
              try {
                l = q.length();
                var F = v(q, D, t + 1, { strict: !0, decodeBitStrings: !0 }),
                  M = l - q.length();
                D -= M;
                J == C.Type.BITSTRING && M++;
                var R = F.tagClass;
                M !== c || (R !== C.Class.UNIVERSAL && R !== C.Class.CONTEXT_SPECIFIC) || (z = [F]);
              } catch (m) {}
            void 0 === z && ((q.read = h), (D = f));
          }
          if (void 0 === z) {
            if (void 0 === c) {
              if (A.strict) throw Error("Non-constructed ASN.1 object of indefinite length.");
              c = D;
            }
            if (J === C.Type.BMPSTRING) for (z = ""; 0 < c; c -= 2) n(q, D, 2), (z += String.fromCharCode(q.getInt16())), (D -= 2);
            else z = q.getBytes(c);
          }
          return C.create(K, J, L, z, void 0 === p ? null : { bitStringContents: p });
        })(d, d.length(), 0, e);
      if (e.parseAllBytes && 0 !== d.length())
        throw ((e = Error("Unparsed DER bytes remain after ASN.1 parsing.")), (e.byteCount = a), (e.remaining = d.length()), e);
      return b;
    };
    C.toDer = function (d) {
      var e = E.util.createBuffer(),
        a = d.tagClass | d.type,
        b = E.util.createBuffer(),
        g = !1;
      if (("bitStringContents" in d && ((g = !0), d.original && (g = C.equals(d, d.original))), g)) b.putBytes(d.bitStringContents);
      else if (d.composed)
        for (d.constructed ? (a |= 32) : b.putByte(0), g = 0; g < d.value.length; ++g)
          void 0 !== d.value[g] && b.putBuffer(C.toDer(d.value[g]));
      else if (d.type === C.Type.BMPSTRING) for (g = 0; g < d.value.length; ++g) b.putInt16(d.value.charCodeAt(g));
      else
        d.type === C.Type.INTEGER &&
        1 < d.value.length &&
        ((0 === d.value.charCodeAt(0) && 0 == (128 & d.value.charCodeAt(1))) ||
          (255 === d.value.charCodeAt(0) && 128 == (128 & d.value.charCodeAt(1))))
          ? b.putBytes(d.value.substr(1))
          : b.putBytes(d.value);
      if ((e.putByte(a), 127 >= b.length())) e.putByte(127 & b.length());
      else {
        a = b.length();
        d = "";
        do (d += String.fromCharCode(255 & a)), (a >>>= 8);
        while (0 < a);
        e.putByte(128 | d.length);
        for (g = d.length - 1; 0 <= g; --g) e.putByte(d.charCodeAt(g));
      }
      return e.putBuffer(b), e;
    };
    C.oidToDer = function (d) {
      var e = d.split("."),
        a = E.util.createBuffer();
      a.putByte(40 * parseInt(e[0], 10) + parseInt(e[1], 10));
      for (var b = 2; b < e.length; ++b) {
        var g = !0;
        d = [];
        var q = parseInt(e[b], 10);
        do {
          var D = 127 & q;
          q >>>= 7;
          g || (D |= 128);
          d.push(D);
          g = !1;
        } while (0 < q);
        for (g = d.length - 1; 0 <= g; --g) a.putByte(d[g]);
      }
      return a;
    };
    C.derToOid = function (d) {
      "string" == typeof d && (d = E.util.createBuffer(d));
      var e = d.getByte();
      var a = Math.floor(e / 40) + "." + (e % 40);
      for (var b = 0; 0 < d.length(); ) (b <<= 7), 128 & (e = d.getByte()) ? (b += 127 & e) : ((a += "." + (b + e)), (b = 0));
      return a;
    };
    C.utcTimeToDate = function (d) {
      var e = new Date(),
        a = parseInt(d.substr(0, 2), 10);
      a = 50 <= a ? 1900 + a : 2e3 + a;
      var b = parseInt(d.substr(2, 2), 10) - 1,
        g = parseInt(d.substr(4, 2), 10),
        q = parseInt(d.substr(6, 2), 10),
        D = parseInt(d.substr(8, 2), 10),
        t = 0;
      if (11 < d.length) {
        var A = d.charAt(10),
          v = 10;
        "+" !== A && "-" !== A && ((t = parseInt(d.substr(10, 2), 10)), (v += 2));
      }
      (e.setUTCFullYear(a, b, g), e.setUTCHours(q, D, t, 0), !v || ("+" !== (A = d.charAt(v)) && "-" !== A)) ||
        ((d = 60 * parseInt(d.substr(v + 1, 2), 10) + parseInt(d.substr(v + 4, 2), 10)),
        (d *= 6e4),
        "+" === A ? e.setTime(+e - d) : e.setTime(+e + d));
      return e;
    };
    C.generalizedTimeToDate = function (d) {
      var e = new Date(),
        a = parseInt(d.substr(0, 4), 10),
        b = parseInt(d.substr(4, 2), 10) - 1,
        g = parseInt(d.substr(6, 2), 10),
        q = parseInt(d.substr(8, 2), 10),
        D = parseInt(d.substr(10, 2), 10),
        t = parseInt(d.substr(12, 2), 10),
        A = 0,
        v = 0,
        L = !1;
      "Z" === d.charAt(d.length - 1) && (L = !0);
      var K = d.length - 5,
        J = d.charAt(K);
      ("+" !== J && "-" !== J) ||
        ((v = 60 * parseInt(d.substr(K + 1, 2), 10) + parseInt(d.substr(K + 4, 2), 10)), (v *= 6e4), "+" === J && (v *= -1), (L = !0));
      return (
        "." === d.charAt(14) && (A = 1e3 * parseFloat(d.substr(14), 10)),
        L ? (e.setUTCFullYear(a, b, g), e.setUTCHours(q, D, t, A), e.setTime(+e + v)) : (e.setFullYear(a, b, g), e.setHours(q, D, t, A)),
        e
      );
    };
    C.dateToUtcTime = function (d) {
      if ("string" == typeof d) return d;
      var e = "",
        a = [];
      a.push(("" + d.getUTCFullYear()).substr(2));
      a.push("" + (d.getUTCMonth() + 1));
      a.push("" + d.getUTCDate());
      a.push("" + d.getUTCHours());
      a.push("" + d.getUTCMinutes());
      a.push("" + d.getUTCSeconds());
      for (d = 0; d < a.length; ++d) 2 > a[d].length && (e += "0"), (e += a[d]);
      return e + "Z";
    };
    C.dateToGeneralizedTime = function (d) {
      if ("string" == typeof d) return d;
      var e = "",
        a = [];
      a.push("" + d.getUTCFullYear());
      a.push("" + (d.getUTCMonth() + 1));
      a.push("" + d.getUTCDate());
      a.push("" + d.getUTCHours());
      a.push("" + d.getUTCMinutes());
      a.push("" + d.getUTCSeconds());
      for (d = 0; d < a.length; ++d) 2 > a[d].length && (e += "0"), (e += a[d]);
      return e + "Z";
    };
    C.integerToDer = function (d) {
      var e = E.util.createBuffer();
      if (-128 <= d && 128 > d) return e.putSignedInt(d, 8);
      if (-32768 <= d && 32768 > d) return e.putSignedInt(d, 16);
      if (-8388608 <= d && 8388608 > d) return e.putSignedInt(d, 24);
      if (-2147483648 <= d && 2147483648 > d) return e.putSignedInt(d, 32);
      e = Error("Integer too large; max is 32-bits.");
      throw ((e.integer = d), e);
    };
    C.derToInteger = function (d) {
      "string" == typeof d && (d = E.util.createBuffer(d));
      var e = 8 * d.length();
      if (32 < e) throw Error("Integer too large; max is 32-bits.");
      return d.getSignedInt(e);
    };
    C.validate = function (d, e, a, b) {
      var g = !1;
      if ((d.tagClass !== e.tagClass && void 0 !== e.tagClass) || (d.type !== e.type && void 0 !== e.type))
        b &&
          (d.tagClass !== e.tagClass && b.push("[" + e.name + '] Expected tag class "' + e.tagClass + '", got "' + d.tagClass + '"'),
          d.type !== e.type && b.push("[" + e.name + '] Expected type "' + e.type + '", got "' + d.type + '"'));
      else if (d.constructed === e.constructed || void 0 === e.constructed) {
        if (((g = !0), e.value && E.util.isArray(e.value)))
          for (var q = 0, D = 0; g && D < e.value.length; ++D)
            (g = e.value[D].optional || !1),
              d.value[q] && ((g = C.validate(d.value[q], e.value[D], a, b)) ? ++q : e.value[D].optional && (g = !0)),
              !g &&
                b &&
                b.push(
                  "[" +
                    e.name +
                    '] Tag class "' +
                    e.tagClass +
                    '", type "' +
                    e.type +
                    '" expected value length "' +
                    e.value.length +
                    '", got "' +
                    d.value.length +
                    '"'
                );
        if (
          g &&
          a &&
          (e.capture && (a[e.capture] = d.value),
          e.captureAsn1 && (a[e.captureAsn1] = d),
          e.captureBitStringContents && "bitStringContents" in d && (a[e.captureBitStringContents] = d.bitStringContents),
          e.captureBitStringValue && "bitStringContents" in d)
        )
          if (2 > d.bitStringContents.length) a[e.captureBitStringValue] = "";
          else {
            if (0 !== d.bitStringContents.charCodeAt(0)) throw Error("captureBitStringValue only supported for zero unused bits");
            a[e.captureBitStringValue] = d.bitStringContents.slice(1);
          }
      } else b && b.push("[" + e.name + '] Expected constructed "' + e.constructed + '", got "' + d.constructed + '"');
      return g;
    };
    var B = /[^\\u0000-\\u00ff]/;
    C.prettyPrint = function (d, e, a) {
      var b = "";
      a = a || 2;
      0 < (e = e || 0) && (b += "\n");
      for (var g = "", q = 0; q < e * a; ++q) g += " ";
      switch (((b += g + "Tag: "), d.tagClass)) {
        case C.Class.UNIVERSAL:
          b += "Universal:";
          break;
        case C.Class.APPLICATION:
          b += "Application:";
          break;
        case C.Class.CONTEXT_SPECIFIC:
          b += "Context-Specific:";
          break;
        case C.Class.PRIVATE:
          b += "Private:";
      }
      if (d.tagClass === C.Class.UNIVERSAL)
        switch (((b += d.type), d.type)) {
          case C.Type.NONE:
            b += " (None)";
            break;
          case C.Type.BOOLEAN:
            b += " (Boolean)";
            break;
          case C.Type.INTEGER:
            b += " (Integer)";
            break;
          case C.Type.BITSTRING:
            b += " (Bit string)";
            break;
          case C.Type.OCTETSTRING:
            b += " (Octet string)";
            break;
          case C.Type.NULL:
            b += " (Null)";
            break;
          case C.Type.OID:
            b += " (Object Identifier)";
            break;
          case C.Type.ODESC:
            b += " (Object Descriptor)";
            break;
          case C.Type.EXTERNAL:
            b += " (External or Instance of)";
            break;
          case C.Type.REAL:
            b += " (Real)";
            break;
          case C.Type.ENUMERATED:
            b += " (Enumerated)";
            break;
          case C.Type.EMBEDDED:
            b += " (Embedded PDV)";
            break;
          case C.Type.UTF8:
            b += " (UTF8)";
            break;
          case C.Type.ROID:
            b += " (Relative Object Identifier)";
            break;
          case C.Type.SEQUENCE:
            b += " (Sequence)";
            break;
          case C.Type.SET:
            b += " (Set)";
            break;
          case C.Type.PRINTABLESTRING:
            b += " (Printable String)";
            break;
          case C.Type.IA5String:
            b += " (IA5String (ASCII))";
            break;
          case C.Type.UTCTIME:
            b += " (UTC time)";
            break;
          case C.Type.GENERALIZEDTIME:
            b += " (Generalized time)";
            break;
          case C.Type.BMPSTRING:
            b += " (BMP String)";
        }
      else b += d.type;
      if (((b += "\n"), (b += g + "Constructed: " + d.constructed + "\n"), d.composed)) {
        var D = 0,
          t = "";
        for (q = 0; q < d.value.length; ++q)
          void 0 !== d.value[q] && ((D += 1), (t += C.prettyPrint(d.value[q], e + 1, a)), q + 1 < d.value.length && (t += ","));
        b += g + "Sub values: " + D + t;
      } else {
        if (((b += g + "Value: "), d.type === C.Type.OID))
          (e = C.derToOid(d.value)), (b += e), E.pki && E.pki.oids && e in E.pki.oids && (b += " (" + E.pki.oids[e] + ") ");
        if (d.type === C.Type.INTEGER)
          try {
            b += C.derToInteger(d.value);
          } catch (A) {
            b += "0x" + E.util.bytesToHex(d.value);
          }
        else if (d.type === C.Type.BITSTRING) {
          if ((1 < d.value.length ? (b += "0x" + E.util.bytesToHex(d.value.slice(1))) : (b += "(none)"), 0 < d.value.length))
            (d = d.value.charCodeAt(0)), 1 == d ? (b += " (1 unused bit shown)") : 1 < d && (b += " (" + d + " unused bits shown)");
        } else if (d.type === C.Type.OCTETSTRING) B.test(d.value) || (b += "(" + d.value + ") "), (b += "0x" + E.util.bytesToHex(d.value));
        else if (d.type === C.Type.UTF8)
          try {
            b += E.util.decodeUtf8(d.value);
          } catch (A) {
            if ("URI malformed" !== A.message) throw A;
            b += "0x" + E.util.bytesToHex(d.value) + " (malformed UTF8)";
          }
        else
          d.type === C.Type.PRINTABLESTRING || d.type === C.Type.IA5String
            ? (b += d.value)
            : B.test(d.value)
            ? (b += "0x" + E.util.bytesToHex(d.value))
            : 0 === d.value.length
            ? (b += "[null]")
            : (b += d.value);
      }
      return b;
    };
  },
  "./node_modules/node-forge/lib/baseN.js": function (O, w, H) {
    (function (n) {
      var E = {};
      O.exports = E;
      var C = {};
      E.encode = function (B, d, e) {
        if ("string" != typeof d) throw new TypeError('"alphabet" must be a string.');
        if (void 0 !== e && "number" != typeof e) throw new TypeError('"maxline" must be a number.');
        var a = "";
        if (B instanceof Uint8Array) {
          var b,
            g = d.length,
            q = d.charAt(0),
            D = [0];
          for (b = 0; b < B.length; ++b) {
            for (var t = 0, A = B[b]; t < D.length; ++t) (A += D[t] << 8), (D[t] = A % g), (A = (A / g) | 0);
            for (; 0 < A; ) D.push(A % g), (A = (A / g) | 0);
          }
          for (b = 0; 0 === B[b] && b < B.length - 1; ++b) a += q;
          for (b = D.length - 1; 0 <= b; --b) a += d[D[b]];
        } else {
          q = d.length;
          b = d.charAt(0);
          g = [0];
          for (a = 0; a < B.length(); ++a) {
            D = 0;
            for (t = B.at(a); D < g.length; ++D) (t += g[D] << 8), (g[D] = t % q), (t = (t / q) | 0);
            for (; 0 < t; ) g.push(t % q), (t = (t / q) | 0);
          }
          q = "";
          for (a = 0; 0 === B.at(a) && a < B.length() - 1; ++a) q += b;
          for (a = g.length - 1; 0 <= a; --a) q += d[g[a]];
          a = q;
        }
        e && (a = a.match(new RegExp(".{1," + e + "}", "g")).join("\r\n"));
        return a;
      };
      E.decode = function (B, d) {
        if ("string" != typeof B) throw new TypeError('"input" must be a string.');
        if ("string" != typeof d) throw new TypeError('"alphabet" must be a string.');
        var e = C[d];
        if (!e) {
          e = C[d] = [];
          for (var a = 0; a < d.length; ++a) e[d.charCodeAt(a)] = a;
        }
        B = B.replace(/\s/g, "");
        var b = d.length;
        d = d.charAt(0);
        var g = [0];
        for (a = 0; a < B.length; a++) {
          var q = e[B.charCodeAt(a)];
          if (void 0 === q) return;
          for (var D = 0; D < g.length; ++D) (q += g[D] * b), (g[D] = 255 & q), (q >>= 8);
          for (; 0 < q; ) g.push(255 & q), (q >>= 8);
        }
        for (e = 0; B[e] === d && e < B.length - 1; ++e) g.push(0);
        return void 0 !== n ? n.from(g.reverse()) : new Uint8Array(g.reverse());
      };
    }).call(this, H("./node_modules/buffer/index.js").Buffer);
  },
  "./node_modules/node-forge/lib/cipher.js": function (O, w, H) {
    var n = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/util.js");
    O.exports = n.cipher = n.cipher || {};
    n.cipher.algorithms = n.cipher.algorithms || {};
    n.cipher.createCipher = function (E, C) {
      var B = E;
      if (("string" == typeof B && (B = n.cipher.getAlgorithm(B)) && (B = B()), !B)) throw Error("Unsupported algorithm: " + E);
      return new n.cipher.BlockCipher({ algorithm: B, key: C, decrypt: !1 });
    };
    n.cipher.createDecipher = function (E, C) {
      var B = E;
      if (("string" == typeof B && (B = n.cipher.getAlgorithm(B)) && (B = B()), !B)) throw Error("Unsupported algorithm: " + E);
      return new n.cipher.BlockCipher({ algorithm: B, key: C, decrypt: !0 });
    };
    n.cipher.registerAlgorithm = function (E, C) {
      E = E.toUpperCase();
      n.cipher.algorithms[E] = C;
    };
    n.cipher.getAlgorithm = function (E) {
      return (E = E.toUpperCase()) in n.cipher.algorithms ? n.cipher.algorithms[E] : null;
    };
    O = n.cipher.BlockCipher = function (E) {
      this.algorithm = E.algorithm;
      this.mode = this.algorithm.mode;
      this.blockSize = this.mode.blockSize;
      this._finish = !1;
      this.output = this._input = null;
      this._op = E.decrypt ? this.mode.decrypt : this.mode.encrypt;
      this._decrypt = E.decrypt;
      this.algorithm.initialize(E);
    };
    O.prototype.start = function (E) {
      E = E || {};
      var C = {},
        B;
      for (B in E) C[B] = E[B];
      C.decrypt = this._decrypt;
      this._finish = !1;
      this._input = n.util.createBuffer();
      this.output = E.output || n.util.createBuffer();
      this.mode.start(C);
    };
    O.prototype.update = function (E) {
      for (E && this._input.putBuffer(E); !this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish; );
      this._input.compact();
    };
    O.prototype.finish = function (E) {
      !E ||
        ("ECB" !== this.mode.name && "CBC" !== this.mode.name) ||
        ((this.mode.pad = function (B) {
          return E(this.blockSize, B, !1);
        }),
        (this.mode.unpad = function (B) {
          return E(this.blockSize, B, !0);
        }));
      var C = {};
      return (
        (C.decrypt = this._decrypt),
        (C.overflow = this._input.length() % this.blockSize),
        !(!this._decrypt && this.mode.pad && !this.mode.pad(this._input, C)) &&
          ((this._finish = !0),
          this.update(),
          !(this._decrypt && this.mode.unpad && !this.mode.unpad(this.output, C)) &&
            !(this.mode.afterFinish && !this.mode.afterFinish(this.output, C)))
      );
    };
  },
  "./node_modules/node-forge/lib/cipherModes.js": function (O, w, H) {
    function n(d, e) {
      if (("string" == typeof d && (d = B.util.createBuffer(d)), B.util.isArray(d) && 4 < d.length)) {
        var a = d;
        d = B.util.createBuffer();
        for (var b = 0; b < a.length; ++b) d.putByte(a[b]);
      }
      if (d.length() < e) throw Error("Invalid IV length; got " + d.length() + " bytes and expected " + e + " bytes.");
      if (!B.util.isArray(d)) {
        a = [];
        e /= 4;
        for (b = 0; b < e; ++b) a.push(d.getInt32());
        d = a;
      }
      return d;
    }
    function E(d) {
      d[d.length - 1] = (d[d.length - 1] + 1) & 4294967295;
    }
    function C(d) {
      return [(d / 4294967296) | 0, 4294967295 & d];
    }
    var B = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/util.js");
    B.cipher = B.cipher || {};
    O = O.exports = B.cipher.modes = B.cipher.modes || {};
    O.ecb = function (d) {
      d = d || {};
      this.name = "ECB";
      this.cipher = d.cipher;
      this.blockSize = d.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = Array(this._ints);
      this._outBlock = Array(this._ints);
    };
    O.ecb.prototype.start = function (d) {};
    O.ecb.prototype.encrypt = function (d, e, a) {
      if (d.length() < this.blockSize && !(a && 0 < d.length())) return !0;
      for (a = 0; a < this._ints; ++a) this._inBlock[a] = d.getInt32();
      this.cipher.encrypt(this._inBlock, this._outBlock);
      for (a = 0; a < this._ints; ++a) e.putInt32(this._outBlock[a]);
    };
    O.ecb.prototype.decrypt = function (d, e, a) {
      if (d.length() < this.blockSize && !(a && 0 < d.length())) return !0;
      for (a = 0; a < this._ints; ++a) this._inBlock[a] = d.getInt32();
      this.cipher.decrypt(this._inBlock, this._outBlock);
      for (a = 0; a < this._ints; ++a) e.putInt32(this._outBlock[a]);
    };
    O.ecb.prototype.pad = function (d, e) {
      e = d.length() === this.blockSize ? this.blockSize : this.blockSize - d.length();
      return d.fillWithByte(e, e), !0;
    };
    O.ecb.prototype.unpad = function (d, e) {
      if (0 < e.overflow) return !1;
      e = d.length();
      e = d.at(e - 1);
      return !(e > this.blockSize << 2) && (d.truncate(e), !0);
    };
    O.cbc = function (d) {
      d = d || {};
      this.name = "CBC";
      this.cipher = d.cipher;
      this.blockSize = d.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = Array(this._ints);
      this._outBlock = Array(this._ints);
    };
    O.cbc.prototype.start = function (d) {
      if (null === d.iv) {
        if (!this._prev) throw Error("Invalid IV parameter.");
        this._iv = this._prev.slice(0);
      } else {
        if (!("iv" in d)) throw Error("Invalid IV parameter.");
        this._iv = n(d.iv, this.blockSize);
        this._prev = this._iv.slice(0);
      }
    };
    O.cbc.prototype.encrypt = function (d, e, a) {
      if (d.length() < this.blockSize && !(a && 0 < d.length())) return !0;
      for (a = 0; a < this._ints; ++a) this._inBlock[a] = this._prev[a] ^ d.getInt32();
      this.cipher.encrypt(this._inBlock, this._outBlock);
      for (a = 0; a < this._ints; ++a) e.putInt32(this._outBlock[a]);
      this._prev = this._outBlock;
    };
    O.cbc.prototype.decrypt = function (d, e, a) {
      if (d.length() < this.blockSize && !(a && 0 < d.length())) return !0;
      for (a = 0; a < this._ints; ++a) this._inBlock[a] = d.getInt32();
      this.cipher.decrypt(this._inBlock, this._outBlock);
      for (a = 0; a < this._ints; ++a) e.putInt32(this._prev[a] ^ this._outBlock[a]);
      this._prev = this._inBlock.slice(0);
    };
    O.cbc.prototype.pad = function (d, e) {
      e = d.length() === this.blockSize ? this.blockSize : this.blockSize - d.length();
      return d.fillWithByte(e, e), !0;
    };
    O.cbc.prototype.unpad = function (d, e) {
      if (0 < e.overflow) return !1;
      e = d.length();
      e = d.at(e - 1);
      return !(e > this.blockSize << 2) && (d.truncate(e), !0);
    };
    O.cfb = function (d) {
      d = d || {};
      this.name = "CFB";
      this.cipher = d.cipher;
      this.blockSize = d.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = null;
      this._outBlock = Array(this._ints);
      this._partialBlock = Array(this._ints);
      this._partialOutput = B.util.createBuffer();
      this._partialBytes = 0;
    };
    O.cfb.prototype.start = function (d) {
      if (!("iv" in d)) throw Error("Invalid IV parameter.");
      this._iv = n(d.iv, this.blockSize);
      this._inBlock = this._iv.slice(0);
      this._partialBytes = 0;
    };
    O.cfb.prototype.encrypt = function (d, e, a) {
      var b = d.length();
      if (0 === b) return !0;
      if ((this.cipher.encrypt(this._inBlock, this._outBlock), 0 === this._partialBytes && b >= this.blockSize))
        for (var g = 0; g < this._ints; ++g) (this._inBlock[g] = d.getInt32() ^ this._outBlock[g]), e.putInt32(this._inBlock[g]);
      else {
        var q = (this.blockSize - b) % this.blockSize;
        0 < q && (q = this.blockSize - q);
        this._partialOutput.clear();
        for (g = 0; g < this._ints; ++g)
          (this._partialBlock[g] = d.getInt32() ^ this._outBlock[g]), this._partialOutput.putInt32(this._partialBlock[g]);
        if (0 < q) d.read -= this.blockSize;
        else for (g = 0; g < this._ints; ++g) this._inBlock[g] = this._partialBlock[g];
        if ((0 < this._partialBytes && this._partialOutput.getBytes(this._partialBytes), 0 < q && !a))
          return e.putBytes(this._partialOutput.getBytes(q - this._partialBytes)), (this._partialBytes = q), !0;
        e.putBytes(this._partialOutput.getBytes(b - this._partialBytes));
        this._partialBytes = 0;
      }
    };
    O.cfb.prototype.decrypt = function (d, e, a) {
      var b = d.length();
      if (0 === b) return !0;
      if ((this.cipher.encrypt(this._inBlock, this._outBlock), 0 === this._partialBytes && b >= this.blockSize))
        for (var g = 0; g < this._ints; ++g) (this._inBlock[g] = d.getInt32()), e.putInt32(this._inBlock[g] ^ this._outBlock[g]);
      else {
        var q = (this.blockSize - b) % this.blockSize;
        0 < q && (q = this.blockSize - q);
        this._partialOutput.clear();
        for (g = 0; g < this._ints; ++g)
          (this._partialBlock[g] = d.getInt32()), this._partialOutput.putInt32(this._partialBlock[g] ^ this._outBlock[g]);
        if (0 < q) d.read -= this.blockSize;
        else for (g = 0; g < this._ints; ++g) this._inBlock[g] = this._partialBlock[g];
        if ((0 < this._partialBytes && this._partialOutput.getBytes(this._partialBytes), 0 < q && !a))
          return e.putBytes(this._partialOutput.getBytes(q - this._partialBytes)), (this._partialBytes = q), !0;
        e.putBytes(this._partialOutput.getBytes(b - this._partialBytes));
        this._partialBytes = 0;
      }
    };
    O.ofb = function (d) {
      d = d || {};
      this.name = "OFB";
      this.cipher = d.cipher;
      this.blockSize = d.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = null;
      this._outBlock = Array(this._ints);
      this._partialOutput = B.util.createBuffer();
      this._partialBytes = 0;
    };
    O.ofb.prototype.start = function (d) {
      if (!("iv" in d)) throw Error("Invalid IV parameter.");
      this._iv = n(d.iv, this.blockSize);
      this._inBlock = this._iv.slice(0);
      this._partialBytes = 0;
    };
    O.ofb.prototype.encrypt = function (d, e, a) {
      var b = d.length();
      if (0 === d.length()) return !0;
      if ((this.cipher.encrypt(this._inBlock, this._outBlock), 0 === this._partialBytes && b >= this.blockSize))
        for (var g = 0; g < this._ints; ++g) e.putInt32(d.getInt32() ^ this._outBlock[g]), (this._inBlock[g] = this._outBlock[g]);
      else {
        var q = (this.blockSize - b) % this.blockSize;
        0 < q && (q = this.blockSize - q);
        this._partialOutput.clear();
        for (g = 0; g < this._ints; ++g) this._partialOutput.putInt32(d.getInt32() ^ this._outBlock[g]);
        if (0 < q) d.read -= this.blockSize;
        else for (g = 0; g < this._ints; ++g) this._inBlock[g] = this._outBlock[g];
        if ((0 < this._partialBytes && this._partialOutput.getBytes(this._partialBytes), 0 < q && !a))
          return e.putBytes(this._partialOutput.getBytes(q - this._partialBytes)), (this._partialBytes = q), !0;
        e.putBytes(this._partialOutput.getBytes(b - this._partialBytes));
        this._partialBytes = 0;
      }
    };
    O.ofb.prototype.decrypt = O.ofb.prototype.encrypt;
    O.ctr = function (d) {
      d = d || {};
      this.name = "CTR";
      this.cipher = d.cipher;
      this.blockSize = d.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = null;
      this._outBlock = Array(this._ints);
      this._partialOutput = B.util.createBuffer();
      this._partialBytes = 0;
    };
    O.ctr.prototype.start = function (d) {
      if (!("iv" in d)) throw Error("Invalid IV parameter.");
      this._iv = n(d.iv, this.blockSize);
      this._inBlock = this._iv.slice(0);
      this._partialBytes = 0;
    };
    O.ctr.prototype.encrypt = function (d, e, a) {
      var b = d.length();
      if (0 === b) return !0;
      if ((this.cipher.encrypt(this._inBlock, this._outBlock), 0 === this._partialBytes && b >= this.blockSize))
        for (var g = 0; g < this._ints; ++g) e.putInt32(d.getInt32() ^ this._outBlock[g]);
      else {
        var q = (this.blockSize - b) % this.blockSize;
        0 < q && (q = this.blockSize - q);
        this._partialOutput.clear();
        for (g = 0; g < this._ints; ++g) this._partialOutput.putInt32(d.getInt32() ^ this._outBlock[g]);
        if ((0 < q && (d.read -= this.blockSize), 0 < this._partialBytes && this._partialOutput.getBytes(this._partialBytes), 0 < q && !a))
          return e.putBytes(this._partialOutput.getBytes(q - this._partialBytes)), (this._partialBytes = q), !0;
        e.putBytes(this._partialOutput.getBytes(b - this._partialBytes));
        this._partialBytes = 0;
      }
      E(this._inBlock);
    };
    O.ctr.prototype.decrypt = O.ctr.prototype.encrypt;
    O.gcm = function (d) {
      d = d || {};
      this.name = "GCM";
      this.cipher = d.cipher;
      this.blockSize = d.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = Array(this._ints);
      this._outBlock = Array(this._ints);
      this._partialOutput = B.util.createBuffer();
      this._partialBytes = 0;
      this._R = 3774873600;
    };
    O.gcm.prototype.start = function (d) {
      if (!("iv" in d)) throw Error("Invalid IV parameter.");
      var e,
        a = B.util.createBuffer(d.iv);
      if (
        ((this._cipherLength = 0),
        (e = "additionalData" in d ? B.util.createBuffer(d.additionalData) : B.util.createBuffer()),
        (this._tagLength = "tagLength" in d ? d.tagLength : 128),
        (this._tag = null),
        d.decrypt && ((this._tag = B.util.createBuffer(d.tag).getBytes()), this._tag.length !== this._tagLength / 8))
      )
        throw Error("Authentication tag does not match tag length.");
      this._hashBlock = Array(this._ints);
      this.tag = null;
      this._hashSubkey = Array(this._ints);
      this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey);
      this.componentBits = 4;
      this._m = this.generateHashTable(this._hashSubkey, this.componentBits);
      d = a.length();
      if (12 === d) this._j0 = [a.getInt32(), a.getInt32(), a.getInt32(), 1];
      else {
        for (this._j0 = [0, 0, 0, 0]; 0 < a.length(); )
          this._j0 = this.ghash(this._hashSubkey, this._j0, [a.getInt32(), a.getInt32(), a.getInt32(), a.getInt32()]);
        this._j0 = this.ghash(this._hashSubkey, this._j0, [0, 0].concat(C(8 * d)));
      }
      this._inBlock = this._j0.slice(0);
      E(this._inBlock);
      this._partialBytes = 0;
      e = B.util.createBuffer(e);
      this._aDataLength = C(8 * e.length());
      (a = e.length() % this.blockSize) && e.fillWithByte(0, this.blockSize - a);
      for (this._s = [0, 0, 0, 0]; 0 < e.length(); )
        this._s = this.ghash(this._hashSubkey, this._s, [e.getInt32(), e.getInt32(), e.getInt32(), e.getInt32()]);
    };
    O.gcm.prototype.encrypt = function (d, e, a) {
      var b = d.length();
      if (0 === b) return !0;
      if ((this.cipher.encrypt(this._inBlock, this._outBlock), 0 === this._partialBytes && b >= this.blockSize)) {
        for (var g = 0; g < this._ints; ++g) e.putInt32((this._outBlock[g] ^= d.getInt32()));
        this._cipherLength += this.blockSize;
      } else {
        var q = (this.blockSize - b) % this.blockSize;
        0 < q && (q = this.blockSize - q);
        this._partialOutput.clear();
        for (g = 0; g < this._ints; ++g) this._partialOutput.putInt32(d.getInt32() ^ this._outBlock[g]);
        if (0 >= q || a) {
          a
            ? ((g = b % this.blockSize), (this._cipherLength += g), this._partialOutput.truncate(this.blockSize - g))
            : (this._cipherLength += this.blockSize);
          for (g = 0; g < this._ints; ++g) this._outBlock[g] = this._partialOutput.getInt32();
          this._partialOutput.read -= this.blockSize;
        }
        if ((0 < this._partialBytes && this._partialOutput.getBytes(this._partialBytes), 0 < q && !a))
          return (d.read -= this.blockSize), e.putBytes(this._partialOutput.getBytes(q - this._partialBytes)), (this._partialBytes = q), !0;
        e.putBytes(this._partialOutput.getBytes(b - this._partialBytes));
        this._partialBytes = 0;
      }
      this._s = this.ghash(this._hashSubkey, this._s, this._outBlock);
      E(this._inBlock);
    };
    O.gcm.prototype.decrypt = function (d, e, a) {
      var b = d.length();
      if (b < this.blockSize && !(a && 0 < b)) return !0;
      this.cipher.encrypt(this._inBlock, this._outBlock);
      E(this._inBlock);
      this._hashBlock[0] = d.getInt32();
      this._hashBlock[1] = d.getInt32();
      this._hashBlock[2] = d.getInt32();
      this._hashBlock[3] = d.getInt32();
      this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock);
      for (d = 0; d < this._ints; ++d) e.putInt32(this._outBlock[d] ^ this._hashBlock[d]);
      b < this.blockSize ? (this._cipherLength += b % this.blockSize) : (this._cipherLength += this.blockSize);
    };
    O.gcm.prototype.afterFinish = function (d, e) {
      var a = !0;
      e.decrypt && e.overflow && d.truncate(this.blockSize - e.overflow);
      this.tag = B.util.createBuffer();
      d = this._aDataLength.concat(C(8 * this._cipherLength));
      this._s = this.ghash(this._hashSubkey, this._s, d);
      d = [];
      this.cipher.encrypt(this._j0, d);
      for (var b = 0; b < this._ints; ++b) this.tag.putInt32(this._s[b] ^ d[b]);
      return this.tag.truncate(this.tag.length() % (this._tagLength / 8)), e.decrypt && this.tag.bytes() !== this._tag && (a = !1), a;
    };
    O.gcm.prototype.multiply = function (d, e) {
      var a = [0, 0, 0, 0];
      e = e.slice(0);
      for (var b = 0; 128 > b; ++b)
        d[(b / 32) | 0] & (1 << (31 - (b % 32))) && ((a[0] ^= e[0]), (a[1] ^= e[1]), (a[2] ^= e[2]), (a[3] ^= e[3])), this.pow(e, e);
      return a;
    };
    O.gcm.prototype.pow = function (d, e) {
      for (var a = 1 & d[3], b = 3; 0 < b; --b) e[b] = (d[b] >>> 1) | ((1 & d[b - 1]) << 31);
      e[0] = d[0] >>> 1;
      a && (e[0] ^= this._R);
    };
    O.gcm.prototype.tableMultiply = function (d) {
      for (var e = [0, 0, 0, 0], a = 0; 32 > a; ++a) {
        var b = this._m[a][(d[(a / 8) | 0] >>> (4 * (7 - (a % 8)))) & 15];
        e[0] ^= b[0];
        e[1] ^= b[1];
        e[2] ^= b[2];
        e[3] ^= b[3];
      }
      return e;
    };
    O.gcm.prototype.ghash = function (d, e, a) {
      return (e[0] ^= a[0]), (e[1] ^= a[1]), (e[2] ^= a[2]), (e[3] ^= a[3]), this.tableMultiply(e);
    };
    O.gcm.prototype.generateHashTable = function (d, e) {
      var a = 8 / e,
        b = 4 * a;
      a *= 16;
      for (var g = Array(a), q = 0; q < a; ++q) {
        var D = [0, 0, 0, 0];
        D[(q / b) | 0] = (1 << (e - 1)) << ((b - 1 - (q % b)) * e);
        g[q] = this.generateSubHashTable(this.multiply(D, d), e);
      }
      return g;
    };
    O.gcm.prototype.generateSubHashTable = function (d, e) {
      e = 1 << e;
      var a = e >>> 1,
        b = Array(e);
      b[a] = d.slice(0);
      for (var g = a >>> 1; 0 < g; ) this.pow(b[2 * g], (b[g] = [])), (g >>= 1);
      for (g = 2; g < a; ) {
        for (var q = 1; q < g; ++q) {
          var D = b[g],
            t = b[q];
          b[g + q] = [D[0] ^ t[0], D[1] ^ t[1], D[2] ^ t[2], D[3] ^ t[3]];
        }
        g *= 2;
      }
      b[0] = [0, 0, 0, 0];
      for (g = a + 1; g < e; ++g) (q = b[g ^ a]), (b[g] = [d[0] ^ q[0], d[1] ^ q[1], d[2] ^ q[2], d[3] ^ q[3]]);
      return b;
    };
  },
  "./node_modules/node-forge/lib/des.js": function (O, w, H) {
    function n(A, v) {
      B.cipher.registerAlgorithm(A, function () {
        return new B.des.Algorithm(A, v);
      });
    }
    function E(A, v, L, K) {
      var J = 32 === A.length ? 3 : 9;
      K = 3 === J ? (K ? [30, -2, -2] : [0, 32, 2]) : K ? [94, 62, -2, 32, 64, 2, 30, -2, -2] : [0, 32, 2, 62, 30, -2, 64, 96, 2];
      var l = v[0],
        z = v[1];
      l ^= (v = 252645135 & ((l >>> 4) ^ z)) << 4;
      l ^= (v = 65535 & ((l >>> 16) ^ (z ^= v))) << 16;
      l ^= v = 858993459 & (((z ^= v) >>> 2) ^ l);
      l ^= v = 16711935 & (((z ^= v << 2) >>> 8) ^ l);
      l = ((l ^= (v = 1431655765 & ((l >>> 1) ^ (z ^= v << 8))) << 1) << 1) | (l >>> 31);
      z = ((z ^= v) << 1) | (z >>> 31);
      for (var p = 0; p < J; p += 3) {
        for (var c = K[p + 1], h = K[p + 2], f = K[p]; f != c; f += h) {
          var r = z ^ A[f],
            F = ((z >>> 4) | (z << 28)) ^ A[f + 1];
          v = l;
          l = z;
          z =
            v ^
            (e[(r >>> 24) & 63] |
              b[(r >>> 16) & 63] |
              q[(r >>> 8) & 63] |
              t[63 & r] |
              d[(F >>> 24) & 63] |
              a[(F >>> 16) & 63] |
              g[(F >>> 8) & 63] |
              D[63 & F]);
        }
        v = l;
        l = z;
        z = v;
      }
      z = (z >>> 1) | (z << 31);
      z ^= v = 1431655765 & (((l = (l >>> 1) | (l << 31)) >>> 1) ^ z);
      z ^= (v = 16711935 & ((z >>> 8) ^ (l ^= v << 1))) << 8;
      z ^= (v = 858993459 & ((z >>> 2) ^ (l ^= v))) << 2;
      z ^= v = 65535 & (((l ^= v) >>> 16) ^ z);
      z ^= v = 252645135 & (((l ^= v << 16) >>> 4) ^ z);
      L[0] = l ^ (v << 4);
      L[1] = z;
    }
    function C(A) {
      var v,
        L = "DES-" + ((A = A || {}).mode || "CBC").toUpperCase(),
        K = (v = A.decrypt ? B.cipher.createDecipher(L, A.key) : B.cipher.createCipher(L, A.key)).start;
      return (
        (v.start = function (J, l) {
          var z = null;
          l instanceof B.util.ByteBuffer && ((z = l), (l = {}));
          (l = l || {}).output = z;
          l.iv = J;
          K.call(v, l);
        }),
        v
      );
    }
    var B = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/cipher.js");
    H("./node_modules/node-forge/lib/cipherModes.js");
    H("./node_modules/node-forge/lib/util.js");
    O.exports = B.des = B.des || {};
    B.des.startEncrypting = function (A, v, L, K) {
      A = C({ key: A, output: L, decrypt: !1, mode: K || (null === v ? "ECB" : "CBC") });
      return A.start(v), A;
    };
    B.des.createEncryptionCipher = function (A, v) {
      return C({ key: A, output: null, decrypt: !1, mode: v });
    };
    B.des.startDecrypting = function (A, v, L, K) {
      A = C({ key: A, output: L, decrypt: !0, mode: K || (null === v ? "ECB" : "CBC") });
      return A.start(v), A;
    };
    B.des.createDecryptionCipher = function (A, v) {
      return C({ key: A, output: null, decrypt: !0, mode: v });
    };
    B.des.Algorithm = function (A, v) {
      var L = this;
      L.name = A;
      L.mode = new v({
        blockSize: 8,
        cipher: {
          encrypt: function (K, J) {
            return E(L._keys, K, J, !1);
          },
          decrypt: function (K, J) {
            return E(L._keys, K, J, !0);
          }
        }
      });
      L._init = !1;
    };
    B.des.Algorithm.prototype.initialize = function (A) {
      if (!this._init) {
        A = B.util.createBuffer(A.key);
        if (0 === this.name.indexOf("3DES") && 24 !== A.length()) throw Error("Invalid Triple-DES key size: " + 8 * A.length());
        for (
          var v,
            L = [
              0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960,
              536936964
            ],
            K = [
              0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696,
              68157697
            ],
            J = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272],
            l = [
              0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416,
              134356992, 136454144
            ],
            z = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256],
            p = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488],
            c = [
              0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290,
              268959746
            ],
            h = [
              0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520,
              537004032, 537069568
            ],
            f = [
              0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578
            ],
            r = [
              0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488
            ],
            F = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800],
            M = [
              0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232,
              69206528, 85983744
            ],
            R = [
              0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400,
              134742032, 134746128
            ],
            m = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261],
            u = 8 < A.length() ? 3 : 1,
            I = [],
            k = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
            y = 0,
            G = 0;
          G < u;
          G++
        ) {
          var N = A.getInt32(),
            Q = A.getInt32();
          N ^= (v = 252645135 & ((N >>> 4) ^ Q)) << 4;
          N ^= v = 65535 & (((Q ^= v) >>> -16) ^ N);
          N ^= (v = 858993459 & ((N >>> 2) ^ (Q ^= v << -16))) << 2;
          N ^= v = 65535 & (((Q ^= v) >>> -16) ^ N);
          N ^= (v = 1431655765 & ((N >>> 1) ^ (Q ^= v << -16))) << 1;
          N ^= v = 16711935 & (((Q ^= v) >>> 8) ^ N);
          v = ((N ^ ((v = 1431655765 & ((N >>> 1) ^ (Q ^= v << 8))) << 1)) << 8) | (((Q ^= v) >>> 20) & 240);
          N = (Q << 24) | ((Q << 8) & 16711680) | ((Q >>> 8) & 65280) | ((Q >>> 24) & 240);
          Q = v;
          for (var T = 0; T < k.length; ++T) {
            k[T] ? ((N = (N << 2) | (N >>> 26)), (Q = (Q << 2) | (Q >>> 26))) : ((N = (N << 1) | (N >>> 27)), (Q = (Q << 1) | (Q >>> 27)));
            var V =
                L[(N &= -15) >>> 28] |
                K[(N >>> 24) & 15] |
                J[(N >>> 20) & 15] |
                l[(N >>> 16) & 15] |
                z[(N >>> 12) & 15] |
                p[(N >>> 8) & 15] |
                c[(N >>> 4) & 15],
              S =
                h[(Q &= -15) >>> 28] |
                f[(Q >>> 24) & 15] |
                r[(Q >>> 20) & 15] |
                F[(Q >>> 16) & 15] |
                M[(Q >>> 12) & 15] |
                R[(Q >>> 8) & 15] |
                m[(Q >>> 4) & 15];
            v = 65535 & ((S >>> 16) ^ V);
            I[y++] = V ^ v;
            I[y++] = S ^ (v << 16);
          }
        }
        this._keys = I;
        this._init = !0;
      }
    };
    n("DES-ECB", B.cipher.modes.ecb);
    n("DES-CBC", B.cipher.modes.cbc);
    n("DES-CFB", B.cipher.modes.cfb);
    n("DES-OFB", B.cipher.modes.ofb);
    n("DES-CTR", B.cipher.modes.ctr);
    n("3DES-ECB", B.cipher.modes.ecb);
    n("3DES-CBC", B.cipher.modes.cbc);
    n("3DES-CFB", B.cipher.modes.cfb);
    n("3DES-OFB", B.cipher.modes.ofb);
    n("3DES-CTR", B.cipher.modes.ctr);
    var d = [
        16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028,
        16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536,
        16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780,
        65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756
      ],
      e = [
        -2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648,
        -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608,
        -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072,
        -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576,
        -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272,
        1081344
      ],
      a = [
        520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800,
        520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512,
        134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0,
        134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8,
        134348808, 131584
      ],
      b = [
        8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608,
        8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129,
        0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193,
        8320, 8388608, 8396801, 128, 8388608, 8192, 8396928
      ],
      g = [
        256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512,
        1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544,
        1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720,
        1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544,
        1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976,
        1073742080
      ],
      q = [
        536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320,
        536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600,
        16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296,
        536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384,
        4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312
      ],
      D = [
        2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050,
        67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864,
        2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064,
        2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866,
        67110912, 2048, 2097154
      ],
      t = [
        268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304,
        4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552,
        266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664,
        268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160,
        4160, 262208, 268435456, 268701696
      ];
  },
  "./node_modules/node-forge/lib/ed25519.js": function (O, w, H) {
    (function (n) {
      function E(S) {
        var P = S.message;
        if (P instanceof Uint8Array || P instanceof m) return P;
        var x = S.encoding;
        if (void 0 === P) {
          if (!S.md) throw new TypeError('"options.message" or "options.md" not specified.');
          P = S.md.digest().getBytes();
          x = "binary";
        }
        if ("string" == typeof P && !x) throw new TypeError('"options.encoding" must be "binary" or "utf8".');
        if ("string" == typeof P) {
          if (void 0 !== n) return n.from(P, x);
          P = new R(P, x);
        } else if (!(P instanceof R))
          throw new TypeError(
            '"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.'
          );
        S = new m(P.length());
        for (x = 0; x < S.length; ++x) S[x] = P.at(x);
        return S;
      }
      function C(S, P) {
        var x = h.md.sha512.create();
        S = new R(S);
        x.update(S.getBytes(P), "binary");
        P = x.digest().getBytes();
        if (void 0 !== n) return n.from(P, "binary");
        x = new m(u.constants.HASH_BYTE_LENGTH);
        for (S = 0; 64 > S; ++S) x[S] = P.charCodeAt(S);
        return x;
      }
      function B(S, P) {
        var x, U;
        for (x = 63; 32 <= x; --x) {
          var W = 0;
          var X = x - 32;
          for (U = x - 12; X < U; ++X) (P[X] += W - 16 * P[x] * T[X - (x - 32)]), (W = (P[X] + 128) >> 8), (P[X] -= 256 * W);
          P[X] += W;
          P[x] = 0;
        }
        for (X = W = 0; 32 > X; ++X) (P[X] += W - (P[31] >> 4) * T[X]), (W = P[X] >> 8), (P[X] &= 255);
        for (X = 0; 32 > X; ++X) P[X] -= W * T[X];
        for (x = 0; 32 > x; ++x) (P[x + 1] += P[x] >> 8), (S[x] = 255 & P[x]);
      }
      function d(S) {
        for (var P = new Float64Array(64), x = 0; 64 > x; ++x) (P[x] = S[x]), (S[x] = 0);
        B(S, P);
      }
      function e(S, P) {
        var x = J(),
          U = J(),
          W = J(),
          X = J(),
          Y = J(),
          Z = J(),
          ca = J(),
          fa = J(),
          aa = J();
        z(x, S[1], S[0]);
        z(aa, P[1], P[0]);
        c(x, x, aa);
        l(U, S[0], S[1]);
        l(aa, P[0], P[1]);
        c(U, U, aa);
        c(W, S[3], P[3]);
        c(W, W, G);
        c(X, S[2], P[2]);
        l(X, X, X);
        z(Y, U, x);
        z(Z, X, W);
        l(ca, X, W);
        l(fa, U, x);
        c(S[0], Y, Z);
        c(S[1], fa, ca);
        c(S[2], ca, Z);
        c(S[3], Y, fa);
      }
      function a(S, P) {
        var x = J(),
          U = J(),
          W = J(),
          X = P[2],
          Y,
          Z = J();
        for (Y = 0; 16 > Y; ++Y) Z[Y] = X[Y];
        for (Y = 253; 0 <= Y; --Y) p(Z, Z), 2 !== Y && 4 !== Y && c(Z, Z, X);
        for (Y = 0; 16 > Y; ++Y) W[Y] = Z[Y];
        !0;
        c(x, P[0], W);
        c(U, P[1], W);
        b(S, U);
        S[31] ^= D(x) << 7;
      }
      function b(S, P) {
        var x,
          U = J(),
          W = J();
        for (x = 0; 16 > x; ++x) W[x] = P[x];
        L(W);
        L(W);
        L(W);
        for (P = 0; 2 > P; ++P) {
          U[0] = W[0] - 65517;
          for (x = 1; 15 > x; ++x) (U[x] = W[x] - 65535 - ((U[x - 1] >> 16) & 1)), (U[x - 1] &= 65535);
          U[15] = W[15] - 32767 - ((U[14] >> 16) & 1);
          x = (U[15] >> 16) & 1;
          U[14] &= 65535;
          K(W, U, 1 - x);
        }
        for (x = 0; 16 > x; x++) (S[2 * x] = 255 & W[x]), (S[2 * x + 1] = W[x] >> 8);
      }
      function g(S, P) {
        var x = new m(32),
          U = new m(32);
        return b(x, S), b(U, P), q(x, 0, U, 0);
      }
      function q(S, P, x, U) {
        var W,
          X = 0;
        for (W = 0; 32 > W; ++W) X |= S[P + W] ^ x[U + W];
        return (1 & ((X - 1) >>> 8)) - 1;
      }
      function D(S) {
        var P = new m(32);
        return b(P, S), 1 & P[0];
      }
      function t(S, P, x) {
        var U, W;
        v(S[0], I);
        v(S[1], k);
        v(S[2], k);
        v(S[3], I);
        for (W = 255; 0 <= W; --W) {
          for (var X = S, Y = P, Z = (U = (x[(W / 8) | 0] >> (7 & W)) & 1), ca = 0; 4 > ca; ++ca) K(X[ca], Y[ca], Z);
          e(P, S);
          e(S, S);
          X = S;
          Y = P;
          for (Z = 0; 4 > Z; ++Z) K(X[Z], Y[Z], U);
        }
      }
      function A(S, P) {
        var x = [J(), J(), J(), J()];
        v(x[0], N);
        v(x[1], Q);
        v(x[2], k);
        c(x[3], N, Q);
        t(S, x, P);
      }
      function v(S, P) {
        var x;
        for (x = 0; 16 > x; x++) S[x] = 0 | P[x];
      }
      function L(S) {
        var P,
          x = 1;
        for (P = 0; 16 > P; ++P) {
          var U = S[P] + x + 65535;
          x = Math.floor(U / 65536);
          S[P] = U - 65536 * x;
        }
        S[0] += x - 1 + 37 * (x - 1);
      }
      function K(S, P, x) {
        for (var U = ~(x - 1), W = 0; 16 > W; ++W) (x = U & (S[W] ^ P[W])), (S[W] ^= x), (P[W] ^= x);
      }
      function J(S) {
        var P,
          x = new Float64Array(16);
        if (S) for (P = 0; P < S.length; ++P) x[P] = S[P];
        return x;
      }
      function l(S, P, x) {
        for (var U = 0; 16 > U; ++U) S[U] = P[U] + x[U];
      }
      function z(S, P, x) {
        for (var U = 0; 16 > U; ++U) S[U] = P[U] - x[U];
      }
      function p(S, P) {
        c(S, P, P);
      }
      function c(S, P, x) {
        var U = x[0],
          W = x[1],
          X = x[2],
          Y = x[3],
          Z = x[4],
          ca = x[5],
          fa = x[6],
          aa = x[7],
          oa = x[8],
          la = x[9],
          ja = x[10],
          da = x[11],
          pa = x[12],
          ea = x[13],
          ha = x[14],
          ia = x[15];
        var va = (x = P[0]) * U;
        var Ba = x * X;
        var Ca = x * Y;
        var za = x * Z;
        var ta = x * ca;
        var ra = x * fa;
        var ba = x * aa;
        var ka = x * oa;
        var xa = x * la;
        var wa = x * ja;
        var ua = x * da;
        var sa = x * pa;
        var qa = x * ea;
        var ma = x * ha;
        var na = x * ia;
        var Ja = x * W + (x = P[1]) * U;
        Ca += x * X;
        za += x * Y;
        ta += x * Z;
        ra += x * ca;
        ba += x * fa;
        ka += x * aa;
        xa += x * oa;
        wa += x * la;
        ua += x * ja;
        sa += x * da;
        qa += x * pa;
        ma += x * ea;
        na += x * ha;
        var ya = x * ia;
        Ba = Ba + x * W + (x = P[2]) * U;
        za += x * X;
        ta += x * Y;
        ra += x * Z;
        ba += x * ca;
        ka += x * fa;
        xa += x * aa;
        wa += x * oa;
        ua += x * la;
        sa += x * ja;
        qa += x * da;
        ma += x * pa;
        na += x * ea;
        ya += x * ha;
        var Aa = x * ia;
        Ca = Ca + x * W + (x = P[3]) * U;
        ta += x * X;
        ra += x * Y;
        ba += x * Z;
        ka += x * ca;
        xa += x * fa;
        wa += x * aa;
        ua += x * oa;
        sa += x * la;
        qa += x * ja;
        ma += x * da;
        na += x * pa;
        ya += x * ea;
        Aa += x * ha;
        var Da = x * ia;
        za = za + x * W + (x = P[4]) * U;
        ra += x * X;
        ba += x * Y;
        ka += x * Z;
        xa += x * ca;
        wa += x * fa;
        ua += x * aa;
        sa += x * oa;
        qa += x * la;
        ma += x * ja;
        na += x * da;
        ya += x * pa;
        Aa += x * ea;
        Da += x * ha;
        var Ea = x * ia;
        ta = ta + x * W + (x = P[5]) * U;
        ba += x * X;
        ka += x * Y;
        xa += x * Z;
        wa += x * ca;
        ua += x * fa;
        sa += x * aa;
        qa += x * oa;
        ma += x * la;
        na += x * ja;
        ya += x * da;
        Aa += x * pa;
        Da += x * ea;
        Ea += x * ha;
        var Fa = x * ia;
        ra = ra + x * W + (x = P[6]) * U;
        ka += x * X;
        xa += x * Y;
        wa += x * Z;
        ua += x * ca;
        sa += x * fa;
        qa += x * aa;
        ma += x * oa;
        na += x * la;
        ya += x * ja;
        Aa += x * da;
        Da += x * pa;
        Ea += x * ea;
        Fa += x * ha;
        var Ga = x * ia;
        ba = ba + x * W + (x = P[7]) * U;
        xa += x * X;
        wa += x * Y;
        ua += x * Z;
        sa += x * ca;
        qa += x * fa;
        ma += x * aa;
        na += x * oa;
        ya += x * la;
        Aa += x * ja;
        Da += x * da;
        Ea += x * pa;
        Fa += x * ea;
        Ga += x * ha;
        var Ha = x * ia;
        ka = ka + x * W + (x = P[8]) * U;
        wa += x * X;
        ua += x * Y;
        sa += x * Z;
        qa += x * ca;
        ma += x * fa;
        na += x * aa;
        ya += x * oa;
        Aa += x * la;
        Da += x * ja;
        Ea += x * da;
        Fa += x * pa;
        Ga += x * ea;
        Ha += x * ha;
        var Ia = x * ia;
        xa = xa + x * W + (x = P[9]) * U;
        ua += x * X;
        sa += x * Y;
        qa += x * Z;
        ma += x * ca;
        na += x * fa;
        ya += x * aa;
        Aa += x * oa;
        Da += x * la;
        Ea += x * ja;
        Fa += x * da;
        Ga += x * pa;
        Ha += x * ea;
        Ia += x * ha;
        var Ka = x * ia;
        wa = wa + x * W + (x = P[10]) * U;
        sa += x * X;
        qa += x * Y;
        ma += x * Z;
        na += x * ca;
        ya += x * fa;
        Aa += x * aa;
        Da += x * oa;
        Ea += x * la;
        Fa += x * ja;
        Ga += x * da;
        Ha += x * pa;
        Ia += x * ea;
        Ka += x * ha;
        var La = x * ia;
        ua = ua + x * W + (x = P[11]) * U;
        qa += x * X;
        ma += x * Y;
        na += x * Z;
        ya += x * ca;
        Aa += x * fa;
        Da += x * aa;
        Ea += x * oa;
        Fa += x * la;
        Ga += x * ja;
        Ha += x * da;
        Ia += x * pa;
        Ka += x * ea;
        La += x * ha;
        var Ma = x * ia;
        sa = sa + x * W + (x = P[12]) * U;
        ma += x * X;
        na += x * Y;
        ya += x * Z;
        Aa += x * ca;
        Da += x * fa;
        Ea += x * aa;
        Fa += x * oa;
        Ga += x * la;
        Ha += x * ja;
        Ia += x * da;
        Ka += x * pa;
        La += x * ea;
        Ma += x * ha;
        var Na = x * ia;
        qa = qa + x * W + (x = P[13]) * U;
        na += x * X;
        ya += x * Y;
        Aa += x * Z;
        Da += x * ca;
        Ea += x * fa;
        Fa += x * aa;
        Ga += x * oa;
        Ha += x * la;
        Ia += x * ja;
        Ka += x * da;
        La += x * pa;
        Ma += x * ea;
        Na += x * ha;
        var Oa = x * ia;
        ma = ma + x * W + (x = P[14]) * U;
        ya += x * X;
        Aa += x * Y;
        Da += x * Z;
        Ea += x * ca;
        Fa += x * fa;
        Ga += x * aa;
        Ha += x * oa;
        Ia += x * la;
        Ka += x * ja;
        La += x * da;
        Ma += x * pa;
        Na += x * ea;
        Oa += x * ha;
        var Pa = x * ia;
        na = na + x * W + (x = P[15]) * U;
        Ja += 38 * (Aa + x * X);
        Ba += 38 * (Da + x * Y);
        Ca += 38 * (Ea + x * Z);
        za += 38 * (Fa + x * ca);
        ta += 38 * (Ga + x * fa);
        ra += 38 * (Ha + x * aa);
        ba += 38 * (Ia + x * oa);
        ka += 38 * (Ka + x * la);
        xa += 38 * (La + x * ja);
        wa += 38 * (Ma + x * da);
        ua += 38 * (Na + x * pa);
        sa += 38 * (Oa + x * ea);
        qa += 38 * (Pa + x * ha);
        ma += 38 * x * ia;
        va = (x = (va += 38 * (ya + x * W)) + 1 + 65535) - 65536 * (P = Math.floor(x / 65536));
        Ja = (x = Ja + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        Ba = (x = Ba + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        Ca = (x = Ca + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        za = (x = za + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ta = (x = ta + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ra = (x = ra + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ba = (x = ba + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ka = (x = ka + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        xa = (x = xa + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        wa = (x = wa + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ua = (x = ua + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        sa = (x = sa + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        qa = (x = qa + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ma = (x = ma + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        na = (x = na + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        va = (x = (va += P - 1 + 37 * (P - 1)) + 1 + 65535) - 65536 * (P = Math.floor(x / 65536));
        Ja = (x = Ja + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        Ba = (x = Ba + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        Ca = (x = Ca + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        za = (x = za + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ta = (x = ta + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ra = (x = ra + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ba = (x = ba + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ka = (x = ka + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        xa = (x = xa + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        wa = (x = wa + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ua = (x = ua + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        sa = (x = sa + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        qa = (x = qa + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        ma = (x = ma + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        na = (x = na + P + 65535) - 65536 * (P = Math.floor(x / 65536));
        S[0] = va + (P - 1 + 37 * (P - 1));
        S[1] = Ja;
        S[2] = Ba;
        S[3] = Ca;
        S[4] = za;
        S[5] = ta;
        S[6] = ra;
        S[7] = ba;
        S[8] = ka;
        S[9] = xa;
        S[10] = wa;
        S[11] = ua;
        S[12] = sa;
        S[13] = qa;
        S[14] = ma;
        S[15] = na;
      }
      var h = H("./node_modules/node-forge/lib/forge.js");
      H("./node_modules/node-forge/lib/jsbn.js");
      H("./node_modules/node-forge/lib/random.js");
      H("./node_modules/node-forge/lib/sha512.js");
      H("./node_modules/node-forge/lib/util.js");
      var f = H("./node_modules/node-forge/lib/asn1-validator.js"),
        r = f.publicKeyValidator,
        F = f.privateKeyValidator;
      if (void 0 === M) var M = h.jsbn.BigInteger;
      var R = h.util.ByteBuffer,
        m = void 0 === n ? Uint8Array : n;
      h.pki = h.pki || {};
      O.exports = h.pki.ed25519 = h.ed25519 = h.ed25519 || {};
      var u = h.ed25519;
      u.constants = {};
      u.constants.PUBLIC_KEY_BYTE_LENGTH = 32;
      u.constants.PRIVATE_KEY_BYTE_LENGTH = 64;
      u.constants.SEED_BYTE_LENGTH = 32;
      u.constants.SIGN_BYTE_LENGTH = 64;
      u.constants.HASH_BYTE_LENGTH = 64;
      u.generateKeyPair = function (S) {
        var P = (S || {}).seed;
        if (void 0 === P) P = h.random.getBytesSync(u.constants.SEED_BYTE_LENGTH);
        else if ("string" == typeof P) {
          if (P.length !== u.constants.SEED_BYTE_LENGTH)
            throw new TypeError('"seed" must be ' + u.constants.SEED_BYTE_LENGTH + " bytes in length.");
        } else if (!(P instanceof Uint8Array)) throw new TypeError('"seed" must be a node.js Buffer, Uint8Array, or a binary string.');
        P = E({ message: P, encoding: "binary" });
        S = new m(u.constants.PUBLIC_KEY_BYTE_LENGTH);
        for (var x = new m(u.constants.PRIVATE_KEY_BYTE_LENGTH), U = 0; 32 > U; ++U) x[U] = P[U];
        P = [J(), J(), J(), J()];
        U = C(x, 32);
        U[0] &= 248;
        U[31] &= 127;
        U[31] |= 64;
        A(P, U);
        a(S, P);
        for (P = 0; 32 > P; ++P) x[P + 32] = S[P];
        return { publicKey: S, privateKey: x };
      };
      u.privateKeyFromAsn1 = function (S) {
        var P = {},
          x = [];
        if (!h.asn1.validate(S, F, P, x)) throw ((P = Error("Invalid Key.")), (P.errors = x), P);
        x = h.asn1.derToOid(P.privateKeyOid);
        S = h.oids.EdDSA25519;
        if (x !== S) throw Error('Invalid OID "' + x + '"; OID must be "' + S + '".');
        return { privateKeyBytes: E({ message: h.asn1.fromDer(P.privateKey).value, encoding: "binary" }) };
      };
      u.publicKeyFromAsn1 = function (S) {
        var P = {},
          x = [];
        if (!h.asn1.validate(S, r, P, x)) throw ((P = Error("Invalid Key.")), (P.errors = x), P);
        x = h.asn1.derToOid(P.publicKeyOid);
        S = h.oids.EdDSA25519;
        if (x !== S) throw Error('Invalid OID "' + x + '"; OID must be "' + S + '".');
        P = P.ed25519PublicKey;
        if (P.length !== u.constants.PUBLIC_KEY_BYTE_LENGTH) throw Error("Key length is invalid.");
        return E({ message: P, encoding: "binary" });
      };
      u.publicKeyFromPrivateKey = function (S) {
        S = E({ message: (S || {}).privateKey, encoding: "binary" });
        if (S.length !== u.constants.PRIVATE_KEY_BYTE_LENGTH)
          throw new TypeError('"options.privateKey" must have a byte length of ' + u.constants.PRIVATE_KEY_BYTE_LENGTH);
        for (var P = new m(u.constants.PUBLIC_KEY_BYTE_LENGTH), x = 0; x < P.length; ++x) P[x] = S[32 + x];
        return P;
      };
      u.sign = function (S) {
        var P = E((S = S || {})),
          x = E({ message: S.privateKey, encoding: "binary" });
        if (x.length === u.constants.SEED_BYTE_LENGTH) x = u.generateKeyPair({ seed: x }).privateKey;
        else if (x.length !== u.constants.PRIVATE_KEY_BYTE_LENGTH)
          throw new TypeError(
            '"options.privateKey" must have a byte length of ' + u.constants.SEED_BYTE_LENGTH + " or " + u.constants.PRIVATE_KEY_BYTE_LENGTH
          );
        S = new m(u.constants.SIGN_BYTE_LENGTH + P.length);
        var U = P.length,
          W = x,
          X = new Float64Array(64),
          Y = [J(), J(), J(), J()],
          Z = C(W, 32);
        Z[0] &= 248;
        Z[31] &= 127;
        Z[31] |= 64;
        for (x = 0; x < U; ++x) S[64 + x] = P[x];
        for (x = 0; 32 > x; ++x) S[32 + x] = Z[32 + x];
        P = C(S.subarray(32), U + 32);
        d(P);
        A(Y, P);
        a(S, Y);
        for (x = 32; 64 > x; ++x) S[x] = W[x];
        U = C(S, U + 64);
        d(U);
        for (x = 32; 64 > x; ++x) X[x] = 0;
        for (x = 0; 32 > x; ++x) X[x] = P[x];
        for (x = 0; 32 > x; ++x) for (P = 0; 32 > P; P++) X[x + P] += U[x] * Z[P];
        B(S.subarray(32), X);
        !0;
        x = new m(u.constants.SIGN_BYTE_LENGTH);
        for (X = 0; X < x.length; ++X) x[X] = S[X];
        return x;
      };
      u.verify = function (S) {
        var P = E((S = S || {}));
        if (void 0 === S.signature)
          throw new TypeError('"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.');
        var x = E({ message: S.signature, encoding: "binary" });
        if (x.length !== u.constants.SIGN_BYTE_LENGTH)
          throw new TypeError('"options.signature" must have a byte length of ' + u.constants.SIGN_BYTE_LENGTH);
        S = E({ message: S.publicKey, encoding: "binary" });
        if (S.length !== u.constants.PUBLIC_KEY_BYTE_LENGTH)
          throw new TypeError('"options.publicKey" must have a byte length of ' + u.constants.PUBLIC_KEY_BYTE_LENGTH);
        var U,
          W = new m(u.constants.SIGN_BYTE_LENGTH + P.length),
          X = new m(u.constants.SIGN_BYTE_LENGTH + P.length);
        for (U = 0; U < u.constants.SIGN_BYTE_LENGTH; ++U) W[U] = x[U];
        for (U = 0; U < P.length; ++U) W[U + u.constants.SIGN_BYTE_LENGTH] = P[U];
        return (
          0 <=
          (function (Y, Z, ca, fa) {
            var aa,
              oa = new m(32),
              la = [J(), J(), J(), J()],
              ja = [J(), J(), J(), J()];
            if (
              (-1, 64 > ca) ||
              (function (da, pa) {
                var ea = J(),
                  ha = J(),
                  ia = J(),
                  va = J(),
                  Ba = J(),
                  Ca = J(),
                  za = J();
                v(da[2], k);
                (function (ta, ra) {
                  var ba;
                  for (ba = 0; 16 > ba; ++ba) ta[ba] = ra[2 * ba] + (ra[2 * ba + 1] << 8);
                  ta[15] &= 32767;
                })(da[1], pa);
                p(ia, da[1]);
                c(va, ia, y);
                z(ia, ia, da[2]);
                l(va, da[2], va);
                p(Ba, va);
                p(Ca, Ba);
                c(za, Ca, Ba);
                c(ea, za, ia);
                c(ea, ea, va);
                (function (ta, ra) {
                  var ba,
                    ka = J();
                  for (ba = 0; 16 > ba; ++ba) ka[ba] = ra[ba];
                  for (ba = 250; 0 <= ba; --ba) p(ka, ka), 1 !== ba && c(ka, ka, ra);
                  for (ba = 0; 16 > ba; ++ba) ta[ba] = ka[ba];
                })(ea, ea);
                c(ea, ea, ia);
                c(ea, ea, va);
                c(ea, ea, va);
                c(da[0], ea, va);
                p(ha, da[0]);
                c(ha, ha, va);
                g(ha, ia) && c(da[0], da[0], V);
                if ((p(ha, da[0]), c(ha, ha, va), g(ha, ia))) return -1;
                D(da[0]) === pa[31] >> 7 && z(da[0], I, da[0]);
                return c(da[3], da[0], da[1]), 0;
              })(ja, fa)
            )
              return -1;
            for (aa = 0; aa < ca; ++aa) Y[aa] = Z[aa];
            for (aa = 0; 32 > aa; ++aa) Y[aa + 32] = fa[aa];
            fa = C(Y, ca);
            if ((d(fa), t(la, ja, fa), A(ja, Z.subarray(32)), e(la, ja), a(oa, la), (ca -= 64), q(Z, 0, oa, 0))) {
              for (aa = 0; aa < ca; ++aa) Y[aa] = 0;
              return -1;
            }
            for (aa = 0; aa < ca; ++aa) Y[aa] = Z[aa + 64];
            return ca;
          })(X, W, W.length, S)
        );
      };
      var I = J(),
        k = J([1]),
        y = J([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        G = J([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
        N = J([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
        Q = J([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
        T = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16
        ]),
        V = J([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    }).call(this, H("./node_modules/buffer/index.js").Buffer);
  },
  "./node_modules/node-forge/lib/forge.js": function (O, w) {
    O.exports = { options: { usePureJavaScript: !1 } };
  },
  "./node_modules/node-forge/lib/hmac.js": function (O, w, H) {
    var n = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/md.js");
    H("./node_modules/node-forge/lib/util.js");
    (O.exports = n.hmac = n.hmac || {}).create = function () {
      var E = null,
        C = null,
        B = null,
        d = {
          start: function (e, a) {
            if (null !== e)
              if ("string" == typeof e) {
                if (!((e = e.toLowerCase()) in n.md.algorithms)) throw Error('Unknown hash algorithm "' + e + '"');
                E = n.md.algorithms[e].create();
              } else E = e;
            if (null !== a) {
              if ("string" == typeof a) a = n.util.createBuffer(a);
              else if (n.util.isArray(a)) {
                e = a;
                a = n.util.createBuffer();
                for (var b = 0; b < e.length; ++b) a.putByte(e[b]);
              }
              var g = a.length();
              g > E.blockLength && (E.start(), E.update(a.bytes()), (a = E.digest()));
              C = n.util.createBuffer();
              B = n.util.createBuffer();
              g = a.length();
              for (b = 0; b < g; ++b) (e = a.at(b)), C.putByte(54 ^ e), B.putByte(92 ^ e);
              if (g < E.blockLength) for (e = E.blockLength - g, b = 0; b < e; ++b) C.putByte(54), B.putByte(92);
              C = C.bytes();
              B = B.bytes();
            }
            E.start();
            E.update(C);
          },
          update: function (e) {
            E.update(e);
          },
          getMac: function () {
            var e = E.digest().bytes();
            return E.start(), E.update(B), E.update(e), E.digest();
          }
        };
      return (d.digest = d.getMac), d;
    };
  },
  "./node_modules/node-forge/lib/index.js": function (O, w, H) {
    O.exports = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/aes.js");
    H("./node_modules/node-forge/lib/aesCipherSuites.js");
    H("./node_modules/node-forge/lib/asn1.js");
    H("./node_modules/node-forge/lib/cipher.js");
    H("./node_modules/node-forge/lib/des.js");
    H("./node_modules/node-forge/lib/ed25519.js");
    H("./node_modules/node-forge/lib/hmac.js");
    H("./node_modules/node-forge/lib/kem.js");
    H("./node_modules/node-forge/lib/log.js");
    H("./node_modules/node-forge/lib/md.all.js");
    H("./node_modules/node-forge/lib/mgf1.js");
    H("./node_modules/node-forge/lib/pbkdf2.js");
    H("./node_modules/node-forge/lib/pem.js");
    H("./node_modules/node-forge/lib/pkcs1.js");
    H("./node_modules/node-forge/lib/pkcs12.js");
    H("./node_modules/node-forge/lib/pkcs7.js");
    H("./node_modules/node-forge/lib/pki.js");
    H("./node_modules/node-forge/lib/prime.js");
    H("./node_modules/node-forge/lib/prng.js");
    H("./node_modules/node-forge/lib/pss.js");
    H("./node_modules/node-forge/lib/random.js");
    H("./node_modules/node-forge/lib/rc2.js");
    H("./node_modules/node-forge/lib/ssh.js");
    H("./node_modules/node-forge/lib/tls.js");
    H("./node_modules/node-forge/lib/util.js");
  },
  "./node_modules/node-forge/lib/jsbn.js": function (O, w, H) {
    function n(c, h, f) {
      this.data = [];
      null != c &&
        ("number" == typeof c
          ? this.fromNumber(c, h, f)
          : null == h && "string" != typeof c
          ? this.fromString(c, 256)
          : this.fromString(c, h));
    }
    function E() {
      return new n(null);
    }
    function C(c, h, f, r, F, M) {
      var R = 16383 & h;
      for (h >>= 14; 0 <= --M; ) {
        var m = 16383 & this.data[c],
          u = this.data[c++] >> 14,
          I = h * m + u * R;
        F = ((m = R * m + ((16383 & I) << 14) + f.data[r] + F) >> 28) + (I >> 14) + h * u;
        f.data[r++] = 268435455 & m;
      }
      return F;
    }
    function B(c) {
      return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c);
    }
    function d(c, h) {
      c = l[c.charCodeAt(h)];
      return null == c ? -1 : c;
    }
    function e(c) {
      var h = E();
      return h.fromInt(c), h;
    }
    function a(c) {
      var h,
        f = 1;
      return (
        0 != (h = c >>> 16) && ((c = h), (f += 16)),
        0 != (h = c >> 8) && ((c = h), (f += 8)),
        0 != (h = c >> 4) && ((c = h), (f += 4)),
        0 != (h = c >> 2) && ((c = h), (f += 2)),
        0 != c >> 1 && (f += 1),
        f
      );
    }
    function b(c) {
      this.m = c;
    }
    function g(c) {
      this.m = c;
      this.mp = c.invDigit();
      this.mpl = 32767 & this.mp;
      this.mph = this.mp >> 15;
      this.um = (1 << (c.DB - 15)) - 1;
      this.mt2 = 2 * c.t;
    }
    function q(c, h) {
      return c & h;
    }
    function D(c, h) {
      return c | h;
    }
    function t(c, h) {
      return c ^ h;
    }
    function A(c, h) {
      return c & ~h;
    }
    function v() {}
    function L(c) {
      return c;
    }
    function K(c) {
      this.r2 = E();
      this.q3 = E();
      n.ONE.dlShiftTo(2 * c.t, this.r2);
      this.mu = this.r2.divide(c);
      this.m = c;
    }
    var J;
    w = H("./node_modules/node-forge/lib/forge.js");
    O.exports = w.jsbn = w.jsbn || {};
    w.jsbn.BigInteger = n;
    "undefined" == typeof navigator
      ? ((n.prototype.am = C), (J = 28))
      : "Microsoft Internet Explorer" == navigator.appName
      ? ((n.prototype.am = function (c, h, f, r, F, M) {
          var R = 32767 & h;
          for (h >>= 15; 0 <= --M; ) {
            var m = 32767 & this.data[c],
              u = this.data[c++] >> 15,
              I = h * m + u * R;
            F = ((m = R * m + ((32767 & I) << 15) + f.data[r] + (1073741823 & F)) >>> 30) + (I >>> 15) + h * u + (F >>> 30);
            f.data[r++] = 1073741823 & m;
          }
          return F;
        }),
        (J = 30))
      : "Netscape" != navigator.appName
      ? ((n.prototype.am = function (c, h, f, r, F, M) {
          for (; 0 <= --M; ) {
            var R = h * this.data[c++] + f.data[r] + F;
            F = Math.floor(R / 67108864);
            f.data[r++] = 67108863 & R;
          }
          return F;
        }),
        (J = 26))
      : ((n.prototype.am = C), (J = 28));
    n.prototype.DB = J;
    n.prototype.DM = (1 << J) - 1;
    n.prototype.DV = 1 << J;
    n.prototype.FV = Math.pow(2, 52);
    n.prototype.F1 = 52 - J;
    n.prototype.F2 = 2 * J - 52;
    var l = [];
    O = 48;
    for (J = 0; 9 >= J; ++J) l[O++] = J;
    O = 97;
    for (J = 10; 36 > J; ++J) l[O++] = J;
    O = 65;
    for (J = 10; 36 > J; ++J) l[O++] = J;
    b.prototype.convert = function (c) {
      return 0 > c.s || 0 <= c.compareTo(this.m) ? c.mod(this.m) : c;
    };
    b.prototype.revert = function (c) {
      return c;
    };
    b.prototype.reduce = function (c) {
      c.divRemTo(this.m, null, c);
    };
    b.prototype.mulTo = function (c, h, f) {
      c.multiplyTo(h, f);
      this.reduce(f);
    };
    b.prototype.sqrTo = function (c, h) {
      c.squareTo(h);
      this.reduce(h);
    };
    g.prototype.convert = function (c) {
      var h = E();
      return c.abs().dlShiftTo(this.m.t, h), h.divRemTo(this.m, null, h), 0 > c.s && 0 < h.compareTo(n.ZERO) && this.m.subTo(h, h), h;
    };
    g.prototype.revert = function (c) {
      var h = E();
      return c.copyTo(h), this.reduce(h), h;
    };
    g.prototype.reduce = function (c) {
      for (; c.t <= this.mt2; ) c.data[c.t++] = 0;
      for (var h = 0; h < this.m.t; ++h) {
        var f = 32767 & c.data[h],
          r = (f * this.mpl + (((f * this.mph + (c.data[h] >> 15) * this.mpl) & this.um) << 15)) & c.DM;
        f = h + this.m.t;
        for (c.data[f] += this.m.am(0, r, c, h, 0, this.m.t); c.data[f] >= c.DV; ) (c.data[f] -= c.DV), c.data[++f]++;
      }
      c.clamp();
      c.drShiftTo(this.m.t, c);
      0 <= c.compareTo(this.m) && c.subTo(this.m, c);
    };
    g.prototype.mulTo = function (c, h, f) {
      c.multiplyTo(h, f);
      this.reduce(f);
    };
    g.prototype.sqrTo = function (c, h) {
      c.squareTo(h);
      this.reduce(h);
    };
    n.prototype.copyTo = function (c) {
      for (var h = this.t - 1; 0 <= h; --h) c.data[h] = this.data[h];
      c.t = this.t;
      c.s = this.s;
    };
    n.prototype.fromInt = function (c) {
      this.t = 1;
      this.s = 0 > c ? -1 : 0;
      0 < c ? (this.data[0] = c) : -1 > c ? (this.data[0] = c + this.DV) : (this.t = 0);
    };
    n.prototype.fromString = function (c, h) {
      if (16 == h) h = 4;
      else if (8 == h) h = 3;
      else if (256 == h) h = 8;
      else if (2 == h) h = 1;
      else if (32 == h) h = 5;
      else {
        if (4 != h) return void this.fromRadix(c, h);
        h = 2;
      }
      this.s = this.t = 0;
      for (var f = c.length, r = !1, F = 0; 0 <= --f; ) {
        var M = 8 == h ? 255 & c[f] : d(c, f);
        0 > M
          ? "-" == c.charAt(f) && (r = !0)
          : ((r = !1),
            0 == F
              ? (this.data[this.t++] = M)
              : F + h > this.DB
              ? ((this.data[this.t - 1] |= (M & ((1 << (this.DB - F)) - 1)) << F), (this.data[this.t++] = M >> (this.DB - F)))
              : (this.data[this.t - 1] |= M << F),
            (F += h) >= this.DB && (F -= this.DB));
      }
      8 == h && 0 != (128 & c[0]) && ((this.s = -1), 0 < F && (this.data[this.t - 1] |= ((1 << (this.DB - F)) - 1) << F));
      this.clamp();
      r && n.ZERO.subTo(this, this);
    };
    n.prototype.clamp = function () {
      for (var c = this.s & this.DM; 0 < this.t && this.data[this.t - 1] == c; ) --this.t;
    };
    n.prototype.dlShiftTo = function (c, h) {
      var f;
      for (f = this.t - 1; 0 <= f; --f) h.data[f + c] = this.data[f];
      for (f = c - 1; 0 <= f; --f) h.data[f] = 0;
      h.t = this.t + c;
      h.s = this.s;
    };
    n.prototype.drShiftTo = function (c, h) {
      for (var f = c; f < this.t; ++f) h.data[f - c] = this.data[f];
      h.t = Math.max(this.t - c, 0);
      h.s = this.s;
    };
    n.prototype.lShiftTo = function (c, h) {
      var f = c % this.DB,
        r = this.DB - f,
        F = (1 << r) - 1,
        M = Math.floor(c / this.DB),
        R = (this.s << f) & this.DM;
      for (c = this.t - 1; 0 <= c; --c) (h.data[c + M + 1] = (this.data[c] >> r) | R), (R = (this.data[c] & F) << f);
      for (c = M - 1; 0 <= c; --c) h.data[c] = 0;
      h.data[M] = R;
      h.t = this.t + M + 1;
      h.s = this.s;
      h.clamp();
    };
    n.prototype.rShiftTo = function (c, h) {
      h.s = this.s;
      var f = Math.floor(c / this.DB);
      if (f >= this.t) h.t = 0;
      else {
        c %= this.DB;
        var r = this.DB - c,
          F = (1 << c) - 1;
        h.data[0] = this.data[f] >> c;
        for (var M = f + 1; M < this.t; ++M) (h.data[M - f - 1] |= (this.data[M] & F) << r), (h.data[M - f] = this.data[M] >> c);
        0 < c && (h.data[this.t - f - 1] |= (this.s & F) << r);
        h.t = this.t - f;
        h.clamp();
      }
    };
    n.prototype.subTo = function (c, h) {
      for (var f = 0, r = 0, F = Math.min(c.t, this.t); f < F; )
        (r += this.data[f] - c.data[f]), (h.data[f++] = r & this.DM), (r >>= this.DB);
      if (c.t < this.t) {
        for (r -= c.s; f < this.t; ) (r += this.data[f]), (h.data[f++] = r & this.DM), (r >>= this.DB);
        r += this.s;
      } else {
        for (r += this.s; f < c.t; ) (r -= c.data[f]), (h.data[f++] = r & this.DM), (r >>= this.DB);
        r -= c.s;
      }
      h.s = 0 > r ? -1 : 0;
      -1 > r ? (h.data[f++] = this.DV + r) : 0 < r && (h.data[f++] = r);
      h.t = f;
      h.clamp();
    };
    n.prototype.multiplyTo = function (c, h) {
      var f = this.abs(),
        r = c.abs(),
        F = f.t;
      for (h.t = F + r.t; 0 <= --F; ) h.data[F] = 0;
      for (F = 0; F < r.t; ++F) h.data[F + f.t] = f.am(0, r.data[F], h, F, 0, f.t);
      h.s = 0;
      h.clamp();
      this.s != c.s && n.ZERO.subTo(h, h);
    };
    n.prototype.squareTo = function (c) {
      for (var h = this.abs(), f = (c.t = 2 * h.t); 0 <= --f; ) c.data[f] = 0;
      for (f = 0; f < h.t - 1; ++f) {
        var r = h.am(f, h.data[f], c, 2 * f, 0, 1);
        (c.data[f + h.t] += h.am(f + 1, 2 * h.data[f], c, 2 * f + 1, r, h.t - f - 1)) >= h.DV &&
          ((c.data[f + h.t] -= h.DV), (c.data[f + h.t + 1] = 1));
      }
      0 < c.t && (c.data[c.t - 1] += h.am(f, h.data[f], c, 2 * f, 0, 1));
      c.s = 0;
      c.clamp();
    };
    n.prototype.divRemTo = function (c, h, f) {
      var r = c.abs();
      if (!(0 >= r.t)) {
        var F = this.abs();
        if (F.t < r.t) return null != h && h.fromInt(0), void (null != f && this.copyTo(f));
        null == f && (f = E());
        var M = E(),
          R = this.s;
        c = c.s;
        var m = this.DB - a(r.data[r.t - 1]);
        0 < m ? (r.lShiftTo(m, M), F.lShiftTo(m, f)) : (r.copyTo(M), F.copyTo(f));
        r = M.t;
        F = M.data[r - 1];
        if (0 != F) {
          var u = F * (1 << this.F1) + (1 < r ? M.data[r - 2] >> this.F2 : 0),
            I = this.FV / u;
          u = (1 << this.F1) / u;
          var k = 1 << this.F2,
            y = f.t,
            G = y - r,
            N = null == h ? E() : h;
          M.dlShiftTo(G, N);
          0 <= f.compareTo(N) && ((f.data[f.t++] = 1), f.subTo(N, f));
          n.ONE.dlShiftTo(r, N);
          for (N.subTo(M, M); M.t < r; ) M.data[M.t++] = 0;
          for (; 0 <= --G; ) {
            var Q = f.data[--y] == F ? this.DM : Math.floor(f.data[y] * I + (f.data[y - 1] + k) * u);
            if ((f.data[y] += M.am(0, Q, f, G, 0, r)) < Q) for (M.dlShiftTo(G, N), f.subTo(N, f); f.data[y] < --Q; ) f.subTo(N, f);
          }
          null != h && (f.drShiftTo(r, h), R != c && n.ZERO.subTo(h, h));
          f.t = r;
          f.clamp();
          0 < m && f.rShiftTo(m, f);
          0 > R && n.ZERO.subTo(f, f);
        }
      }
    };
    n.prototype.invDigit = function () {
      if (1 > this.t) return 0;
      var c = this.data[0];
      if (0 == (1 & c)) return 0;
      var h = 3 & c;
      return 0 <
        (h =
          ((h = ((h = ((h = (h * (2 - (15 & c) * h)) & 15) * (2 - (255 & c) * h)) & 255) * (2 - (((65535 & c) * h) & 65535))) & 65535) *
            (2 - ((c * h) % this.DV))) %
          this.DV)
        ? this.DV - h
        : -h;
    };
    n.prototype.isEven = function () {
      return 0 == (0 < this.t ? 1 & this.data[0] : this.s);
    };
    n.prototype.exp = function (c, h) {
      if (4294967295 < c || 1 > c) return n.ONE;
      var f = E(),
        r = E(),
        F = h.convert(this),
        M = a(c) - 1;
      for (F.copyTo(f); 0 <= --M; )
        if ((h.sqrTo(f, r), 0 < (c & (1 << M)))) h.mulTo(r, F, f);
        else {
          var R = f;
          f = r;
          r = R;
        }
      return h.revert(f);
    };
    n.prototype.toString = function (c) {
      if (0 > this.s) return "-" + this.negate().toString(c);
      if (16 == c) c = 4;
      else if (8 == c) c = 3;
      else if (2 == c) c = 1;
      else if (32 == c) c = 5;
      else {
        if (4 != c) return this.toRadix(c);
        c = 2;
      }
      var h,
        f = (1 << c) - 1,
        r = !1,
        F = "",
        M = this.t,
        R = this.DB - ((M * this.DB) % c);
      if (0 < M--)
        for (R < this.DB && 0 < (h = this.data[M] >> R) && ((r = !0), (F = B(h))); 0 <= M; )
          R < c
            ? ((h = (this.data[M] & ((1 << R) - 1)) << (c - R)), (h |= this.data[--M] >> (R += this.DB - c)))
            : ((h = (this.data[M] >> (R -= c)) & f), 0 >= R && ((R += this.DB), --M)),
            0 < h && (r = !0),
            r && (F += B(h));
      return r ? F : "0";
    };
    n.prototype.negate = function () {
      var c = E();
      return n.ZERO.subTo(this, c), c;
    };
    n.prototype.abs = function () {
      return 0 > this.s ? this.negate() : this;
    };
    n.prototype.compareTo = function (c) {
      var h = this.s - c.s;
      if (0 != h) return h;
      var f = this.t;
      if (0 != (h = f - c.t)) return 0 > this.s ? -h : h;
      for (; 0 <= --f; ) if (0 != (h = this.data[f] - c.data[f])) return h;
      return 0;
    };
    n.prototype.bitLength = function () {
      return 0 >= this.t ? 0 : this.DB * (this.t - 1) + a(this.data[this.t - 1] ^ (this.s & this.DM));
    };
    n.prototype.mod = function (c) {
      var h = E();
      return this.abs().divRemTo(c, null, h), 0 > this.s && 0 < h.compareTo(n.ZERO) && c.subTo(h, h), h;
    };
    n.prototype.modPowInt = function (c, h) {
      var f;
      return (f = 256 > c || h.isEven() ? new b(h) : new g(h)), this.exp(c, f);
    };
    n.ZERO = e(0);
    n.ONE = e(1);
    v.prototype.convert = L;
    v.prototype.revert = L;
    v.prototype.mulTo = function (c, h, f) {
      c.multiplyTo(h, f);
    };
    v.prototype.sqrTo = function (c, h) {
      c.squareTo(h);
    };
    K.prototype.convert = function (c) {
      if (0 > c.s || c.t > 2 * this.m.t) return c.mod(this.m);
      if (0 > c.compareTo(this.m)) return c;
      var h = E();
      return c.copyTo(h), this.reduce(h), h;
    };
    K.prototype.revert = function (c) {
      return c;
    };
    K.prototype.reduce = function (c) {
      c.drShiftTo(this.m.t - 1, this.r2);
      c.t > this.m.t + 1 && ((c.t = this.m.t + 1), c.clamp());
      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
      for (this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); 0 > c.compareTo(this.r2); ) c.dAddOffset(1, this.m.t + 1);
      for (c.subTo(this.r2, c); 0 <= c.compareTo(this.m); ) c.subTo(this.m, c);
    };
    K.prototype.mulTo = function (c, h, f) {
      c.multiplyTo(h, f);
      this.reduce(f);
    };
    K.prototype.sqrTo = function (c, h) {
      c.squareTo(h);
      this.reduce(h);
    };
    var z = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
        137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271,
        277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433,
        439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509
      ],
      p = 67108864 / z[z.length - 1];
    n.prototype.chunkSize = function (c) {
      return Math.floor((Math.LN2 * this.DB) / Math.log(c));
    };
    n.prototype.toRadix = function (c) {
      if ((null == c && (c = 10), 0 == this.signum() || 2 > c || 36 < c)) return "0";
      var h = this.chunkSize(c);
      h = Math.pow(c, h);
      var f = e(h),
        r = E(),
        F = E(),
        M = "";
      for (this.divRemTo(f, r, F); 0 < r.signum(); ) (M = (h + F.intValue()).toString(c).substr(1) + M), r.divRemTo(f, r, F);
      return F.intValue().toString(c) + M;
    };
    n.prototype.fromRadix = function (c, h) {
      this.fromInt(0);
      null == h && (h = 10);
      for (var f = this.chunkSize(h), r = Math.pow(h, f), F = !1, M = 0, R = 0, m = 0; m < c.length; ++m) {
        var u = d(c, m);
        0 > u
          ? "-" == c.charAt(m) && 0 == this.signum() && (F = !0)
          : ((R = h * R + u), ++M >= f && (this.dMultiply(r), this.dAddOffset(R, 0), (M = 0), (R = 0)));
      }
      0 < M && (this.dMultiply(Math.pow(h, M)), this.dAddOffset(R, 0));
      F && n.ZERO.subTo(this, this);
    };
    n.prototype.fromNumber = function (c, h, f) {
      if ("number" == typeof h)
        if (2 > c) this.fromInt(1);
        else
          for (
            this.fromNumber(c, f),
              this.testBit(c - 1) || this.bitwiseTo(n.ONE.shiftLeft(c - 1), D, this),
              this.isEven() && this.dAddOffset(1, 0);
            !this.isProbablePrime(h);

          )
            this.dAddOffset(2, 0), this.bitLength() > c && this.subTo(n.ONE.shiftLeft(c - 1), this);
      else {
        f = [];
        var r = 7 & c;
        f.length = 1 + (c >> 3);
        h.nextBytes(f);
        0 < r ? (f[0] &= (1 << r) - 1) : (f[0] = 0);
        this.fromString(f, 256);
      }
    };
    n.prototype.bitwiseTo = function (c, h, f) {
      var r,
        F = Math.min(c.t, this.t);
      for (r = 0; r < F; ++r) f.data[r] = h(this.data[r], c.data[r]);
      if (c.t < this.t) {
        var M = c.s & this.DM;
        for (r = F; r < this.t; ++r) f.data[r] = h(this.data[r], M);
        f.t = this.t;
      } else {
        M = this.s & this.DM;
        for (r = F; r < c.t; ++r) f.data[r] = h(M, c.data[r]);
        f.t = c.t;
      }
      f.s = h(this.s, c.s);
      f.clamp();
    };
    n.prototype.changeBit = function (c, h) {
      c = n.ONE.shiftLeft(c);
      return this.bitwiseTo(c, h, c), c;
    };
    n.prototype.addTo = function (c, h) {
      for (var f = 0, r = 0, F = Math.min(c.t, this.t); f < F; )
        (r += this.data[f] + c.data[f]), (h.data[f++] = r & this.DM), (r >>= this.DB);
      if (c.t < this.t) {
        for (r += c.s; f < this.t; ) (r += this.data[f]), (h.data[f++] = r & this.DM), (r >>= this.DB);
        r += this.s;
      } else {
        for (r += this.s; f < c.t; ) (r += c.data[f]), (h.data[f++] = r & this.DM), (r >>= this.DB);
        r += c.s;
      }
      h.s = 0 > r ? -1 : 0;
      0 < r ? (h.data[f++] = r) : -1 > r && (h.data[f++] = this.DV + r);
      h.t = f;
      h.clamp();
    };
    n.prototype.dMultiply = function (c) {
      this.data[this.t] = this.am(0, c - 1, this, 0, 0, this.t);
      ++this.t;
      this.clamp();
    };
    n.prototype.dAddOffset = function (c, h) {
      if (0 != c) {
        for (; this.t <= h; ) this.data[this.t++] = 0;
        for (this.data[h] += c; this.data[h] >= this.DV; )
          (this.data[h] -= this.DV), ++h >= this.t && (this.data[this.t++] = 0), ++this.data[h];
      }
    };
    n.prototype.multiplyLowerTo = function (c, h, f) {
      var r,
        F = Math.min(this.t + c.t, h);
      f.s = 0;
      for (f.t = F; 0 < F; ) f.data[--F] = 0;
      for (r = f.t - this.t; F < r; ++F) f.data[F + this.t] = this.am(0, c.data[F], f, F, 0, this.t);
      for (r = Math.min(c.t, h); F < r; ++F) this.am(0, c.data[F], f, F, 0, h - F);
      f.clamp();
    };
    n.prototype.multiplyUpperTo = function (c, h, f) {
      --h;
      var r = (f.t = this.t + c.t - h);
      for (f.s = 0; 0 <= --r; ) f.data[r] = 0;
      for (r = Math.max(h - this.t, 0); r < c.t; ++r) f.data[this.t + r - h] = this.am(h - r, c.data[r], f, 0, 0, this.t + r - h);
      f.clamp();
      f.drShiftTo(1, f);
    };
    n.prototype.modInt = function (c) {
      if (0 >= c) return 0;
      var h = this.DV % c,
        f = 0 > this.s ? c - 1 : 0;
      if (0 < this.t)
        if (0 == h) f = this.data[0] % c;
        else for (var r = this.t - 1; 0 <= r; --r) f = (h * f + this.data[r]) % c;
      return f;
    };
    n.prototype.millerRabin = function (c) {
      var h = this.subtract(n.ONE),
        f = h.getLowestSetBit();
      if (0 >= f) return !1;
      for (
        var r,
          F = h.shiftRight(f),
          M = {
            nextBytes: function (u) {
              for (var I = 0; I < u.length; ++I) u[I] = Math.floor(256 * Math.random());
            }
          },
          R = 0;
        R < c;
        ++R
      ) {
        do r = new n(this.bitLength(), M);
        while (0 >= r.compareTo(n.ONE) || 0 <= r.compareTo(h));
        r = r.modPow(F, this);
        if (0 != r.compareTo(n.ONE) && 0 != r.compareTo(h)) {
          for (var m = 1; m++ < f && 0 != r.compareTo(h); ) if (0 == (r = r.modPowInt(2, this)).compareTo(n.ONE)) return !1;
          if (0 != r.compareTo(h)) return !1;
        }
      }
      return !0;
    };
    n.prototype.clone = function () {
      var c = E();
      return this.copyTo(c), c;
    };
    n.prototype.intValue = function () {
      if (0 > this.s) {
        if (1 == this.t) return this.data[0] - this.DV;
        if (0 == this.t) return -1;
      } else {
        if (1 == this.t) return this.data[0];
        if (0 == this.t) return 0;
      }
      return ((this.data[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this.data[0];
    };
    n.prototype.byteValue = function () {
      return 0 == this.t ? this.s : (this.data[0] << 24) >> 24;
    };
    n.prototype.shortValue = function () {
      return 0 == this.t ? this.s : (this.data[0] << 16) >> 16;
    };
    n.prototype.signum = function () {
      return 0 > this.s ? -1 : 0 >= this.t || (1 == this.t && 0 >= this.data[0]) ? 0 : 1;
    };
    n.prototype.toByteArray = function () {
      var c = this.t,
        h = [];
      h[0] = this.s;
      var f,
        r = this.DB - ((c * this.DB) % 8),
        F = 0;
      if (0 < c--)
        for (r < this.DB && (f = this.data[c] >> r) != (this.s & this.DM) >> r && (h[F++] = f | (this.s << (this.DB - r))); 0 <= c; )
          8 > r
            ? ((f = (this.data[c] & ((1 << r) - 1)) << (8 - r)), (f |= this.data[--c] >> (r += this.DB - 8)))
            : ((f = (this.data[c] >> (r -= 8)) & 255), 0 >= r && ((r += this.DB), --c)),
            0 != (128 & f) && (f |= -256),
            0 == F && (128 & this.s) != (128 & f) && ++F,
            (0 < F || f != this.s) && (h[F++] = f);
      return h;
    };
    n.prototype.equals = function (c) {
      return 0 == this.compareTo(c);
    };
    n.prototype.min = function (c) {
      return 0 > this.compareTo(c) ? this : c;
    };
    n.prototype.max = function (c) {
      return 0 < this.compareTo(c) ? this : c;
    };
    n.prototype.and = function (c) {
      var h = E();
      return this.bitwiseTo(c, q, h), h;
    };
    n.prototype.or = function (c) {
      var h = E();
      return this.bitwiseTo(c, D, h), h;
    };
    n.prototype.xor = function (c) {
      var h = E();
      return this.bitwiseTo(c, t, h), h;
    };
    n.prototype.andNot = function (c) {
      var h = E();
      return this.bitwiseTo(c, A, h), h;
    };
    n.prototype.not = function () {
      for (var c = E(), h = 0; h < this.t; ++h) c.data[h] = this.DM & ~this.data[h];
      return (c.t = this.t), (c.s = ~this.s), c;
    };
    n.prototype.shiftLeft = function (c) {
      var h = E();
      return 0 > c ? this.rShiftTo(-c, h) : this.lShiftTo(c, h), h;
    };
    n.prototype.shiftRight = function (c) {
      var h = E();
      return 0 > c ? this.lShiftTo(-c, h) : this.rShiftTo(c, h), h;
    };
    n.prototype.getLowestSetBit = function () {
      for (var c = 0; c < this.t; ++c)
        if (0 != this.data[c]) {
          var h = c * this.DB;
          var f = this.data[c];
          if (0 == f) c = -1;
          else {
            var r = 0;
            c =
              (0 == (65535 & f) && ((f >>= 16), (r += 16)),
              0 == (255 & f) && ((f >>= 8), (r += 8)),
              0 == (15 & f) && ((f >>= 4), (r += 4)),
              0 == (3 & f) && ((f >>= 2), (r += 2)),
              0 == (1 & f) && ++r,
              r);
          }
          return h + c;
        }
      return 0 > this.s ? this.t * this.DB : -1;
    };
    n.prototype.bitCount = function () {
      for (var c = 0, h = this.s & this.DM, f = 0; f < this.t; ++f) {
        for (var r = this.data[f] ^ h, F = 0; 0 != r; ) (r &= r - 1), ++F;
        c += F;
      }
      return c;
    };
    n.prototype.testBit = function (c) {
      var h = Math.floor(c / this.DB);
      return h >= this.t ? 0 != this.s : 0 != (this.data[h] & (1 << c % this.DB));
    };
    n.prototype.setBit = function (c) {
      return this.changeBit(c, D);
    };
    n.prototype.clearBit = function (c) {
      return this.changeBit(c, A);
    };
    n.prototype.flipBit = function (c) {
      return this.changeBit(c, t);
    };
    n.prototype.add = function (c) {
      var h = E();
      return this.addTo(c, h), h;
    };
    n.prototype.subtract = function (c) {
      var h = E();
      return this.subTo(c, h), h;
    };
    n.prototype.multiply = function (c) {
      var h = E();
      return this.multiplyTo(c, h), h;
    };
    n.prototype.divide = function (c) {
      var h = E();
      return this.divRemTo(c, h, null), h;
    };
    n.prototype.remainder = function (c) {
      var h = E();
      return this.divRemTo(c, null, h), h;
    };
    n.prototype.divideAndRemainder = function (c) {
      var h = E(),
        f = E();
      return this.divRemTo(c, h, f), [h, f];
    };
    n.prototype.modPow = function (c, h) {
      var f = c.bitLength(),
        r = e(1);
      if (0 >= f) return r;
      var F = 18 > f ? 1 : 48 > f ? 3 : 144 > f ? 4 : 768 > f ? 5 : 6;
      h = 8 > f ? new b(h) : h.isEven() ? new K(h) : new g(h);
      var M = [],
        R = 3,
        m = F - 1,
        u = (1 << F) - 1;
      if (((M[1] = h.convert(this)), 1 < F)) for (f = E(), h.sqrTo(M[1], f); R <= u; ) (M[R] = E()), h.mulTo(f, M[R - 2], M[R]), (R += 2);
      var I,
        k,
        y = c.t - 1,
        G = !0,
        N = E();
      for (f = a(c.data[y]) - 1; 0 <= y; ) {
        f >= m
          ? (I = (c.data[y] >> (f - m)) & u)
          : ((I = (c.data[y] & ((1 << (f + 1)) - 1)) << (m - f)), 0 < y && (I |= c.data[y - 1] >> (this.DB + f - m)));
        for (R = F; 0 == (1 & I); ) (I >>= 1), --R;
        if ((0 > (f -= R) && ((f += this.DB), --y), G)) M[I].copyTo(r), (G = !1);
        else {
          for (; 1 < R; ) h.sqrTo(r, N), h.sqrTo(N, r), (R -= 2);
          0 < R ? h.sqrTo(r, N) : ((k = r), (r = N), (N = k));
          h.mulTo(N, M[I], r);
        }
        for (; 0 <= y && 0 == (c.data[y] & (1 << f)); ) h.sqrTo(r, N), (k = r), (r = N), (N = k), 0 > --f && ((f = this.DB - 1), --y);
      }
      return h.revert(r);
    };
    n.prototype.modInverse = function (c) {
      var h = c.isEven();
      if ((this.isEven() && h) || 0 == c.signum()) return n.ZERO;
      for (var f = c.clone(), r = this.clone(), F = e(1), M = e(0), R = e(0), m = e(1); 0 != f.signum(); ) {
        for (; f.isEven(); )
          f.rShiftTo(1, f),
            h ? ((F.isEven() && M.isEven()) || (F.addTo(this, F), M.subTo(c, M)), F.rShiftTo(1, F)) : M.isEven() || M.subTo(c, M),
            M.rShiftTo(1, M);
        for (; r.isEven(); )
          r.rShiftTo(1, r),
            h ? ((R.isEven() && m.isEven()) || (R.addTo(this, R), m.subTo(c, m)), R.rShiftTo(1, R)) : m.isEven() || m.subTo(c, m),
            m.rShiftTo(1, m);
        0 <= f.compareTo(r) ? (f.subTo(r, f), h && F.subTo(R, F), M.subTo(m, M)) : (r.subTo(f, r), h && R.subTo(F, R), m.subTo(M, m));
      }
      return 0 != r.compareTo(n.ONE)
        ? n.ZERO
        : 0 <= m.compareTo(c)
        ? m.subtract(c)
        : 0 > m.signum()
        ? (m.addTo(c, m), 0 > m.signum() ? m.add(c) : m)
        : m;
    };
    n.prototype.pow = function (c) {
      return this.exp(c, new v());
    };
    n.prototype.gcd = function (c) {
      var h = 0 > this.s ? this.negate() : this.clone();
      c = 0 > c.s ? c.negate() : c.clone();
      if (0 > h.compareTo(c)) {
        var f = h;
        h = c;
        c = f;
      }
      f = h.getLowestSetBit();
      var r = c.getLowestSetBit();
      if (0 > r) return h;
      f < r && (r = f);
      for (0 < r && (h.rShiftTo(r, h), c.rShiftTo(r, c)); 0 < h.signum(); )
        0 < (f = h.getLowestSetBit()) && h.rShiftTo(f, h),
          0 < (f = c.getLowestSetBit()) && c.rShiftTo(f, c),
          0 <= h.compareTo(c) ? (h.subTo(c, h), h.rShiftTo(1, h)) : (c.subTo(h, c), c.rShiftTo(1, c));
      return 0 < r && c.lShiftTo(r, c), c;
    };
    n.prototype.isProbablePrime = function (c) {
      var h,
        f = this.abs();
      if (1 == f.t && f.data[0] <= z[z.length - 1]) {
        for (h = 0; h < z.length; ++h) if (f.data[0] == z[h]) return !0;
        return !1;
      }
      if (f.isEven()) return !1;
      for (h = 1; h < z.length; ) {
        for (var r = z[h], F = h + 1; F < z.length && r < p; ) r *= z[F++];
        for (r = f.modInt(r); h < F; ) if (0 == r % z[h++]) return !1;
      }
      return f.millerRabin(c);
    };
  },
  "./node_modules/node-forge/lib/kem.js": function (O, w, H) {
    function n(B, d, e, a) {
      B.generate = function (b, g) {
        for (var q = new E.util.ByteBuffer(), D = Math.ceil(g / a) + e, t = new E.util.ByteBuffer(), A = e; A < D; ++A) {
          t.putInt32(A);
          d.start();
          d.update(b + t.getBytes());
          var v = d.digest();
          q.putBytes(v.getBytes(a));
        }
        return q.truncate(q.length() - g), q.getBytes();
      };
    }
    var E = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/util.js");
    H("./node_modules/node-forge/lib/random.js");
    H("./node_modules/node-forge/lib/jsbn.js");
    O.exports = E.kem = E.kem || {};
    var C = E.jsbn.BigInteger;
    E.kem.rsa = {};
    E.kem.rsa.create = function (B, d) {
      var e = (d = d || {}).prng || E.random;
      return {
        encrypt: function (a, b) {
          var g = Math.ceil(a.n.bitLength() / 8);
          do var q = new C(E.util.bytesToHex(e.getBytesSync(g)), 16).mod(a.n);
          while (0 >= q.compareTo(C.ONE));
          g -= (q = E.util.hexToBytes(q.toString(16))).length;
          return (
            0 < g && (q = E.util.fillString(String.fromCharCode(0), g) + q), { encapsulation: a.encrypt(q, "NONE"), key: B.generate(q, b) }
          );
        },
        decrypt: function (a, b, g) {
          a = a.decrypt(b, "NONE");
          return B.generate(a, g);
        }
      };
    };
    E.kem.kdf1 = function (B, d) {
      n(this, B, 0, d || B.digestLength);
    };
    E.kem.kdf2 = function (B, d) {
      n(this, B, 1, d || B.digestLength);
    };
  },
  "./node_modules/node-forge/lib/log.js": function (O, w, H) {
    var n = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/util.js");
    O.exports = n.log = n.log || {};
    n.log.levels = "none error warning info debug verbose max".split(" ");
    var E = {},
      C = [];
    O = null;
    n.log.LEVEL_LOCKED = 2;
    n.log.NO_LEVEL_CHECK = 4;
    n.log.INTERPOLATE = 8;
    for (w = 0; w < n.log.levels.length; ++w) (H = n.log.levels[w]), (E[H] = { index: w, name: H.toUpperCase() });
    n.log.logMessage = function (d) {
      for (var e = E[d.level].index, a = 0; a < C.length; ++a) {
        var b = C[a];
        b.flags & n.log.NO_LEVEL_CHECK ? b.f(d) : e <= E[b.level].index && b.f(b, d);
      }
    };
    n.log.prepareStandard = function (d) {
      "standard" in d || (d.standard = E[d.level].name + " [" + d.category + "] " + d.message);
    };
    n.log.prepareFull = function (d) {
      if (!("full" in d)) {
        var e = [d.message];
        e = e.concat([]);
        d.full = n.util.format.apply(this, e);
      }
    };
    n.log.prepareStandardFull = function (d) {
      "standardFull" in d || (n.log.prepareStandard(d), (d.standardFull = d.standard));
    };
    H = ["error", "warning", "info", "debug", "verbose"];
    for (w = 0; w < H.length; ++w)
      !(function (d) {
        n.log[d] = function (e, a) {
          var b = Array.prototype.slice.call(arguments).slice(2);
          n.log.logMessage({ timestamp: new Date(), level: d, category: e, message: a, arguments: b });
        };
      })(H[w]);
    if (
      ((n.log.makeLogger = function (d) {
        d = { flags: 0, f: d };
        return n.log.setLevel(d, "none"), d;
      }),
      (n.log.setLevel = function (d, e) {
        var a = !1;
        if (d && !(d.flags & n.log.LEVEL_LOCKED))
          for (var b = 0; b < n.log.levels.length; ++b)
            if (e == n.log.levels[b]) {
              d.level = e;
              a = !0;
              break;
            }
        return a;
      }),
      (n.log.lock = function (d, e) {
        void 0 === e || e ? (d.flags |= n.log.LEVEL_LOCKED) : (d.flags &= ~n.log.LEVEL_LOCKED);
      }),
      (n.log.addLogger = function (d) {
        C.push(d);
      }),
      "undefined" != typeof console && "log" in console)
    ) {
      if (console.error && console.warn && console.info && console.debug) {
        var B = { error: console.error, warning: console.warn, info: console.info, debug: console.debug, verbose: console.debug };
        O = function (d, e) {
          n.log.prepareStandard(e);
          d = B[e.level];
          var a = [e.standard];
          a = a.concat(e.arguments.slice());
          d.apply(console, a);
        };
      } else
        O = function (d, e) {
          n.log.prepareStandardFull(e);
          console.log(e.standardFull);
        };
      O = n.log.makeLogger(O);
      n.log.setLevel(O, "debug");
      n.log.addLogger(O);
    } else console = { log: function () {} };
    null !== O &&
      "undefined" != typeof window &&
      window.location &&
      ((w = new URL(window.location.href).searchParams),
      (w.has("console.level") && n.log.setLevel(O, w.get("console.level").slice(-1)[0]), w.has("console.lock")) &&
        "true" == w.get("console.lock").slice(-1)[0] &&
        n.log.lock(O));
    n.log.consoleLogger = O;
  },
  "./node_modules/node-forge/lib/md.all.js": function (O, w, H) {
    O.exports = H("./node_modules/node-forge/lib/md.js");
    H("./node_modules/node-forge/lib/md5.js");
    H("./node_modules/node-forge/lib/sha1.js");
    H("./node_modules/node-forge/lib/sha256.js");
    H("./node_modules/node-forge/lib/sha512.js");
  },
  "./node_modules/node-forge/lib/md.js": function (O, w, H) {
    w = H("./node_modules/node-forge/lib/forge.js");
    O.exports = w.md = w.md || {};
    w.md.algorithms = w.md.algorithms || {};
  },
  "./node_modules/node-forge/lib/md5.js": function (O, w, H) {
    function n(b, g, q) {
      for (var D, t, A, v, L, K, J, l = q.length(); 64 <= l; ) {
        t = b.h0;
        A = b.h1;
        v = b.h2;
        L = b.h3;
        for (J = 0; 16 > J; ++J)
          (g[J] = q.getInt32Le()),
            (D = t + (L ^ (A & (v ^ L))) + e[J] + g[J]),
            (t = L),
            (L = v),
            (v = A),
            (A += (D << (K = d[J])) | (D >>> (32 - K)));
        for (; 32 > J; ++J)
          (D = t + (v ^ (L & (A ^ v))) + e[J] + g[B[J]]), (t = L), (L = v), (v = A), (A += (D << (K = d[J])) | (D >>> (32 - K)));
        for (; 48 > J; ++J) (D = t + (A ^ v ^ L) + e[J] + g[B[J]]), (t = L), (L = v), (v = A), (A += (D << (K = d[J])) | (D >>> (32 - K)));
        for (; 64 > J; ++J)
          (D = t + (v ^ (A | ~L)) + e[J] + g[B[J]]), (t = L), (L = v), (v = A), (A += (D << (K = d[J])) | (D >>> (32 - K)));
        b.h0 = (b.h0 + t) | 0;
        b.h1 = (b.h1 + A) | 0;
        b.h2 = (b.h2 + v) | 0;
        b.h3 = (b.h3 + L) | 0;
        l -= 64;
      }
    }
    var E = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/md.js");
    H("./node_modules/node-forge/lib/util.js");
    O = O.exports = E.md5 = E.md5 || {};
    E.md.md5 = E.md.algorithms.md5 = O;
    O.create = function () {
      a ||
        (function () {
          C = String.fromCharCode(128);
          C += E.util.fillString(String.fromCharCode(0), 64);
          B = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 11, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 5, 8, 11, 14, 1, 4,
            7, 10, 13, 0, 3, 6, 9, 12, 15, 2, 0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2, 9
          ];
          d = [
            7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16,
            23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
          ];
          e = Array(64);
          for (var t = 0; 64 > t; ++t) e[t] = Math.floor(4294967296 * Math.abs(Math.sin(t + 1)));
          a = !0;
        })();
      var b = null,
        g = E.util.createBuffer(),
        q = Array(16),
        D = {
          algorithm: "md5",
          blockLength: 64,
          digestLength: 16,
          messageLength: 0,
          fullMessageLength: null,
          messageLengthSize: 8,
          start: function () {
            D.messageLength = 0;
            D.fullMessageLength = D.messageLength64 = [];
            for (var t = D.messageLengthSize / 4, A = 0; A < t; ++A) D.fullMessageLength.push(0);
            return (g = E.util.createBuffer()), (b = { h0: 1732584193, h1: 4023233417, h2: 2562383102, h3: 271733878 }), D;
          }
        };
      return (
        D.start(),
        (D.update = function (t, A) {
          "utf8" === A && (t = E.util.encodeUtf8(t));
          A = t.length;
          D.messageLength += A;
          A = [(A / 4294967296) >>> 0, A >>> 0];
          for (var v = D.fullMessageLength.length - 1; 0 <= v; --v)
            (D.fullMessageLength[v] += A[1]),
              (A[1] = A[0] + ((D.fullMessageLength[v] / 4294967296) >>> 0)),
              (D.fullMessageLength[v] >>>= 0),
              (A[0] = (A[1] / 4294967296) >>> 0);
          return g.putBytes(t), n(b, q, g), (2048 < g.read || 0 === g.length()) && g.compact(), D;
        }),
        (D.digest = function () {
          var t = E.util.createBuffer();
          t.putBytes(g.bytes());
          t.putBytes(
            C.substr(0, D.blockLength - ((D.fullMessageLength[D.fullMessageLength.length - 1] + D.messageLengthSize) & (D.blockLength - 1)))
          );
          for (var A, v = 0, L = D.fullMessageLength.length - 1; 0 <= L; --L)
            (v = ((A = 8 * D.fullMessageLength[L] + v) / 4294967296) >>> 0), t.putInt32Le(A >>> 0);
          A = { h0: b.h0, h1: b.h1, h2: b.h2, h3: b.h3 };
          n(A, q, t);
          t = E.util.createBuffer();
          return t.putInt32Le(A.h0), t.putInt32Le(A.h1), t.putInt32Le(A.h2), t.putInt32Le(A.h3), t;
        }),
        D
      );
    };
    var C = null,
      B = null,
      d = null,
      e = null,
      a = !1;
  },
  "./node_modules/node-forge/lib/mgf.js": function (O, w, H) {
    w = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/mgf1.js");
    O.exports = w.mgf = w.mgf || {};
    w.mgf.mgf1 = w.mgf1;
  },
  "./node_modules/node-forge/lib/mgf1.js": function (O, w, H) {
    var n = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/util.js");
    n.mgf = n.mgf || {};
    (O.exports = n.mgf.mgf1 = n.mgf1 = n.mgf1 || {}).create = function (E) {
      return {
        generate: function (C, B) {
          for (var d = new n.util.ByteBuffer(), e = Math.ceil(B / E.digestLength), a = 0; a < e; a++) {
            var b = new n.util.ByteBuffer();
            b.putInt32(a);
            E.start();
            E.update(C + b.getBytes());
            d.putBuffer(E.digest());
          }
          return d.truncate(d.length() - B), d.getBytes();
        }
      };
    };
  },
  "./node_modules/node-forge/lib/oids.js": function (O, w, H) {
    function n(C, B) {
      E[C] = B;
      E[B] = C;
    }
    w = H("./node_modules/node-forge/lib/forge.js");
    w.pki = w.pki || {};
    var E = (O.exports = w.pki.oids = w.oids = w.oids || {});
    n("1.2.840.113549.1.1.1", "rsaEncryption");
    n("1.2.840.113549.1.1.4", "md5WithRSAEncryption");
    n("1.2.840.113549.1.1.5", "sha1WithRSAEncryption");
    n("1.2.840.113549.1.1.7", "RSAES-OAEP");
    n("1.2.840.113549.1.1.8", "mgf1");
    n("1.2.840.113549.1.1.9", "pSpecified");
    n("1.2.840.113549.1.1.10", "RSASSA-PSS");
    n("1.2.840.113549.1.1.11", "sha256WithRSAEncryption");
    n("1.2.840.113549.1.1.12", "sha384WithRSAEncryption");
    n("1.2.840.113549.1.1.13", "sha512WithRSAEncryption");
    n("1.3.101.112", "EdDSA25519");
    n("1.2.840.10040.4.3", "dsa-with-sha1");
    n("1.3.14.3.2.7", "desCBC");
    n("1.3.14.3.2.26", "sha1");
    n("1.3.14.3.2.29", "sha1WithRSASignature");
    n("2.16.840.1.101.3.4.2.1", "sha256");
    n("2.16.840.1.101.3.4.2.2", "sha384");
    n("2.16.840.1.101.3.4.2.3", "sha512");
    n("2.16.840.1.101.3.4.2.4", "sha224");
    n("2.16.840.1.101.3.4.2.5", "sha512-224");
    n("2.16.840.1.101.3.4.2.6", "sha512-256");
    n("1.2.840.113549.2.2", "md2");
    n("1.2.840.113549.2.5", "md5");
    n("1.2.840.113549.1.7.1", "data");
    n("1.2.840.113549.1.7.2", "signedData");
    n("1.2.840.113549.1.7.3", "envelopedData");
    n("1.2.840.113549.1.7.4", "signedAndEnvelopedData");
    n("1.2.840.113549.1.7.5", "digestedData");
    n("1.2.840.113549.1.7.6", "encryptedData");
    n("1.2.840.113549.1.9.1", "emailAddress");
    n("1.2.840.113549.1.9.2", "unstructuredName");
    n("1.2.840.113549.1.9.3", "contentType");
    n("1.2.840.113549.1.9.4", "messageDigest");
    n("1.2.840.113549.1.9.5", "signingTime");
    n("1.2.840.113549.1.9.6", "counterSignature");
    n("1.2.840.113549.1.9.7", "challengePassword");
    n("1.2.840.113549.1.9.8", "unstructuredAddress");
    n("1.2.840.113549.1.9.14", "extensionRequest");
    n("1.2.840.113549.1.9.20", "friendlyName");
    n("1.2.840.113549.1.9.21", "localKeyId");
    n("1.2.840.113549.1.9.22.1", "x509Certificate");
    n("1.2.840.113549.1.12.10.1.1", "keyBag");
    n("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag");
    n("1.2.840.113549.1.12.10.1.3", "certBag");
    n("1.2.840.113549.1.12.10.1.4", "crlBag");
    n("1.2.840.113549.1.12.10.1.5", "secretBag");
    n("1.2.840.113549.1.12.10.1.6", "safeContentsBag");
    n("1.2.840.113549.1.5.13", "pkcs5PBES2");
    n("1.2.840.113549.1.5.12", "pkcs5PBKDF2");
    n("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4");
    n("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4");
    n("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC");
    n("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC");
    n("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC");
    n("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC");
    n("1.2.840.113549.2.7", "hmacWithSHA1");
    n("1.2.840.113549.2.8", "hmacWithSHA224");
    n("1.2.840.113549.2.9", "hmacWithSHA256");
    n("1.2.840.113549.2.10", "hmacWithSHA384");
    n("1.2.840.113549.2.11", "hmacWithSHA512");
    n("1.2.840.113549.3.7", "des-EDE3-CBC");
    n("2.16.840.1.101.3.4.1.2", "aes128-CBC");
    n("2.16.840.1.101.3.4.1.22", "aes192-CBC");
    n("2.16.840.1.101.3.4.1.42", "aes256-CBC");
    n("2.5.4.3", "commonName");
    n("2.5.4.4", "surname");
    n("2.5.4.5", "serialNumber");
    n("2.5.4.6", "countryName");
    n("2.5.4.7", "localityName");
    n("2.5.4.8", "stateOrProvinceName");
    n("2.5.4.9", "streetAddress");
    n("2.5.4.10", "organizationName");
    n("2.5.4.11", "organizationalUnitName");
    n("2.5.4.12", "title");
    n("2.5.4.13", "description");
    n("2.5.4.15", "businessCategory");
    n("2.5.4.17", "postalCode");
    n("2.5.4.42", "givenName");
    n("1.3.6.1.4.1.311.60.2.1.2", "jurisdictionOfIncorporationStateOrProvinceName");
    n("1.3.6.1.4.1.311.60.2.1.3", "jurisdictionOfIncorporationCountryName");
    n("2.16.840.1.113730.1.1", "nsCertType");
    n("2.16.840.1.113730.1.13", "nsComment");
    E["2.5.29.1"] = "authorityKeyIdentifier";
    E["2.5.29.2"] = "keyAttributes";
    E["2.5.29.3"] = "certificatePolicies";
    E["2.5.29.4"] = "keyUsageRestriction";
    E["2.5.29.5"] = "policyMapping";
    E["2.5.29.6"] = "subtreesConstraint";
    E["2.5.29.7"] = "subjectAltName";
    E["2.5.29.8"] = "issuerAltName";
    E["2.5.29.9"] = "subjectDirectoryAttributes";
    E["2.5.29.10"] = "basicConstraints";
    E["2.5.29.11"] = "nameConstraints";
    E["2.5.29.12"] = "policyConstraints";
    E["2.5.29.13"] = "basicConstraints";
    n("2.5.29.14", "subjectKeyIdentifier");
    n("2.5.29.15", "keyUsage");
    E["2.5.29.16"] = "privateKeyUsagePeriod";
    n("2.5.29.17", "subjectAltName");
    n("2.5.29.18", "issuerAltName");
    n("2.5.29.19", "basicConstraints");
    E["2.5.29.20"] = "cRLNumber";
    E["2.5.29.21"] = "cRLReason";
    E["2.5.29.22"] = "expirationDate";
    E["2.5.29.23"] = "instructionCode";
    E["2.5.29.24"] = "invalidityDate";
    E["2.5.29.25"] = "cRLDistributionPoints";
    E["2.5.29.26"] = "issuingDistributionPoint";
    E["2.5.29.27"] = "deltaCRLIndicator";
    E["2.5.29.28"] = "issuingDistributionPoint";
    E["2.5.29.29"] = "certificateIssuer";
    E["2.5.29.30"] = "nameConstraints";
    n("2.5.29.31", "cRLDistributionPoints");
    n("2.5.29.32", "certificatePolicies");
    E["2.5.29.33"] = "policyMappings";
    E["2.5.29.34"] = "policyConstraints";
    n("2.5.29.35", "authorityKeyIdentifier");
    E["2.5.29.36"] = "policyConstraints";
    n("2.5.29.37", "extKeyUsage");
    E["2.5.29.46"] = "freshestCRL";
    E["2.5.29.54"] = "inhibitAnyPolicy";
    n("1.3.6.1.4.1.11129.2.4.2", "timestampList");
    n("1.3.6.1.5.5.7.1.1", "authorityInfoAccess");
    n("1.3.6.1.5.5.7.3.1", "serverAuth");
    n("1.3.6.1.5.5.7.3.2", "clientAuth");
    n("1.3.6.1.5.5.7.3.3", "codeSigning");
    n("1.3.6.1.5.5.7.3.4", "emailProtection");
    n("1.3.6.1.5.5.7.3.8", "timeStamping");
  },
  "./node_modules/node-forge/lib/pbe.js": function (O, w, H) {
    function n(t, A) {
      return t.start().update(A).digest().getBytes();
    }
    function E(t) {
      var A;
      if (t) {
        if (!(A = a.oids[e.derToOid(t)]))
          throw (
            ((A = Error("Unsupported PRF OID.")),
            (A.oid = t),
            (A.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"]),
            A)
          );
      } else A = "hmacWithSHA1";
      return C(A);
    }
    function C(t) {
      var A = B.md;
      switch (t) {
        case "hmacWithSHA224":
          A = B.md.sha512;
        case "hmacWithSHA1":
        case "hmacWithSHA256":
        case "hmacWithSHA384":
        case "hmacWithSHA512":
          t = t.substr(8).toLowerCase();
          break;
        default:
          throw (
            ((A = Error("Unsupported PRF algorithm.")),
            (A.algorithm = t),
            (A.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"]),
            A)
          );
      }
      if (!(A && t in A)) throw Error("Unknown hash algorithm: " + t);
      return A[t].create();
    }
    var B = H("./node_modules/node-forge/lib/forge.js");
    if (
      (H("./node_modules/node-forge/lib/aes.js"),
      H("./node_modules/node-forge/lib/asn1.js"),
      H("./node_modules/node-forge/lib/des.js"),
      H("./node_modules/node-forge/lib/md.js"),
      H("./node_modules/node-forge/lib/oids.js"),
      H("./node_modules/node-forge/lib/pbkdf2.js"),
      H("./node_modules/node-forge/lib/pem.js"),
      H("./node_modules/node-forge/lib/random.js"),
      H("./node_modules/node-forge/lib/rc2.js"),
      H("./node_modules/node-forge/lib/rsa.js"),
      H("./node_modules/node-forge/lib/util.js"),
      void 0 === d)
    )
      var d = B.jsbn.BigInteger;
    var e = B.asn1,
      a = (B.pki = B.pki || {});
    O.exports = a.pbe = B.pbe = B.pbe || {};
    var b = a.oids,
      g = {
        name: "EncryptedPrivateKeyInfo",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "AlgorithmIdentifier.algorithm",
                tagClass: e.Class.UNIVERSAL,
                type: e.Type.OID,
                constructed: !1,
                capture: "encryptionOid"
              },
              {
                name: "AlgorithmIdentifier.parameters",
                tagClass: e.Class.UNIVERSAL,
                type: e.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "encryptionParams"
              }
            ]
          },
          {
            name: "EncryptedPrivateKeyInfo.encryptedData",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.OCTETSTRING,
            constructed: !1,
            capture: "encryptedData"
          }
        ]
      },
      q = {
        name: "PBES2Algorithms",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "PBES2Algorithms.keyDerivationFunc",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "PBES2Algorithms.keyDerivationFunc.oid",
                tagClass: e.Class.UNIVERSAL,
                type: e.Type.OID,
                constructed: !1,
                capture: "kdfOid"
              },
              {
                name: "PBES2Algorithms.params",
                tagClass: e.Class.UNIVERSAL,
                type: e.Type.SEQUENCE,
                constructed: !0,
                value: [
                  {
                    name: "PBES2Algorithms.params.salt",
                    tagClass: e.Class.UNIVERSAL,
                    type: e.Type.OCTETSTRING,
                    constructed: !1,
                    capture: "kdfSalt"
                  },
                  {
                    name: "PBES2Algorithms.params.iterationCount",
                    tagClass: e.Class.UNIVERSAL,
                    type: e.Type.INTEGER,
                    constructed: !1,
                    capture: "kdfIterationCount"
                  },
                  {
                    name: "PBES2Algorithms.params.keyLength",
                    tagClass: e.Class.UNIVERSAL,
                    type: e.Type.INTEGER,
                    constructed: !1,
                    optional: !0,
                    capture: "keyLength"
                  },
                  {
                    name: "PBES2Algorithms.params.prf",
                    tagClass: e.Class.UNIVERSAL,
                    type: e.Type.SEQUENCE,
                    constructed: !0,
                    optional: !0,
                    value: [
                      {
                        name: "PBES2Algorithms.params.prf.algorithm",
                        tagClass: e.Class.UNIVERSAL,
                        type: e.Type.OID,
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
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "PBES2Algorithms.encryptionScheme.oid",
                tagClass: e.Class.UNIVERSAL,
                type: e.Type.OID,
                constructed: !1,
                capture: "encOid"
              },
              {
                name: "PBES2Algorithms.encryptionScheme.iv",
                tagClass: e.Class.UNIVERSAL,
                type: e.Type.OCTETSTRING,
                constructed: !1,
                capture: "encIv"
              }
            ]
          }
        ]
      },
      D = {
        name: "pkcs-12PbeParams",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "pkcs-12PbeParams.salt", tagClass: e.Class.UNIVERSAL, type: e.Type.OCTETSTRING, constructed: !1, capture: "salt" },
          { name: "pkcs-12PbeParams.iterations", tagClass: e.Class.UNIVERSAL, type: e.Type.INTEGER, constructed: !1, capture: "iterations" }
        ]
      };
    a.encryptPrivateKeyInfo = function (t, A, v) {
      (v = v || {}).saltSize = v.saltSize || 8;
      v.count = v.count || 2048;
      v.algorithm = v.algorithm || "aes128";
      v.prfAlgorithm = v.prfAlgorithm || "sha1";
      var L;
      var K = B.random.getBytesSync(v.saltSize);
      var J = v.count,
        l = e.integerToDer(J);
      if (0 === v.algorithm.indexOf("aes") || "des" === v.algorithm) {
        switch (v.algorithm) {
          case "aes128":
            var z = (L = 16);
            var p = b["aes128-CBC"];
            var c = B.aes.createEncryptionCipher;
            break;
          case "aes192":
            L = 24;
            z = 16;
            p = b["aes192-CBC"];
            c = B.aes.createEncryptionCipher;
            break;
          case "aes256":
            L = 32;
            z = 16;
            p = b["aes256-CBC"];
            c = B.aes.createEncryptionCipher;
            break;
          case "des":
            z = L = 8;
            p = b.desCBC;
            c = B.des.createEncryptionCipher;
            break;
          default:
            throw (((p = Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm = v.algorithm), p);
        }
        v = "hmacWith" + v.prfAlgorithm.toUpperCase();
        var h = C(v);
        h = B.pkcs5.pbkdf2(A, K, J, L, h);
        A = B.random.getBytesSync(z);
        (J = c(h)).start(A);
        J.update(e.toDer(t));
        J.finish();
        t = J.output.getBytes();
        K = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, K),
          e.create(e.Class.UNIVERSAL, e.Type.INTEGER, !1, l.getBytes())
        ]);
        "hmacWithSHA1" !== v &&
          K.value.push(
            e.create(e.Class.UNIVERSAL, e.Type.INTEGER, !1, B.util.hexToBytes(L.toString(16))),
            e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
              e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids[v]).getBytes()),
              e.create(e.Class.UNIVERSAL, e.Type.NULL, !1, "")
            ])
          );
        K = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(b.pkcs5PBES2).getBytes()),
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
              e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(b.pkcs5PBKDF2).getBytes()),
              K
            ]),
            e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
              e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(p).getBytes()),
              e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, A)
            ])
          ])
        ]);
      } else {
        if ("3des" !== v.algorithm)
          throw (((p = Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm = v.algorithm), p);
        L = 24;
        p = new B.util.ByteBuffer(K);
        h = a.pbe.generatePkcs12Key(A, p, 1, J, L);
        A = a.pbe.generatePkcs12Key(A, p, 2, J, L);
        (J = B.des.createEncryptionCipher(h)).start(A);
        J.update(e.toDer(t));
        J.finish();
        t = J.output.getBytes();
        K = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(b["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()),
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, K),
            e.create(e.Class.UNIVERSAL, e.Type.INTEGER, !1, l.getBytes())
          ])
        ]);
      }
      return e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [K, e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, t)]);
    };
    a.decryptPrivateKeyInfo = function (t, A) {
      var v = null,
        L = {},
        K = [];
      if (!e.validate(t, g, L, K))
        throw (
          ((v = Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.")), (v.errors = K), v)
        );
      K = e.derToOid(L.encryptionOid);
      A = a.pbe.getCipher(K, L.encryptionParams, A);
      L = B.util.createBuffer(L.encryptedData);
      return A.update(L), A.finish() && (v = e.fromDer(A.output)), v;
    };
    a.encryptedPrivateKeyToPem = function (t, A) {
      t = { type: "ENCRYPTED PRIVATE KEY", body: e.toDer(t).getBytes() };
      return B.pem.encode(t, { maxline: A });
    };
    a.encryptedPrivateKeyFromPem = function (t) {
      t = B.pem.decode(t)[0];
      if ("ENCRYPTED PRIVATE KEY" !== t.type) {
        var A = Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');
        throw ((A.headerType = t.type), A);
      }
      if (t.procType && "ENCRYPTED" === t.procType.type) throw Error("Could not convert encrypted private key from PEM; PEM is encrypted.");
      return e.fromDer(t.body);
    };
    a.encryptRsaPrivateKey = function (t, A, v) {
      if (!(v = v || {}).legacy)
        return (t = a.wrapRsaPrivateKey(a.privateKeyToAsn1(t))), (t = a.encryptPrivateKeyInfo(t, A, v)), a.encryptedPrivateKeyToPem(t);
      switch (v.algorithm) {
        case "aes128":
          v = "AES-128-CBC";
          var L = 16;
          var K = B.random.getBytesSync(16);
          var J = B.aes.createEncryptionCipher;
          break;
        case "aes192":
          v = "AES-192-CBC";
          L = 24;
          K = B.random.getBytesSync(16);
          J = B.aes.createEncryptionCipher;
          break;
        case "aes256":
          v = "AES-256-CBC";
          L = 32;
          K = B.random.getBytesSync(16);
          J = B.aes.createEncryptionCipher;
          break;
        case "3des":
          v = "DES-EDE3-CBC";
          L = 24;
          K = B.random.getBytesSync(8);
          J = B.des.createEncryptionCipher;
          break;
        case "des":
          v = "DES-CBC";
          L = 8;
          K = B.random.getBytesSync(8);
          J = B.des.createEncryptionCipher;
          break;
        default:
          throw (
            ((t = Error('Could not encrypt RSA private key; unsupported encryption algorithm "' + v.algorithm + '".')),
            (t.algorithm = v.algorithm),
            t)
          );
      }
      A = J(B.pbe.opensslDeriveBytes(A, K.substr(0, 8), L));
      A.start(K);
      A.update(e.toDer(a.privateKeyToAsn1(t)));
      A.finish();
      t = {
        type: "RSA PRIVATE KEY",
        procType: { version: "4", type: "ENCRYPTED" },
        dekInfo: { algorithm: v, parameters: B.util.bytesToHex(K).toUpperCase() },
        body: A.output.getBytes()
      };
      return B.pem.encode(t);
    };
    a.decryptRsaPrivateKey = function (t, A) {
      var v = null;
      t = B.pem.decode(t)[0];
      if ("ENCRYPTED PRIVATE KEY" !== t.type && "PRIVATE KEY" !== t.type && "RSA PRIVATE KEY" !== t.type)
        throw (
          (((J = Error(
            'Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".'
          )).headerType = J),
          J)
        );
      if (t.procType && "ENCRYPTED" === t.procType.type) {
        switch (t.dekInfo.algorithm) {
          case "DES-CBC":
            var L = 8;
            var K = B.des.createDecryptionCipher;
            break;
          case "DES-EDE3-CBC":
            L = 24;
            K = B.des.createDecryptionCipher;
            break;
          case "AES-128-CBC":
            L = 16;
            K = B.aes.createDecryptionCipher;
            break;
          case "AES-192-CBC":
            L = 24;
            K = B.aes.createDecryptionCipher;
            break;
          case "AES-256-CBC":
            L = 32;
            K = B.aes.createDecryptionCipher;
            break;
          case "RC2-40-CBC":
            L = 5;
            K = function (l) {
              return B.rc2.createDecryptionCipher(l, 40);
            };
            break;
          case "RC2-64-CBC":
            L = 8;
            K = function (l) {
              return B.rc2.createDecryptionCipher(l, 64);
            };
            break;
          case "RC2-128-CBC":
            L = 16;
            K = function (l) {
              return B.rc2.createDecryptionCipher(l, 128);
            };
            break;
          default:
            var J;
            throw (
              (((J = Error('Could not decrypt private key; unsupported encryption algorithm "' + t.dekInfo.algorithm + '".')).algorithm =
                t.dekInfo.algorithm),
              J)
            );
        }
        J = B.util.hexToBytes(t.dekInfo.parameters);
        L = K(B.pbe.opensslDeriveBytes(A, J.substr(0, 8), L));
        if ((L.start(J), L.update(B.util.createBuffer(t.body)), !L.finish())) return v;
        v = L.output.getBytes();
      } else v = t.body;
      return (
        null !== (v = "ENCRYPTED PRIVATE KEY" === t.type ? a.decryptPrivateKeyInfo(e.fromDer(v), A) : e.fromDer(v)) &&
          (v = a.privateKeyFromAsn1(v)),
        v
      );
    };
    a.pbe.generatePkcs12Key = function (t, A, v, L, K, J) {
      var l, z;
      if (null == J) {
        if (!("sha1" in B.md)) throw Error('"sha1" hash algorithm unavailable.');
        J = B.md.sha1.create();
      }
      var p = J.digestLength,
        c = J.blockLength,
        h = new B.util.ByteBuffer(),
        f = new B.util.ByteBuffer();
      if (null != t) {
        for (z = 0; z < t.length; z++) f.putInt16(t.charCodeAt(z));
        f.putInt16(0);
      }
      t = f.length();
      var r = A.length(),
        F = new B.util.ByteBuffer();
      F.fillWithByte(v, c);
      var M = c * Math.ceil(r / c);
      v = new B.util.ByteBuffer();
      for (z = 0; z < M; z++) v.putByte(A.at(z % r));
      M = c * Math.ceil(t / c);
      A = new B.util.ByteBuffer();
      for (z = 0; z < M; z++) A.putByte(f.at(z % t));
      f = v;
      f.putBuffer(A);
      A = Math.ceil(K / p);
      for (v = 1; v <= A; v++) {
        M = new B.util.ByteBuffer();
        M.putBytes(F.bytes());
        M.putBytes(f.bytes());
        for (z = 0; z < L; z++) J.start(), J.update(M.getBytes()), (M = J.digest());
        var R = new B.util.ByteBuffer();
        for (z = 0; z < c; z++) R.putByte(M.at(z % p));
        var m = Math.ceil(r / c) + Math.ceil(t / c),
          u = new B.util.ByteBuffer();
        for (l = 0; l < m; l++) {
          var I = new B.util.ByteBuffer(f.getBytes(c)),
            k = 511;
          for (z = R.length() - 1; 0 <= z; z--) (k >>= 8), (k += R.at(z) + I.at(z)), I.setAt(z, 255 & k);
          u.putBuffer(I);
        }
        f = u;
        h.putBuffer(M);
      }
      return h.truncate(h.length() - K), h;
    };
    a.pbe.getCipher = function (t, A, v) {
      switch (t) {
        case a.oids.pkcs5PBES2:
          return a.pbe.getCipherForPBES2(t, A, v);
        case a.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
        case a.oids["pbewithSHAAnd40BitRC2-CBC"]:
          return a.pbe.getCipherForPKCS12PBE(t, A, v);
        default:
          throw (
            ((A = Error("Cannot read encrypted PBE data block. Unsupported OID.")),
            (A.oid = t),
            (A.supportedOids = ["pkcs5PBES2", "pbeWithSHAAnd3-KeyTripleDES-CBC", "pbewithSHAAnd40BitRC2-CBC"]),
            A)
          );
      }
    };
    a.pbe.getCipherForPBES2 = function (t, A, v) {
      var L,
        K = {};
      t = [];
      if (!e.validate(A, q, K, t))
        throw (
          (((L = Error(
            "Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo."
          )).errors = t),
          L)
        );
      if ((t = e.derToOid(K.kdfOid)) !== a.oids.pkcs5PBKDF2)
        throw (
          (((L = Error("Cannot read encrypted private key. Unsupported key derivation function OID.")).oid = t),
          (L.supportedOids = ["pkcs5PBKDF2"]),
          L)
        );
      if (
        (t = e.derToOid(K.encOid)) !== a.oids["aes128-CBC"] &&
        t !== a.oids["aes192-CBC"] &&
        t !== a.oids["aes256-CBC"] &&
        t !== a.oids["des-EDE3-CBC"] &&
        t !== a.oids.desCBC
      )
        throw (
          (((L = Error("Cannot read encrypted private key. Unsupported encryption scheme OID.")).oid = t),
          (L.supportedOids = ["aes128-CBC", "aes192-CBC", "aes256-CBC", "des-EDE3-CBC", "desCBC"]),
          L)
        );
      A = K.kdfSalt;
      L = B.util.createBuffer(K.kdfIterationCount);
      switch (((L = L.getInt(L.length() << 3)), a.oids[t])) {
        case "aes128-CBC":
          var J = 16;
          var l = B.aes.createDecryptionCipher;
          break;
        case "aes192-CBC":
          J = 24;
          l = B.aes.createDecryptionCipher;
          break;
        case "aes256-CBC":
          J = 32;
          l = B.aes.createDecryptionCipher;
          break;
        case "des-EDE3-CBC":
          J = 24;
          l = B.des.createDecryptionCipher;
          break;
        case "desCBC":
          (J = 8), (l = B.des.createDecryptionCipher);
      }
      t = E(K.prfOid);
      v = B.pkcs5.pbkdf2(v, A, L, J, t);
      K = K.encIv;
      l = l(v);
      return l.start(K), l;
    };
    a.pbe.getCipherForPKCS12PBE = function (t, A, v) {
      var L = {},
        K = [];
      if (!e.validate(A, D, L, K))
        throw (
          (((l = Error(
            "Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo."
          )).errors = K),
          l)
        );
      A = B.util.createBuffer(L.salt);
      K = B.util.createBuffer(L.iterations);
      switch (((K = K.getInt(K.length() << 3)), t)) {
        case a.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
          var J = 24;
          t = 8;
          l = B.des.startDecrypting;
          break;
        case a.oids["pbewithSHAAnd40BitRC2-CBC"]:
          J = 5;
          t = 8;
          l = function (z, p) {
            z = B.rc2.createDecryptionCipher(z, 40);
            return z.start(p, null), z;
          };
          break;
        default:
          var l;
          throw (((l = Error("Cannot read PKCS #12 PBE data block. Unsupported OID.")).oid = t), l);
      }
      L = E(L.prfOid);
      J = a.pbe.generatePkcs12Key(v, A, 1, K, J, L);
      return L.start(), l(J, a.pbe.generatePkcs12Key(v, A, 2, K, t, L));
    };
    a.pbe.opensslDeriveBytes = function (t, A, v, L) {
      if (null == L) {
        if (!("md5" in B.md)) throw Error('"md5" hash algorithm unavailable.');
        L = B.md.md5.create();
      }
      null === A && (A = "");
      for (var K = [n(L, t + A)], J = 16, l = 1; J < v; ++l, J += 16) K.push(n(L, K[l - 1] + t + A));
      return K.join("").substr(0, v);
    };
  },
  "./node_modules/node-forge/lib/pbkdf2.js": function (O, w, H) {
    (function (n) {
      var E = H("./node_modules/node-forge/lib/forge.js");
      H("./node_modules/node-forge/lib/hmac.js");
      H("./node_modules/node-forge/lib/md.js");
      H("./node_modules/node-forge/lib/util.js");
      var C,
        B = (E.pkcs5 = E.pkcs5 || {});
      E.util.isNodejs && !E.options.usePureJavaScript && (C = H(0));
      O.exports =
        E.pbkdf2 =
        B.pbkdf2 =
          function (d, e, a, b, g, q) {
            function D() {
              if (z > v) return q(null, l);
              K.start(null, null);
              K.update(e);
              K.update(E.util.int32ToBytes(z));
              p = J = K.digest().getBytes();
              c = 2;
              t();
            }
            function t() {
              if (c <= a)
                return (
                  K.start(null, null),
                  K.update(J),
                  (h = K.digest().getBytes()),
                  (p = E.util.xorBytes(p, h, A)),
                  (J = h),
                  ++c,
                  E.util.setImmediate(t)
                );
              l += z < v ? p : p.substr(0, L);
              ++z;
              D();
            }
            if (
              ("function" == typeof g && ((q = g), (g = null)),
              E.util.isNodejs &&
                !E.options.usePureJavaScript &&
                C.pbkdf2 &&
                (null === g || "object" != typeof g) &&
                (4 < C.pbkdf2Sync.length || !g || "sha1" === g))
            )
              return (
                "string" != typeof g && (g = "sha1"),
                (d = n.from(d, "binary")),
                (e = n.from(e, "binary")),
                q
                  ? 4 === C.pbkdf2Sync.length
                    ? C.pbkdf2(d, e, a, b, function (f, r) {
                        if (f) return q(f);
                        q(null, r.toString("binary"));
                      })
                    : C.pbkdf2(d, e, a, b, g, function (f, r) {
                        if (f) return q(f);
                        q(null, r.toString("binary"));
                      })
                  : 4 === C.pbkdf2Sync.length
                  ? C.pbkdf2Sync(d, e, a, b).toString("binary")
                  : C.pbkdf2Sync(d, e, a, b, g).toString("binary")
              );
            if ((null == g && (g = "sha1"), "string" == typeof g)) {
              if (!(g in E.md.algorithms)) throw Error("Unknown hash algorithm: " + g);
              g = E.md[g].create();
            }
            var A = g.digestLength;
            if (b > 4294967295 * A) {
              d = Error("Derived key is too long.");
              if (q) return q(d);
              throw d;
            }
            var v = Math.ceil(b / A),
              L = b - (v - 1) * A,
              K = E.hmac.create();
            K.start(g, d);
            var J,
              l = "";
            if (!q) {
              for (var z = 1; z <= v; ++z) {
                K.start(null, null);
                K.update(e);
                K.update(E.util.int32ToBytes(z));
                var p = (J = K.digest().getBytes());
                for (var c = 2; c <= a; ++c) {
                  K.start(null, null);
                  K.update(J);
                  var h = K.digest().getBytes();
                  p = E.util.xorBytes(p, h, A);
                  J = h;
                }
                l += z < v ? p : p.substr(0, L);
              }
              return l;
            }
            z = 1;
            D();
          };
    }).call(this, H("./node_modules/buffer/index.js").Buffer);
  },
  "./node_modules/node-forge/lib/pem.js": function (O, w, H) {
    function n(C) {
      for (
        var B = C.name + ": ",
          d = [],
          e = function (b, g) {
            return " " + g;
          },
          a = 0;
        a < C.values.length;
        ++a
      )
        d.push(C.values[a].replace(/^(\S+\r\n)/, e));
      B += d.join(",") + "\r\n";
      d = 0;
      C = -1;
      for (a = 0; a < B.length; ++a, ++d)
        65 < d && -1 !== C
          ? ((d = B[C]),
            "," === d ? (++C, (B = B.substr(0, C) + "\r\n " + B.substr(C))) : (B = B.substr(0, C) + "\r\n" + d + B.substr(C + 1)),
            (d = a - C - 1),
            (C = -1),
            ++a)
          : (" " !== B[a] && "\t" !== B[a] && "," !== B[a]) || (C = a);
      return B;
    }
    var E = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/util.js");
    O = O.exports = E.pem = E.pem || {};
    O.encode = function (C, B) {
      B = B || {};
      var d,
        e = "-----BEGIN " + C.type + "-----\r\n";
      if (
        (C.procType && (e += n({ name: "Proc-Type", values: [String(C.procType.version), C.procType.type] })),
        C.contentDomain && (e += n({ name: "Content-Domain", values: [C.contentDomain] })),
        C.dekInfo &&
          ((d = { name: "DEK-Info", values: [C.dekInfo.algorithm] }),
          C.dekInfo.parameters && d.values.push(C.dekInfo.parameters),
          (e += n(d))),
        C.headers)
      )
        for (d = 0; d < C.headers.length; ++d) e += n(C.headers[d]);
      return (
        C.procType && (e += "\r\n"), (e += E.util.encode64(C.body, B.maxline || 64) + "\r\n"), e + ("-----END " + C.type + "-----\r\n")
      );
    };
    O.decode = function (C) {
      for (
        var B,
          d = [],
          e = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,
          a = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,
          b = /\r?\n/;
        (B = e.exec(C));

      ) {
        var g = B[1];
        "NEW CERTIFICATE REQUEST" === g && (g = "CERTIFICATE REQUEST");
        g = { type: g, procType: null, contentDomain: null, dekInfo: null, headers: [], body: E.util.decode64(B[3]) };
        if ((d.push(g), B[2])) {
          for (var q = B[2].split(b), D = 0; B && D < q.length; ) {
            B = q[D].replace(/\s+$/, "");
            for (var t = D + 1; t < q.length; ++t) {
              var A = q[t];
              if (!/\s/.test(A[0])) break;
              B += A;
              D = t;
            }
            if ((B = B.match(a))) {
              t = { name: B[1], values: [] };
              A = B[2].split(",");
              for (var v = 0; v < A.length; ++v) t.values.push(A[v].replace(/^\s+/, ""));
              if (g.procType)
                if (g.contentDomain || "Content-Domain" !== t.name)
                  if (g.dekInfo || "DEK-Info" !== t.name) g.headers.push(t);
                  else {
                    if (0 === t.values.length)
                      throw Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');
                    g.dekInfo = { algorithm: A[0], parameters: A[1] || null };
                  }
                else g.contentDomain = A[0] || "";
              else {
                if ("Proc-Type" !== t.name)
                  throw Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');
                if (2 !== t.values.length) throw Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');
                g.procType = { version: A[0], type: A[1] };
              }
            }
            ++D;
          }
          if ("ENCRYPTED" === g.procType && !g.dekInfo)
            throw Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".');
        }
      }
      if (0 === d.length) throw Error("Invalid PEM formatted message.");
      return d;
    };
  },
  "./node_modules/node-forge/lib/pkcs1.js": function (O, w, H) {
    function n(C, B, d) {
      d || (d = E.md.sha1.create());
      for (var e = "", a = Math.ceil(B / d.digestLength), b = 0; b < a; ++b) {
        var g = String.fromCharCode((b >> 24) & 255, (b >> 16) & 255, (b >> 8) & 255, 255 & b);
        d.start();
        d.update(C + g);
        e += d.digest().getBytes();
      }
      return e.substring(0, B);
    }
    var E = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/util.js");
    H("./node_modules/node-forge/lib/random.js");
    H("./node_modules/node-forge/lib/sha1.js");
    O = O.exports = E.pkcs1 = E.pkcs1 || {};
    O.encode_rsa_oaep = function (C, B, d, e, a) {
      var b, g, q, D;
      "string" == typeof d
        ? ((b = d), (g = e || void 0), (q = a || void 0))
        : d && ((b = d.label || void 0), (g = d.seed || void 0), (q = d.md || void 0), d.mgf1 && d.mgf1.md && (D = d.mgf1.md));
      q ? q.start() : (q = E.md.sha1.create());
      D || (D = q);
      C = Math.ceil(C.n.bitLength() / 8);
      e = C - 2 * q.digestLength - 2;
      if (B.length > e) throw (((t = Error("RSAES-OAEP input message length is too long.")).length = B.length), (t.maxLength = e), t);
      b || (b = "");
      q.update(b, "raw");
      b = q.digest();
      d = "";
      e -= B.length;
      for (a = 0; a < e; a++) d += "\x00";
      B = b.getBytes() + d + "\u0001" + B;
      if (g) {
        if (g.length !== q.digestLength) {
          var t;
          throw (
            (((t = Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.")).seedLength = g.length),
            (t.digestLength = q.digestLength),
            t)
          );
        }
      } else g = E.random.getBytes(q.digestLength);
      t = n(g, C - q.digestLength - 1, D);
      t = E.util.xorBytes(B, t, B.length);
      q = n(t, q.digestLength, D);
      return "\x00" + E.util.xorBytes(g, q, g.length) + t;
    };
    O.decode_rsa_oaep = function (C, B, d, e) {
      var a, b, g;
      "string" == typeof d
        ? ((a = d), (b = e || void 0))
        : d && ((a = d.label || void 0), (b = d.md || void 0), d.mgf1 && d.mgf1.md && (g = d.mgf1.md));
      C = Math.ceil(C.n.bitLength() / 8);
      if (B.length !== C)
        throw (((q = Error("RSAES-OAEP encoded message length is invalid.")).length = B.length), (q.expectedLength = C), q);
      if ((void 0 === b ? (b = E.md.sha1.create()) : b.start(), g || (g = b), C < 2 * b.digestLength + 2))
        throw Error("RSAES-OAEP key is too short for the hash function.");
      a || (a = "");
      b.update(a, "raw");
      a = b.digest().getBytes();
      q = B.charAt(0);
      d = B.substring(1, b.digestLength + 1);
      B = B.substring(1 + b.digestLength);
      e = n(B, b.digestLength, g);
      d = E.util.xorBytes(d, e, d.length);
      g = n(d, C - b.digestLength - 1, g);
      g = E.util.xorBytes(B, g, B.length);
      B = g.substring(0, b.digestLength);
      var q = "\x00" !== q;
      for (C = 0; C < b.digestLength; ++C) q |= a.charAt(C) !== B.charAt(C);
      a = 1;
      for (b = B = b.digestLength; b < g.length; b++) (C = g.charCodeAt(b)), (d = (1 & C) ^ 1), (q |= C & (a ? 65534 : 0)), (B += a &= d);
      if (q || 1 !== g.charCodeAt(B)) throw Error("Invalid RSAES-OAEP padding.");
      return g.substring(B + 1);
    };
  },
  "./node_modules/node-forge/lib/pkcs12.js": function (O, w, H) {
    function n(v, L, K, J) {
      for (var l = [], z = 0; z < v.length; z++)
        for (var p = 0; p < v[z].safeBags.length; p++) {
          var c = v[z].safeBags[p];
          (void 0 !== J && c.type !== J) ||
            (null !== L ? void 0 !== c.attributes[L] && 0 <= c.attributes[L].indexOf(K) && l.push(c) : l.push(c));
        }
      return l;
    }
    function E(v) {
      if (v.composed || v.constructed) {
        for (var L = d.util.createBuffer(), K = 0; K < v.value.length; ++K) L.putBytes(v.value[K].value);
        v.composed = v.constructed = !1;
        v.value = L.getBytes();
      }
      return v;
    }
    function C(v, L, K) {
      if (!L && 0 === v.length) return [];
      if ((v = e.fromDer(v, L)).tagClass !== e.Class.UNIVERSAL || v.type !== e.Type.SEQUENCE || !0 !== v.constructed)
        throw Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");
      for (var J = [], l = 0; l < v.value.length; l++) {
        var z = {},
          p = [];
        if (!e.validate(v.value[l], D, z, p)) throw (((F = Error("Cannot read SafeBag.")).errors = p), F);
        var c = { type: e.derToOid(z.bagId), attributes: B(z.bagAttributes) };
        J.push(c);
        var h = z.bagValue.value[0];
        switch (c.type) {
          case a.oids.pkcs8ShroudedKeyBag:
            if (null === (h = a.decryptPrivateKeyInfo(h, K))) throw Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");
          case a.oids.keyBag:
            try {
              c.key = a.privateKeyFromAsn1(h);
            } catch (M) {
              (c.key = null), (c.asn1 = h);
            }
            continue;
          case a.oids.certBag:
            var f = A;
            var r = function () {
              if (e.derToOid(z.certId) !== a.oids.x509Certificate) {
                var M = Error("Unsupported certificate type, only X.509 supported.");
                throw ((M.oid = e.derToOid(z.certId)), M);
              }
              M = e.fromDer(z.cert, L);
              try {
                c.cert = a.certificateFromAsn1(M, !0);
              } catch (R) {
                (c.cert = null), (c.asn1 = M);
              }
            };
            break;
          default:
            var F;
            throw (((F = Error("Unsupported PKCS#12 SafeBag type.")).oid = c.type), F);
        }
        if (void 0 !== f && !e.validate(h, f, z, p)) throw (((F = Error("Cannot read PKCS#12 " + f.name)).errors = p), F);
        r();
      }
      return J;
    }
    function B(v) {
      var L = {};
      if (void 0 !== v)
        for (var K = 0; K < v.length; ++K) {
          var J = {},
            l = [];
          if (!e.validate(v[K], t, J, l)) throw ((v = Error("Cannot read PKCS#12 BagAttribute.")), (v.errors = l), v);
          l = e.derToOid(J.oid);
          if (void 0 !== a.oids[l]) {
            L[a.oids[l]] = [];
            for (var z = 0; z < J.values.length; ++z) L[a.oids[l]].push(J.values[z].value);
          }
        }
      return L;
    }
    var d = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/asn1.js");
    H("./node_modules/node-forge/lib/hmac.js");
    H("./node_modules/node-forge/lib/oids.js");
    H("./node_modules/node-forge/lib/pkcs7asn1.js");
    H("./node_modules/node-forge/lib/pbe.js");
    H("./node_modules/node-forge/lib/random.js");
    H("./node_modules/node-forge/lib/rsa.js");
    H("./node_modules/node-forge/lib/sha1.js");
    H("./node_modules/node-forge/lib/util.js");
    H("./node_modules/node-forge/lib/x509.js");
    var e = d.asn1,
      a = d.pki,
      b = (O.exports = d.pkcs12 = d.pkcs12 || {}),
      g = {
        name: "ContentInfo",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "ContentInfo.contentType", tagClass: e.Class.UNIVERSAL, type: e.Type.OID, constructed: !1, capture: "contentType" },
          { name: "ContentInfo.content", tagClass: e.Class.CONTEXT_SPECIFIC, constructed: !0, captureAsn1: "content" }
        ]
      },
      q = {
        name: "PFX",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "PFX.version", tagClass: e.Class.UNIVERSAL, type: e.Type.INTEGER, constructed: !1, capture: "version" },
          g,
          {
            name: "PFX.macData",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.SEQUENCE,
            constructed: !0,
            optional: !0,
            captureAsn1: "mac",
            value: [
              {
                name: "PFX.macData.mac",
                tagClass: e.Class.UNIVERSAL,
                type: e.Type.SEQUENCE,
                constructed: !0,
                value: [
                  {
                    name: "PFX.macData.mac.digestAlgorithm",
                    tagClass: e.Class.UNIVERSAL,
                    type: e.Type.SEQUENCE,
                    constructed: !0,
                    value: [
                      {
                        name: "PFX.macData.mac.digestAlgorithm.algorithm",
                        tagClass: e.Class.UNIVERSAL,
                        type: e.Type.OID,
                        constructed: !1,
                        capture: "macAlgorithm"
                      },
                      {
                        name: "PFX.macData.mac.digestAlgorithm.parameters",
                        tagClass: e.Class.UNIVERSAL,
                        captureAsn1: "macAlgorithmParameters"
                      }
                    ]
                  },
                  {
                    name: "PFX.macData.mac.digest",
                    tagClass: e.Class.UNIVERSAL,
                    type: e.Type.OCTETSTRING,
                    constructed: !1,
                    capture: "macDigest"
                  }
                ]
              },
              { name: "PFX.macData.macSalt", tagClass: e.Class.UNIVERSAL, type: e.Type.OCTETSTRING, constructed: !1, capture: "macSalt" },
              {
                name: "PFX.macData.iterations",
                tagClass: e.Class.UNIVERSAL,
                type: e.Type.INTEGER,
                constructed: !1,
                optional: !0,
                capture: "macIterations"
              }
            ]
          }
        ]
      },
      D = {
        name: "SafeBag",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "SafeBag.bagId", tagClass: e.Class.UNIVERSAL, type: e.Type.OID, constructed: !1, capture: "bagId" },
          { name: "SafeBag.bagValue", tagClass: e.Class.CONTEXT_SPECIFIC, constructed: !0, captureAsn1: "bagValue" },
          {
            name: "SafeBag.bagAttributes",
            tagClass: e.Class.UNIVERSAL,
            type: e.Type.SET,
            constructed: !0,
            optional: !0,
            capture: "bagAttributes"
          }
        ]
      },
      t = {
        name: "Attribute",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "Attribute.attrId", tagClass: e.Class.UNIVERSAL, type: e.Type.OID, constructed: !1, capture: "oid" },
          { name: "Attribute.attrValues", tagClass: e.Class.UNIVERSAL, type: e.Type.SET, constructed: !0, capture: "values" }
        ]
      },
      A = {
        name: "CertBag",
        tagClass: e.Class.UNIVERSAL,
        type: e.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "CertBag.certId", tagClass: e.Class.UNIVERSAL, type: e.Type.OID, constructed: !1, capture: "certId" },
          {
            name: "CertBag.certValue",
            tagClass: e.Class.CONTEXT_SPECIFIC,
            constructed: !0,
            value: [
              { name: "CertBag.certValue[0]", tagClass: e.Class.UNIVERSAL, type: e.Class.OCTETSTRING, constructed: !1, capture: "cert" }
            ]
          }
        ]
      };
    b.pkcs12FromAsn1 = function (v, L, K) {
      "string" == typeof L ? ((K = L), (L = !0)) : void 0 === L && (L = !0);
      var J = {};
      if (!e.validate(v, q, J, [])) throw (((l = Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.")).errors = l), l);
      var l,
        z = {
          version: J.version.charCodeAt(0),
          safeContents: [],
          getBags: function (f) {
            var r,
              F = {};
            return (
              "localKeyId" in f ? (r = f.localKeyId) : "localKeyIdHex" in f && (r = d.util.hexToBytes(f.localKeyIdHex)),
              void 0 === r && !("friendlyName" in f) && "bagType" in f && (F[f.bagType] = n(z.safeContents, null, null, f.bagType)),
              void 0 !== r && (F.localKeyId = n(z.safeContents, "localKeyId", r, f.bagType)),
              "friendlyName" in f && (F.friendlyName = n(z.safeContents, "friendlyName", f.friendlyName, f.bagType)),
              F
            );
          },
          getBagsByFriendlyName: function (f, r) {
            return n(z.safeContents, "friendlyName", f, r);
          },
          getBagsByLocalKeyId: function (f, r) {
            return n(z.safeContents, "localKeyId", f, r);
          }
        };
      if (3 !== J.version.charCodeAt(0))
        throw (((l = Error("PKCS#12 PFX of version other than 3 not supported.")).version = J.version.charCodeAt(0)), l);
      if (e.derToOid(J.contentType) !== a.oids.data)
        throw (((l = Error("Only PKCS#12 PFX in password integrity mode supported.")).oid = e.derToOid(J.contentType)), l);
      v = J.content.value[0];
      if (v.tagClass !== e.Class.UNIVERSAL || v.type !== e.Type.OCTETSTRING)
        throw Error("PKCS#12 authSafe content data is not an OCTET STRING.");
      if (((v = E(v)), J.mac)) {
        l = null;
        var p = 0,
          c = e.derToOid(J.macAlgorithm);
        switch (c) {
          case a.oids.sha1:
            l = d.md.sha1.create();
            p = 20;
            break;
          case a.oids.sha256:
            l = d.md.sha256.create();
            p = 32;
            break;
          case a.oids.sha384:
            l = d.md.sha384.create();
            p = 48;
            break;
          case a.oids.sha512:
            l = d.md.sha512.create();
            p = 64;
            break;
          case a.oids.md5:
            (l = d.md.md5.create()), (p = 16);
        }
        if (null === l) throw Error("PKCS#12 uses unsupported MAC algorithm: " + c);
        c = new d.util.ByteBuffer(J.macSalt);
        var h = "macIterations" in J ? parseInt(d.util.bytesToHex(J.macIterations), 16) : 1;
        p = b.generateKey(K, c, 3, h, p, l);
        c = d.hmac.create();
        if ((c.start(l, p), c.update(v.value), c.getMac().getBytes() !== J.macDigest))
          throw Error("PKCS#12 MAC could not be verified. Invalid password?");
      }
      return (
        (function (f, r, F, M) {
          if ((r = e.fromDer(r, F)).tagClass !== e.Class.UNIVERSAL || r.type !== e.Type.SEQUENCE || !0 !== r.constructed)
            throw Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");
          for (var R = 0; R < r.value.length; R++) {
            var m = {},
              u = [];
            if (!e.validate(r.value[R], g, m, u)) throw (((N = Error("Cannot read ContentInfo.")).errors = u), N);
            u = { encrypted: !1 };
            var I = m.content.value[0];
            switch (e.derToOid(m.contentType)) {
              case a.oids.data:
                if (I.tagClass !== e.Class.UNIVERSAL || I.type !== e.Type.OCTETSTRING)
                  throw Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
                m = E(I).value;
                break;
              case a.oids.encryptedData:
                var k = void 0,
                  y = M;
                m = {};
                var G = [];
                if (!e.validate(I, d.pkcs7.asn1.encryptedDataValidator, m, G))
                  throw (((k = Error("Cannot read EncryptedContentInfo.")).errors = G), k);
                I = e.derToOid(m.contentType);
                if (I !== a.oids.data) throw (((k = Error("PKCS#12 EncryptedContentInfo ContentType is not Data.")).oid = I), k);
                I = e.derToOid(m.encAlgorithm);
                I = a.pbe.getCipher(I, m.encParameter, y);
                m = E(m.encryptedContentAsn1);
                m = d.util.createBuffer(m.value);
                if ((I.update(m), !I.finish())) throw Error("Failed to decrypt PKCS#12 SafeContents.");
                m = I.output.getBytes();
                u.encrypted = !0;
                break;
              default:
                var N;
                throw (((N = Error("Unsupported PKCS#12 contentType.")).contentType = e.derToOid(m.contentType)), N);
            }
            u.safeBags = C(m, F, M);
            f.safeContents.push(u);
          }
        })(z, v.value, L, K),
        z
      );
    };
    b.toPkcs12Asn1 = function (v, L, K, J) {
      (J = J || {}).saltSize = J.saltSize || 8;
      J.count = J.count || 2048;
      J.algorithm = J.algorithm || J.encAlgorithm || "aes128";
      "useMac" in J || (J.useMac = !0);
      "localKeyId" in J || (J.localKeyId = null);
      "generateLocalKeyId" in J || (J.generateLocalKeyId = !0);
      var l,
        z = J.localKeyId;
      if (null !== z) z = d.util.hexToBytes(z);
      else if (J.generateLocalKeyId)
        if (L) {
          var p = d.util.isArray(L) ? L[0] : L;
          "string" == typeof p && (p = a.certificateFromPem(p));
          (z = d.md.sha1.create()).update(e.toDer(a.certificateToAsn1(p)).getBytes());
          z = z.digest().getBytes();
        } else z = d.random.getBytes(20);
      p = [];
      null !== z &&
        p.push(
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids.localKeyId).getBytes()),
            e.create(e.Class.UNIVERSAL, e.Type.SET, !0, [e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, z)])
          ])
        );
      "friendlyName" in J &&
        p.push(
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids.friendlyName).getBytes()),
            e.create(e.Class.UNIVERSAL, e.Type.SET, !0, [e.create(e.Class.UNIVERSAL, e.Type.BMPSTRING, !1, J.friendlyName)])
          ])
        );
      0 < p.length && (l = e.create(e.Class.UNIVERSAL, e.Type.SET, !0, p));
      z = [];
      p = [];
      null !== L && (p = d.util.isArray(L) ? L : [L]);
      for (var c = [], h = 0; h < p.length; ++h) {
        "string" == typeof (L = p[h]) && (L = a.certificateFromPem(L));
        var f = 0 === h ? l : void 0,
          r = a.certificateToAsn1(L);
        f = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids.certBag).getBytes()),
          e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [
            e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
              e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids.x509Certificate).getBytes()),
              e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, e.toDer(r).getBytes())])
            ])
          ]),
          f
        ]);
        c.push(f);
      }
      0 < c.length &&
        ((L = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, c)),
        (L = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids.data).getBytes()),
          e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, e.toDer(L).getBytes())])
        ])),
        z.push(L));
      null !== v &&
        ((v = a.wrapRsaPrivateKey(a.privateKeyToAsn1(v))),
        (v =
          null === K
            ? e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
                e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids.keyBag).getBytes()),
                e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [v]),
                l
              ])
            : e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
                e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids.pkcs8ShroudedKeyBag).getBytes()),
                e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [a.encryptPrivateKeyInfo(v, K, J)]),
                l
              ])),
        (v = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [v])),
        (v = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids.data).getBytes()),
          e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, e.toDer(v).getBytes())])
        ])),
        z.push(v));
      l = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, z);
      if (J.useMac) {
        z = d.md.sha1.create();
        var F = new d.util.ByteBuffer(d.random.getBytes(J.saltSize));
        J = J.count;
        K = ((v = b.generateKey(K, F, 3, J, 20)), d.hmac.create());
        K.start(z, v);
        K.update(e.toDer(l).getBytes());
        K = K.getMac();
        F = e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
            e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
              e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids.sha1).getBytes()),
              e.create(e.Class.UNIVERSAL, e.Type.NULL, !1, "")
            ]),
            e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, K.getBytes())
          ]),
          e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, F.getBytes()),
          e.create(e.Class.UNIVERSAL, e.Type.INTEGER, !1, e.integerToDer(J).getBytes())
        ]);
      }
      return e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
        e.create(e.Class.UNIVERSAL, e.Type.INTEGER, !1, e.integerToDer(3).getBytes()),
        e.create(e.Class.UNIVERSAL, e.Type.SEQUENCE, !0, [
          e.create(e.Class.UNIVERSAL, e.Type.OID, !1, e.oidToDer(a.oids.data).getBytes()),
          e.create(e.Class.CONTEXT_SPECIFIC, 0, !0, [e.create(e.Class.UNIVERSAL, e.Type.OCTETSTRING, !1, e.toDer(l).getBytes())])
        ]),
        F
      ]);
    };
    b.generateKey = d.pbe.generatePkcs12Key;
  },
  "./node_modules/node-forge/lib/pkcs7.js": function (O, w, H) {
    function n(a) {
      if (a.type === B.pki.oids.contentType) var b = d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(a.value).getBytes());
      else if (a.type === B.pki.oids.messageDigest) b = d.create(d.Class.UNIVERSAL, d.Type.OCTETSTRING, !1, a.value.bytes());
      else if (a.type === B.pki.oids.signingTime) {
        b = new Date("1950-01-01T00:00:00Z");
        var g = new Date("2050-01-01T00:00:00Z"),
          q = a.value;
        if ("string" == typeof q) {
          var D = Date.parse(q);
          q = isNaN(D) ? (13 === q.length ? d.utcTimeToDate(q) : d.generalizedTimeToDate(q)) : new Date(D);
        }
        b =
          q >= b && q < g
            ? d.create(d.Class.UNIVERSAL, d.Type.UTCTIME, !1, d.dateToUtcTime(q))
            : d.create(d.Class.UNIVERSAL, d.Type.GENERALIZEDTIME, !1, d.dateToGeneralizedTime(q));
      }
      return d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
        d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(a.type).getBytes()),
        d.create(d.Class.UNIVERSAL, d.Type.SET, !0, [b])
      ]);
    }
    function E(a, b, g) {
      var q = {};
      if (!d.validate(b, g, q, []))
        throw ((a = Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.")), (a.errors = a), a);
      if (d.derToOid(q.contentType) !== B.pki.oids.data)
        throw Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");
      if (q.encryptedContent) {
        b = "";
        if (B.util.isArray(q.encryptedContent))
          for (g = 0; g < q.encryptedContent.length; ++g) {
            if (q.encryptedContent[g].type !== d.Type.OCTETSTRING)
              throw Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");
            b += q.encryptedContent[g].value;
          }
        else b = q.encryptedContent;
        a.encryptedContent = {
          algorithm: d.derToOid(q.encAlgorithm),
          parameter: B.util.createBuffer(q.encParameter.value),
          content: B.util.createBuffer(b)
        };
      }
      if (q.content) {
        b = "";
        if (B.util.isArray(q.content))
          for (g = 0; g < q.content.length; ++g) {
            if (q.content[g].type !== d.Type.OCTETSTRING)
              throw Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");
            b += q.content[g].value;
          }
        else b = q.content;
        a.content = B.util.createBuffer(b);
      }
      return (a.version = q.version.charCodeAt(0)), (a.rawCapture = q), q;
    }
    function C(a) {
      if (void 0 === a.encryptedContent.key) throw Error("Symmetric key not available.");
      if (void 0 === a.content) {
        switch (a.encryptedContent.algorithm) {
          case B.pki.oids["aes128-CBC"]:
          case B.pki.oids["aes192-CBC"]:
          case B.pki.oids["aes256-CBC"]:
            var b = B.aes.createDecryptionCipher(a.encryptedContent.key);
            break;
          case B.pki.oids.desCBC:
          case B.pki.oids["des-EDE3-CBC"]:
            b = B.des.createDecryptionCipher(a.encryptedContent.key);
            break;
          default:
            throw Error("Unsupported symmetric cipher, OID " + a.encryptedContent.algorithm);
        }
        if ((b.start(a.encryptedContent.parameter), b.update(a.encryptedContent.content), !b.finish()))
          throw Error("Symmetric decryption failed.");
        a.content = b.output;
      }
    }
    var B = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/aes.js");
    H("./node_modules/node-forge/lib/asn1.js");
    H("./node_modules/node-forge/lib/des.js");
    H("./node_modules/node-forge/lib/oids.js");
    H("./node_modules/node-forge/lib/pem.js");
    H("./node_modules/node-forge/lib/pkcs7asn1.js");
    H("./node_modules/node-forge/lib/random.js");
    H("./node_modules/node-forge/lib/util.js");
    H("./node_modules/node-forge/lib/x509.js");
    var d = B.asn1,
      e = (O.exports = B.pkcs7 = B.pkcs7 || {});
    e.messageFromPem = function (a) {
      a = B.pem.decode(a)[0];
      if ("PKCS7" !== a.type) {
        var b = Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');
        throw ((b.headerType = a.type), b);
      }
      if (a.procType && "ENCRYPTED" === a.procType.type) throw Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");
      a = d.fromDer(a.body);
      return e.messageFromAsn1(a);
    };
    e.messageToPem = function (a, b) {
      a = { type: "PKCS7", body: d.toDer(a.toAsn1()).getBytes() };
      return B.pem.encode(a, { maxline: b });
    };
    e.messageFromAsn1 = function (a) {
      var b = {},
        g = [];
      if (!d.validate(a, e.asn1.contentInfoValidator, b, g))
        throw ((b = Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.")), (b.errors = g), b);
      g = d.derToOid(b.contentType);
      switch (g) {
        case B.pki.oids.envelopedData:
          g = e.createEnvelopedData();
          break;
        case B.pki.oids.encryptedData:
          g = e.createEncryptedData();
          break;
        case B.pki.oids.signedData:
          g = e.createSignedData();
          break;
        default:
          throw Error("Cannot read PKCS#7 message. ContentType with OID " + g + " is not (yet) supported.");
      }
      return g.fromAsn1(b.content.value[0]), g;
    };
    e.createSignedData = function () {
      var a = null;
      return (a = {
        type: B.pki.oids.signedData,
        version: 1,
        certificates: [],
        crls: [],
        signers: [],
        digestAlgorithmIdentifiers: [],
        contentInfo: null,
        signerInfos: [],
        fromAsn1: function (b) {
          if (
            (E(a, b, e.asn1.signedDataValidator),
            (a.certificates = []),
            (a.crls = []),
            (a.digestAlgorithmIdentifiers = []),
            (a.contentInfo = null),
            (a.signerInfos = []),
            a.rawCapture.certificates)
          ) {
            b = a.rawCapture.certificates.value;
            for (var g = 0; g < b.length; ++g) a.certificates.push(B.pki.certificateFromAsn1(b[g]));
          }
        },
        toAsn1: function () {
          a.contentInfo || a.sign();
          for (var b = [], g = 0; g < a.certificates.length; ++g) b.push(B.pki.certificateToAsn1(a.certificates[g]));
          g = [];
          var q = d.create(d.Class.CONTEXT_SPECIFIC, 0, !0, [
            d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
              d.create(d.Class.UNIVERSAL, d.Type.INTEGER, !1, d.integerToDer(a.version).getBytes()),
              d.create(d.Class.UNIVERSAL, d.Type.SET, !0, a.digestAlgorithmIdentifiers),
              a.contentInfo
            ])
          ]);
          return (
            0 < b.length && q.value[0].value.push(d.create(d.Class.CONTEXT_SPECIFIC, 0, !0, b)),
            0 < g.length && q.value[0].value.push(d.create(d.Class.CONTEXT_SPECIFIC, 1, !0, g)),
            q.value[0].value.push(d.create(d.Class.UNIVERSAL, d.Type.SET, !0, a.signerInfos)),
            d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
              d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(a.type).getBytes()),
              q
            ])
          );
        },
        addSigner: function (b) {
          var g = b.issuer,
            q = b.serialNumber;
          b.certificate &&
            ((q = b.certificate),
            "string" == typeof q && (q = B.pki.certificateFromPem(q)),
            (g = q.issuer.attributes),
            (q = q.serialNumber));
          var D = b.key;
          if (!D) throw Error("Could not add PKCS#7 signer; no private key specified.");
          "string" == typeof D && (D = B.pki.privateKeyFromPem(D));
          var t = b.digestAlgorithm || B.pki.oids.sha1;
          switch (t) {
            case B.pki.oids.sha1:
            case B.pki.oids.sha256:
            case B.pki.oids.sha384:
            case B.pki.oids.sha512:
            case B.pki.oids.md5:
              break;
            default:
              throw Error("Could not add PKCS#7 signer; unknown message digest algorithm: " + t);
          }
          b = b.authenticatedAttributes || [];
          if (0 < b.length) {
            for (var A = !1, v = !1, L = 0; L < b.length; ++L) {
              var K = b[L];
              if (A || K.type !== B.pki.oids.contentType) {
                if (!v && K.type === B.pki.oids.messageDigest && ((v = !0), A)) break;
              } else if (((A = !0), v)) break;
            }
            if (!A || !v)
              throw Error(
                "Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest."
              );
          }
          a.signers.push({
            key: D,
            version: 1,
            issuer: g,
            serialNumber: q,
            digestAlgorithm: t,
            signatureAlgorithm: B.pki.oids.rsaEncryption,
            signature: null,
            authenticatedAttributes: b,
            unauthenticatedAttributes: []
          });
        },
        sign: function (b) {
          var g;
          ((b = b || {}), "object" != typeof a.content || null === a.contentInfo) &&
            ((a.contentInfo = d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
              d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(B.pki.oids.data).getBytes())
            ])),
            "content" in a &&
              (a.content instanceof B.util.ByteBuffer
                ? (g = a.content.bytes())
                : "string" == typeof a.content && (g = B.util.encodeUtf8(a.content)),
              b.detached
                ? (a.detachedContent = d.create(d.Class.UNIVERSAL, d.Type.OCTETSTRING, !1, g))
                : a.contentInfo.value.push(
                    d.create(d.Class.CONTEXT_SPECIFIC, 0, !0, [d.create(d.Class.UNIVERSAL, d.Type.OCTETSTRING, !1, g)])
                  )));
          0 !== a.signers.length &&
            (function (q) {
              var D = a.detachedContent ? a.detachedContent : (D = a.contentInfo.value[1]).value[0];
              if (!D) throw Error("Could not sign PKCS#7 message; there is no content to sign.");
              var t = d.derToOid(a.contentInfo.value[0].value),
                A = d.toDer(D);
              for (v in (A.getByte(), d.getBerValueLength(A), (A = A.getBytes()), q)) q[v].start().update(A);
              var v = new Date();
              for (D = 0; D < a.signers.length; ++D) {
                var L = a.signers[D];
                if (0 === L.authenticatedAttributes.length) {
                  if (t !== B.pki.oids.data)
                    throw Error(
                      "Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data."
                    );
                } else {
                  L.authenticatedAttributesAsn1 = d.create(d.Class.CONTEXT_SPECIFIC, 0, !0, []);
                  A = d.create(d.Class.UNIVERSAL, d.Type.SET, !0, []);
                  for (var K = 0; K < L.authenticatedAttributes.length; ++K) {
                    var J = L.authenticatedAttributes[K];
                    J.type === B.pki.oids.messageDigest
                      ? (J.value = q[L.digestAlgorithm].digest())
                      : J.type === B.pki.oids.signingTime && (J.value || (J.value = v));
                    A.value.push(n(J));
                    L.authenticatedAttributesAsn1.value.push(n(J));
                  }
                  A = d.toDer(A).getBytes();
                  L.md.start().update(A);
                }
                L.signature = L.key.sign(L.md, "RSASSA-PKCS1-V1_5");
              }
              q = a;
              t = a.signers;
              v = [];
              for (D = 0; D < t.length; ++D) {
                L = v;
                A = L.push;
                K = t[D];
                J = d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
                  d.create(d.Class.UNIVERSAL, d.Type.INTEGER, !1, d.integerToDer(K.version).getBytes()),
                  d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
                    B.pki.distinguishedNameToAsn1({ attributes: K.issuer }),
                    d.create(d.Class.UNIVERSAL, d.Type.INTEGER, !1, B.util.hexToBytes(K.serialNumber))
                  ]),
                  d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
                    d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(K.digestAlgorithm).getBytes()),
                    d.create(d.Class.UNIVERSAL, d.Type.NULL, !1, "")
                  ])
                ]);
                if (
                  (K.authenticatedAttributesAsn1 && J.value.push(K.authenticatedAttributesAsn1),
                  J.value.push(
                    d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
                      d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(K.signatureAlgorithm).getBytes()),
                      d.create(d.Class.UNIVERSAL, d.Type.NULL, !1, "")
                    ])
                  ),
                  J.value.push(d.create(d.Class.UNIVERSAL, d.Type.OCTETSTRING, !1, K.signature)),
                  0 < K.unauthenticatedAttributes.length)
                ) {
                  for (var l = d.create(d.Class.CONTEXT_SPECIFIC, 1, !0, []), z = 0; z < K.unauthenticatedAttributes.length; ++z)
                    l.values.push(n(K.unauthenticatedAttributes[z]));
                  J.value.push(l);
                }
                A.call(L, J);
              }
              q.signerInfos = v;
            })(
              (function () {
                for (var q = {}, D = 0; D < a.signers.length; ++D) {
                  var t = a.signers[D];
                  (A = t.digestAlgorithm) in q || (q[A] = B.md[B.pki.oids[A]].create());
                  0 === t.authenticatedAttributes.length ? (t.md = q[A]) : (t.md = B.md[B.pki.oids[A]].create());
                }
                for (var A in ((a.digestAlgorithmIdentifiers = []), q))
                  a.digestAlgorithmIdentifiers.push(
                    d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
                      d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(A).getBytes()),
                      d.create(d.Class.UNIVERSAL, d.Type.NULL, !1, "")
                    ])
                  );
                return q;
              })()
            );
        },
        verify: function () {
          throw Error("PKCS#7 signature verification not yet implemented.");
        },
        addCertificate: function (b) {
          "string" == typeof b && (b = B.pki.certificateFromPem(b));
          a.certificates.push(b);
        },
        addCertificateRevokationList: function (b) {
          throw Error("PKCS#7 CRL support not yet implemented.");
        }
      });
    };
    e.createEncryptedData = function () {
      var a = null;
      return (a = {
        type: B.pki.oids.encryptedData,
        version: 0,
        encryptedContent: { algorithm: B.pki.oids["aes256-CBC"] },
        fromAsn1: function (b) {
          E(a, b, e.asn1.encryptedDataValidator);
        },
        decrypt: function (b) {
          void 0 !== b && (a.encryptedContent.key = b);
          C(a);
        }
      });
    };
    e.createEnvelopedData = function () {
      var a = null;
      return (a = {
        type: B.pki.oids.envelopedData,
        version: 0,
        recipients: [],
        encryptedContent: { algorithm: B.pki.oids["aes256-CBC"] },
        fromAsn1: function (b) {
          var g = E(a, b, e.asn1.envelopedDataValidator);
          b = a;
          g = g.recipientInfos.value;
          for (var q = [], D = 0; D < g.length; ++D) {
            var t = q,
              A = t.push,
              v = {};
            var L = [];
            if (!d.validate(g[D], e.asn1.recipientInfoValidator, v, L))
              throw ((b = Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.")), (b.errors = L), b);
            L = {
              version: v.version.charCodeAt(0),
              issuer: B.pki.RDNAttributesAsArray(v.issuer),
              serialNumber: B.util.createBuffer(v.serial).toHex(),
              encryptedContent: {
                algorithm: d.derToOid(v.encAlgorithm),
                parameter: v.encParameter ? v.encParameter.value : void 0,
                content: v.encKey
              }
            };
            A.call(t, L);
          }
          b.recipients = q;
        },
        toAsn1: function () {
          for (
            var b = d,
              g = b.create,
              q = d.Class.UNIVERSAL,
              D = d.Type.SEQUENCE,
              t = d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(a.type).getBytes()),
              A = d,
              v = A.create,
              L = d.Class.CONTEXT_SPECIFIC,
              K = d,
              J = K.create,
              l = d.Class.UNIVERSAL,
              z = d.Type.SEQUENCE,
              p = d.create(d.Class.UNIVERSAL, d.Type.INTEGER, !1, d.integerToDer(a.version).getBytes()),
              c = d,
              h = c.create,
              f = d.Class.UNIVERSAL,
              r = d.Type.SET,
              F = a.recipients,
              M,
              R = [],
              m = 0;
            m < F.length;
            ++m
          )
            R.push(
              ((M = F[m]),
              d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
                d.create(d.Class.UNIVERSAL, d.Type.INTEGER, !1, d.integerToDer(M.version).getBytes()),
                d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
                  B.pki.distinguishedNameToAsn1({ attributes: M.issuer }),
                  d.create(d.Class.UNIVERSAL, d.Type.INTEGER, !1, B.util.hexToBytes(M.serialNumber))
                ]),
                d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
                  d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(M.encryptedContent.algorithm).getBytes()),
                  d.create(d.Class.UNIVERSAL, d.Type.NULL, !1, "")
                ]),
                d.create(d.Class.UNIVERSAL, d.Type.OCTETSTRING, !1, M.encryptedContent.content)
              ]))
            );
          return g.call(b, q, D, !0, [
            t,
            v.call(A, L, 0, !0, [
              J.call(K, l, z, !0, [
                p,
                h.call(c, f, r, !0, R),
                d.create(
                  d.Class.UNIVERSAL,
                  d.Type.SEQUENCE,
                  !0,
                  ((u = a.encryptedContent),
                  [
                    d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(B.pki.oids.data).getBytes()),
                    d.create(d.Class.UNIVERSAL, d.Type.SEQUENCE, !0, [
                      d.create(d.Class.UNIVERSAL, d.Type.OID, !1, d.oidToDer(u.algorithm).getBytes()),
                      u.parameter ? d.create(d.Class.UNIVERSAL, d.Type.OCTETSTRING, !1, u.parameter.getBytes()) : void 0
                    ]),
                    d.create(d.Class.CONTEXT_SPECIFIC, 0, !0, [d.create(d.Class.UNIVERSAL, d.Type.OCTETSTRING, !1, u.content.getBytes())])
                  ])
                )
              ])
            ])
          ]);
          var u;
        },
        findRecipient: function (b) {
          for (var g = b.issuer.attributes, q = 0; q < a.recipients.length; ++q) {
            var D = a.recipients[q],
              t = D.issuer;
            if (D.serialNumber === b.serialNumber && t.length === g.length) {
              for (var A = !0, v = 0; v < g.length; ++v)
                if (t[v].type !== g[v].type || t[v].value !== g[v].value) {
                  A = !1;
                  break;
                }
              if (A) return D;
            }
          }
          return null;
        },
        decrypt: function (b, g) {
          if (void 0 === a.encryptedContent.key && void 0 !== b && void 0 !== g)
            switch (b.encryptedContent.algorithm) {
              case B.pki.oids.rsaEncryption:
              case B.pki.oids.desCBC:
                b = g.decrypt(b.encryptedContent.content);
                a.encryptedContent.key = B.util.createBuffer(b);
                break;
              default:
                throw Error("Unsupported asymmetric cipher, OID " + b.encryptedContent.algorithm);
            }
          C(a);
        },
        addRecipient: function (b) {
          a.recipients.push({
            version: 0,
            issuer: b.issuer.attributes,
            serialNumber: b.serialNumber,
            encryptedContent: { algorithm: B.pki.oids.rsaEncryption, key: b.publicKey }
          });
        },
        encrypt: function (b, g) {
          if (void 0 === a.encryptedContent.content) {
            var q;
            switch (((g = g || a.encryptedContent.algorithm), (b = b || a.encryptedContent.key), g)) {
              case B.pki.oids["aes128-CBC"]:
                var D = (q = 16);
                var t = B.aes.createEncryptionCipher;
                break;
              case B.pki.oids["aes192-CBC"]:
                q = 24;
                D = 16;
                t = B.aes.createEncryptionCipher;
                break;
              case B.pki.oids["aes256-CBC"]:
                q = 32;
                D = 16;
                t = B.aes.createEncryptionCipher;
                break;
              case B.pki.oids["des-EDE3-CBC"]:
                q = 24;
                D = 8;
                t = B.des.createEncryptionCipher;
                break;
              default:
                throw Error("Unsupported symmetric cipher, OID " + g);
            }
            if (void 0 === b) b = B.util.createBuffer(B.random.getBytes(q));
            else if (b.length() != q) throw Error("Symmetric key has wrong length; got " + b.length() + " bytes, expected " + q + ".");
            a.encryptedContent.algorithm = g;
            a.encryptedContent.key = b;
            a.encryptedContent.parameter = B.util.createBuffer(B.random.getBytes(D));
            b = t(b);
            if ((b.start(a.encryptedContent.parameter.copy()), b.update(a.content), !b.finish()))
              throw Error("Symmetric encryption failed.");
            a.encryptedContent.content = b.output;
          }
          for (b = 0; b < a.recipients.length; ++b)
            if (((g = a.recipients[b]), void 0 === g.encryptedContent.content))
              switch (g.encryptedContent.algorithm) {
                case B.pki.oids.rsaEncryption:
                  g.encryptedContent.content = g.encryptedContent.key.encrypt(a.encryptedContent.key.data);
                  break;
                default:
                  throw Error("Unsupported asymmetric cipher, OID " + g.encryptedContent.algorithm);
              }
        }
      });
    };
  },
  "./node_modules/node-forge/lib/pkcs7asn1.js": function (O, w, H) {
    w = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/asn1.js");
    H("./node_modules/node-forge/lib/util.js");
    H = w.asn1;
    O = O.exports = w.pkcs7asn1 = w.pkcs7asn1 || {};
    w.pkcs7 = w.pkcs7 || {};
    w.pkcs7.asn1 = O;
    w = {
      name: "ContentInfo",
      tagClass: H.Class.UNIVERSAL,
      type: H.Type.SEQUENCE,
      constructed: !0,
      value: [
        { name: "ContentInfo.ContentType", tagClass: H.Class.UNIVERSAL, type: H.Type.OID, constructed: !1, capture: "contentType" },
        { name: "ContentInfo.content", tagClass: H.Class.CONTEXT_SPECIFIC, type: 0, constructed: !0, optional: !0, captureAsn1: "content" }
      ]
    };
    O.contentInfoValidator = w;
    var n = {
      name: "EncryptedContentInfo",
      tagClass: H.Class.UNIVERSAL,
      type: H.Type.SEQUENCE,
      constructed: !0,
      value: [
        {
          name: "EncryptedContentInfo.contentType",
          tagClass: H.Class.UNIVERSAL,
          type: H.Type.OID,
          constructed: !1,
          capture: "contentType"
        },
        {
          name: "EncryptedContentInfo.contentEncryptionAlgorithm",
          tagClass: H.Class.UNIVERSAL,
          type: H.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
              tagClass: H.Class.UNIVERSAL,
              type: H.Type.OID,
              constructed: !1,
              capture: "encAlgorithm"
            },
            { name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter", tagClass: H.Class.UNIVERSAL, captureAsn1: "encParameter" }
          ]
        },
        {
          name: "EncryptedContentInfo.encryptedContent",
          tagClass: H.Class.CONTEXT_SPECIFIC,
          type: 0,
          capture: "encryptedContent",
          captureAsn1: "encryptedContentAsn1"
        }
      ]
    };
    O.envelopedDataValidator = {
      name: "EnvelopedData",
      tagClass: H.Class.UNIVERSAL,
      type: H.Type.SEQUENCE,
      constructed: !0,
      value: [
        { name: "EnvelopedData.Version", tagClass: H.Class.UNIVERSAL, type: H.Type.INTEGER, constructed: !1, capture: "version" },
        {
          name: "EnvelopedData.RecipientInfos",
          tagClass: H.Class.UNIVERSAL,
          type: H.Type.SET,
          constructed: !0,
          captureAsn1: "recipientInfos"
        }
      ].concat(n)
    };
    O.encryptedDataValidator = {
      name: "EncryptedData",
      tagClass: H.Class.UNIVERSAL,
      type: H.Type.SEQUENCE,
      constructed: !0,
      value: [
        { name: "EncryptedData.Version", tagClass: H.Class.UNIVERSAL, type: H.Type.INTEGER, constructed: !1, capture: "version" }
      ].concat(n)
    };
    O.signedDataValidator = {
      name: "SignedData",
      tagClass: H.Class.UNIVERSAL,
      type: H.Type.SEQUENCE,
      constructed: !0,
      value: [
        { name: "SignedData.Version", tagClass: H.Class.UNIVERSAL, type: H.Type.INTEGER, constructed: !1, capture: "version" },
        {
          name: "SignedData.DigestAlgorithms",
          tagClass: H.Class.UNIVERSAL,
          type: H.Type.SET,
          constructed: !0,
          captureAsn1: "digestAlgorithms"
        },
        w,
        { name: "SignedData.Certificates", tagClass: H.Class.CONTEXT_SPECIFIC, type: 0, optional: !0, captureAsn1: "certificates" },
        { name: "SignedData.CertificateRevocationLists", tagClass: H.Class.CONTEXT_SPECIFIC, type: 1, optional: !0, captureAsn1: "crls" },
        {
          name: "SignedData.SignerInfos",
          tagClass: H.Class.UNIVERSAL,
          type: H.Type.SET,
          capture: "signerInfos",
          optional: !0,
          value: [
            {
              name: "SignerInfo",
              tagClass: H.Class.UNIVERSAL,
              type: H.Type.SEQUENCE,
              constructed: !0,
              value: [
                { name: "SignerInfo.version", tagClass: H.Class.UNIVERSAL, type: H.Type.INTEGER, constructed: !1 },
                {
                  name: "SignerInfo.issuerAndSerialNumber",
                  tagClass: H.Class.UNIVERSAL,
                  type: H.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "SignerInfo.issuerAndSerialNumber.issuer",
                      tagClass: H.Class.UNIVERSAL,
                      type: H.Type.SEQUENCE,
                      constructed: !0,
                      captureAsn1: "issuer"
                    },
                    {
                      name: "SignerInfo.issuerAndSerialNumber.serialNumber",
                      tagClass: H.Class.UNIVERSAL,
                      type: H.Type.INTEGER,
                      constructed: !1,
                      capture: "serial"
                    }
                  ]
                },
                {
                  name: "SignerInfo.digestAlgorithm",
                  tagClass: H.Class.UNIVERSAL,
                  type: H.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "SignerInfo.digestAlgorithm.algorithm",
                      tagClass: H.Class.UNIVERSAL,
                      type: H.Type.OID,
                      constructed: !1,
                      capture: "digestAlgorithm"
                    },
                    {
                      name: "SignerInfo.digestAlgorithm.parameter",
                      tagClass: H.Class.UNIVERSAL,
                      constructed: !1,
                      captureAsn1: "digestParameter",
                      optional: !0
                    }
                  ]
                },
                {
                  name: "SignerInfo.authenticatedAttributes",
                  tagClass: H.Class.CONTEXT_SPECIFIC,
                  type: 0,
                  constructed: !0,
                  optional: !0,
                  capture: "authenticatedAttributes"
                },
                {
                  name: "SignerInfo.digestEncryptionAlgorithm",
                  tagClass: H.Class.UNIVERSAL,
                  type: H.Type.SEQUENCE,
                  constructed: !0,
                  capture: "signatureAlgorithm"
                },
                {
                  name: "SignerInfo.encryptedDigest",
                  tagClass: H.Class.UNIVERSAL,
                  type: H.Type.OCTETSTRING,
                  constructed: !1,
                  capture: "signature"
                },
                {
                  name: "SignerInfo.unauthenticatedAttributes",
                  tagClass: H.Class.CONTEXT_SPECIFIC,
                  type: 1,
                  constructed: !0,
                  optional: !0,
                  capture: "unauthenticatedAttributes"
                }
              ]
            }
          ]
        }
      ]
    };
    O.recipientInfoValidator = {
      name: "RecipientInfo",
      tagClass: H.Class.UNIVERSAL,
      type: H.Type.SEQUENCE,
      constructed: !0,
      value: [
        { name: "RecipientInfo.version", tagClass: H.Class.UNIVERSAL, type: H.Type.INTEGER, constructed: !1, capture: "version" },
        {
          name: "RecipientInfo.issuerAndSerial",
          tagClass: H.Class.UNIVERSAL,
          type: H.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "RecipientInfo.issuerAndSerial.issuer",
              tagClass: H.Class.UNIVERSAL,
              type: H.Type.SEQUENCE,
              constructed: !0,
              captureAsn1: "issuer"
            },
            {
              name: "RecipientInfo.issuerAndSerial.serialNumber",
              tagClass: H.Class.UNIVERSAL,
              type: H.Type.INTEGER,
              constructed: !1,
              capture: "serial"
            }
          ]
        },
        {
          name: "RecipientInfo.keyEncryptionAlgorithm",
          tagClass: H.Class.UNIVERSAL,
          type: H.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
              tagClass: H.Class.UNIVERSAL,
              type: H.Type.OID,
              constructed: !1,
              capture: "encAlgorithm"
            },
            {
              name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
              tagClass: H.Class.UNIVERSAL,
              constructed: !1,
              captureAsn1: "encParameter",
              optional: !0
            }
          ]
        },
        { name: "RecipientInfo.encryptedKey", tagClass: H.Class.UNIVERSAL, type: H.Type.OCTETSTRING, constructed: !1, capture: "encKey" }
      ]
    };
  },
  "./node_modules/node-forge/lib/pki.js": function (O, w, H) {
    var n = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/asn1.js");
    H("./node_modules/node-forge/lib/oids.js");
    H("./node_modules/node-forge/lib/pbe.js");
    H("./node_modules/node-forge/lib/pem.js");
    H("./node_modules/node-forge/lib/pbkdf2.js");
    H("./node_modules/node-forge/lib/pkcs12.js");
    H("./node_modules/node-forge/lib/pss.js");
    H("./node_modules/node-forge/lib/rsa.js");
    H("./node_modules/node-forge/lib/util.js");
    H("./node_modules/node-forge/lib/x509.js");
    var E = n.asn1,
      C = (O.exports = n.pki = n.pki || {});
    C.pemToDer = function (B) {
      B = n.pem.decode(B)[0];
      if (B.procType && "ENCRYPTED" === B.procType.type) throw Error("Could not convert PEM to DER; PEM is encrypted.");
      return n.util.createBuffer(B.body);
    };
    C.privateKeyFromPem = function (B) {
      B = n.pem.decode(B)[0];
      if ("PRIVATE KEY" !== B.type && "RSA PRIVATE KEY" !== B.type) {
        var d = Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');
        throw ((d.headerType = B.type), d);
      }
      if (B.procType && "ENCRYPTED" === B.procType.type) throw Error("Could not convert private key from PEM; PEM is encrypted.");
      B = E.fromDer(B.body);
      return C.privateKeyFromAsn1(B);
    };
    C.privateKeyToPem = function (B, d) {
      B = { type: "RSA PRIVATE KEY", body: E.toDer(C.privateKeyToAsn1(B)).getBytes() };
      return n.pem.encode(B, { maxline: d });
    };
    C.privateKeyInfoToPem = function (B, d) {
      B = { type: "PRIVATE KEY", body: E.toDer(B).getBytes() };
      return n.pem.encode(B, { maxline: d });
    };
  },
  "./node_modules/node-forge/lib/prime.js": function (O, w, H) {
    var n = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/util.js");
    H("./node_modules/node-forge/lib/jsbn.js");
    H("./node_modules/node-forge/lib/random.js");
    (function () {
      function E(g, q, D, t) {
        var A = C(g, q),
          v = (function (K) {
            return 100 >= K
              ? 27
              : 150 >= K
              ? 18
              : 200 >= K
              ? 15
              : 250 >= K
              ? 12
              : 300 >= K
              ? 9
              : 350 >= K
              ? 8
              : 400 >= K
              ? 7
              : 500 >= K
              ? 6
              : 600 >= K
              ? 5
              : 800 >= K
              ? 4
              : 1250 >= K
              ? 3
              : 2;
          })(A.bitLength());
        "millerRabinTests" in D && (v = D.millerRabinTests);
        var L = 10;
        "maxBlockTime" in D && (L = D.maxBlockTime);
        (function r(J, l, z, p, c, h, f) {
          var F = +new Date();
          do {
            if ((J.bitLength() > l && (J = C(l, z)), J.isProbablePrime(c))) return f(null, J);
            J.dAddOffset(e[p++ % 8], 0);
          } while (0 > h || +new Date() - F < h);
          n.util.setImmediate(function () {
            r(J, l, z, p, c, h, f);
          });
        })(A, g, q, 0, v, L, t);
      }
      function C(g, q) {
        q = new d(g, q);
        --g;
        return q.testBit(g) || q.bitwiseTo(d.ONE.shiftLeft(g), b, q), q.dAddOffset(31 - q.mod(a).byteValue(), 0), q;
      }
      if (n.prime) O.exports = n.prime;
      else {
        var B = (O.exports = n.prime = n.prime || {}),
          d = n.jsbn.BigInteger,
          e = [6, 4, 2, 4, 2, 4, 6, 2],
          a = new d(null);
        a.fromInt(30);
        var b = function (g, q) {
          return g | q;
        };
        B.generateProbablePrime = function (g, q, D) {
          "function" == typeof q && ((D = q), (q = {}));
          var t = (q = q || {}).algorithm || "PRIMEINC";
          "string" == typeof t && (t = { name: t });
          t.options = t.options || {};
          var A = q.prng || n.random;
          q = {
            nextBytes: function (v) {
              for (var L = A.getBytesSync(v.length), K = 0; K < v.length; ++K) v[K] = L.charCodeAt(K);
            }
          };
          if ("PRIMEINC" === t.name)
            return (function (v, L, K, J) {
              return "workers" in K
                ? (function (l, z, p, c) {
                    function h() {
                      function m(y) {
                        if (!k) {
                          0;
                          var G = y.data;
                          if (G.found) {
                            for (y = 0; y < u.length; ++y) u[y].terminate();
                            return (k = !0), c(null, new d(G.prime, 16));
                          }
                          f.bitLength() > l && (f = C(l, z));
                          G = f.toString(16);
                          y.target.postMessage({ hex: G, workLoad: F });
                          f.dAddOffset(M, 0);
                        }
                      }
                      r = Math.max(1, r);
                      for (var u = [], I = 0; I < r; ++I) u[I] = new Worker(R);
                      for (I = 0; I < r; ++I) u[I].addEventListener("message", m);
                      var k = !1;
                    }
                    if ("undefined" == typeof Worker) return E(l, z, p, c);
                    var f = C(l, z),
                      r = p.workers,
                      F = p.workLoad || 100,
                      M = (30 * F) / 8,
                      R = p.workerScript || "forge/prime.worker.js";
                    if (-1 === r)
                      return n.util.estimateCores(function (m, u) {
                        m && (u = 2);
                        r = u - 1;
                        h();
                      });
                    h();
                  })(v, L, K, J)
                : E(v, L, K, J);
            })(g, q, t.options, D);
          throw Error("Invalid prime generation algorithm: " + t.name);
        };
      }
    })();
  },
  "./node_modules/node-forge/lib/prng.js": function (O, w, H) {
    (function (n) {
      var E = H("./node_modules/node-forge/lib/forge.js");
      H("./node_modules/node-forge/lib/util.js");
      var C = null;
      !E.util.isNodejs || E.options.usePureJavaScript || n.versions["node-webkit"] || (C = H(0));
      (O.exports = E.prng = E.prng || {}).create = function (B) {
        function d() {
          a.reseeds = 4294967295 === a.reseeds ? 0 : a.reseeds + 1;
          var q = a.plugin.md.create();
          q.update(a.keyBytes);
          for (var D = 1, t = 0; 32 > t; ++t)
            0 == a.reseeds % D && (q.update(a.pools[t].digest().getBytes()), a.pools[t].start()), (D <<= 1);
          a.keyBytes = q.digest().getBytes();
          q.start();
          q.update(a.keyBytes);
          q = q.digest().getBytes();
          a.key = a.plugin.formatKey(a.keyBytes);
          a.seed = a.plugin.formatSeed(q);
          a.generated = 0;
        }
        function e(q) {
          var D = null,
            t = E.util.globalScope,
            A = t.crypto || t.msCrypto;
          A &&
            A.getRandomValues &&
            (D = function (K) {
              return A.getRandomValues(K);
            });
          t = E.util.createBuffer();
          if (D)
            for (; t.length() < q; ) {
              var v = Math.max(1, Math.min(q - t.length(), 65536) / 4),
                L = new Uint32Array(Math.floor(v));
              try {
                for (D(L), v = 0; v < L.length; ++v) t.putInt32(L[v]);
              } catch (K) {
                if (!("undefined" != typeof QuotaExceededError && K instanceof QuotaExceededError)) throw K;
              }
            }
          if (t.length() < q)
            for (D = Math.floor(65536 * Math.random()); t.length() < q; )
              for (
                v = 16807 * (65535 & D),
                  v += (32767 & (D = 16807 * (D >> 16))) << 16,
                  D = 4294967295 & (v = (2147483647 & (v += D >> 15)) + (v >> 31)),
                  v = 0;
                3 > v;
                ++v
              )
                (L = D >>> (v << 3)), (L ^= Math.floor(256 * Math.random())), t.putByte(255 & L);
          return t.getBytes(q);
        }
        var a = { plugin: B, key: null, seed: null, time: null, reseeds: 0, generated: 0, keyBytes: "" };
        B = B.md;
        for (var b = Array(32), g = 0; 32 > g; ++g) b[g] = B.create();
        return (
          (a.pools = b),
          (a.pool = 0),
          (a.generate = function (q, D) {
            if (!D) return a.generateSync(q);
            var t = a.plugin.cipher,
              A = a.plugin.increment,
              v = a.plugin.formatKey,
              L = a.plugin.formatSeed,
              K = E.util.createBuffer();
            a.key = null;
            (function z(l) {
              if (l) return D(l);
              if (K.length() >= q) return D(null, K.getBytes(q));
              1048575 < a.generated && (a.key = null);
              if (null === a.key)
                return E.util.nextTick(function () {
                  !(function (p) {
                    if (32 <= a.pools[0].messageLength) return d(), p();
                    a.seedFile((32 - a.pools[0].messageLength) << 5, function (c, h) {
                      if (c) return p(c);
                      a.collect(h);
                      d();
                      p();
                    });
                  })(z);
                });
              l = t(a.key, a.seed);
              a.generated += l.length;
              K.putBytes(l);
              a.key = v(t(a.key, A(a.seed)));
              a.seed = L(t(a.key, a.seed));
              E.util.setImmediate(z);
            })();
          }),
          (a.generateSync = function (q) {
            var D = a.plugin.cipher,
              t = a.plugin.increment,
              A = a.plugin.formatKey,
              v = a.plugin.formatSeed;
            a.key = null;
            for (var L = E.util.createBuffer(); L.length() < q; ) {
              1048575 < a.generated && (a.key = null);
              null === a.key && (32 <= a.pools[0].messageLength || a.collect(a.seedFileSync((32 - a.pools[0].messageLength) << 5)), d());
              var K = D(a.key, a.seed);
              a.generated += K.length;
              L.putBytes(K);
              a.key = A(D(a.key, t(a.seed)));
              a.seed = v(D(a.key, a.seed));
            }
            return L.getBytes(q);
          }),
          C
            ? ((a.seedFile = function (q, D) {
                C.randomBytes(q, function (t, A) {
                  if (t) return D(t);
                  D(null, A.toString());
                });
              }),
              (a.seedFileSync = function (q) {
                return C.randomBytes(q).toString();
              }))
            : ((a.seedFile = function (q, D) {
                try {
                  D(null, e(q));
                } catch (t) {
                  D(t);
                }
              }),
              (a.seedFileSync = e)),
          (a.collect = function (q) {
            for (var D = q.length, t = 0; t < D; ++t) a.pools[a.pool].update(q.substr(t, 1)), (a.pool = 31 === a.pool ? 0 : a.pool + 1);
          }),
          (a.collectInt = function (q, D) {
            for (var t = "", A = 0; A < D; A += 8) t += String.fromCharCode((q >> A) & 255);
            a.collect(t);
          }),
          (a.registerWorker = function (q) {
            q === self
              ? (a.seedFile = function (D, t) {
                  self.addEventListener("message", function L(v) {
                    v = v.data;
                    v.forge && v.forge.prng && (self.removeEventListener("message", L), t(v.forge.prng.err, v.forge.prng.bytes));
                  });
                  self.postMessage({ forge: { prng: { needed: D } } });
                })
              : q.addEventListener("message", function (D) {
                  D = D.data;
                  D.forge &&
                    D.forge.prng &&
                    a.seedFile(D.forge.prng.needed, function (t, A) {
                      q.postMessage({ forge: { prng: { err: t, bytes: A } } });
                    });
                });
          }),
          a
        );
      };
    }).call(this, H("./node_modules/process/browser.js"));
  },
  "./node_modules/node-forge/lib/pss.js": function (O, w, H) {
    var n = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/random.js");
    H("./node_modules/node-forge/lib/util.js");
    (O.exports = n.pss = n.pss || {}).create = function (E) {
      3 === arguments.length && (E = { md: arguments[0], mgf: arguments[1], saltLength: arguments[2] });
      var C = E.md,
        B = E.mgf,
        d = C.digestLength,
        e = E.salt || null;
      if (("string" == typeof e && (e = n.util.createBuffer(e)), "saltLength" in E)) var a = E.saltLength;
      else {
        if (null === e) throw Error("Salt length not specified or specific salt not given.");
        a = e.length();
      }
      if (null !== e && e.length() !== a) throw Error("Given salt length does not match length of given salt.");
      var b = E.prng || n.random;
      return {
        encode: function (g, q) {
          --q;
          var D = Math.ceil(q / 8);
          g = g.digest().getBytes();
          if (D < d + a + 2) throw Error("Message is too long to encrypt.");
          var t = null === e ? b.getBytesSync(a) : e.bytes();
          var A = new n.util.ByteBuffer();
          A.fillWithByte(0, 8);
          A.putBytes(g);
          A.putBytes(t);
          C.start();
          C.update(A.getBytes());
          g = C.digest().getBytes();
          A = new n.util.ByteBuffer();
          A.fillWithByte(0, D - a - d - 2);
          A.putByte(1);
          A.putBytes(t);
          var v = A.getBytes(),
            L = D - d - 1,
            K = B.generate(g, L);
          t = "";
          for (A = 0; A < L; A++) t += String.fromCharCode(v.charCodeAt(A) ^ K.charCodeAt(A));
          q = (65280 >> (8 * D - q)) & 255;
          return String.fromCharCode(t.charCodeAt(0) & ~q) + t.substr(1) + g + String.fromCharCode(188);
        },
        verify: function (g, q, D) {
          var t = D - 1;
          D = Math.ceil(t / 8);
          if (((q = q.substr(-D)), D < d + a + 2)) throw Error("Inconsistent parameters to PSS signature verification.");
          if (188 !== q.charCodeAt(D - 1)) throw Error("Encoded message does not end in 0xBC.");
          var A = D - d - 1,
            v = q.substr(0, A);
          q = q.substr(A, d);
          var L = (65280 >> (8 * D - t)) & 255;
          if (0 != (v.charCodeAt(0) & L)) throw Error("Bits beyond keysize not zero as expected.");
          var K = B.generate(q, A),
            J = "";
          for (t = 0; t < A; t++) J += String.fromCharCode(v.charCodeAt(t) ^ K.charCodeAt(t));
          J = String.fromCharCode(J.charCodeAt(0) & ~L) + J.substr(1);
          D = D - d - a - 2;
          for (t = 0; t < D; t++) if (0 !== J.charCodeAt(t)) throw Error("Leftmost octets not zero as expected");
          if (1 !== J.charCodeAt(D)) throw Error("Inconsistent PSS signature, 0x01 marker not found");
          D = J.substr(-a);
          A = new n.util.ByteBuffer();
          return A.fillWithByte(0, 8), A.putBytes(g), A.putBytes(D), C.start(), C.update(A.getBytes()), q === C.digest().getBytes();
        }
      };
    };
  },
  "./node_modules/node-forge/lib/random.js": function (O, w, H) {
    var n = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/aes.js");
    H("./node_modules/node-forge/lib/sha256.js");
    H("./node_modules/node-forge/lib/prng.js");
    H("./node_modules/node-forge/lib/util.js");
    n.random && n.random.getBytes
      ? (O.exports = n.random)
      : (function (E) {
          function C() {
            var t = n.prng.create(B);
            return (
              (t.getBytes = function (A, v) {
                return t.generate(A, v);
              }),
              (t.getBytesSync = function (A) {
                return t.generate(A);
              }),
              t
            );
          }
          var B = {},
            d = Array(4),
            e = n.util.createBuffer();
          B.formatKey = function (t) {
            var A = n.util.createBuffer(t);
            return (
              ((t = Array(4))[0] = A.getInt32()),
              (t[1] = A.getInt32()),
              (t[2] = A.getInt32()),
              (t[3] = A.getInt32()),
              n.aes._expandKey(t, !1)
            );
          };
          B.formatSeed = function (t) {
            var A = n.util.createBuffer(t);
            return ((t = Array(4))[0] = A.getInt32()), (t[1] = A.getInt32()), (t[2] = A.getInt32()), (t[3] = A.getInt32()), t;
          };
          B.cipher = function (t, A) {
            return n.aes._updateBlock(t, A, d, !1), e.putInt32(d[0]), e.putInt32(d[1]), e.putInt32(d[2]), e.putInt32(d[3]), e.getBytes();
          };
          B.increment = function (t) {
            return ++t[3], t;
          };
          B.md = n.md.sha256;
          var a = C(),
            b = null,
            g = n.util.globalScope,
            q = g.crypto || g.msCrypto;
          if (
            (q &&
              q.getRandomValues &&
              (b = function (t) {
                return q.getRandomValues(t);
              }),
            n.options.usePureJavaScript || (!n.util.isNodejs && !b))
          ) {
            if (("undefined" == typeof window || window.document, a.collectInt(+new Date(), 32), "undefined" != typeof navigator)) {
              b = "";
              for (var D in navigator)
                try {
                  "string" == typeof navigator[D] && (b += navigator[D]);
                } catch (t) {}
              a.collect(b);
              b = null;
            }
            E &&
              (E().mousemove(function (t) {
                a.collectInt(t.clientX, 16);
                a.collectInt(t.clientY, 16);
              }),
              E().keypress(function (t) {
                a.collectInt(t.charCode, 8);
              }));
          }
          if (n.random) for (D in a) n.random[D] = a[D];
          else n.random = a;
          n.random.createInstance = C;
          O.exports = n.random;
        })("undefined" != typeof jQuery ? jQuery : null);
  },
  "./node_modules/node-forge/lib/rc2.js": function (O, w, H) {
    var n = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/util.js");
    var E = [
        217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136,
        68, 139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123, 11, 240,
        149, 33, 34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241, 220, 18, 117, 202, 31, 59, 190,
        228, 209, 66, 61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3, 248, 17, 199,
        246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238, 247, 132, 170, 114, 172, 53, 77, 106,
        42, 150, 26, 210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81, 203, 204, 36, 145, 175, 80,
        161, 244, 112, 57, 153, 124, 58, 133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227, 138, 146, 174, 5,
        223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207, 225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27, 171, 51,
        255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219, 71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173
      ],
      C = [1, 2, 3, 5];
    O.exports = n.rc2 = n.rc2 || {};
    n.rc2.expandKey = function (d, e) {
      "string" == typeof d && (d = n.util.createBuffer(d));
      e = e || 128;
      var a = d;
      d = d.length();
      var b = e;
      e = Math.ceil(b / 8);
      var g = 255 >> (7 & b);
      for (b = d; 128 > b; b++) a.putByte(E[(a.at(b - 1) + a.at(b - d)) & 255]);
      a.setAt(128 - e, E[a.at(128 - e) & g]);
      for (b = 127 - e; 0 <= b; b--) a.setAt(b, E[a.at(b + 1) ^ a.at(b + e)]);
      return a;
    };
    var B = function (d, e, a) {
      var b,
        g,
        q,
        D,
        t = !1,
        A = null,
        v = null,
        L = null,
        K = [];
      d = n.rc2.expandKey(d, e);
      for (q = 0; 64 > q; q++) K.push(d.getInt16Le());
      a
        ? ((b = function (l) {
            for (q = 0; 4 > q; q++) {
              l[q] += K[D] + (l[(q + 3) % 4] & l[(q + 2) % 4]) + (~l[(q + 3) % 4] & l[(q + 1) % 4]);
              var z = l[q],
                p = C[q];
              l[q] = ((z << p) & 65535) | ((65535 & z) >> (16 - p));
              D++;
            }
          }),
          (g = function (l) {
            for (q = 0; 4 > q; q++) l[q] += K[63 & l[(q + 3) % 4]];
          }))
        : ((b = function (l) {
            for (q = 3; 0 <= q; q--) {
              var z = l[q],
                p = C[q];
              l[q] = ((65535 & z) >> p) | ((z << (16 - p)) & 65535);
              l[q] -= K[D] + (l[(q + 3) % 4] & l[(q + 2) % 4]) + (~l[(q + 3) % 4] & l[(q + 1) % 4]);
              D--;
            }
          }),
          (g = function (l) {
            for (q = 3; 0 <= q; q--) l[q] -= K[63 & l[(q + 3) % 4]];
          }));
      var J = null;
      return (J = {
        start: function (l, z) {
          l && "string" == typeof l && (l = n.util.createBuffer(l));
          t = !1;
          A = n.util.createBuffer();
          v = z || new n.util.createBuffer();
          L = l;
          J.output = v;
        },
        update: function (l) {
          for (t || A.putBuffer(l); 8 <= A.length(); ) {
            l = [
              [5, b],
              [1, g],
              [6, b],
              [1, g],
              [5, b]
            ];
            var z = [];
            for (q = 0; 4 > q; q++) {
              var p = A.getInt16Le();
              null !== L && (a ? (p ^= L.getInt16Le()) : L.putInt16Le(p));
              z.push(65535 & p);
            }
            D = a ? 0 : 63;
            for (p = 0; p < l.length; p++) for (var c = 0; c < l[p][0]; c++) l[p][1](z);
            for (q = 0; 4 > q; q++) null !== L && (a ? L.putInt16Le(z[q]) : (z[q] ^= L.getInt16Le())), v.putInt16Le(z[q]);
          }
        },
        finish: function (l) {
          var z = !0;
          if (a)
            if (l) z = l(8, A, !a);
            else {
              var p = 8 === A.length() ? 8 : 8 - A.length();
              A.fillWithByte(p, p);
            }
          if ((z && ((t = !0), J.update()), !a && (z = 0 === A.length())))
            l ? (z = l(8, v, !a)) : ((l = v.length()), (p = v.at(l - 1)), p > l ? (z = !1) : v.truncate(p));
          return z;
        }
      });
    };
    n.rc2.startEncrypting = function (d, e, a) {
      d = n.rc2.createEncryptionCipher(d, 128);
      return d.start(e, a), d;
    };
    n.rc2.createEncryptionCipher = function (d, e) {
      return B(d, e, !0);
    };
    n.rc2.startDecrypting = function (d, e, a) {
      d = n.rc2.createDecryptionCipher(d, 128);
      return d.start(e, a), d;
    };
    n.rc2.createDecryptionCipher = function (d, e) {
      return B(d, e, !1);
    };
  },
  "./node_modules/node-forge/lib/rsa.js": function (O, w, H) {
    function n(f, r, F) {
      var M = g.util.createBuffer();
      r = Math.ceil(r.n.bitLength() / 8);
      if (f.length > r - 11)
        throw ((M = Error("Message is too long for PKCS#1 v1.5 padding.")), (M.length = f.length), (M.max = r - 11), M);
      M.putByte(0);
      M.putByte(F);
      r = r - 3 - f.length;
      if (0 === F || 1 === F) {
        var R = 0 === F ? 0 : 255;
        for (F = 0; F < r; ++F) M.putByte(R);
      } else
        for (; 0 < r; ) {
          var m = 0,
            u = g.random.getBytes(r);
          for (F = 0; F < r; ++F) 0 === (R = u.charCodeAt(F)) ? ++m : M.putByte(R);
          r = m;
        }
      return M.putByte(0), M.putBytes(f), M;
    }
    function E(f, r, F, M) {
      r = Math.ceil(r.n.bitLength() / 8);
      f = g.util.createBuffer(f);
      var R = f.getByte(),
        m = f.getByte();
      if (0 !== R || (F && 0 !== m && 1 !== m) || (!F && 2 != m) || (F && 0 === m && void 0 === M))
        throw Error("Encryption block is invalid.");
      F = 0;
      if (0 === m)
        for (F = r - 3 - M, M = 0; M < F; ++M) {
          if (0 !== f.getByte()) throw Error("Encryption block is invalid.");
        }
      else if (1 === m)
        for (F = 0; 1 < f.length(); ) {
          if (255 !== f.getByte()) {
            --f.read;
            break;
          }
          ++F;
        }
      else if (2 === m)
        for (F = 0; 1 < f.length(); ) {
          if (0 === f.getByte()) {
            --f.read;
            break;
          }
          ++F;
        }
      if (0 !== f.getByte() || F !== r - 3 - f.length()) throw Error("Encryption block is invalid.");
      return f.getBytes();
    }
    function C(f, r, F) {
      function M() {
        R(f.pBits, function (I, k) {
          return I ? F(I) : ((f.p = k), null !== f.q ? m(I, f.q) : void R(f.qBits, m));
        });
      }
      function R(I, k) {
        g.prime.generateProbablePrime(I, u, k);
      }
      function m(I, k) {
        if (I) return F(I);
        if (((f.q = k), 0 > f.p.compareTo(f.q))) (I = f.p), (f.p = f.q), (f.q = I);
        if (0 !== f.p.subtract(q.ONE).gcd(f.e).compareTo(q.ONE)) return (f.p = null), void M();
        if (0 !== f.q.subtract(q.ONE).gcd(f.e).compareTo(q.ONE)) return (f.q = null), void R(f.qBits, m);
        if (
          ((f.p1 = f.p.subtract(q.ONE)), (f.q1 = f.q.subtract(q.ONE)), (f.phi = f.p1.multiply(f.q1)), 0 !== f.phi.gcd(f.e).compareTo(q.ONE))
        )
          return (f.p = f.q = null), void M();
        if (((f.n = f.p.multiply(f.q)), f.n.bitLength() !== f.bits)) return (f.q = null), void R(f.qBits, m);
        I = f.e.modInverse(f.phi);
        f.keys = {
          privateKey: v.rsa.setPrivateKey(f.n, f.e, I, f.p, f.q, I.mod(f.p1), I.mod(f.q1), f.q.modInverse(f.p)),
          publicKey: v.rsa.setPublicKey(f.n, f.e)
        };
        F(null, f.keys);
      }
      "function" == typeof r && ((F = r), (r = {}));
      var u = {
        algorithm: {
          name: (r = r || {}).algorithm || "PRIMEINC",
          options: { workers: r.workers || 2, workLoad: r.workLoad || 100, workerScript: r.workerScript }
        }
      };
      "prng" in r && (u.prng = r.prng);
      M();
    }
    function B(f) {
      f = f.toString(16);
      "8" <= f[0] && (f = "00" + f);
      f = g.util.hexToBytes(f);
      return 1 < f.length &&
        ((0 === f.charCodeAt(0) && 0 == (128 & f.charCodeAt(1))) || (255 === f.charCodeAt(0) && 128 == (128 & f.charCodeAt(1))))
        ? f.substr(1)
        : f;
    }
    function d(f) {
      return 100 >= f
        ? 27
        : 150 >= f
        ? 18
        : 200 >= f
        ? 15
        : 250 >= f
        ? 12
        : 300 >= f
        ? 9
        : 350 >= f
        ? 8
        : 400 >= f
        ? 7
        : 500 >= f
        ? 6
        : 600 >= f
        ? 5
        : 800 >= f
        ? 4
        : 1250 >= f
        ? 3
        : 2;
    }
    function e(f) {
      return (
        void 0 !== A.globalScope &&
        "object" == typeof A.globalScope.crypto &&
        "object" == typeof A.globalScope.crypto.subtle &&
        "function" == typeof A.globalScope.crypto.subtle[f]
      );
    }
    function a(f) {
      return (
        void 0 !== A.globalScope &&
        "object" == typeof A.globalScope.msCrypto &&
        "object" == typeof A.globalScope.msCrypto.subtle &&
        "function" == typeof A.globalScope.msCrypto.subtle[f]
      );
    }
    function b(f) {
      f = g.util.hexToBytes(f.toString(16));
      for (var r = new Uint8Array(f.length), F = 0; F < f.length; ++F) r[F] = f.charCodeAt(F);
      return r;
    }
    var g = H("./node_modules/node-forge/lib/forge.js");
    if (
      (H("./node_modules/node-forge/lib/asn1.js"),
      H("./node_modules/node-forge/lib/jsbn.js"),
      H("./node_modules/node-forge/lib/oids.js"),
      H("./node_modules/node-forge/lib/pkcs1.js"),
      H("./node_modules/node-forge/lib/prime.js"),
      H("./node_modules/node-forge/lib/random.js"),
      H("./node_modules/node-forge/lib/util.js"),
      void 0 === q)
    )
      var q = g.jsbn.BigInteger;
    var D = g.util.isNodejs ? H(0) : null,
      t = g.asn1,
      A = g.util;
    g.pki = g.pki || {};
    O.exports = g.pki.rsa = g.rsa = g.rsa || {};
    var v = g.pki,
      L = [6, 4, 2, 4, 2, 4, 6, 2],
      K = {
        name: "PrivateKeyInfo",
        tagClass: t.Class.UNIVERSAL,
        type: t.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "PrivateKeyInfo.version",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.INTEGER,
            constructed: !1,
            capture: "privateKeyVersion"
          },
          {
            name: "PrivateKeyInfo.privateKeyAlgorithm",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "AlgorithmIdentifier.algorithm",
                tagClass: t.Class.UNIVERSAL,
                type: t.Type.OID,
                constructed: !1,
                capture: "privateKeyOid"
              }
            ]
          },
          { name: "PrivateKeyInfo", tagClass: t.Class.UNIVERSAL, type: t.Type.OCTETSTRING, constructed: !1, capture: "privateKey" }
        ]
      },
      J = {
        name: "RSAPrivateKey",
        tagClass: t.Class.UNIVERSAL,
        type: t.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "RSAPrivateKey.version",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.INTEGER,
            constructed: !1,
            capture: "privateKeyVersion"
          },
          {
            name: "RSAPrivateKey.modulus",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.INTEGER,
            constructed: !1,
            capture: "privateKeyModulus"
          },
          {
            name: "RSAPrivateKey.publicExponent",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.INTEGER,
            constructed: !1,
            capture: "privateKeyPublicExponent"
          },
          {
            name: "RSAPrivateKey.privateExponent",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.INTEGER,
            constructed: !1,
            capture: "privateKeyPrivateExponent"
          },
          { name: "RSAPrivateKey.prime1", tagClass: t.Class.UNIVERSAL, type: t.Type.INTEGER, constructed: !1, capture: "privateKeyPrime1" },
          { name: "RSAPrivateKey.prime2", tagClass: t.Class.UNIVERSAL, type: t.Type.INTEGER, constructed: !1, capture: "privateKeyPrime2" },
          {
            name: "RSAPrivateKey.exponent1",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.INTEGER,
            constructed: !1,
            capture: "privateKeyExponent1"
          },
          {
            name: "RSAPrivateKey.exponent2",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.INTEGER,
            constructed: !1,
            capture: "privateKeyExponent2"
          },
          {
            name: "RSAPrivateKey.coefficient",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.INTEGER,
            constructed: !1,
            capture: "privateKeyCoefficient"
          }
        ]
      },
      l = {
        name: "RSAPublicKey",
        tagClass: t.Class.UNIVERSAL,
        type: t.Type.SEQUENCE,
        constructed: !0,
        value: [
          { name: "RSAPublicKey.modulus", tagClass: t.Class.UNIVERSAL, type: t.Type.INTEGER, constructed: !1, capture: "publicKeyModulus" },
          {
            name: "RSAPublicKey.exponent",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.INTEGER,
            constructed: !1,
            capture: "publicKeyExponent"
          }
        ]
      },
      z = (g.pki.rsa.publicKeyValidator = {
        name: "SubjectPublicKeyInfo",
        tagClass: t.Class.UNIVERSAL,
        type: t.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "subjectPublicKeyInfo",
        value: [
          {
            name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "AlgorithmIdentifier.algorithm",
                tagClass: t.Class.UNIVERSAL,
                type: t.Type.OID,
                constructed: !1,
                capture: "publicKeyOid"
              }
            ]
          },
          {
            name: "SubjectPublicKeyInfo.subjectPublicKey",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.BITSTRING,
            constructed: !1,
            value: [
              {
                name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
                tagClass: t.Class.UNIVERSAL,
                type: t.Type.SEQUENCE,
                constructed: !0,
                optional: !0,
                captureAsn1: "rsaPublicKey"
              }
            ]
          }
        ]
      }),
      p = {
        name: "DigestInfo",
        tagClass: t.Class.UNIVERSAL,
        type: t.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "DigestInfo.DigestAlgorithm",
            tagClass: t.Class.UNIVERSAL,
            type: t.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
                tagClass: t.Class.UNIVERSAL,
                type: t.Type.OID,
                constructed: !1,
                capture: "algorithmIdentifier"
              },
              {
                name: "DigestInfo.DigestAlgorithm.parameters",
                tagClass: t.Class.UNIVERSAL,
                type: t.Type.NULL,
                capture: "parameters",
                optional: !0,
                constructed: !1
              }
            ]
          },
          { name: "DigestInfo.digest", tagClass: t.Class.UNIVERSAL, type: t.Type.OCTETSTRING, constructed: !1, capture: "digest" }
        ]
      },
      c = function (f) {
        if (!(f.algorithm in v.oids)) {
          var r = Error("Unknown message digest algorithm.");
          throw ((r.algorithm = f.algorithm), r);
        }
        var F = t.oidToDer(v.oids[f.algorithm]).getBytes();
        r = t.create(t.Class.UNIVERSAL, t.Type.SEQUENCE, !0, []);
        var M = t.create(t.Class.UNIVERSAL, t.Type.SEQUENCE, !0, []);
        M.value.push(t.create(t.Class.UNIVERSAL, t.Type.OID, !1, F));
        M.value.push(t.create(t.Class.UNIVERSAL, t.Type.NULL, !1, ""));
        f = t.create(t.Class.UNIVERSAL, t.Type.OCTETSTRING, !1, f.digest().getBytes());
        return r.value.push(M), r.value.push(f), t.toDer(r).getBytes();
      },
      h = function (f, r, F) {
        if (F) return f.modPow(r.e, r.n);
        if (!r.p || !r.q) return f.modPow(r.d, r.n);
        r.dP || (r.dP = r.d.mod(r.p.subtract(q.ONE)));
        r.dQ || (r.dQ = r.d.mod(r.q.subtract(q.ONE)));
        r.qInv || (r.qInv = r.q.modInverse(r.p));
        do F = new q(g.util.bytesToHex(g.random.getBytes(r.n.bitLength() / 8)), 16);
        while (0 <= F.compareTo(r.n) || !F.gcd(r.n).equals(q.ONE));
        var M = (f = f.multiply(F.modPow(r.e, r.n)).mod(r.n)).mod(r.p).modPow(r.dP, r.p);
        for (f = f.mod(r.q).modPow(r.dQ, r.q); 0 > M.compareTo(f); ) M = M.add(r.p);
        return M.subtract(f).multiply(r.qInv).mod(r.p).multiply(r.q).add(f).multiply(F.modInverse(r.n)).mod(r.n);
      };
    v.rsa.encrypt = function (f, r, F) {
      var M,
        R = F,
        m = Math.ceil(r.n.bitLength() / 8);
      !1 !== F && !0 !== F ? ((R = 2 === F), (M = n(f, r, F))) : (M = g.util.createBuffer()).putBytes(f);
      f = new q(M.toHex(), 16);
      r = h(f, r, R).toString(16);
      R = g.util.createBuffer();
      for (m -= Math.ceil(r.length / 2); 0 < m; ) R.putByte(0), --m;
      return R.putBytes(g.util.hexToBytes(r)), R.getBytes();
    };
    v.rsa.decrypt = function (f, r, F, M) {
      var R = Math.ceil(r.n.bitLength() / 8);
      if (f.length !== R) throw ((r = Error("Encrypted message length is invalid.")), (r.length = f.length), (r.expected = R), r);
      f = new q(g.util.createBuffer(f).toHex(), 16);
      if (0 <= f.compareTo(r.n)) throw Error("Encrypted message is invalid.");
      f = h(f, r, F).toString(16);
      var m = g.util.createBuffer();
      for (R -= Math.ceil(f.length / 2); 0 < R; ) m.putByte(0), --R;
      return m.putBytes(g.util.hexToBytes(f)), !1 !== M ? E(m.getBytes(), r, F) : m.getBytes();
    };
    v.rsa.createKeyPairGenerationState = function (f, r, F) {
      "string" == typeof f && (f = parseInt(f, 10));
      f = f || 2048;
      var M,
        R = (F = F || {}).prng || g.random;
      F = F.algorithm || "PRIMEINC";
      if ("PRIMEINC" !== F) throw Error("Invalid key generation algorithm: " + F);
      return (
        (M = {
          algorithm: F,
          state: 0,
          bits: f,
          rng: {
            nextBytes: function (m) {
              for (var u = R.getBytesSync(m.length), I = 0; I < m.length; ++I) m[I] = u.charCodeAt(I);
            }
          },
          eInt: r || 65537,
          e: new q(null),
          p: null,
          q: null,
          qBits: f >> 1,
          pBits: f - (f >> 1),
          pqState: 0,
          num: null,
          keys: null
        }).e.fromInt(M.eInt),
        M
      );
    };
    v.rsa.stepKeyPairGenerationState = function (f, r) {
      "algorithm" in f || (f.algorithm = "PRIMEINC");
      var F = new q(null);
      F.fromInt(30);
      for (
        var M,
          R = 0,
          m = function (y, G) {
            return y | G;
          },
          u = +new Date(),
          I = 0;
        null === f.keys && (0 >= r || I < r);

      ) {
        if (0 === f.state) {
          M = null === f.p ? f.pBits : f.qBits;
          var k = M - 1;
          0 === f.pqState
            ? ((f.num = new q(M, f.rng)),
              f.num.testBit(k) || f.num.bitwiseTo(q.ONE.shiftLeft(k), m, f.num),
              f.num.dAddOffset(31 - f.num.mod(F).byteValue(), 0),
              (R = 0),
              ++f.pqState)
            : 1 === f.pqState
            ? f.num.bitLength() > M
              ? (f.pqState = 0)
              : f.num.isProbablePrime(d(f.num.bitLength()))
              ? ++f.pqState
              : f.num.dAddOffset(L[R++ % 8], 0)
            : 2 === f.pqState
            ? (f.pqState = 0 === f.num.subtract(q.ONE).gcd(f.e).compareTo(q.ONE) ? 3 : 0)
            : 3 === f.pqState &&
              ((f.pqState = 0), null === f.p ? (f.p = f.num) : (f.q = f.num), null !== f.p && null !== f.q && ++f.state, (f.num = null));
        } else
          1 === f.state
            ? (0 > f.p.compareTo(f.q) && ((f.num = f.p), (f.p = f.q), (f.q = f.num)), ++f.state)
            : 2 === f.state
            ? ((f.p1 = f.p.subtract(q.ONE)), (f.q1 = f.q.subtract(q.ONE)), (f.phi = f.p1.multiply(f.q1)), ++f.state)
            : 3 === f.state
            ? 0 === f.phi.gcd(f.e).compareTo(q.ONE)
              ? ++f.state
              : ((f.p = null), (f.q = null), (f.state = 0))
            : 4 === f.state
            ? ((f.n = f.p.multiply(f.q)), f.n.bitLength() === f.bits ? ++f.state : ((f.q = null), (f.state = 0)))
            : 5 === f.state &&
              ((M = f.e.modInverse(f.phi)),
              (f.keys = {
                privateKey: v.rsa.setPrivateKey(f.n, f.e, M, f.p, f.q, M.mod(f.p1), M.mod(f.q1), f.q.modInverse(f.p)),
                publicKey: v.rsa.setPublicKey(f.n, f.e)
              }));
        I += (M = +new Date()) - u;
        u = M;
      }
      return null !== f.keys;
    };
    v.rsa.generateKeyPair = function (f, r, F, M) {
      if (
        (1 === arguments.length
          ? "object" == typeof f
            ? ((F = f), (f = void 0))
            : "function" == typeof f && ((M = f), (f = void 0))
          : 2 === arguments.length
          ? "number" == typeof f
            ? "function" == typeof r
              ? ((M = r), (r = void 0))
              : "number" != typeof r && ((F = r), (r = void 0))
            : ((F = f), (M = r), (f = void 0), (r = void 0))
          : 3 === arguments.length &&
            ("number" == typeof r ? "function" == typeof F && ((M = F), (F = void 0)) : ((M = F), (F = r), (r = void 0))),
        (F = F || {}),
        void 0 === f && (f = F.bits || 2048),
        void 0 === r && (r = F.e || 65537),
        !g.options.usePureJavaScript && !F.prng && 256 <= f && 16384 >= f && (65537 === r || 3 === r))
      )
        if (M) {
          if (g.util.isNodejs && "function" == typeof D.generateKeyPair)
            return D.generateKeyPair(
              "rsa",
              {
                modulusLength: f,
                publicExponent: r,
                publicKeyEncoding: { type: "spki", format: "pem" },
                privateKeyEncoding: { type: "pkcs8", format: "pem" }
              },
              function (m, u, I) {
                if (m) return M(m);
                M(null, { privateKey: v.privateKeyFromPem(I), publicKey: v.publicKeyFromPem(u) });
              }
            );
          if (e("generateKey") && e("exportKey"))
            return A.globalScope.crypto.subtle
              .generateKey({ name: "RSASSA-PKCS1-v1_5", modulusLength: f, publicExponent: b(r), hash: { name: "SHA-256" } }, !0, [
                "sign",
                "verify"
              ])
              .then(function (m) {
                return A.globalScope.crypto.subtle.exportKey("pkcs8", m.privateKey);
              })
              .then(void 0, function (m) {
                M(m);
              })
              .then(function (m) {
                m &&
                  ((m = v.privateKeyFromAsn1(t.fromDer(g.util.createBuffer(m)))),
                  M(null, { privateKey: m, publicKey: v.setRsaPublicKey(m.n, m.e) }));
              });
          if (a("generateKey") && a("exportKey")) {
            var R = A.globalScope.msCrypto.subtle.generateKey(
              { name: "RSASSA-PKCS1-v1_5", modulusLength: f, publicExponent: b(r), hash: { name: "SHA-256" } },
              !0,
              ["sign", "verify"]
            );
            return (
              (R.oncomplete = function (m) {
                m = A.globalScope.msCrypto.subtle.exportKey("pkcs8", m.target.result.privateKey);
                m.oncomplete = function (u) {
                  u = v.privateKeyFromAsn1(t.fromDer(g.util.createBuffer(u.target.result)));
                  M(null, { privateKey: u, publicKey: v.setRsaPublicKey(u.n, u.e) });
                };
                m.onerror = function (u) {
                  M(u);
                };
              }),
              void (R.onerror = function (m) {
                M(m);
              })
            );
          }
        } else if (g.util.isNodejs && "function" == typeof D.generateKeyPairSync)
          return (
            (R = D.generateKeyPairSync("rsa", {
              modulusLength: f,
              publicExponent: r,
              publicKeyEncoding: { type: "spki", format: "pem" },
              privateKeyEncoding: { type: "pkcs8", format: "pem" }
            })),
            { privateKey: v.privateKeyFromPem(R.privateKey), publicKey: v.publicKeyFromPem(R.publicKey) }
          );
      R = v.rsa.createKeyPairGenerationState(f, r, F);
      if (!M) return v.rsa.stepKeyPairGenerationState(R, 0), R.keys;
      C(R, F, M);
    };
    v.setRsaPublicKey = v.rsa.setPublicKey = function (f, r) {
      var F = {
        n: f,
        e: r,
        encrypt: function (M, R, m) {
          if (("string" == typeof R ? (R = R.toUpperCase()) : void 0 === R && (R = "RSAES-PKCS1-V1_5"), "RSAES-PKCS1-V1_5" === R))
            R = {
              encode: function (u, I, k) {
                return n(u, I, 2).getBytes();
              }
            };
          else if ("RSA-OAEP" === R || "RSAES-OAEP" === R)
            R = {
              encode: function (u, I) {
                return g.pkcs1.encode_rsa_oaep(I, u, m);
              }
            };
          else if (-1 !== ["RAW", "NONE", "NULL", null].indexOf(R))
            R = {
              encode: function (u) {
                return u;
              }
            };
          else if ("string" == typeof R) throw Error('Unsupported encryption scheme: "' + R + '".');
          M = R.encode(M, F, !0);
          return v.rsa.encrypt(M, F, !0);
        },
        verify: function (M, R, m, u) {
          "string" == typeof m ? (m = m.toUpperCase()) : void 0 === m && (m = "RSASSA-PKCS1-V1_5");
          void 0 === u && (u = { _parseAllDigestBytes: !0 });
          "_parseAllDigestBytes" in u || (u._parseAllDigestBytes = !0);
          "RSASSA-PKCS1-V1_5" === m
            ? (m = {
                verify: function (I, k) {
                  k = E(k, F, !0);
                  var y = t.fromDer(k, { parseAllBytes: u._parseAllDigestBytes });
                  k = {};
                  var G = [];
                  if (!t.validate(y, p, k, G))
                    throw (((N = Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.")).errors = G), N);
                  var N;
                  y = t.derToOid(k.algorithmIdentifier);
                  if (
                    y !== g.oids.md2 &&
                    y !== g.oids.md5 &&
                    y !== g.oids.sha1 &&
                    y !== g.oids.sha224 &&
                    y !== g.oids.sha256 &&
                    y !== g.oids.sha384 &&
                    y !== g.oids.sha512 &&
                    y !== g.oids["sha512-224"] &&
                    y !== g.oids["sha512-256"]
                  )
                    throw (((N = Error("Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.")).oid = y), N);
                  if (!((y !== g.oids.md2 && y !== g.oids.md5) || "parameters" in k))
                    throw Error(
                      "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters."
                    );
                  return I === k.digest;
                }
              })
            : ("NONE" !== m && "NULL" !== m && null !== m) ||
              (m = {
                verify: function (I, k) {
                  return I === E(k, F, !0);
                }
              });
          R = v.rsa.decrypt(R, F, !0, !1);
          return m.verify(M, R, F.n.bitLength());
        }
      };
      return F;
    };
    v.setRsaPrivateKey = v.rsa.setPrivateKey = function (f, r, F, M, R, m, u, I) {
      var k = {
        n: f,
        e: r,
        d: F,
        p: M,
        q: R,
        dP: m,
        dQ: u,
        qInv: I,
        decrypt: function (y, G, N) {
          "string" == typeof G ? (G = G.toUpperCase()) : void 0 === G && (G = "RSAES-PKCS1-V1_5");
          y = v.rsa.decrypt(y, k, !1, !1);
          if ("RSAES-PKCS1-V1_5" === G) G = { decode: E };
          else if ("RSA-OAEP" === G || "RSAES-OAEP" === G)
            G = {
              decode: function (Q, T) {
                return g.pkcs1.decode_rsa_oaep(T, Q, N);
              }
            };
          else {
            if (-1 === ["RAW", "NONE", "NULL", null].indexOf(G)) throw Error('Unsupported encryption scheme: "' + G + '".');
            G = {
              decode: function (Q) {
                return Q;
              }
            };
          }
          return G.decode(y, k, !1);
        },
        sign: function (y, G) {
          var N = !1;
          "string" == typeof G && (G = G.toUpperCase());
          void 0 === G || "RSASSA-PKCS1-V1_5" === G
            ? ((G = { encode: c }), (N = 1))
            : ("NONE" !== G && "NULL" !== G && null !== G) ||
              ((G = {
                encode: function () {
                  return y;
                }
              }),
              (N = 1));
          G = G.encode(y, k.n.bitLength());
          return v.rsa.encrypt(G, k, N);
        }
      };
      return k;
    };
    v.wrapRsaPrivateKey = function (f) {
      return t.create(t.Class.UNIVERSAL, t.Type.SEQUENCE, !0, [
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, t.integerToDer(0).getBytes()),
        t.create(t.Class.UNIVERSAL, t.Type.SEQUENCE, !0, [
          t.create(t.Class.UNIVERSAL, t.Type.OID, !1, t.oidToDer(v.oids.rsaEncryption).getBytes()),
          t.create(t.Class.UNIVERSAL, t.Type.NULL, !1, "")
        ]),
        t.create(t.Class.UNIVERSAL, t.Type.OCTETSTRING, !1, t.toDer(f).getBytes())
      ]);
    };
    v.privateKeyFromAsn1 = function (f) {
      var r,
        F,
        M,
        R,
        m,
        u,
        I,
        k,
        y = {},
        G = [];
      if ((t.validate(f, K, y, G) && (f = t.fromDer(g.util.createBuffer(y.privateKey))), (y = {}), (G = []), !t.validate(f, J, y, G)))
        throw ((f = Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.")), (f.errors = G), f);
      return (
        (r = g.util.createBuffer(y.privateKeyModulus).toHex()),
        (F = g.util.createBuffer(y.privateKeyPublicExponent).toHex()),
        (M = g.util.createBuffer(y.privateKeyPrivateExponent).toHex()),
        (R = g.util.createBuffer(y.privateKeyPrime1).toHex()),
        (m = g.util.createBuffer(y.privateKeyPrime2).toHex()),
        (u = g.util.createBuffer(y.privateKeyExponent1).toHex()),
        (I = g.util.createBuffer(y.privateKeyExponent2).toHex()),
        (k = g.util.createBuffer(y.privateKeyCoefficient).toHex()),
        v.setRsaPrivateKey(new q(r, 16), new q(F, 16), new q(M, 16), new q(R, 16), new q(m, 16), new q(u, 16), new q(I, 16), new q(k, 16))
      );
    };
    v.privateKeyToAsn1 = v.privateKeyToRSAPrivateKey = function (f) {
      return t.create(t.Class.UNIVERSAL, t.Type.SEQUENCE, !0, [
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, t.integerToDer(0).getBytes()),
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, B(f.n)),
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, B(f.e)),
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, B(f.d)),
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, B(f.p)),
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, B(f.q)),
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, B(f.dP)),
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, B(f.dQ)),
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, B(f.qInv))
      ]);
    };
    v.publicKeyFromAsn1 = function (f) {
      var r = {},
        F = [];
      if (t.validate(f, z, r, F)) {
        var M;
        f = t.derToOid(r.publicKeyOid);
        if (f !== v.oids.rsaEncryption) throw (((M = Error("Cannot read public key. Unknown OID.")).oid = f), M);
        f = r.rsaPublicKey;
      }
      if (((F = []), !t.validate(f, l, r, F)))
        throw (((M = Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.")).errors = F), M);
      F = g.util.createBuffer(r.publicKeyModulus).toHex();
      r = g.util.createBuffer(r.publicKeyExponent).toHex();
      return v.setRsaPublicKey(new q(F, 16), new q(r, 16));
    };
    v.publicKeyToAsn1 = v.publicKeyToSubjectPublicKeyInfo = function (f) {
      return t.create(t.Class.UNIVERSAL, t.Type.SEQUENCE, !0, [
        t.create(t.Class.UNIVERSAL, t.Type.SEQUENCE, !0, [
          t.create(t.Class.UNIVERSAL, t.Type.OID, !1, t.oidToDer(v.oids.rsaEncryption).getBytes()),
          t.create(t.Class.UNIVERSAL, t.Type.NULL, !1, "")
        ]),
        t.create(t.Class.UNIVERSAL, t.Type.BITSTRING, !1, [v.publicKeyToRSAPublicKey(f)])
      ]);
    };
    v.publicKeyToRSAPublicKey = function (f) {
      return t.create(t.Class.UNIVERSAL, t.Type.SEQUENCE, !0, [
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, B(f.n)),
        t.create(t.Class.UNIVERSAL, t.Type.INTEGER, !1, B(f.e))
      ]);
    };
  },
  "./node_modules/node-forge/lib/sha1.js": function (O, w, H) {
    function n(d, e, a) {
      for (var b, g, q, D, t, A, v, L = a.length(); 64 <= L; ) {
        g = d.h0;
        q = d.h1;
        D = d.h2;
        t = d.h3;
        A = d.h4;
        for (v = 0; 16 > v; ++v)
          (b = a.getInt32()),
            (e[v] = b),
            (b = ((g << 5) | (g >>> 27)) + (t ^ (q & (D ^ t))) + A + 1518500249 + b),
            (A = t),
            (t = D),
            (D = ((q << 30) | (q >>> 2)) >>> 0),
            (q = g),
            (g = b);
        for (; 20 > v; ++v)
          (b = ((b = e[v - 3] ^ e[v - 8] ^ e[v - 14] ^ e[v - 16]) << 1) | (b >>> 31)),
            (e[v] = b),
            (b = ((g << 5) | (g >>> 27)) + (t ^ (q & (D ^ t))) + A + 1518500249 + b),
            (A = t),
            (t = D),
            (D = ((q << 30) | (q >>> 2)) >>> 0),
            (q = g),
            (g = b);
        for (; 32 > v; ++v)
          (b = ((b = e[v - 3] ^ e[v - 8] ^ e[v - 14] ^ e[v - 16]) << 1) | (b >>> 31)),
            (e[v] = b),
            (b = ((g << 5) | (g >>> 27)) + (q ^ D ^ t) + A + 1859775393 + b),
            (A = t),
            (t = D),
            (D = ((q << 30) | (q >>> 2)) >>> 0),
            (q = g),
            (g = b);
        for (; 40 > v; ++v)
          (b = ((b = e[v - 6] ^ e[v - 16] ^ e[v - 28] ^ e[v - 32]) << 2) | (b >>> 30)),
            (e[v] = b),
            (b = ((g << 5) | (g >>> 27)) + (q ^ D ^ t) + A + 1859775393 + b),
            (A = t),
            (t = D),
            (D = ((q << 30) | (q >>> 2)) >>> 0),
            (q = g),
            (g = b);
        for (; 60 > v; ++v)
          (b = ((b = e[v - 6] ^ e[v - 16] ^ e[v - 28] ^ e[v - 32]) << 2) | (b >>> 30)),
            (e[v] = b),
            (b = ((g << 5) | (g >>> 27)) + ((q & D) | (t & (q ^ D))) + A + 2400959708 + b),
            (A = t),
            (t = D),
            (D = ((q << 30) | (q >>> 2)) >>> 0),
            (q = g),
            (g = b);
        for (; 80 > v; ++v)
          (b = ((b = e[v - 6] ^ e[v - 16] ^ e[v - 28] ^ e[v - 32]) << 2) | (b >>> 30)),
            (e[v] = b),
            (b = ((g << 5) | (g >>> 27)) + (q ^ D ^ t) + A + 3395469782 + b),
            (A = t),
            (t = D),
            (D = ((q << 30) | (q >>> 2)) >>> 0),
            (q = g),
            (g = b);
        d.h0 = (d.h0 + g) | 0;
        d.h1 = (d.h1 + q) | 0;
        d.h2 = (d.h2 + D) | 0;
        d.h3 = (d.h3 + t) | 0;
        d.h4 = (d.h4 + A) | 0;
        L -= 64;
      }
    }
    var E = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/md.js");
    H("./node_modules/node-forge/lib/util.js");
    O = O.exports = E.sha1 = E.sha1 || {};
    E.md.sha1 = E.md.algorithms.sha1 = O;
    O.create = function () {
      B || ((C = String.fromCharCode(128)), (C += E.util.fillString(String.fromCharCode(0), 64)), (B = !0));
      var d = null,
        e = E.util.createBuffer(),
        a = Array(80),
        b = {
          algorithm: "sha1",
          blockLength: 64,
          digestLength: 20,
          messageLength: 0,
          fullMessageLength: null,
          messageLengthSize: 8,
          start: function () {
            b.messageLength = 0;
            b.fullMessageLength = b.messageLength64 = [];
            for (var g = b.messageLengthSize / 4, q = 0; q < g; ++q) b.fullMessageLength.push(0);
            return (e = E.util.createBuffer()), (d = { h0: 1732584193, h1: 4023233417, h2: 2562383102, h3: 271733878, h4: 3285377520 }), b;
          }
        };
      return (
        b.start(),
        (b.update = function (g, q) {
          "utf8" === q && (g = E.util.encodeUtf8(g));
          q = g.length;
          b.messageLength += q;
          q = [(q / 4294967296) >>> 0, q >>> 0];
          for (var D = b.fullMessageLength.length - 1; 0 <= D; --D)
            (b.fullMessageLength[D] += q[1]),
              (q[1] = q[0] + ((b.fullMessageLength[D] / 4294967296) >>> 0)),
              (b.fullMessageLength[D] >>>= 0),
              (q[0] = (q[1] / 4294967296) >>> 0);
          return e.putBytes(g), n(d, a, e), (2048 < e.read || 0 === e.length()) && e.compact(), b;
        }),
        (b.digest = function () {
          var g = E.util.createBuffer();
          g.putBytes(e.bytes());
          var q;
          g.putBytes(
            C.substr(0, b.blockLength - ((b.fullMessageLength[b.fullMessageLength.length - 1] + b.messageLengthSize) & (b.blockLength - 1)))
          );
          for (var D = 8 * b.fullMessageLength[0], t = 0; t < b.fullMessageLength.length - 1; ++t)
            (D += ((q = 8 * b.fullMessageLength[t + 1]) / 4294967296) >>> 0), g.putInt32(D >>> 0), (D = q >>> 0);
          g.putInt32(D);
          q = { h0: d.h0, h1: d.h1, h2: d.h2, h3: d.h3, h4: d.h4 };
          n(q, a, g);
          g = E.util.createBuffer();
          return g.putInt32(q.h0), g.putInt32(q.h1), g.putInt32(q.h2), g.putInt32(q.h3), g.putInt32(q.h4), g;
        }),
        b
      );
    };
    var C = null,
      B = !1;
  },
  "./node_modules/node-forge/lib/sha256.js": function (O, w, H) {
    function n(e, a, b) {
      for (var g, q, D, t, A, v, L, K, J, l, z, p, c = b.length(); 64 <= c; ) {
        for (t = 0; 16 > t; ++t) a[t] = b.getInt32();
        for (; 64 > t; ++t)
          (g = (((g = a[t - 2]) >>> 17) | (g << 15)) ^ ((g >>> 19) | (g << 13)) ^ (g >>> 10)),
            (q = (((q = a[t - 15]) >>> 7) | (q << 25)) ^ ((q >>> 18) | (q << 14)) ^ (q >>> 3)),
            (a[t] = (g + a[t - 7] + q + a[t - 16]) | 0);
        A = e.h0;
        v = e.h1;
        L = e.h2;
        K = e.h3;
        J = e.h4;
        l = e.h5;
        z = e.h6;
        p = e.h7;
        for (t = 0; 64 > t; ++t)
          (q = ((A >>> 2) | (A << 30)) ^ ((A >>> 13) | (A << 19)) ^ ((A >>> 22) | (A << 10))),
            (D = (A & v) | (L & (A ^ v))),
            (g = p + (((J >>> 6) | (J << 26)) ^ ((J >>> 11) | (J << 21)) ^ ((J >>> 25) | (J << 7))) + (z ^ (J & (l ^ z))) + d[t] + a[t]),
            (p = z),
            (z = l),
            (l = J),
            (J = (K + g) >>> 0),
            (K = L),
            (L = v),
            (v = A),
            (A = (g + (q += D)) >>> 0);
        e.h0 = (e.h0 + A) | 0;
        e.h1 = (e.h1 + v) | 0;
        e.h2 = (e.h2 + L) | 0;
        e.h3 = (e.h3 + K) | 0;
        e.h4 = (e.h4 + J) | 0;
        e.h5 = (e.h5 + l) | 0;
        e.h6 = (e.h6 + z) | 0;
        e.h7 = (e.h7 + p) | 0;
        c -= 64;
      }
    }
    var E = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/md.js");
    H("./node_modules/node-forge/lib/util.js");
    O = O.exports = E.sha256 = E.sha256 || {};
    E.md.sha256 = E.md.algorithms.sha256 = O;
    O.create = function () {
      B ||
        ((C = String.fromCharCode(128)),
        (C += E.util.fillString(String.fromCharCode(0), 64)),
        (d = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278,
          1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122,
          1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205,
          773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
          1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
        ]),
        (B = !0));
      var e = null,
        a = E.util.createBuffer(),
        b = Array(64),
        g = {
          algorithm: "sha256",
          blockLength: 64,
          digestLength: 32,
          messageLength: 0,
          fullMessageLength: null,
          messageLengthSize: 8,
          start: function () {
            g.messageLength = 0;
            g.fullMessageLength = g.messageLength64 = [];
            for (var q = g.messageLengthSize / 4, D = 0; D < q; ++D) g.fullMessageLength.push(0);
            return (
              (a = E.util.createBuffer()),
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
              g
            );
          }
        };
      return (
        g.start(),
        (g.update = function (q, D) {
          "utf8" === D && (q = E.util.encodeUtf8(q));
          D = q.length;
          g.messageLength += D;
          D = [(D / 4294967296) >>> 0, D >>> 0];
          for (var t = g.fullMessageLength.length - 1; 0 <= t; --t)
            (g.fullMessageLength[t] += D[1]),
              (D[1] = D[0] + ((g.fullMessageLength[t] / 4294967296) >>> 0)),
              (g.fullMessageLength[t] >>>= 0),
              (D[0] = (D[1] / 4294967296) >>> 0);
          return a.putBytes(q), n(e, b, a), (2048 < a.read || 0 === a.length()) && a.compact(), g;
        }),
        (g.digest = function () {
          var q = E.util.createBuffer();
          q.putBytes(a.bytes());
          var D;
          q.putBytes(
            C.substr(0, g.blockLength - ((g.fullMessageLength[g.fullMessageLength.length - 1] + g.messageLengthSize) & (g.blockLength - 1)))
          );
          for (var t = 8 * g.fullMessageLength[0], A = 0; A < g.fullMessageLength.length - 1; ++A)
            (t += ((D = 8 * g.fullMessageLength[A + 1]) / 4294967296) >>> 0), q.putInt32(t >>> 0), (t = D >>> 0);
          q.putInt32(t);
          D = { h0: e.h0, h1: e.h1, h2: e.h2, h3: e.h3, h4: e.h4, h5: e.h5, h6: e.h6, h7: e.h7 };
          n(D, b, q);
          q = E.util.createBuffer();
          return (
            q.putInt32(D.h0),
            q.putInt32(D.h1),
            q.putInt32(D.h2),
            q.putInt32(D.h3),
            q.putInt32(D.h4),
            q.putInt32(D.h5),
            q.putInt32(D.h6),
            q.putInt32(D.h7),
            q
          );
        }),
        g
      );
    };
    var C = null,
      B = !1,
      d = null;
  },
  "./node_modules/node-forge/lib/sha512.js": function (O, w, H) {
    function n(b, g, q) {
      for (var D, t, A, v, L, K, J, l, z, p, c, h, f, r, F, M, R, m, u, I, k, y, G, N, Q, T, V, S = q.length(); 128 <= S; ) {
        for (G = 0; 16 > G; ++G) (g[G][0] = q.getInt32() >>> 0), (g[G][1] = q.getInt32() >>> 0);
        for (; 80 > G; ++G)
          (D = ((((N = (T = g[G - 2])[0]) >>> 19) | ((Q = T[1]) << 13)) ^ ((Q >>> 29) | (N << 3)) ^ (N >>> 6)) >>> 0),
            (t = (((N << 13) | (Q >>> 19)) ^ ((Q << 3) | (N >>> 29)) ^ ((N << 26) | (Q >>> 6))) >>> 0),
            (A = ((((N = (V = g[G - 15])[0]) >>> 1) | ((Q = V[1]) << 31)) ^ ((N >>> 8) | (Q << 24)) ^ (N >>> 7)) >>> 0),
            (v = (((N << 31) | (Q >>> 1)) ^ ((N << 24) | (Q >>> 8)) ^ ((N << 25) | (Q >>> 7))) >>> 0),
            (J = g[G - 7]),
            (l = g[G - 16]),
            (Q = t + J[1] + v + l[1]),
            (g[G][0] = (D + J[0] + A + l[0] + ((Q / 4294967296) >>> 0)) >>> 0),
            (g[G][1] = Q >>> 0);
        J = b[0][0];
        l = b[0][1];
        z = b[1][0];
        p = b[1][1];
        c = b[2][0];
        h = b[2][1];
        f = b[3][0];
        r = b[3][1];
        F = b[4][0];
        M = b[4][1];
        R = b[5][0];
        m = b[5][1];
        u = b[6][0];
        I = b[6][1];
        k = b[7][0];
        y = b[7][1];
        for (G = 0; 80 > G; ++G)
          (D = (((F >>> 14) | (M << 18)) ^ ((F >>> 18) | (M << 14)) ^ ((M >>> 9) | (F << 23))) >>> 0),
            (t = (u ^ (F & (R ^ u))) >>> 0),
            (A = (((J >>> 28) | (l << 4)) ^ ((l >>> 2) | (J << 30)) ^ ((l >>> 7) | (J << 25))) >>> 0),
            (v = (((J << 4) | (l >>> 28)) ^ ((l << 30) | (J >>> 2)) ^ ((l << 25) | (J >>> 7))) >>> 0),
            (L = ((J & z) | (c & (J ^ z))) >>> 0),
            (K = ((l & p) | (h & (l ^ p))) >>> 0),
            (Q =
              y +
              ((((F << 18) | (M >>> 14)) ^ ((F << 14) | (M >>> 18)) ^ ((M << 23) | (F >>> 9))) >>> 0) +
              ((I ^ (M & (m ^ I))) >>> 0) +
              e[G][1] +
              g[G][1]),
            (D = (k + D + t + e[G][0] + g[G][0] + ((Q / 4294967296) >>> 0)) >>> 0),
            (t = Q >>> 0),
            (A = (A + L + (((Q = v + K) / 4294967296) >>> 0)) >>> 0),
            (v = Q >>> 0),
            (k = u),
            (y = I),
            (u = R),
            (I = m),
            (R = F),
            (m = M),
            (F = (f + D + (((Q = r + t) / 4294967296) >>> 0)) >>> 0),
            (M = Q >>> 0),
            (f = c),
            (r = h),
            (c = z),
            (h = p),
            (z = J),
            (p = l),
            (J = (D + A + (((Q = t + v) / 4294967296) >>> 0)) >>> 0),
            (l = Q >>> 0);
        Q = b[0][1] + l;
        b[0][0] = (b[0][0] + J + ((Q / 4294967296) >>> 0)) >>> 0;
        b[0][1] = Q >>> 0;
        Q = b[1][1] + p;
        b[1][0] = (b[1][0] + z + ((Q / 4294967296) >>> 0)) >>> 0;
        b[1][1] = Q >>> 0;
        Q = b[2][1] + h;
        b[2][0] = (b[2][0] + c + ((Q / 4294967296) >>> 0)) >>> 0;
        b[2][1] = Q >>> 0;
        Q = b[3][1] + r;
        b[3][0] = (b[3][0] + f + ((Q / 4294967296) >>> 0)) >>> 0;
        b[3][1] = Q >>> 0;
        Q = b[4][1] + M;
        b[4][0] = (b[4][0] + F + ((Q / 4294967296) >>> 0)) >>> 0;
        b[4][1] = Q >>> 0;
        Q = b[5][1] + m;
        b[5][0] = (b[5][0] + R + ((Q / 4294967296) >>> 0)) >>> 0;
        b[5][1] = Q >>> 0;
        Q = b[6][1] + I;
        b[6][0] = (b[6][0] + u + ((Q / 4294967296) >>> 0)) >>> 0;
        b[6][1] = Q >>> 0;
        Q = b[7][1] + y;
        b[7][0] = (b[7][0] + k + ((Q / 4294967296) >>> 0)) >>> 0;
        b[7][1] = Q >>> 0;
        S -= 128;
      }
    }
    var E = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/md.js");
    H("./node_modules/node-forge/lib/util.js");
    var C = (O.exports = E.sha512 = E.sha512 || {});
    E.md.sha512 = E.md.algorithms.sha512 = C;
    O = E.sha384 = E.sha512.sha384 = E.sha512.sha384 || {};
    O.create = function () {
      return C.create("SHA-384");
    };
    E.md.sha384 = E.md.algorithms.sha384 = O;
    E.sha512.sha256 = E.sha512.sha256 || {
      create: function () {
        return C.create("SHA-512/256");
      }
    };
    E.md["sha512/256"] = E.md.algorithms["sha512/256"] = E.sha512.sha256;
    E.sha512.sha224 = E.sha512.sha224 || {
      create: function () {
        return C.create("SHA-512/224");
      }
    };
    E.md["sha512/224"] = E.md.algorithms["sha512/224"] = E.sha512.sha224;
    C.create = function (b) {
      if (
        (d ||
          ((B = String.fromCharCode(128)),
          (B += E.util.fillString(String.fromCharCode(0), 128)),
          (e = [
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
          ((a = {})["SHA-512"] = [
            [1779033703, 4089235720],
            [3144134277, 2227873595],
            [1013904242, 4271175723],
            [2773480762, 1595750129],
            [1359893119, 2917565137],
            [2600822924, 725511199],
            [528734635, 4215389547],
            [1541459225, 327033209]
          ]),
          (a["SHA-384"] = [
            [3418070365, 3238371032],
            [1654270250, 914150663],
            [2438529370, 812702999],
            [355462360, 4144912697],
            [1731405415, 4290775857],
            [2394180231, 1750603025],
            [3675008525, 1694076839],
            [1203062813, 3204075428]
          ]),
          (a["SHA-512/256"] = [
            [573645204, 4230739756],
            [2673172387, 3360449730],
            [596883563, 1867755857],
            [2520282905, 1497426621],
            [2519219938, 2827943907],
            [3193839141, 1401305490],
            [721525244, 746961066],
            [246885852, 2177182882]
          ]),
          (a["SHA-512/224"] = [
            [2352822216, 424955298],
            [1944164710, 2312950998],
            [502970286, 855612546],
            [1738396948, 1479516111],
            [258812777, 2077511080],
            [2011393907, 79989058],
            [1067287976, 1780299464],
            [286451373, 2446758561]
          ]),
          (d = !0)),
        void 0 === b && (b = "SHA-512"),
        !(b in a))
      )
        throw Error("Invalid SHA-512 algorithm: " + b);
      for (var g = a[b], q = null, D = E.util.createBuffer(), t = Array(80), A = 0; 80 > A; ++A) t[A] = Array(2);
      A = 64;
      switch (b) {
        case "SHA-384":
          A = 48;
          break;
        case "SHA-512/256":
          A = 32;
          break;
        case "SHA-512/224":
          A = 28;
      }
      var v = {
        algorithm: b.replace("-", "").toLowerCase(),
        blockLength: 128,
        digestLength: A,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 16,
        start: function () {
          v.messageLength = 0;
          v.fullMessageLength = v.messageLength128 = [];
          for (var L = v.messageLengthSize / 4, K = 0; K < L; ++K) v.fullMessageLength.push(0);
          D = E.util.createBuffer();
          q = Array(g.length);
          for (K = 0; K < g.length; ++K) q[K] = g[K].slice(0);
          return v;
        }
      };
      return (
        v.start(),
        (v.update = function (L, K) {
          "utf8" === K && (L = E.util.encodeUtf8(L));
          K = L.length;
          v.messageLength += K;
          K = [(K / 4294967296) >>> 0, K >>> 0];
          for (var J = v.fullMessageLength.length - 1; 0 <= J; --J)
            (v.fullMessageLength[J] += K[1]),
              (K[1] = K[0] + ((v.fullMessageLength[J] / 4294967296) >>> 0)),
              (v.fullMessageLength[J] >>>= 0),
              (K[0] = (K[1] / 4294967296) >>> 0);
          return D.putBytes(L), n(q, t, D), (2048 < D.read || 0 === D.length()) && D.compact(), v;
        }),
        (v.digest = function () {
          var L = E.util.createBuffer();
          L.putBytes(D.bytes());
          var K;
          L.putBytes(
            B.substr(0, v.blockLength - ((v.fullMessageLength[v.fullMessageLength.length - 1] + v.messageLengthSize) & (v.blockLength - 1)))
          );
          for (var J = 8 * v.fullMessageLength[0], l = 0; l < v.fullMessageLength.length - 1; ++l)
            (J += ((K = 8 * v.fullMessageLength[l + 1]) / 4294967296) >>> 0), L.putInt32(J >>> 0), (J = K >>> 0);
          L.putInt32(J);
          K = Array(q.length);
          for (l = 0; l < q.length; ++l) K[l] = q[l].slice(0);
          n(K, t, L);
          J = E.util.createBuffer();
          L = "SHA-512" === b ? K.length : "SHA-384" === b ? K.length - 2 : K.length - 4;
          for (l = 0; l < L; ++l) J.putInt32(K[l][0]), (l === L - 1 && "SHA-512/224" === b) || J.putInt32(K[l][1]);
          return J;
        }),
        v
      );
    };
    var B = null,
      d = !1,
      e = null,
      a = null;
  },
  "./node_modules/node-forge/lib/ssh.js": function (O, w, H) {
    function n(d, e) {
      e = e.toString(16);
      "8" <= e[0] && (e = "00" + e);
      e = B.util.hexToBytes(e);
      d.putInt32(e.length);
      d.putBytes(e);
    }
    function E(d, e) {
      d.putInt32(e.length);
      d.putString(e);
    }
    function C() {
      for (var d = B.md.sha1.create(), e = arguments.length, a = 0; a < e; ++a) d.update(arguments[a]);
      return d.digest();
    }
    var B = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/aes.js");
    H("./node_modules/node-forge/lib/hmac.js");
    H("./node_modules/node-forge/lib/md5.js");
    H("./node_modules/node-forge/lib/sha1.js");
    H("./node_modules/node-forge/lib/util.js");
    O = O.exports = B.ssh = B.ssh || {};
    O.privateKeyToPutty = function (d, e, a) {
      var b = "" === (e = e || "") ? "none" : "aes256-cbc";
      var g = "PuTTY-User-Key-File-2: ssh-rsa\r\nEncryption: " + (b + "\r\nComment: ") + ((a = a || "") + "\r\n");
      var q = B.util.createBuffer();
      E(q, "ssh-rsa");
      n(q, d.e);
      n(q, d.n);
      var D = B.util.encode64(q.bytes(), 64);
      g += "Public-Lines: " + (Math.floor(D.length / 66) + 1) + "\r\n";
      g += D;
      D = B.util.createBuffer();
      if ((n(D, d.d), n(D, d.p), n(D, d.q), n(D, d.qInv), e)) {
        d = D.length() + 16 - 1;
        d -= d % 16;
        var t = C(D.bytes());
        t.truncate(t.length() - d + D.length());
        D.putBuffer(t);
        d = B.util.createBuffer();
        d.putBuffer(C("\x00\x00\x00\x00", e));
        d.putBuffer(C("\x00\x00\x00\u0001", e));
        d = B.aes.createEncryptionCipher(d.truncate(8), "CBC");
        d.start(B.util.createBuffer().fillWithByte(0, 16));
        d.update(D.copy());
        d.finish();
        d = d.output;
        d.truncate(16);
        d = B.util.encode64(d.bytes(), 64);
      } else d = B.util.encode64(D.bytes(), 64);
      g += "\r\nPrivate-Lines: " + (Math.floor(d.length / 66) + 1) + "\r\n";
      g += d;
      e = C("putty-private-key-file-mac-key", e);
      d = B.util.createBuffer();
      E(d, "ssh-rsa");
      E(d, b);
      E(d, a);
      d.putInt32(q.length());
      d.putBuffer(q);
      d.putInt32(D.length());
      d.putBuffer(D);
      a = B.hmac.create();
      return a.start("sha1", e), a.update(d.bytes()), g + ("\r\nPrivate-MAC: " + a.digest().toHex() + "\r\n");
    };
    O.publicKeyToOpenSSH = function (d, e) {
      e = e || "";
      var a = B.util.createBuffer();
      return E(a, "ssh-rsa"), n(a, d.e), n(a, d.n), "ssh-rsa " + B.util.encode64(a.bytes()) + " " + e;
    };
    O.privateKeyToOpenSSH = function (d, e) {
      return e ? B.pki.encryptRsaPrivateKey(d, e, { legacy: !0, algorithm: "aes128" }) : B.pki.privateKeyToPem(d);
    };
    O.getPublicKeyFingerprint = function (d, e) {
      var a = (e = e || {}).md || B.md.md5.create(),
        b = B.util.createBuffer();
      E(b, "ssh-rsa");
      n(b, d.e);
      n(b, d.n);
      a.start();
      a.update(b.getBytes());
      d = a.digest();
      if ("hex" === e.encoding) return (d = d.toHex()), e.delimiter ? d.match(/.{2}/g).join(e.delimiter) : d;
      if ("binary" === e.encoding) return d.getBytes();
      if (e.encoding) throw Error('Unknown encoding "' + e.encoding + '".');
      return d;
    };
  },
  "./node_modules/node-forge/lib/tls.js": function (O, w, H) {
    var n = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/asn1.js");
    H("./node_modules/node-forge/lib/hmac.js");
    H("./node_modules/node-forge/lib/md5.js");
    H("./node_modules/node-forge/lib/pem.js");
    H("./node_modules/node-forge/lib/pki.js");
    H("./node_modules/node-forge/lib/random.js");
    H("./node_modules/node-forge/lib/sha1.js");
    H("./node_modules/node-forge/lib/util.js");
    var E = function (k, y, G, N) {
        var Q = n.util.createBuffer(),
          T = k.length >> 1,
          V = T + (1 & k.length),
          S = k.substr(0, V);
        V = k.substr(T, V);
        k = n.util.createBuffer();
        T = n.hmac.create();
        G = y + G;
        var P = Math.ceil(N / 16);
        y = Math.ceil(N / 20);
        T.start("MD5", S);
        S = n.util.createBuffer();
        k.putBytes(G);
        for (var x = 0; x < P; ++x)
          T.start(null, null),
            T.update(k.getBytes()),
            k.putBuffer(T.digest()),
            T.start(null, null),
            T.update(k.bytes() + G),
            S.putBuffer(T.digest());
        T.start("SHA1", V);
        V = n.util.createBuffer();
        k.clear();
        k.putBytes(G);
        for (x = 0; x < y; ++x)
          T.start(null, null),
            T.update(k.getBytes()),
            k.putBuffer(T.digest()),
            T.start(null, null),
            T.update(k.bytes() + G),
            V.putBuffer(T.digest());
        return Q.putBytes(n.util.xorBytes(S.getBytes(), V.getBytes(), N)), Q;
      },
      C = function (k, y, G) {
        G = !1;
        try {
          var N = k.deflate(y.fragment.getBytes());
          y.fragment = n.util.createBuffer(N);
          y.length = N.length;
          G = !0;
        } catch (Q) {}
        return G;
      },
      B = function (k, y, G) {
        G = !1;
        try {
          var N = k.inflate(y.fragment.getBytes());
          y.fragment = n.util.createBuffer(N);
          y.length = N.length;
          G = !0;
        } catch (Q) {}
        return G;
      },
      d = function (k, y) {
        var G = 0;
        switch (y) {
          case 1:
            G = k.getByte();
            break;
          case 2:
            G = k.getInt16();
            break;
          case 3:
            G = k.getInt24();
            break;
          case 4:
            G = k.getInt32();
        }
        return n.util.createBuffer(k.getBytes(G));
      },
      e = function (k, y, G) {
        k.putInt(G.length(), y << 3);
        k.putBuffer(G);
      },
      a = { Versions: { TLS_1_0: { major: 3, minor: 1 }, TLS_1_1: { major: 3, minor: 2 }, TLS_1_2: { major: 3, minor: 3 } } };
    a.SupportedVersions = [a.Versions.TLS_1_1, a.Versions.TLS_1_0];
    a.Version = a.SupportedVersions[0];
    a.MaxFragment = 15360;
    a.ConnectionEnd = { server: 0, client: 1 };
    a.PRFAlgorithm = { tls_prf_sha256: 0 };
    a.BulkCipherAlgorithm = { none: null, rc4: 0, des3: 1, aes: 2 };
    a.CipherType = { stream: 0, block: 1, aead: 2 };
    a.MACAlgorithm = { none: null, hmac_md5: 0, hmac_sha1: 1, hmac_sha256: 2, hmac_sha384: 3, hmac_sha512: 4 };
    a.CompressionMethod = { none: 0, deflate: 1 };
    a.ContentType = { change_cipher_spec: 20, alert: 21, handshake: 22, application_data: 23, heartbeat: 24 };
    a.HandshakeType = {
      hello_request: 0,
      client_hello: 1,
      server_hello: 2,
      certificate: 11,
      server_key_exchange: 12,
      certificate_request: 13,
      server_hello_done: 14,
      certificate_verify: 15,
      client_key_exchange: 16,
      finished: 20
    };
    a.Alert = {};
    a.Alert.Level = { warning: 1, fatal: 2 };
    a.Alert.Description = {
      close_notify: 0,
      unexpected_message: 10,
      bad_record_mac: 20,
      decryption_failed: 21,
      record_overflow: 22,
      decompression_failure: 30,
      handshake_failure: 40,
      bad_certificate: 42,
      unsupported_certificate: 43,
      certificate_revoked: 44,
      certificate_expired: 45,
      certificate_unknown: 46,
      illegal_parameter: 47,
      unknown_ca: 48,
      access_denied: 49,
      decode_error: 50,
      decrypt_error: 51,
      export_restriction: 60,
      protocol_version: 70,
      insufficient_security: 71,
      internal_error: 80,
      user_canceled: 90,
      no_renegotiation: 100
    };
    a.HeartbeatMessageType = { heartbeat_request: 1, heartbeat_response: 2 };
    a.CipherSuites = {};
    a.getCipherSuite = function (k) {
      var y = null,
        G;
      for (G in a.CipherSuites) {
        var N = a.CipherSuites[G];
        if (N.id[0] === k.charCodeAt(0) && N.id[1] === k.charCodeAt(1)) {
          y = N;
          break;
        }
      }
      return y;
    };
    a.handleUnexpected = function (k, y) {
      (!k.open && k.entity === a.ConnectionEnd.client) ||
        k.error(k, {
          message: "Unexpected message. Received TLS record out of order.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.unexpected_message }
        });
    };
    a.handleHelloRequest = function (k, y, G) {
      !k.handshaking &&
        0 < k.handshakes &&
        (a.queue(k, a.createAlert(k, { level: a.Alert.Level.warning, description: a.Alert.Description.no_renegotiation })), a.flush(k));
      k.process();
    };
    a.parseHelloMessage = function (k, y, G) {
      var N = null,
        Q = k.entity === a.ConnectionEnd.client;
      if (38 > G)
        k.error(k, {
          message: Q ? "Invalid ServerHello message. Message too short." : "Invalid ClientHello message. Message too short.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.illegal_parameter }
        });
      else {
        y = y.fragment;
        var T = y.length();
        if (
          ((N = {
            version: { major: y.getByte(), minor: y.getByte() },
            random: n.util.createBuffer(y.getBytes(32)),
            session_id: d(y, 1),
            extensions: []
          }),
          Q
            ? ((N.cipher_suite = y.getBytes(2)), (N.compression_method = y.getByte()))
            : ((N.cipher_suites = d(y, 2)), (N.compression_methods = d(y, 1))),
          0 < G - (T - y.length()))
        ) {
          for (G = d(y, 2); 0 < G.length(); ) N.extensions.push({ type: [G.getByte(), G.getByte()], data: d(G, 2) });
          if (!Q)
            for (G = 0; G < N.extensions.length; ++G)
              if (((y = N.extensions[G]), 0 === y.type[0] && 0 === y.type[1]))
                for (y = d(y.data, 2); 0 < y.length() && 0 === y.getByte(); )
                  k.session.extensions.server_name.serverNameList.push(d(y, 2).getBytes());
        }
        if (k.session.version && (N.version.major !== k.session.version.major || N.version.minor !== k.session.version.minor))
          return k.error(k, {
            message: "TLS version change is disallowed during renegotiation.",
            send: !0,
            alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.protocol_version }
          });
        if (Q) k.session.cipherSuite = a.getCipherSuite(N.cipher_suite);
        else
          for (
            G = n.util.createBuffer(N.cipher_suites.bytes());
            0 < G.length() && ((k.session.cipherSuite = a.getCipherSuite(G.getBytes(2))), null === k.session.cipherSuite);

          );
        if (null === k.session.cipherSuite)
          return k.error(k, {
            message: "No cipher suites in common.",
            send: !0,
            alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.handshake_failure },
            cipherSuite: n.util.bytesToHex(N.cipher_suite)
          });
        k.session.compressionMethod = Q ? N.compression_method : a.CompressionMethod.none;
      }
      return N;
    };
    a.createSecurityParameters = function (k, y) {
      var G = k.entity === a.ConnectionEnd.client,
        N = y.random.bytes();
      y = G ? k.session.sp.client_random : N;
      G = G ? N : a.createRandom().getBytes();
      k.session.sp = {
        entity: k.entity,
        prf_algorithm: a.PRFAlgorithm.tls_prf_sha256,
        bulk_cipher_algorithm: null,
        cipher_type: null,
        enc_key_length: null,
        block_length: null,
        fixed_iv_length: null,
        record_iv_length: null,
        mac_algorithm: null,
        mac_length: null,
        mac_key_length: null,
        compression_algorithm: k.session.compressionMethod,
        pre_master_secret: null,
        master_secret: null,
        client_random: y,
        server_random: G
      };
    };
    a.handleServerHello = function (k, y, G) {
      y = a.parseHelloMessage(k, y, G);
      if (!k.fail) {
        if (!(y.version.minor <= k.version.minor))
          return k.error(k, {
            message: "Incompatible TLS version.",
            send: !0,
            alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.protocol_version }
          });
        k.version.minor = y.version.minor;
        k.session.version = k.version;
        G = y.session_id.bytes();
        0 < G.length && G === k.session.id
          ? ((k.expect = t), (k.session.resuming = !0), (k.session.sp.server_random = y.random.bytes()))
          : ((k.expect = b), (k.session.resuming = !1), a.createSecurityParameters(k, y));
        k.session.id = G;
        k.process();
      }
    };
    a.handleClientHello = function (k, y, G) {
      y = a.parseHelloMessage(k, y, G);
      if (!k.fail) {
        var N = y.session_id.bytes();
        G = null;
        if (
          (k.sessionCache &&
            (null === (G = k.sessionCache.getSession(N))
              ? (N = "")
              : (G.version.major !== y.version.major || G.version.minor > y.version.minor) && ((G = null), (N = ""))),
          0 === N.length && (N = n.random.getBytes(32)),
          (k.session.id = N),
          (k.session.clientHelloVersion = y.version),
          (k.session.sp = {}),
          G)
        )
          (k.version = k.session.version = G.version), (k.session.sp = G.sp);
        else {
          var Q;
          for (N = 1; N < a.SupportedVersions.length && !((Q = a.SupportedVersions[N]).minor <= y.version.minor); ++N);
          k.version = { major: Q.major, minor: Q.minor };
          k.session.version = k.version;
        }
        null !== G
          ? ((k.expect = z), (k.session.resuming = !0), (k.session.sp.client_random = y.random.bytes()))
          : ((k.expect = !1 !== k.verifyClient ? K : J), (k.session.resuming = !1), a.createSecurityParameters(k, y));
        k.open = !0;
        a.queue(k, a.createRecord(k, { type: a.ContentType.handshake, data: a.createServerHello(k) }));
        k.session.resuming
          ? (a.queue(k, a.createRecord(k, { type: a.ContentType.change_cipher_spec, data: a.createChangeCipherSpec() })),
            (k.state.pending = a.createConnectionState(k)),
            (k.state.current.write = k.state.pending.write),
            a.queue(k, a.createRecord(k, { type: a.ContentType.handshake, data: a.createFinished(k) })))
          : (a.queue(k, a.createRecord(k, { type: a.ContentType.handshake, data: a.createCertificate(k) })),
            k.fail ||
              (a.queue(k, a.createRecord(k, { type: a.ContentType.handshake, data: a.createServerKeyExchange(k) })),
              !1 !== k.verifyClient &&
                a.queue(k, a.createRecord(k, { type: a.ContentType.handshake, data: a.createCertificateRequest(k) })),
              a.queue(k, a.createRecord(k, { type: a.ContentType.handshake, data: a.createServerHelloDone(k) }))));
        a.flush(k);
        k.process();
      }
    };
    a.handleCertificate = function (k, y, G) {
      if (3 > G)
        return k.error(k, {
          message: "Invalid Certificate message. Message too short.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.illegal_parameter }
        });
      G = d(y.fragment, 3);
      y = [];
      try {
        for (; 0 < G.length(); ) {
          var N = d(G, 3);
          var Q = n.asn1.fromDer(N);
          N = n.pki.certificateFromAsn1(Q, !0);
          y.push(N);
        }
      } catch (T) {
        return k.error(k, {
          message: "Could not parse certificate list.",
          cause: T,
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.bad_certificate }
        });
      }
      N = k.entity === a.ConnectionEnd.client;
      (!N && !0 !== k.verifyClient) || 0 !== y.length
        ? 0 === y.length
          ? (k.expect = N ? g : J)
          : (N ? (k.session.serverCertificate = y[0]) : (k.session.clientCertificate = y[0]),
            a.verifyCertificateChain(k, y) && (k.expect = N ? g : J))
        : k.error(k, {
            message: N ? "No server certificate provided." : "No client certificate provided.",
            send: !0,
            alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.illegal_parameter }
          });
      k.process();
    };
    a.handleServerKeyExchange = function (k, y, G) {
      if (0 < G)
        return k.error(k, {
          message: "Invalid key parameters. Only RSA is supported.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.unsupported_certificate }
        });
      k.expect = q;
      k.process();
    };
    a.handleClientKeyExchange = function (k, y, G) {
      if (48 > G)
        return k.error(k, {
          message: "Invalid key parameters. Only RSA is supported.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.unsupported_certificate }
        });
      y = d(y.fragment, 2).getBytes();
      G = null;
      if (k.getPrivateKey)
        try {
          (G = k.getPrivateKey(k, k.session.serverCertificate)), (G = n.pki.privateKeyFromPem(G));
        } catch (T) {
          k.error(k, {
            message: "Could not get private key.",
            cause: T,
            send: !0,
            alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.internal_error }
          });
        }
      if (null === G)
        return k.error(k, {
          message: "No private key set.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.internal_error }
        });
      try {
        var N = k.session.sp;
        N.pre_master_secret = G.decrypt(y);
        var Q = k.session.clientHelloVersion;
        if (Q.major !== N.pre_master_secret.charCodeAt(0) || Q.minor !== N.pre_master_secret.charCodeAt(1))
          throw Error("TLS version rollback attack detected.");
      } catch (T) {
        N.pre_master_secret = n.random.getBytes(48);
      }
      k.expect = z;
      null !== k.session.clientCertificate && (k.expect = l);
      k.process();
    };
    a.handleCertificateRequest = function (k, y, G) {
      if (3 > G)
        return k.error(k, {
          message: "Invalid CertificateRequest. Message too short.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.illegal_parameter }
        });
      y = y.fragment;
      y = { certificate_types: d(y, 1), certificate_authorities: d(y, 2) };
      k.session.certificateRequest = y;
      k.expect = D;
      k.process();
    };
    a.handleCertificateVerify = function (k, y, G) {
      if (2 > G)
        return k.error(k, {
          message: "Invalid CertificateVerify. Message too short.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.illegal_parameter }
        });
      G = y.fragment;
      G.read -= 4;
      y = G.bytes();
      G.read += 4;
      G = d(G, 2).getBytes();
      var N = n.util.createBuffer();
      N.putBuffer(k.session.md5.digest());
      N.putBuffer(k.session.sha1.digest());
      N = N.getBytes();
      try {
        if (!k.session.clientCertificate.publicKey.verify(N, G, "NONE")) throw Error("CertificateVerify signature does not match.");
        k.session.md5.update(y);
        k.session.sha1.update(y);
      } catch (Q) {
        return k.error(k, {
          message: "Bad signature in CertificateVerify.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.handshake_failure }
        });
      }
      k.expect = z;
      k.process();
    };
    a.handleServerHelloDone = function (k, y, G) {
      if (0 < G)
        return k.error(k, {
          message: "Invalid ServerHelloDone message. Invalid length.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.record_overflow }
        });
      if (null === k.serverCertificate) {
        G = {
          message: "No server certificate provided. Not enough security.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.insufficient_security }
        };
        var N = k.verify(k, G.alert.description, 0, []);
        if (!0 !== N)
          return (
            (N || 0 === N) &&
              ("object" != typeof N || n.util.isArray(N)
                ? "number" == typeof N && (G.alert.description = N)
                : (N.message && (G.message = N.message), N.alert && (G.alert.description = N.alert))),
            k.error(k, G)
          );
      }
      null !== k.session.certificateRequest &&
        ((y = a.createRecord(k, { type: a.ContentType.handshake, data: a.createCertificate(k) })), a.queue(k, y));
      y = a.createRecord(k, { type: a.ContentType.handshake, data: a.createClientKeyExchange(k) });
      a.queue(k, y);
      k.expect = L;
      y = function (Q, T) {
        null !== Q.session.certificateRequest &&
          null !== Q.session.clientCertificate &&
          a.queue(Q, a.createRecord(Q, { type: a.ContentType.handshake, data: a.createCertificateVerify(Q, T) }));
        a.queue(Q, a.createRecord(Q, { type: a.ContentType.change_cipher_spec, data: a.createChangeCipherSpec() }));
        Q.state.pending = a.createConnectionState(Q);
        Q.state.current.write = Q.state.pending.write;
        a.queue(Q, a.createRecord(Q, { type: a.ContentType.handshake, data: a.createFinished(Q) }));
        Q.expect = t;
        a.flush(Q);
        Q.process();
      };
      if (null === k.session.certificateRequest || null === k.session.clientCertificate) return y(k, null);
      a.getClientSignature(k, y);
    };
    a.handleChangeCipherSpec = function (k, y) {
      if (1 !== y.fragment.getByte())
        return k.error(k, {
          message: "Invalid ChangeCipherSpec message received.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.illegal_parameter }
        });
      y = k.entity === a.ConnectionEnd.client;
      ((k.session.resuming && y) || (!k.session.resuming && !y)) && (k.state.pending = a.createConnectionState(k));
      k.state.current.read = k.state.pending.read;
      ((!k.session.resuming && y) || (k.session.resuming && !y)) && (k.state.pending = null);
      k.expect = y ? A : p;
      k.process();
    };
    a.handleFinished = function (k, y, G) {
      G = y.fragment;
      G.read -= 4;
      var N = G.bytes();
      G.read += 4;
      y = y.fragment.getBytes();
      (G = n.util.createBuffer()).putBuffer(k.session.md5.digest());
      G.putBuffer(k.session.sha1.digest());
      var Q = k.entity === a.ConnectionEnd.client;
      if (E(k.session.sp.master_secret, Q ? "server finished" : "client finished", G.getBytes(), 12).getBytes() !== y)
        return k.error(k, {
          message: "Invalid verify_data in Finished message.",
          send: !0,
          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.decrypt_error }
        });
      k.session.md5.update(N);
      k.session.sha1.update(N);
      ((k.session.resuming && Q) || (!k.session.resuming && !Q)) &&
        (a.queue(k, a.createRecord(k, { type: a.ContentType.change_cipher_spec, data: a.createChangeCipherSpec() })),
        (k.state.current.write = k.state.pending.write),
        (k.state.pending = null),
        a.queue(k, a.createRecord(k, { type: a.ContentType.handshake, data: a.createFinished(k) })));
      k.expect = Q ? v : c;
      k.handshaking = !1;
      ++k.handshakes;
      k.peerCertificate = Q ? k.session.serverCertificate : k.session.clientCertificate;
      a.flush(k);
      k.isConnected = !0;
      k.connected(k);
      k.process();
    };
    a.handleAlert = function (k, y) {
      y = y.fragment;
      var G = { level: y.getByte(), description: y.getByte() };
      switch (G.description) {
        case a.Alert.Description.close_notify:
          y = "Connection closed.";
          break;
        case a.Alert.Description.unexpected_message:
          y = "Unexpected message.";
          break;
        case a.Alert.Description.bad_record_mac:
          y = "Bad record MAC.";
          break;
        case a.Alert.Description.decryption_failed:
          y = "Decryption failed.";
          break;
        case a.Alert.Description.record_overflow:
          y = "Record overflow.";
          break;
        case a.Alert.Description.decompression_failure:
          y = "Decompression failed.";
          break;
        case a.Alert.Description.handshake_failure:
          y = "Handshake failure.";
          break;
        case a.Alert.Description.bad_certificate:
          y = "Bad certificate.";
          break;
        case a.Alert.Description.unsupported_certificate:
          y = "Unsupported certificate.";
          break;
        case a.Alert.Description.certificate_revoked:
          y = "Certificate revoked.";
          break;
        case a.Alert.Description.certificate_expired:
          y = "Certificate expired.";
          break;
        case a.Alert.Description.certificate_unknown:
          y = "Certificate unknown.";
          break;
        case a.Alert.Description.illegal_parameter:
          y = "Illegal parameter.";
          break;
        case a.Alert.Description.unknown_ca:
          y = "Unknown certificate authority.";
          break;
        case a.Alert.Description.access_denied:
          y = "Access denied.";
          break;
        case a.Alert.Description.decode_error:
          y = "Decode error.";
          break;
        case a.Alert.Description.decrypt_error:
          y = "Decrypt error.";
          break;
        case a.Alert.Description.export_restriction:
          y = "Export restriction.";
          break;
        case a.Alert.Description.protocol_version:
          y = "Unsupported protocol version.";
          break;
        case a.Alert.Description.insufficient_security:
          y = "Insufficient security.";
          break;
        case a.Alert.Description.internal_error:
          y = "Internal error.";
          break;
        case a.Alert.Description.user_canceled:
          y = "User canceled.";
          break;
        case a.Alert.Description.no_renegotiation:
          y = "Renegotiation not supported.";
          break;
        default:
          y = "Unknown error.";
      }
      if (G.description === a.Alert.Description.close_notify) return k.close();
      k.error(k, { message: y, send: !1, origin: k.entity === a.ConnectionEnd.client ? "server" : "client", alert: G });
      k.process();
    };
    a.handleHandshake = function (k, y) {
      var G = y.fragment,
        N = G.getByte(),
        Q = G.getInt24();
      if (Q > G.length()) return (k.fragmented = y), (y.fragment = n.util.createBuffer()), (G.read -= 4), k.process();
      k.fragmented = null;
      G.read -= 4;
      var T = G.bytes(Q + 4);
      G.read += 4;
      N in m[k.entity][k.expect]
        ? (k.entity !== a.ConnectionEnd.server ||
            k.open ||
            k.fail ||
            ((k.handshaking = !0),
            (k.session = {
              version: null,
              extensions: { server_name: { serverNameList: [] } },
              cipherSuite: null,
              compressionMethod: null,
              serverCertificate: null,
              clientCertificate: null,
              md5: n.md.md5.create(),
              sha1: n.md.sha1.create()
            })),
          N !== a.HandshakeType.hello_request &&
            N !== a.HandshakeType.certificate_verify &&
            N !== a.HandshakeType.finished &&
            (k.session.md5.update(T), k.session.sha1.update(T)),
          m[k.entity][k.expect][N](k, y, Q))
        : a.handleUnexpected(k, y);
    };
    a.handleApplicationData = function (k, y) {
      k.data.putBuffer(y.fragment);
      k.dataReady(k);
      k.process();
    };
    a.handleHeartbeat = function (k, y) {
      var G = y.fragment;
      y = G.getByte();
      var N = G.getInt16();
      G = G.getBytes(N);
      if (y === a.HeartbeatMessageType.heartbeat_request) {
        if (k.handshaking || N > G.length) return k.process();
        a.queue(
          k,
          a.createRecord(k, { type: a.ContentType.heartbeat, data: a.createHeartbeat(a.HeartbeatMessageType.heartbeat_response, G) })
        );
        a.flush(k);
      } else if (y === a.HeartbeatMessageType.heartbeat_response) {
        if (G !== k.expectedHeartbeatPayload) return k.process();
        k.heartbeatReceived && k.heartbeatReceived(k, n.util.createBuffer(G));
      }
      k.process();
    };
    var b = 1,
      g = 2,
      q = 3,
      D = 4,
      t = 5,
      A = 6,
      v = 7,
      L = 8,
      K = 1,
      J = 2,
      l = 3,
      z = 4,
      p = 5,
      c = 6;
    w = a.handleUnexpected;
    H = a.handleChangeCipherSpec;
    var h = a.handleAlert,
      f = a.handleHandshake,
      r = a.handleApplicationData,
      F = a.handleHeartbeat,
      M = [];
    M[a.ConnectionEnd.client] = [
      [w, h, f, w, F],
      [w, h, f, w, F],
      [w, h, f, w, F],
      [w, h, f, w, F],
      [w, h, f, w, F],
      [H, h, w, w, F],
      [w, h, f, w, F],
      [w, h, f, r, F],
      [w, h, f, w, F]
    ];
    M[a.ConnectionEnd.server] = [
      [w, h, f, w, F],
      [w, h, f, w, F],
      [w, h, f, w, F],
      [w, h, f, w, F],
      [H, h, w, w, F],
      [w, h, f, w, F],
      [w, h, f, r, F],
      [w, h, f, w, F]
    ];
    H = a.handleHelloRequest;
    h = a.handleCertificate;
    f = a.handleServerKeyExchange;
    r = a.handleCertificateRequest;
    F = a.handleServerHelloDone;
    var R = a.handleFinished,
      m = [];
    m[a.ConnectionEnd.client] = [
      [w, w, a.handleServerHello, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
      [H, w, w, w, w, w, w, w, w, w, w, h, f, r, F, w, w, w, w, w, w],
      [H, w, w, w, w, w, w, w, w, w, w, w, f, r, F, w, w, w, w, w, w],
      [H, w, w, w, w, w, w, w, w, w, w, w, w, r, F, w, w, w, w, w, w],
      [H, w, w, w, w, w, w, w, w, w, w, w, w, w, F, w, w, w, w, w, w],
      [H, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
      [H, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, R],
      [H, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
      [H, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w]
    ];
    m[a.ConnectionEnd.server] = [
      [w, a.handleClientHello, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
      [w, w, w, w, w, w, w, w, w, w, w, h, w, w, w, w, w, w, w, w, w],
      [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, a.handleClientKeyExchange, w, w, w, w],
      [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, a.handleCertificateVerify, w, w, w, w, w],
      [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
      [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, R],
      [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
      [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w]
    ];
    a.generateKeys = function (k, y) {
      var G = y.client_random + y.server_random;
      k.session.resuming || ((y.master_secret = E(y.pre_master_secret, "master secret", G, 48).bytes()), (y.pre_master_secret = null));
      G = y.server_random + y.client_random;
      var N = 2 * y.mac_key_length + 2 * y.enc_key_length;
      (k = k.version.major === a.Versions.TLS_1_0.major && k.version.minor === a.Versions.TLS_1_0.minor) && (N += 2 * y.fixed_iv_length);
      G = E(y.master_secret, "key expansion", G, N);
      N = {
        client_write_MAC_key: G.getBytes(y.mac_key_length),
        server_write_MAC_key: G.getBytes(y.mac_key_length),
        client_write_key: G.getBytes(y.enc_key_length),
        server_write_key: G.getBytes(y.enc_key_length)
      };
      return k && ((N.client_write_IV = G.getBytes(y.fixed_iv_length)), (N.server_write_IV = G.getBytes(y.fixed_iv_length))), N;
    };
    a.createConnectionState = function (k) {
      var y = k.entity === a.ConnectionEnd.client,
        G = function () {
          var Q = {
            sequenceNumber: [0, 0],
            macKey: null,
            macLength: 0,
            macFunction: null,
            cipherState: null,
            cipherFunction: function (T) {
              return !0;
            },
            compressionState: null,
            compressFunction: function (T) {
              return !0;
            },
            updateSequenceNumber: function () {
              4294967295 === Q.sequenceNumber[1] ? ((Q.sequenceNumber[1] = 0), ++Q.sequenceNumber[0]) : ++Q.sequenceNumber[1];
            }
          };
          return Q;
        },
        N = { read: G(), write: G() };
      if (
        ((N.read.update = function (Q, T) {
          return (
            N.read.cipherFunction(T, N.read)
              ? N.read.compressFunction(Q, T, N.read) ||
                Q.error(Q, {
                  message: "Could not decompress record.",
                  send: !0,
                  alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.decompression_failure }
                })
              : Q.error(Q, {
                  message: "Could not decrypt record or bad MAC.",
                  send: !0,
                  alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.bad_record_mac }
                }),
            !Q.fail
          );
        }),
        (N.write.update = function (Q, T) {
          return (
            N.write.compressFunction(Q, T, N.write)
              ? N.write.cipherFunction(T, N.write) ||
                Q.error(Q, {
                  message: "Could not encrypt record.",
                  send: !1,
                  alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.internal_error }
                })
              : Q.error(Q, {
                  message: "Could not compress record.",
                  send: !1,
                  alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.internal_error }
                }),
            !Q.fail
          );
        }),
        k.session)
      )
        switch (
          ((G = k.session.sp),
          k.session.cipherSuite.initSecurityParameters(G),
          (G.keys = a.generateKeys(k, G)),
          (N.read.macKey = y ? G.keys.server_write_MAC_key : G.keys.client_write_MAC_key),
          (N.write.macKey = y ? G.keys.client_write_MAC_key : G.keys.server_write_MAC_key),
          k.session.cipherSuite.initConnectionState(N, k, G),
          G.compression_algorithm)
        ) {
          case a.CompressionMethod.none:
            break;
          case a.CompressionMethod.deflate:
            N.read.compressFunction = B;
            N.write.compressFunction = C;
            break;
          default:
            throw Error("Unsupported compression algorithm.");
        }
      return N;
    };
    a.createRandom = function () {
      var k = new Date();
      k = +k + 6e4 * k.getTimezoneOffset();
      var y = n.util.createBuffer();
      return y.putInt32(k), y.putBytes(n.random.getBytes(28)), y;
    };
    a.createRecord = function (k, y) {
      return y.data
        ? { type: y.type, version: { major: k.version.major, minor: k.version.minor }, length: y.data.length(), fragment: y.data }
        : null;
    };
    a.createAlert = function (k, y) {
      var G = n.util.createBuffer();
      return G.putByte(y.level), G.putByte(y.description), a.createRecord(k, { type: a.ContentType.alert, data: G });
    };
    a.createClientHello = function (k) {
      k.session.clientHelloVersion = { major: k.version.major, minor: k.version.minor };
      for (var y = n.util.createBuffer(), G = 0; G < k.cipherSuites.length; ++G) {
        var N = k.cipherSuites[G];
        y.putByte(N.id[0]);
        y.putByte(N.id[1]);
      }
      var Q = y.length();
      G = n.util.createBuffer();
      G.putByte(a.CompressionMethod.none);
      var T = G.length();
      N = n.util.createBuffer();
      if (k.virtualHost) {
        var V = n.util.createBuffer();
        V.putByte(0);
        V.putByte(0);
        var S = n.util.createBuffer();
        S.putByte(0);
        e(S, 2, n.util.createBuffer(k.virtualHost));
        var P = n.util.createBuffer();
        e(P, 2, S);
        e(V, 2, P);
        N.putBuffer(V);
      }
      V = N.length();
      0 < V && (V += 2);
      S = k.session.id;
      Q = S.length + 1 + 2 + 4 + 28 + 2 + Q + 1 + T + V;
      T = n.util.createBuffer();
      return (
        T.putByte(a.HandshakeType.client_hello),
        T.putInt24(Q),
        T.putByte(k.version.major),
        T.putByte(k.version.minor),
        T.putBytes(k.session.sp.client_random),
        e(T, 1, n.util.createBuffer(S)),
        e(T, 2, y),
        e(T, 1, G),
        0 < V && e(T, 2, N),
        T
      );
    };
    a.createServerHello = function (k) {
      var y = k.session.id,
        G = y.length + 1 + 2 + 4 + 28 + 2 + 1,
        N = n.util.createBuffer();
      return (
        N.putByte(a.HandshakeType.server_hello),
        N.putInt24(G),
        N.putByte(k.version.major),
        N.putByte(k.version.minor),
        N.putBytes(k.session.sp.server_random),
        e(N, 1, n.util.createBuffer(y)),
        N.putByte(k.session.cipherSuite.id[0]),
        N.putByte(k.session.cipherSuite.id[1]),
        N.putByte(k.session.compressionMethod),
        N
      );
    };
    a.createCertificate = function (k) {
      var y,
        G = k.entity === a.ConnectionEnd.client,
        N = null;
      k.getCertificate &&
        ((y = G ? k.session.certificateRequest : k.session.extensions.server_name.serverNameList), (N = k.getCertificate(k, y)));
      y = n.util.createBuffer();
      if (null !== N)
        try {
          n.util.isArray(N) || (N = [N]);
          for (var Q = null, T = 0; T < N.length; ++T) {
            var V = n.pem.decode(N[T])[0];
            if ("CERTIFICATE" !== V.type && "X509 CERTIFICATE" !== V.type && "TRUSTED CERTIFICATE" !== V.type) {
              var S = Error(
                'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".'
              );
              throw ((S.headerType = V.type), S);
            }
            if (V.procType && "ENCRYPTED" === V.procType.type) throw Error("Could not convert certificate from PEM; PEM is encrypted.");
            var P = n.util.createBuffer(V.body);
            null === Q && (Q = n.asn1.fromDer(P.bytes(), !1));
            var x = n.util.createBuffer();
            e(x, 3, P);
            y.putBuffer(x);
          }
          N = n.pki.certificateFromAsn1(Q);
          G ? (k.session.clientCertificate = N) : (k.session.serverCertificate = N);
        } catch (U) {
          return k.error(k, {
            message: "Could not send certificate list.",
            cause: U,
            send: !0,
            alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.bad_certificate }
          });
        }
      k = 3 + y.length();
      G = n.util.createBuffer();
      return G.putByte(a.HandshakeType.certificate), G.putInt24(k), e(G, 3, y), G;
    };
    a.createClientKeyExchange = function (k) {
      var y = n.util.createBuffer();
      y.putByte(k.session.clientHelloVersion.major);
      y.putByte(k.session.clientHelloVersion.minor);
      y.putBytes(n.random.getBytes(46));
      var G = k.session.sp;
      G.pre_master_secret = y.getBytes();
      k = (y = k.session.serverCertificate.publicKey.encrypt(G.pre_master_secret)).length + 2;
      G = n.util.createBuffer();
      return G.putByte(a.HandshakeType.client_key_exchange), G.putInt24(k), G.putInt16(y.length), G.putBytes(y), G;
    };
    a.createServerKeyExchange = function (k) {
      return n.util.createBuffer();
    };
    a.getClientSignature = function (k, y) {
      var G = n.util.createBuffer();
      G.putBuffer(k.session.md5.digest());
      G.putBuffer(k.session.sha1.digest());
      G = G.getBytes();
      k.getSignature =
        k.getSignature ||
        function (N, Q, T) {
          var V = null;
          if (N.getPrivateKey)
            try {
              (V = N.getPrivateKey(N, N.session.clientCertificate)), (V = n.pki.privateKeyFromPem(V));
            } catch (S) {
              N.error(N, {
                message: "Could not get private key.",
                cause: S,
                send: !0,
                alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.internal_error }
              });
            }
          null === V
            ? N.error(N, {
                message: "No private key set.",
                send: !0,
                alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.internal_error }
              })
            : (Q = V.sign(Q, null));
          T(N, Q);
        };
      k.getSignature(k, G, y);
    };
    a.createCertificateVerify = function (k, y) {
      k = y.length + 2;
      var G = n.util.createBuffer();
      return G.putByte(a.HandshakeType.certificate_verify), G.putInt24(k), G.putInt16(y.length), G.putBytes(y), G;
    };
    a.createCertificateRequest = function (k) {
      var y = n.util.createBuffer();
      y.putByte(1);
      var G = n.util.createBuffer();
      for (Q in k.caStore.certs) {
        var N = n.pki.distinguishedNameToAsn1(k.caStore.certs[Q].subject);
        N = n.asn1.toDer(N);
        G.putInt16(N.length());
        G.putBuffer(N);
      }
      k = 1 + y.length() + 2 + G.length();
      var Q = n.util.createBuffer();
      return Q.putByte(a.HandshakeType.certificate_request), Q.putInt24(k), e(Q, 1, y), e(Q, 2, G), Q;
    };
    a.createServerHelloDone = function (k) {
      k = n.util.createBuffer();
      return k.putByte(a.HandshakeType.server_hello_done), k.putInt24(0), k;
    };
    a.createChangeCipherSpec = function () {
      var k = n.util.createBuffer();
      return k.putByte(1), k;
    };
    a.createFinished = function (k) {
      var y = n.util.createBuffer();
      y.putBuffer(k.session.md5.digest());
      y.putBuffer(k.session.sha1.digest());
      y = E(k.session.sp.master_secret, k.entity === a.ConnectionEnd.client ? "client finished" : "server finished", y.getBytes(), 12);
      k = n.util.createBuffer();
      return k.putByte(a.HandshakeType.finished), k.putInt24(y.length()), k.putBuffer(y), k;
    };
    a.createHeartbeat = function (k, y, G) {
      void 0 === G && (G = y.length);
      var N = n.util.createBuffer();
      N.putByte(k);
      N.putInt16(G);
      N.putBytes(y);
      k = N.length();
      return N.putBytes(n.random.getBytes(Math.max(16, k - G - 3))), N;
    };
    a.queue = function (k, y) {
      if (
        y &&
        (0 !== y.fragment.length() ||
          (y.type !== a.ContentType.handshake && y.type !== a.ContentType.alert && y.type !== a.ContentType.change_cipher_spec))
      ) {
        if (y.type === a.ContentType.handshake) {
          var G = y.fragment.bytes();
          k.session.md5.update(G);
          k.session.sha1.update(G);
        }
        if (y.fragment.length() <= a.MaxFragment) G = [y];
        else {
          G = [];
          for (var N = y.fragment.bytes(); N.length > a.MaxFragment; )
            G.push(a.createRecord(k, { type: y.type, data: n.util.createBuffer(N.slice(0, a.MaxFragment)) })), (N = N.slice(a.MaxFragment));
          0 < N.length && G.push(a.createRecord(k, { type: y.type, data: n.util.createBuffer(N) }));
        }
        for (y = 0; y < G.length && !k.fail; ++y) (N = G[y]), k.state.current.write.update(k, N) && k.records.push(N);
      }
    };
    a.flush = function (k) {
      for (var y = 0; y < k.records.length; ++y) {
        var G = k.records[y];
        k.tlsData.putByte(G.type);
        k.tlsData.putByte(G.version.major);
        k.tlsData.putByte(G.version.minor);
        k.tlsData.putInt16(G.fragment.length());
        k.tlsData.putBuffer(k.records[y].fragment);
      }
      return (k.records = []), k.tlsDataReady(k);
    };
    var u = function (k) {
        switch (k) {
          case !0:
            return !0;
          case n.pki.certificateError.bad_certificate:
            return a.Alert.Description.bad_certificate;
          case n.pki.certificateError.unsupported_certificate:
            return a.Alert.Description.unsupported_certificate;
          case n.pki.certificateError.certificate_revoked:
            return a.Alert.Description.certificate_revoked;
          case n.pki.certificateError.certificate_expired:
            return a.Alert.Description.certificate_expired;
          case n.pki.certificateError.certificate_unknown:
            return a.Alert.Description.certificate_unknown;
          case n.pki.certificateError.unknown_ca:
            return a.Alert.Description.unknown_ca;
          default:
            return a.Alert.Description.bad_certificate;
        }
      },
      I;
    for (I in ((a.verifyCertificateChain = function (k, y) {
      try {
        var G = {},
          N;
        for (N in k.verifyOptions) G[N] = k.verifyOptions[N];
        G.verify = function (Q, T, V) {
          u(Q);
          T = k.verify(k, Q, T, V);
          if (!0 !== T) {
            if ("object" == typeof T && !n.util.isArray(T))
              throw (
                ((Q = Error("The application rejected the certificate.")),
                (Q.send = !0),
                (Q.alert = { level: a.Alert.Level.fatal, description: a.Alert.Description.bad_certificate }),
                T.message && (Q.message = T.message),
                T.alert && (Q.alert.description = T.alert),
                Q)
              );
            T !== Q &&
              (T = (function (S) {
                switch (S) {
                  case !0:
                    return !0;
                  case a.Alert.Description.bad_certificate:
                    return n.pki.certificateError.bad_certificate;
                  case a.Alert.Description.unsupported_certificate:
                    return n.pki.certificateError.unsupported_certificate;
                  case a.Alert.Description.certificate_revoked:
                    return n.pki.certificateError.certificate_revoked;
                  case a.Alert.Description.certificate_expired:
                    return n.pki.certificateError.certificate_expired;
                  case a.Alert.Description.certificate_unknown:
                    return n.pki.certificateError.certificate_unknown;
                  case a.Alert.Description.unknown_ca:
                    return n.pki.certificateError.unknown_ca;
                  default:
                    return n.pki.certificateError.bad_certificate;
                }
              })(T));
          }
          return T;
        };
        n.pki.verifyCertificateChain(k.caStore, y, G);
      } catch (Q) {
        (y = Q),
          ("object" != typeof y || n.util.isArray(y)) && (y = { send: !0, alert: { level: a.Alert.Level.fatal, description: u(Q) } }),
          "send" in y || (y.send = !0),
          "alert" in y || (y.alert = { level: a.Alert.Level.fatal, description: u(y.error) }),
          k.error(k, y);
      }
      return !k.fail;
    }),
    (a.createSessionCache = function (k, y) {
      var G = null;
      if (k && k.getSession && k.setSession && k.order) G = k;
      else {
        for (var N in (((G = {}).cache = k || {}), (G.capacity = Math.max(y || 100, 1)), (G.order = []), k))
          G.order.length <= y ? G.order.push(N) : delete k[N];
        G.getSession = function (Q) {
          var T = null,
            V = null;
          if ((Q ? (V = n.util.bytesToHex(Q)) : 0 < G.order.length && (V = G.order[0]), null !== V && V in G.cache))
            for (var S in ((T = G.cache[V]), delete G.cache[V], G.order))
              if (G.order[S] === V) {
                G.order.splice(S, 1);
                break;
              }
          return T;
        };
        G.setSession = function (Q, T) {
          if (G.order.length === G.capacity) {
            var V = G.order.shift();
            delete G.cache[V];
          }
          V = n.util.bytesToHex(Q);
          G.order.push(V);
          G.cache[V] = T;
        };
      }
      return G;
    }),
    (a.createConnection = function (k) {
      var y = null;
      y = k.caStore ? (n.util.isArray(k.caStore) ? n.pki.createCaStore(k.caStore) : k.caStore) : n.pki.createCaStore();
      var G = k.cipherSuites || null;
      if (null === G) for (var N in ((G = []), a.CipherSuites)) G.push(a.CipherSuites[N]);
      N = k.server ? a.ConnectionEnd.server : a.ConnectionEnd.client;
      var Q = k.sessionCache ? a.createSessionCache(k.sessionCache) : null,
        T = {
          version: { major: a.Version.major, minor: a.Version.minor },
          entity: N,
          sessionId: k.sessionId,
          caStore: y,
          sessionCache: Q,
          cipherSuites: G,
          connected: k.connected,
          virtualHost: k.virtualHost || null,
          verifyClient: k.verifyClient || !1,
          verify:
            k.verify ||
            function (V, S, P, x) {
              return S;
            },
          verifyOptions: k.verifyOptions || {},
          getCertificate: k.getCertificate || null,
          getPrivateKey: k.getPrivateKey || null,
          getSignature: k.getSignature || null,
          input: n.util.createBuffer(),
          tlsData: n.util.createBuffer(),
          data: n.util.createBuffer(),
          tlsDataReady: k.tlsDataReady,
          dataReady: k.dataReady,
          heartbeatReceived: k.heartbeatReceived,
          closed: k.closed,
          error: function (V, S) {
            S.origin = S.origin || (V.entity === a.ConnectionEnd.client ? "client" : "server");
            S.send && (a.queue(V, a.createAlert(V, S.alert)), a.flush(V));
            var P = !1 !== S.fatal;
            P && (V.fail = !0);
            k.error(V, S);
            P && V.close(!1);
          },
          deflate: k.deflate || null,
          inflate: k.inflate || null,
          reset: function (V) {
            T.version = { major: a.Version.major, minor: a.Version.minor };
            T.record = null;
            T.session = null;
            T.peerCertificate = null;
            T.state = { pending: null, current: null };
            T.expect = (T.entity, a.ConnectionEnd.client, 0);
            T.fragmented = null;
            T.records = [];
            T.open = !1;
            T.handshakes = 0;
            T.handshaking = !1;
            T.isConnected = !1;
            T.fail = !(V || void 0 === V);
            T.input.clear();
            T.tlsData.clear();
            T.data.clear();
            T.state.current = a.createConnectionState(T);
          }
        };
      T.reset();
      return (
        (T.handshake = function (V) {
          if (T.entity !== a.ConnectionEnd.client) T.error(T, { message: "Cannot initiate handshake as a server.", fatal: !1 });
          else if (T.handshaking) T.error(T, { message: "Handshake already in progress.", fatal: !1 });
          else {
            T.fail && !T.open && 0 === T.handshakes && (T.fail = !1);
            T.handshaking = !0;
            var S = null;
            0 < (V = V || "").length && (T.sessionCache && (S = T.sessionCache.getSession(V)), null === S && (V = ""));
            0 === V.length && T.sessionCache && null !== (S = T.sessionCache.getSession()) && (V = S.id);
            T.session = {
              id: V,
              version: null,
              cipherSuite: null,
              compressionMethod: null,
              serverCertificate: null,
              certificateRequest: null,
              clientCertificate: null,
              sp: {},
              md5: n.md.md5.create(),
              sha1: n.md.sha1.create()
            };
            S && ((T.version = S.version), (T.session.sp = S.sp));
            T.session.sp.client_random = a.createRandom().getBytes();
            T.open = !0;
            a.queue(T, a.createRecord(T, { type: a.ContentType.handshake, data: a.createClientHello(T) }));
            a.flush(T);
          }
        }),
        (T.process = function (V) {
          var S = 0;
          return (
            V && T.input.putBytes(V),
            T.fail ||
              (null !== T.record && T.record.ready && T.record.fragment.isEmpty() && (T.record = null),
              null === T.record &&
                (S = (function (P) {
                  var x = 0,
                    U = P.input,
                    W = U.length();
                  5 > W
                    ? (x = 5 - W)
                    : ((P.record = {
                        type: U.getByte(),
                        version: { major: U.getByte(), minor: U.getByte() },
                        length: U.getInt16(),
                        fragment: n.util.createBuffer(),
                        ready: !1
                      }),
                      (U = P.record.version.major === P.version.major) &&
                        P.session &&
                        P.session.version &&
                        (U = P.record.version.minor === P.version.minor),
                      U ||
                        P.error(P, {
                          message: "Incompatible TLS version.",
                          send: !0,
                          alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.protocol_version }
                        }));
                  return x;
                })(T)),
              T.fail ||
                null === T.record ||
                T.record.ready ||
                (S = (function (P) {
                  var x = 0,
                    U = P.input,
                    W = U.length();
                  W < P.record.length
                    ? (x = P.record.length - W)
                    : (P.record.fragment.putBytes(U.getBytes(P.record.length)),
                      U.compact(),
                      P.state.current.read.update(P, P.record) &&
                        (null !== P.fragmented &&
                          (P.fragmented.type === P.record.type
                            ? (P.fragmented.fragment.putBuffer(P.record.fragment), (P.record = P.fragmented))
                            : P.error(P, {
                                message: "Invalid fragmented record.",
                                send: !0,
                                alert: { level: a.Alert.Level.fatal, description: a.Alert.Description.unexpected_message }
                              })),
                        (P.record.ready = !0)));
                  return x;
                })(T)),
              !T.fail &&
                null !== T.record &&
                T.record.ready &&
                (function (P, x) {
                  var U = x.type - a.ContentType.change_cipher_spec,
                    W = M[P.entity][P.expect];
                  U in W ? W[U](P, x) : a.handleUnexpected(P, x);
                })(T, T.record)),
            S
          );
        }),
        (T.prepare = function (V) {
          return a.queue(T, a.createRecord(T, { type: a.ContentType.application_data, data: n.util.createBuffer(V) })), a.flush(T);
        }),
        (T.prepareHeartbeatRequest = function (V, S) {
          return (
            V instanceof n.util.ByteBuffer && (V = V.bytes()),
            void 0 === S && (S = V.length),
            (T.expectedHeartbeatPayload = V),
            a.queue(
              T,
              a.createRecord(T, { type: a.ContentType.heartbeat, data: a.createHeartbeat(a.HeartbeatMessageType.heartbeat_request, V, S) })
            ),
            a.flush(T)
          );
        }),
        (T.close = function (V) {
          if (!T.fail && T.sessionCache && T.session) {
            var S = { id: T.session.id, version: T.session.version, sp: T.session.sp };
            S.sp.keys = null;
            T.sessionCache.setSession(S.id, S);
          }
          T.open &&
            ((T.open = !1),
            T.input.clear(),
            (T.isConnected || T.handshaking) &&
              ((T.isConnected = T.handshaking = !1),
              a.queue(T, a.createAlert(T, { level: a.Alert.Level.warning, description: a.Alert.Description.close_notify })),
              a.flush(T)),
            T.closed(T));
          T.reset(V);
        }),
        T
      );
    }),
    (O.exports = n.tls = n.tls || {}),
    a))
      "function" != typeof a[I] && (n.tls[I] = a[I]);
    n.tls.prf_tls1 = E;
    n.tls.hmac_sha1 = function (k, y, G) {
      var N = n.hmac.create();
      N.start("SHA1", k);
      k = n.util.createBuffer();
      return (
        k.putInt32(y[0]),
        k.putInt32(y[1]),
        k.putByte(G.type),
        k.putByte(G.version.major),
        k.putByte(G.version.minor),
        k.putInt16(G.length),
        k.putBytes(G.fragment.bytes()),
        N.update(k.getBytes()),
        N.digest().getBytes()
      );
    };
    n.tls.createSessionCache = a.createSessionCache;
    n.tls.createConnection = a.createConnection;
  },
  "./node_modules/node-forge/lib/util.js": function (O, w, H) {
    (function (n, E, C, B) {
      function d(l) {
        if (8 !== l && 16 !== l && 24 !== l && 32 !== l) throw Error("Only 8, 16, 24, or 32 bits supported: " + l);
      }
      function e(l) {
        if (((this.data = ""), (this.read = 0), "string" == typeof l)) this.data = l;
        else if (g.isArrayBuffer(l) || g.isArrayBufferView(l))
          if (void 0 !== B && l instanceof B) this.data = l.toString("binary");
          else {
            l = new Uint8Array(l);
            try {
              this.data = String.fromCharCode.apply(null, l);
            } catch (p) {
              for (var z = 0; z < l.length; ++z) this.putByte(l[z]);
            }
          }
        else
          (l instanceof e || ("object" == typeof l && "string" == typeof l.data && "number" == typeof l.read)) &&
            ((this.data = l.data), (this.read = l.read));
        this._constructedStringLength = 0;
      }
      var a = H("./node_modules/node-forge/lib/forge.js"),
        b = H("./node_modules/node-forge/lib/baseN.js"),
        g = (O.exports = a.util = a.util || {});
      !(function () {
        if (void 0 !== n && n.nextTick && !n.browser)
          return (g.nextTick = n.nextTick), void (g.setImmediate = "function" == typeof E ? E : g.nextTick);
        if ("function" == typeof E)
          return (
            (g.setImmediate = function () {
              return E.apply(void 0, arguments);
            }),
            void (g.nextTick = function (f) {
              return E(f);
            })
          );
        if (
          ((g.setImmediate = function (f) {
            setTimeout(f, 0);
          }),
          "undefined" != typeof window && "function" == typeof window.postMessage)
        ) {
          var l = [];
          g.setImmediate = function (f) {
            l.push(f);
            1 === l.length && window.postMessage("forge.setImmediate", "*");
          };
          window.addEventListener(
            "message",
            function (f) {
              f.source === window &&
                "forge.setImmediate" === f.data &&
                (f.stopPropagation(),
                (f = l.slice()),
                (l.length = 0),
                f.forEach(function (r) {
                  r();
                }));
            },
            !0
          );
        }
        if ("undefined" != typeof MutationObserver) {
          var z = Date.now(),
            p = !0,
            c = document.createElement("div");
          l = [];
          new MutationObserver(function () {
            var f = l.slice();
            l.length = 0;
            f.forEach(function (r) {
              r();
            });
          }).observe(c, { attributes: !0 });
          var h = g.setImmediate;
          g.setImmediate = function (f) {
            15 < Date.now() - z ? ((z = Date.now()), h(f)) : (l.push(f), 1 === l.length && c.setAttribute("a", (p = !p)));
          };
        }
        g.nextTick = g.setImmediate;
      })();
      g.isNodejs = void 0 !== n && n.versions && n.versions.node;
      g.globalScope = g.isNodejs ? C : "undefined" == typeof self ? window : self;
      g.isArray =
        Array.isArray ||
        function (l) {
          return "[object Array]" === Object.prototype.toString.call(l);
        };
      g.isArrayBuffer = function (l) {
        return "undefined" != typeof ArrayBuffer && l instanceof ArrayBuffer;
      };
      g.isArrayBufferView = function (l) {
        return l && g.isArrayBuffer(l.buffer) && void 0 !== l.byteLength;
      };
      g.ByteBuffer = e;
      g.ByteStringBuffer = e;
      g.ByteStringBuffer.prototype._optimizeConstructedString = function (l) {
        this._constructedStringLength += l;
        4096 < this._constructedStringLength && (this.data.substr(0, 1), (this._constructedStringLength = 0));
      };
      g.ByteStringBuffer.prototype.length = function () {
        return this.data.length - this.read;
      };
      g.ByteStringBuffer.prototype.isEmpty = function () {
        return 0 >= this.length();
      };
      g.ByteStringBuffer.prototype.putByte = function (l) {
        return this.putBytes(String.fromCharCode(l));
      };
      g.ByteStringBuffer.prototype.fillWithByte = function (l, z) {
        l = String.fromCharCode(l);
        for (var p = this.data; 0 < z; ) 1 & z && (p += l), 0 < (z >>>= 1) && (l += l);
        return (this.data = p), this._optimizeConstructedString(z), this;
      };
      g.ByteStringBuffer.prototype.putBytes = function (l) {
        return (this.data += l), this._optimizeConstructedString(l.length), this;
      };
      g.ByteStringBuffer.prototype.putString = function (l) {
        return this.putBytes(g.encodeUtf8(l));
      };
      g.ByteStringBuffer.prototype.putInt16 = function (l) {
        return this.putBytes(String.fromCharCode((l >> 8) & 255) + String.fromCharCode(255 & l));
      };
      g.ByteStringBuffer.prototype.putInt24 = function (l) {
        return this.putBytes(String.fromCharCode((l >> 16) & 255) + String.fromCharCode((l >> 8) & 255) + String.fromCharCode(255 & l));
      };
      g.ByteStringBuffer.prototype.putInt32 = function (l) {
        return this.putBytes(
          String.fromCharCode((l >> 24) & 255) +
            String.fromCharCode((l >> 16) & 255) +
            String.fromCharCode((l >> 8) & 255) +
            String.fromCharCode(255 & l)
        );
      };
      g.ByteStringBuffer.prototype.putInt16Le = function (l) {
        return this.putBytes(String.fromCharCode(255 & l) + String.fromCharCode((l >> 8) & 255));
      };
      g.ByteStringBuffer.prototype.putInt24Le = function (l) {
        return this.putBytes(String.fromCharCode(255 & l) + String.fromCharCode((l >> 8) & 255) + String.fromCharCode((l >> 16) & 255));
      };
      g.ByteStringBuffer.prototype.putInt32Le = function (l) {
        return this.putBytes(
          String.fromCharCode(255 & l) +
            String.fromCharCode((l >> 8) & 255) +
            String.fromCharCode((l >> 16) & 255) +
            String.fromCharCode((l >> 24) & 255)
        );
      };
      g.ByteStringBuffer.prototype.putInt = function (l, z) {
        d(z);
        var p = "";
        do (z -= 8), (p += String.fromCharCode((l >> z) & 255));
        while (0 < z);
        return this.putBytes(p);
      };
      g.ByteStringBuffer.prototype.putSignedInt = function (l, z) {
        return 0 > l && (l += 2 << (z - 1)), this.putInt(l, z);
      };
      g.ByteStringBuffer.prototype.putBuffer = function (l) {
        return this.putBytes(l.getBytes());
      };
      g.ByteStringBuffer.prototype.getByte = function () {
        return this.data.charCodeAt(this.read++);
      };
      g.ByteStringBuffer.prototype.getInt16 = function () {
        var l = (this.data.charCodeAt(this.read) << 8) ^ this.data.charCodeAt(this.read + 1);
        return (this.read += 2), l;
      };
      g.ByteStringBuffer.prototype.getInt24 = function () {
        var l = (this.data.charCodeAt(this.read) << 16) ^ (this.data.charCodeAt(this.read + 1) << 8) ^ this.data.charCodeAt(this.read + 2);
        return (this.read += 3), l;
      };
      g.ByteStringBuffer.prototype.getInt32 = function () {
        var l =
          (this.data.charCodeAt(this.read) << 24) ^
          (this.data.charCodeAt(this.read + 1) << 16) ^
          (this.data.charCodeAt(this.read + 2) << 8) ^
          this.data.charCodeAt(this.read + 3);
        return (this.read += 4), l;
      };
      g.ByteStringBuffer.prototype.getInt16Le = function () {
        var l = this.data.charCodeAt(this.read) ^ (this.data.charCodeAt(this.read + 1) << 8);
        return (this.read += 2), l;
      };
      g.ByteStringBuffer.prototype.getInt24Le = function () {
        var l = this.data.charCodeAt(this.read) ^ (this.data.charCodeAt(this.read + 1) << 8) ^ (this.data.charCodeAt(this.read + 2) << 16);
        return (this.read += 3), l;
      };
      g.ByteStringBuffer.prototype.getInt32Le = function () {
        var l =
          this.data.charCodeAt(this.read) ^
          (this.data.charCodeAt(this.read + 1) << 8) ^
          (this.data.charCodeAt(this.read + 2) << 16) ^
          (this.data.charCodeAt(this.read + 3) << 24);
        return (this.read += 4), l;
      };
      g.ByteStringBuffer.prototype.getInt = function (l) {
        d(l);
        var z = 0;
        do (z = (z << 8) + this.data.charCodeAt(this.read++)), (l -= 8);
        while (0 < l);
        return z;
      };
      g.ByteStringBuffer.prototype.getSignedInt = function (l) {
        var z = this.getInt(l);
        l = 2 << (l - 2);
        return z >= l && (z -= l << 1), z;
      };
      g.ByteStringBuffer.prototype.getBytes = function (l) {
        var z;
        return (
          l
            ? ((l = Math.min(this.length(), l)), (z = this.data.slice(this.read, this.read + l)), (this.read += l))
            : 0 === l
            ? (z = "")
            : ((z = 0 === this.read ? this.data : this.data.slice(this.read)), this.clear()),
          z
        );
      };
      g.ByteStringBuffer.prototype.bytes = function (l) {
        return void 0 === l ? this.data.slice(this.read) : this.data.slice(this.read, this.read + l);
      };
      g.ByteStringBuffer.prototype.at = function (l) {
        return this.data.charCodeAt(this.read + l);
      };
      g.ByteStringBuffer.prototype.setAt = function (l, z) {
        return (this.data = this.data.substr(0, this.read + l) + String.fromCharCode(z) + this.data.substr(this.read + l + 1)), this;
      };
      g.ByteStringBuffer.prototype.last = function () {
        return this.data.charCodeAt(this.data.length - 1);
      };
      g.ByteStringBuffer.prototype.copy = function () {
        var l = g.createBuffer(this.data);
        return (l.read = this.read), l;
      };
      g.ByteStringBuffer.prototype.compact = function () {
        return 0 < this.read && ((this.data = this.data.slice(this.read)), (this.read = 0)), this;
      };
      g.ByteStringBuffer.prototype.clear = function () {
        return (this.data = ""), (this.read = 0), this;
      };
      g.ByteStringBuffer.prototype.truncate = function (l) {
        l = Math.max(0, this.length() - l);
        return (this.data = this.data.substr(this.read, l)), (this.read = 0), this;
      };
      g.ByteStringBuffer.prototype.toHex = function () {
        for (var l = "", z = this.read; z < this.data.length; ++z) {
          var p = this.data.charCodeAt(z);
          16 > p && (l += "0");
          l += p.toString(16);
        }
        return l;
      };
      g.ByteStringBuffer.prototype.toString = function () {
        return g.decodeUtf8(this.bytes());
      };
      g.DataBuffer = function (l, z) {
        z = z || {};
        this.read = z.readOffset || 0;
        this.growSize = z.growSize || 1024;
        var p = g.isArrayBuffer(l),
          c = g.isArrayBufferView(l);
        if (p || c)
          return (
            (this.data = p ? new DataView(l) : new DataView(l.buffer, l.byteOffset, l.byteLength)),
            void (this.write = "writeOffset" in z ? z.writeOffset : this.data.byteLength)
          );
        this.data = new DataView(new ArrayBuffer(0));
        this.write = 0;
        null != l && this.putBytes(l);
        "writeOffset" in z && (this.write = z.writeOffset);
      };
      g.DataBuffer.prototype.length = function () {
        return this.write - this.read;
      };
      g.DataBuffer.prototype.isEmpty = function () {
        return 0 >= this.length();
      };
      g.DataBuffer.prototype.accommodate = function (l, z) {
        if (this.length() >= l) return this;
        z = Math.max(z || this.growSize, l);
        l = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength);
        z = new Uint8Array(this.length() + z);
        return z.set(l), (this.data = new DataView(z.buffer)), this;
      };
      g.DataBuffer.prototype.putByte = function (l) {
        return this.accommodate(1), this.data.setUint8(this.write++, l), this;
      };
      g.DataBuffer.prototype.fillWithByte = function (l, z) {
        this.accommodate(z);
        for (var p = 0; p < z; ++p) this.data.setUint8(l);
        return this;
      };
      g.DataBuffer.prototype.putBytes = function (l, z) {
        if (g.isArrayBufferView(l))
          return (
            (l = (p = new Uint8Array(l.buffer, l.byteOffset, l.byteLength)).byteLength - p.byteOffset),
            this.accommodate(l),
            new Uint8Array(this.data.buffer, this.write).set(p),
            (this.write += l),
            this
          );
        if (g.isArrayBuffer(l)) {
          var p = new Uint8Array(l);
          return this.accommodate(p.byteLength), new Uint8Array(this.data.buffer).set(p, this.write), (this.write += p.byteLength), this;
        }
        if (
          l instanceof g.DataBuffer ||
          ("object" == typeof l && "number" == typeof l.read && "number" == typeof l.write && g.isArrayBufferView(l.data))
        )
          return (
            (p = new Uint8Array(l.data.byteLength, l.read, l.length())),
            this.accommodate(p.byteLength),
            new Uint8Array(l.data.byteLength, this.write).set(p),
            (this.write += p.byteLength),
            this
          );
        if ((l instanceof g.ByteStringBuffer && ((l = l.data), (z = "binary")), (z = z || "binary"), "string" == typeof l)) {
          var c;
          if ("hex" === z)
            return (
              this.accommodate(Math.ceil(l.length / 2)),
              (c = new Uint8Array(this.data.buffer, this.write)),
              (this.write += g.binary.hex.decode(l, c, this.write)),
              this
            );
          if ("base64" === z)
            return (
              this.accommodate(3 * Math.ceil(l.length / 4)),
              (c = new Uint8Array(this.data.buffer, this.write)),
              (this.write += g.binary.base64.decode(l, c, this.write)),
              this
            );
          if (("utf8" === z && ((l = g.encodeUtf8(l)), (z = "binary")), "binary" === z || "raw" === z))
            return (
              this.accommodate(l.length), (c = new Uint8Array(this.data.buffer, this.write)), (this.write += g.binary.raw.decode(c)), this
            );
          if ("utf16" === z)
            return (
              this.accommodate(2 * l.length),
              (c = new Uint16Array(this.data.buffer, this.write)),
              (this.write += g.text.utf16.encode(c)),
              this
            );
          throw Error("Invalid encoding: " + z);
        }
        throw Error("Invalid parameter: " + l);
      };
      g.DataBuffer.prototype.putBuffer = function (l) {
        return this.putBytes(l), l.clear(), this;
      };
      g.DataBuffer.prototype.putString = function (l) {
        return this.putBytes(l, "utf16");
      };
      g.DataBuffer.prototype.putInt16 = function (l) {
        return this.accommodate(2), this.data.setInt16(this.write, l), (this.write += 2), this;
      };
      g.DataBuffer.prototype.putInt24 = function (l) {
        return (
          this.accommodate(3),
          this.data.setInt16(this.write, (l >> 8) & 65535),
          this.data.setInt8(this.write, (l >> 16) & 255),
          (this.write += 3),
          this
        );
      };
      g.DataBuffer.prototype.putInt32 = function (l) {
        return this.accommodate(4), this.data.setInt32(this.write, l), (this.write += 4), this;
      };
      g.DataBuffer.prototype.putInt16Le = function (l) {
        return this.accommodate(2), this.data.setInt16(this.write, l, !0), (this.write += 2), this;
      };
      g.DataBuffer.prototype.putInt24Le = function (l) {
        return (
          this.accommodate(3),
          this.data.setInt8(this.write, (l >> 16) & 255),
          this.data.setInt16(this.write, (l >> 8) & 65535, !0),
          (this.write += 3),
          this
        );
      };
      g.DataBuffer.prototype.putInt32Le = function (l) {
        return this.accommodate(4), this.data.setInt32(this.write, l, !0), (this.write += 4), this;
      };
      g.DataBuffer.prototype.putInt = function (l, z) {
        d(z);
        this.accommodate(z / 8);
        do (z -= 8), this.data.setInt8(this.write++, (l >> z) & 255);
        while (0 < z);
        return this;
      };
      g.DataBuffer.prototype.putSignedInt = function (l, z) {
        return d(z), this.accommodate(z / 8), 0 > l && (l += 2 << (z - 1)), this.putInt(l, z);
      };
      g.DataBuffer.prototype.getByte = function () {
        return this.data.getInt8(this.read++);
      };
      g.DataBuffer.prototype.getInt16 = function () {
        var l = this.data.getInt16(this.read);
        return (this.read += 2), l;
      };
      g.DataBuffer.prototype.getInt24 = function () {
        var l = (this.data.getInt16(this.read) << 8) ^ this.data.getInt8(this.read + 2);
        return (this.read += 3), l;
      };
      g.DataBuffer.prototype.getInt32 = function () {
        var l = this.data.getInt32(this.read);
        return (this.read += 4), l;
      };
      g.DataBuffer.prototype.getInt16Le = function () {
        var l = this.data.getInt16(this.read, !0);
        return (this.read += 2), l;
      };
      g.DataBuffer.prototype.getInt24Le = function () {
        var l = this.data.getInt8(this.read) ^ (this.data.getInt16(this.read + 1, !0) << 8);
        return (this.read += 3), l;
      };
      g.DataBuffer.prototype.getInt32Le = function () {
        var l = this.data.getInt32(this.read, !0);
        return (this.read += 4), l;
      };
      g.DataBuffer.prototype.getInt = function (l) {
        d(l);
        var z = 0;
        do (z = (z << 8) + this.data.getInt8(this.read++)), (l -= 8);
        while (0 < l);
        return z;
      };
      g.DataBuffer.prototype.getSignedInt = function (l) {
        var z = this.getInt(l);
        l = 2 << (l - 2);
        return z >= l && (z -= l << 1), z;
      };
      g.DataBuffer.prototype.getBytes = function (l) {
        var z;
        return (
          l
            ? ((l = Math.min(this.length(), l)), (z = this.data.slice(this.read, this.read + l)), (this.read += l))
            : 0 === l
            ? (z = "")
            : ((z = 0 === this.read ? this.data : this.data.slice(this.read)), this.clear()),
          z
        );
      };
      g.DataBuffer.prototype.bytes = function (l) {
        return void 0 === l ? this.data.slice(this.read) : this.data.slice(this.read, this.read + l);
      };
      g.DataBuffer.prototype.at = function (l) {
        return this.data.getUint8(this.read + l);
      };
      g.DataBuffer.prototype.setAt = function (l, z) {
        return this.data.setUint8(l, z), this;
      };
      g.DataBuffer.prototype.last = function () {
        return this.data.getUint8(this.write - 1);
      };
      g.DataBuffer.prototype.copy = function () {
        return new g.DataBuffer(this);
      };
      g.DataBuffer.prototype.compact = function () {
        if (0 < this.read) {
          var l = new Uint8Array(this.data.buffer, this.read),
            z = new Uint8Array(l.byteLength);
          z.set(l);
          this.data = new DataView(z);
          this.write -= this.read;
          this.read = 0;
        }
        return this;
      };
      g.DataBuffer.prototype.clear = function () {
        return (this.data = new DataView(new ArrayBuffer(0))), (this.read = this.write = 0), this;
      };
      g.DataBuffer.prototype.truncate = function (l) {
        return (this.write = Math.max(0, this.length() - l)), (this.read = Math.min(this.read, this.write)), this;
      };
      g.DataBuffer.prototype.toHex = function () {
        for (var l = "", z = this.read; z < this.data.byteLength; ++z) {
          var p = this.data.getUint8(z);
          16 > p && (l += "0");
          l += p.toString(16);
        }
        return l;
      };
      g.DataBuffer.prototype.toString = function (l) {
        var z = new Uint8Array(this.data, this.read, this.length());
        if ("binary" === (l = l || "utf8") || "raw" === l) return g.binary.raw.encode(z);
        if ("hex" === l) return g.binary.hex.encode(z);
        if ("base64" === l) return g.binary.base64.encode(z);
        if ("utf8" === l) return g.text.utf8.decode(z);
        if ("utf16" === l) return g.text.utf16.decode(z);
        throw Error("Invalid encoding: " + l);
      };
      g.createBuffer = function (l, z) {
        return (z = z || "raw"), void 0 !== l && "utf8" === z && (l = g.encodeUtf8(l)), new g.ByteBuffer(l);
      };
      g.fillString = function (l, z) {
        for (var p = ""; 0 < z; ) 1 & z && (p += l), 0 < (z >>>= 1) && (l += l);
        return p;
      };
      g.xorBytes = function (l, z, p) {
        for (var c = "", h, f = "", r = 0, F = 0; 0 < p; --p, ++r)
          (h = l.charCodeAt(r) ^ z.charCodeAt(r)), 10 <= F && ((c += f), (f = ""), (F = 0)), (f += String.fromCharCode(h)), ++F;
        return c + f;
      };
      g.hexToBytes = function (l) {
        var z = "",
          p = 0;
        for (1 & l.length && ((p = 1), (z += String.fromCharCode(parseInt(l[0], 16)))); p < l.length; p += 2)
          z += String.fromCharCode(parseInt(l.substr(p, 2), 16));
        return z;
      };
      g.bytesToHex = function (l) {
        return g.createBuffer(l).toHex();
      };
      g.int32ToBytes = function (l) {
        return (
          String.fromCharCode((l >> 24) & 255) +
          String.fromCharCode((l >> 16) & 255) +
          String.fromCharCode((l >> 8) & 255) +
          String.fromCharCode(255 & l)
        );
      };
      var q = [
        62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
      ];
      g.encode64 = function (l, z) {
        for (var p, c, h, f = "", r = "", F = 0; F < l.length; )
          (p = l.charCodeAt(F++)),
            (c = l.charCodeAt(F++)),
            (h = l.charCodeAt(F++)),
            (f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(p >> 2)),
            (f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(((3 & p) << 4) | (c >> 4))),
            isNaN(c)
              ? (f += "==")
              : ((f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(((15 & c) << 2) | (h >> 6))),
                (f += isNaN(h) ? "=" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(63 & h))),
            z && f.length > z && ((r += f.substr(0, z) + "\r\n"), (f = f.substr(z)));
        return r + f;
      };
      g.decode64 = function (l) {
        l = l.replace(/[^A-Za-z0-9\+\/=]/g, "");
        for (var z, p, c, h, f = "", r = 0; r < l.length; )
          (z = q[l.charCodeAt(r++) - 43]),
            (p = q[l.charCodeAt(r++) - 43]),
            (c = q[l.charCodeAt(r++) - 43]),
            (h = q[l.charCodeAt(r++) - 43]),
            (f += String.fromCharCode((z << 2) | (p >> 4))),
            64 !== c &&
              ((f += String.fromCharCode(((15 & p) << 4) | (c >> 2))), 64 !== h && (f += String.fromCharCode(((3 & c) << 6) | h)));
        return f;
      };
      g.encodeUtf8 = function (l) {
        return unescape(encodeURIComponent(l));
      };
      g.decodeUtf8 = function (l) {
        return decodeURIComponent(escape(l));
      };
      g.binary = { raw: {}, hex: {}, base64: {}, base58: {}, baseN: { encode: b.encode, decode: b.decode } };
      g.binary.raw.encode = function (l) {
        return String.fromCharCode.apply(null, l);
      };
      g.binary.raw.decode = function (l, z, p) {
        var c = z;
        c || (c = new Uint8Array(l.length));
        for (var h = (p = p || 0), f = 0; f < l.length; ++f) c[h++] = l.charCodeAt(f);
        return z ? h - p : c;
      };
      g.binary.hex.encode = g.bytesToHex;
      g.binary.hex.decode = function (l, z, p) {
        var c = z;
        c || (c = new Uint8Array(Math.ceil(l.length / 2)));
        var h = 0,
          f = (p = p || 0);
        for (1 & l.length && ((h = 1), (c[f++] = parseInt(l[0], 16))); h < l.length; h += 2) c[f++] = parseInt(l.substr(h, 2), 16);
        return z ? f - p : c;
      };
      g.binary.base64.encode = function (l, z) {
        for (var p, c, h, f = "", r = "", F = 0; F < l.byteLength; )
          (p = l[F++]),
            (c = l[F++]),
            (h = l[F++]),
            (f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(p >> 2)),
            (f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(((3 & p) << 4) | (c >> 4))),
            isNaN(c)
              ? (f += "==")
              : ((f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(((15 & c) << 2) | (h >> 6))),
                (f += isNaN(h) ? "=" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(63 & h))),
            z && f.length > z && ((r += f.substr(0, z) + "\r\n"), (f = f.substr(z)));
        return r + f;
      };
      g.binary.base64.decode = function (l, z, p) {
        var c = z;
        c || (c = new Uint8Array(3 * Math.ceil(l.length / 4)));
        l = l.replace(/[^A-Za-z0-9\+\/=]/g, "");
        for (var h = 0, f = (p = p || 0); h < l.length; ) {
          var r = q[l.charCodeAt(h++) - 43];
          var F = q[l.charCodeAt(h++) - 43];
          var M = q[l.charCodeAt(h++) - 43];
          var R = q[l.charCodeAt(h++) - 43];
          c[f++] = (r << 2) | (F >> 4);
          64 !== M && ((c[f++] = ((15 & F) << 4) | (M >> 2)), 64 !== R && (c[f++] = ((3 & M) << 6) | R));
        }
        return z ? f - p : c.subarray(0, f);
      };
      g.binary.base58.encode = function (l, z) {
        return g.binary.baseN.encode(l, "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", z);
      };
      g.binary.base58.decode = function (l, z) {
        return g.binary.baseN.decode(l, "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", z);
      };
      g.text = { utf8: {}, utf16: {} };
      g.text.utf8.encode = function (l, z, p) {
        l = g.encodeUtf8(l);
        var c = z;
        c || (c = new Uint8Array(l.length));
        for (var h = (p = p || 0), f = 0; f < l.length; ++f) c[h++] = l.charCodeAt(f);
        return z ? h - p : c;
      };
      g.text.utf8.decode = function (l) {
        return g.decodeUtf8(String.fromCharCode.apply(null, l));
      };
      g.text.utf16.encode = function (l, z, p) {
        var c = z;
        c || (c = new Uint8Array(2 * l.length));
        for (var h = new Uint16Array(c.buffer), f = (p = p || 0), r = p, F = 0; F < l.length; ++F) (h[r++] = l.charCodeAt(F)), (f += 2);
        return z ? f - p : c;
      };
      g.text.utf16.decode = function (l) {
        return String.fromCharCode.apply(null, new Uint16Array(l.buffer));
      };
      g.deflate = function (l, z, p) {
        if (((z = g.decode64(l.deflate(g.encode64(z)).rval)), p))
          (l = 2), 32 & z.charCodeAt(1) && (l = 6), (z = z.substring(l, z.length - 4));
        return z;
      };
      g.inflate = function (l, z, p) {
        l = l.inflate(g.encode64(z)).rval;
        return null === l ? null : g.decode64(l);
      };
      var D = function (l, z, p) {
          if (!l) throw Error("WebStorage not available.");
          var c;
          if (
            (null === p ? (c = l.removeItem(z)) : ((p = g.encode64(JSON.stringify(p))), (c = l.setItem(z, p))),
            void 0 !== c && !0 !== c.rval)
          )
            throw ((l = Error(c.error.message)), (l.id = c.error.id), (l.name = c.error.name), l);
        },
        t = function (l, z) {
          if (!l) throw Error("WebStorage not available.");
          z = l.getItem(z);
          if (l.init)
            if (null === z.rval) {
              if (z.error) throw ((l = Error(z.error.message)), (l.id = z.error.id), (l.name = z.error.name), l);
              z = null;
            } else z = z.rval;
          return null !== z && (z = JSON.parse(g.decode64(z))), z;
        },
        A = function (l, z, p, c) {
          var h = t(l, z);
          null === h && (h = {});
          h[p] = c;
          D(l, z, h);
        },
        v = function (l, z, p) {
          l = t(l, z);
          return null !== l && (l = p in l ? l[p] : null), l;
        },
        L = function (l, z, p) {
          var c = t(l, z);
          if (null !== c && p in c) {
            delete c[p];
            p = !0;
            for (var h in c) {
              p = !1;
              break;
            }
            p && (c = null);
            D(l, z, c);
          }
        },
        K = function (l, z) {
          D(l, z, null);
        },
        J = function (l, z, p) {
          var c = null;
          void 0 === p && (p = ["web", "flash"]);
          var h = !1,
            f = null,
            r;
          for (r in p) {
            var F = p[r];
            try {
              if ("flash" === F || "both" === F) {
                if (null === z[0]) throw Error("Flash local storage not available.");
                c = l.apply(this, z);
                h = "flash" === F;
              }
              ("web" !== F && "both" !== F) || ((z[0] = localStorage), (c = l.apply(this, z)), (h = !0));
            } catch (M) {
              f = M;
            }
            if (h) break;
          }
          if (!h) throw f;
          return c;
        };
      g.setItem = function (l, z, p, c, h) {
        J(A, arguments, h);
      };
      g.getItem = function (l, z, p, c) {
        return J(v, arguments, c);
      };
      g.removeItem = function (l, z, p, c) {
        J(L, arguments, c);
      };
      g.clearItems = function (l, z, p) {
        J(K, arguments, p);
      };
      g.isEmpty = function (l) {
        for (var z in l) if (l.hasOwnProperty(z)) return !1;
        return !0;
      };
      g.format = function (l) {
        for (var z, p, c = /%./g, h = 0, f = [], r = 0; (z = c.exec(l)); )
          switch ((0 < (p = l.substring(r, c.lastIndex - 2)).length && f.push(p), (r = c.lastIndex), (z = z[0][1]), z)) {
            case "s":
            case "o":
              h < arguments.length ? f.push(arguments[1 + h++]) : f.push("<?>");
              break;
            case "%":
              f.push("%");
              break;
            default:
              f.push("<%" + z + "?>");
          }
        return f.push(l.substring(r)), f.join("");
      };
      g.formatNumber = function (l, z, p, c) {
        var h = isNaN((z = Math.abs(z))) ? 2 : z;
        z = void 0 === p ? "," : p;
        c = void 0 === c ? "." : c;
        p = 0 > l ? "-" : "";
        var f = parseInt((l = Math.abs(+l || 0).toFixed(h)), 10) + "",
          r = 3 < f.length ? f.length % 3 : 0;
        return (
          p +
          (r ? f.substr(0, r) + c : "") +
          f.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + c) +
          (h
            ? z +
              Math.abs(l - f)
                .toFixed(h)
                .slice(2)
            : "")
        );
      };
      g.formatSize = function (l) {
        return 1073741824 <= l
          ? g.formatNumber(l / 1073741824, 2, ".", "") + " GiB"
          : 1048576 <= l
          ? g.formatNumber(l / 1048576, 2, ".", "") + " MiB"
          : 1024 <= l
          ? g.formatNumber(l / 1024, 0) + " KiB"
          : g.formatNumber(l, 0) + " bytes";
      };
      g.bytesFromIP = function (l) {
        return -1 !== l.indexOf(".") ? g.bytesFromIPv4(l) : -1 !== l.indexOf(":") ? g.bytesFromIPv6(l) : null;
      };
      g.bytesFromIPv4 = function (l) {
        if (4 !== (l = l.split(".")).length) return null;
        for (var z = g.createBuffer(), p = 0; p < l.length; ++p) {
          var c = parseInt(l[p], 10);
          if (isNaN(c)) return null;
          z.putByte(c);
        }
        return z.getBytes();
      };
      g.bytesFromIPv6 = function (l) {
        for (
          var z = 0,
            p =
              2 *
              (8 -
                (l = l.split(":").filter(function (r) {
                  return 0 === r.length && ++z, !0;
                })).length +
                z),
            c = g.createBuffer(),
            h = 0;
          8 > h;
          ++h
        )
          if (l[h] && 0 !== l[h].length) {
            var f = g.hexToBytes(l[h]);
            2 > f.length && c.putByte(0);
            c.putBytes(f);
          } else c.fillWithByte(0, p), (p = 0);
        return c.getBytes();
      };
      g.bytesToIP = function (l) {
        return 4 === l.length ? g.bytesToIPv4(l) : 16 === l.length ? g.bytesToIPv6(l) : null;
      };
      g.bytesToIPv4 = function (l) {
        if (4 !== l.length) return null;
        for (var z = [], p = 0; p < l.length; ++p) z.push(l.charCodeAt(p));
        return z.join(".");
      };
      g.bytesToIPv6 = function (l) {
        if (16 !== l.length) return null;
        for (var z = [], p = [], c = 0, h = 0; h < l.length; h += 2) {
          for (var f = g.bytesToHex(l[h] + l[h + 1]); "0" === f[0] && "0" !== f; ) f = f.substr(1);
          if ("0" === f) {
            var r = p[p.length - 1],
              F = z.length;
            r && F === r.end + 1
              ? ((r.end = F), r.end - r.start > p[c].end - p[c].start && (c = p.length - 1))
              : p.push({ start: F, end: F });
          }
          z.push(f);
        }
        0 < p.length &&
          ((l = p[c]),
          0 < l.end - l.start && (z.splice(l.start, l.end - l.start + 1, ""), 0 === l.start && z.unshift(""), 7 === l.end && z.push("")));
        return z.join(":");
      };
      g.estimateCores = function (l, z) {
        if (("function" == typeof l && ((z = l), (l = {})), (l = l || {}), "cores" in g && !l.update)) return z(null, g.cores);
        if ("undefined" != typeof navigator && "hardwareConcurrency" in navigator && 0 < navigator.hardwareConcurrency)
          return (g.cores = navigator.hardwareConcurrency), z(null, g.cores);
        if ("undefined" == typeof Worker) return (g.cores = 1), z(null, g.cores);
        if ("undefined" == typeof Blob) return (g.cores = 2), z(null, g.cores);
        var p = URL.createObjectURL(
          new Blob(
            [
              "(",
              function () {
                self.addEventListener("message", function (c) {
                  c = Date.now();
                  for (var h = c + 4; Date.now() < h; );
                  self.postMessage({ st: c, et: h });
                });
              }.toString(),
              ")()"
            ],
            { type: "application/javascript" }
          )
        );
        !(function F(h, f, r) {
          if (0 === f) {
            var M = Math.floor(
              h.reduce(function (R, m) {
                return R + m;
              }, 0) / h.length
            );
            return (g.cores = Math.max(1, M)), URL.revokeObjectURL(p), z(null, g.cores);
          }
          !(function (R, m) {
            for (var u = [], I = [], k = 0; k < R; ++k) {
              var y = new Worker(p);
              y.addEventListener("message", function (G) {
                if ((I.push(G.data), I.length === R)) {
                  for (G = 0; G < R; ++G) u[G].terminate();
                  m(null, I);
                }
              });
              u.push(y);
            }
            for (k = 0; k < R; ++k) u[k].postMessage(k);
          })(r, function (R, m) {
            h.push(
              (function (u, I) {
                for (var k = [], y = 0; y < u; ++y)
                  for (var G = I[y], N = (k[y] = []), Q = 0; Q < u; ++Q)
                    if (y !== Q) {
                      var T = I[Q];
                      ((G.st > T.st && G.st < T.et) || (T.st > G.st && T.st < G.et)) && N.push(Q);
                    }
                return k.reduce(function (V, S) {
                  return Math.max(V, S.length);
                }, 0);
              })(r, m)
            );
            F(h, f - 1, r);
          });
        })([], 5, 16);
      };
    }).call(
      this,
      H("./node_modules/process/browser.js"),
      H("./node_modules/timers-browserify/main.js").setImmediate,
      H("./node_modules/webpack/buildin/global.js"),
      H("./node_modules/buffer/index.js").Buffer
    );
  },
  "./node_modules/node-forge/lib/x509.js": function (O, w, H) {
    function n(p, c) {
      "string" == typeof c && (c = { shortName: c });
      for (var h, f = null, r = 0; null === f && r < p.attributes.length; ++r)
        (h = p.attributes[r]),
          ((c.type && c.type === h.type) || (c.name && c.name === h.name) || (c.shortName && c.shortName === h.shortName)) && (f = h);
      return f;
    }
    function E(p) {
      var c,
        h = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, []);
      p = p.attributes;
      for (var f = 0; f < p.length; ++f) {
        var r = (c = p[f]).value,
          F = b.Type.PRINTABLESTRING;
        "valueTagClass" in c && (F = c.valueTagClass) === b.Type.UTF8 && (r = a.util.encodeUtf8(r));
        c = b.create(b.Class.UNIVERSAL, b.Type.SET, !0, [
          b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
            b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(c.type).getBytes()),
            b.create(b.Class.UNIVERSAL, F, !1, r)
          ])
        ]);
        h.value.push(c);
      }
      return h;
    }
    function C(p) {
      for (var c, h = 0; h < p.length; ++h) {
        if (
          (void 0 === (c = p[h]).name &&
            (c.type && c.type in g.oids ? (c.name = g.oids[c.type]) : c.shortName && c.shortName in D && (c.name = g.oids[D[c.shortName]])),
          void 0 === c.type)
        ) {
          if (!(c.name && c.name in g.oids)) throw (((r = Error("Attribute type not specified.")).attribute = c), r);
          c.type = g.oids[c.name];
        }
        if (
          (void 0 === c.shortName && c.name && c.name in D && (c.shortName = D[c.name]),
          c.type === q.extensionRequest && ((c.valueConstructed = !0), (c.valueTagClass = b.Type.SEQUENCE), !c.value && c.extensions))
        ) {
          c.value = [];
          for (var f = 0; f < c.extensions.length; ++f) c.value.push(g.certificateExtensionToAsn1(B(c.extensions[f])));
        }
        var r;
        if (void 0 === c.value) throw (((r = Error("Attribute value not specified.")).attribute = c), r);
      }
    }
    function B(p, c) {
      if (((c = c || {}), void 0 === p.name && p.id && p.id in g.oids && (p.name = g.oids[p.id]), void 0 === p.id)) {
        if (!(p.name && p.name in g.oids)) throw (((R = Error("Extension ID not specified.")).extension = p), R);
        p.id = g.oids[p.name];
      }
      if (void 0 !== p.value) return p;
      if ("keyUsage" === p.name) {
        var h = (c = 0),
          f = 0;
        p.digitalSignature && ((h |= 128), (c = 7));
        p.nonRepudiation && ((h |= 64), (c = 6));
        p.keyEncipherment && ((h |= 32), (c = 5));
        p.dataEncipherment && ((h |= 16), (c = 4));
        p.keyAgreement && ((h |= 8), (c = 3));
        p.keyCertSign && ((h |= 4), (c = 2));
        p.cRLSign && ((h |= 2), (c = 1));
        p.encipherOnly && ((h |= 1), (c = 0));
        p.decipherOnly && ((f |= 128), (c = 7));
        c = String.fromCharCode(c);
        0 !== f ? (c += String.fromCharCode(h) + String.fromCharCode(f)) : 0 !== h && (c += String.fromCharCode(h));
        p.value = b.create(b.Class.UNIVERSAL, b.Type.BITSTRING, !1, c);
      } else if ("basicConstraints" === p.name)
        (p.value = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [])),
          p.cA && p.value.value.push(b.create(b.Class.UNIVERSAL, b.Type.BOOLEAN, !1, String.fromCharCode(255))),
          "pathLenConstraint" in p &&
            p.value.value.push(b.create(b.Class.UNIVERSAL, b.Type.INTEGER, !1, b.integerToDer(p.pathLenConstraint).getBytes()));
      else if ("extKeyUsage" === p.name)
        for (f in ((p.value = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [])), (h = p.value.value), p))
          !0 === p[f] &&
            (f in q
              ? h.push(b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(q[f]).getBytes()))
              : -1 !== f.indexOf(".") && h.push(b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(f).getBytes())));
      else if ("nsCertType" === p.name)
        (h = c = 0),
          p.client && ((h |= 128), (c = 7)),
          p.server && ((h |= 64), (c = 6)),
          p.email && ((h |= 32), (c = 5)),
          p.objsign && ((h |= 16), (c = 4)),
          p.reserved && ((h |= 8), (c = 3)),
          p.sslCA && ((h |= 4), (c = 2)),
          p.emailCA && ((h |= 2), (c = 1)),
          p.objCA && ((h |= 1), (c = 0)),
          (c = String.fromCharCode(c)),
          0 !== h && (c += String.fromCharCode(h)),
          (p.value = b.create(b.Class.UNIVERSAL, b.Type.BITSTRING, !1, c));
      else if ("subjectAltName" === p.name || "issuerAltName" === p.name)
        for (p.value = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, []), f = 0; f < p.altNames.length; ++f) {
          c = (r = p.altNames[f]).value;
          if (7 === r.type && r.ip) {
            if (null === (c = a.util.bytesFromIP(r.ip)))
              throw (((R = Error('Extension "ip" value is not a valid IPv4 or IPv6 address.')).extension = p), R);
          } else 8 === r.type && (c = r.oid ? b.oidToDer(b.oidToDer(r.oid)) : b.oidToDer(c));
          p.value.value.push(b.create(b.Class.CONTEXT_SPECIFIC, r.type, !1, c));
        }
      else if ("nsComment" === p.name && c.cert) {
        if (!/^[\x00-\x7F]*$/.test(p.comment) || 1 > p.comment.length || 128 < p.comment.length)
          throw Error('Invalid "nsComment" content.');
        p.value = b.create(b.Class.UNIVERSAL, b.Type.IA5STRING, !1, p.comment);
      } else if ("subjectKeyIdentifier" === p.name && c.cert)
        (h = c.cert.generateSubjectKeyIdentifier()),
          (p.subjectKeyIdentifier = h.toHex()),
          (p.value = b.create(b.Class.UNIVERSAL, b.Type.OCTETSTRING, !1, h.getBytes()));
      else if ("authorityKeyIdentifier" === p.name && c.cert)
        (p.value = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [])),
          (h = p.value.value),
          p.keyIdentifier &&
            ((f = !0 === p.keyIdentifier ? c.cert.generateSubjectKeyIdentifier().getBytes() : p.keyIdentifier),
            h.push(b.create(b.Class.CONTEXT_SPECIFIC, 0, !1, f))),
          p.authorityCertIssuer &&
            ((f = [b.create(b.Class.CONTEXT_SPECIFIC, 4, !0, [E(!0 === p.authorityCertIssuer ? c.cert.issuer : p.authorityCertIssuer)])]),
            h.push(b.create(b.Class.CONTEXT_SPECIFIC, 1, !0, f))),
          p.serialNumber &&
            ((c = a.util.hexToBytes(!0 === p.serialNumber ? c.cert.serialNumber : p.serialNumber)),
            h.push(b.create(b.Class.CONTEXT_SPECIFIC, 2, !1, c)));
      else if ("cRLDistributionPoints" === p.name) {
        p.value = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, []);
        h = p.value.value;
        var r,
          F = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, []),
          M = b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, []);
        for (f = 0; f < p.altNames.length; ++f) {
          c = (r = p.altNames[f]).value;
          if (7 === r.type && r.ip) {
            if (null === (c = a.util.bytesFromIP(r.ip)))
              throw (((R = Error('Extension "ip" value is not a valid IPv4 or IPv6 address.')).extension = p), R);
          } else 8 === r.type && (c = r.oid ? b.oidToDer(b.oidToDer(r.oid)) : b.oidToDer(c));
          M.value.push(b.create(b.Class.CONTEXT_SPECIFIC, r.type, !1, c));
        }
        F.value.push(b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, [M]));
        h.push(F);
      }
      var R;
      if (void 0 === p.value) throw (((R = Error("Extension value not specified.")).extension = p), R);
      return p;
    }
    function d(p, c) {
      switch (p) {
        case q["RSASSA-PSS"]:
          return (
            (p = []),
            void 0 !== c.hash.algorithmOid &&
              p.push(
                b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, [
                  b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
                    b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(c.hash.algorithmOid).getBytes()),
                    b.create(b.Class.UNIVERSAL, b.Type.NULL, !1, "")
                  ])
                ])
              ),
            void 0 !== c.mgf.algorithmOid &&
              p.push(
                b.create(b.Class.CONTEXT_SPECIFIC, 1, !0, [
                  b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
                    b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(c.mgf.algorithmOid).getBytes()),
                    b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
                      b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(c.mgf.hash.algorithmOid).getBytes()),
                      b.create(b.Class.UNIVERSAL, b.Type.NULL, !1, "")
                    ])
                  ])
                ])
              ),
            void 0 !== c.saltLength &&
              p.push(
                b.create(b.Class.CONTEXT_SPECIFIC, 2, !0, [
                  b.create(b.Class.UNIVERSAL, b.Type.INTEGER, !1, b.integerToDer(c.saltLength).getBytes())
                ])
              ),
            b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, p)
          );
        default:
          return b.create(b.Class.UNIVERSAL, b.Type.NULL, !1, "");
      }
    }
    function e(p) {
      return p >= l && p < z
        ? b.create(b.Class.UNIVERSAL, b.Type.UTCTIME, !1, b.dateToUtcTime(p))
        : b.create(b.Class.UNIVERSAL, b.Type.GENERALIZEDTIME, !1, b.dateToGeneralizedTime(p));
    }
    var a = H("./node_modules/node-forge/lib/forge.js");
    H("./node_modules/node-forge/lib/aes.js");
    H("./node_modules/node-forge/lib/asn1.js");
    H("./node_modules/node-forge/lib/des.js");
    H("./node_modules/node-forge/lib/md.js");
    H("./node_modules/node-forge/lib/mgf.js");
    H("./node_modules/node-forge/lib/oids.js");
    H("./node_modules/node-forge/lib/pem.js");
    H("./node_modules/node-forge/lib/pss.js");
    H("./node_modules/node-forge/lib/rsa.js");
    H("./node_modules/node-forge/lib/util.js");
    var b = a.asn1,
      g = (O.exports = a.pki = a.pki || {}),
      q = g.oids,
      D = {};
    D.CN = q.commonName;
    D.commonName = "CN";
    D.C = q.countryName;
    D.countryName = "C";
    D.L = q.localityName;
    D.localityName = "L";
    D.ST = q.stateOrProvinceName;
    D.stateOrProvinceName = "ST";
    D.O = q.organizationName;
    D.organizationName = "O";
    D.OU = q.organizationalUnitName;
    D.organizationalUnitName = "OU";
    D.E = q.emailAddress;
    D.emailAddress = "E";
    O = a.pki.rsa.publicKeyValidator;
    var t = {
        name: "Certificate",
        tagClass: b.Class.UNIVERSAL,
        type: b.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "Certificate.TBSCertificate",
            tagClass: b.Class.UNIVERSAL,
            type: b.Type.SEQUENCE,
            constructed: !0,
            captureAsn1: "tbsCertificate",
            value: [
              {
                name: "Certificate.TBSCertificate.version",
                tagClass: b.Class.CONTEXT_SPECIFIC,
                type: 0,
                constructed: !0,
                optional: !0,
                value: [
                  {
                    name: "Certificate.TBSCertificate.version.integer",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.INTEGER,
                    constructed: !1,
                    capture: "certVersion"
                  }
                ]
              },
              {
                name: "Certificate.TBSCertificate.serialNumber",
                tagClass: b.Class.UNIVERSAL,
                type: b.Type.INTEGER,
                constructed: !1,
                capture: "certSerialNumber"
              },
              {
                name: "Certificate.TBSCertificate.signature",
                tagClass: b.Class.UNIVERSAL,
                type: b.Type.SEQUENCE,
                constructed: !0,
                value: [
                  {
                    name: "Certificate.TBSCertificate.signature.algorithm",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.OID,
                    constructed: !1,
                    capture: "certinfoSignatureOid"
                  },
                  {
                    name: "Certificate.TBSCertificate.signature.parameters",
                    tagClass: b.Class.UNIVERSAL,
                    optional: !0,
                    captureAsn1: "certinfoSignatureParams"
                  }
                ]
              },
              {
                name: "Certificate.TBSCertificate.issuer",
                tagClass: b.Class.UNIVERSAL,
                type: b.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "certIssuer"
              },
              {
                name: "Certificate.TBSCertificate.validity",
                tagClass: b.Class.UNIVERSAL,
                type: b.Type.SEQUENCE,
                constructed: !0,
                value: [
                  {
                    name: "Certificate.TBSCertificate.validity.notBefore (utc)",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.UTCTIME,
                    constructed: !1,
                    optional: !0,
                    capture: "certValidity1UTCTime"
                  },
                  {
                    name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.GENERALIZEDTIME,
                    constructed: !1,
                    optional: !0,
                    capture: "certValidity2GeneralizedTime"
                  },
                  {
                    name: "Certificate.TBSCertificate.validity.notAfter (utc)",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.UTCTIME,
                    constructed: !1,
                    optional: !0,
                    capture: "certValidity3UTCTime"
                  },
                  {
                    name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.GENERALIZEDTIME,
                    constructed: !1,
                    optional: !0,
                    capture: "certValidity4GeneralizedTime"
                  }
                ]
              },
              {
                name: "Certificate.TBSCertificate.subject",
                tagClass: b.Class.UNIVERSAL,
                type: b.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "certSubject"
              },
              O,
              {
                name: "Certificate.TBSCertificate.issuerUniqueID",
                tagClass: b.Class.CONTEXT_SPECIFIC,
                type: 1,
                constructed: !0,
                optional: !0,
                value: [
                  {
                    name: "Certificate.TBSCertificate.issuerUniqueID.id",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.BITSTRING,
                    constructed: !1,
                    captureBitStringValue: "certIssuerUniqueId"
                  }
                ]
              },
              {
                name: "Certificate.TBSCertificate.subjectUniqueID",
                tagClass: b.Class.CONTEXT_SPECIFIC,
                type: 2,
                constructed: !0,
                optional: !0,
                value: [
                  {
                    name: "Certificate.TBSCertificate.subjectUniqueID.id",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.BITSTRING,
                    constructed: !1,
                    captureBitStringValue: "certSubjectUniqueId"
                  }
                ]
              },
              {
                name: "Certificate.TBSCertificate.extensions",
                tagClass: b.Class.CONTEXT_SPECIFIC,
                type: 3,
                constructed: !0,
                captureAsn1: "certExtensions",
                optional: !0
              }
            ]
          },
          {
            name: "Certificate.signatureAlgorithm",
            tagClass: b.Class.UNIVERSAL,
            type: b.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "Certificate.signatureAlgorithm.algorithm",
                tagClass: b.Class.UNIVERSAL,
                type: b.Type.OID,
                constructed: !1,
                capture: "certSignatureOid"
              },
              {
                name: "Certificate.TBSCertificate.signature.parameters",
                tagClass: b.Class.UNIVERSAL,
                optional: !0,
                captureAsn1: "certSignatureParams"
              }
            ]
          },
          {
            name: "Certificate.signatureValue",
            tagClass: b.Class.UNIVERSAL,
            type: b.Type.BITSTRING,
            constructed: !1,
            captureBitStringValue: "certSignature"
          }
        ]
      },
      A = {
        name: "rsapss",
        tagClass: b.Class.UNIVERSAL,
        type: b.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "rsapss.hashAlgorithm",
            tagClass: b.Class.CONTEXT_SPECIFIC,
            type: 0,
            constructed: !0,
            value: [
              {
                name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
                tagClass: b.Class.UNIVERSAL,
                type: b.Class.SEQUENCE,
                constructed: !0,
                optional: !0,
                value: [
                  {
                    name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.OID,
                    constructed: !1,
                    capture: "hashOid"
                  }
                ]
              }
            ]
          },
          {
            name: "rsapss.maskGenAlgorithm",
            tagClass: b.Class.CONTEXT_SPECIFIC,
            type: 1,
            constructed: !0,
            value: [
              {
                name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
                tagClass: b.Class.UNIVERSAL,
                type: b.Class.SEQUENCE,
                constructed: !0,
                optional: !0,
                value: [
                  {
                    name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.OID,
                    constructed: !1,
                    capture: "maskGenOid"
                  },
                  {
                    name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.SEQUENCE,
                    constructed: !0,
                    value: [
                      {
                        name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
                        tagClass: b.Class.UNIVERSAL,
                        type: b.Type.OID,
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
            tagClass: b.Class.CONTEXT_SPECIFIC,
            type: 2,
            optional: !0,
            value: [
              {
                name: "rsapss.saltLength.saltLength",
                tagClass: b.Class.UNIVERSAL,
                type: b.Class.INTEGER,
                constructed: !1,
                capture: "saltLength"
              }
            ]
          },
          {
            name: "rsapss.trailerField",
            tagClass: b.Class.CONTEXT_SPECIFIC,
            type: 3,
            optional: !0,
            value: [
              { name: "rsapss.trailer.trailer", tagClass: b.Class.UNIVERSAL, type: b.Class.INTEGER, constructed: !1, capture: "trailer" }
            ]
          }
        ]
      },
      v = {
        name: "CertificationRequest",
        tagClass: b.Class.UNIVERSAL,
        type: b.Type.SEQUENCE,
        constructed: !0,
        captureAsn1: "csr",
        value: [
          {
            name: "CertificationRequestInfo",
            tagClass: b.Class.UNIVERSAL,
            type: b.Type.SEQUENCE,
            constructed: !0,
            captureAsn1: "certificationRequestInfo",
            value: [
              {
                name: "CertificationRequestInfo.integer",
                tagClass: b.Class.UNIVERSAL,
                type: b.Type.INTEGER,
                constructed: !1,
                capture: "certificationRequestInfoVersion"
              },
              {
                name: "CertificationRequestInfo.subject",
                tagClass: b.Class.UNIVERSAL,
                type: b.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "certificationRequestInfoSubject"
              },
              O,
              {
                name: "CertificationRequestInfo.attributes",
                tagClass: b.Class.CONTEXT_SPECIFIC,
                type: 0,
                constructed: !0,
                optional: !0,
                capture: "certificationRequestInfoAttributes",
                value: [
                  {
                    name: "CertificationRequestInfo.attributes",
                    tagClass: b.Class.UNIVERSAL,
                    type: b.Type.SEQUENCE,
                    constructed: !0,
                    value: [
                      { name: "CertificationRequestInfo.attributes.type", tagClass: b.Class.UNIVERSAL, type: b.Type.OID, constructed: !1 },
                      { name: "CertificationRequestInfo.attributes.value", tagClass: b.Class.UNIVERSAL, type: b.Type.SET, constructed: !0 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: "CertificationRequest.signatureAlgorithm",
            tagClass: b.Class.UNIVERSAL,
            type: b.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "CertificationRequest.signatureAlgorithm.algorithm",
                tagClass: b.Class.UNIVERSAL,
                type: b.Type.OID,
                constructed: !1,
                capture: "csrSignatureOid"
              },
              {
                name: "CertificationRequest.signatureAlgorithm.parameters",
                tagClass: b.Class.UNIVERSAL,
                optional: !0,
                captureAsn1: "csrSignatureParams"
              }
            ]
          },
          {
            name: "CertificationRequest.signature",
            tagClass: b.Class.UNIVERSAL,
            type: b.Type.BITSTRING,
            constructed: !1,
            captureBitStringValue: "csrSignature"
          }
        ]
      };
    g.RDNAttributesAsArray = function (p, c) {
      for (var h, f, r, F = [], M = 0; M < p.value.length; ++M) {
        h = p.value[M];
        for (var R = 0; R < h.value.length; ++R)
          (r = {}),
            (f = h.value[R]),
            (r.type = b.derToOid(f.value[0].value)),
            (r.value = f.value[1].value),
            (r.valueTagClass = f.value[1].type),
            r.type in q && ((r.name = q[r.type]), r.name in D && (r.shortName = D[r.name])),
            c && (c.update(r.type), c.update(r.value)),
            F.push(r);
      }
      return F;
    };
    g.CRIAttributesAsArray = function (p) {
      for (var c = [], h = 0; h < p.length; ++h) {
        var f = p[h],
          r = b.derToOid(f.value[0].value);
        f = f.value[1].value;
        for (var F = 0; F < f.length; ++F) {
          var M = {};
          if (
            ((M.type = r),
            (M.value = f[F].value),
            (M.valueTagClass = f[F].type),
            M.type in q && ((M.name = q[M.type]), M.name in D && (M.shortName = D[M.name])),
            M.type === q.extensionRequest)
          ) {
            M.extensions = [];
            for (var R = 0; R < M.value.length; ++R) M.extensions.push(g.certificateExtensionFromAsn1(M.value[R]));
          }
          c.push(M);
        }
      }
      return c;
    };
    var L = function (p, c, h) {
        var f = {};
        if (p !== q["RSASSA-PSS"]) return f;
        h && (f = { hash: { algorithmOid: q.sha1 }, mgf: { algorithmOid: q.mgf1, hash: { algorithmOid: q.sha1 } }, saltLength: 20 });
        h = {};
        p = [];
        if (!b.validate(c, A, h, p)) throw ((c = Error("Cannot read RSASSA-PSS parameter block.")), (c.errors = p), c);
        return (
          void 0 !== h.hashOid && ((f.hash = f.hash || {}), (f.hash.algorithmOid = b.derToOid(h.hashOid))),
          void 0 !== h.maskGenOid &&
            ((f.mgf = f.mgf || {}),
            (f.mgf.algorithmOid = b.derToOid(h.maskGenOid)),
            (f.mgf.hash = f.mgf.hash || {}),
            (f.mgf.hash.algorithmOid = b.derToOid(h.maskGenHashOid))),
          void 0 !== h.saltLength && (f.saltLength = h.saltLength.charCodeAt(0)),
          f
        );
      },
      K = function (p) {
        switch (q[p.signatureOid]) {
          case "sha1WithRSAEncryption":
          case "sha1WithRSASignature":
            return a.md.sha1.create();
          case "md5WithRSAEncryption":
            return a.md.md5.create();
          case "sha256WithRSAEncryption":
            return a.md.sha256.create();
          case "sha384WithRSAEncryption":
            return a.md.sha384.create();
          case "sha512WithRSAEncryption":
            return a.md.sha512.create();
          case "RSASSA-PSS":
            return a.md.sha256.create();
          default:
            var c = Error("Could not compute " + p.type + " digest. Unknown signature OID.");
            throw ((c.signatureOid = p.signatureOid), c);
        }
      },
      J = function (p) {
        var c = p.certificate;
        switch (c.signatureOid) {
          case q["RSASSA-PSS"]:
            var h, f, r;
            if (void 0 === (h = q[c.signatureParameters.mgf.hash.algorithmOid]) || void 0 === a.md[h])
              throw (((r = Error("Unsupported MGF hash function.")).oid = c.signatureParameters.mgf.hash.algorithmOid), (r.name = h), r);
            if (void 0 === (f = q[c.signatureParameters.mgf.algorithmOid]) || void 0 === a.mgf[f])
              throw (((r = Error("Unsupported MGF function.")).oid = c.signatureParameters.mgf.algorithmOid), (r.name = f), r);
            if (
              ((f = a.mgf[f].create(a.md[h].create())), void 0 === (h = q[c.signatureParameters.hash.algorithmOid]) || void 0 === a.md[h])
            )
              throw (((r = Error("Unsupported RSASSA-PSS hash function.")).oid = c.signatureParameters.hash.algorithmOid), (r.name = h), r);
            var F = a.pss.create(a.md[h].create(), f, c.signatureParameters.saltLength);
        }
        return c.publicKey.verify(p.md.digest().getBytes(), p.signature, F);
      };
    g.certificateFromPem = function (p, c, h) {
      p = a.pem.decode(p)[0];
      if ("CERTIFICATE" !== p.type && "X509 CERTIFICATE" !== p.type && "TRUSTED CERTIFICATE" !== p.type)
        throw (
          ((c = Error(
            'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".'
          )),
          (c.headerType = p.type),
          c)
        );
      if (p.procType && "ENCRYPTED" === p.procType.type) throw Error("Could not convert certificate from PEM; PEM is encrypted.");
      h = b.fromDer(p.body, h);
      return g.certificateFromAsn1(h, c);
    };
    g.certificateToPem = function (p, c) {
      p = { type: "CERTIFICATE", body: b.toDer(g.certificateToAsn1(p)).getBytes() };
      return a.pem.encode(p, { maxline: c });
    };
    g.publicKeyFromPem = function (p) {
      p = a.pem.decode(p)[0];
      if ("PUBLIC KEY" !== p.type && "RSA PUBLIC KEY" !== p.type) {
        var c = Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');
        throw ((c.headerType = p.type), c);
      }
      if (p.procType && "ENCRYPTED" === p.procType.type) throw Error("Could not convert public key from PEM; PEM is encrypted.");
      p = b.fromDer(p.body);
      return g.publicKeyFromAsn1(p);
    };
    g.publicKeyToPem = function (p, c) {
      p = { type: "PUBLIC KEY", body: b.toDer(g.publicKeyToAsn1(p)).getBytes() };
      return a.pem.encode(p, { maxline: c });
    };
    g.publicKeyToRSAPublicKeyPem = function (p, c) {
      p = { type: "RSA PUBLIC KEY", body: b.toDer(g.publicKeyToRSAPublicKey(p)).getBytes() };
      return a.pem.encode(p, { maxline: c });
    };
    g.getPublicKeyFingerprint = function (p, c) {
      var h = (c = c || {}).md || a.md.sha1.create();
      switch (c.type || "RSAPublicKey") {
        case "RSAPublicKey":
          p = b.toDer(g.publicKeyToRSAPublicKey(p)).getBytes();
          break;
        case "SubjectPublicKeyInfo":
          p = b.toDer(g.publicKeyToAsn1(p)).getBytes();
          break;
        default:
          throw Error('Unknown fingerprint type "' + c.type + '".');
      }
      h.start();
      h.update(p);
      h = h.digest();
      if ("hex" === c.encoding) return (h = h.toHex()), c.delimiter ? h.match(/.{2}/g).join(c.delimiter) : h;
      if ("binary" === c.encoding) return h.getBytes();
      if (c.encoding) throw Error('Unknown encoding "' + c.encoding + '".');
      return h;
    };
    g.certificationRequestFromPem = function (p, c, h) {
      p = a.pem.decode(p)[0];
      if ("CERTIFICATE REQUEST" !== p.type)
        throw (
          ((c = Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".')),
          (c.headerType = p.type),
          c)
        );
      if (p.procType && "ENCRYPTED" === p.procType.type) throw Error("Could not convert certification request from PEM; PEM is encrypted.");
      h = b.fromDer(p.body, h);
      return g.certificationRequestFromAsn1(h, c);
    };
    g.certificationRequestToPem = function (p, c) {
      p = { type: "CERTIFICATE REQUEST", body: b.toDer(g.certificationRequestToAsn1(p)).getBytes() };
      return a.pem.encode(p, { maxline: c });
    };
    g.createCertificate = function () {
      var p = { version: 2, serialNumber: "00", signatureOid: null, signature: null, siginfo: {} };
      return (
        (p.siginfo.algorithmOid = null),
        (p.validity = {}),
        (p.validity.notBefore = new Date()),
        (p.validity.notAfter = new Date()),
        (p.issuer = {}),
        (p.issuer.getField = function (c) {
          return n(p.issuer, c);
        }),
        (p.issuer.addField = function (c) {
          C([c]);
          p.issuer.attributes.push(c);
        }),
        (p.issuer.attributes = []),
        (p.issuer.hash = null),
        (p.subject = {}),
        (p.subject.getField = function (c) {
          return n(p.subject, c);
        }),
        (p.subject.addField = function (c) {
          C([c]);
          p.subject.attributes.push(c);
        }),
        (p.subject.attributes = []),
        (p.subject.hash = null),
        (p.extensions = []),
        (p.publicKey = null),
        (p.md = null),
        (p.setSubject = function (c, h) {
          C(c);
          p.subject.attributes = c;
          delete p.subject.uniqueId;
          h && (p.subject.uniqueId = h);
          p.subject.hash = null;
        }),
        (p.setIssuer = function (c, h) {
          C(c);
          p.issuer.attributes = c;
          delete p.issuer.uniqueId;
          h && (p.issuer.uniqueId = h);
          p.issuer.hash = null;
        }),
        (p.setExtensions = function (c) {
          for (var h = 0; h < c.length; ++h) B(c[h], { cert: p });
          p.extensions = c;
        }),
        (p.getExtension = function (c) {
          "string" == typeof c && (c = { name: c });
          for (var h, f = null, r = 0; null === f && r < p.extensions.length; ++r)
            (h = p.extensions[r]), ((c.id && h.id === c.id) || (c.name && h.name === c.name)) && (f = h);
          return f;
        }),
        (p.sign = function (c, h) {
          p.md = h || a.md.sha1.create();
          h = q[p.md.algorithm + "WithRSAEncryption"];
          if (!h)
            throw (
              ((c = Error("Could not compute certificate digest. Unknown message digest algorithm OID.")),
              (c.algorithm = p.md.algorithm),
              c)
            );
          p.signatureOid = p.siginfo.algorithmOid = h;
          p.tbsCertificate = g.getTBSCertificate(p);
          h = b.toDer(p.tbsCertificate);
          p.md.update(h.getBytes());
          p.signature = c.sign(p.md);
        }),
        (p.verify = function (c) {
          var h = !1;
          if (!p.issued(c))
            throw (
              ((c = c.issuer),
              (h = Error(
                "The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject."
              )),
              (h.expectedIssuer = p.subject.attributes),
              (h.actualIssuer = c.attributes),
              h)
            );
          var f = c.md;
          if (null === f) {
            f = K({ signatureOid: c.signatureOid, type: "certificate" });
            var r = c.tbsCertificate || g.getTBSCertificate(c);
            r = b.toDer(r);
            f.update(r.getBytes());
          }
          return null !== f && (h = J({ certificate: p, md: f, signature: c.signature })), h;
        }),
        (p.isIssuer = function (c) {
          var h = !1,
            f = p.issuer;
          c = c.subject;
          if (f.hash && c.hash) h = f.hash === c.hash;
          else if (f.attributes.length === c.attributes.length) {
            h = !0;
            for (var r = 0; h && r < f.attributes.length; ++r) {
              var F = f.attributes[r];
              var M = c.attributes[r];
              (F.type === M.type && F.value === M.value) || (h = !1);
            }
          }
          return h;
        }),
        (p.issued = function (c) {
          return c.isIssuer(p);
        }),
        (p.generateSubjectKeyIdentifier = function () {
          return g.getPublicKeyFingerprint(p.publicKey, { type: "RSAPublicKey" });
        }),
        (p.verifySubjectKeyIdentifier = function () {
          for (var c = q.subjectKeyIdentifier, h = 0; h < p.extensions.length; ++h) {
            var f = p.extensions[h];
            if (f.id === c) return (c = p.generateSubjectKeyIdentifier().getBytes()), a.util.hexToBytes(f.subjectKeyIdentifier) === c;
          }
          return !1;
        }),
        p
      );
    };
    g.certificateFromAsn1 = function (p, c) {
      var h = {},
        f = [];
      if (!b.validate(p, t, h, f))
        throw ((h = Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.")), (h.errors = f), h);
      if (b.derToOid(h.publicKeyOid) !== g.oids.rsaEncryption) throw Error("Cannot read public key. OID is not RSA.");
      var r = g.createCertificate();
      r.version = h.certVersion ? h.certVersion.charCodeAt(0) : 0;
      f = a.util.createBuffer(h.certSerialNumber);
      r.serialNumber = f.toHex();
      r.signatureOid = a.asn1.derToOid(h.certSignatureOid);
      r.signatureParameters = L(r.signatureOid, h.certSignatureParams, !0);
      r.siginfo.algorithmOid = a.asn1.derToOid(h.certinfoSignatureOid);
      r.siginfo.parameters = L(r.siginfo.algorithmOid, h.certinfoSignatureParams, !1);
      r.signature = h.certSignature;
      f = [];
      if (
        (void 0 !== h.certValidity1UTCTime && f.push(b.utcTimeToDate(h.certValidity1UTCTime)),
        void 0 !== h.certValidity2GeneralizedTime && f.push(b.generalizedTimeToDate(h.certValidity2GeneralizedTime)),
        void 0 !== h.certValidity3UTCTime && f.push(b.utcTimeToDate(h.certValidity3UTCTime)),
        void 0 !== h.certValidity4GeneralizedTime && f.push(b.generalizedTimeToDate(h.certValidity4GeneralizedTime)),
        2 < f.length)
      )
        throw Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
      if (2 > f.length)
        throw Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
      if (((r.validity.notBefore = f[0]), (r.validity.notAfter = f[1]), (r.tbsCertificate = h.tbsCertificate), c))
        (r.md = K({ signatureOid: r.signatureOid, type: "certificate" })), (c = b.toDer(r.tbsCertificate)), r.md.update(c.getBytes());
      c = a.md.sha1.create();
      f = b.toDer(h.certIssuer);
      c.update(f.getBytes());
      r.issuer.getField = function (F) {
        return n(r.issuer, F);
      };
      r.issuer.addField = function (F) {
        C([F]);
        r.issuer.attributes.push(F);
      };
      r.issuer.attributes = g.RDNAttributesAsArray(h.certIssuer);
      h.certIssuerUniqueId && (r.issuer.uniqueId = h.certIssuerUniqueId);
      r.issuer.hash = c.digest().toHex();
      c = a.md.sha1.create();
      f = b.toDer(h.certSubject);
      return (
        c.update(f.getBytes()),
        (r.subject.getField = function (F) {
          return n(r.subject, F);
        }),
        (r.subject.addField = function (F) {
          C([F]);
          r.subject.attributes.push(F);
        }),
        (r.subject.attributes = g.RDNAttributesAsArray(h.certSubject)),
        h.certSubjectUniqueId && (r.subject.uniqueId = h.certSubjectUniqueId),
        (r.subject.hash = c.digest().toHex()),
        h.certExtensions ? (r.extensions = g.certificateExtensionsFromAsn1(h.certExtensions)) : (r.extensions = []),
        (r.publicKey = g.publicKeyFromAsn1(h.subjectPublicKeyInfo)),
        r
      );
    };
    g.certificateExtensionsFromAsn1 = function (p) {
      for (var c = [], h = 0; h < p.value.length; ++h)
        for (var f = p.value[h], r = 0; r < f.value.length; ++r) c.push(g.certificateExtensionFromAsn1(f.value[r]));
      return c;
    };
    g.certificateExtensionFromAsn1 = function (p) {
      var c = {};
      if (
        ((c.id = b.derToOid(p.value[0].value)),
        (c.critical = !1),
        p.value[1].type === b.Type.BOOLEAN
          ? ((c.critical = 0 !== p.value[1].value.charCodeAt(0)), (c.value = p.value[2].value))
          : (c.value = p.value[1].value),
        c.id in q)
      )
        if (((c.name = q[c.id]), "keyUsage" === c.name)) {
          var h = 0;
          p = 0;
          1 < (f = b.fromDer(c.value)).value.length && ((h = f.value.charCodeAt(1)), (p = 2 < f.value.length ? f.value.charCodeAt(2) : 0));
          c.digitalSignature = 128 == (128 & h);
          c.nonRepudiation = 64 == (64 & h);
          c.keyEncipherment = 32 == (32 & h);
          c.dataEncipherment = 16 == (16 & h);
          c.keyAgreement = 8 == (8 & h);
          c.keyCertSign = 4 == (4 & h);
          c.cRLSign = 2 == (2 & h);
          c.encipherOnly = 1 == (1 & h);
          c.decipherOnly = 128 == (128 & p);
        } else if ("basicConstraints" === c.name)
          0 < (f = b.fromDer(c.value)).value.length && f.value[0].type === b.Type.BOOLEAN
            ? (c.cA = 0 !== f.value[0].value.charCodeAt(0))
            : (c.cA = !1),
            (h = null),
            0 < f.value.length && f.value[0].type === b.Type.INTEGER
              ? (h = f.value[0].value)
              : 1 < f.value.length && (h = f.value[1].value),
            null !== h && (c.pathLenConstraint = b.derToInteger(h));
        else if ("extKeyUsage" === c.name) {
          var f = b.fromDer(c.value);
          for (h = 0; h < f.value.length; ++h) (p = b.derToOid(f.value[h].value)), p in q ? (c[q[p]] = !0) : (c[p] = !0);
        } else if ("nsCertType" === c.name)
          (h = 0),
            1 < (f = b.fromDer(c.value)).value.length && (h = f.value.charCodeAt(1)),
            (c.client = 128 == (128 & h)),
            (c.server = 64 == (64 & h)),
            (c.email = 32 == (32 & h)),
            (c.objsign = 16 == (16 & h)),
            (c.reserved = 8 == (8 & h)),
            (c.sslCA = 4 == (4 & h)),
            (c.emailCA = 2 == (2 & h)),
            (c.objCA = 1 == (1 & h));
        else if ("subjectAltName" === c.name || "issuerAltName" === c.name)
          for (c.altNames = [], f = b.fromDer(c.value), p = 0; p < f.value.length; ++p) {
            var r = { type: (h = f.value[p]).type, value: h.value };
            switch ((c.altNames.push(r), h.type)) {
              case 7:
                r.ip = a.util.bytesToIP(h.value);
                break;
              case 8:
                r.oid = b.derToOid(h.value);
            }
          }
        else "subjectKeyIdentifier" === c.name && ((f = b.fromDer(c.value)), (c.subjectKeyIdentifier = a.util.bytesToHex(f.value)));
      return c;
    };
    g.certificationRequestFromAsn1 = function (p, c) {
      var h = {},
        f = [];
      if (!b.validate(p, v, h, f))
        throw (
          ((h = Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.")), (h.errors = f), h)
        );
      if (b.derToOid(h.publicKeyOid) !== g.oids.rsaEncryption) throw Error("Cannot read public key. OID is not RSA.");
      var r = g.createCertificationRequest();
      if (
        ((r.version = h.csrVersion ? h.csrVersion.charCodeAt(0) : 0),
        (r.signatureOid = a.asn1.derToOid(h.csrSignatureOid)),
        (r.signatureParameters = L(r.signatureOid, h.csrSignatureParams, !0)),
        (r.siginfo.algorithmOid = a.asn1.derToOid(h.csrSignatureOid)),
        (r.siginfo.parameters = L(r.siginfo.algorithmOid, h.csrSignatureParams, !1)),
        (r.signature = h.csrSignature),
        (r.certificationRequestInfo = h.certificationRequestInfo),
        c)
      )
        (r.md = K({ signatureOid: r.signatureOid, type: "certification request" })),
          (f = b.toDer(r.certificationRequestInfo)),
          r.md.update(f.getBytes());
      f = a.md.sha1.create();
      return (
        (r.subject.getField = function (F) {
          return n(r.subject, F);
        }),
        (r.subject.addField = function (F) {
          C([F]);
          r.subject.attributes.push(F);
        }),
        (r.subject.attributes = g.RDNAttributesAsArray(h.certificationRequestInfoSubject, f)),
        (r.subject.hash = f.digest().toHex()),
        (r.publicKey = g.publicKeyFromAsn1(h.subjectPublicKeyInfo)),
        (r.getAttribute = function (F) {
          return n(r, F);
        }),
        (r.addAttribute = function (F) {
          C([F]);
          r.attributes.push(F);
        }),
        (r.attributes = g.CRIAttributesAsArray(h.certificationRequestInfoAttributes || [])),
        r
      );
    };
    g.createCertificationRequest = function () {
      var p = { version: 0, signatureOid: null, signature: null, siginfo: {} };
      return (
        (p.siginfo.algorithmOid = null),
        (p.subject = {}),
        (p.subject.getField = function (c) {
          return n(p.subject, c);
        }),
        (p.subject.addField = function (c) {
          C([c]);
          p.subject.attributes.push(c);
        }),
        (p.subject.attributes = []),
        (p.subject.hash = null),
        (p.publicKey = null),
        (p.attributes = []),
        (p.getAttribute = function (c) {
          return n(p, c);
        }),
        (p.addAttribute = function (c) {
          C([c]);
          p.attributes.push(c);
        }),
        (p.md = null),
        (p.setSubject = function (c) {
          C(c);
          p.subject.attributes = c;
          p.subject.hash = null;
        }),
        (p.setAttributes = function (c) {
          C(c);
          p.attributes = c;
        }),
        (p.sign = function (c, h) {
          p.md = h || a.md.sha1.create();
          h = q[p.md.algorithm + "WithRSAEncryption"];
          if (!h)
            throw (
              ((c = Error("Could not compute certification request digest. Unknown message digest algorithm OID.")),
              (c.algorithm = p.md.algorithm),
              c)
            );
          p.signatureOid = p.siginfo.algorithmOid = h;
          p.certificationRequestInfo = g.getCertificationRequestInfo(p);
          h = b.toDer(p.certificationRequestInfo);
          p.md.update(h.getBytes());
          p.signature = c.sign(p.md);
        }),
        (p.verify = function () {
          var c = !1,
            h = p.md;
          if (null === h) {
            h = K({ signatureOid: p.signatureOid, type: "certification request" });
            var f = p.certificationRequestInfo || g.getCertificationRequestInfo(p);
            f = b.toDer(f);
            h.update(f.getBytes());
          }
          return null !== h && (c = J({ certificate: p, md: h, signature: p.signature })), c;
        }),
        p
      );
    };
    var l = new Date("1950-01-01T00:00:00Z"),
      z = new Date("2050-01-01T00:00:00Z");
    g.getTBSCertificate = function (p) {
      var c = e(p.validity.notBefore),
        h = e(p.validity.notAfter);
      c = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
        b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, [b.create(b.Class.UNIVERSAL, b.Type.INTEGER, !1, b.integerToDer(p.version).getBytes())]),
        b.create(b.Class.UNIVERSAL, b.Type.INTEGER, !1, a.util.hexToBytes(p.serialNumber)),
        b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
          b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(p.siginfo.algorithmOid).getBytes()),
          d(p.siginfo.algorithmOid, p.siginfo.parameters)
        ]),
        E(p.issuer),
        b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [c, h]),
        E(p.subject),
        g.publicKeyToAsn1(p.publicKey)
      ]);
      return (
        p.issuer.uniqueId &&
          c.value.push(
            b.create(b.Class.CONTEXT_SPECIFIC, 1, !0, [
              b.create(b.Class.UNIVERSAL, b.Type.BITSTRING, !1, String.fromCharCode(0) + p.issuer.uniqueId)
            ])
          ),
        p.subject.uniqueId &&
          c.value.push(
            b.create(b.Class.CONTEXT_SPECIFIC, 2, !0, [
              b.create(b.Class.UNIVERSAL, b.Type.BITSTRING, !1, String.fromCharCode(0) + p.subject.uniqueId)
            ])
          ),
        0 < p.extensions.length && c.value.push(g.certificateExtensionsToAsn1(p.extensions)),
        c
      );
    };
    g.getCertificationRequestInfo = function (p) {
      var c = b,
        h = c.create,
        f = b.Class.UNIVERSAL,
        r = b.Type.SEQUENCE,
        F = b.create(b.Class.UNIVERSAL, b.Type.INTEGER, !1, b.integerToDer(p.version).getBytes()),
        M = E(p.subject),
        R = g.publicKeyToAsn1(p.publicKey);
      var m = b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, []);
      if (0 !== p.attributes.length) {
        p = p.attributes;
        for (var u = 0; u < p.length; ++u) {
          var I = p[u],
            k = I.value,
            y = b.Type.UTF8;
          "valueTagClass" in I && (y = I.valueTagClass);
          y === b.Type.UTF8 && (k = a.util.encodeUtf8(k));
          var G = !1;
          "valueConstructed" in I && (G = I.valueConstructed);
          I = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
            b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(I.type).getBytes()),
            b.create(b.Class.UNIVERSAL, b.Type.SET, !0, [b.create(b.Class.UNIVERSAL, y, G, k)])
          ]);
          m.value.push(I);
        }
      }
      return h.call(c, f, r, !0, [F, M, R, m]);
    };
    g.distinguishedNameToAsn1 = function (p) {
      return E(p);
    };
    g.certificateToAsn1 = function (p) {
      var c = p.tbsCertificate || g.getTBSCertificate(p);
      return b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
        c,
        b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
          b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(p.signatureOid).getBytes()),
          d(p.signatureOid, p.signatureParameters)
        ]),
        b.create(b.Class.UNIVERSAL, b.Type.BITSTRING, !1, String.fromCharCode(0) + p.signature)
      ]);
    };
    g.certificateExtensionsToAsn1 = function (p) {
      var c = b.create(b.Class.CONTEXT_SPECIFIC, 3, !0, []),
        h = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, []);
      c.value.push(h);
      for (var f = 0; f < p.length; ++f) h.value.push(g.certificateExtensionToAsn1(p[f]));
      return c;
    };
    g.certificateExtensionToAsn1 = function (p) {
      var c = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, []);
      c.value.push(b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(p.id).getBytes()));
      p.critical && c.value.push(b.create(b.Class.UNIVERSAL, b.Type.BOOLEAN, !1, String.fromCharCode(255)));
      var h = p.value;
      return (
        "string" != typeof p.value && (h = b.toDer(h).getBytes()), c.value.push(b.create(b.Class.UNIVERSAL, b.Type.OCTETSTRING, !1, h)), c
      );
    };
    g.certificationRequestToAsn1 = function (p) {
      var c = p.certificationRequestInfo || g.getCertificationRequestInfo(p);
      return b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
        c,
        b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [
          b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(p.signatureOid).getBytes()),
          d(p.signatureOid, p.signatureParameters)
        ]),
        b.create(b.Class.UNIVERSAL, b.Type.BITSTRING, !1, String.fromCharCode(0) + p.signature)
      ]);
    };
    g.createCaStore = function (p) {
      function c(F) {
        return h(F), f.certs[F.hash] || null;
      }
      function h(F) {
        if (!F.hash) {
          var M = a.md.sha1.create();
          F.attributes = g.RDNAttributesAsArray(E(F), M);
          F.hash = M.digest().toHex();
        }
      }
      var f = { certs: {} };
      if (
        ((f.getIssuer = function (F) {
          return c(F.issuer);
        }),
        (f.addCertificate = function (F) {
          if (("string" == typeof F && (F = a.pki.certificateFromPem(F)), h(F.subject), !f.hasCertificate(F)))
            if (F.subject.hash in f.certs) {
              var M = f.certs[F.subject.hash];
              a.util.isArray(M) || (M = [M]);
              M.push(F);
              f.certs[F.subject.hash] = M;
            } else f.certs[F.subject.hash] = F;
        }),
        (f.hasCertificate = function (F) {
          "string" == typeof F && (F = a.pki.certificateFromPem(F));
          var M = c(F.subject);
          if (!M) return !1;
          a.util.isArray(M) || (M = [M]);
          F = b.toDer(g.certificateToAsn1(F)).getBytes();
          for (var R = 0; R < M.length; ++R) if (F === b.toDer(g.certificateToAsn1(M[R])).getBytes()) return !0;
          return !1;
        }),
        (f.listAllCertificates = function () {
          var F = [],
            M;
          for (M in f.certs)
            if (f.certs.hasOwnProperty(M)) {
              var R = f.certs[M];
              if (a.util.isArray(R)) for (var m = 0; m < R.length; ++m) F.push(R[m]);
              else F.push(R);
            }
          return F;
        }),
        (f.removeCertificate = function (F) {
          var M;
          if (("string" == typeof F && (F = a.pki.certificateFromPem(F)), h(F.subject), !f.hasCertificate(F))) return null;
          var R = c(F.subject);
          if (!a.util.isArray(R)) return (M = f.certs[F.subject.hash]), delete f.certs[F.subject.hash], M;
          for (var m = b.toDer(g.certificateToAsn1(F)).getBytes(), u = 0; u < R.length; ++u)
            m === b.toDer(g.certificateToAsn1(R[u])).getBytes() && ((M = R[u]), R.splice(u, 1));
          return 0 === R.length && delete f.certs[F.subject.hash], M;
        }),
        p)
      )
        for (var r = 0; r < p.length; ++r) f.addCertificate(p[r]);
      return f;
    };
    g.certificateError = {
      bad_certificate: "forge.pki.BadCertificate",
      unsupported_certificate: "forge.pki.UnsupportedCertificate",
      certificate_revoked: "forge.pki.CertificateRevoked",
      certificate_expired: "forge.pki.CertificateExpired",
      certificate_unknown: "forge.pki.CertificateUnknown",
      unknown_ca: "forge.pki.UnknownCertificateAuthority"
    };
    g.verifyCertificateChain = function (p, c, h) {
      "function" == typeof h && (h = { verify: h });
      h = h || {};
      var f = (c = c.slice(0)).slice(0),
        r = h.validityCheckDate;
      void 0 === r && (r = new Date());
      var F = !0,
        M = null,
        R = 0;
      do {
        var m = c.shift(),
          u = null,
          I = !1;
        if (
          (r &&
            (r < m.validity.notBefore || r > m.validity.notAfter) &&
            (M = {
              message: "Certificate is not valid yet or has expired.",
              error: g.certificateError.certificate_expired,
              notBefore: m.validity.notBefore,
              notAfter: m.validity.notAfter,
              now: r
            }),
          null === M)
        ) {
          if ((null === (u = c[0] || p.getIssuer(m)) && m.isIssuer(m) && ((I = !0), (u = m)), u)) {
            var k = u;
            a.util.isArray(k) || (k = [k]);
            for (var y = !1; !y && 0 < k.length; ) {
              u = k.shift();
              try {
                y = u.verify(m);
              } catch (N) {}
            }
            y || (M = { message: "Certificate signature is invalid.", error: g.certificateError.bad_certificate });
          }
          null !== M ||
            (u && !I) ||
            p.hasCertificate(m) ||
            (M = { message: "Certificate is not trusted.", error: g.certificateError.unknown_ca });
        }
        if (
          (null === M &&
            u &&
            !m.isIssuer(u) &&
            (M = { message: "Certificate issuer is invalid.", error: g.certificateError.bad_certificate }),
          null === M)
        )
          for (k = { keyUsage: !0, basicConstraints: !0 }, y = 0; null === M && y < m.extensions.length; ++y) {
            var G = m.extensions[y];
            !G.critical ||
              G.name in k ||
              (M = { message: "Certificate has an unsupported critical extension.", error: g.certificateError.unsupported_certificate });
          }
        null !== M ||
          (F && (0 !== c.length || (u && !I))) ||
          ((F = m.getExtension("basicConstraints")),
          (m = m.getExtension("keyUsage")),
          (null !== m &&
            ((m.keyCertSign && null !== F) ||
              (M = {
                message:
                  "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
                error: g.certificateError.bad_certificate
              })),
          null !== M ||
            null === F ||
            F.cA ||
            (M = {
              message: "Certificate basicConstraints indicates the certificate is not a CA.",
              error: g.certificateError.bad_certificate
            }),
          null === M && null !== m && "pathLenConstraint" in F) &&
            R - 1 > F.pathLenConstraint &&
            (M = { message: "Certificate basicConstraints pathLenConstraint violated.", error: g.certificateError.bad_certificate }));
        m = null === M || M.error;
        F = h.verify ? h.verify(m, R, f) : m;
        if (!0 !== F)
          throw (
            (!0 === m && (M = { message: "The application rejected the certificate.", error: g.certificateError.bad_certificate }),
            (F || 0 === F) &&
              ("object" != typeof F || a.util.isArray(F)
                ? "string" == typeof F && (M.error = F)
                : (F.message && (M.message = F.message), F.error && (M.error = F.error))),
            M)
          );
        M = null;
        F = !1;
        ++R;
      } while (0 < c.length);
      return !0;
    };
  },
  "./node_modules/process/browser.js": function (O, w) {
    function H() {
      throw Error("setTimeout has not been defined");
    }
    function n() {
      throw Error("clearTimeout has not been defined");
    }
    function E(A) {
      if (a === setTimeout) return setTimeout(A, 0);
      if ((a === H || !a) && setTimeout) return (a = setTimeout), setTimeout(A, 0);
      try {
        return a(A, 0);
      } catch (v) {
        try {
          return a.call(null, A, 0);
        } catch (L) {
          return a.call(this, A, 0);
        }
      }
    }
    function C() {
      D && g && ((D = !1), g.length ? (q = g.concat(q)) : (t = -1), q.length && B());
    }
    function B() {
      if (!D) {
        var A = E(C);
        D = !0;
        for (var v = q.length; v; ) {
          g = q;
          for (q = []; ++t < v; ) g && g[t].run();
          t = -1;
          v = q.length;
        }
        g = null;
        D = !1;
        (function (L) {
          if (b === clearTimeout) return clearTimeout(L);
          if ((b === n || !b) && clearTimeout) return (b = clearTimeout), clearTimeout(L);
          try {
            b(L);
          } catch (K) {
            try {
              return b.call(null, L);
            } catch (J) {
              return b.call(this, L);
            }
          }
        })(A);
      }
    }
    function d(A, v) {
      this.fun = A;
      this.array = v;
    }
    function e() {}
    O = O.exports = {};
    try {
      var a = "function" == typeof setTimeout ? setTimeout : H;
    } catch (A) {
      a = H;
    }
    try {
      var b = "function" == typeof clearTimeout ? clearTimeout : n;
    } catch (A) {
      b = n;
    }
    !0;
    var g,
      q = [],
      D = !1,
      t = -1;
    O.nextTick = function (A) {
      var v = Array(arguments.length - 1);
      if (1 < arguments.length) for (var L = 1; L < arguments.length; L++) v[L - 1] = arguments[L];
      q.push(new d(A, v));
      1 !== q.length || D || E(B);
    };
    d.prototype.run = function () {
      this.fun.apply(null, this.array);
    };
    O.title = "browser";
    O.browser = !0;
    O.env = {};
    O.argv = [];
    O.version = "";
    O.versions = {};
    O.on = e;
    O.addListener = e;
    O.once = e;
    O.off = e;
    O.removeListener = e;
    O.removeAllListeners = e;
    O.emit = e;
    O.prependListener = e;
    O.prependOnceListener = e;
    O.listeners = function (A) {
      return [];
    };
    O.binding = function (A) {
      throw Error("process.binding is not supported");
    };
    O.cwd = function () {
      return "/";
    };
    O.chdir = function (A) {
      throw Error("process.chdir is not supported");
    };
    O.umask = function () {
      return 0;
    };
  },
  "./node_modules/setimmediate/setImmediate.js": function (O, w, H) {
    (function (n, E) {
      !(function (C, B) {
        function d(K) {
          delete A[K];
        }
        function e(K) {
          if (v) setTimeout(e, 0, K);
          else {
            var J = A[K];
            if (J) {
              v = !0;
              try {
                var l = J.callback,
                  z = J.args;
                switch (z.length) {
                  case 0:
                    l();
                    break;
                  case 1:
                    l(z[0]);
                    break;
                  case 2:
                    l(z[0], z[1]);
                    break;
                  case 3:
                    l(z[0], z[1], z[2]);
                    break;
                  default:
                    l.apply(void 0, z);
                }
                !0;
              } finally {
                d(K), (v = !1);
              }
            }
          }
        }
        if (!C.setImmediate) {
          var a,
            b,
            g,
            q,
            D,
            t = 1,
            A = {},
            v = !1,
            L = C.document;
          B = (B = Object.getPrototypeOf && Object.getPrototypeOf(C)) && B.setTimeout ? B : C;
          "[object process]" === {}.toString.call(C.process)
            ? (a = function (K) {
                E.nextTick(function () {
                  e(K);
                });
              })
            : (function () {
                if (C.postMessage && !C.importScripts) {
                  var K = !0,
                    J = C.onmessage;
                  return (
                    (C.onmessage = function () {
                      K = !1;
                    }),
                    C.postMessage("", "*"),
                    (C.onmessage = J),
                    K
                  );
                }
              })()
            ? ((q = "setImmediate$" + Math.random() + "$"),
              (D = function (K) {
                K.source === C && "string" == typeof K.data && 0 === K.data.indexOf(q) && e(+K.data.slice(q.length));
              }),
              C.addEventListener ? C.addEventListener("message", D, !1) : C.attachEvent("onmessage", D),
              (a = function (K) {
                C.postMessage(q + K, "*");
              }))
            : C.MessageChannel
            ? (((g = new MessageChannel()).port1.onmessage = function (K) {
                e(K.data);
              }),
              (a = function (K) {
                g.port2.postMessage(K);
              }))
            : L && "onreadystatechange" in L.createElement("script")
            ? ((b = L.documentElement),
              (a = function (K) {
                var J = L.createElement("script");
                J.onreadystatechange = function () {
                  e(K);
                  J.onreadystatechange = null;
                  b.removeChild(J);
                  J = null;
                };
                b.appendChild(J);
              }))
            : (a = function (K) {
                setTimeout(e, 0, K);
              });
          B.setImmediate = function (K) {
            "function" != typeof K && (K = new Function("" + K));
            for (var J = Array(arguments.length - 1), l = 0; l < J.length; l++) J[l] = arguments[l + 1];
            return (A[t] = { callback: K, args: J }), a(t), t++;
          };
          B.clearImmediate = d;
        }
      })("undefined" == typeof self ? (void 0 === n ? this : n) : self);
    }).call(this, H("./node_modules/webpack/buildin/global.js"), H("./node_modules/process/browser.js"));
  },
  "./node_modules/timers-browserify/main.js": function (O, w, H) {
    (function (n) {
      function E(d, e) {
        this._id = d;
        this._clearFn = e;
      }
      var C = (void 0 !== n && n) || ("undefined" != typeof self && self) || window,
        B = Function.prototype.apply;
      w.setTimeout = function () {
        return new E(B.call(setTimeout, C, arguments), clearTimeout);
      };
      w.setInterval = function () {
        return new E(B.call(setInterval, C, arguments), clearInterval);
      };
      w.clearTimeout = w.clearInterval = function (d) {
        d && d.close();
      };
      E.prototype.unref = E.prototype.ref = function () {};
      E.prototype.close = function () {
        this._clearFn.call(C, this._id);
      };
      w.enroll = function (d, e) {
        clearTimeout(d._idleTimeoutId);
        d._idleTimeout = e;
      };
      w.unenroll = function (d) {
        clearTimeout(d._idleTimeoutId);
        d._idleTimeout = -1;
      };
      w._unrefActive = w.active = function (d) {
        clearTimeout(d._idleTimeoutId);
        var e = d._idleTimeout;
        0 <= e &&
          (d._idleTimeoutId = setTimeout(function () {
            d._onTimeout && d._onTimeout();
          }, e));
      };
      H("./node_modules/setimmediate/setImmediate.js");
      w.setImmediate = ("undefined" != typeof self && self.setImmediate) || (void 0 !== n && n.setImmediate) || (this && this.setImmediate);
      w.clearImmediate =
        ("undefined" != typeof self && self.clearImmediate) || (void 0 !== n && n.clearImmediate) || (this && this.clearImmediate);
    }).call(this, H("./node_modules/webpack/buildin/global.js"));
  },
  "./node_modules/webpack/buildin/global.js": function (O, w) {
    w = (function () {
      return this;
    })();
    try {
      w = w || new Function("return this")();
    } catch (H) {
      "object" == typeof window && (w = window);
    }
    O.exports = w;
  },
  "./source/Worker/VTWorker.js": function (O, w, H) {
    H.r(w);
    var n = H("./node_modules/node-forge/lib/index.js"),
      E = {
        DEFAULT_APPID_NODE: "/32",
        get DEFAULT_RECOVERY_NODE() {
          return this.RECOVERY_33;
        },
        get DEFAULT_APPID_IDSC_NODE() {
          return this.DEFAULT_APPID_NODE + "/IDSC";
        },
        get DEFAULT_RECOVERY_IDSC_NODE() {
          return this.DEFAULT_RECOVERY_NODE + "/IDSC-RK";
        },
        get DEFAULT_LOGIN_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/1";
        },
        get DEFAULT_IDENTITY_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/2";
        },
        get DEFAULT_ADDRESS_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/3";
        },
        get DEFAULT_CREDIT_CARD_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/4";
        },
        get DEFAULT_NOTE_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/6";
        },
        get DEFAULT_BANK_ACCOUNT_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/13";
        },
        get DEFAULT_ASSOCIATED_URL_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/16";
        },
        get DEFAULT_LOGIN_HISTORY_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/17";
        },
        get DEFAULT_AUTHENTICATOR_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/18";
        },
        get DEFAULT_FILE_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/19";
        },
        get DEFAULT_DELETED_UNKNOWN_BREACH_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/20";
        },
        get DEFAULT_PASSWORD_BREACHES_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/21";
        },
        get DEFAULT_LOGIN_IGNORED_BREACHES_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/22";
        },
        get DEFAULT_TAG_NODE() {
          return this.DEFAULT_APPID_IDSC_NODE + "/15";
        },
        DEFAULT_IDSC_PATH_CRC: "/SPS/User",
        SERIALIZE_DATA_TYPE: { BINARY: 0, BOOL: 1, UINT32: 2, STRING: 3, LONG: 4 },
        BANK_ACCOUNTS: {
          OWNERNAME: "100",
          ROUTINGNUMBER: "101",
          ACCOUNTNUMBER: "102",
          ACCOUNTNAME: "2000",
          SECURE: "2001",
          BANKNAME: "2002",
          SWIFT_CODE: "5029",
          IBAN: "5030"
        },
        IDENTITY: {
          FIRSTNAME: "100",
          MIDDLENAME: "101",
          LASTNAME: "102",
          LASTNAME2: "103",
          FIRSTNAME_ALPHABET: "104",
          LASTNAME_ALPHABET: "105",
          FIRSTNAME_ROMAN: "106",
          LASTNAME_ROMAN: "107",
          DOB_DAY: "108",
          DOB_MONTH: "109",
          DOB_YEAR: "110",
          EMAIL: "111",
          PHONE_WORK: "112",
          PHONE_HOME: "113",
          PHONE_MOBILE: "114",
          SALUTATION: "118",
          PHONE_EXTENSION: "120",
          CARDNAME: "2000",
          SECURE: "2001",
          GENDER: "2002",
          CREDITCARD_GUID: "4000",
          ADDRESS_GUID: "4001",
          COUNTRY_REGION: "4002"
        },
        CREDIT_CARDS: {
          CARD_TYPE: "100",
          CARD_NUMBER: "101",
          NAME_ON_CARD: "102",
          CVC: "103",
          CVC_V1: "5031",
          EXPIRATION_MONTH: "104",
          EXPIRATION_YEAR: "105",
          START_DAY: "106",
          START_MONTH: "107",
          START_YEAR: "108",
          ISSUE_NUMBER: "109",
          SECURE: "2000",
          CARD_NAME: "2001",
          COUNTRY_REGION: "4000",
          IDENTITY_CARD: "4001",
          CARD_COMMENTS: "110",
          BANK_NAME: "bankName",
          CARD_PIN: "5030",
          CREATED_AT: "createdAt",
          LAST_USED_AT: "lastUsedAt",
          DEFAULT_SORT_KEY: "2001"
        },
        ASSOCIATED_URL: {
          ASSOCIATED_LOGIN_ID: "associatedLoginId",
          ASSOCIATED_DOMAIN: "associatedDomain",
          LOGIN_URL: "loginUrl",
          VISIBLE: "visible",
          LAST_USED_AT: "lastUsedAt"
        },
        LOGIN_HISTORY: {
          ASSOCIATED_LOGIN_ID: "associatedLoginId",
          EMAIL: "email",
          USERNAME: "username",
          PASSWORD: "password",
          CREATED_AT: "createdAt"
        },
        AUTHENTICATOR: { SERVICE: "service", USERNAME: "username", KEY: "key", CREATED_AT: "createdAt", LAST_USED_AT: "lastUsedAt" },
        FILE: {
          NAME: "name",
          TYPE: "type",
          ASSOCIATED_ENTITY_ID: "associatedEntityId",
          ENTITY_TYPE: "entityType",
          CREATED_AT: "createdAt",
          LAST_USED_AT: "lastUsedAt"
        },
        DELETED_UNKNOWN_BREACH: { BREACH_KEY: "breachKey", CREATED_AT: "createdAt", LAST_USED_AT: "lastUsedAt" },
        PASSWORD_BREACHES: {
          PASSWORD: "password",
          TYPE: "type",
          DOMAIN: "domain",
          BREACH_ID: "breachId",
          DATE: "date",
          CREATED_AT: "createdAt",
          LAST_USED_AT: "lastUsedAt"
        },
        LOGIN_IGNORED_BREACHES: {
          ASSOCIATED_LOGIN_ID: "associatedLoginId",
          BREACH_ID: "breachId",
          BREACH_IGNORE_TYPE: "breachIgnoreType",
          CREATED_AT: "createdAt",
          LAST_USED_AT: "lastUsedAt"
        },
        DEFAULT_NODE_ID: "0",
        DEFAULT_LASTUPDATE: "1",
        DEFAULT_FAVORITE: "3",
        DEFAULT_DERIVED_AES_KEY_SIZE: 32,
        STARTING_CHECKSUM: 1130461520,
        DEFAULT_CHALLENGE_SALT_SIZE: 256,
        DEFAULT_AES_INIT_VECTOR_SIZE: 16,
        DEFAULT_SHA_DIGEST: 32,
        DEFAULT_HMAC_SIZE: 23,
        DEFAULT_SHA1_DIGEST: 20,
        DEFAULT_HMAC_SHA_ALGORITHM: "sha256",
        APPID_11: "/11",
        APPID_32: "/32",
        RECOVERY_33: "/33",
        DEFAULT_SHA1: "sha1",
        DEFAULT_OBFUSCATION_KEY_SIZE: 128,
        ITEM_INTERNAL_CONTEXT: "internal",
        GET_DERIVED_KEY: "985fe59f-a8ba-459d-a01b-c9c1889338cc",
        LOCAL_VERIFY_VAULT_PASSWORD_ITERATION_COUNT: 5e3,
        DEFAULT_CHALLENGE_ITERATION_COUNT: 2e4,
        DEFAULT_VAULT_PBDK_SALT: "{E2DDC45B-1125-498d-9D8A-A16EF91E6BA2}",
        DEFAULT_CRC_SIZE: 4,
        DEFAULT_PROFILE_ID: "0",
        DEFAULT_LOGIN_ID: "1",
        DEFAULT_VAULT_VERSION: "Version",
        DEFAULT_CHALLENGE_IV: "challengeIV",
        DEFAULT_PASSWORD_HINT: "{8CFB92F1-A13C-41b6-95D3-8C08390160C9}",
        DEFAULT_CRYPTO_ALGORITHM: "{791EB356-C2C2-4668-8A71-7F2F01F3CF6D}",
        DEFAULT_PBKDF2_MD: "sha256",
        PBKDF2: "pbkdf2",
        DEFAULT_CHALLENGE_SALT: "challengeSalt",
        GET_DERIVED_KEY_RESPONSE: "2d4e43f1-40a2-4387-8806-03ccaf277fc4",
        DEFAULT_VAULT_ENCRYPTION_KEY: "{204DC88E-7D86-4565-AE26-889634D5DC34}",
        DEFAULT_VAULT_OBFUSCATION_KEY: "{D835F5EF-C3E4-4e46-90D2-32BF15B925F0}",
        DEFAULT_RECOVERY_SOURCE_TYPE: "2",
        DEFAULT_RECOVERY_SOURCE_ID: "3",
        DEFAULT_RECOVERY_VAULT_VERSION: "Version",
        DEFAULT_RECOVERY_CHALLENGE_SALT: "challengeSalt",
        DEFAULT_RECOVERY_CHALLENGE_IV: "challengeIV",
        DEFAULT_RECOVERY_CRYPTO_ALGORITHM: "{791EB356-C2C2-4668-8A71-7F2F01F3CF6D}",
        DEFAULT_RECOVERY_RANDOM_KEY: "{B70D49F7-409E-4EC5-83D0-BA53209EAE86}",
        DEFAULT_RECOVERY_PDK_SALT: "{E2DDC45B-1125-498d-9D8A-A16EF91E6BA2}",
        DEFAULT_RECOVERY_VAULT_CHALLENGE_PRIVATE_KEY: "{5AE43CF8-2B01-4BEB-95BE-B5798EFAB9D5}",
        DEFAULT_RECOVERY_VAULT_DERIVED_KEY: "{A639CAA0-7B9D-428E-A4F6-1C7C823CC1B3}",
        DEFAULT_USERNAME: "100",
        DEFAULT_PASSWORD: "101",
        DEFAULT_LOGIN_NOTES: "102",
        DEFAULT_LOGIN_URL: "2000",
        DEFAULT_DOMAIN: "domain",
        DEFAULT_LEGACY_EMAIL: "legacyEmail",
        DEFAULT_FORM_HOST: "formHost",
        DEFAULT_PAGE_HOST: "pageHost",
        DEFAULT_PROTOCOL: "protocol",
        DEFAULT_CREATED_AT: "createdAt",
        DEFAULT_LAST_USED_AT: "lastUsedAt",
        DEFAULT_PWD_AUTO_GENERATED: "passwordAutoGenerated",
        DEFAULT_IS_DEMO_ACCOUNT: "isDemoAccount",
        DEFAULT_IGNORE_AUC: "ignoreAUC",
        DEFAULT_IGNORE_HIBP_BREACHED_PWD: "ignoreHibpBreachedPassword",
        DEFAULT_IGNORE_INSECURE_PROTOCOL: "ignoreInsecureProtocol",
        DEFAULT_IGNORE_PWD_STRENGTH: "ignorePasswordStrength",
        DEFAULT_IGNORE_REUSED: "ignoreReused",
        DEFAULT_ASSOCIATED_AUTH_ID: "associatedAuthenticatorId",
        DEFAULT_PASSWORD_TIMESTAMP: "passwordTimestamp",
        DEFAULT_SECURE: "2001",
        DEFAULT_FAV_ICON_URL: "2002",
        DEFAULT_SITE_NAME: "2003",
        DEFAULT_SIGN_ON_DESTINATION: "2004",
        DEFAULT_CRED_0: "3000",
        DEFAULT_CRED_1: "3001",
        DEFAULT_CRED_2: "3002",
        DEFAULT_FOLDER: "4000",
        DEFAULT_AUTO_FILL: "4001",
        DEFAULT_AUTO_SUBMIT: "4002",
        DEFAULT_PROMINENT_COLOR: "4003",
        DEFAULT_TAG_NAME: "2000",
        DEFAULT_TAG_ID: "2",
        DEFAULT_TAG_ITEM: "2",
        NOTE: {
          TITLE: "100",
          INFORMATION: "101",
          SECURE: "2000",
          TITLE_PROPERTY_NAME: "title",
          INFORMATION_PROPERTY_NAME: "information",
          COLOR: "color",
          CREATED_AT: "createdAt",
          LAST_USED_AT: "lastUsedAt"
        },
        TAG_NODE: { LOGIN: "1", IDENTITY: "2", ADDRESS: "3", CREDIT_CARD: "4", BANK_ACCOUNT: "13", NOTE: "6" },
        TAG: {
          LOGIN: "login",
          IDENTITY: "identity",
          ADDRESS: "address",
          CREDIT_CARD: "creditCard",
          BANK_ACCOUNT: "bankAccount",
          NOTE: "note"
        },
        LOGIN_TYPE_SPOC: "SPOC",
        LOGIN_TYPE_LOCAL: "LOCAL",
        NORTON_IDENTITY_SAFE: "Norton Identity Safe",
        DEFAULT_AES_INIT_VECTORY_SIZE: 16,
        DEFAULT_VAULT_SCHEMA_ITERATION_COUNT: 1e5,
        CURRENT_VAULT_SDK_VERSION: 327680,
        ADDRESS: {
          ADDR_CITY: "100",
          ADDR_POSTAL: "101",
          ADDR_STATE: "102",
          ADDR_STREET: "103",
          ADDR_STREET2: "104",
          ADDR_STREET3: "105",
          APTSTREETHOUSENUM: "106",
          ADDR_CITY_ALPHABET: "107",
          ADDR_STREET_ALPHABET: "108",
          ADDR_STREET2_ALPHABET: "109",
          ADDR_CITY_DISTRICT_WARD_AND_NUMBERS: "110",
          ADDR_BUILDING_NAME_AND_FLOOR: "111",
          ADDRESSNAME: "2000",
          SECURE: "2001",
          COUNTRY_REGION: "4000"
        },
        EVENTS: { VAULT_SYNC: "AF7B63E0-F40E-4B5A-B59B-2B2B5CC371DB" },
        vaultManager: {
          state: {
            LOAD_FROM_CLOUD: 1,
            LOADED: 2,
            INTERNAL_ERROR: 3,
            NETWORK_ERROR: 4,
            HANDLING_CHALLENGE: 5,
            CLIENT_UNAUTHORIZED: 6,
            READING_NODES: 7,
            DECRYPTING_NODES: 8,
            VAULT_SYNCED: 9,
            GETTING_LOCAL_CHANGES: 10,
            ENCRYPTING_NODES: 11,
            UPLOADING_TO_CLOUD: 12,
            MERGE_NODES: 13,
            NOT_LOGGED_IN: 14,
            VAULT_LOCKED: 15,
            VAULT_FOUND: 16,
            VAULT_NOT_FOUND: 17,
            SSO_UNAUTHORIZED: 18,
            VAULT_CREATED: 19,
            O2_RATE_LIMITED_ERROR: 20,
            VAULT_DELETED: 21,
            VAULT_PASSWORD_CHANGED: 22
          },
          stateInfo: {
            UNAUTHORIZED: "User is unauthorized",
            NETWORK_ERROR: "Server returned an error",
            READING_NODES: "Reading your vault",
            DECRYPTING_NODES: "Decrypting your vault",
            VAULT_SYNCED: "Successfully synced your vault",
            VAULT_SYNCED_DECRYPTED: "Successfully synced and decrypted your vault",
            LOAD_FROM_CLOUD: "Downloading your vault",
            VAULT_CREATED: "Vault created successfully",
            VAULT_DELETED: "Vault deleted successfully",
            VAULT_CLOSED: "Vault closed successfully",
            VAULT_PASSWORD_CHANGED: "Vault password changed successfully",
            VAULT_CLOSE_FAILED: "Unable to close the vault",
            HANDLE_CHALLENGE_FAILED: "Unable to handle challenge",
            VAULT_NOT_FOUND: "Vault does not exist for this user",
            VAULT_FOUND: "Vault exists for this user",
            LOADED: "Successfully downloaded your vault",
            GENERATE_DECRYPT_KEY_ERROR: "Unable to generate decryption key",
            DECRYPT_VAULT_KEY_ERROR: "Unable to decrypt the vault key. Very likely that vault has been corrupted",
            DECRYPT_OBFUSCATION_KEY_ERROR: "Unable to decrypt the obfuscation key. Very likely that vault has been corrupted",
            SSO_UNAUTHORIZED: "Unable to setup an sso connection",
            O2_RATE_LIMITED_ERROR: "Too many failure attempts to answer the challenge",
            VAULT_LOCKED_CANNOT_SYNC: "Vault is locked and cannot be synced"
          }
        },
        performanceReporter: { COMPONENT: { VAULTSDK: "VaultSDK" }, TYPE: { FORCE_SYNC_VAULT: "forceSyncVault", OPEN_VAULT: "openVault" } },
        HTTP_PROTOCOL: "http",
        HTTPS_PROTOCOL: "https",
        NODE_LIST_STORAGE_KEY: "8466c57e-c039-465d-afc8-bb82b9d5ec0e"
      };
    self.window = self;
    window.addEventListener("message", function (C) {
      if (!C || !C.data || !C.data.hasOwnProperty("id")) return void window.postMessage(null);
      if (C.data.id === E.GET_DERIVED_KEY) {
        var B = {};
        B.id = E.GET_DERIVED_KEY_RESPONSE;
        B.derivedKey = n.pkcs5.pbkdf2(C.data.byteArray, C.data.salt, C.data.iterationCount, C.data.keyLength, C.data.md);
        window.postMessage(B);
      }
    });
  },
  0: function (O, w) {}
});
