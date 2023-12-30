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
      return !(!a || "object" !== typeof a || a.kk !== bb);
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
      if (null != a && "object" === typeof a && a.cd === rb) return a;
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
      return a.cd === rb ? a.toJSON() : vb(a);
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
        a.cd === rb && ((c = a.I), (d = Fb(c)), (a = d & 2 ? a : ub(a.constructor, Gb(c, d, !0))));
        return a;
      }
    },
    Gb = function (a, b, c) {
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
        c = Fb(b);
      return c & 2 ? ub(a.constructor, Gb(b, c, !1)) : a;
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
        f = Fb(e);
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
        e = Fb(c ? a.I : b),
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
        h = Fb(a.I);
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
        Hf: function () {
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
    ac = function (a) {
      var b = $b,
        c = {},
        d;
      for (d in b) c[d] = a.call(void 0, b[d], d, b);
      return c;
    },
    bc = function (a, b) {
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
          if (d instanceof zc && d.Qb(a)) {
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
      return vd(a) ? (a.Ae && ((a = a.Ae()), a instanceof xd) ? a : wd("zSoyz")) : wd(String(a));
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
      return { cg: b, Gf: c };
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
      g.hc(h.resolve, h.reject);
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
      this.hc(l(g, m), l(h, p));
      return u;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.hc = function (g, h) {
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
        for (var m = t(g), p = m.next(); !p.done; p = m.next()) c(p.value).hc(h, l);
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
            do w.push(void 0), r++, c(l.value).hc(u(w.length - 1), p), (l = h.next());
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
      a.ik = function (d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    fe = function (a) {
      return a;
    };
  var ge = { nd: 0, Vg: 1 };
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
    Ke = q("Gecko") && !(-1 != ca().toLowerCase().indexOf("webkit") && !q("Edge")) && !(q("Trident") || q("MSIE")) && !q("Edge"),
    Le = -1 != ca().toLowerCase().indexOf("webkit") && !q("Edge"),
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
        if (Ke) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ie) return /Edge\/([\d\.]+)/.exec(a);
        if (H) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Le) return /WebKit\/(\S+)/.exec(a);
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
    mf = Ke || Le || (!jf && !H && "function" == typeof n.atob),
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
    Fb = pf
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
      return sf(a, Fb(a), b);
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
        e = Fb(d);
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
      var e = Fb(a),
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
      var e = Fb(a);
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
        e = Fb(d);
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
    return ub(this.constructor, Gb(a, Fb(a), !1));
  };
  J.prototype.cd = rb;
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
    mg: "n_amt",
    og: "n_afoiu",
    rg: "n_age",
    sg: "n_k",
    tg: "n_ars",
    ug: "n_s",
    vg: "n_ss",
    wg: "n_ats",
    xg: "n_atas",
    zg: "n_bi",
    Ag: "n_bl",
    Dg: "n_cajct",
    Eg: "n_cajstm",
    Ig: "n_ccd",
    Jg: "n_cc",
    Kg: "n_c",
    Lg: "n_cp",
    Mg: "n_csbs",
    Xg: "n_dt",
    ah: "n_dlis",
    bh: "n_deau",
    dh: "n_detl",
    fh: "n_eau",
    gh: "n_ecs",
    hh: "n_ecmv3m",
    ih: "n_ecil",
    jh: "n_ecpde",
    kh: "n_edmp",
    lh: "n_edtt",
    mh: "n_edlh",
    nh: "n_efab",
    oh: "n_eh",
    ph: "n_eil",
    qh: "n_eliw",
    rh: "n_eml",
    sh: "n_emv2dm",
    th: "n_eod",
    uh: "n_eoros",
    vh: "n_ep",
    wh: "n_eqwv",
    zh: "n_ei",
    Bh: "n_fpae",
    Ih: "n_hak",
    Ph: "n_imb",
    Qh: "n_imp",
    Uh: "n_iup",
    Th: "n_iltrup",
    Vh: "n_j",
    Xh: "n_kud",
    ei: "n_lcu",
    ji: "n_mpak",
    ki: "n_mpau",
    yi: "n_nmri",
    wi: "n_nib",
    xi: "n_nmb",
    Ai: "n_npd",
    Bi: "n_npv",
    Di: "n_oe",
    Ni: "n_pau",
    Xi: "n_rs",
    Yi: "n_rau",
    Zi: "n_ses",
    hj: "n_scp",
    nj: "n_sit",
    pj: "n_t",
    tj: "n_ton",
    qj: "n_tak",
    sj: "n_tipe",
    rj: "n_tbti",
    uj: "n_taau",
    zj: "n_tcu",
    Aj: "n_tcur",
    Ij: "n_tms",
    Hj: "n_the",
    Nj: "n_ur",
    Oj: "n_uptc",
    Rh: "n_ugat",
    Sj: "n_uo",
    Rj: "n_ui",
    Pj: "n_ue",
    Qj: "n_ugs",
    Xj: "n_wfp",
    Zj: "n_wcv"
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
      return b.Hf().toLowerCase();
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
  tg.prototype.Pb = !0;
  tg.prototype.Nb = function () {
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
  vg.prototype.Pb = !0;
  vg.prototype.Nb = function () {
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
  Cc.prototype.Pb = !0;
  Cc.prototype.Nb = function () {
    return this.g.toString();
  };
  var Dc = {},
    Ec = new Cc("about:invalid#zClosurez", Dc);
  var Bg = {},
    xd = function (a) {
      this.g = a;
      this.Pb = !0;
    };
  xd.prototype.Nb = function () {
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
        ((a = "object" == typeof a && a.Pb ? a.Nb() : String(a)),
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
        c && "object" == typeof c && c.Pb && (c = c.Nb());
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
      return a.scrollingElement ? a.scrollingElement : !Le && ah(a) ? a.documentElement : a.body || a.documentElement;
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
  k.rb = function (a, b, c) {
    return gh(this.g, arguments);
  };
  k.Ve = function (a, b) {
    ih(Xg(a), a, arguments, 1);
  };
  k.We = jh;
  k.sd = kh;
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
    x(this.h, this.g.sd, this.g);
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
  var Mh = {
      pd: ["BC", "AD"],
      od: ["Before Christ", "Anno Domini"],
      Ed: "JFMAMJJASOND".split(""),
      Ld: "JFMAMJJASOND".split(""),
      Cd: "January February March April May June July August September October November December".split(" "),
      Kd: "January February March April May June July August September October November December".split(" "),
      Gd: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      Nd: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      Sd: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      Pd: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      Id: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
      Od: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
      nf: "SMTWTFS".split(""),
      Md: "SMTWTFS".split(""),
      Hd: ["Q1", "Q2", "Q3", "Q4"],
      Fd: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
      ld: ["AM", "PM"],
      Fb: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
      Mc: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
      md: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
      Wb: 6,
      xf: [5, 6],
      Xb: 5
    },
    O = Mh;
  O = Mh;
  var Nh = function (a, b, c, d, e) {
      a = new Date(a, b, c);
      e = e || 0;
      return a.valueOf() + 864e5 * ((((void 0 !== d ? d : 3) - e + 7) % 7) - ((((a.getDay() + 6) % 7) - e + 7) % 7));
    },
    Qh = function (a, b, c) {
      "number" === typeof a
        ? ((this.g = Oh(a, b || 0, c || 1)), Ph(this, c || 1))
        : vd(a)
        ? ((this.g = Oh(a.getFullYear(), a.getMonth(), a.getDate())), Ph(this, a.getDate()))
        : ((this.g = new Date(Date.now())),
          (a = this.g.getDate()),
          this.g.setHours(0),
          this.g.setMinutes(0),
          this.g.setSeconds(0),
          this.g.setMilliseconds(0),
          Ph(this, a));
    },
    Oh = function (a, b, c) {
      b = new Date(a, b, c);
      0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
      return b;
    };
  k = Qh.prototype;
  k.ic = O.Wb;
  k.jc = O.Xb;
  k.clone = function () {
    var a = new Qh(this.g);
    a.ic = this.ic;
    a.jc = this.jc;
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
      Ph(this, a.getDate()));
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
  var Ph = function (a, b) {
    a.getDate() != b && a.g.setUTCHours(a.g.getUTCHours() + (a.getDate() < b ? 1 : -1));
  };
  Qh.prototype.valueOf = function () {
    return this.g.valueOf();
  };
  var Uh = function (a, b, c, d, e, f, g) {
    this.g =
      "number" === typeof a
        ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0)
        : new Date(a && a.getTime ? a.getTime() : Date.now());
  };
  G(Uh, Qh);
  k = Uh.prototype;
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
    Qh.prototype.add.call(this, a);
    a.h && this.g.setUTCHours(this.g.getUTCHours() + a.h);
    a.i && this.g.setUTCMinutes(this.g.getUTCMinutes() + a.i);
    a.l && this.g.setUTCSeconds(this.g.getUTCSeconds() + a.l);
  };
  k.Yb = function (a) {
    var b = Qh.prototype.Yb.call(this, a);
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
    var a = new Uh(this.g);
    a.ic = this.ic;
    a.jc = this.jc;
    return a;
  };
  var Vh = function (a, b) {
    null != a && this.la.apply(this, arguments);
  };
  k = Vh.prototype;
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
  var Wh = function () {},
    Xh = function (a, b) {
      if (!b) return null;
      a = new Uh(2e3);
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
  Wh.prototype.format = function (a) {
    var b = new Vh();
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
  Wh.L = function () {
    return zh(Wh);
  };
  var Yh = function (a) {
    a = a || {};
    this.j = this.s = Xh(Wh.L(), a.created) || null;
    this.h = this.i = this.l = this.o = this.g = null;
    this.update(a);
  };
  Yh.prototype.getCreationTime = function () {
    return this.s ? this.s : new Uh();
  };
  var Zh = function (a) {
      return a.j ? a.j : new Uh();
    },
    $h = function (a, b) {
      a.j = b;
      null == a.s && (a.s = b);
    };
  Yh.prototype.update = function (a) {
    Wh.L();
    var b = !1,
      c;
    for (c in a) {
      var d = Xh(0, a[c]);
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
  var ai = function (a) {
    var b = {},
      c = Wh.L();
    b.kind = "notes#timestamps";
    b.created = c.format(a.getCreationTime());
    b.deleted = a.g ? c.format(a.g) : "1970-01-01T00:00:00.000Z";
    b.trashed = a.i ? c.format(a.i) : "1970-01-01T00:00:00.000Z";
    b.updated = c.format(Zh(a));
    b.userEdited = a.h ? c.format(a.h) : "1970-01-01T00:00:00.000Z";
    a.o && (b.shareRequestProcessed = c.format(a.o));
    a.l && (b.recentSharedChangesSeen = c.format(a.l));
    return b;
  };
  var bi = function (a) {
    this.g = null;
    a && this.update(a);
  };
  bi.prototype.update = function (a) {
    this.g = a.category;
  };
  var ci = chrome.i18n.getMessage("456512308416555173"),
    di = chrome.i18n.getMessage("6366376928558090914"),
    ei = chrome.i18n.getMessage("4840513623749850224"),
    fi = chrome.i18n.getMessage("6497197865876438261"),
    gi = chrome.i18n.getMessage("8602525917014156029"),
    hi = chrome.i18n.getMessage("4533605085334699862"),
    ii = chrome.i18n.getMessage("3385831848537487538"),
    ji = chrome.i18n.getMessage("5403636185480096151"),
    ki = { BOOKS: ci, FOOD: di, MOVIES: ei, MUSIC: fi, PLACES: gi, QUOTES: hi, TRAVEL: ii, TV: ji };
  var li = function (a) {
    this.g = this.i = this.h = this.j = this.l = null;
    a && this.update(a);
  };
  li.prototype.update = function (a) {
    this.l = a.deleted;
    this.o = a.id;
    mi(a.context)
      ? ((a = a.context), this.j ? this.j.update(a) : (this.j = new Jh(a)), (this.g = this.i = this.h = null))
      : mi(a.taskAssist)
      ? ((a = a.taskAssist), this.h ? this.h.update(a) : (this.h = new Kh(a)), (this.g = this.i = this.j = null))
      : mi(a.topicCategory)
      ? ((a = a.topicCategory), this.i ? this.i.update(a) : (this.i = new bi(a)), (this.g = this.h = this.j = null))
      : mi(a.webLink) && ((a = a.webLink), this.g ? this.g.update(a) : (this.g = new Hh(a)), (this.i = this.h = this.j = null));
  };
  li.prototype.ha = function () {
    return !this.j && !this.h && !this.i && !this.g;
  };
  var ni = function (a) {
      return (!!a.l && "1970-01-01T00:00:00.000Z" != a.l) || !1;
    },
    mi = function (a) {
      return vd(a) && !jc(a);
    };
  var oi = function (a) {
      return a.W && "function" == typeof a.W ? a.W() : Aa(a) || "string" === typeof a ? a.length : ec(a);
    },
    pi = function (a) {
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
    qi = function (a) {
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
    ri = function (a, b) {
      if ("function" == typeof a.every) return a.every(b, void 0);
      if (Aa(a) || "string" === typeof a) return Array.prototype.every.call(a, b, void 0);
      for (var c = qi(a), d = pi(a), e = d.length, f = 0; f < e; f++) if (!b.call(void 0, d[f], c && c[f], a)) return !1;
      return !0;
    };
  var si = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    ti = function (a, b) {
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
    ui = function (a, b) {
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
    vi = function (a, b, c) {
      if (Array.isArray(b)) for (var d = 0; d < b.length; d++) vi(a, String(b[d]), c);
      else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
    },
    wi = function (a, b) {
      var c = [];
      for (b = b || 0; b < a.length; b += 2) vi(a[b], a[b + 1], c);
      return c.join("&");
    },
    xi = function (a, b) {
      var c = 2 == arguments.length ? wi(arguments[1], 0) : wi(arguments, 1);
      return ui(a, c);
    },
    yi = function (a, b, c) {
      c = null != c ? "=" + encodeURIComponent(String(c)) : "";
      return ui(a, b + c);
    },
    zi = function (a, b, c) {
      for (; 0 <= (b = a.indexOf("format", b)) && b < c; ) {
        var d = a.charCodeAt(b - 1);
        if (38 == d || 63 == d) if (((d = a.charCodeAt(b + 6)), !d || 61 == d || 38 == d || 35 == d)) return b;
        b += 7;
      }
      return -1;
    },
    Ai = /#|$/,
    Bi = /[?&]($|#)/;
  var Ci = function (a) {
    this.h = this.j = this.o = "";
    this.u = null;
    this.l = this.g = "";
    this.s = !1;
    var b;
    a instanceof Ci
      ? ((this.s = a.s),
        Lc(this, a.o),
        (this.j = a.j),
        (this.h = a.h),
        Di(this, a.u),
        (this.g = a.g),
        Mc(this, a.i.clone()),
        (this.l = a.l))
      : a && (b = String(a).match(si))
      ? ((this.s = !1),
        Lc(this, b[1] || "", !0),
        (this.j = Ei(b[2] || "")),
        (this.h = Ei(b[3] || "", !0)),
        Di(this, b[4]),
        (this.g = Ei(b[5] || "", !0)),
        Mc(this, b[6] || "", !0),
        (this.l = Ei(b[7] || "")))
      : ((this.s = !1), (this.i = new Fi(null, this.s)));
  };
  Ci.prototype.toString = function () {
    var a = [],
      b = this.o;
    b && a.push(Gi(b, Hi, !0), ":");
    var c = this.h;
    if (c || "file" == b)
      a.push("//"),
        (b = this.j) && a.push(Gi(b, Hi, !0), "@"),
        a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        (c = this.u),
        null != c && a.push(":", String(c));
    if ((c = this.g)) this.h && "/" != c.charAt(0) && a.push("/"), a.push(Gi(c, "/" == c.charAt(0) ? Ii : Ji, !0));
    (c = this.i.toString()) && a.push("?", c);
    (c = this.l) && a.push("#", Gi(c, Ki));
    return a.join("");
  };
  Ci.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.o;
    c ? Lc(b, a.o) : (c = !!a.j);
    c ? (b.j = a.j) : (c = !!a.h);
    c ? (b.h = a.h) : (c = null != a.u);
    var d = a.g;
    if (c) Di(b, a.u);
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
  Ci.prototype.clone = function () {
    return new Ci(this);
  };
  var Lc = function (a, b, c) {
      a.o = c ? Ei(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ""));
    },
    Di = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("F`" + b);
        a.u = b;
      } else a.u = null;
    },
    Mc = function (a, b, c) {
      b instanceof Fi ? ((a.i = b), Li(a.i, a.s)) : (c || (b = Gi(b, Mi)), (a.i = new Fi(b, a.s)));
    },
    Oi = function () {
      var a = Ni,
        b = Ig();
      a.i.set("zx", b);
      return a;
    },
    Kc = function (a) {
      return a instanceof Ci ? a.clone() : new Ci(a);
    },
    Ei = function (a, b) {
      return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
    },
    Gi = function (a, b, c) {
      return "string" === typeof a ? ((a = encodeURI(a).replace(b, Pi)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
    Pi = function (a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    Hi = /[#\/\?@]/g,
    Ji = /[#\?:]/g,
    Ii = /[#\?]/g,
    Mi = /[#\?@]/g,
    Ki = /#/g,
    Fi = function (a, b) {
      this.h = this.g = null;
      this.i = a || null;
      this.j = !!b;
    },
    Qi = function (a) {
      a.g ||
        ((a.g = new Map()),
        (a.h = 0),
        a.i &&
          ti(a.i, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
    };
  k = Fi.prototype;
  k.W = function () {
    Qi(this);
    return this.h;
  };
  k.add = function (a, b) {
    Qi(this);
    this.i = null;
    a = Ri(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, (c = []));
    c.push(b);
    this.h += 1;
    return this;
  };
  k.remove = function (a) {
    Qi(this);
    a = Ri(this, a);
    return this.g.has(a) ? ((this.i = null), (this.h -= this.g.get(a).length), this.g.delete(a)) : !1;
  };
  k.clear = function () {
    this.g = this.i = null;
    this.h = 0;
  };
  k.ha = function () {
    Qi(this);
    return 0 == this.h;
  };
  var Si = function (a, b) {
    Qi(a);
    b = Ri(a, b);
    return a.g.has(b);
  };
  k = Fi.prototype;
  k.Xa = function (a) {
    var b = this.ja();
    return ta(b, a);
  };
  k.forEach = function (a, b) {
    Qi(this);
    this.g.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  k.Ea = function () {
    Qi(this);
    for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  k.ja = function (a) {
    Qi(this);
    var b = [];
    if ("string" === typeof a) Si(this, a) && (b = b.concat(this.g.get(Ri(this, a))));
    else {
      a = Array.from(this.g.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  k.set = function (a, b) {
    Qi(this);
    this.i = null;
    a = Ri(this, a);
    Si(this, a) && (this.h -= this.g.get(a).length);
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
    var a = new Fi();
    a.i = this.i;
    this.g && ((a.g = new Map(this.g)), (a.h = this.h));
    return a;
  };
  var Ri = function (a, b) {
      b = String(b);
      a.j && (b = b.toLowerCase());
      return b;
    },
    Li = function (a, b) {
      b &&
        !a.j &&
        (Qi(a),
        (a.i = null),
        a.g.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e &&
            (this.remove(d), this.remove(e), 0 < c.length && ((this.i = null), this.g.set(Ri(this, e), za(c)), (this.h += c.length)));
        }, a));
      a.j = b;
    };
  var Vi = function () {
      this.g = {};
      Ti(this, n._notes_flag_initialData || {});
      this.g.n_afoiu && Ui(this);
    },
    Ti = function (a, b) {
      x(ig, function (c) {
        void 0 !== b[c] && (a.g[c] = b[c]);
      });
    },
    Ui = function (a) {
      var b = {};
      new Ci(self.location.href).i.forEach(function (c, d) {
        b[d] = c;
      });
      Ti(a, b);
    },
    Wi = function (a, b) {
      a = a.g[b];
      return !!a && "false" !== a;
    },
    Xi = function (a) {
      var b = dd();
      return String(b.g[a] || "");
    },
    Yi = function (a) {
      a = dd().g[a];
      return isNaN(a) ? 0 : Number(a);
    },
    Zi = function (a) {
      a = a.g.n_sit;
      return Array.isArray(a) ? a : "string" === typeof a ? a.split(",") : [];
    },
    $i = function () {
      var a = dd();
      return Zi(a).filter(function (b) {
        return Wi(a, "n_eau") || 0 != b.lastIndexOf("audio/", 0);
      });
    },
    dd = function () {
      return zh(Vi);
    };
  var aj = function () {
    this.g = {};
    this.h = null;
    this.l = {};
    this.i = {};
    this.j = {};
  };
  aj.prototype.update = function (a) {
    var b = !1,
      c = mc(this.g);
    Bd(
      a.annotations || [],
      function (d) {
        var e = d.id,
          f = this.g[e];
        kc(c, e);
        f ? ((e = ni(f)), f.update(d), (b = b || e != ni(f))) : ((f = new li(d)), f.ha() || ((b = !0), (this.g[e] = f)));
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
          ni(d) || (d.j ? (this.h = d) : d.h ? (this.j[e] = d) : d.i ? (this.i[e] = d) : d.g && (this.l[e] = d));
        },
        this
      ));
    return b;
  };
  var bj = function (a) {
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
  aj.prototype.remove = function (a) {
    a = a.o || "";
    if (!this.g[a]) return !1;
    var b = Wh.L(),
      c = !!this.g[a];
    b = b.format(new Uh());
    this.g[a].l = b;
    kc(this.l, a);
    kc(this.i, a);
    kc(this.j, a);
    this.h && (this.h.o || "") == a && (this.h = null);
    return c;
  };
  var cj = function (a) {
      return !a.h || ni(a.h) ? null : a.h;
    },
    Hc = function (a) {
      return Zb(a.l, function (b) {
        return !ni(b);
      });
    },
    dj = function (a) {
      return Zb(a.i, function (b) {
        return !ni(b);
      });
    },
    ej = function (a) {
      return Zb(a.j, function (b) {
        return !ni(b);
      });
    };
  var fj = function (a) {
    this.I = v(a);
  };
  E(fj, J);
  var gj = function (a) {
    this.I = v(a);
  };
  E(gj, J);
  var hj = function (a) {
    this.g = a.name || "default";
    this.h = a.origin || "none";
  };
  hj.prototype.ka = function () {
    return this.g;
  };
  hj.prototype.update = function (a) {
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
  var ij = function (a) {
    var b = {};
    return (b.name = a.ka()), (b.origin = a.h), b;
  };
  Object.values({
    UNKNOWN: "unknown",
    nd: "default",
    Hh: "groceries",
    Dh: "food",
    vi: "music",
    Wi: "recipes",
    zi: "notes",
    Qi: "places",
    Jj: "travel",
    VIDEO: "video",
    Fg: "celebration"
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
  var jj = function (a, b) {
    this.type = a;
    this.i = this.target = b;
    this.defaultPrevented = this.j = !1;
  };
  jj.prototype.stopPropagation = function () {
    this.j = !0;
  };
  jj.prototype.g = function () {
    this.defaultPrevented = !0;
  };
  var kj = (function () {
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
  var mj = function (a, b) {
    jj.call(this, a ? a.type : "");
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
        ? Ke && (Ge(b, "nodeName") || (b = null))
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
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : lj[a.pointerType] || "";
      this.state = a.state;
      this.h = a;
      a.defaultPrevented && mj.O.g.call(this);
    }
  };
  G(mj, jj);
  var lj = { 2: "touch", 3: "pen", 4: "mouse" };
  mj.prototype.stopPropagation = function () {
    mj.O.stopPropagation.call(this);
    this.h.stopPropagation ? this.h.stopPropagation() : (this.h.cancelBubble = !0);
  };
  mj.prototype.g = function () {
    mj.O.g.call(this);
    var a = this.h;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var nj = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    oj = function (a) {
      return !(!a || !a[nj]);
    };
  var pj = 0;
  var qj = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.nc = e;
      this.key = ++pj;
      this.removed = this.fc = !1;
    },
    rj = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.nc = null;
    };
  var sj = function (a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  };
  sj.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var g = tj(a, b, d, e);
    -1 < g ? ((b = a[g]), c || (b.fc = !1)) : ((b = new qj(b, this.src, f, !!d, e)), (b.fc = c), a.push(b));
    return b;
  };
  sj.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = tj(e, b, c, d);
    return -1 < b ? (rj(e[b]), va(e, b), 0 == e.length && (delete this.g[a], this.h--), !0) : !1;
  };
  var uj = function (a, b) {
    var c = b.type;
    c in a.g && wa(a.g[c], b) && (rj(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
  };
  sj.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.g)
      if (!a || c == a) {
        for (var d = this.g[c], e = 0; e < d.length; e++) ++b, rj(d[e]);
        delete this.g[c];
        this.h--;
      }
    return b;
  };
  sj.prototype.Mb = function (a, b, c, d) {
    a = this.g[a.toString()];
    var e = -1;
    a && (e = tj(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  sj.prototype.hasListener = function (a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : "",
      e = void 0 !== b;
    return bc(this.g, function (f) {
      for (var g = 0; g < f.length; ++g) if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
      return !1;
    });
  };
  var tj = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.listener == b && f.capture == !!c && f.nc == d) return e;
    }
    return -1;
  };
  var vj = "closure_lm_" + ((1e6 * Math.random()) | 0),
    wj = {},
    xj = 0,
    zj = function (a, b, c, d, e) {
      if (d && d.once) return yj(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) zj(a, b[f], c, d, e);
        return null;
      }
      c = Aj(c);
      return oj(a) ? a.listen(b, c, vd(d) ? !!d.capture : !!d, e) : Bj(a, b, c, !1, d, e);
    },
    Bj = function (a, b, c, d, e, f) {
      if (!b) throw Error("H");
      var g = vd(e) ? !!e.capture : !!e,
        h = Cj(a);
      h || (a[vj] = h = new sj(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = Dj();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) kj || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Ej(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("I");
      xj++;
      return c;
    },
    Dj = function () {
      var a = Fj,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    yj = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) yj(a, b[f], c, d, e);
        return null;
      }
      c = Aj(c);
      return oj(a) ? a.bd(b, c, vd(d) ? !!d.capture : !!d, e) : Bj(a, b, c, !0, d, e);
    },
    Gj = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Gj(a, b[f], c, d, e);
      else (d = vd(d) ? !!d.capture : !!d), (c = Aj(c)), oj(a) ? a.X(b, c, d, e) : a && (a = Cj(a)) && (b = a.Mb(b, c, d, e)) && Hj(b);
    },
    Hj = function (a) {
      if ("number" !== typeof a && a && !a.removed) {
        var b = a.src;
        if (oj(b)) uj(b.Ja, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(Ej(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          xj--;
          (c = Cj(b)) ? (uj(c, a), 0 == c.h && ((c.src = null), (b[vj] = null))) : rj(a);
        }
      }
    },
    Ej = function (a) {
      return a in wj ? wj[a] : (wj[a] = "on" + a);
    },
    Fj = function (a, b) {
      if (a.removed) a = !0;
      else {
        b = new mj(b, this);
        var c = a.listener,
          d = a.nc || a.src;
        a.fc && Hj(a);
        a = c.call(d, b);
      }
      return a;
    },
    Cj = function (a) {
      a = a[vj];
      return a instanceof sj ? a : null;
    },
    Ij = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    Aj = function (a) {
      if ("function" === typeof a) return a;
      a[Ij] ||
        (a[Ij] = function (b) {
          return a.handleEvent(b);
        });
      return a[Ij];
    };
  var Jj = function (a, b) {
    this.g = a;
    this.s = b.name;
    this.o = !!b.fd;
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
  Jj.prototype.ka = function () {
    return this.s;
  };
  var Kj = function (a) {
    return 11 == a.h || 10 == a.h;
  };
  var Lj = function (a, b, c) {
    this.dd = a;
    this.h = b.name || null;
    this.g = {};
    for (a = 0; a < c.length; a++) (b = c[a]), (this.g[b.g] = b);
  };
  Lj.prototype.ka = function () {
    return this.h;
  };
  var Mj = function (a) {
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
    return Nj(this, a.g, b);
  };
  k.set = function (a, b) {
    Oj(this, a.g, b);
  };
  k.add = function (a, b) {
    Pj(this, a.g, b);
  };
  k.clear = function (a) {
    Qj(this, a.g);
  };
  k.V = function (a) {
    if (!a || this.constructor != a.constructor) return !1;
    for (var b = Mj(this.getDescriptor()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = d.g;
      if ((null != this.oa[e]) != (null != a.oa[e])) return !1;
      if (null != this.oa[e]) {
        var f = Kj(d),
          g = Rj(this, e);
        e = Rj(a, e);
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
  var Sj = function (a, b) {
    for (var c = Mj(a.getDescriptor()), d = 0; d < c.length; d++) {
      var e = c[d],
        f = e.g;
      if (null != b.oa[f]) {
        a.g && delete a.g[e.g];
        var g = Kj(e);
        if (e.i) {
          e = Rj(b, f) || [];
          for (var h = 0; h < e.length; h++) Pj(a, f, g ? e[h].clone() : e[h]);
        } else (e = Rj(b, f)), g ? ((g = Rj(a, f)) ? Sj(g, e) : Oj(a, f, e.clone())) : Oj(a, f, e);
      }
    }
  };
  P.prototype.clone = function () {
    var a = new this.constructor();
    a != this && ((a.oa = {}), a.g && (a.g = {}), Sj(a, this));
    return a;
  };
  var Rj = function (a, b) {
      a = a.oa[b];
      return null == a ? null : a;
    },
    Nj = function (a, b, c) {
      var d = Rj(a, b);
      return a.h[b].i ? d[c || 0] : d;
    },
    Tj = function (a, b) {
      return a.h[b].i ? (null != a.oa[b] ? a.oa[b].length : 0) : null != a.oa[b] ? 1 : 0;
    },
    Oj = function (a, b, c) {
      a.oa[b] = c;
      a.g && (a.g[b] = c);
    },
    Pj = function (a, b, c) {
      a.oa[b] || (a.oa[b] = []);
      a.oa[b].push(c);
      a.g && delete a.g[b];
    },
    Qj = function (a, b) {
      delete a.oa[b];
      a.g && delete a.g[b];
    },
    Q = function (a, b) {
      var c = [],
        d = b[0],
        e;
      for (e in b) 0 != e && c.push(new Jj(e, b[e]));
      return new Lj(a, d, c);
    };
  var Uj = function () {};
  Uj.prototype.j = function (a, b) {
    Kj(a) && Vj(this, b);
  };
  Uj.prototype.i = function (a, b) {
    if (Kj(a)) return b instanceof P || ((a = new (a.j.prototype.getDescriptor().dd)()), sc(this, a, b), (b = a)), b;
    if (14 == a.h) return "string" === typeof b && Wj.test(b) && ((a = Number(b)), 0 < a) ? a : b;
    if (!a.l) return b;
    a = a.j;
    if (a === String) {
      if ("number" === typeof b) return String(b);
    } else if (a === Number && "string" === typeof b && ("Infinity" === b || "-Infinity" === b || "NaN" === b || Wj.test(b)))
      return Number(b);
    return b;
  };
  var Wj = /^-?[0-9]+$/;
  var Xj = function () {
    this.g = [];
    this.l = { value: 0, length: 0 };
    this.o = { value: Xf, length: 0 };
    this.h = new DataView(new ArrayBuffer(8));
  };
  E(Xj, Uj);
  var Vj = function (a, b) {
    if (null == b) return [];
    a.g = [];
    for (var c = Mj(b.getDescriptor()), d = 0; d < c.length; d++) {
      var e = c[d];
      if (b.has(e))
        if (e.i)
          if (e.o) {
            var f = a,
              g = b,
              h = e;
            e = f.g;
            Yj(f, (h.g << 3) | 2);
            for (var l = e.length, m = 0, p = Tj(g, h.g); m < p; m++) {
              var u = g.get(h, m);
              f.j(h, u, !0);
            }
            g = e.splice(l, e.length - l);
            Yj(f, g.length);
            e.splice.apply(e, [e.length, 0].concat(g));
          } else for (f = 0, g = Tj(b, e.g); f < g; f++) (h = b.get(e, f)), a.j(e, h);
        else a.j(e, b.get(e));
    }
    return a.g;
  };
  Xj.prototype.j = function (a, b, c) {
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
        Yj(this, (a.g << 3) | c);
        c = !0;
      }
      c = !c;
    }
    if (!c)
      switch (a.h) {
        default:
          throw Error("J`" + a.h);
        case 17:
          Yj(this, (b << 1) ^ -(b >>> 31));
          break;
        case 18:
          a = bg(b);
          a = Wf(a, 1).xor(Pf(Zf(a, 63)));
          Zj(this, a);
          break;
        case 8:
          Yj(this, b ? 1 : 0);
          break;
        case 5:
          0 < b ? Yj(this, b) : Zj(this, $f(b));
          break;
        case 3:
        case 4:
          Zj(this, bg(b));
          break;
        case 14:
        case 13:
          Yj(this, b);
          break;
        case 6:
        case 16:
          ak(this, bg(b), 8);
          break;
        case 1:
          this.h.setFloat64(0, b, !0);
          for (a = 0; 8 > a; a++) this.g.push(this.h.getUint8(a));
          break;
        case 9:
          if (null != b)
            for (a = unescape(encodeURIComponent(b)), Yj(this, a.length), b = 0; b < a.length; b++) this.g.push(a.charCodeAt(b));
          break;
        case 12:
          if (null != b) for (Yj(this, b.length), a = 0; a < b.length; a++) this.g.push(b.charCodeAt(a));
          break;
        case 10:
          b = Vj(new Xj(), b);
          Ba(this.g, b);
          Yj(this, (a.g << 3) | 4);
          break;
        case 11:
          b = Vj(new Xj(), b);
          Yj(this, b.length);
          Ba(this.g, b);
          break;
        case 7:
          ak(this, Yf(b), 4);
          break;
        case 15:
          ak(this, $f(b), 4);
          break;
        case 2:
          for (this.h.setFloat32(0, b, !0), a = 0; 4 > a; a++) this.g.push(this.h.getUint8(a));
      }
  };
  var sc = function (a, b, c) {
    if (null != c) {
      c instanceof ArrayBuffer && (c = new Uint8Array(c));
      for (var d = b.getDescriptor(), e = 0; e < c.length; ) {
        var f = bk(a, c.subarray(e)),
          g = f.value,
          h = g >> 3;
        g &= 7;
        e += f.length;
        if ((f = d.g[parseInt(h, 10)] || null))
          if (f.o)
            for (h = bk(a, c.subarray(e)), g = h.value, e += h.length; 0 < g && e < c.length; ) {
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
              l = ck(h, e).length;
              break;
            case 1:
              l = 8;
              break;
            case 2:
              e = ck(h, e);
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
  Xj.prototype.i = function (a, b) {
    var c = null,
      d = a.h,
      e = ck(this, b),
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
        c = new Wb(dk(c.subarray(0, 4), !0), dk(c.subarray(4, 8), !0)).toString();
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
        c = ek(c);
        c = decodeURIComponent(escape(c));
        f = e.length + e.value.g;
        break;
      case 12:
        c = b.subarray(e.length, e.length + e.value.g);
        c = ek(c);
        f = e.length + e.value.g;
        break;
      case 10:
        f = c = new (a.j.prototype.getDescriptor().dd)();
        e = b;
        a = f.getDescriptor();
        for (d = 0; ; ) {
          var g = bk(this, e),
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
        b = ck(this, b.subarray(f));
        f += b.length;
        break;
      case 11:
        f = e.length + e.value.g;
        b = b.subarray(e.length, f);
        c = new (a.j.prototype.getDescriptor().dd)();
        sc(this, c, b);
        break;
      case 7:
      case 15:
        c = dk(b.subarray(0, 4), 15 == d);
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
  var Yj = function (a, b) {
      do {
        var c = b & 127;
        b >>>= 7;
        0 < b && (c |= 128);
        a.g.push(c);
      } while (0 < b);
    },
    Zj = function (a, b) {
      var c = $f(127);
      do {
        var d = b.and(c).g;
        b = Zf(b, 7);
        0 < Sf(b, Xf) && (d |= 128);
        a.g.push(d);
      } while (0 < Sf(b, Xf));
    },
    ck = function (a, b) {
      a = a.o;
      for (var c = Yf(0), d = 0; d < b.length && ((c = c.or(Wf($f(b[d] & 127), 7 * d))), 0 != (b[d] & 128)); d++);
      a.value = c;
      a.length = d + 1;
      return a;
    },
    bk = function (a, b) {
      a = a.l;
      for (var c = 0, d = 0; d < b.length && ((c |= (b[d] & 127) << (7 * d)), 0 != (b[d] & 128)); d++);
      a.value = c;
      a.length = d + 1;
      return a;
    },
    ak = function (a, b, c) {
      for (var d = $f(255), e = 0; e < c; e++) {
        var f = b.and(d).g;
        a.g.push(f);
        b = Zf(b, 8);
      }
    },
    dk = function (a, b) {
      for (var c = 0, d = 0; d < a.length; d++) c |= a[d] << (8 * d);
      b || (c >>>= 0);
      return c;
    },
    ek = function (a) {
      var b = "";
      a = new Uint16Array(a);
      for (var c = 0; c < a.length; c += 65536) b += String.fromCharCode.apply(null, a.subarray(c, c + Math.min(65536, a.length - c)));
      return b;
    };
  var tc = new Xj();
  var fk = { Ii: 0, Ei: 1, Hi: 2, Fi: 3, Gi: 4 },
    gk = function () {
      P.call(this);
    };
  G(gk, P);
  var hk = null,
    ik = function () {
      P.call(this);
    };
  G(ik, P);
  var jk = null,
    kk = function () {
      P.call(this);
    };
  G(kk, P);
  var lk = null,
    mk = function () {
      P.call(this);
    };
  G(mk, P);
  var nk = null;
  gk.prototype.getDescriptor = function () {
    var a = hk;
    a ||
      (hk = a =
        Q(gk, {
          0: { name: "IntPackedColor", H: "ink.proto.IntPackedColor" },
          1: { name: "argb", m: 13, type: Number },
          2: { name: "premultiplied", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  gk.getDescriptor = gk.prototype.getDescriptor;
  ik.prototype.getDescriptor = function () {
    var a = jk;
    a ||
      (jk = a =
        Q(ik, { 0: { name: "Point", H: "ink.proto.Point" }, 1: { name: "x", m: 2, type: Number }, 2: { name: "y", m: 2, type: Number } }));
    return a;
  };
  ik.getDescriptor = ik.prototype.getDescriptor;
  kk.prototype.getDescriptor = function () {
    var a = lk;
    a ||
      (lk = a =
        Q(kk, {
          0: { name: "Rect", H: "ink.proto.Rect" },
          1: { name: "xlow", m: 2, type: Number },
          2: { name: "xhigh", m: 2, type: Number },
          3: { name: "ylow", m: 2, type: Number },
          4: { name: "yhigh", m: 2, type: Number }
        }));
    return a;
  };
  kk.getDescriptor = kk.prototype.getDescriptor;
  mk.prototype.getDescriptor = function () {
    var a = nk;
    a ||
      (nk = a =
        Q(mk, {
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
  mk.getDescriptor = mk.prototype.getDescriptor;
  var ok = { Zg: 0, Mh: 1, Lh: 2, Jh: 3, Kh: 4, Rg: 5, Qg: 6, Og: 7, Pg: 8, Fj: 9, Ej: 10, Cj: 11, Dj: 12, oj: 13 },
    pk = { Yg: 0, LEFT: 1, Gg: 2, RIGHT: 3, Wh: 4 },
    qk = function () {
      P.call(this);
    };
  G(qk, P);
  var rk = null,
    sk = function () {
      P.call(this);
    };
  G(sk, P);
  var tk = null;
  sk.prototype.ka = function () {
    return Nj(this, 2);
  };
  var uk = function () {
    P.call(this);
  };
  G(uk, P);
  var vk = null;
  uk.prototype.getFont = function () {
    return Nj(this, 3);
  };
  uk.prototype.setFont = function (a) {
    Oj(this, 3, a);
  };
  uk.prototype.clearFont = function () {
    Qj(this, 3);
  };
  var wk = function () {
    P.call(this);
  };
  G(wk, P);
  var xk = null,
    yk = function () {
      P.call(this);
    };
  G(yk, P);
  var zk = null,
    Ak = function () {
      P.call(this);
    };
  G(Ak, P);
  var Bk = null;
  Ak.prototype.getFont = function () {
    return Nj(this, 3);
  };
  Ak.prototype.setFont = function (a) {
    Oj(this, 3, a);
  };
  Ak.prototype.clearFont = function () {
    Qj(this, 3);
  };
  qk.prototype.getDescriptor = function () {
    var a = rk;
    a ||
      (rk = a =
        Q(qk, {
          0: { name: "FontAttributes", H: "ink.proto.text.FontAttributes" },
          1: { name: "family", m: 9, type: String },
          2: { name: "is_italic", m: 8, type: Boolean },
          3: { name: "weight", m: 5, defaultValue: 400, type: Number }
        }));
    return a;
  };
  qk.getDescriptor = qk.prototype.getDescriptor;
  sk.prototype.getDescriptor = function () {
    var a = tk;
    a ||
      (tk = a =
        Q(sk, {
          0: { name: "Font", H: "ink.proto.text.Font" },
          1: { name: "postscript_font", m: 14, defaultValue: 0, type: ok },
          2: { name: "name", m: 9, type: String },
          5: { name: "attributes", m: 11, type: qk },
          3: { name: "asset_id", m: 9, type: String },
          4: { name: "resource_id", m: 13, type: Number }
        }));
    return a;
  };
  sk.getDescriptor = sk.prototype.getDescriptor;
  uk.prototype.getDescriptor = function () {
    var a = vk;
    a ||
      (vk = a =
        Q(uk, {
          0: { name: "Line", H: "ink.proto.text.Line" },
          1: { name: "text", m: 9, type: String },
          2: { name: "origin_fraction", m: 11, type: ik },
          3: { name: "font", m: 11, type: sk }
        }));
    return a;
  };
  uk.getDescriptor = uk.prototype.getDescriptor;
  wk.prototype.getDescriptor = function () {
    var a = xk;
    a || (xk = a = Q(wk, { 0: { name: "Layout", H: "ink.proto.text.Layout" }, 1: { name: "line", M: !0, m: 11, type: uk } }));
    return a;
  };
  wk.getDescriptor = wk.prototype.getDescriptor;
  yk.prototype.getDescriptor = function () {
    var a = zk;
    a ||
      (zk = a =
        Q(yk, {
          0: { name: "DropShadow", H: "ink.proto.text.DropShadow" },
          1: { name: "rgba", m: 13, type: Number },
          2: { name: "radius_fraction", m: 2, type: Number },
          3: { name: "dx_fraction", m: 2, type: Number },
          4: { name: "dy_fraction", m: 2, type: Number }
        }));
    return a;
  };
  yk.getDescriptor = yk.prototype.getDescriptor;
  Ak.prototype.getDescriptor = function () {
    var a = Bk;
    a ||
      (Bk = a =
        Q(Ak, {
          0: { name: "Text", H: "ink.proto.text.Text" },
          1: { name: "text", m: 9, type: String },
          3: { name: "font", m: 11, type: sk },
          4: { name: "font_size_fraction", m: 2, type: Number },
          5: { name: "rgba", m: 13, defaultValue: 255, type: Number },
          6: { name: "alignment", m: 14, defaultValue: 0, type: pk },
          7: { name: "shadow", m: 11, type: yk },
          8: { name: "layout", m: 11, type: wk },
          9: { name: "background_color", m: 11, type: gk },
          10: { name: "border_color", m: 11, type: gk },
          11: { name: "border_width_fraction", m: 2, type: Number },
          12: { name: "padding_fraction", m: 2, type: Number }
        }));
    return a;
  };
  Ak.getDescriptor = Ak.prototype.getDescriptor;
  var Ck = { ej: 0, dj: 1, bj: 2, cj: 3 },
    Dk = { ai: 0, bi: 1, ci: 2 },
    Ek = function () {
      P.call(this);
    };
  G(Ek, P);
  var Fk = null,
    Gk = { Lj: 0, dk: 1, POINTS: 2, gk: 3, Wj: 6, Oi: 4, Pi: 5 },
    Hk = function () {
      P.call(this);
    };
  G(Hk, P);
  var Ik = null,
    Ok = function () {
      P.call(this);
    };
  G(Ok, P);
  var Pk = null,
    Qk = function () {
      P.call(this);
    };
  G(Qk, P);
  var Rk = null;
  Qk.prototype.getFont = function () {
    return Nj(this, 1);
  };
  Qk.prototype.setFont = function (a) {
    Oj(this, 1, a);
  };
  Qk.prototype.clearFont = function () {
    Qj(this, 1);
  };
  var Sk = function () {
    P.call(this);
  };
  G(Sk, P);
  var Tk = null,
    Uk = function () {
      P.call(this);
    };
  G(Uk, P);
  var Vk = null,
    Wk = { UNKNOWN: 0, Ch: 1, kj: 2, Ri: 3, Bj: 4 },
    Xk = function () {
      P.call(this);
    };
  G(Xk, P);
  var Yk = null,
    Zk = { Mj: 0, tf: 1, vf: 2 },
    $k = function () {
      P.call(this);
    };
  G($k, P);
  var al = null,
    bl = function () {
      P.call(this);
    };
  G(bl, P);
  var cl = null,
    dl = function () {
      P.call(this);
    };
  G(dl, P);
  var el = null,
    fl = function () {
      P.call(this);
    };
  G(fl, P);
  var gl = null,
    hl = { Kj: 0, Cg: 1, Sh: 2, li: 3, yg: 4, Gj: 15, yh: 6, Nh: 8, Mi: 12, Hg: 13, Si: 14 },
    il = { Li: 0, Ji: 1, Ki: 2 },
    jl = function () {
      P.call(this);
    };
  G(jl, P);
  var kl = null,
    ll = function () {
      P.call(this);
    };
  G(ll, P);
  var ml = null,
    nl = {
      UNKNOWN: 0,
      Zh: 1,
      eh: 2,
      ii: 3,
      Vi: 4,
      Ci: 5,
      Ti: 7,
      Sg: 8,
      xj: 9,
      mj: 10,
      ij: 11,
      Ah: 12,
      TEXT: 13,
      yj: 14,
      Tg: 15,
      hi: 16,
      gi: 17,
      fi: 18,
      aj: 19,
      vj: 20,
      fj: 21,
      wj: 22
    };
  Ek.prototype.getDescriptor = function () {
    var a = Fk;
    a ||
      (Fk = a =
        Q(Ek, {
          0: { name: "ToolSize", H: "ink.proto.ToolSize" },
          7: { name: "stroke_width", m: 2, type: Number },
          8: { name: "units", m: 14, defaultValue: 1, type: Gk }
        }));
    return a;
  };
  Ek.getDescriptor = Ek.prototype.getDescriptor;
  Hk.prototype.getDescriptor = function () {
    var a = Ik;
    a ||
      (Ik = a =
        Q(Hk, {
          0: { name: "PusherToolParams", H: "ink.proto.PusherToolParams" },
          3: { name: "manipulate_photos", m: 8, type: Boolean },
          1: { name: "manipulate_stickers", m: 8, type: Boolean },
          2: { name: "manipulate_text", m: 8, type: Boolean }
        }));
    return a;
  };
  Hk.getDescriptor = Hk.prototype.getDescriptor;
  Ok.prototype.getDescriptor = function () {
    var a = Pk;
    a ||
      (Pk = a =
        Q(Ok, {
          0: { name: "ShapeToolParams", H: "ink.proto.ShapeToolParams" },
          1: { name: "shape_kind", m: 14, defaultValue: 0, type: Ck },
          2: { name: "fill_color", m: 11, type: gk },
          3: { name: "start_linecap", m: 14, defaultValue: 0, type: Dk },
          4: { name: "end_linecap", m: 14, defaultValue: 0, type: Dk }
        }));
    return a;
  };
  Ok.getDescriptor = Ok.prototype.getDescriptor;
  Qk.prototype.getDescriptor = function () {
    var a = Rk;
    a ||
      (Rk = a =
        Q(Qk, {
          0: { name: "TextToolParams", H: "ink.proto.TextToolParams" },
          1: { name: "font", m: 11, type: sk },
          2: { name: "alignment", m: 14, defaultValue: 0, type: pk },
          3: { name: "shadow", m: 11, type: Sk },
          4: { name: "background_color", m: 11, type: gk },
          5: { name: "border_color", m: 11, type: gk },
          6: { name: "edit_existing_text", m: 8, defaultValue: !0, type: Boolean },
          7: { name: "initial_width_on_screen", m: 2, type: Number },
          8: { name: "initial_height_on_screen", m: 2, type: Number }
        }));
    return a;
  };
  Qk.getDescriptor = Qk.prototype.getDescriptor;
  Sk.prototype.getDescriptor = function () {
    var a = Tk;
    a ||
      (Tk = a =
        Q(Sk, {
          0: { name: "TextToolShadowParams", H: "ink.proto.TextToolShadowParams" },
          1: { name: "color", m: 11, type: gk },
          2: { name: "radius_fraction_of_font_size", m: 2, type: Number },
          3: { name: "dx_fraction_of_font_size", m: 2, type: Number },
          4: { name: "dy_fraction_of_font_size", m: 2, type: Number }
        }));
    return a;
  };
  Sk.getDescriptor = Sk.prototype.getDescriptor;
  Uk.prototype.getDescriptor = function () {
    var a = Vk;
    a ||
      (Vk = a =
        Q(Uk, {
          0: { name: "TipShapeParams", H: "ink.proto.TipShapeParams" },
          1: { name: "size_ratio", m: 2, defaultValue: 1, type: Number },
          2: { name: "radius_behavior", m: 14, defaultValue: 1, type: Wk },
          3: { name: "max_radius_speed_cm_per_sec", m: 2, defaultValue: 200, type: Number },
          4: { name: "min_radius_speed_cm_per_sec", m: 2, defaultValue: 0, type: Number },
          5: { name: "size_drag_factor", m: 2, defaultValue: 0.85, type: Number }
        }));
    return a;
  };
  Uk.getDescriptor = Uk.prototype.getDescriptor;
  Xk.prototype.getDescriptor = function () {
    var a = Yk;
    a ||
      (Yk = a =
        Q(Xk, {
          0: { name: "CustomLineParams", H: "ink.proto.CustomLineParams" },
          3: { name: "tip_shape_params", m: 11, type: Uk },
          4: { name: "expand_small_strokes", m: 8, defaultValue: !1, type: Boolean },
          5: { name: "tip_type", m: 14, defaultValue: 1, type: Zk }
        }));
    return a;
  };
  Xk.getDescriptor = Xk.prototype.getDescriptor;
  $k.prototype.getDescriptor = function () {
    var a = al;
    a ||
      (al = a =
        Q($k, {
          0: { name: "TextPusherToolParams", H: "ink.proto.TextPusherToolParams" },
          1: { name: "pusher_params", m: 11, type: Hk },
          2: { name: "text_params", m: 11, type: Qk }
        }));
    return a;
  };
  $k.getDescriptor = $k.prototype.getDescriptor;
  bl.prototype.getDescriptor = function () {
    var a = cl;
    a ||
      (cl = a =
        Q(bl, { 0: { name: "ShapeQueryToolParams", H: "ink.proto.ShapeQueryToolParams" }, 1: { name: "shape_params", m: 11, type: Ok } }));
    return a;
  };
  bl.getDescriptor = bl.prototype.getDescriptor;
  dl.prototype.getDescriptor = function () {
    var a = el;
    a ||
      (el = a =
        Q(dl, {
          0: { name: "LineEffectParams", H: "ink.proto.LineEffectParams" },
          1: { name: "texture_uri", m: 9, type: String },
          2: { name: "winding_texture_period", m: 11, type: Ek },
          3: { name: "u_animation_duration_seconds", m: 2, defaultValue: 0, type: Number },
          4: { name: "tiled_texture_scale", m: 2, defaultValue: 100, type: Number }
        }));
    return a;
  };
  dl.getDescriptor = dl.prototype.getDescriptor;
  fl.prototype.getDescriptor = function () {
    var a = gl;
    a ||
      (gl = a =
        Q(fl, {
          0: { name: "LineToolParams", H: "ink.proto.LineToolParams" },
          1: { name: "brush_type", m: 14, defaultValue: 0, type: hl },
          2: { name: "custom_line_params", m: 11, type: Xk },
          3: { name: "line_effect_params", m: 11, type: dl },
          4: { name: "self_overlap", m: 14, defaultValue: 1, type: il }
        }));
    return a;
  };
  fl.getDescriptor = fl.prototype.getDescriptor;
  jl.prototype.getDescriptor = function () {
    var a = kl;
    a ||
      (kl = a =
        Q(jl, {
          0: { name: "MagicEraserToolParams", H: "ink.proto.MagicEraserToolParams" },
          1: { name: "erase_text", m: 8, defaultValue: !0, type: Boolean },
          2: { name: "erase_invisible_elements", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  jl.getDescriptor = jl.prototype.getDescriptor;
  ll.prototype.getDescriptor = function () {
    var a = ml;
    a ||
      (ml = a =
        Q(ll, {
          0: { name: "ToolParams", H: "ink.proto.ToolParams" },
          1: { name: "tool", m: 14, defaultValue: 0, type: nl },
          2: { name: "rgba", m: 13, type: Number },
          3: { name: "tool_size", m: 11, type: Ek },
          4: { name: "pusher_tool_params", m: 11, type: Hk },
          8: { name: "shape_tool_params", m: 11, type: Ok },
          7: { name: "text_tool_params", m: 11, type: Qk },
          5: { name: "line_tool_params", m: 11, type: fl },
          21: { name: "text_pusher_tool_params", m: 11, type: $k },
          10: { name: "shape_query_tool_params", m: 11, type: bl },
          9: { name: "magic_eraser_tool_params", m: 11, type: jl }
        }));
    return a;
  };
  ll.getDescriptor = ll.prototype.getDescriptor;
  var ol = { NONE: 0, Tj: 1, Uj: 7, jj: 2, xh: 3, Vj: 4, qg: 5, pg: 6 },
    pl = function () {
      P.call(this);
    };
  G(pl, P);
  var ql = null,
    rl = function () {
      P.call(this);
    };
  G(rl, P);
  var sl = null,
    tl = function () {
      P.call(this);
    };
  G(tl, P);
  var ul = null,
    vl = function () {
      P.call(this);
    };
  G(vl, P);
  var wl = null,
    xl = function () {
      P.call(this);
    };
  G(xl, P);
  var yl = null,
    zl = function () {
      P.call(this);
    };
  G(zl, P);
  var Al = null,
    Bl = function () {
      P.call(this);
    };
  G(Bl, P);
  var Cl = null,
    Dl = { UNKNOWN: 0, Yh: 1 },
    El = function () {
      P.call(this);
    };
  G(El, P);
  var Fl = null,
    Gl = function () {
      P.call(this);
    };
  G(Gl, P);
  var Hl = null;
  Gl.prototype.C = function () {
    return Nj(this, 2);
  };
  var Il = function () {
    P.call(this);
  };
  G(Il, P);
  var Jl = null,
    Kl = function () {
      P.call(this);
    };
  G(Kl, P);
  var Ll = null,
    Ml = function () {
      P.call(this);
    };
  G(Ml, P);
  var Nl = null,
    Ol = { UNKNOWN: 0, ui: 1, di: 2, Ug: 3, Ui: 4, Ng: 5 },
    Pl = { Bg: 1, tf: 2, vf: 3 };
  pl.prototype.getDescriptor = function () {
    var a = ql;
    a ||
      (ql = a =
        Q(pl, {
          0: { name: "BackgroundImageInfo", H: "ink.proto.BackgroundImageInfo" },
          1: { name: "uri", m: 9, type: String },
          3: { name: "bounds", m: 11, type: kk }
        }));
    return a;
  };
  pl.getDescriptor = pl.prototype.getDescriptor;
  rl.prototype.getDescriptor = function () {
    var a = sl;
    a ||
      (sl = a =
        Q(rl, {
          0: { name: "GridInfo", H: "ink.proto.GridInfo" },
          1: { name: "uri", m: 9, type: String },
          2: { name: "rgba_multiplier", m: 13, defaultValue: 4294967295, type: Number },
          3: { name: "size_world", m: 2, defaultValue: 50, type: Number },
          4: { name: "origin", m: 11, type: ik }
        }));
    return a;
  };
  rl.getDescriptor = rl.prototype.getDescriptor;
  tl.prototype.getDescriptor = function () {
    var a = ul;
    a ||
      (ul = a =
        Q(tl, {
          0: { name: "LOD", H: "ink.proto.LOD" },
          1: { name: "max_coverage", m: 2, type: Number },
          2: { name: "ctm_blob", m: 12, type: String },
          4: { name: "ctm_scale_factor", m: 2, type: Number },
          3: { name: "draco_blob", m: 12, type: String }
        }));
    return a;
  };
  tl.getDescriptor = tl.prototype.getDescriptor;
  vl.prototype.getDescriptor = function () {
    var a = wl;
    a ||
      (wl = a =
        Q(vl, {
          0: { name: "Stroke", H: "ink.proto.Stroke" },
          1: { name: "shader_type", m: 14, defaultValue: 0, type: ol },
          3: { name: "lod", M: !0, m: 11, type: tl },
          4: { name: "abgr", m: 13, type: Number },
          5: { name: "point_x", M: !0, fd: !0, m: 17, type: Number },
          6: { name: "point_y", M: !0, fd: !0, m: 17, type: Number },
          7: { name: "point_t_ms", M: !0, fd: !0, m: 13, type: Number },
          8: { name: "deprecated_transform", m: 11, type: mk },
          9: { name: "start_time_ms", m: 4, type: String },
          10: { name: "u_animation_duration_seconds", m: 2, type: Number }
        }));
    return a;
  };
  vl.getDescriptor = vl.prototype.getDescriptor;
  xl.prototype.getDescriptor = function () {
    var a = yl;
    a ||
      (yl = a =
        Q(xl, {
          0: { name: "UncompressedStroke", H: "ink.proto.UncompressedStroke" },
          1: { name: "outline", M: !0, m: 11, type: ik },
          2: { name: "rgba", m: 13, type: Number }
        }));
    return a;
  };
  xl.getDescriptor = xl.prototype.getDescriptor;
  zl.prototype.getDescriptor = function () {
    var a = Al;
    a ||
      (Al = a =
        Q(zl, {
          0: { name: "Element", H: "ink.proto.Element" },
          4: { name: "deprecated_uuid", m: 9, type: String },
          5: { name: "minimum_serializer_version", m: 13, type: Number },
          6: { name: "stroke", m: 11, type: vl },
          9: { name: "path", m: 11, type: Ml },
          10: { name: "attributes", m: 11, type: Bl },
          11: { name: "text", m: 11, type: Ak },
          12: { name: "composite_image_info", m: 11, type: Il },
          13: { name: "tool_params", m: 11, type: ll },
          14: { name: "shape_spec", m: 11, type: Kl }
        }));
    return a;
  };
  zl.getDescriptor = zl.prototype.getDescriptor;
  Bl.prototype.getDescriptor = function () {
    var a = Cl;
    a ||
      (Cl = a =
        Q(Bl, {
          0: { name: "ElementAttributes", H: "ink.proto.ElementAttributes" },
          1: { name: "selectable", m: 8, defaultValue: !0, type: Boolean },
          2: { name: "magic_erasable", m: 8, defaultValue: !0, type: Boolean },
          3: { name: "is_sticker", m: 8, defaultValue: !1, type: Boolean },
          10: { name: "is_photo", m: 8, defaultValue: !1, type: Boolean },
          4: { name: "is_text", m: 8, defaultValue: !1, type: Boolean },
          5: { name: "is_group", m: 8, defaultValue: !1, type: Boolean },
          6: { name: "is_zoomable", m: 8, defaultValue: !1, type: Boolean },
          7: { name: "group_type", m: 14, defaultValue: 0, type: Dl },
          9: { name: "is_split_text", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  Bl.getDescriptor = Bl.prototype.getDescriptor;
  El.prototype.getDescriptor = function () {
    var a = Fl;
    a ||
      (Fl = a =
        Q(El, {
          0: { name: "UncompressedElement", H: "ink.proto.UncompressedElement" },
          1: { name: "uncompressed_stroke", m: 11, type: xl }
        }));
    return a;
  };
  El.getDescriptor = El.prototype.getDescriptor;
  Gl.prototype.getDescriptor = function () {
    var a = Hl;
    a ||
      (Hl = a =
        Q(Gl, {
          0: { name: "ElementBundle", H: "ink.proto.ElementBundle" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "element", m: 11, type: zl },
          3: { name: "transform", m: 11, type: mk },
          4: { name: "uncompressed_element", m: 11, type: El },
          5: { name: "group_uuid", m: 9, type: String },
          6: { name: "visibility", m: 8, defaultValue: !0, type: Boolean },
          7: { name: "opacity", m: 5, defaultValue: 255, type: Number }
        }));
    return a;
  };
  Gl.getDescriptor = Gl.prototype.getDescriptor;
  Il.prototype.getDescriptor = function () {
    var a = Jl;
    a ||
      (Jl = a =
        Q(Il, {
          0: { name: "CompositeImageInfo", H: "ink.proto.CompositeImageInfo" },
          1: { name: "composite_image_uri", m: 9, type: String },
          2: { name: "object_rect", m: 11, type: kk }
        }));
    return a;
  };
  Il.getDescriptor = Il.prototype.getDescriptor;
  Kl.prototype.getDescriptor = function () {
    var a = Ll;
    a ||
      (Ll = a =
        Q(Kl, {
          0: { name: "ShapeSpec", H: "ink.proto.ShapeSpec" },
          1: { name: "kind", m: 14, defaultValue: 0, type: Ck },
          2: { name: "control_point", M: !0, m: 11, type: ik },
          6: { name: "start_linecap", m: 14, defaultValue: 0, type: Dk },
          7: { name: "end_linecap", m: 14, defaultValue: 0, type: Dk },
          3: { name: "fill_color", m: 11, type: gk },
          4: { name: "stroke_color", m: 11, type: gk },
          5: { name: "stroke_width_world", m: 2, type: Number }
        }));
    return a;
  };
  Kl.getDescriptor = Kl.prototype.getDescriptor;
  Ml.prototype.getDescriptor = function () {
    var a = Nl;
    a ||
      (Nl = a =
        Q(Ml, {
          0: { name: "Path", H: "ink.proto.Path" },
          1: { name: "segment_types", M: !0, m: 14, defaultValue: 0, type: Ol },
          2: { name: "segment_counts", M: !0, m: 13, type: Number },
          3: { name: "segment_args", M: !0, m: 1, type: Number },
          4: { name: "radius", m: 1, defaultValue: 1, type: Number },
          5: { name: "rgba", m: 13, type: Number },
          6: { name: "tip_type", m: 14, defaultValue: 2, type: Pl },
          7: { name: "fill_rgba", m: 13, type: Number }
        }));
    return a;
  };
  Ml.getDescriptor = Ml.prototype.getDescriptor;
  var Ql = { ng: 1, Wg: 2 },
    Rl = function () {
      P.call(this);
    };
  G(Rl, P);
  var Sl = null,
    Tl = function () {
      P.call(this);
    };
  G(Tl, P);
  var Ul = null;
  Tl.prototype.setHeight = function (a) {
    Oj(this, 3, a);
  };
  var Vl = function () {
    P.call(this);
  };
  G(Vl, P);
  var Wl = null,
    Xl = function () {
      P.call(this);
    };
  G(Xl, P);
  var Yl = null,
    Zl = function () {
      P.call(this);
    };
  G(Zl, P);
  var $l = null,
    am = function () {
      P.call(this);
    };
  G(am, P);
  var bm = null,
    cm = function () {
      P.call(this);
    };
  G(cm, P);
  var dm = null,
    em = function () {
      P.call(this);
    };
  G(em, P);
  var fm = null,
    gm = function () {
      P.call(this);
    };
  G(gm, P);
  var hm = null,
    im = function () {
      P.call(this);
    };
  G(im, P);
  var jm = null,
    km = function () {
      P.call(this);
    };
  G(km, P);
  var lm = null,
    mm = function () {
      P.call(this);
    };
  G(mm, P);
  var nm = null,
    om = function () {
      P.call(this);
    };
  G(om, P);
  var pm = null,
    qm = function () {
      P.call(this);
    };
  G(qm, P);
  var rm = null,
    sm = function () {
      P.call(this);
    };
  G(sm, P);
  var tm = null,
    um = function () {
      P.call(this);
    };
  G(um, P);
  var vm = null,
    wm = function () {
      P.call(this);
    };
  G(wm, P);
  var xm = null,
    ym = function () {
      P.call(this);
    };
  G(ym, P);
  var zm = null;
  ym.prototype.C = function (a) {
    return Nj(this, 2, a);
  };
  var Am = function () {
    P.call(this);
  };
  G(Am, P);
  var Bm = null;
  Am.prototype.C = function (a) {
    return Nj(this, 2, a);
  };
  Rl.prototype.getDescriptor = function () {
    var a = Sl;
    a ||
      (Sl = a =
        Q(Rl, {
          0: { name: "PageProperties", H: "ink.proto.PageProperties" },
          1: { name: "background_color", m: 11, type: gk },
          2: { name: "background_image", m: 11, type: pl },
          3: { name: "bounds", m: 11, type: kk },
          5: { name: "grid_info", m: 11, type: rl }
        }));
    return a;
  };
  Rl.getDescriptor = Rl.prototype.getDescriptor;
  Tl.prototype.getDescriptor = function () {
    var a = Ul;
    a ||
      (Ul = a =
        Q(Tl, {
          0: { name: "PerPageProperties", H: "ink.proto.PerPageProperties" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "width", m: 2, type: Number },
          3: { name: "height", m: 2, type: Number },
          4: { name: "orientation", m: 14, defaultValue: 0, type: fk }
        }));
    return a;
  };
  Tl.getDescriptor = Tl.prototype.getDescriptor;
  Vl.prototype.getDescriptor = function () {
    var a = Wl;
    a ||
      (Wl = a =
        Q(Vl, {
          0: { name: "AddAction", H: "ink.proto.AddAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "below_element_with_uuid", m: 9, type: String }
        }));
    return a;
  };
  Vl.getDescriptor = Vl.prototype.getDescriptor;
  Xl.prototype.getDescriptor = function () {
    var a = Yl;
    a ||
      (Yl = a =
        Q(Xl, {
          0: { name: "AddMultipleAction", H: "ink.proto.AddMultipleAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "below_element_with_uuid", m: 9, type: String }
        }));
    return a;
  };
  Xl.getDescriptor = Xl.prototype.getDescriptor;
  Zl.prototype.getDescriptor = function () {
    var a = $l;
    a ||
      ($l = a =
        Q(Zl, {
          0: { name: "RemoveAction", H: "ink.proto.RemoveAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "was_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  Zl.getDescriptor = Zl.prototype.getDescriptor;
  am.prototype.getDescriptor = function () {
    var a = bm;
    a ||
      (bm = a =
        Q(am, {
          0: { name: "ReplaceAction", H: "ink.proto.ReplaceAction" },
          1: { name: "removed_uuid", M: !0, m: 9, type: String },
          2: { name: "removed_was_below_uuid", M: !0, m: 9, type: String },
          3: { name: "added_uuid", M: !0, m: 9, type: String },
          4: { name: "added_was_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  am.getDescriptor = am.prototype.getDescriptor;
  cm.prototype.getDescriptor = function () {
    var a = dm;
    a || (dm = a = Q(cm, { 0: { name: "ClearAction", H: "ink.proto.ClearAction" }, 1: { name: "uuid", M: !0, m: 9, type: String } }));
    return a;
  };
  cm.getDescriptor = cm.prototype.getDescriptor;
  em.prototype.getDescriptor = function () {
    var a = fm;
    a ||
      (fm = a =
        Q(em, {
          0: { name: "SetTransformAction", H: "ink.proto.SetTransformAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_transform", M: !0, m: 11, type: mk },
          3: { name: "to_transform", M: !0, m: 11, type: mk }
        }));
    return a;
  };
  em.getDescriptor = em.prototype.getDescriptor;
  gm.prototype.getDescriptor = function () {
    var a = hm;
    a ||
      (hm = a =
        Q(gm, {
          0: { name: "SetBackgroundColorAction", H: "ink.proto.SetBackgroundColorAction" },
          1: { name: "old_background_color", m: 11, type: gk },
          2: { name: "new_background_color", m: 11, type: gk }
        }));
    return a;
  };
  gm.getDescriptor = gm.prototype.getDescriptor;
  im.prototype.getDescriptor = function () {
    var a = jm;
    a ||
      (jm = a =
        Q(im, {
          0: { name: "SetPageBoundsAction", H: "ink.proto.SetPageBoundsAction" },
          1: { name: "old_bounds", m: 11, type: kk },
          2: { name: "new_bounds", m: 11, type: kk }
        }));
    return a;
  };
  im.getDescriptor = im.prototype.getDescriptor;
  km.prototype.getDescriptor = function () {
    var a = lm;
    a ||
      (lm = a =
        Q(km, {
          0: { name: "SetVisibilityAction", H: "ink.proto.SetVisibilityAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "to_visibility", M: !0, m: 8, type: Boolean },
          3: { name: "from_visibility", M: !0, m: 8, type: Boolean }
        }));
    return a;
  };
  km.getDescriptor = km.prototype.getDescriptor;
  mm.prototype.getDescriptor = function () {
    var a = nm;
    a ||
      (nm = a =
        Q(mm, {
          0: { name: "SetColorAction", H: "ink.proto.SetColorAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "old_color", m: 11, type: gk },
          3: { name: "new_color", m: 11, type: gk }
        }));
    return a;
  };
  mm.getDescriptor = mm.prototype.getDescriptor;
  om.prototype.getDescriptor = function () {
    var a = pm;
    a ||
      (pm = a =
        Q(om, {
          0: { name: "SetOpacityAction", H: "ink.proto.SetOpacityAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_opacity", M: !0, m: 5, type: Number },
          3: { name: "to_opacity", M: !0, m: 5, type: Number }
        }));
    return a;
  };
  om.getDescriptor = om.prototype.getDescriptor;
  qm.prototype.getDescriptor = function () {
    var a = rm;
    a ||
      (rm = a =
        Q(qm, {
          0: { name: "ChangeZOrderAction", H: "ink.proto.ChangeZOrderAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_below_uuid", M: !0, m: 9, type: String },
          3: { name: "to_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  qm.getDescriptor = qm.prototype.getDescriptor;
  sm.prototype.getDescriptor = function () {
    var a = tm;
    a ||
      (tm = a =
        Q(sm, {
          0: { name: "UpdateTextAction", H: "ink.proto.UpdateTextAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "old_text", m: 11, type: Ak },
          3: { name: "old_transform", m: 11, type: mk },
          4: { name: "new_text", m: 11, type: Ak },
          5: { name: "new_transform", m: 11, type: mk }
        }));
    return a;
  };
  sm.getDescriptor = sm.prototype.getDescriptor;
  um.prototype.getDescriptor = function () {
    var a = vm;
    a ||
      (vm = a =
        Q(um, {
          0: { name: "SetParentsAction", H: "ink.proto.SetParentsAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "old_parent_uuid", M: !0, m: 9, type: String },
          3: { name: "old_transform", M: !0, m: 11, type: mk },
          4: { name: "new_parent_uuid", M: !0, m: 9, type: String },
          5: { name: "new_transform", M: !0, m: 11, type: mk }
        }));
    return a;
  };
  um.getDescriptor = um.prototype.getDescriptor;
  wm.prototype.getDescriptor = function () {
    var a = xm;
    a ||
      (xm = a =
        Q(wm, {
          0: { name: "StorageAction", H: "ink.proto.StorageAction" },
          1: { name: "add_action", m: 11, type: Vl },
          2: { name: "remove_action", m: 11, type: Zl },
          3: { name: "clear_action", m: 11, type: cm },
          5: { name: "set_transform_action", m: 11, type: em },
          6: { name: "set_page_bounds_action", m: 11, type: im },
          7: { name: "add_multiple_action", m: 11, type: Xl },
          8: { name: "set_visibility_action", m: 11, type: km },
          16: { name: "set_color_action", m: 11, type: mm },
          9: { name: "set_opacity_action", m: 11, type: om },
          10: { name: "change_z_order_action", m: 11, type: qm },
          12: { name: "replace_action", m: 11, type: am },
          13: { name: "set_background_color_action", m: 11, type: gm },
          14: { name: "update_text_action", m: 11, type: sm },
          15: { name: "set_parents_action", m: 11, type: um }
        }));
    return a;
  };
  wm.getDescriptor = wm.prototype.getDescriptor;
  ym.prototype.getDescriptor = function () {
    var a = zm;
    a ||
      (zm = a =
        Q(ym, {
          0: { name: "Snapshot", H: "ink.proto.Snapshot" },
          1: { name: "page_properties", m: 11, type: Rl },
          8: { name: "per_page_properties", M: !0, m: 11, type: Tl },
          2: { name: "element", M: !0, m: 11, type: Gl },
          3: { name: "dead_element", M: !0, m: 11, type: Gl },
          4: { name: "undo_action", M: !0, m: 11, type: wm },
          5: { name: "redo_action", M: !0, m: 11, type: wm },
          6: { name: "element_state_index", M: !0, m: 14, defaultValue: 1, type: Ql },
          7: { name: "fingerprint", m: 4, type: String },
          9: { name: "active_layer_uuid", m: 9, type: String }
        }));
    return a;
  };
  ym.getDescriptor = ym.prototype.getDescriptor;
  Am.prototype.getDescriptor = function () {
    var a = Bm;
    a ||
      (Bm = a =
        Q(Am, {
          0: { name: "MutationPacket", H: "ink.proto.MutationPacket" },
          1: { name: "mutation", M: !0, m: 11, type: wm },
          2: { name: "element", M: !0, m: 11, type: Gl },
          3: { name: "page_properties", m: 11, type: Rl }
        }));
    return a;
  };
  Am.getDescriptor = Am.prototype.getDescriptor;
  var Cm = function (a) {
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
    Dm = function (a) {
      var b = {};
      b.blob_id = "local-" + new Date().getTime();
      b.state = "l";
      b.type = "IMAGE";
      a && (b.mimetype = a);
      return new Cm(b);
    },
    Em = function (a) {
      return 0 == a.lastIndexOf("image", 0) ? "IMAGE" : 0 == a.lastIndexOf("audio", 0) ? "AUDIO" : "unknown";
    };
  Cm.prototype.getType = function () {
    return this.g;
  };
  var Fm = function (a) {
      "unknown" == a.g && (a.g = Em(a.o));
      return "IMAGE" == a.g;
    },
    Gm = function (a) {
      return "DRAWING" == a.g;
    },
    Hm = function (a) {
      return "IMAGE" == a.g && (!!a.j || !!a.v);
    };
  Cm.prototype.isError = function () {
    return "luf" == this.h;
  };
  Cm.prototype.setHeight = function (a) {
    this.B = a;
  };
  var Im = function (a, b) {
    b != a.h && (!a.A || ("s" != b && "luc" != b) || (a.A = ""), (a.h = b));
  };
  Cm.prototype.update = function (a) {
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
                "string" === typeof f && (f = uc(new ym(), f));
                this.u = f;
                Nj(this.u, 7) && (this.F = Nj(this.u, 7));
                break;
              case "encodedPendingMutations":
                f = d.encodedPendingMutations;
                "string" === typeof f && (f = uc(new Am(), f));
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
                this.i ? (e = this.i.update(d.snapshotData) || e) : ((this.i = new Cm(d.snapshotData)), (e = !0));
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
    this.g || (this.g = Em(this.o));
    return a || b;
  };
  var Jm = function (a, b) {
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
      if (Gm(a) || (Hm(a) && a.j)) {
        var d = {};
        d.drawingId = a.j;
        a.i && (d.snapshotData = Jm(a.i));
        d.snapshotFingerprint = a.ba;
        d.inkHash = a.N;
        c.drawingInfo = d;
        b &&
          (a.v && (c.localDrawingThumbnailData = a.v),
          a.u && (d.encodedSnapshotProto = Ia(Vj(tc, a.u))),
          a.R && (d.encodedPendingMutations = Ia(Vj(tc, a.R))),
          (d.localSnapshotFingerprint = a.F),
          (d.serverSnapshotFingerprint = a.S),
          (d.snapshotProtoFprint = a.Z));
      }
      a.l && (c.local_data = a.l);
      "s" == a.h || (a.i && "s" == a.i.h) || (c.filename = a.A);
      return c;
    },
    Km = function (a) {
      var b = {};
      b = ((b.mimetype = a.o), (b.type = a.g), b);
      if (Gm(a) || (Hm(a) && a.j)) {
        var c = {};
        b.drawingInfo = ((c.drawingId = a.j), c);
      }
      return b;
    };
  var Lm = function () {
    jj.call(this, "l");
  };
  E(Lm, jj);
  var R = function () {
    M.call(this);
    this.Ja = new sj(this);
    this.Cf = this;
    this.Tb = null;
  };
  G(R, M);
  R.prototype[nj] = !0;
  k = R.prototype;
  k.sa = function (a) {
    this.Tb = a;
  };
  k.addEventListener = function (a, b, c, d) {
    zj(this, a, b, c, d);
  };
  k.removeEventListener = function (a, b, c, d) {
    Gj(this, a, b, c, d);
  };
  k.dispatchEvent = function (a) {
    var b,
      c = this.Tb;
    if (c) for (b = []; c; c = c.Tb) b.push(c);
    c = this.Cf;
    var d = a.type || a;
    if ("string" === typeof a) a = new jj(a, c);
    else if (a instanceof jj) a.target = a.target || c;
    else {
      var e = a;
      a = new jj(d, c);
      oc(a, e);
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; !a.j && 0 <= f; f--) {
        var g = (a.i = b[f]);
        e = Mm(g, d, !0, a) && e;
      }
    a.j || ((g = a.i = c), (e = Mm(g, d, !0, a) && e), a.j || (e = Mm(g, d, !1, a) && e));
    if (b) for (f = 0; !a.j && f < b.length; f++) (g = a.i = b[f]), (e = Mm(g, d, !1, a) && e);
    return e;
  };
  k.K = function () {
    R.O.K.call(this);
    this.Ja && this.Ja.removeAll(void 0);
    this.Tb = null;
  };
  k.listen = function (a, b, c, d) {
    return this.Ja.add(String(a), b, !1, c, d);
  };
  k.bd = function (a, b, c, d) {
    return this.Ja.add(String(a), b, !0, c, d);
  };
  k.X = function (a, b, c, d) {
    return this.Ja.remove(String(a), b, c, d);
  };
  var Mm = function (a, b, c, d) {
    b = a.Ja.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.removed && g.capture == c) {
        var h = g.listener,
          l = g.nc || g.src;
        g.fc && uj(a.Ja, g);
        e = !1 !== h.call(l, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  R.prototype.Mb = function (a, b, c, d) {
    return this.Ja.Mb(String(a), b, c, d);
  };
  R.prototype.hasListener = function (a, b) {
    return this.Ja.hasListener(void 0 !== a ? String(a) : void 0, b);
  };
  var Nm = function (a) {
    R.call(this);
    this.Wa = null;
    this.Oa = [];
    this.update(a);
  };
  E(Nm, R);
  Nm.prototype.V = function (a) {
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
  Nm.prototype.update = function (a) {
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
  var Om = function (a) {
    a = void 0 === a ? {} : a;
    R.call(this);
    this.h = "EXPANDED";
    this.g = !1;
    this.update(a);
  };
  E(Om, R);
  Om.prototype.update = function (a) {
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
  var Pm = function (a) {
    var b = {};
    b = ((b.graveyardState = a.h), b);
    b.dirty = a.g;
    return b;
  };
  var Qm = function (a, b) {
    b = void 0 === b ? null : b;
    jj.call(this, "t");
    this.parentId = b;
  };
  E(Qm, jj);
  var Rm = function (a) {
    Uh.call(this, 0);
    this.j = !1;
    this.i = null;
    this.h = void 0;
    a && this.update(a);
  };
  E(Rm, Uh);
  Rm.prototype.update = function (a) {
    var b = a.time;
    b && ((a.hour = b.hour), (a.minute = b.minute), (a.second = b.second));
    (b = a.period) && !a.hour && (a.hour = Sm[b.toUpperCase()] || Sm.MORNING);
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
  var Tm = function (a) {
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
  Rm.prototype.clone = function () {
    return new Rm(Tm(this));
  };
  var Um = {},
    Sm = ((Um.MORNING = 9), (Um.AFTERNOON = 13), (Um.EVENING = 17), (Um.NIGHT = 20), Um);
  var Vm = function () {};
  Vm.prototype.ka = function () {
    return this.h;
  };
  Vm.prototype.getType = function () {
    return this.g;
  };
  Vm.prototype.update = function (a) {
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
      ? ((a = a.locationType.toUpperCase()), hc(Wm, a) && ((c = c || this.g != a), (this.g = a)))
      : this.g && ((this.g = void 0), (c = !0));
    return c;
  };
  var Wm = { Oh: "HOME", ck: "WORK" };
  var Xm = function () {},
    Zm = function (a) {
      if ("number" == typeof a) {
        var b = new Xm();
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
        a = Ym(a);
        b.j = [c, c];
        b.g = { lj: a, Qd: a };
        b.h = [];
        return b;
      }
      b = new Xm();
      b.i = a.id;
      b.l = -a.std_offset;
      b.j = a.names;
      b.g = a.names_ext;
      b.h = a.transitions;
      return b;
    },
    Ym = function (a) {
      var b = ["GMT"];
      b.push(0 >= a ? "+" : "-");
      a = Math.abs(a);
      b.push(L(Math.floor(a / 60) % 100, 2), ":", L(a % 60, 2));
      return b.join("");
    },
    $m = function (a, b) {
      b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36e5;
      for (var c = 0; c < a.h.length && b >= a.h[c]; ) c += 2;
      return 0 == c ? 0 : a.h[c - 1];
    },
    an = function (a, b) {
      a = a.l - $m(a, b);
      return -1440 === a ? 0 : a;
    };
  var cn = function () {
      this.h = [];
      this.g = O;
      bn(this, 1);
    },
    dn = [
      /^'(?:[^']|'')*('|$)/,
      /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
      /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/
    ],
    en = function (a) {
      return a.getHours ? a.getHours() : 0;
    };
  cn.prototype.format = function (a, b) {
    if (!a) throw Error("M");
    var c = b ? 6e4 * (a.getTimezoneOffset() - an(b, a)) : 0,
      d = c ? new Date(a.getTime() + c) : a,
      e = d;
    b &&
      d.getTimezoneOffset() != a.getTimezoneOffset() &&
      ((d = new Date(d.getTime() + 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset()))),
      (e = new Date(a.getTime() + (c + (0 < c ? -864e5 : 864e5)))));
    c = [];
    for (var f = 0; f < this.h.length; ++f) {
      var g = this.h[f].text;
      1 == this.h[f].type ? c.push(fn(this, g, a, d, e, b)) : c.push(g);
    }
    return c.join("");
  };
  var bn = function (a, b) {
      if (4 > b) var c = a.g.Fb[b];
      else if (8 > b) c = a.g.Mc[b - 4];
      else if (12 > b) (c = a.g.md[b - 8]), (c = c.replace("{1}", a.g.Fb[b - 8])), (c = c.replace("{0}", a.g.Mc[b - 8]));
      else if (12 === b) c = a.g.Fb[0].replace(/[^EMd]*yy*[^EMd]*/, "");
      else if (13 === b) c = a.g.Fb[2].replace(/[^EMd]*yy*[^EMd]*/, "");
      else {
        bn(a, 10);
        return;
      }
      b = c;
      for (gn && (b = b.replace(/\u200f/g, "")); b; ) {
        c = b;
        for (var d = 0; d < dn.length; ++d) {
          var e = b.match(dn[d]);
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
    hn = function (a, b) {
      b = String(b);
      a = a.g || O;
      if (void 0 !== a.Td) {
        for (var c = [], d = 0; d < b.length; d++) {
          var e = b.charCodeAt(d);
          c.push(48 <= e && 57 >= e ? String.fromCharCode(a.Td + e - 48) : b.charAt(d));
        }
        b = c.join("");
      }
      return b;
    },
    gn = !1,
    jn = function (a) {
      if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error("N");
    },
    kn = function (a, b) {
      jn(b);
      b = en(b);
      return a.g.ld[12 <= b && 24 > b ? 1 : 0];
    },
    fn = function (a, b, c, d, e, f) {
      var g = b.length;
      switch (b.charAt(0)) {
        case "G":
          return (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.g.od[c] : a.g.pd[c];
        case "y":
          return (c = d.getFullYear()), 0 > c && (c = -c), 2 == g && (c %= 100), hn(a, L(c, g));
        case "Y":
          return (
            (c = new Date(Nh(d.getFullYear(), d.getMonth(), d.getDate(), a.g.Xb, a.g.Wb)).getFullYear()),
            0 > c && (c = -c),
            2 == g && (c %= 100),
            hn(a, L(c, g))
          );
        case "M":
          a: switch (((c = d.getMonth()), g)) {
            case 5:
              g = a.g.Ed[c];
              break a;
            case 4:
              g = a.g.Cd[c];
              break a;
            case 3:
              g = a.g.Gd[c];
              break a;
            default:
              g = hn(a, L(c + 1, g));
          }
          return g;
        case "k":
          return jn(e), hn(a, L(en(e) || 24, g));
        case "S":
          return hn(a, (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).slice(2) + (3 < g ? L(0, g - 3) : ""));
        case "E":
          return (c = d.getDay()), 4 <= g ? a.g.Sd[c] : a.g.Id[c];
        case "a":
          return kn(a, e);
        case "b":
          return kn(a, e);
        case "B":
          return kn(a, e);
        case "h":
          return jn(e), hn(a, L(en(e) % 12 || 12, g));
        case "K":
          return jn(e), hn(a, L(en(e) % 12, g));
        case "H":
          return jn(e), hn(a, L(en(e), g));
        case "c":
          a: switch (((c = d.getDay()), g)) {
            case 5:
              g = a.g.Md[c];
              break a;
            case 4:
              g = a.g.Pd[c];
              break a;
            case 3:
              g = a.g.Od[c];
              break a;
            default:
              g = hn(a, L(c, 1));
          }
          return g;
        case "L":
          a: switch (((c = d.getMonth()), g)) {
            case 5:
              g = a.g.Ld[c];
              break a;
            case 4:
              g = a.g.Kd[c];
              break a;
            case 3:
              g = a.g.Nd[c];
              break a;
            default:
              g = hn(a, L(c + 1, g));
          }
          return g;
        case "Q":
          return (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.g.Hd[c] : a.g.Fd[c];
        case "d":
          return hn(a, L(d.getDate(), g));
        case "m":
          return jn(e), hn(a, L(e.getMinutes ? e.getMinutes() : 0, g));
        case "s":
          return jn(e), hn(a, L(e.getSeconds(), g));
        case "v":
          return (g = f || Zm(c.getTimezoneOffset())), g.i;
        case "V":
          return (
            (a = f || Zm(c.getTimezoneOffset())),
            2 >= g
              ? a.i
              : 0 < $m(a, c)
              ? void 0 !== a.g.Re
                ? a.g.Re
                : a.g.DST_GENERIC_LOCATION
              : void 0 !== a.g.Qd
              ? a.g.Qd
              : a.g.STD_GENERIC_LOCATION
          );
        case "w":
          return (
            (c = Nh(e.getFullYear(), e.getMonth(), e.getDate(), a.g.Xb, a.g.Wb)),
            hn(a, L(Math.floor(Math.round((c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) / 864e5) / 7) + 1, g))
          );
        case "z":
          return (a = f || Zm(c.getTimezoneOffset())), 4 > g ? a.j[0 < $m(a, c) ? 2 : 0] : a.j[0 < $m(a, c) ? 3 : 1];
        case "Z":
          return (
            (b = f || Zm(c.getTimezoneOffset())),
            4 > g
              ? ((g = -an(b, c)),
                (a = [0 > g ? "-" : "+"]),
                (g = Math.abs(g)),
                a.push(L(Math.floor(g / 60) % 100, 2), L(g % 60, 2)),
                (g = a.join("")))
              : (g = hn(a, Ym(an(b, c)))),
            g
          );
        default:
          return "";
      }
    };
  var ln = {
      yf: "y",
      ek: "y G",
      zf: "MMM y",
      Af: "MMMM y",
      fk: "MM/y",
      hf: "MMM d",
      jf: "MMMM dd",
      lf: "M/d",
      kf: "MMMM d",
      ni: "MMM d, y",
      wf: "EEE, MMM d",
      bk: "EEE, MMM d, y",
      Ne: "d",
      mi: "MMM d, h:mm\u202fa zzzz"
    },
    mn = ln;
  mn = ln;
  chrome.i18n.getMessage("7669846901402551021");
  chrome.i18n.getMessage("6510131849363684615");
  chrome.i18n.getMessage("6252259197986158120");
  chrome.i18n.getMessage("2973306402585941108");
  chrome.i18n.getMessage("4343848624651344174");
  chrome.i18n.getMessage("6579707685908557993");
  chrome.i18n.getMessage("3190546672187601036");
  chrome.i18n.getMessage("1122146167985532789");
  var nn = function (a) {
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
  E(nn, R);
  nn.prototype.getTime = function () {
    return this.i;
  };
  nn.prototype.update = function (a) {
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
      ? ((this.l = this.l || new Rm()), (c = this.l.update(c)))
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
        c.endDateTime ? ((this.g = this.g || new Rm()), (d = this.g.update(c.endDateTime) || d)) : this.g && ((this.g = null), (d = !0));
      }
    else (d = !!this.g || 0 != this.j), (this.g = null), (this.j = 0);
    b = d || b;
    c = a;
    c.dailyPattern
      ? ((c = c.dailyPattern),
        (e = c.dayPeriod || null),
        (d = this.o != e),
        (this.o = e),
        c.timeOfDay ? ((this.i = this.i || new Rm()), (d = this.i.update(c.timeOfDay) || d)) : this.i && ((this.i = null), (d = !0)))
      : ((d = !!this.o || !!this.i), (this.i = this.o = null));
    b = d || b;
    b = on(this, a) || b;
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
  var on = function (a, b) {
    if ("WEEKLY" != a.h || !b.weeklyPattern || !b.weeklyPattern.weekDay) return (b = !!a.A.length), ua(a.A), b;
    b = b.weeklyPattern.weekDay.map(function (d) {
      return vc(d);
    });
    var c = !Fa(b, a.A);
    a.A = za(b);
    return c;
  };
  var pn = function (a) {
    R.call(this);
    this.h = "INITIAL";
    this.u = this.v = null;
    this.o = "";
    this.g = this.j = this.i = null;
    this.l = !1;
    this.s = !0;
    a && this.update(a);
  };
  E(pn, R);
  pn.prototype.getState = function () {
    return this.h;
  };
  pn.prototype.update = function (a) {
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
    a.dueDate ? ((this.i = this.i || new Rm()), (b = this.i.update(a.dueDate) || b)) : this.i && ((this.i = null), (b = !0));
    a.location ? ((this.j = this.j || new Vm()), (b = this.j.update(a.location) || b)) : this.j && ((this.j = null), (b = !0));
    a.recurrenceInfo
      ? ((this.g = this.g || new nn()), (b = this.g.update(a.recurrenceInfo) || b), this.g.sa(this))
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
  var qn = function (a) {
    var b = {};
    b.title = a.o || "";
    !a.i || (b.dueDate = Tm(a.i));
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
        f.startDateTime = Tm(d.l);
        e.recurrenceStart = f;
      }
      d.j
        ? ((f = {}), (f.numOccurrences = d.j), (e.recurrenceEnd = f))
        : d.g && ((f = {}), (f.endDateTime = Tm(d.g)), (e.recurrenceEnd = f));
      if (d.i || d.o) {
        f = {};
        if (d.i) {
          var g = Tm(d.i);
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
  var rn = function (a) {
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
    a && a.last_update_timestamp ? (this.i = Xh(Wh.L(), a.last_update_timestamp)) : this.i && (pc(this.i), (this.i = null));
    b && this.dispatchEvent("k");
  };
  E(rn, R);
  rn.prototype.toString = function () {
    return this.g || R.prototype.toString.call(this);
  };
  rn.prototype.update = function (a) {
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
  rn.L = function () {
    return zh(rn);
  };
  var sn = chrome.i18n.getMessage("911698676339750373");
  var tn = function (a, b) {
    R.call(this);
    this.h = a || "";
    this.g = b || "WR";
  };
  E(tn, R);
  tn.prototype.getType = function () {
    return this.g;
  };
  var un = function (a) {
    M.call(this);
    this.j = a;
    this.i = {};
  };
  G(un, M);
  var vn = [];
  un.prototype.listen = function (a, b, c, d) {
    return wn(this, a, b, c, d);
  };
  var xn = function (a, b, c, d, e, f) {
      return wn(a, b, c, d, e, f);
    },
    wn = function (a, b, c, d, e, f) {
      Array.isArray(c) || (c && (vn[0] = c.toString()), (c = vn));
      for (var g = 0; g < c.length; g++) {
        var h = zj(b, c[g], d || a.handleEvent, e || !1, f || a.j || a);
        if (!h) break;
        a.i[h.key] = h;
      }
      return a;
    };
  un.prototype.bd = function (a, b, c, d) {
    return yn(this, a, b, c, d);
  };
  var yn = function (a, b, c, d, e, f) {
    if (Array.isArray(c)) for (var g = 0; g < c.length; g++) yn(a, b, c[g], d, e, f);
    else {
      b = yj(b, c, d || a.handleEvent, e, f || a.j || a);
      if (!b) return a;
      a.i[b.key] = b;
    }
    return a;
  };
  un.prototype.X = function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.X(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (d = vd(d) ? !!d.capture : !!d),
        (e = e || this.j || this),
        (c = Aj(c)),
        (d = !!d),
        (b = oj(a) ? a.Mb(b, c, d, e) : a ? ((a = Cj(a)) ? a.Mb(b, c, d, e) : null) : null),
        b && (Hj(b), delete this.i[b.key]);
    return this;
  };
  un.prototype.removeAll = function () {
    x(
      this.i,
      function (a, b) {
        this.i.hasOwnProperty(b) && Hj(a);
      },
      this
    );
    this.i = {};
  };
  un.prototype.K = function () {
    un.O.K.call(this);
    this.removeAll();
  };
  un.prototype.handleEvent = function () {
    throw Error("O");
  };
  var zn = function (a) {
    R.call(this);
    this.h = null;
    this.o = "O";
    this.l = "UNKNOWN_SHAREE_TYPE";
    this.i = "UNKNOWN_AUXILIARY_TYPE";
    this.s = this.j = this.u = this.v = this.g = null;
    this.A = new un(this);
    this.update(a);
    this.A.listen(rn.L(), "k", this.B);
  };
  E(zn, R);
  zn.prototype.getType = function () {
    return this.l;
  };
  zn.prototype.update = function (a) {
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
  zn.prototype.clone = function () {
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
    c = new zn(f);
    a && (c.g = new tn(b, a));
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
  zn.prototype.B = function () {
    var a = rn.L();
    a.g && (a.g || "") === this.h && ((this.i = "FAMILY"), this.dispatchEvent("z"));
  };
  var An = chrome.i18n.getMessage("3249966726137025950");
  var Bn = function () {
    jj.call(this, "E");
  };
  E(Bn, jj);
  var Cn = {
      Eh: "GLOBAL_CHECKED_LIST_ITEMS_POLICY",
      Fh: "GLOBAL_NEW_LIST_ITEM_PLACEMENT",
      gj: "SHARING_ENABLED",
      ak: "WEB_EMBEDS_ENABLED",
      Yj: "WEB_APP_THEME"
    },
    Dn = { nd: "DEFAULT", Gh: "GRAVEYARD" },
    En = { BOTTOM: "BOTTOM", TOP: "TOP" },
    Fn = new Qg(),
    Gn = function (a) {
      a = void 0 === a ? {} : a;
      R.call(this);
      this.h = this.i = this.g = null;
      this.o = this.l = !0;
      this.j = null;
      this.update(a);
    };
  E(Gn, R);
  Gn.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a) {
      var d = a[c];
      switch (c) {
        case "type":
          if (!hc(Cn, d)) continue;
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
          (d = Number(Fn.get(d))), (b = b || this.j != d), (this.j = d);
      }
    }
    return b;
  };
  Gn.prototype.Qb = function () {
    var a = this.getType();
    return a &&
      hc(Cn, a) &&
      ("GLOBAL_NEW_LIST_ITEM_PLACEMENT" !== a || (this.i && hc(En, this.i))) &&
      ("GLOBAL_CHECKED_LIST_ITEMS_POLICY" !== a || (this.h && hc(Dn, this.h))) &&
      ("WEB_APP_THEME" !== a || (null != this.j && hc(ge, this.j)))
      ? !0
      : !1;
  };
  Gn.prototype.getType = function () {
    return this.g;
  };
  Gn.prototype.V = function (a) {
    return a
      ? a === this
        ? !0
        : a.getType() === this.getType() && a.i == this.i && a.h == this.h && a.l === this.l && a.o === this.o && a.j === this.j
      : !1;
  };
  var Hn = function (a) {
    R.call(this);
    this.i = null;
    this.g = a.mainId;
    this.h = [];
    this.o = 0;
    this.j = new Yh(a.timestamps);
    this.l = null;
    this.update(a);
  };
  E(Hn, R);
  var In = function (a, b) {
    return ke(a.ka(), b.ka());
  };
  Hn.prototype.toString = function () {
    return this.i || R.prototype.toString.call(this);
  };
  Hn.prototype.ka = function () {
    return this.i || "";
  };
  var Kn = function (a, b) {
      a.i = b;
      Jn(a, new Uh());
    },
    Ln = function (a) {
      return !!a.j.g && !!a.j.g.valueOf();
    },
    Jn = function (a, b) {
      b = b || new Uh();
      a.j.h = b;
      $h(a.j, b);
      a.dispatchEvent("k");
    };
  Hn.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a)
      switch (c) {
        case "lastMerged":
          var d = Xh(Wh.L(), a[c]);
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
  var Mn = {
      Ac: "contextualCoachmarksAcked",
      qd: "familyChangeDateTime",
      rd: "isDirty",
      Bd: "linkedToAssistant",
      Kc: "settings",
      Jd: "singleSettings",
      Rd: "timestamps",
      Lc: (function (a, b) {
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
      this.s = new un(this);
      N(this, this.s);
      this.h = !1;
      this.j = new Yh();
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
        case Mn.Kc:
          var d = a[c];
          d = t(d ? d[Mn.Jd] : []);
          for (var e = d.next(); !e.done; e = d.next()) {
            var f = new Gn(e.value);
            if (f.Qb()) {
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
        case Mn.Rd:
          d = new Yh(a[c]);
          b = (b = b || d.getCreationTime() != this.j.getCreationTime()) || Zh(d) != Zh(this.j);
          this.j = d;
          break;
        case Mn.rd:
          b = this.h != a[c] || b;
          this.h = a[c];
          break;
        case Mn.Ac:
          b = Nn(this, a) || b;
          break;
        case Mn.qd:
          d = Xh(Wh.L(), a[c]);
          b = this.o ? b || !d.V(this.o) : !0;
          this.o = d;
          break;
        case Mn.Bd:
          this.v = a[c];
      }
    (b = On(this, a[Mn.Lc] || []) || b) && this.dispatchEvent("F");
    return b;
  };
  var On = function (a, b) {
      var c = !1,
        d = mc(a.g);
      b = t(b);
      for (var e = b.next(); !e.done; e = b.next()) {
        var f = e.value;
        e = f.mainId;
        var g = a.g[e];
        g ? (c = g.update(f) || c) : ((c = !0), (f = new Hn(f)), (a.g[e] = f), a.s.listen(f, "k", a.u));
        kc(d, e);
      }
      c = c || !jc(d);
      x(d, function (h, l) {
        kc(a.g, l);
      });
      return c;
    },
    Pn = function (a) {
      var b = void 0 === b ? !1 : b;
      var c = {};
      c[Mn.Kc] = {};
      var d = [];
      x(a.i, function (f) {
        if (f.Qb()) {
          var g = d.push,
            h = {};
          h.type = f.g;
          "GLOBAL_NEW_LIST_ITEM_PLACEMENT" === f.g && (h.globalNewListItemPlacementValue = f.i);
          "GLOBAL_CHECKED_LIST_ITEMS_POLICY" === f.g && (h.globalCheckedListItemsPolicyValue = f.h);
          "SHARING_ENABLED" === f.g && (h.sharingEnabledValue = f.l);
          "WEB_EMBEDS_ENABLED" === f.g && (h.webEmbedsEnabledValue = f.o);
          if ("WEB_APP_THEME" === f.g) {
            if (!Fn.i) {
              var l = new Fn.constructor();
              l.g = Fn.h;
              l.h = Fn.g;
              l.i = Fn;
              Fn.i = l;
            }
            h.webAppThemeValue = Fn.i.get(String(f.j));
          }
          g.call(d, h);
        }
      });
      c[Mn.Kc][Mn.Jd] = d;
      c[Mn.Rd] = ai(a.j);
      c[Mn.Ac] = Array.from(a.l);
      c[Mn.Lc] = fc(a.g).map(function (f) {
        var g = {};
        g.mainId = f.g;
        g.mergedIds = f.h;
        g.name = f.i;
        g.revision = f.o;
        g.timestamps = ai(f.j);
        g.lastMerged = f.l ? Wh.L().format(f.l) : "1970-01-01T00:00:00.000Z";
        return g;
      });
      if (a.o) {
        var e = Wh.L();
        c[Mn.qd] = e.format(a.o);
      }
      null !== a.v && (c[Mn.Bd] = a.v);
      b && (c[Mn.rd] = a.h);
      return c;
    };
  xc.prototype.u = function () {
    $h(this.j, new Uh());
    this.h = !0;
    this.dispatchEvent("F");
  };
  var Nn = function (a, b) {
      var c = !1,
        d = new Set(a.l);
      b = t(b[Mn.Ac] || []);
      for (var e = b.next(); !e.done; e = b.next()) (e = e.value), a.l.has(e) ? d.delete(e) : (a.l.add(e), (c = !0));
      c = c || !jc(d);
      d.forEach(function (f) {
        return a.l.delete(f);
      });
      return c;
    },
    Qn = function (a) {
      return Zb(a.g, function (b) {
        return !Ln(b);
      });
    },
    Rn = function (a) {
      var b = [];
      x(a.g, function (c) {
        if (!Ln(c)) {
          var d = In || Ga;
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
    Sn = function (a, b) {
      return (a = ic(a.g, function (c) {
        return c.ka().toLowerCase() == b.toLowerCase();
      })) && !Ln(a)
        ? a
        : null;
    },
    Tn = function (a, b) {
      var c = a.g[b];
      if (c && !Ln(c)) return c;
      for (var d in a.g) if (((c = a.g[d]), !Ln(c) && c.h.includes(b))) return c;
      return null;
    };
  xc.L = function () {
    return zh(xc);
  };
  var Ed = "function" === typeof URL;
  var zc = function (a) {
      this.Qb = a;
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
  var Un = function (a) {
    this.ea = void 0;
    this.ia = {};
    if (a) {
      var b = qi(a);
      a = pi(a);
      for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
    }
  };
  Un.prototype.set = function (a, b) {
    Vn(this, a, b, !1);
  };
  Un.prototype.add = function (a, b) {
    Vn(this, a, b, !0);
  };
  var Vn = function (a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      a.ia[f] || (a.ia[f] = new Un());
      a = a.ia[f];
    }
    if (d && void 0 !== a.ea) throw Error("P`" + b);
    a.ea = c;
  };
  Un.prototype.get = function (a) {
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
  Un.prototype.ja = function () {
    var a = [];
    Wn(this, a);
    return a;
  };
  var Wn = function (a, b) {
    void 0 !== a.ea && b.push(a.ea);
    for (var c in a.ia) Wn(a.ia[c], b);
  };
  Un.prototype.Ea = function (a) {
    var b = [];
    if (a) {
      for (var c = this, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (!c.ia[e]) return [];
        c = c.ia[e];
      }
      Xn(c, a, b);
    } else Xn(this, "", b);
    return b;
  };
  var Xn = function (a, b, c) {
    void 0 !== a.ea && c.push(b);
    for (var d in a.ia) Xn(a.ia[d], b + d, c);
  };
  k = Un.prototype;
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
    return new Un(this);
  };
  k.W = function () {
    return oi(this.ja());
  };
  k.ha = function () {
    return void 0 === this.ea && jc(this.ia);
  };
  var z = function (a) {
    R.call(this);
    this.g = a.id;
    if (!this.g) throw Error("R");
    this.U = this.j = null;
    this.u = new Yh(a.timestamps);
    this.s = {};
    this.Z = new un(this);
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
    this.Ha = this.R = this.Sb = this.tc = null;
    this.Bb = !1;
    this.v = {};
    this.B = new aj();
    this.ba = [];
    this.xb = null;
    this.Ia = new Un();
    this.jb = this.ta = this.S = null;
    this.gb = !1;
    this.Va = void 0;
    this.kb = {};
    this.Rb = !1;
    this.update(a);
  };
  E(z, R);
  var Yn = function () {
    return new Date().getTime() + "." + Math.round(2147483648 * Math.random());
  };
  z.prototype.getType = function () {
    return this.J;
  };
  z.prototype.getCreationTime = function () {
    return this.u.getCreationTime();
  };
  var Zn = function (a) {
    a.i = !0;
    a.notify();
  };
  z.prototype.notify = function () {
    this.dispatchEvent("k");
  };
  var ao = function (a) {
      return Rc(a) || $n(a);
    },
    Rc = function (a) {
      return "NOTE" === a.J;
    },
    $n = function (a) {
      return "LIST" === a.J;
    },
    bo = function (a) {
      return "LIST_ITEM" === a.J;
    },
    co = function (a) {
      return "BLOB" === a.J;
    },
    ho = function (a, b, c) {
      a.G = b;
      b > eo || b < fo ? a.dispatchEvent(new Qm(3, a.U)) : (a.Ca && ao(a)) || c || (a.j && (go(a.j, !0), Zn(a.j)), Zn(a));
    };
  z.prototype.ha = function (a) {
    a = void 0 === a ? !1 : a;
    return (
      !(
        (this.D && this.D.trim()) ||
        this.h ||
        io(this) ||
        (this.A && this.A.trim()) ||
        (!a && this.o && "DELETED" != this.o.h) ||
        !jc(Hc(this.B))
      ) &&
      dc(this.s, function (b) {
        return 0 != b.l || (!co(b) && b.ha(a));
      })
    );
  };
  var jo = function (a, b) {
      a.Ca = b;
      x(a.s, function (c) {
        return jo(c, b);
      });
    },
    go = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c = new Uh();
      $h(a.u, c);
      b && (ao(a) ? (a.u.h = c) : a.j && ((a.j.u.h = c), $h(a.j.u, c), Zn(a.j)));
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
          d.Da ? (e = d.Da.update(h) || e) : ((d.Da = new hj(h)), (e = !0));
          break;
        case "lastModifierEmail":
          d.Sb = h.toLowerCase();
          break;
        case "nodeSettings":
          "LIST" === a.type || "NOTE" === a.type ? (d.F ? (e = d.F.update(h) || e) : (ko(d, new Om(h)), (e = !0))) : d.F && ko(d, null);
          break;
        case "reminder":
          if (d.o) (h = d.o.update(h)), (e = e || h), h && d.dispatchEvent("u");
          else {
            h = new pn(h);
            d.o && (d.Z.X(d.o, "k", d.zb), d.o.ga());
            if ((d.o = h)) d.Z.listen(h, "k", d.zb), h.sa(d);
            d.dispatchEvent("u");
            e = !0;
          }
          break;
        case "shareState":
          if ("NEW" === d.ya || "NONE" === d.ya || ("NEW" != h && "NONE" != h)) (e = e || d.ya != h), (d.ya = h);
          break;
        case "sharerEmail":
          d.tc = h.toLowerCase();
          break;
        case "showAvailableInShoppingNotification":
          e = e || d.Va != h;
          d.Va = !!h;
          break;
        case "title":
          l = d.D != h;
          f = f || l;
          e = e || l;
          c && d.D != h ? lo(d, a, b, c) : (d.D = h);
          break;
        case "xplatModel":
          d.Rb = h;
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
          c && l ? lo(d, a, b, c) : (d.j && l && mo(d.j, d.g, h, d.A), (d.A = h));
          break;
        case "blob":
          d.h ? (e = d.h.update(h) || e) : ((d.h = new Cm(h)), (e = !0));
          break;
        case "sourceBlobId":
          d.jb = h;
      }
    });
    e = no(this, a) || e;
    e = oo(this, a) || e;
    e = po(this, a.labelIds || []) || e;
    var g = a.annotationsGroup;
    g && (e = this.B.update(g) || e);
    e && this.notify();
    return f ? 2 : e ? 1 : 0;
  };
  var no = function (a, b) {
      var c = !1;
      if (Wi(dd(), "n_eil")) {
        var d = b.superListItemId || null;
        b = b.superListItemServerId || null;
        c = (c = d != a.S) || b != a.ta;
        a.S = d;
        a.ta = b;
      }
      return c;
    },
    lo = function (a, b, c, d) {
      d = void 0 === d ? null : d;
      var e = null;
      d && d.h === a.g && (e = d.g);
      b = bo(a) ? b.text : b.title;
      d = bo(a) ? a.A : a.D;
      if (d !== b && null != d && null != b) {
        var f = !1,
          g = a;
        do {
          if (g.hasListener("E")) {
            f = !0;
            break;
          }
          g = g.Tb;
        } while (g);
        f
          ? a.dispatchEvent(new Bn(d, e, c, b, a.ca))
          : ((e = (c = bo(a)) ? a.A : a.D),
            (d = b != e),
            c ? (a.A = b) : (a.D = b),
            null != b && d && a.j && mo(a.j, a.g, b, e),
            d && qo(a),
            b != b ? ((a.wa = !0), Zn(a)) : d && a.notify());
        a.ca = b;
      }
    },
    ro = function (a, b) {
      b.baseVersion && (a.Ua = b.baseVersion);
    },
    so = function (a) {
      var b = {};
      b.id = a.g;
      b.kind = "notes#node";
      b.parentId = a.U || "root";
      b.timestamps = ai(a.u);
      b.type = a.J;
      b.trashState = a.ua;
      a.R && (b.serverId = a.R);
      a.Ha && (b.parentServerId = a.Ha);
      b.deletionState = a.l;
      if (1 === a.l) return co(a) && a.h && (b.blob = Km(a.h)), b;
      b.sortValue = a.G;
      a.Ua && (b.baseVersion = a.Ua);
      -1 != a.hb && (b.baseNoteRevision = a.hb);
      if (ao(a)) {
        b.title = a.D || "";
        b.isArchived = a.fb;
        b.isPinned = a.gb;
        void 0 !== a.Va && (b.showAvailableInShoppingNotification = a.Va);
        a.Ba && (b.color = a.Ba);
        a.Da && (b.background = ij(a.Da));
        a.o && (b.reminder = qn(a.o));
        a.F && (b.nodeSettings = Pm(a.F));
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
        io(a) && "NONE" != a.ya && (b.shareState = a.ya);
        if (a.xb) {
          var e = {};
          b.abuseFeedback = ((e.type = a.xb), e);
        }
        if (!jc(a.v)) {
          var f = Wh.L();
          b.labelIds = fc(a.v).map(function (g) {
            var h = {};
            return (h.labelId = g.id), (h.deleted = g.g ? f.format(g.g) : "1970-01-01T00:00:00.000Z"), h;
          });
        }
        jc(a.B.g) || (b.annotationsGroup = bj(a.B));
      } else
        bo(a)
          ? ((b.text = a.A || ""),
            (b.checked = a.xa),
            Wi(dd(), "n_eil") &&
              (void 0 !== a.S && (b.superListItemId = a.S || ""), void 0 !== a.ta && (b.superListItemServerId = a.ta || "")))
          : co(a) && a.h && (b.blob = Jm(a.h, !0));
      b.isDirty = a.i;
      a.ca && (b.lastSyncedText = a.ca);
      a.jb && (b.sourceBlobId = a.jb);
      return b;
    };
  z.prototype.clone = function () {
    var a = new z(so(this));
    x(this.s, function (b) {
      to(a, b.clone());
    });
    x(this.N, function (b) {
      uo(a, b.clone());
    });
    a.u.update(ai(this.u));
    jo(a, this.Ca);
    return a;
  };
  z.prototype.duplicate = function () {
    var a = so(this),
      b = Yn();
    a.id = b;
    vo.forEach(function (e) {
      return delete a[e];
    });
    co(this) && this.h && ((a.sourceBlobId = this.g), delete a.blob);
    var c = new z(a),
      d = new Map();
    x(this.s, function (e) {
      if (0 == e.l) {
        var f = e.duplicate();
        f.G || ho(f, 1);
        wo(f, b);
        to(c, f);
        d.set(e.g, f);
      }
    });
    $n(c) &&
      xo(this).forEach(function (e) {
        var f = e.S;
        if (f && ((e = d.get(e.g)), (f = d.get(f)), e && f)) {
          if (f && (!bo(e) || !bo(f))) throw Error("$");
          if (f && f.g in e.kb) {
            if (!bo(e) || !bo(f)) throw Error("$");
            f.S = null;
            f.ta = null;
            delete e.kb[f.g];
            Zn(e);
          }
          null === f ? ((e.S = null), (e.ta = null)) : ((e.S = f.g), (e.ta = f.R), (f.kb[e.g] = e));
        }
      });
    ao(c) && go(c, !0);
    return c;
  };
  z.prototype.getTitle = function () {
    if (!ao(this)) throw Error("S");
    return this.D || "";
  };
  z.prototype.setTitle = function (a) {
    if (!ao(this)) throw Error("S");
    if (19999 < a.length) throw Error("T");
    this.wa || (this.ca = this.D || "");
    this.D = a;
    go(this, !0);
    qo(this);
    this.wa = !0;
    Zn(this);
  };
  var yo = function (a) {
      if (!ao(a)) throw Error("U`" + a.J);
      return a.Ba || "DEFAULT";
    },
    zo = function (a) {
      return -1 === a.ua || 1 === a.ua;
    },
    qo = function (a) {
      a.o && a.dispatchEvent("v");
    };
  z.prototype.zb = function (a) {
    go(this);
    a.target = this;
    this.dispatchEvent("u");
  };
  var ko = function (a, b) {
    if (ao(a) && b !== a.F) {
      a.F && (a.Z.X(a.F, "y", a.Ab), a.F.ga());
      if ((a.F = b)) a.Z.listen(b, "y", a.Ab), b.sa(a);
      a.dispatchEvent("k");
    }
  };
  z.prototype.Ab = function (a) {
    go(this);
    this.i = this.i || this.F.g;
    a.target = this;
    this.dispatchEvent("k");
  };
  var io = function (a) {
      return bc(a.N, function (b) {
        var c;
        if ((c = "O" != b.o)) b.g ? ((b = b.g.getType()), (b = "M_RM" == b || "RM" == b)) : (b = !1), (c = !b);
        return c;
      });
    },
    uo = function (a, b) {
      b.sa(a);
      a.N[b.h || ""] = b;
      b.dispatchEvent("A");
    },
    oo = function (a, b) {
      for (var c = !1, d = mc(a.N), e = t(b.roleInfo || []), f = e.next(); !f.done; f = e.next()) {
        f = f.value;
        var g = f.email;
        g && ((g = g.toLowerCase()), g in a.N ? ((c = a.N[g].update(f) || c), delete d[g]) : (uo(a, new zn(f)), (c = !0)));
      }
      c = c || !jc(d);
      x(d, function (h) {
        var l = h.g;
        (!l || ("M_WR" !== l.getType() && "WR" !== l.getType())) && delete a.N[h.h || ""];
      });
      return (c = Ao(a, b, c) || c);
    },
    Ao = function (a, b, c) {
      var d = !1,
        e = {};
      b = t(b.errorStatus || []);
      for (var f = b.next(); !f.done; f = b.next()) {
        f = f.value;
        var g = f.code;
        "TMS" != g && (e[g] = new Nm(f));
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
    Co = function (a) {
      return Object.values(a.v)
        .filter(function (b) {
          return !Bo(b);
        })
        .map(function (b) {
          return b.id;
        });
    },
    Fo = function (a, b) {
      !ao(a) || Do(a, b) || Ln(b) || (Jn(b), (a.v[b.g] = new Eo(b.g)), go(a), Zn(a), a.dispatchEvent("D"));
    },
    Do = function (a, b) {
      return [b.g].concat(md(b.h)).some(function (c) {
        return a.v[c] && !Bo(a.v[c]);
      });
    },
    po = function (a, b) {
      Wh.L();
      var c = !1,
        d = mc(a.v);
      b = t(b);
      for (var e = b.next(); !e.done; e = b.next()) {
        var f = e.value;
        e = f.labelId;
        a.v[e] || ((a.v[e] = new Eo(e)), (c = !0));
        if ((f = f.deleted)) {
          f = Xh(0, f);
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
    to = function (a, b) {
      if (b.U && b.U != a.g) throw Error("V");
      if (!a.s[b.g]) {
        a.s[b.g] = b;
        N(a, b);
        a.Z.listen(b, "k", a.yb);
        b.sa(a);
        b.j = a;
        wo(b, a.g);
        b.Ha = a.R;
        b.Bb = !1;
        jo(b, a.Ca);
        if (void 0 === b.G) {
          var c;
          if ((c = !co(b))) (c = xc.L().i.GLOBAL_NEW_LIST_ITEM_PLACEMENT), (c = !!c && "TOP" == c.i);
          c = c ? Go(a) : Ho(a);
          ho(b, c, !0);
        }
        bo(b) && mo(a, b.g, Uc(b));
        c = !1;
        Rc(a) && bo(b) && 2 <= xo(a).length && ((a.J = "LIST"), go(a, !0), Zn(a), (c = !0));
        if (b.i || c) go(a, !0), qo(a), Zn(a);
      }
    };
  z.prototype.getChildren = function () {
    return this.s;
  };
  var Io = function (a) {
      return fc(a.s).filter(function (b) {
        return co(b) && 0 == b.l;
      });
    },
    Jo = function (a) {
      a = Io(a);
      a.sort(wc);
      return a;
    },
    Lo = function (a) {
      return Jo(a)
        .map(function (b) {
          return Ko(b);
        })
        .filter(function (b) {
          return !!b && "IMAGE" === b.getType();
        });
    },
    No = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      return Io(a).some(function (d) {
        d = "IMAGE" !== b || c ? Mo(d) : Ko(d);
        return !!d && (!b || d.getType() === b);
      });
    };
  z.prototype.matches = function (a) {
    var b = Oo(this, a.getTokens());
    b =
      (b =
        (b =
          (b =
            (b =
              (b =
                (b =
                  (b =
                    (b = (b = (b = (b = b && Po(this, a.D())) && Qo(this, a.h())) && Ro(this, a.i())) && So(this, a.j())) &&
                    (a.g() ? yo(this) === a.g() : !0)) && (a.u() ? !!this.o : !0)) && (a.A() ? $n(this) : !0)) &&
              (a.B() ? io(this) : !0)) && (a.l() ? No(this, "AUDIO") : !0)) && (a.s() ? No(this, "IMAGE", !0) : !0)) &&
        (a.o() ? No(this, "DRAWING") : !0)) && (a.v() ? !!cj(this.B) || !jc(Hc(this.B)) || To.test(Uo(this).toLowerCase()) : !0);
    return !!b;
  };
  var Oo = function (a, b) {
      for (var c = Uo(a), d = Lo(a), e = 0; e < d.length; e++) {
        var f = d[e].D || "";
        f && (c += "\n" + f);
      }
      io(a) &&
        x(a.N, function (h) {
          var l = c,
            m = "\n" + (h.h || "") + " ",
            p = rn.L();
          h = "FAMILY" == h.i && p.g && (p.g || "") === h.h && !h.j ? rn.L().h || sn : "FAMILY" != h.i || h.j ? h.j : An;
          c = l + (m + (h || ""));
        });
      x(Hc(a.B), function (h) {
        h = h.g;
        c += "\n" + h.Qa() + " " + h.getTitle();
      });
      (d = (d = (d = cj(a.B)) ? d.j : null) ? d.g : null) && (c += "\n" + d.Qa() + " " + d.getTitle());
      var g = xc.L();
      x(a.v, function (h, l) {
        (h = Tn(g, l)) && (c += "\n" + h.ka());
      });
      x(dj(a.B), function (h) {
        (h = h.i) && (c += "\n" + ki[h.g || "THING_CATEGORY_UNKNOWN"]);
      });
      x(ej(a.B), function (h) {
        (h = h.h) && (c += "\n" + Lh[h.g || "SUGGEST_TYPE_UNKNOWN"]);
      });
      c = c.toLowerCase();
      a = 0;
      for (d = void 0; (d = b[a]); a++) if (-1 === c.indexOf(d)) return !1;
      return !0;
    },
    Po = function (a, b) {
      return b.every(function (c) {
        return c in a.N;
      });
    },
    Qo = function (a, b) {
      return b.every(function (c) {
        return bc(dj(a.B), function (d) {
          d = d.i;
          return !!d && (d.g || "THING_CATEGORY_UNKNOWN") === c;
        });
      });
    },
    Ro = function (a, b) {
      return b.every(function (c) {
        return bc(ej(a.B), function (d) {
          d = d.h;
          return !!d && (d.g || "SUGGEST_TYPE_UNKNOWN") === c;
        });
      }, a);
    },
    So = function (a, b) {
      var c = xc.L();
      return b.every(function (d) {
        d = Sn(c, d);
        return !!d && Do(a, d);
      });
    },
    Uo = function (a) {
      return [a.D || "", a.A || ""]
        .concat(
          md(
            xo(a).map(function (b) {
              return Uc(b);
            })
          )
        )
        .join("\n");
    };
  z.prototype.isSelected = function () {
    return !1;
  };
  var Ho = function (a) {
      var b = eo;
      x(a.s, function (c) {
        b = Math.min(b, c.G);
      });
      return b == eo ? 0 : b - Vo;
    },
    Go = function (a) {
      var b = fo;
      x(a.s, function (c) {
        b = Math.max(b, c.G);
      });
      return b == fo ? 0 : b + Vo;
    };
  z.prototype.yb = function (a) {
    a.target.i && qo(this);
  };
  var Sc = function (a) {
      if (!Rc(a)) throw Error("X");
      return (a = xo(a)[0]) ? Uc(a) : "";
    },
    Wo = function (a, b) {
      if (!Rc(a)) throw Error("X");
      if (!Rc(a)) throw Error("W");
      var c = xo(a)[0];
      if (!c) {
        c = a.g;
        var d = {};
        c = new z(((d.id = Yn()), (d.type = "LIST_ITEM"), (d.parentId = c), d));
        to(a, c);
        a.dispatchEvent(new Lm(c));
      }
      a = c;
      if (!bo(a)) throw Error("aa");
      19999 < b.length || (a.j && mo(a.j, a.g, b, a.A), a.wa || (a.ca = a.A || ""), (a.A = b), go(a, !0), (a.wa = !0), Zn(a));
    },
    mo = function (a, b, c, d) {
      var e = a.s;
      if (!(null !== e && b in e)) throw Error("Y");
      c = c.toLowerCase().trim();
      (d && d.toLowerCase().trim() === c) ||
        (d && Xo(a, b, d), 30 >= c.length && ((d = a.Ia.get(c)) || (d = new Set()), d.add(b), a.Ia.set(c, d)));
    },
    Xo = function (a, b, c) {
      c = c.toLowerCase().trim();
      if (!(30 < c.length)) {
        var d = a.Ia.get(c);
        if (!d) throw Error("Z");
        d.delete(b);
        d.size ? a.Ia.set(c, d) : a.Ia.remove(c);
      }
    },
    xo = function (a) {
      var b = [],
        c;
      for (c in a.s) {
        var d = a.s[c];
        bo(d) && 0 == d.l && b.push(d);
      }
      return b;
    },
    Tc = function (a) {
      var b = void 0 === b ? !1 : b;
      a = xo(a);
      a.sort(b ? wc : yc);
      return a;
    },
    wo = function (a, b) {
      a.U !== b && ((a.U = b), a.Ca || a.notify());
    };
  z.prototype.getParent = function () {
    return this.j;
  };
  var Uc = function (a) {
      if (!bo(a)) throw Error("aa");
      return a.A || "";
    },
    Mo = function (a) {
      return co(a) ? a.h : null;
    },
    Ko = function (a) {
      if (!co(a)) throw Error("ba");
      return a.h && (Fm(a.h) || Gm(a.h) || Hm(a.h)) ? (Fm(a.h) || (Gm(a.h) && !a.h.i) ? a.h : a.h.i) : null;
    },
    To = RegExp(
      "(?:(https?|ftp)://)?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.][\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*\\.(?:(?:xn--)*[a-zA-Z0-9]{2,63})(?:[\\.]?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.]*[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*)?"
    ),
    vo = Object.freeze(
      "annotationsGroup isArchived isDirty isPinned lastSyncedText parentServerId reminder baseVersion baseNoteRevision serverId shareState roleInfo showAvailableInShoppingNotification timestamps".split(
        " "
      )
    ),
    Vo = Math.pow(2, 20),
    eo = Math.pow(2, 50) - 1,
    fo = -Math.pow(2, 50),
    Eo = function (a) {
      this.id = a;
      this.g = null;
    },
    Bo = function (a) {
      return !!a.g && !!a.g.valueOf();
    };
  var Yo = Ld(["http://goo.gl/forms/r40gTO4BTb"]),
    Zo = Ld(["https://keep.google.com"]),
    $o = (function (a) {
      for (var b = kd.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
      return new Cc(c.join(""), Dc);
    })(Yo),
    ap = (function (a) {
      var b = kd.apply(1, arguments);
      if (0 === b.length) return zg(a[0]);
      for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
      return zg(c);
    })(Zo);
  Fc(ap.toString());
  var bp = chrome.i18n.getMessage("2633701539319779732"),
    cp = chrome.i18n.getMessage("577539731512680648"),
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
  var dp = function () {
      this.g = new Map();
    },
    ep = function (a, b) {
      a.g.forEach(function (c) {
        return c(b);
      });
    };
  var fp = function (a) {
    this.g = a;
  };
  var gp = function (a) {
    this.I = v(a);
  };
  E(gp, J);
  var hp = function (a) {
    this.I = v(a);
  };
  E(hp, J);
  var ip = function (a) {
    this.I = v(a);
  };
  E(ip, J);
  var jp = function (a) {
    this.I = v(a);
  };
  E(jp, J);
  jp.Ka = [2];
  var ed = function (a) {
    this.I = v(a);
  };
  E(ed, J);
  ed.Ka = [1];
  var kp = function (a) {
    this.I = v(a);
  };
  E(kp, J);
  var lp = function () {
    this.i = this.g = null;
  };
  lp.prototype.initialize = function (a, b) {
    this.g = a;
    this.i = b;
    return this;
  };
  var mp = function (a, b) {
      b = a.i.h[b.g].Uc();
      b.initialize(a.g, a.i);
      return b;
    },
    np = function (a) {
      var b = yf(a.g, kp, 5);
      null == b && ((b = new kp()), C(a.g, 5, b));
      return b;
    },
    op = function (a) {
      yf(a.g, hp, 8);
      var b = yf(a.g, kp, 5);
      null != b && ((b = b.clone()), C(a.g, 5, b));
      return a.g;
    };
  lp.prototype.Qb = function () {
    return !0;
  };
  var pp = function () {
    lp.call(this);
    this.h = null;
  };
  E(pp, lp);
  var qp = function (a) {
      if (!a.h) {
        a.h = new gj();
        var b = np(a);
        C(b, 39, a.h);
      }
      return a.h;
    },
    sp = function (a) {
      var b = !rp.L().pc();
      a = qp(a);
      Cf(a, 22, b);
    },
    tp = new fp("keep_builder");
  var up = function () {};
  up.prototype.Uc = function () {
    return new pp();
  };
  var vp = function (a) {
    this.I = v(a);
  };
  E(vp, J);
  var wp = function () {
    this.g = new vp();
  };
  wp.prototype.h = function (a) {
    C(a, 17, this.g);
  };
  var ad = { navigate: 2, reload: 3, back_forward: 4, prerender: 5 };
  var xp = function (a) {
    this.I = v(a);
  };
  E(xp, J);
  var fd = function (a) {
    this.I = v(a);
  };
  E(fd, J);
  fd.prototype.setAccessLevel = function (a) {
    return C(this, 12, a);
  };
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
  var Bp = function (a) {
    this.I = v(a);
  };
  E(Bp, J);
  var Cp = function (a) {
    this.I = v(a);
  };
  E(Cp, J);
  var Dp = function (a) {
    this.I = v(a);
  };
  E(Dp, J);
  Dp.prototype.getDevice = function () {
    return yf(this, Bp, 9);
  };
  Dp.prototype.getParent = function () {
    return yf(this, Cp, 11);
  };
  var Ep = function () {
      this.i = new zp();
      this.h = null;
      this.j = new yp();
      $c(this.j, 1, 6);
      this.g = null;
    },
    cd = function (a) {
      null == a.h && (a.h = new Dp());
      return a.h;
    };
  var Fp = function (a, b) {
    this.i = a;
    this.j = b;
    this.h = 0;
    this.g = null;
  };
  Fp.prototype.get = function () {
    if (0 < this.h) {
      this.h--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.i();
    return a;
  };
  var Gp = function (a, b) {
    a.j(b);
    100 > a.h && (a.h++, (b.next = a.g), (a.g = b));
  };
  var Hp,
    Ip = function () {
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
            var e = c.Wd;
            c.Wd = null;
            e();
          }
        };
        return function (e) {
          d.next = { Wd: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        n.setTimeout(e, 0);
      };
    };
  var Jp = function () {
    this.h = this.g = null;
  };
  Jp.prototype.add = function (a, b) {
    var c = Kp.get();
    c.set(a, b);
    this.h ? (this.h.next = c) : (this.g = c);
    this.h = c;
  };
  Jp.prototype.remove = function () {
    var a = null;
    this.g && ((a = this.g), (this.g = this.g.next), this.g || (this.h = null), (a.next = null));
    return a;
  };
  var Kp = new Fp(
      function () {
        return new Lp();
      },
      function (a) {
        return a.reset();
      }
    ),
    Lp = function () {
      this.next = this.scope = this.Pa = null;
    };
  Lp.prototype.set = function (a, b) {
    this.Pa = a;
    this.scope = b;
    this.next = null;
  };
  Lp.prototype.reset = function () {
    this.next = this.scope = this.Pa = null;
  };
  var Mp,
    Np = !1,
    Op = new Jp(),
    Qp = function (a, b) {
      Mp || Pp();
      Np || (Mp(), (Np = !0));
      Op.add(a, b);
    },
    Pp = function () {
      if (n.Promise && n.Promise.resolve) {
        var a = n.Promise.resolve(void 0);
        Mp = function () {
          a.then(Rp);
        };
      } else
        Mp = function () {
          var b = Rp;
          "function" !== typeof n.setImmediate ||
          (n.Window && n.Window.prototype && (ha() || !q("Edge")) && n.Window.prototype.setImmediate == n.setImmediate)
            ? (Hp || (Hp = Ip()), Hp(b))
            : n.setImmediate(b);
        };
    },
    Rp = function () {
      for (var a; (a = Op.remove()); ) {
        try {
          a.Pa.call(a.scope);
        } catch (b) {
          ba(b);
        }
        Gp(Kp, a);
      }
      Np = !1;
    };
  var Tp = function (a) {
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
              Sp(b, 2, c);
            },
            function (c) {
              Sp(b, 3, c);
            }
          );
        } catch (c) {
          Sp(this, 3, c);
        }
    },
    Up = function () {
      this.next = this.context = this.h = this.j = this.g = null;
      this.i = !1;
    };
  Up.prototype.reset = function () {
    this.context = this.h = this.j = this.g = null;
    this.i = !1;
  };
  var Vp = new Fp(
      function () {
        return new Up();
      },
      function (a) {
        a.reset();
      }
    ),
    Wp = function (a, b, c) {
      var d = Vp.get();
      d.j = a;
      d.h = b;
      d.context = c;
      return d;
    },
    Yp = function (a, b, c) {
      Xp(a, b, c, null) || Qp(ee(b, a));
    },
    Zp = function (a) {
      return new Tp(function (b) {
        var c = a.length,
          d = [];
        if (c)
          for (
            var e = function (h, l, m) {
                c--;
                d[h] = l ? { If: !0, value: m } : { If: !1, reason: m };
                0 == c && b(d);
              },
              f = 0,
              g;
            f < a.length;
            f++
          )
            (g = a[f]), Yp(g, ee(e, f, !0), ee(e, f, !1));
        else b(d);
      });
    };
  Tp.prototype.then = function (a, b, c) {
    return $p(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
  };
  Tp.prototype.$goog_Thenable = !0;
  var bq = function (a, b) {
    b = Wp(b, b);
    b.i = !0;
    aq(a, b);
  };
  Tp.prototype.v = function (a, b) {
    return $p(this, null, a, b);
  };
  Tp.prototype.catch = Tp.prototype.v;
  Tp.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new cq(a);
      Qp(function () {
        dq(this, b);
      }, this);
    }
  };
  var dq = function (a, b) {
      if (0 == a.g)
        if (a.i) {
          var c = a.i;
          if (c.h) {
            for (var d = 0, e = null, f = null, g = c.h; g && (g.i || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
            e &&
              (0 == c.g && 1 == d ? dq(c, b) : (f ? ((d = f), d.next == c.j && (c.j = d), (d.next = d.next.next)) : eq(c), fq(c, e, 3, b)));
          }
          a.i = null;
        } else Sp(a, 3, b);
    },
    aq = function (a, b) {
      a.h || (2 != a.g && 3 != a.g) || gq(a);
      a.j ? (a.j.next = b) : (a.h = b);
      a.j = b;
    },
    $p = function (a, b, c, d) {
      var e = Wp(null, null, null);
      e.g = new Tp(function (f, g) {
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
                void 0 === l && h instanceof cq ? g(h) : f(l);
              } catch (m) {
                g(m);
              }
            }
          : g;
      });
      e.g.i = a;
      aq(a, e);
      return e.g;
    };
  Tp.prototype.A = function (a) {
    this.g = 0;
    Sp(this, 2, a);
  };
  Tp.prototype.B = function (a) {
    this.g = 0;
    Sp(this, 3, a);
  };
  var Sp = function (a, b, c) {
      0 == a.g &&
        (a === c && ((b = 3), (c = new TypeError("da"))),
        (a.g = 1),
        Xp(c, a.A, a.B, a) || ((a.s = c), (a.g = b), (a.i = null), gq(a), 3 != b || c instanceof cq || hq(a, c)));
    },
    Xp = function (a, b, c, d) {
      if (a instanceof Tp) return aq(a, Wp(b || ng, c || null, d)), !0;
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
          if ("function" === typeof f) return iq(a, f, b, c, d), !0;
        } catch (g) {
          return c.call(d, g), !0;
        }
      return !1;
    },
    iq = function (a, b, c, d, e) {
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
    gq = function (a) {
      a.o || ((a.o = !0), Qp(a.u, a));
    },
    eq = function (a) {
      var b = null;
      a.h && ((b = a.h), (a.h = b.next), (b.next = null));
      a.h || (a.j = null);
      return b;
    };
  Tp.prototype.u = function () {
    for (var a; (a = eq(this)); ) fq(this, a, this.g, this.s);
    this.o = !1;
  };
  var fq = function (a, b, c, d) {
      if (3 == c && b.h && !b.i) for (; a && a.l; a = a.i) a.l = !1;
      if (b.g) (b.g.i = null), jq(b, c, d);
      else
        try {
          b.i ? b.j.call(b.context) : jq(b, c, d);
        } catch (e) {
          kq.call(null, e);
        }
      Gp(Vp, b);
    },
    jq = function (a, b, c) {
      2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c);
    },
    hq = function (a, b) {
      a.l = !0;
      Qp(function () {
        a.l && kq.call(null, b);
      });
    },
    kq = ba,
    cq = function (a) {
      aa.call(this, a);
    };
  G(cq, aa);
  cq.prototype.name = "cancel";
  var lq = function (a, b) {
    R.call(this);
    this.h = a || 1;
    this.g = b || n;
    this.i = F(this.kg, this);
    this.j = Date.now();
  };
  G(lq, R);
  k = lq.prototype;
  k.enabled = !1;
  k.Na = null;
  k.kg = function () {
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
    lq.O.K.call(this);
    this.stop();
    delete this.g;
  };
  var mq = function (a, b, c) {
    if ("function" === typeof a) c && (a = F(a, c));
    else if (a && "function" == typeof a.handleEvent) a = F(a.handleEvent, a);
    else throw Error("ea");
    return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0);
  };
  var nq = function (a, b, c) {
    M.call(this);
    this.g = a;
    this.j = b || 0;
    this.h = c;
    this.i = F(this.Xe, this);
  };
  G(nq, M);
  k = nq.prototype;
  k.Gb = 0;
  k.K = function () {
    nq.O.K.call(this);
    this.stop();
    delete this.g;
    delete this.h;
  };
  k.start = function (a) {
    this.stop();
    this.Gb = mq(this.i, void 0 !== a ? a : this.j);
  };
  k.Bc = function (a) {
    this.isActive() || this.start(a);
  };
  k.stop = function () {
    this.isActive() && n.clearTimeout(this.Gb);
    this.Gb = 0;
  };
  k.isActive = function () {
    return 0 != this.Gb;
  };
  k.Xe = function () {
    this.Gb = 0;
    this.g && this.g.call(this.h);
  };
  var oq = function (a) {
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
  var pq = function (a) {
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
  var qq = function () {};
  qq.prototype.g = null;
  qq.prototype.getOptions = function () {
    var a;
    (a = this.g) || ((a = {}), rq(this) && ((a[0] = !0), (a[1] = !0)), (a = this.g = a));
    return a;
  };
  var sq,
    tq = function () {};
  G(tq, qq);
  var uq = function (a) {
      return (a = rq(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    rq = function (a) {
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
  sq = new tq();
  var vq = function (a) {
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
  G(vq, R);
  var wq = /^https?$/i,
    xq = ["POST", "PUT"],
    yq = [],
    zq = function (a, b, c, d, e, f, g) {
      var h = new vq();
      yq.push(h);
      b && h.listen("complete", b);
      h.bd("ready", h.U);
      f && (h.l = Math.max(0, f));
      g && (h.i = g);
      h.send(a, c, d, e);
    };
  vq.prototype.U = function () {
    this.ga();
    wa(yq, this);
  };
  vq.prototype.ee = function () {
    return this.o;
  };
  vq.prototype.fe = function () {
    return this.i;
  };
  vq.prototype.send = function (a, b, c, d) {
    if (this.P) throw Error("ha`" + this.F + "`" + a);
    b = b ? b.toUpperCase() : "GET";
    this.F = a;
    this.j = 0;
    this.B = !1;
    this.g = !0;
    this.P = this.A ? uq(this.A) : uq(sq);
    this.v = this.A ? this.A.getOptions() : sq.getOptions();
    this.P.onreadystatechange = F(this.G, this);
    try {
      (this.D = !0), this.P.open(b, String(a), !0), (this.D = !1);
    } catch (g) {
      Aq(this);
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
    !ta(xq, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    b = t(c);
    for (d = b.next(); !d.done; d = b.next()) (c = t(d.value)), (d = c.next().value), (c = c.next().value), this.P.setRequestHeader(d, c);
    this.o && (this.P.responseType = this.o);
    "withCredentials" in this.P && this.P.withCredentials !== this.i && (this.P.withCredentials = this.i);
    try {
      Bq(this),
        0 < this.l &&
          ((this.J = Cq(this.P)) ? ((this.P.timeout = this.l), (this.P.ontimeout = F(this.N, this))) : (this.u = mq(this.N, this.l, this))),
        (this.s = !0),
        this.P.send(a),
        (this.s = !1);
    } catch (g) {
      Aq(this);
    }
  };
  var Cq = function (a) {
    return H && "number" === typeof a.timeout && void 0 !== a.ontimeout;
  };
  vq.prototype.N = function () {
    "undefined" != typeof Wd && this.P && ((this.j = 8), this.dispatchEvent("timeout"), this.abort(8));
  };
  var Aq = function (a) {
      a.g = !1;
      a.P && ((a.h = !0), a.P.abort(), (a.h = !1));
      a.j = 5;
      Dq(a);
      Eq(a);
    },
    Dq = function (a) {
      a.B || ((a.B = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
  vq.prototype.abort = function (a) {
    this.P &&
      this.g &&
      ((this.g = !1),
      (this.h = !0),
      this.P.abort(),
      (this.h = !1),
      (this.j = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      Eq(this));
  };
  vq.prototype.K = function () {
    this.P && (this.g && ((this.g = !1), (this.h = !0), this.P.abort(), (this.h = !1)), Eq(this, !0));
    vq.O.K.call(this);
  };
  vq.prototype.G = function () {
    this.pa || (this.D || this.s || this.h ? Fq(this) : this.R());
  };
  vq.prototype.R = function () {
    Fq(this);
  };
  var Fq = function (a) {
      if (a.g && "undefined" != typeof Wd && (!a.v[1] || 4 != (a.P ? a.P.readyState : 0) || 2 != a.getStatus()))
        if (a.s && 4 == (a.P ? a.P.readyState : 0)) mq(a.G, 0, a);
        else if ((a.dispatchEvent("readystatechange"), 4 == (a.P ? a.P.readyState : 0))) {
          a.g = !1;
          try {
            Gq(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : ((a.j = 6), a.getStatus(), Dq(a));
          } finally {
            Eq(a);
          }
        }
    },
    Eq = function (a, b) {
      if (a.P) {
        Bq(a);
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
    Bq = function (a) {
      a.P && a.J && (a.P.ontimeout = null);
      a.u && (n.clearTimeout(a.u), (a.u = null));
    };
  vq.prototype.isActive = function () {
    return !!this.P;
  };
  var Gq = function (a) {
    var b = a.getStatus(),
      c;
    if (!(c = pq(b))) {
      if ((b = 0 === b))
        (a = String(a.F).match(si)[1] || null),
          !a && n.self && n.self.location && (a = n.self.location.protocol.slice(0, -1)),
          (b = !wq.test(a ? a.toLowerCase() : ""));
      c = b;
    }
    return c;
  };
  vq.prototype.getStatus = function () {
    try {
      return 2 < (this.P ? this.P.readyState : 0) ? this.P.status : -1;
    } catch (a) {
      return -1;
    }
  };
  var Hq = function (a) {
    if (a.P) {
      a: {
        a = a.P.responseText;
        if (n.JSON)
          try {
            var b = n.JSON.parse(a);
            break a;
          } catch (c) {}
        b = oq(a);
      }
      return b;
    }
  };
  var rp = function () {
    R.call(this);
    var a = this;
    this.h = navigator.onLine;
    this.g = new Iq(function (c) {
      return Jq(a, c);
    });
    N(this, this.g);
    var b = new un(this);
    N(this, b);
    b.listen(window, ["online", "offline"], this.i);
    this.h ||
      Qp(function () {
        return a.g.start();
      });
  };
  E(rp, R);
  rp.prototype.pc = function () {
    return this.h;
  };
  var Jq = function (a, b) {
    a.h != b && ((a.h = b), a.dispatchEvent(new Kq(b)), b ? a.g.stop() : a.g.start());
  };
  rp.prototype.i = function () {
    Jq(this, navigator.onLine);
  };
  rp.prototype.K = function () {
    this.g.stop();
    R.prototype.K.call(this);
  };
  rp.L = function () {
    return zh(rp);
  };
  var Kq = function (a) {
    jj.call(this, "change");
    this.pc = a;
  };
  E(Kq, jj);
  var Iq = function (a) {
    M.call(this);
    var b = this;
    this.o = a;
    this.j = !1;
    this.h = 0;
    this.l = new nq(function () {
      return Lq(b, !1);
    }, 1e4);
    N(this, this.l);
    this.i = new nq(function () {
      return Mq(b);
    }, 5e3);
    N(this, this.i);
    this.g = null;
  };
  E(Iq, M);
  Iq.prototype.start = function () {
    this.j || ((this.j = !0), (this.h = 0), Mq(this));
  };
  Iq.prototype.stop = function () {
    Nq(this);
    this.j = !1;
  };
  var Mq = function (a) {
      navigator.onLine || a.h++;
      var b = Oi().toString();
      a.g = new Image();
      a.g.onload = function () {
        return Lq(a, !0);
      };
      a.g.onerror = function () {
        return Lq(a, !1);
      };
      a.g.onabort = function () {
        return Lq(a, !1);
      };
      a.g.src = b;
      a.l.start();
    },
    Lq = function (a, b) {
      Nq(a);
      b ? (a.o(!0), a.stop()) : !navigator.onLine && 2 <= a.h ? (a.o(!1), a.stop()) : a.i.start();
    },
    Nq = function (a) {
      a.g && ((a.g.onload = a.g.onerror = a.g.onabort = null), (a.g = null));
      a.l.stop();
      a.i.stop();
    },
    Ni = new Ci("https://www.google.com/images/cleardot.gif");
  var Oq = function (a) {
    R.call(this);
    this.h = a;
    this.enabled = !1;
    this.i = function () {
      return Date.now();
    };
    this.j = this.i();
  };
  E(Oq, R);
  var Rq = function (a, b) {
    a.h = b;
    a.g && a.enabled ? (a.stop(), a.start()) : a.g && a.stop();
  };
  Oq.prototype.start = function () {
    var a = this;
    this.enabled = !0;
    this.g ||
      ((this.g = setTimeout(function () {
        Sq(a);
      }, this.h)),
      (this.j = this.i()));
  };
  Oq.prototype.stop = function () {
    this.enabled = !1;
    this.g && (clearTimeout(this.g), (this.g = void 0));
  };
  var Sq = function (a) {
    if (a.enabled) {
      var b = Math.max(a.i() - a.j, 0);
      b < 0.8 * a.h
        ? (a.g = setTimeout(function () {
            Sq(a);
          }, a.h - b))
        : (a.g && (clearTimeout(a.g), (a.g = void 0)), a.dispatchEvent("tick"), a.enabled && (a.stop(), a.start()));
    } else a.g = void 0;
  };
  var Tq = function (a) {
    this.I = v(a);
  };
  E(Tq, J);
  var Uq = function (a) {
    this.I = v(a);
  };
  E(Uq, J);
  var Vq = function (a) {
    this.g = this.h = this.i = a;
  };
  Vq.prototype.reset = function () {
    this.g = this.h = this.i;
  };
  Vq.prototype.aa = function () {
    return this.h;
  };
  var Wq = function (a) {
    this.I = v(a);
  };
  E(Wq, J);
  var Xq = function (a) {
    this.I = v(a);
  };
  E(Xq, J);
  Xq.Ka = [1];
  var Yq = function (a) {
    this.I = v(a);
  };
  E(Yq, J);
  var Zq = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
  new Xq();
  var $q = function (a) {
    this.I = v(a);
  };
  E($q, J);
  var ar = function (a) {
    this.I = v(a);
  };
  E(ar, J);
  var br = function (a) {
    this.I = v(a, 35);
  };
  E(br, J);
  var cr = function (a, b) {
    return Df(a, 8, b);
  };
  br.Ka = [3, 20, 27];
  var dr = function (a) {
    this.I = v(a, 19);
  };
  E(dr, J);
  dr.prototype.Vb = function (a) {
    return $c(this, 2, a);
  };
  dr.Ka = [3, 5];
  var er = function (a) {
    this.I = v(a, 7);
  };
  E(er, J);
  var fr = (function (a) {
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
  })(er);
  er.Ka = [5, 6];
  var gr = function (a) {
    this.I = v(a);
  };
  E(gr, J);
  var hr = new (function (a, b) {
    this.h = a;
    this.g = b;
    this.i = yf;
    this.defaultValue = void 0;
  })(175237375, gr);
  var lr = function (a) {
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
    this.Cb = a.Cb;
    this.lb = a.lb || function () {};
    this.i = new ir(a.Cb, a.ob);
    this.network = a.network;
    this.Eb = a.Eb || null;
    this.bufferSize = 1e3;
    this.ca = ee(Sg, 0, 1);
    this.B = a.lg || null;
    this.Za = a.Za || null;
    this.Lb = a.Lb || !1;
    this.Db = a.Db || null;
    this.withCredentials = !a.be;
    this.ob = a.ob || !1;
    this.Z = !this.ob && !!fh() && !!fh().navigator && void 0 !== fh().navigator.sendBeacon;
    var c = $c(new $q(), 1, 1);
    jr(this.i, c);
    this.o = new Vq(1e4);
    this.g = new Oq(this.o.aa());
    a = kr(this, a.Vd);
    zj(this.g, "tick", a, !1, this);
    this.A = new Oq(6e5);
    zj(this.A, "tick", a, !1, this);
    this.Lb || this.A.start();
    this.ob ||
      (zj(document, "visibilitychange", function () {
        "hidden" === document.visibilityState && b.D();
      }),
      zj(document, "pagehide", this.D, !1, this));
  };
  E(lr, M);
  var kr = function (a, b) {
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
  lr.prototype.K = function () {
    this.D();
    this.g.stop();
    this.A.stop();
    M.prototype.K.call(this);
  };
  var mr = function (a) {
    a.B ||
      (a.B =
        0.01 > a.ca() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.B;
  };
  lr.prototype.ce = function (a) {
    a instanceof br ? this.log(a) : ((a = cr(new br(), Ef(a))), this.log(a));
  };
  var nr = function (a, b) {
    a.o = new Vq(1 > b ? 1 : b);
    Rq(a.g, a.o.aa());
  };
  lr.prototype.log = function (a) {
    a = a.clone();
    var b = this.ba++;
    a = B(a, 21, b);
    Bf(a) || ((b = Date.now()), (b = Number.isFinite(b) ? b.toString() : "0"), uf(a, 1, qb(b)));
    null != Af(a, 15) || B(a, 15, 60 * new Date().getTimezoneOffset());
    this.j && ((b = this.j.clone()), C(a, 16, b));
    b = this.h.length - this.bufferSize + 1;
    0 < b && (this.h.splice(0, b), (this.l += b));
    this.h.push(a);
    this.Lb || this.g.enabled || this.g.start();
  };
  lr.prototype.flush = function (a, b) {
    var c = this;
    if (0 === this.h.length) a && a();
    else if (this.v) or(this.i, 3), pr(this);
    else {
      var d = Date.now();
      if (this.S > d && this.G < d) b && b("throttled");
      else {
        or(this.i, 1);
        var e = qr(this.i, this.h, this.l, this.s, this.Eb, this.J, this.F);
        d = {};
        var f = this.lb();
        f && (d.Authorization = f);
        var g = mr(this);
        this.Za && ((d["X-Goog-AuthUser"] = this.Za), (g = yi(g, "authuser", this.Za)));
        this.Db && ((d["X-Goog-PageId"] = this.Db), (g = yi(g, "pageId", this.Db)));
        if (f && this.R === f) b && b("stale-auth-token");
        else {
          this.h = [];
          this.g.enabled && this.g.stop();
          this.l = 0;
          var h = Ef(e),
            l;
          this.u && this.u.isSupported(h.length) && (l = this.u.jk(h));
          var m = {
              url: g,
              body: h,
              Ef: 1,
              requestHeaders: d,
              requestType: "POST",
              withCredentials: this.withCredentials,
              timeoutMillis: this.timeoutMillis
            },
            p = function (r) {
              c.o.reset();
              Rq(c.g, c.o.aa());
              if (r) {
                var A = null;
                try {
                  var I = JSON.stringify(JSON.parse(r.replace(")]}'\n", "")));
                  A = fr(I);
                } catch (ya) {}
                if (A) {
                  r = Number;
                  I = "-1";
                  I = void 0 === I ? "0" : I;
                  var Y = Bf(A);
                  r = r(null != Y ? Y : I);
                  0 < r && ((c.G = Date.now()), (c.S = c.G + r));
                  A = hr.g ? hr.i(A, hr.g, hr.h, !0) : hr.i(A, hr.h, null, !0);
                  if ((r = null === A ? void 0 : A))
                    (A = -1), (r = mb(tf(r, 1))), (A = null != r ? r : void 0 === A ? 0 : A), -1 !== A && (c.U || nr(c, A));
                }
              }
              a && a();
              c.s = 0;
            },
            u = function (r, A) {
              var I = e.I;
              var Y = Fb(I),
                ya = !!(2 & Y),
                W = Y,
                qa = ya ? 1 : 2;
              Y = 1 === qa;
              var Pq = 2 === qa;
              qa = !1;
              var Rh = !!(2 & W) && Pq,
                Hb = W,
                Sh = Hb & 2;
              W = sf(I, Hb, 3);
              Array.isArray(W) || (W = Qb);
              var X = Ta(W);
              0 === X && Hb & 32 && !Sh ? ((X |= 33), Ua(W, X)) : X & 1 || ((X |= 1), Ua(W, X));
              Sh && ((Hb = !1), X & 2 || (Xa(W, 34), (Hb = !!(4 & X))), Hb && Object.freeze(W));
              X = W;
              W = Fb(I);
              var K = Ta(X),
                cc = !!(2 & K);
              Hb = !!(4 & K);
              Sh = !!(32 & K);
              var Me = (cc && Hb) || !!(2048 & K);
              if (!Hb) {
                var Ib = X,
                  Ne = W,
                  Jk = !!(2 & K);
                Jk && (Ne = Wa(Ne, 2, !0));
                for (var Kk = !Jk, Lk = !0, Th = 0, Mk = 0; Th < Ib.length; Th++) {
                  var Nk = sb(Ib[Th], br, Ne);
                  if (Nk instanceof br) {
                    if (!Jk) {
                      var Qq = !!(Ta(Nk.I) & 2);
                      Kk && (Kk = !Qq);
                      Lk && (Lk = Qq);
                    }
                    Ib[Mk++] = Nk;
                  }
                }
                Mk < Th && (Ib.length = Mk);
                K = Wa(K, 4, !0);
                K = Wa(K, 16, Lk);
                K = Wa(K, 8, Kk);
                Ua(Ib, K);
                cc && !Rh && (Object.freeze(X), (Me = !0));
              }
              Rh = K;
              cc = !!(8 & K) || (Y && !X.length);
              if (!ya && !cc) {
                Me && ((X = Sa(X)), (Me = !1), (Rh = 0), (K = Lb(K, W, qa)), (W = Kb(I, W, 3, X)));
                ya = X;
                cc = K;
                for (Ib = 0; Ib < ya.length; Ib++) (K = ya[Ib]), (Ne = Jb(K)), K !== Ne && (ya[Ib] = Ne);
                cc = Wa(cc, 8, !0);
                K = cc = Wa(cc, 16, !ya.length);
              }
              Me ||
                (Y ? (K = Wa(K, !X.length || (16 & K && (!Hb || Sh)) ? 2 : 2048, !0)) : qa || (K = Wa(K, 32, !1)),
                K !== Rh && Ua(X, K),
                Y && (Object.freeze(X), (Me = !0)));
              Pq && Me && ((X = Sa(X)), (K = Lb(K, W, qa)), Ua(X, K), Kb(I, W, 3, X));
              I = X;
              Y = Af(e, 14);
              qa = c.o;
              qa.g = Math.min(3e5, 2 * qa.g);
              qa.h = Math.min(3e5, qa.g + Math.round(0.2 * (Math.random() - 0.5) * qa.g));
              Rq(c.g, c.o.aa());
              401 === r && f && (c.R = f);
              Y && (c.l += Y);
              void 0 === A && (A = (500 <= r && 600 > r) || 401 === r || 0 === r);
              A && ((c.h = I.concat(c.h)), c.Lb || c.g.enabled || c.g.start());
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
                  m.Ef = 2;
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
  lr.prototype.D = function () {
    rr(this.i, !0);
    this.N && (or(this.i, 3), pr(this));
    this.flush();
    rr(this.i, !1);
  };
  var pr = function (a) {
      sr(a, function (b, c) {
        b = yi(b, "format", "json");
        var d = !1;
        try {
          d = fh().navigator.sendBeacon(b, Ef(c));
        } catch (e) {}
        a.v && !d && (a.v = !1);
        return d;
      });
    },
    sr = function (a, b) {
      if (0 !== a.h.length) {
        var c = mr(a);
        for (var d = c.search(Ai), e = 0, f, g = []; 0 <= (f = zi(c, e, d)); )
          g.push(c.substring(e, f)), (e = Math.min(c.indexOf("&", f) + 1 || d, d));
        g.push(c.slice(e));
        c = g.join("").replace(Bi, "$1");
        c = xi(c, "auth", a.lb(), "authuser", a.Za || "0");
        for (d = 0; 10 > d && a.h.length; ++d) {
          e = a.h.slice(0, 32);
          f = qr(a.i, e, a.l, a.s, a.Eb, a.J, a.F);
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
    ir = function (a, b) {
      this.ob = b = void 0 === b ? !1 : b;
      this.h = this.locale = null;
      this.g = new dr();
      Number.isInteger(a) && this.g.Vb(a);
      b || (this.locale = document.documentElement.getAttribute("lang"));
      jr(this, new $q());
    };
  ir.prototype.Vb = function (a) {
    this.g.Vb(a);
    return this;
  };
  var jr = function (a, b) {
      C(a.g, 1, b);
      tf(b, 1) || $c(b, 1, 1);
      if (!a.ob) {
        b = tr(a);
        var c = tf(b, 5);
        ((null == c || "string" === typeof c) && c) || Df(b, 5, a.locale);
      }
      a.h && ((b = tr(a)), yf(b, Xq, 9) || C(b, 9, a.h));
    },
    or = function (a, b) {
      wf(ur(a), Yq, 11) && ((a = vr(a)), $c(a, 1, b));
    },
    rr = function (a, b) {
      wf(ur(a), Yq, 11) && ((a = vr(a)), Cf(a, 2, b));
    },
    ur = function (a) {
      return yf(a.g, $q, 1);
    },
    wr = function (a, b) {
      var c = void 0 === c ? Zq : c;
      b(fh(), c)
        .then(function (d) {
          a.h = d;
          d = tr(a);
          C(d, 9, a.h);
          return !0;
        })
        .catch(function () {
          return !1;
        });
    },
    tr = function (a) {
      a = ur(a);
      var b = yf(a, Yq, 11);
      b || ((b = new Yq()), C(a, 11, b));
      return b;
    },
    vr = function (a) {
      a = tr(a);
      var b = yf(a, Wq, 10);
      b || ((b = new Wq()), Cf(b, 2, !1), C(a, 10, b));
      return b;
    },
    qr = function (a, b, c, d, e, f, g) {
      c = void 0 === c ? 0 : c;
      f = void 0 === f ? 0 : f;
      g = void 0 === g ? 0 : g;
      d = void 0 === d ? 0 : d;
      if (wf(ur(a), Yq, 11)) {
        var h = vr(a);
        Zc(h, 3, d);
      }
      wf(ur(a), Yq, 11) && ((d = vr(a)), Zc(d, 4, f));
      wf(ur(a), Yq, 11) && ((f = vr(a)), Zc(f, 5, g));
      a = a.g.clone();
      a = uf(a, 4, qb(Date.now().toString()));
      b = zf(a, 3, b);
      e &&
        ((a = new Tq()),
        (e = Zc(a, 13, e)),
        (a = new Uq()),
        (e = C(a, 2, e)),
        (a = new ar()),
        (e = C(a, 1, e)),
        (e = $c(e, 2, 9)),
        C(b, 18, e));
      c && B(b, 14, c);
      return b;
    };
  var xr = function (a) {
    var b;
    this.h = (b = void 0 === b ? !1 : b) ? null : a;
    this.g = b ? a : null;
    this.h && ((a = this.h), (a.N = a.Z));
  };
  xr.prototype.i = function (a) {
    var b = this.g ? this.g.ce.bind(this.g) : this.h.log.bind(this.h),
      c = this.g ? this.g.flush.bind(this.g) : this.h.flush.bind(this.h);
    a = cr(new br(), Ef(a));
    b(a);
    c();
  };
  var yr = function (a) {
    var b;
    this.h = (b = void 0 === b ? !1 : b) ? null : a;
    this.g = b ? a : null;
  };
  yr.prototype.i = function (a) {
    var b = this.g ? this.g.ce.bind(this.g) : this.h.log.bind(this.h),
      c = this.g ? this.g.flush.bind(this.g) : this.h.flush.bind(this.h);
    a = cr(new br(), Ef(a));
    b(a);
    return new Tp(
      function (d) {
        c(d, function () {
          d();
        });
      }.bind(this)
    );
  };
  var zr = function () {
    lp.call(this);
  };
  E(zr, lp);
  var Ar = new fp("high_frequency_builder");
  var Br = function (a, b, c) {
    a = new lq(a);
    N(c, a);
    var d = new un(c);
    N(c, d);
    d.listen(a, "tick", b);
    a.start();
  };
  var Cr = function () {
    lp.call(this);
  };
  E(Cr, lp);
  var Dr = function (a, b) {
      var c = 1e3 * Date.now(),
        d = new hp();
      var e = new gp();
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
    Er = new fp("system_builder");
  var Fr = function (a, b) {
    if (b && a in b) return a;
    var c = Le ? "Webkit" : Ke ? "Moz" : H ? "ms" : null;
    return c ? ((c = c.toLowerCase()), (a = c + Kg(a)), void 0 === b || a in b ? a : null) : null;
  };
  var Gr = function () {
    jj.call(this, "visibilitychange");
  };
  E(Gr, jj);
  var ld = new WeakMap(),
    hd = function (a, b) {
      a = [a];
      for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
      return a.join("\v");
    };
  var Hr = function (a) {
    R.call(this);
    this.g = a || qd();
    if ((this.h = this.Jf())) this.i = zj(this.g.g, this.h, F(this.Nf, this));
  };
  G(Hr, R);
  k = Hr.prototype;
  k.Jf = nd(function () {
    var a = this.isSupported(),
      b = "hidden" != this.kc();
    if (a) {
      var c;
      b ? (c = (((Le ? "Webkit" : Ke ? "Moz" : H ? "ms" : null) || "") + "visibilitychange").toLowerCase()) : (c = "visibilitychange");
      a = c;
    } else a = null;
    return a;
  });
  k.kc = nd(function () {
    return Fr("hidden", this.g.g);
  });
  k.Kf = nd(function () {
    return Fr("visibilityState", this.g.g);
  });
  k.isSupported = function () {
    return !!this.kc();
  };
  k.Nf = function () {
    var a = this.isSupported() ? this.g.g[this.Kf()] : null;
    a = new Gr(!!this.g.g[this.kc()], a);
    this.dispatchEvent(a);
  };
  k.K = function () {
    Hj(this.i);
    Hr.O.K.call(this);
  };
  var Ir = function (a, b) {
    M.call(this);
    this.h = a;
    this.g = new Hr(b);
    N(this, this.g);
    this.i = new un(this);
    N(this, this.i);
    this.g.isSupported() && this.i.listen(this.g, "visibilitychange", this.j);
  };
  E(Ir, M);
  Ir.prototype.j = function () {
    if (this.h.ud()) {
      var a = this.g;
      a = !!a.g.g[a.kc()];
      a = this.h.td(a ? 102001 : 102e3);
      this.h.ue(a);
    }
  };
  var Jr = function (a, b, c) {
    c = void 0 === c ? !1 : c;
    M.call(this);
    this.h = a;
    this.g = b;
    N(this, this.g);
    this.j = c;
    this.i = null;
  };
  E(Jr, M);
  k = Jr.prototype;
  k.ue = function (a) {
    var b = this.h;
    B(a.g, 6, b.j);
    a = op(a);
    b.g.add(a);
    b.i = !0;
    b = this.g;
    3 <= b.g.g.W() && b.h.qa();
  };
  k.td = function (a) {
    return Dr(Kr(this.h, a), this.h.s++);
  };
  k.Ye = function () {
    var a = this.g;
    if (!a.l || a.g.i) {
      var b = op(Lr(a.g, 691));
      b = Mr(a.g, [b]);
      a.o.i(b);
    }
    a.j();
    this.h.l = !1;
    this.i && (pc(this.i), (this.i = null));
  };
  k.af = function () {
    var a = this.h,
      b = Lr(a, 716);
    Nr(a, b);
    b = op(b);
    a.g.add(b);
    a.u = !0;
    a.l = !0;
    this.g.initialize();
    this.g.h.qa();
    this.j && (this.i = new Ir(this));
  };
  k.Ze = function () {
    this.g.j();
    Zp(Array.from(this.g.i)).then();
  };
  k.ud = function () {
    var a = this.h;
    return a.u && a.l && !0;
  };
  var Or = function (a, b, c) {
    M.call(this);
    this.o = null != c ? a.bind(c) : a;
    this.l = b;
    this.j = null;
    this.h = !1;
    this.i = 0;
    this.g = null;
  };
  E(Or, M);
  k = Or.prototype;
  k.qa = function (a) {
    this.j = arguments;
    this.g || this.i ? (this.h = !0) : Pr(this);
  };
  k.stop = function () {
    this.g && (n.clearTimeout(this.g), (this.g = null), (this.h = !1), (this.j = null));
  };
  k.pause = function () {
    this.i++;
  };
  k.resume = function () {
    this.i--;
    this.i || !this.h || this.g || ((this.h = !1), Pr(this));
  };
  k.K = function () {
    M.prototype.K.call(this);
    this.stop();
  };
  var Pr = function (a) {
    a.g = mq(function () {
      a.g = null;
      a.h && !a.i && ((a.h = !1), Pr(a));
    }, a.l);
    var b = a.j;
    a.j = null;
    a.o.apply(null, b);
  };
  var Qr = function (a, b, c, d, e) {
    M.call(this);
    this.g = a;
    this.u = b;
    this.o = c;
    this.h = new Or(this.j, 3e3, this);
    this.i = new Set();
    this.l = d;
    this.s = e || 6e4;
  };
  E(Qr, M);
  Qr.prototype.initialize = function () {
    Br(this.s, this.h.qa, this.h);
    Br(36e5, this.v, this);
  };
  Qr.prototype.j = function () {
    var a = this;
    if (0 != this.g.g.W() && (!this.l || this.g.i)) {
      var b = Rr(this.g),
        c = this.u.i(b);
      c &&
        (bq(c, function () {
          return void a.i.delete(c);
        }),
        this.i.add(c));
    }
  };
  Qr.prototype.v = function () {
    var a = this.g,
      b = Lr(a, 1153);
    b = op(b);
    a.g.add(b);
    this.h.qa();
  };
  var Sr = function () {};
  Sr.prototype.Uc = function () {
    return new zr();
  };
  var Tr = function () {
    this.h = {};
    this.i = {};
    this.g = null;
  };
  var Ur = function () {
    this.g = [];
  };
  Ur.prototype.add = function (a) {
    this.g.push(a);
  };
  Ur.prototype.W = function () {
    return this.g.length;
  };
  var Vr = function () {
    this.g = {};
  };
  Vr.prototype.add = function (a) {
    var b = Af(a.g, 12);
    this.g[b] = a;
  };
  Vr.prototype.remove = function (a) {
    delete this.g[a];
  };
  var Wr = function (a) {
    this.I = v(a);
  };
  E(Wr, J);
  var Xr = function (a) {
    this.I = v(a, 500);
  };
  E(Xr, J);
  Xr.Ka = [1];
  var Yr = function (a, b) {
      this.h = a;
      this.v = b;
      this.s = 1;
      this.o = this.j = null;
      this.A = new Vr();
      this.g = new Ur();
      this.l = this.u = this.i = !1;
    },
    Kr = function (a, b) {
      a = mp(new lp().initialize(new Wr(), a.v), Er);
      B(a.g, 10, b);
      return a;
    },
    Rr = function (a) {
      var b = a.g,
        c = b.g;
      b.g = [];
      return Mr(a, c);
    },
    Mr = function (a, b) {
      var c = new Xr();
      var d = a.h.i.clone();
      c = C(c, 2, d);
      d = a.h;
      (d = d.h ? d.h.clone() : null) && C(c, 5, d);
      var e;
      d = a.h;
      for (var f, g = b.length - 1; 0 <= g; g--) {
        var h = yf(b[g], kp, 5);
        if (h && yf(h, hg, 1)) {
          h = yf(h, hg, 1);
          null != xf(h, 12) && void 0 === e && (e = xf(h, 12));
          h = yf(h, gg, 20);
          if (void 0 !== h && void 0 === f) {
            f = new xp();
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
    Lr = function (a, b) {
      var c = Dr(Kr(a, b), a.s++);
      var d = a.A;
      var e = Object.keys(d.g);
      if (0 == e.length) d = null;
      else {
        for (var f = [], g = 0; g < e.length; g++) {
          var h = Number(e[g]),
            l = d.g[h],
            m = new ip();
          h = B(m, 1, h);
          l = Af(l.g, 10);
          l = B(h, 2, null == l ? void 0 : l);
          f.push(l);
        }
        d = f;
      }
      716 != b && ((b = a.o), B(c.g, 6, a.j), (e = new jp()), (b = B(e, 1, b)), d && zf(b, 2, d), (d = np(c)), C(d, 3, b));
      Nr(a, c);
      return c;
    },
    Nr = function (a, b) {
      a.j = Af(b.g, 12);
      a.o = Af(yf(yf(b.g, hp, 8), gp, 1), 1);
    };
  var Zr = function () {};
  Zr.prototype.Uc = function () {
    return new Cr();
  };
  var $r = function () {
    this.g = this.h = null;
  };
  var as = function () {
    this.j = this.l = null;
    this.h = new Ep();
    this.g = null;
    this.i = !1;
  };
  var bs = function () {};
  bs.prototype.send = function (a, b, c) {
    b = void 0 === b ? function () {} : b;
    c = void 0 === c ? function () {} : c;
    zq(
      a.url,
      function (d) {
        d = d.target;
        if (Gq(d)) {
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
  var cs = function (a, b) {
    M.call(this);
    this.Cb = a;
    this.Za = b;
    this.g = !1;
    this.network = new bs();
  };
  E(cs, M);
  var ds = function (a, b) {
    a.lb = b;
  };
  cs.prototype.be = function () {
    this.v = !0;
    return this;
  };
  var es = function (a) {
    var b = new lr({
      Cb: a.Cb,
      lb: a.lb ? a.lb : Pg,
      Za: a.Za,
      lg: "https://play.google.com/log?format=json&hasfast=true",
      ob: a.g,
      Lb: !1,
      be: a.v,
      Db: a.Db,
      Vd: a.Vd,
      network: a.network ? a.network : void 0
    });
    N(a, b);
    a.l && jr(b.i, a.l);
    if (a.j) {
      var c = a.j,
        d = tr(b.i);
      Df(d, 7, c);
    }
    a.i && (b.u = a.i);
    a.Eb && (b.Eb = a.Eb);
    a.h && ((c = a.h) ? (b.j || (b.j = new Ff()), (c = Ef(c)), Df(b.j, 4, c)) : b.j && uf(b.j, 4));
    a.s && ((c = a.s), b.j || (b.j = new Ff()), Mb(b.j, 2, c, Pb));
    a.o && ((c = a.o), (b.U = !0), nr(b, c));
    a.u && wr(b.i, a.u);
    a.network.Vb && a.network.Vb(a.Cb);
    a.network.gg && a.network.gg(b);
    return b;
  };
  var fs = function (a) {
      this.i = void 0 === a ? !1 : a;
      this.g = null;
      this.j = new dp();
      new eg();
      this.h = [];
    },
    hs = function (a, b) {
      a.g = b;
      gd(a.g.h.h);
      a.g.af();
      a.h.forEach(function (c) {
        return c();
      });
      a.h.length = 0;
      "undefined" !== typeof window &&
        zj(fh(), "unload", function () {
          a.g.ud() && gs(a);
        });
    },
    gs = function (a) {
      a.g && a.g.Ye();
    };
  fs.prototype.log = function (a, b, c) {
    var d = this;
    if (this.g) {
      var e = this.g.td(a);
      e = mp(e, tp);
      ep(this.j, qp(e));
      void 0 !== b && b(e);
      c || this.i || sp(e);
      this.g.ue(e);
      this.i && this.g && this.g.Ze();
    } else
      this.h.push(function () {
        return d.log(a, b, c);
      });
  };
  var ks = function (a) {
      var b = is;
      Xi("n_ugat");
      var c = new as();
      Df(c.h.i, 1, b);
      $c(c.h.i, 6, 72);
      b = new Tr();
      b.h[tp.g] = new up();
      var d = Yi("n_ugs"),
        e = Yi("n_rs"),
        f = new wp();
      $c(f.g, 1, d);
      $c(f.g, 2, e);
      b.i.keep_invariants = f;
      b.g && f.h(b.g);
      c.g = b;
      c.i = !0;
      a = js(a);
      c.l = new yr(a);
      a = new xr(a);
      c.j = a;
      a = new $r();
      a.h = c.h;
      null != c.g && (a.g = c.g);
      null == a.g && (a.g = new Tr());
      a.g.h[Er.g] = new Zr();
      a.g.h[Ar.g] = new Sr();
      b = a.g;
      d = a.h;
      wf(cd(d), Ap, 1) || ((e = cd(d)), (f = new Ap()), C(e, 1, f));
      d = yf(cd(d), Ap, 1);
      b.g = d;
      d = fc(b.i);
      for (e = 0; e < d.length; e++) d[e].h(b.g);
      a = new Yr(a.h, a.g);
      b = new Qr(a, c.l, c.j, !1, null);
      return new Jr(a, b, c.i);
    },
    js = function (a) {
      var b = !1;
      b = void 0 === b ? !1 : b;
      var c = new cs(128, "0");
      a &&
        ds(c, function () {
          return "Bearer " + a();
        });
      b && ((c.g = !0), (c.network = { send: od }));
      return es(c);
    };
  var ls = function () {
    R.call(this);
    this.Z = zh(fs);
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
    this.u = new Or(this.ba, 50, this);
    this.A = new un(this);
    N(this, this.A);
    this.A.listen(this, "k", this.s).listen(this.h, "F", this.s);
  };
  E(ls, R);
  var ss = function (a, b) {
      var c = !a.g;
      b.sessionId && (a.G = b.sessionId);
      b.embedInfo && ((a.i = new Qc(b.embedInfo)), (a.j = !0));
      a.v = !!b.blankNote;
      a.v ? (a.g && a.j && (a.o = a.g), (a.j = !1), (a.g = null)) : a.o && ((a.g = a.o), (a.j = !0), (a.o = null));
      if (b.savedNode && !a.v) {
        var d = Gc(b.savedNode);
        if (d.length) {
          a.g = new z(d[0]);
          for (var e = 1, f = void 0; (f = d[e]); e++) to(a.g, new z(f));
          ms(a);
        }
      }
      a.g || ((a.g = ns()), (a.l = ""), os(a));
      b.selectedText && Rc(a.g) && (Wo(a.g, Sc(a.g) + "\n\n" + b.selectedText), ms(a));
      if (b.imageUrl) {
        d = ps(a.g.g);
        e = $i();
        if (Nc.test(b.imageUrl)) {
          if (((f = Oc(b.imageUrl)), !e.includes(f))) return;
        } else
          f = e.find(function (g) {
            return (qs[g] || []).some(function (h) {
              var l = b.imageUrl;
              h = "." + h;
              return 0 == ke(h, l.slice(l.length - h.length));
            });
          });
        if (f) {
          e = Dm(f);
          e.l = b.imageUrl;
          Im(e, "l");
          if (!co(d)) throw Error("ca");
          d.h = e;
          go(d);
          Zn(d);
          to(a.g, d);
        }
      }
      b.cachedUserInfo && a.h.update(b.cachedUserInfo);
      N(a, a.g);
      a.g.sa(a);
      c && y("speakMessage", rs);
      a.u.qa();
    },
    ws = function (a, b, c) {
      a.N = !0;
      a.A.X(a, "k", a.s).X(a.h, "F", a.s);
      try {
        c && !a.J && a.h.update(c),
          b &&
            (Bd(
              b,
              function (d) {
                this.g && ts(this, this.g, d);
                ra(
                  this.F,
                  function (e, f, g) {
                    ts(this, e, d);
                    e.i || (e.ga(), va(g, f));
                  },
                  this
                );
              },
              a
            ),
            ms(a)),
          a.g && (us(a), 0 != a.g.l || zo(a.g) ? vs(a) : a.j && a.i && (Xc(a.g, a.i) || vs(a))),
          a.u.qa();
      } catch (d) {
      } finally {
        a.A.listen(a, "k", a.s).listen(a.h, "F", a.s), a.D.clear(), (a.J = !1);
      }
    },
    ts = function (a, b, c) {
      var d = c.id,
        e = c.parentId,
        f = b.getChildren()[d];
      if (f)
        if (((e = co(f) && !f.R), xs(a, f, c), 0 != f.l)) {
          if ((f = b.s[d]))
            f.i && (go(b, !0), Zn(b)),
              bo(f) && 0 == f.l && Xo(b, f.g, Uc(f)),
              b.Z.X(f, "k", b.yb),
              f.sa(null),
              (f.j = null),
              (f.Bb = !0),
              kc(b.s, d);
        } else e && f.R && y("uploadMediaRequest", so(f));
      else e == b.g && ((f = new z(c)), 0 == f.l && to(b, f));
      b.g == d && (b == a.g && c.mergeConflict ? ((a.g = a.g.duplicate()), a.g.sa(a)) : xs(a, b, c));
    },
    xs = function (a, b, c) {
      if (a.D.has(b.g)) ro(b, c);
      else {
        if ((a = a.G && a.G == c.lastSavedSessionId)) (a = new Yh(c.timestamps)), (a = Zh(b.u) > Zh(a));
        a ? ro(b, c) : (b.update(c), b.F && (b.F.g = !1), (c = b.i), (b.i = !1), (b.ca = null), (b.wa = !1), c && b.dispatchEvent("p"));
      }
    },
    zs = function (a) {
      var b = {},
        c = [];
      a.g && c.push.apply(c, ys(a.g));
      Bd(
        a.F,
        function (d) {
          c.push.apply(c, ys(d));
        },
        a
      );
      b.nodes = c;
      a.h.h && (b.userInfo = Pn(a.h));
      a.N && ((a.N = !1), a.D.clear(), (a.J = !1));
      return b;
    },
    As = function (a, b, c) {
      c && (b = F(b, c));
      a.U.push(b);
    },
    Bs = function (a, b) {
      if (a.g && (!b || a.g.ha())) {
        b = a.g;
        if (ao(b)) {
          var c = new Uh(),
            d = 1 === b.ua;
          b.ua = 1;
          b.u.i = c;
          1 != d && ($h(b.u, c), Zn(b));
          b.o && ((c = b.o), (c.l = !0), c.dispatchEvent("k"), b.dispatchEvent("u"));
          b.notify();
        }
        a.F.push(a.g);
        a.g = null;
      }
    };
  ls.prototype.reset = function () {
    if (this.v || !this.j) if (((this.v = !1), (this.g = this.o))) (this.j = !0), (this.o = null);
    this.g || ((this.g = ns()), this.i && ((this.j = !0), (this.l = ""), os(this)), N(this, this.g));
    if (this.i) {
      var a = Jc(this.g, this.i.Qa());
      a && this.i.update(a.g.g());
    }
    this.u.qa();
    this.g.sa(this);
  };
  var Cs = function (a) {
      var b = S();
      b.j = a;
      b.g && (a || us(b), os(b));
      b.u.qa();
    },
    Ds = function (a) {
      return (
        (a.g && a.g.i) ||
        bc(a.g ? a.g.getChildren() : {}, function (b) {
          return b.i;
        }) ||
        a.h.h ||
        De(a.F, function (b) {
          return !!b && b.i;
        })
      );
    },
    vs = function (a) {
      a.g = null;
      a.dispatchEvent("H");
    },
    os = function (a) {
      a.g && (a.j && a.i ? Wo(a.g, a.i.Qa() + (a.l ? "\n\n" : "") + a.l) : Wo(a.g, a.l));
    },
    ms = function (a) {
      if (a.g && Rc(a.g)) {
        var b = Sc(a.g);
        if (a.i && a.j) {
          var c = Es.exec(b);
          if (c) {
            var d = b.substring(c[0].length);
            a.l = !c[2] && d ? b : d;
          } else a.l = b;
        } else a.l = b;
      }
    },
    ns = function () {
      var a = {};
      a.id = Yn() + ".fce";
      a.type = "NOTE";
      a.sortValue = eo;
      a = new z(a);
      var b = {};
      b.id = Yn() + ".fce";
      b.type = "LIST_ITEM";
      b.parentId = a.g;
      to(a, new z(b));
      return a;
    },
    ps = function (a) {
      var b = {};
      b.id = Yn() + ".fce";
      b.type = "BLOB";
      b.parentId = a;
      return new z(b);
    },
    ys = function (a) {
      var b = [];
      a.i && b.push(so(a));
      x(a.getChildren(), function (c) {
        c.i && b.push(so(c));
      });
      return b;
    },
    us = function (a) {
      if (!a.j && a.i && a.g) {
        var b = Jc(a.g, a.i.Qa());
        b && ((a = a.g), a.B.remove(b) && (go(a), Zn(a)));
      }
    };
  ls.prototype.ba = function () {
    Bd(this.U, function (b) {
      b();
    });
    if (!this.R) {
      var a = Date.now();
      3e4 < a - this.S && (Wi(dd(), "n_ecmv3m") ? this.Z.log(9211) : y("impression", 9211), (this.S = a));
    }
  };
  ls.prototype.s = function (a) {
    a.target instanceof z && a.target.i && this.D.add(a.target.g);
    a.target == this.h && this.h.h && (this.J = !0);
    this.u.qa();
  };
  var S = function () {
      return zh(ls);
    },
    Es = RegExp(
      "^(?:(https?|ftp)://)?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.][\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*\\.(?:(?:xn--)*[a-zA-Z0-9]{2,63})(?:[\\.]?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.]*[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*)?(\n*)",
      "i"
    ),
    rs = chrome.i18n.getMessage("6175061706159277390"),
    qs = { "image/jpeg": ["jpg", "jpeg"], "image/png": ["png"], "image/gif": ["gif"], "image/webp": ["webp"] };
  var Fs = function () {
    M.call(this);
    this.h = new nq(this.i, 50, this);
    As(S(), this.g, this);
  };
  E(Fs, M);
  Fs.prototype.i = function () {
    var a = S();
    a.B && Ds(a) && y("syncRequest", zs(a));
  };
  Fs.prototype.g = function () {
    this.h.Bc();
  };
  var Gs = function () {
    this.g = {};
    this.g.keepRequestParam = {};
    this.g.keepRequestParam.clientNamespace = {};
    this.g.keepRequestParam.clientNamespace.clientId = "KEEP";
  };
  var Hs = function (a) {
    this.g = null;
    a && this.update(a);
  };
  Hs.prototype.update = function (a) {
    this.g = a.id || null;
  };
  var Is = function (a) {
    var b = {};
    a.g && (b.id = a.g);
    return b;
  };
  var Js = function () {
    this.g = {};
  };
  var Ks = function (a, b) {
    this.J = new Hs(a ? a[this.wb()] : void 0);
    this.G = b ? new Js() : null;
  };
  Ks.prototype.va = function () {
    var a = {};
    this.J.g && (a[this.wb()] = Is(this.J));
    return a;
  };
  var Ls = function (a) {
    Ks.call(this, a);
    this.g = "";
    a && this.update(a);
  };
  E(Ls, Ks);
  Ls.prototype.wb = function () {
    return "id";
  };
  Ls.prototype.update = function (a) {
    this.g = a.name || "";
  };
  Ls.prototype.va = function () {
    var a = Ks.prototype.va.call(this);
    a.name = this.g;
    return a;
  };
  Ls.prototype.ka = function () {
    return this.g;
  };
  var Ms = function (a) {
    Ks.call(this, a, !0);
    this.i = "";
    this.j = !1;
    this.g = void 0;
    this.h = new Hs();
    a && this.update(a);
  };
  E(Ms, Ks);
  Ms.prototype.wb = function () {
    return "listItemId";
  };
  Ms.prototype.update = function (a) {
    this.i = a.text || "";
    this.j = !!a.checked;
    void 0 !== a.sortValue ? (this.g = Jg(a.sortValue)) : (this.g = void 0);
    void 0 !== a.parentListItemId ? this.h.update(a.parentListItemId) : (this.h.g = null);
  };
  Ms.prototype.va = function () {
    var a = Ks.prototype.va.call(this);
    a.text = this.i;
    a.checked = this.j;
    void 0 !== this.g && (a.sortValue = this.g);
    this.h.g && (a.parentListItemId = Is(this.h));
    return a;
  };
  var Ns = function () {
    this.g = [];
  };
  k = Ns.prototype;
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
      return !(a instanceof Ks) || !0;
    });
  };
  k.getAll = function () {
    return this.g.slice();
  };
  var Os = function (a) {
    R.call(this);
    this.g = new Ns();
    a && this.update(a);
  };
  E(Os, R);
  Os.prototype.update = function (a) {
    var b = this;
    this.g.clear();
    Bd(a.listItems || [], function (c) {
      b.g.add(new Ms(c));
    });
  };
  var Ps = function (a) {
    a && this.update(a);
  };
  Ps.prototype.update = function () {};
  var Qs = function (a) {
    this.h = "";
    this.g = this.i = null;
    a && this.update(a);
  };
  Qs.prototype.update = function (a) {
    this.h = a.temporaryUrl || "";
    this.g = a.height || null;
    this.i = a.width || null;
  };
  Qs.prototype.setHeight = function (a) {
    this.g = a;
  };
  var Rs = function (a) {
    Ks.call(this, a);
    this.g = null;
    this.h = "UNKNOWN_MEDIA_ITEM_TYPE";
    this.i = "";
    a && this.update(a);
  };
  E(Rs, Ks);
  Rs.prototype.wb = function () {
    return "mediaId";
  };
  Rs.prototype.update = function (a) {
    a.imageAttributes ? (this.g = new Qs(a.imageAttributes)) : (this.g = null);
    a.drawingAttributes && new Ps(a.drawingAttributes);
    this.i = a.temporaryUrl || "";
    this.h = a.type || "UNKNOWN_MEDIA_ITEM_TYPE";
  };
  Rs.prototype.va = function () {
    var a = Ks.prototype.va.call(this);
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
  Rs.prototype.getType = function () {
    return this.h;
  };
  var Ss = function (a) {
    this.g = "";
    a && this.update(a);
  };
  Ss.prototype.update = function (a) {
    this.g = a.eventId || "";
  };
  var Ts = function (a) {
    this.g = "";
    a && this.update(a);
  };
  Ts.prototype.update = function (a) {
    this.g = a.serverPermId || "";
  };
  var Us = function (a) {
    this.i = this.h = this.g = this.l = this.j = "";
    a && this.update(a);
  };
  Us.prototype.update = function (a) {
    this.j = a.originalUri || "";
    this.l = a.sanitizedUri || "";
    this.g = a.title || "";
    this.h = a.description || "";
    this.i = a.imageUri || "";
  };
  var Vs = function (a) {
    var b = {};
    b.originalUri = a.j;
    b.sanitizedUri = a.l;
    b.title = a.g;
    b.description = a.h;
    b.imageUri = a.i;
    return b;
  };
  Us.prototype.getTitle = function () {
    return this.g;
  };
  Us.prototype.setTitle = function (a) {
    this.g = a;
  };
  var Ws = function (a) {
    this.h = this.i = this.g = null;
    a && this.update(a);
  };
  Ws.prototype.update = function (a) {
    a.uriInfo ? (this.g ? this.g.update(a.uriInfo) : (this.g = new Us(a.uriInfo))) : (this.g = null);
    a.gmailMetadata ? (this.i ? this.i.update(a.gmailMetadata) : (this.i = new Ts(a.gmailMetadata))) : (this.i = null);
    a.calendarMetadata ? (this.h ? this.h.update(a.calendarMetadata) : (this.h = new Ss(a.calendarMetadata))) : (this.h = null);
  };
  var Xs = function (a) {
    Ks.call(this, a);
    this.g = this.h = null;
    a && this.update(a);
  };
  E(Xs, Ks);
  Xs.prototype.wb = function () {
    return "metadataId";
  };
  Xs.prototype.update = function (a) {
    a.uriInfo
      ? ((this.h = null), this.g ? this.g.update(a.uriInfo) : (this.g = new Us(a.uriInfo)))
      : a.associatedContent && ((this.g = null), this.h ? this.h.update(a.associatedContent) : (this.h = new Ws(a.associatedContent)));
  };
  Xs.prototype.va = function () {
    var a = Ks.prototype.va.call(this);
    if (this.g) a.uriInfo = Vs(this.g);
    else if (this.h) {
      var b = this.h,
        c = {};
      b.g && (c.uriInfo = Vs(b.g));
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
  var Ys = function (a) {
    this.g = "";
    this.h = a;
  };
  Ys.prototype.update = function (a) {
    this.g = a.text || "";
  };
  var Zs = function (a, b) {
    a.g != b && ((a.g = b), a.h());
  };
  var $s = function (a) {
    a && this.update(a);
  };
  $s.prototype.update = function () {};
  var at = function (a) {
    Ks.call(this, a, !0);
    this.h = this.g = null;
    this.i = "";
    this.F = this.D = this.B = !1;
    this.A = "DEFAULT";
    this.j = void 0;
    this.o = new Ns();
    this.v = new Ns();
    this.l = new Ns();
    this.s = new Ns();
    this.u = null;
    a && this.update(a);
  };
  E(at, Ks);
  k = at.prototype;
  k.wb = function () {
    return "noteId";
  };
  k.update = function (a) {
    var b = this;
    a.textNote
      ? ((this.h = null), this.g || bt(this), this.g.update(a.textNote))
      : a.listNote && ((this.g = null), this.h ? this.h.update(a.listNote) : (this.h = new Os(a.listNote)));
    this.i = a.title || "";
    this.B = !!a.isArchived;
    this.D = !!a.isPinned;
    this.F = !!a.isTrashed;
    this.A = a.color || "DEFAULT";
    void 0 !== a.sortValue ? (this.j = Jg(a.sortValue)) : (this.j = void 0);
    this.o.clear();
    Bd(a.mediaItem || [], function (c) {
      b.o.add(new Rs(c));
    });
    this.l.clear();
    Bd(a.label || [], function (c) {
      b.l.add(new Ls(c));
    });
    this.v.clear();
    Bd(a.user || [], function (c) {
      b.v.add(new $s(c));
    });
    this.s.clear();
    Bd(a.metadata || [], function (c) {
      b.s.add(new Xs(c));
    });
  };
  k.va = function () {
    var a = Ks.prototype.va.call(this);
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
  var bt = function (a) {
    a.u ||
      (a.u = F(function () {
        this.G.g.TEXT = !0;
      }, a));
    a.g = new Ys(a.u);
    a.h = null;
  };
  var ct = function (a, b) {
    this.h = a;
    this.g = b;
  };
  var dt = function () {
    this.g = [];
    this.h = [];
  };
  dt.prototype.enqueue = function (a) {
    this.h.push(a);
  };
  var et = function (a) {
    0 === a.g.length && ((a.g = a.h), a.g.reverse(), (a.h = []));
    return a.g.pop();
  };
  k = dt.prototype;
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
  var ft = function (a, b) {
    this.g = a[n.Symbol.iterator]();
    this.h = b;
  };
  ft.prototype[Symbol.iterator] = function () {
    return this;
  };
  ft.prototype.next = function () {
    var a = this.g.next();
    return { value: a.done ? void 0 : this.h.call(void 0, a.value), done: a.done };
  };
  var gt = function (a, b) {
    return new ft(a, b);
  };
  var ht = function () {};
  ht.prototype.next = function () {
    return it;
  };
  var it = { done: !0, value: void 0 };
  ht.prototype.Ta = function () {
    return this;
  };
  var mt = function (a) {
      if (a instanceof jt || a instanceof kt || a instanceof lt) return a;
      if ("function" == typeof a.next)
        return new jt(function () {
          return a;
        });
      if ("function" == typeof a[Symbol.iterator])
        return new jt(function () {
          return a[Symbol.iterator]();
        });
      if ("function" == typeof a.Ta)
        return new jt(function () {
          return a.Ta();
        });
      throw Error("ja");
    },
    jt = function (a) {
      this.g = a;
    };
  jt.prototype.Ta = function () {
    return new kt(this.g());
  };
  jt.prototype[Symbol.iterator] = function () {
    return new lt(this.g());
  };
  jt.prototype.h = function () {
    return new lt(this.g());
  };
  var kt = function (a) {
    this.g = a;
  };
  E(kt, ht);
  kt.prototype.next = function () {
    return this.g.next();
  };
  kt.prototype[Symbol.iterator] = function () {
    return new lt(this.g);
  };
  kt.prototype.h = function () {
    return new lt(this.g);
  };
  var lt = function (a) {
    jt.call(this, function () {
      return a;
    });
    this.i = a;
  };
  E(lt, jt);
  lt.prototype.next = function () {
    return this.i.next();
  };
  var nt = function (a, b) {
    this.h = {};
    this.g = [];
    this.i = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("B");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof nt) for (c = a.Ea(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  };
  k = nt.prototype;
  k.W = function () {
    return this.size;
  };
  k.ja = function () {
    ot(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
    return a;
  };
  k.Ea = function () {
    ot(this);
    return this.g.concat();
  };
  k.has = function (a) {
    return pt(this.h, a);
  };
  k.Xa = function (a) {
    for (var b = 0; b < this.g.length; b++) {
      var c = this.g[b];
      if (pt(this.h, c) && this.h[c] == a) return !0;
    }
    return !1;
  };
  k.V = function (a) {
    if (this === a) return !0;
    if (this.size != a.W()) return !1;
    var b = qt;
    ot(this);
    for (var c, d = 0; (c = this.g[d]); d++) if (!b(this.get(c), a.get(c))) return !1;
    return !0;
  };
  var qt = function (a, b) {
    return a === b;
  };
  nt.prototype.ha = function () {
    return 0 == this.size;
  };
  nt.prototype.clear = function () {
    this.h = {};
    this.i = this.size = this.g.length = 0;
  };
  nt.prototype.remove = function (a) {
    return this.delete(a);
  };
  nt.prototype.delete = function (a) {
    return pt(this.h, a) ? (delete this.h[a], --this.size, this.i++, this.g.length > 2 * this.size && ot(this), !0) : !1;
  };
  var ot = function (a) {
    if (a.size != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length; ) {
        var d = a.g[b];
        pt(a.h, d) && (a.g[c++] = d);
        b++;
      }
      a.g.length = c;
    }
    if (a.size != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length; ) (d = a.g[b]), pt(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
      a.g.length = c;
    }
  };
  k = nt.prototype;
  k.get = function (a, b) {
    return pt(this.h, a) ? this.h[a] : b;
  };
  k.set = function (a, b) {
    pt(this.h, a) || ((this.size += 1), this.g.push(a), this.i++);
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
    return new nt(this);
  };
  k.keys = function () {
    return mt(this.Ta(!0)).h();
  };
  k.values = function () {
    return mt(this.Ta(!1)).h();
  };
  k.entries = function () {
    var a = this;
    return gt(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  k.Ta = function (a) {
    ot(this);
    var b = 0,
      c = this.i,
      d = this,
      e = new ht();
    e.next = function () {
      if (c != d.i) throw Error("ka");
      if (b >= d.g.length) return it;
      var f = d.g[b++];
      return { value: a ? f : d.h[f], done: !1 };
    };
    return e;
  };
  var pt = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var rt = function (a) {
      this.g = new nt();
      this.size = 0;
      if (a) {
        a = pi(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c]);
        this.size = this.g.size;
      }
    },
    st = function (a) {
      var b = typeof a;
      return ("object" == b && a) || "function" == b ? "o" + id(a) : b.charAt(0) + a;
    };
  k = rt.prototype;
  k.W = function () {
    return this.g.size;
  };
  k.add = function (a) {
    this.g.set(st(a), a);
    this.size = this.g.size;
  };
  k.removeAll = function (a) {
    a = pi(a);
    for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]);
    this.size = this.g.size;
  };
  k.delete = function (a) {
    a = this.g.remove(st(a));
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
    a = st(a);
    return this.g.has(a);
  };
  k.contains = function (a) {
    a = st(a);
    return this.g.has(a);
  };
  k.ja = function () {
    return this.g.ja();
  };
  k.values = function () {
    return this.g.values();
  };
  k.clone = function () {
    return new rt(this);
  };
  k.V = function (a) {
    return this.W() == oi(a) && tt(this, a);
  };
  var tt = function (a, b) {
    var c = oi(b);
    if (a.W() > c) return !1;
    !(b instanceof rt) && 5 < c && (b = new rt(b));
    return ri(a, function (d) {
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
  rt.prototype.Ta = function () {
    return this.g.Ta(!1);
  };
  rt.prototype[Symbol.iterator] = function () {
    return this.values();
  };
  var ut = function (a, b) {
    M.call(this);
    this.s = a || 0;
    this.i = b || 10;
    if (this.s > this.i) throw Error("la");
    this.g = new dt();
    this.h = new rt();
    this.delay = 0;
    this.lastAccess = null;
    this.dc();
  };
  G(ut, M);
  ut.prototype.Zb = function () {
    var a = Date.now();
    if (!(null != this.lastAccess && a - this.lastAccess < this.delay)) {
      for (var b; 0 < this.g.W() && ((b = et(this.g)), !this.ed(b)); ) this.dc();
      !b && this.W() < this.i && (b = this.l());
      b && ((this.lastAccess = a), this.h.add(b));
      return b;
    }
  };
  ut.prototype.Jb = function (a) {
    this.h.remove(a);
    this.ed(a) && this.W() < this.i ? this.g.enqueue(a) : vt(a);
  };
  ut.prototype.dc = function () {
    for (var a = this.g; this.W() < this.s; ) a.enqueue(this.l());
    for (; this.W() > this.i && 0 < this.g.W(); ) vt(et(a));
  };
  ut.prototype.l = function () {
    return {};
  };
  var vt = function (a) {
    if ("function" == typeof a.ga) a.ga();
    else for (var b in a) a[b] = null;
  };
  k = ut.prototype;
  k.ed = function (a) {
    return "function" == typeof a.Ff ? a.Ff() : !0;
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
    ut.O.K.call(this);
    if (0 < this.h.W()) throw Error("ma");
    delete this.h;
    for (var a = this.g; !a.ha(); ) vt(et(a));
    delete this.g;
  };
  var wt = function (a, b) {
    this.g = a;
    this.ea = b;
  };
  wt.prototype.aa = function () {
    return this.ea;
  };
  wt.prototype.clone = function () {
    return new wt(this.g, this.ea);
  };
  var xt = function (a) {
      this.g = [];
      if (a)
        a: {
          if (a instanceof xt) {
            var b = a.Ea();
            a = a.ja();
            if (0 >= this.W()) {
              for (var c = this.g, d = 0; d < b.length; d++) c.push(new wt(b[d], a[d]));
              break a;
            }
          } else (b = gc(a)), (a = fc(a));
          for (c = 0; c < b.length; c++) yt(this, b[c], a[c]);
        }
    },
    yt = function (a, b, c) {
      var d = a.g;
      d.push(new wt(b, c));
      b = d.length - 1;
      a = a.g;
      for (c = a[b]; 0 < b; )
        if (((d = (b - 1) >> 1), a[d].g > c.g)) (a[b] = a[d]), (b = d);
        else break;
      a[b] = c;
    };
  k = xt.prototype;
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
    return new xt(this);
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
  var zt = function () {
    xt.apply(this, arguments);
  };
  E(zt, xt);
  zt.prototype.enqueue = function (a, b) {
    yt(this, a, b);
  };
  var At = function (a, b) {
    this.o = void 0;
    this.j = new zt();
    ut.call(this, a, b);
  };
  G(At, ut);
  k = At.prototype;
  k.Zb = function (a, b) {
    if (!a) return (a = At.O.Zb.call(this)) && this.delay && (this.o = n.setTimeout(F(this.mc, this), this.delay)), a;
    this.j.enqueue(void 0 !== b ? b : 100, a);
    this.mc();
  };
  k.mc = function () {
    for (var a = this.j; 0 < a.W(); ) {
      var b = this.Zb();
      if (b) a.remove().apply(this, [b]);
      else break;
    }
  };
  k.Jb = function (a) {
    At.O.Jb.call(this, a);
    this.mc();
  };
  k.dc = function () {
    At.O.dc.call(this);
    this.mc();
  };
  k.K = function () {
    At.O.K.call(this);
    n.clearTimeout(this.o);
    this.j.clear();
    this.j = null;
  };
  var Bt = function (a, b, c, d) {
    this.u = a;
    this.v = !!d;
    At.call(this, b, c);
  };
  G(Bt, At);
  Bt.prototype.l = function () {
    var a = new vq(),
      b = this.u;
    b &&
      b.forEach(function (c, d) {
        a.headers.set(d, c);
      });
    this.v && (a.i = !0);
    return a;
  };
  Bt.prototype.ed = function (a) {
    return !a.pa && !a.isActive();
  };
  var Ct = function (a, b, c, d, e, f) {
    R.call(this);
    this.j = void 0 !== a ? a : 1;
    this.l = void 0 !== e ? Math.max(0, e) : 0;
    this.o = !!f;
    this.h = new Bt(b, c, d, f);
    this.g = new nt();
    this.i = new un(this);
  };
  G(Ct, R);
  var Dt = "ready complete success error abort timeout".split(" ");
  Ct.prototype.send = function (a, b, c, d, e, f, g, h, l, m) {
    if (this.g.get(a)) throw Error("na");
    b = new Et(b, F(this.u, this, a), c, d, e, g, void 0 !== h ? h : this.j, l, void 0 !== m ? m : this.o);
    this.g.set(a, b);
    a = F(this.s, this, a);
    this.h.Zb(a, f);
    return b;
  };
  Ct.prototype.abort = function (a, b) {
    var c = this.g.get(a);
    if (c) {
      var d = c.zc;
      c.Ud = !0;
      b &&
        (d &&
          (this.i.X(d, Dt, c.kd),
          yj(
            d,
            "ready",
            function () {
              var e = this.h;
              e.h.remove(d) && e.Jb(d);
            },
            !1,
            this
          )),
        this.g.remove(a));
      d && d.abort();
    }
  };
  Ct.prototype.s = function (a, b) {
    var c = this.g.get(a);
    c && !c.zc
      ? (this.i.listen(b, Dt, c.kd),
        (b.l = Math.max(0, this.l)),
        (b.o = c.ee()),
        (b.i = c.fe()),
        (c.zc = b),
        this.dispatchEvent(new Ft("ready", this, a, b)),
        Gt(this, a, b),
        c.Ud && b.abort())
      : ((a = this.h), a.h.remove(b) && a.Jb(b));
  };
  Ct.prototype.u = function (a, b) {
    var c = b.target;
    switch (b.type) {
      case "ready":
        Gt(this, a, c);
        break;
      case "complete":
        a: {
          var d = this.g.get(a);
          if (7 == c.j || Gq(c) || d.ec > d.Cc)
            if ((this.dispatchEvent(new Ft("complete", this, a, c)), d && ((d.ae = !0), d.Zd))) {
              a = d.Zd.call(c, b);
              break a;
            }
          a = null;
        }
        return a;
      case "success":
        this.dispatchEvent(new Ft("success", this, a, c));
        break;
      case "timeout":
      case "error":
        b = this.g.get(a);
        b.ec > b.Cc && this.dispatchEvent(new Ft("error", this, a, c));
        break;
      case "abort":
        this.dispatchEvent(new Ft("abort", this, a, c));
    }
    return null;
  };
  var Gt = function (a, b, c) {
    var d = a.g.get(b);
    !d || d.ae || d.ec > d.Cc
      ? (d && (a.i.X(c, Dt, d.kd), a.g.remove(b)), (a = a.h), a.h.remove(c) && a.Jb(c))
      : (d.ec++, c.send(d.Qa(), d.ag, d.getContent(), d.bf));
  };
  Ct.prototype.K = function () {
    Ct.O.K.call(this);
    this.h.ga();
    this.h = null;
    this.i.ga();
    this.i = null;
    this.g.clear();
    this.g = null;
  };
  var Ft = function (a, b, c, d) {
    jj.call(this, a, b);
    this.id = c;
    this.zc = d;
  };
  G(Ft, jj);
  var Et = function (a, b, c, d, e, f, g, h, l) {
    this.i = a;
    this.ag = c || "GET";
    this.g = d;
    this.bf = e || null;
    this.Cc = void 0 !== g ? g : 1;
    this.ec = 0;
    this.Ud = this.ae = !1;
    this.kd = b;
    this.Zd = f;
    this.h = h || "";
    this.j = !!l;
    this.zc = null;
  };
  Et.prototype.Qa = function () {
    return this.i;
  };
  Et.prototype.getContent = function () {
    return this.g;
  };
  Et.prototype.fe = function () {
    return this.j;
  };
  Et.prototype.ee = function () {
    return this.h;
  };
  var Ht = function (a) {
      this.h = new Ct();
      this.i = new Gs();
      this.j = a;
      this.g = null;
    },
    Lt = function (a, b) {
      var c = {};
      c.label = { id: { id: b.g }, name: b.ka() };
      It(a, "create_label_req" + b.g, Jt, c, Kt(a), function () {
        !a.h.g.W() && a.g && a.g();
      });
    },
    Nt = function (a, b, c, d, e) {
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
          return new Ls({ id: { id: l } }).va();
        }));
      var g = Kt(a),
        h = "create_note_req" + Date.now();
      b = function () {
        It(a, h, Mt, f, g, function (l) {
          l = l.target;
          if (Gq(l)) {
            var m = Hq(l).note.noteId.id;
            e(l.getStatus(), m);
          } else (a.g = null), e(l.getStatus());
        });
      };
      a.h.g.W() ? (a.g = b) : b();
    },
    Qt = function (a, b) {
      It(a, "list_labels_req" + Date.now(), Ot, mc(a.i.g), Kt(a), function (c) {
        return Pt(c, b);
      });
    },
    Pt = function (a, b) {
      a = a.target;
      if (Gq(a)) {
        var c = Hq(a);
        c.label
          ? ((c = c.label.map(function (d) {
              var e = {};
              return (e.name = d.name), (e.mainId = d.id.id), e;
            })),
            b(a.getStatus(), c))
          : b(a.getStatus());
      } else b(a.getStatus());
    },
    It = function (a, b, c, d, e, f) {
      a.h.send(b, c, "POST", JSON.stringify(d), e, void 0, function (g) {
        f(g);
      });
    },
    Kt = function (a) {
      return { Authorization: "Bearer " + a.j.g, "Content-Type": "application/json" };
    },
    Rt = Xi("n_fpae"),
    Jt = Rt + "/v1/labels:create",
    Mt = Rt + "/v1/notes:create",
    Ot = Rt + "/v1/labels:list";
  var St = {},
    Tt = function () {
      throw Error("oa");
    };
  Tt.prototype.Pc = null;
  Tt.prototype.getContent = function () {
    return this.content;
  };
  Tt.prototype.toString = function () {
    return this.content;
  };
  Tt.prototype.Ae = function () {
    if (this.Qc !== St) throw Error("pa");
    return Dg(this.toString());
  };
  var Ut = function () {
    Tt.call(this);
  };
  G(Ut, Tt);
  Ut.prototype.Qc = St;
  var Vt = function (a) {
      if (null != a)
        switch (a.Pc) {
          case 1:
            return 1;
          case -1:
            return -1;
          case 0:
            return 0;
        }
      return null;
    },
    Zt = function (a) {
      return null != a && a.Qc === St ? a : a instanceof xd ? Wt(Cg(a).toString()) : Wt(String(String(a)).replace(Xt, Yt), Vt(a));
    },
    Wt = (function (a) {
      function b(c) {
        this.content = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.Pc = d);
        return c;
      };
    })(Ut),
    $t = (function (a) {
      function b(c) {
        this.content = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = String(c);
        if (!c) return "";
        c = new b(c);
        void 0 !== d && (c.Pc = d);
        return c;
      };
    })(Ut),
    T = function (a) {
      if (null != a && a.Qc === St) {
        var b = String;
        a = a.getContent();
        a = String(a).replace(au, "").replace(bu, "&lt;");
        b = b(a).replace(cu, Yt);
      } else b = String(a).replace(Xt, Yt);
      return b;
    },
    du = {
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
    Yt = function (a) {
      return du[a];
    },
    Xt = /[\x00\x22\x26\x27\x3c\x3e]/g,
    cu = /[\x00\x22\x27\x3c\x3e]/g,
    au = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    bu = /</g;
  var pd = {};
  var fu = function (a) {
      a = a || {};
      return eu(a.Xd, a.content, a.hk);
    },
    eu = function (a, b, c) {
      return Wt(
        '<div role="button" class="' +
          T("Q0hgme-LgbsSe") +
          (a ? " " + T(a) : "") +
          '" tabindex="0"' +
          (c ? ' aria-describedby="' + T(c) + '"' : "") +
          ">" +
          Zt(null != b ? b : "") +
          "</div>"
      );
    },
    hu = function (a) {
      a = a || {};
      return gu(a.Xd, a.lk);
    },
    gu = function (a, b) {
      return Wt(eu("Q0hgme-Bz112c-LgbsSe" + (b ? " OAU7Vd-LgbsSe" : "") + (a ? " " + a : ""), $t("" + (b ? Zt(b) : ""))));
    },
    ju = function (a) {
      a = a || {};
      return iu(a.text, a.Xd);
    },
    iu = function (a, b) {
      return Wt(eu("Q0hgme-fmcmS-LgbsSe" + (b ? " " + b : ""), $t("" + Zt(null != a ? a : ""))));
    },
    lu = function (a, b) {
      return Wt(
        '<div class="' +
          T("Q0hgme-n5T17d-woLtV") +
          (a ? " " + T(a) : "") +
          (b ? " " + T(b) : "") +
          '">' +
          ku("v3pZbf") +
          ku("oq6NAc") +
          ku("gS7Ybc") +
          ku("nllRtd") +
          "</div>"
      );
    },
    ku = function (a) {
      return Wt(
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
    mu = function (a) {
      a = a.Xf;
      return Wt(
        '<div class="' +
          T("Q0hgme-vDaB1c") +
          (a ? "" : " " + T("JLm1tf-uLBfYd")) +
          '" role="alertdialog"><div class="' +
          T("Q0hgme-vDaB1c-Ne3sFf") +
          '"></div>' +
          iu(void 0, "Q0hgme-vDaB1c-JIbuQc fmcmS-LgbsSe-to915-Ia7Qfc") +
          lu("CZjX4e") +
          (a ? gu("Q0hgme-vDaB1c-IYtByb Bz112c-LgbsSe-to915-xJ5Hnf") : "") +
          "</div>"
      );
    },
    nu = function () {
      return Wt(
        '<div role="tooltip" class="' +
          T("Q0hgme-suEOdc") +
          '"><div class="' +
          T("suEOdc-AHe6Kc") +
          '"></div><div class="' +
          T("suEOdc-bN97Pc") +
          '"></div></div>'
      );
    };
  var ou = function () {
      return Wt('<div class="' + T("rymPhb-qJTHM") + '"><div class="' + T("rymPhb-PntVL") + '"></div></div>');
    },
    pu = function () {
      return Wt(
        '<div class="' +
          T("rymPhb-ibnC6b") +
          '"><div class="' +
          T("Q0hgme-MPu53c") +
          '"></div><label class="' +
          T("rymPhb-ibnC6b-fmcmS") +
          '"></label></div>'
      );
    },
    qu = function () {
      return Wt(
        '<div class="' +
          T("h1U9Be-V67aGc") +
          '"><label class="' +
          T("h1U9Be-V67aGc-V1ur5d") +
          '"></label>' +
          gu("h1U9Be-V67aGc-VkLyEc") +
          "</div>"
      );
    },
    ru = function () {
      return Wt(
        '<div class="' +
          T("HiaYvf-n0tgWb") +
          '"><img class="' +
          T("HiaYvf-SmKAyb") +
          '" crossorigin><div class="' +
          T("Yygnk-jOfkMb") +
          '"></div>' +
          gu("HiaYvf-VkLyEc") +
          "</div>"
      );
    };
  var su = function () {
    var a = '<div class="' + T("mKZypf-bEDTcc-bF1uUb") + '"><label class="' + T("mKZypf-bEDTcc-EglORb") + '">',
      b = chrome.i18n.getMessage.apply(
        null,
        ["733701029503338559", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
      );
    a = a + b + "</label>";
    b = chrome.i18n.getMessage("5207635742003539443");
    a += iu(b, " fmcmS-LgbsSe-to915-Ia7Qfc mKZypf-bEDTcc-LgbsSe ");
    return Wt(a + "</div>");
  };
  var tu = function (a) {
      return "string" == typeof a.className ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
    },
    uu = function (a) {
      return a.classList ? a.classList : tu(a).match(/\S+/g) || [];
    },
    vu = function (a, b) {
      "string" == typeof a.className ? (a.className = b) : a.setAttribute && a.setAttribute("class", b);
    },
    wu = function (a, b) {
      return a.classList ? a.classList.contains(b) : ta(uu(a), b);
    },
    xu = function (a, b) {
      if (a.classList) a.classList.add(b);
      else if (!wu(a, b)) {
        var c = tu(a);
        vu(a, c + (0 < c.length ? " " + b : b));
      }
    },
    yu = function (a, b) {
      if (a.classList)
        Array.prototype.forEach.call(b, function (e) {
          xu(a, e);
        });
      else {
        var c = {};
        Array.prototype.forEach.call(uu(a), function (e) {
          c[e] = !0;
        });
        Array.prototype.forEach.call(b, function (e) {
          c[e] = !0;
        });
        b = "";
        for (var d in c) b += 0 < b.length ? " " + d : d;
        vu(a, b);
      }
    },
    zu = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : wu(a, b) &&
          vu(
            a,
            Array.prototype.filter
              .call(uu(a), function (c) {
                return c != b;
              })
              .join(" ")
          );
    },
    Au = function (a, b) {
      a.classList
        ? Array.prototype.forEach.call(b, function (c) {
            zu(a, c);
          })
        : vu(
            a,
            Array.prototype.filter
              .call(uu(a), function (c) {
                return !ta(b, c);
              })
              .join(" ")
          );
    },
    Bu = function (a, b, c) {
      c ? xu(a, b) : zu(a, b);
    };
  var Cu = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  k = Cu.prototype;
  k.clone = function () {
    return new Cu(this.top, this.right, this.bottom, this.left);
  };
  k.contains = function (a) {
    return this && a
      ? a instanceof Cu
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
  var Du = function (a, b) {
      var c = Xg(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ""
        : "";
    },
    Eu = function (a, b) {
      return Du(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b]);
    },
    Gu = function (a, b, c) {
      if (b instanceof Tg) {
        var d = b.x;
        b = b.y;
      } else (d = b), (b = c);
      a.style.left = Fu(d, !1);
      a.style.top = Fu(b, !1);
    },
    Hu = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    },
    Iu = function (a) {
      if (H && !(8 <= Number(cf))) return a.offsetParent;
      var b = Xg(a),
        c = Eu(a, "position"),
        d = "fixed" == c || "absolute" == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (
          (11 == a.nodeType && a.host && (a = a.host),
          (c = Eu(a, "position")),
          (d = d && "static" == c && a != b.documentElement && a != b.body),
          !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
        )
          return a;
      return null;
    },
    Ku = function (a) {
      for (var b = new Cu(0, Infinity, Infinity, 0), c = qd(a), d = c.g.body, e = c.g.documentElement, f = ch(c.g); (a = Iu(a)); )
        if (!((H && 0 == a.clientWidth) || (Le && 0 == a.clientHeight && a == d)) && a != d && a != e && "visible" != Eu(a, "overflow")) {
          var g = Ju(a),
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
    Ju = function (a) {
      var b = Xg(a),
        c = new Tg(0, 0);
      var d = b ? Xg(b) : document;
      d = !H || 9 <= Number(cf) || ah(qd(d).g) ? d.documentElement : d.body;
      if (a == d) return c;
      a = Hu(a);
      b = eh(qd(b).g);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    Lu = function (a, b, c) {
      if (b instanceof Vg) (c = b.height), (b = b.width);
      else if (void 0 == c) throw Error("qa");
      a.style.width = Fu(b, !0);
      a.style.height = Fu(c, !0);
    },
    Fu = function (a, b) {
      "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
      return a;
    },
    Nu = function (a) {
      var b = Mu;
      if ("none" != Eu(a, "display")) return b(a);
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
    Mu = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = Le && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? ((a = Hu(a)), new Vg(a.right - a.left, a.bottom - a.top)) : new Vg(b, c);
    },
    U = function (a, b) {
      a.style.display = b ? "" : "none";
    },
    Ou = function (a) {
      return "rtl" == Eu(a, "direction");
    },
    Pu = Ke ? "MozUserSelect" : Le || Ie ? "WebkitUserSelect" : null,
    Qu = function (a, b, c) {
      c = c ? null : a.getElementsByTagName("*");
      if (Pu) {
        if (((b = b ? "none" : ""), a.style && (a.style[Pu] = b), c)) {
          a = 0;
          for (var d; (d = c[a]); a++) d.style && (d.style[Pu] = b);
        }
      } else if (H && ((b = b ? "on" : ""), a.setAttribute("unselectable", b), c))
        for (a = 0; (d = c[a]); a++) d.setAttribute("unselectable", b);
    },
    Ru = { thin: 2, medium: 4, thick: 6 },
    Su = function (a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
      var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      if (c in Ru) a = Ru[c];
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
  var Tu = function () {
    un.call(this);
    this.g = ud(nu);
    U(this.g, !1);
    qd().g.body.appendChild(this.g);
    this.B = Yg("suEOdc-bN97Pc", this.g);
    this.h = null;
    this.A = new nq(this.ig, 0, this);
    this.u = new nq(this.fg, 300, this);
    this.l = 250;
    this.v = new nq(this.dg, this.l, this);
    this.D = new Set();
    this.s = !0;
    this.o = !1;
  };
  E(Tu, un);
  k = Tu.prototype;
  k.La = function (a, b, c) {
    var d = void 0 === d ? "" : d;
    b
      ? (this.listen(a, "mouseout mousedown click blur focusout keydown".split(" "), this.Yd, !0).listen(
          a,
          ["mouseover", "focus", "focusin"],
          this.ye,
          !0
        ),
        a.removeAttribute("title"),
        (a.dataset.tooltipText = b),
        vh(a, "label", d || b),
        c ? a.setAttribute("tooltip-no-delay", !0) : a.removeAttribute("tooltip-no-delay"))
      : (this.X(a, "mouseout mousedown click blur focusout keydown".split(" "), this.Yd, !0).X(
          a,
          ["mouseover", "focus", "focusin"],
          this.ye,
          !0
        ),
        a.removeAttribute("aria-label"),
        a.removeAttribute("tooltip-no-delay"),
        delete a.dataset.tooltipText);
  };
  k.ye = function (a) {
    this.h = a.i;
    a = this.h.dataset.tooltipText;
    var b = "true" == this.h.getAttribute("tooltip-suspended");
    a && !b && (mh(this.B, a), (a = "true" == this.h.getAttribute("tooltip-no-delay")), this.A.start(this.s && !a ? 250 : 0));
  };
  k.Yd = function () {
    this.h = null;
    this.A.stop();
    this.o &&
      ((this.o = !1),
      zu(this.g, "ti6hGc"),
      zu(this.g, "mhHukc-cGMI2b"),
      xu(this.g, "ZYIfFd"),
      this.v.start(this.l),
      (this.s = !1),
      this.u.start());
  };
  k.ig = function () {
    if (this.h) {
      this.u.stop();
      this.v.stop();
      U(this.g, !0);
      if (this.h) {
        var a = Nu(this.g),
          b = Nu(this.h),
          c = Ju(this.h);
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
            Bu(this.g, "mhHukc-qwU8Me", f),
            Bu(this.g, "mhHukc-LK5yu", !f),
            Au(this.g, ["mhHukc-ma6Yeb", "mhHukc-cGMI2b"]))
          : ((d = c.y + b.height),
            (b = c.x + b.width / 2 - a.width / 2),
            (b = Math.max(0, Math.min(b, e - a.width))),
            (e = !0),
            d + a.height > f && ((d = c.y - a.height), (e = !1)),
            Bu(this.g, "mhHukc-cGMI2b", e),
            Bu(this.g, "mhHukc-ma6Yeb", !e),
            Au(this.g, ["mhHukc-LK5yu", "mhHukc-qwU8Me"]));
        this.g.style.top = d + "px";
        this.g.style.left = b + "px";
        this.g.setAttribute("content-width-32", Math.ceil(a.width / 32));
        this.l = Math.max(50, 250 - 25 * Math.ceil(a.width / 32));
      }
      zu(this.g, "ZYIfFd");
      xu(this.g, "ti6hGc");
      this.o = !0;
    }
  };
  k.dg = function () {
    U(this.g, !1);
  };
  k.fg = function () {
    this.s = !0;
  };
  k.K = function () {
    this.g.remove();
  };
  Tu.L = function () {
    return zh(Tu);
  };
  var Wu = function (a, b, c, d, e, f) {
      if (Oe && e) return Uu(a);
      if (e && !d) return !1;
      if (!Ke) {
        "number" === typeof b && (b = Vu(b));
        var g = 17 == b || 18 == b || (Oe && 91 == b);
        if (((!c || Oe) && g) || (Oe && 16 == b && (d || f))) return !1;
      }
      if ((Le || Ie) && d && c)
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
          return Ke ? (f || e ? !1 : !(c && d)) : !0;
        case 27:
          return !(Le || Ie || Ke);
      }
      return Ke && (d || e || f) ? !1 : Uu(a);
    },
    Uu = function (a) {
      if ((48 <= a && 57 >= a) || (96 <= a && 106 >= a) || (65 <= a && 90 >= a) || ((Le || Ie) && 0 == a)) return !0;
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
          return Ke;
        default:
          return !1;
      }
    },
    Vu = function (a) {
      if (Ke) a = Xu(a);
      else if (Oe && Le)
        switch (a) {
          case 93:
            a = 91;
        }
      return a;
    },
    Xu = function (a) {
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
  var Yu = function (a, b, c, d) {
    mj.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.l = b;
    this.repeat = c;
  };
  G(Yu, mj);
  var Zu = function (a, b) {
    R.call(this);
    a && this.attach(a, b);
  };
  G(Zu, R);
  k = Zu.prototype;
  k.sb = null;
  k.rc = null;
  k.Zc = null;
  k.sc = null;
  k.ra = -1;
  k.Ra = -1;
  k.Nc = !1;
  var $u = {
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
    av = {
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
    bv = Oe && Ke;
  k = Zu.prototype;
  k.cf = function (a) {
    if (Le || Ie)
      if ((17 == this.ra && !a.ctrlKey) || (18 == this.ra && !a.altKey) || (Oe && 91 == this.ra && !a.metaKey)) this.Ra = this.ra = -1;
    -1 == this.ra &&
      (a.ctrlKey && 17 != a.keyCode
        ? (this.ra = 17)
        : a.altKey && 18 != a.keyCode
        ? (this.ra = 18)
        : a.metaKey && 91 != a.keyCode && (this.ra = 91));
    Wu(a.keyCode, this.ra, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
      ? ((this.Ra = Vu(a.keyCode)), bv && (this.Nc = a.altKey))
      : this.handleEvent(a);
  };
  k.Qf = function (a) {
    this.Ra = this.ra = -1;
    this.Nc = a.altKey;
  };
  k.handleEvent = function (a) {
    var b = a.h,
      c = b.altKey;
    if (H && "keypress" == a.type) {
      var d = this.Ra;
      var e = 13 != d && 27 != d ? b.keyCode : 0;
    } else
      (Le || Ie) && "keypress" == a.type
        ? ((d = this.Ra), (e = 0 <= b.charCode && 63232 > b.charCode && Uu(d) ? b.charCode : 0))
        : ("keypress" == a.type
            ? (bv && (c = this.Nc),
              b.keyCode == b.charCode
                ? 32 > b.keyCode
                  ? ((d = b.keyCode), (e = 0))
                  : ((d = this.Ra), (e = b.charCode))
                : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)))
            : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)),
          Oe && 63 == e && 224 == d && (d = 191));
    var f = (d = Vu(d));
    d
      ? 63232 <= d && d in $u
        ? (f = $u[d])
        : 25 == d && a.shiftKey && (f = 9)
      : b.keyIdentifier && b.keyIdentifier in av && (f = av[b.keyIdentifier]);
    if (!Ke || "keypress" != a.type || Wu(f, this.ra, a.shiftKey, a.ctrlKey, c, a.metaKey))
      (a = f == this.ra), (this.ra = f), (b = new Yu(f, e, a, b)), (b.altKey = c), this.dispatchEvent(b);
  };
  k.C = function () {
    return this.sb;
  };
  k.attach = function (a, b) {
    this.sc && this.detach();
    this.sb = a;
    this.rc = zj(this.sb, "keypress", this, b);
    this.Zc = zj(this.sb, "keydown", this.cf, b, this);
    this.sc = zj(this.sb, "keyup", this.Qf, b, this);
  };
  k.detach = function () {
    this.rc && (Hj(this.rc), Hj(this.Zc), Hj(this.sc), (this.sc = this.Zc = this.rc = null));
    this.sb = null;
    this.Ra = this.ra = -1;
  };
  k.K = function () {
    Zu.O.K.call(this);
    this.detach();
  };
  var cv = function () {};
  Zd(cv);
  cv.prototype.g = 0;
  var V = function (a) {
    R.call(this);
    this.h = a || qd();
    this.Ua = dv;
    this.U = null;
    this.da = !1;
    this.g = null;
    this.J = void 0;
    this.u = this.o = this.s = this.Ha = null;
    this.Ge = !1;
  };
  G(V, R);
  V.prototype.Ie = cv.L();
  var dv = null,
    ev = function (a, b) {
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
    fv = function (a) {
      return a.U || (a.U = ":" + (a.Ie.g++).toString(36));
    },
    gv = function (a, b) {
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
  var hv = function (a, b) {
      return a.g ? Yg(b, a.g || a.h.g) : null;
    },
    iv = function (a) {
      a.J || (a.J = new un(a));
      return a.J;
    },
    jv = function (a, b) {
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
  V.prototype.wc = function (a) {
    kv(this, a);
  };
  var lv = function (a, b) {
      kv(a, b.parentNode, b);
    },
    kv = function (a, b, c) {
      if (a.da) throw Error("ua");
      a.g || a.Ga();
      b ? b.insertBefore(a.g, c || null) : a.h.g.body.appendChild(a.g);
      (a.s && !a.s.da) || a.T();
    },
    mv = function (a, b) {
      if (a.da) throw Error("ua");
      if (b && a.Dc(b)) {
        a.Ge = !0;
        var c = Xg(b);
        (a.h && a.h.g == c) || (a.h = qd(b));
        a.vb(b);
        a.T();
      } else throw Error("va");
    };
  k = V.prototype;
  k.Dc = function () {
    return !0;
  };
  k.vb = function (a) {
    this.g = a;
  };
  k.T = function () {
    this.da = !0;
    nv(this, function (a) {
      !a.da && a.C() && a.T();
    });
  };
  k.ib = function () {
    nv(this, function (a) {
      a.da && a.ib();
    });
    this.J && this.J.removeAll();
    this.da = !1;
  };
  k.K = function () {
    this.da && this.ib();
    this.J && (this.J.ga(), delete this.J);
    nv(this, function (a) {
      a.ga();
    });
    !this.Ge && this.g && kh(this.g);
    this.s = this.Ha = this.g = this.u = this.o = null;
    V.O.K.call(this);
  };
  var pv = function (a, b, c) {
    var d = ov(a);
    if (b.da && (c || !a.da)) throw Error("ua");
    if (0 > d || d > ov(a)) throw Error("wa");
    (a.u && a.o) || ((a.u = {}), (a.o = []));
    if (b.getParent() == a) {
      var e = fv(b);
      a.u[e] = b;
      wa(a.o, b);
    } else {
      e = a.u;
      var f = fv(b);
      if (null !== e && f in e) throw Error("A`" + f);
      e[f] = b;
    }
    jv(b, a);
    Da(a.o, d, 0, b);
    b.da && a.da && b.getParent() == a
      ? ((a = a.ac()),
        (a.childNodes[d] || null) != b.C() &&
          (b.C().parentElement == a && a.removeChild(b.C()), (d = a.childNodes[d] || null), a.insertBefore(b.C(), d)))
      : c
      ? (a.g || a.Ga(), (d = a.o ? a.o[d + 1] || null : null), kv(b, a.ac(), d ? d.g : null))
      : a.da && !b.da && b.g && b.g.parentNode && 1 == b.g.parentNode.nodeType && b.T();
  };
  V.prototype.ac = function () {
    return this.g;
  };
  var ov = function (a) {
      return a.o ? a.o.length : 0;
    },
    nv = function (a, b) {
      a.o && a.o.forEach(b, void 0);
    },
    qv = function (a, b) {
      if (b) {
        var c = "string" === typeof b ? b : fv(b);
        b = a.u && c ? lc(a.u, c) || null : null;
        c && b && (kc(a.u, c), wa(a.o, b), b.ib(), b.g && kh(b.g), jv(b, null));
      }
      if (!b) throw Error("xa");
      return b;
    },
    rv = function (a) {
      for (var b = []; a.o && 0 != a.o.length; ) {
        var c = b,
          d = c.push;
        var e = qv(a, a.o ? a.o[0] || null : null);
        d.call(c, e);
      }
    };
  var sv = function () {},
    tv;
  Zd(sv);
  var uv = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
  };
  k = sv.prototype;
  k.Tc = function () {};
  k.Hb = function (a) {
    return a.h.rb("DIV", vv(this, a).join(" "), a.getContent());
  };
  k.vd = function () {
    return !0;
  };
  k.tb = function (a, b) {
    b.id && gv(a, b.id);
    b && b.firstChild ? wv(a, b.firstChild.nextSibling ? za(b.childNodes) : b.firstChild) : (a.ub = null);
    var c = 0,
      d = this.cb(),
      e = this.cb(),
      f = !1,
      g = !1,
      h = za(uu(b));
    h.forEach(function (l) {
      f || l != d ? (g || l != e ? (c |= xv(this, l)) : (g = !0)) : ((f = !0), e == d && (g = !0));
      1 == xv(this, l) && b.hasAttribute("tabindex") && qh(b) && ph(b, !1);
    }, this);
    a.fa = c;
    f || (h.push(d), e == d && (g = !0));
    g || h.push(e);
    (a = a.Rc) && h.push.apply(h, a);
    (f && g && !a) || vu(b, h.join(" "));
    return b;
  };
  k.he = function (a) {
    null == a.Ua && (a.Ua = Ou(a.da ? a.g : a.h.g.body));
    a.Ua && this.xd(a.C(), !0);
    a.isEnabled() && this.Ub(a, a.isVisible());
  };
  var yv = function (a, b) {
    if ((a = a.Tc())) {
      var c = b.getAttribute("role") || null;
      a != c && uh(b, a);
    }
  };
  k = sv.prototype;
  k.Ec = function (a, b) {
    Qu(a, !b, !H);
  };
  k.xd = function (a, b) {
    var c = this.cb() + "-SIsrTd";
    (a = a.C ? a.C() : a) && (b ? yu : Au)(a, [c]);
  };
  k.wd = function (a) {
    var b;
    return a.na & 32 && (b = a.C()) ? b.hasAttribute("tabindex") && qh(b) : !1;
  };
  k.Ub = function (a, b) {
    var c;
    if (a.na & 32 && (c = a.C())) {
      if (!b && a.fa & 32) {
        try {
          c.blur();
        } catch (d) {}
        a.fa & 32 && a.zd(null);
      }
      (c.hasAttribute("tabindex") && qh(c)) != b && ph(c, b);
    }
  };
  k.Fc = function (a, b, c) {
    var d = a.C();
    if (d) {
      var e = zv(this, b);
      e && (a = a.C ? a.C() : a) && (c ? yu : Au)(a, [e]);
      this.Ma(d, b, c);
    }
  };
  k.Ma = function (a, b, c) {
    tv || (tv = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
    b = tv[b];
    var d = a.getAttribute("role") || null;
    d && ((d = uv[d] || b), (b = "checked" == b || "selected" == b ? d : b));
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
  var vv = function (a, b) {
      var c = a.cb(),
        d = [c],
        e = a.cb();
      e != c && d.push(e);
      c = b.getState();
      for (e = []; c; ) {
        var f = c & -c;
        e.push(zv(a, f));
        c &= ~f;
      }
      d.push.apply(d, e);
      (a = b.Rc) && d.push.apply(d, a);
      return d;
    },
    zv = function (a, b) {
      a.g || Av(a);
      return a.g[b];
    },
    xv = function (a, b) {
      if (!a.j) {
        a.g || Av(a);
        var c = a.g,
          d = {},
          e;
        for (e in c) d[c[e]] = e;
        a.j = d;
      }
      a = parseInt(a.j[b], 10);
      return isNaN(a) ? 0 : a;
    },
    Av = function (a) {
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
  var Bv = function () {};
  G(Bv, sv);
  Zd(Bv);
  k = Bv.prototype;
  k.Tc = function () {
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
        Bv.O.Ma.call(this, a, b, c);
    }
  };
  k.Hb = function (a) {
    var b = Bv.O.Hb.call(this, a);
    this.La(b, a.lc());
    var c = a.aa();
    c && this.yd(b, c);
    a.na & 16 && this.Ma(b, 16, !!(a.fa & 16));
    return b;
  };
  k.tb = function (a, b) {
    b = Bv.O.tb.call(this, a, b);
    a.ea = this.aa(b);
    a.A = this.lc(b);
    a.na & 16 && this.Ma(b, 16, !!(a.fa & 16));
    return b;
  };
  k.aa = function () {};
  k.yd = function () {};
  k.lc = function (a) {
    return a.title;
  };
  k.La = function (a, b) {
    a && (b ? (a.title = b) : a.removeAttribute("title"));
  };
  k.cb = function () {
    return "VIpgJd-LgbsSe";
  };
  var Cv = {
    Ic: "mousedown",
    Jc: "mouseup",
    Dd: "mousecancel",
    ri: "mousemove",
    ti: "mouseover",
    si: "mouseout",
    oi: "mouseenter",
    pi: "mouseleave"
  };
  var Dv = function (a, b) {
      if (!a) throw Error("ya`" + a);
      if ("function" !== typeof b) throw Error("za`" + b);
    },
    Ev = {};
  var Z = function (a, b, c) {
    V.call(this, c);
    if (!b) {
      for (b = this.constructor; b; ) {
        var d = id(b);
        if ((d = Ev[d])) break;
        b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
      }
      b = d ? ("function" === typeof d.L ? d.L() : new d()) : null;
    }
    this.i = b;
    this.ub = void 0 !== a ? a : null;
  };
  G(Z, V);
  k = Z.prototype;
  k.ub = null;
  k.fa = 0;
  k.na = 39;
  k.Kb = 255;
  k.bc = !0;
  k.Rc = null;
  k.Xc = !0;
  var Gv = function (a) {
    a.da && 0 != a.Xc && Fv(a, !1);
    a.Xc = !1;
  };
  k = Z.prototype;
  k.Ga = function () {
    var a = this.i.Hb(this);
    this.g = a;
    yv(this.i, a);
    this.i.Ec(a, !1);
    this.isVisible() || (U(a, !1), a && vh(a, "hidden", !0));
  };
  k.ac = function () {
    return this.C();
  };
  k.Dc = function (a) {
    return this.i.vd(a);
  };
  k.vb = function (a) {
    this.g = a = this.i.tb(this, a);
    yv(this.i, a);
    this.i.Ec(a, !1);
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
    this.i.he(this);
    this.na & -2 &&
      (this.Xc && Fv(this, !0), this.na & 32 && (a = this.C())) &&
      ((b = this.j || (this.j = new Zu())),
      b.attach(a),
      iv(this).listen(b, "key", this.ef).listen(a, "focus", this.df).listen(a, "blur", this.zd));
  };
  var Fv = function (a, b) {
    var c = iv(a),
      d = a.C();
    b
      ? (c.listen(d, Cv.Ic, a.Ib).listen(d, [Cv.Jc, Cv.Dd], a.Ob).listen(d, "mouseover", a.F).listen(d, "mouseout", a.D),
        a.v != ng && c.listen(d, "contextmenu", a.v),
        H && !a.l && ((a.l = new Hv(a)), N(a, a.l)))
      : (c.X(d, Cv.Ic, a.Ib).X(d, [Cv.Jc, Cv.Dd], a.Ob).X(d, "mouseover", a.F).X(d, "mouseout", a.D),
        a.v != ng && c.X(d, "contextmenu", a.v),
        H && (pc(a.l), (a.l = null)));
  };
  Z.prototype.ib = function () {
    Z.O.ib.call(this);
    this.j && this.j.detach();
    this.isVisible() && this.isEnabled() && this.i.Ub(this, !1);
  };
  Z.prototype.K = function () {
    Z.O.K.call(this);
    this.j && (this.j.ga(), delete this.j);
    delete this.i;
    this.l = this.Rc = this.ub = null;
  };
  Z.prototype.getContent = function () {
    return this.ub;
  };
  Z.prototype.setContent = function (a) {
    this.i.setContent(this.C(), a);
    this.ub = a;
  };
  var wv = function (a, b) {
    a.ub = b;
  };
  Z.prototype.isVisible = function () {
    return this.bc;
  };
  var Iv = function (a, b) {
    if (a.bc != b && a.dispatchEvent(b ? "show" : "hide")) {
      var c = a.C();
      c && (U(c, b), c && vh(c, "hidden", !b));
      a.isEnabled() && a.i.Ub(a, b);
      a.bc = b;
    }
  };
  Z.prototype.isEnabled = function () {
    return !(this.fa & 1);
  };
  Z.prototype.setEnabled = function (a) {
    var b = this.getParent();
    (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
      !Jv(this, 1, !a) ||
      (a || (Kv(this, !1), Lv(this, !1)), this.isVisible() && this.i.Ub(this, a), Mv(this, 1, !a, !0));
  };
  var Lv = function (a, b) {
    Jv(a, 2, b) && Mv(a, 2, b);
  };
  Z.prototype.isActive = function () {
    return !!(this.fa & 4);
  };
  var Kv = function (a, b) {
    Jv(a, 4, b) && Mv(a, 4, b);
  };
  Z.prototype.isSelected = function () {
    return !!(this.fa & 8);
  };
  Z.prototype.yc = function (a) {
    Jv(this, 32, a) && Mv(this, 32, a);
  };
  Z.prototype.getState = function () {
    return this.fa;
  };
  var Mv = function (a, b, c, d) {
      d || 1 != b ? a.na & b && c != !!(a.fa & b) && (a.i.Fc(a, b, c), (a.fa = c ? a.fa | b : a.fa & ~b)) : a.setEnabled(!c);
    },
    Nv = function (a) {
      if (a.da && a.fa & 32) throw Error("ua");
      a.fa & 32 && Mv(a, 32, !1);
      a.na &= -33;
    },
    Ov = function (a, b) {
      return !!(a.Kb & b) && !!(a.na & b);
    },
    Jv = function (a, b, c) {
      return !!(a.na & b) && !!(a.fa & b) != c && (!(0 & b) || a.dispatchEvent(ev(b, c))) && !a.pa;
    };
  Z.prototype.F = function (a) {
    !Pv(a, this.C()) && this.dispatchEvent("enter") && this.isEnabled() && Ov(this, 2) && Lv(this, !0);
  };
  Z.prototype.D = function (a) {
    !Pv(a, this.C()) && this.dispatchEvent("leave") && (Ov(this, 4) && Kv(this, !1), Ov(this, 2) && Lv(this, !1));
  };
  Z.prototype.v = ng;
  var Pv = function (a, b) {
    return !!a.relatedTarget && lh(b, a.relatedTarget);
  };
  k = Z.prototype;
  k.Ib = function (a) {
    this.isEnabled() &&
      (Ov(this, 2) && Lv(this, !0),
      0 != a.h.button || (Oe && a.ctrlKey) || (Ov(this, 4) && Kv(this, !0), this.i && this.i.wd(this) && this.C().focus()));
    0 != a.h.button || (Oe && a.ctrlKey) || a.g();
  };
  k.Ob = function (a) {
    this.isEnabled() && (Ov(this, 2) && Lv(this, !0), this.isActive() && this.uc(a) && Ov(this, 4) && Kv(this, !1));
  };
  k.uc = function (a) {
    if (Ov(this, 16)) {
      var b = !(this.fa & 16);
      Jv(this, 16, b) && Mv(this, 16, b);
    }
    Ov(this, 8) && Jv(this, 8, !0) && Mv(this, 8, !0);
    Ov(this, 64) && ((b = !(this.fa & 64)), Jv(this, 64, b) && Mv(this, 64, b));
    b = new jj("action", this);
    a && ((b.altKey = a.altKey), (b.ctrlKey = a.ctrlKey), (b.metaKey = a.metaKey), (b.shiftKey = a.shiftKey), (b.o = a.o));
    return this.dispatchEvent(b);
  };
  k.df = function () {
    Ov(this, 32) && this.yc(!0);
  };
  k.zd = function () {
    Ov(this, 4) && Kv(this, !1);
    Ov(this, 32) && this.yc(!1);
  };
  k.ef = function (a) {
    return this.isVisible() && this.isEnabled() && this.Wc(a) ? (a.g(), a.stopPropagation(), !0) : !1;
  };
  k.Wc = function (a) {
    return 13 == a.keyCode && this.uc(a);
  };
  if ("function" !== typeof Z) throw Error("Aa`" + Z);
  if ("function" !== typeof sv) throw Error("Ba`" + sv);
  var Qv = id(Z);
  Ev[Qv] = sv;
  Dv("VIpgJd-bMcfAe", function () {
    return new Z(null);
  });
  var Hv = function (a) {
    M.call(this);
    this.h = a;
    this.g = !1;
    this.i = new un(this);
    N(this, this.i);
    a = this.h.g;
    this.i.listen(a, Cv.Ic, this.l).listen(a, Cv.Jc, this.o).listen(a, "click", this.j);
  };
  G(Hv, M);
  var Rv = !H || 9 <= Number(cf);
  Hv.prototype.l = function () {
    this.g = !1;
  };
  Hv.prototype.o = function () {
    this.g = !0;
  };
  var Sv = function (a, b) {
    if (!Rv) return (a.button = 0), (a.type = b), a;
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
  Hv.prototype.j = function (a) {
    if (this.g) this.g = !1;
    else {
      var b = a.h,
        c = b.button,
        d = b.type,
        e = Sv(b, "mousedown");
      this.h.Ib(new mj(e, a.i));
      e = Sv(b, "mouseup");
      this.h.Ob(new mj(e, a.i));
      Rv || ((b.button = c), (b.type = d));
    }
  };
  Hv.prototype.K = function () {
    this.h = null;
    Hv.O.K.call(this);
  };
  var Tv = function () {};
  G(Tv, Bv);
  Zd(Tv);
  k = Tv.prototype;
  k.Tc = function () {};
  k.Hb = function (a) {
    Gv(a);
    a.Kb &= -256;
    Nv(a);
    var b = a.h,
      c = b.rb,
      d = { class: vv(this, a).join(" "), disabled: !a.isEnabled(), title: a.lc() || "", value: a.aa() || "" };
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
  k.vd = function (a) {
    return "BUTTON" == a.tagName || ("INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type));
  };
  k.tb = function (a, b) {
    Gv(a);
    a.Kb &= -256;
    Nv(a);
    if (b.disabled) {
      var c = zv(this, 1);
      xu(b, c);
    }
    return Tv.O.tb.call(this, a, b);
  };
  k.he = function (a) {
    iv(a).listen(a.C(), "click", a.uc);
  };
  k.Ec = function () {};
  k.xd = function () {};
  k.wd = function (a) {
    return a.isEnabled();
  };
  k.Ub = function () {};
  k.Fc = function (a, b, c) {
    Tv.O.Fc.call(this, a, b, c);
    (a = a.C()) && 1 == b && (a.disabled = c);
  };
  k.aa = function (a) {
    return a.value;
  };
  k.yd = function (a, b) {
    a && (a.value = b);
  };
  k.Ma = function () {};
  var Uv = function (a, b, c) {
    Z.call(this, a, b || Tv.L(), c);
  };
  G(Uv, Z);
  k = Uv.prototype;
  k.aa = function () {
    return this.ea;
  };
  k.lc = function () {
    return this.A;
  };
  k.La = function (a) {
    this.A = a;
    this.i.La(this.C(), a);
  };
  k.K = function () {
    Uv.O.K.call(this);
    delete this.ea;
    delete this.A;
  };
  k.T = function () {
    Uv.O.T.call(this);
    if (this.na & 32) {
      var a = this.C();
      a && iv(this).listen(a, "keyup", this.Wc);
    }
  };
  k.Wc = function (a) {
    return (13 == a.keyCode && "key" == a.type) || (32 == a.keyCode && "keyup" == a.type) ? this.uc(a) : 32 == a.keyCode;
  };
  Dv("VIpgJd-LgbsSe", function () {
    return new Uv(null);
  });
  var Wv = function (a, b, c, d) {
    Uv.call(this, a, d || Vv.L(), c || void 0);
    this.B = b || "";
  };
  E(Wv, Uv);
  k = Wv.prototype;
  k.T = function () {
    Uv.prototype.T.call(this);
    iv(this).listen(this, "action", this.Lf);
  };
  k.focus = function () {
    try {
      this.C() && this.C().focus();
    } catch (a) {}
  };
  k.yc = function (a) {
    Uv.prototype.yc.call(this, a);
    this.C() && zu(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.Ib = function (a) {
    Uv.prototype.Ib.call(this, a);
    this.C() && xu(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.Ob = function (a) {
    Uv.prototype.Ob.call(this, a);
    this.C() && xu(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.Lf = function () {
    this.B && this.dispatchEvent(this.B);
  };
  var Vv = function () {};
  E(Vv, Bv);
  Vv.prototype.Hb = function (a) {
    var b = ud(this.i());
    xu(b, "Q0hgme-LgbsSe");
    a.h.Ve(b, a.getContent());
    var c = this.h();
    c && xu(b, c);
    this.tb(a, b);
    return b;
  };
  Vv.prototype.h = function () {
    return "";
  };
  Vv.prototype.i = function () {
    return fu;
  };
  Vv.L = function () {
    return zh(Vv);
  };
  var Yv = function (a, b, c) {
    Wv.call(this, void 0, b, c, Xv.L());
    this.G = a;
  };
  E(Yv, Wv);
  Yv.prototype.T = function () {
    Wv.prototype.T.call(this);
    var a = this.G,
      b = this.C();
    b && Tu.L().La(b, a);
  };
  Yv.prototype.setEnabled = function (a) {
    Wv.prototype.setEnabled.call(this, a);
  };
  Yv.prototype.La = function (a) {
    this.G = a;
    if (this.isEnabled()) {
      var b = this.C();
      b && Tu.L().La(b, a);
    }
  };
  chrome.i18n.getMessage("3551522853788442530");
  var Xv = function () {};
  E(Xv, Vv);
  Xv.prototype.h = function () {
    return "Q0hgme-Bz112c-LgbsSe";
  };
  Xv.prototype.i = function () {
    return hu;
  };
  Xv.L = function () {
    return zh(Xv);
  };
  var Zv = function () {
    this.g = this.i = this.j = this.h = null;
  };
  var $v = function () {
    V.call(this);
    this.i = [];
    As(S(), this.l, this);
  };
  E($v, V);
  $v.prototype.T = function () {
    V.prototype.T.call(this);
    var a = new Or(this.j, 50, this);
    N(this, a);
    var b = new nq(a.qa, 16, a);
    N(this, a);
    xn(iv(this), this, "I", b.Bc, void 0, b);
    aw(this, !1);
  };
  var aw = function (a, b) {
    a.C() && (U(a.C(), b), a.dispatchEvent("K"));
  };
  $v.prototype.l = function () {
    var a = S().g;
    a = Ce(a ? Jo(a) : [], function (b) {
      b = Mo(b);
      return !!b && (Fm(b) || Gm(b) || Hm(b));
    });
    Fa(this.i, a)
      ? nv(this, function (b) {
          bw(b);
        })
      : ((this.i = a),
        rv(this),
        Bd(
          a,
          function (b) {
            pv(this, new cw(b), !0);
          },
          this
        ),
        aw(this, !!ov(this)),
        this.j());
  };
  $v.prototype.j = function () {
    for (var a = ov(this), b = [], c = [], d = 0; d < a; d++) {
      var e = this.o ? this.o[d] || null : null,
        f = 6 <= c.length;
      null == e.l || f ? U(e.C(), !1) : (c.push(e), b.push(e.l), U(e.C(), !0));
    }
    a = Cd(b);
    this.C().style.paddingTop = a.Gf + "%";
    for (b = 0; b < c.length; b++)
      if (((d = a.cg[b]), (e = c[b].C())))
        (e.style.top = d.top + "%"), (e.style.left = d.left + "%"), (e.style.width = d.width + "%"), (e.style.height = d.height + "%");
    this.dispatchEvent("K");
  };
  var dw = function (a, b) {
      nv(a, function (c) {
        return c.jd(b);
      });
    },
    cw = function (a) {
      V.call(this);
      this.A = zh(fs);
      var b = chrome.i18n.getMessage("6932835915069019531");
      this.v = new Yv(b);
      this.j = a;
      this.i = this.l = null;
    };
  E(cw, V);
  cw.prototype.Ga = function () {
    this.g = ud(ru);
  };
  cw.prototype.T = function () {
    V.prototype.T.call(this);
    mv(this.v, this.C().querySelector(".HiaYvf-VkLyEc"));
    var a = (this.i = this.C().querySelector(".HiaYvf-SmKAyb")),
      b;
    if (!(b = Mo(this.j).l)) {
      var c = this.j;
      b = new Zv();
      b.h = "https://keep.google.com";
      b.j = c.Ha;
      b.i = c.R;
      Mo(c) && Mo(c).j && (b.g = Mo(c).j);
      c = b.h ? Kc(b.h) : new Ci();
      c.g = ["", "/media/v2/" + b.j + "/" + b.i, b.g ? "/" + b.g : ""].join("");
      b = c.toString();
    }
    a.src = b;
    iv(this).listen(this.i, "load", this.B).listen(this.v, "action", this.D);
    bw(this);
  };
  var bw = function (a) {
    var b = a.C();
    b && ((a = "luf" == Mo(a.j).h), Bu(b, "u0pjoe", a), (a = a ? ew : ""), Tu.L().La(b, a, !0));
  };
  cw.prototype.B = function () {
    var a = (this.i.naturalWidth || this.i.width) / (this.i.naturalHeight || this.i.height);
    this.l != a && ((this.l = a), this.dispatchEvent("I"));
  };
  cw.prototype.D = function () {
    var a = this.j;
    if (1 !== a.l) {
      a.j && bo(a) && (0 != a.l || Xo(a.j, a.g, Uc(a)));
      a.l = 1;
      var b = new Uh(),
        c = a.u;
      if (c.g && b) throw Error("E");
      c.g = b;
      $h(a.u, b);
      Zn(a);
      a.o &&
        ((b = a.o),
        "DELETED" != b.h && ((b.h = "DELETED"), (b.l = !0), b.dispatchEvent("k")),
        (b = a.o),
        (b.l || (b.g && b.g.F)) && a.dispatchEvent("u"));
    }
    Wi(dd(), "n_ecmv3m") ? this.A.log(9023) : y("impression", 9023);
    this.ga();
  };
  cw.prototype.jd = function (a) {
    Iv(this.v, a);
  };
  var ew = chrome.i18n.getMessage("4153306913989815073");
  var gw = function (a) {
      var b = 0,
        c = 0;
      fw(a) && ((b = a.selectionStart), (c = -1));
      return [b, c];
    },
    fw = function (a) {
      try {
        return "number" == typeof a.selectionStart;
      } catch (b) {
        return !1;
      }
    };
  var hw = function (a, b, c, d) {
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
    this.i = 0 < d ? new lq(d) : null;
    this.h = new un(this);
    this.s = new un(this);
    this.l = new Zu();
    this.u = -1;
  };
  G(hw, M);
  k = hw.prototype;
  k.Y = null;
  k.ad = "";
  k.ab = !1;
  k.hd = !1;
  k.aa = function () {
    return this.Y.value;
  };
  k.setCursorPosition = function (a) {
    var b = this.Y;
    fw(b) && (b.selectionStart = a);
    b = this.Y;
    fw(b) && (b.selectionEnd = a);
  };
  var iw = function (a, b) {
      vd(b) && 1 == b.nodeType && (uh(b, "combobox"), vh(b, "autocomplete", "list"));
      a.h.listen(b, "focus", a.Hc);
      a.h.listen(b, "blur", a.Gc);
      a.Y || (a.s.listen(b, "keydown", a.ke), vd(b) && 1 == b.nodeType && th(Xg(b)) == b && a.vc(b));
    },
    jw = function (a, b) {
      vd(b) && 1 == b.nodeType && (b.removeAttribute("role"), b.removeAttribute("aria-autocomplete"));
      b == a.Y && a.Gc();
      a.h.X(b, "focus", a.Hc);
      a.h.X(b, "blur", a.Gc);
      a.Y || a.s.X(b, "keydown", a.ke);
    };
  hw.prototype.B = function (a) {
    if (this.Y) {
      var b = a.toString();
      if (this.j) {
        a = kw(this, this.aa(), gw(this.Y)[0]);
        var c = lw(this, this.aa());
        this.D && !this.D.test(b) && (b = b.replace(/[\s\xa0]+$/, "") + this.J);
        0 == a || ie(c[a - 1]) || (b = " " + b);
        a == c.length - 1 && (b += " ");
        if (b != c[a]) {
          c[a] = b;
          b = this.Y;
          (Ke || H) && b.blur();
          b.value = c.join("");
          for (var d = 0, e = 0; e <= a; e++) d += c[e].length;
          b.focus();
          this.setCursorPosition(d);
        }
      } else this.Y.value = b;
      this.hd = !0;
    }
    return !1;
  };
  hw.prototype.K = function () {
    hw.O.K.call(this);
    this.h.ga();
    delete this.h;
    this.s.ga();
    this.l.ga();
    pc(this.i);
  };
  var pw = function (a, b) {
      switch (b.keyCode) {
        case 40:
          if (a.g.g.isVisible()) {
            mw(a.g);
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
          else if ((a.update(), nw(a.g) && a.G)) {
            b.g();
            return;
          }
          break;
        case 13:
          if (a.g.g.isVisible()) {
            if ((a.update(), nw(a.g))) {
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
            a.ab || (a.h.listen(a.Y, "keyup", a.me), a.h.listen(a.Y, "keypress", a.le), (a.ab = !0));
            return;
          }
      }
      ow(a, b);
    },
    ow = function (a, b) {
      var c = a.j && b.l && -1 != a.o.indexOf(String.fromCharCode(b.l));
      c && a.update();
      c && nw(a.g) && b.g();
    };
  k = hw.prototype;
  k.Pf = function () {
    return !1;
  };
  k.Hc = function (a) {
    this.vc(a.target || null);
  };
  k.vc = function (a) {
    this.s.removeAll();
    this.g && qw(this.g);
    a != this.Y &&
      ((this.Y = a),
      this.i && (this.i.start(), this.h.listen(this.i, "tick", this.qe)),
      (this.ad = this.aa()),
      this.l.attach(this.Y),
      this.h.listen(this.l, "key", this.ne),
      this.h.listen(this.Y, "mousedown", this.oe),
      H && this.h.listen(this.Y, "keypress", this.A));
  };
  k.Gc = function () {
    this.Y &&
      (this.h.X(this.l, "key", this.ne),
      this.l.detach(),
      this.h.X(this.Y, "keyup", this.Pf),
      this.h.X(this.Y, "mousedown", this.oe),
      H && this.h.X(this.Y, "keypress", this.A),
      this.ab && rw(this),
      (this.Y = null),
      this.i && (this.i.stop(), this.h.X(this.i, "tick", this.qe)),
      this.g && sw(this.g));
  };
  k.qe = function () {
    this.update();
  };
  k.ke = function (a) {
    this.Hc(a);
  };
  k.ne = function (a) {
    this.u = a.keyCode;
    this.g && pw(this, a);
  };
  k.le = function () {
    this.ab && 229 != this.u && rw(this);
  };
  k.me = function (a) {
    this.ab && (13 == a.keyCode || (77 == a.keyCode && a.ctrlKey)) && rw(this);
  };
  k.oe = function () {};
  var rw = function (a) {
    a.ab && ((a.ab = !1), a.h.X(a.Y, "keypress", a.le), a.h.X(a.Y, "keyup", a.me));
  };
  hw.prototype.A = function (a) {
    ow(this, a);
  };
  hw.prototype.update = function (a) {
    if (this.Y && (a || this.aa() != this.ad)) {
      if (a || !this.hd) {
        a = gw(this.Y)[0];
        var b = this.aa();
        a = lw(this, b)[kw(this, b, a)];
        a = this.F ? String(a).replace(this.F, "") : a;
        this.g && ((this.g.s = this.Y), tw(this.g, a));
      }
      this.ad = this.aa();
    }
    this.hd = !1;
  };
  var kw = function (a, b, c) {
      a = lw(a, b);
      if (c == b.length) return a.length - 1;
      for (var d = (b = 0), e = 0; d < a.length && e <= c; d++) (e += a[d].length), (b = d);
      return b;
    },
    lw = function (a, b) {
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
  var uw = function (a) {
    hw.call(this);
    this.N = a;
  };
  E(uw, hw);
  uw.prototype.B = function (a) {
    this.Y.value = "";
    this.N(a);
    return !0;
  };
  uw.prototype.vc = function (a) {
    hw.prototype.vc.call(this, a);
    this.aa() || tw(this.g, this.aa());
  };
  var ww = function (a, b) {
      var c = [];
      if ("" != a)
        for (var d = new RegExp("(^|\\W+)" + Gg(a), "i"), e = 0; e < b.length && 100 > c.length; e++) {
          var f = b[e];
          String(f).match(d) && c.push(f);
        }
      0 == c.length && (c = vw(a, b));
      return c;
    },
    vw = function (a, b) {
      for (var c = [], d = 0; d < b.length; d++) {
        var e = b[d],
          f = a.toLowerCase(),
          g = String(e).toLowerCase(),
          h = 0;
        if (-1 != g.indexOf(f)) h = parseInt((g.indexOf(f) / 4).toString(), 10);
        else
          for (var l = f.split(""), m = -1, p = 10, u = 0, w; (w = l[u]); u++)
            (w = g.indexOf(w)), w > m ? ((m = w - m - 1), m > p - 5 && (m = p - 5), (h += m), (m = w)) : ((h += p), (p += 5));
        h < 6 * f.length && c.push({ jg: e, xe: h, index: d });
      }
      c.sort(function (r, A) {
        var I = r.xe - A.xe;
        return 0 != I ? I : r.index - A.index;
      });
      a = [];
      for (u = 0; 100 > u && u < c.length; u++) a.push(c[u].jg);
      return a;
    };
  var xw = function () {
    R.call(this);
    this.g = new Hn({ mainId: "QUMgc2VudGluZWwgbGFiZWw=" });
    this.h = "";
  };
  E(xw, R);
  var yw = function (a, b, c, d) {
    var e = S().h,
      f = Rn(e);
    if (b) {
      var g = ww(b, f);
      !De(f, function (l) {
        return l.ka().toLowerCase() == b.toLowerCase();
      }) &&
        100 > ec(Qn(e)) &&
        ((e = chrome.i18n.getMessage("8169232898590866289", [b])), Kn(a.g, e), (a.h = b), g.unshift(a.g));
    } else g = f.slice();
    var h = S().g;
    h &&
      xa(
        g,
        function (l) {
          return Do(h, l);
        },
        a
      );
    d(b, g.splice(0, c));
    a.dispatchEvent("K");
  };
  var zw = function (a, b, c) {
    R.call(this);
    this.u = a;
    this.v = c;
    this.g = b;
    zj(b, ["hilite", "select", "canceldismiss", "dismiss"], this.handleEvent, !1, this);
    this.j = null;
    this.h = [];
    this.l = -1;
    this.i = 0;
    this.o = this.s = null;
    this.B = {};
  };
  G(zw, R);
  zw.prototype.D = 10;
  zw.prototype.getToken = function () {
    return this.j;
  };
  zw.prototype.handleEvent = function (a) {
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
            var d = this.h[Aw(this, a)];
            c = !!d && b.Yc && b.Yc(d);
            d && !c && this.l != a && this.mb(a);
          }
          c || nw(this);
          break;
        case "canceldismiss":
          qw(this);
          break;
        case "dismiss":
          sw(this);
      }
  };
  var tw = function (a, b) {
      a.j != b && ((a.j = b), yw(a.u, a.j, a.D, F(a.F, a)), qw(a));
    },
    mw = function (a) {
      for (var b = a.i + a.h.length - 1, c = a.l, d = 0; d < a.h.length; d++) {
        if (c >= a.i && c < b) c++;
        else if (-1 == c) c = a.i;
        else break;
        if (a.mb(c)) break;
      }
    };
  zw.prototype.mb = function (a) {
    var b = Aw(this, a),
      c = this.h[b];
    return c && this.u.Yc && this.u.Yc(c) ? !1 : ((this.l = a), this.g.mb(a), -1 != b);
  };
  var nw = function (a) {
    var b = Aw(a, a.l);
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
  zw.prototype.Aa = function () {
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
  var sw = function (a) {
    a.o || (a.o = window.setTimeout(F(a.Aa, a), 100));
  };
  zw.prototype.A = function () {
    return this.o ? (window.clearTimeout(this.o), (this.o = null), !0) : !1;
  };
  var qw = function (a) {
    a.A() || window.setTimeout(F(a.A, a), 10);
  };
  zw.prototype.K = function () {
    zw.O.K.call(this);
    delete this.B;
    this.g.ga();
    this.v.ga();
    this.u = null;
  };
  zw.prototype.F = function (a, b, c) {
    this.j == a && this.gd(b, c);
  };
  zw.prototype.gd = function (a, b) {
    var c = "object" == $d(b) && b;
    b = (c ? c.h() : b) ? Aw(this, this.l) : -1;
    this.i += this.h.length;
    this.h = a;
    for (var d = [], e = 0; e < a.length; ++e) d.push({ id: this.i + e, data: a[e] });
    a = null;
    this.s && (a = this.B[id(this.s)] || this.s);
    this.g.Df = a;
    this.g.gd(d, this.j, this.s);
    a = !0;
    c && void 0 !== c.g() && (a = c.g());
    this.l = -1;
    (a || 0 <= b) && 0 != d.length && this.j && (0 <= b ? this.mb(this.i + b) : mw(this));
    this.dispatchEvent("suggestionsupdate");
  };
  var Aw = function (a, b) {
    b -= a.i;
    return 0 > b || b >= a.h.length ? -1 : b;
  };
  zw.prototype.update = function (a) {
    this.v.update(a);
  };
  var Bw = function (a, b, c) {
    zw.call(this, a, b, c);
  };
  E(Bw, zw);
  Bw.prototype.Aa = function () {
    zw.prototype.Aa.call(this);
    this.dispatchEvent("K");
  };
  var Cw = /#(.)(.)(.)/,
    Dw = /^#(?:[0-9a-f]{3}){1,2}$/i;
  var Ew = (function () {
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
  var Fw = function (a) {
      return (a = a.exec(ca())) ? a[1] : "";
    },
    Gw = (function () {
      if (df) return Fw(/Firefox\/([0-9.]+)/);
      if (H || Ie || He) return $e;
      if (hf) {
        if (oa() || pa()) {
          var a = Fw(/CriOS\/([0-9.]+)/);
          if (a) return a;
        }
        return Fw(/Chrome\/([0-9.]+)/);
      }
      if (jf && !oa()) return Fw(/Version\/([0-9.]+)/);
      if (ef || ff) {
        if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ca()))) return a[1] + "." + a[2];
      } else if (gf) return (a = Fw(/Android\s+([0-9.]+)/)) ? a : Fw(/Version\/([0-9.]+)/);
      return "";
    })();
  var Hw = function (a, b) {
    return (b & 8 && Ou(a) ? b ^ 4 : b) & -9;
  };
  var Iw = function (a, b, c, d) {
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
  G(Iw, R);
  Iw.prototype.C = function () {
    return this.g;
  };
  Iw.prototype.gd = function (a, b, c) {
    this.A = b;
    this.h = a;
    this.u = -1;
    this.J = Date.now();
    this.i = c;
    this.l = [];
    Jw(this);
  };
  Iw.prototype.Aa = function () {
    this.o && ((this.o = !1), Kw(this, !1), U(this.g, !1));
  };
  Iw.prototype.show = function () {
    this.o || ((this.o = !0), Kw(this, !0), U(this.g, !0));
  };
  var Kw = function (a, b) {
    a.i &&
      (vh(a.i, "haspopup", b),
      vh(a.g, "expanded", b),
      vh(a.i, "expanded", b),
      b ? vh(a.i, "owns", a.g.id) : (a.i.removeAttribute("aria-owns"), wh(a.i, null)));
  };
  Iw.prototype.isVisible = function () {
    return this.o;
  };
  var Lw = function (a, b) {
    var c = 0 <= b && b < a.h.length ? a.h[b] : void 0,
      d = 0 <= b && b < a.l.length ? a.l[b] : void 0;
    if (
      a.dispatchEvent({ type: "rowhilite", s: d, pb: c ? c.data : null }) &&
      (0 <= a.u && Au(a.l[a.u], ["ztA2jd-auswjd", "auswjd"]), (a.u = b), d)
    ) {
      yu(d, ["ztA2jd-auswjd", "auswjd"]);
      a.i && wh(a.i, d);
      b = (a = a.g || ch(document)) || ch(document);
      var e = Ju(d),
        f = Ju(b);
      if (!H || 9 <= Number(cf)) {
        c = Du(b, "borderLeftWidth");
        var g = Du(b, "borderRightWidth");
        h = Du(b, "borderTopWidth");
        l = Du(b, "borderBottomWidth");
        g = new Cu(parseFloat(h), parseFloat(g), parseFloat(l), parseFloat(c));
      } else {
        c = Su(b, "borderLeft");
        g = Su(b, "borderRight");
        var h = Su(b, "borderTop"),
          l = Su(b, "borderBottom");
        g = new Cu(h, g, l, c);
      }
      b == ch(document)
        ? ((c = e.x - b.scrollLeft), (e = e.y - b.scrollTop), !H || 10 <= Number(cf) || ((c += g.left), (e += g.top)))
        : ((c = e.x - f.x - g.left), (e = e.y - f.y - g.top));
      d = Mu(d);
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
  Iw.prototype.mb = function (a) {
    if (-1 == a) Lw(this, -1);
    else
      for (var b = 0; b < this.h.length; b++)
        if (this.h[b].id == a) {
          Lw(this, b);
          break;
        }
  };
  var Mw = function (a) {
      if (!a.g) {
        var b = a.j.rb("DIV", { style: "display:none" });
        a.g = b;
        yu(b, je(a.className).split(" "));
        uh(b, "listbox");
        b.id = ":" + (cv.L().g++).toString(36);
        a.v.appendChild(b);
        zj(b, "click", a.B, !1, a);
        zj(b, "mousedown", a.D, !1, a);
        zj(b, "mouseover", a.F, !1, a);
      }
    },
    Jw = function (a) {
      Mw(a);
      a.ba && (a.g.style.minWidth = a.ba.clientWidth - 0 + "px");
      a.U && (a.g.style.maxWidth = a.U.clientWidth - 0 + "px");
      a.l.length = 0;
      a.j.We(a.g);
      a.s && a.s.wc
        ? a.s.wc(a, a.g, a.h, a.A)
        : a.h.forEach(function (b) {
            var c = this.A,
              d = this.j.rb("DIV", { className: "ztA2jd-oKdM2c", id: ":" + (cv.L().g++).toString(36) });
            uh(d, "option");
            this.s && this.s.eg ? this.s.eg(b, c, d) : mh(d, b.data.toString());
            c && this.Z && ((this.G = !1), Nw(this, d, c));
            xu(d, "ztA2jd-oKdM2c");
            this.l.push(d);
            b = d;
            this.g.appendChild(b);
          }, a);
      0 == a.h.length ? a.Aa() : (a.show(), Ow(a), Qu(a.g, !0));
    },
    Ow = function (a) {
      if (a.i && a.R) {
        var b = a.Df || a.i;
        var c = a.S ? 5 : 1;
        a = a.g;
        var d = c ^ 1,
          e;
        if ((e = a.offsetParent)) {
          var f = "HTML" == e.tagName || "BODY" == e.tagName;
          if (!f || "static" != Eu(e, "position")) {
            var g = Ju(e);
            if (!f) {
              f = Ou(e);
              var h;
              if ((h = f)) {
                h = jf && 0 <= te(Gw, 10);
                var l;
                if ((l = Ue)) l = 0 <= te(Ew, 10);
                var m = hf && 0 <= te(Gw, 85);
                h = Ke || h || l || m;
              }
              f = h
                ? -e.scrollLeft
                : f && !Je && "visible" != Eu(e, "overflowX")
                ? e.scrollWidth - e.clientWidth - e.scrollLeft
                : e.scrollLeft;
              g = Ug(g, new Tg(f, e.scrollTop));
            }
          }
        }
        e = g || new Tg();
        g = Ju(b);
        f = Nu(b);
        g = new Dd(g.x, g.y, f.width, f.height);
        if ((f = Ku(b)))
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
              if (p == l) var w = Ju(u);
              else (w = Hu(u)), (w = new Tg(w.left, w.top));
              m.x += w.x;
              m.y += w.y;
            } while (p && p != l && p != p.parent && (u = p.frameElement) && (p = p.parent));
          }
          h = Ug(m, Ju(h));
          !H || 9 <= Number(cf) || ah(f.g) || (h = Ug(h, eh(f.g)));
          g.left += h.x;
          g.top += h.y;
        }
        b = Hw(b, c);
        c = g.left;
        b & 4 ? (c += g.width) : b & 2 && (c += g.width / 2);
        c = new Tg(c, g.top + (b & 1 ? g.height : 0));
        c = Ug(c, e);
        if ((b = Ku(a))) (b.top -= e.y), (b.right -= e.x), (b.bottom -= e.y), (b.left -= e.x);
        c = c.clone();
        g = Hw(a, d);
        d = Nu(a);
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
          (Gu(a, new Tg(g.left, g.top)),
          (e = new Vg(g.width, g.height)),
          d == e ||
            (d && e && d.width == e.width && d.height == e.height) ||
            ((d = e),
            (a = a.style),
            Ke ? (a.MozBoxSizing = "border-box") : Le ? (a.WebkitBoxSizing = "border-box") : (a.boxSizing = "border-box"),
            (a.width = Math.max(d.width, 0) + "px"),
            (a.height = Math.max(d.height, 0) + "px")));
      }
    };
  Iw.prototype.K = function () {
    this.g &&
      (Gj(this.g, "click", this.B, !1, this),
      Gj(this.g, "mousedown", this.D, !1, this),
      Gj(this.g, "mouseover", this.F, !1, this),
      this.j.sd(this.g),
      (this.g = null),
      (this.o = !1));
    pc(this.ca);
    this.v = null;
    Iw.O.K.call(this);
  };
  var Nw = function (a, b, c) {
      if (!a.G)
        if (3 == b.nodeType) {
          var d = null;
          Array.isArray(c) && 1 < c.length && (d = c.slice(1));
          c = Pw(c);
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
            } else d && Nw(a, b, d);
          }
        } else for (b = b.firstChild; b; ) (d = b.nextSibling), Nw(a, b, c), (b = d);
    },
    Pw = function (a) {
      var b = "";
      if (!a) return b;
      Array.isArray(a) &&
        (a = a.filter(function (c) {
          return !ie(null == c ? "" : String(c));
        }));
      Array.isArray(a) ? (b = 0 < a.length ? Gg(a[0]) : "") : /^\W/.test(a) || (b = Gg(a));
      return b;
    },
    Qw = function (a, b) {
      for (; b && b != a.g && !wu(b, "ztA2jd-oKdM2c"); ) b = b.parentNode;
      return b ? a.l.indexOf(b) : -1;
    };
  Iw.prototype.B = function (a) {
    var b = Qw(this, a.target);
    0 <= b && this.dispatchEvent({ type: "select", pb: this.h[b].id });
    a.stopPropagation();
  };
  Iw.prototype.D = function (a) {
    a.stopPropagation();
    a.g();
  };
  Iw.prototype.F = function (a) {
    a = Qw(this, a.target);
    0 <= a && !(300 > Date.now() - this.J) && this.dispatchEvent({ type: "hilite", pb: this.h[a].id });
  };
  var Rw = function (a) {
    V.call(this);
    this.B = zh(fs);
    this.D = Wi(dd(), "n_ecmv3m");
    this.i = null;
    this.l = new xw();
    this.l.sa(this);
    this.v = new Iw();
    N(this, this.v);
    this.j = new uw(F(this.R, this));
    N(this, this.j);
    var b = new Bw(this.l, this.v, this.j);
    b.sa(this);
    b.D = 100;
    this.j.g = b;
    this.F = [];
    this.A = a;
    As(S(), this.G, this);
  };
  E(Rw, V);
  Rw.prototype.T = function () {
    V.prototype.T.call(this);
    var a = this.C();
    this.i = a.querySelector(".RmniWd-V67aGc-yrriRe");
    this.i.setAttribute("maxlength", "50");
    vh(this.i, "label", Sw);
    Tu.L().La(a.querySelector(".V67aGc-Bz112c"), Sw);
    iv(this).listen(this, "action", this.Z).listen(this.i, "input", this.S);
    iw(this.j, this.i);
    this.j.g.s = this.i;
    Tw(this);
  };
  Rw.prototype.N = function () {
    this.i.value = "";
    Tw(this);
    this.j.g.Aa();
  };
  var Uw = function (a, b) {
    b ? (a.i.removeAttribute("readonly"), iw(a.j, a.i)) : (a.i.setAttribute("readonly", !0), jw(a.j, a.i));
    nv(a, function (c) {
      return c.jd(b);
    });
  };
  Rw.prototype.G = function () {
    var a = S().h,
      b = S().g;
    b = b ? Co(b) : [];
    Fa(this.F, b) ||
      ((this.F = b),
      rv(this),
      Bd(
        b,
        function (c) {
          (c = Tn(a, c)) && pv(this, new Vw(c), !0);
        },
        this
      ),
      ov(this) && this.dispatchEvent("G"),
      (b = document.activeElement == this.i),
      this.C().appendChild(this.i),
      b && this.i && this.i.focus());
  };
  var Tw = function (a) {
    var b = rd(document, "SPAN");
    b.className = a.i.className;
    b.classList.add("RmniWd-V67aGc-yrriRe-DyBK0");
    b.innerText = a.i.value;
    document.body.appendChild(b);
    var c = b.getBoundingClientRect().width + 3;
    document.body.removeChild(b);
    a.i.style.width = c + "px";
  };
  Rw.prototype.Z = function (a) {
    var b = S().g;
    if (b && a.target instanceof Vw && ((a = a.target.Ha), ao(b) && Do(b, a))) {
      a = t([a.g].concat(md(a.h)));
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = b.v[c.value]) && !Bo(c)) {
          var d = d || new Uh();
          c.g = d;
        }
      go(b);
      Zn(b);
      b.dispatchEvent("D");
    }
  };
  Rw.prototype.S = function () {
    this.dispatchEvent("G");
    Tw(this);
  };
  Rw.prototype.R = function (a) {
    var b = S(),
      c = b.g;
    b = b.h;
    if (c) {
      if ("QUMgc2VudGluZWwgbGFiZWw=" == a.g) {
        a = this.l.h;
        var d = a,
          e = Sn(b, d);
        e
          ? (b = e)
          : 100 <= ec(b.g)
          ? (b = null)
          : ((e = {}),
            (e = new Hn(((e.name = d), (e.mainId = "tag." + Ig() + "." + new Date().getTime()), e))),
            Jn(e),
            (b.g[e.g] = e),
            b.u(),
            b.s.listen(e, "k", b.u),
            (b = e));
        b && Fo(c, b);
        this.D ? (b && this.A && Lt(this.A, b), this.B.log(9056)) : y("impression", 9056);
      } else Fo(c, a), (a = a.ka()), this.D ? this.B.log(9060) : y("impression", 9060);
      Tw(this);
      c = chrome.i18n.getMessage("7733569569331009603", [a]);
      y("speakMessage", c);
      this.i && this.i.focus();
    }
  };
  var Sw = chrome.i18n.getMessage("11138431688427255"),
    Vw = function (a) {
      V.call(this);
      this.j = zh(fs);
      var b = chrome.i18n.getMessage("1988879857371940328", [a.ka()]);
      this.i = new Yv(b);
      pv(this, this.i);
      this.Ha = a;
      gv(this, a.g);
    };
  E(Vw, V);
  Vw.prototype.Ga = function () {
    this.g = ud(qu);
  };
  Vw.prototype.T = function () {
    V.prototype.T.call(this);
    mv(this.i, hv(this, "h1U9Be-V67aGc-VkLyEc"));
    mh(hv(this, "h1U9Be-V67aGc-V1ur5d"), this.Ha.ka());
    iv(this).listen(this, "action", this.l);
  };
  Vw.prototype.l = function (a) {
    a.target = this;
    Wi(dd(), "n_ecmv3m") ? this.j.log(9061) : y("impression", 9061);
  };
  Vw.prototype.jd = function (a) {
    this.i.setEnabled(a);
  };
  var Xw = function (a, b, c) {
    Wv.call(this, a, b, c, Ww.L());
  };
  E(Xw, Wv);
  var Ww = function () {};
  E(Ww, Vv);
  Ww.prototype.h = function () {
    return "Q0hgme-fmcmS-LgbsSe";
  };
  Ww.prototype.i = function () {
    return ju;
  };
  Ww.L = function () {
    return zh(Ww);
  };
  var Zw = function (a, b, c, d, e, f, g) {
    V.call(this, a);
    this.i = new Yw(c);
    this.N = null;
    this.B = b;
    this.l = new Xw();
    pv(this, this.l);
    this.v = null;
    this.F = e || "";
    this.D = f || null;
    this.j = d || null;
    this.G = g || null;
    this.A = null;
  };
  E(Zw, V);
  Zw.prototype.Ga = function () {
    this.g = ud(mu, { Xf: this.i.g });
  };
  Zw.prototype.T = function () {
    V.prototype.T.call(this);
    this.N = hv(this, "Q0hgme-n5T17d-woLtV");
    U(this.N, this.i.i);
    mh(hv(this, "Q0hgme-vDaB1c-Ne3sFf"), this.B);
    iv(this).listen(this.g, "click", function (a) {
      a.stopPropagation();
    });
    mv(this.l, hv(this, "Q0hgme-vDaB1c-JIbuQc"));
    iv(this).listen(this.l, "action", this.S);
    this.l.setContent(this.F);
    Iv(this.l, !!this.F);
    this.i.g &&
      ((this.v = new Yv($w)), pv(this, this.v), mv(this.v, hv(this, "Q0hgme-vDaB1c-IYtByb")), iv(this).listen(this.v, "action", this.R));
    this.i.timeout && (this.A = mq(this.hide, this.i.timeout, this));
    mq(
      function () {
        !this.pa && xu(this.C(), "ZiwkRe");
      },
      16,
      this
    );
  };
  Zw.prototype.getMessage = function () {
    return this.B;
  };
  Zw.prototype.hide = function (a) {
    this.pa || (a && (this.j && this.j(), (this.j = null)), ax(this), zu(this.C(), "ZiwkRe"), mq(this.ga, 218, this));
  };
  var ax = function (a) {
    null != a.A && n.clearTimeout(a.A);
  };
  Zw.prototype.S = function () {
    this.D && this.D();
    this.j = null;
    this.i.h || this.hide();
  };
  Zw.prototype.R = function () {
    this.hide();
    this.G && this.G();
  };
  Zw.prototype.K = function () {
    V.prototype.K.call(this);
    ax(this);
    this.j && this.j();
  };
  var $w = chrome.i18n.getMessage("8342620486324515462"),
    Yw = function (a) {
      this.g = !a || !(a & 2);
      this.i = !!a && !!(a & 16);
      this.h = !!a && !!(a & 1);
      this.timeout = a && a & 4 ? 0 : !this.g || (a && a) ? 5e3 : 1e4;
    };
  var bx = function () {
    M.call(this);
    this.i = qd();
    this.j = this.i.g.body;
    this.g = null;
    this.h = [];
  };
  E(bx, M);
  bx.prototype.config = function (a) {
    this.j = a || this.j;
  };
  bx.prototype.clearAll = function (a) {
    var b = this.h;
    if (a) qc(b);
    else
      for (a = 0; a < b.length; a++) {
        var c = b[a];
        c.i.timeout && (ax(c), mq(c.hide, 100 * a, c));
      }
  };
  var cx = function (a) {
    return a.h[a.h.length - 1] || null;
  };
  bx.prototype.show = function (a, b, c) {
    a = new Zw(this.i, a, b, c);
    dx(this, a);
    return a;
  };
  var ex = function (a, b, c, d, e) {
      b = new Zw(a.i, b, e, void 0, c, d, void 0);
      dx(a, b);
    },
    dx = function (a, b) {
      a.g || ((a.g = hh("DIV", "Q0hgme-vDaB1c-haAclf")), a.j.appendChild(a.g));
      U(a.g, !0);
      if (b.i.timeout)
        for (var c = a.h.length - 1; 0 <= c; c--) {
          var d = a.h[c];
          d.i.timeout && (d.hide(), a.h.splice(c, 1));
        }
      a.g.firstChild && b.i.timeout ? lv(b, a.g.firstChild) : b.wc(a.g);
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
  bx.prototype.K = function () {
    M.prototype.K.call(this);
    delete this.g;
  };
  chrome.i18n.getMessage("2452145367257933677");
  var fx = chrome.i18n.getMessage("3542768157572111342"),
    gx = function () {
      V.call(this);
      this.i = [];
      this.j = null;
      this.l = new bx();
    };
  E(gx, V);
  gx.prototype.Ga = function () {
    this.g = ud(ou);
  };
  gx.prototype.T = function () {
    var a = this;
    V.prototype.T.call(this);
    y("impression", 9213);
    this.j = this.C().querySelector(".rymPhb-PntVL");
    this.l.config(this.g);
    ex(
      this.l,
      fx,
      cp,
      function () {
        return a.dispatchEvent("J");
      },
      8
    );
  };
  gx.prototype.ac = function () {
    return this.j;
  };
  gx.prototype.update = function () {
    var a = S().g;
    a = a ? Tc(a) : [];
    for (
      Bd(
        a,
        function (b, c) {
          (c = this.i[c]) ? c.update(b) : ((c = new hx(b)), pv(this, c, !0), this.i.push(c));
        },
        this
      );
      this.i.length > a.length;

    )
      qv(this, this.i.pop());
    this.dispatchEvent("K");
  };
  var hx = function (a) {
    V.call(this);
    this.j = a;
    this.i = null;
  };
  E(hx, V);
  hx.prototype.Ga = function () {
    this.g = ud(pu);
  };
  hx.prototype.T = function () {
    V.prototype.T.call(this);
    this.i = this.C().querySelector(".rymPhb-ibnC6b-fmcmS");
    this.update(this.j);
  };
  hx.prototype.update = function (a) {
    mh(this.i, Uc(a));
    Bu(this.C(), "barxie", a.xa);
  };
  var ix = function () {
    this.g = chrome.storage.local;
    this.h = RegExp("^gksn-");
  };
  ix.prototype.get = function (a, b) {
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
  ix.prototype.getAll = function (a) {
    this.get("", a);
  };
  ix.prototype.set = function (a, b, c) {
    var d = {};
    d[a] = b;
    jx(this, d, c);
  };
  var jx = function (a, b, c) {
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
  ix.prototype.remove = function (a, b) {
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
  ix.prototype.contains = function (a, b) {
    kx(
      this,
      a,
      ee(function (c, d) {
        c(!!d);
      }, b)
    );
  };
  var kx = function (a, b, c) {
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
  var lx = {
      Ke: {
        1e3: { other: "0K" },
        1e4: { other: "00K" },
        1e5: { other: "000K" },
        1e6: { other: "0M" },
        1e7: { other: "00M" },
        1e8: { other: "000M" },
        1e9: { other: "0B" },
        1e10: { other: "00B" },
        1e11: { other: "000B" },
        1e12: { other: "0T" },
        1e13: { other: "00T" },
        1e14: { other: "000T" }
      },
      Je: {
        1e3: { other: "0 thousand" },
        1e4: { other: "00 thousand" },
        1e5: { other: "000 thousand" },
        1e6: { other: "0 million" },
        1e7: { other: "00 million" },
        1e8: { other: "000 million" },
        1e9: { other: "0 billion" },
        1e10: { other: "00 billion" },
        1e11: { other: "000 billion" },
        1e12: { other: "0 trillion" },
        1e13: { other: "00 trillion" },
        1e14: { other: "000 trillion" }
      }
    },
    mx = lx;
  mx = lx;
  var nx = {
      Pe: ".",
      Te: ",",
      pf: "%",
      Bf: "0",
      sf: "+",
      gf: "-",
      Se: "E",
      rf: "\u2030",
      Ue: "\u221e",
      mf: "NaN",
      Oe: "#,##0.###",
      uf: "#E0",
      qf: "#,##0%",
      Le: "\u00a4#,##0.00",
      Qe: "USD"
    },
    ox = nx;
  ox = nx;
  var px = function () {
    qd();
  };
  px.prototype.wc = function (a, b) {
    a = a(b || {}, {});
    return String(a);
  };
  var qx = function (a) {
    a(pd, {});
  };
  new px();
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
  var rx = chrome.i18n.getMessage("5592884381280360832");
  chrome.i18n.getMessage("6069780031254134657");
  chrome.i18n.getMessage("7624042048123264803");
  chrome.i18n.getMessage("900086393693234779");
  chrome.i18n.getMessage("6822520214440117457");
  chrome.i18n.getMessage("5275304974990264425");
  chrome.i18n.getMessage("4514241210910366093");
  chrome.i18n.getMessage("1694896269813520248");
  chrome.i18n.getMessage("7254411458460045711");
  chrome.i18n.getMessage("5510222038351634163");
  qx(function () {
    return chrome.i18n.getMessage("8104421162933956065");
  });
  qx(function () {
    return chrome.i18n.getMessage("1055686627716339120");
  });
  qx(function () {
    return chrome.i18n.getMessage("2983318659047499045");
  });
  qx(function () {
    return chrome.i18n.getMessage("3418677553313974490");
  });
  qx(function () {
    return chrome.i18n.getMessage("546766753072101168");
  });
  qx(function () {
    return chrome.i18n.getMessage("7585826646011739428");
  });
  qx(function () {
    return chrome.i18n.getMessage("7528441140724145783");
  });
  qx(function () {
    return chrome.i18n.getMessage("2323249770683736002");
  });
  qx(function () {
    return chrome.i18n.getMessage("4930506384627295710");
  });
  qx(function () {
    return chrome.i18n.getMessage("7102649289752747375");
  });
  qx(function () {
    return chrome.i18n.getMessage("7911416166208830577");
  });
  qx(function () {
    return chrome.i18n.getMessage("8193677552005249631");
  });
  qx(function () {
    return chrome.i18n.getMessage("7005745151564974365");
  });
  qx(function () {
    return chrome.i18n.getMessage("7384785369409503695");
  });
  qx(function () {
    return chrome.i18n.getMessage("4974261966265341751");
  });
  qx(function () {
    return chrome.i18n.getMessage("7420364754178516134");
  });
  qx(function () {
    return chrome.i18n.getMessage("5570885401952336951");
  });
  qx(function () {
    return chrome.i18n.getMessage("9146862513672039744");
  });
  chrome.i18n.getMessage("3714239567487848851");
  chrome.i18n.getMessage("2930974997943171554");
  chrome.i18n.getMessage("7735981667219692675");
  chrome.i18n.getMessage("3769279410443855918");
  var sx = function (a, b, c) {
      this.j = a;
      this.i = b;
      this.h = c;
    },
    wx = function (a) {
      tx(a, a.h).then(function (b) {
        !b && 36e5 < Date.now() - ux && vx(a);
      });
    },
    vx = function (a) {
      ux = Date.now();
      ex(
        a.j,
        a.i,
        rx,
        function () {
          a.g.set(a.h, !0);
        },
        6
      );
    },
    ux = 0;
  var xx = new cn(),
    yx = chrome.i18n.getMessage("7253527966847172544", [xx.format(new Date(2022, 11, 5))]),
    zx = function (a) {
      sx.call(this, a, yx, "mv2_deprecation_message");
      this.g = zh(ix);
    };
  E(zx, sx);
  var tx = function (a, b) {
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
  var Ax = {},
    $b =
      ((Ax.DEFAULT = "#FFFFFF"),
      (Ax.RED = "#FAAFA8"),
      (Ax.ORANGE = "#F39F76"),
      (Ax.YELLOW = "#FFF8B8"),
      (Ax.GREEN = "#E2F6D3"),
      (Ax.TEAL = "#B4DDD3"),
      (Ax.BLUE = "#D4E4ED"),
      (Ax.CERULEAN = "#AECCDC"),
      (Ax.PURPLE = "#D3BFDB"),
      (Ax.PINK = "#F6E2DD"),
      (Ax.BROWN = "#E9E3D4"),
      (Ax.GRAY = "#EFEFF1"),
      Ax),
    Bx = function () {
      this.g = ac(function (a) {
        if (!Dw.test(a)) throw Error("Ca`" + a);
        4 == a.length && (a = a.replace(Cw, "#$1$1$2$2$3$3"));
        a = a.toLowerCase();
        a = parseInt(a.slice(1), 16);
        return ("rgb(" + [a >> 16, (a >> 8) & 255, a & 255].join() + ")").replace("rgb", "rgba").replace(")", ", 0.8)");
      });
      this.g.DEFAULT = "rgba(242, 242, 242, 0.8)";
    };
  Bx.prototype.aa = function (a) {
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
  var Cx = [[], []],
    Dx = 0,
    Ex = !1,
    Fx = 0,
    Hx = function (a, b) {
      var c = Fx++,
        d = { Zf: { id: c, Pa: a.measure, context: b }, bg: { id: c, Pa: a.ie, context: b }, state: {}, args: void 0, qc: !1 };
      return function () {
        0 < arguments.length
          ? (d.args || (d.args = []), (d.args.length = 0), d.args.push.apply(d.args, arguments), d.args.push(d.state))
          : d.args && 0 != d.args.length
          ? ((d.args[0] = d.state), (d.args.length = 1))
          : (d.args = [d.state]);
        d.qc || ((d.qc = !0), Cx[Dx].push(d));
        Ex || ((Ex = !0), window.requestAnimationFrame(Gx));
      };
    },
    Gx = function () {
      Ex = !1;
      var a = Cx[Dx],
        b = a.length;
      Dx = (Dx + 1) % 2;
      for (var c, d = 0; d < b; ++d) {
        c = a[d];
        var e = c.Zf;
        c.qc = !1;
        e.Pa && e.Pa.apply(e.context, c.args);
      }
      for (d = 0; d < b; ++d) (c = a[d]), (e = c.bg), (c.qc = !1), e.Pa && e.Pa.apply(e.context, c.args), (c.state = {});
      a.length = 0;
    };
  var Ix = H ? zg(ug(new tg(rg, 'javascript:""'))) : zg(ug(new tg(rg, "about:blank")));
  H ? zg(ug(new tg(rg, 'javascript:""'))) : zg(ug(new tg(rg, "javascript:undefined")));
  var Jx = function (a) {
    R.call(this);
    this.g = a;
    a = H ? "focusout" : "blur";
    this.h = zj(this.g, H ? "focusin" : "focus", this, !H);
    this.i = zj(this.g, a, this, !H);
  };
  G(Jx, R);
  Jx.prototype.handleEvent = function (a) {
    var b = new mj(a.h);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b);
  };
  Jx.prototype.K = function () {
    Jx.O.K.call(this);
    Hj(this.h);
    Hj(this.i);
    delete this.g;
  };
  var Kx = function (a, b) {
    this.i = a;
    this.h = b;
  };
  var Lx = function (a, b) {
    V.call(this, b);
    this.Me = !!a;
    this.Z = null;
    this.Ce = Hx({ ie: this.xc }, this);
    Hx({ ie: this.Fe }, this);
  };
  G(Lx, V);
  k = Lx.prototype;
  k.Sc = null;
  k.cc = !1;
  k.za = null;
  k.ma = null;
  k.Fa = null;
  k.Oc = !1;
  k.Ga = function () {
    Lx.O.Ga.call(this);
    var a = this.C();
    yu(a, je("VIpgJd-TUo6Hb").split(" "));
    ph(a, !0);
    U(a, !1);
    Mx(this);
    Nx(this);
  };
  var Mx = function (a) {
      if (a.Me && !a.ma) {
        var b = a.h.rb("IFRAME", { frameborder: 0, style: "border:0;vertical-align:bottom;" });
        b.src = wg(Ix);
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
      a.za || ((a.za = a.h.rb("DIV", "VIpgJd-TUo6Hb-xJ5Hnf")), U(a.za, !1));
    },
    Nx = function (a) {
      a.Fa || ((a.Fa = rd(a.h.g, "SPAN")), U(a.Fa, !1), ph(a.Fa, !0), (a.Fa.style.position = "absolute"));
    };
  k = Lx.prototype;
  k.ve = function () {
    this.Oc = !1;
  };
  k.Dc = function (a) {
    return !!a && "DIV" == a.tagName;
  };
  k.vb = function (a) {
    Lx.O.vb.call(this, a);
    a = je("VIpgJd-TUo6Hb").split(" ");
    yu(this.C(), a);
    Mx(this);
    Nx(this);
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
    Lx.O.T.call(this);
    a = this.C();
    a.parentNode && a.parentNode.insertBefore(this.Fa, a.nextSibling);
    this.Sc = new Jx(this.h.g);
    iv(this).listen(this.Sc, "focusin", this.onFocus);
    Ox(this, !1);
  };
  k.ib = function () {
    this.isVisible() && Px(this, !1);
    pc(this.Sc);
    Lx.O.ib.call(this);
    kh(this.ma);
    kh(this.za);
    kh(this.Fa);
  };
  var Px = function (a, b) {
      if (b != a.cc)
        if ((a.ca && a.ca.stop(), a.wa && a.wa.stop(), a.ba && a.ba.stop(), a.ua && a.ua.stop(), a.da && Ox(a, b), b)) {
          if (a.dispatchEvent("beforeshow")) {
            try {
              a.Z = a.h.g.activeElement;
            } catch (f) {}
            a.Fe();
            iv(a).listen(dh(a.h.g), "resize", a.xc).listen(dh(a.h.g), "orientationchange", a.Ce);
            Qx(a, !0);
            a.focus();
            a.cc = !0;
            a.ca && a.wa ? (yj(a.ca, "end", a.pe, !1, a), a.wa.play(), a.ca.play()) : a.pe();
          }
        } else if (a.dispatchEvent("beforehide")) {
          iv(a).X(dh(a.h.g), "resize", a.xc).X(dh(a.h.g), "orientationchange", a.Ce);
          a.cc = !1;
          a.ba && a.ua ? (yj(a.ba, "end", a.je, !1, a), a.ua.play(), a.ba.play()) : a.je();
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
    Ox = function (a, b) {
      a.ze || (a.ze = new Kx(a.g, a.h));
      a = a.ze;
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
  Lx.prototype.Fe = function () {
    this.xc();
    this.Ad();
  };
  var Qx = function (a, b) {
    a.ma && U(a.ma, b);
    a.za && U(a.za, b);
    U(a.C(), b);
    U(a.Fa, b);
  };
  k = Lx.prototype;
  k.pe = function () {
    this.dispatchEvent("show");
  };
  k.je = function () {
    Qx(this, !1);
    this.dispatchEvent("hide");
  };
  k.isVisible = function () {
    return this.cc;
  };
  k.focus = function () {
    this.de();
  };
  k.xc = function () {
    this.ma && U(this.ma, !1);
    this.za && U(this.za, !1);
    var a = this.h.g;
    var b = bh(fh(this.h.g) || window || window);
    var c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.ma && (U(this.ma, !0), Lu(this.ma, c, a));
    this.za && (U(this.za, !0), Lu(this.za, c, a));
  };
  k.Ad = function () {
    if ("fixed" == Eu(this.C(), "position"))
      var a = 0,
        b = 0;
    else (b = eh(this.h.g)), (a = b.x), (b = b.y);
    var c = Nu(this.C());
    var d = bh(fh(this.h.g) || window || window);
    a = Math.max(a + d.width / 2 - c.width / 2, 0);
    b = Math.max(b + d.height / 2 - c.height / 2, 0);
    Gu(this.C(), a, b);
    Gu(this.Fa, a, b);
  };
  k.onFocus = function (a) {
    this.Oc ? this.ve() : a.target == this.Fa && mq(this.de, 0, this);
  };
  k.de = function () {
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
    Lx.O.K.call(this);
  };
  var Sx = function (a) {
    Lx.call(this);
    this.re = zh(fs);
    this.gb = this.B = null;
    this.He = new Bx();
    this.hb = null;
    this.A = new bx();
    var b = chrome.i18n.getMessage("4047470251075013857");
    this.Da = new Yv(b);
    pv(this, this.Da);
    this.Ia = null;
    this.Sb = new Xw();
    pv(this, this.Sb);
    this.xb = new nq(this.oc, 5e3, this);
    N(this, this.xb);
    this.i = this.ya = this.l = this.jb = this.te = this.se = null;
    this.ta = new gx();
    pv(this, this.ta);
    this.Rb = null;
    this.yb = new $v();
    pv(this, this.yb);
    this.zb = new Yv(Rx);
    pv(this, this.zb);
    this.F = new Xw();
    pv(this, this.F);
    this.xa = new Xw();
    pv(this, this.xa);
    this.R = new Xw();
    pv(this, this.R);
    this.Be = new Yv(cp, "J");
    pv(this, this.Be);
    b = chrome.i18n.getMessage("9218540601355708194");
    this.Ee = new Yv(b, "L");
    pv(this, this.Ee);
    this.j = Wi(dd(), "n_ecmv3m");
    Wi(dd(), "n_scp") && !this.j ? ((this.S = new Yv(bp)), pv(this, this.S)) : this.j && zj(window, "beforeunload", this.Vc);
    this.N = null;
    this.fb = !0;
    this.we = "";
    b = new nq(this.De, 20, this);
    N(this, b);
    this.Ca = new Or(b.Bc, 30, b);
    N(this, this.Ca);
    this.Bb = 0;
    this.v = 1;
    As(S(), this.update, this);
    this.j && a && ((this.tc = a), (this.Va = new Ht(this.tc)));
    this.D = new Rw(this.Va);
    pv(this, this.D);
    this.Ba = this.Ab = !1;
  };
  E(Sx, Lx);
  var Tx = function (a) {
    Qt(a.Va, function (b, c) {
      c && ((b = {}), S().h.update(((b[Mn.Lc] = c), b)), (a.Ab = !0));
    });
  };
  Sx.prototype.vb = function (a) {
    Lx.prototype.vb.call(this, a);
    var b = (b = { hg: !!this.S, Yf: this.j });
    var c = b.hg,
      d = b.Yf;
    b = Wt;
    var e = '<div class="' + T("k77Iif-V68bde") + '">';
    var f = Wt(
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
        gu("Rsbfue-e1YmVc") +
        "</div>"
    );
    e =
      e +
      f +
      '<div class="' +
      T("HiaYvf-FCjw3e") +
      '"></div>' +
      Wt(
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
      ? ((f += gu(" Q0hgme-l4eHX ", $t('<img src="icon_48.png" width="25" height="25" alt="Google Keep logo"/>'))),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["2159130950882492111", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += iu($t(c), " IbE0S-h1U9Be ")),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["3623199266894863617", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += iu($t(c), " t0O6ic-h1U9Be fmcmS-LgbsSe-v3pZbf ")),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["7819314041543176992", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += iu($t(c), " TvD9Pc-h1U9Be fmcmS-LgbsSe-v3pZbf ")))
      : ((f += gu("zM6fo") + (c ? gu("N7Eqid") : "") + '<div class="' + T("Rsbfue-e1YmVc-sfGayb") + '"><label>'),
        (c = chrome.i18n.getMessage.apply(
          null,
          ["6857703948759289202", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
        )),
        (f = f + c + "&nbsp;</label>"),
        (c = chrome.i18n.getMessage("5775346636203685655")),
        (f += iu(c, "hSRGPd")),
        (f +=
          '</div><div class="' +
          T("PrY1nf-Bz112c") +
          '"></div><label class="' +
          T("Yygnk-EglORb") +
          '"></label>' +
          gu("FNFY6c-bEDTcc-Q0hgme") +
          lu(void 0, "purZT")));
    f = Wt(f + "</div>");
    (b = b(e + f + '</div><div class="' + T("ugfBjd-V68bde") + '"></div>')) && b.h && a ? b.h(a) : ((b = sd(b)), td(a, b));
    this.B = a.querySelector(".k77Iif-V68bde");
    Wi(dd(), "n_emv2dm") && (this.gb = a.querySelector(".ugfBjd-V68bde")) && ((b = new bx()), b.config(this.gb), wx(new zx(b)));
    this.hb = a.querySelector(".e1YmVc-haAclf");
    mv(this.Da, a.querySelector(".Rsbfue-e1YmVc"));
    this.se = a.querySelector(".e1YmVc-HiaYvf");
    this.te = a.querySelector(".e1YmVc-r4nke");
    this.jb = a.querySelector(".e1YmVc-dZ8yzd");
    this.ya = a.querySelector(".mwcmwf-haAclf");
    b = chrome.i18n.getMessage("2780054062282129350");
    this.l = a.querySelector(".h1U9Be-r4nke");
    this.l.setAttribute("maxlength", "999");
    vh(this.l, "label", b);
    this.l.placeholder = b;
    mv(this.yb, a.querySelector(".HiaYvf-FCjw3e"));
    b = chrome.i18n.getMessage("5061847320181369179");
    this.i = a.querySelector(".h1U9Be-qJTHM");
    this.i.setAttribute("maxlength", "16999");
    vh(this.i, "label", b);
    this.i.placeholder = b;
    mv(this.D, a.querySelector(".SjW3R-ZMv3u"));
    this.j
      ? (mv(this.zb, a.querySelector(".Q0hgme-l4eHX")),
        mv(this.F, a.querySelector(".t0O6ic-h1U9Be")),
        mv(this.xa, a.querySelector(".IbE0S-h1U9Be")),
        mv(this.R, a.querySelector(".TvD9Pc-h1U9Be")),
        Iv(this.R, !1),
        this.ya && this.A.config(this.ya))
      : ((this.Ia = a.querySelector(".Rsbfue-e1YmVc-sfGayb")),
        mv(this.Sb, this.Ia.querySelector(".Q0hgme-fmcmS-LgbsSe")),
        mv(this.Be, a.querySelector(".FNFY6c-bEDTcc-Q0hgme")),
        (this.Rb = a.querySelector(".Yygnk-EglORb")),
        mv(this.Ee, a.querySelector(".zM6fo")),
        this.S && mv(this.S, a.querySelector(".N7Eqid")));
  };
  Sx.prototype.T = function () {
    var a = this;
    Lx.prototype.T.call(this);
    xn(
      iv(this).listen(this, "J", function () {
        return Ux(a);
      }),
      this,
      "K",
      this.Ca.qa,
      !1,
      this.Ca
    )
      .listen(this.Da, "action", this.Tf)
      .listen(this.Sb, "action", this.Wf)
      .listen(this.l, "input", this.Vf)
      .listen(this.i, "input", this.Rf)
      .listen(this.ya, "click", this.Mf)
      .listen(this.D, "G", F(this.G, this, !0))
      .listen(this.C(), "keydown", this.ff)
      .listen(this.zb, "action", this.Sf)
      .listen(this.F, "action", this.kb)
      .listen(this.xa, "action", this.ge)
      .listen(this.R, "action", this.ge);
    this.S && iv(this).listen(this.S, "action", this.Of);
    Px(this, !0);
    Vx(this, function () {
      a.j && y("configureContextMenu", a.v);
    });
  };
  Sx.prototype.update = function () {
    if (this.da) {
      this.j || Wx(this);
      var a = S(),
        b = a.i;
      a.j && b
        ? (mh(this.te, b.getTitle()),
          mh(this.jb, b.u || ""),
          Tu.L().La(this.jb, b.Qa()),
          (b = b.l),
          (this.se.style.backgroundImage = b ? "url('" + b + "')" : ""),
          U(this.hb, !0))
        : U(this.hb, !1);
      if ((b = a.g)) {
        var c = yo(b);
        this.B.style.backgroundColor = this.He.aa(c);
        c != this.we && "DEFAULT" != c && y("impression", 9214);
        this.we = c;
        this.l.value != b.getTitle() && ((this.l.value = b.getTitle()), Xx(this, this.l));
        this.l.value && this.G(!0);
        Iv(this.Da, Rc(b));
        U(this.i, Rc(b));
        c = this.ta;
        var d = $n(b);
        c.C() && U(c.C(), d);
        $n(b)
          ? (this.ta.da || (lv(this.ta, this.i), this.l.focus()), this.ta.update(), this.G(!0))
          : (this.i.value != a.l &&
              ((this.i.value = a.l), Xx(this, this.i), this.i.focus(), (this.i.selectionStart = this.i.selectionEnd = this.i.value.length)),
            this.i.value && this.G(!0));
      }
    }
  };
  var Vx = function (a, b) {
      b = void 0 === b ? ng : b;
      var c = a.C();
      c &&
        (Xx(a, a.l),
        Xx(a, a.i),
        a.i.value && a.G(!0),
        c.classList.add("ZiwkRe"),
        mq(function () {
          a.De();
          a.i.focus();
          b();
        }, 218));
    },
    $x = function (a, b) {
      var c = F(a.D.N, a.D);
      b = b ? og(c, b) : c;
      if ((c = a.C()) && c.classList.contains("ZiwkRe")) {
        c.classList.remove("ZiwkRe");
        mq(b, 218);
        if (!a.j) {
          b = S().g;
          if (!b || !Rc(b) || !a.i.value) return;
          b = a.i.value.length;
          c = 2;
          b < Yx[1] ? (c = 0) : b < Yx[2] && (c = 1);
          y("impression", Zx[c]);
        }
        a.Bb = 0;
      } else b();
    };
  Sx.prototype.G = function (a) {
    var b = this,
      c = function () {
        Bu(b.ya, "qAWA2", !a);
        a && (Xx(b, b.l), Xx(b, b.i));
        b.Ca.qa();
      };
    this.j
      ? ay(this, "ping", void 0, function () {
          return c();
        })
      : c();
  };
  var cy = function (a, b) {
    b
      ? (a.N ||
          ((a.N = ud(su)),
          (b = new Xw()),
          mv(b, a.N.querySelector(".mKZypf-bEDTcc-LgbsSe")),
          iv(a).listen(b, "action", a.Uf),
          a.B && a.B.appendChild(a.N),
          by(a, 9212)),
        U(a.N, !0))
      : a.N && U(a.N, !1);
  };
  Sx.prototype.Ad = function () {};
  Sx.prototype.De = function () {
    var a = this.C().getBoundingClientRect(),
      b = Math,
      c = b.max,
      d = a.bottom;
    a = parseInt(window.getComputedStyle(this.C()).marginTop, 10) + a.height;
    var e = (e = this.D.v.C()) ? e.getBoundingClientRect().bottom : 0;
    b = c.call(b, d, a, e);
    b != this.Bb && (ay(this, "appHeightChange", b + 10 + "px"), (this.Bb = b));
  };
  var Xx = function (a, b) {
      b && ((b.style.height = "auto"), (b.style.height = b.scrollHeight + "px"), a.Ca.qa());
    },
    Wx = function (a) {
      if (a.da) {
        if (a.fb) {
          var b = S();
          b.B && Ds(b) ? (xu(a.B, "vOkj6e"), zu(a.B, "PrY1nf"), (b = dy)) : (zu(a.B, "vOkj6e"), zu(a.B, "PrY1nf"), (b = ey));
        } else zu(a.B, "vOkj6e"), xu(a.B, "PrY1nf"), (b = fy);
        a.Rb && mh(a.Rb, b);
      }
    };
  Sx.prototype.kb = function () {
    var a = this,
      b = S().g,
      c = Co(b),
      d = new at();
    bt(d);
    d.setTitle(b.getTitle());
    Zs(d.g, Sc(b));
    b = gy(b);
    this.v = 2;
    hy(this, !1);
    iy(this);
    jy(this);
    Nt(this.Va, d, b, c, function (e, f) {
      mq(function () {
        a.v = ky(e);
        switch (a.v) {
          case 3:
          case 5:
            Gj(window, "beforeunload", a.Vc);
            break;
          case 6:
            hy(a, !0);
        }
        iy(a);
        jy(a, f);
        by(a, 9586, ly(a));
      }, 218);
    });
  };
  var gy = function (a) {
      return Jo(a).map(function (b) {
        b = Ko(b).l;
        return Nc.test(b) ? ((b = b.match(Nc)), new ct(void 0, b ? b[2] : "")) : new ct(b);
      });
    },
    ky = function (a) {
      if (pq(a)) return 3;
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
    iy = function (a) {
      switch (a.v) {
        case 2:
          a.F.setEnabled(!1);
          break;
        case 3:
        case 5:
          Iv(a.F, !1);
          Iv(a.xa, !1);
          Iv(a.R, !0);
          break;
        case 6:
          a.F.setEnabled(!0);
      }
    },
    jy = function (a, b) {
      var c = cx(a.A);
      c
        ? (c.hide(),
          mq(function () {
            my(a, b);
          }, 218))
        : my(a, b);
    },
    my = function (a, b) {
      switch (a.v) {
        case 2:
          a.A.show(ny, 22);
          break;
        case 3:
          ex(
            a.A,
            oy,
            py,
            function () {
              b && Ux(a, b);
            },
            7
          );
          break;
        case 5:
          ex(
            a.A,
            qy,
            ry,
            function () {
              var c = S().g;
              c = c.getTitle() + "\n" + Sc(c);
              navigator.clipboard.writeText(c);
            },
            6
          );
          break;
        case 4:
          a.A.show(sy, 6);
          break;
        case 6:
          ex(a.A, ty, uy, function () {
            cx(a.A).hide();
            mq(function () {
              return a.kb();
            }, 218);
          });
      }
    },
    hy = function (a, b) {
      if ((a.fb && !a.Ba) || !b)
        b
          ? (a.l.removeAttribute("readonly"), a.i.removeAttribute("readonly"))
          : (a.l.setAttribute("readonly", !0), a.i.setAttribute("readonly", !0)),
          Iv(a.Da, b),
          Uw(a.D, b),
          dw(a.yb, b),
          ay(a, "configureContextMenu", a.v);
    },
    xy = function (a) {
      a.Ba ||
        ((a.Ba = !0),
        2 !== a.v &&
          3 !== a.v &&
          (hy(a, !1),
          Iv(a.F, !1),
          Iv(a.xa, !1),
          Iv(a.R, !0),
          ex(
            a.A,
            vy,
            wy,
            function () {
              cx(a.A).hide();
              mq(function () {
                return a.kb();
              }, 218);
            },
            6
          )));
    };
  k = Sx.prototype;
  k.ge = function () {
    var a = this;
    Gj(window, "beforeunload", this.Vc);
    $x(this, function () {
      ay(a, "configureContextMenu", void 0, function () {
        ay(a, "removeIframe");
      });
    });
    by(this, 9585, ly(this));
    gs(this.re);
  };
  k.oc = function () {
    zu(this.Ia, "ZiwkRe");
    this.xb.stop();
  };
  k.Tf = function () {
    Cs(!1);
    by(this, 9154);
    this.j || xu(this.Ia, "ZiwkRe");
    ay(this, "speakMessage", yy);
    this.l.focus();
    this.j || this.xb.start();
  };
  k.Wf = function () {
    Cs(!0);
    y("impression", 9174);
    this.l.focus();
    this.oc();
  };
  k.Vf = function () {
    this.j || this.oc();
    var a = S().g;
    a && (!a.getTitle() && this.l.value && by(this, 9200), a.setTitle(this.l.value));
    Xx(this, this.l);
  };
  k.Rf = function () {
    this.j || this.oc();
    this.G(!0);
    var a = S();
    a.l = this.i.value;
    os(a);
    Xx(this, this.i);
  };
  var Ux = function (a, b) {
    var c = S().g;
    if ((c = b || c.g)) {
      b = window;
      c = { note: c };
      var d = xg.exec(wg(ap)),
        e = d[3] || "";
      c = zg(d[1] + Ag("?", d[2] || "", c) + Ag("#", e));
      Fd(b, Fc(c.toString()));
      by(a, 9202);
    }
  };
  k = Sx.prototype;
  k.Sf = function () {
    Fd(window, Fc(ap.toString()));
  };
  k.Of = function () {
    Fd(window, $o);
    y("impression", 9193);
  };
  k.Mf = function (a) {
    0 == a.button &&
      (this.j && ay(this, "ping"),
      this.G(!0),
      lh(this.D.C(), a.target) &&
        mq(
          function () {
            var b = this.D;
            b.i && b.i.focus();
          },
          0,
          this
        ));
  };
  k.ff = function (a) {
    if (27 == a.keyCode || (13 == a.keyCode && (Oe ? a.metaKey : a.ctrlKey)))
      this.j ? (a = th(this.h.g)) && a.blur() : (this.dispatchEvent("H"), a.stopPropagation(), a.g());
    else if (9 == a.keyCode && a.shiftKey && a.target == this.C()) {
      this.Oc = !0;
      try {
        this.Fa.focus();
      } catch (b) {}
      mq(this.ve, 0, this);
    } else this.j && ay(this, "ping");
  };
  k.Uf = function () {
    this.j ? Dh(this.tc) : y("authRequest");
  };
  k.Vc = function (a) {
    if (S().g.i) return a.g(), (a.h.returnValue = "");
  };
  var by = function (a, b, c) {
      if (a.j) {
        var d = function (e) {
          e = qp(e);
          C(e, 58, c);
        };
        a.re.log(b, c && d);
      } else y("impression", b);
    },
    ly = function (a) {
      var b = new fj();
      return $c(b, 3, zy[a.v]);
    },
    ay = function (a, b, c, d) {
      if (!a.j) y(b, c, d);
      else if (!a.Ba)
        try {
          y(b, c, d);
        } catch (e) {
          xy(a);
        }
    },
    Rx = chrome.i18n.getMessage("9167784195765779453"),
    py = chrome.i18n.getMessage("7687507512675715498"),
    uy = chrome.i18n.getMessage("1943542607990075955"),
    ry = chrome.i18n.getMessage("2259263507947555096"),
    vy = chrome.i18n.getMessage("1796799676667865488"),
    wy = chrome.i18n.getMessage("223492684871721243"),
    sy = chrome.i18n.getMessage("4035272937326361881"),
    Ay = chrome.i18n.getMessage("4962916837925056840"),
    oy = chrome.i18n.getMessage("6717438461651235082"),
    ty = chrome.i18n.getMessage("2336058986978607910"),
    qy = chrome.i18n.getMessage("4184329490330819477"),
    ny = chrome.i18n.getMessage("3708201433602754428"),
    yy = chrome.i18n.getMessage("2269286357657606271"),
    dy = chrome.i18n.getMessage("4409688924773693376"),
    ey = chrome.i18n.getMessage("9116610943383363940"),
    fy = chrome.i18n.getMessage("5782779707150593352"),
    Yx = [0, 100, 600],
    Zx = [9206, 9207, 9208],
    By = {},
    zy = ((By[0] = 0), (By[1] = 1), (By[2] = 1), (By[3] = 3), (By[4] = 4), (By[5] = 2), (By[6] = 2), By);
  var is = "s--" + new Date().getTime() + "--" + Math.round(2147483648 * Math.random()),
    Dy = function () {
      M.call(this);
      var a = this;
      if ((this.i = Wi(dd(), "n_ecmv3m")))
        (this.j = new Bh(function (c) {
          var d = a.g;
          cy(d, !c);
          hy(d, c);
          c && !d.Ab && Tx(d);
          y("authAvailability", c);
        })),
          (this.o = zh(fs)),
          Ch(this.j, !1, function () {
            hs(
              a.o,
              ks(function () {
                return a.j.g;
              })
            );
          });
      this.g = new Sx(this.j);
      N(this, this.g);
      this.i || ((this.A = new Fs()), N(this, this.A));
      this.h = S();
      this.s = new nq(this.B, 3e5, this);
      var b = new un(this);
      N(this, b);
      b.listen(this.g, "L", this.v).listen(this.h, "H", this.l).listen(this.g, "H", this.l);
      this.i &&
        b.listen(rp.L(), "change", function (c) {
          return Cy(a, c.pc);
        });
    };
  E(Dy, M);
  var Fy = function () {
      var a = Ey;
      mv(a.g, document.querySelector("#keep-it-container"));
      a.i
        ? (y("appLoaded", void 0, function (b) {
            ss(a.h, b);
          }),
          rp.L().pc() || Cy(a, !1),
          a.o.log(9175))
        : y("appLoaded");
    },
    Cy = function (a, b) {
      var c = a.g;
      c.fb = b;
      if (c.j) {
        if (3 !== c.v && !c.Ba) {
          !c.Ab && b && Tx(c);
          hy(c, b);
          c.F.setEnabled(b);
          var d = cx(c.A);
          b ? d && d.hide() : d || c.A.show(Ay, 6);
        }
      } else Wx(c);
      a.h.R = b;
    };
  Dy.prototype.l = function () {
    $x(this.g, F(this.u, this));
    this.s.start();
  };
  Dy.prototype.u = function () {
    y("finishHide");
    Bs(this.h, !0);
    this.g.G(!1);
  };
  Dy.prototype.B = function () {
    y("appSelfClose");
  };
  Dy.prototype.v = function () {
    Bs(this.h);
    y("impression", 9012);
    this.l();
  };
  var Ey = new Dy(),
    Gy = function () {
      Wi(dd(), "n_dlis") ||
        ((O.pd = I18N_DATETIMESYMBOLS_ERAS),
        (O.od = I18N_DATETIMESYMBOLS_ERANAMES),
        (O.Ld = I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS),
        (O.Ed = I18N_DATETIMESYMBOLS_NARROWMONTHS),
        (O.Cd = I18N_DATETIMESYMBOLS_MONTHS),
        (O.Kd = I18N_DATETIMESYMBOLS_STANDALONEMONTHS),
        (O.Gd = I18N_DATETIMESYMBOLS_SHORTMONTHS),
        (O.Nd = I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS),
        (O.Sd = I18N_DATETIMESYMBOLS_WEEKDAYS),
        (O.Pd = I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS),
        (O.Id = I18N_DATETIMESYMBOLS_SHORTWEEKDAYS),
        (O.Od = I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS),
        (O.nf = I18N_DATETIMESYMBOLS_NARROWWEEKDAYS),
        (O.Md = I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS),
        (O.Hd = I18N_DATETIMESYMBOLS_SHORTQUARTERS),
        (O.Fd = I18N_DATETIMESYMBOLS_QUARTERS),
        (O.ld = I18N_DATETIMESYMBOLS_AMPMS),
        (O.Fb = I18N_DATETIMESYMBOLS_DATEFORMATS),
        (O.Mc = I18N_DATETIMESYMBOLS_TIMEFORMATS),
        (O.md = I18N_DATETIMESYMBOLS_DATETIMEFORMATS),
        (O.Wb = I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK),
        (O.xf = I18N_DATETIMESYMBOLS_WEEKENDRANGE),
        (O.Xb = I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY),
        (mn.yf = I18N_DATETIMEPATTERNS_YEAR_FULL),
        (mn.zf = I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR),
        (mn.Af = I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL),
        (mn.hf = I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR),
        (mn.jf = I18N_DATETIMEPATTERNS_MONTH_DAY_FULL),
        (mn.lf = I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT),
        (mn.kf = I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM),
        (mn.wf = I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM),
        (mn.Ne = I18N_DATETIMEPATTERNS_DAY_ABBR),
        (O.Td = n.I18N_DATETIMESYMBOLS_ZERODIGIT),
        (ox.Pe = I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP),
        (ox.Te = I18N_NUMBERFORMATSYMBOLS_GROUP_SEP),
        (ox.pf = I18N_NUMBERFORMATSYMBOLS_PERCENT),
        (ox.Bf = I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT),
        (ox.sf = I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN),
        (ox.gf = I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN),
        (ox.Se = I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL),
        (ox.rf = I18N_NUMBERFORMATSYMBOLS_PERMILL),
        (ox.Ue = I18N_NUMBERFORMATSYMBOLS_INFINITY),
        (ox.mf = I18N_NUMBERFORMATSYMBOLS_NAN),
        (ox.Oe = I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN),
        (ox.uf = I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN),
        (ox.qf = I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN),
        (ox.Le = I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN),
        (ox.Qe = I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE),
        (mx.Ke = I18N_COMPACT_DECIMAL_SHORT_PATTERN),
        (mx.Je = I18N_COMPACT_DECIMAL_LONG_PATTERN));
      Fy();
    },
    Hy = ["initNotesBrowserAction"],
    Iy = n;
  Hy[0] in Iy || "undefined" == typeof Iy.execScript || Iy.execScript("var " + Hy[0]);
  for (var Jy; Hy.length && (Jy = Hy.shift()); )
    Hy.length || void 0 === Gy ? (Iy[Jy] && Iy[Jy] !== Object.prototype[Jy] ? (Iy = Iy[Jy]) : (Iy = Iy[Jy] = {})) : (Iy[Jy] = Gy);
  chrome.runtime.onMessage.addListener(function (a, b, c) {
    b = Ey;
    if (vd(a))
      switch (a.type) {
        case "authAvailability":
          cy(b.g, !a.value);
          b = b.h;
          a = !!a.value;
          b.B != a && ((b.B = a), b.u.qa());
          break;
        case "connectivity":
          Cy(b, !!a.value);
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
          Vx(b.g);
          b.s.stop();
          break;
        case "syncResponse":
          b.i || ((a = a.value), ws(S(), a.nodes || void 0, a.userInfo || void 0));
          break;
        case "updateModel":
          ss(b.h, a.value);
          break;
        case "uploadMediaResponse":
          a = a.value;
          (b = (c = a.blobId) ? b.h.g.s[c] || null : null) &&
            Mo(b) &&
            ((c = Mo(b)), a.mediaJson ? (c.update(a.mediaJson), Im(c, "luc")) : a.mediaError && Im(c, "luf"), Zn(b));
          break;
        case "urlChange":
          (b = b.h), b.i && Ih(b.i, a.value);
      }
  });
} catch (e) {
  _DumpException(e);
}
// Google Inc.
