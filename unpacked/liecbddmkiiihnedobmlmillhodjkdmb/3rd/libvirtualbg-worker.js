var __create = Object.create,
  __defProp = Object.defineProperty,
  __defProps = Object.defineProperties,
  __getOwnPropDesc = Object.getOwnPropertyDescriptor,
  __getOwnPropDescs = Object.getOwnPropertyDescriptors,
  __getOwnPropNames = Object.getOwnPropertyNames,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable,
  __defNormalProp = (e, t, r) => (t in e ? __defProp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
  __spreadValues = (e, t) => {
    for (var r in t || (t = {})) __hasOwnProp.call(t, r) && __defNormalProp(e, r, t[r]);
    if (__getOwnPropSymbols) for (var r of __getOwnPropSymbols(t)) __propIsEnum.call(t, r) && __defNormalProp(e, r, t[r]);
    return e;
  },
  __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t)),
  __commonJS = (e, t) =>
    function () {
      return t || (0, e[__getOwnPropNames(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  __copyProps = (e, t, r, n) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let o of __getOwnPropNames(t))
        __hasOwnProp.call(e, o) ||
          o === r ||
          __defProp(e, o, { get: () => t[o], enumerable: !(n = __getOwnPropDesc(t, o)) || n.enumerable });
    return e;
  },
  __toESM = (e, t, r) => (
    (r = null != e ? __create(__getProtoOf(e)) : {}),
    __copyProps(!t && e && e.__esModule ? r : __defProp(r, "default", { value: e, enumerable: !0 }), e)
  ),
  require_tflite = __commonJS({
    "src/tflite/tflite.js"(e, t) {
      "use strict";
      var r,
        n =
          ((r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0),
          function (e) {
            var t,
              n,
              o = void 0 !== (e = e || {}) ? e : {};
            o.ready = new Promise(function (e, r) {
              (t = e), (n = r);
            });
            var a,
              i = {};
            for (a in o) o.hasOwnProperty(a) && (i[a] = o[a]);
            var u,
              s = [],
              c = "./this.program",
              l = function (e, t) {
                throw t;
              },
              f = "";
            "undefined" != typeof document && document.currentScript && (f = document.currentScript.src),
              r && (f = r),
              (f = 0 !== f.indexOf("blob:") ? f.substr(0, f.lastIndexOf("/") + 1) : "");
            var d,
              m = o.print || console.log.bind(console),
              g = o.printErr || console.warn.bind(console);
            for (a in i) i.hasOwnProperty(a) && (o[a] = i[a]);
            (i = null),
              o.arguments && (s = o.arguments),
              o.thisProgram && (c = o.thisProgram),
              o.quit && (l = o.quit),
              o.wasmBinary && (d = o.wasmBinary);
            var p,
              _ = o.noExitRuntime || !0;
            "object" != typeof WebAssembly && I("no native wasm support detected");
            var E,
              h,
              T,
              A,
              v = !1,
              R = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
            function b(e, t, r) {
              for (var n = t + r, o = t; e[o] && !(o >= n); ) ++o;
              if (o - t > 16 && e.subarray && R) return R.decode(e.subarray(t, o));
              for (var a = ""; t < o; ) {
                var i = e[t++];
                if (128 & i) {
                  var u = 63 & e[t++];
                  if (192 != (224 & i)) {
                    var s = 63 & e[t++];
                    if (
                      (i = 224 == (240 & i) ? ((15 & i) << 12) | (u << 6) | s : ((7 & i) << 18) | (u << 12) | (s << 6) | (63 & e[t++])) <
                      65536
                    )
                      a += String.fromCharCode(i);
                    else {
                      var c = i - 65536;
                      a += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c));
                    }
                  } else a += String.fromCharCode(((31 & i) << 6) | u);
                } else a += String.fromCharCode(i);
              }
              return a;
            }
            function S(e) {
              (E = e),
                (o.HEAP8 = h = new Int8Array(e)),
                (o.HEAP16 = new Int16Array(e)),
                (o.HEAP32 = A = new Int32Array(e)),
                (o.HEAPU8 = T = new Uint8Array(e)),
                (o.HEAPU16 = new Uint16Array(e)),
                (o.HEAPU32 = new Uint32Array(e)),
                (o.HEAPF32 = new Float32Array(e)),
                (o.HEAPF64 = new Float64Array(e));
            }
            o.INITIAL_MEMORY;
            var C,
              F = [],
              P = [],
              x = [],
              y = [];
            P.push({
              func: function () {
                z();
              }
            });
            var w = 0,
              U = null,
              M = null;
            function I(e) {
              o.onAbort && o.onAbort(e), g((e += "")), (v = !0), (e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.");
              var t = new WebAssembly.RuntimeError(e);
              throw (n(t), t);
            }
            (o.preloadedImages = {}), (o.preloadedAudios = {});
            function L(e) {
              return (
                (t = e), (r = "data:application/octet-stream;base64,"), String.prototype.startsWith ? t.startsWith(r) : 0 === t.indexOf(r)
              );
              var t, r;
            }
            var B,
              O,
              N = "tflite.wasm";
            function D(e) {
              try {
                if (e == N && d) return new Uint8Array(d);
                if (u) return u(e);
                throw "both async and sync fetching of the wasm failed";
              } catch (e) {
                I(e);
              }
            }
            function G(e) {
              for (; e.length > 0; ) {
                var t = e.shift();
                if ("function" != typeof t) {
                  var r = t.func;
                  "number" == typeof r ? (void 0 === t.arg ? C.get(r)() : C.get(r)(t.arg)) : r(void 0 === t.arg ? null : t.arg);
                } else t(o);
              }
            }
            function W(e) {
              return (A[Y() >> 2] = e), e;
            }
            function k(e) {
              try {
                return p.grow((e - E.byteLength + 65535) >>> 16), S(p.buffer), 1;
              } catch (e) {}
            }
            L(N) || ((B = N), (N = o.locateFile ? o.locateFile(B, f) : f + B)),
              (O = function () {
                return performance.now();
              });
            var j = {};
            function X() {
              if (!X.strings) {
                var e = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG:
                    (("object" == typeof navigator && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8",
                  _: c || "./this.program"
                };
                for (var t in j) e[t] = j[t];
                var r = [];
                for (var t in e) r.push(t + "=" + e[t]);
                X.strings = r;
              }
              return X.strings;
            }
            var H,
              q = {
                mappings: {},
                buffers: [null, [], []],
                printChar: function (e, t) {
                  var r = q.buffers[e];
                  0 === t || 10 === t ? ((1 === e ? m : g)(b(r, 0)), (r.length = 0)) : r.push(t);
                },
                varargs: void 0,
                get: function () {
                  return (q.varargs += 4), A[(q.varargs - 4) >> 2];
                },
                getStr: function (e) {
                  var t = (function (e, t) {
                    return e ? b(T, e, void 0) : "";
                  })(e);
                  return t;
                },
                get64: function (e, t) {
                  return e;
                }
              },
              V = {
                a: function () {
                  I();
                },
                n: function (e, t) {
                  var r;
                  if (0 === e) r = Date.now();
                  else {
                    if (1 !== e && 4 !== e) return W(28), -1;
                    r = O();
                  }
                  return (A[t >> 2] = (r / 1e3) | 0), (A[(t + 4) >> 2] = ((r % 1e3) * 1e3 * 1e3) | 0), 0;
                },
                i: function (e, t) {
                  I(
                    "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
                  );
                },
                e: function (e, t) {
                  I(
                    "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
                  );
                },
                l: function (e, t, r) {
                  T.copyWithin(e, t, t + r);
                },
                m: function (e) {
                  var t,
                    r = T.length,
                    n = 2147483648;
                  if (e > n) return !1;
                  for (var o = 1; o <= 4; o *= 2) {
                    var a = r * (1 + 0.2 / o);
                    if (
                      ((a = Math.min(a, e + 100663296)),
                      k(Math.min(n, ((t = Math.max(e, a)) % 65536 > 0 && (t += 65536 - (t % 65536)), t))))
                    )
                      return !0;
                  }
                  return !1;
                },
                o: function (e) {
                  for (var t = O(); O() - t < e; );
                },
                p: function (e, t) {
                  var r = 0;
                  return (
                    X().forEach(function (n, o) {
                      var a = t + r;
                      (A[(e + 4 * o) >> 2] = a),
                        (function (e, t, r) {
                          for (var n = 0; n < e.length; ++n) h[t++ >> 0] = e.charCodeAt(n);
                          h[t >> 0] = 0;
                        })(n, a),
                        (r += n.length + 1);
                    }),
                    0
                  );
                },
                g: function (e, t) {
                  var r = X();
                  A[e >> 2] = r.length;
                  var n = 0;
                  return (
                    r.forEach(function (e) {
                      n += e.length + 1;
                    }),
                    (A[t >> 2] = n),
                    0
                  );
                },
                j: function (e) {
                  !(function (e, t) {
                    _ || (o.onExit && o.onExit(e), (v = !0)), l(e, new J(e));
                  })(e);
                },
                h: function (e) {
                  return 0;
                },
                k: function (e, t, r, n, o) {},
                c: function (e, t, r, n) {
                  for (var o = 0, a = 0; a < r; a++) {
                    for (var i = A[(t + 8 * a) >> 2], u = A[(t + (8 * a + 4)) >> 2], s = 0; s < u; s++) q.printChar(e, T[i + s]);
                    o += u;
                  }
                  return (A[n >> 2] = o), 0;
                },
                d: function () {
                  return 6;
                },
                f: function () {
                  return 28;
                },
                b: function (e) {
                  switch (e) {
                    case 30:
                    case 75:
                      return 16384;
                    case 85:
                      return 131072;
                    case 132:
                    case 133:
                    case 12:
                    case 137:
                    case 138:
                    case 15:
                    case 235:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 149:
                    case 13:
                    case 10:
                    case 236:
                    case 153:
                    case 9:
                    case 21:
                    case 22:
                    case 159:
                    case 154:
                    case 14:
                    case 77:
                    case 78:
                    case 139:
                    case 82:
                    case 68:
                    case 67:
                    case 164:
                    case 11:
                    case 29:
                    case 47:
                    case 48:
                    case 95:
                    case 52:
                    case 51:
                    case 46:
                      return 200809;
                    case 27:
                    case 246:
                    case 127:
                    case 128:
                    case 23:
                    case 24:
                    case 160:
                    case 161:
                    case 181:
                    case 182:
                    case 242:
                    case 183:
                    case 184:
                    case 243:
                    case 244:
                    case 245:
                    case 165:
                    case 178:
                    case 179:
                    case 49:
                    case 50:
                    case 168:
                    case 169:
                    case 175:
                    case 170:
                    case 171:
                    case 172:
                    case 97:
                    case 76:
                    case 32:
                    case 173:
                    case 35:
                    case 80:
                    case 81:
                    case 79:
                      return -1;
                    case 176:
                    case 177:
                    case 7:
                    case 155:
                    case 8:
                    case 157:
                    case 125:
                    case 126:
                    case 92:
                    case 93:
                    case 129:
                    case 130:
                    case 131:
                    case 94:
                    case 91:
                      return 1;
                    case 74:
                    case 60:
                    case 69:
                    case 70:
                    case 4:
                      return 1024;
                    case 31:
                    case 42:
                    case 72:
                      return 32;
                    case 87:
                    case 26:
                    case 33:
                      return 2147483647;
                    case 34:
                    case 1:
                      return 47839;
                    case 38:
                    case 36:
                      return 99;
                    case 43:
                    case 37:
                      return 2048;
                    case 0:
                      return 2097152;
                    case 3:
                      return 65536;
                    case 28:
                      return 32768;
                    case 44:
                      return 32767;
                    case 39:
                      return 1e3;
                    case 89:
                      return 700;
                    case 71:
                      return 256;
                    case 40:
                      return 255;
                    case 2:
                      return 100;
                    case 180:
                      return 64;
                    case 25:
                      return 20;
                    case 5:
                      return 16;
                    case 6:
                      return 6;
                    case 73:
                      return 4;
                    case 84:
                      return ("object" == typeof navigator && navigator.hardwareConcurrency) || 1;
                  }
                  return W(28), -1;
                }
              },
              z =
                ((function () {
                  var e = { a: V };
                  function t(e, t) {
                    var r = e.exports;
                    (o.asm = r),
                      S((p = o.asm.q).buffer),
                      (C = o.asm.D),
                      (function (e) {
                        if (
                          (w--,
                          o.monitorRunDependencies && o.monitorRunDependencies(w),
                          0 == w && (null !== U && (clearInterval(U), (U = null)), M))
                        ) {
                          var t = M;
                          (M = null), t();
                        }
                      })();
                  }
                  function r(e) {
                    t(e.instance);
                  }
                  function a(t) {
                    return (
                      d || "function" != typeof fetch
                        ? Promise.resolve().then(function () {
                            return D(N);
                          })
                        : fetch(N, { credentials: "same-origin" })
                            .then(function (e) {
                              if (!e.ok) throw "failed to load wasm binary file at '" + N + "'";
                              return e.arrayBuffer();
                            })
                            .catch(function () {
                              return D(N);
                            })
                    )
                      .then(function (t) {
                        return WebAssembly.instantiate(t, e);
                      })
                      .then(t, function (e) {
                        g("failed to asynchronously prepare wasm: " + e), I(e);
                      });
                  }
                  if ((w++, o.monitorRunDependencies && o.monitorRunDependencies(w), o.instantiateWasm))
                    try {
                      return o.instantiateWasm(e, t);
                    } catch (e) {
                      return g("Module.instantiateWasm callback failed with error: " + e), !1;
                    }
                  (d || "function" != typeof WebAssembly.instantiateStreaming || L(N) || "function" != typeof fetch
                    ? a(r)
                    : fetch(N, { credentials: "same-origin" }).then(function (t) {
                        return WebAssembly.instantiateStreaming(t, e).then(r, function (e) {
                          return g("wasm streaming compile failed: " + e), g("falling back to ArrayBuffer instantiation"), a(r);
                        });
                      })
                  ).catch(n);
                })(),
                (o.___wasm_call_ctors = function () {
                  return (z = o.___wasm_call_ctors = o.asm.r).apply(null, arguments);
                })),
              Y =
                ((o._getModelBufferMemoryOffset = function () {
                  return (o._getModelBufferMemoryOffset = o.asm.s).apply(null, arguments);
                }),
                (o._getInputMemoryOffset = function () {
                  return (o._getInputMemoryOffset = o.asm.t).apply(null, arguments);
                }),
                (o._getInputHeight = function () {
                  return (o._getInputHeight = o.asm.u).apply(null, arguments);
                }),
                (o._getInputWidth = function () {
                  return (o._getInputWidth = o.asm.v).apply(null, arguments);
                }),
                (o._getInputChannelCount = function () {
                  return (o._getInputChannelCount = o.asm.w).apply(null, arguments);
                }),
                (o._getOutputMemoryOffset = function () {
                  return (o._getOutputMemoryOffset = o.asm.x).apply(null, arguments);
                }),
                (o._getOutputHeight = function () {
                  return (o._getOutputHeight = o.asm.y).apply(null, arguments);
                }),
                (o._getOutputWidth = function () {
                  return (o._getOutputWidth = o.asm.z).apply(null, arguments);
                }),
                (o._getOutputChannelCount = function () {
                  return (o._getOutputChannelCount = o.asm.A).apply(null, arguments);
                }),
                (o._loadModel = function () {
                  return (o._loadModel = o.asm.B).apply(null, arguments);
                }),
                (o._runInference = function () {
                  return (o._runInference = o.asm.C).apply(null, arguments);
                }),
                (o.___errno_location = function () {
                  return (Y = o.___errno_location = o.asm.E).apply(null, arguments);
                }));
            function J(e) {
              (this.name = "ExitStatus"), (this.message = "Program terminated with exit(" + e + ")"), (this.status = e);
            }
            function K(e) {
              function r() {
                H ||
                  ((H = !0),
                  (o.calledRun = !0),
                  v ||
                    (G(P),
                    G(x),
                    t(o),
                    o.onRuntimeInitialized && o.onRuntimeInitialized(),
                    (function () {
                      if (o.postRun)
                        for ("function" == typeof o.postRun && (o.postRun = [o.postRun]); o.postRun.length; )
                          (e = o.postRun.shift()), y.unshift(e);
                      var e;
                      G(y);
                    })()));
              }
              (e = e || s),
                w > 0 ||
                  ((function () {
                    if (o.preRun)
                      for ("function" == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length; )
                        (e = o.preRun.shift()), F.unshift(e);
                    var e;
                    G(F);
                  })(),
                  w > 0 ||
                    (o.setStatus
                      ? (o.setStatus("Running..."),
                        setTimeout(function () {
                          setTimeout(function () {
                            o.setStatus("");
                          }, 1),
                            r();
                        }, 1))
                      : r()));
            }
            if (
              ((M = function e() {
                H || K(), H || (M = e);
              }),
              (o.run = K),
              o.preInit)
            )
              for ("function" == typeof o.preInit && (o.preInit = [o.preInit]); o.preInit.length > 0; ) o.preInit.pop()();
            return K(), e.ready;
          });
      "object" == typeof e && "object" == typeof t
        ? (t.exports = n)
        : "function" == typeof define && define.amd
        ? define([], function () {
            return n;
          })
        : "object" == typeof e && (e.createTFLiteModule = n);
    }
  }),
  require_tflite_simd = __commonJS({
    "src/tflite/tflite-simd.js"(e, t) {
      "use strict";
      var r,
        n =
          ((r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0),
          function (e) {
            var t,
              n,
              o = void 0 !== (e = e || {}) ? e : {};
            o.ready = new Promise(function (e, r) {
              (t = e), (n = r);
            });
            var a,
              i = {};
            for (a in o) o.hasOwnProperty(a) && (i[a] = o[a]);
            var u,
              s = [],
              c = "./this.program",
              l = function (e, t) {
                throw t;
              },
              f = "";
            "undefined" != typeof document && document.currentScript && (f = document.currentScript.src),
              r && (f = r),
              (f = 0 !== f.indexOf("blob:") ? f.substr(0, f.lastIndexOf("/") + 1) : "");
            var d,
              m = o.print || console.log.bind(console),
              g = o.printErr || console.warn.bind(console);
            for (a in i) i.hasOwnProperty(a) && (o[a] = i[a]);
            (i = null),
              o.arguments && (s = o.arguments),
              o.thisProgram && (c = o.thisProgram),
              o.quit && (l = o.quit),
              o.wasmBinary && (d = o.wasmBinary);
            var p,
              _ = o.noExitRuntime || !0;
            "object" != typeof WebAssembly && I("no native wasm support detected");
            var E,
              h,
              T,
              A,
              v = !1,
              R = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
            function b(e, t, r) {
              for (var n = t + r, o = t; e[o] && !(o >= n); ) ++o;
              if (o - t > 16 && e.subarray && R) return R.decode(e.subarray(t, o));
              for (var a = ""; t < o; ) {
                var i = e[t++];
                if (128 & i) {
                  var u = 63 & e[t++];
                  if (192 != (224 & i)) {
                    var s = 63 & e[t++];
                    if (
                      (i = 224 == (240 & i) ? ((15 & i) << 12) | (u << 6) | s : ((7 & i) << 18) | (u << 12) | (s << 6) | (63 & e[t++])) <
                      65536
                    )
                      a += String.fromCharCode(i);
                    else {
                      var c = i - 65536;
                      a += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c));
                    }
                  } else a += String.fromCharCode(((31 & i) << 6) | u);
                } else a += String.fromCharCode(i);
              }
              return a;
            }
            function S(e) {
              (E = e),
                (o.HEAP8 = h = new Int8Array(e)),
                (o.HEAP16 = new Int16Array(e)),
                (o.HEAP32 = A = new Int32Array(e)),
                (o.HEAPU8 = T = new Uint8Array(e)),
                (o.HEAPU16 = new Uint16Array(e)),
                (o.HEAPU32 = new Uint32Array(e)),
                (o.HEAPF32 = new Float32Array(e)),
                (o.HEAPF64 = new Float64Array(e));
            }
            o.INITIAL_MEMORY;
            var C,
              F = [],
              P = [],
              x = [],
              y = [];
            P.push({
              func: function () {
                z();
              }
            });
            var w = 0,
              U = null,
              M = null;
            function I(e) {
              o.onAbort && o.onAbort(e), g((e += "")), (v = !0), (e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.");
              var t = new WebAssembly.RuntimeError(e);
              throw (n(t), t);
            }
            (o.preloadedImages = {}), (o.preloadedAudios = {});
            function L(e) {
              return (
                (t = e), (r = "data:application/octet-stream;base64,"), String.prototype.startsWith ? t.startsWith(r) : 0 === t.indexOf(r)
              );
              var t, r;
            }
            var B,
              O,
              N = "tflite-simd.wasm";
            function D(e) {
              try {
                if (e == N && d) return new Uint8Array(d);
                if (u) return u(e);
                throw "both async and sync fetching of the wasm failed";
              } catch (e) {
                I(e);
              }
            }
            function G(e) {
              for (; e.length > 0; ) {
                var t = e.shift();
                if ("function" != typeof t) {
                  var r = t.func;
                  "number" == typeof r ? (void 0 === t.arg ? C.get(r)() : C.get(r)(t.arg)) : r(void 0 === t.arg ? null : t.arg);
                } else t(o);
              }
            }
            function W(e) {
              return (A[Y() >> 2] = e), e;
            }
            function k(e) {
              try {
                return p.grow((e - E.byteLength + 65535) >>> 16), S(p.buffer), 1;
              } catch (e) {}
            }
            L(N) || ((B = N), (N = o.locateFile ? o.locateFile(B, f) : f + B)),
              (O = function () {
                return performance.now();
              });
            var j = {};
            function X() {
              if (!X.strings) {
                var e = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG:
                    (("object" == typeof navigator && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8",
                  _: c || "./this.program"
                };
                for (var t in j) e[t] = j[t];
                var r = [];
                for (var t in e) r.push(t + "=" + e[t]);
                X.strings = r;
              }
              return X.strings;
            }
            var H,
              q = {
                mappings: {},
                buffers: [null, [], []],
                printChar: function (e, t) {
                  var r = q.buffers[e];
                  0 === t || 10 === t ? ((1 === e ? m : g)(b(r, 0)), (r.length = 0)) : r.push(t);
                },
                varargs: void 0,
                get: function () {
                  return (q.varargs += 4), A[(q.varargs - 4) >> 2];
                },
                getStr: function (e) {
                  var t = (function (e, t) {
                    return e ? b(T, e, void 0) : "";
                  })(e);
                  return t;
                },
                get64: function (e, t) {
                  return e;
                }
              },
              V = {
                a: function () {
                  I();
                },
                n: function (e, t) {
                  var r;
                  if (0 === e) r = Date.now();
                  else {
                    if (1 !== e && 4 !== e) return W(28), -1;
                    r = O();
                  }
                  return (A[t >> 2] = (r / 1e3) | 0), (A[(t + 4) >> 2] = ((r % 1e3) * 1e3 * 1e3) | 0), 0;
                },
                i: function (e, t) {
                  I(
                    "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
                  );
                },
                e: function (e, t) {
                  I(
                    "To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
                  );
                },
                l: function (e, t, r) {
                  T.copyWithin(e, t, t + r);
                },
                m: function (e) {
                  var t,
                    r = T.length,
                    n = 2147483648;
                  if (e > n) return !1;
                  for (var o = 1; o <= 4; o *= 2) {
                    var a = r * (1 + 0.2 / o);
                    if (
                      ((a = Math.min(a, e + 100663296)),
                      k(Math.min(n, ((t = Math.max(e, a)) % 65536 > 0 && (t += 65536 - (t % 65536)), t))))
                    )
                      return !0;
                  }
                  return !1;
                },
                o: function (e) {
                  for (var t = O(); O() - t < e; );
                },
                p: function (e, t) {
                  var r = 0;
                  return (
                    X().forEach(function (n, o) {
                      var a = t + r;
                      (A[(e + 4 * o) >> 2] = a),
                        (function (e, t, r) {
                          for (var n = 0; n < e.length; ++n) h[t++ >> 0] = e.charCodeAt(n);
                          h[t >> 0] = 0;
                        })(n, a),
                        (r += n.length + 1);
                    }),
                    0
                  );
                },
                g: function (e, t) {
                  var r = X();
                  A[e >> 2] = r.length;
                  var n = 0;
                  return (
                    r.forEach(function (e) {
                      n += e.length + 1;
                    }),
                    (A[t >> 2] = n),
                    0
                  );
                },
                j: function (e) {
                  !(function (e, t) {
                    _ || (o.onExit && o.onExit(e), (v = !0)), l(e, new J(e));
                  })(e);
                },
                h: function (e) {
                  return 0;
                },
                k: function (e, t, r, n, o) {},
                c: function (e, t, r, n) {
                  for (var o = 0, a = 0; a < r; a++) {
                    for (var i = A[(t + 8 * a) >> 2], u = A[(t + (8 * a + 4)) >> 2], s = 0; s < u; s++) q.printChar(e, T[i + s]);
                    o += u;
                  }
                  return (A[n >> 2] = o), 0;
                },
                d: function () {
                  return 6;
                },
                f: function () {
                  return 28;
                },
                b: function (e) {
                  switch (e) {
                    case 30:
                    case 75:
                      return 16384;
                    case 85:
                      return 131072;
                    case 132:
                    case 133:
                    case 12:
                    case 137:
                    case 138:
                    case 15:
                    case 235:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 149:
                    case 13:
                    case 10:
                    case 236:
                    case 153:
                    case 9:
                    case 21:
                    case 22:
                    case 159:
                    case 154:
                    case 14:
                    case 77:
                    case 78:
                    case 139:
                    case 82:
                    case 68:
                    case 67:
                    case 164:
                    case 11:
                    case 29:
                    case 47:
                    case 48:
                    case 95:
                    case 52:
                    case 51:
                    case 46:
                      return 200809;
                    case 27:
                    case 246:
                    case 127:
                    case 128:
                    case 23:
                    case 24:
                    case 160:
                    case 161:
                    case 181:
                    case 182:
                    case 242:
                    case 183:
                    case 184:
                    case 243:
                    case 244:
                    case 245:
                    case 165:
                    case 178:
                    case 179:
                    case 49:
                    case 50:
                    case 168:
                    case 169:
                    case 175:
                    case 170:
                    case 171:
                    case 172:
                    case 97:
                    case 76:
                    case 32:
                    case 173:
                    case 35:
                    case 80:
                    case 81:
                    case 79:
                      return -1;
                    case 176:
                    case 177:
                    case 7:
                    case 155:
                    case 8:
                    case 157:
                    case 125:
                    case 126:
                    case 92:
                    case 93:
                    case 129:
                    case 130:
                    case 131:
                    case 94:
                    case 91:
                      return 1;
                    case 74:
                    case 60:
                    case 69:
                    case 70:
                    case 4:
                      return 1024;
                    case 31:
                    case 42:
                    case 72:
                      return 32;
                    case 87:
                    case 26:
                    case 33:
                      return 2147483647;
                    case 34:
                    case 1:
                      return 47839;
                    case 38:
                    case 36:
                      return 99;
                    case 43:
                    case 37:
                      return 2048;
                    case 0:
                      return 2097152;
                    case 3:
                      return 65536;
                    case 28:
                      return 32768;
                    case 44:
                      return 32767;
                    case 39:
                      return 1e3;
                    case 89:
                      return 700;
                    case 71:
                      return 256;
                    case 40:
                      return 255;
                    case 2:
                      return 100;
                    case 180:
                      return 64;
                    case 25:
                      return 20;
                    case 5:
                      return 16;
                    case 6:
                      return 6;
                    case 73:
                      return 4;
                    case 84:
                      return ("object" == typeof navigator && navigator.hardwareConcurrency) || 1;
                  }
                  return W(28), -1;
                }
              },
              z =
                ((function () {
                  var e = { a: V };
                  function t(e, t) {
                    var r = e.exports;
                    (o.asm = r),
                      S((p = o.asm.q).buffer),
                      (C = o.asm.D),
                      (function (e) {
                        if (
                          (w--,
                          o.monitorRunDependencies && o.monitorRunDependencies(w),
                          0 == w && (null !== U && (clearInterval(U), (U = null)), M))
                        ) {
                          var t = M;
                          (M = null), t();
                        }
                      })();
                  }
                  function r(e) {
                    t(e.instance);
                  }
                  function a(t) {
                    return (
                      d || "function" != typeof fetch
                        ? Promise.resolve().then(function () {
                            return D(N);
                          })
                        : fetch(N, { credentials: "same-origin" })
                            .then(function (e) {
                              if (!e.ok) throw "failed to load wasm binary file at '" + N + "'";
                              return e.arrayBuffer();
                            })
                            .catch(function () {
                              return D(N);
                            })
                    )
                      .then(function (t) {
                        return WebAssembly.instantiate(t, e);
                      })
                      .then(t, function (e) {
                        g("failed to asynchronously prepare wasm: " + e), I(e);
                      });
                  }
                  if ((w++, o.monitorRunDependencies && o.monitorRunDependencies(w), o.instantiateWasm))
                    try {
                      return o.instantiateWasm(e, t);
                    } catch (e) {
                      return g("Module.instantiateWasm callback failed with error: " + e), !1;
                    }
                  (d || "function" != typeof WebAssembly.instantiateStreaming || L(N) || "function" != typeof fetch
                    ? a(r)
                    : fetch(N, { credentials: "same-origin" }).then(function (t) {
                        return WebAssembly.instantiateStreaming(t, e).then(r, function (e) {
                          return g("wasm streaming compile failed: " + e), g("falling back to ArrayBuffer instantiation"), a(r);
                        });
                      })
                  ).catch(n);
                })(),
                (o.___wasm_call_ctors = function () {
                  return (z = o.___wasm_call_ctors = o.asm.r).apply(null, arguments);
                })),
              Y =
                ((o._getModelBufferMemoryOffset = function () {
                  return (o._getModelBufferMemoryOffset = o.asm.s).apply(null, arguments);
                }),
                (o._getInputMemoryOffset = function () {
                  return (o._getInputMemoryOffset = o.asm.t).apply(null, arguments);
                }),
                (o._getInputHeight = function () {
                  return (o._getInputHeight = o.asm.u).apply(null, arguments);
                }),
                (o._getInputWidth = function () {
                  return (o._getInputWidth = o.asm.v).apply(null, arguments);
                }),
                (o._getInputChannelCount = function () {
                  return (o._getInputChannelCount = o.asm.w).apply(null, arguments);
                }),
                (o._getOutputMemoryOffset = function () {
                  return (o._getOutputMemoryOffset = o.asm.x).apply(null, arguments);
                }),
                (o._getOutputHeight = function () {
                  return (o._getOutputHeight = o.asm.y).apply(null, arguments);
                }),
                (o._getOutputWidth = function () {
                  return (o._getOutputWidth = o.asm.z).apply(null, arguments);
                }),
                (o._getOutputChannelCount = function () {
                  return (o._getOutputChannelCount = o.asm.A).apply(null, arguments);
                }),
                (o._loadModel = function () {
                  return (o._loadModel = o.asm.B).apply(null, arguments);
                }),
                (o._runInference = function () {
                  return (o._runInference = o.asm.C).apply(null, arguments);
                }),
                (o.___errno_location = function () {
                  return (Y = o.___errno_location = o.asm.E).apply(null, arguments);
                }));
            function J(e) {
              (this.name = "ExitStatus"), (this.message = "Program terminated with exit(" + e + ")"), (this.status = e);
            }
            function K(e) {
              function r() {
                H ||
                  ((H = !0),
                  (o.calledRun = !0),
                  v ||
                    (G(P),
                    G(x),
                    t(o),
                    o.onRuntimeInitialized && o.onRuntimeInitialized(),
                    (function () {
                      if (o.postRun)
                        for ("function" == typeof o.postRun && (o.postRun = [o.postRun]); o.postRun.length; )
                          (e = o.postRun.shift()), y.unshift(e);
                      var e;
                      G(y);
                    })()));
              }
              (e = e || s),
                w > 0 ||
                  ((function () {
                    if (o.preRun)
                      for ("function" == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length; )
                        (e = o.preRun.shift()), F.unshift(e);
                    var e;
                    G(F);
                  })(),
                  w > 0 ||
                    (o.setStatus
                      ? (o.setStatus("Running..."),
                        setTimeout(function () {
                          setTimeout(function () {
                            o.setStatus("");
                          }, 1),
                            r();
                        }, 1))
                      : r()));
            }
            if (
              ((M = function e() {
                H || K(), H || (M = e);
              }),
              (o.run = K),
              o.preInit)
            )
              for ("function" == typeof o.preInit && (o.preInit = [o.preInit]); o.preInit.length > 0; ) o.preInit.pop()();
            return K(), e.ready;
          });
      "object" == typeof e && "object" == typeof t
        ? (t.exports = n)
        : "function" == typeof define && define.amd
        ? define([], function () {
            return n;
          })
        : "object" == typeof e && (e.createTFLiteSIMDModule = n);
    }
  }),
  createPixelGif = (() => {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return function (e) {
      return (
        "data:image/gif;base64,R0lGODlhAQABAPAA" +
        (function (e) {
          let r = e.substring(1, 7);
          r.length < 6 && (r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]);
          const n = [parseInt(r[0] + r[1], 16), parseInt(r[2] + r[3], 16), parseInt(r[4] + r[5], 16)];
          return (o = n[2]), t(0, n[0], n[1]) + t(o, 255, 255);
          var o;
        })(e) +
        "/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
      );
    };
    function t(t, r, n) {
      const o = ((3 & t) << 4) | (r >> 4),
        a = ((15 & r) << 2) | (n >> 6),
        i = 63 & n;
      return e.charAt(t >> 2) + e.charAt(o) + e.charAt(a) + e.charAt(i);
    }
  })();
function toBackgroundConfig(e, t) {
  if (!e || "none" === e.type) return { type: "none" };
  const r = (null == t ? void 0 : t.bgUrl) || (null == e ? void 0 : e.url);
  if ("image" === e.type && r) return { type: "image", url: r };
  const n = (null == t ? void 0 : t.bgColor) || (null == e ? void 0 : e.color);
  return "color" === e.type && n ? { type: "image", url: createPixelGif(n) } : "blur" === e.type ? { type: "blur" } : { type: "none" };
}
var BRIGHTNESS_ADJUSTMENT_VARIANCE = 5,
  LOW_LIGHT_TIMEOUT_MS = 500,
  BRIGHTNESS_TO_CONTRAST_RATIO = 2,
  PIXEL_SAMPLING_INCREMENT = 200;
function calculateBrightnessPercentage(e) {
  const t = e.length,
    r = { r: 0, g: 0, b: 0 };
  for (let n = 0; n < t - 2; n += PIXEL_SAMPLING_INCREMENT) (r.r += e[n]), (r.g += e[n + 1]), (r.b += e[n + 2]);
  return (
    (r.r = ~~(r.r / (t / PIXEL_SAMPLING_INCREMENT))),
    (r.g = ~~(r.g / (t / PIXEL_SAMPLING_INCREMENT))),
    (r.b = ~~(r.b / (t / PIXEL_SAMPLING_INCREMENT))),
    Math.round(((0.2126 * r.r + 0.7152 * r.g + 0.0722 * r.b) / 255) * 100 * 100) / 100
  );
}
function getCurrentBrightnessAdjustment(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (n.threshold >= e) return n;
  }
  return t[t.length - 1];
}
function shouldUpdateBrightnessAdjustmentRelativeToLastUpdate(e, t) {
  return e < t - BRIGHTNESS_ADJUSTMENT_VARIANCE || e > t + BRIGHTNESS_ADJUSTMENT_VARIANCE;
}
var import_tflite = __toESM(require_tflite()),
  import_tflite_simd = __toESM(require_tflite_simd()),
  DEFAULT_SEGMENTATION_CONFIG = {
    model: "meet-160x96",
    backend: "wasmSimd",
    pipeline: "webgl2",
    wasmFilePrefix: "https://cdn.loom.com/tflite/v2/"
  },
  INPUT_RESOLUTION_PER_MODEL = { "meet-160x96": [160, 96], "meet-256x144": [256, 144], mlkit: [256, 256] },
  buildSegmentationConfig = (e) => __spreadValues(__spreadValues({}, DEFAULT_SEGMENTATION_CONFIG), e);
