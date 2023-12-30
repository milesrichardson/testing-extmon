(() => {
  var e = {
      705: (e) => {
        e.exports = (function e(t, r, n) {
          function o(s, a) {
            if (!r[s]) {
              if (!t[s]) {
                if (i) return i(s, !0);
                throw new Error("Cannot find module '" + s + "'");
              }
              var u = (r[s] = { exports: {} });
              t[s][0].call(
                u.exports,
                function (e) {
                  return o(t[s][1][e] || e);
                },
                u,
                u.exports,
                e,
                t,
                r,
                n
              );
            }
            return r[s].exports;
          }
          for (var i = void 0, s = 0; s < n.length; s++) o(n[s]);
          return o;
        })(
          {
            1: [
              function (e, t, r) {
                (function (n, o, i, s, a, u, c, f, l) {
                  "use strict";
                  var d = e("crypto");
                  function h(e, t) {
                    return (function (e, t) {
                      var r;
                      if (
                        (void 0 === (r = "passthrough" !== t.algorithm ? d.createHash(t.algorithm) : new m()).write &&
                          ((r.write = r.update), (r.end = r.update)),
                        b(t, r).dispatch(e),
                        r.update || r.end(""),
                        r.digest)
                      )
                        return r.digest("buffer" === t.encoding ? void 0 : t.encoding);
                      var n = r.read();
                      return "buffer" !== t.encoding ? n.toString(t.encoding) : n;
                    })(e, (t = y(e, t)));
                  }
                  ((r = t.exports = h).sha1 = function (e) {
                    return h(e);
                  }),
                    (r.keys = function (e) {
                      return h(e, { excludeValues: !0, algorithm: "sha1", encoding: "hex" });
                    }),
                    (r.MD5 = function (e) {
                      return h(e, { algorithm: "md5", encoding: "hex" });
                    }),
                    (r.keysMD5 = function (e) {
                      return h(e, { algorithm: "md5", encoding: "hex", excludeValues: !0 });
                    });
                  var p = d.getHashes ? d.getHashes().slice() : ["sha1", "md5"];
                  p.push("passthrough");
                  var g = ["buffer", "hex", "binary", "base64"];
                  function y(e, t) {
                    t = t || {};
                    var r = {};
                    if (
                      ((r.algorithm = t.algorithm || "sha1"),
                      (r.encoding = t.encoding || "hex"),
                      (r.excludeValues = !!t.excludeValues),
                      (r.algorithm = r.algorithm.toLowerCase()),
                      (r.encoding = r.encoding.toLowerCase()),
                      (r.ignoreUnknown = !0 === t.ignoreUnknown),
                      (r.respectType = !1 !== t.respectType),
                      (r.respectFunctionNames = !1 !== t.respectFunctionNames),
                      (r.respectFunctionProperties = !1 !== t.respectFunctionProperties),
                      (r.unorderedArrays = !0 === t.unorderedArrays),
                      (r.unorderedSets = !1 !== t.unorderedSets),
                      (r.unorderedObjects = !1 !== t.unorderedObjects),
                      (r.replacer = t.replacer || void 0),
                      (r.excludeKeys = t.excludeKeys || void 0),
                      void 0 === e)
                    )
                      throw new Error("Object argument required.");
                    for (var n = 0; n < p.length; ++n) p[n].toLowerCase() === r.algorithm.toLowerCase() && (r.algorithm = p[n]);
                    if (-1 === p.indexOf(r.algorithm))
                      throw new Error('Algorithm "' + r.algorithm + '"  not supported. supported values: ' + p.join(", "));
                    if (-1 === g.indexOf(r.encoding) && "passthrough" !== r.algorithm)
                      throw new Error('Encoding "' + r.encoding + '"  not supported. supported values: ' + g.join(", "));
                    return r;
                  }
                  function w(e) {
                    if ("function" == typeof e)
                      return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e));
                  }
                  function b(e, t, r) {
                    function n(e) {
                      return t.update ? t.update(e, "utf8") : t.write(e, "utf8");
                    }
                    return (
                      (r = r || []),
                      {
                        dispatch: function (t) {
                          return e.replacer && (t = e.replacer(t)), this["_" + (null === t ? "null" : typeof t)](t);
                        },
                        _object: function (t) {
                          var o,
                            s = Object.prototype.toString.call(t),
                            a = /\[object (.*)\]/i.exec(s);
                          if (((a = (a = a ? a[1] : "unknown:[" + s + "]").toLowerCase()), 0 <= (o = r.indexOf(t))))
                            return this.dispatch("[CIRCULAR:" + o + "]");
                          if ((r.push(t), void 0 !== i && i.isBuffer && i.isBuffer(t))) return n("buffer:"), n(t);
                          if ("object" === a || "function" === a || "asyncfunction" === a) {
                            var u = Object.keys(t);
                            e.unorderedObjects && (u = u.sort()),
                              !1 === e.respectType || w(t) || u.splice(0, 0, "prototype", "__proto__", "constructor"),
                              e.excludeKeys &&
                                (u = u.filter(function (t) {
                                  return !e.excludeKeys(t);
                                })),
                              n("object:" + u.length + ":");
                            var c = this;
                            return u.forEach(function (r) {
                              c.dispatch(r), n(":"), e.excludeValues || c.dispatch(t[r]), n(",");
                            });
                          }
                          if (!this["_" + a]) {
                            if (e.ignoreUnknown) return n("[" + a + "]");
                            throw new Error('Unknown object type "' + a + '"');
                          }
                          this["_" + a](t);
                        },
                        _array: function (t, o) {
                          o = void 0 !== o ? o : !1 !== e.unorderedArrays;
                          var i = this;
                          if ((n("array:" + t.length + ":"), !o || t.length <= 1))
                            return t.forEach(function (e) {
                              return i.dispatch(e);
                            });
                          var s = [],
                            a = t.map(function (t) {
                              var n = new m(),
                                o = r.slice();
                              return b(e, n, o).dispatch(t), (s = s.concat(o.slice(r.length))), n.read().toString();
                            });
                          return (r = r.concat(s)), a.sort(), this._array(a, !1);
                        },
                        _date: function (e) {
                          return n("date:" + e.toJSON());
                        },
                        _symbol: function (e) {
                          return n("symbol:" + e.toString());
                        },
                        _error: function (e) {
                          return n("error:" + e.toString());
                        },
                        _boolean: function (e) {
                          return n("bool:" + e.toString());
                        },
                        _string: function (e) {
                          n("string:" + e.length + ":"), n(e.toString());
                        },
                        _function: function (t) {
                          n("fn:"),
                            w(t) ? this.dispatch("[native]") : this.dispatch(t.toString()),
                            !1 !== e.respectFunctionNames && this.dispatch("function-name:" + String(t.name)),
                            e.respectFunctionProperties && this._object(t);
                        },
                        _number: function (e) {
                          return n("number:" + e.toString());
                        },
                        _xml: function (e) {
                          return n("xml:" + e.toString());
                        },
                        _null: function () {
                          return n("Null");
                        },
                        _undefined: function () {
                          return n("Undefined");
                        },
                        _regexp: function (e) {
                          return n("regex:" + e.toString());
                        },
                        _uint8array: function (e) {
                          return n("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
                        },
                        _uint8clampedarray: function (e) {
                          return n("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e));
                        },
                        _int8array: function (e) {
                          return n("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
                        },
                        _uint16array: function (e) {
                          return n("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
                        },
                        _int16array: function (e) {
                          return n("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
                        },
                        _uint32array: function (e) {
                          return n("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
                        },
                        _int32array: function (e) {
                          return n("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
                        },
                        _float32array: function (e) {
                          return n("float32array:"), this.dispatch(Array.prototype.slice.call(e));
                        },
                        _float64array: function (e) {
                          return n("float64array:"), this.dispatch(Array.prototype.slice.call(e));
                        },
                        _arraybuffer: function (e) {
                          return n("arraybuffer:"), this.dispatch(new Uint8Array(e));
                        },
                        _url: function (e) {
                          return n("url:" + e.toString());
                        },
                        _map: function (t) {
                          n("map:");
                          var r = Array.from(t);
                          return this._array(r, !1 !== e.unorderedSets);
                        },
                        _set: function (t) {
                          n("set:");
                          var r = Array.from(t);
                          return this._array(r, !1 !== e.unorderedSets);
                        },
                        _file: function (e) {
                          return n("file:"), this.dispatch([e.name, e.size, e.type, e.lastModfied]);
                        },
                        _blob: function () {
                          if (e.ignoreUnknown) return n("[blob]");
                          throw Error(
                            'Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n'
                          );
                        },
                        _domwindow: function () {
                          return n("domwindow");
                        },
                        _bigint: function (e) {
                          return n("bigint:" + e.toString());
                        },
                        _process: function () {
                          return n("process");
                        },
                        _timer: function () {
                          return n("timer");
                        },
                        _pipe: function () {
                          return n("pipe");
                        },
                        _tcp: function () {
                          return n("tcp");
                        },
                        _udp: function () {
                          return n("udp");
                        },
                        _tty: function () {
                          return n("tty");
                        },
                        _statwatcher: function () {
                          return n("statwatcher");
                        },
                        _securecontext: function () {
                          return n("securecontext");
                        },
                        _connection: function () {
                          return n("connection");
                        },
                        _zlib: function () {
                          return n("zlib");
                        },
                        _context: function () {
                          return n("context");
                        },
                        _nodescript: function () {
                          return n("nodescript");
                        },
                        _httpparser: function () {
                          return n("httpparser");
                        },
                        _dataview: function () {
                          return n("dataview");
                        },
                        _signal: function () {
                          return n("signal");
                        },
                        _fsevent: function () {
                          return n("fsevent");
                        },
                        _tlswrap: function () {
                          return n("tlswrap");
                        }
                      }
                    );
                  }
                  function m() {
                    return {
                      buf: "",
                      write: function (e) {
                        this.buf += e;
                      },
                      end: function (e) {
                        this.buf += e;
                      },
                      read: function () {
                        return this.buf;
                      }
                    };
                  }
                  r.writeToStream = function (e, t, r) {
                    return void 0 === r && ((r = t), (t = {})), b((t = y(e, t)), r).dispatch(e);
                  };
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/fake_7eac155c.js",
                  "/"
                );
              },
              { buffer: 3, crypto: 5, lYpoI2: 10 }
            ],
            2: [
              function (e, t, r) {
                (function (e, t, n, o, i, s, a, u, c) {
                  !(function (e) {
                    "use strict";
                    var t = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                      r = "+".charCodeAt(0),
                      n = "/".charCodeAt(0),
                      o = "0".charCodeAt(0),
                      i = "a".charCodeAt(0),
                      s = "A".charCodeAt(0),
                      a = "-".charCodeAt(0),
                      u = "_".charCodeAt(0);
                    function c(e) {
                      var t = e.charCodeAt(0);
                      return t === r || t === a
                        ? 62
                        : t === n || t === u
                        ? 63
                        : t < o
                        ? -1
                        : t < o + 10
                        ? t - o + 26 + 26
                        : t < s + 26
                        ? t - s
                        : t < i + 26
                        ? t - i + 26
                        : void 0;
                    }
                    (e.toByteArray = function (e) {
                      var r, n;
                      if (0 < e.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                      var o = e.length,
                        i = "=" === e.charAt(o - 2) ? 2 : "=" === e.charAt(o - 1) ? 1 : 0,
                        s = new t((3 * e.length) / 4 - i),
                        a = 0 < i ? e.length - 4 : e.length,
                        u = 0;
                      function f(e) {
                        s[u++] = e;
                      }
                      for (r = 0; r < a; r += 4, 0)
                        f(
                          (16711680 &
                            (n = (c(e.charAt(r)) << 18) | (c(e.charAt(r + 1)) << 12) | (c(e.charAt(r + 2)) << 6) | c(e.charAt(r + 3)))) >>
                            16
                        ),
                          f((65280 & n) >> 8),
                          f(255 & n);
                      return (
                        2 == i
                          ? f(255 & (n = (c(e.charAt(r)) << 2) | (c(e.charAt(r + 1)) >> 4)))
                          : 1 == i &&
                            (f(((n = (c(e.charAt(r)) << 10) | (c(e.charAt(r + 1)) << 4) | (c(e.charAt(r + 2)) >> 2)) >> 8) & 255),
                            f(255 & n)),
                        s
                      );
                    }),
                      (e.fromByteArray = function (e) {
                        var t,
                          r,
                          n,
                          o,
                          i = e.length % 3,
                          s = "";
                        function a(e) {
                          return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e);
                        }
                        for (t = 0, n = e.length - i; t < n; t += 3)
                          s +=
                            a(((o = r = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2]) >> 18) & 63) +
                            a((o >> 12) & 63) +
                            a((o >> 6) & 63) +
                            a(63 & o);
                        switch (i) {
                          case 1:
                            (s += a((r = e[e.length - 1]) >> 2)), (s += a((r << 4) & 63)), (s += "==");
                            break;
                          case 2:
                            (s += a((r = (e[e.length - 2] << 8) + e[e.length - 1]) >> 10)),
                              (s += a((r >> 4) & 63)),
                              (s += a((r << 2) & 63)),
                              (s += "=");
                        }
                        return s;
                      });
                  })(void 0 === r ? (this.base64js = {}) : r);
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js",
                  "/node_modules/gulp-browserify/node_modules/base64-js/lib"
                );
              },
              { buffer: 3, lYpoI2: 10 }
            ],
            3: [
              function (e, t, r) {
                (function (t, n, o, i, s, a, u, c, f) {
                  var l = e("base64-js"),
                    d = e("ieee754");
                  function o(e, t, r) {
                    if (!(this instanceof o)) return new o(e, t, r);
                    var n,
                      i,
                      s,
                      a,
                      u,
                      c = typeof e;
                    if ("base64" === t && "string" == c)
                      for (e = (n = e).trim ? n.trim() : n.replace(/^\s+|\s+$/g, ""); e.length % 4 != 0; ) e += "=";
                    if ("number" == c) i = k(e);
                    else if ("string" == c) i = o.byteLength(e, t);
                    else {
                      if ("object" != c) throw new Error("First argument needs to be a number, array or string.");
                      i = k(e.length);
                    }
                    if (
                      (o._useTypedArrays ? (s = o._augment(new Uint8Array(i))) : (((s = this).length = i), (s._isBuffer = !0)),
                      o._useTypedArrays && "number" == typeof e.byteLength)
                    )
                      s._set(e);
                    else if (U((u = e)) || o.isBuffer(u) || (u && "object" == typeof u && "number" == typeof u.length))
                      for (a = 0; a < i; a++) o.isBuffer(e) ? (s[a] = e.readUInt8(a)) : (s[a] = e[a]);
                    else if ("string" == c) s.write(e, 0, t);
                    else if ("number" == c && !o._useTypedArrays && !r) for (a = 0; a < i; a++) s[a] = 0;
                    return s;
                  }
                  function h(e, t, r, n) {
                    return (o._charsWritten = P(
                      (function (e) {
                        for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
                        return t;
                      })(t),
                      e,
                      r,
                      n
                    ));
                  }
                  function p(e, t, r, n) {
                    return (o._charsWritten = P(
                      (function (e) {
                        for (var t, r, n, o = [], i = 0; i < e.length; i++)
                          (r = (t = e.charCodeAt(i)) >> 8), (n = t % 256), o.push(n), o.push(r);
                        return o;
                      })(t),
                      e,
                      r,
                      n
                    ));
                  }
                  function g(e, t, r) {
                    var n = "";
                    r = Math.min(e.length, r);
                    for (var o = t; o < r; o++) n += String.fromCharCode(e[o]);
                    return n;
                  }
                  function y(e, t, r, n) {
                    n ||
                      (D("boolean" == typeof r, "missing or invalid endian"),
                      D(null != t, "missing offset"),
                      D(t + 1 < e.length, "Trying to read beyond buffer length"));
                    var o,
                      i = e.length;
                    if (!(i <= t))
                      return r ? ((o = e[t]), t + 1 < i && (o |= e[t + 1] << 8)) : ((o = e[t] << 8), t + 1 < i && (o |= e[t + 1])), o;
                  }
                  function w(e, t, r, n) {
                    n ||
                      (D("boolean" == typeof r, "missing or invalid endian"),
                      D(null != t, "missing offset"),
                      D(t + 3 < e.length, "Trying to read beyond buffer length"));
                    var o,
                      i = e.length;
                    if (!(i <= t))
                      return (
                        r
                          ? (t + 2 < i && (o = e[t + 2] << 16),
                            t + 1 < i && (o |= e[t + 1] << 8),
                            (o |= e[t]),
                            t + 3 < i && (o += (e[t + 3] << 24) >>> 0))
                          : (t + 1 < i && (o = e[t + 1] << 16),
                            t + 2 < i && (o |= e[t + 2] << 8),
                            t + 3 < i && (o |= e[t + 3]),
                            (o += (e[t] << 24) >>> 0)),
                        o
                      );
                  }
                  function b(e, t, r, n) {
                    if (
                      (n ||
                        (D("boolean" == typeof r, "missing or invalid endian"),
                        D(null != t, "missing offset"),
                        D(t + 1 < e.length, "Trying to read beyond buffer length")),
                      !(e.length <= t))
                    ) {
                      var o = y(e, t, r, !0);
                      return 32768 & o ? -1 * (65535 - o + 1) : o;
                    }
                  }
                  function m(e, t, r, n) {
                    if (
                      (n ||
                        (D("boolean" == typeof r, "missing or invalid endian"),
                        D(null != t, "missing offset"),
                        D(t + 3 < e.length, "Trying to read beyond buffer length")),
                      !(e.length <= t))
                    ) {
                      var o = w(e, t, r, !0);
                      return 2147483648 & o ? -1 * (4294967295 - o + 1) : o;
                    }
                  }
                  function v(e, t, r, n) {
                    return (
                      n ||
                        (D("boolean" == typeof r, "missing or invalid endian"), D(t + 3 < e.length, "Trying to read beyond buffer length")),
                      d.read(e, t, r, 23, 4)
                    );
                  }
                  function _(e, t, r, n) {
                    return (
                      n ||
                        (D("boolean" == typeof r, "missing or invalid endian"), D(t + 7 < e.length, "Trying to read beyond buffer length")),
                      d.read(e, t, r, 52, 8)
                    );
                  }
                  function E(e, t, r, n, o) {
                    o ||
                      (D(null != t, "missing value"),
                      D("boolean" == typeof n, "missing or invalid endian"),
                      D(null != r, "missing offset"),
                      D(r + 1 < e.length, "trying to write beyond buffer length"),
                      N(t, 65535));
                    var i = e.length;
                    if (!(i <= r))
                      for (var s = 0, a = Math.min(i - r, 2); s < a; s++)
                        e[r + s] = (t & (255 << (8 * (n ? s : 1 - s)))) >>> (8 * (n ? s : 1 - s));
                  }
                  function I(e, t, r, n, o) {
                    o ||
                      (D(null != t, "missing value"),
                      D("boolean" == typeof n, "missing or invalid endian"),
                      D(null != r, "missing offset"),
                      D(r + 3 < e.length, "trying to write beyond buffer length"),
                      N(t, 4294967295));
                    var i = e.length;
                    if (!(i <= r)) for (var s = 0, a = Math.min(i - r, 4); s < a; s++) e[r + s] = (t >>> (8 * (n ? s : 3 - s))) & 255;
                  }
                  function L(e, t, r, n, o) {
                    o ||
                      (D(null != t, "missing value"),
                      D("boolean" == typeof n, "missing or invalid endian"),
                      D(null != r, "missing offset"),
                      D(r + 1 < e.length, "Trying to write beyond buffer length"),
                      M(t, 32767, -32768)),
                      e.length <= r || E(e, 0 <= t ? t : 65535 + t + 1, r, n, o);
                  }
                  function A(e, t, r, n, o) {
                    o ||
                      (D(null != t, "missing value"),
                      D("boolean" == typeof n, "missing or invalid endian"),
                      D(null != r, "missing offset"),
                      D(r + 3 < e.length, "Trying to write beyond buffer length"),
                      M(t, 2147483647, -2147483648)),
                      e.length <= r || I(e, 0 <= t ? t : 4294967295 + t + 1, r, n, o);
                  }
                  function x(e, t, r, n, o) {
                    o ||
                      (D(null != t, "missing value"),
                      D("boolean" == typeof n, "missing or invalid endian"),
                      D(null != r, "missing offset"),
                      D(r + 3 < e.length, "Trying to write beyond buffer length"),
                      R(t, 34028234663852886e22, -34028234663852886e22)),
                      e.length <= r || d.write(e, t, r, n, 23, 4);
                  }
                  function B(e, t, r, n, o) {
                    o ||
                      (D(null != t, "missing value"),
                      D("boolean" == typeof n, "missing or invalid endian"),
                      D(null != r, "missing offset"),
                      D(r + 7 < e.length, "Trying to write beyond buffer length"),
                      R(t, 17976931348623157e292, -17976931348623157e292)),
                      e.length <= r || d.write(e, t, r, n, 52, 8);
                  }
                  (r.Buffer = o),
                    (r.SlowBuffer = o),
                    (r.INSPECT_MAX_BYTES = 50),
                    (o.poolSize = 8192),
                    (o._useTypedArrays = (function () {
                      try {
                        var e = new ArrayBuffer(0),
                          t = new Uint8Array(e);
                        return (
                          (t.foo = function () {
                            return 42;
                          }),
                          42 === t.foo() && "function" == typeof t.subarray
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    (o.isEncoding = function (e) {
                      switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "raw":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                          return !0;
                        default:
                          return !1;
                      }
                    }),
                    (o.isBuffer = function (e) {
                      return !(null == e || !e._isBuffer);
                    }),
                    (o.byteLength = function (e, t) {
                      var r;
                      switch (((e += ""), t || "utf8")) {
                        case "hex":
                          r = e.length / 2;
                          break;
                        case "utf8":
                        case "utf-8":
                          r = O(e).length;
                          break;
                        case "ascii":
                        case "binary":
                        case "raw":
                          r = e.length;
                          break;
                        case "base64":
                          r = T(e).length;
                          break;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                          r = 2 * e.length;
                          break;
                        default:
                          throw new Error("Unknown encoding");
                      }
                      return r;
                    }),
                    (o.concat = function (e, t) {
                      if ((D(U(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length)) return new o(0);
                      if (1 === e.length) return e[0];
                      if ("number" != typeof t) for (i = t = 0; i < e.length; i++) t += e[i].length;
                      for (var r = new o(t), n = 0, i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.copy(r, n), (n += s.length);
                      }
                      return r;
                    }),
                    (o.prototype.write = function (e, t, r, n) {
                      var i;
                      isFinite(t) ? isFinite(r) || ((n = r), (r = void 0)) : ((i = n), (n = t), (t = r), (r = i)), (t = Number(t) || 0);
                      var s,
                        a,
                        u,
                        c,
                        f,
                        l,
                        d,
                        g,
                        y,
                        w = this.length - t;
                      switch (((!r || w < (r = Number(r))) && (r = w), (n = String(n || "utf8").toLowerCase()))) {
                        case "hex":
                          s = (function (e, t, r, n) {
                            r = Number(r) || 0;
                            var i = e.length - r;
                            (!n || i < (n = Number(n))) && (n = i);
                            var s = t.length;
                            D(s % 2 == 0, "Invalid hex string"), s / 2 < n && (n = s / 2);
                            for (var a = 0; a < n; a++) {
                              var u = parseInt(t.substr(2 * a, 2), 16);
                              D(!isNaN(u), "Invalid hex string"), (e[r + a] = u);
                            }
                            return (o._charsWritten = 2 * a), a;
                          })(this, e, t, r);
                          break;
                        case "utf8":
                        case "utf-8":
                          (l = this), (d = e), (g = t), (y = r), (s = o._charsWritten = P(O(d), l, g, y));
                          break;
                        case "ascii":
                        case "binary":
                          s = h(this, e, t, r);
                          break;
                        case "base64":
                          (a = this), (u = e), (c = t), (f = r), (s = o._charsWritten = P(T(u), a, c, f));
                          break;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                          s = p(this, e, t, r);
                          break;
                        default:
                          throw new Error("Unknown encoding");
                      }
                      return s;
                    }),
                    (o.prototype.toString = function (e, t, r) {
                      var n,
                        o,
                        i,
                        s,
                        a = this;
                      if (
                        ((e = String(e || "utf8").toLowerCase()),
                        (t = Number(t) || 0),
                        (r = void 0 !== r ? Number(r) : (r = a.length)) === t)
                      )
                        return "";
                      switch (e) {
                        case "hex":
                          n = (function (e, t, r) {
                            var n = e.length;
                            (!t || t < 0) && (t = 0), (!r || r < 0 || n < r) && (r = n);
                            for (var o = "", i = t; i < r; i++) o += j(e[i]);
                            return o;
                          })(a, t, r);
                          break;
                        case "utf8":
                        case "utf-8":
                          n = (function (e, t, r) {
                            var n = "",
                              o = "";
                            r = Math.min(e.length, r);
                            for (var i = t; i < r; i++)
                              e[i] <= 127 ? ((n += q(o) + String.fromCharCode(e[i])), (o = "")) : (o += "%" + e[i].toString(16));
                            return n + q(o);
                          })(a, t, r);
                          break;
                        case "ascii":
                        case "binary":
                          n = g(a, t, r);
                          break;
                        case "base64":
                          (o = a), (s = r), (n = 0 === (i = t) && s === o.length ? l.fromByteArray(o) : l.fromByteArray(o.slice(i, s)));
                          break;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                          n = (function (e, t, r) {
                            for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2)
                              o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                            return o;
                          })(a, t, r);
                          break;
                        default:
                          throw new Error("Unknown encoding");
                      }
                      return n;
                    }),
                    (o.prototype.toJSON = function () {
                      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                    }),
                    (o.prototype.copy = function (e, t, r, n) {
                      if (((r = r || 0), n || 0 === n || (n = this.length), (t = t || 0), n !== r && 0 !== e.length && 0 !== this.length)) {
                        D(r <= n, "sourceEnd < sourceStart"),
                          D(0 <= t && t < e.length, "targetStart out of bounds"),
                          D(0 <= r && r < this.length, "sourceStart out of bounds"),
                          D(0 <= n && n <= this.length, "sourceEnd out of bounds"),
                          n > this.length && (n = this.length),
                          e.length - t < n - r && (n = e.length - t + r);
                        var i = n - r;
                        if (i < 100 || !o._useTypedArrays) for (var s = 0; s < i; s++) e[s + t] = this[s + r];
                        else e._set(this.subarray(r, r + i), t);
                      }
                    }),
                    (o.prototype.slice = function (e, t) {
                      var r = this.length;
                      if (((e = S(e, r, 0)), (t = S(t, r, r)), o._useTypedArrays)) return o._augment(this.subarray(e, t));
                      for (var n = t - e, i = new o(n, void 0, !0), s = 0; s < n; s++) i[s] = this[s + e];
                      return i;
                    }),
                    (o.prototype.get = function (e) {
                      return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e);
                    }),
                    (o.prototype.set = function (e, t) {
                      return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t);
                    }),
                    (o.prototype.readUInt8 = function (e, t) {
                      if (
                        (t || (D(null != e, "missing offset"), D(e < this.length, "Trying to read beyond buffer length")),
                        !(e >= this.length))
                      )
                        return this[e];
                    }),
                    (o.prototype.readUInt16LE = function (e, t) {
                      return y(this, e, !0, t);
                    }),
                    (o.prototype.readUInt16BE = function (e, t) {
                      return y(this, e, !1, t);
                    }),
                    (o.prototype.readUInt32LE = function (e, t) {
                      return w(this, e, !0, t);
                    }),
                    (o.prototype.readUInt32BE = function (e, t) {
                      return w(this, e, !1, t);
                    }),
                    (o.prototype.readInt8 = function (e, t) {
                      if (
                        (t || (D(null != e, "missing offset"), D(e < this.length, "Trying to read beyond buffer length")),
                        !(e >= this.length))
                      )
                        return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                    }),
                    (o.prototype.readInt16LE = function (e, t) {
                      return b(this, e, !0, t);
                    }),
                    (o.prototype.readInt16BE = function (e, t) {
                      return b(this, e, !1, t);
                    }),
                    (o.prototype.readInt32LE = function (e, t) {
                      return m(this, e, !0, t);
                    }),
                    (o.prototype.readInt32BE = function (e, t) {
                      return m(this, e, !1, t);
                    }),
                    (o.prototype.readFloatLE = function (e, t) {
                      return v(this, e, !0, t);
                    }),
                    (o.prototype.readFloatBE = function (e, t) {
                      return v(this, e, !1, t);
                    }),
                    (o.prototype.readDoubleLE = function (e, t) {
                      return _(this, e, !0, t);
                    }),
                    (o.prototype.readDoubleBE = function (e, t) {
                      return _(this, e, !1, t);
                    }),
                    (o.prototype.writeUInt8 = function (e, t, r) {
                      r ||
                        (D(null != e, "missing value"),
                        D(null != t, "missing offset"),
                        D(t < this.length, "trying to write beyond buffer length"),
                        N(e, 255)),
                        t >= this.length || (this[t] = e);
                    }),
                    (o.prototype.writeUInt16LE = function (e, t, r) {
                      E(this, e, t, !0, r);
                    }),
                    (o.prototype.writeUInt16BE = function (e, t, r) {
                      E(this, e, t, !1, r);
                    }),
                    (o.prototype.writeUInt32LE = function (e, t, r) {
                      I(this, e, t, !0, r);
                    }),
                    (o.prototype.writeUInt32BE = function (e, t, r) {
                      I(this, e, t, !1, r);
                    }),
                    (o.prototype.writeInt8 = function (e, t, r) {
                      r ||
                        (D(null != e, "missing value"),
                        D(null != t, "missing offset"),
                        D(t < this.length, "Trying to write beyond buffer length"),
                        M(e, 127, -128)),
                        t >= this.length || (0 <= e ? this.writeUInt8(e, t, r) : this.writeUInt8(255 + e + 1, t, r));
                    }),
                    (o.prototype.writeInt16LE = function (e, t, r) {
                      L(this, e, t, !0, r);
                    }),
                    (o.prototype.writeInt16BE = function (e, t, r) {
                      L(this, e, t, !1, r);
                    }),
                    (o.prototype.writeInt32LE = function (e, t, r) {
                      A(this, e, t, !0, r);
                    }),
                    (o.prototype.writeInt32BE = function (e, t, r) {
                      A(this, e, t, !1, r);
                    }),
                    (o.prototype.writeFloatLE = function (e, t, r) {
                      x(this, e, t, !0, r);
                    }),
                    (o.prototype.writeFloatBE = function (e, t, r) {
                      x(this, e, t, !1, r);
                    }),
                    (o.prototype.writeDoubleLE = function (e, t, r) {
                      B(this, e, t, !0, r);
                    }),
                    (o.prototype.writeDoubleBE = function (e, t, r) {
                      B(this, e, t, !1, r);
                    }),
                    (o.prototype.fill = function (e, t, r) {
                      if (
                        ((e = e || 0),
                        (t = t || 0),
                        (r = r || this.length),
                        "string" == typeof e && (e = e.charCodeAt(0)),
                        D("number" == typeof e && !isNaN(e), "value is not a number"),
                        D(t <= r, "end < start"),
                        r !== t && 0 !== this.length)
                      ) {
                        D(0 <= t && t < this.length, "start out of bounds"), D(0 <= r && r <= this.length, "end out of bounds");
                        for (var n = t; n < r; n++) this[n] = e;
                      }
                    }),
                    (o.prototype.inspect = function () {
                      for (var e = [], t = this.length, n = 0; n < t; n++)
                        if (((e[n] = j(this[n])), n === r.INSPECT_MAX_BYTES)) {
                          e[n + 1] = "...";
                          break;
                        }
                      return "<Buffer " + e.join(" ") + ">";
                    }),
                    (o.prototype.toArrayBuffer = function () {
                      if ("undefined" == typeof Uint8Array) throw new Error("Buffer.toArrayBuffer not supported in this browser");
                      if (o._useTypedArrays) return new o(this).buffer;
                      for (var e = new Uint8Array(this.length), t = 0, r = e.length; t < r; t += 1) e[t] = this[t];
                      return e.buffer;
                    });
                  var C = o.prototype;
                  function S(e, t, r) {
                    return "number" != typeof e ? r : t <= (e = ~~e) ? t : 0 <= e || 0 <= (e += t) ? e : 0;
                  }
                  function k(e) {
                    return (e = ~~Math.ceil(+e)) < 0 ? 0 : e;
                  }
                  function U(e) {
                    return (
                      Array.isArray ||
                      function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e);
                      }
                    )(e);
                  }
                  function j(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16);
                  }
                  function O(e) {
                    for (var t = [], r = 0; r < e.length; r++) {
                      var n = e.charCodeAt(r);
                      if (n <= 127) t.push(e.charCodeAt(r));
                      else {
                        var o = r;
                        55296 <= n && n <= 57343 && r++;
                        for (
                          var i = encodeURIComponent(e.slice(o, r + 1))
                              .substr(1)
                              .split("%"),
                            s = 0;
                          s < i.length;
                          s++
                        )
                          t.push(parseInt(i[s], 16));
                      }
                    }
                    return t;
                  }
                  function T(e) {
                    return l.toByteArray(e);
                  }
                  function P(e, t, r, n) {
                    for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); o++) t[o + r] = e[o];
                    return o;
                  }
                  function q(e) {
                    try {
                      return decodeURIComponent(e);
                    } catch (e) {
                      return String.fromCharCode(65533);
                    }
                  }
                  function N(e, t) {
                    D("number" == typeof e, "cannot write a non-number as a number"),
                      D(0 <= e, "specified a negative value for writing an unsigned value"),
                      D(e <= t, "value is larger than maximum value for type"),
                      D(Math.floor(e) === e, "value has a fractional component");
                  }
                  function M(e, t, r) {
                    D("number" == typeof e, "cannot write a non-number as a number"),
                      D(e <= t, "value larger than maximum allowed value"),
                      D(r <= e, "value smaller than minimum allowed value"),
                      D(Math.floor(e) === e, "value has a fractional component");
                  }
                  function R(e, t, r) {
                    D("number" == typeof e, "cannot write a non-number as a number"),
                      D(e <= t, "value larger than maximum allowed value"),
                      D(r <= e, "value smaller than minimum allowed value");
                  }
                  function D(e, t) {
                    if (!e) throw new Error(t || "Failed assertion");
                  }
                  o._augment = function (e) {
                    return (
                      (e._isBuffer = !0),
                      (e._get = e.get),
                      (e._set = e.set),
                      (e.get = C.get),
                      (e.set = C.set),
                      (e.write = C.write),
                      (e.toString = C.toString),
                      (e.toLocaleString = C.toString),
                      (e.toJSON = C.toJSON),
                      (e.copy = C.copy),
                      (e.slice = C.slice),
                      (e.readUInt8 = C.readUInt8),
                      (e.readUInt16LE = C.readUInt16LE),
                      (e.readUInt16BE = C.readUInt16BE),
                      (e.readUInt32LE = C.readUInt32LE),
                      (e.readUInt32BE = C.readUInt32BE),
                      (e.readInt8 = C.readInt8),
                      (e.readInt16LE = C.readInt16LE),
                      (e.readInt16BE = C.readInt16BE),
                      (e.readInt32LE = C.readInt32LE),
                      (e.readInt32BE = C.readInt32BE),
                      (e.readFloatLE = C.readFloatLE),
                      (e.readFloatBE = C.readFloatBE),
                      (e.readDoubleLE = C.readDoubleLE),
                      (e.readDoubleBE = C.readDoubleBE),
                      (e.writeUInt8 = C.writeUInt8),
                      (e.writeUInt16LE = C.writeUInt16LE),
                      (e.writeUInt16BE = C.writeUInt16BE),
                      (e.writeUInt32LE = C.writeUInt32LE),
                      (e.writeUInt32BE = C.writeUInt32BE),
                      (e.writeInt8 = C.writeInt8),
                      (e.writeInt16LE = C.writeInt16LE),
                      (e.writeInt16BE = C.writeInt16BE),
                      (e.writeInt32LE = C.writeInt32LE),
                      (e.writeInt32BE = C.writeInt32BE),
                      (e.writeFloatLE = C.writeFloatLE),
                      (e.writeFloatBE = C.writeFloatBE),
                      (e.writeDoubleLE = C.writeDoubleLE),
                      (e.writeDoubleBE = C.writeDoubleBE),
                      (e.fill = C.fill),
                      (e.inspect = C.inspect),
                      (e.toArrayBuffer = C.toArrayBuffer),
                      e
                    );
                  };
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/node_modules/gulp-browserify/node_modules/buffer/index.js",
                  "/node_modules/gulp-browserify/node_modules/buffer"
                );
              },
              { "base64-js": 2, buffer: 3, ieee754: 11, lYpoI2: 10 }
            ],
            4: [
              function (e, t, r) {
                (function (r, n, o, i, s, a, u, c, f) {
                  o = e("buffer").Buffer;
                  var l = 4,
                    d = new o(l);
                  d.fill(0),
                    (t.exports = {
                      hash: function (e, t, r, n) {
                        return (
                          o.isBuffer(e) || (e = new o(e)),
                          (function (e, t, r) {
                            for (var n = new o(t), i = r ? n.writeInt32BE : n.writeInt32LE, s = 0; s < e.length; s++)
                              i.call(n, e[s], 4 * s, !0);
                            return n;
                          })(
                            t(
                              (function (e, t) {
                                var r;
                                e.length % l != 0 && ((r = e.length + (l - (e.length % l))), (e = o.concat([e, d], r)));
                                for (var n = [], i = t ? e.readInt32BE : e.readInt32LE, s = 0; s < e.length; s += l) n.push(i.call(e, s));
                                return n;
                              })(e, n),
                              8 * e.length
                            ),
                            r,
                            n
                          )
                        );
                      }
                    });
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js",
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify"
                );
              },
              { buffer: 3, lYpoI2: 10 }
            ],
            5: [
              function (e, t, r) {
                (function (t, n, o, i, s, a, u, c, f) {
                  o = e("buffer").Buffer;
                  var l = e("./sha"),
                    d = e("./sha256"),
                    h = e("./rng"),
                    p = { sha1: l, sha256: d, md5: e("./md5") },
                    g = 64,
                    y = new o(g);
                  function w(e, t) {
                    var r = p[(e = e || "sha1")],
                      n = [];
                    return (
                      r || b("algorithm:", e, "is not yet supported"),
                      {
                        update: function (e) {
                          return o.isBuffer(e) || (e = new o(e)), n.push(e), e.length, this;
                        },
                        digest: function (e) {
                          var i = o.concat(n),
                            s = t
                              ? (function (e, t, r) {
                                  o.isBuffer(t) || (t = new o(t)),
                                    o.isBuffer(r) || (r = new o(r)),
                                    t.length > g ? (t = e(t)) : t.length < g && (t = o.concat([t, y], g));
                                  for (var n = new o(g), i = new o(g), s = 0; s < g; s++) (n[s] = 54 ^ t[s]), (i[s] = 92 ^ t[s]);
                                  var a = e(o.concat([n, r]));
                                  return e(o.concat([i, a]));
                                })(r, t, i)
                              : r(i);
                          return (n = null), e ? s.toString(e) : s;
                        }
                      }
                    );
                  }
                  function b() {
                    var e = [].slice.call(arguments).join(" ");
                    throw new Error([e, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"));
                  }
                  y.fill(0),
                    (r.createHash = function (e) {
                      return w(e);
                    }),
                    (r.createHmac = w),
                    (r.randomBytes = function (e, t) {
                      if (!t || !t.call) return new o(h(e));
                      try {
                        t.call(this, void 0, new o(h(e)));
                      } catch (e) {
                        t(e);
                      }
                    }),
                    (function (e, t) {
                      for (var r in e) t(e[r], r);
                    })(
                      [
                        "createCredentials",
                        "createCipher",
                        "createCipheriv",
                        "createDecipher",
                        "createDecipheriv",
                        "createSign",
                        "createVerify",
                        "createDiffieHellman",
                        "pbkdf2"
                      ],
                      function (e) {
                        r[e] = function () {
                          b("sorry,", e, "is not implemented yet");
                        };
                      }
                    );
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js",
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify"
                );
              },
              { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 10 }
            ],
            6: [
              function (e, t, r) {
                (function (r, n, o, i, s, a, u, c, f) {
                  var l = e("./helpers");
                  function d(e, t) {
                    (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
                    for (var r = 1732584193, n = -271733879, o = -1732584194, i = 271733878, s = 0; s < e.length; s += 16) {
                      var a = r,
                        u = n,
                        c = o,
                        f = i;
                      (r = p(r, n, o, i, e[s + 0], 7, -680876936)),
                        (i = p(i, r, n, o, e[s + 1], 12, -389564586)),
                        (o = p(o, i, r, n, e[s + 2], 17, 606105819)),
                        (n = p(n, o, i, r, e[s + 3], 22, -1044525330)),
                        (r = p(r, n, o, i, e[s + 4], 7, -176418897)),
                        (i = p(i, r, n, o, e[s + 5], 12, 1200080426)),
                        (o = p(o, i, r, n, e[s + 6], 17, -1473231341)),
                        (n = p(n, o, i, r, e[s + 7], 22, -45705983)),
                        (r = p(r, n, o, i, e[s + 8], 7, 1770035416)),
                        (i = p(i, r, n, o, e[s + 9], 12, -1958414417)),
                        (o = p(o, i, r, n, e[s + 10], 17, -42063)),
                        (n = p(n, o, i, r, e[s + 11], 22, -1990404162)),
                        (r = p(r, n, o, i, e[s + 12], 7, 1804603682)),
                        (i = p(i, r, n, o, e[s + 13], 12, -40341101)),
                        (o = p(o, i, r, n, e[s + 14], 17, -1502002290)),
                        (r = g(r, (n = p(n, o, i, r, e[s + 15], 22, 1236535329)), o, i, e[s + 1], 5, -165796510)),
                        (i = g(i, r, n, o, e[s + 6], 9, -1069501632)),
                        (o = g(o, i, r, n, e[s + 11], 14, 643717713)),
                        (n = g(n, o, i, r, e[s + 0], 20, -373897302)),
                        (r = g(r, n, o, i, e[s + 5], 5, -701558691)),
                        (i = g(i, r, n, o, e[s + 10], 9, 38016083)),
                        (o = g(o, i, r, n, e[s + 15], 14, -660478335)),
                        (n = g(n, o, i, r, e[s + 4], 20, -405537848)),
                        (r = g(r, n, o, i, e[s + 9], 5, 568446438)),
                        (i = g(i, r, n, o, e[s + 14], 9, -1019803690)),
                        (o = g(o, i, r, n, e[s + 3], 14, -187363961)),
                        (n = g(n, o, i, r, e[s + 8], 20, 1163531501)),
                        (r = g(r, n, o, i, e[s + 13], 5, -1444681467)),
                        (i = g(i, r, n, o, e[s + 2], 9, -51403784)),
                        (o = g(o, i, r, n, e[s + 7], 14, 1735328473)),
                        (r = y(r, (n = g(n, o, i, r, e[s + 12], 20, -1926607734)), o, i, e[s + 5], 4, -378558)),
                        (i = y(i, r, n, o, e[s + 8], 11, -2022574463)),
                        (o = y(o, i, r, n, e[s + 11], 16, 1839030562)),
                        (n = y(n, o, i, r, e[s + 14], 23, -35309556)),
                        (r = y(r, n, o, i, e[s + 1], 4, -1530992060)),
                        (i = y(i, r, n, o, e[s + 4], 11, 1272893353)),
                        (o = y(o, i, r, n, e[s + 7], 16, -155497632)),
                        (n = y(n, o, i, r, e[s + 10], 23, -1094730640)),
                        (r = y(r, n, o, i, e[s + 13], 4, 681279174)),
                        (i = y(i, r, n, o, e[s + 0], 11, -358537222)),
                        (o = y(o, i, r, n, e[s + 3], 16, -722521979)),
                        (n = y(n, o, i, r, e[s + 6], 23, 76029189)),
                        (r = y(r, n, o, i, e[s + 9], 4, -640364487)),
                        (i = y(i, r, n, o, e[s + 12], 11, -421815835)),
                        (o = y(o, i, r, n, e[s + 15], 16, 530742520)),
                        (r = w(r, (n = y(n, o, i, r, e[s + 2], 23, -995338651)), o, i, e[s + 0], 6, -198630844)),
                        (i = w(i, r, n, o, e[s + 7], 10, 1126891415)),
                        (o = w(o, i, r, n, e[s + 14], 15, -1416354905)),
                        (n = w(n, o, i, r, e[s + 5], 21, -57434055)),
                        (r = w(r, n, o, i, e[s + 12], 6, 1700485571)),
                        (i = w(i, r, n, o, e[s + 3], 10, -1894986606)),
                        (o = w(o, i, r, n, e[s + 10], 15, -1051523)),
                        (n = w(n, o, i, r, e[s + 1], 21, -2054922799)),
                        (r = w(r, n, o, i, e[s + 8], 6, 1873313359)),
                        (i = w(i, r, n, o, e[s + 15], 10, -30611744)),
                        (o = w(o, i, r, n, e[s + 6], 15, -1560198380)),
                        (n = w(n, o, i, r, e[s + 13], 21, 1309151649)),
                        (r = w(r, n, o, i, e[s + 4], 6, -145523070)),
                        (i = w(i, r, n, o, e[s + 11], 10, -1120210379)),
                        (o = w(o, i, r, n, e[s + 2], 15, 718787259)),
                        (n = w(n, o, i, r, e[s + 9], 21, -343485551)),
                        (r = b(r, a)),
                        (n = b(n, u)),
                        (o = b(o, c)),
                        (i = b(i, f));
                    }
                    return Array(r, n, o, i);
                  }
                  function h(e, t, r, n, o, i) {
                    return b(((s = b(b(t, e), b(n, i))) << (a = o)) | (s >>> (32 - a)), r);
                    var s, a;
                  }
                  function p(e, t, r, n, o, i, s) {
                    return h((t & r) | (~t & n), e, t, o, i, s);
                  }
                  function g(e, t, r, n, o, i, s) {
                    return h((t & n) | (r & ~n), e, t, o, i, s);
                  }
                  function y(e, t, r, n, o, i, s) {
                    return h(t ^ r ^ n, e, t, o, i, s);
                  }
                  function w(e, t, r, n, o, i, s) {
                    return h(r ^ (t | ~n), e, t, o, i, s);
                  }
                  function b(e, t) {
                    var r = (65535 & e) + (65535 & t);
                    return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
                  }
                  t.exports = function (e) {
                    return l.hash(e, d, 16);
                  };
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js",
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify"
                );
              },
              { "./helpers": 4, buffer: 3, lYpoI2: 10 }
            ],
            7: [
              function (e, t, r) {
                (function (e, r, n, o, i, s, a, u, c) {
                  var f, l;
                  (l = function (e) {
                    for (var t, r = new Array(e), n = 0; n < e; n++)
                      0 == (3 & n) && (t = 4294967296 * Math.random()), (r[n] = (t >>> ((3 & n) << 3)) & 255);
                    return r;
                  }),
                    (t.exports = f || l);
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js",
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify"
                );
              },
              { buffer: 3, lYpoI2: 10 }
            ],
            8: [
              function (e, t, r) {
                (function (r, n, o, i, s, a, u, c, f) {
                  var l = e("./helpers");
                  function d(e, t) {
                    (e[t >> 5] |= 128 << (24 - (t % 32))), (e[15 + (((t + 64) >> 9) << 4)] = t);
                    for (
                      var r,
                        n,
                        o,
                        i,
                        s,
                        a = Array(80),
                        u = 1732584193,
                        c = -271733879,
                        f = -1732584194,
                        l = 271733878,
                        d = -1009589776,
                        g = 0;
                      g < e.length;
                      g += 16
                    ) {
                      for (var y = u, w = c, b = f, m = l, v = d, _ = 0; _ < 80; _++) {
                        a[_] = _ < 16 ? e[g + _] : p(a[_ - 3] ^ a[_ - 8] ^ a[_ - 14] ^ a[_ - 16], 1);
                        var E = h(
                          h(
                            p(u, 5),
                            ((o = c),
                            (i = f),
                            (s = l),
                            (n = _) < 20 ? (o & i) | (~o & s) : !(n < 40) && n < 60 ? (o & i) | (o & s) | (i & s) : o ^ i ^ s)
                          ),
                          h(h(d, a[_]), (r = _) < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514)
                        );
                        (d = l), (l = f), (f = p(c, 30)), (c = u), (u = E);
                      }
                      (u = h(u, y)), (c = h(c, w)), (f = h(f, b)), (l = h(l, m)), (d = h(d, v));
                    }
                    return Array(u, c, f, l, d);
                  }
                  function h(e, t) {
                    var r = (65535 & e) + (65535 & t);
                    return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
                  }
                  function p(e, t) {
                    return (e << t) | (e >>> (32 - t));
                  }
                  t.exports = function (e) {
                    return l.hash(e, d, 20, !0);
                  };
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js",
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify"
                );
              },
              { "./helpers": 4, buffer: 3, lYpoI2: 10 }
            ],
            9: [
              function (e, t, r) {
                (function (r, n, o, i, s, a, u, c, f) {
                  function l(e, t) {
                    var r = (65535 & e) + (65535 & t);
                    return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
                  }
                  function d(e, t) {
                    return (e >>> t) | (e << (32 - t));
                  }
                  function h(e, t) {
                    var r,
                      n,
                      o,
                      i,
                      s,
                      a,
                      u,
                      c,
                      f,
                      h,
                      p = new Array(
                        1116352408,
                        1899447441,
                        3049323471,
                        3921009573,
                        961987163,
                        1508970993,
                        2453635748,
                        2870763221,
                        3624381080,
                        310598401,
                        607225278,
                        1426881987,
                        1925078388,
                        2162078206,
                        2614888103,
                        3248222580,
                        3835390401,
                        4022224774,
                        264347078,
                        604807628,
                        770255983,
                        1249150122,
                        1555081692,
                        1996064986,
                        2554220882,
                        2821834349,
                        2952996808,
                        3210313671,
                        3336571891,
                        3584528711,
                        113926993,
                        338241895,
                        666307205,
                        773529912,
                        1294757372,
                        1396182291,
                        1695183700,
                        1986661051,
                        2177026350,
                        2456956037,
                        2730485921,
                        2820302411,
                        3259730800,
                        3345764771,
                        3516065817,
                        3600352804,
                        4094571909,
                        275423344,
                        430227734,
                        506948616,
                        659060556,
                        883997877,
                        958139571,
                        1322822218,
                        1537002063,
                        1747873779,
                        1955562222,
                        2024104815,
                        2227730452,
                        2361852424,
                        2428436474,
                        2756734187,
                        3204031479,
                        3329325298
                      ),
                      g = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
                      y = new Array(64);
                    (e[t >> 5] |= 128 << (24 - (t % 32))), (e[15 + (((t + 64) >> 9) << 4)] = t);
                    for (var w, b, m, v, _, E, I, L, A = 0; A < e.length; A += 16) {
                      (r = g[0]), (n = g[1]), (o = g[2]), (i = g[3]), (s = g[4]), (a = g[5]), (u = g[6]), (c = g[7]);
                      for (var x = 0; x < 64; x++)
                        (y[x] =
                          x < 16
                            ? e[x + A]
                            : l(
                                l(l(d((L = y[x - 2]), 17) ^ d(L, 19) ^ (L >>> 10), y[x - 7]), d((I = y[x - 15]), 7) ^ d(I, 18) ^ (I >>> 3)),
                                y[x - 16]
                              )),
                          (f = l(l(l(l(c, d((E = s), 6) ^ d(E, 11) ^ d(E, 25)), ((_ = s) & a) ^ (~_ & u)), p[x]), y[x])),
                          (h = l(d((v = r), 2) ^ d(v, 13) ^ d(v, 22), ((w = r) & (b = n)) ^ (w & (m = o)) ^ (b & m))),
                          (c = u),
                          (u = a),
                          (a = s),
                          (s = l(i, f)),
                          (i = o),
                          (o = n),
                          (n = r),
                          (r = l(f, h));
                      (g[0] = l(r, g[0])),
                        (g[1] = l(n, g[1])),
                        (g[2] = l(o, g[2])),
                        (g[3] = l(i, g[3])),
                        (g[4] = l(s, g[4])),
                        (g[5] = l(a, g[5])),
                        (g[6] = l(u, g[6])),
                        (g[7] = l(c, g[7]));
                    }
                    return g;
                  }
                  var p = e("./helpers");
                  t.exports = function (e) {
                    return p.hash(e, h, 32, !0);
                  };
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js",
                  "/node_modules/gulp-browserify/node_modules/crypto-browserify"
                );
              },
              { "./helpers": 4, buffer: 3, lYpoI2: 10 }
            ],
            10: [
              function (e, t, r) {
                (function (e, r, n, o, i, s, a, u, c) {
                  function f() {}
                  ((e = t.exports = {}).nextTick = (function () {
                    var e = "undefined" != typeof window && window.setImmediate,
                      t = "undefined" != typeof window && window.postMessage && window.addEventListener;
                    if (e)
                      return function (e) {
                        return window.setImmediate(e);
                      };
                    if (t) {
                      var r = [];
                      return (
                        window.addEventListener(
                          "message",
                          function (e) {
                            var t = e.source;
                            (t !== window && null !== t) || "process-tick" !== e.data || (e.stopPropagation(), 0 < r.length && r.shift()());
                          },
                          !0
                        ),
                        function (e) {
                          r.push(e), window.postMessage("process-tick", "*");
                        }
                      );
                    }
                    return function (e) {
                      setTimeout(e, 0);
                    };
                  })()),
                    (e.title = "browser"),
                    (e.browser = !0),
                    (e.env = {}),
                    (e.argv = []),
                    (e.on = f),
                    (e.addListener = f),
                    (e.once = f),
                    (e.off = f),
                    (e.removeListener = f),
                    (e.removeAllListeners = f),
                    (e.emit = f),
                    (e.binding = function (e) {
                      throw new Error("process.binding is not supported");
                    }),
                    (e.cwd = function () {
                      return "/";
                    }),
                    (e.chdir = function (e) {
                      throw new Error("process.chdir is not supported");
                    });
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/node_modules/gulp-browserify/node_modules/process/browser.js",
                  "/node_modules/gulp-browserify/node_modules/process"
                );
              },
              { buffer: 3, lYpoI2: 10 }
            ],
            11: [
              function (e, t, r) {
                (function (e, t, n, o, i, s, a, u, c) {
                  (r.read = function (e, t, r, n, o) {
                    var i,
                      s,
                      a = 8 * o - n - 1,
                      u = (1 << a) - 1,
                      c = u >> 1,
                      f = -7,
                      l = r ? o - 1 : 0,
                      d = r ? -1 : 1,
                      h = e[t + l];
                    for (l += d, i = h & ((1 << -f) - 1), h >>= -f, f += a; 0 < f; i = 256 * i + e[t + l], l += d, f -= 8);
                    for (s = i & ((1 << -f) - 1), i >>= -f, f += n; 0 < f; s = 256 * s + e[t + l], l += d, f -= 8);
                    if (0 === i) i = 1 - c;
                    else {
                      if (i === u) return s ? NaN : (1 / 0) * (h ? -1 : 1);
                      (s += Math.pow(2, n)), (i -= c);
                    }
                    return (h ? -1 : 1) * s * Math.pow(2, i - n);
                  }),
                    (r.write = function (e, t, r, n, o, i) {
                      var s,
                        a,
                        u,
                        c = 8 * i - o - 1,
                        f = (1 << c) - 1,
                        l = f >> 1,
                        d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        h = n ? 0 : i - 1,
                        p = n ? 1 : -1,
                        g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                      for (
                        t = Math.abs(t),
                          isNaN(t) || t === 1 / 0
                            ? ((a = isNaN(t) ? 1 : 0), (s = f))
                            : ((s = Math.floor(Math.log(t) / Math.LN2)),
                              t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                              2 <= (t += 1 <= s + l ? d / u : d * Math.pow(2, 1 - l)) * u && (s++, (u /= 2)),
                              f <= s + l
                                ? ((a = 0), (s = f))
                                : 1 <= s + l
                                ? ((a = (t * u - 1) * Math.pow(2, o)), (s += l))
                                : ((a = t * Math.pow(2, l - 1) * Math.pow(2, o)), (s = 0)));
                        8 <= o;
                        e[r + h] = 255 & a, h += p, a /= 256, o -= 8
                      );
                      for (s = (s << o) | a, c += o; 0 < c; e[r + h] = 255 & s, h += p, s /= 256, c -= 8);
                      e[r + h - p] |= 128 * g;
                    });
                }).call(
                  this,
                  e("lYpoI2"),
                  "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                  e("buffer").Buffer,
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6],
                  "/node_modules/ieee754/index.js",
                  "/node_modules/ieee754"
                );
              },
              { buffer: 3, lYpoI2: 10 }
            ]
          },
          {},
          [1]
        )(1);
      },
      58: (e) => {
        e.exports = {
          servers: [],
          selected: null,
          connected: null,
          error: null,
          errorCounter: 0,
          connectionStartTimestamp: 0,
          signed: !1,
          rated: !1
        };
      }
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.p = "/"),
    (() => {
      "use strict";
      function e(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      function t(e, t) {
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
      function n(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? t(Object(o), !0).forEach(function (t) {
                e(r, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
            : t(Object(o)).forEach(function (e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
              });
        }
        return r;
      }
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      var i = r(58),
        s = r.n(i);
      const a = "1clickvpn.net";
      var u = r(705),
        c = r.n(u);
      const f = r.p + "united-states.svg",
        l = r.p + "canada.svg",
        d = r.p + "estonia.svg",
        h = r.p + "france.svg",
        p = r.p + "germany.svg",
        g = r.p + "italy.svg",
        y = r.p + "lithuania.svg",
        w = r.p + "united-kingdom.svg",
        b = r.p + "norway.svg",
        m = r.p + "netherlands.svg";
      var v = { us: f, ca: l, ee: d, fr: h, de: p, it: g, lt: y, gb: w, no: b, nl: m },
        _ = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.requests = []),
              (this.storage = s()),
              (this.onAuthRequiredListener = this.onAuthRequiredListener.bind(this)),
              (this.onCompletedListener = this.onCompletedListener.bind(this)),
              (this.onErrorOccurredListener = this.onErrorOccurredListener.bind(this)),
              (this.onProxyErrorListener = this.onProxyErrorListener.bind(this)),
              this.initStorage(),
              this.initListeners(),
              (this.blackList = ["dev.1clickvpn.net"]);
          }
          var t, r, i;
          return (
            (t = e),
            (r = [
              {
                key: "onConnect",
                value: function (e) {
                  e &&
                    ((this.storage.errorCounter = 0),
                    (this.storage.connectionStartTimestamp = Date.now()),
                    (this.storage.selected = e),
                    (this.storage.connected = null)),
                    this.setProxy(),
                    this.saveStorage();
                }
              },
              {
                key: "onDisconnect",
                value: function () {
                  (this.storage.selected = null),
                    (this.storage.connected = null),
                    (this.storage.connectionEndTimestamp = Date.now()),
                    (this.storage.error = null),
                    this.setProxy(),
                    this.saveStorage();
                }
              },
              {
                key: "initListeners",
                value: function () {
                  var e = this;
                  chrome.runtime.onInstalled.addListener(function (e) {
                    var t = e.reason;
                    e.previousVersion,
                      "install" === t && chrome.tabs.create({ url: "https://".concat(a, "/download-vpn"), active: !0 }),
                      chrome.runtime.setUninstallURL("https://".concat(a, "/contact/"));
                  }),
                    chrome.runtime.onMessage.addListener(function (t, r, n) {
                      switch (t.action) {
                        case "connect":
                          e.onConnect(t.server), n();
                          break;
                        case "disconnect":
                          e.onDisconnect(), n();
                          break;
                        case "getConfig":
                          n(e.storage);
                          break;
                        case "sync":
                          e.sync();
                          break;
                        case "rated":
                          (e.storage.rated = !0), e.saveStorage();
                      }
                    }),
                    setInterval(function () {
                      e.storage.error &&
                        (chrome.browserAction.setIcon({
                          path: {
                            32: chrome.extension.getURL("icon-32.png"),
                            64: chrome.extension.getURL("icon-64.png"),
                            128: chrome.extension.getURL("icon-128.png")
                          }
                        }),
                        chrome.browserAction.setBadgeBackgroundColor({ color: "#c9453f" }),
                        chrome.browserAction.setBadgeText({ text: "!" }));
                    }, 1e3),
                    setInterval(function () {
                      return e.sync();
                    }, 3e5);
                }
              },
              {
                key: "initStorage",
                value: function () {
                  var e = this;
                  chrome.storage.local.get(this.storage, function (t) {
                    (e.storage = t), e.setProxy(), e.saveStorage(), e.sync();
                  });
                }
              },
              {
                key: "saveStorage",
                value: function () {
                  chrome.storage.local.set(this.storage);
                }
              },
              {
                key: "sync",
                value: function () {
                  var e = this;
                  fetch("https://".concat(a, "/api/v1/checks/auth"))
                    .then(function (e) {
                      return e.ok ? e.json() : Promise.reject();
                    })
                    .then(function (t) {
                      (e.storage.signed = !!t.ok || e.storage.signed), e.saveStorage();
                    })
                    .catch(function () {}),
                    fetch("https://".concat(a, "/api/v1/servers/"))
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (t) {
                        c()(n({}, t)) !== c()(n({}, e.storage.servers)) && ((e.storage.servers = t), e.saveStorage(), e.setProxy());
                      })
                      .catch(function () {});
                }
              },
              {
                key: "setProxy",
                value: function () {
                  var e,
                    t = this;
                  if (this.storage.selected) {
                    var r = this.storage.servers.find(function (e) {
                      return e.countryCode === t.storage.selected.countryCode;
                    });
                    r && r.nodes && r.nodes.length && (e = r.nodes[0]), e || ((this.storage.error = null), this.saveStorage());
                  }
                  chrome.webRequest.onAuthRequired.removeListener(this.onAuthRequiredListener),
                    chrome.webRequest.onCompleted.removeListener(this.onCompletedListener),
                    chrome.webRequest.onErrorOccurred.removeListener(this.onErrorOccurredListener),
                    chrome.proxy.onProxyError.removeListener(this.onProxyErrorListener),
                    chrome.proxy.settings.clear({ scope: "regular" }, function () {
                      if (!t.storage.selected || !e) return t.setBadge(), void t.assertConnection();
                      chrome.webRequest.onAuthRequired.addListener(t.onAuthRequiredListener, { urls: ["http://*/*", "https://*/*"] }, [
                        "blocking"
                      ]),
                        chrome.webRequest.onCompleted.addListener(t.onCompletedListener, { urls: ["http://*/*", "https://*/*"] }),
                        chrome.webRequest.onErrorOccurred.addListener(t.onErrorOccurredListener, { urls: ["http://*/*", "https://*/*"] }),
                        chrome.proxy.settings.set(
                          {
                            value: {
                              mode: "fixed_servers",
                              rules: {
                                singleProxy: { scheme: e.schema.toLowerCase(), host: e.host, port: Number(e.port) },
                                bypassList: [a]
                              }
                            },
                            scope: "regular"
                          },
                          function () {
                            t.assertConnection();
                          }
                        ),
                        chrome.proxy.onProxyError.addListener(t.onProxyErrorListener);
                    });
                }
              },
              {
                key: "onAuthRequiredListener",
                value: function (e) {
                  var t = this;
                  if (!e.isProxy) return {};
                  if (-1 !== this.requests.indexOf(e.requestId)) return { cancel: !0 };
                  this.requests.push(e.requestId);
                  var r = this.storage.servers.find(function (e) {
                    return e.countryCode === t.storage.selected.countryCode;
                  });
                  if (!r) return (this.storage.error = {}), this.saveStorage(), {};
                  var n = r.credentials;
                  return n ? { authCredentials: n } : ((this.storage.error = {}), this.saveStorage(), {});
                }
              },
              {
                key: "onCompletedListener",
                value: function (e) {
                  var t = this.requests.indexOf(e.requestId);
                  t > -1 && this.requests.splice(t, 1);
                }
              },
              {
                key: "onErrorOccurredListener",
                value: function (e) {
                  var t = this.requests.indexOf(e.requestId);
                  t > -1 && this.requests.splice(t, 1);
                }
              },
              {
                key: "onProxyErrorListener",
                value: function (e) {
                  "net::ERR_PROXY_CONNECTION_FAILED" === e.error &&
                    (this.storage.error || (this.storage.errorCounter++, (this.storage.error = !0), this.saveStorage()));
                }
              },
              {
                key: "assertConnection",
                value: function () {
                  var e = this;
                  this.request && this.request.abort();
                  var t = new XMLHttpRequest();
                  t.open("GET", "https://api.1clickvpn.net/api/v1/checks/ip/", !0),
                    (t.timeout = 1e4),
                    (t.onload = function () {
                      if (((e.request = null), 200 === t.status && t.responseText)) {
                        var r = JSON.parse(t.responseText),
                          n = (
                            e.storage.servers.find(function (e) {
                              return e.countryCode == r.countryCode;
                            }) || {}
                          ).countryCode;
                        e.storage.selected && n && ((e.storage.connected = { countryCode: n }), e.setBadge(), e.saveStorage());
                      } else e.storage.selected && ((e.storage.error = !0), e.saveStorage());
                    }),
                    (t.ontimeout = function () {
                      (e.request = null), e.storage.selected && ((e.storage.error = !0), e.saveStorage());
                    }),
                    (t.onerror = function () {
                      (e.request = null), t.abort(), e.storage.selected && ((e.storage.error = !0), e.saveStorage());
                    }),
                    t.send(),
                    (this.request = t);
                }
              },
              {
                key: "setBadge",
                value: function () {
                  if (this.storage.connected) {
                    var e = v[this.storage.connected.countryCode.toLowerCase()];
                    e && chrome.browserAction.setIcon({ path: chrome.extension.getURL(e) }),
                      chrome.browserAction.setBadgeBackgroundColor({ color: [5, 194, 143, 100] }),
                      chrome.browserAction.setBadgeText({ text: this.storage.connected.countryCode });
                  } else
                    chrome.browserAction.setIcon({
                      path: {
                        32: chrome.extension.getURL("icon-32.png"),
                        64: chrome.extension.getURL("icon-64.png"),
                        128: chrome.extension.getURL("icon-128.png")
                      }
                    }),
                      chrome.browserAction.setBadgeText({ text: "" }),
                      chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 255, 0] });
                }
              }
            ]),
            r && o(t.prototype, r),
            i && o(t, i),
            e
          );
        })();
      new _();
    })();
})();
