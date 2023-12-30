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
    ba = function (a) {
      n.setTimeout(function () {
        throw a;
      }, 0);
    },
    ca = function () {
      var a = n.navigator;
      return a && (a = a.userAgent) ? a : "";
    },
    fa = function (a) {
      return da
        ? ea
          ? ea.brands.some(function (b) {
              return (b = b.brand) && -1 != b.indexOf(a);
            })
          : !1
        : !1;
    },
    q = function (a) {
      return -1 != ca().indexOf(a);
    },
    ha = function () {
      return da ? !!ea && 0 < ea.brands.length : !1;
    },
    ia = function () {
      return ha() ? !1 : q("Opera");
    },
    ja = function () {
      return ha() ? !1 : q("Trident") || q("MSIE");
    },
    ka = function () {
      return q("Firefox") || q("FxiOS");
    },
    la = function () {
      return ha() ? fa("Chromium") : ((q("Chrome") || q("CriOS")) && !(ha() ? 0 : q("Edge"))) || q("Silk");
    },
    ma = function () {
      return da ? !!ea && !!ea.platform : !1;
    },
    na = function () {
      return q("iPhone") && !q("iPod") && !q("iPad");
    },
    oa = function () {
      return na() || q("iPad") || q("iPod");
    },
    pa = function () {
      return ma() ? "macOS" === ea.platform : q("Macintosh");
    },
    ra = function (a, b, c) {
      for (var d = "string" === typeof a ? a.split("") : a, e = a.length - 1; 0 <= e; --e) e in d && b.call(c, d[e], e, a);
    },
    ta = function (a, b) {
      return 0 <= sa(a, b);
    },
    ua = function (a) {
      if (!Array.isArray(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
      a.length = 0;
    },
    wa = function (a, b) {
      b = sa(a, b);
      var c;
      (c = 0 <= b) && va(a, b);
      return c;
    },
    va = function (a, b) {
      return 1 == Array.prototype.splice.call(a, b, 1).length;
    },
    xa = function (a, b, c) {
      var d = 0;
      ra(a, function (e, f) {
        b.call(c, e, f, a) && va(a, f) && d++;
      });
    },
    za = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    },
    Ba = function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (Aa(d)) {
          var e = a.length || 0,
            f = d.length || 0;
          a.length = e + f;
          for (var g = 0; g < f; g++) a[e + g] = d[g];
        } else a.push(d);
      }
    },
    Da = function (a, b, c, d) {
      Array.prototype.splice.apply(a, Ca(arguments, 1));
    },
    Ca = function (a, b, c) {
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    },
    Fa = function (a, b) {
      if (!Aa(a) || !Aa(b) || a.length != b.length) return !1;
      for (var c = a.length, d = Ea, e = 0; e < c; e++) if (!d(a[e], b[e])) return !1;
      return !0;
    },
    Ga = function (a, b) {
      return a > b ? 1 : a < b ? -1 : 0;
    },
    Ea = function (a, b) {
      return a === b;
    },
    Ja = function (a) {
      if (!Ha) return Ia(a);
      for (var b = "", c = 0, d = a.length - 10240; c < d; ) b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
      b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
      return btoa(b);
    },
    Ka = function () {
      return "function" === typeof BigInt;
    },
    Oa = function (a) {
      var b = 0 > a;
      a = Math.abs(a);
      var c = a >>> 0;
      a = Math.floor((a - c) / 4294967296);
      b && ((c = t(La(c, a))), (b = c.next().value), (a = c.next().value), (c = b));
      Ma = c >>> 0;
      Na = a >>> 0;
    },
    Qa = function (a, b) {
      b >>>= 0;
      a >>>= 0;
      if (2097151 >= b) var c = "" + (4294967296 * b + a);
      else
        Ka()
          ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
          : ((c = ((a >>> 24) | (b << 8)) & 16777215),
            (b = (b >> 16) & 65535),
            (a = (a & 16777215) + 6777216 * c + 6710656 * b),
            (c += 8147497 * b),
            (b *= 2),
            1e7 <= a && ((c += Math.floor(a / 1e7)), (a %= 1e7)),
            1e7 <= c && ((b += Math.floor(c / 1e7)), (c %= 1e7)),
            (c = b + Pa(c) + Pa(a)));
      return c;
    },
    Pa = function (a) {
      a = String(a);
      return "0000000".slice(a.length) + a;
    },
    Ra = function () {
      var a = Ma,
        b = Na;
      b & 2147483648
        ? Ka()
          ? (a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
          : ((b = t(La(a, b))), (a = b.next().value), (b = b.next().value), (a = "-" + Qa(a, b)))
        : (a = Qa(a, b));
      return a;
    },
    La = function (a, b) {
      b = ~b;
      a ? (a = ~a + 1) : (b += 1);
      return [a, b];
    },
    Sa = function (a) {
      return Array.prototype.slice.call(a);
    },
    Va = function (a) {
      var b = Ta(a);
      1 !== (b & 1) && (Object.isFrozen(a) && (a = Sa(a)), Ua(a, b | 1));
    },
    Wa = function (a, b, c) {
      return c ? a | b : a & ~b;
    },
    Ya = function () {
      var a = [];
      Xa(a, 1);
      return a;
    },
    Za = function (a, b) {
      Ua(b, (a | 0) & -14591);
    },
    $a = function (a, b) {
      Ua(b, (a | 34) & -14557);
    },
    ab = function (a) {
      a = (a >> 14) & 1023;
      return 0 === a ? 536870912 : a;
    },
    cb = function (a) {
      return !(!a || "object" !== typeof a || a.Fj !== bb);
    },
    db = function (a) {
      return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
    },
    eb = function (a, b, c) {
      if (!Array.isArray(a) || a.length) return !1;
      var d = Ta(a);
      if (d & 1) return !0;
      if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
      Ua(a, d | 1);
      return !0;
    },
    fb = function (a) {
      if (a & 2) throw Error();
    },
    hb = function () {
      var a = Error();
      gb(a, "incident");
      ba(a);
    },
    ib = function (a) {
      a = Error(a);
      gb(a, "warning");
      return a;
    },
    kb = function (a) {
      var b = typeof a;
      return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : jb.test(a);
    },
    lb = function (a) {
      if ("number" !== typeof a) throw ib("int32");
      Number.isFinite(a) || hb();
      return a;
    },
    mb = function (a) {
      if (null == a) return a;
      if ("string" === typeof a) {
        if (!a) return;
        a = +a;
      }
      if ("number" === typeof a) return a;
    },
    qb = function (a) {
      if (null != a) {
        var b = !!b;
        if (!kb(a)) throw ib("int64");
        a = "string" === typeof a ? nb(a, b) : b ? ob(a, b) : pb(a, !1);
      }
      return a;
    },
    pb = function (a, b) {
      a = Math.trunc(a);
      if (b && !Number.isSafeInteger(a)) {
        Oa(a);
        b = Ma;
        var c = Na;
        if ((a = c & 2147483648)) (b = (~b + 1) >>> 0), (c = ~c >>> 0), 0 == b && (c = (c + 1) >>> 0);
        b = 4294967296 * c + (b >>> 0);
        a = a ? -b : b;
      }
      return a;
    },
    ob = function (a, b) {
      a = Math.trunc(a);
      !b || Number.isSafeInteger(a) ? (a = String(a)) : (Oa(a), (a = Ra()));
      return a;
    },
    nb = function (a, b) {
      var c = Math.trunc(Number(a));
      if (Number.isSafeInteger(c)) return String(c);
      c = a.indexOf(".");
      -1 !== c && (a = a.substring(0, c));
      if (b) {
        if (16 > a.length) Oa(Number(a));
        else if (Ka()) (a = BigInt(a)), (Ma = Number(a & BigInt(4294967295)) >>> 0), (Na = Number((a >> BigInt(32)) & BigInt(4294967295)));
        else {
          b = +("-" === a[0]);
          Na = Ma = 0;
          c = a.length;
          for (var d = b, e = ((c - b) % 6) + b; e <= c; d = e, e += 6)
            (d = Number(a.slice(d, e))),
              (Na *= 1e6),
              (Ma = 1e6 * Ma + d),
              4294967296 <= Ma && ((Na += Math.trunc(Ma / 4294967296)), (Na >>>= 0), (Ma >>>= 0));
          b && ((b = t(La(Ma, Na))), (a = b.next().value), (b = b.next().value), (Ma = a), (Na = b));
        }
        a = Ra();
      }
      return a;
    },
    sb = function (a, b, c) {
      if (null != a && "object" === typeof a && a.ud === rb) return a;
      if (Array.isArray(a)) {
        var d = Ta(a),
          e = d;
        0 === e && (e |= c & 32);
        e |= c & 2;
        e !== d && Ua(a, e);
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
        d = Ta(a);
        if (d & 64) return a;
        d |= 64;
        if (c && ((d |= 512), c !== a[0])) throw Error();
        a: {
          c = d;
          if ((d = a.length)) {
            var e = d - 1;
            if (db(a[e])) {
              c |= 256;
              b = e - (+!!(c & 512) - 1);
              if (1024 <= b) throw Error();
              d = (c & -16760833) | ((b & 1023) << 14);
              break a;
            }
          }
          if (b) {
            b = Math.max(b, d - (+!!(c & 512) - 1));
            if (1024 < b) throw Error();
            d = (c & -16760833) | ((b & 1023) << 14);
          } else d = c;
        }
      }
      Ua(a, d);
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
            if (Array.isArray(a)) return xb || !eb(a, void 0, 9999) ? a : void 0;
            if (yb && null != a && a instanceof Uint8Array) return Ja(a);
            if (a instanceof zb) {
              var b = a.ea;
              return null == b ? "" : "string" === typeof b ? b : (a.ea = Ja(b));
            }
          }
      }
      return a;
    },
    Ab = function (a, b, c) {
      a = Sa(a);
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
        if (Array.isArray(a)) a = e && 0 == a.length && Ta(a) & 1 ? void 0 : f && Ta(a) & 2 ? a : Bb(a, b, c, void 0 !== d, e, f);
        else if (db(a)) {
          var g = {},
            h;
          for (h in a) g[h] = Cb(a[h], b, c, d, e, f);
          a = g;
        } else a = b(a, d);
        return a;
      }
    },
    Bb = function (a, b, c, d, e, f) {
      var g = d || c ? Ta(a) : 0;
      d = d ? !!(g & 32) : void 0;
      a = Sa(a);
      for (var h = 0; h < a.length; h++) a[h] = Cb(a[h], b, c, d, e, f);
      c && c(g, a);
      return a;
    },
    Db = function (a) {
      return a.ud === rb ? a.toJSON() : vb(a);
    },
    Eb = function (a, b, c) {
      c = void 0 === c ? $a : c;
      if (null != a) {
        if (yb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
          var d = Ta(a);
          if (d & 2) return a;
          b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
          return b ? (Ua(a, (d | 34) & -12293), a) : Bb(a, Eb, d & 4 ? $a : c, !0, !1, !0);
        }
        a.ud === rb && ((c = a.I), (d = Hb(c)), (a = d & 2 ? a : ub(a.constructor, Ib(c, d, !0))));
        return a;
      }
    },
    Ib = function (a, b, c) {
      var d = c || b & 2 ? $a : Za,
        e = !!(b & 32);
      a = Ab(a, b, function (f) {
        return Eb(f, e, d);
      });
      Xa(a, 32 | (c ? 2 : 0));
      return a;
    },
    Jb = function (a) {
      var b = a.I,
        c = Hb(b);
      return c & 2 ? ub(a.constructor, Ib(b, c, !1)) : a;
    },
    Kb = function (a, b, c, d, e) {
      var f = ab(b);
      if (c >= f || e) {
        e = b;
        if (b & 256) f = a[a.length - 1];
        else {
          if (null == d) return e;
          f = a[f + (+!!(b & 512) - 1)] = {};
          e |= 256;
        }
        f[c] = d;
        e !== b && Ua(a, e);
        return e;
      }
      a[c + (+!!(b & 512) - 1)] = d;
      b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
      return b;
    },
    Mb = function (a, b, c, d) {
      var e = a.I,
        f = Hb(e);
      fb(f);
      if (null == c) return Kb(e, f, b), a;
      var g = Ta(c),
        h = g,
        l = !!(2 & g) || Object.isFrozen(c),
        m = !l && !1;
      if (!(4 & g)) {
        g = 21;
        l && ((c = Sa(c)), (h = 0), (g = Lb(g, f, !0)));
        l = !!(4 & g) && !!(4096 & g);
        for (var p = 0; p < c.length; p++) c[p] = d(c[p], l);
      }
      m && (g = Wa(g, 2, !0));
      g !== h && Ua(c, g);
      m && Object.freeze(c);
      Kb(e, f, b, c);
      return a;
    },
    Lb = function (a, b, c) {
      a = Wa(a, 2, !!(2 & b));
      a = Wa(a, 32, !!(32 & b) && c);
      return (a = Wa(a, 2048, !1));
    },
    Pb = function (a) {
      if (null == a) throw Error();
      if ("string" === typeof a) a = a ? new zb(a, Nb) : Ob || (Ob = new zb(null, Nb));
      else if (a.constructor !== zb)
        if (yb && null != a && a instanceof Uint8Array) a = a.length ? new zb(new Uint8Array(a), Nb) : Ob || (Ob = new zb(null, Nb));
        else throw Error();
      return a;
    },
    Tb = function (a, b, c) {
      var d = a.constructor.Ka,
        e = Hb(c ? a.I : b),
        f = ab(e),
        g = !1;
      if (d && xb) {
        if (!c) {
          b = Sa(b);
          var h;
          if (b.length && db((h = b[b.length - 1])))
            for (g = 0; g < d.length; g++)
              if (d[g] >= f) {
                Object.assign((b[b.length - 1] = {}), h);
                break;
              }
          g = !0;
        }
        f = b;
        c = !c;
        h = Hb(a.I);
        a = ab(h);
        h = +!!(h & 512) - 1;
        for (var l, m, p = 0; p < d.length; p++)
          if (((m = d[p]), m < a)) {
            m += h;
            var u = f[m];
            null == u ? (f[m] = c ? Qb : Ya()) : c && u !== Qb && Va(u);
          } else
            l || ((u = void 0), f.length && db((u = f[f.length - 1])) ? (l = u) : f.push((l = {}))),
              (u = l[m]),
              null == l[m] ? (l[m] = c ? Qb : Ya()) : c && u !== Qb && Va(u);
      }
      l = b.length;
      if (!l) return b;
      var w;
      if (db((f = b[l - 1]))) {
        a: {
          var r = f;
          c = {};
          a = !1;
          for (var A in r) {
            h = r[A];
            if (Array.isArray(h)) {
              p = h;
              if ((!Rb && eb(h, d, +A)) || (!Sb && cb(h) && 0 === h.size)) h = null;
              h != p && (a = !0);
            }
            null != h ? (c[A] = h) : (a = !0);
          }
          if (a) {
            for (var I in c) {
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
        if (!(null == f || (!Rb && eb(f, d, A - e)) || (!Sb && cb(f) && 0 === f.size))) break;
        var Y = !0;
      }
      if (!w && !Y) return b;
      var ya;
      g ? (ya = b) : (ya = Array.prototype.slice.call(b, 0, l));
      b = ya;
      g && (b.length = l);
      r && b.push(r);
      return b;
    },
    Xb = function (a) {
      return Ub(Vb, a, function (b) {
        return new Wb(b, 0 > b ? -1 : 0);
      });
    },
    Yb = function () {
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
          I = e[2],
          Y = e[3],
          ya = e[4];
        for (r = 0; 80 > r; r++) {
          if (40 > r)
            if (20 > r) {
              var W = Y ^ (A & (I ^ Y));
              var qa = 1518500249;
            } else (W = A ^ I ^ Y), (qa = 1859775393);
          else 60 > r ? ((W = (A & I) | (Y & (A | I))), (qa = 2400959708)) : ((W = A ^ I ^ Y), (qa = 3395469782));
          W = ((((u << 5) | (u >>> 27)) & 4294967295) + W + ya + qa + w[r]) & 4294967295;
          ya = Y;
          Y = I;
          I = ((A << 30) | (A >>> 2)) & 4294967295;
          A = u;
          u = W;
        }
        e[0] = (e[0] + u) & 4294967295;
        e[1] = (e[1] + A) & 4294967295;
        e[2] = (e[2] + I) & 4294967295;
        e[3] = (e[3] + Y) & 4294967295;
        e[4] = (e[4] + ya) & 4294967295;
      }
      function c(u, w) {
        if ("string" === typeof u) {
          u = unescape(encodeURIComponent(u));
          for (var r = [], A = 0, I = u.length; A < I; ++A) r.push(u.charCodeAt(A));
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
    Zb = function (a, b) {
      var c = {},
        d;
      for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
      return c;
    },
    bc = function (a) {
      var b = $b,
        c = {},
        d;
      for (d in b) c[d] = a.call(void 0, b[d], d, b);
      return c;
    },
    cc = function (a, b) {
      for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
      return !1;
    },
    dc = function (a, b) {
      for (var c in a) if (!b.call(void 0, a[c], c, a)) return !1;
      return !0;
    },
    ec = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    fc = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b;
    },
    gc = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    },
    hc = function (a, b) {
      for (var c in a) if (a[c] == b) return !0;
      return !1;
    },
    ic = function (a, b) {
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
    jc = function (a) {
      for (var b in a) return !1;
      return !0;
    },
    kc = function (a, b) {
      var c;
      (c = b in a) && delete a[b];
      return c;
    },
    lc = function (a, b) {
      return null !== a && b in a ? a[b] : void 0;
    },
    mc = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    },
    oc = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < nc.length; f++) (c = nc[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    },
    pc = function (a) {
      a && "function" == typeof a.ga && a.ga();
    },
    qc = function (a) {
      for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        Aa(d) ? qc.apply(null, d) : pc(d);
      }
    },
    uc = function (a, b) {
      b = new Uint32Array(rc(b));
      sc(tc, a, b);
      return a;
    },
    vc = function (a) {
      return a ? (a = a.toUpperCase()) : null;
    },
    wc = function (a, b) {
      var c = a.G,
        d = b.G;
      if (c != d) return c < d ? 1 : -1;
      c = a.getCreationTime();
      d = b.getCreationTime();
      return c.V(d) ? (a.g != b.g ? (a.g < b.g ? -1 : 1) : 0) : c < d ? 1 : -1;
    },
    yc = function (a, b) {
      var c = a.xa,
        d = b.xa;
      var e = xc.L().i.GLOBAL_CHECKED_LIST_ITEMS_POLICY;
      return (e = !e || "GRAVEYARD" == e.h) && c && !d ? 1 : e && !c && d ? -1 : wc(a, b);
    },
    Ac = function (a) {
      return new zc(function (b) {
        return b.substr(0, a.length + 1).toLowerCase() === a + ":";
      });
    },
    Fc = function (a) {
      var b = void 0 === b ? Bc : b;
      a: if (((b = void 0 === b ? Bc : b), !(a instanceof Cc))) {
        for (var c = 0; c < b.length; ++c) {
          var d = b[c];
          if (d instanceof zc && d.Sb(a)) {
            a = new Cc(a, Dc);
            break a;
          }
        }
        a = void 0;
      }
      return a || Ec;
    },
    Gc = function (a) {
      var b = [],
        c = mc(a);
      delete c.children;
      b.push(c);
      b.push.apply(b, a.children);
      return b;
    },
    Jc = function (a, b) {
      a = Hc(a.B);
      return (
        ic(a, function (c) {
          c = c.g.h || "";
          return b == c || Ic(b) == Ic(c);
        }) || null
      );
    },
    Ic = function (a) {
      a = Kc(a);
      Lc(a, "");
      a.j = "";
      Mc(a, "");
      a.l = "";
      return a.toString();
    },
    Oc = function (a) {
      return (a = a.match(Nc)) ? a[1] : "";
    },
    y = function (a, b, c) {
      chrome.runtime.sendMessage(chrome.runtime.id, { type: a, value: b }, c);
    },
    Wc = function (a) {
      if (a instanceof Pc) return a;
      var b = "",
        c = "";
      if (a instanceof Qc) (b = a.Qa()), (c = Ic(b) + " - " + a.getTitle());
      else if (a instanceof z) {
        b = Rc(a)
          ? Sc(a)
          : Tc(a)
              .map(function (e) {
                return Uc(e);
              })
              .join("\n");
        b = (b = Vc.exec(b)) ? b[0] : "";
        if (!b) return null;
        var d = a.getTitle();
        d || ((a = Jc(a, b)) && (d = a.g.getTitle()));
        d && (c = Ic(b) + " - " + d);
      } else (b = a.url), (c = Ic(b) + " - " + a.title);
      return new Pc(b, c);
    },
    Xc = function (a, b) {
      a = Wc(a);
      b = Wc(b);
      return !!a && !!b && (a.url == b.url || a.qb == b.qb);
    },
    bd = function () {
      var a = n.performance;
      if (!a || !a.getEntriesByType) return null;
      var b = a.getEntriesByType("navigation");
      if (!b || !b[0]) return null;
      b = b[0];
      a = a.timeOrigin || a.timing.navigationStart;
      var c = new Yc();
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
      Zc(c, 18, b.redirectCount);
      $c(c, 19, ad[b.type] || 1);
      return c;
    },
    gd = function (a) {
      B(a.i, 2, 1e3 * Date.now());
      var b = bd();
      if (b) {
        var c = cd(a);
        C(c, 6, b);
      }
      c = dd();
      b = new ed();
      c = c.g.n_ei;
      c = Array.isArray(c) ? c : "string" === typeof c ? c.split(",").map(Number) : [];
      b = Mb(b, 1, c, lb);
      null == a.g && (a.g = new fd());
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
        return Ub(h, [this].concat(md(f)), e, d);
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
      if (b instanceof Cc) b = b instanceof Cc && b.constructor === Cc ? b.g : "type_error:SafeUrl";
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
      else if (g instanceof e) this.J(g);
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
    e.prototype.J = function (g) {
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
              } catch (I) {
                p(I);
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
              return function (I) {
                w[A] = I;
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
  D("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  D("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
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
    Aa = function (a) {
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
  var ue = !!(Yd[0] & 512),
    ve = !!(Yd[0] & 16),
    we = !!(Yd[0] & 1024),
    xe = !!(Yd[0] & 8);
  var ye = Xd(1, !0),
    da = ue ? we : Xd(610401301, !1),
    ze = ue ? ve || !xe : Xd(572417392, ye);
  var ea,
    Ae = n.navigator;
  ea = Ae ? Ae.userAgentData || null : null;
  var sa = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Be = Array.prototype.lastIndexOf
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
    Ce = Array.prototype.filter
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
    De = Array.prototype.some
      ? function (a, b, c) {
          return Array.prototype.some.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
          return !1;
        },
    Ee = Array.prototype.every
      ? function (a, b, c) {
          return Array.prototype.every.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a)) return !1;
          return !0;
        };
  var Fe = function (a) {
    Fe[" "](a);
    return a;
  };
  Fe[" "] = function () {};
  var Ge = function (a, b) {
      try {
        return Fe(a[b]), !0;
      } catch (c) {}
      return !1;
    },
    Ub = function (a, b, c, d) {
      d = d ? d(b) : b;
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : (a[d] = c(b));
    };
  var He = ia(),
    H = ja(),
    Ie = q("Edge"),
    Je = Ie || H,
    Me = q("Gecko") && !(-1 != ca().toLowerCase().indexOf("webkit") && !q("Edge")) && !(q("Trident") || q("MSIE")) && !q("Edge"),
    Ne = -1 != ca().toLowerCase().indexOf("webkit") && !q("Edge"),
    Oe = pa(),
    Pe = ma() ? "Windows" === ea.platform : q("Windows"),
    Qe = ma() ? "Android" === ea.platform : q("Android"),
    Re = na(),
    Se = q("iPad"),
    Te = q("iPod"),
    Ue = oa(),
    Ve = function () {
      var a = n.document;
      return a ? a.documentMode : void 0;
    },
    We;
  a: {
    var Xe = "",
      Ye = (function () {
        var a = ca();
        if (Me) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ie) return /Edge\/([\d\.]+)/.exec(a);
        if (H) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Ne) return /WebKit\/(\S+)/.exec(a);
        if (He) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Ye && (Xe = Ye ? Ye[1] : "");
    if (H) {
      var Ze = Ve();
      if (null != Ze && Ze > parseFloat(Xe)) {
        We = String(Ze);
        break a;
      }
    }
    We = Xe;
  }
  var $e = We,
    af;
  if (n.document && H) {
    var bf = Ve();
    af = bf ? bf : parseInt($e, 10) || void 0;
  } else af = void 0;
  var cf = af;
  var df = ka(),
    ef = na() || q("iPod"),
    ff = q("iPad"),
    gf = q("Android") && !(la() || ka() || ia() || q("Silk")),
    hf = la(),
    jf =
      q("Safari") &&
      !(
        la() ||
        (ha() ? 0 : q("Coast")) ||
        ia() ||
        (ha() ? 0 : q("Edge")) ||
        (ha() ? fa("Microsoft Edge") : q("Edg/")) ||
        (ha() ? fa("Opera") : q("OPR")) ||
        ka() ||
        q("Silk") ||
        q("Android")
      ) &&
      !oa();
  var kf = {},
    lf = null,
    mf = Me || Ne || (!jf && !H && "function" == typeof n.atob),
    Ia = function (a) {
      var b;
      void 0 === b && (b = 0);
      nf();
      b = kf[b];
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
    rc = function (a) {
      var b = [];
      of(a, function (c) {
        b.push(c);
      });
      return b;
    },
    of = function (a, b) {
      function c(l) {
        for (; d < a.length; ) {
          var m = a.charAt(d++),
            p = lf[m];
          if (null != p) return p;
          if (!ie(m)) throw Error("o`" + m);
        }
        return l;
      }
      nf();
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
    nf = function () {
      if (!lf) {
        lf = {};
        for (
          var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0;
          5 > c;
          c++
        ) {
          var d = a.concat(b[c].split(""));
          kf[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === lf[f] && (lf[f] = e);
          }
        }
      }
    };
  var yb = "undefined" !== typeof Uint8Array,
    Ha = !H && "function" === typeof btoa,
    Nb = {};
  var Ob,
    zb = function (a, b) {
      if (b !== Nb) throw Error("p");
      this.ea = a;
      if (null != a && 0 === a.length) throw Error("q");
    };
  zb.prototype.ha = function () {
    return null == this.ea;
  };
  var Sb = !ze,
    Rb = !ze;
  var Ma = 0,
    Na = 0;
  var pf = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0,
    Xa = pf
      ? function (a, b) {
          a[pf] |= b;
        }
      : function (a, b) {
          void 0 !== a.Ya ? (a.Ya |= b) : Object.defineProperties(a, { Ya: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        },
    Ta = pf
      ? function (a) {
          return a[pf] | 0;
        }
      : function (a) {
          return a.Ya | 0;
        },
    Hb = pf
      ? function (a) {
          return a[pf];
        }
      : function (a) {
          return a.Ya;
        },
    Ua = pf
      ? function (a, b) {
          a[pf] = b;
        }
      : function (a, b) {
          void 0 !== a.Ya ? (a.Ya = b) : Object.defineProperties(a, { Ya: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        };
  var rb = {},
    bb = {},
    qf,
    xb = !ze,
    Qb,
    rf = [];
  Ua(rf, 55);
  Qb = Object.freeze(rf);
  var gb = function (a, b) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  };
  var jb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  var tb;
  Object.freeze({});
  var tf = function (a, b) {
      a = a.I;
      return sf(a, Hb(a), b);
    },
    sf = function (a, b, c, d) {
      if (-1 === c) return null;
      if (c >= ab(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else {
        var e = a.length;
        if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
        b = c + (+!!(b & 512) - 1);
        if (b < e) return a[b];
      }
    },
    uf = function (a, b, c) {
      var d = a.I,
        e = Hb(d);
      fb(e);
      Kb(d, e, b, c);
      return a;
    },
    wf = function (a, b, c) {
      return void 0 !== vf(a, b, c, !1);
    },
    xf = function (a, b) {
      a = tf(a, b);
      return null == a ? a : "boolean" !== typeof a && "number" !== typeof a ? void 0 : !!a;
    },
    vf = function (a, b, c, d) {
      a = a.I;
      var e = Hb(a),
        f = sf(a, e, c, d);
      b = sb(f, b, e);
      b !== f && null != b && Kb(a, e, c, b, d);
      return b;
    },
    yf = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      b = vf(a, b, c, d);
      if (null == b) return b;
      a = a.I;
      var e = Hb(a);
      if (!(e & 2)) {
        var f = Jb(b);
        f !== b && ((b = f), Kb(a, e, c, b, d));
      }
      return b;
    },
    C = function (a, b, c) {
      null == c && (c = void 0);
      return uf(a, b, c);
    },
    zf = function (a, b, c) {
      var d = a.I,
        e = Hb(d);
      fb(e);
      if (null == c) return Kb(d, e, b), a;
      for (
        var f = Ta(c), g = f, h = !!(2 & f) || !!(2048 & f), l = h || Object.isFrozen(c), m = !l && !1, p = !0, u = !0, w = 0;
        w < c.length;
        w++
      ) {
        var r = c[w];
        h || ((r = !!(Ta(r.I) & 2)), p && (p = !r), u && (u = r));
      }
      h ||
        ((f = Wa(f, 5, !0)),
        (f = Wa(f, 8, p)),
        (f = Wa(f, 16, u)),
        m && (f = Wa(f, u ? 2 : 2048, !0)),
        f !== g && (l && ((c = Sa(c)), (f = Lb(f, e, !0))), Ua(c, f)),
        m && Object.freeze(c));
      Kb(d, e, b, c);
      return a;
    },
    Af = function (a, b) {
      a = tf(a, b);
      a = null == a ? a : kb(a) ? ("number" === typeof a ? pb(a, !1) : nb(a, !1)) : void 0;
      return a;
    },
    Bf = function (a) {
      a = tf(a, 1);
      var b = void 0 === b ? !1 : b;
      b = null == a ? a : kb(a) ? ("string" === typeof a ? nb(a, b) : b ? ob(a, b) : pb(a, b)) : void 0;
      return b;
    },
    Cf = function (a, b, c) {
      if (null != c) {
        if ("boolean" !== typeof c) throw Error("r`" + $d(c) + "`" + c);
        c = !!c;
      }
      uf(a, b, c);
    },
    Zc = function (a, b, c) {
      return uf(a, b, null == c ? c : lb(c));
    },
    B = function (a, b, c) {
      return uf(a, b, qb(c));
    },
    Df = function (a, b, c) {
      if (null != c && "string" !== typeof c) throw Error();
      return uf(a, b, c);
    },
    $c = function (a, b, c) {
      null != c && (Number.isFinite(c) || hb());
      return uf(a, b, c);
    };
  var J = function (a, b, c) {
    this.I = v(a, b, c);
  };
  J.prototype.toJSON = function () {
    if (qf) var a = Tb(this, this.I, !1);
    else (a = Bb(this.I, Db, void 0, void 0, !1, !1)), (a = Tb(this, a, !0));
    return a;
  };
  var Ef = function (a) {
    qf = !0;
    try {
      return JSON.stringify(a.toJSON(), wb);
    } finally {
      qf = !1;
    }
  };
  J.prototype.clone = function () {
    var a = this.I;
    return ub(this.constructor, Ib(a, Hb(a), !1));
  };
  J.prototype.ud = rb;
  J.prototype.toString = function () {
    return Tb(this, this.I, !1).toString();
  };
  var Ff = function (a) {
    this.I = v(a);
  };
  E(Ff, J);
  Ff.Ka = [2];
  var Gf = function (a) {
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
  var Hf = function () {};
  Hf.prototype.V = function (a) {
    return Object.is(this, a) || (null == this && null == a);
  };
  Hf.prototype.j = function () {
    return this.i || (Object.defineProperties(this, { i: { value: (If = (If + 1) | 0), enumerable: !1 } }), this.i);
  };
  Hf.prototype.toString = function () {
    var a = Jf(Kf(Lf(this.constructor))) + "@";
    var b = (this.j() >>> 0).toString(16);
    return a + Jf(b);
  };
  Hf.prototype.Sa = ["java.lang.Object", 0];
  var Wb = function (a, b) {
      this.g = a | 0;
      this.h = b | 0;
    },
    Mf = function (a) {
      return 4294967296 * a.h + (a.g >>> 0);
    };
  Wb.prototype.toString = function (a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error("v`" + a);
    var b = this.h >> 21;
    if (0 == b || (-1 == b && (0 != this.g || -2097152 != this.h))) return (b = Mf(this)), 10 == a ? "" + b : b.toString(a);
    b = 14 - (a >> 2);
    var c = Math.pow(a, b),
      d = Nf(c, c / 4294967296);
    c = Of(this, d);
    d = Math.abs(Mf(this.add(Pf(Qf(c, d)))));
    var e = 10 == a ? "" + d : d.toString(a);
    e.length < b && (e = "0000000000000".slice(e.length - b) + e);
    d = Mf(c);
    return (10 == a ? d : d.toString(a)) + e;
  };
  var Rf = function (a) {
    return 0 == a.g && 0 == a.h;
  };
  Wb.prototype.j = function () {
    return this.g ^ this.h;
  };
  Wb.prototype.V = function (a) {
    return this.g == a.g && this.h == a.h;
  };
  var Sf = function (a, b) {
      return a.h == b.h ? (a.g == b.g ? 0 : a.g >>> 0 > b.g >>> 0 ? 1 : -1) : a.h > b.h ? 1 : -1;
    },
    Pf = function (a) {
      var b = (~a.g + 1) | 0;
      return Nf(b, (~a.h + !b) | 0);
    };
  Wb.prototype.add = function (a) {
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
    return Nf(((g & 65535) << 16) | (a & 65535), (b << 16) | (d & 65535));
  };
  var Qf = function (a, b) {
      if (Rf(a)) return a;
      if (Rf(b)) return b;
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
      return Nf(((m & 65535) << 16) | (l & 65535), (u << 16) | (p & 65535));
    },
    Of = function (a, b) {
      if (Rf(b)) throw Error("w");
      if (0 > a.h) {
        if (a.V(Tf)) {
          if (b.V(Uf) || b.V(Vf)) return Tf;
          if (b.V(Tf)) return Uf;
          var c = 1;
          if (0 == c) c = a;
          else {
            var d = a.h;
            c = 32 > c ? Nf((a.g >>> c) | (d << (32 - c)), d >> c) : Nf(d >> (c - 32), 0 <= d ? 0 : -1);
          }
          c = Wf(Of(c, b), 1);
          if (c.V(Xf)) return 0 > b.h ? Uf : Vf;
          a = a.add(Pf(Qf(b, c)));
          return c.add(Of(a, b));
        }
        return 0 > b.h ? Of(Pf(a), Pf(b)) : Pf(Of(Pf(a), b));
      }
      if (Rf(a)) return Xf;
      if (0 > b.h) return b.V(Tf) ? Xf : Pf(Of(a, Pf(b)));
      for (d = Xf; 0 <= Sf(a, b); ) {
        c = Math.max(1, Math.floor(Mf(a) / Mf(b)));
        var e = Math.ceil(Math.log(c) / Math.LN2);
        e = 48 >= e ? 1 : Math.pow(2, e - 48);
        for (var f = Yf(c), g = Qf(f, b); 0 > g.h || 0 < Sf(g, a); ) (c -= e), (f = Yf(c)), (g = Qf(f, b));
        Rf(f) && (f = Uf);
        d = d.add(f);
        a = a.add(Pf(g));
      }
      return d;
    };
  Wb.prototype.and = function (a) {
    return Nf(this.g & a.g, this.h & a.h);
  };
  Wb.prototype.or = function (a) {
    return Nf(this.g | a.g, this.h | a.h);
  };
  Wb.prototype.xor = function (a) {
    return Nf(this.g ^ a.g, this.h ^ a.h);
  };
  var Wf = function (a, b) {
      b &= 63;
      if (0 == b) return a;
      var c = a.g;
      return 32 > b ? Nf(c << b, (a.h << b) | (c >>> (32 - b))) : Nf(0, c << (b - 32));
    },
    Zf = function (a, b) {
      b &= 63;
      if (0 == b) return a;
      var c = a.h;
      return 32 > b ? Nf((a.g >>> b) | (c << (32 - b)), c >>> b) : 32 == b ? Nf(c, 0) : Nf(c >>> (b - 32), 0);
    },
    $f = function (a) {
      a |= 0;
      return -128 <= a && 128 > a ? Xb(a) : new Wb(a, 0 > a ? -1 : 0);
    },
    Yf = function (a) {
      return 0 < a
        ? 0x7fffffffffffffff <= a
          ? ag
          : new Wb(a, a / 4294967296)
        : 0 > a
        ? -0x7fffffffffffffff >= a
          ? Tf
          : Pf(new Wb(-a, -a / 4294967296))
        : Xf;
    },
    Nf = function (a, b) {
      return new Wb(a, b);
    },
    bg = function (a, b) {
      if ("-" == a.charAt(0)) return Pf(bg(a.substring(1), b));
      var c = parseInt(a, b || 10);
      if (9007199254740991 >= c) return new Wb(c % 4294967296 | 0, (c / 4294967296) | 0);
      if (0 == a.length) throw Error("x");
      if (0 <= a.indexOf("-")) throw Error("y`" + a);
      b = b || 10;
      if (2 > b || 36 < b) throw Error("v`" + b);
      c = Yf(Math.pow(b, 8));
      for (var d = Xf, e = 0; e < a.length; e += 8) {
        var f = Math.min(8, a.length - e),
          g = parseInt(a.substring(e, e + f), b);
        8 > f ? (d = Qf(d, Yf(Math.pow(b, f))).add(Yf(g))) : ((d = Qf(d, c)), (d = d.add(Yf(g))));
      }
      return d;
    },
    Vb = {},
    Xf = Nf(0, 0),
    Uf = Nf(1, 0),
    Vf = Nf(-1, -1),
    ag = Nf(4294967295, 2147483647),
    Tf = Nf(0, 2147483648);
  var If = 0;
  var Jf = function (a) {
    return null == a ? "null" : a.toString();
  };
  var cg = function (a, b) {
    this.g = a;
    this.h = b;
  };
  E(cg, Hf);
  var Kf = function (a) {
    if (0 != a.h) {
      var b = 3 == a.g.prototype.Sa[1] ? a.g.prototype.Sa[2] : "L" + Jf(a.g.prototype.Sa[0]) + ";";
      a = a.h;
      for (var c = "", d = 0; d < a; d = (d + 1) | 0) c = Jf(c) + "[";
      return Jf(c) + Jf(b);
    }
    return a.g.prototype.Sa[0];
  };
  cg.prototype.toString = function () {
    return (
      String(0 == this.h && 1 == this.g.prototype.Sa[1] ? "interface " : 0 == this.h && 3 == this.g.prototype.Sa[1] ? "" : "class ") +
      Jf(Kf(this))
    );
  };
  cg.prototype.Sa = ["java.lang.Class", 0];
  var Lf = function (a) {
    return Ub(a.prototype, "$$class/0", function () {
      return new cg(a, 0);
    });
  };
  var eg = function () {
    new dg();
  };
  E(eg, Hf);
  eg.prototype.Sa = ["com.google.apps.docs.xplat.diagnostics.impressions.DocsAppLoadInvariantsBuilder", 0];
  var fg = function (a) {
    this.I = v(a);
  };
  E(fg, J);
  var dg = function (a) {
    this.I = v(a);
  };
  E(dg, J);
  dg.prototype.getNetworkDetails = function () {
    return yf(this, fg, 72);
  };
  dg.Ka = [90, 91, 125, 93, 103, 155, 123, 139];
  var gg = function (a) {
    this.I = v(a);
  };
  E(gg, J);
  var Yc = function (a) {
    this.I = v(a);
  };
  E(Yc, J);
  var hg = function (a) {
    this.I = v(a);
  };
  E(hg, J);
  hg.Ka = [3, 42];
  var ig = {
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
  var kg = function (a, b, c) {
      var d = String(n.location.href);
      return d && a && b ? [b, jg(Gf(d), a, c || null)].join(" ") : null;
    },
    jg = function (a, b, c) {
      var d = [],
        e = [];
      if (1 == (Array.isArray(c) ? 2 : 1))
        return (
          (e = [b, a]),
          Bd(d, function (h) {
            e.push(h);
          }),
          lg(e.join(" "))
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
      a = lg(e.join(" "));
      a = [c, a];
      0 == g.length || a.push(g.join(""));
      return a.join("_");
    },
    lg = function (a) {
      var b = Yb();
      b.update(a);
      return b.ff().toLowerCase();
    };
  var mg = {};
  var ng = function () {},
    og = function (a) {
      var b = arguments,
        c = b.length;
      return function () {
        for (var d, e = 0; e < c; e++) d = b[e].apply(this, arguments);
        return d;
      };
    };
  var nc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var pg,
    qg = function () {
      if (void 0 === pg) {
        var a = null,
          b = n.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", { createHTML: fe, createScript: fe, createScriptURL: fe });
          } catch (c) {
            n.console && n.console.error(c.message);
          }
          pg = a;
        } else pg = a;
      }
      return pg;
    };
  var tg = function (a, b) {
    this.g = (a === rg && b) || "";
    this.h = sg;
  };
  tg.prototype.Rb = !0;
  tg.prototype.Pb = function () {
    return this.g;
  };
  var ug = function (a) {
      return a instanceof tg && a.constructor === tg && a.h === sg ? a.g : "type_error:Const";
    },
    sg = {},
    rg = {};
  var vg = function (a) {
    this.g = a;
  };
  vg.prototype.toString = function () {
    return this.g + "";
  };
  vg.prototype.Rb = !0;
  vg.prototype.Pb = function () {
    return this.g.toString();
  };
  var wg = function (a) {
      return (a instanceof vg && a.constructor === vg ? a.g : "type_error:TrustedResourceUrl").toString();
    },
    xg = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    yg = {},
    zg = function (a) {
      var b = qg();
      a = b ? b.createScriptURL(a) : a;
      return new vg(a, yg);
    },
    Ag = function (a, b, c) {
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
  var Cc = function (a) {
    this.g = a;
  };
  Cc.prototype.toString = function () {
    return this.g.toString();
  };
  Cc.prototype.Rb = !0;
  Cc.prototype.Pb = function () {
    return this.g.toString();
  };
  var Dc = {},
    Ec = new Cc("about:invalid#zClosurez", Dc);
  var Bg = {},
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
  var Cg = function (a) {
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
        (a = Dg(a)));
      return a;
    },
    Dg = function (a) {
      var b = qg();
      a = b ? b.createHTML(a) : a;
      return new xd(a, Bg);
    },
    Eg = new xd((n.trustedTypes && n.trustedTypes.emptyHTML) || "", Bg);
  var Fg = (function (a) {
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
      a.innerHTML = Cg(Eg);
      return !b.parentElement;
    }),
    td = function (a, b) {
      if (Fg()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = Cg(b);
    };
  var Gg = function (a) {
      return String(a)
        .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
        .replace(/\x08/g, "\\x08");
    },
    Hg = String.prototype.repeat
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
      return d + Hg("0", Math.max(0, b - c)) + a;
    },
    Ig = function () {
      return (
        Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
      );
    },
    Jg = function (a) {
      var b = Number(a);
      return 0 == b && ie(a) ? NaN : b;
    },
    Kg = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    };
  var Lg = function () {
    this.g = document || { cookie: "" };
  };
  k = Lg.prototype;
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
    return Mg(this).keys;
  };
  k.ja = function () {
    return Mg(this).values;
  };
  k.ha = function () {
    return !this.g.cookie;
  };
  k.W = function () {
    return this.g.cookie ? (this.g.cookie || "").split(";").length : 0;
  };
  k.Xa = function (a) {
    for (var b = Mg(this).values, c = 0; c < b.length; c++) if (b[c] == a) return !0;
    return !1;
  };
  k.clear = function () {
    for (var a = Mg(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b]);
  };
  var Mg = function (a) {
    a = (a.g.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
      (e = je(a[f])), (d = e.indexOf("=")), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return { keys: b, values: c };
  };
  var Ng = function (a) {
      return !!mg.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a);
    },
    Og = function (a, b, c, d) {
      (a = n[a]) || "undefined" === typeof document || (a = new Lg().get(b));
      return a ? kg(a, c, d) : null;
    },
    Pg = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c = Gf(String(n.location.href)),
        d = [];
      var e = b;
      e = void 0 === e ? !1 : e;
      var f = n.__SAPISID || n.__APISID || n.__3PSAPISID || n.__OVERRIDE_SID;
      Ng(e) && (f = f || n.__1PSAPISID);
      if (f) e = !0;
      else {
        if ("undefined" !== typeof document) {
          var g = new Lg();
          f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
          Ng(e) && (f = f || g.get("__Secure-1PAPISID"));
        }
        e = !!f;
      }
      e &&
        ((e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:"))
          ? n.__SAPISID
          : n.__APISID),
        e || "undefined" === typeof document || ((e = new Lg()), (e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"))),
        (e = e ? kg(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e),
        c &&
          Ng(b) &&
          ((b = Og("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b),
          (a = Og("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
      return 0 == d.length ? null : d.join(" ");
    };
  var Qg = function () {
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
  Qg.prototype.get = function (a) {
    return this.g[a];
  };
  Qg.prototype.Ea = function () {
    return gc(this.g);
  };
  Qg.prototype.remove = function (a) {
    if (void 0 !== this.g[a]) {
      var b = this.g[a];
      delete this.g[a];
      delete this.h[b];
    }
  };
  var Rg;
  var Sg = function (a, b) {
    return a + Math.random() * (b - a);
  };
  var Tg = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  Tg.prototype.clone = function () {
    return new Tg(this.x, this.y);
  };
  Tg.prototype.V = function (a) {
    return a instanceof Tg && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1);
  };
  var Ug = function (a, b) {
    return new Tg(a.x - b.x, a.y - b.y);
  };
  Tg.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  Tg.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  Tg.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  var Vg = function (a, b) {
    this.width = a;
    this.height = b;
  };
  k = Vg.prototype;
  k.clone = function () {
    return new Vg(this.width, this.height);
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
      return a ? new Wg(Xg(a)) : he || (he = new Wg());
    },
    Yg = function (a, b) {
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
              "function" == typeof g.split && ta(g.split(/\s+/), a) && (f[d++] = b);
            }
            f.length = d;
            a = f;
          } else a = e;
          a = a[0] || null;
        }
      }
      return a || null;
    },
    $g = function (a, b) {
      x(b, function (c, d) {
        c && "object" == typeof c && c.Rb && (c = c.Pb());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : Zg.hasOwnProperty(d)
          ? a.setAttribute(Zg[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    Zg = {
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
    bh = function (a) {
      a = a.document;
      a = ah(a) ? a.documentElement : a.body;
      return new Vg(a.clientWidth, a.clientHeight);
    },
    eh = function (a) {
      var b = ch(a);
      a = dh(a);
      return H && a.pageYOffset != b.scrollTop
        ? new Tg(b.scrollLeft, b.scrollTop)
        : new Tg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    ch = function (a) {
      return a.scrollingElement ? a.scrollingElement : !Ne && ah(a) ? a.documentElement : a.body || a.documentElement;
    },
    fh = function (a) {
      return a ? dh(a) : window;
    },
    dh = function (a) {
      return a.parentWindow || a.defaultView;
    },
    hh = function (a, b, c) {
      return gh(document, arguments);
    },
    gh = function (a, b) {
      var c = b[1],
        d = rd(a, String(b[0]));
      c && ("string" === typeof c ? (d.className = c) : Array.isArray(c) ? (d.className = c.join(" ")) : $g(d, c));
      2 < b.length && ih(a, d, b, 2);
      return d;
    },
    ih = function (a, b, c, d) {
      function e(h) {
        h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Aa(f) || (vd(f) && 0 < f.nodeType)) e(f);
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
          Bd(g ? za(f) : f, e);
        }
      }
    },
    rd = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    ah = function (a) {
      return "CSS1Compat" == a.compatMode;
    },
    jh = function (a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    },
    kh = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    },
    lh = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; ) b = b.parentNode;
      return b == a;
    },
    Xg = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    mh = function (a, b) {
      if ("textContent" in a) a.textContent = b;
      else if (3 == a.nodeType) a.data = String(b);
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
        a.firstChild.data = String(b);
      } else jh(a), a.appendChild(Xg(a).createTextNode(String(b)));
    },
    nh = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    oh = { IMG: " ", BR: "\n" },
    ph = function (a, b) {
      b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute("tabIndex"));
    },
    qh = function (a) {
      a = a.tabIndex;
      return "number" === typeof a && 0 <= a && 32768 > a;
    },
    sh = function (a) {
      var b = [];
      rh(a, b, !1);
      return b.join("");
    },
    rh = function (a, b, c) {
      if (!(a.nodeName in nh))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in oh) b.push(oh[a.nodeName]);
        else for (a = a.firstChild; a; ) rh(a, b, c), (a = a.nextSibling);
    },
    th = function (a) {
      try {
        var b = a && a.activeElement;
        return b && b.nodeName ? b : null;
      } catch (c) {
        return null;
      }
    },
    Wg = function (a) {
      this.g = a || n.document || document;
    };
  k = Wg.prototype;
  k.C = function (a) {
    return "string" === typeof a ? this.g.getElementById(a) : a;
  };
  k.setProperties = $g;
  k.sb = function (a, b, c) {
    return gh(this.g, arguments);
  };
  k.Ne = function (a, b) {
    ih(Xg(a), a, arguments, 1);
  };
  k.Oe = jh;
  k.Fd = kh;
  k.getChildren = function (a) {
    return void 0 != a.children
      ? a.children
      : Array.prototype.filter.call(a.childNodes, function (b) {
          return 1 == b.nodeType;
        });
  };
  k.contains = lh;
  var uh = function (a, b) {
      b ? a.setAttribute("role", b) : a.removeAttribute("role");
    },
    vh = function (a, b, c) {
      Array.isArray(c) && (c = c.join(" "));
      var d = "aria-" + b;
      "" === c || void 0 == c
        ? (Rg ||
            ((c = {}),
            (Rg =
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
          (c = Rg),
          b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
        : a.setAttribute(d, c);
    },
    wh = function (a, b) {
      var c = "";
      b && (c = b.id);
      vh(a, "activedescendant", c);
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
      xh(a, ee(pc, b));
    },
    xh = function (a, b, c) {
      a.pa ? (void 0 !== c ? b.call(c) : b()) : (a.eb || (a.eb = []), a.eb.push(void 0 !== c ? F(b, c) : b));
    };
  M.prototype.K = function () {
    if (this.eb) for (; this.eb.length; ) this.eb.shift()();
  };
  var yh = function (a) {
    M.call(this);
    this.g = a || qd();
    this.h = {};
    this.i = {};
  };
  G(yh, M);
  yh.prototype.K = function () {
    x(this.h, this.g.Fd, this.g);
    this.i = this.g = this.h = null;
    yh.O.K.call(this);
  };
  var zh = function (a) {
    var b = "nb";
    if (a.nb && a.hasOwnProperty(b)) return a.nb;
    b = new a();
    return (a.nb = b);
  };
  var Ah = function () {
    this.g = new yh();
  };
  Ah.prototype.speak = function (a, b) {
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
        vh(d, "live", b),
        vh(d, "atomic", "true"),
        c.g.g.body.appendChild(d),
        (c.h[b] = d));
    var e = c.i[b];
    e = e && e === a ? a + "\u00a0" : a;
    a && (c.i[b] = e);
    mh(d, e);
  };
  var Bh = function (a) {
      this.g = "";
      this.h = void 0 === a ? function () {} : a;
    },
    Dh = function (a) {
      a.g
        ? chrome.identity.removeCachedAuthToken({ token: a.g }, function () {
            return Ch(a, !1);
          })
        : Ch(a, !1);
    },
    Ch = function (a, b, c) {
      chrome.identity.getAuthToken({ interactive: !!b }, function (d) {
        var e = !!b;
        d ? ((a.g = d), a.h(!0), c && c()) : e ? a.h(!1) : (a.h(!1), Ch(a, !0, c));
      });
    };
  var Eh = function () {
    M.call(this);
    this.h = [];
    this.g = 0;
    this.i = !1;
  };
  E(Eh, M);
  Eh.prototype.setEnabled = function (a) {
    this.i = a;
  };
  Eh.prototype.get = function (a) {
    return yd(this.h, function (b) {
      return a ? b.i : b.h;
    }).join("\n\n\n\n");
  };
  Eh.prototype.logMessage = function (a) {
    if (this.i) {
      a = new Fh(a);
      for (var b = 1e7 - a.g; this.g > b; ) {
        var c = this.h.pop();
        this.g -= c.g;
      }
      this.h.unshift(a);
      this.g += a.g;
    }
  };
  var Gh = function (a, b) {
    a += "";
    return a.length >= b ? a : Array(b - a.length + 1).join("0") + a;
  };
  Eh.L = function () {
    return zh(Eh);
  };
  var Fh = function (a) {
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
        Gh(b.getMinutes(), 2) +
        ":" +
        Gh(b.getSeconds(), 2) +
        ":" +
        Gh(b.getMilliseconds(), 3));
    this.g = this.h.length;
  };
  var Hh = function (a) {
    this.s = this.h = this.o = this.i = this.u = this.j = null;
    a && this.update(a);
  };
  Hh.prototype.update = function (a) {
    for (var b in a)
      switch (b) {
        case "url":
          Ih(this, a[b]);
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
  Hh.prototype.g = function () {
    var a = {};
    a.url = this.j;
    a.title = this.i;
    a.description = this.o;
    a.provenanceUrl = this.h;
    a.representativeImageUrl = this.s;
    return a;
  };
  Hh.prototype.Qa = function () {
    return this.j || "";
  };
  var Ih = function (a, b) {
    a.j = b;
    try {
      a.u = new URL(b).hostname;
    } catch (c) {
      Eh.L().logMessage("Failed to get hostname for URL " + b + ".\nProvenance URL: " + a.h + ".\nFull exception: " + c + ".");
    }
  };
  Hh.prototype.getTitle = function () {
    return this.i || "";
  };
  var Jh = function (a) {
    this.g = null;
    a && this.update(a);
  };
  Jh.prototype.update = function (a) {
    for (var b in a)
      switch (b) {
        case "webLink":
          this.g ? this.g.update(a[b]) : (this.g = new Hh(a[b]));
      }
  };
  var Kh = function (a) {
    this.g = "SUGGEST_TYPE_UNKNOWN";
    a && this.update(a);
  };
  Kh.prototype.update = function (a) {
    this.g = a.suggestType;
  };
  var Lh = { GROCERY_ITEM: chrome.i18n.getMessage("1333255388111908292") };
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
  var Mh = function (a, b, c, d, e) {
      a = new Date(a, b, c);
      e = e || 0;
      return a.valueOf() + 864e5 * ((((void 0 !== d ? d : 3) - e + 7) % 7) - ((((a.getDay() + 6) % 7) - e + 7) % 7));
    },
    Sh = function (a, b, c) {
      "number" === typeof a
        ? ((this.g = Nh(a, b || 0, c || 1)), Oh(this, c || 1))
        : vd(a)
        ? ((this.g = Nh(a.getFullYear(), a.getMonth(), a.getDate())), Oh(this, a.getDate()))
        : ((this.g = new Date(Date.now())),
          (a = this.g.getDate()),
          this.g.setHours(0),
          this.g.setMinutes(0),
          this.g.setSeconds(0),
          this.g.setMilliseconds(0),
          Oh(this, a));
    },
    Nh = function (a, b, c) {
      b = new Date(a, b, c);
      0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
      return b;
    };
  k = Sh.prototype;
  k.jc = O.Gb;
  k.kc = O.Hb;
  k.clone = function () {
    var a = new Sh(this.g);
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
  Sh.prototype.valueOf = function () {
    return this.g.valueOf();
  };
  var Th = function (a, b, c, d, e, f, g) {
    this.g =
      "number" === typeof a
        ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0)
        : new Date(a && a.getTime ? a.getTime() : Date.now());
  };
  G(Th, Sh);
  k = Th.prototype;
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
    Sh.prototype.add.call(this, a);
    a.h && this.g.setUTCHours(this.g.getUTCHours() + a.h);
    a.i && this.g.setUTCMinutes(this.g.getUTCMinutes() + a.i);
    a.l && this.g.setUTCSeconds(this.g.getUTCSeconds() + a.l);
  };
  k.Yb = function (a) {
    var b = Sh.prototype.Yb.call(this, a);
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
    var a = new Th(this.g);
    a.jc = this.jc;
    a.kc = this.kc;
    return a;
  };
  var Uh = function (a, b) {
    null != a && this.la.apply(this, arguments);
  };
  k = Uh.prototype;
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
  var Vh = function () {},
    Wh = function (a, b) {
      if (!b) return null;
      a = new Th(2e3);
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
  Vh.prototype.format = function (a) {
    var b = new Uh();
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
  Vh.L = function () {
    return zh(Vh);
  };
  var Xh = function (a) {
    a = a || {};
    this.j = this.s = Wh(Vh.L(), a.created) || null;
    this.h = this.i = this.l = this.o = this.g = null;
    this.update(a);
  };
  Xh.prototype.getCreationTime = function () {
    return this.s ? this.s : new Th();
  };
  var Yh = function (a) {
      return a.j ? a.j : new Th();
    },
    Zh = function (a, b) {
      a.j = b;
      null == a.s && (a.s = b);
    };
  Xh.prototype.update = function (a) {
    Vh.L();
    var b = !1,
      c;
    for (c in a) {
      var d = Wh(0, a[c]);
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
  var $h = function (a) {
    var b = {},
      c = Vh.L();
    b.kind = "notes#timestamps";
    b.created = c.format(a.getCreationTime());
    b.deleted = a.g ? c.format(a.g) : "1970-01-01T00:00:00.000Z";
    b.trashed = a.i ? c.format(a.i) : "1970-01-01T00:00:00.000Z";
    b.updated = c.format(Yh(a));
    b.userEdited = a.h ? c.format(a.h) : "1970-01-01T00:00:00.000Z";
    a.o && (b.shareRequestProcessed = c.format(a.o));
    a.l && (b.recentSharedChangesSeen = c.format(a.l));
    return b;
  };
  var ai = function (a) {
    this.g = null;
    a && this.update(a);
  };
  ai.prototype.update = function (a) {
    this.g = a.category;
  };
  var bi = chrome.i18n.getMessage("456512308416555173"),
    ci = chrome.i18n.getMessage("6366376928558090914"),
    di = chrome.i18n.getMessage("4840513623749850224"),
    ei = chrome.i18n.getMessage("6497197865876438261"),
    fi = chrome.i18n.getMessage("8602525917014156029"),
    gi = chrome.i18n.getMessage("4533605085334699862"),
    hi = chrome.i18n.getMessage("3385831848537487538"),
    ii = chrome.i18n.getMessage("5403636185480096151"),
    ji = { BOOKS: bi, FOOD: ci, MOVIES: di, MUSIC: ei, PLACES: fi, QUOTES: gi, TRAVEL: hi, TV: ii };
  var ki = function (a) {
    this.g = this.i = this.h = this.j = this.l = null;
    a && this.update(a);
  };
  ki.prototype.update = function (a) {
    this.l = a.deleted;
    this.o = a.id;
    li(a.context)
      ? ((a = a.context), this.j ? this.j.update(a) : (this.j = new Jh(a)), (this.g = this.i = this.h = null))
      : li(a.taskAssist)
      ? ((a = a.taskAssist), this.h ? this.h.update(a) : (this.h = new Kh(a)), (this.g = this.i = this.j = null))
      : li(a.topicCategory)
      ? ((a = a.topicCategory), this.i ? this.i.update(a) : (this.i = new ai(a)), (this.g = this.h = this.j = null))
      : li(a.webLink) && ((a = a.webLink), this.g ? this.g.update(a) : (this.g = new Hh(a)), (this.i = this.h = this.j = null));
  };
  ki.prototype.ha = function () {
    return !this.j && !this.h && !this.i && !this.g;
  };
  var mi = function (a) {
      return (!!a.l && "1970-01-01T00:00:00.000Z" != a.l) || !1;
    },
    li = function (a) {
      return vd(a) && !jc(a);
    };
  var ni = function (a) {
      return a.W && "function" == typeof a.W ? a.W() : Aa(a) || "string" === typeof a ? a.length : ec(a);
    },
    oi = function (a) {
      if (a.ja && "function" == typeof a.ja) return a.ja();
      if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set))
        return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (Aa(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return fc(a);
    },
    pi = function (a) {
      if (a.Ea && "function" == typeof a.Ea) return a.Ea();
      if (!a.ja || "function" != typeof a.ja) {
        if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (Aa(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return gc(a);
        }
      }
    },
    qi = function (a, b) {
      if ("function" == typeof a.every) return a.every(b, void 0);
      if (Aa(a) || "string" === typeof a) return Array.prototype.every.call(a, b, void 0);
      for (var c = pi(a), d = oi(a), e = d.length, f = 0; f < e; f++) if (!b.call(void 0, d[f], c && c[f], a)) return !1;
      return !0;
    };
  var ri = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    si = function (a, b) {
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
    ti = function (a, b) {
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
    ui = function (a, b, c) {
      if (Array.isArray(b)) for (var d = 0; d < b.length; d++) ui(a, String(b[d]), c);
      else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
    },
    vi = function (a, b) {
      var c = [];
      for (b = b || 0; b < a.length; b += 2) ui(a[b], a[b + 1], c);
      return c.join("&");
    },
    wi = function (a, b) {
      var c = 2 == arguments.length ? vi(arguments[1], 0) : vi(arguments, 1);
      return ti(a, c);
    },
    xi = function (a, b, c) {
      c = null != c ? "=" + encodeURIComponent(String(c)) : "";
      return ti(a, b + c);
    },
    yi = function (a, b, c) {
      for (; 0 <= (b = a.indexOf("format", b)) && b < c; ) {
        var d = a.charCodeAt(b - 1);
        if (38 == d || 63 == d) if (((d = a.charCodeAt(b + 6)), !d || 61 == d || 38 == d || 35 == d)) return b;
        b += 7;
      }
      return -1;
    },
    zi = /#|$/,
    Ai = /[?&]($|#)/;
  var Bi = function (a) {
    this.h = this.j = this.o = "";
    this.u = null;
    this.l = this.g = "";
    this.s = !1;
    var b;
    a instanceof Bi
      ? ((this.s = a.s),
        Lc(this, a.o),
        (this.j = a.j),
        (this.h = a.h),
        Ci(this, a.u),
        (this.g = a.g),
        Mc(this, a.i.clone()),
        (this.l = a.l))
      : a && (b = String(a).match(ri))
      ? ((this.s = !1),
        Lc(this, b[1] || "", !0),
        (this.j = Di(b[2] || "")),
        (this.h = Di(b[3] || "", !0)),
        Ci(this, b[4]),
        (this.g = Di(b[5] || "", !0)),
        Mc(this, b[6] || "", !0),
        (this.l = Di(b[7] || "")))
      : ((this.s = !1), (this.i = new Ei(null, this.s)));
  };
  Bi.prototype.toString = function () {
    var a = [],
      b = this.o;
    b && a.push(Fi(b, Gi, !0), ":");
    var c = this.h;
    if (c || "file" == b)
      a.push("//"),
        (b = this.j) && a.push(Fi(b, Gi, !0), "@"),
        a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        (c = this.u),
        null != c && a.push(":", String(c));
    if ((c = this.g)) this.h && "/" != c.charAt(0) && a.push("/"), a.push(Fi(c, "/" == c.charAt(0) ? Hi : Ii, !0));
    (c = this.i.toString()) && a.push("?", c);
    (c = this.l) && a.push("#", Fi(c, Ji));
    return a.join("");
  };
  Bi.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.o;
    c ? Lc(b, a.o) : (c = !!a.j);
    c ? (b.j = a.j) : (c = !!a.h);
    c ? (b.h = a.h) : (c = null != a.u);
    var d = a.g;
    if (c) Ci(b, a.u);
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
    c ? Mc(b, a.i.clone()) : (c = !!a.l);
    c && (b.l = a.l);
    return b;
  };
  Bi.prototype.clone = function () {
    return new Bi(this);
  };
  var Lc = function (a, b, c) {
      a.o = c ? Di(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ""));
    },
    Ci = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("F`" + b);
        a.u = b;
      } else a.u = null;
    },
    Mc = function (a, b, c) {
      b instanceof Ei ? ((a.i = b), Ki(a.i, a.s)) : (c || (b = Fi(b, Li)), (a.i = new Ei(b, a.s)));
    },
    Ni = function () {
      var a = Mi,
        b = Ig();
      a.i.set("zx", b);
      return a;
    },
    Kc = function (a) {
      return a instanceof Bi ? a.clone() : new Bi(a);
    },
    Di = function (a, b) {
      return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
    },
    Fi = function (a, b, c) {
      return "string" === typeof a ? ((a = encodeURI(a).replace(b, Oi)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
    Oi = function (a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    Gi = /[#\/\?@]/g,
    Ii = /[#\?:]/g,
    Hi = /[#\?]/g,
    Li = /[#\?@]/g,
    Ji = /#/g,
    Ei = function (a, b) {
      this.h = this.g = null;
      this.i = a || null;
      this.j = !!b;
    },
    Pi = function (a) {
      a.g ||
        ((a.g = new Map()),
        (a.h = 0),
        a.i &&
          si(a.i, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
    };
  k = Ei.prototype;
  k.W = function () {
    Pi(this);
    return this.h;
  };
  k.add = function (a, b) {
    Pi(this);
    this.i = null;
    a = Qi(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, (c = []));
    c.push(b);
    this.h += 1;
    return this;
  };
  k.remove = function (a) {
    Pi(this);
    a = Qi(this, a);
    return this.g.has(a) ? ((this.i = null), (this.h -= this.g.get(a).length), this.g.delete(a)) : !1;
  };
  k.clear = function () {
    this.g = this.i = null;
    this.h = 0;
  };
  k.ha = function () {
    Pi(this);
    return 0 == this.h;
  };
  var Ri = function (a, b) {
    Pi(a);
    b = Qi(a, b);
    return a.g.has(b);
  };
  k = Ei.prototype;
  k.Xa = function (a) {
    var b = this.ja();
    return ta(b, a);
  };
  k.forEach = function (a, b) {
    Pi(this);
    this.g.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  k.Ea = function () {
    Pi(this);
    for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  k.ja = function (a) {
    Pi(this);
    var b = [];
    if ("string" === typeof a) Ri(this, a) && (b = b.concat(this.g.get(Qi(this, a))));
    else {
      a = Array.from(this.g.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  k.set = function (a, b) {
    Pi(this);
    this.i = null;
    a = Qi(this, a);
    Ri(this, a) && (this.h -= this.g.get(a).length);
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
    var a = new Ei();
    a.i = this.i;
    this.g && ((a.g = new Map(this.g)), (a.h = this.h));
    return a;
  };
  var Qi = function (a, b) {
      b = String(b);
      a.j && (b = b.toLowerCase());
      return b;
    },
    Ki = function (a, b) {
      b &&
        !a.j &&
        (Pi(a),
        (a.i = null),
        a.g.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e &&
            (this.remove(d), this.remove(e), 0 < c.length && ((this.i = null), this.g.set(Qi(this, e), za(c)), (this.h += c.length)));
        }, a));
      a.j = b;
    };
  var Ui = function () {
      this.g = {};
      Si(this, n._notes_flag_initialData || {});
      this.g.n_afoiu && Ti(this);
    },
    Si = function (a, b) {
      x(ig, function (c) {
        void 0 !== b[c] && (a.g[c] = b[c]);
      });
    },
    Ti = function (a) {
      var b = {};
      new Bi(self.location.href).i.forEach(function (c, d) {
        b[d] = c;
      });
      Si(a, b);
    },
    Vi = function (a, b) {
      a = a.g[b];
      return !!a && "false" !== a;
    },
    Wi = function (a) {
      var b = dd();
      return String(b.g[a] || "");
    },
    Xi = function (a) {
      a = dd().g[a];
      return isNaN(a) ? 0 : Number(a);
    },
    Yi = function (a) {
      a = a.g.n_sit;
      return Array.isArray(a) ? a : "string" === typeof a ? a.split(",") : [];
    },
    Zi = function () {
      var a = dd();
      return Yi(a).filter(function (b) {
        return Vi(a, "n_eau") || 0 != b.lastIndexOf("audio/", 0);
      });
    },
    dd = function () {
      return zh(Ui);
    };
  var $i = function () {
    this.g = {};
    this.h = null;
    this.l = {};
    this.i = {};
    this.j = {};
  };
  $i.prototype.update = function (a) {
    var b = !1,
      c = mc(this.g);
    Bd(
      a.annotations || [],
      function (d) {
        var e = d.id,
          f = this.g[e];
        kc(c, e);
        f ? ((e = mi(f)), f.update(d), (b = b || e != mi(f))) : ((f = new ki(d)), f.ha() || ((b = !0), (this.g[e] = f)));
      },
      this
    );
    b = b || !jc(c);
    x(
      c,
      function (d, e) {
        kc(this.g, e);
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
          mi(d) || (d.j ? (this.h = d) : d.h ? (this.j[e] = d) : d.i ? (this.i[e] = d) : d.g && (this.l[e] = d));
        },
        this
      ));
    return b;
  };
  var aj = function (a) {
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
  $i.prototype.remove = function (a) {
    a = a.o || "";
    if (!this.g[a]) return !1;
    var b = Vh.L(),
      c = !!this.g[a];
    b = b.format(new Th());
    this.g[a].l = b;
    kc(this.l, a);
    kc(this.i, a);
    kc(this.j, a);
    this.h && (this.h.o || "") == a && (this.h = null);
    return c;
  };
  var bj = function (a) {
      return !a.h || mi(a.h) ? null : a.h;
    },
    Hc = function (a) {
      return Zb(a.l, function (b) {
        return !mi(b);
      });
    },
    cj = function (a) {
      return Zb(a.i, function (b) {
        return !mi(b);
      });
    },
    dj = function (a) {
      return Zb(a.j, function (b) {
        return !mi(b);
      });
    };
  var ej = function (a) {
    this.I = v(a);
  };
  E(ej, J);
  var fj = function (a) {
    this.I = v(a);
  };
  E(fj, J);
  var gj = function (a) {
    this.g = a.name || "default";
    this.h = a.origin || "none";
  };
  gj.prototype.ka = function () {
    return this.g;
  };
  gj.prototype.update = function (a) {
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
  var hj = function (a) {
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
  var ij = function (a, b) {
    this.type = a;
    this.i = this.target = b;
    this.defaultPrevented = this.j = !1;
  };
  ij.prototype.stopPropagation = function () {
    this.j = !0;
  };
  ij.prototype.g = function () {
    this.defaultPrevented = !0;
  };
  var jj = (function () {
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
  var lj = function (a, b) {
    ij.call(this, a ? a.type : "");
    this.relatedTarget = this.i = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.l = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.o = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.h = null;
    if (a) {
      var c = (this.type = a.type),
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.i = b;
      (b = a.relatedTarget)
        ? Me && (Ge(b, "nodeName") || (b = null))
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
      this.o = Oe ? a.metaKey : a.ctrlKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : kj[a.pointerType] || "";
      this.state = a.state;
      this.h = a;
      a.defaultPrevented && lj.O.g.call(this);
    }
  };
  G(lj, ij);
  var kj = { 2: "touch", 3: "pen", 4: "mouse" };
  lj.prototype.stopPropagation = function () {
    lj.O.stopPropagation.call(this);
    this.h.stopPropagation ? this.h.stopPropagation() : (this.h.cancelBubble = !0);
  };
  lj.prototype.g = function () {
    lj.O.g.call(this);
    var a = this.h;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var mj = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    nj = function (a) {
      return !(!a || !a[mj]);
    };
  var oj = 0;
  var pj = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.oc = e;
      this.key = ++oj;
      this.removed = this.hc = !1;
    },
    qj = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.oc = null;
    };
  var rj = function (a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  };
  rj.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var g = sj(a, b, d, e);
    -1 < g ? ((b = a[g]), c || (b.hc = !1)) : ((b = new pj(b, this.src, f, !!d, e)), (b.hc = c), a.push(b));
    return b;
  };
  rj.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = sj(e, b, c, d);
    return -1 < b ? (qj(e[b]), va(e, b), 0 == e.length && (delete this.g[a], this.h--), !0) : !1;
  };
  var tj = function (a, b) {
    var c = b.type;
    c in a.g && wa(a.g[c], b) && (qj(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
  };
  rj.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.g)
      if (!a || c == a) {
        for (var d = this.g[c], e = 0; e < d.length; e++) ++b, qj(d[e]);
        delete this.g[c];
        this.h--;
      }
    return b;
  };
  rj.prototype.Ob = function (a, b, c, d) {
    a = this.g[a.toString()];
    var e = -1;
    a && (e = sj(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  rj.prototype.hasListener = function (a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : "",
      e = void 0 !== b;
    return cc(this.g, function (f) {
      for (var g = 0; g < f.length; ++g) if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
      return !1;
    });
  };
  var sj = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.listener == b && f.capture == !!c && f.oc == d) return e;
    }
    return -1;
  };
  var uj = "closure_lm_" + ((1e6 * Math.random()) | 0),
    vj = {},
    wj = 0,
    yj = function (a, b, c, d, e) {
      if (d && d.once) return xj(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) yj(a, b[f], c, d, e);
        return null;
      }
      c = zj(c);
      return nj(a) ? a.listen(b, c, vd(d) ? !!d.capture : !!d, e) : Aj(a, b, c, !1, d, e);
    },
    Aj = function (a, b, c, d, e, f) {
      if (!b) throw Error("H");
      var g = vd(e) ? !!e.capture : !!e,
        h = Bj(a);
      h || (a[uj] = h = new rj(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = Cj();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) jj || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Dj(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("I");
      wj++;
      return c;
    },
    Cj = function () {
      var a = Ej,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    xj = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) xj(a, b[f], c, d, e);
        return null;
      }
      c = zj(c);
      return nj(a) ? a.td(b, c, vd(d) ? !!d.capture : !!d, e) : Aj(a, b, c, !0, d, e);
    },
    Fj = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Fj(a, b[f], c, d, e);
      else (d = vd(d) ? !!d.capture : !!d), (c = zj(c)), nj(a) ? a.X(b, c, d, e) : a && (a = Bj(a)) && (b = a.Ob(b, c, d, e)) && Gj(b);
    },
    Gj = function (a) {
      if ("number" !== typeof a && a && !a.removed) {
        var b = a.src;
        if (nj(b)) tj(b.Ja, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(Dj(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          wj--;
          (c = Bj(b)) ? (tj(c, a), 0 == c.h && ((c.src = null), (b[uj] = null))) : qj(a);
        }
      }
    },
    Dj = function (a) {
      return a in vj ? vj[a] : (vj[a] = "on" + a);
    },
    Ej = function (a, b) {
      if (a.removed) a = !0;
      else {
        b = new lj(b, this);
        var c = a.listener,
          d = a.oc || a.src;
        a.hc && Gj(a);
        a = c.call(d, b);
      }
      return a;
    },
    Bj = function (a) {
      a = a[uj];
      return a instanceof rj ? a : null;
    },
    Hj = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    zj = function (a) {
      if ("function" === typeof a) return a;
      a[Hj] ||
        (a[Hj] = function (b) {
          return a.handleEvent(b);
        });
      return a[Hj];
    };
  var Ij = function (a, b) {
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
  Ij.prototype.ka = function () {
    return this.s;
  };
  var Jj = function (a) {
    return 11 == a.h || 10 == a.h;
  };
  var Kj = function (a, b, c) {
    this.vd = a;
    this.h = b.name || null;
    this.g = {};
    for (a = 0; a < c.length; a++) (b = c[a]), (this.g[b.g] = b);
  };
  Kj.prototype.ka = function () {
    return this.h;
  };
  var Lj = function (a) {
    a = fc(a.g);
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
    return Mj(this, a.g, b);
  };
  k.set = function (a, b) {
    Nj(this, a.g, b);
  };
  k.add = function (a, b) {
    Oj(this, a.g, b);
  };
  k.clear = function (a) {
    Pj(this, a.g);
  };
  k.V = function (a) {
    if (!a || this.constructor != a.constructor) return !1;
    for (var b = Lj(this.getDescriptor()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = d.g;
      if ((null != this.oa[e]) != (null != a.oa[e])) return !1;
      if (null != this.oa[e]) {
        var f = Jj(d),
          g = Qj(this, e);
        e = Qj(a, e);
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
  var Rj = function (a, b) {
    for (var c = Lj(a.getDescriptor()), d = 0; d < c.length; d++) {
      var e = c[d],
        f = e.g;
      if (null != b.oa[f]) {
        a.g && delete a.g[e.g];
        var g = Jj(e);
        if (e.i) {
          e = Qj(b, f) || [];
          for (var h = 0; h < e.length; h++) Oj(a, f, g ? e[h].clone() : e[h]);
        } else (e = Qj(b, f)), g ? ((g = Qj(a, f)) ? Rj(g, e) : Nj(a, f, e.clone())) : Nj(a, f, e);
      }
    }
  };
  P.prototype.clone = function () {
    var a = new this.constructor();
    a != this && ((a.oa = {}), a.g && (a.g = {}), Rj(a, this));
    return a;
  };
  var Qj = function (a, b) {
      a = a.oa[b];
      return null == a ? null : a;
    },
    Mj = function (a, b, c) {
      var d = Qj(a, b);
      return a.h[b].i ? d[c || 0] : d;
    },
    Sj = function (a, b) {
      return a.h[b].i ? (null != a.oa[b] ? a.oa[b].length : 0) : null != a.oa[b] ? 1 : 0;
    },
    Nj = function (a, b, c) {
      a.oa[b] = c;
      a.g && (a.g[b] = c);
    },
    Oj = function (a, b, c) {
      a.oa[b] || (a.oa[b] = []);
      a.oa[b].push(c);
      a.g && delete a.g[b];
    },
    Pj = function (a, b) {
      delete a.oa[b];
      a.g && delete a.g[b];
    },
    Q = function (a, b) {
      var c = [],
        d = b[0],
        e;
      for (e in b) 0 != e && c.push(new Ij(e, b[e]));
      return new Kj(a, d, c);
    };
  var Tj = function () {};
  Tj.prototype.j = function (a, b) {
    Jj(a) && Uj(this, b);
  };
  Tj.prototype.i = function (a, b) {
    if (Jj(a)) return b instanceof P || ((a = new (a.j.prototype.getDescriptor().vd)()), sc(this, a, b), (b = a)), b;
    if (14 == a.h) return "string" === typeof b && Vj.test(b) && ((a = Number(b)), 0 < a) ? a : b;
    if (!a.l) return b;
    a = a.j;
    if (a === String) {
      if ("number" === typeof b) return String(b);
    } else if (a === Number && "string" === typeof b && ("Infinity" === b || "-Infinity" === b || "NaN" === b || Vj.test(b)))
      return Number(b);
    return b;
  };
  var Vj = /^-?[0-9]+$/;
  var Wj = function () {
    this.g = [];
    this.l = { value: 0, length: 0 };
    this.o = { value: Xf, length: 0 };
    this.h = new DataView(new ArrayBuffer(8));
  };
  E(Wj, Tj);
  var Uj = function (a, b) {
    if (null == b) return [];
    a.g = [];
    for (var c = Lj(b.getDescriptor()), d = 0; d < c.length; d++) {
      var e = c[d];
      if (b.has(e))
        if (e.i)
          if (e.o) {
            var f = a,
              g = b,
              h = e;
            e = f.g;
            Xj(f, (h.g << 3) | 2);
            for (var l = e.length, m = 0, p = Sj(g, h.g); m < p; m++) {
              var u = g.get(h, m);
              f.j(h, u, !0);
            }
            g = e.splice(l, e.length - l);
            Xj(f, g.length);
            e.splice.apply(e, [e.length, 0].concat(g));
          } else for (f = 0, g = Sj(b, e.g); f < g; f++) (h = b.get(e, f)), a.j(e, h);
        else a.j(e, b.get(e));
    }
    return a.g;
  };
  Wj.prototype.j = function (a, b, c) {
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
        Xj(this, (a.g << 3) | c);
        c = !0;
      }
      c = !c;
    }
    if (!c)
      switch (a.h) {
        default:
          throw Error("J`" + a.h);
        case 17:
          Xj(this, (b << 1) ^ -(b >>> 31));
          break;
        case 18:
          a = bg(b);
          a = Wf(a, 1).xor(Pf(Zf(a, 63)));
          Yj(this, a);
          break;
        case 8:
          Xj(this, b ? 1 : 0);
          break;
        case 5:
          0 < b ? Xj(this, b) : Yj(this, $f(b));
          break;
        case 3:
        case 4:
          Yj(this, bg(b));
          break;
        case 14:
        case 13:
          Xj(this, b);
          break;
        case 6:
        case 16:
          Zj(this, bg(b), 8);
          break;
        case 1:
          this.h.setFloat64(0, b, !0);
          for (a = 0; 8 > a; a++) this.g.push(this.h.getUint8(a));
          break;
        case 9:
          if (null != b)
            for (a = unescape(encodeURIComponent(b)), Xj(this, a.length), b = 0; b < a.length; b++) this.g.push(a.charCodeAt(b));
          break;
        case 12:
          if (null != b) for (Xj(this, b.length), a = 0; a < b.length; a++) this.g.push(b.charCodeAt(a));
          break;
        case 10:
          b = Uj(new Wj(), b);
          Ba(this.g, b);
          Xj(this, (a.g << 3) | 4);
          break;
        case 11:
          b = Uj(new Wj(), b);
          Xj(this, b.length);
          Ba(this.g, b);
          break;
        case 7:
          Zj(this, Yf(b), 4);
          break;
        case 15:
          Zj(this, $f(b), 4);
          break;
        case 2:
          for (this.h.setFloat32(0, b, !0), a = 0; 4 > a; a++) this.g.push(this.h.getUint8(a));
      }
  };
  var sc = function (a, b, c) {
    if (null != c) {
      c instanceof ArrayBuffer && (c = new Uint8Array(c));
      for (var d = b.getDescriptor(), e = 0; e < c.length; ) {
        var f = ak(a, c.subarray(e)),
          g = f.value,
          h = g >> 3;
        g &= 7;
        e += f.length;
        if ((f = d.g[parseInt(h, 10)] || null))
          if (f.o)
            for (h = ak(a, c.subarray(e)), g = h.value, e += h.length; 0 < g && e < c.length; ) {
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
              l = bk(h, e).length;
              break;
            case 1:
              l = 8;
              break;
            case 2:
              e = bk(h, e);
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
  Wj.prototype.i = function (a, b) {
    var c = null,
      d = a.h,
      e = bk(this, b),
      f = e.length;
    switch (d) {
      case 17:
        c = e.value.g;
        c = (c >>> 1) ^ -(c & 1);
        break;
      case 18:
        c = e.value;
        c = Zf(c, 1)
          .xor(Pf(c.and(Uf)))
          .toString();
        break;
      case 8:
        c = e.value.V(Uf);
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
        c = new Wb(ck(c.subarray(0, 4), !0), ck(c.subarray(4, 8), !0)).toString();
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
        c = dk(c);
        c = decodeURIComponent(escape(c));
        f = e.length + e.value.g;
        break;
      case 12:
        c = b.subarray(e.length, e.length + e.value.g);
        c = dk(c);
        f = e.length + e.value.g;
        break;
      case 10:
        f = c = new (a.j.prototype.getDescriptor().vd)();
        e = b;
        a = f.getDescriptor();
        for (d = 0; ; ) {
          var g = ak(this, e),
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
        b = bk(this, b.subarray(f));
        f += b.length;
        break;
      case 11:
        f = e.length + e.value.g;
        b = b.subarray(e.length, f);
        c = new (a.j.prototype.getDescriptor().vd)();
        sc(this, c, b);
        break;
      case 7:
      case 15:
        c = ck(b.subarray(0, 4), 15 == d);
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
  var Xj = function (a, b) {
      do {
        var c = b & 127;
        b >>>= 7;
        0 < b && (c |= 128);
        a.g.push(c);
      } while (0 < b);
    },
    Yj = function (a, b) {
      var c = $f(127);
      do {
        var d = b.and(c).g;
        b = Zf(b, 7);
        0 < Sf(b, Xf) && (d |= 128);
        a.g.push(d);
      } while (0 < Sf(b, Xf));
    },
    bk = function (a, b) {
      a = a.o;
      for (var c = Yf(0), d = 0; d < b.length && ((c = c.or(Wf($f(b[d] & 127), 7 * d))), 0 != (b[d] & 128)); d++);
      a.value = c;
      a.length = d + 1;
      return a;
    },
    ak = function (a, b) {
      a = a.l;
      for (var c = 0, d = 0; d < b.length && ((c |= (b[d] & 127) << (7 * d)), 0 != (b[d] & 128)); d++);
      a.value = c;
      a.length = d + 1;
      return a;
    },
    Zj = function (a, b, c) {
      for (var d = $f(255), e = 0; e < c; e++) {
        var f = b.and(d).g;
        a.g.push(f);
        b = Zf(b, 8);
      }
    },
    ck = function (a, b) {
      for (var c = 0, d = 0; d < a.length; d++) c |= a[d] << (8 * d);
      b || (c >>>= 0);
      return c;
    },
    dk = function (a) {
      var b = "";
      a = new Uint16Array(a);
      for (var c = 0; c < a.length; c += 65536) b += String.fromCharCode.apply(null, a.subarray(c, c + Math.min(65536, a.length - c)));
      return b;
    };
  var tc = new Wj();
  var ek = { fi: 0, bi: 1, ei: 2, ci: 3, di: 4 },
    fk = function () {
      P.call(this);
    };
  G(fk, P);
  var gk = null,
    hk = function () {
      P.call(this);
    };
  G(hk, P);
  var ik = null,
    jk = function () {
      P.call(this);
    };
  G(jk, P);
  var kk = null,
    lk = function () {
      P.call(this);
    };
  G(lk, P);
  var mk = null;
  fk.prototype.getDescriptor = function () {
    var a = gk;
    a ||
      (gk = a =
        Q(fk, {
          0: { name: "IntPackedColor", H: "ink.proto.IntPackedColor" },
          1: { name: "argb", m: 13, type: Number },
          2: { name: "premultiplied", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  fk.getDescriptor = fk.prototype.getDescriptor;
  hk.prototype.getDescriptor = function () {
    var a = ik;
    a ||
      (ik = a =
        Q(hk, { 0: { name: "Point", H: "ink.proto.Point" }, 1: { name: "x", m: 2, type: Number }, 2: { name: "y", m: 2, type: Number } }));
    return a;
  };
  hk.getDescriptor = hk.prototype.getDescriptor;
  jk.prototype.getDescriptor = function () {
    var a = kk;
    a ||
      (kk = a =
        Q(jk, {
          0: { name: "Rect", H: "ink.proto.Rect" },
          1: { name: "xlow", m: 2, type: Number },
          2: { name: "xhigh", m: 2, type: Number },
          3: { name: "ylow", m: 2, type: Number },
          4: { name: "yhigh", m: 2, type: Number }
        }));
    return a;
  };
  jk.getDescriptor = jk.prototype.getDescriptor;
  lk.prototype.getDescriptor = function () {
    var a = mk;
    a ||
      (mk = a =
        Q(lk, {
          0: { name: "Transform", H: "ink.proto.Transform" },
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
  lk.getDescriptor = lk.prototype.getDescriptor;
  var nk = { zg: 0, mh: 1, lh: 2, jh: 3, kh: 4, rg: 5, qg: 6, og: 7, pg: 8, dj: 9, cj: 10, aj: 11, bj: 12, Mi: 13 },
    ok = { yg: 0, LEFT: 1, gg: 2, RIGHT: 3, wh: 4 },
    pk = function () {
      P.call(this);
    };
  G(pk, P);
  var qk = null,
    rk = function () {
      P.call(this);
    };
  G(rk, P);
  var sk = null;
  rk.prototype.ka = function () {
    return Mj(this, 2);
  };
  var tk = function () {
    P.call(this);
  };
  G(tk, P);
  var uk = null;
  tk.prototype.getFont = function () {
    return Mj(this, 3);
  };
  tk.prototype.setFont = function (a) {
    Nj(this, 3, a);
  };
  tk.prototype.clearFont = function () {
    Pj(this, 3);
  };
  var vk = function () {
    P.call(this);
  };
  G(vk, P);
  var wk = null,
    xk = function () {
      P.call(this);
    };
  G(xk, P);
  var yk = null,
    zk = function () {
      P.call(this);
    };
  G(zk, P);
  var Ak = null;
  zk.prototype.getFont = function () {
    return Mj(this, 3);
  };
  zk.prototype.setFont = function (a) {
    Nj(this, 3, a);
  };
  zk.prototype.clearFont = function () {
    Pj(this, 3);
  };
  pk.prototype.getDescriptor = function () {
    var a = qk;
    a ||
      (qk = a =
        Q(pk, {
          0: { name: "FontAttributes", H: "ink.proto.text.FontAttributes" },
          1: { name: "family", m: 9, type: String },
          2: { name: "is_italic", m: 8, type: Boolean },
          3: { name: "weight", m: 5, defaultValue: 400, type: Number }
        }));
    return a;
  };
  pk.getDescriptor = pk.prototype.getDescriptor;
  rk.prototype.getDescriptor = function () {
    var a = sk;
    a ||
      (sk = a =
        Q(rk, {
          0: { name: "Font", H: "ink.proto.text.Font" },
          1: { name: "postscript_font", m: 14, defaultValue: 0, type: nk },
          2: { name: "name", m: 9, type: String },
          5: { name: "attributes", m: 11, type: pk },
          3: { name: "asset_id", m: 9, type: String },
          4: { name: "resource_id", m: 13, type: Number }
        }));
    return a;
  };
  rk.getDescriptor = rk.prototype.getDescriptor;
  tk.prototype.getDescriptor = function () {
    var a = uk;
    a ||
      (uk = a =
        Q(tk, {
          0: { name: "Line", H: "ink.proto.text.Line" },
          1: { name: "text", m: 9, type: String },
          2: { name: "origin_fraction", m: 11, type: hk },
          3: { name: "font", m: 11, type: rk }
        }));
    return a;
  };
  tk.getDescriptor = tk.prototype.getDescriptor;
  vk.prototype.getDescriptor = function () {
    var a = wk;
    a || (wk = a = Q(vk, { 0: { name: "Layout", H: "ink.proto.text.Layout" }, 1: { name: "line", M: !0, m: 11, type: tk } }));
    return a;
  };
  vk.getDescriptor = vk.prototype.getDescriptor;
  xk.prototype.getDescriptor = function () {
    var a = yk;
    a ||
      (yk = a =
        Q(xk, {
          0: { name: "DropShadow", H: "ink.proto.text.DropShadow" },
          1: { name: "rgba", m: 13, type: Number },
          2: { name: "radius_fraction", m: 2, type: Number },
          3: { name: "dx_fraction", m: 2, type: Number },
          4: { name: "dy_fraction", m: 2, type: Number }
        }));
    return a;
  };
  xk.getDescriptor = xk.prototype.getDescriptor;
  zk.prototype.getDescriptor = function () {
    var a = Ak;
    a ||
      (Ak = a =
        Q(zk, {
          0: { name: "Text", H: "ink.proto.text.Text" },
          1: { name: "text", m: 9, type: String },
          3: { name: "font", m: 11, type: rk },
          4: { name: "font_size_fraction", m: 2, type: Number },
          5: { name: "rgba", m: 13, defaultValue: 255, type: Number },
          6: { name: "alignment", m: 14, defaultValue: 0, type: ok },
          7: { name: "shadow", m: 11, type: xk },
          8: { name: "layout", m: 11, type: vk },
          9: { name: "background_color", m: 11, type: fk },
          10: { name: "border_color", m: 11, type: fk },
          11: { name: "border_width_fraction", m: 2, type: Number },
          12: { name: "padding_fraction", m: 2, type: Number }
        }));
    return a;
  };
  zk.getDescriptor = zk.prototype.getDescriptor;
  var Bk = { Ci: 0, Bi: 1, zi: 2, Ai: 3 },
    Ck = { Ah: 0, Bh: 1, Ch: 2 },
    Dk = function () {
      P.call(this);
    };
  G(Dk, P);
  var Ek = null,
    Fk = { jj: 0, Aj: 1, POINTS: 2, Bj: 3, uj: 6, li: 4, mi: 5 },
    Gk = function () {
      P.call(this);
    };
  G(Gk, P);
  var Mk = null,
    Nk = function () {
      P.call(this);
    };
  G(Nk, P);
  var Ok = null,
    Pk = function () {
      P.call(this);
    };
  G(Pk, P);
  var Qk = null;
  Pk.prototype.getFont = function () {
    return Mj(this, 1);
  };
  Pk.prototype.setFont = function (a) {
    Nj(this, 1, a);
  };
  Pk.prototype.clearFont = function () {
    Pj(this, 1);
  };
  var Rk = function () {
    P.call(this);
  };
  G(Rk, P);
  var Sk = null,
    Tk = function () {
      P.call(this);
    };
  G(Tk, P);
  var Uk = null,
    Vk = { UNKNOWN: 0, bh: 1, Ii: 2, oi: 3, Zi: 4 },
    Wk = function () {
      P.call(this);
    };
  G(Wk, P);
  var Xk = null,
    Yk = { kj: 0, Ye: 1, Ze: 2 },
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
    cl = function () {
      P.call(this);
    };
  G(cl, P);
  var dl = null,
    el = function () {
      P.call(this);
    };
  G(el, P);
  var fl = null,
    gl = { ij: 0, cg: 1, sh: 2, Lh: 3, Yf: 4, ej: 15, Xg: 6, nh: 8, ji: 12, hg: 13, pi: 14 },
    hl = { ii: 0, gi: 1, hi: 2 },
    il = function () {
      P.call(this);
    };
  G(il, P);
  var jl = null,
    kl = function () {
      P.call(this);
    };
  G(kl, P);
  var ll = null,
    ml = {
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
  Dk.prototype.getDescriptor = function () {
    var a = Ek;
    a ||
      (Ek = a =
        Q(Dk, {
          0: { name: "ToolSize", H: "ink.proto.ToolSize" },
          7: { name: "stroke_width", m: 2, type: Number },
          8: { name: "units", m: 14, defaultValue: 1, type: Fk }
        }));
    return a;
  };
  Dk.getDescriptor = Dk.prototype.getDescriptor;
  Gk.prototype.getDescriptor = function () {
    var a = Mk;
    a ||
      (Mk = a =
        Q(Gk, {
          0: { name: "PusherToolParams", H: "ink.proto.PusherToolParams" },
          3: { name: "manipulate_photos", m: 8, type: Boolean },
          1: { name: "manipulate_stickers", m: 8, type: Boolean },
          2: { name: "manipulate_text", m: 8, type: Boolean }
        }));
    return a;
  };
  Gk.getDescriptor = Gk.prototype.getDescriptor;
  Nk.prototype.getDescriptor = function () {
    var a = Ok;
    a ||
      (Ok = a =
        Q(Nk, {
          0: { name: "ShapeToolParams", H: "ink.proto.ShapeToolParams" },
          1: { name: "shape_kind", m: 14, defaultValue: 0, type: Bk },
          2: { name: "fill_color", m: 11, type: fk },
          3: { name: "start_linecap", m: 14, defaultValue: 0, type: Ck },
          4: { name: "end_linecap", m: 14, defaultValue: 0, type: Ck }
        }));
    return a;
  };
  Nk.getDescriptor = Nk.prototype.getDescriptor;
  Pk.prototype.getDescriptor = function () {
    var a = Qk;
    a ||
      (Qk = a =
        Q(Pk, {
          0: { name: "TextToolParams", H: "ink.proto.TextToolParams" },
          1: { name: "font", m: 11, type: rk },
          2: { name: "alignment", m: 14, defaultValue: 0, type: ok },
          3: { name: "shadow", m: 11, type: Rk },
          4: { name: "background_color", m: 11, type: fk },
          5: { name: "border_color", m: 11, type: fk },
          6: { name: "edit_existing_text", m: 8, defaultValue: !0, type: Boolean },
          7: { name: "initial_width_on_screen", m: 2, type: Number },
          8: { name: "initial_height_on_screen", m: 2, type: Number }
        }));
    return a;
  };
  Pk.getDescriptor = Pk.prototype.getDescriptor;
  Rk.prototype.getDescriptor = function () {
    var a = Sk;
    a ||
      (Sk = a =
        Q(Rk, {
          0: { name: "TextToolShadowParams", H: "ink.proto.TextToolShadowParams" },
          1: { name: "color", m: 11, type: fk },
          2: { name: "radius_fraction_of_font_size", m: 2, type: Number },
          3: { name: "dx_fraction_of_font_size", m: 2, type: Number },
          4: { name: "dy_fraction_of_font_size", m: 2, type: Number }
        }));
    return a;
  };
  Rk.getDescriptor = Rk.prototype.getDescriptor;
  Tk.prototype.getDescriptor = function () {
    var a = Uk;
    a ||
      (Uk = a =
        Q(Tk, {
          0: { name: "TipShapeParams", H: "ink.proto.TipShapeParams" },
          1: { name: "size_ratio", m: 2, defaultValue: 1, type: Number },
          2: { name: "radius_behavior", m: 14, defaultValue: 1, type: Vk },
          3: { name: "max_radius_speed_cm_per_sec", m: 2, defaultValue: 200, type: Number },
          4: { name: "min_radius_speed_cm_per_sec", m: 2, defaultValue: 0, type: Number },
          5: { name: "size_drag_factor", m: 2, defaultValue: 0.85, type: Number }
        }));
    return a;
  };
  Tk.getDescriptor = Tk.prototype.getDescriptor;
  Wk.prototype.getDescriptor = function () {
    var a = Xk;
    a ||
      (Xk = a =
        Q(Wk, {
          0: { name: "CustomLineParams", H: "ink.proto.CustomLineParams" },
          3: { name: "tip_shape_params", m: 11, type: Tk },
          4: { name: "expand_small_strokes", m: 8, defaultValue: !1, type: Boolean },
          5: { name: "tip_type", m: 14, defaultValue: 1, type: Yk }
        }));
    return a;
  };
  Wk.getDescriptor = Wk.prototype.getDescriptor;
  Zk.prototype.getDescriptor = function () {
    var a = $k;
    a ||
      ($k = a =
        Q(Zk, {
          0: { name: "TextPusherToolParams", H: "ink.proto.TextPusherToolParams" },
          1: { name: "pusher_params", m: 11, type: Gk },
          2: { name: "text_params", m: 11, type: Pk }
        }));
    return a;
  };
  Zk.getDescriptor = Zk.prototype.getDescriptor;
  al.prototype.getDescriptor = function () {
    var a = bl;
    a ||
      (bl = a =
        Q(al, { 0: { name: "ShapeQueryToolParams", H: "ink.proto.ShapeQueryToolParams" }, 1: { name: "shape_params", m: 11, type: Nk } }));
    return a;
  };
  al.getDescriptor = al.prototype.getDescriptor;
  cl.prototype.getDescriptor = function () {
    var a = dl;
    a ||
      (dl = a =
        Q(cl, {
          0: { name: "LineEffectParams", H: "ink.proto.LineEffectParams" },
          1: { name: "texture_uri", m: 9, type: String },
          2: { name: "winding_texture_period", m: 11, type: Dk },
          3: { name: "u_animation_duration_seconds", m: 2, defaultValue: 0, type: Number },
          4: { name: "tiled_texture_scale", m: 2, defaultValue: 100, type: Number }
        }));
    return a;
  };
  cl.getDescriptor = cl.prototype.getDescriptor;
  el.prototype.getDescriptor = function () {
    var a = fl;
    a ||
      (fl = a =
        Q(el, {
          0: { name: "LineToolParams", H: "ink.proto.LineToolParams" },
          1: { name: "brush_type", m: 14, defaultValue: 0, type: gl },
          2: { name: "custom_line_params", m: 11, type: Wk },
          3: { name: "line_effect_params", m: 11, type: cl },
          4: { name: "self_overlap", m: 14, defaultValue: 1, type: hl }
        }));
    return a;
  };
  el.getDescriptor = el.prototype.getDescriptor;
  il.prototype.getDescriptor = function () {
    var a = jl;
    a ||
      (jl = a =
        Q(il, {
          0: { name: "MagicEraserToolParams", H: "ink.proto.MagicEraserToolParams" },
          1: { name: "erase_text", m: 8, defaultValue: !0, type: Boolean },
          2: { name: "erase_invisible_elements", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  il.getDescriptor = il.prototype.getDescriptor;
  kl.prototype.getDescriptor = function () {
    var a = ll;
    a ||
      (ll = a =
        Q(kl, {
          0: { name: "ToolParams", H: "ink.proto.ToolParams" },
          1: { name: "tool", m: 14, defaultValue: 0, type: ml },
          2: { name: "rgba", m: 13, type: Number },
          3: { name: "tool_size", m: 11, type: Dk },
          4: { name: "pusher_tool_params", m: 11, type: Gk },
          8: { name: "shape_tool_params", m: 11, type: Nk },
          7: { name: "text_tool_params", m: 11, type: Pk },
          5: { name: "line_tool_params", m: 11, type: el },
          21: { name: "text_pusher_tool_params", m: 11, type: Zk },
          10: { name: "shape_query_tool_params", m: 11, type: al },
          9: { name: "magic_eraser_tool_params", m: 11, type: il }
        }));
    return a;
  };
  kl.getDescriptor = kl.prototype.getDescriptor;
  var nl = { NONE: 0, rj: 1, sj: 7, Hi: 2, Wg: 3, tj: 4, Qf: 5, Pf: 6 },
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
    yl = function () {
      P.call(this);
    };
  G(yl, P);
  var zl = null,
    Al = function () {
      P.call(this);
    };
  G(Al, P);
  var Bl = null,
    Cl = { UNKNOWN: 0, yh: 1 },
    Dl = function () {
      P.call(this);
    };
  G(Dl, P);
  var El = null,
    Fl = function () {
      P.call(this);
    };
  G(Fl, P);
  var Gl = null;
  Fl.prototype.C = function () {
    return Mj(this, 2);
  };
  var Hl = function () {
    P.call(this);
  };
  G(Hl, P);
  var Il = null,
    Jl = function () {
      P.call(this);
    };
  G(Jl, P);
  var Kl = null,
    Ll = function () {
      P.call(this);
    };
  G(Ll, P);
  var Ml = null,
    Nl = { UNKNOWN: 0, Rh: 1, Dh: 2, ug: 3, si: 4, ng: 5 },
    Ol = { bg: 1, Ye: 2, Ze: 3 };
  ol.prototype.getDescriptor = function () {
    var a = pl;
    a ||
      (pl = a =
        Q(ol, {
          0: { name: "BackgroundImageInfo", H: "ink.proto.BackgroundImageInfo" },
          1: { name: "uri", m: 9, type: String },
          3: { name: "bounds", m: 11, type: jk }
        }));
    return a;
  };
  ol.getDescriptor = ol.prototype.getDescriptor;
  ql.prototype.getDescriptor = function () {
    var a = rl;
    a ||
      (rl = a =
        Q(ql, {
          0: { name: "GridInfo", H: "ink.proto.GridInfo" },
          1: { name: "uri", m: 9, type: String },
          2: { name: "rgba_multiplier", m: 13, defaultValue: 4294967295, type: Number },
          3: { name: "size_world", m: 2, defaultValue: 50, type: Number },
          4: { name: "origin", m: 11, type: hk }
        }));
    return a;
  };
  ql.getDescriptor = ql.prototype.getDescriptor;
  sl.prototype.getDescriptor = function () {
    var a = tl;
    a ||
      (tl = a =
        Q(sl, {
          0: { name: "LOD", H: "ink.proto.LOD" },
          1: { name: "max_coverage", m: 2, type: Number },
          2: { name: "ctm_blob", m: 12, type: String },
          4: { name: "ctm_scale_factor", m: 2, type: Number },
          3: { name: "draco_blob", m: 12, type: String }
        }));
    return a;
  };
  sl.getDescriptor = sl.prototype.getDescriptor;
  ul.prototype.getDescriptor = function () {
    var a = vl;
    a ||
      (vl = a =
        Q(ul, {
          0: { name: "Stroke", H: "ink.proto.Stroke" },
          1: { name: "shader_type", m: 14, defaultValue: 0, type: nl },
          3: { name: "lod", M: !0, m: 11, type: sl },
          4: { name: "abgr", m: 13, type: Number },
          5: { name: "point_x", M: !0, xd: !0, m: 17, type: Number },
          6: { name: "point_y", M: !0, xd: !0, m: 17, type: Number },
          7: { name: "point_t_ms", M: !0, xd: !0, m: 13, type: Number },
          8: { name: "deprecated_transform", m: 11, type: lk },
          9: { name: "start_time_ms", m: 4, type: String },
          10: { name: "u_animation_duration_seconds", m: 2, type: Number }
        }));
    return a;
  };
  ul.getDescriptor = ul.prototype.getDescriptor;
  wl.prototype.getDescriptor = function () {
    var a = xl;
    a ||
      (xl = a =
        Q(wl, {
          0: { name: "UncompressedStroke", H: "ink.proto.UncompressedStroke" },
          1: { name: "outline", M: !0, m: 11, type: hk },
          2: { name: "rgba", m: 13, type: Number }
        }));
    return a;
  };
  wl.getDescriptor = wl.prototype.getDescriptor;
  yl.prototype.getDescriptor = function () {
    var a = zl;
    a ||
      (zl = a =
        Q(yl, {
          0: { name: "Element", H: "ink.proto.Element" },
          4: { name: "deprecated_uuid", m: 9, type: String },
          5: { name: "minimum_serializer_version", m: 13, type: Number },
          6: { name: "stroke", m: 11, type: ul },
          9: { name: "path", m: 11, type: Ll },
          10: { name: "attributes", m: 11, type: Al },
          11: { name: "text", m: 11, type: zk },
          12: { name: "composite_image_info", m: 11, type: Hl },
          13: { name: "tool_params", m: 11, type: kl },
          14: { name: "shape_spec", m: 11, type: Jl }
        }));
    return a;
  };
  yl.getDescriptor = yl.prototype.getDescriptor;
  Al.prototype.getDescriptor = function () {
    var a = Bl;
    a ||
      (Bl = a =
        Q(Al, {
          0: { name: "ElementAttributes", H: "ink.proto.ElementAttributes" },
          1: { name: "selectable", m: 8, defaultValue: !0, type: Boolean },
          2: { name: "magic_erasable", m: 8, defaultValue: !0, type: Boolean },
          3: { name: "is_sticker", m: 8, defaultValue: !1, type: Boolean },
          10: { name: "is_photo", m: 8, defaultValue: !1, type: Boolean },
          4: { name: "is_text", m: 8, defaultValue: !1, type: Boolean },
          5: { name: "is_group", m: 8, defaultValue: !1, type: Boolean },
          6: { name: "is_zoomable", m: 8, defaultValue: !1, type: Boolean },
          7: { name: "group_type", m: 14, defaultValue: 0, type: Cl },
          9: { name: "is_split_text", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  Al.getDescriptor = Al.prototype.getDescriptor;
  Dl.prototype.getDescriptor = function () {
    var a = El;
    a ||
      (El = a =
        Q(Dl, {
          0: { name: "UncompressedElement", H: "ink.proto.UncompressedElement" },
          1: { name: "uncompressed_stroke", m: 11, type: wl }
        }));
    return a;
  };
  Dl.getDescriptor = Dl.prototype.getDescriptor;
  Fl.prototype.getDescriptor = function () {
    var a = Gl;
    a ||
      (Gl = a =
        Q(Fl, {
          0: { name: "ElementBundle", H: "ink.proto.ElementBundle" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "element", m: 11, type: yl },
          3: { name: "transform", m: 11, type: lk },
          4: { name: "uncompressed_element", m: 11, type: Dl },
          5: { name: "group_uuid", m: 9, type: String },
          6: { name: "visibility", m: 8, defaultValue: !0, type: Boolean },
          7: { name: "opacity", m: 5, defaultValue: 255, type: Number }
        }));
    return a;
  };
  Fl.getDescriptor = Fl.prototype.getDescriptor;
  Hl.prototype.getDescriptor = function () {
    var a = Il;
    a ||
      (Il = a =
        Q(Hl, {
          0: { name: "CompositeImageInfo", H: "ink.proto.CompositeImageInfo" },
          1: { name: "composite_image_uri", m: 9, type: String },
          2: { name: "object_rect", m: 11, type: jk }
        }));
    return a;
  };
  Hl.getDescriptor = Hl.prototype.getDescriptor;
  Jl.prototype.getDescriptor = function () {
    var a = Kl;
    a ||
      (Kl = a =
        Q(Jl, {
          0: { name: "ShapeSpec", H: "ink.proto.ShapeSpec" },
          1: { name: "kind", m: 14, defaultValue: 0, type: Bk },
          2: { name: "control_point", M: !0, m: 11, type: hk },
          6: { name: "start_linecap", m: 14, defaultValue: 0, type: Ck },
          7: { name: "end_linecap", m: 14, defaultValue: 0, type: Ck },
          3: { name: "fill_color", m: 11, type: fk },
          4: { name: "stroke_color", m: 11, type: fk },
          5: { name: "stroke_width_world", m: 2, type: Number }
        }));
    return a;
  };
  Jl.getDescriptor = Jl.prototype.getDescriptor;
  Ll.prototype.getDescriptor = function () {
    var a = Ml;
    a ||
      (Ml = a =
        Q(Ll, {
          0: { name: "Path", H: "ink.proto.Path" },
          1: { name: "segment_types", M: !0, m: 14, defaultValue: 0, type: Nl },
          2: { name: "segment_counts", M: !0, m: 13, type: Number },
          3: { name: "segment_args", M: !0, m: 1, type: Number },
          4: { name: "radius", m: 1, defaultValue: 1, type: Number },
          5: { name: "rgba", m: 13, type: Number },
          6: { name: "tip_type", m: 14, defaultValue: 2, type: Ol },
          7: { name: "fill_rgba", m: 13, type: Number }
        }));
    return a;
  };
  Ll.getDescriptor = Ll.prototype.getDescriptor;
  var Pl = { Nf: 1, wg: 2 },
    Ql = function () {
      P.call(this);
    };
  G(Ql, P);
  var Rl = null,
    Sl = function () {
      P.call(this);
    };
  G(Sl, P);
  var Tl = null;
  Sl.prototype.setHeight = function (a) {
    Nj(this, 3, a);
  };
  var Ul = function () {
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
  var um = null,
    vm = function () {
      P.call(this);
    };
  G(vm, P);
  var wm = null,
    xm = function () {
      P.call(this);
    };
  G(xm, P);
  var ym = null;
  xm.prototype.C = function (a) {
    return Mj(this, 2, a);
  };
  var zm = function () {
    P.call(this);
  };
  G(zm, P);
  var Am = null;
  zm.prototype.C = function (a) {
    return Mj(this, 2, a);
  };
  Ql.prototype.getDescriptor = function () {
    var a = Rl;
    a ||
      (Rl = a =
        Q(Ql, {
          0: { name: "PageProperties", H: "ink.proto.PageProperties" },
          1: { name: "background_color", m: 11, type: fk },
          2: { name: "background_image", m: 11, type: ol },
          3: { name: "bounds", m: 11, type: jk },
          5: { name: "grid_info", m: 11, type: ql }
        }));
    return a;
  };
  Ql.getDescriptor = Ql.prototype.getDescriptor;
  Sl.prototype.getDescriptor = function () {
    var a = Tl;
    a ||
      (Tl = a =
        Q(Sl, {
          0: { name: "PerPageProperties", H: "ink.proto.PerPageProperties" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "width", m: 2, type: Number },
          3: { name: "height", m: 2, type: Number },
          4: { name: "orientation", m: 14, defaultValue: 0, type: ek }
        }));
    return a;
  };
  Sl.getDescriptor = Sl.prototype.getDescriptor;
  Ul.prototype.getDescriptor = function () {
    var a = Vl;
    a ||
      (Vl = a =
        Q(Ul, {
          0: { name: "AddAction", H: "ink.proto.AddAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "below_element_with_uuid", m: 9, type: String }
        }));
    return a;
  };
  Ul.getDescriptor = Ul.prototype.getDescriptor;
  Wl.prototype.getDescriptor = function () {
    var a = Xl;
    a ||
      (Xl = a =
        Q(Wl, {
          0: { name: "AddMultipleAction", H: "ink.proto.AddMultipleAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "below_element_with_uuid", m: 9, type: String }
        }));
    return a;
  };
  Wl.getDescriptor = Wl.prototype.getDescriptor;
  Yl.prototype.getDescriptor = function () {
    var a = Zl;
    a ||
      (Zl = a =
        Q(Yl, {
          0: { name: "RemoveAction", H: "ink.proto.RemoveAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "was_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  Yl.getDescriptor = Yl.prototype.getDescriptor;
  $l.prototype.getDescriptor = function () {
    var a = am;
    a ||
      (am = a =
        Q($l, {
          0: { name: "ReplaceAction", H: "ink.proto.ReplaceAction" },
          1: { name: "removed_uuid", M: !0, m: 9, type: String },
          2: { name: "removed_was_below_uuid", M: !0, m: 9, type: String },
          3: { name: "added_uuid", M: !0, m: 9, type: String },
          4: { name: "added_was_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  $l.getDescriptor = $l.prototype.getDescriptor;
  bm.prototype.getDescriptor = function () {
    var a = cm;
    a || (cm = a = Q(bm, { 0: { name: "ClearAction", H: "ink.proto.ClearAction" }, 1: { name: "uuid", M: !0, m: 9, type: String } }));
    return a;
  };
  bm.getDescriptor = bm.prototype.getDescriptor;
  dm.prototype.getDescriptor = function () {
    var a = em;
    a ||
      (em = a =
        Q(dm, {
          0: { name: "SetTransformAction", H: "ink.proto.SetTransformAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_transform", M: !0, m: 11, type: lk },
          3: { name: "to_transform", M: !0, m: 11, type: lk }
        }));
    return a;
  };
  dm.getDescriptor = dm.prototype.getDescriptor;
  fm.prototype.getDescriptor = function () {
    var a = gm;
    a ||
      (gm = a =
        Q(fm, {
          0: { name: "SetBackgroundColorAction", H: "ink.proto.SetBackgroundColorAction" },
          1: { name: "old_background_color", m: 11, type: fk },
          2: { name: "new_background_color", m: 11, type: fk }
        }));
    return a;
  };
  fm.getDescriptor = fm.prototype.getDescriptor;
  hm.prototype.getDescriptor = function () {
    var a = im;
    a ||
      (im = a =
        Q(hm, {
          0: { name: "SetPageBoundsAction", H: "ink.proto.SetPageBoundsAction" },
          1: { name: "old_bounds", m: 11, type: jk },
          2: { name: "new_bounds", m: 11, type: jk }
        }));
    return a;
  };
  hm.getDescriptor = hm.prototype.getDescriptor;
  jm.prototype.getDescriptor = function () {
    var a = km;
    a ||
      (km = a =
        Q(jm, {
          0: { name: "SetVisibilityAction", H: "ink.proto.SetVisibilityAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "to_visibility", M: !0, m: 8, type: Boolean },
          3: { name: "from_visibility", M: !0, m: 8, type: Boolean }
        }));
    return a;
  };
  jm.getDescriptor = jm.prototype.getDescriptor;
  lm.prototype.getDescriptor = function () {
    var a = mm;
    a ||
      (mm = a =
        Q(lm, {
          0: { name: "SetColorAction", H: "ink.proto.SetColorAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "old_color", m: 11, type: fk },
          3: { name: "new_color", m: 11, type: fk }
        }));
    return a;
  };
  lm.getDescriptor = lm.prototype.getDescriptor;
  nm.prototype.getDescriptor = function () {
    var a = om;
    a ||
      (om = a =
        Q(nm, {
          0: { name: "SetOpacityAction", H: "ink.proto.SetOpacityAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_opacity", M: !0, m: 5, type: Number },
          3: { name: "to_opacity", M: !0, m: 5, type: Number }
        }));
    return a;
  };
  nm.getDescriptor = nm.prototype.getDescriptor;
  pm.prototype.getDescriptor = function () {
    var a = qm;
    a ||
      (qm = a =
        Q(pm, {
          0: { name: "ChangeZOrderAction", H: "ink.proto.ChangeZOrderAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_below_uuid", M: !0, m: 9, type: String },
          3: { name: "to_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  pm.getDescriptor = pm.prototype.getDescriptor;
  rm.prototype.getDescriptor = function () {
    var a = sm;
    a ||
      (sm = a =
        Q(rm, {
          0: { name: "UpdateTextAction", H: "ink.proto.UpdateTextAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "old_text", m: 11, type: zk },
          3: { name: "old_transform", m: 11, type: lk },
          4: { name: "new_text", m: 11, type: zk },
          5: { name: "new_transform", m: 11, type: lk }
        }));
    return a;
  };
  rm.getDescriptor = rm.prototype.getDescriptor;
  tm.prototype.getDescriptor = function () {
    var a = um;
    a ||
      (um = a =
        Q(tm, {
          0: { name: "SetParentsAction", H: "ink.proto.SetParentsAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "old_parent_uuid", M: !0, m: 9, type: String },
          3: { name: "old_transform", M: !0, m: 11, type: lk },
          4: { name: "new_parent_uuid", M: !0, m: 9, type: String },
          5: { name: "new_transform", M: !0, m: 11, type: lk }
        }));
    return a;
  };
  tm.getDescriptor = tm.prototype.getDescriptor;
  vm.prototype.getDescriptor = function () {
    var a = wm;
    a ||
      (wm = a =
        Q(vm, {
          0: { name: "StorageAction", H: "ink.proto.StorageAction" },
          1: { name: "add_action", m: 11, type: Ul },
          2: { name: "remove_action", m: 11, type: Yl },
          3: { name: "clear_action", m: 11, type: bm },
          5: { name: "set_transform_action", m: 11, type: dm },
          6: { name: "set_page_bounds_action", m: 11, type: hm },
          7: { name: "add_multiple_action", m: 11, type: Wl },
          8: { name: "set_visibility_action", m: 11, type: jm },
          16: { name: "set_color_action", m: 11, type: lm },
          9: { name: "set_opacity_action", m: 11, type: nm },
          10: { name: "change_z_order_action", m: 11, type: pm },
          12: { name: "replace_action", m: 11, type: $l },
          13: { name: "set_background_color_action", m: 11, type: fm },
          14: { name: "update_text_action", m: 11, type: rm },
          15: { name: "set_parents_action", m: 11, type: tm }
        }));
    return a;
  };
  vm.getDescriptor = vm.prototype.getDescriptor;
  xm.prototype.getDescriptor = function () {
    var a = ym;
    a ||
      (ym = a =
        Q(xm, {
          0: { name: "Snapshot", H: "ink.proto.Snapshot" },
          1: { name: "page_properties", m: 11, type: Ql },
          8: { name: "per_page_properties", M: !0, m: 11, type: Sl },
          2: { name: "element", M: !0, m: 11, type: Fl },
          3: { name: "dead_element", M: !0, m: 11, type: Fl },
          4: { name: "undo_action", M: !0, m: 11, type: vm },
          5: { name: "redo_action", M: !0, m: 11, type: vm },
          6: { name: "element_state_index", M: !0, m: 14, defaultValue: 1, type: Pl },
          7: { name: "fingerprint", m: 4, type: String },
          9: { name: "active_layer_uuid", m: 9, type: String }
        }));
    return a;
  };
  xm.getDescriptor = xm.prototype.getDescriptor;
  zm.prototype.getDescriptor = function () {
    var a = Am;
    a ||
      (Am = a =
        Q(zm, {
          0: { name: "MutationPacket", H: "ink.proto.MutationPacket" },
          1: { name: "mutation", M: !0, m: 11, type: vm },
          2: { name: "element", M: !0, m: 11, type: Fl },
          3: { name: "page_properties", m: 11, type: Ql }
        }));
    return a;
  };
  zm.getDescriptor = zm.prototype.getDescriptor;
  var Bm = function (a) {
      this.j = this.s = "";
      this.R = this.u = this.F = this.S = this.Z = this.ba = null;
      this.N = "";
      this.i = null;
      this.o = this.A = "";
      this.g = "unknown";
      this.D = this.U = this.B = this.J = this.G = null;
      this.pa = "unknown";
      this.ca = null;
      this.v = this.l = "";
      this.h = "u";
      this.update(a);
    },
    Cm = function (a) {
      var b = {};
      b.blob_id = "local-" + new Date().getTime();
      b.state = "l";
      b.type = "IMAGE";
      a && (b.mimetype = a);
      return new Bm(b);
    },
    Dm = function (a) {
      return 0 == a.lastIndexOf("image", 0) ? "IMAGE" : 0 == a.lastIndexOf("audio", 0) ? "AUDIO" : "unknown";
    };
  Bm.prototype.getType = function () {
    return this.g;
  };
  var Em = function (a) {
      "unknown" == a.g && (a.g = Dm(a.o));
      return "IMAGE" == a.g;
    },
    Fm = function (a) {
      return "DRAWING" == a.g;
    },
    Gm = function (a) {
      return "IMAGE" == a.g && (!!a.j || !!a.v);
    };
  Bm.prototype.isError = function () {
    return "luf" == this.h;
  };
  Bm.prototype.setHeight = function (a) {
    this.B = a;
  };
  var Hm = function (a, b) {
    b != a.h && (!a.A || ("s" != b && "luc" != b) || (a.A = ""), (a.h = b));
  };
  Bm.prototype.update = function (a) {
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
          b = b || this.J != a[g];
          this.J = a.width;
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
                "string" === typeof f && (f = uc(new xm(), f));
                this.u = f;
                Mj(this.u, 7) && (this.F = Mj(this.u, 7));
                break;
              case "encodedPendingMutations":
                f = d.encodedPendingMutations;
                "string" === typeof f && (f = uc(new zm(), f));
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
                this.i ? (e = this.i.update(d.snapshotData) || e) : ((this.i = new Bm(d.snapshotData)), (e = !0));
                break;
              case "snapshotFingerprint":
                e = e || this.ba != d[c];
                this.ba = d.snapshotFingerprint;
                break;
              case "snapshotProtoFprint":
                (f = (f = d[c]) ? bg(f).toString() : null), (e = e || this.Z != f), (this.Z = f);
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
    this.g || (this.g = Dm(this.o));
    return a || b;
  };
  var Im = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c = {};
      c = ((c.mimetype = a.o), (c.type = a.g), (c.width = a.J), (c.height = a.B), c);
      c.kind = "notes#blob";
      a.s && (c.media_id = a.s);
      c.byte_size = a.G;
      c.length = a.U;
      c.extracted_text = a.D;
      c.extraction_status = a.pa;
      c.source_uri = a.ca;
      c.state = a.h;
      if (Fm(a) || (Gm(a) && a.j)) {
        var d = {};
        d.drawingId = a.j;
        a.i && (d.snapshotData = Im(a.i));
        d.snapshotFingerprint = a.ba;
        d.inkHash = a.N;
        c.drawingInfo = d;
        b &&
          (a.v && (c.localDrawingThumbnailData = a.v),
          a.u && (d.encodedSnapshotProto = Ia(Uj(tc, a.u))),
          a.R && (d.encodedPendingMutations = Ia(Uj(tc, a.R))),
          (d.localSnapshotFingerprint = a.F),
          (d.serverSnapshotFingerprint = a.S),
          (d.snapshotProtoFprint = a.Z));
      }
      a.l && (c.local_data = a.l);
      "s" == a.h || (a.i && "s" == a.i.h) || (c.filename = a.A);
      return c;
    },
    Jm = function (a) {
      var b = {};
      b = ((b.mimetype = a.o), (b.type = a.g), b);
      if (Fm(a) || (Gm(a) && a.j)) {
        var c = {};
        b.drawingInfo = ((c.drawingId = a.j), c);
      }
      return b;
    };
  var Km = function () {
    ij.call(this, "l");
  };
  E(Km, ij);
  var R = function () {
    M.call(this);
    this.Ja = new rj(this);
    this.af = this;
    this.Vb = null;
  };
  G(R, M);
  R.prototype[mj] = !0;
  k = R.prototype;
  k.sa = function (a) {
    this.Vb = a;
  };
  k.addEventListener = function (a, b, c, d) {
    yj(this, a, b, c, d);
  };
  k.removeEventListener = function (a, b, c, d) {
    Fj(this, a, b, c, d);
  };
  k.dispatchEvent = function (a) {
    var b,
      c = this.Vb;
    if (c) for (b = []; c; c = c.Vb) b.push(c);
    c = this.af;
    var d = a.type || a;
    if ("string" === typeof a) a = new ij(a, c);
    else if (a instanceof ij) a.target = a.target || c;
    else {
      var e = a;
      a = new ij(d, c);
      oc(a, e);
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; !a.j && 0 <= f; f--) {
        var g = (a.i = b[f]);
        e = Lm(g, d, !0, a) && e;
      }
    a.j || ((g = a.i = c), (e = Lm(g, d, !0, a) && e), a.j || (e = Lm(g, d, !1, a) && e));
    if (b) for (f = 0; !a.j && f < b.length; f++) (g = a.i = b[f]), (e = Lm(g, d, !1, a) && e);
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
  var Lm = function (a, b, c, d) {
    b = a.Ja.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.removed && g.capture == c) {
        var h = g.listener,
          l = g.oc || g.src;
        g.hc && tj(a.Ja, g);
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
  var Mm = function (a) {
    R.call(this);
    this.Wa = null;
    this.Oa = [];
    this.update(a);
  };
  E(Mm, R);
  Mm.prototype.V = function (a) {
    return this.Wa != a.Wa || this.Oa.length != a.Oa.length
      ? !1
      : Ee(
          this.Oa,
          function (b) {
            return ta(a.Oa, b);
          },
          this
        );
  };
  Mm.prototype.update = function (a) {
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
            (b = De(
              a[c],
              function (e) {
                return !ta(this.Oa, e);
              },
              this
            )),
            (this.Oa = a[c]);
      }
    return b;
  };
  var Nm = function (a) {
    a = void 0 === a ? {} : a;
    R.call(this);
    this.h = "EXPANDED";
    this.g = !1;
    this.update(a);
  };
  E(Nm, R);
  Nm.prototype.update = function (a) {
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
  var Om = function (a) {
    var b = {};
    b = ((b.graveyardState = a.h), b);
    b.dirty = a.g;
    return b;
  };
  var Pm = function (a, b) {
    b = void 0 === b ? null : b;
    ij.call(this, "t");
    this.parentId = b;
  };
  E(Pm, ij);
  var Qm = function (a) {
    Th.call(this, 0);
    this.j = !1;
    this.i = null;
    this.h = void 0;
    a && this.update(a);
  };
  E(Qm, Th);
  Qm.prototype.update = function (a) {
    var b = a.time;
    b && ((a.hour = b.hour), (a.minute = b.minute), (a.second = b.second));
    (b = a.period) && !a.hour && (a.hour = Rm[b.toUpperCase()] || Rm.MORNING);
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
  var Sm = function (a) {
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
  Qm.prototype.clone = function () {
    return new Qm(Sm(this));
  };
  var Tm = {},
    Rm = ((Tm.MORNING = 9), (Tm.AFTERNOON = 13), (Tm.EVENING = 17), (Tm.NIGHT = 20), Tm);
  var Um = function () {};
  Um.prototype.ka = function () {
    return this.h;
  };
  Um.prototype.getType = function () {
    return this.g;
  };
  Um.prototype.update = function (a) {
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
      ? ((a = a.locationType.toUpperCase()), hc(Vm, a) && ((c = c || this.g != a), (this.g = a)))
      : this.g && ((this.g = void 0), (c = !0));
    return c;
  };
  var Vm = { oh: "HOME", zj: "WORK" };
  var Wm = function () {},
    Ym = function (a) {
      if ("number" == typeof a) {
        var b = new Wm();
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
        a = Xm(a);
        b.j = [c, c];
        b.g = { Ji: a, Sd: a };
        b.h = [];
        return b;
      }
      b = new Wm();
      b.i = a.id;
      b.l = -a.std_offset;
      b.j = a.names;
      b.g = a.names_ext;
      b.h = a.transitions;
      return b;
    },
    Xm = function (a) {
      var b = ["GMT"];
      b.push(0 >= a ? "+" : "-");
      a = Math.abs(a);
      b.push(L(Math.floor(a / 60) % 100, 2), ":", L(a % 60, 2));
      return b.join("");
    },
    Zm = function (a, b) {
      b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36e5;
      for (var c = 0; c < a.h.length && b >= a.h[c]; ) c += 2;
      return 0 == c ? 0 : a.h[c - 1];
    },
    $m = function (a, b) {
      a = a.l - Zm(a, b);
      return -1440 === a ? 0 : a;
    };
  var bn = function () {
      this.h = [];
      this.g = O;
      an(this, 1);
    },
    cn = [
      /^'(?:[^']|'')*('|$)/,
      /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
      /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/
    ],
    dn = function (a) {
      return a.getHours ? a.getHours() : 0;
    };
  bn.prototype.format = function (a, b) {
    if (!a) throw Error("M");
    var c = b ? 6e4 * (a.getTimezoneOffset() - $m(b, a)) : 0,
      d = c ? new Date(a.getTime() + c) : a,
      e = d;
    b &&
      d.getTimezoneOffset() != a.getTimezoneOffset() &&
      ((d = new Date(d.getTime() + 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset()))),
      (e = new Date(a.getTime() + (c + (0 < c ? -864e5 : 864e5)))));
    c = [];
    for (var f = 0; f < this.h.length; ++f) {
      var g = this.h[f].text;
      1 == this.h[f].type ? c.push(en(this, g, a, d, e, b)) : c.push(g);
    }
    return c.join("");
  };
  var an = function (a, b) {
      if (4 > b) var c = a.g.rb[b];
      else if (8 > b) c = a.g.dc[b - 4];
      else if (12 > b) (c = a.g.Dc[b - 8]), (c = c.replace("{1}", a.g.rb[b - 8])), (c = c.replace("{0}", a.g.dc[b - 8]));
      else if (12 === b) c = a.g.rb[0].replace(/[^EMd]*yy*[^EMd]*/, "");
      else if (13 === b) c = a.g.rb[2].replace(/[^EMd]*yy*[^EMd]*/, "");
      else {
        an(a, 10);
        return;
      }
      b = c;
      for (fn && (b = b.replace(/\u200f/g, "")); b; ) {
        c = b;
        for (var d = 0; d < cn.length; ++d) {
          var e = b.match(cn[d]);
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
    gn = function (a, b) {
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
    fn = !1,
    hn = function (a) {
      if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error("N");
    },
    jn = function (a, b) {
      hn(b);
      b = dn(b);
      return a.g.Bc[12 <= b && 24 > b ? 1 : 0];
    },
    en = function (a, b, c, d, e, f) {
      var g = b.length;
      switch (b.charAt(0)) {
        case "G":
          return (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.g.Ec[c] : a.g.Fc[c];
        case "y":
          return (c = d.getFullYear()), 0 > c && (c = -c), 2 == g && (c %= 100), gn(a, L(c, g));
        case "Y":
          return (
            (c = new Date(Mh(d.getFullYear(), d.getMonth(), d.getDate(), a.g.Hb, a.g.Gb)).getFullYear()),
            0 > c && (c = -c),
            2 == g && (c %= 100),
            gn(a, L(c, g))
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
              g = gn(a, L(c + 1, g));
          }
          return g;
        case "k":
          return hn(e), gn(a, L(dn(e) || 24, g));
        case "S":
          return gn(a, (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).slice(2) + (3 < g ? L(0, g - 3) : ""));
        case "E":
          return (c = d.getDay()), 4 <= g ? a.g.dd[c] : a.g.Vc[c];
        case "a":
          return jn(a, e);
        case "b":
          return jn(a, e);
        case "B":
          return jn(a, e);
        case "h":
          return hn(e), gn(a, L(dn(e) % 12 || 12, g));
        case "K":
          return hn(e), gn(a, L(dn(e) % 12, g));
        case "H":
          return hn(e), gn(a, L(dn(e), g));
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
              g = gn(a, L(c, 1));
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
              g = gn(a, L(c + 1, g));
          }
          return g;
        case "Q":
          return (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.g.Uc[c] : a.g.Rc[c];
        case "d":
          return gn(a, L(d.getDate(), g));
        case "m":
          return hn(e), gn(a, L(e.getMinutes ? e.getMinutes() : 0, g));
        case "s":
          return hn(e), gn(a, L(e.getSeconds(), g));
        case "v":
          return (g = f || Ym(c.getTimezoneOffset())), g.i;
        case "V":
          return (
            (a = f || Ym(c.getTimezoneOffset())),
            2 >= g
              ? a.i
              : 0 < Zm(a, c)
              ? void 0 !== a.g.Me
                ? a.g.Me
                : a.g.DST_GENERIC_LOCATION
              : void 0 !== a.g.Sd
              ? a.g.Sd
              : a.g.STD_GENERIC_LOCATION
          );
        case "w":
          return (
            (c = Mh(e.getFullYear(), e.getMonth(), e.getDate(), a.g.Hb, a.g.Gb)),
            gn(a, L(Math.floor(Math.round((c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) / 864e5) / 7) + 1, g))
          );
        case "z":
          return (a = f || Ym(c.getTimezoneOffset())), 4 > g ? a.j[0 < Zm(a, c) ? 2 : 0] : a.j[0 < Zm(a, c) ? 3 : 1];
        case "Z":
          return (
            (b = f || Ym(c.getTimezoneOffset())),
            4 > g
              ? ((g = -$m(b, c)),
                (a = [0 > g ? "-" : "+"]),
                (g = Math.abs(g)),
                a.push(L(Math.floor(g / 60) % 100, 2), L(g % 60, 2)),
                (g = a.join("")))
              : (g = gn(a, Xm($m(b, c)))),
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
  var kn = function (a) {
    R.call(this);
    this.h = "DAILY";
    this.J = 1;
    this.g = this.l = null;
    this.j = 0;
    this.o = this.i = null;
    this.A = [];
    this.G = this.B = this.D = this.u = this.v = this.s = null;
    this.F = !1;
    a && this.update(a);
  };
  E(kn, R);
  kn.prototype.getTime = function () {
    return this.i;
  };
  kn.prototype.update = function (a) {
    var b = !1,
      c = a.recurrenceId;
    c && (this.G = c.id || null);
    a = a.recurrence;
    if (!a) return !1;
    (c = vc(a.frequency)) ? ((b = b || this.h != c), (this.h = c)) : this.h && ((this.h = "DAILY"), (b = !0));
    c = "number" === typeof a.every ? a.every : 1;
    b = b || this.J != c;
    this.J = c;
    (c = a.recurrenceStart ? a.recurrenceStart.startDateTime : null)
      ? ((this.l = this.l || new Qm()), (c = this.l.update(c)))
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
        c.endDateTime ? ((this.g = this.g || new Qm()), (d = this.g.update(c.endDateTime) || d)) : this.g && ((this.g = null), (d = !0));
      }
    else (d = !!this.g || 0 != this.j), (this.g = null), (this.j = 0);
    b = d || b;
    c = a;
    c.dailyPattern
      ? ((c = c.dailyPattern),
        (e = c.dayPeriod || null),
        (d = this.o != e),
        (this.o = e),
        c.timeOfDay ? ((this.i = this.i || new Qm()), (d = this.i.update(c.timeOfDay) || d)) : this.i && ((this.i = null), (d = !0)))
      : ((d = !!this.o || !!this.i), (this.i = this.o = null));
    b = d || b;
    b = ln(this, a) || b;
    c = a;
    "MONTHLY" == this.h && c.monthlyPattern
      ? ((c = c.monthlyPattern),
        (e = ((d = c.monthDay) ? d[0] : null) || null),
        (d = this.s != e),
        (this.s = e),
        (e = vc(c.weekDay)),
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
        (e = d.yearMonth ? vc(d.yearMonth[0]) : null),
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
  var ln = function (a, b) {
    if ("WEEKLY" != a.h || !b.weeklyPattern || !b.weeklyPattern.weekDay) return (b = !!a.A.length), ua(a.A), b;
    b = b.weeklyPattern.weekDay.map(function (d) {
      return vc(d);
    });
    var c = !Fa(b, a.A);
    a.A = za(b);
    return c;
  };
  var mn = function (a) {
    R.call(this);
    this.h = "INITIAL";
    this.u = this.v = null;
    this.o = "";
    this.g = this.j = this.i = null;
    this.l = !1;
    this.s = !0;
    a && this.update(a);
  };
  E(mn, R);
  mn.prototype.getState = function () {
    return this.h;
  };
  mn.prototype.update = function (a) {
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
    a.dueDate ? ((this.i = this.i || new Qm()), (b = this.i.update(a.dueDate) || b)) : this.i && ((this.i = null), (b = !0));
    a.location ? ((this.j = this.j || new Um()), (b = this.j.update(a.location) || b)) : this.j && ((this.j = null), (b = !0));
    a.recurrenceInfo
      ? ((this.g = this.g || new kn()), (b = this.g.update(a.recurrenceInfo) || b), this.g.sa(this))
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
  var nn = function (a) {
    var b = {};
    b.title = a.o || "";
    !a.i || (b.dueDate = Sm(a.i));
    if (a.g) {
      var c = {},
        d = a.g.G;
      d && (c.recurrenceId = { id: d });
      d = a.g;
      var e = {};
      e.frequency = d.h;
      1 < d.J && (e.every = d.J);
      if (d.l) {
        var f = {};
        f.startDateTime = Sm(d.l);
        e.recurrenceStart = f;
      }
      d.j
        ? ((f = {}), (f.numOccurrences = d.j), (e.recurrenceEnd = f))
        : d.g && ((f = {}), (f.endDateTime = Sm(d.g)), (e.recurrenceEnd = f));
      if (d.i || d.o) {
        f = {};
        if (d.i) {
          var g = Sm(d.i);
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
  var on = function (a) {
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
    a && a.last_update_timestamp ? (this.i = Wh(Vh.L(), a.last_update_timestamp)) : this.i && (pc(this.i), (this.i = null));
    b && this.dispatchEvent("k");
  };
  E(on, R);
  on.prototype.toString = function () {
    return this.g || R.prototype.toString.call(this);
  };
  on.prototype.update = function (a) {
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
  on.L = function () {
    return zh(on);
  };
  var pn = chrome.i18n.getMessage("911698676339750373");
  var qn = function (a, b) {
    R.call(this);
    this.h = a || "";
    this.g = b || "WR";
  };
  E(qn, R);
  qn.prototype.getType = function () {
    return this.g;
  };
  var rn = function (a) {
    M.call(this);
    this.j = a;
    this.i = {};
  };
  G(rn, M);
  var sn = [];
  rn.prototype.listen = function (a, b, c, d) {
    return tn(this, a, b, c, d);
  };
  var un = function (a, b, c, d, e, f) {
      return tn(a, b, c, d, e, f);
    },
    tn = function (a, b, c, d, e, f) {
      Array.isArray(c) || (c && (sn[0] = c.toString()), (c = sn));
      for (var g = 0; g < c.length; g++) {
        var h = yj(b, c[g], d || a.handleEvent, e || !1, f || a.j || a);
        if (!h) break;
        a.i[h.key] = h;
      }
      return a;
    };
  rn.prototype.td = function (a, b, c, d) {
    return vn(this, a, b, c, d);
  };
  var vn = function (a, b, c, d, e, f) {
    if (Array.isArray(c)) for (var g = 0; g < c.length; g++) vn(a, b, c[g], d, e, f);
    else {
      b = xj(b, c, d || a.handleEvent, e, f || a.j || a);
      if (!b) return a;
      a.i[b.key] = b;
    }
    return a;
  };
  rn.prototype.X = function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.X(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (d = vd(d) ? !!d.capture : !!d),
        (e = e || this.j || this),
        (c = zj(c)),
        (d = !!d),
        (b = nj(a) ? a.Ob(b, c, d, e) : a ? ((a = Bj(a)) ? a.Ob(b, c, d, e) : null) : null),
        b && (Gj(b), delete this.i[b.key]);
    return this;
  };
  rn.prototype.removeAll = function () {
    x(
      this.i,
      function (a, b) {
        this.i.hasOwnProperty(b) && Gj(a);
      },
      this
    );
    this.i = {};
  };
  rn.prototype.K = function () {
    rn.O.K.call(this);
    this.removeAll();
  };
  rn.prototype.handleEvent = function () {
    throw Error("O");
  };
  var wn = function (a) {
    R.call(this);
    this.h = null;
    this.o = "O";
    this.l = "UNKNOWN_SHAREE_TYPE";
    this.i = "UNKNOWN_AUXILIARY_TYPE";
    this.s = this.j = this.u = this.v = this.g = null;
    this.A = new rn(this);
    this.update(a);
    this.A.listen(on.L(), "k", this.B);
  };
  E(wn, R);
  wn.prototype.getType = function () {
    return this.l;
  };
  wn.prototype.update = function (a) {
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
  wn.prototype.clone = function () {
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
    c = new wn(f);
    a && (c.g = new qn(b, a));
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
  wn.prototype.B = function () {
    var a = on.L();
    a.g && (a.g || "") === this.h && ((this.i = "FAMILY"), this.dispatchEvent("z"));
  };
  var xn = chrome.i18n.getMessage("3249966726137025950");
  var yn = function () {
    ij.call(this, "E");
  };
  E(yn, ij);
  var zn = {
      eh: "GLOBAL_CHECKED_LIST_ITEMS_POLICY",
      fh: "GLOBAL_NEW_LIST_ITEM_PLACEMENT",
      Ei: "SHARING_ENABLED",
      yj: "WEB_EMBEDS_ENABLED",
      wj: "WEB_APP_THEME"
    },
    An = { Cd: "DEFAULT", gh: "GRAVEYARD" },
    Bn = { BOTTOM: "BOTTOM", TOP: "TOP" },
    Cn = new Qg(),
    Dn = function (a) {
      a = void 0 === a ? {} : a;
      R.call(this);
      this.h = this.i = this.g = null;
      this.o = this.l = !0;
      this.j = null;
      this.update(a);
    };
  E(Dn, R);
  Dn.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a) {
      var d = a[c];
      switch (c) {
        case "type":
          if (!hc(zn, d)) continue;
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
          (d = Number(Cn.get(d))), (b = b || this.j != d), (this.j = d);
      }
    }
    return b;
  };
  Dn.prototype.Sb = function () {
    var a = this.getType();
    return a &&
      hc(zn, a) &&
      ("GLOBAL_NEW_LIST_ITEM_PLACEMENT" !== a || (this.i && hc(Bn, this.i))) &&
      ("GLOBAL_CHECKED_LIST_ITEMS_POLICY" !== a || (this.h && hc(An, this.h))) &&
      ("WEB_APP_THEME" !== a || (null != this.j && hc(ge, this.j)))
      ? !0
      : !1;
  };
  Dn.prototype.getType = function () {
    return this.g;
  };
  Dn.prototype.V = function (a) {
    return a
      ? a === this
        ? !0
        : a.getType() === this.getType() && a.i == this.i && a.h == this.h && a.l === this.l && a.o === this.o && a.j === this.j
      : !1;
  };
  var En = function (a) {
    R.call(this);
    this.i = null;
    this.g = a.mainId;
    this.h = [];
    this.o = 0;
    this.j = new Xh(a.timestamps);
    this.l = null;
    this.update(a);
  };
  E(En, R);
  var Fn = function (a, b) {
    return ke(a.ka(), b.ka());
  };
  En.prototype.toString = function () {
    return this.i || R.prototype.toString.call(this);
  };
  En.prototype.ka = function () {
    return this.i || "";
  };
  var Hn = function (a, b) {
      a.i = b;
      Gn(a, new Th());
    },
    In = function (a) {
      return !!a.j.g && !!a.j.g.valueOf();
    },
    Gn = function (a, b) {
      b = b || new Th();
      a.j.h = b;
      Zh(a.j, b);
      a.dispatchEvent("k");
    };
  En.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a)
      switch (c) {
        case "lastMerged":
          var d = Wh(Vh.L(), a[c]);
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
              if (!ta(this.h, g)) {
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
  var Jn = {
      Cc: "contextualCoachmarksAcked",
      Dd: "familyChangeDateTime",
      Ed: "isDirty",
      Od: "linkedToAssistant",
      Sc: "settings",
      Rd: "singleSettings",
      Td: "timestamps",
      cd: (function (a, b) {
        if (mf && !b) return n.atob(a);
        var c = "";
        of(a, function (d) {
          c += String.fromCharCode(d);
        });
        return c;
      })("bGFiZWxz")
    },
    xc = function (a) {
      R.call(this);
      this.s = new rn(this);
      N(this, this.s);
      this.h = !1;
      this.j = new Xh();
      this.i = {};
      this.l = new Set();
      this.g = {};
      this.v = this.o = null;
      a && this.update(a);
    };
  E(xc, R);
  xc.prototype.update = function (a) {
    var b = !1;
    this.h = !1;
    this.i = {};
    for (var c in a)
      switch (c) {
        case Jn.Sc:
          var d = a[c];
          d = t(d ? d[Jn.Rd] : []);
          for (var e = d.next(); !e.done; e = d.next()) {
            var f = new Dn(e.value);
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
        case Jn.Td:
          d = new Xh(a[c]);
          b = (b = b || d.getCreationTime() != this.j.getCreationTime()) || Yh(d) != Yh(this.j);
          this.j = d;
          break;
        case Jn.Ed:
          b = this.h != a[c] || b;
          this.h = a[c];
          break;
        case Jn.Cc:
          b = Kn(this, a) || b;
          break;
        case Jn.Dd:
          d = Wh(Vh.L(), a[c]);
          b = this.o ? b || !d.V(this.o) : !0;
          this.o = d;
          break;
        case Jn.Od:
          this.v = a[c];
      }
    (b = Ln(this, a[Jn.cd] || []) || b) && this.dispatchEvent("F");
    return b;
  };
  var Ln = function (a, b) {
      var c = !1,
        d = mc(a.g);
      b = t(b);
      for (var e = b.next(); !e.done; e = b.next()) {
        var f = e.value;
        e = f.mainId;
        var g = a.g[e];
        g ? (c = g.update(f) || c) : ((c = !0), (f = new En(f)), (a.g[e] = f), a.s.listen(f, "k", a.u));
        kc(d, e);
      }
      c = c || !jc(d);
      x(d, function (h, l) {
        kc(a.g, l);
      });
      return c;
    },
    Mn = function (a) {
      var b = void 0 === b ? !1 : b;
      var c = {};
      c[Jn.Sc] = {};
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
            if (!Cn.i) {
              var l = new Cn.constructor();
              l.g = Cn.h;
              l.h = Cn.g;
              l.i = Cn;
              Cn.i = l;
            }
            h.webAppThemeValue = Cn.i.get(String(f.j));
          }
          g.call(d, h);
        }
      });
      c[Jn.Sc][Jn.Rd] = d;
      c[Jn.Td] = $h(a.j);
      c[Jn.Cc] = Array.from(a.l);
      c[Jn.cd] = fc(a.g).map(function (f) {
        var g = {};
        g.mainId = f.g;
        g.mergedIds = f.h;
        g.name = f.i;
        g.revision = f.o;
        g.timestamps = $h(f.j);
        g.lastMerged = f.l ? Vh.L().format(f.l) : "1970-01-01T00:00:00.000Z";
        return g;
      });
      if (a.o) {
        var e = Vh.L();
        c[Jn.Dd] = e.format(a.o);
      }
      null !== a.v && (c[Jn.Od] = a.v);
      b && (c[Jn.Ed] = a.h);
      return c;
    };
  xc.prototype.u = function () {
    Zh(this.j, new Th());
    this.h = !0;
    this.dispatchEvent("F");
  };
  var Kn = function (a, b) {
      var c = !1,
        d = new Set(a.l);
      b = t(b[Jn.Cc] || []);
      for (var e = b.next(); !e.done; e = b.next()) (e = e.value), a.l.has(e) ? d.delete(e) : (a.l.add(e), (c = !0));
      c = c || !jc(d);
      d.forEach(function (f) {
        return a.l.delete(f);
      });
      return c;
    },
    Nn = function (a) {
      return Zb(a.g, function (b) {
        return !In(b);
      });
    },
    On = function (a) {
      var b = [];
      x(a.g, function (c) {
        if (!In(c)) {
          var d = Fn || Ga;
          for (var e = 0, f = b.length, g; e < f; ) {
            var h = e + ((f - e) >>> 1);
            var l = d(c, b[h]);
            0 < l ? (e = h + 1) : ((f = h), (g = !l));
          }
          d = g ? e : -e - 1;
          0 > d && Da(b, -(d + 1), 0, c);
        }
      });
      return b;
    },
    Pn = function (a, b) {
      return (a = ic(a.g, function (c) {
        return c.ka().toLowerCase() == b.toLowerCase();
      })) && !In(a)
        ? a
        : null;
    },
    Qn = function (a, b) {
      var c = a.g[b];
      if (c && !In(c)) return c;
      for (var d in a.g) if (((c = a.g[d]), !In(c) && c.h.includes(b))) return c;
      return null;
    };
  xc.L = function () {
    return zh(xc);
  };
  var Ed = "function" === typeof URL;
  var zc = function (a) {
      this.Sb = a;
    },
    Bc = [
      Ac("data"),
      Ac("http"),
      Ac("https"),
      Ac("mailto"),
      Ac("ftp"),
      new zc(function (a) {
        return /^[^:]*([/?#]|$)/.test(a);
      })
    ];
  var Rn = function (a) {
    this.ea = void 0;
    this.ia = {};
    if (a) {
      var b = pi(a);
      a = oi(a);
      for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
    }
  };
  Rn.prototype.set = function (a, b) {
    Sn(this, a, b, !1);
  };
  Rn.prototype.add = function (a, b) {
    Sn(this, a, b, !0);
  };
  var Sn = function (a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      a.ia[f] || (a.ia[f] = new Rn());
      a = a.ia[f];
    }
    if (d && void 0 !== a.ea) throw Error("P`" + b);
    a.ea = c;
  };
  Rn.prototype.get = function (a) {
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
  Rn.prototype.ja = function () {
    var a = [];
    Tn(this, a);
    return a;
  };
  var Tn = function (a, b) {
    void 0 !== a.ea && b.push(a.ea);
    for (var c in a.ia) Tn(a.ia[c], b);
  };
  Rn.prototype.Ea = function (a) {
    var b = [];
    if (a) {
      for (var c = this, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (!c.ia[e]) return [];
        c = c.ia[e];
      }
      Un(c, a, b);
    } else Un(this, "", b);
    return b;
  };
  var Un = function (a, b, c) {
    void 0 !== a.ea && c.push(b);
    for (var d in a.ia) Un(a.ia[d], b + d, c);
  };
  k = Rn.prototype;
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
    return new Rn(this);
  };
  k.W = function () {
    return ni(this.ja());
  };
  k.ha = function () {
    return void 0 === this.ea && jc(this.ia);
  };
  var z = function (a) {
    R.call(this);
    this.g = a.id;
    if (!this.g) throw Error("R");
    this.U = this.j = null;
    this.u = new Xh(a.timestamps);
    this.s = {};
    this.Z = new rn(this);
    N(this, this.Z);
    this.F = null;
    this.fb = !1;
    this.ua = 0;
    this.Ua = "0";
    this.hb = -1;
    this.xa = !1;
    this.G = 0;
    this.i = !1;
    this.ca = this.D = this.A = this.J = this.o = null;
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
    this.B = new $i();
    this.ba = [];
    this.yb = null;
    this.Ia = new Rn();
    this.jb = this.ta = this.S = null;
    this.gb = !1;
    this.Va = void 0;
    this.kb = {};
    this.Tb = !1;
    this.update(a);
  };
  E(z, R);
  var Vn = function () {
    return new Date().getTime() + "." + Math.round(2147483648 * Math.random());
  };
  z.prototype.getType = function () {
    return this.J;
  };
  z.prototype.getCreationTime = function () {
    return this.u.getCreationTime();
  };
  var Wn = function (a) {
    a.i = !0;
    a.notify();
  };
  z.prototype.notify = function () {
    this.dispatchEvent("k");
  };
  var Yn = function (a) {
      return Rc(a) || Xn(a);
    },
    Rc = function (a) {
      return "NOTE" === a.J;
    },
    Xn = function (a) {
      return "LIST" === a.J;
    },
    Zn = function (a) {
      return "LIST_ITEM" === a.J;
    },
    $n = function (a) {
      return "BLOB" === a.J;
    },
    eo = function (a, b, c) {
      a.G = b;
      b > ao || b < bo ? a.dispatchEvent(new Pm(3, a.U)) : (a.Ca && Yn(a)) || c || (a.j && (co(a.j, !0), Wn(a.j)), Wn(a));
    };
  z.prototype.ha = function (a) {
    a = void 0 === a ? !1 : a;
    return (
      !(
        (this.D && this.D.trim()) ||
        this.h ||
        fo(this) ||
        (this.A && this.A.trim()) ||
        (!a && this.o && "DELETED" != this.o.h) ||
        !jc(Hc(this.B))
      ) &&
      dc(this.s, function (b) {
        return 0 != b.l || (!$n(b) && b.ha(a));
      })
    );
  };
  var go = function (a, b) {
      a.Ca = b;
      x(a.s, function (c) {
        return go(c, b);
      });
    },
    co = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c = new Th();
      Zh(a.u, c);
      b && (Yn(a) ? (a.u.h = c) : a.j && ((a.j.u.h = c), Zh(a.j.u, c), Wn(a.j)));
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
          f = f || d.J != h;
          e = e || d.J != h;
          d.J = h;
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
          d.Da ? (e = d.Da.update(h) || e) : ((d.Da = new gj(h)), (e = !0));
          break;
        case "lastModifierEmail":
          d.Ub = h.toLowerCase();
          break;
        case "nodeSettings":
          "LIST" === a.type || "NOTE" === a.type ? (d.F ? (e = d.F.update(h) || e) : (ho(d, new Nm(h)), (e = !0))) : d.F && ho(d, null);
          break;
        case "reminder":
          if (d.o) (h = d.o.update(h)), (e = e || h), h && d.dispatchEvent("u");
          else {
            h = new mn(h);
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
          c && d.D != h ? io(d, a, b, c) : (d.D = h);
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
          c && l ? io(d, a, b, c) : (d.j && l && jo(d.j, d.g, h, d.A), (d.A = h));
          break;
        case "blob":
          d.h ? (e = d.h.update(h) || e) : ((d.h = new Bm(h)), (e = !0));
          break;
        case "sourceBlobId":
          d.jb = h;
      }
    });
    e = ko(this, a) || e;
    e = lo(this, a) || e;
    e = mo(this, a.labelIds || []) || e;
    var g = a.annotationsGroup;
    g && (e = this.B.update(g) || e);
    e && this.notify();
    return f ? 2 : e ? 1 : 0;
  };
  var ko = function (a, b) {
      var c = !1;
      if (Vi(dd(), "n_eil")) {
        var d = b.superListItemId || null;
        b = b.superListItemServerId || null;
        c = (c = d != a.S) || b != a.ta;
        a.S = d;
        a.ta = b;
      }
      return c;
    },
    io = function (a, b, c, d) {
      d = void 0 === d ? null : d;
      var e = null;
      d && d.h === a.g && (e = d.g);
      b = Zn(a) ? b.text : b.title;
      d = Zn(a) ? a.A : a.D;
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
          ? a.dispatchEvent(new yn(d, e, c, b, a.ca))
          : ((e = (c = Zn(a)) ? a.A : a.D),
            (d = b != e),
            c ? (a.A = b) : (a.D = b),
            null != b && d && a.j && jo(a.j, a.g, b, e),
            d && no(a),
            b != b ? ((a.wa = !0), Wn(a)) : d && a.notify());
        a.ca = b;
      }
    },
    oo = function (a, b) {
      b.baseVersion && (a.Ua = b.baseVersion);
    },
    po = function (a) {
      var b = {};
      b.id = a.g;
      b.kind = "notes#node";
      b.parentId = a.U || "root";
      b.timestamps = $h(a.u);
      b.type = a.J;
      b.trashState = a.ua;
      a.R && (b.serverId = a.R);
      a.Ha && (b.parentServerId = a.Ha);
      b.deletionState = a.l;
      if (1 === a.l) return $n(a) && a.h && (b.blob = Jm(a.h)), b;
      b.sortValue = a.G;
      a.Ua && (b.baseVersion = a.Ua);
      -1 != a.hb && (b.baseNoteRevision = a.hb);
      if (Yn(a)) {
        b.title = a.D || "";
        b.isArchived = a.fb;
        b.isPinned = a.gb;
        void 0 !== a.Va && (b.showAvailableInShoppingNotification = a.Va);
        a.Ba && (b.color = a.Ba);
        a.Da && (b.background = hj(a.Da));
        a.o && (b.reminder = nn(a.o));
        a.F && (b.nodeSettings = Om(a.F));
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
        fo(a) && "NONE" != a.ya && (b.shareState = a.ya);
        if (a.yb) {
          var e = {};
          b.abuseFeedback = ((e.type = a.yb), e);
        }
        if (!jc(a.v)) {
          var f = Vh.L();
          b.labelIds = fc(a.v).map(function (g) {
            var h = {};
            return (h.labelId = g.id), (h.deleted = g.g ? f.format(g.g) : "1970-01-01T00:00:00.000Z"), h;
          });
        }
        jc(a.B.g) || (b.annotationsGroup = aj(a.B));
      } else
        Zn(a)
          ? ((b.text = a.A || ""),
            (b.checked = a.xa),
            Vi(dd(), "n_eil") &&
              (void 0 !== a.S && (b.superListItemId = a.S || ""), void 0 !== a.ta && (b.superListItemServerId = a.ta || "")))
          : $n(a) && a.h && (b.blob = Im(a.h, !0));
      b.isDirty = a.i;
      a.ca && (b.lastSyncedText = a.ca);
      a.jb && (b.sourceBlobId = a.jb);
      return b;
    };
  z.prototype.clone = function () {
    var a = new z(po(this));
    x(this.s, function (b) {
      qo(a, b.clone());
    });
    x(this.N, function (b) {
      ro(a, b.clone());
    });
    a.u.update($h(this.u));
    go(a, this.Ca);
    return a;
  };
  z.prototype.duplicate = function () {
    var a = po(this),
      b = Vn();
    a.id = b;
    so.forEach(function (e) {
      return delete a[e];
    });
    $n(this) && this.h && ((a.sourceBlobId = this.g), delete a.blob);
    var c = new z(a),
      d = new Map();
    x(this.s, function (e) {
      if (0 == e.l) {
        var f = e.duplicate();
        f.G || eo(f, 1);
        to(f, b);
        qo(c, f);
        d.set(e.g, f);
      }
    });
    Xn(c) &&
      uo(this).forEach(function (e) {
        var f = e.S;
        if (f && ((e = d.get(e.g)), (f = d.get(f)), e && f)) {
          if (f && (!Zn(e) || !Zn(f))) throw Error("$");
          if (f && f.g in e.kb) {
            if (!Zn(e) || !Zn(f)) throw Error("$");
            f.S = null;
            f.ta = null;
            delete e.kb[f.g];
            Wn(e);
          }
          null === f ? ((e.S = null), (e.ta = null)) : ((e.S = f.g), (e.ta = f.R), (f.kb[e.g] = e));
        }
      });
    Yn(c) && co(c, !0);
    return c;
  };
  z.prototype.getTitle = function () {
    if (!Yn(this)) throw Error("S");
    return this.D || "";
  };
  z.prototype.setTitle = function (a) {
    if (!Yn(this)) throw Error("S");
    if (19999 < a.length) throw Error("T");
    this.wa || (this.ca = this.D || "");
    this.D = a;
    co(this, !0);
    no(this);
    this.wa = !0;
    Wn(this);
  };
  var vo = function (a) {
      if (!Yn(a)) throw Error("U`" + a.J);
      return a.Ba || "DEFAULT";
    },
    wo = function (a) {
      return -1 === a.ua || 1 === a.ua;
    },
    no = function (a) {
      a.o && a.dispatchEvent("v");
    };
  z.prototype.Ab = function (a) {
    co(this);
    a.target = this;
    this.dispatchEvent("u");
  };
  var ho = function (a, b) {
    if (Yn(a) && b !== a.F) {
      a.F && (a.Z.X(a.F, "y", a.Bb), a.F.ga());
      if ((a.F = b)) a.Z.listen(b, "y", a.Bb), b.sa(a);
      a.dispatchEvent("k");
    }
  };
  z.prototype.Bb = function (a) {
    co(this);
    this.i = this.i || this.F.g;
    a.target = this;
    this.dispatchEvent("k");
  };
  var fo = function (a) {
      return cc(a.N, function (b) {
        var c;
        if ((c = "O" != b.o)) b.g ? ((b = b.g.getType()), (b = "M_RM" == b || "RM" == b)) : (b = !1), (c = !b);
        return c;
      });
    },
    ro = function (a, b) {
      b.sa(a);
      a.N[b.h || ""] = b;
      b.dispatchEvent("A");
    },
    lo = function (a, b) {
      for (var c = !1, d = mc(a.N), e = t(b.roleInfo || []), f = e.next(); !f.done; f = e.next()) {
        f = f.value;
        var g = f.email;
        g && ((g = g.toLowerCase()), g in a.N ? ((c = a.N[g].update(f) || c), delete d[g]) : (ro(a, new wn(f)), (c = !0)));
      }
      c = c || !jc(d);
      x(d, function (h) {
        var l = h.g;
        (!l || ("M_WR" !== l.getType() && "WR" !== l.getType())) && delete a.N[h.h || ""];
      });
      return (c = xo(a, b, c) || c);
    },
    xo = function (a, b, c) {
      var d = !1,
        e = {};
      b = t(b.errorStatus || []);
      for (var f = b.next(); !f.done; f = b.next()) {
        f = f.value;
        var g = f.code;
        "TMS" != g && (e[g] = new Mm(f));
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
      (jc(e) && !c) ||
        x(a.ba, function (h, l) {
          "OAD" == h.Wa || "SRD" == h.Wa || e[l] || (delete a.ba[l], (d = !0));
        });
      d && a.dispatchEvent("o");
      return d;
    },
    zo = function (a) {
      return Object.values(a.v)
        .filter(function (b) {
          return !yo(b);
        })
        .map(function (b) {
          return b.id;
        });
    },
    Co = function (a, b) {
      !Yn(a) || Ao(a, b) || In(b) || (Gn(b), (a.v[b.g] = new Bo(b.g)), co(a), Wn(a), a.dispatchEvent("D"));
    },
    Ao = function (a, b) {
      return [b.g].concat(md(b.h)).some(function (c) {
        return a.v[c] && !yo(a.v[c]);
      });
    },
    mo = function (a, b) {
      Vh.L();
      var c = !1,
        d = mc(a.v);
      b = t(b);
      for (var e = b.next(); !e.done; e = b.next()) {
        var f = e.value;
        e = f.labelId;
        a.v[e] || ((a.v[e] = new Bo(e)), (c = !0));
        if ((f = f.deleted)) {
          f = Wh(0, f);
          var g = a.v[e].g;
          c = (!!g && !g.V(f)) || c;
          a.v[e].g = f;
        }
        delete d[e];
      }
      c = c || !jc(d);
      x(d, function (h, l) {
        return kc(a.v, l);
      });
      return c;
    },
    qo = function (a, b) {
      if (b.U && b.U != a.g) throw Error("V");
      if (!a.s[b.g]) {
        a.s[b.g] = b;
        N(a, b);
        a.Z.listen(b, "k", a.zb);
        b.sa(a);
        b.j = a;
        to(b, a.g);
        b.Ha = a.R;
        b.Cb = !1;
        go(b, a.Ca);
        if (void 0 === b.G) {
          var c;
          if ((c = !$n(b))) (c = xc.L().i.GLOBAL_NEW_LIST_ITEM_PLACEMENT), (c = !!c && "TOP" == c.i);
          c = c ? Do(a) : Eo(a);
          eo(b, c, !0);
        }
        Zn(b) && jo(a, b.g, Uc(b));
        c = !1;
        Rc(a) && Zn(b) && 2 <= uo(a).length && ((a.J = "LIST"), co(a, !0), Wn(a), (c = !0));
        if (b.i || c) co(a, !0), no(a), Wn(a);
      }
    };
  z.prototype.getChildren = function () {
    return this.s;
  };
  var Fo = function (a) {
      return fc(a.s).filter(function (b) {
        return $n(b) && 0 == b.l;
      });
    },
    Go = function (a) {
      a = Fo(a);
      a.sort(wc);
      return a;
    },
    Io = function (a) {
      return Go(a)
        .map(function (b) {
          return Ho(b);
        })
        .filter(function (b) {
          return !!b && "IMAGE" === b.getType();
        });
    },
    Ko = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      return Fo(a).some(function (d) {
        d = "IMAGE" !== b || c ? Jo(d) : Ho(d);
        return !!d && (!b || d.getType() === b);
      });
    };
  z.prototype.matches = function (a) {
    var b = Lo(this, a.getTokens());
    b =
      (b =
        (b =
          (b =
            (b =
              (b =
                (b =
                  (b =
                    (b = (b = (b = (b = b && Mo(this, a.D())) && No(this, a.h())) && Oo(this, a.i())) && Po(this, a.j())) &&
                    (a.g() ? vo(this) === a.g() : !0)) && (a.u() ? !!this.o : !0)) && (a.A() ? Xn(this) : !0)) &&
              (a.B() ? fo(this) : !0)) && (a.l() ? Ko(this, "AUDIO") : !0)) && (a.s() ? Ko(this, "IMAGE", !0) : !0)) &&
        (a.o() ? Ko(this, "DRAWING") : !0)) && (a.v() ? !!bj(this.B) || !jc(Hc(this.B)) || Qo.test(Ro(this).toLowerCase()) : !0);
    return !!b;
  };
  var Lo = function (a, b) {
      for (var c = Ro(a), d = Io(a), e = 0; e < d.length; e++) {
        var f = d[e].D || "";
        f && (c += "\n" + f);
      }
      fo(a) &&
        x(a.N, function (h) {
          var l = c,
            m = "\n" + (h.h || "") + " ",
            p = on.L();
          h = "FAMILY" == h.i && p.g && (p.g || "") === h.h && !h.j ? on.L().h || pn : "FAMILY" != h.i || h.j ? h.j : xn;
          c = l + (m + (h || ""));
        });
      x(Hc(a.B), function (h) {
        h = h.g;
        c += "\n" + h.Qa() + " " + h.getTitle();
      });
      (d = (d = (d = bj(a.B)) ? d.j : null) ? d.g : null) && (c += "\n" + d.Qa() + " " + d.getTitle());
      var g = xc.L();
      x(a.v, function (h, l) {
        (h = Qn(g, l)) && (c += "\n" + h.ka());
      });
      x(cj(a.B), function (h) {
        (h = h.i) && (c += "\n" + ji[h.g || "THING_CATEGORY_UNKNOWN"]);
      });
      x(dj(a.B), function (h) {
        (h = h.h) && (c += "\n" + Lh[h.g || "SUGGEST_TYPE_UNKNOWN"]);
      });
      c = c.toLowerCase();
      a = 0;
      for (d = void 0; (d = b[a]); a++) if (-1 === c.indexOf(d)) return !1;
      return !0;
    },
    Mo = function (a, b) {
      return b.every(function (c) {
        return c in a.N;
      });
    },
    No = function (a, b) {
      return b.every(function (c) {
        return cc(cj(a.B), function (d) {
          d = d.i;
          return !!d && (d.g || "THING_CATEGORY_UNKNOWN") === c;
        });
      });
    },
    Oo = function (a, b) {
      return b.every(function (c) {
        return cc(dj(a.B), function (d) {
          d = d.h;
          return !!d && (d.g || "SUGGEST_TYPE_UNKNOWN") === c;
        });
      }, a);
    },
    Po = function (a, b) {
      var c = xc.L();
      return b.every(function (d) {
        d = Pn(c, d);
        return !!d && Ao(a, d);
      });
    },
    Ro = function (a) {
      return [a.D || "", a.A || ""]
        .concat(
          md(
            uo(a).map(function (b) {
              return Uc(b);
            })
          )
        )
        .join("\n");
    };
  z.prototype.isSelected = function () {
    return !1;
  };
  var Eo = function (a) {
      var b = ao;
      x(a.s, function (c) {
        b = Math.min(b, c.G);
      });
      return b == ao ? 0 : b - So;
    },
    Do = function (a) {
      var b = bo;
      x(a.s, function (c) {
        b = Math.max(b, c.G);
      });
      return b == bo ? 0 : b + So;
    };
  z.prototype.zb = function (a) {
    a.target.i && no(this);
  };
  var Sc = function (a) {
      if (!Rc(a)) throw Error("X");
      return (a = uo(a)[0]) ? Uc(a) : "";
    },
    To = function (a, b) {
      if (!Rc(a)) throw Error("X");
      if (!Rc(a)) throw Error("W");
      var c = uo(a)[0];
      if (!c) {
        c = a.g;
        var d = {};
        c = new z(((d.id = Vn()), (d.type = "LIST_ITEM"), (d.parentId = c), d));
        qo(a, c);
        a.dispatchEvent(new Km(c));
      }
      a = c;
      if (!Zn(a)) throw Error("aa");
      19999 < b.length || (a.j && jo(a.j, a.g, b, a.A), a.wa || (a.ca = a.A || ""), (a.A = b), co(a, !0), (a.wa = !0), Wn(a));
    },
    jo = function (a, b, c, d) {
      var e = a.s;
      if (!(null !== e && b in e)) throw Error("Y");
      c = c.toLowerCase().trim();
      (d && d.toLowerCase().trim() === c) ||
        (d && Uo(a, b, d), 30 >= c.length && ((d = a.Ia.get(c)) || (d = new Set()), d.add(b), a.Ia.set(c, d)));
    },
    Uo = function (a, b, c) {
      c = c.toLowerCase().trim();
      if (!(30 < c.length)) {
        var d = a.Ia.get(c);
        if (!d) throw Error("Z");
        d.delete(b);
        d.size ? a.Ia.set(c, d) : a.Ia.remove(c);
      }
    },
    uo = function (a) {
      var b = [],
        c;
      for (c in a.s) {
        var d = a.s[c];
        Zn(d) && 0 == d.l && b.push(d);
      }
      return b;
    },
    Tc = function (a) {
      var b = void 0 === b ? !1 : b;
      a = uo(a);
      a.sort(b ? wc : yc);
      return a;
    },
    to = function (a, b) {
      a.U !== b && ((a.U = b), a.Ca || a.notify());
    };
  z.prototype.getParent = function () {
    return this.j;
  };
  var Uc = function (a) {
      if (!Zn(a)) throw Error("aa");
      return a.A || "";
    },
    Jo = function (a) {
      return $n(a) ? a.h : null;
    },
    Ho = function (a) {
      if (!$n(a)) throw Error("ba");
      return a.h && (Em(a.h) || Fm(a.h) || Gm(a.h)) ? (Em(a.h) || (Fm(a.h) && !a.h.i) ? a.h : a.h.i) : null;
    },
    Qo = RegExp(
      "(?:(https?|ftp)://)?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.][\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*\\.(?:(?:xn--)*[a-zA-Z0-9]{2,63})(?:[\\.]?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.]*[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*)?"
    ),
    so = Object.freeze(
      "annotationsGroup isArchived isDirty isPinned lastSyncedText parentServerId reminder baseVersion baseNoteRevision serverId shareState roleInfo showAvailableInShoppingNotification timestamps".split(
        " "
      )
    ),
    So = Math.pow(2, 20),
    ao = Math.pow(2, 50) - 1,
    bo = -Math.pow(2, 50),
    Bo = function (a) {
      this.id = a;
      this.g = null;
    },
    yo = function (a) {
      return !!a.g && !!a.g.valueOf();
    };
  var Vo = Ld(["http://goo.gl/forms/r40gTO4BTb"]),
    Wo = Ld(["https://keep.google.com"]),
    Xo = (function (a) {
      for (var b = kd.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
      return new Cc(c.join(""), Dc);
    })(Vo),
    Yo = (function (a) {
      var b = kd.apply(1, arguments);
      if (0 === b.length) return zg(a[0]);
      for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
      return zg(c);
    })(Wo);
  Fc(Yo.toString());
  var Zo = chrome.i18n.getMessage("2633701539319779732"),
    $o = chrome.i18n.getMessage("577539731512680648"),
    Nc = /^data:(.+);base64,(.+)$/;
  var Qc = function (a) {
    Hh.call(this);
    this.l = "";
    a && this.update(a);
  };
  E(Qc, Hh);
  Qc.prototype.update = function (a) {
    Hh.prototype.update.call(this, a);
    "faviconUrl" in a && (this.l = a.faviconUrl);
  };
  Qc.prototype.g = function () {
    var a = Hh.prototype.g.call(this);
    a.faviconUrl = this.l;
    return a;
  };
  var Pc = function (a, b) {
    a = void 0 === a ? "" : a;
    this.qb = this.url = "";
    a && "object" === typeof a ? ((this.url = a.url), (this.qb = a.shortUrlAndTitle)) : a && ((this.url = a), (this.qb = b || ""));
  };
  var Vc = RegExp(
    "(?:(https?|ftp)://)?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.][\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*\\.(?:(?:xn--)*[a-zA-Z0-9]{2,63})(?:[\\.]?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.]*[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*)?",
    "i"
  );
  var ap = function () {
      this.g = new Map();
    },
    bp = function (a, b) {
      a.g.forEach(function (c) {
        return c(b);
      });
    };
  var cp = function (a) {
    this.g = a;
  };
  var dp = function (a) {
    this.I = v(a);
  };
  E(dp, J);
  var ep = function (a) {
    this.I = v(a);
  };
  E(ep, J);
  var fp = function (a) {
    this.I = v(a);
  };
  E(fp, J);
  var gp = function (a) {
    this.I = v(a);
  };
  E(gp, J);
  gp.Ka = [2];
  var ed = function (a) {
    this.I = v(a);
  };
  E(ed, J);
  ed.Ka = [1];
  var hp = function (a) {
    this.I = v(a);
  };
  E(hp, J);
  var ip = function () {
    this.i = this.g = null;
  };
  ip.prototype.initialize = function (a, b) {
    this.g = a;
    this.i = b;
    return this;
  };
  var jp = function (a, b) {
      b = a.i.h[b.g].md();
      b.initialize(a.g, a.i);
      return b;
    },
    kp = function (a) {
      var b = yf(a.g, hp, 5);
      null == b && ((b = new hp()), C(a.g, 5, b));
      return b;
    },
    lp = function (a) {
      yf(a.g, ep, 8);
      var b = yf(a.g, hp, 5);
      null != b && ((b = b.clone()), C(a.g, 5, b));
      return a.g;
    };
  ip.prototype.Sb = function () {
    return !0;
  };
  var mp = function () {
    ip.call(this);
    this.h = null;
  };
  E(mp, ip);
  var np = function (a) {
      if (!a.h) {
        a.h = new fj();
        var b = kp(a);
        C(b, 39, a.h);
      }
      return a.h;
    },
    pp = function (a) {
      var b = !op.L().qc();
      a = np(a);
      Cf(a, 22, b);
    },
    qp = new cp("keep_builder");
  var rp = function () {};
  rp.prototype.md = function () {
    return new mp();
  };
  var sp = function (a) {
    this.I = v(a);
  };
  E(sp, J);
  var tp = function () {
    this.g = new sp();
  };
  tp.prototype.h = function (a) {
    C(a, 17, this.g);
  };
  var ad = { navigate: 2, reload: 3, back_forward: 4, prerender: 5 };
  var up = function (a) {
    this.I = v(a);
  };
  E(up, J);
  var fd = function (a) {
    this.I = v(a);
  };
  E(fd, J);
  fd.prototype.setAccessLevel = function (a) {
    return C(this, 12, a);
  };
  var vp = function (a) {
    this.I = v(a);
  };
  E(vp, J);
  var wp = function (a) {
    this.I = v(a);
  };
  E(wp, J);
  var xp = function (a) {
    this.I = v(a);
  };
  E(xp, J);
  var yp = function (a) {
    this.I = v(a);
  };
  E(yp, J);
  var zp = function (a) {
    this.I = v(a);
  };
  E(zp, J);
  var Ap = function (a) {
    this.I = v(a);
  };
  E(Ap, J);
  Ap.prototype.getDevice = function () {
    return yf(this, yp, 9);
  };
  Ap.prototype.getParent = function () {
    return yf(this, zp, 11);
  };
  var Bp = function () {
      this.i = new wp();
      this.h = null;
      this.j = new vp();
      $c(this.j, 1, 6);
      this.g = null;
    },
    cd = function (a) {
      null == a.h && (a.h = new Ap());
      return a.h;
    };
  var Cp = function (a, b) {
    this.i = a;
    this.j = b;
    this.h = 0;
    this.g = null;
  };
  Cp.prototype.get = function () {
    if (0 < this.h) {
      this.h--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.i();
    return a;
  };
  var Dp = function (a, b) {
    a.j(b);
    100 > a.h && (a.h++, (b.next = a.g), (a.g = b));
  };
  var Ep,
    Fp = function () {
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
      if ("undefined" !== typeof a && !ja()) {
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
  var Gp = function () {
    this.h = this.g = null;
  };
  Gp.prototype.add = function (a, b) {
    var c = Hp.get();
    c.set(a, b);
    this.h ? (this.h.next = c) : (this.g = c);
    this.h = c;
  };
  Gp.prototype.remove = function () {
    var a = null;
    this.g && ((a = this.g), (this.g = this.g.next), this.g || (this.h = null), (a.next = null));
    return a;
  };
  var Hp = new Cp(
      function () {
        return new Ip();
      },
      function (a) {
        return a.reset();
      }
    ),
    Ip = function () {
      this.next = this.scope = this.Pa = null;
    };
  Ip.prototype.set = function (a, b) {
    this.Pa = a;
    this.scope = b;
    this.next = null;
  };
  Ip.prototype.reset = function () {
    this.next = this.scope = this.Pa = null;
  };
  var Jp,
    Kp = !1,
    Lp = new Gp(),
    Np = function (a, b) {
      Jp || Mp();
      Kp || (Jp(), (Kp = !0));
      Lp.add(a, b);
    },
    Mp = function () {
      if (n.Promise && n.Promise.resolve) {
        var a = n.Promise.resolve(void 0);
        Jp = function () {
          a.then(Op);
        };
      } else
        Jp = function () {
          var b = Op;
          "function" !== typeof n.setImmediate ||
          (n.Window && n.Window.prototype && (ha() || !q("Edge")) && n.Window.prototype.setImmediate == n.setImmediate)
            ? (Ep || (Ep = Fp()), Ep(b))
            : n.setImmediate(b);
        };
    },
    Op = function () {
      for (var a; (a = Lp.remove()); ) {
        try {
          a.Pa.call(a.scope);
        } catch (b) {
          ba(b);
        }
        Dp(Hp, a);
      }
      Kp = !1;
    };
  var Qp = function (a) {
      this.g = 0;
      this.s = void 0;
      this.j = this.h = this.i = null;
      this.l = this.o = !1;
      if (a != ng)
        try {
          var b = this;
          a.call(
            void 0,
            function (c) {
              Pp(b, 2, c);
            },
            function (c) {
              Pp(b, 3, c);
            }
          );
        } catch (c) {
          Pp(this, 3, c);
        }
    },
    Rp = function () {
      this.next = this.context = this.h = this.j = this.g = null;
      this.i = !1;
    };
  Rp.prototype.reset = function () {
    this.context = this.h = this.j = this.g = null;
    this.i = !1;
  };
  var Sp = new Cp(
      function () {
        return new Rp();
      },
      function (a) {
        a.reset();
      }
    ),
    Tp = function (a, b, c) {
      var d = Sp.get();
      d.j = a;
      d.h = b;
      d.context = c;
      return d;
    },
    Vp = function (a, b, c) {
      Up(a, b, c, null) || Np(ee(b, a));
    },
    Wp = function (a) {
      return new Qp(function (b) {
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
            (g = a[f]), Vp(g, ee(e, f, !0), ee(e, f, !1));
        else b(d);
      });
    };
  Qp.prototype.then = function (a, b, c) {
    return Xp(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
  };
  Qp.prototype.$goog_Thenable = !0;
  var Zp = function (a, b) {
    b = Tp(b, b);
    b.i = !0;
    Yp(a, b);
  };
  Qp.prototype.v = function (a, b) {
    return Xp(this, null, a, b);
  };
  Qp.prototype.catch = Qp.prototype.v;
  Qp.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new $p(a);
      Np(function () {
        aq(this, b);
      }, this);
    }
  };
  var aq = function (a, b) {
      if (0 == a.g)
        if (a.i) {
          var c = a.i;
          if (c.h) {
            for (var d = 0, e = null, f = null, g = c.h; g && (g.i || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
            e &&
              (0 == c.g && 1 == d ? aq(c, b) : (f ? ((d = f), d.next == c.j && (c.j = d), (d.next = d.next.next)) : bq(c), cq(c, e, 3, b)));
          }
          a.i = null;
        } else Pp(a, 3, b);
    },
    Yp = function (a, b) {
      a.h || (2 != a.g && 3 != a.g) || dq(a);
      a.j ? (a.j.next = b) : (a.h = b);
      a.j = b;
    },
    Xp = function (a, b, c, d) {
      var e = Tp(null, null, null);
      e.g = new Qp(function (f, g) {
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
                void 0 === l && h instanceof $p ? g(h) : f(l);
              } catch (m) {
                g(m);
              }
            }
          : g;
      });
      e.g.i = a;
      Yp(a, e);
      return e.g;
    };
  Qp.prototype.A = function (a) {
    this.g = 0;
    Pp(this, 2, a);
  };
  Qp.prototype.B = function (a) {
    this.g = 0;
    Pp(this, 3, a);
  };
  var Pp = function (a, b, c) {
      0 == a.g &&
        (a === c && ((b = 3), (c = new TypeError("da"))),
        (a.g = 1),
        Up(c, a.A, a.B, a) || ((a.s = c), (a.g = b), (a.i = null), dq(a), 3 != b || c instanceof $p || eq(a, c)));
    },
    Up = function (a, b, c, d) {
      if (a instanceof Qp) return Yp(a, Tp(b || ng, c || null, d)), !0;
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
          if ("function" === typeof f) return fq(a, f, b, c, d), !0;
        } catch (g) {
          return c.call(d, g), !0;
        }
      return !1;
    },
    fq = function (a, b, c, d, e) {
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
    dq = function (a) {
      a.o || ((a.o = !0), Np(a.u, a));
    },
    bq = function (a) {
      var b = null;
      a.h && ((b = a.h), (a.h = b.next), (b.next = null));
      a.h || (a.j = null);
      return b;
    };
  Qp.prototype.u = function () {
    for (var a; (a = bq(this)); ) cq(this, a, this.g, this.s);
    this.o = !1;
  };
  var cq = function (a, b, c, d) {
      if (3 == c && b.h && !b.i) for (; a && a.l; a = a.i) a.l = !1;
      if (b.g) (b.g.i = null), gq(b, c, d);
      else
        try {
          b.i ? b.j.call(b.context) : gq(b, c, d);
        } catch (e) {
          hq.call(null, e);
        }
      Dp(Sp, b);
    },
    gq = function (a, b, c) {
      2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c);
    },
    eq = function (a, b) {
      a.l = !0;
      Np(function () {
        a.l && hq.call(null, b);
      });
    },
    hq = ba,
    $p = function (a) {
      aa.call(this, a);
    };
  G($p, aa);
  $p.prototype.name = "cancel";
  var iq = function (a, b) {
    R.call(this);
    this.h = a || 1;
    this.g = b || n;
    this.i = F(this.Kf, this);
    this.j = Date.now();
  };
  G(iq, R);
  k = iq.prototype;
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
    iq.O.K.call(this);
    this.stop();
    delete this.g;
  };
  var jq = function (a, b, c) {
    if ("function" === typeof a) c && (a = F(a, c));
    else if (a && "function" == typeof a.handleEvent) a = F(a.handleEvent, a);
    else throw Error("ea");
    return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0);
  };
  var kq = function (a, b, c) {
    M.call(this);
    this.g = a;
    this.j = b || 0;
    this.h = c;
    this.i = F(this.Pe, this);
  };
  G(kq, M);
  k = kq.prototype;
  k.Ib = 0;
  k.K = function () {
    kq.O.K.call(this);
    this.stop();
    delete this.g;
    delete this.h;
  };
  k.start = function (a) {
    this.stop();
    this.Ib = jq(this.i, void 0 !== a ? a : this.j);
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
  var lq = function (a) {
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
  var mq = function (a) {
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
  var nq = function () {};
  nq.prototype.g = null;
  nq.prototype.getOptions = function () {
    var a;
    (a = this.g) || ((a = {}), oq(this) && ((a[0] = !0), (a[1] = !0)), (a = this.g = a));
    return a;
  };
  var pq,
    qq = function () {};
  G(qq, nq);
  var rq = function (a) {
      return (a = oq(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    oq = function (a) {
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
  pq = new qq();
  var sq = function (a) {
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
    this.J = this.i = !1;
  };
  G(sq, R);
  var tq = /^https?$/i,
    uq = ["POST", "PUT"],
    vq = [],
    wq = function (a, b, c, d, e, f, g) {
      var h = new sq();
      vq.push(h);
      b && h.listen("complete", b);
      h.td("ready", h.U);
      f && (h.l = Math.max(0, f));
      g && (h.i = g);
      h.send(a, c, d, e);
    };
  sq.prototype.U = function () {
    this.ga();
    wa(vq, this);
  };
  sq.prototype.ge = function () {
    return this.o;
  };
  sq.prototype.he = function () {
    return this.i;
  };
  sq.prototype.send = function (a, b, c, d) {
    if (this.P) throw Error("ha`" + this.F + "`" + a);
    b = b ? b.toUpperCase() : "GET";
    this.F = a;
    this.j = 0;
    this.B = !1;
    this.g = !0;
    this.P = this.A ? rq(this.A) : rq(pq);
    this.v = this.A ? this.A.getOptions() : pq.getOptions();
    this.P.onreadystatechange = F(this.G, this);
    try {
      (this.D = !0), this.P.open(b, String(a), !0), (this.D = !1);
    } catch (g) {
      xq(this);
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
    !ta(uq, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    b = t(c);
    for (d = b.next(); !d.done; d = b.next()) (c = t(d.value)), (d = c.next().value), (c = c.next().value), this.P.setRequestHeader(d, c);
    this.o && (this.P.responseType = this.o);
    "withCredentials" in this.P && this.P.withCredentials !== this.i && (this.P.withCredentials = this.i);
    try {
      yq(this),
        0 < this.l &&
          ((this.J = zq(this.P)) ? ((this.P.timeout = this.l), (this.P.ontimeout = F(this.N, this))) : (this.u = jq(this.N, this.l, this))),
        (this.s = !0),
        this.P.send(a),
        (this.s = !1);
    } catch (g) {
      xq(this);
    }
  };
  var zq = function (a) {
    return H && "number" === typeof a.timeout && void 0 !== a.ontimeout;
  };
  sq.prototype.N = function () {
    "undefined" != typeof Wd && this.P && ((this.j = 8), this.dispatchEvent("timeout"), this.abort(8));
  };
  var xq = function (a) {
      a.g = !1;
      a.P && ((a.h = !0), a.P.abort(), (a.h = !1));
      a.j = 5;
      Aq(a);
      Bq(a);
    },
    Aq = function (a) {
      a.B || ((a.B = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
  sq.prototype.abort = function (a) {
    this.P &&
      this.g &&
      ((this.g = !1),
      (this.h = !0),
      this.P.abort(),
      (this.h = !1),
      (this.j = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      Bq(this));
  };
  sq.prototype.K = function () {
    this.P && (this.g && ((this.g = !1), (this.h = !0), this.P.abort(), (this.h = !1)), Bq(this, !0));
    sq.O.K.call(this);
  };
  sq.prototype.G = function () {
    this.pa || (this.D || this.s || this.h ? Cq(this) : this.R());
  };
  sq.prototype.R = function () {
    Cq(this);
  };
  var Cq = function (a) {
      if (a.g && "undefined" != typeof Wd && (!a.v[1] || 4 != (a.P ? a.P.readyState : 0) || 2 != a.getStatus()))
        if (a.s && 4 == (a.P ? a.P.readyState : 0)) jq(a.G, 0, a);
        else if ((a.dispatchEvent("readystatechange"), 4 == (a.P ? a.P.readyState : 0))) {
          a.g = !1;
          try {
            Dq(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : ((a.j = 6), a.getStatus(), Aq(a));
          } finally {
            Bq(a);
          }
        }
    },
    Bq = function (a, b) {
      if (a.P) {
        yq(a);
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
    yq = function (a) {
      a.P && a.J && (a.P.ontimeout = null);
      a.u && (n.clearTimeout(a.u), (a.u = null));
    };
  sq.prototype.isActive = function () {
    return !!this.P;
  };
  var Dq = function (a) {
    var b = a.getStatus(),
      c;
    if (!(c = mq(b))) {
      if ((b = 0 === b))
        (a = String(a.F).match(ri)[1] || null),
          !a && n.self && n.self.location && (a = n.self.location.protocol.slice(0, -1)),
          (b = !tq.test(a ? a.toLowerCase() : ""));
      c = b;
    }
    return c;
  };
  sq.prototype.getStatus = function () {
    try {
      return 2 < (this.P ? this.P.readyState : 0) ? this.P.status : -1;
    } catch (a) {
      return -1;
    }
  };
  var Eq = function (a) {
    if (a.P) {
      a: {
        a = a.P.responseText;
        if (n.JSON)
          try {
            var b = n.JSON.parse(a);
            break a;
          } catch (c) {}
        b = lq(a);
      }
      return b;
    }
  };
  var op = function () {
    R.call(this);
    var a = this;
    this.h = navigator.onLine;
    this.g = new Fq(function (c) {
      return Gq(a, c);
    });
    N(this, this.g);
    var b = new rn(this);
    N(this, b);
    b.listen(window, ["online", "offline"], this.i);
    this.h ||
      Np(function () {
        return a.g.start();
      });
  };
  E(op, R);
  op.prototype.qc = function () {
    return this.h;
  };
  var Gq = function (a, b) {
    a.h != b && ((a.h = b), a.dispatchEvent(new Hq(b)), b ? a.g.stop() : a.g.start());
  };
  op.prototype.i = function () {
    Gq(this, navigator.onLine);
  };
  op.prototype.K = function () {
    this.g.stop();
    R.prototype.K.call(this);
  };
  op.L = function () {
    return zh(op);
  };
  var Hq = function (a) {
    ij.call(this, "change");
    this.qc = a;
  };
  E(Hq, ij);
  var Fq = function (a) {
    M.call(this);
    var b = this;
    this.o = a;
    this.j = !1;
    this.h = 0;
    this.l = new kq(function () {
      return Iq(b, !1);
    }, 1e4);
    N(this, this.l);
    this.i = new kq(function () {
      return Jq(b);
    }, 5e3);
    N(this, this.i);
    this.g = null;
  };
  E(Fq, M);
  Fq.prototype.start = function () {
    this.j || ((this.j = !0), (this.h = 0), Jq(this));
  };
  Fq.prototype.stop = function () {
    Mq(this);
    this.j = !1;
  };
  var Jq = function (a) {
      navigator.onLine || a.h++;
      var b = Ni().toString();
      a.g = new Image();
      a.g.onload = function () {
        return Iq(a, !0);
      };
      a.g.onerror = function () {
        return Iq(a, !1);
      };
      a.g.onabort = function () {
        return Iq(a, !1);
      };
      a.g.src = b;
      a.l.start();
    },
    Iq = function (a, b) {
      Mq(a);
      b ? (a.o(!0), a.stop()) : !navigator.onLine && 2 <= a.h ? (a.o(!1), a.stop()) : a.i.start();
    },
    Mq = function (a) {
      a.g && ((a.g.onload = a.g.onerror = a.g.onabort = null), (a.g = null));
      a.l.stop();
      a.i.stop();
    },
    Mi = new Bi("https://www.google.com/images/cleardot.gif");
  var Nq = function (a) {
    R.call(this);
    this.h = a;
    this.enabled = !1;
    this.i = function () {
      return Date.now();
    };
    this.j = this.i();
  };
  E(Nq, R);
  var Oq = function (a, b) {
    a.h = b;
    a.g && a.enabled ? (a.stop(), a.start()) : a.g && a.stop();
  };
  Nq.prototype.start = function () {
    var a = this;
    this.enabled = !0;
    this.g ||
      ((this.g = setTimeout(function () {
        Pq(a);
      }, this.h)),
      (this.j = this.i()));
  };
  Nq.prototype.stop = function () {
    this.enabled = !1;
    this.g && (clearTimeout(this.g), (this.g = void 0));
  };
  var Pq = function (a) {
    if (a.enabled) {
      var b = Math.max(a.i() - a.j, 0);
      b < 0.8 * a.h
        ? (a.g = setTimeout(function () {
            Pq(a);
          }, a.h - b))
        : (a.g && (clearTimeout(a.g), (a.g = void 0)), a.dispatchEvent("tick"), a.enabled && (a.stop(), a.start()));
    } else a.g = void 0;
  };
  var Qq = function (a) {
    this.I = v(a);
  };
  E(Qq, J);
  var Rq = function (a) {
    this.I = v(a);
  };
  E(Rq, J);
  var Sq = function (a) {
    this.g = this.h = this.i = a;
  };
  Sq.prototype.reset = function () {
    this.g = this.h = this.i;
  };
  Sq.prototype.aa = function () {
    return this.h;
  };
  var Tq = function (a) {
    this.I = v(a);
  };
  E(Tq, J);
  var Uq = function (a) {
    this.I = v(a);
  };
  E(Uq, J);
  Uq.Ka = [1];
  var Vq = function (a) {
    this.I = v(a);
  };
  E(Vq, J);
  var Wq = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
  new Uq();
  var Xq = function (a) {
    this.I = v(a);
  };
  E(Xq, J);
  var Yq = function (a) {
    this.I = v(a);
  };
  E(Yq, J);
  var Zq = function (a) {
    this.I = v(a, 35);
  };
  E(Zq, J);
  var $q = function (a, b) {
    return Df(a, 8, b);
  };
  Zq.Ka = [3, 20, 27];
  var ar = function (a) {
    this.I = v(a, 19);
  };
  E(ar, J);
  ar.prototype.Xb = function (a) {
    return $c(this, 2, a);
  };
  ar.Ka = [3, 5];
  var br = function (a) {
    this.I = v(a, 7);
  };
  E(br, J);
  var cr = (function (a) {
    return function (b) {
      if (null == b || "" == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        Xa(b, 32);
        b = ub(a, b);
      }
      return b;
    };
  })(br);
  br.Ka = [5, 6];
  var dr = function (a) {
    this.I = v(a);
  };
  E(dr, J);
  var er = new (function (a, b) {
    this.h = a;
    this.g = b;
    this.i = yf;
    this.defaultValue = void 0;
  })(175237375, dr);
  var ir = function (a) {
    M.call(this);
    var b = this;
    this.h = [];
    this.R = "";
    this.N = !1;
    this.S = this.G = -1;
    this.U = !1;
    this.u = this.j = null;
    this.F = this.J = this.s = this.l = 0;
    this.ba = 1;
    this.timeoutMillis = 0;
    this.v = !1;
    this.Db = a.Db;
    this.lb = a.lb || function () {};
    this.i = new fr(a.Db, a.ob);
    this.network = a.network;
    this.Fb = a.Fb || null;
    this.bufferSize = 1e3;
    this.ca = ee(Sg, 0, 1);
    this.B = a.Lf || null;
    this.Za = a.Za || null;
    this.Nb = a.Nb || !1;
    this.Eb = a.Eb || null;
    this.withCredentials = !a.de;
    this.ob = a.ob || !1;
    this.Z = !this.ob && !!fh() && !!fh().navigator && void 0 !== fh().navigator.sendBeacon;
    var c = $c(new Xq(), 1, 1);
    gr(this.i, c);
    this.o = new Sq(1e4);
    this.g = new Nq(this.o.aa());
    a = hr(this, a.Xd);
    yj(this.g, "tick", a, !1, this);
    this.A = new Nq(6e5);
    yj(this.A, "tick", a, !1, this);
    this.Nb || this.A.start();
    this.ob ||
      (yj(document, "visibilitychange", function () {
        "hidden" === document.visibilityState && b.D();
      }),
      yj(document, "pagehide", this.D, !1, this));
  };
  E(ir, M);
  var hr = function (a, b) {
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
  ir.prototype.K = function () {
    this.D();
    this.g.stop();
    this.A.stop();
    M.prototype.K.call(this);
  };
  var jr = function (a) {
    a.B ||
      (a.B =
        0.01 > a.ca() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.B;
  };
  ir.prototype.ee = function (a) {
    a instanceof Zq ? this.log(a) : ((a = $q(new Zq(), Ef(a))), this.log(a));
  };
  var kr = function (a, b) {
    a.o = new Sq(1 > b ? 1 : b);
    Oq(a.g, a.o.aa());
  };
  ir.prototype.log = function (a) {
    a = a.clone();
    var b = this.ba++;
    a = B(a, 21, b);
    Bf(a) || ((b = Date.now()), (b = Number.isFinite(b) ? b.toString() : "0"), uf(a, 1, qb(b)));
    null != Af(a, 15) || B(a, 15, 60 * new Date().getTimezoneOffset());
    this.j && ((b = this.j.clone()), C(a, 16, b));
    b = this.h.length - this.bufferSize + 1;
    0 < b && (this.h.splice(0, b), (this.l += b));
    this.h.push(a);
    this.Nb || this.g.enabled || this.g.start();
  };
  ir.prototype.flush = function (a, b) {
    var c = this;
    if (0 === this.h.length) a && a();
    else if (this.v) lr(this.i, 3), mr(this);
    else {
      var d = Date.now();
      if (this.S > d && this.G < d) b && b("throttled");
      else {
        lr(this.i, 1);
        var e = nr(this.i, this.h, this.l, this.s, this.Fb, this.J, this.F);
        d = {};
        var f = this.lb();
        f && (d.Authorization = f);
        var g = jr(this);
        this.Za && ((d["X-Goog-AuthUser"] = this.Za), (g = xi(g, "authuser", this.Za)));
        this.Eb && ((d["X-Goog-PageId"] = this.Eb), (g = xi(g, "pageId", this.Eb)));
        if (f && this.R === f) b && b("stale-auth-token");
        else {
          this.h = [];
          this.g.enabled && this.g.stop();
          this.l = 0;
          var h = Ef(e),
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
              Oq(c.g, c.o.aa());
              if (r) {
                var A = null;
                try {
                  var I = JSON.stringify(JSON.parse(r.replace(")]}'\n", "")));
                  A = cr(I);
                } catch (ya) {}
                if (A) {
                  r = Number;
                  I = "-1";
                  I = void 0 === I ? "0" : I;
                  var Y = Bf(A);
                  r = r(null != Y ? Y : I);
                  0 < r && ((c.G = Date.now()), (c.S = c.G + r));
                  A = er.g ? er.i(A, er.g, er.h, !0) : er.i(A, er.h, null, !0);
                  if ((r = null === A ? void 0 : A))
                    (A = -1), (r = mb(tf(r, 1))), (A = null != r ? r : void 0 === A ? 0 : A), -1 !== A && (c.U || kr(c, A));
                }
              }
              a && a();
              c.s = 0;
            },
            u = function (r, A) {
              var I = e.I;
              var Y = Hb(I),
                ya = !!(2 & Y),
                W = Y,
                qa = ya ? 1 : 2;
              Y = 1 === qa;
              var Kq = 2 === qa;
              qa = !1;
              var Ph = !!(2 & W) && Kq,
                Fb = W,
                Qh = Fb & 2;
              W = sf(I, Fb, 3);
              Array.isArray(W) || (W = Qb);
              var X = Ta(W);
              0 === X && Fb & 32 && !Qh ? ((X |= 33), Ua(W, X)) : X & 1 || ((X |= 1), Ua(W, X));
              Qh && ((Fb = !1), X & 2 || (Xa(W, 34), (Fb = !!(4 & X))), Fb && Object.freeze(W));
              X = W;
              W = Hb(I);
              var K = Ta(X),
                ac = !!(2 & K);
              Fb = !!(4 & K);
              Qh = !!(32 & K);
              var Ke = (ac && Fb) || !!(2048 & K);
              if (!Fb) {
                var Gb = X,
                  Le = W,
                  Hk = !!(2 & K);
                Hk && (Le = Wa(Le, 2, !0));
                for (var Ik = !Hk, Jk = !0, Rh = 0, Kk = 0; Rh < Gb.length; Rh++) {
                  var Lk = sb(Gb[Rh], Zq, Le);
                  if (Lk instanceof Zq) {
                    if (!Hk) {
                      var Lq = !!(Ta(Lk.I) & 2);
                      Ik && (Ik = !Lq);
                      Jk && (Jk = Lq);
                    }
                    Gb[Kk++] = Lk;
                  }
                }
                Kk < Rh && (Gb.length = Kk);
                K = Wa(K, 4, !0);
                K = Wa(K, 16, Jk);
                K = Wa(K, 8, Ik);
                Ua(Gb, K);
                ac && !Ph && (Object.freeze(X), (Ke = !0));
              }
              Ph = K;
              ac = !!(8 & K) || (Y && !X.length);
              if (!ya && !ac) {
                Ke && ((X = Sa(X)), (Ke = !1), (Ph = 0), (K = Lb(K, W, qa)), (W = Kb(I, W, 3, X)));
                ya = X;
                ac = K;
                for (Gb = 0; Gb < ya.length; Gb++) (K = ya[Gb]), (Le = Jb(K)), K !== Le && (ya[Gb] = Le);
                ac = Wa(ac, 8, !0);
                K = ac = Wa(ac, 16, !ya.length);
              }
              Ke ||
                (Y ? (K = Wa(K, !X.length || (16 & K && (!Fb || Qh)) ? 2 : 2048, !0)) : qa || (K = Wa(K, 32, !1)),
                K !== Ph && Ua(X, K),
                Y && (Object.freeze(X), (Ke = !0)));
              Kq && Ke && ((X = Sa(X)), (K = Lb(K, W, qa)), Ua(X, K), Kb(I, W, 3, X));
              I = X;
              Y = Af(e, 14);
              qa = c.o;
              qa.g = Math.min(3e5, 2 * qa.g);
              qa.h = Math.min(3e5, qa.g + Math.round(0.2 * (Math.random() - 0.5) * qa.g));
              Oq(c.g, c.o.aa());
              401 === r && f && (c.R = f);
              Y && (c.l += Y);
              void 0 === A && (A = (500 <= r && 600 > r) || 401 === r || 0 === r);
              A && ((c.h = I.concat(c.h)), c.Nb || c.g.enabled || c.g.start());
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
  ir.prototype.D = function () {
    or(this.i, !0);
    this.N && (lr(this.i, 3), mr(this));
    this.flush();
    or(this.i, !1);
  };
  var mr = function (a) {
      pr(a, function (b, c) {
        b = xi(b, "format", "json");
        var d = !1;
        try {
          d = fh().navigator.sendBeacon(b, Ef(c));
        } catch (e) {}
        a.v && !d && (a.v = !1);
        return d;
      });
    },
    pr = function (a, b) {
      if (0 !== a.h.length) {
        var c = jr(a);
        for (var d = c.search(zi), e = 0, f, g = []; 0 <= (f = yi(c, e, d)); )
          g.push(c.substring(e, f)), (e = Math.min(c.indexOf("&", f) + 1 || d, d));
        g.push(c.slice(e));
        c = g.join("").replace(Ai, "$1");
        c = wi(c, "auth", a.lb(), "authuser", a.Za || "0");
        for (d = 0; 10 > d && a.h.length; ++d) {
          e = a.h.slice(0, 32);
          f = nr(a.i, e, a.l, a.s, a.Fb, a.J, a.F);
          if (!b(c, f)) {
            ++a.s;
            break;
          }
          a.l = 0;
          a.s = 0;
          a.J = 0;
          a.F = 0;
          a.h = a.h.slice(e.length);
        }
        a.g.enabled && a.g.stop();
      }
    },
    fr = function (a, b) {
      this.ob = b = void 0 === b ? !1 : b;
      this.h = this.locale = null;
      this.g = new ar();
      Number.isInteger(a) && this.g.Xb(a);
      b || (this.locale = document.documentElement.getAttribute("lang"));
      gr(this, new Xq());
    };
  fr.prototype.Xb = function (a) {
    this.g.Xb(a);
    return this;
  };
  var gr = function (a, b) {
      C(a.g, 1, b);
      tf(b, 1) || $c(b, 1, 1);
      if (!a.ob) {
        b = qr(a);
        var c = tf(b, 5);
        ((null == c || "string" === typeof c) && c) || Df(b, 5, a.locale);
      }
      a.h && ((b = qr(a)), yf(b, Uq, 9) || C(b, 9, a.h));
    },
    lr = function (a, b) {
      wf(rr(a), Vq, 11) && ((a = sr(a)), $c(a, 1, b));
    },
    or = function (a, b) {
      wf(rr(a), Vq, 11) && ((a = sr(a)), Cf(a, 2, b));
    },
    rr = function (a) {
      return yf(a.g, Xq, 1);
    },
    tr = function (a, b) {
      var c = void 0 === c ? Wq : c;
      b(fh(), c)
        .then(function (d) {
          a.h = d;
          d = qr(a);
          C(d, 9, a.h);
          return !0;
        })
        .catch(function () {
          return !1;
        });
    },
    qr = function (a) {
      a = rr(a);
      var b = yf(a, Vq, 11);
      b || ((b = new Vq()), C(a, 11, b));
      return b;
    },
    sr = function (a) {
      a = qr(a);
      var b = yf(a, Tq, 10);
      b || ((b = new Tq()), Cf(b, 2, !1), C(a, 10, b));
      return b;
    },
    nr = function (a, b, c, d, e, f, g) {
      c = void 0 === c ? 0 : c;
      f = void 0 === f ? 0 : f;
      g = void 0 === g ? 0 : g;
      d = void 0 === d ? 0 : d;
      if (wf(rr(a), Vq, 11)) {
        var h = sr(a);
        Zc(h, 3, d);
      }
      wf(rr(a), Vq, 11) && ((d = sr(a)), Zc(d, 4, f));
      wf(rr(a), Vq, 11) && ((f = sr(a)), Zc(f, 5, g));
      a = a.g.clone();
      a = uf(a, 4, qb(Date.now().toString()));
      b = zf(a, 3, b);
      e &&
        ((a = new Qq()),
        (e = Zc(a, 13, e)),
        (a = new Rq()),
        (e = C(a, 2, e)),
        (a = new Yq()),
        (e = C(a, 1, e)),
        (e = $c(e, 2, 9)),
        C(b, 18, e));
      c && B(b, 14, c);
      return b;
    };
  var ur = function (a) {
    var b;
    this.h = (b = void 0 === b ? !1 : b) ? null : a;
    this.g = b ? a : null;
    this.h && ((a = this.h), (a.N = a.Z));
  };
  ur.prototype.i = function (a) {
    var b = this.g ? this.g.ee.bind(this.g) : this.h.log.bind(this.h),
      c = this.g ? this.g.flush.bind(this.g) : this.h.flush.bind(this.h);
    a = $q(new Zq(), Ef(a));
    b(a);
    c();
  };
  var vr = function (a) {
    var b;
    this.h = (b = void 0 === b ? !1 : b) ? null : a;
    this.g = b ? a : null;
  };
  vr.prototype.i = function (a) {
    var b = this.g ? this.g.ee.bind(this.g) : this.h.log.bind(this.h),
      c = this.g ? this.g.flush.bind(this.g) : this.h.flush.bind(this.h);
    a = $q(new Zq(), Ef(a));
    b(a);
    return new Qp(
      function (d) {
        c(d, function () {
          d();
        });
      }.bind(this)
    );
  };
  var wr = function () {
    ip.call(this);
  };
  E(wr, ip);
  var xr = new cp("high_frequency_builder");
  var yr = function (a, b, c) {
    a = new iq(a);
    N(c, a);
    var d = new rn(c);
    N(c, d);
    d.listen(a, "tick", b);
    a.start();
  };
  var zr = function () {
    ip.call(this);
  };
  E(zr, ip);
  var Ar = function (a, b) {
      var c = 1e3 * Date.now(),
        d = new ep();
      var e = new dp();
      e = B(e, 1, c);
      C(d, 1, e);
      $c(d, 3, 1);
      C(a.g, 8, d);
      B(a.g, 12, b);
      B(a.g, 13, b);
      B(a.g, 4, c);
      B(a.g, 3, b);
      return a;
    },
    Br = new cp("system_builder");
  var Cr = function (a, b) {
    if (b && a in b) return a;
    var c = Ne ? "Webkit" : Me ? "Moz" : H ? "ms" : null;
    return c ? ((c = c.toLowerCase()), (a = c + Kg(a)), void 0 === b || a in b ? a : null) : null;
  };
  var Dr = function () {
    ij.call(this, "visibilitychange");
  };
  E(Dr, ij);
  var ld = new WeakMap(),
    hd = function (a, b) {
      a = [a];
      for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
      return a.join("\v");
    };
  var Er = function (a) {
    R.call(this);
    this.g = a || qd();
    if ((this.h = this.hf())) this.i = yj(this.g.g, this.h, F(this.mf, this));
  };
  G(Er, R);
  k = Er.prototype;
  k.hf = nd(function () {
    var a = this.isSupported(),
      b = "hidden" != this.lc();
    if (a) {
      var c;
      b ? (c = (((Ne ? "Webkit" : Me ? "Moz" : H ? "ms" : null) || "") + "visibilitychange").toLowerCase()) : (c = "visibilitychange");
      a = c;
    } else a = null;
    return a;
  });
  k.lc = nd(function () {
    return Cr("hidden", this.g.g);
  });
  k.jf = nd(function () {
    return Cr("visibilityState", this.g.g);
  });
  k.isSupported = function () {
    return !!this.lc();
  };
  k.mf = function () {
    var a = this.isSupported() ? this.g.g[this.jf()] : null;
    a = new Dr(!!this.g.g[this.lc()], a);
    this.dispatchEvent(a);
  };
  k.K = function () {
    Gj(this.i);
    Er.O.K.call(this);
  };
  var Fr = function (a, b) {
    M.call(this);
    this.h = a;
    this.g = new Er(b);
    N(this, this.g);
    this.i = new rn(this);
    N(this, this.i);
    this.g.isSupported() && this.i.listen(this.g, "visibilitychange", this.j);
  };
  E(Fr, M);
  Fr.prototype.j = function () {
    if (this.h.Hd()) {
      var a = this.g;
      a = !!a.g.g[a.lc()];
      a = this.h.Gd(a ? 102001 : 102e3);
      this.h.we(a);
    }
  };
  var Gr = function (a, b, c) {
    c = void 0 === c ? !1 : c;
    M.call(this);
    this.h = a;
    this.g = b;
    N(this, this.g);
    this.j = c;
    this.i = null;
  };
  E(Gr, M);
  k = Gr.prototype;
  k.we = function (a) {
    var b = this.h;
    B(a.g, 6, b.j);
    a = lp(a);
    b.g.add(a);
    b.i = !0;
    b = this.g;
    3 <= b.g.g.W() && b.h.qa();
  };
  k.Gd = function (a) {
    return Ar(Hr(this.h, a), this.h.s++);
  };
  k.Qe = function () {
    var a = this.g;
    if (!a.l || a.g.i) {
      var b = lp(Ir(a.g, 691));
      b = Jr(a.g, [b]);
      a.o.i(b);
    }
    a.j();
    this.h.l = !1;
    this.i && (pc(this.i), (this.i = null));
  };
  k.Se = function () {
    var a = this.h,
      b = Ir(a, 716);
    Kr(a, b);
    b = lp(b);
    a.g.add(b);
    a.u = !0;
    a.l = !0;
    this.g.initialize();
    this.g.h.qa();
    this.j && (this.i = new Fr(this));
  };
  k.Re = function () {
    this.g.j();
    Wp(Array.from(this.g.i)).then();
  };
  k.Hd = function () {
    var a = this.h;
    return a.u && a.l && !0;
  };
  var Lr = function (a, b, c) {
    M.call(this);
    this.o = null != c ? a.bind(c) : a;
    this.l = b;
    this.j = null;
    this.h = !1;
    this.i = 0;
    this.g = null;
  };
  E(Lr, M);
  k = Lr.prototype;
  k.qa = function (a) {
    this.j = arguments;
    this.g || this.i ? (this.h = !0) : Mr(this);
  };
  k.stop = function () {
    this.g && (n.clearTimeout(this.g), (this.g = null), (this.h = !1), (this.j = null));
  };
  k.pause = function () {
    this.i++;
  };
  k.resume = function () {
    this.i--;
    this.i || !this.h || this.g || ((this.h = !1), Mr(this));
  };
  k.K = function () {
    M.prototype.K.call(this);
    this.stop();
  };
  var Mr = function (a) {
    a.g = jq(function () {
      a.g = null;
      a.h && !a.i && ((a.h = !1), Mr(a));
    }, a.l);
    var b = a.j;
    a.j = null;
    a.o.apply(null, b);
  };
  var Nr = function (a, b, c, d, e) {
    M.call(this);
    this.g = a;
    this.u = b;
    this.o = c;
    this.h = new Lr(this.j, 3e3, this);
    this.i = new Set();
    this.l = d;
    this.s = e || 6e4;
  };
  E(Nr, M);
  Nr.prototype.initialize = function () {
    yr(this.s, this.h.qa, this.h);
    yr(36e5, this.v, this);
  };
  Nr.prototype.j = function () {
    var a = this;
    if (0 != this.g.g.W() && (!this.l || this.g.i)) {
      var b = Or(this.g),
        c = this.u.i(b);
      c &&
        (Zp(c, function () {
          return void a.i.delete(c);
        }),
        this.i.add(c));
    }
  };
  Nr.prototype.v = function () {
    var a = this.g,
      b = Ir(a, 1153);
    b = lp(b);
    a.g.add(b);
    this.h.qa();
  };
  var Pr = function () {};
  Pr.prototype.md = function () {
    return new wr();
  };
  var Qr = function () {
    this.h = {};
    this.i = {};
    this.g = null;
  };
  var Rr = function () {
    this.g = [];
  };
  Rr.prototype.add = function (a) {
    this.g.push(a);
  };
  Rr.prototype.W = function () {
    return this.g.length;
  };
  var Sr = function () {
    this.g = {};
  };
  Sr.prototype.add = function (a) {
    var b = Af(a.g, 12);
    this.g[b] = a;
  };
  Sr.prototype.remove = function (a) {
    delete this.g[a];
  };
  var Tr = function (a) {
    this.I = v(a);
  };
  E(Tr, J);
  var Ur = function (a) {
    this.I = v(a, 500);
  };
  E(Ur, J);
  Ur.Ka = [1];
  var Vr = function (a, b) {
      this.h = a;
      this.v = b;
      this.s = 1;
      this.o = this.j = null;
      this.A = new Sr();
      this.g = new Rr();
      this.l = this.u = this.i = !1;
    },
    Hr = function (a, b) {
      a = jp(new ip().initialize(new Tr(), a.v), Br);
      B(a.g, 10, b);
      return a;
    },
    Or = function (a) {
      var b = a.g,
        c = b.g;
      b.g = [];
      return Jr(a, c);
    },
    Jr = function (a, b) {
      var c = new Ur();
      var d = a.h.i.clone();
      c = C(c, 2, d);
      d = a.h;
      (d = d.h ? d.h.clone() : null) && C(c, 5, d);
      var e;
      d = a.h;
      for (var f, g = b.length - 1; 0 <= g; g--) {
        var h = yf(b[g], hp, 5);
        if (h && yf(h, hg, 1)) {
          h = yf(h, hg, 1);
          null != xf(h, 12) && void 0 === e && (e = xf(h, 12));
          h = yf(h, gg, 20);
          if (void 0 !== h && void 0 === f) {
            f = new up();
            var l = xf(h, 2);
            void 0 !== l && Cf(f, 2, l);
            h = xf(h, 1);
            void 0 !== h && Cf(f, 1, h);
          }
          if (void 0 !== e && void 0 !== f) break;
        }
      }
      d = d.g ? d.g.clone() : null;
      if (void 0 !== e || void 0 !== f) d || (d = new fd()), void 0 !== e && Cf(d, 6, e), void 0 !== f && C(d, 13, f);
      (e = d) && C(c, 3, e);
      a = a.h.j.clone();
      C(c, 4, a);
      zf(c, 1, b);
      return c;
    },
    Ir = function (a, b) {
      var c = Ar(Hr(a, b), a.s++);
      var d = a.A;
      var e = Object.keys(d.g);
      if (0 == e.length) d = null;
      else {
        for (var f = [], g = 0; g < e.length; g++) {
          var h = Number(e[g]),
            l = d.g[h],
            m = new fp();
          h = B(m, 1, h);
          l = Af(l.g, 10);
          l = B(h, 2, null == l ? void 0 : l);
          f.push(l);
        }
        d = f;
      }
      716 != b && ((b = a.o), B(c.g, 6, a.j), (e = new gp()), (b = B(e, 1, b)), d && zf(b, 2, d), (d = kp(c)), C(d, 3, b));
      Kr(a, c);
      return c;
    },
    Kr = function (a, b) {
      a.j = Af(b.g, 12);
      a.o = Af(yf(yf(b.g, ep, 8), dp, 1), 1);
    };
  var Wr = function () {};
  Wr.prototype.md = function () {
    return new zr();
  };
  var Xr = function () {
    this.g = this.h = null;
  };
  var Yr = function () {
    this.j = this.l = null;
    this.h = new Bp();
    this.g = null;
    this.i = !1;
  };
  var Zr = function () {};
  Zr.prototype.send = function (a, b, c) {
    b = void 0 === b ? function () {} : b;
    c = void 0 === c ? function () {} : c;
    wq(
      a.url,
      function (d) {
        d = d.target;
        if (Dq(d)) {
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
  var $r = function (a, b) {
    M.call(this);
    this.Db = a;
    this.Za = b;
    this.g = !1;
    this.network = new Zr();
  };
  E($r, M);
  var as = function (a, b) {
    a.lb = b;
  };
  $r.prototype.de = function () {
    this.v = !0;
    return this;
  };
  var bs = function (a) {
    var b = new ir({
      Db: a.Db,
      lb: a.lb ? a.lb : Pg,
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
    a.l && gr(b.i, a.l);
    if (a.j) {
      var c = a.j,
        d = qr(b.i);
      Df(d, 7, c);
    }
    a.i && (b.u = a.i);
    a.Fb && (b.Fb = a.Fb);
    a.h && ((c = a.h) ? (b.j || (b.j = new Ff()), (c = Ef(c)), Df(b.j, 4, c)) : b.j && uf(b.j, 4));
    a.s && ((c = a.s), b.j || (b.j = new Ff()), Mb(b.j, 2, c, Pb));
    a.o && ((c = a.o), (b.U = !0), kr(b, c));
    a.u && tr(b.i, a.u);
    a.network.Xb && a.network.Xb(a.Db);
    a.network.Gf && a.network.Gf(b);
    return b;
  };
  var cs = function (a) {
      this.i = void 0 === a ? !1 : a;
      this.g = null;
      this.j = new ap();
      new eg();
      this.h = [];
    },
    es = function (a, b) {
      a.g = b;
      gd(a.g.h.h);
      a.g.Se();
      a.h.forEach(function (c) {
        return c();
      });
      a.h.length = 0;
      "undefined" !== typeof window &&
        yj(fh(), "unload", function () {
          a.g.Hd() && ds(a);
        });
    },
    ds = function (a) {
      a.g && a.g.Qe();
    };
  cs.prototype.log = function (a, b, c) {
    var d = this;
    if (this.g) {
      var e = this.g.Gd(a);
      e = jp(e, qp);
      bp(this.j, np(e));
      void 0 !== b && b(e);
      c || this.i || pp(e);
      this.g.we(e);
      this.i && this.g && this.g.Re();
    } else
      this.h.push(function () {
        return d.log(a, b, c);
      });
  };
  var hs = function (a) {
      var b = fs;
      Wi("n_ugat");
      var c = new Yr();
      Df(c.h.i, 1, b);
      $c(c.h.i, 6, 72);
      b = new Qr();
      b.h[qp.g] = new rp();
      var d = Xi("n_ugs"),
        e = Xi("n_rs"),
        f = new tp();
      $c(f.g, 1, d);
      $c(f.g, 2, e);
      b.i.keep_invariants = f;
      b.g && f.h(b.g);
      c.g = b;
      c.i = !0;
      a = gs(a);
      c.l = new vr(a);
      a = new ur(a);
      c.j = a;
      a = new Xr();
      a.h = c.h;
      null != c.g && (a.g = c.g);
      null == a.g && (a.g = new Qr());
      a.g.h[Br.g] = new Wr();
      a.g.h[xr.g] = new Pr();
      b = a.g;
      d = a.h;
      wf(cd(d), xp, 1) || ((e = cd(d)), (f = new xp()), C(e, 1, f));
      d = yf(cd(d), xp, 1);
      b.g = d;
      d = fc(b.i);
      for (e = 0; e < d.length; e++) d[e].h(b.g);
      a = new Vr(a.h, a.g);
      b = new Nr(a, c.l, c.j, !1, null);
      return new Gr(a, b, c.i);
    },
    gs = function (a) {
      var b = !1;
      b = void 0 === b ? !1 : b;
      var c = new $r(128, "0");
      a &&
        as(c, function () {
          return "Bearer " + a();
        });
      b && ((c.g = !0), (c.network = { send: od }));
      return bs(c);
    };
  var is = function () {
    R.call(this);
    this.Z = zh(cs);
    this.G = "";
    this.g = null;
    this.F = [];
    this.h = xc.L();
    N(this, this.h);
    this.i = null;
    this.j = !1;
    this.l = "";
    this.v = !1;
    this.o = null;
    this.U = [];
    this.D = new Set();
    this.J = !1;
    this.R = this.B = this.N = !0;
    this.S = 0;
    this.u = new Lr(this.ba, 50, this);
    this.A = new rn(this);
    N(this, this.A);
    this.A.listen(this, "k", this.s).listen(this.h, "F", this.s);
  };
  E(is, R);
  var ps = function (a, b) {
      var c = !a.g;
      b.sessionId && (a.G = b.sessionId);
      b.embedInfo && ((a.i = new Qc(b.embedInfo)), (a.j = !0));
      a.v = !!b.blankNote;
      a.v ? (a.g && a.j && (a.o = a.g), (a.j = !1), (a.g = null)) : a.o && ((a.g = a.o), (a.j = !0), (a.o = null));
      if (b.savedNode && !a.v) {
        var d = Gc(b.savedNode);
        if (d.length) {
          a.g = new z(d[0]);
          for (var e = 1, f = void 0; (f = d[e]); e++) qo(a.g, new z(f));
          js(a);
        }
      }
      a.g || ((a.g = ks()), (a.l = ""), ls(a));
      b.selectedText && Rc(a.g) && (To(a.g, Sc(a.g) + "\n\n" + b.selectedText), js(a));
      if (b.imageUrl) {
        d = ms(a.g.g);
        e = Zi();
        if (Nc.test(b.imageUrl)) {
          if (((f = Oc(b.imageUrl)), !e.includes(f))) return;
        } else
          f = e.find(function (g) {
            return (ns[g] || []).some(function (h) {
              var l = b.imageUrl;
              h = "." + h;
              return 0 == ke(h, l.slice(l.length - h.length));
            });
          });
        if (f) {
          e = Cm(f);
          e.l = b.imageUrl;
          Hm(e, "l");
          if (!$n(d)) throw Error("ca");
          d.h = e;
          co(d);
          Wn(d);
          qo(a.g, d);
        }
      }
      b.cachedUserInfo && a.h.update(b.cachedUserInfo);
      N(a, a.g);
      a.g.sa(a);
      c && y("speakMessage", os);
      a.u.qa();
    },
    ts = function (a, b, c) {
      a.N = !0;
      a.A.X(a, "k", a.s).X(a.h, "F", a.s);
      try {
        c && !a.J && a.h.update(c),
          b &&
            (Bd(
              b,
              function (d) {
                this.g && qs(this, this.g, d);
                ra(
                  this.F,
                  function (e, f, g) {
                    qs(this, e, d);
                    e.i || (e.ga(), va(g, f));
                  },
                  this
                );
              },
              a
            ),
            js(a)),
          a.g && (rs(a), 0 != a.g.l || wo(a.g) ? ss(a) : a.j && a.i && (Xc(a.g, a.i) || ss(a))),
          a.u.qa();
      } catch (d) {
      } finally {
        a.A.listen(a, "k", a.s).listen(a.h, "F", a.s), a.D.clear(), (a.J = !1);
      }
    },
    qs = function (a, b, c) {
      var d = c.id,
        e = c.parentId,
        f = b.getChildren()[d];
      if (f)
        if (((e = $n(f) && !f.R), us(a, f, c), 0 != f.l)) {
          if ((f = b.s[d]))
            f.i && (co(b, !0), Wn(b)),
              Zn(f) && 0 == f.l && Uo(b, f.g, Uc(f)),
              b.Z.X(f, "k", b.zb),
              f.sa(null),
              (f.j = null),
              (f.Cb = !0),
              kc(b.s, d);
        } else e && f.R && y("uploadMediaRequest", po(f));
      else e == b.g && ((f = new z(c)), 0 == f.l && qo(b, f));
      b.g == d && (b == a.g && c.mergeConflict ? ((a.g = a.g.duplicate()), a.g.sa(a)) : us(a, b, c));
    },
    us = function (a, b, c) {
      if (a.D.has(b.g)) oo(b, c);
      else {
        if ((a = a.G && a.G == c.lastSavedSessionId)) (a = new Xh(c.timestamps)), (a = Yh(b.u) > Yh(a));
        a ? oo(b, c) : (b.update(c), b.F && (b.F.g = !1), (c = b.i), (b.i = !1), (b.ca = null), (b.wa = !1), c && b.dispatchEvent("p"));
      }
    },
    ws = function (a) {
      var b = {},
        c = [];
      a.g && c.push.apply(c, vs(a.g));
      Bd(
        a.F,
        function (d) {
          c.push.apply(c, vs(d));
        },
        a
      );
      b.nodes = c;
      a.h.h && (b.userInfo = Mn(a.h));
      a.N && ((a.N = !1), a.D.clear(), (a.J = !1));
      return b;
    },
    xs = function (a, b, c) {
      c && (b = F(b, c));
      a.U.push(b);
    },
    ys = function (a, b) {
      if (a.g && (!b || a.g.ha())) {
        b = a.g;
        if (Yn(b)) {
          var c = new Th(),
            d = 1 === b.ua;
          b.ua = 1;
          b.u.i = c;
          1 != d && (Zh(b.u, c), Wn(b));
          b.o && ((c = b.o), (c.l = !0), c.dispatchEvent("k"), b.dispatchEvent("u"));
          b.notify();
        }
        a.F.push(a.g);
        a.g = null;
      }
    };
  is.prototype.reset = function () {
    if (this.v || !this.j) if (((this.v = !1), (this.g = this.o))) (this.j = !0), (this.o = null);
    this.g || ((this.g = ks()), this.i && ((this.j = !0), (this.l = ""), ls(this)), N(this, this.g));
    if (this.i) {
      var a = Jc(this.g, this.i.Qa());
      a && this.i.update(a.g.g());
    }
    this.u.qa();
    this.g.sa(this);
  };
  var zs = function (a) {
      var b = S();
      b.j = a;
      b.g && (a || rs(b), ls(b));
      b.u.qa();
    },
    As = function (a) {
      return (
        (a.g && a.g.i) ||
        cc(a.g ? a.g.getChildren() : {}, function (b) {
          return b.i;
        }) ||
        a.h.h ||
        De(a.F, function (b) {
          return !!b && b.i;
        })
      );
    },
    ss = function (a) {
      a.g = null;
      a.dispatchEvent("H");
    },
    ls = function (a) {
      a.g && (a.j && a.i ? To(a.g, a.i.Qa() + (a.l ? "\n\n" : "") + a.l) : To(a.g, a.l));
    },
    js = function (a) {
      if (a.g && Rc(a.g)) {
        var b = Sc(a.g);
        if (a.i && a.j) {
          var c = Bs.exec(b);
          if (c) {
            var d = b.substring(c[0].length);
            a.l = !c[2] && d ? b : d;
          } else a.l = b;
        } else a.l = b;
      }
    },
    ks = function () {
      var a = {};
      a.id = Vn() + ".fce";
      a.type = "NOTE";
      a.sortValue = ao;
      a = new z(a);
      var b = {};
      b.id = Vn() + ".fce";
      b.type = "LIST_ITEM";
      b.parentId = a.g;
      qo(a, new z(b));
      return a;
    },
    ms = function (a) {
      var b = {};
      b.id = Vn() + ".fce";
      b.type = "BLOB";
      b.parentId = a;
      return new z(b);
    },
    vs = function (a) {
      var b = [];
      a.i && b.push(po(a));
      x(a.getChildren(), function (c) {
        c.i && b.push(po(c));
      });
      return b;
    },
    rs = function (a) {
      if (!a.j && a.i && a.g) {
        var b = Jc(a.g, a.i.Qa());
        b && ((a = a.g), a.B.remove(b) && (co(a), Wn(a)));
      }
    };
  is.prototype.ba = function () {
    Bd(this.U, function (b) {
      b();
    });
    if (!this.R) {
      var a = Date.now();
      3e4 < a - this.S && (Vi(dd(), "n_ecmv3m") ? this.Z.log(9211) : y("impression", 9211), (this.S = a));
    }
  };
  is.prototype.s = function (a) {
    a.target instanceof z && a.target.i && this.D.add(a.target.g);
    a.target == this.h && this.h.h && (this.J = !0);
    this.u.qa();
  };
  var S = function () {
      return zh(is);
    },
    Bs = RegExp(
      "^(?:(https?|ftp)://)?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.][\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*\\.(?:(?:xn--)*[a-zA-Z0-9]{2,63})(?:[\\.]?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.]*[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*)?(\n*)",
      "i"
    ),
    os = chrome.i18n.getMessage("6175061706159277390"),
    ns = { "image/jpeg": ["jpg", "jpeg"], "image/png": ["png"], "image/gif": ["gif"], "image/webp": ["webp"] };
  var Cs = function () {
    M.call(this);
    this.h = new kq(this.i, 50, this);
    xs(S(), this.g, this);
  };
  E(Cs, M);
  Cs.prototype.i = function () {
    var a = S();
    a.B && As(a) && y("syncRequest", ws(a));
  };
  Cs.prototype.g = function () {
    this.h.Gc();
  };
  var Ds = function () {
    this.g = {};
    this.g.keepRequestParam = {};
    this.g.keepRequestParam.clientNamespace = {};
    this.g.keepRequestParam.clientNamespace.clientId = "KEEP";
  };
  var Es = function (a) {
    this.g = null;
    a && this.update(a);
  };
  Es.prototype.update = function (a) {
    this.g = a.id || null;
  };
  var Fs = function (a) {
    var b = {};
    a.g && (b.id = a.g);
    return b;
  };
  var Gs = function () {
    this.g = {};
  };
  var Hs = function (a, b) {
    this.J = new Es(a ? a[this.xb()] : void 0);
    this.G = b ? new Gs() : null;
  };
  Hs.prototype.va = function () {
    var a = {};
    this.J.g && (a[this.xb()] = Fs(this.J));
    return a;
  };
  var Is = function (a) {
    Hs.call(this, a);
    this.g = "";
    a && this.update(a);
  };
  E(Is, Hs);
  Is.prototype.xb = function () {
    return "id";
  };
  Is.prototype.update = function (a) {
    this.g = a.name || "";
  };
  Is.prototype.va = function () {
    var a = Hs.prototype.va.call(this);
    a.name = this.g;
    return a;
  };
  Is.prototype.ka = function () {
    return this.g;
  };
  var Js = function (a) {
    Hs.call(this, a, !0);
    this.i = "";
    this.j = !1;
    this.g = void 0;
    this.h = new Es();
    a && this.update(a);
  };
  E(Js, Hs);
  Js.prototype.xb = function () {
    return "listItemId";
  };
  Js.prototype.update = function (a) {
    this.i = a.text || "";
    this.j = !!a.checked;
    void 0 !== a.sortValue ? (this.g = Jg(a.sortValue)) : (this.g = void 0);
    void 0 !== a.parentListItemId ? this.h.update(a.parentListItemId) : (this.h.g = null);
  };
  Js.prototype.va = function () {
    var a = Hs.prototype.va.call(this);
    a.text = this.i;
    a.checked = this.j;
    void 0 !== this.g && (a.sortValue = this.g);
    this.h.g && (a.parentListItemId = Fs(this.h));
    return a;
  };
  var Ks = function () {
    this.g = [];
  };
  k = Ks.prototype;
  k.clear = function () {
    ua(this.g);
  };
  k.add = function (a) {
    ta(this.g, a) || this.g.push(a);
  };
  k.remove = function (a) {
    wa(this.g, a);
  };
  k.get = function () {
    return Ce(this.g, function (a) {
      return !(a instanceof Hs) || !0;
    });
  };
  k.getAll = function () {
    return this.g.slice();
  };
  var Ls = function (a) {
    R.call(this);
    this.g = new Ks();
    a && this.update(a);
  };
  E(Ls, R);
  Ls.prototype.update = function (a) {
    var b = this;
    this.g.clear();
    Bd(a.listItems || [], function (c) {
      b.g.add(new Js(c));
    });
  };
  var Ms = function (a) {
    a && this.update(a);
  };
  Ms.prototype.update = function () {};
  var Ns = function (a) {
    this.h = "";
    this.g = this.i = null;
    a && this.update(a);
  };
  Ns.prototype.update = function (a) {
    this.h = a.temporaryUrl || "";
    this.g = a.height || null;
    this.i = a.width || null;
  };
  Ns.prototype.setHeight = function (a) {
    this.g = a;
  };
  var Os = function (a) {
    Hs.call(this, a);
    this.g = null;
    this.h = "UNKNOWN_MEDIA_ITEM_TYPE";
    this.i = "";
    a && this.update(a);
  };
  E(Os, Hs);
  Os.prototype.xb = function () {
    return "mediaId";
  };
  Os.prototype.update = function (a) {
    a.imageAttributes ? (this.g = new Ns(a.imageAttributes)) : (this.g = null);
    a.drawingAttributes && new Ms(a.drawingAttributes);
    this.i = a.temporaryUrl || "";
    this.h = a.type || "UNKNOWN_MEDIA_ITEM_TYPE";
  };
  Os.prototype.va = function () {
    var a = Hs.prototype.va.call(this);
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
  Os.prototype.getType = function () {
    return this.h;
  };
  var Ps = function (a) {
    this.g = "";
    a && this.update(a);
  };
  Ps.prototype.update = function (a) {
    this.g = a.eventId || "";
  };
  var Qs = function (a) {
    this.g = "";
    a && this.update(a);
  };
  Qs.prototype.update = function (a) {
    this.g = a.serverPermId || "";
  };
  var Rs = function (a) {
    this.i = this.h = this.g = this.l = this.j = "";
    a && this.update(a);
  };
  Rs.prototype.update = function (a) {
    this.j = a.originalUri || "";
    this.l = a.sanitizedUri || "";
    this.g = a.title || "";
    this.h = a.description || "";
    this.i = a.imageUri || "";
  };
  var Ss = function (a) {
    var b = {};
    b.originalUri = a.j;
    b.sanitizedUri = a.l;
    b.title = a.g;
    b.description = a.h;
    b.imageUri = a.i;
    return b;
  };
  Rs.prototype.getTitle = function () {
    return this.g;
  };
  Rs.prototype.setTitle = function (a) {
    this.g = a;
  };
  var Ts = function (a) {
    this.h = this.i = this.g = null;
    a && this.update(a);
  };
  Ts.prototype.update = function (a) {
    a.uriInfo ? (this.g ? this.g.update(a.uriInfo) : (this.g = new Rs(a.uriInfo))) : (this.g = null);
    a.gmailMetadata ? (this.i ? this.i.update(a.gmailMetadata) : (this.i = new Qs(a.gmailMetadata))) : (this.i = null);
    a.calendarMetadata ? (this.h ? this.h.update(a.calendarMetadata) : (this.h = new Ps(a.calendarMetadata))) : (this.h = null);
  };
  var Us = function (a) {
    Hs.call(this, a);
    this.g = this.h = null;
    a && this.update(a);
  };
  E(Us, Hs);
  Us.prototype.xb = function () {
    return "metadataId";
  };
  Us.prototype.update = function (a) {
    a.uriInfo
      ? ((this.h = null), this.g ? this.g.update(a.uriInfo) : (this.g = new Rs(a.uriInfo)))
      : a.associatedContent && ((this.g = null), this.h ? this.h.update(a.associatedContent) : (this.h = new Ts(a.associatedContent)));
  };
  Us.prototype.va = function () {
    var a = Hs.prototype.va.call(this);
    if (this.g) a.uriInfo = Ss(this.g);
    else if (this.h) {
      var b = this.h,
        c = {};
      b.g && (c.uriInfo = Ss(b.g));
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
  var Vs = function (a) {
    this.g = "";
    this.h = a;
  };
  Vs.prototype.update = function (a) {
    this.g = a.text || "";
  };
  var Ws = function (a, b) {
    a.g != b && ((a.g = b), a.h());
  };
  var Xs = function (a) {
    a && this.update(a);
  };
  Xs.prototype.update = function () {};
  var Ys = function (a) {
    Hs.call(this, a, !0);
    this.h = this.g = null;
    this.i = "";
    this.F = this.D = this.B = !1;
    this.A = "DEFAULT";
    this.j = void 0;
    this.o = new Ks();
    this.v = new Ks();
    this.l = new Ks();
    this.s = new Ks();
    this.u = null;
    a && this.update(a);
  };
  E(Ys, Hs);
  k = Ys.prototype;
  k.xb = function () {
    return "noteId";
  };
  k.update = function (a) {
    var b = this;
    a.textNote
      ? ((this.h = null), this.g || Zs(this), this.g.update(a.textNote))
      : a.listNote && ((this.g = null), this.h ? this.h.update(a.listNote) : (this.h = new Ls(a.listNote)));
    this.i = a.title || "";
    this.B = !!a.isArchived;
    this.D = !!a.isPinned;
    this.F = !!a.isTrashed;
    this.A = a.color || "DEFAULT";
    void 0 !== a.sortValue ? (this.j = Jg(a.sortValue)) : (this.j = void 0);
    this.o.clear();
    Bd(a.mediaItem || [], function (c) {
      b.o.add(new Os(c));
    });
    this.l.clear();
    Bd(a.label || [], function (c) {
      b.l.add(new Is(c));
    });
    this.v.clear();
    Bd(a.user || [], function (c) {
      b.v.add(new Xs(c));
    });
    this.s.clear();
    Bd(a.metadata || [], function (c) {
      b.s.add(new Us(c));
    });
  };
  k.va = function () {
    var a = Hs.prototype.va.call(this);
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
        De(this.h.g.get(), function (a) {
          return !!a.i;
        }))
      ? !1
      : !0;
  };
  var Zs = function (a) {
    a.u ||
      (a.u = F(function () {
        this.G.g.TEXT = !0;
      }, a));
    a.g = new Vs(a.u);
    a.h = null;
  };
  var $s = function (a, b) {
    this.h = a;
    this.g = b;
  };
  var at = function () {
    this.g = [];
    this.h = [];
  };
  at.prototype.enqueue = function (a) {
    this.h.push(a);
  };
  var bt = function (a) {
    0 === a.g.length && ((a.g = a.h), a.g.reverse(), (a.h = []));
    return a.g.pop();
  };
  k = at.prototype;
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
    return ta(this.g, a) || ta(this.h, a);
  };
  k.remove = function (a) {
    var b = this.g;
    var c = Be(b, a);
    0 <= c ? (va(b, c), (b = !0)) : (b = !1);
    return b || wa(this.h, a);
  };
  k.ja = function () {
    for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
    var c = this.h.length;
    for (b = 0; b < c; ++b) a.push(this.h[b]);
    return a;
  };
  var ct = function (a, b) {
    this.g = a[n.Symbol.iterator]();
    this.h = b;
  };
  ct.prototype[Symbol.iterator] = function () {
    return this;
  };
  ct.prototype.next = function () {
    var a = this.g.next();
    return { value: a.done ? void 0 : this.h.call(void 0, a.value), done: a.done };
  };
  var dt = function (a, b) {
    return new ct(a, b);
  };
  var et = function () {};
  et.prototype.next = function () {
    return ft;
  };
  var ft = { done: !0, value: void 0 };
  et.prototype.Ta = function () {
    return this;
  };
  var jt = function (a) {
      if (a instanceof gt || a instanceof ht || a instanceof it) return a;
      if ("function" == typeof a.next)
        return new gt(function () {
          return a;
        });
      if ("function" == typeof a[Symbol.iterator])
        return new gt(function () {
          return a[Symbol.iterator]();
        });
      if ("function" == typeof a.Ta)
        return new gt(function () {
          return a.Ta();
        });
      throw Error("ja");
    },
    gt = function (a) {
      this.g = a;
    };
  gt.prototype.Ta = function () {
    return new ht(this.g());
  };
  gt.prototype[Symbol.iterator] = function () {
    return new it(this.g());
  };
  gt.prototype.h = function () {
    return new it(this.g());
  };
  var ht = function (a) {
    this.g = a;
  };
  E(ht, et);
  ht.prototype.next = function () {
    return this.g.next();
  };
  ht.prototype[Symbol.iterator] = function () {
    return new it(this.g);
  };
  ht.prototype.h = function () {
    return new it(this.g);
  };
  var it = function (a) {
    gt.call(this, function () {
      return a;
    });
    this.i = a;
  };
  E(it, gt);
  it.prototype.next = function () {
    return this.i.next();
  };
  var kt = function (a, b) {
    this.h = {};
    this.g = [];
    this.i = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("B");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof kt) for (c = a.Ea(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  };
  k = kt.prototype;
  k.W = function () {
    return this.size;
  };
  k.ja = function () {
    lt(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
    return a;
  };
  k.Ea = function () {
    lt(this);
    return this.g.concat();
  };
  k.has = function (a) {
    return mt(this.h, a);
  };
  k.Xa = function (a) {
    for (var b = 0; b < this.g.length; b++) {
      var c = this.g[b];
      if (mt(this.h, c) && this.h[c] == a) return !0;
    }
    return !1;
  };
  k.V = function (a) {
    if (this === a) return !0;
    if (this.size != a.W()) return !1;
    var b = nt;
    lt(this);
    for (var c, d = 0; (c = this.g[d]); d++) if (!b(this.get(c), a.get(c))) return !1;
    return !0;
  };
  var nt = function (a, b) {
    return a === b;
  };
  kt.prototype.ha = function () {
    return 0 == this.size;
  };
  kt.prototype.clear = function () {
    this.h = {};
    this.i = this.size = this.g.length = 0;
  };
  kt.prototype.remove = function (a) {
    return this.delete(a);
  };
  kt.prototype.delete = function (a) {
    return mt(this.h, a) ? (delete this.h[a], --this.size, this.i++, this.g.length > 2 * this.size && lt(this), !0) : !1;
  };
  var lt = function (a) {
    if (a.size != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length; ) {
        var d = a.g[b];
        mt(a.h, d) && (a.g[c++] = d);
        b++;
      }
      a.g.length = c;
    }
    if (a.size != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length; ) (d = a.g[b]), mt(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
      a.g.length = c;
    }
  };
  k = kt.prototype;
  k.get = function (a, b) {
    return mt(this.h, a) ? this.h[a] : b;
  };
  k.set = function (a, b) {
    mt(this.h, a) || ((this.size += 1), this.g.push(a), this.i++);
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
    return new kt(this);
  };
  k.keys = function () {
    return jt(this.Ta(!0)).h();
  };
  k.values = function () {
    return jt(this.Ta(!1)).h();
  };
  k.entries = function () {
    var a = this;
    return dt(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  k.Ta = function (a) {
    lt(this);
    var b = 0,
      c = this.i,
      d = this,
      e = new et();
    e.next = function () {
      if (c != d.i) throw Error("ka");
      if (b >= d.g.length) return ft;
      var f = d.g[b++];
      return { value: a ? f : d.h[f], done: !1 };
    };
    return e;
  };
  var mt = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var ot = function (a) {
      this.g = new kt();
      this.size = 0;
      if (a) {
        a = oi(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c]);
        this.size = this.g.size;
      }
    },
    pt = function (a) {
      var b = typeof a;
      return ("object" == b && a) || "function" == b ? "o" + id(a) : b.charAt(0) + a;
    };
  k = ot.prototype;
  k.W = function () {
    return this.g.size;
  };
  k.add = function (a) {
    this.g.set(pt(a), a);
    this.size = this.g.size;
  };
  k.removeAll = function (a) {
    a = oi(a);
    for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]);
    this.size = this.g.size;
  };
  k.delete = function (a) {
    a = this.g.remove(pt(a));
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
    a = pt(a);
    return this.g.has(a);
  };
  k.contains = function (a) {
    a = pt(a);
    return this.g.has(a);
  };
  k.ja = function () {
    return this.g.ja();
  };
  k.values = function () {
    return this.g.values();
  };
  k.clone = function () {
    return new ot(this);
  };
  k.V = function (a) {
    return this.W() == ni(a) && qt(this, a);
  };
  var qt = function (a, b) {
    var c = ni(b);
    if (a.W() > c) return !1;
    !(b instanceof ot) && 5 < c && (b = new ot(b));
    return qi(a, function (d) {
      var e = b;
      return e.contains && "function" == typeof e.contains
        ? e.contains(d)
        : e.Xa && "function" == typeof e.Xa
        ? e.Xa(d)
        : Aa(e) || "string" === typeof e
        ? ta(e, d)
        : hc(e, d);
    });
  };
  ot.prototype.Ta = function () {
    return this.g.Ta(!1);
  };
  ot.prototype[Symbol.iterator] = function () {
    return this.values();
  };
  var rt = function (a, b) {
    M.call(this);
    this.s = a || 0;
    this.i = b || 10;
    if (this.s > this.i) throw Error("la");
    this.g = new at();
    this.h = new ot();
    this.delay = 0;
    this.lastAccess = null;
    this.ec();
  };
  G(rt, M);
  rt.prototype.Zb = function () {
    var a = Date.now();
    if (!(null != this.lastAccess && a - this.lastAccess < this.delay)) {
      for (var b; 0 < this.g.W() && ((b = bt(this.g)), !this.wd(b)); ) this.ec();
      !b && this.W() < this.i && (b = this.l());
      b && ((this.lastAccess = a), this.h.add(b));
      return b;
    }
  };
  rt.prototype.Lb = function (a) {
    this.h.remove(a);
    this.wd(a) && this.W() < this.i ? this.g.enqueue(a) : st(a);
  };
  rt.prototype.ec = function () {
    for (var a = this.g; this.W() < this.s; ) a.enqueue(this.l());
    for (; this.W() > this.i && 0 < this.g.W(); ) st(bt(a));
  };
  rt.prototype.l = function () {
    return {};
  };
  var st = function (a) {
    if ("function" == typeof a.ga) a.ga();
    else for (var b in a) a[b] = null;
  };
  k = rt.prototype;
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
    rt.O.K.call(this);
    if (0 < this.h.W()) throw Error("ma");
    delete this.h;
    for (var a = this.g; !a.ha(); ) st(bt(a));
    delete this.g;
  };
  var tt = function (a, b) {
    this.g = a;
    this.ea = b;
  };
  tt.prototype.aa = function () {
    return this.ea;
  };
  tt.prototype.clone = function () {
    return new tt(this.g, this.ea);
  };
  var ut = function (a) {
      this.g = [];
      if (a)
        a: {
          if (a instanceof ut) {
            var b = a.Ea();
            a = a.ja();
            if (0 >= this.W()) {
              for (var c = this.g, d = 0; d < b.length; d++) c.push(new tt(b[d], a[d]));
              break a;
            }
          } else (b = gc(a)), (a = fc(a));
          for (c = 0; c < b.length; c++) vt(this, b[c], a[c]);
        }
    },
    vt = function (a, b, c) {
      var d = a.g;
      d.push(new tt(b, c));
      b = d.length - 1;
      a = a.g;
      for (c = a[b]; 0 < b; )
        if (((d = (b - 1) >> 1), a[d].g > c.g)) (a[b] = a[d]), (b = d);
        else break;
      a[b] = c;
    };
  k = ut.prototype;
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
    return new ut(this);
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
  var wt = function () {
    ut.apply(this, arguments);
  };
  E(wt, ut);
  wt.prototype.enqueue = function (a, b) {
    vt(this, a, b);
  };
  var xt = function (a, b) {
    this.o = void 0;
    this.j = new wt();
    rt.call(this, a, b);
  };
  G(xt, rt);
  k = xt.prototype;
  k.Zb = function (a, b) {
    if (!a) return (a = xt.O.Zb.call(this)) && this.delay && (this.o = n.setTimeout(F(this.nc, this), this.delay)), a;
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
    xt.O.Lb.call(this, a);
    this.nc();
  };
  k.ec = function () {
    xt.O.ec.call(this);
    this.nc();
  };
  k.K = function () {
    xt.O.K.call(this);
    n.clearTimeout(this.o);
    this.j.clear();
    this.j = null;
  };
  var yt = function (a, b, c, d) {
    this.u = a;
    this.v = !!d;
    xt.call(this, b, c);
  };
  G(yt, xt);
  yt.prototype.l = function () {
    var a = new sq(),
      b = this.u;
    b &&
      b.forEach(function (c, d) {
        a.headers.set(d, c);
      });
    this.v && (a.i = !0);
    return a;
  };
  yt.prototype.wd = function (a) {
    return !a.pa && !a.isActive();
  };
  var zt = function (a, b, c, d, e, f) {
    R.call(this);
    this.j = void 0 !== a ? a : 1;
    this.l = void 0 !== e ? Math.max(0, e) : 0;
    this.o = !!f;
    this.h = new yt(b, c, d, f);
    this.g = new kt();
    this.i = new rn(this);
  };
  G(zt, R);
  var At = "ready complete success error abort timeout".split(" ");
  zt.prototype.send = function (a, b, c, d, e, f, g, h, l, m) {
    if (this.g.get(a)) throw Error("na");
    b = new Bt(b, F(this.u, this, a), c, d, e, g, void 0 !== h ? h : this.j, l, void 0 !== m ? m : this.o);
    this.g.set(a, b);
    a = F(this.s, this, a);
    this.h.Zb(a, f);
    return b;
  };
  zt.prototype.abort = function (a, b) {
    var c = this.g.get(a);
    if (c) {
      var d = c.Ac;
      c.Wd = !0;
      b &&
        (d &&
          (this.i.X(d, At, c.Bd),
          xj(
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
  zt.prototype.s = function (a, b) {
    var c = this.g.get(a);
    c && !c.Ac
      ? (this.i.listen(b, At, c.Bd),
        (b.l = Math.max(0, this.l)),
        (b.o = c.ge()),
        (b.i = c.he()),
        (c.Ac = b),
        this.dispatchEvent(new Ct("ready", this, a, b)),
        Dt(this, a, b),
        c.Wd && b.abort())
      : ((a = this.h), a.h.remove(b) && a.Lb(b));
  };
  zt.prototype.u = function (a, b) {
    var c = b.target;
    switch (b.type) {
      case "ready":
        Dt(this, a, c);
        break;
      case "complete":
        a: {
          var d = this.g.get(a);
          if (7 == c.j || Dq(c) || d.fc > d.Hc)
            if ((this.dispatchEvent(new Ct("complete", this, a, c)), d && ((d.ce = !0), d.be))) {
              a = d.be.call(c, b);
              break a;
            }
          a = null;
        }
        return a;
      case "success":
        this.dispatchEvent(new Ct("success", this, a, c));
        break;
      case "timeout":
      case "error":
        b = this.g.get(a);
        b.fc > b.Hc && this.dispatchEvent(new Ct("error", this, a, c));
        break;
      case "abort":
        this.dispatchEvent(new Ct("abort", this, a, c));
    }
    return null;
  };
  var Dt = function (a, b, c) {
    var d = a.g.get(b);
    !d || d.ce || d.fc > d.Hc
      ? (d && (a.i.X(c, At, d.Bd), a.g.remove(b)), (a = a.h), a.h.remove(c) && a.Lb(c))
      : (d.fc++, c.send(d.Qa(), d.Af, d.getContent(), d.Te));
  };
  zt.prototype.K = function () {
    zt.O.K.call(this);
    this.h.ga();
    this.h = null;
    this.i.ga();
    this.i = null;
    this.g.clear();
    this.g = null;
  };
  var Ct = function (a, b, c, d) {
    ij.call(this, a, b);
    this.id = c;
    this.Ac = d;
  };
  G(Ct, ij);
  var Bt = function (a, b, c, d, e, f, g, h, l) {
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
  Bt.prototype.Qa = function () {
    return this.i;
  };
  Bt.prototype.getContent = function () {
    return this.g;
  };
  Bt.prototype.he = function () {
    return this.j;
  };
  Bt.prototype.ge = function () {
    return this.h;
  };
  var Et = function (a) {
      this.h = new zt();
      this.i = new Ds();
      this.j = a;
      this.g = null;
    },
    It = function (a, b) {
      var c = {};
      c.label = { id: { id: b.g }, name: b.ka() };
      Ft(a, "create_label_req" + b.g, Gt, c, Ht(a), function () {
        !a.h.g.W() && a.g && a.g();
      });
    },
    Kt = function (a, b, c, d, e) {
      var f = mc(a.i.g);
      f.note = b.va();
      f.mediaToAttach = yd(c, function (l) {
        var m = {};
        l.h && (m.mediaUrl = l.h);
        l.g && (m.mediaBytes = l.g);
        return m;
      });
      d &&
        (f.note.label = d.map(function (l) {
          return new Is({ id: { id: l } }).va();
        }));
      var g = Ht(a),
        h = "create_note_req" + Date.now();
      b = function () {
        Ft(a, h, Jt, f, g, function (l) {
          l = l.target;
          if (Dq(l)) {
            var m = Eq(l).note.noteId.id;
            e(l.getStatus(), m);
          } else (a.g = null), e(l.getStatus());
        });
      };
      a.h.g.W() ? (a.g = b) : b();
    },
    Nt = function (a, b) {
      Ft(a, "list_labels_req" + Date.now(), Lt, mc(a.i.g), Ht(a), function (c) {
        return Mt(c, b);
      });
    },
    Mt = function (a, b) {
      a = a.target;
      if (Dq(a)) {
        var c = Eq(a);
        c.label
          ? ((c = c.label.map(function (d) {
              var e = {};
              return (e.name = d.name), (e.mainId = d.id.id), e;
            })),
            b(a.getStatus(), c))
          : b(a.getStatus());
      } else b(a.getStatus());
    },
    Ft = function (a, b, c, d, e, f) {
      a.h.send(b, c, "POST", JSON.stringify(d), e, void 0, function (g) {
        f(g);
      });
    },
    Ht = function (a) {
      return { Authorization: "Bearer " + a.j.g, "Content-Type": "application/json" };
    },
    Ot = Wi("n_fpae"),
    Gt = Ot + "/v1/labels:create",
    Jt = Ot + "/v1/notes:create",
    Lt = Ot + "/v1/labels:list";
  var Pt = {},
    Qt = function () {
      throw Error("oa");
    };
  Qt.prototype.gd = null;
  Qt.prototype.getContent = function () {
    return this.content;
  };
  Qt.prototype.toString = function () {
    return this.content;
  };
  Qt.prototype.Ce = function () {
    if (this.hd !== Pt) throw Error("pa");
    return Dg(this.toString());
  };
  var Rt = function () {
    Qt.call(this);
  };
  G(Rt, Qt);
  Rt.prototype.hd = Pt;
  var St = function (a) {
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
    Wt = function (a) {
      return null != a && a.hd === Pt ? a : a instanceof xd ? Tt(Cg(a).toString()) : Tt(String(String(a)).replace(Ut, Vt), St(a));
    },
    Tt = (function (a) {
      function b(c) {
        this.content = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.gd = d);
        return c;
      };
    })(Rt),
    Xt = (function (a) {
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
    })(Rt),
    T = function (a) {
      if (null != a && a.hd === Pt) {
        var b = String;
        a = a.getContent();
        a = String(a).replace(Yt, "").replace(Zt, "&lt;");
        b = b(a).replace($t, Vt);
      } else b = String(a).replace(Ut, Vt);
      return b;
    },
    au = {
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
    Vt = function (a) {
      return au[a];
    },
    Ut = /[\x00\x22\x26\x27\x3c\x3e]/g,
    $t = /[\x00\x22\x27\x3c\x3e]/g,
    Yt = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Zt = /</g;
  var pd = {};
  var cu = function (a) {
      a = a || {};
      return bu(a.Zd, a.content, a.Cj);
    },
    bu = function (a, b, c) {
      return Tt(
        '<div role="button" class="' +
          T("Q0hgme-LgbsSe") +
          (a ? " " + T(a) : "") +
          '" tabindex="0"' +
          (c ? ' aria-describedby="' + T(c) + '"' : "") +
          ">" +
          Wt(null != b ? b : "") +
          "</div>"
      );
    },
    eu = function (a) {
      a = a || {};
      return du(a.Zd, a.Gj);
    },
    du = function (a, b) {
      return Tt(bu("Q0hgme-Bz112c-LgbsSe" + (b ? " OAU7Vd-LgbsSe" : "") + (a ? " " + a : ""), Xt("" + (b ? Wt(b) : ""))));
    },
    gu = function (a) {
      a = a || {};
      return fu(a.text, a.Zd);
    },
    fu = function (a, b) {
      return Tt(bu("Q0hgme-fmcmS-LgbsSe" + (b ? " " + b : ""), Xt("" + Wt(null != a ? a : ""))));
    },
    iu = function (a, b) {
      return Tt(
        '<div class="' +
          T("Q0hgme-n5T17d-woLtV") +
          (a ? " " + T(a) : "") +
          (b ? " " + T(b) : "") +
          '">' +
          hu("v3pZbf") +
          hu("oq6NAc") +
          hu("gS7Ybc") +
          hu("nllRtd") +
          "</div>"
      );
    },
    hu = function (a) {
      return Tt(
        '<div class="' +
          T("aZ2wEe-pbTTYe") +
          " " +
          T(a) +
          '"><div class="' +
          T("LkdAo-e9ayKc") +
          " " +
          T("LK5yu") +
          '"><div class="' +
          T("LkdAo") +
          " " +
          T("hj4D6d") +
          '"></div></div><div class="' +
          T("pehrl-TpMipd") +
          '"><div class="' +
          T("LkdAo") +
          " " +
          T("hj4D6d") +
          '"></div></div><div class="' +
          T("LkdAo-e9ayKc") +
          " " +
          T("qwU8Me") +
          '"><div class="' +
          T("LkdAo") +
          " " +
          T("hj4D6d") +
          '"></div></div></div>'
      );
    },
    ju = function (a) {
      a = a.xf;
      return Tt(
        '<div class="' +
          T("Q0hgme-vDaB1c") +
          (a ? "" : " " + T("JLm1tf-uLBfYd")) +
          '" role="alertdialog"><div class="' +
          T("Q0hgme-vDaB1c-Ne3sFf") +
          '"></div>' +
          fu(void 0, "Q0hgme-vDaB1c-JIbuQc fmcmS-LgbsSe-to915-Ia7Qfc") +
          iu("CZjX4e") +
          (a ? du("Q0hgme-vDaB1c-IYtByb Bz112c-LgbsSe-to915-xJ5Hnf") : "") +
          "</div>"
      );
    },
    ku = function () {
      return Tt(
        '<div role="tooltip" class="' +
          T("Q0hgme-suEOdc") +
          '"><div class="' +
          T("suEOdc-AHe6Kc") +
          '"></div><div class="' +
          T("suEOdc-bN97Pc") +
          '"></div></div>'
      );
    };
  var lu = function () {
      return Tt('<div class="' + T("rymPhb-qJTHM") + '"><div class="' + T("rymPhb-PntVL") + '"></div></div>');
    },
    mu = function () {
      return Tt(
        '<div class="' +
          T("rymPhb-ibnC6b") +
          '"><div class="' +
          T("Q0hgme-MPu53c") +
          '"></div><label class="' +
          T("rymPhb-ibnC6b-fmcmS") +
          '"></label></div>'
      );
    },
    nu = function () {
      return Tt(
        '<div class="' +
          T("h1U9Be-V67aGc") +
          '"><label class="' +
          T("h1U9Be-V67aGc-V1ur5d") +
          '"></label>' +
          du("h1U9Be-V67aGc-VkLyEc") +
          "</div>"
      );
    },
    ou = function () {
      return Tt(
        '<div class="' +
          T("HiaYvf-n0tgWb") +
          '"><img class="' +
          T("HiaYvf-SmKAyb") +
          '" crossorigin><div class="' +
          T("Yygnk-jOfkMb") +
          '"></div>' +
          du("HiaYvf-VkLyEc") +
          "</div>"
      );
    };
  var pu = function () {
    var a = '<div class="' + T("mKZypf-bEDTcc-bF1uUb") + '"><label class="' + T("mKZypf-bEDTcc-EglORb") + '">',
      b = chrome.i18n.getMessage.apply(
        null,
        ["733701029503338559", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
      );
    a = a + b + "</label>";
    b = chrome.i18n.getMessage("5207635742003539443");
    a += fu(b, " fmcmS-LgbsSe-to915-Ia7Qfc mKZypf-bEDTcc-LgbsSe ");
    return Tt(a + "</div>");
  };
  var qu = function (a) {
      return "string" == typeof a.className ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
    },
    ru = function (a) {
      return a.classList ? a.classList : qu(a).match(/\S+/g) || [];
    },
    su = function (a, b) {
      "string" == typeof a.className ? (a.className = b) : a.setAttribute && a.setAttribute("class", b);
    },
    tu = function (a, b) {
      return a.classList ? a.classList.contains(b) : ta(ru(a), b);
    },
    uu = function (a, b) {
      if (a.classList) a.classList.add(b);
      else if (!tu(a, b)) {
        var c = qu(a);
        su(a, c + (0 < c.length ? " " + b : b));
      }
    },
    vu = function (a, b) {
      if (a.classList)
        Array.prototype.forEach.call(b, function (e) {
          uu(a, e);
        });
      else {
        var c = {};
        Array.prototype.forEach.call(ru(a), function (e) {
          c[e] = !0;
        });
        Array.prototype.forEach.call(b, function (e) {
          c[e] = !0;
        });
        b = "";
        for (var d in c) b += 0 < b.length ? " " + d : d;
        su(a, b);
      }
    },
    wu = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : tu(a, b) &&
          su(
            a,
            Array.prototype.filter
              .call(ru(a), function (c) {
                return c != b;
              })
              .join(" ")
          );
    },
    xu = function (a, b) {
      a.classList
        ? Array.prototype.forEach.call(b, function (c) {
            wu(a, c);
          })
        : su(
            a,
            Array.prototype.filter
              .call(ru(a), function (c) {
                return !ta(b, c);
              })
              .join(" ")
          );
    },
    yu = function (a, b, c) {
      c ? uu(a, b) : wu(a, b);
    };
  var zu = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  k = zu.prototype;
  k.clone = function () {
    return new zu(this.top, this.right, this.bottom, this.left);
  };
  k.contains = function (a) {
    return this && a
      ? a instanceof zu
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
    return a instanceof Tg
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
  var Au = function (a, b) {
      var c = Xg(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ""
        : "";
    },
    Bu = function (a, b) {
      return Au(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b]);
    },
    Du = function (a, b, c) {
      if (b instanceof Tg) {
        var d = b.x;
        b = b.y;
      } else (d = b), (b = c);
      a.style.left = Cu(d, !1);
      a.style.top = Cu(b, !1);
    },
    Eu = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    },
    Fu = function (a) {
      if (H && !(8 <= Number(cf))) return a.offsetParent;
      var b = Xg(a),
        c = Bu(a, "position"),
        d = "fixed" == c || "absolute" == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (
          (11 == a.nodeType && a.host && (a = a.host),
          (c = Bu(a, "position")),
          (d = d && "static" == c && a != b.documentElement && a != b.body),
          !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
        )
          return a;
      return null;
    },
    Hu = function (a) {
      for (var b = new zu(0, Infinity, Infinity, 0), c = qd(a), d = c.g.body, e = c.g.documentElement, f = ch(c.g); (a = Fu(a)); )
        if (!((H && 0 == a.clientWidth) || (Ne && 0 == a.clientHeight && a == d)) && a != d && a != e && "visible" != Bu(a, "overflow")) {
          var g = Gu(a),
            h = new Tg(a.clientLeft, a.clientTop);
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
      c = bh(dh(c.g) || window);
      b.right = Math.min(b.right, d + c.width);
      b.bottom = Math.min(b.bottom, f + c.height);
      return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
    },
    Gu = function (a) {
      var b = Xg(a),
        c = new Tg(0, 0);
      var d = b ? Xg(b) : document;
      d = !H || 9 <= Number(cf) || ah(qd(d).g) ? d.documentElement : d.body;
      if (a == d) return c;
      a = Eu(a);
      b = eh(qd(b).g);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    Iu = function (a, b, c) {
      if (b instanceof Vg) (c = b.height), (b = b.width);
      else if (void 0 == c) throw Error("qa");
      a.style.width = Cu(b, !0);
      a.style.height = Cu(c, !0);
    },
    Cu = function (a, b) {
      "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
      return a;
    },
    Ku = function (a) {
      var b = Ju;
      if ("none" != Bu(a, "display")) return b(a);
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
    Ju = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = Ne && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? ((a = Eu(a)), new Vg(a.right - a.left, a.bottom - a.top)) : new Vg(b, c);
    },
    U = function (a, b) {
      a.style.display = b ? "" : "none";
    },
    Lu = function (a) {
      return "rtl" == Bu(a, "direction");
    },
    Mu = Me ? "MozUserSelect" : Ne || Ie ? "WebkitUserSelect" : null,
    Nu = function (a, b, c) {
      c = c ? null : a.getElementsByTagName("*");
      if (Mu) {
        if (((b = b ? "none" : ""), a.style && (a.style[Mu] = b), c)) {
          a = 0;
          for (var d; (d = c[a]); a++) d.style && (d.style[Mu] = b);
        }
      } else if (H && ((b = b ? "on" : ""), a.setAttribute("unselectable", b), c))
        for (a = 0; (d = c[a]); a++) d.setAttribute("unselectable", b);
    },
    Ou = { thin: 2, medium: 4, thick: 6 },
    Pu = function (a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
      var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      if (c in Ou) a = Ou[c];
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
  var Qu = function () {
    rn.call(this);
    this.g = ud(ku);
    U(this.g, !1);
    qd().g.body.appendChild(this.g);
    this.B = Yg("suEOdc-bN97Pc", this.g);
    this.h = null;
    this.A = new kq(this.If, 0, this);
    this.u = new kq(this.Ff, 300, this);
    this.l = 250;
    this.v = new kq(this.Df, this.l, this);
    this.D = new Set();
    this.s = !0;
    this.o = !1;
  };
  E(Qu, rn);
  k = Qu.prototype;
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
        vh(a, "label", d || b),
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
    a && !b && (mh(this.B, a), (a = "true" == this.h.getAttribute("tooltip-no-delay")), this.A.start(this.s && !a ? 250 : 0));
  };
  k.ae = function () {
    this.h = null;
    this.A.stop();
    this.o &&
      ((this.o = !1),
      wu(this.g, "ti6hGc"),
      wu(this.g, "mhHukc-cGMI2b"),
      uu(this.g, "ZYIfFd"),
      this.v.start(this.l),
      (this.s = !1),
      this.u.start());
  };
  k.If = function () {
    if (this.h) {
      this.u.stop();
      this.v.stop();
      U(this.g, !0);
      if (this.h) {
        var a = Ku(this.g),
          b = Ku(this.h),
          c = Gu(this.h);
        var d = qd().g;
        var e = d.body;
        d = d.documentElement;
        d = new Tg(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
        var f = bh(window);
        e = d.x + f.width;
        f = d.y + f.height;
        this.D.has(this.h)
          ? ((d = c.y + b.height / 2 - a.height / 2),
            (b = c.x + b.width),
            (d = Math.max(0, Math.min(d, f - a.height))),
            (f = !0),
            b + a.width > e && ((b = c.x - a.width), (f = !1)),
            yu(this.g, "mhHukc-qwU8Me", f),
            yu(this.g, "mhHukc-LK5yu", !f),
            xu(this.g, ["mhHukc-ma6Yeb", "mhHukc-cGMI2b"]))
          : ((d = c.y + b.height),
            (b = c.x + b.width / 2 - a.width / 2),
            (b = Math.max(0, Math.min(b, e - a.width))),
            (e = !0),
            d + a.height > f && ((d = c.y - a.height), (e = !1)),
            yu(this.g, "mhHukc-cGMI2b", e),
            yu(this.g, "mhHukc-ma6Yeb", !e),
            xu(this.g, ["mhHukc-LK5yu", "mhHukc-qwU8Me"]));
        this.g.style.top = d + "px";
        this.g.style.left = b + "px";
        this.g.setAttribute("content-width-32", Math.ceil(a.width / 32));
        this.l = Math.max(50, 250 - 25 * Math.ceil(a.width / 32));
      }
      wu(this.g, "ZYIfFd");
      uu(this.g, "ti6hGc");
      this.o = !0;
    }
  };
  k.Df = function () {
    U(this.g, !1);
  };
  k.Ff = function () {
    this.s = !0;
  };
  k.K = function () {
    this.g.remove();
  };
  Qu.L = function () {
    return zh(Qu);
  };
  var Tu = function (a, b, c, d, e, f) {
      if (Oe && e) return Ru(a);
      if (e && !d) return !1;
      if (!Me) {
        "number" === typeof b && (b = Su(b));
        var g = 17 == b || 18 == b || (Oe && 91 == b);
        if (((!c || Oe) && g) || (Oe && 16 == b && (d || f))) return !1;
      }
      if ((Ne || Ie) && d && c)
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
          return Me ? (f || e ? !1 : !(c && d)) : !0;
        case 27:
          return !(Ne || Ie || Me);
      }
      return Me && (d || e || f) ? !1 : Ru(a);
    },
    Ru = function (a) {
      if ((48 <= a && 57 >= a) || (96 <= a && 106 >= a) || (65 <= a && 90 >= a) || ((Ne || Ie) && 0 == a)) return !0;
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
          return Me;
        default:
          return !1;
      }
    },
    Su = function (a) {
      if (Me) a = Uu(a);
      else if (Oe && Ne)
        switch (a) {
          case 93:
            a = 91;
        }
      return a;
    },
    Uu = function (a) {
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
  var Vu = function (a, b, c, d) {
    lj.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.l = b;
    this.repeat = c;
  };
  G(Vu, lj);
  var Wu = function (a, b) {
    R.call(this);
    a && this.attach(a, b);
  };
  G(Wu, R);
  k = Wu.prototype;
  k.tb = null;
  k.sc = null;
  k.rd = null;
  k.tc = null;
  k.ra = -1;
  k.Ra = -1;
  k.ed = !1;
  var Xu = {
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
    Yu = {
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
    Zu = Oe && Me;
  k = Wu.prototype;
  k.Ue = function (a) {
    if (Ne || Ie)
      if ((17 == this.ra && !a.ctrlKey) || (18 == this.ra && !a.altKey) || (Oe && 91 == this.ra && !a.metaKey)) this.Ra = this.ra = -1;
    -1 == this.ra &&
      (a.ctrlKey && 17 != a.keyCode
        ? (this.ra = 17)
        : a.altKey && 18 != a.keyCode
        ? (this.ra = 18)
        : a.metaKey && 91 != a.keyCode && (this.ra = 91));
    Tu(a.keyCode, this.ra, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
      ? ((this.Ra = Su(a.keyCode)), Zu && (this.ed = a.altKey))
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
      (Ne || Ie) && "keypress" == a.type
        ? ((d = this.Ra), (e = 0 <= b.charCode && 63232 > b.charCode && Ru(d) ? b.charCode : 0))
        : ("keypress" == a.type
            ? (Zu && (c = this.ed),
              b.keyCode == b.charCode
                ? 32 > b.keyCode
                  ? ((d = b.keyCode), (e = 0))
                  : ((d = this.Ra), (e = b.charCode))
                : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)))
            : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)),
          Oe && 63 == e && 224 == d && (d = 191));
    var f = (d = Su(d));
    d
      ? 63232 <= d && d in Xu
        ? (f = Xu[d])
        : 25 == d && a.shiftKey && (f = 9)
      : b.keyIdentifier && b.keyIdentifier in Yu && (f = Yu[b.keyIdentifier]);
    if (!Me || "keypress" != a.type || Tu(f, this.ra, a.shiftKey, a.ctrlKey, c, a.metaKey))
      (a = f == this.ra), (this.ra = f), (b = new Vu(f, e, a, b)), (b.altKey = c), this.dispatchEvent(b);
  };
  k.C = function () {
    return this.tb;
  };
  k.attach = function (a, b) {
    this.tc && this.detach();
    this.tb = a;
    this.sc = yj(this.tb, "keypress", this, b);
    this.rd = yj(this.tb, "keydown", this.Ue, b, this);
    this.tc = yj(this.tb, "keyup", this.qf, b, this);
  };
  k.detach = function () {
    this.sc && (Gj(this.sc), Gj(this.rd), Gj(this.tc), (this.tc = this.rd = this.sc = null));
    this.tb = null;
    this.Ra = this.ra = -1;
  };
  k.K = function () {
    Wu.O.K.call(this);
    this.detach();
  };
  var $u = function () {};
  Zd($u);
  $u.prototype.g = 0;
  var V = function (a) {
    R.call(this);
    this.h = a || qd();
    this.Ua = av;
    this.U = null;
    this.da = !1;
    this.g = null;
    this.J = void 0;
    this.u = this.o = this.s = this.Ha = null;
    this.Ie = !1;
  };
  G(V, R);
  V.prototype.Ke = $u.L();
  var av = null,
    bv = function (a, b) {
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
    cv = function (a) {
      return a.U || (a.U = ":" + (a.Ke.g++).toString(36));
    },
    dv = function (a, b) {
      if (a.s && a.s.u) {
        kc(a.s.u, a.U);
        var c = a.s.u;
        if (null !== c && b in c) throw Error("A`" + b);
        c[b] = a;
      }
      a.U = b;
    };
  V.prototype.C = function () {
    return this.g;
  };
  var ev = function (a, b) {
      return a.g ? Yg(b, a.g || a.h.g) : null;
    },
    fv = function (a) {
      a.J || (a.J = new rn(a));
      return a.J;
    },
    gv = function (a, b) {
      if (a == b) throw Error("sa");
      var c;
      if ((c = b && a.s && a.U)) {
        c = a.s;
        var d = a.U;
        c = c.u && d ? lc(c.u, d) || null : null;
      }
      if (c && a.s != b) throw Error("sa");
      a.s = b;
      V.O.sa.call(a, b);
    };
  V.prototype.getParent = function () {
    return this.s;
  };
  V.prototype.sa = function (a) {
    if (this.s && this.s != a) throw Error("ta");
    V.O.sa.call(this, a);
  };
  V.prototype.Ga = function () {
    this.g = rd(this.h.g, "DIV");
  };
  V.prototype.xc = function (a) {
    hv(this, a);
  };
  var iv = function (a, b) {
      hv(a, b.parentNode, b);
    },
    hv = function (a, b, c) {
      if (a.da) throw Error("ua");
      a.g || a.Ga();
      b ? b.insertBefore(a.g, c || null) : a.h.g.body.appendChild(a.g);
      (a.s && !a.s.da) || a.T();
    },
    jv = function (a, b) {
      if (a.da) throw Error("ua");
      if (b && a.Ic(b)) {
        a.Ie = !0;
        var c = Xg(b);
        (a.h && a.h.g == c) || (a.h = qd(b));
        a.wb(b);
        a.T();
      } else throw Error("va");
    };
  k = V.prototype;
  k.Ic = function () {
    return !0;
  };
  k.wb = function (a) {
    this.g = a;
  };
  k.T = function () {
    this.da = !0;
    kv(this, function (a) {
      !a.da && a.C() && a.T();
    });
  };
  k.ib = function () {
    kv(this, function (a) {
      a.da && a.ib();
    });
    this.J && this.J.removeAll();
    this.da = !1;
  };
  k.K = function () {
    this.da && this.ib();
    this.J && (this.J.ga(), delete this.J);
    kv(this, function (a) {
      a.ga();
    });
    !this.Ie && this.g && kh(this.g);
    this.s = this.Ha = this.g = this.u = this.o = null;
    V.O.K.call(this);
  };
  var mv = function (a, b, c) {
    var d = lv(a);
    if (b.da && (c || !a.da)) throw Error("ua");
    if (0 > d || d > lv(a)) throw Error("wa");
    (a.u && a.o) || ((a.u = {}), (a.o = []));
    if (b.getParent() == a) {
      var e = cv(b);
      a.u[e] = b;
      wa(a.o, b);
    } else {
      e = a.u;
      var f = cv(b);
      if (null !== e && f in e) throw Error("A`" + f);
      e[f] = b;
    }
    gv(b, a);
    Da(a.o, d, 0, b);
    b.da && a.da && b.getParent() == a
      ? ((a = a.ac()),
        (a.childNodes[d] || null) != b.C() &&
          (b.C().parentElement == a && a.removeChild(b.C()), (d = a.childNodes[d] || null), a.insertBefore(b.C(), d)))
      : c
      ? (a.g || a.Ga(), (d = a.o ? a.o[d + 1] || null : null), hv(b, a.ac(), d ? d.g : null))
      : a.da && !b.da && b.g && b.g.parentNode && 1 == b.g.parentNode.nodeType && b.T();
  };
  V.prototype.ac = function () {
    return this.g;
  };
  var lv = function (a) {
      return a.o ? a.o.length : 0;
    },
    kv = function (a, b) {
      a.o && a.o.forEach(b, void 0);
    },
    nv = function (a, b) {
      if (b) {
        var c = "string" === typeof b ? b : cv(b);
        b = a.u && c ? lc(a.u, c) || null : null;
        c && b && (kc(a.u, c), wa(a.o, b), b.ib(), b.g && kh(b.g), gv(b, null));
      }
      if (!b) throw Error("xa");
      return b;
    },
    ov = function (a) {
      for (var b = []; a.o && 0 != a.o.length; ) {
        var c = b,
          d = c.push;
        var e = nv(a, a.o ? a.o[0] || null : null);
        d.call(c, e);
      }
    };
  var pv = function () {},
    qv;
  Zd(pv);
  var rv = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
  };
  k = pv.prototype;
  k.ld = function () {};
  k.Jb = function (a) {
    return a.h.sb("DIV", sv(this, a).join(" "), a.getContent());
  };
  k.Id = function () {
    return !0;
  };
  k.ub = function (a, b) {
    b.id && dv(a, b.id);
    b && b.firstChild ? tv(a, b.firstChild.nextSibling ? za(b.childNodes) : b.firstChild) : (a.vb = null);
    var c = 0,
      d = this.cb(),
      e = this.cb(),
      f = !1,
      g = !1,
      h = za(ru(b));
    h.forEach(function (l) {
      f || l != d ? (g || l != e ? (c |= uv(this, l)) : (g = !0)) : ((f = !0), e == d && (g = !0));
      1 == uv(this, l) && b.hasAttribute("tabindex") && qh(b) && ph(b, !1);
    }, this);
    a.fa = c;
    f || (h.push(d), e == d && (g = !0));
    g || h.push(e);
    (a = a.jd) && h.push.apply(h, a);
    (f && g && !a) || su(b, h.join(" "));
    return b;
  };
  k.je = function (a) {
    null == a.Ua && (a.Ua = Lu(a.da ? a.g : a.h.g.body));
    a.Ua && this.Kd(a.C(), !0);
    a.isEnabled() && this.Wb(a, a.isVisible());
  };
  var vv = function (a, b) {
    if ((a = a.ld())) {
      var c = b.getAttribute("role") || null;
      a != c && uh(b, a);
    }
  };
  k = pv.prototype;
  k.Jc = function (a, b) {
    Nu(a, !b, !H);
  };
  k.Kd = function (a, b) {
    var c = this.cb() + "-SIsrTd";
    (a = a.C ? a.C() : a) && (b ? vu : xu)(a, [c]);
  };
  k.Jd = function (a) {
    var b;
    return a.na & 32 && (b = a.C()) ? b.hasAttribute("tabindex") && qh(b) : !1;
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
      (c.hasAttribute("tabindex") && qh(c)) != b && ph(c, b);
    }
  };
  k.Kc = function (a, b, c) {
    var d = a.C();
    if (d) {
      var e = wv(this, b);
      e && (a = a.C ? a.C() : a) && (c ? vu : xu)(a, [e]);
      this.Ma(d, b, c);
    }
  };
  k.Ma = function (a, b, c) {
    qv || (qv = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
    b = qv[b];
    var d = a.getAttribute("role") || null;
    d && ((d = rv[d] || b), (b = "checked" == b || "selected" == b ? d : b));
    b && vh(a, b, c);
  };
  k.setContent = function (a, b) {
    if (a && (jh(a), b))
      if ("string" === typeof b) mh(a, b);
      else {
        var c = function (d) {
          if (d) {
            var e = Xg(a);
            a.appendChild("string" === typeof d ? e.createTextNode(d) : d);
          }
        };
        Array.isArray(b) ? b.forEach(c) : !Aa(b) || "nodeType" in b ? c(b) : za(b).forEach(c);
      }
  };
  k.cb = function () {
    return "VIpgJd-bMcfAe";
  };
  var sv = function (a, b) {
      var c = a.cb(),
        d = [c],
        e = a.cb();
      e != c && d.push(e);
      c = b.getState();
      for (e = []; c; ) {
        var f = c & -c;
        e.push(wv(a, f));
        c &= ~f;
      }
      d.push.apply(d, e);
      (a = b.jd) && d.push.apply(d, a);
      return d;
    },
    wv = function (a, b) {
      a.g || xv(a);
      return a.g[b];
    },
    uv = function (a, b) {
      if (!a.j) {
        a.g || xv(a);
        var c = a.g,
          d = {},
          e;
        for (e in c) d[c[e]] = e;
        a.j = d;
      }
      a = parseInt(a.j[b], 10);
      return isNaN(a) ? 0 : a;
    },
    xv = function (a) {
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
  var yv = function () {};
  G(yv, pv);
  Zd(yv);
  k = yv.prototype;
  k.ld = function () {
    return "button";
  };
  k.Ma = function (a, b, c) {
    switch (b) {
      case 8:
      case 16:
        vh(a, "pressed", c);
        break;
      default:
      case 64:
      case 1:
        yv.O.Ma.call(this, a, b, c);
    }
  };
  k.Jb = function (a) {
    var b = yv.O.Jb.call(this, a);
    this.La(b, a.mc());
    var c = a.aa();
    c && this.Ld(b, c);
    a.na & 16 && this.Ma(b, 16, !!(a.fa & 16));
    return b;
  };
  k.ub = function (a, b) {
    b = yv.O.ub.call(this, a, b);
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
  var zv = {
    Oc: "mousedown",
    Pc: "mouseup",
    Pd: "mousecancel",
    Oh: "mousemove",
    Qh: "mouseover",
    Ph: "mouseout",
    Mh: "mouseenter",
    Nh: "mouseleave"
  };
  var Av = function (a, b) {
      if (!a) throw Error("ya`" + a);
      if ("function" !== typeof b) throw Error("za`" + b);
    },
    Bv = {};
  var Z = function (a, b, c) {
    V.call(this, c);
    if (!b) {
      for (b = this.constructor; b; ) {
        var d = id(b);
        if ((d = Bv[d])) break;
        b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
      }
      b = d ? ("function" === typeof d.L ? d.L() : new d()) : null;
    }
    this.i = b;
    this.vb = void 0 !== a ? a : null;
  };
  G(Z, V);
  k = Z.prototype;
  k.vb = null;
  k.fa = 0;
  k.na = 39;
  k.Mb = 255;
  k.bc = !0;
  k.jd = null;
  k.pd = !0;
  var Dv = function (a) {
    a.da && 0 != a.pd && Cv(a, !1);
    a.pd = !1;
  };
  k = Z.prototype;
  k.Ga = function () {
    var a = this.i.Jb(this);
    this.g = a;
    vv(this.i, a);
    this.i.Jc(a, !1);
    this.isVisible() || (U(a, !1), a && vh(a, "hidden", !0));
  };
  k.ac = function () {
    return this.C();
  };
  k.Ic = function (a) {
    return this.i.Id(a);
  };
  k.wb = function (a) {
    this.g = a = this.i.ub(this, a);
    vv(this.i, a);
    this.i.Jc(a, !1);
    this.bc = "none" != a.style.display;
  };
  k.T = function () {
    Z.O.T.call(this);
    var a = this.i,
      b = this.g;
    this.isVisible() || vh(b, "hidden", !this.isVisible());
    this.isEnabled() || a.Ma(b, 1, !this.isEnabled());
    this.na & 8 && a.Ma(b, 8, this.isSelected());
    this.na & 16 && a.Ma(b, 16, !!(this.fa & 16));
    this.na & 64 && a.Ma(b, 64, !!(this.fa & 64));
    this.i.je(this);
    this.na & -2 &&
      (this.pd && Cv(this, !0), this.na & 32 && (a = this.C())) &&
      ((b = this.j || (this.j = new Wu())),
      b.attach(a),
      fv(this).listen(b, "key", this.We).listen(a, "focus", this.Ve).listen(a, "blur", this.Md));
  };
  var Cv = function (a, b) {
    var c = fv(a),
      d = a.C();
    b
      ? (c.listen(d, zv.Oc, a.Kb).listen(d, [zv.Pc, zv.Pd], a.Qb).listen(d, "mouseover", a.F).listen(d, "mouseout", a.D),
        a.v != ng && c.listen(d, "contextmenu", a.v),
        H && !a.l && ((a.l = new Ev(a)), N(a, a.l)))
      : (c.X(d, zv.Oc, a.Kb).X(d, [zv.Pc, zv.Pd], a.Qb).X(d, "mouseover", a.F).X(d, "mouseout", a.D),
        a.v != ng && c.X(d, "contextmenu", a.v),
        H && (pc(a.l), (a.l = null)));
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
  var tv = function (a, b) {
    a.vb = b;
  };
  Z.prototype.isVisible = function () {
    return this.bc;
  };
  var Fv = function (a, b) {
    if (a.bc != b && a.dispatchEvent(b ? "show" : "hide")) {
      var c = a.C();
      c && (U(c, b), c && vh(c, "hidden", !b));
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
      !Gv(this, 1, !a) ||
      (a || (Hv(this, !1), Iv(this, !1)), this.isVisible() && this.i.Wb(this, a), Jv(this, 1, !a, !0));
  };
  var Iv = function (a, b) {
    Gv(a, 2, b) && Jv(a, 2, b);
  };
  Z.prototype.isActive = function () {
    return !!(this.fa & 4);
  };
  var Hv = function (a, b) {
    Gv(a, 4, b) && Jv(a, 4, b);
  };
  Z.prototype.isSelected = function () {
    return !!(this.fa & 8);
  };
  Z.prototype.zc = function (a) {
    Gv(this, 32, a) && Jv(this, 32, a);
  };
  Z.prototype.getState = function () {
    return this.fa;
  };
  var Jv = function (a, b, c, d) {
      d || 1 != b ? a.na & b && c != !!(a.fa & b) && (a.i.Kc(a, b, c), (a.fa = c ? a.fa | b : a.fa & ~b)) : a.setEnabled(!c);
    },
    Kv = function (a) {
      if (a.da && a.fa & 32) throw Error("ua");
      a.fa & 32 && Jv(a, 32, !1);
      a.na &= -33;
    },
    Lv = function (a, b) {
      return !!(a.Mb & b) && !!(a.na & b);
    },
    Gv = function (a, b, c) {
      return !!(a.na & b) && !!(a.fa & b) != c && (!(0 & b) || a.dispatchEvent(bv(b, c))) && !a.pa;
    };
  Z.prototype.F = function (a) {
    !Mv(a, this.C()) && this.dispatchEvent("enter") && this.isEnabled() && Lv(this, 2) && Iv(this, !0);
  };
  Z.prototype.D = function (a) {
    !Mv(a, this.C()) && this.dispatchEvent("leave") && (Lv(this, 4) && Hv(this, !1), Lv(this, 2) && Iv(this, !1));
  };
  Z.prototype.v = ng;
  var Mv = function (a, b) {
    return !!a.relatedTarget && lh(b, a.relatedTarget);
  };
  k = Z.prototype;
  k.Kb = function (a) {
    this.isEnabled() &&
      (Lv(this, 2) && Iv(this, !0),
      0 != a.h.button || (Oe && a.ctrlKey) || (Lv(this, 4) && Hv(this, !0), this.i && this.i.Jd(this) && this.C().focus()));
    0 != a.h.button || (Oe && a.ctrlKey) || a.g();
  };
  k.Qb = function (a) {
    this.isEnabled() && (Lv(this, 2) && Iv(this, !0), this.isActive() && this.vc(a) && Lv(this, 4) && Hv(this, !1));
  };
  k.vc = function (a) {
    if (Lv(this, 16)) {
      var b = !(this.fa & 16);
      Gv(this, 16, b) && Jv(this, 16, b);
    }
    Lv(this, 8) && Gv(this, 8, !0) && Jv(this, 8, !0);
    Lv(this, 64) && ((b = !(this.fa & 64)), Gv(this, 64, b) && Jv(this, 64, b));
    b = new ij("action", this);
    a && ((b.altKey = a.altKey), (b.ctrlKey = a.ctrlKey), (b.metaKey = a.metaKey), (b.shiftKey = a.shiftKey), (b.o = a.o));
    return this.dispatchEvent(b);
  };
  k.Ve = function () {
    Lv(this, 32) && this.zc(!0);
  };
  k.Md = function () {
    Lv(this, 4) && Hv(this, !1);
    Lv(this, 32) && this.zc(!1);
  };
  k.We = function (a) {
    return this.isVisible() && this.isEnabled() && this.od(a) ? (a.g(), a.stopPropagation(), !0) : !1;
  };
  k.od = function (a) {
    return 13 == a.keyCode && this.vc(a);
  };
  if ("function" !== typeof Z) throw Error("Aa`" + Z);
  if ("function" !== typeof pv) throw Error("Ba`" + pv);
  var Nv = id(Z);
  Bv[Nv] = pv;
  Av("VIpgJd-bMcfAe", function () {
    return new Z(null);
  });
  var Ev = function (a) {
    M.call(this);
    this.h = a;
    this.g = !1;
    this.i = new rn(this);
    N(this, this.i);
    a = this.h.g;
    this.i.listen(a, zv.Oc, this.l).listen(a, zv.Pc, this.o).listen(a, "click", this.j);
  };
  G(Ev, M);
  var Ov = !H || 9 <= Number(cf);
  Ev.prototype.l = function () {
    this.g = !1;
  };
  Ev.prototype.o = function () {
    this.g = !0;
  };
  var Pv = function (a, b) {
    if (!Ov) return (a.button = 0), (a.type = b), a;
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
  Ev.prototype.j = function (a) {
    if (this.g) this.g = !1;
    else {
      var b = a.h,
        c = b.button,
        d = b.type,
        e = Pv(b, "mousedown");
      this.h.Kb(new lj(e, a.i));
      e = Pv(b, "mouseup");
      this.h.Qb(new lj(e, a.i));
      Ov || ((b.button = c), (b.type = d));
    }
  };
  Ev.prototype.K = function () {
    this.h = null;
    Ev.O.K.call(this);
  };
  var Qv = function () {};
  G(Qv, yv);
  Zd(Qv);
  k = Qv.prototype;
  k.ld = function () {};
  k.Jb = function (a) {
    Dv(a);
    a.Mb &= -256;
    Kv(a);
    var b = a.h,
      c = b.sb,
      d = { class: sv(this, a).join(" "), disabled: !a.isEnabled(), title: a.mc() || "", value: a.aa() || "" };
    if ((a = a.getContent())) {
      if ("string" !== typeof a)
        if (Array.isArray(a)) a = a.map(sh).join("");
        else {
          var e = [];
          rh(a, e, !0);
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
    Dv(a);
    a.Mb &= -256;
    Kv(a);
    if (b.disabled) {
      var c = wv(this, 1);
      uu(b, c);
    }
    return Qv.O.ub.call(this, a, b);
  };
  k.je = function (a) {
    fv(a).listen(a.C(), "click", a.vc);
  };
  k.Jc = function () {};
  k.Kd = function () {};
  k.Jd = function (a) {
    return a.isEnabled();
  };
  k.Wb = function () {};
  k.Kc = function (a, b, c) {
    Qv.O.Kc.call(this, a, b, c);
    (a = a.C()) && 1 == b && (a.disabled = c);
  };
  k.aa = function (a) {
    return a.value;
  };
  k.Ld = function (a, b) {
    a && (a.value = b);
  };
  k.Ma = function () {};
  var Rv = function (a, b, c) {
    Z.call(this, a, b || Qv.L(), c);
  };
  G(Rv, Z);
  k = Rv.prototype;
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
    Rv.O.K.call(this);
    delete this.ea;
    delete this.A;
  };
  k.T = function () {
    Rv.O.T.call(this);
    if (this.na & 32) {
      var a = this.C();
      a && fv(this).listen(a, "keyup", this.od);
    }
  };
  k.od = function (a) {
    return (13 == a.keyCode && "key" == a.type) || (32 == a.keyCode && "keyup" == a.type) ? this.vc(a) : 32 == a.keyCode;
  };
  Av("VIpgJd-LgbsSe", function () {
    return new Rv(null);
  });
  var Tv = function (a, b, c, d) {
    Rv.call(this, a, d || Sv.L(), c || void 0);
    this.B = b || "";
  };
  E(Tv, Rv);
  k = Tv.prototype;
  k.T = function () {
    Rv.prototype.T.call(this);
    fv(this).listen(this, "action", this.kf);
  };
  k.focus = function () {
    try {
      this.C() && this.C().focus();
    } catch (a) {}
  };
  k.zc = function (a) {
    Rv.prototype.zc.call(this, a);
    this.C() && wu(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.Kb = function (a) {
    Rv.prototype.Kb.call(this, a);
    this.C() && uu(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.Qb = function (a) {
    Rv.prototype.Qb.call(this, a);
    this.C() && uu(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.kf = function () {
    this.B && this.dispatchEvent(this.B);
  };
  var Sv = function () {};
  E(Sv, yv);
  Sv.prototype.Jb = function (a) {
    var b = ud(this.i());
    uu(b, "Q0hgme-LgbsSe");
    a.h.Ne(b, a.getContent());
    var c = this.h();
    c && uu(b, c);
    this.ub(a, b);
    return b;
  };
  Sv.prototype.h = function () {
    return "";
  };
  Sv.prototype.i = function () {
    return cu;
  };
  Sv.L = function () {
    return zh(Sv);
  };
  var Vv = function (a, b, c) {
    Tv.call(this, void 0, b, c, Uv.L());
    this.G = a;
  };
  E(Vv, Tv);
  Vv.prototype.T = function () {
    Tv.prototype.T.call(this);
    var a = this.G,
      b = this.C();
    b && Qu.L().La(b, a);
  };
  Vv.prototype.setEnabled = function (a) {
    Tv.prototype.setEnabled.call(this, a);
  };
  Vv.prototype.La = function (a) {
    this.G = a;
    if (this.isEnabled()) {
      var b = this.C();
      b && Qu.L().La(b, a);
    }
  };
  chrome.i18n.getMessage("3551522853788442530");
  var Uv = function () {};
  E(Uv, Sv);
  Uv.prototype.h = function () {
    return "Q0hgme-Bz112c-LgbsSe";
  };
  Uv.prototype.i = function () {
    return eu;
  };
  Uv.L = function () {
    return zh(Uv);
  };
  var Wv = function () {
    this.g = this.i = this.j = this.h = null;
  };
  var Xv = function () {
    V.call(this);
    this.i = [];
    xs(S(), this.l, this);
  };
  E(Xv, V);
  Xv.prototype.T = function () {
    V.prototype.T.call(this);
    var a = new Lr(this.j, 50, this);
    N(this, a);
    var b = new kq(a.qa, 16, a);
    N(this, a);
    un(fv(this), this, "I", b.Gc, void 0, b);
    Yv(this, !1);
  };
  var Yv = function (a, b) {
    a.C() && (U(a.C(), b), a.dispatchEvent("K"));
  };
  Xv.prototype.l = function () {
    var a = S().g;
    a = Ce(a ? Go(a) : [], function (b) {
      b = Jo(b);
      return !!b && (Em(b) || Fm(b) || Gm(b));
    });
    Fa(this.i, a)
      ? kv(this, function (b) {
          Zv(b);
        })
      : ((this.i = a),
        ov(this),
        Bd(
          a,
          function (b) {
            mv(this, new $v(b), !0);
          },
          this
        ),
        Yv(this, !!lv(this)),
        this.j());
  };
  Xv.prototype.j = function () {
    for (var a = lv(this), b = [], c = [], d = 0; d < a; d++) {
      var e = this.o ? this.o[d] || null : null,
        f = 6 <= c.length;
      null == e.l || f ? U(e.C(), !1) : (c.push(e), b.push(e.l), U(e.C(), !0));
    }
    a = Cd(b);
    this.C().style.paddingTop = a.ef + "%";
    for (b = 0; b < c.length; b++)
      if (((d = a.Cf[b]), (e = c[b].C())))
        (e.style.top = d.top + "%"), (e.style.left = d.left + "%"), (e.style.width = d.width + "%"), (e.style.height = d.height + "%");
    this.dispatchEvent("K");
  };
  var aw = function (a, b) {
      kv(a, function (c) {
        return c.Ad(b);
      });
    },
    $v = function (a) {
      V.call(this);
      this.A = zh(cs);
      var b = chrome.i18n.getMessage("6932835915069019531");
      this.v = new Vv(b);
      this.j = a;
      this.i = this.l = null;
    };
  E($v, V);
  $v.prototype.Ga = function () {
    this.g = ud(ou);
  };
  $v.prototype.T = function () {
    V.prototype.T.call(this);
    jv(this.v, this.C().querySelector(".HiaYvf-VkLyEc"));
    var a = (this.i = this.C().querySelector(".HiaYvf-SmKAyb")),
      b;
    if (!(b = Jo(this.j).l)) {
      var c = this.j;
      b = new Wv();
      b.h = "https://keep.google.com";
      b.j = c.Ha;
      b.i = c.R;
      Jo(c) && Jo(c).j && (b.g = Jo(c).j);
      c = b.h ? Kc(b.h) : new Bi();
      c.g = ["", "/media/v2/" + b.j + "/" + b.i, b.g ? "/" + b.g : ""].join("");
      b = c.toString();
    }
    a.src = b;
    fv(this).listen(this.i, "load", this.B).listen(this.v, "action", this.D);
    Zv(this);
  };
  var Zv = function (a) {
    var b = a.C();
    b && ((a = "luf" == Jo(a.j).h), yu(b, "u0pjoe", a), (a = a ? bw : ""), Qu.L().La(b, a, !0));
  };
  $v.prototype.B = function () {
    var a = (this.i.naturalWidth || this.i.width) / (this.i.naturalHeight || this.i.height);
    this.l != a && ((this.l = a), this.dispatchEvent("I"));
  };
  $v.prototype.D = function () {
    var a = this.j;
    if (1 !== a.l) {
      a.j && Zn(a) && (0 != a.l || Uo(a.j, a.g, Uc(a)));
      a.l = 1;
      var b = new Th(),
        c = a.u;
      if (c.g && b) throw Error("E");
      c.g = b;
      Zh(a.u, b);
      Wn(a);
      a.o &&
        ((b = a.o),
        "DELETED" != b.h && ((b.h = "DELETED"), (b.l = !0), b.dispatchEvent("k")),
        (b = a.o),
        (b.l || (b.g && b.g.F)) && a.dispatchEvent("u"));
    }
    Vi(dd(), "n_ecmv3m") ? this.A.log(9023) : y("impression", 9023);
    this.ga();
  };
  $v.prototype.Ad = function (a) {
    Fv(this.v, a);
  };
  var bw = chrome.i18n.getMessage("4153306913989815073");
  var dw = function (a) {
      var b = 0,
        c = 0;
      cw(a) && ((b = a.selectionStart), (c = -1));
      return [b, c];
    },
    cw = function (a) {
      try {
        return "number" == typeof a.selectionStart;
      } catch (b) {
        return !1;
      }
    };
  var ew = function (a, b, c, d) {
    M.call(this);
    d = d || 150;
    this.j = null != c ? c : !0;
    this.o = a || ",;";
    this.J = this.o.charAt(0);
    a = this.j ? "[\\s" + this.o + "]+" : "[\\s]+";
    this.F = new RegExp("^" + a + "|" + a + "$", "g");
    this.D = new RegExp("\\s*[" + this.o + "]$");
    this.v = b || "";
    this.G = this.j;
    this.i = 0 < d ? new iq(d) : null;
    this.h = new rn(this);
    this.s = new rn(this);
    this.l = new Wu();
    this.u = -1;
  };
  G(ew, M);
  k = ew.prototype;
  k.Y = null;
  k.sd = "";
  k.ab = !1;
  k.zd = !1;
  k.aa = function () {
    return this.Y.value;
  };
  k.setCursorPosition = function (a) {
    var b = this.Y;
    cw(b) && (b.selectionStart = a);
    b = this.Y;
    cw(b) && (b.selectionEnd = a);
  };
  var fw = function (a, b) {
      vd(b) && 1 == b.nodeType && (uh(b, "combobox"), vh(b, "autocomplete", "list"));
      a.h.listen(b, "focus", a.Mc);
      a.h.listen(b, "blur", a.Lc);
      a.Y || (a.s.listen(b, "keydown", a.me), vd(b) && 1 == b.nodeType && th(Xg(b)) == b && a.wc(b));
    },
    gw = function (a, b) {
      vd(b) && 1 == b.nodeType && (b.removeAttribute("role"), b.removeAttribute("aria-autocomplete"));
      b == a.Y && a.Lc();
      a.h.X(b, "focus", a.Mc);
      a.h.X(b, "blur", a.Lc);
      a.Y || a.s.X(b, "keydown", a.me);
    };
  ew.prototype.B = function (a) {
    if (this.Y) {
      var b = a.toString();
      if (this.j) {
        a = hw(this, this.aa(), dw(this.Y)[0]);
        var c = iw(this, this.aa());
        this.D && !this.D.test(b) && (b = b.replace(/[\s\xa0]+$/, "") + this.J);
        0 == a || ie(c[a - 1]) || (b = " " + b);
        a == c.length - 1 && (b += " ");
        if (b != c[a]) {
          c[a] = b;
          b = this.Y;
          (Me || H) && b.blur();
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
  ew.prototype.K = function () {
    ew.O.K.call(this);
    this.h.ga();
    delete this.h;
    this.s.ga();
    this.l.ga();
    pc(this.i);
  };
  var mw = function (a, b) {
      switch (b.keyCode) {
        case 40:
          if (a.g.g.isVisible()) {
            jw(a.g);
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
          else if ((a.update(), kw(a.g) && a.G)) {
            b.g();
            return;
          }
          break;
        case 13:
          if (a.g.g.isVisible()) {
            if ((a.update(), kw(a.g))) {
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
      lw(a, b);
    },
    lw = function (a, b) {
      var c = a.j && b.l && -1 != a.o.indexOf(String.fromCharCode(b.l));
      c && a.update();
      c && kw(a.g) && b.g();
    };
  k = ew.prototype;
  k.pf = function () {
    return !1;
  };
  k.Mc = function (a) {
    this.wc(a.target || null);
  };
  k.wc = function (a) {
    this.s.removeAll();
    this.g && nw(this.g);
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
      this.ab && ow(this),
      (this.Y = null),
      this.i && (this.i.stop(), this.h.X(this.i, "tick", this.se)),
      this.g && pw(this.g));
  };
  k.se = function () {
    this.update();
  };
  k.me = function (a) {
    this.Mc(a);
  };
  k.pe = function (a) {
    this.u = a.keyCode;
    this.g && mw(this, a);
  };
  k.ne = function () {
    this.ab && 229 != this.u && ow(this);
  };
  k.oe = function (a) {
    this.ab && (13 == a.keyCode || (77 == a.keyCode && a.ctrlKey)) && ow(this);
  };
  k.qe = function () {};
  var ow = function (a) {
    a.ab && ((a.ab = !1), a.h.X(a.Y, "keypress", a.ne), a.h.X(a.Y, "keyup", a.oe));
  };
  ew.prototype.A = function (a) {
    lw(this, a);
  };
  ew.prototype.update = function (a) {
    if (this.Y && (a || this.aa() != this.sd)) {
      if (a || !this.zd) {
        a = dw(this.Y)[0];
        var b = this.aa();
        a = iw(this, b)[hw(this, b, a)];
        a = this.F ? String(a).replace(this.F, "") : a;
        this.g && ((this.g.s = this.Y), qw(this.g, a));
      }
      this.sd = this.aa();
    }
    this.zd = !1;
  };
  var hw = function (a, b, c) {
      a = iw(a, b);
      if (c == b.length) return a.length - 1;
      for (var d = (b = 0), e = 0; d < a.length && e <= c; d++) (e += a[d].length), (b = d);
      return b;
    },
    iw = function (a, b) {
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
  var rw = function (a) {
    ew.call(this);
    this.N = a;
  };
  E(rw, ew);
  rw.prototype.B = function (a) {
    this.Y.value = "";
    this.N(a);
    return !0;
  };
  rw.prototype.wc = function (a) {
    ew.prototype.wc.call(this, a);
    this.aa() || qw(this.g, this.aa());
  };
  var tw = function (a, b) {
      var c = [];
      if ("" != a)
        for (var d = new RegExp("(^|\\W+)" + Gg(a), "i"), e = 0; e < b.length && 100 > c.length; e++) {
          var f = b[e];
          String(f).match(d) && c.push(f);
        }
      0 == c.length && (c = sw(a, b));
      return c;
    },
    sw = function (a, b) {
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
        var I = r.ze - A.ze;
        return 0 != I ? I : r.index - A.index;
      });
      a = [];
      for (u = 0; 100 > u && u < c.length; u++) a.push(c[u].Jf);
      return a;
    };
  var uw = function () {
    R.call(this);
    this.g = new En({ mainId: "QUMgc2VudGluZWwgbGFiZWw=" });
    this.h = "";
  };
  E(uw, R);
  var vw = function (a, b, c, d) {
    var e = S().h,
      f = On(e);
    if (b) {
      var g = tw(b, f);
      !De(f, function (l) {
        return l.ka().toLowerCase() == b.toLowerCase();
      }) &&
        100 > ec(Nn(e)) &&
        ((e = chrome.i18n.getMessage("8169232898590866289", [b])), Hn(a.g, e), (a.h = b), g.unshift(a.g));
    } else g = f.slice();
    var h = S().g;
    h &&
      xa(
        g,
        function (l) {
          return Ao(h, l);
        },
        a
      );
    d(b, g.splice(0, c));
    a.dispatchEvent("K");
  };
  var ww = function (a, b, c) {
    R.call(this);
    this.u = a;
    this.v = c;
    this.g = b;
    yj(b, ["hilite", "select", "canceldismiss", "dismiss"], this.handleEvent, !1, this);
    this.j = null;
    this.h = [];
    this.l = -1;
    this.i = 0;
    this.o = this.s = null;
    this.B = {};
  };
  G(ww, R);
  ww.prototype.D = 10;
  ww.prototype.getToken = function () {
    return this.j;
  };
  ww.prototype.handleEvent = function (a) {
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
            var d = this.h[xw(this, a)];
            c = !!d && b.qd && b.qd(d);
            d && !c && this.l != a && this.mb(a);
          }
          c || kw(this);
          break;
        case "canceldismiss":
          nw(this);
          break;
        case "dismiss":
          pw(this);
      }
  };
  var qw = function (a, b) {
      a.j != b && ((a.j = b), vw(a.u, a.j, a.D, F(a.F, a)), nw(a));
    },
    jw = function (a) {
      for (var b = a.i + a.h.length - 1, c = a.l, d = 0; d < a.h.length; d++) {
        if (c >= a.i && c < b) c++;
        else if (-1 == c) c = a.i;
        else break;
        if (a.mb(c)) break;
      }
    };
  ww.prototype.mb = function (a) {
    var b = xw(this, a),
      c = this.h[b];
    return c && this.u.qd && this.u.qd(c) ? !1 : ((this.l = a), this.g.mb(a), -1 != b);
  };
  var kw = function (a) {
    var b = xw(a, a.l);
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
  ww.prototype.Aa = function () {
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
  var pw = function (a) {
    a.o || (a.o = window.setTimeout(F(a.Aa, a), 100));
  };
  ww.prototype.A = function () {
    return this.o ? (window.clearTimeout(this.o), (this.o = null), !0) : !1;
  };
  var nw = function (a) {
    a.A() || window.setTimeout(F(a.A, a), 10);
  };
  ww.prototype.K = function () {
    ww.O.K.call(this);
    delete this.B;
    this.g.ga();
    this.v.ga();
    this.u = null;
  };
  ww.prototype.F = function (a, b, c) {
    this.j == a && this.yd(b, c);
  };
  ww.prototype.yd = function (a, b) {
    var c = "object" == $d(b) && b;
    b = (c ? c.h() : b) ? xw(this, this.l) : -1;
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
    (a || 0 <= b) && 0 != d.length && this.j && (0 <= b ? this.mb(this.i + b) : jw(this));
    this.dispatchEvent("suggestionsupdate");
  };
  var xw = function (a, b) {
    b -= a.i;
    return 0 > b || b >= a.h.length ? -1 : b;
  };
  ww.prototype.update = function (a) {
    this.v.update(a);
  };
  var yw = function (a, b, c) {
    ww.call(this, a, b, c);
  };
  E(yw, ww);
  yw.prototype.Aa = function () {
    ww.prototype.Aa.call(this);
    this.dispatchEvent("K");
  };
  var zw = /#(.)(.)(.)/,
    Aw = /^#(?:[0-9a-f]{3}){1,2}$/i;
  var Bw = (function () {
    if (Pe) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(ca())) ? a[1] : "0";
    }
    return Oe
      ? ((a = /1[0|1][_.][0-9_.]+/), (a = a.exec(ca())) ? a[0].replace(/_/g, ".") : "10")
      : Qe
      ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(ca())) ? a[1] : "")
      : Re || Se || Te
      ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(ca())) ? a[1].replace(/_/g, ".") : "")
      : "";
  })();
  var Cw = function (a) {
      return (a = a.exec(ca())) ? a[1] : "";
    },
    Dw = (function () {
      if (df) return Cw(/Firefox\/([0-9.]+)/);
      if (H || Ie || He) return $e;
      if (hf) {
        if (oa() || pa()) {
          var a = Cw(/CriOS\/([0-9.]+)/);
          if (a) return a;
        }
        return Cw(/Chrome\/([0-9.]+)/);
      }
      if (jf && !oa()) return Cw(/Version\/([0-9.]+)/);
      if (ef || ff) {
        if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ca()))) return a[1] + "." + a[2];
      } else if (gf) return (a = Cw(/Android\s+([0-9.]+)/)) ? a : Cw(/Version\/([0-9.]+)/);
      return "";
    })();
  var Ew = function (a, b) {
    return (b & 8 && Lu(a) ? b ^ 4 : b) & -9;
  };
  var Fw = function (a, b, c, d) {
    R.call(this);
    this.v = a || document.body;
    this.j = qd(this.v);
    this.R = !a;
    this.g = null;
    this.A = "";
    this.h = [];
    this.l = [];
    this.J = this.u = -1;
    this.o = !1;
    this.className = "ztA2jd-SUR3Rd";
    this.N = "ztA2jd-AHUcCb";
    this.s = b || null;
    this.Z = null != d ? d : !0;
    this.S = !!c;
  };
  G(Fw, R);
  Fw.prototype.C = function () {
    return this.g;
  };
  Fw.prototype.yd = function (a, b, c) {
    this.A = b;
    this.h = a;
    this.u = -1;
    this.J = Date.now();
    this.i = c;
    this.l = [];
    Gw(this);
  };
  Fw.prototype.Aa = function () {
    this.o && ((this.o = !1), Hw(this, !1), U(this.g, !1));
  };
  Fw.prototype.show = function () {
    this.o || ((this.o = !0), Hw(this, !0), U(this.g, !0));
  };
  var Hw = function (a, b) {
    a.i &&
      (vh(a.i, "haspopup", b),
      vh(a.g, "expanded", b),
      vh(a.i, "expanded", b),
      b ? vh(a.i, "owns", a.g.id) : (a.i.removeAttribute("aria-owns"), wh(a.i, null)));
  };
  Fw.prototype.isVisible = function () {
    return this.o;
  };
  var Iw = function (a, b) {
    var c = 0 <= b && b < a.h.length ? a.h[b] : void 0,
      d = 0 <= b && b < a.l.length ? a.l[b] : void 0;
    if (
      a.dispatchEvent({ type: "rowhilite", s: d, pb: c ? c.data : null }) &&
      (0 <= a.u && xu(a.l[a.u], ["ztA2jd-auswjd", "auswjd"]), (a.u = b), d)
    ) {
      vu(d, ["ztA2jd-auswjd", "auswjd"]);
      a.i && wh(a.i, d);
      b = (a = a.g || ch(document)) || ch(document);
      var e = Gu(d),
        f = Gu(b);
      if (!H || 9 <= Number(cf)) {
        c = Au(b, "borderLeftWidth");
        var g = Au(b, "borderRightWidth");
        h = Au(b, "borderTopWidth");
        l = Au(b, "borderBottomWidth");
        g = new zu(parseFloat(h), parseFloat(g), parseFloat(l), parseFloat(c));
      } else {
        c = Pu(b, "borderLeft");
        g = Pu(b, "borderRight");
        var h = Pu(b, "borderTop"),
          l = Pu(b, "borderBottom");
        g = new zu(h, g, l, c);
      }
      b == ch(document)
        ? ((c = e.x - b.scrollLeft), (e = e.y - b.scrollTop), !H || 10 <= Number(cf) || ((c += g.left), (e += g.top)))
        : ((c = e.x - f.x - g.left), (e = e.y - f.y - g.top));
      d = Ju(d);
      f = b.clientHeight - d.height;
      g = b.scrollLeft;
      h = b.scrollTop;
      g += Math.min(c, Math.max(c - (b.clientWidth - d.width), 0));
      h += Math.min(e, Math.max(e - f, 0));
      b = new Tg(g, h);
      a.scrollLeft = b.x;
      a.scrollTop = b.y;
    }
  };
  Fw.prototype.mb = function (a) {
    if (-1 == a) Iw(this, -1);
    else
      for (var b = 0; b < this.h.length; b++)
        if (this.h[b].id == a) {
          Iw(this, b);
          break;
        }
  };
  var Jw = function (a) {
      if (!a.g) {
        var b = a.j.sb("DIV", { style: "display:none" });
        a.g = b;
        vu(b, je(a.className).split(" "));
        uh(b, "listbox");
        b.id = ":" + ($u.L().g++).toString(36);
        a.v.appendChild(b);
        yj(b, "click", a.B, !1, a);
        yj(b, "mousedown", a.D, !1, a);
        yj(b, "mouseover", a.F, !1, a);
      }
    },
    Gw = function (a) {
      Jw(a);
      a.ba && (a.g.style.minWidth = a.ba.clientWidth - 0 + "px");
      a.U && (a.g.style.maxWidth = a.U.clientWidth - 0 + "px");
      a.l.length = 0;
      a.j.Oe(a.g);
      a.s && a.s.xc
        ? a.s.xc(a, a.g, a.h, a.A)
        : a.h.forEach(function (b) {
            var c = this.A,
              d = this.j.sb("DIV", { className: "ztA2jd-oKdM2c", id: ":" + ($u.L().g++).toString(36) });
            uh(d, "option");
            this.s && this.s.Ef ? this.s.Ef(b, c, d) : mh(d, b.data.toString());
            c && this.Z && ((this.G = !1), Kw(this, d, c));
            uu(d, "ztA2jd-oKdM2c");
            this.l.push(d);
            b = d;
            this.g.appendChild(b);
          }, a);
      0 == a.h.length ? a.Aa() : (a.show(), Lw(a), Nu(a.g, !0));
    },
    Lw = function (a) {
      if (a.i && a.R) {
        var b = a.bf || a.i;
        var c = a.S ? 5 : 1;
        a = a.g;
        var d = c ^ 1,
          e;
        if ((e = a.offsetParent)) {
          var f = "HTML" == e.tagName || "BODY" == e.tagName;
          if (!f || "static" != Bu(e, "position")) {
            var g = Gu(e);
            if (!f) {
              f = Lu(e);
              var h;
              if ((h = f)) {
                h = jf && 0 <= te(Dw, 10);
                var l;
                if ((l = Ue)) l = 0 <= te(Bw, 10);
                var m = hf && 0 <= te(Dw, 85);
                h = Me || h || l || m;
              }
              f = h
                ? -e.scrollLeft
                : f && !Je && "visible" != Bu(e, "overflowX")
                ? e.scrollWidth - e.clientWidth - e.scrollLeft
                : e.scrollLeft;
              g = Ug(g, new Tg(f, e.scrollTop));
            }
          }
        }
        e = g || new Tg();
        g = Gu(b);
        f = Ku(b);
        g = new Dd(g.x, g.y, f.width, f.height);
        if ((f = Hu(b)))
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
          l = dh(l.g);
          m = new Tg(0, 0);
          var p = fh(Xg(h));
          if (Ge(p, "parent")) {
            var u = h;
            do {
              if (p == l) var w = Gu(u);
              else (w = Eu(u)), (w = new Tg(w.left, w.top));
              m.x += w.x;
              m.y += w.y;
            } while (p && p != l && p != p.parent && (u = p.frameElement) && (p = p.parent));
          }
          h = Ug(m, Gu(h));
          !H || 9 <= Number(cf) || ah(f.g) || (h = Ug(h, eh(f.g)));
          g.left += h.x;
          g.top += h.y;
        }
        b = Ew(b, c);
        c = g.left;
        b & 4 ? (c += g.width) : b & 2 && (c += g.width / 2);
        c = new Tg(c, g.top + (b & 1 ? g.height : 0));
        c = Ug(c, e);
        if ((b = Hu(a))) (b.top -= e.y), (b.right -= e.x), (b.bottom -= e.y), (b.left -= e.x);
        c = c.clone();
        g = Ew(a, d);
        d = Ku(a);
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
          (Du(a, new Tg(g.left, g.top)),
          (e = new Vg(g.width, g.height)),
          d == e ||
            (d && e && d.width == e.width && d.height == e.height) ||
            ((d = e),
            (a = a.style),
            Me ? (a.MozBoxSizing = "border-box") : Ne ? (a.WebkitBoxSizing = "border-box") : (a.boxSizing = "border-box"),
            (a.width = Math.max(d.width, 0) + "px"),
            (a.height = Math.max(d.height, 0) + "px")));
      }
    };
  Fw.prototype.K = function () {
    this.g &&
      (Fj(this.g, "click", this.B, !1, this),
      Fj(this.g, "mousedown", this.D, !1, this),
      Fj(this.g, "mouseover", this.F, !1, this),
      this.j.Fd(this.g),
      (this.g = null),
      (this.o = !1));
    pc(this.ca);
    this.v = null;
    Fw.O.K.call(this);
  };
  var Kw = function (a, b, c) {
      if (!a.G)
        if (3 == b.nodeType) {
          var d = null;
          Array.isArray(c) && 1 < c.length && (d = c.slice(1));
          c = Mw(c);
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
            } else d && Kw(a, b, d);
          }
        } else for (b = b.firstChild; b; ) (d = b.nextSibling), Kw(a, b, c), (b = d);
    },
    Mw = function (a) {
      var b = "";
      if (!a) return b;
      Array.isArray(a) &&
        (a = a.filter(function (c) {
          return !ie(null == c ? "" : String(c));
        }));
      Array.isArray(a) ? (b = 0 < a.length ? Gg(a[0]) : "") : /^\W/.test(a) || (b = Gg(a));
      return b;
    },
    Nw = function (a, b) {
      for (; b && b != a.g && !tu(b, "ztA2jd-oKdM2c"); ) b = b.parentNode;
      return b ? a.l.indexOf(b) : -1;
    };
  Fw.prototype.B = function (a) {
    var b = Nw(this, a.target);
    0 <= b && this.dispatchEvent({ type: "select", pb: this.h[b].id });
    a.stopPropagation();
  };
  Fw.prototype.D = function (a) {
    a.stopPropagation();
    a.g();
  };
  Fw.prototype.F = function (a) {
    a = Nw(this, a.target);
    0 <= a && !(300 > Date.now() - this.J) && this.dispatchEvent({ type: "hilite", pb: this.h[a].id });
  };
  var Ow = function (a) {
    V.call(this);
    this.B = zh(cs);
    this.D = Vi(dd(), "n_ecmv3m");
    this.i = null;
    this.l = new uw();
    this.l.sa(this);
    this.v = new Fw();
    N(this, this.v);
    this.j = new rw(F(this.R, this));
    N(this, this.j);
    var b = new yw(this.l, this.v, this.j);
    b.sa(this);
    b.D = 100;
    this.j.g = b;
    this.F = [];
    this.A = a;
    xs(S(), this.G, this);
  };
  E(Ow, V);
  Ow.prototype.T = function () {
    V.prototype.T.call(this);
    var a = this.C();
    this.i = a.querySelector(".RmniWd-V67aGc-yrriRe");
    this.i.setAttribute("maxlength", "50");
    vh(this.i, "label", Pw);
    Qu.L().La(a.querySelector(".V67aGc-Bz112c"), Pw);
    fv(this).listen(this, "action", this.Z).listen(this.i, "input", this.S);
    fw(this.j, this.i);
    this.j.g.s = this.i;
    Qw(this);
  };
  Ow.prototype.N = function () {
    this.i.value = "";
    Qw(this);
    this.j.g.Aa();
  };
  var Rw = function (a, b) {
    b ? (a.i.removeAttribute("readonly"), fw(a.j, a.i)) : (a.i.setAttribute("readonly", !0), gw(a.j, a.i));
    kv(a, function (c) {
      return c.Ad(b);
    });
  };
  Ow.prototype.G = function () {
    var a = S().h,
      b = S().g;
    b = b ? zo(b) : [];
    Fa(this.F, b) ||
      ((this.F = b),
      ov(this),
      Bd(
        b,
        function (c) {
          (c = Qn(a, c)) && mv(this, new Sw(c), !0);
        },
        this
      ),
      lv(this) && this.dispatchEvent("G"),
      (b = document.activeElement == this.i),
      this.C().appendChild(this.i),
      b && this.i && this.i.focus());
  };
  var Qw = function (a) {
    var b = rd(document, "SPAN");
    b.className = a.i.className;
    b.classList.add("RmniWd-V67aGc-yrriRe-DyBK0");
    b.innerText = a.i.value;
    document.body.appendChild(b);
    var c = b.getBoundingClientRect().width + 3;
    document.body.removeChild(b);
    a.i.style.width = c + "px";
  };
  Ow.prototype.Z = function (a) {
    var b = S().g;
    if (b && a.target instanceof Sw && ((a = a.target.Ha), Yn(b) && Ao(b, a))) {
      a = t([a.g].concat(md(a.h)));
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = b.v[c.value]) && !yo(c)) {
          var d = d || new Th();
          c.g = d;
        }
      co(b);
      Wn(b);
      b.dispatchEvent("D");
    }
  };
  Ow.prototype.S = function () {
    this.dispatchEvent("G");
    Qw(this);
  };
  Ow.prototype.R = function (a) {
    var b = S(),
      c = b.g;
    b = b.h;
    if (c) {
      if ("QUMgc2VudGluZWwgbGFiZWw=" == a.g) {
        a = this.l.h;
        var d = a,
          e = Pn(b, d);
        e
          ? (b = e)
          : 100 <= ec(b.g)
          ? (b = null)
          : ((e = {}),
            (e = new En(((e.name = d), (e.mainId = "tag." + Ig() + "." + new Date().getTime()), e))),
            Gn(e),
            (b.g[e.g] = e),
            b.u(),
            b.s.listen(e, "k", b.u),
            (b = e));
        b && Co(c, b);
        this.D ? (b && this.A && It(this.A, b), this.B.log(9056)) : y("impression", 9056);
      } else Co(c, a), (a = a.ka()), this.D ? this.B.log(9060) : y("impression", 9060);
      Qw(this);
      c = chrome.i18n.getMessage("7733569569331009603", [a]);
      y("speakMessage", c);
      this.i && this.i.focus();
    }
  };
  var Pw = chrome.i18n.getMessage("11138431688427255"),
    Sw = function (a) {
      V.call(this);
      this.j = zh(cs);
      var b = chrome.i18n.getMessage("1988879857371940328", [a.ka()]);
      this.i = new Vv(b);
      mv(this, this.i);
      this.Ha = a;
      dv(this, a.g);
    };
  E(Sw, V);
  Sw.prototype.Ga = function () {
    this.g = ud(nu);
  };
  Sw.prototype.T = function () {
    V.prototype.T.call(this);
    jv(this.i, ev(this, "h1U9Be-V67aGc-VkLyEc"));
    mh(ev(this, "h1U9Be-V67aGc-V1ur5d"), this.Ha.ka());
    fv(this).listen(this, "action", this.l);
  };
  Sw.prototype.l = function (a) {
    a.target = this;
    Vi(dd(), "n_ecmv3m") ? this.j.log(9061) : y("impression", 9061);
  };
  Sw.prototype.Ad = function (a) {
    this.i.setEnabled(a);
  };
  var Uw = function (a, b, c) {
    Tv.call(this, a, b, c, Tw.L());
  };
  E(Uw, Tv);
  var Tw = function () {};
  E(Tw, Sv);
  Tw.prototype.h = function () {
    return "Q0hgme-fmcmS-LgbsSe";
  };
  Tw.prototype.i = function () {
    return gu;
  };
  Tw.L = function () {
    return zh(Tw);
  };
  var Ww = function (a, b, c, d, e, f, g) {
    V.call(this, a);
    this.i = new Vw(c);
    this.N = null;
    this.B = b;
    this.l = new Uw();
    mv(this, this.l);
    this.v = null;
    this.F = e || "";
    this.D = f || null;
    this.j = d || null;
    this.G = g || null;
    this.A = null;
  };
  E(Ww, V);
  Ww.prototype.Ga = function () {
    this.g = ud(ju, { xf: this.i.g });
  };
  Ww.prototype.T = function () {
    V.prototype.T.call(this);
    this.N = ev(this, "Q0hgme-n5T17d-woLtV");
    U(this.N, this.i.i);
    mh(ev(this, "Q0hgme-vDaB1c-Ne3sFf"), this.B);
    fv(this).listen(this.g, "click", function (a) {
      a.stopPropagation();
    });
    jv(this.l, ev(this, "Q0hgme-vDaB1c-JIbuQc"));
    fv(this).listen(this.l, "action", this.S);
    this.l.setContent(this.F);
    Fv(this.l, !!this.F);
    this.i.g &&
      ((this.v = new Vv(Xw)), mv(this, this.v), jv(this.v, ev(this, "Q0hgme-vDaB1c-IYtByb")), fv(this).listen(this.v, "action", this.R));
    this.i.timeout && (this.A = jq(this.hide, this.i.timeout, this));
    jq(
      function () {
        !this.pa && uu(this.C(), "ZiwkRe");
      },
      16,
      this
    );
  };
  Ww.prototype.getMessage = function () {
    return this.B;
  };
  Ww.prototype.hide = function (a) {
    this.pa || (a && (this.j && this.j(), (this.j = null)), Yw(this), wu(this.C(), "ZiwkRe"), jq(this.ga, 218, this));
  };
  var Yw = function (a) {
    null != a.A && n.clearTimeout(a.A);
  };
  Ww.prototype.S = function () {
    this.D && this.D();
    this.j = null;
    this.i.h || this.hide();
  };
  Ww.prototype.R = function () {
    this.hide();
    this.G && this.G();
  };
  Ww.prototype.K = function () {
    V.prototype.K.call(this);
    Yw(this);
    this.j && this.j();
  };
  var Xw = chrome.i18n.getMessage("8342620486324515462"),
    Vw = function (a) {
      this.g = !a || !(a & 2);
      this.i = !!a && !!(a & 16);
      this.h = !!a && !!(a & 1);
      this.timeout = a && a & 4 ? 0 : !this.g || (a && a) ? 5e3 : 1e4;
    };
  var Zw = function () {
    M.call(this);
    this.i = qd();
    this.j = this.i.g.body;
    this.g = null;
    this.h = [];
  };
  E(Zw, M);
  Zw.prototype.config = function (a) {
    this.j = a || this.j;
  };
  Zw.prototype.clearAll = function (a) {
    var b = this.h;
    if (a) qc(b);
    else
      for (a = 0; a < b.length; a++) {
        var c = b[a];
        c.i.timeout && (Yw(c), jq(c.hide, 100 * a, c));
      }
  };
  var $w = function (a) {
    return a.h[a.h.length - 1] || null;
  };
  Zw.prototype.show = function (a, b, c) {
    a = new Ww(this.i, a, b, c);
    ax(this, a);
    return a;
  };
  var bx = function (a, b, c, d, e) {
      b = new Ww(a.i, b, e, void 0, c, d, void 0);
      ax(a, b);
    },
    ax = function (a, b) {
      a.g || ((a.g = hh("DIV", "Q0hgme-vDaB1c-haAclf")), a.j.appendChild(a.g));
      U(a.g, !0);
      if (b.i.timeout)
        for (var c = a.h.length - 1; 0 <= c; c--) {
          var d = a.h[c];
          d.i.timeout && (d.hide(), a.h.splice(c, 1));
        }
      a.g.firstChild && b.i.timeout ? iv(b, a.g.firstChild) : b.xc(a.g);
      a.h.unshift(b);
      zh(Ah).speak(b.getMessage());
      xh(
        b,
        function () {
          wa(this.h, b);
          0 == this.h.length && U(this.g, !1);
        },
        a
      );
      N(a, b);
    };
  Zw.prototype.K = function () {
    M.prototype.K.call(this);
    delete this.g;
  };
  chrome.i18n.getMessage("2452145367257933677");
  var cx = chrome.i18n.getMessage("3542768157572111342"),
    dx = function () {
      V.call(this);
      this.i = [];
      this.j = null;
      this.l = new Zw();
    };
  E(dx, V);
  dx.prototype.Ga = function () {
    this.g = ud(lu);
  };
  dx.prototype.T = function () {
    var a = this;
    V.prototype.T.call(this);
    y("impression", 9213);
    this.j = this.C().querySelector(".rymPhb-PntVL");
    this.l.config(this.g);
    bx(
      this.l,
      cx,
      $o,
      function () {
        return a.dispatchEvent("J");
      },
      8
    );
  };
  dx.prototype.ac = function () {
    return this.j;
  };
  dx.prototype.update = function () {
    var a = S().g;
    a = a ? Tc(a) : [];
    for (
      Bd(
        a,
        function (b, c) {
          (c = this.i[c]) ? c.update(b) : ((c = new ex(b)), mv(this, c, !0), this.i.push(c));
        },
        this
      );
      this.i.length > a.length;

    )
      nv(this, this.i.pop());
    this.dispatchEvent("K");
  };
  var ex = function (a) {
    V.call(this);
    this.j = a;
    this.i = null;
  };
  E(ex, V);
  ex.prototype.Ga = function () {
    this.g = ud(mu);
  };
  ex.prototype.T = function () {
    V.prototype.T.call(this);
    this.i = this.C().querySelector(".rymPhb-ibnC6b-fmcmS");
    this.update(this.j);
  };
  ex.prototype.update = function (a) {
    mh(this.i, Uc(a));
    yu(this.C(), "barxie", a.xa);
  };
  var fx = function () {
    this.g = chrome.storage.local;
    this.h = RegExp("^gksn-");
  };
  fx.prototype.get = function (a, b) {
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
  fx.prototype.getAll = function (a) {
    this.get("", a);
  };
  fx.prototype.set = function (a, b, c) {
    var d = {};
    d[a] = b;
    gx(this, d, c);
  };
  var gx = function (a, b, c) {
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
  fx.prototype.remove = function (a, b) {
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
  fx.prototype.contains = function (a, b) {
    hx(
      this,
      a,
      ee(function (c, d) {
        c(!!d);
      }, b)
    );
  };
  var hx = function (a, b, c) {
    (b = Wc(b)) || c(null);
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
  var ix = function () {
    qd();
  };
  ix.prototype.xc = function (a, b) {
    a = a(b || {}, {});
    return String(a);
  };
  var jx = function (a) {
    a(pd, {});
  };
  new ix();
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
  var kx = chrome.i18n.getMessage("5592884381280360832");
  chrome.i18n.getMessage("6069780031254134657");
  chrome.i18n.getMessage("7624042048123264803");
  chrome.i18n.getMessage("900086393693234779");
  chrome.i18n.getMessage("6822520214440117457");
  chrome.i18n.getMessage("5275304974990264425");
  chrome.i18n.getMessage("4514241210910366093");
  chrome.i18n.getMessage("1694896269813520248");
  chrome.i18n.getMessage("7254411458460045711");
  chrome.i18n.getMessage("5510222038351634163");
  jx(function () {
    return chrome.i18n.getMessage("8104421162933956065");
  });
  jx(function () {
    return chrome.i18n.getMessage("1055686627716339120");
  });
  jx(function () {
    return chrome.i18n.getMessage("2983318659047499045");
  });
  jx(function () {
    return chrome.i18n.getMessage("3418677553313974490");
  });
  jx(function () {
    return chrome.i18n.getMessage("546766753072101168");
  });
  jx(function () {
    return chrome.i18n.getMessage("7585826646011739428");
  });
  jx(function () {
    return chrome.i18n.getMessage("7528441140724145783");
  });
  jx(function () {
    return chrome.i18n.getMessage("2323249770683736002");
  });
  jx(function () {
    return chrome.i18n.getMessage("4930506384627295710");
  });
  jx(function () {
    return chrome.i18n.getMessage("7102649289752747375");
  });
  jx(function () {
    return chrome.i18n.getMessage("7911416166208830577");
  });
  jx(function () {
    return chrome.i18n.getMessage("8193677552005249631");
  });
  jx(function () {
    return chrome.i18n.getMessage("7005745151564974365");
  });
  jx(function () {
    return chrome.i18n.getMessage("7384785369409503695");
  });
  jx(function () {
    return chrome.i18n.getMessage("4974261966265341751");
  });
  jx(function () {
    return chrome.i18n.getMessage("7420364754178516134");
  });
  jx(function () {
    return chrome.i18n.getMessage("5570885401952336951");
  });
  jx(function () {
    return chrome.i18n.getMessage("9146862513672039744");
  });
  chrome.i18n.getMessage("3714239567487848851");
  chrome.i18n.getMessage("2930974997943171554");
  chrome.i18n.getMessage("7735981667219692675");
  chrome.i18n.getMessage("3769279410443855918");
  var lx = function (a, b, c) {
      this.j = a;
      this.i = b;
      this.h = c;
    },
    px = function (a) {
      mx(a, a.h).then(function (b) {
        !b && 36e5 < Date.now() - nx && ox(a);
      });
    },
    ox = function (a) {
      nx = Date.now();
      bx(
        a.j,
        a.i,
        kx,
        function () {
          a.g.set(a.h, !0);
        },
        6
      );
    },
    nx = 0;
  var qx = new bn(),
    rx = chrome.i18n.getMessage("7253527966847172544", [qx.format(new Date(2022, 11, 5))]),
    sx = function (a) {
      lx.call(this, a, rx, "mv2_deprecation_message");
      this.g = zh(fx);
    };
  E(sx, lx);
  var mx = function (a, b) {
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
  var tx = {},
    $b =
      ((tx.DEFAULT = "#FFFFFF"),
      (tx.RED = "#FAAFA8"),
      (tx.ORANGE = "#F39F76"),
      (tx.YELLOW = "#FFF8B8"),
      (tx.GREEN = "#E2F6D3"),
      (tx.TEAL = "#B4DDD3"),
      (tx.BLUE = "#D4E4ED"),
      (tx.CERULEAN = "#AECCDC"),
      (tx.PURPLE = "#D3BFDB"),
      (tx.PINK = "#F6E2DD"),
      (tx.BROWN = "#E9E3D4"),
      (tx.GRAY = "#EFEFF1"),
      tx),
    ux = function () {
      this.g = bc(function (a) {
        if (!Aw.test(a)) throw Error("Ca`" + a);
        4 == a.length && (a = a.replace(zw, "#$1$1$2$2$3$3"));
        a = a.toLowerCase();
        a = parseInt(a.slice(1), 16);
        return ("rgb(" + [a >> 16, (a >> 8) & 255, a & 255].join() + ")").replace("rgb", "rgba").replace(")", ", 0.8)");
      });
      this.g.DEFAULT = "rgba(242, 242, 242, 0.8)";
    };
  ux.prototype.aa = function (a) {
    return $b[a] || $b.DEFAULT;
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
  var vx = [[], []],
    wx = 0,
    xx = !1,
    yx = 0,
    Ax = function (a, b) {
      var c = yx++,
        d = { zf: { id: c, Pa: a.measure, context: b }, Bf: { id: c, Pa: a.ke, context: b }, state: {}, args: void 0, rc: !1 };
      return function () {
        0 < arguments.length
          ? (d.args || (d.args = []), (d.args.length = 0), d.args.push.apply(d.args, arguments), d.args.push(d.state))
          : d.args && 0 != d.args.length
          ? ((d.args[0] = d.state), (d.args.length = 1))
          : (d.args = [d.state]);
        d.rc || ((d.rc = !0), vx[wx].push(d));
        xx || ((xx = !0), window.requestAnimationFrame(zx));
      };
    },
    zx = function () {
      xx = !1;
      var a = vx[wx],
        b = a.length;
      wx = (wx + 1) % 2;
      for (var c, d = 0; d < b; ++d) {
        c = a[d];
        var e = c.zf;
        c.rc = !1;
        e.Pa && e.Pa.apply(e.context, c.args);
      }
      for (d = 0; d < b; ++d) (c = a[d]), (e = c.Bf), (c.rc = !1), e.Pa && e.Pa.apply(e.context, c.args), (c.state = {});
      a.length = 0;
    };
  var Bx = H ? zg(ug(new tg(rg, 'javascript:""'))) : zg(ug(new tg(rg, "about:blank")));
  H ? zg(ug(new tg(rg, 'javascript:""'))) : zg(ug(new tg(rg, "javascript:undefined")));
  var Cx = function (a) {
    R.call(this);
    this.g = a;
    a = H ? "focusout" : "blur";
    this.h = yj(this.g, H ? "focusin" : "focus", this, !H);
    this.i = yj(this.g, a, this, !H);
  };
  G(Cx, R);
  Cx.prototype.handleEvent = function (a) {
    var b = new lj(a.h);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b);
  };
  Cx.prototype.K = function () {
    Cx.O.K.call(this);
    Gj(this.h);
    Gj(this.i);
    delete this.g;
  };
  var Dx = function (a, b) {
    this.i = a;
    this.h = b;
  };
  var Ex = function (a, b) {
    V.call(this, b);
    this.Le = !!a;
    this.Z = null;
    this.Ee = Ax({ ke: this.yc }, this);
    Ax({ ke: this.He }, this);
  };
  G(Ex, V);
  k = Ex.prototype;
  k.kd = null;
  k.cc = !1;
  k.za = null;
  k.ma = null;
  k.Fa = null;
  k.fd = !1;
  k.Ga = function () {
    Ex.O.Ga.call(this);
    var a = this.C();
    vu(a, je("VIpgJd-TUo6Hb").split(" "));
    ph(a, !0);
    U(a, !1);
    Fx(this);
    Gx(this);
  };
  var Fx = function (a) {
      if (a.Le && !a.ma) {
        var b = a.h.sb("IFRAME", { frameborder: 0, style: "border:0;vertical-align:bottom;" });
        b.src = wg(Bx);
        a.ma = b;
        a.ma.className = "VIpgJd-TUo6Hb-xJ5Hnf";
        U(a.ma, !1);
        b = a.ma.style;
        "opacity" in b
          ? (b.opacity = 0)
          : "MozOpacity" in b
          ? (b.MozOpacity = 0)
          : "filter" in b && (b.filter = "alpha(opacity=" + 100 * Number(0) + ")");
      }
      a.za || ((a.za = a.h.sb("DIV", "VIpgJd-TUo6Hb-xJ5Hnf")), U(a.za, !1));
    },
    Gx = function (a) {
      a.Fa || ((a.Fa = rd(a.h.g, "SPAN")), U(a.Fa, !1), ph(a.Fa, !0), (a.Fa.style.position = "absolute"));
    };
  k = Ex.prototype;
  k.xe = function () {
    this.fd = !1;
  };
  k.Ic = function (a) {
    return !!a && "DIV" == a.tagName;
  };
  k.wb = function (a) {
    Ex.O.wb.call(this, a);
    a = je("VIpgJd-TUo6Hb").split(" ");
    vu(this.C(), a);
    Fx(this);
    Gx(this);
    ph(this.C(), !0);
    U(this.C(), !1);
  };
  k.T = function () {
    if (this.ma) {
      var a = this.C();
      a.parentNode && a.parentNode.insertBefore(this.ma, a);
    }
    a = this.C();
    a.parentNode && a.parentNode.insertBefore(this.za, a);
    Ex.O.T.call(this);
    a = this.C();
    a.parentNode && a.parentNode.insertBefore(this.Fa, a.nextSibling);
    this.kd = new Cx(this.h.g);
    fv(this).listen(this.kd, "focusin", this.onFocus);
    Hx(this, !1);
  };
  k.ib = function () {
    this.isVisible() && Ix(this, !1);
    pc(this.kd);
    Ex.O.ib.call(this);
    kh(this.ma);
    kh(this.za);
    kh(this.Fa);
  };
  var Ix = function (a, b) {
      if (b != a.cc)
        if ((a.ca && a.ca.stop(), a.wa && a.wa.stop(), a.ba && a.ba.stop(), a.ua && a.ua.stop(), a.da && Hx(a, b), b)) {
          if (a.dispatchEvent("beforeshow")) {
            try {
              a.Z = a.h.g.activeElement;
            } catch (f) {}
            a.He();
            fv(a).listen(dh(a.h.g), "resize", a.yc).listen(dh(a.h.g), "orientationchange", a.Ee);
            Jx(a, !0);
            a.focus();
            a.cc = !0;
            a.ca && a.wa ? (xj(a.ca, "end", a.re, !1, a), a.wa.play(), a.ca.play()) : a.re();
          }
        } else if (a.dispatchEvent("beforehide")) {
          fv(a).X(dh(a.h.g), "resize", a.yc).X(dh(a.h.g), "orientationchange", a.Ee);
          a.cc = !1;
          a.ba && a.ua ? (xj(a.ba, "end", a.le, !1, a), a.ua.play(), a.ba.play()) : a.le();
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
    Hx = function (a, b) {
      a.Be || (a.Be = new Dx(a.g, a.h));
      a = a.Be;
      if (b) {
        a.g || (a.g = []);
        b = a.h.getChildren(a.h.g.body);
        for (var c = 0; c < b.length; c++) {
          var d = b[c],
            e;
          if ((e = d != a.i)) (e = d.getAttribute("aria-hidden")), (e = !(null == e || void 0 == e ? 0 : String(e)));
          e && (vh(d, "hidden", !0), a.g.push(d));
        }
      } else if (a.g) {
        for (c = 0; c < a.g.length; c++) a.g[c].removeAttribute("aria-hidden");
        a.g = null;
      }
    };
  Ex.prototype.He = function () {
    this.yc();
    this.Nd();
  };
  var Jx = function (a, b) {
    a.ma && U(a.ma, b);
    a.za && U(a.za, b);
    U(a.C(), b);
    U(a.Fa, b);
  };
  k = Ex.prototype;
  k.re = function () {
    this.dispatchEvent("show");
  };
  k.le = function () {
    Jx(this, !1);
    this.dispatchEvent("hide");
  };
  k.isVisible = function () {
    return this.cc;
  };
  k.focus = function () {
    this.fe();
  };
  k.yc = function () {
    this.ma && U(this.ma, !1);
    this.za && U(this.za, !1);
    var a = this.h.g;
    var b = bh(fh(this.h.g) || window || window);
    var c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.ma && (U(this.ma, !0), Iu(this.ma, c, a));
    this.za && (U(this.za, !0), Iu(this.za, c, a));
  };
  k.Nd = function () {
    if ("fixed" == Bu(this.C(), "position"))
      var a = 0,
        b = 0;
    else (b = eh(this.h.g)), (a = b.x), (b = b.y);
    var c = Ku(this.C());
    var d = bh(fh(this.h.g) || window || window);
    a = Math.max(a + d.width / 2 - c.width / 2, 0);
    b = Math.max(b + d.height / 2 - c.height / 2, 0);
    Du(this.C(), a, b);
    Du(this.Fa, a, b);
  };
  k.onFocus = function (a) {
    this.fd ? this.xe() : a.target == this.Fa && jq(this.fe, 0, this);
  };
  k.fe = function () {
    try {
      H && this.h.g.body.focus(), this.C().focus();
    } catch (a) {}
  };
  k.K = function () {
    pc(this.ca);
    this.ca = null;
    pc(this.ba);
    this.ba = null;
    pc(this.wa);
    this.wa = null;
    pc(this.ua);
    this.ua = null;
    Ex.O.K.call(this);
  };
  var Lx = function (a) {
    Ex.call(this);
    this.te = zh(cs);
    this.gb = this.B = null;
    this.Je = new ux();
    this.hb = null;
    this.A = new Zw();
    var b = chrome.i18n.getMessage("4047470251075013857");
    this.Da = new Vv(b);
    mv(this, this.Da);
    this.Ia = null;
    this.Ub = new Uw();
    mv(this, this.Ub);
    this.yb = new kq(this.pc, 5e3, this);
    N(this, this.yb);
    this.i = this.ya = this.l = this.jb = this.ve = this.ue = null;
    this.ta = new dx();
    mv(this, this.ta);
    this.Tb = null;
    this.zb = new Xv();
    mv(this, this.zb);
    this.Ab = new Vv(Kx);
    mv(this, this.Ab);
    this.F = new Uw();
    mv(this, this.F);
    this.xa = new Uw();
    mv(this, this.xa);
    this.R = new Uw();
    mv(this, this.R);
    this.De = new Vv($o, "J");
    mv(this, this.De);
    b = chrome.i18n.getMessage("9218540601355708194");
    this.Ge = new Vv(b, "L");
    mv(this, this.Ge);
    this.j = Vi(dd(), "n_ecmv3m");
    Vi(dd(), "n_scp") && !this.j ? ((this.S = new Vv(Zo)), mv(this, this.S)) : this.j && yj(window, "beforeunload", this.nd);
    this.N = null;
    this.fb = !0;
    this.ye = "";
    b = new kq(this.Fe, 20, this);
    N(this, b);
    this.Ca = new Lr(b.Gc, 30, b);
    N(this, this.Ca);
    this.Cb = 0;
    this.v = 1;
    xs(S(), this.update, this);
    this.j && a && ((this.uc = a), (this.Va = new Et(this.uc)));
    this.D = new Ow(this.Va);
    mv(this, this.D);
    this.Ba = this.Bb = !1;
  };
  E(Lx, Ex);
  var Mx = function (a) {
    Nt(a.Va, function (b, c) {
      c && ((b = {}), S().h.update(((b[Jn.cd] = c), b)), (a.Bb = !0));
    });
  };
  Lx.prototype.wb = function (a) {
    Ex.prototype.wb.call(this, a);
    var b = (b = { Hf: !!this.S, yf: this.j });
    var c = b.Hf,
      d = b.yf;
    b = Tt;
    var e = '<div class="' + T("k77Iif-V68bde") + '">';
    var f = Tt(
      '<div class="' +
        T("e1YmVc-haAclf") +
        '"><div class="' +
        T("e1YmVc-HiaYvf") +
        '"></div><div class="' +
        T("e1YmVc-fmcmS") +
        '"><div class="' +
        T("e1YmVc-r4nke") +
        '"></div><div class="' +
        T("e1YmVc-dZ8yzd") +
        '"></div></div>' +
        du("Rsbfue-e1YmVc") +
        "</div>"
    );
    e =
      e +
      f +
      '<div class="' +
      T("HiaYvf-FCjw3e") +
      '"></div>' +
      Tt(
        '<div class="' +
          T("mwcmwf-haAclf") +
          " " +
          T("qAWA2") +
          '"><textarea class="' +
          T("h1U9Be-r4nke") +
          '" rows="1"></textarea><textarea class="' +
          T("h1U9Be-qJTHM") +
          '" rows="1"></textarea><div class="' +
          T("SjW3R-ZMv3u") +
          '"><input type="text" class="' +
          T("RmniWd-V67aGc-yrriRe") +
          '"><div class="' +
          T("V67aGc-Bz112c") +
          '"></div></div></div>'
      );
    f = '<div class="' + T("yePe5c") + '">';
    d
      ? ((f += du(" Q0hgme-l4eHX ", Xt('<img src="icon_48.png" width="25" height="25" alt="Google Keep logo"/>'))),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["2159130950882492111", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += fu(Xt(c), " IbE0S-h1U9Be ")),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["3623199266894863617", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += fu(Xt(c), " t0O6ic-h1U9Be fmcmS-LgbsSe-v3pZbf ")),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["7819314041543176992", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += fu(Xt(c), " TvD9Pc-h1U9Be fmcmS-LgbsSe-v3pZbf ")))
      : ((f += du("zM6fo") + (c ? du("N7Eqid") : "") + '<div class="' + T("Rsbfue-e1YmVc-sfGayb") + '"><label>'),
        (c = chrome.i18n.getMessage.apply(
          null,
          ["6857703948759289202", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
        )),
        (f = f + c + "&nbsp;</label>"),
        (c = chrome.i18n.getMessage("5775346636203685655")),
        (f += fu(c, "hSRGPd")),
        (f +=
          '</div><div class="' +
          T("PrY1nf-Bz112c") +
          '"></div><label class="' +
          T("Yygnk-EglORb") +
          '"></label>' +
          du("FNFY6c-bEDTcc-Q0hgme") +
          iu(void 0, "purZT")));
    f = Tt(f + "</div>");
    (b = b(e + f + '</div><div class="' + T("ugfBjd-V68bde") + '"></div>')) && b.h && a ? b.h(a) : ((b = sd(b)), td(a, b));
    this.B = a.querySelector(".k77Iif-V68bde");
    Vi(dd(), "n_emv2dm") && (this.gb = a.querySelector(".ugfBjd-V68bde")) && ((b = new Zw()), b.config(this.gb), px(new sx(b)));
    this.hb = a.querySelector(".e1YmVc-haAclf");
    jv(this.Da, a.querySelector(".Rsbfue-e1YmVc"));
    this.ue = a.querySelector(".e1YmVc-HiaYvf");
    this.ve = a.querySelector(".e1YmVc-r4nke");
    this.jb = a.querySelector(".e1YmVc-dZ8yzd");
    this.ya = a.querySelector(".mwcmwf-haAclf");
    b = chrome.i18n.getMessage("2780054062282129350");
    this.l = a.querySelector(".h1U9Be-r4nke");
    this.l.setAttribute("maxlength", "999");
    vh(this.l, "label", b);
    this.l.placeholder = b;
    jv(this.zb, a.querySelector(".HiaYvf-FCjw3e"));
    b = chrome.i18n.getMessage("5061847320181369179");
    this.i = a.querySelector(".h1U9Be-qJTHM");
    this.i.setAttribute("maxlength", "16999");
    vh(this.i, "label", b);
    this.i.placeholder = b;
    jv(this.D, a.querySelector(".SjW3R-ZMv3u"));
    this.j
      ? (jv(this.Ab, a.querySelector(".Q0hgme-l4eHX")),
        jv(this.F, a.querySelector(".t0O6ic-h1U9Be")),
        jv(this.xa, a.querySelector(".IbE0S-h1U9Be")),
        jv(this.R, a.querySelector(".TvD9Pc-h1U9Be")),
        Fv(this.R, !1),
        this.ya && this.A.config(this.ya))
      : ((this.Ia = a.querySelector(".Rsbfue-e1YmVc-sfGayb")),
        jv(this.Ub, this.Ia.querySelector(".Q0hgme-fmcmS-LgbsSe")),
        jv(this.De, a.querySelector(".FNFY6c-bEDTcc-Q0hgme")),
        (this.Tb = a.querySelector(".Yygnk-EglORb")),
        jv(this.Ge, a.querySelector(".zM6fo")),
        this.S && jv(this.S, a.querySelector(".N7Eqid")));
  };
  Lx.prototype.T = function () {
    var a = this;
    Ex.prototype.T.call(this);
    un(
      fv(this).listen(this, "J", function () {
        return Nx(a);
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
    this.S && fv(this).listen(this.S, "action", this.nf);
    Ix(this, !0);
    Ox(this, function () {
      a.j && y("configureContextMenu", a.v);
    });
  };
  Lx.prototype.update = function () {
    if (this.da) {
      this.j || Px(this);
      var a = S(),
        b = a.i;
      a.j && b
        ? (mh(this.ve, b.getTitle()),
          mh(this.jb, b.u || ""),
          Qu.L().La(this.jb, b.Qa()),
          (b = b.l),
          (this.ue.style.backgroundImage = b ? "url('" + b + "')" : ""),
          U(this.hb, !0))
        : U(this.hb, !1);
      if ((b = a.g)) {
        var c = vo(b);
        this.B.style.backgroundColor = this.Je.aa(c);
        c != this.ye && "DEFAULT" != c && y("impression", 9214);
        this.ye = c;
        this.l.value != b.getTitle() && ((this.l.value = b.getTitle()), Qx(this, this.l));
        this.l.value && this.G(!0);
        Fv(this.Da, Rc(b));
        U(this.i, Rc(b));
        c = this.ta;
        var d = Xn(b);
        c.C() && U(c.C(), d);
        Xn(b)
          ? (this.ta.da || (iv(this.ta, this.i), this.l.focus()), this.ta.update(), this.G(!0))
          : (this.i.value != a.l &&
              ((this.i.value = a.l), Qx(this, this.i), this.i.focus(), (this.i.selectionStart = this.i.selectionEnd = this.i.value.length)),
            this.i.value && this.G(!0));
      }
    }
  };
  var Ox = function (a, b) {
      b = void 0 === b ? ng : b;
      var c = a.C();
      c &&
        (Qx(a, a.l),
        Qx(a, a.i),
        a.i.value && a.G(!0),
        c.classList.add("ZiwkRe"),
        jq(function () {
          a.Fe();
          a.i.focus();
          b();
        }, 218));
    },
    Tx = function (a, b) {
      var c = F(a.D.N, a.D);
      b = b ? og(c, b) : c;
      if ((c = a.C()) && c.classList.contains("ZiwkRe")) {
        c.classList.remove("ZiwkRe");
        jq(b, 218);
        if (!a.j) {
          b = S().g;
          if (!b || !Rc(b) || !a.i.value) return;
          b = a.i.value.length;
          c = 2;
          b < Rx[1] ? (c = 0) : b < Rx[2] && (c = 1);
          y("impression", Sx[c]);
        }
        a.Cb = 0;
      } else b();
    };
  Lx.prototype.G = function (a) {
    var b = this,
      c = function () {
        yu(b.ya, "qAWA2", !a);
        a && (Qx(b, b.l), Qx(b, b.i));
        b.Ca.qa();
      };
    this.j
      ? Ux(this, "ping", void 0, function () {
          return c();
        })
      : c();
  };
  var Wx = function (a, b) {
    b
      ? (a.N ||
          ((a.N = ud(pu)),
          (b = new Uw()),
          jv(b, a.N.querySelector(".mKZypf-bEDTcc-LgbsSe")),
          fv(a).listen(b, "action", a.uf),
          a.B && a.B.appendChild(a.N),
          Vx(a, 9212)),
        U(a.N, !0))
      : a.N && U(a.N, !1);
  };
  Lx.prototype.Nd = function () {};
  Lx.prototype.Fe = function () {
    var a = this.C().getBoundingClientRect(),
      b = Math,
      c = b.max,
      d = a.bottom;
    a = parseInt(window.getComputedStyle(this.C()).marginTop, 10) + a.height;
    var e = (e = this.D.v.C()) ? e.getBoundingClientRect().bottom : 0;
    b = c.call(b, d, a, e);
    b != this.Cb && (Ux(this, "appHeightChange", b + 10 + "px"), (this.Cb = b));
  };
  var Qx = function (a, b) {
      b && ((b.style.height = "auto"), (b.style.height = b.scrollHeight + "px"), a.Ca.qa());
    },
    Px = function (a) {
      if (a.da) {
        if (a.fb) {
          var b = S();
          b.B && As(b) ? (uu(a.B, "vOkj6e"), wu(a.B, "PrY1nf"), (b = Xx)) : (wu(a.B, "vOkj6e"), wu(a.B, "PrY1nf"), (b = Yx));
        } else wu(a.B, "vOkj6e"), uu(a.B, "PrY1nf"), (b = Zx);
        a.Tb && mh(a.Tb, b);
      }
    };
  Lx.prototype.kb = function () {
    var a = this,
      b = S().g,
      c = zo(b),
      d = new Ys();
    Zs(d);
    d.setTitle(b.getTitle());
    Ws(d.g, Sc(b));
    b = $x(b);
    this.v = 2;
    ay(this, !1);
    by(this);
    cy(this);
    Kt(this.Va, d, b, c, function (e, f) {
      jq(function () {
        a.v = dy(e);
        switch (a.v) {
          case 3:
          case 5:
            Fj(window, "beforeunload", a.nd);
            break;
          case 6:
            ay(a, !0);
        }
        by(a);
        cy(a, f);
        Vx(a, 9586, ey(a));
      }, 218);
    });
  };
  var $x = function (a) {
      return Go(a).map(function (b) {
        b = Ho(b).l;
        return Nc.test(b) ? ((b = b.match(Nc)), new $s(void 0, b ? b[2] : "")) : new $s(b);
      });
    },
    dy = function (a) {
      if (mq(a)) return 3;
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
    by = function (a) {
      switch (a.v) {
        case 2:
          a.F.setEnabled(!1);
          break;
        case 3:
        case 5:
          Fv(a.F, !1);
          Fv(a.xa, !1);
          Fv(a.R, !0);
          break;
        case 6:
          a.F.setEnabled(!0);
      }
    },
    cy = function (a, b) {
      var c = $w(a.A);
      c
        ? (c.hide(),
          jq(function () {
            fy(a, b);
          }, 218))
        : fy(a, b);
    },
    fy = function (a, b) {
      switch (a.v) {
        case 2:
          a.A.show(gy, 22);
          break;
        case 3:
          bx(
            a.A,
            hy,
            iy,
            function () {
              b && Nx(a, b);
            },
            7
          );
          break;
        case 5:
          bx(
            a.A,
            jy,
            ky,
            function () {
              var c = S().g;
              c = c.getTitle() + "\n" + Sc(c);
              navigator.clipboard.writeText(c);
            },
            6
          );
          break;
        case 4:
          a.A.show(ly, 6);
          break;
        case 6:
          bx(a.A, my, ny, function () {
            $w(a.A).hide();
            jq(function () {
              return a.kb();
            }, 218);
          });
      }
    },
    ay = function (a, b) {
      if ((a.fb && !a.Ba) || !b)
        b
          ? (a.l.removeAttribute("readonly"), a.i.removeAttribute("readonly"))
          : (a.l.setAttribute("readonly", !0), a.i.setAttribute("readonly", !0)),
          Fv(a.Da, b),
          Rw(a.D, b),
          aw(a.zb, b),
          Ux(a, "configureContextMenu", a.v);
    },
    qy = function (a) {
      a.Ba ||
        ((a.Ba = !0),
        2 !== a.v &&
          3 !== a.v &&
          (ay(a, !1),
          Fv(a.F, !1),
          Fv(a.xa, !1),
          Fv(a.R, !0),
          bx(
            a.A,
            oy,
            py,
            function () {
              $w(a.A).hide();
              jq(function () {
                return a.kb();
              }, 218);
            },
            6
          )));
    };
  k = Lx.prototype;
  k.ie = function () {
    var a = this;
    Fj(window, "beforeunload", this.nd);
    Tx(this, function () {
      Ux(a, "configureContextMenu", void 0, function () {
        Ux(a, "removeIframe");
      });
    });
    Vx(this, 9585, ey(this));
    ds(this.te);
  };
  k.pc = function () {
    wu(this.Ia, "ZiwkRe");
    this.yb.stop();
  };
  k.tf = function () {
    zs(!1);
    Vx(this, 9154);
    this.j || uu(this.Ia, "ZiwkRe");
    Ux(this, "speakMessage", ry);
    this.l.focus();
    this.j || this.yb.start();
  };
  k.wf = function () {
    zs(!0);
    y("impression", 9174);
    this.l.focus();
    this.pc();
  };
  k.vf = function () {
    this.j || this.pc();
    var a = S().g;
    a && (!a.getTitle() && this.l.value && Vx(this, 9200), a.setTitle(this.l.value));
    Qx(this, this.l);
  };
  k.rf = function () {
    this.j || this.pc();
    this.G(!0);
    var a = S();
    a.l = this.i.value;
    ls(a);
    Qx(this, this.i);
  };
  var Nx = function (a, b) {
    var c = S().g;
    if ((c = b || c.g)) {
      b = window;
      c = { note: c };
      var d = xg.exec(wg(Yo)),
        e = d[3] || "";
      c = zg(d[1] + Ag("?", d[2] || "", c) + Ag("#", e));
      Fd(b, Fc(c.toString()));
      Vx(a, 9202);
    }
  };
  k = Lx.prototype;
  k.sf = function () {
    Fd(window, Fc(Yo.toString()));
  };
  k.nf = function () {
    Fd(window, Xo);
    y("impression", 9193);
  };
  k.lf = function (a) {
    0 == a.button &&
      (this.j && Ux(this, "ping"),
      this.G(!0),
      lh(this.D.C(), a.target) &&
        jq(
          function () {
            var b = this.D;
            b.i && b.i.focus();
          },
          0,
          this
        ));
  };
  k.Xe = function (a) {
    if (27 == a.keyCode || (13 == a.keyCode && (Oe ? a.metaKey : a.ctrlKey)))
      this.j ? (a = th(this.h.g)) && a.blur() : (this.dispatchEvent("H"), a.stopPropagation(), a.g());
    else if (9 == a.keyCode && a.shiftKey && a.target == this.C()) {
      this.fd = !0;
      try {
        this.Fa.focus();
      } catch (b) {}
      jq(this.xe, 0, this);
    } else this.j && Ux(this, "ping");
  };
  k.uf = function () {
    this.j ? Dh(this.uc) : y("authRequest");
  };
  k.nd = function (a) {
    if (S().g.i) return a.g(), (a.h.returnValue = "");
  };
  var Vx = function (a, b, c) {
      if (a.j) {
        var d = function (e) {
          e = np(e);
          C(e, 58, c);
        };
        a.te.log(b, c && d);
      } else y("impression", b);
    },
    ey = function (a) {
      var b = new ej();
      return $c(b, 3, sy[a.v]);
    },
    Ux = function (a, b, c, d) {
      if (!a.j) y(b, c, d);
      else if (!a.Ba)
        try {
          y(b, c, d);
        } catch (e) {
          qy(a);
        }
    },
    Kx = chrome.i18n.getMessage("9167784195765779453"),
    iy = chrome.i18n.getMessage("7687507512675715498"),
    ny = chrome.i18n.getMessage("1943542607990075955"),
    ky = chrome.i18n.getMessage("2259263507947555096"),
    oy = chrome.i18n.getMessage("1796799676667865488"),
    py = chrome.i18n.getMessage("223492684871721243"),
    ly = chrome.i18n.getMessage("4035272937326361881"),
    ty = chrome.i18n.getMessage("4962916837925056840"),
    hy = chrome.i18n.getMessage("6717438461651235082"),
    my = chrome.i18n.getMessage("2336058986978607910"),
    jy = chrome.i18n.getMessage("4184329490330819477"),
    gy = chrome.i18n.getMessage("3708201433602754428"),
    ry = chrome.i18n.getMessage("2269286357657606271"),
    Xx = chrome.i18n.getMessage("4409688924773693376"),
    Yx = chrome.i18n.getMessage("9116610943383363940"),
    Zx = chrome.i18n.getMessage("5782779707150593352"),
    Rx = [0, 100, 600],
    Sx = [9206, 9207, 9208],
    uy = {},
    sy = ((uy[0] = 0), (uy[1] = 1), (uy[2] = 1), (uy[3] = 3), (uy[4] = 4), (uy[5] = 2), (uy[6] = 2), uy);
  var fs = "s--" + new Date().getTime() + "--" + Math.round(2147483648 * Math.random()),
    wy = function () {
      M.call(this);
      var a = this;
      if ((this.i = Vi(dd(), "n_ecmv3m")))
        (this.j = new Bh(function (c) {
          var d = a.g;
          Wx(d, !c);
          ay(d, c);
          c && !d.Bb && Mx(d);
          y("authAvailability", c);
        })),
          (this.o = zh(cs)),
          Ch(this.j, !1, function () {
            es(
              a.o,
              hs(function () {
                return a.j.g;
              })
            );
          });
      this.g = new Lx(this.j);
      N(this, this.g);
      this.i || ((this.A = new Cs()), N(this, this.A));
      this.h = S();
      this.s = new kq(this.B, 3e5, this);
      var b = new rn(this);
      N(this, b);
      b.listen(this.g, "L", this.v).listen(this.h, "H", this.l).listen(this.g, "H", this.l);
      this.i &&
        b.listen(op.L(), "change", function (c) {
          return vy(a, c.qc);
        });
    };
  E(wy, M);
  var yy = function () {
      var a = xy;
      jv(a.g, document.querySelector("#keep-it-container"));
      a.i
        ? (y("appLoaded", void 0, function (b) {
            ps(a.h, b);
          }),
          op.L().qc() || vy(a, !1),
          a.o.log(9175))
        : y("appLoaded");
    },
    vy = function (a, b) {
      var c = a.g;
      c.fb = b;
      if (c.j) {
        if (3 !== c.v && !c.Ba) {
          !c.Bb && b && Mx(c);
          ay(c, b);
          c.F.setEnabled(b);
          var d = $w(c.A);
          b ? d && d.hide() : d || c.A.show(ty, 6);
        }
      } else Px(c);
      a.h.R = b;
    };
  wy.prototype.l = function () {
    Tx(this.g, F(this.u, this));
    this.s.start();
  };
  wy.prototype.u = function () {
    y("finishHide");
    ys(this.h, !0);
    this.g.G(!1);
  };
  wy.prototype.B = function () {
    y("appSelfClose");
  };
  wy.prototype.v = function () {
    ys(this.h);
    y("impression", 9012);
    this.l();
  };
  var xy = new wy(),
    zy = function () {
      Vi(dd(), "n_dlis") ||
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
      yy();
    },
    Ay = ["initNotesBrowserAction"],
    By = n;
  Ay[0] in By || "undefined" == typeof By.execScript || By.execScript("var " + Ay[0]);
  for (var Cy; Ay.length && (Cy = Ay.shift()); )
    Ay.length || void 0 === zy ? (By[Cy] && By[Cy] !== Object.prototype[Cy] ? (By = By[Cy]) : (By = By[Cy] = {})) : (By[Cy] = zy);
  chrome.runtime.onMessage.addListener(function (a, b, c) {
    b = xy;
    if (vd(a))
      switch (a.type) {
        case "authAvailability":
          Wx(b.g, !a.value);
          b = b.h;
          a = !!a.value;
          b.B != a && ((b.B = a), b.u.qa());
          break;
        case "connectivity":
          vy(b, !!a.value);
          break;
        case "getPopupState":
          c && c(b.g.v);
          break;
        case "ping":
          c && c(a.type);
          break;
        case "updateAuthToken":
          Ch(b.j);
          break;
        case "startHide":
          b.l();
          break;
        case "show":
          b.h.reset();
          Ox(b.g);
          b.s.stop();
          break;
        case "syncResponse":
          b.i || ((a = a.value), ts(S(), a.nodes || void 0, a.userInfo || void 0));
          break;
        case "updateModel":
          ps(b.h, a.value);
          break;
        case "uploadMediaResponse":
          a = a.value;
          (b = (c = a.blobId) ? b.h.g.s[c] || null : null) &&
            Jo(b) &&
            ((c = Jo(b)), a.mediaJson ? (c.update(a.mediaJson), Hm(c, "luc")) : a.mediaError && Hm(c, "luf"), Wn(b));
          break;
        case "urlChange":
          (b = b.h), b.i && Ih(b.i, a.value);
      }
  });
} catch (e) {
  _DumpException(e);
}
// Google Inc.