function getTFLiteModelFileName(e) {
  switch (e) {
    case "meet-256x144":
      return "segm_full_v679";
    case "meet-160x96":
      return "segm_lite_v681";
    case "mlkit":
      return "selfiesegmentation_mlkit-256x256-2021_01_19-v1215.f16";
    default:
      throw new Error(`No TFLite file for this segmentation model: ${e}`);
  }
}
var buildTflite = async (e) => {
    const t = { locateFile: (t) => `${e.wasmFilePrefix}${t}`.replace(/([a-z0-9])(\/+)/gi, "$1/") };
    if ("wasmSimd" === e.backend)
      try {
        return { tflite: await (0, import_tflite_simd.default)(t), simd: !0 };
      } catch (e) {
        console.warn("Failed to create TFLite SIMD WebAssembly module.", e);
      }
    return { tflite: await (0, import_tflite.default)(t), simd: !1 };
  },
  buildSegmenter = async (e) => {
    const t = (await buildTflite(e)).tflite;
    return (
      await loadModel(t, e),
      {
        write: (e) => {
          const r = t._getInputMemoryOffset() / 4,
            n = new Uint8Array(e);
          for (let e = 0; e < n.byteLength / 4; e++) {
            const o = r + 3 * e,
              a = 4 * e;
            (t.HEAPF32[o] = n[a] / 255), (t.HEAPF32[o + 1] = n[a + 1] / 255), (t.HEAPF32[o + 2] = n[a + 2] / 255);
          }
        },
        read: () => {
          const e = (t._getOutputMemoryOffset() / 4) * Float32Array.BYTES_PER_ELEMENT;
          return new Float32Array(t.HEAPF32.buffer, e);
        },
        run() {
          t._runInference();
        }
      }
    );
  },
  loadModel = async (e, t) => {
    console.log("loading model");
    const r = getTFLiteModelFileName(t.model);
    console.log("Loading tflite model:", r);
    const n = await fetch(`https://cdn.loom.com/tflite/${r}.tflite`),
      o = await n.arrayBuffer();
    console.log("Model buffer size:", o.byteLength);
    const a = e._getModelBufferMemoryOffset();
    e.HEAPU8.set(new Uint8Array(o), a), e._loadModel(o.byteLength);
  },
  glsl = String.raw;
