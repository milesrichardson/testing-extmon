try {
  var _F_toggles_initialize = function (a) {
    ("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : this)._F_toggles = a || [];
  };
  _F_toggles_initialize([]);
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  /*

 SPDX-License-Identifier: Apache-2.0
*/
  /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var k,
    aa = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, aa);
      else {
        var c = Error().stack;
        c && (this.stack = c);
      }
      a && (this.message = String(a));
      void 0 !== b && (this.cause = b);
    },
    da = function (a) {
      n.setTimeout(function () {
        throw a;
      }, 0);
    },
    ea = function () {
      var a = n.navigator;
      return a && (a = a.userAgent) ? a : "";
    },
    ia = function (a) {
      return fa
        ? ha
          ? ha.brands.some(function (b) {
              return (b = b.brand) && -1 != b.indexOf(a);
            })
          : !1
        : !1;
    },
    q = function (a) {
      return -1 != ea().indexOf(a);
    },
    ja = function () {
      return fa ? !!ha && 0 < ha.brands.length : !1;
    },
    la = function () {
      return ja() ? !1 : q("Opera");
    },
    ma = function () {
      return ja() ? !1 : q("Trident") || q("MSIE");
    },
    na = function () {
      return q("Firefox") || q("FxiOS");
    },
    oa = function () {
      return ja() ? ia("Chromium") : ((q("Chrome") || q("CriOS")) && !(ja() ? 0 : q("Edge"))) || q("Silk");
    },
    pa = function () {
      return fa ? !!ha && !!ha.platform : !1;
    },
    qa = function () {
      return q("iPhone") && !q("iPod") && !q("iPad");
    },
    ra = function () {
      return qa() || q("iPad") || q("iPod");
    },
    sa = function () {
      return pa() ? "macOS" === ha.platform : q("Macintosh");
    },
    ta = function (a, b, c) {
      for (var d = "string" === typeof a ? a.split("") : a, e = a.length - 1; 0 <= e; --e) e in d && b.call(c, d[e], e, a);
    },
    va = function (a, b) {
      return 0 <= ua(a, b);
    },
    wa = function (a) {
      if (!Array.isArray(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
      a.length = 0;
    },
    ya = function (a, b) {
      b = ua(a, b);
      var c;
      (c = 0 <= b) && xa(a, b);
      return c;
    },
    xa = function (a, b) {
      return 1 == Array.prototype.splice.call(a, b, 1).length;
    },
    za = function (a, b, c) {
      var d = 0;
      ta(a, function (e, f) {
        b.call(c, e, f, a) && xa(a, f) && d++;
      });
    },
    Aa = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    },
    Ca = function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (Ba(d)) {
          var e = a.length || 0,
            f = d.length || 0;
          a.length = e + f;
          for (var g = 0; g < f; g++) a[e + g] = d[g];
        } else a.push(d);
      }
    },
    Ea = function (a, b, c, d) {
      Array.prototype.splice.apply(a, Da(arguments, 1));
    },
    Da = function (a, b, c) {
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    },
    Ga = function (a, b) {
      if (!Ba(a) || !Ba(b) || a.length != b.length) return !1;
      for (var c = a.length, d = Fa, e = 0; e < c; e++) if (!d(a[e], b[e])) return !1;
      return !0;
    },
    Ha = function (a, b) {
      return a > b ? 1 : a < b ? -1 : 0;
    },
    Fa = function (a, b) {
      return a === b;
    },
    Ka = function (a) {
      if (!Ia) return Ja(a);
      for (var b = "", c = 0, d = a.length - 10240; c < d; ) b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
      b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
      return btoa(b);
    },
    La = function () {
      return "function" === typeof BigInt;
    },
    Pa = function (a) {
      var b = 0 > a;
      a = Math.abs(a);
      var c = a >>> 0;
      a = Math.floor((a - c) / 4294967296);
      b && ((c = t(Ma(c, a))), (b = c.next().value), (a = c.next().value), (c = b));
      Na = c >>> 0;
      Oa = a >>> 0;
    },
    Ra = function (a, b) {
      b >>>= 0;
      a >>>= 0;
      if (2097151 >= b) var c = "" + (4294967296 * b + a);
      else
        La()
          ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
          : ((c = ((a >>> 24) | (b << 8)) & 16777215),
            (b = (b >> 16) & 65535),
            (a = (a & 16777215) + 6777216 * c + 6710656 * b),
            (c += 8147497 * b),
            (b *= 2),
            1e7 <= a && ((c += Math.floor(a / 1e7)), (a %= 1e7)),
            1e7 <= c && ((b += Math.floor(c / 1e7)), (c %= 1e7)),
            (c = b + Qa(c) + Qa(a)));
      return c;
    },
    Qa = function (a) {
      a = String(a);
      return "0000000".slice(a.length) + a;
    },
    Sa = function () {
      var a = Na,
        b = Oa;
      b & 2147483648
        ? La()
          ? (a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
          : ((b = t(Ma(a, b))), (a = b.next().value), (b = b.next().value), (a = "-" + Ra(a, b)))
        : (a = Ra(a, b));
      return a;
    },
    Ma = function (a, b) {
      b = ~b;
      a ? (a = ~a + 1) : (b += 1);
      return [a, b];
    },
    Ta = function (a) {
      return Array.prototype.slice.call(a);
    },
    Wa = function (a) {
      var b = Ua(a);
      1 !== (b & 1) && (Object.isFrozen(a) && (a = Ta(a)), Va(a, b | 1));
    },
    Xa = function (a, b, c) {
      return c ? a | b : a & ~b;
    },
    Za = function () {
      var a = [];
      Ya(a, 1);
      return a;
    },
    $a = function (a, b) {
      Va(b, (a | 0) & -14591);
    },
    ab = function (a, b) {
      Va(b, (a | 34) & -14557);
    },
    bb = function (a) {
      a = (a >> 14) & 1023;
      return 0 === a ? 536870912 : a;
    },
    db = function (a) {
      return !(!a || "object" !== typeof a || a.Fj !== cb);
    },
    eb = function (a) {
      return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
    },
    fb = function (a, b, c) {
      if (!Array.isArray(a) || a.length) return !1;
      var d = Ua(a);
      if (d & 1) return !0;
      if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
      Va(a, d | 1);
      return !0;
    },
    gb = function (a) {
      if (a & 2) throw Error();
    },
    hb = function (a) {
      a = Error(a);
      a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
      a.__closure__error__context__984382.severity = "warning";
      return a;
    },
    jb = function (a) {
      var b = typeof a;
      return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : ib.test(a);
    },
    kb = function (a) {
      if ("number" !== typeof a) throw hb("int32");
      if (!Number.isFinite(a)) throw hb("int32");
      return a | 0;
    },
    lb = function (a) {
      if (null == a) return a;
      if ("string" === typeof a) {
        if (!a) return;
        a = +a;
      }
      if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0;
    },
    pb = function (a) {
      if (null != a) {
        var b = !!b;
        if (!jb(a)) throw hb("int64");
        a = "string" === typeof a ? mb(a) : b ? nb(a) : ob(a);
      }
      return a;
    },
    qb = function (a) {
      return "-" === a[0]
        ? 20 > a.length
          ? !0
          : 20 === a.length && -922337 < Number(a.substring(0, 7))
        : 19 > a.length
        ? !0
        : 19 === a.length && 922337 > Number(a.substring(0, 6));
    },
    ob = function (a) {
      a = Math.trunc(a);
      if (!Number.isSafeInteger(a)) {
        Pa(a);
        var b = Na,
          c = Oa;
        if ((a = c & 2147483648)) (b = (~b + 1) >>> 0), (c = ~c >>> 0), 0 == b && (c = (c + 1) >>> 0);
        b = 4294967296 * c + (b >>> 0);
        a = a ? -b : b;
      }
      return a;
    },
    nb = function (a) {
      a = Math.trunc(a);
      if (Number.isSafeInteger(a)) a = String(a);
      else {
        var b = String(a);
        qb(b) ? (a = b) : (Pa(a), (a = Sa()));
      }
      return a;
    },
    mb = function (a) {
      var b = Math.trunc(Number(a));
      if (Number.isSafeInteger(b)) return String(b);
      b = a.indexOf(".");
      -1 !== b && (a = a.substring(0, b));
      if (!qb(a)) {
        if (16 > a.length) Pa(Number(a));
        else if (La()) (a = BigInt(a)), (Na = Number(a & BigInt(4294967295)) >>> 0), (Oa = Number((a >> BigInt(32)) & BigInt(4294967295)));
        else {
          b = +("-" === a[0]);
          Oa = Na = 0;
          for (var c = a.length, d = b, e = ((c - b) % 6) + b; e <= c; d = e, e += 6)
            (d = Number(a.slice(d, e))),
              (Oa *= 1e6),
              (Na = 1e6 * Na + d),
              4294967296 <= Na && ((Oa += Math.trunc(Na / 4294967296)), (Oa >>>= 0), (Na >>>= 0));
          b && ((b = t(Ma(Na, Oa))), (a = b.next().value), (b = b.next().value), (Na = a), (Oa = b));
        }
        a = Sa();
      }
      return a;
    },
    sb = function (a, b, c) {
      if (null != a && "object" === typeof a && a.ud === rb) return a;
      if (Array.isArray(a)) {
        var d = Ua(a),
          e = d;
        0 === e && (e |= c & 32);
        e |= c & 2;
        e !== d && Va(a, e);
        return new b(a);
      }
    },
    ub = function (a, b) {
      tb = b;
      a = new a(b);
      tb = void 0;
      return a;
    },
    v = function (a, b, c) {
      null == a && (a = tb);
      tb = void 0;
      if (null == a) {
        var d = 96;
        c ? ((a = [c]), (d |= 512)) : (a = []);
        b && (d = (d & -16760833) | ((b & 1023) << 14));
      } else {
        if (!Array.isArray(a)) throw Error();
        d = Ua(a);
        if (d & 64) return a;
        d |= 64;
        if (c && ((d |= 512), c !== a[0])) throw Error();
        a: {
          c = a;
          var e = c.length;
          if (e) {
            var f = e - 1;
            if (eb(c[f])) {
              d |= 256;
              b = f - (+!!(d & 512) - 1);
              if (1024 <= b) throw Error();
              d = (d & -16760833) | ((b & 1023) << 14);
              break a;
            }
          }
          if (b) {
            b = Math.max(b, e - (+!!(d & 512) - 1));
            if (1024 < b) throw Error();
            d = (d & -16760833) | ((b & 1023) << 14);
          }
        }
      }
      Va(a, d);
      return a;
    },
    wb = function (a, b) {
      return vb(b);
    },
    vb = function (a) {
      switch (typeof a) {
        case "number":
          return isFinite(a) ? a : String(a);
        case "boolean":
          return a ? 1 : 0;
        case "object":
          if (a) {
            if (Array.isArray(a)) return xb || !fb(a, void 0, 9999) ? a : void 0;
            if (yb && null != a && a instanceof Uint8Array) return Ka(a);
            if (a instanceof zb) {
              var b = a.ea;
              return null == b ? "" : "string" === typeof b ? b : (a.ea = Ka(b));
            }
          }
      }
      return a;
    },
    Ab = function (a, b, c) {
      a = Ta(a);
      var d = a.length,
        e = b & 256 ? a[d - 1] : void 0;
      d += e ? -1 : 0;
      for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
      if (e) {
        b = a[b] = {};
        for (var f in e) b[f] = c(e[f]);
      }
      return a;
    },
    Cb = function (a, b, c, d, e, f) {
      if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && Ua(a) & 1 ? void 0 : f && Ua(a) & 2 ? a : Bb(a, b, c, void 0 !== d, e, f);
        else if (eb(a)) {
          var g = {},
            h;
          for (h in a) g[h] = Cb(a[h], b, c, d, e, f);
          a = g;
        } else a = b(a, d);
        return a;
      }
    },
    Bb = function (a, b, c, d, e, f) {
      var g = d || c ? Ua(a) : 0;
      d = d ? !!(g & 32) : void 0;
      a = Ta(a);
      for (var h = 0; h < a.length; h++) a[h] = Cb(a[h], b, c, d, e, f);
      c && c(g, a);
      return a;
    },
    Db = function (a) {
      return a.ud === rb ? a.toJSON() : vb(a);
    },
    Eb = function (a, b, c) {
      c = void 0 === c ? ab : c;
      if (null != a) {
        if (yb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
          var d = Ua(a);
          if (d & 2) return a;
          b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
          return b ? (Va(a, (d | 34) & -12293), a) : Bb(a, Eb, d & 4 ? ab : c, !0, !1, !0);
        }
        a.ud === rb && ((c = a.J), (d = Fb(c)), (a = d & 2 ? a : ub(a.constructor, Gb(c, d, !0))));
        return a;
      }
    },
    Gb = function (a, b, c) {
      var d = c || b & 2 ? ab : $a,
        e = !!(b & 32);
      a = Ab(a, b, function (f) {
        return Eb(f, e, d);
      });
      Ya(a, 32 | (c ? 2 : 0));
      return a;
    },
    Hb = function (a) {
      var b = a.J,
        c = Fb(b);
      return c & 2 ? ub(a.constructor, Gb(b, c, !1)) : a;
    },
    Ib = function (a, b, c, d, e) {
      var f = bb(b);
      if (c >= f || e) {
        e = b;
        if (b & 256) f = a[a.length - 1];
        else {
          if (null == d) return e;
          f = a[f + (+!!(b & 512) - 1)] = {};
          e |= 256;
        }
        f[c] = d;
        e !== b && Va(a, e);
        return e;
      }
      a[c + (+!!(b & 512) - 1)] = d;
      b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
      return b;
    },
    Jb = function (a) {
      return (!!(2 & a) && !!(4 & a)) || !!(2048 & a);
    },
    Lb = function (a, b, c, d) {
      var e = a.J,
        f = Fb(e);
      gb(f);
      if (null == c) return Ib(e, f, b), a;
      var g = Ua(c),
        h = g,
        l = !!(2 & g) || Object.isFrozen(c),
        m = !l && !1;
      if (!(4 & g)) for (g = 21, l && ((c = Ta(c)), (h = 0), (g = Kb(g, f, !0))), l = 0; l < c.length; l++) c[l] = d(c[l]);
      m && ((c = Ta(c)), (h = 0), (g = Kb(g, f, !0)));
      g !== h && Va(c, g);
      Ib(e, f, b, c);
      return a;
    },
    Kb = function (a, b, c) {
      a = Xa(a, 2, !!(2 & b));
      a = Xa(a, 32, !!(32 & b) && c);
      return (a = Xa(a, 2048, !1));
    },
    Ob = function (a) {
      if (null == a) throw Error();
      if ("string" === typeof a) a = a ? new zb(a, Mb) : Nb || (Nb = new zb(null, Mb));
      else if (a.constructor !== zb)
        if (yb && null != a && a instanceof Uint8Array) a = a.length ? new zb(new Uint8Array(a), Mb) : Nb || (Nb = new zb(null, Mb));
        else throw Error();
      return a;
    },
    Sb = function (a, b, c) {
      var d = a.constructor.Ka,
        e = Fb(c ? a.J : b),
        f = bb(e),
        g = !1;
      if (d && xb) {
        if (!c) {
          b = Ta(b);
          var h;
          if (b.length && eb((h = b[b.length - 1])))
            for (g = 0; g < d.length; g++)
              if (d[g] >= f) {
                Object.assign((b[b.length - 1] = {}), h);
                break;
              }
          g = !0;
        }
        f = b;
        c = !c;
        h = Fb(a.J);
        a = bb(h);
        h = +!!(h & 512) - 1;
        for (var l, m, p = 0; p < d.length; p++)
          if (((m = d[p]), m < a)) {
            m += h;
            var u = f[m];
            null == u ? (f[m] = c ? Pb : Za()) : c && u !== Pb && Wa(u);
          } else
            l || ((u = void 0), f.length && eb((u = f[f.length - 1])) ? (l = u) : f.push((l = {}))),
              (u = l[m]),
              null == l[m] ? (l[m] = c ? Pb : Za()) : c && u !== Pb && Wa(u);
      }
      l = b.length;
      if (!l) return b;
      var w;
      if (eb((f = b[l - 1]))) {
        a: {
          var r = f;
          c = {};
          a = !1;
          for (var A in r) {
            h = r[A];
            if (Array.isArray(h)) {
              p = h;
              if ((!Qb && fb(h, d, +A)) || (!Rb && db(h) && 0 === h.size)) h = null;
              h != p && (a = !0);
            }
            null != h ? (c[A] = h) : (a = !0);
          }
          if (a) {
            for (var J in c) {
              r = c;
              break a;
            }
            r = null;
          }
        }
        r != f && (w = !0);
        l--;
      }
      for (e = +!!(e & 512) - 1; 0 < l; l--) {
        A = l - 1;
        f = b[A];
        if (!(null == f || (!Qb && fb(f, d, A - e)) || (!Rb && db(f) && 0 === f.size))) break;
        var S = !0;
      }
      if (!w && !S) return b;
      var ba;
      g ? (ba = b) : (ba = Array.prototype.slice.call(b, 0, l));
      b = ba;
      g && (b.length = l);
      r && b.push(r);
      return b;
    },
    Wb = function (a) {
      return Tb(Ub, a, function (b) {
        return new Vb(b, 0 > b ? -1 : 0);
      });
    },
    Xb = function () {
      function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        p = m = 0;
      }
      function b(u) {
        for (var w = g, r = 0; 64 > r; r += 4) w[r / 4] = (u[r] << 24) | (u[r + 1] << 16) | (u[r + 2] << 8) | u[r + 3];
        for (r = 16; 80 > r; r++) (u = w[r - 3] ^ w[r - 8] ^ w[r - 14] ^ w[r - 16]), (w[r] = ((u << 1) | (u >>> 31)) & 4294967295);
        u = e[0];
        var A = e[1],
          J = e[2],
          S = e[3],
          ba = e[4];
        for (r = 0; 80 > r; r++) {
          if (40 > r)
            if (20 > r) {
              var ka = S ^ (A & (J ^ S));
              var T = 1518500249;
            } else (ka = A ^ J ^ S), (T = 1859775393);
          else 60 > r ? ((ka = (A & J) | (S & (A | J))), (T = 2400959708)) : ((ka = A ^ J ^ S), (T = 3395469782));
          ka = ((((u << 5) | (u >>> 27)) & 4294967295) + ka + ba + T + w[r]) & 4294967295;
          ba = S;
          S = J;
          J = ((A << 30) | (A >>> 2)) & 4294967295;
          A = u;
          u = ka;
        }
        e[0] = (e[0] + u) & 4294967295;
        e[1] = (e[1] + A) & 4294967295;
        e[2] = (e[2] + J) & 4294967295;
        e[3] = (e[3] + S) & 4294967295;
        e[4] = (e[4] + ba) & 4294967295;
      }
      function c(u, w) {
        if ("string" === typeof u) {
          u = unescape(encodeURIComponent(u));
          for (var r = [], A = 0, J = u.length; A < J; ++A) r.push(u.charCodeAt(A));
          u = r;
        }
        w || (w = u.length);
        r = 0;
        if (0 == m) for (; r + 64 < w; ) b(u.slice(r, r + 64)), (r += 64), (p += 64);
        for (; r < w; ) if (((f[m++] = u[r++]), p++, 64 == m)) for (m = 0, b(f); r + 64 < w; ) b(u.slice(r, r + 64)), (r += 64), (p += 64);
      }
      function d() {
        var u = [],
          w = 8 * p;
        56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
        for (var r = 63; 56 <= r; r--) (f[r] = w & 255), (w >>>= 8);
        b(f);
        for (r = w = 0; 5 > r; r++) for (var A = 24; 0 <= A; A -= 8) u[w++] = (e[r] >> A) & 255;
        return u;
      }
      for (var e = [], f = [], g = [], h = [128], l = 1; 64 > l; ++l) h[l] = 0;
      var m, p;
      a();
      return {
        reset: a,
        update: c,
        digest: d,
        ff: function () {
          for (var u = d(), w = "", r = 0; r < u.length; r++)
            w += "0123456789ABCDEF".charAt(Math.floor(u[r] / 16)) + "0123456789ABCDEF".charAt(u[r] % 16);
          return w;
        }
      };
    },
    x = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    },
    Yb = function (a, b) {
      var c = {},
        d;
      for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
      return c;
    },
    $b = function (a) {
      var b = Zb,
        c = {},
        d;
      for (d in b) c[d] = a.call(void 0, b[d], d, b);
      return c;
    },
    ac = function (a, b) {
      for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
      return !1;
    },
    bc = function (a, b) {
      for (var c in a) if (!b.call(void 0, a[c], c, a)) return !1;
      return !0;
    },
    cc = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    dc = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b;
    },
    ec = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    },
    fc = function (a, b) {
      for (var c in a) if (a[c] == b) return !0;
      return !1;
    },
    gc = function (a, b) {
      a: {
        for (var c in a)
          if (b.call(void 0, a[c], c, a)) {
            b = c;
            break a;
          }
        b = void 0;
      }
      return b && a[b];
    },
    hc = function (a) {
      for (var b in a) return !1;
      return !0;
    },
    ic = function (a, b) {
      var c;
      (c = b in a) && delete a[b];
      return c;
    },
    jc = function (a, b) {
      return null !== a && b in a ? a[b] : void 0;
    },
    kc = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    },
    mc = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < lc.length; f++) (c = lc[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    },
    nc = function (a) {
      a && "function" == typeof a.ga && a.ga();
    },
    oc = function (a) {
      for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        Ba(d) ? oc.apply(null, d) : nc(d);
      }
    },
    sc = function (a, b) {
      b = new Uint32Array(pc(b));
      qc(rc, a, b);
      return a;
    },
    tc = function (a) {
      return a ? (a = a.toUpperCase()) : null;
    },
    uc = function (a, b) {
      var c = a.G,
        d = b.G;
      if (c != d) return c < d ? 1 : -1;
      c = a.getCreationTime();
      d = b.getCreationTime();
      return c.V(d) ? (a.g != b.g ? (a.g < b.g ? -1 : 1) : 0) : c < d ? 1 : -1;
    },
    wc = function (a, b) {
      var c = a.xa,
        d = b.xa;
      var e = vc.L().i.GLOBAL_CHECKED_LIST_ITEMS_POLICY;
      return (e = !e || "GRAVEYARD" == e.h) && c && !d ? 1 : e && !c && d ? -1 : uc(a, b);
    },
    yc = function (a) {
      return new xc(function (b) {
        return b.substr(0, a.length + 1).toLowerCase() === a + ":";
      });
    },
    Dc = function (a) {
      var b = void 0 === b ? zc : b;
      a: if (((b = void 0 === b ? zc : b), !(a instanceof Ac))) {
        for (var c = 0; c < b.length; ++c) {
          var d = b[c];
          if (d instanceof xc && d.Sb(a)) {
            a = new Ac(a, Bc);
            break a;
          }
        }
        a = void 0;
      }
      return a || Cc;
    },
    Ec = function (a) {
      var b = [],
        c = kc(a);
      delete c.children;
      b.push(c);
      b.push.apply(b, a.children);
      return b;
    },
    Hc = function (a, b) {
      a = Fc(a.B);
      return (
        gc(a, function (c) {
          c = c.g.h || "";
          return b == c || Gc(b) == Gc(c);
        }) || null
      );
    },
    Gc = function (a) {
      a = Ic(a);
      Jc(a, "");
      a.j = "";
      Kc(a, "");
      a.l = "";
      return a.toString();
    },
    Mc = function (a) {
      return (a = a.match(Lc)) ? a[1] : "";
    },
    y = function (a, b, c) {
      chrome.runtime.sendMessage(chrome.runtime.id, { type: a, value: b }, c);
    },
    Uc = function (a) {
      if (a instanceof Nc) return a;
      var b = "",
        c = "";
      if (a instanceof Oc) (b = a.Qa()), (c = Gc(b) + " - " + a.getTitle());
      else if (a instanceof z) {
        b = Pc(a)
          ? Qc(a)
          : Rc(a)
              .map(function (e) {
                return Sc(e);
              })
              .join("\n");
        b = (b = Tc.exec(b)) ? b[0] : "";
        if (!b) return null;
        var d = a.getTitle();
        d || ((a = Hc(a, b)) && (d = a.g.getTitle()));
        d && (c = Gc(b) + " - " + d);
      } else (b = a.url), (c = Gc(b) + " - " + a.title);
      return new Nc(b, c);
    },
    Vc = function (a, b) {
      a = Uc(a);
      b = Uc(b);
      return !!a && !!b && (a.url == b.url || a.qb == b.qb);
    },
    $c = function () {
      var a = n.performance;
      if (!a || !a.getEntriesByType) return null;
      var b = a.getEntriesByType("navigation");
      if (!b || !b[0]) return null;
      b = b[0];
      a = a.timeOrigin || a.timing.navigationStart;
      var c = new Wc();
      c = B(c, 1, 1e3 * Math.round(a));
      c = B(c, 2, Math.round(1e3 * (a + b.redirectStart)));
      c = B(c, 3, Math.round(1e3 * (a + b.redirectEnd)));
      c = B(c, 4, Math.round(1e3 * (a + b.fetchStart)));
      c = B(c, 5, Math.round(1e3 * (a + b.domainLookupStart)));
      c = B(c, 6, Math.round(1e3 * (a + b.domainLookupEnd)));
      c = B(c, 7, Math.round(1e3 * (a + b.connectStart)));
      c = B(c, 8, Math.round(1e3 * (a + b.connectEnd)));
      b.secureConnectionStart && B(c, 9, Math.round(1e3 * (a + b.secureConnectionStart)));
      B(c, 10, Math.round(1e3 * (a + b.requestStart)));
      B(c, 11, Math.round(1e3 * (a + b.responseStart)));
      B(c, 12, Math.round(1e3 * (a + b.responseEnd)));
      Xc(c, 18, b.redirectCount);
      Yc(c, 19, Zc[b.type] || 1);
      return c;
    },
    ed = function (a) {
      B(a.i, 2, 1e3 * Date.now());
      var b = $c();
      if (b) {
        var c = ad(a);
        C(c, 6, b);
      }
      c = bd();
      b = new cd();
      c = c.g.n_ei;
      c = Array.isArray(c) ? c : "string" === typeof c ? c.split(",").map(Number) : [];
      b = Lb(b, 1, c, kb);
      null == a.g && (a.g = new dd());
      C(a.g, 10, b);
    },
    nd = function (a) {
      var b = void 0 === b ? hd : b;
      var c = id(a),
        d = function (f) {
          f = t(f);
          f.next();
          f = jd(f);
          return b(c, f);
        },
        e = function (f) {
          var g = t(f);
          f = g.next().value;
          g = jd(g);
          return a.apply(f, g);
        };
      return function () {
        var f = kd.apply(0, arguments),
          g = this || n,
          h = ld.get(g);
        h || ((h = {}), ld.set(g, h));
        return Tb(h, [this].concat(md(f)), e, d);
      };
    },
    od = function (a, b, c) {
      fetch(a.url, { method: a.requestType, headers: a.requestHeaders, body: a.body, mode: "cors", credentials: "include" }).then(
        function (d) {
          d.ok
            ? d.text().then(function (e) {
                b(e);
              })
            : c(d.status);
        }
      );
    },
    ud = function (a, b) {
      b = a(b || pd, void 0);
      a = qd();
      b && b.g ? (a = b.g()) : ((a = rd(a.g, "DIV")), (b = sd(b)), td(a, b));
      1 == a.childNodes.length && ((b = a.firstChild), 1 == b.nodeType && (a = b));
      return a;
    },
    sd = function (a) {
      return vd(a) ? (a.Ce && ((a = a.Ce()), a instanceof xd) ? a : wd("zSoyz")) : wd(String(a));
    },
    Cd = function (a) {
      var b = [];
      a = yd(a, function (f) {
        return Math.min(Math.max(f, 0.2), 5);
      });
      var c = 0,
        d = a.length % 3;
      if (d) {
        var e = zd(0, d, a);
        b.push.apply(b, Ad(e, c, d, 0, a));
        c += e;
      }
      for (; d < a.length; d += 3) 0 < d && (c += 0.6), (e = zd(d, 3, a)), b.push.apply(b, Ad(e, c, 3, d, a)), (c += e);
      Bd(b, function (f) {
        f.top *= 100 / c;
        f.height *= 100 / c;
      });
      return { Cf: b, ef: c };
    },
    zd = function (a, b, c) {
      for (var d = 0, e = 0; e < b; e++) d += c[a + e];
      return (100 - 0.6 * (b - 1)) / d;
    },
    Ad = function (a, b, c, d, e) {
      for (var f = [], g = 0, h = 0; h < c; h++) {
        var l = a * e[d + h];
        f.push(new Dd(g, b, l, a));
        g += l + 0.6;
      }
      return f;
    },
    Fd = function (a, b) {
      if (b instanceof Ac) b = b instanceof Ac && b.constructor === Ac ? b.g : "type_error:SafeUrl";
      else {
        b: if (Ed) {
          try {
            var c = new URL(b);
          } catch (d) {
            c = "https:";
            break b;
          }
          c = c.protocol;
        } else
          c: {
            c = document.createElement("a");
            try {
              c.href = b;
            } catch (d) {
              c = void 0;
              break c;
            }
            c = c.protocol;
            c = ":" === c || "" === c ? "https:" : c;
          }
        b = "javascript:" !== c ? b : void 0;
      }
      void 0 !== b && a.open(b, void 0, void 0);
    },
    Gd = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    Hd =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    Id = function (a) {
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
      throw Error("a");
    },
    Jd = Id(this),
    D = function (a, b) {
      if (b)
        a: {
          var c = Jd;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && null != b && Hd(c, a, { configurable: !0, writable: !0, value: b });
        }
    };
  D("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.g = f;
      Hd(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.g;
    };
    var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e) throw new TypeError("b");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  D("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("c");
    for (
      var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = Jd[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        Hd(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return Kd(Gd(this));
          }
        });
    }
    return a;
  });
  var Kd = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    Ld = function (a) {
      return (a.raw = a);
    },
    t = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: Gd(a) };
      throw Error("d`" + String(a));
    },
    jd = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    md = function (a) {
      return a instanceof Array ? a : jd(t(a));
    },
    Md = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    Nd =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) Md(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  D("Object.assign", function (a) {
    return a || Nd;
  });
  var Od =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    Pd;
  if ("function" == typeof Object.setPrototypeOf) Pd = Object.setPrototypeOf;
  else {
    var Qd;
    a: {
      var Rd = { a: !0 },
        Sd = {};
      try {
        Sd.__proto__ = Rd;
        Qd = Sd.a;
        break a;
      } catch (a) {}
      Qd = !1;
    }
    Pd = Qd
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError("e`" + a);
          return a;
        }
      : null;
  }
  var Td = Pd,
    E = function (a, b) {
      a.prototype = Od(b.prototype);
      a.prototype.constructor = a;
      if (Td) Td(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.O = b.prototype;
    },
    kd = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b;
    };
  D("Promise", function (a) {
    function b() {
      this.g = null;
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function (h) {
            h(g);
          });
    }
    if (a) return a;
    b.prototype.h = function (g) {
      if (null == this.g) {
        this.g = [];
        var h = this;
        this.i(function () {
          h.l();
        });
      }
      this.g.push(g);
    };
    var d = Jd.setTimeout;
    b.prototype.i = function (g) {
      d(g, 0);
    };
    b.prototype.l = function () {
      for (; this.g && this.g.length; ) {
        var g = this.g;
        this.g = [];
        for (var h = 0; h < g.length; ++h) {
          var l = g[h];
          g[h] = null;
          try {
            l();
          } catch (m) {
            this.j(m);
          }
        }
      }
      this.g = null;
    };
    b.prototype.j = function (g) {
      this.i(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.g = 0;
      this.i = void 0;
      this.h = [];
      this.s = !1;
      var h = this.j();
      try {
        g(h.resolve, h.reject);
      } catch (l) {
        h.reject(l);
      }
    };
    e.prototype.j = function () {
      function g(m) {
        return function (p) {
          l || ((l = !0), m.call(h, p));
        };
      }
      var h = this,
        l = !1;
      return { resolve: g(this.D), reject: g(this.l) };
    };
    e.prototype.D = function (g) {
      if (g === this) this.l(new TypeError("f"));
      else if (g instanceof e) this.H(g);
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
        h ? this.B(g) : this.o(g);
      }
    };
    e.prototype.B = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (l) {
        this.l(l);
        return;
      }
      "function" == typeof h ? this.G(h, g) : this.o(g);
    };
    e.prototype.l = function (g) {
      this.u(2, g);
    };
    e.prototype.o = function (g) {
      this.u(1, g);
    };
    e.prototype.u = function (g, h) {
      if (0 != this.g) throw Error("g`" + g + "`" + h + "`" + this.g);
      this.g = g;
      this.i = h;
      2 === this.g && this.F();
      this.v();
    };
    e.prototype.F = function () {
      var g = this;
      d(function () {
        if (g.A()) {
          var h = Jd.console;
          "undefined" !== typeof h && h.error(g.i);
        }
      }, 1);
    };
    e.prototype.A = function () {
      if (this.s) return !1;
      var g = Jd.CustomEvent,
        h = Jd.Event,
        l = Jd.dispatchEvent;
      if ("undefined" === typeof l) return !0;
      "function" === typeof g
        ? (g = new g("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof h
        ? (g = new h("unhandledrejection", { cancelable: !0 }))
        : ((g = Jd.document.createEvent("CustomEvent")), g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.i;
      return l(g);
    };
    e.prototype.v = function () {
      if (null != this.h) {
        for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
        this.h = null;
      }
    };
    var f = new b();
    e.prototype.H = function (g) {
      var h = this.j();
      g.ic(h.resolve, h.reject);
    };
    e.prototype.G = function (g, h) {
      var l = this.j();
      try {
        g.call(h, l.resolve, l.reject);
      } catch (m) {
        l.reject(m);
      }
    };
    e.prototype.then = function (g, h) {
      function l(w, r) {
        return "function" == typeof w
          ? function (A) {
              try {
                m(w(A));
              } catch (J) {
                p(J);
              }
            }
          : r;
      }
      var m,
        p,
        u = new e(function (w, r) {
          m = w;
          p = r;
        });
      this.ic(l(g, m), l(h, p));
      return u;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.ic = function (g, h) {
      function l() {
        switch (m.g) {
          case 1:
            g(m.i);
            break;
          case 2:
            h(m.i);
            break;
          default:
            throw Error("h`" + m.g);
        }
      }
      var m = this;
      null == this.h ? f.h(l) : this.h.push(l);
      this.s = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, l) {
        l(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, l) {
        for (var m = t(g), p = m.next(); !p.done; p = m.next()) c(p.value).ic(h, l);
      });
    };
    e.all = function (g) {
      var h = t(g),
        l = h.next();
      return l.done
        ? c([])
        : new e(function (m, p) {
            function u(A) {
              return function (J) {
                w[A] = J;
                r--;
                0 == r && m(w);
              };
            }
            var w = [],
              r = 0;
            do w.push(void 0), r++, c(l.value).ic(u(w.length - 1), p), (l = h.next());
            while (!l.done);
          });
    };
    return e;
  });
  var Ud = function (a, b, c) {
    if (null == a) throw new TypeError("i`" + c);
    if (b instanceof RegExp) throw new TypeError("j`" + c);
    return a + "";
  };
  D("String.prototype.startsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Ud(this, b, "startsWith"),
            e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
          return g >= f;
        };
  });
  D("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  D("WeakMap", function (a) {
    function b() {}
    function c(l) {
      var m = typeof l;
      return ("object" === m && null !== l) || "function" === m;
    }
    function d(l) {
      if (!Md(l, f)) {
        var m = new b();
        Hd(l, f, { value: m });
      }
    }
    function e(l) {
      var m = Object[l];
      m &&
        (Object[l] = function (p) {
          if (p instanceof b) return p;
          Object.isExtensible(p) && d(p);
          return m(p);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var l = Object.seal({}),
            m = Object.seal({}),
            p = new a([
              [l, 2],
              [m, 3]
            ]);
          if (2 != p.get(l) || 3 != p.get(m)) return !1;
          p.delete(l);
          p.set(m, 4);
          return !p.has(l) && 4 == p.get(m);
        } catch (u) {
          return !1;
        }
      })()
    )
      return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
      h = function (l) {
        this.g = (g += Math.random() + 1).toString();
        if (l) {
          l = t(l);
          for (var m; !(m = l.next()).done; ) (m = m.value), this.set(m[0], m[1]);
        }
      };
    h.prototype.set = function (l, m) {
      if (!c(l)) throw Error("k");
      d(l);
      if (!Md(l, f)) throw Error("l`" + l);
      l[f][this.g] = m;
      return this;
    };
    h.prototype.get = function (l) {
      return c(l) && Md(l, f) ? l[f][this.g] : void 0;
    };
    h.prototype.has = function (l) {
      return c(l) && Md(l, f) && Md(l[f], this.g);
    };
    h.prototype.delete = function (l) {
      return c(l) && Md(l, f) && Md(l[f], this.g) ? delete l[f][this.g] : !1;
    };
    return h;
  });
  D("Map", function (a) {
    if (
      (function () {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
        try {
          var h = Object.seal({ x: 4 }),
            l = new a(t([[h, "s"]]));
          if ("s" != l.get(h) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size) return !1;
          var m = l.entries(),
            p = m.next();
          if (p.done || p.value[0] != h || "s" != p.value[1]) return !1;
          p = m.next();
          return p.done || 4 != p.value[0].x || "t" != p.value[1] || !m.next().done ? !1 : !0;
        } catch (u) {
          return !1;
        }
      })()
    )
      return a;
    var b = new WeakMap(),
      c = function (h) {
        this[0] = {};
        this[1] = f();
        this.size = 0;
        if (h) {
          h = t(h);
          for (var l; !(l = h.next()).done; ) (l = l.value), this.set(l[0], l[1]);
        }
      };
    c.prototype.set = function (h, l) {
      h = 0 === h ? 0 : h;
      var m = d(this, h);
      m.list || (m.list = this[0][m.id] = []);
      m.entry
        ? (m.entry.value = l)
        : ((m.entry = { next: this[1], previous: this[1].previous, head: this[1], key: h, value: l }),
          m.list.push(m.entry),
          (this[1].previous.next = m.entry),
          (this[1].previous = m.entry),
          this.size++);
      return this;
    };
    c.prototype.delete = function (h) {
      h = d(this, h);
      return h.entry && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this[0][h.id],
          (h.entry.previous.next = h.entry.next),
          (h.entry.next.previous = h.entry.previous),
          (h.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].previous = f();
      this.size = 0;
    };
    c.prototype.has = function (h) {
      return !!d(this, h).entry;
    };
    c.prototype.get = function (h) {
      return (h = d(this, h).entry) && h.value;
    };
    c.prototype.entries = function () {
      return e(this, function (h) {
        return [h.key, h.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (h) {
        return h.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (h) {
        return h.value;
      });
    };
    c.prototype.forEach = function (h, l) {
      for (var m = this.entries(), p; !(p = m.next()).done; ) (p = p.value), h.call(l, p[1], p[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (h, l) {
        var m = l && typeof l;
        "object" == m || "function" == m ? (b.has(l) ? (m = b.get(l)) : ((m = "" + ++g), b.set(l, m))) : (m = "p_" + l);
        var p = h[0][m];
        if (p && Md(h[0], m))
          for (h = 0; h < p.length; h++) {
            var u = p[h];
            if ((l !== l && u.key !== u.key) || l === u.key) return { id: m, list: p, index: h, entry: u };
          }
        return { id: m, list: p, index: -1, entry: void 0 };
      },
      e = function (h, l) {
        var m = h[1];
        return Kd(function () {
          if (m) {
            for (; m.head != h[1]; ) m = m.previous;
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
      g = 0;
    return c;
  });
  D("Math.trunc", function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
          var c = Math.floor(Math.abs(b));
          return 0 > b ? -c : c;
        };
  });
  D("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) Md(b, d) && c.push(b[d]);
          return c;
        };
  });
  D("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  D("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  D("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          return -1 !== Ud(this, b, "includes").indexOf(b, c || 0);
        };
  });
  D("Set", function (a) {
    if (
      (function () {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(t([c]));
          if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
        } catch (g) {
          return !1;
        }
      })()
    )
      return a;
    var b = function (c) {
      this.g = new Map();
      if (c) {
        c = t(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.g.size;
    };
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.g.set(c, c);
      this.size = this.g.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.g.delete(c);
      this.size = this.g.size;
      return c;
    };
    b.prototype.clear = function () {
      this.g.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.g.has(c);
    };
    b.prototype.entries = function () {
      return this.g.entries();
    };
    b.prototype.values = function () {
      return this.g.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.g.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  D("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  D("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  D("Number.isInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isFinite(b) ? b === Math.floor(b) : !1;
        };
  });
  D("Number.isSafeInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
        };
  });
  var Vd = function (a, b) {
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
  D("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return Vd(this, function (b, c) {
            return [b, c];
          });
        };
  });
  D("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return Vd(this, function (b) {
            return b;
          });
        };
  });
  D("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return Vd(this, function (b, c) {
            return c;
          });
        };
  });
  D("Array.from", function (a) {
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
  });
  D("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) Md(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  var Wd = Wd || {},
    n = this || self,
    Xd = function (a, b) {
      a: {
        var c = ["WIZ_global_data", "oxN3nb"];
        for (var d = n, e = 0; e < c.length; e++)
          if (((d = d[c[e]]), null == d)) {
            c = null;
            break a;
          }
        c = d;
      }
      a = c && c[a];
      return null != a ? a : b;
    },
    Yd = n._F_toggles || [],
    Zd = function (a) {
      a.nb = void 0;
      a.L = function () {
        return a.nb ? a.nb : (a.nb = new a());
      };
    },
    $d = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    },
    Ba = function (a) {
      var b = $d(a);
      return "array" == b || ("object" == b && "number" == typeof a.length);
    },
    vd = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    id = function (a) {
      return (Object.prototype.hasOwnProperty.call(a, ae) && a[ae]) || (a[ae] = ++be);
    },
    ae = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    be = 0,
    ce = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    de = function (a, b, c) {
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
    },
    F = function (a, b, c) {
      F = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ce : de;
      return F.apply(null, arguments);
    },
    ee = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    G = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.O = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Dj = function (d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    fe = function (a) {
      return a;
    };
  var ge = { Cd: 0, vg: 1 };
  G(aa, Error);
  aa.prototype.name = "CustomError";
  var he;
  var ie = function (a) {
      return /^[\s\xa0]*$/.test(a);
    },
    je = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    ke = function (a, b) {
      a = String(a).toLowerCase();
      b = String(b).toLowerCase();
      return a < b ? -1 : a == b ? 0 : 1;
    },
    le = /&/g,
    me = /</g,
    ne = />/g,
    oe = /"/g,
    pe = /'/g,
    qe = /\x00/g,
    re = /[\x00&<>"']/,
    te = function (a, b) {
      var c = 0;
      a = je(String(a)).split(".");
      b = je(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f[0].length && 0 == g[0].length) break;
          c =
            se(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) ||
            se(0 == f[2].length, 0 == g[2].length) ||
            se(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    },
    se = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var ue = !!(Yd[0] & 128),
    ve = !!(Yd[0] & 4),
    we = !!(Yd[0] & 256),
    xe = !!(Yd[0] & 2);
  var fa = ue ? we : Xd(610401301, !1),
    ye = ue ? ve || !xe : Xd(572417392, !0);
  var ha,
    ze = n.navigator;
  ha = ze ? ze.userAgentData || null : null;
  var ua = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Ae = Array.prototype.lastIndexOf
      ? function (a, b) {
          return Array.prototype.lastIndexOf.call(a, b, a.length - 1);
        }
      : function (a, b) {
          var c = a.length - 1;
          0 > c && (c = Math.max(0, a.length + c));
          if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
          for (; 0 <= c; c--) if (c in a && a[c] === b) return c;
          return -1;
        },
    Bd = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
        },
    Be = Array.prototype.filter
      ? function (a, b) {
          return Array.prototype.filter.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
              var h = f[g];
              b.call(void 0, h, g, a) && (d[e++] = h);
            }
          return d;
        },
    yd = Array.prototype.map
      ? function (a, b) {
          return Array.prototype.map.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
          return d;
        },
    Ce = Array.prototype.some
      ? function (a, b, c) {
          return Array.prototype.some.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
          return !1;
        },
    De = Array.prototype.every
      ? function (a, b, c) {
          return Array.prototype.every.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a)) return !1;
          return !0;
        };
  var Ee = function (a) {
    Ee[" "](a);
    return a;
  };
  Ee[" "] = function () {};
  var Fe = function (a, b) {
      try {
        return Ee(a[b]), !0;
      } catch (c) {}
      return !1;
    },
    Tb = function (a, b, c, d) {
      d = d ? d(b) : b;
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : (a[d] = c(b));
    };
  var Ge = la(),
    H = ma(),
    He = q("Edge"),
    Ie = He || H,
    Je = q("Gecko") && !(-1 != ea().toLowerCase().indexOf("webkit") && !q("Edge")) && !(q("Trident") || q("MSIE")) && !q("Edge"),
    Le = -1 != ea().toLowerCase().indexOf("webkit") && !q("Edge"),
    Me = sa(),
    Ne = pa() ? "Windows" === ha.platform : q("Windows"),
    Oe = pa() ? "Android" === ha.platform : q("Android"),
    Pe = qa(),
    Qe = q("iPad"),
    Re = q("iPod"),
    Se = ra(),
    Te = function () {
      var a = n.document;
      return a ? a.documentMode : void 0;
    },
    Ue;
  a: {
    var Ve = "",
      We = (function () {
        var a = ea();
        if (Je) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (He) return /Edge\/([\d\.]+)/.exec(a);
        if (H) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Le) return /WebKit\/(\S+)/.exec(a);
        if (Ge) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    We && (Ve = We ? We[1] : "");
    if (H) {
      var Xe = Te();
      if (null != Xe && Xe > parseFloat(Ve)) {
        Ue = String(Xe);
        break a;
      }
    }
    Ue = Ve;
  }
  var Ye = Ue,
    Ze;
  if (n.document && H) {
    var $e = Te();
    Ze = $e ? $e : parseInt(Ye, 10) || void 0;
  } else Ze = void 0;
  var af = Ze;
  var bf = na(),
    cf = qa() || q("iPod"),
    df = q("iPad"),
    ef = q("Android") && !(oa() || na() || la() || q("Silk")),
    ff = oa(),
    gf =
      q("Safari") &&
      !(
        oa() ||
        (ja() ? 0 : q("Coast")) ||
        la() ||
        (ja() ? 0 : q("Edge")) ||
        (ja() ? ia("Microsoft Edge") : q("Edg/")) ||
        (ja() ? ia("Opera") : q("OPR")) ||
        na() ||
        q("Silk") ||
        q("Android")
      ) &&
      !ra();
  var hf = {},
    jf = null,
    kf = Je || Le || (!gf && !H && "function" == typeof n.atob),
    Ja = function (a) {
      var b;
      void 0 === b && (b = 0);
      lf();
      b = hf[b];
      for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
        var g = a[e],
          h = a[e + 1],
          l = a[e + 2],
          m = b[g >> 2];
        g = b[((g & 3) << 4) | (h >> 4)];
        h = b[((h & 15) << 2) | (l >> 6)];
        l = b[l & 63];
        c[f++] = m + g + h + l;
      }
      m = 0;
      l = d;
      switch (a.length - e) {
        case 2:
          (m = a[e + 1]), (l = b[(m & 15) << 2] || d);
        case 1:
          (a = a[e]), (c[f] = b[a >> 2] + b[((a & 3) << 4) | (m >> 4)] + l + d);
      }
      return c.join("");
    },
    pc = function (a) {
      var b = [];
      mf(a, function (c) {
        b.push(c);
      });
      return b;
    },
    mf = function (a, b) {
      function c(l) {
        for (; d < a.length; ) {
          var m = a.charAt(d++),
            p = jf[m];
          if (null != p) return p;
          if (!ie(m)) throw Error("o`" + m);
        }
        return l;
      }
      lf();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
        if (64 === h && -1 === e) break;
        b((e << 2) | (f >> 4));
        64 != g && (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
      }
    },
    lf = function () {
      if (!jf) {
        jf = {};
        for (
          var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0;
          5 > c;
          c++
        ) {
          var d = a.concat(b[c].split(""));
          hf[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === jf[f] && (jf[f] = e);
          }
        }
      }
    };
  var yb = "undefined" !== typeof Uint8Array,
    Ia = !H && "function" === typeof btoa,
    Mb = {};
  var Nb,
    zb = function (a, b) {
      if (b !== Mb) throw Error("p");
      this.ea = a;
      if (null != a && 0 === a.length) throw Error("q");
    };
  zb.prototype.ha = function () {
    return null == this.ea;
  };
  var Rb = !ye,
    Qb = !ye;
  var Na = 0,
    Oa = 0;
  var nf;
  nf = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
  var Ya = nf
      ? function (a, b) {
          a[nf] |= b;
        }
      : function (a, b) {
          void 0 !== a.Ya ? (a.Ya |= b) : Object.defineProperties(a, { Ya: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        },
    Ua = nf
      ? function (a) {
          return a[nf] | 0;
        }
      : function (a) {
          return a.Ya | 0;
        },
    Fb = nf
      ? function (a) {
          return a[nf];
        }
      : function (a) {
          return a.Ya;
        },
    Va = nf
      ? function (a, b) {
          a[nf] = b;
        }
      : function (a, b) {
          void 0 !== a.Ya ? (a.Ya = b) : Object.defineProperties(a, { Ya: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        };
  var rb = {},
    cb = {},
    of,
    xb = !ye,
    Pb,
    pf = [];
  Va(pf, 55);
  Pb = Object.freeze(pf);
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var ib = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  var tb;
  var rf = function (a, b) {
      a = a.J;
      return qf(a, Fb(a), b);
    },
    qf = function (a, b, c, d) {
      if (-1 === c) return null;
      if (c >= bb(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else {
        var e = a.length;
        if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
        b = c + (+!!(b & 512) - 1);
        if (b < e) return a[b];
      }
    },
    sf = function (a, b, c) {
      var d = a.J,
        e = Fb(d);
      gb(e);
      Ib(d, e, b, c);
      return a;
    },
    uf = function (a, b, c) {
      return void 0 !== tf(a, b, c, !1);
    },
    vf = function (a, b) {
      a = rf(a, b);
      return null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0;
    },
    tf = function (a, b, c, d) {
      a = a.J;
      var e = Fb(a),
        f = qf(a, e, c, d);
      b = sb(f, b, e);
      b !== f && null != b && Ib(a, e, c, b, d);
      return b;
    },
    wf = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      b = tf(a, b, c, d);
      if (null == b) return b;
      a = a.J;
      var e = Fb(a);
      if (!(e & 2)) {
        var f = Hb(b);
        f !== b && ((b = f), Ib(a, e, c, b, d));
      }
      return b;
    },
    C = function (a, b, c) {
      null == c && (c = void 0);
      return sf(a, b, c);
    },
    xf = function (a, b, c) {
      var d = a.J,
        e = Fb(d);
      gb(e);
      if (null == c) return Ib(d, e, b), a;
      for (var f = Ua(c), g = f, h = !!(2 & f) || !!(2048 & f), l = h || Object.isFrozen(c), m = !0, p = !0, u = 0; u < c.length; u++) {
        var w = c[u];
        h || ((w = !!(Ua(w.J) & 2)), m && (m = !w), p && (p = w));
      }
      h || ((f = Xa(f, 5, !0)), (f = Xa(f, 8, m)), (f = Xa(f, 16, p)));
      l && f !== g && ((c = Ta(c)), (g = 0), (f = Kb(f, e, !0)));
      f !== g && Va(c, f);
      Ib(d, e, b, c);
      return a;
    },
    yf = function (a, b) {
      a = rf(a, b);
      var c;
      null == a ? (c = a) : jb(a) ? ("number" === typeof a ? (c = ob(a)) : (c = mb(a))) : (c = void 0);
      return c;
    },
    zf = function (a) {
      a = rf(a, 1);
      var b = void 0 === b ? !1 : b;
      b = null == a ? a : jb(a) ? ("string" === typeof a ? mb(a) : b ? nb(a) : ob(a)) : void 0;
      return b;
    },
    Af = function (a, b) {
      a = rf(a, b);
      return null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
    },
    Bf = function (a, b, c) {
      if (null != c && "boolean" !== typeof c) throw Error("r`" + $d(c) + "`" + c);
      sf(a, b, c);
    },
    Xc = function (a, b, c) {
      return sf(a, b, null == c ? c : kb(c));
    },
    B = function (a, b, c) {
      return sf(a, b, pb(c));
    },
    Cf = function (a, b, c) {
      if (null != c && "string" !== typeof c) throw Error();
      return sf(a, b, c);
    },
    Yc = function (a, b, c) {
      if (null != c) {
        if (!Number.isFinite(c)) throw hb("enum");
        c |= 0;
      }
      return sf(a, b, c);
    };
  var K = function (a, b, c) {
    this.J = v(a, b, c);
  };
  K.prototype.toJSON = function () {
    if (of) var a = Sb(this, this.J, !1);
    else (a = Bb(this.J, Db, void 0, void 0, !1, !1)), (a = Sb(this, a, !0));
    return a;
  };
  var Df = function (a) {
    of = !0;
    try {
      return JSON.stringify(a.toJSON(), wb);
    } finally {
      of = !1;
    }
  };
  K.prototype.clone = function () {
    var a = this.J;
    return ub(this.constructor, Gb(a, Fb(a), !1));
  };
  K.prototype.ud = rb;
  K.prototype.toString = function () {
    return Sb(this, this.J, !1).toString();
  };
  var Ef = function (a) {
    this.J = v(a);
  };
  E(Ef, K);
  Ef.Ka = [2];
  var Ff = function (a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.startsWith("blob:") && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
      c = b.indexOf("/");
    -1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("t`" + a);
    if (
      "http" !== c &&
      "https" !== c &&
      "chrome-extension" !== c &&
      "moz-extension" !== c &&
      "file" !== c &&
      "android-app" !== c &&
      "chrome-search" !== c &&
      "chrome-untrusted" !== c &&
      "chrome" !== c &&
      "app" !== c &&
      "devtools" !== c
    )
      throw Error("u`" + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
      var e = b.substring(d + 1);
      b = b.substring(0, d);
      if (("http" === c && "80" !== e) || ("https" === c && "443" !== e)) a = ":" + e;
    }
    return c + "://" + b + a;
  };
  var Gf = function () {};
  Gf.prototype.V = function (a) {
    return Object.is(this, a) || (null == this && null == a);
  };
  Gf.prototype.j = function () {
    return this.i || (Object.defineProperties(this, { i: { value: (Hf = (Hf + 1) | 0), enumerable: !1 } }), this.i);
  };
  Gf.prototype.toString = function () {
    var a = If(Jf(Kf(this.constructor))) + "@";
    var b = (this.j() >>> 0).toString(16);
    return a + If(b);
  };
  Gf.prototype.Sa = ["java.lang.Object", 0];
  var Vb = function (a, b) {
      this.g = a | 0;
      this.h = b | 0;
    },
    Lf = function (a) {
      return 4294967296 * a.h + (a.g >>> 0);
    };
  Vb.prototype.toString = function (a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error("v`" + a);
    var b = this.h >> 21;
    if (0 == b || (-1 == b && (0 != this.g || -2097152 != this.h))) return (b = Lf(this)), 10 == a ? "" + b : b.toString(a);
    b = 14 - (a >> 2);
    var c = Math.pow(a, b),
      d = Mf(c, c / 4294967296);
    c = Nf(this, d);
    d = Math.abs(Lf(this.add(Of(Pf(c, d)))));
    var e = 10 == a ? "" + d : d.toString(a);
    e.length < b && (e = "0000000000000".slice(e.length - b) + e);
    d = Lf(c);
    return (10 == a ? d : d.toString(a)) + e;
  };
  var Qf = function (a) {
    return 0 == a.g && 0 == a.h;
  };
  Vb.prototype.j = function () {
    return this.g ^ this.h;
  };
  Vb.prototype.V = function (a) {
    return this.g == a.g && this.h == a.h;
  };
  var Rf = function (a, b) {
      return a.h == b.h ? (a.g == b.g ? 0 : a.g >>> 0 > b.g >>> 0 ? 1 : -1) : a.h > b.h ? 1 : -1;
    },
    Of = function (a) {
      var b = (~a.g + 1) | 0;
      return Mf(b, (~a.h + !b) | 0);
    };
  Vb.prototype.add = function (a) {
    var b = this.h >>> 16,
      c = this.h & 65535,
      d = this.g >>> 16,
      e = a.h >>> 16,
      f = a.h & 65535,
      g = a.g >>> 16;
    a = (this.g & 65535) + (a.g & 65535);
    g = (a >>> 16) + (d + g);
    d = g >>> 16;
    d += c + f;
    b = ((d >>> 16) + (b + e)) & 65535;
    return Mf(((g & 65535) << 16) | (a & 65535), (b << 16) | (d & 65535));
  };
  var Pf = function (a, b) {
      if (Qf(a)) return a;
      if (Qf(b)) return b;
      var c = a.h >>> 16,
        d = a.h & 65535,
        e = a.g >>> 16;
      a = a.g & 65535;
      var f = b.h >>> 16,
        g = b.h & 65535,
        h = b.g >>> 16;
      b = b.g & 65535;
      var l = a * b;
      var m = (l >>> 16) + e * b;
      var p = m >>> 16;
      m = (m & 65535) + a * h;
      p += m >>> 16;
      p += d * b;
      var u = p >>> 16;
      p = (p & 65535) + e * h;
      u += p >>> 16;
      p = (p & 65535) + a * g;
      u = (u + (p >>> 16) + (c * b + d * h + e * g + a * f)) & 65535;
      return Mf(((m & 65535) << 16) | (l & 65535), (u << 16) | (p & 65535));
    },
    Nf = function (a, b) {
      if (Qf(b)) throw Error("w");
      if (0 > a.h) {
        if (a.V(Sf)) {
          if (b.V(Tf) || b.V(Uf)) return Sf;
          if (b.V(Sf)) return Tf;
          var c = 1;
          if (0 == c) c = a;
          else {
            var d = a.h;
            c = 32 > c ? Mf((a.g >>> c) | (d << (32 - c)), d >> c) : Mf(d >> (c - 32), 0 <= d ? 0 : -1);
          }
          c = Vf(Nf(c, b), 1);
          if (c.V(Wf)) return 0 > b.h ? Tf : Uf;
          a = a.add(Of(Pf(b, c)));
          return c.add(Nf(a, b));
        }
        return 0 > b.h ? Nf(Of(a), Of(b)) : Of(Nf(Of(a), b));
      }
      if (Qf(a)) return Wf;
      if (0 > b.h) return b.V(Sf) ? Wf : Of(Nf(a, Of(b)));
      for (d = Wf; 0 <= Rf(a, b); ) {
        c = Math.max(1, Math.floor(Lf(a) / Lf(b)));
        var e = Math.ceil(Math.log(c) / Math.LN2);
        e = 48 >= e ? 1 : Math.pow(2, e - 48);
        for (var f = Xf(c), g = Pf(f, b); 0 > g.h || 0 < Rf(g, a); ) (c -= e), (f = Xf(c)), (g = Pf(f, b));
        Qf(f) && (f = Tf);
        d = d.add(f);
        a = a.add(Of(g));
      }
      return d;
    };
  Vb.prototype.and = function (a) {
    return Mf(this.g & a.g, this.h & a.h);
  };
  Vb.prototype.or = function (a) {
    return Mf(this.g | a.g, this.h | a.h);
  };
  Vb.prototype.xor = function (a) {
    return Mf(this.g ^ a.g, this.h ^ a.h);
  };
  var Vf = function (a, b) {
      b &= 63;
      if (0 == b) return a;
      var c = a.g;
      return 32 > b ? Mf(c << b, (a.h << b) | (c >>> (32 - b))) : Mf(0, c << (b - 32));
    },
    Yf = function (a, b) {
      b &= 63;
      if (0 == b) return a;
      var c = a.h;
      return 32 > b ? Mf((a.g >>> b) | (c << (32 - b)), c >>> b) : 32 == b ? Mf(c, 0) : Mf(c >>> (b - 32), 0);
    },
    Zf = function (a) {
      a |= 0;
      return -128 <= a && 128 > a ? Wb(a) : new Vb(a, 0 > a ? -1 : 0);
    },
    Xf = function (a) {
      return 0 < a
        ? 0x7fffffffffffffff <= a
          ? $f
          : new Vb(a, a / 4294967296)
        : 0 > a
        ? -0x7fffffffffffffff >= a
          ? Sf
          : Of(new Vb(-a, -a / 4294967296))
        : Wf;
    },
    Mf = function (a, b) {
      return new Vb(a, b);
    },
    ag = function (a, b) {
      if ("-" == a.charAt(0)) return Of(ag(a.substring(1), b));
      var c = parseInt(a, b || 10);
      if (9007199254740991 >= c) return new Vb(c % 4294967296 | 0, (c / 4294967296) | 0);
      if (0 == a.length) throw Error("x");
      if (0 <= a.indexOf("-")) throw Error("y`" + a);
      b = b || 10;
      if (2 > b || 36 < b) throw Error("v`" + b);
      c = Xf(Math.pow(b, 8));
      for (var d = Wf, e = 0; e < a.length; e += 8) {
        var f = Math.min(8, a.length - e),
          g = parseInt(a.substring(e, e + f), b);
        8 > f ? (d = Pf(d, Xf(Math.pow(b, f))).add(Xf(g))) : ((d = Pf(d, c)), (d = d.add(Xf(g))));
      }
      return d;
    },
    Ub = {},
    Wf = Mf(0, 0),
    Tf = Mf(1, 0),
    Uf = Mf(-1, -1),
    $f = Mf(4294967295, 2147483647),
    Sf = Mf(0, 2147483648);
  var Hf = 0;
  var If = function (a) {
    return null == a ? "null" : a.toString();
  };
  var bg = function (a, b) {
    this.g = a;
    this.h = b;
  };
  E(bg, Gf);
  var Jf = function (a) {
    if (0 != a.h) {
      var b = 3 == a.g.prototype.Sa[1] ? a.g.prototype.Sa[2] : "L" + If(a.g.prototype.Sa[0]) + ";";
      a = a.h;
      for (var c = "", d = 0; d < a; d = (d + 1) | 0) c = If(c) + "[";
      return If(c) + If(b);
    }
    return a.g.prototype.Sa[0];
  };
  bg.prototype.toString = function () {
    return (
      String(0 == this.h && 1 == this.g.prototype.Sa[1] ? "interface " : 0 == this.h && 3 == this.g.prototype.Sa[1] ? "" : "class ") +
      If(Jf(this))
    );
  };
  bg.prototype.Sa = ["java.lang.Class", 0];
  var Kf = function (a) {
    return Tb(a.prototype, "$$class/0", function () {
      return new bg(a, 0);
    });
  };
  var dg = function () {
    new cg();
  };
  E(dg, Gf);
  dg.prototype.Sa = ["com.google.apps.docs.xplat.diagnostics.impressions.DocsAppLoadInvariantsBuilder", 0];
  var eg = function (a) {
    this.J = v(a);
  };
  E(eg, K);
  var cg = function (a) {
    this.J = v(a);
  };
  E(cg, K);
  cg.prototype.getNetworkDetails = function () {
    return wf(this, eg, 72);
  };
  cg.Ka = [90, 91, 125, 93, 103, 155, 123, 139];
  var fg = function (a) {
    this.J = v(a);
  };
  E(fg, K);
  var Wc = function (a) {
    this.J = v(a);
  };
  E(Wc, K);
  var gg = function (a) {
    this.J = v(a);
  };
  E(gg, K);
  gg.Ka = [3, 42];
  var hg = {
    Mf: "n_amt",
    Of: "n_afoiu",
    Rf: "n_age",
    Sf: "n_k",
    Tf: "n_ars",
    Uf: "n_s",
    Vf: "n_ss",
    Wf: "n_ats",
    Xf: "n_atas",
    Zf: "n_bi",
    ag: "n_bl",
    dg: "n_cajct",
    eg: "n_cajstm",
    ig: "n_ccd",
    jg: "n_cc",
    kg: "n_c",
    lg: "n_cp",
    mg: "n_csbs",
    xg: "n_dt",
    Ag: "n_dlis",
    Bg: "n_deau",
    Cg: "n_detl",
    Eg: "n_eau",
    Fg: "n_ecs",
    Gg: "n_ecmv3m",
    Hg: "n_ecil",
    Ig: "n_ecpde",
    Jg: "n_edmp",
    Kg: "n_edtt",
    Lg: "n_edlh",
    Mg: "n_efab",
    Ng: "n_eh",
    Og: "n_eil",
    Pg: "n_eliw",
    Qg: "n_eml",
    Rg: "n_emv2dm",
    Sg: "n_eod",
    Tg: "n_eoros",
    Ug: "n_ep",
    Vg: "n_eqwv",
    Yg: "n_ei",
    ah: "n_fpae",
    ih: "n_hak",
    ph: "n_imb",
    qh: "n_imp",
    uh: "n_iup",
    th: "n_iltrup",
    vh: "n_j",
    xh: "n_kud",
    Eh: "n_lcu",
    Jh: "n_mpak",
    Kh: "n_mpau",
    Vh: "n_nmri",
    Th: "n_nib",
    Uh: "n_nmb",
    Xh: "n_npd",
    Yh: "n_npv",
    ai: "n_oe",
    ki: "n_pau",
    vi: "n_rs",
    wi: "n_rau",
    xi: "n_ses",
    Fi: "n_scp",
    Li: "n_sit",
    Ni: "n_t",
    Ri: "n_ton",
    Oi: "n_tak",
    Qi: "n_tipe",
    Pi: "n_tbti",
    Si: "n_taau",
    Xi: "n_tcu",
    Yi: "n_tcur",
    gj: "n_tms",
    fj: "n_the",
    lj: "n_ur",
    mj: "n_uptc",
    rh: "n_ugat",
    qj: "n_uo",
    pj: "n_ui",
    nj: "n_ue",
    oj: "n_ugs",
    vj: "n_wfp",
    xj: "n_wcv"
  };
  var jg = function (a, b, c) {
      var d = String(n.location.href);
      return d && a && b ? [b, ig(Ff(d), a, c || null)].join(" ") : null;
    },
    ig = function (a, b, c) {
      var d = [],
        e = [];
      if (1 == (Array.isArray(c) ? 2 : 1))
        return (
          (e = [b, a]),
          Bd(d, function (h) {
            e.push(h);
          }),
          kg(e.join(" "))
        );
      var f = [],
        g = [];
      Bd(c, function (h) {
        g.push(h.key);
        f.push(h.value);
      });
      c = Math.floor(new Date().getTime() / 1e3);
      e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
      Bd(d, function (h) {
        e.push(h);
      });
      a = kg(e.join(" "));
      a = [c, a];
      0 == g.length || a.push(g.join(""));
      return a.join("_");
    },
    kg = function (a) {
      var b = Xb();
      b.update(a);
      return b.ff().toLowerCase();
    };
  var lg = {};
  var mg = function () {},
    ng = function (a) {
      var b = arguments,
        c = b.length;
      return function () {
        for (var d, e = 0; e < c; e++) d = b[e].apply(this, arguments);
        return d;
      };
    };
  var lc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var og,
    pg = function () {
      if (void 0 === og) {
        var a = null,
          b = n.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", { createHTML: fe, createScript: fe, createScriptURL: fe });
          } catch (c) {
            n.console && n.console.error(c.message);
          }
          og = a;
        } else og = a;
      }
      return og;
    };
  var sg = function (a, b) {
    this.g = (a === qg && b) || "";
    this.h = rg;
  };
  sg.prototype.Rb = !0;
  sg.prototype.Pb = function () {
    return this.g;
  };
  sg.prototype.toString = function () {
    return this.g;
  };
  var tg = function (a) {
      return a instanceof sg && a.constructor === sg && a.h === rg ? a.g : "type_error:Const";
    },
    rg = {},
    qg = {};
  var ug = function (a) {
    this.g = a;
  };
  ug.prototype.toString = function () {
    return this.g + "";
  };
  ug.prototype.Rb = !0;
  ug.prototype.Pb = function () {
    return this.g.toString();
  };
  var vg = function (a) {
      return (a instanceof ug && a.constructor === ug ? a.g : "type_error:TrustedResourceUrl").toString();
    },
    wg = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    xg = {},
    yg = function (a) {
      var b = pg();
      a = b ? b.createScriptURL(a) : a;
      return new ug(a, xg);
    },
    zg = function (a, b, c) {
      if (null == c) return b;
      if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
      for (var d in c)
        if (Object.prototype.hasOwnProperty.call(c, d)) {
          var e = c[d];
          e = Array.isArray(e) ? e : [e];
          for (var f = 0; f < e.length; f++) {
            var g = e[f];
            null != g &&
              (b || (b = a), (b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g))));
          }
        }
      return b;
    };
  var Ac = function (a) {
    this.g = a;
  };
  Ac.prototype.toString = function () {
    return this.g.toString();
  };
  Ac.prototype.Rb = !0;
  Ac.prototype.Pb = function () {
    return this.g.toString();
  };
  var Bc = {},
    Cc = new Ac("about:invalid#zClosurez", Bc);
  var Ag = {},
    xd = function (a) {
      this.g = a;
      this.Rb = !0;
    };
  xd.prototype.Pb = function () {
    return this.g.toString();
  };
  xd.prototype.toString = function () {
    return this.g.toString();
  };
  var Bg = function (a) {
      return a instanceof xd && a.constructor === xd ? a.g : "type_error:SafeHtml";
    },
    wd = function (a) {
      a instanceof xd ||
        ((a = "object" == typeof a && a.Rb ? a.Pb() : String(a)),
        re.test(a) &&
          (-1 != a.indexOf("&") && (a = a.replace(le, "&amp;")),
          -1 != a.indexOf("<") && (a = a.replace(me, "&lt;")),
          -1 != a.indexOf(">") && (a = a.replace(ne, "&gt;")),
          -1 != a.indexOf('"') && (a = a.replace(oe, "&quot;")),
          -1 != a.indexOf("'") && (a = a.replace(pe, "&#39;")),
          -1 != a.indexOf("\x00") && (a = a.replace(qe, "&#0;"))),
        (a = Cg(a)));
      return a;
    },
    Cg = function (a) {
      var b = pg();
      a = b ? b.createHTML(a) : a;
      return new xd(a, Ag);
    },
    Dg = new xd((n.trustedTypes && n.trustedTypes.emptyHTML) || "", Ag);
  var Eg = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      b = a.firstChild.firstChild;
      a.innerHTML = Bg(Dg);
      return !b.parentElement;
    }),
    td = function (a, b) {
      if (Eg()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = Bg(b);
    };
  var Fg = function (a) {
      return String(a)
        .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
        .replace(/\x08/g, "\\x08");
    },
    Gg = String.prototype.repeat
      ? function (a, b) {
          return a.repeat(b);
        }
      : function (a, b) {
          return Array(b + 1).join(a);
        },
    L = function (a, b, c) {
      if (!Number.isFinite(a)) return String(a);
      a = void 0 !== c ? a.toFixed(c) : String(a);
      c = a.indexOf(".");
      -1 === c && (c = a.length);
      var d = "-" === a[0] ? "-" : "";
      d && (a = a.substring(1));
      return d + Gg("0", Math.max(0, b - c)) + a;
    },
    Hg = function () {
      return (
        Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
      );
    },
    Ig = function (a) {
      var b = Number(a);
      return 0 == b && ie(a) ? NaN : b;
    },
    Jg = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    };
  var Kg = function () {
    this.g = document || { cookie: "" };
  };
  k = Kg.prototype;
  k.isEnabled = function () {
    if (!n.navigator.cookieEnabled) return !1;
    if (!this.ha()) return !0;
    this.set("TESTCOOKIESENABLED", "1", { maxAge: 60 });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0;
  };
  k.set = function (a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
      var e = c.sameSite;
      d = c.secure || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.maxAge;
    }
    if (/[;=\s]/.test(a)) throw Error("C`" + a);
    if (/[;\r\n]/.test(b)) throw Error("D`" + b);
    void 0 === h && (h = -1);
    this.g.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (g ? ";path=" + g : "") +
      (0 > h
        ? ""
        : 0 == h
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString()) +
      (d ? ";secure" : "") +
      (null != e ? ";samesite=" + e : "");
  };
  k.get = function (a, b) {
    for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
      f = je(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  k.remove = function (a, b, c) {
    var d = void 0 !== this.get(a);
    this.set(a, "", { maxAge: 0, path: b, domain: c });
    return d;
  };
  k.Ea = function () {
    return Lg(this).keys;
  };
  k.ja = function () {
    return Lg(this).values;
  };
  k.ha = function () {
    return !this.g.cookie;
  };
  k.W = function () {
    return this.g.cookie ? (this.g.cookie || "").split(";").length : 0;
  };
  k.Xa = function (a) {
    for (var b = Lg(this).values, c = 0; c < b.length; c++) if (b[c] == a) return !0;
    return !1;
  };
  k.clear = function () {
    for (var a = Lg(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b]);
  };
  var Lg = function (a) {
    a = (a.g.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
      (e = je(a[f])), (d = e.indexOf("=")), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return { keys: b, values: c };
  };
  var Mg = function (a) {
      return !!lg.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a);
    },
    Ng = function (a, b, c, d) {
      (a = n[a]) || "undefined" === typeof document || (a = new Kg().get(b));
      return a ? jg(a, c, d) : null;
    },
    Og = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c = Ff(String(n.location.href)),
        d = [];
      var e = b;
      e = void 0 === e ? !1 : e;
      var f = n.__SAPISID || n.__APISID || n.__3PSAPISID || n.__OVERRIDE_SID;
      Mg(e) && (f = f || n.__1PSAPISID);
      if (f) e = !0;
      else {
        if ("undefined" !== typeof document) {
          var g = new Kg();
          f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
          Mg(e) && (f = f || g.get("__Secure-1PAPISID"));
        }
        e = !!f;
      }
      e &&
        ((e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:"))
          ? n.__SAPISID
          : n.__APISID),
        e || "undefined" === typeof document || ((e = new Kg()), (e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"))),
        (e = e ? jg(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e),
        c &&
          Mg(b) &&
          ((b = Ng("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b),
          (a = Ng("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
      return 0 == d.length ? null : d.join(" ");
    };
  var Pg = function () {
    var a = { DEFAULT: 0, DARK: 1 };
    this.g = {};
    this.h = {};
    if (a)
      for (var b in a) {
        var c = b,
          d = a[b];
        this.g[c] = d;
        this.h[d] = c;
      }
    this.i = null;
  };
  Pg.prototype.get = function (a) {
    return this.g[a];
  };
  Pg.prototype.Ea = function () {
    return ec(this.g);
  };
  Pg.prototype.remove = function (a) {
    if (void 0 !== this.g[a]) {
      var b = this.g[a];
      delete this.g[a];
      delete this.h[b];
    }
  };
  var Qg;
  var Rg = function (a, b) {
    return a + Math.random() * (b - a);
  };
  var Sg = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  Sg.prototype.clone = function () {
    return new Sg(this.x, this.y);
  };
  Sg.prototype.V = function (a) {
    return a instanceof Sg && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1);
  };
  var Tg = function (a, b) {
    return new Sg(a.x - b.x, a.y - b.y);
  };
  Sg.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  Sg.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  Sg.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  var Ug = function (a, b) {
    this.width = a;
    this.height = b;
  };
  k = Ug.prototype;
  k.clone = function () {
    return new Ug(this.width, this.height);
  };
  k.aspectRatio = function () {
    return this.width / this.height;
  };
  k.ha = function () {
    return !(this.width * this.height);
  };
  k.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  k.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  k.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var qd = function (a) {
      return a ? new Vg(Wg(a)) : he || (he = new Vg());
    },
    Xg = function (a, b) {
      var c = b || document;
      if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
      else {
        c = document;
        var d = b || c;
        if (d.querySelectorAll && d.querySelector && a) a = d.querySelector(a ? "." + a : "");
        else {
          b = b || c;
          if (b.querySelectorAll && b.querySelector && a) a = b.querySelectorAll(a ? "." + a : "");
          else if (a && b.getElementsByClassName) {
            var e = b.getElementsByClassName(a);
            a = e;
          } else if (((e = b.getElementsByTagName("*")), a)) {
            var f = {};
            for (c = d = 0; (b = e[c]); c++) {
              var g = b.className;
              "function" == typeof g.split && va(g.split(/\s+/), a) && (f[d++] = b);
            }
            f.length = d;
            a = f;
          } else a = e;
          a = a[0] || null;
        }
      }
      return a || null;
    },
    Zg = function (a, b) {
      x(b, function (c, d) {
        c && "object" == typeof c && c.Rb && (c = c.Pb());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : Yg.hasOwnProperty(d)
          ? a.setAttribute(Yg[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    Yg = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    },
    ah = function (a) {
      a = a.document;
      a = $g(a) ? a.documentElement : a.body;
      return new Ug(a.clientWidth, a.clientHeight);
    },
    dh = function (a) {
      var b = bh(a);
      a = ch(a);
      return H && a.pageYOffset != b.scrollTop
        ? new Sg(b.scrollLeft, b.scrollTop)
        : new Sg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    bh = function (a) {
      return a.scrollingElement ? a.scrollingElement : !Le && $g(a) ? a.documentElement : a.body || a.documentElement;
    },
    eh = function (a) {
      return a ? ch(a) : window;
    },
    ch = function (a) {
      return a.parentWindow || a.defaultView;
    },
    gh = function (a, b, c) {
      return fh(document, arguments);
    },
    fh = function (a, b) {
      var c = b[1],
        d = rd(a, String(b[0]));
      c && ("string" === typeof c ? (d.className = c) : Array.isArray(c) ? (d.className = c.join(" ")) : Zg(d, c));
      2 < b.length && hh(a, d, b, 2);
      return d;
    },
    hh = function (a, b, c, d) {
      function e(h) {
        h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Ba(f) || (vd(f) && 0 < f.nodeType)) e(f);
        else {
          a: {
            if (f && "number" == typeof f.length) {
              if (vd(f)) {
                var g = "function" == typeof f.item || "string" == typeof f.item;
                break a;
              }
              if ("function" === typeof f) {
                g = "function" == typeof f.item;
                break a;
              }
            }
            g = !1;
          }
          Bd(g ? Aa(f) : f, e);
        }
      }
    },
    rd = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    $g = function (a) {
      return "CSS1Compat" == a.compatMode;
    },
    ih = function (a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    },
    jh = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    },
    kh = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; ) b = b.parentNode;
      return b == a;
    },
    Wg = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    lh = function (a, b) {
      if ("textContent" in a) a.textContent = b;
      else if (3 == a.nodeType) a.data = String(b);
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
        a.firstChild.data = String(b);
      } else ih(a), a.appendChild(Wg(a).createTextNode(String(b)));
    },
    mh = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    nh = { IMG: " ", BR: "\n" },
    oh = function (a, b) {
      b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute("tabIndex"));
    },
    ph = function (a) {
      a = a.tabIndex;
      return "number" === typeof a && 0 <= a && 32768 > a;
    },
    rh = function (a) {
      var b = [];
      qh(a, b, !1);
      return b.join("");
    },
    qh = function (a, b, c) {
      if (!(a.nodeName in mh))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in nh) b.push(nh[a.nodeName]);
        else for (a = a.firstChild; a; ) qh(a, b, c), (a = a.nextSibling);
    },
    sh = function (a) {
      try {
        var b = a && a.activeElement;
        return b && b.nodeName ? b : null;
      } catch (c) {
        return null;
      }
    },
    Vg = function (a) {
      this.g = a || n.document || document;
    };
  k = Vg.prototype;
  k.C = function (a) {
    var b = this.g;
    return "string" === typeof a ? b.getElementById(a) : a;
  };
  k.setProperties = Zg;
  k.sb = function (a, b, c) {
    return fh(this.g, arguments);
  };
  k.Ne = function (a, b) {
    hh(Wg(a), a, arguments, 1);
  };
  k.Oe = ih;
  k.Fd = jh;
  k.getChildren = function (a) {
    return void 0 != a.children
      ? a.children
      : Array.prototype.filter.call(a.childNodes, function (b) {
          return 1 == b.nodeType;
        });
  };
  k.contains = kh;
  var th = function (a, b) {
      b ? a.setAttribute("role", b) : a.removeAttribute("role");
    },
    uh = function (a, b, c) {
      Array.isArray(c) && (c = c.join(" "));
      var d = "aria-" + b;
      "" === c || void 0 == c
        ? (Qg ||
            ((c = {}),
            (Qg =
              ((c.atomic = !1),
              (c.autocomplete = "none"),
              (c.dropeffect = "none"),
              (c.haspopup = !1),
              (c.live = "off"),
              (c.multiline = !1),
              (c.multiselectable = !1),
              (c.orientation = "vertical"),
              (c.readonly = !1),
              (c.relevant = "additions text"),
              (c.required = !1),
              (c.sort = "none"),
              (c.busy = !1),
              (c.disabled = !1),
              (c.hidden = !1),
              (c.invalid = "false"),
              c))),
          (c = Qg),
          b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
        : a.setAttribute(d, c);
    },
    vh = function (a, b) {
      var c = "";
      b && (c = b.id);
      uh(a, "activedescendant", c);
    };
  var M = function () {
    this.pa = this.pa;
    this.eb = this.eb;
  };
  M.prototype.pa = !1;
  M.prototype.ga = function () {
    this.pa || ((this.pa = !0), this.K());
  };
  var N = function (a, b) {
      wh(a, ee(nc, b));
    },
    wh = function (a, b, c) {
      a.pa ? (void 0 !== c ? b.call(c) : b()) : (a.eb || (a.eb = []), a.eb.push(void 0 !== c ? F(b, c) : b));
    };
  M.prototype.K = function () {
    if (this.eb) for (; this.eb.length; ) this.eb.shift()();
  };
  var xh = function (a) {
    M.call(this);
    this.g = a || qd();
    this.h = {};
    this.i = {};
  };
  G(xh, M);
  xh.prototype.K = function () {
    x(this.h, this.g.Fd, this.g);
    this.i = this.g = this.h = null;
    xh.O.K.call(this);
  };
  var yh = function (a) {
    var b = "nb";
    if (a.nb && a.hasOwnProperty(b)) return a.nb;
    b = new a();
    return (a.nb = b);
  };
  var zh = function () {
    this.g = new xh();
  };
  zh.prototype.speak = function (a, b) {
    var c = this.g;
    b = b || "polite";
    var d;
    (d = c.h[b])
      ? d.removeAttribute("aria-hidden")
      : ((d = rd(c.g.g, "DIV")),
        (d.id = "goog-lr-" + id(d)),
        (d.style.position = "absolute"),
        (d.style.top = "-1000px"),
        (d.style.height = "1px"),
        (d.style.overflow = "hidden"),
        uh(d, "live", b),
        uh(d, "atomic", "true"),
        c.g.g.body.appendChild(d),
        (c.h[b] = d));
    var e = c.i[b];
    e = e && e === a ? a + "\u00a0" : a;
    a && (c.i[b] = e);
    lh(d, e);
  };
  var Ah = function (a) {
      this.g = "";
      this.h = void 0 === a ? function () {} : a;
    },
    Ch = function (a) {
      a.g
        ? chrome.identity.removeCachedAuthToken({ token: a.g }, function () {
            return Bh(a, !1);
          })
        : Bh(a, !1);
    },
    Bh = function (a, b, c) {
      chrome.identity.getAuthToken({ interactive: !!b }, function (d) {
        var e = !!b;
        d ? ((a.g = d), a.h(!0), c && c()) : e ? a.h(!1) : (a.h(!1), Bh(a, !0, c));
      });
    };
  var Dh = function () {
    M.call(this);
    this.h = [];
    this.g = 0;
    this.i = !1;
  };
  E(Dh, M);
  Dh.prototype.setEnabled = function (a) {
    this.i = a;
  };
  Dh.prototype.get = function (a) {
    return yd(this.h, function (b) {
      return a ? b.i : b.h;
    }).join("\n\n\n\n");
  };
  Dh.prototype.logMessage = function (a) {
    if (this.i) {
      a = new Eh(a);
      for (var b = 1e7 - a.g; this.g > b; ) {
        var c = this.h.pop();
        this.g -= c.g;
      }
      this.h.unshift(a);
      this.g += a.g;
    }
  };
  var Fh = function (a, b) {
    a += "";
    return a.length >= b ? a : Array(b - a.length + 1).join("0") + a;
  };
  Dh.L = function () {
    return yh(Dh);
  };
  var Eh = function (a) {
    var b = new Date();
    this.h = this.i =
      a +
      " - " +
      (b.getMonth() +
        1 +
        "/" +
        b.getDate() +
        "/" +
        b.getFullYear() +
        " " +
        b.getHours() +
        ":" +
        Fh(b.getMinutes(), 2) +
        ":" +
        Fh(b.getSeconds(), 2) +
        ":" +
        Fh(b.getMilliseconds(), 3));
    this.g = this.h.length;
  };
  var Gh = function (a) {
    this.s = this.h = this.o = this.i = this.u = this.j = null;
    a && this.update(a);
  };
  Gh.prototype.update = function (a) {
    for (var b in a)
      switch (b) {
        case "url":
          Hh(this, a[b]);
          break;
        case "title":
          this.i = a[b];
          break;
        case "description":
          this.o = a[b];
          break;
        case "provenanceUrl":
          this.h = a[b];
          break;
        case "representativeImageUrl":
          this.s = a[b];
      }
  };
  Gh.prototype.g = function () {
    var a = {};
    a.url = this.j;
    a.title = this.i;
    a.description = this.o;
    a.provenanceUrl = this.h;
    a.representativeImageUrl = this.s;
    return a;
  };
  Gh.prototype.Qa = function () {
    return this.j || "";
  };
  var Hh = function (a, b) {
    a.j = b;
    try {
      a.u = new URL(b).hostname;
    } catch (c) {
      Dh.L().logMessage("Failed to get hostname for URL " + b + ".\nProvenance URL: " + a.h + ".\nFull exception: " + c + ".");
    }
  };
  Gh.prototype.getTitle = function () {
    return this.i || "";
  };
  var Ih = function (a) {
    this.g = null;
    a && this.update(a);
  };
  Ih.prototype.update = function (a) {
    for (var b in a)
      switch (b) {
        case "webLink":
          this.g ? this.g.update(a[b]) : (this.g = new Gh(a[b]));
      }
  };
  var Jh = function (a) {
    this.g = "SUGGEST_TYPE_UNKNOWN";
    a && this.update(a);
  };
  Jh.prototype.update = function (a) {
    this.g = a.suggestType;
  };
  var Kh = { GROCERY_ITEM: chrome.i18n.getMessage("1333255388111908292") };
  var O = {
    Fc: ["BC", "AD"],
    Ec: ["Before Christ", "Anno Domini"],
    Qc: "JFMAMJJASOND".split(""),
    Xc: "JFMAMJJASOND".split(""),
    Nc: "January February March April May June July August September October November December".split(" "),
    Wc: "January February March April May June July August September October November December".split(" "),
    Tc: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    Zc: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    dd: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    bd: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    Vc: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    ad: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    Qd: "SMTWTFS".split(""),
    Yc: "SMTWTFS".split(""),
    Uc: ["Q1", "Q2", "Q3", "Q4"],
    Rc: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    Bc: ["AM", "PM"],
    rb: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    dc: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
    Dc: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    Gb: 6,
    Ud: [5, 6],
    Hb: 5
  };
  O = {
    Fc: ["\u0642.\u0645", "\u0645"],
    Ec: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f", "\u0645\u064a\u0644\u0627\u062f\u064a"],
    Qc: "\u064a\u0641\u0645\u0623\u0648\u0646\u0644\u063a\u0633\u0643\u0628\u062f".split(""),
    Xc: "\u064a\u0641\u0645\u0623\u0648\u0646\u0644\u063a\u0633\u0643\u0628\u062f".split(""),
    Nc: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(
      " "
    ),
    Wc: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(
      " "
    ),
    Tc: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(
      " "
    ),
    Zc: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(
      " "
    ),
    dd: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(
      " "
    ),
    bd: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(
      " "
    ),
    Vc: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(
      " "
    ),
    ad: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(
      " "
    ),
    Qd: "\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),
    Yc: "\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),
    Uc: [
      "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644",
      "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a",
      "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b",
      "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"
    ],
    Rc: [
      "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644",
      "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a",
      "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b",
      "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"
    ],
    Bc: ["\u0635", "\u0645"],
    rb: ["EEEE\u060c d MMMM y", "d MMMM y", "dd\u200f/MM\u200f/y", "d\u200f/M\u200f/y"],
    dc: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    Dc: ["{1} \u0641\u064a {0}", "{1} \u0641\u064a {0}", "{1}\u060c {0}", "{1}\u060c {0}"],
    Gb: 5,
    Ud: [4, 5],
    Hb: 4
  };
  var Lh = function (a, b, c, d, e) {
      a = new Date(a, b, c);
      e = e || 0;
      return a.valueOf() + 864e5 * ((((void 0 !== d ? d : 3) - e + 7) % 7) - ((((a.getDay() + 6) % 7) - e + 7) % 7));
    },
    Ph = function (a, b, c) {
      "number" === typeof a
        ? ((this.g = Mh(a, b || 0, c || 1)), Oh(this, c || 1))
        : vd(a)
        ? ((this.g = Mh(a.getFullYear(), a.getMonth(), a.getDate())), Oh(this, a.getDate()))
        : ((this.g = new Date(Date.now())),
          (a = this.g.getDate()),
          this.g.setHours(0),
          this.g.setMinutes(0),
          this.g.setSeconds(0),
          this.g.setMilliseconds(0),
          Oh(this, a));
    },
    Mh = function (a, b, c) {
      b = new Date(a, b, c);
      0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
      return b;
    };
  k = Ph.prototype;
  k.jc = O.Gb;
  k.kc = O.Hb;
  k.clone = function () {
    var a = new Ph(this.g);
    a.jc = this.jc;
    a.kc = this.kc;
    return a;
  };
  k.getFullYear = function () {
    return this.g.getFullYear();
  };
  k.getMonth = function () {
    return this.g.getMonth();
  };
  k.getDate = function () {
    return this.g.getDate();
  };
  k.getTime = function () {
    return this.g.getTime();
  };
  k.getDay = function () {
    return this.g.getDay();
  };
  k.getUTCFullYear = function () {
    return this.g.getUTCFullYear();
  };
  k.getUTCMonth = function () {
    return this.g.getUTCMonth();
  };
  k.getUTCDate = function () {
    return this.g.getUTCDate();
  };
  k.getUTCHours = function () {
    return this.g.getUTCHours();
  };
  k.getUTCMinutes = function () {
    return this.g.getUTCMinutes();
  };
  k.getTimezoneOffset = function () {
    return this.g.getTimezoneOffset();
  };
  k.set = function (a) {
    this.g = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  };
  k.add = function (a) {
    if (a.o || a.j) {
      var b = this.getMonth() + a.j + 12 * a.o,
        c = this.getFullYear() + Math.floor(b / 12);
      b %= 12;
      0 > b && (b += 12);
      a: {
        switch (b) {
          case 1:
            var d = 0 != c % 4 || (0 == c % 100 && 0 != c % 400) ? 28 : 29;
            break a;
          case 5:
          case 8:
          case 10:
          case 3:
            d = 30;
            break a;
        }
        d = 31;
      }
      d = Math.min(d, this.getDate());
      this.g.setDate(1);
      this.g.setFullYear(c);
      this.g.setMonth(b);
      this.g.setDate(d);
    }
    a.g &&
      ((c = this.getFullYear()),
      (b = 0 <= c && 99 >= c ? -1900 : 0),
      (a = new Date(new Date(c, this.getMonth(), this.getDate(), 12).getTime() + 864e5 * a.g)),
      this.g.setDate(1),
      this.g.setFullYear(a.getFullYear() + b),
      this.g.setMonth(a.getMonth()),
      this.g.setDate(a.getDate()),
      Oh(this, a.getDate()));
  };
  k.Yb = function (a) {
    var b = this.getFullYear(),
      c = 0 > b ? "-" : 1e4 <= b ? "+" : "";
    return [c + L(Math.abs(b), c ? 6 : 4), L(this.getMonth() + 1, 2), L(this.getDate(), 2)].join(a ? "-" : "");
  };
  k.V = function (a) {
    return !(!a || this.getFullYear() != a.getFullYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate());
  };
  k.toString = function () {
    return this.Yb();
  };
  var Oh = function (a, b) {
    a.getDate() != b && a.g.setUTCHours(a.g.getUTCHours() + (a.getDate() < b ? 1 : -1));
  };
  Ph.prototype.valueOf = function () {
    return this.g.valueOf();
  };
  var Qh = function (a, b, c, d, e, f, g) {
    this.g =
      "number" === typeof a
        ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0)
        : new Date(a && a.getTime ? a.getTime() : Date.now());
  };
  G(Qh, Ph);
  k = Qh.prototype;
  k.getHours = function () {
    return this.g.getHours();
  };
  k.getMinutes = function () {
    return this.g.getMinutes();
  };
  k.getSeconds = function () {
    return this.g.getSeconds();
  };
  k.getMilliseconds = function () {
    return this.g.getMilliseconds();
  };
  k.getUTCHours = function () {
    return this.g.getUTCHours();
  };
  k.getUTCMinutes = function () {
    return this.g.getUTCMinutes();
  };
  k.getUTCSeconds = function () {
    return this.g.getUTCSeconds();
  };
  k.getUTCMilliseconds = function () {
    return this.g.getUTCMilliseconds();
  };
  k.add = function (a) {
    Ph.prototype.add.call(this, a);
    a.h && this.g.setUTCHours(this.g.getUTCHours() + a.h);
    a.i && this.g.setUTCMinutes(this.g.getUTCMinutes() + a.i);
    a.l && this.g.setUTCSeconds(this.g.getUTCSeconds() + a.l);
  };
  k.Yb = function (a) {
    var b = Ph.prototype.Yb.call(this, a);
    return a
      ? b + "T" + L(this.getHours(), 2) + ":" + L(this.getMinutes(), 2) + ":" + L(this.getSeconds(), 2)
      : b + "T" + L(this.getHours(), 2) + L(this.getMinutes(), 2) + L(this.getSeconds(), 2);
  };
  k.V = function (a) {
    return this.getTime() == a.getTime();
  };
  k.toString = function () {
    return this.Yb();
  };
  k.clone = function () {
    var a = new Qh(this.g);
    a.jc = this.jc;
    a.kc = this.kc;
    return a;
  };
  var Rh = function (a, b) {
    null != a && this.la.apply(this, arguments);
  };
  k = Rh.prototype;
  k.bb = "";
  k.set = function (a) {
    this.bb = "" + a;
  };
  k.la = function (a, b, c) {
    this.bb += String(a);
    if (null != b) for (var d = 1; d < arguments.length; d++) this.bb += arguments[d];
    return this;
  };
  k.clear = function () {
    this.bb = "";
  };
  k.toString = function () {
    return this.bb;
  };
  var Sh = function () {},
    Th = function (a, b) {
      if (!b) return null;
      a = new Qh(2e3);
      a.g.setTime(0);
      var c = 0;
      a.g.setUTCFullYear(Number(b.substring(c, 4)));
      c += 5;
      a.g.setUTCMonth(Number(b.substring(c, c + 2)) - 1);
      c += 3;
      a.g.setUTCDate(Number(b.substring(c, c + 2)));
      c += 3;
      a.g.setUTCHours(Number(b.substring(c, c + 2)));
      c += 3;
      a.g.setUTCMinutes(Number(b.substring(c, c + 2)));
      c += 3;
      a.g.setUTCSeconds(Number(b.substring(c, c + 2)));
      c += 3;
      a.g.setUTCMilliseconds(Number(b.substring(c, c + 3)));
      c += 3;
      var d = b.substring(c, c + 1);
      c += 1;
      var e = 0;
      "Z" != d &&
        ((d = "-" == d ? -1 : 1), (e += 60 * Number(b.substring(c, c + 2)) * d), (c += 3), (e += Number(b.substring(c, c + 2)) * d));
      a.g.setTime(a.getTime() - 6e4 * e);
      return isNaN(a.getTime()) ? null : a;
    };
  Sh.prototype.format = function (a) {
    var b = new Rh();
    b.la(L(a.getUTCFullYear(), 4, 0))
      .la("-")
      .la(L(a.getUTCMonth() + 1, 2, 0))
      .la("-")
      .la(L(a.getUTCDate(), 2, 0))
      .la("T")
      .la(L(a.getUTCHours(), 2, 0))
      .la(":")
      .la(L(a.getUTCMinutes(), 2, 0))
      .la(":")
      .la(L(a.getUTCSeconds(), 2, 0))
      .la(".")
      .la(L(a.getUTCMilliseconds(), 3, 0))
      .la("Z");
    return b.toString();
  };
  Sh.L = function () {
    return yh(Sh);
  };
  var Uh = function (a) {
    a = a || {};
    this.j = this.s = Th(Sh.L(), a.created) || null;
    this.h = this.i = this.l = this.o = this.g = null;
    this.update(a);
  };
  Uh.prototype.getCreationTime = function () {
    return this.s ? this.s : new Qh();
  };
  var Vh = function (a) {
      return a.j ? a.j : new Qh();
    },
    Wh = function (a, b) {
      a.j = b;
      null == a.s && (a.s = b);
    };
  Uh.prototype.update = function (a) {
    Sh.L();
    var b = !1,
      c;
    for (c in a) {
      var d = Th(0, a[c]);
      d = d && !d.valueOf() ? null : d;
      var e = !!d;
      switch (c) {
        case "deleted":
          var f = !!this.g;
          b = b || (e && !this.g) || (!d && f) || (e && f && !d.V(this.g));
          this.g = d;
          break;
        case "shareRequestProcessed":
          f = !!this.o;
          b = b || (e && !this.o) || (!d && f) || (e && f && !d.V(this.o));
          this.o = d;
          break;
        case "recentSharedChangesSeen":
          f = !!this.l;
          b = b || (e && !this.l) || (!d && f) || (e && f && !d.V(this.l));
          this.l = d;
          break;
        case "trashed":
          f = !!this.i;
          b = b || (e && !this.i) || (!d && f) || (e && f && !d.V(this.i));
          this.i = d;
          break;
        case "updated":
          f = !!this.j;
          b = b || (e && f && !d.V(this.j));
          this.j = d || this.j;
          break;
        case "userEdited":
          (f = !!this.h), (b = b || (e && !this.h) || (!d && f) || (e && f && !d.V(this.h))), (this.h = d);
      }
    }
    return b;
  };
  var Xh = function (a) {
    var b = {},
      c = Sh.L();
    b.kind = "notes#timestamps";
    b.created = c.format(a.getCreationTime());
    b.deleted = a.g ? c.format(a.g) : "1970-01-01T00:00:00.000Z";
    b.trashed = a.i ? c.format(a.i) : "1970-01-01T00:00:00.000Z";
    b.updated = c.format(Vh(a));
    b.userEdited = a.h ? c.format(a.h) : "1970-01-01T00:00:00.000Z";
    a.o && (b.shareRequestProcessed = c.format(a.o));
    a.l && (b.recentSharedChangesSeen = c.format(a.l));
    return b;
  };
  var Yh = function (a) {
    this.g = null;
    a && this.update(a);
  };
  Yh.prototype.update = function (a) {
    this.g = a.category;
  };
  var Zh = chrome.i18n.getMessage("456512308416555173"),
    $h = chrome.i18n.getMessage("6366376928558090914"),
    ai = chrome.i18n.getMessage("4840513623749850224"),
    bi = chrome.i18n.getMessage("6497197865876438261"),
    ci = chrome.i18n.getMessage("8602525917014156029"),
    di = chrome.i18n.getMessage("4533605085334699862"),
    ei = chrome.i18n.getMessage("3385831848537487538"),
    fi = chrome.i18n.getMessage("5403636185480096151"),
    gi = { BOOKS: Zh, FOOD: $h, MOVIES: ai, MUSIC: bi, PLACES: ci, QUOTES: di, TRAVEL: ei, TV: fi };
  var hi = function (a) {
    this.g = this.i = this.h = this.j = this.l = null;
    a && this.update(a);
  };
  hi.prototype.update = function (a) {
    this.l = a.deleted;
    this.o = a.id;
    ii(a.context)
      ? ((a = a.context), this.j ? this.j.update(a) : (this.j = new Ih(a)), (this.g = this.i = this.h = null))
      : ii(a.taskAssist)
      ? ((a = a.taskAssist), this.h ? this.h.update(a) : (this.h = new Jh(a)), (this.g = this.i = this.j = null))
      : ii(a.topicCategory)
      ? ((a = a.topicCategory), this.i ? this.i.update(a) : (this.i = new Yh(a)), (this.g = this.h = this.j = null))
      : ii(a.webLink) && ((a = a.webLink), this.g ? this.g.update(a) : (this.g = new Gh(a)), (this.i = this.h = this.j = null));
  };
  hi.prototype.ha = function () {
    return !this.j && !this.h && !this.i && !this.g;
  };
  var ji = function (a) {
      return (!!a.l && "1970-01-01T00:00:00.000Z" != a.l) || !1;
    },
    ii = function (a) {
      return vd(a) && !hc(a);
    };
  var ki = function (a) {
      return a.W && "function" == typeof a.W ? a.W() : Ba(a) || "string" === typeof a ? a.length : cc(a);
    },
    li = function (a) {
      if (a.ja && "function" == typeof a.ja) return a.ja();
      if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set))
        return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (Ba(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return dc(a);
    },
    mi = function (a) {
      if (a.Ea && "function" == typeof a.Ea) return a.Ea();
      if (!a.ja || "function" != typeof a.ja) {
        if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (Ba(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return ec(a);
        }
      }
    },
    ni = function (a, b) {
      if ("function" == typeof a.every) return a.every(b, void 0);
      if (Ba(a) || "string" === typeof a) return Array.prototype.every.call(a, b, void 0);
      for (var c = mi(a), d = li(a), e = d.length, f = 0; f < e; f++) if (!b.call(void 0, d[f], c && c[f], a)) return !1;
      return !0;
    };
  var oi = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    pi = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    },
    qi = function (a, b) {
      if (!b) return a;
      var c = a.indexOf("#");
      0 > c && (c = a.length);
      var d = a.indexOf("?");
      if (0 > d || d > c) {
        d = c;
        var e = "";
      } else e = a.substring(d + 1, c);
      a = [a.slice(0, d), e, a.slice(c)];
      c = a[1];
      a[1] = b ? (c ? c + "&" + b : b) : c;
      return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
    },
    ri = function (a, b, c) {
      if (Array.isArray(b)) for (var d = 0; d < b.length; d++) ri(a, String(b[d]), c);
      else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
    },
    si = function (a, b) {
      var c = [];
      for (b = b || 0; b < a.length; b += 2) ri(a[b], a[b + 1], c);
      return c.join("&");
    },
    ti = function (a, b) {
      var c = 2 == arguments.length ? si(arguments[1], 0) : si(arguments, 1);
      return qi(a, c);
    },
    ui = function (a, b, c) {
      c = null != c ? "=" + encodeURIComponent(String(c)) : "";
      return qi(a, b + c);
    },
    vi = function (a, b, c) {
      for (; 0 <= (b = a.indexOf("format", b)) && b < c; ) {
        var d = a.charCodeAt(b - 1);
        if (38 == d || 63 == d) if (((d = a.charCodeAt(b + 6)), !d || 61 == d || 38 == d || 35 == d)) return b;
        b += 7;
      }
      return -1;
    },
    wi = /#|$/,
    xi = /[?&]($|#)/;
  var yi = function (a) {
    this.h = this.j = this.o = "";
    this.u = null;
    this.l = this.g = "";
    this.s = !1;
    var b;
    a instanceof yi
      ? ((this.s = a.s),
        Jc(this, a.o),
        (this.j = a.j),
        (this.h = a.h),
        zi(this, a.u),
        (this.g = a.g),
        Kc(this, a.i.clone()),
        (this.l = a.l))
      : a && (b = String(a).match(oi))
      ? ((this.s = !1),
        Jc(this, b[1] || "", !0),
        (this.j = Ai(b[2] || "")),
        (this.h = Ai(b[3] || "", !0)),
        zi(this, b[4]),
        (this.g = Ai(b[5] || "", !0)),
        Kc(this, b[6] || "", !0),
        (this.l = Ai(b[7] || "")))
      : ((this.s = !1), (this.i = new Bi(null, this.s)));
  };
  yi.prototype.toString = function () {
    var a = [],
      b = this.o;
    b && a.push(Ci(b, Di, !0), ":");
    var c = this.h;
    if (c || "file" == b)
      a.push("//"),
        (b = this.j) && a.push(Ci(b, Di, !0), "@"),
        a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        (c = this.u),
        null != c && a.push(":", String(c));
    if ((c = this.g)) this.h && "/" != c.charAt(0) && a.push("/"), a.push(Ci(c, "/" == c.charAt(0) ? Ei : Fi, !0));
    (c = this.i.toString()) && a.push("?", c);
    (c = this.l) && a.push("#", Ci(c, Gi));
    return a.join("");
  };
  yi.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.o;
    c ? Jc(b, a.o) : (c = !!a.j);
    c ? (b.j = a.j) : (c = !!a.h);
    c ? (b.h = a.h) : (c = null != a.u);
    var d = a.g;
    if (c) zi(b, a.u);
    else if ((c = !!a.g)) {
      if ("/" != d.charAt(0))
        if (this.h && !this.g) d = "/" + d;
        else {
          var e = b.g.lastIndexOf("/");
          -1 != e && (d = b.g.slice(0, e + 1) + d);
        }
      e = d;
      if (".." == e || "." == e) d = "";
      else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");
        for (var f = [], g = 0; g < e.length; ) {
          var h = e[g++];
          "." == h
            ? d && g == e.length && f.push("")
            : ".." == h
            ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(), d && g == e.length && f.push(""))
            : (f.push(h), (d = !0));
        }
        d = f.join("/");
      } else d = e;
    }
    c ? (b.g = d) : (c = "" !== a.i.toString());
    c ? Kc(b, a.i.clone()) : (c = !!a.l);
    c && (b.l = a.l);
    return b;
  };
  yi.prototype.clone = function () {
    return new yi(this);
  };
  var Jc = function (a, b, c) {
      a.o = c ? Ai(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ""));
    },
    zi = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("F`" + b);
        a.u = b;
      } else a.u = null;
    },
    Kc = function (a, b, c) {
      b instanceof Bi ? ((a.i = b), Hi(a.i, a.s)) : (c || (b = Ci(b, Ii)), (a.i = new Bi(b, a.s)));
    },
    Ki = function () {
      var a = Ji,
        b = Hg();
      a.i.set("zx", b);
      return a;
    },
    Ic = function (a) {
      return a instanceof yi ? a.clone() : new yi(a);
    },
    Ai = function (a, b) {
      return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
    },
    Ci = function (a, b, c) {
      return "string" === typeof a ? ((a = encodeURI(a).replace(b, Li)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
    Li = function (a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    Di = /[#\/\?@]/g,
    Fi = /[#\?:]/g,
    Ei = /[#\?]/g,
    Ii = /[#\?@]/g,
    Gi = /#/g,
    Bi = function (a, b) {
      this.h = this.g = null;
      this.i = a || null;
      this.j = !!b;
    },
    Mi = function (a) {
      a.g ||
        ((a.g = new Map()),
        (a.h = 0),
        a.i &&
          pi(a.i, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
    };
  k = Bi.prototype;
  k.W = function () {
    Mi(this);
    return this.h;
  };
  k.add = function (a, b) {
    Mi(this);
    this.i = null;
    a = Ni(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, (c = []));
    c.push(b);
    this.h += 1;
    return this;
  };
  k.remove = function (a) {
    Mi(this);
    a = Ni(this, a);
    return this.g.has(a) ? ((this.i = null), (this.h -= this.g.get(a).length), this.g.delete(a)) : !1;
  };
  k.clear = function () {
    this.g = this.i = null;
    this.h = 0;
  };
  k.ha = function () {
    Mi(this);
    return 0 == this.h;
  };
  var Oi = function (a, b) {
    Mi(a);
    b = Ni(a, b);
    return a.g.has(b);
  };
  k = Bi.prototype;
  k.Xa = function (a) {
    var b = this.ja();
    return va(b, a);
  };
  k.forEach = function (a, b) {
    Mi(this);
    this.g.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  k.Ea = function () {
    Mi(this);
    for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  k.ja = function (a) {
    Mi(this);
    var b = [];
    if ("string" === typeof a) Oi(this, a) && (b = b.concat(this.g.get(Ni(this, a))));
    else {
      a = Array.from(this.g.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  k.set = function (a, b) {
    Mi(this);
    this.i = null;
    a = Ni(this, a);
    Oi(this, a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b]);
    this.h += 1;
    return this;
  };
  k.get = function (a, b) {
    if (!a) return b;
    a = this.ja(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  k.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return "";
    for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.ja(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return (this.i = a.join("&"));
  };
  k.clone = function () {
    var a = new Bi();
    a.i = this.i;
    this.g && ((a.g = new Map(this.g)), (a.h = this.h));
    return a;
  };
  var Ni = function (a, b) {
      b = String(b);
      a.j && (b = b.toLowerCase());
      return b;
    },
    Hi = function (a, b) {
      b &&
        !a.j &&
        (Mi(a),
        (a.i = null),
        a.g.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e &&
            (this.remove(d), this.remove(e), 0 < c.length && ((this.i = null), this.g.set(Ni(this, e), Aa(c)), (this.h += c.length)));
        }, a));
      a.j = b;
    };
  var Ri = function () {
      this.g = {};
      Pi(this, n._notes_flag_initialData || {});
      this.g.n_afoiu && Qi(this);
    },
    Pi = function (a, b) {
      x(hg, function (c) {
        void 0 !== b[c] && (a.g[c] = b[c]);
      });
    },
    Qi = function (a) {
      var b = {};
      new yi(self.location.href).i.forEach(function (c, d) {
        b[d] = c;
      });
      Pi(a, b);
    },
    Si = function (a, b) {
      a = a.g[b];
      return !!a && "false" !== a;
    },
    Ti = function (a) {
      var b = bd();
      return String(b.g[a] || "");
    },
    Ui = function (a) {
      a = bd().g[a];
      return isNaN(a) ? 0 : Number(a);
    },
    Vi = function (a) {
      a = a.g.n_sit;
      return Array.isArray(a) ? a : "string" === typeof a ? a.split(",") : [];
    },
    Wi = function () {
      var a = bd();
      return Vi(a).filter(function (b) {
        return Si(a, "n_eau") || 0 != b.lastIndexOf("audio/", 0);
      });
    },
    bd = function () {
      return yh(Ri);
    };
  var Xi = function () {
    this.g = {};
    this.h = null;
    this.l = {};
    this.i = {};
    this.j = {};
  };
  Xi.prototype.update = function (a) {
    var b = !1,
      c = kc(this.g);
    Bd(
      a.annotations || [],
      function (d) {
        var e = d.id,
          f = this.g[e];
        ic(c, e);
        f ? ((e = ji(f)), f.update(d), (b = b || e != ji(f))) : ((f = new hi(d)), f.ha() || ((b = !0), (this.g[e] = f)));
      },
      this
    );
    b = b || !hc(c);
    x(
      c,
      function (d, e) {
        ic(this.g, e);
      },
      this
    );
    b &&
      ((this.h = null),
      (this.l = {}),
      (this.i = {}),
      (this.j = {}),
      x(
        this.g,
        function (d, e) {
          ji(d) || (d.j ? (this.h = d) : d.h ? (this.j[e] = d) : d.i ? (this.i[e] = d) : d.g && (this.l[e] = d));
        },
        this
      ));
    return b;
  };
  var Yi = function (a) {
    var b = { kind: "notes#annotationsGroup" },
      c = [];
    x(a.g, function (d) {
      var e = c.push,
        f = {};
      f.id = d.o;
      f.deleted = d.l || "1970-01-01T00:00:00.000Z";
      if (d.j) {
        d = d.j;
        var g = {};
        d.g && (g.webLink = d.g.g());
        f.context = g;
      } else
        d.h
          ? ((g = {}), (g.suggestType = d.h.g), (f.taskAssist = g))
          : d.i
          ? ((g = {}), (g.category = d.i.g), (f.topicCategory = g))
          : d.g && (f.webLink = d.g.g());
      e.call(c, f);
    });
    b.annotations = c;
    return b;
  };
  Xi.prototype.remove = function (a) {
    a = a.o || "";
    if (!this.g[a]) return !1;
    var b = Sh.L(),
      c = !!this.g[a],
      d = this.g[a];
    b = b.format(new Qh());
    d.l = b;
    ic(this.l, a);
    ic(this.i, a);
    ic(this.j, a);
    this.h && (this.h.o || "") == a && (this.h = null);
    return c;
  };
  var Zi = function (a) {
      return !a.h || ji(a.h) ? null : a.h;
    },
    Fc = function (a) {
      return Yb(a.l, function (b) {
        return !ji(b);
      });
    },
    $i = function (a) {
      return Yb(a.i, function (b) {
        return !ji(b);
      });
    },
    aj = function (a) {
      return Yb(a.j, function (b) {
        return !ji(b);
      });
    };
  var bj = function (a) {
    this.J = v(a);
  };
  E(bj, K);
  var cj = function (a) {
    this.J = v(a);
  };
  E(cj, K);
  var dj = function (a) {
    this.g = a.name || "default";
    this.h = a.origin || "none";
  };
  dj.prototype.ka = function () {
    return this.g;
  };
  dj.prototype.update = function (a) {
    var b = !1;
    a = t(Object.entries(a));
    for (var c = a.next(); !c.done; c = a.next()) {
      var d = t(c.value);
      c = d.next().value;
      d = d.next().value;
      switch (c) {
        case "name":
          b = b || this.g !== d;
          this.g = d;
          break;
        case "origin":
          (b = b || this.h !== d), (this.h = d);
      }
    }
    return b;
  };
  var ej = function (a) {
    var b = {};
    return (b.name = a.ka()), (b.origin = a.h), b;
  };
  Object.values({
    UNKNOWN: "unknown",
    Cd: "default",
    hh: "groceries",
    dh: "food",
    Sh: "music",
    ui: "recipes",
    Wh: "notes",
    ni: "places",
    hj: "travel",
    VIDEO: "video",
    fg: "celebration"
  }).filter(function (a) {
    return "unknown" !== a;
  });
  chrome.i18n.getMessage("4144331746856352764");
  chrome.i18n.getMessage("2725627412280194969");
  chrome.i18n.getMessage("6114840739553123863");
  chrome.i18n.getMessage("8504497109904866374");
  chrome.i18n.getMessage("2312889521150470080");
  chrome.i18n.getMessage("9012868245012782693");
  chrome.i18n.getMessage("4701373951880414388");
  chrome.i18n.getMessage("8384308820923710821");
  chrome.i18n.getMessage("3411924303211138921");
  chrome.i18n.getMessage("6731295782882669401");
  var fj = function (a, b) {
    this.type = a;
    this.i = this.target = b;
    this.defaultPrevented = this.j = !1;
  };
  fj.prototype.stopPropagation = function () {
    this.j = !0;
  };
  fj.prototype.g = function () {
    this.defaultPrevented = !0;
  };
  var gj = (function () {
    if (!n.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      var c = function () {};
      n.addEventListener("test", c, b);
      n.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
  var ij = function (a, b) {
    fj.call(this, a ? a.type : "");
    this.relatedTarget = this.i = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.l = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.o = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.timeStamp = 0;
    this.h = null;
    if (a) {
      var c = (this.type = a.type),
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.i = b;
      (b = a.relatedTarget)
        ? Je && (Fe(b, "nodeName") || (b = null))
        : "mouseover" == c
        ? (b = a.fromElement)
        : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d
        ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
          (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
          (this.screenX = d.screenX || 0),
          (this.screenY = d.screenY || 0))
        : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
          (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
          (this.screenX = a.screenX || 0),
          (this.screenY = a.screenY || 0));
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.l = a.charCode || ("keypress" == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.o = Me ? a.metaKey : a.ctrlKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : hj[a.pointerType] || "";
      this.state = a.state;
      this.timeStamp = a.timeStamp;
      this.h = a;
      a.defaultPrevented && ij.O.g.call(this);
    }
  };
  G(ij, fj);
  var hj = { 2: "touch", 3: "pen", 4: "mouse" };
  ij.prototype.stopPropagation = function () {
    ij.O.stopPropagation.call(this);
    this.h.stopPropagation ? this.h.stopPropagation() : (this.h.cancelBubble = !0);
  };
  ij.prototype.g = function () {
    ij.O.g.call(this);
    var a = this.h;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var jj = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    kj = function (a) {
      return !(!a || !a[jj]);
    };
  var lj = 0;
  var mj = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.oc = e;
      this.key = ++lj;
      this.removed = this.hc = !1;
    },
    nj = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.oc = null;
    };
  var oj = function (a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  };
  oj.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var g = pj(a, b, d, e);
    -1 < g ? ((b = a[g]), c || (b.hc = !1)) : ((b = new mj(b, this.src, f, !!d, e)), (b.hc = c), a.push(b));
    return b;
  };
  oj.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = pj(e, b, c, d);
    return -1 < b ? (nj(e[b]), xa(e, b), 0 == e.length && (delete this.g[a], this.h--), !0) : !1;
  };
  var qj = function (a, b) {
    var c = b.type;
    c in a.g && ya(a.g[c], b) && (nj(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
  };
  oj.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.g)
      if (!a || c == a) {
        for (var d = this.g[c], e = 0; e < d.length; e++) ++b, nj(d[e]);
        delete this.g[c];
        this.h--;
      }
    return b;
  };
  oj.prototype.Ob = function (a, b, c, d) {
    a = this.g[a.toString()];
    var e = -1;
    a && (e = pj(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  oj.prototype.hasListener = function (a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : "",
      e = void 0 !== b;
    return ac(this.g, function (f) {
      for (var g = 0; g < f.length; ++g) if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
      return !1;
    });
  };
  var pj = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.listener == b && f.capture == !!c && f.oc == d) return e;
    }
    return -1;
  };
  var rj = "closure_lm_" + ((1e6 * Math.random()) | 0),
    sj = {},
    tj = 0,
    vj = function (a, b, c, d, e) {
      if (d && d.once) return uj(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) vj(a, b[f], c, d, e);
        return null;
      }
      c = wj(c);
      return kj(a) ? a.listen(b, c, vd(d) ? !!d.capture : !!d, e) : xj(a, b, c, !1, d, e);
    },
    xj = function (a, b, c, d, e, f) {
      if (!b) throw Error("H");
      var g = vd(e) ? !!e.capture : !!e,
        h = yj(a);
      h || (a[rj] = h = new oj(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = zj();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) gj || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Aj(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("I");
      tj++;
      return c;
    },
    zj = function () {
      var a = Bj,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    uj = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) uj(a, b[f], c, d, e);
        return null;
      }
      c = wj(c);
      return kj(a) ? a.td(b, c, vd(d) ? !!d.capture : !!d, e) : xj(a, b, c, !0, d, e);
    },
    Cj = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Cj(a, b[f], c, d, e);
      else (d = vd(d) ? !!d.capture : !!d), (c = wj(c)), kj(a) ? a.X(b, c, d, e) : a && (a = yj(a)) && (b = a.Ob(b, c, d, e)) && Dj(b);
    },
    Dj = function (a) {
      if ("number" !== typeof a && a && !a.removed) {
        var b = a.src;
        if (kj(b)) qj(b.Ja, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(Aj(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          tj--;
          (c = yj(b)) ? (qj(c, a), 0 == c.h && ((c.src = null), (b[rj] = null))) : nj(a);
        }
      }
    },
    Aj = function (a) {
      return a in sj ? sj[a] : (sj[a] = "on" + a);
    },
    Bj = function (a, b) {
      if (a.removed) a = !0;
      else {
        b = new ij(b, this);
        var c = a.listener,
          d = a.oc || a.src;
        a.hc && Dj(a);
        a = c.call(d, b);
      }
      return a;
    },
    yj = function (a) {
      a = a[rj];
      return a instanceof oj ? a : null;
    },
    Ej = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    wj = function (a) {
      if ("function" === typeof a) return a;
      a[Ej] ||
        (a[Ej] = function (b) {
          return a.handleEvent(b);
        });
      return a[Ej];
    };
  var Fj = function (a, b) {
    this.g = a;
    this.s = b.name;
    this.o = !!b.xd;
    this.i = !!b.M;
    this.h = b.m;
    this.j = b.type;
    this.l = !1;
    switch (this.h) {
      case 3:
      case 4:
      case 6:
      case 16:
      case 18:
      case 2:
      case 1:
        this.l = !0;
    }
  };
  Fj.prototype.ka = function () {
    return this.s;
  };
  var Gj = function (a) {
    return 11 == a.h || 10 == a.h;
  };
  var Hj = function (a, b, c) {
    this.vd = a;
    this.h = b.name || null;
    this.g = {};
    for (a = 0; a < c.length; a++) (b = c[a]), (this.g[b.g] = b);
  };
  Hj.prototype.ka = function () {
    return this.h;
  };
  var Ij = function (a) {
    a = dc(a.g);
    a.sort(function (b, c) {
      return b.g - c.g;
    });
    return a;
  };
  var P = function () {
    this.oa = {};
    this.h = this.getDescriptor().g;
    this.g = null;
  };
  k = P.prototype;
  k.has = function (a) {
    return null != this.oa[a.g];
  };
  k.get = function (a, b) {
    return Jj(this, a.g, b);
  };
  k.set = function (a, b) {
    Kj(this, a.g, b);
  };
  k.add = function (a, b) {
    Lj(this, a.g, b);
  };
  k.clear = function (a) {
    Mj(this, a.g);
  };
  k.V = function (a) {
    if (!a || this.constructor != a.constructor) return !1;
    for (var b = Ij(this.getDescriptor()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = d.g;
      if ((null != this.oa[e]) != (null != a.oa[e])) return !1;
      if (null != this.oa[e]) {
        var f = Gj(d),
          g = Nj(this, e);
        e = Nj(a, e);
        if (d.i) {
          if (g.length != e.length) return !1;
          for (d = 0; d < g.length; d++) {
            var h = g[d],
              l = e[d];
            if (f ? !h.V(l) : h != l) return !1;
          }
        } else if (f ? !g.V(e) : g != e) return !1;
      }
    }
    return !0;
  };
  var Oj = function (a, b) {
    for (var c = Ij(a.getDescriptor()), d = 0; d < c.length; d++) {
      var e = c[d],
        f = e.g;
      if (null != b.oa[f]) {
        a.g && delete a.g[e.g];
        var g = Gj(e);
        if (e.i) {
          e = Nj(b, f) || [];
          for (var h = 0; h < e.length; h++) Lj(a, f, g ? e[h].clone() : e[h]);
        } else (e = Nj(b, f)), g ? ((g = Nj(a, f)) ? Oj(g, e) : Kj(a, f, e.clone())) : Kj(a, f, e);
      }
    }
  };
  P.prototype.clone = function () {
    var a = new this.constructor();
    a != this && ((a.oa = {}), a.g && (a.g = {}), Oj(a, this));
    return a;
  };
  var Nj = function (a, b) {
      a = a.oa[b];
      return null == a ? null : a;
    },
    Jj = function (a, b, c) {
      var d = Nj(a, b);
      return a.h[b].i ? d[c || 0] : d;
    },
    Pj = function (a, b) {
      return a.h[b].i ? (null != a.oa[b] ? a.oa[b].length : 0) : null != a.oa[b] ? 1 : 0;
    },
    Kj = function (a, b, c) {
      a.oa[b] = c;
      a.g && (a.g[b] = c);
    },
    Lj = function (a, b, c) {
      a.oa[b] || (a.oa[b] = []);
      a.oa[b].push(c);
      a.g && delete a.g[b];
    },
    Mj = function (a, b) {
      delete a.oa[b];
      a.g && delete a.g[b];
    },
    Q = function (a, b) {
      var c = [],
        d = b[0],
        e;
      for (e in b) 0 != e && c.push(new Fj(e, b[e]));
      return new Hj(a, d, c);
    };
  var Qj = function () {};
  Qj.prototype.j = function (a, b) {
    Gj(a) && Rj(this, b);
  };
  Qj.prototype.i = function (a, b) {
    if (Gj(a)) return b instanceof P || ((a = new (a.j.prototype.getDescriptor().vd)()), qc(this, a, b), (b = a)), b;
    if (14 == a.h) return "string" === typeof b && Sj.test(b) && ((a = Number(b)), 0 < a) ? a : b;
    if (!a.l) return b;
    a = a.j;
    if (a === String) {
      if ("number" === typeof b) return String(b);
    } else if (a === Number && "string" === typeof b && ("Infinity" === b || "-Infinity" === b || "NaN" === b || Sj.test(b)))
      return Number(b);
    return b;
  };
  var Sj = /^-?[0-9]+$/;
  var Tj = function () {
    this.g = [];
    this.l = { value: 0, length: 0 };
    this.o = { value: Wf, length: 0 };
    this.h = new DataView(new ArrayBuffer(8));
  };
  E(Tj, Qj);
  var Rj = function (a, b) {
    if (null == b) return [];
    a.g = [];
    for (var c = Ij(b.getDescriptor()), d = 0; d < c.length; d++) {
      var e = c[d];
      if (b.has(e))
        if (e.i)
          if (e.o) {
            var f = a,
              g = b,
              h = e;
            e = f.g;
            Uj(f, (h.g << 3) | 2);
            for (var l = e.length, m = 0, p = Pj(g, h.g); m < p; m++) {
              var u = g.get(h, m);
              f.j(h, u, !0);
            }
            g = e.splice(l, e.length - l);
            Uj(f, g.length);
            e.splice.apply(e, [e.length, 0].concat(g));
          } else for (f = 0, g = Pj(b, e.g); f < g; f++) (h = b.get(e, f)), a.j(e, h);
        else a.j(e, b.get(e));
    }
    return a.g;
  };
  Tj.prototype.j = function (a, b, c) {
    if ((c = !c)) {
      a: {
        switch (a.h) {
          default:
            c = !1;
            break a;
          case 17:
          case 18:
          case 8:
          case 3:
          case 14:
          case 5:
          case 13:
          case 4:
            c = 0;
            break;
          case 6:
          case 16:
          case 1:
            c = 1;
            break;
          case 9:
          case 12:
          case 11:
            c = 2;
            break;
          case 10:
            c = 3;
            break;
          case 7:
          case 15:
          case 2:
            c = 5;
        }
        Uj(this, (a.g << 3) | c);
        c = !0;
      }
      c = !c;
    }
    if (!c)
      switch (a.h) {
        default:
          throw Error("J`" + a.h);
        case 17:
          Uj(this, (b << 1) ^ -(b >>> 31));
          break;
        case 18:
          a = ag(b);
          a = Vf(a, 1).xor(Of(Yf(a, 63)));
          Vj(this, a);
          break;
        case 8:
          Uj(this, b ? 1 : 0);
          break;
        case 5:
          0 < b ? Uj(this, b) : Vj(this, Zf(b));
          break;
        case 3:
        case 4:
          Vj(this, ag(b));
          break;
        case 14:
        case 13:
          Uj(this, b);
          break;
        case 6:
        case 16:
          Wj(this, ag(b), 8);
          break;
        case 1:
          this.h.setFloat64(0, b, !0);
          for (a = 0; 8 > a; a++) this.g.push(this.h.getUint8(a));
          break;
        case 9:
          if (null != b)
            for (a = unescape(encodeURIComponent(b)), Uj(this, a.length), b = 0; b < a.length; b++) this.g.push(a.charCodeAt(b));
          break;
        case 12:
          if (null != b) for (Uj(this, b.length), a = 0; a < b.length; a++) this.g.push(b.charCodeAt(a));
          break;
        case 10:
          b = Rj(new Tj(), b);
          Ca(this.g, b);
          Uj(this, (a.g << 3) | 4);
          break;
        case 11:
          b = Rj(new Tj(), b);
          Uj(this, b.length);
          Ca(this.g, b);
          break;
        case 7:
          Wj(this, Xf(b), 4);
          break;
        case 15:
          Wj(this, Zf(b), 4);
          break;
        case 2:
          for (this.h.setFloat32(0, b, !0), a = 0; 4 > a; a++) this.g.push(this.h.getUint8(a));
      }
  };
  var qc = function (a, b, c) {
    if (null != c) {
      c instanceof ArrayBuffer && (c = new Uint8Array(c));
      for (var d = b.getDescriptor(), e = 0; e < c.length; ) {
        var f = Xj(a, c.subarray(e)),
          g = f.value,
          h = g >> 3;
        g &= 7;
        e += f.length;
        if ((f = d.g[parseInt(h, 10)] || null))
          if (f.o)
            for (h = Xj(a, c.subarray(e)), g = h.value, e += h.length; 0 < g && e < c.length; ) {
              h = a.i(f, c.subarray(e));
              if (!h) throw Error("K`" + f.h);
              b.add(f, h.value);
              e += h.length;
              g -= h.length;
            }
          else {
            g = a.i(f, c.subarray(e));
            if (!g) throw Error("K`" + f.h);
            e += g.length;
            f.i ? b.add(f, g.value) : b.set(f, g.value);
          }
        else {
          f = e;
          h = a;
          e = c.subarray(e);
          var l = 0;
          switch (g) {
            case 0:
              l = Yj(h, e).length;
              break;
            case 1:
              l = 8;
              break;
            case 2:
              e = Yj(h, e);
              l = e.length + e.value.g;
              break;
            case 5:
              l = 4;
          }
          e = f + l;
        }
      }
    }
  };
  Tj.prototype.i = function (a, b) {
    var c = null,
      d = a.h,
      e = Yj(this, b),
      f = e.length;
    switch (d) {
      case 17:
        c = e.value.g;
        c = (c >>> 1) ^ -(c & 1);
        break;
      case 18:
        c = e.value;
        c = Yf(c, 1)
          .xor(Of(c.and(Tf)))
          .toString();
        break;
      case 8:
        c = e.value.V(Tf);
        break;
      case 3:
      case 4:
        c = e.value.toString();
        break;
      case 5:
        c = e.value.g;
        break;
      case 14:
      case 13:
        c = e.value.g >>> 0;
        break;
      case 6:
      case 16:
        c = b.subarray(0, 8);
        c = new Vb(Zj(c.subarray(0, 4), !0), Zj(c.subarray(4, 8), !0)).toString();
        f = 8;
        break;
      case 1:
        c = b.subarray(0, 8);
        for (b = 0; 8 > b; b++) this.h.setUint8(b, c[b]);
        c = this.h.getFloat64(0, !0);
        f = 8;
        break;
      case 9:
        c = b.subarray(e.length, e.length + e.value.g);
        c = ak(c);
        c = decodeURIComponent(escape(c));
        f = e.length + e.value.g;
        break;
      case 12:
        c = b.subarray(e.length, e.length + e.value.g);
        c = ak(c);
        f = e.length + e.value.g;
        break;
      case 10:
        f = c = new (a.j.prototype.getDescriptor().vd)();
        e = b;
        a = f.getDescriptor();
        for (d = 0; ; ) {
          var g = Xj(this, e),
            h = g.value;
          g = g.length;
          var l = h >> 3;
          if (4 == (h & 7)) break;
          d += g;
          h = { value: void 0, length: 0 };
          (l = a.g[parseInt(l, 10)] || null) &&
            (h = this.i(l, e.subarray(g))) &&
            null !== h.value &&
            (l.i ? f.add(l, h.value) : f.set(l, h.value));
          d += h.length;
          if (e.length < g + h.length) break;
          e = e.subarray(g + h.length);
        }
        f = d;
        b = Yj(this, b.subarray(f));
        f += b.length;
        break;
      case 11:
        f = e.length + e.value.g;
        b = b.subarray(e.length, f);
        c = new (a.j.prototype.getDescriptor().vd)();
        qc(this, c, b);
        break;
      case 7:
      case 15:
        c = Zj(b.subarray(0, 4), 15 == d);
        f = 4;
        break;
      case 2:
        c = b.subarray(0, 4);
        for (b = 0; 4 > b; b++) this.h.setUint8(b, c[b]);
        c = this.h.getFloat32(0, !0);
        f = 4;
    }
    return { value: c, length: f };
  };
  var Uj = function (a, b) {
      do {
        var c = b & 127;
        b >>>= 7;
        0 < b && (c |= 128);
        a.g.push(c);
      } while (0 < b);
    },
    Vj = function (a, b) {
      var c = Zf(127);
      do {
        var d = b.and(c).g;
        b = Yf(b, 7);
        0 < Rf(b, Wf) && (d |= 128);
        a.g.push(d);
      } while (0 < Rf(b, Wf));
    },
    Yj = function (a, b) {
      a = a.o;
      for (var c = Xf(0), d = 0; d < b.length && ((c = c.or(Vf(Zf(b[d] & 127), 7 * d))), 0 != (b[d] & 128)); d++);
      a.value = c;
      a.length = d + 1;
      return a;
    },
    Xj = function (a, b) {
      a = a.l;
      for (var c = 0, d = 0; d < b.length && ((c |= (b[d] & 127) << (7 * d)), 0 != (b[d] & 128)); d++);
      a.value = c;
      a.length = d + 1;
      return a;
    },
    Wj = function (a, b, c) {
      for (var d = Zf(255), e = 0; e < c; e++) {
        var f = b.and(d).g;
        a.g.push(f);
        b = Yf(b, 8);
      }
    },
    Zj = function (a, b) {
      for (var c = 0, d = 0; d < a.length; d++) c |= a[d] << (8 * d);
      b || (c >>>= 0);
      return c;
    },
    ak = function (a) {
      var b = "";
      a = new Uint16Array(a);
      for (var c = 0; c < a.length; c += 65536) b += String.fromCharCode.apply(null, a.subarray(c, c + Math.min(65536, a.length - c)));
      return b;
    };
  var rc = new Tj();
  var bk = { fi: 0, bi: 1, ei: 2, ci: 3, di: 4 },
    ck = function () {
      P.call(this);
    };
  G(ck, P);
  var dk = null,
    ek = function () {
      P.call(this);
    };
  G(ek, P);
  var fk = null,
    gk = function () {
      P.call(this);
    };
  G(gk, P);
  var hk = null,
    ik = function () {
      P.call(this);
    };
  G(ik, P);
  var jk = null;
  ck.prototype.getDescriptor = function () {
    var a = dk;
    a ||
      (dk = a =
        Q(ck, {
          0: { name: "IntPackedColor", I: "ink.proto.IntPackedColor" },
          1: { name: "argb", m: 13, type: Number },
          2: { name: "premultiplied", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  ck.getDescriptor = ck.prototype.getDescriptor;
  ek.prototype.getDescriptor = function () {
    var a = fk;
    a ||
      (fk = a =
        Q(ek, { 0: { name: "Point", I: "ink.proto.Point" }, 1: { name: "x", m: 2, type: Number }, 2: { name: "y", m: 2, type: Number } }));
    return a;
  };
  ek.getDescriptor = ek.prototype.getDescriptor;
  gk.prototype.getDescriptor = function () {
    var a = hk;
    a ||
      (hk = a =
        Q(gk, {
          0: { name: "Rect", I: "ink.proto.Rect" },
          1: { name: "xlow", m: 2, type: Number },
          2: { name: "xhigh", m: 2, type: Number },
          3: { name: "ylow", m: 2, type: Number },
          4: { name: "yhigh", m: 2, type: Number }
        }));
    return a;
  };
  gk.getDescriptor = gk.prototype.getDescriptor;
  ik.prototype.getDescriptor = function () {
    var a = jk;
    a ||
      (jk = a =
        Q(ik, {
          0: { name: "Transform", I: "ink.proto.Transform" },
          3: { name: "a", m: 2, defaultValue: 1, type: Number },
          6: { name: "b", m: 2, defaultValue: 0, type: Number },
          1: { name: "c", m: 2, defaultValue: 0, type: Number },
          7: { name: "d", m: 2, defaultValue: 0, type: Number },
          4: { name: "e", m: 2, defaultValue: 1, type: Number },
          2: { name: "f", m: 2, defaultValue: 0, type: Number },
          8: { name: "g", m: 2, defaultValue: 0, type: Number },
          9: { name: "h", m: 2, defaultValue: 0, type: Number },
          10: { name: "i", m: 2, defaultValue: 1, type: Number }
        }));
    return a;
  };
  ik.getDescriptor = ik.prototype.getDescriptor;
  var kk = { zg: 0, mh: 1, lh: 2, jh: 3, kh: 4, rg: 5, qg: 6, og: 7, pg: 8, dj: 9, cj: 10, aj: 11, bj: 12, Mi: 13 },
    lk = { yg: 0, LEFT: 1, gg: 2, RIGHT: 3, wh: 4 },
    mk = function () {
      P.call(this);
    };
  G(mk, P);
  var nk = null,
    ok = function () {
      P.call(this);
    };
  G(ok, P);
  var pk = null;
  ok.prototype.ka = function () {
    return Jj(this, 2);
  };
  var qk = function () {
    P.call(this);
  };
  G(qk, P);
  var rk = null;
  qk.prototype.getFont = function () {
    return Jj(this, 3);
  };
  qk.prototype.setFont = function (a) {
    Kj(this, 3, a);
  };
  qk.prototype.clearFont = function () {
    Mj(this, 3);
  };
  var sk = function () {
    P.call(this);
  };
  G(sk, P);
  var tk = null,
    uk = function () {
      P.call(this);
    };
  G(uk, P);
  var vk = null,
    wk = function () {
      P.call(this);
    };
  G(wk, P);
  var xk = null;
  wk.prototype.getFont = function () {
    return Jj(this, 3);
  };
  wk.prototype.setFont = function (a) {
    Kj(this, 3, a);
  };
  wk.prototype.clearFont = function () {
    Mj(this, 3);
  };
  mk.prototype.getDescriptor = function () {
    var a = nk;
    a ||
      (nk = a =
        Q(mk, {
          0: { name: "FontAttributes", I: "ink.proto.text.FontAttributes" },
          1: { name: "family", m: 9, type: String },
          2: { name: "is_italic", m: 8, type: Boolean },
          3: { name: "weight", m: 5, defaultValue: 400, type: Number }
        }));
    return a;
  };
  mk.getDescriptor = mk.prototype.getDescriptor;
  ok.prototype.getDescriptor = function () {
    var a = pk;
    a ||
      (pk = a =
        Q(ok, {
          0: { name: "Font", I: "ink.proto.text.Font" },
          1: { name: "postscript_font", m: 14, defaultValue: 0, type: kk },
          2: { name: "name", m: 9, type: String },
          5: { name: "attributes", m: 11, type: mk },
          3: { name: "asset_id", m: 9, type: String },
          4: { name: "resource_id", m: 13, type: Number }
        }));
    return a;
  };
  ok.getDescriptor = ok.prototype.getDescriptor;
  qk.prototype.getDescriptor = function () {
    var a = rk;
    a ||
      (rk = a =
        Q(qk, {
          0: { name: "Line", I: "ink.proto.text.Line" },
          1: { name: "text", m: 9, type: String },
          2: { name: "origin_fraction", m: 11, type: ek },
          3: { name: "font", m: 11, type: ok }
        }));
    return a;
  };
  qk.getDescriptor = qk.prototype.getDescriptor;
  sk.prototype.getDescriptor = function () {
    var a = tk;
    a || (tk = a = Q(sk, { 0: { name: "Layout", I: "ink.proto.text.Layout" }, 1: { name: "line", M: !0, m: 11, type: qk } }));
    return a;
  };
  sk.getDescriptor = sk.prototype.getDescriptor;
  uk.prototype.getDescriptor = function () {
    var a = vk;
    a ||
      (vk = a =
        Q(uk, {
          0: { name: "DropShadow", I: "ink.proto.text.DropShadow" },
          1: { name: "rgba", m: 13, type: Number },
          2: { name: "radius_fraction", m: 2, type: Number },
          3: { name: "dx_fraction", m: 2, type: Number },
          4: { name: "dy_fraction", m: 2, type: Number }
        }));
    return a;
  };
  uk.getDescriptor = uk.prototype.getDescriptor;
  wk.prototype.getDescriptor = function () {
    var a = xk;
    a ||
      (xk = a =
        Q(wk, {
          0: { name: "Text", I: "ink.proto.text.Text" },
          1: { name: "text", m: 9, type: String },
          3: { name: "font", m: 11, type: ok },
          4: { name: "font_size_fraction", m: 2, type: Number },
          5: { name: "rgba", m: 13, defaultValue: 255, type: Number },
          6: { name: "alignment", m: 14, defaultValue: 0, type: lk },
          7: { name: "shadow", m: 11, type: uk },
          8: { name: "layout", m: 11, type: sk },
          9: { name: "background_color", m: 11, type: ck },
          10: { name: "border_color", m: 11, type: ck },
          11: { name: "border_width_fraction", m: 2, type: Number },
          12: { name: "padding_fraction", m: 2, type: Number }
        }));
    return a;
  };
  wk.getDescriptor = wk.prototype.getDescriptor;
  var yk = { Ci: 0, Bi: 1, zi: 2, Ai: 3 },
    zk = { Ah: 0, Bh: 1, Ch: 2 },
    Ak = function () {
      P.call(this);
    };
  G(Ak, P);
  var Bk = null,
    Ck = { jj: 0, Aj: 1, POINTS: 2, Bj: 3, uj: 6, li: 4, mi: 5 },
    Hk = function () {
      P.call(this);
    };
  G(Hk, P);
  var Ik = null,
    Jk = function () {
      P.call(this);
    };
  G(Jk, P);
  var Kk = null,
    Lk = function () {
      P.call(this);
    };
  G(Lk, P);
  var Mk = null;
  Lk.prototype.getFont = function () {
    return Jj(this, 1);
  };
  Lk.prototype.setFont = function (a) {
    Kj(this, 1, a);
  };
  Lk.prototype.clearFont = function () {
    Mj(this, 1);
  };
  var Nk = function () {
    P.call(this);
  };
  G(Nk, P);
  var Ok = null,
    Pk = function () {
      P.call(this);
    };
  G(Pk, P);
  var Qk = null,
    Rk = { UNKNOWN: 0, bh: 1, Ii: 2, oi: 3, Zi: 4 },
    Sk = function () {
      P.call(this);
    };
  G(Sk, P);
  var Tk = null,
    Uk = { kj: 0, Ye: 1, Ze: 2 },
    Vk = function () {
      P.call(this);
    };
  G(Vk, P);
  var Wk = null,
    Xk = function () {
      P.call(this);
    };
  G(Xk, P);
  var Yk = null,
    Zk = function () {
      P.call(this);
    };
  G(Zk, P);
  var $k = null,
    al = function () {
      P.call(this);
    };
  G(al, P);
  var bl = null,
    cl = { ij: 0, cg: 1, sh: 2, Lh: 3, Yf: 4, ej: 15, Xg: 6, nh: 8, ji: 12, hg: 13, pi: 14 },
    dl = { ii: 0, gi: 1, hi: 2 },
    el = function () {
      P.call(this);
    };
  G(el, P);
  var fl = null,
    gl = function () {
      P.call(this);
    };
  G(gl, P);
  var hl = null,
    il = {
      UNKNOWN: 0,
      zh: 1,
      Dg: 2,
      Ih: 3,
      ti: 4,
      Zh: 5,
      ri: 7,
      sg: 8,
      Vi: 9,
      Ki: 10,
      Gi: 11,
      Zg: 12,
      TEXT: 13,
      Wi: 14,
      tg: 15,
      Hh: 16,
      Gh: 17,
      Fh: 18,
      yi: 19,
      Ti: 20,
      Di: 21,
      Ui: 22
    };
  Ak.prototype.getDescriptor = function () {
    var a = Bk;
    a ||
      (Bk = a =
        Q(Ak, {
          0: { name: "ToolSize", I: "ink.proto.ToolSize" },
          7: { name: "stroke_width", m: 2, type: Number },
          8: { name: "units", m: 14, defaultValue: 1, type: Ck }
        }));
    return a;
  };
  Ak.getDescriptor = Ak.prototype.getDescriptor;
  Hk.prototype.getDescriptor = function () {
    var a = Ik;
    a ||
      (Ik = a =
        Q(Hk, {
          0: { name: "PusherToolParams", I: "ink.proto.PusherToolParams" },
          3: { name: "manipulate_photos", m: 8, type: Boolean },
          1: { name: "manipulate_stickers", m: 8, type: Boolean },
          2: { name: "manipulate_text", m: 8, type: Boolean }
        }));
    return a;
  };
  Hk.getDescriptor = Hk.prototype.getDescriptor;
  Jk.prototype.getDescriptor = function () {
    var a = Kk;
    a ||
      (Kk = a =
        Q(Jk, {
          0: { name: "ShapeToolParams", I: "ink.proto.ShapeToolParams" },
          1: { name: "shape_kind", m: 14, defaultValue: 0, type: yk },
          2: { name: "fill_color", m: 11, type: ck },
          3: { name: "start_linecap", m: 14, defaultValue: 0, type: zk },
          4: { name: "end_linecap", m: 14, defaultValue: 0, type: zk }
        }));
    return a;
  };
  Jk.getDescriptor = Jk.prototype.getDescriptor;
  Lk.prototype.getDescriptor = function () {
    var a = Mk;
    a ||
      (Mk = a =
        Q(Lk, {
          0: { name: "TextToolParams", I: "ink.proto.TextToolParams" },
          1: { name: "font", m: 11, type: ok },
          2: { name: "alignment", m: 14, defaultValue: 0, type: lk },
          3: { name: "shadow", m: 11, type: Nk },
          4: { name: "background_color", m: 11, type: ck },
          5: { name: "border_color", m: 11, type: ck },
          6: { name: "edit_existing_text", m: 8, defaultValue: !0, type: Boolean },
          7: { name: "initial_width_on_screen", m: 2, type: Number },
          8: { name: "initial_height_on_screen", m: 2, type: Number }
        }));
    return a;
  };
  Lk.getDescriptor = Lk.prototype.getDescriptor;
  Nk.prototype.getDescriptor = function () {
    var a = Ok;
    a ||
      (Ok = a =
        Q(Nk, {
          0: { name: "TextToolShadowParams", I: "ink.proto.TextToolShadowParams" },
          1: { name: "color", m: 11, type: ck },
          2: { name: "radius_fraction_of_font_size", m: 2, type: Number },
          3: { name: "dx_fraction_of_font_size", m: 2, type: Number },
          4: { name: "dy_fraction_of_font_size", m: 2, type: Number }
        }));
    return a;
  };
  Nk.getDescriptor = Nk.prototype.getDescriptor;
  Pk.prototype.getDescriptor = function () {
    var a = Qk;
    a ||
      (Qk = a =
        Q(Pk, {
          0: { name: "TipShapeParams", I: "ink.proto.TipShapeParams" },
          1: { name: "size_ratio", m: 2, defaultValue: 1, type: Number },
          2: { name: "radius_behavior", m: 14, defaultValue: 1, type: Rk },
          3: { name: "max_radius_speed_cm_per_sec", m: 2, defaultValue: 200, type: Number },
          4: { name: "min_radius_speed_cm_per_sec", m: 2, defaultValue: 0, type: Number },
          5: { name: "size_drag_factor", m: 2, defaultValue: 0.85, type: Number }
        }));
    return a;
  };
  Pk.getDescriptor = Pk.prototype.getDescriptor;
  Sk.prototype.getDescriptor = function () {
    var a = Tk;
    a ||
      (Tk = a =
        Q(Sk, {
          0: { name: "CustomLineParams", I: "ink.proto.CustomLineParams" },
          3: { name: "tip_shape_params", m: 11, type: Pk },
          4: { name: "expand_small_strokes", m: 8, defaultValue: !1, type: Boolean },
          5: { name: "tip_type", m: 14, defaultValue: 1, type: Uk }
        }));
    return a;
  };
  Sk.getDescriptor = Sk.prototype.getDescriptor;
  Vk.prototype.getDescriptor = function () {
    var a = Wk;
    a ||
      (Wk = a =
        Q(Vk, {
          0: { name: "TextPusherToolParams", I: "ink.proto.TextPusherToolParams" },
          1: { name: "pusher_params", m: 11, type: Hk },
          2: { name: "text_params", m: 11, type: Lk }
        }));
    return a;
  };
  Vk.getDescriptor = Vk.prototype.getDescriptor;
  Xk.prototype.getDescriptor = function () {
    var a = Yk;
    a ||
      (Yk = a =
        Q(Xk, { 0: { name: "ShapeQueryToolParams", I: "ink.proto.ShapeQueryToolParams" }, 1: { name: "shape_params", m: 11, type: Jk } }));
    return a;
  };
  Xk.getDescriptor = Xk.prototype.getDescriptor;
  Zk.prototype.getDescriptor = function () {
    var a = $k;
    a ||
      ($k = a =
        Q(Zk, {
          0: { name: "LineEffectParams", I: "ink.proto.LineEffectParams" },
          1: { name: "texture_uri", m: 9, type: String },
          2: { name: "winding_texture_period", m: 11, type: Ak },
          3: { name: "u_animation_duration_seconds", m: 2, defaultValue: 0, type: Number },
          4: { name: "tiled_texture_scale", m: 2, defaultValue: 100, type: Number }
        }));
    return a;
  };
  Zk.getDescriptor = Zk.prototype.getDescriptor;
  al.prototype.getDescriptor = function () {
    var a = bl;
    a ||
      (bl = a =
        Q(al, {
          0: { name: "LineToolParams", I: "ink.proto.LineToolParams" },
          1: { name: "brush_type", m: 14, defaultValue: 0, type: cl },
          2: { name: "custom_line_params", m: 11, type: Sk },
          3: { name: "line_effect_params", m: 11, type: Zk },
          4: { name: "self_overlap", m: 14, defaultValue: 1, type: dl }
        }));
    return a;
  };
  al.getDescriptor = al.prototype.getDescriptor;
  el.prototype.getDescriptor = function () {
    var a = fl;
    a ||
      (fl = a =
        Q(el, {
          0: { name: "MagicEraserToolParams", I: "ink.proto.MagicEraserToolParams" },
          1: { name: "erase_text", m: 8, defaultValue: !0, type: Boolean },
          2: { name: "erase_invisible_elements", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  el.getDescriptor = el.prototype.getDescriptor;
  gl.prototype.getDescriptor = function () {
    var a = hl;
    a ||
      (hl = a =
        Q(gl, {
          0: { name: "ToolParams", I: "ink.proto.ToolParams" },
          1: { name: "tool", m: 14, defaultValue: 0, type: il },
          2: { name: "rgba", m: 13, type: Number },
          3: { name: "tool_size", m: 11, type: Ak },
          4: { name: "pusher_tool_params", m: 11, type: Hk },
          8: { name: "shape_tool_params", m: 11, type: Jk },
          7: { name: "text_tool_params", m: 11, type: Lk },
          5: { name: "line_tool_params", m: 11, type: al },
          21: { name: "text_pusher_tool_params", m: 11, type: Vk },
          10: { name: "shape_query_tool_params", m: 11, type: Xk },
          9: { name: "magic_eraser_tool_params", m: 11, type: el }
        }));
    return a;
  };
  gl.getDescriptor = gl.prototype.getDescriptor;
  var jl = { NONE: 0, rj: 1, sj: 7, Hi: 2, Wg: 3, tj: 4, Qf: 5, Pf: 6 },
    kl = function () {
      P.call(this);
    };
  G(kl, P);
  var ll = null,
    ml = function () {
      P.call(this);
    };
  G(ml, P);
  var nl = null,
    ol = function () {
      P.call(this);
    };
  G(ol, P);
  var pl = null,
    ql = function () {
      P.call(this);
    };
  G(ql, P);
  var rl = null,
    sl = function () {
      P.call(this);
    };
  G(sl, P);
  var tl = null,
    ul = function () {
      P.call(this);
    };
  G(ul, P);
  var vl = null,
    wl = function () {
      P.call(this);
    };
  G(wl, P);
  var xl = null,
    yl = { UNKNOWN: 0, yh: 1 },
    zl = function () {
      P.call(this);
    };
  G(zl, P);
  var Al = null,
    Bl = function () {
      P.call(this);
    };
  G(Bl, P);
  var Cl = null;
  Bl.prototype.C = function () {
    return Jj(this, 2);
  };
  var Dl = function () {
    P.call(this);
  };
  G(Dl, P);
  var El = null,
    Fl = function () {
      P.call(this);
    };
  G(Fl, P);
  var Gl = null,
    Hl = function () {
      P.call(this);
    };
  G(Hl, P);
  var Il = null,
    Jl = { UNKNOWN: 0, Rh: 1, Dh: 2, ug: 3, si: 4, ng: 5 },
    Kl = { bg: 1, Ye: 2, Ze: 3 };
  kl.prototype.getDescriptor = function () {
    var a = ll;
    a ||
      (ll = a =
        Q(kl, {
          0: { name: "BackgroundImageInfo", I: "ink.proto.BackgroundImageInfo" },
          1: { name: "uri", m: 9, type: String },
          3: { name: "bounds", m: 11, type: gk }
        }));
    return a;
  };
  kl.getDescriptor = kl.prototype.getDescriptor;
  ml.prototype.getDescriptor = function () {
    var a = nl;
    a ||
      (nl = a =
        Q(ml, {
          0: { name: "GridInfo", I: "ink.proto.GridInfo" },
          1: { name: "uri", m: 9, type: String },
          2: { name: "rgba_multiplier", m: 13, defaultValue: 4294967295, type: Number },
          3: { name: "size_world", m: 2, defaultValue: 50, type: Number },
          4: { name: "origin", m: 11, type: ek }
        }));
    return a;
  };
  ml.getDescriptor = ml.prototype.getDescriptor;
  ol.prototype.getDescriptor = function () {
    var a = pl;
    a ||
      (pl = a =
        Q(ol, {
          0: { name: "LOD", I: "ink.proto.LOD" },
          1: { name: "max_coverage", m: 2, type: Number },
          2: { name: "ctm_blob", m: 12, type: String },
          4: { name: "ctm_scale_factor", m: 2, type: Number },
          3: { name: "draco_blob", m: 12, type: String }
        }));
    return a;
  };
  ol.getDescriptor = ol.prototype.getDescriptor;
  ql.prototype.getDescriptor = function () {
    var a = rl;
    a ||
      (rl = a =
        Q(ql, {
          0: { name: "Stroke", I: "ink.proto.Stroke" },
          1: { name: "shader_type", m: 14, defaultValue: 0, type: jl },
          3: { name: "lod", M: !0, m: 11, type: ol },
          4: { name: "abgr", m: 13, type: Number },
          5: { name: "point_x", M: !0, xd: !0, m: 17, type: Number },
          6: { name: "point_y", M: !0, xd: !0, m: 17, type: Number },
          7: { name: "point_t_ms", M: !0, xd: !0, m: 13, type: Number },
          8: { name: "deprecated_transform", m: 11, type: ik },
          9: { name: "start_time_ms", m: 4, type: String },
          10: { name: "u_animation_duration_seconds", m: 2, type: Number }
        }));
    return a;
  };
  ql.getDescriptor = ql.prototype.getDescriptor;
  sl.prototype.getDescriptor = function () {
    var a = tl;
    a ||
      (tl = a =
        Q(sl, {
          0: { name: "UncompressedStroke", I: "ink.proto.UncompressedStroke" },
          1: { name: "outline", M: !0, m: 11, type: ek },
          2: { name: "rgba", m: 13, type: Number }
        }));
    return a;
  };
  sl.getDescriptor = sl.prototype.getDescriptor;
  ul.prototype.getDescriptor = function () {
    var a = vl;
    a ||
      (vl = a =
        Q(ul, {
          0: { name: "Element", I: "ink.proto.Element" },
          4: { name: "deprecated_uuid", m: 9, type: String },
          5: { name: "minimum_serializer_version", m: 13, type: Number },
          6: { name: "stroke", m: 11, type: ql },
          9: { name: "path", m: 11, type: Hl },
          10: { name: "attributes", m: 11, type: wl },
          11: { name: "text", m: 11, type: wk },
          12: { name: "composite_image_info", m: 11, type: Dl },
          13: { name: "tool_params", m: 11, type: gl },
          14: { name: "shape_spec", m: 11, type: Fl }
        }));
    return a;
  };
  ul.getDescriptor = ul.prototype.getDescriptor;
  wl.prototype.getDescriptor = function () {
    var a = xl;
    a ||
      (xl = a =
        Q(wl, {
          0: { name: "ElementAttributes", I: "ink.proto.ElementAttributes" },
          1: { name: "selectable", m: 8, defaultValue: !0, type: Boolean },
          2: { name: "magic_erasable", m: 8, defaultValue: !0, type: Boolean },
          3: { name: "is_sticker", m: 8, defaultValue: !1, type: Boolean },
          10: { name: "is_photo", m: 8, defaultValue: !1, type: Boolean },
          4: { name: "is_text", m: 8, defaultValue: !1, type: Boolean },
          5: { name: "is_group", m: 8, defaultValue: !1, type: Boolean },
          6: { name: "is_zoomable", m: 8, defaultValue: !1, type: Boolean },
          7: { name: "group_type", m: 14, defaultValue: 0, type: yl },
          9: { name: "is_split_text", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  wl.getDescriptor = wl.prototype.getDescriptor;
  zl.prototype.getDescriptor = function () {
    var a = Al;
    a ||
      (Al = a =
        Q(zl, {
          0: { name: "UncompressedElement", I: "ink.proto.UncompressedElement" },
          1: { name: "uncompressed_stroke", m: 11, type: sl }
        }));
    return a;
  };
  zl.getDescriptor = zl.prototype.getDescriptor;
  Bl.prototype.getDescriptor = function () {
    var a = Cl;
    a ||
      (Cl = a =
        Q(Bl, {
          0: { name: "ElementBundle", I: "ink.proto.ElementBundle" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "element", m: 11, type: ul },
          3: { name: "transform", m: 11, type: ik },
          4: { name: "uncompressed_element", m: 11, type: zl },
          5: { name: "group_uuid", m: 9, type: String },
          6: { name: "visibility", m: 8, defaultValue: !0, type: Boolean },
          7: { name: "opacity", m: 5, defaultValue: 255, type: Number }
        }));
    return a;
  };
  Bl.getDescriptor = Bl.prototype.getDescriptor;
  Dl.prototype.getDescriptor = function () {
    var a = El;
    a ||
      (El = a =
        Q(Dl, {
          0: { name: "CompositeImageInfo", I: "ink.proto.CompositeImageInfo" },
          1: { name: "composite_image_uri", m: 9, type: String },
          2: { name: "object_rect", m: 11, type: gk }
        }));
    return a;
  };
  Dl.getDescriptor = Dl.prototype.getDescriptor;
  Fl.prototype.getDescriptor = function () {
    var a = Gl;
    a ||
      (Gl = a =
        Q(Fl, {
          0: { name: "ShapeSpec", I: "ink.proto.ShapeSpec" },
          1: { name: "kind", m: 14, defaultValue: 0, type: yk },
          2: { name: "control_point", M: !0, m: 11, type: ek },
          6: { name: "start_linecap", m: 14, defaultValue: 0, type: zk },
          7: { name: "end_linecap", m: 14, defaultValue: 0, type: zk },
          3: { name: "fill_color", m: 11, type: ck },
          4: { name: "stroke_color", m: 11, type: ck },
          5: { name: "stroke_width_world", m: 2, type: Number }
        }));
    return a;
  };
  Fl.getDescriptor = Fl.prototype.getDescriptor;
  Hl.prototype.getDescriptor = function () {
    var a = Il;
    a ||
      (Il = a =
        Q(Hl, {
          0: { name: "Path", I: "ink.proto.Path" },
          1: { name: "segment_types", M: !0, m: 14, defaultValue: 0, type: Jl },
          2: { name: "segment_counts", M: !0, m: 13, type: Number },
          3: { name: "segment_args", M: !0, m: 1, type: Number },
          4: { name: "radius", m: 1, defaultValue: 1, type: Number },
          5: { name: "rgba", m: 13, type: Number },
          6: { name: "tip_type", m: 14, defaultValue: 2, type: Kl },
          7: { name: "fill_rgba", m: 13, type: Number }
        }));
    return a;
  };
  Hl.getDescriptor = Hl.prototype.getDescriptor;
  var Ll = { Nf: 1, wg: 2 },
    Ml = function () {
      P.call(this);
    };
  G(Ml, P);
  var Nl = null,
    Ol = function () {
      P.call(this);
    };
  G(Ol, P);
  var Pl = null;
  Ol.prototype.setHeight = function (a) {
    Kj(this, 3, a);
  };
  var Ql = function () {
    P.call(this);
  };
  G(Ql, P);
  var Rl = null,
    Sl = function () {
      P.call(this);
    };
  G(Sl, P);
  var Tl = null,
    Ul = function () {
      P.call(this);
    };
  G(Ul, P);
  var Vl = null,
    Wl = function () {
      P.call(this);
    };
  G(Wl, P);
  var Xl = null,
    Yl = function () {
      P.call(this);
    };
  G(Yl, P);
  var Zl = null,
    $l = function () {
      P.call(this);
    };
  G($l, P);
  var am = null,
    bm = function () {
      P.call(this);
    };
  G(bm, P);
  var cm = null,
    dm = function () {
      P.call(this);
    };
  G(dm, P);
  var em = null,
    fm = function () {
      P.call(this);
    };
  G(fm, P);
  var gm = null,
    hm = function () {
      P.call(this);
    };
  G(hm, P);
  var im = null,
    jm = function () {
      P.call(this);
    };
  G(jm, P);
  var km = null,
    lm = function () {
      P.call(this);
    };
  G(lm, P);
  var mm = null,
    nm = function () {
      P.call(this);
    };
  G(nm, P);
  var om = null,
    pm = function () {
      P.call(this);
    };
  G(pm, P);
  var qm = null,
    rm = function () {
      P.call(this);
    };
  G(rm, P);
  var sm = null,
    tm = function () {
      P.call(this);
    };
  G(tm, P);
  var um = null;
  tm.prototype.C = function (a) {
    return Jj(this, 2, a);
  };
  var vm = function () {
    P.call(this);
  };
  G(vm, P);
  var wm = null;
  vm.prototype.C = function (a) {
    return Jj(this, 2, a);
  };
  Ml.prototype.getDescriptor = function () {
    var a = Nl;
    a ||
      (Nl = a =
        Q(Ml, {
          0: { name: "PageProperties", I: "ink.proto.PageProperties" },
          1: { name: "background_color", m: 11, type: ck },
          2: { name: "background_image", m: 11, type: kl },
          3: { name: "bounds", m: 11, type: gk },
          5: { name: "grid_info", m: 11, type: ml }
        }));
    return a;
  };
  Ml.getDescriptor = Ml.prototype.getDescriptor;
  Ol.prototype.getDescriptor = function () {
    var a = Pl;
    a ||
      (Pl = a =
        Q(Ol, {
          0: { name: "PerPageProperties", I: "ink.proto.PerPageProperties" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "width", m: 2, type: Number },
          3: { name: "height", m: 2, type: Number },
          4: { name: "orientation", m: 14, defaultValue: 0, type: bk }
        }));
    return a;
  };
  Ol.getDescriptor = Ol.prototype.getDescriptor;
  Ql.prototype.getDescriptor = function () {
    var a = Rl;
    a ||
      (Rl = a =
        Q(Ql, {
          0: { name: "AddAction", I: "ink.proto.AddAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "below_element_with_uuid", m: 9, type: String }
        }));
    return a;
  };
  Ql.getDescriptor = Ql.prototype.getDescriptor;
  Sl.prototype.getDescriptor = function () {
    var a = Tl;
    a ||
      (Tl = a =
        Q(Sl, {
          0: { name: "AddMultipleAction", I: "ink.proto.AddMultipleAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "below_element_with_uuid", m: 9, type: String }
        }));
    return a;
  };
  Sl.getDescriptor = Sl.prototype.getDescriptor;
  Ul.prototype.getDescriptor = function () {
    var a = Vl;
    a ||
      (Vl = a =
        Q(Ul, {
          0: { name: "RemoveAction", I: "ink.proto.RemoveAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "was_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  Ul.getDescriptor = Ul.prototype.getDescriptor;
  Wl.prototype.getDescriptor = function () {
    var a = Xl;
    a ||
      (Xl = a =
        Q(Wl, {
          0: { name: "ReplaceAction", I: "ink.proto.ReplaceAction" },
          1: { name: "removed_uuid", M: !0, m: 9, type: String },
          2: { name: "removed_was_below_uuid", M: !0, m: 9, type: String },
          3: { name: "added_uuid", M: !0, m: 9, type: String },
          4: { name: "added_was_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  Wl.getDescriptor = Wl.prototype.getDescriptor;
  Yl.prototype.getDescriptor = function () {
    var a = Zl;
    a || (Zl = a = Q(Yl, { 0: { name: "ClearAction", I: "ink.proto.ClearAction" }, 1: { name: "uuid", M: !0, m: 9, type: String } }));
    return a;
  };
  Yl.getDescriptor = Yl.prototype.getDescriptor;
  $l.prototype.getDescriptor = function () {
    var a = am;
    a ||
      (am = a =
        Q($l, {
          0: { name: "SetTransformAction", I: "ink.proto.SetTransformAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_transform", M: !0, m: 11, type: ik },
          3: { name: "to_transform", M: !0, m: 11, type: ik }
        }));
    return a;
  };
  $l.getDescriptor = $l.prototype.getDescriptor;
  bm.prototype.getDescriptor = function () {
    var a = cm;
    a ||
      (cm = a =
        Q(bm, {
          0: { name: "SetBackgroundColorAction", I: "ink.proto.SetBackgroundColorAction" },
          1: { name: "old_background_color", m: 11, type: ck },
          2: { name: "new_background_color", m: 11, type: ck }
        }));
    return a;
  };
  bm.getDescriptor = bm.prototype.getDescriptor;
  dm.prototype.getDescriptor = function () {
    var a = em;
    a ||
      (em = a =
        Q(dm, {
          0: { name: "SetPageBoundsAction", I: "ink.proto.SetPageBoundsAction" },
          1: { name: "old_bounds", m: 11, type: gk },
          2: { name: "new_bounds", m: 11, type: gk }
        }));
    return a;
  };
  dm.getDescriptor = dm.prototype.getDescriptor;
  fm.prototype.getDescriptor = function () {
    var a = gm;
    a ||
      (gm = a =
        Q(fm, {
          0: { name: "SetVisibilityAction", I: "ink.proto.SetVisibilityAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "to_visibility", M: !0, m: 8, type: Boolean },
          3: { name: "from_visibility", M: !0, m: 8, type: Boolean }
        }));
    return a;
  };
  fm.getDescriptor = fm.prototype.getDescriptor;
  hm.prototype.getDescriptor = function () {
    var a = im;
    a ||
      (im = a =
        Q(hm, {
          0: { name: "SetColorAction", I: "ink.proto.SetColorAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "old_color", m: 11, type: ck },
          3: { name: "new_color", m: 11, type: ck }
        }));
    return a;
  };
  hm.getDescriptor = hm.prototype.getDescriptor;
  jm.prototype.getDescriptor = function () {
    var a = km;
    a ||
      (km = a =
        Q(jm, {
          0: { name: "SetOpacityAction", I: "ink.proto.SetOpacityAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_opacity", M: !0, m: 5, type: Number },
          3: { name: "to_opacity", M: !0, m: 5, type: Number }
        }));
    return a;
  };
  jm.getDescriptor = jm.prototype.getDescriptor;
  lm.prototype.getDescriptor = function () {
    var a = mm;
    a ||
      (mm = a =
        Q(lm, {
          0: { name: "ChangeZOrderAction", I: "ink.proto.ChangeZOrderAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_below_uuid", M: !0, m: 9, type: String },
          3: { name: "to_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  lm.getDescriptor = lm.prototype.getDescriptor;
  nm.prototype.getDescriptor = function () {
    var a = om;
    a ||
      (om = a =
        Q(nm, {
          0: { name: "UpdateTextAction", I: "ink.proto.UpdateTextAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "old_text", m: 11, type: wk },
          3: { name: "old_transform", m: 11, type: ik },
          4: { name: "new_text", m: 11, type: wk },
          5: { name: "new_transform", m: 11, type: ik }
        }));
    return a;
  };
  nm.getDescriptor = nm.prototype.getDescriptor;
  pm.prototype.getDescriptor = function () {
    var a = qm;
    a ||
      (qm = a =
        Q(pm, {
          0: { name: "SetParentsAction", I: "ink.proto.SetParentsAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "old_parent_uuid", M: !0, m: 9, type: String },
          3: { name: "old_transform", M: !0, m: 11, type: ik },
          4: { name: "new_parent_uuid", M: !0, m: 9, type: String },
          5: { name: "new_transform", M: !0, m: 11, type: ik }
        }));
    return a;
  };
  pm.getDescriptor = pm.prototype.getDescriptor;
  rm.prototype.getDescriptor = function () {
    var a = sm;
    a ||
      (sm = a =
        Q(rm, {
          0: { name: "StorageAction", I: "ink.proto.StorageAction" },
          1: { name: "add_action", m: 11, type: Ql },
          2: { name: "remove_action", m: 11, type: Ul },
          3: { name: "clear_action", m: 11, type: Yl },
          5: { name: "set_transform_action", m: 11, type: $l },
          6: { name: "set_page_bounds_action", m: 11, type: dm },
          7: { name: "add_multiple_action", m: 11, type: Sl },
          8: { name: "set_visibility_action", m: 11, type: fm },
          16: { name: "set_color_action", m: 11, type: hm },
          9: { name: "set_opacity_action", m: 11, type: jm },
          10: { name: "change_z_order_action", m: 11, type: lm },
          12: { name: "replace_action", m: 11, type: Wl },
          13: { name: "set_background_color_action", m: 11, type: bm },
          14: { name: "update_text_action", m: 11, type: nm },
          15: { name: "set_parents_action", m: 11, type: pm }
        }));
    return a;
  };
  rm.getDescriptor = rm.prototype.getDescriptor;
  tm.prototype.getDescriptor = function () {
    var a = um;
    a ||
      (um = a =
        Q(tm, {
          0: { name: "Snapshot", I: "ink.proto.Snapshot" },
          1: { name: "page_properties", m: 11, type: Ml },
          8: { name: "per_page_properties", M: !0, m: 11, type: Ol },
          2: { name: "element", M: !0, m: 11, type: Bl },
          3: { name: "dead_element", M: !0, m: 11, type: Bl },
          4: { name: "undo_action", M: !0, m: 11, type: rm },
          5: { name: "redo_action", M: !0, m: 11, type: rm },
          6: { name: "element_state_index", M: !0, m: 14, defaultValue: 1, type: Ll },
          7: { name: "fingerprint", m: 4, type: String },
          9: { name: "active_layer_uuid", m: 9, type: String }
        }));
    return a;
  };
  tm.getDescriptor = tm.prototype.getDescriptor;
  vm.prototype.getDescriptor = function () {
    var a = wm;
    a ||
      (wm = a =
        Q(vm, {
          0: { name: "MutationPacket", I: "ink.proto.MutationPacket" },
          1: { name: "mutation", M: !0, m: 11, type: rm },
          2: { name: "element", M: !0, m: 11, type: Bl },
          3: { name: "page_properties", m: 11, type: Ml }
        }));
    return a;
  };
  vm.getDescriptor = vm.prototype.getDescriptor;
  var xm = function (a) {
      this.j = this.s = "";
      this.R = this.u = this.F = this.S = this.Z = this.ba = null;
      this.N = "";
      this.i = null;
      this.o = this.A = "";
      this.g = "unknown";
      this.D = this.U = this.B = this.H = this.G = null;
      this.pa = "unknown";
      this.ca = null;
      this.v = this.l = "";
      this.h = "u";
      this.update(a);
    },
    ym = function (a) {
      var b = {};
      b.blob_id = "local-" + new Date().getTime();
      b.state = "l";
      b.type = "IMAGE";
      a && (b.mimetype = a);
      return new xm(b);
    },
    zm = function (a) {
      return 0 == a.lastIndexOf("image", 0) ? "IMAGE" : 0 == a.lastIndexOf("audio", 0) ? "AUDIO" : "unknown";
    };
  xm.prototype.getType = function () {
    return this.g;
  };
  var Am = function (a) {
      "unknown" == a.g && (a.g = zm(a.o));
      return "IMAGE" == a.g;
    },
    Bm = function (a) {
      return "DRAWING" == a.g;
    },
    Cm = function (a) {
      return "IMAGE" == a.g && (!!a.j || !!a.v);
    };
  xm.prototype.isError = function () {
    return "luf" == this.h;
  };
  xm.prototype.setHeight = function (a) {
    this.B = a;
  };
  var Dm = function (a, b) {
    b != a.h && (!a.A || ("s" != b && "luc" != b) || (a.A = ""), (a.h = b));
  };
  xm.prototype.update = function (a) {
    var b = !1;
    for (g in a)
      switch (g) {
        case "media_id":
        case "blob_id":
          b = b || this.s != a[g];
          this.s = a[g];
          ("s" == this.h || (this.i && "s" == this.i.h)) && 0 != this.s.lastIndexOf("local-", 0) && (this.l = "");
          break;
        case "mimetype":
          b = b || this.o != a[g];
          this.o = a.mimetype;
          break;
        case "type":
          b = b || this.g != a[g];
          this.g = a.type;
          break;
        case "byte_size":
          b = b || this.G != a[g];
          this.G = a.byte_size;
          break;
        case "width":
          b = b || this.H != a[g];
          this.H = a.width;
          break;
        case "height":
          b = b || this.B != a[g];
          this.B = a.height;
          break;
        case "length":
          b = b || this.U != a[g];
          this.U = a.length;
          break;
        case "extracted_text":
          b = b || this.D != a[g];
          this.D = a.extracted_text;
          break;
        case "extraction_status":
          b = b || this.pa != a[g];
          this.pa = a.extraction_status;
          break;
        case "source_uri":
          b = b || this.ca != a[g];
          this.ca = a.source_uri;
          break;
        case "drawingInfo":
          var c = void 0,
            d = a.drawingInfo,
            e = !1;
          for (c in d)
            switch (c) {
              case "drawingId":
                e = e || this.j != d[c];
                this.j = d.drawingId;
                break;
              case "encodedSnapshotProto":
                var f = d.encodedSnapshotProto;
                "string" === typeof f && (f = sc(new tm(), f));
                this.u = f;
                Jj(this.u, 7) && (this.F = Jj(this.u, 7));
                break;
              case "encodedPendingMutations":
                f = d.encodedPendingMutations;
                "string" === typeof f && (f = sc(new vm(), f));
                this.R = f;
                break;
              case "inkHash":
                e = e || this.N != d[c];
                this.N = d.inkHash;
                break;
              case "localSnapshotFingerprint":
                e = e || this.F != d[c];
                this.F = d.localSnapshotFingerprint;
                break;
              case "serverSnapshotFingerprint":
                e = e || this.S != d[c];
                this.S = d.serverSnapshotFingerprint;
                break;
              case "snapshotData":
                this.i ? (e = this.i.update(d.snapshotData) || e) : ((this.i = new xm(d.snapshotData)), (e = !0));
                break;
              case "snapshotFingerprint":
                e = e || this.ba != d[c];
                this.ba = d.snapshotFingerprint;
                break;
              case "snapshotProtoFprint":
                (f = (f = d[c]) ? ag(f).toString() : null), (e = e || this.Z != f), (this.Z = f);
            }
          b = e || b;
          break;
        case "local_data":
          b = b || this.l != a[g];
          this.l = a.local_data;
          break;
        case "localDrawingThumbnailData":
          b = b || this.v != a[g];
          this.v = a.localDrawingThumbnailData;
          break;
        case "filename":
          (b = b || this.A != a[g]), (this.A = a.filename);
      }
    var g = this.h;
    c = void 0;
    void 0 !== a.state && (c = a.state);
    void 0 !== a.is_uploaded && (a.is_uploaded ? (c = "s") : "u" == g && (c = "ur"));
    void 0 !== c && c != g ? ((this.h = c), (a = !0)) : (a = !1);
    this.g || (this.g = zm(this.o));
    return a || b;
  };
  var Em = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c = {};
      c = ((c.mimetype = a.o), (c.type = a.g), (c.width = a.H), (c.height = a.B), c);
      c.kind = "notes#blob";
      a.s && (c.media_id = a.s);
      c.byte_size = a.G;
      c.length = a.U;
      c.extracted_text = a.D;
      c.extraction_status = a.pa;
      c.source_uri = a.ca;
      c.state = a.h;
      if (Bm(a) || (Cm(a) && a.j)) {
        var d = {};
        d.drawingId = a.j;
        a.i && (d.snapshotData = Em(a.i));
        d.snapshotFingerprint = a.ba;
        d.inkHash = a.N;
        c.drawingInfo = d;
        b &&
          (a.v && (c.localDrawingThumbnailData = a.v),
          a.u && (d.encodedSnapshotProto = Ja(Rj(rc, a.u))),
          a.R && (d.encodedPendingMutations = Ja(Rj(rc, a.R))),
          (d.localSnapshotFingerprint = a.F),
          (d.serverSnapshotFingerprint = a.S),
          (d.snapshotProtoFprint = a.Z));
      }
      a.l && (c.local_data = a.l);
      "s" == a.h || (a.i && "s" == a.i.h) || (c.filename = a.A);
      return c;
    },
    Fm = function (a) {
      var b = {};
      b = ((b.mimetype = a.o), (b.type = a.g), b);
      if (Bm(a) || (Cm(a) && a.j)) {
        var c = {};
        b.drawingInfo = ((c.drawingId = a.j), c);
      }
      return b;
    };
  var Gm = function () {
    fj.call(this, "l");
  };
  E(Gm, fj);
  var R = function () {
    M.call(this);
    this.Ja = new oj(this);
    this.af = this;
    this.Vb = null;
  };
  G(R, M);
  R.prototype[jj] = !0;
  k = R.prototype;
  k.sa = function (a) {
    this.Vb = a;
  };
  k.addEventListener = function (a, b, c, d) {
    vj(this, a, b, c, d);
  };
  k.removeEventListener = function (a, b, c, d) {
    Cj(this, a, b, c, d);
  };
  k.dispatchEvent = function (a) {
    var b,
      c = this.Vb;
    if (c) for (b = []; c; c = c.Vb) b.push(c);
    c = this.af;
    var d = a.type || a;
    if ("string" === typeof a) a = new fj(a, c);
    else if (a instanceof fj) a.target = a.target || c;
    else {
      var e = a;
      a = new fj(d, c);
      mc(a, e);
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; !a.j && 0 <= f; f--) {
        var g = (a.i = b[f]);
        e = Hm(g, d, !0, a) && e;
      }
    a.j || ((g = a.i = c), (e = Hm(g, d, !0, a) && e), a.j || (e = Hm(g, d, !1, a) && e));
    if (b) for (f = 0; !a.j && f < b.length; f++) (g = a.i = b[f]), (e = Hm(g, d, !1, a) && e);
    return e;
  };
  k.K = function () {
    R.O.K.call(this);
    this.Ja && this.Ja.removeAll(void 0);
    this.Vb = null;
  };
  k.listen = function (a, b, c, d) {
    return this.Ja.add(String(a), b, !1, c, d);
  };
  k.td = function (a, b, c, d) {
    return this.Ja.add(String(a), b, !0, c, d);
  };
  k.X = function (a, b, c, d) {
    return this.Ja.remove(String(a), b, c, d);
  };
  var Hm = function (a, b, c, d) {
    b = a.Ja.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.removed && g.capture == c) {
        var h = g.listener,
          l = g.oc || g.src;
        g.hc && qj(a.Ja, g);
        e = !1 !== h.call(l, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  R.prototype.Ob = function (a, b, c, d) {
    return this.Ja.Ob(String(a), b, c, d);
  };
  R.prototype.hasListener = function (a, b) {
    return this.Ja.hasListener(void 0 !== a ? String(a) : void 0, b);
  };
  var Im = function (a) {
    R.call(this);
    this.Wa = null;
    this.Oa = [];
    this.update(a);
  };
  E(Im, R);
  Im.prototype.V = function (a) {
    return this.Wa != a.Wa || this.Oa.length != a.Oa.length
      ? !1
      : De(
          this.Oa,
          function (b) {
            return va(a.Oa, b);
          },
          this
        );
  };
  Im.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a)
      switch (c) {
        case "code":
          var d = a[c];
          b = b || this.Wa != d;
          this.Wa = d;
          break;
        case "emails":
          b ||
            (b = a[c].length != this.Oa.length) ||
            (b = Ce(
              a[c],
              function (e) {
                return !va(this.Oa, e);
              },
              this
            )),
            (this.Oa = a[c]);
      }
    return b;
  };
  var Jm = function (a) {
    a = void 0 === a ? {} : a;
    R.call(this);
    this.h = "EXPANDED";
    this.g = !1;
    this.update(a);
  };
  E(Jm, R);
  Jm.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a)
      switch (c) {
        case "graveyardState":
          (b = b || this.h != a[c]), (this.h = a[c]);
      }
    b && this.dispatchEvent("y");
    return b;
  };
  var Km = function (a) {
    var b = {};
    b = ((b.graveyardState = a.h), b);
    b.dirty = a.g;
    return b;
  };
  var Lm = function (a, b) {
    b = void 0 === b ? null : b;
    fj.call(this, "t");
    this.parentId = b;
  };
  E(Lm, fj);
  var Mm = function (a) {
    Qh.call(this, 0);
    this.j = !1;
    this.i = null;
    this.h = void 0;
    a && this.update(a);
  };
  E(Mm, Qh);
  Mm.prototype.update = function (a) {
    var b = a.time;
    b && ((a.hour = b.hour), (a.minute = b.minute), (a.second = b.second));
    (b = a.period) && !a.hour && (a.hour = Nm[b.toUpperCase()] || Nm.MORNING);
    b = !1;
    void 0 !== a.absoluteTimeMs
      ? ((b = b || this.h != a.absoluteTimeMs), (this.h = a.absoluteTimeMs))
      : void 0 !== this.h && ((this.h = void 0), (b = !0));
    for (var c in a) {
      var d = a[c];
      switch (c) {
        case "year":
          b = b || d != this.getFullYear();
          this.g.setFullYear(d);
          break;
        case "month":
          --d;
          b = b || d != this.getMonth();
          this.g.setMonth(d);
          break;
        case "day":
          b = b || d != this.getDate();
          this.g.setDate(d);
          break;
        case "hour":
          b = b || d != this.getHours();
          this.g.setHours(d);
          break;
        case "minute":
          b = b || d != this.getMinutes();
          this.g.setMinutes(d);
          break;
        case "second":
          b = b || d != this.getSeconds();
          this.g.setSeconds(d);
          break;
        case "period":
          (b = b || d != this.i), (this.i = d);
      }
    }
    b = b || this.j != !!a.unspecifiedFutureTime;
    this.j = !!a.unspecifiedFutureTime;
    return b;
  };
  var Om = function (a) {
    var b = {};
    if (a.j) return (b.unspecifiedFutureTime = !0), b;
    b.year = a.getFullYear();
    b.month = a.getMonth() + 1;
    b.day = a.getDate();
    var c = {};
    c.hour = a.getHours();
    c.minute = a.getMinutes();
    c.second = a.getSeconds();
    b.time = c;
    a.i && (b.period = a.i);
    void 0 !== a.h && (b.absoluteTimeMs = a.h);
    return b;
  };
  Mm.prototype.clone = function () {
    return new Mm(Om(this));
  };
  var Pm = {},
    Nm = ((Pm.MORNING = 9), (Pm.AFTERNOON = 13), (Pm.EVENING = 17), (Pm.NIGHT = 20), Pm);
  var Qm = function () {};
  Qm.prototype.ka = function () {
    return this.h;
  };
  Qm.prototype.getType = function () {
    return this.g;
  };
  Qm.prototype.update = function (a) {
    var b = a.displayAddress || void 0;
    var c = this.i != b;
    this.i = b;
    b = "number" === typeof a.lat ? a.lat : void 0;
    c = c || this.j != b;
    this.j = b;
    b = "number" === typeof a.lng ? a.lng : void 0;
    c = c || this.l != b;
    this.l = b;
    b = a.name || void 0;
    c = c || this.h != b;
    this.h = b;
    b = "number" === typeof a.radiusMeters ? a.radiusMeters : void 0;
    c = c || this.o != b;
    this.o = b;
    a.locationType
      ? ((a = a.locationType.toUpperCase()), fc(Rm, a) && ((c = c || this.g != a), (this.g = a)))
      : this.g && ((this.g = void 0), (c = !0));
    return c;
  };
  var Rm = { oh: "HOME", zj: "WORK" };
  var Sm = function () {},
    Um = function (a) {
      if ("number" == typeof a) {
        var b = new Sm();
        b.l = a;
        var c = a;
        if (0 == c) c = "Etc/GMT";
        else {
          var d = ["Etc/GMT", 0 > c ? "-" : "+"];
          c = Math.abs(c);
          d.push(Math.floor(c / 60) % 100);
          c %= 60;
          0 != c && d.push(":", L(c, 2));
          c = d.join("");
        }
        b.i = c;
        c = a;
        0 == c
          ? (c = "UTC")
          : ((d = ["UTC", 0 > c ? "+" : "-"]),
            (c = Math.abs(c)),
            d.push(Math.floor(c / 60) % 100),
            (c %= 60),
            0 != c && d.push(":", c),
            (c = d.join("")));
        a = Tm(a);
        b.j = [c, c];
        b.g = { Ji: a, Sd: a };
        b.h = [];
        return b;
      }
      b = new Sm();
      b.i = a.id;
      b.l = -a.std_offset;
      b.j = a.names;
      b.g = a.names_ext;
      b.h = a.transitions;
      return b;
    },
    Tm = function (a) {
      var b = ["GMT"];
      b.push(0 >= a ? "+" : "-");
      a = Math.abs(a);
      b.push(L(Math.floor(a / 60) % 100, 2), ":", L(a % 60, 2));
      return b.join("");
    },
    Vm = function (a, b) {
      b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36e5;
      for (var c = 0; c < a.h.length && b >= a.h[c]; ) c += 2;
      return 0 == c ? 0 : a.h[c - 1];
    },
    Wm = function (a, b) {
      a = a.l - Vm(a, b);
      return -1440 === a ? 0 : a;
    };
  var Ym = function () {
      this.h = [];
      this.g = O;
      Xm(this, 1);
    },
    Zm = [
      /^'(?:[^']|'')*('|$)/,
      /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
      /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/
    ],
    $m = function (a) {
      return a.getHours ? a.getHours() : 0;
    };
  Ym.prototype.format = function (a, b) {
    if (!a) throw Error("M");
    var c = b ? 6e4 * (a.getTimezoneOffset() - Wm(b, a)) : 0,
      d = c ? new Date(a.getTime() + c) : a,
      e = d;
    b &&
      d.getTimezoneOffset() != a.getTimezoneOffset() &&
      ((d = new Date(d.getTime() + 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset()))),
      (e = new Date(a.getTime() + (c + (0 < c ? -864e5 : 864e5)))));
    c = [];
    for (var f = 0; f < this.h.length; ++f) {
      var g = this.h[f].text;
      1 == this.h[f].type ? c.push(an(this, g, a, d, e, b)) : c.push(g);
    }
    return c.join("");
  };
  var Xm = function (a, b) {
      if (4 > b) var c = a.g.rb[b];
      else if (8 > b) c = a.g.dc[b - 4];
      else if (12 > b) (c = a.g.Dc[b - 8]), (c = c.replace("{1}", a.g.rb[b - 8])), (c = c.replace("{0}", a.g.dc[b - 8]));
      else if (12 === b) c = a.g.rb[0].replace(/[^EMd]*yy*[^EMd]*/, "");
      else if (13 === b) c = a.g.rb[2].replace(/[^EMd]*yy*[^EMd]*/, "");
      else {
        Xm(a, 10);
        return;
      }
      b = c;
      for (bn && (b = b.replace(/\u200f/g, "")); b; ) {
        c = b;
        for (var d = 0; d < Zm.length; ++d) {
          var e = b.match(Zm[d]);
          if (e) {
            var f = e[0];
            b = b.substring(f.length);
            0 == d && ("''" == f ? (f = "'") : ((f = f.substring(1, "'" == e[1] ? f.length - 1 : f.length)), (f = f.replace(/''/g, "'"))));
            a.h.push({ text: f, type: d });
            break;
          }
        }
        if (c === b) throw Error("L`" + b);
      }
    },
    cn = function (a, b) {
      b = String(b);
      a = a.g || O;
      if (void 0 !== a.Vd) {
        for (var c = [], d = 0; d < b.length; d++) {
          var e = b.charCodeAt(d);
          c.push(48 <= e && 57 >= e ? String.fromCharCode(a.Vd + e - 48) : b.charAt(d));
        }
        b = c.join("");
      }
      return b;
    },
    bn = !1,
    dn = function (a) {
      if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error("N");
    },
    en = function (a, b) {
      dn(b);
      b = $m(b);
      return a.g.Bc[12 <= b && 24 > b ? 1 : 0];
    },
    an = function (a, b, c, d, e, f) {
      var g = b.length;
      switch (b.charAt(0)) {
        case "G":
          return (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.g.Ec[c] : a.g.Fc[c];
        case "y":
          return (c = d.getFullYear()), 0 > c && (c = -c), 2 == g && (c %= 100), cn(a, L(c, g));
        case "Y":
          return (
            (c = new Date(Lh(d.getFullYear(), d.getMonth(), d.getDate(), a.g.Hb, a.g.Gb)).getFullYear()),
            0 > c && (c = -c),
            2 == g && (c %= 100),
            cn(a, L(c, g))
          );
        case "M":
          a: switch (((c = d.getMonth()), g)) {
            case 5:
              g = a.g.Qc[c];
              break a;
            case 4:
              g = a.g.Nc[c];
              break a;
            case 3:
              g = a.g.Tc[c];
              break a;
            default:
              g = cn(a, L(c + 1, g));
          }
          return g;
        case "k":
          return dn(e), cn(a, L($m(e) || 24, g));
        case "S":
          return cn(a, (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).slice(2) + (3 < g ? L(0, g - 3) : ""));
        case "E":
          return (c = d.getDay()), 4 <= g ? a.g.dd[c] : a.g.Vc[c];
        case "a":
          return en(a, e);
        case "b":
          return en(a, e);
        case "B":
          return en(a, e);
        case "h":
          return dn(e), cn(a, L($m(e) % 12 || 12, g));
        case "K":
          return dn(e), cn(a, L($m(e) % 12, g));
        case "H":
          return dn(e), cn(a, L($m(e), g));
        case "c":
          a: switch (((c = d.getDay()), g)) {
            case 5:
              g = a.g.Yc[c];
              break a;
            case 4:
              g = a.g.bd[c];
              break a;
            case 3:
              g = a.g.ad[c];
              break a;
            default:
              g = cn(a, L(c, 1));
          }
          return g;
        case "L":
          a: switch (((c = d.getMonth()), g)) {
            case 5:
              g = a.g.Xc[c];
              break a;
            case 4:
              g = a.g.Wc[c];
              break a;
            case 3:
              g = a.g.Zc[c];
              break a;
            default:
              g = cn(a, L(c + 1, g));
          }
          return g;
        case "Q":
          return (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.g.Uc[c] : a.g.Rc[c];
        case "d":
          return cn(a, L(d.getDate(), g));
        case "m":
          return dn(e), cn(a, L(e.getMinutes ? e.getMinutes() : 0, g));
        case "s":
          return dn(e), cn(a, L(e.getSeconds(), g));
        case "v":
          return (g = f || Um(c.getTimezoneOffset())), g.i;
        case "V":
          return (
            (a = f || Um(c.getTimezoneOffset())),
            2 >= g
              ? a.i
              : 0 < Vm(a, c)
              ? void 0 !== a.g.Me
                ? a.g.Me
                : a.g.DST_GENERIC_LOCATION
              : void 0 !== a.g.Sd
              ? a.g.Sd
              : a.g.STD_GENERIC_LOCATION
          );
        case "w":
          return (
            (c = Lh(e.getFullYear(), e.getMonth(), e.getDate(), a.g.Hb, a.g.Gb)),
            cn(a, L(Math.floor(Math.round((c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) / 864e5) / 7) + 1, g))
          );
        case "z":
          return (a = f || Um(c.getTimezoneOffset())), 4 > g ? a.j[0 < Vm(a, c) ? 2 : 0] : a.j[0 < Vm(a, c) ? 3 : 1];
        case "Z":
          return (
            (b = f || Um(c.getTimezoneOffset())),
            4 > g
              ? ((g = -Wm(b, c)),
                (a = [0 > g ? "-" : "+"]),
                (g = Math.abs(g)),
                a.push(L(Math.floor(g / 60) % 100, 2), L(g % 60, 2)),
                (g = a.join("")))
              : (g = cn(a, Tm(Wm(b, c)))),
            g
          );
        default:
          return "";
      }
    };
  chrome.i18n.getMessage("7669846901402551021");
  chrome.i18n.getMessage("6510131849363684615");
  chrome.i18n.getMessage("6252259197986158120");
  chrome.i18n.getMessage("2973306402585941108");
  chrome.i18n.getMessage("4343848624651344174");
  chrome.i18n.getMessage("6579707685908557993");
  chrome.i18n.getMessage("3190546672187601036");
  chrome.i18n.getMessage("1122146167985532789");
  var fn = function (a) {
    R.call(this);
    this.h = "DAILY";
    this.H = 1;
    this.g = this.l = null;
    this.j = 0;
    this.o = this.i = null;
    this.A = [];
    this.G = this.B = this.D = this.u = this.v = this.s = null;
    this.F = !1;
    a && this.update(a);
  };
  E(fn, R);
  fn.prototype.getTime = function () {
    return this.i;
  };
  fn.prototype.update = function (a) {
    var b = !1,
      c = a.recurrenceId;
    c && (this.G = c.id || null);
    a = a.recurrence;
    if (!a) return !1;
    (c = tc(a.frequency)) ? ((b = b || this.h != c), (this.h = c)) : this.h && ((this.h = "DAILY"), (b = !0));
    c = "number" === typeof a.every ? a.every : 1;
    b = b || this.H != c;
    this.H = c;
    (c = a.recurrenceStart ? a.recurrenceStart.startDateTime : null)
      ? ((this.l = this.l || new Mm()), (c = this.l.update(c)))
      : ((c = !!this.l), (this.l = null));
    b = c || b;
    c = a;
    if (c.recurrenceEnd)
      if (((c = c.recurrenceEnd), c.autoRenew)) {
        var d = !!this.g || 0 != this.j;
        this.j = 0;
        this.g = null;
      } else {
        var e = c.numOccurrences || 0;
        d = this.j != e;
        this.j = e;
        c.endDateTime ? ((this.g = this.g || new Mm()), (d = this.g.update(c.endDateTime) || d)) : this.g && ((this.g = null), (d = !0));
      }
    else (d = !!this.g || 0 != this.j), (this.g = null), (this.j = 0);
    b = d || b;
    c = a;
    c.dailyPattern
      ? ((c = c.dailyPattern),
        (e = c.dayPeriod || null),
        (d = this.o != e),
        (this.o = e),
        c.timeOfDay ? ((this.i = this.i || new Mm()), (d = this.i.update(c.timeOfDay) || d)) : this.i && ((this.i = null), (d = !0)))
      : ((d = !!this.o || !!this.i), (this.i = this.o = null));
    b = d || b;
    b = gn(this, a) || b;
    c = a;
    "MONTHLY" == this.h && c.monthlyPattern
      ? ((c = c.monthlyPattern),
        (e = ((d = c.monthDay) ? d[0] : null) || null),
        (d = this.s != e),
        (this.s = e),
        (e = tc(c.weekDay)),
        (d = d || this.v != e),
        (this.v = e),
        (c = c.weekDayNumber || null),
        (d = d || this.u != c),
        (this.u = c))
      : ((d = !!this.s || !!this.v || !!this.u), (this.u = this.v = this.s = null));
    b = d || b;
    d = a;
    "YEARLY" == this.h && d.yearlyPattern
      ? ((d = d.yearlyPattern),
        (e = d.yearMonth ? tc(d.yearMonth[0]) : null),
        (c = this.D != e),
        (this.D = e),
        (d = (d.monthlyPattern && d.monthlyPattern.monthDay && d.monthlyPattern.monthDay[0]) || null),
        (c = c || this.B != d),
        (this.B = d))
      : ((c = !!this.B || !!this.D), (this.D = this.B = null));
    b = c || b;
    void 0 !== a.dirty && ((b = b || this.F != !!a.dirty), (this.F = !!a.dirty));
    return b;
  };
  var gn = function (a, b) {
    if ("WEEKLY" != a.h || !b.weeklyPattern || !b.weeklyPattern.weekDay) return (b = !!a.A.length), wa(a.A), b;
    b = b.weeklyPattern.weekDay.map(function (d) {
      return tc(d);
    });
    var c = !Ga(b, a.A);
    a.A = Aa(b);
    return c;
  };
  var hn = function (a) {
    R.call(this);
    this.h = "INITIAL";
    this.u = this.v = null;
    this.o = "";
    this.g = this.j = this.i = null;
    this.l = !1;
    this.s = !0;
    a && this.update(a);
  };
  E(hn, R);
  hn.prototype.getState = function () {
    return this.h;
  };
  hn.prototype.update = function (a) {
    var b = !1,
      c = a.extensions ? a.extensions.keepExtension || {} : {};
    if (c.serverNoteId) {
      var d = c.serverNoteId;
      b = b || this.v != d;
      this.v = d;
    }
    c.clientNoteId && ((c = c.clientNoteId), (b = b || this.u != c), (this.u = c));
    c = a.title || "";
    b = b || this.o != c;
    this.o = c;
    a.dueDate ? ((this.i = this.i || new Mm()), (b = this.i.update(a.dueDate) || b)) : this.i && ((this.i = null), (b = !0));
    a.location ? ((this.j = this.j || new Qm()), (b = this.j.update(a.location) || b)) : this.j && ((this.j = null), (b = !0));
    a.recurrenceInfo
      ? ((this.g = this.g || new fn()), (b = this.g.update(a.recurrenceInfo) || b), this.g.sa(this))
      : ((b = b || !!this.g), (this.g = null));
    void 0 !== a.dirty && ((b = b || this.l != !!a.dirty), (this.l = !!a.dirty));
    c = !!a.snoozed;
    b = b || this.s != c;
    this.s = c;
    a = a.archived ? "DISMISSED" : "INITIAL";
    b = b || this.h != a;
    this.h = a;
    return b;
  };
  var jn = function (a) {
    var b = {};
    b.title = a.o || "";
    !a.i || (b.dueDate = Om(a.i));
    if (a.g) {
      var c = {},
        d = a.g.G;
      d && (c.recurrenceId = { id: d });
      d = a.g;
      var e = {};
      e.frequency = d.h;
      1 < d.H && (e.every = d.H);
      if (d.l) {
        var f = {};
        f.startDateTime = Om(d.l);
        e.recurrenceStart = f;
      }
      d.j
        ? ((f = {}), (f.numOccurrences = d.j), (e.recurrenceEnd = f))
        : d.g && ((f = {}), (f.endDateTime = Om(d.g)), (e.recurrenceEnd = f));
      if (d.i || d.o) {
        f = {};
        if (d.i) {
          var g = Om(d.i);
          g.time && (f.timeOfDay = g.time);
        } else d.o && (f.dayPeriod = d.o);
        e.dailyPattern = f;
      }
      "WEEKLY" == d.h && d.A.length && ((f = {}), (f.weekDay = d.A), (e.weeklyPattern = f));
      "MONTHLY" == d.h &&
        (d.s
          ? ((f = {}), (f.monthDay = [d.s]), (e.monthlyPattern = f))
          : d.v && d.u && ((f = {}), (f.weekDay = d.v), (f.weekDayNumber = d.u), (e.monthlyPattern = f)));
      "YEARLY" == d.h &&
        d.B &&
        d.D &&
        ((f = {}), (g = {}), (g.monthDay = [d.B]), (f.monthlyPattern = g), (f.yearMonth = [d.D]), (e.yearlyPattern = f));
      e.dirty = d.F;
      c.recurrence = e;
      b.recurrenceInfo = c;
    }
    a.j &&
      ((c = a.j),
      (d = {}),
      void 0 !== c.i && (d.displayAddress = c.i),
      void 0 !== c.j && (d.lat = c.j),
      void 0 !== c.l && (d.lng = c.l),
      void 0 !== c.h && (d.name = c.h),
      void 0 !== c.o && (d.radiusMeters = c.o),
      void 0 !== c.g && (d.locationType = c.g),
      (b.location = d));
    "DISMISSED" == a.h && (b.archived = !0);
    b.snoozed = a.s;
    b.dirty = a.l;
    return b;
  };
  var kn = function (a) {
    R.call(this);
    this.i = this.h = this.g = null;
    var b = !1;
    if (a && a.family && a.family.email_address) {
      var c = a.family.email_address;
      b = c !== this.g;
      this.g = c;
    } else this.g && ((this.g = null), (b = !0));
    a && a.family && a.family.display_name
      ? ((c = a.family.display_name), (b = this.h !== c), (this.h = c))
      : this.h && ((this.h = null), (b = !0));
    a && a.last_update_timestamp ? (this.i = Th(Sh.L(), a.last_update_timestamp)) : this.i && (nc(this.i), (this.i = null));
    b && this.dispatchEvent("k");
  };
  E(kn, R);
  kn.prototype.toString = function () {
    return this.g || R.prototype.toString.call(this);
  };
  kn.prototype.update = function (a) {
    var b = !1;
    if (a && a.family && a.family.email_address) {
      var c = a.family.email_address;
      b = c !== this.g;
      this.g = c;
    } else this.g && ((this.g = null), (b = !0));
    a &&
      a.family &&
      a.family.hoh_first_name &&
      ((a = chrome.i18n.getMessage("689017442055275529", [a.family.hoh_first_name])), (b = this.h !== a), (this.h = a));
    b && this.dispatchEvent("k");
    return b;
  };
  kn.L = function () {
    return yh(kn);
  };
  var ln = chrome.i18n.getMessage("911698676339750373");
  var mn = function (a, b) {
    R.call(this);
    this.h = a || "";
    this.g = b || "WR";
  };
  E(mn, R);
  mn.prototype.getType = function () {
    return this.g;
  };
  var U = function (a) {
    M.call(this);
    this.j = a;
    this.i = {};
  };
  G(U, M);
  var nn = [];
  U.prototype.listen = function (a, b, c, d) {
    return on(this, a, b, c, d);
  };
  var pn = function (a, b, c, d, e, f) {
      return on(a, b, c, d, e, f);
    },
    on = function (a, b, c, d, e, f) {
      Array.isArray(c) || (c && (nn[0] = c.toString()), (c = nn));
      for (var g = 0; g < c.length; g++) {
        var h = vj(b, c[g], d || a.handleEvent, e || !1, f || a.j || a);
        if (!h) break;
        a.i[h.key] = h;
      }
      return a;
    };
  U.prototype.td = function (a, b, c, d) {
    return qn(this, a, b, c, d);
  };
  var qn = function (a, b, c, d, e, f) {
    if (Array.isArray(c)) for (var g = 0; g < c.length; g++) qn(a, b, c[g], d, e, f);
    else {
      b = uj(b, c, d || a.handleEvent, e, f || a.j || a);
      if (!b) return a;
      a.i[b.key] = b;
    }
    return a;
  };
  U.prototype.X = function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.X(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (d = vd(d) ? !!d.capture : !!d),
        (e = e || this.j || this),
        (c = wj(c)),
        (d = !!d),
        (b = kj(a) ? a.Ob(b, c, d, e) : a ? ((a = yj(a)) ? a.Ob(b, c, d, e) : null) : null),
        b && (Dj(b), delete this.i[b.key]);
    return this;
  };
  U.prototype.removeAll = function () {
    x(
      this.i,
      function (a, b) {
        this.i.hasOwnProperty(b) && Dj(a);
      },
      this
    );
    this.i = {};
  };
  U.prototype.K = function () {
    U.O.K.call(this);
    this.removeAll();
  };
  U.prototype.handleEvent = function () {
    throw Error("O");
  };
  var rn = function (a) {
    R.call(this);
    this.h = null;
    this.o = "O";
    this.l = "UNKNOWN_SHAREE_TYPE";
    this.i = "UNKNOWN_AUXILIARY_TYPE";
    this.s = this.j = this.u = this.v = this.g = null;
    this.A = new U(this);
    this.update(a);
    this.A.listen(kn.L(), "k", this.B);
  };
  E(rn, R);
  rn.prototype.getType = function () {
    return this.l;
  };
  rn.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a)
      switch (c) {
        case "auxiliary_type":
          var d = a[c];
          b = b || this.i != d;
          this.i = d;
          break;
        case "email":
          d = a[c].toLowerCase();
          b = b || this.h != d;
          this.h = d;
          break;
        case "role":
          b = b || this.o != a[c];
          this.o = a[c];
          break;
        case "type":
          (d = a[c]), (b = b || this.l != d), (this.l = d);
      }
    this.g && "M_RM" != this.g.getType() && ((this.g = null), (b = !0));
    return b;
  };
  rn.prototype.clone = function () {
    var a = this.g ? this.g.getType() : void 0,
      b = this.h || "",
      c = this.o,
      d = this.l,
      e = this.i,
      f = {};
    f.email = b.toLowerCase();
    f.role = c;
    f.type = d || "USER";
    f.auxiliary_type = e || "NONE";
    c = new rn(f);
    a && (c.g = new mn(b, a));
    a = this.v;
    b = this.u;
    d = this.j;
    e = this.s;
    c.v != a && (c.v = a);
    c.u != b && (c.u = b);
    c.j != d && (c.j = d);
    c.s != e && (c.s = e);
    return c;
  };
  rn.prototype.B = function () {
    var a = kn.L();
    a.g && (a.g || "") === this.h && ((this.i = "FAMILY"), this.dispatchEvent("z"));
  };
  var sn = chrome.i18n.getMessage("3249966726137025950");
  var tn = function () {
    fj.call(this, "E");
  };
  E(tn, fj);
  var un = {
      eh: "GLOBAL_CHECKED_LIST_ITEMS_POLICY",
      fh: "GLOBAL_NEW_LIST_ITEM_PLACEMENT",
      Ei: "SHARING_ENABLED",
      yj: "WEB_EMBEDS_ENABLED",
      wj: "WEB_APP_THEME"
    },
    vn = { Cd: "DEFAULT", gh: "GRAVEYARD" },
    wn = { BOTTOM: "BOTTOM", TOP: "TOP" },
    xn = new Pg(),
    yn = function (a) {
      a = void 0 === a ? {} : a;
      R.call(this);
      this.h = this.i = this.g = null;
      this.o = this.l = !0;
      this.j = null;
      this.update(a);
    };
  E(yn, R);
  yn.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a) {
      var d = a[c];
      switch (c) {
        case "type":
          if (!fc(un, d)) continue;
          b = b || this.g != d;
          this.g = d;
          break;
        case "globalNewListItemPlacementValue":
          b = b || this.i != d;
          this.i = d;
          break;
        case "globalCheckedListItemsPolicyValue":
          b = b || this.h != d;
          this.h = d;
          break;
        case "sharingEnabledValue":
          b = b || this.l != d;
          this.l = !!d;
          break;
        case "webEmbedsEnabledValue":
          b = b || this.o != d;
          this.o = !!d;
          break;
        case "webAppThemeValue":
          (d = Number(xn.get(d))), (b = b || this.j != d), (this.j = d);
      }
    }
    return b;
  };
  yn.prototype.Sb = function () {
    var a = this.getType();
    return a &&
      fc(un, a) &&
      ("GLOBAL_NEW_LIST_ITEM_PLACEMENT" !== a || (this.i && fc(wn, this.i))) &&
      ("GLOBAL_CHECKED_LIST_ITEMS_POLICY" !== a || (this.h && fc(vn, this.h))) &&
      ("WEB_APP_THEME" !== a || (null != this.j && fc(ge, this.j)))
      ? !0
      : !1;
  };
  yn.prototype.getType = function () {
    return this.g;
  };
  yn.prototype.V = function (a) {
    return a
      ? a === this
        ? !0
        : a.getType() === this.getType() && a.i == this.i && a.h == this.h && a.l === this.l && a.o === this.o && a.j === this.j
      : !1;
  };
  var zn = function (a) {
    R.call(this);
    this.i = null;
    this.g = a.mainId;
    this.h = [];
    this.o = 0;
    this.j = new Uh(a.timestamps);
    this.l = null;
    this.update(a);
  };
  E(zn, R);
  var An = function (a, b) {
    return ke(a.ka(), b.ka());
  };
  zn.prototype.toString = function () {
    return this.i || R.prototype.toString.call(this);
  };
  zn.prototype.ka = function () {
    return this.i || "";
  };
  var Cn = function (a, b) {
      a.i = b;
      Bn(a, new Qh());
    },
    Dn = function (a) {
      return !!a.j.g && !!a.j.g.valueOf();
    },
    Bn = function (a, b) {
      b = b || new Qh();
      a.j.h = b;
      Wh(a.j, b);
      a.dispatchEvent("k");
    };
  zn.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a)
      switch (c) {
        case "lastMerged":
          var d = Th(Sh.L(), a[c]);
          d && !d.valueOf() && (d = null);
          var e = !!d,
            f = !!this.l;
          b = b || (e && !f) || (!d && f) || (e && f && !d.V(this.l));
          this.l = d;
          break;
        case "mergedIds":
          d = a[c];
          if (d.length != this.h.length) (this.h = d), (d = !0);
          else {
            e = !1;
            f = 0;
            for (var g = d[f]; f < d.length; f++)
              if (!va(this.h, g)) {
                e = !0;
                break;
              }
            this.h = d;
            d = e;
          }
          b = d || b;
          break;
        case "name":
          d = a[c];
          b = b || this.i != d;
          this.i = d;
          break;
        case "revision":
          this.o = a[c];
          break;
        case "timestamps":
          b = this.j.update(a[c]) || b;
      }
    return b;
  };
  var En = {
      Cc: "contextualCoachmarksAcked",
      Dd: "familyChangeDateTime",
      Ed: "isDirty",
      Od: "linkedToAssistant",
      Sc: "settings",
      Rd: "singleSettings",
      Td: "timestamps",
      cd: (function (a, b) {
        if (kf && !b) return n.atob(a);
        var c = "";
        mf(a, function (d) {
          c += String.fromCharCode(d);
        });
        return c;
      })("bGFiZWxz")
    },
    vc = function (a) {
      R.call(this);
      this.s = new U(this);
      N(this, this.s);
      this.h = !1;
      this.j = new Uh();
      this.i = {};
      this.l = new Set();
      this.g = {};
      this.v = this.o = null;
      a && this.update(a);
    };
  E(vc, R);
  vc.prototype.update = function (a) {
    var b = !1;
    this.h = !1;
    this.i = {};
    for (var c in a)
      switch (c) {
        case En.Sc:
          var d = a[c];
          d = t(d ? d[En.Rd] : []);
          for (var e = d.next(); !e.done; e = d.next()) {
            var f = new yn(e.value);
            if (f.Sb()) {
              e = f.getType();
              if (this.i[e]) {
                var g = this.i[e],
                  h = !1;
                switch (g.getType()) {
                  case "GLOBAL_NEW_LIST_ITEM_PLACEMENT":
                    (f = f.i) && g.i != f && ((g.g = "GLOBAL_NEW_LIST_ITEM_PLACEMENT"), (g.i = f), (h = !0));
                    break;
                  case "GLOBAL_CHECKED_LIST_ITEMS_POLICY":
                    (f = f.h) && g.h != f && ((g.g = "GLOBAL_CHECKED_LIST_ITEMS_POLICY"), (g.h = f), (h = !0));
                    break;
                  case "SHARING_ENABLED":
                    f = f.l;
                    g.l != f && ((g.g = "SHARING_ENABLED"), (g.l = f), (h = !0));
                    break;
                  case "WEB_EMBEDS_ENABLED":
                    f = f.o;
                    g.o != f && ((g.g = "WEB_EMBEDS_ENABLED"), (g.o = f), (h = !0));
                    break;
                  case "WEB_APP_THEME":
                    (f = f.j), null != f && g.j != f && ((g.g = "WEB_APP_THEME"), (g.j = f), (h = !0));
                }
                f = h;
              } else (this.i[e] = f), (f = !0);
              f &&
                ("WEB_EMBEDS_ENABLED" == e ? this.dispatchEvent("g") : "GLOBAL_CHECKED_LIST_ITEMS_POLICY" == e && this.dispatchEvent("h"));
              e = f;
            } else e = !1;
            b = e || b;
          }
          break;
        case En.Td:
          d = new Uh(a[c]);
          b = (b = b || d.getCreationTime() != this.j.getCreationTime()) || Vh(d) != Vh(this.j);
          this.j = d;
          break;
        case En.Ed:
          b = this.h != a[c] || b;
          this.h = a[c];
          break;
        case En.Cc:
          b = Fn(this, a) || b;
          break;
        case En.Dd:
          d = Th(Sh.L(), a[c]);
          b = this.o ? b || !d.V(this.o) : !0;
          this.o = d;
          break;
        case En.Od:
          this.v = a[c];
      }
    (b = Gn(this, a[En.cd] || []) || b) && this.dispatchEvent("F");
    return b;
  };
  var Gn = function (a, b) {
      var c = !1,
        d = kc(a.g);
      b = t(b);
      for (var e = b.next(); !e.done; e = b.next()) {
        var f = e.value;
        e = f.mainId;
        var g = a.g[e];
        g ? (c = g.update(f) || c) : ((c = !0), (f = new zn(f)), (a.g[e] = f), a.s.listen(f, "k", a.u));
        ic(d, e);
      }
      c = c || !hc(d);
      x(d, function (h, l) {
        ic(a.g, l);
      });
      return c;
    },
    Hn = function (a) {
      var b = void 0 === b ? !1 : b;
      var c = {};
      c[En.Sc] = {};
      var d = [];
      x(a.i, function (f) {
        if (f.Sb()) {
          var g = d.push,
            h = {};
          h.type = f.g;
          "GLOBAL_NEW_LIST_ITEM_PLACEMENT" === f.g && (h.globalNewListItemPlacementValue = f.i);
          "GLOBAL_CHECKED_LIST_ITEMS_POLICY" === f.g && (h.globalCheckedListItemsPolicyValue = f.h);
          "SHARING_ENABLED" === f.g && (h.sharingEnabledValue = f.l);
          "WEB_EMBEDS_ENABLED" === f.g && (h.webEmbedsEnabledValue = f.o);
          if ("WEB_APP_THEME" === f.g) {
            if (!xn.i) {
              var l = new xn.constructor();
              l.g = xn.h;
              l.h = xn.g;
              l.i = xn;
              xn.i = l;
            }
            h.webAppThemeValue = xn.i.get(String(f.j));
          }
          g.call(d, h);
        }
      });
      c[En.Sc][En.Rd] = d;
      c[En.Td] = Xh(a.j);
      c[En.Cc] = Array.from(a.l);
      c[En.cd] = dc(a.g).map(function (f) {
        var g = {};
        g.mainId = f.g;
        g.mergedIds = f.h;
        g.name = f.i;
        g.revision = f.o;
        g.timestamps = Xh(f.j);
        g.lastMerged = f.l ? Sh.L().format(f.l) : "1970-01-01T00:00:00.000Z";
        return g;
      });
      if (a.o) {
        var e = Sh.L();
        c[En.Dd] = e.format(a.o);
      }
      null !== a.v && (c[En.Od] = a.v);
      b && (c[En.Ed] = a.h);
      return c;
    };
  vc.prototype.u = function () {
    Wh(this.j, new Qh());
    this.h = !0;
    this.dispatchEvent("F");
  };
  var Fn = function (a, b) {
      var c = !1,
        d = new Set(a.l);
      b = t(b[En.Cc] || []);
      for (var e = b.next(); !e.done; e = b.next()) (e = e.value), a.l.has(e) ? d.delete(e) : (a.l.add(e), (c = !0));
      c = c || !hc(d);
      d.forEach(function (f) {
        return a.l.delete(f);
      });
      return c;
    },
    In = function (a) {
      return Yb(a.g, function (b) {
        return !Dn(b);
      });
    },
    Jn = function (a) {
      var b = [];
      x(a.g, function (c) {
        if (!Dn(c)) {
          var d = An || Ha;
          for (var e = 0, f = b.length, g; e < f; ) {
            var h = e + ((f - e) >>> 1);
            var l = d(c, b[h]);
            0 < l ? (e = h + 1) : ((f = h), (g = !l));
          }
          d = g ? e : -e - 1;
          0 > d && Ea(b, -(d + 1), 0, c);
        }
      });
      return b;
    },
    Kn = function (a, b) {
      return (a = gc(a.g, function (c) {
        return c.ka().toLowerCase() == b.toLowerCase();
      })) && !Dn(a)
        ? a
        : null;
    },
    Ln = function (a, b) {
      var c = a.g[b];
      if (c && !Dn(c)) return c;
      for (var d in a.g) if (((c = a.g[d]), !Dn(c) && c.h.includes(b))) return c;
      return null;
    };
  vc.L = function () {
    return yh(vc);
  };
  var xc = function (a) {
      this.Sb = a;
    },
    zc = [
      yc("data"),
      yc("http"),
      yc("https"),
      yc("mailto"),
      yc("ftp"),
      new xc(function (a) {
        return /^[^:]*([/?#]|$)/.test(a);
      })
    ],
    Ed = "function" === typeof URL;
  var Mn = function (a) {
    this.ea = void 0;
    this.ia = {};
    if (a) {
      var b = mi(a);
      a = li(a);
      for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
    }
  };
  Mn.prototype.set = function (a, b) {
    Nn(this, a, b, !1);
  };
  Mn.prototype.add = function (a, b) {
    Nn(this, a, b, !0);
  };
  var Nn = function (a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      a.ia[f] || (a.ia[f] = new Mn());
      a = a.ia[f];
    }
    if (d && void 0 !== a.ea) throw Error("P`" + b);
    a.ea = c;
  };
  Mn.prototype.get = function (a) {
    a: {
      for (var b = this, c = 0; c < a.length; c++)
        if (((b = b.ia[a.charAt(c)]), !b)) {
          a = void 0;
          break a;
        }
      a = b;
    }
    return a ? a.ea : void 0;
  };
  Mn.prototype.ja = function () {
    var a = [];
    On(this, a);
    return a;
  };
  var On = function (a, b) {
    void 0 !== a.ea && b.push(a.ea);
    for (var c in a.ia) On(a.ia[c], b);
  };
  Mn.prototype.Ea = function (a) {
    var b = [];
    if (a) {
      for (var c = this, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (!c.ia[e]) return [];
        c = c.ia[e];
      }
      Pn(c, a, b);
    } else Pn(this, "", b);
    return b;
  };
  var Pn = function (a, b, c) {
    void 0 !== a.ea && c.push(b);
    for (var d in a.ia) Pn(a.ia[d], b + d, c);
  };
  k = Mn.prototype;
  k.Xa = function (a) {
    if (this.ea === a) return !0;
    for (var b in this.ia) if (this.ia[b].Xa(a)) return !0;
    return !1;
  };
  k.clear = function () {
    this.ia = {};
    this.ea = void 0;
  };
  k.remove = function (a) {
    for (var b = this, c = [], d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if (!b.ia[e]) throw Error("Q`" + a);
      c.push([b, e]);
      b = b.ia[e];
    }
    a = b.ea;
    for (delete b.ea; 0 < c.length; )
      if (((e = c.pop()), (b = e[0]), (e = e[1]), b.ia[e].ha())) delete b.ia[e];
      else break;
    return a;
  };
  k.clone = function () {
    return new Mn(this);
  };
  k.W = function () {
    return ki(this.ja());
  };
  k.ha = function () {
    return void 0 === this.ea && hc(this.ia);
  };
  var z = function (a) {
    R.call(this);
    this.g = a.id;
    if (!this.g) throw Error("R");
    this.U = this.j = null;
    this.u = new Uh(a.timestamps);
    this.s = {};
    this.Z = new U(this);
    N(this, this.Z);
    this.F = null;
    this.fb = !1;
    this.ua = 0;
    this.Ua = "0";
    this.hb = -1;
    this.xa = !1;
    this.G = 0;
    this.i = !1;
    this.ca = this.D = this.A = this.H = this.o = null;
    this.wa = !1;
    this.h = null;
    this.Ca = !1;
    this.Da = this.Ba = null;
    this.l = 0;
    this.N = {};
    this.ya = "NONE";
    this.Ha = this.R = this.Ub = this.uc = null;
    this.Cb = !1;
    this.v = {};
    this.B = new Xi();
    this.ba = [];
    this.yb = null;
    this.Ia = new Mn();
    this.jb = this.ta = this.S = null;
    this.gb = !1;
    this.Va = void 0;
    this.kb = {};
    this.Tb = !1;
    this.update(a);
  };
  E(z, R);
  var Qn = function () {
    return new Date().getTime() + "." + Math.round(2147483648 * Math.random());
  };
  z.prototype.getType = function () {
    return this.H;
  };
  z.prototype.getCreationTime = function () {
    return this.u.getCreationTime();
  };
  var Rn = function (a) {
    a.i = !0;
    a.notify();
  };
  z.prototype.notify = function () {
    this.dispatchEvent("k");
  };
  var Tn = function (a) {
      return Pc(a) || Sn(a) || "QUILL" === a.H;
    },
    Pc = function (a) {
      return "NOTE" === a.H;
    },
    Sn = function (a) {
      return "LIST" === a.H;
    },
    Un = function (a) {
      return "LIST_ITEM" === a.H;
    },
    Vn = function (a) {
      return "BLOB" === a.H;
    },
    Zn = function (a, b, c) {
      a.G = b;
      b > Wn || b < Xn ? a.dispatchEvent(new Lm(3, a.U)) : (a.Ca && Tn(a)) || c || (a.j && (Yn(a.j, !0), Rn(a.j)), Rn(a));
    };
  z.prototype.ha = function (a) {
    a = void 0 === a ? !1 : a;
    return (
      !(
        (this.D && this.D.trim()) ||
        this.h ||
        $n(this) ||
        (this.A && this.A.trim()) ||
        (!a && this.o && "DELETED" != this.o.h) ||
        !hc(Fc(this.B))
      ) &&
      bc(this.s, function (b) {
        return 0 != b.l || (!Vn(b) && b.ha(a));
      })
    );
  };
  var ao = function (a, b) {
      a.Ca = b;
      x(a.s, function (c) {
        return ao(c, b);
      });
    },
    Yn = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c = new Qh();
      Wh(a.u, c);
      b && (Tn(a) ? (a.u.h = c) : a.j && ((a.j.u.h = c), Wh(a.j.u, c), Rn(a.j)));
    };
  z.prototype.update = function (a, b, c) {
    var d = this,
      e = !1,
      f = !1;
    x(a, function (h, l) {
      switch (l) {
        case "baseVersion":
          d.Ua = h;
          break;
        case "baseNoteRevision":
          d.hb = parseInt(h, 10);
          break;
        case "isDirty":
          e = e || d.i != h;
          d.i = h;
          break;
        case "serverId":
          d.R = h;
          break;
        case "sortValue":
          h = parseInt(h, 10);
          l = d.G != h;
          f = f || l;
          e = e || l;
          d.G = h;
          break;
        case "timestamps":
          l = 0 != d.l;
          var m = -1 === d.ua;
          m && delete h.trashed;
          var p = -1 === d.l;
          p && delete h.deleted;
          h = d.u.update(h);
          !p && d.u.g && (d.l = 1);
          m || (d.ua = d.u.i ? 1 : 0);
          e = h || e;
          f = f || l != (0 != d.l);
          break;
        case "type":
          f = f || d.H != h;
          e = e || d.H != h;
          d.H = h;
          break;
        case "isArchived":
          e = e || d.fb != h;
          d.fb = !!h;
          break;
        case "isPinned":
          e = e || d.gb != h;
          d.gb = !!h;
          break;
        case "color":
          e = e || d.Ba != h;
          d.Ba = h;
          break;
        case "background":
          d.Da ? (e = d.Da.update(h) || e) : ((d.Da = new dj(h)), (e = !0));
          break;
        case "lastModifierEmail":
          d.Ub = h.toLowerCase();
          break;
        case "nodeSettings":
          "LIST" === a.type || "NOTE" === a.type ? (d.F ? (e = d.F.update(h) || e) : (bo(d, new Jm(h)), (e = !0))) : d.F && bo(d, null);
          break;
        case "reminder":
          if (d.o) (h = d.o.update(h)), (e = e || h), h && d.dispatchEvent("u");
          else {
            h = new hn(h);
            d.o && (d.Z.X(d.o, "k", d.Ab), d.o.ga());
            if ((d.o = h)) d.Z.listen(h, "k", d.Ab), h.sa(d);
            d.dispatchEvent("u");
            e = !0;
          }
          break;
        case "shareState":
          if ("NEW" === d.ya || "NONE" === d.ya || ("NEW" != h && "NONE" != h)) (e = e || d.ya != h), (d.ya = h);
          break;
        case "sharerEmail":
          d.uc = h.toLowerCase();
          break;
        case "showAvailableInShoppingNotification":
          e = e || d.Va != h;
          d.Va = !!h;
          break;
        case "title":
          l = d.D != h;
          f = f || l;
          e = e || l;
          c && d.D != h ? co(d, a, b, c) : (d.D = h);
          break;
        case "xplatModel":
          d.Tb = h;
          break;
        case "parentId":
          h = h || null;
          "root" === h && (h = null);
          e = e || h != d.U;
          d.U = h;
          break;
        case "parentServerId":
          d.Ha = h;
          break;
        case "checked":
          l = d.xa != h;
          f = f || l;
          e = e || l;
          d.xa = !!h;
          break;
        case "text":
          l = d.A != h;
          f = f || l;
          e = e || l;
          c && l ? co(d, a, b, c) : (d.j && l && eo(d.j, d.g, h, d.A), (d.A = h));
          break;
        case "blob":
          d.h ? (e = d.h.update(h) || e) : ((d.h = new xm(h)), (e = !0));
          break;
        case "sourceBlobId":
          d.jb = h;
      }
    });
    e = fo(this, a) || e;
    e = go(this, a) || e;
    e = ho(this, a.labelIds || []) || e;
    var g = a.annotationsGroup;
    g && (e = this.B.update(g) || e);
    e && this.notify();
    return f;
  };
  var fo = function (a, b) {
      var c = !1;
      if (Si(bd(), "n_eil")) {
        var d = b.superListItemId || null;
        b = b.superListItemServerId || null;
        c = (c = d != a.S) || b != a.ta;
        a.S = d;
        a.ta = b;
      }
      return c;
    },
    co = function (a, b, c, d) {
      d = void 0 === d ? null : d;
      var e = null;
      d && d.h === a.g && (e = d.g);
      b = Un(a) ? b.text : b.title;
      d = Un(a) ? a.A : a.D;
      if (d !== b && null != d && null != b) {
        var f = !1,
          g = a;
        do {
          if (g.hasListener("E")) {
            f = !0;
            break;
          }
          g = g.Vb;
        } while (g);
        f
          ? a.dispatchEvent(new tn(d, e, c, b, a.ca))
          : ((e = (c = Un(a)) ? a.A : a.D),
            (d = b != e),
            c ? (a.A = b) : (a.D = b),
            null != b && d && a.j && eo(a.j, a.g, b, e),
            d && io(a),
            b != b ? ((a.wa = !0), Rn(a)) : d && a.notify());
        a.ca = b;
      }
    },
    jo = function (a, b) {
      b.baseVersion && (a.Ua = b.baseVersion);
    },
    ko = function (a) {
      var b = {};
      b.id = a.g;
      b.kind = "notes#node";
      b.parentId = a.U || "root";
      b.timestamps = Xh(a.u);
      b.type = a.H;
      b.trashState = a.ua;
      a.R && (b.serverId = a.R);
      a.Ha && (b.parentServerId = a.Ha);
      b.deletionState = a.l;
      if (1 === a.l) return Vn(a) && a.h && (b.blob = Fm(a.h)), b;
      b.sortValue = a.G;
      a.Ua && (b.baseVersion = a.Ua);
      -1 != a.hb && (b.baseNoteRevision = a.hb);
      if (Tn(a)) {
        b.title = a.D || "";
        b.isArchived = a.fb;
        b.isPinned = a.gb;
        void 0 !== a.Va && (b.showAvailableInShoppingNotification = a.Va);
        a.Ba && (b.color = a.Ba);
        a.Da && (b.background = ej(a.Da));
        a.o && (b.reminder = jn(a.o));
        a.F && (b.nodeSettings = Km(a.F));
        var c = [],
          d = [];
        x(
          a.N,
          function (g) {
            var h = g.g;
            h && "M_RM" != h.g && "M_WR" != h.g
              ? ((g = {}), (g.email = h.h || ""), (g.type = h.g), c.push(g))
              : h || ((h = {}), (h.auxiliary_type = g.i), (h.email = g.h), (h.role = g.o), (h.type = g.l), d.push(h));
          },
          a
        );
        c.length && (b.shareRequests = c);
        d.length && (b.roleInfo = d);
        $n(a) && "NONE" != a.ya && (b.shareState = a.ya);
        if (a.yb) {
          var e = {};
          b.abuseFeedback = ((e.type = a.yb), e);
        }
        if (!hc(a.v)) {
          var f = Sh.L();
          b.labelIds = dc(a.v).map(function (g) {
            var h = {};
            return (h.labelId = g.id), (h.deleted = g.g ? f.format(g.g) : "1970-01-01T00:00:00.000Z"), h;
          });
        }
        hc(a.B.g) || (b.annotationsGroup = Yi(a.B));
      } else
        Un(a)
          ? ((b.text = a.A || ""),
            (b.checked = a.xa),
            Si(bd(), "n_eil") &&
              (void 0 !== a.S && (b.superListItemId = a.S || ""), void 0 !== a.ta && (b.superListItemServerId = a.ta || "")))
          : Vn(a) && a.h && (b.blob = Em(a.h, !0));
      b.isDirty = a.i;
      a.ca && (b.lastSyncedText = a.ca);
      a.jb && (b.sourceBlobId = a.jb);
      return b;
    };
  z.prototype.clone = function () {
    var a = new z(ko(this));
    x(this.s, function (b) {
      lo(a, b.clone());
    });
    x(this.N, function (b) {
      mo(a, b.clone());
    });
    a.u.update(Xh(this.u));
    ao(a, this.Ca);
    return a;
  };
  z.prototype.duplicate = function () {
    var a = ko(this),
      b = Qn();
    a.id = b;
    no.forEach(function (e) {
      return delete a[e];
    });
    Vn(this) && this.h && ((a.sourceBlobId = this.g), delete a.blob);
    var c = new z(a),
      d = new Map();
    x(this.s, function (e) {
      if (0 == e.l) {
        var f = e.duplicate();
        f.G || Zn(f, 1);
        oo(f, b);
        lo(c, f);
        d.set(e.g, f);
      }
    });
    Sn(c) &&
      po(this).forEach(function (e) {
        var f = e.S;
        if (f && ((e = d.get(e.g)), (f = d.get(f)), e && f)) {
          if (f && (!Un(e) || !Un(f))) throw Error("$");
          if (f && f.g in e.kb) {
            if (!Un(e) || !Un(f)) throw Error("$");
            f.S = null;
            f.ta = null;
            delete e.kb[f.g];
            Rn(e);
          }
          null === f ? ((e.S = null), (e.ta = null)) : ((e.S = f.g), (e.ta = f.R), (f.kb[e.g] = e));
        }
      });
    Tn(c) && Yn(c, !0);
    return c;
  };
  z.prototype.getTitle = function () {
    if (!Tn(this)) throw Error("S");
    return this.D || "";
  };
  z.prototype.setTitle = function (a) {
    if (!Tn(this)) throw Error("S");
    if (19999 < a.length) throw Error("T");
    this.wa || (this.ca = this.D || "");
    this.D = a;
    Yn(this, !0);
    io(this);
    this.wa = !0;
    Rn(this);
  };
  var qo = function (a) {
      if (!Tn(a)) throw Error("U`" + a.H);
      return a.Ba || "DEFAULT";
    },
    ro = function (a) {
      return -1 === a.ua || 1 === a.ua;
    },
    io = function (a) {
      a.o && a.dispatchEvent("v");
    };
  z.prototype.Ab = function (a) {
    Yn(this);
    a.target = this;
    this.dispatchEvent("u");
  };
  var bo = function (a, b) {
    if (Tn(a) && b !== a.F) {
      a.F && (a.Z.X(a.F, "y", a.Bb), a.F.ga());
      if ((a.F = b)) a.Z.listen(b, "y", a.Bb), b.sa(a);
      a.dispatchEvent("k");
    }
  };
  z.prototype.Bb = function (a) {
    Yn(this);
    this.i = this.i || this.F.g;
    a.target = this;
    this.dispatchEvent("k");
  };
  var $n = function (a) {
      return ac(a.N, function (b) {
        var c;
        if ((c = "O" != b.o)) b.g ? ((b = b.g.getType()), (b = "M_RM" == b || "RM" == b)) : (b = !1), (c = !b);
        return c;
      });
    },
    mo = function (a, b) {
      b.sa(a);
      a.N[b.h || ""] = b;
      b.dispatchEvent("A");
    },
    go = function (a, b) {
      for (var c = !1, d = kc(a.N), e = t(b.roleInfo || []), f = e.next(); !f.done; f = e.next()) {
        f = f.value;
        var g = f.email;
        g && ((g = g.toLowerCase()), g in a.N ? ((c = a.N[g].update(f) || c), delete d[g]) : (mo(a, new rn(f)), (c = !0)));
      }
      c = c || !hc(d);
      x(d, function (h) {
        var l = h.g;
        (!l || ("M_WR" !== l.getType() && "WR" !== l.getType())) && delete a.N[h.h || ""];
      });
      return (c = so(a, b, c) || c);
    },
    so = function (a, b, c) {
      var d = !1,
        e = {};
      b = t(b.errorStatus || []);
      for (var f = b.next(); !f.done; f = b.next()) {
        f = f.value;
        var g = f.code;
        "TMS" != g && (e[g] = new Im(f));
      }
      x(e, function (h, l) {
        if (!a.ba[l]) (a.ba[l] = h), (d = !0);
        else if (!a.ba[l].V(h)) {
          if ("OAD" == h.Wa || "SRD" == h.Wa) {
            l = a.ba[l].Oa;
            l.push.apply(l, md(h.Oa));
            for (var m = (h = 0), p = {}; m < l.length; ) {
              var u = l[m++],
                w = vd(u) ? "o" + id(u) : (typeof u).charAt(0) + u;
              Object.prototype.hasOwnProperty.call(p, w) || ((p[w] = !0), (l[h++] = u));
            }
            l.length = h;
          } else a.ba[l] = h;
          d = !0;
        }
      });
      (hc(e) && !c) ||
        x(a.ba, function (h, l) {
          "OAD" == h.Wa || "SRD" == h.Wa || e[l] || (delete a.ba[l], (d = !0));
        });
      d && a.dispatchEvent("o");
      return d;
    },
    uo = function (a) {
      return Object.values(a.v)
        .filter(function (b) {
          return !to(b);
        })
        .map(function (b) {
          return b.id;
        });
    },
    xo = function (a, b) {
      !Tn(a) || vo(a, b) || Dn(b) || (Bn(b), (a.v[b.g] = new wo(b.g)), Yn(a), Rn(a), a.dispatchEvent("D"));
    },
    vo = function (a, b) {
      return [b.g].concat(md(b.h)).some(function (c) {
        return a.v[c] && !to(a.v[c]);
      });
    },
    ho = function (a, b) {
      Sh.L();
      var c = !1,
        d = kc(a.v);
      b = t(b);
      for (var e = b.next(); !e.done; e = b.next()) {
        var f = e.value;
        e = f.labelId;
        a.v[e] || ((a.v[e] = new wo(e)), (c = !0));
        if ((f = f.deleted)) {
          f = Th(0, f);
          var g = a.v[e].g;
          c = (!!g && !g.V(f)) || c;
          a.v[e].g = f;
        }
        delete d[e];
      }
      c = c || !hc(d);
      x(d, function (h, l) {
        return ic(a.v, l);
      });
      return c;
    },
    lo = function (a, b) {
      if (b.U && b.U != a.g) throw Error("V");
      if (!a.s[b.g]) {
        a.s[b.g] = b;
        N(a, b);
        a.Z.listen(b, "k", a.zb);
        b.sa(a);
        b.j = a;
        oo(b, a.g);
        b.Ha = a.R;
        b.Cb = !1;
        ao(b, a.Ca);
        if (void 0 === b.G) {
          var c;
          if ((c = !Vn(b))) (c = vc.L().i.GLOBAL_NEW_LIST_ITEM_PLACEMENT), (c = !!c && "TOP" == c.i);
          c = c ? yo(a) : zo(a);
          Zn(b, c, !0);
        }
        Un(b) && eo(a, b.g, Sc(b));
        c = !1;
        Pc(a) && Un(b) && 2 <= po(a).length && ((a.H = "LIST"), Yn(a, !0), Rn(a), (c = !0));
        if (b.i || c) Yn(a, !0), io(a), Rn(a);
      }
    };
  z.prototype.getChildren = function () {
    return this.s;
  };
  var Ao = function (a) {
      return dc(a.s).filter(function (b) {
        return Vn(b) && 0 == b.l;
      });
    },
    Bo = function (a) {
      a = Ao(a);
      a.sort(uc);
      return a;
    },
    Do = function (a) {
      return Bo(a)
        .map(function (b) {
          return Co(b);
        })
        .filter(function (b) {
          return !!b && "IMAGE" === b.getType();
        });
    },
    Fo = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      return Ao(a).some(function (d) {
        d = "IMAGE" !== b || c ? Eo(d) : Co(d);
        return !!d && (!b || d.getType() === b);
      });
    };
  z.prototype.matches = function (a) {
    var b = Go(this, a.getTokens());
    b =
      (b =
        (b =
          (b =
            (b =
              (b =
                (b =
                  (b =
                    (b = (b = (b = (b = b && Ho(this, a.D())) && Io(this, a.h())) && Jo(this, a.i())) && Ko(this, a.j())) &&
                    (a.g() ? qo(this) === a.g() : !0)) && (a.u() ? !!this.o : !0)) && (a.A() ? Sn(this) : !0)) &&
              (a.B() ? $n(this) : !0)) && (a.l() ? Fo(this, "AUDIO") : !0)) && (a.s() ? Fo(this, "IMAGE", !0) : !0)) &&
        (a.o() ? Fo(this, "DRAWING") : !0)) && (a.v() ? !!Zi(this.B) || !hc(Fc(this.B)) || Lo.test(Mo(this).toLowerCase()) : !0);
    return !!b;
  };
  var Go = function (a, b) {
      for (var c = Mo(a), d = Do(a), e = 0; e < d.length; e++) {
        var f = d[e].D || "";
        f && (c += "\n" + f);
      }
      $n(a) &&
        x(a.N, function (h) {
          var l = c,
            m = "\n" + (h.h || "") + " ",
            p = kn.L();
          h = "FAMILY" == h.i && p.g && (p.g || "") === h.h && !h.j ? kn.L().h || ln : "FAMILY" != h.i || h.j ? h.j : sn;
          c = l + (m + (h || ""));
        });
      x(Fc(a.B), function (h) {
        h = h.g;
        c += "\n" + h.Qa() + " " + h.getTitle();
      });
      (d = (d = (d = Zi(a.B)) ? d.j : null) ? d.g : null) && (c += "\n" + d.Qa() + " " + d.getTitle());
      var g = vc.L();
      x(a.v, function (h, l) {
        (h = Ln(g, l)) && (c += "\n" + h.ka());
      });
      x($i(a.B), function (h) {
        (h = h.i) && (c += "\n" + gi[h.g || "THING_CATEGORY_UNKNOWN"]);
      });
      x(aj(a.B), function (h) {
        (h = h.h) && (c += "\n" + Kh[h.g || "SUGGEST_TYPE_UNKNOWN"]);
      });
      c = c.toLowerCase();
      a = 0;
      for (d = void 0; (d = b[a]); a++) if (-1 === c.indexOf(d)) return !1;
      return !0;
    },
    Ho = function (a, b) {
      return b.every(function (c) {
        return c in a.N;
      });
    },
    Io = function (a, b) {
      return b.every(function (c) {
        return ac($i(a.B), function (d) {
          d = d.i;
          return !!d && (d.g || "THING_CATEGORY_UNKNOWN") === c;
        });
      });
    },
    Jo = function (a, b) {
      return b.every(function (c) {
        return ac(aj(a.B), function (d) {
          d = d.h;
          return !!d && (d.g || "SUGGEST_TYPE_UNKNOWN") === c;
        });
      }, a);
    },
    Ko = function (a, b) {
      var c = vc.L();
      return b.every(function (d) {
        d = Kn(c, d);
        return !!d && vo(a, d);
      });
    },
    Mo = function (a) {
      return [a.D || "", a.A || ""]
        .concat(
          md(
            po(a).map(function (b) {
              return Sc(b);
            })
          )
        )
        .join("\n");
    };
  z.prototype.isSelected = function () {
    return !1;
  };
  var zo = function (a) {
      var b = Wn;
      x(a.s, function (c) {
        b = Math.min(b, c.G);
      });
      return b == Wn ? 0 : b - No;
    },
    yo = function (a) {
      var b = Xn;
      x(a.s, function (c) {
        b = Math.max(b, c.G);
      });
      return b == Xn ? 0 : b + No;
    };
  z.prototype.zb = function (a) {
    a.target.i && io(this);
  };
  var Qc = function (a) {
      if (!Pc(a)) throw Error("X");
      return (a = po(a)[0]) ? Sc(a) : "";
    },
    Oo = function (a, b) {
      if (!Pc(a)) throw Error("X");
      if (!Pc(a)) throw Error("W");
      var c = po(a)[0];
      if (!c) {
        c = a.g;
        var d = {};
        c = new z(((d.id = Qn()), (d.type = "LIST_ITEM"), (d.parentId = c), d));
        lo(a, c);
        a.dispatchEvent(new Gm(c));
      }
      a = c;
      if (!Un(a)) throw Error("aa");
      19999 < b.length || (a.j && eo(a.j, a.g, b, a.A), a.wa || (a.ca = a.A || ""), (a.A = b), Yn(a, !0), (a.wa = !0), Rn(a));
    },
    eo = function (a, b, c, d) {
      var e = a.s;
      if (!(null !== e && b in e)) throw Error("Y");
      c = c.toLowerCase().trim();
      (d && d.toLowerCase().trim() === c) ||
        (d && Po(a, b, d), 30 >= c.length && ((d = a.Ia.get(c)) || (d = new Set()), d.add(b), a.Ia.set(c, d)));
    },
    Po = function (a, b, c) {
      c = c.toLowerCase().trim();
      if (!(30 < c.length)) {
        var d = a.Ia.get(c);
        if (!d) throw Error("Z");
        d.delete(b);
        d.size ? a.Ia.set(c, d) : a.Ia.remove(c);
      }
    },
    po = function (a) {
      var b = [],
        c;
      for (c in a.s) {
        var d = a.s[c];
        Un(d) && 0 == d.l && b.push(d);
      }
      return b;
    },
    Rc = function (a) {
      var b = void 0 === b ? !1 : b;
      a = po(a);
      a.sort(b ? uc : wc);
      return a;
    },
    oo = function (a, b) {
      a.U !== b && ((a.U = b), a.Ca || a.notify());
    };
  z.prototype.getParent = function () {
    return this.j;
  };
  var Sc = function (a) {
      if (!Un(a)) throw Error("aa");
      return a.A || "";
    },
    Eo = function (a) {
      return Vn(a) ? a.h : null;
    },
    Co = function (a) {
      if (!Vn(a)) throw Error("ba");
      return a.h && (Am(a.h) || Bm(a.h) || Cm(a.h)) ? (Am(a.h) || (Bm(a.h) && !a.h.i) ? a.h : a.h.i) : null;
    },
    Lo = RegExp(
      "(?:(https?|ftp)://)?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.][\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*\\.(?:(?:xn--)*[a-zA-Z0-9]{2,63})(?:[\\.]?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.]*[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*)?"
    ),
    no = Object.freeze(
      "annotationsGroup isArchived isDirty isPinned lastSyncedText parentServerId reminder baseVersion baseNoteRevision serverId shareState roleInfo showAvailableInShoppingNotification timestamps".split(
        " "
      )
    ),
    No = Math.pow(2, 20),
    Wn = Math.pow(2, 50) - 1,
    Xn = -Math.pow(2, 50),
    wo = function (a) {
      this.id = a;
      this.g = null;
    },
    to = function (a) {
      return !!a.g && !!a.g.valueOf();
    };
  var Qo = Ld(["http://goo.gl/forms/r40gTO4BTb"]),
    Ro = Ld(["https://keep.google.com"]),
    So = (function (a) {
      for (var b = kd.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
      return new Ac(c.join(""), Bc);
    })(Qo),
    To = (function (a) {
      var b = kd.apply(1, arguments);
      if (0 === b.length) return yg(a[0]);
      for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
      return yg(c);
    })(Ro);
  Dc(To.toString());
  var Uo = chrome.i18n.getMessage("2633701539319779732"),
    Vo = chrome.i18n.getMessage("577539731512680648"),
    Lc = /^data:(.+);base64,(.+)$/;
  var Oc = function (a) {
    Gh.call(this);
    this.l = "";
    a && this.update(a);
  };
  E(Oc, Gh);
  Oc.prototype.update = function (a) {
    Gh.prototype.update.call(this, a);
    "faviconUrl" in a && (this.l = a.faviconUrl);
  };
  Oc.prototype.g = function () {
    var a = Gh.prototype.g.call(this);
    a.faviconUrl = this.l;
    return a;
  };
  var Nc = function (a, b) {
    a = void 0 === a ? "" : a;
    this.qb = this.url = "";
    a && "object" === typeof a ? ((this.url = a.url), (this.qb = a.shortUrlAndTitle)) : a && ((this.url = a), (this.qb = b || ""));
  };
  var Tc = RegExp(
    "(?:(https?|ftp)://)?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.][\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*\\.(?:(?:xn--)*[a-zA-Z0-9]{2,63})(?:[\\.]?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.]*[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*)?",
    "i"
  );
  var Wo = function () {
      this.g = new Map();
    },
    Xo = function (a, b) {
      a.g.forEach(function (c) {
        return c(b);
      });
    };
  var Yo = function (a) {
    this.g = a;
  };
  var Zo = function (a) {
    this.J = v(a);
  };
  E(Zo, K);
  var $o = function (a) {
    this.J = v(a);
  };
  E($o, K);
  var ap = function (a) {
    this.J = v(a);
  };
  E(ap, K);
  var bp = function (a) {
    this.J = v(a);
  };
  E(bp, K);
  bp.Ka = [2];
  var cd = function (a) {
    this.J = v(a);
  };
  E(cd, K);
  cd.Ka = [1];
  var cp = function (a) {
    this.J = v(a);
  };
  E(cp, K);
  var dp = function () {
    this.i = this.g = null;
  };
  dp.prototype.initialize = function (a, b) {
    this.g = a;
    this.i = b;
    return this;
  };
  var ep = function (a, b) {
      b = a.i.h[b.g].md();
      b.initialize(a.g, a.i);
      return b;
    },
    fp = function (a) {
      var b = wf(a.g, cp, 5);
      null == b && ((b = new cp()), C(a.g, 5, b));
      return b;
    },
    gp = function (a) {
      var b = wf(a.g, $o, 8);
      Af(b, 3);
      var c = wf(a.g, cp, 5);
      null != c && ((b = a.g), (c = c.clone()), C(b, 5, c));
      return a.g;
    };
  dp.prototype.Sb = function () {
    return !0;
  };
  var hp = function () {
    dp.call(this);
    this.h = null;
  };
  E(hp, dp);
  var ip = function (a) {
      if (!a.h) {
        a.h = new cj();
        var b = fp(a);
        C(b, 39, a.h);
      }
      return a.h;
    },
    kp = function (a) {
      var b = !jp.L().qc();
      a = ip(a);
      Bf(a, 22, b);
    },
    lp = new Yo("keep_builder");
  var mp = function () {};
  mp.prototype.md = function () {
    return new hp();
  };
  var np = function (a) {
    this.J = v(a);
  };
  E(np, K);
  var op = function () {
    this.g = new np();
  };
  op.prototype.h = function (a) {
    C(a, 17, this.g);
  };
  var Zc = { navigate: 2, reload: 3, back_forward: 4, prerender: 5 };
  var pp = function (a) {
    this.J = v(a);
  };
  E(pp, K);
  var dd = function (a) {
    this.J = v(a);
  };
  E(dd, K);
  dd.prototype.setAccessLevel = function (a) {
    return C(this, 12, a);
  };
  var qp = function (a) {
    this.J = v(a);
  };
  E(qp, K);
  var rp = function (a) {
    this.J = v(a);
  };
  E(rp, K);
  var sp = function (a) {
    this.J = v(a);
  };
  E(sp, K);
  var tp = function (a) {
    this.J = v(a);
  };
  E(tp, K);
  var up = function (a) {
    this.J = v(a);
  };
  E(up, K);
  var vp = function (a) {
    this.J = v(a);
  };
  E(vp, K);
  vp.prototype.getDevice = function () {
    return wf(this, tp, 9);
  };
  vp.prototype.getParent = function () {
    return wf(this, up, 11);
  };
  var wp = function () {
      this.i = new rp();
      this.h = null;
      this.j = new qp();
      Yc(this.j, 1, 6);
      this.g = null;
    },
    ad = function (a) {
      null == a.h && (a.h = new vp());
      return a.h;
    };
  var xp = function (a, b) {
    this.i = a;
    this.j = b;
    this.h = 0;
    this.g = null;
  };
  xp.prototype.get = function () {
    if (0 < this.h) {
      this.h--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.i();
    return a;
  };
  var yp = function (a, b) {
    a.j(b);
    100 > a.h && (a.h++, (b.next = a.g), (a.g = b));
  };
  var zp,
    Ap = function () {
      var a = n.MessageChannel;
      "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !q("Presto") &&
        (a = function () {
          var e = rd(document, "IFRAME");
          e.style.display = "none";
          document.documentElement.appendChild(e);
          var f = e.contentWindow;
          e = f.document;
          e.open();
          e.close();
          var g = "callImmediate" + Math.random(),
            h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
          e = F(function (l) {
            if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage();
          }, this);
          f.addEventListener("message", e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              f.postMessage(g, h);
            }
          };
        });
      if ("undefined" !== typeof a && !ma()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.Yd;
            c.Yd = null;
            e();
          }
        };
        return function (e) {
          d.next = { Yd: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        n.setTimeout(e, 0);
      };
    };
  var Bp = function () {
    this.h = this.g = null;
  };
  Bp.prototype.add = function (a, b) {
    var c = Cp.get();
    c.set(a, b);
    this.h ? (this.h.next = c) : (this.g = c);
    this.h = c;
  };
  Bp.prototype.remove = function () {
    var a = null;
    this.g && ((a = this.g), (this.g = this.g.next), this.g || (this.h = null), (a.next = null));
    return a;
  };
  var Cp = new xp(
      function () {
        return new Dp();
      },
      function (a) {
        return a.reset();
      }
    ),
    Dp = function () {
      this.next = this.scope = this.Pa = null;
    };
  Dp.prototype.set = function (a, b) {
    this.Pa = a;
    this.scope = b;
    this.next = null;
  };
  Dp.prototype.reset = function () {
    this.next = this.scope = this.Pa = null;
  };
  var Ep,
    Fp = !1,
    Gp = new Bp(),
    Ip = function (a, b) {
      Ep || Hp();
      Fp || (Ep(), (Fp = !0));
      Gp.add(a, b);
    },
    Hp = function () {
      if (n.Promise && n.Promise.resolve) {
        var a = n.Promise.resolve(void 0);
        Ep = function () {
          a.then(Jp);
        };
      } else
        Ep = function () {
          var b = Jp;
          "function" !== typeof n.setImmediate ||
          (n.Window && n.Window.prototype && (ja() || !q("Edge")) && n.Window.prototype.setImmediate == n.setImmediate)
            ? (zp || (zp = Ap()), zp(b))
            : n.setImmediate(b);
        };
    },
    Jp = function () {
      for (var a; (a = Gp.remove()); ) {
        try {
          a.Pa.call(a.scope);
        } catch (b) {
          da(b);
        }
        yp(Cp, a);
      }
      Fp = !1;
    };
  var Lp = function (a) {
      this.g = 0;
      this.s = void 0;
      this.j = this.h = this.i = null;
      this.l = this.o = !1;
      if (a != mg)
        try {
          var b = this;
          a.call(
            void 0,
            function (c) {
              Kp(b, 2, c);
            },
            function (c) {
              Kp(b, 3, c);
            }
          );
        } catch (c) {
          Kp(this, 3, c);
        }
    },
    Mp = function () {
      this.next = this.context = this.h = this.j = this.g = null;
      this.i = !1;
    };
  Mp.prototype.reset = function () {
    this.context = this.h = this.j = this.g = null;
    this.i = !1;
  };
  var Np = new xp(
      function () {
        return new Mp();
      },
      function (a) {
        a.reset();
      }
    ),
    Op = function (a, b, c) {
      var d = Np.get();
      d.j = a;
      d.h = b;
      d.context = c;
      return d;
    },
    Qp = function (a, b, c) {
      Pp(a, b, c, null) || Ip(ee(b, a));
    },
    Rp = function (a) {
      return new Lp(function (b) {
        var c = a.length,
          d = [];
        if (c)
          for (
            var e = function (h, l, m) {
                c--;
                d[h] = l ? { gf: !0, value: m } : { gf: !1, reason: m };
                0 == c && b(d);
              },
              f = 0,
              g;
            f < a.length;
            f++
          )
            (g = a[f]), Qp(g, ee(e, f, !0), ee(e, f, !1));
        else b(d);
      });
    };
  Lp.prototype.then = function (a, b, c) {
    return Sp(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
  };
  Lp.prototype.$goog_Thenable = !0;
  var Up = function (a, b) {
    b = Op(b, b);
    b.i = !0;
    Tp(a, b);
  };
  Lp.prototype.v = function (a, b) {
    return Sp(this, null, a, b);
  };
  Lp.prototype.catch = Lp.prototype.v;
  Lp.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new Vp(a);
      Ip(function () {
        Wp(this, b);
      }, this);
    }
  };
  var Wp = function (a, b) {
      if (0 == a.g)
        if (a.i) {
          var c = a.i;
          if (c.h) {
            for (var d = 0, e = null, f = null, g = c.h; g && (g.i || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
            e &&
              (0 == c.g && 1 == d ? Wp(c, b) : (f ? ((d = f), d.next == c.j && (c.j = d), (d.next = d.next.next)) : Xp(c), Yp(c, e, 3, b)));
          }
          a.i = null;
        } else Kp(a, 3, b);
    },
    Tp = function (a, b) {
      a.h || (2 != a.g && 3 != a.g) || Zp(a);
      a.j ? (a.j.next = b) : (a.h = b);
      a.j = b;
    },
    Sp = function (a, b, c, d) {
      var e = Op(null, null, null);
      e.g = new Lp(function (f, g) {
        e.j = b
          ? function (h) {
              try {
                var l = b.call(d, h);
                f(l);
              } catch (m) {
                g(m);
              }
            }
          : f;
        e.h = c
          ? function (h) {
              try {
                var l = c.call(d, h);
                void 0 === l && h instanceof Vp ? g(h) : f(l);
              } catch (m) {
                g(m);
              }
            }
          : g;
      });
      e.g.i = a;
      Tp(a, e);
      return e.g;
    };
  Lp.prototype.A = function (a) {
    this.g = 0;
    Kp(this, 2, a);
  };
  Lp.prototype.B = function (a) {
    this.g = 0;
    Kp(this, 3, a);
  };
  var Kp = function (a, b, c) {
      0 == a.g &&
        (a === c && ((b = 3), (c = new TypeError("da"))),
        (a.g = 1),
        Pp(c, a.A, a.B, a) || ((a.s = c), (a.g = b), (a.i = null), Zp(a), 3 != b || c instanceof Vp || $p(a, c)));
    },
    Pp = function (a, b, c, d) {
      if (a instanceof Lp) return Tp(a, Op(b || mg, c || null, d)), !0;
      if (a)
        try {
          var e = !!a.$goog_Thenable;
        } catch (g) {
          e = !1;
        }
      else e = !1;
      if (e) return a.then(b, c, d), !0;
      if (vd(a))
        try {
          var f = a.then;
          if ("function" === typeof f) return aq(a, f, b, c, d), !0;
        } catch (g) {
          return c.call(d, g), !0;
        }
      return !1;
    },
    aq = function (a, b, c, d, e) {
      var f = !1,
        g = function (l) {
          f || ((f = !0), c.call(e, l));
        },
        h = function (l) {
          f || ((f = !0), d.call(e, l));
        };
      try {
        b.call(a, g, h);
      } catch (l) {
        h(l);
      }
    },
    Zp = function (a) {
      a.o || ((a.o = !0), Ip(a.u, a));
    },
    Xp = function (a) {
      var b = null;
      a.h && ((b = a.h), (a.h = b.next), (b.next = null));
      a.h || (a.j = null);
      return b;
    };
  Lp.prototype.u = function () {
    for (var a; (a = Xp(this)); ) Yp(this, a, this.g, this.s);
    this.o = !1;
  };
  var Yp = function (a, b, c, d) {
      if (3 == c && b.h && !b.i) for (; a && a.l; a = a.i) a.l = !1;
      if (b.g) (b.g.i = null), bq(b, c, d);
      else
        try {
          b.i ? b.j.call(b.context) : bq(b, c, d);
        } catch (e) {
          cq.call(null, e);
        }
      yp(Np, b);
    },
    bq = function (a, b, c) {
      2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c);
    },
    $p = function (a, b) {
      a.l = !0;
      Ip(function () {
        a.l && cq.call(null, b);
      });
    },
    cq = da,
    Vp = function (a) {
      aa.call(this, a);
    };
  G(Vp, aa);
  Vp.prototype.name = "cancel";
  var dq = function (a, b) {
    R.call(this);
    this.h = a || 1;
    this.g = b || n;
    this.i = F(this.Kf, this);
    this.j = Date.now();
  };
  G(dq, R);
  k = dq.prototype;
  k.enabled = !1;
  k.Na = null;
  k.Kf = function () {
    if (this.enabled) {
      var a = Date.now() - this.j;
      0 < a && a < 0.8 * this.h
        ? (this.Na = this.g.setTimeout(this.i, this.h - a))
        : (this.Na && (this.g.clearTimeout(this.Na), (this.Na = null)),
          this.dispatchEvent("tick"),
          this.enabled && (this.stop(), this.start()));
    }
  };
  k.start = function () {
    this.enabled = !0;
    this.Na || ((this.Na = this.g.setTimeout(this.i, this.h)), (this.j = Date.now()));
  };
  k.stop = function () {
    this.enabled = !1;
    this.Na && (this.g.clearTimeout(this.Na), (this.Na = null));
  };
  k.K = function () {
    dq.O.K.call(this);
    this.stop();
    delete this.g;
  };
  var eq = function (a, b, c) {
    if ("function" === typeof a) c && (a = F(a, c));
    else if (a && "function" == typeof a.handleEvent) a = F(a.handleEvent, a);
    else throw Error("ea");
    return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0);
  };
  var fq = function (a, b, c) {
    M.call(this);
    this.g = a;
    this.j = b || 0;
    this.h = c;
    this.i = F(this.Pe, this);
  };
  G(fq, M);
  k = fq.prototype;
  k.Ib = 0;
  k.K = function () {
    fq.O.K.call(this);
    this.stop();
    delete this.g;
    delete this.h;
  };
  k.start = function (a) {
    this.stop();
    this.Ib = eq(this.i, void 0 !== a ? a : this.j);
  };
  k.Gc = function (a) {
    this.isActive() || this.start(a);
  };
  k.stop = function () {
    this.isActive() && n.clearTimeout(this.Ib);
    this.Ib = 0;
  };
  k.isActive = function () {
    return 0 != this.Ib;
  };
  k.Pe = function () {
    this.Ib = 0;
    this.g && this.g.call(this.h);
  };
  var gq = function (a) {
    try {
      return n.JSON.parse(a);
    } catch (b) {}
    a = String(a);
    if (
      /^\s*$/.test(a)
        ? 0
        : /^[\],:{}\s\u2028\u2029]*$/.test(
            a
              .replace(/\\["\\\/bfnrtu]/g, "@")
              .replace(
                /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                "]"
              )
              .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
          )
    )
      try {
        return eval("(" + a + ")");
      } catch (b) {}
    throw Error("fa`" + a);
  };
  var hq = function (a) {
    switch (a) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        return !0;
      default:
        return !1;
    }
  };
  var iq = function () {};
  iq.prototype.g = null;
  iq.prototype.getOptions = function () {
    var a;
    (a = this.g) || ((a = {}), jq(this) && ((a[0] = !0), (a[1] = !0)), (a = this.g = a));
    return a;
  };
  var kq,
    lq = function () {};
  G(lq, iq);
  var mq = function (a) {
      return (a = jq(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    jq = function (a) {
      if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.h = d);
          } catch (e) {}
        }
        throw Error("ga");
      }
      return a.h;
    };
  kq = new lq();
  var nq = function (a) {
    R.call(this);
    this.headers = new Map();
    this.A = a || null;
    this.g = !1;
    this.v = this.P = null;
    this.F = "";
    this.j = 0;
    this.h = this.D = this.s = this.B = !1;
    this.l = 0;
    this.u = null;
    this.o = "";
    this.H = this.i = !1;
  };
  G(nq, R);
  var oq = /^https?$/i,
    pq = ["POST", "PUT"],
    qq = [],
    rq = function (a, b, c, d, e, f, g) {
      var h = new nq();
      qq.push(h);
      b && h.listen("complete", b);
      h.td("ready", h.U);
      f && (h.l = Math.max(0, f));
      g && (h.i = g);
      h.send(a, c, d, e);
    };
  nq.prototype.U = function () {
    this.ga();
    ya(qq, this);
  };
  nq.prototype.ge = function () {
    return this.o;
  };
  nq.prototype.he = function () {
    return this.i;
  };
  nq.prototype.send = function (a, b, c, d) {
    if (this.P) throw Error("ha`" + this.F + "`" + a);
    b = b ? b.toUpperCase() : "GET";
    this.F = a;
    this.j = 0;
    this.B = !1;
    this.g = !0;
    this.P = this.A ? mq(this.A) : mq(kq);
    this.v = this.A ? this.A.getOptions() : kq.getOptions();
    this.P.onreadystatechange = F(this.G, this);
    try {
      (this.D = !0), this.P.open(b, String(a), !0), (this.D = !1);
    } catch (g) {
      sq(this);
      return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype) for (var e in d) c.set(e, d[e]);
      else if ("function" === typeof d.keys && "function" === typeof d.get) {
        e = t(d.keys());
        for (var f = e.next(); !f.done; f = e.next()) (f = f.value), c.set(f, d.get(f));
      } else throw Error("ia`" + String(d));
    d = Array.from(c.keys()).find(function (g) {
      return "content-type" == g.toLowerCase();
    });
    e = n.FormData && a instanceof n.FormData;
    !va(pq, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    b = t(c);
    for (d = b.next(); !d.done; d = b.next()) (c = t(d.value)), (d = c.next().value), (c = c.next().value), this.P.setRequestHeader(d, c);
    this.o && (this.P.responseType = this.o);
    "withCredentials" in this.P && this.P.withCredentials !== this.i && (this.P.withCredentials = this.i);
    try {
      tq(this),
        0 < this.l &&
          ((this.H = uq(this.P)) ? ((this.P.timeout = this.l), (this.P.ontimeout = F(this.N, this))) : (this.u = eq(this.N, this.l, this))),
        (this.s = !0),
        this.P.send(a),
        (this.s = !1);
    } catch (g) {
      sq(this);
    }
  };
  var uq = function (a) {
    return H && "number" === typeof a.timeout && void 0 !== a.ontimeout;
  };
  nq.prototype.N = function () {
    "undefined" != typeof Wd && this.P && ((this.j = 8), this.dispatchEvent("timeout"), this.abort(8));
  };
  var sq = function (a) {
      a.g = !1;
      a.P && ((a.h = !0), a.P.abort(), (a.h = !1));
      a.j = 5;
      vq(a);
      wq(a);
    },
    vq = function (a) {
      a.B || ((a.B = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
  nq.prototype.abort = function (a) {
    this.P &&
      this.g &&
      ((this.g = !1),
      (this.h = !0),
      this.P.abort(),
      (this.h = !1),
      (this.j = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      wq(this));
  };
  nq.prototype.K = function () {
    this.P && (this.g && ((this.g = !1), (this.h = !0), this.P.abort(), (this.h = !1)), wq(this, !0));
    nq.O.K.call(this);
  };
  nq.prototype.G = function () {
    this.pa || (this.D || this.s || this.h ? xq(this) : this.R());
  };
  nq.prototype.R = function () {
    xq(this);
  };
  var xq = function (a) {
      if (a.g && "undefined" != typeof Wd && (!a.v[1] || 4 != (a.P ? a.P.readyState : 0) || 2 != a.getStatus()))
        if (a.s && 4 == (a.P ? a.P.readyState : 0)) eq(a.G, 0, a);
        else if ((a.dispatchEvent("readystatechange"), 4 == (a.P ? a.P.readyState : 0))) {
          a.g = !1;
          try {
            yq(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : ((a.j = 6), a.getStatus(), vq(a));
          } finally {
            wq(a);
          }
        }
    },
    wq = function (a, b) {
      if (a.P) {
        tq(a);
        var c = a.P,
          d = a.v[0] ? function () {} : null;
        a.P = null;
        a.v = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    tq = function (a) {
      a.P && a.H && (a.P.ontimeout = null);
      a.u && (n.clearTimeout(a.u), (a.u = null));
    };
  nq.prototype.isActive = function () {
    return !!this.P;
  };
  var yq = function (a) {
    var b = a.getStatus(),
      c;
    if (!(c = hq(b))) {
      if ((b = 0 === b))
        (a = String(a.F).match(oi)[1] || null),
          !a && n.self && n.self.location && (a = n.self.location.protocol.slice(0, -1)),
          (b = !oq.test(a ? a.toLowerCase() : ""));
      c = b;
    }
    return c;
  };
  nq.prototype.getStatus = function () {
    try {
      return 2 < (this.P ? this.P.readyState : 0) ? this.P.status : -1;
    } catch (a) {
      return -1;
    }
  };
  var zq = function (a) {
    if (a.P) {
      a: {
        a = a.P.responseText;
        if (n.JSON)
          try {
            var b = n.JSON.parse(a);
            break a;
          } catch (c) {}
        b = gq(a);
      }
      return b;
    }
  };
  var jp = function () {
    R.call(this);
    var a = this;
    this.h = navigator.onLine;
    this.g = new Aq(function (c) {
      return Bq(a, c);
    });
    N(this, this.g);
    var b = new U(this);
    N(this, b);
    b.listen(window, ["online", "offline"], this.i);
    this.h ||
      Ip(function () {
        return a.g.start();
      });
  };
  E(jp, R);
  jp.prototype.qc = function () {
    return this.h;
  };
  var Bq = function (a, b) {
    a.h != b && ((a.h = b), a.dispatchEvent(new Cq(b)), b ? a.g.stop() : a.g.start());
  };
  jp.prototype.i = function () {
    Bq(this, navigator.onLine);
  };
  jp.prototype.K = function () {
    this.g.stop();
    R.prototype.K.call(this);
  };
  jp.L = function () {
    return yh(jp);
  };
  var Cq = function (a) {
    fj.call(this, "change");
    this.qc = a;
  };
  E(Cq, fj);
  var Aq = function (a) {
    M.call(this);
    var b = this;
    this.o = a;
    this.j = !1;
    this.h = 0;
    this.l = new fq(function () {
      return Dq(b, !1);
    }, 1e4);
    N(this, this.l);
    this.i = new fq(function () {
      return Eq(b);
    }, 5e3);
    N(this, this.i);
    this.g = null;
  };
  E(Aq, M);
  Aq.prototype.start = function () {
    this.j || ((this.j = !0), (this.h = 0), Eq(this));
  };
  Aq.prototype.stop = function () {
    Fq(this);
    this.j = !1;
  };
  var Eq = function (a) {
      navigator.onLine || a.h++;
      var b = Ki().toString();
      a.g = new Image();
      a.g.onload = function () {
        return Dq(a, !0);
      };
      a.g.onerror = function () {
        return Dq(a, !1);
      };
      a.g.onabort = function () {
        return Dq(a, !1);
      };
      a.g.src = b;
      a.l.start();
    },
    Dq = function (a, b) {
      Fq(a);
      b ? (a.o(!0), a.stop()) : !navigator.onLine && 2 <= a.h ? (a.o(!1), a.stop()) : a.i.start();
    },
    Fq = function (a) {
      a.g && ((a.g.onload = a.g.onerror = a.g.onabort = null), (a.g = null));
      a.l.stop();
      a.i.stop();
    },
    Ji = new yi("https://www.google.com/images/cleardot.gif");
  var Iq = function (a) {
    R.call(this);
    this.h = a;
    this.enabled = !1;
    this.i = function () {
      return Date.now();
    };
    this.j = this.i();
  };
  E(Iq, R);
  var Jq = function (a, b) {
    a.h = b;
    a.g && a.enabled ? (a.stop(), a.start()) : a.g && a.stop();
  };
  Iq.prototype.start = function () {
    var a = this;
    this.enabled = !0;
    this.g ||
      ((this.g = setTimeout(function () {
        Kq(a);
      }, this.h)),
      (this.j = this.i()));
  };
  Iq.prototype.stop = function () {
    this.enabled = !1;
    this.g && (clearTimeout(this.g), (this.g = void 0));
  };
  var Kq = function (a) {
    if (a.enabled) {
      var b = Math.max(a.i() - a.j, 0);
      b < 0.8 * a.h
        ? (a.g = setTimeout(function () {
            Kq(a);
          }, a.h - b))
        : (a.g && (clearTimeout(a.g), (a.g = void 0)), a.dispatchEvent("tick"), a.enabled && (a.stop(), a.start()));
    } else a.g = void 0;
  };
  var Lq = function (a) {
    this.J = v(a);
  };
  E(Lq, K);
  var Mq = function (a) {
    this.J = v(a);
  };
  E(Mq, K);
  var Nq = function (a) {
    this.g = this.h = this.i = a;
  };
  Nq.prototype.reset = function () {
    this.g = this.h = this.i;
  };
  Nq.prototype.aa = function () {
    return this.h;
  };
  var Oq = function (a) {
    this.J = v(a);
  };
  E(Oq, K);
  var Pq = function (a) {
    this.J = v(a);
  };
  E(Pq, K);
  Pq.Ka = [1];
  var Qq = function (a) {
    this.J = v(a);
  };
  E(Qq, K);
  var Rq = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
  new Pq();
  var Sq = function (a) {
    this.J = v(a);
  };
  E(Sq, K);
  var Tq = function (a) {
    this.J = v(a);
  };
  E(Tq, K);
  var Uq = function (a) {
    this.J = v(a, 35);
  };
  E(Uq, K);
  var Vq = function (a, b) {
    return Cf(a, 8, b);
  };
  Uq.Ka = [3, 20, 27];
  var Wq = function (a) {
    this.J = v(a, 19);
  };
  E(Wq, K);
  Wq.prototype.Xb = function (a) {
    return Yc(this, 2, a);
  };
  Wq.Ka = [3, 5];
  var Xq = function (a) {
    this.J = v(a, 7);
  };
  E(Xq, K);
  var Yq = (function (a) {
    return function (b) {
      if (null == b || "" == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        Ya(b, 32);
        b = ub(a, b);
      }
      return b;
    };
  })(Xq);
  Xq.Ka = [5, 6];
  var Zq = function (a) {
    this.J = v(a);
  };
  E(Zq, K);
  var $q = new (function (a, b) {
    this.h = a;
    this.g = b;
    this.i = wf;
    this.defaultValue = void 0;
  })(175237375, Zq);
  var dr = function (a) {
    M.call(this);
    var b = this;
    this.h = [];
    this.R = "";
    this.N = !1;
    this.S = this.G = -1;
    this.U = !1;
    this.u = this.j = null;
    this.F = this.H = this.s = this.l = 0;
    this.ba = 1;
    this.timeoutMillis = 0;
    this.v = !1;
    this.Db = a.Db;
    this.lb = a.lb || function () {};
    this.i = new ar(a.Db, a.ob);
    this.network = a.network;
    this.Fb = a.Fb || null;
    this.bufferSize = 1e3;
    this.ca = ee(Rg, 0, 1);
    this.B = a.Lf || null;
    this.Za = a.Za || null;
    this.Nb = a.Nb || !1;
    this.Eb = a.Eb || null;
    this.withCredentials = !a.de;
    this.ob = a.ob || !1;
    this.Z = !this.ob && !!eh() && !!eh().navigator && void 0 !== eh().navigator.sendBeacon;
    var c = Yc(new Sq(), 1, 1);
    br(this.i, c);
    this.o = new Nq(1e4);
    this.g = new Iq(this.o.aa());
    a = cr(this, a.Xd);
    vj(this.g, "tick", a, !1, this);
    this.A = new Iq(6e5);
    vj(this.A, "tick", a, !1, this);
    this.Nb || this.A.start();
    this.ob ||
      (vj(document, "visibilitychange", function () {
        "hidden" === document.visibilityState && b.D();
      }),
      vj(document, "pagehide", this.D, !1, this));
  };
  E(dr, M);
  var cr = function (a, b) {
    return b
      ? function () {
          b().then(function () {
            a.flush();
          });
        }
      : function () {
          a.flush();
        };
  };
  dr.prototype.K = function () {
    this.D();
    this.g.stop();
    this.A.stop();
    M.prototype.K.call(this);
  };
  var er = function (a) {
    a.B ||
      (a.B =
        0.01 > a.ca() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.B;
  };
  dr.prototype.ee = function (a) {
    a instanceof Uq ? this.log(a) : ((a = Vq(new Uq(), Df(a))), this.log(a));
  };
  var fr = function (a, b) {
    a.o = new Nq(1 > b ? 1 : b);
    Jq(a.g, a.o.aa());
  };
  dr.prototype.log = function (a) {
    a = a.clone();
    var b = this.ba++;
    a = B(a, 21, b);
    if (!zf(a)) {
      var c = Date.now();
      b = a;
      c = Number.isFinite(c) ? c.toString() : "0";
      sf(b, 1, pb(c));
    }
    null != yf(a, 15) || B(a, 15, 60 * new Date().getTimezoneOffset());
    this.j && ((b = a), (c = this.j.clone()), C(b, 16, c));
    b = this.h.length - this.bufferSize + 1;
    0 < b && (this.h.splice(0, b), (this.l += b));
    this.h.push(a);
    this.Nb || this.g.enabled || this.g.start();
  };
  dr.prototype.flush = function (a, b) {
    var c = this;
    if (0 === this.h.length) a && a();
    else if (this.v) gr(this.i, 3), hr(this);
    else {
      var d = Date.now();
      if (this.S > d && this.G < d) b && b("throttled");
      else {
        gr(this.i, 1);
        var e = ir(this.i, this.h, this.l, this.s, this.Fb, this.H, this.F);
        d = {};
        var f = this.lb();
        f && (d.Authorization = f);
        var g = er(this);
        this.Za && ((d["X-Goog-AuthUser"] = this.Za), (g = ui(g, "authuser", this.Za)));
        this.Eb && ((d["X-Goog-PageId"] = this.Eb), (g = ui(g, "pageId", this.Eb)));
        if (f && this.R === f) b && b("stale-auth-token");
        else {
          this.h = [];
          this.g.enabled && this.g.stop();
          this.l = 0;
          var h = Df(e),
            l;
          this.u && this.u.isSupported(h.length) && (l = this.u.Ej(h));
          var m = {
              url: g,
              body: h,
              cf: 1,
              requestHeaders: d,
              requestType: "POST",
              withCredentials: this.withCredentials,
              timeoutMillis: this.timeoutMillis
            },
            p = function (r) {
              c.o.reset();
              Jq(c.g, c.o.aa());
              if (r) {
                var A = null;
                try {
                  var J = JSON.stringify(JSON.parse(r.replace(")]}'\n", "")));
                  A = Yq(J);
                } catch (ba) {}
                if (A) {
                  r = Number;
                  J = "-1";
                  J = void 0 === J ? "0" : J;
                  var S = zf(A);
                  r = r(null != S ? S : J);
                  0 < r && ((c.G = Date.now()), (c.S = c.G + r));
                  A = $q.g ? $q.i(A, $q.g, $q.h, !0) : $q.i(A, $q.h, null, !0);
                  if ((r = null === A ? void 0 : A))
                    (A = -1), (A = void 0 === A ? 0 : A), (r = lb(rf(r, 1))), (A = null != r ? r : A), -1 !== A && (c.U || fr(c, A));
                }
              }
              a && a();
              c.s = 0;
            },
            u = function (r, A) {
              var J = e.J;
              var S = Fb(J),
                ba = S,
                ka = !(2 & S),
                T = !!(2 & ba);
              var fd = T ? 1 : 2;
              S = 1 === fd;
              var ww = 2 === fd;
              fd = !1;
              ka && (ka = !T);
              T = qf(J, ba, 3);
              T = Array.isArray(T) ? T : Pb;
              var I = Ua(T),
                Gq = !!(4 & I);
              if (!Gq) {
                var ca = I;
                0 === ca && (ca = Kb(ca, ba, fd));
                ca = Xa(ca, 1, !0);
                I = T;
                var Ke = ba,
                  gd = !!(2 & ca);
                gd && (Ke = Xa(Ke, 2, !0));
                for (var Dk = !gd, Ek = !0, Nh = 0, Fk = 0; Nh < I.length; Nh++) {
                  var Gk = sb(I[Nh], Uq, Ke);
                  if (Gk instanceof Uq) {
                    if (!gd) {
                      var Hq = !!(Ua(Gk.J) & 2);
                      Dk && (Dk = !Hq);
                      Ek && (Ek = Hq);
                    }
                    I[Fk++] = Gk;
                  }
                }
                Fk < Nh && (I.length = Fk);
                ca = Xa(ca, 4, !0);
                ca = Xa(ca, 16, Ek);
                ca = Xa(ca, 8, Dk);
                Va(I, ca);
                gd && Object.freeze(I);
                I = ca;
              }
              ca = !!(8 & I) || (S && !T.length);
              if (ka && !ca) {
                Jb(I) && ((T = Ta(T)), (I = Kb(I, ba, fd)), (ba = Ib(J, ba, 3, T)));
                ka = T;
                for (ca = 0; ca < ka.length; ca++) (Ke = ka[ca]), (gd = Hb(Ke)), Ke !== gd && (ka[ca] = gd);
                I = Xa(I, 8, !0);
                I = Xa(I, 16, !ka.length);
                Va(ka, I);
              }
              Jb(I) ||
                ((ka = I),
                S ? (I = Xa(I, !T.length || (16 & I && (!Gq || 32 & I)) ? 2 : 2048, !0)) : fd || (I = Xa(I, 32, !1)),
                I !== ka && Va(T, I),
                S && Object.freeze(T));
              ww && Jb(I) && ((T = Ta(T)), (I = Kb(I, ba, fd)), Va(T, I), Ib(J, ba, 3, T));
              J = T;
              ba = yf(e, 14);
              S = c.o;
              S.g = Math.min(3e5, 2 * S.g);
              S.h = Math.min(3e5, S.g + Math.round(0.2 * (Math.random() - 0.5) * S.g));
              Jq(c.g, c.o.aa());
              401 === r && f && (c.R = f);
              ba && (c.l += ba);
              void 0 === A && (A = (500 <= r && 600 > r) || 401 === r || 0 === r);
              A && ((c.h = J.concat(c.h)), c.Nb || c.g.enabled || c.g.start());
              b && b("net-send-failed", r);
              ++c.s;
            },
            w = function () {
              c.network && c.network.send(m, p, u);
            };
          l
            ? l.then(
                function (r) {
                  m.requestHeaders["Content-Encoding"] = "gzip";
                  m.requestHeaders["Content-Type"] = "application/binary";
                  m.body = r;
                  m.cf = 2;
                  w();
                },
                function () {
                  w();
                }
              )
            : w();
        }
      }
    }
  };
  dr.prototype.D = function () {
    jr(this.i, !0);
    this.N && (gr(this.i, 3), hr(this));
    this.flush();
    jr(this.i, !1);
  };
  var hr = function (a) {
      kr(a, function (b, c) {
        b = ui(b, "format", "json");
        var d = !1;
        try {
          d = eh().navigator.sendBeacon(b, Df(c));
        } catch (e) {}
        a.v && !d && (a.v = !1);
        return d;
      });
    },
    kr = function (a, b) {
      if (0 !== a.h.length) {
        var c = er(a);
        for (var d = c.search(wi), e = 0, f, g = []; 0 <= (f = vi(c, e, d)); )
          g.push(c.substring(e, f)), (e = Math.min(c.indexOf("&", f) + 1 || d, d));
        g.push(c.slice(e));
        c = g.join("").replace(xi, "$1");
        c = ti(c, "auth", a.lb(), "authuser", a.Za || "0");
        for (d = 0; 10 > d && a.h.length; ++d) {
          e = a.h.slice(0, 32);
          f = ir(a.i, e, a.l, a.s, a.Fb, a.H, a.F);
          if (!b(c, f)) {
            ++a.s;
            break;
          }
          a.l = 0;
          a.s = 0;
          a.H = 0;
          a.F = 0;
          a.h = a.h.slice(e.length);
        }
        a.g.enabled && a.g.stop();
      }
    },
    ar = function (a, b) {
      this.ob = b = void 0 === b ? !1 : b;
      this.h = this.locale = null;
      this.g = new Wq();
      Number.isInteger(a) && this.g.Xb(a);
      b || (this.locale = document.documentElement.getAttribute("lang"));
      br(this, new Sq());
    };
  ar.prototype.Xb = function (a) {
    this.g.Xb(a);
    return this;
  };
  var br = function (a, b) {
      C(a.g, 1, b);
      Af(b, 1) || Yc(b, 1, 1);
      if (!a.ob) {
        b = lr(a);
        var c = rf(b, 5);
        ((null == c || "string" === typeof c) && c) || Cf(b, 5, a.locale);
      }
      a.h && ((b = lr(a)), wf(b, Pq, 9) || C(b, 9, a.h));
    },
    gr = function (a, b) {
      uf(mr(a), Qq, 11) && ((a = nr(a)), Yc(a, 1, b));
    },
    jr = function (a, b) {
      uf(mr(a), Qq, 11) && ((a = nr(a)), Bf(a, 2, b));
    },
    mr = function (a) {
      return wf(a.g, Sq, 1);
    },
    or = function (a, b) {
      var c = void 0 === c ? Rq : c;
      b(eh(), c)
        .then(function (d) {
          a.h = d;
          d = lr(a);
          C(d, 9, a.h);
          return !0;
        })
        .catch(function () {
          return !1;
        });
    },
    lr = function (a) {
      a = mr(a);
      var b = wf(a, Qq, 11);
      b || ((b = new Qq()), C(a, 11, b));
      return b;
    },
    nr = function (a) {
      a = lr(a);
      var b = wf(a, Oq, 10);
      b || ((b = new Oq()), Bf(b, 2, !1), C(a, 10, b));
      return b;
    },
    ir = function (a, b, c, d, e, f, g) {
      c = void 0 === c ? 0 : c;
      f = void 0 === f ? 0 : f;
      g = void 0 === g ? 0 : g;
      d = void 0 === d ? 0 : d;
      if (uf(mr(a), Qq, 11)) {
        var h = nr(a);
        Xc(h, 3, d);
      }
      uf(mr(a), Qq, 11) && ((d = nr(a)), Xc(d, 4, f));
      uf(mr(a), Qq, 11) && ((f = nr(a)), Xc(f, 5, g));
      a = a.g.clone();
      a = sf(a, 4, pb(Date.now().toString()));
      b = xf(a, 3, b);
      e &&
        ((a = new Lq()),
        (e = Xc(a, 13, e)),
        (a = new Mq()),
        (e = C(a, 2, e)),
        (a = new Tq()),
        (e = C(a, 1, e)),
        (e = Yc(e, 2, 9)),
        C(b, 18, e));
      c && B(b, 14, c);
      return b;
    };
  var pr = function (a) {
    var b;
    this.h = (b = void 0 === b ? !1 : b) ? null : a;
    this.g = b ? a : null;
    this.h && ((a = this.h), (a.N = a.Z));
  };
  pr.prototype.i = function (a) {
    var b = this.g ? this.g.ee.bind(this.g) : this.h.log.bind(this.h),
      c = this.g ? this.g.flush.bind(this.g) : this.h.flush.bind(this.h);
    a = Vq(new Uq(), Df(a));
    b(a);
    c();
  };
  var qr = function (a) {
    var b;
    this.h = (b = void 0 === b ? !1 : b) ? null : a;
    this.g = b ? a : null;
  };
  qr.prototype.i = function (a) {
    var b = this.g ? this.g.ee.bind(this.g) : this.h.log.bind(this.h),
      c = this.g ? this.g.flush.bind(this.g) : this.h.flush.bind(this.h);
    a = Vq(new Uq(), Df(a));
    b(a);
    return new Lp(
      function (d) {
        c(d, function () {
          d();
        });
      }.bind(this)
    );
  };
  var rr = function () {
    dp.call(this);
  };
  E(rr, dp);
  var sr = new Yo("high_frequency_builder");
  var tr = function (a, b, c) {
    a = new dq(a);
    N(c, a);
    var d = new U(c);
    N(c, d);
    d.listen(a, "tick", b);
    a.start();
  };
  var ur = function () {
    dp.call(this);
  };
  E(ur, dp);
  var vr = function (a, b) {
      var c = 1e3 * Date.now(),
        d = new $o();
      var e = new Zo();
      e = B(e, 1, c);
      C(d, 1, e);
      Yc(d, 3, 1);
      C(a.g, 8, d);
      B(a.g, 12, b);
      B(a.g, 13, b);
      B(a.g, 4, c);
      B(a.g, 3, b);
      return a;
    },
    wr = new Yo("system_builder");
  var xr = function (a, b) {
    if (b && a in b) return a;
    var c = Le ? "Webkit" : Je ? "Moz" : H ? "ms" : null;
    return c ? ((c = c.toLowerCase()), (a = c + Jg(a)), void 0 === b || a in b ? a : null) : null;
  };
  var yr = function () {
    fj.call(this, "visibilitychange");
  };
  E(yr, fj);
  var ld = new WeakMap(),
    hd = function (a, b) {
      a = [a];
      for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
      return a.join("\v");
    };
  var zr = function (a) {
    R.call(this);
    this.g = a || qd();
    if ((this.h = this.hf())) this.i = vj(this.g.g, this.h, F(this.mf, this));
  };
  G(zr, R);
  k = zr.prototype;
  k.hf = nd(function () {
    var a = this.isSupported(),
      b = "hidden" != this.lc();
    if (a) {
      var c;
      b ? (c = (((Le ? "Webkit" : Je ? "Moz" : H ? "ms" : null) || "") + "visibilitychange").toLowerCase()) : (c = "visibilitychange");
      a = c;
    } else a = null;
    return a;
  });
  k.lc = nd(function () {
    return xr("hidden", this.g.g);
  });
  k.jf = nd(function () {
    return xr("visibilityState", this.g.g);
  });
  k.isSupported = function () {
    return !!this.lc();
  };
  k.mf = function () {
    var a = this.isSupported() ? this.g.g[this.jf()] : null;
    a = new yr(!!this.g.g[this.lc()], a);
    this.dispatchEvent(a);
  };
  k.K = function () {
    Dj(this.i);
    zr.O.K.call(this);
  };
  var Ar = function (a, b) {
    M.call(this);
    this.h = a;
    this.g = new zr(b);
    N(this, this.g);
    this.i = new U(this);
    N(this, this.i);
    this.g.isSupported() && this.i.listen(this.g, "visibilitychange", this.j);
  };
  E(Ar, M);
  Ar.prototype.j = function () {
    if (this.h.Hd()) {
      var a = this.g;
      a = !!a.g.g[a.lc()];
      a = this.h.Gd(a ? 102001 : 102e3);
      this.h.we(a);
    }
  };
  var Br = function (a, b, c) {
    c = void 0 === c ? !1 : c;
    M.call(this);
    this.h = a;
    this.g = b;
    N(this, this.g);
    this.j = c;
    this.i = null;
  };
  E(Br, M);
  k = Br.prototype;
  k.we = function (a) {
    var b = this.h;
    B(a.g, 6, b.j);
    a = gp(a);
    b.g.add(a);
    b.i = !0;
    b = this.g;
    3 <= b.g.g.W() && b.h.qa();
  };
  k.Gd = function (a) {
    return vr(Cr(this.h, a), this.h.s++);
  };
  k.Qe = function () {
    var a = this.g;
    if (!a.l || a.g.i) {
      var b = gp(Dr(a.g, 691));
      b = Er(a.g, [b]);
      a.o.i(b);
    }
    a.j();
    this.h.l = !1;
    this.i && (nc(this.i), (this.i = null));
  };
  k.Se = function () {
    var a = this.h,
      b = Dr(a, 716);
    Fr(a, b);
    b = gp(b);
    a.g.add(b);
    a.u = !0;
    a.l = !0;
    this.g.initialize();
    this.g.h.qa();
    this.j && (this.i = new Ar(this));
  };
  k.Re = function () {
    this.g.j();
    Rp(Array.from(this.g.i)).then();
  };
  k.Hd = function () {
    var a = this.h;
    return a.u && a.l && !0;
  };
  var Gr = function (a, b, c) {
    M.call(this);
    this.o = null != c ? a.bind(c) : a;
    this.l = b;
    this.j = null;
    this.h = !1;
    this.i = 0;
    this.g = null;
  };
  E(Gr, M);
  k = Gr.prototype;
  k.qa = function (a) {
    this.j = arguments;
    this.g || this.i ? (this.h = !0) : Hr(this);
  };
  k.stop = function () {
    this.g && (n.clearTimeout(this.g), (this.g = null), (this.h = !1), (this.j = null));
  };
  k.pause = function () {
    this.i++;
  };
  k.resume = function () {
    this.i--;
    this.i || !this.h || this.g || ((this.h = !1), Hr(this));
  };
  k.K = function () {
    M.prototype.K.call(this);
    this.stop();
  };
  var Hr = function (a) {
    a.g = eq(function () {
      a.g = null;
      a.h && !a.i && ((a.h = !1), Hr(a));
    }, a.l);
    var b = a.j;
    a.j = null;
    a.o.apply(null, b);
  };
  var Ir = function (a, b, c, d, e) {
    M.call(this);
    this.g = a;
    this.u = b;
    this.o = c;
    this.h = new Gr(this.j, 3e3, this);
    this.i = new Set();
    this.l = d;
    this.s = e || 6e4;
  };
  E(Ir, M);
  Ir.prototype.initialize = function () {
    tr(this.s, this.h.qa, this.h);
    tr(36e5, this.v, this);
  };
  Ir.prototype.j = function () {
    var a = this;
    if (0 != this.g.g.W() && (!this.l || this.g.i)) {
      var b = Jr(this.g),
        c = this.u.i(b);
      c &&
        (Up(c, function () {
          return void a.i.delete(c);
        }),
        this.i.add(c));
    }
  };
  Ir.prototype.v = function () {
    var a = this.g,
      b = Dr(a, 1153);
    b = gp(b);
    a.g.add(b);
    this.h.qa();
  };
  var Kr = function () {};
  Kr.prototype.md = function () {
    return new rr();
  };
  var Lr = function () {
    this.h = {};
    this.i = {};
    this.g = null;
  };
  var Mr = function () {
    this.g = [];
  };
  Mr.prototype.add = function (a) {
    this.g.push(a);
  };
  Mr.prototype.W = function () {
    return this.g.length;
  };
  var Nr = function () {
    this.g = {};
  };
  Nr.prototype.add = function (a) {
    var b = yf(a.g, 12);
    this.g[b] = a;
  };
  Nr.prototype.remove = function (a) {
    delete this.g[a];
  };
  var Or = function (a) {
    this.J = v(a);
  };
  E(Or, K);
  var Pr = function (a) {
    this.J = v(a, 500);
  };
  E(Pr, K);
  Pr.Ka = [1];
  var Qr = function (a, b) {
      this.h = a;
      this.v = b;
      this.s = 1;
      this.o = this.j = null;
      this.A = new Nr();
      this.g = new Mr();
      this.l = this.u = this.i = !1;
    },
    Cr = function (a, b) {
      a = ep(new dp().initialize(new Or(), a.v), wr);
      B(a.g, 10, b);
      return a;
    },
    Jr = function (a) {
      var b = a.g,
        c = b.g;
      b.g = [];
      return Er(a, c);
    },
    Er = function (a, b) {
      var c = new Pr();
      var d = a.h.i.clone();
      c = C(c, 2, d);
      d = a.h;
      (d = d.h ? d.h.clone() : null) && C(c, 5, d);
      var e;
      d = a.h;
      for (var f, g = b.length - 1; 0 <= g; g--) {
        var h = wf(b[g], cp, 5);
        if (h && wf(h, gg, 1)) {
          h = wf(h, gg, 1);
          null != vf(h, 12) && void 0 === e && (e = vf(h, 12));
          h = wf(h, fg, 20);
          if (void 0 !== h && void 0 === f) {
            f = new pp();
            var l = vf(h, 2);
            void 0 !== l && Bf(f, 2, l);
            h = vf(h, 1);
            void 0 !== h && Bf(f, 1, h);
          }
          if (void 0 !== e && void 0 !== f) break;
        }
      }
      d = d.g ? d.g.clone() : null;
      if (void 0 !== e || void 0 !== f) d || (d = new dd()), void 0 !== e && Bf(d, 6, e), void 0 !== f && C(d, 13, f);
      (e = d) && C(c, 3, e);
      a = a.h.j.clone();
      C(c, 4, a);
      xf(c, 1, b);
      return c;
    },
    Dr = function (a, b) {
      var c = vr(Cr(a, b), a.s++);
      var d = a.A;
      var e = Object.keys(d.g);
      if (0 == e.length) d = null;
      else {
        for (var f = [], g = 0; g < e.length; g++) {
          var h = Number(e[g]),
            l = d.g[h],
            m = new ap();
          h = B(m, 1, h);
          l = yf(l.g, 10);
          l = B(h, 2, null == l ? void 0 : l);
          f.push(l);
        }
        d = f;
      }
      716 != b && ((b = a.o), B(c.g, 6, a.j), (e = new bp()), (b = B(e, 1, b)), d && xf(b, 2, d), (d = fp(c)), C(d, 3, b));
      Fr(a, c);
      return c;
    },
    Fr = function (a, b) {
      a.j = yf(b.g, 12);
      a.o = yf(wf(wf(b.g, $o, 8), Zo, 1), 1);
    };
  var Rr = function () {};
  Rr.prototype.md = function () {
    return new ur();
  };
  var Sr = function () {
    this.g = this.h = null;
  };
  var Tr = function () {
    this.j = this.l = null;
    this.h = new wp();
    this.g = null;
    this.i = !1;
  };
  var Ur = function () {};
  Ur.prototype.send = function (a, b, c) {
    b = void 0 === b ? function () {} : b;
    c = void 0 === c ? function () {} : c;
    rq(
      a.url,
      function (d) {
        d = d.target;
        if (yq(d)) {
          try {
            var e = d.P ? d.P.responseText : "";
          } catch (f) {
            e = "";
          }
          b(e);
        } else c(d.getStatus());
      },
      a.requestType,
      a.body,
      a.requestHeaders,
      a.timeoutMillis,
      a.withCredentials
    );
  };
  var Vr = function (a, b) {
    M.call(this);
    this.Db = a;
    this.Za = b;
    this.g = !1;
    this.network = new Ur();
  };
  E(Vr, M);
  var Wr = function (a, b) {
    a.lb = b;
  };
  Vr.prototype.de = function () {
    this.v = !0;
    return this;
  };
  var Xr = function (a) {
    var b = new dr({
      Db: a.Db,
      lb: a.lb ? a.lb : Og,
      Za: a.Za,
      Lf: "https://play.google.com/log?format=json&hasfast=true",
      ob: a.g,
      Nb: !1,
      de: a.v,
      Eb: a.Eb,
      Xd: a.Xd,
      network: a.network ? a.network : void 0
    });
    N(a, b);
    a.l && br(b.i, a.l);
    if (a.j) {
      var c = a.j,
        d = lr(b.i);
      Cf(d, 7, c);
    }
    a.i && (b.u = a.i);
    a.Fb && (b.Fb = a.Fb);
    a.h && ((d = a.h) ? (b.j || (b.j = new Ef()), (c = b.j), (d = Df(d)), Cf(c, 4, d)) : b.j && sf(b.j, 4));
    a.s && ((c = a.s), b.j || (b.j = new Ef()), Lb(b.j, 2, c, Ob));
    a.o && ((c = a.o), (b.U = !0), fr(b, c));
    a.u && or(b.i, a.u);
    a.network.Xb && a.network.Xb(a.Db);
    a.network.Gf && a.network.Gf(b);
    return b;
  };
  var Yr = function (a) {
      this.i = void 0 === a ? !1 : a;
      this.g = null;
      this.j = new Wo();
      new dg();
      this.h = [];
    },
    $r = function (a, b) {
      a.g = b;
      ed(a.g.h.h);
      a.g.Se();
      a.h.forEach(function (c) {
        return c();
      });
      a.h.length = 0;
      "undefined" !== typeof window &&
        vj(eh(), "unload", function () {
          a.g.Hd() && Zr(a);
        });
    },
    Zr = function (a) {
      a.g && a.g.Qe();
    };
  Yr.prototype.log = function (a, b, c) {
    var d = this;
    if (this.g) {
      var e = this.g.Gd(a);
      e = ep(e, lp);
      Xo(this.j, ip(e));
      void 0 !== b && b(e);
      c || this.i || kp(e);
      this.g.we(e);
      this.i && this.g && this.g.Re();
    } else
      this.h.push(function () {
        return d.log(a, b, c);
      });
  };
  var cs = function (a) {
      var b = as;
      Ti("n_ugat");
      var c = new Tr();
      Cf(c.h.i, 1, b);
      Yc(c.h.i, 6, 72);
      b = new Lr();
      b.h[lp.g] = new mp();
      var d = Ui("n_ugs"),
        e = Ui("n_rs"),
        f = new op();
      Yc(f.g, 1, d);
      Yc(f.g, 2, e);
      b.i.keep_invariants = f;
      b.g && f.h(b.g);
      c.g = b;
      c.i = !0;
      a = bs(a);
      c.l = new qr(a);
      a = new pr(a);
      c.j = a;
      a = new Sr();
      a.h = c.h;
      null != c.g && (a.g = c.g);
      null == a.g && (a.g = new Lr());
      a.g.h[wr.g] = new Rr();
      a.g.h[sr.g] = new Kr();
      b = a.g;
      d = a.h;
      uf(ad(d), sp, 1) || ((e = ad(d)), (f = new sp()), C(e, 1, f));
      d = wf(ad(d), sp, 1);
      b.g = d;
      d = dc(b.i);
      for (e = 0; e < d.length; e++) d[e].h(b.g);
      a = new Qr(a.h, a.g);
      b = new Ir(a, c.l, c.j, !1, null);
      return new Br(a, b, c.i);
    },
    bs = function (a) {
      var b = !1;
      b = void 0 === b ? !1 : b;
      var c = new Vr(128, "0");
      a &&
        Wr(c, function () {
          return "Bearer " + a();
        });
      b && ((c.g = !0), (c.network = { send: od }));
      return Xr(c);
    };
  var ds = function () {
    R.call(this);
    this.Z = yh(Yr);
    this.G = "";
    this.g = null;
    this.F = [];
    this.h = vc.L();
    N(this, this.h);
    this.i = null;
    this.j = !1;
    this.l = "";
    this.v = !1;
    this.o = null;
    this.U = [];
    this.D = new Set();
    this.H = !1;
    this.R = this.B = this.N = !0;
    this.S = 0;
    this.u = new Gr(this.ba, 50, this);
    this.A = new U(this);
    N(this, this.A);
    this.A.listen(this, "k", this.s).listen(this.h, "F", this.s);
  };
  E(ds, R);
  var ks = function (a, b) {
      var c = !a.g;
      b.sessionId && (a.G = b.sessionId);
      b.embedInfo && ((a.i = new Oc(b.embedInfo)), (a.j = !0));
      a.v = !!b.blankNote;
      a.v ? (a.g && a.j && (a.o = a.g), (a.j = !1), (a.g = null)) : a.o && ((a.g = a.o), (a.j = !0), (a.o = null));
      if (b.savedNode && !a.v) {
        var d = Ec(b.savedNode);
        if (d.length) {
          a.g = new z(d[0]);
          for (var e = 1, f = void 0; (f = d[e]); e++) lo(a.g, new z(f));
          es(a);
        }
      }
      a.g || ((a.g = fs()), (a.l = ""), gs(a));
      b.selectedText && Pc(a.g) && (Oo(a.g, Qc(a.g) + "\n\n" + b.selectedText), es(a));
      if (b.imageUrl) {
        d = hs(a.g.g);
        e = Wi();
        if (Lc.test(b.imageUrl)) {
          if (((f = Mc(b.imageUrl)), !e.includes(f))) return;
        } else
          f = e.find(function (g) {
            return (is[g] || []).some(function (h) {
              var l = b.imageUrl;
              h = "." + h;
              return 0 == ke(h, l.slice(l.length - h.length));
            });
          });
        if (f) {
          e = ym(f);
          e.l = b.imageUrl;
          Dm(e, "l");
          if (!Vn(d)) throw Error("ca");
          d.h = e;
          Yn(d);
          Rn(d);
          lo(a.g, d);
        }
      }
      b.cachedUserInfo && a.h.update(b.cachedUserInfo);
      N(a, a.g);
      a.g.sa(a);
      c && y("speakMessage", js);
      a.u.qa();
    },
    os = function (a, b, c) {
      a.N = !0;
      a.A.X(a, "k", a.s).X(a.h, "F", a.s);
      try {
        c && !a.H && a.h.update(c),
          b &&
            (Bd(
              b,
              function (d) {
                this.g && ls(this, this.g, d);
                ta(
                  this.F,
                  function (e, f, g) {
                    ls(this, e, d);
                    e.i || (e.ga(), xa(g, f));
                  },
                  this
                );
              },
              a
            ),
            es(a)),
          a.g && (ms(a), 0 != a.g.l || ro(a.g) ? ns(a) : a.j && a.i && (Vc(a.g, a.i) || ns(a))),
          a.u.qa();
      } catch (d) {
      } finally {
        a.A.listen(a, "k", a.s).listen(a.h, "F", a.s), a.D.clear(), (a.H = !1);
      }
    },
    ls = function (a, b, c) {
      var d = c.id,
        e = c.parentId,
        f = b.getChildren()[d];
      if (f)
        if (((e = Vn(f) && !f.R), ps(a, f, c), 0 != f.l)) {
          if ((f = b.s[d]))
            f.i && (Yn(b, !0), Rn(b)),
              Un(f) && 0 == f.l && Po(b, f.g, Sc(f)),
              b.Z.X(f, "k", b.zb),
              f.sa(null),
              (f.j = null),
              (f.Cb = !0),
              ic(b.s, d);
        } else e && f.R && y("uploadMediaRequest", ko(f));
      else e == b.g && ((f = new z(c)), 0 == f.l && lo(b, f));
      b.g == d && (b == a.g && c.mergeConflict ? ((a.g = a.g.duplicate()), a.g.sa(a)) : ps(a, b, c));
    },
    ps = function (a, b, c) {
      if (a.D.has(b.g)) jo(b, c);
      else {
        if ((a = a.G && a.G == c.lastSavedSessionId)) (a = new Uh(c.timestamps)), (a = Vh(b.u) > Vh(a));
        a ? jo(b, c) : (b.update(c), b.F && (b.F.g = !1), (c = b.i), (b.i = !1), (b.ca = null), (b.wa = !1), c && b.dispatchEvent("p"));
      }
    },
    rs = function (a) {
      var b = {},
        c = [];
      a.g && c.push.apply(c, qs(a.g));
      Bd(
        a.F,
        function (d) {
          c.push.apply(c, qs(d));
        },
        a
      );
      b.nodes = c;
      a.h.h && (b.userInfo = Hn(a.h));
      a.N && ((a.N = !1), a.D.clear(), (a.H = !1));
      return b;
    },
    ss = function (a, b, c) {
      c && (b = F(b, c));
      a.U.push(b);
    },
    ts = function (a, b) {
      if (a.g && (!b || a.g.ha())) {
        b = a.g;
        if (Tn(b)) {
          var c = new Qh(),
            d = 1 === b.ua;
          b.ua = 1;
          b.u.i = c;
          1 != d && (Wh(b.u, c), Rn(b));
          b.o && ((c = b.o), (c.l = !0), c.dispatchEvent("k"), b.dispatchEvent("u"));
          b.notify();
        }
        a.F.push(a.g);
        a.g = null;
      }
    };
  ds.prototype.reset = function () {
    if (this.v || !this.j) if (((this.v = !1), (this.g = this.o))) (this.j = !0), (this.o = null);
    this.g || ((this.g = fs()), this.i && ((this.j = !0), (this.l = ""), gs(this)), N(this, this.g));
    if (this.i) {
      var a = Hc(this.g, this.i.Qa());
      a && this.i.update(a.g.g());
    }
    this.u.qa();
    this.g.sa(this);
  };
  var us = function (a) {
      var b = V();
      b.j = a;
      b.g && (a || ms(b), gs(b));
      b.u.qa();
    },
    vs = function (a) {
      return (
        (a.g && a.g.i) ||
        ac(a.g ? a.g.getChildren() : {}, function (b) {
          return b.i;
        }) ||
        a.h.h ||
        Ce(a.F, function (b) {
          return !!b && b.i;
        })
      );
    },
    ns = function (a) {
      a.g = null;
      a.dispatchEvent("H");
    },
    gs = function (a) {
      a.g && (a.j && a.i ? Oo(a.g, a.i.Qa() + (a.l ? "\n\n" : "") + a.l) : Oo(a.g, a.l));
    },
    es = function (a) {
      if (a.g && Pc(a.g)) {
        var b = Qc(a.g);
        if (a.i && a.j) {
          var c = ws.exec(b);
          if (c) {
            var d = b.substring(c[0].length);
            a.l = !c[2] && d ? b : d;
          } else a.l = b;
        } else a.l = b;
      }
    },
    fs = function () {
      var a = {};
      a.id = Qn() + ".fce";
      a.type = "NOTE";
      a.sortValue = Wn;
      a = new z(a);
      var b = {};
      b.id = Qn() + ".fce";
      b.type = "LIST_ITEM";
      b.parentId = a.g;
      lo(a, new z(b));
      return a;
    },
    hs = function (a) {
      var b = {};
      b.id = Qn() + ".fce";
      b.type = "BLOB";
      b.parentId = a;
      return new z(b);
    },
    qs = function (a) {
      var b = [];
      a.i && b.push(ko(a));
      x(a.getChildren(), function (c) {
        c.i && b.push(ko(c));
      });
      return b;
    },
    ms = function (a) {
      if (!a.j && a.i && a.g) {
        var b = Hc(a.g, a.i.Qa());
        b && ((a = a.g), a.B.remove(b) && (Yn(a), Rn(a)));
      }
    };
  ds.prototype.ba = function () {
    Bd(this.U, function (b) {
      b();
    });
    if (!this.R) {
      var a = Date.now();
      3e4 < a - this.S && (Si(bd(), "n_ecmv3m") ? this.Z.log(9211) : y("impression", 9211), (this.S = a));
    }
  };
  ds.prototype.s = function (a) {
    a.target instanceof z && a.target.i && this.D.add(a.target.g);
    a.target == this.h && this.h.h && (this.H = !0);
    this.u.qa();
  };
  var V = function () {
      return yh(ds);
    },
    ws = RegExp(
      "^(?:(https?|ftp)://)?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.][\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*\\.(?:(?:xn--)*[a-zA-Z0-9]{2,63})(?:[\\.]?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.]*[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*)?(\n*)",
      "i"
    ),
    js = chrome.i18n.getMessage("6175061706159277390"),
    is = { "image/jpeg": ["jpg", "jpeg"], "image/png": ["png"], "image/gif": ["gif"], "image/webp": ["webp"] };
  var xs = function () {
    M.call(this);
    this.h = new fq(this.i, 50, this);
    ss(V(), this.g, this);
  };
  E(xs, M);
  xs.prototype.i = function () {
    var a = V();
    a.B && vs(a) && y("syncRequest", rs(a));
  };
  xs.prototype.g = function () {
    this.h.Gc();
  };
  var ys = function () {
    this.g = {};
    this.g.keepRequestParam = {};
    this.g.keepRequestParam.clientNamespace = {};
    this.g.keepRequestParam.clientNamespace.clientId = "KEEP";
  };
  var zs = function (a) {
    this.g = null;
    a && this.update(a);
  };
  zs.prototype.update = function (a) {
    this.g = a.id || null;
  };
  var As = function (a) {
    var b = {};
    a.g && (b.id = a.g);
    return b;
  };
  var Bs = function () {
    this.g = {};
  };
  var Cs = function (a, b) {
    this.H = new zs(a ? a[this.xb()] : void 0);
    this.G = b ? new Bs() : null;
  };
  Cs.prototype.va = function () {
    var a = {};
    this.H.g && (a[this.xb()] = As(this.H));
    return a;
  };
  var Ds = function (a) {
    Cs.call(this, a);
    this.g = "";
    a && this.update(a);
  };
  E(Ds, Cs);
  Ds.prototype.xb = function () {
    return "id";
  };
  Ds.prototype.update = function (a) {
    this.g = a.name || "";
  };
  Ds.prototype.va = function () {
    var a = Cs.prototype.va.call(this);
    a.name = this.g;
    return a;
  };
  Ds.prototype.ka = function () {
    return this.g;
  };
  var Es = function (a) {
    Cs.call(this, a, !0);
    this.i = "";
    this.j = !1;
    this.g = void 0;
    this.h = new zs();
    a && this.update(a);
  };
  E(Es, Cs);
  Es.prototype.xb = function () {
    return "listItemId";
  };
  Es.prototype.update = function (a) {
    this.i = a.text || "";
    this.j = !!a.checked;
    void 0 !== a.sortValue ? (this.g = Ig(a.sortValue)) : (this.g = void 0);
    void 0 !== a.parentListItemId ? this.h.update(a.parentListItemId) : (this.h.g = null);
  };
  Es.prototype.va = function () {
    var a = Cs.prototype.va.call(this);
    a.text = this.i;
    a.checked = this.j;
    void 0 !== this.g && (a.sortValue = this.g);
    this.h.g && (a.parentListItemId = As(this.h));
    return a;
  };
  var Fs = function () {
    this.g = [];
  };
  k = Fs.prototype;
  k.clear = function () {
    wa(this.g);
  };
  k.add = function (a) {
    va(this.g, a) || this.g.push(a);
  };
  k.remove = function (a) {
    ya(this.g, a);
  };
  k.get = function () {
    return Be(this.g, function (a) {
      return !(a instanceof Cs) || !0;
    });
  };
  k.getAll = function () {
    return this.g.slice();
  };
  var Gs = function (a) {
    R.call(this);
    this.g = new Fs();
    a && this.update(a);
  };
  E(Gs, R);
  Gs.prototype.update = function (a) {
    var b = this;
    this.g.clear();
    Bd(a.listItems || [], function (c) {
      b.g.add(new Es(c));
    });
  };
  var Hs = function (a) {
    a && this.update(a);
  };
  Hs.prototype.update = function () {};
  var Is = function (a) {
    this.h = "";
    this.g = this.i = null;
    a && this.update(a);
  };
  Is.prototype.update = function (a) {
    this.h = a.temporaryUrl || "";
    this.g = a.height || null;
    this.i = a.width || null;
  };
  Is.prototype.setHeight = function (a) {
    this.g = a;
  };
  var Js = function (a) {
    Cs.call(this, a);
    this.g = null;
    this.h = "UNKNOWN_MEDIA_ITEM_TYPE";
    this.i = "";
    a && this.update(a);
  };
  E(Js, Cs);
  Js.prototype.xb = function () {
    return "mediaId";
  };
  Js.prototype.update = function (a) {
    a.imageAttributes ? (this.g = new Is(a.imageAttributes)) : (this.g = null);
    a.drawingAttributes && new Hs(a.drawingAttributes);
    this.i = a.temporaryUrl || "";
    this.h = a.type || "UNKNOWN_MEDIA_ITEM_TYPE";
  };
  Js.prototype.va = function () {
    var a = Cs.prototype.va.call(this);
    if (this.g) {
      var b = this.g,
        c = {};
      c.temporaryUrl = b.h;
      c.height = b.g;
      c.width = b.i;
      a.imageAttributes = c;
    }
    a.temporaryUrl = this.i;
    a.type = this.h;
    return a;
  };
  Js.prototype.getType = function () {
    return this.h;
  };
  var Ks = function (a) {
    this.g = "";
    a && this.update(a);
  };
  Ks.prototype.update = function (a) {
    this.g = a.eventId || "";
  };
  var Ls = function (a) {
    this.g = "";
    a && this.update(a);
  };
  Ls.prototype.update = function (a) {
    this.g = a.serverPermId || "";
  };
  var Ms = function (a) {
    this.i = this.h = this.g = this.l = this.j = "";
    a && this.update(a);
  };
  Ms.prototype.update = function (a) {
    this.j = a.originalUri || "";
    this.l = a.sanitizedUri || "";
    this.g = a.title || "";
    this.h = a.description || "";
    this.i = a.imageUri || "";
  };
  var Ns = function (a) {
    var b = {};
    b.originalUri = a.j;
    b.sanitizedUri = a.l;
    b.title = a.g;
    b.description = a.h;
    b.imageUri = a.i;
    return b;
  };
  Ms.prototype.getTitle = function () {
    return this.g;
  };
  Ms.prototype.setTitle = function (a) {
    this.g = a;
  };
  var Os = function (a) {
    this.h = this.i = this.g = null;
    a && this.update(a);
  };
  Os.prototype.update = function (a) {
    a.uriInfo ? (this.g ? this.g.update(a.uriInfo) : (this.g = new Ms(a.uriInfo))) : (this.g = null);
    a.gmailMetadata ? (this.i ? this.i.update(a.gmailMetadata) : (this.i = new Ls(a.gmailMetadata))) : (this.i = null);
    a.calendarMetadata ? (this.h ? this.h.update(a.calendarMetadata) : (this.h = new Ks(a.calendarMetadata))) : (this.h = null);
  };
  var Ps = function (a) {
    Cs.call(this, a);
    this.g = this.h = null;
    a && this.update(a);
  };
  E(Ps, Cs);
  Ps.prototype.xb = function () {
    return "metadataId";
  };
  Ps.prototype.update = function (a) {
    a.uriInfo
      ? ((this.h = null), this.g ? this.g.update(a.uriInfo) : (this.g = new Ms(a.uriInfo)))
      : a.associatedContent && ((this.g = null), this.h ? this.h.update(a.associatedContent) : (this.h = new Os(a.associatedContent)));
  };
  Ps.prototype.va = function () {
    var a = Cs.prototype.va.call(this);
    if (this.g) a.uriInfo = Ns(this.g);
    else if (this.h) {
      var b = this.h,
        c = {};
      b.g && (c.uriInfo = Ns(b.g));
      if (b.i) {
        var d = {};
        d.serverPermId = b.i.g;
        c.gmailMetadata = d;
      }
      b.h && ((d = {}), (b = ((d.eventId = b.h.g), d)), (c.calendarMetadata = b));
      a.associatedContent = c;
    }
    return a;
  };
  var Qs = function (a) {
    this.g = "";
    this.h = a;
  };
  Qs.prototype.update = function (a) {
    this.g = a.text || "";
  };
  var Rs = function (a, b) {
    a.g != b && ((a.g = b), a.h());
  };
  var Ss = function (a) {
    a && this.update(a);
  };
  Ss.prototype.update = function () {};
  var Ts = function (a) {
    Cs.call(this, a, !0);
    this.h = this.g = null;
    this.i = "";
    this.F = this.D = this.B = !1;
    this.A = "DEFAULT";
    this.j = void 0;
    this.o = new Fs();
    this.v = new Fs();
    this.l = new Fs();
    this.s = new Fs();
    this.u = null;
    a && this.update(a);
  };
  E(Ts, Cs);
  k = Ts.prototype;
  k.xb = function () {
    return "noteId";
  };
  k.update = function (a) {
    var b = this;
    a.textNote
      ? ((this.h = null), this.g || Us(this), this.g.update(a.textNote))
      : a.listNote && ((this.g = null), this.h ? this.h.update(a.listNote) : (this.h = new Gs(a.listNote)));
    this.i = a.title || "";
    this.B = !!a.isArchived;
    this.D = !!a.isPinned;
    this.F = !!a.isTrashed;
    this.A = a.color || "DEFAULT";
    void 0 !== a.sortValue ? (this.j = Ig(a.sortValue)) : (this.j = void 0);
    this.o.clear();
    Bd(a.mediaItem || [], function (c) {
      b.o.add(new Js(c));
    });
    this.l.clear();
    Bd(a.label || [], function (c) {
      b.l.add(new Ds(c));
    });
    this.v.clear();
    Bd(a.user || [], function (c) {
      b.v.add(new Ss(c));
    });
    this.s.clear();
    Bd(a.metadata || [], function (c) {
      b.s.add(new Ps(c));
    });
  };
  k.va = function () {
    var a = Cs.prototype.va.call(this);
    if (this.g) {
      var b = {};
      b.text = this.g.g;
      a.textNote = b;
    }
    a.title = this.i;
    a.isArchived = this.B;
    a.isPinned = this.D;
    a.isTrashed = this.F;
    a.color = this.A;
    void 0 !== this.j && (a.sortValue = this.j);
    return a;
  };
  k.getTitle = function () {
    return this.i;
  };
  k.setTitle = function (a) {
    this.i != a && ((this.i = a), (this.G.g.TITLE = !0));
  };
  k.getMetadata = function () {
    return this.s;
  };
  k.ha = function () {
    return this.i ||
      this.o.get().length ||
      1 < this.v.get().length ||
      this.l.get().length ||
      (this.g && this.g.g) ||
      (this.h &&
        Ce(this.h.g.get(), function (a) {
          return !!a.i;
        }))
      ? !1
      : !0;
  };
  var Us = function (a) {
    a.u ||
      (a.u = F(function () {
        this.G.g.TEXT = !0;
      }, a));
    a.g = new Qs(a.u);
    a.h = null;
  };
  var Vs = function (a, b) {
    this.h = a;
    this.g = b;
  };
  var Ws = function () {
    this.g = [];
    this.h = [];
  };
  Ws.prototype.enqueue = function (a) {
    this.h.push(a);
  };
  var Xs = function (a) {
    0 === a.g.length && ((a.g = a.h), a.g.reverse(), (a.h = []));
    return a.g.pop();
  };
  k = Ws.prototype;
  k.W = function () {
    return this.g.length + this.h.length;
  };
  k.ha = function () {
    return 0 === this.g.length && 0 === this.h.length;
  };
  k.clear = function () {
    this.g = [];
    this.h = [];
  };
  k.contains = function (a) {
    return va(this.g, a) || va(this.h, a);
  };
  k.remove = function (a) {
    var b = this.g;
    var c = Ae(b, a);
    0 <= c ? (xa(b, c), (b = !0)) : (b = !1);
    return b || ya(this.h, a);
  };
  k.ja = function () {
    for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
    var c = this.h.length;
    for (b = 0; b < c; ++b) a.push(this.h[b]);
    return a;
  };
  var Ys = function (a, b) {
    this.g = a[n.Symbol.iterator]();
    this.h = b;
  };
  Ys.prototype[Symbol.iterator] = function () {
    return this;
  };
  Ys.prototype.next = function () {
    var a = this.g.next();
    return { value: a.done ? void 0 : this.h.call(void 0, a.value), done: a.done };
  };
  var Zs = function (a, b) {
    return new Ys(a, b);
  };
  var $s = function () {};
  $s.prototype.next = function () {
    return at;
  };
  var at = { done: !0, value: void 0 };
  $s.prototype.Ta = function () {
    return this;
  };
  var et = function (a) {
      if (a instanceof bt || a instanceof ct || a instanceof dt) return a;
      if ("function" == typeof a.next)
        return new bt(function () {
          return a;
        });
      if ("function" == typeof a[Symbol.iterator])
        return new bt(function () {
          return a[Symbol.iterator]();
        });
      if ("function" == typeof a.Ta)
        return new bt(function () {
          return a.Ta();
        });
      throw Error("ja");
    },
    bt = function (a) {
      this.g = a;
    };
  bt.prototype.Ta = function () {
    return new ct(this.g());
  };
  bt.prototype[Symbol.iterator] = function () {
    return new dt(this.g());
  };
  bt.prototype.h = function () {
    return new dt(this.g());
  };
  var ct = function (a) {
    this.g = a;
  };
  E(ct, $s);
  ct.prototype.next = function () {
    return this.g.next();
  };
  ct.prototype[Symbol.iterator] = function () {
    return new dt(this.g);
  };
  ct.prototype.h = function () {
    return new dt(this.g);
  };
  var dt = function (a) {
    bt.call(this, function () {
      return a;
    });
    this.i = a;
  };
  E(dt, bt);
  dt.prototype.next = function () {
    return this.i.next();
  };
  var ft = function (a, b) {
    this.h = {};
    this.g = [];
    this.i = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("B");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof ft) for (c = a.Ea(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  };
  k = ft.prototype;
  k.W = function () {
    return this.size;
  };
  k.ja = function () {
    gt(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
    return a;
  };
  k.Ea = function () {
    gt(this);
    return this.g.concat();
  };
  k.has = function (a) {
    return ht(this.h, a);
  };
  k.Xa = function (a) {
    for (var b = 0; b < this.g.length; b++) {
      var c = this.g[b];
      if (ht(this.h, c) && this.h[c] == a) return !0;
    }
    return !1;
  };
  k.V = function (a) {
    if (this === a) return !0;
    if (this.size != a.W()) return !1;
    var b = it;
    gt(this);
    for (var c, d = 0; (c = this.g[d]); d++) if (!b(this.get(c), a.get(c))) return !1;
    return !0;
  };
  var it = function (a, b) {
    return a === b;
  };
  ft.prototype.ha = function () {
    return 0 == this.size;
  };
  ft.prototype.clear = function () {
    this.h = {};
    this.i = this.size = this.g.length = 0;
  };
  ft.prototype.remove = function (a) {
    return this.delete(a);
  };
  ft.prototype.delete = function (a) {
    return ht(this.h, a) ? (delete this.h[a], --this.size, this.i++, this.g.length > 2 * this.size && gt(this), !0) : !1;
  };
  var gt = function (a) {
    if (a.size != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length; ) {
        var d = a.g[b];
        ht(a.h, d) && (a.g[c++] = d);
        b++;
      }
      a.g.length = c;
    }
    if (a.size != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length; ) (d = a.g[b]), ht(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
      a.g.length = c;
    }
  };
  k = ft.prototype;
  k.get = function (a, b) {
    return ht(this.h, a) ? this.h[a] : b;
  };
  k.set = function (a, b) {
    ht(this.h, a) || ((this.size += 1), this.g.push(a), this.i++);
    this.h[a] = b;
  };
  k.forEach = function (a, b) {
    for (var c = this.Ea(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  k.clone = function () {
    return new ft(this);
  };
  k.keys = function () {
    return et(this.Ta(!0)).h();
  };
  k.values = function () {
    return et(this.Ta(!1)).h();
  };
  k.entries = function () {
    var a = this;
    return Zs(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  k.Ta = function (a) {
    gt(this);
    var b = 0,
      c = this.i,
      d = this,
      e = new $s();
    e.next = function () {
      if (c != d.i) throw Error("ka");
      if (b >= d.g.length) return at;
      var f = d.g[b++];
      return { value: a ? f : d.h[f], done: !1 };
    };
    return e;
  };
  var ht = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var jt = function (a) {
      this.g = new ft();
      this.size = 0;
      if (a) {
        a = li(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c]);
        this.size = this.g.size;
      }
    },
    kt = function (a) {
      var b = typeof a;
      return ("object" == b && a) || "function" == b ? "o" + id(a) : b.charAt(0) + a;
    };
  k = jt.prototype;
  k.W = function () {
    return this.g.size;
  };
  k.add = function (a) {
    this.g.set(kt(a), a);
    this.size = this.g.size;
  };
  k.removeAll = function (a) {
    a = li(a);
    for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]);
    this.size = this.g.size;
  };
  k.delete = function (a) {
    a = this.g.remove(kt(a));
    this.size = this.g.size;
    return a;
  };
  k.remove = function (a) {
    return this.delete(a);
  };
  k.clear = function () {
    this.g.clear();
    this.size = 0;
  };
  k.ha = function () {
    return 0 === this.g.size;
  };
  k.has = function (a) {
    var b = this.g;
    a = kt(a);
    return b.has(a);
  };
  k.contains = function (a) {
    var b = this.g;
    a = kt(a);
    return b.has(a);
  };
  k.ja = function () {
    return this.g.ja();
  };
  k.values = function () {
    return this.g.values();
  };
  k.clone = function () {
    return new jt(this);
  };
  k.V = function (a) {
    return this.W() == ki(a) && lt(this, a);
  };
  var lt = function (a, b) {
    var c = ki(b);
    if (a.W() > c) return !1;
    !(b instanceof jt) && 5 < c && (b = new jt(b));
    return ni(a, function (d) {
      var e = b;
      return e.contains && "function" == typeof e.contains
        ? e.contains(d)
        : e.Xa && "function" == typeof e.Xa
        ? e.Xa(d)
        : Ba(e) || "string" === typeof e
        ? va(e, d)
        : fc(e, d);
    });
  };
  jt.prototype.Ta = function () {
    return this.g.Ta(!1);
  };
  jt.prototype[Symbol.iterator] = function () {
    return this.values();
  };
  var mt = function (a, b) {
    M.call(this);
    this.s = a || 0;
    this.i = b || 10;
    if (this.s > this.i) throw Error("la");
    this.g = new Ws();
    this.h = new jt();
    this.delay = 0;
    this.lastAccess = null;
    this.ec();
  };
  G(mt, M);
  mt.prototype.Zb = function () {
    var a = Date.now();
    if (!(null != this.lastAccess && a - this.lastAccess < this.delay)) {
      for (var b; 0 < this.g.W() && ((b = Xs(this.g)), !this.wd(b)); ) this.ec();
      !b && this.W() < this.i && (b = this.l());
      b && ((this.lastAccess = a), this.h.add(b));
      return b;
    }
  };
  mt.prototype.Lb = function (a) {
    this.h.remove(a);
    this.wd(a) && this.W() < this.i ? this.g.enqueue(a) : nt(a);
  };
  mt.prototype.ec = function () {
    for (var a = this.g; this.W() < this.s; ) a.enqueue(this.l());
    for (; this.W() > this.i && 0 < this.g.W(); ) nt(Xs(a));
  };
  mt.prototype.l = function () {
    return {};
  };
  var nt = function (a) {
    if ("function" == typeof a.ga) a.ga();
    else for (var b in a) a[b] = null;
  };
  k = mt.prototype;
  k.wd = function (a) {
    return "function" == typeof a.df ? a.df() : !0;
  };
  k.contains = function (a) {
    return this.g.contains(a) || this.h.contains(a);
  };
  k.W = function () {
    return this.g.W() + this.h.W();
  };
  k.ha = function () {
    return this.g.ha() && this.h.ha();
  };
  k.K = function () {
    mt.O.K.call(this);
    if (0 < this.h.W()) throw Error("ma");
    delete this.h;
    for (var a = this.g; !a.ha(); ) nt(Xs(a));
    delete this.g;
  };
  var ot = function (a, b) {
    this.g = a;
    this.ea = b;
  };
  ot.prototype.aa = function () {
    return this.ea;
  };
  ot.prototype.clone = function () {
    return new ot(this.g, this.ea);
  };
  var pt = function (a) {
      this.g = [];
      if (a)
        a: {
          if (a instanceof pt) {
            var b = a.Ea();
            a = a.ja();
            if (0 >= this.W()) {
              for (var c = this.g, d = 0; d < b.length; d++) c.push(new ot(b[d], a[d]));
              break a;
            }
          } else (b = ec(a)), (a = dc(a));
          for (c = 0; c < b.length; c++) qt(this, b[c], a[c]);
        }
    },
    qt = function (a, b, c) {
      var d = a.g;
      d.push(new ot(b, c));
      b = d.length - 1;
      a = a.g;
      for (c = a[b]; 0 < b; )
        if (((d = (b - 1) >> 1), a[d].g > c.g)) (a[b] = a[d]), (b = d);
        else break;
      a[b] = c;
    };
  k = pt.prototype;
  k.remove = function () {
    var a = this.g,
      b = a.length,
      c = a[0];
    if (!(0 >= b)) {
      if (1 == b) a.length = 0;
      else {
        a[0] = a.pop();
        a = 0;
        b = this.g;
        for (var d = b.length, e = b[a]; a < d >> 1; ) {
          var f = 2 * a + 1,
            g = 2 * a + 2;
          f = g < d && b[g].g < b[f].g ? g : f;
          if (b[f].g > e.g) break;
          b[a] = b[f];
          a = f;
        }
        b[a] = e;
      }
      return c.aa();
    }
  };
  k.ja = function () {
    for (var a = this.g, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].aa());
    return b;
  };
  k.Ea = function () {
    for (var a = this.g, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].g);
    return b;
  };
  k.Xa = function (a) {
    return this.g.some(function (b) {
      return b.aa() == a;
    });
  };
  k.clone = function () {
    return new pt(this);
  };
  k.W = function () {
    return this.g.length;
  };
  k.ha = function () {
    return 0 === this.g.length;
  };
  k.clear = function () {
    this.g.length = 0;
  };
  var rt = function () {
    pt.apply(this, arguments);
  };
  E(rt, pt);
  rt.prototype.enqueue = function (a, b) {
    qt(this, a, b);
  };
  var st = function (a, b) {
    this.o = void 0;
    this.j = new rt();
    mt.call(this, a, b);
  };
  G(st, mt);
  k = st.prototype;
  k.Zb = function (a, b) {
    if (!a) return (a = st.O.Zb.call(this)) && this.delay && (this.o = n.setTimeout(F(this.nc, this), this.delay)), a;
    this.j.enqueue(void 0 !== b ? b : 100, a);
    this.nc();
  };
  k.nc = function () {
    for (var a = this.j; 0 < a.W(); ) {
      var b = this.Zb();
      if (b) a.remove().apply(this, [b]);
      else break;
    }
  };
  k.Lb = function (a) {
    st.O.Lb.call(this, a);
    this.nc();
  };
  k.ec = function () {
    st.O.ec.call(this);
    this.nc();
  };
  k.K = function () {
    st.O.K.call(this);
    n.clearTimeout(this.o);
    this.j.clear();
    this.j = null;
  };
  var tt = function (a, b, c, d) {
    this.u = a;
    this.v = !!d;
    st.call(this, b, c);
  };
  G(tt, st);
  tt.prototype.l = function () {
    var a = new nq(),
      b = this.u;
    b &&
      b.forEach(function (c, d) {
        a.headers.set(d, c);
      });
    this.v && (a.i = !0);
    return a;
  };
  tt.prototype.wd = function (a) {
    return !a.pa && !a.isActive();
  };
  var ut = function (a, b, c, d, e, f) {
    R.call(this);
    this.j = void 0 !== a ? a : 1;
    this.l = void 0 !== e ? Math.max(0, e) : 0;
    this.o = !!f;
    this.h = new tt(b, c, d, f);
    this.g = new ft();
    this.i = new U(this);
  };
  G(ut, R);
  var vt = "ready complete success error abort timeout".split(" ");
  ut.prototype.send = function (a, b, c, d, e, f, g, h, l, m) {
    if (this.g.get(a)) throw Error("na");
    b = new wt(b, F(this.u, this, a), c, d, e, g, void 0 !== h ? h : this.j, l, void 0 !== m ? m : this.o);
    this.g.set(a, b);
    a = F(this.s, this, a);
    this.h.Zb(a, f);
    return b;
  };
  ut.prototype.abort = function (a, b) {
    var c = this.g.get(a);
    if (c) {
      var d = c.Ac;
      c.Wd = !0;
      b &&
        (d &&
          (this.i.X(d, vt, c.Bd),
          uj(
            d,
            "ready",
            function () {
              var e = this.h;
              e.h.remove(d) && e.Lb(d);
            },
            !1,
            this
          )),
        this.g.remove(a));
      d && d.abort();
    }
  };
  ut.prototype.s = function (a, b) {
    var c = this.g.get(a);
    c && !c.Ac
      ? (this.i.listen(b, vt, c.Bd),
        (b.l = Math.max(0, this.l)),
        (b.o = c.ge()),
        (b.i = c.he()),
        (c.Ac = b),
        this.dispatchEvent(new xt("ready", this, a, b)),
        yt(this, a, b),
        c.Wd && b.abort())
      : ((a = this.h), a.h.remove(b) && a.Lb(b));
  };
  ut.prototype.u = function (a, b) {
    var c = b.target;
    switch (b.type) {
      case "ready":
        yt(this, a, c);
        break;
      case "complete":
        a: {
          var d = this.g.get(a);
          if (7 == c.j || yq(c) || d.fc > d.Hc)
            if ((this.dispatchEvent(new xt("complete", this, a, c)), d && ((d.ce = !0), d.be))) {
              a = d.be.call(c, b);
              break a;
            }
          a = null;
        }
        return a;
      case "success":
        this.dispatchEvent(new xt("success", this, a, c));
        break;
      case "timeout":
      case "error":
        b = this.g.get(a);
        b.fc > b.Hc && this.dispatchEvent(new xt("error", this, a, c));
        break;
      case "abort":
        this.dispatchEvent(new xt("abort", this, a, c));
    }
    return null;
  };
  var yt = function (a, b, c) {
    var d = a.g.get(b);
    !d || d.ce || d.fc > d.Hc
      ? (d && (a.i.X(c, vt, d.Bd), a.g.remove(b)), (a = a.h), a.h.remove(c) && a.Lb(c))
      : (d.fc++, c.send(d.Qa(), d.Af, d.getContent(), d.Te));
  };
  ut.prototype.K = function () {
    ut.O.K.call(this);
    this.h.ga();
    this.h = null;
    this.i.ga();
    this.i = null;
    this.g.clear();
    this.g = null;
  };
  var xt = function (a, b, c, d) {
    fj.call(this, a, b);
    this.id = c;
    this.Ac = d;
  };
  G(xt, fj);
  var wt = function (a, b, c, d, e, f, g, h, l) {
    this.i = a;
    this.Af = c || "GET";
    this.g = d;
    this.Te = e || null;
    this.Hc = void 0 !== g ? g : 1;
    this.fc = 0;
    this.Wd = this.ce = !1;
    this.Bd = b;
    this.be = f;
    this.h = h || "";
    this.j = !!l;
    this.Ac = null;
  };
  wt.prototype.Qa = function () {
    return this.i;
  };
  wt.prototype.getContent = function () {
    return this.g;
  };
  wt.prototype.he = function () {
    return this.j;
  };
  wt.prototype.ge = function () {
    return this.h;
  };
  var zt = function (a) {
      this.h = new ut();
      this.i = new ys();
      this.j = a;
      this.g = null;
    },
    Dt = function (a, b) {
      var c = {};
      c.label = { id: { id: b.g }, name: b.ka() };
      At(a, "create_label_req" + b.g, Bt, c, Ct(a), function () {
        !a.h.g.W() && a.g && a.g();
      });
    },
    Ft = function (a, b, c, d, e) {
      var f = kc(a.i.g);
      f.note = b.va();
      f.mediaToAttach = yd(c, function (l) {
        var m = {};
        l.h && (m.mediaUrl = l.h);
        l.g && (m.mediaBytes = l.g);
        return m;
      });
      d &&
        (f.note.label = d.map(function (l) {
          return new Ds({ id: { id: l } }).va();
        }));
      var g = Ct(a),
        h = "create_note_req" + Date.now();
      b = function () {
        At(a, h, Et, f, g, function (l) {
          l = l.target;
          if (yq(l)) {
            var m = zq(l).note.noteId.id;
            e(l.getStatus(), m);
          } else (a.g = null), e(l.getStatus());
        });
      };
      a.h.g.W() ? (a.g = b) : b();
    },
    It = function (a, b) {
      At(a, "list_labels_req" + Date.now(), Gt, kc(a.i.g), Ct(a), function (c) {
        return Ht(c, b);
      });
    },
    Ht = function (a, b) {
      a = a.target;
      if (yq(a)) {
        var c = zq(a);
        c.label
          ? ((c = c.label.map(function (d) {
              var e = {};
              return (e.name = d.name), (e.mainId = d.id.id), e;
            })),
            b(a.getStatus(), c))
          : b(a.getStatus());
      } else b(a.getStatus());
    },
    At = function (a, b, c, d, e, f) {
      a.h.send(b, c, "POST", JSON.stringify(d), e, void 0, function (g) {
        f(g);
      });
    },
    Ct = function (a) {
      return { Authorization: "Bearer " + a.j.g, "Content-Type": "application/json" };
    },
    Jt = Ti("n_fpae"),
    Bt = Jt + "/v1/labels:create",
    Et = Jt + "/v1/notes:create",
    Gt = Jt + "/v1/labels:list";
  var Kt = {},
    Lt = function () {
      throw Error("oa");
    };
  Lt.prototype.gd = null;
  Lt.prototype.getContent = function () {
    return this.content;
  };
  Lt.prototype.toString = function () {
    return this.content;
  };
  Lt.prototype.Ce = function () {
    if (this.hd !== Kt) throw Error("pa");
    return Cg(this.toString());
  };
  var Mt = function () {
    Lt.call(this);
  };
  G(Mt, Lt);
  Mt.prototype.hd = Kt;
  var Nt = function (a) {
      if (null != a)
        switch (a.gd) {
          case 1:
            return 1;
          case -1:
            return -1;
          case 0:
            return 0;
        }
      return null;
    },
    Rt = function (a) {
      return null != a && a.hd === Kt ? a : a instanceof xd ? Ot(Bg(a).toString()) : Ot(String(String(a)).replace(Pt, Qt), Nt(a));
    },
    Ot = (function (a) {
      function b(c) {
        this.content = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.gd = d);
        return c;
      };
    })(Mt),
    St = (function (a) {
      function b(c) {
        this.content = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = String(c);
        if (!c) return "";
        c = new b(c);
        void 0 !== d && (c.gd = d);
        return c;
      };
    })(Mt),
    W = function (a) {
      if (null != a && a.hd === Kt) {
        var b = String;
        a = a.getContent();
        a = String(a).replace(Tt, "").replace(Ut, "&lt;");
        b = b(a).replace(Vt, Qt);
      } else b = String(a).replace(Pt, Qt);
      return b;
    },
    Wt = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;"
    },
    Qt = function (a) {
      return Wt[a];
    },
    Pt = /[\x00\x22\x26\x27\x3c\x3e]/g,
    Vt = /[\x00\x22\x27\x3c\x3e]/g,
    Tt = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Ut = /</g;
  var pd = {};
  var Yt = function (a) {
      a = a || {};
      return Xt(a.Zd, a.content, a.Cj);
    },
    Xt = function (a, b, c) {
      return Ot(
        '<div role="button" class="' +
          W("Q0hgme-LgbsSe") +
          (a ? " " + W(a) : "") +
          '" tabindex="0"' +
          (c ? ' aria-describedby="' + W(c) + '"' : "") +
          ">" +
          Rt(null != b ? b : "") +
          "</div>"
      );
    },
    $t = function (a) {
      a = a || {};
      return Zt(a.Zd, a.Gj);
    },
    Zt = function (a, b) {
      return Ot(Xt("Q0hgme-Bz112c-LgbsSe" + (b ? " OAU7Vd-LgbsSe" : "") + (a ? " " + a : ""), St("" + (b ? Rt(b) : ""))));
    },
    bu = function (a) {
      a = a || {};
      return au(a.text, a.Zd);
    },
    au = function (a, b) {
      return Ot(Xt("Q0hgme-fmcmS-LgbsSe" + (b ? " " + b : ""), St("" + Rt(null != a ? a : ""))));
    },
    du = function (a, b) {
      return Ot(
        '<div class="' +
          W("Q0hgme-n5T17d-woLtV") +
          (a ? " " + W(a) : "") +
          (b ? " " + W(b) : "") +
          '">' +
          cu("v3pZbf") +
          cu("oq6NAc") +
          cu("gS7Ybc") +
          cu("nllRtd") +
          "</div>"
      );
    },
    cu = function (a) {
      return Ot(
        '<div class="' +
          W("aZ2wEe-pbTTYe") +
          " " +
          W(a) +
          '"><div class="' +
          W("LkdAo-e9ayKc") +
          " " +
          W("LK5yu") +
          '"><div class="' +
          W("LkdAo") +
          " " +
          W("hj4D6d") +
          '"></div></div><div class="' +
          W("pehrl-TpMipd") +
          '"><div class="' +
          W("LkdAo") +
          " " +
          W("hj4D6d") +
          '"></div></div><div class="' +
          W("LkdAo-e9ayKc") +
          " " +
          W("qwU8Me") +
          '"><div class="' +
          W("LkdAo") +
          " " +
          W("hj4D6d") +
          '"></div></div></div>'
      );
    },
    eu = function (a) {
      a = a.xf;
      return Ot(
        '<div class="' +
          W("Q0hgme-vDaB1c") +
          (a ? "" : " " + W("JLm1tf-uLBfYd")) +
          '" role="alertdialog"><div class="' +
          W("Q0hgme-vDaB1c-Ne3sFf") +
          '"></div>' +
          au(void 0, "Q0hgme-vDaB1c-JIbuQc fmcmS-LgbsSe-to915-Ia7Qfc") +
          du("CZjX4e") +
          (a ? Zt("Q0hgme-vDaB1c-IYtByb Bz112c-LgbsSe-to915-xJ5Hnf") : "") +
          "</div>"
      );
    },
    fu = function () {
      return Ot(
        '<div role="tooltip" class="' +
          W("Q0hgme-suEOdc") +
          '"><div class="' +
          W("suEOdc-AHe6Kc") +
          '"></div><div class="' +
          W("suEOdc-bN97Pc") +
          '"></div></div>'
      );
    };
  var gu = function () {
      return Ot('<div class="' + W("rymPhb-qJTHM") + '"><div class="' + W("rymPhb-PntVL") + '"></div></div>');
    },
    hu = function () {
      return Ot(
        '<div class="' +
          W("rymPhb-ibnC6b") +
          '"><div class="' +
          W("Q0hgme-MPu53c") +
          '"></div><label class="' +
          W("rymPhb-ibnC6b-fmcmS") +
          '"></label></div>'
      );
    },
    iu = function () {
      return Ot(
        '<div class="' +
          W("h1U9Be-V67aGc") +
          '"><label class="' +
          W("h1U9Be-V67aGc-V1ur5d") +
          '"></label>' +
          Zt("h1U9Be-V67aGc-VkLyEc") +
          "</div>"
      );
    },
    ju = function () {
      return Ot(
        '<div class="' +
          W("HiaYvf-n0tgWb") +
          '"><img class="' +
          W("HiaYvf-SmKAyb") +
          '" crossorigin><div class="' +
          W("Yygnk-jOfkMb") +
          '"></div>' +
          Zt("HiaYvf-VkLyEc") +
          "</div>"
      );
    };
  var ku = function () {
    var a = '<div class="' + W("mKZypf-bEDTcc-bF1uUb") + '"><label class="' + W("mKZypf-bEDTcc-EglORb") + '">',
      b = chrome.i18n.getMessage.apply(
        null,
        ["733701029503338559", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
      );
    a = a + b + "</label>";
    b = chrome.i18n.getMessage("5207635742003539443");
    a += au(b, " fmcmS-LgbsSe-to915-Ia7Qfc mKZypf-bEDTcc-LgbsSe ");
    return Ot(a + "</div>");
  };
  var lu = function (a) {
      return "string" == typeof a.className ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
    },
    mu = function (a) {
      return a.classList ? a.classList : lu(a).match(/\S+/g) || [];
    },
    nu = function (a, b) {
      "string" == typeof a.className ? (a.className = b) : a.setAttribute && a.setAttribute("class", b);
    },
    ou = function (a, b) {
      return a.classList ? a.classList.contains(b) : va(mu(a), b);
    },
    pu = function (a, b) {
      if (a.classList) a.classList.add(b);
      else if (!ou(a, b)) {
        var c = lu(a);
        nu(a, c + (0 < c.length ? " " + b : b));
      }
    },
    qu = function (a, b) {
      if (a.classList)
        Array.prototype.forEach.call(b, function (e) {
          pu(a, e);
        });
      else {
        var c = {};
        Array.prototype.forEach.call(mu(a), function (e) {
          c[e] = !0;
        });
        Array.prototype.forEach.call(b, function (e) {
          c[e] = !0;
        });
        b = "";
        for (var d in c) b += 0 < b.length ? " " + d : d;
        nu(a, b);
      }
    },
    ru = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : ou(a, b) &&
          nu(
            a,
            Array.prototype.filter
              .call(mu(a), function (c) {
                return c != b;
              })
              .join(" ")
          );
    },
    su = function (a, b) {
      a.classList
        ? Array.prototype.forEach.call(b, function (c) {
            ru(a, c);
          })
        : nu(
            a,
            Array.prototype.filter
              .call(mu(a), function (c) {
                return !va(b, c);
              })
              .join(" ")
          );
    },
    tu = function (a, b, c) {
      c ? pu(a, b) : ru(a, b);
    };
  var uu = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  k = uu.prototype;
  k.clone = function () {
    return new uu(this.top, this.right, this.bottom, this.left);
  };
  k.contains = function (a) {
    return this && a
      ? a instanceof uu
        ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom
        : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
      : !1;
  };
  k.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  k.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  k.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  var Dd = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  };
  k = Dd.prototype;
  k.clone = function () {
    return new Dd(this.left, this.top, this.width, this.height);
  };
  k.contains = function (a) {
    return a instanceof Sg
      ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
      : this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height;
  };
  k.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  k.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  k.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var vu = function (a, b) {
      var c = Wg(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ""
        : "";
    },
    wu = function (a, b) {
      return vu(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b]);
    },
    yu = function (a, b, c) {
      if (b instanceof Sg) {
        var d = b.x;
        b = b.y;
      } else (d = b), (b = c);
      a.style.left = xu(d, !1);
      a.style.top = xu(b, !1);
    },
    zu = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    },
    Au = function (a) {
      if (H && !(8 <= Number(af))) return a.offsetParent;
      var b = Wg(a),
        c = wu(a, "position"),
        d = "fixed" == c || "absolute" == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (
          (11 == a.nodeType && a.host && (a = a.host),
          (c = wu(a, "position")),
          (d = d && "static" == c && a != b.documentElement && a != b.body),
          !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
        )
          return a;
      return null;
    },
    Cu = function (a) {
      for (var b = new uu(0, Infinity, Infinity, 0), c = qd(a), d = c.g.body, e = c.g.documentElement, f = bh(c.g); (a = Au(a)); )
        if (!((H && 0 == a.clientWidth) || (Le && 0 == a.clientHeight && a == d)) && a != d && a != e && "visible" != wu(a, "overflow")) {
          var g = Bu(a),
            h = new Sg(a.clientLeft, a.clientTop);
          g.x += h.x;
          g.y += h.y;
          b.top = Math.max(b.top, g.y);
          b.right = Math.min(b.right, g.x + a.clientWidth);
          b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
          b.left = Math.max(b.left, g.x);
        }
      d = f.scrollLeft;
      f = f.scrollTop;
      b.left = Math.max(b.left, d);
      b.top = Math.max(b.top, f);
      c = ah(ch(c.g) || window);
      b.right = Math.min(b.right, d + c.width);
      b.bottom = Math.min(b.bottom, f + c.height);
      return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
    },
    Bu = function (a) {
      var b = Wg(a),
        c = new Sg(0, 0);
      var d = b ? Wg(b) : document;
      d = !H || 9 <= Number(af) || $g(qd(d).g) ? d.documentElement : d.body;
      if (a == d) return c;
      a = zu(a);
      b = dh(qd(b).g);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    Du = function (a, b, c) {
      if (b instanceof Ug) (c = b.height), (b = b.width);
      else if (void 0 == c) throw Error("qa");
      a.style.width = xu(b, !0);
      a.style.height = xu(c, !0);
    },
    xu = function (a, b) {
      "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
      return a;
    },
    Fu = function (a) {
      var b = Eu;
      if ("none" != wu(a, "display")) return b(a);
      var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a;
    },
    Eu = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = Le && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? ((a = zu(a)), new Ug(a.right - a.left, a.bottom - a.top)) : new Ug(b, c);
    },
    X = function (a, b) {
      a.style.display = b ? "" : "none";
    },
    Gu = function (a) {
      return "rtl" == wu(a, "direction");
    },
    Hu = Je ? "MozUserSelect" : Le || He ? "WebkitUserSelect" : null,
    Iu = function (a, b, c) {
      c = c ? null : a.getElementsByTagName("*");
      if (Hu) {
        if (((b = b ? "none" : ""), a.style && (a.style[Hu] = b), c)) {
          a = 0;
          for (var d; (d = c[a]); a++) d.style && (d.style[Hu] = b);
        }
      } else if (H && ((b = b ? "on" : ""), a.setAttribute("unselectable", b), c))
        for (a = 0; (d = c[a]); a++) d.setAttribute("unselectable", b);
    },
    Ju = { thin: 2, medium: 4, thick: 6 },
    Ku = function (a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
      var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      if (c in Ju) a = Ju[c];
      else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
      else {
        b = a.style.left;
        var d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = b;
        a.runtimeStyle.left = d;
        a = +c;
      }
      return a;
    };
  var Lu = function () {
    U.call(this);
    this.g = ud(fu);
    X(this.g, !1);
    qd().g.body.appendChild(this.g);
    this.B = Xg("suEOdc-bN97Pc", this.g);
    this.h = null;
    this.A = new fq(this.If, 0, this);
    this.u = new fq(this.Ff, 300, this);
    this.l = 250;
    this.v = new fq(this.Df, this.l, this);
    this.D = new Set();
    this.s = !0;
    this.o = !1;
  };
  E(Lu, U);
  k = Lu.prototype;
  k.La = function (a, b, c) {
    var d = void 0 === d ? "" : d;
    b
      ? (this.listen(a, "mouseout mousedown click blur focusout keydown".split(" "), this.ae, !0).listen(
          a,
          ["mouseover", "focus", "focusin"],
          this.Ae,
          !0
        ),
        a.removeAttribute("title"),
        (a.dataset.tooltipText = b),
        uh(a, "label", d || b),
        c ? a.setAttribute("tooltip-no-delay", !0) : a.removeAttribute("tooltip-no-delay"))
      : (this.X(a, "mouseout mousedown click blur focusout keydown".split(" "), this.ae, !0).X(
          a,
          ["mouseover", "focus", "focusin"],
          this.Ae,
          !0
        ),
        a.removeAttribute("aria-label"),
        a.removeAttribute("tooltip-no-delay"),
        delete a.dataset.tooltipText);
  };
  k.Ae = function (a) {
    this.h = a.i;
    a = this.h.dataset.tooltipText;
    var b = "true" == this.h.getAttribute("tooltip-suspended");
    a && !b && (lh(this.B, a), (a = "true" == this.h.getAttribute("tooltip-no-delay")), this.A.start(this.s && !a ? 250 : 0));
  };
  k.ae = function () {
    this.h = null;
    this.A.stop();
    this.o &&
      ((this.o = !1),
      ru(this.g, "ti6hGc"),
      ru(this.g, "mhHukc-cGMI2b"),
      pu(this.g, "ZYIfFd"),
      this.v.start(this.l),
      (this.s = !1),
      this.u.start());
  };
  k.If = function () {
    if (this.h) {
      this.u.stop();
      this.v.stop();
      X(this.g, !0);
      if (this.h) {
        var a = Fu(this.g),
          b = Fu(this.h),
          c = Bu(this.h);
        var d = qd().g;
        var e = d.body;
        d = d.documentElement;
        d = new Sg(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
        var f = ah(window);
        e = d.x + f.width;
        f = d.y + f.height;
        this.D.has(this.h)
          ? ((d = c.y + b.height / 2 - a.height / 2),
            (b = c.x + b.width),
            (d = Math.max(0, Math.min(d, f - a.height))),
            (f = !0),
            b + a.width > e && ((b = c.x - a.width), (f = !1)),
            tu(this.g, "mhHukc-qwU8Me", f),
            tu(this.g, "mhHukc-LK5yu", !f),
            su(this.g, ["mhHukc-ma6Yeb", "mhHukc-cGMI2b"]))
          : ((d = c.y + b.height),
            (b = c.x + b.width / 2 - a.width / 2),
            (b = Math.max(0, Math.min(b, e - a.width))),
            (e = !0),
            d + a.height > f && ((d = c.y - a.height), (e = !1)),
            tu(this.g, "mhHukc-cGMI2b", e),
            tu(this.g, "mhHukc-ma6Yeb", !e),
            su(this.g, ["mhHukc-LK5yu", "mhHukc-qwU8Me"]));
        this.g.style.top = d + "px";
        this.g.style.left = b + "px";
        this.g.setAttribute("content-width-32", Math.ceil(a.width / 32));
        this.l = Math.max(50, 250 - 25 * Math.ceil(a.width / 32));
      }
      ru(this.g, "ZYIfFd");
      pu(this.g, "ti6hGc");
      this.o = !0;
    }
  };
  k.Df = function () {
    X(this.g, !1);
  };
  k.Ff = function () {
    this.s = !0;
  };
  k.K = function () {
    this.g.remove();
  };
  Lu.L = function () {
    return yh(Lu);
  };
  var Ou = function (a, b, c, d, e, f) {
      if (Me && e) return Mu(a);
      if (e && !d) return !1;
      if (!Je) {
        "number" === typeof b && (b = Nu(b));
        var g = 17 == b || 18 == b || (Me && 91 == b);
        if (((!c || Me) && g) || (Me && 16 == b && (d || f))) return !1;
      }
      if ((Le || He) && d && c)
        switch (a) {
          case 220:
          case 219:
          case 221:
          case 192:
          case 186:
          case 189:
          case 187:
          case 188:
          case 190:
          case 191:
          case 192:
          case 222:
            return !1;
        }
      if (H && d && b == a) return !1;
      switch (a) {
        case 13:
          return Je ? (f || e ? !1 : !(c && d)) : !0;
        case 27:
          return !(Le || He || Je);
      }
      return Je && (d || e || f) ? !1 : Mu(a);
    },
    Mu = function (a) {
      if ((48 <= a && 57 >= a) || (96 <= a && 106 >= a) || (65 <= a && 90 >= a) || ((Le || He) && 0 == a)) return !0;
      switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
        case 163:
        case 58:
          return !0;
        case 173:
        case 171:
          return Je;
        default:
          return !1;
      }
    },
    Nu = function (a) {
      if (Je) a = Pu(a);
      else if (Me && Le)
        switch (a) {
          case 93:
            a = 91;
        }
      return a;
    },
    Pu = function (a) {
      switch (a) {
        case 61:
          return 187;
        case 59:
          return 186;
        case 173:
          return 189;
        case 224:
          return 91;
        case 0:
          return 224;
        default:
          return a;
      }
    };
  var Qu = function (a, b, c, d) {
    ij.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.l = b;
    this.repeat = c;
  };
  G(Qu, ij);
  var Ru = function (a, b) {
    R.call(this);
    a && this.attach(a, b);
  };
  G(Ru, R);
  k = Ru.prototype;
  k.tb = null;
  k.sc = null;
  k.rd = null;
  k.tc = null;
  k.ra = -1;
  k.Ra = -1;
  k.ed = !1;
  var Su = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
    Tu = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
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
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
    Uu = Me && Je;
  k = Ru.prototype;
  k.Ue = function (a) {
    if (Le || He)
      if ((17 == this.ra && !a.ctrlKey) || (18 == this.ra && !a.altKey) || (Me && 91 == this.ra && !a.metaKey)) this.Ra = this.ra = -1;
    -1 == this.ra &&
      (a.ctrlKey && 17 != a.keyCode
        ? (this.ra = 17)
        : a.altKey && 18 != a.keyCode
        ? (this.ra = 18)
        : a.metaKey && 91 != a.keyCode && (this.ra = 91));
    Ou(a.keyCode, this.ra, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
      ? ((this.Ra = Nu(a.keyCode)), Uu && (this.ed = a.altKey))
      : this.handleEvent(a);
  };
  k.qf = function (a) {
    this.Ra = this.ra = -1;
    this.ed = a.altKey;
  };
  k.handleEvent = function (a) {
    var b = a.h,
      c = b.altKey;
    if (H && "keypress" == a.type) {
      var d = this.Ra;
      var e = 13 != d && 27 != d ? b.keyCode : 0;
    } else
      (Le || He) && "keypress" == a.type
        ? ((d = this.Ra), (e = 0 <= b.charCode && 63232 > b.charCode && Mu(d) ? b.charCode : 0))
        : ("keypress" == a.type
            ? (Uu && (c = this.ed),
              b.keyCode == b.charCode
                ? 32 > b.keyCode
                  ? ((d = b.keyCode), (e = 0))
                  : ((d = this.Ra), (e = b.charCode))
                : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)))
            : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)),
          Me && 63 == e && 224 == d && (d = 191));
    var f = (d = Nu(d));
    d
      ? 63232 <= d && d in Su
        ? (f = Su[d])
        : 25 == d && a.shiftKey && (f = 9)
      : b.keyIdentifier && b.keyIdentifier in Tu && (f = Tu[b.keyIdentifier]);
    if (!Je || "keypress" != a.type || Ou(f, this.ra, a.shiftKey, a.ctrlKey, c, a.metaKey))
      (a = f == this.ra), (this.ra = f), (b = new Qu(f, e, a, b)), (b.altKey = c), this.dispatchEvent(b);
  };
  k.C = function () {
    return this.tb;
  };
  k.attach = function (a, b) {
    this.tc && this.detach();
    this.tb = a;
    this.sc = vj(this.tb, "keypress", this, b);
    this.rd = vj(this.tb, "keydown", this.Ue, b, this);
    this.tc = vj(this.tb, "keyup", this.qf, b, this);
  };
  k.detach = function () {
    this.sc && (Dj(this.sc), Dj(this.rd), Dj(this.tc), (this.tc = this.rd = this.sc = null));
    this.tb = null;
    this.Ra = this.ra = -1;
  };
  k.K = function () {
    Ru.O.K.call(this);
    this.detach();
  };
  var Vu = function () {};
  Zd(Vu);
  Vu.prototype.g = 0;
  var Y = function (a) {
    R.call(this);
    this.h = a || qd();
    this.Ua = Wu;
    this.U = null;
    this.da = !1;
    this.g = null;
    this.H = void 0;
    this.u = this.o = this.s = this.Ha = null;
    this.Ie = !1;
  };
  G(Y, R);
  Y.prototype.Ke = Vu.L();
  var Wu = null,
    Xu = function (a, b) {
      switch (a) {
        case 1:
          return b ? "disable" : "enable";
        case 2:
          return b ? "highlight" : "unhighlight";
        case 4:
          return b ? "activate" : "deactivate";
        case 8:
          return b ? "select" : "unselect";
        case 16:
          return b ? "check" : "uncheck";
        case 32:
          return b ? "focus" : "blur";
        case 64:
          return b ? "open" : "close";
      }
      throw Error("ra");
    },
    Yu = function (a) {
      return a.U || (a.U = ":" + (a.Ke.g++).toString(36));
    },
    Zu = function (a, b) {
      if (a.s && a.s.u) {
        ic(a.s.u, a.U);
        var c = a.s.u;
        if (null !== c && b in c) throw Error("A`" + b);
        c[b] = a;
      }
      a.U = b;
    };
  Y.prototype.C = function () {
    return this.g;
  };
  var $u = function (a, b) {
      return a.g ? Xg(b, a.g || a.h.g) : null;
    },
    av = function (a) {
      a.H || (a.H = new U(a));
      return a.H;
    },
    bv = function (a, b) {
      if (a == b) throw Error("sa");
      var c;
      if ((c = b && a.s && a.U)) {
        c = a.s;
        var d = a.U;
        c = c.u && d ? jc(c.u, d) || null : null;
      }
      if (c && a.s != b) throw Error("sa");
      a.s = b;
      Y.O.sa.call(a, b);
    };
  Y.prototype.getParent = function () {
    return this.s;
  };
  Y.prototype.sa = function (a) {
    if (this.s && this.s != a) throw Error("ta");
    Y.O.sa.call(this, a);
  };
  Y.prototype.Ga = function () {
    this.g = rd(this.h.g, "DIV");
  };
  Y.prototype.xc = function (a) {
    cv(this, a);
  };
  var dv = function (a, b) {
      cv(a, b.parentNode, b);
    },
    cv = function (a, b, c) {
      if (a.da) throw Error("ua");
      a.g || a.Ga();
      b ? b.insertBefore(a.g, c || null) : a.h.g.body.appendChild(a.g);
      (a.s && !a.s.da) || a.T();
    },
    ev = function (a, b) {
      if (a.da) throw Error("ua");
      if (b && a.Ic(b)) {
        a.Ie = !0;
        var c = Wg(b);
        (a.h && a.h.g == c) || (a.h = qd(b));
        a.wb(b);
        a.T();
      } else throw Error("va");
    };
  k = Y.prototype;
  k.Ic = function () {
    return !0;
  };
  k.wb = function (a) {
    this.g = a;
  };
  k.T = function () {
    this.da = !0;
    fv(this, function (a) {
      !a.da && a.C() && a.T();
    });
  };
  k.ib = function () {
    fv(this, function (a) {
      a.da && a.ib();
    });
    this.H && this.H.removeAll();
    this.da = !1;
  };
  k.K = function () {
    this.da && this.ib();
    this.H && (this.H.ga(), delete this.H);
    fv(this, function (a) {
      a.ga();
    });
    !this.Ie && this.g && jh(this.g);
    this.s = this.Ha = this.g = this.u = this.o = null;
    Y.O.K.call(this);
  };
  var hv = function (a, b, c) {
    var d = gv(a);
    if (b.da && (c || !a.da)) throw Error("ua");
    if (0 > d || d > gv(a)) throw Error("wa");
    (a.u && a.o) || ((a.u = {}), (a.o = []));
    if (b.getParent() == a) {
      var e = a.u,
        f = Yu(b);
      e[f] = b;
      ya(a.o, b);
    } else {
      e = a.u;
      f = Yu(b);
      if (null !== e && f in e) throw Error("A`" + f);
      e[f] = b;
    }
    bv(b, a);
    Ea(a.o, d, 0, b);
    b.da && a.da && b.getParent() == a
      ? ((a = a.ac()),
        (a.childNodes[d] || null) != b.C() &&
          (b.C().parentElement == a && a.removeChild(b.C()), (d = a.childNodes[d] || null), a.insertBefore(b.C(), d)))
      : c
      ? (a.g || a.Ga(), (d = a.o ? a.o[d + 1] || null : null), cv(b, a.ac(), d ? d.g : null))
      : a.da && !b.da && b.g && b.g.parentNode && 1 == b.g.parentNode.nodeType && b.T();
  };
  Y.prototype.ac = function () {
    return this.g;
  };
  var gv = function (a) {
      return a.o ? a.o.length : 0;
    },
    fv = function (a, b) {
      a.o && a.o.forEach(b, void 0);
    },
    iv = function (a, b) {
      if (b) {
        var c = "string" === typeof b ? b : Yu(b);
        b = a.u && c ? jc(a.u, c) || null : null;
        c && b && (ic(a.u, c), ya(a.o, b), b.ib(), b.g && jh(b.g), bv(b, null));
      }
      if (!b) throw Error("xa");
      return b;
    },
    jv = function (a) {
      for (var b = []; a.o && 0 != a.o.length; ) {
        var c = b,
          d = c.push;
        var e = iv(a, a.o ? a.o[0] || null : null);
        d.call(c, e);
      }
    };
  var kv = function () {},
    lv;
  Zd(kv);
  var mv = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
  };
  k = kv.prototype;
  k.ld = function () {};
  k.Jb = function (a) {
    return a.h.sb("DIV", nv(this, a).join(" "), a.getContent());
  };
  k.Id = function () {
    return !0;
  };
  k.ub = function (a, b) {
    b.id && Zu(a, b.id);
    b && b.firstChild ? ov(a, b.firstChild.nextSibling ? Aa(b.childNodes) : b.firstChild) : (a.vb = null);
    var c = 0,
      d = this.cb(),
      e = this.cb(),
      f = !1,
      g = !1,
      h = Aa(mu(b));
    h.forEach(function (l) {
      f || l != d ? (g || l != e ? (c |= pv(this, l)) : (g = !0)) : ((f = !0), e == d && (g = !0));
      1 == pv(this, l) && b.hasAttribute("tabindex") && ph(b) && oh(b, !1);
    }, this);
    a.fa = c;
    f || (h.push(d), e == d && (g = !0));
    g || h.push(e);
    (a = a.jd) && h.push.apply(h, a);
    (f && g && !a) || nu(b, h.join(" "));
    return b;
  };
  k.je = function (a) {
    null == a.Ua && (a.Ua = Gu(a.da ? a.g : a.h.g.body));
    a.Ua && this.Kd(a.C(), !0);
    a.isEnabled() && this.Wb(a, a.isVisible());
  };
  var qv = function (a, b) {
    if ((a = a.ld())) {
      var c = b.getAttribute("role") || null;
      a != c && th(b, a);
    }
  };
  k = kv.prototype;
  k.Jc = function (a, b) {
    Iu(a, !b, !H);
  };
  k.Kd = function (a, b) {
    var c = this.cb() + "-SIsrTd";
    (a = a.C ? a.C() : a) && (b ? qu : su)(a, [c]);
  };
  k.Jd = function (a) {
    var b;
    return a.na & 32 && (b = a.C()) ? b.hasAttribute("tabindex") && ph(b) : !1;
  };
  k.Wb = function (a, b) {
    var c;
    if (a.na & 32 && (c = a.C())) {
      if (!b && a.fa & 32) {
        try {
          c.blur();
        } catch (d) {}
        a.fa & 32 && a.Md(null);
      }
      (c.hasAttribute("tabindex") && ph(c)) != b && oh(c, b);
    }
  };
  k.Kc = function (a, b, c) {
    var d = a.C();
    if (d) {
      var e = rv(this, b);
      e && (a = a.C ? a.C() : a) && (c ? qu : su)(a, [e]);
      this.Ma(d, b, c);
    }
  };
  k.Ma = function (a, b, c) {
    lv || (lv = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
    b = lv[b];
    var d = a.getAttribute("role") || null;
    d && ((d = mv[d] || b), (b = "checked" == b || "selected" == b ? d : b));
    b && uh(a, b, c);
  };
  k.setContent = function (a, b) {
    if (a && (ih(a), b))
      if ("string" === typeof b) lh(a, b);
      else {
        var c = function (d) {
          if (d) {
            var e = Wg(a);
            a.appendChild("string" === typeof d ? e.createTextNode(d) : d);
          }
        };
        Array.isArray(b) ? b.forEach(c) : !Ba(b) || "nodeType" in b ? c(b) : Aa(b).forEach(c);
      }
  };
  k.cb = function () {
    return "VIpgJd-bMcfAe";
  };
  var nv = function (a, b) {
      var c = a.cb(),
        d = [c],
        e = a.cb();
      e != c && d.push(e);
      c = b.getState();
      for (e = []; c; ) {
        var f = c & -c;
        e.push(rv(a, f));
        c &= ~f;
      }
      d.push.apply(d, e);
      (a = b.jd) && d.push.apply(d, a);
      return d;
    },
    rv = function (a, b) {
      a.g || sv(a);
      return a.g[b];
    },
    pv = function (a, b) {
      if (!a.j) {
        a.g || sv(a);
        var c = a.g,
          d = {},
          e;
        for (e in c) d[c[e]] = e;
        a.j = d;
      }
      a = parseInt(a.j[b], 10);
      return isNaN(a) ? 0 : a;
    },
    sv = function (a) {
      var b = a.cb();
      a.g = {
        1: b + "-OWB6Me",
        2: b + "-ZmdkE",
        4: b + "-auswjd",
        8: b + "-gk6SMd",
        16: b + "-barxie",
        32: b + "-XpnDCe",
        64: b + "-FNFY6c"
      };
    };
  var tv = function () {};
  G(tv, kv);
  Zd(tv);
  k = tv.prototype;
  k.ld = function () {
    return "button";
  };
  k.Ma = function (a, b, c) {
    switch (b) {
      case 8:
      case 16:
        uh(a, "pressed", c);
        break;
      default:
      case 64:
      case 1:
        tv.O.Ma.call(this, a, b, c);
    }
  };
  k.Jb = function (a) {
    var b = tv.O.Jb.call(this, a);
    this.La(b, a.mc());
    var c = a.aa();
    c && this.Ld(b, c);
    a.na & 16 && this.Ma(b, 16, !!(a.fa & 16));
    return b;
  };
  k.ub = function (a, b) {
    b = tv.O.ub.call(this, a, b);
    a.ea = this.aa(b);
    a.A = this.mc(b);
    a.na & 16 && this.Ma(b, 16, !!(a.fa & 16));
    return b;
  };
  k.aa = function () {};
  k.Ld = function () {};
  k.mc = function (a) {
    return a.title;
  };
  k.La = function (a, b) {
    a && (b ? (a.title = b) : a.removeAttribute("title"));
  };
  k.cb = function () {
    return "VIpgJd-LgbsSe";
  };
  var uv = {
    Oc: "mousedown",
    Pc: "mouseup",
    Pd: "mousecancel",
    Oh: "mousemove",
    Qh: "mouseover",
    Ph: "mouseout",
    Mh: "mouseenter",
    Nh: "mouseleave"
  };
  var vv = function (a, b) {
      if (!a) throw Error("ya`" + a);
      if ("function" !== typeof b) throw Error("za`" + b);
    },
    wv = {};
  var Z = function (a, b, c) {
    Y.call(this, c);
    if (!b) {
      for (b = this.constructor; b; ) {
        var d = id(b);
        if ((d = wv[d])) break;
        b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
      }
      b = d ? ("function" === typeof d.L ? d.L() : new d()) : null;
    }
    this.i = b;
    this.vb = void 0 !== a ? a : null;
  };
  G(Z, Y);
  k = Z.prototype;
  k.vb = null;
  k.fa = 0;
  k.na = 39;
  k.Mb = 255;
  k.bc = !0;
  k.jd = null;
  k.pd = !0;
  var yv = function (a) {
    a.da && 0 != a.pd && xv(a, !1);
    a.pd = !1;
  };
  k = Z.prototype;
  k.Ga = function () {
    var a = this.i.Jb(this);
    this.g = a;
    qv(this.i, a);
    this.i.Jc(a, !1);
    this.isVisible() || (X(a, !1), a && uh(a, "hidden", !0));
  };
  k.ac = function () {
    return this.C();
  };
  k.Ic = function (a) {
    return this.i.Id(a);
  };
  k.wb = function (a) {
    this.g = a = this.i.ub(this, a);
    qv(this.i, a);
    this.i.Jc(a, !1);
    this.bc = "none" != a.style.display;
  };
  k.T = function () {
    Z.O.T.call(this);
    var a = this.i,
      b = this.g;
    this.isVisible() || uh(b, "hidden", !this.isVisible());
    this.isEnabled() || a.Ma(b, 1, !this.isEnabled());
    this.na & 8 && a.Ma(b, 8, this.isSelected());
    this.na & 16 && a.Ma(b, 16, !!(this.fa & 16));
    this.na & 64 && a.Ma(b, 64, !!(this.fa & 64));
    this.i.je(this);
    this.na & -2 &&
      (this.pd && xv(this, !0), this.na & 32 && (a = this.C())) &&
      ((b = this.j || (this.j = new Ru())),
      b.attach(a),
      av(this).listen(b, "key", this.We).listen(a, "focus", this.Ve).listen(a, "blur", this.Md));
  };
  var xv = function (a, b) {
    var c = av(a),
      d = a.C();
    b
      ? (c.listen(d, uv.Oc, a.Kb).listen(d, [uv.Pc, uv.Pd], a.Qb).listen(d, "mouseover", a.F).listen(d, "mouseout", a.D),
        a.v != mg && c.listen(d, "contextmenu", a.v),
        H && !a.l && ((a.l = new zv(a)), N(a, a.l)))
      : (c.X(d, uv.Oc, a.Kb).X(d, [uv.Pc, uv.Pd], a.Qb).X(d, "mouseover", a.F).X(d, "mouseout", a.D),
        a.v != mg && c.X(d, "contextmenu", a.v),
        H && (nc(a.l), (a.l = null)));
  };
  Z.prototype.ib = function () {
    Z.O.ib.call(this);
    this.j && this.j.detach();
    this.isVisible() && this.isEnabled() && this.i.Wb(this, !1);
  };
  Z.prototype.K = function () {
    Z.O.K.call(this);
    this.j && (this.j.ga(), delete this.j);
    delete this.i;
    this.l = this.jd = this.vb = null;
  };
  Z.prototype.getContent = function () {
    return this.vb;
  };
  Z.prototype.setContent = function (a) {
    this.i.setContent(this.C(), a);
    this.vb = a;
  };
  var ov = function (a, b) {
    a.vb = b;
  };
  Z.prototype.isVisible = function () {
    return this.bc;
  };
  var Av = function (a, b) {
    if (a.bc != b && a.dispatchEvent(b ? "show" : "hide")) {
      var c = a.C();
      c && (X(c, b), c && uh(c, "hidden", !b));
      a.isEnabled() && a.i.Wb(a, b);
      a.bc = b;
    }
  };
  Z.prototype.isEnabled = function () {
    return !(this.fa & 1);
  };
  Z.prototype.setEnabled = function (a) {
    var b = this.getParent();
    (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
      !Bv(this, 1, !a) ||
      (a || (Cv(this, !1), Dv(this, !1)), this.isVisible() && this.i.Wb(this, a), Ev(this, 1, !a, !0));
  };
  var Dv = function (a, b) {
    Bv(a, 2, b) && Ev(a, 2, b);
  };
  Z.prototype.isActive = function () {
    return !!(this.fa & 4);
  };
  var Cv = function (a, b) {
    Bv(a, 4, b) && Ev(a, 4, b);
  };
  Z.prototype.isSelected = function () {
    return !!(this.fa & 8);
  };
  Z.prototype.zc = function (a) {
    Bv(this, 32, a) && Ev(this, 32, a);
  };
  Z.prototype.getState = function () {
    return this.fa;
  };
  var Ev = function (a, b, c, d) {
      d || 1 != b ? a.na & b && c != !!(a.fa & b) && (a.i.Kc(a, b, c), (a.fa = c ? a.fa | b : a.fa & ~b)) : a.setEnabled(!c);
    },
    Fv = function (a) {
      if (a.da && a.fa & 32) throw Error("ua");
      a.fa & 32 && Ev(a, 32, !1);
      a.na &= -33;
    },
    Gv = function (a, b) {
      return !!(a.Mb & b) && !!(a.na & b);
    },
    Bv = function (a, b, c) {
      return !!(a.na & b) && !!(a.fa & b) != c && (!(0 & b) || a.dispatchEvent(Xu(b, c))) && !a.pa;
    };
  Z.prototype.F = function (a) {
    !Hv(a, this.C()) && this.dispatchEvent("enter") && this.isEnabled() && Gv(this, 2) && Dv(this, !0);
  };
  Z.prototype.D = function (a) {
    !Hv(a, this.C()) && this.dispatchEvent("leave") && (Gv(this, 4) && Cv(this, !1), Gv(this, 2) && Dv(this, !1));
  };
  Z.prototype.v = mg;
  var Hv = function (a, b) {
    return !!a.relatedTarget && kh(b, a.relatedTarget);
  };
  k = Z.prototype;
  k.Kb = function (a) {
    this.isEnabled() &&
      (Gv(this, 2) && Dv(this, !0),
      0 != a.h.button || (Me && a.ctrlKey) || (Gv(this, 4) && Cv(this, !0), this.i && this.i.Jd(this) && this.C().focus()));
    0 != a.h.button || (Me && a.ctrlKey) || a.g();
  };
  k.Qb = function (a) {
    this.isEnabled() && (Gv(this, 2) && Dv(this, !0), this.isActive() && this.vc(a) && Gv(this, 4) && Cv(this, !1));
  };
  k.vc = function (a) {
    if (Gv(this, 16)) {
      var b = !(this.fa & 16);
      Bv(this, 16, b) && Ev(this, 16, b);
    }
    Gv(this, 8) && Bv(this, 8, !0) && Ev(this, 8, !0);
    Gv(this, 64) && ((b = !(this.fa & 64)), Bv(this, 64, b) && Ev(this, 64, b));
    b = new fj("action", this);
    a &&
      ((b.altKey = a.altKey),
      (b.ctrlKey = a.ctrlKey),
      (b.metaKey = a.metaKey),
      (b.shiftKey = a.shiftKey),
      (b.o = a.o),
      (b.timeStamp = a.timeStamp));
    return this.dispatchEvent(b);
  };
  k.Ve = function () {
    Gv(this, 32) && this.zc(!0);
  };
  k.Md = function () {
    Gv(this, 4) && Cv(this, !1);
    Gv(this, 32) && this.zc(!1);
  };
  k.We = function (a) {
    return this.isVisible() && this.isEnabled() && this.od(a) ? (a.g(), a.stopPropagation(), !0) : !1;
  };
  k.od = function (a) {
    return 13 == a.keyCode && this.vc(a);
  };
  if ("function" !== typeof Z) throw Error("Aa`" + Z);
  if ("function" !== typeof kv) throw Error("Ba`" + kv);
  var Iv = id(Z);
  wv[Iv] = kv;
  vv("VIpgJd-bMcfAe", function () {
    return new Z(null);
  });
  var zv = function (a) {
    M.call(this);
    this.h = a;
    this.g = !1;
    this.i = new U(this);
    N(this, this.i);
    a = this.h.g;
    this.i.listen(a, uv.Oc, this.l).listen(a, uv.Pc, this.o).listen(a, "click", this.j);
  };
  G(zv, M);
  var Jv = !H || 9 <= Number(af);
  zv.prototype.l = function () {
    this.g = !1;
  };
  zv.prototype.o = function () {
    this.g = !0;
  };
  var Kv = function (a, b) {
    if (!Jv) return (a.button = 0), (a.type = b), a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(
      b,
      a.bubbles,
      a.cancelable,
      a.view || null,
      a.detail,
      a.screenX,
      a.screenY,
      a.clientX,
      a.clientY,
      a.ctrlKey,
      a.altKey,
      a.shiftKey,
      a.metaKey,
      0,
      a.relatedTarget || null
    );
    return c;
  };
  zv.prototype.j = function (a) {
    if (this.g) this.g = !1;
    else {
      var b = a.h,
        c = b.button,
        d = b.type,
        e = Kv(b, "mousedown");
      this.h.Kb(new ij(e, a.i));
      e = Kv(b, "mouseup");
      this.h.Qb(new ij(e, a.i));
      Jv || ((b.button = c), (b.type = d));
    }
  };
  zv.prototype.K = function () {
    this.h = null;
    zv.O.K.call(this);
  };
  var Lv = function () {};
  G(Lv, tv);
  Zd(Lv);
  k = Lv.prototype;
  k.ld = function () {};
  k.Jb = function (a) {
    yv(a);
    a.Mb &= -256;
    Fv(a);
    var b = a.h,
      c = b.sb,
      d = { class: nv(this, a).join(" "), disabled: !a.isEnabled(), title: a.mc() || "", value: a.aa() || "" };
    if ((a = a.getContent())) {
      if ("string" !== typeof a)
        if (Array.isArray(a)) a = a.map(rh).join("");
        else {
          var e = [];
          qh(a, e, !0);
          a = e.join("");
          a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
          a = a.replace(/\u200B/g, "");
          a = a.replace(/ +/g, " ");
          " " != a && (a = a.replace(/^\s*/, ""));
        }
      a = a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
    } else a = "";
    return c.call(b, "BUTTON", d, a || "");
  };
  k.Id = function (a) {
    return "BUTTON" == a.tagName || ("INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type));
  };
  k.ub = function (a, b) {
    yv(a);
    a.Mb &= -256;
    Fv(a);
    if (b.disabled) {
      var c = rv(this, 1);
      pu(b, c);
    }
    return Lv.O.ub.call(this, a, b);
  };
  k.je = function (a) {
    av(a).listen(a.C(), "click", a.vc);
  };
  k.Jc = function () {};
  k.Kd = function () {};
  k.Jd = function (a) {
    return a.isEnabled();
  };
  k.Wb = function () {};
  k.Kc = function (a, b, c) {
    Lv.O.Kc.call(this, a, b, c);
    (a = a.C()) && 1 == b && (a.disabled = c);
  };
  k.aa = function (a) {
    return a.value;
  };
  k.Ld = function (a, b) {
    a && (a.value = b);
  };
  k.Ma = function () {};
  var Mv = function (a, b, c) {
    Z.call(this, a, b || Lv.L(), c);
  };
  G(Mv, Z);
  k = Mv.prototype;
  k.aa = function () {
    return this.ea;
  };
  k.mc = function () {
    return this.A;
  };
  k.La = function (a) {
    this.A = a;
    this.i.La(this.C(), a);
  };
  k.K = function () {
    Mv.O.K.call(this);
    delete this.ea;
    delete this.A;
  };
  k.T = function () {
    Mv.O.T.call(this);
    if (this.na & 32) {
      var a = this.C();
      a && av(this).listen(a, "keyup", this.od);
    }
  };
  k.od = function (a) {
    return (13 == a.keyCode && "key" == a.type) || (32 == a.keyCode && "keyup" == a.type) ? this.vc(a) : 32 == a.keyCode;
  };
  vv("VIpgJd-LgbsSe", function () {
    return new Mv(null);
  });
  var Ov = function (a, b, c, d) {
    Mv.call(this, a, d || Nv.L(), c || void 0);
    this.B = b || "";
  };
  E(Ov, Mv);
  k = Ov.prototype;
  k.T = function () {
    Mv.prototype.T.call(this);
    av(this).listen(this, "action", this.kf);
  };
  k.focus = function () {
    try {
      this.C() && this.C().focus();
    } catch (a) {}
  };
  k.zc = function (a) {
    Mv.prototype.zc.call(this, a);
    this.C() && ru(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.Kb = function (a) {
    Mv.prototype.Kb.call(this, a);
    this.C() && pu(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.Qb = function (a) {
    Mv.prototype.Qb.call(this, a);
    this.C() && pu(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.kf = function () {
    this.B && this.dispatchEvent(this.B);
  };
  var Nv = function () {};
  E(Nv, tv);
  Nv.prototype.Jb = function (a) {
    var b = ud(this.i());
    pu(b, "Q0hgme-LgbsSe");
    a.h.Ne(b, a.getContent());
    var c = this.h();
    c && pu(b, c);
    this.ub(a, b);
    return b;
  };
  Nv.prototype.h = function () {
    return "";
  };
  Nv.prototype.i = function () {
    return Yt;
  };
  Nv.L = function () {
    return yh(Nv);
  };
  var Qv = function (a, b, c) {
    Ov.call(this, void 0, b, c, Pv.L());
    this.G = a;
  };
  E(Qv, Ov);
  Qv.prototype.T = function () {
    Ov.prototype.T.call(this);
    var a = this.G,
      b = this.C();
    b && Lu.L().La(b, a);
  };
  Qv.prototype.setEnabled = function (a) {
    Ov.prototype.setEnabled.call(this, a);
  };
  Qv.prototype.La = function (a) {
    this.G = a;
    if (this.isEnabled()) {
      var b = this.C();
      b && Lu.L().La(b, a);
    }
  };
  chrome.i18n.getMessage("3551522853788442530");
  var Pv = function () {};
  E(Pv, Nv);
  Pv.prototype.h = function () {
    return "Q0hgme-Bz112c-LgbsSe";
  };
  Pv.prototype.i = function () {
    return $t;
  };
  Pv.L = function () {
    return yh(Pv);
  };
  var Rv = function () {
    this.g = this.i = this.j = this.h = null;
  };
  var Sv = function () {
    Y.call(this);
    this.i = [];
    ss(V(), this.l, this);
  };
  E(Sv, Y);
  Sv.prototype.T = function () {
    Y.prototype.T.call(this);
    var a = new Gr(this.j, 50, this);
    N(this, a);
    var b = new fq(a.qa, 16, a);
    N(this, a);
    pn(av(this), this, "I", b.Gc, void 0, b);
    Tv(this, !1);
  };
  var Tv = function (a, b) {
    a.C() && (X(a.C(), b), a.dispatchEvent("K"));
  };
  Sv.prototype.l = function () {
    var a = V().g;
    a = Be(a ? Bo(a) : [], function (b) {
      b = Eo(b);
      return !!b && (Am(b) || Bm(b) || Cm(b));
    });
    Ga(this.i, a)
      ? fv(this, function (b) {
          Uv(b);
        })
      : ((this.i = a),
        jv(this),
        Bd(
          a,
          function (b) {
            hv(this, new Vv(b), !0);
          },
          this
        ),
        Tv(this, !!gv(this)),
        this.j());
  };
  Sv.prototype.j = function () {
    for (var a = gv(this), b = [], c = [], d = 0; d < a; d++) {
      var e = this.o ? this.o[d] || null : null,
        f = 6 <= c.length;
      null == e.l || f ? X(e.C(), !1) : (c.push(e), b.push(e.l), X(e.C(), !0));
    }
    a = Cd(b);
    this.C().style.paddingTop = a.ef + "%";
    for (b = 0; b < c.length; b++)
      if (((d = a.Cf[b]), (e = c[b].C())))
        (e.style.top = d.top + "%"), (e.style.left = d.left + "%"), (e.style.width = d.width + "%"), (e.style.height = d.height + "%");
    this.dispatchEvent("K");
  };
  var Wv = function (a, b) {
      fv(a, function (c) {
        return c.Ad(b);
      });
    },
    Vv = function (a) {
      Y.call(this);
      this.A = yh(Yr);
      var b = chrome.i18n.getMessage("6932835915069019531");
      this.v = new Qv(b);
      this.j = a;
      this.i = this.l = null;
    };
  E(Vv, Y);
  Vv.prototype.Ga = function () {
    this.g = ud(ju);
  };
  Vv.prototype.T = function () {
    Y.prototype.T.call(this);
    ev(this.v, this.C().querySelector(".HiaYvf-VkLyEc"));
    var a = (this.i = this.C().querySelector(".HiaYvf-SmKAyb")),
      b;
    if (!(b = Eo(this.j).l)) {
      var c = this.j;
      b = new Rv();
      b.h = "https://keep.google.com";
      b.j = c.Ha;
      b.i = c.R;
      Eo(c) && Eo(c).j && (b.g = Eo(c).j);
      c = b.h ? Ic(b.h) : new yi();
      c.g = ["", "/media/v2/" + b.j + "/" + b.i, b.g ? "/" + b.g : ""].join("");
      b = c.toString();
    }
    a.src = b;
    av(this).listen(this.i, "load", this.B).listen(this.v, "action", this.D);
    Uv(this);
  };
  var Uv = function (a) {
    var b = a.C();
    b && ((a = "luf" == Eo(a.j).h), tu(b, "u0pjoe", a), (a = a ? Xv : ""), Lu.L().La(b, a, !0));
  };
  Vv.prototype.B = function () {
    var a = (this.i.naturalWidth || this.i.width) / (this.i.naturalHeight || this.i.height);
    this.l != a && ((this.l = a), this.dispatchEvent("I"));
  };
  Vv.prototype.D = function () {
    var a = this.j;
    if (1 !== a.l) {
      a.j && Un(a) && (0 != a.l || Po(a.j, a.g, Sc(a)));
      a.l = 1;
      var b = new Qh(),
        c = a.u;
      if (c.g && b) throw Error("E");
      c.g = b;
      Wh(a.u, b);
      Rn(a);
      a.o &&
        ((b = a.o),
        "DELETED" != b.h && ((b.h = "DELETED"), (b.l = !0), b.dispatchEvent("k")),
        (b = a.o),
        (b.l || (b.g && b.g.F)) && a.dispatchEvent("u"));
    }
    Si(bd(), "n_ecmv3m") ? this.A.log(9023) : y("impression", 9023);
    this.ga();
  };
  Vv.prototype.Ad = function (a) {
    Av(this.v, a);
  };
  var Xv = chrome.i18n.getMessage("4153306913989815073");
  var Zv = function (a) {
      var b = 0,
        c = 0;
      Yv(a) && ((b = a.selectionStart), (c = -1));
      return [b, c];
    },
    Yv = function (a) {
      try {
        return "number" == typeof a.selectionStart;
      } catch (b) {
        return !1;
      }
    };
  var $v = function (a, b, c, d) {
    M.call(this);
    d = d || 150;
    this.j = null != c ? c : !0;
    this.o = a || ",;";
    this.H = this.o.charAt(0);
    a = this.j ? "[\\s" + this.o + "]+" : "[\\s]+";
    this.F = new RegExp("^" + a + "|" + a + "$", "g");
    this.D = new RegExp("\\s*[" + this.o + "]$");
    this.v = b || "";
    this.G = this.j;
    this.i = 0 < d ? new dq(d) : null;
    this.h = new U(this);
    this.s = new U(this);
    this.l = new Ru();
    this.u = -1;
  };
  G($v, M);
  k = $v.prototype;
  k.Y = null;
  k.sd = "";
  k.ab = !1;
  k.zd = !1;
  k.aa = function () {
    return this.Y.value;
  };
  k.setCursorPosition = function (a) {
    var b = this.Y;
    Yv(b) && (b.selectionStart = a);
    b = this.Y;
    Yv(b) && (b.selectionEnd = a);
  };
  var aw = function (a, b) {
      vd(b) && 1 == b.nodeType && (th(b, "combobox"), uh(b, "autocomplete", "list"));
      a.h.listen(b, "focus", a.Mc);
      a.h.listen(b, "blur", a.Lc);
      a.Y || (a.s.listen(b, "keydown", a.me), vd(b) && 1 == b.nodeType && sh(Wg(b)) == b && a.wc(b));
    },
    bw = function (a, b) {
      vd(b) && 1 == b.nodeType && (b.removeAttribute("role"), b.removeAttribute("aria-autocomplete"));
      b == a.Y && a.Lc();
      a.h.X(b, "focus", a.Mc);
      a.h.X(b, "blur", a.Lc);
      a.Y || a.s.X(b, "keydown", a.me);
    };
  $v.prototype.B = function (a) {
    if (this.Y) {
      var b = a.toString();
      if (this.j) {
        a = cw(this, this.aa(), Zv(this.Y)[0]);
        var c = dw(this, this.aa());
        this.D && !this.D.test(b) && (b = b.replace(/[\s\xa0]+$/, "") + this.H);
        0 == a || ie(c[a - 1]) || (b = " " + b);
        a == c.length - 1 && (b += " ");
        if (b != c[a]) {
          c[a] = b;
          b = this.Y;
          (Je || H) && b.blur();
          b.value = c.join("");
          for (var d = 0, e = 0; e <= a; e++) d += c[e].length;
          b.focus();
          this.setCursorPosition(d);
        }
      } else this.Y.value = b;
      this.zd = !0;
    }
    return !1;
  };
  $v.prototype.K = function () {
    $v.O.K.call(this);
    this.h.ga();
    delete this.h;
    this.s.ga();
    this.l.ga();
    nc(this.i);
  };
  var hw = function (a, b) {
      switch (b.keyCode) {
        case 40:
          if (a.g.g.isVisible()) {
            ew(a.g);
            b.g();
            return;
          }
          if (!a.j) {
            a.update(!0);
            b.g();
            return;
          }
          break;
        case 38:
          if (a.g.g.isVisible()) {
            a: {
              a = a.g;
              for (var c = a.l, d = 0; d < a.h.length; d++) {
                if (c > a.i) c--;
                else break;
                if (a.mb(c)) break a;
              }
            }
            b.g();
            return;
          }
          break;
        case 9:
          if (!a.g.g.isVisible() || b.shiftKey) a.g.Aa();
          else if ((a.update(), fw(a.g) && a.G)) {
            b.g();
            return;
          }
          break;
        case 13:
          if (a.g.g.isVisible()) {
            if ((a.update(), fw(a.g))) {
              b.g();
              b.stopPropagation();
              return;
            }
          } else a.g.Aa();
          break;
        case 27:
          if (a.g.g.isVisible()) {
            a.g.Aa();
            b.g();
            b.stopPropagation();
            return;
          }
          break;
        case 229:
          if (!a.ab) {
            a.ab || (a.h.listen(a.Y, "keyup", a.oe), a.h.listen(a.Y, "keypress", a.ne), (a.ab = !0));
            return;
          }
      }
      gw(a, b);
    },
    gw = function (a, b) {
      var c = a.j && b.l && -1 != a.o.indexOf(String.fromCharCode(b.l));
      c && a.update();
      c && fw(a.g) && b.g();
    };
  k = $v.prototype;
  k.pf = function () {
    return !1;
  };
  k.Mc = function (a) {
    this.wc(a.target || null);
  };
  k.wc = function (a) {
    this.s.removeAll();
    this.g && iw(this.g);
    a != this.Y &&
      ((this.Y = a),
      this.i && (this.i.start(), this.h.listen(this.i, "tick", this.se)),
      (this.sd = this.aa()),
      this.l.attach(this.Y),
      this.h.listen(this.l, "key", this.pe),
      this.h.listen(this.Y, "mousedown", this.qe),
      H && this.h.listen(this.Y, "keypress", this.A));
  };
  k.Lc = function () {
    this.Y &&
      (this.h.X(this.l, "key", this.pe),
      this.l.detach(),
      this.h.X(this.Y, "keyup", this.pf),
      this.h.X(this.Y, "mousedown", this.qe),
      H && this.h.X(this.Y, "keypress", this.A),
      this.ab && jw(this),
      (this.Y = null),
      this.i && (this.i.stop(), this.h.X(this.i, "tick", this.se)),
      this.g && kw(this.g));
  };
  k.se = function () {
    this.update();
  };
  k.me = function (a) {
    this.Mc(a);
  };
  k.pe = function (a) {
    this.u = a.keyCode;
    this.g && hw(this, a);
  };
  k.ne = function () {
    this.ab && 229 != this.u && jw(this);
  };
  k.oe = function (a) {
    this.ab && (13 == a.keyCode || (77 == a.keyCode && a.ctrlKey)) && jw(this);
  };
  k.qe = function () {};
  var jw = function (a) {
    a.ab && ((a.ab = !1), a.h.X(a.Y, "keypress", a.ne), a.h.X(a.Y, "keyup", a.oe));
  };
  $v.prototype.A = function (a) {
    gw(this, a);
  };
  $v.prototype.update = function (a) {
    if (this.Y && (a || this.aa() != this.sd)) {
      if (a || !this.zd) {
        a = Zv(this.Y)[0];
        var b = this.aa();
        a = dw(this, b)[cw(this, b, a)];
        a = this.F ? String(a).replace(this.F, "") : a;
        this.g && ((this.g.s = this.Y), lw(this.g, a));
      }
      this.sd = this.aa();
    }
    this.zd = !1;
  };
  var cw = function (a, b, c) {
      a = dw(a, b);
      if (c == b.length) return a.length - 1;
      for (var d = (b = 0), e = 0; d < a.length && e <= c; d++) (e += a[d].length), (b = d);
      return b;
    },
    dw = function (a, b) {
      if (!a.j) return [b];
      b = String(b).split("");
      for (var c = [], d = [], e = 0, f = !1; e < b.length; e++)
        a.v && -1 != a.v.indexOf(b[e])
          ? (f || (c.push(d.join("")), (d.length = 0)), d.push(b[e]), (f = !f))
          : f || -1 == a.o.indexOf(b[e])
          ? d.push(b[e])
          : (d.push(b[e]), c.push(d.join("")), (d.length = 0));
      c.push(d.join(""));
      return c;
    };
  var mw = function (a) {
    $v.call(this);
    this.N = a;
  };
  E(mw, $v);
  mw.prototype.B = function (a) {
    this.Y.value = "";
    this.N(a);
    return !0;
  };
  mw.prototype.wc = function (a) {
    $v.prototype.wc.call(this, a);
    this.aa() || lw(this.g, this.aa());
  };
  var ow = function (a, b) {
      var c = [];
      if ("" != a)
        for (var d = new RegExp("(^|\\W+)" + Fg(a), "i"), e = 0; e < b.length && 100 > c.length; e++) {
          var f = b[e];
          String(f).match(d) && c.push(f);
        }
      0 == c.length && (c = nw(a, b));
      return c;
    },
    nw = function (a, b) {
      for (var c = [], d = 0; d < b.length; d++) {
        var e = b[d],
          f = a.toLowerCase(),
          g = String(e).toLowerCase(),
          h = 0;
        if (-1 != g.indexOf(f)) h = parseInt((g.indexOf(f) / 4).toString(), 10);
        else
          for (var l = f.split(""), m = -1, p = 10, u = 0, w; (w = l[u]); u++)
            (w = g.indexOf(w)), w > m ? ((m = w - m - 1), m > p - 5 && (m = p - 5), (h += m), (m = w)) : ((h += p), (p += 5));
        h < 6 * f.length && c.push({ Jf: e, ze: h, index: d });
      }
      c.sort(function (r, A) {
        var J = r.ze - A.ze;
        return 0 != J ? J : r.index - A.index;
      });
      a = [];
      for (u = 0; 100 > u && u < c.length; u++) a.push(c[u].Jf);
      return a;
    };
  var pw = function () {
    R.call(this);
    this.g = new zn({ mainId: "QUMgc2VudGluZWwgbGFiZWw=" });
    this.h = "";
  };
  E(pw, R);
  var qw = function (a, b, c, d) {
    var e = V().h,
      f = Jn(e);
    if (b) {
      var g = ow(b, f);
      !Ce(f, function (l) {
        return l.ka().toLowerCase() == b.toLowerCase();
      }) &&
        100 > cc(In(e)) &&
        ((e = chrome.i18n.getMessage("8169232898590866289", [b])), Cn(a.g, e), (a.h = b), g.unshift(a.g));
    } else g = f.slice();
    var h = V().g;
    h &&
      za(
        g,
        function (l) {
          return vo(h, l);
        },
        a
      );
    d(b, g.splice(0, c));
    a.dispatchEvent("K");
  };
  var rw = function (a, b, c) {
    R.call(this);
    this.u = a;
    this.v = c;
    this.g = b;
    vj(b, ["hilite", "select", "canceldismiss", "dismiss"], this.handleEvent, !1, this);
    this.j = null;
    this.h = [];
    this.l = -1;
    this.i = 0;
    this.o = this.s = null;
    this.B = {};
  };
  G(rw, R);
  rw.prototype.D = 10;
  rw.prototype.getToken = function () {
    return this.j;
  };
  rw.prototype.handleEvent = function (a) {
    var b = this.u;
    if (a.target == this.g)
      switch (a.type) {
        case "hilite":
          this.mb(a.pb);
          break;
        case "select":
          var c = !1;
          if ("number" === typeof a.pb) {
            a = a.pb;
            var d = this.h[sw(this, a)];
            c = !!d && b.qd && b.qd(d);
            d && !c && this.l != a && this.mb(a);
          }
          c || fw(this);
          break;
        case "canceldismiss":
          iw(this);
          break;
        case "dismiss":
          kw(this);
      }
  };
  var lw = function (a, b) {
      a.j != b && ((a.j = b), qw(a.u, a.j, a.D, F(a.F, a)), iw(a));
    },
    ew = function (a) {
      for (var b = a.i + a.h.length - 1, c = a.l, d = 0; d < a.h.length; d++) {
        if (c >= a.i && c < b) c++;
        else if (-1 == c) c = a.i;
        else break;
        if (a.mb(c)) break;
      }
    };
  rw.prototype.mb = function (a) {
    var b = sw(this, a),
      c = this.h[b];
    return c && this.u.qd && this.u.qd(c) ? !1 : ((this.l = a), this.g.mb(a), -1 != b);
  };
  var fw = function (a) {
    var b = sw(a, a.l);
    if (-1 != b) {
      var c = a.h[b],
        d = a.v.B(c);
      a.Aa();
      d || a.dispatchEvent({ type: "update", pb: c, index: b });
      return !0;
    }
    a.Aa();
    a.dispatchEvent({ type: "update", pb: null, index: null });
    return !1;
  };
  rw.prototype.Aa = function () {
    this.l = -1;
    this.j = null;
    this.i += this.h.length;
    this.h = [];
    window.clearTimeout(this.o);
    this.o = null;
    this.g.Aa();
    this.dispatchEvent("suggestionsupdate");
    this.dispatchEvent("dismiss");
  };
  var kw = function (a) {
    a.o || (a.o = window.setTimeout(F(a.Aa, a), 100));
  };
  rw.prototype.A = function () {
    return this.o ? (window.clearTimeout(this.o), (this.o = null), !0) : !1;
  };
  var iw = function (a) {
    a.A() || window.setTimeout(F(a.A, a), 10);
  };
  rw.prototype.K = function () {
    rw.O.K.call(this);
    delete this.B;
    this.g.ga();
    this.v.ga();
    this.u = null;
  };
  rw.prototype.F = function (a, b, c) {
    this.j == a && this.yd(b, c);
  };
  rw.prototype.yd = function (a, b) {
    var c = "object" == $d(b) && b;
    b = (c ? c.h() : b) ? sw(this, this.l) : -1;
    this.i += this.h.length;
    this.h = a;
    for (var d = [], e = 0; e < a.length; ++e) d.push({ id: this.i + e, data: a[e] });
    a = null;
    this.s && (a = this.B[id(this.s)] || this.s);
    this.g.bf = a;
    this.g.yd(d, this.j, this.s);
    a = !0;
    c && void 0 !== c.g() && (a = c.g());
    this.l = -1;
    (a || 0 <= b) && 0 != d.length && this.j && (0 <= b ? this.mb(this.i + b) : ew(this));
    this.dispatchEvent("suggestionsupdate");
  };
  var sw = function (a, b) {
    b -= a.i;
    return 0 > b || b >= a.h.length ? -1 : b;
  };
  rw.prototype.update = function (a) {
    this.v.update(a);
  };
  var tw = function (a, b, c) {
    rw.call(this, a, b, c);
  };
  E(tw, rw);
  tw.prototype.Aa = function () {
    rw.prototype.Aa.call(this);
    this.dispatchEvent("K");
  };
  var uw = /#(.)(.)(.)/,
    vw = /^#(?:[0-9a-f]{3}){1,2}$/i;
  var xw = (function () {
    if (Ne) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(ea())) ? a[1] : "0";
    }
    return Me
      ? ((a = /1[0|1][_.][0-9_.]+/), (a = a.exec(ea())) ? a[0].replace(/_/g, ".") : "10")
      : Oe
      ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(ea())) ? a[1] : "")
      : Pe || Qe || Re
      ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(ea())) ? a[1].replace(/_/g, ".") : "")
      : "";
  })();
  var yw = function (a) {
      return (a = a.exec(ea())) ? a[1] : "";
    },
    zw = (function () {
      if (bf) return yw(/Firefox\/([0-9.]+)/);
      if (H || He || Ge) return Ye;
      if (ff) {
        if (ra() || sa()) {
          var a = yw(/CriOS\/([0-9.]+)/);
          if (a) return a;
        }
        return yw(/Chrome\/([0-9.]+)/);
      }
      if (gf && !ra()) return yw(/Version\/([0-9.]+)/);
      if (cf || df) {
        if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ea()))) return a[1] + "." + a[2];
      } else if (ef) return (a = yw(/Android\s+([0-9.]+)/)) ? a : yw(/Version\/([0-9.]+)/);
      return "";
    })();
  var Aw = function (a, b) {
    return (b & 8 && Gu(a) ? b ^ 4 : b) & -9;
  };
  var Bw = function (a, b, c, d) {
    R.call(this);
    this.v = a || document.body;
    this.j = qd(this.v);
    this.R = !a;
    this.g = null;
    this.A = "";
    this.h = [];
    this.l = [];
    this.H = this.u = -1;
    this.o = !1;
    this.className = "ztA2jd-SUR3Rd";
    this.N = "ztA2jd-AHUcCb";
    this.s = b || null;
    this.Z = null != d ? d : !0;
    this.S = !!c;
  };
  G(Bw, R);
  Bw.prototype.C = function () {
    return this.g;
  };
  Bw.prototype.yd = function (a, b, c) {
    this.A = b;
    this.h = a;
    this.u = -1;
    this.H = Date.now();
    this.i = c;
    this.l = [];
    Cw(this);
  };
  Bw.prototype.Aa = function () {
    this.o && ((this.o = !1), Dw(this, !1), X(this.g, !1));
  };
  Bw.prototype.show = function () {
    this.o || ((this.o = !0), Dw(this, !0), X(this.g, !0));
  };
  var Dw = function (a, b) {
    a.i &&
      (uh(a.i, "haspopup", b),
      uh(a.g, "expanded", b),
      uh(a.i, "expanded", b),
      b ? uh(a.i, "owns", a.g.id) : (a.i.removeAttribute("aria-owns"), vh(a.i, null)));
  };
  Bw.prototype.isVisible = function () {
    return this.o;
  };
  var Ew = function (a, b) {
    var c = 0 <= b && b < a.h.length ? a.h[b] : void 0,
      d = 0 <= b && b < a.l.length ? a.l[b] : void 0;
    if (
      a.dispatchEvent({ type: "rowhilite", s: d, pb: c ? c.data : null }) &&
      (0 <= a.u && su(a.l[a.u], ["ztA2jd-auswjd", "auswjd"]), (a.u = b), d)
    ) {
      qu(d, ["ztA2jd-auswjd", "auswjd"]);
      a.i && vh(a.i, d);
      b = (a = a.g || bh(document)) || bh(document);
      var e = Bu(d),
        f = Bu(b);
      if (!H || 9 <= Number(af)) {
        c = vu(b, "borderLeftWidth");
        var g = vu(b, "borderRightWidth");
        h = vu(b, "borderTopWidth");
        l = vu(b, "borderBottomWidth");
        g = new uu(parseFloat(h), parseFloat(g), parseFloat(l), parseFloat(c));
      } else {
        c = Ku(b, "borderLeft");
        g = Ku(b, "borderRight");
        var h = Ku(b, "borderTop"),
          l = Ku(b, "borderBottom");
        g = new uu(h, g, l, c);
      }
      b == bh(document)
        ? ((c = e.x - b.scrollLeft), (e = e.y - b.scrollTop), !H || 10 <= Number(af) || ((c += g.left), (e += g.top)))
        : ((c = e.x - f.x - g.left), (e = e.y - f.y - g.top));
      d = Eu(d);
      f = b.clientHeight - d.height;
      g = b.scrollLeft;
      h = b.scrollTop;
      g += Math.min(c, Math.max(c - (b.clientWidth - d.width), 0));
      h += Math.min(e, Math.max(e - f, 0));
      b = new Sg(g, h);
      a.scrollLeft = b.x;
      a.scrollTop = b.y;
    }
  };
  Bw.prototype.mb = function (a) {
    if (-1 == a) Ew(this, -1);
    else
      for (var b = 0; b < this.h.length; b++)
        if (this.h[b].id == a) {
          Ew(this, b);
          break;
        }
  };
  var Fw = function (a) {
      if (!a.g) {
        var b = a.j.sb("DIV", { style: "display:none" });
        a.g = b;
        qu(b, je(a.className).split(" "));
        th(b, "listbox");
        b.id = ":" + (Vu.L().g++).toString(36);
        a.v.appendChild(b);
        vj(b, "click", a.B, !1, a);
        vj(b, "mousedown", a.D, !1, a);
        vj(b, "mouseover", a.F, !1, a);
      }
    },
    Cw = function (a) {
      Fw(a);
      a.ba && (a.g.style.minWidth = a.ba.clientWidth - 0 + "px");
      a.U && (a.g.style.maxWidth = a.U.clientWidth - 0 + "px");
      a.l.length = 0;
      a.j.Oe(a.g);
      a.s && a.s.xc
        ? a.s.xc(a, a.g, a.h, a.A)
        : a.h.forEach(function (b) {
            var c = this.A,
              d = this.j.sb("DIV", { className: "ztA2jd-oKdM2c", id: ":" + (Vu.L().g++).toString(36) });
            th(d, "option");
            this.s && this.s.Ef ? this.s.Ef(b, c, d) : lh(d, b.data.toString());
            c && this.Z && ((this.G = !1), Gw(this, d, c));
            pu(d, "ztA2jd-oKdM2c");
            this.l.push(d);
            b = d;
            this.g.appendChild(b);
          }, a);
      0 == a.h.length ? a.Aa() : (a.show(), Hw(a), Iu(a.g, !0));
    },
    Hw = function (a) {
      if (a.i && a.R) {
        var b = a.bf || a.i;
        var c = a.S ? 5 : 1;
        a = a.g;
        var d = c ^ 1,
          e;
        if ((e = a.offsetParent)) {
          var f = "HTML" == e.tagName || "BODY" == e.tagName;
          if (!f || "static" != wu(e, "position")) {
            var g = Bu(e);
            if (!f) {
              f = Gu(e);
              var h;
              if ((h = f)) {
                h = gf && 0 <= te(zw, 10);
                var l;
                if ((l = Se)) l = 0 <= te(xw, 10);
                var m = ff && 0 <= te(zw, 85);
                h = Je || h || l || m;
              }
              f = h
                ? -e.scrollLeft
                : f && !Ie && "visible" != wu(e, "overflowX")
                ? e.scrollWidth - e.clientWidth - e.scrollLeft
                : e.scrollLeft;
              g = Tg(g, new Sg(f, e.scrollTop));
            }
          }
        }
        e = g || new Sg();
        g = Bu(b);
        f = Fu(b);
        g = new Dd(g.x, g.y, f.width, f.height);
        if ((f = Cu(b)))
          (m = new Dd(f.left, f.top, f.right - f.left, f.bottom - f.top)),
            (f = Math.max(g.left, m.left)),
            (h = Math.min(g.left + g.width, m.left + m.width)),
            f <= h &&
              ((l = Math.max(g.top, m.top)),
              (m = Math.min(g.top + g.height, m.top + m.height)),
              l <= m && ((g.left = f), (g.top = l), (g.width = h - f), (g.height = m - l)));
        f = qd(b);
        l = qd(a);
        if (f.g != l.g) {
          h = f.g.body;
          l = ch(l.g);
          m = new Sg(0, 0);
          var p = eh(Wg(h));
          if (Fe(p, "parent")) {
            var u = h;
            do {
              if (p == l) var w = Bu(u);
              else (w = zu(u)), (w = new Sg(w.left, w.top));
              m.x += w.x;
              m.y += w.y;
            } while (p && p != l && p != p.parent && (u = p.frameElement) && (p = p.parent));
          }
          h = Tg(m, Bu(h));
          !H || 9 <= Number(af) || $g(f.g) || (h = Tg(h, dh(f.g)));
          g.left += h.x;
          g.top += h.y;
        }
        b = Aw(b, c);
        c = g.left;
        b & 4 ? (c += g.width) : b & 2 && (c += g.width / 2);
        c = new Sg(c, g.top + (b & 1 ? g.height : 0));
        c = Tg(c, e);
        if ((b = Cu(a))) (b.top -= e.y), (b.right -= e.x), (b.bottom -= e.y), (b.left -= e.x);
        c = c.clone();
        g = Aw(a, d);
        d = Fu(a);
        e = d.clone();
        c = c.clone();
        e = e.clone();
        0 != g && (g & 4 ? (c.x -= e.width) : g & 2 && (c.x -= e.width / 2), g & 1 && (c.y -= e.height));
        b
          ? ((g = c),
            (f = e),
            (h = 65),
            (l = 0),
            65 == (h & 65) && (g.x < b.left || g.x >= b.right) && (h &= -2),
            132 == (h & 132) && (g.y < b.top || g.y >= b.bottom) && (h &= -5),
            g.x < b.left && h & 1 && ((g.x = b.left), (l |= 1)),
            h & 16 &&
              ((m = g.x),
              g.x < b.left && ((g.x = b.left), (l |= 4)),
              g.x + f.width > b.right &&
                ((f.width = Math.min(b.right - g.x, m + f.width - b.left)), (f.width = Math.max(f.width, 0)), (l |= 4))),
            g.x + f.width > b.right && h & 1 && ((g.x = Math.max(b.right - f.width, b.left)), (l |= 1)),
            h & 2 && (l |= (g.x < b.left ? 16 : 0) | (g.x + f.width > b.right ? 32 : 0)),
            g.y < b.top && h & 4 && ((g.y = b.top), (l |= 2)),
            h & 32 &&
              ((m = g.y),
              g.y < b.top && ((g.y = b.top), (l |= 8)),
              g.y + f.height > b.bottom &&
                ((f.height = Math.min(b.bottom - g.y, m + f.height - b.top)), (f.height = Math.max(f.height, 0)), (l |= 8))),
            g.y + f.height > b.bottom && h & 4 && ((g.y = Math.max(b.bottom - f.height, b.top)), (l |= 2)),
            h & 8 && (l |= (g.y < b.top ? 64 : 0) | (g.y + f.height > b.bottom ? 128 : 0)),
            (b = l))
          : (b = 256);
        g = new Dd(0, 0, 0, 0);
        g.left = c.x;
        g.top = c.y;
        g.width = e.width;
        g.height = e.height;
        b & 496 ||
          (yu(a, new Sg(g.left, g.top)),
          (e = new Ug(g.width, g.height)),
          d == e ||
            (d && e && d.width == e.width && d.height == e.height) ||
            ((d = e),
            (a = a.style),
            Je ? (a.MozBoxSizing = "border-box") : Le ? (a.WebkitBoxSizing = "border-box") : (a.boxSizing = "border-box"),
            (a.width = Math.max(d.width, 0) + "px"),
            (a.height = Math.max(d.height, 0) + "px")));
      }
    };
  Bw.prototype.K = function () {
    this.g &&
      (Cj(this.g, "click", this.B, !1, this),
      Cj(this.g, "mousedown", this.D, !1, this),
      Cj(this.g, "mouseover", this.F, !1, this),
      this.j.Fd(this.g),
      (this.g = null),
      (this.o = !1));
    nc(this.ca);
    this.v = null;
    Bw.O.K.call(this);
  };
  var Gw = function (a, b, c) {
      if (!a.G)
        if (3 == b.nodeType) {
          var d = null;
          Array.isArray(c) && 1 < c.length && (d = c.slice(1));
          c = Iw(c);
          if (0 != c.length) {
            var e = b.nodeValue,
              f = new RegExp("\\b(?:" + c + ")", "gi");
            c = [];
            for (var g = 0, h = f.exec(e), l = 0; h; )
              l++, c.push(e.substring(g, h.index)), c.push(e.substring(h.index, f.lastIndex)), (g = f.lastIndex), (h = f.exec(e));
            c.push(e.substring(g));
            if (1 < c.length) {
              for (d = 0; 1 > d; d++)
                (e = 2 * d),
                  (b.nodeValue = c[e]),
                  (f = rd(a.j.g, "B")),
                  (f.className = a.N),
                  f.appendChild(a.j.g.createTextNode(String(c[e + 1]))),
                  (f = b.parentNode.insertBefore(f, b.nextSibling)),
                  b.parentNode.insertBefore(a.j.g.createTextNode(""), f.nextSibling),
                  (b = f.nextSibling);
              b.nodeValue = c.slice(2).join("");
              a.G = !0;
            } else d && Gw(a, b, d);
          }
        } else for (b = b.firstChild; b; ) (d = b.nextSibling), Gw(a, b, c), (b = d);
    },
    Iw = function (a) {
      var b = "";
      if (!a) return b;
      Array.isArray(a) &&
        (a = a.filter(function (c) {
          return !ie(null == c ? "" : String(c));
        }));
      Array.isArray(a) ? (b = 0 < a.length ? Fg(a[0]) : "") : /^\W/.test(a) || (b = Fg(a));
      return b;
    },
    Jw = function (a, b) {
      for (; b && b != a.g && !ou(b, "ztA2jd-oKdM2c"); ) b = b.parentNode;
      return b ? a.l.indexOf(b) : -1;
    };
  Bw.prototype.B = function (a) {
    var b = Jw(this, a.target);
    0 <= b && this.dispatchEvent({ type: "select", pb: this.h[b].id });
    a.stopPropagation();
  };
  Bw.prototype.D = function (a) {
    a.stopPropagation();
    a.g();
  };
  Bw.prototype.F = function (a) {
    a = Jw(this, a.target);
    0 <= a && !(300 > Date.now() - this.H) && this.dispatchEvent({ type: "hilite", pb: this.h[a].id });
  };
  var Kw = function (a) {
    Y.call(this);
    this.B = yh(Yr);
    this.D = Si(bd(), "n_ecmv3m");
    this.i = null;
    this.l = new pw();
    this.l.sa(this);
    this.v = new Bw();
    N(this, this.v);
    this.j = new mw(F(this.R, this));
    N(this, this.j);
    var b = new tw(this.l, this.v, this.j);
    b.sa(this);
    b.D = 100;
    this.j.g = b;
    this.F = [];
    this.A = a;
    ss(V(), this.G, this);
  };
  E(Kw, Y);
  Kw.prototype.T = function () {
    Y.prototype.T.call(this);
    var a = this.C();
    this.i = a.querySelector(".RmniWd-V67aGc-yrriRe");
    this.i.setAttribute("maxlength", "50");
    uh(this.i, "label", Lw);
    Lu.L().La(a.querySelector(".V67aGc-Bz112c"), Lw);
    av(this).listen(this, "action", this.Z).listen(this.i, "input", this.S);
    aw(this.j, this.i);
    this.j.g.s = this.i;
    Mw(this);
  };
  Kw.prototype.N = function () {
    this.i.value = "";
    Mw(this);
    this.j.g.Aa();
  };
  var Nw = function (a, b) {
    b ? (a.i.removeAttribute("readonly"), aw(a.j, a.i)) : (a.i.setAttribute("readonly", !0), bw(a.j, a.i));
    fv(a, function (c) {
      return c.Ad(b);
    });
  };
  Kw.prototype.G = function () {
    var a = V().h,
      b = V().g;
    b = b ? uo(b) : [];
    Ga(this.F, b) ||
      ((this.F = b),
      jv(this),
      Bd(
        b,
        function (c) {
          (c = Ln(a, c)) && hv(this, new Ow(c), !0);
        },
        this
      ),
      gv(this) && this.dispatchEvent("G"),
      (b = document.activeElement == this.i),
      this.C().appendChild(this.i),
      b && this.i && this.i.focus());
  };
  var Mw = function (a) {
    var b = rd(document, "SPAN");
    b.className = a.i.className;
    b.classList.add("RmniWd-V67aGc-yrriRe-DyBK0");
    b.innerText = a.i.value;
    document.body.appendChild(b);
    var c = b.getBoundingClientRect().width + 3;
    document.body.removeChild(b);
    a.i.style.width = c + "px";
  };
  Kw.prototype.Z = function (a) {
    var b = V().g;
    if (b && a.target instanceof Ow && ((a = a.target.Ha), Tn(b) && vo(b, a))) {
      a = t([a.g].concat(md(a.h)));
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = b.v[c.value]) && !to(c)) {
          var d = d || new Qh();
          c.g = d;
        }
      Yn(b);
      Rn(b);
      b.dispatchEvent("D");
    }
  };
  Kw.prototype.S = function () {
    this.dispatchEvent("G");
    Mw(this);
  };
  Kw.prototype.R = function (a) {
    var b = V(),
      c = b.g;
    b = b.h;
    if (c) {
      if ("QUMgc2VudGluZWwgbGFiZWw=" == a.g) {
        a = this.l.h;
        var d = a,
          e = Kn(b, d);
        e
          ? (b = e)
          : 100 <= cc(b.g)
          ? (b = null)
          : ((e = {}),
            (e = new zn(((e.name = d), (e.mainId = "tag." + Hg() + "." + new Date().getTime()), e))),
            Bn(e),
            (b.g[e.g] = e),
            b.u(),
            b.s.listen(e, "k", b.u),
            (b = e));
        b && xo(c, b);
        this.D ? (b && this.A && Dt(this.A, b), this.B.log(9056)) : y("impression", 9056);
      } else xo(c, a), (a = a.ka()), this.D ? this.B.log(9060) : y("impression", 9060);
      Mw(this);
      c = chrome.i18n.getMessage("7733569569331009603", [a]);
      y("speakMessage", c);
      this.i && this.i.focus();
    }
  };
  var Lw = chrome.i18n.getMessage("11138431688427255"),
    Ow = function (a) {
      Y.call(this);
      this.j = yh(Yr);
      var b = chrome.i18n.getMessage("1988879857371940328", [a.ka()]);
      this.i = new Qv(b);
      hv(this, this.i);
      this.Ha = a;
      Zu(this, a.g);
    };
  E(Ow, Y);
  Ow.prototype.Ga = function () {
    this.g = ud(iu);
  };
  Ow.prototype.T = function () {
    Y.prototype.T.call(this);
    ev(this.i, $u(this, "h1U9Be-V67aGc-VkLyEc"));
    lh($u(this, "h1U9Be-V67aGc-V1ur5d"), this.Ha.ka());
    av(this).listen(this, "action", this.l);
  };
  Ow.prototype.l = function (a) {
    a.target = this;
    Si(bd(), "n_ecmv3m") ? this.j.log(9061) : y("impression", 9061);
  };
  Ow.prototype.Ad = function (a) {
    this.i.setEnabled(a);
  };
  var Qw = function (a, b, c) {
    Ov.call(this, a, b, c, Pw.L());
  };
  E(Qw, Ov);
  var Pw = function () {};
  E(Pw, Nv);
  Pw.prototype.h = function () {
    return "Q0hgme-fmcmS-LgbsSe";
  };
  Pw.prototype.i = function () {
    return bu;
  };
  Pw.L = function () {
    return yh(Pw);
  };
  var Sw = function (a, b, c, d, e, f, g) {
    Y.call(this, a);
    this.i = new Rw(c);
    this.N = null;
    this.B = b;
    this.l = new Qw();
    hv(this, this.l);
    this.v = null;
    this.F = e || "";
    this.D = f || null;
    this.j = d || null;
    this.G = g || null;
    this.A = null;
  };
  E(Sw, Y);
  Sw.prototype.Ga = function () {
    this.g = ud(eu, { xf: this.i.g });
  };
  Sw.prototype.T = function () {
    Y.prototype.T.call(this);
    this.N = $u(this, "Q0hgme-n5T17d-woLtV");
    X(this.N, this.i.i);
    lh($u(this, "Q0hgme-vDaB1c-Ne3sFf"), this.B);
    av(this).listen(this.g, "click", function (a) {
      a.stopPropagation();
    });
    ev(this.l, $u(this, "Q0hgme-vDaB1c-JIbuQc"));
    av(this).listen(this.l, "action", this.S);
    this.l.setContent(this.F);
    Av(this.l, !!this.F);
    this.i.g &&
      ((this.v = new Qv(Tw)), hv(this, this.v), ev(this.v, $u(this, "Q0hgme-vDaB1c-IYtByb")), av(this).listen(this.v, "action", this.R));
    this.i.timeout && (this.A = eq(this.hide, this.i.timeout, this));
    eq(
      function () {
        !this.pa && pu(this.C(), "ZiwkRe");
      },
      16,
      this
    );
  };
  Sw.prototype.getMessage = function () {
    return this.B;
  };
  Sw.prototype.hide = function (a) {
    this.pa || (a && (this.j && this.j(), (this.j = null)), Uw(this), ru(this.C(), "ZiwkRe"), eq(this.ga, 218, this));
  };
  var Uw = function (a) {
    null != a.A && n.clearTimeout(a.A);
  };
  Sw.prototype.S = function () {
    this.D && this.D();
    this.j = null;
    this.i.h || this.hide();
  };
  Sw.prototype.R = function () {
    this.hide();
    this.G && this.G();
  };
  Sw.prototype.K = function () {
    Y.prototype.K.call(this);
    Uw(this);
    this.j && this.j();
  };
  var Tw = chrome.i18n.getMessage("8342620486324515462"),
    Rw = function (a) {
      this.g = !a || !(a & 2);
      this.i = !!a && !!(a & 16);
      this.h = !!a && !!(a & 1);
      this.timeout = a && a & 4 ? 0 : !this.g || (a && a) ? 5e3 : 1e4;
    };
  var Vw = function () {
    M.call(this);
    this.i = qd();
    this.j = this.i.g.body;
    this.g = null;
    this.h = [];
  };
  E(Vw, M);
  Vw.prototype.config = function (a) {
    this.j = a || this.j;
  };
  Vw.prototype.clearAll = function (a) {
    var b = this.h;
    if (a) oc(b);
    else
      for (a = 0; a < b.length; a++) {
        var c = b[a];
        c.i.timeout && (Uw(c), eq(c.hide, 100 * a, c));
      }
  };
  var Ww = function (a) {
    return a.h[a.h.length - 1] || null;
  };
  Vw.prototype.show = function (a, b, c) {
    a = new Sw(this.i, a, b, c);
    Xw(this, a);
    return a;
  };
  var Yw = function (a, b, c, d, e) {
      b = new Sw(a.i, b, e, void 0, c, d, void 0);
      Xw(a, b);
    },
    Xw = function (a, b) {
      a.g || ((a.g = gh("DIV", "Q0hgme-vDaB1c-haAclf")), a.j.appendChild(a.g));
      X(a.g, !0);
      if (b.i.timeout)
        for (var c = a.h.length - 1; 0 <= c; c--) {
          var d = a.h[c];
          d.i.timeout && (d.hide(), a.h.splice(c, 1));
        }
      a.g.firstChild && b.i.timeout ? dv(b, a.g.firstChild) : b.xc(a.g);
      a.h.unshift(b);
      yh(zh).speak(b.getMessage());
      wh(
        b,
        function () {
          ya(this.h, b);
          0 == this.h.length && X(this.g, !1);
        },
        a
      );
      N(a, b);
    };
  Vw.prototype.K = function () {
    M.prototype.K.call(this);
    delete this.g;
  };
  chrome.i18n.getMessage("2452145367257933677");
  var Zw = chrome.i18n.getMessage("3542768157572111342"),
    $w = function () {
      Y.call(this);
      this.i = [];
      this.j = null;
      this.l = new Vw();
    };
  E($w, Y);
  $w.prototype.Ga = function () {
    this.g = ud(gu);
  };
  $w.prototype.T = function () {
    var a = this;
    Y.prototype.T.call(this);
    y("impression", 9213);
    this.j = this.C().querySelector(".rymPhb-PntVL");
    this.l.config(this.g);
    Yw(
      this.l,
      Zw,
      Vo,
      function () {
        return a.dispatchEvent("J");
      },
      8
    );
  };
  $w.prototype.ac = function () {
    return this.j;
  };
  $w.prototype.update = function () {
    var a = V().g;
    a = a ? Rc(a) : [];
    for (
      Bd(
        a,
        function (b, c) {
          (c = this.i[c]) ? c.update(b) : ((c = new ax(b)), hv(this, c, !0), this.i.push(c));
        },
        this
      );
      this.i.length > a.length;

    )
      iv(this, this.i.pop());
    this.dispatchEvent("K");
  };
  var ax = function (a) {
    Y.call(this);
    this.j = a;
    this.i = null;
  };
  E(ax, Y);
  ax.prototype.Ga = function () {
    this.g = ud(hu);
  };
  ax.prototype.T = function () {
    Y.prototype.T.call(this);
    this.i = this.C().querySelector(".rymPhb-ibnC6b-fmcmS");
    this.update(this.j);
  };
  ax.prototype.update = function (a) {
    lh(this.i, Sc(a));
    tu(this.C(), "barxie", a.xa);
  };
  var bx = function () {
    this.g = chrome.storage.local;
    this.h = RegExp("^gksn-");
  };
  bx.prototype.get = function (a, b) {
    "string" == typeof a && a
      ? (a = "gksn-" + a)
      : a instanceof Array &&
        Bd(
          a,
          function (c, d, e) {
            e[d] = "gksn-" + c;
          },
          this
        );
    this.g.get(
      a || null,
      F(
        function (c, d) {
          chrome.runtime.lastError && (d = "string" == typeof a && a ? "" : {});
          if ("string" == typeof a && a) c(d[a]);
          else {
            var e = {},
              f;
            for (f in d) e[f.replace(this.h, "")] = d[f];
            c(e);
          }
        },
        this,
        b
      )
    );
  };
  bx.prototype.getAll = function (a) {
    this.get("", a);
  };
  bx.prototype.set = function (a, b, c) {
    var d = {};
    d[a] = b;
    cx(this, d, c);
  };
  var cx = function (a, b, c) {
    var d = {},
      e;
    for (e in b) d["gksn-" + e] = b[e];
    a.g.set(
      d,
      F(
        function (f) {
          f && f();
        },
        a,
        c
      )
    );
  };
  bx.prototype.remove = function (a, b) {
    "string" == typeof a && a
      ? (a = "gksn-" + a)
      : a instanceof Array &&
        Bd(
          a,
          function (c, d, e) {
            e[d] = "gksn-" + c;
          },
          this
        );
    this.g.remove(
      a,
      F(
        function (c) {
          c && c();
        },
        this,
        b
      )
    );
  };
  bx.prototype.contains = function (a, b) {
    dx(
      this,
      a,
      ee(function (c, d) {
        c(!!d);
      }, b)
    );
  };
  var dx = function (a, b, c) {
    (b = Uc(b)) || c(null);
    var d = [];
    b.url && d.push(b.url);
    b.qb && d.push(b.qb);
    a.get(
      d,
      F(
        function (e, f, g) {
          e(g[f.url] || g[f.qb] || null);
        },
        a,
        c,
        b
      )
    );
  };
  var ex = function () {
    qd();
  };
  ex.prototype.xc = function (a, b) {
    a = a(b || {}, {});
    return String(a);
  };
  var fx = function (a) {
    a(pd, {});
  };
  new ex();
  chrome.i18n.getMessage("1963323419655107448");
  chrome.i18n.getMessage("8412733496413412439");
  chrome.i18n.getMessage("824468664656304495");
  chrome.i18n.getMessage("1512114410402431831");
  chrome.i18n.getMessage("5259541708332520733");
  chrome.i18n.getMessage("1338300799355131761");
  chrome.i18n.getMessage("3091440425606975088");
  chrome.i18n.getMessage("3571704286086017611");
  chrome.i18n.getMessage("2680303811435018716");
  chrome.i18n.getMessage("2971623719720688041");
  chrome.i18n.getMessage("3907816292084809686");
  chrome.i18n.getMessage("4494250072784000771");
  chrome.i18n.getMessage("8506292502710287776");
  chrome.i18n.getMessage("3258100527833044153");
  chrome.i18n.getMessage("1429848477922945853");
  var gx = chrome.i18n.getMessage("5592884381280360832");
  chrome.i18n.getMessage("6069780031254134657");
  chrome.i18n.getMessage("7624042048123264803");
  chrome.i18n.getMessage("900086393693234779");
  chrome.i18n.getMessage("6822520214440117457");
  chrome.i18n.getMessage("5275304974990264425");
  chrome.i18n.getMessage("4514241210910366093");
  chrome.i18n.getMessage("1694896269813520248");
  chrome.i18n.getMessage("7254411458460045711");
  chrome.i18n.getMessage("5510222038351634163");
  fx(function () {
    return chrome.i18n.getMessage("8104421162933956065");
  });
  fx(function () {
    return chrome.i18n.getMessage("1055686627716339120");
  });
  fx(function () {
    return chrome.i18n.getMessage("2983318659047499045");
  });
  fx(function () {
    return chrome.i18n.getMessage("3418677553313974490");
  });
  fx(function () {
    return chrome.i18n.getMessage("546766753072101168");
  });
  fx(function () {
    return chrome.i18n.getMessage("7585826646011739428");
  });
  fx(function () {
    return chrome.i18n.getMessage("7528441140724145783");
  });
  fx(function () {
    return chrome.i18n.getMessage("2323249770683736002");
  });
  fx(function () {
    return chrome.i18n.getMessage("4930506384627295710");
  });
  fx(function () {
    return chrome.i18n.getMessage("7102649289752747375");
  });
  fx(function () {
    return chrome.i18n.getMessage("7911416166208830577");
  });
  fx(function () {
    return chrome.i18n.getMessage("8193677552005249631");
  });
  fx(function () {
    return chrome.i18n.getMessage("7005745151564974365");
  });
  fx(function () {
    return chrome.i18n.getMessage("7384785369409503695");
  });
  fx(function () {
    return chrome.i18n.getMessage("4974261966265341751");
  });
  fx(function () {
    return chrome.i18n.getMessage("7420364754178516134");
  });
  fx(function () {
    return chrome.i18n.getMessage("5570885401952336951");
  });
  fx(function () {
    return chrome.i18n.getMessage("9146862513672039744");
  });
  chrome.i18n.getMessage("3714239567487848851");
  chrome.i18n.getMessage("2930974997943171554");
  chrome.i18n.getMessage("7735981667219692675");
  chrome.i18n.getMessage("3769279410443855918");
  var hx = function (a, b, c) {
      this.j = a;
      this.i = b;
      this.h = c;
    },
    lx = function (a) {
      ix(a, a.h).then(function (b) {
        !b && 36e5 < Date.now() - jx && kx(a);
      });
    },
    kx = function (a) {
      jx = Date.now();
      Yw(
        a.j,
        a.i,
        gx,
        function () {
          a.g.set(a.h, !0);
        },
        6
      );
    },
    jx = 0;
  var mx = new Ym(),
    nx = chrome.i18n.getMessage("7253527966847172544", [mx.format(new Date(2022, 11, 5))]),
    ox = function (a) {
      hx.call(this, a, nx, "mv2_deprecation_message");
      this.g = yh(bx);
    };
  E(ox, hx);
  var ix = function (a, b) {
    return new Promise(function (c) {
      a.g.get(b, function (d) {
        c(d);
      });
    });
  };
  chrome.i18n.getMessage("1986228872461282439");
  chrome.i18n.getMessage("1817584332952897497");
  chrome.i18n.getMessage("7780849812478835865");
  chrome.i18n.getMessage("4424410218593071962");
  chrome.i18n.getMessage("156056758267077118");
  chrome.i18n.getMessage("2125543233832238809");
  chrome.i18n.getMessage("6127627095904149725");
  chrome.i18n.getMessage("8388956891956075130");
  chrome.i18n.getMessage("2583571751348768508");
  chrome.i18n.getMessage("865638597375909527");
  chrome.i18n.getMessage("2054706891655675688");
  chrome.i18n.getMessage("4914875522213193145");
  var px = {},
    Zb =
      ((px.DEFAULT = "#FFFFFF"),
      (px.RED = "#FAAFA8"),
      (px.ORANGE = "#F39F76"),
      (px.YELLOW = "#FFF8B8"),
      (px.GREEN = "#E2F6D3"),
      (px.TEAL = "#B4DDD3"),
      (px.BLUE = "#D4E4ED"),
      (px.CERULEAN = "#AECCDC"),
      (px.PURPLE = "#D3BFDB"),
      (px.PINK = "#F6E2DD"),
      (px.BROWN = "#E9E3D4"),
      (px.GRAY = "#EFEFF1"),
      px),
    qx = function () {
      this.g = $b(function (a) {
        if (!vw.test(a)) throw Error("Ca`" + a);
        4 == a.length && (a = a.replace(uw, "#$1$1$2$2$3$3"));
        a = a.toLowerCase();
        a = parseInt(a.slice(1), 16);
        return ("rgb(" + [a >> 16, (a >> 8) & 255, a & 255].join() + ")").replace("rgb", "rgba").replace(")", ", 0.8)");
      });
      this.g.DEFAULT = "rgba(242, 242, 242, 0.8)";
    };
  qx.prototype.aa = function (a) {
    return Zb[a] || Zb.DEFAULT;
  };
  (function () {
    for (var a = ["ms", "moz", "webkit", "o"], b, c = 0; (b = a[c] && !n.requestAnimationFrame); ++c)
      (n.requestAnimationFrame = n[b + "RequestAnimationFrame"]),
        (n.cancelAnimationFrame = n[b + "CancelAnimationFrame"] || n[b + "CancelRequestAnimationFrame"]);
    if (!n.requestAnimationFrame) {
      var d = 0;
      n.requestAnimationFrame = function (e) {
        var f = new Date().getTime(),
          g = Math.max(0, 16 - (f - d));
        d = f + g;
        return n.setTimeout(function () {
          e(f + g);
        }, g);
      };
      n.cancelAnimationFrame ||
        (n.cancelAnimationFrame = function (e) {
          clearTimeout(e);
        });
    }
  })();
  var rx = [[], []],
    sx = 0,
    tx = !1,
    ux = 0,
    wx = function (a, b) {
      var c = ux++,
        d = { zf: { id: c, Pa: a.measure, context: b }, Bf: { id: c, Pa: a.ke, context: b }, state: {}, args: void 0, rc: !1 };
      return function () {
        0 < arguments.length
          ? (d.args || (d.args = []), (d.args.length = 0), d.args.push.apply(d.args, arguments), d.args.push(d.state))
          : d.args && 0 != d.args.length
          ? ((d.args[0] = d.state), (d.args.length = 1))
          : (d.args = [d.state]);
        d.rc || ((d.rc = !0), rx[sx].push(d));
        tx || ((tx = !0), window.requestAnimationFrame(vx));
      };
    },
    vx = function () {
      tx = !1;
      var a = rx[sx],
        b = a.length;
      sx = (sx + 1) % 2;
      for (var c, d = 0; d < b; ++d) {
        c = a[d];
        var e = c.zf;
        c.rc = !1;
        e.Pa && e.Pa.apply(e.context, c.args);
      }
      for (d = 0; d < b; ++d) (c = a[d]), (e = c.Bf), (c.rc = !1), e.Pa && e.Pa.apply(e.context, c.args), (c.state = {});
      a.length = 0;
    };
  var xx = H ? yg(tg(new sg(qg, 'javascript:""'))) : yg(tg(new sg(qg, "about:blank")));
  H ? yg(tg(new sg(qg, 'javascript:""'))) : yg(tg(new sg(qg, "javascript:undefined")));
  var yx = function (a) {
    R.call(this);
    this.g = a;
    a = H ? "focusout" : "blur";
    this.h = vj(this.g, H ? "focusin" : "focus", this, !H);
    this.i = vj(this.g, a, this, !H);
  };
  G(yx, R);
  yx.prototype.handleEvent = function (a) {
    var b = new ij(a.h);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b);
  };
  yx.prototype.K = function () {
    yx.O.K.call(this);
    Dj(this.h);
    Dj(this.i);
    delete this.g;
  };
  var zx = function (a, b) {
    this.i = a;
    this.h = b;
  };
  var Ax = function (a, b) {
    Y.call(this, b);
    this.Le = !!a;
    this.Z = null;
    this.Ee = wx({ ke: this.yc }, this);
    wx({ ke: this.He }, this);
  };
  G(Ax, Y);
  k = Ax.prototype;
  k.kd = null;
  k.cc = !1;
  k.za = null;
  k.ma = null;
  k.Fa = null;
  k.fd = !1;
  k.Ga = function () {
    Ax.O.Ga.call(this);
    var a = this.C();
    qu(a, je("VIpgJd-TUo6Hb").split(" "));
    oh(a, !0);
    X(a, !1);
    Bx(this);
    Cx(this);
  };
  var Bx = function (a) {
      if (a.Le && !a.ma) {
        var b = a.h.sb("IFRAME", { frameborder: 0, style: "border:0;vertical-align:bottom;" });
        b.src = vg(xx);
        a.ma = b;
        a.ma.className = "VIpgJd-TUo6Hb-xJ5Hnf";
        X(a.ma, !1);
        b = a.ma.style;
        "opacity" in b
          ? (b.opacity = 0)
          : "MozOpacity" in b
          ? (b.MozOpacity = 0)
          : "filter" in b && (b.filter = "alpha(opacity=" + 100 * Number(0) + ")");
      }
      a.za || ((a.za = a.h.sb("DIV", "VIpgJd-TUo6Hb-xJ5Hnf")), X(a.za, !1));
    },
    Cx = function (a) {
      a.Fa || ((a.Fa = rd(a.h.g, "SPAN")), X(a.Fa, !1), oh(a.Fa, !0), (a.Fa.style.position = "absolute"));
    };
  k = Ax.prototype;
  k.xe = function () {
    this.fd = !1;
  };
  k.Ic = function (a) {
    return !!a && "DIV" == a.tagName;
  };
  k.wb = function (a) {
    Ax.O.wb.call(this, a);
    a = je("VIpgJd-TUo6Hb").split(" ");
    qu(this.C(), a);
    Bx(this);
    Cx(this);
    oh(this.C(), !0);
    X(this.C(), !1);
  };
  k.T = function () {
    if (this.ma) {
      var a = this.ma,
        b = this.C();
      b.parentNode && b.parentNode.insertBefore(a, b);
    }
    a = this.za;
    b = this.C();
    b.parentNode && b.parentNode.insertBefore(a, b);
    Ax.O.T.call(this);
    a = this.Fa;
    b = this.C();
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
    this.kd = new yx(this.h.g);
    av(this).listen(this.kd, "focusin", this.onFocus);
    Dx(this, !1);
  };
  k.ib = function () {
    this.isVisible() && Ex(this, !1);
    nc(this.kd);
    Ax.O.ib.call(this);
    jh(this.ma);
    jh(this.za);
    jh(this.Fa);
  };
  var Ex = function (a, b) {
      if (b != a.cc)
        if ((a.ca && a.ca.stop(), a.wa && a.wa.stop(), a.ba && a.ba.stop(), a.ua && a.ua.stop(), a.da && Dx(a, b), b)) {
          if (a.dispatchEvent("beforeshow")) {
            try {
              a.Z = a.h.g.activeElement;
            } catch (f) {}
            a.He();
            av(a).listen(ch(a.h.g), "resize", a.yc).listen(ch(a.h.g), "orientationchange", a.Ee);
            Fx(a, !0);
            a.focus();
            a.cc = !0;
            a.ca && a.wa ? (uj(a.ca, "end", a.re, !1, a), a.wa.play(), a.ca.play()) : a.re();
          }
        } else if (a.dispatchEvent("beforehide")) {
          av(a).X(ch(a.h.g), "resize", a.yc).X(ch(a.h.g), "orientationchange", a.Ee);
          a.cc = !1;
          a.ba && a.ua ? (uj(a.ba, "end", a.le, !1, a), a.ua.play(), a.ba.play()) : a.le();
          a: {
            try {
              var c = a.h,
                d = c.g.body,
                e = c.g.activeElement || d;
              if (!a.Z || a.Z == d) {
                a.Z = null;
                break a;
              }
              (e == d || c.contains(a.C(), e)) && a.Z.focus();
            } catch (f) {}
            a.Z = null;
          }
        }
    },
    Dx = function (a, b) {
      a.Be || (a.Be = new zx(a.g, a.h));
      a = a.Be;
      if (b) {
        a.g || (a.g = []);
        b = a.h.getChildren(a.h.g.body);
        for (var c = 0; c < b.length; c++) {
          var d = b[c],
            e;
          if ((e = d != a.i)) (e = d.getAttribute("aria-hidden")), (e = !(null == e || void 0 == e ? 0 : String(e)));
          e && (uh(d, "hidden", !0), a.g.push(d));
        }
      } else if (a.g) {
        for (c = 0; c < a.g.length; c++) a.g[c].removeAttribute("aria-hidden");
        a.g = null;
      }
    };
  Ax.prototype.He = function () {
    this.yc();
    this.Nd();
  };
  var Fx = function (a, b) {
    a.ma && X(a.ma, b);
    a.za && X(a.za, b);
    X(a.C(), b);
    X(a.Fa, b);
  };
  k = Ax.prototype;
  k.re = function () {
    this.dispatchEvent("show");
  };
  k.le = function () {
    Fx(this, !1);
    this.dispatchEvent("hide");
  };
  k.isVisible = function () {
    return this.cc;
  };
  k.focus = function () {
    this.fe();
  };
  k.yc = function () {
    this.ma && X(this.ma, !1);
    this.za && X(this.za, !1);
    var a = this.h.g;
    var b = ah(eh(this.h.g) || window || window);
    var c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.ma && (X(this.ma, !0), Du(this.ma, c, a));
    this.za && (X(this.za, !0), Du(this.za, c, a));
  };
  k.Nd = function () {
    if ("fixed" == wu(this.C(), "position"))
      var a = 0,
        b = 0;
    else (b = dh(this.h.g)), (a = b.x), (b = b.y);
    var c = Fu(this.C());
    var d = ah(eh(this.h.g) || window || window);
    a = Math.max(a + d.width / 2 - c.width / 2, 0);
    b = Math.max(b + d.height / 2 - c.height / 2, 0);
    yu(this.C(), a, b);
    yu(this.Fa, a, b);
  };
  k.onFocus = function (a) {
    this.fd ? this.xe() : a.target == this.Fa && eq(this.fe, 0, this);
  };
  k.fe = function () {
    try {
      H && this.h.g.body.focus(), this.C().focus();
    } catch (a) {}
  };
  k.K = function () {
    nc(this.ca);
    this.ca = null;
    nc(this.ba);
    this.ba = null;
    nc(this.wa);
    this.wa = null;
    nc(this.ua);
    this.ua = null;
    Ax.O.K.call(this);
  };
  var Hx = function (a) {
    Ax.call(this);
    this.te = yh(Yr);
    this.gb = this.B = null;
    this.Je = new qx();
    this.hb = null;
    this.A = new Vw();
    var b = chrome.i18n.getMessage("4047470251075013857");
    this.Da = new Qv(b);
    hv(this, this.Da);
    this.Ia = null;
    this.Ub = new Qw();
    hv(this, this.Ub);
    this.yb = new fq(this.pc, 5e3, this);
    N(this, this.yb);
    this.i = this.ya = this.l = this.jb = this.ve = this.ue = null;
    this.ta = new $w();
    hv(this, this.ta);
    this.Tb = null;
    this.zb = new Sv();
    hv(this, this.zb);
    this.Ab = new Qv(Gx);
    hv(this, this.Ab);
    this.F = new Qw();
    hv(this, this.F);
    this.xa = new Qw();
    hv(this, this.xa);
    this.R = new Qw();
    hv(this, this.R);
    this.De = new Qv(Vo, "J");
    hv(this, this.De);
    b = chrome.i18n.getMessage("9218540601355708194");
    this.Ge = new Qv(b, "L");
    hv(this, this.Ge);
    this.j = Si(bd(), "n_ecmv3m");
    Si(bd(), "n_scp") && !this.j ? ((this.S = new Qv(Uo)), hv(this, this.S)) : this.j && vj(window, "beforeunload", this.nd);
    this.N = null;
    this.fb = !0;
    this.ye = "";
    b = new fq(this.Fe, 20, this);
    N(this, b);
    this.Ca = new Gr(b.Gc, 30, b);
    N(this, this.Ca);
    this.Cb = 0;
    this.v = 1;
    ss(V(), this.update, this);
    this.j && a && ((this.uc = a), (this.Va = new zt(this.uc)));
    this.D = new Kw(this.Va);
    hv(this, this.D);
    this.Ba = this.Bb = !1;
  };
  E(Hx, Ax);
  var Ix = function (a) {
    It(a.Va, function (b, c) {
      c && ((b = {}), V().h.update(((b[En.cd] = c), b)), (a.Bb = !0));
    });
  };
  Hx.prototype.wb = function (a) {
    Ax.prototype.wb.call(this, a);
    var b = (b = { Hf: !!this.S, yf: this.j });
    var c = b.Hf,
      d = b.yf;
    b = Ot;
    var e = '<div class="' + W("k77Iif-V68bde") + '">';
    var f = Ot(
      '<div class="' +
        W("e1YmVc-haAclf") +
        '"><div class="' +
        W("e1YmVc-HiaYvf") +
        '"></div><div class="' +
        W("e1YmVc-fmcmS") +
        '"><div class="' +
        W("e1YmVc-r4nke") +
        '"></div><div class="' +
        W("e1YmVc-dZ8yzd") +
        '"></div></div>' +
        Zt("Rsbfue-e1YmVc") +
        "</div>"
    );
    e =
      e +
      f +
      '<div class="' +
      W("HiaYvf-FCjw3e") +
      '"></div>' +
      Ot(
        '<div class="' +
          W("mwcmwf-haAclf") +
          " " +
          W("qAWA2") +
          '"><textarea class="' +
          W("h1U9Be-r4nke") +
          '" rows="1"></textarea><textarea class="' +
          W("h1U9Be-qJTHM") +
          '" rows="1"></textarea><div class="' +
          W("SjW3R-ZMv3u") +
          '"><input type="text" class="' +
          W("RmniWd-V67aGc-yrriRe") +
          '"><div class="' +
          W("V67aGc-Bz112c") +
          '"></div></div></div>'
      );
    f = '<div class="' + W("yePe5c") + '">';
    d
      ? ((f += Zt(" Q0hgme-l4eHX ", St('<img src="icon_48.png" width="25" height="25" alt="Google Keep logo"/>'))),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["2159130950882492111", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += au(St(c), " IbE0S-h1U9Be ")),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["3623199266894863617", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += au(St(c), " t0O6ic-h1U9Be fmcmS-LgbsSe-v3pZbf ")),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["7819314041543176992", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += au(St(c), " TvD9Pc-h1U9Be fmcmS-LgbsSe-v3pZbf ")))
      : ((f += Zt("zM6fo") + (c ? Zt("N7Eqid") : "") + '<div class="' + W("Rsbfue-e1YmVc-sfGayb") + '"><label>'),
        (c = chrome.i18n.getMessage.apply(
          null,
          ["6857703948759289202", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
        )),
        (f = f + c + "&nbsp;</label>"),
        (c = chrome.i18n.getMessage("5775346636203685655")),
        (f += au(c, "hSRGPd")),
        (f +=
          '</div><div class="' +
          W("PrY1nf-Bz112c") +
          '"></div><label class="' +
          W("Yygnk-EglORb") +
          '"></label>' +
          Zt("FNFY6c-bEDTcc-Q0hgme") +
          du(void 0, "purZT")));
    f = Ot(f + "</div>");
    (b = b(e + f + '</div><div class="' + W("ugfBjd-V68bde") + '"></div>')) && b.h && a ? b.h(a) : ((b = sd(b)), td(a, b));
    this.B = a.querySelector(".k77Iif-V68bde");
    Si(bd(), "n_emv2dm") && (this.gb = a.querySelector(".ugfBjd-V68bde")) && ((b = new Vw()), b.config(this.gb), lx(new ox(b)));
    this.hb = a.querySelector(".e1YmVc-haAclf");
    ev(this.Da, a.querySelector(".Rsbfue-e1YmVc"));
    this.ue = a.querySelector(".e1YmVc-HiaYvf");
    this.ve = a.querySelector(".e1YmVc-r4nke");
    this.jb = a.querySelector(".e1YmVc-dZ8yzd");
    this.ya = a.querySelector(".mwcmwf-haAclf");
    b = chrome.i18n.getMessage("2780054062282129350");
    this.l = a.querySelector(".h1U9Be-r4nke");
    this.l.setAttribute("maxlength", "999");
    uh(this.l, "label", b);
    this.l.placeholder = b;
    ev(this.zb, a.querySelector(".HiaYvf-FCjw3e"));
    b = chrome.i18n.getMessage("5061847320181369179");
    this.i = a.querySelector(".h1U9Be-qJTHM");
    this.i.setAttribute("maxlength", "16999");
    uh(this.i, "label", b);
    this.i.placeholder = b;
    ev(this.D, a.querySelector(".SjW3R-ZMv3u"));
    this.j
      ? (ev(this.Ab, a.querySelector(".Q0hgme-l4eHX")),
        ev(this.F, a.querySelector(".t0O6ic-h1U9Be")),
        ev(this.xa, a.querySelector(".IbE0S-h1U9Be")),
        ev(this.R, a.querySelector(".TvD9Pc-h1U9Be")),
        Av(this.R, !1),
        this.ya && this.A.config(this.ya))
      : ((this.Ia = a.querySelector(".Rsbfue-e1YmVc-sfGayb")),
        ev(this.Ub, this.Ia.querySelector(".Q0hgme-fmcmS-LgbsSe")),
        ev(this.De, a.querySelector(".FNFY6c-bEDTcc-Q0hgme")),
        (this.Tb = a.querySelector(".Yygnk-EglORb")),
        ev(this.Ge, a.querySelector(".zM6fo")),
        this.S && ev(this.S, a.querySelector(".N7Eqid")));
  };
  Hx.prototype.T = function () {
    var a = this;
    Ax.prototype.T.call(this);
    pn(
      av(this).listen(this, "J", function () {
        return Jx(a);
      }),
      this,
      "K",
      this.Ca.qa,
      !1,
      this.Ca
    )
      .listen(this.Da, "action", this.tf)
      .listen(this.Ub, "action", this.wf)
      .listen(this.l, "input", this.vf)
      .listen(this.i, "input", this.rf)
      .listen(this.ya, "click", this.lf)
      .listen(this.D, "G", F(this.G, this, !0))
      .listen(this.C(), "keydown", this.Xe)
      .listen(this.Ab, "action", this.sf)
      .listen(this.F, "action", this.kb)
      .listen(this.xa, "action", this.ie)
      .listen(this.R, "action", this.ie);
    this.S && av(this).listen(this.S, "action", this.nf);
    Ex(this, !0);
    Kx(this, function () {
      a.j && y("configureContextMenu", a.v);
    });
  };
  Hx.prototype.update = function () {
    if (this.da) {
      this.j || Lx(this);
      var a = V(),
        b = a.i;
      a.j && b
        ? (lh(this.ve, b.getTitle()),
          lh(this.jb, b.u || ""),
          Lu.L().La(this.jb, b.Qa()),
          (b = b.l),
          (this.ue.style.backgroundImage = b ? "url('" + b + "')" : ""),
          X(this.hb, !0))
        : X(this.hb, !1);
      if ((b = a.g)) {
        var c = qo(b);
        this.B.style.backgroundColor = this.Je.aa(c);
        c != this.ye && "DEFAULT" != c && y("impression", 9214);
        this.ye = c;
        this.l.value != b.getTitle() && ((this.l.value = b.getTitle()), Mx(this, this.l));
        this.l.value && this.G(!0);
        Av(this.Da, Pc(b));
        X(this.i, Pc(b));
        c = this.ta;
        var d = Sn(b);
        c.C() && X(c.C(), d);
        Sn(b)
          ? (this.ta.da || (dv(this.ta, this.i), this.l.focus()), this.ta.update(), this.G(!0))
          : (this.i.value != a.l &&
              ((this.i.value = a.l), Mx(this, this.i), this.i.focus(), (this.i.selectionStart = this.i.selectionEnd = this.i.value.length)),
            this.i.value && this.G(!0));
      }
    }
  };
  var Kx = function (a, b) {
      b = void 0 === b ? mg : b;
      var c = a.C();
      c &&
        (Mx(a, a.l),
        Mx(a, a.i),
        a.i.value && a.G(!0),
        c.classList.add("ZiwkRe"),
        eq(function () {
          a.Fe();
          a.i.focus();
          b();
        }, 218));
    },
    Px = function (a, b) {
      var c = F(a.D.N, a.D);
      b = b ? ng(c, b) : c;
      if ((c = a.C()) && c.classList.contains("ZiwkRe")) {
        c.classList.remove("ZiwkRe");
        eq(b, 218);
        if (!a.j) {
          b = V().g;
          if (!b || !Pc(b) || !a.i.value) return;
          b = a.i.value.length;
          c = 2;
          b < Nx[1] ? (c = 0) : b < Nx[2] && (c = 1);
          y("impression", Ox[c]);
        }
        a.Cb = 0;
      } else b();
    };
  Hx.prototype.G = function (a) {
    var b = this,
      c = function () {
        tu(b.ya, "qAWA2", !a);
        a && (Mx(b, b.l), Mx(b, b.i));
        b.Ca.qa();
      };
    this.j
      ? Qx(this, "ping", void 0, function () {
          return c();
        })
      : c();
  };
  var Sx = function (a, b) {
    b
      ? (a.N ||
          ((a.N = ud(ku)),
          (b = new Qw()),
          ev(b, a.N.querySelector(".mKZypf-bEDTcc-LgbsSe")),
          av(a).listen(b, "action", a.uf),
          a.B && a.B.appendChild(a.N),
          Rx(a, 9212)),
        X(a.N, !0))
      : a.N && X(a.N, !1);
  };
  Hx.prototype.Nd = function () {};
  Hx.prototype.Fe = function () {
    var a = this.C().getBoundingClientRect(),
      b = Math,
      c = b.max,
      d = a.bottom;
    a = parseInt(window.getComputedStyle(this.C()).marginTop, 10) + a.height;
    var e = (e = this.D.v.C()) ? e.getBoundingClientRect().bottom : 0;
    b = c.call(b, d, a, e);
    b != this.Cb && (Qx(this, "appHeightChange", b + 10 + "px"), (this.Cb = b));
  };
  var Mx = function (a, b) {
      b && ((b.style.height = "auto"), (b.style.height = b.scrollHeight + "px"), a.Ca.qa());
    },
    Lx = function (a) {
      if (a.da) {
        if (a.fb) {
          var b = V();
          b.B && vs(b) ? (pu(a.B, "vOkj6e"), ru(a.B, "PrY1nf"), (b = Tx)) : (ru(a.B, "vOkj6e"), ru(a.B, "PrY1nf"), (b = Ux));
        } else ru(a.B, "vOkj6e"), pu(a.B, "PrY1nf"), (b = Vx);
        a.Tb && lh(a.Tb, b);
      }
    };
  Hx.prototype.kb = function () {
    var a = this,
      b = V().g,
      c = uo(b),
      d = new Ts();
    Us(d);
    d.setTitle(b.getTitle());
    Rs(d.g, Qc(b));
    b = Wx(b);
    this.v = 2;
    Xx(this, !1);
    Yx(this);
    Zx(this);
    Ft(this.Va, d, b, c, function (e, f) {
      eq(function () {
        a.v = $x(e);
        switch (a.v) {
          case 3:
          case 5:
            Cj(window, "beforeunload", a.nd);
            break;
          case 6:
            Xx(a, !0);
        }
        Yx(a);
        Zx(a, f);
        Rx(a, 9586, ay(a));
      }, 218);
    });
  };
  var Wx = function (a) {
      return Bo(a).map(function (b) {
        b = Co(b).l;
        return Lc.test(b) ? ((b = b.match(Lc)), new Vs(void 0, b ? b[2] : "")) : new Vs(b);
      });
    },
    $x = function (a) {
      if (hq(a)) return 3;
      if (!a) {
        try {
          y("ping");
        } catch (b) {
          return 5;
        }
        return 4;
      }
      return 6;
    },
    Yx = function (a) {
      switch (a.v) {
        case 2:
          a.F.setEnabled(!1);
          break;
        case 3:
        case 5:
          Av(a.F, !1);
          Av(a.xa, !1);
          Av(a.R, !0);
          break;
        case 6:
          a.F.setEnabled(!0);
      }
    },
    Zx = function (a, b) {
      var c = Ww(a.A);
      c
        ? (c.hide(),
          eq(function () {
            by(a, b);
          }, 218))
        : by(a, b);
    },
    by = function (a, b) {
      switch (a.v) {
        case 2:
          a.A.show(cy, 22);
          break;
        case 3:
          Yw(
            a.A,
            dy,
            ey,
            function () {
              b && Jx(a, b);
            },
            7
          );
          break;
        case 5:
          Yw(
            a.A,
            fy,
            gy,
            function () {
              var c = V().g;
              c = c.getTitle() + "\n" + Qc(c);
              navigator.clipboard.writeText(c);
            },
            6
          );
          break;
        case 4:
          a.A.show(hy, 6);
          break;
        case 6:
          Yw(a.A, iy, jy, function () {
            Ww(a.A).hide();
            eq(function () {
              return a.kb();
            }, 218);
          });
      }
    },
    Xx = function (a, b) {
      if ((a.fb && !a.Ba) || !b)
        b
          ? (a.l.removeAttribute("readonly"), a.i.removeAttribute("readonly"))
          : (a.l.setAttribute("readonly", !0), a.i.setAttribute("readonly", !0)),
          Av(a.Da, b),
          Nw(a.D, b),
          Wv(a.zb, b),
          Qx(a, "configureContextMenu", a.v);
    },
    my = function (a) {
      a.Ba ||
        ((a.Ba = !0),
        2 !== a.v &&
          3 !== a.v &&
          (Xx(a, !1),
          Av(a.F, !1),
          Av(a.xa, !1),
          Av(a.R, !0),
          Yw(
            a.A,
            ky,
            ly,
            function () {
              Ww(a.A).hide();
              eq(function () {
                return a.kb();
              }, 218);
            },
            6
          )));
    };
  k = Hx.prototype;
  k.ie = function () {
    var a = this;
    Cj(window, "beforeunload", this.nd);
    Px(this, function () {
      Qx(a, "configureContextMenu", void 0, function () {
        Qx(a, "removeIframe");
      });
    });
    Rx(this, 9585, ay(this));
    Zr(this.te);
  };
  k.pc = function () {
    ru(this.Ia, "ZiwkRe");
    this.yb.stop();
  };
  k.tf = function () {
    us(!1);
    Rx(this, 9154);
    this.j || pu(this.Ia, "ZiwkRe");
    Qx(this, "speakMessage", ny);
    this.l.focus();
    this.j || this.yb.start();
  };
  k.wf = function () {
    us(!0);
    y("impression", 9174);
    this.l.focus();
    this.pc();
  };
  k.vf = function () {
    this.j || this.pc();
    var a = V().g;
    a && (!a.getTitle() && this.l.value && Rx(this, 9200), a.setTitle(this.l.value));
    Mx(this, this.l);
  };
  k.rf = function () {
    this.j || this.pc();
    this.G(!0);
    var a = V();
    a.l = this.i.value;
    gs(a);
    Mx(this, this.i);
  };
  var Jx = function (a, b) {
    var c = V().g;
    if ((c = b || c.g)) {
      b = window;
      c = { note: c };
      var d = wg.exec(vg(To)),
        e = d[3] || "";
      c = yg(d[1] + zg("?", d[2] || "", c) + zg("#", e));
      Fd(b, Dc(c.toString()));
      Rx(a, 9202);
    }
  };
  k = Hx.prototype;
  k.sf = function () {
    Fd(window, Dc(To.toString()));
  };
  k.nf = function () {
    Fd(window, So);
    y("impression", 9193);
  };
  k.lf = function (a) {
    0 == a.button &&
      (this.j && Qx(this, "ping"),
      this.G(!0),
      kh(this.D.C(), a.target) &&
        eq(
          function () {
            var b = this.D;
            b.i && b.i.focus();
          },
          0,
          this
        ));
  };
  k.Xe = function (a) {
    if (27 == a.keyCode || (13 == a.keyCode && (Me ? a.metaKey : a.ctrlKey)))
      this.j ? (a = sh(this.h.g)) && a.blur() : (this.dispatchEvent("H"), a.stopPropagation(), a.g());
    else if (9 == a.keyCode && a.shiftKey && a.target == this.C()) {
      this.fd = !0;
      try {
        this.Fa.focus();
      } catch (b) {}
      eq(this.xe, 0, this);
    } else this.j && Qx(this, "ping");
  };
  k.uf = function () {
    this.j ? Ch(this.uc) : y("authRequest");
  };
  k.nd = function (a) {
    if (V().g.i) return a.g(), (a.h.returnValue = "");
  };
  var Rx = function (a, b, c) {
      if (a.j) {
        var d = function (e) {
          e = ip(e);
          C(e, 58, c);
        };
        a.te.log(b, c && d);
      } else y("impression", b);
    },
    ay = function (a) {
      var b = new bj();
      return Yc(b, 3, oy[a.v]);
    },
    Qx = function (a, b, c, d) {
      if (!a.j) y(b, c, d);
      else if (!a.Ba)
        try {
          y(b, c, d);
        } catch (e) {
          my(a);
        }
    },
    Gx = chrome.i18n.getMessage("9167784195765779453"),
    ey = chrome.i18n.getMessage("7687507512675715498"),
    jy = chrome.i18n.getMessage("1943542607990075955"),
    gy = chrome.i18n.getMessage("2259263507947555096"),
    ky = chrome.i18n.getMessage("1796799676667865488"),
    ly = chrome.i18n.getMessage("223492684871721243"),
    hy = chrome.i18n.getMessage("4035272937326361881"),
    py = chrome.i18n.getMessage("4962916837925056840"),
    dy = chrome.i18n.getMessage("6717438461651235082"),
    iy = chrome.i18n.getMessage("2336058986978607910"),
    fy = chrome.i18n.getMessage("4184329490330819477"),
    cy = chrome.i18n.getMessage("3708201433602754428"),
    ny = chrome.i18n.getMessage("2269286357657606271"),
    Tx = chrome.i18n.getMessage("4409688924773693376"),
    Ux = chrome.i18n.getMessage("9116610943383363940"),
    Vx = chrome.i18n.getMessage("5782779707150593352"),
    Nx = [0, 100, 600],
    Ox = [9206, 9207, 9208],
    qy = {},
    oy = ((qy[0] = 0), (qy[1] = 1), (qy[2] = 1), (qy[3] = 3), (qy[4] = 4), (qy[5] = 2), (qy[6] = 2), qy);
  var as = "s--" + new Date().getTime() + "--" + Math.round(2147483648 * Math.random()),
    sy = function () {
      M.call(this);
      var a = this;
      if ((this.i = Si(bd(), "n_ecmv3m")))
        (this.j = new Ah(function (c) {
          var d = a.g;
          Sx(d, !c);
          Xx(d, c);
          c && !d.Bb && Ix(d);
          y("authAvailability", c);
        })),
          (this.o = yh(Yr)),
          Bh(this.j, !1, function () {
            $r(
              a.o,
              cs(function () {
                return a.j.g;
              })
            );
          });
      this.g = new Hx(this.j);
      N(this, this.g);
      this.i || ((this.A = new xs()), N(this, this.A));
      this.h = V();
      this.s = new fq(this.B, 3e5, this);
      var b = new U(this);
      N(this, b);
      b.listen(this.g, "L", this.v).listen(this.h, "H", this.l).listen(this.g, "H", this.l);
      this.i &&
        b.listen(jp.L(), "change", function (c) {
          return ry(a, c.qc);
        });
    };
  E(sy, M);
  var uy = function () {
      var a = ty;
      ev(a.g, document.querySelector("#keep-it-container"));
      a.i
        ? (y("appLoaded", void 0, function (b) {
            ks(a.h, b);
          }),
          jp.L().qc() || ry(a, !1),
          a.o.log(9175))
        : y("appLoaded");
    },
    ry = function (a, b) {
      var c = a.g;
      c.fb = b;
      if (c.j) {
        if (3 !== c.v && !c.Ba) {
          !c.Bb && b && Ix(c);
          Xx(c, b);
          c.F.setEnabled(b);
          var d = Ww(c.A);
          b ? d && d.hide() : d || c.A.show(py, 6);
        }
      } else Lx(c);
      a.h.R = b;
    };
  sy.prototype.l = function () {
    Px(this.g, F(this.u, this));
    this.s.start();
  };
  sy.prototype.u = function () {
    y("finishHide");
    ts(this.h, !0);
    this.g.G(!1);
  };
  sy.prototype.B = function () {
    y("appSelfClose");
  };
  sy.prototype.v = function () {
    ts(this.h);
    y("impression", 9012);
    this.l();
  };
  var ty = new sy(),
    vy = function () {
      Si(bd(), "n_dlis") ||
        ((O.Fc = I18N_DATETIMESYMBOLS_ERAS),
        (O.Ec = I18N_DATETIMESYMBOLS_ERANAMES),
        (O.Xc = I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS),
        (O.Qc = I18N_DATETIMESYMBOLS_NARROWMONTHS),
        (O.Nc = I18N_DATETIMESYMBOLS_MONTHS),
        (O.Wc = I18N_DATETIMESYMBOLS_STANDALONEMONTHS),
        (O.Tc = I18N_DATETIMESYMBOLS_SHORTMONTHS),
        (O.Zc = I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS),
        (O.dd = I18N_DATETIMESYMBOLS_WEEKDAYS),
        (O.bd = I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS),
        (O.Vc = I18N_DATETIMESYMBOLS_SHORTWEEKDAYS),
        (O.ad = I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS),
        (O.Qd = I18N_DATETIMESYMBOLS_NARROWWEEKDAYS),
        (O.Yc = I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS),
        (O.Uc = I18N_DATETIMESYMBOLS_SHORTQUARTERS),
        (O.Rc = I18N_DATETIMESYMBOLS_QUARTERS),
        (O.Bc = I18N_DATETIMESYMBOLS_AMPMS),
        (O.rb = I18N_DATETIMESYMBOLS_DATEFORMATS),
        (O.dc = I18N_DATETIMESYMBOLS_TIMEFORMATS),
        (O.Dc = I18N_DATETIMESYMBOLS_DATETIMEFORMATS),
        (O.Gb = I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK),
        (O.Ud = I18N_DATETIMESYMBOLS_WEEKENDRANGE),
        (O.Hb = I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY),
        (O.Vd = n.I18N_DATETIMESYMBOLS_ZERODIGIT));
      uy();
    },
    wy = ["initNotesBrowserAction"],
    xy = n;
  wy[0] in xy || "undefined" == typeof xy.execScript || xy.execScript("var " + wy[0]);
  for (var yy; wy.length && (yy = wy.shift()); )
    wy.length || void 0 === vy ? (xy[yy] && xy[yy] !== Object.prototype[yy] ? (xy = xy[yy]) : (xy = xy[yy] = {})) : (xy[yy] = vy);
  chrome.runtime.onMessage.addListener(function (a, b, c) {
    b = ty;
    if (vd(a))
      switch (a.type) {
        case "authAvailability":
          Sx(b.g, !a.value);
          c = b.h;
          a = !!a.value;
          c.B != a && ((c.B = a), c.u.qa());
          break;
        case "connectivity":
          ry(b, !!a.value);
          break;
        case "getPopupState":
          c && c(b.g.v);
          break;
        case "ping":
          c && c(a.type);
          break;
        case "updateAuthToken":
          Bh(b.j);
          break;
        case "startHide":
          b.l();
          break;
        case "show":
          b.h.reset();
          Kx(b.g);
          b.s.stop();
          break;
        case "syncResponse":
          b.i || ((a = a.value), os(V(), a.nodes || void 0, a.userInfo || void 0));
          break;
        case "updateModel":
          ks(b.h, a.value);
          break;
        case "uploadMediaResponse":
          a = a.value;
          c = b.h.g;
          (c = (b = a.blobId) ? c.s[b] || null : null) &&
            Eo(c) &&
            ((b = Eo(c)), a.mediaJson ? (b.update(a.mediaJson), Dm(b, "luc")) : a.mediaError && Dm(b, "luf"), Rn(c));
          break;
        case "urlChange":
          (c = b.h), c.i && Hh(c.i, a.value);
      }
  });
} catch (e) {
  _DumpException(e);
}
// Google Inc.
