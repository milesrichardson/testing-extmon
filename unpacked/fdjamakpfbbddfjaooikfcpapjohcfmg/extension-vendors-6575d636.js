/*! For license information please see extension-vendors-6575d636.js.LICENSE.txt */
(self.webpackChunk_dashlane_amphora = self.webpackChunk_dashlane_amphora || []).push([
  [642],
  {
    66632: (e, t, r) => {
      var n = r(73656);
      function i(e) {
        (this._db = e), (this._operations = []), (this._written = !1);
      }
      (i.prototype._checkWritten = function () {
        if (this._written) throw new Error("write() already called on this batch");
      }),
        (i.prototype.put = function (e, t) {
          this._checkWritten();
          var r = this._db._checkKeyValue(e, "key", this._db._isBuffer);
          if (r) throw r;
          if ((r = this._db._checkKeyValue(t, "value", this._db._isBuffer))) throw r;
          return (
            this._db._isBuffer(e) || (e = String(e)),
            this._db._isBuffer(t) || (t = String(t)),
            "function" == typeof this._put ? this._put(e, t) : this._operations.push({ type: "put", key: e, value: t }),
            this
          );
        }),
        (i.prototype.del = function (e) {
          this._checkWritten();
          var t = this._db._checkKeyValue(e, "key", this._db._isBuffer);
          if (t) throw t;
          return (
            this._db._isBuffer(e) || (e = String(e)),
            "function" == typeof this._del ? this._del(e) : this._operations.push({ type: "del", key: e }),
            this
          );
        }),
        (i.prototype.clear = function () {
          return this._checkWritten(), (this._operations = []), "function" == typeof this._clear && this._clear(), this;
        }),
        (i.prototype.write = function (e, t) {
          if ((this._checkWritten(), "function" == typeof e && (t = e), "function" != typeof t))
            throw new Error("write() requires a callback argument");
          return (
            "object" != typeof e && (e = {}),
            (this._written = !0),
            "function" == typeof this._write
              ? this._write(t)
              : "function" == typeof this._db._batch
              ? this._db._batch(this._operations, e, t)
              : void n.nextTick(t)
          );
        }),
        (e.exports = i);
    },
    65200: (e, t, r) => {
      var n = r(73656);
      function i(e) {
        (this.db = e), (this._ended = !1), (this._nexting = !1);
      }
      (i.prototype.next = function (e) {
        var t = this;
        if ("function" != typeof e) throw new Error("next() requires a callback argument");
        return t._ended
          ? e(new Error("cannot call next() after end()"))
          : t._nexting
          ? e(new Error("cannot call next() before previous next() has completed"))
          : ((t._nexting = !0),
            "function" == typeof t._next
              ? t._next(function () {
                  (t._nexting = !1), e.apply(null, arguments);
                })
              : void n.nextTick(function () {
                  (t._nexting = !1), e();
                }));
      }),
        (i.prototype.end = function (e) {
          if ("function" != typeof e) throw new Error("end() requires a callback argument");
          return this._ended
            ? e(new Error("end() already called on iterator"))
            : ((this._ended = !0), "function" == typeof this._end ? this._end(e) : void n.nextTick(e));
        }),
        (e.exports = i);
    },
    2420: (e, t, r) => {
      var n = r(73656),
        i = r(15313).Buffer,
        o = r(88109),
        s = r(65200),
        a = r(66632);
      function c(e) {
        if (!arguments.length || void 0 === e) throw new Error("constructor requires at least a location argument");
        if ("string" != typeof e) throw new Error("constructor requires a location string argument");
        this.location = e;
      }
      (c.prototype.open = function (e, t) {
        if (("function" == typeof e && (t = e), "function" != typeof t)) throw new Error("open() requires a callback argument");
        if (("object" != typeof e && (e = {}), "function" == typeof this._open)) return this._open(e, t);
        n.nextTick(t);
      }),
        (c.prototype.close = function (e) {
          if ("function" != typeof e) throw new Error("close() requires a callback argument");
          if ("function" == typeof this._close) return this._close(e);
          n.nextTick(e);
        }),
        (c.prototype.get = function (e, t, r) {
          var i;
          if (("function" == typeof t && (r = t), "function" != typeof r)) throw new Error("get() requires a callback argument");
          return (i = this._checkKeyValue(e, "key", this._isBuffer))
            ? r(i)
            : (this._isBuffer(e) || (e = String(e)),
              "object" != typeof t && (t = {}),
              "function" == typeof this._get
                ? this._get(e, t, r)
                : void n.nextTick(function () {
                    r(new Error("NotFound"));
                  }));
        }),
        (c.prototype.put = function (e, t, r, i) {
          var o;
          if (("function" == typeof r && (i = r), "function" != typeof i)) throw new Error("put() requires a callback argument");
          return (o = this._checkKeyValue(e, "key", this._isBuffer)) || (o = this._checkKeyValue(t, "value", this._isBuffer))
            ? i(o)
            : (this._isBuffer(e) || (e = String(e)),
              this._isBuffer(t) || n.browser || (t = String(t)),
              "object" != typeof r && (r = {}),
              "function" == typeof this._put ? this._put(e, t, r, i) : void n.nextTick(i));
        }),
        (c.prototype.del = function (e, t, r) {
          var i;
          if (("function" == typeof t && (r = t), "function" != typeof r)) throw new Error("del() requires a callback argument");
          return (i = this._checkKeyValue(e, "key", this._isBuffer))
            ? r(i)
            : (this._isBuffer(e) || (e = String(e)),
              "object" != typeof t && (t = {}),
              "function" == typeof this._del ? this._del(e, t, r) : void n.nextTick(r));
        }),
        (c.prototype.batch = function (e, t, r) {
          if (!arguments.length) return this._chainedBatch();
          if (("function" == typeof t && (r = t), "function" != typeof r)) throw new Error("batch(array) requires a callback argument");
          if (!Array.isArray(e)) return r(new Error("batch(array) requires an array argument"));
          "object" != typeof t && (t = {});
          for (var i, o, s = 0, a = e.length; s < a; s++)
            if ("object" == typeof (i = e[s])) {
              if ((o = this._checkKeyValue(i.type, "type", this._isBuffer))) return r(o);
              if ((o = this._checkKeyValue(i.key, "key", this._isBuffer))) return r(o);
              if ("put" == i.type && (o = this._checkKeyValue(i.value, "value", this._isBuffer))) return r(o);
            }
          if ("function" == typeof this._batch) return this._batch(e, t, r);
          n.nextTick(r);
        }),
        (c.prototype.approximateSize = function (e, t, r) {
          if (null == e || null == t || "function" == typeof e || "function" == typeof t)
            throw new Error("approximateSize() requires valid `start`, `end` and `callback` arguments");
          if ("function" != typeof r) throw new Error("approximateSize() requires a callback argument");
          if ((this._isBuffer(e) || (e = String(e)), this._isBuffer(t) || (t = String(t)), "function" == typeof this._approximateSize))
            return this._approximateSize(e, t, r);
          n.nextTick(function () {
            r(null, 0);
          });
        }),
        (c.prototype._setupIteratorOptions = function (e) {
          var t = this;
          return (
            (e = o(e)),
            ["start", "end", "gt", "gte", "lt", "lte"].forEach(function (r) {
              e[r] && t._isBuffer(e[r]) && 0 === e[r].length && delete e[r];
            }),
            (e.reverse = !!e.reverse),
            e.reverse && e.lt && (e.start = e.lt),
            e.reverse && e.lte && (e.start = e.lte),
            !e.reverse && e.gt && (e.start = e.gt),
            !e.reverse && e.gte && (e.start = e.gte),
            ((e.reverse && e.lt && !e.lte) || (!e.reverse && e.gt && !e.gte)) && (e.exclusiveStart = !0),
            e
          );
        }),
        (c.prototype.iterator = function (e) {
          return (
            "object" != typeof e && (e = {}),
            (e = this._setupIteratorOptions(e)),
            "function" == typeof this._iterator ? this._iterator(e) : new s(this)
          );
        }),
        (c.prototype._chainedBatch = function () {
          return new a(this);
        }),
        (c.prototype._isBuffer = function (e) {
          return i.isBuffer(e);
        }),
        (c.prototype._checkKeyValue = function (e, t) {
          if (null == e) return new Error(t + " cannot be `null` or `undefined`");
          if (this._isBuffer(e)) {
            if (0 === e.length) return new Error(t + " cannot be an empty Buffer");
          } else if ("" === String(e)) return new Error(t + " cannot be an empty String");
        }),
        (e.exports.NI = c),
        (e.exports.YI = s);
    },
    23037: (e, t, r) => {
      var n,
        i = r(73656),
        o = "undefined" != typeof self && void 0 !== self.Module ? self.Module : {},
        s = {};
      for (n in o) o.hasOwnProperty(n) && (s[n] = o[n]);
      var a,
        c,
        l = [],
        u = !1,
        f = !1;
      (u = "object" == typeof window),
        (f = "function" == typeof importScripts),
        (a = "object" == typeof i && "object" == typeof i.versions && "string" == typeof i.versions.node),
        (c = !u && !a && !f);
      var h,
        d,
        p,
        g,
        y,
        v = "";
      a
        ? ((v = f ? r(82166).dirname(v) + "/" : "//"),
          (h = function (e, t) {
            return g || (g = r(98645)), y || (y = r(82166)), (e = y.normalize(e)), g.readFileSync(e, t ? null : "utf8");
          }),
          (p = function (e) {
            var t = h(e, !0);
            return t.buffer || (t = new Uint8Array(t)), B(t.buffer), t;
          }),
          i.argv.length > 1 && i.argv[1].replace(/\\/g, "/"),
          (l = i.argv.slice(2)),
          (e.exports = o),
          i.on("uncaughtException", function (e) {
            if (!(e instanceof z)) throw e;
          }),
          i.on("unhandledRejection", R),
          function (e) {
            i.exit(e);
          },
          (o.inspect = function () {
            return "[Emscripten Module object]";
          }))
        : c
        ? ("undefined" != typeof read &&
            (h = function (e) {
              return read(e);
            }),
          (p = function (e) {
            var t;
            return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (B("object" == typeof (t = read(e, "binary"))), t);
          }),
          "undefined" != typeof scriptArgs ? (l = scriptArgs) : "undefined" != typeof arguments && (l = arguments),
          "function" == typeof quit &&
            function (e) {
              quit(e);
            },
          "undefined" != typeof print &&
            ("undefined" == typeof console && (console = {}),
            (console.log = print),
            (console.warn = console.error = "undefined" != typeof printErr ? printErr : print)))
        : (u || f) &&
          (f ? (v = self.location.href) : "undefined" != typeof document && document.currentScript && (v = document.currentScript.src),
          (v = 0 !== v.indexOf("blob:") ? v.substr(0, v.lastIndexOf("/") + 1) : ""),
          (h = function (e) {
            var t = new XMLHttpRequest();
            return t.open("GET", e, !1), t.send(null), t.responseText;
          }),
          f &&
            (p = function (e) {
              var t = new XMLHttpRequest();
              return t.open("GET", e, !1), (t.responseType = "arraybuffer"), t.send(null), new Uint8Array(t.response);
            }),
          (d = function (e, t, r) {
            var n = new XMLHttpRequest();
            n.open("GET", e, !0),
              (n.responseType = "arraybuffer"),
              (n.onload = function () {
                200 == n.status || (0 == n.status && n.response) ? t(n.response) : r();
              }),
              (n.onerror = r),
              n.send(null);
          }));
      o.print || console.log.bind(console);
      var m,
        b = o.printErr || console.warn.bind(console);
      for (n in s) s.hasOwnProperty(n) && (o[n] = s[n]);
      (s = null), o.arguments && (l = o.arguments), o.thisProgram && o.thisProgram, o.quit && o.quit, o.wasmBinary && (m = o.wasmBinary);
      var w;
      o.noExitRuntime;
      "object" != typeof WebAssembly && R("no native wasm support detected");
      var k = !1;
      function B(e, t) {
        e || R("Assertion failed: " + t);
      }
      var E = 1;
      var _,
        S,
        A = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
      function x(e) {
        (_ = e),
          (o.HEAP8 = new Int8Array(e)),
          (o.HEAP16 = new Int16Array(e)),
          (o.HEAP32 = new Int32Array(e)),
          (o.HEAPU8 = S = new Uint8Array(e)),
          (o.HEAPU16 = new Uint16Array(e)),
          (o.HEAPU32 = new Uint32Array(e)),
          (o.HEAPF32 = new Float32Array(e)),
          (o.HEAPF64 = new Float64Array(e));
      }
      o.INITIAL_MEMORY;
      var N,
        O = [],
        C = [],
        U = [];
      var j = 0,
        I = null,
        T = null;
      function R(e) {
        throw (
          (o.onAbort && o.onAbort(e),
          b((e += "")),
          (k = !0),
          1,
          (e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."),
          new WebAssembly.RuntimeError(e))
        );
      }
      (o.preloadedImages = {}), (o.preloadedAudios = {});
      var L = "data:application/octet-stream;base64,";
      function V(e) {
        return e.startsWith(L);
      }
      function H(e) {
        return e.startsWith("file://");
      }
      var D,
        M = "argon2.wasm";
      function F(e) {
        try {
          if (e == M && m) return new Uint8Array(m);
          if (p) return p(e);
          throw "both async and sync fetching of the wasm failed";
        } catch (e) {
          R(e);
        }
      }
      function q(e) {
        for (; e.length > 0; ) {
          var t = e.shift();
          if ("function" != typeof t) {
            var r = t.func;
            "number" == typeof r ? (void 0 === t.arg ? N.get(r)() : N.get(r)(t.arg)) : r(void 0 === t.arg ? null : t.arg);
          } else t(o);
        }
      }
      function P(e) {
        try {
          return w.grow((e - _.byteLength + 65535) >>> 16), x(w.buffer), 1;
        } catch (e) {}
      }
      V(M) || ((D = M), (M = o.locateFile ? o.locateFile(D, v) : v + D));
      var J,
        W = {
          a: function (e, t, r) {
            S.copyWithin(e, t, t + r);
          },
          b: function (e) {
            var t,
              r,
              n = S.length,
              i = 2147418112;
            if ((e >>>= 0) > i) return !1;
            for (var o = 1; o <= 4; o *= 2) {
              var s = n * (1 + 0.2 / o);
              if (((s = Math.min(s, e + 100663296)), P(Math.min(i, ((t = Math.max(e, s)) % (r = 65536) > 0 && (t += r - (t % r)), t)))))
                return !0;
            }
            return !1;
          }
        },
        G =
          ((function () {
            var e = { a: W };
            function t(e, t) {
              var r,
                n = e.exports;
              (o.asm = n),
                x((w = o.asm.c).buffer),
                (N = o.asm.k),
                (r = o.asm.d),
                C.unshift(r),
                (function (e) {
                  if (
                    (j--,
                    o.monitorRunDependencies && o.monitorRunDependencies(j),
                    0 == j && (null !== I && (clearInterval(I), (I = null)), T))
                  ) {
                    var t = T;
                    (T = null), t();
                  }
                })();
            }
            function r(e) {
              t(e.instance);
            }
            function n(t) {
              return (function () {
                if (!m && (u || f)) {
                  if ("function" == typeof fetch && !H(M))
                    return fetch(M, { credentials: "same-origin" })
                      .then(function (e) {
                        if (!e.ok) throw "failed to load wasm binary file at '" + M + "'";
                        return e.arrayBuffer();
                      })
                      .catch(function () {
                        return F(M);
                      });
                  if (d)
                    return new Promise(function (e, t) {
                      d(
                        M,
                        function (t) {
                          e(new Uint8Array(t));
                        },
                        t
                      );
                    });
                }
                return Promise.resolve().then(function () {
                  return F(M);
                });
              })()
                .then(function (t) {
                  return WebAssembly.instantiate(t, e);
                })
                .then(t, function (e) {
                  b("failed to asynchronously prepare wasm: " + e), R(e);
                });
            }
            if ((j++, o.monitorRunDependencies && o.monitorRunDependencies(j), o.instantiateWasm))
              try {
                return o.instantiateWasm(e, t);
              } catch (e) {
                return b("Module.instantiateWasm callback failed with error: " + e), !1;
              }
            m || "function" != typeof WebAssembly.instantiateStreaming || V(M) || H(M) || "function" != typeof fetch
              ? n(r)
              : fetch(M, { credentials: "same-origin" }).then(function (t) {
                  return WebAssembly.instantiateStreaming(t, e).then(r, function (e) {
                    return b("wasm streaming compile failed: " + e), b("falling back to ArrayBuffer instantiation"), n(r);
                  });
                });
          })(),
          (o.___wasm_call_ctors = function () {
            return (o.___wasm_call_ctors = o.asm.d).apply(null, arguments);
          }),
          (o._argon2_hash = function () {
            return (o._argon2_hash = o.asm.e).apply(null, arguments);
          }),
          (o._malloc = function () {
            return (G = o._malloc = o.asm.f).apply(null, arguments);
          })),
        $ =
          ((o._free = function () {
            return (o._free = o.asm.g).apply(null, arguments);
          }),
          (o._argon2_verify = function () {
            return (o._argon2_verify = o.asm.h).apply(null, arguments);
          }),
          (o._argon2_error_message = function () {
            return (o._argon2_error_message = o.asm.i).apply(null, arguments);
          }),
          (o._argon2_encodedlen = function () {
            return (o._argon2_encodedlen = o.asm.j).apply(null, arguments);
          }),
          (o._argon2_hash_ext = function () {
            return (o._argon2_hash_ext = o.asm.l).apply(null, arguments);
          }),
          (o._argon2_verify_ext = function () {
            return (o._argon2_verify_ext = o.asm.m).apply(null, arguments);
          }),
          (o.stackAlloc = function () {
            return ($ = o.stackAlloc = o.asm.n).apply(null, arguments);
          }));
      function z(e) {
        (this.name = "ExitStatus"), (this.message = "Program terminated with exit(" + e + ")"), (this.status = e);
      }
      function K(e) {
        function t() {
          J ||
            ((J = !0),
            (o.calledRun = !0),
            k ||
              (!0,
              q(C),
              o.onRuntimeInitialized && o.onRuntimeInitialized(),
              (function () {
                if (o.postRun)
                  for ("function" == typeof o.postRun && (o.postRun = [o.postRun]); o.postRun.length; )
                    (e = o.postRun.shift()), U.unshift(e);
                var e;
                q(U);
              })()));
        }
        (e = e || l),
          j > 0 ||
            (!(function () {
              if (o.preRun)
                for ("function" == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length; ) (e = o.preRun.shift()), O.unshift(e);
              var e;
              q(O);
            })(),
            j > 0 ||
              (o.setStatus
                ? (o.setStatus("Running..."),
                  setTimeout(function () {
                    setTimeout(function () {
                      o.setStatus("");
                    }, 1),
                      t();
                  }, 1))
                : t()));
      }
      if (
        ((o.allocate = function (e, t) {
          var r;
          return (r = t == E ? $(e.length) : G(e.length)), e.subarray || e.slice ? S.set(e, r) : S.set(new Uint8Array(e), r), r;
        }),
        (o.UTF8ToString = function (e, t) {
          return e
            ? (function (e, t, r) {
                for (var n = t + r, i = t; e[i] && !(i >= n); ) ++i;
                if (i - t > 16 && e.subarray && A) return A.decode(e.subarray(t, i));
                for (var o = ""; t < i; ) {
                  var s = e[t++];
                  if (128 & s) {
                    var a = 63 & e[t++];
                    if (192 != (224 & s)) {
                      var c = 63 & e[t++];
                      if (
                        (s = 224 == (240 & s) ? ((15 & s) << 12) | (a << 6) | c : ((7 & s) << 18) | (a << 12) | (c << 6) | (63 & e[t++])) <
                        65536
                      )
                        o += String.fromCharCode(s);
                      else {
                        var l = s - 65536;
                        o += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l));
                      }
                    } else o += String.fromCharCode(((31 & s) << 6) | a);
                  } else o += String.fromCharCode(s);
                }
                return o;
              })(S, e, t)
            : "";
        }),
        (o.ALLOC_NORMAL = 0),
        (T = function e() {
          J || K(), J || (T = e);
        }),
        (o.run = K),
        o.preInit)
      )
        for ("function" == typeof o.preInit && (o.preInit = [o.preInit]); o.preInit.length > 0; ) o.preInit.pop()();
      K(),
        (e.exports = o),
        (o.unloadRuntime = function () {
          "undefined" != typeof self && delete self.Module, (o = w = N = _ = S = void 0), delete e.exports;
        });
    },
    35558: function (e, t, r) {
      var n,
        i,
        o,
        s = r(15313).Buffer;
      "undefined" != typeof self && self,
        (i = []),
        void 0 ===
          (o =
            "function" ==
            typeof (n = function () {
              const e = "undefined" != typeof self ? self : this,
                t = { Argon2d: 0, Argon2i: 1, Argon2id: 2 };
              function n(t) {
                if (n._promise) return n._promise;
                if (n._module) return Promise.resolve(n._module);
                let r;
                return (
                  (r =
                    e.process && e.process.versions && e.process.versions.node
                      ? o().then(
                          (e) =>
                            new Promise((t) => {
                              e.postRun = () => t(e);
                            })
                        )
                      : a().then((e) => i(e, t ? l(t) : void 0))),
                  (n._promise = r),
                  r.then((e) => ((n._module = e), delete n._promise, e))
                );
              }
              function i(t, r) {
                return new Promise(
                  (n) => (
                    (e.Module = {
                      wasmBinary: t,
                      wasmMemory: r,
                      postRun() {
                        n(Module);
                      }
                    }),
                    o()
                  )
                );
              }
              function o() {
                return e.loadArgon2WasmModule ? e.loadArgon2WasmModule() : Promise.resolve(r(23037));
              }
              function a() {
                return e.loadArgon2WasmBinary ? e.loadArgon2WasmBinary() : Promise.resolve(r(57788)).then((e) => c(e));
              }
              function c(e) {
                const t = atob(e),
                  r = new Uint8Array(new ArrayBuffer(t.length));
                for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
                return r;
              }
              function l(e) {
                const t = 1024,
                  r = 64 * t,
                  n = (1024 * t * 1024 * 2 - 64 * t) / r,
                  i = Math.min(Math.max(Math.ceil((e * t) / r), 256) + 256, n);
                return new WebAssembly.Memory({ initial: i, maximum: n });
              }
              function u(e, t) {
                return e.allocate(t, "i8", e.ALLOC_NORMAL);
              }
              function f(e, t) {
                return u(e, new Uint8Array([...t, 0]));
              }
              function h(e) {
                if ("string" != typeof e) return e;
                if ("function" == typeof TextEncoder) return new TextEncoder().encode(e);
                if ("function" == typeof s) return s.from(e);
                throw new Error("Don't know how to encode UTF8");
              }
              function d(e) {
                const r = e.mem || 1024;
                return n(r).then((n) => {
                  const i = e.time || 1,
                    o = e.parallelism || 1,
                    s = h(e.pass),
                    a = f(n, s),
                    c = s.length,
                    l = h(e.salt),
                    d = f(n, l),
                    p = l.length,
                    g = e.type || t.Argon2d,
                    y = n.allocate(new Array(e.hashLen || 24), "i8", n.ALLOC_NORMAL),
                    v = e.secret ? u(n, e.secret) : 0,
                    m = e.secret ? e.secret.byteLength : 0,
                    b = e.ad ? u(n, e.ad) : 0,
                    w = e.ad ? e.ad.byteLength : 0,
                    k = e.hashLen || 24,
                    B = n._argon2_encodedlen(i, r, o, p, k, g),
                    E = n.allocate(new Array(B + 1), "i8", n.ALLOC_NORMAL),
                    _ = 19;
                  let S, A, x;
                  try {
                    A = n._argon2_hash_ext(i, r, o, a, c, d, p, y, k, E, B, g, v, m, b, w, _);
                  } catch (e) {
                    S = e;
                  }
                  if (0 !== A || S) {
                    try {
                      S || (S = n.UTF8ToString(n._argon2_error_message(A)));
                    } catch (e) {}
                    x = { message: S, code: A };
                  } else {
                    let e = "";
                    const t = new Uint8Array(k);
                    for (let r = 0; r < k; r++) {
                      const i = n.HEAP8[y + r];
                      (t[r] = i), (e += ("0" + (255 & i).toString(16)).slice(-2));
                    }
                    x = { hash: t, hashHex: e, encoded: n.UTF8ToString(E) };
                  }
                  try {
                    n._free(a), n._free(d), n._free(y), n._free(E), b && n._free(b), v && n._free(v);
                  } catch (e) {}
                  if (S) throw x;
                  return x;
                });
              }
              function p(e) {
                return n().then((r) => {
                  const n = h(e.pass),
                    i = f(r, n),
                    o = n.length,
                    s = e.secret ? u(r, e.secret) : 0,
                    a = e.secret ? e.secret.byteLength : 0,
                    c = e.ad ? u(r, e.ad) : 0,
                    l = e.ad ? e.ad.byteLength : 0,
                    d = f(r, h(e.encoded));
                  let p,
                    g,
                    y,
                    v = e.type;
                  if (void 0 === v) {
                    let r = e.encoded.split("$")[1];
                    r && ((r = r.replace("a", "A")), (v = t[r] || t.Argon2d));
                  }
                  try {
                    g = r._argon2_verify_ext(d, i, o, s, a, c, l, v);
                  } catch (e) {
                    p = e;
                  }
                  if (g || p) {
                    try {
                      p || (p = r.UTF8ToString(r._argon2_error_message(g)));
                    } catch (e) {}
                    y = { message: p, code: g };
                  }
                  try {
                    r._free(i), r._free(d);
                  } catch (e) {}
                  if (p) throw y;
                  return y;
                });
              }
              function g() {
                n._module && (n._module.unloadRuntime(), delete n._promise, delete n._module);
              }
              return { ArgonType: t, hash: d, verify: p, unloadRuntime: g };
            })
              ? n.apply(t, i)
              : n) || (e.exports = o);
    },
    41469: (e, t, r) => {
      "use strict";
      const n = t;
      (n.bignum = r(28891)),
        (n.define = r(40240).define),
        (n.base = r(914)),
        (n.constants = r(21153)),
        (n.decoders = r(61499)),
        (n.encoders = r(17639));
    },
    40240: (e, t, r) => {
      "use strict";
      const n = r(17639),
        i = r(61499),
        o = r(67483);
      function s(e, t) {
        (this.name = e), (this.body = t), (this.decoders = {}), (this.encoders = {});
      }
      (t.define = function (e, t) {
        return new s(e, t);
      }),
        (s.prototype._createNamed = function (e) {
          const t = this.name;
          function r(e) {
            this._initNamed(e, t);
          }
          return (
            o(r, e),
            (r.prototype._initNamed = function (t, r) {
              e.call(this, t, r);
            }),
            new r(this)
          );
        }),
        (s.prototype._getDecoder = function (e) {
          return (e = e || "der"), this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(i[e])), this.decoders[e];
        }),
        (s.prototype.decode = function (e, t, r) {
          return this._getDecoder(t).decode(e, r);
        }),
        (s.prototype._getEncoder = function (e) {
          return (e = e || "der"), this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(n[e])), this.encoders[e];
        }),
        (s.prototype.encode = function (e, t, r) {
          return this._getEncoder(t).encode(e, r);
        });
    },
    9037: (e, t, r) => {
      "use strict";
      const n = r(67483),
        i = r(93280).b,
        o = r(19855).Buffer;
      function s(e, t) {
        i.call(this, t), o.isBuffer(e) ? ((this.base = e), (this.offset = 0), (this.length = e.length)) : this.error("Input not Buffer");
      }
      function a(e, t) {
        if (Array.isArray(e))
          (this.length = 0),
            (this.value = e.map(function (e) {
              return a.isEncoderBuffer(e) || (e = new a(e, t)), (this.length += e.length), e;
            }, this));
        else if ("number" == typeof e) {
          if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
          (this.value = e), (this.length = 1);
        } else if ("string" == typeof e) (this.value = e), (this.length = o.byteLength(e));
        else {
          if (!o.isBuffer(e)) return t.error("Unsupported type: " + typeof e);
          (this.value = e), (this.length = e.length);
        }
      }
      n(s, i),
        (t.C = s),
        (s.isDecoderBuffer = function (e) {
          if (e instanceof s) return !0;
          return (
            "object" == typeof e &&
            o.isBuffer(e.base) &&
            "DecoderBuffer" === e.constructor.name &&
            "number" == typeof e.offset &&
            "number" == typeof e.length &&
            "function" == typeof e.save &&
            "function" == typeof e.restore &&
            "function" == typeof e.isEmpty &&
            "function" == typeof e.readUInt8 &&
            "function" == typeof e.skip &&
            "function" == typeof e.raw
          );
        }),
        (s.prototype.save = function () {
          return { offset: this.offset, reporter: i.prototype.save.call(this) };
        }),
        (s.prototype.restore = function (e) {
          const t = new s(this.base);
          return (t.offset = e.offset), (t.length = this.offset), (this.offset = e.offset), i.prototype.restore.call(this, e.reporter), t;
        }),
        (s.prototype.isEmpty = function () {
          return this.offset === this.length;
        }),
        (s.prototype.readUInt8 = function (e) {
          return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun");
        }),
        (s.prototype.skip = function (e, t) {
          if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");
          const r = new s(this.base);
          return (r._reporterState = this._reporterState), (r.offset = this.offset), (r.length = this.offset + e), (this.offset += e), r;
        }),
        (s.prototype.raw = function (e) {
          return this.base.slice(e ? e.offset : this.offset, this.length);
        }),
        (t.R = a),
        (a.isEncoderBuffer = function (e) {
          if (e instanceof a) return !0;
          return (
            "object" == typeof e && "EncoderBuffer" === e.constructor.name && "number" == typeof e.length && "function" == typeof e.join
          );
        }),
        (a.prototype.join = function (e, t) {
          return (
            e || (e = o.alloc(this.length)),
            t || (t = 0),
            0 === this.length ||
              (Array.isArray(this.value)
                ? this.value.forEach(function (r) {
                    r.join(e, t), (t += r.length);
                  })
                : ("number" == typeof this.value
                    ? (e[t] = this.value)
                    : "string" == typeof this.value
                    ? e.write(this.value, t)
                    : o.isBuffer(this.value) && this.value.copy(e, t),
                  (t += this.length))),
            e
          );
        });
    },
    914: (e, t, r) => {
      "use strict";
      const n = t;
      (n.Reporter = r(93280).b), (n.DecoderBuffer = r(9037).C), (n.EncoderBuffer = r(9037).R), (n.Node = r(9230));
    },
    9230: (e, t, r) => {
      "use strict";
      const n = r(93280).b,
        i = r(9037).R,
        o = r(9037).C,
        s = r(28694),
        a = [
          "seq",
          "seqof",
          "set",
          "setof",
          "objid",
          "bool",
          "gentime",
          "utctime",
          "null_",
          "enum",
          "int",
          "objDesc",
          "bitstr",
          "bmpstr",
          "charstr",
          "genstr",
          "graphstr",
          "ia5str",
          "iso646str",
          "numstr",
          "octstr",
          "printstr",
          "t61str",
          "unistr",
          "utf8str",
          "videostr"
        ],
        c = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(a);
      function l(e, t, r) {
        const n = {};
        (this._baseState = n),
          (n.name = r),
          (n.enc = e),
          (n.parent = t || null),
          (n.children = null),
          (n.tag = null),
          (n.args = null),
          (n.reverseArgs = null),
          (n.choice = null),
          (n.optional = !1),
          (n.any = !1),
          (n.obj = !1),
          (n.use = null),
          (n.useDecoder = null),
          (n.key = null),
          (n.default = null),
          (n.explicit = null),
          (n.implicit = null),
          (n.contains = null),
          n.parent || ((n.children = []), this._wrap());
      }
      e.exports = l;
      const u = [
        "enc",
        "parent",
        "children",
        "tag",
        "args",
        "reverseArgs",
        "choice",
        "optional",
        "any",
        "obj",
        "use",
        "alteredUse",
        "key",
        "default",
        "explicit",
        "implicit",
        "contains"
      ];
      (l.prototype.clone = function () {
        const e = this._baseState,
          t = {};
        u.forEach(function (r) {
          t[r] = e[r];
        });
        const r = new this.constructor(t.parent);
        return (r._baseState = t), r;
      }),
        (l.prototype._wrap = function () {
          const e = this._baseState;
          c.forEach(function (t) {
            this[t] = function () {
              const r = new this.constructor(this);
              return e.children.push(r), r[t].apply(r, arguments);
            };
          }, this);
        }),
        (l.prototype._init = function (e) {
          const t = this._baseState;
          s(null === t.parent),
            e.call(this),
            (t.children = t.children.filter(function (e) {
              return e._baseState.parent === this;
            }, this)),
            s.equal(t.children.length, 1, "Root node can have only one child");
        }),
        (l.prototype._useArgs = function (e) {
          const t = this._baseState,
            r = e.filter(function (e) {
              return e instanceof this.constructor;
            }, this);
          (e = e.filter(function (e) {
            return !(e instanceof this.constructor);
          }, this)),
            0 !== r.length &&
              (s(null === t.children),
              (t.children = r),
              r.forEach(function (e) {
                e._baseState.parent = this;
              }, this)),
            0 !== e.length &&
              (s(null === t.args),
              (t.args = e),
              (t.reverseArgs = e.map(function (e) {
                if ("object" != typeof e || e.constructor !== Object) return e;
                const t = {};
                return (
                  Object.keys(e).forEach(function (r) {
                    r == (0 | r) && (r |= 0);
                    const n = e[r];
                    t[n] = r;
                  }),
                  t
                );
              })));
        }),
        [
          "_peekTag",
          "_decodeTag",
          "_use",
          "_decodeStr",
          "_decodeObjid",
          "_decodeTime",
          "_decodeNull",
          "_decodeInt",
          "_decodeBool",
          "_decodeList",
          "_encodeComposite",
          "_encodeStr",
          "_encodeObjid",
          "_encodeTime",
          "_encodeNull",
          "_encodeInt",
          "_encodeBool"
        ].forEach(function (e) {
          l.prototype[e] = function () {
            const t = this._baseState;
            throw new Error(e + " not implemented for encoding: " + t.enc);
          };
        }),
        a.forEach(function (e) {
          l.prototype[e] = function () {
            const t = this._baseState,
              r = Array.prototype.slice.call(arguments);
            return s(null === t.tag), (t.tag = e), this._useArgs(r), this;
          };
        }),
        (l.prototype.use = function (e) {
          s(e);
          const t = this._baseState;
          return s(null === t.use), (t.use = e), this;
        }),
        (l.prototype.optional = function () {
          return (this._baseState.optional = !0), this;
        }),
        (l.prototype.def = function (e) {
          const t = this._baseState;
          return s(null === t.default), (t.default = e), (t.optional = !0), this;
        }),
        (l.prototype.explicit = function (e) {
          const t = this._baseState;
          return s(null === t.explicit && null === t.implicit), (t.explicit = e), this;
        }),
        (l.prototype.implicit = function (e) {
          const t = this._baseState;
          return s(null === t.explicit && null === t.implicit), (t.implicit = e), this;
        }),
        (l.prototype.obj = function () {
          const e = this._baseState,
            t = Array.prototype.slice.call(arguments);
          return (e.obj = !0), 0 !== t.length && this._useArgs(t), this;
        }),
        (l.prototype.key = function (e) {
          const t = this._baseState;
          return s(null === t.key), (t.key = e), this;
        }),
        (l.prototype.any = function () {
          return (this._baseState.any = !0), this;
        }),
        (l.prototype.choice = function (e) {
          const t = this._baseState;
          return (
            s(null === t.choice),
            (t.choice = e),
            this._useArgs(
              Object.keys(e).map(function (t) {
                return e[t];
              })
            ),
            this
          );
        }),
        (l.prototype.contains = function (e) {
          const t = this._baseState;
          return s(null === t.use), (t.contains = e), this;
        }),
        (l.prototype._decode = function (e, t) {
          const r = this._baseState;
          if (null === r.parent) return e.wrapResult(r.children[0]._decode(e, t));
          let n,
            i = r.default,
            s = !0,
            a = null;
          if ((null !== r.key && (a = e.enterKey(r.key)), r.optional)) {
            let n = null;
            if (
              (null !== r.explicit ? (n = r.explicit) : null !== r.implicit ? (n = r.implicit) : null !== r.tag && (n = r.tag),
              null !== n || r.any)
            ) {
              if (((s = this._peekTag(e, n, r.any)), e.isError(s))) return s;
            } else {
              const n = e.save();
              try {
                null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t), (s = !0);
              } catch (e) {
                s = !1;
              }
              e.restore(n);
            }
          }
          if ((r.obj && s && (n = e.enterObject()), s)) {
            if (null !== r.explicit) {
              const t = this._decodeTag(e, r.explicit);
              if (e.isError(t)) return t;
              e = t;
            }
            const n = e.offset;
            if (null === r.use && null === r.choice) {
              let t;
              r.any && (t = e.save());
              const n = this._decodeTag(e, null !== r.implicit ? r.implicit : r.tag, r.any);
              if (e.isError(n)) return n;
              r.any ? (i = e.raw(t)) : (e = n);
            }
            if (
              (t && t.track && null !== r.tag && t.track(e.path(), n, e.length, "tagged"),
              t && t.track && null !== r.tag && t.track(e.path(), e.offset, e.length, "content"),
              r.any || (i = null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t)),
              e.isError(i))
            )
              return i;
            if (
              (r.any ||
                null !== r.choice ||
                null === r.children ||
                r.children.forEach(function (r) {
                  r._decode(e, t);
                }),
              r.contains && ("octstr" === r.tag || "bitstr" === r.tag))
            ) {
              const n = new o(i);
              i = this._getUse(r.contains, e._reporterState.obj)._decode(n, t);
            }
          }
          return (
            r.obj && s && (i = e.leaveObject(n)),
            null === r.key || (null === i && !0 !== s) ? null !== a && e.exitKey(a) : e.leaveKey(a, r.key, i),
            i
          );
        }),
        (l.prototype._decodeGeneric = function (e, t, r) {
          const n = this._baseState;
          return "seq" === e || "set" === e
            ? null
            : "seqof" === e || "setof" === e
            ? this._decodeList(t, e, n.args[0], r)
            : /str$/.test(e)
            ? this._decodeStr(t, e, r)
            : "objid" === e && n.args
            ? this._decodeObjid(t, n.args[0], n.args[1], r)
            : "objid" === e
            ? this._decodeObjid(t, null, null, r)
            : "gentime" === e || "utctime" === e
            ? this._decodeTime(t, e, r)
            : "null_" === e
            ? this._decodeNull(t, r)
            : "bool" === e
            ? this._decodeBool(t, r)
            : "objDesc" === e
            ? this._decodeStr(t, e, r)
            : "int" === e || "enum" === e
            ? this._decodeInt(t, n.args && n.args[0], r)
            : null !== n.use
            ? this._getUse(n.use, t._reporterState.obj)._decode(t, r)
            : t.error("unknown tag: " + e);
        }),
        (l.prototype._getUse = function (e, t) {
          const r = this._baseState;
          return (
            (r.useDecoder = this._use(e, t)),
            s(null === r.useDecoder._baseState.parent),
            (r.useDecoder = r.useDecoder._baseState.children[0]),
            r.implicit !== r.useDecoder._baseState.implicit &&
              ((r.useDecoder = r.useDecoder.clone()), (r.useDecoder._baseState.implicit = r.implicit)),
            r.useDecoder
          );
        }),
        (l.prototype._decodeChoice = function (e, t) {
          const r = this._baseState;
          let n = null,
            i = !1;
          return (
            Object.keys(r.choice).some(function (o) {
              const s = e.save(),
                a = r.choice[o];
              try {
                const r = a._decode(e, t);
                if (e.isError(r)) return !1;
                (n = { type: o, value: r }), (i = !0);
              } catch (t) {
                return e.restore(s), !1;
              }
              return !0;
            }, this),
            i ? n : e.error("Choice not matched")
          );
        }),
        (l.prototype._createEncoderBuffer = function (e) {
          return new i(e, this.reporter);
        }),
        (l.prototype._encode = function (e, t, r) {
          const n = this._baseState;
          if (null !== n.default && n.default === e) return;
          const i = this._encodeValue(e, t, r);
          return void 0 === i || this._skipDefault(i, t, r) ? void 0 : i;
        }),
        (l.prototype._encodeValue = function (e, t, r) {
          const i = this._baseState;
          if (null === i.parent) return i.children[0]._encode(e, t || new n());
          let o = null;
          if (((this.reporter = t), i.optional && void 0 === e)) {
            if (null === i.default) return;
            e = i.default;
          }
          let s = null,
            a = !1;
          if (i.any) o = this._createEncoderBuffer(e);
          else if (i.choice) o = this._encodeChoice(e, t);
          else if (i.contains) (s = this._getUse(i.contains, r)._encode(e, t)), (a = !0);
          else if (i.children)
            (s = i.children
              .map(function (r) {
                if ("null_" === r._baseState.tag) return r._encode(null, t, e);
                if (null === r._baseState.key) return t.error("Child should have a key");
                const n = t.enterKey(r._baseState.key);
                if ("object" != typeof e) return t.error("Child expected, but input is not object");
                const i = r._encode(e[r._baseState.key], t, e);
                return t.leaveKey(n), i;
              }, this)
              .filter(function (e) {
                return e;
              })),
              (s = this._createEncoderBuffer(s));
          else if ("seqof" === i.tag || "setof" === i.tag) {
            if (!i.args || 1 !== i.args.length) return t.error("Too many args for : " + i.tag);
            if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");
            const r = this.clone();
            (r._baseState.implicit = null),
              (s = this._createEncoderBuffer(
                e.map(function (r) {
                  const n = this._baseState;
                  return this._getUse(n.args[0], e)._encode(r, t);
                }, r)
              ));
          } else null !== i.use ? (o = this._getUse(i.use, r)._encode(e, t)) : ((s = this._encodePrimitive(i.tag, e)), (a = !0));
          if (!i.any && null === i.choice) {
            const e = null !== i.implicit ? i.implicit : i.tag,
              r = null === i.implicit ? "universal" : "context";
            null === e
              ? null === i.use && t.error("Tag could be omitted only for .use()")
              : null === i.use && (o = this._encodeComposite(e, a, r, s));
          }
          return null !== i.explicit && (o = this._encodeComposite(i.explicit, !1, "context", o)), o;
        }),
        (l.prototype._encodeChoice = function (e, t) {
          const r = this._baseState,
            n = r.choice[e.type];
          return n || s(!1, e.type + " not found in " + JSON.stringify(Object.keys(r.choice))), n._encode(e.value, t);
        }),
        (l.prototype._encodePrimitive = function (e, t) {
          const r = this._baseState;
          if (/str$/.test(e)) return this._encodeStr(t, e);
          if ("objid" === e && r.args) return this._encodeObjid(t, r.reverseArgs[0], r.args[1]);
          if ("objid" === e) return this._encodeObjid(t, null, null);
          if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e);
          if ("null_" === e) return this._encodeNull();
          if ("int" === e || "enum" === e) return this._encodeInt(t, r.args && r.reverseArgs[0]);
          if ("bool" === e) return this._encodeBool(t);
          if ("objDesc" === e) return this._encodeStr(t, e);
          throw new Error("Unsupported tag: " + e);
        }),
        (l.prototype._isNumstr = function (e) {
          return /^[0-9 ]*$/.test(e);
        }),
        (l.prototype._isPrintstr = function (e) {
          return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e);
        });
    },
    93280: (e, t, r) => {
      "use strict";
      const n = r(67483);
      function i(e) {
        this._reporterState = { obj: null, path: [], options: e || {}, errors: [] };
      }
      function o(e, t) {
        (this.path = e), this.rethrow(t);
      }
      (t.b = i),
        (i.prototype.isError = function (e) {
          return e instanceof o;
        }),
        (i.prototype.save = function () {
          const e = this._reporterState;
          return { obj: e.obj, pathLen: e.path.length };
        }),
        (i.prototype.restore = function (e) {
          const t = this._reporterState;
          (t.obj = e.obj), (t.path = t.path.slice(0, e.pathLen));
        }),
        (i.prototype.enterKey = function (e) {
          return this._reporterState.path.push(e);
        }),
        (i.prototype.exitKey = function (e) {
          const t = this._reporterState;
          t.path = t.path.slice(0, e - 1);
        }),
        (i.prototype.leaveKey = function (e, t, r) {
          const n = this._reporterState;
          this.exitKey(e), null !== n.obj && (n.obj[t] = r);
        }),
        (i.prototype.path = function () {
          return this._reporterState.path.join("/");
        }),
        (i.prototype.enterObject = function () {
          const e = this._reporterState,
            t = e.obj;
          return (e.obj = {}), t;
        }),
        (i.prototype.leaveObject = function (e) {
          const t = this._reporterState,
            r = t.obj;
          return (t.obj = e), r;
        }),
        (i.prototype.error = function (e) {
          let t;
          const r = this._reporterState,
            n = e instanceof o;
          if (
            ((t = n
              ? e
              : new o(
                  r.path
                    .map(function (e) {
                      return "[" + JSON.stringify(e) + "]";
                    })
                    .join(""),
                  e.message || e,
                  e.stack
                )),
            !r.options.partial)
          )
            throw t;
          return n || r.errors.push(t), t;
        }),
        (i.prototype.wrapResult = function (e) {
          const t = this._reporterState;
          return t.options.partial ? { result: this.isError(e) ? null : e, errors: t.errors } : e;
        }),
        n(o, Error),
        (o.prototype.rethrow = function (e) {
          if (
            ((this.message = e + " at: " + (this.path || "(shallow)")),
            Error.captureStackTrace && Error.captureStackTrace(this, o),
            !this.stack)
          )
            try {
              throw new Error(this.message);
            } catch (e) {
              this.stack = e.stack;
            }
          return this;
        });
    },
    18958: (e, t) => {
      "use strict";
      function r(e) {
        const t = {};
        return (
          Object.keys(e).forEach(function (r) {
            (0 | r) == r && (r |= 0);
            const n = e[r];
            t[n] = r;
          }),
          t
        );
      }
      (t.tagClass = { 0: "universal", 1: "application", 2: "context", 3: "private" }),
        (t.tagClassByName = r(t.tagClass)),
        (t.tag = {
          0: "end",
          1: "bool",
          2: "int",
          3: "bitstr",
          4: "octstr",
          5: "null_",
          6: "objid",
          7: "objDesc",
          8: "external",
          9: "real",
          10: "enum",
          11: "embed",
          12: "utf8str",
          13: "relativeOid",
          16: "seq",
          17: "set",
          18: "numstr",
          19: "printstr",
          20: "t61str",
          21: "videostr",
          22: "ia5str",
          23: "utctime",
          24: "gentime",
          25: "graphstr",
          26: "iso646str",
          27: "genstr",
          28: "unistr",
          29: "charstr",
          30: "bmpstr"
        }),
        (t.tagByName = r(t.tag));
    },
    21153: (e, t, r) => {
      "use strict";
      const n = t;
      (n._reverse = function (e) {
        const t = {};
        return (
          Object.keys(e).forEach(function (r) {
            (0 | r) == r && (r |= 0);
            const n = e[r];
            t[n] = r;
          }),
          t
        );
      }),
        (n.der = r(18958));
    },
    5431: (e, t, r) => {
      "use strict";
      const n = r(67483),
        i = r(28891),
        o = r(9037).C,
        s = r(9230),
        a = r(18958);
      function c(e) {
        (this.enc = "der"), (this.name = e.name), (this.entity = e), (this.tree = new l()), this.tree._init(e.body);
      }
      function l(e) {
        s.call(this, "der", e);
      }
      function u(e, t) {
        let r = e.readUInt8(t);
        if (e.isError(r)) return r;
        const n = a.tagClass[r >> 6],
          i = 0 == (32 & r);
        if (31 == (31 & r)) {
          let n = r;
          for (r = 0; 128 == (128 & n); ) {
            if (((n = e.readUInt8(t)), e.isError(n))) return n;
            (r <<= 7), (r |= 127 & n);
          }
        } else r &= 31;
        return { cls: n, primitive: i, tag: r, tagStr: a.tag[r] };
      }
      function f(e, t, r) {
        let n = e.readUInt8(r);
        if (e.isError(n)) return n;
        if (!t && 128 === n) return null;
        if (0 == (128 & n)) return n;
        const i = 127 & n;
        if (i > 4) return e.error("length octect is too long");
        n = 0;
        for (let t = 0; t < i; t++) {
          n <<= 8;
          const t = e.readUInt8(r);
          if (e.isError(t)) return t;
          n |= t;
        }
        return n;
      }
      (e.exports = c),
        (c.prototype.decode = function (e, t) {
          return o.isDecoderBuffer(e) || (e = new o(e, t)), this.tree._decode(e, t);
        }),
        n(l, s),
        (l.prototype._peekTag = function (e, t, r) {
          if (e.isEmpty()) return !1;
          const n = e.save(),
            i = u(e, 'Failed to peek tag: "' + t + '"');
          return e.isError(i) ? i : (e.restore(n), i.tag === t || i.tagStr === t || i.tagStr + "of" === t || r);
        }),
        (l.prototype._decodeTag = function (e, t, r) {
          const n = u(e, 'Failed to decode tag of "' + t + '"');
          if (e.isError(n)) return n;
          let i = f(e, n.primitive, 'Failed to get length of "' + t + '"');
          if (e.isError(i)) return i;
          if (!r && n.tag !== t && n.tagStr !== t && n.tagStr + "of" !== t) return e.error('Failed to match tag: "' + t + '"');
          if (n.primitive || null !== i) return e.skip(i, 'Failed to match body of: "' + t + '"');
          const o = e.save(),
            s = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
          return e.isError(s) ? s : ((i = e.offset - o.offset), e.restore(o), e.skip(i, 'Failed to match body of: "' + t + '"'));
        }),
        (l.prototype._skipUntilEnd = function (e, t) {
          for (;;) {
            const r = u(e, t);
            if (e.isError(r)) return r;
            const n = f(e, r.primitive, t);
            if (e.isError(n)) return n;
            let i;
            if (((i = r.primitive || null !== n ? e.skip(n) : this._skipUntilEnd(e, t)), e.isError(i))) return i;
            if ("end" === r.tagStr) break;
          }
        }),
        (l.prototype._decodeList = function (e, t, r, n) {
          const i = [];
          for (; !e.isEmpty(); ) {
            const t = this._peekTag(e, "end");
            if (e.isError(t)) return t;
            const o = r.decode(e, "der", n);
            if (e.isError(o) && t) break;
            i.push(o);
          }
          return i;
        }),
        (l.prototype._decodeStr = function (e, t) {
          if ("bitstr" === t) {
            const t = e.readUInt8();
            return e.isError(t) ? t : { unused: t, data: e.raw() };
          }
          if ("bmpstr" === t) {
            const t = e.raw();
            if (t.length % 2 == 1) return e.error("Decoding of string type: bmpstr length mismatch");
            let r = "";
            for (let e = 0; e < t.length / 2; e++) r += String.fromCharCode(t.readUInt16BE(2 * e));
            return r;
          }
          if ("numstr" === t) {
            const t = e.raw().toString("ascii");
            return this._isNumstr(t) ? t : e.error("Decoding of string type: numstr unsupported characters");
          }
          if ("octstr" === t) return e.raw();
          if ("objDesc" === t) return e.raw();
          if ("printstr" === t) {
            const t = e.raw().toString("ascii");
            return this._isPrintstr(t) ? t : e.error("Decoding of string type: printstr unsupported characters");
          }
          return /str$/.test(t) ? e.raw().toString() : e.error("Decoding of string type: " + t + " unsupported");
        }),
        (l.prototype._decodeObjid = function (e, t, r) {
          let n;
          const i = [];
          let o = 0,
            s = 0;
          for (; !e.isEmpty(); ) (s = e.readUInt8()), (o <<= 7), (o |= 127 & s), 0 == (128 & s) && (i.push(o), (o = 0));
          128 & s && i.push(o);
          const a = (i[0] / 40) | 0,
            c = i[0] % 40;
          if (((n = r ? i : [a, c].concat(i.slice(1))), t)) {
            let e = t[n.join(" ")];
            void 0 === e && (e = t[n.join(".")]), void 0 !== e && (n = e);
          }
          return n;
        }),
        (l.prototype._decodeTime = function (e, t) {
          const r = e.raw().toString();
          let n, i, o, s, a, c;
          if ("gentime" === t)
            (n = 0 | r.slice(0, 4)),
              (i = 0 | r.slice(4, 6)),
              (o = 0 | r.slice(6, 8)),
              (s = 0 | r.slice(8, 10)),
              (a = 0 | r.slice(10, 12)),
              (c = 0 | r.slice(12, 14));
          else {
            if ("utctime" !== t) return e.error("Decoding " + t + " time is not supported yet");
            (n = 0 | r.slice(0, 2)),
              (i = 0 | r.slice(2, 4)),
              (o = 0 | r.slice(4, 6)),
              (s = 0 | r.slice(6, 8)),
              (a = 0 | r.slice(8, 10)),
              (c = 0 | r.slice(10, 12)),
              (n = n < 70 ? 2e3 + n : 1900 + n);
          }
          return Date.UTC(n, i - 1, o, s, a, c, 0);
        }),
        (l.prototype._decodeNull = function () {
          return null;
        }),
        (l.prototype._decodeBool = function (e) {
          const t = e.readUInt8();
          return e.isError(t) ? t : 0 !== t;
        }),
        (l.prototype._decodeInt = function (e, t) {
          const r = e.raw();
          let n = new i(r);
          return t && (n = t[n.toString(10)] || n), n;
        }),
        (l.prototype._use = function (e, t) {
          return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree;
        });
    },
    61499: (e, t, r) => {
      "use strict";
      const n = t;
      (n.der = r(5431)), (n.pem = r(63998));
    },
    63998: (e, t, r) => {
      "use strict";
      const n = r(67483),
        i = r(19855).Buffer,
        o = r(5431);
      function s(e) {
        o.call(this, e), (this.enc = "pem");
      }
      n(s, o),
        (e.exports = s),
        (s.prototype.decode = function (e, t) {
          const r = e.toString().split(/[\r\n]+/g),
            n = t.label.toUpperCase(),
            s = /^-----(BEGIN|END) ([^-]+)-----$/;
          let a = -1,
            c = -1;
          for (let e = 0; e < r.length; e++) {
            const t = r[e].match(s);
            if (null !== t && t[2] === n) {
              if (-1 !== a) {
                if ("END" !== t[1]) break;
                c = e;
                break;
              }
              if ("BEGIN" !== t[1]) break;
              a = e;
            }
          }
          if (-1 === a || -1 === c) throw new Error("PEM section not found for: " + n);
          const l = r.slice(a + 1, c).join("");
          l.replace(/[^a-z0-9+/=]+/gi, "");
          const u = i.from(l, "base64");
          return o.prototype.decode.call(this, u, t);
        });
    },
    40843: (e, t, r) => {
      "use strict";
      const n = r(67483),
        i = r(19855).Buffer,
        o = r(9230),
        s = r(18958);
      function a(e) {
        (this.enc = "der"), (this.name = e.name), (this.entity = e), (this.tree = new c()), this.tree._init(e.body);
      }
      function c(e) {
        o.call(this, "der", e);
      }
      function l(e) {
        return e < 10 ? "0" + e : e;
      }
      (e.exports = a),
        (a.prototype.encode = function (e, t) {
          return this.tree._encode(e, t).join();
        }),
        n(c, o),
        (c.prototype._encodeComposite = function (e, t, r, n) {
          const o = (function (e, t, r, n) {
            let i;
            "seqof" === e ? (e = "seq") : "setof" === e && (e = "set");
            if (s.tagByName.hasOwnProperty(e)) i = s.tagByName[e];
            else {
              if ("number" != typeof e || (0 | e) !== e) return n.error("Unknown tag: " + e);
              i = e;
            }
            if (i >= 31) return n.error("Multi-octet tag encoding unsupported");
            t || (i |= 32);
            return (i |= s.tagClassByName[r || "universal"] << 6), i;
          })(e, t, r, this.reporter);
          if (n.length < 128) {
            const e = i.alloc(2);
            return (e[0] = o), (e[1] = n.length), this._createEncoderBuffer([e, n]);
          }
          let a = 1;
          for (let e = n.length; e >= 256; e >>= 8) a++;
          const c = i.alloc(2 + a);
          (c[0] = o), (c[1] = 128 | a);
          for (let e = 1 + a, t = n.length; t > 0; e--, t >>= 8) c[e] = 255 & t;
          return this._createEncoderBuffer([c, n]);
        }),
        (c.prototype._encodeStr = function (e, t) {
          if ("bitstr" === t) return this._createEncoderBuffer([0 | e.unused, e.data]);
          if ("bmpstr" === t) {
            const t = i.alloc(2 * e.length);
            for (let r = 0; r < e.length; r++) t.writeUInt16BE(e.charCodeAt(r), 2 * r);
            return this._createEncoderBuffer(t);
          }
          return "numstr" === t
            ? this._isNumstr(e)
              ? this._createEncoderBuffer(e)
              : this.reporter.error("Encoding of string type: numstr supports only digits and space")
            : "printstr" === t
            ? this._isPrintstr(e)
              ? this._createEncoderBuffer(e)
              : this.reporter.error(
                  "Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"
                )
            : /str$/.test(t) || "objDesc" === t
            ? this._createEncoderBuffer(e)
            : this.reporter.error("Encoding of string type: " + t + " unsupported");
        }),
        (c.prototype._encodeObjid = function (e, t, r) {
          if ("string" == typeof e) {
            if (!t) return this.reporter.error("string objid given, but no values map found");
            if (!t.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");
            e = t[e].split(/[\s.]+/g);
            for (let t = 0; t < e.length; t++) e[t] |= 0;
          } else if (Array.isArray(e)) {
            e = e.slice();
            for (let t = 0; t < e.length; t++) e[t] |= 0;
          }
          if (!Array.isArray(e)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
          if (!r) {
            if (e[1] >= 40) return this.reporter.error("Second objid identifier OOB");
            e.splice(0, 2, 40 * e[0] + e[1]);
          }
          let n = 0;
          for (let t = 0; t < e.length; t++) {
            let r = e[t];
            for (n++; r >= 128; r >>= 7) n++;
          }
          const o = i.alloc(n);
          let s = o.length - 1;
          for (let t = e.length - 1; t >= 0; t--) {
            let r = e[t];
            for (o[s--] = 127 & r; (r >>= 7) > 0; ) o[s--] = 128 | (127 & r);
          }
          return this._createEncoderBuffer(o);
        }),
        (c.prototype._encodeTime = function (e, t) {
          let r;
          const n = new Date(e);
          return (
            "gentime" === t
              ? (r = [
                  l(n.getUTCFullYear()),
                  l(n.getUTCMonth() + 1),
                  l(n.getUTCDate()),
                  l(n.getUTCHours()),
                  l(n.getUTCMinutes()),
                  l(n.getUTCSeconds()),
                  "Z"
                ].join(""))
              : "utctime" === t
              ? (r = [
                  l(n.getUTCFullYear() % 100),
                  l(n.getUTCMonth() + 1),
                  l(n.getUTCDate()),
                  l(n.getUTCHours()),
                  l(n.getUTCMinutes()),
                  l(n.getUTCSeconds()),
                  "Z"
                ].join(""))
              : this.reporter.error("Encoding " + t + " time is not supported yet"),
            this._encodeStr(r, "octstr")
          );
        }),
        (c.prototype._encodeNull = function () {
          return this._createEncoderBuffer("");
        }),
        (c.prototype._encodeInt = function (e, t) {
          if ("string" == typeof e) {
            if (!t) return this.reporter.error("String int or enum given, but no values map");
            if (!t.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
            e = t[e];
          }
          if ("number" != typeof e && !i.isBuffer(e)) {
            const t = e.toArray();
            !e.sign && 128 & t[0] && t.unshift(0), (e = i.from(t));
          }
          if (i.isBuffer(e)) {
            let t = e.length;
            0 === e.length && t++;
            const r = i.alloc(t);
            return e.copy(r), 0 === e.length && (r[0] = 0), this._createEncoderBuffer(r);
          }
          if (e < 128) return this._createEncoderBuffer(e);
          if (e < 256) return this._createEncoderBuffer([0, e]);
          let r = 1;
          for (let t = e; t >= 256; t >>= 8) r++;
          const n = new Array(r);
          for (let t = n.length - 1; t >= 0; t--) (n[t] = 255 & e), (e >>= 8);
          return 128 & n[0] && n.unshift(0), this._createEncoderBuffer(i.from(n));
        }),
        (c.prototype._encodeBool = function (e) {
          return this._createEncoderBuffer(e ? 255 : 0);
        }),
        (c.prototype._use = function (e, t) {
          return "function" == typeof e && (e = e(t)), e._getEncoder("der").tree;
        }),
        (c.prototype._skipDefault = function (e, t, r) {
          const n = this._baseState;
          let i;
          if (null === n.default) return !1;
          const o = e.join();
          if (
            (void 0 === n.defaultBuffer && (n.defaultBuffer = this._encodeValue(n.default, t, r).join()),
            o.length !== n.defaultBuffer.length)
          )
            return !1;
          for (i = 0; i < o.length; i++) if (o[i] !== n.defaultBuffer[i]) return !1;
          return !0;
        });
    },
    17639: (e, t, r) => {
      "use strict";
      const n = t;
      (n.der = r(40843)), (n.pem = r(74035));
    },
    74035: (e, t, r) => {
      "use strict";
      const n = r(67483),
        i = r(40843);
      function o(e) {
        i.call(this, e), (this.enc = "pem");
      }
      n(o, i),
        (e.exports = o),
        (o.prototype.encode = function (e, t) {
          const r = i.prototype.encode.call(this, e).toString("base64"),
            n = ["-----BEGIN " + t.label + "-----"];
          for (let e = 0; e < r.length; e += 64) n.push(r.slice(e, e + 64));
          return n.push("-----END " + t.label + "-----"), n.join("\n");
        });
    },
    57710: (e, t, r) => {
      "use strict";
      r.d(t, {
        $: () => nt,
        BD: () => ct,
        EI: () => st,
        FC: () => we,
        GM: () => Ye,
        Gh: () => mt,
        HQ: () => it,
        Hk: () => at,
        IK: () => gt,
        Lv: () => yt,
        NI: () => ot,
        Ox: () => et,
        SZ: () => rt,
        T9: () => qe,
        Tz: () => Qe,
        WC: () => Re,
        WV: () => ye,
        Yw: () => lt,
        ZD: () => vt,
        _K: () => Oe,
        eN: () => bt,
        fi: () => xe,
        gF: () => tt,
        ge: () => Se,
        kE: () => Xe,
        l4: () => Pe,
        p2: () => Ee,
        qU: () => ze,
        rP: () => He,
        sc: () => me,
        z8: () => Te
      });
      var n = r(99612),
        i = r(30598);
      function o() {
        if ("undefined" == typeof BigInt) throw new Error("BigInt is not defined. Your environment doesn't implement BigInt.");
      }
      function s(e) {
        let t = 0,
          r = 0;
        for (let r = 0; r < e.length; r++) {
          t += e[r].byteLength;
        }
        const n = new Uint8Array(t);
        for (let t = 0; t < e.length; t++) {
          const i = e[t];
          n.set(new Uint8Array(i), r), (r += i.byteLength);
        }
        return n.buffer;
      }
      function a(e, t, r, n) {
        return t instanceof Uint8Array
          ? t.byteLength
            ? r < 0
              ? ((e.error = "Wrong parameter: inputOffset less than zero"), !1)
              : n < 0
              ? ((e.error = "Wrong parameter: inputLength less than zero"), !1)
              : !(t.byteLength - r - n < 0) ||
                ((e.error = "End of input reached before message was fully decoded (inconsistent offset and length values)"), !1)
            : ((e.error = "Wrong parameter: inputBuffer has zero length"), !1)
          : ((e.error = "Wrong parameter: inputBuffer must be 'Uint8Array'"), !1);
      }
      class c {
        constructor() {
          this.items = [];
        }
        write(e) {
          this.items.push(e);
        }
        final() {
          return s(this.items);
        }
      }
      const l = [new Uint8Array([1])],
        u = "0123456789",
        f = "name",
        h = "valueHexView",
        d = "isHexOnly",
        p = "idBlock",
        g = "tagClass",
        y = "tagNumber",
        v = "isConstructed",
        m = "fromBER",
        b = "toBER",
        w = "local",
        k = "",
        B = new ArrayBuffer(0),
        E = new Uint8Array(0),
        _ = "EndOfContent",
        S = "OCTET STRING",
        A = "BIT STRING";
      function x(e) {
        var t;
        return (
          ((t = class extends e {
            constructor(...e) {
              var t;
              super(...e);
              const r = e[0] || {};
              (this.isHexOnly = null !== (t = r.isHexOnly) && void 0 !== t && t),
                (this.valueHexView = r.valueHex ? n.vJ.toUint8Array(r.valueHex) : E);
            }
            get valueHex() {
              return this.valueHexView.slice().buffer;
            }
            set valueHex(e) {
              this.valueHexView = new Uint8Array(e);
            }
            fromBER(e, t, r) {
              const n = e instanceof ArrayBuffer ? new Uint8Array(e) : e;
              if (!a(this, n, t, r)) return -1;
              const i = t + r;
              return (
                (this.valueHexView = n.subarray(t, i)),
                this.valueHexView.length ? ((this.blockLength = r), i) : (this.warnings.push("Zero buffer length"), t)
              );
            }
            toBER(e = !1) {
              return this.isHexOnly
                ? e
                  ? new ArrayBuffer(this.valueHexView.byteLength)
                  : this.valueHexView.byteLength === this.valueHexView.buffer.byteLength
                  ? this.valueHexView.buffer
                  : this.valueHexView.slice().buffer
                : ((this.error = "Flag 'isHexOnly' is not set, abort"), B);
            }
            toJSON() {
              return { ...super.toJSON(), isHexOnly: this.isHexOnly, valueHex: n.ep.ToHex(this.valueHexView) };
            }
          }).NAME = "hexBlock"),
          t
        );
      }
      class N {
        constructor({ blockLength: e = 0, error: t = k, warnings: r = [], valueBeforeDecode: i = E } = {}) {
          (this.blockLength = e), (this.error = t), (this.warnings = r), (this.valueBeforeDecodeView = n.vJ.toUint8Array(i));
        }
        static blockName() {
          return this.NAME;
        }
        get valueBeforeDecode() {
          return this.valueBeforeDecodeView.slice().buffer;
        }
        set valueBeforeDecode(e) {
          this.valueBeforeDecodeView = new Uint8Array(e);
        }
        toJSON() {
          return {
            blockName: this.constructor.NAME,
            blockLength: this.blockLength,
            error: this.error,
            warnings: this.warnings,
            valueBeforeDecode: n.ep.ToHex(this.valueBeforeDecodeView)
          };
        }
      }
      N.NAME = "baseBlock";
      class O extends N {
        fromBER(e, t, r) {
          throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
        }
        toBER(e, t) {
          throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
        }
      }
      O.NAME = "valueBlock";
      class C extends x(N) {
        constructor({ idBlock: e = {} } = {}) {
          var t, r, i, o;
          super(),
            e
              ? ((this.isHexOnly = null !== (t = e.isHexOnly) && void 0 !== t && t),
                (this.valueHexView = e.valueHex ? n.vJ.toUint8Array(e.valueHex) : E),
                (this.tagClass = null !== (r = e.tagClass) && void 0 !== r ? r : -1),
                (this.tagNumber = null !== (i = e.tagNumber) && void 0 !== i ? i : -1),
                (this.isConstructed = null !== (o = e.isConstructed) && void 0 !== o && o))
              : ((this.tagClass = -1), (this.tagNumber = -1), (this.isConstructed = !1));
        }
        toBER(e = !1) {
          let t = 0;
          switch (this.tagClass) {
            case 1:
              t |= 0;
              break;
            case 2:
              t |= 64;
              break;
            case 3:
              t |= 128;
              break;
            case 4:
              t |= 192;
              break;
            default:
              return (this.error = "Unknown tag class"), B;
          }
          if ((this.isConstructed && (t |= 32), this.tagNumber < 31 && !this.isHexOnly)) {
            const r = new Uint8Array(1);
            if (!e) {
              let e = this.tagNumber;
              (e &= 31), (t |= e), (r[0] = t);
            }
            return r.buffer;
          }
          if (!this.isHexOnly) {
            const r = i.lL(this.tagNumber, 7),
              n = new Uint8Array(r),
              o = r.byteLength,
              s = new Uint8Array(o + 1);
            if (((s[0] = 31 | t), !e)) {
              for (let e = 0; e < o - 1; e++) s[e + 1] = 128 | n[e];
              s[o] = n[o - 1];
            }
            return s.buffer;
          }
          const r = new Uint8Array(this.valueHexView.byteLength + 1);
          if (((r[0] = 31 | t), !e)) {
            const e = this.valueHexView;
            for (let t = 0; t < e.length - 1; t++) r[t + 1] = 128 | e[t];
            r[this.valueHexView.byteLength] = e[e.length - 1];
          }
          return r.buffer;
        }
        fromBER(e, t, r) {
          const o = n.vJ.toUint8Array(e);
          if (!a(this, o, t, r)) return -1;
          const s = o.subarray(t, t + r);
          if (0 === s.length) return (this.error = "Zero buffer length"), -1;
          switch (192 & s[0]) {
            case 0:
              this.tagClass = 1;
              break;
            case 64:
              this.tagClass = 2;
              break;
            case 128:
              this.tagClass = 3;
              break;
            case 192:
              this.tagClass = 4;
              break;
            default:
              return (this.error = "Unknown tag class"), -1;
          }
          (this.isConstructed = 32 == (32 & s[0])), (this.isHexOnly = !1);
          const c = 31 & s[0];
          if (31 !== c) (this.tagNumber = c), (this.blockLength = 1);
          else {
            let e = 1,
              t = (this.valueHexView = new Uint8Array(255)),
              r = 255;
            for (; 128 & s[e]; ) {
              if (((t[e - 1] = 127 & s[e]), e++, e >= s.length))
                return (this.error = "End of input reached before message was fully decoded"), -1;
              if (e === r) {
                r += 255;
                const e = new Uint8Array(r);
                for (let r = 0; r < t.length; r++) e[r] = t[r];
                t = this.valueHexView = new Uint8Array(r);
              }
            }
            (this.blockLength = e + 1), (t[e - 1] = 127 & s[e]);
            const n = new Uint8Array(e);
            for (let r = 0; r < e; r++) n[r] = t[r];
            (t = this.valueHexView = new Uint8Array(e)),
              t.set(n),
              this.blockLength <= 9
                ? (this.tagNumber = i.r9(t, 7))
                : ((this.isHexOnly = !0), this.warnings.push("Tag too long, represented as hex-coded"));
          }
          if (1 === this.tagClass && this.isConstructed)
            switch (this.tagNumber) {
              case 1:
              case 2:
              case 5:
              case 6:
              case 9:
              case 13:
              case 14:
              case 23:
              case 24:
              case 31:
              case 32:
              case 33:
              case 34:
                return (this.error = "Constructed encoding used for primitive type"), -1;
            }
          return t + this.blockLength;
        }
        toJSON() {
          return { ...super.toJSON(), tagClass: this.tagClass, tagNumber: this.tagNumber, isConstructed: this.isConstructed };
        }
      }
      C.NAME = "identificationBlock";
      class U extends N {
        constructor({ lenBlock: e = {} } = {}) {
          var t, r, n;
          super(),
            (this.isIndefiniteForm = null !== (t = e.isIndefiniteForm) && void 0 !== t && t),
            (this.longFormUsed = null !== (r = e.longFormUsed) && void 0 !== r && r),
            (this.length = null !== (n = e.length) && void 0 !== n ? n : 0);
        }
        fromBER(e, t, r) {
          const o = n.vJ.toUint8Array(e);
          if (!a(this, o, t, r)) return -1;
          const s = o.subarray(t, t + r);
          if (0 === s.length) return (this.error = "Zero buffer length"), -1;
          if (255 === s[0]) return (this.error = "Length block 0xFF is reserved by standard"), -1;
          if (((this.isIndefiniteForm = 128 === s[0]), this.isIndefiniteForm)) return (this.blockLength = 1), t + this.blockLength;
          if (((this.longFormUsed = !!(128 & s[0])), !1 === this.longFormUsed))
            return (this.length = s[0]), (this.blockLength = 1), t + this.blockLength;
          const c = 127 & s[0];
          if (c > 8) return (this.error = "Too big integer"), -1;
          if (c + 1 > s.length) return (this.error = "End of input reached before message was fully decoded"), -1;
          const l = t + 1,
            u = o.subarray(l, l + c);
          return (
            0 === u[c - 1] && this.warnings.push("Needlessly long encoded length"),
            (this.length = i.r9(u, 8)),
            this.longFormUsed && this.length <= 127 && this.warnings.push("Unnecessary usage of long length form"),
            (this.blockLength = c + 1),
            t + this.blockLength
          );
        }
        toBER(e = !1) {
          let t, r;
          if ((this.length > 127 && (this.longFormUsed = !0), this.isIndefiniteForm))
            return (t = new ArrayBuffer(1)), !1 === e && ((r = new Uint8Array(t)), (r[0] = 128)), t;
          if (this.longFormUsed) {
            const n = i.lL(this.length, 8);
            if (n.byteLength > 127) return (this.error = "Too big length"), B;
            if (((t = new ArrayBuffer(n.byteLength + 1)), e)) return t;
            const o = new Uint8Array(n);
            (r = new Uint8Array(t)), (r[0] = 128 | n.byteLength);
            for (let e = 0; e < n.byteLength; e++) r[e + 1] = o[e];
            return t;
          }
          return (t = new ArrayBuffer(1)), !1 === e && ((r = new Uint8Array(t)), (r[0] = this.length)), t;
        }
        toJSON() {
          return { ...super.toJSON(), isIndefiniteForm: this.isIndefiniteForm, longFormUsed: this.longFormUsed, length: this.length };
        }
      }
      U.NAME = "lengthBlock";
      const j = {};
      class I extends N {
        constructor({ name: e = k, optional: t = !1, primitiveSchema: r, ...n } = {}, i) {
          super(n),
            (this.name = e),
            (this.optional = t),
            r && (this.primitiveSchema = r),
            (this.idBlock = new C(n)),
            (this.lenBlock = new U(n)),
            (this.valueBlock = i ? new i(n) : new O(n));
        }
        fromBER(e, t, r) {
          const n = this.valueBlock.fromBER(e, t, this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n
            ? ((this.error = this.valueBlock.error), n)
            : (this.idBlock.error.length || (this.blockLength += this.idBlock.blockLength),
              this.lenBlock.error.length || (this.blockLength += this.lenBlock.blockLength),
              this.valueBlock.error.length || (this.blockLength += this.valueBlock.blockLength),
              n);
        }
        toBER(e, t) {
          const r = t || new c();
          t || T(this);
          const n = this.idBlock.toBER(e);
          if ((r.write(n), this.lenBlock.isIndefiniteForm))
            r.write(new Uint8Array([128]).buffer), this.valueBlock.toBER(e, r), r.write(new ArrayBuffer(2));
          else {
            const t = this.valueBlock.toBER(e);
            this.lenBlock.length = t.byteLength;
            const n = this.lenBlock.toBER(e);
            r.write(n), r.write(t);
          }
          return t ? B : r.final();
        }
        toJSON() {
          const e = {
            ...super.toJSON(),
            idBlock: this.idBlock.toJSON(),
            lenBlock: this.lenBlock.toJSON(),
            valueBlock: this.valueBlock.toJSON(),
            name: this.name,
            optional: this.optional
          };
          return this.primitiveSchema && (e.primitiveSchema = this.primitiveSchema.toJSON()), e;
        }
        toString(e = "ascii") {
          return "ascii" === e ? this.onAsciiEncoding() : n.ep.ToHex(this.toBER());
        }
        onAsciiEncoding() {
          return `${this.constructor.NAME} : ${n.ep.ToHex(this.valueBlock.valueBeforeDecodeView)}`;
        }
        isEqual(e) {
          if (this === e) return !0;
          if (!(e instanceof this.constructor)) return !1;
          const t = this.toBER(),
            r = e.toBER();
          return i.dN(t, r);
        }
      }
      function T(e) {
        if (e instanceof j.Constructed) for (const t of e.valueBlock.value) T(t) && (e.lenBlock.isIndefiniteForm = !0);
        return !!e.lenBlock.isIndefiniteForm;
      }
      I.NAME = "BaseBlock";
      class R extends I {
        constructor({ value: e = k, ...t } = {}, r) {
          super(t, r), e && this.fromString(e);
        }
        getValue() {
          return this.valueBlock.value;
        }
        setValue(e) {
          this.valueBlock.value = e;
        }
        fromBER(e, t, r) {
          const n = this.valueBlock.fromBER(e, t, this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n
            ? ((this.error = this.valueBlock.error), n)
            : (this.fromBuffer(this.valueBlock.valueHexView),
              this.idBlock.error.length || (this.blockLength += this.idBlock.blockLength),
              this.lenBlock.error.length || (this.blockLength += this.lenBlock.blockLength),
              this.valueBlock.error.length || (this.blockLength += this.valueBlock.blockLength),
              n);
        }
        onAsciiEncoding() {
          return `${this.constructor.NAME} : '${this.valueBlock.value}'`;
        }
      }
      R.NAME = "BaseStringBlock";
      class L extends x(O) {
        constructor({ isHexOnly: e = !0, ...t } = {}) {
          super(t), (this.isHexOnly = e);
        }
      }
      var V, H, D, M, F, q, P, J, W, G, $, z, K, X, Z, Y, Q, ee, te, re, ne, ie, oe, se, ae, ce, le, ue, fe, he, de, pe, ge;
      L.NAME = "PrimitiveValueBlock";
      class ye extends I {
        constructor(e = {}) {
          super(e, L), (this.idBlock.isConstructed = !1);
        }
      }
      function ve(e, t = 0, r = e.length) {
        const n = t;
        let i = new I({}, O);
        const o = new N();
        if (!a(o, e, t, r)) return (i.error = o.error), { offset: -1, result: i };
        if (!e.subarray(t, t + r).length) return (i.error = "Zero buffer length"), { offset: -1, result: i };
        let s = i.idBlock.fromBER(e, t, r);
        if ((i.idBlock.warnings.length && i.warnings.concat(i.idBlock.warnings), -1 === s))
          return (i.error = i.idBlock.error), { offset: -1, result: i };
        if (
          ((t = s),
          (r -= i.idBlock.blockLength),
          (s = i.lenBlock.fromBER(e, t, r)),
          i.lenBlock.warnings.length && i.warnings.concat(i.lenBlock.warnings),
          -1 === s)
        )
          return (i.error = i.lenBlock.error), { offset: -1, result: i };
        if (((t = s), (r -= i.lenBlock.blockLength), !i.idBlock.isConstructed && i.lenBlock.isIndefiniteForm))
          return (i.error = "Indefinite length form used for primitive encoding form"), { offset: -1, result: i };
        let c = I;
        if (1 === i.idBlock.tagClass) {
          if (i.idBlock.tagNumber >= 37 && !1 === i.idBlock.isHexOnly)
            return (i.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard"), { offset: -1, result: i };
          switch (i.idBlock.tagNumber) {
            case 0:
              if (i.idBlock.isConstructed && i.lenBlock.length > 0)
                return (i.error = "Type [UNIVERSAL 0] is reserved"), { offset: -1, result: i };
              c = j.EndOfContent;
              break;
            case 1:
              c = j.Boolean;
              break;
            case 2:
              c = j.Integer;
              break;
            case 3:
              c = j.BitString;
              break;
            case 4:
              c = j.OctetString;
              break;
            case 5:
              c = j.Null;
              break;
            case 6:
              c = j.ObjectIdentifier;
              break;
            case 10:
              c = j.Enumerated;
              break;
            case 12:
              c = j.Utf8String;
              break;
            case 13:
              c = j.RelativeObjectIdentifier;
              break;
            case 14:
              c = j.TIME;
              break;
            case 15:
              return (i.error = "[UNIVERSAL 15] is reserved by ASN.1 standard"), { offset: -1, result: i };
            case 16:
              c = j.Sequence;
              break;
            case 17:
              c = j.Set;
              break;
            case 18:
              c = j.NumericString;
              break;
            case 19:
              c = j.PrintableString;
              break;
            case 20:
              c = j.TeletexString;
              break;
            case 21:
              c = j.VideotexString;
              break;
            case 22:
              c = j.IA5String;
              break;
            case 23:
              c = j.UTCTime;
              break;
            case 24:
              c = j.GeneralizedTime;
              break;
            case 25:
              c = j.GraphicString;
              break;
            case 26:
              c = j.VisibleString;
              break;
            case 27:
              c = j.GeneralString;
              break;
            case 28:
              c = j.UniversalString;
              break;
            case 29:
              c = j.CharacterString;
              break;
            case 30:
              c = j.BmpString;
              break;
            case 31:
              c = j.DATE;
              break;
            case 32:
              c = j.TimeOfDay;
              break;
            case 33:
              c = j.DateTime;
              break;
            case 34:
              c = j.Duration;
              break;
            default: {
              const e = i.idBlock.isConstructed ? new j.Constructed() : new j.Primitive();
              (e.idBlock = i.idBlock), (e.lenBlock = i.lenBlock), (e.warnings = i.warnings), (i = e);
            }
          }
        } else c = i.idBlock.isConstructed ? j.Constructed : j.Primitive;
        return (
          (i = (function (e, t) {
            if (e instanceof t) return e;
            const r = new t();
            return (
              (r.idBlock = e.idBlock),
              (r.lenBlock = e.lenBlock),
              (r.warnings = e.warnings),
              (r.valueBeforeDecodeView = e.valueBeforeDecodeView),
              r
            );
          })(i, c)),
          (s = i.fromBER(e, t, i.lenBlock.isIndefiniteForm ? r : i.lenBlock.length)),
          (i.valueBeforeDecodeView = e.subarray(n, n + i.blockLength)),
          { offset: s, result: i }
        );
      }
      function me(e) {
        if (!e.byteLength) {
          const e = new I({}, O);
          return (e.error = "Input buffer has zero length"), { offset: -1, result: e };
        }
        return ve(n.vJ.toUint8Array(e).slice(), 0, e.byteLength);
      }
      (V = ye), (j.Primitive = V), (ye.NAME = "PRIMITIVE");
      class be extends O {
        constructor({ value: e = [], isIndefiniteForm: t = !1, ...r } = {}) {
          super(r), (this.value = e), (this.isIndefiniteForm = t);
        }
        fromBER(e, t, r) {
          const i = n.vJ.toUint8Array(e);
          if (!a(this, i, t, r)) return -1;
          if (((this.valueBeforeDecodeView = i.subarray(t, t + r)), 0 === this.valueBeforeDecodeView.length))
            return this.warnings.push("Zero buffer length"), t;
          let o = t;
          for (; (s = this.isIndefiniteForm), (c = r), (s ? 1 : c) > 0; ) {
            const e = ve(i, o, r);
            if (-1 === e.offset) return (this.error = e.result.error), this.warnings.concat(e.result.warnings), -1;
            if (
              ((o = e.offset),
              (this.blockLength += e.result.blockLength),
              (r -= e.result.blockLength),
              this.value.push(e.result),
              this.isIndefiniteForm && e.result.constructor.NAME === _)
            )
              break;
          }
          var s, c;
          return (
            this.isIndefiniteForm &&
              (this.value[this.value.length - 1].constructor.NAME === _
                ? this.value.pop()
                : this.warnings.push("No EndOfContent block encoded")),
            o
          );
        }
        toBER(e, t) {
          const r = t || new c();
          for (let t = 0; t < this.value.length; t++) this.value[t].toBER(e, r);
          return t ? B : r.final();
        }
        toJSON() {
          const e = { ...super.toJSON(), isIndefiniteForm: this.isIndefiniteForm, value: [] };
          for (const t of this.value) e.value.push(t.toJSON());
          return e;
        }
      }
      be.NAME = "ConstructedValueBlock";
      class we extends I {
        constructor(e = {}) {
          super(e, be), (this.idBlock.isConstructed = !0);
        }
        fromBER(e, t, r) {
          this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
          const n = this.valueBlock.fromBER(e, t, this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
          return -1 === n
            ? ((this.error = this.valueBlock.error), n)
            : (this.idBlock.error.length || (this.blockLength += this.idBlock.blockLength),
              this.lenBlock.error.length || (this.blockLength += this.lenBlock.blockLength),
              this.valueBlock.error.length || (this.blockLength += this.valueBlock.blockLength),
              n);
        }
        onAsciiEncoding() {
          const e = [];
          for (const t of this.valueBlock.value)
            e.push(
              t
                .toString("ascii")
                .split("\n")
                .map((e) => `  ${e}`)
                .join("\n")
            );
          const t = 3 === this.idBlock.tagClass ? `[${this.idBlock.tagNumber}]` : this.constructor.NAME;
          return e.length ? `${t} :\n${e.join("\n")}` : `${t} :`;
        }
      }
      (H = we), (j.Constructed = H), (we.NAME = "CONSTRUCTED");
      class ke extends O {
        fromBER(e, t, r) {
          return t;
        }
        toBER(e) {
          return B;
        }
      }
      ke.override = "EndOfContentValueBlock";
      class Be extends I {
        constructor(e = {}) {
          super(e, ke), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 0);
        }
      }
      (D = Be), (j.EndOfContent = D), (Be.NAME = _);
      class Ee extends I {
        constructor(e = {}) {
          super(e, O), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 5);
        }
        fromBER(e, t, r) {
          return (
            this.lenBlock.length > 0 && this.warnings.push("Non-zero length of value block for Null type"),
            this.idBlock.error.length || (this.blockLength += this.idBlock.blockLength),
            this.lenBlock.error.length || (this.blockLength += this.lenBlock.blockLength),
            (this.blockLength += r),
            t + r > e.byteLength
              ? ((this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)"), -1)
              : t + r
          );
        }
        toBER(e, t) {
          const r = new ArrayBuffer(2);
          if (!e) {
            const e = new Uint8Array(r);
            (e[0] = 5), (e[1] = 0);
          }
          return t && t.write(r), r;
        }
        onAsciiEncoding() {
          return `${this.constructor.NAME}`;
        }
      }
      (M = Ee), (j.Null = M), (Ee.NAME = "NULL");
      class _e extends x(O) {
        constructor({ value: e, ...t } = {}) {
          super(t),
            t.valueHex ? (this.valueHexView = n.vJ.toUint8Array(t.valueHex)) : (this.valueHexView = new Uint8Array(1)),
            e && (this.value = e);
        }
        get value() {
          for (const e of this.valueHexView) if (e > 0) return !0;
          return !1;
        }
        set value(e) {
          this.valueHexView[0] = e ? 255 : 0;
        }
        fromBER(e, t, r) {
          const o = n.vJ.toUint8Array(e);
          return a(this, o, t, r)
            ? ((this.valueHexView = o.subarray(t, t + r)),
              r > 1 && this.warnings.push("Boolean value encoded in more then 1 octet"),
              (this.isHexOnly = !0),
              i.Gc.call(this),
              (this.blockLength = r),
              t + r)
            : -1;
        }
        toBER() {
          return this.valueHexView.slice();
        }
        toJSON() {
          return { ...super.toJSON(), value: this.value };
        }
      }
      _e.NAME = "BooleanValueBlock";
      class Se extends I {
        constructor(e = {}) {
          super(e, _e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 1);
        }
        getValue() {
          return this.valueBlock.value;
        }
        setValue(e) {
          this.valueBlock.value = e;
        }
        onAsciiEncoding() {
          return `${this.constructor.NAME} : ${this.getValue}`;
        }
      }
      (F = Se), (j.Boolean = F), (Se.NAME = "BOOLEAN");
      class Ae extends x(be) {
        constructor({ isConstructed: e = !1, ...t } = {}) {
          super(t), (this.isConstructed = e);
        }
        fromBER(e, t, r) {
          let n = 0;
          if (this.isConstructed) {
            if (((this.isHexOnly = !1), (n = be.prototype.fromBER.call(this, e, t, r)), -1 === n)) return n;
            for (let e = 0; e < this.value.length; e++) {
              const t = this.value[e].constructor.NAME;
              if (t === _) {
                if (this.isIndefiniteForm) break;
                return (this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only"), -1;
              }
              if (t !== S) return (this.error = "OCTET STRING may consists of OCTET STRINGs only"), -1;
            }
          } else (this.isHexOnly = !0), (n = super.fromBER(e, t, r)), (this.blockLength = r);
          return n;
        }
        toBER(e, t) {
          return this.isConstructed
            ? be.prototype.toBER.call(this, e, t)
            : e
            ? new ArrayBuffer(this.valueHexView.byteLength)
            : this.valueHexView.slice().buffer;
        }
        toJSON() {
          return { ...super.toJSON(), isConstructed: this.isConstructed };
        }
      }
      Ae.NAME = "OctetStringValueBlock";
      class xe extends I {
        constructor({ idBlock: e = {}, lenBlock: t = {}, ...r } = {}) {
          var n, i;
          (null !== (n = r.isConstructed) && void 0 !== n) ||
            (r.isConstructed = !!(null === (i = r.value) || void 0 === i ? void 0 : i.length)),
            super(
              { idBlock: { isConstructed: r.isConstructed, ...e }, lenBlock: { ...t, isIndefiniteForm: !!r.isIndefiniteForm }, ...r },
              Ae
            ),
            (this.idBlock.tagClass = 1),
            (this.idBlock.tagNumber = 4);
        }
        fromBER(e, t, r) {
          if (
            ((this.valueBlock.isConstructed = this.idBlock.isConstructed),
            (this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm),
            0 === r)
          )
            return (
              0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength),
              0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength),
              t
            );
          if (!this.valueBlock.isConstructed) {
            const n = (e instanceof ArrayBuffer ? new Uint8Array(e) : e).subarray(t, t + r);
            try {
              if (n.byteLength) {
                const e = ve(n, 0, n.byteLength);
                -1 !== e.offset && e.offset === r && (this.valueBlock.value = [e.result]);
              }
            } catch (e) {}
          }
          return super.fromBER(e, t, r);
        }
        onAsciiEncoding() {
          return this.valueBlock.isConstructed || (this.valueBlock.value && this.valueBlock.value.length)
            ? we.prototype.onAsciiEncoding.call(this)
            : `${this.constructor.NAME} : ${n.ep.ToHex(this.valueBlock.valueHexView)}`;
        }
        getValue() {
          if (!this.idBlock.isConstructed) return this.valueBlock.valueHexView.slice().buffer;
          const e = [];
          for (const t of this.valueBlock.value) t instanceof xe && e.push(t.valueBlock.valueHexView);
          return n.vJ.concat(e);
        }
      }
      (q = xe), (j.OctetString = q), (xe.NAME = S);
      class Ne extends x(be) {
        constructor({ unusedBits: e = 0, isConstructed: t = !1, ...r } = {}) {
          super(r), (this.unusedBits = e), (this.isConstructed = t), (this.blockLength = this.valueHexView.byteLength);
        }
        fromBER(e, t, r) {
          if (!r) return t;
          let i = -1;
          if (this.isConstructed) {
            if (((i = be.prototype.fromBER.call(this, e, t, r)), -1 === i)) return i;
            for (const e of this.value) {
              const t = e.constructor.NAME;
              if (t === _) {
                if (this.isIndefiniteForm) break;
                return (this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only"), -1;
              }
              if (t !== A) return (this.error = "BIT STRING may consists of BIT STRINGs only"), -1;
              const r = e.valueBlock;
              if (this.unusedBits > 0 && r.unusedBits > 0)
                return (this.error = 'Using of "unused bits" inside constructive BIT STRING allowed for least one only'), -1;
              this.unusedBits = r.unusedBits;
            }
            return i;
          }
          const o = n.vJ.toUint8Array(e);
          if (!a(this, o, t, r)) return -1;
          const s = o.subarray(t, t + r);
          if (((this.unusedBits = s[0]), this.unusedBits > 7)) return (this.error = "Unused bits for BitString must be in range 0-7"), -1;
          if (!this.unusedBits) {
            const e = s.subarray(1);
            try {
              if (e.byteLength) {
                const t = ve(e, 0, e.byteLength);
                -1 !== t.offset && t.offset === r - 1 && (this.value = [t.result]);
              }
            } catch (e) {}
          }
          return (this.valueHexView = s.subarray(1)), (this.blockLength = s.length), t + r;
        }
        toBER(e, t) {
          if (this.isConstructed) return be.prototype.toBER.call(this, e, t);
          if (e) return new ArrayBuffer(this.valueHexView.byteLength + 1);
          if (!this.valueHexView.byteLength) return B;
          const r = new Uint8Array(this.valueHexView.length + 1);
          return (r[0] = this.unusedBits), r.set(this.valueHexView, 1), r.buffer;
        }
        toJSON() {
          return { ...super.toJSON(), unusedBits: this.unusedBits, isConstructed: this.isConstructed };
        }
      }
      Ne.NAME = "BitStringValueBlock";
      class Oe extends I {
        constructor({ idBlock: e = {}, lenBlock: t = {}, ...r } = {}) {
          var n, i;
          (null !== (n = r.isConstructed) && void 0 !== n) ||
            (r.isConstructed = !!(null === (i = r.value) || void 0 === i ? void 0 : i.length)),
            super(
              { idBlock: { isConstructed: r.isConstructed, ...e }, lenBlock: { ...t, isIndefiniteForm: !!r.isIndefiniteForm }, ...r },
              Ne
            ),
            (this.idBlock.tagClass = 1),
            (this.idBlock.tagNumber = 3);
        }
        fromBER(e, t, r) {
          return (
            (this.valueBlock.isConstructed = this.idBlock.isConstructed),
            (this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm),
            super.fromBER(e, t, r)
          );
        }
        onAsciiEncoding() {
          if (this.valueBlock.isConstructed || (this.valueBlock.value && this.valueBlock.value.length))
            return we.prototype.onAsciiEncoding.call(this);
          {
            const e = [],
              t = this.valueBlock.valueHexView;
            for (const r of t) e.push(r.toString(2).padStart(8, "0"));
            const r = e.join("");
            return `${this.constructor.NAME} : ${r.substring(0, r.length - this.valueBlock.unusedBits)}`;
          }
        }
      }
      function Ce(e, t) {
        const r = new Uint8Array([0]),
          n = new Uint8Array(e),
          o = new Uint8Array(t);
        let s = n.slice(0);
        const a = s.length - 1,
          c = o.slice(0),
          l = c.length - 1;
        let u = 0;
        let f = 0;
        for (let e = l < a ? a : l; e >= 0; e--, f++) {
          if (!0 == f < c.length) u = s[a - f] + c[l - f] + r[0];
          else u = s[a - f] + r[0];
          if (((r[0] = u / 10), !0 == f >= s.length)) s = i.Ir(new Uint8Array([u % 10]), s);
          else s[a - f] = u % 10;
        }
        return r[0] > 0 && (s = i.Ir(r, s)), s;
      }
      function Ue(e) {
        if (e >= l.length)
          for (let t = l.length; t <= e; t++) {
            const e = new Uint8Array([0]);
            let r = l[t - 1].slice(0);
            for (let t = r.length - 1; t >= 0; t--) {
              const n = new Uint8Array([(r[t] << 1) + e[0]]);
              (e[0] = n[0] / 10), (r[t] = n[0] % 10);
            }
            e[0] > 0 && (r = i.Ir(e, r)), l.push(r);
          }
        return l[e];
      }
      function je(e, t) {
        let r = 0;
        const n = new Uint8Array(e),
          i = new Uint8Array(t),
          o = n.slice(0),
          s = o.length - 1,
          a = i.slice(0),
          c = a.length - 1;
        let l,
          u = 0;
        for (let e = c; e >= 0; e--, u++)
          if (((l = o[s - u] - a[c - u] - r), !0 == l < 0)) (r = 1), (o[s - u] = l + 10);
          else (r = 0), (o[s - u] = l);
        if (r > 0)
          for (let e = s - c + 1; e >= 0; e--, u++) {
            if (((l = o[s - u] - r), !(l < 0))) {
              (r = 0), (o[s - u] = l);
              break;
            }
            (r = 1), (o[s - u] = l + 10);
          }
        return o.slice();
      }
      (P = Oe), (j.BitString = P), (Oe.NAME = A);
      class Ie extends x(O) {
        constructor({ value: e, ...t } = {}) {
          super(t), (this._valueDec = 0), t.valueHex && this.setValueHex(), void 0 !== e && (this.valueDec = e);
        }
        setValueHex() {
          this.valueHexView.length >= 4
            ? (this.warnings.push("Too big Integer for decoding, hex only"), (this.isHexOnly = !0), (this._valueDec = 0))
            : ((this.isHexOnly = !1), this.valueHexView.length > 0 && (this._valueDec = i.Gc.call(this)));
        }
        set valueDec(e) {
          (this._valueDec = e), (this.isHexOnly = !1), (this.valueHexView = new Uint8Array(i.qE(e)));
        }
        get valueDec() {
          return this._valueDec;
        }
        fromDER(e, t, r, n = 0) {
          const i = this.fromBER(e, t, r);
          if (-1 === i) return i;
          const o = this.valueHexView;
          return (
            0 === o[0] && 0 != (128 & o[1])
              ? (this.valueHexView = o.subarray(1))
              : 0 !== n && o.length < n && (n - o.length > 1 && (n = o.length + 1), (this.valueHexView = o.subarray(n - o.length))),
            i
          );
        }
        toDER(e = !1) {
          const t = this.valueHexView;
          switch (!0) {
            case 0 != (128 & t[0]):
              {
                const e = new Uint8Array(this.valueHexView.length + 1);
                (e[0] = 0), e.set(t, 1), (this.valueHexView = e);
              }
              break;
            case 0 === t[0] && 0 == (128 & t[1]):
              this.valueHexView = this.valueHexView.subarray(1);
          }
          return this.toBER(e);
        }
        fromBER(e, t, r) {
          const n = super.fromBER(e, t, r);
          return -1 === n || this.setValueHex(), n;
        }
        toBER(e) {
          return e ? new ArrayBuffer(this.valueHexView.length) : this.valueHexView.slice().buffer;
        }
        toJSON() {
          return { ...super.toJSON(), valueDec: this.valueDec };
        }
        toString() {
          const e = 8 * this.valueHexView.length - 1;
          let t,
            r = new Uint8Array((8 * this.valueHexView.length) / 3),
            n = 0;
          const i = this.valueHexView;
          let o = "",
            s = !1;
          for (let s = i.byteLength - 1; s >= 0; s--) {
            t = i[s];
            for (let i = 0; i < 8; i++) {
              if (1 == (1 & t))
                if (n === e) (r = je(Ue(n), r)), (o = "-");
                else r = Ce(r, Ue(n));
              n++, (t >>= 1);
            }
          }
          for (let e = 0; e < r.length; e++) r[e] && (s = !0), s && (o += u.charAt(r[e]));
          return !1 === s && (o += u.charAt(0)), o;
        }
      }
      (J = Ie),
        (Ie.NAME = "IntegerValueBlock"),
        Object.defineProperty(J.prototype, "valueHex", {
          set: function (e) {
            (this.valueHexView = new Uint8Array(e)), this.setValueHex();
          },
          get: function () {
            return this.valueHexView.slice().buffer;
          }
        });
      class Te extends I {
        constructor(e = {}) {
          super(e, Ie), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 2);
        }
        toBigInt() {
          return o(), BigInt(this.valueBlock.toString());
        }
        static fromBigInt(e) {
          o();
          const t = BigInt(e),
            r = new c(),
            i = t.toString(16).replace(/^-/, ""),
            s = new Uint8Array(n.ep.FromHex(i));
          if (t < 0) {
            const e = new Uint8Array(s.length + (128 & s[0] ? 1 : 0));
            e[0] |= 128;
            const i = BigInt(`0x${n.ep.ToHex(e)}`) + t,
              o = n.vJ.toUint8Array(n.ep.FromHex(i.toString(16)));
            (o[0] |= 128), r.write(o);
          } else 128 & s[0] && r.write(new Uint8Array([0])), r.write(s);
          return new Te({ valueHex: r.final() });
        }
        convertToDER() {
          const e = new Te({ valueHex: this.valueBlock.valueHexView });
          return e.valueBlock.toDER(), e;
        }
        convertFromDER() {
          return new Te({
            valueHex: 0 === this.valueBlock.valueHexView[0] ? this.valueBlock.valueHexView.subarray(1) : this.valueBlock.valueHexView
          });
        }
        onAsciiEncoding() {
          return `${this.constructor.NAME} : ${this.valueBlock.toString()}`;
        }
      }
      (W = Te), (j.Integer = W), (Te.NAME = "INTEGER");
      class Re extends Te {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 10);
        }
      }
      (G = Re), (j.Enumerated = G), (Re.NAME = "ENUMERATED");
      class Le extends x(O) {
        constructor({ valueDec: e = -1, isFirstSid: t = !1, ...r } = {}) {
          super(r), (this.valueDec = e), (this.isFirstSid = t);
        }
        fromBER(e, t, r) {
          if (!r) return t;
          const o = n.vJ.toUint8Array(e);
          if (!a(this, o, t, r)) return -1;
          const s = o.subarray(t, t + r);
          this.valueHexView = new Uint8Array(r);
          for (let e = 0; e < r && ((this.valueHexView[e] = 127 & s[e]), this.blockLength++, 0 != (128 & s[e])); e++);
          const c = new Uint8Array(this.blockLength);
          for (let e = 0; e < this.blockLength; e++) c[e] = this.valueHexView[e];
          return (
            (this.valueHexView = c),
            0 != (128 & s[this.blockLength - 1])
              ? ((this.error = "End of input reached before message was fully decoded"), -1)
              : (0 === this.valueHexView[0] && this.warnings.push("Needlessly long format of SID encoding"),
                this.blockLength <= 8
                  ? (this.valueDec = i.r9(this.valueHexView, 7))
                  : ((this.isHexOnly = !0), this.warnings.push("Too big SID for decoding, hex only")),
                t + this.blockLength)
          );
        }
        set valueBigInt(e) {
          o();
          let t = BigInt(e).toString(2);
          for (; t.length % 7; ) t = "0" + t;
          const r = new Uint8Array(t.length / 7);
          for (let e = 0; e < r.length; e++) r[e] = parseInt(t.slice(7 * e, 7 * e + 7), 2) + (e + 1 < r.length ? 128 : 0);
          this.fromBER(r.buffer, 0, r.length);
        }
        toBER(e) {
          if (this.isHexOnly) {
            if (e) return new ArrayBuffer(this.valueHexView.byteLength);
            const t = this.valueHexView,
              r = new Uint8Array(this.blockLength);
            for (let e = 0; e < this.blockLength - 1; e++) r[e] = 128 | t[e];
            return (r[this.blockLength - 1] = t[this.blockLength - 1]), r.buffer;
          }
          const t = i.lL(this.valueDec, 7);
          if (0 === t.byteLength) return (this.error = "Error during encoding SID value"), B;
          const r = new Uint8Array(t.byteLength);
          if (!e) {
            const e = new Uint8Array(t),
              n = t.byteLength - 1;
            for (let t = 0; t < n; t++) r[t] = 128 | e[t];
            r[n] = e[n];
          }
          return r;
        }
        toString() {
          let e = "";
          if (this.isHexOnly) e = n.ep.ToHex(this.valueHexView);
          else if (this.isFirstSid) {
            let t = this.valueDec;
            this.valueDec <= 39 ? (e = "0.") : this.valueDec <= 79 ? ((e = "1."), (t -= 40)) : ((e = "2."), (t -= 80)), (e += t.toString());
          } else e = this.valueDec.toString();
          return e;
        }
        toJSON() {
          return { ...super.toJSON(), valueDec: this.valueDec, isFirstSid: this.isFirstSid };
        }
      }
      Le.NAME = "sidBlock";
      class Ve extends O {
        constructor({ value: e = k, ...t } = {}) {
          super(t), (this.value = []), e && this.fromString(e);
        }
        fromBER(e, t, r) {
          let n = t;
          for (; r > 0; ) {
            const t = new Le();
            if (((n = t.fromBER(e, n, r)), -1 === n)) return (this.blockLength = 0), (this.error = t.error), n;
            0 === this.value.length && (t.isFirstSid = !0), (this.blockLength += t.blockLength), (r -= t.blockLength), this.value.push(t);
          }
          return n;
        }
        toBER(e) {
          const t = [];
          for (let r = 0; r < this.value.length; r++) {
            const n = this.value[r].toBER(e);
            if (0 === n.byteLength) return (this.error = this.value[r].error), B;
            t.push(n);
          }
          return s(t);
        }
        fromString(e) {
          this.value = [];
          let t = 0,
            r = 0,
            n = "",
            i = !1;
          do {
            if (((r = e.indexOf(".", t)), (n = -1 === r ? e.substring(t) : e.substring(t, r)), (t = r + 1), i)) {
              const e = this.value[0];
              let t = 0;
              switch (e.valueDec) {
                case 0:
                  break;
                case 1:
                  t = 40;
                  break;
                case 2:
                  t = 80;
                  break;
                default:
                  return void (this.value = []);
              }
              const r = parseInt(n, 10);
              if (isNaN(r)) return;
              (e.valueDec = r + t), (i = !1);
            } else {
              const e = new Le();
              if (n > Number.MAX_SAFE_INTEGER) {
                o();
                const t = BigInt(n);
                e.valueBigInt = t;
              } else if (((e.valueDec = parseInt(n, 10)), isNaN(e.valueDec))) return;
              this.value.length || ((e.isFirstSid = !0), (i = !0)), this.value.push(e);
            }
          } while (-1 !== r);
        }
        toString() {
          let e = "",
            t = !1;
          for (let r = 0; r < this.value.length; r++) {
            t = this.value[r].isHexOnly;
            let n = this.value[r].toString();
            0 !== r && (e = `${e}.`), t ? ((n = `{${n}}`), this.value[r].isFirstSid ? (e = `2.{${n} - 80}`) : (e += n)) : (e += n);
          }
          return e;
        }
        toJSON() {
          const e = { ...super.toJSON(), value: this.toString(), sidArray: [] };
          for (let t = 0; t < this.value.length; t++) e.sidArray.push(this.value[t].toJSON());
          return e;
        }
      }
      Ve.NAME = "ObjectIdentifierValueBlock";
      class He extends I {
        constructor(e = {}) {
          super(e, Ve), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 6);
        }
        getValue() {
          return this.valueBlock.toString();
        }
        setValue(e) {
          this.valueBlock.fromString(e);
        }
        onAsciiEncoding() {
          return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
        }
        toJSON() {
          return { ...super.toJSON(), value: this.getValue() };
        }
      }
      ($ = He), (j.ObjectIdentifier = $), (He.NAME = "OBJECT IDENTIFIER");
      class De extends x(N) {
        constructor({ valueDec: e = 0, ...t } = {}) {
          super(t), (this.valueDec = e);
        }
        fromBER(e, t, r) {
          if (0 === r) return t;
          const o = n.vJ.toUint8Array(e);
          if (!a(this, o, t, r)) return -1;
          const s = o.subarray(t, t + r);
          this.valueHexView = new Uint8Array(r);
          for (let e = 0; e < r && ((this.valueHexView[e] = 127 & s[e]), this.blockLength++, 0 != (128 & s[e])); e++);
          const c = new Uint8Array(this.blockLength);
          for (let e = 0; e < this.blockLength; e++) c[e] = this.valueHexView[e];
          return (
            (this.valueHexView = c),
            0 != (128 & s[this.blockLength - 1])
              ? ((this.error = "End of input reached before message was fully decoded"), -1)
              : (0 === this.valueHexView[0] && this.warnings.push("Needlessly long format of SID encoding"),
                this.blockLength <= 8
                  ? (this.valueDec = i.r9(this.valueHexView, 7))
                  : ((this.isHexOnly = !0), this.warnings.push("Too big SID for decoding, hex only")),
                t + this.blockLength)
          );
        }
        toBER(e) {
          if (this.isHexOnly) {
            if (e) return new ArrayBuffer(this.valueHexView.byteLength);
            const t = this.valueHexView,
              r = new Uint8Array(this.blockLength);
            for (let e = 0; e < this.blockLength - 1; e++) r[e] = 128 | t[e];
            return (r[this.blockLength - 1] = t[this.blockLength - 1]), r.buffer;
          }
          const t = i.lL(this.valueDec, 7);
          if (0 === t.byteLength) return (this.error = "Error during encoding SID value"), B;
          const r = new Uint8Array(t.byteLength);
          if (!e) {
            const e = new Uint8Array(t),
              n = t.byteLength - 1;
            for (let t = 0; t < n; t++) r[t] = 128 | e[t];
            r[n] = e[n];
          }
          return r.buffer;
        }
        toString() {
          let e = "";
          return (e = this.isHexOnly ? n.ep.ToHex(this.valueHexView) : this.valueDec.toString()), e;
        }
        toJSON() {
          return { ...super.toJSON(), valueDec: this.valueDec };
        }
      }
      De.NAME = "relativeSidBlock";
      class Me extends O {
        constructor({ value: e = k, ...t } = {}) {
          super(t), (this.value = []), e && this.fromString(e);
        }
        fromBER(e, t, r) {
          let n = t;
          for (; r > 0; ) {
            const t = new De();
            if (((n = t.fromBER(e, n, r)), -1 === n)) return (this.blockLength = 0), (this.error = t.error), n;
            (this.blockLength += t.blockLength), (r -= t.blockLength), this.value.push(t);
          }
          return n;
        }
        toBER(e, t) {
          const r = [];
          for (let t = 0; t < this.value.length; t++) {
            const n = this.value[t].toBER(e);
            if (0 === n.byteLength) return (this.error = this.value[t].error), B;
            r.push(n);
          }
          return s(r);
        }
        fromString(e) {
          this.value = [];
          let t = 0,
            r = 0,
            n = "";
          do {
            (r = e.indexOf(".", t)), (n = -1 === r ? e.substring(t) : e.substring(t, r)), (t = r + 1);
            const i = new De();
            if (((i.valueDec = parseInt(n, 10)), isNaN(i.valueDec))) return !0;
            this.value.push(i);
          } while (-1 !== r);
          return !0;
        }
        toString() {
          let e = "",
            t = !1;
          for (let r = 0; r < this.value.length; r++) {
            t = this.value[r].isHexOnly;
            let n = this.value[r].toString();
            0 !== r && (e = `${e}.`), t ? ((n = `{${n}}`), (e += n)) : (e += n);
          }
          return e;
        }
        toJSON() {
          const e = { ...super.toJSON(), value: this.toString(), sidArray: [] };
          for (let t = 0; t < this.value.length; t++) e.sidArray.push(this.value[t].toJSON());
          return e;
        }
      }
      Me.NAME = "RelativeObjectIdentifierValueBlock";
      class Fe extends I {
        constructor(e = {}) {
          super(e, Me), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 13);
        }
        getValue() {
          return this.valueBlock.toString();
        }
        setValue(e) {
          this.valueBlock.fromString(e);
        }
        onAsciiEncoding() {
          return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
        }
        toJSON() {
          return { ...super.toJSON(), value: this.getValue() };
        }
      }
      (z = Fe), (j.RelativeObjectIdentifier = z), (Fe.NAME = "RelativeObjectIdentifier");
      class qe extends we {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 16);
        }
      }
      (K = qe), (j.Sequence = K), (qe.NAME = "SEQUENCE");
      class Pe extends we {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 17);
        }
      }
      (X = Pe), (j.Set = X), (Pe.NAME = "SET");
      class Je extends x(O) {
        constructor({ ...e } = {}) {
          super(e), (this.isHexOnly = !0), (this.value = k);
        }
        toJSON() {
          return { ...super.toJSON(), value: this.value };
        }
      }
      Je.NAME = "StringValueBlock";
      class We extends Je {}
      We.NAME = "SimpleStringValueBlock";
      class Ge extends R {
        constructor({ ...e } = {}) {
          super(e, We);
        }
        fromBuffer(e) {
          this.valueBlock.value = String.fromCharCode.apply(null, n.vJ.toUint8Array(e));
        }
        fromString(e) {
          const t = e.length,
            r = (this.valueBlock.valueHexView = new Uint8Array(t));
          for (let n = 0; n < t; n++) r[n] = e.charCodeAt(n);
          this.valueBlock.value = e;
        }
      }
      Ge.NAME = "SIMPLE STRING";
      class $e extends Ge {
        fromBuffer(e) {
          this.valueBlock.valueHexView = n.vJ.toUint8Array(e);
          try {
            this.valueBlock.value = n.ep.ToUtf8String(e);
          } catch (t) {
            this.warnings.push(`Error during "decodeURIComponent": ${t}, using raw string`), (this.valueBlock.value = n.ep.ToBinary(e));
          }
        }
        fromString(e) {
          (this.valueBlock.valueHexView = new Uint8Array(n.ep.FromUtf8String(e))), (this.valueBlock.value = e);
        }
      }
      $e.NAME = "Utf8StringValueBlock";
      class ze extends $e {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 12);
        }
      }
      (Z = ze), (j.Utf8String = Z), (ze.NAME = "UTF8String");
      class Ke extends Ge {
        fromBuffer(e) {
          (this.valueBlock.value = n.ep.ToUtf16String(e)), (this.valueBlock.valueHexView = n.vJ.toUint8Array(e));
        }
        fromString(e) {
          (this.valueBlock.value = e), (this.valueBlock.valueHexView = new Uint8Array(n.ep.FromUtf16String(e)));
        }
      }
      Ke.NAME = "BmpStringValueBlock";
      class Xe extends Ke {
        constructor({ ...e } = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 30);
        }
      }
      (Y = Xe), (j.BmpString = Y), (Xe.NAME = "BMPString");
      class Ze extends Ge {
        fromBuffer(e) {
          const t = ArrayBuffer.isView(e) ? e.slice().buffer : e.slice(0),
            r = new Uint8Array(t);
          for (let e = 0; e < r.length; e += 4) (r[e] = r[e + 3]), (r[e + 1] = r[e + 2]), (r[e + 2] = 0), (r[e + 3] = 0);
          this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(t));
        }
        fromString(e) {
          const t = e.length,
            r = (this.valueBlock.valueHexView = new Uint8Array(4 * t));
          for (let n = 0; n < t; n++) {
            const t = i.lL(e.charCodeAt(n), 8),
              o = new Uint8Array(t);
            if (o.length > 4) continue;
            const s = 4 - o.length;
            for (let e = o.length - 1; e >= 0; e--) r[4 * n + e + s] = o[e];
          }
          this.valueBlock.value = e;
        }
      }
      Ze.NAME = "UniversalStringValueBlock";
      class Ye extends Ze {
        constructor({ ...e } = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 28);
        }
      }
      (Q = Ye), (j.UniversalString = Q), (Ye.NAME = "UniversalString");
      class Qe extends Ge {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 18);
        }
      }
      (ee = Qe), (j.NumericString = ee), (Qe.NAME = "NumericString");
      class et extends Ge {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 19);
        }
      }
      (te = et), (j.PrintableString = te), (et.NAME = "PrintableString");
      class tt extends Ge {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 20);
        }
      }
      (re = tt), (j.TeletexString = re), (tt.NAME = "TeletexString");
      class rt extends Ge {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 21);
        }
      }
      (ne = rt), (j.VideotexString = ne), (rt.NAME = "VideotexString");
      class nt extends Ge {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 22);
        }
      }
      (ie = nt), (j.IA5String = ie), (nt.NAME = "IA5String");
      class it extends Ge {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 25);
        }
      }
      (oe = it), (j.GraphicString = oe), (it.NAME = "GraphicString");
      class ot extends Ge {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 26);
        }
      }
      (se = ot), (j.VisibleString = se), (ot.NAME = "VisibleString");
      class st extends Ge {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 27);
        }
      }
      (ae = st), (j.GeneralString = ae), (st.NAME = "GeneralString");
      class at extends Ge {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 29);
        }
      }
      (ce = at), (j.CharacterString = ce), (at.NAME = "CharacterString");
      class ct extends ot {
        constructor({ value: e, valueDate: t, ...r } = {}) {
          if ((super(r), (this.year = 0), (this.month = 0), (this.day = 0), (this.hour = 0), (this.minute = 0), (this.second = 0), e)) {
            this.fromString(e), (this.valueBlock.valueHexView = new Uint8Array(e.length));
            for (let t = 0; t < e.length; t++) this.valueBlock.valueHexView[t] = e.charCodeAt(t);
          }
          t && (this.fromDate(t), (this.valueBlock.valueHexView = new Uint8Array(this.toBuffer()))),
            (this.idBlock.tagClass = 1),
            (this.idBlock.tagNumber = 23);
        }
        fromBuffer(e) {
          this.fromString(String.fromCharCode.apply(null, n.vJ.toUint8Array(e)));
        }
        toBuffer() {
          const e = this.toString(),
            t = new ArrayBuffer(e.length),
            r = new Uint8Array(t);
          for (let t = 0; t < e.length; t++) r[t] = e.charCodeAt(t);
          return t;
        }
        fromDate(e) {
          (this.year = e.getUTCFullYear()),
            (this.month = e.getUTCMonth() + 1),
            (this.day = e.getUTCDate()),
            (this.hour = e.getUTCHours()),
            (this.minute = e.getUTCMinutes()),
            (this.second = e.getUTCSeconds());
        }
        toDate() {
          return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
        }
        fromString(e) {
          const t = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/gi.exec(e);
          if (null === t) return void (this.error = "Wrong input string for conversion");
          const r = parseInt(t[1], 10);
          (this.year = r >= 50 ? 1900 + r : 2e3 + r),
            (this.month = parseInt(t[2], 10)),
            (this.day = parseInt(t[3], 10)),
            (this.hour = parseInt(t[4], 10)),
            (this.minute = parseInt(t[5], 10)),
            (this.second = parseInt(t[6], 10));
        }
        toString(e = "iso") {
          if ("iso" === e) {
            const e = new Array(7);
            return (
              (e[0] = i.vX(this.year < 2e3 ? this.year - 1900 : this.year - 2e3, 2)),
              (e[1] = i.vX(this.month, 2)),
              (e[2] = i.vX(this.day, 2)),
              (e[3] = i.vX(this.hour, 2)),
              (e[4] = i.vX(this.minute, 2)),
              (e[5] = i.vX(this.second, 2)),
              (e[6] = "Z"),
              e.join("")
            );
          }
          return super.toString(e);
        }
        onAsciiEncoding() {
          return `${this.constructor.NAME} : ${this.toDate().toISOString()}`;
        }
        toJSON() {
          return {
            ...super.toJSON(),
            year: this.year,
            month: this.month,
            day: this.day,
            hour: this.hour,
            minute: this.minute,
            second: this.second
          };
        }
      }
      (le = ct), (j.UTCTime = le), (ct.NAME = "UTCTime");
      class lt extends ct {
        constructor(e = {}) {
          var t;
          super(e),
            (null !== (t = this.millisecond) && void 0 !== t) || (this.millisecond = 0),
            (this.idBlock.tagClass = 1),
            (this.idBlock.tagNumber = 24);
        }
        fromDate(e) {
          super.fromDate(e), (this.millisecond = e.getUTCMilliseconds());
        }
        toDate() {
          return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond));
        }
        fromString(e) {
          let t,
            r = !1,
            n = "",
            i = "",
            o = 0,
            s = 0,
            a = 0;
          if ("Z" === e[e.length - 1]) (n = e.substring(0, e.length - 1)), (r = !0);
          else {
            const t = new Number(e[e.length - 1]);
            if (isNaN(t.valueOf())) throw new Error("Wrong input string for conversion");
            n = e;
          }
          if (r) {
            if (-1 !== n.indexOf("+")) throw new Error("Wrong input string for conversion");
            if (-1 !== n.indexOf("-")) throw new Error("Wrong input string for conversion");
          } else {
            let e = 1,
              t = n.indexOf("+"),
              r = "";
            if ((-1 === t && ((t = n.indexOf("-")), (e = -1)), -1 !== t)) {
              if (((r = n.substring(t + 1)), (n = n.substring(0, t)), 2 !== r.length && 4 !== r.length))
                throw new Error("Wrong input string for conversion");
              let i = parseInt(r.substring(0, 2), 10);
              if (isNaN(i.valueOf())) throw new Error("Wrong input string for conversion");
              if (((s = e * i), 4 === r.length)) {
                if (((i = parseInt(r.substring(2, 4), 10)), isNaN(i.valueOf()))) throw new Error("Wrong input string for conversion");
                a = e * i;
              }
            }
          }
          let c = n.indexOf(".");
          if ((-1 === c && (c = n.indexOf(",")), -1 !== c)) {
            const e = new Number(`0${n.substring(c)}`);
            if (isNaN(e.valueOf())) throw new Error("Wrong input string for conversion");
            (o = e.valueOf()), (i = n.substring(0, c));
          } else i = n;
          switch (!0) {
            case 8 === i.length:
              if (((t = /(\d{4})(\d{2})(\d{2})/gi), -1 !== c)) throw new Error("Wrong input string for conversion");
              break;
            case 10 === i.length:
              if (((t = /(\d{4})(\d{2})(\d{2})(\d{2})/gi), -1 !== c)) {
                let e = 60 * o;
                (this.minute = Math.floor(e)),
                  (e = 60 * (e - this.minute)),
                  (this.second = Math.floor(e)),
                  (e = 1e3 * (e - this.second)),
                  (this.millisecond = Math.floor(e));
              }
              break;
            case 12 === i.length:
              if (((t = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/gi), -1 !== c)) {
                let e = 60 * o;
                (this.second = Math.floor(e)), (e = 1e3 * (e - this.second)), (this.millisecond = Math.floor(e));
              }
              break;
            case 14 === i.length:
              if (((t = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/gi), -1 !== c)) {
                const e = 1e3 * o;
                this.millisecond = Math.floor(e);
              }
              break;
            default:
              throw new Error("Wrong input string for conversion");
          }
          const l = t.exec(i);
          if (null === l) throw new Error("Wrong input string for conversion");
          for (let e = 1; e < l.length; e++)
            switch (e) {
              case 1:
                this.year = parseInt(l[e], 10);
                break;
              case 2:
                this.month = parseInt(l[e], 10);
                break;
              case 3:
                this.day = parseInt(l[e], 10);
                break;
              case 4:
                this.hour = parseInt(l[e], 10) + s;
                break;
              case 5:
                this.minute = parseInt(l[e], 10) + a;
                break;
              case 6:
                this.second = parseInt(l[e], 10);
                break;
              default:
                throw new Error("Wrong input string for conversion");
            }
          if (!1 === r) {
            const e = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
            (this.year = e.getUTCFullYear()),
              (this.month = e.getUTCMonth()),
              (this.day = e.getUTCDay()),
              (this.hour = e.getUTCHours()),
              (this.minute = e.getUTCMinutes()),
              (this.second = e.getUTCSeconds()),
              (this.millisecond = e.getUTCMilliseconds());
          }
        }
        toString(e = "iso") {
          if ("iso" === e) {
            const e = [];
            return (
              e.push(i.vX(this.year, 4)),
              e.push(i.vX(this.month, 2)),
              e.push(i.vX(this.day, 2)),
              e.push(i.vX(this.hour, 2)),
              e.push(i.vX(this.minute, 2)),
              e.push(i.vX(this.second, 2)),
              0 !== this.millisecond && (e.push("."), e.push(i.vX(this.millisecond, 3))),
              e.push("Z"),
              e.join("")
            );
          }
          return super.toString(e);
        }
        toJSON() {
          return { ...super.toJSON(), millisecond: this.millisecond };
        }
      }
      (ue = lt), (j.GeneralizedTime = ue), (lt.NAME = "GeneralizedTime");
      class ut extends ze {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 31);
        }
      }
      (fe = ut), (j.DATE = fe), (ut.NAME = "DATE");
      class ft extends ze {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 32);
        }
      }
      (he = ft), (j.TimeOfDay = he), (ft.NAME = "TimeOfDay");
      class ht extends ze {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 33);
        }
      }
      (de = ht), (j.DateTime = de), (ht.NAME = "DateTime");
      class dt extends ze {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 34);
        }
      }
      (pe = dt), (j.Duration = pe), (dt.NAME = "Duration");
      class pt extends ze {
        constructor(e = {}) {
          super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 14);
        }
      }
      (ge = pt), (j.TIME = ge), (pt.NAME = "TIME");
      class gt {
        constructor({ name: e = k, optional: t = !1 } = {}) {
          (this.name = e), (this.optional = t);
        }
      }
      class yt extends gt {
        constructor({ value: e = [], ...t } = {}) {
          super(t), (this.value = e);
        }
      }
      class vt extends gt {
        constructor({ value: e = new gt(), local: t = !1, ...r } = {}) {
          super(r), (this.value = e), (this.local = t);
        }
      }
      class mt {
        constructor({ data: e = E } = {}) {
          this.dataView = n.vJ.toUint8Array(e);
        }
        get data() {
          return this.dataView.slice().buffer;
        }
        set data(e) {
          this.dataView = n.vJ.toUint8Array(e);
        }
        fromBER(e, t, r) {
          const i = t + r;
          return (this.dataView = n.vJ.toUint8Array(e).subarray(t, i)), i;
        }
        toBER(e) {
          return this.dataView.slice().buffer;
        }
      }
      function bt(e, t, r) {
        if (r instanceof yt) {
          for (let n = 0; n < r.value.length; n++) {
            if (bt(e, t, r.value[n]).verified) return { verified: !0, result: e };
          }
          {
            const e = { verified: !1, result: { error: "Wrong values for Choice type" } };
            return r.hasOwnProperty(f) && (e.name = r.name), e;
          }
        }
        if (r instanceof gt) return r.hasOwnProperty(f) && (e[r.name] = t), { verified: !0, result: e };
        if (e instanceof Object == !1) return { verified: !1, result: { error: "Wrong root object" } };
        if (t instanceof Object == !1) return { verified: !1, result: { error: "Wrong ASN.1 data" } };
        if (r instanceof Object == !1) return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (p in r == !1) return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (m in r.idBlock == !1) return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (b in r.idBlock == !1) return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        const n = r.idBlock.toBER(!1);
        if (0 === n.byteLength) return { verified: !1, result: { error: "Error encoding idBlock for ASN.1 schema" } };
        if (-1 === r.idBlock.fromBER(n, 0, n.byteLength))
          return { verified: !1, result: { error: "Error decoding idBlock for ASN.1 schema" } };
        if (!1 === r.idBlock.hasOwnProperty(g)) return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (r.idBlock.tagClass !== t.idBlock.tagClass) return { verified: !1, result: e };
        if (!1 === r.idBlock.hasOwnProperty(y)) return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (r.idBlock.tagNumber !== t.idBlock.tagNumber) return { verified: !1, result: e };
        if (!1 === r.idBlock.hasOwnProperty(v)) return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (r.idBlock.isConstructed !== t.idBlock.isConstructed) return { verified: !1, result: e };
        if (!(d in r.idBlock)) return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
        if (r.idBlock.isHexOnly !== t.idBlock.isHexOnly) return { verified: !1, result: e };
        if (r.idBlock.isHexOnly) {
          if (h in r.idBlock == !1) return { verified: !1, result: { error: "Wrong ASN.1 schema" } };
          const n = r.idBlock.valueHexView,
            i = t.idBlock.valueHexView;
          if (n.length !== i.length) return { verified: !1, result: e };
          for (let t = 0; t < n.length; t++) if (n[t] !== i[1]) return { verified: !1, result: e };
        }
        if ((r.name && ((r.name = r.name.replace(/^\s+|\s+$/g, k)), r.name && (e[r.name] = t)), r instanceof j.Constructed)) {
          let n = 0,
            i = { verified: !1, result: { error: "Unknown error" } },
            o = r.valueBlock.value.length;
          if ((o > 0 && r.valueBlock.value[0] instanceof vt && (o = t.valueBlock.value.length), 0 === o))
            return { verified: !0, result: e };
          if (0 === t.valueBlock.value.length && 0 !== r.valueBlock.value.length) {
            let t = !0;
            for (let e = 0; e < r.valueBlock.value.length; e++) t = t && (r.valueBlock.value[e].optional || !1);
            return t
              ? { verified: !0, result: e }
              : (r.name && ((r.name = r.name.replace(/^\s+|\s+$/g, k)), r.name && delete e[r.name]),
                (e.error = "Inconsistent object length"),
                { verified: !1, result: e });
          }
          for (let s = 0; s < o; s++)
            if (s - n >= t.valueBlock.value.length) {
              if (!1 === r.valueBlock.value[s].optional) {
                const t = { verified: !1, result: e };
                return (
                  (e.error = "Inconsistent length between ASN.1 data and schema"),
                  r.name && ((r.name = r.name.replace(/^\s+|\s+$/g, k)), r.name && (delete e[r.name], (t.name = r.name))),
                  t
                );
              }
            } else if (r.valueBlock.value[0] instanceof vt) {
              if (((i = bt(e, t.valueBlock.value[s], r.valueBlock.value[0].value)), !1 === i.verified)) {
                if (!r.valueBlock.value[0].optional)
                  return r.name && ((r.name = r.name.replace(/^\s+|\s+$/g, k)), r.name && delete e[r.name]), i;
                n++;
              }
              if (f in r.valueBlock.value[0] && r.valueBlock.value[0].name.length > 0) {
                let n = {};
                (n = w in r.valueBlock.value[0] && r.valueBlock.value[0].local ? t : e),
                  void 0 === n[r.valueBlock.value[0].name] && (n[r.valueBlock.value[0].name] = []),
                  n[r.valueBlock.value[0].name].push(t.valueBlock.value[s]);
              }
            } else if (((i = bt(e, t.valueBlock.value[s - n], r.valueBlock.value[s])), !1 === i.verified)) {
              if (!r.valueBlock.value[s].optional)
                return r.name && ((r.name = r.name.replace(/^\s+|\s+$/g, k)), r.name && delete e[r.name]), i;
              n++;
            }
          if (!1 === i.verified) {
            const t = { verified: !1, result: e };
            return r.name && ((r.name = r.name.replace(/^\s+|\s+$/g, k)), r.name && (delete e[r.name], (t.name = r.name))), t;
          }
          return { verified: !0, result: e };
        }
        if (r.primitiveSchema && h in t.valueBlock) {
          const n = ve(t.valueBlock.valueHexView);
          if (-1 === n.offset) {
            const t = { verified: !1, result: n.result };
            return r.name && ((r.name = r.name.replace(/^\s+|\s+$/g, k)), r.name && (delete e[r.name], (t.name = r.name))), t;
          }
          return bt(e, n.result, r.primitiveSchema);
        }
        return { verified: !0, result: e };
      }
    },
    57579: (e, t, r) => {
      "use strict";
      var n = r(73656);
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }),
          i(e)
        );
      }
      var o,
        s,
        a = r(79171).codes,
        c = a.ERR_AMBIGUOUS_ARGUMENT,
        l = a.ERR_INVALID_ARG_TYPE,
        u = a.ERR_INVALID_ARG_VALUE,
        f = a.ERR_INVALID_RETURN_VALUE,
        h = a.ERR_MISSING_ARGS,
        d = r(2839),
        p = r(80911).inspect,
        g = r(80911).types,
        y = g.isPromise,
        v = g.isRegExp,
        m = Object.assign ? Object.assign : r(69626).assign,
        b = Object.is ? Object.is : r(42641);
      new Map();
      function w() {
        var e = r(38603);
        (o = e.isDeepEqual), (s = e.isDeepStrictEqual);
      }
      var k = !1,
        B = (e.exports = A),
        E = {};
      function _(e) {
        if (e.message instanceof Error) throw e.message;
        throw new d(e);
      }
      function S(e, t, r, n) {
        if (!r) {
          var i = !1;
          if (0 === t) (i = !0), (n = "No value argument passed to `assert.ok()`");
          else if (n instanceof Error) throw n;
          var o = new d({ actual: r, expected: !0, message: n, operator: "==", stackStartFn: e });
          throw ((o.generatedMessage = i), o);
        }
      }
      function A() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        S.apply(void 0, [A, t.length].concat(t));
      }
      (B.fail = function e(t, r, i, o, s) {
        var a,
          c = arguments.length;
        if (0 === c) a = "Failed";
        else if (1 === c) (i = t), (t = void 0);
        else {
          if (!1 === k)
            (k = !0),
              (n.emitWarning ? n.emitWarning : console.warn.bind(console))(
                "assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.",
                "DeprecationWarning",
                "DEP0094"
              );
          2 === c && (o = "!=");
        }
        if (i instanceof Error) throw i;
        var l = { actual: t, expected: r, operator: void 0 === o ? "fail" : o, stackStartFn: s || e };
        void 0 !== i && (l.message = i);
        var u = new d(l);
        throw (a && ((u.message = a), (u.generatedMessage = !0)), u);
      }),
        (B.AssertionError = d),
        (B.ok = A),
        (B.equal = function e(t, r, n) {
          if (arguments.length < 2) throw new h("actual", "expected");
          t != r && _({ actual: t, expected: r, message: n, operator: "==", stackStartFn: e });
        }),
        (B.notEqual = function e(t, r, n) {
          if (arguments.length < 2) throw new h("actual", "expected");
          t == r && _({ actual: t, expected: r, message: n, operator: "!=", stackStartFn: e });
        }),
        (B.deepEqual = function e(t, r, n) {
          if (arguments.length < 2) throw new h("actual", "expected");
          void 0 === o && w(), o(t, r) || _({ actual: t, expected: r, message: n, operator: "deepEqual", stackStartFn: e });
        }),
        (B.notDeepEqual = function e(t, r, n) {
          if (arguments.length < 2) throw new h("actual", "expected");
          void 0 === o && w(), o(t, r) && _({ actual: t, expected: r, message: n, operator: "notDeepEqual", stackStartFn: e });
        }),
        (B.deepStrictEqual = function e(t, r, n) {
          if (arguments.length < 2) throw new h("actual", "expected");
          void 0 === o && w(), s(t, r) || _({ actual: t, expected: r, message: n, operator: "deepStrictEqual", stackStartFn: e });
        }),
        (B.notDeepStrictEqual = function e(t, r, n) {
          if (arguments.length < 2) throw new h("actual", "expected");
          void 0 === o && w();
          s(t, r) && _({ actual: t, expected: r, message: n, operator: "notDeepStrictEqual", stackStartFn: e });
        }),
        (B.strictEqual = function e(t, r, n) {
          if (arguments.length < 2) throw new h("actual", "expected");
          b(t, r) || _({ actual: t, expected: r, message: n, operator: "strictEqual", stackStartFn: e });
        }),
        (B.notStrictEqual = function e(t, r, n) {
          if (arguments.length < 2) throw new h("actual", "expected");
          b(t, r) && _({ actual: t, expected: r, message: n, operator: "notStrictEqual", stackStartFn: e });
        });
      var x = function e(t, r, n) {
        var i = this;
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, e),
          r.forEach(function (e) {
            e in t && (void 0 !== n && "string" == typeof n[e] && v(t[e]) && t[e].test(n[e]) ? (i[e] = n[e]) : (i[e] = t[e]));
          });
      };
      function N(e, t, r, n) {
        if ("function" != typeof t) {
          if (v(t)) return t.test(e);
          if (2 === arguments.length) throw new l("expected", ["Function", "RegExp"], t);
          if ("object" !== i(e) || null === e) {
            var a = new d({ actual: e, expected: t, message: r, operator: "deepStrictEqual", stackStartFn: n });
            throw ((a.operator = n.name), a);
          }
          var c = Object.keys(t);
          if (t instanceof Error) c.push("name", "message");
          else if (0 === c.length) throw new u("error", t, "may not be an empty object");
          return (
            void 0 === o && w(),
            c.forEach(function (i) {
              ("string" == typeof e[i] && v(t[i]) && t[i].test(e[i])) ||
                (function (e, t, r, n, i, o) {
                  if (!(r in e) || !s(e[r], t[r])) {
                    if (!n) {
                      var a = new x(e, i),
                        c = new x(t, i, e),
                        l = new d({ actual: a, expected: c, operator: "deepStrictEqual", stackStartFn: o });
                      throw ((l.actual = e), (l.expected = t), (l.operator = o.name), l);
                    }
                    _({ actual: e, expected: t, message: n, operator: o.name, stackStartFn: o });
                  }
                })(e, t, i, r, c, n);
            }),
            !0
          );
        }
        return (void 0 !== t.prototype && e instanceof t) || (!Error.isPrototypeOf(t) && !0 === t.call({}, e));
      }
      function O(e) {
        if ("function" != typeof e) throw new l("fn", "Function", e);
        try {
          e();
        } catch (e) {
          return e;
        }
        return E;
      }
      function C(e) {
        return y(e) || (null !== e && "object" === i(e) && "function" == typeof e.then && "function" == typeof e.catch);
      }
      function U(e) {
        return Promise.resolve().then(function () {
          var t;
          if ("function" == typeof e) {
            if (!C((t = e()))) throw new f("instance of Promise", "promiseFn", t);
          } else {
            if (!C(e)) throw new l("promiseFn", ["Function", "Promise"], e);
            t = e;
          }
          return Promise.resolve()
            .then(function () {
              return t;
            })
            .then(function () {
              return E;
            })
            .catch(function (e) {
              return e;
            });
        });
      }
      function j(e, t, r, n) {
        if ("string" == typeof r) {
          if (4 === arguments.length) throw new l("error", ["Object", "Error", "Function", "RegExp"], r);
          if ("object" === i(t) && null !== t) {
            if (t.message === r) throw new c("error/message", 'The error message "'.concat(t.message, '" is identical to the message.'));
          } else if (t === r) throw new c("error/message", 'The error "'.concat(t, '" is identical to the message.'));
          (n = r), (r = void 0);
        } else if (null != r && "object" !== i(r) && "function" != typeof r)
          throw new l("error", ["Object", "Error", "Function", "RegExp"], r);
        if (t === E) {
          var o = "";
          r && r.name && (o += " (".concat(r.name, ")")), (o += n ? ": ".concat(n) : ".");
          var s = "rejects" === e.name ? "rejection" : "exception";
          _({ actual: void 0, expected: r, operator: e.name, message: "Missing expected ".concat(s).concat(o), stackStartFn: e });
        }
        if (r && !N(t, r, n, e)) throw t;
      }
      function I(e, t, r, n) {
        if (t !== E) {
          if (("string" == typeof r && ((n = r), (r = void 0)), !r || N(t, r))) {
            var i = n ? ": ".concat(n) : ".",
              o = "doesNotReject" === e.name ? "rejection" : "exception";
            _({
              actual: t,
              expected: r,
              operator: e.name,
              message: "Got unwanted ".concat(o).concat(i, "\n") + 'Actual message: "'.concat(t && t.message, '"'),
              stackStartFn: e
            });
          }
          throw t;
        }
      }
      function T() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        S.apply(void 0, [T, t.length].concat(t));
      }
      (B.throws = function e(t) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
        j.apply(void 0, [e, O(t)].concat(n));
      }),
        (B.rejects = function e(t) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
          return U(t).then(function (t) {
            return j.apply(void 0, [e, t].concat(n));
          });
        }),
        (B.doesNotThrow = function e(t) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
          I.apply(void 0, [e, O(t)].concat(n));
        }),
        (B.doesNotReject = function e(t) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
          return U(t).then(function (t) {
            return I.apply(void 0, [e, t].concat(n));
          });
        }),
        (B.ifError = function e(t) {
          if (null != t) {
            var r = "ifError got unwanted exception: ";
            "object" === i(t) && "string" == typeof t.message
              ? 0 === t.message.length && t.constructor
                ? (r += t.constructor.name)
                : (r += t.message)
              : (r += p(t));
            var n = new d({ actual: t, expected: null, operator: "ifError", message: r, stackStartFn: e }),
              o = t.stack;
            if ("string" == typeof o) {
              var s = o.split("\n");
              s.shift();
              for (var a = n.stack.split("\n"), c = 0; c < s.length; c++) {
                var l = a.indexOf(s[c]);
                if (-1 !== l) {
                  a = a.slice(0, l);
                  break;
                }
              }
              n.stack = "".concat(a.join("\n"), "\n").concat(s.join("\n"));
            }
            throw n;
          }
        }),
        (B.strict = m(T, B, {
          equal: B.strictEqual,
          deepEqual: B.deepStrictEqual,
          notEqual: B.notStrictEqual,
          notDeepEqual: B.notDeepStrictEqual
        })),
        (B.strict.strict = B.strict);
    },
    2839: (e, t, r) => {
      "use strict";
      var n = r(73656);
      function i(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function s(e, t) {
        return !t || ("object" !== h(t) && "function" != typeof t) ? a(e) : t;
      }
      function a(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function c(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (c = function (e) {
            if (null === e || ((r = e), -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
            var r;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return l(e, arguments, f(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })),
              u(n, e)
            );
          }),
          c(e)
        );
      }
      function l(e, t, r) {
        return (
          (l = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          })()
            ? Reflect.construct
            : function (e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var i = new (Function.bind.apply(e, n))();
                return r && u(i, r.prototype), i;
              }),
          l.apply(null, arguments)
        );
      }
      function u(e, t) {
        return (
          (u =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          u(e, t)
        );
      }
      function f(e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          f(e)
        );
      }
      function h(e) {
        return (
          (h =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }),
          h(e)
        );
      }
      var d = r(80911).inspect,
        p = r(79171).codes.ERR_INVALID_ARG_TYPE;
      function g(e, t, r) {
        return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
      }
      var y = "",
        v = "",
        m = "",
        b = "",
        w = {
          deepStrictEqual: "Expected values to be strictly deep-equal:",
          strictEqual: "Expected values to be strictly equal:",
          strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
          deepEqual: "Expected values to be loosely deep-equal:",
          equal: "Expected values to be loosely equal:",
          notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
          notStrictEqual: 'Expected "actual" to be strictly unequal to:',
          notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
          notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
          notEqual: 'Expected "actual" to be loosely unequal to:',
          notIdentical: "Values identical but not reference-equal:"
        },
        k = 10;
      function B(e) {
        var t = Object.keys(e),
          r = Object.create(Object.getPrototypeOf(e));
        return (
          t.forEach(function (t) {
            r[t] = e[t];
          }),
          Object.defineProperty(r, "message", { value: e.message }),
          r
        );
      }
      function E(e) {
        return d(e, {
          compact: !1,
          customInspect: !1,
          depth: 1e3,
          maxArrayLength: 1 / 0,
          showHidden: !1,
          breakLength: 1 / 0,
          showProxy: !1,
          sorted: !0,
          getters: !0
        });
      }
      function _(e, t, r) {
        var i = "",
          o = "",
          s = 0,
          a = "",
          c = !1,
          l = E(e),
          u = l.split("\n"),
          f = E(t).split("\n"),
          d = 0,
          p = "";
        if (
          ("strictEqual" === r && "object" === h(e) && "object" === h(t) && null !== e && null !== t && (r = "strictEqualObject"),
          1 === u.length && 1 === f.length && u[0] !== f[0])
        ) {
          var B = u[0].length + f[0].length;
          if (B <= k) {
            if (!(("object" === h(e) && null !== e) || ("object" === h(t) && null !== t) || (0 === e && 0 === t)))
              return "".concat(w[r], "\n\n") + "".concat(u[0], " !== ").concat(f[0], "\n");
          } else if ("strictEqualObject" !== r) {
            if (B < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
              for (; u[0][d] === f[0][d]; ) d++;
              d > 2 &&
                ((p = "\n  ".concat(
                  (function (e, t) {
                    if (((t = Math.floor(t)), 0 == e.length || 0 == t)) return "";
                    var r = e.length * t;
                    for (t = Math.floor(Math.log(t) / Math.log(2)); t; ) (e += e), t--;
                    return e + e.substring(0, r - e.length);
                  })(" ", d),
                  "^"
                )),
                (d = 0));
            }
          }
        }
        for (
          var _ = u[u.length - 1], S = f[f.length - 1];
          _ === S && (d++ < 2 ? (a = "\n  ".concat(_).concat(a)) : (i = _), u.pop(), f.pop(), 0 !== u.length && 0 !== f.length);

        )
          (_ = u[u.length - 1]), (S = f[f.length - 1]);
        var A = Math.max(u.length, f.length);
        if (0 === A) {
          var x = l.split("\n");
          if (x.length > 30) for (x[26] = "".concat(y, "...").concat(b); x.length > 27; ) x.pop();
          return "".concat(w.notIdentical, "\n\n").concat(x.join("\n"), "\n");
        }
        d > 3 && ((a = "\n".concat(y, "...").concat(b).concat(a)), (c = !0)), "" !== i && ((a = "\n  ".concat(i).concat(a)), (i = ""));
        var N = 0,
          O = w[r] + "\n".concat(v, "+ actual").concat(b, " ").concat(m, "- expected").concat(b),
          C = " ".concat(y, "...").concat(b, " Lines skipped");
        for (d = 0; d < A; d++) {
          var U = d - s;
          if (u.length < d + 1)
            U > 1 &&
              d > 2 &&
              (U > 4 ? ((o += "\n".concat(y, "...").concat(b)), (c = !0)) : U > 3 && ((o += "\n  ".concat(f[d - 2])), N++),
              (o += "\n  ".concat(f[d - 1])),
              N++),
              (s = d),
              (i += "\n".concat(m, "-").concat(b, " ").concat(f[d])),
              N++;
          else if (f.length < d + 1)
            U > 1 &&
              d > 2 &&
              (U > 4 ? ((o += "\n".concat(y, "...").concat(b)), (c = !0)) : U > 3 && ((o += "\n  ".concat(u[d - 2])), N++),
              (o += "\n  ".concat(u[d - 1])),
              N++),
              (s = d),
              (o += "\n".concat(v, "+").concat(b, " ").concat(u[d])),
              N++;
          else {
            var j = f[d],
              I = u[d],
              T = I !== j && (!g(I, ",") || I.slice(0, -1) !== j);
            T && g(j, ",") && j.slice(0, -1) === I && ((T = !1), (I += ",")),
              T
                ? (U > 1 &&
                    d > 2 &&
                    (U > 4 ? ((o += "\n".concat(y, "...").concat(b)), (c = !0)) : U > 3 && ((o += "\n  ".concat(u[d - 2])), N++),
                    (o += "\n  ".concat(u[d - 1])),
                    N++),
                  (s = d),
                  (o += "\n".concat(v, "+").concat(b, " ").concat(I)),
                  (i += "\n".concat(m, "-").concat(b, " ").concat(j)),
                  (N += 2))
                : ((o += i), (i = ""), (1 !== U && 0 !== d) || ((o += "\n  ".concat(I)), N++));
          }
          if (N > 20 && d < A - 2)
            return "".concat(O).concat(C, "\n").concat(o, "\n").concat(y, "...").concat(b).concat(i, "\n") + "".concat(y, "...").concat(b);
        }
        return ""
          .concat(O)
          .concat(c ? C : "", "\n")
          .concat(o)
          .concat(i)
          .concat(a)
          .concat(p);
      }
      var S = (function (e) {
        function t(e) {
          var r;
          if (
            ((function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            "object" !== h(e) || null === e)
          )
            throw new p("options", "Object", e);
          var i = e.message,
            o = e.operator,
            c = e.stackStartFn,
            l = e.actual,
            u = e.expected,
            d = Error.stackTraceLimit;
          if (((Error.stackTraceLimit = 0), null != i)) r = s(this, f(t).call(this, String(i)));
          else if (
            (n.stderr &&
              n.stderr.isTTY &&
              (n.stderr && n.stderr.getColorDepth && 1 !== n.stderr.getColorDepth()
                ? ((y = "[34m"), (v = "[32m"), (b = "[39m"), (m = "[31m"))
                : ((y = ""), (v = ""), (b = ""), (m = ""))),
            "object" === h(l) &&
              null !== l &&
              "object" === h(u) &&
              null !== u &&
              "stack" in l &&
              l instanceof Error &&
              "stack" in u &&
              u instanceof Error &&
              ((l = B(l)), (u = B(u))),
            "deepStrictEqual" === o || "strictEqual" === o)
          )
            r = s(this, f(t).call(this, _(l, u, o)));
          else if ("notDeepStrictEqual" === o || "notStrictEqual" === o) {
            var g = w[o],
              k = E(l).split("\n");
            if (("notStrictEqual" === o && "object" === h(l) && null !== l && (g = w.notStrictEqualObject), k.length > 30))
              for (k[26] = "".concat(y, "...").concat(b); k.length > 27; ) k.pop();
            r =
              1 === k.length
                ? s(this, f(t).call(this, "".concat(g, " ").concat(k[0])))
                : s(this, f(t).call(this, "".concat(g, "\n\n").concat(k.join("\n"), "\n")));
          } else {
            var S = E(l),
              A = "",
              x = w[o];
            "notDeepEqual" === o || "notEqual" === o
              ? (S = "".concat(w[o], "\n\n").concat(S)).length > 1024 && (S = "".concat(S.slice(0, 1021), "..."))
              : ((A = "".concat(E(u))),
                S.length > 512 && (S = "".concat(S.slice(0, 509), "...")),
                A.length > 512 && (A = "".concat(A.slice(0, 509), "...")),
                "deepEqual" === o || "equal" === o
                  ? (S = "".concat(x, "\n\n").concat(S, "\n\nshould equal\n\n"))
                  : (A = " ".concat(o, " ").concat(A))),
              (r = s(this, f(t).call(this, "".concat(S).concat(A))));
          }
          return (
            (Error.stackTraceLimit = d),
            (r.generatedMessage = !i),
            Object.defineProperty(a(r), "name", {
              value: "AssertionError [ERR_ASSERTION]",
              enumerable: !1,
              writable: !0,
              configurable: !0
            }),
            (r.code = "ERR_ASSERTION"),
            (r.actual = l),
            (r.expected = u),
            (r.operator = o),
            Error.captureStackTrace && Error.captureStackTrace(a(r), c),
            r.stack,
            (r.name = "AssertionError"),
            s(r)
          );
        }
        var r, c, l;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && u(e, t);
          })(t, e),
          (r = t),
          (c = [
            {
              key: "toString",
              value: function () {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
              }
            },
            {
              key: d.custom,
              value: function (e, t) {
                return d(
                  this,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                          Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                          })
                        )),
                        n.forEach(function (t) {
                          i(e, t, r[t]);
                        });
                    }
                    return e;
                  })({}, t, { customInspect: !1, depth: 0 })
                );
              }
            }
          ]),
          c && o(r.prototype, c),
          l && o(r, l),
          t
        );
      })(c(Error));
      e.exports = S;
    },
    79171: (e, t, r) => {
      "use strict";
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }),
          n(e)
        );
      }
      function i(e, t) {
        return !t || ("object" !== n(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function o(e) {
        return (
          (o = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          o(e)
        );
      }
      function s(e, t) {
        return (
          (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          s(e, t)
        );
      }
      var a,
        c,
        l = {};
      function u(e, t, r) {
        r || (r = Error);
        var n = (function (r) {
          function n(r, s, a) {
            var c;
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              })(this, n),
              (c = i(
                this,
                o(n).call(
                  this,
                  (function (e, r, n) {
                    return "string" == typeof t ? t : t(e, r, n);
                  })(r, s, a)
                )
              )),
              (c.code = e),
              c
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
            })(n, r),
            n
          );
        })(r);
        l[e] = n;
      }
      function f(e, t) {
        if (Array.isArray(e)) {
          var r = e.length;
          return (
            (e = e.map(function (e) {
              return String(e);
            })),
            r > 2
              ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1]
              : 2 === r
              ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
              : "of ".concat(t, " ").concat(e[0])
          );
        }
        return "of ".concat(t, " ").concat(String(e));
      }
      u("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError),
        u(
          "ERR_INVALID_ARG_TYPE",
          function (e, t, i) {
            var o, s, c, l;
            if (
              (void 0 === a && (a = r(57579)),
              a("string" == typeof e, "'name' must be a string"),
              "string" == typeof t && ((s = "not "), t.substr(!c || c < 0 ? 0 : +c, s.length) === s)
                ? ((o = "must not be"), (t = t.replace(/^not /, "")))
                : (o = "must be"),
              (function (e, t, r) {
                return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
              })(e, " argument"))
            )
              l = "The ".concat(e, " ").concat(o, " ").concat(f(t, "type"));
            else {
              var u = (function (e, t, r) {
                return "number" != typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r);
              })(e, ".")
                ? "property"
                : "argument";
              l = 'The "'.concat(e, '" ').concat(u, " ").concat(o, " ").concat(f(t, "type"));
            }
            return (l += ". Received type ".concat(n(i)));
          },
          TypeError
        ),
        u(
          "ERR_INVALID_ARG_VALUE",
          function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
            void 0 === c && (c = r(80911));
            var i = c.inspect(t);
            return (
              i.length > 128 && (i = "".concat(i.slice(0, 128), "...")), "The argument '".concat(e, "' ").concat(n, ". Received ").concat(i)
            );
          },
          TypeError,
          RangeError
        ),
        u(
          "ERR_INVALID_RETURN_VALUE",
          function (e, t, r) {
            var i;
            return (
              (i = r && r.constructor && r.constructor.name ? "instance of ".concat(r.constructor.name) : "type ".concat(n(r))),
              "Expected ".concat(e, ' to be returned from the "').concat(t, '"') + " function but got ".concat(i, ".")
            );
          },
          TypeError
        ),
        u(
          "ERR_MISSING_ARGS",
          function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            void 0 === a && (a = r(57579)), a(t.length > 0, "At least one arg needs to be specified");
            var i = "The ",
              o = t.length;
            switch (
              ((t = t.map(function (e) {
                return '"'.concat(e, '"');
              })),
              o)
            ) {
              case 1:
                i += "".concat(t[0], " argument");
                break;
              case 2:
                i += "".concat(t[0], " and ").concat(t[1], " arguments");
                break;
              default:
                (i += t.slice(0, o - 1).join(", ")), (i += ", and ".concat(t[o - 1], " arguments"));
            }
            return "".concat(i, " must be specified");
          },
          TypeError
        ),
        (e.exports.codes = l);
    },
    38603: (e, t, r) => {
      "use strict";
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                n || null == a.return || a.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          })()
        );
      }
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }),
          i(e)
        );
      }
      var o = void 0 !== /a/g.flags,
        s = function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              return t.push(e);
            }),
            t
          );
        },
        a = function (e) {
          var t = [];
          return (
            e.forEach(function (e, r) {
              return t.push([r, e]);
            }),
            t
          );
        },
        c = Object.is ? Object.is : r(42641),
        l = Object.getOwnPropertySymbols
          ? Object.getOwnPropertySymbols
          : function () {
              return [];
            },
        u = Number.isNaN ? Number.isNaN : r(29736);
      function f(e) {
        return e.call.bind(e);
      }
      var h = f(Object.prototype.hasOwnProperty),
        d = f(Object.prototype.propertyIsEnumerable),
        p = f(Object.prototype.toString),
        g = r(80911).types,
        y = g.isAnyArrayBuffer,
        v = g.isArrayBufferView,
        m = g.isDate,
        b = g.isMap,
        w = g.isRegExp,
        k = g.isSet,
        B = g.isNativeError,
        E = g.isBoxedPrimitive,
        _ = g.isNumberObject,
        S = g.isStringObject,
        A = g.isBooleanObject,
        x = g.isBigIntObject,
        N = g.isSymbolObject,
        O = g.isFloat32Array,
        C = g.isFloat64Array;
      function U(e) {
        if (0 === e.length || e.length > 10) return !0;
        for (var t = 0; t < e.length; t++) {
          var r = e.charCodeAt(t);
          if (r < 48 || r > 57) return !0;
        }
        return 10 === e.length && e >= Math.pow(2, 32);
      }
      function j(e) {
        return Object.keys(e)
          .filter(U)
          .concat(l(e).filter(Object.prototype.propertyIsEnumerable.bind(e)));
      }
      function I(e, t) {
        if (e === t) return 0;
        for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
          if (e[i] !== t[i]) {
            (r = e[i]), (n = t[i]);
            break;
          }
        return r < n ? -1 : n < r ? 1 : 0;
      }
      var T = !0,
        R = !1,
        L = 0,
        V = 1,
        H = 2,
        D = 3;
      function M(e, t, r, n) {
        if (e === t) return 0 !== e || !r || c(e, t);
        if (r) {
          if ("object" !== i(e)) return "number" == typeof e && u(e) && u(t);
          if ("object" !== i(t) || null === e || null === t) return !1;
          if (Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
        } else {
          if (null === e || "object" !== i(e)) return (null === t || "object" !== i(t)) && e == t;
          if (null === t || "object" !== i(t)) return !1;
        }
        var s,
          a,
          l,
          f,
          h = p(e);
        if (h !== p(t)) return !1;
        if (Array.isArray(e)) {
          if (e.length !== t.length) return !1;
          var d = j(e),
            g = j(t);
          return d.length === g.length && q(e, t, r, n, V, d);
        }
        if ("[object Object]" === h && ((!b(e) && b(t)) || (!k(e) && k(t)))) return !1;
        if (m(e)) {
          if (!m(t) || Date.prototype.getTime.call(e) !== Date.prototype.getTime.call(t)) return !1;
        } else if (w(e)) {
          if (
            !w(t) ||
            ((l = e),
            (f = t),
            !(o ? l.source === f.source && l.flags === f.flags : RegExp.prototype.toString.call(l) === RegExp.prototype.toString.call(f)))
          )
            return !1;
        } else if (B(e) || e instanceof Error) {
          if (e.message !== t.message || e.name !== t.name) return !1;
        } else {
          if (v(e)) {
            if (r || (!O(e) && !C(e))) {
              if (
                !(function (e, t) {
                  return (
                    e.byteLength === t.byteLength &&
                    0 === I(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  );
                })(e, t)
              )
                return !1;
            } else if (
              !(function (e, t) {
                if (e.byteLength !== t.byteLength) return !1;
                for (var r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
                return !0;
              })(e, t)
            )
              return !1;
            var U = j(e),
              T = j(t);
            return U.length === T.length && q(e, t, r, n, L, U);
          }
          if (k(e)) return !(!k(t) || e.size !== t.size) && q(e, t, r, n, H);
          if (b(e)) return !(!b(t) || e.size !== t.size) && q(e, t, r, n, D);
          if (y(e)) {
            if (((a = t), (s = e).byteLength !== a.byteLength || 0 !== I(new Uint8Array(s), new Uint8Array(a)))) return !1;
          } else if (
            E(e) &&
            !(function (e, t) {
              return _(e)
                ? _(t) && c(Number.prototype.valueOf.call(e), Number.prototype.valueOf.call(t))
                : S(e)
                ? S(t) && String.prototype.valueOf.call(e) === String.prototype.valueOf.call(t)
                : A(e)
                ? A(t) && Boolean.prototype.valueOf.call(e) === Boolean.prototype.valueOf.call(t)
                : x(e)
                ? x(t) && BigInt.prototype.valueOf.call(e) === BigInt.prototype.valueOf.call(t)
                : N(t) && Symbol.prototype.valueOf.call(e) === Symbol.prototype.valueOf.call(t);
            })(e, t)
          )
            return !1;
        }
        return q(e, t, r, n, L);
      }
      function F(e, t) {
        return t.filter(function (t) {
          return d(e, t);
        });
      }
      function q(e, t, r, o, c, u) {
        if (5 === arguments.length) {
          u = Object.keys(e);
          var f = Object.keys(t);
          if (u.length !== f.length) return !1;
        }
        for (var p = 0; p < u.length; p++) if (!h(t, u[p])) return !1;
        if (r && 5 === arguments.length) {
          var g = l(e);
          if (0 !== g.length) {
            var y = 0;
            for (p = 0; p < g.length; p++) {
              var v = g[p];
              if (d(e, v)) {
                if (!d(t, v)) return !1;
                u.push(v), y++;
              } else if (d(t, v)) return !1;
            }
            var m = l(t);
            if (g.length !== m.length && F(t, m).length !== y) return !1;
          } else {
            var b = l(t);
            if (0 !== b.length && 0 !== F(t, b).length) return !1;
          }
        }
        if (0 === u.length && (c === L || (c === V && 0 === e.length) || 0 === e.size)) return !0;
        if (void 0 === o) o = { val1: new Map(), val2: new Map(), position: 0 };
        else {
          var w = o.val1.get(e);
          if (void 0 !== w) {
            var k = o.val2.get(t);
            if (void 0 !== k) return w === k;
          }
          o.position++;
        }
        o.val1.set(e, o.position), o.val2.set(t, o.position);
        var B = (function (e, t, r, o, c, l) {
          var u = 0;
          if (l === H) {
            if (
              !(function (e, t, r, n) {
                for (var o = null, a = s(e), c = 0; c < a.length; c++) {
                  var l = a[c];
                  if ("object" === i(l) && null !== l) null === o && (o = new Set()), o.add(l);
                  else if (!t.has(l)) {
                    if (r) return !1;
                    if (!W(e, t, l)) return !1;
                    null === o && (o = new Set()), o.add(l);
                  }
                }
                if (null !== o) {
                  for (var u = s(t), f = 0; f < u.length; f++) {
                    var h = u[f];
                    if ("object" === i(h) && null !== h) {
                      if (!P(o, h, r, n)) return !1;
                    } else if (!r && !e.has(h) && !P(o, h, r, n)) return !1;
                  }
                  return 0 === o.size;
                }
                return !0;
              })(e, t, r, c)
            )
              return !1;
          } else if (l === D) {
            if (
              !(function (e, t, r, o) {
                for (var s = null, c = a(e), l = 0; l < c.length; l++) {
                  var u = n(c[l], 2),
                    f = u[0],
                    h = u[1];
                  if ("object" === i(f) && null !== f) null === s && (s = new Set()), s.add(f);
                  else {
                    var d = t.get(f);
                    if ((void 0 === d && !t.has(f)) || !M(h, d, r, o)) {
                      if (r) return !1;
                      if (!G(e, t, f, h, o)) return !1;
                      null === s && (s = new Set()), s.add(f);
                    }
                  }
                }
                if (null !== s) {
                  for (var p = a(t), g = 0; g < p.length; g++) {
                    var y = n(p[g], 2),
                      v = ((f = y[0]), y[1]);
                    if ("object" === i(f) && null !== f) {
                      if (!$(s, e, f, v, r, o)) return !1;
                    } else if (!(r || (e.has(f) && M(e.get(f), v, !1, o)) || $(s, e, f, v, !1, o))) return !1;
                  }
                  return 0 === s.size;
                }
                return !0;
              })(e, t, r, c)
            )
              return !1;
          } else if (l === V)
            for (; u < e.length; u++) {
              if (!h(e, u)) {
                if (h(t, u)) return !1;
                for (var f = Object.keys(e); u < f.length; u++) {
                  var d = f[u];
                  if (!h(t, d) || !M(e[d], t[d], r, c)) return !1;
                }
                return f.length === Object.keys(t).length;
              }
              if (!h(t, u) || !M(e[u], t[u], r, c)) return !1;
            }
          for (u = 0; u < o.length; u++) {
            var p = o[u];
            if (!M(e[p], t[p], r, c)) return !1;
          }
          return !0;
        })(e, t, r, u, o, c);
        return o.val1.delete(e), o.val2.delete(t), B;
      }
      function P(e, t, r, n) {
        for (var i = s(e), o = 0; o < i.length; o++) {
          var a = i[o];
          if (M(t, a, r, n)) return e.delete(a), !0;
        }
        return !1;
      }
      function J(e) {
        switch (i(e)) {
          case "undefined":
            return null;
          case "object":
            return;
          case "symbol":
            return !1;
          case "string":
            e = +e;
          case "number":
            if (u(e)) return !1;
        }
        return !0;
      }
      function W(e, t, r) {
        var n = J(r);
        return null != n ? n : t.has(n) && !e.has(n);
      }
      function G(e, t, r, n, i) {
        var o = J(r);
        if (null != o) return o;
        var s = t.get(o);
        return !((void 0 === s && !t.has(o)) || !M(n, s, !1, i)) && !e.has(o) && M(n, s, !1, i);
      }
      function $(e, t, r, n, i, o) {
        for (var a = s(e), c = 0; c < a.length; c++) {
          var l = a[c];
          if (M(r, l, i, o) && M(n, t.get(l), i, o)) return e.delete(l), !0;
        }
        return !1;
      }
      e.exports = {
        isDeepEqual: function (e, t) {
          return M(e, t, R);
        },
        isDeepStrictEqual: function (e, t) {
          return M(e, t, T);
        }
      };
    },
    93513: function (e, t, r) {
      var n;
      (e = r.nmd(e)),
        (function (i) {
          var o = t,
            s = (e && e.exports, "object" == typeof r.g && r.g);
          s.global !== s && s.window;
          var a = function (e) {
            this.message = e;
          };
          (a.prototype = new Error()).name = "InvalidCharacterError";
          var c = function (e) {
              throw new a(e);
            },
            l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            u = /[\t\n\f\r ]/g,
            f = {
              encode: function (e) {
                (e = String(e)), /[^\0-\xFF]/.test(e) && c("The string to be encoded contains characters outside of the Latin1 range.");
                for (var t, r, n, i, o = e.length % 3, s = "", a = -1, u = e.length - o; ++a < u; )
                  (t = e.charCodeAt(a) << 16),
                    (r = e.charCodeAt(++a) << 8),
                    (n = e.charCodeAt(++a)),
                    (s += l.charAt(((i = t + r + n) >> 18) & 63) + l.charAt((i >> 12) & 63) + l.charAt((i >> 6) & 63) + l.charAt(63 & i));
                return (
                  2 == o
                    ? ((t = e.charCodeAt(a) << 8),
                      (r = e.charCodeAt(++a)),
                      (s += l.charAt((i = t + r) >> 10) + l.charAt((i >> 4) & 63) + l.charAt((i << 2) & 63) + "="))
                    : 1 == o && ((i = e.charCodeAt(a)), (s += l.charAt(i >> 2) + l.charAt((i << 4) & 63) + "==")),
                  s
                );
              },
              decode: function (e) {
                var t = (e = String(e).replace(u, "")).length;
                t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                  (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && c("Invalid character: the string to be decoded is not correctly encoded.");
                for (var r, n, i = 0, o = "", s = -1; ++s < t; )
                  (n = l.indexOf(e.charAt(s))),
                    (r = i % 4 ? 64 * r + n : n),
                    i++ % 4 && (o += String.fromCharCode(255 & (r >> ((-2 * i) & 6))));
                return o;
              },
              version: "0.1.0"
            };
          void 0 ===
            (n = function () {
              return f;
            }.call(t, r, t, e)) || (e.exports = n);
        })();
    },
    26446: (e, t) => {
      "use strict";
      (t.byteLength = function (e) {
        var t = c(e),
          r = t[0],
          n = t[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            o = c(e),
            s = o[0],
            a = o[1],
            l = new i(
              (function (e, t, r) {
                return (3 * (t + r)) / 4 - r;
              })(0, s, a)
            ),
            u = 0,
            f = a > 0 ? s - 4 : s;
          for (r = 0; r < f; r += 4)
            (t = (n[e.charCodeAt(r)] << 18) | (n[e.charCodeAt(r + 1)] << 12) | (n[e.charCodeAt(r + 2)] << 6) | n[e.charCodeAt(r + 3)]),
              (l[u++] = (t >> 16) & 255),
              (l[u++] = (t >> 8) & 255),
              (l[u++] = 255 & t);
          2 === a && ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)), (l[u++] = 255 & t));
          1 === a &&
            ((t = (n[e.charCodeAt(r)] << 10) | (n[e.charCodeAt(r + 1)] << 4) | (n[e.charCodeAt(r + 2)] >> 2)),
            (l[u++] = (t >> 8) & 255),
            (l[u++] = 255 & t));
          return l;
        }),
        (t.fromByteArray = function (e) {
          for (var t, n = e.length, i = n % 3, o = [], s = 16383, a = 0, c = n - i; a < c; a += s) o.push(l(e, a, a + s > c ? c : a + s));
          1 === i
            ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
            : 2 === i && ((t = (e[n - 2] << 8) + e[n - 1]), o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var r = [],
          n = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = o.length;
        s < a;
        ++s
      )
        (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
      function c(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
      }
      function l(e, t, n) {
        for (var i, o, s = [], a = t; a < n; a += 3)
          (i = ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
            s.push(r[((o = i) >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]);
        return s.join("");
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    57788: (e, t, r) => {
      "use strict";
      e.exports = r.p + "3e7f77223408d0f7b459.wasm";
    },
    13719: (e, t, r) => {
      "use strict";
      var n = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray"
        ],
        i = "undefined" == typeof globalThis ? r.g : globalThis;
      e.exports = function () {
        for (var e = [], t = 0; t < n.length; t++) "function" == typeof i[n[t]] && (e[e.length] = n[t]);
        return e;
      };
    },
    83176: (e, t, r) => {
      "use strict";
      function n(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      r.d(t, { Z: () => o });
    },
    64987: (e, t, r) => {
      "use strict";
      r.d(t, { WU: () => a });
      new Error("timeout while waiting for mutex to become available"), new Error("mutex already locked");
      const n = new Error("request for lock canceled");
      var i = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              c(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      class o {
        constructor(e, t = n) {
          (this._value = e), (this._cancelError = t), (this._weightedQueues = []), (this._weightedWaiters = []);
        }
        acquire(e = 1) {
          if (e <= 0) throw new Error(`invalid weight ${e}: must be positive`);
          return new Promise((t, r) => {
            this._weightedQueues[e - 1] || (this._weightedQueues[e - 1] = []),
              this._weightedQueues[e - 1].push({ resolve: t, reject: r }),
              this._dispatch();
          });
        }
        runExclusive(e, t = 1) {
          return i(this, void 0, void 0, function* () {
            const [r, n] = yield this.acquire(t);
            try {
              return yield e(r);
            } finally {
              n();
            }
          });
        }
        waitForUnlock(e = 1) {
          if (e <= 0) throw new Error(`invalid weight ${e}: must be positive`);
          return new Promise((t) => {
            this._weightedWaiters[e - 1] || (this._weightedWaiters[e - 1] = []), this._weightedWaiters[e - 1].push(t), this._dispatch();
          });
        }
        isLocked() {
          return this._value <= 0;
        }
        getValue() {
          return this._value;
        }
        setValue(e) {
          (this._value = e), this._dispatch();
        }
        release(e = 1) {
          if (e <= 0) throw new Error(`invalid weight ${e}: must be positive`);
          (this._value += e), this._dispatch();
        }
        cancel() {
          this._weightedQueues.forEach((e) => e.forEach((e) => e.reject(this._cancelError))), (this._weightedQueues = []);
        }
        _dispatch() {
          var e;
          for (let t = this._value; t > 0; t--) {
            const r = null === (e = this._weightedQueues[t - 1]) || void 0 === e ? void 0 : e.shift();
            if (!r) continue;
            const n = this._value,
              i = t;
            (this._value -= t), (t = this._value + 1), r.resolve([n, this._newReleaser(i)]);
          }
          this._drainUnlockWaiters();
        }
        _newReleaser(e) {
          let t = !1;
          return () => {
            t || ((t = !0), this.release(e));
          };
        }
        _drainUnlockWaiters() {
          for (let e = this._value; e > 0; e--)
            this._weightedWaiters[e - 1] && (this._weightedWaiters[e - 1].forEach((e) => e()), (this._weightedWaiters[e - 1] = []));
        }
      }
      var s = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              c(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      class a {
        constructor(e) {
          this._semaphore = new o(1, e);
        }
        acquire() {
          return s(this, void 0, void 0, function* () {
            const [, e] = yield this._semaphore.acquire();
            return e;
          });
        }
        runExclusive(e) {
          return this._semaphore.runExclusive(() => e());
        }
        isLocked() {
          return this._semaphore.isLocked();
        }
        waitForUnlock() {
          return this._semaphore.waitForUnlock();
        }
        release() {
          this._semaphore.isLocked() && this._semaphore.release();
        }
        cancel() {
          return this._semaphore.cancel();
        }
      }
    }
  }
]);