function createPipelineStageProgram(e, t, r, n, o) {
  const a = createProgram(e, t, r),
    i = e.getAttribLocation(a, "a_position");
  e.enableVertexAttribArray(i), e.bindBuffer(e.ARRAY_BUFFER, n), e.vertexAttribPointer(i, 2, e.FLOAT, !1, 0, 0);
  const u = e.getAttribLocation(a, "a_texCoord");
  return e.enableVertexAttribArray(u), e.bindBuffer(e.ARRAY_BUFFER, o), e.vertexAttribPointer(u, 2, e.FLOAT, !1, 0, 0), a;
}
function createProgram(e, t, r) {
  const n = e.createProgram();
  if ((e.attachShader(n, t), e.attachShader(n, r), e.linkProgram(n), !e.getProgramParameter(n, e.LINK_STATUS)))
    throw new Error(`Could not link WebGL program: ${e.getProgramInfoLog(n)}`);
  return n;
}
function compileShader(e, t, r) {
  const n = e.createShader(t);
  if ((e.shaderSource(n, r), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)))
    throw new Error(`Could not compile shader: ${e.getShaderInfoLog(n)}`);
  return n;
}
function getAssignedLocationForPreviousResult(e, t) {
  e.uniform1i(t, 8);
}
function allocateUnitForPreviousTexture(e, t) {
  e.activeTexture(e.TEXTURE8), e.bindTexture(e.TEXTURE_2D, t);
}
function createTexture(e, t, r, n, o = e.NEAREST, a = e.NEAREST) {
  const i = e.createTexture();
  return (
    e.bindTexture(e.TEXTURE_2D, i),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, o),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, a),
    e.texStorage2D(e.TEXTURE_2D, 1, t, r, n),
    i
  );
}
async function readPixelsAsync(e, t, r, n, o, a, i, u) {
  const s = e.createBuffer();
  return (
    e.bindBuffer(e.PIXEL_PACK_BUFFER, s),
    e.bufferData(e.PIXEL_PACK_BUFFER, u.byteLength, e.STREAM_READ),
    e.readPixels(t, r, n, o, a, i, 0),
    e.bindBuffer(e.PIXEL_PACK_BUFFER, null),
    await getBufferSubDataAsync(e, e.PIXEL_PACK_BUFFER, s, 0, u),
    e.deleteBuffer(s),
    u
  );
}
async function getBufferSubDataAsync(e, t, r, n, o, a, i) {
  const u = e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE, 0);
  e.flush();
  const s = await clientWaitAsync(e, u);
  e.deleteSync(u), s !== e.WAIT_FAILED && (e.bindBuffer(t, r), e.getBufferSubData(t, n, o, a, i), e.bindBuffer(t, null));
}
function clientWaitAsync(e, t) {
  return new Promise((r) => {
    setTimeout(function n() {
      const o = e.clientWaitSync(t, 0, 0);
      o !== e.WAIT_FAILED ? (o !== e.TIMEOUT_EXPIRED ? r(o) : setTimeout(n, 0)) : r(o);
    }, 0);
  });
}
var WEBGL_SEGMENTATION_STAGE_NAME = "segmentation",
  WEBGL_SEGMENTATION_TFLITE_STAGE_NAME = "tflite_inference",
  WEBGL_BLEMISH_SMOOTHING_STAGE_NAME = "blemish_smoothing",
  WEBGL_LOW_LIGHT_STAGE_NAME = "low_light",
  WEBGL_CONTRAST_STAGE_NAME = "contrast",
  WEBGL_RENDER_BACKGROUND_TO_TEXTURE_STAGE_NAME = "background_to_texture",
  WEBGL_WRITE_TO_CANVAS_STAGE_NAME = "write_to_canvas",
  WEBGL_SOFTMAX_STAGE_NAME = "softmax",
  WEBGL_BLUR_STAGE_NAME = "background_blur",
  WEBGL_BCG_IMAGE_STAGE_NAME = "background_image",
  WEBGL_STAGE_COMPLETE = "webgl_stage_complete";
function buildBackgroundBlurStage(e, t, r, n, o, a) {
  const i = buildBlurPass(e, t, r, n, o, a),
    u = buildBlendPass(e, r, n, a);
  return {
    render: function () {
      return i.render(), u.render(), null;
    },
    renderToTexture: function () {
      return i.renderFromPreviousStage(), u.renderToTexture();
    },
    updateCoverage: function (e) {
      u.updateCoverage(e);
    },
    cleanUp: function () {
      u.cleanUp(), i.cleanUp();
    },
    getStageName: function () {
      return WEBGL_BLUR_STAGE_NAME;
    }
  };
}
function buildBlurPass(e, t, r, n, o, a) {
  const i = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform sampler2D u_personMask;
    uniform vec2 u_texelSize;

    in vec2 v_texCoord;

    out vec4 outColor;

    const float offset[5] = float[](0.0, 1.0, 2.0, 3.0, 4.0);
    const float weight[5] = float[](0.2270270270, 0.1945945946, 0.1216216216,
      0.0540540541, 0.0162162162);

    void main() {
      vec4 centerColor = texture(u_inputFrame, v_texCoord);
      float personMask = texture(u_personMask, v_texCoord).a;

      vec4 frameColor = centerColor * weight[0] * (1.0 - personMask);

      for (int i = 1; i < 5; i++) {
        vec2 offset = vec2(offset[i]) * u_texelSize;

        vec2 texCoord = v_texCoord + offset;
        frameColor += texture(u_inputFrame, texCoord) * weight[i] *
          (1.0 - texture(u_personMask, texCoord).a);

        texCoord = v_texCoord - offset;
        frameColor += texture(u_inputFrame, texCoord) * weight[i] *
          (1.0 - texture(u_personMask, texCoord).a);
      }
      outColor = vec4(frameColor.rgb + (1.0 - frameColor.a) * centerColor.rgb, 1.0);
    }
  `,
    u = 0.5 * a.width,
    s = 0.5 * a.height,
    c = 1 / u,
    l = 1 / s,
    f = compileShader(e, e.FRAGMENT_SHADER, i),
    d = createPipelineStageProgram(e, t, f, r, n),
    m = e.getUniformLocation(d, "u_inputFrame"),
    g = e.getUniformLocation(d, "u_personMask"),
    p = e.getUniformLocation(d, "u_texelSize"),
    _ = createTexture(e, e.RGBA8, u, s, e.NEAREST, e.LINEAR),
    E = createTexture(e, e.RGBA8, u, s, e.NEAREST, e.LINEAR),
    h = e.createFramebuffer();
  e.bindFramebuffer(e.FRAMEBUFFER, h), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, _, 0);
  const T = e.createFramebuffer();
  function A() {
    e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, o);
    for (let t = 0; t < 3; t++)
      e.uniform2f(p, 0, l),
        e.bindFramebuffer(e.FRAMEBUFFER, h),
        e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
        e.activeTexture(e.TEXTURE2),
        e.bindTexture(e.TEXTURE_2D, _),
        e.uniform1i(m, 2),
        e.uniform2f(p, c, 0),
        e.bindFramebuffer(e.FRAMEBUFFER, T),
        e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
        e.bindTexture(e.TEXTURE_2D, E);
  }
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, T),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, E, 0),
    e.useProgram(d),
    e.uniform1i(g, 1),
    {
      render: function () {
        return e.viewport(0, 0, u, s), e.useProgram(d), e.uniform1i(m, 0), A(), null;
      },
      renderFromPreviousStage: function () {
        e.viewport(0, 0, u, s), e.useProgram(d), getAssignedLocationForPreviousResult(e, m), A();
      },
      cleanUp: function () {
        e.deleteFramebuffer(T), e.deleteFramebuffer(h), e.deleteTexture(E), e.deleteTexture(_), e.deleteProgram(d), e.deleteShader(f);
      }
    }
  );
}
function buildBlendPass(e, t, r, n) {
  const o = glsl`#version 300 es

    in vec2 a_position;
    in vec2 a_texCoord;

    out vec2 v_texCoord;

    void main() {
      // Flipping Y is required when rendering to canvas
      gl_Position = vec4(a_position * vec2(1.0, -1.0), 0.0, 1.0);
      v_texCoord = a_texCoord;
    }
  `,
    a = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform sampler2D u_personMask;
    uniform sampler2D u_blurredInputFrame;
    uniform vec2 u_coverage;

    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      vec3 color = texture(u_inputFrame, v_texCoord).rgb;
      vec3 blurredColor = texture(u_blurredInputFrame, v_texCoord).rgb;
      float personMask = texture(u_personMask, v_texCoord).a;
      personMask = smoothstep(u_coverage.x, u_coverage.y, personMask);
      outColor = vec4(mix(blurredColor, color, personMask), 1.0);
    }
  `,
    { width: i, height: u } = n,
    s = compileShader(e, e.VERTEX_SHADER, o),
    c = compileShader(e, e.FRAGMENT_SHADER, a),
    l = createPipelineStageProgram(e, s, c, t, r),
    f = e.getUniformLocation(l, "u_inputFrame"),
    d = e.getUniformLocation(l, "u_personMask"),
    m = e.getUniformLocation(l, "u_blurredInputFrame"),
    g = e.getUniformLocation(l, "u_coverage");
  e.useProgram(l), e.uniform1i(f, 0), e.uniform1i(d, 1), e.uniform1i(m, 2), e.uniform2f(g, 0, 1);
  const p = e.createFramebuffer(),
    _ = createTexture(e, e.RGBA8, i, u);
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, p),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, _, 0),
    {
      render: function () {
        return e.viewport(0, 0, i, u), e.useProgram(l), e.bindFramebuffer(e.FRAMEBUFFER, null), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), null;
      },
      renderToTexture: function () {
        return (
          e.viewport(0, 0, i, u),
          e.useProgram(l),
          e.activeTexture(e.TEXTURE8),
          getAssignedLocationForPreviousResult(e, f),
          e.bindFramebuffer(e.FRAMEBUFFER, p),
          e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
          _
        );
      },
      updateCoverage: function (t) {
        e.useProgram(l), e.uniform2f(g, t[0], t[1]);
      },
      cleanUp: function () {
        e.deleteTexture(_), e.deleteProgram(l), e.deleteFramebuffer(p), e.deleteShader(c), e.deleteShader(s);
      }
    }
  );
}
async function loadImage(e) {
  return createImageBitmap(await (await fetch(e)).blob());
}
function buildBackgroundImageStage(e, t, r, n, o, a) {
  const i = glsl`#version 300 es

    uniform vec2 u_backgroundScale;
    uniform vec2 u_backgroundOffset;

    in vec2 a_position;
    in vec2 a_texCoord;

    out vec2 v_texCoord;
    out vec2 v_backgroundCoord;

    void main() {
      // Flipping Y is required when rendering to canvas
      gl_Position = vec4(a_position * vec2(1.0, -1.0), 0.0, 1.0);
      v_texCoord = a_texCoord;
      v_backgroundCoord = a_texCoord * u_backgroundScale + u_backgroundOffset;
    }
  `,
    u = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform sampler2D u_personMask;
    uniform sampler2D u_background;
    uniform vec2 u_coverage;
    uniform float u_lightWrapping;
    uniform float u_blendMode;

    in vec2 v_texCoord;
    in vec2 v_backgroundCoord;

    out vec4 outColor;

    vec3 screen(vec3 a, vec3 b) {
      return 1.0 - (1.0 - a) * (1.0 - b);
    }

    vec3 linearDodge(vec3 a, vec3 b) {
      return a + b;
    }

    void main() {
      vec3 frameColor = texture(u_inputFrame, v_texCoord).rgb;
      vec3 backgroundColor = texture(u_background, v_backgroundCoord).rgb;
      float personMask = texture(u_personMask, v_texCoord).a;
      float lightWrapMask = 1.0 - max(0.0, personMask - u_coverage.y) / (1.0 - u_coverage.y);
      vec3 lightWrap = u_lightWrapping * lightWrapMask * backgroundColor;
      frameColor = u_blendMode * linearDodge(frameColor, lightWrap) +
        (1.0 - u_blendMode) * screen(frameColor, lightWrap);
      personMask = smoothstep(u_coverage.x, u_coverage.y, personMask);
      outColor = vec4(frameColor * personMask + backgroundColor * (1.0 - personMask), 1.0);
    }
  `,
    { width: s, height: c } = a,
    l = s / c,
    f = compileShader(e, e.VERTEX_SHADER, i),
    d = compileShader(e, e.FRAGMENT_SHADER, u),
    m = createPipelineStageProgram(e, f, d, t, r),
    g = e.getUniformLocation(m, "u_backgroundScale"),
    p = e.getUniformLocation(m, "u_backgroundOffset"),
    _ = e.getUniformLocation(m, "u_inputFrame"),
    E = e.getUniformLocation(m, "u_personMask"),
    h = e.getUniformLocation(m, "u_background"),
    T = e.getUniformLocation(m, "u_coverage"),
    A = e.getUniformLocation(m, "u_lightWrapping"),
    v = e.getUniformLocation(m, "u_blendMode");
  e.useProgram(m),
    e.uniform2f(g, 1, 1),
    e.uniform2f(p, 0, 0),
    e.uniform1i(E, 1),
    e.uniform2f(T, 0, 1),
    e.uniform1f(A, 0),
    e.uniform1f(v, 0);
  let R = null;
  o &&
    loadImage(o).then((t) => {
      !(function (t) {
        (R = createTexture(e, e.RGBA8, t.width, t.height, e.LINEAR, e.LINEAR)),
          e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, t.width, t.height, e.RGBA, e.UNSIGNED_BYTE, t);
        let r = 0,
          n = 0,
          o = t.width,
          a = t.height;
        o / a < l ? ((a = o / l), (n = (t.height - a) / 2)) : ((o = a * l), (r = (t.width - o) / 2));
        const i = o / t.width,
          u = a / t.height;
        (r /= t.width), (n /= t.height), e.uniform2f(g, i, u), e.uniform2f(p, r, n);
      })(t);
    });
  const b = e.createFramebuffer(),
    S = createTexture(e, e.RGBA8, s, c);
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, b),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, S, 0),
    {
      render: function () {
        return (
          e.viewport(0, 0, s, c),
          e.useProgram(m),
          e.activeTexture(e.TEXTURE0),
          e.uniform1i(_, 0),
          e.activeTexture(e.TEXTURE1),
          e.bindTexture(e.TEXTURE_2D, n),
          null !== R && (e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, R), e.uniform1i(h, 2)),
          e.bindFramebuffer(e.FRAMEBUFFER, null),
          e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
          null
        );
      },
      renderToTexture: function () {
        return (
          e.viewport(0, 0, s, c),
          e.useProgram(m),
          e.activeTexture(e.TEXTURE1),
          e.bindTexture(e.TEXTURE_2D, n),
          e.activeTexture(e.TEXTURE8),
          getAssignedLocationForPreviousResult(e, _),
          null !== R
            ? (e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, R), e.uniform1i(h, 2))
            : getAssignedLocationForPreviousResult(e, h),
          e.bindFramebuffer(e.FRAMEBUFFER, b),
          e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
          S
        );
      },
      updateCoverage: function (t) {
        e.useProgram(m), e.uniform2f(T, t[0], t[1]);
      },
      updateLightWrapping: function (t) {
        e.useProgram(m), e.uniform1f(A, t);
      },
      updateBlendMode: function (t) {
        e.useProgram(m), e.uniform1f(v, "screen" === t ? 0 : 1);
      },
      cleanUp: function () {
        e.deleteFramebuffer(b), e.deleteTexture(S), e.deleteTexture(R), e.deleteProgram(m), e.deleteShader(d), e.deleteShader(f);
      },
      getStageName: function () {
        return WEBGL_BCG_IMAGE_STAGE_NAME;
      }
    }
  );
}
function buildJointBilateralFilterStage(e, t, r, n, o, a, i, u) {
  const s = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform sampler2D u_segmentationMask;
    uniform vec2 u_texelSize;
    uniform float u_step;
    uniform float u_radius;
    uniform float u_offset;
    uniform float u_sigmaTexel;
    uniform float u_sigmaColor;

    in vec2 v_texCoord;

    out vec4 outColor;

    float gaussian(float x, float sigma) {
      float coeff = -0.5 / (sigma * sigma * 4.0 + 1.0e-6);
      return exp((x * x) * coeff);
    }

    void main() {
      vec2 centerCoord = v_texCoord;
      vec3 centerColor = texture(u_inputFrame, centerCoord).rgb;
      float newVal = 0.0;

      float spaceWeight = 0.0;
      float colorWeight = 0.0;
      float totalWeight = 0.0;

      // Subsample kernel space.
      for (float i = -u_radius + u_offset; i <= u_radius; i += u_step) {
        for (float j = -u_radius + u_offset; j <= u_radius; j += u_step) {
          vec2 shift = vec2(j, i) * u_texelSize;
          vec2 coord = vec2(centerCoord + shift);
          vec3 frameColor = texture(u_inputFrame, coord).rgb;
          float outVal = texture(u_segmentationMask, coord).a;

          spaceWeight = gaussian(distance(centerCoord, coord), u_sigmaTexel);
          colorWeight = gaussian(distance(centerColor, frameColor), u_sigmaColor);
          totalWeight += spaceWeight * colorWeight;

          newVal += spaceWeight * colorWeight * outVal;
        }
      }
      newVal /= totalWeight;

      outColor = vec4(vec3(0.0), newVal);
    }
  `,
    [c, l] = INPUT_RESOLUTION_PER_MODEL[a.model],
    { width: f, height: d } = u,
    m = 1 / f,
    g = 1 / d,
    p = compileShader(e, e.FRAGMENT_SHADER, s),
    _ = createPipelineStageProgram(e, t, p, r, n),
    E = e.getUniformLocation(_, "u_inputFrame"),
    h = e.getUniformLocation(_, "u_segmentationMask"),
    T = e.getUniformLocation(_, "u_texelSize"),
    A = e.getUniformLocation(_, "u_step"),
    v = e.getUniformLocation(_, "u_radius"),
    R = e.getUniformLocation(_, "u_offset"),
    b = e.getUniformLocation(_, "u_sigmaTexel"),
    S = e.getUniformLocation(_, "u_sigmaColor"),
    C = e.createFramebuffer();
  function F(t) {
    t *= Math.max(f / c, d / l);
    const r = Math.max(1, 0.66 * Math.sqrt(t)),
      n = t,
      o = r > 1 ? 0.5 * r : 0,
      a = Math.max(m, g) * t;
    e.useProgram(_), e.uniform1f(A, r), e.uniform1f(v, n), e.uniform1f(R, o), e.uniform1f(b, a);
  }
  function P(t) {
    e.useProgram(_), e.uniform1f(S, t);
  }
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, C),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, i, 0),
    e.useProgram(_),
    e.uniform1i(E, 0),
    e.uniform1i(h, 1),
    e.uniform2f(T, m, g),
    F(0),
    P(0),
    {
      render: function () {
        e.viewport(0, 0, f, d),
          e.useProgram(_),
          e.activeTexture(e.TEXTURE1),
          e.bindTexture(e.TEXTURE_2D, o),
          e.bindFramebuffer(e.FRAMEBUFFER, C),
          e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
      },
      updateSigmaSpace: F,
      updateSigmaColor: P,
      cleanUp: function () {
        e.deleteFramebuffer(C), e.deleteProgram(_), e.deleteShader(p);
      }
    }
  );
}
function buildLoadSegmentationStage(e, t, r, n, o, a, i) {
  const u = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputSegmentation;

    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      float segmentation = texture(u_inputSegmentation, v_texCoord).r;
      outColor = vec4(vec3(0.0), segmentation);
    }
  `,
    [s, c] = INPUT_RESOLUTION_PER_MODEL[o.model],
    l = compileShader(e, e.FRAGMENT_SHADER, u),
    f = createPipelineStageProgram(e, t, l, r, n),
    d = e.getUniformLocation(f, "u_inputSegmentation"),
    m = createTexture(e, e.R32F, s, c),
    g = e.createFramebuffer();
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, g),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, i, 0),
    e.useProgram(f),
    e.uniform1i(d, 1),
    {
      render: function () {
        return (
          e.viewport(0, 0, s, c),
          e.useProgram(f),
          e.activeTexture(e.TEXTURE1),
          e.bindTexture(e.TEXTURE_2D, m),
          e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, s, c, e.RED, e.FLOAT, a.read()),
          e.bindFramebuffer(e.FRAMEBUFFER, g),
          e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
          null
        );
      },
      cleanUp: function () {
        e.deleteFramebuffer(g), e.deleteTexture(m), e.deleteProgram(f), e.deleteShader(l);
      },
      getStageName: function () {
        return WEBGL_SEGMENTATION_STAGE_NAME;
      }
    }
  );
}
function buildResizingStage(e, t, r, n, o, a) {
  const i = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;

    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      outColor = texture(u_inputFrame, v_texCoord);
    }
  `,
    [u, s] = INPUT_RESOLUTION_PER_MODEL[o.model],
    c = u * s,
    l = compileShader(e, e.FRAGMENT_SHADER, i),
    f = createPipelineStageProgram(e, t, l, r, n),
    d = e.getUniformLocation(f, "u_inputFrame"),
    m = createTexture(e, e.RGBA8, u, s),
    g = e.createFramebuffer();
  e.bindFramebuffer(e.FRAMEBUFFER, g), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, m, 0);
  const p = new Uint8Array(4 * c);
  return (
    e.useProgram(f),
    e.uniform1i(d, 0),
    {
      render: async function () {
        e.viewport(0, 0, u, s),
          e.useProgram(f),
          e.bindFramebuffer(e.FRAMEBUFFER, g),
          e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
          await readPixelsAsync(e, 0, 0, u, s, e.RGBA, e.UNSIGNED_BYTE, p),
          a.write(p);
      },
      cleanUp: function () {
        e.deleteFramebuffer(g), e.deleteTexture(m), e.deleteProgram(f), e.deleteShader(l);
      }
    }
  );
}
function buildSoftmaxStage(e, t, r, n, o, a, i) {
  const u = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputSegmentation;

    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      vec2 segmentation = texture(u_inputSegmentation, v_texCoord).rg;
      float shift = max(segmentation.r, segmentation.g);
      float backgroundExp = exp(segmentation.r - shift);
      float personExp = exp(segmentation.g - shift);
      outColor = vec4(vec3(0.0), personExp / (backgroundExp + personExp));
    }
  `,
    [s, c] = INPUT_RESOLUTION_PER_MODEL[o.model],
    l = compileShader(e, e.FRAGMENT_SHADER, u),
    f = createPipelineStageProgram(e, t, l, r, n),
    d = e.getUniformLocation(f, "u_inputSegmentation"),
    m = createTexture(e, e.RG32F, s, c),
    g = e.createFramebuffer();
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, g),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, i, 0),
    e.useProgram(f),
    e.uniform1i(d, 1),
    {
      render: function () {
        return (
          e.viewport(0, 0, s, c),
          e.useProgram(f),
          e.activeTexture(e.TEXTURE1),
          e.bindTexture(e.TEXTURE_2D, m),
          e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, s, c, e.RG, e.FLOAT, a.read()),
          e.bindFramebuffer(e.FRAMEBUFFER, g),
          e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
          null
        );
      },
      cleanUp: function () {
        e.deleteFramebuffer(g), e.deleteTexture(m), e.deleteProgram(f), e.deleteShader(l);
      },
      getStageName: function () {
        return WEBGL_SOFTMAX_STAGE_NAME;
      }
    }
  );
}
function buildWebGL2Pipeline(e, t, r, n, o, a) {
  const i = n.getContext("2d"),
    u = new OffscreenCanvas(n.width, n.height),
    s = glsl`#version 300 es

    in vec2 a_position;
    in vec2 a_texCoord;

    out vec2 v_texCoord;

    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      v_texCoord = a_texCoord;
    }
  `,
    { width: c, height: l } = e,
    [f, d] = INPUT_RESOLUTION_PER_MODEL[r.model],
    m = u.getContext("webgl2"),
    g = compileShader(m, m.VERTEX_SHADER, s),
    p = m.createVertexArray();
  m.bindVertexArray(p);
  const _ = m.createBuffer();
  m.bindBuffer(m.ARRAY_BUFFER, _), m.bufferData(m.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), m.STATIC_DRAW);
  const E = m.createBuffer();
  m.bindBuffer(m.ARRAY_BUFFER, E), m.bufferData(m.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), m.STATIC_DRAW);
  const h = m.createTexture();
  m.bindTexture(m.TEXTURE_2D, h),
    m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE),
    m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE),
    m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST),
    m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST);
  const T = createTexture(m, m.RGBA8, f, d),
    A = createTexture(m, m.RGBA8, c, l),
    v = buildResizingStage(m, g, _, E, r, o),
    R = r.model.startsWith("meet") ? buildSoftmaxStage(m, g, _, E, r, o, T) : buildLoadSegmentationStage(m, g, _, E, r, o, T),
    b = buildJointBilateralFilterStage(m, g, _, E, T, r, A, u),
    S = "blur" === t.type ? buildBackgroundBlurStage(m, g, _, E, A, u) : buildBackgroundImageStage(m, _, E, A, t.url || null, u);
  return {
    render: async function () {
      m.activeTexture(m.TEXTURE0),
        m.bindTexture(m.TEXTURE_2D, h),
        m.texImage2D(m.TEXTURE_2D, 0, m.RGBA, m.RGBA, m.UNSIGNED_BYTE, await e.readBitmap()),
        m.bindVertexArray(p),
        await v.render(),
        a(),
        o.run(),
        a(),
        R.render(),
        b.render(),
        S.render(),
        i.drawImage(u, 0, 0);
    },
    updatePostProcessingConfig: function (e) {
      if (
        (b.updateSigmaSpace(e.jointBilateralFilter.sigmaSpace), b.updateSigmaColor(e.jointBilateralFilter.sigmaColor), "image" === t.type)
      ) {
        const t = S;
        t.updateCoverage(e.coverage), t.updateLightWrapping(e.lightWrapping), t.updateBlendMode(e.blendMode);
      } else if ("blur" === t.type) S.updateCoverage(e.coverage);
      else {
        const e = S;
        e.updateCoverage([0, 0.9999]), e.updateLightWrapping(0);
      }
    },
    cleanUp: function () {
      S.cleanUp(),
        b.cleanUp(),
        R.cleanUp(),
        v.cleanUp(),
        m.deleteTexture(A),
        m.deleteTexture(T),
        m.deleteTexture(h),
        m.deleteBuffer(E),
        m.deleteBuffer(_),
        m.deleteVertexArray(p),
        m.deleteShader(g);
    }
  };
}
var RADIUS = 3;
function buildBlemishSmoothingStage(e, t, r, n, o, a) {
  const i = glsl`#version 300 es
          in vec2 a_position;
          in vec2 a_texCoord;
  
          out vec2 v_texCoord;
  
          void main() {
              // Flipping Y is required when rendering to canvas
              gl_Position = vec4(a_position, 0.0, 1.0);
              // gl_Position = vec4(a_position, 0.0, 1.0);
              v_texCoord = a_texCoord;
          }
      `,
    u = glsl`#version 300 es
          precision highp float;

          // Input frame is from the previous step
          uniform sampler2D u_inputFrame;
          uniform sampler2D u_personMask;
  
          uniform vec2 u_texelSize;
          uniform float u_step;
          uniform float u_radius;
          uniform float u_sigmaTexel;
          uniform float u_sigmaColor;
  
          in vec2 v_texCoord;
  
          out vec4 outColor;
  
          float gaussian(float x, float sigma) {
              float coeff = -0.5 / (sigma * sigma * 4.0 + 1.0e-6);
              return exp((x * x) * coeff);
          }
  
          void main() {
              vec2 centerCoord = v_texCoord;
              vec3 centerColor = texture(u_inputFrame, centerCoord).rgb;
  
              float personMask = texture(u_personMask, v_texCoord).a;
  
              float spaceWeight = 0.0;
              float colorWeight = 0.0;
              float totalWeight = 0.0;
              vec3 newVal = vec3(0.0,0.0,0.0);
  
              // Subsample kernel space
              for (float i = -u_radius; i <= u_radius; i += u_step) {
                  for (float j = -u_radius; j <= u_radius; j += u_step) {
                      vec2 shift = vec2(j, i) * u_texelSize;
                      vec2 coord = centerCoord + shift;
                      vec3 frameColor = texture(u_inputFrame, coord).rgb;
          
                      spaceWeight = gaussian(distance(centerCoord, coord), u_sigmaTexel);
                      colorWeight = gaussian(distance(centerColor, frameColor), u_sigmaColor);
                      totalWeight += spaceWeight * colorWeight;
          
                      newVal += spaceWeight * colorWeight * frameColor;
                  }
              }
              
              newVal /= totalWeight;
              outColor = vec4(centerColor * (1.0 - personMask) + newVal * personMask, 1.0);
          }
      `,
    [s, c] = INPUT_RESOLUTION_PER_MODEL[a.model],
    { width: l, height: f } = o,
    d = 1 / f,
    m = 1 / l,
    g = compileShader(e, e.VERTEX_SHADER, i),
    p = compileShader(e, e.FRAGMENT_SHADER, u),
    _ = createPipelineStageProgram(e, g, p, t, r),
    E = e.getUniformLocation(_, "u_inputFrame"),
    h = e.getUniformLocation(_, "u_personMask"),
    T = e.getUniformLocation(_, "u_texelSize"),
    A = e.getUniformLocation(_, "u_step"),
    v = e.getUniformLocation(_, "u_radius"),
    R = e.getUniformLocation(_, "u_sigmaTexel"),
    b = e.getUniformLocation(_, "u_sigmaColor"),
    S = e.createFramebuffer(),
    C = createTexture(e, e.RGBA8, l, f);
  function F(t) {
    const r = t * Math.max(l / s, f / c),
      n = Math.max(m, d) * r;
    e.useProgram(_), e.uniform1f(R, n);
  }
  function P(t) {
    e.useProgram(_), e.uniform1f(b, t);
  }
  function x(t) {
    const r = t * Math.max(l / s, f / c),
      n = r / 5;
    e.useProgram(_), e.uniform1f(v, r), e.uniform1f(A, n);
  }
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, S),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, C, 0),
    e.useProgram(_),
    e.uniform1i(h, 1),
    e.uniform2f(T, m, d),
    F(0),
    P(0),
    x(RADIUS),
    {
      render: function () {
        return (
          e.viewport(0, 0, l, f),
          e.useProgram(_),
          e.activeTexture(e.TEXTURE1),
          e.bindTexture(e.TEXTURE_2D, n),
          getAssignedLocationForPreviousResult(e, E),
          e.bindFramebuffer(e.FRAMEBUFFER, S),
          e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
          C
        );
      },
      getStageName: function () {
        return WEBGL_BLEMISH_SMOOTHING_STAGE_NAME;
      },
      updateSigmaSpace: F,
      updateSigmaColor: P,
      updateRadius: x,
      cleanUp: function () {
        e.deleteTexture(C), e.deleteFramebuffer(S), e.deleteProgram(_), e.deleteShader(p);
      }
    }
  );
}
function buildContrastAdjustmentsStage(e, t, r, n, o) {
  const a = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform float u_contrastAdjustment;

    in vec2 v_texCoord;

    out vec4 outColor;

    vec3 adjustColorContrast(vec3 frameColor, float contrastAdjustment) {
      return 0.5 + (1.0 + contrastAdjustment) * (frameColor - 0.5);
    }
    
    void main() {
      vec4 frameColor = texture(u_inputFrame, v_texCoord);
      float frameAlpha = frameColor.a;
      
      vec3 updatedFrameContrastColor = adjustColorContrast(frameColor.rgb, u_contrastAdjustment);

      outColor = vec4(updatedFrameContrastColor, frameAlpha);
    }
  `,
    { width: i, height: u } = o,
    s = compileShader(e, e.FRAGMENT_SHADER, a),
    c = createPipelineStageProgram(e, t, s, r, n),
    l = e.getUniformLocation(c, "u_inputFrame"),
    f = e.getUniformLocation(c, "u_contrastAdjustment");
  e.useProgram(c), e.uniform1i(l, 8);
  const d = e.createFramebuffer(),
    m = createTexture(e, e.RGBA8, i, u);
  function g(t) {
    e.useProgram(c), e.uniform1f(f, t);
  }
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, d),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, m, 0),
    g(0),
    {
      cleanUp: function () {
        e.deleteFramebuffer(d), e.deleteProgram(c), e.deleteShader(s), e.deleteShader(t);
      },
      render: function () {
        return e.viewport(0, 0, i, u), e.useProgram(c), e.bindFramebuffer(e.FRAMEBUFFER, d), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), m;
      },
      updateContrastAdjustment: g,
      getStageName: function () {
        return WEBGL_CONTRAST_STAGE_NAME;
      }
    }
  );
}
function buildLowLightAdjustmentsStage(e, t, r, n, o) {
  const a = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform float u_brightnessAdjustment;

    in vec2 v_texCoord;

    out vec4 outColor;

    vec3 adjustColorBrightness(vec3 frameColor, float brightnessAdjustment) {
      return frameColor + brightnessAdjustment;
    }
    
    void main() {
      vec4 frameColor = texture(u_inputFrame, v_texCoord);
      float frameAlpha = frameColor.a;

      vec3 updatedFrameBrightnessColor = adjustColorBrightness(frameColor.rgb, u_brightnessAdjustment);

      outColor = vec4(updatedFrameBrightnessColor, frameAlpha);
    }
  `,
    { width: i, height: u } = o,
    s = compileShader(e, e.FRAGMENT_SHADER, a),
    c = createPipelineStageProgram(e, t, s, r, n),
    l = e.getUniformLocation(c, "u_inputFrame"),
    f = e.getUniformLocation(c, "u_brightnessAdjustment");
  e.useProgram(c), e.uniform1i(l, 8);
  const d = e.createFramebuffer(),
    m = createTexture(e, e.RGBA8, i, u);
  function g(t) {
    e.useProgram(c), e.uniform1f(f, t);
  }
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, d),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, m, 0),
    g(0),
    {
      cleanUp: function () {
        e.deleteFramebuffer(d), e.deleteProgram(c), e.deleteShader(s), e.deleteShader(t);
      },
      render: function () {
        return e.viewport(0, 0, i, u), e.useProgram(c), e.bindFramebuffer(e.FRAMEBUFFER, d), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), m;
      },
      updateBrightnessAdjustment: g,
      getStageName: function () {
        return WEBGL_LOW_LIGHT_STAGE_NAME;
      }
    }
  );
}
function writeTextureToCanvasStage(e, t, r, n) {
  const o = glsl`#version 300 es
        in vec2 a_position;
        in vec2 a_texCoord;

        out vec2 v_texCoord;

        void main() {
            // Flipping Y is required when rendering to canvas
            // TODO: Revert this comment when we completely move over to the V2 pipeline.
            // Background image stage for the old version already flips it
            // gl_Position = vec4(a_position * vec2(1.0, -1.0), 0.0, 1.0);
            gl_Position = vec4(a_position, 0.0, 1.0);
            v_texCoord = a_texCoord;
        }
    `,
    a = glsl`#version 300 es
        precision highp float;

        uniform sampler2D u_previousResult;
        in vec2 v_texCoord;

        out vec4 outColor;

        void main() {
            outColor = texture(u_previousResult, v_texCoord).rgba;
        }
    `,
    { width: i, height: u } = n,
    s = compileShader(e, e.VERTEX_SHADER, o),
    c = compileShader(e, e.FRAGMENT_SHADER, a),
    l = createPipelineStageProgram(e, s, c, t, r),
    f = e.getUniformLocation(l, "u_previousResult");
  return {
    render: function () {
      return (
        e.viewport(0, 0, i, u),
        e.useProgram(l),
        getAssignedLocationForPreviousResult(e, f),
        e.bindFramebuffer(e.FRAMEBUFFER, null),
        e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
        null
      );
    },
    cleanUp: function () {
      e.deleteProgram(l), e.deleteShader(c);
    },
    getStageName: function () {
      return WEBGL_WRITE_TO_CANVAS_STAGE_NAME;
    }
  };
}
function buildWebGL2PipelineSequentialStaging(e, t, r, n, o, a, i, u, s, c) {
  const l = [],
    f = n.getContext("2d"),
    d = new OffscreenCanvas(n.width, n.height),
    m = glsl`#version 300 es

    in vec2 a_position;
    in vec2 a_texCoord;

    out vec2 v_texCoord;

    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      v_texCoord = a_texCoord;
    }
  `,
    { width: g, height: p } = e,
    [_, E] = INPUT_RESOLUTION_PER_MODEL[r.model],
    h = d.getContext("webgl2"),
    T = compileShader(h, h.VERTEX_SHADER, m),
    A = h.createVertexArray();
  h.bindVertexArray(A);
  const v = h.createBuffer();
  h.bindBuffer(h.ARRAY_BUFFER, v), h.bufferData(h.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), h.STATIC_DRAW);
  const R = h.createBuffer();
  h.bindBuffer(h.ARRAY_BUFFER, R), h.bufferData(h.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), h.STATIC_DRAW);
  const b = h.createTexture();
  h.bindTexture(h.TEXTURE_2D, b),
    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE),
    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE),
    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST),
    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST);
  const S = createTexture(h, h.RGBA8, _, E),
    C = createTexture(h, h.RGBA8, g, p);
  let F;
  const P = buildResizingStage(h, T, v, R, r, o),
    x = r.model.startsWith("meet") ? buildSoftmaxStage(h, T, v, R, r, o, S) : buildLoadSegmentationStage(h, T, v, R, r, o, S),
    y = buildJointBilateralFilterStage(h, T, v, R, S, r, C, d),
    w = "blur" === t.type ? buildBackgroundBlurStage(h, T, v, R, C, d) : buildBackgroundImageStage(h, v, R, C, t.url || null, d),
    U = u ? buildLowLightAdjustmentsStage(h, T, v, R, d) : null,
    M = s ? buildContrastAdjustmentsStage(h, T, v, R, d) : null,
    I = i ? buildBlemishSmoothingStage(h, v, R, C, d, r) : null;
  return (
    l.push(
      U,
      M,
      I,
      { render: w.renderToTexture, cleanUp: w.cleanUp, getStageName: () => WEBGL_RENDER_BACKGROUND_TO_TEXTURE_STAGE_NAME },
      writeTextureToCanvasStage(h, v, R, n)
    ),
    {
      render: async function (t = !1) {
        const r = performance.now();
        h.activeTexture(h.TEXTURE0),
          h.bindTexture(h.TEXTURE_2D, b),
          h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, await e.readBitmap()),
          h.bindVertexArray(A),
          await P.render(),
          a();
        const n = performance.now();
        await o.run(),
          t && (null == c || c(performance.now() - n, WEBGL_SEGMENTATION_TFLITE_STAGE_NAME)),
          a(),
          x.render(),
          y.render(),
          allocateUnitForPreviousTexture(h, b),
          l.forEach((e) => {
            (F = null == e ? void 0 : e.render()), F && allocateUnitForPreviousTexture(h, F);
          }),
          f.drawImage(d, 0, 0),
          t && (null == c || c(performance.now() - r, WEBGL_STAGE_COMPLETE));
      },
      updateBrightnessAdjustment: function (e) {
        var t, r;
        u && (null == (t = null == U ? void 0 : U.updateBrightnessAdjustment) || t.call(U, e)),
          s && (null == (r = null == M ? void 0 : M.updateContrastAdjustment) || r.call(M, BRIGHTNESS_TO_CONTRAST_RATIO * e));
      },
      updatePostProcessingConfig: function (e) {
        var r, n;
        if (
          (y.updateSigmaSpace(e.jointBilateralFilter.sigmaSpace),
          y.updateSigmaColor(e.jointBilateralFilter.sigmaColor),
          null == (r = null == I ? void 0 : I.updateSigmaSpace) || r.call(I, e.blemishSmoothingFilter.sigmaSpace),
          null == (n = null == I ? void 0 : I.updateSigmaColor) || n.call(I, e.blemishSmoothingFilter.sigmaColor),
          "image" === t.type)
        ) {
          const t = w;
          t.updateCoverage(e.coverage), t.updateLightWrapping(e.lightWrapping), t.updateBlendMode(e.blendMode);
        } else if ("blur" === t.type) w.updateCoverage(e.coverage);
        else {
          const e = w;
          e.updateCoverage([0, 0.9999]), e.updateLightWrapping(0);
        }
      },
      cleanUp: function () {
        l.forEach((e) => (null == e ? void 0 : e.cleanUp())),
          y.cleanUp(),
          x.cleanUp(),
          P.cleanUp(),
          h.deleteTexture(C),
          h.deleteTexture(S),
          h.deleteTexture(b),
          F && h.deleteTexture(F),
          h.deleteBuffer(R),
          h.deleteBuffer(v),
          h.deleteVertexArray(A),
          h.deleteShader(T);
      }
    }
  );
}
var FPS_REPORT_INTERVAL_MS = 1e3,
  MAX_FPS_CAP = 30,
  RequestChannel = class {
    constructor(e) {
      (this.port = e),
        (this.pendingRequests = {}),
        (this.requestCb = {}),
        (e.onmessage = (e) => {
          const t = this.requestCb[e.data.type];
          t && t(e.data), this.fulfillPendingRequest(e);
        });
    }
    on(e, t) {
      this.requestCb[e] = t;
    }
    send(e) {
      const t = e.responseType && this.pendingRequests[e.responseType];
      if (t) return t.promise;
      this.port.postMessage(__spreadValues({ type: e.requestType }, "object" == typeof e.data ? e.data : {}));
      let r, n;
      const o = new Promise((e, t) => {
        (r = e), (n = t);
      });
      return e.responseType && (this.pendingRequests[e.responseType] = { promise: o, resolve: r, reject: n }), o;
    }
    fulfillPendingRequest(e) {
      const t = e.data.type,
        r = this.pendingRequests[t];
      r && (r.resolve(e.data), (this.pendingRequests[t] = void 0));
    }
  },
  RenderingLoop = class {
    constructor(e, t) {
      (this.pipeline = e), (this.requestChannel = t), (this.frameCount = 0), (this.previousTimeMs = Date.now()), (this.stopped = !1);
    }
    start() {
      this.render();
    }
    stop() {
      (this.stopped = !0), this.pipeline.cleanUp();
    }
    updateBrightnessAdjustment(e) {
      var t, r;
      null == (r = null == (t = this.pipeline) ? void 0 : t.updateBrightnessAdjustment) || r.call(t, e);
    }
    endFrame() {
      const e = Date.now();
      if ((this.frameCount++, e >= this.previousTimeMs + FPS_REPORT_INTERVAL_MS)) {
        const t = Math.round((this.frameCount * FPS_REPORT_INTERVAL_MS) / (e - this.previousTimeMs));
        this.requestChannel.send({ requestType: "report-fps", data: { fps: t } }), (this.previousTimeMs = e), (this.frameCount = 0);
      }
    }
    async render() {
      if (this.stopped) return;
      let e = Math.round(1e3 / MAX_FPS_CAP);
      const t = performance.now();
      await this.pipeline.render(),
        this.endFrame(),
        (e = Math.max(0, e - (performance.now() - t))),
        setTimeout(async () => {
          await this.render();
        }, e);
    }
  },
  WorkerServer = class {
    constructor(e) {
      (this.args = e), (this.adjustmentIntervalId = null), (this.brightnessAdjustment = 0), (this.previousBrightnessPercentage = -1 / 0);
      const {
          background: t,
          segmentationConfig: r,
          postProcessingConfig: n,
          segmenter: o,
          renderTarget: a,
          requestChannel: i,
          sourceInfo: u,
          useV2SequentialPipeline: s,
          withContrastAdjustments: c,
          withLowLightAdjustments: l
        } = e,
        f = this.createFrameProvider(u),
        d = s
          ? buildWebGL2PipelineSequentialStaging(f, toBackgroundConfig(t), r, a, o, () => {}, !1, l, c)
          : buildWebGL2Pipeline(f, toBackgroundConfig(t), r, a, o, () => {});
      d.updatePostProcessingConfig(n),
        (this.requestChannel = i),
        (this.renderingLoop = new RenderingLoop(d, this.requestChannel)),
        this.requestChannel.on("stop", this.stop.bind(this)),
        l && this.createAdjustmentIntervalId(f, n.brightnessThresholds);
    }
    start() {
      this.renderingLoop.start();
    }
    stop() {
      this.renderingLoop.stop();
    }
    rebuild(e) {
      const {
        background: t,
        postProcessingConfig: r,
        useV2SequentialPipeline: n,
        withContrastAdjustments: o,
        withLowLightAdjustments: a
      } = e;
      return (
        this.stop(),
        this.clearAdjustmentInterval(),
        new WorkerServer(
          __spreadProps(__spreadValues({}, this.args), {
            background: t || this.args.background,
            postProcessingConfig: r || this.args.postProcessingConfig,
            useV2SequentialPipeline: "boolean" == typeof n ? n : this.args.useV2SequentialPipeline,
            withContrastAdjustments: "boolean" == typeof o ? o : this.args.withContrastAdjustments,
            withLowLightAdjustments: "boolean" == typeof a ? a : this.args.withLowLightAdjustments
          })
        )
      );
    }
    clearAdjustmentInterval() {
      this.adjustmentIntervalId &&
        (clearInterval(this.adjustmentIntervalId),
        (this.adjustmentIntervalId = null),
        (this.previousBrightnessPercentage = -1 / 0),
        (this.brightnessAdjustment = 0));
    }
    createAdjustmentIntervalId(e, t) {
      this.clearAdjustmentInterval();
      const r = setInterval(async () => {
        const r = calculateBrightnessPercentage(await e.readArrayBuffer()),
          { increment: n } = getCurrentBrightnessAdjustment(r, t);
        n !== this.brightnessAdjustment &&
          shouldUpdateBrightnessAdjustmentRelativeToLastUpdate(r, this.previousBrightnessPercentage) &&
          ((this.previousBrightnessPercentage = r), (this.brightnessAdjustment = n), this.renderingLoop.updateBrightnessAdjustment(n));
      }, LOW_LIGHT_TIMEOUT_MS);
      this.adjustmentIntervalId = r;
    }
    createFrameProvider(e) {
      return {
        readBitmap: async () =>
          (
            await this.requestChannel.send({
              requestType: "pull-frame-bitmap",
              responseType: "push-frame-bitmap",
              onReject: (t) => (
                this.requestChannel.send({ requestType: "error", data: { error: t } }),
                this.stop(),
                createImageBitmap(new ImageData(e.width, e.height))
              )
            })
          ).frame,
        readArrayBuffer: async () =>
          new Uint8ClampedArray(
            (
              await this.requestChannel.send({
                requestType: "pull-frame-array-buffer",
                responseType: "push-frame-array-buffer",
                onReject: (t) => (
                  this.requestChannel.send({ requestType: "error", data: { error: t } }),
                  this.stop(),
                  new Uint8ClampedArray(e.width * e.height * 4)
                )
              })
            ).frame
          ),
        width: e.width,
        height: e.height
      };
    }
  },
  segmenter = null,
  server = null;
self.onconnect = function (e) {
  let t = buildSegmentationConfig({});
  segmenter = null != segmenter ? segmenter : buildSegmenter(t);
  const r = e.ports[0],
    n = new RequestChannel(r);
  n.on("set-render-target", async (e) => {
    if (!segmenter) throw new Error("failed to create segmenter");
    JSON.stringify(t) !== JSON.stringify(e.background.segmentationConfig) &&
      ((t = e.background.segmentationConfig), (segmenter = buildSegmenter(t))),
      server && server.clearAdjustmentInterval(),
      server && server.stop(),
      (server = new WorkerServer({
        background: e.background.selected,
        segmentationConfig: e.background.segmentationConfig,
        postProcessingConfig: e.background.postProcessingConfig,
        segmenter: await segmenter,
        renderTarget: e.renderTarget,
        requestChannel: n,
        sourceInfo: e.sourceInfo,
        withContrastAdjustments: e.featureFlags.withContrastAdjustments,
        withLowLightAdjustments: e.featureFlags.withLowLightAdjustments,
        useV2SequentialPipeline: e.featureFlags.useV2SequentialPipeline
      })).start();
  }),
    n.on("set-background-settings", (e) => {
      server
        ? (server = server.rebuild(e)).start()
        : n.send({ requestType: "error", data: { message: "Invalid request, server hasn't been initialized yet" } });
    }),
    n.on("set-post-processing-config", (e) => {
      server
        ? (server = server.rebuild(e)).start()
        : n.send({ requestType: "error", data: { message: "Invalid request, server hasn't been initialized yet" } });
    }),
    n.on("set-worker-state", (e) => {
      server
        ? (server = server.rebuild(e)).start()
        : n.send({ requestType: "error", data: { message: "Invalid request, server hasn't been initialized yet" } });
    });
};
!(function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = new Error().stack;
    n && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[n] = "3a80f9dd-0bca-5eec-895c-0f218c0cb400"));
  } catch (e) {}
})();
//# debugId=3a80f9dd-0bca-5eec-895c-0f218c0cb400
